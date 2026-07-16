// Build-time generators for Open Graph (share preview) images.
//
// All three cards share the brand pine field + SUSE type and are rasterised through OUR
// OWN render path (Chromium via Playwright — scripts/lib/rasterize-svg-browser.ts), NOT a
// second SVG interpreter like resvg. One render path means a card is shaped the way the
// app paints, can't drift (resvg mis-rendered some brand illustrations / panicked on
// others), and a missing browser degrades to the committed / static og.png:
//
//   • createOgRenderer  — the /info pages. Reproduces the standard Lolly OG image
//     (pine field, 3D lollipop, "Lolly" wordmark) and swaps the subtitle for the
//     page title. So /info/authoring-tools.html previews as the brand card captioned
//     "Authoring Tools". The original og.png is embedded as the background and only
//     its subtitle band is repainted, so the lollipop + wordmark stay byte-faithful.
//
//   • createToolCardRenderer — per-tool share cards (scripts/build-tool-og.ts). A
//     gallery-tile look rather than the lollipop card: the tool's icon, name and
//     description on the pine field, with a smaller framed preview of the tool's own
//     output on the right. So a link to /t/qr-code previews as that tool's card.
//
//   • createViewCardRenderer — per-view share cards (scripts/build-view-og.ts). A dark
//     brand-system panel for the app's own sections (Dashboard, Verify, …).
//
// Why generate rather than reuse one static og.png: social crawlers (Slack, X,
// Facebook, LinkedIn, iMessage) cache one image per URL and only reliably render
// raster (PNG/JPEG), never SVG — so each page/tool needs its own pre-rendered PNG.

import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { createSvgRasterizer } from '../scripts/lib/rasterize-svg-browser.ts';

// A self-contained SVG string → PNG bytes, at the given size. Injected into each card
// renderer so they rasterise through the browser path (createSvgRasterizer) — a missing
// browser then degrades ("keep committed / og.png") rather than crashing the build.
type SvgToPng = (svg: string, opts: { width: number; height: number; background?: string }) => Promise<Buffer>;

// A page from the build's page list; only `slug` + `title` (non-landing) get a card.
interface OgPage { slug?: string; title?: string; isLanding?: boolean; }

// The per-tool card inputs.
interface ToolCard {
  name: string;
  description: string;
  iconSvg?: string;
  previewDataUri?: string;
}

const OG_W = 1200, OG_H = 630;

// Sampled from the original og.png so the repaint is seamless.
const FIELD   = '#1c4a2e';   // the flat pine background
const SUBTLE  = '#e4e9e6';   // the subtitle's soft off-white
const MUTED   = '#a7bcb0';   // dimmer green-grey for the tool card's description / footer

// The subtitle sits in a left-aligned column under the wordmark. The band below is
// repainted with the field colour to clear the original two-line tagline; the new
// title is drawn centred within it. Bounds measured from og.png's pixel content.
const COL_X     = 606;                       // shared left edge of wordmark + subtitle
const BAND      = { x: 598, y: 330, w: OG_W - 598, h: 162 };
const TITLE_MAXW = OG_W - COL_X - 64;         // keep a right margin
const TITLE_SIZE = 54;                        // matches the original tagline weighting
const TITLE_MIN  = 34;                        // floor for very long titles

const xmlEsc = (s: unknown): string => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Rough text width (no shaping at build time) → shrink only when a long title would
// overrun the right margin. SUSE Medium averages ~0.54em advance across mixed text.
function fitTitle(title: string): number {
  const est = title.length * 0.54 * TITLE_SIZE;
  return est <= TITLE_MAXW ? TITLE_SIZE : Math.max(TITLE_MIN, Math.floor(TITLE_SIZE * TITLE_MAXW / est));
}

/**
 * Build a renderer bound to the repo's base card (og.png), reused for every page.
 * `rasterize` is injected so the card renders through the browser path (SUSE fonts are
 * supplied there); a missing browser degrades to "keep og.png" rather than crashing the
 * site build. Throws if the base card asset is missing.
 */
