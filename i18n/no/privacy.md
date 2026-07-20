# Personvernerklæring

*Sist oppdatert: 19. juli 2026*

> **Kort fortalt.** Dokumentene, bildene, videoene og filene du lager i Lolly blir
> værende på enheten din. Det finnes ingen kontoer for vanlig bruk, ingen
> informasjonskapsler fra selve appen, og ingen analyse eller sporingsverktøy noe
> sted i kildekoden - ikke "vi bruker ikke dataene", men rett og slett ikke til
> stede i kilden. Det finnes en kort og fullstendig liste over unntak der
> programvaren i det hele tatt snakker med et nettverk, og hvert eneste av dem er
> beskrevet i detalj nedenfor: hva som forlater enheten, til hvem og når. Det
> eneste unntaket som involverer noe personlig er en innlogging du selv må starte
> eksplisitt. Hvis det ikke står i dette dokumentet, skjer det ikke.

## Hva denne erklæringen dekker

Lolly er åpen kildekode-programvare - en motor, flere app-skall (web, skrivebord,
mobil, CLI) og en nettleserutvidelse - som hvem som helst kan kjøre. Denne
erklæringen har to deler:

- **Selve programvaren**: hva den gjør og ikke gjør med dataene dine, uansett hvor
  den kjører. Dette er en egenskap ved koden, så det gjelder enhver
  Lolly-installasjon, vår eller andres.
- **lolly.tools**, referanseinstallasjonen som SUSE driver: de konkrete valgene som
  er gjort ved kjøring av de valgfrie serversidedelene (hva som logges, hvor lenge,
  av hvem).

Hvis du bruker en selvhostet Lolly-instans eller en bedriftsinstans, gjelder
programvareoppførselen nedenfor fortsatt, men det er *operatøren* av den instansen -
ikke SUSE - som er ansvarlig for alt på serversiden: deres render-endepunkt, deres
MCP-server, deres sertifikatmyndighet for Content Credentials, hvis de driver en.
Be dem om deres egen erklæring; se [Innføring og styring](/info/adoption-governance.html)
for hva det innebærer å drive Lolly.

## Appen: hva som blir værende på enheten din

Lollys web-, skrivebords- og mobilskall kjører hele render-motoren på klientsiden.
Å åpne et verktøy, fylle inn data, forhåndsvise og eksportere skjer alt sammen på
enheten din - ingen server er involvert, og appen fungerer offline når den først er
lastet.

**Appen setter ingen informasjonskapsler.** For å fungere beholder den en liten
mengde data **bare på enheten din**, aldri overført:

- **Grensesnittinnstillinger** - tema, språk, lydinnstillinger, sidepanel-/zoomstørrelse,
  sorterings- og visningsvalg, hvilke innføringstips du har sett - i `localStorage`,
  slik at de er tilgjengelige før appen er ferdig oppstartet.
- **En offline-mellomlagring av verktøykatalogen og forhåndsvisninger av ressurser**,
  slik at galleriet fungerer uten tilkobling.
- **Lokale brukstellere** for statistikken på profilkortet ditt (hvor mange
  eksporter, hvilke verktøy) - en liten avgrenset blob i `localStorage`, aldri lest
  av oss, aldri sendt noe sted.
- **Dine egne dokumenter, lagrede økter, opplastede ressurser og skrifter** - lagret
  i IndexedDB på enheten din, aldri lastet opp, aldri lest av andre enn deg.

Ingenting av dette deles, selges, eller brukes til å identifisere eller spore deg.
Det er ingenting å samtykke til, fordi det ikke skjer noen innsamling - bare denne
merknaden, slik at du vet hva som beholdes og hvor. Slett alt sammen når som helst
med **Profil → Slett alle mine data**, eller ved å tømme nettstedets lagring i
nettleseren din. (Under ePrivacy-direktivet art. 5(3) krever lagring som er strengt
nødvendig for tjenesten du ba om, ikke samtykke - bare åpenhet, som er nettopp det
dette dokumentet og merknaden i appen begge er.)

Din egen sikkerhetskopi av disse dataene - `lolly-backup`-pakken som **Eksporter og
render alt** produserer - er en fil du beholder og kontrollerer. Den berører aldri
serverne våre med mindre du selv velger å sende den et sted. Se
[Dataoverføring](/info/data-transfer.html).

## Verktøy som kjører på enheten

