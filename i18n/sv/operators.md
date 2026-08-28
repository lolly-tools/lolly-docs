# Lolly för operatörer

### En försvar-på-djupet-säkerhets- och underrättelsestrategi - som råkar vara en kreativ produktionsplattform

Det noll-tillit-organisatoriska immunförsvaret som lindas runt det ni redan gör - så att det rutinmässiga kreativa arbete era team behöver varje dag sker *innanför* er perimeter i stället för att läcka ut ur den.

**Vad du får ut av det.** Du får vara personen som sa ja till något som är både säkert *och* populärt. Du täpper till ett läckagehål, vinner ny förmåga och raderar en förfrågningskö i ett och samma drag - den ovanliga säkerhetsvinsten som gör dig mer omtyckt, inte mindre. Inget samtal klockan tre på natten från juridikavdelningen för att embargobelagda filer eller kunddata hittat vägen in i ett slumpmässigt webbverktyg; färre SaaS-leverantörer, avtal och revisioner på ditt bord; och ett fullt reproducerbart granskningsspår du kan peka på när någon frågar. Du sover bättre, och lyser upp några dagar samtidigt.

Lolly är inget andraklassens kreativt verktyg: det lägger utdata av produktionskvalitet i allas händer, och den varumärkesstyrda skapandeupplevelsen är oöverträffad. Anledningen till att det är *säkert* att dela ut i stor skala är arkitektonisk: inget laddas upp som du inte själv lagt dit, varje resultat är reproducerbart och varje export kan bära flera lager av branschledande kryptografiska register. Oavsett hur ett dokument nått ditt skrivbord kan du se dess fullständiga proveniens, om det manipulerats och om du kan återskapa det pixelperfekt.

> **Nuläget.** Lollys säkerhetsegenskaper är starka från grunden, och dess kryptografi- och filtolkningsmotorer genomgår SUSE:s infrastrukturhärdning i företagsklass. Förseglingarna, signeringen på enheten och krypteringen nedan är verkliga och försvarbara redan nu, och mognar mot oberoende certifiering - så där ett avtal kräver certifierad säkerhet, använd dem som försvar på djupet medan den processen slutförs.

## Den strategiska fördelen

Det vanliga sättet rutinmässigt kreativt arbete utförs på är en ansvarsyta: filer mejlade till externa designkonsulter, varumärkestillgångar uppladdade till ett dussin SaaS-redigerare, kunddata inklistrad i en främlings webbverktyg för att "bara göra en snabb grafik". Vart och ett av dessa är data som lämnar er kontroll.

Lolly vänder på det. Arbetet som *drev* de där läckorna - citatkortet, den lokaliserade bannern, evenemangsbrickan, den redigerade skärmdumpen - sker nu i ett verktyg som körs på medarbetarens egen enhet, mot ert varumärke, utan någon server inblandad. Ni lade inte till en kontroll ovanpå ett riskabelt arbetsflöde; ni ersatte det riskabla arbetsflödet med ett som inte har någon läckväg över huvud taget.

- **Konfigurationen är din.** Motorn och skalen är öppen källkod (MPL-2.0). Lägg på din egen autentisering, telemetri eller CA; hosta det eller låt bli; du har full kontroll över funktioner och kostnader, git-spårat, inte inlåst i en SaaS-databas.
- **Styrning kan vara data, inte en instrumentpanel.** När du vill ha den kontrollen, hantera verktygskatalogen som ett Git-repo - pull request-granskning blir varumärkesgodkännande, med en fullständig granskningslogg och omedelbar återställning av varje mall din personal kan komma åt. Det är ett alternativ, inte en skyldighet, och det tillhör precis ett skrivbord: skapare arbetar helt i appen, sparar det de gör som en **session** och för det vidare som en delningslänk, en säkerhetskopia eller ett livesamarbete - inget av det behöver git. När en av de sessionerna förtjänar att bli en permanent utgångspunkt öppnar den som sköter driftsättningen länken, sparar dess värden som en **mall** på det verktyget i varumärkespaketet och committar. Från och med då dyker den upp i verktygets "Ny från mall"-väljare och kan djuplänkas som `?template=<id>`. Git är administratörens låsande steg, används en gång, och aldrig något en skapare behöver röra. Se [Införande och styrning](/info/adoption-governance.html).
- **Skyddsräcken är strukturella.** Varumärkesbegränsningar är inbyggda i mallarna, inte publicerade som riktlinjer folk kan ignorera. Fel utdata avråds inte - den kan inte ens uppstå.

