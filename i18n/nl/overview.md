# Overzicht

Dit document legt het doel, de structuur en de architecturale keuzes van het Lolly-platform vast. Het weerspiegelt zowel de productvisie als de huidige staat van de codebase.

> **Status:** Lolly is een intern prototype in een **gesloten pilot die nog niet is afgerond**. De engine is deterministisch en intern consistent, maar het product is nog pril — SUSE is klant nummer één — en de cryptografie- en file-parsing-engines ondergaan momenteel SUSE's strikte infrastructuur-hardening, in voorbereiding op enterprise-schaal (daar zijn we heel goed in). Lees de architectuur hieronder als ontwerpintentie die nog wordt getest, niet als een afgerond, gecertificeerd product. Zie [Adoptie & Governance](/info/adoption-governance.html#status) voor hoe de pilot wordt uitgevoerd en gemeten.

---

## Waarom dit bestaat

Teams hebben te maken met een terugkerend probleem: herhaalbaar creatief en content-werk dat te voorspelbaar is om er telkens vakkundige handen op te zetten, maar te kwaliteitsgevoelig om zonder guardrails uit handen te geven. Het resultaat is ofwel trage doorvoer (specialistenknelpunt), inconsistentie (mensen die gebruiken wat ze toevallig bij de hand hebben), of vendor lock-in (een SaaS-DAM die je templates controleert).

Dit platform is het structurele antwoord:

> **Programmatisch creatief werk en content op schaal** — assetgeneratie zonder handwerk, met de regels onder centrale controle, voor medewerkers, leveranciers en partners.

Het resultaat is **overvloed**: elk event heeft correcte bewegwijzering, elke CVE-melding volgt de huisstijl, elk label print schoon, elke e-mailhandtekening is actueel — allemaal zonder ontwerpticket. Het platform verzorgt terugkerend, geoperationaliseerd creatief werk. Het is bewust geen tool voor maatwerk — ontwerpers blijven eigenaar van vlaggenschipwerk.

### Waar het past in het landschap

| Mogelijkheid | Canva | Merkportals | Illustrator | Figma / Penpot | **Lolly** |
|---|---|---|---|---|---|
| Massale contentgeneratie | gedeeltelijk | ✗ | ✗ | ✗ | **✓** |
| Werkt volledig offline | ✗ | ✗ | ✓ | gedeeltelijk | **✓** |
| Templatelogica & harde constraints | ✗ | gedeeltelijk | ✗ | gedeeltelijk | **✓** |
| Geen ontwerpvaardigheden vereist | gedeeltelijk | ✓ | ✗ | ✗ | **✓** |
| Automatische Content Credentials | ✗ | ✗ | gedeeltelijk | ✗ | **✓** |
| Tools combineren andere tools | ✗ | ✗ | ✗ | ✗ | **✓** |
| Open engine, geen SaaS-lock-in | ✗ | ✗ | ✗ | gedeeltelijk | **✓** |
| C2PA content credentials | ✗ | ✗ | ✗ | ✗ | **✓** |
| Opt-in forensische herkomstregistratie | ✗ | ✗ | ✗ | ✗ | **✓** |
| Mobiele en desktop-apps | ✓ | ✗ | ✗ | gedeeltelijk | **✓** |
| Command line & TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

De vorm van het gat is duidelijk: niets in het bestaande landschap biedt ons constraints-first, offline-geschikte, laagdrempelige, intern toegankelijke output. Lolly heeft zelfs een eigen open canvas — **Layout Studio** — waar kleuren, typografie en assets conformeren aan de brand-globals, zodat ook vrije opmaak constraints-first blijft. Wat het **niet** is, is een onbeperkte ontwerpsuite: ontwerpers blijven Illustrator en Figma gebruiken voor maatwerk vlaggenschipwerk. Permutaties kunnen met deze tool worden samengesteld.

**Gebruik het voor:** Snelle generatie van geoperationaliseerd creatief werk — eventtegels, naambadges, handtekeningen, CVE-meldingen, QR-codes, social cards, verzendlabels, gestructureerde rapporten.

**Gebruik het niet voor:** Maatwerk hero-content.

---

## Het grote plaatje

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

### Repository-indeling

```
lolly/
├── engine/           # Platform-agnostic core. Open source (MPL-2.0).
│   └── src/
│       ├── index.ts          # public surface — loader, runtime, template, inputs, url-mode
│       ├── loader.ts         # fetches and validates tool files
│       ├── runtime.ts        # orchestrates the 5-step lifecycle
│       ├── template.ts       # Handlebars hydration + annotateTemplate
│       ├── inputs.ts         # manifest → runtime input model
│       ├── url-mode.ts       # URL ↔ input state round-trip
│       ├── validate.ts       # JSON Schema validation of manifests
│       ├── compose.ts        # resolve nested tool renders (composes)
│       ├── embed.ts          # parse portable lolly.tools embed URLs
│       └── bridge/
│           └── host-v1.ts    # TypeScript interface — the bridge contract
│
├── shells/
│   ├── web/          # PWA — hosted online; primary distribution
│   │   └── src/
│   │       ├── main.ts           # boot, routing
│   │       ├── theme.ts          # theme apply/persist (FOUC prevention)
│   │       ├── bridge/           # web implementations of HostV1 APIs
│   │       │   ├── index.ts      # compose all bridge pieces
│   │       │   ├── db.ts         # IndexedDB setup
│   │       │   ├── state.ts      # host.state — saved edits
│   │       │   ├── profile.ts    # host.profile — user details
│   │       │   ├── assets.ts     # host.assets — catalog + user uploads
│   │       │   ├── clipboard.ts  # host.clipboard
│   │       │   ├── export.ts     # host.export — rasterise/serialize
│   │       │   ├── net.ts        # host.net — allowlisted fetch
│   │       │   └── media.ts      # host.media — live camera frames (onFrame)
│   │       ├── catalog/
│   │       │   └── sync.ts       # boot-time catalog sync + offline cache
│   │       ├── styles/           # app-wide CSS (app.css, picker.css, tokens.css)
│   │       └── views/
│   │           ├── gallery.ts    # tool library listing + saved-state cards
│   │           ├── tool.ts       # mounts one tool (inputs + canvas + actions)
│   │           ├── picker.ts     # asset picker UI (invoked by host.assets)
│   │           ├── profile.ts    # user details editor
│   │           ├── projects.ts   # /p — folders of saved sessions (nested; folder/selection export)
│   │           └── free-canvas.ts # free-canvas editor overlay for render.layout:"editor" tools
│   │
│   ├── cli/          # Node.js CLI — same engine, headless jsdom
│   │   ├── bin/lolly.ts
│   │   └── src/
│   │       ├── run.ts    # loadTool → createRuntime → export → write file
│   │       └── bridge.ts # CLI implementation of HostV1
│   │
│   ├── tui/          # Interactive terminal shell (Ink) — reuses the CLI bridge
│   │   └── src/
│   │       ├── main.tsx  # full-screen app: Gallery / Projects / Profile / ToolView
│   │       └── bridge.ts # CLI bridge + on-disk state under ~/.lolly
│   │
│   ├── tauri-desktop/ # downloadable desktop app
│   └── tauri-mobile/  # iOS/Android app
│
├── tools/            # profile VIEW (gitignored) — data, not code. Merged from packs:
│                     #   community/ (public, brand-agnostic, MPL) + brands/<active>/tools (brand-owned).
│   ├── qr-code/
│   ├── quotes/
│   ├── email-signature/
│   ├── daily-card/        # "Day Brief" — weather/time/map (fetched by an inline template script)
│   ├── code-canvas/
│   ├── countdown-timer/
│   ├── color-palette/
│   ├── color-block/           # typed/heterogeneous blocks (addMenu discriminator)
│   ├── dynamic-layout/
│   ├── tool-logo/         # "Logo" — auto-switching brand logo
│   ├── street-map/        # offline vector city-block maps
│   ├── url-shot/          # "URL Screenshot" (capture capability)
│   ├── strip-data/        # on-device metadata strip — JPEG/PNG/SVG/PDF (file in → clean file out)
│   ├── compress-pdf/      # on-device PDF compressor — recompresses images (file in → smaller file out)
│   ├── brand-lockup/      # "Brand Lockup" — SUSE logo lockups; HarfBuzz text-to-path (wasm)
│   ├── bag-video/
│   ├── chart-creator/     # SVG charts from structured data
│   ├── filter-duotone/    # two-color photo treatment
│   ├── filter-halftone/   # photo → vector halftone dot grid
│   ├── filter-scanline/   # photo → retro posterised scanline grid (SVG / transparent raster)
│   ├── meeting-planner/   # global timezone meeting scheduler
│   ├── calendar-ics/      # event → .ics calendar file plus a card
│   ├── digi-ad/           # "Animated Ad" — looping banner from scenes
│   ├── event-name-badge/  # conference badges — composes qr-code as an SVG
│   ├── wayfinding-signage/ # event signage; directions blocks auto-fit label text
│   ├── text-helper/       # on-device text workbench (format/decode/hash/de-identify)
│   ├── layout-studio/     # "Layout Studio" — freeform WYSIWYG editor canvas (render.layout: editor)
│   ├── multi-page-pdf/    # multi-page PDF document — cover, flowing content blocks, back page
│   ├── diagram-builder/   # org / layercake / process / cycle / pyramid diagrams
│   ├── logo-wall/         # many logos → auto-packed grid
│   ├── logo-lockup-partner/ # SUSE + partner co-brand lockup
│   ├── web-icon/          # favicon .ico / png / svg from text + colours
│   ├── filter-posterize/  # photo → flat posterised vector separations
│   ├── filter-pixel-stretch/ # photo → pixel-smear effect
│   ├── lottie-digi-ad/    # animated Lottie ad banners
│   └── pose-geeko/        # pose the SUSE Geeko mascot — print-ready stills
│
├── catalog/
│   ├── tools/index.json        # tool registry
│   └── assets/
│       ├── index.json          # asset registry
│       └── suse/...            # logo, palette, etc.
│
├── schemas/          # JSON Schema for tool.json, asset entries, AssetRef
├── scripts/          # build-catalog-index.ts, checksum-assets.ts, validate-catalog.ts
├── tests/            # engine tests
└── docs/             # this file + authoring guides + positioning
```

---

## Platform-uitleveringsmodel

Het platform draait op meerdere oppervlakken — web-PWA, Tauri desktop/mobile, de scriptbare CLI en de interactieve TUI. Ze gebruiken allemaal dezelfde engine en dezelfde toolbestanden.

### Web (PWA) — primaire distributie
Gehost op een door SUSE beheerde URL. Werkt offline zodra de service worker tools en assets heeft gecachet. Hier zullen de meeste medewerkers, leveranciers en partners het platform gebruiken. Geen account nodig — status wordt per apparaat opgeslagen in IndexedDB.

De webshell is responsive vanuit één layout. Op desktop is een tool een verstelbare zijbalk met bedieningselementen naast een voorvertoningsvlak, met trackpad-native canvasnavigatie (Cmd/Ctrl-scroll of knijpen om te zoomen rond de cursor, Spatie- of middelklik-slepen om te pannen, de toetsen `0`/`1`/`+`/`−`, en een Fit/%-HUD). Op mobiel (≤640px) worden de bedieningselementen een bovenaan verankerde sheet met een sleepgreep die vastklikt op kijkje / half / volledig (tikken wisselt), boven een statische, schermvullende voorvertoning, en een zwevende **Render**-knop opent de **Export**-bediening in een bottom-sheet-popup. Touch krijgt knijp-zoom en sleep-pan op de voorvertoning. Het renderpad en de exportbediening zijn in beide gevallen identiek — alleen de chrome herschikt.

**Batch-modus (`/pro`).** De webshell levert ook een spreadsheet-achtig batch-grid (`shells/web/src/pro/`) dat veel rijen tegelijk rendert, over één of meerdere tools heen. Het biedt CSV/TSV-round-trip plus spreadsheet-plakken, per-rij template/formaat/grootte/eenheid/dpi, een blocks-editor-zijpaneel met live voorvertoning, inklapbare exportkolommen, een per-rij "relevantie"-tagbalk, rijen herordenen via een sleepgreep links, tweestaps verwijderbevestiging, opgeslagen batch-sessies, en een `.zip`-download. Dit is het één-op-veel-oppervlak achter de positionering "massale contentgeneratie".

### Tauri desktop / mobile
Verpakt als native app (kleine footprint via Tauri). Biedt volledige offline beschikbaarheid, bestandssysteemtoegang voor CLI-afhankelijke tools (PDF Smasher, Font Outliner), en cameratoegang. Gepland voor tooling-uitbreiding medio 2026.

### CLI
`lolly <tool-id> [--input=value ...] --output=file.png`

Desktopgebruikers kunnen veel tools vanaf de terminal aanroepen. De CLI-shell laadt dezelfde engine, maakt een jsdom-DOM aan, doorloopt hetzelfde renderpad en schrijft het bestand weg. URL-modus is het transport — de CLI is geen aparte implementatie. Dit garandeert dat CLI- en GUI-uitvoer identiek zijn.

```bash
lolly qr-code --url=https://suse.com --output=qr.svg
lolly quotes --quote="Ship it." --output=quote.png
lolly                        # toont beschikbare tools
lolly qr-code                # toont inputs voor die tool
```

### TUI
`npm run tui`

De interactieve tegenhanger van de CLI: een volledig-scherm, toetsenbord-eerst terminal-app (gebouwd op Ink) om tools te doorbladeren, invoer in te vullen, projecten op te slaan en te exporteren — allemaal zonder GUI. De host-bridge ervan **hergebruikt de implementatie van de CLI** voor de DOM-vrije formaten (SVG/EMF/EPS/HTML + tekst/data), en voegt status-op-schijf toe onder `~/.lolly` plus een optionele inline voorvertoning. Daarnaast heeft hij een **browser-rendertier**: een afgebakende headless Chromium (dezelfde die de MCP-server installeert) die raster/PDF/video en live-URL-capture op aanvraag produceert — hij stuurt daarvoor een gebouwde kopie van de webshell aan, zodat de uitvoer identiek is, en start pas op wanneer je voor het eerst zo'n formaat exporteert. Zo draaien ook `url-shot` (met bijsnijden + herkleuren + vector-PDF/SVG) en elke raster-/pdf-tool in de terminal. Zie de [TUI-gids](/info/tui.html).

---

## Toolcategorieën

Tools krijgen een `category` mee in hun manifest, voor groepering in de gallery.

Rijen staan in de volgorde van de gallery-secties. De sectie `utility` rendert altijd **als laatste** in de gallery (na elke andere categorie, ook toekomstige) — het is de on-device "Offline Utilities"-lade.

| Categorie | Uitgeleverde tools | Gepland |
|---|---|---|
| `everyone` | QR Code Generator, Quote Card, Email Signature, Day Brief, Code Canvas, Color Block, Dynamic Layout, Logo, Web Icon Maker | Employee Image Stationery |
| `designer` | Brand Lockup, Bag Video, Chart Creator, Street Map, Animated Ad, Multi-Page PDF, Diagram Builder, Logo Lockup: Grid (NASCAR), Logo Lockup: Partner, Filter: Duotone, Filter: Halftone, Filter: Scanline, Filter: Posterize Bitmap, Filter: Pixel Stretch | Font Outliner |
| `event` | Meeting Planner, Event Name Badge, Wayfinding Signage, Calendar ICS | Event Stationery, Bulk Name Badges, Room Agenda Cards |
| `product` | — | CVE Alert, Product Release Announcement, Blog OG Image |
| `utility` | Countdown Timer, Color Palette, URL Screenshot, Strip Hidden Data, Text Helper, Compress PDF, Layout Studio | Eenheden-/formaatconverters, meer on-device privacytools |

Tools worden ook ingedeeld naar status: `official` (merkgoedgekeurd, geen watermerk), `community` (externe bijdrage), `experimental` (exports met watermerk). Dynamic Layout, URL Screenshot, Logo Lockup: Grid (NASCAR), Filter: Posterize Bitmap en Diagram Builder dragen momenteel de status `experimental`; Web Icon Maker en Layout Studio worden uitgeleverd als `community`-tools.

**Layout Studio** is de eerste tool gebouwd op de vrije-canvasmodus `render.layout: "editor"` — een chromeloos oppervlak voor directe manipulatie waarop je vakken met tekst, vormen en afbeeldingen sleept, van grootte verandert, roteert en laat vastklikken, en dat vervolgens exporteert via hetzelfde renderpad als elke andere tool.

**Strip Hidden Data** is de eerste **on-device utility** (`privacy: "on-device"`): een content-transformatietool die een bestand neemt dat *jij* aanlevert, dit volledig in de browser verwerkt, en een schone kopie teruggeeft — nooit geüpload, nooit van een watermerk voorzien, nooit van een herkomststempel voorzien. **Text Helper** is de tweede — een on-device werkbank voor alledaagse plak-in-een-website-klusjes (JSON-formattering, JWT-decoderen, Base64, URL-encoderen/decoderen, SHA-hashing). **Compress PDF** is de derde — hij verkleint een PDF door de afbeeldingen erin opnieuw te comprimeren, ook weer volledig on-device. Alle drie dragen de badgetekst "Runs on your device — nothing is uploaded". Dit is het begin van een privacytool-categorie die het overhandigen van vertrouwelijke bestanden aan singlepurpose-websites vervangt.

> Opmerking: `category` en `status` worden gedenormaliseerd naar `catalog/tools/index.json` (het register dat de gallery uitleest) vanuit elke `tool.json`. Het manifest is de bron van waarheid — de index wordt **gegenereerd** door `npm run build:catalog`, en `npm run validate:catalog` laat CI falen als de gecommitte index afwijkt van de manifesten.

---

## Architecturale keuzes

Deze beslissingen liggen vast. Elke wijziging eraan is een majeure onderneming — ze bepalen elke andere beslissing in de codebase.

### 1. Declaratieve tools, met een imperatief ontsnappingsluik

Een tool is een manifest (`tool.json`) + een template (`template.html`) + optionele `hooks.js`.

**Het manifest declareert de inputs.** Niet het template. Inputs worden niet afgeleid uit Handlebars-tokens. Het manifest is het contract; het template consumeert benoemde variabelen via `{{id}}`.

**Hooks zijn optioneel.** De meeste tools zijn puur declaratief — manifest + template volstaat. Tools die berekende waarden nodig hebben (QR-encodering, chart-datavorming) leveren `hooks.js` met benoemde lifecycle-functies (`onInit`, `onInput`, `onFrame` — de per-frame live-camera-hook voor bewegingsgevoelige tools — `beforeRender`, `beforeExport`, `afterExport`, en `exportFile` — het file-in/file-out-transformatiepad dat on-device utilities zoals Strip Hidden Data gebruiken). De host laadt hooks via `new Function('host', …)`, met de capability bridge geïnjecteerd als closure scope. Dit is een **portabiliteitscontract, geen security sandbox**: hooks draaien nog altijd in het realm van de pagina en *kunnen* in een browsershell bij `window`/`fetch`/`document` — `host.*` is het ondersteunde, portabele oppervlak, geen afgedwongen grens. Async hook-resultaten zijn time-boxed (onInit 5s, onInput 2s, overige 5s) en late resultaten worden genegeerd; een op hol geslagen *synchrone* hook kan niet worden onderbroken. Niet-vertrouwde hookcode van derden is daarom pas veilig om uit te voeren zodra Worker-isolatie er is.

Dit is belangrijk omdat: declaratieve tools geschreven kunnen worden door mensen die geen developer zijn. Als elke tool een webapp was, wordt de risiconotitie "beperkte vaardigheden om workhorse-templates te maken/onderhouden" een permanent knelpunt.

### 2. Tools en assets zijn data, geen gebundelde code

De web- en Tauri-apps halen bij het opstarten tool- en asset-catalogi op van een bekende URL, cachen ze lokaal, en werken met wat daar staat. **Een nieuwe eventtegel of seizoensasset toevoegen vereist geen app-release.**

Asset-bytes krijgen een SHA-256-checksum om CDN-poisoning te voorkomen. Asset-`id` + `version` stuurt cache-invalidatie aan.

### 3. De Capability Bridge is de enige API die tools zien

Tools raken nooit de DOM buiten hun template-gebied aan, roepen nooit rechtstreeks `fetch` aan, en lezen nooit het bestandssysteem. Ze roepen geversioneerde `host.*`-methoden aan. De bridge is gedefinieerd in `engine/src/bridge/host-v1.ts`:

| Bridge API | Wat het doet |
|---|---|
| `host.profile` | Voornaam, e-mail, pasfoto, stad enz. van de gebruiker. Vult inputs vooraf in via `bindToProfile`. |
| `host.assets` | Catalogusquery's, asset-resolutie, door de host geleverde picker-UI. |
| `host.state` | Invoerslots opslaan / laden. IndexedDB op web, bestandssysteem op Tauri, geheugen op CLI. |
| `host.clipboard` | Tekst of afbeelding naar het klembord schrijven (met platform-fallbacks). |
| `host.export` | Rasteriseert of serialiseert het renderdoel. Past watermerk toe bij experimentele tools. |
| `host.net` | Fetch met allowlist — alleen beschikbaar als de tool de capability `"network"` heeft gedeclareerd. (Momenteel gebruikt geen uitgeleverde tool dit.) |

Optionele, additieve oppervlakken verschijnen alleen wanneer een shell ze levert. Twee ervan zijn **capability-gated** — alleen zichtbaar wanneer de tool de bijbehorende flag declareert: `host.compose` (de render van een andere tool insluiten — `compose`) en `host.capture` (paginacapture voor URL Screenshot — `capture`). De rest is **feature-detected** — aanwezig wanneer de shell ze kan leveren: `host.text` (tekst-naar-pad via HarfBuzz WASM; de capability `wasm` markeert tools die hierop leunen), `host.pdf` (PDF-parsing/-compressie, gebruikt door Strip Hidden Data en Compress PDF), en `host.tokens` (DTCG design tokens). De declareerbare capabilities zijn: `network`, `filesystem`, `clipboard`, `camera`, `ffmpeg`, `wasm`, `capture`, `compose`.

Dezelfde tool draait in de browser, in Tauri en in de headless CLI, omdat elke shell deze interface implementeert — de tool weet nooit in welke hij zich bevindt.

De bridge is geversioneerd. Methoden toevoegen is een minor-versie. Signatures verwijderen of wijzigen is een major-versiesprong. Wanneer v2 uitkomt, moet v1 blijven werken.

### 4. Asset-ID's zijn voor altijd

`suse/logo/primary` is een contract. Eenmaal gepubliceerd:
- De ID verandert nooit, wordt nooit hergebruikt.
- Bytewijzigingen → verhoog `version` in het manifest.
- Vervangen door een nieuwe asset → zet `deprecated: true` en optioneel `replacedBy`.
- Bestaande verwijzingen blijven altijd oplosbaar.

Dit maakt opgeslagen toolstatussen en via URL gedeelde links duurzaam over jaren heen.

### 5. URL-modus is eersteklas

Elke input moet uit te drukken zijn als URL-parameter:

```
lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H
```

CLI-modus is URL-modus onder een ander transport — de CLI-shell bouwt een URL-status-object op vanuit argv en doorloopt dezelfde engine-pipeline. Er is één renderpad. De CLI kan niet uit de pas lopen met de GUI, omdat het geen aparte implementatie is.

`url-mode.ts` regelt de round-trip (parsen en serialiseren). Gereserveerde params (nooit doorgegeven aan de tool als input): `format`, `export`, `copy`, `slot`, `output`, `filename`, `_v`, `z` (packed status — het "Kortste link"-token), `width`/`w`, `height`/`h`, `unit`, `dpi`, `profile`, `password`, `bleed`, `marks`, `full`, `options`, `nostage`. Asset-inputs worden in URL-modus geserialiseerd via hun `id`; de runtime lost ze op via `host.assets.get()` vóór hydratatie. `width`/`height` zijn waarden in `unit` (standaard `px`, ook `mm`/`cm`/`in`/`pt`/`pc`); bij een fysieke eenheid stelt `dpi` de rasterresolutie in. Ze bepalen de documentgrootte van het canvas en vullen het exportafmetingenpaneel vooraf in.

### 6. Opslag loopt via de bridge, niet rechtstreeks

Webshell: IndexedDB. Tauri: bestandssysteem. CLI: in-memory. Tools zien alleen `host.state.save(slot, data)` en `host.state.load(slot)`. `localStorage` wordt niet gebruikt — te klein, en kan geen blobs bevatten.

