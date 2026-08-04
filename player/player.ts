// SPDX-License-Identifier: MPL-2.0
/**
 * The docs "Listen to this page" player (plans/40-docs-audio-listen.md §6).
 *
 * A fresh, small implementation styled after the app's neuro dock — deliberately
 * NOT an extraction of the web shell's music player (which is entangled with
 * tracks/atmosphere/radio state the docs never need). What IS shared with the
 * app: the butterchurn preset pack under /viz-presets/. The meter and the viz
 * are fed by a live AnalyserNode tapped off the dock's own <audio> element
 * (plan §4.4, decision 2026-08-02 — a precomputed reactivity file measured
 * 27.5 MB per page, so the driven-frame path stayed with the audiogram's
 * exported video, where determinism earns it). The audio is same-origin, so
 * the MediaElementSource tap involves no CORS plumbing and no taint.
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
// Type-only: the DSP itself arrives via a dynamic import (its own lazy chunk,
// same pattern as butterchurn) the first time a layer is turned on.
import type { AmbienceKind } from '../../shells/web/src/lib/ambience-dsp.ts';

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
/** The chosen MilkDrop preset, remembered like Follow so the vibe survives
 *  auto-advance (plan §2). Holds the /viz-presets/ entry id. */
const VIZ_KEY = 'lolly-docs-viz-preset';
/** Atmosphere levels + master, session-scoped like everything else here (plan
 *  §2: levels ride the hand-off; buffers re-bake on the next page). */
const ATMO_KEY = 'lolly-docs-atmo';

const SPEEDS = [1, 1.25, 1.5, 2, 2.5];
/** Default 1.25× (Andy, 2026-08-04, revised down from 1.5× the same day): the
 *  narration is synthesized at a slow, careful 0.8 pace, so the base render is
 *  already gentle and needs a nudge rather than a shove. 1.25× is the default a
 *  first-time listener meets; the range still reaches 2.5× for fast listeners and
 *  drops to 1× for a slower pace. A first-time listener should not have to reach
 *  for the control at all, which is the whole argument for moving the default —
 *  1.5× is a preference, not a starting point. Pitch is preserved at every rate
 *  (this.audio.preservesPitch, set on init), so a different pace stays smooth —
 *  never a downgrade in quality, just a change of speed. */
const SPEED_DEFAULT_IDX = 1;
const SPEED_KEY = 'lolly-docs-speed';
/** Preset switch cross-fade — the app's BLEND_SECONDS (lib/butterchurn-viz.ts). */
const PRESET_BLEND_S = 2.2;
/** Default level for the ambience master and a freshly toggled layer — the
 *  app's DEFAULT_LEVEL (lib/atmosphere.ts): modest, so narration always reads. */
const ATMO_DEFAULT = 0.35;

// The ambience layer rows, copied (NOT imported) from the app's
// shells/web/src/lib/atmosphere.ts ATMOSPHERE_LAYERS — that module owns web
// shell state (localStorage mirror, sfx mute, neurospicy context) the docs
// pages must not drag in. Ids are AmbienceKind values the bundled DSP bakes;
// labels and the Outside/Places/Noise grouping mirror the app so the panel
// reads the same in both places. English literals like the rest of the dock —
// flagged for the docs i18n pass.
type AtmoGroup = 'Outside' | 'Places' | 'Noise';
const ATMO_GROUPS: readonly AtmoGroup[] = ['Outside', 'Places', 'Noise'];
const ATMO_LAYERS: ReadonlyArray<{ id: AmbienceKind; label: string; group: AtmoGroup }> = [
  { id: 'rain', label: 'Rain', group: 'Outside' },
  { id: 'thunder', label: 'Thunder', group: 'Outside' },
  { id: 'waves', label: 'Ocean waves', group: 'Outside' },
  { id: 'stream', label: 'Stream', group: 'Outside' },
  { id: 'wind', label: 'Wind', group: 'Outside' },
  { id: 'birds', label: 'Birdsong', group: 'Outside' },
  { id: 'night', label: 'Crickets', group: 'Outside' },
  { id: 'chimes', label: 'Windchimes', group: 'Outside' },
  { id: 'city', label: 'Busy street', group: 'Places' },
  { id: 'train', label: 'Train', group: 'Places' },
  { id: 'keyboard', label: 'Keyboard', group: 'Places' },
  { id: 'fire', label: 'Fireplace', group: 'Places' },
  { id: 'white', label: 'White noise', group: 'Noise' },
  { id: 'pink', label: 'Pink noise', group: 'Noise' },
  { id: 'brown', label: 'Brown noise', group: 'Noise' },
];
/** Scroll-idle grace before follow-along re-engages after a user scroll. */
const IDLE_MS = 4000;

