# Lolly voor beheerders

### Een defence-in-depth security- en intelligencestrategie - die toevallig ook een creatief productieplatform is

Het zero-trust organisatorische immuunsysteem dat om wat je al doet heen wordt gelegd - zodat het routinematige creatieve werk dat je teams elke dag nodig hebben *binnen* je perimeter gebeurt in plaats van eruit te lekken.

**Wat het jou oplevert.** Jij bent degene die ja zei tegen iets dat zowel veilig *als* populair is. Je dicht een exfiltratiegat, wint capaciteit en schrapt een aanvraagwachtrij in één beweging - de zeldzame security-overwinning die je populairder maakt, niet minder. Geen telefoontje om drie uur 's nachts van juridische zaken omdat embargobestanden of klantgegevens hun weg vonden naar een willekeurige webtool; minder SaaS-leveranciers, contracten en audits op je bord; en een volledig reproduceerbaar audittraject waar je naar kunt wijzen als iemand ernaar vraagt. Je slaapt beter, en maakt er onderweg een paar dagen prettiger van.

Lolly is geen tweederangs creatieve tool: het legt productiekwaliteit output in ieders handen, en de merkgestuurde creatie-ervaring is ongeëvenaard. De reden dat het *veilig* is om breed uit te delen zit in de architectuur: er wordt niets geüpload wat jij er niet zelf op zette, elk resultaat is reproduceerbaar en elke export kan meerdere lagen toonaangevende cryptografische registraties dragen. Ongeacht hoe een document jouw bureau bereikte, kun je de volledige herkomst zien, of ermee geknoeid is en of je het pixelperfect kunt reconstrueren.

> **Waar het vandaag staat.** De securityeigenschappen van Lolly zijn sterk door ontwerp, en de cryptografie- en bestandsparse-engines doorlopen SUSE's enterprise-grade infrastructuurverharding. De zegels, on-device ondertekening en versleuteling hieronder zijn nu al reëel en verdedigbaar, en groeien toe naar onafhankelijke certificering - dus waar een contract certificeerde zekerheid vereist, zet ze in als defence-in-depth terwijl dat proces zich voltrekt.

## Het strategische voordeel

De gebruikelijke manier waarop routinematig creatief werk gebeurt is een aansprakelijkheidsoppervlak: bestanden gemaild naar externe ontwerpcontractanten, merkassets geüpload naar een dozijn SaaS-editors, klantgegevens geplakt in de webtool van een vreemde om "even snel een grafiek te maken". Elk van die is data die je controle verlaat.

Lolly draait het om. Het werk dat die lekken *veroorzaakte* - de citaatkaart, de gelokaliseerde banner, het eventbadge, de geredigeerde schermafbeelding - gebeurt nu op een tool die draait op het eigen apparaat van de medewerker, tegen jouw merk, zonder server ertussen. Je voegde geen controle toe boven op een risicovolle workflow; je verving de risicovolle workflow door een die om te beginnen geen exfiltratiepad heeft.

- **Configuratie is van jou.** De engine en shells zijn open source (MPL-2.0). Overlay je eigen auth, telemetrie of CA; host het of niet; jij hebt volledige controle over functies en kosten, git-tracked, niet vastgezet in een SaaS-database.
- **Governance kan data zijn, geen dashboard.** Wanneer je die controle wilt, beheer je de tool-catalogus als een Git-repository - pull-request review wordt merkgoedkeuring, met een volledig audittrail en directe rollback van elk template dat jouw workforce kan aanraken. Het is een optie, geen verplichting, en het landt op precies één bureau: makers werken volledig in-app, slaan wat ze maken op als een **sessie** en geven het door als een deel-link, een back-up of een live samenwerking - niets daarvan vereist git. Wanneer zo'n sessie het verdient om een permanent startpunt te worden, opent degene die de implementatie beheert de link, legt de waarden vast als een **template** op die tool in het merkpakket en commit. Vanaf dat moment verschijnt het in de "Nieuw van template"-keuzelijst van de tool en is het deep-linkbaar als `?template=<id>`. Git is de vergrendelingsstap van de beheerder, eenmalig gebruikt, en nooit iets waar een maker mee te maken krijgt. Zie [Adoptie & Governance](/info/adoption-governance.html).
- **Guard-rails zijn structureel.** Merkbeperkingen zijn hard-coded in templates, niet gepubliceerd als richtlijnen die mensen kunnen negeren. De verkeerde output wordt niet afgeraden - ze is onvoorstelbaar.

