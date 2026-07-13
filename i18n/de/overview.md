# Übersicht

Dieses Dokument hält den Zweck, die Struktur und die architektonischen Entscheidungen der Lolly-Plattform fest. Es spiegelt sowohl die Produktvision als auch den aktuellen Stand der Codebasis wider.

> **Status:** Lolly ist ein interner Prototyp in einem **geschlossenen Pilotbetrieb, der noch nicht abgeschlossen ist**. Die Engine ist deterministisch und in sich konsistent, aber das Produkt ist noch jung - SUSE ist Kunde Nummer eins -, und seine Kryptografie- und Datei-Parsing-Engines durchlaufen derzeit SUSEs strenges Infrastruktur-Hardening zur Vorbereitung auf den Unternehmensmaßstab (darin sind wir wirklich gut). Lesen Sie die untenstehende Architektur als Designabsicht im Test, nicht als fertiges, zertifiziertes Produkt. Siehe [Einführung & Governance](/info/adoption-governance.html#status) dafür, wie der Pilot durchgeführt und gemessen wird.

---

## Warum es Lolly gibt

Teams stehen vor einem wiederkehrenden Problem: wiederholbare Kreativ- und Content-Arbeit, die zu vorhersehbar ist, um jedes Mal geschulte Hände zu rechtfertigen, aber zu qualitätssensibel, um sie ohne Leitplanken abzugeben. Das Ergebnis ist entweder langsamer Durchsatz (Spezialisten-Engpass), Uneinheitlichkeit (Menschen nutzen, was auch immer ihnen zur Verfügung steht) oder Vendor-Lock-in (ein SaaS-DAM, das Ihre Vorlagen kontrolliert).

Diese Plattform ist die strukturelle Antwort:

> **Programmatische Kreativ- und Content-Erstellung im großen Maßstab** - Asset-Erzeugung ohne manuellen Aufwand, mit den Regeln unter zentraler Kontrolle, für Mitarbeitende, Zulieferer und Partner.

Das Ergebnis ist **Fülle**: Jede Veranstaltung hat die korrekte Beschilderung, jede CVE-Warnung entspricht dem Hausstil, jedes Etikett druckt sauber, jede E-Mail-Signatur ist aktuell - alles ohne Design-Ticket. Die Plattform übernimmt wiederkehrende, operationalisierte Kreativarbeit. Sie ist bewusst kein Werkzeug für maßgeschneiderte Kreativarbeit - Designerinnen und Designer verantworten weiterhin die Vorzeigeprojekte.

### Wo es in der Landschaft steht

| Funktion | Canva | Markenportale | Illustrator | Figma / Penpot | **Lolly** |
|---|---|---|---|---|---|
| Massenhafte Content-Erstellung | teilweise | ✗ | ✗ | ✗ | **✓** |
| Funktioniert vollständig offline | ✗ | ✗ | ✓ | teilweise | **✓** |
| Vorlagenlogik & feste Vorgaben | ✗ | teilweise | ✗ | teilweise | **✓** |
| Keine Design-Kenntnisse erforderlich | teilweise | ✓ | ✗ | ✗ | **✓** |
| Automatische Content Credentials | ✗ | ✗ | teilweise | ✗ | **✓** |
| Tools komponieren andere Tools | ✗ | ✗ | ✗ | ✗ | **✓** |
| Offene Engine, kein SaaS-Lock-in | ✗ | ✗ | ✗ | teilweise | **✓** |
| C2PA content credentials | ✗ | ✗ | ✗ | ✗ | **✓** |
| Opt-in forensische Herkunftsnachweise | ✗ | ✗ | ✗ | ✗ | **✓** |
| Mobile- und Desktop-Apps | ✓ | ✗ | ✗ | teilweise | **✓** |
| Kommandozeile & TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

Die Lücke ist eindeutig: Nichts in der bestehenden Landschaft bietet uns eine regelbasierte, offline-fähige, ohne Vorkenntnisse nutzbare, unternehmensintern zugängliche Ausgabe. Lolly enthält sogar eine offene Leinwand - **Layout Studio** -, auf der sich Farben, Schrift und Assets nach den globalen Markenvorgaben richten, sodass freie Anordnung regelbasiert bleibt. Was es **nicht** ist, ist eine uneingeschränkte Design-Suite: Designerinnen und Designer nutzen weiterhin Illustrator und Figma für maßgeschneiderte Vorzeigearbeiten. Mit diesem Tool lassen sich Permutationen zusammenstellen.

**Nutzen Sie es für:** Die schnelle Erstellung operationalisierter Kreativ-Assets - Event-Kacheln, Namensschilder, Signaturen, CVE-Warnungen, QR-Codes, Social Cards, Versandetiketten, strukturierte Berichte.

**Nutzen Sie es nicht für:** Maßgeschneiderte Hero-Inhalte.

---

## Das Gesamtbild

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

### Repository-Struktur

```
lolly/
├── engine/           # Plattformunabhängiger Kern. Open Source (MPL-2.0).
│   └── src/
│       ├── index.ts          # öffentliche Schnittstelle - loader, runtime, template, inputs, url-mode
│       ├── loader.ts         # lädt und validiert Tool-Dateien
│       ├── runtime.ts        # orchestriert den 5-Schritte-Lebenszyklus
│       ├── template.ts       # Handlebars-Hydration + annotateTemplate
│       ├── inputs.ts         # Manifest → Runtime-Input-Modell
│       ├── url-mode.ts       # URL ↔ Input-State-Round-Trip
│       ├── validate.ts       # JSON-Schema-Validierung von Manifesten
│       ├── compose.ts        # löst verschachtelte Tool-Renders auf (composes)
│       ├── embed.ts          # parst portable lolly.tools-Embed-URLs
│       └── bridge/
│           └── host-v1.ts    # TypeScript-Interface - der Bridge-Vertrag
│
├── shells/
│   ├── web/          # PWA - online gehostet; primärer Vertriebsweg
│   │   └── src/
│   │       ├── main.ts           # Boot, Routing
│   │       ├── theme.ts          # Theme anwenden/persistieren (FOUC-Vermeidung)
│   │       ├── bridge/           # Web-Implementierungen der HostV1-APIs
│   │       │   ├── index.ts      # fügt alle Bridge-Teile zusammen
│   │       │   ├── db.ts         # IndexedDB-Setup
│   │       │   ├── state.ts      # host.state - gespeicherte Bearbeitungen
│   │       │   ├── profile.ts    # host.profile - Benutzerdaten
│   │       │   ├── assets.ts     # host.assets - Katalog + Nutzer-Uploads
│   │       │   ├── clipboard.ts  # host.clipboard
│   │       │   ├── export.ts     # host.export - Rastern/Serialisieren
│   │       │   ├── net.ts        # host.net - Fetch mit Allowlist
│   │       │   └── media.ts      # host.media - Live-Kamera-Frames (onFrame)
│   │       ├── catalog/
│   │       │   └── sync.ts       # Katalog-Sync beim Boot + Offline-Cache
│   │       ├── styles/           # app-weites CSS (app.css, picker.css, tokens.css)
│   │       └── views/
│   │           ├── gallery.ts    # Tool-Bibliotheksliste + Karten für gespeicherte Zustände
│   │           ├── tool.ts       # mountet ein Tool (Inputs + Leinwand + Aktionen)
│   │           ├── picker.ts     # Asset-Picker-UI (aufgerufen von host.assets)
│   │           ├── profile.ts    # Editor für Benutzerdaten
│   │           ├── projects.ts   # /p - Ordner gespeicherter Sitzungen (verschachtelt; Ordner-/Auswahl-Export)
│   │           └── free-canvas.ts # Freie-Leinwand-Editor-Overlay für render.layout:"editor"-Tools
│   │
│   ├── cli/          # Node.js-CLI - dieselbe Engine, headless via jsdom
│   │   ├── bin/lolly.ts
│   │   └── src/
│   │       ├── run.ts    # loadTool → createRuntime → export → Datei schreiben
│   │       └── bridge.ts # CLI-Implementierung von HostV1
│   │
│   ├── tui/          # Interaktive Terminal-Shell (Ink) - nutzt die CLI-Bridge weiter
│   │   └── src/
│   │       ├── main.tsx  # Vollbild-App: Gallery / Projects / Profile / ToolView
│   │       └── bridge.ts # CLI-Bridge + Zustand auf der Festplatte unter ~/.lolly
│   │
│   ├── tauri-desktop/ # herunterladbare Desktop-App
│   └── tauri-mobile/  # iOS/Android-App
│
├── tools/            # Profil-VIEW (gitignored) - Daten, kein Code. Zusammengeführt aus Packs:
│                     #   community/ (öffentlich, markenunabhängig, MPL) + brands/<active>/tools (markeneigen).
│   ├── qr-code/
│   ├── quotes/
│   ├── email-signature/
│   ├── daily-card/        # „Day Brief" - Wetter/Zeit/Karte (von einem Inline-Template-Skript abgerufen)
│   ├── code-canvas/
│   ├── countdown-timer/
│   ├── color-palette/
│   ├── color-block/           # typisierte/heterogene Blocks (addMenu-Discriminator)
│   ├── dynamic-layout/
│   ├── tool-logo/         # „Logo" - automatisch wechselndes Markenlogo
│   ├── street-map/        # offline-fähige Vektorkarten von Stadtblöcken
│   ├── url-shot/          # „URL Screenshot" (capture-Capability)
│   ├── strip-data/        # On-Device-Metadaten-Entfernung - JPEG/PNG/SVG/PDF (Datei rein → saubere Datei raus)
│   ├── compress-pdf/      # On-Device-PDF-Kompressor - komprimiert Bilder neu (Datei rein → kleinere Datei raus)
│   ├── brand-lockup/      # „Brand Lockup" - SUSE-Logo-Lockups; HarfBuzz Text-zu-Pfad (wasm)
│   ├── bag-video/
│   ├── chart-creator/     # SVG-Diagramme aus strukturierten Daten
│   ├── filter-duotone/    # Zweifarben-Fotobehandlung
│   ├── filter-halftone/   # Foto → Vektor-Rasterpunkt-Muster (Halftone)
│   ├── filter-scanline/   # Foto → Retro-Scanline-Raster, posterisiert (SVG / transparentes Raster)
│   ├── meeting-planner/   # globaler Zeitzonen-Meeting-Planer
│   ├── calendar-ics/      # Event → .ics-Kalenderdatei plus Karte
│   ├── digi-ad/           # „Animated Ad" - Loop-Banner aus Szenen
│   ├── event-name-badge/  # Konferenz-Badges - komponiert qr-code als SVG
│   ├── wayfinding-signage/ # Event-Beschilderung; Richtungs-Blocks passen Beschriftungstext automatisch an
│   ├── text-helper/       # On-Device-Text-Werkbank (Formatieren/Dekodieren/Hashen/Anonymisieren)
│   ├── layout-studio/     # „Layout Studio" - freie WYSIWYG-Editor-Leinwand (render.layout: editor)
│   ├── multi-page-pdf/    # mehrseitiges PDF-Dokument - Deckblatt, fließende Inhaltsblöcke, Rückseite
│   ├── diagram-builder/   # Org-/Layercake-/Prozess-/Kreislauf-/Pyramiden-Diagramme
│   ├── logo-wall/         # viele Logos → automatisch gepacktes Raster
│   ├── logo-lockup-partner/ # SUSE + Partner Co-Branding-Lockup
│   ├── web-icon/          # Favicon .ico / png / svg aus Text + Farben
│   ├── filter-posterize/  # Foto → flache posterisierte Vektor-Farbauszüge
│   ├── filter-pixel-stretch/ # Foto → Pixel-Verwisch-Effekt
│   ├── lottie-digi-ad/    # animierte Lottie-Werbebanner
│   └── pose-geeko/        # das SUSE-Geeko-Maskottchen posieren - druckfertige Standbilder
│
├── catalog/
│   ├── tools/index.json        # Tool-Registry
│   └── assets/
│       ├── index.json          # Asset-Registry
│       └── suse/...            # Logo, Palette usw.
│
├── schemas/          # JSON Schema für tool.json, Asset-Einträge, AssetRef
├── scripts/          # build-catalog-index.ts, checksum-assets.ts, validate-catalog.ts
├── tests/            # Engine-Tests
└── docs/             # diese Datei + Autoren-Leitfäden + Positionierung
```

---

## Bereitstellungsmodell der Plattform

Die Plattform läuft über mehrere Oberflächen hinweg - Web-PWA, Tauri Desktop/Mobile, die skriptfähige CLI und die interaktive TUI. Alle verwenden dieselbe Engine und dieselben Tool-Dateien.

### Web (PWA) - primärer Vertriebsweg
Gehostet unter einer von SUSE kontrollierten URL. Funktioniert offline, sobald der Service Worker Tools und Assets zwischengespeichert hat. Hier werden die meisten Mitarbeitenden, Zulieferer und Partner die Plattform nutzen. Kein Konto erforderlich - der Zustand wird pro Gerät in IndexedDB gespeichert.

Die Web-Shell ist von einem einzigen Layout aus responsiv. Auf dem Desktop ist ein Tool eine größenveränderbare Steuerungs-Seitenleiste neben einer Vorschaubühne mit trackpad-nativer Leinwand-Navigation (Cmd/Ctrl-Mausrad oder Pinch zum Zoomen um den Cursor, Leertaste oder mittlere Maustaste zum Ziehen/Schwenken, die Tasten `0`/`1`/`+`/`−` sowie ein Fit/%-HUD). Auf Mobilgeräten (≤640px) werden die Steuerelemente zu einem oben verankerten Sheet mit einem Zieh-Griff, der zwischen Peek/Halb/Voll einrastet (Tippen wechselt), über einer statischen Vollbild-Vorschau, und eine schwebende **Render**-Schaltfläche öffnet die **Export**-Steuerung in einem Bottom-Sheet-Popup. Touch erhält Pinch-Zoom und Ziehen zum Schwenken auf der Vorschau. Der Render-Pfad und die Export-Steuerung sind in beiden Fällen identisch - nur das Chrome (die Bedienoberfläche) ordnet sich neu an.

**Batch-Modus (`/pro`).** Die Web-Shell liefert außerdem ein tabellenkalkulationsartiges Batch-Grid (`shells/web/src/pro/`), das viele Zeilen auf einmal über ein oder mehrere Tools hinweg rendert. Es beherrscht CSV/TSV-Roundtrip plus Einfügen aus einer Tabelle, Vorlage/Format/Größe/Einheit/DPI pro Zeile, ein Blocks-Editor-Seitenpanel mit Live-Vorschau, einklappbare Export-Spalten, eine „Relevanz"-Tag-Leiste pro Zeile, Zeilen-Neuanordnung per Drag-Handle links, eine zweistufige Löschbestätigung, gespeicherte Batch-Sitzungen und einen `.zip`-Download. Das ist die One-to-many-Oberfläche hinter der Positionierung „Massenhafte Content-Erstellung".

### Tauri Desktop / Mobile
Gepackte native App (kleiner Fußabdruck dank Tauri). Bietet vollständige Offline-Verfügbarkeit, Dateisystemzugriff für CLI-abhängige Tools (PDF Smasher, Font Outliner) und Kamerazugriff. Für Mitte 2026 ist ein Tooling-Ausbau geplant.

### CLI
`lolly <tool-id> [--input=value ...] --output=file.png`

Desktop-Nutzerinnen und -Nutzer können viele Tools über das Terminal aufrufen. Die CLI-Shell lädt dieselbe Engine, erzeugt ein jsdom-DOM, durchläuft denselben Render-Pfad und schreibt die Datei. Der URL-Modus ist der Transportweg - die CLI ist keine eigenständige Implementierung. Das garantiert, dass CLI- und GUI-Ausgaben identisch sind.

```bash
lolly qr-code --url=https://suse.com --output=qr.svg
lolly quotes --quote="Ship it." --output=quote.png
lolly                        # zeigt verfügbare Tools an
lolly qr-code                # zeigt die Inputs für dieses Tool an
```

### TUI
`npm run tui`

Das interaktive Gegenstück zur CLI: eine Vollbild-Terminal-App mit tastaturzentrierter Bedienung (aufgebaut auf Ink) zum Durchstöbern von Tools, Ausfüllen von Inputs, Speichern von Projekten und Exportieren - alles ohne GUI. Ihre Host-Bridge **nutzt die Implementierung der CLI weiter** für die DOM-freien Formate (SVG/EMF/EPS/HTML + Text/Daten) und ergänzt sie um Zustand auf der Festplatte unter `~/.lolly` sowie eine optionale Inline-Vorschau. Darüber hinaus verfügt sie über eine **Browser-Render-Stufe**: ein abgegrenztes headless Chromium (dasselbe, das der MCP-Server installiert), das Raster/PDF/Video und Live-URL-Erfassung bei Bedarf erzeugt - es steuert dabei eine gebaute Kopie der Web-Shell an, sodass die Ausgabe identisch ist, und startet erst, wenn ein solches Format zum ersten Mal exportiert wird. So laufen auch `url-shot` (mit Zuschnitt + Neueinfärbung + vektorbasiertem PDF/SVG) und jedes Raster-/PDF-Tool im Terminal. Siehe den [TUI-Leitfaden](/info/tui.html).

---

## Tool-Kategorien

Tools werden in ihrem Manifest mit einer `category` versehen, um sie in der Galerie zu gruppieren.

Die Zeilen sind in der Reihenfolge der Galerie-Abschnitte aufgeführt. Der Abschnitt `utility` wird in der Galerie immer **zuletzt** gerendert (nach jeder anderen Kategorie, einschließlich künftiger) - er ist die On-Device-Schublade „Offline Utilities".

| Kategorie | Ausgelieferte Tools | Geplant |
|---|---|---|
| `everyone` | QR Code Generator, Quote Card, Email Signature, Day Brief, Code Canvas, Color Block, Dynamic Layout, Logo, Web Icon Maker | Employee Image Stationery |
| `designer` | Brand Lockup, Bag Video, Chart Creator, Street Map, Animated Ad, Multi-Page PDF, Diagram Builder, Logo Lockup: Grid (NASCAR), Logo Lockup: Partner, Filter: Duotone, Filter: Halftone, Filter: Scanline, Filter: Posterize Bitmap, Filter: Pixel Stretch | Font Outliner |
| `event` | Meeting Planner, Event Name Badge, Wayfinding Signage, Calendar ICS | Event Stationery, Bulk Name Badges, Room Agenda Cards |
| `product` | - | CVE Alert, Product Release Announcement, Blog OG Image |
| `utility` | Countdown Timer, Color Palette, URL Screenshot, Strip Hidden Data, Text Helper, Compress PDF, Layout Studio | Einheiten-/Format-Konverter, weitere On-Device-Datenschutz-Utilities |

Tools werden außerdem nach Status klassifiziert: `official` (markenfreigegeben, kein Wasserzeichen), `community` (externer Beitrag), `experimental` (Exporte mit Wasserzeichen). Dynamic Layout, URL Screenshot, Logo Lockup: Grid (NASCAR), Filter: Posterize Bitmap und Diagram Builder tragen derzeit den Status `experimental`; Web Icon Maker und Layout Studio werden als `community`-Tools ausgeliefert.

**Layout Studio** ist das erste Tool, das auf dem freien Leinwandmodus `render.layout: "editor"` aufbaut - einer chromfreien Oberfläche zur direkten Manipulation, auf der Sie Boxen aus Text, Formen und Bildern ziehen, in der Größe ändern, drehen und einrasten lassen, um sie anschließend über denselben Render-Pfad wie jedes andere Tool zu exportieren.

**Strip Hidden Data** ist das erste **On-Device-Utility** (`privacy: "on-device"`): ein Content-Transform-Tool, das eine von *Ihnen* bereitgestellte Datei entgegennimmt, sie vollständig im Browser verarbeitet und eine bereinigte Kopie zurückgibt - nie hochgeladen, nie mit Wasserzeichen versehen, keine Provenienz aufgestempelt. **Text Helper** ist das zweite - eine On-Device-Werkbank für alltägliche „in eine Website einfügen"-Aufgaben (JSON-Formatierung, JWT-Dekodierung, Base64, URL-Kodierung/-Dekodierung, SHA-Hashing). **Compress PDF** ist das dritte - es verkleinert ein PDF, indem es dessen Bilder neu komprimiert, ebenfalls vollständig on-device. Alle drei tragen den Badge-Text „Läuft auf Ihrem Gerät - nichts wird hochgeladen". Das ist der Anfang einer Datenschutz-Utility-Kategorie, die das Weitergeben vertraulicher Dateien an Einzelzweck-Websites ersetzt.

> Hinweis: `category` und `status` werden aus jeder `tool.json` in `catalog/tools/index.json` (die Registry, die die Galerie liest) denormalisiert. Das Manifest ist die Quelle der Wahrheit - der Index wird von `npm run build:catalog` **generiert**, und `npm run validate:catalog` lässt die CI fehlschlagen, falls der committete Index von den Manifesten abweicht.

---

## Architektonische Grundsatzentscheidungen

Diese Entscheidungen sind getroffen. Jede davon zu ändern ist ein größeres Unterfangen - sie prägen jede weitere Entscheidung in der Codebasis.

### 1. Deklarative Tools mit einem imperativen Notausgang

Ein Tool besteht aus einem Manifest (`tool.json`) + einer Vorlage (`template.html`) + optionalem `hooks.js`.

**Das Manifest deklariert die Inputs.** Nicht die Vorlage. Inputs werden nicht aus Handlebars-Tokens abgeleitet. Das Manifest ist der Vertrag; die Vorlage konsumiert benannte Variablen über `{{id}}`.

**Hooks sind optional.** Die meisten Tools sind rein deklarativ - Manifest + Vorlage genügt. Tools, die berechnete Werte benötigen (QR-Kodierung, Aufbereitung von Diagrammdaten), stellen `hooks.js` bereit und exponieren benannte Lifecycle-Funktionen (`onInit`, `onInput`, `onFrame` - der Per-Frame-Hook für die Live-Kamera bei bewegungsreaktiven Tools -, `beforeRender`, `beforeExport`, `afterExport` und `exportFile` - der Datei-rein/Datei-raus-Transformationspfad, den On-Device-Utilities wie Strip Hidden Data nutzen). Der Host lädt Hooks über `new Function('host', …)`, wobei die Capability Bridge als Closure-Scope injiziert wird. Das ist ein **Portabilitätsvertrag, keine Sicherheits-Sandbox**: Hooks laufen weiterhin im Realm der Seite und *können* in einer Browser-Shell `window`/`fetch`/`document` erreichen - `host.*` ist die unterstützte, portable Oberfläche, keine erzwungene Grenze. Asynchrone Hook-Ergebnisse sind zeitlich begrenzt (onInit 5s, onInput 2s, andere 5s), und verspätete Ergebnisse werden verworfen; ein außer Kontrolle geratener *synchroner* Hook kann nicht unterbrochen werden. Nicht vertrauenswürdiger Drittanbieter-Hook-Code ist deshalb erst sicher ausführbar, sobald die Worker-Isolation ausgeliefert ist.

Das ist wichtig, weil deklarative Tools von Nicht-Entwicklerinnen und -Entwicklern verfasst werden können. Wäre jedes Tool eine Web-App, würde der Risikohinweis „begrenzte Fähigkeiten zur Erstellung/Pflege vielgenutzter Vorlagen" zu einem dauerhaften Engpass.

### 2. Tools und Assets sind Daten, kein gebündelter Code

Die Web- und Tauri-Apps laden Tool- und Asset-Kataloge beim Start von einer bekannten URL, cachen sie lokal und arbeiten mit dem, was dort vorhanden ist. **Eine neue Event-Kachel oder ein saisonales Asset hinzuzufügen erfordert keine App-Veröffentlichung.**

Asset-Bytes werden per SHA-256-Prüfsumme gesichert, um CDN-Poisoning zu verhindern. Asset-`id` + `version` steuert die Cache-Invalidierung.

### 3. Die Capability Bridge ist die einzige API, die Tools zu sehen bekommen

Tools fassen niemals das DOM außerhalb ihres Vorlagenbereichs an, rufen niemals direkt `fetch` auf und lesen niemals das Dateisystem. Sie rufen versionierte `host.*`-Methoden auf. Die Bridge ist in `engine/src/bridge/host-v1.ts` definiert:

| Bridge-API | Was sie tut |
|---|---|
| `host.profile` | Vorname, E-Mail, Profilbild, Stadt usw. der Nutzerin/des Nutzers. Füllt Inputs über `bindToProfile` vor. |
| `host.assets` | Katalogabfragen, Asset-Auflösung, vom Host bereitgestellte Picker-UI. |
| `host.state` | Input-Slots speichern/laden. IndexedDB im Web, Dateisystem unter Tauri, Arbeitsspeicher in der CLI. |
| `host.clipboard` | Text oder Bild in die Zwischenablage schreiben (mit Plattform-Fallbacks). |
| `host.export` | Rastert oder serialisiert das Render-Ziel. Wendet bei experimentellen Tools ein Wasserzeichen an. |
| `host.net` | Fetch mit Allowlist - nur verfügbar, wenn das Tool die Capability `"network"` deklariert hat. (Aktuell nutzt kein ausgeliefertes Tool dies.) |

Optionale, additive Oberflächen erscheinen nur, wenn eine Shell sie bereitstellt. Zwei davon sind **capability-gated** - sie werden nur freigeschaltet, wenn das Tool das passende Flag deklariert: `host.compose` (bettet den Render eines anderen Tools ein - `compose`) und `host.capture` (Seitenerfassung für URL Screenshot - `capture`). Die übrigen sind **feature-detected** - vorhanden, wann immer die Shell sie bereitstellen kann: `host.text` (Text-zu-Pfad via HarfBuzz WASM; die Capability `wasm` kennzeichnet Tools, die darauf angewiesen sind), `host.pdf` (PDF-Parsing/-Kompression, genutzt von Strip Hidden Data und Compress PDF) und `host.tokens` (DTCG-Design-Tokens). Die deklarierbaren Capabilities sind: `network`, `filesystem`, `clipboard`, `camera`, `ffmpeg`, `wasm`, `capture`, `compose`.

Dasselbe Tool läuft im Browser, unter Tauri und in der headless CLI, weil jede Shell dieses Interface implementiert - das Tool weiß nie, in welcher es sich befindet.

Die Bridge ist versioniert. Das Hinzufügen von Methoden ist eine Minor-Version. Das Entfernen oder Ändern von Signaturen erfordert eine Major-Version. Wenn v2 ausgeliefert wird, muss v1 weiterhin funktionieren.

### 4. Asset-IDs sind für immer

`suse/logo/primary` ist ein Vertrag. Einmal veröffentlicht:
- Die ID ändert sich nie, wird nie wiederverwendet.
- Byte-Änderungen → `version` im Manifest erhöhen.
- Wird durch ein neues Asset ersetzt → `deprecated: true` setzen und optional `replacedBy`.
- Bestehende Referenzen lösen sich immer auf.

Das macht gespeicherte Tool-Zustände und per URL geteilte Links über Jahre hinweg dauerhaft.

### 5. Der URL-Modus ist erstklassig

Jeder Input muss sich als URL-Parameter ausdrücken lassen:

```
lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H
```

Der CLI-Modus ist der URL-Modus unter einem anderen Transportweg - die CLI-Shell baut aus argv ein URL-State-Objekt und durchläuft **dieselbe** Engine-Pipeline. Es gibt einen einzigen Render-Pfad. Die CLI kann nicht von der GUI abweichen, weil sie keine eigenständige Implementierung ist.

`url-mode.ts` übernimmt den Round-Trip (Parsen und Serialisieren). Reservierte Parameter (werden dem Tool nie als Inputs weitergegeben): `format`, `export`, `copy`, `slot`, `output`, `filename`, `_v`, `z` (gepackter Zustand - das „Shortest link"-Token), `width`/`w`, `height`/`h`, `unit`, `dpi`, `profile`, `password`, `bleed`, `marks`, `full`, `options`, `nostage`. Asset-Inputs werden im URL-Modus über ihre `id` serialisiert; die Runtime löst sie vor der Hydration über `host.assets.get()` auf. `width`/`height` sind Werte in `unit` (Standard `px`, außerdem `mm`/`cm`/`in`/`pt`/`pc`); bei einer physischen Einheit legt `dpi` die Rasterauflösung fest. Sie bestimmen die Dokumentgröße der Leinwand und füllen das Panel für Export-Abmessungen vor.

### 6. Speicherung läuft über die Bridge, nicht direkt

Web-Shell: IndexedDB. Tauri: Dateisystem. CLI: In-Memory. Tools sehen nur `host.state.save(slot, data)` und `host.state.load(slot)`. `localStorage` wird nicht verwendet - es ist zu klein und kann keine Blobs speichern.

Nutzerinnen und Nutzer können pro Tool mehrere benannte Bearbeitungs-Slots speichern und später zu jeder Sitzung zurückkehren. Es ist keine Kontoerstellung erforderlich; der Zustand ist pro Gerät. Da die Bridge die einzige Nahtstelle ist, ist dieser geräteweise Zustand auch *portabel*: `shells/web/src/data-transfer.ts` liest alles über `host.profile`/`host.state`/`host.assets` wieder aus und packt es in ein einziges `lolly-backup`-Zip, das sich auf jeder anderen Installation importieren lässt - die Offline-Antwort auf „auf ein neues Gerät umziehen", die keinen Server braucht (vollständige Spezifikation: `docs/data-transfer.md`). Die SUSE-ID-Integration (geräteübergreifende Synchronisierung) ist ein künftiger Meilenstein, der darauf aufbaut.

### 7. Reifegrad-Tags beantworten das Risiko „markenfreigegeben" strukturell

Jedes Tool deklariert in seinem Manifest `status: official | community | experimental`. Die Galerie sortiert nach Status. Experimentelle Tools versehen ihre Exporte automatisch mit einem Wasserzeichen - das Wasserzeichen wird von `host.export.render` angewendet, nicht vom Tool, sodass es von einer nicht-offiziellen Tool-Autorin oder einem nicht-offiziellen Tool-Autor nicht abgeschaltet werden kann.

Das ist eine strukturelle Antwort auf das Wahrnehmungsrisiko, dass die Nutzung eines beliebigen Tools eine Markenfreigabe impliziert. Prozessantworten (eine Review-Queue, SUSE-ID-Gating) legen sich zusätzlich darüber.

### 8. Tool-Inputs sind über das Manifest typisiert, einschließlich Assets

Inputs deklarieren einen `type`: `text`, `longtext`, `number`, `boolean`, `color`, `select`, `asset`, `date`, `time`, `datetime-local`, `url`, `profile`, `blocks`, `vector` und `file`. Der Host rendert aus dem Manifest ein generisches Steuerelement pro Typ - Tools schreiben null Zeilen Steuerelement-Code. Drei davon wiegen schwerer als die übrigen:

- **`asset`** (mit `filter` und `allowUpload`) ist die Brücke zum globalen Asset-System; `allowUpload: false` ist der Hebel für Markendurchsetzung bei Dingen wie Sponsoring-Kachel-Logos, bei denen nur Bibliotheks-Assets erlaubt sind. Nutzer-Uploads verwenden dieselbe `AssetRef`-Form wie Bibliotheks-Assets, sodass Tools sie identisch behandeln.
- **`blocks`** ist eine sich wiederholende Feldgruppe - eine Mini-Tabelle innerhalb eines Inputs, bearbeitet in einem Seitenpanel, mit einem typisierten/diskriminierten Hinzufügen-Menü und Asset-Feldern pro Block. Klicken auf einen gerenderten Block auf der Leinwand fokussiert die zugehörige Zeile. Genutzt von `meeting-planner`, `chart-creator`, `event-name-badge`, `wayfinding-signage`, `color-block` und `digi-ad`.
- **`vector`** gruppiert eine feste Menge von Zahlen (z. B. eine Transformation) zu einem zusammengesetzten Steuerelement; **`file`** hält die eigene Datei der Nutzerin oder des Nutzers als Bytes im Arbeitsspeicher für On-Device-Transform-Utilities (z. B. `strip-data` und `compress-pdf`).

### 9. Vorlagen sind logikfrei (Handlebars, nicht EJS)

Handlebars wurde bewusst gegenüber EJS gewählt:
- Logikfrei. Vorlagen können von Nicht-Entwicklerinnen und -Entwicklern verfasst werden.
- Standardmäßig sicher. `{{x}}` escaped HTML; `{{{x}}}` ist optionales Rohformat.
- Kein beliebiges JS in Vorlagen bedeutet keine XSS-Prüffläche pro Vorlage.

Logik lebt in `hooks.js`, wo sie explizit und überprüfbar ist. Verfügbare Handlebars-Helfer: `{{default}}`, `{{upper}}`, `{{lower}}`, `{{eq}}`, `{{markdown}}`, `{{asset ref}}`, `{{asset ref "property"}}` (plus die Datenformat-Helfer `icsStamp`/`rfcText`/`csvCell`, die von begleitenden `.ics`/`.vcf`/`.csv`-Vorlagen genutzt werden).

### 10. Tools komponieren Tools

Ein Tool kann den Render eines **anderen** Tools einbetten, ganz ohne Tool-zu-Tool-Imports - die Komposition wird von der Engine aufgelöst, nie vom Tool-Code. Es gibt zwei Oberflächen:

- **Deklaratives Manifest** - `composes: [{ id, tool, inputs, format?, width?, height? }]`. Die Engine rendert das benannte Kind-Tool und platziert das Ergebnis in der logikfreien Vorlage als `{{asset <id>}}`. `event-name-badge` komponiert heute `qr-code` als SVG.
- **Portable Embed-URL** - `<img src="https://lolly.tools/tool/<id>.<ext>?<inputs>">`. Die Shell rendert dieses Kind **lokal** (ein Platzhalter-Pixel wird angezeigt, bis der lokale Render abgeschlossen ist); es wird niemals etwas von `lolly.tools` abgerufen.

Der Render jedes Tools lässt sich komponieren: Ein **SVG**-Kind bleibt ein echter Vektor, wenn das Eltern-Tool nach SVG oder PDF exportiert, und rastert scharf für PNG; **PNG/JPG/WEBP**-Kinder werden als Bilder eingebettet. Erfordert die Capability `compose`. Komponierte Kinder sind Zwischenprodukte - nie mit Wasserzeichen versehen oder mit Provenienz gestempelt -, und die Komposition degradiert kontrolliert: Eine Shell, die ein Kind nicht rendern kann, lässt den Slot einfach aus, und das Eltern-Tool rendert trotzdem.

---

## Was wir bewusst nicht getan haben

- **Kein EJS / kein beliebiges JS in Vorlagen.** Die XSS-Angriffsfläche ist null. Logik lebt in `hooks.js`.
- **Kein Asset-CMS.** Der Asset-Katalog ist Git. Aktualisierungen laufen über PR-Review. Kein Upload-UI, keine Authentifizierung, keine Moderations-Warteschlange. Das Git-Review *ist* die Moderation.
- **Kein RBAC im MVP.** Öffentlicher Zugriff. Markenrisiko wird durch Reifegrad-Tags + Wasserzeichen + die strukturelle Tatsache gemanagt, dass alle Assets, die Nutzerinnen und Nutzer sehen, ein PR-Review durchlaufen haben.
- **Keine zentrale Datenbank.** Aller Nutzerzustand ist pro Gerät. Die SUSE-ID-Integration steht auf der Roadmap, ist aber kein Launch-Blocker.
- **Kein gemeinsamer Code-Pfad für Tools/Engine.** Die Engine ist Open Source; `tools/` und `assets/` bleiben proprietärer SUSE-Content in eigenen Repositories. Die Trennung wird erzwungen (keine Cross-Imports), damit die Aufteilung sauber bleibt.

---

## Lebenszyklus, Ende-zu-Ende

Eine Nutzerin oder ein Nutzer öffnet `lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H`:

1. **Boot.** Die Web-Shell öffnet IndexedDB, baut die Capability Bridge auf und synchronisiert die Tool- und Asset-Kataloge (oder lädt sie offline aus dem Cache).
2. **Route.** URL-Hash → `tool`-View, wobei `qr-code` und die URL-Parameter extrahiert werden.
3. **Load.** `loadTool('qr-code', fetchFile)` lädt `tool.json`, validiert gegen das JSON Schema und lädt `template.html`, `styles.css` sowie den `hooks.js`-Quelltext.
4. **Parse URL state.** `parseUrlState` übersetzt URL-Parameter in initiale Input-Werte. Asset-Referenzen (`?logo=suse/logo/primary`) werden als leichtgewichtige `{ id, _unresolved: true }`-Objekte geparst.
5. **Runtime.** `createRuntime(tool, host, initialValues)` baut das Input-Modell auf (führt Profildaten, Defaults und initiale Werte zusammen), löst Asset-Referenzen über `host.assets.get()` auf, lädt Hooks (closure-scoped `host`, nicht sandboxed) und ruft `hooks.onInit` auf.
6. **Render.** Die Shell abonniert die Runtime; bei jeder Zustandsänderung erhält sie `{ model, hydrated }`. Sie rendert die Input-Steuerelemente aus dem Modell und schreibt das hydrierte Vorlagen-HTML in `#tool-canvas`.
7. **Interact.** Die Nutzerin oder der Nutzer tippt in einen Input → `runtime.setInput(id, value)` → Constraints werden angewendet → `hooks.onInput` wird aufgerufen → erneute Hydration → erneutes Rendern. Die Leinwand aktualisiert sich live.
8. **Export.** Die Nutzerin oder der Nutzer klickt auf Download (PNG) → `runtime.export(canvasNode, 'png')` → `host.export.render` (rastert über dom-to-image-more; SVG/PDF durchlaufen dedizierte, DOM-durchlaufende Vektorisierer) → Blob → `host.export.download`. Die Bandbreite an Formaten, für die sich ein Tool entscheiden kann, ist groß: `svg`, `png`, `jpg`/`jpeg`, `webp`, `avif`, `pdf`, die Vektorformate `emf`, `eps`, dazu die Druck-/CMYK-Formate `pdf-cmyk`, `cmyk-tiff`, `eps-cmyk`; die Videoformate `webm`, `mp4`, `gif`; sowie die Daten-/Textformate `html`, `md`, `txt`, `json`, `csv`, `ics`, `vcf`, `ico`, `zip`. (Tools, die `render.export: false` setzen - z. B. Color Palette, Countdown Timer, Strip Hidden Data, Text Helper, Compress PDF - blenden die Steuerelemente für Download/Format/Abmessungen aus.) Physische Einheiten werden hier pro Format umgerechnet (PDF → echte Seitenpunkte, Raster → Pixel bei DPI mit einem `pHYs`-Chunk). Autorenschafts-/Provenienz-Metadaten (Autor, Tool, Quelle - erstellt von `engine/src/metadata.ts`) werden pro Format eingebettet: PNG iTXt, JPEG EXIF, PDF-Info-Dictionary, SVG `<metadata>`, GIF-Kommentar. Experimentelle Tools erhalten ein vom Host eingefügtes Wasserzeichen, nicht vom Tool.

Derselbe Lebenszyklus unter Tauri. Derselbe Lebenszyklus in der CLI - jsdom stellt das headless DOM bereit; die Ausgabe geht in eine Datei oder nach stdout.

---

## Open-Source-Status

Die Verzeichnisse `engine/`, `shells/`, `schemas/` und `docs/` sind unter **MPL-2.0** Open Source - eine anbieterneutrale Scaffolding-Plattform für Marken-Tooling, bei der jede auslieferbare Einheit in ein eigenes Repository unter [github.com/lolly-tools](https://github.com/lolly-tools) aufgeteilt ist. `tools/` und `catalog/assets/` sind SUSE-spezifischer Content und bleiben **Eigentum von SUSE** (alle Rechte vorbehalten - siehe die `NOTICE.md` jedes Repositorys); sie sind nicht von der MPL abgedeckt.

Die Aufteilung wird erzwungen - es gibt keine Cross-Imports von `engine/` zu `tools/` oder `assets/` - sodass die Grenze zwischen Plattform und Content sauber bleibt.

---

## Roadmap

| Meilenstein | Ziel | Was |
|---|---|---|
| **Erste Tools** | ✅ Erledigt | QR Code, Quote Card, Email Signature, Day Brief, Code Canvas, Countdown Timer, Color Palette, Brand Lockup, Bag Video, Chart Creator, Filter: Duotone, Meeting Planner - Web-Shell live |
| **Bestehendes Tooling ausbauen** | Mitte 2026 ✅ Erledigt  | Herunterladbare Offline-App (Tauri); zusätzliche Mitarbeiter- und Event-Tools; erweiterte Export-Pipeline (Stabilität von Text-zu-Pfad, Metadaten, zusätzliche Formate - siehe `plans.md`) |
| **Engine als Open Source veröffentlichen** | Ende 2026 ✅ Erledigt  | Engine, Shells, Schemas, Docs werden öffentlich - nicht die markenspezifischen Tools/Assets |
| **Geräteübergreifende Übertragung** | ✅ Erledigt | Portables `lolly-backup`-Bundle transportiert Profil, gespeicherte Sitzungen, hochgeladene Bilder und Einstellungen zwischen zwei beliebigen Installationen - offline oder online, ohne Konto. Abwärtskompatible, integritätsgeprüfte Envelope (Spezifikation: `docs/data-transfer.md`) |
| **Formale Tool-Roadmap festlegen** | Ende 2026 | Kunden-Referenzkits, KI-Design-Import, GET/URL-Request-Modus |
| **On-Device-Datenschutz-Utilities** | 🚧 In Arbeit | Content-Transform-Tools, die *Ihre eigene* Datei lokal verarbeiten (Datei rein → saubere Datei raus) und die Exfiltration zu Einzelzweck-SaaS ersetzen. **Erledigt:** Input-Typ `file` + `exportFile`-Transformationspfad + `privacy:"on-device"`-Konventionen (kein Wasserzeichen/keine Provenienz) + **Strip Hidden Data** (JPEG/PNG/SVG/PDF-Metadaten, PDF über die `host.pdf`-Bridge) und **Text Helper** (die On-Device-Werkbank für alltägliche „in eine Website einfügen"-Aufgaben - JSON-Formatierung, JWT-Dekodierung, Base64, URL-Kodierung/-Dekodierung, SHA-Hashing, plus eine Novelty-Gruppe). **Als Nächstes:** Zuschnitt/Größenänderung, Bildkonvertierung/-kompression; danach eine `host.image`-Codec-Bridge (Spezifikation: `plans/exfiltration-app-content.md`) |
| **Design Tokens (DTCG)** | 🚧 Farbe ausgeliefert | Markenprimitive als kanonische [W3C Design Tokens (DTCG)](https://www.designtokens.org/TR/drafts/format/) - das Format, das [Penpot importiert/exportiert](https://help.penpot.app/user-guide/design-systems/design-tokens/). **Erledigt:** Farb-Tokens (`suse/tokens/brand`), `host.tokens`-Bridge, Picker-Farbmuster + referenzverknüpfte Werte (Spezifikation: `docs/design-tokens.md`). **Als Nächstes:** Dimensions-/Typografie-Tokens, Penpot-Import/-Export, Nutzer-Tokens im Transfer-Bundle (`tokens.json`) |
| **MCP-Agenten-Endpunkt (Render)** | ✅ Erledigt | Ein [MCP](https://modelcontextprotocol.io)-Server stellt den Katalog + Render-Pfad als aufrufbare Tools bereit (`lolly_list_tools` / `describe_tool` / `build_url` / `render` / `transform`), sodass jeder Agent fertige, regelkonforme Assets erzeugen kann - fügen Sie ihn jedem MCP-Client als benutzerdefinierten Connector hinzu (OAuth 2.1) oder richten Sie einen CLI-/HTTP-Client mit einem Bearer-Token darauf aus. Live unter `mcp.lolly.tools` (vollständiger Endpunkt: Raster/PDF/Animation/Video über einen gehosteten headless Browser) und `lolly.tools/api/mcp` (serverlose, browserfreie Stufe). Zu unterscheiden vom Penpot-*Authoring*-MCP weiter unten, bei dem es um die **Erstellung** von Tools geht (Spezifikation: `plans/mcp-server.md`; Leitfaden: `docs/mcp.md` + `docs/ai-agents.md`) |
| **Penpot-Datei-Import als Tools** | 2027+ | Eine Penpot-Datei importieren und sie *als Lolly-Tool* zugänglich machen (deklarativ, regelbasiert) - verwandelt in Penpot erstellte Designs in deterministische Generatoren |
| **MCP- + Penpot-Erweiterung (Authoring nur online)** | 2027+ | Ein Penpot-MCP-Server formuliert neue Tools mit KI - der visuellste Weg, deterministische Vorlagen zu erstellen: eine markeninformierte erste Runde, verfeinert mit einem Menschen im Loop, mit dem Ziel, neue Kontexte im Laufe der Zeit im ersten Anlauf zu treffen. Die *Erstellung* von Tools ist nur online möglich; die daraus entstehenden Tools laufen überall |
| **RBAC + SUSE ID** | 2027+ | Bestimmte Tools hinter SUSE ID absichern; geräteübergreifend gespeicherter Zustand; Google-Drive-Import/-Export |

---

## Wo die Engine endet und der Host beginnt

Wenn es sich in reinen Daten + Handlebars beschreiben lässt → **Engine**.
Wenn es das DOM, das Dateisystem, das Netzwerk oder eine beliebige Browser-/Betriebssystem-API berührt → **Host**.

Die Grenze ist bewusst scharf gezogen. Die Engine ist der Open-Source-Teil. Alles, was etwas über SUSE, spezifische Plattformen oder Laufzeitumgebungen weiß, bleibt davon ausgeschlossen.
