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

Any listed **asset id** can be passed to an `asset`-type input (the engine resolves it to the embedded asset), and so can a **`lolly.tools` tool URL** - a whole tool's render becomes the asset. To render a **bare asset** straight to a file, use the `asset-export` tool - note it ships with the **SUSE brand pack**, so it is profile-dependent and absent on a community-only profile (where these commands print `Tool not found: asset-export`):

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
| `--imprint` | Embed the [Lolly Imprint](/info/exporting.html) pixel watermark (opt-in on the CLI, unlike the web shell where it is on by default). |
| `--durable=1` | Embed the opt-in durable (TrustMark-format) credential. Needs the encoder model on-device. |
| `--password=<pw>` | Open password for a rendered PDF. |
| `--bleed=<dim>`, `--marks=<list>` | Print bleed and marks (`crop`, `reg`, `bleed`, `bars`, `prov`) for the print formats. Browser tier only. |
| `--press-profile=<cond>` | CMYK press condition (`fogra39`, `fogra51`, `swop`, `gracol`) - **named** in the PDF's output intent. The CLI has no profile store, so it cannot embed one, and a named-only intent is not PDF/X-4: the output intent is written, the `GTS_PDFXVersion` claim is not. Embedding a profile you loaded is a web-shell feature today (`profile=own`). **Not** `--profile` - see the warning below. |
| `--user-profile=<file.json>` | A user-profile JSON file, used to pre-fill `bindToProfile` inputs. A path that cannot be read or parsed is an error (exit 2), not a warning. |
| `--lang=<code>` | Content language (`de`, `ja`, `ar`, …). |
| `--share`, `--link` | Print a shareable `lolly.tools` link for these inputs instead of rendering anything. |
| `--z=<token>` | Expand a packed link token into the inputs it encodes. |
| `--<blocksId>-data=<rows.csv>` | Import a CSV/JSON file into a `blocks` input (the ingest counterpart of CSV export). |
| `--verify` | For an on-device utility, print one line per file saying its export checks ran and none failed. A failed check writes nothing and exits `1`. |
| `--<inputId>=<value>` | Any tool input (see the tool's schema). |
| `--<flag>` | A bare flag (no `=`) is truthy - handy for boolean inputs. |

> **`--profile` means the press condition.** It is an alias of `--press-profile`, matching URL mode's reserved `profile` param, so a pasted share link's `profile=fogra51` and a typed `--profile=fogra51` mean the same thing. The *user-profile JSON file* has its own flag, `--user-profile=<file.json>`. Before GA, `--profile` meant the file and was quietly remapped for links; that remap is gone.

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

Most utilities run entirely in the headless DOM. A few **rebuild real pixels** - `redact` repaints an image on a canvas and rasterises PDF pages - which jsdom cannot do, so the CLI re-runs that same export in the scoped Chromium driving the built web shell (the Tier B path above). It says so on stderr when it switches. If the browser or the built shell is missing it stops and names what to install (`lolly install-browser`, `npm run build:web`); it never writes a file that was not actually redacted.

### Redaction instructions: one string, many files

A redaction is fully described by its bars plus its options, and that description is ordinary URL state - so the same string works as a share link, as CLI flags and as an [MCP](/info/mcp.html) call. Bar fields are `page,x,y,w,h`: PDF bars in points from the page's top-left, image bars in pixels.

```bash
# Compact rows (tilde-separated), the form a share link uses:
npm run cli -- redact --source=./contract.pdf --bars='1,40,60,200,24~2,40,100,120,14' \
  --grayscale --output=./contract-redacted.pdf --verify

# The same instructions as JSON, or from a spreadsheet:
npm run cli -- redact --source=./scan.png --bars='[{"page":1,"x":40,"y":60,"w":200,"h":24}]' --output=./scan-redacted.png
npm run cli -- redact --source=./scan.png --bars-data=./bars.csv --output=./scan-redacted.png
```

Because the instructions are just a link, you can mark up one document in the app, hit **Share**, and run that link headlessly over every other copy - forms, certificates, invoices and anything else where the same fields sit in the same place on every page:

```bash
for f in ./inbox/*.pdf; do
  npm run cli -- "$SHARE_LINK" --source="$f" --output="./clean/$(basename "$f")" --verify || echo "FAILED: $f"
done
```

`--verify` prints a line per file once the tool's own gate has run: the redacted copy is re-opened and re-scanned (no metadata, one end-of-file marker, no recoverable covered text, bar regions re-sampled as solid fill) before any bytes are written. A failed check is a non-zero exit with the tool's own sentence and **no output file**, so a shell loop can treat failures as failures. What it cannot tell you is whether an invisible whole-image watermark was present: nothing here detects or removes one.

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

(That last row uses `asset-export` and a `suse/…` asset id, so it needs the SUSE brand pack mounted - swap in a tool and asset from your own profile.)

`--keep-going` renders past a failing row (otherwise the batch stops with a non-zero exit).

## Render-check the catalog (`lolly smoke`)

```bash
npm run cli -- smoke                              # render EVERY tool at manifest defaults
npm run cli -- smoke --only=qr-code,chart-creator # just these ids
npm run cli -- smoke --format=svg                 # force one Node-native format
```

`lolly smoke` is the catalog-wide render gate: every tool in the active profile renders at its manifest defaults to its first Node-native format - browser-free; a tool whose declared formats are all browser-only falls back to an `html` render, which still exercises load → hydrate → hooks. Every output is checked for blank or empty results, each tool prints a ✓/✗ row, and the exit code is non-zero if anything fails - so wired into CI, a `hooks.js` regression can never ship a tool that renders blank. Tools that legitimately can't render headlessly are skipped with a reason, never failed: transform tools (file in → bytes out; nothing to render at defaults) and tools gated on a live capture capability (camera / microphone / screen / capture).

## Preflight an export (`lolly preflight`)

```bash
npm run cli -- preflight qr-code --export=pdf-cmyk           # count and check, do not render
npm run cli -- preflight qr-code --export=pdf-cmyk \
    --width=210 --height=297 --unit=mm --bleed=3mm --marks=crop,reg
npm run cli -- preflight qr-code --export=svg --json | jq    # the machine artifact
npm run cli -- preflight 'https://lolly.tools/#/tool/qr-code?url=…&format=pdf-cmyk'
```

`lolly preflight` answers "what am I about to export, and is anything wrong with it" without rendering anything. It takes the SAME render flags a real run takes - `--export`, `--width`/`--height`/`--unit`/`--dpi`, `--bleed`, `--marks`, `--press-profile`, `--cuts`, `--hdr`, `--durable`, `--z`/`--zx`, and a pasted share link - because preflighting settings other than the ones a render would use is worthless. The rules live in the engine (`engine/src/preflight.ts`), so the web export panel and this subcommand report the same findings for the same job.

It has three flags of its own:

| Flag | Effect |
|---|---|
| `--json` | one JSON document on stdout and nothing else |
| `--strict` | warnings fail the run too (opt-in CI gate) |
| `--out=<file>` | write the report to a file instead of stdout |

Exit codes: **0** it ran and there is nothing to fix, **1** it ran and found an error (or, with `--strict`, a warning), **2** it could not run at all - unknown tool, unreadable manifest, a `zx=` link with no password, a refused flag. A count that cannot be TAKEN is never a failure: "needs the artwork on screen", "no brand palette resolved", "no physical page size was set" are stated gaps in the report, and they exit 0 permanently. With `--json`, stdout carries exactly one JSON document on **every** path, including exit 2 - the shared envelope, with the report as `result` and, on the failure path, `ok:false` plus an `error` - so `lolly preflight X --json > r.json` never leaves an unparseable file behind. Read the findings at `.result.findings`.

The report's `job` member carries the collection context as well as the tool and format - `source`, `modelPhase`, `stageMounted`, `paletteResolved`, and an echo of the settings the findings were taken against. A clean report taken headlessly with an unresolved palette and an un-run `onInit` must not look identical to one taken with all three in hand, because the artifact is the copy that travels.

Two things it deliberately refuses rather than silently ignoring: `--rate-card` (preflight counts, it does not cost - there are no rates and no money anywhere in it) and `--batch` (not implemented yet; a silently-ignored `--batch=rows.csv` would print a confident single-job report that reads like a 50-row answer).

The finding to know about: if your brand declares a spot ink that is actually a FINISH (a foil, an emboss, a spot varnish, a cutting rule), Lolly writes it as its own named plate whose process fallback is a 100% black mask, in every CMYK sink - the CMYK PDF, the CMYK TIFF, and `eps-cmyk` in both the browser and this CLI. It is never given the swatch's own colour build, so a RIP that flattens spots paints an unmistakable mask rather than a plausible metallic. What is still wrong, and what the error actually says: **overprint is implemented nowhere in the platform, so the finish plate knocks out the artwork beneath it**. Agree with your printer how they want the finish supplied before sending the file.

## Scripting & CI

The same inputs give the same **render** every time - that is what makes a tool a build artifact rather than a generation - so the CLI fits anywhere you generate other build outputs:

```bash
# Generate an OG image at build time instead of committing a binary:
npm run cli -- quotes --quote="Ship it." --export=svg --output=./public/og.svg
```

### How far "the same" goes, byte for byte

Reproducible *renders* and reproducible *bytes* are not the same promise, and only some formats keep the second one. Measured, not assumed - two consecutive runs of the same command, hashed:

| Path | Byte-identical across runs? |
|---|---|
| **SVG** and the data formats (JSON, CSV, ICS, VCF, MD, TXT), EMF, EPS, DXF | **Yes.** Nothing in them carries a clock or a random seed. |
| **PNG** from an `<svg>`-based tool (the resvg tier) | **Yes.** |
| **PDF** | **No.** Every PDF carries `/CreationDate` and `/ModDate`; two runs a second apart differ in those bytes (613 differing bytes in a measured 84 KB file, all of them in the trailer and metadata). |
| **JPG, WebP, HTML-layout PNG, video** (the headless-Chromium tier) | **No.** The browser's paint and encode are not byte-reproducible run to run. |
| Anything with `--c2pa`, `--durable` or `--imprint` | **No.** A credential is signed with a fresh timestamp, by design. |

So: check a hash of an SVG into a lockfile if you like; do **not** build a CI gate on the hash of a PDF, a JPEG, or a browser-tier PNG. Compare those by rendering and inspecting, not by digest.

### Exit codes

One code per outcome, so a pipeline can branch instead of grepping stderr. Frozen at GA:

| Code | Name | Meaning |
|---|---|---|
| 0 | `OK` | The requested thing was produced. |
| 1 | `FAILED` | It was possible, it ran, it failed (a hook threw, the render produced nothing). |
| 2 | `USAGE` | Wrong invocation: unknown tool, undeclared format, missing argument, unreadable path. |
| 3 | `UNAVAILABLE_HERE` | Impossible in **this** installation - no browser, an unmet capability. May well succeed on another runner; this is the code to retry elsewhere on. |
| 4 | `REFUSED` | A protective check said no: a `--verify` gate failed, the bytes were not the format claimed, a credential is present but broken. |
| 5 | `NOT_FOUND` | A legitimate negative answer. `validate`: no credential present. Not an error. |
| 6 | `AUTH` | Missing or wrong password. |
| 70 | `INTERNAL` | Unclassified exception: a bug in Lolly. Distinct so an agent stops retrying it. |

Messages go to stderr (`--verbose`, or `DEBUG=1`, adds stack traces). Input validation failures list each offending field.

### Machine interface (`--json`)

`--json` is valid on `list`, `describe`, `assets`, `validate`, `smoke`, `batch` and `preflight`. It puts **one JSON document on stdout and nothing else**; every human line moves to stderr. It is deliberately **not** available on a render, because a render's stdout is the exported file - asking for both is a usage error rather than a silently ignored flag.

Every command answers in the same envelope:

```json
{
  "schemaVersion": 1,
  "command": "validate",
  "ok": true,
  "engine": "1.92.0",
  "cli": "0.1.0",
  "result": { },
  "warnings": [{ "code": "UNKNOWN_FLAG", "message": "…", "kind": "usage" }],
  "error": null
}
```

The envelope covers the **failure** path too: a missing file, an unknown tool, a crash - stdout still carries a complete document, so `lolly … --json > r.json` never leaves an unparseable file behind. On that path `result` is `null` and `error` is filled in:

```json
"error": { "code": "UNAVAILABLE_HERE", "exit": 3, "kind": "FORMAT_UNAVAILABLE", "message": "…" }
```

Branch on `error.kind` and `error.exit`, never on `error.message` - the wording is not a stable interface. `ok` mirrors the exit code; note that a real *answer* can be non-zero (`validate` reporting no credential exits 5 with a full `result`).

**Compatibility rules.** Keys may be added inside `result`, `error` and `warnings` at any time, and enum values may be added, so a consumer must ignore unknown keys and have a default branch. `schemaVersion` increments only when a key is removed, retyped, or changes meaning.

### Discovery, for an agent

```bash
lolly list --json          # every tool + what THIS installation can do
lolly describe qr-code --json    # one tool's full input schema
```

`list --json` carries a `result.environment` block: the engine and CLI versions, the resolved content root, the host capabilities this shell provides, the browser-free formats, and a per-tier availability report (`domFree`, `raster`, `browser`, `images`) with the reason each unavailable tier is unavailable. Each tool in the list carries `capabilities`, `unmetCapabilities`, `nativeFormats` and `runnableHere` - so an agent can tell that `screencap` will exit 3 here **before** it tries, rather than after.

`describe --json` returns each input's declared spec plus three things the manifest cannot know: `flag` (the actual command-line spelling), `urlParam` (the compact alias, when the tool declares one) and `syntax` (how a non-scalar type is expressed). For the handful of inputs whose id collides with a reserved export flag - `width`, `height`, `format` - `flag` is `--input.<id>=` and `shadowedByReservedParam` is `true`, which is exactly the case where reading the bare id off the manifest would set the export size instead of the input.

## Run a share link

A pasted `lolly.tools` tool URL can be the **first argument**: the CLI splits it into a tool id plus its query and renders that, with any following flag overriding what the link carried.

```bash
npm run cli -- 'https://lolly.tools/t/qr-code?url=https://suse.com&color=%230c322c' --export=png --output=qr.png
```

The reverse direction is `--share` (or `--link`), which prints a link for the inputs you passed instead of rendering:

```bash
npm run cli -- qr-code --url=https://suse.com --share
```

## Verify a file (`lolly validate`)

The read side of [Content Credentials](/info/content-credentials-identity.html) - entirely on-device, nothing uploaded:

```bash
npm run cli -- validate ./poster.pdf
npm run cli -- validate ./poster.pdf --json
npm run cli -- validate ./poster.png --deep
npm run cli -- validate ./poster.pdf --trust-anchor=./corp-root.pem
```

| Flag | Meaning |
|---|---|
| `--json` | The shared envelope instead of the human summary. `result.files[]` carries one record per file - `verdict` (the stable slug), `resolved` (the engine's semantic verdict), `report` (the full verifier output) and `metadata` (the `--metadata` report, or `null` when it did not run). A file that could not be read is a record with its own `error`, not a silence, so a list of ten does not lose nine to one typo. |
| `--deep` | Additionally run the neural pixel-watermark scan (TrustMark / Content Seal / the Lolly durable mark). Needs the browser tier, and is **advisory** - it never changes the exit code. |
| `--trust-anchor=<root.pem>` | Trust an additional root certificate. Repeatable, for an organisation's own CA. |
| `--metadata` | Also report what else is in the file: embedded metadata, PDF structure, and text that is present in the file but not visible on the page. |

The summary headlines whether the file was genuinely made with Lolly and is unchanged since. The exit code follows the table above: **0** the file matches what was signed (including an expired certificate - Lolly signs with short-lived on-device certificates, so any other rule would fail every gate on its own correct output within a month), **4** a credential is present and the bytes no longer match it, **5** no credential at all, **2** the path could not be read. `--strict` promotes expired to 4; `--require=none` turns off verdict-based exit codes entirely ("just tell me what is in this file"). Several files can be given at once - the exit code is the worst one's.

### `--metadata`: what else is in this file

`--metadata` answers the question people actually have before sending a file on. It adds, on top of the credential verdict:

- **Embedded metadata** - EXIF, XMP and IPTC fields, a GPS fix if the file records one, an AI source-type *declaration* if the generator wrote one, and any bytes riding after the container's end (the appended-payload pattern). Fields the engine considers personally identifying are marked.
- **PDF structure** - pages, page sizes, fonts, images, annotations, the Info dictionary, whether an XMP packet is present, and how much text is extractable. Pages carrying no text layer are called out as scans needing OCR.
- **Text present in the file but not visible on the page** - the classic failed redaction, where a black bar is drawn over words that are still in the content stream. The report says where those words are and quotes them back. It does not say why they are there: a botched redaction and a layering mistake look identical from outside.

```bash
npm run cli -- validate ./contract.pdf --metadata
npm run cli -- validate ./photo.jpg --metadata --require=none    # report only, never a gate
npm run cli -- validate ./contract.pdf --metadata --json
```

Honesty rules this output holds to, because a person decides what to send based on it:

- The report ends with what it did **not** check, every time. Nothing found is not the same as nothing there.
- **No invisible or neural watermark detection runs here.** SynthID is not detected by Lolly at all. The TrustMark, Content Seal and Lolly durable pixel marks need the browser tier - that is `--deep`, not `--metadata`.
- The hidden-text pass covers one case: text under an opaque shape that covers most of the line. Text hidden by invisible render mode, by a clip path, by white-on-white colouring, or under a bar drawn tightly around the glyphs is not reported.
- PDFs are read to a page cap (25). When a document is longer, the report says how many pages it read and claims nothing about the rest.
- A file too broken to parse produces fewer findings plus an explicit "this report is incomplete" line, never a crash and never a clean bill of health.

With `--strict`, a finding that would matter before sharing - hidden text, a GPS fix, or undeclared bytes appended past the container - exits 4 (REFUSED). Without `--metadata` those passes never run, so `--strict` cannot fire on them.

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
