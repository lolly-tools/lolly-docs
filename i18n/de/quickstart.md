# Schnellstart

Lolly verwandelt Ihre Regeln — Farben, Schrift, Layouts, Logik — in Werkzeuge, mit denen jeder fertige Dateien erstellen kann: Bilder, PDFs, Social-Media-Karten, Video, indem Sie einfach ein paar Felder ausfüllen. Es gibt nichts zu lernen und nichts hochzuladen: Alles läuft auf Ihrem Gerät, online wie offline.

Dies ist die eine Seite, die Sie zuerst lesen sollten. Zwei Dinge machen Sie produktiv: **Machen Sie Lolly zu Ihrem eigenen** (richten Sie es auf Ihre Marke aus) und **bringen Sie ein, was Sie bereits haben** (Ihre Designdateien und Tokens). Alles Weitere ist nur einen Klick entfernt.

> Neu bei Lolly und möchten einfach etwas erstellen? Öffnen Sie die App, wählen Sie ein beliebiges Werkzeug aus der Galerie, füllen Sie die Lücken aus und klicken Sie auf **Render**. Kommen Sie hierher zurück, wenn es *Ihre* Marke tragen soll.

## 1. Machen Sie es zu Ihrem eigenen — konfigurieren Sie Ihre Marke

Ihre Marke in Lolly ist ein kleines **Design-Tokens**-Dokument — Farben, Schriften und einige wenige Regeln —, an dem sich jedes Werkzeug beim Rendern orientiert. Legen Sie es einmal fest, und alles, was Sie erstellen, ist von Natur aus markenkonform, nicht erst nach einer Prüfung. Es gibt drei Wege, dies einzurichten; wählen Sie den, der am besten zu dem passt, wo Ihre Marke bereits existiert.

### Von Grund auf neu beginnen (der Assistent)

Beim ersten Start gelangen Sie auf den **Start**-Bildschirm (`#/start`). Geben Sie einen Namen und eine Primärfarbe ein, und Lolly *leitet* daraus eine vollständige, barrierefreie Palette ab — helle/dunkle Oberflächen, Text, Akzente — unter Verwendung derselben Farbmathematik, die die Engine überall sonst verwendet. Wählen Sie eine Schriftart, und Sie haben in weniger als einer Minute eine funktionierende Marke. Sie können später alles davon verfeinern.

### Eine bereits vorhandene Marke importieren

Wenn Ihre Marke bereits als Design-Tokens erfasst ist — aus **Penpot**, **Tokens Studio** (Figma) oder einer einfachen **DTCG**-Datei —, bringen Sie sie komplett mit, anstatt sie erneut einzutippen. Zwei Wege:

- **In der App:** Der Start-Bildschirm und der Editor *Ihre Marke* akzeptieren eine Token-Datei (oder ein `LollyBrand`-Paket) direkt — legen Sie sie ab, und die Palette erwacht zum Leben.
- **Über die Kommandozeile**, um ein wiederverwendbares Markenpaket aufzusetzen:

```bash
# a monolithic tokens.json, a one-file-per-set directory, or a Penpot project archive
npm run ingest:brand -- ./my-tokens.json --name acme --label "Acme" --activate
```

`ingest:brand` akzeptiert alle drei Containerformen, in denen Penpot / Tokens Studio dasselbe Dokument exportieren — eine einzelne `tokens.json`, ein Verzeichnis (`$metadata.json` + Dateien pro Set) oder ein `project.penpot`-Archiv. Mit `--activate` registriert es die Marke als Profil, wechselt zu ihr und baut den Katalog neu auf. Siehe [Konfiguration](/info/configuration.html) dafür, wie Markenpakete und Profile zusammenpassen.

### In der App feinabstimmen

Sobald eine Marke aktiv ist, ist der Editor **Ihre Marke** im Dashboard (`#/d`) ein Live-Editor — ändern Sie eine Farbe oder eine Rolle, und jede Vorschau auf der Seite aktualisiert sich während der Eingabe. Dieselbe Marke wird auf der Karte **Profil → Ihre Marke** zusammengefasst. Schriftarten sind echt: Wählen Sie aus Google Fonts, und Lolly speichert die Datei **auf Ihrem Gerät** als Marken-Asset, sodass Ihre Typografie offline verfügbar bleibt und beim Rendern nichts abgerufen wird.

Wenn Sie zufrieden sind, **exportieren Sie die Marke als `LollyBrand`-Paket** — eine einzelne Datei, die ein Kollege importieren kann, um exakt dieselbe Palette, Schriftarten und Regeln zu erhalten. So bewegt sich eine Marke zwischen Menschen und Maschinen, ohne dass ein Server dazwischengeschaltet ist.

