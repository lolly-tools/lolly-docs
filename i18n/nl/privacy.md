# Privacybeleid

*Laatst bijgewerkt: juni 2026*

## De Lolly-app

Lolly draait volledig in je browser. **We verzamelen niets, versturen niets en hebben geen servers die je gegevens te zien krijgen.** Er is geen analytics, geen tracking en geen enkele derde partij.

**Nergens cookies.** Lolly plaatst nooit een cookie. Om de app te laten werken, bewaart hij een kleine hoeveelheid gegevens **op je eigen apparaat**, allemaal strikt noodzakelijk voor een functie die je gebruikt:

- **Je licht/donker-thema** en een paar interfacevoorkeuren (breedte van de zijbalk, zoomniveau).
- **Een offline cache van de toolcatalogus**, zodat de galerij ook zonder verbinding blijft laden.
- **Alleen-lokale gebruikstellers** voor de kleine statistieken op je profielkaart — deze worden nooit ergens naartoe verstuurd.
- **Je eigen documenten en opgeslagen sessies**, lokaal opgeslagen in de browser (IndexedDB), zodat je werk bewaard blijft tussen bezoeken door.

Niets hiervan wordt gedeeld, geüpload of gebruikt om je te identificeren of te volgen, dus er is niets waarmee je hoeft in te stemmen — alleen deze kennisgeving, zodat je weet wat er wordt bewaard. Je kunt dit alles op elk moment wissen via **Profile → Clear all my data**, of door de opslag van de site in je browser te wissen.

Deze documentatiesite (`/info`) is nog lichter: hij plaatst **geen cookies**, bewaart alleen je licht/donker-voorkeur op je apparaat, en levert alles — inclusief lettertypen — vanaf lolly.tools zelf, zonder CDN of verzoeken naar derden.

## Utilities op je apparaat

Sommige tools zijn **utilities** die werken op een bestand dat *jij* aanlevert — bijvoorbeeld **Strip Hidden Data**, die de verborgen gegevens in een afbeelding of PDF laat zien (GPS-locatie, camera, auteur, editor en documentmetadata) en een schone kopie teruggeeft, of **Compress PDF**, die een PDF kleiner maakt door de afbeeldingen erin rechtstreeks op je apparaat opnieuw te coderen.

Deze draaien **volledig in je browser**. Het bestand dat je kiest, wordt op je apparaat in het geheugen ingelezen, lokaal bewerkt en als download teruggegeven. **Het wordt nooit geüpload** — er is geen server om het naartoe te uploaden. De opgeschoonde kopie bevat geen watermerk en geen eigen identificerende metadata van ons; het hele punt is om gegevens te *verwijderen*, niet toe te voegen. Er wordt niets bewaard nadat je de pagina verlaat, en deze utilities werken offline. Je ziet bij elk van deze een **"Runs on your device — nothing is uploaded"**-badge.

Dit is het tegenovergestelde van de typische "compress this PDF" / "convert this HEIC"-website, die je bestand naar de server van een vreemde uploadt om werk te doen dat je browser net zo goed lokaal kan doen.

## De browserextensie

De browserextensie **Lolly URL Screenshot** verzamelt, bewaart of verstuurt geen persoonlijke gegevens. Geen analytics, geen tracking, geen externe server.

## Wat hij doet

Wanneer je de Lolly-webapp ([lolly.tools](https://lolly.tools)) vraagt om een screenshot van een URL te maken, opent de extensie die pagina in een tijdelijk achtergrondtabblad, legt hem vast in je browser via het DevTools Protocol, geeft de afbeelding terug aan de app en sluit het tabblad. Alles gebeurt lokaal, op je eigen apparaat en netwerk.

## Gegevens

- **We verzamelen niets.** De extensie heeft geen servers en doet zelf geen netwerkverzoeken.
- **Vastgelegde afbeeldingen** gaan rechtstreeks naar de Lolly-app in dezelfde browser — nooit geüpload door de extensie.
- **De URL's die je vastlegt** worden alleen gebruikt om die ene pagina te laden voor die ene screenshot. Ze worden niet gelogd of gedeeld.

## Machtigingen

- **`debugger`** — om de weergegeven pagina vast te leggen via het DevTools Protocol (hetzelfde mechanisme dat de Lolly-desktopapp gebruikt).
- **Toegang tot tabbladen** — om het tijdelijke tabblad waarin de pagina laadt te openen en te sluiten.
- **Toegang tot hosts** — omdat de pagina die je kiest om vast te leggen op elke site kan staan.

Geen van deze wordt gebruikt om je surfgedrag te lezen, te monitoren of te versturen.

## Contact

Vragen? Kijk op [lolly.tools](https://lolly.tools).
