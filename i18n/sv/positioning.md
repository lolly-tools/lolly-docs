# Hur Lolly jämför sig

Var den här plattformen passar in i det bredare landskapet av kreativa verktyg, och var den medvetet **inte** är med.

> **Pilotstatus:** Lolly är en prototyp i sluten pilot, inte en färdig produkt, och dess säkerhet genomgår för närvarande SUSE:s stränga infrastrukturhärdning, som förbereder för företagsskala. Den här positioneringen är där Lolly *strävar* efter att befinna sig - sidan [Adoption & Governance](/info/adoption-governance.html#status) beskriver hur det testas i praktiken.

## Landskap

![Layout Studio's free canvas, where the colours, faces and assets on offer are the brand's own](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio&width=1440&height=900&dpi=192&waitMs=2400&format=svg&filename=aud-open-canvas)

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

![Deck Studio in the split view - the deck's slides listed as blocks on the left, the laid-out deck rendering on the right](/t/url-shot?url=%2F%23%2Ftool%2Fdeck-studio&width=1440&height=900&dpi=192&waitMs=2600&format=svg&filename=ov2-deck-studio-output)

Deck Studio är ett bra mått på taket här: en hel presentation deklarerad som data, layoutad live på canvasen och exporterad som en inbyggt redigerbar PowerPoint.

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

## Godkänn verktyget, inte filen

![The producer's whole job: type the words. Type, colour and spacing were settled when the tool was approved](/t/url-shot?url=%2F%23%2Ftool%2Fwordmark%3Ftext%3DApproved&width=1440&height=900&dpi=192&waitMs=2000&format=svg&filename=aud-approve-the-tool)

Alla andra verktyg i landskapet producerar en *fil* som sedan måste kontrolleras - en varumärkesansvarig i en Slack-tråd, juridik på ansvarsfriskrivningen, en runda ändringar, ännu en granskning. Lolly flyttar godkännandet **ett steg uppströms**. Varumärkesreglerna - exakta hexkoder, licensierade fontfiler, utfallsmarginaler, avstånd - är hårdkodade i verktygets HTML och CSS, så mallen *kan fysiskt inte* skicka ut en tillgång som bryter mot varumärket. Layouten är själv bärande.

Så du slutar godkänna utdata och börjar godkänna **verktyget** som gör den. Godkänn det en gång, och varje tillgång det någonsin producerar är förgodkänd genom sin konstruktion - ingen människa i loopen, ingen granskningscykel, oavsett volym.

Det här är paradigmskiftet som den deterministiska motorn faktiskt levererar: det är inte en snabbare version av den gamla godkännandeprocessen, det tar bort processen. För det kreativa teamet är det ett skyddsräcke, inte en ersättning - du kastar fortfarande bollen (datan, texten, bilden) och koden är kantskyddet som håller varje kast borta från rännan.

| Att godkänna tillgångar på det gamla sättet | Att godkänna verktyget, på Lolly-sättet |
|---|---|
| Varje färdig fil kontrolleras, en i taget | Verktyget kontrolleras en gång |
| Förfrågan → designern bygger → varumärkesgranskning → juridisk kontroll → ändringar → ny granskning | En parameterändring → färdig tillgång |
| Designer, varumärkesansvarig, juridik och beställare alla i loopen | Producenten, helt på egen hand |
| Dagar per tillgång | Sekunder per tillgång |
| 10 000 tillgångar = 10 000 granskningscykler | 10 000 tillgångar = noll (mallen var redan godkänd) |

## Vad detta erbjuder som är unikt

![Amsterdam's canal rings and road network drawn edge to edge in the brand's own ink, every stroke placed by the template rather than by hand](/t/url-shot?url=%2F%23%2Ftool%2Fstreet-map%3Fcity%3Damsterdam%26theme%3Dlight%26full&width=1440&height=900&dpi=192&waitMs=3200&format=png&cropSelector=%23tool-canvas&filename=ov2-street-map-poster)

- **Vild designpotential levererad säkert i sitt sammanhang.** Verktyg kan uttrycka djärva designidéer inom hårdkodade skyddsräcken.
- **Mjukvarudefinierad innehållsautomation som returnerar den slutgiltiga tillgången.** Input → färdig fil. Inget "nu får du spara den från ditt designverktyg och efterbehandla den."
- **Verktyg kombinerar verktyg.** Ett verktyg kan bädda in ett annat verktygs rendering och returnera den som en del av en enda färdig tillgång, utan någon kodkoppling mellan verktygen - en grundfunktion som ingen produkt för öppen canvas eller DAM-mallar i landskapet erbjuder.
- **Leverantörsneutralitet.** Full kontroll över funktioner och kostnader. Öppen källkodsmotor. Verktyg och tillgångar är git-spårat innehåll, inte inlåsta i en SaaS-databas.

Den första av dem är den som underskattas. En stadskarta av posterkvalitet, ritad som riktiga vektorbanor för vägar och vatten, från en rullgardinsmeny och två färgfält som inte kan riktas utanför varumärket:

