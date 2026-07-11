# Vanliga frågor

Vanliga frågor som visas i accordionmenyn på landningssidan `/info`.

**Så här underhåller du filen:** varje `##`-rubrik nedan är en fråga; allt under den
(fram till nästa `##`) är svaret. Svaren använder samma lättviktiga markdown som
resten av webbplatsen — separera stycken med en tom rad. Lägg till, ta bort eller
ordna om frågorna här och kör om `npm run build:info` (eller `npm run dev:web`).
Allt ovanför den första `##`-rubriken (denna titel och dessa anteckningar) ignoreras av byggprocessen.

## Vad händer när jag väljer att delta på /profile-sidan?

När du använder Lolly för första gången är allt du skriver, var som helst, helt privat tills du medvetet vill att den informationen ska nå ut via media eller en delningslänk (om du är online).

När du har valt att delta bäddar vi in en del av din profilinformation som proveniens i tillgångar och paket för att identifiera dig som källan.

Lolly genererar stora mängder innehåll. Vi tillämpar en strikt dataminimeringsprincip för att minska risken.

### Vad är funktionsflaggor?

Funktionsflaggor slår på eller av delar av Lolly. Vanligtvis är det en administratör som styr dessa — med Lolly är det du som har kontrollen.

## Hur får jag tag i mobil- eller skrivbordsapparna?

Vem som helst kan distribuera sina egna appar — verktygen och konfigurationen av dessa appar bör variera kraftigt beroende på vilken målgrupp de är avsedda för. Så det finns ingen enda app, om du inte har byggt den själv eller fått den av någon relevant part.

## Varför namnet "Lolly Tools"?

**Lolly** — för att frihet är sött.
**Tools** är overksamma när de inte används. Spionerar inte på dig, kör inga hemliga program, 
sätt dem i arbete — dina order, handlingar och villkor.

**Lolly** är en australisk, nyzeeländsk och brittisk term för "godis" eller "karameller". Precis som klubbor (lollies) är verktyg mycket smakrika för dem som behöver dem.

Vi skrattar också åt tiden och pengarna vi sparar med det här sättet att göra det på.

## Vilka hinder kan jag förvänta mig när jag inför Lolly?

Lolly passar in överallt där du redan genererar filer — CLI:t är samma motor
som appen, så ett pipeline-jobb som körs klockan 02 på natten inte kan avvika från det en person förhandsgranskar i
webbläsaren. Friktionen vid införandet är sällan teknisk; den är organisatorisk. Räkna med följande:

**Verktyg och varumärkeskatalogen måste skapas.** Lolly är en plattform, inte ett
färdigt paket med dina mallar. Någon måste definiera tillgångskatalogen (loggor,
paletter, typsnitt som permanenta ID:n) och skriva manifest + mall för varje
utdatatyp.

**Styrningen sker i git.** "PR-granskningen *är* modereringen" är elegant för
utvecklare men obekant för de flesta varumärkes- och marknadsföringsteam. Om de som
äger varumärkesbesluten inte lever i git behöver du ett arbetsflöde som överbryggar
dem — annars blir IT i tysthet den strategiska designpartnern och den bredare
institutionella grindvakten. Något som föredras av många i långvariga
produktionsmiljöer.

**Det är medvetet smalt — beskriv det så.** Lolly är inte till för skräddarsytt
eller hjälte-innehåll. Det *är* din personliga DAM — hydrerad och superladdad av ditt
designsystem, dina verktyg och din katalog — och det *har* faktiskt en öppen kanvas
(Layout Studio), men även där följer färger, typsnitt och tillgångar de aktiva
designglobalerna, så fri placering håller sig ändå inom systemet. Jämfört med Figma
eller Canva kommer det att verka begränsat. Bedömt för vad det faktiskt är —
operationaliserad, återkommande tillgångsgenerering i massiv skala — finns inget som
kan mäta sig. Fel inramning är det vanligaste bakslaget.

**Förändringsledning på den producerande sidan.** Befintliga processer fungerar
redan idag, även om resultatet inte är varumärkesriktigt. Att peka om dem mot
motorn innebär omtestning och omlärande, och "vi kan redan skapa filer" blir
ursäkten för att inte migrera. Börja med att konvertera ett produktionsresultat med
hög synlighet och visa före/efter sida vid sida.

Lolly lyfter allt.


## Vad skiljer utilities från vanliga verktyg?

