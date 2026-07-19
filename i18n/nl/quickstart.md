# Snelstart

![The tool gallery - every tool as a card, grouped by category](/t/url-shot?url=%2F%23%2F&width=1440&height=900&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&tolerance=0.03&format=png&localize=1&filename=gallery)

Lolly zet jouw regels - kleuren, typografie, lay-outs, logica - om in tools die iedereen kan gebruiken om afgewerkte bestanden te maken: afbeeldingen, pdf's, social cards, video, door een paar velden in te vullen. Er is niets te leren en niets te uploaden: alles draait op je eigen apparaat, online of offline.

Dit is de ene pagina die je als eerste moet lezen. Twee dingen maken je productief: **maak Lolly van jou** (richt het op je merk), en **breng mee wat je al hebt** (je ontwerpbestanden en tokens). Al het andere is maar een klik verderop.

> Nieuw bij Lolly en wil je gewoon iets maken? Open de app, kies een willekeurige tool uit de gallery, vul de velden in en klik op **Render**. Kom hier terug wanneer je wilt dat het jouw *eigen* merk draagt.

## 1. Maak het van jou - configureer je merk

Je merk in Lolly is een klein **design-tokens**-document - kleuren, lettertypen en een paar regels - waar elke tool tegen rendert. Stel het één keer in en alles wat je maakt is vanzelf on-brand, niet pas na controle. Er zijn drie manieren om te beginnen; kies degene die aansluit bij waar je merk al leeft.

### Begin vanaf nul (de wizard)

![The Brand Studio start screen - name, primary colour, and a derived palette](/t/url-shot?url=%2F%23%2Fstart&width=1440&height=900&dpi=192&waitMs=1600&format=svg&localize=1&filename=brand-studio)

Bij de eerste keer starten kom je op het **Start**-scherm (`#/start`) terecht. Geef het een naam en een primaire kleur, en Lolly *leidt* daar een compleet, toegankelijk kleurenpalet van af - light/dark-oppervlakken, tekst, accenten - met dezelfde kleurwiskunde die de engine overal elders gebruikt. Kies een lettertype en je hebt binnen een minuut een werkend merk. Je kunt alles later nog verfijnen.

### Importeer een merk dat je al hebt

Als je merk al is vastgelegd als design tokens - vanuit **Penpot**, **Tokens Studio** (Figma) of een gewoon **DTCG**-bestand - breng het dan in één keer binnen in plaats van alles over te typen. Twee manieren:

- **In de app:** het Start-scherm en de *Your brand*-editor accepteren een tokenbestand (of een `LollyBrand`-pack) rechtstreeks - sleep het erin en het palet licht op.
- **Vanaf de command line**, om een herbruikbaar merkpakket op te zetten:

```bash
# a monolithic tokens.json, a one-file-per-set directory, or a Penpot project archive
npm run ingest:brand -- ./my-tokens.json --name acme --label "Acme" --activate
```

`ingest:brand` accepteert alle drie de containers waarin Penpot / Tokens Studio hetzelfde document exporteren - een losse `tokens.json`, een map (`$metadata.json` + bestanden per set), of een `project.penpot`-archief. Met `--activate` registreert het het merk als profiel, schakelt het ernaar over en bouwt het de catalogus opnieuw op. Zie [Configuratie](/info/configuration.html) voor hoe merkpakketten en profielen samenhangen.

### Verfijn het in de app