const reduced = (): boolean => matchMedia('(prefers-reduced-motion: reduce)').matches;

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
  // A streamed audio element reports duration Infinity until the metadata
  // lands; without this guard Math.floor(Infinity % 60) is NaN and the readout
  // shows the literal "Infinity:NaN" (Andy, 2026-08-04).
  if (!Number.isFinite(s) || s < 0) s = 0;
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
  fs: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M16 3h3a2 2 0 0 1 2 2v3"/><path d="M8 21H5a2 2 0 0 1-2-2v-3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>',
  fsExit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M16 3v3a2 2 0 0 0 2 2h3"/><path d="M8 21v-3a2 2 0 0 0-2-2H3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/></svg>',
  atmo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M3 8c2-2.5 4-2.5 6 0s4 2.5 6 0 4-2.5 6 0"/><path d="M3 16c2-2.5 4-2.5 6 0s4 2.5 6 0 4-2.5 6 0"/></svg>',
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

  // preservesPitch keeps the voice natural at every playback rate: slowing down
  // for a gentler learning pace (or speeding up) changes speed, never pitch, so
  // it is a pace choice and not a quality downgrade. Browsers default this true,
  // but we set it explicitly so the promise holds regardless of engine defaults.
  private audio = Object.assign(new Audio(), { preservesPitch: true });
  private playlist: Track[] = [];
  private cues: Cue[] = [];
  private cueIdx = -1;
  private blockMap = new Map<string, HTMLElement>();
  private blockText = new Map<string, string>();

  // The live audio tap (plan §4.4, decision 2026-08-02): one AudioContext with
  // a MediaElementSource fanned out to the destination (a tapped element mutes
  // its own direct output — the reconnect keeps the narration audible) and an
  // AnalyserNode both the meter bars and butterchurn read. Created lazily on
  // the first play (a user gesture, so the context starts running); the audio
  // file is same-origin, so the tap involves no CORS and no taint.
  private actx: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private freq: Uint8Array<ArrayBuffer> | null = null;

  // Follow-along state (plan §6.2). `followOff` is the dock toggle — the
  // session opt-out, mirrored to sessionStorage (FOLLOW_KEY) so it survives
  // prev/next and auto-advance navigations. `suspended` is the instant,
  // temporary loss to a user scroll.
  private followOff = false;
  private suspended = false;
  private idleTimer: ReturnType<typeof setTimeout> | null = null;
  /** Scroll events before this timestamp are our own drift, not the user's. */
  private autoUntil = 0;

  private speedIdx = SPEED_DEFAULT_IDX;
  private highlighted: HTMLElement | null = null;
  private meterRaf = 0;
  private closed = false;

  // Ambience (plan §2): each sounding layer is a looped AudioBufferSourceNode
  // → per-layer GainNode → the master ambience GainNode → ctx.destination
  // DIRECTLY. Never through the analyser tap — the meter and the viz must keep
  // reacting to the narration voice alone. Ambience deliberately outlives
  // pause (the environment is its own anchor); only close() stops it.
  private atmoMaster = ATMO_DEFAULT;
  private atmoLevels = new Map<AmbienceKind, number>();
  private atmoLast = new Map<AmbienceKind, number>();
  private atmoPlaying = new Map<AmbienceKind, { src: AudioBufferSourceNode; gain: GainNode }>();
  private atmoGain: GainNode | null = null;
  private atmoRows = new Map<AmbienceKind, { toggle: HTMLButtonElement; slider: HTMLInputElement }>();

  // The listener's MilkDrop preset (plan §2): the current /viz-presets/ id,
  // session-remembered so the vibe survives auto-advance.
  private vizPresetId: string | null = null;
  private vizJumping = false;
  private toastTimer: ReturnType<typeof setTimeout> | null = null;

  // Dock elements
  private dock!: HTMLElement;
  private captionEl!: HTMLElement;
  private playBtn!: HTMLButtonElement;
  private followBtn!: HTMLButtonElement;
  private vizBtn!: HTMLButtonElement;
  private speedBtn!: HTMLButtonElement;
  /** The vertical speed slider popover, and the closer Escape reaches for. */
  private speedPop: HTMLDivElement | null = null;
  private closeSpeedPop: (() => void) | null = null;
  private timeEl!: HTMLElement;
  private seekEl!: HTMLInputElement;
  private meterEl!: HTMLCanvasElement;
  private vizPanel!: HTMLElement;
  private vizFsBtn!: HTMLButtonElement;
  private vizCaption!: HTMLElement;
  private vizCanvas!: HTMLCanvasElement;
  private vizToast!: HTMLElement;
  private atmoBtn!: HTMLButtonElement;
  private atmoPanel!: HTMLElement;
  private seeking = false;

  // MilkDrop — mounted only when the panel is opened, torn down with the dock.
  private vizHandle: {
    renderFrame(): void; resize(): void; destroy(): void;
    setPreset(preset: unknown, blendSeconds: number): void;
  } | null = null;
  private vizLoading = false;

  private cleanups: Array<() => void> = [];

  constructor(opts: OpenOpts) {
    this.slug = opts.slug;
    this.title = opts.title;
    this.trigger = opts.trigger ?? null;
    this.autoplay = !!opts.autoplay;
    try { this.followOff = sessionStorage.getItem(FOLLOW_KEY) === '1'; } catch { /* storage may be disabled */ }
    try { this.vizPresetId = sessionStorage.getItem(VIZ_KEY); } catch { /* storage may be disabled */ }
    // A persisted blob is untrusted input: levels are whitelisted by iterating
    // OUR layer list, never the stored object's keys (house rule — prototype
    // junk arrives through Object.entries on parsed JSON).
    try {
      const raw = sessionStorage.getItem(ATMO_KEY);
      if (raw) {
        const o = JSON.parse(raw) as { master?: unknown; levels?: Record<string, unknown> };
        const m = typeof o.master === 'number' && Number.isFinite(o.master) ? o.master : ATMO_DEFAULT;
        this.atmoMaster = Math.min(1, Math.max(0, m));
        for (const l of ATMO_LAYERS) {
          const v = o.levels?.[l.id];
          if (typeof v === 'number' && Number.isFinite(v) && v > 0) {
            const lv = Math.min(1, v);
            this.atmoLevels.set(l.id, lv);
            this.atmoLast.set(l.id, lv);
          }
        }
      }
    } catch { /* storage may be disabled or the blob bad: defaults */ }
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

    // captions.vtt as a first-class <track> (plan §2, ruling 2026-08-02). Most
    // UAs render native captions for <video> only, so the dock's cue line stays
    // the visible caption surface — the track's value is programmatic: it puts
    // the cues on the textTracks API for AT/extensions/UAs and keeps the VTT a
    // reachable, downloadable artefact. Not `default`, so nothing double-renders
    // where a UA does surface it; and no dock toggle, because a toggle for a
    // track that renders nowhere would be a dead control.
    const captionTrack = document.createElement('track');
    captionTrack.kind = 'captions';
    captionTrack.srclang = 'en';
    captionTrack.label = 'English';
    captionTrack.src = `${track.url.replace(/\/[^/]*$/, '')}/captions.vtt`;
    this.audio.appendChild(captionTrack);

    this.buildDock(track);
    this.wireAudio();
    this.wireFollowAlong();
    this.wireMediaSession(track);
    this.loadSidecars(track);

    document.documentElement.classList.add('ldp-open');
    // The hand-off keeps the environment running: layers the previous page had
    // sounding re-bake and restart here. On an auto-advance arrival the context
    // may sit suspended until the browser blesses playback — the sources are
    // scheduled anyway and sound the moment it resumes.
    for (const [kind, level] of this.atmoLevels) void this.startAtmoLayer(kind, level);
    if (this.autoplay) void this.play();
    this.playBtn.focus();
  }

  focus(): void { this.playBtn?.focus(); }

  async play(): Promise<void> {
    this.ensureTap();
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
    // The canvas IS the preset control (Andy's simplification, 2026-08-02): no
    // list, no prev/next row — tapping it jumps to a random preset, and a brief
    // name toast teaches the names worth remembering.
    this.vizCanvas.setAttribute('role', 'button');
    this.vizCanvas.tabIndex = 0;
    this.vizCanvas.setAttribute('aria-label', 'Change visual (random preset)');
    this.vizCanvas.addEventListener('click', () => void this.vizJump());
    this.vizCanvas.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); void this.vizJump(); }
    });
    this.vizToast = el('div', 'ldp-viz-toast');
    // Fullscreen: the PANEL fullscreens (not the bare canvas) so the caption
    // line below stays composited over the visual — captions must survive the
    // full-page view (Andy, 2026-08-02). Tap-to-jump keeps working fullscreen.
    this.vizFsBtn = el('button', 'ldp-viz-fs', I.fs);
    this.vizFsBtn.title = 'Full screen';
    this.vizFsBtn.setAttribute('aria-label', 'Full screen visual');
    this.vizFsBtn.addEventListener('click', () => void this.toggleVizFullscreen());
    this.vizCaption = el('div', 'ldp-viz-caption');
    this.vizCaption.setAttribute('aria-hidden', 'true'); // mirrors ldp-caption, which owns the semantics
    this.vizPanel.append(this.vizCanvas, this.vizFsBtn, this.vizCaption, this.vizToast);
    const onFsChange = (): void => {
      const fs = document.fullscreenElement === this.vizPanel;
      this.vizFsBtn.innerHTML = fs ? I.fsExit : I.fs;
      this.vizFsBtn.title = fs ? 'Exit full screen' : 'Full screen';
      this.vizFsBtn.setAttribute('aria-label', fs ? 'Exit full screen visual' : 'Full screen visual');
      this.vizHandle?.resize(); // the canvas box just changed size either way
    };
    document.addEventListener('fullscreenchange', onFsChange);
    this.cleanups.push(() => document.removeEventListener('fullscreenchange', onFsChange));

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
    this.atmoBtn = el('button', 'ldp-atmobtn', I.atmo);
    this.atmoBtn.title = 'Atmosphere';
    this.atmoBtn.setAttribute('aria-label', 'Show atmosphere sounds');
    this.atmoBtn.setAttribute('aria-pressed', 'false');
    const miniBtn = el('button', 'ldp-minbtn', I.mini);
    miniBtn.title = 'Collapse';
    miniBtn.setAttribute('aria-label', 'Collapse player');
    const closeBtn = el('button', 'ldp-close', I.close);
    closeBtn.setAttribute('aria-label', 'Close player');
    top.append(title, this.followBtn, this.vizBtn, this.atmoBtn, miniBtn, closeBtn);

    this.atmoPanel = this.buildAtmoPanel();

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
    this.speedBtn.textContent = `${SPEEDS[this.speedIdx]}×`;
    this.speedBtn.setAttribute('aria-label', 'Playback speed');
    row.append(prevBtn, this.playBtn, nextBtn, this.meterEl, this.timeEl, this.speedBtn);

    this.seekEl = el('input', 'ldp-seek');
    this.seekEl.type = 'range';
    this.seekEl.min = '0';
    this.seekEl.max = String(track.duration || 0);
    this.seekEl.step = '0.1';
    this.seekEl.value = '0';
    this.seekEl.setAttribute('aria-label', 'Seek');

    // The AI disclosure (plan §8, EU AI Act Article 50): one small human-readable
    // line, always visible under the transport. English-only like every other
    // dock string here — narration itself is English-only at launch — flagged
    // for the docs i18n pass alongside the rest of the player chrome.
    const disclosure = el('p', 'ldp-disclosure');
    disclosure.id = 'ldp-disclosure';
    disclosure.textContent = 'AI narration. The page text is the original.';
    dock.setAttribute('aria-describedby', 'ldp-disclosure');

    // The <audio> element lives in the dock (invisible — no controls attribute)
    // so its captions <track> is part of the document for AT and the UA.
    dock.append(this.vizPanel, top, this.atmoPanel, this.captionEl, row, this.seekEl, disclosure, this.audio);
    document.body.appendChild(dock);
    this.dock = dock;

    // Controls
    this.playBtn.addEventListener('click', () => { if (this.audio.paused) void this.play(); else this.audio.pause(); });
    prevBtn.addEventListener('click', () => this.go(-1));
    nextBtn.addEventListener('click', () => this.go(1));
    // Speed: session-remembered like Follow, so auto-advance never resets a
    // listener's choice mid-journey; the stored index wins over the default.
    try {
      const saved = Number(sessionStorage.getItem(SPEED_KEY));
      if (Number.isInteger(saved) && saved >= 0 && saved < SPEEDS.length) this.speedIdx = saved;
    } catch { /* storage may be disabled */ }
    this.applySpeed(this.speedIdx, { persist: false });
    // Clicking the rate opens a VERTICAL slider rather than cycling (Andy,
    // 2026-08-04). A cycle makes the listener step through every rate to reach
    // the one they want, and going back means going all the way round; a slider
    // is one gesture to any rate, and the tick labels show the whole range at
    // once. The button stays a button — it toggles the popover, so keyboard and
    // screen-reader users get the same control, and the slider itself is a real
    // <input type="range"> (arrow keys, Home/End) rather than a div with
    // handlers. It indexes SPEEDS so every stop is a curated rate, not an
    // arbitrary float.
    this.speedBtn.setAttribute('aria-expanded', 'false');
    this.speedBtn.setAttribute('aria-controls', 'ldp-speed-pop');
    this.speedPop = el('div', 'ldp-speed-pop');
    this.speedPop.id = 'ldp-speed-pop';
    this.speedPop.hidden = true;
    const speedRange = el('input', 'ldp-speed-range');
    speedRange.type = 'range';
    speedRange.min = '0';
    speedRange.max = String(SPEEDS.length - 1);
    speedRange.step = '1';
    speedRange.value = String(this.speedIdx);
    // Vertical orientation: `writing-mode: vertical-*` in CSS is the modern way,
    // and `orient` covers the Firefox versions that ignore it. Both are inert
    // where unsupported, and the fallback is a horizontal slider that still works.
    speedRange.setAttribute('orient', 'vertical');
    speedRange.setAttribute('aria-label', 'Playback speed');
    speedRange.setAttribute('aria-orientation', 'vertical');
    // A percentage would be meaningless here ("40%" of what?) — the rate is the
    // value the listener cares about, so speak it.
    const speakRate = (i: number): void => {
      speedRange.setAttribute('aria-valuetext', `${SPEEDS[i]}× speed`);
    };
    speakRate(this.speedIdx);
    // Ticks read fastest-at-top, which is how a vertical fader reads.
    const ticks = el('div', 'ldp-speed-ticks');
    for (let i = SPEEDS.length - 1; i >= 0; i--) {
      const tick = el('button', 'ldp-speed-tick');
      tick.type = 'button';
      tick.textContent = `${SPEEDS[i]}×`;
      tick.dataset.speedIdx = String(i);
      tick.setAttribute('aria-label', `${SPEEDS[i]}× speed`);
      ticks.append(tick);
    }
    this.speedPop.append(ticks, speedRange);
    this.speedBtn.parentElement?.append(this.speedPop) ?? row.append(this.speedPop);

    const syncSpeedUi = (): void => {
      speedRange.value = String(this.speedIdx);
      speakRate(this.speedIdx);
      for (const tick of ticks.querySelectorAll<HTMLElement>('.ldp-speed-tick')) {
        tick.classList.toggle('is-active', Number(tick.dataset.speedIdx) === this.speedIdx);
      }
    };
    syncSpeedUi();

    const openSpeed = (open: boolean): void => {
      this.speedPop!.hidden = !open;
      this.speedBtn.setAttribute('aria-expanded', String(open));
      this.speedBtn.classList.toggle('is-open', open);
      if (open) { syncSpeedUi(); speedRange.focus(); }
    };
    this.speedBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openSpeed(this.speedPop!.hidden);
    });
    speedRange.addEventListener('input', () => {
      this.applySpeed(Number(speedRange.value));
      syncSpeedUi();
    });
    ticks.addEventListener('click', (e) => {
      const tick = (e.target as HTMLElement | null)?.closest<HTMLElement>('.ldp-speed-tick');
      if (!tick) return;
      this.applySpeed(Number(tick.dataset.speedIdx));
      syncSpeedUi();
    });
    // A click anywhere else closes it — but NOT a click inside, or dragging the
    // slider would dismiss the thing being dragged.
    const onSpeedAway = (e: MouseEvent): void => {
      if (this.speedPop!.hidden) return;
      const t = e.target as Node | null;
      if (t && (this.speedPop!.contains(t) || this.speedBtn.contains(t))) return;
      openSpeed(false);
    };
    document.addEventListener('click', onSpeedAway);
    this.cleanups.push(() => document.removeEventListener('click', onSpeedAway));
    this.closeSpeedPop = () => { if (!this.speedPop!.hidden) { openSpeed(false); this.speedBtn.focus(); } };
    this.followBtn.addEventListener('click', () => this.setFollow(this.followOff));
    miniBtn.addEventListener('click', () => {
      const mini = dock.classList.toggle('ldp-mini');
      miniBtn.setAttribute('aria-label', mini ? 'Expand player' : 'Collapse player');
      miniBtn.style.transform = mini ? 'rotate(180deg)' : '';
      // The collapsed pill hides both panels by CSS, but the rAF loop keys on
      // the `hidden` attribute — set it too, or butterchurn keeps burning GPU
      // frames nobody can see. Collapsing closes the panels (opt-in rule:
      // expanding again means pressing their buttons again, never auto-open).
      // The ambience AUDIO keeps going — the pill hides chrome, not the room.
      if (mini && this.vizHandle && !this.vizPanel.hidden) this.toggleViz();
      if (mini && !this.atmoPanel.hidden) this.toggleAtmo();
    });
    closeBtn.addEventListener('click', () => this.close());
    this.vizBtn.addEventListener('click', () => this.toggleViz());
    this.atmoBtn.addEventListener('click', () => this.toggleAtmo());

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
      // In fullscreen the browser owns Escape (it exits fullscreen); closing
      // the whole dock on the same press would take two anchors down at once.
      if (document.fullscreenElement) return;
      // The viewport-fallback full page exits the same way, one layer at a time.
      if (this.vizFullpage) { this.setVizFullpage(false); return; }
      // One layer per press: an open speed slider is the innermost thing, so it
      // closes first and the dock survives (and focus returns to its button).
      if (this.speedPop && !this.speedPop.hidden) { this.closeSpeedPop?.(); return; }
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
      const capText = this.blockText.get(cue.blockId) ?? '';
      this.captionEl.textContent = capText;
      this.vizCaption.textContent = capText; // the fullscreen twin (visible only :fullscreen)
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

  /**
   * Set the playback rate from a SPEEDS index — the single place the rate, the
   * button label and the stored preference move together, so the slider, the
   * tick buttons and the initial restore cannot disagree.
   *
   * Session-scoped like Follow (never localStorage): a listener's choice rides
   * the auto-advance hand-off from page to page, but a fresh visit meets the
   * default. `persist: false` is the restore path, which must not write back.
   */
  private applySpeed(idx: number, opts: { persist?: boolean } = {}): void {
    const i = Math.max(0, Math.min(SPEEDS.length - 1, Math.round(idx)));
    this.speedIdx = i;
    this.audio.playbackRate = SPEEDS[i]!;
    this.speedBtn.textContent = `${SPEEDS[i]}×`;
    if (opts.persist === false) return;
    try { sessionStorage.setItem(SPEED_KEY, String(i)); } catch { /* best effort */ }
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

  // ── Sidecars: cues + block map ────────────────────────────────────────────

  private loadSidecars(track: Track): void {
    const base = track.url.replace(/\/[^/]*$/, '');
    void fetch(`${base}/cues.json`).then((r) => (r.ok ? r.json() : null)).then((j: { blocks?: Cue[] } | null) => {
      if (j?.blocks?.length) { this.cues = j.blocks; this.cueIdx = -1; this.onTime(); }
    }).catch(() => { /* no cues: playback without captions/highlight */ });

    // The page's markdown twin re-yields the narrated blocks — ids for the DOM
    // map, text for the caption line. pageTitle is the same string build.ts
    // stamped on the Listen button, so the meta-title skip lands identically
    // here and in the pipeline and the blockIds stay in lockstep with cues.json.
    void fetch(`/info/${this.slug}.md`).then((r) => (r.ok ? r.text() : null)).then((md) => {
      if (!md || this.closed) return;
      const blocks = extractSpokenText(md, { pageTitle: this.title });
      for (const b of blocks) this.blockText.set(b.blockId, b.text);
      this.blockMap = buildBlockMap(blocks);
    }).catch(() => { /* unmapped: dock still plays, captions may be empty */ });
  }

  // ── The live audio tap + meter bars ───────────────────────────────────────

  /** Create the AudioContext tap on first use. Called from play() (always a
   *  user gesture or an autoplay the browser already blessed) and from the viz
   *  mount. Idempotent; a failure leaves the element playing untapped — flat
   *  meter, viz declines politely, narration unaffected. */
  private ensureTap(): void {
    if (this.actx) {
      // A context created under an autoplay hand-off can arrive suspended;
      // every play press is a chance to resume it.
      if (this.actx.state === 'suspended') void this.actx.resume().catch(() => { /* keep trying on later gestures */ });
      return;
    }
    try {
      const ctx = new AudioContext();
      const src = ctx.createMediaElementSource(this.audio);
      // A tapped MediaElementSource mutes the element's direct output — route
      // it back to the destination or the narration goes silent.
      src.connect(ctx.destination);
      const an = ctx.createAnalyser();
      an.fftSize = 2048;
      an.smoothingTimeConstant = 0.75;
      src.connect(an);
      this.actx = ctx;
      this.analyser = an;
      this.freq = new Uint8Array(an.frequencyBinCount);
      if (ctx.state === 'suspended') void ctx.resume().catch(() => { /* resumed by the next gesture */ });
    } catch { /* no Web Audio: playback continues without meter/viz */ }
  }

  private startMeter(): void {
    if (this.meterRaf) return;
    const step = (): void => {
      this.meterRaf = 0;
      if (this.closed) return;
      this.drawMeter();
      if (this.vizHandle && !this.vizPanel.hidden) this.vizHandle.renderFrame();
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
    const an = this.analyser;
    const freq = this.freq;
    if (an && freq) an.getByteFrequencyData(freq);
    const BARS = 16;
    // Speech lives low in the spectrum — sample only the lower half of the
    // bins (≈ 0–12 kHz at a 48 kHz context) so the bars actually move.
    const usable = freq ? freq.length >> 1 : 0;
    const gap = Math.max(1, Math.round(dpr));
    const bw = (w - gap * (BARS - 1)) / BARS;
    ctx.fillStyle = document.documentElement.classList.contains('dark') ? '#8db8ea' : '#2c5c96';
    for (let i = 0; i < BARS; i++) {
      let level = 0.08;
      if (freq && usable > 0) {
        const b0 = Math.floor((i / BARS) * usable);
        const b1 = Math.max(b0 + 1, Math.floor(((i + 1) / BARS) * usable));
        let sum = 0;
        for (let b = b0; b < b1; b++) sum += freq[b] ?? 0;
        level = Math.max(level, sum / (b1 - b0) / 255);
      }
      const bh = Math.max(dpr, level * h);
      ctx.globalAlpha = 0.4 + 0.6 * level;
      ctx.fillRect(i * (bw + gap), h - bh, bw, bh);
    }
    ctx.globalAlpha = 1;
  }

  // ── MilkDrop panel — opt-in, fed by the live analyser tap ─────────────────

  private toggleViz(): void {
    if (reduced()) { this.vizBtn.hidden = true; return; } // suppressed under reduced motion, unconditionally — a button that no-ops is a dead control, so it goes too
    const opening = this.vizPanel.hidden;
    if (!opening && document.fullscreenElement === this.vizPanel) void document.exitFullscreen().catch(() => { /* already gone */ });
    if (!opening && this.vizFullpage) this.setVizFullpage(false);
    this.vizPanel.hidden = !opening;
    this.vizBtn.setAttribute('aria-pressed', opening ? 'true' : 'false');
    this.vizBtn.setAttribute('aria-label', opening ? 'Hide visualizer' : 'Show visualizer');
    if (opening) {
      void this.mountViz();
      this.startMeter(); // the shared rAF loop drives both surfaces
    }
  }

  /** True while the non-native full-VIEWPORT fallback is active (iOS Safari has
   *  no element fullscreen, so "full page" there means the whole tab viewport). */
  private vizFullpage = false;

  private vizIsFull(): boolean {
    return this.vizFullpage || document.fullscreenElement === this.vizPanel;
  }

  private setVizFullpage(on: boolean): void {
    this.vizFullpage = on;
    this.vizPanel.classList.toggle('is-fullpage', on);
    this.vizFsBtn.innerHTML = on ? I.fsExit : I.fs;
    this.vizFsBtn.title = on ? 'Exit full page' : 'Full screen';
    this.vizFsBtn.setAttribute('aria-label', on ? 'Exit full page visual' : 'Full screen visual');
    this.vizHandle?.resize();
  }

  private async toggleVizFullscreen(): Promise<void> {
    if (this.vizFullpage) { this.setVizFullpage(false); return; }
    if (document.fullscreenElement === this.vizPanel) {
      try { await document.exitFullscreen(); } catch { /* already gone */ }
      return;
    }
    // Native first (the fullscreenchange listener owns button state on this
    // path); where the API is missing or refuses (iOS Safari on any element,
    // iframe policy), fall back to the fixed full-viewport overlay — the tab
    // stays, the visual fills it.
    if (this.vizPanel.requestFullscreen) {
      try { await this.vizPanel.requestFullscreen(); return; } catch { /* fall through */ }
    }
    this.setVizFullpage(true);
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

      // The viz reads the same analyser as the meter. Opening the panel is a
      // user gesture, so the context can be created here even before first play.
      this.ensureTap();
      if (!this.actx || !this.analyser) { this.vizNote('This browser cannot run the visualizer (no Web Audio).'); return; }

      // The library arrives only now — its own chunk, fetched on the first
      // panel open, never with the player. Presets are the app's shared pack.
      const mod: unknown = await import('butterchurn');
      const bc = resolveButterchurn(mod);
      // The session-remembered preset if there is one (it rides the hand-off
      // like Follow), else a random draw from the popular pool — the listener's
      // first open is already a jump, not a fixed house preset.
      const entry = await pickPresetEntry(this.vizPresetId);
      const preset = entry ? await fetchPresetBody(entry.id) : null;
      if (!entry || !preset) { this.vizNote('Visualizer presets are not available on this site.'); return; }
      this.rememberPreset(entry.id);

      const dpr = Math.min(devicePixelRatio || 1, 1.5);
      const box = (): { w: number; h: number } => {
        const r = this.vizCanvas.getBoundingClientRect();
        return { w: Math.max(1, Math.round(r.width * dpr)), h: Math.max(1, Math.round(r.height * dpr)) };
      };
      const size = box();
      this.vizCanvas.width = size.w;
      this.vizCanvas.height = size.h;
      const viz = bc.createVisualizer(this.actx, this.vizCanvas, {
        width: size.w, height: size.h, pixelRatio: 1, meshWidth: 40, meshHeight: 30,
      });
      // butterchurn's standard audio path: hand it the analyser node and it
      // samples time/frequency data itself every render() call.
      viz.connectAudio(this.analyser);
      // Never a 0-second blend: loadPreset always starts a cross-fade, and a
      // zero duration divides by zero into a renderer wedged on NaN.
      viz.loadPreset(preset, 0.05);

      let dead = false;
      this.vizHandle = {
        renderFrame: (): void => {
          if (dead) return;
          try {
            viz.render();
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
        setPreset: (p: unknown, blendSeconds: number): void => {
          if (dead) return;
          // Same guard as the mount: never a 0-second blend (see above).
          try { viz.loadPreset(p, Math.max(0.05, blendSeconds)); } catch { /* keep the current preset */ }
        },
      };
      const onResize = (): void => this.vizHandle?.resize();
      addEventListener('resize', onResize);
      this.cleanups.push(() => removeEventListener('resize', onResize));
      this.vizHandle.renderFrame(); // first frame even while paused
    } catch {
      this.vizNote('The visualizer could not load.');
    } finally {
      this.vizLoading = false;
    }
  }

  /** Tap-the-canvas preset jump (plan §2): a random draw from the popular pool,
   *  never the preset already showing, cross-faded at the app's blend time. */
  private async vizJump(): Promise<void> {
    if (!this.vizHandle || this.vizJumping) return;
    this.vizJumping = true;
    try {
      const entry = await pickPresetEntry(null, this.vizPresetId);
      if (!entry) return;
      const body = await fetchPresetBody(entry.id);
      if (!body || !this.vizHandle) return;
      this.vizHandle.setPreset(body, PRESET_BLEND_S);
      this.rememberPreset(entry.id);
      this.toast(entry.name || entry.id);
    } finally {
      this.vizJumping = false;
    }
  }

  private rememberPreset(id: string): void {
    this.vizPresetId = id;
    try { sessionStorage.setItem(VIZ_KEY, id); } catch { /* storage disabled: this page only */ }
  }

  /** The preset-name toast — visible ~2 s, so a listener can learn the names
   *  they like without the panel growing a list. */
  private toast(name: string): void {
    this.vizToast.textContent = name;
    this.vizToast.classList.add('show');
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.vizToast.classList.remove('show'), 2000);
  }

  // ── Atmosphere — procedural ambience under the narration (plan §2) ────────

  private buildAtmoPanel(): HTMLElement {
    const panel = el('div', 'ldp-atmo');
    panel.hidden = true;

    const master = el('div', 'ldp-atmo-master');
    const mLabel = el('span', 'ldp-atmo-label');
    mLabel.textContent = 'Atmosphere';
    const mSlider = el('input', 'ldp-atmo-level');
    mSlider.type = 'range';
    mSlider.min = '0';
    mSlider.max = '1';
    mSlider.step = '0.01';
    mSlider.value = String(this.atmoMaster);
    mSlider.setAttribute('aria-label', 'Atmosphere master level');
    mSlider.addEventListener('input', () => {
      this.atmoMaster = Number(mSlider.value) || 0;
      if (this.atmoGain && this.actx) this.atmoGain.gain.setTargetAtTime(this.atmoMaster, this.actx.currentTime, 0.1);
      this.saveAtmo();
    });
    master.append(mLabel, mSlider);
    panel.appendChild(master);

    for (const group of ATMO_GROUPS) {
      const h = el('div', 'ldp-atmo-group');
      h.textContent = group;
      panel.appendChild(h);
      for (const layer of ATMO_LAYERS) {
        if (layer.group !== group) continue;
        const row = el('div', 'ldp-atmo-row');
        const level = this.atmoLevels.get(layer.id) ?? 0;
        const toggle = el('button', 'ldp-atmo-toggle');
        toggle.textContent = layer.label;
        toggle.setAttribute('aria-pressed', level > 0 ? 'true' : 'false');
        const slider = el('input', 'ldp-atmo-level');
        slider.type = 'range';
        slider.min = '0';
        slider.max = '1';
        slider.step = '0.01';
        slider.value = String(level);
        slider.setAttribute('aria-label', `${layer.label} level`);
        toggle.addEventListener('click', () => {
          const on = (this.atmoLevels.get(layer.id) ?? 0) > 0;
          // Toggling back on restores the level the listener had, not a default
          // they never chose (same memory rule as the app's Atmosphere panel).
          const next = on ? 0 : (this.atmoLast.get(layer.id) ?? ATMO_DEFAULT);
          slider.value = String(next);
          this.setAtmoLevel(layer.id, next);
        });
        slider.addEventListener('input', () => this.setAtmoLevel(layer.id, Number(slider.value) || 0));
        this.atmoRows.set(layer.id, { toggle, slider });
        row.append(toggle, slider);
        panel.appendChild(row);
      }
    }
    return panel;
  }

  private toggleAtmo(): void {
    const opening = this.atmoPanel.hidden;
    this.atmoPanel.hidden = !opening;
    this.atmoBtn.setAttribute('aria-pressed', opening ? 'true' : 'false');
    this.atmoBtn.setAttribute('aria-label', opening ? 'Hide atmosphere sounds' : 'Show atmosphere sounds');
  }

  private setAtmoLevel(kind: AmbienceKind, level: number): void {
    if (level > 0) {
      this.atmoLevels.set(kind, level);
      this.atmoLast.set(kind, level);
      const live = this.atmoPlaying.get(kind);
      if (live && this.actx) live.gain.gain.setTargetAtTime(level, this.actx.currentTime, 0.1);
      else void this.startAtmoLayer(kind, level);
    } else {
      this.atmoLevels.delete(kind);
      this.stopAtmoLayer(kind);
    }
    this.atmoRows.get(kind)?.toggle.setAttribute('aria-pressed', level > 0 ? 'true' : 'false');
    this.saveAtmo();
  }

  /** Start a layer: bake (or reuse) its loop, then loop it through its own gain
   *  into the ambience master — a graph that NEVER touches the analyser tap, so
   *  the meter and the viz keep hearing the narration voice alone. */
  private async startAtmoLayer(kind: AmbienceKind, level: number): Promise<void> {
    this.ensureTap();
    const ctx = this.actx;
    if (!ctx || this.atmoPlaying.has(kind)) return;
    if (!this.atmoGain) {
      this.atmoGain = ctx.createGain();
      this.atmoGain.gain.value = this.atmoMaster;
      this.atmoGain.connect(ctx.destination);
    }
    // Claim the slot before the await: a slider dragged across zero twice must
    // not race into two sources.
    const gain = ctx.createGain();
    gain.gain.value = 0;
    const src = ctx.createBufferSource();
    src.loop = true;
    this.atmoPlaying.set(kind, { src, gain });
    const buf = await bakeAtmoBuffer(ctx, kind);
    // The layer may have been switched off (or the dock closed) mid-bake.
    if (this.closed || !buf || this.atmoPlaying.get(kind)?.src !== src || !(this.atmoLevels.get(kind)! > 0)) {
      if (this.atmoPlaying.get(kind)?.src === src) this.atmoPlaying.delete(kind);
      return;
    }
    src.buffer = buf;
    src.connect(gain);
    gain.connect(this.atmoGain);
    src.start();
    // Fade in so nothing clicks; the target is the CURRENT level, which a
    // slider may have moved while the bake ran.
    gain.gain.setTargetAtTime(this.atmoLevels.get(kind) ?? level, ctx.currentTime, 0.15);
  }

  private stopAtmoLayer(kind: AmbienceKind): void {
    const live = this.atmoPlaying.get(kind);
    if (!live) return;
    this.atmoPlaying.delete(kind);
    const ctx = this.actx;
    if (ctx) {
      // Fade out, then stop — a hard stop mid-waveform clicks.
      live.gain.gain.setTargetAtTime(0, ctx.currentTime, 0.1);
      try { live.src.stop(ctx.currentTime + 0.5); } catch { /* already stopped */ }
    } else {
      try { live.src.stop(); } catch { /* already stopped */ }
    }
  }

  private saveAtmo(): void {
    try {
      const levels: Record<string, number> = {};
      for (const [k, v] of this.atmoLevels) if (v > 0) levels[k] = v;
      sessionStorage.setItem(ATMO_KEY, JSON.stringify({ master: this.atmoMaster, levels }));
    } catch { /* storage disabled: the environment lasts this page only */ }
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
    if (document.fullscreenElement === this.vizPanel) void document.exitFullscreen().catch(() => { /* already gone */ });
    if (this.vizFullpage) this.setVizFullpage(false);
    this.audio.pause();
    this.audio.src = '';
    if (this.meterRaf) cancelAnimationFrame(this.meterRaf);
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.vizHandle?.destroy();
    // Ambience dies with the dock (plan §2: pause keeps the room, close ends
    // it). The context close below would silence it anyway; stopping the
    // sources first just avoids a burst if the close is slow.
    for (const kind of [...this.atmoPlaying.keys()]) this.stopAtmoLayer(kind);
    // The tap dies with the dock — a closed context releases the element, so a
    // future player instance can tap a fresh <audio> without a stale graph.
    if (this.actx) { void this.actx.close().catch(() => { /* already closed */ }); this.actx = null; this.analyser = null; }
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
    connectAudio(node: AudioNode): void;
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

// ── Preset selection over the app's shared pack (/viz-presets/) ──────────────
// The index lists {id,name,author,popular,tier,ok,luma}; each preset BODY is its
// own /viz-presets/<id>.json, fetched by id — the same shape the app reads.

interface PresetEntry { id: string; name: string; author?: string; popular?: boolean; tier?: number; ok?: boolean }

/** One fetch per page: mount and every tap read the same cached index. */
let presetIndexP: Promise<PresetEntry[] | null> | null = null;
function presetIndex(): Promise<PresetEntry[] | null> {
  presetIndexP ??= fetch('/viz-presets/index.json')
    .then((r) => (r.ok ? r.json() : null))
    .then((j: unknown) => (Array.isArray(j) && j.length ? j as PresetEntry[] : null))
    .catch(() => null);
  return presetIndexP;
}

/** The jump pool: popular tier-1 entries the app's own curation marked ok. The
 *  whole index is the fallback so a pack without curation still draws something. */
function presetPool(index: PresetEntry[]): PresetEntry[] {
  const pool = index.filter((e) => e.ok !== false && e.tier === 1 && e.popular);
  return pool.length ? pool : index;
}

/**
 * Choose a preset entry. `wantId` (the session-remembered choice) wins when the
 * index still carries it; otherwise a random draw from the popular pool,
 * excluding `notId` (the preset already showing) so a tap always jumps.
 */
async function pickPresetEntry(wantId: string | null, notId: string | null = null): Promise<PresetEntry | null> {
  const index = await presetIndex();
  if (!index) return null;
  if (wantId) {
    const kept = index.find((e) => e.id === wantId && e.ok !== false);
    if (kept) return kept;
  }
  let pool = presetPool(index);
  if (notId && pool.length > 1) pool = pool.filter((e) => e.id !== notId);
  return pool[Math.floor(Math.random() * pool.length)] ?? null;
}

async function fetchPresetBody(id: string): Promise<unknown | null> {
  try {
    return await fetch(`/viz-presets/${encodeURIComponent(id)}.json`).then((r) => (r.ok ? r.json() : null));
  } catch {
    return null;
  }
}

// ── Ambience buffer bake — lazy DSP chunk + module-scope cache ───────────────
// bakeAmbience (shells/web/src/lib/ambience-dsp.ts, bundled at build time like
// docs-spoken-text — pure DSP, zero imports, zero DOM) runs 50–500 ms per bed on
// the main thread. That is a one-off per layer per page, on the click that turns
// the layer on — acceptable — and the cache below makes every later toggle free.
// AudioBuffers outlive the context that made them, so the cache survives the
// dock closing and reopening within a page; a navigation re-bakes (seeded, so
// the next page's rain is the same rain).

const atmoBuffers = new Map<string, AudioBuffer>();
const atmoBaking = new Map<string, Promise<AudioBuffer | null>>();

async function bakeAtmoBuffer(ctx: AudioContext, kind: AmbienceKind): Promise<AudioBuffer | null> {
  const key = `${kind}@${ctx.sampleRate}`;
  const have = atmoBuffers.get(key);
  if (have) return have;
  const inflight = atmoBaking.get(key);
  if (inflight) return inflight;
  const job = (async (): Promise<AudioBuffer | null> => {
    try {
      // The DSP is its own lazy chunk (like butterchurn): pages that never open
      // the atmosphere panel never fetch it.
      const { bakeAmbience } = await import('../../shells/web/src/lib/ambience-dsp.ts');
      const chans = bakeAmbience(kind, ctx.sampleRate);
      const buf = ctx.createBuffer(chans.length, chans[0]!.length, ctx.sampleRate);
      // The cast is the TS 5.7 typed-array generic, not a shape claim (same note
      // as the app's atmosphere.ts): bakeAmbience allocates plain
      // ArrayBuffer-backed views, but a bare Float32Array is
      // Float32Array<ArrayBufferLike>, which copyToChannel won't take.
      for (let c = 0; c < chans.length; c++) buf.copyToChannel(chans[c]! as Float32Array<ArrayBuffer>, c);
      atmoBuffers.set(key, buf);
      return buf;
    } catch { return null; } finally { atmoBaking.delete(key); }
  })();
  atmoBaking.set(key, job);
  return job;
}
