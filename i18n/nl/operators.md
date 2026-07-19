# Lolly voor operators

### Een security- en intelligencestrategie met defence-in-depth - die toevallig een creatief productieplatform is

Het organisatorische zero-trust-immuunsysteem dat zich om wat je al doet heen vouwt - zodat het routinematige creatieve werk dat je teams elke dag nodig hebben *binnen* je perimeter gebeurt in plaats van eruit te lekken.

**Wat het jou oplevert.** Jij bent degene die ja zei tegen iets dat zowel veilig *als* populair is. Je dicht een exfiltratielek, verwerft capaciteit en schrapt een verzoekenwachtrij in één beweging - die zeldzame securitywinst die je juist populairder maakt, niet minder. Geen telefoontje om 3 uur 's nachts van juridische zaken omdat bestanden onder embargo of klantgegevens hun weg vonden naar een willekeurige webtool; minder SaaS-leveranciers, contracten en audits op je bordje; en een volledig reproduceerbaar audittrail waar je naar kunt wijzen als iemand ernaar vraagt. Je slaapt beter, en fleurt er een paar dagen mee op.

Lolly is geen tweederangs creatieve tool: het legt output van productiekwaliteit in ieders handen, en de merkgestuurde creatie-ervaring is ongeëvenaard. De reden dat het *veilig* is om het breed uit te delen, zit in de architectuur: er wordt niets geüpload dat je er niet zelf in hebt gezet, elk resultaat is reproduceerbaar, en elke export kan meerdere lagen toonaangevende cryptografische records dragen. Ongeacht hoe een document op je bureau is beland, kun je de volledige herkomst zien, of het is gemanipuleerd, en of je het pixel-perfect kunt reproduceren.

> **Waar het vandaag staat.** De securityeigenschappen van Lolly zijn sterk *by design*, en de cryptografie- en file-parsing-engines ondergaan momenteel SUSE's enterprise-grade infrastructuur-hardening. De zegels, on-device signing en encryptie hieronder zijn nu reëel en verdedigbaar, en rijpen richting onafhankelijke certificering - dus waar een contract om gecertificeerde assurance vraagt, zet je ze in als defence-in-depth terwijl dat proces wordt afgerond.

## Het strategische voordeel

De gebruikelijke manier waarop routinematig creatief werk tot stand komt, is een aansprakelijkheidsoppervlak: bestanden gemaild naar externe ontwerpcontractors, merkbestanden geüpload naar tientallen SaaS-editors, klantgegevens geplakt in de webtool van een vreemde om "even snel een grafische afbeelding te maken." Elk van die dingen is data die je controle verlaat.

Lolly draait dit om. Het werk dat die lekken *veroorzaakte* - de quote card, de gelokaliseerde banner, het eventbadge, de geredigeerde screenshot - gebeurt nu op een tool die op het eigen apparaat van de medewerker draait, tegen jouw merk aan, zonder server ertussen. Je hebt geen control bovenop een risicovolle workflow gezet; je hebt de risicovolle workflow vervangen door een workflow die om te beginnen geen exfiltratiepad heeft.

- **Configuratie is van jou.** De engine en shells zijn open source (MPL-2.0). Leg je eigen auth, telemetrie of CA erover heen; host het zelf of niet; jij hebt volledige controle over features en kosten, git-tracked, niet vastgezet in een SaaS-database.
- **Governance kan data zijn, geen dashboard.** Als je die controle wilt, beheer je de toolcatalogus als een Git-repository - pull-request-review wordt merkgoedkeuring, met een volledig audittrail en directe rollback van elk template dat je personeel kan aanraken. Het is een optie, geen verplichting: teams die gewoon dingen willen maken, schrijven hun eigen tools in Layout Studio en halen hun eigen bestanden in de catalogus, volledig in-app, en raken git nooit aan. Zie [Adoptie & Governance](/info/adoption-governance.html).
- **Guardrails zijn structureel.** Merkbeperkingen zijn hard-coded in templates, niet gepubliceerd als richtlijnen die mensen kunnen negeren. De verkeerde output wordt niet afgeraden - hij is niet te representeren.

## Schrap de verzoekenwachtrij en laat content tegelijk groeien.

Eén doel van Lolly is **het afbuigen van ontwerpverzoeken** (design-request deflection): routineverzoeken die nooit bij een designer terecht hoeven te komen, omdat de persoon die het asset nodig had het zelf maakte, correct, in enkele minuten. Elk afgebogen ticket is zowel een productiviteitswinst als één bestand minder dat van hand wisselt.

Lolly is gebouwd om te passen bij hoe jouw organisatie daadwerkelijk werkt - er is niet één juiste manier om het uit te rollen:

- **Deploy, geen server.** Verspreid Lolly naar apparaten via je bestaande MDM (Intune, Jamf, Munki…). Het draait lokaal als desktop/mobiele app of offline PWA - werkt achter elke firewall, in elke air-gapped omgeving, zonder server om te onderhouden en met IT in controle over het updatetempo.
- **Alleen server.** Draai één instance binnen je netwerk (of achter een VPN); gebruikers bereiken het via een browser, niets geïnstalleerd. Publiceer een tool één keer, iedereen heeft hem meteen; koppel aan je IdP voor toegangscontrole.
- **Hybride.** Lokale apps voor offline veldwerk, een altijd actuele browserversie voor geleende machines - beide gericht op dezelfde toolbibliotheek.

