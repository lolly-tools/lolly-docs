# Privacybeleid

*Laatst bijgewerkt: 19 juli 2026*

> **In gewone taal.** De documenten, afbeeldingen, video's en bestanden die je in Lolly
> maakt, blijven op je apparaat. Er zijn geen accounts voor gewoon gebruik, geen cookies
> van de app zelf, en nergens in de codebase analytics of trackers - niet "we gebruiken
> de gegevens niet", maar echt niet aanwezig in de broncode. Er bestaat een korte, volledige
> lijst met uitzonderingen op de plekken waar de software überhaupt met een netwerk praat,
> en elk daarvan wordt hieronder in detail beschreven: wat er vertrekt, naar wie en wanneer.
> De enige uitzondering die iets persoonlijks betreft, is een aanmelding die je zelf
> uitdrukkelijk moet starten. Als het niet in dit document staat, dan gebeurt het niet.

## Wat dit beleid dekt

Lolly is opensourcesoftware - een engine, meerdere app-shells (web, desktop,
mobiel, CLI) en een browserextensie - die iedereen kan draaien. Dit beleid bestaat uit twee
delen:

- **De software zelf**: wat hij wel en niet doet met je gegevens, waar hij ook
  draait. Dit is een eigenschap van de code, dus het geldt voor elke Lolly-implementatie,
  die van ons of die van iemand anders.
- **lolly.tools**, de referentie-implementatie die SUSE beheert: de specifieke keuzes
  die worden gemaakt bij het draaien van de optionele server-side onderdelen (wat er wordt
  gelogd, hoe lang, door wie).

Gebruik je een zelf-gehoste of enterprise-instantie van Lolly, dan blijft het softwaregedrag
hieronder gelden, maar de *beheerder* van die instantie - niet SUSE - is
verantwoordelijk voor alles wat server-side gebeurt: hun render-endpoint, hun MCP-server,
hun Content Credentials-certificaatautoriteit, als ze die draaien. Vraag hen om hun
eigen beleid; zie [Adoptie en governance](/info/adoption-governance.html) voor
wat het beheren van Lolly inhoudt.

## De app: wat op je apparaat blijft

De web-, desktop- en mobiele shells van Lolly draaien de volledige render-engine client-side.
Een tool openen, invoer invullen, previewen en exporteren gebeurt allemaal op je
apparaat - er komt geen server aan te pas, en de app werkt offline zodra hij is geladen.

**De app plaatst geen cookies.** Om te functioneren bewaart hij een kleine hoeveelheid
gegevens **alleen op je apparaat**, nooit verzonden:

- **Interfacevoorkeuren** - thema, taal, geluidsinstellingen, formaat van
  zijbalk/zoom, sorteer- en weergavekeuzes, welke onboarding-tips je hebt gezien - in
  `localStorage`, zodat ze beschikbaar zijn voordat de app klaar is met opstarten.
- **Een offline cache van de toolcatalogus en asset-previews**, zodat de galerij
  werkt zonder verbinding.
- **Lokale gebruikstellers** voor de statistieken op je profielkaart (hoeveel exports, welke
  tools) - een kleine, begrensde blob in `localStorage`, nooit door ons gelezen, nooit ergens
  naartoe verstuurd.
- **Je eigen documenten, opgeslagen sessies, geüploade assets en lettertypen** - opgeslagen in
  IndexedDB op je apparaat, nooit geüpload, nooit door iemand anders dan jou gelezen.

Niets hiervan wordt gedeeld, verkocht of gebruikt om je te identificeren of te volgen. Er is niets
waarmee je hoeft in te stemmen, want er vindt geen verzameling plaats - alleen deze kennisgeving, zodat je
weet wat er wordt bewaard en waar. Wis het allemaal op elk moment via **Profile → Clear all
my data**, of door de opslag van de site in je browser te wissen. (Onder de ePrivacy-richtlijn
art. 5(3) vereist opslag die strikt noodzakelijk is voor de dienst waar je om vroeg
geen toestemming - alleen transparantie, en dat is precies wat dit document en
de kennisgeving in de app beide zijn.)

Je eigen back-up van deze gegevens - de `lolly-backup`-bundel die **Export en
render everything** oplevert - is een bestand dat jij bewaart en beheert. Het raakt onze
servers nooit, tenzij je er zelf voor kiest om het ergens naartoe te sturen. Zie [Gegevensoverdracht](/info/data-transfer.html).

## Utilities op je apparaat

Sommige tools - **Strip Hidden Data**, **Compress PDF** en andere met de
badge **"Runs on your device"** - werken op een bestand dat jij aanlevert. Het bestand wordt
in het geheugen in je browser ingelezen, lokaal bewerkt en als download teruggegeven.
Het wordt nooit geüpload, want er is geen server in het pad om het naartoe te uploaden.
Deze utilities werken offline, en hun uitvoer bevat geen watermerk of metadata van
ons - het punt van de meeste is om gegevens te verwijderen en te beschermen, niet om risico toe te voegen.

