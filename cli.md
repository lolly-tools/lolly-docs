# CLI

`lolly` runs any tool from the terminal - same engine, same render path, same output as the web shell. It's **URL mode under a different transport**: `--foo=bar` argv pairs become the exact values the web shell parses from `?foo=bar`, so the CLI can never drift from the GUI. Great for build pipelines, CI, scripting and batch generation.

> Want an **interactive** terminal experience instead of one-shot commands - browse tools, tweak inputs, save projects, all from the keyboard? See the [TUI](/info/tui.html). It shares this same engine and render path.

From the repo it's wired as an npm script (note the `--` to pass args through):

```bash
npm run cli -- <tool-id> [--input=value ...] [--export=fmt] [--output=file]
# or, if installed as a binary:
lolly <tool-id> [--input=value ...] [--export=fmt] [--output=file]
```

> **Redirecting or piping? Use `npm run --silent cli`.** npm prints its own two-line run banner (`> lolly@0.1.0 cli` …) on **stdout**, ahead of anything the CLI writes, so `npm run cli -- qr-code --export=png > qr.png` produces a file whose PNG magic starts 95 bytes in and `file` reports as `data`. The CLI's own rule holds - stdout is the payload - but npm's wrapper breaks it before the CLI runs. `--silent` suppresses the banner; an installed `lolly` binary never has it. Every redirecting example below is written that way.

`lolly --help` prints the same surface this page documents - every flag and every exit code - so a script author never has to leave the terminal to find them.

## Discovering tools & assets

```bash
npm run cli                      # list every tool (id, status, description)
npm run cli -- list              # the same thing, spelled explicitly
npm run cli -- describe qr-code  # that tool's inputs, defaults, and formats
npm run cli -- qr-code           # sugar for describe, when no flags follow
npm run cli -- assets            # list every catalog asset id (logos, icons, photos…)
npm run cli -- assets logo       # filter by substring
npm run cli -- assets --type=raster
```

`describe <tool-id>` (and its bare `<tool-id>` sugar) prints the input schema and a usage line - including a `↳` syntax hint for the non-scalar input types (how to express `asset`, `blocks`, `vector`, `file`, `color` values). The fastest way to learn what a tool accepts.

`--type=` is checked against the catalog: a value no asset carries is an error listing the real ones, not an empty list and exit 0.

```
$ lolly assets --type=rastor
Error: No catalog asset has type "rastor". This catalog has: audio, lottie, palette, raster, tokens, vector.
```

Any listed **asset id** can be passed to an `asset`-type input (the engine resolves it to the embedded asset), and so can a **`lolly.tools` tool URL** - a whole tool's render becomes the asset. To render a **bare asset** straight to a file, use the `asset-export` tool - note it ships with the **SUSE brand pack**, so it is profile-dependent and absent on a community-only profile (where these commands print `Tool not found: asset-export`):

```bash
npm run cli -- asset-export --src=suse/logo/hor-neg-green --export=svg --output=logo.svg
npm run cli -- asset-export --src='https://lolly.tools/tool/qr-code.svg?url=x' --output=qr.svg
```

### Verbs, and why they exist

The first argument is either a **verb** or a **tool id**, and the verbs win. `list`, `describe`, `run`, `assets`, `batch`, `smoke`, `validate`, `preflight`, `install-browser`, `completion`, `help` and `version` are reserved words a tool id may never take - otherwise a brand pack shipping a tool called `batch` would be permanently unreachable. `lolly run <tool-id>` and `lolly describe <tool-id>` are the unambiguous spellings; the bare `lolly <tool-id>` sugar renders when flags follow and describes when they do not.

### Global flags

Valid on every command:

| Flag | Meaning |
|---|---|
| `--json` | one JSON envelope on stdout instead of human text (see [Machine interface](#machine-interface-json)). Not valid on a render. |
| `--quiet` | suppress non-error stderr: progress notes, warnings, the byte-count line. Errors still print. |
| `--verbose` | diagnostics and stack traces. `DEBUG=1` is an alias. |
| `--strict` | promote this run's warnings to a failure after the work is reported (exit 2 for a usage-class warning, 4 for a gate-class one). |
| `-h`, `--help`, `-v`, `--version` | recognised anywhere in the arguments. |
| `--` | ends option parsing. Everything after it is positional - the only way to pass a `longtext` value that itself starts with `--`. |

A flag that takes a value is refused in its bare form rather than parsed as the string `"1"`: `lolly qr-code --output` is an error, not a file called `1`. `NO_COLOR` is honoured alongside the TTY check.

## Rendering

```bash
# Write to a file (extension is yours to choose):
npm run cli -- qr-code --url=https://suse.com --output=./qr.svg

# Explicit format, stream to stdout (pipe or redirect):
npm run --silent cli -- qr-code --url=https://suse.com --export=png > qr.png
```

If `--output` is given, the file is written and a byte count is reported on stderr; otherwise the bytes go to **stdout** so you can pipe them.

### The `--output` extension is a format request

An extension names a format, so it is checked like one. If the tool does not declare it, the run stops - it does not fall back to the tool's first format and write those bytes under your filename:

```
$ lolly meeting-planner --output=times.csv
Error: --output=times.csv asks for ".csv", which "meeting-planner" does not produce.
Supported: png, jpeg, svg, ics, json. Name one with --export=<format> if you meant to
write it under that filename anyway.
```

Naming the format explicitly is how you opt out, because then you have said which bytes you expect: `lolly meeting-planner --export=json --output=times.notes` writes JSON under that name and exits 0. An `--output` with no extension at all renders the tool's default format.

## Flags

| Flag | Meaning |
|---|---|
| `--output=<path>` | Write to a file (`-` is stdout). Omit to stream to stdout. |
| `--filename=<name>` | Name the output file in the working directory, without giving a path. `--output` wins if both are given, with a warning. |
| `--export=<fmt>` | Output format (`png`, `svg`, `pdf`, `gif`, …). Defaults to the `--output` extension, then the tool's first declared format. **Refused** by on-device transform tools (see below). |
| `--input.<id>=<value>` | Set a tool input whose id collides with a reserved export flag (`width`, `height`, `format`). Without it the value goes to the export, not the input. |
| `--text=outline\|live` | Vector text as real paths (default) or editable `<text>`. Anything else is a usage error. `live` cannot apply to `emf`/`eps`/`dxf` or to a render produced by the browser tier; both cases warn rather than pretend. |
| `--html-fallback` | Opt in: when the requested format cannot be produced here, write HTML under a `.html` name instead of failing. Off by default. |
| `--depth=8\|16\|float`, `--hdr=1` | Requested bits per channel, and the HDR view transform that generates genuine float headroom. Asking for a float format over an 8-bit render is refused (exit 4) rather than padded. |
| `--width=`, `--height=` | Output size (numbers). |
| `--unit=` | `px` (default), `mm`, `cm`, `in`, `pt`, `pc` - physical sizing. |
| `--dpi=` | Raster DPI for physical units (default 300). |
| `--c2pa[=7\|30\|90\|365]` | Stamp [Content Credentials](/info/exporting.html) into the output, signed with an ephemeral on-device certificate of that lifetime (default 30 days). **On by default**, exactly as in the app: a tool opts out with `render.c2pa:false`, an on-device privacy utility never carries them at all and `--c2pa=off` opts out per run. Verify with `lolly validate <file>`. Sign with a real identity instead of an anonymous key with `--sign-key`/`--sign-cert` - see [Signing from the terminal](/info/cli-signing.html). |
| `--imprint` | Embed the [Lolly Imprint](/info/exporting.html) pixel watermark. **On by default** too, for the formats whose bytes can carry it (`png`, `jpg`, `webp`, `avif`, `tiff`, `pdf`, `pdf-cmyk`, `pptx`); `--imprint=0` opts out. On a browser-free PNG render the mark is embedded by the CLI itself - it never forces the browser tier. A render too small to carry a detectable mark says so and writes the file unmarked. |
| `--no-provenance` | One word for a bare render: no credential, no imprint, no durable mark. **This is the byte-determinism switch** - both default marks embed a fresh timestamp, so two runs of the same defaulted command differ. `smoke` and `batch` apply it themselves. Combining it with an explicit `--c2pa`/`--imprint`/`--durable` is a usage error rather than a guess. |
| `--durable=1` | Embed the opt-in durable (TrustMark-format) credential. **Off** by default (a neural encode plus a model download). Needs the encoder model on-device. |
| `--password=<pw>` | Open password for a rendered PDF. Visible in `ps` - prefer `--password-stdin`. |
| `--password-stdin` | Read that password from stdin instead of the argument list. Giving both is an error. |
| `--cuts=<n>` | **Refused** on the CLI (exit 3): a contact sheet of `n` stills needs the web shell's sequence renderer, and one frame under that filename would be a different artefact. |
| `--bleed=<dim>`, `--marks=<list>` | Print bleed and marks (`crop`, `reg`, `bleed`, `bars`, `prov`) for the print formats. Browser tier only. |
| `--press-profile=<cond>` | CMYK press condition (`fogra39`, `fogra51`, `swop`, `gracol`) - **named** in the PDF's output intent. The CLI has no profile store, so it cannot embed one, and a named-only intent is not PDF/X-4: the output intent is written, the `GTS_PDFXVersion` claim is not. Embedding a profile you loaded is a web-shell feature today (`profile=own`). **Not** `--profile` - see the warning below. |
| `--user-profile=<file.json>` | A user-profile JSON file, used to pre-fill `bindToProfile` inputs. A path that cannot be read or parsed is an error (exit 2), not a warning. |
| `--lang=<code>` | Content language (`de`, `ja`, `ar`, …). |
| `--share`, `--link` | Print a shareable `lolly.tools` link for these inputs instead of rendering anything. |
| `--z=<token>` | Expand a packed link token into the inputs it encodes. |
| `--zx=<token>`, `--link-password=<pw>` | A password-protected share link's state, and its password. A missing or wrong password is an error (exit 6), never a silent render of the tool's defaults. |
| `--<inputId>-data=<file>` | Fill an input from a file: CSV/TSV/JSON/Markdown or `.xlsx`. Works on `blocks` (rows into the repeating group), `table` (first row = headings) and `text`/`longtext` (the file's content lands in the field). The ingest counterpart of CSV export. Add `--<inputId>-sheet=<name\|index>` to pick a sheet from a multi-sheet workbook; without it the first is read, and the CLI says so. |
| `--verify` | For an on-device utility, print one line per file saying its export checks ran and none failed. A failed check writes nothing and exits `1` (`FAILED`) - the gate lives in the tool's own hook, which throws like any other failure, so this shell does not claim to tell it apart from one. |
| `--<inputId>=<value>` | Any tool input (see the tool's schema). |
| `--<flag>` | A bare flag (no `=`) is truthy - handy for boolean inputs. |

> **`--profile` means the press condition.** It is an alias of `--press-profile`, matching URL mode's reserved `profile` param, so a pasted share link's `profile=fogra51` and a typed `--profile=fogra51` mean the same thing. The *user-profile JSON file* has its own flag, `--user-profile=<file.json>`. Before GA, `--profile` meant the file and was quietly remapped for links; that remap is gone.

Everything that isn't a reserved flag is treated as a tool input and validated against the manifest. Example - an A4 page:

```bash
npm run cli -- quotes --quote="Ship it." --width=210 --height=297 --unit=mm --export=pdf --output=page.pdf   # `quotes` is a SUSE-pack tool
```

## What the CLI can render

The CLI renders in a headless DOM (jsdom), so **vector and structured** formats - **SVG (and SVGZ), EMF, WMF, EPS (and EPS-CMYK), DXF, BMP, HTML, plus the data formats JSON, CSV, ICS, VCF, MD** (the engine hydrates those payloads) - work natively and reproducibly, no browser needed. The float formats **EXR** and **HDR** join them, over a resvg-rasterised frame, when a render asks for the headroom (`--hdr=1`). EMF, EPS and DXF are emitted straight from the template's vector primitives (no rasteriser), and the CLI carries the **same HarfBuzz text-shaping as the web shell** (`host.text`), so live `<text>` runs are outlined to true vector paths at export - those formats ship real text with no fonts needed on the receiving end, and font-driven tools (a wordmark lockup built on `host.text`, say) render headlessly too. Shaping resolves sfnt fonts (ttf/otf) under the repo root - catalog and tool-local faces; a browser-only woff2 face is rejected with a clear error rather than silently shaping blanks. **PNG** from an `<svg>`-based tool is also browser-free - resvg rasterises the engine's own SVG (Tier A). The remaining raster formats - **JPG, WebP, PDF and video (GIF/WebM/MP4)**, plus HTML-layout PNG - need a real paint engine, so the CLI drives its **own scoped headless Chromium** (Tier B): install it once with `lolly install-browser` (or `npm run install:browser`) and they export straight from the CLI. **ZIP** is the one format the lean CLI leaves out - no zip dependency - so its batch writes a folder instead. `ico` (favicons) and `txt` are browser-tier formats like the raster set: `txt` is not a data format the engine hydrates, it is the *rendered* page serialised to plain text, which is why it needs the paint tier and not just jsdom. `jpg` and `jpeg` are one format with two spellings and either flag works on either kind of tool - manifests are split between the two, and `--export=` resolves to whichever the tool declared. (Requesting a format a tool doesn't declare prints a clear error listing what it supports - and so does asking for one via the `--output` extension.)

Which tier is available here is not a guess: `lolly list --json` reports it per tier, with a reason for each one that is missing. See [Discovery, for an agent](#discovery-for-an-agent).

## File inputs & on-device utilities

Some tools take **your own file** as input (a `file`-typed input) and hand back a transformed copy - the on-device "utility" shape (strip EXIF, crop, convert). On the CLI, pass the file as a path; the runner loads its bytes:

```bash
npm run cli -- strip-data --source=./holiday.jpg --output=./holiday-clean.jpg
```

These tools produce their output via the `exportFile` transform path (bytes in → bytes out), not a DOM render, so there is no render format to choose: the output container follows the file you gave it. `--export=` is therefore **refused**, not ignored - it used to be accepted and dropped, which printed a success line for a file whose contents did not match its name:

```
$ lolly strip-data --source=./photo.jpg --export=png --output=./clean.png
Error: "strip-data" is an on-device transform (file in → file out), so --export=png has
nothing to act on: the output container follows the file you gave it, and the reserved
export format never reaches the tool. Drop the flag, or use one of the tool's own inputs
if it offers a conversion.
```

A tool that genuinely converts does it through its **own input**, not the export flag. `convert-image` declares an input literally called `format`, which the reserved export param shadows, so it is set with the explicit namespace:

```bash
npm run cli -- convert-image --source=./photo.heic --input.format=png --output=./photo.png
```

Choosing an `--output` name whose extension disagrees with the bytes a transform produces is a **warning**, not a refusal - the transform cannot change the container to match, and the file is written under the name you asked for with that fact stated on stderr.

The transformed bytes are written to `--output` (or `--filename=`), or streamed to **stdout** if you omit both. Nothing is ever uploaded; the file is read locally and handed straight back.

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

Because the instructions are just a link, you can mark up one document in the app, hit **Share** and run that link headlessly over every other copy - forms, certificates, invoices and anything else where the same fields sit in the same place on every page:

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
npm run --silent cli -- batch --template=qr-code,chart-creator > rows.csv

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

The header *is* the namespace here - a batch has no `--input.<id>=` escape - so an input whose id is one of those reserved names (`chart-creator` declares `width` and `height`) cannot be set per row, and `--template=` leaves it out rather than emitting a second column with the same name. It says which inputs it dropped. Render those with `lolly run … --input.width=…`.

`--template=` writes the input columns plus those six output columns. It is not the whole set: **any reserved URL param works as a column**, because a row's cells are read exactly as a URL's query is. `bleed`/`marks`/`press-profile` ride that way; add them to the header by hand.

**`batch` renders bare.** Unlike a single `lolly run`, a batch row carries no Content Credentials and no Imprint unless it asks - a batch is a build step, and a regenerated folder should not differ from its predecessor in every file. A `c2pa` column (or `imprint`, or `durable`) opts a row back in and is read exactly as `?c2pa=` is. `smoke` renders bare for the same reason.

`--keep-going` renders past a failing row (otherwise the batch stops with a non-zero exit). Either way the batch's exit code is the **worst row's** code, not a flat 1, and `--json` gives one document with a per-row `exit` so a pipeline can retry just the exit-3 rows on a runner that has a browser. `--output` is refused: a batch has many outputs and one path cannot name them - use `--out-dir=`.

## Render-check the catalog (`lolly smoke`)

```bash
npm run cli -- smoke                              # render EVERY tool at manifest defaults
npm run cli -- smoke --only=qr-code,chart-creator # just these ids
npm run cli -- smoke --format=svg                 # force one Node-native format
```

`lolly smoke` is the catalog-wide render gate: every tool in the active profile renders at its manifest defaults to its first Node-native format - browser-free; a tool whose declared formats are all browser-only falls back to an `html` render, which still exercises load → hydrate → hooks. Every output is checked for blank or empty results, each tool prints a ✓/✗ row and the exit code is non-zero if anything fails - so wired into CI, a `hooks.js` regression can never ship a tool that renders blank. Tools that legitimately can't render headlessly are skipped with a reason, never failed: transform tools (file in → bytes out; nothing to render at defaults) and tools gated on a live capture capability (camera / microphone / screen / capture).

## Preflight an export (`lolly preflight`)

```bash
npm run --silent cli -- preflight qr-code --export=pdf-cmyk     # count and check, do not render
npm run --silent cli -- preflight qr-code --export=pdf-cmyk \
    --width=210 --height=297 --unit=mm --bleed=3mm --marks=crop,reg
npm run --silent cli -- preflight qr-code --export=svg --json | jq   # the machine artifact
npm run --silent cli -- preflight 'https://lolly.tools/#/tool/qr-code?url=…&format=pdf-cmyk'
```

`lolly preflight` answers "what am I about to export, and is anything wrong with it" without rendering anything. It takes the SAME render flags a real run takes - `--export`, `--width`/`--height`/`--unit`/`--dpi`, `--bleed`, `--marks`, `--press-profile`, `--cuts`, `--hdr`, `--durable`, `--z`/`--zx` and a pasted share link - because preflighting settings other than the ones a render would use is worthless. The rules live in the engine (`engine/src/preflight.ts`), so the web export panel and this subcommand report the same findings for the same job.

That includes `--input.<id>=<value>`: a tool whose own input is called `width` is preflighted exactly as it would render, and a reserved flag that shadows one of the tool's inputs prints the same warning here as it does on `lolly run` (and carries it into the report as `collect.reserved-flag-shadows-input`).

It has five flags of its own:

| Flag | Effect |
|---|---|
| `--json` | one JSON document on stdout and nothing else |
| `--strict` | warnings fail the run too (opt-in CI gate) |
| `--rate-card <file>` | price the job from a local rate-card file, adding the cost block to the report. A path only - rates are never read off a pasted link's query, so a shared URL can never bring money with it |
| `--run-length <n>` | the quantity the cost is worked out for (a run of n) |
| `--use-expired-rates` | opt in past a card's `validUntil` - expired rates otherwise suppress the money figures while the counts still show |

There is no `--out`. The report always goes to stdout, so redirect it: `lolly preflight qr-code --json > report.json`.

Exit codes: **0** it ran and there is nothing to fix, **4** (`REFUSED`) it ran and a check said no - at least one error finding, or a warning under `--strict`, **2** (`USAGE`) it could not run at all: unknown tool, unreadable manifest, a `zx=` link with no password, a refused flag. It never returns `1`: a preflight that ran is not a failed run, and `4` is the code `lolly validate` already uses for the same event, so one CI branch handles both. A count that cannot be TAKEN is never a failure: "needs the artwork on screen", "no brand palette resolved", "no physical page size was set" are stated gaps in the report, and they exit 0 permanently. With `--json`, stdout carries exactly one JSON document on **every** path, including exit 2 - the shared envelope, with the report as `result` and, on the failure path, `ok:false` plus an `error` - so `lolly preflight X --json > r.json` never leaves an unparseable file behind. Read the findings at `.result.findings`.

The report's `job` member carries the collection context as well as the tool and format - `source`, `modelPhase`, `stageMounted`, `paletteResolved` and an echo of the settings the findings were taken against. A clean report taken headlessly with an unresolved palette and an un-run `onInit` must not look identical to one taken with all three in hand, because the artifact is the copy that travels.

Three things it deliberately refuses rather than silently ignoring: `--rate-card` (preflight counts, it does not cost - there are no rates and no money anywhere in it), `--batch` (not implemented yet; a silently-ignored `--batch=rows.csv` would print a confident single-job report that reads like a 50-row answer) and `--out` (removed before GA, with the redirect named in the message).

The finding to know about: if your brand declares a spot ink that is actually a FINISH (a foil, an emboss, a spot varnish, a cutting rule), Lolly writes it as its own named plate whose process fallback is a 100% black mask, in every CMYK sink - the CMYK PDF, the CMYK TIFF and `eps-cmyk` in both the browser and this CLI. It is never given the swatch's own colour build, so a RIP that flattens spots paints an unmistakable mask rather than a plausible metallic. What is still wrong, and what the error actually says: **overprint is implemented nowhere in the platform, so the finish plate knocks out the artwork beneath it**. Agree with your printer how they want the finish supplied before sending the file.

## Scripting & CI

The same inputs give the same **render** every time - that is what makes a tool a build artifact rather than a generation - so the CLI fits anywhere you generate other build outputs. ("The same render" is not "the same bytes": see the measurements below, and note that a default render is *signed*, which alone is enough to move the bytes.)

```bash
# Generate an OG image at build time instead of committing a binary:
npm run cli -- quotes --quote="Ship it." --export=svg --output=./public/og.svg   # `quotes` is a SUSE-pack tool
```

### What provenance costs

Content Credentials and the Imprint are on by default here, exactly as in the app. Turning them off is a supported choice, so here is what it buys, measured on one machine (Apple silicon, Node tier, five runs per case, best-to-worst spread shown). Your numbers will differ; the pattern will not.

| Case | Time | Output |
|---|---|---|
| `qr-code --export=svg` bare | 0.38 - 0.39 s | 17,205 B |
| same, defaults (credential; SVG carries no Imprint) | 0.39 - 0.44 s | 19,946 B (+2,741 B, +16%) |
| `qr-code --export=png` 600 px, bare | 0.46 - 0.47 s | 14,786 B |
| same, credential only (`--imprint=0`) | 0.46 - 0.48 s | 16,799 B (+14%) |
| same, Imprint only (`--c2pa=off`) | 0.52 - 0.66 s | 36,572 B (+147%) |
| same, defaults (both) | 0.52 - 0.70 s | 38,586 B (+161%) |
| `qr-code --export=png` 2000 px, bare | 0.48 - 0.49 s | 62,357 B |
| same, defaults | 0.83 - 0.93 s | 228,825 B (+267%) |

The two marks cost different things. **A credential is a signature and a metadata block**: about 2 KB, and no measurable time. **The Imprint is a pixel watermark**, so on a raster it costs time that scales with pixel count (about 0.06 s at 600 px, about 0.35 s at 2000 px) and it grows the file, because the mark adds fine detail that lossless PNG compression cannot squeeze away. That size effect is much smaller in a lossy format, and absent in a vector one, which has no pixels to mark.

Leaving them on means the file carries a verifiable statement of where it came from: a credential that any C2PA reader can check and that names your identity if you have [set one up](/info/cli-signing.html), plus a mark that survives a re-encode or a screenshot, which a metadata credential does not. Turning them off means byte-reproducible output, the times and sizes in the "bare" rows and no embedded timestamp.

`--no-provenance` is the switch, per run. `smoke` and `batch` already render bare, because a machine path wants reproducibility by default.

### How far "the same" goes, byte for byte

Reproducible *renders* and reproducible *bytes* are not the same promise, and only some formats keep the second one.

**Start here: a default render is not byte-reproducible, and that is deliberate.** Content Credentials and the Lolly Imprint are on by default (as in the app), and a credential is signed with a fresh key and a fresh timestamp every time. Pass **`--no-provenance`** for a bare render, which is what the rows below are measured with. `smoke` and `batch` already do.

```
$ lolly qr-code --url=https://suse.com --export=svg --output=d1.svg   # twice, defaults
$ lolly qr-code --url=https://suse.com --export=svg --output=d2.svg
DIFFER
$ lolly qr-code --url=https://suse.com --export=svg --no-provenance --output=n1.svg
$ lolly qr-code --url=https://suse.com --export=svg --no-provenance --output=n2.svg
IDENTICAL
```

Same result for `--export=png` (the browser-free resvg tier), measured the same way.

Measured, not assumed - two consecutive runs of the same command, hashed, **with `--no-provenance`**:

| Path | Byte-identical across runs? | Measured with |
|---|---|---|
| **SVG**, **EMF**, **EPS**, **DXF** | **Yes.** Nothing in the format carries a clock or a random seed. | `qr-code --url=https://suse.com` |
| **JSON, CSV, VCF, MD** | **Yes**, for the format. | `chart-creator --export=csv`, `quotes --export=md`†, `email-signature --export=vcf`†, `meeting-planner --export=json`† |
| **ICS** | **No.** RFC 5545 requires a `DTSTAMP`, which is the clock: two runs a second apart differ in exactly that line. | `calendar-ics --export=ics`† |
| **PNG** from an `<svg>`-based tool (the resvg tier) | **Yes.** | `qr-code --export=png` |
| **PDF** | **No.** Every PDF carries `/CreationDate` and `/ModDate`; two runs a second apart differ in those bytes (128 differing bytes in a measured 57 KB file with `--c2pa=off`, all of them in the trailer and metadata). | `qr-code --export=pdf --c2pa=off` |
| **JPG, WebP, HTML-layout PNG** (the headless-Chromium tier) | **No.** The browser's paint and encode are not byte-reproducible run to run; the file length itself moves between runs. | `qr-code --export=jpg`, `qr-code --export=webp`, `color-block --export=png`† |
| **Video** (`gif`/`apng`/`webm`/`mp4`) | **Assume no.** Same tier as the row above, plus a frame-timed capture. Not measured here. | not measured |
| Anything carrying `--c2pa`, `--durable` or `--imprint` - **which is the default** | **No.** A credential is signed with a fresh timestamp, by design; the Imprint moves the pixels. Drop them with `--no-provenance`. | `qr-code --export=svg` (defaults) |

† These commands name tools from the **SUSE brand pack**, which is a private submodule. On a community-only clone the active profile is `lolly-start` and they print `Tool not found`. The measurements were taken on the SUSE profile; the format-level claim in each row is what travels, not the specific command.

Two caveats the table cannot carry. **Format-level reproducibility is not tool-level reproducibility**: a tool that renders the current time, the weather or a live clock produces different bytes in any format, and that is the tool doing its job. And these are *this machine, back to back* - a different OS, a different font set or a different engine version will move the bytes of anything that shapes text.

So: check a hash of an SVG into a lockfile if you like - **rendered with `--no-provenance`** - and do **not** build a CI gate on the hash of a PDF, an ICS, a JPEG, a browser-tier PNG, or anything signed. Compare those by rendering and inspecting, not by digest.

### Exit codes

One code per outcome, so a pipeline can branch instead of grepping stderr. Frozen at GA:

| Code | Name | Meaning |
|---|---|---|
| 0 | `OK` | The requested thing was produced. |
| 1 | `FAILED` | It was possible, it ran, it failed (a hook threw, the render produced nothing). |
| 2 | `USAGE` | Wrong invocation: unknown tool, undeclared format, missing argument, unreadable path. |
| 3 | `UNAVAILABLE_HERE` | Impossible in **this** installation - no browser, an unmet capability. May well succeed on another runner; this is the code to retry elsewhere on. |
| 4 | `REFUSED` | A protective check **this shell** ran said no: the bytes were not the format claimed, a credential is present but broken, `--strict` promoted a gate-class warning, `--depth=float` over an 8-bit render. A gate inside a tool's own hook (`--verify`) throws like any other hook and lands on `1`. |
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
  "engine": "1.115.0",
  "cli": "0.1.0",
  "result": { },
  "warnings": [{ "code": "UNKNOWN_FLAG", "message": "…", "kind": "usage" }],
  "error": null
}
```

The two version strings are whatever *this* installation runs, not a fixed pair - read them from the envelope rather than from this page.

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

`list --json` carries a `result.environment` block: the engine and CLI versions, the resolved content root, the host capabilities this shell provides, the browser-free formats and a per-tier availability report (`domFree`, `raster`, `browser`, `images`) with the reason each unavailable tier is unavailable. Each tool in the list carries `capabilities`, `unmetCapabilities`, `nativeFormats` and `runnableHere` - so an agent can tell that `screencap` will exit 3 here **before** it tries, rather than after.

`describe --json` returns each input's declared spec plus three things the manifest cannot know: `flag` (the actual command-line spelling), `urlParam` (the compact alias, when the tool declares one) and `syntax` (how a non-scalar type is expressed). For the handful of inputs whose id collides with a reserved export flag - `width`, `height`, `format` - `flag` is `--input.<id>=` and `shadowedByReservedParam` is `true`, which is exactly the case where reading the bare id off the manifest would set the export size instead of the input.

## Run a share link

A pasted `lolly.tools` tool URL can be the **first argument**: the CLI splits it into a tool id plus its query and renders that, with any following flag overriding what the link carried.

Three link shapes are recognised - the Share dialog's hash route, the pretty path and the canonical embed URL:

```bash
npm run cli -- 'https://lolly.tools/#/tool/qr-code?url=https://suse.com&color=%230c322c' --export=svg --output=qr.svg
npm run cli -- 'https://lolly.tools/qr-code?url=https://suse.com&color=%230c322c' --export=svg --output=qr.svg
npm run cli -- 'https://lolly.tools/tool/qr-code.svg?url=https://suse.com' --output=qr.svg
```

Anything else is a usage error naming the URL, not a render of the tool's defaults.

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
npm run cli -- validate ./poster.svg --no-default-anchors    # trust only what you pinned
```

### Which anchors produced the verdict

Trust is only meaningful next to "trusted by what", so every report says which anchor set it used. The default set is the **Lolly CA root** plus the **vendored C2PA known-certificate list** (camera makers, the big generators) plus anything you pinned - the same set the web `/valid` view uses, so one word means one thing on every surface:

```
$ lolly validate ./qr.svg
./qr.svg  [svg]
✦ Made with Lolly - credential intact, file unchanged since export
  …
  ℹ signingCredential.untrusted - signing certificate untrusted - an ephemeral on-device key, not a CA-issued identity
  Trust anchors: C2PA known-certificate list (54) · pinned: none · Lolly CA root

$ lolly validate ./qr.svg --no-default-anchors
  …
  Trust anchors: no built-in anchors · pinned: none · Lolly CA root NOT pinned
```

Both exit 0 here: this file is signed with an ephemeral on-device key that chains to nothing, which is the designed posture for a terminal render, not damage. `--no-default-anchors` is the bare-trust check - useful when the only trust you accept is a root you pinned yourself.

| Flag | Meaning |
|---|---|
| `--json` | The shared envelope instead of the human summary. `result.files[]` carries one record per file - `verdict` (the stable slug), `resolved` (the engine's semantic verdict), `report` (the full verifier output), `metadata` (the `--metadata` report, or `null` when it did not run) and `anchors` (which trust anchors produced the verdict). A file that could not be read is a record with its own `error`, not a silence, so a list of ten does not lose nine to one typo. |
| `--deep` | Additionally run the neural pixel-watermark scan (TrustMark / Content Seal / the Lolly durable mark). Needs the browser tier, and is **advisory** - it never changes the exit code. |
| `--trust-anchor=<root.pem>` | Trust an additional root certificate. Repeatable, for an organisation's own CA. `$LOLLY_TRUST_ANCHOR` adds more as a `PATH`-style list (`:` on Unix, `;` on Windows); a leading `~` expands. Flag first, then environment. A pinned root that cannot be read stops the run (exit 2) rather than quietly downgrading the verdict. |
| `--no-default-anchors` | Trust **only** what you pinned: drops the Lolly CA root and the vendored C2PA known-certificate list. With nothing pinned the anchor set is empty and every signer reads untrusted by construction - the bare-trust check. |
| `--metadata` | Also report what else is in the file: embedded metadata, PDF structure and text that is present in the file but not visible on the page. |

The summary headlines whether the file was genuinely made with Lolly and is unchanged since. The exit code follows the table above: **0** the file matches what was signed (including an expired certificate - Lolly signs with short-lived on-device certificates, so any other rule would fail every gate on its own correct output within a month), **4** a credential is present and the bytes no longer match it, **5** no credential at all, **2** the path could not be read. `--strict` promotes expired to 4; `--require=none` turns off verdict-based exit codes entirely ("just tell me what is in this file"). Several files can be given at once - the exit code is the worst one's.

### `--metadata`: what else is in this file

`--metadata` answers the question people actually have before sending a file on. It adds, on top of the credential verdict:

- **Embedded metadata** - EXIF, XMP and IPTC fields, a GPS fix if the file records one, an AI source-type *declaration* if the generator wrote one and any bytes riding after the container's end (the appended-payload pattern). Fields the engine considers personally identifying are marked.
- **PDF structure** - pages, page sizes, fonts, images, annotations, the Info dictionary, whether an XMP packet is present and how much text is extractable. Pages carrying no text layer are called out as scans needing OCR.
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

- [Signing from the terminal](/info/cli-signing.html) - set up a real signing identity, so exports carry a verifiable name rather than an anonymous on-device key.
- [TUI](/info/tui.html) - the interactive, full-screen terminal counterpart. Same engine, same output; keyboard-driven instead of one-shot.
- [URL Mode](/info/url-mode.html) - the parameter model the CLI shares with the web shell (and the reserved params).
- [Exporting & Formats](/info/exporting.html) - what each format is for.
- [AI Agents](/info/ai-agents.html) - driving the same surface from an LLM.
- **/pro batch** - the web shell's interactive counterpart to the scripted fan-out loop above: a spreadsheet-style grid with CSV round-trip, spreadsheet paste and per-row output across one or many tools.
