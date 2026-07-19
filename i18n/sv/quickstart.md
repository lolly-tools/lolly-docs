# Snabbstart

![The tool gallery - every tool as a card, grouped by category](/t/url-shot?url=%2F%23%2F&width=1440&height=900&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&tolerance=0.03&format=png&localize=1&filename=gallery)

Lolly omvandlar dina regler - färger, typografi, layouter, logik - till verktyg som vem som helst kan använda för att skapa färdiga filer: bilder, PDF:er, sociala kort, video, genom att fylla i några fält. Det finns inget att lära sig och inget att ladda upp: allt körs på din enhet, online eller offline.

Det här är sidan du bör läsa först. Två saker gör dig produktiv: **gör Lolly till din** (peka den mot ditt varumärke) och **ta in det du redan har** (dina designfiler och tokens). Allt annat är bara ett klick bort.

> Ny på Lolly och vill bara skapa något? Öppna appen, välj valfritt verktyg från galleriet, fyll i fälten och tryck på **Rendera**. Kom tillbaka hit när du vill att det ska bära *ditt* varumärke.

## 1. Gör den till din - konfigurera ditt varumärke

Ditt varumärke i Lolly är ett litet **designtokens**-dokument - färger, typsnitt och några regler - som varje verktyg renderar mot. Ställ in det en gång så blir allt du skapar varumärkesriktigt per konstruktion, inte via granskning. Det finns tre sätt in; välj det som matchar var ditt varumärke redan finns.

### Börja från grunden (guiden)

![The Brand Studio start screen - name, primary colour, and a derived palette](/t/url-shot?url=%2F%23%2Fstart&width=1440&height=900&dpi=192&waitMs=1600&format=svg&localize=1&filename=brand-studio)

Första gången landar du på skärmen **Start** (`#/start`). Ge den ett namn och en primärfärg så *härleder* Lolly en komplett, tillgänglig palett från den - ljusa/mörka ytor, text, accenter - med samma färgmatematik som motorn använder överallt annars. Välj ett typsnitt, så har du ett fungerande varumärke på under en minut. Du kan finjustera allt senare.

### Importera ett varumärke du redan har

Om ditt varumärke redan är fångat som design tokens - från **Penpot**, **Tokens Studio** (Figma) eller en vanlig **DTCG**-fil - ta in det i sin helhet i stället för att skriva om det. Två vägar:

- **I appen:** Start-skärmen och redigeraren *Ditt varumärke* tar emot en tokenfil (eller ett `LollyBrand`-paket) direkt - släpp den där så tänds paletten upp.
- **Från kommandoraden**, för att sätta upp ett återanvändbart varumärkespaket:

```bash
# a monolithic tokens.json, a one-file-per-set directory, or a Penpot project archive
npm run ingest:brand -- ./my-tokens.json --name acme --label "Acme" --activate
```

`ingest:brand` tar emot alla tre format som Penpot/Tokens Studio exporterar samma dokument i - en enda `tokens.json`, en katalog (`$metadata.json` + filer per set), eller ett `project.penpot`-arkiv. Med `--activate` registreras varumärket som en profil, växlar till den och bygger om katalogen. Se [Konfiguration](/info/configuration.html) för hur varumärkespaket och profiler hänger ihop.

### Finjustera i appen

