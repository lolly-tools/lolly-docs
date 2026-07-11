# Lolly for operatører

### En fremtidssikker strategi for forsvar i dybden, forebygging av datatap og opprinnelse – som tilfeldigvis også er en kreativ produksjonsplattform

Det organisatoriske immunforsvaret som omslutter det du allerede gjør — slik at det rutinemessige kreative arbeidet teamene dine trenger hver dag, skjer *innenfor* perimeteren din i stedet for å lekke ut av den.

**Hva du får ut av det.** Du får være personen som sa ja til noe som er både trygt *og* populært. Du tetter et eksfiltreringshull og sletter designforespørselskøen i ett og samme grep — den sjeldne sikkerhetsgevinsten som gjør deg mer likt, ikke mindre. Ingen telefon klokken tre om natten fordi noen har sendt merkevarefiler på e-post til en underleverandør eller limt inn kundedata i et tilfeldig webverktøy; færre SaaS-leverandører, avtaler og revisjoner å holde styr på; og et fullstendig git-spor du kan peke på når noen spør hvem som godkjente hva. Du sover godt om natten.

Lolly fortjener sin plass som et kreativt verktøy: det sletter designkøen og gir produksjonsklart resultat i hendene på alle. Men grunnen til at det er *trygt* å dele ut så bredt, er arkitektonisk. Ingenting lastes opp, alt er reproduserbart, og hver eksport kan bære en kryptografisk oversikt over hvor den kom fra. Denne siden er sikkerhets- og utrullingshistorien.

> **Der det står i dag.** Lollys sikkerhetsegenskaper er sterke av design, og kryptografi- og filtolkningsmotorene gjennomgår for tiden SUSEs strenge infrastrukturherding for virksomhetsskala. Forseglingene, signeringen på enheten og krypteringen under er reelle og forsvarlige nå, og modnes mot uavhengig sertifisering — så der en avtale krever sertifisert forsikring, bør de brukes som forsvar i dybden mens den prosessen fullføres.

## Det strategiske fortrinnet

Den vanlige måten rutinemessig kreativt arbeid blir gjort på, er en risikoflate: filer sendt på e-post til eksterne designleverandører, merkevareressurser lastet opp til et dusin SaaS-redigeringsverktøy, kundedata limt inn i en fremmeds webverktøy for å «bare lage en rask grafikk». Hver eneste av disse er data som forlater din kontroll.

Lolly snur det på hodet. Arbeidet som *drev* disse lekkasjene — sitatkortet, den lokaliserte banneren, arrangementsbrikken, det sladdede skjermbildet — skjer nå i et verktøy som kjører på den ansattes egen enhet, mot merkevaren din, uten noen server involvert. Du la ikke til en kontroll oppå en risikabel arbeidsflyt; du erstattet den risikable arbeidsflyten med én som ikke har noen eksfiltreringsvei i utgangspunktet.

- **Konfigurasjonen er din.** Motoren og skallene er åpen kildekode (MPL-2.0). Legg på din egen autentisering, telemetri eller CA; host det eller ikke; du har full kontroll over funksjoner og kostnader, git-sporet, ikke låst inne i en SaaS-database.
- **Styring er data, ikke et dashbord.** Verktøykatalogen er den autoritative kilden, forvaltet som et Git-repositorium — gjennomgang via pull request *er* moderasjonen, og du får et fullstendig revisjonsspor og umiddelbar tilbakerulling av hver eneste mal arbeidsstyrken din kan røre. Se [Innføring og styring](/info/adoption-governance.html).
- **Rekkverket er strukturelt.** Merkevarebegrensninger er hardkodet inn i malene, ikke publisert som retningslinjer folk kan ignorere. Feil resultat blir ikke frarådet — det er umulig å fremstille.

## Slett forespørselskøen mens innholdet mangfoldiggjøres.

Ett mål med Lolly er **avledning av designforespørsler**: rutineforespørsler som aldri trenger å nå en designer fordi personen som trengte ressursen, laget den selv, korrekt, på minutter. Hver avledet sak er både en produktivitetsgevinst og én fil mindre som bytter hender.

Lolly er bygget for å passe hvordan organisasjonen din faktisk fungerer — det finnes ingen enkelt riktig måte å driftsette det på:

- **Driftsett, ikke server.** Send Lolly ut til enheter via din eksisterende MDM (Intune, Jamf, Munki…). Det kjører lokalt som en desktop-/mobilapp eller en offline-PWA — fungerer bak enhver brannmur, i ethvert luftgapet miljø, uten server å vedlikeholde og med IT i kontroll over oppdateringstakten.
- **Kun servering.** Kjør én instans inne i nettverket ditt (eller bak en VPN); brukere når den i en nettleser, ingenting installeres. Publiser et verktøy én gang, så har alle det umiddelbart; koble sammen med IdP-en din for tilgangskontroll.
- **Hybrid.** Lokale apper for offline feltarbeid, en alltid oppdatert nettleserversjon for lånte maskiner — begge pekt mot det samme verktøybiblioteket.

Den fullstendige gjennomgangen av driftsettingsmodeller og administrasjon finner du i [Driftsetting](/info/deployment.html) og [Konfigurasjon](/info/configuration.html).

## Verktøy mot eksfiltrering

En kategori Lolly-verktøy finnes *spesifikt* for å holde filer innenfor perimeteren. Personvernverktøyene.


- **Strip hidden data**
 Fjerner posisjon og all skjult identifiserende informasjon fra dokumenter og mediefiler.

- **Text Helper**  
Anonymiser, kod, formater og bearbeid strukturert og ustrukturert tekst. 

- **Compress PDF**
Unngå enhver sjanse for en «e-postgrense-krise» der tredjeparts webverktøy lurer og data 

- **Compress PDF**
Unngå enhver sjanse for en «e-postgrense-krise» der tredjeparts webverktøy lurer og data forsvinner ut vinduet. 

Alle disse er transformasjoner på enheten: filen eller dataene dine går inn, rensede bytes kommer ut, og **det finnes ingen server å laste opp til**. De er den bevisste motsetningen til det typiske «last opp filen din til en fremmeds nettsted for å rense den»-verktøyet en velmenende ansatt ellers ville grepet til.


## Determinisme og reproduserbarhet

Hver verktøyinndata kan uttrykkes som en URL-parameter, og de samme inndataene produserer den samme filen. Det har to konsekvenser for operatøren:

- **En URL er artefakten.** Commit lenken, regenerer ressursen ved behov — ingen binærfiler sjekket inn i Git, ingen jag etter «siste versjon» i chatten. Ressurs- og verktøy-ID-er er permanente kontrakter, så en lenke laget i dag fortsatt løses opp senere.
- **CLI-en er den samme renderingsveien** som GUI-et, så byggepipeliner og appen aldri glir fra hverandre. Generer OG-bilder, sosiale kort og datavisualiseringer ved byggetidspunktet, reproduserbart.

## Opprinnelse og Content Credentials

