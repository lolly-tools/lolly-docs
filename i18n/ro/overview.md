# Prezentare generală

Acest document descrie scopul, structura și deciziile arhitecturale ale platformei Lolly. Reflectă atât viziunea de produs, cât și starea actuală a codebase-ului.

> **Status:** Lolly este un prototip intern aflat într-un **pilot închis, încă neterminat**. Motorul este determinist și consistent intern, dar produsul este într-un stadiu incipient - SUSE este clientul numărul unu - iar motoarele sale de criptografie și parsare de fișiere trec în prezent prin hardening-ul strict de infrastructură al SUSE, în pregătirea pentru scară enterprise (ne pricepem foarte bine la asta). Citește arhitectura de mai jos ca intenție de design aflată în testare, nu ca produs finit și certificat. Vezi [Adopție și guvernanță](/info/adoption-governance.html#status) pentru modul în care este derulat și măsurat pilotul.

---

## De ce există asta

Echipele se confruntă cu o problemă recurentă: munca de creație și conținut repetitivă este prea previzibilă pentru a justifica implicarea unor mâini specializate de fiecare dată, dar prea sensibilă la calitate pentru a fi delegată fără plase de siguranță. Rezultatul este fie un flux lent (blocaj la specialist), fie inconsistență (fiecare folosește orice instrument are la îndemână), fie dependență de furnizor (un DAM SaaS care îți controlează șabloanele).

Această platformă este răspunsul structural:

> **Creație și conținut programatice, la scară** - generare de resurse fără muncă manuală, cu regulile sub control central, pentru angajați, furnizori și parteneri.

Rezultatul este **abundența**: fiecare eveniment are semnalistica corectă, fiecare alertă CVE respectă stilul casei, fiecare etichetă se tipărește curat, fiecare semnătură de email este la zi - toate fără un tichet de design. Platforma se ocupă de creația operaționalizată, recurentă. În mod deliberat, nu este un instrument de creație personalizată - designerii rămân responsabili de lucrările emblematice.

### Unde se încadrează în peisaj

| Capacitate | Canva | Portaluri de brand | Illustrator | Figma / Penpot | **Lolly** |
|---|---|---|---|---|---|
| Generare de conținut în masă | parțial | ✗ | ✗ | ✗ | **✓** |
| Funcționează complet offline | ✗ | ✗ | ✓ | parțial | **✓** |
| Logică de șablon și constrângeri stricte | ✗ | parțial | ✗ | parțial | **✓** |
| Nu necesită competențe de design | parțial | ✓ | ✗ | ✗ | **✓** |
| Content Credentials automate | ✗ | ✗ | parțial | ✗ | **✓** |
| Instrumentele compun alte instrumente | ✗ | ✗ | ✗ | ✗ | **✓** |
| Motor deschis, nu blocat în SaaS | ✗ | ✗ | ✗ | parțial | **✓** |
| C2PA content credentials | ✗ | ✗ | ✗ | ✗ | **✓** |
| Proveniență la nivel forensic, opțională | ✗ | ✗ | ✗ | ✗ | **✓** |
| Aplicații Mobile și Desktop | ✓ | ✗ | ✗ | parțial | **✓** |
| Linie de comandă și TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

Diferența e clară: nimic din peisajul existent nu ne oferă rezultate axate pe constrângeri, capabile offline, cu prag scăzut de competențe, accesibile intern. Lolly include chiar și un canvas deschis - **Layout Studio** - unde culorile, tipografia și resursele respectă valorile globale de brand, astfel încât aranjarea liberă rămâne axată pe constrângeri. Ceea ce **nu** este e un pachet de design nerestricționat: designerii continuă să folosească Illustrator și Figma pentru lucrări emblematice personalizate. Permutările pot fi asamblate cu acest instrument.

**Folosește-l pentru:** Generare rapidă de resurse creative operaționalizate - tile-uri de evenimente, ecusoane nominale, semnături, alerte CVE, coduri QR, carduri pentru social media, etichete de expediere, rapoarte structurate.

**Nu îl folosi pentru:** Conținut hero personalizat.

---

## Imaginea de ansamblu

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

### Structura repository-ului

```
lolly/
├── engine/           # Nucleu agnostic de platformă. Open source (MPL-2.0).
│   └── src/
│       ├── index.ts          # suprafața publică - loader, runtime, template, inputs, url-mode
│       ├── loader.ts         # preia și validează fișierele instrumentului
│       ├── runtime.ts        # orchestrează ciclul de viață în 5 pași
│       ├── template.ts       # hidratare Handlebars + annotateTemplate
│       ├── inputs.ts         # manifest → modelul de input la runtime
│       ├── url-mode.ts       # du-te-vino URL ↔ stare input
│       ├── validate.ts       # validare JSON Schema a manifestelor
│       ├── compose.ts        # rezolvă randările imbricate de instrumente (composes)
│       ├── embed.ts          # parsează URL-uri de embed portabile lolly.tools
│       └── bridge/
│           └── host-v1.ts    # interfață TypeScript - contractul podului (bridge)
│
├── shells/
│   ├── web/          # PWA - găzduit online; distribuția principală
│   │   └── src/
│   │       ├── main.ts           # boot, rutare
│   │       ├── theme.ts          # aplicare/persistare temă (prevenire FOUC)
│   │       ├── bridge/           # implementările web ale API-urilor HostV1
│   │       │   ├── index.ts      # compune toate componentele podului
│   │       │   ├── db.ts         # configurare IndexedDB
│   │       │   ├── state.ts      # host.state - editări salvate
│   │       │   ├── profile.ts    # host.profile - detaliile utilizatorului
│   │       │   ├── assets.ts     # host.assets - catalog + upload-uri ale utilizatorului
│   │       │   ├── clipboard.ts  # host.clipboard
│   │       │   ├── export.ts     # host.export - rasterizare/serializare
│   │       │   ├── net.ts        # host.net - fetch pe listă albă
│   │       │   └── media.ts      # host.media - cadre live de cameră (onFrame)
│   │       ├── catalog/
│   │       │   └── sync.ts       # sincronizare catalog la boot + cache offline
│   │       ├── styles/           # CSS la nivel de aplicație (app.css, picker.css, tokens.css)
│   │       └── views/
│   │           ├── gallery.ts    # listarea bibliotecii de instrumente + carduri de stare salvată
│   │           ├── tool.ts       # montează un instrument (inputuri + canvas + acțiuni)
│   │           ├── picker.ts     # UI de selecție resurse (invocat de host.assets)
│   │           ├── profile.ts    # editor de detalii utilizator
│   │           ├── projects.ts   # /p - foldere cu sesiuni salvate (imbricate; export de folder/selecție)
│   │           └── free-canvas.ts # overlay de editor free-canvas pentru instrumentele render.layout:"editor"
│   │
│   ├── cli/          # CLI Node.js - același motor, jsdom headless
│   │   ├── bin/lolly.ts
│   │   └── src/
│   │       ├── run.ts    # loadTool → createRuntime → export → scrie fișierul
│   │       └── bridge.ts # implementarea CLI a HostV1
│   │
│   ├── tui/          # Shell interactiv de terminal (Ink) - reutilizează podul CLI-ului
│   │   └── src/
│   │       ├── main.tsx  # aplicație pe tot ecranul: Gallery / Projects / Profile / ToolView
│   │       └── bridge.ts # podul CLI-ului + stare pe disc sub ~/.lolly
│   │
│   ├── tauri-desktop/ # aplicație desktop descărcabilă
│   └── tauri-mobile/  # aplicație iOS/Android
│
├── tools/            # VIZUALIZARE de profil (gitignored) - date, nu cod. Combinat din pachete:
│                     #   community/ (public, agnostic de brand, MPL) + brands/<active>/tools (deținut de brand).
│   ├── qr-code/
│   ├── quotes/
│   ├── email-signature/
│   ├── daily-card/        # „Day Brief” - vreme/oră/hartă (preluate printr-un script inline din template)
│   ├── code-canvas/
│   ├── countdown-timer/
│   ├── color-palette/
│   ├── color-block/           # blocuri tipizate/eterogene (discriminator addMenu)
│   ├── dynamic-layout/
│   ├── tool-logo/         # „Logo” - logo de brand cu comutare automată
│   ├── street-map/        # hărți vectoriale offline, la nivel de cvartal
│   ├── url-shot/          # „URL Screenshot” (capacitatea capture)
│   ├── strip-data/        # eliminare metadate pe dispozitiv - JPEG/PNG/SVG/PDF (fișier intrare → fișier curat ieșire)
│   ├── compress-pdf/      # compresor de PDF pe dispozitiv - recomprimă imaginile (fișier intrare → fișier mai mic ieșire)
│   ├── brand-lockup/      # „Brand Lockup” - asocieri de logo SUSE; text-to-path cu HarfBuzz (wasm)
│   ├── bag-video/
│   ├── chart-creator/     # grafice SVG din date structurate
│   ├── filter-duotone/    # tratament foto în două culori
│   ├── filter-halftone/   # foto → grilă vectorială de puncte halftone
│   ├── filter-scanline/   # foto → grilă retro posterizată cu scanline (SVG / raster transparent)
│   ├── meeting-planner/   # planificator de întâlniri pe fusuri orare globale
│   ├── calendar-ics/      # eveniment → fișier calendar .ics plus un card
│   ├── digi-ad/           # „Animated Ad” - banner în buclă din scene
│   ├── event-name-badge/  # ecusoane de conferință - compune qr-code ca SVG
│   ├── wayfinding-signage/ # semnalistică de eveniment; blocurile de direcții auto-ajustează textul etichetei
│   ├── text-helper/       # atelier de text pe dispozitiv (formatare/decodare/hash/de-identificare)
│   ├── layout-studio/     # „Layout Studio” - canvas de editor WYSIWYG liber (render.layout: editor)
│   ├── multi-page-pdf/    # document PDF multi-pagină - copertă, blocuri de conținut curgător, pagină finală
│   ├── diagram-builder/   # diagrame org / layercake / proces / ciclu / piramidă
│   ├── logo-wall/         # multe logo-uri → grilă auto-aranjată
│   ├── logo-lockup-partner/ # asociere co-brand SUSE + partener
│   ├── web-icon/          # favicon .ico / png / svg din text + culori
│   ├── filter-posterize/  # foto → separații vectoriale plate, posterizate
│   ├── filter-pixel-stretch/ # foto → efect de întindere pe pixeli
│   ├── lottie-digi-ad/    # bannere publicitare animate Lottie
│   └── pose-geeko/        # poziționează mascota SUSE Geeko - imagini statice pregătite pentru print
│
├── catalog/
│   ├── tools/index.json        # registrul instrumentelor
│   └── assets/
│       ├── index.json          # registrul resurselor
│       └── suse/...            # logo, paletă, etc.
│
├── schemas/          # JSON Schema pentru tool.json, intrări de resurse, AssetRef
├── scripts/          # build-catalog-index.ts, checksum-assets.ts, validate-catalog.ts
├── tests/            # teste ale motorului
└── docs/             # acest fișier + ghiduri de autor + poziționare
```

---

## Modelul de livrare al platformei

Platforma rulează pe mai multe suprafețe - web PWA, Tauri desktop/mobil, CLI-ul scriptabil și TUI-ul interactiv. Toate folosesc același motor și aceleași fișiere de instrumente.

### Web (PWA) - distribuția principală
Găzduit la un URL controlat de SUSE. Funcționează offline odată ce service worker-ul a pus în cache instrumentele și resursele. Aici vor folosi platforma majoritatea angajaților, furnizorilor și partenerilor. Nu este necesar niciun cont - starea este stocată în IndexedDB, per dispozitiv.

Shell-ul web este responsive dintr-un singur layout. Pe desktop, un instrument este o bară laterală de control redimensionabilă, alături de o zonă de previzualizare cu navigare pe canvas nativă pentru trackpad (Cmd/Ctrl-scroll sau pinch pentru zoom în jurul cursorului, Space- sau drag cu butonul din mijloc pentru pan, tastele `0`/`1`/`+`/`−` și un HUD Potrivire/%). Pe mobil (≤640px) controalele devin o foaie ancorată sus, cu un mâner de tragere care se fixează pe parțial/jumătate/complet (tap comută între ele) deasupra unei previzualizări statice pe tot ecranul, iar un buton flotant **Randare** deschide controalele de **Export** într-un popup de tip foaie inferioară. Pe touch ai pinch-zoom și drag-pan pe previzualizare. Traseul de randare și controalele de export sunt identice pe ambele - doar interfața (chrome) se reflowează.

**Modul batch (`/pro`).** Shell-ul web include și o grilă de tip batch, în stil foaie de calcul (`shells/web/src/pro/`), care randează multe rânduri deodată, pe unul sau mai multe instrumente. Oferă du-te-vino CSV/TSV plus lipire din foaie de calcul, template/format/dimensiune/unitate/dpi per rând, un panou lateral de editare a blocurilor cu previzualizare live, coloane de export pliabile, o bară de etichete „relevance” per rând, reordonare de rânduri prin mâner de drag în stânga, confirmare de ștergere în doi pași, sesiuni batch salvate și descărcare `.zip`. Aceasta este suprafața one-to-many din spatele poziționării „generare de conținut în masă”.

### Tauri desktop / mobil
Aplicație nativă împachetată (amprentă mică datorită Tauri). Oferă disponibilitate offline completă, acces la sistemul de fișiere pentru instrumentele dependente de CLI (PDF Smasher, Font Outliner) și acces la cameră. Programată pentru îmbunătățiri de tooling la mijlocul lui 2026.

### CLI
`lolly <tool-id> [--input=value ...] --output=file.png`

Utilizatorii de desktop pot invoca multe instrumente din terminal. Shell-ul CLI încarcă același motor, creează un DOM jsdom, rulează același traseu de randare și scrie fișierul. URL mode este transportul - CLI-ul nu este o implementare separată. Asta garantează că rezultatele CLI și GUI sunt identice.

```bash
lolly qr-code --url=https://suse.com --output=qr.svg
lolly quotes --quote="Ship it." --output=quote.png
lolly                        # listează instrumentele disponibile
lolly qr-code                # listează inputurile pentru acel instrument
```

### TUI
`npm run tui`

Omologul interactiv al CLI-ului: o aplicație de terminal pe tot ecranul, orientată pe tastatură (construită pe Ink), pentru navigarea prin instrumente, completarea inputurilor, salvarea proiectelor și exportul - totul fără GUI. Podul său de host **reutilizează implementarea CLI-ului** pentru formatele fără DOM (SVG/EMF/EPS/HTML + text/date) și adaugă stare pe disc sub `~/.lolly`, plus o previzualizare inline opțională. Dincolo de asta, are un **nivel de randare în browser**: un Chromium headless cu domeniu limitat (același pe care îl instalează serverul MCP), care produce raster/PDF/video și captură de URL live la cerere - folosind o copie compilată a shell-ului web, astfel încât rezultatul e identic, și pornind doar la primul export al unui astfel de format. Așa că `url-shot` (cu crop + recolorare + PDF/SVG vectorial) și fiecare instrument raster/pdf rulează și el în terminal. Vezi [ghidul TUI](/info/tui.html).

---

## Categorii de instrumente

Instrumentele sunt etichetate cu o `category` în manifest, pentru gruparea în galerie.

Rândurile sunt listate în ordinea secțiunilor din galerie. Secțiunea `utility` se randează întotdeauna **ultima** în galerie (după orice altă categorie, inclusiv cele viitoare) - este sertarul „Offline Utilities” de pe dispozitiv.

| Categorie | Instrumente livrate | Planificate |
|---|---|---|
| `everyone` | QR Code Generator, Quote Card, Email Signature, Day Brief, Code Canvas, Color Block, Dynamic Layout, Logo, Web Icon Maker | Employee Image Stationery |
| `designer` | Brand Lockup, Bag Video, Chart Creator, Street Map, Animated Ad, Multi-Page PDF, Diagram Builder, Logo Lockup: Grid (NASCAR), Logo Lockup: Partner, Filter: Duotone, Filter: Halftone, Filter: Scanline, Filter: Posterize Bitmap, Filter: Pixel Stretch | Font Outliner |
| `event` | Meeting Planner, Event Name Badge, Wayfinding Signage, Calendar ICS | Event Stationery, Bulk Name Badges, Room Agenda Cards |
| `product` | - | CVE Alert, Product Release Announcement, Blog OG Image |
| `utility` | Countdown Timer, Color Palette, URL Screenshot, Strip Hidden Data, Text Helper, Compress PDF, Layout Studio | convertoare de unități/format, alte utilitare de confidențialitate pe dispozitiv |

Instrumentele mai sunt clasificate și după status: `official` (aprobat de brand, fără watermark), `community` (contribuție externă), `experimental` (exporturi cu watermark). Dynamic Layout, URL Screenshot, Logo Lockup: Grid (NASCAR), Filter: Posterize Bitmap și Diagram Builder au în prezent statusul `experimental`; Web Icon Maker și Layout Studio sunt livrate ca instrumente `community`.

**Layout Studio** este primul instrument construit pe modul free-canvas `render.layout: "editor"` - o suprafață fără chrome, cu manipulare directă, în care tragi, redimensionezi, rotești și aliniezi (snap) casete de text, forme și imagini, apoi exporți prin același traseu de randare ca orice alt instrument.

**Strip Hidden Data** este primul **utilitar pe dispozitiv** (`privacy: "on-device"`): un instrument de transformare a conținutului care preia un fișier furnizat *de tine*, îl procesează integral în browser și returnează o copie curată - niciodată încărcat pe server, niciodată marcat cu watermark, fără ștampilă de proveniență. **Text Helper** este al doilea - un atelier pe dispozitiv pentru sarcinile zilnice de tipul „lipește pe un site web” (formatare JSON, decodare JWT, Base64, encode/decode URL, hashing SHA). **Compress PDF** este al treilea - micșorează un PDF recomprimându-i imaginile, tot integral pe dispozitiv. Toate trei poartă insigna „Rulează pe dispozitivul tău - nimic nu este încărcat”. Acesta este începutul unei categorii de utilitare de confidențialitate care înlocuiește predarea fișierelor confidențiale unor site-uri cu scop unic.

> Notă: `category` și `status` sunt denormalizate în `catalog/tools/index.json` (registrul citit de galerie) din fiecare `tool.json`. Manifestul este sursa de adevăr - indexul este **generat** de `npm run build:catalog`, iar `npm run validate:catalog` face CI să eșueze dacă indexul din commit se abate de la manifeste.

---

## Angajamente arhitecturale

Aceste decizii sunt stabilite definitiv. Schimbarea oricăreia dintre ele este un demers major - ele modelează orice altă decizie din codebase.

### 1. Instrumente declarative, cu o portiță de scăpare imperativă

Un instrument este un manifest (`tool.json`) + un template (`template.html`) + opțional `hooks.js`.

**Manifestul declară inputurile.** Nu template-ul. Inputurile nu sunt deduse din tokenii Handlebars. Manifestul este contractul; template-ul consumă variabile numite prin `{{id}}`.

**Hook-urile sunt opționale.** Majoritatea instrumentelor sunt pur declarative - manifest + template e suficient. Instrumentele care au nevoie de valori calculate (codificare QR, modelarea datelor pentru grafice) furnizează un `hooks.js` care expune funcții de ciclu de viață numite (`onInit`, `onInput`, `onFrame` - hook-ul per-cadru pentru camera live, pentru instrumentele reactive la mișcare - `beforeRender`, `beforeExport`, `afterExport` și `exportFile` - traseul de transformare fișier-intrare/fișier-ieșire folosit de utilitarele pe dispozitiv precum Strip Hidden Data). Gazda încarcă hook-urile prin `new Function('host', …)`, cu podul de capabilități injectat ca domeniu de vizibilitate (closure). Acesta este un **contract de portabilitate, nu un sandbox de securitate**: hook-urile rulează în continuare în domeniul paginii și *pot* accesa `window`/`fetch`/`document` într-un shell de browser - `host.*` este suprafața portabilă, susținută oficial, nu o limită impusă. Rezultatele hook-urilor asincrone sunt limitate în timp (onInit 5s, onInput 2s, restul 5s), iar rezultatele întârziate sunt aruncate; un hook *sincron* care scapă de sub control nu poate fi întrerupt forțat. Codul de hook nesigur, de la terți, prin urmare nu este sigur de rulat până când nu apare izolarea prin Worker.

Asta contează pentru că: instrumentele declarative pot fi create de persoane care nu sunt dezvoltatori. Dacă fiecare instrument ar fi o aplicație web, riscul „competențe limitate pentru a crea/menține șabloanele de bază” devine un blocaj permanent.

### 2. Instrumentele și resursele sunt date, nu cod împachetat

Aplicațiile web și Tauri preiau cataloagele de instrumente și resurse de la un URL cunoscut, la boot, le pun în cache local și operează pe orice se află acolo. **Adăugarea unui nou tile de eveniment sau a unei resurse sezoniere nu necesită o versiune nouă a aplicației.**

Octeții resurselor sunt verificați prin checksum SHA-256, pentru a preveni otrăvirea CDN-ului. `id`-ul + `version`-ul resursei determină invalidarea cache-ului.

### 3. Podul de capabilități este singurul API pe care îl văd instrumentele

Instrumentele nu ating niciodată DOM-ul în afara zonei lor de template, nu apelează niciodată `fetch` direct, nu citesc niciodată sistemul de fișiere. Ele apelează metode versionate `host.*`. Podul este definit în `engine/src/bridge/host-v1.ts`:

| API-ul podului | Ce face |
|---|---|
| `host.profile` | Prenumele utilizatorului, email, poză de profil, oraș etc. Precompletează inputurile prin `bindToProfile`. |
| `host.assets` | Interogări de catalog, rezolvarea resurselor, UI de selecție oferit de gazdă. |
| `host.state` | Salvează / încarcă sloturi de input. IndexedDB pe web, sistem de fișiere pe Tauri, memorie pe CLI. |
| `host.clipboard` | Scrie text sau imagine în clipboard (cu fallback-uri per platformă). |
| `host.export` | Rasterizează sau serializează ținta de randare. Aplică watermark pentru instrumentele experimentale. |
| `host.net` | Fetch pe listă albă - disponibil doar dacă instrumentul a declarat capacitatea `"network"`. (Niciun instrument livrat nu îl folosește în prezent.) |

Suprafețele opționale, aditive, apar doar atunci când un shell le oferă. Două sunt **condiționate de capacitate** - expuse doar când instrumentul declară flag-ul corespunzător: `host.compose` (integrează randarea altui instrument - `compose`) și `host.capture` (captură de pagină pentru URL Screenshot - `capture`). Restul sunt **detectate pe baza funcționalității** - prezente ori de câte ori shell-ul le poate oferi: `host.text` (text-to-path prin HarfBuzz WASM; capacitatea `wasm` marchează instrumentele care depind de el), `host.pdf` (parsare/compresie PDF, folosit de Strip Hidden Data și Compress PDF) și `host.tokens` (design tokens DTCG). Capacitățile declarabile sunt: `network`, `filesystem`, `clipboard`, `camera`, `ffmpeg`, `wasm`, `capture`, `compose`.

Același instrument rulează în browser, Tauri și CLI headless pentru că fiecare shell implementează această interfață - instrumentul nu știe niciodată în care se află.

Podul este versionat. Adăugarea de metode este o versiune minoră. Eliminarea sau schimbarea semnăturilor este o creștere de versiune majoră. Când apare v2, v1 trebuie să continue să funcționeze.

### 4. ID-urile resurselor sunt eterne

`suse/logo/primary` este un contract. Odată publicat:
- ID-ul nu se schimbă niciodată, nu se reutilizează niciodată.
- Schimbări la nivel de octeți → crește `version` în manifest.
- Înlocuit de o resursă nouă → setează `deprecated: true` și, opțional, `replacedBy`.
- Referințele existente se rezolvă întotdeauna.

Asta face ca stările salvate ale instrumentelor și linkurile partajate prin URL să fie durabile de-a lungul anilor.

### 5. URL mode este un cetățean de prim rang

Fiecare input trebuie să poată fi exprimat ca parametru URL:

```
lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H
```

Modul CLI este URL mode sub un transport diferit - shell-ul CLI construiește un obiect de stare-URL din argv și rulează **același** pipeline de motor. Există un singur traseu de randare. CLI-ul nu se poate abate de la GUI pentru că nu este o implementare separată.

`url-mode.ts` gestionează du-te-vino-ul (parsare și serializare). Parametri rezervați (niciodată transmiși instrumentului ca inputuri): `format`, `export`, `copy`, `slot`, `output`, `filename`, `_v`, `z` (stare compactată - tokenul „Cel mai scurt link”), `width`/`w`, `height`/`h`, `unit`, `dpi`, `profile`, `password`, `bleed`, `marks`, `full`, `options`, `nostage`. Inputurile de tip resursă în URL mode sunt serializate prin `id`-ul lor; runtime-ul le rezolvă prin `host.assets.get()` înainte de hidratare. `width`/`height` sunt valori exprimate în `unit` (implicit `px`, dar și `mm`/`cm`/`in`/`pt`/`pc`); cu o unitate fizică, `dpi` setează rezoluția raster. Ele stabilesc dimensiunea documentului canvas și precompletează panoul de dimensiuni la export.

### 6. Stocarea trece prin pod, nu direct

Shell web: IndexedDB. Tauri: sistem de fișiere. CLI: în memorie. Instrumentele văd doar `host.state.save(slot, data)` și `host.state.load(slot)`. `localStorage` nu este folosit - este prea mic și nu poate ține blob-uri.

Utilizatorii pot salva mai multe sloturi de editare denumite per instrument și pot reveni ulterior la fiecare sesiune. Nu este necesară crearea unui cont; starea este per dispozitiv. Pentru că podul este singura cusătură (seam), acea stare per dispozitiv este și *portabilă*: `shells/web/src/data-transfer.ts` citește totul înapoi prin `host.profile`/`host.state`/`host.assets` într-o singură arhivă `lolly-backup`, care se importă pe orice altă instalare - răspunsul offline la „mută-mă pe un dispozitiv nou”, fără nevoie de server (specificația completă: `docs/data-transfer.md`). Integrarea SUSE ID (sincronizare multi-dispozitiv) este un jalon viitor, construit peste asta.

### 7. Etichetele de maturitate răspund structural riscului „aprobat de brand”

Fiecare instrument declară `status: official | community | experimental` în manifest. Galeria sortează după status. Instrumentele experimentale marchează automat exporturile cu watermark - watermark-ul este aplicat de `host.export.render`, nu de instrument, deci un autor de instrumente non-official nu îl poate dezactiva.

Acesta este un răspuns structural la riscul de percepție conform căruia folosirea oricărui instrument ar implica aprobarea brandului. Răspunsurile de proces (o coadă de revizuire, restricționare prin SUSE ID) se adaugă deasupra.

### 8. Inputurile instrumentelor sunt tipizate prin manifest, inclusiv resursele

Inputurile declară un `type`: `text`, `longtext`, `number`, `boolean`, `color`, `select`, `asset`, `date`, `time`, `datetime-local`, `url`, `profile`, `blocks`, `vector` și `file`. Gazda randează un control generic pentru fiecare tip, din manifest - instrumentele nu scriu deloc cod de control. Trei dintre ele cântăresc mai mult decât restul:

- **`asset`** (cu `filter` și `allowUpload`) este puntea către sistemul global de resurse; `allowUpload: false` este pârghia de impunere a brandului pentru lucruri precum logo-urile de pe tile-urile de sponsorizare, unde sunt permise doar resursele din bibliotecă. Upload-urile utilizatorului folosesc aceeași formă `AssetRef` ca resursele din bibliotecă, deci instrumentele le tratează identic.
- **`blocks`** este un grup repetitiv de câmpuri - un mini-tabel în interiorul unui singur input, editat într-un panou lateral, cu un meniu de adăugare tipizat/discriminat și câmpuri de resurse per bloc. Click pe un bloc randat pe canvas focalizează rândul acelui bloc. Folosit de `meeting-planner`, `chart-creator`, `event-name-badge`, `wayfinding-signage`, `color-block` și `digi-ad`.
- **`vector`** grupează un set fix de numere (de ex. o transformare) într-un singur control compus; **`file`** păstrează fișierul propriu al utilizatorului ca octeți în memorie, pentru utilitarele de transformare pe dispozitiv (de ex. `strip-data` și `compress-pdf`).

### 9. Template-urile sunt fără logică (Handlebars, nu EJS)

Handlebars a fost ales în locul EJS în mod deliberat:
- Fără logică. Template-urile pot fi create de persoane care nu sunt dezvoltatori.
- Sigur implicit. `{{x}}` face escape HTML; `{{{x}}}` e varianta brută, opțională.
- Fără JS arbitrar în template-uri înseamnă fără suprafață de audit XSS per template.

Logica trăiește în `hooks.js`, unde este explicită și revizuibilă. Helper-ele Handlebars disponibile: `{{default}}`, `{{upper}}`, `{{lower}}`, `{{eq}}`, `{{markdown}}`, `{{asset ref}}`, `{{asset ref "property"}}` (plus helper-ele de format de date `icsStamp`/`rfcText`/`csvCell`, folosite de template-urile surori `.ics`/`.vcf`/`.csv`).

### 10. Instrumentele compun instrumente

Un instrument poate integra randarea **altui** instrument fără importuri instrument-la-instrument - compunerea este rezolvată de motor, niciodată de codul instrumentului. Există două suprafețe:

- **Manifest declarativ** - `composes: [{ id, tool, inputs, format?, width?, height? }]`. Motorul randează copilul numit și plasează rezultatul în template-ul fără logică, ca `{{asset <id>}}`. `event-name-badge` compune astăzi `qr-code` ca SVG.
- **URL de embed portabil** - `<img src="https://lolly.tools/tool/<id>.<ext>?<inputs>">`. Shell-ul randează acel copil **local** (un pixel placeholder apare până se rezolvă randarea locală); nu se preia niciodată nimic de la `lolly.tools`.

Poți compune randarea oricărui instrument: un copil **SVG** rămâne vector adevărat atunci când părintele exportă în SVG sau PDF și se rasterizează clar pentru PNG; copiii **PNG/JPG/WEBP** se integrează ca imagini. Necesită capacitatea `compose`. Copiii compuși sunt intermediari - niciodată marcați cu watermark sau ștampilați cu proveniență - iar compunerea degradează grațios: un shell care nu poate randa un copil omite pur și simplu slotul, iar părintele tot se randează.

---

## Ce am ales explicit să nu facem

- **Fără EJS / fără JS arbitrar în template-uri.** Suprafața XSS este zero. Logica trăiește în `hooks.js`.
- **Fără CMS pentru resurse.** Catalogul de resurse este git. Actualizările trec prin review de PR. Fără UI de upload, fără autentificare, fără coadă de moderare. Review-ul din git _este_ moderarea.
- **Fără RBAC în MVP.** Acces public. Riscul de brand este gestionat prin etichete de maturitate + watermark-uri + faptul structural că toate resursele văzute de utilizatori au trecut printr-un review de PR.
- **Fără bază de date centrală.** Toată starea utilizatorului este per dispozitiv. Integrarea SUSE ID este pe roadmap, dar nu este un blocaj de lansare.
- **Fără traseu de cod partajat tools/engine.** Motorul este open source; `tools/` și `assets/` rămân conținut proprietar SUSE, în propriile repository-uri. Separarea este impusă (fără importuri încrucișate), astfel încât divizarea rămâne curată.

---

## Ciclul de viață, de la un capăt la altul

Un utilizator deschide `lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H`:

1. **Boot.** Shell-ul web deschide IndexedDB, construiește podul de capabilități, sincronizează cataloagele de instrumente și resurse (sau le încarcă din cache, când e offline).
2. **Rutare.** Hash-ul URL → view-ul `tool`, cu `qr-code` și parametrii URL extrași.
3. **Încărcare.** `loadTool('qr-code', fetchFile)` preia `tool.json`, validează în raport cu JSON Schema, preia `template.html`, `styles.css` și sursa `hooks.js`.
4. **Parsarea stării URL.** `parseUrlState` traduce parametrii URL în valori inițiale de input. Referințele de resurse (`?logo=suse/logo/primary`) sunt parsate ca obiecte ușoare `{ id, _unresolved: true }`.
5. **Runtime.** `createRuntime(tool, host, initialValues)` construiește modelul de input (combinând datele de profil, valorile implicite și valorile inițiale), rezolvă referințele de resurse prin `host.assets.get()`, încarcă hook-urile (`host` la nivel de closure, nu izolat în sandbox), apelează `hooks.onInit`.
6. **Randare.** Shell-ul se abonează la runtime; la fiecare schimbare de stare primește `{ model, hydrated }`. Randează controalele de input din model și scrie HTML-ul template-ului hidratat în `#tool-canvas`.
7. **Interacțiune.** Utilizatorul scrie într-un input → `runtime.setInput(id, value)` → se aplică constrângerile → se apelează `hooks.onInput` → re-hidratare → re-randare. Canvas-ul se actualizează live.
8. **Export.** Utilizatorul dă click pe Download(PNG) → `runtime.export(canvasNode, 'png')` → `host.export.render` (rasterizează via dom-to-image-more; SVG/PDF trec prin vectorizatoare dedicate, care parcurg DOM-ul) → blob → `host.export.download`. Gama de formate în care se poate înscrie un instrument este largă: `svg`, `png`, `jpg`/`jpeg`, `webp`, `avif`, `pdf`, formatele vectoriale `emf`, `eps`, plus formatele de print/CMYK `pdf-cmyk`, `cmyk-tiff`, `eps-cmyk`; formatele video `webm`, `mp4`, `gif`; și formatele de date/text `html`, `md`, `txt`, `json`, `csv`, `ics`, `vcf`, `ico`, `zip`. (Instrumentele care setează `render.export: false` - de ex. Color Palette, Countdown Timer, Strip Hidden Data, Text Helper, Compress PDF - ascund controalele de download/format/dimensiune.) Unitățile fizice sunt convertite aici, per format (PDF → puncte reale de pagină, raster → pixeli la DPI-ul dat, cu un chunk `pHYs`). Metadatele de autor/proveniență (autor, instrument, sursă - construite de `engine/src/metadata.ts`) sunt integrate per format: PNG iTXt, JPEG EXIF, dicționarul info al PDF-ului, SVG `<metadata>`, comentariu GIF. Instrumentele experimentale primesc un watermark inserat de gazdă, nu de instrument.

Același ciclu de viață în Tauri. Același ciclu de viață în CLI - jsdom oferă DOM-ul headless; rezultatul merge într-un fișier sau la stdout.

---

## Statutul open-source

Directoarele `engine/`, `shells/`, `schemas/` și `docs/` sunt open source sub **MPL-2.0** - o platformă de scaffolding neutră față de furnizor, pentru tooling de brand, cu fiecare unitate livrabilă separată în propriul repository, sub [github.com/lolly-tools](https://github.com/lolly-tools). `tools/` și `catalog/assets/` sunt conținut specific SUSE și rămân **proprietatea SUSE** (toate drepturile rezervate - vezi `NOTICE.md` din fiecare repo); nu sunt acoperite de MPL.

Separarea este impusă - nu există importuri încrucișate de la `engine/` către `tools/` sau `assets/` - astfel încât granița dintre platformă și conținut rămâne curată.

---

## Roadmap

| Jalon | Termen | Ce |
|---|---|---|
| **Instrumente inițiale** | ✅ Finalizat | QR Code, Quote Card, Email Signature, Day Brief, Code Canvas, Countdown Timer, Color Palette, Brand Lockup, Bag Video, Chart Creator, Filter: Duotone, Meeting Planner - shell web live |
| **Îmbunătățirea tooling-ului actual** | Mijlocul 2026 ✅ Finalizat  | Aplicație offline descărcabilă (Tauri); instrumente suplimentare pentru angajați și evenimente; pipeline de export mai bogat (stabilitate text-to-path, metadate, formate suplimentare - vezi `plans.md`) |
| **Deschiderea motorului ca open source** | Sfârșitul 2026 ✅ Finalizat  | Motorul, shell-urile, schemele, documentația devin publice - nu și instrumentele/resursele de brand |
| **Transfer de la un dispozitiv la altul** | ✅ Finalizat | Arhiva portabilă `lolly-backup` transportă profilul, sesiunile salvate, imaginile încărcate și preferințele între oricare două instalări - offline sau online, fără cont. Plic forward-compatible, cu verificare de integritate (specificație: `docs/data-transfer.md`) |
| **Stabilirea unui roadmap formal de instrumente** | Sfârșitul 2026 | Kituri de referință pentru clienți, ingest de design prin AI, mod de request GET/URL |
| **Utilitare de confidențialitate pe dispozitiv** | 🚧 În desfășurare | Instrumente de transformare a conținutului care procesează local *propriul tău* fișier (fișier intrare → fișier curat ieșire), înlocuind exfiltrarea către SaaS cu scop unic. **Finalizat:** tipul de input `file` + traseul de transformare `exportFile` + convențiile `privacy:"on-device"` (fără watermark/proveniență) + **Strip Hidden Data** (metadate JPEG/PNG/SVG/PDF, PDF prin podul `host.pdf`) și **Text Helper** (atelierul pe dispozitiv pentru sarcinile zilnice de tipul „lipește pe un site web” - formatare JSON, decodare JWT, Base64, encode/decode URL, hashing SHA, plus un grup Novelty). **Următorul pas:** crop/resize, conversie/compresie de imagini; apoi un pod de codec `host.image` (specificație: `plans/exfiltration-app-content.md`) |
| **Design tokens (DTCG)** | 🚧 Culoare livrată | Primitive de brand ca [W3C Design Tokens (DTCG)](https://www.designtokens.org/TR/drafts/format/) canonice - formatul pe care [Penpot îl importă/exportă](https://help.penpot.app/user-guide/design-systems/design-tokens/). **Finalizat:** tokeni de culoare (`suse/tokens/brand`), podul `host.tokens`, mostre (swatches) în selector + valori legate prin referință (specificație: `docs/design-tokens.md`). **Următorul pas:** tokeni de dimensiune/tip, import/export Penpot, tokeni de utilizator în arhiva de transfer (`tokens.json`) |
| **Endpoint de agent MCP (render)** | ✅ Finalizat | Un server [MCP](https://modelcontextprotocol.io) expune catalogul + traseul de randare ca instrumente apelabile (`lolly_list_tools` / `describe_tool` / `build_url` / `render` / `transform`), astfel încât orice agent poate produce resurse finite, conforme regulilor - adaugă-l la orice client MCP ca un connector custom (OAuth 2.1) sau îndreaptă un client CLI/HTTP către el cu un bearer token. Live la `mcp.lolly.tools` (endpoint complet: raster/PDF/animație/video printr-un browser headless găzduit) și `lolly.tools/api/mcp` (nivel serverless, fără browser). Distinct de MCP-ul de *autorat* Penpot de mai jos, care ține de **crearea** instrumentelor (specificație: `plans/mcp-server.md`; ghid: `docs/mcp.md` + `docs/ai-agents.md`) |
| **Ingest de fișiere Penpot ca instrumente** | 2027+ | Importă un fișier Penpot și expune-l *ca instrument Lolly* (declarativ, axat pe constrângeri), transformând design-urile create în Penpot în generatoare deterministe |
| **Extensie MCP + Penpot (autorat doar online)** | 2027+ | Un server MCP Penpot articulează instrumente noi cu ajutorul AI - cea mai vizuală modalitate de a crea template-uri deterministe: o primă rundă informată de brand, perfecționată cu un om în buclă, țintind în timp contexte noi „one-shot”. *Crearea* instrumentelor este doar online; instrumentele produse rulează oriunde |
| **RBAC + SUSE ID** | 2027+ | Restricționează instrumente specifice în spatele SUSE ID; stare salvată multi-dispozitiv; ingest/export Google Drive |

---

## Unde se termină motorul și începe gazda

Dacă poate fi descris în date pure + Handlebars → **motor**.
Dacă atinge DOM-ul, sistemul de fișiere, rețeaua sau orice API de browser/OS → **gazdă**.

Linia este trasată clar, în mod intenționat. Motorul este partea open-source. Tot ce știe despre SUSE, platforme specifice sau medii de runtime rămâne în afara lui.