![The Dashboard's Design-system tab - the active brand shown read-only](/t/url-shot?url=%2F%23%2Fd%3Ftab%3Dbrand&width=1440&height=900&dpi=192&waitMs=1800&format=png&localize=1&filename=dashboard-brand)

När ett varumärke är aktivt är instrumentpanelens redigerare **Ditt varumärke** (`#/d`) en direktredigerare - ändra en färg eller en roll och varje förhandsvisning på sidan uppdateras medan du skriver. Samma varumärke sammanfattas på kortet **Profil → Ditt varumärke**. Typsnitt är riktiga: välj från Google Fonts och Lolly lagrar filen **på din enhet** som en varumärkestillgång, så din typografi fungerar offline och inget hämtas vid rendering.

När du är nöjd, **exportera varumärket som ett `LollyBrand`-paket** - en enda fil som en kollega kan importera för att få exakt samma palett, typsnitt och regler. Så förflyttas ett varumärke mellan människor och maskiner utan en server i mitten.

> **Varumärkes-tokens går att föra fram och tillbaka.** Eftersom Lollys varumärke *är* DTCG-tokens - formatet som Penpot läser och skriver nativt och som Tokens Studio tar med till Figma - är paletten du designar *med* och paletten Lolly *upprätthåller* ett och samma dokument, inte två listor du synkar för hand. Se [Designtokens](/info/design-tokens.html).

## 2. Ta in det du redan har

Du börjar inte på ett tomt blad. Lolly öppnar designarbetet och de öppna format du redan äger.

### Designfiler med öppen källkod

Färdigt arbete i **Figma, Penpot, Illustrator, InDesign eller vilken SVG-app som helst** behöver inte förbli inlåst i appen du ritade det i. Öppna **Layout Studio**, klicka på **Importera en design**, och filen öppnas som en *levande layout* - inte en plattgjord bild. Varje lager blir en redigerbar ruta: text förblir omskrivningsbar, former förblir former, bilder hamnar i ditt bibliotek och komplex vektorgrafik bevaras troget. Den anländer redan anpassad till dina varumärkestypsnitt och färgregler.

| Du har | Ta in det som |
|---|---|
| En Figma-ram | Nativ `.fig` (Arkiv → Spara lokal kopia), eller en SVG-export |
| En Penpot-design | Dess `.penpot`-export, eller valfri SVG |
| En Illustrator-fil | Nativ `.ai` (PDF-kompatibel) eller `.pdf` - öppnas direkt |
| En InDesign-layout | `.idml` (Arkiv → Exportera → InDesign Markup) |
| Något annat | **Valfri SVG** - den universella ingången |

Hela importen sker **på din enhet** - filen tolkas i din webbläsare och inget laddas upp. Fullständiga detaljer, och exakt vad som följer med, finns i [Importera en design](/info/design-import.html).

### Från engångsjobb till mall

Här är vinsten: en importerad layout är en vanlig Layout Studio-session, så när du **sparar** den lever den på en URL. Vem som helst med Lolly kan öppna den URL:en, ändra texten, byta ut en bild och rendera sin egen version - ingen designapp behövs, och de låsta delarna förblir låsta. En engångsdesign blir ett återanvändbart verktyg. Det är hela idén, uppnådd utan att skriva en enda rad konfiguration.

### Öppen data och öppna verktyg

[Community-verktygssamlingen](/info/builders.html) är öppen källkod och varumärkesoberoende - QR-koder, stadskartor, filter, integritetsverktyg - och den renderar mot *ditt* varumärke i samma stund du aktiverar den. Mata verktygen med din egen öppna data också: klistra in eller släpp en **CSV**- eller **JSON**-tabell så fylls ett verktygs repeterande fält från den, en färdig tillgång per rad.

## 3. Skapa något, dela eller automatisera det sedan

Med ett aktivt varumärke och ditt material i handen skapar varje verktyg en färdig fil:

- **Rendera** vilket verktyg som helst till **SVG, PDF, PNG, JPG, WebP, video** och mer - i verkliga tryckstorlekar och fysiska enheter när du behöver det. Se [Export och format](/info/exporting.html).
- **Dela en länk.** Varje verktygstillstånd är en URL, så en färdig tillgång är reproducerbar och parameteradresserbar - spara länken, återskapa vid behov.
- **Gör det i bulk.** Driv en mall från ett kalkylblad i [batch-rutnätet](/info/exporting.html): en färdig tillgång per rad.
- **Automatisera det.** Samma rendering körs från [CLI](/info/cli.html) och från en [AI-agent](/info/ai-agents.html) - en URL är API:et.

## Vart du ska gå härnäst

Tre spår, beroende på vad du är här för att göra:

- **[Lolly för skapare](/info/creators.html)** - du skapar saker. Fördelarna, och hur du får ut det mesta av appen.
- **[Lolly för utvecklare](/info/builders.html)** - du skapar verktyg, integrerar och driftsätter. Den tekniska dokumentationen.
- **[Lolly för operatörer](/info/operators.html)** - du ansvarar för varumärke, säkerhet och utrullning inom en organisation.