## Wanneer de app met een netwerk praat, volledig

De tabel hieronder is de volledige lijst van alles wat de app over een netwerk ophaalt of
verstuurt. Als het hier niet staat, dan doet de app het niet.

| Wat | Wat er daadwerkelijk je apparaat verlaat | Wanneer |
|---|---|---|
| Synchronisatie van de toolcatalogus | Niets persoonlijks - een verzoek om Lolly's eigen openbare tool- en asset-index | Bij het opstarten, daarna offline gecachet |
| De gedeclareerde netwerkcapability van een tool | Wat die specifieke tool ook opvraagt (bijv. kaarttegels) bij de specifieke host(s) die hij in zijn manifest op de allowlist zet | Alleen tijdens het gebruik van die tool |
| Google Fonts | De gekozen lettertypefamilienaam en je IP-adres, naar Google's fontservers | Alleen als je een Google Font toevoegt in de brand-editor - een eenmalige fetch per familie, daarna staat het op je apparaat |
| SEAL-handtekeningcontrole | Één enkele DNS-lookup voor een publieke sleutel, naar het domein dat in het gecontroleerde bestand wordt genoemd | Alleen als Verify een SEAL-record vindt in een bestand dat je controleert - nooit het bestand zelf |
| Deep-scan-detectormodellen | Niets persoonlijks - een eenmalige same-origin modeldownload (geen derde partij) | Alleen als je kiest voor Verify's deep scan |
| Remote instantie | Wat de door jou genoemde instantie ook teruggeeft, via dezelfde catalogussynchronisatie die hierboven is beschreven | Alleen als je de shell uitdrukkelijk op een andere Lolly-implementatie richt |

Geen van deze verstuurt je documenten, projecten, sessies of geüploade bestanden ergens naartoe.
Ze bestaan om dingen *naar* je apparaat te brengen (tools, lettertypen, modellen, een publieke sleutel),
nooit om dingen *vanaf* je apparaat te versturen, met de uitzonderingen die uitdrukkelijk in de
secties hieronder worden genoemd.

## Hot-linked render-URL's

De app zelf blijft volledig op je apparaat. Los daarvan, en alleen als je het gebruikt,
beantwoordt lolly.tools (en elke zelf-gehoste instantie die het ingeschakeld laat)
**hot-link render-URL's** - `https://lolly.tools/tool/<tool-id>.<ext>?<inputs>` -
zodat een gedeelde Lolly-link als live afbeelding kan verschijnen in een README, een wiki of een
dashboard. Het ophalen van zo'n URL vraagt de server om **openbare tool- en
catalogusgegevens** te renderen met de invoer die in de URL is geschreven, en dat is de hele
uitwisseling:

- **Geen accounts, geen cookies, geen state.** Het endpoint is anoniem; er wordt niets
  per verzoek opgeslagen, en er wordt niets op je apparaat gelezen. Je documenten,
  sessies en uploads verlaten je browser nooit - ze kunnen helemaal niet in deze
  links verschijnen.
- **De invoer is per constructie openbaar** - het is wat de auteur van de link ook
  in de URL heeft getypt, leesbaar voor iedereen die de link bereikt. Zet geen geheimen in een
  gedeelde link; Lolly stelt een linkversleutelingsfunctie voor gevoelige inhoud beschikbaar.
- Reacties worden **gecachet en rate-limited** zoals elke openbare afbeelding, en gemarkeerd als
  `noindex` zodat zoekmachines je renders niet indexeren.

Host je Lolly zelf en wil je geen openbaar render-oppervlak? Stel
`LOLLY_DISABLE_RENDER_GET=1` in en al deze URL's geven 404 terug.

## De MCP-server (optioneel, voor AI-agents)

Lolly kan ook worden bereikt door een AI-agent via het Model Context Protocol - een
door een beheerder gedraaid endpoint (lolly.tools draait er een; iedereen kan zijn eigen instantie
zelf hosten, inclusief volledig air-gapped). Het deelt de no-accounts-houding van het render-pad,
plus twee tools die noodzakelijkerwijs bestandsbytes verwerken:

- **`lolly_transform`** (een utility op je apparaat server-side draaien, namens
  de aanroepende agent) en **`lolly_verify`** (Content Credentials controleren) accepteren
  beide de bytes van een bestand van de aanroeper. Ze worden **in-process, in het geheugen**
  verwerkt, en het resultaat wordt in diezelfde aanroep teruggegeven - het bestand wordt nooit naar
  schijf geschreven en nooit opgeslagen zodra het verzoek is voltooid.
