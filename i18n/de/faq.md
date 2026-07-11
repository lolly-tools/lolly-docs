# FAQ

Häufig gestellte Fragen, die im Akkordeon auf der `/info`-Landingpage angezeigt werden.

**Pflegehinweis:** Jede `##`-Überschrift unten ist eine Frage; alles darunter
(bis zur nächsten `##`) ist die Antwort. Antworten verwenden dasselbe einfache Markdown wie
der Rest der Website — Absätze werden durch eine Leerzeile getrennt. Fragen hier
hinzufügen, entfernen oder neu anordnen und anschließend `npm run build:info` (oder `npm run dev:web`)
erneut ausführen. Alles oberhalb der ersten `##`-Überschrift (dieser Titel und diese Hinweise) wird vom Build ignoriert.

## Was geschieht, wenn ich auf der /profile-Seite dem Opt-in zustimme?

Wenn Sie Lolly zum ersten Mal verwenden, ist alles, was Sie überall eingeben, vollständig privat, bis Sie diese Informationen bewusst über Medien oder einen Freigabelink (sofern online) nach außen geben möchten.

Wenn das Opt-in ausgewählt ist, betten wir einige Ihrer Profilinformationen als Herkunftsnachweis in Assets und Bundles ein, um Sie als Quelle zu identifizieren.

Lolly erzeugt eine große Menge an Inhalten. Wir verfolgen einen strikten Ansatz der Datenminimierung, um Risiken zu vermeiden.

### Was sind die Feature-Flags?

Feature-Flags schalten Teile von Lolly ein oder aus. Normalerweise steuert ein Administrator diese — bei Lolly haben Sie die Kontrolle.

## Wie bekomme ich die mobilen Apps oder Desktop-Apps?

Jeder kann seine eigenen Apps verteilen; die Tools und die Konfiguration dieser Apps sollten je nach Zielgruppe stark variieren. Es gibt also keine einzige App, es sei denn, Sie haben sie selbst erstellt oder eine relevante Person hat sie Ihnen gegeben.

## Warum der Name „Lolly Tools“?

**Lolly** Weil Freiheit süß ist.
**Tools** sind untätig, wenn sie nicht verwendet werden. Sie spionieren Ihnen nicht nach, führen keine geheimen Programme aus, 
Setzen Sie sie ein — Ihre Anweisungen, Ihre Aktionen, Ihre Bedingungen.

**Lolly** ist ein australischer, neuseeländischer und britischer Begriff für „Süßigkeiten“ oder „Bonbons“. Genau wie Lollies sind Tools sehr verlockend für Menschen, die sie brauchen.

Wir lachen auch über die Zeit und die Kosten, die wir mit diesem Ansatz sparen.

## Welche Hürden könnte ich bei der Einführung von Lolly erwarten?

Lolly fügt sich überall dort ein, wo Sie bereits Dateien erzeugen — die CLI nutzt dieselbe Engine
wie die App, sodass ein um 2 Uhr nachts laufender Pipeline-Durchlauf nicht von dem abweichen kann, was eine Person in einem
Browser als Vorschau sieht. Die Reibung bei der Einführung ist selten technischer Natur; sie ist organisatorisch. Rechnen Sie mit Folgendem:

**Tools und der Markenkatalog müssen erstellt werden.** Lolly ist eine Plattform, kein
fertiges Paket Ihrer Vorlagen. Jemand muss den Asset-Katalog definieren (Logos,
Farbpaletten, Schriften als dauerhafte IDs) und für jeden Ausgabetyp das Manifest und die Vorlage schreiben.  

**Governance läuft über Git.** „Der PR-Review *ist* die Moderation“ ist für
Entwickler elegant und für die meisten Marken- und Marketingteams ungewohnt. Wenn die Personen, die
Markenentscheidungen verantworten, nicht in Git zu Hause sind, brauchen Sie einen Workflow, der sie einbindet — oder die IT-Abteilung
wird stillschweigend zum strategischen Design-Partner und umfassenderen institutionellen Torwächter.
Das wird in lange laufenden Produktionsumgebungen von vielen bevorzugt. 

**Es ist bewusst eng gefasst — stellen Sie es entsprechend dar.** Lolly ist nicht für maßgeschneiderte oder
Hero-Inhalte gedacht. Es *ist* Ihr persönliches DAM — angereichert und verstärkt durch Ihr Design-
System, Ihre Tools und Ihren Katalog — und es *verfügt* über eine offene Arbeitsfläche (Layout Studio), aber
selbst dort richten sich Farben, Schrift und Assets nach den aktiven Design-Vorgaben, sodass die freie
Anordnung innerhalb des Systems bleibt. Im Vergleich zu Figma oder Canva wirkt es
eingeschränkt. Als das beurteilt, was es ist — operationalisierte, wiederkehrende Asset-Erstellung in
massivem Maßstab — gibt es keine Konkurrenz. Die falsche Einordnung ist der häufigste Rückschlag.

**Change-Management auf der Erstellungsseite.** Bestehende Prozesse funktionieren heute, selbst wenn
das Ergebnis nicht markenkonform ist. Sie auf die Engine umzustellen bedeutet erneutes Testen, erneutes Erlernen,
und „wir können schon Dateien erzeugen“ wird zur Ausrede, nicht zu migrieren. Beginnen Sie damit, eine
hochsichtbare, produktionsreife Ausgabe umzustellen und das Vorher/Nachher nebeneinander zu zeigen.

Lolly hebt alles auf ein höheres Niveau.


## Was unterscheidet Utilities von Tools?

