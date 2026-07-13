# Import a design (Figma, Penpot, Illustrator, InDesign)

Bring a finished design **out of Figma, Penpot, Illustrator or InDesign and into Lolly** — not as a frozen picture, but as a live, editable layout you can keep working on, mix with tools, and render through Lolly's deterministic export path. Like everything else, the whole import happens **on your device**: the file is parsed in your browser and nothing is uploaded.

The good news for everything you've already made: none of it is stranded in the app you drew it in. A design you spent hours on in another tool arrives as an editable session, already conformed to your design globals — and once you save it, it's a reusable template anyone with Lolly can open and refill.

Import lives in **[Layout Studio](/info/using.html)**, Lolly's free canvas: open it, click **Import a design** in the canvas toolbar, and choose a file. The artboard resizes to the file's frame and every layer becomes an editable box on the same open canvas — so an imported artboard is just an ordinary Layout Studio session from the first click.

## What you can import

Several file kinds go in — a native Figma binary, a Penpot export, an Illustrator or PDF file, an InDesign markup file, or **any SVG**. That last one is the wide door: SVG is a universal export (or native save) format, so almost any design app can reach Lolly through it.

| File | What it is |
|---|---|
| **`.fig`** | A native Figma file (File → Save local copy). Decoded entirely in the browser — no Figma account, plugin, or API key involved. |
| **`.penpot` / `.zip`** | A Penpot export (its standard export bundle). |
| **`.ai` / `.pdf`** | An Illustrator file (saved with the default *PDF-compatible* option) or any PDF. Vector paint, text and images are read straight out of the page. |
| **`.idml`** | An InDesign layout (*File → Export → InDesign Markup*). A raw `.indd` can't be read directly — export IDML first. |
| **`.svg`** | Any SVG — Figma and Penpot SVG exports, or hand-written markup. *Tip: for editable text from a Figma SVG, untick "Outline text" on Figma's export dialog.* |

### Where each app fits

- **Figma** — *File → Save local copy* for a native `.fig`, or export a frame as SVG. (Untick *Outline text* on the SVG export to keep headlines retypable.)
- **Penpot** — its standard `.penpot` export, or any SVG export. Penpot is also where the **brand tokens** round-trip both ways — see below.
- **Illustrator** — a native `.ai` (kept PDF-compatible, the default) or a `.pdf` opens directly; no SVG step needed.
- **InDesign** — *File → Export → InDesign Markup* for an `.idml`. A print layout becomes an editable, brand-conformed Lolly session. (A raw `.indd` isn't readable — export IDML.)

## What happens to the layers

The importer maps design layers onto the free canvas's box model, keeping as much editable as it can:

- **Text stays text.** Frames of type become real text boxes — content, size, alignment, weight, line-height, and per-run colours carry over — so you can retype a headline, not repaint it.
- **Shapes stay shapes.** Rectangles, rounded rects, ellipses and pills become native shape boxes with their fills, opacity, rotation and corner radii.
- **Images are extracted.** Bitmaps land in **My images** (your on-device library) and are placed as image boxes.
- **Complex vector art is flattened faithfully.** Paths, gradients and other paint Lolly's box model can't express are baked into crisp standalone SVG image boxes, so the visual result survives even where editability can't.
- **Geometry is exact.** Positions, sizes and rotations are resolved by the browser itself (the same maths that rendered the original), so the imported layout lines up with the source.

## It conforms to the brand

This is the point of importing rather than pasting a screenshot: the result is a **governed** layout, not a foreign artboard.

- **Type remaps to the brand faces.** Every imported font becomes one of the faces your brand pack ships (monospace families map to your brand's mono face, weights clamp to the cuts that exist). That's intended behaviour — the design arrives already on-brand.
- **Colours are guarded.** Every imported fill passes the same colour sanitiser native boxes use; from there you can snap them to brand swatches with the normal pickers.
- **Everything else is a normal session.** Drag, rotate, snap, group, clip; place [themable icons](/info/authoring-assets.html) and library assets; save it, share it as a URL, run it through [Batch](/info/exporting.html).

## Rendering

An imported design exports exactly like a native one: **SVG, PDF, PNG, JPG, WebP** through the same deterministic pipeline — true page sizes and physical units, outlined type in vector output, [Content Credentials](/info/exporting.html) on every stampable format. The design's new home is its URL, so a once-off Figma file becomes a reproducible, parameter-addressable asset.

## From a one-off design to a reusable template

This is where import stops being a conversion and starts being *authoring*. An imported layout is an ordinary [Layout Studio](/info/using.html) session, so it inherits everything a native session can do:

- **It's a template anyone can reuse.** Save it and the layout lives at a URL. Anyone with Lolly can open that URL, change the words, swap an image, and render their own version — no design app, no design skill, and the parts the author locked stay locked. The person who imported the artboard becomes its author; everyone else just fills in the blanks.
- **It mixes with tools.** Any box can hold another Lolly tool as a live asset — a badge that renders its own QR code, a card with a live chart, another render dropped in through the asset picker. Those stay live and re-render on load; they're never flattened pictures. So an imported poster can carry generated, always-current content the original file never could.
- **It scales like any session.** Drive it from the [batch grid](/info/exporting.html) (one finished asset per spreadsheet row), keep it in a [Projects folder](/info/using.html), or render a whole folder as one zip. A single imported design turns into a whole run of consistent variants.

For a *fully declarative* tool — sidebar inputs, hard-coded constraints, the works — you'd still author a `tool.json` by hand (see [Authoring Tools](/info/authoring-tools.html)). Import gets you the fast, visual 90%: a governed, shareable, tool-embedding layout without writing a manifest.

## Round-tripping the brand itself

Import travels one direction; the **brand primitives travel both ways**. Lolly's colours are [DTCG design tokens](/info/design-tokens.html) — the same format Penpot imports/exports natively and Tokens Studio brings to Figma — so the palette you design *with* in Figma/Penpot and the palette Lolly enforces are one document, not two hand-synced lists.

## Limits & safety

- Imported SVG is treated as untrusted: scripts, event handlers and foreign objects are stripped **before** parsing, and anything flattened to disk is sanitised a second time on ingest. Nothing executes, nothing leaves the device.
- Very large files are capped at **2,000 elements** — anything past that is dropped with a warning rather than locking the tab.
- Effects outside the box model (complex blend stacks, exotic strokes) flatten into the image fallback rather than round-tripping as editable properties.

## Every format Lolly can read

Design files are one way in — the table above covers them. For the complete picture, here is everything Lolly ingests. As with a design import, **every file is parsed on your device and nothing is uploaded**.

### Images

Drop a photo or graphic into any image picker or your **My images** library.

| Format | Notes |
|---|---|
| **`png` · `jpg`/`jpeg` · `webp`** | Decoded natively; stills are downscaled and stripped of EXIF/GPS on ingest, then kept in **My images**. |
| **`gif` · `apng` · animated `webp`** | Animated rasters are recognised and stored **verbatim** — frames intact — so they stay animated when placed. |
| **`avif`** | Read wherever your browser decodes it natively (no bundled fallback). |
| **`heic` / `heif`** (`.heic`, `.hif`) | iPhone photos decode even where the browser can't, via a bundled libheif fallback. |
| **`svg`** | Sanitised (scripts, `on*` handlers and `javascript:` URLs removed) and normalised to a clean viewBox. |

### Data

Paste or drop a table and a tool's repeating blocks fill from it (up to 1,000 rows).

| Format | Notes |
|---|---|
| **`csv`** | RFC 4180 — quoted fields, `""` escaping, embedded commas/newlines, CRLF/LF, BOM. |
| **`json`** | An array of row objects, headerless positional arrays, or a `{ "data": [...] }` / `{ "rows": [...] }` wrapper. |
| **Lottie** (`.json`, `.lottie`) | Bodymovin JSON and dotLottie animations validate and place as live vector animations. |

### Video

| Format | Notes |
|---|---|
| **`mp4` · `mov`** | ISO-BMFF containers, stored **verbatim** (never transcoded); dimensions probed locally. |
| **`webm`** | Matroska/EBML, stored verbatim. |

### Content Credentials (verify)

Lolly reads and cryptographically verifies a signed [C2PA](https://c2pa.org) manifest embedded in **PDF, PNG/APNG, JPG, GIF, SVG, TIFF, WebP, MP4 and WebM/MKV** — entirely on-device, against the signing certificate. See [Content Credentials](/info/exporting.html#content-credentials-c2pa). (HEIC and AVIF are read as images but carry no credential.)

### Metadata (to strip it)

The **Strip Hidden Data** utility *reads* embedded metadata so it can remove it — EXIF/GPS/IPTC/XMP from **JPEG**, text and time chunks from **PNG**, comments and editor namespaces from **SVG**, and document info from **PDF**. The cleaned file never leaves your device.