> **Jij bestuurt de hele estafette.** Een creative stelt de regels op en een developer schaalt ze, maar het is de operator die die levenscyclus veilig maakt om organisatiebreed te draaien - dezelfde tool waarmee een vertegenwoordiger zichzelf kan bedienen in een vliegtuig, kun je afschermen via Git-review, uitrollen via jouw MDM en cryptografisch verifiëren. Zie hoe de rollen zich opstapelen in [De levenscyclus van een campagne](/info/overview.html#the-lifecycle-of-a-campaign), en hoe je het bestuurt in [Adoptie & Governance](/info/adoption-governance.html).

## Verwijder de aanvraagwachtrij terwijl je content laat toenemen.

Een doel van Lolly is **afbuiging van ontwerpaanvragen**: routineaanvragen die nooit een ontwerper hoeven te bereiken omdat de persoon die het asset nodig had, het zelf maakte, correct, in minuten. Elk afgebogen ticket is zowel een productiviteitswinst als één bestand minder dat van hand wisselt.

Lolly is gebouwd om te passen bij hoe jouw organisatie daadwerkelijk werkt - er is geen enkele juiste manier om het uit te rollen:

- **Uitrollen, niet serveren.** Verstuur Lolly naar apparaten via jouw bestaande MDM (Intune, Jamf, Munki…). Het draait lokaal als een desktop-/mobiele app of een offline PWA - werkt achter elke firewall, in elke air-gapped omgeving, zonder server om te onderhouden en met IT in controle over het update-tempo.
- **Alleen serveren.** Draai één instantie binnen jouw netwerk (of achter een VPN); gebruikers bereiken het in een browser, niets geïnstalleerd. Publiceer een tool één keer, iedereen heeft hem meteen; combineer met jouw IdP voor toegangscontrole.
- **Hybride.** Lokale apps voor offline veldwerk, een altijd actuele browserversie voor geleende machines - beide wijzen naar dezelfde toolbibliotheek.

De volledige implementatiemodellen en de beheerhandleiding staan in [Implementatie](/info/deployment.html) en [Configuratie](/info/configuration.html).

## Anti-exfiltratie hulpmiddelen

Een categorie Lolly-tools - de privacyhulpmiddelen - bestaat *specifiek* om bestanden binnen de perimeter te houden.


- **Verberg verborgen data**
 Verwijder locatie en alle verborgen identificerende informatie uit documenten en mediabestanden.

- **Text Helper**  
Anonimiseer, codeer, formatteer en bewerk gestructureerde en ongestructureerde tekst. 

- **Compress PDF**
Krimp een te grote PDF on-device, zodat niemand naar een website van derden voor "comprimeer mijn PDF" grijpt zodra een bestand te groot is om te e-mailen - precies de plek waar data naar buiten glipt. 

Dit zijn allemaal on-device transformaties: jouw bestand of data gaat erin, opgeschoonde bytes komen eruit en **er is geen server om naar te uploaden**. Ze zijn het bewuste tegenovergestelde van de typische "upload je bestand naar de website van een vreemde om het te reinigen"-tool waar een goedbedoelende medewerker anders naar grijpt.

![Strip Hidden Data: het bestand landt op het canvas en het label vermeldt duidelijk dat er niets wordt geüpload](/t/url-shot?url=%2F%23%2Ftool%2Fstrip-data&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=aud-strip-data)

Text Helper is dezelfde deal voor tekst in plaats van bestanden. Het is de werkbank met tabbladen die een medewerker anders op de site van een vreemde zou gaan zoeken, en hij geeft helemaal geen invoer op omdat niets wat hij aanraakt de pagina ooit verlaat.

![De werkbank van Text Helper - een rij bewerkingstabbladen boven een kaart die stelt dat niets wat je plakt jouw apparaat verlaat](/t/url-shot?url=%2F%23%2Ftool%2Ftext-helper&width=1200&height=750&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-content&dark=1&filename=ov2-text-helper)

Compress PDF maakt de set compleet: de te grote bijlage krimpt onder een kwaliteitsinstelling die jij kiest, op de machine die het al bezit.

![Compress PDF - een kwaliteitsniveau en een grijstinten-schakelaar links, een dropzone voor je eigen PDF rechts en nergens een upload](/t/url-shot?url=%2F%23%2Ftool%2Fcompress-pdf&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=ov2-compress-pdf)

## Determinisme & reproduceerbaarheid

Elke tool-invoer is uit te drukken als een URL-parameter, en dezelfde invoer produceert hetzelfde bestand. Dat heeft twee gevolgen voor de operator:

- **Een URL is het artefact.** Commit de link, genereer het asset on demand - geen binaries ingecheckt in Git, geen achtervolgen van "de laatste versie" in chat. Asset- en tool-ID's zijn permanente contracten, dus een link die vandaag wordt aangemaakt, resolveert later nog steeds.
- **De CLI is hetzelfde renderpad** als de GUI, dus buildpipelines en de app raken nooit uit elkaar. Genereer OG-afbeeldingen, social cards en datavisuals tijdens de build, reproduceerbaar.

Prompt to Image is determinisme op zijn eenvoudigst: de tekst is de hele invoer, de gezette afbeelding is de hele uitvoer en dezelfde tekst zet altijd op dezelfde manier.

![Prompt to Image - een blok prompttekst gezet in een vierkante afbeelding, zonder iets in het resultaat dat niet in de invoer zat](/t/url-shot?url=%2F%23%2Ftool%2Fprompt-to-image%3Ffull&width=1440&height=900&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-prompt-to-image)

## Herkomst & Content Credentials

![De Verify-dropzone accepteert elk bestand, van elke bron, en leest het zonder netwerkverzoek](/t/url-shot?url=%2F%23%2Fverify&width=1440&height=900&dpi=192&waitMs=1800&waitSelector=.valid-drop&cropSelector=.valid-drop&format=svg&walker=1&dark=1&filename=aud-verify-drop)

Exports kunnen **Content Credentials** dragen - een ondertekend [C2PA](https://c2pa.org)-manifest gebonden aan een hash van de bytes van het bestand. Elke latere wijziging aan het bestand verbreekt het zegel, dus een C2PA-bewuste verifier **detecteert manipulatie cryptografisch, offline**. De credential is tamper-*evident*: hij signaleert manipulatie in plaats van die te voorkomen, en precies dat maakt volledig offline verificatie mogelijk.

- **Standaard aan, on-device.** De ondertekeningssleutel wordt op het apparaat gegenereerd, is niet-extraheerbaar (zelfs Lolly kan hem niet lezen) en ondertekening gebeurt lokaal - alleen optionele identiteits*inschrijving* raakt ooit het netwerk.
- **Vertrouwensniveaus.** Een niet-ingeschreven export is welgevormd maar anoniem ondertekend (`untrusted`). Schrijf een **geverifieerde identiteit** in (kortlevend certificaat van de Lolly CA, gekoppeld aan een e-mailadres) en verifiers die de Lolly-root pinnen, melden `trusted` + het e-mailadres van de ondertekenaar. Een vertrouwde tijdstempelautoriteit en een groen vinkje van een externe validator (C2PA-conformiteit) staan op de roadmap. Elk niveau is expliciet, en een bestand claimt alleen het vertrouwen dat het kan bewijzen.
- **Levensduur van de credential** is de keuze van de operator/gebruiker bij het exporteren: 7 / 30 / 90 / 365 dagen, standaard 30.
- **De Lolly Imprint.** Een tweede, aanvullend signaal dat **standaard aan** staat: een onzichtbaar pixelwatermerk ingebakken in rasterexports (en de door Lolly gerenderde rasters binnen een PDF/PPTX, nooit een eigen ingesloten afbeelding van de gebruiker). Waar de credential sterft bij elke containerwijziging, overleeft de Imprint een hernieuwde opslag of screenshot - een duurzame "deze pixels zijn door Lolly gegaan"-hint, alleen aanwezigheid, geen persoonlijke gegevens. Het is security-through-obscurity, geen geharde verdediging, en vult de credential aan in plaats van die te vervangen. `imprint=0` schakelt het uit.
- **Duurzame Content Credentials (opt-in).** Een rasterexport kan bovendien een onzichtbaar *duurzaam* merkteken dragen dat een soft-binding-identifier codeert, zodat de C2PA-credential kan worden hersteld zelfs nadat een social upload of hernieuwde opslag de metadata van het bestand heeft gestript - het geval waarin een normale credential verloren zou gaan. Het is alleen-raster en kost een neurale encodeerpas, dus staat het standaard uit (`durable=1` om het aan te zetten). Lolly herkent zijn eigen duurzame merkteken vandaag al offline op `/verify`; herstel door tools van derden (bijv. Adobe) volgt zodra de branche-brede soft-binding-oplossing er is.
- **Verificatie is on-device.** Zet elk bestand op `/verify` (of `lolly validate <file>`) voor een offline rapport of het echt met Lolly is gemaakt en ongewijzigd sindsdien. De web Verify-weergave markeert ook AI-gegenereerde content, detecteert de Lolly Imprint, verifieert **SEAL**-handtekeningen (een handtekening op byteniveau - met nul netwerkverzoeken: de engine neemt een *geïnjecteerde* DNS-sleutelresolver en geen enkele shell injecteert er vandaag een, dus een record met zijn eigen inline `pk=`-sleutel verifieert volledig offline, terwijl een DNS-gekoppelde "geen sleutelresolver en geen inline sleutel" meldt in plaats van naar buiten te reiken - zie `SealPublicKeyResolver` in `engine/src/seal.ts`), scant optioneel diepgaand naar pixelwatermerken van derden (een eenmalige on-device modeldownload) en toont verborgen data - allemaal zonder het bestand te uploaden. Zie [Content Credentials Identity](/info/content-credentials-identity.html).

> **Interoperabiliteitsopmerkingen.** Lolly verifieert vandaag offline zijn eigen credentials en veel credentials van derden, inclusief het lezen van C2PA-claim **v2**-manifesten van andere producenten. Twee containers zijn nog in ontwikkeling, beide omdat C2PA er nog geen gestandaardiseerde mapping voor heeft, dus Lolly draagt de credential op een eigen plek en de verifier van Lolly is degene die hem terugleest: **WebM** (het manifest reist mee als een Matroska-bijlage) en **Ogg/Opus** (een `C2PA=`-veld in de OpusTags-commentaarheader, waarbij dat bytebereik is uitgesloten van de binding zodat de audio nog steeds identiek hasht). Al het andere volgt de spec - tools van derden verifiëren Lolly's MP4, M4A, MP3, WAV, PNG, JPEG en PDF kant-en-klaar. Zie `engine/src/c2pa-containers.ts` voor beide mappings; ze convergeren naar de standaard zodra die zich zet.

## Versleuteling & wachtwoorden

Voor bestanden die vergrendeld moeten reizen, gebeurt alles on-device:

![De vergrendelingskaart in het exportpaneel: een wachtwoord, en een expliciete keuze tussen de twee niveaus](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools%26format%3Dpdf%26password%3Ddemo%26options&width=1440&height=900&dpi=192&waitMs=2200&cropSelector=.export-pdfpass&walker=1&format=svg&dark=1&filename=aud-pdf-lock)

- **PDF-openingswachtwoord** - *Standaard* is een 40-bit RC4-afschrikking (opent overal, kan meereizen in een link); *Sterk* is **AES-256** (PDF 2.0), getypt bij export en nooit in een link geplaatst.
- **Vergrendelde downloads** - een ZIP, een Projects-map of een batchrun kan in zijn geheel worden vergrendeld: *Standaard* ZipCrypto (zwak, universeel) of *Sterk* **AES-256** (WinZip AE-2). Defence-in-depth: elke PDF binnen een Sterke zip is *ook* individueel AES-256-vergrendeld, dus blijft vergrendeld na uitpakken.
- **Met wachtwoord beveiligde deel-links** - de volledige linkstatus is AES-256-versleuteld onder een via PBKDF2 afgeleide sleutel; alleen ciphertext reist mee, het wachtwoord staat nooit in de link en ontsleuteling gebeurt in de browser van de ontvanger.

## Air-gap klaar

Air-gap is een **eersteklas implementatiemodel**, geen speciale modus - Lolly draait standaard zonder netwerk op renderingsmoment. De webshell is een offline-first PWA (service worker); fonts en WASM worden on-device opgeslagen; tool-status wordt lokaal bewaard via de host-bridge, nooit `localStorage`. De ondersteunde manier voor een tool om het netwerk te bereiken is een **allowlisted** `host.net`-capability die hij in zijn manifest declareert - een shell die dat niet kan (of wil) vervullen, stubt het weg. Dat is een portabiliteitscontract in plaats van een afgedwongen grens (zie de opmerking over hooks hieronder), wat waarom het reviewen van toolcode de controle blijft - hoewel er op een air-gapped apparaat sowieso niets is om te bereiken. Verstuur de shells naar apparaten via jouw MDM, of serveer één instantie binnen jouw netwerk, en een volledig air-gapped installatie rendert, exporteert, versleutelt en verifieert credentials zonder iets om naar huis te bellen.

## Goed om te weten

Een paar dingen die het waard zijn helder te hebben voordat je het uitrolt:

- **Hardening in uitvoering.** De cryptografie en parsers doorlopen SUSE's enterprise-schaal hardening (zie hierboven) - vandaag sterk by design; zet in als defence-in-depth waar een contract gecertificeerde zekerheid vereist.
- **Tool-hooks zijn *geen* security sandbox.** De optionele `hooks.js` van een tool draait met de host-bridge geïnjecteerd, maar in een browsershell voert hij uit in het realm van de pagina en *kan* `window`/`document`/`fetch` bereiken. Behandel toolcode zoals je elke code behandelt die je uitvoert - review hem. Dit is waarom een organisatie die een gedeelde catalogus draait, die kan afschermen via Git-review; hoe dan ook, draai alleen tools die je hebt gereviewd totdat Worker-isolatie verschijnt.
- **Content Credentials zijn tamper-evident.** Ze detecteren manipulatie in plaats van die te voorkomen - zie de interoperabiliteitsopmerkingen hierboven.
- **Twee versleutelingsniveaus.** *Standaard*-vergrendelingen zijn snelle, universele afschrikkingen; *Sterk* (AES-256) is volledige bescherming - grijp naar Sterk voor alles wat gevoelig is, met de kanttekening dat het een moderne reader vereist.

## Waar je hierna heen kunt

- **[Beveiliging & Verificatie](/info/security.html)** - de standaarden, primitieven, het vertrouwensmodel en de tests achter de credentials en versleuteling hierboven.
- **[Adoptie & Governance](/info/adoption-governance.html)** - persona's, de afbuigingsmetriek en governance-als-data in volle omvang.
- **[Implementatie](/info/deployment.html)** - deploy/serve/hybride, MDM en zelf de services hosten.
- **[Configuratie](/info/configuration.html)** - profielen, merkpakketten, capability gating en featureflags.
- **[Privacybeleid](/info/privacy.html)** - de formele verklaring over wat wel en niet wordt verzameld, opgeslagen en verzonden.
- **[Serveroppervlak](/info/server-surface.html)** - de volledige inventaris van wat server-side draait (twee optionele componenten) versus on-device.
