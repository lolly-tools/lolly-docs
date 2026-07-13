# Lolly für Operatoren

### Eine zukunftssichere Defence-in-Depth-Strategie zur Verhinderung von Datenverlust und zur Sicherung der Herkunft — getarnt als Kreativplattform

Das organisatorische Immunsystem, das sich um das legt, was Sie bereits tun — sodass die alltägliche Kreativarbeit, die Ihre Teams jeden Tag benötigen, *innerhalb* Ihres Perimeters stattfindet, anstatt daraus abzufließen.

**Was für Sie dabei herausspringt.** Sie werden zu der Person, die Ja zu etwas gesagt hat, das sowohl sicher *als auch* beliebt ist. Sie schließen ein Datenabfluss-Leck und löschen die Design-Anfragen-Warteschlange in einem Zug — der seltene Sicherheitserfolg, der Sie beliebter macht, nicht weniger. Kein Anruf um 3 Uhr morgens, weil jemand Markendateien per E-Mail an einen externen Dienstleister geschickt oder Kundendaten in ein beliebiges Web-Tool eingefügt hat; weniger SaaS-Anbieter, Verträge und Audits auf Ihrem Tisch; und eine lückenlose Git-Historie, auf die Sie verweisen können, wenn jemand fragt, wer was genehmigt hat. Sie schlafen nachts ruhig.

Lolly verdient sich seinen Platz als Kreativ-Tool: Es löscht die Design-Warteschlange und legt produktionsreife Ergebnisse in die Hände aller. Der Grund, warum es *sicher* ist, dies so breit zu verteilen, ist jedoch architektonisch bedingt. Nichts wird hochgeladen, alles ist reproduzierbar, und jeder Export kann einen kryptografischen Nachweis seiner Herkunft tragen. Diese Seite erzählt die Sicherheits- und Rollout-Geschichte.

> **Wo es heute steht.** Die Sicherheitseigenschaften von Lolly sind von Grund auf stark, und die Kryptografie- und Datei-Parsing-Engines durchlaufen derzeit SUSEs Infrastruktur-Hardening für den Enterprise-Maßstab. Die Siegel, die On-Device-Signierung und die Verschlüsselung weiter unten sind bereits jetzt real und belastbar und reifen in Richtung unabhängiger Zertifizierung — wo ein Vertrag also zertifizierte Absicherung verlangt, setzen Sie sie als Defence-in-Depth ein, während dieser Prozess abgeschlossen wird.

## Der strategische Vorteil

Die übliche Art, wie routinemäßige Kreativarbeit erledigt wird, ist eine Angriffsfläche für Haftungsrisiken: Dateien werden per E-Mail an externe Design-Dienstleister geschickt, Markenwerte werden in ein Dutzend SaaS-Editoren hochgeladen, Kundendaten werden in das Web-Tool eines Fremden eingefügt, nur um „schnell eine Grafik zu erstellen". Jedes einzelne davon bedeutet, dass Daten Ihre Kontrolle verlassen.

Lolly kehrt das um. Die Arbeit, die diese Lecks *verursacht* hat — die Zitatkarte, das lokalisierte Banner, das Event-Badge, der geschwärzte Screenshot — findet jetzt auf einem Tool statt, das auf dem eigenen Gerät der Mitarbeitenden läuft, mit Ihrer Marke, ohne dass ein Server im Spiel ist. Sie haben nicht einfach eine Kontrolle auf einen riskanten Workflow aufgesetzt; Sie haben den riskanten Workflow durch einen ersetzt, der von vornherein keinen Weg zum Datenabfluss bietet.

