# Veelgestelde vragen (FAQ)

Veelgestelde vragen die worden getoond in de accordion op de `/info`-landingspagina.

**Hoe onderhoud je dit:** elke `##`-kop hieronder is een vraag; alles eronder
(tot de volgende `##`) is het antwoord. Antwoorden gebruiken dezelfde lichte markdown als
de rest van de site — scheid alinea's met een lege regel. Voeg hier vragen toe, verwijder
ze, of wijzig de volgorde, en voer daarna `npm run build:info` opnieuw uit (of `npm run dev:web`).
Alles boven de eerste `##` (deze titel en deze notities) wordt door de build genegeerd.

## Wat gebeurt er als ik opt-in geef op de /profile-pagina?

Wanneer je Lolly voor het eerst gebruikt, is alles wat je waar dan ook typt volledig privé, totdat je die informatie bewust naar buiten wilt brengen via media of een deel-link (indien online).

Met de opt-in geselecteerd, nemen we een deel van je profielinformatie op als herkomst (provenance) in assets en bundels, zodat jij als bron te identificeren bent.

Lolly produceert een grote hoeveelheid content. We hanteren een strikte aanpak van dataminimalisatie om risico te voorkomen.

### Wat zijn de feature flags?

Feature flags zetten onderdelen van Lolly aan of uit. Meestal heeft een beheerder daar controle over — bij Lolly heb jij de controle.

## Hoe kom ik aan de mobiele of desktop-apps?

Iedereen kan zijn eigen apps distribueren; de tools en configuratie van die apps kunnen sterk verschillen, afhankelijk van het beoogde publiek. Er is dus geen ene app, tenzij je hem zelf hebt gemaakt of iemand relevant hem aan je geeft.

## Waarom de naam "Lolly Tools"?

**Lolly** Omdat vrijheid zoet is.
**Tools** zijn inactief wanneer ze niet worden gebruikt. Ze bespioneren je niet, draaien geen geheime programma's, 
zet ze aan het werk, op jouw bevel, voor jouw acties en voorwaarden.

**Lolly** is een Australische, Nieuw-Zeelandse en Britse term voor 'snoep' of 'snoepjes'. Net als lollies zijn tools erg smakelijk voor mensen die ze nodig hebben.

We moeten ook lachen om de tijd en kosten die we besparen met deze aanpak.

## Welke hindernissen kan ik verwachten bij het invoeren van Lolly?

Lolly past zich in waar je al bestanden genereert — de CLI is dezelfde engine
als de app, dus een pipeline die om 2 uur 's nachts draait kan niet afwijken van wat iemand als preview in een
browser ziet. De wrijving bij adoptie is zelden technisch; het is organisatorisch. Verwacht het volgende:

**Tools en de merkcatalogus moeten worden opgesteld.** Lolly is een platform, geen
kant-en-klaar pakket met jouw templates. Iemand moet de assetcatalogus definiëren (logo's,
paletten, lettertypen als permanente ID's) en voor elk outputtype het manifest + de
template schrijven.  

**Governance loopt via git.** "De PR-review *is* de moderatie" is elegant voor
engineers, maar onbekend terrein voor de meeste merk- en marketingteams. Als de mensen die
merkbeslissingen bezitten niet in git leven, heb je een workflow nodig die hen overbrugt — of IT
wordt stilzwijgend de strategische designpartner en bredere institutionele poortwachter.
Dat heeft bij velen in langlopende productieomgevingen zelfs de voorkeur. 

**Het is bewust beperkt — presenteer het ook zo.** Lolly is niet bedoeld voor maatwerk of hero-
content. Het *is* je persoonlijke DAM — gevoed en versterkt door je designsysteem,
tools en catalogus — en het *heeft* wel degelijk een open canvas (Layout Studio), maar
zelfs daar volgen kleuren, typografie en assets de actieve designglobals, zodat vrije
opmaak binnen het systeem blijft. Afgezet tegen Figma of Canva zal het beperkt
ogen. Beoordeeld als wat het is — geoperationaliseerde, terugkerende assetgeneratie op
massale schaal — is er niets dat ermee kan concurreren. De verkeerde framing is de meest voorkomende tegenslag.

**Changemanagement aan de productiekant.** Bestaande processen werken vandaag, ook al is
de output niet on-brand. Ze omleiden naar de engine betekent opnieuw testen, opnieuw leren,
en "we kunnen al bestanden maken" wordt het excuus om niet te migreren. Begin met het omzetten van
één zichtbare productie-output van hoge kwaliteit en laat het voor-en-na naast elkaar zien.

Lolly tilt alles naar een hoger niveau.


## Wat maakt utilities anders dan tools?

**Kort antwoord →** Utilities hoeven niet altijd te renderen en kunnen daardoor een andere UX krijgen. 

**Eigenlijke antwoord →** De reden dat utilities binnen Lolly Tools gehost kunnen worden, is om nog een 'gemakslaag' aan verdediging toe te voegen die data-exfiltratie ontmoedigt. 

Waarom? Omdat het bekend is dat mensen elke dag **vertrouwelijke content die ze al hebben** aan een
willekeurige website geven om daar één kleine mechanische bewerking op te laten uitvoeren:

- "**Comprimeer deze PDF**" → upload een contract / loonstrook / bestuursdocument naar onbekende partijen.
- "**Zet HEIC om naar JPG**" → upload persoonlijke foto's (met GPS-EXIF) naar een advertentie-gefinancierde host
- "**Snij deze afbeelding bij / wijzig het formaat**" → upload een productscreenshot of een nog niet uitgebracht asset
- "**Formatteer deze JSON**" / "decodeer deze JWT" → plakt API-responses, tokens en geheimen in een formatter
- "**Voeg deze PDF's samen**" → upload **twee documenten die nooit een server mogen delen**

Deze sites en hun enorme staart aan kloons zijn **standaard niet betrouwbaar**, met
onbekende bewaartermijnen, onbekende rechtsgebieden, onbekende subverwerkers, en een advertentie-/affiliate-
verdienmodel dat elke prikkel heeft om te bewaren wat je ze geeft. De bewerking is
triviaal; **de content is de prijs.** 

We winnen de strijd om governance met uitstekend gemak en uitstekende service. 

## Kan Lolly mijn Figma-, Penpot-, Illustrator- of InDesign-bestanden bewerken en renderen?

Ja. Open **Layout Studio** en klik op **Een ontwerp importeren**: het accepteert een natieve Figma **.fig** (Save local copy), een Penpot **.penpot**-export, een Illustrator **.ai** of **.pdf**, een InDesign **.idml** (File → Export → InDesign Markup), of **elke SVG** (de brede deur — bijna elke ontwerptoepassing kan dit exporteren). Alles wordt volledig op je eigen apparaat verwerkt, geen account of plug-in nodig.

Lagen komen binnen als bewerkbare vakken op het open canvas: tekst blijft herschrijfbaar, vormen blijven vormen, afbeeldingen worden toegevoegd aan je lokale bibliotheek, en typografie en kleuren volgen de merk-globals. Sla het op en de lay-out wordt een herbruikbare, via URL benaderbare template die iedereen met Lolly kan invullen — en je kunt er live tools doorheen mengen (een QR-code, een grafiek) die bij het laden opnieuw renderen. Van daaruit rendert het zoals al het andere in Lolly — SVG, PDF, PNG en de rest, reproduceerbaar vanaf de URL. Zie [Een ontwerp importeren](/info/design-import.html).

## Wat gebeurt er op 29 augustus?

De tools met de SUSE-branding verlaten het project, en nieuwe generieke voorbeeldtools, gedefinieerd door de gebruiker, nemen het over.

SUSE zal zijn eigen Lolly beheren om zijn handelsmerken te beschermen.

## Hoeveel houdt SUSE privé? (ook wel: wanneer komt de rug-pull)

De handelsmerken en gebrande tools van SUSE zijn alleen voor demonstratiedoeleinden, tot 29 augustus. Je vindt een ongebrande versie van Lolly op [lolly.ART](https://lolly.art).

SUSE is een enterprise open source infrastructuurbedrijf met meer dan drie decennia aan platformleiderschap. De producten omvatten Linux-, Cloud Native-, Edge- en AI-infrastructuuroplossingen op enterpriseniveau.

Vanuit het perspectief van SUSE gaat dit om het waarmaken van soevereiniteit en veiligheid. Vandaag de dag is de kans dat SUSE Lolly tot product maakt vrijwel nul.

Volledige openheid: SUSE *is* wel bezig met het bouwen van interne tooling om Lolly te integreren binnen zijn IT-systemen — dat gaat over de interne inrichting van SUSE, niet over publieke versus private ontwikkeling.

Wat betreft de publieke kant: Lolly streeft ernaar gebouwd te worden via de [Open Build Service](https://openbuildservice.org/), met veilige supply-chain-artefacten die worden geleverd door de [SUSE Application Collection](https://apps.rancher.io/applications).

We bouwen zo veel mogelijk in het openbaar — je zult alleen niet lang meer tools met SUSE-branding zien, en evenmin het interne personeelsbestand en de commerciële processen van SUSE, die geen verband houden met Lolly.

## Welke smaak heeft dat Lolly-logo?

Sommigen zeggen Limoen, anderen zeggen Munt en soms Appel — Lolly brengt de zoetigheid, jij bepaalt de smaak!
