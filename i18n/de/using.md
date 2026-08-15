# Lolly verwenden

Ein praktischer Leitfaden zur tatsächlichen *Nutzung* der App - ein Tool öffnen, mit der Zeichenfläche arbeiten, exportieren, speichern und teilen. Alles hier läuft **auf Ihrem Gerät**: kein Konto, kein Upload, nach dem ersten Laden ist keine Internetverbindung mehr erforderlich.

> Neu hier? Der [Schnellstart](/info/quickstart.html) bringt dich in wenigen Minuten zum ersten Ergebnis, und [Lolly für Operatoren](/info/operators.html) behandelt die Installation/Bereitstellung der App; auf dieser Seite geht es um die Bedienung, sobald sie geöffnet ist.

## Ein Tool öffnen

![The grey Show hidden tools tile at the end of the grid, and one dimmed hidden tool card revealed beneath it with Unhide in its menu](/t/url-shot?url=%2F%23%2F&width=1440&height=680&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&drive=click%3A%5Bdata-select%3D%22qr-code%22%5D%3Bclick%3A%5Bdata-bulk%3D%22hide%22%5D%3Bwait%3A300%3Bclick%3A.gtile--hiddenbox%3Bpress%3AEnd%3Bwait%3A800&waitSelector=.gallery-view%5Bdata-shots-settled%5D&walker=1&format=svg&rasterDpi=96&dark=1&filename=misc-hidden-tools)

