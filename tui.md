# TUI

The **TUI** (text user interface) is Lolly's interactive **terminal shell** - the whole app driven by the keyboard, inside your terminal. Where the [CLI](/info/cli.html) is a one-shot command for scripts and pipelines, the TUI is a full-screen, keyboard-first surface for **browsing tools, filling in inputs, saving projects, editing your profile, and exporting** - without leaving the terminal or opening a browser.

It runs the **same engine and the same render path** as the web shell and the CLI, so its output can never drift from the GUI.

```bash
npm run tui
```

It takes over the whole screen (like `vim` or `htop`) and restores your terminal on exit. It needs a real interactive terminal (a TTY).

## How it relates to the CLI

The TUI is the **CLI bridge under an interactive transport**. Its host bridge reuses the CLI's implementation verbatim - same headless DOM (jsdom), same filesystem asset access, same export path. The one difference is that the TUI owns the screen, so log output goes to an in-app buffer instead of stdout.

|  | [CLI](/info/cli.html) | TUI |
|---|---|---|
| Shape | One-shot command | Interactive full-screen app |
| Best for | Scripts, CI, pipelines, batch fan-out | Exploring tools, hand-tuning inputs, quick one-offs |
| Input | `--flag=value` argv | Keyboard, in place |
| Engine / output | Same engine, same bytes | Same engine, same bytes |
| State | In-memory, ephemeral per run | Persisted on disk (`~/.lolly`) |

If you can express a job as a URL, prefer the CLI - it's reproducible and pipeable. Reach for the TUI when you want to **see and adjust** a tool the way you would in the web shell, but from a terminal.

## Views

The TUI mirrors the web shell's layout, distilled to the terminal. Switch top-level views with the number keys; every view is keyboard-navigable (`hjkl` / arrows, `Enter` to open, `Esc` to go back).

- **Gallery** - a responsive card grid of every tool. `/` searches; `Enter` opens a tool. Only tools needing a live device the headless browser can't open (mic/camera recording) are hidden.
- **Projects** - your saved sessions, organised into nested folders. Create folders (`n`), move sessions into them (`m`), open, delete, and **batch** them: export a whole folder (`e`), tick an ad-hoc set with `Space` and batch the selection (`b`), or run a **CSV batch** (`c`) - all into one `.zip` on the Desktop.
- **Catalog** - browse every catalog asset; favourite (`f`), hide (`d`), and **export an asset** (`e`) to any format (opens the `asset-export` tool seeded with it).
- **Profile** - edit the details tools pre-fill from (`bindToProfile`): name, email, phone, company, and the "credit me" preference. Changes persist.
- **Tool view** - a two-pane (desktop) / stacked (mobile) layout: an **Inputs** panel beside an **Export** settings panel and a preview. `Tab` switches panels; `j`/`k` move between inputs; `Enter`/`e` edits; `Space` toggles booleans; `←`/`→` cycle selects (and step number sliders). Every input type is editable, including repeating **blocks** (drill in to add/reorder/nest rows) and **`asset`** inputs (a catalog picker on `Enter`, or type an id / `lolly.tools` URL with `e`). Export settings expose **Format · Width · Height · Unit · Filename · Folder** with a derived output path.

### Batch (the "TUI way", no `/pro` grid)

Three sources, one zip: a **Projects folder** subtree (`e`), a **ticked multiselection** of saved sessions across folders (`Space` to tick, `b` to run), or a **CSV/TSV file** (`c`) - the same row format the CLI `batch` subcommand reads (a `toolId` column, optional per-row `format`/`width`/`height`/`unit`/`dpi`, and a column per input). The result is one `.zip` on your Desktop, optionally password-locked.

### Preview priority

For a **designer tool** the preview is low-priority and opt-in (`p`). For a **utility** - where the output *is* the whole point - it's the primary pane, shown automatically (even on a narrow terminal):

- a **text-based / interactive** utility (`color-palette`, `text-helper`, …) has its rendered **HTML content displayed as terminal text** - the TUI walks the hydrated DOM into structured, coloured lines (headings, tabs/buttons, and colour swatches shown as blocks *in their actual colour*, resolved from the tool's own CSS). The content is the point, so it's shown, not an "export me" placeholder.
- a **file-transform** (`strip-data`, `compress-pdf`) shows a **result summary** with the before→after size delta.
- **`url-shot`** shows the **capture settings** (URL, size, crop, recolor).

No wasted space on a form that barely exists.

The layout is responsive: narrow terminals collapse the two-pane tool view into a single stacked column, the same way the web shell reflows on mobile.

## Inputs it can edit

Every input type the engine models is editable from the keyboard - text, numbers, booleans, selects, and repeating **`blocks`** (drill into a block → its rows → its fields; add, delete, reorder, and nest). It also edits **`file`** inputs (give it a path - the bytes are read locally and handed to on-device utilities like `strip-data`) and **`asset`** inputs (a catalog id like `suse/logo/hor-pos-green`, or a pasted `lolly.tools` tool link, resolved to an embedded render).

## Inline preview

Preview is **opt-in** (`p`) and secondary - seeing inputs, files, projects, and export settings matters more than pixels in a terminal. When enabled, the TUI rasterises the tool's SVG and renders it as a truecolor half-block image directly in the terminal cells (no external image protocol required).

## What it can render

Two tiers, picked automatically per format:

- **DOM-free (always available):** **SVG, EMF, EPS, HTML, and the text/data formats** (JSON, CSV, ICS, VCF) render through the same headless engine path as the CLI - instant, no browser.
- **Browser tier (opt-in, on demand):** everything that needs a real layout/paint engine - **raster (PNG/JPG), PDF, video** and **live-URL capture** - is produced by a scoped headless **Chromium**. For an ordinary tool the TUI drives a built copy of the web shell so the bytes are *identical* to a web/desktop Download; there is no second render path to drift. The browser launches only when you first export one of these formats, never at startup.

Set the browser tier up once:

```bash
npm run install:browser   # downloads Chromium into services/mcp/.browsers (shared with the MCP server)
npm run build:web         # a built web shell for full-fidelity raster/pdf/video
```

If Chromium (or the built shell) isn't present, those formats fail with a one-line "run `npm run install:browser` / `npm run build:web`" message, and the TUI falls back to writing HTML so every tool still exports *something*. SVG and data formats never need either.

Exports are written to your desktop (`~/Desktop`) by default, with the folder editable per export.

## URL Screenshot (`url-shot`)

`url-shot` - capture any live web page - runs fully in the TUI on the browser tier. It drives Chromium straight at the URL, so you get more than a plain shot:

- **Formats:** **PNG / JPG** (a real screenshot), **PDF** (a true *vector* print - selectable text, crisp at any zoom), and **SVG** (the high-DPI shot in a scalable container).
- **Crop:** trim in from each edge (top / right / bottom / left) as a 0–0.9 fraction.
- **Recolor:** recolour the whole page before capture - invert, grayscale, sepia, a hue shift, or a **tint** that washes it in a colour of your choice.
- Plus the existing scroll-depth, settle delay, and custom-CSS controls.

The crop and recolor controls are ordinary tool inputs, so they're editable from the keyboard like any other. (Recolor also applies in the web/desktop shells; crop and vector PDF/SVG are the terminal capture's own.)

## Persistence

Unlike the ephemeral CLI, the TUI keeps state on disk under `~/.lolly` (override with `$LOLLY_TUI_DIR`): saved sessions, project folders, and your profile. A saved session stores the tool's serialised URL-state, so reopening it round-trips through the same parser the web shell and CLI use - not a lossy snapshot of raw values.

## Related

- [CLI](/info/cli.html) - the one-shot, scriptable counterpart. Same engine, same output.
- [URL Mode](/info/url-mode.html) - the parameter model both terminal shells share with the web shell.
- [Exporting & Formats](/info/exporting.html) - what each format is for and which shells produce it.
- [Overview](/info/overview.html) - how the shells sit on top of one shared engine.
