# Profile - wer Sie sind, wenn Sie erstellen

Ein **Profil** ist die Arbeitsidentität, *als* die Lolly erstellt. Es ist die kleine Menge an Angaben, auf die ein Tool zurückgreifen kann, damit Sie sie nicht jedes Mal neu eingeben müssen - Ihr Name, Kontaktdaten, ein optionales Porträtfoto, einige Einstellungen - sowie alles, was sich während der Arbeit ansammelt: gespeicherte Sitzungen, hochgeladene Bilder und die lokale Aktivitätsstatistik.

Alles in einem Profil befindet sich **auf dem Gerät**, in der lokalen Datenbank des Browsers (IndexedDB bei der Web-PWA, das Dateisystem bei den Tauri-Apps). Es gibt kein Konto, und nichts wird hochgeladen. Sie verwalten es unter **Profil** (oben rechts in der Galerie); Tools *lesen* es lediglich - und nur die konkreten Felder, für die sie zur Vorausfüllung gebaut wurden.

> Ein Profil dreht sich um *Sie* (oder wer auch immer hier gerade erstellt). Es unterscheidet sich von der **Plattform** - den Farben, Schriften und globalen Einstellungen der Marke - und von den **Fähigkeiten**, dem Katalog dessen, was die App kann. Siehe [Profil vs. Plattform vs. Fähigkeiten](#profile-vs-platform-vs-capabilities) am Ende.

## Was in einem Profil steckt

![The Profile screen - name, contact, an optional headshot, and your preferences](/t/url-shot?url=%2F%23%2Fprofile&width=1440&height=900&dpi=192&waitMs=1600&format=png&localize=1&filename=profile-details)

| Teil | Was es ist |
|---|---|
| **Name** | Vor- und Nachname. |
| **Kontakt** | E-Mail und Telefon. |
| **Standort** | Stadt und Land. |
| **Porträtfoto** | Ein optionales Foto, quadratisch zugeschnitten und als lokales Bild gespeichert. Wird von Tools wie E-Mail-Signaturen, Zitatkarten, Farbblöcken und dynamischen Layouts verwendet. |
| **Meine Angaben verwenden** | Ein einzelner Opt-in-Schalter. Er steuert, ob Ihre persönlichen Angaben als **Herkunftsnachweis** (Provenance) - die in exportierten Dateien eingebettete Autor-/Credit-Zeile - mitgeführt werden, sowie als Autor bei **/pro**-Batch-Läufen. (Er steuert nicht die Vorausfüllung: siehe [Wie Tools Ihr Profil nutzen](#how-tools-use-your-profile).) |
| **Einstellungen** | Ihr Theme (hell, dunkel oder SUSE) und welche Teile der App Sie über **Feature-Flags** aktiviert haben. |
| **Ihre Arbeit** | Gespeicherte Sitzungen (mit Vorschaubildern) - organisiert in verschachtelten Ordnern unter **[Projekte](/info/using.html)** - Ihre **Meine Bilder**-Bibliothek und die lokalen Aktivitätsstatistiken, alle diesem Profil zugeordnet. |

Nichts davon ist erforderlich. Ein leeres Profil ist ein vollkommen gutes Profil; Sie füllen nur das aus, was Ihnen Tipparbeit erspart.

## Ein Profil ist ein Kontext, keine bloße Person

Das Wort „Profil" legt eine feste Person nahe, aber in Lolly ist es eigentlich ein **Erstellungskontext** - *wer Sie sind, während Sie dieses Ding erstellen*. Dieser Kontext kann drei verschiedene Formen annehmen, und Lolly behandelt sie alle gleich.

### Als Einzelperson

Der Standardfall. Das Profil sind Sie: Ihr Name, Ihre E-Mail, Ihr Porträtfoto. Einmal eingerichtet, füllen sich Ihre Signatur, Ihr Badge und Ihr Konferenz-Lockup von selbst aus. Das ist alles, was die meisten Menschen jemals brauchen werden.

### Als Team

Ein Profil muss kein einzelner Mensch sein. Es kann für ein **Team oder eine Funktion innerhalb einer Organisation** stehen: den gemeinsamen Namen des Teams, eine Gruppen-Postfachadresse (`events@…`), eine Abteilung, das Porträtfoto oder Einheitszeichen des Teams. Eine Person richtet es ein, exportiert es (siehe unten), und der Rest des Teams lädt dasselbe Profil - sodass alles, was das Team produziert, konsistente Angaben trägt, ohne dass jemand sie erneut eingeben muss. Ein gemeinsam genutzter Kiosk oder ein ausgeliehener Demo-Laptop kann ein einziges Teamprofil ausführen, als das jeder dahinter erstellt.

### Als Funktion - eine Rolle, die Sie manchmal tragen

Das ist der Fall, den das starre Modell „eine Person, ein Profil" übersieht. Sie könnten **an drei Tagen im Jahr Eventmanager** sein und den Rest der Zeit etwas völlig anderes. An diesen drei Tagen möchten Sie Event-Details, das Event-Postfach, vielleicht eine Event-Submarke, um Ihre Badges und Beschilderung auszufüllen; an den anderen 362 möchten Sie Ihre normale Identität zurück.

In Lolly ist diese Rolle einfach **ein weiteres Profil, das Sie griffbereit halten** - ein gespeichertes Bundle (nächster Abschnitt), das Sie für das Event laden und danach beiseitelegen. Die Rolle ist ein Hut, kein neues Konto. Setzen Sie ihn auf, wenn Sie ihn brauchen, nehmen Sie ihn ab, wenn Sie fertig sind.

## Eine Installation, ein aktives Profil - Sie können viele aufbewahren

Zu jedem Zeitpunkt hat eine Installation **ein aktives Profil** - die Angaben, die ein Tool gerade sieht. Es gibt keinen In-App-Profilwechsler; stattdessen ist jedes Profil ein **portables Bundle** (eine einzelne `.zip`-Datei, siehe [unten](#moving-a-profile-to-a-new-device)). Das ist bewusst derselbe Mechanismus wie der Umzug auf ein neues Gerät - ein Profil ist eine Datei, die Sie speichern, kopieren und laden können.

Wenn Sie also tatsächlich mehrere Kontexte jonglieren (Sie selbst, Ihr Team, den Eventmanager-Hut), bewahren Sie mehrere Bundles auf und laden das, das Sie gerade brauchen:

- **Sauberster Wechsel:** **Profil → Speicher → Alle meine Daten löschen**, dann das Bundle für den Kontext, in den Sie wechseln, **importieren**. Sie erstellen jetzt ausschließlich als dieses Profil.
- **Schichtung:** Der Import *ohne* vorheriges Löschen **führt zusammen** - das importierte Profil, die Sitzungen und Bilder legen sich über das bereits Vorhandene, ersetzen alles mit demselben Namen und lassen den Rest unangetastet. Praktisch, um die gespeicherten Sitzungen eines Teams in Ihr eigenes Setup zu übernehmen; nicht das Richtige, wenn Sie eine saubere Rollentrennung brauchen.
- **Nebeneinander:** Da alles geräteweise gilt, führt ein separates Browserprofil, ein separates Benutzerkonto oder eine zweite installierte PWA jeweils sein eigenes, unabhängiges Lolly-Profil. Führen Sie Ihre persönliche Installation und die Event-Kiosk-Installation gleichzeitig aus, ohne zu wechseln.

> Bewahren Sie ein Bundle pro Kontext auf und benennen Sie die Dateien danach, was sie sind (`LollyTools-events-2026.zip`, `LollyTools-me.zip`). Die Datei *ist* das Profil.

## Ein Profil auf ein neues Gerät übertragen

Da ein Profil vollständig lokal ist, besteht die einzige Möglichkeit, es auf eine leere Installation zu bringen - einen neuen Laptop, einen frisch zurückgesetzten Browser, den Rechner eines Kollegen, eine Offline-Maschine - darin, **die Datei mitzunehmen**. Kein Login stellt es für Sie wieder her, und genau das ist der Punkt: Es hat Ihr Gerät von vornherein nie verlassen.

Unter **Profil → Speicher → Auf ein anderes Gerät verschieben**:

- **Meine Daten exportieren** lädt eine `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` herunter - benannt nach dem Profil, zu dem sie gehört, mit einer Sequenznummer pro Tag, damit wiederholte Exporte nicht kollidieren (Namensteile entfallen, wenn das Profil sie nicht hat). Sie enthält Ihr Profil, jede gespeicherte Sitzung (mit ihrem Vorschaubild), Ihre hochgeladenen Bilder und Ihre Einstellungen (Theme, Layout, lokale Aktivitätsstatistiken).
- **Daten importieren…** auf der anderen Installation liest diese Datei wieder ein, und Sie machen genau dort weiter, wo Sie aufgehört haben.

Das Bundle ist ein einfaches, in sich geschlossenes Zip, das daher auf **jedem** Weg reist - USB, AirDrop, eine Netzwerkfreigabe, E-Mail an sich selbst - und das Ziel kann vollständig offline sein. Jeder Teil ist mit einer Prüfsumme versehen, sodass eine beim Transport beschädigte Datei beim Import erkannt wird, statt halb kaputt wiederhergestellt zu werden. Der Import **führt zusammen** (gleichnamiges Profil/Sitzung/Bild wird überschrieben; alles andere bleibt erhalten), sodass ein bereits genutztes Ziel nie gelöscht wird.

Was nicht mitreist: der Katalog-Cache (er lädt sich auf dem neuen Gerät von selbst neu herunter) und die Tools selbst (es wird angenommen, dass sie bereits vorhanden sind).

Für das genaue Bundle-Layout, die Versionsrichtlinie und die Integritätsregeln siehe **[Datenübertragung](/info/data-transfer.html)**; für die durchgängige Anleitung siehe **[Lolly verwenden → Auf ein anderes Gerät wechseln](/info/using.html#moving-to-another-device)**.

## Wie Tools Ihr Profil nutzen

Ein Tool *füllt* stets nur die Profilfelder *vor*, für deren Bindung es ausdrücklich gebaut wurde:

**Explizite Bindung.** Ein Tool-Autor markiert eine Eingabe so, dass sie aus dem Profil bezogen wird (`bindToProfile: "firstname"`, `"email"`, `"headshot"`, …). Wenn das Tool geöffnet wird, füllt sich diese Eingabe aus Ihrem Profil vor - und Sie können sie für diese eine Sitzung trotzdem überschreiben, ohne das Profil zu ändern. Die Vorausfüllung ist eine lokale Annehmlichkeit und erfolgt unabhängig davon, ob **Meine Angaben verwenden** aktiviert ist.

**Der Opt-in (Herkunftsnachweis).** Beim Export eines Assets werden Ihre Angaben optional als **Herkunftsnachweis** (Provenance) mitgeführt - eine in die Metadaten der Datei eingebettete Autor-/Credit-Zeile (PNG, PDF, SVG, …) -, sodass ein fertiges Asset sagen kann, wer es erstellt hat. *Das* ist es, was **Meine Angaben verwenden** steuert: Lassen Sie es deaktiviert, trägt der Export weiterhin die Tool-/Plattform-Zuschreibung „Made with Lolly", aber es wird keine persönliche Autor-/Kontaktzeile eingebettet. (Derselbe Opt-in legt den Autor bei **/pro**-Batch-Läufen fest.) (Für Tool-Autoren: siehe [Tools erstellen → `bindToProfile`](/info/authoring-tools.html#bindtoprofile) und [Host API → `host.profile`](/info/host-api.html#host-profile).)

## Profil vs. Plattform vs. Fähigkeiten

Drei Dinge liegen in der Benutzeroberfläche nah beieinander und lassen sich leicht verwechseln:

- **Profil** - *Sie* (oder Ihr Team oder die Rolle, in der Sie sich befinden): Name, Kontakt, Porträtfoto, Ihre gespeicherte Arbeit. Persönlich, geräte-lokal, als Bundle portabel.
- **Plattform** - die *Marke*: Farben, Schriften und globale Einstellungen, gegen die jedes Tool rendert. Gemeinsam genutzt und konsistent, nicht persönlich.
- **Fähigkeiten** - *was die App kann*: der vollständige Funktionsumfang und die Ihnen zur Verfügung stehenden Tools.

Ein Profil ändert, *von wem* ein Asset stammt; die Plattform ändert, *wie* es aussieht; Fähigkeiten bestimmen, *was Sie erstellen können*.

## Datenschutz

Ein Profil wird niemals übertragen, hochgeladen oder dazu verwendet, Sie zu identifizieren oder zu verfolgen - es gibt nichts, dem Sie zustimmen müssten, nur diesen Hinweis, damit Sie wissen, was gespeichert wird. Löschen Sie alles jederzeit mit **Profil → Alle meine Daten löschen**. Siehe die [Datenschutzerklärung](/info/privacy.html).