![A tool's split view - the control stack on the left, and the live horizontal bar chart it draws on the right](/t/url-shot?url=%2F%23%2Ftool%2Fd3%3Fct%3Dbar%26t%3DExample%2520data%26st%3DSample%2520values%252C%2520not%2520a%2520real%2520dataset%26d%3DMonth%252CSeries%2520A%252CSeries%2520B%252CSeries%2520C%250AJan%252C12%252C9%252C5%250AFeb%252C18%252C14%252C7%250AMar%252C24%252C17%252C11%250AApr%252C29%252C23%252C15%26lg%3D1&width=1440&height=900&dpi=192&waitMs=2500&walker=1&format=svg&dark=1&filename=vt-tool-split-view)

![The tool gallery - every tool as a card, grouped by category](/t/url-shot?url=%2F%23%2F&width=1440&height=900&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&tolerance=0.03&waitSelector=.gallery-view%5Bdata-shots-settled%5D&walker=1&format=svg&localize=1&dark=1&filename=gallery&try=1)


Der Startbildschirm ist die **Galerie** - jedes Tool, nach Kategorie gruppiert. Klicken Sie auf eine Karte, um das Tool zu öffnen; wenn Sie zuvor schon damit gearbeitet haben, setzt eine Schaltfläche **Fortsetzen** Ihre letzte Sitzung fort. Verwenden Sie das Suchfeld, um nach Namen zu filtern.

Jedes Tool ist eine geteilte Ansicht: **Steuerelemente** auf der einen Seite, eine Live-**Vorschau** (die Zeichenfläche) auf der anderen. Ändern Sie ein beliebiges Steuerelement, und die Vorschau aktualisiert sich sofort.

> Einige Tools (wie **Design**) öffnen stattdessen als **freie Zeichenfläche** - eine chromfreie Oberfläche zur direkten Bearbeitung, auf der Sie Boxen mit Text, Formen und Bildern ziehen, in der Größe ändern, drehen und einrasten lassen und per Doppelklick Text direkt bearbeiten. Sie exportiert über denselben Renderpfad wie jedes andere Tool, sodass die Zeichenfläche *die* Datei *ist*. Siehe [Die freie Zeichenfläche](#the-free-canvas-design) weiter unten.

## Die Zeichenfläche (Vorschau)

![The zoom HUD in the corner of the canvas - minus, the live percentage, plus, Fit, then the theme and sound toggles](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&css=.stage-nav%7Bopacity%3A1!important%7D&cropSelector=.stage-nav&walker=1&format=svg&dark=1&filename=use-zoom-hud)

Die Vorschau zeigt immer genau das, was exportiert wird.

**Desktop**

- **Zoom:** Cmd/Ctrl-Scrollen oder Pinch-Geste auf einem Trackpad - der Zoom zentriert sich auf Ihren Zeiger.
- **Verschieben (Pan):** Halten Sie **Leertaste** gedrückt und ziehen Sie, oder ziehen Sie mit der **mittleren Maustaste**. (Einfache Klicks bleiben frei, um Teile des Designs anzuklicken.)
- **Tastatur:** `0` = an Fenster anpassen · `1` = 100 % · `+` / `−` = Zoom.
- **Zoom-HUD:** das kleine Bedienelement `−  NN%  +  Fit` in der Ecke. Klicken Sie auf den Prozentwert, um zwischen Fit ↔ 100 % umzuschalten.

**Touch**

- **Pinch-Geste** zum Zoomen, **Ziehen** zum Verschieben, **Doppeltippen**, um auf „Fit“ zurückzusetzen.

**Klicken, um zu einem Steuerelement zu springen:** Klicken Sie auf ein beliebiges Element im Design, und das passende Eingabefeld in der Seitenleiste erhält den Fokus und wird ins Sichtfeld gescrollt - bei einer sich wiederholenden Zeilengruppe klappt genau die Zeile auf, die Sie angeklickt haben, sodass das Bearbeiten dessen, was Sie sehen, nur einen Klick entfernt ist.

Eine Änderung der Abmessungen setzt die Ansicht immer auf eine saubere Einpassung zurück.

### Die freie Zeichenfläche (Design)

![Design's free canvas - the artboard with its surrounding pasteboard](/t/url-shot?url=%2F%23%2Ftool%2Fdesign%3Ftemplate%3D__blank__&width=1440&height=900&dpi=192&waitMs=2000&walker=1&format=svg&localize=1&dark=1&filename=design)

Tools mit freier Zeichenfläche fügen eine Arbeitsfläche *um* das Artboard herum hinzu, wie ein Montagebrett bei Designern:

- **Bereitstellung außerhalb der Zeichenfläche.** Ziehen Sie eine Box über den Rahmenrand hinaus, bleibt sie vollständig **sichtbar und auswählbar** - parken Sie Elemente seitlich, während Sie die Komposition anordnen, und ziehen Sie sie dann wieder hinein. Alles außerhalb des Rahmens wird **sanft abgeblendet**, sodass der Exportbereich stets auf einen Blick erkennbar ist, und der Rahmen behält seinen Schatten, um genau zu markieren, wo die Datei beginnt.
- **Nur der Rahmen wird exportiert.** Die exportierte Datei ist durch das Artboard begrenzt - alles, was außerhalb bleibt (oder der Teil einer Box, der über den Rand hinausragt), wird einfach aus der Ausgabe herausgeschnitten, sowohl bei Raster- als auch bei Vektorformaten.
- **Zoomen Sie über Fit hinaus heraus** (bis auf 20 %), um das gesamte Montagebrett zu sehen, wenn Sie Elemente weit außerhalb des Rahmens platziert haben.
- **Größenveränderbares Artboard.** Eine Änderung der Exportabmessungen ändert die Größe des Rahmens vor Ort; Boxen behalten ihre Positionen bei, sodass Sie ein Layout um bestehende Inhalte herum neu einrahmen können.

## Auf einem Smartphone

![The free-canvas tool rail: a drag grip, the Lolly menu, then Pointer, Add a box, Pen and Timeline](/t/url-shot?url=%2F%23%2Ftool%2Fdesign%3Ftemplate%3D__blank__&width=1440&height=900&dpi=192&waitMs=2600&css=.fc-toolbar%7Bopacity%3A1!important%7D&cropSelector=.fc-toolbar&walker=1&format=svg&dark=1&filename=pen-editor-rail)

![Two pen paths rendered straight from a link: a stroked S-curve and a closed filled blob](/t/url-shot?url=%2F%23%2Ftool%2Fdesign%3Fboxes%3D%5B%7B%22id%22%3A%22paper%22%2C%22kind%22%3A%22box%22%2C%22x%22%3A0%2C%22y%22%3A0%2C%22w%22%3A1080%2C%22h%22%3A1080%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23ffffff%22%7D%2C%7B%22id%22%3A%22curve%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A140%2C%22y%22%3A180%2C%22w%22%3A800%2C%22h%22%3A420%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%22%2C%22stroke%22%3A%22%234f84ba%22%2C%22strokeW%22%3A14%2C%22path%22%3A%221!cubic!0_.02!.85!!!.25!-.45!s_.5!.5!-.22!.32!.22!-.32!y_.98!.12!-.25!.45!!!s%22%7D%2C%7B%22id%22%3A%22blob%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A340%2C%22y%22%3A620%2C%22w%22%3A400%2C%22h%22%3A320%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23d1e7ff%22%2C%22stroke%22%3A%22%234f84ba%22%2C%22strokeW%22%3A6%2C%22fillRule%22%3A%22nonzero%22%2C%22path%22%3A%221!catmull-rom!1_.5!0_1!.42_.78!1_.22!1_0!.42%22%7D%5D&width=1440&height=900&dpi=192&waitMs=2600&cropSelector=%23tool-canvas&walker=1&format=svg&dark=1&filename=pen-path-geometry)

![A tool on a phone-width screen - controls as a sheet up top, the generated palette filling the preview below, and the render pill floating bottom-centre](/t/url-shot?url=%2F%23%2Ftool%2Fcolor-palette%3Fseed%3Df97316%26harmony%3Dadjacent-3%26steps%3D9&width=430&height=900&dpi=192&waitMs=2200&walker=1&format=svg&dark=1&filename=vt-phone-palette)

Auf schmalen Bildschirmen wird das Layout zu einer einzigen Spalte umgeflossen:

- Die **Steuerelemente werden zu einem Sheet (Bedienfeld)** oben mit einem **Ziehgriff** an der Unterkante. Ziehen Sie am Griff, um die Größe zu ändern - es rastet bei **Peek / Half / Full** ein - oder **tippen** Sie auf den Griff, um zwischen eingeklappt ↔ ausgeklappt umzuschalten. Die Vorschau füllt den Bereich darunter aus und bleibt während der Bearbeitung sichtbar.
- Eine schwebende Schaltfläche **Render** öffnet das **Export**-Sheet - alle Steuerelemente für Format, Größe, Kopieren, Speichern und Herunterladen an einem Ort. Schließen Sie es, indem Sie auf den Hintergrund tippen.

## Steuerelemente (Eingaben)

![A crescent and a ring with a real hole, both produced by Subtract](/t/url-shot?url=%2F%23%2Ftool%2Fdesign%3Fboxes%3D%5B%7B%22id%22%3A%22paper%22%2C%22kind%22%3A%22box%22%2C%22x%22%3A0%2C%22y%22%3A0%2C%22w%22%3A1080%2C%22h%22%3A1080%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23ffffff%22%7D%2C%7B%22id%22%3A%22crescent%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A120%2C%22y%22%3A330%2C%22w%22%3A374%2C%22h%22%3A400%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%234f84ba%22%2C%22path%22%3A%221!cubic!1_.750491!.957645!-.128211!-.062578!-.065985!.027232!c_.534759!1!.076762!!-.295339!!c_0!.5!!.276142!!-.276142!c_.534759!0!-.295339!!.200102!!c_1.000984!.254923!-.09169!-.152161!-.021205!-.003239!c_.935829!.25!.022185!!-.221505!!c_.534759!.625!!-.207107!!.14459!c%22%7D%2C%7B%22id%22%3A%22ring%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A580%2C%22y%22%3A330%2C%22w%22%3A400%2C%22h%22%3A400%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%234f84ba%22%2C%22fillRule%22%3A%22nonzero%22%2C%22path%22%3A%221!cubic!1_1!.5!!-.276142!!.276142!c_.5!1!.276142!!-.276142!!c_0!.5!!.276142!!-.276142!c_.5!0!-.276142!!.276142!!c*1!cubic!1_.5!.7!-.110457!!.110457!!c_.7!.5!!.110457!!-.110457!c_.5!.3!.110457!!-.110457!!c_.3!.5!!-.110457!!.110457!c%22%7D%5D&width=1440&height=900&dpi=192&waitMs=2600&cropSelector=%23tool-canvas&walker=1&format=svg&dark=1&filename=path-ops-boolean-result)

![A tool's control stack - a text field, colour triggers and a slider, and nothing else the author chose to lock down](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&cropSelector=%23tool-inputs&walker=1&format=svg&dark=1&filename=use-tool-inputs)

Tools legen nur die Eingaben offen, die variieren sollen - alles andere (Farben, Layout, Typografie, Logik) ist vom Tool-Autor festgelegt, sodass alles, was Sie erstellen, den vom Autor festgelegten Regeln entspricht. Zu den Eingaben gehören Text, Schieberegler, Farbwähler, Dropdowns, Daten, Bildauswahl und sich wiederholende Zeilengruppen. Manche sind unter einklappbaren Abschnitten gruppiert.

**Zurücksetzen:** *Änderungen verwerfen* setzt jede Eingabe auf ihre Standardwerte zurück.

## Ihre Angaben & Ihr Profilfoto

![Sequence Studio's timeline: the transport, the ruler, an overlay lane, the magnetic sequence row with its clips and seam chips, and the Always on strip](/t/url-shot?url=%2F%23%2Ftool%2Fsequence-studio&width=1440&height=900&dpi=192&waitMs=7000&css=.tl-panel%7Bheight%3A252px!important%7D&cropSelector=.tl-panel&format=svg&walker=1&tolerance=0.03&dark=1&filename=seq-studio-timeline)

![The whole editing surface: artboard, tool rail and timeline together](/t/url-shot?url=%2F%23%2Ftool%2Fsequence-studio&width=1440&height=900&dpi=192&waitMs=7000&css=.fc-toolbar%7Bopacity%3A1!important%7D&cropSelector=%23tool-stage&format=svg&walker=1&tolerance=0.03&dark=1&filename=seq-studio-stage)

**Profil** (oben rechts in der Galerie) enthält Ihren Namen, Kontaktdaten und ein optionales **Profilfoto**. Tools, die nach diesen Feldern fragen, füllen sie automatisch vorab aus - legen Sie sie einmal fest, und Ihre E-Mail-Signatur, Lockups und Badges füllen sich von selbst. Sie können jedes Feld pro Sitzung weiterhin überschreiben. Aktivieren Sie **Meine Angaben verwenden**, damit ein Tool sie lesen darf.

Ihr Profilfoto und Ihre Angaben existieren **nur auf diesem Gerät**. Ein Profil kann mehr sein als nur Sie selbst - ein Team oder eine Rolle, in die Sie hin und wieder schlüpfen. Das vollständige Bild, einschließlich der Verwaltung mehrerer Profile, finden Sie unter **[Profile](/info/profile.html)**.

## Speichern & Fortsetzen

![The two-half render pill - an up arrow that opens the export panel, and a tick that saves the session in place](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&css=%23tool-inputs%7Bdisplay%3Anone%7D&cropSelector=.render-pill&walker=1&format=svg&dark=1&filename=use-render-pill)

Klicken Sie auf **Speichern**, um die aktuellen Eingaben als Sitzung für dieses Tool zu speichern. Sie können mehrere benannte Sitzungen pro Tool aufbewahren; die Schaltfläche **Fortsetzen** jedes Tools öffnet Ihre letzte Sitzung erneut, und die **Verlaufsschaltfläche** (oben rechts, neben Ihrem Profil) listet jede gespeicherte Sitzung über alle Tools hinweg auf. Sitzungen sind gerätelokal. Um sie zu organisieren, öffnen Sie **Projekte** (unten).

## Projekte

![Projects - saved sessions organised into nestable folders](/t/url-shot?url=%2F%23%2Fp&width=1440&height=900&dpi=192&waitMs=1200&walker=1&format=svg&localize=1&dark=1&filename=projects)

**Projekte** - öffnen Sie es über den Tab **Projekte** neben **Tools** oder über **Profil → Speicher → In Projekten organisieren** - ist ein Zuhause für alles, was Sie gespeichert haben, und funktioniert wie ein Dateimanager:

- **Verschachtelbare Ordner.** Gruppieren Sie gespeicherte Sitzungen in Ordner und Ordner innerhalb von Ordnern, so tief wie Sie möchten. Erstellen Sie einen Ordner, benennen Sie ihn um, oder ziehen Sie eine Kachel auf einen anderen Ordner, um sie zu verschieben; eine Breadcrumb-Navigation führt Sie zurück nach oben. Ein stets vorhandener Ordner **Nicht kategorisiert** enthält alles, was noch nicht abgelegt wurde.
- **Neue Arbeit direkt ablegen.** Innerhalb eines Ordners öffnet **+ Neues Tool** ein Tool und legt dessen erste Speicherung automatisch in diesem Ordner ab.
- **Mehrfachauswahl (Desktop).** Aktivieren Sie das Kontrollkästchen einer Kachel, ziehen Sie ein Auswahlrechteck über die leere Fläche, oder verwenden Sie **Umschalt/Cmd-Klick**; **Rechtsklick** auf eine Kachel öffnet deren Kontextmenü. Führen Sie dann eine Aktion für die gesamte Auswahl auf einmal aus.
- **Einen ganzen Ordner oder eine Auswahl rendern.** **Ordner rendern** exportiert jede gespeicherte Sitzung in einem Ordner - einschließlich seiner Unterordner - als eine verschachtelte `.zip`. **Auswahl rendern** macht dasselbe für jede Mehrfachauswahl, und eine einzelne Sitzung wird direkt in ihre eigene Datei gerendert. Kein Batch/Pro erforderlich.
- **Eine gespeicherte Sitzung teilen.** Rechtsklick auf eine Sitzung → **Link teilen**, um einen Link zu kopieren, der sie mit exakt denselben Eingaben wieder öffnet (der vollständige Teilen-Dialog - siehe unten).

## Einen Link teilen

Jede Eingabe wird in der Seiten-URL erfasst, sodass ein Link *das* Design *ist*. Verwenden Sie **Teilen** in den Exportsteuerelementen - oder **Link teilen** bei einer gespeicherten Sitzung in Projekten -, um den **Teilen-Dialog** zu öffnen: ein kopierbereiter Link plus Umschalter für die Verschlüsselung des Links und dafür, was beim Öffnen passiert (Vollbild, ausgeklapptes Exportfeld, Download-beim-Öffnen mit `&export`, oder Kopieren-in-die-Zwischenablage mit `&copy`).

Ein umfangreiches Design würde eine lange URL ergeben, daher bietet der Dialog auch einen **Kürzesten Link**, der den gesamten Zustand in ein kompaktes Token packt - die lesbare Form ist ebenfalls immer verfügbar. Fügen Sie ihn einem Kollegen ein, setzen Sie ein Lesezeichen, oder committen Sie ihn. (Vollständige Details: [URL-Modus](/info/url-mode.html).)

> Bilder, die Sie von Ihrem Gerät hochgeladen haben, sind **nicht** in einem geteilten Link enthalten - sie existieren nur auf Ihrem Rechner.

## Live-Kamera (bewegungsreaktive Tools)

Die Foto-**Filter** - Halftone, Scanline, Posterize, Duotone - zeigen eine Schaltfläche **Go live**, sofern eine Kamera verfügbar ist. Schalten Sie sie ein, und der Effekt verfolgt Ihre Webcam Bild für Bild, sodass er auf Bewegung reagiert; Sie können das Ergebnis als GIF, WebM oder MP4 aufzeichnen. Bilder werden **auf Ihrem Gerät** gelesen und verarbeitet und verlassen es nie, und die Kamera wird freigegeben, sobald Sie anhalten oder das Tool verlassen. (Jede Bildauswahl verfügt außerdem über **Foto aufnehmen**, um ein einzelnes Bild als geräteinternes Bild zu erfassen.)

## Meine Bilder

![The View and sort popover in Projects open, with a theme row, a View choice of Preview or List, and Name, Date added and Last modified under Sort](/t/url-shot?url=%2F%23%2Fp&width=900&height=700&dpi=192&waitMs=1400&drive=click%3A.projects-viewopts&cropSelector=.projects-viewmenu&walker=1&format=svg&dark=1&filename=misc-projects-sort)

![Two tool cards ticked in the Tools gallery, with the floating selection bar offering Available offline, View sessions, Favourite, Hide and Copy link](/t/url-shot?url=%2F%23%2F&width=1440&height=900&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&drive=click%3A%5Bdata-select%3D%22qr-code%22%5D%3Bclick%3A%5Bdata-select%3D%22mesh-gradient%22%5D&waitSelector=.gallery-view%5Bdata-shots-settled%5D&walker=1&format=svg&dark=1&filename=misc-bulkbar-gallery)

Wenn ein Tool Ihnen erlaubt, ein Bild von Ihrem Gerät hinzuzufügen, wird es verkleinert, von EXIF/GPS-Daten befreit und in Ihrer persönlichen Bibliothek **Meine Bilder** gespeichert (unter **Profil → Speicher**). Verwenden Sie es in jedem beliebigen Tool erneut. Die Bibliothek ist in ihrer Größe begrenzt und vollständig lokal - verwalten oder löschen Sie Bilder dort.

## Der Katalog - Ihre Asset-Bibliothek

![The Catalogue - brand assets, swatches and fonts, plus your own uploads](/t/url-shot?url=%2F%23%2Fc%3Fsection%3Dswatches%2Cfonts&width=1440&height=900&dpi=96&waitMs=2400&css=.plat-swatch-grid~%2A%7Bdisplay%3Anone%7D&walker=1&format=svg&localize=1&dark=1&filename=catalogue)

Der **Katalog** (`#/c` oder der Link **Katalog** im Menü) sammelt alles, worauf Ihre Tools zurückgreifen können - Markenlogos, Bilder, Audio und Bewegtbild, nach Art gruppiert - und hier liegen auch Ihre **eigenen kreativen Dateien**. Kein Server, keine Admin-Konsole, kein Pull Request: alles liegt auf Ihrem Gerät.

- **Bringen Sie Ihre Dateien herein.** Ziehen Sie ein beliebiges Bild, eine SVG-Datei, einen Audioclip, ein Video, eine Lottie-Datei oder ein PDF auf den Upload-Bereich - oder klicken Sie zur Auswahl - und es landet sofort in Ihrem Katalog, bereit im Asset-Picker jedes Tools. Nehmen Sie so viel auf, wie Sie möchten; es verlässt niemals Ihr Gerät.
- **Favorisieren Sie, wonach Sie oft greifen.** Markieren Sie ein Asset (oder ein Marken-Farbfeld) mit ★, und es wird oben in jedem Picker angeheftet, sodass Ihr bevorzugtes Logo oder Ihre bevorzugte Farbe nur einen Klick entfernt ist.
- **Aufräumen.** Kategorisieren Sie ein Asset in eine andere Gruppe um, blenden Sie ein geteiltes Marken-Asset aus, das Sie nicht nutzen (mit **Ausgeblendete anzeigen**, um es zurückzuholen), oder löschen Sie Ihre eigenen Uploads vollständig.

### Nehmen Sie Ihre Palette und Schriften überallhin mit

![The Swatches panel - the five palette download buttons across the top, then every brand colour as a copyable chip](/t/url-shot?url=%2F%23%2Fc%3Fsection%3Dswatches&width=1440&height=900&dpi=96&waitMs=1800&css=.cat-group%3Anot%28%5Bdata-group%3Dswatches%5D%29%7Bdisplay%3Anone%7D&cropSelector=%5Bdata-group%3Dswatches%5D&walker=1&format=svg&dark=1&filename=use-swatch-downloads)

Das **Farbfelder**-Panel des Katalogs dient nicht nur als Referenz - klicken Sie auf eine Farbe, um sie zu kopieren, oder **laden Sie die gesamte Markenpalette herunter** in dem Format, das Ihr anderes Tool spricht:

- **Design Tokens (JSON)**, **CSS-Variablen** oder **CSS-Klassen** - übernehmen Sie die Marke direkt in ein Stylesheet oder einen Build;
- **Adobe Swatch Exchange (.ase)** - laden Sie sie in Illustrator oder Photoshop;
- **GIMP-Palette (.gpl)** - für GIMP oder Inkscape.

Das **Schriften**-Panel listet Ihre Markenschriften mit einem **Download** neben jeder auf, um sie lokal zu installieren oder einer Druckerei zu übergeben. (Der Tab „Farben“ des [Brand Studio](/info/brand-studio.html) bietet denselben Palettendownload.)

Assets sind die eine Hälfte des offenen Do-it-yourself-Pfads; die andere ist das **Erstellen eigener Tools** - die freie Zeichenfläche (Design, oben beschrieben) lässt Sie eines visuell erstellen, ganz ohne Code.

## Sound & Barrierefreiheit

Lolly soll für alle angenehm zu benutzen sein. Die Oberfläche ist per Tastatur navigierbar, benutzerdefinierte Steuerelemente tragen korrekte Beschriftungen für Screenreader, und die Live-Vorschau jedes Tools wird als ein einzelnes beschriftetes Bild verfügbar gemacht, das beschreibt, was gerade entsteht.

Eine dezente Ebene **unterstützender Klänge** bestätigt, was Sie tun - die Ankunft in der Galerie, eine Prüfung gültiger vs. ungültiger Content Credentials, das Schließen eines Panels, das Wechseln eines Filters. Sie ist **standardmäßig aktiviert**, aber stets optional: Schalten Sie **Sound** überall dort aus, wo der Schalter erscheint (im Optionen-Popover jeder Ansicht oder unter **Profil**), und die Wahl wird gespeichert.

Neben diesem Schalter befindet sich der **Neurospicy Mode** - ein optionaler, beruhigender Fokus-Track im Hintergrund, der leise abgespielt wird, während Sie arbeiten. Wenn Sie ihn einschalten, öffnet sich in der unteren Ecke ein kleines **Player-Dock**, das Ihnen durch die App folgt; von dort aus können Sie einen Track suchen und auswählen, vor- und zurückspringen, die Lautstärke einstellen und es minimieren oder schließen. Die Trackliste umfasst einige Kategorien - prozedurale *Lolly Sings*-Melodien, Ambient-Loops und Beats, Ihre eigenen hochgeladenen Audiodateien sowie eine Handvoll Live-Internet-**Radio**-Sender (diese benötigen eine Verbindung; alles andere wird offline abgespielt). Er ist **standardmäßig deaktiviert** und wird, wie Sound, sitzungs- und geräteübergreifend gespeichert. Wird Sound deaktiviert, wird auch der Fokus-Track stummgeschaltet.

## Speicher & Datenschutz

Alles wird in der lokalen Datenbank Ihres Browsers gespeichert (IndexedDB): Ihr Profil, gespeicherte Sitzungen, hochgeladene Bilder und ein Cache heruntergeladener Katalog-Inhalte. **Profil → Speicher** zeigt die Auslastung und ermöglicht Ihnen:

- **Cache leeren** - verwirft heruntergeladene Katalog-Inhalte (wird beim nächsten Laden erneut synchronisiert).
- **Alle meine Daten löschen** - löscht Profil, Sitzungen und Bilder. *Kann nicht rückgängig gemacht werden.*

![The storage card on a phone-width screen: every category of on-device data named, with the Clear all my data button at the bottom](/t/url-shot?url=%2F%23%2Fprofile%3Ffocus%3Dstorage-section&width=430&height=1600&dpi=192&waitMs=2400&css=.welcome-dialog%2C.personalize-nudge%2C.store-manages%2C.storage-subsection%2C.store-selbar%2C.store-chip-val%2C%23store-hero-num%2C%23store-headroom%2C%23store-quota%2C%23store-reclaim%7Bdisplay%3Anone%7D&format=svg&walker=1&cropSelector=%23storage-section&dark=1&filename=pv-storage-clear)

Es wird nichts irgendwohin übertragen. Keine Telemetrie, kein Cloud-Rendering.

## Umzug auf ein anderes Gerät

Da alles auf Ihrem Gerät liegt, können Sie mit **Profil → Speicher → Auf ein anderes Gerät umziehen** alles auf eine zweite Installation übertragen - kein Konto, keine Cloud:

- **Meine Daten exportieren** lädt eine einzelne `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` herunter (die Namensteile stammen aus Ihrem Profil und entfallen, wenn sie nicht gesetzt sind; `<n>` ist ein täglicher Zähler, damit Exporte am selben Tag nicht kollidieren) mit Ihrem Profil, jeder gespeicherten Sitzung (mit Vorschaubild), Ihren hochgeladenen Bildern und Ihren Einstellungen (Design, Seitenleistenbreite, lokale Aktivitätsstatistiken).
- **Daten importieren…** auf der anderen Installation liest diese Datei wieder ein. Es wird **zusammengeführt**: Alles mit demselben Namen (Ihr Profil, ein Sitzungsplatz, ein Bild) wird durch die importierte Kopie ersetzt; alles andere auf diesem Gerät bleibt erhalten. Gespeicherte Sitzungen verknüpfen sich automatisch neu mit Ihren importierten Bildern.

Der Katalog-Cache ist nicht enthalten - er lädt sich auf dem neuen Gerät selbst erneut herunter. Das Paket ist ein einfaches Zip (`manifest.json` + `profile.json` + `sessions.json` + `assets.json` + `assets/blobs/…` + `prefs.json`, Format-ID `lolly-backup`), sodass es E-Mail, USB oder AirDrop unversehrt übersteht und von jeder Shell im selben Format gelesen wird. Jeder Teil ist mit einer Prüfsumme versehen, sodass eine beim Transport beschädigte Datei beim Import erkannt wird, statt halb kaputt wiederhergestellt zu werden. (Vollständige Formatspezifikation: [Datenübertragung](/info/data-transfer.html).)

## Ein Design importieren (Figma, Penpot, Illustrator, InDesign)

Sie können ein bestehendes Design in Lolly übernehmen und daran weiterarbeiten: Öffnen Sie **Design**, klicken Sie in der Werkzeugleiste der Zeichenfläche auf **Design importieren**, und wählen Sie eine Figma-**.fig**- oder SVG-Datei, eine Penpot-**.penpot**-Datei, eine Illustrator-**.ai**-/**.pdf**-Datei oder eine InDesign-**.idml**-Datei. Ebenen werden zu bearbeitbaren Boxen auf der freien Zeichenfläche - Text bleibt neu eintippbar, Bilder landen in **Meine Bilder**, und Schrift und Farben richten sich nach den globalen Markenvorgaben - anschließend wird das Ergebnis wie jede andere Sitzung gespeichert, geteilt und gerendert. Das Parsen erfolgt vollständig auf Ihrem Gerät. Vollständige Details: **[Ein Design importieren](/info/design-import.html)**.

## Exportieren

Die vollständige Geschichte finden Sie unter **[Exportieren & Formate](/info/exporting.html)** - Formatwahl, Ausgabegröße und Druckeinheiten, Transparenz, Video sowie Kopieren/Teilen. Kurz gesagt: Wählen Sie ein Format, stellen Sie bei Bedarf die Größe ein, und klicken Sie auf **Herunterladen** (oder **Kopieren** in die Zwischenablage).

## Batch-Modus (Pro)

![The batch toolbar - zip name, units, DPI and the format every row inherits, with Sessions and Render on the right](/t/url-shot?url=%2F%23%2Fpro&width=1440&height=900&dpi=192&waitMs=3500&cropSelector=.pro-toolbar&walker=1&format=svg&dark=1&filename=use-batch-toolbar)

Für Power-User rendert **Batch** (von der Galerie aus verlinkt, hinter dem Pro-Feature-Flag, das standardmäßig aktiviert ist) viele Varianten auf einmal - ein Raster, in dem jede Zeile ein Satz von Eingaben ist, die gemeinsam exportiert werden. Ideal, um eine Karte in ein Dutzend Sprachen zu lokalisieren oder jede Größenvariante in einem Durchgang zu erzeugen. Füllen Sie Zeilen durch Eintippen, direktes Einfügen aus einer Tabellenkalkulation oder Importieren einer CSV (Sie können auch eine zurück exportieren), und legen Sie Format, Größe und Ausgabedateiname pro Zeile fest. Speichern Sie ein ganzes Raster als benannte **Batch-Sitzung**, die sich von der Galerie aus wieder öffnen lässt, und laden Sie jede Zeile als eine einzelne `.zip` herunter.

Batch dient dazu, **viele Varianten einer Vorlage** auf einmal zu erzeugen. Um Sitzungen, die Sie **bereits gespeichert** haben, neu zu rendern, verwenden Sie **Projekte → Ordner rendern / Auswahl rendern** (oben) - kein Pro erforderlich.

## Offline & Installation

Lolly ist eine PWA. Nach dem ersten Laden funktioniert sie **offline** - installieren Sie sie über die Adressleiste Ihres Browsers (oder *Zum Startbildschirm hinzufügen* auf Mobilgeräten) für ein App-ähnliches Vollbilderlebnis. Sie aktualisiert sich selbst, sobald Sie wieder online sind.
