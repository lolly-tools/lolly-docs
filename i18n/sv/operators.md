# Lolly för operatörer

### En framtidssäker strategi för djupförsvar, dataförlustskydd och proveniens - som råkar vara en kreativ produktionsplattform

Det organisatoriska immunförsvaret som omsluter det du redan gör - så att det rutinmässiga kreativa arbete dina team behöver varje dag sker *inom* din perimeter istället för att läcka ut ur den.

**Vad du får ut av det.** Du får vara personen som sa ja till något som är både säkert *och* populärt. Du täpper till ett exfiltreringshål och raderar designbeställningskön i ett och samma drag - den sällsynta säkerhetsvinsten som gör dig mer omtyckt, inte mindre. Inget larm klockan tre på natten för att någon mejlat varumärkesfiler till en underleverantör eller klistrat in kunddata i ett slumpmässigt webbverktyg; färre SaaS-leverantörer, avtal och granskningar att hålla koll på; och ett fullständigt git-spår du kan peka på när någon frågar vem som godkände vad. Du sover gott om natten.

Lolly förtjänar sin plats som ett kreativt verktyg: det raderar designkön och ger alla tillgång till produktionsfärdiga resultat. Men anledningen till att det är *säkert* att dela ut så brett är arkitektonisk. Inget laddas upp, allt är reproducerbart, och varje export kan bära en kryptografisk uppgift om varifrån den kom. Den här sidan berättar säkerhets- och utrullningshistorien.

> **Var det står idag.** Lollys säkerhetsegenskaper är starka till sin konstruktion, och dess kryptografi- och filtolkningsmotorer genomgår SUSE:s infrastrukturhärdning av företagsklass. Förseglingarna, signeringen på enheten och krypteringen nedan är verkliga och försvarbara nu, och mognar mot oberoende certifiering - så där ett avtal kräver certifierad garanti, driftsätt dem som skydd i flera lager medan den processen slutförs.

## Den strategiska fördelen

Det vanliga sättet rutinmässigt kreativt arbete utförs på är en riskyta: filer mejlade till externa designleverantörer, varumärkestillgångar uppladdade till ett dussin SaaS-redigerare, kunddata inklistrad i en främlings webbverktyg för att "bara göra en snabb grafik." Var och en av dessa är data som lämnar din kontroll.

Lolly vänder på det. Arbetet som *drev* dessa läckor - citatkortet, den lokaliserade bannern, evenemangsmärket, den redigerade skärmdumpen - sker nu i ett verktyg som körs på medarbetarens egen enhet, mot ditt varumärke, utan någon server inblandad. Du lade inte till en kontroll ovanpå ett riskabelt arbetsflöde; du ersatte det riskabla arbetsflödet med ett som från grunden saknar exfiltreringsväg.

- **Konfigurationen är din egen.** Motorn och skalen är öppen källkod (MPL-2.0). Lägg på din egen autentisering, telemetri eller CA; hosta det eller låt bli; du har full kontroll över funktioner och kostnader, git-spårat, inte inlåst i en SaaS-databas.
- **Styrning kan vara data, inte en instrumentpanel.** När du vill ha den kontrollen, hantera verktygskatalogen som ett Git-repository - granskning via pull request blir varumärkesgodkännande, med ett fullständigt granskningsspår och omedelbar återställning av varje mall din personal kan röra vid. Det är ett alternativ, inte en skyldighet: team som bara vill skapa saker gör sina egna verktyg i Layout Studio och matar in sina egna filer i katalogen, helt och hållet i appen, utan att någonsin röra git. Se [Införande och styrning](/info/adoption-governance.html).
- **Skyddsräcken är strukturella.** Varumärkesbegränsningar är hårdkodade i mallarna, inte publicerade som riktlinjer som folk kan strunta i. Fel resultat avråds inte bara - det går inte att åstadkomma.

## Radera beställningskön medan innehållet mångfaldigas.

Ett mål med Lolly är **avledning av designbeställningar**: rutinbeställningar som aldrig behöver nå en designer eftersom personen som behövde tillgången gjorde den själv, korrekt, på några minuter. Varje avlett ärende är både en produktivitetsvinst och en fil mindre som byter händer.