function createOgRenderer(rasterize: SvgToPng, repoRoot: string) {
  const ogBase = readFileSync(resolve(repoRoot, 'shells/web/public/og.png')).toString('base64');

  const svgFor = (title: string): string => {
    const size = fitTitle(title);
    // Centre the single line in the repainted band (cap height ≈ 0.7em).
    const baseline = Math.round(BAND.y + BAND.h / 2 + size * 0.35);
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${OG_W}" height="${OG_H}" viewBox="0 0 ${OG_W} ${OG_H}">`
      + `<image x="0" y="0" width="${OG_W}" height="${OG_H}" href="data:image/png;base64,${ogBase}"/>`
      + `<rect x="${BAND.x}" y="${BAND.y}" width="${BAND.w}" height="${BAND.h}" fill="${FIELD}"/>`
      + `<text x="${COL_X}" y="${baseline}" font-family="SUSE" font-weight="500" font-size="${size}"`
      + ` fill="${SUBTLE}">${xmlEsc(title)}</text>`
      + `</svg>`;
  };

  return {
    /** Render one page's card to PNG bytes (via the injected browser rasteriser). */
    render(title: string): Promise<Buffer> {
      return rasterize(svgFor(title), { width: OG_W, height: OG_H, background: FIELD });
    },
  };
}

// ── Per-tool share card (gallery-tile style) ─────────────────────────────────

const CARD_MARGIN = 72;
// Framed preview panel on the right; the left column is everything to its left.
const CARD_PANEL  = { x: 696, y: 96, w: 432, h: 438, r: 28, pad: 26 };

// Tool-card palette: a light theme (white field, black type), distinct from the
// /info card's pine field (FIELD/SUBTLE above, shared with createOgRenderer — leave
// those alone). Keeping these separate means the two cards can diverge freely.
const CARD_BG          = '#ffffff';   // white background
const CARD_INK         = '#1a1a1a';   // primary type + tool icon (black)
const CARD_MUTED       = '#5f5f5f';   // description / footer (dark grey, subordinate)
const CARD_PLACEHOLDER = '#d4d4d4';   // no-preview placeholder icon tint (visible on white)
const CARD_PANEL_LINE  = '#e6e6e6';   // hairline framing the white preview panel on white

// Left-column vertical rhythm: a large icon up top, then a generous gap to the name.
const CARD_ICON_SIZE   = 120;   // was 60 — a much larger, icon-forward card
const CARD_ICON_Y      = 138;   // icon top edge, below the wordmark
const CARD_NAME_Y      = 340;   // first name baseline — the space between icon and title
const CARD_STROKE_W    = 1.2;   // icon stroke-width (lucide viewBox units)

// Position the catalog's inlined icon SVG (lucide-style: 24×24 viewBox,
// stroke="currentColor") as a nested <svg> viewport. resvg has no colour context for
// currentColor, so bind it to an explicit colour first. Some icons also set
// width/height (and their own stroke-width) on the root <svg>; strip those on the
// opening tag only (inner <rect width=…> stays) so they don't collide with the ones
// we inject — a duplicate attribute is invalid SVG and resvg rejects the whole card.
// stroke-width is injected on the root and inherited by the (unstyled) child paths.
function placeIcon(iconSvg: string, x: number, y: number, size: number, color: string, strokeWidth: number = CARD_STROKE_W): string {
  return iconSvg
    .replace(/currentColor/g, color)
    .replace(/^<svg\b[^>]*>/, (tag) => tag
      .replace(/\s(?:width|height|stroke-width)\s*=\s*"[^"]*"/g, '')
      .replace(/^<svg\b/, `<svg x="${x}" y="${y}" width="${size}" height="${size}" stroke-width="${strokeWidth}"`));
}

