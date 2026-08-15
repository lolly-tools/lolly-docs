# Wie Lolly im Vergleich abschneidet

Wo diese Plattform in der breiteren Landschaft der Kreativ-Tools steht - und wo sie bewusst **nicht** mitspielt.

> **Pilotstatus:** Lolly ist ein Prototyp im geschlossenen Pilotbetrieb, kein fertiges Produkt, und seine Sicherheit durchläuft derzeit SUSEs strenge Infrastruktur-Härtung zur Vorbereitung auf den Einsatz im Unternehmensmaßstab. Diese Positionierung beschreibt, wohin Lolly *strebt* - die Seite [Einführung & Governance](/info/adoption-governance.html#status) beschreibt, wie das in der Praxis getestet wird.

## Landscape

![Design's free canvas, where the colours, faces and assets on offer are the brand's own](/t/url-shot?url=%2F%23%2Ftool%2Fdesign%3Ftemplate%3D__blank__&width=1440&height=900&dpi=192&waitMs=2400&walker=1&format=svg&dark=1&filename=aud-open-canvas)

| Funktion | Canva (Offene Leinwand) | Marken-Portale (DAM-Vorlagen) | Illustrator (Desktop-Profi) | Figma / Penpot (Online-Profi) | **Lolly (regelbasiert)** |
|---|---|---|---|---|---|
| Content-Erstellung im großen Maßstab | teilweise | ✗ | ✗ | ✗ | **✓** |
| Funktioniert vollständig offline | ✗ | ✗ | ✓ | teilweise | **✓** |
| Vorlagenlogik & feste Vorgaben | ✗ | teilweise | ✗ | teilweise | **✓** |
| Keine Design-Kenntnisse erforderlich | teilweise | ✓ | ✗ | ✗ | **✓** |
| Automatische Content Credentials | ✗ | ✗ | teilweise | ✗ | **✓** |
| Tools kombinieren andere Tools | ✗ | ✗ | ✗ | ✗ | **✓** |
| Offene Engine, nicht an SaaS gebunden | ✗ | ✗ | ✗ | teilweise | **✓** |
| C2PA Content Credentials | ✗ | ✗ | ✗ | ✗ | **✓** |
| Forensische Provenienz per Opt-in | ✗ | ✗ | ✗ | ✗ | **✓** |
| Mobile- und Desktop-Apps | ✓ | ✗ | ✗ | teilweise | **✓** |
| Kommandozeile & TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

Die Form der Lücke ist eindeutig: Nichts in der bestehenden Landschaft bietet uns eine regelbasierte, offline-fähige, ohne Vorkenntnisse nutzbare, unternehmensintern zugängliche, generative Ausgabe. Lolly bringt jetzt eine eigene offene Leinwand mit - **Design**, eine freie Leinwand zur direkten Manipulation -, unterscheidet sich dabei aber entscheidend von der Canva-Spalte: Farben, Schriften und Assets, die darauf platziert werden, richten sich nach den globalen Markenvorgaben, sodass selbst freie Anordnung regelbasiert bleibt. Was Lolly weiterhin **nicht** ist, ist eine uneingeschränkte Design-Suite; Designerinnen und Designer werden für maßgeschneiderte Arbeiten weiterhin Illustrator und Figma nutzen - und wenn diese Arbeit zu einem kontrollierten, reproduzierbaren Asset werden muss, bringt [Import a design](/info/design-import.html) von Design die fertige Figma-/Illustrator-/Penpot-Datei als bearbeitbare, markenkonforme Boxen auf die Leinwand.

## Wofür es sich eignet

![Deck Studio in the split view - the deck's slides listed as blocks on the left, the laid-out deck rendering on the right](/t/url-shot?url=%2F%23%2Ftool%2Fdeck-studio&width=1440&height=900&dpi=192&waitMs=2600&walker=1&format=svg&dark=1&filename=ov2-deck-studio-output)

Deck Studio zeigt gut, wo hier die Obergrenze liegt: ein ganzes Foliendeck als Daten deklariert, live auf der Leinwand angeordnet und als natives, bearbeitbares PowerPoint exportiert.

- Schnelle Erstellung operationalisierter Kreativ-Assets (Event-Kacheln, Badges, Signaturen, Warnhinweise)
- Freie Anordnung auf der offenen Leinwand (Design), wenn die Bausteine - Farben, Schriften, Icons, Bilder - den globalen Markenvorgaben entsprechen müssen
- Ein fertiges Figma-, Illustrator-, InDesign- oder Penpot-Design landen (über Designs „Design importieren“), damit es bearbeitet, kontrolliert und deterministisch in jedem Lolly-Format neu gerendert werden kann
- One-to-many-Abläufe nach dem Prinzip „drei Felder ausfüllen, fertiges Asset erhalten“ - einschließlich Massenausführungen aus einer Tabelle/CSV im `/pro`-Batch-Grid (Zeilen einfügen oder importieren, ein fertiges Asset pro Zeile, Download als ZIP)
- Dauerhaft aktive, wiederkehrende, markengerechte Ausgaben
- Fälle, in denen die zentrale Kontrolle über den Markenauftritt wichtiger ist als gestalterische Flexibilität

## Wofür es sich nicht eignet

- Maßgeschneiderte oder herausragende Hero-Inhalte (Plakatwände, große Videoproduktionen)
- Einzigartige Kampagnenarbeit, die wirklich einen Designer erfordert
- Ideenfindung, die vollständig aus dem Markensystem ausbrechen muss - Lollys offene Leinwand richtet Farben, Schriften und Assets weiterhin nach den globalen Markenvorgaben aus, und genau das ist der Sinn der Sache

## Das Tool freigeben, nicht die Datei

![The producer's whole job: type the words. Type, colour and spacing were settled when the tool was approved](/t/url-shot?url=%2F%23%2Ftool%2Fwordmark%3Ftext%3DApproved&width=1440&height=900&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=aud-approve-the-tool)

Jedes andere Tool in dieser Landschaft erzeugt eine *Datei*, die anschließend geprüft werden muss - ein Brand Manager in einem Slack-Thread, die Rechtsabteilung beim Haftungsausschluss, eine Änderungsrunde, noch eine Prüfung. Lolly verschiebt die Freigabe **einen Schritt nach vorne**. Die Markenregeln - exakte Hex-Codes, lizenzierte Schriftdateien, Anschnittränder, Abstände - sind fest in HTML und CSS des Tools codiert, sodass die Vorlage *physisch nicht* in der Lage ist, ein markenwidriges Asset auszugeben. Das Layout selbst ist tragend.

Sie geben also nicht mehr Ergebnisse frei, sondern das **Tool**, das sie erzeugt. Geben Sie es einmal frei, und jedes Asset, das es je produziert, ist durch seine Bauweise vorab freigegeben - kein Mensch im Prozess, kein Prüfzyklus, bei jedem Volumen.

Das ist der Paradigmenwechsel, den die deterministische Engine tatsächlich liefert: Sie ist keine schnellere Version des alten Freigabeprozesses, sie schafft den Prozess ab. Für das Kreativteam ist sie eine Leitplanke, kein Ersatz - Sie werfen weiterhin den Ball (die Daten, den Text, das Bild), und der Code ist die Bumper-Bahn, die jeden Wurf aus der Rinne hält.

| Assets freigeben, wie es früher lief | Das Tool freigeben, auf Lolly-Art |
|---|---|
| Jede fertige Datei wird geprüft, eine nach der anderen | Das Tool wird einmal geprüft |
| Anfrage → Designer baut → Markenprüfung → Rechtsprüfung → Änderungen → Nachprüfung | Eine Parameteränderung → fertiges Asset |
| Designer, Brand Manager, Rechtsabteilung und Anfragende alle im Prozess | Die Produktion, ganz allein |
| Tage pro Asset | Sekunden pro Asset |
| 10.000 Assets = 10.000 Prüfzyklen | 10.000 Assets = keine (die Vorlage war bereits freigegeben) |

## Was Lolly einzigartig bietet

![Amsterdam's canal rings and road network drawn edge to edge in the brand's own ink, every stroke placed by the template rather than by hand](/t/url-shot?url=%2F%23%2Ftool%2Fstreet-map%3Fcity%3Damsterdam%26theme%3Dlight%26full&width=1440&height=900&dpi=96&waitMs=3200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-street-map-poster)

- **Wildes Gestaltungspotenzial, sicher im Kontext ausgeliefert.** Tools können gewagte Designideen innerhalb fest codierter Leitplanken umsetzen.
- **Softwaredefinierte Content-Automatisierung, die das fertige Asset liefert.** Eingabe → fertige Datei. Kein „jetzt aus dem Design-Tool speichern und nachbearbeiten“.
- **Tools komponieren Tools.** Ein Tool kann das Rendering eines anderen Tools einbetten und als Teil eines einzigen fertigen Assets zurückgeben, ganz ohne Code-Kopplung zwischen den Tools - ein Grundbaustein, den kein Open-Canvas- oder DAM-Templating-Produkt in dieser Landschaft bietet.
- **Anbieterneutralität.** Volle Kontrolle über Funktionen und Kosten. Open-Source-Engine. Tools und Assets sind git-verfolgter Content, nicht in einer SaaS-Datenbank eingeschlossen.

Der erste dieser Punkte wird am meisten unterschätzt. Eine Stadtkarte in Posterqualität, gezeichnet als echte Vektorpfade für Straßen und Wasser, aus einem Dropdown und zwei Farbfeldern, die nicht über die Marke hinaus zeigen können:

