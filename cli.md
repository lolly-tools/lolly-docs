# CLI

`lolly` runs any tool from the terminal - same engine, same render path, same output as the web shell. It's **URL mode under a different transport**: `--foo=bar` argv pairs become the exact values the web shell parses from `?foo=bar`, so the CLI can never drift from the GUI. Great for build pipelines, CI, scripting, and batch generation.

> Want an **interactive** terminal experience instead of one-shot commands - browse tools, tweak inputs, save projects, all from the keyboard? See the [TUI](/info/tui.html). It shares this same engine and render path.

From the repo it's wired as an npm script (note the `--` to pass args through):

```bash
npm run cli -- <tool-id> [--input=value ...] [--export=fmt] [--output=file]
# or, if installed as a binary:
lolly <tool-id> [--input=value ...] [--export=fmt] [--output=file]
```

## Discovering tools & assets

```bash
npm run cli                      # list every tool (id, status, description)
npm run cli -- qr-code           # show that tool's inputs, defaults, and formats
npm run cli -- assets            # list every catalog asset id (logos, icons, photos…)
npm run cli -- assets logo       # filter by substring
npm run cli -- assets --type=raster
```

`<tool-id>` with no flags prints the input schema and a usage line - including a `↳` syntax hint for the non-scalar input types (how to express `asset`, `blocks`, `vector`, `file`, `color` values). The fastest way to learn what a tool accepts.

Any listed **asset id** can be passed to an `asset`-type input (the engine resolves it to the embedded asset), and so can a **`lolly.tools` tool URL** - a whole tool's render becomes the asset. To render a **bare asset** straight to a file, use the built-in `asset-export` shim:

```bash
npm run cli -- asset-export --src=suse/logo/hor-neg-green --export=svg --output=logo.svg
npm run cli -- asset-export --src='https://lolly.tools/tool/qr-code.svg?url=x' --output=qr.svg
```

## Rendering

```bash
# Write to a file (extension is yours to choose):
npm run cli -- qr-code --url=https://suse.com --output=./qr.svg

# Explicit format, stream to stdout (pipe or redirect):
npm run cli -- qr-code --url=https://suse.com --export=png > qr.png
```

If `--output` is given, the file is written and a byte count is reported on stderr; otherwise the bytes go to **stdout** so you can pipe them.

## Flags