- Elke andere tool - `lolly_render`, `lolly_build_url`, `lolly_list_tools`,
  `lolly_describe_tool` - werkt alleen op basis van parameters (tekst, getallen, kleuren,
  URL's, catalogus-asset-id's), dezelfde invoer die een hot-link render-URL aanneemt.
- Toegang is ofwel een gedeeld token dat de beheerder uitgeeft aan clients die hij vertrouwt, ofwel
  stateless OAuth 2.1: kortlevende ondertekende tokens die worden geverifieerd tegen een gedeeld
  geheim, waarbij niets server-side wordt opgeslagen, en het token zelf wordt nooit naar een
  log of render-URL geschreven.

## Content Credentials-identiteit (een aanmelding die je zelf moet starten)

Lolly kan een cryptografische **Content Credential** in je exports verzegelen zodat iedereen
offline kan verifiëren dat een bestand ongewijzigd is sinds het Lolly verliet. Dat deel is
**standaard aan en volledig lokaal** - de ondertekeningssleutel wordt op je apparaat gegenereerd,
is **niet-extraheerbaar** (zelfs Lolly's eigen code kan hem niet lezen), en het ondertekenen zelf
gebeurt offline. Deze sectie behandelt de ene *optionele* stap daarbovenop:
het inschrijven van een geverifieerde identiteit, zodat je exports "Verified - signed by
\<jouw e-mail\>" zeggen in plaats van een anonieme sleutel. **Als je de inschrijving overslaat, is niets in
deze sectie op jou van toepassing, en verlaten er nooit persoonlijke gegevens je apparaat.**

Als je je wel inschrijft, gebeurt er precies dit:

1. **Je kiest een aanmeldmethode** - GitHub, Google, SUSE (Okta) of een gemailde
   link. Voor de drie OIDC-providers word je doorgestuurd naar de eigen inlogpagina van die
   provider, die valt onder hun privacybeleid, niet het onze; Lolly's certificaatservice
   ontvangt alleen een geverifieerd e-mailadres en de naam van de provider terug.
   Voor de e-maillink wordt het adres dat je typt doorgegeven aan **Resend**, een
   transactionele e-mail-API, uitsluitend om die ene link te bezorgen.
2. **Een kortlevende cookie beschermt de redirect.** Dit is de ene cookie die het
   hele Lolly-systeem plaatst: `lolly_ca_state`, `HttpOnly`, beperkt tot `/api/ca`,
   die binnen tien minuten verloopt. Hij draagt een willekeurige waarde, geen tracking-
   identifier, en bestaat alleen om te voorkomen dat de OAuth-redirect wordt vervalst. Hij wordt
   gewist zodra de aanmelding is voltooid.
3. **Je IP-adres wordt kort gebruikt om misbruik te voorkomen** van de aanmeld-
   endpoints (zodat één script geen inbox kan spammen of het e-mailquotum kan uitputten) - alleen
   in het servergeheugen gehouden, voor een schuivend venster van ongeveer een minuut, nooit
   naar een log geschreven of ergens opgeslagen.
4. **De certificaatservice geeft een kortlevend certificaat uit** (7, 30, 90 of 365
   dagen, jouw keuze, begrensd door het beleid van de beheerder) dat je geverifieerde
   e-mailadres bindt aan de publieke helft van het sleutelpaar dat op je apparaat is gegenereerd. De private
   helft verlaat je browser nooit.
5. **De uitgifte wordt gelogd**: je e-mailadres, de provider die je gebruikte, een korte
   hash van het serienummer van het certificaat en de vervaldatum ervan, geschreven naar de
   operationele logs van de service - en, alleen als de beheerder er een heeft geconfigureerd, naar
   een webhook die zij beheren. Dit is de ene plek waar een stukje van je persoonlijke gegevens
   op een server wordt bewaard, en het bestaat zodat een gecompromitteerd of onterecht uitgegeven certificaat
   kan worden getraceerd en zodat de uitgifte van de CA zelf kan worden geaudit.
6. **Daarna is het ondertekenen weer offline** gedurende de hele levensduur van het certificaat.
   Een bestand exporteren neemt nooit contact op met de certificaatservice - alleen het inschrijven deed dat.

Specifiek voor lolly.tools: SUSE beheert de certificaatservice en houdt
deze uitgiftelogs bij. Zie [Je rechten](#your-rights) hieronder voor hoe je een vermelding
kunt opvragen of laten verwijderen.

## De browserextensie

De browserextensie **Lolly URL Screenshot** verzamelt, bewaart of verstuurt geen
persoonlijke gegevens. Geen analytics, geen tracking, geen externe server.

**Wat hij doet.** Wanneer je de Lolly-webapp vraagt om een screenshot van een URL te maken, opent de
extensie die pagina in een tijdelijk achtergrondtabblad, legt hem vast in je
browser via het DevTools Protocol, geeft de afbeelding terug aan de app en sluit
het tabblad. Alles gebeurt lokaal, op je eigen apparaat en netwerk.

**Gegevens.**

- **We verzamelen niets.** De extensie heeft geen servers en doet zelf geen netwerk-
  verzoeken.
- **Vastgelegde afbeeldingen** gaan rechtstreeks naar de Lolly-app in dezelfde browser - nooit
  geüpload door de extensie.
- **De URL's die je vastlegt** worden alleen gebruikt om die ene pagina te laden voor die ene
  screenshot. Ze worden niet gelogd of gedeeld.

**Machtigingen.**

- **`debugger`** - om de weergegeven pagina vast te leggen via het DevTools Protocol (hetzelfde
  mechanisme dat de Lolly-desktopapp gebruikt).
- **`tabs`** - om het tijdelijke tabblad waarin de pagina laadt te openen en te sluiten.
- **Hosttoegang (`<all_urls>`)** - omdat de pagina die je kiest om vast te leggen op
  elke site kan staan. Chrome toont dit bij de installatie als een brede machtigings-
  waarschuwing; de extensie bezoekt alleen ooit de URL die jij hem geeft.

Geen van deze wordt gebruikt om je surfgedrag te lezen, te monitoren of te versturen buiten die
ene gevraagde vastlegging om.

## Infrastructuurlogs

Zoals elke website genereren de servers achter lolly.tools - en achter elke Lolly-
implementatie - standaard toegangslogs van de webserver telkens wanneer een verzoek hen
überhaupt bereikt: IP-adres, opgevraagd pad, tijdstempel, user agent, bewaard voor een
beperkt venster ten behoeve van beveiliging en misbruikpreventie. Dat is standaard hostinggedrag,
niet iets dat Lolly er bovenop toevoegt, en het bevat nooit de inhoud van
je documenten, want die bereiken om te beginnen nooit een server. De ene bewuste
uitzondering is een bestand dat je uitdrukkelijk aan een MCP-aanroep `lolly_transform` of
`lolly_verify` overhandigt, dat in het geheugen wordt verwerkt en nooit naar schijf of een
log wordt geschreven, zoals hierboven beschreven.

## Privacy van kinderen

Lolly verzamelt bewust van niemand, van welke leeftijd dan ook, persoonlijke informatie in
de normale gang van het gebruik van de app - er is niets te verzamelen. De ene plek waar
persoonlijke informatie (een e-mailadres) ooit wordt verzameld, is de inschrijving voor Content
Credentials, hierboven beschreven, die niet gericht is op of bedoeld is voor kinderen.

## Je rechten

Omdat vrijwel alles wat Lolly aanraakt alleen op je eigen apparaat wordt opgeslagen, zijn de meeste
van wat de gegevensbeschermingswetgeving "je rechten" noemt - toegang, correctie, verwijdering,
overdraagbaarheid - dingen die je al zelf kunt doen, direct, zonder het aan iemand te
vragen: je gegevens leven in de opslag van je browser, in een vorm die je kunt inspecteren,
exporteren (**Export en render everything**, hierboven) of verwijderen (**Profile → Clear all
my data**).

Voor het ene stukje persoonlijke gegevens dat op een server kan belanden - je e-mail-
adres, als je je hebt ingeschreven voor Content Credentials - neem je contact met ons op (hieronder) om te vragen wat
we bewaren of om het uit de actieve logs te laten verwijderen. Het verwijderen van een logvermelding trekt
een reeds uitgegeven certificaat niet in (het is per ontwerp kortlevend en verloopt gewoon);
het zorgt ervoor dat die vermelding niet meer verschijnt in toekomstige exports van de log.

We verkopen geen gegevens. We hebben er geen om te verkopen.

## Wijzigingen in dit beleid

De datum bovenaan verandert telkens wanneer dit document verandert. Een wijziging die verandert
wat je apparaat verlaat of wat er wordt bewaard, krijgt hier een eigen regel, geen stille
bewerking - wil je zien wat er is veranderd, vraag het dan (hieronder) of vergelijk met de
[openbare broncode](https://github.com/lolly-tools/lolly/commits/main/docs/privacy.md).

## Contact

Vragen, of een verzoek onder "Je rechten" hierboven: **Andy Fitzsimon**,
[fitzy@suse.com](mailto:fitzy@suse.com). Voor een zelf-gehoste of enterprise-instantie van Lolly
neem je in plaats daarvan contact op met wie hem ook beheert - SUSE en het Lolly-opensource-
project houden geen gegevens bij voor implementaties die zij niet draaien.