// Greedy word-wrap to <= maxLines, char width estimated from the font size (resvg's
// <text> doesn't auto-wrap). The last line is ellipsised when text remains.
function wrapLines(text: string, fontSize: number, boxWidth: number, maxLines: number): string[] {
  const maxChars = Math.max(8, Math.floor(boxWidth / (0.52 * fontSize)));
  const words = String(text || '').trim().split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let cur = '';
  let i = 0;
  for (; i < words.length; i++) {
    const trial = cur ? `${cur} ${words[i]!}` : words[i]!;
    if (trial.length <= maxChars) { cur = trial; continue; }
    if (cur) lines.push(cur);
    cur = words[i]!;
    if (lines.length === maxLines) break;          // all lines filled, words remain
  }
  if (lines.length < maxLines && cur) { lines.push(cur); cur = ''; i = words.length; }
  if (i < words.length || (cur && lines.length === maxLines)) {
    let last = lines[lines.length - 1] || '';
    while (last.length && last.length + 1 > maxChars) last = last.slice(0, -1);
    lines[lines.length - 1] = `${last.replace(/[\s,.;:]+$/, '')}…`;
  }
  return lines;
}

// Shrink the tool name only when it would overrun the text column at the base size.
function fitName(name: string, boxWidth: number): number {
  const BASE = 58, MIN = 40;
  const est = String(name).length * 0.55 * BASE;
  return est <= boxWidth ? BASE : Math.max(MIN, Math.floor(BASE * boxWidth / est));
}

/**
 * Build a per-tool card renderer. `render({ name, description, iconSvg, previewDataUri })`
 * returns PNG bytes: the tool's icon + name + description on the pine field, with the
 * preview framed in a white panel on the right (the preview rides in as an SVG data-URI
 * and is painted by the same browser that rasterises the card — no second interpreter).
 * With no preview, a large tinted icon stands in. `rasterize` is injected so a missing
 * browser degrades ("keep committed card") instead of crashing, like the old resvg path.
 */
export function createToolCardRenderer(rasterize: SvgToPng) {
  const svgFor = ({ name, description, iconSvg, previewDataUri }: ToolCard): string => {
    const M = CARD_MARGIN;
    const P = CARD_PANEL;
    const textW = P.x - M - 40;                  // left column width

    const nameSize = fitName(name, textW);
    const nameLines = wrapLines(name, nameSize, textW, 2);

    const out: string[] = [];
    out.push(`<svg xmlns="http://www.w3.org/2000/svg" width="${OG_W}" height="${OG_H}" viewBox="0 0 ${OG_W} ${OG_H}">`);
    out.push(`<rect width="${OG_W}" height="${OG_H}" fill="${CARD_BG}"/>`);

    // Brand wordmark, top-left.
    out.push(`<text x="${M}" y="98" font-family="SUSE" font-weight="700" font-size="34" fill="${CARD_INK}">Lolly</text>`);

    // Preview panel: soft shadow → white card (hairline-framed so it reads on the
    // white field) → contain-fit preview (or a tinted placeholder icon when the tool
    // has no preview yet).
    out.push(`<rect x="${P.x + 6}" y="${P.y + 12}" width="${P.w}" height="${P.h}" rx="${P.r}" fill="rgba(0,0,0,0.12)"/>`);
    out.push(`<rect x="${P.x}" y="${P.y}" width="${P.w}" height="${P.h}" rx="${P.r}" fill="#ffffff" stroke="${CARD_PANEL_LINE}" stroke-width="1"/>`);
    if (previewDataUri) {
      const ix = P.x + P.pad, iy = P.y + P.pad, iw = P.w - 2 * P.pad, ih = P.h - 2 * P.pad;
      out.push(`<image x="${ix}" y="${iy}" width="${iw}" height="${ih}" preserveAspectRatio="xMidYMid meet" href="${previewDataUri}"/>`);
    } else if (iconSvg) {
      const s = 190;
      out.push(placeIcon(iconSvg, P.x + (P.w - s) / 2, P.y + (P.h - s) / 2, s, CARD_PLACEHOLDER));
    }

    // Tool icon (left column) — large, thin-stroked, above the name.
    if (iconSvg) out.push(placeIcon(iconSvg, M, CARD_ICON_Y, CARD_ICON_SIZE, CARD_INK));

    // Tool name (1–2 lines), then description (≤3 lines).
    let y = CARD_NAME_Y;
    for (const line of nameLines) {
      out.push(`<text x="${M}" y="${y}" font-family="SUSE" font-weight="700" font-size="${nameSize}" fill="${CARD_INK}">${xmlEsc(line)}</text>`);
      y += Math.round(nameSize * 1.06);
    }
    y += 16;
    for (const line of wrapLines(description, 26, textW, 3)) {
      out.push(`<text x="${M}" y="${y}" font-family="SUSE" font-weight="400" font-size="26" fill="${CARD_MUTED}">${xmlEsc(line)}</text>`);
      y += 36;
    }

    // Footer.
    out.push(`<text x="${M}" y="${OG_H - 54}" font-family="SUSE" font-weight="500" font-size="24" fill="${CARD_MUTED}">lolly.tools</text>`);

    out.push(`</svg>`);
    return out.join('');
  };

  return {
    /** Render one tool's card to PNG bytes (via the injected browser rasteriser). */
    render(card: ToolCard): Promise<Buffer> {
      return rasterize(svgFor(card), { width: OG_W, height: OG_H, background: CARD_BG });
    },
  };
}