> **Ni styr hela stafetten.** En kreatör skriver reglerna och en utvecklare skalar dem, men det är operatören som gör den livscykeln säker att köra i hela organisationen - samma verktyg som låter en säljare självbetjäna sig på ett flygplan är ett ni kan grinda genom Git-granskning, driftsätta genom er MDM och verifiera kryptografiskt. Se hur rollerna samverkar i [Livscykeln för en kampanj](/info/overview.html#the-lifecycle-of-a-campaign), och hur ni styr den i [Adoption och styrning](/info/adoption-governance.html).

## Radera förfrågningskön samtidigt som innehållet ökar.

Ett mål med Lolly är **avledning av designförfrågningar**: rutinförfrågningar som aldrig behöver nå en designer eftersom personen som behövde tillgången gjorde den själv, korrekt, på några minuter. Varje avledd ärende är både en produktivitetsvinst och en fil mindre som byter händer.

Lolly är byggt för att passa hur er organisation faktiskt arbetar - det finns inget enda rätt sätt att driftsätta det på:

- **Driftsätt, servera inte.** Skicka Lolly till enheter via er befintliga MDM (Intune, Jamf, Munki…). Det körs lokalt som en dator-/mobilapp eller en offline-PWA - fungerar bakom vilken brandvägg som helst, i vilken luftgapad miljö som helst, utan server att underhålla och med IT i kontroll över uppdateringstakten.
- **Endast servera.** Kör en instans inuti ert nätverk (eller bakom en VPN); användare når den i en webbläsare, inget installerat. Publicera ett verktyg en gång, alla har det direkt; para ihop med er IdP för åtkomstkontroll.
- **Hybrid.** Lokala appar för offline-fältarbete, en alltid aktuell webbläsarversion för lånade maskiner - båda pekar mot samma verktygsbibliotek.

De fullständiga driftsättningsmodellerna och administrationsgenomgången finns i [Distribution](/info/deployment.html) och [Konfiguration](/info/configuration.html).

## Verktyg mot dataläckage

En kategori Lolly-verktyg - integritetsverktygen - finns *specifikt* för att hålla filer innanför perimetern.


- **Strip hidden data**
 Ta bort plats och all dold identifierande information från dokument och mediefiler.

- **Text Helper**  
Anonymisera, koda, formatera och manipulera strukturerad och ostrukturerad text. 

- **Compress PDF**
Krymp en för stor PDF på enheten, så att ingen behöver ta till en tredjeparts "komprimera min PDF"-webbplats så fort en fil är för stor för att mejla - vilket är precis där data läcker ut. 

Alla dessa är transformationer på enheten: din fil eller data går in, rensade byte kommer ut och **det finns ingen server att ladda upp till**. De är den medvetna motsatsen till det typiska "ladda upp din fil till en främlings webbplats för att rensa den"-verktyget som en välmenande medarbetare annars tar till.

![Strip Hidden Data: filen anländer på ritytan och emblemet anger tydligt att inget laddas upp](/t/url-shot?url=%2F%23%2Ftool%2Fstrip-data&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=aud-strip-data)

Text Helper är samma affär för text i stället för filer. Det är den flikade arbetsbänken en medarbetare annars skulle leta efter på en främlings webbplats, och den deklarerar inga inmatningar alls eftersom inget den rör vid någonsin lämnar sidan.

![Text Helpers arbetsbänk - en rad med åtgärdsflikar ovanför ett kort som anger att inget du klistrar in lämnar din enhet](/t/url-shot?url=%2F%23%2Ftool%2Ftext-helper&width=1200&height=750&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-content&dark=1&filename=ov2-text-helper)

Compress PDF kompletterar samlingen: den för stora bilagan krymps under en kvalitetsinställning du väljer, på den maskin som redan har den.

![Compress PDF - en kvalitetsnivå och en gråskale-omkopplare till vänster, en dropzon för din egen PDF till höger och ingen uppladdning någonstans](/t/url-shot?url=%2F%23%2Ftool%2Fcompress-pdf&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=ov2-compress-pdf)

## Determinism och reproducerbarhet

Varje verktygsinmatning kan uttryckas som en URL-parameter, och samma inmatning ger samma fil. Det får två konsekvenser för den som driftar:

- **En URL är artefakten.** Committa länken, generera tillgången på nytt vid behov - inga binärer incheckade i Git, inget jagande efter "senaste versionen" i chatten. Tillgångs- och verktygs-ID är permanenta kontrakt, så en länk som skapas idag går fortfarande att lösa upp senare.
- **CLI:n är samma renderingsväg** som gränssnittet, så byggpipelines och appen glider aldrig isär. Generera OG-bilder, sociala kort och datavisualiseringar vid byggtillfället, reproducerbart.

Prompt to Image är determinism i sin enklaste form: texten är hela inmatningen, den typsatta bilden är hela utmatningen och samma text sätts alltid likadant.

![Prompt to Image - ett textblock med en prompt satt i en kvadratisk bild, utan något i resultatet som inte fanns i indata](/t/url-shot?url=%2F%23%2Ftool%2Fprompt-card%3Ffull&width=1440&height=900&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-prompt-to-image)

## Proveniens och Content Credentials

![Verify-dropzonen tar emot vilken fil som helst, från vilken källa som helst, och läser den utan ett enda nätverksanrop](/t/url-shot?url=%2F%23%2Fverify&width=1440&height=900&dpi=192&waitMs=1800&waitSelector=.valid-drop&cropSelector=.valid-drop&format=svg&walker=1&dark=1&filename=aud-verify-drop)

Exporter kan bära **Content Credentials** - ett signerat [C2PA](https://c2pa.org)-manifest bundet till en hash av filens byte. Varje senare ändring av filen bryter sigillet, så en C2PA-medveten verifierare **upptäcker ändringar kryptografiskt, offline**. Referensen är manipulations-*synlig*: den flaggar manipulation snarare än förhindrar den, vilket är precis det som gör helt offline verifiering möjlig.

- **På som standard, på enheten.** Signeringsnyckeln genereras på enheten, är oextraherbar (inte ens Lolly kan läsa den) och signering sker lokalt - endast valfri identitets-*registrering* rör nätverket alls.
- **Förtroendenivåer.** En oregistrerad export är korrekt utformad men signerad anonymt (`untrusted`). Registrera en **verifierad identitet** (kortlivat certifikat från Lolly CA, kopplat till en e-postadress) så rapporterar verifierare som litar på Lolly-roten `trusted` + signerarens e-post. En betrodd tidsstämpelmyndighet och tredjepartsvalidator-godkännande (C2PA-konformitet) finns på färdplanen. Varje nivå är explicit, och en fil hävdar aldrig mer förtroende än den kan bevisa.
- **Referensens livslängd** är operatörens/användarens val vid signeringstillfället: 7 / 30 / 90 / 365 dagar, standard 30.
- **Lolly Imprint.** En andra, kompletterande signal som är **på som standard**: ett osynligt pixelvattenmärke inbakat i rasterexporter (och de Lolly-renderade rastren inuti en PDF/PPTX, aldrig en användares egen inbäddade bild). Där referensen dör vid varje behållarändring överlever Imprint en omsparning eller skärmdump - en beständig "dessa pixlar passerade genom Lolly"-ledtråd, endast närvaro, ingen personlig data. Det är säkerhet genom dunkelhet, inget hårdgjort skydd, och kompletterar referensen snarare än ersätter den. `imprint=0` väljer bort det.
- **Beständiga Content Credentials (valbart).** En rasterexport kan dessutom bära ett osynligt *beständigt* märke som kodar en löst bunden identifierare, så att C2PA-referensen kan återvinnas även efter att en uppladdning på sociala medier eller en omsparning har rensat bort filens metadata - fallet där en vanlig referens annars skulle gå förlorad. Det är endast för raster och kostar ett neuralt kodningssteg, så det är av som standard (`durable=1` för att slå på det). Lolly känner igen sitt eget beständiga märke offline på `/verify` redan idag; återvinning med tredjepartsverktyg (t.ex. Adobe) följer när branschens lösning för lös bindning finns på plats.
- **Verifiering sker på enheten.** Släpp valfri fil på `/verify` (eller `lolly validate <file>`) för en offlinerapport om huruvida den verkligen skapades med Lolly och är oförändrad sedan dess. Webbens Verify-vy flaggar även AI-genererat innehåll, upptäcker Lolly Imprint, verifierar **SEAL**-signaturer (en bytenivå-signatur - utan ett enda nätverksanrop: motorn tar en *injicerad* DNS-nyckelresolver och inget skal injicerar en idag, så en post som bär sin egen infogade `pk=`-nyckel verifieras helt offline medan en DNS-nyckelbaserad rapporterar "ingen nyckelresolver och ingen infogad nyckel" i stället för att nå ut - se `SealPublicKeyResolver` i `engine/src/seal.ts`), valfritt djupskannar efter tredjeparts pixelvattenmärken (en engångsnedladdning av en modell på enheten) och visar dold data - allt utan att ladda upp filen. Se [Content Credentials Identity](/info/content-credentials-identity.html).

> **Anteckningar om interoperabilitet.** Lolly verifierar sina egna referenser och många tredjepartsreferenser offline redan idag, inklusive läsning av C2PA claim-**v2**-manifest från andra producenter. Två behållarformat är fortfarande under arbete, båda för att C2PA ännu inte har någon standardiserad mappning för dem, så Lolly bär referensen på en egen plats och det är Lollys verifierare som läser tillbaka den: **WebM** (manifestet åker som en Matroska-bilaga) och **Ogg/Opus** (ett `C2PA=`-fält i OpusTags-kommentarhuvudet, med det byteintervallet uteslutet från bindningen så att ljudet fortfarande hashar identiskt). Allt annat följer specifikationen - tredjepartsverktyg verifierar Lollys MP4, M4A, MP3, WAV, PNG, JPEG och PDF direkt. Se `engine/src/c2pa-containers.ts` för båda mappningarna; de konvergerar mot standarden när den blir klar.

## Kryptering och lösenordsskydd

För filer som måste färdas låsta sker allt på enheten:

![Låskortet i exportpanelen: ett lösenord och ett explicit val mellan de två nivåerna](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools%26format%3Dpdf%26password%3Ddemo%26options&width=1440&height=900&dpi=192&waitMs=2200&cropSelector=.export-pdfpass&walker=1&format=svg&dark=1&filename=aud-pdf-lock)

- **PDF-öppningslösenord** - *Standard* är ett 40-bitars RC4-avskräckande (öppnas var som helst, kan färdas i en länk); *Strong* är **AES-256** (PDF 2.0), skrivet vid export och aldrig lagt i en länk.
- **Låsta nedladdningar** - en ZIP, en Projects-mapp eller en batchkörning kan låsas helt: *Standard* ZipCrypto (svagt, universellt) eller *Strong* **AES-256** (WinZip AE-2). Försvar på djupet: varje PDF inuti en Strong-zip är *också* individuellt AES-256-låst, så den förblir låst efter uppackning.
- **Lösenordsskyddade delningslänkar** - hela länktillståndet är AES-256-krypterat under en PBKDF2-härledd nyckel; endast krypterad text färdas, lösenordet finns aldrig i länken och dekryptering sker i mottagarens webbläsare.

## Redo för luftgap

Luftgap är en **förstklassig driftsättning**, inget specialläge - Lolly körs utan nätverk vid rendering direkt ur lådan. Webbskalet är en offline-first PWA (service worker); typsnitt och WASM lagras på enheten; verktygstillstånd lagras lokalt via värdbryggan, aldrig `localStorage`. Det stödda sättet för ett verktyg att nå nätverket är en **tillåtelselistad** `host.net`-förmåga det deklarerar i sin manifest - ett skal som inte kan (eller inte vill) uppfylla det stubbar ut det. Det är ett portabilitetskontrakt snarare än en tvingad gräns (se anteckningen om hooks nedan), vilket är varför granskning av verktygskod förblir kontrollen - även om det på en luftgapad enhet inte finns något att nå åt något håll. Distribuera skalen till enheter via din MDM, eller servera en instans inuti ditt nätverk, och en helt luftgapad installation renderar, exporterar, krypterar och verifierar referenser utan något att ringa hem till.

## Bra att veta

Några saker värda att ha klart för sig innan du rullar ut det:

- **Härdning pågår.** Kryptografin och parsarna genomgår SUSEs härdning i företagsskala (se ovan) - stark till sin design redan idag; distribuera som försvar på djupet där ett avtal kräver certifierad säkerhet.
- **Verktygshooks är *inte* en säkerhetssandlåda.** Ett verktygs valfria `hooks.js` körs med värdbryggan injicerad, men i ett webbläsarskal exekverar det i sidans realm och *kan* nå `window`/`document`/`fetch`. Behandla verktygskod som du behandlar all kod du kör - granska den. Det är därför en organisation som driver en delad katalog kan grinda den via Git-granskning; kör i vilket fall bara verktyg du har granskat tills Worker-isolering lanseras.
- **Content Credentials är manipulations-synliga.** De upptäcker ändringar snarare än förhindrar dem - se anteckningarna om interoperabilitet ovan.
- **Två krypteringsnivåer.** *Standard*-lås är snabba, universella avskräckningsmedel; *Strong* (AES-256) är fullt skydd - ta till Strong för allt känsligt, med tanke på att det kräver en modern läsare.

## Fristående, eller styrt av ett kontrollplan

Två former, och du väljer per driftsättning. **Fristående är standard och behöver ingen server:** Lolly renderar på enheten, varje producent arbetar i appen, och git-som-data-styrningen ovan är helt valfri - en enskild organisation kan köra det här repot helt utan något hostat. **När du vill ha organisationsövergripande kontroll, lägg till ett kontrollplan.** [lolly.work](https://lolly.work) är en separat, öppen källkods-tjänst (MPL-2.0) du hostar - eller utvärderar i den hostade sandlådan - som styr skalet live: SSO-spärrad inloggning, policy för funktionsflaggor / export / vattenstämpel, overlägg för verktygsindata, katalogfederation, godkännanden och en hash-kedjad granskningslogg, allt levererat till skalet utan någon kodändring här. Den är varumärkesagnostisk (konfiguration plus en paketmontering), använder det här repots motor och paket omodifierade, och blir aldrig renderingsvägen: Lolly renderar fortfarande på enheten från grunden. OSS = individuell frihet; OSS + kontrollplan = organisatorisk frihet.

## Vart du ska gå härnäst

- **[Security & Verification](/info/security.html)** - standarderna, primitiverna, förtroendemodellen och testningen bakom referenserna och krypteringen ovan.
- **[Adoption & Governance](/info/adoption-governance.html)** - personas, avledningsmåttet och styrning-som-data i sin helhet.
- **[Deployment](/info/deployment.html)** - distribuera/servera/hybrid, MDM och egen driftsättning av tjänsterna.
- **[Configuration](/info/configuration.html)** - profiler, varumärkespaket, förmågespärrar och funktionsflaggor.
- **[Privacy Policy](/info/privacy.html)** - det formella uttalandet om vad som samlas in, lagras och skickas, och vad som inte gör det.
- **[Server Surface](/info/server-surface.html)** - den fullständiga inventeringen av vad som körs serversidan (två valfria komponenter) jämfört med på enheten.
