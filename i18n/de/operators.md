# Lolly für Operatoren

### Eine Defense-in-Depth-Strategie für Sicherheit und Intelligence - die zufällig auch eine kreative Produktionsplattform ist

Das Zero-Trust-Immunsystem der Organisation, das sich um das legt, was Sie bereits tun - sodass die alltägliche kreative Arbeit, die Ihre Teams jeden Tag brauchen, *innerhalb* Ihres Perimeters stattfindet, statt aus ihm herauszusickern.

**Was Sie davon haben.** Sie werden zu der Person, die zu etwas Ja gesagt hat, das sowohl sicher *als auch* beliebt ist. Sie schließen ein Exfiltrationsloch, gewinnen Fähigkeit und löschen mit einem Handgriff eine Anfragewarteschlange - der seltene Sicherheitserfolg, der Sie beliebter macht, nicht weniger beliebt. Kein 3-Uhr-morgens-Anruf von der Rechtsabteilung, weil embargobelegte Dateien oder Kundendaten den Weg in ein zufälliges Web-Tool gefunden haben; weniger SaaS-Anbieter, Verträge und Audits auf Ihrem Tisch; und ein vollständig reproduzierbarer Prüfpfad, auf den Sie verweisen können, wenn jemand nachfragt. Sie schlafen besser und machen dabei noch ein paar Tage angenehmer.

Lolly ist kein Kreativ-Tool zweiter Klasse: Es legt produktionsreife Ausgabe in jedermanns Hände, und das markengeführte Erstellungserlebnis sucht seinesgleichen. Der Grund, warum es *sicher* ist, es breit auszugeben, ist architektonisch: Nichts wird hochgeladen, was Sie nicht selbst dort hineingelegt haben, jedes Ergebnis ist reproduzierbar, und jeder Export kann mehrere Schichten branchenführender kryptografischer Nachweise tragen. Egal, wie ein Dokument auf Ihren Schreibtisch gelangt ist, Sie können seine vollständige Provenienz einsehen, ob es manipuliert wurde und ob Sie es pixelgenau nachbilden können.

> **Wo wir heute stehen.** Lollys Sicherheitseigenschaften sind von Grund auf stark, und seine Kryptografie- und Dateiparsing-Engines durchlaufen gerade SUSEs Härtung auf Unternehmensinfrastruktur-Niveau. Die Siegel, das On-Device-Signieren und die Verschlüsselung unten sind schon jetzt real und belastbar und entwickeln sich in Richtung unabhängiger Zertifizierung - wo also ein Vertrag zertifizierte Absicherung verlangt, setzen Sie sie als Defense-in-Depth ein, während dieser Prozess abgeschlossen wird.

## Der strategische Vorteil

Der übliche Weg, wie alltägliche kreative Arbeit erledigt wird, ist eine Angriffsfläche für Haftungsrisiken: Dateien, die an externe Designagenturen gemailt werden, Markenassets, die in ein Dutzend SaaS-Editoren hochgeladen werden, Kundendaten, die in das Web-Tool eines Fremden eingefügt werden, um "schnell mal eine Grafik zu machen". Jedes davon ist Daten, die Ihre Kontrolle verlassen.

Lolly kehrt das um. Die Arbeit, die diese Lecks *verursacht* hat - die Zitatkarte, das lokalisierte Banner, das Event-Badge, der geschwärzte Screenshot - läuft jetzt auf einem Tool, das auf dem eigenen Gerät des Mitarbeiters läuft, gegen Ihre Marke, ohne Server dazwischen. Sie haben keine Kontrolle über einen riskanten Workflow gelegt - Sie haben den riskanten Workflow durch einen ersetzt, der von vornherein keinen Exfiltrationspfad hat.

- **Konfiguration liegt bei Ihnen.** Engine und Shells sind Open Source (MPL-2.0). Legen Sie Ihre eigene Authentifizierung, Telemetrie oder CA darüber; hosten Sie es oder nicht; Sie behalten volle Kontrolle über Funktionen und Kosten, git-verfolgt, nicht in einer SaaS-Datenbank eingeschlossen.
- **Governance kann Daten sein, kein Dashboard.** Wenn Sie diese Kontrolle wollen, verwalten Sie den Tool-Katalog als Git-Repository - Pull-Request-Review wird zur Markenfreigabe, mit vollständigem Audit-Trail und sofortigem Rollback jeder Vorlage, die Ihre Belegschaft anfassen kann. Das ist eine Option, keine Pflicht, und sie landet auf genau einem Schreibtisch: Ersteller arbeiten vollständig in der App, speichern das Erstellte als **Sitzung** und geben es als Freigabelink, Backup oder Live-Kollaboration weiter - nichts davon braucht Git. Wenn eine dieser Sitzungen es verdient, ein dauerhafter Ausgangspunkt zu werden, öffnet die für das Deployment verantwortliche Person den Link, hält seine Werte als **Vorlage** zu diesem Tool im Markenpaket fest und committet. Von da an erscheint sie in der "Neu aus Vorlage"-Auswahl des Tools und ist als `?template=<id>` verlinkbar. Git ist der Verwaltungsschritt, einmal genutzt, und nie etwas, das ein Ersteller anfassen muss. Siehe [Adoption & Governance](/info/adoption-governance.html).
- **Leitplanken sind strukturell.** Markenvorgaben sind fest in Vorlagen codiert, nicht als Richtlinien veröffentlicht, die man ignorieren kann. Das falsche Ergebnis wird nicht davon abgeraten - es ist unmöglich darstellbar.

> **Sie steuern die gesamte Staffel.** Eine kreative Person verfasst die Regeln und eine Entwicklerin skaliert sie, aber es ist die betreibende Person, die diesen Lebenszyklus organisationsweit sicher macht - dasselbe Tool, das einer Vertriebskraft Self-Service im Flugzeug erlaubt, lässt sich per Git-Review absichern, über Ihr MDM ausrollen und kryptografisch prüfen. Sehen Sie, wie die Rollen zusammenwirken, in [Der Lebenszyklus einer Kampagne](/info/overview.html#the-lifecycle-of-a-campaign), und wie Sie es steuern, in [Adoption & Governance](/info/adoption-governance.html).

## Die Anfragewarteschlange löschen und dabei mehr Inhalte erzeugen.

Ein Ziel von Lolly ist **Deflektion von Gestaltungsanfragen**: Routineanfragen, die nie einen Designer erreichen müssen, weil die Person, die das Asset brauchte, es selbst erstellt hat, korrekt, in wenigen Minuten. Jedes abgewendete Ticket ist zugleich ein Produktivitätsgewinn und eine Datei weniger, die den Besitzer wechselt.

Lolly ist so gebaut, dass es zu Ihrer tatsächlichen Organisationsweise passt - es gibt keinen einzigen richtigen Weg, es einzusetzen:

- **Ausliefern statt bereitstellen.** Bringen Sie Lolly über Ihr bestehendes MDM (Intune, Jamf, Munki…) auf die Geräte. Es läuft lokal als Desktop-/Mobil-App oder als Offline-PWA - funktioniert hinter jeder Firewall, in jeder Air-Gap-Umgebung, ohne Server zu pflegen, wobei die IT das Update-Tempo bestimmt.
- **Nur bereitstellen.** Betreiben Sie eine Instanz in Ihrem Netzwerk (oder hinter einem VPN); Nutzer erreichen sie im Browser, nichts wird installiert. Ein Tool einmal veröffentlichen, alle haben es sofort; kombinieren Sie es mit Ihrem IdP für Zugriffskontrolle.
- **Hybrid.** Lokale Apps für Offline-Einsätze im Feld, eine stets aktuelle Browser-Version für geliehene Rechner - beide zeigen auf dieselbe Tool-Bibliothek.

Die vollständigen Deployment-Modelle und die Administrations-Anleitung finden Sie unter [Deployment](/info/deployment.html) und [Konfiguration](/info/configuration.html).

## Anti-Exfiltrations-Werkzeuge

Eine Kategorie von Lolly-Tools - die Datenschutz-Werkzeuge - existiert *speziell* dafür, Dateien innerhalb der Perimeter zu halten.


- **Versteckte Daten entfernen**
 Entfernt Standort und alle versteckten identifizierenden Informationen aus Dokumenten und Mediendateien.

- **Text-Helfer**  
Anonymisiert, codiert, formatiert und bearbeitet strukturierten und unstrukturierten Text. 

- **PDF komprimieren**
Verkleinert ein übergroßes PDF auf dem Gerät, sodass niemand im Moment, in dem eine Datei zu groß für eine E-Mail ist, zu einer Drittanbieter-Website "PDF komprimieren" greift - genau dort, wo Daten aus dem Fenster entweichen. 

All das sind Transformationen auf dem Gerät: Ihre Datei oder Ihre Daten gehen hinein, saubere Bytes kommen heraus und **es gibt keinen Server, zu dem hochgeladen wird**. Sie sind das bewusste Gegenteil des typischen "Lade deine Datei auf die Website eines Fremden hoch, um sie zu bereinigen"-Tools, zu dem eine wohlmeinende Mitarbeiterin sonst greift.

![Versteckte Daten entfernen: Die Datei landet auf der Leinwand, und das Abzeichen erklärt unmissverständlich, dass nichts hochgeladen wird](/t/url-shot?url=%2F%23%2Ftool%2Fstrip-data&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=aud-strip-data)

Der Text-Helfer ist derselbe Vorteil für Text statt für Dateien. Er ist die Registerkarten-Werkbank, die eine Mitarbeiterin sonst auf einer fremden Website suchen würde, und er deklariert überhaupt keine Eingaben, weil nichts, was er verarbeitet, jemals die Seite verlässt.

![Die Werkbank des Text-Helfers - eine Leiste von Vorgangs-Reitern über einer Karte, die erklärt, dass nichts, was Sie einfügen, Ihr Gerät verlässt](/t/url-shot?url=%2F%23%2Ftool%2Ftext-helper&width=1200&height=750&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-content&dark=1&filename=ov2-text-helper)

PDF komprimieren vervollständigt die Reihe: Der übergroße Anhang schrumpft unter einer von Ihnen gewählten Qualitätsstufe, auf dem Rechner, der ihn ohnehin schon besitzt.

![PDF komprimieren - eine Qualitätsstufe und ein Graustufen-Schalter links, eine Ablagezone für Ihr eigenes PDF rechts und kein Upload nirgendwo](/t/url-shot?url=%2F%23%2Ftool%2Fcompress-pdf&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=ov2-compress-pdf)

## Determinismus & Reproduzierbarkeit

Jede Tool-Eingabe lässt sich als URL-Parameter ausdrücken, und dieselben Eingaben erzeugen dieselbe Datei. Das hat zwei Konsequenzen für Betreiber:

- **Eine URL ist das Artefakt.** Committen Sie den Link, erzeugen Sie das Asset bei Bedarf neu - keine Binärdateien in Git eingecheckt, kein Jagen nach "der neuesten Version" im Chat. Asset- und Tool-IDs sind dauerhafte Verträge, sodass ein heute geprägter Link auch später noch auflösbar ist.
- **Die CLI ist derselbe Render-Pfad** wie die GUI, sodass Build-Pipelines und die App nie auseinanderdriften. Erzeugen Sie OG-Bilder, Social Cards und Datenvisualisierungen zur Build-Zeit, reproduzierbar.

Prompt to Image ist Determinismus in seiner reinsten Form: Der Text ist die gesamte Eingabe, das gesetzte Bild ist die gesamte Ausgabe, und derselbe Text setzt sich immer gleich.

![Prompt to Image - ein Block Prompt-Text, gesetzt zu einem quadratischen Bild, wobei nichts im Ergebnis steht, das nicht in der Eingabe war](/t/url-shot?url=%2F%23%2Ftool%2Fprompt-card%3Ffull&width=1440&height=900&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-prompt-to-image)

## Herkunftsnachweis & Content Credentials

![Die Verify-Ablagezone akzeptiert jede Datei, aus jeder Quelle, und liest sie ohne Netzwerkaufruf](/t/url-shot?url=%2F%23%2Fverify&width=1440&height=900&dpi=192&waitMs=1800&waitSelector=.valid-drop&cropSelector=.valid-drop&format=svg&walker=1&dark=1&filename=aud-verify-drop)

Exporte können **Content Credentials** tragen - ein signiertes [C2PA](https://c2pa.org)-Manifest, gebunden an einen Hash der Bytes der Datei. Jede spätere Änderung an der Datei bricht das Siegel, sodass ein C2PA-fähiger Prüfer Manipulation **kryptografisch, offline erkennt**. Das Credential ist manipulations-*erkennbar*: Es zeigt Manipulation an, statt sie zu verhindern, und genau das macht vollständig offline-fähige Verifikation überhaupt möglich.

- **Standardmäßig aktiv, auf dem Gerät.** Der Signierschlüssel wird auf dem Gerät erzeugt, ist nicht extrahierbar (selbst Lolly kann ihn nicht lesen), und das Signieren geschieht lokal - nur die optionale Identitäts-*Registrierung* berührt jemals das Netzwerk.
- **Vertrauensstufen.** Ein nicht registrierter Export ist wohlgeformt, aber anonym signiert (`untrusted`). Registrieren Sie eine **verifizierte Identität** (kurzlebiges Zertifikat der Lolly-CA, an eine E-Mail-Adresse gebunden), und Prüfer, die die Lolly-Wurzel pinnen, melden `trusted` plus die E-Mail-Adresse des Unterzeichners. Eine vertrauenswürdige Zeitstempelstelle und ein Drittanbieter-Validator-Grünlicht (C2PA-Konformität) stehen auf der Roadmap. Jede Stufe ist explizit, und eine Datei beansprucht immer nur das Vertrauen, das sie belegen kann.
- **Die Gültigkeitsdauer des Credentials** ist zum Zeitpunkt des Signierens die Entscheidung von Betreiber oder Nutzer: 7 / 30 / 90 / 365 Tage, Standard 30.
- **Der Lolly Imprint.** Ein zweites, ergänzendes Signal, das **standardmäßig aktiv** ist: ein unsichtbares Pixel-Wasserzeichen, eingebacken in Raster-Exporte (und die von Lolly gerenderten Rasterbilder innerhalb eines PDF/PPTX, nie ein vom Nutzer eingebettetes eigenes Bild). Wo das Credential bei jeder Container-Änderung stirbt, übersteht der Imprint ein erneutes Speichern oder einen Screenshot - ein dauerhafter Hinweis "diese Pixel liefen durch Lolly", nur Vorhandensein, keine personenbezogenen Daten. Es ist Security-through-Obscurity, keine gehärtete Verteidigung, und ergänzt das Credential, statt es zu ersetzen. `imprint=0` schaltet es ab.
- **Dauerhafte Content Credentials (Opt-in).** Ein Raster-Export kann zusätzlich eine unsichtbare *dauerhafte* Markierung tragen, die einen Soft-Binding-Bezeichner codiert, sodass das C2PA-Credential auch dann wiederhergestellt werden kann, wenn ein Social-Upload oder ein erneutes Speichern die Metadaten der Datei entfernt hat - der Fall, in dem ein normales Credential verloren ginge. Es ist reine Rastersache und kostet einen neuronalen Encode-Durchlauf, daher standardmäßig aus (`durable=1` zum Einschalten). Lolly erkennt seine eigene dauerhafte Markierung heute offline unter `/verify`; die Wiederherstellung durch Drittanbieter-Tools (z. B. Adobe) folgt, sobald die branchenweite Soft-Binding-Lösung steht.
- **Verifikation läuft auf dem Gerät.** Legen Sie eine beliebige Datei auf `/verify` (oder `lolly validate <file>`) für einen Offline-Bericht darüber, ob sie tatsächlich mit Lolly erstellt und seither unverändert ist. Die Web-Verify-Ansicht kennzeichnet zudem KI-generierte Inhalte, erkennt den Lolly Imprint, verifiziert **SEAL**-Signaturen (eine Signatur auf Byte-Ebene - ohne jede Netzwerkanfrage: Die Engine nimmt einen *injizierten* DNS-Schlüssel-Resolver entgegen, und keine Shell injiziert heute einen, sodass ein Datensatz mit eigenem inline `pk=`-Schlüssel vollständig offline verifiziert, während ein DNS-geschlüsselter "kein Schlüssel-Resolver und kein inline-Schlüssel" meldet, statt nach außen zu greifen - siehe `SealPublicKeyResolver` in `engine/src/seal.ts`), scannt optional tief nach Drittanbieter-Pixel-Wasserzeichen (ein einmaliger On-Device-Modell-Download) und legt versteckte Daten offen - alles ohne die Datei hochzuladen. Siehe [Content Credentials Identity](/info/content-credentials-identity.html).

> **Hinweise zur Interoperabilität.** Lolly verifiziert heute offline sowohl eigene Credentials als auch viele von Drittanbietern, einschließlich des Lesens von C2PA-Claim-**v2**-Manifesten anderer Erzeuger. Zwei Container sind noch in Arbeit, beide weil C2PA für sie noch keine standardisierte Zuordnung hat, sodass Lolly das Credential an einem eigenen Ort trägt und Lollys Prüfer derjenige ist, der es zurückliest: **WebM** (das Manifest reist als Matroska-Anhang) und **Ogg/Opus** (ein `C2PA=`-Feld im OpusTags-Kommentar-Header, wobei dieser Byte-Bereich von der Bindung ausgeschlossen ist, damit das Audio weiterhin identisch hasht). Alles andere entspricht der Spezifikation - Drittanbieter-Tools verifizieren Lollys MP4, M4A, MP3, WAV, PNG, JPEG und PDF ohne Weiteres. Siehe `engine/src/c2pa-containers.ts` für beide Zuordnungen; sie gleichen sich dem Standard an, sobald er sich festigt.

## Verschlüsselung & Passwortschutz

Für Dateien, die verschlossen reisen müssen, geschieht alles auf dem Gerät:

![Die Schloss-Karte im Export-Panel: ein Passwort und eine explizite Wahl zwischen den beiden Stufen](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools%26format%3Dpdf%26password%3Ddemo%26options&width=1440&height=900&dpi=192&waitMs=2200&cropSelector=.export-pdfpass&walker=1&format=svg&dark=1&filename=aud-pdf-lock)

- **PDF-Öffnungspasswort** - *Standard* ist ein 40-Bit-RC4-Abschreckung (öffnet überall, kann in einem Link reisen); *Strong* ist **AES-256** (PDF 2.0), beim Export eingegeben und nie in einen Link gelegt.
- **Gesperrte Downloads** - ein ZIP, ein Projekte-Ordner oder ein Stapellauf kann als Ganzes gesperrt werden: *Standard* ZipCrypto (schwach, universell) oder *Strong* **AES-256** (WinZip AE-2). Verteidigung in der Tiefe: Jedes PDF innerhalb eines Strong-ZIPs ist *zusätzlich* einzeln AES-256-gesperrt, sodass es nach dem Entpacken gesperrt bleibt.
- **Passwortgeschützte Freigabelinks** - der gesamte Link-Zustand ist AES-256-verschlüsselt unter einem PBKDF2-abgeleiteten Schlüssel; nur Chiffretext reist, das Passwort steht nie im Link, und die Entschlüsselung geschieht im Browser des Empfängers.

## Air-Gap-bereit

Air-Gap ist ein **erstklassiges Deployment**, kein Sondermodus - Lolly läuft ab Werk ohne Netzwerk zur Renderzeit. Die Web-Shell ist eine Offline-First-PWA (Service Worker); Schriften und WASM werden auf dem Gerät gespeichert; der Tool-Zustand wird lokal über die Host-Bridge persistiert, nie `localStorage`. Der unterstützte Weg für ein Tool, das Netzwerk zu erreichen, ist eine **erlaubnisgelistete** `host.net`-Fähigkeit, die es in seinem Manifest deklariert - eine Shell, die das nicht kann (oder nicht will), stubt sie aus. Das ist ein Portabilitätsvertrag statt einer erzwungenen Grenze (siehe den Hooks-Hinweis unten), weshalb die Kontrolle über die Prüfung des Tool-Codes bestehen bleibt - wenngleich es auf einem Air-Gap-Gerät ohnehin nichts zu erreichen gibt, in keine Richtung. Bringen Sie die Shells über Ihr MDM auf die Geräte oder stellen Sie eine Instanz in Ihrem Netzwerk bereit, und eine vollständig air-gapped Installation rendert, exportiert, verschlüsselt und verifiziert Credentials, ohne dass etwas nach Hause telefoniert.

## Gut zu wissen

Ein paar Dinge, die Sie vor dem Rollout klar haben sollten:

- **Härtung in Arbeit.** Die Kryptografie und die Parser durchlaufen SUSEs unternehmensweite Härtung (siehe oben) - schon heute robust by design; setzen Sie sie als Verteidigung in der Tiefe ein, wo ein Vertrag zertifizierte Zusicherung verlangt.
- **Tool-Hooks sind *keine* Sicherheits-Sandbox.** Der optionale `hooks.js` eines Tools läuft mit injizierter Host-Bridge, aber in einer Browser-Shell wird er im Realm der Seite ausgeführt und *kann* `window`/`document`/`fetch` erreichen. Behandeln Sie Tool-Code wie jeden Code, den Sie ausführen - prüfen Sie ihn. Deshalb kann eine Organisation, die einen gemeinsamen Katalog betreibt, ihn per Git-Review absichern; in jedem Fall: Führen Sie nur geprüfte Tools aus, bis die Worker-Isolation kommt.
- **Content Credentials sind manipulations-erkennbar.** Sie erkennen Manipulation, statt sie zu verhindern - siehe die Interoperabilitätshinweise oben.
- **Zwei Verschlüsselungsstufen.** *Standard*-Sperren sind schnelle, universelle Abschreckungen; *Strong* (AES-256) ist voller Schutz - greifen Sie für alles Sensible zu Strong, wobei zu beachten ist, dass es einen modernen Reader voraussetzt.

## Wie es weitergeht

- **[Sicherheit & Verifikation](/info/security.html)** - die Standards, Primitiven, das Vertrauensmodell und die Tests hinter den obigen Credentials und der Verschlüsselung.
- **[Adoption & Governance](/info/adoption-governance.html)** - Personas, die Deflektionsmetrik und Governance-as-Data im Volltext.
- **[Deployment](/info/deployment.html)** - Ausliefern/Bereitstellen/Hybrid, MDM und Self-Hosting der Dienste.
- **[Konfiguration](/info/configuration.html)** - Profile, Markenpakete, Fähigkeits-Gating und Feature-Flags.
- **[Datenschutzerklärung](/info/privacy.html)** - die formale Erklärung, was erfasst, gespeichert und gesendet wird und was nicht.
- **[Server-Oberfläche](/info/server-surface.html)** - das vollständige Inventar dessen, was serverseitig läuft (zwei optionale Komponenten) im Vergleich zu auf dem Gerät.
