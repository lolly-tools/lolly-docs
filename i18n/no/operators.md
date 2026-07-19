# Lolly for operatører

### En sikkerhets- og etterretningsstrategi med forsvar i dybden - som tilfeldigvis også er en kreativ produksjonsplattform

Et nulltillitsbasert organisatorisk immunforsvar som omslutter det du allerede gjør - slik at det rutinemessige kreative arbeidet teamene dine trenger hver dag, skjer *innenfor* perimeteren din i stedet for å lekke ut av den.

**Hva du får ut av det.** Du får være personen som sa ja til noe som er både trygt *og* populært. Du tetter et eksfiltreringshull, vinner nye muligheter og sletter en forespørselskø i ett og samme grep - den sjeldne sikkerhetsgevinsten som gjør deg mer likt, ikke mindre. Ingen telefon fra juridisk klokken tre om natten fordi embargobelagte filer eller kundedata havnet i et tilfeldig webverktøy; færre SaaS-leverandører, avtaler og revisjoner å holde styr på; og et fullt reproduserbart revisjonsspor du kan peke på når noen spør. Du sover bedre, og lyser opp noen dager på kjøpet.

Lolly er ikke noe annenrangs kreativt verktøy: det legger resultater i produksjonskvalitet i hendene på alle, og den merkevarestyrte skapelsesopplevelsen er uten sidestykke. Grunnen til at det er *trygt* å dele ut bredt, er arkitektonisk: ingenting lastes opp som du ikke selv la der, hvert resultat er reproduserbart, og hver eksport kan bære flere lag med bransjeledende kryptografiske registreringer. Uansett hvordan et dokument havnet på pulten din, kan du se dets fullstendige opprinnelse, om det har blitt manipulert, og om du kan gjenskape det pikselperfekt.

> **Der det står i dag.** Lollys sikkerhetsegenskaper er sterke av design, og kryptografi- og filtolkningsmotorene gjennomgår for tiden SUSEs strenge infrastrukturherding for virksomhetsskala. Forseglingene, signeringen på enheten og krypteringen under er reelle og forsvarlige nå, og modnes mot uavhengig sertifisering - så der en avtale krever sertifisert forsikring, bør de brukes som forsvar i dybden mens den prosessen fullføres.

## Det strategiske fortrinnet

Den vanlige måten rutinemessig kreativt arbeid blir gjort på, er en risikoflate: filer sendt på e-post til eksterne designleverandører, merkevareressurser lastet opp til et dusin SaaS-redigeringsverktøy, kundedata limt inn i en fremmeds webverktøy for å «bare lage en rask grafikk». Hver eneste av disse er data som forlater din kontroll.

Lolly snur det på hodet. Arbeidet som *drev* disse lekkasjene - sitatkortet, den lokaliserte banneren, arrangementsbrikken, det sladdede skjermbildet - skjer nå i et verktøy som kjører på den ansattes egen enhet, mot merkevaren din, uten noen server involvert. Du la ikke til en kontroll oppå en risikabel arbeidsflyt; du erstattet den risikable arbeidsflyten med én som ikke har noen eksfiltreringsvei i utgangspunktet.

- **Konfigurasjonen er din.** Motoren og skallene er åpen kildekode (MPL-2.0). Legg på din egen autentisering, telemetri eller CA; host det eller ikke; du har full kontroll over funksjoner og kostnader, git-sporet, ikke låst inne i en SaaS-database.
- **Styring kan være data, ikke et dashbord.** Når du vil ha den kontrollen, forvalter du verktøykatalogen som et Git-repositorium - gjennomgang via pull request blir merkevaregodkjenning, med et fullstendig revisjonsspor og umiddelbar tilbakerulling av hver eneste mal arbeidsstyrken din kan røre. Det er et valg, ikke en plikt: team som bare vil lage ting, forfatter sine egne verktøy i Layout Studio og importerer sine egne filer inn i katalogen, helt i appen, uten noen gang å røre git. Se [Innføring og styring](/info/adoption-governance.html).
- **Rekkverket er strukturelt.** Merkevarebegrensninger er hardkodet inn i malene, ikke publisert som retningslinjer folk kan ignorere. Feil resultat blir ikke frarådet - det er umulig å fremstille.

## Slett forespørselskøen mens innholdet mangfoldiggjøres.

Ett mål med Lolly er **avledning av designforespørsler**: rutineforespørsler som aldri trenger å nå en designer fordi personen som trengte ressursen, laget den selv, korrekt, på minutter. Hver avledet sak er både en produktivitetsgevinst og én fil mindre som bytter hender.

Lolly er bygget for å passe hvordan organisasjonen din faktisk fungerer - det finnes ingen enkelt riktig måte å driftsette det på:

- **Driftsett, ikke server.** Send Lolly ut til enheter via din eksisterende MDM (Intune, Jamf, Munki…). Det kjører lokalt som en desktop-/mobilapp eller en offline-PWA - fungerer bak enhver brannmur, i ethvert luftgapet miljø, uten server å vedlikeholde og med IT i kontroll over oppdateringstakten.
- **Kun servering.** Kjør én instans inne i nettverket ditt (eller bak en VPN); brukere når den i en nettleser, ingenting installeres. Publiser et verktøy én gang, så har alle det umiddelbart; koble sammen med IdP-en din for tilgangskontroll.
- **Hybrid.** Lokale apper for offline feltarbeid, en alltid oppdatert nettleserversjon for lånte maskiner - begge pekt mot det samme verktøybiblioteket.

Den fullstendige gjennomgangen av driftsettingsmodeller og administrasjon finner du i [Driftsetting](/info/deployment.html) og [Konfigurasjon](/info/configuration.html).

## Verktøy mot eksfiltrering

En kategori Lolly-verktøy - personvernverktøyene - finnes *spesifikt* for å holde filer innenfor perimeteren.

- **Strip hidden data**
  Fjerner posisjon og all skjult identifiserende informasjon fra dokumenter og mediefiler.

- **Text Helper**
  Anonymiser, kod, formater og bearbeid strukturert og ustrukturert tekst.

- **Compress PDF**
  Krymper en for stor PDF på enheten, slik at ingen griper til et tredjeparts «komprimer PDF-en min»-nettsted i det øyeblikket en fil blir for stor til å sende på e-post - som er nøyaktig der data smetter ut vinduet.

Alle disse er transformasjoner på enheten: filen eller dataene dine går inn, rensede bytes kommer ut, og **det finnes ingen server å laste opp til**. De er den bevisste motsetningen til det typiske «last opp filen din til en fremmeds nettsted for å rense den»-verktøyet en velmenende ansatt ellers ville grepet til.

## Determinisme og reproduserbarhet

Hver verktøyinndata kan uttrykkes som en URL-parameter, og de samme inndataene produserer den samme filen. Det har to konsekvenser for operatøren:

- **En URL er artefakten.** Commit lenken, regenerer ressursen ved behov - ingen binærfiler sjekket inn i Git, ingen jag etter «siste versjon» i chatten. Ressurs- og verktøy-ID-er er permanente kontrakter, så en lenke laget i dag fortsatt løses opp senere.
- **CLI-en er den samme renderingsveien** som GUI-et, så byggepipeliner og appen aldri glir fra hverandre. Generer OG-bilder, sosiale kort og datavisualiseringer ved byggetidspunktet, reproduserbart.

## Opprinnelse og Content Credentials