Noen verktøy - **Strip Hidden Data**, **Compress PDF** og andre som bærer merket
**"Runs on your device"** - jobber med en fil du leverer. Filen leses inn i minnet i
nettleseren din, transformeres lokalt og tilbys tilbake som en nedlasting. Den
lastes aldri opp, fordi det ikke finnes noen server i banen å laste den opp til.
Disse hjelpeverktøyene fungerer offline, og utdataene deres bærer verken vannmerke
eller metadata fra oss - poenget med de fleste av dem er å fjerne og beskytte data,
ikke legge til risiko.

## Når appen snakker med et nettverk, i sin helhet

Tabellen nedenfor er den fullstendige listen over alt appen henter eller sender over
et nettverk. Hvis det ikke står her, gjør ikke appen det.

| Hva | Hva som faktisk forlater enheten din | Når |
|---|---|---|
| Synkronisering av verktøykatalogen | Ingenting personlig - en forespørsel om Lollys egen offentlige verktøy- og ressursindeks | Ved oppstart, deretter mellomlagret offline |
| Et verktøys deklarerte nettverkskapabilitet | Det den bestemte verktøyet ber om (f.eks. kartfliser) til de bestemte vertene den tillater i manifestet sitt | Bare mens du bruker det verktøyet |
| Google Fonts | Navnet på den valgte skriftfamilien og IP-adressen din, til Googles skriftservere | Bare hvis du legger til en Google Font i merkevareeditoren - en engangshenting per familie, deretter bor den på enheten din |
| SEAL-signatursjekk | Et enkelt DNS-oppslag etter en offentlig nøkkel, til domenet som er navngitt inni filen som sjekkes | Bare hvis Verify finner en SEAL-post i en fil du sjekker - aldri selve filen |
| Detektormodeller for dypskanning | Ingenting personlig - en engangs nedlasting av modellen fra samme opprinnelse (ikke en tredjepart) | Bare hvis du velger Verifys dypskanning |
| Ekstern instans | Det instansen du navngir sender tilbake, over den samme katalogsynkroniseringen beskrevet ovenfor | Bare hvis du eksplisitt peker skallet mot en annen Lolly-installasjon |

Ingen av disse sender dokumentene, prosjektene, øktene eller de opplastede filene
dine noe sted. De finnes for å hente ting *til* enheten din (verktøy, skrifter,
modeller, en offentlig nøkkel), aldri for å sende ting *fra* den, med de unntakene
som er navngitt eksplisitt i seksjonene nedenfor.

## Hot-linkede render-URL-er

Selve appen blir værende helt på enheten din. Separat, og bare hvis du bruker det,
svarer lolly.tools (og enhver selvhostet instans som lar det være aktivert) på
**hot-link render-URL-er** - `https://lolly.tools/tool/<tool-id>.<ext>?<inputs>` -
slik at en delt Lolly-lenke kan vises som et levende bilde i en README, en wiki
eller et dashbord. Å hente en av disse URL-ene ber serveren om å rendre **offentlig
verktøy- og katalogdata** med dataene skrevet inn i URL-en, og det er hele
utvekslingen:

- **Ingen kontoer, ingen informasjonskapsler, ingen tilstand.** Endepunktet er
  anonymt; ingenting lagres per forespørsel, og ingenting på enheten din leses.
  Dokumentene, øktene og opplastingene dine forlater aldri nettleseren din - de kan
  overhodet ikke dukke opp i disse lenkene.
- **Dataene er offentlige av natur** - de er hva enn lenkens forfatter skrev inn i
  URL-en, lesbare av alle lenken når frem til. Ikke legg hemmeligheter i en delt
  lenke, Lolly gjør en funksjon for lenkekryptering tilgjengelig for følsomt
  innhold.
- Svar er **mellomlagret og hastighetsbegrenset** som ethvert offentlig bilde, og
  merket `noindex` slik at søkemotorer ikke indekserer renderingene dine.

Selvhoster du Lolly og vil ikke ha en offentlig render-flate? Sett
`LOLLY_DISABLE_RENDER_GET=1`, og hver eneste av disse URL-ene returnerer 404.

## MCP-serveren (valgfri, for AI-agenter)

Lolly kan også nås av en AI-agent over Model Context Protocol - et operatørdrevet
endepunkt (lolly.tools driver ett; hvem som helst kan selvhoste sitt eget, inkludert
helt luftgappet). Den deler render-banens holdning uten kontoer, pluss to verktøy
som nødvendigvis håndterer filbytes:

- **`lolly_transform`** (kjør et hjelpeverktøy på enheten på serversiden, på vegne av
  den kallende agenten) og **`lolly_verify`** (sjekk Content Credentials) tar begge
  imot en fils bytes fra den som kaller. De behandles **i prosessen, i minnet**, og
  resultatet returneres i det samme kallet - filen skrives aldri til disk og lagres
  aldri når forespørselen er fullført.
- Alle andre verktøy - `lolly_render`, `lolly_build_url`, `lolly_list_tools`,
  `lolly_describe_tool` - jobber bare ut fra parametere (tekst, tall, farger, URL-er,
  katalogressurs-id-er), de samme dataene en hot-link render-URL tar imot.
- Tilgang er enten et delt token operatøren utsteder til klienter de stoler på,
  eller tilstandsløs OAuth 2.1: kortlevde signerte token verifisert mot en delt
  hemmelighet, ingenting lagret på serversiden, og selve tokenet skrives aldri til en
  logg eller en render-URL.

## Content Credentials-identitet (en innlogging du selv må starte)

Lolly kan forsegle en kryptografisk **Content Credential** inn i eksportene dine slik
at hvem som helst kan verifisere, offline, at en fil er uendret siden den forlot
Lolly. Så mye er **på som standard og helt lokalt** - signeringsnøkkelen genereres på
enheten din, er **ikke uttrekkbar** (ikke engang Lollys egen kode kan lese den), og
selve signeringen skjer offline. Denne seksjonen dekker det ene *valgfrie* trinnet
oppå det: å registrere en verifisert identitet, slik at eksportene dine sier
"Verified - signed by \<din e-post\>" i stedet for en anonym nøkkel. **Hvis du hopper
over registreringen, gjelder ingenting i denne seksjonen for deg, og ingen
personopplysninger forlater noen gang enheten din.**

Hvis du faktisk registrerer deg, er dette nøyaktig hva som skjer:

1. **Du velger en innloggingsmetode** - GitHub, Google, SUSE (Okta), eller en lenke
   sendt på e-post. For de tre OIDC-leverandørene blir du omdirigert til den
   leverandørens egen innloggingsside, styrt av deres personvernerklæring, ikke vår;
   Lollys sertifikattjeneste får bare tilbake en verifisert e-postadresse og
   leverandørens navn. For e-postlenken sendes adressen du skriver inn til **Resend**,
   et transaksjons-API for e-post, utelukkende for å levere den ene lenken.
2. **En kortlevd informasjonskapsel beskytter omdirigeringen.** Dette er den ene
   informasjonskapselen hele Lolly-systemet setter: `lolly_ca_state`, `HttpOnly`,
   avgrenset til `/api/ca`, som utløper innen ti minutter. Den bærer en tilfeldig
   verdi, ikke en sporingsidentifikator, og finnes bare for å hindre at
   OAuth-omdirigeringen forfalskes. Den tømmes så snart innloggingen er fullført.
3. **IP-adressen din brukes, kortvarig, for å hindre misbruk** av
   innloggingsendepunktene (slik at ett skript ikke kan spamme en innboks eller tømme
   e-postkvoten) - holdt bare i serverminnet, i et glidende vindu på omtrent et
   minutt, aldri skrevet til en logg eller lagret noe sted.
4. **Sertifikattjenesten utsteder et kortlevd sertifikat** (7, 30, 90 eller 365
   dager, ditt valg, begrenset av operatørens policy) som binder din verifiserte
   e-post til den offentlige halvdelen av nøkkelparet som ble generert på enheten din.
   Den private halvdelen forlater aldri nettleseren din.
5. **Utstedelsen logges**: e-postadressen din, leverandøren du brukte, en kort hash
   av sertifikatets serienummer og utløpsdatoen, skrevet til tjenestens driftslogger -
   og, bare hvis operatøren har konfigurert en, til en webhook de kontrollerer. Dette
   er det ene stedet en bit av personopplysningene dine beholdes på en server, og det
   finnes slik at et kompromittert eller feilutstedt sertifikat kan spores og slik at
   CA-ens egen utstedelse kan revideres.
6. **Etter det er signeringen offline igjen** i hele sertifikatets levetid. Å
   eksportere en fil kontakter aldri sertifikattjenesten - bare registreringen gjorde
   det.

