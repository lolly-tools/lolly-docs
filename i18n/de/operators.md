# Lolly für Operatoren

### Eine tief gestaffelte Sicherheits- und Analysestrategie - die zufällig auch eine kreative Produktionsplattform ist

Das organisatorische Immunsystem nach dem Zero-Trust-Prinzip, das sich um das legt, was Sie ohnehin schon tun - damit die alltägliche Kreativarbeit, die Ihre Teams jeden Tag brauchen, *innerhalb* Ihres Perimeters stattfindet, statt daraus abzufließen.

**Was dabei für Sie herausspringt.** Sie werden zu der Person, die Ja zu etwas gesagt hat, das sowohl sicher *als auch* beliebt ist. Sie schließen ein Datenabfluss-Leck, gewinnen Fähigkeiten hinzu und streichen eine Anfragen-Warteschlange - alles in einem Zug, der seltene Sicherheitserfolg, der Sie beliebter macht, nicht unbeliebter. Kein Anruf um 3 Uhr morgens von der Rechtsabteilung, weil gesperrte Dateien oder Kundendaten in einem beliebigen Web-Tool gelandet sind; weniger SaaS-Anbieter, Verträge und Audits auf Ihrem Tisch; und ein vollständig reproduzierbarer Prüfpfad, auf den Sie verweisen können, wenn jemand fragt. Sie schlafen ruhiger - und erhellen dabei den einen oder anderen Tag.

Lolly ist kein Kreativ-Tool zweiter Klasse: Es legt produktionsreife Ergebnisse in die Hände aller, und die markengeführte Gestaltung sucht ihresgleichen. Der Grund, warum es *sicher* ist, es so breit zu verteilen, liegt in der Architektur: Es wird nichts hochgeladen, das Sie nicht selbst hineingegeben haben, jedes Ergebnis ist reproduzierbar, und jeder Export kann mehrere Schichten führender kryptografischer Nachweise tragen. Ganz gleich, wie ein Dokument auf Ihren Tisch gelangt ist - Sie sehen seine vollständige Herkunft, ob es verändert wurde und ob Sie es pixelgenau nachbauen können.

> **Wo es heute steht.** Die Sicherheitseigenschaften von Lolly sind von Grund auf stark, und die Kryptografie- und Datei-Parsing-Engines durchlaufen derzeit SUSEs unternehmenstaugliche Infrastruktur-Härtung. Die Siegel, die Signierung auf dem Gerät und die Verschlüsselung weiter unten sind schon jetzt real und belastbar und reifen in Richtung unabhängiger Zertifizierung - wo ein Vertrag also zertifizierte Absicherung verlangt, setzen Sie sie als tief gestaffelte Verteidigung ein, während dieser Prozess abgeschlossen wird.

## Der strategische Vorteil

Die übliche Art, wie routinemäßige Kreativarbeit erledigt wird, ist eine Haftungsfläche: Dateien werden per E-Mail an externe Design-Dienstleister geschickt, Markenwerte in ein Dutzend SaaS-Editoren hochgeladen, Kundendaten in das Web-Tool einer fremden Person eingefügt, nur um „schnell eine Grafik zu machen“. Jedes Einzelne davon bedeutet, dass Daten Ihre Kontrolle verlassen.

Lolly kehrt das um. Die Arbeit, die diese Lecks *verursacht* hat - die Zitatkarte, das lokalisierte Banner, das Event-Badge, der geschwärzte Screenshot - findet jetzt in einem Tool statt, das auf dem eigenen Gerät der Mitarbeitenden läuft, mit Ihrer Marke, ohne einen Server dazwischen. Sie haben nicht eine weitere Kontrolle auf einen riskanten Workflow gesetzt; Sie haben den riskanten Workflow durch einen ersetzt, der von vornherein keinen Weg nach außen hat.

- **Die Konfiguration gehört Ihnen.** Engine und Shells sind Open Source (MPL-2.0). Legen Sie Ihre eigene Authentifizierung, Telemetrie oder Zertifizierungsstelle (CA) darüber; hosten Sie es oder eben nicht; Sie behalten die volle Kontrolle über Funktionen und Kosten, in Git nachverfolgt, nicht eingesperrt in einer SaaS-Datenbank.
- **Governance kann Daten sein, kein Dashboard.** Wenn Sie diese Kontrolle möchten, verwalten Sie den Tool-Katalog als Git-Repository - die Pull-Request-Prüfung wird zur Markenfreigabe, mit einem lückenlosen Prüfpfad und sofortigem Rollback jeder Vorlage, die Ihre Belegschaft berühren kann. Es ist eine Option, keine Pflicht: Teams, die einfach etwas gestalten wollen, bauen ihre eigenen Tools im Layout Studio und nehmen ihre eigenen Dateien in den Katalog auf, komplett in der App und ohne git je anzufassen. Siehe [Einführung & Governance](/info/adoption-governance.html).
- **Leitplanken sind strukturell.** Markenvorgaben sind fest in die Vorlagen eingebaut, nicht als Richtlinien veröffentlicht, die man übergehen kann. Das falsche Ergebnis wird nicht bloß abgeraten - es lässt sich gar nicht erst darstellen.

## Die Anfragen-Warteschlange streichen und zugleich mehr Inhalte schaffen.

Ein Ziel von Lolly ist die **Umlenkung von Design-Anfragen**: Routineanfragen, die nie eine Designerin oder einen Designer erreichen müssen, weil die Person, die das Asset brauchte, es selbst richtig und in wenigen Minuten erstellt hat. Jedes umgelenkte Ticket ist zugleich ein Produktivitätsgewinn und eine Datei weniger, die die Hände wechselt.

Lolly ist so gebaut, dass es sich in die tatsächliche Arbeitsweise Ihrer Organisation einfügt - es gibt keinen einzig richtigen Weg, es bereitzustellen:

- **Verteilen statt betreiben.** Bringen Sie Lolly über Ihr bestehendes MDM (Intune, Jamf, Munki …) auf die Geräte. Es läuft lokal als Desktop-/Mobil-App oder als Offline-PWA - hinter jeder Firewall, in jeder Air-Gap-Umgebung, ohne einen Server, der gewartet werden muss, und die IT bestimmt den Update-Takt.
- **Nur betreiben.** Betreiben Sie eine einzige Instanz in Ihrem Netzwerk (oder hinter einem VPN); die Nutzenden erreichen sie im Browser, ohne Installation. Veröffentlichen Sie ein Tool einmal, und alle haben es sofort; koppeln Sie es für die Zugriffskontrolle mit Ihrem IdP.
- **Hybrid.** Lokale Apps für die Offline-Arbeit im Feld, eine stets aktuelle Browser-Version für geliehene Geräte - beide greifen auf dieselbe Tool-Bibliothek zu.

Die vollständigen Bereitstellungsmodelle und die Administrationsanleitung finden Sie unter [Bereitstellung](/info/deployment.html) und [Konfiguration](/info/configuration.html).

## Werkzeuge gegen Datenabfluss

Eine Kategorie von Lolly-Tools - die Datenschutz-Werkzeuge - ist *gezielt* dafür da, Dateien innerhalb des Perimeters zu halten.


- **Versteckte Daten entfernen**
 Entfernt Standortangaben und alle versteckten identifizierenden Informationen aus Dokumenten und Mediendateien.

- **Text-Assistent**  
Anonymisieren, codieren, formatieren und bearbeiten Sie strukturierten und unstrukturierten Text. 

- **PDF komprimieren**
Verkleinert ein zu großes PDF auf dem Gerät, damit niemand zu einer fremden „Mein PDF komprimieren“-Website greift, sobald eine Datei zu groß zum Mailen ist - genau dort fallen Daten aus dem Fenster. 

Alle diese Vorgänge sind Transformationen auf dem Gerät: Ihre Datei oder Ihre Daten gehen hinein, bereinigte Bytes kommen heraus, und **es gibt keinen Server, zu dem etwas hochgeladen wird**. Sie sind das bewusste Gegenteil des typischen Tools nach dem Motto „Lade deine Datei auf die Website einer fremden Person, um sie zu bereinigen“, zu dem wohlmeinende Mitarbeitende sonst greifen.



## Determinismus & Reproduzierbarkeit

Jede Tool-Eingabe lässt sich als URL-Parameter ausdrücken, und dieselben Eingaben erzeugen dieselbe Datei. Das hat zwei Konsequenzen für Operatoren:

- **Eine URL ist das Artefakt.** Committen Sie den Link, erzeugen Sie das Asset bei Bedarf neu - keine Binärdateien in Git eingecheckt, kein Suchen nach „der aktuellsten Version“ im Chat. Asset- und Tool-IDs sind dauerhafte Zusagen, sodass ein heute erstellter Link auch später noch auflöst.
- **Die CLI nutzt denselben Render-Pfad** wie die grafische Oberfläche, sodass Build-Pipelines und App nie auseinanderlaufen. Erzeugen Sie OG-Bilder, Social Cards und Datenvisualisierungen reproduzierbar zur Build-Zeit.

## Herkunft & Content Credentials

