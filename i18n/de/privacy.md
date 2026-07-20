# Datenschutzerklärung

*Zuletzt aktualisiert: 19. Juli 2026*

> **Kurz gesagt.** Die Dokumente, Bilder, Videos und Dateien, die Sie in Lolly
> erstellen, bleiben auf Ihrem Gerät. Für die normale Nutzung gibt es keine Konten,
> keine Cookies der App selbst und nirgendwo im Code eine Analyse oder einen Tracker
> - nicht im Sinne von "wir nutzen die Daten nur nicht", sondern schlicht nicht im
> Quelltext vorhanden. Es gibt eine kurze, vollständige Liste von Ausnahmen, bei
> denen die Software überhaupt mit einem Netzwerk spricht, und jede einzelne davon
> wird unten konkret beschrieben: was das Gerät verlässt, an wen und wann. Die einzige
> Ausnahme, bei der etwas Persönliches im Spiel ist, ist eine Anmeldung, die Sie
> ausdrücklich selbst starten müssen. Was nicht in diesem Dokument steht, passiert
> auch nicht.

## Was diese Erklärung abdeckt

Lolly ist Open-Source-Software - eine Engine, mehrere App-Shells (Web, Desktop,
Mobil, CLI) und eine Browser-Erweiterung - die jede und jeder betreiben kann. Diese
Erklärung hat zwei Teile:

- **Die Software selbst**: was sie mit Ihren Daten tut und was nicht, egal wo sie
  läuft. Das ist eine Eigenschaft des Codes und gilt daher für jede Lolly-Instanz,
  ob unsere oder die von jemand anderem.
- **lolly.tools**, die von SUSE betriebene Referenzinstanz: die konkreten
  Entscheidungen beim Betrieb ihrer optionalen serverseitigen Teile (was protokolliert
  wird, wie lange und von wem).

Wenn Sie eine selbst gehostete oder unternehmensinterne Lolly-Instanz nutzen, gilt
das unten beschriebene Verhalten der Software weiterhin, aber der *Betreiber* dieser
Instanz - nicht SUSE - ist für alles Serverseitige verantwortlich: seinen
Render-Endpunkt, seinen MCP-Server, seine Zertifizierungsstelle für Content
Credentials, falls er eine betreibt. Fragen Sie dort nach der jeweils eigenen
Richtlinie; siehe [Einführung & Governance](/info/adoption-governance.html) dazu,
was der Betrieb von Lolly bedeutet.

## Die App: was auf Ihrem Gerät bleibt

Die Web-, Desktop- und Mobil-Shells von Lolly führen die gesamte Render-Engine auf
der Client-Seite aus. Ein Tool öffnen, Eingaben ausfüllen, eine Vorschau ansehen und
exportieren geschieht alles auf Ihrem Gerät - kein Server ist beteiligt, und die App
funktioniert offline, sobald sie einmal geladen ist.

**Die App setzt keine Cookies.** Damit sie funktioniert, behält sie eine kleine Menge
an Daten **nur auf Ihrem Gerät**, die niemals übertragen werden:

- **Oberflächeneinstellungen** - Design, Sprache, Toneinstellungen, Größe von
  Seitenleiste und Zoom, Sortier- und Ansichtsauswahl, welche Einführungstipps Sie
  bereits gesehen haben - im `localStorage`, damit sie schon verfügbar sind, bevor die
  App fertig gestartet ist.
- **Ein Offline-Cache des Tool-Katalogs und der Asset-Vorschauen**, damit die Galerie
  auch ohne Verbindung funktioniert.
- **Lokale Nutzungszähler** für die Statistiken auf Ihrer Profilkarte (wie viele
  Exporte, welche Tools) - ein kleiner, begrenzter Datenblock im `localStorage`, der
  von uns nie gelesen und nirgendwohin gesendet wird.
- **Ihre eigenen Dokumente, gespeicherten Sitzungen, hochgeladenen Assets und
  Schriftarten** - in IndexedDB auf Ihrem Gerät gespeichert, niemals hochgeladen, von
  niemandem außer Ihnen gelesen.

Nichts davon wird geteilt, verkauft oder verwendet, um Sie zu identifizieren oder zu
verfolgen. Es gibt nichts, dem Sie zustimmen müssten, weil keine Erhebung stattfindet
- nur diesen Hinweis, damit Sie wissen, was gespeichert wird und wo. Löschen Sie alles
davon jederzeit über **Profil → Alle meine Daten löschen** oder indem Sie den Speicher
der Website in Ihrem Browser leeren. (Nach Art. 5(3) der ePrivacy-Richtlinie erfordert
eine Speicherung, die für den von Ihnen angeforderten Dienst unbedingt erforderlich
ist, keine Einwilligung - nur Transparenz, und genau das sind dieses Dokument und der
Hinweis in der App.)

Ihre eigene Sicherung dieser Daten - das `lolly-backup`-Paket, das **Alles exportieren
& rendern** erzeugt - ist eine Datei, die Sie behalten und kontrollieren. Sie berührt
unsere Server nie, es sei denn, Sie senden sie selbst irgendwohin. Siehe
[Datenübertragung](/info/data-transfer.html).

## Utilities auf dem Gerät

Einige Tools - **Strip Hidden Data**, **Compress PDF** und andere mit dem Badge
**"Läuft auf Ihrem Gerät"** - arbeiten mit einer Datei, die Sie bereitstellen. Die
Datei wird in Ihrem Browser in den Speicher geladen, lokal transformiert und
anschließend als Download angeboten. Sie wird niemals hochgeladen, weil es auf diesem
Weg keinen Server gibt, zu dem man sie hochladen könnte. Diese Utilities funktionieren
offline, und ihre Ausgabe trägt kein Wasserzeichen und keine Metadaten von uns - bei
den meisten von ihnen ist der Sinn, Daten zu entfernen & zu schützen, nicht Risiko
hinzuzufügen.

## Wenn die App mit einem Netzwerk spricht, vollständig aufgelistet

Die folgende Tabelle ist die vollständige Liste von allem, was die App über ein
Netzwerk abruft oder sendet. Was hier nicht steht, tut die App nicht.

| Was | Was tatsächlich Ihr Gerät verlässt | Wann |
|---|---|---|
| Synchronisierung des Tool-Katalogs | Nichts Persönliches - eine Anfrage nach Lollys eigenem öffentlichen Tool- und Asset-Index | Beim Start, danach offline zwischengespeichert |
| Eine vom Tool deklarierte Netzwerkfähigkeit | Was genau dieses Tool anfordert (z. B. Kartenkacheln), an die konkreten Hosts, die es in seinem Manifest zulässt | Nur während der Nutzung dieses Tools |
| Google Fonts | Der Name der gewählten Schriftfamilie und Ihre IP-Adresse, an Googles Font-Server | Nur wenn Sie im Brand-Editor eine Google-Schrift hinzufügen - ein einmaliger Abruf pro Familie, danach liegt sie auf Ihrem Gerät |
| SEAL-Signaturprüfung | Eine einzelne DNS-Abfrage für einen öffentlichen Schlüssel, an die Domain, die in der geprüften Datei genannt ist | Nur wenn Verify in einer von Ihnen geprüften Datei einen SEAL-Eintrag findet - niemals die Datei selbst |
| Detektormodelle für den Deep-Scan | Nichts Persönliches - ein einmaliger Modell-Download vom selben Ursprung (kein Drittanbieter) | Nur wenn Sie sich für den Deep-Scan von Verify entscheiden |
| Entfernte Instanz | Was die von Ihnen benannte Instanz zurückliefert, über dieselbe oben beschriebene Katalogsynchronisierung | Nur wenn Sie die Shell ausdrücklich auf eine andere Lolly-Instanz richten |

Keine dieser Anfragen sendet Ihre Dokumente, Projekte, Sitzungen oder hochgeladenen
Dateien irgendwohin. Sie existieren, um Dinge *auf* Ihr Gerät zu bringen (Tools,
Schriftarten, Modelle, einen öffentlichen Schlüssel), niemals um Dinge *von* ihm zu
senden, mit den ausdrücklich in den folgenden Abschnitten genannten Ausnahmen.

## Direkt eingebundene Render-URLs

Die App selbst bleibt vollständig auf Ihrem Gerät. Davon getrennt, und nur wenn Sie es
nutzen, beantwortet lolly.tools (und jede selbst gehostete Instanz, die es aktiviert
lässt) **direkt eingebundene Render-URLs** - `https://lolly.tools/tool/<tool-id>.<ext>?<inputs>`
- damit ein geteilter Lolly-Link als lebendes Bild in einer README, einem Wiki oder
einem Dashboard erscheinen kann. Das Abrufen einer dieser URLs bittet den Server, mit
den in die URL geschriebenen Eingaben **öffentliche Tool- und Katalogdaten** zu
rendern, und das ist der gesamte Austausch:

- **Keine Konten, keine Cookies, kein Zustand.** Der Endpunkt ist anonym; pro Anfrage
  wird nichts gespeichert, und nichts auf Ihrem Gerät wird gelesen. Ihre Dokumente,
  Sitzungen und Uploads verlassen niemals Ihren Browser - sie können in diesen Links
  überhaupt nicht auftauchen.
- **Die Eingaben sind von Natur aus öffentlich** - sie sind das, was der Autor des
  Links in die URL getippt hat, und für alle lesbar, die der Link erreicht. Setzen Sie
  keine Geheimnisse in einen geteilten Link, Lolly stellt eine Funktion zur
  Link-Verschlüsselung für sensible Inhalte bereit.
- Antworten werden wie jedes öffentliche Bild **zwischengespeichert und
  ratenbegrenzt** und mit `noindex` markiert, damit Suchmaschinen Ihre Renderings nicht
  indexieren.

Sie hosten Lolly selbst und möchten keine öffentliche Render-Oberfläche? Setzen Sie
`LOLLY_DISABLE_RENDER_GET=1`, und jede einzelne dieser URLs gibt 404 zurück.

## Der MCP-Server (optional, für KI-Agenten)

Lolly kann auch von einem KI-Agenten über das Model Context Protocol erreicht werden -
ein vom Betreiber betriebener Endpunkt (lolly.tools betreibt einen; jede und jeder kann
einen eigenen selbst hosten, auch vollständig vom Netz getrennt). Er teilt die Haltung
des Render-Pfads ohne Konten, plus zwei Tools, die notwendigerweise Datei-Bytes
verarbeiten:

- **`lolly_transform`** (ein Utility serverseitig im Auftrag des aufrufenden Agenten
  auf dem Gerät ausführen) und **`lolly_verify`** (Content Credentials prüfen) nehmen
  beide die Bytes einer Datei vom Aufrufer entgegen. Sie werden **im Prozess, im
  Speicher** verarbeitet, und das Ergebnis wird in genau diesem Aufruf zurückgegeben -
  die Datei wird nie auf die Festplatte geschrieben und nach Abschluss der Anfrage nie
  gespeichert.
- Jedes andere Tool - `lolly_render`, `lolly_build_url`, `lolly_list_tools`,
  `lolly_describe_tool` - arbeitet ausschließlich mit Parametern (Text, Zahlen, Farben,
  URLs, Katalog-Asset-IDs), denselben Eingaben, die auch eine direkt eingebundene
  Render-URL entgegennimmt.
- Der Zugang ist entweder ein gemeinsames Token, das der Betreiber an Clients ausgibt,
  denen er vertraut, oder zustandsloses OAuth 2.1: kurzlebige signierte Token, die
  gegen ein gemeinsames Geheimnis geprüft werden, nichts serverseitig gespeichert, und
  das Token selbst wird nie in ein Protokoll oder eine Render-URL geschrieben.

## Content-Credentials-Identität (eine Anmeldung, die Sie selbst starten müssen)

Lolly kann ein kryptografisches **Content Credential** in Ihre Exporte versiegeln,
sodass jede und jeder offline überprüfen kann, dass eine Datei seit ihrem Verlassen von
Lolly unverändert ist. Das allein ist **standardmäßig aktiv und vollständig lokal** -
der Signierschlüssel wird auf Ihrem Gerät erzeugt, ist **nicht extrahierbar** (nicht
einmal Lollys eigener Code kann ihn lesen), und das Signieren selbst geschieht offline.
Dieser Abschnitt behandelt den einen *optionalen* Schritt darüber hinaus: das
Registrieren einer verifizierten Identität, damit Ihre Exporte "Verifiziert - signiert
von \<Ihre E-Mail\>" statt eines anonymen Schlüssels anzeigen. **Wenn Sie die
Registrierung überspringen, trifft nichts in diesem Abschnitt auf Sie zu, und es
verlassen niemals personenbezogene Daten Ihr Gerät.**

Wenn Sie sich registrieren, passiert genau Folgendes:

1. **Sie wählen eine Anmeldemethode** - GitHub, Google, SUSE (Okta) oder einen per
   E-Mail zugesandten Link. Bei den drei OIDC-Anbietern werden Sie auf die
   Anmeldeseite des jeweiligen Anbieters weitergeleitet, die dessen eigener
   Datenschutzrichtlinie unterliegt, nicht unserer; Lollys Zertifikatsdienst erhält
   nur eine verifizierte E-Mail-Adresse und den Namen des Anbieters zurück. Beim
   E-Mail-Link wird die von Ihnen eingegebene Adresse an **Resend** übergeben, eine
   API für transaktionale E-Mails, ausschließlich um diesen einen Link zuzustellen.
2. **Ein kurzlebiges Cookie schützt die Weiterleitung.** Das ist das eine Cookie, das
   das gesamte Lolly-System setzt: `lolly_ca_state`, `HttpOnly`, auf `/api/ca`
   beschränkt, läuft innerhalb von zehn Minuten ab. Es trägt einen Zufallswert, keinen
   Tracking-Identifikator, und existiert nur, um zu verhindern, dass die
   OAuth-Weiterleitung gefälscht wird. Es wird gelöscht, sobald die Anmeldung
   abgeschlossen ist.
3. **Ihre IP-Adresse wird kurz genutzt, um Missbrauch zu verhindern** an den
   Anmelde-Endpunkten (damit kein Skript ein Postfach zuspammen oder das E-Mail-
   Kontingent erschöpfen kann) - nur im Serverspeicher gehalten, für ein gleitendes
   Fenster von etwa einer Minute, nie in ein Protokoll geschrieben oder irgendwo
   dauerhaft gespeichert.
4. **Der Zertifikatsdienst stellt ein kurzlebiges Zertifikat aus** (7, 30, 90 oder 365
   Tage, Ihre Wahl, begrenzt durch die Richtlinie des Betreibers), das Ihre
   verifizierte E-Mail an die öffentliche Hälfte des auf Ihrem Gerät erzeugten
   Schlüsselpaars bindet. Die private Hälfte verlässt niemals Ihren Browser.
5. **Die Ausstellung wird protokolliert**: Ihre E-Mail-Adresse, der verwendete
   Anbieter, ein kurzer Hash der Seriennummer des Zertifikats und dessen Ablaufdatum,
   geschrieben in die Betriebsprotokolle des Dienstes - und, nur wenn der Betreiber
   einen konfiguriert hat, an einen von ihm kontrollierten Webhook. Das ist die eine
   Stelle, an der ein Stück Ihrer personenbezogenen Daten auf einem Server aufbewahrt
   wird, und sie existiert, damit ein kompromittiertes oder fehlerhaft ausgestelltes
   Zertifikat nachverfolgt und die Ausstellung durch die Zertifizierungsstelle geprüft
   werden kann.
6. **Danach ist das Signieren wieder offline** für die gesamte Lebensdauer des
   Zertifikats. Der Export einer Datei kontaktiert niemals den Zertifikatsdienst - nur
   das Registrieren tat das.