Lolly är byggt för att passa hur din organisation faktiskt fungerar - det finns inget enda rätt sätt att driftsätta det på:

- **Driftsätt, servera inte.** Skicka ut Lolly till enheter via din befintliga MDM (Intune, Jamf, Munki…). Det körs lokalt som en dator-/mobilapp eller en offline-PWA - fungerar bakom vilken brandvägg som helst, i vilken luftgapad miljö som helst, utan någon server att underhålla och med IT i kontroll över uppdateringstakten.
- **Endast servera.** Kör en instans inom ditt nätverk (eller bakom en VPN); användare når den i en webbläsare, inget installeras. Publicera ett verktyg en gång, alla har det direkt; koppla ihop med din IdP för åtkomstkontroll.
- **Hybrid.** Lokala appar för offline fältarbete, en alltid uppdaterad webbläsarversion för lånade maskiner - båda pekar mot samma verktygsbibliotek.

Den fullständiga genomgången av driftsättningsmodeller och administration finns i [Driftsättning](/info/deployment.html) och [Konfiguration](/info/configuration.html).

## Verktyg mot exfiltrering

En kategori av Lolly-verktyg finns *specifikt* för att hålla filer inom perimetern. Sekretessverktygen.


- **Ta bort dold data**
 Ta bort plats och all dold identifierande information från dokument och mediefiler.

- **Texthjälp**  
Anonymisera, koda, formatera och bearbeta strukturerad och ostrukturerad text. 

- **Komprimera PDF**
Förhindra all risk för en 'e-postgränskris' där tredjepartswebbverktyg lurar och data 

- **Komprimera PDF**
Förhindra all risk för en 'e-postgränskris' där tredjepartswebbverktyg lurar och data trillar ur fönstret. 

Alla dessa är transformationer på enheten: din fil eller data går in, rensade bytes kommer ut, och **det finns ingen server att ladda upp till**. De är den medvetna motsatsen till det typiska verktyget "ladda upp din fil till en främlings webbplats för att rensa den" som en välmenande medarbetare annars hade tagit till.



## Determinism och reproducerbarhet

Varje verktygsinmatning kan uttryckas som en URL-parameter, och samma indata ger samma fil. Det får två konsekvenser för operatören:

- **En URL är artefakten.** Committa länken, regenerera tillgången vid behov - inga binärfiler checkas in i Git, inget jagande efter "senaste versionen" i chatten. Tillgångs- och verktygs-ID:n är permanenta kontrakt, så en länk som skapas idag går fortfarande att slå upp senare.
- **CLI:t är samma renderingsväg** som GUI:t, så byggpipelines och appen glider aldrig isär. Generera OG-bilder, sociala kort och datavisualiseringar vid byggtillfället, på ett reproducerbart sätt.

## Proveniens och Content Credentials

Exporter kan bära **Content Credentials** - ett signerat [C2PA](https://c2pa.org)-manifest bundet till en hash av filens bytes. Varje senare ändring av filen bryter förseglingen, så en C2PA-medveten verifierare **upptäcker ändringar kryptografiskt, offline**. Autentiseringsuppgiften är manipulations-*avslöjande*: den flaggar manipulation snarare än förhindrar den, vilket är precis det som gör fullständig offline-verifiering möjlig.

- **Aktiverat som standard, på enheten.** Signeringsnyckeln genereras på enheten, är icke-extraherbar (inte ens Lolly kan läsa den), och signeringen sker lokalt - endast valfri identitets*registrering* rör någonsin nätverket.
- **Förtroendenivåer.** En oregistrerad export är strukturellt giltig men signerad anonymt (`untrusted`). Registrera en **verifierad identitet** (kortlivat certifikat från Lolly CA, kopplat till en e-postadress) så rapporterar verifierare som pinnar Lolly-roten `trusted` + signerarens e-postadress. En betrodd tidsstämplingsinstans och grönt ljus från tredjepartsvalidator (C2PA-konformitet) finns på färdplanen. Varje nivå är explicit, och en fil gör bara anspråk på det förtroende den kan bevisa.
- **Autentiseringsuppgiftens livslängd** avgörs av operatören/användaren vid signeringstillfället: 7 / 30 / 90 / 365 dagar, standard 30.
- **Verifiering sker på enheten.** Släpp valfri fil på `/valid` (eller `lolly validate <file>`) för en offline-rapport om huruvida den verkligen skapades med Lolly och är oförändrad sedan dess. Se [Content Credentials-identitet](/info/content-credentials-identity.html).

> **Interoperabilitetsanmärkningar.** Lolly verifierar sina egna autentiseringsuppgifter och många från tredje part offline idag. Två interop-punkter pågår: att fullt ut läsa C2PA-anspråks-**v2**-manifest från andra producenter, och WebM - som ännu inte har någon standardiserad C2PA-mappning, så Lolly bifogar manifestet som en Matroska-del (tredjepartsverktyg verifierar Lollys MP4 direkt; WebM följer när standarden har satt sig).

## Kryptering och lösenordsskydd

För filer som måste färdas låsta sker allt på enheten:

- **PDF-öppningslösenord** - *Standard* är ett 40-bitars RC4-avskräckande skydd (öppnas var som helst, kan färdas i en länk); *Stark* är **AES-256** (PDF 2.0), skrivs in vid export och läggs aldrig i en länk.
- **Låsta nedladdningar** - en ZIP, en Projects-mapp eller en batchkörning kan låsas i sin helhet: *Standard* ZipCrypto (svagt, universellt) eller *Stark* **AES-256** (WinZip AE-2). Skydd i flera lager: varje PDF inuti en Stark-zip är *också* individuellt AES-256-låst, så den förblir låst efter uppackning.
- **Lösenordsskyddade delningslänkar** - hela länktillståndet är AES-256-krypterat under en PBKDF2-härledd nyckel; endast chiffertext färdas, lösenordet finns aldrig i länken, och dekrypteringen sker i mottagarens webbläsare.

## Redo för luftgap

Luftgap är en **förstklassig driftsättning**, inte ett specialläge - Lolly körs med inget nätverk vid renderingstillfället direkt ur lådan. Webbskalet är en offline-first PWA (service worker); typsnitt och WASM lagras på enheten; verktygstillstånd sparas lokalt via värdbryggan, aldrig `localStorage`. Alla verktyg som når nätverket gör det endast via en **tillåtelselistad** `host.net`-funktion som måste deklareras i dess manifest - ett skal som inte kan (eller vill) uppfylla det stubbar ut det. Skicka ut skalen till enheter via din MDM, eller servera en instans inom ditt nätverk, så renderar, exporterar, krypterar och verifierar en fullständigt luftgapad installation autentiseringsuppgifter utan något att ringa hem till.

## Bra att veta

Några saker värda att ha klart för sig innan du rullar ut det:

- **Härdning pågår.** Kryptografin och parsrarna genomgår SUSE:s härdning av företagsskala (se ovan) - starkt till sin konstruktion idag; driftsätt som skydd i flera lager där ett avtal kräver certifierad garanti.
- **Verktygskrokar är *inte* en säkerhetssandlåda.** Ett verktygs valfria `hooks.js` körs med värdbryggan injicerad, men i ett webbläsarskal exekverar det i sidans realm och *kan* nå `window`/`document`/`fetch`. Behandla verktygskod på samma sätt som du behandlar all kod du kör - granska den. Det är därför en organisation som kör en delad katalog kan grinda den genom Git-granskning; oavsett vilket, kör bara verktyg du har granskat tills Worker-isolering lanseras.
- **Content Credentials är manipulations-avslöjande.** De upptäcker ändringar snarare än förhindrar dem - se interoperabilitetsanmärkningarna ovan.
- **Två krypteringsnivåer.** *Standard*-lås är snabba, universella avskräckningar; *Stark* (AES-256) är fullständigt skydd - ta till Stark för allt känsligt, med förbehållet att den vill ha en modern läsare.

## Vart du kan gå härnäst

- **[Införande och styrning](/info/adoption-governance.html)** - personas, avledningsmåttet och styrning-som-data i sin helhet.
- **[Driftsättning](/info/deployment.html)** - driftsätt/servera/hybrid, MDM och självhostning av tjänsterna.
- **[Konfiguration](/info/configuration.html)** - profiler, varumärkespaket, funktionsspärrar och feature flags.
- **[Integritetspolicy](/info/privacy.html)** - det formella uttalandet "samlar inget, laddar upp inget".