- **Die Konfiguration gehört Ihnen.** Die Engine und die Shells sind Open Source (MPL-2.0). Legen Sie Ihre eigene Authentifizierung, Telemetrie oder Zertifizierungsstelle (CA) darüber; hosten Sie es oder auch nicht; Sie behalten die volle Kontrolle über Funktionen und Kosten, Git-verfolgt, nicht eingeschlossen in einer SaaS-Datenbank.
- **Governance kann Daten sein, kein Dashboard.** Wenn Sie diese Kontrolle wünschen, verwalten Sie den Tool-Katalog als Git-Repository — die Pull-Request-Prüfung wird zur Markenfreigabe, mit einer lückenlosen Audit-Historie und einem sofortigen Rollback für jede Vorlage, auf die Ihre Belegschaft zugreifen kann. Es ist eine Option, keine Verpflichtung: Teams, die einfach nur etwas erstellen möchten, verfassen ihre eigenen Tools im Layout Studio und nehmen ihre eigenen Dateien in den Katalog auf, vollständig in der App und ohne git jemals zu berühren. Siehe [Einführung & Governance](/info/adoption-governance.html).
- **Leitplanken sind strukturell verankert.** Markenvorgaben sind fest in die Vorlagen einprogrammiert, nicht als Richtlinien veröffentlicht, die man ignorieren kann. Das falsche Ergebnis wird nicht bloß missbilligt — es ist schlicht nicht darstellbar.

## Die Anfragen-Warteschlange löschen und gleichzeitig die Content-Erstellung vervielfachen.

Ein Ziel von Lolly ist die **Umlenkung von Design-Anfragen**: Routineanfragen, die nie eine Designerin oder einen Designer erreichen müssen, weil die Person, die das Asset benötigte, es selbst korrekt und in wenigen Minuten erstellt hat. Jedes umgelenkte Ticket ist sowohl ein Produktivitätsgewinn als auch eine Datei weniger, die den Besitzer wechselt.

Lolly ist so gebaut, dass es sich in die tatsächliche Arbeitsweise Ihrer Organisation einfügt — es gibt keinen einzig richtigen Weg, es bereitzustellen:

- **Bereitstellen statt Servieren.** Verteilen Sie Lolly über Ihr bestehendes MDM (Intune, Jamf, Munki …) auf die Geräte. Es läuft lokal als Desktop-/Mobil-App oder als Offline-PWA — funktioniert hinter jeder Firewall, in jeder Air-Gap-Umgebung, ohne dass ein Server gewartet werden muss, und die IT behält die Kontrolle über den Update-Rhythmus.
- **Nur servieren.** Betreiben Sie eine einzige Instanz innerhalb Ihres Netzwerks (oder hinter einem VPN); Nutzende erreichen sie über den Browser, ohne dass etwas installiert werden muss. Veröffentlichen Sie ein Tool einmal, und alle haben sofort Zugriff darauf; kombinieren Sie es mit Ihrem IdP für die Zugriffskontrolle.
- **Hybrid.** Lokale Apps für die Offline-Arbeit im Feld, eine stets aktuelle Browser-Version für geliehene Geräte — beide greifen auf dieselbe Tool-Bibliothek zu.

Die vollständigen Bereitstellungsmodelle und die Administrationsanleitung finden Sie unter [Bereitstellung](/info/deployment.html) und [Konfiguration](/info/configuration.html).

## Utilities gegen Datenabfluss

Es gibt eine Kategorie von Lolly-Tools, die *gezielt* dafür da ist, Dateien innerhalb des Perimeters zu halten. Die Datenschutz-Utilities.


- **Versteckte Daten entfernen**
 Entfernt Standortangaben und alle versteckten identifizierenden Informationen aus Dokumenten und Mediendateien.

- **Text-Assistent**  
Anonymisieren, codieren, formatieren und bearbeiten Sie strukturierten und unstrukturierten Text. 

- **PDF komprimieren**
Verhindert jede Möglichkeit einer „E-Mail-Limit-Krise", bei der Web-Tools von Drittanbietern lauern und Daten 

- **PDF komprimieren**
Verhindert jede Möglichkeit einer „E-Mail-Limit-Krise", bei der Web-Tools von Drittanbietern lauern und Daten aus dem Fenster fallen. 

Alle diese Vorgänge sind On-Device-Transformationen: Ihre Datei oder Ihre Daten gehen hinein, bereinigte Bytes kommen heraus, und **es gibt keinen Server, zu dem hochgeladen wird**. Sie sind das bewusste Gegenteil des typischen Tools nach dem Motto „Lade deine Datei auf die Website eines Fremden hoch, um sie zu bereinigen", zu dem wohlmeinende Mitarbeitende ansonsten greifen.



## Determinismus & Reproduzierbarkeit

Jede Tool-Eingabe lässt sich als URL-Parameter ausdrücken, und dieselben Eingaben erzeugen dieselbe Datei. Das hat zwei Konsequenzen für Operatoren:

- **Eine URL ist das Artefakt.** Committen Sie den Link, generieren Sie das Asset bei Bedarf neu — keine Binärdateien in Git eingecheckt, kein Hinterherjagen der „aktuellsten Version" im Chat. Asset- und Tool-IDs sind dauerhafte Verträge, sodass ein heute erstellter Link auch später noch aufgelöst werden kann.
- **Die CLI nutzt denselben Render-Pfad** wie die GUI, sodass Build-Pipelines und die App niemals auseinanderdriften. Erzeugen Sie OG-Bilder, Social Cards und Datenvisualisierungen reproduzierbar zur Build-Zeit.

## Herkunftsnachweis & Content Credentials

Exporte können **Content Credentials** tragen — ein signiertes [C2PA](https://c2pa.org)-Manifest, das an einen Hash der Datei-Bytes gebunden ist. Jede spätere Änderung an der Datei bricht das Siegel, sodass ein C2PA-fähiger Verifizierer **Manipulationen kryptografisch und offline erkennt**. Das Credential ist manipulations*erkennbar*: Es meldet Manipulationen, statt sie zu verhindern — und genau das macht eine vollständig offline durchführbare Verifizierung möglich.

- **Standardmäßig aktiv, auf dem Gerät.** Der Signierschlüssel wird auf dem Gerät erzeugt, ist nicht extrahierbar (nicht einmal Lolly kann ihn auslesen), und die Signierung erfolgt lokal — nur die optionale Identitäts-*Registrierung* nimmt überhaupt Kontakt zum Netzwerk auf.
- **Vertrauensstufen.** Ein nicht registrierter Export ist strukturell gültig, aber anonym signiert (`untrusted`). Registrieren Sie eine **verifizierte Identität** (kurzlebiges Zertifikat der Lolly-CA, gebunden an eine E-Mail-Adresse), und Verifizierer, die den Lolly-Root fixieren (pinnen), melden `trusted` + die E-Mail-Adresse der signierenden Person. Eine vertrauenswürdige Zeitstempelstelle und ein grünes Häkchen eines Drittanbieter-Validators (C2PA-Konformität) stehen auf der Roadmap. Jede Stufe ist explizit, und eine Datei beansprucht immer nur das Vertrauen, das sie beweisen kann.
- **Die Gültigkeitsdauer des Zertifikats** wird beim Signieren von Operator oder Nutzer festgelegt: 7 / 30 / 90 / 365 Tage, Standard 30.
- **Die Verifizierung erfolgt auf dem Gerät.** Legen Sie eine beliebige Datei auf `/valid` ab (oder nutzen Sie `lolly validate <file>`), um einen Offline-Bericht darüber zu erhalten, ob sie tatsächlich mit Lolly erstellt und seither unverändert geblieben ist. Siehe [Content Credentials-Identität](/info/content-credentials-identity.html).

> **Hinweise zur Interoperabilität.** Lolly verifiziert seine eigenen Credentials und viele von Drittanbietern schon heute offline. Zwei Interop-Punkte sind in Arbeit: das vollständige Lesen von C2PA-Claim-**v2**-Manifesten anderer Hersteller sowie WebM — für das es noch kein standardisiertes C2PA-Mapping gibt, weshalb Lolly das Manifest als Matroska-Teil anhängt (Drittanbieter-Tools verifizieren Lollys MP4 ohne Weiteres; WebM folgt, sobald sich der Standard gefestigt hat).

## Verschlüsselung & Passwortschutz

Für Dateien, die verschlüsselt unterwegs sein müssen, geschieht alles auf dem Gerät:

- **PDF-Öffnungspasswort** — *Standard* ist eine 40-Bit-RC4-Abschreckung (lässt sich überall öffnen, kann in einem Link mitgeschickt werden); *Stark* ist **AES-256** (PDF 2.0), wird beim Export eingegeben und niemals in einen Link aufgenommen.
- **Gesperrte Downloads** — ein ZIP, ein Projekte-Ordner oder ein Batch-Lauf kann als Ganzes gesperrt werden: *Standard* ZipCrypto (schwach, universell) oder *Stark* **AES-256** (WinZip AE-2). Defence-in-Depth: Jedes PDF innerhalb eines Stark-Zips ist *zusätzlich* einzeln AES-256-gesperrt, sodass es auch nach dem Entpacken gesperrt bleibt.
- **Passwortgeschützte Freigabe-Links** — der gesamte Link-Status ist unter einem PBKDF2-abgeleiteten Schlüssel AES-256-verschlüsselt; es reist nur Chiffretext, das Passwort steht niemals im Link, und die Entschlüsselung erfolgt im Browser der empfangenden Person.

## Air-Gap-fähig

Air-Gap ist eine **erstklassige Bereitstellung**, kein Spezialmodus — Lolly läuft von Haus aus zur Render-Zeit ohne Netzwerk. Die Web-Shell ist eine Offline-First-PWA (Service Worker); Schriftarten und WASM werden auf dem Gerät gespeichert; der Tool-Status wird lokal über die Host-Bridge persistiert, niemals über `localStorage`. Jedes Tool, das das Netzwerk erreicht, tut dies ausschließlich über eine **freigegebene** `host.net`-Fähigkeit, die es in seinem Manifest deklarieren muss — eine Shell, die dies nicht (oder nicht willentlich) erfüllen kann, stubt sie aus. Verteilen Sie die Shells über Ihr MDM auf die Geräte oder betreiben Sie eine einzige Instanz innerhalb Ihres Netzwerks, und eine vollständig air-gapped installierte Instanz rendert, exportiert, verschlüsselt und verifiziert Credentials, ohne dass es irgendetwas gibt, nach Hause zu telefonieren.

## Gut zu wissen

Ein paar Dinge, die Sie vor dem Ausrollen klar haben sollten:

- **Hardening läuft.** Die Kryptografie und die Parser durchlaufen derzeit SUSEs Hardening für den Enterprise-Maßstab (siehe oben) — von Grund auf robust; setzen Sie sie als Defence-in-Depth ein, wo ein Vertrag zertifizierte Absicherung verlangt.
- **Tool-Hooks sind *keine* Security-Sandbox.** Das optionale `hooks.js` eines Tools läuft mit injizierter Host-Bridge, wird in einer Browser-Shell jedoch im Realm der Seite ausgeführt und *kann* auf `window`/`document`/`fetch` zugreifen. Behandeln Sie Tool-Code so, wie Sie jeden Code behandeln, den Sie ausführen — prüfen Sie ihn. Deshalb kann eine Organisation, die einen gemeinsamen Katalog betreibt, diesen über Git-Review absichern; so oder so führen Sie nur Tools aus, die Sie geprüft haben, bis die Worker-Isolation verfügbar ist.
- **Content Credentials sind manipulationserkennbar.** Sie erkennen Veränderungen, statt sie zu verhindern — siehe die Hinweise zur Interoperabilität oben.
- **Zwei Verschlüsselungsstufen.** *Standard*-Sperren sind schnelle, universelle Abschreckung; *Stark* (AES-256) bietet vollen Schutz — greifen Sie für alles Sensible zu Stark und beachten Sie, dass es einen modernen Reader voraussetzt.

## Wie es weitergeht

- **[Einführung & Governance](/info/adoption-governance.html)** — Personas, die Deflection-Kennzahl und Governance-als-Daten im Detail.
- **[Bereitstellung](/info/deployment.html)** — Deploy/Serve/Hybrid, MDM und das Selbst-Hosting der Dienste.
- **[Konfiguration](/info/configuration.html)** — Profile, Brand-Packs, Capability-Gating und Feature-Flags.
- **[Datenschutzerklärung](/info/privacy.html)** — die formelle Erklärung „sammelt nichts, lädt nichts hoch".