![The Dashboard's Design-system tab - the active brand shown read-only](/t/url-shot?url=%2F%23%2Fd%3Ftab%3Dbrand&width=1440&height=900&dpi=192&waitMs=1800&format=png&localize=1&filename=dashboard-brand)

Zodra een merk actief is, is de **Your brand**-editor van het dashboard (`#/d`) een live editor - verander een kleur of een rol en elke preview op de pagina wordt bijgewerkt terwijl je typt. Hetzelfde merk wordt samengevat op de kaart **Profile → Your brand**. Lettertypen zijn echt: kies er een uit Google Fonts en Lolly slaat het bestand **op je apparaat** op als merkasset, zodat je typografie ook offline meegaat en er bij het renderen niets wordt opgehaald.

Als je tevreden bent, **exporteer het merk als een `LollyBrand`-pack** - één bestand dat een collega kan importeren om exact hetzelfde palet, dezelfde lettertypen en regels te krijgen. Zo verplaatst een merk zich tussen mensen en machines zonder server ertussenin.

> **Merktokens gaan beide kanten op.** Omdat het merk van Lolly *bestaat uit* DTCG-tokens - het formaat dat Penpot native leest en schrijft en dat Tokens Studio naar Figma brengt - zijn het palet waar je *mee* ontwerpt en het palet dat Lolly *afdwingt* één document, geen twee lijsten die je handmatig synchroon houdt. Zie [Design Tokens](/info/design-tokens.html).

## 2. Breng mee wat je al hebt

Je begint niet bij een leeg blad. Lolly opent het ontwerpwerk en de open formaten die je al hebt.

### Open-source ontwerpbestanden

Afgewerkt werk in **Figma, Penpot, Illustrator, InDesign, of een willekeurige SVG-app** hoeft niet opgesloten te blijven in de app waarin je het hebt getekend. Open **Layout Studio**, klik op **Import a design**, en het bestand opent als een *levende lay-out* - geen platgeslagen plaatje. Elke laag wordt een bewerkbaar vak: tekst blijft herschrijfbaar, vormen blijven vormen, afbeeldingen komen in je bibliotheek terecht, en complexe vectorkunst blijft getrouw bewaard. Het is bij aankomst al afgestemd op je merklettertypen en kleurregels.

| Je hebt | Breng het binnen als |
|---|---|
| Een Figma-frame | Native `.fig` (File → Save local copy), of een SVG-export |
| Een Penpot-ontwerp | De `.penpot`-export ervan, of een willekeurige SVG |
| Een Illustrator-bestand | Native `.ai` (PDF-compatibel) of `.pdf` - opent direct |
| Een InDesign-lay-out | `.idml` (File → Export → InDesign Markup) |
| Iets anders | **Elke SVG** - de universele ingang |

De hele import gebeurt **op je apparaat** - het bestand wordt in je browser geparsed en er wordt niets geüpload. Alle details, en precies wat er behouden blijft, staan in [Import a design](/info/design-import.html).

### Van eenmalig ontwerp naar template

Dit is de beloning: een geïmporteerde lay-out is een gewone Layout Studio-sessie, dus zodra je die **opslaat**, staat hij op een URL. Iedereen met Lolly kan die URL openen, de tekst aanpassen, een afbeelding vervangen en zijn eigen versie renderen - zonder ontwerpapp, en de vergrendelde onderdelen blijven vergrendeld. Een eenmalig ontwerp wordt een herbruikbare tool. Dat is het hele idee, bereikt zonder ook maar een regel configuratie te schrijven.

### Open data en open tools

De [community-toolset](/info/builders.html) is open source en merk-onafhankelijk - QR-codes, plattegronden, filters, privacyhulpmiddelen - en rendert tegen *jouw* merk zodra je het activeert. Voer tools ook met je eigen open data: plak of sleep een **CSV**- of **JSON**-tabel en de herhalende velden van een tool vullen zich daarmee, één afgewerkt bestand per rij.

## 3. Maak iets, deel het of automatiseer het

Met een actief merk en je materiaal bij de hand, levert elke tool een afgewerkt bestand op:

- **Render** elke tool naar **SVG, PDF, PNG, JPG, WebP, video** en meer - op echte drukformaten en fysieke eenheden wanneer je dat nodig hebt. Zie [Exporteren & formaten](/info/exporting.html).
- **Deel een link.** Elke tooltoestand is een URL, dus een afgewerkt bestand is reproduceerbaar en via parameters aan te spreken - commit de link, genereer opnieuw wanneer nodig.
- **Doe het in bulk.** Stuur een template aan vanuit een spreadsheet in de [batch-grid](/info/exporting.html): één afgewerkt bestand per rij.
- **Automatiseer het.** Dezelfde render draait vanaf de [CLI](/info/cli.html) en vanuit een [AI-agent](/info/ai-agents.html) - een URL is de API.

## Waar je hierna heen kunt

Drie paden, afhankelijk van waarvoor je hier bent:

- **[Lolly voor makers](/info/creators.html)** - jij maakt dingen. De voordelen, en hoe je het meeste uit de app haalt.
- **[Lolly voor bouwers](/info/builders.html)** - jij bouwt tools, integreert en implementeert. De technische documentatie.
- **[Lolly voor beheerders](/info/operators.html)** - jij bent verantwoordelijk voor merk, beveiliging en uitrol binnen een organisatie.
