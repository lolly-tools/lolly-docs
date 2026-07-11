# Personvernerklæring

*Sist oppdatert: juni 2026*

## Lolly-appen

Lolly kjører helt i nettleseren din. **Vi samler ikke inn noe, sender ikke noe, og har ingen servere som ser dataene dine.** Det finnes ingen analyse, ingen sporing, og ingen tredjepart av noe slag.

**Ingen informasjonskapsler — noe sted.** Lolly setter aldri en informasjonskapsel. For at appen skal fungere, lagrer den en liten mengde data **på din egen enhet**, alt strengt nødvendig for en funksjon du bruker:

- **Ditt lyse/mørke tema** og noen få grensesnittinnstillinger (sidepanelbredde, zoom).
- **En offline-mellomlagring av verktøykatalogen**, slik at galleriet fortsatt lastes uten en tilkobling.
- **Kun lokale brukstellere** for de små statistikkene på profilkortet ditt — disse sendes aldri noe sted.
- **Dine egne dokumenter og lagrede økter**, lagret lokalt i nettleseren (IndexedDB) slik at arbeidet ditt bevares mellom besøk.

Ingenting av dette deles, lastes opp, eller brukes til å identifisere eller spore deg, så det er ingenting å samtykke til — bare denne merknaden, slik at du vet hva som lagres. Du kan slette alt sammen når som helst med **Profil → Slett alle mine data**, eller ved å tømme nettstedets lagring i nettleseren din.

Dette dokumentasjonsnettstedet (`/info`) er enda lettere: det setter **ingen informasjonskapsler**, lagrer bare din lys/mørk-innstilling på enheten din, og leverer alt — også skrifter — fra lolly.tools selv, uten CDN eller tredjeparts-forespørsler.

## Verktøy som kjører på enheten

Noen verktøy er **hjelpeverktøy** som jobber med en fil *du* leverer — for eksempel **Strip Hidden Data**, som viser de skjulte dataene i et bilde eller en PDF (GPS-posisjon, kamera, forfatter, redigerer og dokumentmetadata) og gir tilbake en ren kopi, eller **Compress PDF**, som krymper en PDF ved å kode om bildene direkte på enheten din.

Disse kjører **helt i nettleseren din**. Filen du velger, leses inn i minnet på enheten din, transformeres lokalt, og tilbys tilbake som en nedlasting. **Den lastes aldri opp** — det finnes ingen server å laste den opp til. Den rensede kopien har verken vannmerke eller noen av våre egne identifiserende metadata; hele poenget er å *fjerne* data, ikke legge til det. Ingenting lagres etter at du forlater siden, og disse verktøyene fungerer offline. Du vil se et **«Runs on your device — nothing is uploaded»**-merke på hvert av dem.

Dette er det motsatte av det typiske «komprimer denne PDF-en» / «konverter denne HEIC-en»-nettstedet, som laster opp filen din til en fremmed server for å gjøre arbeid nettleseren din kan gjøre lokalt.

## Nettleserutvidelsen

Nettleserutvidelsen **Lolly URL Screenshot** samler ikke inn, lagrer eller overfører noen personopplysninger. Ingen analyse, ingen sporing, ingen ekstern server.

## Hva den gjør

Når du ber Lolly-webappen ([lolly.tools](https://lolly.tools)) om å ta et skjermbilde av en URL, åpner utvidelsen den siden i en midlertidig bakgrunnsfane, fanger den i nettleseren din ved hjelp av DevTools Protocol, gir bildet tilbake til appen, og lukker fanen. Alt skjer lokalt, på din egen enhet og ditt eget nettverk.

## Data

- **Vi samler ikke inn noe.** Utvidelsen har ingen servere og gjør ingen egne nettverksforespørsler.
- **Fangede bilder** går rett til Lolly-appen i samme nettleser — lastes aldri opp av utvidelsen.
- **URL-ene du fanger** brukes bare til å laste den ene siden for det ene skjermbildet. De logges ikke og deles ikke.

## Tillatelser

- **`debugger`** — for å fange den rendrede siden via DevTools Protocol (samme mekanisme som Lolly-skrivebordsappen bruker).
- **Fanetilgang** — for å åpne og lukke den midlertidige fanen siden lastes i.
- **Verttilgang** — fordi siden du velger å fange, kan være på hvilket som helst nettsted.

Ingenting av dette brukes til å lese, overvåke eller overføre nettsurfingen din.

## Kontakt

Spørsmål? Se [lolly.tools](https://lolly.tools).