| Flag | Meaning |
|---|---|
| `--output=<path>` | Write to a file. Omit to stream to stdout. |
| `--export=<fmt>` | Output format (`png`, `svg`, `pdf`, `gif`, …). Defaults to the tool's first declared format. Ignored by on-device transform tools (see below). |
| `--width=`, `--height=` | Output size (numbers). |
| `--unit=` | `px` (default), `mm`, `cm`, `in`, `pt`, `pc` - physical sizing. |
| `--dpi=` | Raster DPI for physical units (default 300). |
| `--c2pa[=7\|30\|90\|365]` | Stamp [Content Credentials](/info/exporting.html) into the output (`svg` on the bare CLI), signed with an ephemeral on-device certificate of that lifetime (default 30 days; `--c2pa=off` forces off for a `render.c2pa` tool). Verify with `lolly validate <file>`. |
| `--<inputId>=<value>` | Any tool input (see the tool's schema). |
| `--<flag>` | A bare flag (no `=`) is truthy - handy for boolean inputs. |

Everything that isn't a reserved flag is treated as a tool input and validated against the manifest. Example - an A4 page:

```bash
npm run cli -- quotes --quote="Ship it." --width=210 --height=297 --unit=mm --export=pdf --output=page.pdf
```

## What the CLI can render

The CLI renders in a headless DOM (jsdom), so **vector and structured** formats - **SVG, EMF, EPS (and EPS-CMYK), DXF, HTML, plus the data formats JSON, CSV, ICS, VCF, MD, TXT** (the engine hydrates those payloads) - work natively and reproducibly, no browser needed. EMF, EPS and DXF are emitted straight from the template's vector primitives (no rasteriser), and the CLI carries the **same HarfBuzz text-shaping as the web shell** (`host.text`), so live `<text>` runs are outlined to true vector paths at export - those formats ship real text with no fonts needed on the receiving end, and font-driven tools (a wordmark lockup built on `host.text`, say) render headlessly too. Shaping resolves sfnt fonts (ttf/otf) under the repo root - catalog and tool-local faces; a browser-only woff2 face is rejected with a clear error rather than silently shaping blanks. **PNG** from an `<svg>`-based tool is also browser-free - resvg rasterises the engine's own SVG (Tier A). The remaining raster formats - **JPG, WebP, PDF, and video (GIF/WebM/MP4)**, plus HTML-layout PNG - need a real paint engine, so the CLI drives its **own scoped headless Chromium** (Tier B): install it once with `lolly install-browser` (or `npm run install:browser`) and they export straight from the CLI. **ZIP** is the one format the lean CLI leaves out - no zip dependency - so its batch writes a folder instead. (Requesting a format a tool doesn't declare prints a clear error listing what it supports.)

## File inputs & on-device utilities

Some tools take **your own file** as input (a `file`-typed input) and hand back a transformed copy - the on-device "utility" shape (strip EXIF, crop, convert). On the CLI, pass the file as a path; the runner loads its bytes:

```bash
npm run cli -- strip-data --source=./holiday.jpg --output=./holiday-clean.jpg
```

These tools produce their output via the `exportFile` transform path (bytes in → bytes out), not a DOM render - so they **ignore `--export`** and there's no render format to choose. The transformed bytes are written to `--output`, or streamed to **stdout** if you omit it. Nothing is ever uploaded; the file is read locally and handed straight back.

## Composed tools

Some tools **embed another tool's render** as an asset - declared in the manifest (`composes`) with no tool-to-tool imports. For example, `event-name-badge` composes `qr-code` as an SVG. Composition is transparent on the CLI: the runtime resolves it on mount, so the embedding tool renders headlessly with **no extra flags**.

It follows the same vector stance as the rest of the CLI: an **SVG child composes end-to-end and stays vector**, while a **raster child is omitted gracefully** (the parent still renders, just without that slot). For full raster-child composition, run the Tauri-bundled build - the same boundary as raster export above.

## Batch

A batch is **many URL-mode rows under one file** - the same principle as a single render, tabulated. `lolly batch <rows.csv>` renders one output per row into a directory (a directory, not a zip: the lean CLI has no zip dependency, and a folder composes with your own `zip`/`tar`; the TUI's batch packs a zip instead).

```bash
# Author a starter grid for one or more tools (their input columns + reserved columns):
npm run cli -- batch --template=qr-code,chart-creator > rows.csv

# Render every row → ./out/NN-<name>.<fmt>
npm run cli -- batch rows.csv --out-dir=./out [--keep-going]
```

The header row names the columns: a **`toolId`** column is required; **`format` · `width` · `height` · `unit` · `dpi` · `filename`** are per-row output settings; every other column is a **tool input id** whose cell is a value (any URL-mode form - plain text, JSON/tilde blocks, `id.field` vectors). Rows can mix tools freely. Example:

```csv
toolId,format,url,color,src
qr-code,svg,https://suse.com,#0c322c,
qr-code,png,https://opensuse.org,#30ba78,
asset-export,pdf,,,suse/logo/hor-neg-green
```

`--keep-going` renders past a failing row (otherwise the batch stops with a non-zero exit).

## Smoke-test the catalog (`lolly smoke`)

```bash
npm run cli -- smoke                              # render EVERY tool at manifest defaults
npm run cli -- smoke --only=qr-code,chart-creator # just these ids
npm run cli -- smoke --format=svg                 # force one Node-native format
```

`lolly smoke` is the catalog-wide render gate: every tool in the active profile renders at its manifest defaults to its first Node-native format - browser-free; a tool whose declared formats are all browser-only falls back to an `html` render, which still exercises load → hydrate → hooks. Every output is checked for blank or empty results, each tool prints a ✓/✗ row, and the exit code is non-zero if anything fails - so wired into CI, a `hooks.js` regression can never ship a tool that renders blank. Tools that legitimately can't render headlessly are skipped with a reason, never failed: transform tools (file in → bytes out; nothing to render at defaults) and tools gated on a live capture capability (camera / microphone / screen / capture).

## Scripting & CI

Because output is deterministic - same inputs, same bytes - the CLI fits anywhere you generate other build artifacts:

```bash
# Generate an OG image at build time instead of committing a binary:
npm run cli -- quotes --quote="Ship it." --export=svg --output=./public/og.svg
```

Exit code is non-zero on error; messages go to stderr (set `DEBUG=1` for a stack trace). Input validation failures list each offending field.

## Point it at another brand pack (`LOLLY_ROOT`)

The CLI reads tools and the asset catalog from the repo root it finds itself in. Set `LOLLY_ROOT` to render from any directory with the same layout - a `tools/` directory of tool folders and a built `catalog/`:

```bash
LOLLY_ROOT=/path/to/brand-pack npm run cli -- qr-code --url=https://example.com --output=qr.svg
```

The override is **marker-validated**: the directory must hold a generated catalog index (`catalog/tools/index.json` or `catalog/assets/index.json`), and a `LOLLY_ROOT` without one is ignored - resolution falls back to walking up from the CLI itself, then the working directory. That makes the CLI a generic brand-pack renderer: build a pack's `tools/` + `catalog/` and every command here - render, batch, smoke, assets - runs against it, with zero code change.

## Related

- [TUI](/info/tui.html) - the interactive, full-screen terminal counterpart. Same engine, same output; keyboard-driven instead of one-shot.
- [URL Mode](/info/url-mode.html) - the parameter model the CLI shares with the web shell (and the reserved params).
- [Exporting & Formats](/info/exporting.html) - what each format is for.
- [AI Agents](/info/ai-agents.html) - driving the same surface from an LLM.
- **/pro batch** - the web shell's interactive counterpart to the scripted fan-out loop above: a spreadsheet-style grid with CSV round-trip, spreadsheet paste, and per-row output across one or many tools.
