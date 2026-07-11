# Panoramica

Questo documento raccoglie lo scopo, la struttura e le decisioni architetturali della piattaforma Lolly. Riflette sia la visione di prodotto sia lo stato attuale della codebase.

> **Stato:** Lolly è un prototipo interno in un **pilota chiuso che non si è ancora concluso**. Il motore è deterministico e internamente coerente, ma il prodotto è agli inizi — SUSE è il cliente numero uno — e i suoi motori di crittografia e di analisi dei file stanno attualmente attraversando il rigoroso irrobustimento dell'infrastruttura di SUSE, in preparazione alla scala enterprise (in questo siamo davvero bravi). Leggi l'architettura qui sotto come intento di design sotto verifica, non come un prodotto finito e certificato. Vedi [Adozione e governance](/info/adoption-governance.html#status) per sapere come viene condotto e misurato il pilota.

---

## Perché esiste

Le squadre affrontano un problema ricorrente: lavoro creativo e di contenuto ripetibile, troppo prevedibile per giustificare mani esperte ogni volta, ma troppo sensibile alla qualità per essere delegato senza barriere di sicurezza. Il risultato è, a seconda dei casi, un flusso lento (collo di bottiglia dello specialista), incoerenza (ognuno usa lo strumento che ha a disposizione), oppure dipendenza da un fornitore (un DAM SaaS che controlla i tuoi template).

Questa piattaforma è la risposta strutturale:

> **Creatività e contenuti programmatici su larga scala** — generazione di asset a costo di manodopera zero, con le regole sotto controllo centralizzato, per dipendenti, fornitori e partner.

Il risultato è l'**abbondanza**: ogni evento ha la segnaletica corretta, ogni allerta CVE rispetta lo stile aziendale, ogni etichetta si stampa pulita, ogni firma email è aggiornata — tutto senza un ticket di design. La piattaforma gestisce la creatività operazionalizzata e ricorrente. Deliberatamente non è uno strumento creativo su misura — i designer restano proprietari del lavoro di punta.

### Dove si colloca nel panorama

| Funzionalità | Canva | Portali di marca | Illustrator | Figma / Penpot | **Lolly** |
|---|---|---|---|---|---|
| Generazione di contenuti in massa | parziale | ✗ | ✗ | ✗ | **✓** |
| Funziona completamente offline | ✗ | ✗ | ✓ | parziale | **✓** |
| Logica dei template e vincoli rigidi | ✗ | parziale | ✗ | parziale | **✓** |
| Nessuna competenza di design richiesta | parziale | ✓ | ✗ | ✗ | **✓** |
| Content Credentials automatiche | ✗ | ✗ | parziale | ✗ | **✓** |
| Gli strumenti compongono altri strumenti | ✗ | ✗ | ✗ | ✗ | **✓** |
| Motore aperto, non vincolato a un SaaS | ✗ | ✗ | ✗ | parziale | **✓** |
| C2PA content credentials | ✗ | ✗ | ✗ | ✗ | **✓** |
| Provenienza forense opzionale | ✗ | ✗ | ✗ | ✗ | **✓** |
| App mobili e desktop | ✓ | ✗ | ✗ | parziale | **✓** |
| Riga di comando e TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

La lacuna è chiara: niente nel panorama esistente ci offre un output basato su vincoli, capace di funzionare offline, con basse competenze richieste e accessibile internamente. Lolly include perfino un canvas aperto — **Layout Studio** — dove colori, tipografia e asset si conformano alle variabili globali di marca, così che la disposizione libera resti basata su vincoli. Ciò che **non** è: una suite di design senza vincoli. I designer continuano a usare Illustrator e Figma per il lavoro di punta su misura. Le permutazioni possono essere assemblate con questo strumento.

**Usalo per:** generazione rapida di asset creativi operazionalizzati — tessere per eventi, badge nominativi, firme, allerte CVE, codici QR, card social, etichette di spedizione, report strutturati.

**Non usarlo per:** contenuti hero su misura.

---

## Il quadro d'insieme

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

### Struttura del repository

```
lolly/
├── engine/           # Nucleo indipendente dalla piattaforma. Open source (MPL-2.0).
│   └── src/
│       ├── index.ts          # superficie pubblica — loader, runtime, template, inputs, url-mode
│       ├── loader.ts         # recupera e valida i file dello strumento
│       ├── runtime.ts        # orchestra il ciclo di vita in 5 fasi
│       ├── template.ts       # idratazione Handlebars + annotateTemplate
│       ├── inputs.ts         # manifest → modello di input a runtime
│       ├── url-mode.ts       # andata e ritorno URL ↔ stato degli input
│       ├── validate.ts       # validazione JSON Schema dei manifest
│       ├── compose.ts        # risolve i render annidati di strumenti (composes)
│       ├── embed.ts          # analizza gli URL di embed portabili di lolly.tools
│       └── bridge/
│           └── host-v1.ts    # interfaccia TypeScript — il contratto del ponte
│
├── shells/
│   ├── web/          # PWA — ospitata online; distribuzione principale
│   │   └── src/
│   │       ├── main.ts           # avvio, routing
│   │       ├── theme.ts          # applicazione/persistenza del tema (prevenzione FOUC)
│   │       ├── bridge/           # implementazioni web delle API HostV1
│   │       │   ├── index.ts      # compone tutti i pezzi del ponte
│   │       │   ├── db.ts         # configurazione di IndexedDB
│   │       │   ├── state.ts      # host.state — modifiche salvate
│   │       │   ├── profile.ts    # host.profile — dati utente
│   │       │   ├── assets.ts     # host.assets — catalogo + upload utente
│   │       │   ├── clipboard.ts  # host.clipboard
│   │       │   ├── export.ts     # host.export — rasterizza/serializza
│   │       │   ├── net.ts        # host.net — fetch con lista consentita
│   │       │   └── media.ts      # host.media — fotogrammi camera dal vivo (onFrame)
│   │       ├── catalog/
│   │       │   └── sync.ts       # sincronizzazione del catalogo all'avvio + cache offline
│   │       ├── styles/           # CSS dell'intera app (app.css, picker.css, tokens.css)
│   │       └── views/
│   │           ├── gallery.ts    # elenco della libreria di strumenti + card di stato salvato
│   │           ├── tool.ts       # monta uno strumento (input + canvas + azioni)
│   │           ├── picker.ts     # interfaccia del selettore asset (invocata da host.assets)
│   │           ├── profile.ts    # editor dei dati utente
│   │           ├── projects.ts   # /p — cartelle di sessioni salvate (annidate; export di cartella/selezione)
│   │           └── free-canvas.ts # overlay dell'editor a canvas libero per gli strumenti render.layout:"editor"
│   │
│   ├── cli/          # CLI Node.js — stesso motore, jsdom headless
│   │   ├── bin/lolly.ts
│   │   └── src/
│   │       ├── run.ts    # loadTool → createRuntime → export → scrive il file
│   │       └── bridge.ts # implementazione CLI di HostV1
│   │
│   ├── tui/          # Shell di terminale interattiva (Ink) — riusa il ponte della CLI
│   │   └── src/
│   │       ├── main.tsx  # app a schermo intero: Gallery / Projects / Profile / ToolView
│   │       └── bridge.ts # ponte della CLI + stato su disco sotto ~/.lolly
│   │
│   ├── tauri-desktop/ # app desktop scaricabile
│   └── tauri-mobile/  # app iOS/Android
│
├── tools/            # VISTA di profilo (gitignored) — dati, non codice. Unita a partire dai pack:
│                     #   community/ (pubblico, agnostico rispetto al brand, MPL) + brands/<active>/tools (di proprietà del brand).
│   ├── qr-code/
│   ├── quotes/
│   ├── email-signature/
│   ├── daily-card/        # "Day Brief" — meteo/ora/mappa (recuperati da uno script inline del template)
│   ├── code-canvas/
│   ├── countdown-timer/
│   ├── color-palette/
│   ├── color-block/           # blocchi tipizzati/eterogenei (discriminatore addMenu)
│   ├── dynamic-layout/
│   ├── tool-logo/         # "Logo" — logo di marca a commutazione automatica
│   ├── street-map/        # mappe vettoriali offline di isolati urbani
│   ├── url-shot/          # "URL Screenshot" (capacità capture)
│   ├── strip-data/        # rimozione metadati sul dispositivo — JPEG/PNG/SVG/PDF (file in ingresso → file pulito in uscita)
│   ├── compress-pdf/      # compressore PDF sul dispositivo — ricomprime le immagini (file in ingresso → file più piccolo in uscita)
│   ├── brand-lockup/      # "Brand Lockup" — lockup del logo SUSE; testo-a-tracciato HarfBuzz (wasm)
│   ├── bag-video/
│   ├── chart-creator/     # grafici SVG da dati strutturati
│   ├── filter-duotone/    # trattamento fotografico a due colori
│   ├── filter-halftone/   # foto → griglia vettoriale di punti in retinatura
│   ├── filter-scanline/   # foto → griglia scanline retrò posterizzata (SVG / raster trasparente)
│   ├── meeting-planner/   # pianificatore di riunioni multi-fuso orario
│   ├── calendar-ics/      # evento → file calendario .ics più una card
│   ├── digi-ad/           # "Animated Ad" — banner in loop a partire da scene
│   ├── event-name-badge/  # badge per conferenze — compone qr-code come SVG
│   ├── wayfinding-signage/ # segnaletica per eventi; i blocchi di direzione adattano automaticamente il testo dell'etichetta
│   ├── text-helper/       # banco di lavoro testuale sul dispositivo (formatta/decodifica/hash/de-identifica)
│   ├── layout-studio/     # "Layout Studio" — canvas editor WYSIWYG a forma libera (render.layout: editor)
│   ├── multi-page-pdf/    # documento PDF multipagina — copertina, blocchi di contenuto fluido, retro
│   ├── diagram-builder/   # diagrammi org / layercake / process / cycle / pyramid
│   ├── logo-wall/         # molti loghi → griglia con impacchettamento automatico
│   ├── logo-lockup-partner/ # lockup co-brand SUSE + partner
│   ├── web-icon/          # favicon .ico / png / svg da testo + colori
│   ├── filter-posterize/  # foto → separazioni vettoriali posterizzate piatte
│   ├── filter-pixel-stretch/ # foto → effetto di trascinamento pixel
│   ├── lottie-digi-ad/    # banner pubblicitari animati Lottie
│   └── pose-geeko/        # posa la mascotte SUSE Geeko — immagini fisse pronte per la stampa
│
├── catalog/
│   ├── tools/index.json        # registro degli strumenti
│   └── assets/
│       ├── index.json          # registro degli asset
│       └── suse/...            # logo, palette, ecc.
│
├── schemas/          # JSON Schema per tool.json, voci asset, AssetRef
├── scripts/          # build-catalog-index.ts, checksum-assets.ts, validate-catalog.ts
├── tests/            # test del motore
└── docs/             # questo file + guide di creazione + posizionamento
```

---

## Modello di distribuzione della piattaforma

La piattaforma gira su diverse superfici — PWA web, Tauri desktop/mobile, la CLI scriptabile e la TUI interattiva. Tutte usano lo stesso motore e gli stessi file di strumento.

### Web (PWA) — distribuzione principale
Ospitata a un URL controllato da SUSE. Funziona offline non appena il service worker ha messo in cache strumenti e asset. È qui che la maggior parte di dipendenti, fornitori e partner userà la piattaforma. Non serve un account — lo stato è memorizzato in IndexedDB per dispositivo.

La shell web è responsive a partire da un unico layout. Su desktop, uno strumento è una barra laterale di controlli ridimensionabile accanto a un'area di anteprima con navigazione del canvas nativa da trackpad (rotella con Cmd/Ctrl o pizzico per zoomare intorno al cursore, trascinamento con Spazio o clic centrale per spostarsi, i tasti `0`/`1`/`+`/`−`, e un HUD Adatta/%). Su mobile (≤640px) i controlli diventano un foglio ancorato in alto con una maniglia di trascinamento che si aggancia a intravisto/metà/pieno (il tocco alterna tra gli stati) sopra un'anteprima statica a schermo intero, e un pulsante flottante **Rendering** apre i controlli di **Esportazione** in un popup a foglio dal basso. Il tocco offre pizzico per lo zoom e trascinamento per lo spostamento sull'anteprima. Il percorso di rendering e i controlli di export sono identici in entrambi i casi — cambia solo la disposizione dell'interfaccia.

**Modalità batch (`/pro`).** La shell web include anche una griglia batch in stile foglio di calcolo (`shells/web/src/pro/`) che renderizza molte righe alla volta su uno o più strumenti. Gestisce l'andata e ritorno CSV/TSV più l'incolla da foglio di calcolo, template/formato/dimensione/unità/dpi per riga, un pannello laterale editor di blocchi con anteprima dal vivo, colonne di export comprimibili, una barra di tag di "rilevanza" per riga, il riordino delle righe tramite maniglia di trascinamento a sinistra, la conferma di eliminazione in due passaggi, sessioni batch salvate, e un download in `.zip`. Questa è la superficie uno-a-molti dietro il posizionamento "generazione di contenuti in massa".

### Tauri desktop / mobile
App nativa impacchettata (footprint ridotto grazie a Tauri). Offre piena disponibilità offline, accesso al filesystem per gli strumenti che dipendono dalla CLI (PDF Smasher, Font Outliner), e accesso alla fotocamera. Programmata per un potenziamento degli strumenti a metà 2026.

### CLI
`lolly <tool-id> [--input=value ...] --output=file.png`

Gli utenti desktop possono invocare molti strumenti dal terminale. La shell CLI carica lo stesso motore, crea un DOM jsdom, esegue lo stesso percorso di rendering, e scrive il file. La modalità URL è il trasporto — la CLI non è un'implementazione separata. Questo garantisce che gli output di CLI e GUI siano identici.

```bash
lolly qr-code --url=https://suse.com --output=qr.svg
lolly quotes --quote="Ship it." --output=quote.png
lolly                        # elenca gli strumenti disponibili
lolly qr-code                # elenca gli input di quello strumento
```

### TUI
`npm run tui`

La controparte interattiva della CLI: un'app da terminale a schermo intero, pensata prima di tutto per la tastiera (costruita su Ink) per sfogliare gli strumenti, compilare gli input, salvare i progetti ed esportare — tutto senza GUI. Il suo ponte lato host **riusa l'implementazione della CLI** per i formati senza DOM (SVG/EMF/EPS/HTML + testo/dati), e aggiunge stato su disco sotto `~/.lolly` più un'anteprima inline opzionale. Oltre a questo, dispone di un **livello di rendering nel browser**: un Chromium headless con ambito limitato (lo stesso installato dal server MCP) che produce raster/PDF/video e cattura di URL dal vivo su richiesta — pilotando una copia compilata della shell web in modo che l'output sia identico, e avviandosi solo alla prima esportazione di un formato simile. Così anche `url-shot` (con ritaglio + ricolorazione + PDF/SVG vettoriale) e ogni strumento raster/pdf girano nel terminale. Vedi la [guida alla TUI](/info/tui.html).

---

## Categorie di strumenti

Gli strumenti sono etichettati con una `category` nel loro manifest per il raggruppamento nella galleria.

Le righe sono elencate nell'ordine delle sezioni della galleria. La sezione `utility` viene sempre renderizzata **per ultima** nella galleria (dopo ogni altra categoria, incluse quelle future) — è il cassetto "Utilità offline" sul dispositivo.

| Categoria | Strumenti pubblicati | Pianificati |
|---|---|---|
| `everyone` | QR Code Generator, Quote Card, Email Signature, Day Brief, Code Canvas, Color Block, Dynamic Layout, Logo, Web Icon Maker | Employee Image Stationery |
| `designer` | Brand Lockup, Bag Video, Chart Creator, Street Map, Animated Ad, Multi-Page PDF, Diagram Builder, Logo Lockup: Grid (NASCAR), Logo Lockup: Partner, Filter: Duotone, Filter: Halftone, Filter: Scanline, Filter: Posterize Bitmap, Filter: Pixel Stretch | Font Outliner |
| `event` | Meeting Planner, Event Name Badge, Wayfinding Signage, Calendar ICS | Event Stationery, Bulk Name Badges, Room Agenda Cards |
| `product` | — | CVE Alert, Product Release Announcement, Blog OG Image |
| `utility` | Countdown Timer, Color Palette, URL Screenshot, Strip Hidden Data, Text Helper, Compress PDF, Layout Studio | Convertitori di unità/formato, altre utilità di privacy sul dispositivo |

Gli strumenti sono anche classificati per stato: `official` (approvato dal brand, senza filigrana), `community` (contributo esterno), `experimental` (export con filigrana). Dynamic Layout, URL Screenshot, Logo Lockup: Grid (NASCAR), Filter: Posterize Bitmap e Diagram Builder portano attualmente lo stato `experimental`; Web Icon Maker e Layout Studio vengono pubblicati come strumenti `community`.

**Layout Studio** è il primo strumento costruito sulla modalità canvas libero `render.layout: "editor"` — una superficie priva di cornice, a manipolazione diretta, dove trascini, ridimensioni, ruoti e agganci riquadri di testo, forme e immagini, per poi esportare attraverso lo stesso percorso di rendering di ogni altro strumento.

**Strip Hidden Data** è la prima **utilità sul dispositivo** (`privacy: "on-device"`): uno strumento di trasformazione dei contenuti che prende un file fornito *da te*, lo elabora interamente nel browser, e ti restituisce una copia pulita — mai caricata, mai con filigrana, nessuna provenienza applicata. **Text Helper** è la seconda — un banco di lavoro sul dispositivo per le attività quotidiane di incolla-in-un-sito-web (formattazione JSON, decodifica JWT, Base64, codifica/decodifica URL, hashing SHA). **Compress PDF** è la terza — riduce un PDF ricomprimendo le sue immagini, anche in questo caso interamente sul dispositivo. Tutte e tre portano il testo del badge "Funziona sul tuo dispositivo — niente viene caricato". Questo è l'inizio di una categoria di utilità per la privacy che sostituisce la consegna di file riservati a siti web a scopo unico.

> Nota: `category` e `status` vengono denormalizzati in `catalog/tools/index.json` (il registro letto dalla galleria) a partire da ogni `tool.json`. Il manifest è la fonte di verità — l'indice viene **generato** da `npm run build:catalog`, e `npm run validate:catalog` fa fallire la CI se l'indice committato diverge dai manifest.

---

## Impegni architetturali

Queste decisioni sono consolidate. Cambiarne anche solo una è un'impresa importante — modellano ogni altra decisione nella codebase.

### 1. Strumenti dichiarativi, con una via di fuga imperativa

Uno strumento è un manifest (`tool.json`) + un template (`template.html`) + `hooks.js` opzionale.

**Il manifest dichiara gli input.** Non il template. Gli input non vengono dedotti dai token Handlebars. Il manifest è il contratto; il template consuma variabili con nome tramite `{{id}}`.

**Gli hook sono opzionali.** La maggior parte degli strumenti è puramente dichiarativa — manifest + template bastano. Gli strumenti che necessitano di valori calcolati (codifica QR, formattazione dei dati dei grafici) forniscono un `hooks.js` che espone funzioni del ciclo di vita con nome (`onInit`, `onInput`, `onFrame` — l'hook per fotogramma della camera dal vivo per gli strumenti reattivi al movimento — `beforeRender`, `beforeExport`, `afterExport`, e `exportFile` — il percorso di trasformazione file-in/file-out usato dalle utilità sul dispositivo come Strip Hidden Data). L'host carica gli hook tramite `new Function('host', …)` con il ponte delle capacità iniettato come ambito di closure. Questo è un **contratto di portabilità, non un sandbox di sicurezza**: gli hook continuano a girare nel realm della pagina e *possono* raggiungere `window`/`fetch`/`document` in una shell browser — `host.*` è la superficie supportata e portabile, non un confine imposto. I risultati asincroni degli hook hanno un limite di tempo (onInit 5s, onInput 2s, gli altri 5s) e i risultati tardivi vengono scartati; un hook *sincrono* fuori controllo non può essere interrotto. Per questo il codice di hook di terze parti non affidabile non è sicuro da eseguire finché non sarà disponibile l'isolamento tramite Worker.

Questo è importante perché: gli strumenti dichiarativi possono essere creati da chi non è sviluppatore. Se ogni strumento fosse un'app web, la nota di rischio "competenze limitate per creare/mantenere i template di uso quotidiano" diventerebbe un collo di bottiglia permanente.

### 2. Strumenti e asset sono dati, non codice incluso

Le app web e Tauri recuperano i cataloghi di strumenti e asset da un URL noto all'avvio, li mettono in cache localmente, e operano su ciò che trovano. **Aggiungere una nuova tessera evento o un asset stagionale non richiede una nuova release dell'app.**

I byte degli asset sono sottoposti a checksum SHA-256 per prevenire l'avvelenamento della CDN. L'`id` + la `version` dell'asset determinano l'invalidazione della cache.

### 3. Il ponte delle capacità è l'unica API che gli strumenti vedono

Gli strumenti non toccano mai il DOM al di fuori della propria area di template, non chiamano mai `fetch` direttamente, non leggono mai il filesystem. Chiamano metodi `host.*` versionati. Il ponte è definito in `engine/src/bridge/host-v1.ts`:

| API del ponte | Cosa fa |
|---|---|
| `host.profile` | Nome, email, foto profilo, città, ecc. dell'utente. Pre-compila gli input tramite `bindToProfile`. |
| `host.assets` | Query al catalogo, risoluzione degli asset, interfaccia del selettore fornita dall'host. |
| `host.state` | Salva / carica gli slot di input. IndexedDB sul web, filesystem su Tauri, memoria sulla CLI. |
| `host.clipboard` | Scrive testo o immagine negli appunti (con fallback per piattaforma). |
| `host.export` | Rasterizza o serializza il target di rendering. Applica la filigrana per gli strumenti sperimentali. |
| `host.net` | Fetch con lista consentita — disponibile solo se lo strumento ha dichiarato la capacità `"network"`. (Nessuno strumento pubblicato la usa attualmente.) |

Superfici opzionali e additive compaiono solo quando una shell le fornisce. Due sono **vincolate da una capacità** — esposte solo quando lo strumento dichiara il flag corrispondente: `host.compose` (incorpora il render di un altro strumento — `compose`) e `host.capture` (cattura di pagina per URL Screenshot — `capture`). Le altre vengono **rilevate per funzionalità** — presenti ogni volta che la shell può fornirle: `host.text` (testo-a-tracciato tramite HarfBuzz WASM; la capacità `wasm` segnala gli strumenti che ne dipendono), `host.pdf` (parsing/compressione PDF, usato da Strip Hidden Data e Compress PDF), e `host.tokens` (design token DTCG). Le capacità dichiarabili sono: `network`, `filesystem`, `clipboard`, `camera`, `ffmpeg`, `wasm`, `capture`, `compose`.

Lo stesso strumento gira nel browser, in Tauri e nella CLI headless perché ogni shell implementa questa interfaccia — lo strumento non sa mai in quale si trovi.

Il ponte è versionato. Aggiungere metodi è una versione minore. Rimuovere o cambiare le firme è un salto di versione maggiore. Quando uscirà la v2, la v1 dovrà continuare a funzionare.

### 4. Gli ID degli asset sono per sempre

`suse/logo/primary` è un contratto. Una volta pubblicato:
- L'ID non cambia mai, non viene mai riutilizzato.
- Cambiamenti nei byte → incrementa `version` nel manifest.
- Sostituito da un nuovo asset → imposta `deprecated: true` ed eventualmente `replacedBy`.
- I riferimenti esistenti si risolvono sempre.

Questo rende gli stati degli strumenti salvati e i link condivisi via URL duraturi nel corso degli anni.

### 5. La modalità URL è di prima classe

Ogni input deve poter essere espresso come parametro URL:

```
lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H
```

La modalità CLI è la modalità URL sotto un trasporto diverso — la shell CLI costruisce un oggetto di stato-URL a partire da argv ed esegue la **stessa** pipeline del motore. Esiste un solo percorso di rendering. La CLI non può divergere dalla GUI perché non è un'implementazione separata.

`url-mode.ts` gestisce l'andata e ritorno (parsing e serializzazione). Parametri riservati (mai inoltrati allo strumento come input): `format`, `export`, `copy`, `slot`, `output`, `filename`, `_v`, `z` (stato compattato — il token "Link più corto"), `width`/`w`, `height`/`h`, `unit`, `dpi`, `profile`, `password`, `bleed`, `marks`, `full`, `options`, `nostage`. Gli input di tipo asset in modalità URL vengono serializzati tramite il loro `id`; il runtime li risolve via `host.assets.get()` prima dell'idratazione. `width`/`height` sono valori in `unit` (predefinito `px`, oppure `mm`/`cm`/`in`/`pt`/`pc`); con un'unità fisica, `dpi` imposta la risoluzione raster. Impostano la dimensione del documento del canvas e pre-compilano il pannello delle dimensioni di export.

### 6. Lo storage passa attraverso il ponte, mai direttamente

Shell web: IndexedDB. Tauri: filesystem. CLI: in memoria. Gli strumenti vedono solo `host.state.save(slot, data)` e `host.state.load(slot)`. `localStorage` non viene usato — è troppo piccolo e non può contenere blob.

Gli utenti possono salvare più slot di modifica con nome per strumento e tornare a ogni sessione in seguito. Non è richiesta la creazione di un account; lo stato è per dispositivo. Poiché il ponte è l'unico punto di giunzione, quello stato per dispositivo è anche *portabile*: `shells/web/src/data-transfer.ts` rilegge tutto attraverso `host.profile`/`host.state`/`host.assets` in un unico zip `lolly-backup` che si importa su qualsiasi altra installazione — la risposta offline a "passare a un nuovo dispositivo" che non richiede un server (specifica completa: `docs/data-transfer.md`). L'integrazione con SUSE ID (sincronizzazione multi-dispositivo) è un traguardo futuro costruito sopra questa base.

### 7. Le etichette di maturità rispondono strutturalmente al rischio "approvato dal brand"

Ogni strumento dichiara `status: official | community | experimental` nel proprio manifest. La galleria ordina per stato. Gli strumenti sperimentali applicano automaticamente una filigrana ai propri export — la filigrana viene applicata da `host.export.render`, non dallo strumento, quindi un autore di strumenti non ufficiale non può disattivarla.

Questa è una risposta strutturale al rischio percettivo che usare un qualsiasi strumento implichi l'approvazione del brand. Le risposte di processo (una coda di revisione, il controllo d'accesso tramite SUSE ID) si aggiungono sopra.

### 8. Gli input degli strumenti sono tipizzati tramite il manifest, asset inclusi

Gli input dichiarano un `type`: `text`, `longtext`, `number`, `boolean`, `color`, `select`, `asset`, `date`, `time`, `datetime-local`, `url`, `profile`, `blocks`, `vector`, e `file`. L'host renderizza un controllo generico per ogni tipo a partire dal manifest — gli strumenti non scrivono alcun codice di controllo. Tre pesano più degli altri:

- **`asset`** (con `filter` e `allowUpload`) è il ponte verso il sistema globale degli asset; `allowUpload: false` è la leva di applicazione del brand per casi come i loghi delle tessere di sponsorizzazione, dove sono ammessi solo asset di libreria. I caricamenti dell'utente usano la stessa forma `AssetRef` degli asset di libreria, quindi gli strumenti li gestiscono in modo identico.
- **`blocks`** è un gruppo di campi ripetibile — una mini-tabella dentro un unico input, modificata in un pannello laterale, con un menu di aggiunta tipizzato/discriminato e campi asset per blocco. Cliccare su un blocco renderizzato nel canvas mette a fuoco la riga di quel blocco. Usato da `meeting-planner`, `chart-creator`, `event-name-badge`, `wayfinding-signage`, `color-block`, e `digi-ad`.
- **`vector`** raggruppa un insieme fisso di numeri (ad es. una trasformazione) in un unico controllo composto; **`file`** conserva il file dell'utente come byte in memoria per le utilità di trasformazione sul dispositivo (ad es. `strip-data` e `compress-pdf`).

### 9. I template sono privi di logica (Handlebars, non EJS)

Handlebars è stato scelto al posto di EJS deliberatamente:
- Privo di logica. I template possono essere creati da chi non è sviluppatore.
- Sicuro per impostazione predefinita. `{{x}}` esegue l'escape dell'HTML; `{{{x}}}` è raw, da attivare esplicitamente.
- Niente JS arbitrario nei template significa nessuna superficie di audit XSS per template.

La logica vive in `hooks.js`, dove è esplicita e revisionabile. Helper Handlebars disponibili: `{{default}}`, `{{upper}}`, `{{lower}}`, `{{eq}}`, `{{markdown}}`, `{{asset ref}}`, `{{asset ref "property"}}` (più gli helper di formattazione dati `icsStamp`/`rfcText`/`csvCell`, usati dai template affini `.ics`/`.vcf`/`.csv`).

### 10. Gli strumenti compongono strumenti

Uno strumento può incorporare il render di **un altro** strumento senza alcun import da strumento a strumento — la composizione viene risolta dal motore, mai dal codice dello strumento. Ci sono due superfici:

- **Manifest dichiarativo** — `composes: [{ id, tool, inputs, format?, width?, height? }]`. Il motore renderizza il figlio nominato e colloca il risultato nel template privo di logica come `{{asset <id>}}`. Oggi `event-name-badge` compone `qr-code` come SVG.
- **URL di embed portabile** — `<img src="https://lolly.tools/tool/<id>.<ext>?<inputs>">`. La shell renderizza quel figlio **localmente** (viene mostrato un pixel segnaposto finché il render locale non si risolve); non viene mai recuperato nulla da `lolly.tools`.

Puoi comporre il render di qualsiasi strumento: un figlio **SVG** resta un vero vettore quando il genitore esporta in SVG o PDF, e si rasterizza con nitidezza per PNG; i figli **PNG/JPG/WEBP** vengono incorporati come immagini. Richiede la capacità `compose`. I figli composti sono intermedi — mai con filigrana né con provenienza applicata — e la composizione degrada in modo elegante: una shell che non può renderizzare un figlio si limita a omettere lo slot e il genitore continua comunque a renderizzare.

---

## Cosa abbiamo scelto esplicitamente di non fare

- **Niente EJS / niente JS arbitrario nei template.** La superficie XSS è zero. La logica vive in `hooks.js`.
- **Nessun CMS per gli asset.** Il catalogo degli asset è git. Gli aggiornamenti passano attraverso la revisione delle PR. Nessuna UI di caricamento, nessuna autenticazione, nessuna coda di moderazione. La revisione git _è_ la moderazione.
- **Nessun RBAC nell'MVP.** Accesso pubblico. Il rischio di brand è gestito da etichette di maturità + filigrane + il fatto strutturale che tutti gli asset visti dagli utenti sono passati attraverso una revisione di PR.
- **Nessun database centrale.** Tutto lo stato utente è per dispositivo. L'integrazione con SUSE ID è nella roadmap ma non è un blocco per il lancio.
- **Nessun percorso di codice condiviso tra strumenti e motore.** Il motore è open source; `tools/` e `assets/` restano contenuto proprietario di SUSE nei propri repository. La separazione è imposta (nessun import incrociato), così la divisione resta pulita.

---

## Ciclo di vita, dall'inizio alla fine

Un utente apre `lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H`:

1. **Avvio.** La shell web apre IndexedDB, costruisce il ponte delle capacità, sincronizza i cataloghi di strumenti e asset (o carica dalla cache quando è offline).
2. **Routing.** Hash dell'URL → vista `tool`, con `qr-code` e i parametri URL estratti.
3. **Caricamento.** `loadTool('qr-code', fetchFile)` recupera `tool.json`, lo valida rispetto al JSON Schema, recupera `template.html`, `styles.css`, e il sorgente di `hooks.js`.
4. **Parsing dello stato URL.** `parseUrlState` traduce i parametri URL in valori di input iniziali. I riferimenti agli asset (`?logo=suse/logo/primary`) vengono analizzati come oggetti leggeri `{ id, _unresolved: true }`.
5. **Runtime.** `createRuntime(tool, host, initialValues)` costruisce il modello di input (unendo dati di profilo, valori predefiniti e valori iniziali), risolve i riferimenti agli asset tramite `host.assets.get()`, carica gli hook (`host` con ambito di closure, senza sandbox), chiama `hooks.onInit`.
6. **Rendering.** La shell si sottoscrive al runtime; a ogni cambiamento di stato riceve `{ model, hydrated }`. Renderizza i controlli di input a partire dal modello e scrive l'HTML del template idratato in `#tool-canvas`.
7. **Interazione.** L'utente digita in un input → `runtime.setInput(id, value)` → vengono applicati i vincoli → viene chiamato `hooks.onInput` → nuova idratazione → nuovo render. Il canvas si aggiorna dal vivo.
8. **Esportazione.** L'utente fa clic su Scarica (PNG) → `runtime.export(canvasNode, 'png')` → `host.export.render` (rasterizza tramite dom-to-image-more; SVG/PDF passano attraverso vettorizzatori dedicati che attraversano il DOM) → blob → `host.export.download`. La gamma di formati a cui uno strumento può aderire è ampia: `svg`, `png`, `jpg`/`jpeg`, `webp`, `avif`, `pdf`, i formati vettoriali `emf`, `eps`, più i formati stampa/CMYK `pdf-cmyk`, `cmyk-tiff`, `eps-cmyk`; i formati video `webm`, `mp4`, `gif`; e i formati dati/testo `html`, `md`, `txt`, `json`, `csv`, `ics`, `vcf`, `ico`, `zip`. (Gli strumenti che impostano `render.export: false` — ad es. Color Palette, Countdown Timer, Strip Hidden Data, Text Helper, Compress PDF — nascondono i controlli di download/formato/dimensione.) Le unità fisiche vengono convertite per formato in questa fase (PDF → punti di pagina reali, raster → pixel al DPI con un chunk `pHYs`). I metadati di autorialità/provenienza (autore, strumento, fonte — costruiti da `engine/src/metadata.ts`) vengono incorporati per formato: iTXt per PNG, EXIF per JPEG, dizionario info per PDF, `<metadata>` per SVG, commento per GIF. Gli strumenti sperimentali ricevono una filigrana inserita dall'host, non dallo strumento.

Stesso ciclo di vita in Tauri. Stesso ciclo di vita nella CLI — jsdom fornisce il DOM headless; l'output va su un file o su stdout.

---

## Stato open source

Le directory `engine/`, `shells/`, `schemas/`, e `docs/` sono open source sotto **MPL-2.0** — una piattaforma di scaffolding neutrale rispetto al fornitore per il tooling di brand, con ogni unità distribuibile suddivisa nel proprio repository sotto [github.com/lolly-tools](https://github.com/lolly-tools). `tools/` e `catalog/assets/` sono contenuto specifico di SUSE e restano **proprietà esclusiva di SUSE** (tutti i diritti riservati — vedi il `NOTICE.md` di ciascun repository); non sono coperti dalla MPL.

La separazione è imposta — non ci sono import incrociati da `engine/` verso `tools/` o `assets/` — così il confine tra piattaforma e contenuto resta pulito.

---

## Roadmap

| Traguardo | Scadenza | Cosa |
|---|---|---|
| **Strumenti iniziali** | ✅ Fatto | QR Code, Quote Card, Email Signature, Day Brief, Code Canvas, Countdown Timer, Color Palette, Brand Lockup, Bag Video, Chart Creator, Filter: Duotone, Meeting Planner — shell web in produzione |
| **Potenziare gli strumenti attuali** | Metà 2026 ✅ Fatto  | App offline scaricabile (Tauri); strumenti aggiuntivi per dipendenti ed eventi; pipeline di export più ricca (stabilità del testo-a-tracciato, metadati, formati aggiuntivi — vedi `plans.md`) |
| **Rendere open source il motore** | Fine 2026 ✅ Fatto  | Motore, shell, schemi, documentazione diventano pubblici — non gli strumenti/asset di marca |
| **Trasferimento da dispositivo a dispositivo** | ✅ Fatto | Il bundle portabile `lolly-backup` trasporta profilo, sessioni salvate, immagini caricate e preferenze tra due installazioni qualsiasi — offline o online, senza account. Busta retrocompatibile e verificata per integrità (specifica: `docs/data-transfer.md`) |
| **Definire una roadmap formale degli strumenti** | Fine 2026 | Kit di riferimento per i clienti, ingestione di design con IA, modalità di richiesta GET/URL |
| **Utilità di privacy sul dispositivo** | 🚧 In corso | Strumenti di trasformazione dei contenuti che elaborano *il tuo* file localmente (file in ingresso → file pulito in uscita), sostituendo l'esfiltrazione verso SaaS a scopo unico. **Fatto:** tipo di input `file` + percorso di trasformazione `exportFile` + convenzioni `privacy:"on-device"` (nessuna filigrana/provenienza) + **Strip Hidden Data** (metadati JPEG/PNG/SVG/PDF, PDF tramite il ponte `host.pdf`) e **Text Helper** (il banco di lavoro sul dispositivo per le attività quotidiane di incolla-in-un-sito-web — formattazione JSON, decodifica JWT, Base64, codifica/decodifica URL, hashing SHA, più un gruppo Novità). **Prossimo:** ritaglio/ridimensionamento, conversione/compressione immagini; poi un ponte di codec `host.image` (specifica: `plans/exfiltration-app-content.md`) |
| **Design token (DTCG)** | 🚧 Colore pubblicato | Le primitive di brand come [W3C Design Tokens (DTCG)](https://www.designtokens.org/TR/drafts/format/) canonici — il formato che [Penpot importa/esporta](https://help.penpot.app/user-guide/design-systems/design-tokens/). **Fatto:** design token di colore (`suse/tokens/brand`), ponte `host.tokens`, campioni nel selettore + valori collegati per riferimento (specifica: `docs/design-tokens.md`). **Prossimo:** token di dimensione/tipografia, import/export Penpot, token utente nel bundle di trasferimento (`tokens.json`) |
| **Endpoint agente MCP (render)** | ✅ Fatto | Un server [MCP](https://modelcontextprotocol.io) espone il catalogo + il percorso di rendering come strumenti invocabili (`lolly_list_tools` / `describe_tool` / `build_url` / `render` / `transform`) così che qualsiasi agente possa produrre asset finiti e vincolati alle regole — aggiungilo a qualsiasi client MCP come connettore personalizzato (OAuth 2.1) oppure punta un client CLI/HTTP con un bearer token. Attivo su `mcp.lolly.tools` (endpoint completo: raster/PDF/animazione/video tramite un browser headless ospitato) e `lolly.tools/api/mcp` (livello serverless senza browser). Distinto dall'MCP di *authoring* di Penpot qui sotto, che riguarda la **creazione** di strumenti (specifica: `plans/mcp-server.md`; guida: `docs/mcp.md` + `docs/ai-agents.md`) |
| **Ingestione di file Penpot come strumenti** | 2027+ | Importa un file Penpot ed esponilo *come uno strumento Lolly* (dichiarativo, basato su vincoli), trasformando i design creati in Penpot in generatori deterministici |
| **Estensione MCP + Penpot (authoring solo online)** | 2027+ | Un server MCP di Penpot articola nuovi strumenti con l'IA — il modo più visivo per creare template deterministici: un primo giro informato dal brand, perfezionato con un umano nel ciclo, puntando nel tempo a nuovi contesti one-shot. La *creazione* di strumenti è solo online; gli strumenti che produce girano ovunque |
| **RBAC + SUSE ID** | 2027+ | Restringere l'accesso a strumenti specifici tramite SUSE ID; stato salvato multi-dispositivo; ingestione/export Google Drive |

---

## Dove finisce il motore e comincia l'host

Se puoi descriverlo in dati puri + Handlebars → **motore**.
Se tocca il DOM, il filesystem, la rete, o una qualsiasi API di browser/SO → **host**.

Il confine è netto di proposito. Il motore è la parte open source. Tutto ciò che conosce SUSE, piattaforme specifiche, o ambienti di esecuzione ne resta fuori.
