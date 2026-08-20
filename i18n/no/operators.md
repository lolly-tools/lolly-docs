# Lolly for driftsansvarlige

### En strategi for sikkerhet og etterretning i dybden - som tilfeldigvis også er en kreativ produksjonsplattform

Det nulltillit-organisatoriske immunsystemet som legger seg rundt det du allerede gjør - slik at det rutinemessige kreative arbeidet teamene dine trenger hver dag skjer *innenfor* perimeteren din i stedet for å lekke ut av den.

**Hva du får ut av det.** Du får være personen som sa ja til noe som er både trygt *og* populært. Du tetter et eksfiltreringshull, får kapabilitet og sletter en forespørselskø i ett trekk - den sjeldne sikkerhetsseieren som gjør deg mer likt, ikke mindre. Ingen telefon fra jurister klokken tre om natten fordi embargobelagte filer eller kundedata fant veien inn i et tilfeldig nettverktøy; færre SaaS-leverandører, kontrakter og revisjoner på fatet ditt; og et fullt reproduserbart revisjonsspor du kan vise til når noen spør. Du sover bedre, og lyser opp noen dager mens du gjør det.

Lolly er ikke noe annenrangs kreativt verktøy: det legger utdata av produksjonskvalitet i alles hender, og den merkevarestyrte skapelsesopplevelsen er uten sidestykke. Grunnen til at det er *trygt* å dele bredt er arkitektonisk: ingenting lastes opp som du ikke selv la der, hvert resultat er reproduserbart, og hver eksport kan bære flere lag med bransjeledende kryptografiske registreringer. Uansett hvordan et dokument havnet på pulten din, kan du se dets fulle proveniens, om det er blitt tuklet med, og om du kan gjenskape det pikselperfekt.

> **Hvor det står i dag.** Lollys sikkerhetsegenskaper er sterke av design, og kryptografi- og filtolkningsmotorene går gjennom SUSEs bedriftsklasse infrastrukturherding. Forseglingene, signeringen på enheten og krypteringen nedenfor er reelle og forsvarbare nå, og modnes mot uavhengig sertifisering - så der en kontrakt krever sertifisert forsikring, distribuer dem som forsvar i dybden mens den prosessen fullføres.

## Den strategiske fordelen

Den vanlige måten rutinemessig kreativt arbeid blir gjort på er en ansvarsflate: filer sendt på e-post til eksterne designkonsulenter, merkevareressurser lastet opp til et dusin SaaS-redigeringsverktøy, kundedata limt inn i en fremmeds nettverktøy for å "bare lage en rask grafikk." Hver eneste av disse er data som forlater din kontroll.

Lolly snur det på hodet. Arbeidet som *drev frem* disse lekkasjene - sitatkortet, den lokaliserte banneren, arrangementsmerket, det sladdede skjermbildet - skjer nå på et verktøy som kjører på den ansattes egen enhet, mot din merkevare, uten noen server i loopen. Du la ikke til en kontroll oppå en risikofylt arbeidsflyt; du erstattet den risikofylte arbeidsflyten med en som ikke har noen eksfiltreringsvei i utgangspunktet.

- **Konfigurasjonen er din.** Motoren og skallene er åpen kildekode (MPL-2.0). Legg på din egen autentisering, telemetri eller CA; host det eller ikke; du har full kontroll over funksjoner og kostnader, git-sporet, ikke låst inne i en SaaS-database.
- **Styring kan være data, ikke et dashbord.** Når du vil ha den kontrollen, forvalt verktøykatalogen som et Git-depot - PR-gjennomgang blir merkevaregodkjenning, med et fullt revisjonsspor og øyeblikkelig tilbakerulling av hver mal arbeidsstyrken din kan berøre. Det er et alternativ, ikke en plikt, og det havner på nøyaktig ett skrivebord: skapere jobber helt i appen, lagrer det de lager som en **økt** og gir den videre som en delingslenke, en sikkerhetskopi eller et direkte samarbeid - ingenting av dette krever git. Når en av de øktene fortjener å bli et permanent startpunkt, åpner den som drifter utrullingen lenken, registrerer verdiene som en **mal** på det verktøyet i merkevarepakken og committer. Fra da av vises den i verktøyets "New from template"-velger og kan lenkes direkte som `?template=<id>`. Git er administratorens låsesteg, brukt én gang, og aldri noe en skaper må røre. Se [Adoption & Governance](/info/adoption-governance.html).
- **Rekkverkene er strukturelle.** Merkevarebegrensninger er hardkodet inn i maler, ikke publisert som retningslinjer folk kan ignorere. Feil utdata blir ikke frarådet - det er umulig å representere.

