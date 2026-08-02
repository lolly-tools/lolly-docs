// SPDX-License-Identifier: MPL-2.0
/**
 * The docs "Listen to this page" player (plans/docs-audio-listen.md §6).
 *
 * A fresh, small implementation styled after the app's neuro dock — deliberately
 * NOT an extraction of the web shell's music player (which is entangled with
 * tracks/atmosphere/radio state the docs never need). What IS shared with the
 * app: the butterchurn preset pack under /viz-presets/, and the driven-frame
 * idea proven by the audiogram export path — per-frame time-domain bytes are
 * injected into butterchurn's render call, so there is no AudioContext analyser
 * and no CORS plumbing anywhere in the static site.
 *
 * Delivered as /info/docs-player.js, bundled by docs/build.ts and imported
 * lazily on the first press of a page's Listen button. The attention model
 * (plan §1) shapes the behaviour here: narration anchors the ear, the opt-in
 * MilkDrop panel anchors the idle eye, and follow-along scrolling is default-on
 * and allowed to fight — politely — for the viewport. A user scroll wins
 * instantly; after ~4 s of scroll-idle the anchor re-engages and drifts back.
 * Reduced motion (the OS query) downgrades all of it to highlight-only.
 */
import { extractSpokenText, type SpokenBlock } from '../../scripts/lib/docs-spoken-text.ts';

interface Cue { blockId: string; start: number; end: number }
interface Track { slug: string; title: string; url: string; duration: number; bytes: number }

export interface OpenOpts {
  slug: string;
  title: string;
  /** Start playback immediately (the Listen press, or an auto-advance arrival). */
  autoplay?: boolean;
  /** The Listen button, so closing the dock can hand focus back. */
  trigger?: HTMLElement | null;
}

/** Playlist hand-off between pages — the ONLY thing this player persists.
 *  Session-scoped by design (plan §6.2): the docs site has no host.state, and
 *  this is chrome-transient, not tool state. */
const STORE_KEY = 'lolly-docs-listen';
/** The Follow toggle's opt-out, remembered for the session (plan §6.2). Every
 *  docs navigation is a fresh document, so "for the session" has to mean
 *  sessionStorage — in memory alone, auto-advance would silently re-engage
 *  follow-along on every page a reader had opted out of. */
const FOLLOW_KEY = 'lolly-docs-follow-off';

const SPEEDS = [1, 1.25, 1.5];
/** Scroll-idle grace before follow-along re-engages after a user scroll. */
const IDLE_MS = 4000;
/** butterchurn's AudioProcessor copies injected windows into arrays of exactly
 *  this length (numSamps 512, fftSize 1024) with a bare .set() — longer throws,
 *  shorter leaves the previous frame's tail. Same constant as the app's wrapper. */
const FFT_SIZE = 1024;

const reduced = (): boolean => matchMedia('(prefers-reduced-motion: reduce)').matches;

// ── viz.bin — the precomputed reactivity track (plan §4.4) ────────────────────
// Packed by scripts/build-docs-audio.ts in the audiogram's section order
// (tools/audiogram/hooks.js build()): after a self-describing header come the
// six per-frame scalar tracks, then the scope/wave rows butterchurn eats.
//
//   'LVIZ' (4 bytes) | u32le header length | JSON header | payload
//   header: { count, samples, fps, bands?, buckets? }
//   payload: rms, peak, bass, mid, treb, flux   (count bytes each, 0..255)
//            magnitude                          (count × bands, if bands)
//            peaks                              (buckets, if buckets)
//            wave                               (count × samples, 128 = silence)
//
// The docs pipeline writes no spectrum rows or overview buckets (its header
// carries neither field), so those sections read as zero bytes here and the
// meter falls back to the bass/mid/treble split; a future file that does carry
// them lights the spectrum path without a format bump.
//
// Speech has no beat grid — anything rhythmic here reads rms/flux, never a bpm.
interface VizTrack {
  count: number; samples: number; fps: number; bands: number;
  rms: Uint8Array; bass: Uint8Array; mid: Uint8Array; treb: Uint8Array;
  magnitude: Uint8Array; wave: Uint8Array;
}

function parseVizBin(buf: ArrayBuffer): VizTrack | null {
  try {
    const bytes = new Uint8Array(buf);
    if (bytes.length < 8 || String.fromCharCode(...bytes.subarray(0, 4)) !== 'LVIZ') return null;
    const headLen = new DataView(buf).getUint32(4, true);
    const head = JSON.parse(new TextDecoder().decode(bytes.subarray(8, 8 + headLen))) as
      { count: number; samples: number; fps: number; bands: number; buckets: number };
    const { count, samples, fps, bands, buckets } = head;
    if (!(count > 0) || !(fps > 0)) return null;
    let at = 8 + headLen;
    const take = (n: number): Uint8Array => { const s = bytes.subarray(at, at + n); at += n; return s; };
    const rms = take(count); take(count); /* peak — unused here */
    const bass = take(count); const mid = take(count); const treb = take(count); take(count); /* flux */
    const magnitude = take(count * (bands || 0));
    take(buckets || 0);
    const wave = take(count * (samples || 0));
    if (at > bytes.length) return null; // truncated file — treat as absent, not as garbage frames
    return { count, samples: samples || 0, fps, bands: bands || 0, rms, bass, mid, treb, magnitude, wave };
  } catch {
    return null;
  }
}

// ── Block map — narrated blockIds onto the live DOM ──────────────────────────
// cues.json speaks in the blockIds the spoken-text extraction minted from the
// markdown SOURCE. Headings carry the same ids in the built page by
// construction (headingId parity); paragraphs and list items don't, so they are
// re-derived here by re-running the same extraction over the page's published
// markdown twin (/info/<slug>.md) and walking the section's p/li elements in
// order, matched loosely by text. Synthetic blocks ("Code example omitted.")
// have no DOM twin and simply stay unmapped — the highlight skips them.
function buildBlockMap(blocks: SpokenBlock[]): Map<string, HTMLElement> {
  const root = document.querySelector<HTMLElement>('.docs-content') ?? document.body;
  const map = new Map<string, HTMLElement>();
  const flow = Array.from(root.querySelectorAll<HTMLElement>('h1,h2,h3,h4,p,li'));
  const norm = (s: string): string => s.toLowerCase().replace(/\s+/g, ' ').trim();
  let cursor = 0;
  for (const b of blocks) {
    if (b.kind === 'heading') {
      const el = document.getElementById(b.blockId);
      if (el && root.contains(el)) {
        map.set(b.blockId, el);
        const i = flow.indexOf(el);
        if (i >= 0) cursor = i + 1;
      }
      continue;
    }
    const want = norm(b.text).slice(0, 40);
    if (!want) continue;
    // Look a bounded distance ahead so one unmatched block can't derail the
    // whole rest of the section; stop at the next heading — that's a new section.
    for (let j = cursor; j < Math.min(cursor + 14, flow.length); j++) {
      const el = flow[j]!;
      if (/^H[1-4]$/.test(el.tagName)) break;
      const got = norm(el.textContent ?? '');
      if (got.slice(0, 40) === want || got.startsWith(want.slice(0, 24))) {
        map.set(b.blockId, el);
        cursor = j + 1;
        break;
      }
    }
  }
  return map;
}

// ── Small DOM/format helpers ─────────────────────────────────────────────────

function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls: string, html = ''): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  e.className = cls;
  if (html) e.innerHTML = html;
  return e;
}