Eksporter kan bære **Content Credentials** - et signert [C2PA](https://c2pa.org)-manifest bundet til en hash av filens bytes. Enhver senere endring av filen bryter forseglingen, så en C2PA-bevisst verifikator **oppdager endring kryptografisk, offline**. Legitimasjonen er manipulasjons-*synlig*: den flagger manipulasjon i stedet for å forhindre den, og det er nettopp det som gjør fullstendig offline-verifisering mulig.

- **På som standard, på enheten.** Signeringsnøkkelen genereres på enheten, kan ikke hentes ut (ikke engang Lolly kan lese den), og signeringen skjer lokalt - bare valgfri identitets*registrering* rører noensinne nettverket.
- **Tillitsnivåer.** En ikke-registrert eksport er strukturelt gyldig, men signert anonymt (`untrusted`). Registrer en **verifisert identitet** (kortlevd sertifikat fra Lolly CA, koblet til en e-postadresse), så rapporterer verifikatorer som pinner Lolly-roten `trusted` + signererens e-postadresse. En betrodd tidsstempelmyndighet og et grønt lys fra tredjeparts validator (C2PA-samsvar) står på veikartet. Hvert nivå er eksplisitt, og en fil hevder aldri mer tillit enn den kan bevise.
- **Legitimasjonens levetid** er operatørens/brukerens valg ved signeringstidspunktet: 7 / 30 / 90 / 365 dager, standard 30.
- **Lolly Imprint.** Et andre, utfyllende signal som er **på som standard**: et usynlig pikselvannmerke bakt inn i rastereksporter (og de Lolly-rendrede rasterbildene inni en PDF/PPTX, aldri et brukers eget innebygde bilde). Der legitimasjonen dør ved enhver endring i beholderen, overlever Imprint en ny lagring eller et skjermbilde - et varig «disse pikslene har vært gjennom Lolly»-hint, kun tilstedeværelse, ingen personopplysninger. Det er sikkerhet gjennom obskuritet, ikke et herdet forsvar, og utfyller legitimasjonen i stedet for å erstatte den. `imprint=0` slår det av.
- **Durable Content Credentials (valgfritt).** En rastereksport kan i tillegg bære et usynlig, *varig* merke som koder en soft-binding-identifikator, slik at C2PA-legitimasjonen kan gjenopprettes selv etter at en opplasting til sosiale medier eller en ny lagring har fjernet filens metadata - tilfellet der en vanlig legitimasjon ville gått tapt. Det gjelder kun raster og koster et nevralt kodingssteg, så det er av som standard (`durable=1` for å slå det på). Lolly gjenkjenner sitt eget varige merke offline på `/verify` i dag; gjenoppretting med tredjepartsverktøy (f.eks. Adobe) kommer når bransjens løsning for soft binding er på plass.
- **Verifisering skjer på enheten.** Slipp en hvilken som helst fil på `/verify` (eller `lolly validate <file>`) for en offline rapport om hvorvidt den virkelig ble laget med Lolly og er uendret siden. Verify-visningen på nett flagger også AI-generert innhold, oppdager Lolly Imprint, verifiserer **SEAL**-signaturer (en signatur på byte-nivå nøkkelforankret i DNS - det eneste nettverkstreffet er et DNS-nøkkeloppslag, aldri selve filen), kan valgfritt dypskanne etter tredjeparts pikselvannmerker (én engangs nedlasting av modell på enheten), og avdekker skjult data - alt uten å laste opp filen. Se [Content Credentials-identitet](/info/content-credentials-identity.html).

> **Merknader om interoperabilitet.** Lolly verifiserer sine egne legitimasjoner og mange tredjepartslegitimasjoner offline i dag, inkludert lesing av **v2**-manifester for C2PA-krav fra andre produsenter. Ett interop-punkt gjenstår: WebM - som ennå ikke har noen standardisert C2PA-kartlegging, så Lolly fester manifestet som en Matroska-del (tredjepartsverktøy verifiserer Lollys MP4 rett ut av boksen; WebM følger etter når standarden setter seg).

## Kryptering og passordbeskyttelse

For filer som må sendes låst, skjer alt på enheten:

- **PDF-åpningspassord** - *Standard* er en 40-bits RC4-avskrekking (åpnes hvor som helst, kan sendes i en lenke); *Sterk* er **AES-256** (PDF 2.0), tastet inn ved eksport og aldri lagt i en lenke.
- **Låste nedlastinger** - en ZIP, en Prosjekter-mappe eller en batch-kjøring kan låses i sin helhet: *Standard* ZipCrypto (svak, universell) eller *Sterk* **AES-256** (WinZip AE-2). Forsvar i dybden: enhver PDF inni en Sterk-zip er *også* individuelt AES-256-låst, slik at den forblir låst etter utpakking.
- **Passordbeskyttede delingslenker** - hele lenketilstanden er AES-256-kryptert under en PBKDF2-utledet nøkkel; bare chiffertekst sendes, passordet er aldri i lenken, og dekrypteringen skjer i mottakerens nettleser.

## Klar for luftgap

Luftgap er en **likeverdig driftsettingsmodell**, ikke en spesialmodus - Lolly kjører uten nettverk ved renderingstidspunktet, rett ut av boksen. Nettskallet er en offline-først PWA (service worker); fonter og WASM lagres på enheten; verktøytilstand lagres lokalt gjennom vertsbroen, aldri `localStorage`. Ethvert verktøy som når nettverket, gjør det bare gjennom en **tillatelseslistet** `host.net`-funksjon det må deklarere i manifestet sitt - et skall som ikke kan (eller vil) oppfylle det, stubber det ut. Send skallene ut til enheter via MDM-en din, eller server én instans inne i nettverket ditt, og en fullstendig luftgapet installasjon rendrer, eksporterer, krypterer og verifiserer legitimasjoner uten noe å ringe hjem til.

## Greit å vite

Noen ting det er verdt å ha klart for seg før du ruller det ut:

- **Herding pågår.** Kryptografien og tolkerne gjennomgår SUSEs strenge infrastrukturherding for virksomhetsskala (se over) - sterk av design i dag; bruk som forsvar i dybden der en avtale krever sertifisert forsikring.
- **Verktøyhooks er *ikke* en sikkerhetssandkasse.** Et verktøys valgfrie `hooks.js` kjører med vertsbroen injisert, men i et nettleserskall kjøres den i sidens realm og *kan* nå `window`/`document`/`fetch`. Behandle verktøykode slik du behandler all kode du kjører - gjennomgå den. Det er derfor en organisasjon som kjører en delt katalog, kan sperre den gjennom Git-gjennomgang; uansett, kjør bare verktøy du har gjennomgått, inntil Worker-isolasjon lanseres.
- **Content Credentials er manipulasjonssynlige.** De oppdager endring i stedet for å forhindre den - se interoperabilitetsmerknadene over.
- **To krypteringsnivåer.** *Standard*-låser er raske, universelle avskrekkinger; *Sterk* (AES-256) er full beskyttelse - grip til Sterk for alt som er sensitivt, men merk at det krever en moderne leser.

## Hvor du kan gå videre

- **[Innføring og styring](/info/adoption-governance.html)** - personaer, avledningsmetrikken og styring-som-data i sin helhet.
- **[Driftsetting](/info/deployment.html)** - driftsett/server/hybrid, MDM og selvhosting av tjenestene.
- **[Konfigurasjon](/info/configuration.html)** - profiler, merkevarepakker, funksjonssperring og funksjonsflagg.
- **[Personvernerklæring](/info/privacy.html)** - den formelle «samler ingenting, laster opp ingenting»-erklæringen.
