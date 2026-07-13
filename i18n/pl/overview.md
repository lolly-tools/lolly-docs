# Przegląd

![Ikona Lolly – duży zielono-biały cukierek lizak](https://lolly.tools/info/icon.avif)

Ten dokument opisuje cel, strukturę i decyzje architektoniczne platformy Lolly. Odzwierciedla zarówno wizję produktu, jak i aktualny stan bazy kodu.

> **Status:** Lolly to wewnętrzny prototyp w **zamkniętym pilotażu, który jeszcze się nie zakończył**. Silnik jest deterministyczny i wewnętrznie spójny, ale produkt jest na wczesnym etapie — SUSE to klient numer jeden — a jego silniki kryptografii i parsowania plików przechodzą właśnie rygorystyczne hartowanie infrastruktury po stronie SUSE, przygotowując się do skali korporacyjnej (jesteśmy w tym naprawdę dobrzy). Traktuj opisaną poniżej architekturę jako intencję projektową w trakcie testów, a nie gotowy, certyfikowany produkt. Zobacz [Adopcja i zarządzanie](/info/adoption-governance.html#status), aby dowiedzieć się, jak prowadzony i mierzony jest pilotaż.

---

## Dlaczego to istnieje

Zespoły mierzą się z powracającym problemem: powtarzalna praca kreatywna i contentowa, która jest zbyt przewidywalna, by za każdym razem angażować specjalistów, ale zbyt wrażliwa na jakość, by przekazać ją dalej bez zabezpieczeń. Efektem jest albo niska przepustowość (wąskie gardło u specjalisty), niespójność (ludzie używają dowolnego narzędzia, jakie mają pod ręką), albo uzależnienie od dostawcy (SaaS-owy DAM kontrolujący twoje szablony).

Ta platforma to strukturalna odpowiedź:

> **Programowe tworzenie treści i materiałów kreatywnych na dużą skalę** — generowanie zasobów bez nakładu pracy, z regułami pod centralną kontrolą, dla pracowników, dostawców i partnerów.

Rezultatem jest **obfitość**: każde wydarzenie ma poprawne oznakowanie, każdy alert CVE jest zgodny ze stylem firmy, każda etykieta drukuje się czysto, każda stopka e-mail jest aktualna — a wszystko to bez zgłoszenia do działu projektowego. Platforma obsługuje powtarzalną, zoperacjonalizowaną pracę kreatywną. Celowo nie jest narzędziem do tworzenia dedykowanych projektów — projektanci nadal odpowiadają za flagowe prace.

### Gdzie plasuje się na tle rynku

| Funkcja | Canva | Portale brandowe | Illustrator | Figma / Penpot | **Lolly** |
|---|---|---|---|---|---|
| Masowe generowanie treści | częściowo | ✗ | ✗ | ✗ | **✓** |
| Działa w pełni offline | ✗ | ✗ | ✓ | częściowo | **✓** |
| Logika szablonów i twarde ograniczenia | ✗ | częściowo | ✗ | częściowo | **✓** |
| Nie wymaga umiejętności projektowych | częściowo | ✓ | ✗ | ✗ | **✓** |
| Automatyczne Content Credentials | ✗ | ✗ | częściowo | ✗ | **✓** |
| Narzędzia komponują inne narzędzia | ✗ | ✗ | ✗ | ✗ | **✓** |
| Otwarty silnik, bez uwięzienia w SaaS | ✗ | ✗ | ✗ | częściowo | **✓** |
| Poświadczenia treści C2PA | ✗ | ✗ | ✗ | ✗ | **✓** |
| Opcjonalna proweniencja na poziomie kryminalistycznym | ✗ | ✗ | ✗ | ✗ | **✓** |
| Aplikacje mobilne i desktopowe | ✓ | ✗ | ✗ | częściowo | **✓** |
| Wiersz poleceń i TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

Luka jest oczywista: nic w istniejącym krajobrazie nie daje nam efektu, który stawia ograniczenia na pierwszym miejscu, działa offline, nie wymaga wysokich umiejętności i jest dostępny wewnętrznie. Lolly zawiera nawet otwarte płótno — **Layout Studio** — gdzie kolory, typografia i zasoby są zgodne z globalnymi ustawieniami marki, więc swobodna aranżacja pozostaje wierna zasadzie ograniczeń w pierwszej kolejności. Czym Lolly **nie** jest, to nieograniczonym pakietem projektowym: projektanci nadal używają Illustratora i Figmy do dedykowanych, flagowych prac. Za pomocą tego narzędzia można składać permutacje.

**Używaj do:** Szybkiego generowania zoperacjonalizowanych zasobów kreatywnych — kafelków wydarzeń, identyfikatorów, stopek, alertów CVE, kodów QR, kart do mediów społecznościowych, etykiet wysyłkowych, ustrukturyzowanych raportów.

**Nie używaj do:** Dedykowanych treści flagowych.

---

## Ogólny obraz

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

### Struktura repozytorium

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

## Model dostarczania platformy

Platforma działa na kilku powierzchniach — web PWA, desktop/mobile Tauri, skryptowalny CLI oraz interaktywny TUI. Wszystkie korzystają z tego samego silnika i tych samych plików narzędzi.

### Web (PWA) — główny kanał dystrybucji
Hostowany pod adresem URL kontrolowanym przez SUSE. Działa offline, gdy service worker zbuforuje narzędzia i zasoby. Tutaj większość pracowników, dostawców i partnerów będzie korzystać z platformy. Konto nie jest wymagane — stan jest przechowywany w IndexedDB na każdym urządzeniu osobno.

Powłoka webowa jest responsywna w ramach jednego układu. Na desktopie narzędzie to pasek boczny z regulowaną szerokością obok sceny podglądu, z natywną dla gładzika nawigacją po kanwie (Cmd/Ctrl-scroll lub uszczypnięcie, by przybliżać względem kursora, Spacja- lub przeciąganie środkowym przyciskiem, by przesuwać, klawisze `0`/`1`/`+`/`−` oraz HUD Dopasuj/%). Na urządzeniu mobilnym (≤640px) elementy sterujące zamieniają się w zakotwiczony u góry arkusz z uchwytem do przeciągania, który przyciąga się do pozycji podejrzenie/połowa/pełny (dotknięcie przełącza) nad statycznym pełnoekranowym podglądem, a pływający przycisk **Render** otwiera elementy sterujące **Eksportu** w wyskakującym arkuszu na dole. Dotyk umożliwia przybliżanie uszczypnięciem i przesuwanie przeciąganiem po podglądzie. Ścieżka renderowania i elementy sterujące eksportem są identyczne w obu przypadkach — przepływa jedynie chrome interfejsu.

**Tryb wsadowy (`/pro`).** Powłoka webowa dostarcza też siatkę wsadową w stylu arkusza kalkulacyjnego (`shells/web/src/pro/`), która renderuje wiele wierszy naraz w jednym lub wielu narzędziach. Obsługuje round-trip CSV/TSV oraz wklejanie z arkusza, szablon/format/rozmiar/jednostkę/dpi per wiersz, boczny panel edytora bloków z podglądem na żywo, zwijane kolumny eksportu, pasek tagów „trafności” per wiersz, zmianę kolejności wierszy przez uchwyt do przeciągania po lewej, dwustopniowe potwierdzenie usunięcia, zapisane sesje wsadowe oraz pobieranie `.zip`. To powierzchnia „jeden-do-wielu” stojąca za pozycjonowaniem „masowego generowania treści”.

### Desktop / mobile Tauri
Spakowana natywna aplikacja (mały footprint dzięki Tauri). Zapewnia pełną dostępność offline, dostęp do systemu plików dla narzędzi zależnych od CLI (PDF Smasher, Font Outliner) oraz dostęp do kamery. Rozbudowa narzędzi zaplanowana na połowę 2026.

### CLI
`lolly <tool-id> [--input=value ...] --output=file.png`

Użytkownicy desktopu mogą uruchamiać wiele narzędzi z terminala. Powłoka CLI ładuje ten sam silnik, tworzy DOM w jsdom, wykonuje tę samą ścieżkę renderowania i zapisuje plik. Transportem jest tryb URL — CLI nie jest odrębną implementacją. Gwarantuje to, że wyniki z CLI i GUI są identyczne.

```bash
lolly qr-code --url=https://suse.com --output=qr.svg
lolly quotes --quote="Ship it." --output=quote.png
lolly                        # lists available tools
lolly qr-code                # lists inputs for that tool
```

### TUI
`npm run tui`

Interaktywny odpowiednik CLI: pełnoekranowa, sterowana głównie klawiaturą aplikacja terminalowa (zbudowana na Ink) do przeglądania narzędzi, wypełniania danych wejściowych, zapisywania projektów i eksportowania — wszystko bez GUI. Jego host bridge **wykorzystuje ponownie implementację CLI** dla formatów niewymagających DOM (SVG/EMF/EPS/HTML + tekst/dane) i dodaje stan na dysku w `~/.lolly` oraz opcjonalny podgląd inline. Poza tym ma **poziom renderowania przez przeglądarkę**: ograniczony zakresowo bezgłowy Chromium (ten sam, który instaluje serwer MCP), który na żądanie produkuje raster/PDF/wideo oraz przechwytywanie URL na żywo — napędzając zbudowaną kopię powłoki webowej, tak by wynik był identyczny, i uruchamiając się dopiero przy pierwszym eksporcie takiego formatu. Dzięki temu `url-shot` (z kadrowaniem + zmianą kolorów + wektorowym PDF/SVG) oraz każde narzędzie raster/pdf działa również w terminalu. Zobacz [przewodnik TUI](/info/tui.html).

---

## Kategorie narzędzi

Narzędzia są oznaczone kategorią `category` w swoim manifeście na potrzeby grupowania w galerii.

Wiersze są wymienione w kolejności sekcji galerii. Sekcja `utility` renderuje się w galerii zawsze **na końcu** (po każdej innej kategorii, w tym przyszłych) — to szuflada „Narzędzia offline” działająca na urządzeniu.

| Kategoria | Dostarczone narzędzia | Planowane |
|---|---|---|
| `everyone` | QR Code Generator, Quote Card, Email Signature, Day Brief, Code Canvas, Color Block, Dynamic Layout, Logo, Web Icon Maker | Employee Image Stationery |
| `designer` | Brand Lockup, Bag Video, Chart Creator, Street Map, Animated Ad, Multi-Page PDF, Diagram Builder, Logo Lockup: Grid (NASCAR), Logo Lockup: Partner, Filter: Duotone, Filter: Halftone, Filter: Scanline, Filter: Posterize Bitmap, Filter: Pixel Stretch | Font Outliner |
| `event` | Meeting Planner, Event Name Badge, Wayfinding Signage, Calendar ICS | Event Stationery, Bulk Name Badges, Room Agenda Cards |
| `product` | — | CVE Alert, Product Release Announcement, Blog OG Image |
| `utility` | Countdown Timer, Color Palette, URL Screenshot, Strip Hidden Data, Text Helper, Compress PDF, Layout Studio | Unit/format converters, more on-device privacy utilities |

Narzędzia są też klasyfikowane według statusu: `official` (zatwierdzone przez markę, bez znaku wodnego), `community` (wkład zewnętrzny), `experimental` (eksporty ze znakiem wodnym). Dynamic Layout, URL Screenshot, Logo Lockup: Grid (NASCAR), Filter: Posterize Bitmap oraz Diagram Builder mają obecnie status `experimental`; Web Icon Maker i Layout Studio są dostarczane jako narzędzia `community`.

**Layout Studio** to pierwsze narzędzie zbudowane w trybie swobodnej kanwy `render.layout: "editor"` — pozbawiona chrome powierzchnia bezpośredniej manipulacji, na której przeciągasz, zmieniasz rozmiar, obracasz i przyciągasz do siatki ramki z tekstem, kształtami i obrazami, a następnie eksportujesz przez tę samą ścieżkę renderowania co każde inne narzędzie.

**Strip Hidden Data** to pierwsze **narzędzie działające na urządzeniu** (`privacy: "on-device"`): narzędzie transformujące treść, które przyjmuje plik dostarczony przez *Ciebie*, przetwarza go w całości w przeglądarce i zwraca czystą kopię — nigdy nieprzesłaną na serwer, nigdy nieoznaczoną znakiem wodnym, bez wtłoczonych danych o pochodzeniu. **Text Helper** to drugie — działający na urządzeniu warsztat do codziennych zadań typu wklej-na-stronę (formatowanie JSON, dekodowanie JWT, Base64, kodowanie/dekodowanie URL, haszowanie SHA). **Compress PDF** to trzecie — zmniejsza plik PDF przez ponowną kompresję jego obrazów, ponownie w całości na urządzeniu. Wszystkie trzy noszą tekst plakietki „Działa na Twoim urządzeniu — nic nie jest przesyłane”. To początek kategorii narzędzi prywatności, która zastępuje przekazywanie poufnych plików stronom o jednym przeznaczeniu.

> Uwaga: `category` i `status` są denormalizowane do `catalog/tools/index.json` (rejestr, który czyta galeria) z każdego `tool.json`. Manifest jest źródłem prawdy — indeks jest **generowany** przez `npm run build:catalog`, a `npm run validate:catalog` powoduje niepowodzenie CI, jeśli zacommitowany indeks rozejdzie się z manifestami.

---

## Zobowiązania architektoniczne

Te decyzje są przesądzone. Zmiana którejkolwiek z nich to poważne przedsięwzięcie — kształtują one każdą inną decyzję w bazie kodu.

### 1. Narzędzia deklaratywne, z imperatywną furtką awaryjną

Narzędzie to manifest (`tool.json`) + szablon (`template.html`) + opcjonalny `hooks.js`.

**To manifest deklaruje wejścia.** Nie szablon. Wejścia nie są wywnioskowane z tokenów Handlebars. Manifest jest kontraktem; szablon konsumuje nazwane zmienne przez `{{id}}`.

**Hooki są opcjonalne.** Większość narzędzi jest czysto deklaratywna — manifest + szablon wystarczą. Narzędzia potrzebujące wartości obliczanych (kodowanie QR, kształtowanie danych wykresów) dostarczają `hooks.js`, który udostępnia nazwane funkcje cyklu życia (`onInit`, `onInput`, `onFrame` — hook wywoływany dla każdej klatki kamery na żywo w narzędziach reagujących na ruch — `beforeExport`, `afterExport` oraz `exportFile` — ścieżka transformacji plik-wejście/plik-wyjście używana przez narzędzia działające na urządzeniu, takie jak Strip Hidden Data). (`beforeRender` jest zarezerwowany w kontrakcie hooków, ale obecnie nie ma miejsca wywołania — nie polegaj na nim.) Host ładuje hooki przez `new Function('host', …)`, wstrzykując pomost możliwości jako zasięg domknięcia. To **kontrakt przenośności, a nie piaskownica bezpieczeństwa**: hooki nadal działają w kontekście strony i *mogą* sięgnąć po `window`/`fetch`/`document` w powłoce przeglądarkowej — `host.*` to wspierana, przenośna powierzchnia, a nie wymuszona granica. Wyniki hooków asynchronicznych mają wyznaczony limit czasu (onInit 5 s, onInput 2 s, pozostałe 5 s), a spóźnione wyniki są odrzucane; niekontrolowanego hooka *synchronicznego* nie da się wywłaszczyć. Dlatego niezaufany kod hooków od podmiotów trzecich nie jest bezpieczny do uruchamiania, dopóki nie pojawi się izolacja przez Worker.

Ma to znaczenie, ponieważ: narzędzia deklaratywne mogą tworzyć osoby niebędące programistami. Gdyby każde narzędzie było aplikacją webową, uwaga o ryzyku „ograniczone umiejętności tworzenia/utrzymania podstawowych szablonów” staje się trwałym wąskim gardłem.

### 2. Narzędzia i zasoby to dane, a nie dołączony kod

Aplikacje webowa i Tauri pobierają katalogi narzędzi i zasobów ze znanego adresu URL przy starcie, buforują je lokalnie i działają na tym, co jest dostępne. **Dodanie nowego kafelka wydarzenia lub zasobu sezonowego nie wymaga wydania aplikacji.**

Bajty zasobów są opatrzone sumą kontrolną SHA-256, aby zapobiec zatruwaniu CDN. Unieważnianie pamięci podręcznej jest sterowane przez `id` + `version` zasobu.

### 3. Pomost możliwości to jedyne API, jakie widzą narzędzia

Narzędzia nigdy nie dotykają DOM poza obszarem swojego szablonu, nigdy nie wywołują `fetch` bezpośrednio, nigdy nie czytają systemu plików. Wywołują wersjonowane metody `host.*`. Pomost jest zdefiniowany w `engine/src/bridge/host-v1.ts`:

| API pomostu | Co robi |
|---|---|
| `host.profile` | Imię, e-mail, zdjęcie profilowe, miasto itp. użytkownika. Wstępnie wypełnia wejścia przez `bindToProfile`. |
| `host.assets` | Zapytania do katalogu, rozwiązywanie zasobów, dostarczany przez hosta interfejs wyboru. |
| `host.state` | Zapis / wczytywanie slotów wejść. IndexedDB w wersji webowej, system plików w Tauri, pamięć w CLI. |
| `host.clipboard` | Zapis tekstu lub obrazu do schowka (z rozwiązaniami zastępczymi dla platform). |
| `host.export` | Rasteryzacja lub serializacja celu renderowania. Nakłada znak wodny dla narzędzi eksperymentalnych. |
| `host.net` | Fetch z listy dozwolonych — dostępny tylko, jeśli narzędzie zadeklarowało możliwość `"network"`. (Żadne wydane narzędzie obecnie z niego nie korzysta.) |

Opcjonalne, dodatkowe powierzchnie pojawiają się tylko wtedy, gdy zapewnia je powłoka. Dwie są **bramkowane możliwością** — udostępniane tylko, gdy narzędzie zadeklaruje odpowiednią flagę: `host.compose` (osadzenie renderu innego narzędzia — `compose`) oraz `host.capture` (przechwytywanie strony dla URL Screenshot — `capture`). Pozostałe są **wykrywane funkcjonalnie** — obecne zawsze, gdy powłoka może je zapewnić: `host.text` (tekst na ścieżkę przez HarfBuzz WASM; możliwość `wasm` oznacza narzędzia, które na nim polegają), `host.pdf` (parsowanie/kompresja PDF, używane przez Strip Hidden Data i Compress PDF) oraz `host.tokens` (tokeny projektowe DTCG). Deklarowalne możliwości to: `network`, `filesystem`, `clipboard`, `camera`, `ffmpeg`, `wasm`, `capture`, `compose`.

To samo narzędzie działa w przeglądarce, Tauri i bezgłowym CLI, ponieważ każda powłoka implementuje ten interfejs — narzędzie nigdy nie wie, w której się znajduje.

Pomost jest wersjonowany. Dodanie metod to wersja minor. Usunięcie lub zmiana sygnatur to podniesienie wersji major. Gdy pojawi się v2, v1 musi nadal działać.

### 4. Identyfikatory zasobów są wieczne

`suse/logo/primary` to kontrakt. Po opublikowaniu:
- Identyfikator nigdy się nie zmienia i nigdy nie jest używany ponownie.
- Zmiana bajtów → podnieś `version` w manifeście.
- Zastąpiony nowym zasobem → ustaw `deprecated: true` i opcjonalnie `replacedBy`.
- Istniejące odwołania zawsze się rozwiązują.

Dzięki temu zapisane stany narzędzi i linki udostępniane przez URL są trwałe przez lata.

### 5. Tryb URL jest pełnoprawny

Każde wejście musi dać się wyrazić jako parametr URL:

```
lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H
```

Tryb CLI to tryb URL w innym transporcie — powłoka CLI buduje obiekt stanu URL z argv i uruchamia **ten sam** potok silnika. Istnieje jedna ścieżka renderowania. CLI nie może odejść od GUI, bo nie jest osobną implementacją.

`url-mode.ts` obsługuje obieg w obie strony (parsowanie i serializację). Parametry zarezerwowane (nigdy nieprzekazywane do narzędzia jako wejścia): `format`, `export`, `copy`, `slot`, `output`, `filename`, `_v`, `z` (stan spakowany — token „Najkrótszy link”), `width`/`w`, `height`/`h`, `unit`, `dpi`, `profile`, `password`, `bleed`, `marks`, `full`, `options`, `nostage`. Wejścia typu asset w trybie URL są serializowane przez ich `id`; środowisko uruchomieniowe rozwiązuje je przez `host.assets.get()` przed hydratacją. `width`/`height` to wartości w jednostce `unit` (domyślnie `px`, także `mm`/`cm`/`in`/`pt`/`pc`); przy jednostce fizycznej `dpi` ustawia rozdzielczość rastra. Ustawiają rozmiar dokumentu na kanwie i wstępnie wypełniają panel wymiarów eksportu.

### 6. Pamięć przechodzi przez pomost, nie bezpośrednio

Powłoka webowa: IndexedDB. Tauri: system plików. CLI: w pamięci. Narzędzia widzą tylko `host.state.save(slot, data)` i `host.state.load(slot)`. `localStorage` nie jest używany — jest zbyt mały i nie pomieści blobów.

Użytkownicy mogą zapisać wiele nazwanych slotów edycji dla każdego narzędzia i wracać później do każdej sesji. Nie jest wymagane zakładanie konta; stan jest przypisany do urządzenia. Ponieważ pomost jest jedynym szwem, ten stan urządzenia jest również *przenośny*: `shells/web/src/data-transfer.ts` odczytuje wszystko z powrotem przez `host.profile`/`host.state`/`host.assets` do pojedynczego archiwum zip `lolly-backup`, które importuje się w każdej innej instalacji — offline’owa odpowiedź na „przenieś się na nowe urządzenie”, która nie potrzebuje serwera (pełna specyfikacja: `docs/data-transfer.md`). Integracja z SUSE ID (synchronizacja między urządzeniami) to przyszły kamień milowy zbudowany na tym fundamencie.

### 7. Etykiety dojrzałości strukturalnie odpowiadają na ryzyko „zatwierdzenia przez markę”

Każde narzędzie deklaruje w swoim manifeście `status: official | community | experimental`. Galeria sortuje według statusu. Narzędzia eksperymentalne automatycznie nakładają znak wodny na swoje eksporty — znak wodny nakłada `host.export.render`, a nie narzędzie, więc autor nieoficjalnego narzędzia nie może z niego zrezygnować.

To strukturalna odpowiedź na ryzyko postrzegania, że użycie dowolnego narzędzia oznacza zatwierdzenie przez markę. Odpowiedzi proceduralne (kolejka recenzji, bramkowanie przez SUSE ID) nakładają się na to.

### 8. Wejścia narzędzi są typowane przez manifest, wraz z zasobami

Wejścia deklarują `type`: `text`, `longtext`, `number`, `boolean`, `color`, `select`, `asset`, `date`, `time`, `datetime-local`, `url`, `profile`, `blocks`, `vector` oraz `file`. Host renderuje ogólną kontrolkę dla każdego typu na podstawie manifestu — narzędzia nie piszą ani linijki kodu kontrolek. Trzy mają większe znaczenie niż pozostałe:

- **`asset`** (z `filter` i `allowUpload`) to pomost do globalnego systemu zasobów; `allowUpload: false` to dźwignia egzekwowania marki dla rzeczy takich jak logotypy na kafelkach sponsorów, gdzie dozwolone są tylko zasoby z biblioteki. Przesłane przez użytkownika pliki używają tego samego kształtu `AssetRef` co zasoby biblioteczne, więc narzędzia obsługują je identycznie.
- **`blocks`** to powtarzalna grupa pól — mini-tabela wewnątrz jednego wejścia, edytowana w panelu bocznym, z typowanym/rozróżnianym menu dodawania i polami zasobów dla każdego bloku. Kliknięcie wyrenderowanego bloku na kanwie ustawia fokus na wierszu tego bloku. Używane przez `meeting-planner`, `chart-creator`, `event-name-badge`, `wayfinding-signage`, `color-block` i `digi-ad`.
- **`vector`** grupuje stały zestaw liczb (np. transformację) w jedną złożoną kontrolkę; **`file`** przechowuje własny plik użytkownika jako bajty w pamięci dla narzędzi transformujących działających na urządzeniu (np. `strip-data` i `compress-pdf`).

### 9. Szablony są pozbawione logiki (Handlebars, nie EJS)

Handlebars wybrano zamiast EJS celowo:
- Pozbawione logiki. Szablony mogą tworzyć osoby niebędące programistami.
- Bezpieczne domyślnie. `{{x}}` stosuje escapowanie HTML; `{{{x}}}` to opcjonalny surowy tryb.
- Brak dowolnego JS w szablonach oznacza brak powierzchni audytu XSS dla każdego szablonu.

Logika mieszka w `hooks.js`, gdzie jest jawna i podlega przeglądowi. Dostępne helpery Handlebars: `{{default}}`, `{{upper}}`, `{{lower}}`, `{{eq}}`, `{{markdown}}`, `{{asset ref}}`, `{{asset ref "property"}}` (plus helpery formatowania danych `icsStamp`/`rfcText`/`csvCell` używane przez towarzyszące szablony `.ics`/`.vcf`/`.csv`).

### 10. Narzędzia komponują narzędzia

Narzędzie może osadzić render **innego** narzędzia bez importów między narzędziami — kompozycja jest rozwiązywana przez silnik, nigdy przez kod narzędzia. Istnieją dwie powierzchnie:

- **Manifest deklaratywny** — `composes: [{ id, tool, inputs, format?, width?, height? }]`. Silnik renderuje nazwane dziecko i umieszcza wynik w pozbawionym logiki szablonie jako `{{asset <id>}}`. `event-name-badge` komponuje obecnie `qr-code` jako SVG.
- **Przenośny URL osadzenia** — `<img src="https://lolly.tools/tool/<id>.<ext>?<inputs>">`. Powłoka renderuje to dziecko **lokalnie** (do czasu rozwiązania lokalnego renderu wyświetlany jest piksel zastępczy); z `lolly.tools` nigdy nic nie jest pobierane.

Komponuj render dowolnego narzędzia: dziecko **SVG** pozostaje prawdziwym wektorem, gdy rodzic eksportuje do SVG lub PDF, i rasteryzuje się ostro dla PNG; dzieci **PNG/JPG/WEBP** osadzają się jako obrazy. Wymaga możliwości `compose`. Skomponowane dzieci są elementami pośrednimi — nigdy nie są opatrzone znakiem wodnym ani znacznikiem pochodzenia — a kompozycja degraduje się łagodnie: powłoka, która nie potrafi wyrenderować dziecka, po prostu pomija slot, a rodzic i tak się renderuje.

---

## Czego świadomie postanowiliśmy nie robić

- **Bez EJS / bez dowolnego JS w szablonach.** Powierzchnia XSS wynosi zero. Logika mieszka w `hooks.js`.
- **Bez obowiązkowego CMS zasobów.** Osoby indywidualne wczytują własne pliki twórcze prosto do swojego katalogu w aplikacji (widok [Catalogue](/info/using.html) oraz Brand Studio) i tworzą własne narzędzia, zapisując sesje [Layout Studio](/info/using.html) — bez serwera, bez konsoli administracyjnej. Dla *współdzielonego, zarządzanego* katalogu organizacja **może** utrzymywać katalog zasobów jako git i bramkować aktualizacje przez przegląd PR — to dostępny model zarządzania, a nie wymóg aplikacji.
- **Bez wymuszonego RBAC.** Otwarta aplikacja domyślnie ma dostęp publiczny; ryzyko marki jest zarządzane przez etykiety dojrzałości + znaki wodne. Organizacja, która chce ściślejszej kontroli, nakłada własne uwierzytelnianie i opisany wyżej katalog recenzowany w git.
- **Bez centralnej bazy danych.** Cały stan użytkownika jest przypisany do urządzenia. Integracja z SUSE ID jest w planach, ale nie blokuje premiery.
- **Brak wspólnej ścieżki kodu narzędzi/silnika.** Silnik jest open source; `tools/` i `assets/` pozostają zastrzeżoną treścią SUSE we własnych repozytoriach. Rozdział jest egzekwowany (brak importów między nimi), więc podział pozostaje czysty.

---
## Cykl życia, od początku do końca

Użytkownik otwiera `lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H`:

1. **Rozruch.** Powłoka webowa otwiera IndexedDB, buduje most zdolności (capability bridge), synchronizuje katalogi narzędzi i zasobów (lub ładuje z pamięci podręcznej, gdy jest offline).
2. **Routing.** Fragment URL (hash) → widok `tool`, z wyodrębnionym `qr-code` i parametrami URL.
3. **Ładowanie.** `loadTool('qr-code', fetchFile)` pobiera `tool.json`, waliduje względem JSON Schema, pobiera źródła `template.html`, `styles.css` i `hooks.js`.
4. **Parsowanie stanu z URL.** `parseUrlState` tłumaczy parametry URL na początkowe wartości wejść. Odwołania do zasobów (`?logo=suse/logo/primary`) są parsowane jako lekkie obiekty `{ id, _unresolved: true }`.
5. **Runtime.** `createRuntime(tool, host, initialValues)` buduje model wejść (łącząc dane profilu, wartości domyślne i wartości początkowe), rozwiązuje odwołania do zasobów przez `host.assets.get()`, ładuje hooki (`host` w zasięgu domknięcia, bez sandboxa), wywołuje `hooks.onInit`.
6. **Renderowanie.** Powłoka subskrybuje runtime; przy każdej zmianie stanu otrzymuje `{ model, hydrated }`. Renderuje kontrolki wejść z modelu i zapisuje uwodniony (hydrated) HTML szablonu do `#tool-canvas`.
7. **Interakcja.** Użytkownik wpisuje coś w wejściu → `runtime.setInput(id, value)` → zastosowane ograniczenia → wywołany `hooks.onInput` → ponowne uwodnienie → ponowne renderowanie. Płótno (canvas) aktualizuje się na żywo.
8. **Eksport.** Użytkownik klika Pobierz (PNG) → `runtime.export(canvasNode, 'png')` → `host.export.render` (rasteryzuje przez dom-to-image-more; SVG/PDF przechodzą przez dedykowane wektoryzatory obchodzące DOM) → blob → `host.export.download`. Zakres formatów, w które narzędzie może się zdecydować, jest szeroki: `svg`, `png`, `jpg`/`jpeg`, `webp`, `avif`, `pdf`, formaty wektorowe `emf`, `eps`, dodatkowo formaty do druku/CMYK `pdf-cmyk`, `cmyk-tiff`, `eps-cmyk`; formaty wideo `webm`, `mp4`, `gif`; oraz formaty danych/tekstowe `html`, `md`, `txt`, `json`, `csv`, `ics`, `vcf`, `ico`, `zip`. (Narzędzia, które ustawiają `render.export: false` — np. Color Palette, Countdown Timer, Strip Hidden Data, Text Helper, Compress PDF — ukrywają kontrolki pobierania/formatu/wymiarów.) Jednostki fizyczne są tu przeliczane per format (PDF → rzeczywiste punkty strony, raster → piksele przy DPI z chunkiem `pHYs`). Metadane autorstwa/proweniencji (autor, narzędzie, źródło — budowane przez `engine/src/metadata.ts`) są osadzane per format: PNG iTXt, JPEG EXIF, słownik info PDF, `<metadata>` w SVG, komentarz GIF. Narzędzia eksperymentalne otrzymują znak wodny wstawiany przez host, nie przez narzędzie.

Ten sam cykl życia w Tauri. Ten sam cykl życia w CLI — jsdom dostarcza bezgłowy (headless) DOM; wynik trafia do pliku lub na stdout.

---

## Status open source

Katalogi `engine/`, `shells/`, `schemas/` i `docs/` są open source na licencji **MPL-2.0** — neutralna względem dostawcy platforma szkieletowa dla narzędzi brandowych, z każdą jednostką nadającą się do wydania rozdzieloną do własnego repozytorium pod [github.com/lolly-tools](https://github.com/lolly-tools). `tools/` i `catalog/assets/` to treści specyficzne dla SUSE i pozostają **własnością SUSE** (wszelkie prawa zastrzeżone — zobacz `NOTICE.md` w każdym repozytorium); nie są objęte licencją MPL.

Rozdział jest egzekwowany — nie ma żadnych importów krzyżowych z `engine/` do `tools/` lub `assets/` — dzięki czemu granica między platformą a treścią pozostaje czysta.

---

## Mapa drogowa

| Kamień milowy | Cel | Co |
|---|---|---|
| **Początkowe narzędzia** | ✅ Gotowe | QR Code, Quote Card, Email Signature, Day Brief, Code Canvas, Countdown Timer, Color Palette, Brand Lockup, Bag Video, Chart Creator, Filter: Duotone, Meeting Planner — powłoka webowa działa na żywo |
| **Rozbudowa obecnego oprzyrządowania** | Połowa 2026 ✅ Gotowe  | Pobieralna aplikacja offline (Tauri); dodatkowe narzędzia dla pracowników i wydarzeń; bogatszy potok eksportu (stabilność text-to-path, metadane, dodatkowe formaty — zobacz `plans.md`) |
| **Otwarcie kodu silnika** | Koniec 2026 ✅ Gotowe  | Silnik, powłoki, schematy, dokumentacja stają się publiczne — nie brandowane narzędzia/zasoby |
| **Przenoszenie między urządzeniami** | ✅ Gotowe | Przenośny pakiet `lolly-backup` przenosi profil, zapisane sesje, wgrane obrazy i preferencje między dowolnymi dwiema instalacjami — offline lub online, bez konta. Kompatybilna w przód, sprawdzana pod kątem integralności koperta (specyfikacja: `docs/data-transfer.md`) |
| **Ustalenie formalnej mapy drogowej narzędzi** | Koniec 2026 | Zestawy referencyjne dla klientów, wczytywanie projektów z AI, tryb żądań GET/URL |
| **Narzędzia prywatności na urządzeniu** | 🚧 W toku | Narzędzia przekształcające treść, które przetwarzają *twój własny* plik lokalnie (plik na wejściu → czysty plik na wyjściu), zastępując eksfiltrację do jednozadaniowych SaaS-ów. **Gotowe:** typ wejścia `file` + ścieżka przekształcenia `exportFile` + konwencje `privacy:"on-device"` (bez znaku wodnego/proweniencji) + **Strip Hidden Data** (metadane JPEG/PNG/SVG/PDF, PDF przez most `host.pdf`) oraz **Text Helper** (warsztat na urządzeniu do codziennych zadań typu wklej-do-strony — formatowanie JSON, dekodowanie JWT, Base64, kodowanie/dekodowanie URL, haszowanie SHA, plus grupa Novelty). **Następne:** kadrowanie/zmiana rozmiaru, konwersja/kompresja obrazów; potem most kodeków `host.image` (specyfikacja: `plans/exfiltration-app-content.md`) |
| **Tokeny projektowe (DTCG)** | 🚧 Kolor wdrożony | Prymitywy brandu jako kanoniczne [tokeny projektowe W3C (DTCG)](https://www.designtokens.org/TR/drafts/format/) — format, który [Penpot importuje/eksportuje](https://help.penpot.app/user-guide/design-systems/design-tokens/). **Gotowe:** tokeny koloru (`suse/tokens/brand`), most `host.tokens`, próbki w pickerze + wartości powiązane odwołaniami (specyfikacja: `docs/design-tokens.md`). **Następne:** tokeny wymiarów/typografii, import/eksport Penpot, tokeny użytkownika w pakiecie przenoszenia (`tokens.json`) |
| **Punkt końcowy agenta MCP (render)** | ✅ Gotowe | Serwer [MCP](https://modelcontextprotocol.io) udostępnia katalog + ścieżkę renderowania jako wywoływalne narzędzia (`lolly_list_tools` / `describe_tool` / `build_url` / `render` / `transform`), więc dowolny agent może tworzyć gotowe, związane regułami zasoby — dodaj go do dowolnego klienta MCP jako niestandardowy konektor (OAuth 2.1) albo skieruj klienta CLI/HTTP na niego z tokenem bearer. Działa na żywo pod `mcp.lolly.tools` (pełny punkt końcowy: raster/PDF/animacja/wideo przez hostowaną bezgłową przeglądarkę) oraz `lolly.tools/api/mcp` (bezserwerowa warstwa bez przeglądarki). Odrębny od poniższego MCP *autorskiego* Penpot, który dotyczy **tworzenia** narzędzi (specyfikacja: `plans/mcp-server.md`; przewodnik: `docs/mcp.md` + `docs/ai-agents.md`) |
| **Wczytywanie plików Penpot jako narzędzi** | 2027+ | Import pliku Penpot i udostępnienie go *jako narzędzia Lolly* (deklaratywnie, constraint-first), zamieniając projekty tworzone w Penpot w deterministyczne generatory |
| **Rozszerzenie MCP + Penpot (autorstwo tylko online)** | 2027+ | Serwer MCP Penpot artykułuje nowe narzędzia z pomocą AI — najbardziej wizualny sposób tworzenia deterministycznych szablonów: pierwsza runda z uwzględnieniem brandu, dopracowana z człowiekiem w pętli, celująca z czasem w jednorazowe nowe konteksty. *Tworzenie* narzędzi jest tylko online; narzędzia, które powstają, działają wszędzie |
| **RBAC + SUSE ID** | 2027+ | Bramkowanie konkretnych narzędzi za SUSE ID; zapisany stan na wielu urządzeniach; wczytywanie/eksport z Google Drive |

---

## Gdzie kończy się silnik, a zaczyna host

Jeśli da się to opisać czystymi danymi + Handlebars → **silnik**.
Jeśli dotyka DOM, systemu plików, sieci lub jakiegoś API przeglądarki/OS → **host**.

Linia jest ostra celowo. Silnik to część open source. Wszystko, co wie o SUSE, konkretnych platformach czy środowiskach uruchomieniowych, pozostaje poza nim.