function fmtTime(s: number): string {
  const m = Math.floor(s / 60);
  return `${m}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
}

const I = {
  play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="6 3 21 12 6 21 6 3"/></svg>',
  pause: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="5" y="3" width="5" height="18" rx="1"/><rect x="14" y="3" width="5" height="18" rx="1"/></svg>',
  prev: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="19 20 9 12 19 4 19 20"/><rect x="4" y="4" width="3" height="16" rx="1"/></svg>',
  next: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5 4 15 12 5 20 5 4"/><rect x="17" y="4" width="3" height="16" rx="1"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  follow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>',
  viz: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="4" y1="14" x2="4" y2="20"/><line x1="9" y1="8" x2="9" y2="20"/><line x1="14" y1="4" x2="14" y2="20"/><line x1="19" y1="11" x2="19" y2="20"/></svg>',
  mini: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><polyline points="6 10 12 16 18 10"/></svg>',
};

// ── The player ───────────────────────────────────────────────────────────────

let active: Player | null = null;

/** Entry point the pages' Listen loader calls. A second press focuses the
 *  existing dock rather than stacking a twin. */
export async function openDocsPlayer(opts: OpenOpts): Promise<void> {
  if (active) {
    if (opts.autoplay) void active.play();
    active.focus();
    return;
  }
  const p = new Player(opts);
  active = p;
  await p.init();
}

class Player {
  private readonly slug: string;
  private readonly title: string;
  private readonly trigger: HTMLElement | null;
  private readonly autoplay: boolean;

  private audio = new Audio();
  private playlist: Track[] = [];
  private cues: Cue[] = [];
  private cueIdx = -1;
  private blockMap = new Map<string, HTMLElement>();
  private blockText = new Map<string, string>();
  private viz: VizTrack | null = null;

  // Follow-along state (plan §6.2). `followOff` is the dock toggle — the
  // session opt-out, mirrored to sessionStorage (FOLLOW_KEY) so it survives
  // prev/next and auto-advance navigations. `suspended` is the instant,
  // temporary loss to a user scroll.
  private followOff = false;
  private suspended = false;
  private idleTimer: ReturnType<typeof setTimeout> | null = null;
  /** Scroll events before this timestamp are our own drift, not the user's. */
  private autoUntil = 0;

  private speedIdx = 0;
  private highlighted: HTMLElement | null = null;
  private meterRaf = 0;
  private closed = false;

  // Dock elements
  private dock!: HTMLElement;
  private captionEl!: HTMLElement;
  private playBtn!: HTMLButtonElement;
  private followBtn!: HTMLButtonElement;
  private vizBtn!: HTMLButtonElement;
  private speedBtn!: HTMLButtonElement;
  private timeEl!: HTMLElement;
  private seekEl!: HTMLInputElement;
  private meterEl!: HTMLCanvasElement;
  private vizPanel!: HTMLElement;
  private vizCanvas!: HTMLCanvasElement;
  private seeking = false;

  // MilkDrop — mounted only when the panel is opened, torn down with the dock.
  private vizHandle: { renderFrame(t: number): void; resize(): void; destroy(): void } | null = null;
  private vizLoading = false;

  private cleanups: Array<() => void> = [];

  constructor(opts: OpenOpts) {
    this.slug = opts.slug;
    this.title = opts.title;
    this.trigger = opts.trigger ?? null;
    this.autoplay = !!opts.autoplay;
    try { this.followOff = sessionStorage.getItem(FOLLOW_KEY) === '1'; } catch { /* storage may be disabled */ }
  }

  async init(): Promise<void> {
    // The stylesheet rides beside the bundle; link it before the dock appears
    // so the first paint is styled.
    if (!document.querySelector('link[href="/info/docs-player.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/info/docs-player.css';
      document.head.appendChild(link);
    }

    const index = await fetch('/info/audio-index.json').then((r) => (r.ok ? r.json() : [])).catch(() => []) as Track[];
    this.playlist = Array.isArray(index) ? index : [];
    const track = this.playlist.find((t) => t.slug === this.slug);
    if (!track) {
      // The button only renders when audio exists — but never trust that from
      // here, and never fail silently when the index disagrees with the page.
      console.warn(`docs player: no narration for "${this.slug}" in /info/audio-index.json`);
      active = null;
      return;
    }

    // The playlist hand-off that opened this page is consumed now.
    try { sessionStorage.removeItem(STORE_KEY); } catch { /* storage may be disabled */ }

    this.audio.src = track.url;
    this.audio.preload = 'auto';

    this.buildDock(track);
    this.wireAudio();
    this.wireFollowAlong();
    this.wireMediaSession(track);
    this.loadSidecars(track);

    document.documentElement.classList.add('ldp-open');
    if (this.autoplay) void this.play();
    this.playBtn.focus();
  }

  focus(): void { this.playBtn?.focus(); }

  async play(): Promise<void> {
    // Autoplay after a cross-page auto-advance can be refused — the dock then
    // just sits paused with everything loaded, one press from resuming.
    try { await this.audio.play(); } catch { /* blocked: stay paused, visibly */ }
  }

  // ── Dock construction ──────────────────────────────────────────────────────

  private buildDock(track: Track): void {
    const dock = el('aside', 'ldp');
    dock.setAttribute('role', 'region');
    dock.setAttribute('aria-label', `Listen: ${this.title}`);

    this.vizPanel = el('div', 'ldp-viz');
    this.vizPanel.hidden = true;
    this.vizCanvas = el('canvas', 'ldp-viz-canvas');
    this.vizPanel.appendChild(this.vizCanvas);

    const top = el('div', 'ldp-top');
    const title = el('span', 'ldp-title');
    title.textContent = this.title;
    this.followBtn = el('button', 'ldp-follow', I.follow);
    this.followBtn.title = 'Follow along';
    this.followBtn.setAttribute('aria-label', 'Follow along with the narration');
    this.followBtn.setAttribute('aria-pressed', this.followOff ? 'false' : 'true');
    this.vizBtn = el('button', 'ldp-vizbtn', I.viz);
    this.vizBtn.title = 'Visualizer';
    this.vizBtn.setAttribute('aria-label', 'Show visualizer');
    this.vizBtn.setAttribute('aria-pressed', 'false');
    const miniBtn = el('button', 'ldp-minbtn', I.mini);
    miniBtn.title = 'Collapse';
    miniBtn.setAttribute('aria-label', 'Collapse player');
    const closeBtn = el('button', 'ldp-close', I.close);
    closeBtn.setAttribute('aria-label', 'Close player');
    top.append(title, this.followBtn, this.vizBtn, miniBtn, closeBtn);

    this.captionEl = el('div', 'ldp-caption');
    // Narration is the page read aloud — announcing every caption to a screen
    // reader would double-speak it, so the live region stays off.
    this.captionEl.setAttribute('aria-live', 'off');

    const row = el('div', 'ldp-row');
    const prevBtn = el('button', 'ldp-prev', I.prev);
    prevBtn.setAttribute('aria-label', 'Previous page narration');
    this.playBtn = el('button', 'ldp-play', I.play);
    this.playBtn.setAttribute('aria-label', 'Play');
    const nextBtn = el('button', 'ldp-next', I.next);
    nextBtn.setAttribute('aria-label', 'Next page narration');
    // No dead controls: at the playlist's edges the step that goes nowhere is
    // disabled, not left clickable. At launch the playlist is a handful of
    // pages, so the edges are most of it.
    const at = this.playlist.findIndex((t) => t.slug === this.slug);
    prevBtn.disabled = at <= 0;
    nextBtn.disabled = at < 0 || at >= this.playlist.length - 1;
    this.meterEl = el('canvas', 'ldp-meter');
    this.timeEl = el('span', 'ldp-time');
    this.timeEl.textContent = `0:00 / ${fmtTime(track.duration || 0)}`;
    this.speedBtn = el('button', 'ldp-speed');
    this.speedBtn.textContent = '1×';
    this.speedBtn.setAttribute('aria-label', 'Playback speed');
    row.append(prevBtn, this.playBtn, nextBtn, this.meterEl, this.timeEl, this.speedBtn);

    this.seekEl = el('input', 'ldp-seek');
    this.seekEl.type = 'range';
    this.seekEl.min = '0';
    this.seekEl.max = String(track.duration || 0);
    this.seekEl.step = '0.1';
    this.seekEl.value = '0';
    this.seekEl.setAttribute('aria-label', 'Seek');

    dock.append(this.vizPanel, top, this.captionEl, row, this.seekEl);
    document.body.appendChild(dock);
    this.dock = dock;

    // Controls
    this.playBtn.addEventListener('click', () => { if (this.audio.paused) void this.play(); else this.audio.pause(); });
    prevBtn.addEventListener('click', () => this.go(-1));
    nextBtn.addEventListener('click', () => this.go(1));
    this.speedBtn.addEventListener('click', () => {
      this.speedIdx = (this.speedIdx + 1) % SPEEDS.length;
      this.audio.playbackRate = SPEEDS[this.speedIdx]!;
      this.speedBtn.textContent = `${SPEEDS[this.speedIdx]}×`;
    });
    this.followBtn.addEventListener('click', () => this.setFollow(this.followOff));
    miniBtn.addEventListener('click', () => {
      const mini = dock.classList.toggle('ldp-mini');
      miniBtn.setAttribute('aria-label', mini ? 'Expand player' : 'Collapse player');
      miniBtn.style.transform = mini ? 'rotate(180deg)' : '';
      // The collapsed pill hides the viz by CSS, but the rAF loop keys on the
      // `hidden` attribute — set it too, or butterchurn keeps burning GPU
      // frames nobody can see. Collapsing closes the panel (opt-in rule:
      // expanding again means pressing the viz button again, never auto-open).
      if (mini && this.vizHandle && !this.vizPanel.hidden) this.toggleViz();
    });
    closeBtn.addEventListener('click', () => this.close());
    this.vizBtn.addEventListener('click', () => this.toggleViz());

    // Reduced motion: highlight-only, unconditionally — no scrolling, no viz.
    // Checked live so flipping the OS setting mid-session is honoured.
    if (reduced()) this.vizBtn.hidden = true;

    this.seekEl.addEventListener('pointerdown', () => { this.seeking = true; });
    this.seekEl.addEventListener('change', () => {
      this.audio.currentTime = Number(this.seekEl.value) || 0;
      this.seeking = false;
    });
    this.seekEl.addEventListener('input', () => {
      this.timeEl.textContent = `${fmtTime(Number(this.seekEl.value) || 0)} / ${fmtTime(this.audio.duration || track.duration || 0)}`;
    });

    // Escape closes (house rule). Bound on the document so the dock need not
    // hold focus; ignored while a text input elsewhere has it.
    const onKey = (e: KeyboardEvent): void => {
      if (e.key !== 'Escape') return;
      const t = e.target as HTMLElement | null;
      if (t && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) && !this.dock.contains(t)) return;
      this.close();
    };
    document.addEventListener('keydown', onKey);
    this.cleanups.push(() => document.removeEventListener('keydown', onKey));

    // Chapter seek: while the player is open, clicking a heading with a cue
    // jumps the narration there (plan §6.2).
    const onDocClick = (e: MouseEvent): void => {
      const h = (e.target as HTMLElement | null)?.closest?.('h1[id],h2[id],h3[id],h4[id]');
      if (h) {
        const cue = this.cues.find((c) => c.blockId === h.id);
        if (cue) { this.audio.currentTime = cue.start; void this.play(); }
        return;
      }
      // Clicking the highlight re-engages follow-along immediately.
      if (this.highlighted && (e.target as HTMLElement | null)?.closest?.('.ldp-here')) {
        this.suspended = false;
        this.setFollow(true);
        this.drift();
      }
    };
    document.addEventListener('click', onDocClick);
    this.cleanups.push(() => document.removeEventListener('click', onDocClick));
  }

  // ── Audio wiring ───────────────────────────────────────────────────────────

  private wireAudio(): void {
    const a = this.audio;
    a.addEventListener('play', () => { this.playBtn.innerHTML = I.pause; this.playBtn.setAttribute('aria-label', 'Pause'); this.startMeter(); });
    a.addEventListener('pause', () => { this.playBtn.innerHTML = I.play; this.playBtn.setAttribute('aria-label', 'Play'); });
    a.addEventListener('timeupdate', () => this.onTime());
    a.addEventListener('ended', () => this.go(1, true));
    a.addEventListener('durationchange', () => { if (Number.isFinite(a.duration)) this.seekEl.max = String(a.duration); });
    a.addEventListener('seeked', () => { this.cueIdx = -1; this.onTime(); });
  }

  private onTime(): void {
    const t = this.audio.currentTime;
    if (!this.seeking) {
      this.seekEl.value = String(t);
      this.timeEl.textContent = `${fmtTime(t)} / ${fmtTime(this.audio.duration || 0)}`;
    }
    if (!this.cues.length) return;
    // Cues are ordered; the common case is "still in the same block" or "the
    // next one", so scan forward from the cached index instead of searching.
    let i = this.cueIdx;
    if (i < 0 || i >= this.cues.length || t < this.cues[i]!.start) i = 0;
    while (i + 1 < this.cues.length && t >= this.cues[i + 1]!.start) i++;
    const inCue = i < this.cues.length && t >= this.cues[i]!.start && t < this.cues[i]!.end + 0.25;
    if (i !== this.cueIdx) {
      this.cueIdx = i;
      const cue = this.cues[i]!;
      this.captionEl.textContent = this.blockText.get(cue.blockId) ?? '';
      this.highlight(cue.blockId);
    } else if (!inCue && this.highlighted) {
      // Inter-block gap: keep the caption, the highlight stays where it was.
    }
  }

  private highlight(blockId: string): void {
    const elx = this.blockMap.get(blockId) ?? null;
    if (this.highlighted && this.highlighted !== elx) this.highlighted.classList.remove('ldp-here');
    this.highlighted = elx;
    if (!elx) return;
    elx.classList.add('ldp-here');
    if (this.following() && !this.audio.paused) this.drift();
  }

  // ── Follow-along (plan §6.2 — the composed mechanic) ──────────────────────

  /** Follow-along is live: default-on, not opted out, not mid-suspension, and
   *  never under reduced motion (highlight-only there, unconditionally). */
  private following(): boolean {
    return !this.followOff && !this.suspended && !reduced();
  }

  private setFollow(on: boolean): void {
    this.followOff = !on;
    try {
      if (on) sessionStorage.removeItem(FOLLOW_KEY);
      else sessionStorage.setItem(FOLLOW_KEY, '1');
    } catch { /* storage disabled: the opt-out lasts this page only */ }
    this.followBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
    if (on) { this.suspended = false; this.drift(); }
  }

  private drift(): void {
    if (!this.following() || !this.highlighted) return;
    // Our own scroll must not read as the user's. The guard window outlives the
    // smooth scroll for any plausible distance; wheel/touch/key events cut
    // through it regardless, so a real gesture is never mistaken for drift.
    this.autoUntil = performance.now() + 1600;
    this.highlighted.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'center' });
  }

  private wireFollowAlong(): void {
    // The reader's scroll wins instantly: any user-initiated movement suspends
    // follow-along mid-gesture, and after ~4 s of idle the anchor re-engages on
    // its own and gently returns to the narrated block. That return is the
    // anchoring working, not the page misbehaving (plan §1).
    const userScroll = (): void => {
      if (reduced() || this.followOff) return;
      this.suspended = true;
      // Halting an in-flight smooth drift so the viewport is never fought over
      // mid-gesture: an instant scroll to the current position cancels it. Only
      // inside our own drift window, though — outside it there is nothing of
      // ours to cancel, and an unconditional scrollTo would kill the browser's
      // native momentum scrolling on every wheel/touch tick instead.
      if (performance.now() <= this.autoUntil) {
        this.autoUntil = 0;
        window.scrollTo({ top: window.scrollY, behavior: 'auto' });
      }
      if (this.idleTimer) clearTimeout(this.idleTimer);
      this.idleTimer = setTimeout(() => {
        this.suspended = false;
        if (!this.audio.paused) this.drift();
      }, IDLE_MS);
    };
    const onWheel = (): void => userScroll();
    const onTouch = (): void => userScroll();
    const onKeyNav = (e: KeyboardEvent): void => {
      if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(e.key)
        && !this.dock.contains(e.target as Node)) userScroll();
    };
    // Scrollbar drags produce only scroll events; anything outside our own
    // drift window is treated as the user's hand.
    const onScroll = (): void => { if (performance.now() > this.autoUntil) userScroll(); };
    addEventListener('wheel', onWheel, { passive: true });
    addEventListener('touchmove', onTouch, { passive: true });
    addEventListener('keydown', onKeyNav);
    addEventListener('scroll', onScroll, { passive: true });
    this.cleanups.push(() => {
      removeEventListener('wheel', onWheel);
      removeEventListener('touchmove', onTouch);
      removeEventListener('keydown', onKeyNav);
      removeEventListener('scroll', onScroll);
      if (this.idleTimer) clearTimeout(this.idleTimer);
    });
  }

  // ── Sidecars: cues, block map, viz track ──────────────────────────────────

  private loadSidecars(track: Track): void {
    const base = track.url.replace(/\/[^/]*$/, '');
    void fetch(`${base}/cues.json`).then((r) => (r.ok ? r.json() : null)).then((j: { blocks?: Cue[] } | null) => {
      if (j?.blocks?.length) { this.cues = j.blocks; this.cueIdx = -1; this.onTime(); }
    }).catch(() => { /* no cues: playback without captions/highlight */ });

    // The page's markdown twin re-yields the narrated blocks — ids for the DOM
    // map, text for the caption line.
    void fetch(`/info/${this.slug}.md`).then((r) => (r.ok ? r.text() : null)).then((md) => {
      if (!md || this.closed) return;
      const blocks = extractSpokenText(md);
      for (const b of blocks) this.blockText.set(b.blockId, b.text);
      this.blockMap = buildBlockMap(blocks);
    }).catch(() => { /* unmapped: dock still plays, captions may be empty */ });

    void fetch(`${base}/viz.bin`).then((r) => (r.ok ? r.arrayBuffer() : null)).then((buf) => {
      if (buf && !this.closed) { this.viz = parseVizBin(buf); this.drawMeter(); }
    }).catch(() => { /* no reactivity track: flat meter, viz declines politely */ });
  }

  // ── Meter bars — drawn from the packed frames, no live analyser ───────────

  private frameIndex(): number {
    const v = this.viz;
    if (!v) return 0;
    return Math.min(v.count - 1, Math.max(0, Math.floor(this.audio.currentTime * v.fps)));
  }

  private startMeter(): void {
    if (this.meterRaf) return;
    const step = (): void => {
      this.meterRaf = 0;
      if (this.closed) return;
      this.drawMeter();
      if (this.vizHandle && !this.vizPanel.hidden) this.vizHandle.renderFrame(1 / 60);
      if (!this.audio.paused || (this.vizHandle && !this.vizPanel.hidden)) {
        this.meterRaf = requestAnimationFrame(step);
      }
    };
    this.meterRaf = requestAnimationFrame(step);
  }

  private drawMeter(): void {
    const c = this.meterEl;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const w = Math.max(1, Math.round(c.clientWidth * dpr));
    const h = Math.max(1, Math.round(c.clientHeight * dpr));
    if (c.width !== w) c.width = w;
    if (c.height !== h) c.height = h;
    ctx.clearRect(0, 0, w, h);
    const v = this.viz;
    const BARS = 16;
    const gap = Math.max(1, Math.round(dpr));
    const bw = (w - gap * (BARS - 1)) / BARS;
    ctx.fillStyle = document.documentElement.classList.contains('dark') ? '#8db8ea' : '#2c5c96';
    const f = this.frameIndex();
    for (let i = 0; i < BARS; i++) {
      let level = 0.08;
      if (v) {
        if (v.bands > 0) {
          // Resample the frame's spectrum row down to the bar count.
          const b0 = Math.floor((i / BARS) * v.bands);
          const b1 = Math.max(b0 + 1, Math.floor(((i + 1) / BARS) * v.bands));
          let sum = 0;
          for (let b = b0; b < b1; b++) sum += v.magnitude[f * v.bands + b] ?? 0;
          level = sum / (b1 - b0) / 255;
        } else {
          // No spectrum rows: a bass/mid/treble split across the bars.
          const t = [v.bass, v.mid, v.treb][Math.floor((i / BARS) * 3)]!;
          level = (t[f] ?? 0) / 255;
        }
        if (this.audio.paused) level *= 0.35;
      }
      const bh = Math.max(dpr, level * h);
      ctx.globalAlpha = 0.4 + 0.6 * level;
      ctx.fillRect(i * (bw + gap), h - bh, bw, bh);
    }
    ctx.globalAlpha = 1;
  }

  // ── MilkDrop panel — opt-in, driven-mode frames from viz.bin ──────────────

  private toggleViz(): void {
    if (reduced()) return; // suppressed under reduced motion, unconditionally
    const opening = this.vizPanel.hidden;
    this.vizPanel.hidden = !opening;
    this.vizBtn.setAttribute('aria-pressed', opening ? 'true' : 'false');
    this.vizBtn.setAttribute('aria-label', opening ? 'Hide visualizer' : 'Show visualizer');
    if (opening) {
      void this.mountViz();
      this.startMeter(); // the shared rAF loop drives both surfaces
    }
  }

  private vizNote(msg: string): void {
    let n = this.vizPanel.querySelector<HTMLElement>('.ldp-viz-note');
    if (!n) { n = el('div', 'ldp-viz-note'); this.vizPanel.appendChild(n); }
    n.textContent = msg;
  }

  private async mountViz(): Promise<void> {
    if (this.vizHandle || this.vizLoading) { this.vizHandle?.resize(); return; }
    this.vizLoading = true;
    try {
      // butterchurn needs WebGL2, full stop. Probe on the real canvas so a
      // machine that can't do it gets one honest line instead of a black panel.
      const gl = this.vizCanvas.getContext('webgl2');
      if (!gl) { this.vizNote('This browser cannot run the visualizer (no WebGL2).'); return; }

      // The library arrives only now — its own chunk, fetched on the first
      // panel open, never with the player. Presets are the app's shared pack.
      const mod: unknown = await import('butterchurn');
      const bc = resolveButterchurn(mod);
      const preset = await pickPreset();
      if (!preset) { this.vizNote('Visualizer presets are not available on this site.'); return; }

      const dpr = Math.min(devicePixelRatio || 1, 1.5);
      const box = (): { w: number; h: number } => {
        const r = this.vizCanvas.getBoundingClientRect();
        return { w: Math.max(1, Math.round(r.width * dpr)), h: Math.max(1, Math.round(r.height * dpr)) };
      };
      const size = box();
      this.vizCanvas.width = size.w;
      this.vizCanvas.height = size.h;
      // No AudioContext at all: frames are injected per render call, which is
      // the audiogram-proven driven path — deterministic and CORS-free.
      const viz = bc.createVisualizer(undefined as unknown as BaseAudioContext, this.vizCanvas, {
        width: size.w, height: size.h, pixelRatio: 1, meshWidth: 40, meshHeight: 30,
      });
      // Never a 0-second blend: loadPreset always starts a cross-fade, and a
      // zero duration divides by zero into a renderer wedged on NaN.
      viz.loadPreset(preset, 0.05);

      const buf = {
        c: new Uint8Array(FFT_SIZE).fill(128),
        l: new Uint8Array(FFT_SIZE).fill(128),
        r: new Uint8Array(FFT_SIZE).fill(128),
      };
      const fill = (dst: Uint8Array, src: Uint8Array | null): void => {
        if (!src || !src.length) { dst.fill(128); return; }
        if (src.length >= FFT_SIZE) dst.set(src.subarray(0, FFT_SIZE));
        else { dst.fill(128); dst.set(src); }
      };
      const render = viz.render.bind(viz) as (o?: {
        audioLevels?: { timeByteArray: Uint8Array; timeByteArrayL: Uint8Array; timeByteArrayR: Uint8Array };
        elapsedTime?: number;
      }) => void;
      let dead = false;
      this.vizHandle = {
        renderFrame: (elapsed: number): void => {
          if (dead) return;
          const v = this.viz;
          const wave = v && v.samples > 0
            ? v.wave.subarray(this.frameIndex() * v.samples, this.frameIndex() * v.samples + v.samples)
            : null;
          fill(buf.c, wave); fill(buf.l, wave); fill(buf.r, wave);
          try {
            render({ audioLevels: { timeByteArray: buf.c, timeByteArrayL: buf.l, timeByteArrayR: buf.r }, elapsedTime: elapsed });
          } catch {
            // One strike: a throwing preset throws every frame. Stand down and
            // say so, instead of a silent black panel.
            dead = true;
            this.vizNote('The visualizer stopped (renderer error).');
          }
        },
        resize: (): void => {
          const { w, h } = box();
          this.vizCanvas.width = w;
          this.vizCanvas.height = h;
          (viz as { setRendererSize?: (w: number, h: number, o: { pixelRatio: number }) => void })
            .setRendererSize?.(w, h, { pixelRatio: 1 });
        },
        destroy: (): void => { dead = true; },
      };
      const onResize = (): void => this.vizHandle?.resize();
      addEventListener('resize', onResize);
      this.cleanups.push(() => removeEventListener('resize', onResize));
      this.vizHandle.renderFrame(1 / 60); // first frame even while paused
    } catch {
      this.vizNote('The visualizer could not load.');
    } finally {
      this.vizLoading = false;
    }
  }

  // ── Playlist: prev/next + auto-advance over audio-index.json ─────────────

  private go(delta: number, fromEnded = false): void {
    const i = this.playlist.findIndex((t) => t.slug === this.slug);
    const next = i >= 0 ? this.playlist[i + delta] : undefined;
    if (!next) {
      if (fromEnded) return; // last track: stop, don't wrap
      return;
    }
    // Cross-page hand-off: the next page's Listen loader reads this and opens
    // the player without a press. Play state carries over.
    try {
      sessionStorage.setItem(STORE_KEY, JSON.stringify({ slug: next.slug, auto: fromEnded || !this.audio.paused }));
    } catch { /* storage disabled: the next page just shows its button */ }
    location.href = next.slug === 'index' ? '/info/index.html' : `/info/${next.slug}.html`;
  }

  // ── Media Session — OS media keys + lock-screen transport ─────────────────

  private wireMediaSession(track: Track): void {
    if (!('mediaSession' in navigator)) return;
    const ms = navigator.mediaSession;
    try {
      ms.metadata = new MediaMetadata({
        title: this.title,
        artist: 'Lolly docs',
        album: 'lolly.tools/info',
        // index (the landing narration) has no per-page OG card — fall back to
        // the site card rather than a silently-404ing lock-screen artwork.
        artwork: [{ src: this.slug === 'index' ? '/info/og.png' : `/info/og/${this.slug}.png`, sizes: '1200x630', type: 'image/png' }],
      });
      ms.setActionHandler('play', () => void this.play());
      ms.setActionHandler('pause', () => this.audio.pause());
      ms.setActionHandler('seekbackward', (d) => { this.audio.currentTime = Math.max(0, this.audio.currentTime - (d.seekOffset ?? 10)); });
      ms.setActionHandler('seekforward', (d) => { this.audio.currentTime = this.audio.currentTime + (d.seekOffset ?? 10); });
      ms.setActionHandler('seekto', (d) => { if (d.seekTime != null) this.audio.currentTime = d.seekTime; });
      ms.setActionHandler('previoustrack', () => this.go(-1));
      ms.setActionHandler('nexttrack', () => this.go(1));
    } catch { /* partial Media Session support: playback is unaffected */ }
  }

  // ── Teardown ──────────────────────────────────────────────────────────────

  close(): void {
    if (this.closed) return;
    this.closed = true;
    this.audio.pause();
    this.audio.src = '';
    if (this.meterRaf) cancelAnimationFrame(this.meterRaf);
    this.vizHandle?.destroy();
    for (const fn of this.cleanups.splice(0)) fn();
    this.highlighted?.classList.remove('ldp-here');
    document.documentElement.classList.remove('ldp-open');
    this.dock?.remove();
    if ('mediaSession' in navigator) {
      try { navigator.mediaSession.metadata = null; } catch { /* fine */ }
    }
    active = null;
    this.trigger?.focus();
  }
}

// ── butterchurn module unwrapping ────────────────────────────────────────────
// The package ships a webpack UMD bundle whose export nesting depends on the
// toolchain's interop — sometimes `default`, sometimes `default.default`. Walk
// until something has createVisualizer instead of guessing a depth.
interface Butterchurn {
  createVisualizer(ctx: BaseAudioContext, canvas: HTMLCanvasElement, opts: {
    width: number; height: number; pixelRatio: number; meshWidth: number; meshHeight: number;
  }): {
    loadPreset(preset: unknown, blendSeconds: number): void;
    render(opts?: unknown): void;
  };
}

function resolveButterchurn(mod: unknown): Butterchurn {
  let cur = mod;
  for (let depth = 0; depth < 4; depth++) {
    if (cur && typeof (cur as Butterchurn).createVisualizer === 'function') return cur as Butterchurn;
    const next = (cur as { default?: unknown } | null)?.default;
    if (!next || next === cur) break;
    cur = next;
  }
  throw new Error('butterchurn loaded but exposes no createVisualizer');
}

/** A preset from the app's shared pack (/viz-presets/): first popular tier-1
 *  entry that the app's own curation marked ok, else the first entry at all. */
async function pickPreset(): Promise<unknown | null> {
  try {
    const index = await fetch('/viz-presets/index.json').then((r) => (r.ok ? r.json() : null)) as
      Array<{ id: string; popular?: boolean; tier?: number; ok?: boolean }> | null;
    if (!index?.length) return null;
    const entry = index.find((e) => e.ok !== false && e.tier === 1 && e.popular) ?? index[0]!;
    return await fetch(`/viz-presets/${entry.id}.json`).then((r) => (r.ok ? r.json() : null));
  } catch {
    return null;
  }
}