Gebruikers kunnen meerdere benoemde bewerkingsslots per tool opslaan en later naar elke sessie terugkeren. Er is geen accountaanmaak vereist; status is per apparaat. Omdat de bridge de enige naad is, is die per-apparaat-status ook *overdraagbaar*: `shells/web/src/data-transfer.ts` leest alles weer uit via `host.profile`/`host.state`/`host.assets` naar één `lolly-backup`-zip die op elke andere installatie te importeren is — het offline antwoord op "verhuizen naar een nieuw apparaat" zonder dat daar een server voor nodig is (volledige spec: `docs/data-transfer.md`). SUSE ID-integratie (multi-device-sync) is een toekomstige milestone die daar nog bovenop komt.

### 7. Maturity-tags beantwoorden het risico "merkgoedgekeurd" structureel

Elke tool declareert `status: official | community | experimental` in zijn manifest. De gallery sorteert op status. Experimentele tools watermerken hun exports automatisch — het watermerk wordt toegepast door `host.export.render`, niet door de tool zelf, zodat een niet-officiële tool-auteur het niet kan uitschakelen.

Dit is een structureel antwoord op het perceptierisico dat het gebruik van een willekeurige tool merkgoedkeuring impliceert. Procesmatige antwoorden (een reviewwachtrij, SUSE ID-gating) komen daar nog bovenop.

### 8. Tool-inputs zijn getypeerd via het manifest, inclusief assets

Inputs declareren een `type`: `text`, `longtext`, `number`, `boolean`, `color`, `select`, `asset`, `date`, `time`, `datetime-local`, `url`, `profile`, `blocks`, `vector`, en `file`. De host rendert vanuit het manifest een generiek bedieningselement per type — tools schrijven geen regel bedieningscode. Drie ervan wegen zwaarder dan de rest:

- **`asset`** (met `filter` en `allowUpload`) is de brug naar het globale asset-systeem; `allowUpload: false` is de hendel om merkhandhaving af te dwingen bij dingen als sponsortegel-logo's, waar alleen bibliotheekassets zijn toegestaan. Gebruikersuploads gebruiken dezelfde `AssetRef`-vorm als bibliotheekassets, zodat tools ze identiek behandelen.
- **`blocks`** is een herhalende veldgroep — een minitabel binnen één input, bewerkt in een zijpaneel, met een getypeerd/gediscrimineerd toevoegmenu en asset-velden per blok. Klikken op een gerenderd blok op het canvas geeft focus aan de rij van dat blok. Gebruikt door `meeting-planner`, `chart-creator`, `event-name-badge`, `wayfinding-signage`, `color-block`, en `digi-ad`.
- **`vector`** groepeert een vaste set getallen (bijv. een transform) tot één samengesteld bedieningselement; **`file`** bevat het eigen bestand van de gebruiker als bytes in het geheugen, voor on-device transformatietools (bijv. `strip-data` en `compress-pdf`).

### 9. Templates zijn logicaloos (Handlebars, geen EJS)

Handlebars is bewust gekozen boven EJS:
- Logicaloos. Templates kunnen geschreven worden door mensen die geen developer zijn.
- Veilig by default. `{{x}}` escapet HTML; `{{{x}}}` is opt-in raw.
- Geen willekeurige JS in templates betekent geen XSS-auditoppervlak per template.

Logica leeft in `hooks.js`, waar die expliciet en review-baar is. Beschikbare Handlebars-helpers: `{{default}}`, `{{upper}}`, `{{lower}}`, `{{eq}}`, `{{markdown}}`, `{{asset ref}}`, `{{asset ref "property"}}` (plus dataformaat-helpers `icsStamp`/`rfcText`/`csvCell`, gebruikt door de naastliggende `.ics`/`.vcf`/`.csv`-templates).

### 10. Tools combineren tools

Een tool kan de render van **een andere** tool insluiten zonder tool-naar-tool-imports — compositie wordt opgelost door de engine, nooit door toolcode. Er zijn twee oppervlakken:

- **Declaratief manifest** — `composes: [{ id, tool, inputs, format?, width?, height? }]`. De engine rendert het benoemde kind en plaatst het resultaat in het logicaloze template als `{{asset <id>}}`. `event-name-badge` stelt vandaag `qr-code` samen als SVG.
- **Draagbare embed-URL** — `<img src="https://lolly.tools/tool/<id>.<ext>?<inputs>">`. De shell rendert dat kind **lokaal** (een placeholder-pixel is zichtbaar tot de lokale render is opgelost); er wordt nooit iets opgehaald bij `lolly.tools`.

Stel de render van elke tool samen: een **SVG**-kind blijft een echte vector wanneer de ouder naar SVG of PDF exporteert, en rasteriseert scherp voor PNG; **PNG/JPG/WEBP**-kinderen worden ingesloten als afbeeldingen. Vereist de capability `compose`. Samengestelde kinderen zijn tussenproducten — nooit voorzien van watermerk of herkomststempel — en compositie degradeert netjes: een shell die een kind niet kan renderen laat de slot gewoon weg en de ouder rendert alsnog.

