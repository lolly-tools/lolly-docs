# Oversikt

Dette dokumentet fanger opp formålet, strukturen og de arkitektoniske beslutningene for Lolly-plattformen. Det gjenspeiler både produktvisjonen og kodebasens nåværende tilstand.

> **Status:** Lolly er en intern prototype i en **lukket pilot som ennå ikke er avsluttet**. Motoren er deterministisk og internt konsistent, men produktet er tidlig i utviklingen — SUSE er kunde nummer én — og kryptografi- og filtolkningsmotorene gjennomgår for tiden SUSEs strenge infrastrukturherding, i forberedelse til virksomhetsskala (det er vi virkelig gode på). Les arkitekturen nedenfor som designintensjon under test, ikke som et ferdig, sertifisert produkt. Se [Innføring og styring](/info/adoption-governance.html#status) for hvordan piloten drives og måles.

---

## Hvorfor dette finnes

Team støter på et tilbakevendende problem: repeterbart kreativt arbeid og innholdsarbeid som er for forutsigbart til å rettferdiggjøre kompetente hender hver gang, men for kvalitetssensitivt til å overlates uten rekkverk. Resultatet blir enten lav gjennomstrømning (spesialistflaskehals), inkonsistens (folk bruker det verktøyet de har for hånden), eller leverandørinnlåsing (en SaaS-DAM som styrer malene dine).

Denne plattformen er det strukturelle svaret:

> **Programmatisk kreativt arbeid og innhold i stor skala** — ressursgenerering uten arbeidsinnsats, med reglene under sentral kontroll, for ansatte, leverandører og partnere.

Resultatet er **overflod**: hvert arrangement har korrekt skilting, hver CVE-varsling følger husstilen, hver etikett trykkes rent, hver e-postsignatur er oppdatert — alt uten en designsak. Plattformen håndterer tilbakevendende, operasjonalisert kreativt arbeid. Den er bevisst ikke et skreddersydd kreativt verktøy — designere eier fortsatt flaggskiparbeidet.

### Hvor den passer inn i landskapet

| Funksjon | Canva | Merkevareportaler | Illustrator | Figma / Penpot | **Lolly** |
|---|---|---|---|---|---|
| Massegenerering av innhold | delvis | ✗ | ✗ | ✗ | **✓** |
| Fungerer helt offline | ✗ | ✗ | ✓ | delvis | **✓** |
| Mallogikk og harde begrensninger | ✗ | delvis | ✗ | delvis | **✓** |
| Ingen designkompetanse kreves | delvis | ✓ | ✗ | ✗ | **✓** |
| Automatiske Content Credentials | ✗ | ✗ | delvis | ✗ | **✓** |
| Verktøy komponerer andre verktøy | ✗ | ✗ | ✗ | ✗ | **✓** |
| Åpen motor, ikke SaaS-låst | ✗ | ✗ | ✗ | delvis | **✓** |
| C2PA content credentials | ✗ | ✗ | ✗ | ✗ | **✓** |
| Valgfri forensisk opprinnelse | ✗ | ✗ | ✗ | ✗ | **✓** |
| Mobil- og skrivebordsapper | ✓ | ✗ | ✗ | delvis | **✓** |
| Kommandolinje og TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

Gapet er tydelig: ingenting i det eksisterende landskapet gir oss begrensningsstyrt, offlinekapabel, lavterskel, internt tilgjengelig resultat. Lolly inkluderer til og med en åpen canvas — **Layout Studio** — der farger, typografi og ressurser følger merkevarens globale verdier, slik at fri utforming forblir begrensningsstyrt. Det den **ikke** er, er en ubegrenset designsuite: designere fortsetter å bruke Illustrator og Figma til skreddersydd flaggskiparbeid. Permutasjoner kan settes sammen med dette verktøyet.

**Bruk det til:** Rask generering av operasjonalisert kreativt materiale — arrangementsfliser, navnebrikker, signaturer, CVE-varsler, QR-koder, sosiale kort, fraktetiketter, strukturerte rapporter.

**Ikke bruk det til:** Skreddersydd hero-innhold.

---

## Det store bildet

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
├── engine/           # Plattformuavhengig kjerne. Åpen kildekode (MPL-2.0).
│   └── src/
│       ├── index.ts          # offentlig grensesnitt — loader, runtime, template, inputs, url-mode
│       ├── loader.ts         # henter og validerer verktøyfiler
│       ├── runtime.ts        # orkestrerer den 5-trinns livssyklusen
│       ├── template.ts       # Handlebars-hydrering + annotateTemplate
│       ├── inputs.ts         # manifest → inndatamodell for runtime
│       ├── url-mode.ts       # URL ↔ inndatatilstand, tur-retur
│       ├── validate.ts       # JSON Schema-validering av manifester
│       ├── compose.ts        # løser opp nøstede verktøyrenderinger (composes)
│       ├── embed.ts          # tolker portable lolly.tools-innbyggings-URL-er
│       └── bridge/
│           └── host-v1.ts    # TypeScript-grensesnitt — brokontrakten
│
├── shells/
│   ├── web/          # PWA — driftet online; primær distribusjon
│   │   └── src/
│   │       ├── main.ts           # oppstart, ruting
│   │       ├── theme.ts          # tema-bruk/lagring (FOUC-forebygging)
│   │       ├── bridge/           # web-implementasjoner av HostV1-API-er
│   │       │   ├── index.ts      # komponerer alle brodelene
│   │       │   ├── db.ts         # IndexedDB-oppsett
│   │       │   ├── state.ts      # host.state — lagrede redigeringer
│   │       │   ├── profile.ts    # host.profile — brukerdetaljer
│   │       │   ├── assets.ts     # host.assets — katalog + brukeropplastinger
│   │       │   ├── clipboard.ts  # host.clipboard
│   │       │   ├── export.ts     # host.export — rasterisere/serialisere
│   │       │   ├── net.ts        # host.net — fetch med tillatelsesliste
│   │       │   └── media.ts      # host.media — direkte kamerabilder (onFrame)
│   │       ├── catalog/
│   │       │   └── sync.ts       # katalogsynkronisering ved oppstart + offline-cache
│   │       ├── styles/           # CSS for hele appen (app.css, picker.css, tokens.css)
│   │       └── views/
│   │           ├── gallery.ts    # verktøybibliotek-oversikt + kort for lagrede tilstander
│   │           ├── tool.ts       # monterer ett verktøy (inndata + canvas + handlinger)
│   │           ├── picker.ts     # grensesnitt for ressursvelger (kalt av host.assets)
│   │           ├── profile.ts    # redigering av brukerdetaljer
│   │           ├── projects.ts   # /p — mapper med lagrede økter (nøstet; mappe-/utvalgseksport)
│   │           └── free-canvas.ts # overlay for fri-canvas-redigering for render.layout:"editor"-verktøy
│   │
│   ├── cli/          # Node.js CLI — samme motor, hodeløs jsdom
│   │   ├── bin/lolly.ts
│   │   └── src/
│   │       ├── run.ts    # loadTool → createRuntime → export → skriv fil
│   │       └── bridge.ts # CLI-implementasjon av HostV1
│   │
│   ├── tui/          # Interaktivt terminalskall (Ink) — gjenbruker CLI-broen
│   │   └── src/
│   │       ├── main.tsx  # fullskjerm-app: Gallery / Projects / Profile / ToolView
│   │       └── bridge.ts # CLI-bro + tilstand på disk under ~/.lolly
│   │
│   ├── tauri-desktop/ # nedlastbar skrivebordsapp
│   └── tauri-mobile/  # iOS/Android-app
│
├── tools/            # profil-VISNING (gitignored) — data, ikke kode. Sammenslått fra pakker:
│                     #   community/ (offentlig, merkevareuavhengig, MPL) + brands/<active>/tools (merkevareeid).
│   ├── qr-code/
│   ├── quotes/
│   ├── email-signature/
│   ├── daily-card/        # "Day Brief" — vær/tid/kart (hentes av et inline malskript)
│   ├── code-canvas/
│   ├── countdown-timer/
│   ├── color-palette/
│   ├── color-block/           # typede/heterogene blokker (addMenu-diskriminator)
│   ├── dynamic-layout/
│   ├── tool-logo/         # "Logo" — automatisk vekslende merkevarelogo
│   ├── street-map/        # offline vektorbaserte kart over bykvartaler
│   ├── url-shot/          # "URL Screenshot" (capture-funksjon)
│   ├── strip-data/        # metadatafjerning på enheten — JPEG/PNG/SVG/PDF (fil inn → ren fil ut)
│   ├── compress-pdf/      # PDF-komprimering på enheten — komprimerer bilder på nytt (fil inn → mindre fil ut)
│   ├── brand-lockup/      # "Brand Lockup" — SUSE-logolockuper; HarfBuzz tekst-til-bane (wasm)
│   ├── bag-video/
│   ├── chart-creator/     # SVG-diagrammer fra strukturert data
│   ├── filter-duotone/    # tofarget bildebehandling
│   ├── filter-halftone/   # foto → vektorbasert rastermønster med punkter
│   ├── filter-scanline/   # foto → retro posterisert skannlinjemønster (SVG / transparent raster)
│   ├── meeting-planner/   # global møteplanlegger for tidssoner
│   ├── calendar-ics/      # arrangement → .ics-kalenderfil pluss et kort
│   ├── digi-ad/           # "Animated Ad" — loopende banner fra scener
│   ├── event-name-badge/  # konferansebrikker — komponerer qr-code som en SVG
│   ├── wayfinding-signage/ # arrangementsskilting; retningsblokker autotilpasser etikettekst
│   ├── text-helper/       # tekstverksted på enheten (formater/dekod/hash/anonymiser)
│   ├── layout-studio/     # "Layout Studio" — fri WYSIWYG-redigeringscanvas (render.layout: editor)
│   ├── multi-page-pdf/    # PDF-dokument med flere sider — forside, flytende innholdsblokker, bakside
│   ├── diagram-builder/   # org / layercake / prosess / syklus / pyramidediagrammer
│   ├── logo-wall/         # mange logoer → automatisk pakket rutenett
│   ├── logo-lockup-partner/ # SUSE + partner samarbeidslockup
│   ├── web-icon/          # favicon .ico / png / svg fra tekst + farger
│   ├── filter-posterize/  # foto → flate posteriserte vektorseparasjoner
│   ├── filter-pixel-stretch/ # foto → pikselutsmøringseffekt
│   ├── lottie-digi-ad/    # animerte Lottie-annonsebannere
│   └── pose-geeko/        # poser SUSE-maskoten Geeko — trykkeklare stillbilder
│
├── catalog/
│   ├── tools/index.json        # verktøyregister
│   └── assets/
│       ├── index.json          # ressursregister
│       └── suse/...            # logo, palett, osv.
│
├── schemas/          # JSON Schema for tool.json, ressursoppføringer, AssetRef
├── scripts/          # build-catalog-index.ts, checksum-assets.ts, validate-catalog.ts
├── tests/            # motortester
└── docs/             # denne filen + forfatterguider + posisjonering
```

---

## Plattformens leveringsmodell

Plattformen kjører på flere overflater — web-PWA, Tauri desktop/mobil, den skriptbare CLI-en og den interaktive TUI-en. Alle bruker samme motor og de samme verktøyfilene.

### Web (PWA) — primær distribusjon
Driftet på en SUSE-kontrollert URL. Fungerer offline når service workeren har mellomlagret verktøy og ressurser. Det er her de fleste ansatte, leverandører og partnere vil bruke plattformen. Ingen konto kreves — tilstand lagres i IndexedDB per enhet.

Nettskallet er responsivt fra ett enkelt oppsett. På skrivebordet er et verktøy en justerbar sidepanel med kontroller ved siden av en forhåndsvisningsflate, med trackpad-native canvas-navigasjon (Cmd/Ctrl-hjul eller knip for å zoome rundt markøren, mellomrom- eller midtre-dra for å panorere, tastene `0`/`1`/`+`/`−`, og en Fit/%-HUD). På mobil (≤640px) blir kontrollene et toppforankret ark med et draghåndtak som smetter til kikk/halv/full (trykk veksler), over en statisk fullskjerms forhåndsvisning, og en flytende **Render**-knapp åpner **Eksport**-kontrollene i en bunnark-popup. Touch får knipe-zoom og dra-panorering på forhåndsvisningen. Renderingsveien og eksportkontrollene er identiske i begge — bare kromet omorganiseres.

**Batch-modus (`/pro`).** Nettskallet leverer også et regnearklignende batch-rutenett (`shells/web/src/pro/`) som rendrer mange rader samtidig på tvers av ett eller flere verktøy. Det håndterer CSV/TSV tur-retur pluss innliming fra regneark, mal/format/størrelse/enhet/dpi per rad, et sidepanel med blokkredigering og live forhåndsvisning, sammenleggbare eksportkolonner, en «relevans»-taglinje per rad, radomorganisering med draghåndtak til venstre, tostegs slette-bekreftelse, lagrede batch-økter, og en `.zip`-nedlasting. Dette er en-til-mange-overflaten bak «massegenerering av innhold»-posisjoneringen.

### Tauri desktop / mobil
Pakket som en nativ app (lite fotavtrykk via Tauri). Gir full offline-tilgjengelighet, filsystemtilgang for CLI-avhengige verktøy (PDF Smasher, Font Outliner), og kameratilgang. Planlagt for verktøyforbedring midt i 2026.

### CLI
`lolly <tool-id> [--input=value ...] --output=file.png`

Skrivebordsbrukere kan kalle mange verktøy fra terminalen. CLI-skallet laster samme motor, oppretter en jsdom-DOM, kjører samme renderingsvei, og skriver filen. URL-modus er transporten — CLI-en er ikke en separat implementasjon. Dette garanterer at CLI- og GUI-resultater er identiske.

```bash
lolly qr-code --url=https://suse.com --output=qr.svg
lolly quotes --quote="Ship it." --output=quote.png
lolly                        # lister tilgjengelige verktøy
lolly qr-code                # lister inndata for det verktøyet
```

### TUI
`npm run tui`

Den interaktive motparten til CLI-en: en fullskjerms, tastaturførst terminal-app (bygget på Ink) for å bla i verktøy, fylle ut inndata, lagre prosjekter og eksportere — helt uten et GUI. Vertsbroen dens **gjenbruker CLI-ens implementasjon** for de DOM-frie formatene (SVG/EMF/EPS/HTML + tekst/data), og legger til tilstand på disk under `~/.lolly` pluss en valgfri inline forhåndsvisning. I tillegg har den et **nettleser-rendringsnivå**: en avgrenset hodeløs Chromium (den samme MCP-serveren installerer) som produserer raster/PDF/video og direkte URL-capture på forespørsel — den styrer en bygget kopi av nettskallet slik at resultatet blir identisk, og starter først når du eksporterer et slikt format for første gang. Så `url-shot` (med beskjæring + omfarging + vektor-PDF/SVG) og alle raster-/pdf-verktøy kjører i terminalen også. Se [TUI-guiden](/info/tui.html).

---

## Verktøykategorier

Verktøy merkes med en `category` i manifestet for galleri-gruppering.

Radene er listet i galleriseksjonenes rekkefølge. Seksjonen `utility` rendres alltid **sist** i galleriet (etter alle andre kategorier, inkludert fremtidige) — det er «Offlineverktøy»-skuffen på enheten.

| Kategori | Leverte verktøy | Planlagt |
|---|---|---|
| `everyone` | QR Code Generator, Quote Card, Email Signature, Day Brief, Code Canvas, Color Block, Dynamic Layout, Logo, Web Icon Maker | Employee Image Stationery |
| `designer` | Brand Lockup, Bag Video, Chart Creator, Street Map, Animated Ad, Multi-Page PDF, Diagram Builder, Logo Lockup: Grid (NASCAR), Logo Lockup: Partner, Filter: Duotone, Filter: Halftone, Filter: Scanline, Filter: Posterize Bitmap, Filter: Pixel Stretch | Font Outliner |
| `event` | Meeting Planner, Event Name Badge, Wayfinding Signage, Calendar ICS | Event Stationery, Bulk Name Badges, Room Agenda Cards |
| `product` | — | CVE Alert, Product Release Announcement, Blog OG Image |
| `utility` | Countdown Timer, Color Palette, URL Screenshot, Strip Hidden Data, Text Helper, Compress PDF, Layout Studio | Enhets-/formatkonvertere, flere personvernverktøy på enheten |

Verktøy klassifiseres også etter status: `official` (merkevaregodkjent, ingen vannmerke), `community` (eksternt bidrag), `experimental` (eksporter med vannmerke). Dynamic Layout, URL Screenshot, Logo Lockup: Grid (NASCAR), Filter: Posterize Bitmap og Diagram Builder har for tiden status `experimental`; Web Icon Maker og Layout Studio leveres som `community`-verktøy.

**Layout Studio** er det første verktøyet bygget på den frie canvas-modusen `render.layout: "editor"` — en kromfri overflate for direkte manipulasjon der du drar, endrer størrelse på, roterer og fester bokser med tekst, former og bilder, og deretter eksporterer via samme renderingsvei som alle andre verktøy.

**Strip Hidden Data** er det første **verktøyet på enheten** (`privacy: "on-device"`): et innholdstransformerende verktøy som tar en fil *du* leverer, behandler den helt i nettleseren, og gir tilbake en ren kopi — aldri lastet opp, aldri vannmerket, ingen opprinnelse stemplet. **Text Helper** er det andre — et verksted på enheten for hverdagslige lim-inn-på-en-nettside-oppgaver (JSON-formatering, JWT-dekoding, Base64, URL-koding/-dekoding, SHA-hashing). **Compress PDF** er det tredje — det krymper en PDF ved å komprimere bildene på nytt, igjen helt på enheten. Alle tre bærer merketeksten "Runs on your device — nothing is uploaded". Dette er starten på en personvernverktøy-kategori som erstatter det å gi fra seg konfidensielle filer til nettsteder med ett enkelt formål.

> Obs: `category` og `status` denormaliseres til `catalog/tools/index.json` (registeret galleriet leser) fra hver `tool.json`. Manifestet er den autoritative kilden — indeksen **genereres** av `npm run build:catalog`, og `npm run validate:catalog` gjør at CI feiler hvis den committede indeksen avviker fra manifestene.

---

## Arkitektoniske forpliktelser

Disse beslutningene er fastsatt. Å endre noen av dem er en stor oppgave — de former alle andre beslutninger i kodebasen.

### 1. Deklarative verktøy, med en imperativ nødutgang

Et verktøy er et manifest (`tool.json`) + en mal (`template.html`) + valgfri `hooks.js`.

**Manifestet deklarerer inndata.** Ikke malen. Inndata utledes ikke fra Handlebars-tokener. Manifestet er kontrakten; malen bruker navngitte variabler via `{{id}}`.

**Hooks er valgfrie.** De fleste verktøy er rent deklarative — manifest + mal er nok. Verktøy som trenger beregnede verdier (QR-koding, forming av diagramdata) leverer `hooks.js` som eksponerer navngitte livssyklusfunksjoner (`onInit`, `onInput`, `onFrame` — hooken per bilderute for direktekamera i bevegelsesreaktive verktøy — `beforeRender`, `beforeExport`, `afterExport`, og `exportFile` — fil-inn/fil-ut-transformasjonsveien som brukes av verktøy på enheten som Strip Hidden Data). Verten laster inn hooks via `new Function('host', …)` med kapabilitetsbroen injisert som closure-scope. Dette er en **portabilitetskontrakt, ikke en sikkerhetssandkasse**: hooks kjører fortsatt i sidens realm og *kan* nå `window`/`fetch`/`document` i et nettskall — `host.*` er den støttede, portable overflaten, ikke en håndhevet grense. Asynkrone hook-resultater er tidsavgrenset (onInit 5s, onInput 2s, øvrige 5s), og sene resultater forkastes; en løpsk *synkron* hook kan ikke avbrytes. Upålitelig tredjeparts-hook-kode er derfor ikke trygt å kjøre før Worker-isolasjon lanseres.

Dette har betydning fordi: deklarative verktøy kan lages av ikke-utviklere. Hvis hvert verktøy var en nettapp, ville risikonotatet «begrensede ferdigheter til å lage/vedlikeholde arbeidshest-maler» blitt en permanent flaskehals.

### 2. Verktøy og ressurser er data, ikke medfølgende kode

Web- og Tauri-appene henter verktøy- og ressurskataloger fra en kjent URL ved oppstart, mellomlagrer dem lokalt, og opererer med det som er der. **Å legge til en ny arrangementsflis eller sesongressurs krever ikke en app-utgivelse.**

Ressursbytene sjekksummeres med SHA-256 for å forhindre CDN-forgiftning. Ressursens `id` + `version` styrer cache-invalidering.

### 3. Kapabilitetsbroen er det eneste API-et verktøy ser

Verktøy rører aldri DOM-en utenfor sitt mal-område, kaller aldri `fetch` direkte, og leser aldri filsystemet. De kaller versjonerte `host.*`-metoder. Broen er definert i `engine/src/bridge/host-v1.ts`:

| Bro-API | Hva den gjør |
|---|---|
| `host.profile` | Brukerens fornavn, e-post, portrettbilde, by, osv. Forhåndsutfyller inndata via `bindToProfile`. |
| `host.assets` | Katalogspørringer, ressursoppløsning, vertlevert grensesnitt for velgeren. |
| `host.state` | Lagre / laste inndataplasser. IndexedDB på web, filsystem på Tauri, minne på CLI. |
| `host.clipboard` | Skriv tekst eller bilde til utklippstavlen (med plattformreserveløsninger). |
| `host.export` | Rasteriser eller serialiser renderingsmålet. Bruker vannmerke for eksperimentelle verktøy. |
| `host.net` | Fetch med tillatelsesliste — bare tilgjengelig hvis verktøyet har deklarert funksjonen `"network"`. (Ingen leverte verktøy bruker den for øyeblikket.) |

Valgfrie tilleggsoverflater vises bare når et skall tilbyr dem. To er **funksjonssperret** — eksponert bare når verktøyet deklarerer det tilhørende flagget: `host.compose` (bygge inn et annet verktøys rendering — `compose`) og `host.capture` (sidefangst for URL Screenshot — `capture`). Resten er **funksjonsdetektert** — til stede når skallet kan tilby dem: `host.text` (tekst-til-bane via HarfBuzz WASM; funksjonen `wasm` merker verktøy som er avhengige av den), `host.pdf` (PDF-tolking/komprimering, brukt av Strip Hidden Data og Compress PDF), og `host.tokens` (DTCG-designtokener). De deklarerbare funksjonene er: `network`, `filesystem`, `clipboard`, `camera`, `ffmpeg`, `wasm`, `capture`, `compose`.

Det samme verktøyet kjører i nettleseren, Tauri og hodeløs CLI fordi hvert skall implementerer dette grensesnittet — verktøyet vet aldri hvilket det er i.

Broen er versjonert. Å legge til metoder er en mindre versjon. Å fjerne eller endre signaturer er en stor versjonsøkning. Når v2 lanseres, må v1 fortsette å fungere.

### 4. Ressurs-ID-er varer for alltid

`suse/logo/primary` er en kontrakt. Når den er publisert:
- ID-en endres aldri, gjenbrukes aldri.
- Byte-endringer → øk `version` i manifestet.
- Erstattet av en ny ressurs → sett `deprecated: true` og eventuelt `replacedBy`.
- Eksisterende referanser løses alltid opp.

Dette gjør at lagrede verktøytilstander og URL-delte lenker holder seg over flere år.

### 5. URL-modus er førsteklasses

Hver inndata må kunne uttrykkes som en URL-parameter:

```
lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H
```

CLI-modus er URL-modus under en annen transport — CLI-skallet bygger et URL-tilstandsobjekt fra argv og kjører **samme** motor-pipeline. Det finnes én renderingsvei. CLI-en kan ikke avvike fra GUI-et fordi den ikke er en separat implementasjon.

`url-mode.ts` håndterer tur-returen (tolking og serialisering). Reserverte parametre (videresendes aldri til verktøyet som inndata): `format`, `export`, `copy`, `slot`, `output`, `filename`, `_v`, `z` (pakket tilstand — token for «Korteste lenke»), `width`/`w`, `height`/`h`, `unit`, `dpi`, `profile`, `password`, `bleed`, `marks`, `full`, `options`, `nostage`. Ressursinndata i URL-modus serialiseres via sin `id`; runtimen løser dem opp via `host.assets.get()` før hydrering. `width`/`height` er verdier i `unit` (standard `px`, også `mm`/`cm`/`in`/`pt`/`pc`); med en fysisk enhet setter `dpi` rasteroppløsningen. De setter canvasets dokumentstørrelse og forhåndsutfyller panelet for eksportdimensjoner.

### 6. Lagring går via broen, ikke direkte

Nettskall: IndexedDB. Tauri: filsystem. CLI: i minnet. Verktøy ser bare `host.state.save(slot, data)` og `host.state.load(slot)`. `localStorage` brukes ikke — det er for lite og kan ikke holde blober.

Brukere kan lagre flere navngitte redigeringsplasser per verktøy og komme tilbake til hver økt senere. Ingen kontooppretting kreves; tilstand er per enhet. Fordi broen er den eneste sømmen, er denne per-enhet-tilstanden også *portabel*: `shells/web/src/data-transfer.ts` leser alt ut igjen via `host.profile`/`host.state`/`host.assets` til en enkelt `lolly-backup`-zip som importeres på en hvilken som helst annen installasjon — det offline svaret på «flytt til en ny enhet» som ikke trenger en server (full spesifikasjon: `docs/data-transfer.md`). SUSE ID-integrasjon (synkronisering på tvers av enheter) er en fremtidig milepæl oppå dette.

### 7. Modenhetstagger svarer strukturelt på risikoen «merkevaregodkjent»

Hvert verktøy deklarerer `status: official | community | experimental` i manifestet. Galleriet sorterer etter status. Eksperimentelle verktøy vannmerker eksportene sine automatisk — vannmerket påføres av `host.export.render`, ikke av verktøyet, så det kan ikke velges bort av en ikke-offisiell verktøyforfatter.

Dette er et strukturelt svar på oppfatningsrisikoen at bruk av et hvilket som helst verktøy antyder merkevaregodkjenning. Prosessuelle svar (en godkjenningskø, SUSE ID-sperring) legges oppå dette.

### 8. Verktøyinndata er typet via manifestet, inkludert ressurser

Inndata deklarerer en `type`: `text`, `longtext`, `number`, `boolean`, `color`, `select`, `asset`, `date`, `time`, `datetime-local`, `url`, `profile`, `blocks`, `vector`, og `file`. Verten rendrer en generisk kontroll per type fra manifestet — verktøy skriver null linjer kontrollkode. Tre veier tyngre enn resten:

- **`asset`** (med `filter` og `allowUpload`) er broen til det globale ressurssystemet; `allowUpload: false` er spaken for merkevarehåndheving for ting som sponsorflis-logoer der bare biblioteksressurser er tillatt. Brukeropplastinger bruker samme `AssetRef`-form som biblioteksressurser, så verktøy håndterer dem identisk.
- **`blocks`** er en gjentakende feltgruppe — en minitabell inni én inndata, redigert i et sidepanel, med en typet/diskriminert legg-til-meny og ressursfelt per blokk. Å klikke på en rendret blokk på canvaset fokuserer den blokkens rad. Brukt av `meeting-planner`, `chart-creator`, `event-name-badge`, `wayfinding-signage`, `color-block`, og `digi-ad`.
- **`vector`** grupperer et fast sett med tall (f.eks. en transformasjon) i én sammensatt kontroll; **`file`** holder brukerens egen fil som bytes i minnet for transformasjonsverktøy på enheten (f.eks. `strip-data` og `compress-pdf`).

### 9. Maler er logikkfrie (Handlebars, ikke EJS)

Handlebars ble bevisst valgt fremfor EJS:
- Logikkfritt. Maler kan lages av ikke-utviklere.
- Trygt som standard. `{{x}}` HTML-escaper; `{{{x}}}` er valgfritt rått.
- Ingen vilkårlig JS i maler betyr ingen XSS-revisjonsflate per mal.

Logikk lever i `hooks.js`, der den er eksplisitt og kan gjennomgås. Tilgjengelige Handlebars-hjelpere: `{{default}}`, `{{upper}}`, `{{lower}}`, `{{eq}}`, `{{markdown}}`, `{{asset ref}}`, `{{asset ref "property"}}` (pluss dataformat-hjelperne `icsStamp`/`rfcText`/`csvCell` brukt av søsken-malene `.ics`/`.vcf`/`.csv`).

### 10. Verktøy komponerer verktøy

Et verktøy kan bygge inn **et annet** verktøys rendering uten verktøy-til-verktøy-importer — komposisjon løses opp av motoren, aldri av verktøykode. Det finnes to overflater:

- **Deklarativt manifest** — `composes: [{ id, tool, inputs, format?, width?, height? }]`. Motoren rendrer det navngitte barnet og plasserer resultatet i den logikkfrie malen som `{{asset <id>}}`. `event-name-badge` komponerer `qr-code` som en SVG i dag.
- **Portabel embed-URL** — `<img src="https://lolly.tools/tool/<id>.<ext>?<inputs>">`. Skallet rendrer det barnet **lokalt** (en plassholderpiksel vises til den lokale renderingen er løst); ingenting hentes noensinne fra `lolly.tools`.

Komponer et hvilket som helst verktøys rendering: et **SVG**-barn forblir en ekte vektor når forelderen eksporterer til SVG eller PDF, og rasteriseres skarpt for PNG; **PNG/JPG/WEBP**-barn bygges inn som bilder. Krever funksjonen `compose`. Komponerte barn er mellomprodukter — aldri vannmerket eller opprinnelsesstemplet — og komposisjon degraderer elegant: et skall som ikke kan rendre et barn, utelater bare plassen, og forelderen rendres likevel.

---

## Hva vi bevisst valgte å ikke gjøre

- **Ingen EJS / ingen vilkårlig JS i maler.** XSS-overflaten er null. Logikk lever i `hooks.js`.
- **Ingen ressurs-CMS.** Ressurskatalogen er git. Oppdateringer går via PR-gjennomgang. Ingen opplastingsgrensesnitt, ingen autentisering, ingen modereringskø. Git-gjennomgangen _er_ moderasjonen.
- **Ingen RBAC i MVP-en.** Offentlig tilgang. Merkevarerisiko håndteres gjennom modenhetstagger + vannmerker + det strukturelle faktumet at alle ressurser brukere ser, har gått gjennom PR-gjennomgang.
- **Ingen sentral database.** All brukertilstand er per enhet. SUSE ID-integrasjon er på veikartet, men er ikke en lanseringsblokkerer.
- **Ingen delt kodevei for verktøy/motor.** Motoren er åpen kildekode; `tools/` og `assets/` forblir proprietært SUSE-innhold i sine egne repositorier. Separasjonen håndheves (ingen kryssimporter), slik at delingen forblir ren.

---

## Livssyklus, fra start til slutt

En bruker åpner `lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H`:

1. **Oppstart.** Nettskallet åpner IndexedDB, konstruerer kapabilitetsbroen, synkroniserer verktøy- og ressurskatalogene (eller laster fra cache når offline).
2. **Ruting.** URL-hash → `tool`-visning, med `qr-code` og URL-parametre hentet ut.
3. **Innlasting.** `loadTool('qr-code', fetchFile)` henter `tool.json`, validerer mot JSON Schema, henter `template.html`, `styles.css`, og kildekoden til `hooks.js`.
4. **Tolke URL-tilstand.** `parseUrlState` oversetter URL-parametre til innledende inndataverdier. Ressursreferanser (`?logo=suse/logo/primary`) tolkes som lettvekts `{ id, _unresolved: true }`-objekter.
5. **Runtime.** `createRuntime(tool, host, initialValues)` bygger inndatamodellen (slår sammen profildata, standardverdier og innledende verdier), løser opp ressursreferanser via `host.assets.get()`, laster hooks (`host` i closure-scope, ikke sandkassebasert), kaller `hooks.onInit`.
6. **Rendering.** Skallet abonnerer på runtimen; ved hver tilstandsendring mottar det `{ model, hydrated }`. Det rendrer inndatakontroller fra modellen og skriver den hydrerte mal-HTML-en inn i `#tool-canvas`.
7. **Interaksjon.** Brukeren skriver i en inndata → `runtime.setInput(id, value)` → begrensninger påføres → `hooks.onInput` kalles → rehydrerer → rendrer på nytt. Canvaset oppdateres direkte.
8. **Eksport.** Brukeren klikker Last ned (PNG) → `runtime.export(canvasNode, 'png')` → `host.export.render` (rasteriserer via dom-to-image-more; SVG/PDF går via dedikerte DOM-gjennomgående vektoriserere) → blob → `host.export.download`. Formatspennet et verktøy kan velge inn i er bredt: `svg`, `png`, `jpg`/`jpeg`, `webp`, `avif`, `pdf`, vektorformatene `emf`, `eps`, pluss trykk-/CMYK-formatene `pdf-cmyk`, `cmyk-tiff`, `eps-cmyk`; videoformatene `webm`, `mp4`, `gif`; og data-/tekstformatene `html`, `md`, `txt`, `json`, `csv`, `ics`, `vcf`, `ico`, `zip`. (Verktøy som setter `render.export: false` — f.eks. Color Palette, Countdown Timer, Strip Hidden Data, Text Helper, Compress PDF — skjuler kontrollene for nedlasting/format/dimensjon.) Fysiske enheter konverteres per format her (PDF → ekte sidepunkter, raster → piksler ved DPI med en `pHYs`-chunk). Forfatterskap-/opprinnelsesmetadata (forfatter, verktøy, kilde — bygget av `engine/src/metadata.ts`) bygges inn per format: PNG iTXt, JPEG EXIF, PDF info-dict, SVG `<metadata>`, GIF-kommentar. Eksperimentelle verktøy får et vannmerke satt inn av verten, ikke av verktøyet.

Samme livssyklus i Tauri. Samme livssyklus i CLI — jsdom gir den hodeløse DOM-en; resultatet går til en fil eller stdout.

---

## Status for åpen kildekode

Katalogene `engine/`, `shells/`, `schemas/` og `docs/` er åpen kildekode under **MPL-2.0** — en leverandørnøytral stillasplattform for merkevareverktøy, der hver leverbare enhet er delt opp i sitt eget repository under [github.com/lolly-tools](https://github.com/lolly-tools). `tools/` og `catalog/assets/` er SUSE-spesifikt innhold og forblir **proprietært for SUSE** (alle rettigheter forbeholdt — se hvert repositorys `NOTICE.md`); de dekkes ikke av MPL.

Delingen håndheves — det finnes ingen kryssimporter fra `engine/` til `tools/` eller `assets/` — slik at grensen mellom plattform og innhold forblir ren.

---

## Veikart

| Milepæl | Tidsramme | Hva |
|---|---|---|
| **Innledende verktøy** | ✅ Ferdig | QR Code, Quote Card, Email Signature, Day Brief, Code Canvas, Countdown Timer, Color Palette, Brand Lockup, Bag Video, Chart Creator, Filter: Duotone, Meeting Planner — nettskallet live |
| **Forbedre eksisterende verktøy** | Midt i 2026 ✅ Ferdig  | Nedlastbar offline-app (Tauri); flere verktøy for ansatte og arrangementer; rikere eksportpipeline (stabilitet for tekst-til-bane, metadata, ekstra formater — se `plans.md`) |
| **Åpne kildekoden for motoren** | Slutten av 2026 ✅ Ferdig  | Engine, shells, schemas, docs blir offentlige — ikke de merkevaremerkede verktøyene/ressursene |
| **Overføring mellom enheter** | ✅ Ferdig | Portabel `lolly-backup`-pakke bærer profil, lagrede økter, opplastede bilder og innstillinger mellom to hvilke som helst installasjoner — offline eller online, ingen konto. Fremoverkompatibel, integritetssjekket konvolutt (spesifikasjon: `docs/data-transfer.md`) |
| **Etablere formelt verktøy-veikart** | Slutten av 2026 | Kundereferansepakker, AI-designinntak, GET/URL-forespørselsmodus |
| **Personvernverktøy på enheten** | 🚧 Pågår | Innholdstransformerende verktøy som behandler *din egen* fil lokalt (fil inn → ren fil ut), som erstatter eksfiltrering til enkeltformåls-SaaS. **Ferdig:** inndatatypen `file` + transformasjonsveien `exportFile` + konvensjonene `privacy:"on-device"` (ingen vannmerke/opprinnelse) + **Strip Hidden Data** (JPEG/PNG/SVG/PDF-metadata, PDF via `host.pdf`-broen) og **Text Helper** (verkstedet på enheten for hverdagslige lim-inn-på-en-nettside-oppgaver — JSON-formatering, JWT-dekoding, Base64, URL-koding/-dekoding, SHA-hashing, pluss en Novelty-gruppe). **Neste:** beskjæring/endre størrelse, bildekonvertering/-komprimering; deretter en `host.image`-kodek-bro (spesifikasjon: `plans/exfiltration-app-content.md`) |
| **Designtokener (DTCG)** | 🚧 Farge levert | Merkevareprimitiver som kanoniske [W3C Design Tokens (DTCG)](https://www.designtokens.org/TR/drafts/format/) — formatet [Penpot importerer/eksporterer](https://help.penpot.app/user-guide/design-systems/design-tokens/). **Ferdig:** fargetokener (`suse/tokens/brand`), `host.tokens`-bro, velger-fargeprøver + referanselenkede verdier (spesifikasjon: `docs/design-tokens.md`). **Neste:** dimensjons-/typetokener, Penpot-import/-eksport, brukertokener i overføringspakken (`tokens.json`) |
| **MCP-agentendepunkt (render)** | ✅ Ferdig | En [MCP](https://modelcontextprotocol.io)-server eksponerer katalogen + renderingsveien som kallbare verktøy (`lolly_list_tools` / `describe_tool` / `build_url` / `render` / `transform`), slik at en hvilken som helst agent kan produsere ferdige, regelbundne ressurser — legg den til i en hvilken som helst MCP-klient som en tilpasset connector (OAuth 2.1), eller pek en CLI-/HTTP-klient mot den med et bearer-token. Live på `mcp.lolly.tools` (fullt endepunkt: raster/PDF/animasjon/video via en hostet hodeløs nettleser) og `lolly.tools/api/mcp` (serverløst, nettleserfritt nivå). Atskilt fra Penpot-*forfatter*-MCP-en nedenfor, som handler om **oppretting** av verktøy (spesifikasjon: `plans/mcp-server.md`; guide: `docs/mcp.md` + `docs/ai-agents.md`) |
| **Penpot-filinntak som verktøy** | 2027+ | Importer en Penpot-fil og gjør den tilgjengelig *som et Lolly-verktøy* (deklarativt, begrensningsstyrt), og gjør design laget i Penpot om til deterministiske generatorer |
| **MCP + Penpot-utvidelse (kun nettbasert forfatterskap)** | 2027+ | En Penpot MCP-server formulerer nye verktøy med AI — den mest visuelle måten å lage deterministiske maler på: en merkevareinformert første runde, finpusset med et menneske i sløyfen, med sikte på å treffe nye kontekster i ett forsøk over tid. **Opprettelse** av verktøy er kun nettbasert; verktøyene den produserer kjører hvor som helst |
| **RBAC + SUSE ID** | 2027+ | Sperre spesifikke verktøy bak SUSE ID; lagret tilstand på tvers av enheter; Google Drive-inntak/-eksport |

---

## Der motoren slutter og verten begynner

Hvis du kan beskrive det i ren data + Handlebars → **motor**.
Hvis det rører DOM-en, filsystemet, nettverket, eller et hvilket som helst nettleser-/OS-API → **vert**.

Grensen er skarp med hensikt. Motoren er den åpen kildekode-delen. Alt som vet om SUSE, spesifikke plattformer, eller kjøretidsmiljøer, holdes utenfor den.
