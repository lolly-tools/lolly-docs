# Datenschutzerklärung

*Zuletzt aktualisiert: Juni 2026*

## Die Lolly-App

Lolly läuft vollständig in Ihrem Browser. **Wir erfassen nichts, übertragen nichts und haben keine Server, die Ihre Daten sehen.** Es gibt keine Analyse, kein Tracking und keine Drittanbieter jeglicher Art.

**Keine Cookies - nirgendwo.** Lolly setzt niemals ein Cookie. Damit die App funktioniert, speichert sie eine kleine Menge an Daten **auf Ihrem eigenen Gerät**, wobei jede davon für eine von Ihnen genutzte Funktion unbedingt erforderlich ist:

- **Ihr Hell-/Dunkel-Design** und einige Oberflächeneinstellungen (Seitenleistenbreite, Zoom).
- **Ein Offline-Cache des Tool-Katalogs**, damit die Galerie auch ohne Verbindung geladen wird.
- **Rein lokale Nutzungszähler** für die kleinen Statistiken auf Ihrer Profilkarte - diese werden niemals irgendwohin gesendet.
- **Ihre eigenen Dokumente und gespeicherten Sitzungen**, lokal im Browser gespeichert (IndexedDB), damit Ihre Arbeit zwischen den Besuchen erhalten bleibt.

Nichts davon wird geteilt, hochgeladen oder verwendet, um Sie zu identifizieren oder zu verfolgen - es gibt daher nichts, dem Sie zustimmen müssten, sondern nur diesen Hinweis, damit Sie wissen, was gespeichert wird. Sie können all dies jederzeit über **Profil → Alle meine Daten löschen** entfernen, oder indem Sie den Speicher der Website in Ihrem Browser löschen.

Diese Dokumentations-Seite (`/info`) ist noch schlanker: Sie setzt **keine Cookies**, speichert auf Ihrem Gerät nur Ihre Hell-/Dunkel-Einstellung und liefert alles - einschließlich Schriftarten - direkt von lolly.tools selbst aus, ohne CDN- oder Drittanbieter-Anfragen.

## Utilities auf dem Gerät

Einige Tools sind **Utilities**, die mit einer Datei arbeiten, die *Sie* bereitstellen - zum Beispiel **Strip Hidden Data**, das die versteckten Daten in einem Bild oder PDF anzeigt (GPS-Standort, Kamera, Autor, Bearbeiter und Dokumentmetadaten) und eine bereinigte Kopie zurückgibt, oder **Compress PDF**, das ein PDF verkleinert, indem es dessen Bilder direkt auf Ihrem Gerät neu kodiert.

Diese laufen **vollständig in Ihrem Browser**. Die von Ihnen ausgewählte Datei wird auf Ihrem Gerät in den Speicher geladen, lokal verarbeitet und anschließend als Download angeboten. **Sie wird niemals hochgeladen** - es gibt keinen Server, zu dem sie hochgeladen werden könnte. Die bereinigte Kopie enthält kein Wasserzeichen und keine eigenen identifizierenden Metadaten; der ganze Sinn besteht darin, Daten zu *entfernen*, nicht hinzuzufügen. Nach dem Verlassen der Seite wird nichts gespeichert, und diese Utilities funktionieren offline. Bei jeder von ihnen sehen Sie ein **„Läuft auf Ihrem Gerät - nichts wird hochgeladen"**-Badge.

Das ist das Gegenteil der typischen „Diese PDF komprimieren" / „Dieses HEIC konvertieren"-Website, die Ihre Datei auf den Server eines Fremden hochlädt, um eine Arbeit zu erledigen, die Ihr Browser auch lokal ausführen kann.

## Die Browser-Erweiterung

Die Browser-Erweiterung **Lolly URL Screenshot** erfasst, speichert oder überträgt keine personenbezogenen Daten. Keine Analyse, kein Tracking, kein Remote-Server.

## Was sie tut

Wenn Sie die Lolly-Web-App ([lolly.tools](https://lolly.tools)) bitten, eine URL als Screenshot aufzunehmen, öffnet die Erweiterung diese Seite in einem temporären Hintergrund-Tab, erfasst sie in Ihrem Browser mithilfe des DevTools-Protokolls, gibt das Bild an die App zurück und schließt den Tab. Alles geschieht lokal, auf Ihrem eigenen Gerät und Netzwerk.

## Daten

- **Wir erfassen nichts.** Die Erweiterung hat keine eigenen Server und stellt keine eigenen Netzwerkanfragen.
- **Erfasste Bilder** gehen direkt an die Lolly-App im selben Browser - sie werden von der Erweiterung niemals hochgeladen.
- **Die von Ihnen erfassten URLs** werden nur verwendet, um diese eine Seite für diesen einen Screenshot zu laden. Sie werden weder protokolliert noch weitergegeben.

## Berechtigungen

- **`debugger`** - um die gerenderte Seite über das DevTools-Protokoll zu erfassen (derselbe Mechanismus, den die Lolly-Desktop-App verwendet).
- **Tab-Zugriff** - um den temporären Tab zu öffnen und zu schließen, in dem die Seite geladen wird.
- **Host-Zugriff** - da die Seite, die Sie erfassen möchten, auf einer beliebigen Website liegen kann.

Keine dieser Berechtigungen wird verwendet, um Ihr Surfverhalten zu lesen, zu überwachen oder zu übertragen.

## Kontakt

Fragen? Siehe [lolly.tools](https://lolly.tools).