Exporte können **Content Credentials** tragen - ein signiertes [C2PA](https://c2pa.org)-Manifest, das an einen Hash der Datei-Bytes gebunden ist. Jede spätere Änderung an der Datei bricht das Siegel, sodass ein C2PA-fähiges Prüfprogramm **Veränderungen kryptografisch und offline erkennt**. Das Credential ist manipulations*sichtbar*: Es meldet Manipulationen, statt sie zu verhindern - und genau das macht eine vollständig offline durchführbare Prüfung möglich.

- **Standardmäßig aktiv, auf dem Gerät.** Der Signierschlüssel wird auf dem Gerät erzeugt, ist nicht auslesbar (nicht einmal Lolly kommt an ihn heran), und die Signierung geschieht lokal - nur die optionale Identitäts-*Registrierung* nimmt überhaupt Kontakt zum Netzwerk auf.
- **Vertrauensstufen.** Ein nicht registrierter Export ist strukturell gültig, aber anonym signiert (`untrusted`). Registrieren Sie eine **verifizierte Identität** (kurzlebiges Zertifikat der Lolly-CA, an eine E-Mail-Adresse gebunden), und Prüfprogramme, die den Lolly-Root pinnen, melden `trusted` samt der E-Mail-Adresse der signierenden Person. Eine vertrauenswürdige Zeitstempelstelle und das grüne Häkchen eines externen Validators (C2PA-Konformität) stehen auf der Roadmap. Jede Stufe ist ausgewiesen, und eine Datei beansprucht immer nur das Vertrauen, das sie belegen kann.
- **Die Gültigkeitsdauer des Credentials** legen Operator oder Nutzer beim Signieren fest: 7 / 30 / 90 / 365 Tage, Standard 30.
- **Der Lolly Imprint.** Ein zweites, ergänzendes Signal, das **standardmäßig aktiv** ist: ein unsichtbares Pixel-Wasserzeichen, das in Raster-Exporte eingebacken wird (und in die von Lolly gerenderten Raster innerhalb eines PDF/PPTX, nie in ein selbst eingebettetes Bild der Nutzenden). Wo das Credential jeder Container-Änderung zum Opfer fällt, übersteht der Imprint ein erneutes Speichern oder einen Screenshot - ein dauerhafter Hinweis „diese Pixel sind durch Lolly gegangen“, nur Anwesenheit, keine personenbezogenen Daten. Es ist Sicherheit durch Verschleierung, keine gehärtete Abwehr, und ergänzt das Credential, statt es zu ersetzen. `imprint=0` schaltet es ab.
- **Dauerhafte Content Credentials (optional).** Ein Raster-Export kann zusätzlich eine unsichtbare *dauerhafte* Markierung tragen, die einen Soft-Binding-Bezeichner kodiert, sodass sich das C2PA-Credential selbst dann noch wiederherstellen lässt, wenn ein Social-Upload oder ein erneutes Speichern die Metadaten der Datei entfernt hat - der Fall, in dem ein gewöhnliches Credential verloren wäre. Sie ist nur für Raster und kostet einen neuronalen Kodierdurchlauf, daher ist sie standardmäßig aus (`durable=1` schaltet sie ein). Lolly erkennt seine eigene dauerhafte Markierung heute offline unter `/verify`; die Wiederherstellung durch Fremd-Tools (z. B. Adobe) folgt, sobald die branchenweite Soft-Binding-Auflösung steht.
- **Die Prüfung erfolgt auf dem Gerät.** Ziehen Sie eine beliebige Datei auf `/verify` (oder nutzen Sie `lolly validate <file>`) für einen Offline-Bericht darüber, ob sie wirklich mit Lolly erstellt und seither unverändert ist. Die Verify-Ansicht im Web kennzeichnet außerdem KI-generierte Inhalte, erkennt den Lolly Imprint, prüft **SEAL**-Signaturen (eine Signatur auf Byte-Ebene mit dem Schlüssel im DNS - der einzige Netzkontakt ist die DNS-Schlüsselabfrage, nie die Datei selbst), durchsucht auf Wunsch tief nach Pixel-Wasserzeichen von Drittanbietern (ein einmaliger Modell-Download auf das Gerät) und bringt versteckte Daten ans Licht - alles, ohne die Datei hochzuladen. Siehe [Content Credentials-Identität](/info/content-credentials-identity.html).

> **Hinweise zur Interoperabilität.** Lolly prüft schon heute seine eigenen Credentials und viele von Drittanbietern offline, einschließlich des Lesens von C2PA-Claim-**v2**-Manifesten anderer Hersteller. Ein Interop-Punkt ist noch in Arbeit: WebM - für das es noch kein standardisiertes C2PA-Mapping gibt, weshalb Lolly das Manifest als Matroska-Teil anhängt (Fremd-Tools prüfen Lollys MP4 auf Anhieb; WebM folgt, sobald sich der Standard gefestigt hat).

## Verschlüsselung & Passwortschutz

Für Dateien, die verschlüsselt unterwegs sein müssen, geschieht alles auf dem Gerät:

- **PDF-Öffnungspasswort** - *Standard* ist eine 40-Bit-RC4-Abschreckung (lässt sich überall öffnen, kann in einem Link mitreisen); *Stark* ist **AES-256** (PDF 2.0), wird beim Export eingegeben und nie in einen Link geschrieben.
- **Gesperrte Downloads** - ein ZIP, ein Projekte-Ordner oder ein Batch-Lauf lässt sich als Ganzes sperren: *Standard* ZipCrypto (schwach, universell) oder *Stark* **AES-256** (WinZip AE-2). Tief gestaffelt: Jedes PDF in einem Stark-Zip ist *zusätzlich* einzeln mit AES-256 gesperrt, sodass es auch nach dem Entpacken gesperrt bleibt.
- **Passwortgeschützte Freigabe-Links** - der gesamte Link-Zustand ist unter einem PBKDF2-abgeleiteten Schlüssel mit AES-256 verschlüsselt; es reist nur Chiffretext, das Passwort steht nie im Link, und die Entschlüsselung geschieht im Browser der empfangenden Person.

## Air-Gap-fähig

Air-Gap ist eine **erstklassige Bereitstellung**, kein Sondermodus - Lolly läuft ab Werk zur Render-Zeit ohne Netzwerk. Die Web-Shell ist eine Offline-First-PWA (Service Worker); Schriften und WASM liegen auf dem Gerät; der Tool-Zustand wird lokal über die Host-Bridge gesichert, nie über `localStorage`. Jedes Tool, das ins Netz greift, tut das nur über eine **freigegebene** `host.net`-Fähigkeit, die es in seinem Manifest angeben muss - eine Shell, die das nicht erfüllen kann (oder will), stubt sie aus. Bringen Sie die Shells über Ihr MDM auf die Geräte oder betreiben Sie eine einzige Instanz in Ihrem Netzwerk, und eine vollständig air-gapped Installation rendert, exportiert, verschlüsselt und prüft Credentials, ohne dass es irgendetwas gäbe, nach Hause zu telefonieren.

## Gut zu wissen

Ein paar Dinge, die Sie vor dem Ausrollen klar haben sollten:

- **Härtung läuft.** Kryptografie und Parser durchlaufen derzeit SUSEs unternehmenstaugliche Härtung (siehe oben) - von Grund auf robust; setzen Sie sie als tief gestaffelte Verteidigung ein, wo ein Vertrag zertifizierte Absicherung verlangt.
- **Tool-Hooks sind *keine* Security-Sandbox.** Das optionale `hooks.js` eines Tools läuft mit injizierter Host-Bridge, wird in einer Browser-Shell aber im Realm der Seite ausgeführt und *kann* auf `window`/`document`/`fetch` zugreifen. Behandeln Sie Tool-Code wie jeden Code, den Sie ausführen - prüfen Sie ihn. Deshalb kann eine Organisation, die einen gemeinsamen Katalog betreibt, diesen über Git-Review absichern; so oder so führen Sie nur Tools aus, die Sie geprüft haben, bis die Worker-Isolation kommt.
- **Content Credentials sind manipulationssichtbar.** Sie erkennen Veränderungen, statt sie zu verhindern - siehe die Hinweise zur Interoperabilität oben.
- **Zwei Verschlüsselungsstufen.** *Standard*-Sperren sind schnelle, universelle Abschreckung; *Stark* (AES-256) ist voller Schutz - greifen Sie für alles Sensible zu Stark und beachten Sie, dass es einen modernen Reader voraussetzt.

## Wie es weitergeht

- **[Einführung & Governance](/info/adoption-governance.html)** - Personas, die Deflection-Kennzahl und Governance-als-Daten im Detail.
- **[Bereitstellung](/info/deployment.html)** - Deploy/Serve/Hybrid, MDM und das Selbst-Hosting der Dienste.
- **[Konfiguration](/info/configuration.html)** - Profile, Brand-Packs, Capability-Gating und Feature-Flags.
- **[Datenschutzerklärung](/info/privacy.html)** - die formelle Erklärung „sammelt nichts, lädt nichts hoch“.
