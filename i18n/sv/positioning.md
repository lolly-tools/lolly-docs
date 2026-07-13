# Hur Lolly jämför sig

Var den här plattformen passar in i det bredare landskapet av kreativa verktyg, och var den medvetet **inte** är med.

> **Pilotstatus:** Lolly är en prototyp i sluten pilot, inte en färdig produkt, och dess säkerhet genomgår för närvarande SUSE:s stränga infrastrukturhärdning, som förbereder för företagsskala. Den här positioneringen är där Lolly *strävar* efter att befinna sig - sidan [Adoption & Governance](/info/adoption-governance.html#status) beskriver hur det testas i praktiken.

## Landskap

| Förmåga | Canva (Öppen canvas) | Varumärkesportaler (DAM-mallar) | Illustrator (professionellt skrivbordsprogram) | Figma / Penpot (professionellt, online) | **Lolly (Regelstyrd)** |
|---|---|---|---|---|---|
| Massgenerering av innehåll | delvis | ✗ | ✗ | ✗ | **✓** |
| Fungerar helt offline | ✗ | ✗ | ✓ | delvis | **✓** |
| Mallogik och hårda begränsningar | ✗ | delvis | ✗ | delvis | **✓** |
| Ingen designkompetens krävs | delvis | ✓ | ✗ | ✗ | **✓** |
| Automatiska Content Credentials | ✗ | ✗ | delvis | ✗ | **✓** |
| Verktyg kombinerar andra verktyg | ✗ | ✗ | ✗ | ✗ | **✓** |
| Öppen motor, inte SaaS-låst | ✗ | ✗ | ✗ | delvis | **✓** |
| C2PA content credentials | ✗ | ✗ | ✗ | ✗ | **✓** |
| Frivillig forensisk proveniens | ✗ | ✗ | ✗ | ✗ | **✓** |
| Mobil- och skrivbordsappar | ✓ | ✗ | ✗ | delvis | **✓** |
| Kommandorad och TUI | ✗ | ✗ | ✗ | ✗ | **✓** |


Formen på luckan är tydlig: inget i det befintliga landskapet ger oss regelstyrd, offlinekapabel, lågtröskel, internt tillgänglig, generativ output. Lolly levererar nu en egen öppen canvas - **Layout Studio**, en direktmanipulerbar fri canvas - men med en avgörande skillnad mot Canva-kolumnen: färger, typografi och tillgångar som placeras på den följer varumärkets globala inställningar, så även fri placering förblir regelstyrd. Vad Lolly fortfarande **inte** är är en obegränsad designsvit; designers kommer att fortsätta använda Illustrator och Figma för skräddarsytt arbete - och när det arbetet behöver bli en styrd, reproducerbar tillgång, för Layout Studios [Importera en design](/info/design-import.html) in den färdiga Figma-, Illustrator- eller Penpot-filen på canvasen som redigerbara, varumärkesanpassade boxar.

## Använd det för

- Snabb generering av operativa kreativa tillgångar (evenemangsrutor, märken, signaturer, aviseringar)
- Fri arrangering på den öppna canvasen (Layout Studio) när delarna - färger, typografi, ikoner, bilder - måste förbli anpassade till varumärkets globala inställningar
- Att landa en färdig Figma-, Illustrator-, InDesign- eller Penpot-design (Layout Studios Importera en design) så att den kan redigeras, styras och renderas om deterministiskt i alla Lolly-format
- En-till-många-flöden av typen "fyll i tre fält, få den färdiga tillgången" - inklusive masskörningar från ett kalkylblad/CSV i `/pro`-batchrutnätet (klistra in eller importera rader, en färdig tillgång per rad, ladda ner som en zip)
- Ständigt aktiva, återkommande varumärkesanpassade utdata
- Saker där central kontroll över varumärkesuttrycket är viktigare än uttrycksfull flexibilitet

## Använd det inte för

- Skräddarsytt eller flaggskeppsmässigt hjälteinnehåll (reklamskyltar, större videoproduktioner)
- Unikt kampanjarbete som verkligen kräver en designer
- Idégenerering som behöver bryta sig helt loss från varumärkessystemet - Lollys öppna canvas anpassar fortfarande färger, typografi och tillgångar till varumärkets globala inställningar, och det är poängen

## Vad detta erbjuder som är unikt

- **Vild designpotential levererad säkert i sitt sammanhang.** Verktyg kan uttrycka djärva designidéer inom hårdkodade skyddsräcken.
- **Mjukvarudefinierad innehållsautomation som returnerar den slutgiltiga tillgången.** Input → färdig fil. Inget "nu får du spara den från ditt designverktyg och efterbehandla den."
- **Verktyg kombinerar verktyg.** Ett verktyg kan bädda in ett annat verktygs rendering och returnera den som en del av en enda färdig tillgång, utan någon kodkoppling mellan verktygen - en grundfunktion som ingen produkt för öppen canvas eller DAM-mallar i landskapet erbjuder.
- **Leverantörsneutralitet.** Full kontroll över funktioner och kostnader. Öppen källkodsmotor. Verktyg och tillgångar är git-spårat innehåll, inte inlåsta i en SaaS-databas.