> **Du styrer hele stafetten.** En kreatør forfatter reglene og en utvikler skalerer dem, men det er driftsansvarlig som gjør den livssyklusen trygg å kjøre i hele organisasjonen - det samme verktøyet som lar en representant betjene seg selv på et fly er ett du kan sperre gjennom Git-gjennomgang, distribuere gjennom din MDM og verifisere kryptografisk. Se hvordan rollene forsterker hverandre i [The lifecycle of a campaign](/info/overview.html#the-lifecycle-of-a-campaign), og hvordan du styrer det i [Adoption & Governance](/info/adoption-governance.html).

## Slett forespørselskøen mens innholdet mangfoldiggjøres.

Ett mål med Lolly er **avledning av designforespørsler**: rutineforespørsler som aldri trenger å nå en designer fordi personen som trengte ressursen laget den selv, korrekt, på minutter. Hver avledet sak er både en produktivitetsgevinst og én fil mindre som bytter hender.

Lolly er bygget for å passe måten organisasjonen din faktisk fungerer på - det finnes ingen eneste riktig måte å rulle det ut på:

- **Distribuer, ikke server.** Send Lolly til enheter gjennom din eksisterende MDM (Intune, Jamf, Munki…). Den kjører lokalt som en skrivebords-/mobilapp eller en frakoblet PWA - fungerer bak en hvilken som helst brannmur, i ethvert luftgapet miljø, uten server å vedlikeholde og med IT i kontroll over oppdateringstakten.
- **Bare server.** Kjør én instans i nettverket ditt (eller bak en VPN); brukere når den i en nettleser, ingenting installert. Publiser et verktøy én gang, alle har det umiddelbart; kombiner med din IdP for tilgangskontroll.
- **Hybrid.** Lokale apper for frakoblet feltarbeid, en alltid oppdatert nettleserversjon for lånte maskiner - begge pekt mot det samme verktøybiblioteket.

De fullstendige utrullingsmodellene og administrasjonsgjennomgangen finnes i [Deployment](/info/deployment.html) og [Configuration](/info/configuration.html).

## Verktøy mot eksfiltrering

En kategori Lolly-verktøy - personvernverktøyene - finnes *spesifikt* for å holde filer innenfor perimeteren.


- **Strip hidden data**
 Fjern posisjon og all skjult identifiserende informasjon fra dokumenter og mediefiler.

- **Text Helper**  
Anonymiser, kod, formater og bearbeid strukturert og ustrukturert tekst. 

- **Compress PDF**
Krymp en for stor PDF på enheten, slik at ingen tyr til en tredjeparts "komprimer PDF-en min"-nettside i det øyeblikket en fil er for stor til å sende på e-post - noe som er akkurat der data forsvinner ut av vinduet. 

Alle disse er transformasjoner på enheten: filen eller dataene dine går inn, rensede byte kommer ut, og **det finnes ingen server å laste opp til**. De er det bevisste motstykket til det typiske "last opp filen din til en fremmed nettside for å rense den"-verktøyet en velmenende ansatt ellers ville ha grepet til.

![Strip Hidden Data: filen havner på lerretet og merket sier rett ut at ingenting lastes opp](/t/url-shot?url=%2F%23%2Ftool%2Fstrip-data&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=aud-strip-data)

Text Helper er den samme avtalen for tekst i stedet for filer. Det er verktøybenken med faner en ansatt ellers ville ha lett etter på en fremmed side, og den oppgir ingen inndata i det hele tatt fordi ingenting den rører ved noensinne forlater siden.

![Text Helpers verktøybenk - en rekke med operasjonsfaner over et kort som sier at ingenting du limer inn forlater enheten din](/t/url-shot?url=%2F%23%2Ftool%2Ftext-helper&width=1200&height=750&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-content&dark=1&filename=ov2-text-helper)

Compress PDF fullfører settet: det for store vedlegget krymper under en kvalitetsinnstilling du velger, på maskinen som allerede har den.

![Compress PDF - et kvalitetsnivå og en gråtone-bryter til venstre, en slippsone for din egen PDF til høyre og ingen opplasting noe sted](/t/url-shot?url=%2F%23%2Ftool%2Fcompress-pdf&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=ov2-compress-pdf)

## Determinisme og reproduserbarhet

Hver verktøyinndata kan uttrykkes som en URL-parameter, og de samme inndataene gir alltid samme fil. Det har to konsekvenser for driftsansvarlige:

- **URL-en er selve gjenstanden.** Commit lenken, regenerer ressursen ved behov - ingen binærfiler sjekket inn i Git, ingen jag etter "siste versjon" i chat. Ressurs- og verktøy-ID-er er permanente kontrakter, så en lenke som lages i dag kan fortsatt løses opp senere.
- **CLI-en er samme rendrestasjon** som GUI-et, så byggepipeliner og appen aldri kommer i utakt. Generer OG-bilder, sosiale kort og datavisualiseringer ved byggetidspunktet, reproduserbart.

Prompt to Image er determinisme i sin reneste form: teksten er hele inndataen, det typesatte bildet er hele resultatet, og samme tekst setter alltid opp likt.

![Prompt to Image - en blokk med prompt-tekst typesatt til et kvadratisk bilde, uten noe i resultatet som ikke fantes i inndataen](/t/url-shot?url=%2F%23%2Ftool%2Fprompt-to-image%3Ffull&width=1440&height=900&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-prompt-to-image)

## Proveniens og Content Credentials

![Slippsonen i Verify godtar enhver fil, fra enhver kilde, og leser den uten et nettverkskall](/t/url-shot?url=%2F%23%2Fverify&width=1440&height=900&dpi=192&waitMs=1800&waitSelector=.valid-drop&cropSelector=.valid-drop&format=svg&walker=1&dark=1&filename=aud-verify-drop)

Eksporter kan bære **Content Credentials** - et signert [C2PA](https://c2pa.org)-manifest bundet til en hash av filens byte. Enhver senere endring av filen bryter seglet, så en C2PA-bevisst verifikator **oppdager endring kryptografisk, offline**. Legitimasjonen er manipuleringssynlig, ikke manipuleringssikker: den flagger tukling i stedet for å hindre den, noe som er nøyaktig det som gjør fullstendig offline verifisering mulig.

- **På som standard, på enheten.** Signeringsnøkkelen genereres på enheten, er ikke-uttrekkbar (selv Lolly kan ikke lese den), og signering skjer lokalt - bare valgfri identitets*innmelding* rører nettverket noensinne.
- **Tillitsnivåer.** En ikke-innmeldt eksport er velformet, men signert anonymt (`untrusted`). Meld inn en **verifisert identitet** (kortlevd sertifikat fra Lolly CA, knyttet til en e-post), og verifikatorer som pinner Lolly-roten rapporterer `trusted` + signørens e-post. En tiltrodd tidsstempeltjeneste og et tredjeparts-validator-grønt (C2PA-samsvar) står på veikartet. Hvert nivå er eksplisitt, og en fil hevder aldri mer tillit enn den kan bevise.
- **Legitimasjonens levetid** er operatørens/brukerens valg ved signering: 7 / 30 / 90 / 365 dager, standard 30.
- **Lolly Imprint.** Et andre, utfyllende signal som er **på som standard**: et usynlig pikselvannmerke bakt inn i rasterbaserte eksporter (og de Lolly-rendrede rasterbildene inne i en PDF/PPTX, aldri et brukerens eget innebygde bilde). Der legitimasjonen dør ved enhver containerendring, overlever Imprint en ny lagring eller et skjermbilde - et varig "disse pikslene gikk gjennom Lolly"-hint, kun tilstedeværelse, ingen personopplysninger. Det er sikkerhet gjennom uklarhet, ikke et herdet forsvar, og utfyller legitimasjonen i stedet for å erstatte den. `imprint=0` reserverer seg mot det.
- **Varige Content Credentials (valgfritt).** En rasterbasert eksport kan i tillegg bære et usynlig *varig* merke som koder en myk bindings-identifikator, slik at C2PA-legitimasjonen kan gjenopprettes selv etter at en opplasting til sosiale medier eller en ny lagring har fjernet filens metadata - tilfellet der en vanlig legitimasjon ellers ville gått tapt. Det er kun for raster og koster en nevral kodingsrunde, så det er av som standard (`durable=1` for å slå det på). Lolly gjenkjenner sitt eget varige merke offline på `/verify` i dag; gjenoppretting fra tredjepartsverktøy (f.eks. Adobe) følger etter når bransjens myke bindingsløsning er på plass.
- **Verifisering skjer på enheten.** Slipp en hvilken som helst fil på `/verify` (eller `lolly validate <file>`) for en offline rapport om filen virkelig er laget med Lolly og uendret siden. Verify-visningen på nett flagger også AI-generert innhold, oppdager Lolly Imprint, verifiserer **SEAL**-signaturer (en signatur på byte-nivå - uten nettverkskall: motoren tar en *injisert* DNS-nøkkelløser, og ingen skall injiserer en i dag, så en post som bærer sin egen innebygde `pk=`-nøkkel verifiseres fullt offline, mens en DNS-nøklet post rapporterer "ingen nøkkelløser og ingen innebygd nøkkel" i stedet for å ta kontakt - se `SealPublicKeyResolver` i `engine/src/seal.ts`), skanner valgfritt i dybden etter tredjeparts pikselvannmerker (en engangs modellnedlasting på enheten) og avdekker skjulte data - alt uten å laste opp filen. Se [Content Credentials Identity](/info/content-credentials-identity.html).

> **Merknader om interoperabilitet.** Lolly verifiserer sine egne legitimasjoner og mange tredjeparters offline i dag, inkludert lesing av C2PA claim **v2**-manifester fra andre produsenter. To containere gjenstår, begge fordi C2PA ennå ikke har noen standardisert kartlegging for dem, så Lolly bærer legitimasjonen på et eget sted, og Lollys verifikator er den som leser den tilbake: **WebM** (manifestet følger med som et Matroska-vedlegg) og **Ogg/Opus** (et `C2PA=`-felt i OpusTags-kommentaroverskriften, med det byteintervallet ekskludert fra bindingen slik at lyden fortsatt hasher identisk). Alt annet stempler etter spesifikasjonen - tredjepartsverktøy verifiserer Lollys MP4, M4A, MP3, WAV, PNG, JPEG og PDF rett ut av boksen. Se `engine/src/c2pa-containers.ts` for begge kartleggingene; de konvergerer mot standarden når den blir satt.

## Kryptering og passordbeskyttelse

For filer som må reise låst, skjer alt på enheten:

![Låskortet i eksportpanelet: et passord, og et eksplisitt valg mellom de to nivåene](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools%26format%3Dpdf%26password%3Ddemo%26options&width=1440&height=900&dpi=192&waitMs=2200&cropSelector=.export-pdfpass&walker=1&format=svg&dark=1&filename=aud-pdf-lock)

- **PDF-åpningspassord** - *Standard* er en 40-bit RC4-avskrekker (åpnes hvor som helst, kan reise i en lenke); *Strong* er **AES-256** (PDF 2.0), skrevet inn ved eksport og aldri lagt i en lenke.
- **Låste nedlastinger** - en ZIP, en Projects-mappe eller en batch-kjøring kan låses i sin helhet: *Standard* ZipCrypto (svak, universell) eller *Strong* **AES-256** (WinZip AE-2). Forsvar i dybden: enhver PDF inne i en Strong-zip er *også* individuelt AES-256-låst, så den forblir låst etter utpakking.
- **Passordbeskyttede delingslenker** - hele lenketilstanden er AES-256-kryptert under en PBKDF2-utledet nøkkel; kun kryptotekst reiser, passordet er aldri i lenken, og dekryptering skjer i mottakerens nettleser.

## Klar for luftgap

Luftgap er en **førsteklasses distribusjon**, ikke en spesialmodus - Lolly kjører uten nettverk ved rendretidspunktet ut av boksen. Nettskallet er en offline-first PWA (service worker); fonter og WASM lagres på enheten; verktøytilstand lagres lokalt gjennom vertsbroen, aldri `localStorage`. Den støttede måten for et verktøy å nå nettverket på er en **tillatelseslistet** `host.net`-kapasitet det oppgir i manifestet - et skall som ikke kan (eller vil) oppfylle det, stubber det ut. Det er en portabilitetskontrakt heller enn en håndhevet grense (se merknaden om hooks nedenfor), som er hvorfor gjennomgang av verktøykode fortsatt er kontrollen - selv om det på en luftgappet enhet uansett ikke finnes noe å nå. Send skallene til enheter gjennom MDM-en din, eller server én instans inne i nettverket ditt, og en fullstendig luftgappet installasjon rendrer, eksporterer, krypterer og verifiserer legitimasjoner uten noe å ringe hjem til.

## Greit å vite

Noen ting som er verdt å ha klart før du ruller det ut:

- **Herding pågår.** Kryptografien og parserne går gjennom SUSEs herding i bedriftsskala (se over) - sterkt av design i dag; distribuer som forsvar i dybden der en kontrakt krever sertifisert forsikring.
- **Verktøy-hooks er *ikke* et sikkerhetssandkasse.** Et verktøys valgfrie `hooks.js` kjører med vertsbroen injisert, men i et nettleserskall kjører det i sidens realm og *kan* nå `window`/`document`/`fetch`. Behandle verktøykode slik du behandler all kode du kjører - gjennomgå den. Dette er hvorfor en organisasjon som kjører en delt katalog kan sluse den gjennom Git-gjennomgang; uansett, kjør bare verktøy du har gjennomgått frem til Worker-isolasjon lanseres.
- **Content Credentials er manipuleringssynlige.** De oppdager endring i stedet for å hindre den - se merknadene om interoperabilitet over.
- **To krypteringsnivåer.** *Standard*-låser er raske, universelle avskrekkere; *Strong* (AES-256) er fullstendig beskyttelse - grip til Strong for alt sensitivt, og merk at det krever en moderne leser.

## Hvor du går videre

- **[Security & Verification](/info/security.html)** - standardene, primitivene, tillitsmodellen og testingen bak legitimasjonene og krypteringen over.
- **[Adoption & Governance](/info/adoption-governance.html)** - personaer, avvisningsmetrikken og governance-as-data i sin helhet.
- **[Deployment](/info/deployment.html)** - distribuer/server/hybrid, MDM og selvhosting av tjenestene.
- **[Configuration](/info/configuration.html)** - profiler, merkevarepakker, kapasitetsstyring og funksjonsbrytere.
- **[Privacy Policy](/info/privacy.html)** - den formelle erklæringen om hva som samles inn, lagres og sendes, og hva som ikke gjør det.
- **[Server Surface](/info/server-surface.html)** - den fullstendige oversikten over hva som kjører server-side (to valgfrie komponenter) versus på enheten.
