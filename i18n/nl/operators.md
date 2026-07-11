# Lolly voor operators

**Een toekomstbestendige dataverliespreventie- en herkomststrategie met defence-in-depth, vermomd als een creatief platform.**

Het organisatorische immuunsysteem dat zich om wat je al doet heen vouwt — zodat het routinematige creatieve werk dat je teams elke dag nodig hebben *binnen* je perimeter gebeurt in plaats van eruit te lekken.

**Wat het jou oplevert.** Jij bent degene die ja zei tegen iets dat zowel veilig *als* populair is. Je dicht een exfiltratielek en schrapt de wachtrij met ontwerpverzoeken in één beweging — die zeldzame securitywinst die je juist populairder maakt, niet minder. Geen telefoontje om 3 uur 's nachts omdat iemand merkbestanden naar een contractor mailde of klantgegevens in een willekeurige webtool plakte; minder SaaS-leveranciers, contracten en audits op je bordje; en een volledig git-spoor waar je naar kunt wijzen als iemand vraagt wie wat heeft goedgekeurd. Jij slaapt 's nachts.

Lolly verdient zijn plek als creatieve tool: het schrapt de ontwerpwachtrij en legt output van productiekwaliteit in ieders handen. Maar de reden dat het *veilig* is om het zo breed uit te delen, zit in de architectuur. Niets wordt geüpload, alles is reproduceerbaar, en elke export kan een cryptografisch record dragen van waar hij vandaan komt. Deze pagina is het security- en uitrolverhaal.

> **Eerst het eerlijke verhaal.** De securityeigenschappen van Lolly zijn sterk *by design*, en de cryptografie- en file-parsing-engines ondergaan momenteel SUSE's strikte infrastructuur-hardening, in voorbereiding op enterprise-schaal — we zijn hier echt goed in. De zegels, on-device signing en encryptie hieronder zijn reëel en verdedigbaar; zolang die hardening nog niet is afgerond, behandel ze als defence-in-depth in plaats van een gecertificeerde control waar contractueel onafhankelijke assurance vereist is. Dat weet je liever van tevoren.

## Het strategische voordeel

De gebruikelijke manier waarop routinematig creatief werk tot stand komt, is een aansprakelijkheidsoppervlak: bestanden gemaild naar externe ontwerpcontractors, merkbestanden geüpload naar tientallen SaaS-editors, klantgegevens geplakt in de webtool van een vreemde om "even snel een grafische afbeelding te maken." Elk van die dingen is data die je controle verlaat.

Lolly draait dit om. Het werk dat die lekken *veroorzaakte* — de quote card, de gelokaliseerde banner, het eventbadge, de geredigeerde screenshot — gebeurt nu op een tool die op het eigen apparaat van de medewerker draait, tegen jouw merk aan, zonder server ertussen. Je hebt geen control bovenop een risicovolle workflow gezet; je hebt de risicovolle workflow vervangen door een workflow die om te beginnen geen exfiltratiepad heeft.

- **Configuratie is van jou.** De engine en shells zijn open source (MPL-2.0). Leg je eigen auth, telemetrie of CA erover heen; host het zelf of niet; jij hebt volledige controle over features en kosten, git-tracked, niet vastgezet in een SaaS-database.
- **Governance is data, geen dashboard.** De toolcatalogus is de bron van waarheid, beheerd als een Git-repository — pull-request-review *is* de moderatie, en je krijgt een volledig audittrail en directe rollback van elk template dat je personeel kan aanraken. Zie [Adoptie & Governance](/info/adoption-governance.html).
- **Guardrails zijn structureel.** Merkbeperkingen zijn hard-coded in templates, niet gepubliceerd als richtlijnen die mensen kunnen negeren. De verkeerde output wordt niet afgeraden — hij is niet te representeren.

## Schrap de verzoekenwachtrij en laat content tegelijk groeien.

Eén doel van Lolly is **het afbuigen van ontwerpverzoeken** (design-request deflection): routineverzoeken die nooit bij een designer terecht hoeven te komen, omdat de persoon die het asset nodig had het zelf maakte, correct, in enkele minuten. Elk afgebogen ticket is zowel een productiviteitswinst als één bestand minder dat van hand wisselt.

Lolly is gebouwd om te passen bij hoe jouw organisatie daadwerkelijk werkt — er is niet één juiste manier om het uit te rollen:

- **Deploy, geen server.** Verspreid Lolly naar apparaten via je bestaande MDM (Intune, Jamf, Munki…). Het draait lokaal als desktop/mobiele app of offline PWA — werkt achter elke firewall, in elke air-gapped omgeving, zonder server om te onderhouden en met IT in controle over het updatetempo.
- **Alleen server.** Draai één instance binnen je netwerk (of achter een VPN); gebruikers bereiken het via een browser, niets geïnstalleerd. Publiceer een tool één keer, iedereen heeft hem meteen; koppel aan je IdP voor toegangscontrole.
- **Hybride.** Lokale apps voor offline veldwerk, een altijd actuele browserversie voor geleende machines — beide gericht op dezelfde toolbibliotheek.

De volledige uitrolmodellen en beheerwalkthrough vind je in [Uitrol](/info/deployment.html) en [Configuratie](/info/configuration.html).

## Anti-exfiltratiehulpprogramma's

Een categorie Lolly-tools bestaat *specifiek* om bestanden binnen de perimeter te houden. De privacyhulpprogramma's.


- **Verborgen data verwijderen**
 Verwijder locatie en alle verborgen identificerende informatie uit documenten en mediabestanden.

- **Tekst Helper**  
Anonimiseer, codeer, formatteer en bewerk gestructureerde en ongestructureerde tekst. 

- **PDF comprimeren**
Voorkom elke kans op een 'e-maillimietcrisis' waarbij tools van derden azen en data 

- **PDF comprimeren**
Voorkom elke kans op een 'e-maillimietcrisis' waarbij tools van derden azen en data buiten de boot valt. 



Dit zijn allemaal on-device transformaties: je bestand of data gaat erin, schone bytes komen eruit, en **er is geen server om naar te uploaden**. Ze zijn het bewuste tegenovergestelde van de typische tool "upload je bestand naar de website van een vreemde om het te reinigen" waar een goedbedoelende medewerker anders naar grijpt.



## Determinisme & reproduceerbaarheid

Elke tool-invoer is uit te drukken als URL-parameter, en dezelfde invoer produceert hetzelfde bestand. Dat heeft twee gevolgen voor operators:

- **Een URL is het artefact.** Commit de link, genereer het asset op aanvraag opnieuw — geen binaries ingecheckt in Git, geen achternajagen van "de laatste versie" in chat. Asset- en tool-ID's zijn permanente contracten, dus een link die vandaag wordt aangemaakt, blijft ook later oplosbaar.
- **De CLI is hetzelfde renderpad** als de GUI, dus build-pipelines en de app lopen nooit uit elkaar. Genereer OG-afbeeldingen, social cards en datavisuals tijdens build time, reproduceerbaar.

## Herkomst & Content Credentials

Exports kunnen **Content Credentials** dragen — een ondertekend [C2PA](https://c2pa.org)-manifest gebonden aan een hash van de bytes van het bestand. Dit is **manipulatie-*zichtbaar*, niet manipulatie-*bestendig***: het voorkomt niet dat iemand een bestand wijzigt, maar elke latere wijziging verbreekt het zegel en een C2PA-bewuste verifier meldt dit. Dat is de eerlijke en nuttige eigenschap — je kunt wijzigingen *detecteren*, cryptografisch, offline.

- **Standaard aan, on-device.** De ondertekeningssleutel wordt op het apparaat gegenereerd, is niet-extraheerbaar (zelfs Lolly kan hem niet uitlezen), en ondertekenen gebeurt lokaal — alleen optionele identiteits*inschrijving* raakt ooit het netwerk.
- **Vertrouwensniveaus.** Een niet-ingeschreven export is structureel geldig maar anoniem ondertekend (`untrusted`). Schrijf een **geverifieerde identiteit** in (kortlevend certificaat van de Lolly CA, gekoppeld aan een e-mailadres) en verifiers die de Lolly-root pinnen, melden `trusted` + het e-mailadres van de ondertekenaar. Een trusted timestamp authority en een groen vinkje van een externe validator (C2PA-conformiteit) staan op de roadmap, maar zijn nog niet uitgeleverd — de niveaus zijn eerlijk gelabeld en een bestand toont nooit een vals groen.
- **Levensduur van het credential** is de keuze van de operator/gebruiker op het moment van ondertekenen: 7 / 30 / 90 / 365 dagen, standaard 30.
- **Verificatie gebeurt on-device.** Zet een willekeurig bestand op `/valid` (of `lolly validate <file>`) voor een offline rapport of het echt met Lolly is gemaakt en sindsdien ongewijzigd is gebleven. Zie [Content Credentials-identiteit](/info/content-credentials-identity.html).

> **Bekende lacune, ronduit gezegd:** de verifier van Lolly leest C2PA-claim-**v2**-manifesten van andere producenten nog niet volledig; en WebM draagt het manifest als een Matroska-bijlage (er bestaat nog geen gestandaardiseerde C2PA-mapping voor WebM), dus tools van derden verifiëren de MP4 van Lolly wel, maar de WebM niet.

## Encryptie & wachtwoordbeveiliging

Voor bestanden die vergrendeld moeten reizen, gebeurt alles on-device:

- **PDF-openwachtwoord** — *Standaard* is een 40-bit RC4-afschrikmiddel (opent overal, mag in een link meereizen); *Sterk* is **AES-256** (PDF 2.0), getypt bij export en nooit in een link geplaatst.
- **Vergrendelde downloads** — een ZIP, een Projects-map, of een batchrun kan volledig worden vergrendeld: *Standaard* ZipCrypto (zwak, universeel) of *Sterk* **AES-256** (WinZip AE-2). Defence-in-depth: elke PDF binnen een Sterk-vergrendelde zip is *ook* individueel AES-256-vergrendeld, dus hij blijft vergrendeld na het uitpakken.
- **Met wachtwoord beveiligde deelinks** — de volledige linkstatus is AES-256-versleuteld onder een PBKDF2-afgeleide sleutel; alleen ciphertext reist mee, het wachtwoord staat nooit in de link, en ontsleuteling gebeurt in de browser van de ontvanger.

## Air-gap-klaar

Lolly is ontworpen om te draaien met **geen netwerk tijdens het renderen**. De webshell is een offline-first PWA (service worker); fonts en WASM worden on-device opgeslagen; tool-status wordt lokaal bewaard via de host-bridge, nooit via `localStorage`. Elke tool die het netwerk raakt, doet dat alleen via een **toegestane** `host.net`-capability die hij in zijn manifest moet declareren — een shell die dit niet kan (of wil) vervullen, stubt hem uit. Dus een volledig air-gapped installatie rendert, exporteert, versleutelt en verifieert credentials zonder iets om naar huis te bellen.

## Wat je moet weten voordat je erop vertrouwt

Operators verdienen de kanttekeningen, niet alleen de claims:

- **Hardening voor enterprise-schaal.** Zoals bovenaan al gezegd — de cryptografie en parsers ondergaan momenteel SUSE's strikte infrastructuur-hardening voor enterprise-schaal; sterk by design, en behandel het als defence-in-depth waar contractueel onafhankelijke assurance vereist is.
- **Tool-hooks zijn *geen* security sandbox.** De optionele `hooks.js` van een tool draait met de host-bridge geïnjecteerd, maar in een browsershell wordt hij uitgevoerd in het realm van de pagina en *kan* hij bij `window`/`document`/`fetch`. Behandel toolcode zoals je elke code behandelt die je uitvoert — review het. Dit is waarom het catalogus-als-Git-review-model ertoe doet, en waarom niet-vertrouwde tools van derden niet zouden moeten draaien totdat Worker-isolatie er is.
- **C2PA is manipulatie-zichtbaar, niet manipulatie-bestendig**, en de hierboven genoemde v2-lees- / WebM-lacunes zijn reëel.
- **Encryptieniveaus verschillen.** *Standaard*-vergrendelingen zijn afschrikmiddelen; alleen *Sterk* (AES-256) is echte bescherming, en Sterk-bestanden openen niet in elke legacy reader.

## Waar je verder kunt kijken

- **[Adoptie & Governance](/info/adoption-governance.html)** — persona's, de deflectiemetric, en governance-as-data in volle omvang.
- **[Uitrol](/info/deployment.html)** — deploy/serve/hybride, MDM, en self-hosting van de services.
- **[Configuratie](/info/configuration.html)** — profielen, brandpacks, capability gating, en feature flags.
- **[Privacybeleid](/info/privacy.html)** — de formele verklaring "verzamelt niets, uploadt niets".