De volledige uitrolmodellen en beheerwalkthrough vind je in [Uitrol](/info/deployment.html) en [Configuratie](/info/configuration.html).

## Anti-exfiltratiehulpprogramma's

Een categorie Lolly-tools - de privacyhulpprogramma's - bestaat *specifiek* om bestanden binnen de perimeter te houden.

- **Verborgen data verwijderen**
 Verwijder locatie en alle verborgen identificerende informatie uit documenten en mediabestanden.

- **Tekst Helper**  
Anonimiseer, codeer, formatteer en bewerk gestructureerde en ongestructureerde tekst. 

- **PDF comprimeren**
Comprimeer een te grote PDF on-device, zodat niemand grijpt naar de "comprimeer mijn pdf"-website van een derde partij zodra een bestand te groot is om te e-mailen - precies waar data het raam uit glipt. 

Dit zijn allemaal on-device transformaties: je bestand of data gaat erin, schone bytes komen eruit, en **er is geen server om naar te uploaden**. Ze zijn het bewuste tegenovergestelde van de typische tool "upload je bestand naar de website van een vreemde om het te reinigen" waar een goedbedoelende medewerker anders naar grijpt.

## Determinisme & reproduceerbaarheid

Elke tool-invoer is uit te drukken als URL-parameter, en dezelfde invoer produceert hetzelfde bestand. Dat heeft twee gevolgen voor operators:

- **Een URL is het artefact.** Commit de link, genereer het asset op aanvraag opnieuw - geen binaries ingecheckt in Git, geen achternajagen van "de laatste versie" in chat. Asset- en tool-ID's zijn permanente contracten, dus een link die vandaag wordt aangemaakt, blijft ook later oplosbaar.
- **De CLI is hetzelfde renderpad** als de GUI, dus build-pipelines en de app lopen nooit uit elkaar. Genereer OG-afbeeldingen, social cards en datavisuals tijdens build time, reproduceerbaar.

## Herkomst & Content Credentials