// ── Per-view share card (app-section header style) ───────────────────────────
//
// Distinct from BOTH cards above: where the tool card is a light gallery tile, a
// VIEW card is a dark "brand-system" panel — the app's own sections (Dashboard,
// Verify, Catalogue, Projects, Profile) shared as clean deep links (/d, /v, /c,
// /p, /profile). Pine field, a green app-icon tile up top, a big SUSE-Bold title,
// a one-line description, and a large low-opacity watermark of the same icon
// bleeding off the right edge. Cohesive as a family; distinguished by icon + title.

const VIEW_MARGIN = 72;
const VIEW_FIELD    = '#1c4a2e';   // pine field — shared with og.png so the family reads as one brand
const VIEW_INK      = '#ffffff';   // title (bright white on pine)
const VIEW_WORDMARK = '#e4e9e6';   // "Lolly" wordmark — the softer off-white of the /info card subtitle
const VIEW_MUTED    = '#a7bcb0';   // description (dim green-grey)
const VIEW_FOOTER   = '#7f9a8c';   // footer, one step dimmer again
const VIEW_ACCENT   = '#30ba78';   // SUSE Pine Green — the icon tile + watermark

// The green app-icon tile (top-left) and the title beneath it.
const VIEW_TILE   = { x: VIEW_MARGIN, y: 150, size: 128, r: 30 };
const VIEW_ICON_INSET = 30;          // icon padding inside the tile
const VIEW_TITLE_Y   = 408;          // title baseline
const VIEW_TITLE_SIZE = 82;
const VIEW_TITLE_MIN  = 52;

// The per-view card inputs. `iconSvg` is a lucide-style 24×24 stroke icon.
interface ViewCard {
  title: string;
  description: string;
  iconSvg: string;
}

// Shrink the (usually one-word) title only if it would overrun the text column.
function fitViewTitle(title: string, boxWidth: number): number {
  const est = String(title).length * 0.6 * VIEW_TITLE_SIZE;
  return est <= boxWidth ? VIEW_TITLE_SIZE : Math.max(VIEW_TITLE_MIN, Math.floor(VIEW_TITLE_SIZE * boxWidth / est));
}

/**
 * Build a per-view card renderer. `render({ title, description, iconSvg })` returns
 * PNG bytes: a green app-icon tile, the view title and a one-line description on the
 * pine field, with a large translucent icon watermark bleeding off the right. `rasterize`
 * is injected (browser path) so a missing browser degrades like createOgRenderer.
 */
export function createViewCardRenderer(rasterize: SvgToPng) {
  const svgFor = ({ title, description, iconSvg }: ViewCard): string => {
    const M = VIEW_MARGIN;
    const textW = OG_W - M - 96;                 // title/description column width
    const titleSize = fitViewTitle(title, textW);

    const out: string[] = [];
    out.push(`<svg xmlns="http://www.w3.org/2000/svg" width="${OG_W}" height="${OG_H}" viewBox="0 0 ${OG_W} ${OG_H}">`);
    out.push(`<rect width="${OG_W}" height="${OG_H}" fill="${VIEW_FIELD}"/>`);

    // Watermark: the view's own icon, huge and faint, bleeding off the right edge —
    // brand texture that names the section without competing with the type.
    const wm = 620;
    out.push(`<g opacity="0.09">${placeIcon(iconSvg, OG_W - wm + 168, (OG_H - wm) / 2, wm, VIEW_ACCENT, 1.1)}</g>`);

    // Brand wordmark, top-left.
    out.push(`<text x="${M}" y="98" font-family="SUSE" font-weight="700" font-size="34" fill="${VIEW_WORDMARK}">Lolly</text>`);

    // App-icon tile: a rounded green square with the view icon in dark pine — reads
    // like a real app icon, so each section has a recognisable mark.
    const T = VIEW_TILE;
    out.push(`<rect x="${T.x}" y="${T.y}" width="${T.size}" height="${T.size}" rx="${T.r}" fill="${VIEW_ACCENT}"/>`);
    out.push(placeIcon(iconSvg, T.x + VIEW_ICON_INSET, T.y + VIEW_ICON_INSET, T.size - 2 * VIEW_ICON_INSET, VIEW_FIELD, 2));

    // Title, then a one-line (≤2) description beneath it.
    out.push(`<text x="${M}" y="${VIEW_TITLE_Y}" font-family="SUSE" font-weight="700" font-size="${titleSize}" fill="${VIEW_INK}">${xmlEsc(title)}</text>`);
    let y = VIEW_TITLE_Y + 58;
    for (const line of wrapLines(description, 30, textW, 2)) {
      out.push(`<text x="${M}" y="${y}" font-family="SUSE" font-weight="400" font-size="30" fill="${VIEW_MUTED}">${xmlEsc(line)}</text>`);
      y += 42;
    }

    // Footer.
    out.push(`<text x="${M}" y="${OG_H - 54}" font-family="SUSE" font-weight="500" font-size="24" fill="${VIEW_FOOTER}">lolly.tools</text>`);

    out.push(`</svg>`);
    return out.join('');
  };

  return {
    /** Render one view's card to PNG bytes (via the injected browser rasteriser). */
    render(card: ViewCard): Promise<Buffer> {
      return rasterize(svgFor(card), { width: OG_W, height: OG_H, background: VIEW_FIELD });
    },
  };
}

/**
 * Generate one PNG per page into <outDir>/og/<slug>.png. `pages` is the build's
 * page list; only pages with a `slug` and `title` get a card (the landing page is
 * skipped — it keeps the canonical untitled og.png). Best-effort: returns the set
 * of slugs successfully written, or an empty set if the renderer can't start, so
 * the caller can point only those pages at their generated image.
 */
export async function generateOgImages(
  pages: OgPage[],
  outDir: string,
  repoRoot: string,
  log: (msg: string) => void = () => {},
): Promise<Set<string>> {
  let renderer: ReturnType<typeof createOgRenderer>;
  let rasterizer: Awaited<ReturnType<typeof createSvgRasterizer>>;
  try {
    // Our own render path (Chromium). A missing browser / fonts throws → pages fall
    // back to og.png, same degrade contract as the old dynamic-resvg import.
    rasterizer = await createSvgRasterizer(repoRoot);
    renderer = createOgRenderer(rasterizer.rasterize, repoRoot);
  } catch (e) {
    log(`og: image generation skipped (${(e as Error).message}); pages fall back to og.png`);
    return new Set();
  }
  mkdirSync(resolve(outDir, 'og'), { recursive: true });
  const done = new Set<string>();
  for (const page of pages) {
    if (!page.slug || !page.title || page.isLanding) continue;
    try {
      writeFileSync(resolve(outDir, 'og', `${page.slug}.png`), await renderer.render(page.title));
      done.add(page.slug);
    } catch (e) {
      log(`og: ${page.slug} failed (${(e as Error).message}); falls back to og.png`);
    }
  }
  await rasterizer.close();
  log(`og: generated ${done.size} page card${done.size === 1 ? '' : 's'}`);
  return done;
}
