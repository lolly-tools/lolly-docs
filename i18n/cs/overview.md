# Přehled

Tento dokument zachycuje účel, strukturu a architektonická rozhodnutí platformy Lolly. Odráží jak vizi produktu, tak současný stav kódové báze.

> **Stav:** Lolly je interní prototyp v **uzavřeném pilotním provozu, který ještě neskončil**. Engine je deterministický a vnitřně konzistentní, ale produkt je v rané fázi - SUSE je zákazník číslo jedna - a jeho kryptografické a souborově-parsovací enginy teď procházejí přísným zpevňováním infrastruktury podle SUSE jako příprava na podnikové měřítko (a to nám jde opravdu dobře). Architekturu níže čti jako návrhový záměr v procesu testování, ne jako hotový, certifikovaný produkt. Jak se pilotní provoz řídí a měří, popisuje stránka [Zavádění a správa](/info/adoption-governance.html#status).

---

## Proč tohle existuje

Týmy narážejí na opakující se problém: kreativní a obsahová práce, která se pravidelně opakuje, je příliš předvídatelná na to, aby si pokaždé zasloužila zapojení odborných rukou, ale zároveň příliš citlivá na kvalitu, než aby se dala předat bez mantinelů. Výsledkem je buď pomalá propustnost (úzké hrdlo v podobě specialisty), nekonzistence (lidé používají, co zrovna mají po ruce), nebo závislost na dodavateli (SaaS DAM, který ovládá tvé šablony).

Tahle platforma je strukturální odpověď:

> **Programová tvorba kreativy a obsahu ve velkém měřítku** - generování assetů bez lidské práce, s pravidly pod centrální kontrolou, pro zaměstnance, dodavatele i partnery.

Výsledkem je **hojnost**: každá akce má správné značení, každé upozornění na CVE odpovídá firemnímu stylu, každý štítek se vytiskne čistě, každý e-mailový podpis je aktuální - a to všechno bez designového ticketu. Platforma zvládá opakovanou, provozně nasazenou kreativu. Záměrně to není nástroj pro zakázkovou tvorbu - vlajkovou práci si designéři nadále drží pod sebou.

### Kam v tomhle prostředí zapadá

| Funkce | Canva | Brand portály | Illustrator | Figma / Penpot | **Lolly** |
|---|---|---|---|---|---|
| Hromadná tvorba obsahu | částečně | ✗ | ✗ | ✗ | **✓** |
| Funguje plně offline | ✗ | ✗ | ✓ | částečně | **✓** |
| Logika šablon a pevná omezení | ✗ | částečně | ✗ | částečně | **✓** |
| Nevyžaduje grafické dovednosti | částečně | ✓ | ✗ | ✗ | **✓** |
| Automatické Content Credentials | ✗ | ✗ | částečně | ✗ | **✓** |
| Nástroje skládají jiné nástroje | ✗ | ✗ | ✗ | ✗ | **✓** |
| Otevřený engine, bez uzamčení v SaaS | ✗ | ✗ | ✗ | částečně | **✓** |
| C2PA content credentials | ✗ | ✗ | ✗ | ✗ | **✓** |
| Volitelná provenience na forenzní úrovni | ✗ | ✗ | ✗ | ✗ | **✓** |
| Mobilní a desktopové aplikace | ✓ | ✗ | ✗ | částečně | **✓** |
| Příkazová řádka a TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

Mezera na trhu je jasná: nic v současném prostředí nenabízí výstup založený na omezeních, funkční offline, nenáročný na dovednosti a interně přístupný. Lolly má dokonce vlastní otevřené plátno - **Layout Studio** - kde se barvy, typografie a assety řídí globálními hodnotami značky, takže i volné uspořádání zůstává založené na omezeních. Co to **není**, je neomezená sada nástrojů pro design: designéři nadále používají Illustrator a Figma pro zakázkovou vlajkovou práci. Permutace lze skládat pomocí tohoto nástroje.

**Použij to pro:** Rychlou tvorbu provozně nasazených kreativních assetů - dlaždice na akce, jmenovky, podpisy, upozornění na CVE, QR kódy, karty na sociální sítě, přepravní štítky, strukturované reporty.

**Nepoužívej to pro:** Zakázkový hero obsah.

---

## Celkový obraz

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

### Struktura repozitáře

```
lolly/
├── engine/           # Platformově nezávislé jádro. Open source (MPL-2.0).
│   └── src/
│       ├── index.ts          # veřejné rozhraní - loader, runtime, template, inputs, url-mode
│       ├── loader.ts         # stáhne a zvaliduje soubory nástroje
│       ├── runtime.ts        # řídí pětikrokový životní cyklus
│       ├── template.ts       # hydratace přes Handlebars + annotateTemplate
│       ├── inputs.ts         # manifest → runtime input model
│       ├── url-mode.ts       # obousměrný převod URL ↔ stav vstupů
│       ├── validate.ts       # validace manifestů podle JSON Schema
│       ├── compose.ts        # řeší vnořené rendery nástrojů (composes)
│       ├── embed.ts          # parsuje přenositelné vkládací URL adresy lolly.tools
│       └── bridge/
│           └── host-v1.ts    # rozhraní TypeScript - kontrakt bridge
│
├── shells/
│   ├── web/          # PWA - hostovaná online; hlavní distribuce
│   │   └── src/
│   │       ├── main.ts           # boot, routing
│   │       ├── theme.ts          # aplikace/ukládání tématu (prevence FOUC)
│   │       ├── bridge/           # webové implementace API HostV1
│   │       │   ├── index.ts      # skládá dohromady všechny části bridge
│   │       │   ├── db.ts         # nastavení IndexedDB
│   │       │   ├── state.ts      # host.state - uložené úpravy
│   │       │   ├── profile.ts    # host.profile - údaje uživatele
│   │       │   ├── assets.ts     # host.assets - katalog + nahrané soubory uživatele
│   │       │   ├── clipboard.ts  # host.clipboard
│   │       │   ├── export.ts     # host.export - rasterizace/serializace
│   │       │   ├── net.ts        # host.net - fetch přes allowlist
│   │       │   └── media.ts      # host.media - živé snímky z kamery (onFrame)
│   │       ├── catalog/
│   │       │   └── sync.ts       # synchronizace katalogu při startu + offline cache
│   │       ├── styles/           # CSS pro celou aplikaci (app.css, picker.css, tokens.css)
│   │       └── views/
│   │           ├── gallery.ts    # výpis knihovny nástrojů + karty uložených stavů
│   │           ├── tool.ts       # mountuje jeden nástroj (vstupy + plátno + akce)
│   │           ├── picker.ts     # UI výběru assetů (vyvolané přes host.assets)
│   │           ├── profile.ts    # editor údajů uživatele
│   │           ├── projects.ts   # /p - složky uložených relací (vnořené; export složky/výběru)
│   │           └── free-canvas.ts # překryvný editor volného plátna pro nástroje s render.layout:"editor"
│   │
│   ├── cli/          # Node.js CLI - stejný engine, headless jsdom
│   │   ├── bin/lolly.ts
│   │   └── src/
│   │       ├── run.ts    # loadTool → createRuntime → export → zápis souboru
│   │       └── bridge.ts # CLI implementace HostV1
│   │
│   ├── tui/          # Interaktivní terminálový shell (Ink) - znovu využívá CLI bridge
│   │   └── src/
│   │       ├── main.tsx  # celoobrazovková aplikace: Gallery / Projects / Profile / ToolView
│   │       └── bridge.ts # CLI bridge + stav na disku pod ~/.lolly
│   │
│   ├── tauri-desktop/ # stažitelná desktopová aplikace
│   └── tauri-mobile/  # aplikace pro iOS/Android
│
├── tools/            # profilový VIEW (v gitignore) - data, ne kód. Sloučeno z balíčků:
│                     #   community/ (veřejný, nezávislý na značce, MPL) + brands/<active>/tools (vlastněný značkou).
│   ├── qr-code/
│   ├── quotes/
│   ├── email-signature/
│   ├── daily-card/        # "Day Brief" - počasí/čas/mapa (načtené inline skriptem v šabloně)
│   ├── code-canvas/
│   ├── countdown-timer/
│   ├── color-palette/
│   ├── color-block/           # typované/heterogenní bloky (diskriminátor addMenu)
│   ├── dynamic-layout/
│   ├── tool-logo/         # "Logo" - logo značky s automatickým přepínáním
│   ├── street-map/        # offline vektorové mapy městských bloků
│   ├── url-shot/          # "URL Screenshot" (schopnost capture)
│   ├── strip-data/        # čištění metadat přímo na zařízení - JPEG/PNG/SVG/PDF (soubor dovnitř → čistý soubor ven)
│   ├── compress-pdf/      # komprese PDF přímo na zařízení - přeenkóduje obrázky (soubor dovnitř → menší soubor ven)
│   ├── brand-lockup/      # "Brand Lockup" - logo lockupy SUSE; HarfBuzz text-to-path (wasm)
│   ├── bag-video/
│   ├── chart-creator/     # SVG grafy ze strukturovaných dat
│   ├── filter-duotone/    # dvoubarevná úprava fotografie
│   ├── filter-halftone/   # fotografie → vektorová rastrová mřížka bodů (halftone)
│   ├── filter-scanline/   # fotografie → retro posterizovaná mřížka scanline (SVG / průhledný rastr)
│   ├── meeting-planner/   # plánovač schůzek napříč časovými pásmy
│   ├── calendar-ics/      # akce → kalendářový soubor .ics plus karta
│   ├── digi-ad/           # "Animated Ad" - smyčkový banner ze scén
│   ├── event-name-badge/  # konferenční jmenovky - skládá qr-code jako SVG
│   ├── wayfinding-signage/ # značení na akce; bloky směrů si samy přizpůsobí text popisku
│   ├── text-helper/       # textová dílna přímo na zařízení (formátování/dekódování/hash/anonymizace)
│   ├── layout-studio/     # "Layout Studio" - volné WYSIWYG editorové plátno (render.layout: editor)
│   ├── multi-page-pdf/    # vícestránkový PDF dokument - obálka, plynoucí obsahové bloky, zadní strana
│   ├── diagram-builder/   # organizační / vrstvené / procesní / cyklické / pyramidové diagramy
│   ├── logo-wall/         # mnoho log → automaticky uspořádaná mřížka
│   ├── logo-lockup-partner/ # společný lockup SUSE + partnera
│   ├── web-icon/          # favicon .ico / png / svg z textu a barev
│   ├── filter-posterize/  # fotografie → ploché posterizované vektorové výtažky
│   ├── filter-pixel-stretch/ # fotografie → efekt roztažených pixelů
│   ├── lottie-digi-ad/    # animované reklamní bannery Lottie
│   └── pose-geeko/        # nastav pózu maskota SUSE Geeko - tiskové statické snímky
│
├── catalog/
│   ├── tools/index.json        # registr nástrojů
│   └── assets/
│       ├── index.json          # registr assetů
│       └── suse/...            # logo, paleta atd.
│
├── schemas/          # JSON Schema pro tool.json, záznamy assetů, AssetRef
├── scripts/          # build-catalog-index.ts, checksum-assets.ts, validate-catalog.ts
├── tests/            # testy enginu
└── docs/             # tento soubor + průvodci tvorbou + positioning
```

---

## Model distribuce platformy

Platforma běží na několika různých plochách - web PWA, Tauri desktop/mobile, skriptovatelné CLI a interaktivní TUI. Všechny používají stejný engine a stejné soubory nástrojů.

### Web (PWA) - hlavní distribuce
Hostovaný na URL adrese pod kontrolou SUSE. Funguje offline, jakmile service worker nakešuje nástroje a assety. Tady bude platformu používat většina zaměstnanců, dodavatelů i partnerů. Účet není potřeba - stav se ukládá do IndexedDB, zvlášť na každém zařízení.

Webový shell je responzivní z jednoho jediného rozvržení. Na desktopu je nástroj postranní panel s ovládacími prvky, který lze měnit velikost, vedle náhledové plochy s navigací po plátně nativní pro trackpad (Cmd/Ctrl-kolečko nebo sevření prstů pro přiblížení kolem kurzoru, mezerník nebo tažení prostředním tlačítkem pro posun, klávesy `0`/`1`/`+`/`−` a HUD s hodnotou Fit/%). Na mobilu (≤640px) se ovládací prvky změní na panel ukotvený nahoře s úchytem pro tažení, který se přichytí na náhled/půl/plnou velikost (klepnutím se přepíná) nad statickým celoobrazovkovým náhledem, a plovoucí tlačítko **Render** otevře ovládací prvky **Export** ve vyskakovacím panelu zespodu. Dotykové ovládání na náhledu podporuje sevření pro přiblížení a tažení pro posun. Vykreslovací cesta a ovládací prvky exportu jsou u obou stejné - mění se jen okolní rozhraní (chrome).

**Dávkový režim (`/pro`).** Webový shell navíc nabízí dávkovou mřížku ve stylu tabulkového procesoru (`shells/web/src/pro/`), která vykreslí najednou spoustu řádků napříč jedním nebo více nástroji. Umí obousměrný převod CSV/TSV i vkládání z tabulkového procesoru, šablonu/formát/velikost/jednotku/dpi pro každý řádek, postranní panel s editorem bloků a živým náhledem, sbalitelné sloupce exportu, lištu se štítky „relevance" pro každý řádek, přeuspořádání řádků tažením za úchyt vlevo, dvoukrokové potvrzení mazání, uložené dávkové relace a stažení jako `.zip`. Tohle je plocha typu jeden-ku-mnoha za pozicováním „hromadná tvorba obsahu".

### Tauri desktop / mobile
Zabalená nativní aplikace (malá velikost díky Tauri). Poskytuje plnou dostupnost offline, přístup k souborovému systému pro nástroje závislé na CLI (PDF Smasher, Font Outliner) a přístup ke kameře. Vylepšení nástrojů naplánováno na polovinu roku 2026.

### CLI
`lolly <tool-id> [--input=value ...] --output=file.png`

Uživatelé desktopu mohou spouštět spoustu nástrojů z terminálu. CLI shell načte stejný engine, vytvoří jsdom DOM, projede stejnou vykreslovací cestou a zapíše soubor. Transportem je režim URL - CLI není samostatná implementace. Díky tomu jsou výstupy z CLI a GUI vždy identické.

```bash
lolly qr-code --url=https://suse.com --output=qr.svg
lolly quotes --quote="Ship it." --output=quote.png
lolly                        # vypíše dostupné nástroje
lolly qr-code                # vypíše vstupy pro tento nástroj
```

### TUI
`npm run tui`

Interaktivní protějšek CLI: celoobrazovková terminálová aplikace ovládaná primárně klávesnicí (postavená na Ink) pro procházení nástrojů, vyplňování vstupů, ukládání projektů a export - a to všechno bez GUI. Její host bridge **znovu využívá implementaci CLI** pro formáty bez DOM (SVG/EMF/EPS/HTML + text/data) a přidává stav na disku pod `~/.lolly` plus volitelný náhled přímo v terminálu. Kromě toho má **vrstvu pro vykreslování v prohlížeči**: rozsahem omezený headless Chromium (ten samý, který instaluje MCP server), který na požádání vytváří rastr/PDF/video a zachytává živé URL adresy - pohání ho sestavená kopie webového shellu, takže výstup je identický, a spouští se, jen když poprvé exportuješ takový formát. Takže `url-shot` (s ořezem + přebarvením + vektorovým PDF/SVG) a úplně každý rastrový/pdf nástroj běží i v terminálu. Viz [průvodce TUI](/info/tui.html).

---

## Kategorie nástrojů

Nástroje mají ve svém manifestu `category` pro seskupování v galerii.

Řádky jsou seřazené v pořadí, v jakém se sekce objevují v galerii. Sekce `utility` se v galerii vždy vykresluje **poslední** (po všech ostatních kategoriích, včetně budoucích) - je to zásuvka „Offline utility" běžící přímo na zařízení.

| Kategorie | Vydané nástroje | Plánované |
|---|---|---|
| `everyone` | QR Code Generator, Quote Card, Email Signature, Day Brief, Code Canvas, Color Block, Dynamic Layout, Logo, Web Icon Maker | Employee Image Stationery |
| `designer` | Brand Lockup, Bag Video, Chart Creator, Street Map, Animated Ad, Multi-Page PDF, Diagram Builder, Logo Lockup: Grid (NASCAR), Logo Lockup: Partner, Filter: Duotone, Filter: Halftone, Filter: Scanline, Filter: Posterize Bitmap, Filter: Pixel Stretch | Font Outliner |
| `event` | Meeting Planner, Event Name Badge, Wayfinding Signage, Calendar ICS | Event Stationery, Bulk Name Badges, Room Agenda Cards |
| `product` | - | CVE Alert, Product Release Announcement, Blog OG Image |
| `utility` | Countdown Timer, Color Palette, URL Screenshot, Strip Hidden Data, Text Helper, Compress PDF, Layout Studio | Převodníky jednotek/formátů, další utility pro soukromí přímo na zařízení |

Nástroje se dál třídí podle stavu: `official` (schválené značkou, bez vodoznaku), `community` (externí příspěvek), `experimental` (exporty s vodoznakem). Dynamic Layout, URL Screenshot, Logo Lockup: Grid (NASCAR), Filter: Posterize Bitmap a Diagram Builder mají momentálně stav `experimental`; Web Icon Maker a Layout Studio jsou nástroje se stavem `community`.

**Layout Studio** je první nástroj postavený na režimu volného plátna `render.layout: "editor"` - plocha bez rozhraní s přímou manipulací, kde přetahuješ, měníš velikost, otáčíš a přichytáváš boxy s textem, tvary a obrázky, a pak exportuješ stejnou vykreslovací cestou jako u každého jiného nástroje.

**Strip Hidden Data** je první **utilita přímo na zařízení** (`privacy: "on-device"`): nástroj pro transformaci obsahu, který vezme soubor, jenž mu *ty* dodáš, celý ho zpracuje v prohlížeči a vrátí čistou kopii - nikdy se nenahrává, nikdy se neopatří vodoznakem, nikdy se do něj nerazí provenience. **Text Helper** je druhá - dílna přímo na zařízení pro každodenní úkoly typu vlož-do-webu (formátování JSON, dekódování JWT, Base64, kódování/dekódování URL, hashování SHA). **Compress PDF** je třetí - zmenší PDF přeenkódováním jeho obrázků, opět celé přímo na zařízení. Všechny tři nesou odznak s textem „Běží na tvém zařízení - nic se nenahrává". Tohle je začátek kategorie utilit pro soukromí, která nahrazuje předávání důvěrných souborů jednoúčelovým webovým nástrojům.

> Poznámka: `category` a `status` se denormalizují do `catalog/tools/index.json` (registr, který čte galerie) z každého `tool.json`. Zdrojem pravdy je manifest - index se **generuje** příkazem `npm run build:catalog` a `npm run validate:catalog` shodí CI, pokud se commitnutý index rozejde s manifesty.

---

## Architektonické závazky

Tahle rozhodnutí jsou uzavřená. Změnit kterékoli z nich je zásadní podnik - formují každé další rozhodnutí v kódové bázi.

### 1. Deklarativní nástroje s imperativní únikovou cestou

Nástroj je manifest (`tool.json`) + šablona (`template.html`) + volitelný `hooks.js`.

**Manifest deklaruje vstupy.** Ne šablona. Vstupy se neodvozují z tokenů Handlebars. Manifest je kontrakt; šablona spotřebovává pojmenované proměnné přes `{{id}}`.

**Hooky jsou volitelné.** Většina nástrojů je čistě deklarativní - manifest + šablona stačí. Nástroje, které potřebují počítané hodnoty (kódování QR, tvarování dat pro graf), dodávají `hooks.js` s pojmenovanými funkcemi životního cyklu (`onInit`, `onInput`, `onFrame` - hook na každý snímek pro živou kameru u nástrojů reagujících na pohyb - `beforeRender`, `beforeExport`, `afterExport` a `exportFile` - transformační cesta soubor-dovnitř/soubor-ven, kterou používají utility přímo na zařízení jako Strip Hidden Data). Host načítá hooky přes `new Function('host', …)`, přičemž capability bridge se vkládá jako closure. Tohle je **kontrakt přenositelnosti, ne bezpečnostní sandbox**: hooky pořád běží v realmu stránky a v prohlížečovém shellu se *mohou* dostat na `window`/`fetch`/`document` - `host.*` je podporovaná, přenositelná plocha, ne vynucená hranice. Výsledky asynchronních hooků mají časový limit (onInit 5 s, onInput 2 s, ostatní 5 s) a pozdní výsledky se zahodí; utíkající *synchronní* hook se přerušit nedá. Nedůvěryhodný kód hooků třetích stran proto není bezpečné spouštět, dokud nedorazí izolace přes Worker.

Na tom záleží, protože: deklarativní nástroje může vytvářet i člověk, který není vývojář. Kdyby byl každý nástroj webovou aplikací, riziková poznámka „omezené dovednosti pro vytváření a údržbu pracovních šablon" by se stala trvalým úzkým hrdlem.

### 2. Nástroje a assety jsou data, ne zabalený kód

Webová i Tauri aplikace při startu stáhnou katalogy nástrojů a assetů ze známé URL adresy, uloží je lokálně do cache a pracují s tím, co tam je. **Přidání nové dlaždice na akci nebo sezónního assetu nevyžaduje vydání nové verze aplikace.**

Bajty assetu se kontrolují checksumem SHA-256, aby se zabránilo otrávení CDN. Invalidaci cache řídí `id` + `version` assetu.

### 3. Capability Bridge je jediné API, které nástroje vidí

Nástroje se nikdy nedotknou DOM mimo oblast své šablony, nikdy nevolají `fetch` přímo, nikdy nečtou souborový systém. Volají verzované metody `host.*`. Bridge je definovaný v `engine/src/bridge/host-v1.ts`:

| Bridge API | Co dělá |
|---|---|
| `host.profile` | Uživatelovo jméno, e-mail, fotka, město atd. Předvyplňuje vstupy přes `bindToProfile`. |
| `host.assets` | Dotazy do katalogu, resolvování assetů, UI výběru poskytnuté hostem. |
| `host.state` | Ukládání a načítání slotů vstupů. IndexedDB na webu, souborový systém na Tauri, paměť na CLI. |
| `host.clipboard` | Zápis textu nebo obrázku do schránky (s platformovými náhradními řešeními). |
| `host.export` | Rasterizuje nebo serializuje cíl vykreslení. Pro experimentální nástroje přidává vodoznak. |
| `host.net` | Fetch přes allowlist - dostupné jen pokud nástroj deklaroval schopnost `"network"`. (Momentálně to nevyužívá žádný vydaný nástroj.) |

Volitelné, přídavné plochy se objeví, jen když je shell poskytne. Dvě z nich jsou **podmíněné schopností** - zpřístupní se, jen když nástroj deklaruje odpovídající příznak: `host.compose` (vloží render jiného nástroje - `compose`) a `host.capture` (zachycení stránky pro URL Screenshot - `capture`). Zbytek se **zjišťuje podle podpory funkce** - je přítomný, kdykoli ho shell dokáže poskytnout: `host.text` (text-to-path přes HarfBuzz WASM; schopnost `wasm` označuje nástroje, které na ní závisí), `host.pdf` (parsování/komprese PDF, používá Strip Hidden Data a Compress PDF) a `host.tokens` (design tokeny DTCG). Deklarovatelné schopnosti jsou: `network`, `filesystem`, `clipboard`, `camera`, `ffmpeg`, `wasm`, `capture`, `compose`.

Stejný nástroj běží v prohlížeči, v Tauri i v headless CLI, protože tohle rozhraní implementuje každý shell - nástroj nikdy neví, ve kterém z nich zrovna je.

Bridge je verzovaný. Přidání metod je minor verze. Odebrání nebo změna signatur je major verze. Až vyjde v2, v1 musí dál fungovat.

### 4. ID assetů jsou navždy

`suse/logo/primary` je kontrakt. Jakmile je jednou publikované:
- ID se nikdy nemění, nikdy se znovu nepoužije.
- Změna bajtů → zvyš `version` v manifestu.
- Nahrazení novým assetem → nastav `deprecated: true` a volitelně `replacedBy`.
- Existující reference se vždy vyresolvují.

Díky tomu jsou uložené stavy nástrojů a odkazy sdílené přes URL trvanlivé napříč roky.

### 5. Režim URL je prvotřídní

Každý vstup musí jít vyjádřit jako parametr URL:

```
lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H
```

Režim CLI je režim URL v jiném transportu - CLI shell sestaví objekt stavu URL z argv a projede **stejnou** pipeline enginu. Existuje jedna jediná vykreslovací cesta. CLI se nemůže rozejít s GUI, protože to není samostatná implementace.

`url-mode.ts` se stará o obousměrný převod (parsování a serializaci). Rezervované parametry (nikdy se nepředávají nástroji jako vstupy): `format`, `export`, `copy`, `slot`, `output`, `filename`, `_v`, `z` (sbalený stav - token „Nejkratší odkaz"), `width`/`w`, `height`/`h`, `unit`, `dpi`, `profile`, `password`, `bleed`, `marks`, `full`, `options`, `nostage`. Vstupy typu asset se v režimu URL serializují podle svého `id`; runtime je před hydratací vyresolvuje přes `host.assets.get()`. `width`/`height` jsou hodnoty v `unit` (výchozí `px`, dále `mm`/`cm`/`in`/`pt`/`pc`); u fyzické jednotky nastavuje rozlišení rastru `dpi`. Nastavují velikost dokumentu na plátně a předvyplňují panel rozměrů exportu.

### 6. Úložiště jde přes bridge, ne napřímo

Webový shell: IndexedDB. Tauri: souborový systém. CLI: paměť. Nástroje vidí jen `host.state.save(slot, data)` a `host.state.load(slot)`. `localStorage` se nepoužívá - je moc malý a neudrží blob.

Uživatelé mohou pro každý nástroj uložit víc pojmenovaných úprav a kdykoli později se ke každé relaci vrátit. Založení účtu není potřeba; stav je vždy pro dané zařízení. Protože bridge je jediný styčný bod, je tenhle stav pro dané zařízení zároveň *přenositelný*: `shells/web/src/data-transfer.ts` přečte úplně všechno zpátky přes `host.profile`/`host.state`/`host.assets` do jediného zipu `lolly-backup`, který se dá naimportovat do jakékoli jiné instalace - offline odpověď na „přesun na nové zařízení", která nepotřebuje server (plná specifikace: `docs/data-transfer.md`). Integrace SUSE ID (synchronizace napříč zařízeními) je budoucí milník navazující na tohle.

### 7. Značky vyspělosti řeší riziko „schváleno značkou" strukturálně

Každý nástroj deklaruje ve svém manifestu `status: official | community | experimental`. Galerie podle stavu třídí. Experimentální nástroje automaticky opatřují své exporty vodoznakem - vodoznak přidává `host.export.render`, ne nástroj, takže ho autor neoficiálního nástroje nemůže vypnout.

Tohle je strukturální odpověď na riziko vnímání, že použití kteréhokoli nástroje znamená schválení značkou. Procesní odpovědi (fronta na revizi, podmínění přes SUSE ID) se vrství navrch.

### 8. Vstupy nástrojů jsou typované přes manifest, včetně assetů

Vstupy deklarují `type`: `text`, `longtext`, `number`, `boolean`, `color`, `select`, `asset`, `date`, `time`, `datetime-local`, `url`, `profile`, `blocks`, `vector` a `file`. Host podle manifestu vykreslí obecný ovládací prvek pro každý typ - nástroje nepíšou žádný kód pro ovládací prvky. Tři z nich mají větší váhu než ostatní:

- **`asset`** (s `filter` a `allowUpload`) je most k celému globálnímu systému assetů; `allowUpload: false` je páka pro vynucení značky u věcí, jako jsou loga na sponzorských dlaždicích, kde jsou povolené jen assety z knihovny. Uživatelské nahrávky mají stejný tvar `AssetRef` jako assety z knihovny, takže s nimi nástroje zacházejí stejně.
- **`blocks`** je opakující se skupina polí - mini-tabulka uvnitř jednoho vstupu, editovaná v postranním panelu, s typovaným/diskriminovaným menu pro přidávání a poli pro assety u jednotlivých bloků. Klik na vykreslený blok na plátně zaostří příslušný řádek. Používají ho `meeting-planner`, `chart-creator`, `event-name-badge`, `wayfinding-signage`, `color-block` a `digi-ad`.
- **`vector`** seskupuje pevnou sadu čísel (např. transformaci) do jednoho složeného ovládacího prvku; **`file`** drží uživatelův vlastní soubor jako bajty v paměti pro utility s transformací přímo na zařízení (např. `strip-data` a `compress-pdf`).

### 9. Šablony jsou bez logiky (Handlebars, ne EJS)

Handlebars byl místo EJS vybraný záměrně:
- Bez logiky. Šablony může vytvářet i člověk, který není vývojář.
- Bezpečný ve výchozím stavu. `{{x}}` HTML-escapuje; `{{{x}}}` je syrový výstup, který si musíš vyžádat.
- Žádný libovolný JS v šablonách znamená žádnou plochu pro XSS audit u jednotlivých šablon.

Logika žije v `hooks.js`, kde je explicitní a dá se recenzovat. Dostupné helpery Handlebars: `{{default}}`, `{{upper}}`, `{{lower}}`, `{{eq}}`, `{{markdown}}`, `{{asset ref}}`, `{{asset ref "property"}}` (plus helpery pro formátování dat `icsStamp`/`rfcText`/`csvCell`, které používají sesterské šablony `.ics`/`.vcf`/`.csv`).

### 10. Nástroje skládají nástroje

Nástroj může vložit render **jiného** nástroje bez jakýchkoli importů mezi nástroji - kompozici řeší engine, nikdy kód nástroje. Existují dvě plochy:

- **Deklarativní manifest** - `composes: [{ id, tool, inputs, format?, width?, height? }]`. Engine vyrenderuje pojmenovaného potomka a výsledek umístí do bezlogické šablony jako `{{asset <id>}}`. `event-name-badge` dnes skládá `qr-code` jako SVG.
- **Přenositelná vkládací URL** - `<img src="https://lolly.tools/tool/<id>.<ext>?<inputs>">`. Shell vyrenderuje tohoto potomka **lokálně** (dokud se lokální render nedokončí, zobrazuje se zástupný pixel); z `lolly.tools` se nikdy nic nestahuje.

Vložit lze render libovolného nástroje: potomek ve formátu **SVG** zůstává skutečným vektorem, když rodič exportuje do SVG nebo PDF, a pro PNG se ostře rasterizuje; potomci **PNG/JPG/WEBP** se vkládají jako obrázky. Vyžaduje schopnost `compose`. Vložení potomci jsou mezikroky - nikdy se neopatřují vodoznakem ani se do nich nerazí provenience - a kompozice degraduje elegantně: shell, který potomka neumí vyrenderovat, daný slot prostě vynechá a rodič se přesto vykreslí.

---

## Co jsme se záměrně rozhodli nedělat

- **Žádné EJS / žádný libovolný JS v šablonách.** Plocha pro XSS je nulová. Logika žije v `hooks.js`.
- **Žádný CMS pro assety.** Katalog assetů je git. Aktualizace prochází revizí PR. Žádné UI pro nahrávání, žádná autentizace, žádná fronta na moderaci. Revize v gitu _je_ moderace.
- **Žádné RBAC v MVP.** Veřejný přístup. Riziko pro značku se řídí přes značky vyspělosti + vodoznaky + strukturální fakt, že všechny assety, které uživatelé vidí, prošly revizí PR.
- **Žádná centrální databáze.** Veškerý stav uživatele je vázaný na zařízení. Integrace SUSE ID je na roadmapě, ale není blokátorem spuštění.
- **Žádná sdílená cesta kódu nástrojů/enginu.** Engine je open source; `tools/` a `assets/` zůstávají proprietární obsah SUSE ve vlastních repozitářích. Oddělení je vynucené (žádné cross-importy), takže rozdělení zůstává čisté.

---

## Životní cyklus od začátku do konce

Uživatel otevře `lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H`:

1. **Boot.** Webový shell otevře IndexedDB, sestaví capability bridge a synchronizuje katalogy nástrojů a assetů (nebo je při offline stavu načte z cache).
2. **Route.** URL hash → view `tool`, s vytaženým `qr-code` a parametry URL.
3. **Load.** `loadTool('qr-code', fetchFile)` stáhne `tool.json`, zvaliduje ho podle JSON Schema, stáhne `template.html`, `styles.css` a zdroj `hooks.js`.
4. **Parse URL state.** `parseUrlState` přeloží parametry URL na počáteční hodnoty vstupů. Reference na assety (`?logo=suse/logo/primary`) se parsují jako odlehčené objekty `{ id, _unresolved: true }`.
5. **Runtime.** `createRuntime(tool, host, initialValues)` sestaví model vstupů (sloučí data z profilu, výchozí hodnoty a počáteční hodnoty), vyresolvuje reference na assety přes `host.assets.get()`, načte hooky (`host` v rozsahu closure, ne v sandboxu) a zavolá `hooks.onInit`.
6. **Render.** Shell se přihlásí k odběru runtime; při každé změně stavu dostane `{ model, hydrated }`. Z modelu vykreslí ovládací prvky vstupů a zapíše hydratované HTML šablony do `#tool-canvas`.
7. **Interact.** Uživatel píše do vstupu → `runtime.setInput(id, value)` → uplatní se omezení → zavolá se `hooks.onInput` → znovu hydratace → znovu vykreslení. Plátno se aktualizuje živě.
8. **Export.** Uživatel klikne na Stáhnout(PNG) → `runtime.export(canvasNode, 'png')` → `host.export.render` (rasterizuje přes dom-to-image-more; SVG/PDF prochází přes vyhrazené vektorizéry procházející DOM) → blob → `host.export.download`. Škála formátů, do kterých se nástroj může zapojit, je široká: `svg`, `png`, `jpg`/`jpeg`, `webp`, `avif`, `pdf`, vektorové formáty `emf`, `eps`, dále tiskové/CMYK formáty `pdf-cmyk`, `cmyk-tiff`, `eps-cmyk`; video formáty `webm`, `mp4`, `gif`; a datové/textové formáty `html`, `md`, `txt`, `json`, `csv`, `ics`, `vcf`, `ico`, `zip`. (Nástroje, které nastaví `render.export: false` - např. Color Palette, Countdown Timer, Strip Hidden Data, Text Helper, Compress PDF - skryjí ovládací prvky stažení/formátu/rozměrů.) Fyzické jednotky se tady převádí podle formátu (PDF → skutečné body stránky, rastr → pixely při daném DPI s chunkem `pHYs`). Metadata o autorství/provenienci (autor, nástroj, zdroj - sestavuje je `engine/src/metadata.ts`) se vkládají podle formátu: PNG iTXt, JPEG EXIF, PDF info dict, SVG `<metadata>`, komentář GIF. Experimentální nástroje dostanou vodoznak vložený hostem, ne nástrojem.

Stejný životní cyklus v Tauri. Stejný životní cyklus v CLI - jsdom poskytuje headless DOM; výstup jde do souboru nebo na stdout.

---

## Stav open source

Adresáře `engine/`, `shells/`, `schemas/` a `docs/` jsou open source pod licencí **MPL-2.0** - platforma nezávislá na dodavateli, která je základovou kostrou pro brandové nástroje, kde je každá vydatelná jednotka rozdělená do vlastního repozitáře pod [github.com/lolly-tools](https://github.com/lolly-tools). `tools/` a `catalog/assets/` jsou obsah specifický pro SUSE a zůstávají **proprietární majetek SUSE** (všechna práva vyhrazena - viz `NOTICE.md` každého repozitáře); MPL se na ně nevztahuje.

Rozdělení je vynucené - z `engine/` do `tools/` nebo `assets/` nevedou žádné cross-importy - takže hranice mezi platformou a obsahem zůstává čistá.

---

## Plán vývoje

| Milník | Termín | Co |
|---|---|---|
| **Počáteční nástroje** | ✅ Hotovo | QR Code, Quote Card, Email Signature, Day Brief, Code Canvas, Countdown Timer, Color Palette, Brand Lockup, Bag Video, Chart Creator, Filter: Duotone, Meeting Planner - webový shell živě |
| **Vylepšit současné nástroje** | Polovina 2026 ✅ Hotovo  | Stažitelná offline aplikace (Tauri); další nástroje pro zaměstnance a akce; bohatší exportní pipeline (stabilita text-to-path, metadata, další formáty - viz `plans.md`) |
| **Uvolnit engine jako open source** | Konec 2026 ✅ Hotovo  | Engine, shelly, schemas, docs jdou na veřejnost - brandované tools/assets ne |
| **Přenos mezi zařízeními** | ✅ Hotovo | Přenositelný balíček `lolly-backup` nese profil, uložené relace, nahrané obrázky a předvolby mezi libovolnými dvěma instalacemi - offline i online, bez účtu. Zpětně kompatibilní obálka s kontrolou integrity (specifikace: `docs/data-transfer.md`) |
| **Vytvořit formální plán nástrojů** | Konec 2026 | Referenční sady pro zákazníky, AI import návrhů, režim požadavků GET/URL |
| **Utility pro soukromí přímo na zařízení** | 🚧 Probíhá | Nástroje pro transformaci obsahu, které lokálně zpracují *tvůj vlastní* soubor (soubor dovnitř → čistý soubor ven), a nahrazují tak exfiltraci do jednoúčelového SaaS. **Hotovo:** typ vstupu `file` + transformační cesta `exportFile` + konvence `privacy:"on-device"` (bez vodoznaku/provenience) + **Strip Hidden Data** (metadata JPEG/PNG/SVG/PDF, PDF přes bridge `host.pdf`) a **Text Helper** (dílna přímo na zařízení pro každodenní úkoly typu vlož-do-webu - formátování JSON, dekódování JWT, Base64, kódování/dekódování URL, hashování SHA, plus skupina Novelty). **Další krok:** ořez/změna velikosti, konverze/komprese obrázků; pak bridge kodeků `host.image` (specifikace: `plans/exfiltration-app-content.md`) |
| **Design tokeny (DTCG)** | 🚧 Barvy vydané | Primitiva značky jako kanonické [W3C Design Tokens (DTCG)](https://www.designtokens.org/TR/drafts/format/) - formát, který [Penpot importuje/exportuje](https://help.penpot.app/user-guide/design-systems/design-tokens/). **Hotovo:** barevné tokeny (`suse/tokens/brand`), bridge `host.tokens`, vzorníky ve výběru + hodnoty provázané referencemi (specifikace: `docs/design-tokens.md`). **Další krok:** tokeny pro rozměry/typografii, import/export Penpot, uživatelské tokeny v přenosovém balíčku (`tokens.json`) |
| **Endpoint MCP agenta (render)** | ✅ Hotovo | Server [MCP](https://modelcontextprotocol.io) zpřístupňuje katalog + vykreslovací cestu jako volatelné nástroje (`lolly_list_tools` / `describe_tool` / `build_url` / `render` / `transform`), takže kterýkoli agent může vyprodukovat hotové assety podřízené pravidlům - přidej ho do libovolného MCP klienta jako vlastní konektor (OAuth 2.1), nebo na něj namiř CLI/HTTP klienta s bearer tokenem. Běží na `mcp.lolly.tools` (plný endpoint: rastr/PDF/animace/video přes hostovaný headless prohlížeč) a `lolly.tools/api/mcp` (serverless vrstva bez prohlížeče). Liší se od *autorského* MCP pro Penpot níže, který se týká **tvorby** nástrojů (specifikace: `plans/mcp-server.md`; průvodce: `docs/mcp.md` + `docs/ai-agents.md`) |
| **Import souborů Penpot jako nástrojů** | 2027+ | Importuj soubor Penpot a zpřístupni ho *jako nástroj Lolly* (deklarativní, založený na omezeních) - návrhy vytvořené v Penpotu se tak mění v deterministické generátory |
| **MCP + rozšíření pro Penpot (autorská tvorba jen online)** | 2027+ | MCP server pro Penpot artikuluje nové nástroje s pomocí AI - nejvizuálnější způsob, jak vytvářet deterministické šablony: první kolo informované značkou, dotažené s člověkem v procesu, s cílem časem zvládat nové kontexty na jeden zátah. *Tvorba* nástrojů je jen online; nástroje, které vyprodukuje, běží kdekoli |
| **RBAC + SUSE ID** | 2027+ | Podmínit konkrétní nástroje přes SUSE ID; uložený stav napříč zařízeními; import/export z/do Google Drive |

---

## Kde končí engine a začíná host

Pokud to jde popsat čistě daty + Handlebars → **engine**.
Pokud se to dotýká DOM, souborového systému, sítě nebo jakéhokoli API prohlížeče/OS → **host**.

Hranice je ostrá záměrně. Engine je ta open-source část. Všechno, co ví o SUSE, konkrétních platformách nebo runtime prostředích, zůstává mimo něj.