Exports kunnen **Content Credentials** dragen - een ondertekend [C2PA](https://c2pa.org)-manifest gebonden aan een hash van de bytes van het bestand. Elke latere wijziging aan het bestand verbreekt het zegel, dus een C2PA-bewuste verifier **detecteert wijzigingen cryptografisch, offline**. Het credential is manipulatie-*zichtbaar*: het signaleert manipulatie in plaats van het te voorkomen, en juist dat maakt volledig offline verificatie mogelijk.

- **Standaard aan, on-device.** De ondertekeningssleutel wordt op het apparaat gegenereerd, is niet-extraheerbaar (zelfs Lolly kan hem niet uitlezen), en ondertekenen gebeurt lokaal - alleen optionele identiteits*inschrijving* raakt ooit het netwerk.
- **Vertrouwensniveaus.** Een niet-ingeschreven export is structureel geldig maar anoniem ondertekend (`untrusted`). Schrijf een **geverifieerde identiteit** in (kortlevend certificaat van de Lolly CA, gekoppeld aan een e-mailadres) en verifiers die de Lolly-root pinnen, melden `trusted` + het e-mailadres van de ondertekenaar. Een trusted timestamp authority en groen van een externe validator (C2PA-conformiteit) staan op de roadmap. Elk niveau is expliciet, en een bestand claimt alleen ooit het vertrouwen dat het kan bewijzen.
- **Levensduur van het credential** is de keuze van de operator/gebruiker op het moment van ondertekenen: 7 / 30 / 90 / 365 dagen, standaard 30.
- **De Lolly Imprint.** Een tweede, aanvullend signaal dat **standaard aan** staat: een onzichtbaar pixelwatermerk dat wordt ingebakken in rasterexports (en de door Lolly gerenderde rasters binnen een PDF/PPTX, nooit de eigen ingesloten afbeelding van een gebruiker). Waar het credential sneuvelt bij elke wijziging van de container, overleeft de Imprint een herbewaring of screenshot - een duurzame hint van "deze pixels zijn door Lolly gegaan", alleen aanwezigheid, geen persoonsgegevens. Het is security-through-obscurity, geen geharde verdediging, en vult het credential aan in plaats van het te vervangen. `imprint=0` schakelt het uit.
- **Durable Content Credentials (opt-in).** Een rasterexport kan daarnaast een onzichtbaar *duurzaam* merkteken dragen dat een soft-binding-identifier codeert, zodat het C2PA-credential kan worden hersteld zelfs nadat een upload naar social media of een herbewaring de metadata van het bestand heeft gestript - precies het geval waarin een normaal credential verloren zou gaan. Het werkt alleen op rasters en kost een neurale encodeerpas, dus staat het standaard uit (`durable=1` om het aan te zetten). Lolly herkent zijn eigen duurzame merkteken vandaag al offline op `/verify`; herstel door tools van derden (bijv. Adobe) volgt zodra de soft-binding-resolutie van de sector op zijn plek is.
- **Verificatie gebeurt on-device.** Zet een willekeurig bestand op `/verify` (of `lolly validate <file>`) voor een offline rapport of het echt met Lolly is gemaakt en sindsdien ongewijzigd is gebleven. De web-Verify-weergave signaleert ook AI-gegenereerde content, detecteert de Lolly Imprint, verifieert **SEAL**-handtekeningen (een handtekening op byteniveau die in DNS is verankerd - het enige netwerkcontact is een DNS-sleutelopzoeking, nooit het bestand zelf), scant optioneel diepgaand op pixelwatermerken van derden (een eenmalige on-device modeldownload), en brengt verborgen data aan het licht - allemaal zonder het bestand te uploaden. Zie [Content Credentials-identiteit](/info/content-credentials-identity.html).

> **Interoperabiliteitsnotities.** Lolly verifieert vandaag zijn eigen credentials en veel van die van derden offline, inclusief het lezen van C2PA-claim-**v2**-manifesten van andere producenten. Eén interop-item is nog in uitvoering: WebM - waarvoor nog geen gestandaardiseerde C2PA-mapping bestaat, dus Lolly hangt het manifest eraan als een Matroska-onderdeel (tools van derden verifiëren de MP4 van Lolly out of the box; WebM volgt zodra de standaard is uitgekristalliseerd).

## Encryptie & wachtwoordbeveiliging

Voor bestanden die vergrendeld moeten reizen, gebeurt alles on-device:

- **PDF-openwachtwoord** - *Standaard* is een 40-bit RC4-afschrikmiddel (opent overal, mag in een link meereizen); *Sterk* is **AES-256** (PDF 2.0), getypt bij export en nooit in een link geplaatst.
- **Vergrendelde downloads** - een ZIP, een Projects-map, of een batchrun kan volledig worden vergrendeld: *Standaard* ZipCrypto (zwak, universeel) of *Sterk* **AES-256** (WinZip AE-2). Defence-in-depth: elke PDF binnen een Sterk-vergrendelde zip is *ook* individueel AES-256-vergrendeld, dus hij blijft vergrendeld na het uitpakken.
- **Met wachtwoord beveiligde deelinks** - de volledige linkstatus is AES-256-versleuteld onder een PBKDF2-afgeleide sleutel; alleen ciphertext reist mee, het wachtwoord staat nooit in de link, en ontsleuteling gebeurt in de browser van de ontvanger.

## Air-gap-klaar

Air-gap is een **eersteklas deployment**, geen speciale modus - Lolly draait standaard zonder netwerk tijdens het renderen. De webshell is een offline-first PWA (service worker); fonts en WASM worden on-device opgeslagen; tool-status wordt lokaal bewaard via de host-bridge, nooit via `localStorage`. Elke tool die het netwerk raakt, doet dat alleen via een **toegestane** `host.net`-capability die hij in zijn manifest moet declareren - een shell die dit niet kan (of wil) vervullen, stubt hem uit. Verspreid de shells naar apparaten via je MDM, of draai één instance binnen je netwerk, en een volledig air-gapped installatie rendert, exporteert, versleutelt en verifieert credentials zonder iets om naar huis te bellen.

## Goed om te weten

Een paar dingen die goed zijn om helder te hebben voordat je het uitrolt:

- **Hardening in uitvoering.** De cryptografie en parsers ondergaan SUSE's enterprise-schaal-hardening (zie boven) - vandaag sterk by design; zet het in als defence-in-depth waar een contract om gecertificeerde assurance vraagt.
- **Tool-hooks zijn *geen* security sandbox.** De optionele `hooks.js` van een tool draait met de host-bridge geïnjecteerd, maar in een browsershell wordt hij uitgevoerd in het realm van de pagina en *kan* hij bij `window`/`document`/`fetch`. Behandel toolcode zoals je elke code behandelt die je uitvoert - review het. Daarom kan een organisatie die een gedeelde catalogus draait, die afschermen via Git-review; hoe dan ook, draai alleen tools die je hebt gereviewd totdat Worker-isolatie er is.
- **Content Credentials zijn manipulatie-zichtbaar.** Ze detecteren wijzigingen in plaats van ze te voorkomen - zie de interoperabiliteitsnotities hierboven.
- **Twee encryptieniveaus.** *Standaard*-vergrendelingen zijn snelle, universele afschrikmiddelen; *Sterk* (AES-256) is volledige bescherming - grijp naar Sterk voor alles wat gevoelig is, met de kanttekening dat het een moderne reader vereist.

## Waar je verder kunt kijken

- **[Adoptie & Governance](/info/adoption-governance.html)** - persona's, de deflectiemetric, en governance-as-data in volle omvang.
- **[Uitrol](/info/deployment.html)** - deploy/serve/hybride, MDM, en self-hosting van de services.
- **[Configuratie](/info/configuration.html)** - profielen, brandpacks, capability gating, en feature flags.
- **[Privacybeleid](/info/privacy.html)** - de formele verklaring "verzamelt niets, uploadt niets".
