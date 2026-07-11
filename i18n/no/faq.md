# Ofte stilte spørsmål

Ofte stilte spørsmål som vises i trekkspillmenyen på landingssiden `/info`.

**Slik vedlikeholder du filen:** hver `##`-overskrift nedenfor er et spørsmål; alt under den
(fram til neste `##`) er svaret. Svarene bruker den samme lettvekts-markdownen som
resten av nettstedet — skill avsnitt med en tom linje. Legg til, fjern eller
endre rekkefølgen på spørsmålene her og kjør `npm run build:info` på nytt (eller `npm run dev:web`).
Alt over den første `##`-overskriften (denne tittelen og disse notatene) blir ignorert av byggeprosessen.

## Hva skjer når jeg velger å delta på /profile-siden?

Når du bruker Lolly for første gang, er alt du skriver, hvor som helst, helt privat helt til du bevisst ønsker at den informasjonen skal ut via media eller en delingslenke (hvis du er tilkoblet).

Når du har valgt å delta, bygger vi inn deler av profilinformasjonen din som opprinnelse i ressurser og pakker for å identifisere deg som kilden.

Lolly produserer store mengder innhold. Vi følger en streng dataminimeringstilnærming for å redusere risiko.

### Hva er funksjonsflagg?

Funksjonsflagg slår deler av Lolly av eller på. Vanligvis er det en administrator som styrer disse — med Lolly er det du som har kontrollen.

## Hvordan får jeg tak i mobil- eller skrivebordsappene?

Hvem som helst kan distribuere sine egne apper — verktøyene og konfigurasjonen av disse appene bør variere mye avhengig av hvilket publikum de er tiltenkt. Så det finnes ingen én app, med mindre du har laget den selv eller fått den av noen relevant.

## Hvorfor navnet «Lolly Tools»?

**Lolly** Fordi frihet er søtt.
**Tools** er inaktive når de ikke er i bruk. Spionerer ikke på deg, kjører ingen hemmelige programmer, 
Sett dem i arbeid, dine ordre, handlinger og vilkår.

**Lolly** er et australsk, newzealandsk og britisk uttrykk for «godteri» eller «slikkerier». Akkurat som lollies, er verktøy svært smakfulle for dem som trenger dem.

Vi ler også av tiden og regningene vi sparer med denne tilnærmingen.

## Hvilke hindringer kan jeg forvente ved innføring av Lolly?

Lolly passer inn overalt der du allerede genererer filer — CLI-en er samme motor
som appen, så en pipeline som kjøres klokken 02 om natten ikke kan avvike fra det en person forhåndsviser i en
nettleser. Friksjonen ved innføring er sjelden teknisk; den er organisatorisk. Forvent følgende:

**En kuratert merkevarekatalog må lages.** Lolly er en plattform, ikke en
ferdig pakke med dine maler. For en *styrt utrulling* definerer noen den delte
ressurskatalogen (logoer, paletter, skrifter som permanente ID-er) og skriver
manifest + mal for hver utdatatype. Enkeltpersoner trenger imidlertid ikke vente
på det — i den åpne appen kan hvem som helst importere sine egne filer til
katalogen og bygge verktøy i Layout Studio fra dag én.

**Styring via git er valgfritt — og ukjent for ikke-utviklere.** Hvis du drifter
en *delt, kontrollert* katalog, er «PR-gjennomgangen *er* moderasjonen» elegant
for utviklere, men ukjent for de fleste merkevare- og markedsføringsteam. Hvis de
som eier merkevarebeslutningene ikke lever i git, trenger du en arbeidsflyt som
bygger bro til dem — ellers blir IT i stillhet den strategiske designpartneren og
den bredere institusjonelle portvakten (foretrukket av mange i langvarige
produksjonsmiljøer). Team som ikke ønsker dette, hopper rett og slett over det.

**Det er bevisst smalt — omtal det slik.** Lolly er ikke for skreddersydd eller hero-
innhold. Det *er* din personlige DAM — hydrert og superladet av designsystemet,
verktøyene og katalogen din — og den *har* faktisk en åpen canvas (Layout Studio), men
selv der følger farger, typografi og ressurser de aktive designglobalene, slik at fri
utforming holder seg innenfor systemet. Vurdert mot Figma eller Canva vil den
virke begrenset. Vurdert for hva den faktisk er — operasjonalisert, tilbakevendende ressursgenerering
i massiv skala — er det ingenting som konkurrerer. Feil innramming er det vanligste tilbakeslaget.

**Endringsledelse på produksjonssiden.** Eksisterende prosesser fungerer i dag, selv om
resultatet ikke er merkevareriktig. Å peke dem om mot motoren innebærer ny testing, ny læring,
og «vi kan jo allerede lage filer» blir unnskyldningen for å ikke migrere. Start med å konvertere
ett produksjonsresultat med høy synlighet og vise før/etter side om side.