For lolly.tools spesifikt: SUSE driver sertifikattjenesten og holder disse
utstedelsesloggene. Se [Dine rettigheter](#your-rights) nedenfor for hvordan du kan
spørre om eller fjerne en oppføring.

## Nettleserutvidelsen

Nettleserutvidelsen **Lolly URL Screenshot** samler ikke inn, lagrer eller overfører
noen personopplysninger. Ingen analyse, ingen sporing, ingen ekstern server.

**Hva den gjør.** Når du ber Lolly-webappen om å ta et skjermbilde av en URL, åpner
utvidelsen den siden i en midlertidig bakgrunnsfane, fanger den i nettleseren din ved
hjelp av DevTools Protocol, gir bildet tilbake til appen, og lukker fanen. Alt skjer
lokalt, på din egen enhet og ditt eget nettverk.

**Data.**

- **Vi samler ikke inn noe.** Utvidelsen har ingen servere og gjør ingen egne
  nettverksforespørsler.
- **Fangede bilder** går rett til Lolly-appen i samme nettleser - lastes aldri opp av
  utvidelsen.
- **URL-ene du fanger** brukes bare til å laste den ene siden for det ene
  skjermbildet. De logges ikke og deles ikke.

**Tillatelser.**

- **`debugger`** - for å fange den rendrede siden via DevTools Protocol (samme
  mekanisme som Lolly-skrivebordsappen bruker).
- **`tabs`** - for å åpne og lukke den midlertidige fanen siden lastes i.
- **Verttilgang (`<all_urls>`)** - fordi siden du velger å fange, kan være på hvilket
  som helst nettsted. Chrome viser dette ved installasjon som en bred
  tillatelsesadvarsel; utvidelsen besøker bare den URL-en du gir den.

Ingenting av dette brukes til å lese, overvåke eller overføre nettsurfingen din utover
den ene forespurte fangsten.

## Infrastrukturlogger

Som ethvert nettsted genererer serverne bak lolly.tools - og bak enhver
Lolly-installasjon - standard tilgangslogger for webserveren når en forespørsel i det
hele tatt når frem til dem: IP-adresse, forespurt sti, tidsstempel, brukeragent,
beholdt i et begrenset vindu for sikkerhet og misbruksforebygging. Det er
grunnleggende hosting-oppførsel, ikke noe Lolly legger til på toppen, og den
inneholder aldri innholdet i dokumentene dine, fordi disse aldri når en server til å
begynne med. Det ene bevisste unntaket er en fil du eksplisitt overleverer til et
MCP-`lolly_transform`- eller `lolly_verify`-kall, som behandles i minnet og aldri
skrives til disk eller en logg, som beskrevet ovenfor.

## Barns personvern

Lolly samler ikke bevisst inn personopplysninger fra noen, i noen alder, i vanlig bruk
av appen - det er ingenting å samle inn. Det ene stedet personopplysninger (en
e-postadresse) noen gang samles inn er registrering for Content Credentials, beskrevet
ovenfor, som ikke er rettet mot eller ment for barn.

## Dine rettigheter

Fordi nesten alt Lolly berører kun lagres på din egen enhet, er det meste av det
personvernlovgivningen kaller "dine rettigheter" - innsyn, korrigering, sletting,
portabilitet - ting du allerede kan gjøre selv, umiddelbart, uten å spørre noen:
dataene dine bor i nettleserens lagring, i en form du kan inspisere, eksportere
(**Eksporter og render alt**, ovenfor), eller slette (**Profil → Slett alle mine
data**).

For den ene biten personopplysninger som kan ende opp på en server - e-postadressen
din, hvis du registrerte deg for Content Credentials - kontakt oss (nedenfor) for å
spørre om hva vi holder eller for å få det fjernet fra aktive logger. Å fjerne en
loggoppføring opphever ikke et sertifikat som allerede er utstedt (det er kortlevd av
design og utløper ganske enkelt); det stopper den oppføringen fra å dukke opp i
fremtidige eksporter av loggen.

Vi selger ikke data. Vi har ingen å selge.

## Endringer i denne erklæringen

Datoen øverst endres hver gang dette dokumentet gjør det. En endring som endrer hva
som forlater enheten din eller hva som beholdes får sin egen linje her, ikke en stille
redigering - hvis du vil se hva som ble endret, spør (nedenfor) eller sammenlign mot
[den offentlige kilden](https://github.com/lolly-tools/lolly/commits/main/docs/privacy.md).

## Kontakt

Spørsmål, eller en forespørsel under "Dine rettigheter" ovenfor: **Andy Fitzsimon**,
[fitzy@suse.com](mailto:fitzy@suse.com). For en selvhostet Lolly-instans eller en
bedriftsinstans, kontakt den som driver den i stedet - SUSE og Lolly-åpenkildekodeprosjektet
holder ingen data for installasjoner det ikke driver.