**Enkelt svar →** Utilities behöver inte alltid rendera, och kan därför få en annan UX.

**Egentligt svar →** Anledningen till att utilities kan finnas inuti Lolly Tools är för att lägga till ännu ett "bekvämlighetslager" av försvar som motverkar dataexfiltrering.

Varför? Därför att det är känt att människor varje dag tar **konfidentiellt innehåll de redan har** och lämnar
det till en slumpmässig webbplats för att utföra en liten mekanisk åtgärd:

- "**Komprimera den här PDF:en**" → laddar upp ett kontrakt / lönebesked / styrelsepresentation till okända aktörer.
- "**konvertera HEIC till JPG**" → laddar upp personliga foton (med GPS-EXIF) till en annonsfinansierad tjänst
- "**beskär / ändra storlek på den här bilden**" → laddar upp en produktskärmdump eller en icke-lanserad tillgång
- "**formatera den här JSON-filen**" / "avkoda den här JWT:n" → klistrar in API-svar, token och hemligheter i en formaterare
- "**slå ihop de här PDF-filerna**" → laddar upp **två dokument som aldrig borde dela server**

Dessa webbplatser och deras enorma svans av kloner är **inte pålitliga som standard** med
okänd lagringstid, okända jurisdiktioner, okända underleverantörer och en
annons-/affiliateaffärsmodell som har alla incitament att behålla det du ger dem. Åtgärden är
trivial; **innehållet är kostnaden.**

Vi vinner kampen om styrning genom utmärkt bekvämlighet och service.

## Kan Lolly redigera och rendera mina Figma-, Penpot-, Illustrator- eller InDesign-filer?

Ja. Öppna **Layout Studio** och klicka på **Importera en design**: den tar emot en inbyggd Figma **.fig** (Save local copy), en Penpot **.penpot**-export, en Illustrator **.ai** eller **.pdf**, en InDesign **.idml** (File → Export → InDesign Markup), eller **valfri SVG** (den breda dörren — nästan alla designprogram kan exportera det). Allt tolkas helt på din egen enhet, inget konto eller plugin behövs.

Lager kommer in som redigerbara rutor på den öppna kanvasen: text går att skriva om, former förblir former, bilder ansluter till ditt bibliotek på enheten, och typsnitt och färger följer de globala varumärkesinställningarna. Spara den så blir layouten en återanvändningsbar, URL-adresserbar mall som vem som helst med Lolly kan fylla i på nytt — och du kan blanda in levande verktyg (en QR-kod, ett diagram) som renderas om vid inläsning. Därifrån renderas den precis som allt annat i Lolly — SVG, PDF, PNG och resten, reproducerbar från sin URL. Se [Importera en design](/info/design-import.html).

## Vad händer den 29 augusti?

SUSE-märkta verktyg lämnar projektet, och nya generiska exempelverktyg definierade av användaren tar över.

SUSE kommer att driva sin egen Lolly för att skydda sina varumärken.

## Hur mycket håller SUSE privat? (även känt som: när sker rug-pullen)

SUSE:s varumärken och märkta verktyg är endast för demonstration, fram till den 29 augusti. Du hittar en omärkt instans av Lolly på [lolly.ART](https://lolly.art).

SUSE är ett företag inom infrastruktur för öppen källkod för företag, med mer än tre decennier av ledarskap inom plattformar. Bland produkterna finns Linux, Cloud Native, Edge och AI-infrastrukturlösningar i företagsklass.

Ur SUSE:s perspektiv handlar det om att leva som man lär när det gäller suveränitet och säkerhet. Per idag är sannolikheten att SUSE gör Lolly till en produkt näst intill noll.

Full transparens: SUSE *håller* på att bygga ut interna verktyg för att integrera Lolly i sina IT-system — det handlar om SUSE:s interna uppsättning, inte om offentlig kontra privat utveckling.

På tal om den offentliga sidan siktar Lolly på att byggas genom [Open Build Service](https://openbuildservice.org/), med säkra leveranskedjeartefakter levererade av [SUSE Application Collection](https://apps.rancher.io/applications).

Vi kommer att bygga så mycket vi kan i det öppna — du kommer bara inte att se SUSE-märkta verktyg särskilt länge, och inte heller SUSE:s interna arbetsstyrka och kommersiella processer, som är orelaterade till Lolly.

## Vilken smak har Lolly-loggan?

Vissa säger Lime, andra säger Mint och ibland Äpple — Lolly bidrar med sötman, du skapar smaken!