Lolly løfter alt.


## Hva skiller utilities fra verktøy?

**Enkelt svar →** Utilities trenger ikke alltid å rendre, og kan derfor få en annen UX. 

**Egentlig svar →** Grunnen til at utilities kan ligge inne i Lolly Tools, er for å legge til enda et «bekvemmelighetslag» med forsvar som demotiverer dataeksfiltrering. 

Hvorfor? Fordi det er kjent at folk hver dag tar **konfidensielt innhold de allerede har** og gir
det til et tilfeldig nettsted for å utføre én liten mekanisk handling:

- «**Komprimer denne PDF-en**» → laster opp en kontrakt / lønnsslipp / styrepresentasjon til ukjente aktører.
- «**konverter HEIC til JPG**» → laster opp personlige bilder (med GPS-EXIF) til en annonsefinansiert vert
- «**beskjær / endre størrelse på dette bildet**» → laster opp et produktskjermbilde eller en ikke-lansert ressurs
- «**formater denne JSON-en**» / «dekod denne JWT-en» → limer API-svar, tokener og hemmeligheter inn i en formaterer
- «**slå sammen disse PDF-ene**» → laster opp **to dokumenter som aldri burde dele server**

Disse nettstedene og deres enorme hale av kloner er **ikke pålitelige som standard**, med
ukjent lagringstid, ukjente jurisdiksjoner, ukjente underleverandører, og en
annonse-/affiliateforretningsmodell som har alle insentiver til å beholde det du gir dem. Operasjonen er
triviell; **innholdet er kostnaden.** 

Vi vinner kampen om styring med utmerket bekvemmelighet og service. 

## Kan Lolly redigere og rendre mine Figma-, Penpot-, Illustrator- eller InDesign-filer?

Ja. Åpne **Layout Studio** og klikk på **Importer en design**: det godtar en nativ Figma **.fig** (Save local copy), en Penpot **.penpot**-eksport, en Illustrator **.ai** eller **.pdf**, en InDesign **.idml** (File → Export → InDesign Markup), eller **hvilken som helst SVG** (den brede døren — nesten alle designprogrammer kan eksportere det). Alt tolkes fullstendig på din egen enhet, ingen konto eller plugin nødvendig.

Lag kommer inn som redigerbare bokser på den åpne canvasen: tekst forblir omskrivbar, former forblir former, bilder blir med i biblioteket ditt på enheten, og typografi og farger følger merkevarens globale verdier. Lagre den, så blir layouten en gjenbrukbar, URL-adresserbar mal som hvem som helst med Lolly kan fylle på nytt — og du kan blande inn levende verktøy (en QR-kode, et diagram) som rendres på nytt ved innlasting. Derfra rendres den som alt annet i Lolly — SVG, PDF, PNG og resten, reproduserbar fra URL-en sin. Se [Importer en design](/info/design-import.html).

## Hva skjer 29. august?

De SUSE-merkede verktøyene forlater prosjektet, og nye generiske eksempelverktøy definert av brukeren tar over.

SUSE vil drifte sin egen Lolly for å beskytte sine varemerker.

## Hvor mye holder SUSE privat? (aka når skjer rug-pullen)

SUSEs varemerker og merkede verktøy er kun til demonstrasjon, fram til 29. august. Du finner en umerket instans av Lolly på [lolly.ART](https://lolly.art).

SUSE er et selskap innen infrastruktur for åpen kildekode for bedrifter, med mer enn tre tiår med lederskap innen plattformer. Produktene inkluderer Linux, Cloud Native, Edge og AI-infrastrukturløsninger i bedriftsklasse.

Fra SUSEs perspektiv handler dette om å leve som man lærer når det gjelder suverenitet og sikkerhet. Per i dag er sannsynligheten for at SUSE gjør Lolly til et produkt, tilnærmet lik null.

Full åpenhet: SUSE *bygger* faktisk ut interne verktøy for å integrere Lolly i sine IT-systemer — det handler om SUSEs interne oppsett, ikke om offentlig kontra privat utvikling.

Når vi snakker om den offentlige siden: Lolly har som mål å bygges gjennom [Open Build Service](https://openbuildservice.org/), med sikre forsyningskjede-artefakter levert av [SUSE Application Collection](https://apps.rancher.io/applications).

Vi kommer til å bygge så mye vi kan i det åpne — du vil bare ikke se SUSE-merkede verktøy særlig lenge, og heller ikke SUSEs interne arbeidsstyrke og kommersielle prosesser, som er uavhengige av Lolly.

## Hvilken smak har den Lolly-logoen?

Noen sier Lime, andre sier Mint og noen ganger Eple — Lolly bidrar med sødmen, du skaper smaken!
