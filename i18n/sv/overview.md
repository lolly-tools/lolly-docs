# Översikt

Det här dokumentet fångar syftet, strukturen och de arkitektoniska besluten för Lolly-plattformen. Det speglar både produktvisionen och kodbasens nuvarande tillstånd.

> **Status:** Lolly är en intern prototyp i en **sluten pilot som ännu inte är avslutad**. Motorn är deterministisk och internt konsekvent, men produkten är i ett tidigt skede — SUSE är kund nummer ett — och dess kryptografi- och filtolkningsmotorer genomgår för närvarande SUSE:s stränga infrastrukturhärdning, som förbereder för företagsskala (vi är verkligen bra på det här). Läs arkitekturen nedan som designintention under test, inte en färdig, certifierad produkt. Se [Införande och styrning](/info/adoption-governance.html#status) för hur piloten drivs och mäts.

---

## Varför det här finns

Team stöter på ett återkommande problem: repetitivt kreativt arbete och innehållsarbete som är för förutsägbart för att motivera kompetent arbetskraft varje gång, men för kvalitetskänsligt för att lämnas ifrån sig utan skyddsräcken. Resultatet blir antingen låg genomströmning (specialistflaskhals), inkonsekvens (folk använder vilket verktyg de råkar ha), eller inlåsning hos en leverantör (en SaaS-DAM som styr dina mallar).

Den här plattformen är det strukturella svaret:

> **Programmatiskt kreativt arbete och innehåll i stor skala** — tillgångsgenerering utan arbetsinsats, med reglerna under central kontroll, för medarbetare, leverantörer och partner.

Resultatet är **överflöd**: varje evenemang har korrekt skyltning, varje CVE-avisering matchar husstilen, varje etikett trycks rent, varje e-postsignatur är aktuell — allt utan ett designärende. Plattformen hanterar återkommande operationaliserat kreativt arbete. Den är medvetet inte ett skräddarsytt designverktyg — designers äger fortfarande flaggskeppsarbetet.

### Var den passar in i landskapet

| Förmåga | Canva | Varumärkesportaler | Illustrator | Figma / Penpot | **Lolly** |
|---|---|---|---|---|---|
| Massgenerering av innehåll | delvis | ✗ | ✗ | ✗ | **✓** |
| Fungerar helt offline | ✗ | ✗ | ✓ | delvis | **✓** |
| Mallogik och hårda begränsningar | ✗ | delvis | ✗ | delvis | **✓** |
| Ingen designkunskap krävs | delvis | ✓ | ✗ | ✗ | **✓** |
| Automatiska Content Credentials | ✗ | ✗ | delvis | ✗ | **✓** |
| Verktyg kombinerar andra verktyg | ✗ | ✗ | ✗ | ✗ | **✓** |
| Öppen motor, inte SaaS-låst | ✗ | ✗ | ✗ | delvis | **✓** |
| C2PA content credentials | ✗ | ✗ | ✗ | ✗ | **✓** |
| Frivillig forensisk proveniens | ✗ | ✗ | ✗ | ✗ | **✓** |
| Mobil- och skrivbordsappar | ✓ | ✗ | ✗ | delvis | **✓** |
| Kommandorad och TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

Luckan är tydlig: inget i det befintliga landskapet ger oss regelstyrd, offlinekapabel, lågtröskel, internt tillgänglig output. Lolly innehåller till och med en öppen canvas — **Layout Studio** — där färger, typografi och tillgångar följer varumärkets globala inställningar, så att fri arrangering förblir regelstyrd. Vad den **inte** är är en obegränsad designsvit: designers fortsätter att använda Illustrator och Figma för skräddarsytt flaggskeppsarbete. Permutationer kan sättas samman med det här verktyget.

**Använd det för:** Snabb generering av operationaliserade kreativa tillgångar — evenemangsrutor, namnbrickor, signaturer, CVE-aviseringar, QR-koder, sociala kort, fraktetiketter, strukturerade rapporter.

**Använd det inte för:** Skräddarsytt hjälteinnehåll.

---

## Helhetsbilden

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

### Repositorystruktur

```
lolly/
├── engine/           # Plattformsoberoende kärna. Öppen källkod (MPL-2.0).
│   └── src/
│       ├── index.ts          # publikt gränssnitt — loader, runtime, template, inputs, url-mode
│       ├── loader.ts         # hämtar och validerar verktygsfiler
│       ├── runtime.ts        # orkestrerar femstegslivscykeln
│       ├── template.ts       # Handlebars-hydrering + annotateTemplate
│       ├── inputs.ts         # manifest → runtime-indatamodell
│       ├── url-mode.ts       # URL ↔ indatatillstånd, tur och retur
│       ├── validate.ts       # JSON Schema-validering av manifest
│       ├── compose.ts        # löser upp nästlade verktygsrenderingar (composes)
│       └── embed.ts          # tolkar portabla lolly.tools-inbäddnings-URL:er
│       └── bridge/
│           └── host-v1.ts    # TypeScript-gränssnitt — bryggkontraktet
│
├── shells/
│   ├── web/          # PWA — driftsatt online; primär distribution
│   │   └── src/
│   │       ├── main.ts           # uppstart, routing
│   │       ├── theme.ts          # tillämpa/spara tema (FOUC-förebyggande)
│   │       ├── bridge/           # webbimplementationer av HostV1-API:er
│   │       │   ├── index.ts      # sammanfogar alla bryggdelar
│   │       │   ├── db.ts         # IndexedDB-uppsättning
│   │       │   ├── state.ts      # host.state — sparade redigeringar
│   │       │   ├── profile.ts    # host.profile — användaruppgifter
│   │       │   ├── assets.ts     # host.assets — katalog + användaruppladdningar
│   │       │   ├── clipboard.ts  # host.clipboard
│   │       │   ├── export.ts     # host.export — rastrera/serialisera
│   │       │   ├── net.ts        # host.net — tillåtelselistad fetch
│   │       │   └── media.ts      # host.media — levande kamerabildrutor (onFrame)
│   │       ├── catalog/
│   │       │   └── sync.ts       # katalogsynk vid uppstart + offlinecache
│   │       ├── styles/           # app-övergripande CSS (app.css, picker.css, tokens.css)
│   │       └── views/
│   │           ├── gallery.ts    # verktygsbibliotekslistning + kort för sparade tillstånd
│   │           ├── tool.ts       # monterar ett verktyg (indata + arbetsyta + åtgärder)
│   │           ├── picker.ts     # gränssnitt för tillgångsväljaren (anropas av host.assets)
│   │           ├── profile.ts    # redigerare för användaruppgifter
│   │           ├── projects.ts   # /p — mappar med sparade sessioner (nästlade; export av mapp/markering)
│   │           └── free-canvas.ts # overlay för fri-arbetsyta-redigeraren för render.layout:"editor"-verktyg
│   │
│   ├── cli/          # Node.js CLI — samma motor, huvudlös jsdom
│   │   ├── bin/lolly.ts
│   │   └── src/
│   │       ├── run.ts    # loadTool → createRuntime → export → skriv fil
│   │       └── bridge.ts # CLI-implementation av HostV1
│   │
│   ├── tui/          # Interaktivt terminalskal (Ink) — återanvänder CLI-bryggan
│   │   └── src/
│   │       ├── main.tsx  # helskärmsapp: Gallery / Projects / Profile / ToolView
│   │       └── bridge.ts # CLI-brygga + tillstånd på disk under ~/.lolly
│   │
│   ├── tauri-desktop/ # nedladdningsbar skrivbordsapp
│   └── tauri-mobile/  # iOS/Android-app
│
├── tools/            # profil-VY (gitignored) — data, inte kod. Sammanslagen från paket:
│                     #   community/ (publik, varumärkesoberoende, MPL) + brands/<active>/tools (varumärkesägd).
│   ├── qr-code/
│   ├── quotes/
│   ├── email-signature/
│   ├── daily-card/        # "Day Brief" — väder/tid/karta (hämtas via ett inline-mallskript)
│   ├── code-canvas/
│   ├── countdown-timer/
│   ├── color-palette/
│   ├── color-block/           # typade/heterogena block (addMenu-diskriminator)
│   ├── dynamic-layout/
│   ├── tool-logo/         # "Logo" — automatiskt växlande varumärkeslogga
│   ├── street-map/        # offline vektorbaserade stadskartor
│   ├── url-shot/          # "URL Screenshot" (capture-kapabilitet)
│   ├── strip-data/        # metadataborttagning på enheten — JPEG/PNG/SVG/PDF (fil in → ren fil ut)
│   ├── compress-pdf/      # PDF-komprimerare på enheten — komprimerar om bilder (fil in → mindre fil ut)
│   ├── brand-lockup/      # "Brand Lockup" — SUSE-logotypkombinationer; HarfBuzz text-till-bana (wasm)
│   ├── bag-video/
│   ├── chart-creator/     # SVG-diagram från strukturerad data
│   ├── filter-duotone/    # tvåfärgad fotobehandling
│   ├── filter-halftone/   # foto → vektorbaserat halvtonsrutnät
│   ├── filter-scanline/   # foto → retro posteriserat skanlinjerutnät (SVG / transparent raster)
│   ├── meeting-planner/   # global mötesplanerare för tidszoner
│   ├── calendar-ics/      # evenemang → .ics-kalenderfil plus ett kort
│   ├── digi-ad/           # "Animated Ad" — loopande banner från scener
│   ├── event-name-badge/  # konferensmärken — komponerar qr-code som en SVG
│   ├── wayfinding-signage/ # evenemangsskyltning; riktningsblock som autoanpassar etikettext
│   ├── text-helper/       # textverkstad på enheten (formatera/avkoda/hasha/avidentifiera)
│   ├── layout-studio/     # "Layout Studio" — fri WYSIWYG-redigeringsyta (render.layout: editor)
│   ├── multi-page-pdf/    # PDF-dokument med flera sidor — omslag, flytande innehållsblock, baksida
│   ├── diagram-builder/   # organisationsschema / layercake / process / cykel / pyramiddiagram
│   ├── logo-wall/         # många logotyper → automatiskt packat rutnät
│   ├── logo-lockup-partner/ # SUSE + partner samvarumärkeskombination
│   ├── web-icon/          # favicon .ico / png / svg från text + färger
│   ├── filter-posterize/  # foto → platta posteriserade vektorseparationer
│   ├── filter-pixel-stretch/ # foto → pixelutsmetningseffekt
│   ├── lottie-digi-ad/    # animerade Lottie-annonsbanners
│   └── pose-geeko/        # posera SUSE-maskoten Geeko — tryckklara stillbilder
│
├── catalog/
│   ├── tools/index.json        # verktygsregister
│   └── assets/
│       ├── index.json          # tillgångsregister
│       └── suse/...            # logotyp, palett, etc.
│
├── schemas/          # JSON Schema för tool.json, tillgångsposter, AssetRef
├── scripts/          # build-catalog-index.ts, checksum-assets.ts, validate-catalog.ts
├── tests/            # motortester
└── docs/             # den här filen + skapandeguider + positionering
```

---

## Plattformens leveransmodell

Plattformen körs över flera ytor — webb-PWA, Tauri desktop/mobil, det skriptbara CLI:t och det interaktiva TUI:t. Alla använder samma motor och samma verktygsfiler.

### Webb (PWA) — primär distribution
Driftsatt på en SUSE-kontrollerad URL. Fungerar offline när service workern väl har cachat verktyg och tillgångar. Det är här de flesta medarbetare, leverantörer och partner kommer att använda plattformen. Inget konto krävs — tillståndet lagras i IndexedDB per enhet.

Webbskalet är responsivt från en enda layout. På skrivbordet är ett verktyg en storleksbar kontrollsidopanel bredvid en förhandsvisningsyta med styrplatteanpassad navigering i arbetsytan (Cmd/Ctrl-scroll eller nyp ihop för att zooma kring pekaren, blanksteg- eller mittendrag för att panorera, tangenterna `0`/`1`/`+`/`−`, och en Anpassa/%-HUD). På mobilen (≤640px) blir kontrollerna ett toppförankrat ark med ett draghandtag som snäpper till skymt/halv/full (tryck växlar), ovanpå en statisk helskärmsförhandsvisning, och en flytande **Rendera**-knapp öppnar **Export**-kontrollerna i en bottenark-popup. Touch får nyp-för-att-zooma och dra-för-att-panorera på förhandsvisningen. Renderingsvägen och exportkontrollerna är identiska i båda fallen — bara gränssnittet flödar om.

**Batch-läge (`/pro`).** Webbskalet levererar också ett kalkylbladsliknande batch-rutnät (`shells/web/src/pro/`) som renderar många rader på en gång över ett eller flera verktyg. Det hanterar CSV/TSV-import/export plus inklistring från kalkylblad, mall/format/storlek/enhet/dpi per rad, en sidopanel med blockredigerare och en live-förhandsvisning, hopfällbara exportkolumner, en "relevans"-taggrad per rad, vänster draghandtag för att ändra radordning, tvåstegsbekräftelse för radering, sparade batch-sessioner, och en `.zip`-nedladdning. Det här är en-till-många-ytan bakom positioneringen "massgenerering av innehåll".

### Tauri desktop / mobil
Paketerad nativ app (litet fotavtryck tack vare Tauri). Ger fullständig offlinetillgänglighet, filsystemsåtkomst för CLI-beroende verktyg (PDF Smasher, Font Outliner) och kameraåtkomst. Planerad för verktygsförbättring i mitten av 2026.

### CLI
`lolly <tool-id> [--input=value ...] --output=file.png`

Skrivbordsanvändare kan anropa många verktyg från terminalen. CLI-skalet läser in samma motor, skapar en jsdom-DOM, kör samma renderingsväg och skriver filen. URL-läge är transporten — CLI:t är inte en separat implementation. Det garanterar att CLI- och GUI-utdata är identiska.

```bash
lolly qr-code --url=https://suse.com --output=qr.svg
lolly quotes --quote="Ship it." --output=quote.png
lolly                        # listar tillgängliga verktyg
lolly qr-code                # listar indata för det verktyget
```

### TUI
`npm run tui`

Den interaktiva motsvarigheten till CLI:t: en helskärms, tangentbordsstyrd terminalapp (byggd på Ink) för att bläddra bland verktyg, fylla i indata, spara projekt och exportera — helt utan ett grafiskt gränssnitt. Dess värdbrygga **återanvänder CLI:ts implementation** för de DOM-fria formaten (SVG/EMF/EPS/HTML + text/data), och lägger till tillstånd på disk under `~/.lolly` plus en valfri infälld förhandsvisning. Utöver det har den en **webbläsarrenderingsnivå**: en avgränsad huvudlös Chromium (samma som MCP-servern installerar) som producerar raster/PDF/video och fångst av levande URL:er på begäran — den driver en byggd kopia av webbskalet så att utdata blir identisk, och startar bara första gången du exporterar ett sådant format. Så `url-shot` (med beskärning + omfärgning + vektor-PDF/SVG) och alla raster/pdf-verktyg körs i terminalen också. Se [TUI-guiden](/info/tui.html).

---

## Verktygskategorier

Verktyg taggas med en `category` i sitt manifest för galleriets gruppering.

Raderna listas i galleriets sektionsordning. Sektionen `utility` renderas alltid **sist** i galleriet (efter alla andra kategorier, inklusive framtida) — det är lådan för verktyg på enheten, "Offline Utilities".

| Kategori | Levererade verktyg | Planerat |
|---|---|---|
| `everyone` | QR Code Generator, Quote Card, Email Signature, Day Brief, Code Canvas, Color Block, Dynamic Layout, Logo, Web Icon Maker | Employee Image Stationery |
| `designer` | Brand Lockup, Bag Video, Chart Creator, Street Map, Animated Ad, Multi-Page PDF, Diagram Builder, Logo Lockup: Grid (NASCAR), Logo Lockup: Partner, Filter: Duotone, Filter: Halftone, Filter: Scanline, Filter: Posterize Bitmap, Filter: Pixel Stretch | Font Outliner |
| `event` | Meeting Planner, Event Name Badge, Wayfinding Signage, Calendar ICS | Event Stationery, Bulk Name Badges, Room Agenda Cards |
| `product` | — | CVE Alert, Product Release Announcement, Blog OG Image |
| `utility` | Countdown Timer, Color Palette, URL Screenshot, Strip Hidden Data, Text Helper, Compress PDF, Layout Studio | Enhets-/formatomvandlare, fler integritetsverktyg på enheten |

Verktyg klassificeras också efter status: `official` (varumärkesgodkänt, ingen vattenstämpel), `community` (externt bidrag), `experimental` (vattenstämplade exporter). Dynamic Layout, URL Screenshot, Logo Lockup: Grid (NASCAR), Filter: Posterize Bitmap och Diagram Builder har för närvarande status `experimental`; Web Icon Maker och Layout Studio levereras som `community`-verktyg.

**Layout Studio** är det första verktyget byggt på det fria arbetsyteläget `render.layout: "editor"` — en kromfri, direktmanipulerande yta där du drar, ändrar storlek på, roterar och snäpper fast rutor med text, former och bilder, och sedan exporterar via samma renderingsväg som alla andra verktyg.

**Strip Hidden Data** är det första **verktyget på enheten** (`privacy: "on-device"`): ett innehållstransformerande verktyg som tar en fil *du* tillhandahåller, bearbetar den helt i webbläsaren och lämnar tillbaka en ren kopia — aldrig uppladdad, aldrig vattenstämplad, ingen proveniens stämplad. **Text Helper** är det andra — en verkstad på enheten för vardagliga klistra-in-i-en-webbplats-uppgifter (JSON-formatering, JWT-avkodning, Base64, URL-kodning/avkodning, SHA-hashning). **Compress PDF** är det tredje — det krymper en PDF genom att koda om dess bilder, återigen helt på enheten. Alla tre bär märkningstexten "Runs on your device — nothing is uploaded". Det här är starten på en integritetsverktygskategori som ersätter att lämna ifrån sig konfidentiella filer till enfunktionswebbplatser.

> Obs: `category` och `status` denormaliseras till `catalog/tools/index.json` (registret galleriet läser) från varje `tool.json`. Manifestet är den auktoritativa källan — indexet **genereras** av `npm run build:catalog`, och `npm run validate:catalog` fäller CI om det incheckade indexet har glidit isär från manifesten.

---

## Arkitektoniska åtaganden

De här besluten är fastslagna. Att ändra något av dem är ett stort åtagande — de formar alla andra beslut i kodbasen.

### 1. Deklarativa verktyg, med en imperativ nödutgång

Ett verktyg är ett manifest (`tool.json`) + en mall (`template.html`) + valfri `hooks.js`.

**Manifestet deklarerar indata.** Inte mallen. Indata härleds inte från Handlebars-token. Manifestet är kontraktet; mallen konsumerar namngivna variabler via `{{id}}`.

**Hooks är valfria.** De flesta verktyg är rent deklarativa — manifest + mall räcker. Verktyg som behöver beräknade värden (QR-kodning, formning av diagramdata) tillhandahåller `hooks.js` som exponerar namngivna livscykelfunktioner (`onInit`, `onInput`, `onFrame` — hooken per bildruta för levande kamera i rörelsereaktiva verktyg — `beforeRender`, `beforeExport`, `afterExport`, och `exportFile` — fil-in/fil-ut-transformeringsvägen som används av verktyg på enheten som Strip Hidden Data). Värden läser in hooks via `new Function('host', …)` med kapabilitetsbryggan injicerad som closure-scope. Det här är ett **portabilitetskontrakt, inte en säkerhetssandlåda**: hooks körs fortfarande i sidans realm och *kan* nå `window`/`fetch`/`document` i ett webbläsarskal — `host.*` är den understödda, portabla ytan, inte en upprätthållen gräns. Asynkrona hook-resultat är tidsboxade (onInit 5s, onInput 2s, övriga 5s) och sena resultat kastas; en skenande *synkron* hook kan inte avbrytas. Opålitlig tredjeparts-hook-kod är därför inte säker att köra förrän Worker-isolering lanseras.

Det här spelar roll eftersom: deklarativa verktyg kan skapas av icke-utvecklare. Om varje verktyg vore en webbapp skulle riskanteckningen "begränsad kompetens att skapa/underhålla vardagsmallar" bli en permanent flaskhals.

### 2. Verktyg och tillgångar är data, inte medföljande kod

Webb- och Tauri-apparna hämtar verktygs- och tillgångskataloger från en känd URL vid uppstart, cachar dem lokalt, och arbetar med det som finns där. **Att lägga till en ny evenemangsruta eller säsongstillgång kräver inte en appuppdatering.**

Tillgångars bytes SHA-256-kontrollsummeras för att förhindra CDN-förgiftning. Tillgångens `id` + `version` styr cacheinvalidering.

### 3. Kapabilitetsbryggan är det enda API:et som verktygen ser

Verktyg rör aldrig DOM:en utanför sitt mallområde, anropar aldrig `fetch` direkt, läser aldrig filsystemet. De anropar versionerade `host.*`-metoder. Bryggan definieras i `engine/src/bridge/host-v1.ts`:

| Brygg-API | Vad den gör |
|---|---|
| `host.profile` | Användarens förnamn, e-post, porträttbild, stad, etc. Förifyller indata via `bindToProfile`. |
| `host.assets` | Katalogfrågor, upplösning av tillgångar, värdtillhandahållet gränssnitt för väljaren. |
| `host.state` | Spara / läs in indataplatser. IndexedDB på webben, filsystem på Tauri, minne på CLI. |
| `host.clipboard` | Skriv text eller bild till urklipp (med plattformsreservlösningar). |
| `host.export` | Rastrera eller serialisera renderingsmålet. Tillämpar vattenstämpel för experimentella verktyg. |
| `host.net` | Tillåtelselistad fetch — bara tillgänglig om verktyget deklarerat kapabiliteten `"network"`. (Inget levererat verktyg använder den för närvarande.) |

Valfria, additiva ytor visas bara när ett skal tillhandahåller dem. Två är **kapabilitetsspärrade** — exponerade bara när verktyget deklarerar matchande flagga: `host.compose` (bäddar in ett annat verktygs rendering — `compose`) och `host.capture` (sidfångst för URL Screenshot — `capture`). Resten är **funktionsdetekterade** — närvarande närhelst skalet kan tillhandahålla dem: `host.text` (text-till-bana via HarfBuzz WASM; kapabiliteten `wasm` flaggar verktyg som förlitar sig på den), `host.pdf` (PDF-tolkning/komprimering, används av Strip Hidden Data och Compress PDF), och `host.tokens` (DTCG-designtoken). De deklarerbara kapabiliteterna är: `network`, `filesystem`, `clipboard`, `camera`, `ffmpeg`, `wasm`, `capture`, `compose`.

Samma verktyg körs i webbläsaren, Tauri och huvudlös CLI eftersom varje skal implementerar det här gränssnittet — verktyget vet aldrig vilket det befinner sig i.

Bryggan är versionerad. Att lägga till metoder är en mindre versionsändring. Att ta bort eller ändra signaturer är en stor versionshöjning. När v2 lanseras måste v1 fortsätta att fungera.

### 4. Tillgångs-ID:n är för evigt

`suse/logo/primary` är ett kontrakt. Så fort det är publicerat:
- ID:t ändras aldrig, återanvänds aldrig.
- Byte-ändringar → höj `version` i manifestet.
- Ersätts av en ny tillgång → sätt `deprecated: true` och eventuellt `replacedBy`.
- Befintliga referenser går alltid att lösa upp.

Det gör att sparade verktygstillstånd och URL-delade länkar håller över flera år.

### 5. URL-läge är förstklassigt

Varje indata måste kunna uttryckas som en URL-parameter:

```
lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H
```

CLI-läge är URL-läge under en annan transport — CLI-skalet bygger ett URL-tillståndsobjekt från argv och kör **samma** motorpipeline. Det finns en enda renderingsväg. CLI:t kan inte glida isär från GUI:t eftersom det inte är en separat implementation.

`url-mode.ts` hanterar tur-och-retur-processen (tolkning och serialisering). Reserverade parametrar (vidarebefordras aldrig till verktyget som indata): `format`, `export`, `copy`, `slot`, `output`, `filename`, `_v`, `z` (packat tillstånd — token för "Kortaste länk"), `width`/`w`, `height`/`h`, `unit`, `dpi`, `profile`, `password`, `bleed`, `marks`, `full`, `options`, `nostage`. Tillgångsindata i URL-läge serialiseras via sitt `id`; runtime löser upp dem via `host.assets.get()` före hydrering. `width`/`height` är värden i `unit` (standard `px`, även `mm`/`cm`/`in`/`pt`/`pc`); med en fysisk enhet sätter `dpi` rasterupplösningen. De sätter arbetsytans dokumentstorlek och förifyller panelen för exportmått.

### 6. Lagring går via bryggan, inte direkt

Webbskal: IndexedDB. Tauri: filsystem. CLI: i minnet. Verktyg ser bara `host.state.save(slot, data)` och `host.state.load(slot)`. `localStorage` används inte — det är för litet och kan inte hålla blobbar.

Användare kan spara flera namngivna redigeringsplatser per verktyg och återvända till varje session senare. Inget konto behöver skapas; tillståndet är per enhet. Eftersom bryggan är den enda sömmen är det enhetslokala tillståndet också *portabelt*: `shells/web/src/data-transfer.ts` läser ut allting igen via `host.profile`/`host.state`/`host.assets` till en enda `lolly-backup`-zip som importeras på vilken annan installation som helst — det offline-svaret på "flytta till en ny enhet" som inte behöver någon server (fullständig specifikation: `docs/data-transfer.md`). SUSE ID-integration (synkronisering mellan flera enheter) är en framtida milstolpe ovanpå det här.

### 7. Mognadstaggar besvarar risken "varumärkesgodkänt" strukturellt

Varje verktyg deklarerar `status: official | community | experimental` i sitt manifest. Galleriet sorterar efter status. Experimentella verktyg vattenstämplar sina exporter automatiskt — vattenstämpeln appliceras av `host.export.render`, inte av verktyget, så en icke-officiell verktygsförfattare kan inte välja bort den.

Det här är ett strukturellt svar på riskuppfattningen att användning av ett verktyg antyder varumärkesgodkännande. Processvar (en granskningskö, SUSE ID-spärrning) läggs ovanpå det.

### 8. Verktygsindata typas via manifestet, inklusive tillgångar

Indata deklarerar en `type`: `text`, `longtext`, `number`, `boolean`, `color`, `select`, `asset`, `date`, `time`, `datetime-local`, `url`, `profile`, `blocks`, `vector`, och `file`. Värden renderar en generisk kontroll per typ utifrån manifestet — verktyg skriver noll kontrollkod. Tre väger tyngre än resten:

- **`asset`** (med `filter` och `allowUpload`) är bryggan till det globala tillgångssystemet; `allowUpload: false` är spaken för varumärkesefterlevnad för saker som sponsorruteloggor där bara bibliotekstillgångar är tillåtna. Användaruppladdningar använder samma `AssetRef`-form som bibliotekstillgångar, så verktyg hanterar dem identiskt.
- **`blocks`** är en upprepande fältgrupp — en minitabell inuti en indata, redigerad i en sidopanel, med en typad/diskriminerad tilläggsmeny och tillgångsfält per block. Att klicka på ett renderat block på arbetsytan fokuserar det blockets rad. Används av `meeting-planner`, `chart-creator`, `event-name-badge`, `wayfinding-signage`, `color-block` och `digi-ad`.
- **`vector`** grupperar en fast uppsättning tal (t.ex. en transform) i en sammansatt kontroll; **`file`** håller användarens egen fil som bytes i minnet för transformerande verktyg på enheten (t.ex. `strip-data` och `compress-pdf`).

### 9. Mallar är logiklösa (Handlebars, inte EJS)

Handlebars valdes framför EJS medvetet:
- Logiklöst. Mallar kan skapas av icke-utvecklare.
- Säkert som standard. `{{x}}` HTML-escapar; `{{{x}}}` är valfritt rått.
- Ingen godtycklig JS i mallar innebär ingen per-mall-XSS-granskningsyta.

Logik finns i `hooks.js` där den är explicit och granskningsbar. Tillgängliga Handlebars-hjälpare: `{{default}}`, `{{upper}}`, `{{lower}}`, `{{eq}}`, `{{markdown}}`, `{{asset ref}}`, `{{asset ref "property"}}` (plus dataformat-hjälparna `icsStamp`/`rfcText`/`csvCell` som används av syskonmallarna `.ics`/`.vcf`/`.csv`).

### 10. Verktyg komponerar verktyg

Ett verktyg kan bädda in **ett annat** verktygs rendering utan några verktyg-till-verktyg-importer — komposition löses upp av motorn, aldrig av verktygskod. Det finns två ytor:

- **Deklarativt manifest** — `composes: [{ id, tool, inputs, format?, width?, height? }]`. Motorn renderar det namngivna barnet och placerar resultatet i den logiklösa mallen som `{{asset <id>}}`. `event-name-badge` komponerar `qr-code` som en SVG idag.
- **Portabel inbäddnings-URL** — `<img src="https://lolly.tools/tool/<id>.<ext>?<inputs>">`. Skalet renderar det barnet **lokalt** (en platshållarpixel visas tills den lokala renderingen är klar); ingenting hämtas någonsin från `lolly.tools`.

Komponera valfritt verktygs rendering: ett **SVG**-barn förblir en äkta vektor när föräldern exporterar till SVG eller PDF, och rastreras skarpt för PNG; **PNG/JPG/WEBP**-barn bäddas in som bilder. Kräver kapabiliteten `compose`. Komponerade barn är mellanled — aldrig vattenstämplade eller proveniensstämplade — och komposition degraderar graciöst: ett skal som inte kan rendera ett barn utelämnar helt enkelt platsen, och föräldern renderas ändå.

---

## Vad vi medvetet valde att inte göra

- **Ingen EJS / ingen godtycklig JS i mallar.** XSS-ytan är noll. Logik finns i `hooks.js`.
- **Inget tillgångs-CMS.** Tillgångskatalogen är git. Uppdateringar går via PR-granskning. Inget uppladdningsgränssnitt, ingen autentisering, ingen modereringskö. Git-granskningen _är_ modereringen.
- **Ingen RBAC i MVP:n.** Offentlig åtkomst. Varumärkesrisk hanteras genom mognadstaggar + vattenstämplar + det strukturella faktumet att alla tillgångar användare ser har gått igenom PR-granskning.
- **Ingen central databas.** Allt användartillstånd är per enhet. SUSE ID-integration finns på färdplanen men är inte en lanseringsspärr.
- **Ingen delad kodväg för verktyg/motor.** Motorn är öppen källkod; `tools/` och `assets/` förblir proprietärt SUSE-innehåll i sina egna repositories. Uppdelningen upprätthålls (inga korsimporter) så att uppdelningen förblir ren.

---

## Livscykeln, från start till slut

En användare öppnar `lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H`:

1. **Uppstart.** Webbskalet öppnar IndexedDB, konstruerar kapabilitetsbryggan, synkar verktygs- och tillgångskatalogerna (eller läser in från cache vid offline).
2. **Routning.** URL-hash → vyn `tool`, med `qr-code` och URL-parametrar extraherade.
3. **Inläsning.** `loadTool('qr-code', fetchFile)` hämtar `tool.json`, validerar mot JSON Schema, hämtar `template.html`, `styles.css` och `hooks.js`-källkoden.
4. **Tolka URL-tillstånd.** `parseUrlState` översätter URL-parametrar till initiala indatavärden. Tillgångsreferenser (`?logo=suse/logo/primary`) tolkas som lättviktiga `{ id, _unresolved: true }`-objekt.
5. **Runtime.** `createRuntime(tool, host, initialValues)` bygger indatamodellen (sammanfogar profildata, standardvärden och initiala värden), löser upp tillgångsreferenser via `host.assets.get()`, läser in hooks (`host` i closure-scope, inte sandlådad), anropar `hooks.onInit`.
6. **Rendering.** Skalet prenumererar på runtime; vid varje tillståndsändring får det `{ model, hydrated }`. Det renderar indatakontroller utifrån modellen och skriver den hydrerade mall-HTML:n till `#tool-canvas`.
7. **Interaktion.** Användaren skriver i en indata → `runtime.setInput(id, value)` → begränsningar tillämpas → `hooks.onInput` anropas → återhydrering → återrendering. Arbetsytan uppdateras live.
8. **Export.** Användaren klickar på Ladda ner (PNG) → `runtime.export(canvasNode, 'png')` → `host.export.render` (rastrerar via dom-to-image-more; SVG/PDF går via dedikerade DOM-genomvandrande vektoriserare) → blob → `host.export.download`. Formatspannet ett verktyg kan välja är brett: `svg`, `png`, `jpg`/`jpeg`, `webp`, `avif`, `pdf`, vektorformaten `emf`, `eps`, plus tryck-/CMYK-formaten `pdf-cmyk`, `cmyk-tiff`, `eps-cmyk`; videoformaten `webm`, `mp4`, `gif`; och data-/textformaten `html`, `md`, `txt`, `json`, `csv`, `ics`, `vcf`, `ico`, `zip`. (Verktyg som sätter `render.export: false` — t.ex. Color Palette, Countdown Timer, Strip Hidden Data, Text Helper, Compress PDF — döljer kontrollerna för nedladdning/format/mått.) Fysiska enheter konverteras per format här (PDF → verkliga sidpunkter, raster → pixlar vid DPI med en `pHYs`-chunk). Upphovs-/proveniensmetadata (författare, verktyg, källa — byggd av `engine/src/metadata.ts`) bäddas in per format: PNG iTXt, JPEG EXIF, PDF-infoordbok, SVG `<metadata>`, GIF-kommentar. Experimentella verktyg får en vattenstämpel infogad av värden, inte av verktyget.

Samma livscykel i Tauri. Samma livscykel i CLI — jsdom tillhandahåller den huvudlösa DOM:en; utdata går till en fil eller stdout.

---

## Status för öppen källkod

Katalogerna `engine/`, `shells/`, `schemas/` och `docs/` är öppen källkod under **MPL-2.0** — en leverantörsneutral ställningsplattform för varumärkesverktyg, där varje leveransbar enhet delas upp i sitt eget repository under [github.com/lolly-tools](https://github.com/lolly-tools). `tools/` och `catalog/assets/` är SUSE-specifikt innehåll och förblir **proprietärt för SUSE** (alla rättigheter förbehållna — se respektive repositorys `NOTICE.md`); de omfattas inte av MPL.

Uppdelningen upprätthålls — det finns inga korsimporter från `engine/` till `tools/` eller `assets/` — så gränsen mellan plattform och innehåll förblir ren.

---

## Färdplan

| Milstolpe | Tidsram | Vad |
|---|---|---|
| **Initiala verktyg** | ✅ Klart | QR Code, Quote Card, Email Signature, Day Brief, Code Canvas, Countdown Timer, Color Palette, Brand Lockup, Bag Video, Chart Creator, Filter: Duotone, Meeting Planner — webbskalet live |
| **Förbättra befintliga verktyg** | Mitten av 2026 ✅ Klart  | Nedladdningsbar offline-app (Tauri); fler verktyg för medarbetare och evenemang; rikare exportpipeline (stabilitet för text-till-bana, metadata, extra format — se `plans.md`) |
| **Öppna källkoden för motorn** | Slutet av 2026 ✅ Klart  | Engine, shells, schemas, docs blir publika — inte de varumärkta verktygen/tillgångarna |
| **Överföring mellan enheter** | ✅ Klart | Portabelt `lolly-backup`-paket för profil, sparade sessioner, uppladdade bilder och inställningar mellan valfria två installationer — offline eller online, inget konto. Framåtkompatibelt, integritetskontrollerat kuvert (spec: `docs/data-transfer.md`) |
| **Etablera en formell verktygsfärdplan** | Slutet av 2026 | Kundreferenspaket, AI-designintag, GET/URL-förfrågningsläge |
| **Integritetsverktyg på enheten** | 🚧 Pågår | Innehållstransformerande verktyg som bearbetar *din egen* fil lokalt (fil in → ren fil ut), och ersätter exfiltrering till enfunktions-SaaS. **Klart:** indatatypen `file` + transformeringsvägen `exportFile` + konventionerna `privacy:"on-device"` (ingen vattenstämpel/proveniens) + **Strip Hidden Data** (JPEG/PNG/SVG/PDF-metadata, PDF via bryggan `host.pdf`) och **Text Helper** (verkstaden på enheten för vardagliga klistra-in-i-en-webbplats-uppgifter — JSON-formatering, JWT-avkodning, Base64, URL-kodning/avkodning, SHA-hashning, plus en Novelty-grupp). **Nästa:** beskärning/storleksändring, bildkonvertering/-komprimering; sedan en codec-brygga `host.image` (spec: `plans/exfiltration-app-content.md`) |
| **Designtoken (DTCG)** | 🚧 Färg levererat | Varumärkesprimitiver som kanoniska [W3C Design Tokens (DTCG)](https://www.designtokens.org/TR/drafts/format/) — formatet [Penpot importerar/exporterar](https://help.penpot.app/user-guide/design-systems/design-tokens/). **Klart:** färgtoken (`suse/tokens/brand`), bryggan `host.tokens`, väljarfärgrutor + referenslänkade värden (spec: `docs/design-tokens.md`). **Nästa:** dimensions-/typtoken, Penpot-import/export, användartoken i överföringspaketet (`tokens.json`) |
| **MCP-agentändpunkt (rendering)** | ✅ Klart | En [MCP](https://modelcontextprotocol.io)-server exponerar katalogen + renderingsvägen som anropbara verktyg (`lolly_list_tools` / `describe_tool` / `build_url` / `render` / `transform`) så att vilken agent som helst kan producera färdiga, regelbundna tillgångar — lägg till den i valfri MCP-klient som en anpassad anslutning (OAuth 2.1), eller peka en CLI-/HTTP-klient mot den med en bearer-token. Live på `mcp.lolly.tools` (fullständig ändpunkt: raster/PDF/animation/video via en hostad huvudlös webbläsare) och `lolly.tools/api/mcp` (serverlös webbläsarfri nivå). Skild från Penpot-*skapande*-MCP:n nedan, som handlar om verktygs**skapande** (spec: `plans/mcp-server.md`; guide: `docs/mcp.md` + `docs/ai-agents.md`) |
| **Intag av Penpot-filer som verktyg** | 2027+ | Importera en Penpot-fil och exponera den *som ett Lolly-verktyg* (deklarativt, regelstyrt), och omvandla design skapad i Penpot till deterministiska generatorer |
| **MCP + Penpot-tillägg (skapande endast online)** | 2027+ | En Penpot MCP-server formulerar nya verktyg med AI — det mest visuella sättet att skapa deterministiska mallar: en varumärkesinformerad första omgång, förfinad med en människa i loopen, med sikte på att över tid klara nya sammanhang i ett enda försök. Verktygs*skapande* sker bara online; verktygen den producerar körs var som helst |
| **RBAC + SUSE ID** | 2027+ | Spärra specifika verktyg bakom SUSE ID; sparat tillstånd över flera enheter; Google Drive-intag/export |

---

## Där motorn slutar och värden börjar

Om du kan beskriva det i ren data + Handlebars → **motorn**.
Om det rör DOM:en, filsystemet, nätverket, eller något webbläsar-/OS-API → **värden**.

Gränsen är skarp med avsikt. Motorn är den öppna källkodsdelen. Allt som känner till SUSE, specifika plattformar eller runtime-miljöer hålls utanför den.
