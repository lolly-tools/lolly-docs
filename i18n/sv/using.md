# Använda Lolly

En praktisk guide till att faktiskt *använda* appen - att öppna ett verktyg, arbeta med arbetsytan, exportera, spara och dela. Allt här körs **på din enhet**: inget konto, ingen uppladdning, ingen internetuppkoppling krävs efter den första inläsningen.

> Ny här? [Snabbstart](/info/quickstart.html) får dig att skapa på några minuter, och [Lolly för operatörer](/info/operators.html) beskriver hur du installerar/driftsätter appen; den här sidan handlar om att använda den när den väl är öppen.

## Öppna ett verktyg

![A tool's split view - the control stack on the left, and the live horizontal bar chart it draws on the right](/t/url-shot?url=%2F%23%2Ftool%2Fd3%3Fct%3Dbar%26t%3DExample%2520data%26st%3DSample%2520values%252C%2520not%2520a%2520real%2520dataset%26d%3DMonth%252CSeries%2520A%252CSeries%2520B%252CSeries%2520C%250AJan%252C12%252C9%252C5%250AFeb%252C18%252C14%252C7%250AMar%252C24%252C17%252C11%250AApr%252C29%252C23%252C15%26lg%3D1&width=1440&height=900&dpi=192&waitMs=2500&format=svg&filename=vt-tool-split-view)

![The tool gallery - every tool as a card, grouped by category](/t/url-shot?url=%2F%23%2F&width=1440&height=900&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&tolerance=0.03&walker=1&format=svg&localize=1&filename=gallery)


Startskärmen är **galleriet** - alla verktyg, grupperade efter kategori. Klicka på ett kort för att öppna verktyget; om du har arbetat med det tidigare återupptar en **Fortsätt**-knapp din senaste session. Använd sökrutan för att filtrera efter namn.

Varje verktyg är en delad vy: **kontroller** på ena sidan, en live **förhandsvisning** (arbetsytan) på den andra. Ändra en kontroll så uppdateras förhandsvisningen omedelbart.

> Några verktyg (som **Layout Studio**) öppnas istället som en **fri arbetsyta** - en kromfri yta för direktmanipulation där du drar, ändrar storlek på, roterar och snäpper fast rutor med text, former och bilder, och dubbelklickar för att redigera text direkt på plats. Den exporteras via samma renderingsväg som alla andra verktyg, så arbetsytan *är* filen. Se [Den fria arbetsytan](#the-free-canvas-layout-studio) nedan.

## Arbetsytan (förhandsvisning)

![The zoom HUD in the corner of the canvas - minus, the live percentage, plus, Fit, then the theme and sound toggles](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&css=.stage-nav%7Bopacity%3A1!important%7D&cropSelector=.stage-nav&format=svg&filename=use-zoom-hud)

Förhandsvisningen visar alltid exakt det som kommer att exporteras.

**Dator**

- **Zoom:** Cmd/Ctrl-scroll, eller nyp ihop på en styrplatta - zoomningen centreras kring pekaren.
- **Panorera:** håll ned **blanksteg** och dra, eller dra med **mittenmusknappen**. (Vanliga klick är fortfarande fria för att klicka på delar av designen.)
- **Tangentbord:** `0` = anpassa till fönster · `1` = 100 % · `+` / `−` = zoom.
- **Zoom-HUD:** den lilla kontrollen `−  NN%  +  Fit` i hörnet. Klicka på procentsatsen för att växla mellan Anpassa och 100 %.

**Pekskärm**

- **Nyp ihop** för att zooma, **dra** för att panorera, **dubbeltryck** för att återställa till anpassad vy.

**Klicka för att hoppa till en kontroll:** klicka på valfritt element i designen så får motsvarande inmatningsfält i sidopanelen fokus och rullas fram i vyn - för en upprepande radgrupp fälls exakt den rad du klickade på ut, så att redigera det du ser bara är ett tryck bort.

En ändring av måtten återställer alltid vyn till en ren anpassning.

### Den fria arbetsytan (Layout Studio)

![Layout Studio's free canvas - the artboard with its surrounding pasteboard](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio&width=1440&height=900&dpi=192&waitMs=2000&format=svg&localize=1&filename=layout-studio)

Verktyg med fri arbetsyta lägger till en arbetsyta *runt* ritytan, som en formgivares arbetsbord:

- **Mellanlagring utanför ytan.** Dra en ruta förbi ramens kant så förblir den helt **synlig och valbar** - parkera element vid sidan medan du arrangerar kompositionen och dra sedan tillbaka dem. Allt utanför ramen är **lätt nedtonat** så att exportområdet alltid går att uppfatta med en blick, och ramen behåller sin skugga för att markera exakt var filen börjar.
- **Bara ramen exporteras.** Den exporterade filen begränsas av ritytan - allt som lämnas utanför (eller den del av en ruta som hänger över kanten) beskärs helt enkelt bort ur resultatet, i både raster- och vektorformat.
- **Zooma ut förbi Anpassa** (ner till 20 %) för att se hela arbetsbordet när du har placerat saker långt utanför ramen.
- **Ritytan kan ändra storlek.** Att ändra exportmåtten ändrar storlek på ramen på plats; rutorna behåller sina positioner, så du kan omrama en layout kring befintligt innehåll.

## På en telefon

![The free-canvas tool rail: a drag grip, the Lolly menu, then Pointer, Add a box, Pen and Timeline](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio&width=1440&height=900&dpi=192&waitMs=2600&css=.fc-toolbar%7Bopacity%3A1!important%7D&cropSelector=.fc-toolbar&format=svg&filename=pen-editor-rail)

![Two pen paths rendered straight from a link: a stroked S-curve and a closed filled blob](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio%3Fboxes%3D%5B%7B%22id%22%3A%22paper%22%2C%22kind%22%3A%22box%22%2C%22x%22%3A0%2C%22y%22%3A0%2C%22w%22%3A1080%2C%22h%22%3A1080%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23ffffff%22%7D%2C%7B%22id%22%3A%22curve%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A140%2C%22y%22%3A180%2C%22w%22%3A800%2C%22h%22%3A420%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%22%2C%22stroke%22%3A%22%234f84ba%22%2C%22strokeW%22%3A14%2C%22path%22%3A%221!cubic!0_.02!.85!!!.25!-.45!s_.5!.5!-.22!.32!.22!-.32!y_.98!.12!-.25!.45!!!s%22%7D%2C%7B%22id%22%3A%22blob%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A340%2C%22y%22%3A620%2C%22w%22%3A400%2C%22h%22%3A320%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23d1e7ff%22%2C%22stroke%22%3A%22%234f84ba%22%2C%22strokeW%22%3A6%2C%22fillRule%22%3A%22nonzero%22%2C%22path%22%3A%221!catmull-rom!1_.5!0_1!.42_.78!1_.22!1_0!.42%22%7D%5D&width=1440&height=900&dpi=192&waitMs=2600&cropSelector=%23tool-canvas&format=svg&filename=pen-path-geometry)

![A tool on a phone-width screen - controls as a sheet up top, the generated palette filling the preview below, and the render pill floating bottom-centre](/t/url-shot?url=%2F%23%2Ftool%2Fcolor-palette%3Fseed%3Df97316%26harmony%3Dadjacent-3%26steps%3D9&width=430&height=900&dpi=192&waitMs=2200&format=svg&filename=vt-phone-palette)

På smala skärmar flödar layouten om till en kolumn:

- **Kontrollerna blir ett ark** högst upp med ett **draghandtag** på nederkanten. Dra i handtaget för att ändra storlek - det snäpper till **skymt / halv / full** - eller **tryck** på handtaget för att växla mellan hopfällt och expanderat. Förhandsvisningen fyller utrymmet nedanför och förblir synlig medan du redigerar.
- En flytande **Rendera**-knapp öppnar arket **Export** - alla kontroller för format, storlek, kopiering, sparande och nedladdning på ett ställe. Stäng det genom att trycka på bakgrunden.

## Kontroller (inmatningar)

![A crescent and a ring with a real hole, both produced by Subtract](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio%3Fboxes%3D%5B%7B%22id%22%3A%22paper%22%2C%22kind%22%3A%22box%22%2C%22x%22%3A0%2C%22y%22%3A0%2C%22w%22%3A1080%2C%22h%22%3A1080%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23ffffff%22%7D%2C%7B%22id%22%3A%22crescent%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A120%2C%22y%22%3A330%2C%22w%22%3A374%2C%22h%22%3A400%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%234f84ba%22%2C%22path%22%3A%221!cubic!1_.750491!.957645!-.128211!-.062578!-.065985!.027232!c_.534759!1!.076762!!-.295339!!c_0!.5!!.276142!!-.276142!c_.534759!0!-.295339!!.200102!!c_1.000984!.254923!-.09169!-.152161!-.021205!-.003239!c_.935829!.25!.022185!!-.221505!!c_.534759!.625!!-.207107!!.14459!c%22%7D%2C%7B%22id%22%3A%22ring%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A580%2C%22y%22%3A330%2C%22w%22%3A400%2C%22h%22%3A400%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%234f84ba%22%2C%22fillRule%22%3A%22nonzero%22%2C%22path%22%3A%221!cubic!1_1!.5!!-.276142!!.276142!c_.5!1!.276142!!-.276142!!c_0!.5!!.276142!!-.276142!c_.5!0!-.276142!!.276142!!c*1!cubic!1_.5!.7!-.110457!!.110457!!c_.7!.5!!.110457!!-.110457!c_.5!.3!.110457!!-.110457!!c_.3!.5!!-.110457!!.110457!c%22%7D%5D&width=1440&height=900&dpi=192&waitMs=2600&cropSelector=%23tool-canvas&format=svg&filename=path-ops-boolean-result)

![A tool's control stack - a text field, colour triggers and a slider, and nothing else the author chose to lock down](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&cropSelector=%23tool-inputs&format=svg&filename=use-tool-inputs)

Verktyg exponerar bara de inmatningar som är avsedda att varieras - allt annat (färger, layout, typografi, logik) är låst av verktygets upphovsperson, så det du gör uppfyller de regler som upphovspersonen har satt. Inmatningarna omfattar text, reglage, färgväljare, rullgardinsmenyer, datum, bildväljare och upprepande radgrupper. Vissa är grupperade under hopfällbara avsnitt.

**Återställ:** *Rensa ändringar* återställer varje inmatning till dess standardvärde.

## Dina uppgifter och profilbild

![Sequence Studio's timeline: the transport, the ruler, an overlay lane, the magnetic sequence row with its clips and seam chips, and the Always on strip](/t/url-shot?url=%2F%23%2Ftool%2Fsequence-studio&width=1440&height=900&dpi=192&waitMs=7000&css=.tl-panel%7Bheight%3A252px!important%7D&cropSelector=.tl-panel&format=svg&walker=1&tolerance=0.03&filename=seq-studio-timeline)

![The whole editing surface: artboard, tool rail and timeline together](/t/url-shot?url=%2F%23%2Ftool%2Fsequence-studio&width=1440&height=900&dpi=192&waitMs=7000&css=.fc-toolbar%7Bopacity%3A1!important%7D&cropSelector=%23tool-stage&format=svg&walker=1&tolerance=0.03&filename=seq-studio-stage)

**Profil** (uppe till höger i galleriet) innehåller ditt namn, dina kontaktuppgifter och en valfri **profilbild**. Verktyg som efterfrågar dessa fält fyller i dem automatiskt - ange dem en gång så fylls din e-postsignatur, lockups och märken i av sig själva. Du kan fortfarande skriva över valfritt fält per session. Kryssa i **Använd mina uppgifter** så att ett verktyg får läsa dem.

Din profilbild och dina uppgifter finns **bara på den här enheten**. En profil kan vara mer än bara du - ett team eller en roll du kliver in i då och då. Se **[Profiler](/info/profile.html)** för hela bilden, inklusive hur du behåller fler än en.

## Spara och fortsätta

![The two-half render pill - an up arrow that opens the export panel, and a tick that saves the session in place](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&css=%23tool-inputs%7Bdisplay%3Anone%7D&cropSelector=.render-pill&format=svg&filename=use-render-pill)

Klicka på **Spara** för att lagra de aktuella inmatningarna som en session för det verktyget. Du kan behålla flera namngivna sessioner per verktyg; varje verktygs **Fortsätt**-knapp öppnar din senaste igen, och **historikknappen** (uppe till höger, bredvid din profil) listar varje sparad session i alla verktyg. Sessioner är enhetslokala. För att organisera dem, öppna **Projekt** (nedan).

## Projekt

![Projects - saved sessions organised into nestable folders](/t/url-shot?url=%2F%23%2Fp&width=1440&height=900&dpi=192&waitMs=1200&format=svg&localize=1&filename=projects)

**Projekt** - öppna det från fliken **Projekt** bredvid **Verktyg**, eller från **Profil → Lagring → Organisera i Projekt** - är ett hem för allt du har sparat, och det fungerar som en filhanterare:

- **Mappar som kan nästlas.** Gruppera sparade sessioner i mappar, och mappar inuti mappar, så djupt du vill. Skapa en mapp, byt namn på den, eller dra en ruta till en annan mapp för att flytta den; en brödsmulsstig leder dig tillbaka upp. En alltid närvarande mapp, **Ej kategoriserat**, innehåller allt som ännu inte har arkiverats.
- **Arkivera nytt arbete direkt.** Inuti en mapp öppnar **+ Nytt verktyg** ett verktyg och arkiverar dess första sparning i den mappen automatiskt.
- **Flerval (dator).** Kryssa i en rutas kryssruta, dra en markeringsruta över tom yta, eller **Shift/Cmd-klicka**; **högerklicka** på en ruta för dess snabbmeny. Agera sedan på hela markeringen på en gång.
- **Rendera en hel mapp eller markering.** **Rendera mapp** exporterar varje sparad session i en mapp - inklusive dess undermappar - som en enda nästlad `.zip`. **Rendera markering** gör samma sak för valfri flermarkering, och en enskild session renderas direkt till sin egen fil. Ingen Batch- eller Pro-funktion behövs.
- **Dela en sparad session.** Högerklicka på en session → **Dela länk** för att kopiera en länk som öppnar den igen med exakt samma inmatningar (hela dialogrutan Dela - se nedan).

## Dela en länk

Varje inmatning fångas i sidans URL, så en länk *är* designen. Använd **Dela** i exportkontrollerna - eller **Dela länk** på en sparad session i Projekt - för att öppna **dialogrutan Dela**: en länk redo att kopieras plus växlingsknappar för att kryptera länken och vad som händer när den öppnas (helskärm, exportpanelen expanderad, nedladdning-vid-öppning med `&export`, eller kopiering-till-urklipp med `&copy`).

En stor design skulle ge en lång URL, så dialogrutan erbjuder också en **kortaste länk** som packar hela tillståndet i en kompakt token - den läsbara formen finns alltid kvar också. Klistra in den till en kollega, bokmärk den, eller checka in den. (Fullständiga detaljer: [URL-läge](/info/url-mode.html).)

> Bilder du har laddat upp från din enhet ingår **inte** i en delad länk - de finns bara på din maskin.

## Live-kamera (rörelsereaktiva verktyg)

Fotofiltren - Halvton, Skanlinje, Posterisera, Duoton - visar en knapp **Gå live** där en kamera finns tillgänglig. Slå på den så följer effekten din webbkamera bildruta för bildruta, så att den reagerar på rörelse; du kan spela in resultatet som GIF, WebM eller MP4. Bildrutor läses och bearbetas **på din enhet** och lämnar den aldrig, och kameran släpps så fort du stoppar eller lämnar verktyget. (Varje bildväljare har också **Ta ett foto** för att fånga en enstaka bildruta som en bild på enheten.)

## Mina bilder

När ett verktyg låter dig lägga till en bild från din enhet skalas den ned, rensas från EXIF/GPS och sparas i ditt personliga bibliotek **Mina bilder** (under **Profil → Lagring**). Återanvänd den i vilket verktyg som helst. Biblioteket har ett tak och är helt lokalt - hantera eller ta bort bilder där.

## Katalogen - ditt tillgångsbibliotek

![The Catalogue - brand assets, swatches and fonts, plus your own uploads](/t/url-shot?url=%2F%23%2Fc%3Fsection%3Dswatches%2Cfonts&width=1440&height=900&dpi=96&waitMs=2400&css=.plat-swatch-grid~%2A%7Bdisplay%3Anone%7D&walker=1&format=svg&localize=1&filename=catalogue)

**Katalogen** (`#/c`, eller länken **Katalog** i menyn) samlar allt dina verktyg kan använda - varumärkeslogotyper, bilder, ljud och rörelse, grupperade efter typ - och det är också här dina **egna kreativa filer** bor. Ingen server, ingen adminkonsol, ingen pull request: allt finns på din enhet.

- **Ta in dina filer.** Dra valfri bild, SVG, ljudklipp, video, Lottie eller PDF till uppladdningsytan - eller klicka för att välja - så hamnar den i din katalog direkt, redo i varje verktygs tillgångsväljare. Mata in så mycket du vill; det lämnar aldrig din enhet.
- **Favoritmarkera det du använder ofta.** ★ en tillgång (eller en varumärkesfärg) så fästs den överst i varje väljare, så att din självklara logotyp eller färg är ett klick bort.
- **Städa upp.** Kategorisera om en tillgång till en annan grupp, dölj en delad varumärkestillgång du inte använder (med **Visa dolda** för att ta tillbaka den), eller radera dina egna uppladdningar helt.

### Ta med din palett och dina typsnitt vart som helst

![The Swatches panel - the five palette download buttons across the top, then every brand colour as a copyable chip](/t/url-shot?url=%2F%23%2Fc%3Fsection%3Dswatches&width=1440&height=900&dpi=96&waitMs=1800&css=.cat-group%3Anot%28%5Bdata-group%3Dswatches%5D%29%7Bdisplay%3Anone%7D&cropSelector=%5Bdata-group%3Dswatches%5D&walker=1&format=svg&filename=use-swatch-downloads)

Katalogens panel **Färgprover** är inte bara till för referens - klicka på en färg för att kopiera den, eller **ladda ner hela varumärkespaletten** i det format ditt andra verktyg talar:

- **Designtokens (JSON)**, **CSS-variabler** eller **CSS-klasser** - släpp in varumärket direkt i en stilmall eller ett bygge;
- **Adobe Swatch Exchange (.ase)** - läs in det i Illustrator eller Photoshop;
- **GIMP-palett (.gpl)** - för GIMP eller Inkscape.

Panelen **Typsnitt** listar dina varumärkessnitt med en **nedladdning** bredvid varje, för att installera lokalt eller lämna till ett tryckeri. ([Brand Studio](/info/brand-studio.html)s flik Färger erbjuder samma palettnedladdning.)

Tillgångar är den ena halvan av den öppna gör-det-själv-vägen; den andra är att **skapa dina egna verktyg** - den fria arbetsytan (Layout Studio, beskriven ovan) låter dig bygga ett visuellt, utan kod.

## Ljud och tillgänglighet

Lolly strävar efter att vara bekvämt att använda för alla. Gränssnittet är tangentbordsnavigerbart, anpassade kontroller har korrekta etiketter för skärmläsare, och varje verktygs live-förhandsvisning exponeras som en enda märkt bild som beskriver vad den skapar.

Ett skönsamt lager av **hjälpljud** bekräftar det du gör - att komma in i galleriet, en giltig kontra ogiltig Content Credentials-kontroll, att stänga en panel, att byta filter. Det är **påslaget som standard** men alltid valfritt: slå av **Ljud** var som helst reglaget visas (varje vys alternativpopover, eller **Profil**), och valet kommer ihåg.

Bredvid det reglaget finns **Neurospicy Mode** - ett valfritt, lugnande fokusspår i bakgrunden som spelas tyst medan du arbetar. När du slår på det öppnas en liten **spelardocka** i det nedre hörnet som följer med dig genom appen; därifrån kan du söka efter och välja ett spår, hoppa framåt och bakåt, ställa in volymen samt minimera eller stänga den. Spårlistan omfattar några kategorier - procedurella *Lolly Sings*-låtar, ambienta loopar och beats, ditt eget uppladdade ljud, och en handfull direktsända **radio**stationer från internet (dessa kräver en anslutning; allt annat spelas offline). Det är **avstängt som standard** och, precis som Ljud, kommer det ihåg mellan sessioner och enheter. Att stänga av Ljud tystar även fokusspåret.

## Lagring och integritet

Allt lagras i webbläsarens lokala databas (IndexedDB): din profil, sparade sessioner, uppladdade bilder och en cache av nedladdat katalog­innehåll. **Profil → Lagring** visar användning och låter dig:

- **Rensa cache** - släng nedladdat katalog­innehåll (synkas igen vid nästa inläsning).
- **Rensa all min data** - radera profil, sessioner och bilder. *Kan inte ångras.*

![The storage card on a phone-width screen: every category of on-device data named, with the Clear all my data button at the bottom](/t/url-shot?url=%2F%23%2Fprofile%3Ffocus%3Dstorage-section&width=430&height=1600&dpi=192&waitMs=2400&css=.welcome-dialog%2C.personalize-nudge%2C.store-manages%2C.storage-subsection%2C.store-selbar%2C.store-chip-val%2C%23store-hero-num%2C%23store-headroom%2C%23store-quota%2C%23store-reclaim%7Bdisplay%3Anone%7D&format=svg&walker=1&cropSelector=%23storage-section&filename=pv-storage-clear)

Ingenting skickas någonstans. Ingen telemetri, ingen molnrendering.

## Flytta till en annan enhet

Eftersom allt finns på din enhet låter **Profil → Lagring → Flytta till en annan enhet** dig ta med allt till en andra installation - inget konto, inget moln:

- **Exportera min data** laddar ner en enda `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` (namndelarna kommer från din profil och utelämnas om de inte är angivna; `<n>` är en räknare per dag så att exporter samma dag inte krockar) som innehåller din profil, varje sparad session (med dess miniatyrbild), dina uppladdade bilder och dina inställningar (tema, sidopanelens bredd, lokal aktivitetsstatistik).
- **Importera data…** på den andra installationen läser in den filen igen. Det **sammanfogas**: allt med samma namn (din profil, en sessionsplats, en bild) ersätts av den importerade kopian; allt annat på den enheten behålls. Sparade sessioner länkas automatiskt om till dina importerade bilder.

Katalog­cachen ingår inte - den laddas ner igen av sig själv på den nya enheten. Paketet är en vanlig zip (`manifest.json` + `profile.json` + `sessions.json` + `assets.json` + `assets/blobs/…` + `prefs.json`, formatid `lolly-backup`), så det överlever e-post, USB eller AirDrop intakt och är samma format som varje skal läser. Varje del är checksummerad, så en fil som skadats under överföring upptäcks vid import istället för att återställas halvtrasig. (Fullständig formatspecifikation: [Dataöverföring](/info/data-transfer.html).)

## Importera en design (Figma, Penpot, Illustrator, InDesign)

Du kan ta in en befintlig design i Lolly och fortsätta arbeta med den: öppna **Layout Studio**, klicka på **Importera en design** i arbetsytans verktygsfält, och välj en Figma **.fig** eller SVG, en Penpot **.penpot**, en Illustrator **.ai** / **.pdf**, eller en InDesign **.idml**. Lager blir redigerbara rutor på den fria arbetsytan - text förblir omskrivningsbar, bilder hamnar i **Mina bilder**, och typsnitt och färger anpassar sig till varumärkets globala inställningar - sedan sparas, delas och renderas resultatet som vilken annan session som helst. Tolkningen sker helt och hållet på din enhet. Fullständiga detaljer: **[Importera en design](/info/design-import.html)**.

## Exportera

Se **[Export och format](/info/exporting.html)** för hela historien - att välja ett format, utdatastorlek och tryckenheter, transparens, video och kopiera/dela. Kort sagt: välj ett format, ställ in storleken om du behöver, och **Ladda ner** (eller **Kopiera** till urklipp).

## Batch-läge (Pro)

![The batch toolbar - zip name, units, DPI and the format every row inherits, with Sessions and Render on the right](/t/url-shot?url=%2F%23%2Fpro&width=1440&height=900&dpi=192&waitMs=3500&cropSelector=.pro-toolbar&format=svg&filename=use-batch-toolbar)

För avancerade användare renderar **Batch** (länkad från galleriet, spärrad bakom Pro-funktionsflaggan, som är påslagen som standard) många varianter på en gång - ett rutnät där varje rad är en uppsättning inmatningar, exporterade tillsammans. Perfekt för att lokalisera ett kort till ett dussin språk eller generera varje storleksvariant i en enda omgång. Fyll i rader genom att skriva, klistra in direkt från ett kalkylblad, eller importera en CSV-fil (du kan även exportera en tillbaka), och ställ in format, storlek och utdatafilnamn per rad. Spara ett helt rutnät som en namngiven **batch-session** som öppnas igen från galleriet, och ladda ner varje rad som en enda `.zip`.

Batch är till för att generera **många varianter av en mall** på en gång. För att rendera om sessioner du **redan har sparat**, använd **Projekt → Rendera mapp / Rendera markering** (ovan) - ingen Pro-funktion behövs.

## Offline och installation

Lolly är en PWA. Efter den första inläsningen fungerar den **offline** - installera den från webbläsarens adressfält (eller *Lägg till på hemskärmen* på mobilen) för en app-liknande, helskärmsupplevelse. Den uppdaterar sig själv när du är uppkopplad igen.