Eksporter kan bære **Content Credentials** — et signert [C2PA](https://c2pa.org)-manifest bundet til en hash av filens bytes. Enhver senere endring av filen bryter forseglingen, så en C2PA-bevisst verifikator **oppdager endring kryptografisk, offline**. Legitimasjonen er manipulasjons-*synlig*: den flagger manipulasjon i stedet for å forhindre den, og det er nettopp det som gjør fullstendig offline-verifisering mulig.

- **På som standard, på enheten.** Signeringsnøkkelen genereres på enheten, kan ikke hentes ut (ikke engang Lolly kan lese den), og signeringen skjer lokalt — bare valgfri identitets*registrering* rører noensinne nettverket.
- **Tillitsnivåer.** En ikke-registrert eksport er strukturelt gyldig, men signert anonymt (`untrusted`). Registrer en **verifisert identitet** (kortlevd sertifikat fra Lolly CA, koblet til en e-postadresse), så rapporterer verifikatorer som pinner Lolly-roten `trusted` + signererens e-postadresse. En betrodd tidsstempelmyndighet og et grønt lys fra tredjeparts validator (C2PA-samsvar) står på veikartet. Hvert nivå er eksplisitt, og en fil hevder aldri mer tillit enn den kan bevise.
- **Legitimasjonens levetid** er operatørens/brukerens valg ved signeringstidspunktet: 7 / 30 / 90 / 365 dager, standard 30.
- **Verifisering skjer på enheten.** Slipp en hvilken som helst fil på `/valid` (eller `lolly validate <file>`) for en offline rapport om hvorvidt den virkelig ble laget med Lolly og er uendret siden. Se [Content Credentials-identitet](/info/content-credentials-identity.html).

> **Merknader om interoperabilitet.** Lolly verifiserer sine egne legitimasjoner og mange tredjepartslegitimasjoner offline i dag. To interop-punkter er under arbeid: å lese C2PA-krav av typen **v2** fullt ut fra andre produsenter, og WebM — som ennå ikke har noen standardisert C2PA-kartlegging, så Lolly fester manifestet som en Matroska-del (tredjepartsverktøy verifiserer Lollys MP4 rett ut av boksen; WebM følger etter når standarden setter seg).

## Kryptering og passordbeskyttelse

For filer som må sendes låst, skjer alt på enheten:

- **PDF-åpningspassord** — *Standard* er en 40-bits RC4-avskrekking (åpnes hvor som helst, kan sendes i en lenke); *Sterk* er **AES-256** (PDF 2.0), tastet inn ved eksport og aldri lagt i en lenke.
- **Låste nedlastinger** — en ZIP, en Prosjekter-mappe eller en batch-kjøring kan låses i sin helhet: *Standard* ZipCrypto (svak, universell) eller *Sterk* **AES-256** (WinZip AE-2). Forsvar i dybden: enhver PDF inni en Sterk-zip er *også* individuelt AES-256-låst, slik at den forblir låst etter utpakking.
- **Passordbeskyttede delingslenker** — hele lenketilstanden er AES-256-kryptert under en PBKDF2-utledet nøkkel; bare chiffertekst sendes, passordet er aldri i lenken, og dekrypteringen skjer i mottakerens nettleser.

## Klar for luftgap

Luftgap er en **likeverdig driftsettingsmodell**, ikke en spesialmodus — Lolly kjører uten nettverk ved renderingstidspunktet, rett ut av boksen. Nettskallet er en offline-først PWA (service worker); fonter og WASM lagres på enheten; verktøytilstand lagres lokalt gjennom vertsbroen, aldri `localStorage`. Ethvert verktøy som når nettverket, gjør det bare gjennom en **tillatelseslistet** `host.net`-funksjon det må deklarere i manifestet sitt — et skall som ikke kan (eller vil) oppfylle det, stubber det ut. Send skallene ut til enheter via MDM-en din, eller server én instans inne i nettverket ditt, og en fullstendig luftgapet installasjon rendrer, eksporterer, krypterer og verifiserer legitimasjoner uten noe å ringe hjem til.

## Greit å vite

Noen ting det er verdt å ha klart for seg før du ruller det ut:

- **Herding pågår.** Kryptografien og tolkerne gjennomgår SUSEs strenge infrastrukturherding for virksomhetsskala (se over) — sterk av design i dag; bruk som forsvar i dybden der en avtale krever sertifisert forsikring.
- **Verktøyhooks er *ikke* en sikkerhetssandkasse.** Et verktøys valgfrie `hooks.js` kjører med vertsbroen injisert, men i et nettleserskall kjøres den i sidens realm og *kan* nå `window`/`document`/`fetch`. Behandle verktøykode slik du behandler all kode du kjører — gjennomgå den. Det er nøyaktig hva katalog-som-Git-gjennomgang-modellen er til for; kjør bare verktøy du har gjennomgått, inntil Worker-isolasjon lanseres.
- **Content Credentials er manipulasjonssynlige.** De oppdager endring i stedet for å forhindre den — se interoperabilitetsmerknadene over.
- **To krypteringsnivåer.** *Standard*-låser er raske, universelle avskrekkinger; *Sterk* (AES-256) er full beskyttelse — grip til Sterk for alt som er sensitivt, men merk at det krever en moderne leser.

## Hvor du kan gå videre

- **[Innføring og styring](/info/adoption-governance.html)** — personaer, avledningsmetrikken og styring-som-data i sin helhet.
- **[Driftsetting](/info/deployment.html)** — driftsett/server/hybrid, MDM og selvhosting av tjenestene.
- **[Konfigurasjon](/info/configuration.html)** — profiler, merkevarepakker, funksjonssperring og funksjonsflagg.
- **[Personvernerklæring](/info/privacy.html)** — den formelle «samler ingenting, laster opp ingenting»-erklæringen.
