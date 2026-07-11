# Wie Lolly im Vergleich abschneidet

Wo diese Plattform in der breiteren Landschaft der Kreativ-Tools steht – und wo sie bewusst **nicht** mitspielt.

> **Pilotstatus:** Lolly ist ein Prototyp im geschlossenen Pilotbetrieb, kein fertiges Produkt, und seine Sicherheit durchläuft derzeit SUSEs strenge Infrastruktur-Härtung zur Vorbereitung auf den Einsatz im Unternehmensmaßstab. Diese Positionierung beschreibt, wohin Lolly *strebt* — die Seite [Einführung & Governance](/info/adoption-governance.html#status) beschreibt, wie das in der Praxis getestet wird.

## Landscape

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


Die Form der Lücke ist eindeutig: Nichts in der bestehenden Landschaft bietet uns eine regelbasierte, offline-fähige, ohne Vorkenntnisse nutzbare, unternehmensintern zugängliche, generative Ausgabe. Lolly bringt jetzt eine eigene offene Leinwand mit — **Layout Studio**, eine freie Leinwand zur direkten Manipulation —, unterscheidet sich dabei aber entscheidend von der Canva-Spalte: Farben, Schriften und Assets, die darauf platziert werden, richten sich nach den globalen Markenvorgaben, sodass selbst freie Anordnung regelbasiert bleibt. Was Lolly weiterhin **nicht** ist, ist eine uneingeschränkte Design-Suite; Designerinnen und Designer werden für maßgeschneiderte Arbeiten weiterhin Illustrator und Figma nutzen — und wenn diese Arbeit zu einem kontrollierten, reproduzierbaren Asset werden muss, bringt [Import a design](/info/design-import.html) von Layout Studio die fertige Figma-/Illustrator-/Penpot-Datei als bearbeitbare, markenkonforme Boxen auf die Leinwand.

## Wofür es sich eignet

- Schnelle Erstellung operationalisierter Kreativ-Assets (Event-Kacheln, Badges, Signaturen, Warnhinweise)
- Freie Anordnung auf der offenen Leinwand (Layout Studio), wenn die Bausteine — Farben, Schriften, Icons, Bilder — den globalen Markenvorgaben entsprechen müssen
- Ein fertiges Figma-, Illustrator-, InDesign- oder Penpot-Design landen (über Layout Studios „Design importieren“), damit es bearbeitet, kontrolliert und deterministisch in jedem Lolly-Format neu gerendert werden kann
- One-to-many-Abläufe nach dem Prinzip „drei Felder ausfüllen, fertiges Asset erhalten“ — einschließlich Massenausführungen aus einer Tabelle/CSV im `/pro`-Batch-Grid (Zeilen einfügen oder importieren, ein fertiges Asset pro Zeile, Download als ZIP)
- Dauerhaft aktive, wiederkehrende, markengerechte Ausgaben
- Fälle, in denen die zentrale Kontrolle über den Markenauftritt wichtiger ist als gestalterische Flexibilität

## Wofür es sich nicht eignet

- Maßgeschneiderte oder herausragende Hero-Inhalte (Plakatwände, große Videoproduktionen)
- Einzigartige Kampagnenarbeit, die wirklich einen Designer erfordert
- Ideenfindung, die vollständig aus dem Markensystem ausbrechen muss — Lollys offene Leinwand richtet Farben, Schriften und Assets weiterhin nach den globalen Markenvorgaben aus, und genau das ist der Sinn der Sache

## Was Lolly einzigartig bietet

- **Wildes Gestaltungspotenzial, sicher im Kontext ausgeliefert.** Tools können gewagte Designideen innerhalb fest codierter Leitplanken umsetzen.
- **Softwaredefinierte Content-Automatisierung, die das fertige Asset liefert.** Eingabe → fertige Datei. Kein „jetzt aus dem Design-Tool speichern und nachbearbeiten“.
- **Tools komponieren Tools.** Ein Tool kann das Rendering eines anderen Tools einbetten und als Teil eines einzigen fertigen Assets zurückgeben, ganz ohne Code-Kopplung zwischen den Tools — ein Grundbaustein, den kein Open-Canvas- oder DAM-Templating-Produkt in dieser Landschaft bietet.
- **Anbieterneutralität.** Volle Kontrolle über Funktionen und Kosten. Open-Source-Engine. Tools und Assets sind git-verfolgter Content, nicht in einer SaaS-Datenbank eingeschlossen.