---

## Wat we bewust niet hebben gedaan

- **Geen EJS / geen willekeurige JS in templates.** XSS-oppervlak is nul. Logica leeft in `hooks.js`.
- **Geen asset-CMS.** De asset-catalogus is git. Updates gaan via PR-review. Geen upload-UI, geen auth, geen moderatiewachtrij. De git-review _is_ de moderatie.
- **Geen RBAC in de MVP.** Publieke toegang. Merkrisico wordt beheerst door maturity-tags + watermerken + het structurele gegeven dat elke asset die gebruikers zien via PR-review is gegaan.
- **Geen centrale database.** Alle gebruikersstatus is per apparaat. SUSE ID-integratie staat op de roadmap, maar is geen launch-blocker.
- **Geen gedeeld tools/engine-codepad.** De engine is open source; `tools/` en `assets/` blijven proprietaire SUSE-content in hun eigen repositories. De scheiding wordt afgedwongen (geen cross-imports), zodat de splitsing schoon blijft.

---

## Levenscyclus, van begin tot eind

Een gebruiker opent `lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H`:

1. **Boot.** De webshell opent IndexedDB, bouwt de capability bridge op, synchroniseert de tool- en asset-catalogi (of laadt uit cache wanneer offline).
2. **Route.** URL-hash → `tool`-view, waarbij `qr-code` en de URL-params worden uitgelezen.
3. **Laden.** `loadTool('qr-code', fetchFile)` haalt `tool.json` op, valideert tegen het JSON Schema, en haalt de bron van `template.html`, `styles.css` en `hooks.js` op.
4. **URL-status parsen.** `parseUrlState` vertaalt URL-params naar initiële inputwaarden. Asset-refs (`?logo=suse/logo/primary`) worden geparsed als lichtgewicht `{ id, _unresolved: true }`-objecten.
5. **Runtime.** `createRuntime(tool, host, initialValues)` bouwt het inputmodel op (waarbij profielgegevens, standaardwaarden en initiële waarden worden samengevoegd), lost asset-refs op via `host.assets.get()`, laadt hooks (`host` in closure-scope, niet sandboxed), en roept `hooks.onInit` aan.
6. **Render.** De shell abonneert zich op de runtime; bij elke statuswijziging ontvangt hij `{ model, hydrated }`. Hij rendert bedieningselementen vanuit het model en schrijft de gehydrateerde template-HTML naar `#tool-canvas`.
7. **Interactie.** De gebruiker typt in een input → `runtime.setInput(id, value)` → constraints worden toegepast → `hooks.onInput` wordt aangeroepen → opnieuw hydrateren → opnieuw renderen. Het canvas werkt live bij.
8. **Export.** De gebruiker klikt op Download(PNG) → `runtime.export(canvasNode, 'png')` → `host.export.render` (rasteriseert via dom-to-image-more; SVG/PDF lopen via speciale DOM-doorlopende vectoriseerders) → blob → `host.export.download`. Het formatenbereik waar een tool voor kan kiezen is breed: `svg`, `png`, `jpg`/`jpeg`, `webp`, `avif`, `pdf`, de vectorformaten `emf`, `eps`, plus de print-/CMYK-formaten `pdf-cmyk`, `cmyk-tiff`, `eps-cmyk`; de videoformaten `webm`, `mp4`, `gif`; en de data-/tekstformaten `html`, `md`, `txt`, `json`, `csv`, `ics`, `vcf`, `ico`, `zip`. (Tools die `render.export: false` zetten — bijv. Color Palette, Countdown Timer, Strip Hidden Data, Text Helper, Compress PDF — verbergen de download-/formaat-/afmetingenbediening.) Fysieke eenheden worden hier per formaat omgerekend (PDF → echte pagina-punten, raster → pixels op DPI met een `pHYs`-chunk). Auteurschap-/herkomstmetadata (auteur, tool, bron — opgebouwd door `engine/src/metadata.ts`) wordt per formaat ingebed: PNG iTXt, JPEG EXIF, PDF info-dict, SVG `<metadata>`, GIF-comment. Experimentele tools krijgen een watermerk ingevoegd door de host, niet door de tool.

Dezelfde levenscyclus in Tauri. Dezelfde levenscyclus in de CLI — jsdom levert de headless DOM; de uitvoer gaat naar een bestand of stdout.

---

## Open source-status

De mappen `engine/`, `shells/`, `schemas/` en `docs/` zijn open source onder **MPL-2.0** — een vendorneutraal scaffolding-platform voor merktooling, waarbij elke uitleverbare eenheid is opgesplitst in zijn eigen repository onder [github.com/lolly-tools](https://github.com/lolly-tools). `tools/` en `catalog/assets/` zijn SUSE-specifieke content en blijven **eigendom van SUSE** (alle rechten voorbehouden — zie het `NOTICE.md`-bestand van elke repo); ze vallen niet onder de MPL.

De splitsing wordt afgedwongen — er zijn geen cross-imports vanuit `engine/` naar `tools/` of `assets/` — zodat de grens tussen platform en content schoon blijft.

---

## Roadmap

| Mijlpaal | Streefdatum | Wat |
|---|---|---|
| **Initiële tools** | ✅ Klaar | QR Code, Quote Card, Email Signature, Day Brief, Code Canvas, Countdown Timer, Color Palette, Brand Lockup, Bag Video, Chart Creator, Filter: Duotone, Meeting Planner — webshell live |
| **Bestaande tooling uitbreiden** | Medio 2026 ✅ Klaar  | Downloadbare offline app (Tauri); extra tools voor medewerkers en events; rijkere exportpipeline (stabiliteit van tekst-naar-pad, metadata, extra formaten — zie `plans.md`) |
| **De engine open source maken** | Eind 2026 ✅ Klaar  | Engine, shells, schemas, docs worden publiek — niet de merkgebonden tools/assets |
| **Overdracht tussen apparaten** | ✅ Klaar | Draagbare `lolly-backup`-bundel draagt profiel, opgeslagen sessies, geüploade afbeeldingen en voorkeuren over tussen twee installaties — offline of online, zonder account. Forward-compatible, integriteitsgecontroleerde envelop (spec: `docs/data-transfer.md`) |
| **Formele toolroadmap opstellen** | Eind 2026 | Klant-referentiekits, AI-ontwerpingest, GET/URL-requestmodus |
| **On-device privacytools** | 🚧 In uitvoering | Content-transformatietools die *je eigen* bestand lokaal verwerken (bestand erin → schoon bestand eruit), als vervanging voor exfiltratie naar singlepurpose-SaaS. **Klaar:** input-type `file` + transformatiepad `exportFile` + conventies `privacy:"on-device"` (geen watermerk/herkomst) + **Strip Hidden Data** (JPEG/PNG/SVG/PDF-metadata, PDF via de `host.pdf`-bridge) en **Text Helper** (de on-device werkbank voor alledaagse plak-in-een-website-klusjes — JSON-formattering, JWT-decoderen, Base64, URL-encoderen/decoderen, SHA-hashing, plus een Novelty-groep). **Volgende:** bijsnijden/formaat wijzigen, afbeelding omzetten/comprimeren; daarna een `host.image`-codec-bridge (spec: `plans/exfiltration-app-content.md`) |
| **Design tokens (DTCG)** | 🚧 Kleur uitgeleverd | Merkprimitieven als canonieke [W3C Design Tokens (DTCG)](https://www.designtokens.org/TR/drafts/format/) — het formaat dat [Penpot importeert/exporteert](https://help.penpot.app/user-guide/design-systems/design-tokens/). **Klaar:** kleurtokens (`suse/tokens/brand`), `host.tokens`-bridge, picker-swatches + naar referenties gekoppelde waarden (spec: `docs/design-tokens.md`). **Volgende:** dimensie-/typetokens, Penpot-import/-export, gebruikerstokens in de transferbundel (`tokens.json`) |
| **MCP-agent-endpoint (render)** | ✅ Klaar | Een [MCP](https://modelcontextprotocol.io)-server ontsluit de catalogus + het renderpad als aanroepbare tools (`lolly_list_tools` / `describe_tool` / `build_url` / `render` / `transform`), zodat elke agent afgewerkte, regelgebonden assets kan produceren — voeg hem toe aan elke MCP-client als custom connector (OAuth 2.1), of richt een CLI-/HTTP-client erop met een bearer-token. Live op `mcp.lolly.tools` (volledig endpoint: raster/PDF/animatie/video via een gehoste headless browser) en `lolly.tools/api/mcp` (serverless, browservrije tier). Anders dan de Penpot-*authoring*-MCP hieronder, die gaat over het **creëren** van tools (spec: `plans/mcp-server.md`; gids: `docs/mcp.md` + `docs/ai-agents.md`) |
| **Penpot-bestanden inlezen als tools** | 2027+ | Importeer een Penpot-bestand en ontsluit het *als een Lolly-tool* (declaratief, constraints-first), waardoor in Penpot ontworpen designs deterministische generatoren worden |
| **MCP + Penpot-extensie (alleen-online authoring)** | 2027+ | Een Penpot MCP-server verwoordt nieuwe tools met AI — de meest visuele manier om deterministische templates te maken: een merkgeïnformeerde eerste ronde, verfijnd met een mens in de lus, gericht op steeds nieuwe contexten in één keer goed. Het **creëren** van tools is alleen-online; de tools die het oplevert draaien overal |
| **RBAC + SUSE ID** | 2027+ | Specifieke tools afschermen achter SUSE ID; opgeslagen status over meerdere apparaten; Google Drive-in-/uitvoer |

---

## Waar de engine ophoudt en de host begint

Als je het kunt beschrijven in pure data + Handlebars → **engine**.
Als het de DOM, het bestandssysteem, het netwerk, of een browser-/OS-API aanraakt → **host**.

De grens is bewust scherp. De engine is het open-source deel. Alles wat iets weet van SUSE, specifieke platforms, of runtime-omgevingen blijft erbuiten.
