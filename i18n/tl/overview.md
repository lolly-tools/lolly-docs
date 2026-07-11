# Overview

Isinasaad ng dokumentong ito ang layunin, istruktura, at mga desisyong architectural para sa platform ng Lolly. Sinasalamin nito kapwa ang product vision at ang kasalukuyang estado ng codebase.

> **Katayuan:** Ang Lolly ay isang internal prototype sa isang **closed pilot na hindi pa tapos**. Deterministic at internally consistent ang engine, pero maaga pa ang produkto — si SUSE ang unang customer — at ang mga cryptography at file-parsing engine nito ay kasalukuyang sumasailalim sa mahigpit na infrastructure hardening ng SUSE, bilang paghahanda para sa enterprise scale (magaling talaga kami dito). Basahin ang architecture sa ibaba bilang design intent na sinusubok, hindi isang tapos at certified na produkto. Tingnan ang [Adoption & Governance](/info/adoption-governance.html#status) kung paano pinapatakbo at sinusukat ang pilot.

---

## Bakit ito umiiral

Isang paulit-ulit na problema ang kinakaharap ng mga team: ang creative at content work na paulit-ulit gawin ay masyadong predictable para bigyang-katwiran ang paggamit ng skilled hands sa bawat pagkakataon, pero masyado namang sensitibo sa kalidad para ipasa nang walang guardrails. Ang resulta ay alinman sa mabagal na throughput (specialist bottleneck), hindi pagkakapare-pareho (ginagamit ng mga tao kung anong tool ang meron sila), o vendor lock-in (isang SaaS DAM na kumokontrol sa mga template mo).

Ang platform na ito ang structural na sagot:

> **Programmatic na creative at content sa malaking scale** — zero-labor na asset generation, na may mga rules na nasa ilalim ng sentralisadong kontrol, para sa mga empleyado, vendor, at partner.

Ang resulta ay **kasaganaan**: may tamang signage ang bawat event, tumutugma sa house style ang bawat CVE alert, malinis mag-print ang bawat label, updated ang bawat email signature — lahat nang walang design ticket. Hinahawakan ng platform ang paulit-ulit na operationalised creative work. Sadyang hindi ito isang bespoke creative tool — nananatiling pag-aari ng mga designer ang flagship work.

### Saan ito bagay sa larangan

| Kakayahan | Canva | Mga Brand Portal | Illustrator | Figma / Penpot | **Lolly** |
|---|---|---|---|---|---|
| Malawakang paggawa ng content | bahagya | ✗ | ✗ | ✗ | **✓** |
| Ganap na gumagana offline | ✗ | ✗ | ✓ | bahagya | **✓** |
| Lohika ng template at mahigpit na mga hadlang | ✗ | bahagya | ✗ | bahagya | **✓** |
| Walang kailangang kasanayan sa design | bahagya | ✓ | ✗ | ✗ | **✓** |
| Awtomatikong Content Credentials | ✗ | ✗ | bahagya | ✗ | **✓** |
| Nagko-compose ang mga tool ng ibang tool | ✗ | ✗ | ✗ | ✗ | **✓** |
| Bukas na engine, hindi naka-lock sa SaaS | ✗ | ✗ | ✗ | bahagya | **✓** |
| C2PA content credentials | ✗ | ✗ | ✗ | ✗ | **✓** |
| Opt-in na provenance sa antas ng forensics | ✗ | ✗ | ✗ | ✗ | **✓** |
| Mobile at Desktop na App | ✓ | ✗ | ✗ | bahagya | **✓** |
| Command Line at TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

Malinaw ang puwang: walang kahit ano sa kasalukuyang larangan ang nagbibigay sa atin ng constraints-first, offline-capable, mababang kasanayan, at internally accessible na output. May sarili pa ngang open canvas ang Lolly — ang **Layout Studio** — kung saan sumusunod ang mga kulay, type, at asset sa brand globals, kaya nananatiling constraints-first kahit ang malayang pag-aayos. Ang **hindi** nito ay isang unconstrained na design suite: patuloy na gagamitin ng mga designer ang Illustrator at Figma para sa bespoke na flagship work. Puwedeng buuin ang mga permutation gamit ang tool na ito.

**Gamitin ito para sa:** Mabilis na paggawa ng operationalised creative assets — event tile, name badge, lagda, CVE alert, QR code, social card, consignment label, structured report.

**Huwag itong gamitin para sa:** Bespoke hero content.

---

## Ang malaking larawan

```
                ┌─────────────────────────────────────────────┐
                │              Tools (data, not code)         │
                │   tool.json + template.html + hooks.js?     │
                └─────────────────────────────────────────────┘
                                    ▲
                                    │ talks to via Capability Bridge v1
                                    ▼
                ┌─────────────────────────────────────────────┐
                │                  Engine                     │
                │   loader · validator · runtime · template   │
                │   inputs · url-mode                         │
                │   PLATFORM AGNOSTIC. Knows nothing of DOM,  │
                │   filesystem, or You.                       │
                └─────────────────────────────────────────────┘
                                    ▲
                                    │ implements HostV1
                                    ▼
        ┌──────────────┬──────────────┬──────────────┬──────────────┐
        │  Web Shell   │ Tauri Desktop│ Tauri Mobile │  CLI Shell   │
        │   (PWA)      │              │              │              │
        └──────────────┴──────────────┴──────────────┴──────────────┘
                                    ▲
                                    │ fetches from
                                    ▼
                ┌─────────────────────────────────────────────┐
                │              Catalogs                       │
                │   catalog/tools/index.json + tool dirs      │
                │   catalog/assets/index.json + asset files   │
                └─────────────────────────────────────────────┘
```

### Istruktura ng repository

```
lolly/
├── engine/           # Platform-agnostic na core. Open source (MPL-2.0).
│   └── src/
│       ├── index.ts          # public surface — loader, runtime, template, inputs, url-mode
│       ├── loader.ts         # kumukuha at nagva-validate ng tool files
│       ├── runtime.ts        # nag-o-orchestrate ng 5-step na lifecycle
│       ├── template.ts       # Handlebars hydration + annotateTemplate
│       ├── inputs.ts         # manifest → runtime input model
│       ├── url-mode.ts       # URL ↔ input state round-trip
│       ├── validate.ts       # JSON Schema validation para sa mga manifest
│       ├── compose.ts        # nire-resolve ang mga nested tool render (composes)
│       ├── embed.ts          # pino-parse ang mga portable na lolly.tools embed URL
│       └── bridge/
│           └── host-v1.ts    # TypeScript interface — ang bridge contract
│
├── shells/
│   ├── web/          # PWA — naka-host online; pangunahing distribution
│   │   └── src/
│   │       ├── main.ts           # boot, routing
│   │       ├── theme.ts          # pag-apply/persist ng theme (FOUC prevention)
│   │       ├── bridge/           # web implementations ng HostV1 APIs
│   │       │   ├── index.ts      # kino-compose ang lahat ng piraso ng bridge
│   │       │   ├── db.ts         # IndexedDB setup
│   │       │   ├── state.ts      # host.state — mga naka-save na edit
│   │       │   ├── profile.ts    # host.profile — detalye ng user
│   │       │   ├── assets.ts     # host.assets — catalog + mga upload ng user
│   │       │   ├── clipboard.ts  # host.clipboard
│   │       │   ├── export.ts     # host.export — rasterise/serialize
│   │       │   ├── net.ts        # host.net — allowlisted fetch
│   │       │   └── media.ts      # host.media — live camera frames (onFrame)
│   │       ├── catalog/
│   │       │   └── sync.ts       # catalog sync sa oras ng boot + offline cache
│   │       ├── styles/           # app-wide na CSS (app.css, picker.css, tokens.css)
│   │       └── views/
│   │           ├── gallery.ts    # listahan ng tool library + saved-state cards
│   │           ├── tool.ts       # nagma-mount ng isang tool (inputs + canvas + actions)
│   │           ├── picker.ts     # asset picker UI (tinatawag ng host.assets)
│   │           ├── profile.ts    # editor ng detalye ng user
│   │           ├── projects.ts   # /p — mga folder ng saved session (nested; folder/selection export)
│   │           └── free-canvas.ts # free-canvas editor overlay para sa mga render.layout:"editor" na tool
│   │
│   ├── cli/          # Node.js CLI — parehong engine, headless jsdom
│   │   ├── bin/lolly.ts
│   │   └── src/
│   │       ├── run.ts    # loadTool → createRuntime → export → write file
│   │       └── bridge.ts # CLI implementation ng HostV1
│   │
│   ├── tui/          # Interactive terminal shell (Ink) — muling gumagamit ng CLI bridge
│   │   └── src/
│   │       ├── main.tsx  # full-screen app: Gallery / Projects / Profile / ToolView
│   │       └── bridge.ts # CLI bridge + on-disk state sa ilalim ng ~/.lolly
│   │
│   ├── tauri-desktop/ # downloadable na desktop app
│   └── tauri-mobile/  # iOS/Android app
│
├── tools/            # profile VIEW (gitignored) — data, hindi code. Pinagsama mula sa mga pack:
│                     #   community/ (public, brand-agnostic, MPL) + brands/<active>/tools (brand-owned).
│   ├── qr-code/
│   ├── quotes/
│   ├── email-signature/
│   ├── daily-card/        # "Day Brief" — panahon/oras/mapa (kinukuha ng isang inline template script)
│   ├── code-canvas/
│   ├── countdown-timer/
│   ├── color-palette/
│   ├── color-block/           # typed/heterogeneous na blocks (addMenu discriminator)
│   ├── dynamic-layout/
│   ├── tool-logo/         # "Logo" — auto-switching na brand logo
│   ├── street-map/        # offline vector na mapa ng city block
│   ├── url-shot/          # "URL Screenshot" (capture capability)
│   ├── strip-data/        # on-device na metadata strip — JPEG/PNG/SVG/PDF (file papasok → malinis na file palabas)
│   ├── compress-pdf/      # on-device na PDF compressor — nire-recompress ang mga imahe (file papasok → mas maliit na file palabas)
│   ├── brand-lockup/      # "Brand Lockup" — mga SUSE logo lockup; HarfBuzz text-to-path (wasm)
│   ├── bag-video/
│   ├── chart-creator/     # mga SVG chart mula sa structured data
│   ├── filter-duotone/    # two-color na photo treatment
│   ├── filter-halftone/   # photo → vector halftone dot grid
│   ├── filter-scanline/   # photo → retro posterised scanline grid (SVG / transparent raster)
│   ├── meeting-planner/   # global timezone na meeting scheduler
│   ├── calendar-ics/      # event → .ics calendar file kasama ang isang card
│   ├── digi-ad/           # "Animated Ad" — looping banner mula sa mga scene
│   ├── event-name-badge/  # conference badge — kino-compose ang qr-code bilang SVG
│   ├── wayfinding-signage/ # event signage; ang directions blocks ay auto-fit ang label text
│   ├── text-helper/       # on-device na text workbench (format/decode/hash/de-identify)
│   ├── layout-studio/     # "Layout Studio" — freeform WYSIWYG na editor canvas (render.layout: editor)
│   ├── multi-page-pdf/    # multi-page na PDF document — cover, flowing content blocks, back page
│   ├── diagram-builder/   # org / layercake / process / cycle / pyramid na diagram
│   ├── logo-wall/         # maraming logo → auto-packed grid
│   ├── logo-lockup-partner/ # SUSE + partner na co-brand lockup
│   ├── web-icon/          # favicon .ico / png / svg mula sa text + kulay
│   ├── filter-posterize/  # photo → flat posterised vector separations
│   ├── filter-pixel-stretch/ # photo → pixel-smear effect
│   ├── lottie-digi-ad/    # animated Lottie ad banner
│   └── pose-geeko/        # i-pose ang SUSE Geeko mascot — print-ready stills
│
├── catalog/
│   ├── tools/index.json        # tool registry
│   └── assets/
│       ├── index.json          # asset registry
│       └── suse/...            # logo, palette, atbp.
│
├── schemas/          # JSON Schema para sa tool.json, asset entries, AssetRef
├── scripts/          # build-catalog-index.ts, checksum-assets.ts, validate-catalog.ts
├── tests/            # mga engine test
└── docs/             # itong file + mga authoring guide + positioning
```

---

## Modelo ng paghahatid ng platform

Tumatakbo ang platform sa ilang surface — web PWA, Tauri desktop/mobile, ang scriptable na CLI, at ang interactive na TUI. Ginagamit ng lahat ng ito ang parehong engine at ang parehong tool files.

### Web (PWA) — pangunahing distribution
Naka-host sa isang SUSE-controlled na URL. Gumagana offline sa sandaling na-cache na ng service worker ang mga tool at asset. Dito gagamitin ng karamihan sa mga empleyado, vendor, at partner ang platform. Walang kailangang account — naka-store ang state sa IndexedDB kada device.

Responsive ang web shell mula sa iisang layout. Sa desktop, ang isang tool ay isang resizable na controls sidebar sa tabi ng preview stage na may trackpad-native na canvas navigation (Cmd/Ctrl-wheel o pinch para mag-zoom paikot sa cursor, Space- o middle-drag para mag-pan, mga `0`/`1`/`+`/`−` key, at isang Fit/% HUD). Sa mobile (≤640px) ang controls ay nagiging isang top-anchored na sheet na may drag grip na sumasnap sa peek/half/full (nagto-toggle sa tap) sa ibabaw ng static na full-screen preview, at isang floating **Render** button ang nagbubukas ng mga **Export** control sa isang bottom-sheet popup. Nakukuha ng touch ang pinch-zoom at drag-pan sa preview. Magkapareho ang render path at ang export controls sa dalawa — ang chrome lang ang nagre-reflow.

**Batch mode (`/pro`).** Naglalabas din ang web shell ng isang spreadsheet-style na batch grid (`shells/web/src/pro/`) na nagre-render ng maraming row nang sabay-sabay sa isa o maraming tool. Mayroon itong CSV/TSV round-trip kasama ang spreadsheet paste, per-row na template/format/size/unit/dpi, isang blocks-editor side panel na may live preview, collapsible na export column, isang per-row na "relevance" tag bar, left drag-handle para sa pag-reorder ng row, two-step na delete confirm, mga naka-save na batch session, at isang `.zip` download. Ito ang one-to-many na surface sa likod ng "mass content generation" na positioning.

### Tauri desktop / mobile
Packaged na native app (maliit na footprint sa pamamagitan ng Tauri). Nagbibigay ito ng ganap na offline availability, filesystem access para sa mga CLI-dependent na tool (PDF Smasher, Font Outliner), at camera access. Naka-iskedyul para sa tooling enhancement sa kalagitnaan ng 2026.

### CLI
`lolly <tool-id> [--input=value ...] --output=file.png`

Puwedeng i-invoke ng mga desktop user ang maraming tool mula sa terminal. Nilo-load ng CLI shell ang parehong engine, gumagawa ng jsdom DOM, pinapatakbo ang parehong render path, at isinusulat ang file. Ang URL mode ang transport — hindi ang CLI ay isang hiwalay na implementation. Ginagarantiya nito na magkapareho ang output ng CLI at GUI.

```bash
lolly qr-code --url=https://suse.com --output=qr.svg
lolly quotes --quote="Ship it." --output=quote.png
lolly                        # nililista ang mga available na tool
lolly qr-code                # nililista ang mga input para sa tool na iyon
```

### TUI
`npm run tui`

Ang interactive na kaanib ng CLI: isang full-screen, keyboard-first na terminal app (ginawa gamit ang Ink) para sa pag-browse ng mga tool, pagpuno ng mga input, pag-save ng projects, at pag-export — lahat nang walang GUI. **Muling ginagamit ng host bridge nito ang implementation ng CLI** para sa mga DOM-free na format (SVG/EMF/EPS/HTML + text/data), at nagdaragdag ito ng on-disk state sa ilalim ng `~/.lolly` kasama ang isang opt-in na inline preview. Bukod dito, mayroon itong **browser render tier**: isang scoped na headless Chromium (ang parehong ini-install ng MCP server) na gumagawa ng raster/PDF/video at live-URL capture on demand — pinapatakbo ang isang built copy ng web shell para magkapareho ang output, at nagla-launch lamang kapag unang beses kang nag-export ng ganoong format. Kaya ang `url-shot` (na may crop + recolor + vector PDF/SVG) at ang bawat raster/pdf na tool ay tumatakbo rin sa terminal. Tingnan ang [TUI guide](/info/tui.html).

---

## Mga kategorya ng tool

Naka-tag ang mga tool ng isang `category` sa manifest nila para sa gallery grouping.

Nakalista ang mga row ayon sa order ng gallery section. Ang `utility` section ay laging nagre-render nang **huli** sa gallery (pagkatapos ng bawat ibang category, kasama ang mga darating pa) — ito ang on-device na "Offline Utilities" drawer.

| Category | Mga naka-ship na tool | Nakaplano |
|---|---|---|
| `everyone` | QR Code Generator, Quote Card, Email Signature, Day Brief, Code Canvas, Color Block, Dynamic Layout, Logo, Web Icon Maker | Employee Image Stationery |
| `designer` | Brand Lockup, Bag Video, Chart Creator, Street Map, Animated Ad, Multi-Page PDF, Diagram Builder, Logo Lockup: Grid (NASCAR), Logo Lockup: Partner, Filter: Duotone, Filter: Halftone, Filter: Scanline, Filter: Posterize Bitmap, Filter: Pixel Stretch | Font Outliner |
| `event` | Meeting Planner, Event Name Badge, Wayfinding Signage, Calendar ICS | Event Stationery, Bulk Name Badges, Room Agenda Cards |
| `product` | — | CVE Alert, Product Release Announcement, Blog OG Image |
| `utility` | Countdown Timer, Color Palette, URL Screenshot, Strip Hidden Data, Text Helper, Compress PDF, Layout Studio | Unit/format converters, higit pang on-device na privacy utilities |

Naka-classify rin ang mga tool ayon sa status: `official` (brand approved, walang watermark), `community` (external contribution), `experimental` (watermarked na mga export). Dynamic Layout, URL Screenshot, Logo Lockup: Grid (NASCAR), Filter: Posterize Bitmap, at Diagram Builder ang kasalukuyang may `experimental` status; naka-ship ang Web Icon Maker at Layout Studio bilang mga `community` na tool.

Ang **Layout Studio** ang unang tool na ginawa gamit ang `render.layout: "editor"` na free-canvas mode — isang chromeless, direct-manipulation na surface kung saan mo puwedeng i-drag, i-resize, i-rotate, at i-snap ang mga kahon ng text, shapes, at imahe, tapos i-export sa pamamagitan ng parehong render path tulad ng bawat ibang tool.

Ang **Strip Hidden Data** ang unang **on-device utility** (`privacy: "on-device"`): isang content-transform na tool na kumukuha ng file na *ibinigay mo mismo*, pinoproseso ito nang buo sa browser, at ibinabalik ang isang malinis na kopya — hindi kailanman ina-upload, hindi kailanman winawatermark, walang isinasapat na provenance. Ang **Text Helper** ang pangalawa — isang on-device na workbench para sa pang-araw-araw na paste-into-a-website na gawain (JSON format, JWT decode, Base64, URL encode/decode, SHA hashing). Ang **Compress PDF** ang pangatlo — pinapaliit nito ang isang PDF sa pamamagitan ng pag-recompress ng mga imahe nito, muli, nang buo on-device. Ang tatlo ay may badge text na "Runs on your device — nothing is uploaded". Ito ang simula ng isang privacy-utility category na pumapalit sa pagbibigay ng mga kumpidensyal na file sa mga single-purpose na website.

> Tandaan: Ang `category` at `status` ay denormalised papunta sa `catalog/tools/index.json` (ang registry na binabasa ng gallery) mula sa bawat `tool.json`. Ang manifest ang source of truth — ang index ay **ginagawa** ng `npm run build:catalog`, at nabibigo ang `npm run validate:catalog` sa CI kapag lumihis ang naka-commit na index mula sa mga manifest.

---

## Mga architectural na commitment

Naisaayos na ang mga desisyong ito. Ang pagbabago sa kahit alin sa mga ito ay isang malaking undertaking — hinuhubog nila ang bawat ibang desisyon sa codebase.

### 1. Mga declarative na tool, na may imperative na escape hatch

Ang isang tool ay isang manifest (`tool.json`) + isang template (`template.html`) + opsyonal na `hooks.js`.

**Idineklara ng manifest ang mga input.** Hindi ang template. Hindi kinukuha ang mga input mula sa mga Handlebars token. Ang manifest ang contract; ginagamit ng template ang mga named variable sa pamamagitan ng `{{id}}`.

**Opsyonal ang hooks.** Karamihan sa mga tool ay purong declarative — sapat na ang manifest + template. Ang mga tool na kailangan ng computed values (QR encoding, chart data shaping) ay nagbibigay ng `hooks.js` na naglalantad ng mga named lifecycle function (`onInit`, `onInput`, `onFrame` — ang per-frame na live-camera hook para sa mga motion-reactive na tool — `beforeRender`, `beforeExport`, `afterExport`, at `exportFile` — ang file-in/file-out na transform path na ginagamit ng mga on-device utility tulad ng Strip Hidden Data). Nilo-load ng host ang mga hook sa pamamagitan ng `new Function('host', …)` na naka-inject ang capability bridge bilang closure scope. Ito ay isang **portability contract, hindi isang security sandbox**: tumatakbo pa rin ang mga hook sa realm ng page at *puwede* nilang maabot ang `window`/`fetch`/`document` sa isang browser shell — ang `host.*` ang supported, portable na surface, hindi ito isang ipinapatupad na boundary. Naka-time-box ang mga async hook result (5s ang onInit, 2s ang onInput, 5s ang iba), at itinatapon ang mga huling resulta; hindi mapipigilan ang isang runaway na *synchronous* na hook. Kaya hindi ligtas patakbuhin ang untrusted na third-party hook code hangga't hindi pa naisasakatuparan ang Worker isolation.

Mahalaga ito dahil: puwedeng gawin ang mga declarative na tool ng mga non-developer. Kung ang bawat tool ay isang web app, ang risk note na "limitadong kasanayan para gumawa/mag-maintain ng mga workhorse template" ay magiging permanenteng bottleneck.

### 2. Data ang mga tool at asset, hindi bundled code

Kinukuha ng web at Tauri app ang mga tool at asset catalog mula sa isang kilalang URL sa oras ng boot, kino-cache ito nang lokal, at gumagana batay sa anumang naroon. **Ang pagdaragdag ng bagong event tile o seasonal na asset ay hindi nangangailangan ng app release.**

Naka-checksum ang mga asset bytes gamit ang SHA-256 para maiwasan ang CDN poisoning. Ang asset `id` + `version` ang nagpapatakbo ng cache invalidation.

### 3. Ang Capability Bridge ang tanging API na nakikita ng mga tool

Hindi kailanman ginagalaw ng mga tool ang DOM sa labas ng template area nila, hindi kailanman tumatawag ng `fetch` nang direkta, hindi kailanman nagbabasa ng filesystem. Tumatawag sila ng mga versioned na method na `host.*`. Nakadeklara ang bridge sa `engine/src/bridge/host-v1.ts`:

| Bridge API | Ano ang ginagawa nito |
|---|---|
| `host.profile` | Firstname, email, headshot, lungsod, atbp. ng user. Pre-fills ang mga input sa pamamagitan ng `bindToProfile`. |
| `host.assets` | Mga catalog query, asset resolution, host-provided na picker UI. |
| `host.state` | Mag-save / mag-load ng input slots. IndexedDB sa web, filesystem sa Tauri, memory sa CLI. |
| `host.clipboard` | Magsulat ng text o imahe papunta sa clipboard (may mga platform fallback). |
| `host.export` | Nagra-rasterize o nagse-serialize ng render target. Naglalagay ng watermark para sa mga experimental na tool. |
| `host.net` | Allowlisted na fetch — available lamang kung idineklara ng tool ang `"network"` capability. (Wala pang naka-ship na tool na gumagamit nito.) |

Ang mga opsyonal, additive na surface ay lumalabas lamang kapag ibinigay ito ng isang shell. Dalawa ang **capability-gated** — inilalantad lamang kapag idineklara ng tool ang tugmang flag: `host.compose` (i-embed ang render ng ibang tool — `compose`) at `host.capture` (page capture para sa URL Screenshot — `capture`). Ang iba ay **feature-detected** — naroroon kapag kaya itong ibigay ng shell: `host.text` (text-to-path sa pamamagitan ng HarfBuzz WASM; ang `wasm` capability ang nagma-flag sa mga tool na umaasa dito), `host.pdf` (PDF parsing/compression, ginagamit ng Strip Hidden Data at Compress PDF), at `host.tokens` (DTCG design tokens). Ang mga declarable na capability ay: `network`, `filesystem`, `clipboard`, `camera`, `ffmpeg`, `wasm`, `capture`, `compose`.

Tumatakbo ang parehong tool sa browser, Tauri, at headless CLI dahil ipinapatupad ng bawat shell ang interface na ito — hindi kailanman alam ng tool kung nasaan ito.

Naka-version ang bridge. Ang pagdaragdag ng mga method ay isang minor version. Ang pag-alis o pagbabago ng mga signature ay isang major version bump. Kapag naglabas ng v2, dapat patuloy na gumagana ang v1.

### 4. Permanente ang mga asset ID

Ang `suse/logo/primary` ay isang contract. Kapag na-publish na:
- Hindi na kailanman nagbabago ang ID, hindi na ito nagagamit ulit.
- Pagbabago sa bytes → i-bump ang `version` sa manifest.
- Pinalitan ng bagong asset → itakda ang `deprecated: true` at opsyonal na `replacedBy`.
- Laging nare-resolve ang mga existing na reference.

Ginagawa nitong matibay sa paglipas ng mga taon ang mga naka-save na tool state at mga URL-shared na link.

### 5. First-class ang URL mode

Dapat maipahayag ang bawat input bilang isang URL parameter:

```
lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H
```

Ang CLI mode ay URL mode sa ilalim ng ibang transport — bumubuo ang CLI shell ng isang URL-state object mula sa argv at pinapatakbo ang **parehong** engine pipeline. Iisa lang ang render path. Hindi puwedeng lumihis ang CLI mula sa GUI dahil hindi ito hiwalay na implementation.

Hinahawakan ng `url-mode.ts` ang round-trip (parse at serialize). Mga reserved na param (hindi kailanman ipinapasa sa tool bilang input): `format`, `export`, `copy`, `slot`, `output`, `filename`, `_v`, `z` (packed state — ang "Shortest link" token), `width`/`w`, `height`/`h`, `unit`, `dpi`, `profile`, `password`, `bleed`, `marks`, `full`, `options`, `nostage`. Ang mga asset input sa URL mode ay naka-serialize ayon sa `id` nila; nire-resolve ito ng runtime sa pamamagitan ng `host.assets.get()` bago mag-hydration. Ang `width`/`height` ay mga value sa `unit` (default ay `px`, puwede rin `mm`/`cm`/`in`/`pt`/`pc`); kapag physical unit, itinatakda ng `dpi` ang raster resolution. Itinatakda nila ang canvas document size at pre-fills ang export dimensions panel.

### 6. Dumadaan sa bridge ang storage, hindi direkta

Web shell: IndexedDB. Tauri: filesystem. CLI: in-memory. Ang nakikita lang ng mga tool ay `host.state.save(slot, data)` at `host.state.load(slot)`. Hindi ginagamit ang `localStorage` — masyado itong maliit at hindi kayang maghawak ng blobs.

Puwedeng mag-save ang mga user ng maraming named na edit slot kada tool at bumalik sa bawat session sa ibang pagkakataon. Walang kailangang gumawa ng account; per-device ang state. Dahil ang bridge lang ang tanging seam, ang per-device na state na iyon ay *portable* din: binabasa ulit ng `shells/web/src/data-transfer.ts` ang lahat sa pamamagitan ng `host.profile`/`host.state`/`host.assets` papunta sa iisang `lolly-backup` zip na puwedeng i-import sa kahit anong ibang install — ang offline na sagot sa "lumipat sa bagong device" na hindi na kailangan ng server (buong spec: `docs/data-transfer.md`). Ang SUSE ID integration (multi-device sync) ay isang darating na milestone sa ibabaw nito.

### 7. Sinasagot ng maturity tags ang "brand approved" na risk nang structural

Idineklara ng bawat tool ang `status: official | community | experimental` sa manifest nito. Nag-so-sort ang gallery ayon sa status. Awtomatikong winawatermark ng mga experimental na tool ang mga export nila — inilalapat ang watermark ng `host.export.render`, hindi ng tool, kaya hindi ito puwedeng i-opt-out ng isang non-official na tool author.

Ito ay isang structural na sagot sa perception risk na ang paggamit ng kahit anong tool ay nangangahulugan ng brand approval. Nagpapatong sa ibabaw nito ang mga process answer (isang review queue, SUSE ID gating).

### 8. Naka-type ang mga tool input sa pamamagitan ng manifest, kasama ang mga asset

Nagdideklara ang mga input ng isang `type`: `text`, `longtext`, `number`, `boolean`, `color`, `select`, `asset`, `date`, `time`, `datetime-local`, `url`, `profile`, `blocks`, `vector`, at `file`. Nagre-render ang host ng isang generic na control kada type mula sa manifest — walang isinusulat na control code ang mga tool. Tatlo ang may mas malaking timbang kaysa sa iba:

- Ang **`asset`** (na may `filter` at `allowUpload`) ang bridge papunta sa global na asset system; ang `allowUpload: false` ang brand-enforceability lever para sa mga bagay tulad ng sponsorship-tile logo kung saan mga library asset lang ang pinapayagan. Ginagamit ng mga user upload ang parehong `AssetRef` shape ng mga library asset, kaya pareho ang pagtrato ng mga tool sa kanila.
- Ang **`blocks`** ay isang repeating field-group — isang mini-table sa loob ng iisang input, ine-edit sa isang side panel, na may typed/discriminated na add menu at per-block na asset field. Ang pag-click sa isang rendered na block sa canvas ay nagfo-focus sa row ng block na iyon. Ginagamit ng `meeting-planner`, `chart-creator`, `event-name-badge`, `wayfinding-signage`, `color-block`, at `digi-ad`.
- Ang **`vector`** ay nagpapagrupo ng nakatakdang set ng mga numero (hal. isang transform) papunta sa isang compound na control; ang **`file`** ay naghahawak ng sariling file ng user bilang bytes sa memory para sa mga on-device na transform utility (hal. `strip-data` at `compress-pdf`).

### 9. Logic-less ang mga template (Handlebars, hindi EJS)

Sinadyang piliin ang Handlebars kaysa sa EJS:
- Logic-less. Puwedeng gawin ang mga template ng mga non-developer.
- Safe by default. Ang `{{x}}` ay HTML-escapes; ang `{{{x}}}` ay opt-in raw.
- Ang walang arbitrary na JS sa mga template ay nangangahulugan ng walang per-template na XSS audit surface.

Nakatira ang logic sa `hooks.js` kung saan ito explicit at reviewable. Mga available na Handlebars helper: `{{default}}`, `{{upper}}`, `{{lower}}`, `{{eq}}`, `{{markdown}}`, `{{asset ref}}`, `{{asset ref "property"}}` (kasama ang mga data-format helper na `icsStamp`/`rfcText`/`csvCell` na ginagamit ng mga sibling na `.ics`/`.vcf`/`.csv` na template).

### 10. Ang mga tool ay kino-compose ang mga tool

Puwedeng i-embed ng isang tool ang render ng **ibang** tool nang walang tool-to-tool na imports — nire-resolve ang composition ng engine, hindi kailanman ng tool code. May dalawang surface:

- **Declarative na manifest** — `composes: [{ id, tool, inputs, format?, width?, height? }]`. Nire-render ng engine ang named na child at inilalagay ang resulta sa logic-less na template bilang `{{asset <id>}}`. Kino-compose ngayon ng `event-name-badge` ang `qr-code` bilang isang SVG.
- **Portable na embed URL** — `<img src="https://lolly.tools/tool/<id>.<ext>?<inputs>">`. Nire-render ng shell ang child na iyon **nang lokal** (may lumalabas na placeholder pixel hanggang ma-resolve ang lokal na render); wala kailanman kinukuha mula sa `lolly.tools`.

I-compose ang render ng kahit anong tool: nananatiling totoong vector ang isang **SVG** na child kapag nag-export ang parent papunta sa SVG o PDF, at nagra-rasterize nang malinaw para sa PNG; ang mga **PNG/JPG/WEBP** na child ay naka-embed bilang mga imahe. Kailangan ang `compose` capability. Ang mga composed na child ay mga intermediate — hindi kailanman winawatermark o pinapatakan ng provenance — at nagde-degrade nang maayos ang composition: ang isang shell na hindi kayang i-render ang isang child ay basta na lang tinatanggal ang slot at nagre-render pa rin ang parent.

---

## Ang sadyang hindi namin ginawa

- **Walang EJS / walang arbitrary na JS sa mga template.** Zero ang XSS surface. Nakatira ang logic sa `hooks.js`.
- **Walang asset CMS.** Git ang asset catalog. Dumadaan ang mga update sa PR review. Walang upload UI, walang auth, walang moderation queue. Ang git review _ang_ moderation.
- **Walang RBAC sa MVP.** Public access. Pinapamahalaan ang brand risk sa pamamagitan ng maturity tags + watermarks + ang structural na katotohanan na ang lahat ng asset na nakikita ng mga user ay dumaan sa PR review.
- **Walang central database.** Per-device ang lahat ng user state. Nasa roadmap ang SUSE ID integration pero hindi ito launch blocker.
- **Walang shared na tools/engine code path.** Open source ang engine; nananatiling proprietary na SUSE content ang `tools/` at `assets/` sa sarili nilang mga repository. Ipinapatupad ang paghihiwalay (walang cross-imports) para manatiling malinis ang split.

---

## Lifecycle, mula simula hanggang katapusan

Nagbubukas ang isang user ng `lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H`:

1. **Boot.** Binubuksan ng web shell ang IndexedDB, binubuo ang capability bridge, sine-sync ang mga tool at asset catalog (o nilo-load mula sa cache kapag offline).
2. **Route.** URL hash → `tool` view, na kinukuha ang `qr-code` at ang mga URL param.
3. **Load.** Kinukuha ng `loadTool('qr-code', fetchFile)` ang `tool.json`, ni-validate ito laban sa JSON Schema, kinukuha ang `template.html`, `styles.css`, at ang source ng `hooks.js`.
4. **Parse URL state.** Isinasalin ng `parseUrlState` ang mga URL param papunta sa initial na input values. Ang mga asset ref (`?logo=suse/logo/primary`) ay pino-parse bilang lightweight na `{ id, _unresolved: true }` na mga object.
5. **Runtime.** Binubuo ng `createRuntime(tool, host, initialValues)` ang input model (pinagsasama ang profile data, defaults, at initial values), nire-resolve ang mga asset ref sa pamamagitan ng `host.assets.get()`, nilo-load ang hooks (closure-scoped ang `host`, hindi sandboxed), tinatawag ang `hooks.onInit`.
6. **Render.** Nag-su-subscribe ang shell sa runtime; sa bawat pagbabago ng state, tumatanggap ito ng `{ model, hydrated }`. Nire-render nito ang mga input control mula sa model at isinusulat ang hydrated na template HTML papunta sa `#tool-canvas`.
7. **Interact.** Nagta-type ang user sa isang input → `runtime.setInput(id, value)` → inilalapat ang mga constraint → tinatawag ang `hooks.onInput` → re-hydrate → re-render. Nag-a-update nang live ang canvas.
8. **Export.** Nag-click ang user sa Download(PNG) → `runtime.export(canvasNode, 'png')` → `host.export.render` (nagra-rasterize sa pamamagitan ng dom-to-image-more; dumaraan ang SVG/PDF sa dedicated na DOM-walking vectorisers) → blob → `host.export.download`. Malawak ang saklaw ng format na puwedeng piliin ng isang tool: `svg`, `png`, `jpg`/`jpeg`, `webp`, `avif`, `pdf`, ang mga vector format na `emf`, `eps`, kasama ang mga print/CMYK na format na `pdf-cmyk`, `cmyk-tiff`, `eps-cmyk`; ang mga video format na `webm`, `mp4`, `gif`; at ang mga data/text na format na `html`, `md`, `txt`, `json`, `csv`, `ics`, `vcf`, `ico`, `zip`. (Ang mga tool na nagtakda ng `render.export: false` — hal. Color Palette, Countdown Timer, Strip Hidden Data, Text Helper, Compress PDF — ay itinatago ang mga download/format/dimension control.) Kino-convert dito ang physical units kada format (PDF → true page points, raster → pixels sa DPI na may `pHYs` chunk). Ang authorship/provenance metadata (author, tool, source — binuo ng `engine/src/metadata.ts`) ay naka-embed kada format: PNG iTXt, JPEG EXIF, PDF info dict, SVG `<metadata>`, GIF comment. Nagkakaroon ng watermark na inilagay ng host, hindi ng tool, ang mga experimental na tool.

Parehong lifecycle sa Tauri. Parehong lifecycle sa CLI — ang jsdom ang nagbibigay ng headless DOM; napupunta ang output sa isang file o stdout.

---

## Katayuan ng open-source

Open source sa ilalim ng **MPL-2.0** ang mga directory na `engine/`, `shells/`, `schemas/`, at `docs/` — isang vendor-neutral na scaffolding platform para sa brand tooling, na hiwa-hiwalay ang bawat shippable unit sa sarili nitong repository sa ilalim ng [github.com/lolly-tools](https://github.com/lolly-tools). Ang `tools/` at `catalog/assets/` ay SUSE-specific na content at nananatiling **proprietary sa SUSE** (nakalaan ang lahat ng karapatan — tingnan ang `NOTICE.md` ng bawat repo); hindi ito sakop ng MPL.

Ipinapatupad ang split — walang cross-imports mula sa `engine/` papunta sa `tools/` o `assets/` — kaya nananatiling malinis ang boundary ng platform/content.

---

## Roadmap

| Milestone | Target | Ano |
|---|---|---|
| **Initial tools** | ✅ Tapos na | QR Code, Quote Card, Email Signature, Day Brief, Code Canvas, Countdown Timer, Color Palette, Brand Lockup, Bag Video, Chart Creator, Filter: Duotone, Meeting Planner — live na ang web shell |
| **Enhance current tooling** | Mid 2026 ✅ Tapos na  | Downloadable at offline na app (Tauri); mga karagdagang tool para sa empleyado at event; mas mayamang export pipeline (text-to-path stability, metadata, extra formats — tingnan ang `plans.md`) |
| **I-open-source ang engine** | Late 2026 ✅ Tapos na  | Nagiging public ang Engine, shells, schemas, docs — hindi ang branded na tools/assets |
| **Paglilipat mula device papunta sa device** | ✅ Tapos na | Dinadala ng portable na `lolly-backup` bundle ang profile, mga naka-save na session, na-upload na mga imahe, at mga preference sa pagitan ng kahit anong dalawang install — offline man o online, walang account. Forward-compatible, integrity-checked na envelope (spec: `docs/data-transfer.md`) |
| **Magtatag ng pormal na tool roadmap** | Late 2026 | Customer reference kits, AI design ingest, GET/URL request mode |
| **On-device na privacy utilities** | 🚧 Isinasagawa | Mga content-transform na tool na nagpoproseso ng *sarili mong* file nang lokal (file papasok → malinis na file palabas), pumapalit sa exfiltration papunta sa single-purpose na SaaS. **Tapos na:** `file` input type + `exportFile` na transform path + mga convention na `privacy:"on-device"` (walang watermark/provenance) + **Strip Hidden Data** (JPEG/PNG/SVG/PDF metadata, PDF sa pamamagitan ng `host.pdf` bridge) at **Text Helper** (ang on-device na workbench para sa pang-araw-araw na paste-into-a-website na gawain — JSON format, JWT decode, Base64, URL encode/decode, SHA hashing, kasama ang isang Novelty group). **Susunod:** crop/resize, image convert/compress; tapos isang `host.image` na codec bridge (spec: `plans/exfiltration-app-content.md`) |
| **Design tokens (DTCG)** | 🚧 Naka-ship na ang Colour | Mga brand primitive bilang canonical na [W3C Design Tokens (DTCG)](https://www.designtokens.org/TR/drafts/format/) — ang format na [ino-import/ineksport ng Penpot](https://help.penpot.app/user-guide/design-systems/design-tokens/). **Tapos na:** colour tokens (`suse/tokens/brand`), `host.tokens` bridge, picker swatches + mga reference-linked na value (spec: `docs/design-tokens.md`). **Susunod:** dimension/type tokens, Penpot import/export, user tokens sa transfer bundle (`tokens.json`) |
| **MCP agent endpoint (render)** | ✅ Tapos na | Inilalantad ng isang [MCP](https://modelcontextprotocol.io) server ang catalogue + render path bilang mga callable na tool (`lolly_list_tools` / `describe_tool` / `build_url` / `render` / `transform`) para makagawa ang kahit anong agent ng mga tapos na, rule-bound na asset — idagdag ito sa kahit anong MCP client bilang custom connector (OAuth 2.1) o i-point ang isang CLI/HTTP client dito gamit ang bearer token. Live sa `mcp.lolly.tools` (full endpoint: raster/PDF/animation/video sa pamamagitan ng hosted headless browser) at `lolly.tools/api/mcp` (serverless na browser-free tier). Iba ito sa Penpot *authoring* MCP sa ibaba, na tungkol sa **paggawa** ng tool (spec: `plans/mcp-server.md`; gabay: `docs/mcp.md` + `docs/ai-agents.md`) |
| **Penpot file ingest bilang mga tool** | 2027+ | I-import ang isang Penpot file at ilantad ito *bilang isang Lolly tool* (declarative, constraint-first), ginagawang deterministic na generator ang mga design na ginawa sa Penpot |
| **MCP + Penpot extension (online-only authoring)** | 2027+ | Bumubuo ang isang Penpot MCP server ng mga bagong tool gamit ang AI — ang pinaka-visual na paraan para gumawa ng deterministic na template: isang brand-informed na unang round, pinipino kasama ang isang tao sa loop, target ang one-shot na mga bagong konteksto sa paglipas ng panahon. Online-only ang **paggawa** ng tool; tumatakbo naman kahit saan ang mga tool na nagagawa nito |
| **RBAC + SUSE ID** | 2027+ | I-gate ang mga specific na tool sa likod ng SUSE ID; multi-device na naka-save na state; Google Drive ingest/export |

---

## Saan nagtatapos ang engine at saan nagsisimula ang host

Kung kaya mo itong ilarawan sa pure data + Handlebars → **engine**.
Kung ginagalaw nito ang DOM, filesystem, network, o kahit anong browser/OS API → **host**.

Sinadyang matalas ang linya. Ang engine ang open-source na bahagi. Ang lahat ng may alam tungkol sa SUSE, mga specific na platform, o mga runtime environment ay nananatiling wala rito.