Speziell für lolly.tools: SUSE betreibt den Zertifikatsdienst und hält diese
Ausstellungsprotokolle. Siehe [Ihre Rechte](#your-rights) unten dazu, wie Sie nach
einem Eintrag fragen oder ihn entfernen lassen können.

## Die Browser-Erweiterung

Die Browser-Erweiterung **Lolly URL Screenshot** erfasst, speichert oder überträgt
keine personenbezogenen Daten. Keine Analyse, kein Tracking, kein Remote-Server.

**Was sie tut.** Wenn Sie die Lolly-Web-App bitten, eine URL als Screenshot
aufzunehmen, öffnet die Erweiterung diese Seite in einem temporären Hintergrund-Tab,
erfasst sie in Ihrem Browser mithilfe des DevTools-Protokolls, gibt das Bild an die App
zurück und schließt den Tab. Alles geschieht lokal, auf Ihrem eigenen Gerät und
Netzwerk.

**Daten.**

- **Wir erfassen nichts.** Die Erweiterung hat keine Server und stellt keine eigenen
  Netzwerkanfragen.
- **Erfasste Bilder** gehen direkt an die Lolly-App im selben Browser - sie werden von
  der Erweiterung niemals hochgeladen.
- **Die von Ihnen erfassten URLs** werden nur verwendet, um diese eine Seite für diesen
  einen Screenshot zu laden. Sie werden weder protokolliert noch weitergegeben.

**Berechtigungen.**

- **`debugger`** - um die gerenderte Seite über das DevTools-Protokoll zu erfassen
  (derselbe Mechanismus, den die Lolly-Desktop-App verwendet).
- **`tabs`** - um den temporären Tab zu öffnen und zu schließen, in dem die Seite
  geladen wird.
- **Host-Zugriff (`<all_urls>`)** - weil die Seite, die Sie erfassen möchten, auf einer
  beliebigen Website liegen kann. Chrome zeigt dies bei der Installation als breite
  Berechtigungswarnung an; die Erweiterung besucht nur jemals die URL, die Sie ihr
  geben.

Keine dieser Berechtigungen wird verwendet, um Ihr Surfen über diese eine angeforderte
Aufnahme hinaus zu lesen, zu überwachen oder zu übertragen.

## Infrastruktur-Protokolle

Wie jede Website erzeugen die Server hinter lolly.tools - und hinter jeder
Lolly-Instanz - standardmäßige Webserver-Zugriffsprotokolle, sobald überhaupt eine
Anfrage bei ihnen ankommt: IP-Adresse, angeforderter Pfad, Zeitstempel, User-Agent, für
ein begrenztes Zeitfenster aufbewahrt zur Sicherheit und Missbrauchsprävention. Das ist
grundlegendes Hosting-Verhalten, nicht etwas, das Lolly obendrauf hinzufügt, und es
enthält niemals den Inhalt Ihrer Dokumente, weil diese von vornherein nie einen Server
erreichen. Die eine bewusste Ausnahme ist eine Datei, die Sie ausdrücklich an einen
MCP-Aufruf `lolly_transform` oder `lolly_verify` übergeben, die im Speicher verarbeitet
und nie auf die Festplatte oder in ein Protokoll geschrieben wird, wie oben
beschrieben.

## Datenschutz für Kinder

Lolly erhebt wissentlich keine personenbezogenen Daten von irgendjemandem, gleich
welchen Alters, im normalen Verlauf der Nutzung der App - es gibt nichts zu erheben.
Die eine Stelle, an der überhaupt jemals personenbezogene Daten (eine E-Mail-Adresse)
erhoben werden, ist die Registrierung für Content Credentials, oben beschrieben, die
sich nicht an Kinder richtet und nicht für sie gedacht ist.

## Ihre Rechte

Weil fast alles, was Lolly berührt, nur auf Ihrem eigenen Gerät gespeichert wird, sind
die meisten dessen, was das Datenschutzrecht "Ihre Rechte" nennt - Auskunft,
Berichtigung, Löschung, Übertragbarkeit -, Dinge, die Sie bereits selbst tun können,
sofort und ohne jemanden zu fragen: Ihre Daten liegen im Speicher Ihres Browsers, in
einer Form, die Sie einsehen, exportieren (**Alles exportieren & rendern**, oben) oder
löschen (**Profil → Alle meine Daten löschen**) können.

Für das eine Stück personenbezogener Daten, das auf einem Server landen kann - Ihre
E-Mail-Adresse, falls Sie sich für Content Credentials registriert haben -, kontaktieren
Sie uns (unten), um zu erfragen, was wir halten, oder um es aus den aktiven Protokollen
entfernen zu lassen. Das Entfernen eines Protokolleintrags widerruft kein bereits
ausgestelltes Zertifikat (es ist von Natur aus kurzlebig und läuft einfach ab); es
verhindert, dass dieser Eintrag in künftigen Exporten des Protokolls erscheint.

Wir verkaufen keine Daten. Wir haben keine zu verkaufen.

## Änderungen an dieser Erklärung

Das Datum oben ändert sich immer dann, wenn sich dieses Dokument ändert. Eine Änderung,
die verändert, was Ihr Gerät verlässt oder was aufbewahrt wird, erhält hier eine eigene
Zeile, keine stille Bearbeitung - wenn Sie sehen möchten, was sich geändert hat, fragen
Sie (unten) oder vergleichen Sie mit der
[öffentlichen Quelle](https://github.com/lolly-tools/lolly/commits/main/docs/privacy.md).

## Kontakt

Fragen oder ein Anliegen nach "Ihre Rechte" oben: **Andy Fitzsimon**,
[fitzy@suse.com](mailto:fitzy@suse.com). Für eine selbst gehostete oder
unternehmensinterne Lolly-Instanz kontaktieren Sie stattdessen die Person, die sie
betreibt - SUSE und das Lolly-Open-Source-Projekt halten keine Daten für Instanzen, die
sie nicht betreiben.