> **Marken-Tokens funktionieren in beide Richtungen.** Da Lollys Marke DTCG-Tokens *ist* — das Format, das Penpot nativ liest und schreibt und das Tokens Studio zu Figma bringt —, sind die Palette, mit der Sie *gestalten*, und die Palette, die Lolly *durchsetzt*, ein einziges Dokument und keine zwei Listen, die Sie von Hand synchron halten müssen. Siehe [Design Tokens](/info/design-tokens.html).

## 2. Bringen Sie ein, was Sie bereits haben

Sie beginnen nicht bei null. Lolly öffnet sich für die Designarbeit und die offenen Formate, die Sie bereits besitzen.

### Open-Source-Designdateien

Fertige Arbeiten aus **Figma, Penpot, Illustrator, InDesign oder einer beliebigen SVG-App** müssen nicht in der App eingeschlossen bleiben, in der Sie sie erstellt haben. Öffnen Sie **Layout Studio**, klicken Sie auf **Design importieren**, und die Datei öffnet sich als *lebendiges Layout* — kein flaches Bild. Jede Ebene wird zu einer bearbeitbaren Box: Text bleibt neu eintippbar, Formen bleiben Formen, Bilder landen in Ihrer Bibliothek, und komplexe Vektorgrafiken werden originalgetreu erhalten. Sie kommt bereits an Ihre Markenschriften und Farbregeln angepasst an.

| Sie haben | Bringen Sie es ein als |
|---|---|
| Ein Figma-Frame | Nativ `.fig` (Datei → Lokale Kopie speichern) oder ein SVG-Export |
| Ein Penpot-Design | Sein `.penpot`-Export oder eine beliebige SVG |
| Eine Illustrator-Datei | Nativ `.ai` (PDF-kompatibel) oder `.pdf` — öffnet sich direkt |
| Ein InDesign-Layout | `.idml` (Datei → Exportieren → InDesign-Markup) |
| Alles andere | **Beliebige SVG** — die universelle Tür hinein |

Der gesamte Import erfolgt **auf Ihrem Gerät** — die Datei wird in Ihrem Browser verarbeitet, und nichts wird hochgeladen. Alle Details dazu, und was genau übernommen wird, finden Sie unter [Design importieren](/info/design-import.html).

### Vom Einzelstück zur Vorlage

Und hier liegt der Gewinn: Ein importiertes Layout ist eine ganz normale Layout-Studio-Sitzung. Sobald Sie es **speichern**, lebt es unter einer URL. Jeder mit Lolly kann diese URL öffnen, die Wörter ändern, ein Bild austauschen und seine eigene Version rendern — ohne Design-App, wobei die gesperrten Teile gesperrt bleiben. Aus einem einmaligen Design wird ein wiederverwendbares Werkzeug. Das ist die ganze Idee, erreicht ohne eine einzige Zeile Konfiguration zu schreiben.

### Offene Daten und offene Werkzeuge

Die [Community-Werkzeugsammlung](/info/builders.html) ist Open Source und markenunabhängig — QR-Codes, Stadtpläne, Filter, Datenschutz-Werkzeuge — und rendert gegen *Ihre* Marke, sobald Sie sie aktivieren. Füttern Sie die Werkzeuge auch mit Ihren eigenen offenen Daten: Fügen Sie eine **CSV**- oder **JSON**-Tabelle ein oder legen Sie sie ab, und die sich wiederholenden Felder eines Werkzeugs werden daraus befüllt — ein fertiges Asset pro Zeile.

## 3. Erstellen Sie etwas — und teilen oder automatisieren Sie es

Mit einer aktiven Marke und Ihrem Material zur Hand erzeugt jedes Werkzeug eine fertige Datei:

- **Rendern** Sie jedes Werkzeug als **SVG, PDF, PNG, JPG, WebP, Video** und mehr — bei Bedarf in echten Druckgrößen und physischen Einheiten. Siehe [Export und Formate](/info/exporting.html).
- **Teilen Sie einen Link.** Jeder Werkzeugzustand ist eine URL, sodass ein fertiges Asset reproduzierbar und über Parameter adressierbar ist — committen Sie den Link, generieren Sie ihn bei Bedarf neu.
- **Erledigen Sie es im großen Stil.** Steuern Sie eine Vorlage über eine Tabellenkalkulation im [Batch-Raster](/info/exporting.html): ein fertiges Asset pro Zeile.
- **Automatisieren Sie es.** Derselbe Render-Vorgang läuft über die [CLI](/info/cli.html) und über einen [KI-Agenten](/info/ai-agents.html) — eine URL ist die API.

## Wie es weitergeht

Drei Wege, je nachdem, was Sie hier vorhaben:

- **[Lolly für Kreative](/info/creators.html)** — Sie erstellen Dinge. Die Vorteile, und wie Sie das Meiste aus der App herausholen.
- **[Lolly für Entwickler](/info/builders.html)** — Sie verfassen Werkzeuge, integrieren und stellen bereit. Die technische Dokumentation.
- **[Lolly für Betreiber](/info/operators.html)** — Sie sind verantwortlich für Marke, Sicherheit und Rollout in einer Organisation.