**Einfache Antwort →** Utilities müssen nicht immer rendern und können daher eine andere UX erhalten. 

**Eigentliche Antwort →** Der Grund, warum Utilities innerhalb von Lolly Tools gehostet werden können, ist, eine weitere „Komfortebene“ als Schutz hinzuzufügen, um Datenexfiltration unattraktiv zu machen. 

Warum? Weil bekannt ist, dass Menschen jeden Tag **vertrauliche Inhalte, die sie bereits besitzen**, nehmen und einer
beliebigen Website übergeben, um eine kleine mechanische Operation ausführen zu lassen:

- „**Diese PDF komprimieren**“ → lädt einen Vertrag / eine Gehaltsabrechnung / eine Vorstandspräsentation bei unbekannten Anbietern hoch.
- „**HEIC in JPG umwandeln**“ → lädt private Fotos (mit GPS-EXIF-Daten) auf einen werbefinanzierten Host hoch
- „**Dieses Bild zuschneiden / skalieren**“ → lädt einen Produkt-Screenshot oder ein unveröffentlichtes Asset hoch
- „**Dieses JSON formatieren**“ / „dieses JWT dekodieren“ → fügt API-Antworten, Tokens, Geheimnisse in einen Formatierer ein
- „**Diese PDFs zusammenführen**“ → lädt **zwei Dokumente hoch, die niemals denselben Server teilen sollten**

Diese Websites und ihr riesiger Klon-Long-Tail sind **standardmäßig nicht vertrauenswürdig** — mit
unbekannter Aufbewahrungsdauer, unbekannten Rechtsräumen, unbekannten Subunternehmern und einem werbe-/affiliate-basierten
Geschäftsmodell, das jeden Anreiz hat, zu behalten, was Sie ihm geben. Die Operation ist
trivial; der **Inhalt ist die Kosten.** 

Wir gewinnen den Kampf um Governance mit hervorragender Bequemlichkeit und Service. 

## Kann Lolly meine Figma-, Penpot-, Illustrator- oder InDesign-Dateien bearbeiten und rendern?

Ja. Öffnen Sie **Layout Studio** und klicken Sie auf **Design importieren**: Es akzeptiert eine native Figma-**.fig**-Datei (Lokale Kopie speichern), einen Penpot-**.penpot**-Export, eine Illustrator-**.ai**- oder **.pdf**-Datei, ein InDesign-**.idml** (Datei → Exportieren → InDesign Markup) oder **jede SVG**-Datei (die breite Tür — fast jede Design-App exportiert sie). Alles wird vollständig auf Ihrem Gerät verarbeitet, kein Konto und kein Plugin nötig.

Ebenen kommen als bearbeitbare Boxen auf der offenen Arbeitsfläche an: Text bleibt neu eintippbar, Formen bleiben Formen, Bilder werden Teil Ihrer geräteinternen Bibliothek, und Schrift und Farben richten sich nach den Marken-Vorgaben. Speichern Sie es, und das Layout wird zu einer wiederverwendbaren, über eine URL adressierbaren Vorlage, die jeder mit Lolly neu befüllen kann — und Sie können lebendige Tools einbinden (einen QR-Code, ein Diagramm), die beim Laden neu gerendert werden. Von dort aus wird es wie alles andere in Lolly gerendert — SVG, PDF, PNG und mehr, reproduzierbar aus seiner URL. Siehe [Design importieren](/info/design-import.html).

## Was passiert am 29. August?

Die SUSE-gebrandeten Tools verlassen das Projekt, und neue generische, vom Nutzer definierte Beispiel-Tools übernehmen.

SUSE wird ein eigenes Lolly betreiben, um seine Markenzeichen zu schützen.

## Wie viel behält SUSE privat? (auch bekannt als: wann kommt der Rug-Pull)

SUSEs Markenzeichen und gebrandete Tools dienen bis zum 29. August ausschließlich Demonstrationszwecken. Eine ungebrandete Instanz von Lolly finden Sie unter [lolly.ART](https://lolly.art).

SUSE ist ein Unternehmen für Enterprise-Open-Source-Infrastruktur mit mehr als drei Jahrzehnten Plattform-Führerschaft. Zu seinen Produkten zählen Enterprise-Linux-, Cloud-Native-, Edge- und KI-Infrastrukturlösungen.

Aus Sicht von SUSE geht es dabei darum, beim Thema Souveränität und Sicherheit Wort zu halten. Nach heutigem Stand ist die Wahrscheinlichkeit, dass SUSE Lolly zu einem Produkt macht, nahezu null.

Zur vollständigen Offenlegung: SUSE baut *tatsächlich* interne Tools auf, um Lolly in seine IT-Systeme zu integrieren — dabei geht es um SUSEs internen Aufbau, nicht um öffentliche versus private Entwicklung.

Was die öffentliche Seite betrifft: Lolly soll über den [Open Build Service](https://openbuildservice.org/) gebaut werden, mit sicheren Supply-Chain-Artefakten, die von der [SUSE Application Collection](https://apps.rancher.io/applications) bereitgestellt werden.

Wir werden so viel wie möglich offen entwickeln — Sie werden nur nicht mehr lange SUSE-gebrandete Tools sehen, ebenso wenig wie SUSEs interne Belegschaft und kommerzielle Prozesse, die nichts mit Lolly zu tun haben.

## Welchen Geschmack hat dieses Lolly-Logo?

Manche sagen Limette, andere sagen Minze und manchmal Apfel — Lolly bringt die Süße, Sie machen den Geschmack daraus!
