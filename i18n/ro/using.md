# Folosirea Lolly

Un ghid practic despre cum să *folosești* efectiv aplicația - deschiderea unui instrument, lucrul pe canvas, exportul, salvarea și distribuirea. Totul de aici rulează **pe dispozitivul tău**: fără cont, fără upload, fără nevoie de internet după prima încărcare.

> Ești nou aici? [Ghidul de pornire rapidă](/info/quickstart.html) te pune pe treabă în câteva minute, iar [Lolly pentru operatori](/info/operators.html) acoperă instalarea/implementarea aplicației; această pagină este despre cum o folosești odată deschisă.

## Deschiderea unui instrument

![A tool's split view - the control stack on the left, and the live horizontal bar chart it draws on the right](/t/url-shot?url=%2F%23%2Ftool%2Fd3%3Fct%3Dbar%26t%3DExample%2520data%26st%3DSample%2520values%252C%2520not%2520a%2520real%2520dataset%26d%3DMonth%252CSeries%2520A%252CSeries%2520B%252CSeries%2520C%250AJan%252C12%252C9%252C5%250AFeb%252C18%252C14%252C7%250AMar%252C24%252C17%252C11%250AApr%252C29%252C23%252C15%26lg%3D1&width=1440&height=900&dpi=192&waitMs=2500&walker=1&format=svg&dark=1&filename=vt-tool-split-view)

![The tool gallery - every tool as a card, grouped by category](/t/url-shot?url=%2F%23%2F&width=1440&height=900&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&tolerance=0.03&waitSelector=.gallery-view%5Bdata-shots-settled%5D&walker=1&format=svg&localize=1&dark=1&filename=gallery&sweep=1)


Ecranul de start este **galeria** - fiecare instrument, grupat pe categorii. Dă click pe un card pentru a deschide instrumentul; dacă ai mai lucrat la el, un buton **Continue** reia cea mai recentă sesiune. Folosește câmpul de căutare pentru a filtra după nume.

Fiecare instrument este o vedere împărțită: **controale** pe o parte, o **previzualizare** live (canvas-ul) pe cealaltă. Schimbă orice control și previzualizarea se actualizează instant.

> Câteva instrumente (precum **Layout Studio**) se deschid în schimb ca un **canvas liber** - o suprafață fără chrome, cu manipulare directă, în care tragi, redimensionezi, rotești și aliniezi (snap) casete de text, forme și imagini, iar dublu-click editează textul pe loc. Exportă prin același traseu de randare ca orice alt instrument, deci canvas-ul *este* fișierul. Vezi [Canvas-ul liber](#the-free-canvas-layout-studio) mai jos.

## Canvas-ul (previzualizarea)

![The zoom HUD in the corner of the canvas - minus, the live percentage, plus, Fit, then the theme and sound toggles](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&css=.stage-nav%7Bopacity%3A1!important%7D&cropSelector=.stage-nav&walker=1&format=svg&dark=1&filename=use-zoom-hud)

Previzualizarea arată întotdeauna exact ce se va exporta.

**Desktop**

- **Zoom:** Cmd/Ctrl-scroll, sau pinch pe un trackpad - zoom-ul se centrează pe cursor.
- **Pan:** ține apăsat **Space** și trage, sau trage cu **butonul din mijloc al mouse-ului**. (Click-urile simple rămân libere pentru a da click pe părți ale design-ului.)
- **Tastatură:** `0` = potrivire cu fereastra · `1` = 100% · `+` / `−` = zoom.
- **HUD de zoom:** micul control `−  NN%  +  Fit` din colț. Dă click pe procent pentru a comuta între Fit ↔ 100%.

**Touch**

- **Pinch** pentru zoom, **drag** pentru pan, **dublu-tap** pentru resetare la fit.

**Click pentru a sări la un control:** dă click pe orice element din design, iar inputul corespunzător din bara laterală primește focus și este derulat în vizualizare - pentru un grup de rânduri repetitive, se deschide exact rândul pe care ai dat click, deci editarea a ceea ce vezi e la un tap distanță.

O schimbare de dimensiune readuce întotdeauna vederea la o încadrare curată.

### Canvas-ul liber (Layout Studio)

![Layout Studio's free canvas - the artboard with its surrounding pasteboard](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio&width=1440&height=900&dpi=192&waitMs=2000&walker=1&format=svg&localize=1&dark=1&filename=layout-studio&sweep=1)

Instrumentele cu canvas liber adaugă o suprafață de lucru *în jurul* planșei, ca o masă de lucru de designer:

- **Așezare în afara canvas-ului.** Trage o casetă dincolo de marginea cadrului și rămâne complet **vizibilă și selectabilă** - parchează elemente în lateral cât timp aranjezi compoziția, apoi trage-le înapoi. Tot ce este în afara cadrului este **estompat ușor**, astfel încât zona de export se citește dintr-o privire, iar cadrul își păstrează umbra pentru a marca exact unde începe fișierul.
- **Doar cadrul se exportă.** Fișierul exportat este delimitat de planșă - orice rămâne în afară (sau partea unei casete care atârnă peste margine) este pur și simplu decupată din rezultat, atât în formate raster, cât și vectoriale.
- **Fă zoom out dincolo de Fit** (până la 20%) pentru a vedea întreaga masă de lucru atunci când ai așezat elemente mult în afara cadrului.
- **Planșă redimensionabilă.** Schimbarea dimensiunilor de export redimensionează cadrul pe loc; casetele își păstrează pozițiile, deci poți reîncadra un layout în jurul conținutului existent.

## Pe telefon

![The free-canvas tool rail: a drag grip, the Lolly menu, then Pointer, Add a box, Pen and Timeline](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio&width=1440&height=900&dpi=192&waitMs=2600&css=.fc-toolbar%7Bopacity%3A1!important%7D&cropSelector=.fc-toolbar&walker=1&format=svg&dark=1&filename=pen-editor-rail)

![Two pen paths rendered straight from a link: a stroked S-curve and a closed filled blob](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio%3Fboxes%3D%5B%7B%22id%22%3A%22paper%22%2C%22kind%22%3A%22box%22%2C%22x%22%3A0%2C%22y%22%3A0%2C%22w%22%3A1080%2C%22h%22%3A1080%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23ffffff%22%7D%2C%7B%22id%22%3A%22curve%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A140%2C%22y%22%3A180%2C%22w%22%3A800%2C%22h%22%3A420%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%22%2C%22stroke%22%3A%22%234f84ba%22%2C%22strokeW%22%3A14%2C%22path%22%3A%221!cubic!0_.02!.85!!!.25!-.45!s_.5!.5!-.22!.32!.22!-.32!y_.98!.12!-.25!.45!!!s%22%7D%2C%7B%22id%22%3A%22blob%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A340%2C%22y%22%3A620%2C%22w%22%3A400%2C%22h%22%3A320%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23d1e7ff%22%2C%22stroke%22%3A%22%234f84ba%22%2C%22strokeW%22%3A6%2C%22fillRule%22%3A%22nonzero%22%2C%22path%22%3A%221!catmull-rom!1_.5!0_1!.42_.78!1_.22!1_0!.42%22%7D%5D&width=1440&height=900&dpi=192&waitMs=2600&cropSelector=%23tool-canvas&walker=1&format=svg&dark=1&filename=pen-path-geometry)

![A tool on a phone-width screen - controls as a sheet up top, the generated palette filling the preview below, and the render pill floating bottom-centre](/t/url-shot?url=%2F%23%2Ftool%2Fcolor-palette%3Fseed%3Df97316%26harmony%3Dadjacent-3%26steps%3D9&width=430&height=900&dpi=192&waitMs=2200&walker=1&format=svg&dark=1&filename=vt-phone-palette)

Pe ecrane înguste, layout-ul se reflowează pe o singură coloană:

- **Controalele devin o foaie** sus, cu un **mâner de tragere** pe marginea inferioară. Trage mânerul pentru a-i redimensiona - se fixează pe **peek / half / full** - sau **atinge** mânerul pentru a comuta între restrâns ↔ extins. Previzualizarea umple spațiul de dedesubt și rămâne vizibilă cât timp editezi.
- Un buton flotant **Render** deschide foaia **Export** - toate controalele de format, dimensiune, copiere, salvare și descărcare într-un singur loc. Închide-o atingând fundalul.

## Controale (inputuri)

![A crescent and a ring with a real hole, both produced by Subtract](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio%3Fboxes%3D%5B%7B%22id%22%3A%22paper%22%2C%22kind%22%3A%22box%22%2C%22x%22%3A0%2C%22y%22%3A0%2C%22w%22%3A1080%2C%22h%22%3A1080%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23ffffff%22%7D%2C%7B%22id%22%3A%22crescent%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A120%2C%22y%22%3A330%2C%22w%22%3A374%2C%22h%22%3A400%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%234f84ba%22%2C%22path%22%3A%221!cubic!1_.750491!.957645!-.128211!-.062578!-.065985!.027232!c_.534759!1!.076762!!-.295339!!c_0!.5!!.276142!!-.276142!c_.534759!0!-.295339!!.200102!!c_1.000984!.254923!-.09169!-.152161!-.021205!-.003239!c_.935829!.25!.022185!!-.221505!!c_.534759!.625!!-.207107!!.14459!c%22%7D%2C%7B%22id%22%3A%22ring%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A580%2C%22y%22%3A330%2C%22w%22%3A400%2C%22h%22%3A400%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%234f84ba%22%2C%22fillRule%22%3A%22nonzero%22%2C%22path%22%3A%221!cubic!1_1!.5!!-.276142!!.276142!c_.5!1!.276142!!-.276142!!c_0!.5!!.276142!!-.276142!c_.5!0!-.276142!!.276142!!c*1!cubic!1_.5!.7!-.110457!!.110457!!c_.7!.5!!.110457!!-.110457!c_.5!.3!.110457!!-.110457!!c_.3!.5!!-.110457!!.110457!c%22%7D%5D&width=1440&height=900&dpi=192&waitMs=2600&cropSelector=%23tool-canvas&walker=1&format=svg&dark=1&filename=path-ops-boolean-result)

![A tool's control stack - a text field, colour triggers and a slider, and nothing else the author chose to lock down](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&cropSelector=%23tool-inputs&walker=1&format=svg&dark=1&filename=use-tool-inputs)

Instrumentele expun doar inputurile menite să varieze - restul (culori, layout, tipografie, logică) este blocat de autorul instrumentului, astfel încât orice creezi respectă regulile stabilite de autor. Inputurile includ text, slidere, selectoare de culoare, liste derulante, date, selectoare de imagini și grupuri de rânduri repetitive. Unele sunt grupate în secțiuni pliabile.

**Resetare:** *Clear changes* readuce fiecare input la valorile implicite.

## Datele tale și fotografia de profil

![Sequence Studio's timeline: the transport, the ruler, an overlay lane, the magnetic sequence row with its clips and seam chips, and the Always on strip](/t/url-shot?url=%2F%23%2Ftool%2Fsequence-studio&width=1440&height=900&dpi=192&waitMs=7000&css=.tl-panel%7Bheight%3A252px!important%7D&cropSelector=.tl-panel&format=svg&walker=1&tolerance=0.03&dark=1&filename=seq-studio-timeline&sweep=1)

![The whole editing surface: artboard, tool rail and timeline together](/t/url-shot?url=%2F%23%2Ftool%2Fsequence-studio&width=1440&height=900&dpi=192&waitMs=7000&css=.fc-toolbar%7Bopacity%3A1!important%7D&cropSelector=%23tool-stage&format=svg&walker=1&tolerance=0.03&dark=1&filename=seq-studio-stage)

**Profil** (dreapta sus în galerie) conține numele, datele de contact și o **fotografie de profil** opțională. Instrumentele care solicită aceste câmpuri le precompletează automat - setează-le o dată, iar semnătura ta de email, lockup-urile și ecusoanele se completează singure. Poți suprascrie oricare câmp per sesiune. Activează **Use my details** pentru ca un instrument să le poată citi.

Fotografia de profil și datele tale trăiesc **doar pe acest dispozitiv**. Un profil poate fi mai mult decât doar tu - o echipă sau un rol în care intri din când în când. Vezi **[Profiluri](/info/profile.html)** pentru imaginea completă, inclusiv păstrarea mai multor profiluri.

## Salvare și continuare

![The two-half render pill - an up arrow that opens the export panel, and a tick that saves the session in place](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&css=%23tool-inputs%7Bdisplay%3Anone%7D&cropSelector=.render-pill&walker=1&format=svg&dark=1&filename=use-render-pill)

Dă click pe **Save** pentru a stoca inputurile curente ca sesiune pentru acel instrument. Poți păstra mai multe sesiuni denumite per instrument; butonul **Continue** al fiecărui instrument redeschide cea mai recentă, iar **butonul de istoric** (dreapta sus, lângă profilul tău) listează fiecare sesiune salvată din toate instrumentele. Sesiunile sunt locale dispozitivului. Pentru a le organiza, deschide **Projects** (mai jos).

## Projects

![Projects - saved sessions organised into nestable folders](/t/url-shot?url=%2F%23%2Fp&width=1440&height=900&dpi=192&waitMs=1200&walker=1&format=svg&localize=1&dark=1&filename=projects)

**Projects** - deschide-l din tab-ul **Projects** de lângă **Tools**, sau din **Profile → Storage → Organise in Projects** - este o casă pentru tot ce ai salvat și funcționează ca un manager de fișiere:

- **Foldere care se imbrică.** Grupează sesiunile salvate în foldere, și foldere în interiorul folderelor, cât de adânc vrei. Creează un folder, redenumește-l, sau trage o dală peste alt folder pentru a o muta; un breadcrumb te duce înapoi în sus. Un folder mereu prezent **Uncategorised** conține tot ce nu a fost încă clasat.
- **Depune munca nouă direct.** Într-un folder, **+ New tool** deschide un instrument și îi depune automat prima salvare în acel folder.
- **Selecție multiplă (desktop).** Bifează checkbox-ul unei dale, trage un chenar de selecție peste canvas gol, sau **Shift/Cmd-click**; **click dreapta** pe o dală pentru meniul ei contextual. Apoi acționează asupra întregii selecții deodată.
- **Randează un folder întreg sau o selecție.** **Render folder** exportă fiecare sesiune salvată dintr-un folder - inclusiv subfolderele sale - ca un singur `.zip` imbricat. **Render selection** face același lucru pentru orice selecție multiplă, iar o sesiune unică se randează direct în propriul fișier. Nu e nevoie de Batch/Pro.
- **Distribuie o sesiune salvată.** Click dreapta pe o sesiune → **Share link** pentru a copia un link care o redeschide cu exact aceleași inputuri (dialogul complet de distribuire - vezi mai jos).

## Distribuirea unui link

Fiecare input este capturat în URL-ul paginii, deci un link *este* design-ul. Folosește **Share** în controalele de export - sau **Share link** pe orice sesiune salvată din Projects - pentru a deschide **dialogul de distribuire**: un link gata de copiat plus comutatoare pentru criptarea link-ului și ce se întâmplă la deschidere (fullscreen, panoul de export extins, descărcare-la-deschidere cu `&export`, sau copiere-în-clipboard cu `&copy`).

Un design mare ar produce o URL lungă, deci dialogul oferă și un **Shortest link** care compactează întreaga stare într-un token compact - forma lizibilă este mereu disponibilă și ea. Trimite-l prin lipire unui coleg, adaugă-l la favorite, sau commite-l. (Detalii complete: [URL Mode](/info/url-mode.html).)

> Imaginile pe care le-ai încărcat de pe dispozitivul tău **nu** sunt incluse într-un link distribuit - ele există doar pe mașina ta.

## Cameră live (instrumente reactive la mișcare)

**Filtrele** foto - Halftone, Scanline, Posterize, Duotone - arată un buton **Go live** acolo unde o cameră este disponibilă. Pornește-l, iar efectul urmărește webcam-ul tău cadru cu cadru, deci reacționează la mișcare; poți înregistra rezultatul ca GIF, WebM sau MP4. Cadrele sunt citite și procesate **pe dispozitivul tău** și nu îl părăsesc niciodată, iar camera este eliberată în momentul în care oprești sau părăsești instrumentul. (Orice selector de imagine are și **Take a photo** pentru a capta un singur cadru ca imagine pe dispozitiv.)

## My images

Când un instrument îți permite să adaugi o imagine de pe dispozitiv, aceasta este redusă ca dimensiune, curățată de EXIF/GPS și salvată în biblioteca ta personală **My images** (sub **Profile → Storage**). Reutilizeaz-o în orice instrument. Biblioteca are o limită și este în întregime locală - gestionează sau șterge imagini acolo.

## Catalogul - biblioteca ta de resurse

![The Catalogue - brand assets, swatches and fonts, plus your own uploads](/t/url-shot?url=%2F%23%2Fc%3Fsection%3Dswatches%2Cfonts&width=1440&height=900&dpi=96&waitMs=2400&css=.plat-swatch-grid~%2A%7Bdisplay%3Anone%7D&walker=1&format=svg&localize=1&dark=1&filename=catalogue)

**Catalogul** (`#/c`, sau link-ul **Catalogue** din meniu) adună tot ce pot folosi instrumentele tale - logo-uri de brand, imagini, audio și animație, grupate pe tipuri - și este locul unde trăiesc și **propriile tale fișiere creative**. Fără server, fără consolă de administrare, fără pull request: totul e pe dispozitivul tău.

- **Adu-ți fișierele înăuntru.** Trage orice imagine, SVG, clip audio, video, Lottie sau PDF pe zona de upload - sau dă click pentru a alege - și ajunge instant în catalogul tău, gata în selectorul de resurse al fiecărui instrument. Adu câte vrei; nu-ți părăsesc niciodată dispozitivul.
- **Marchează ca favorit ce folosești des.** Pune ★ pe o resursă (sau pe un eșantion de brand) și se fixează în vârful fiecărui selector, așa că logo-ul sau culoarea la care apelezi mereu sunt la un click distanță.
- **Fă ordine.** Recategorisește o resursă într-un alt grup, ascunde o resursă de brand partajată pe care n-o folosești (cu **Show hidden** pentru a o readuce), sau șterge-ți definitiv propriile fișiere încărcate.

### Ia-ți paleta și fonturile oriunde

![The Swatches panel - the five palette download buttons across the top, then every brand colour as a copyable chip](/t/url-shot?url=%2F%23%2Fc%3Fsection%3Dswatches&width=1440&height=900&dpi=96&waitMs=1800&css=.cat-group%3Anot%28%5Bdata-group%3Dswatches%5D%29%7Bdisplay%3Anone%7D&cropSelector=%5Bdata-group%3Dswatches%5D&walker=1&format=svg&dark=1&filename=use-swatch-downloads)

Panoul **Swatches** al Catalogului nu e doar pentru referință - dă click pe o culoare pentru a o copia, sau **descarcă întreaga paletă de brand** în formatul pe care îl vorbește celălalt instrument al tău:

- **Design tokens (JSON)**, **variabile CSS** sau **clase CSS** - pune brandul direct într-un stylesheet sau într-un build;
- **Adobe Swatch Exchange (.ase)** - încarc-o în Illustrator sau Photoshop;
- **GIMP palette (.gpl)** - pentru GIMP sau Inkscape.

Panoul **Fonts** listează fonturile tale de brand cu un buton de **download** lângă fiecare, pentru a le instala local sau a le da unei tipografii. (Tab-ul Culori din [Brand Studio](/info/brand-studio.html) oferă aceeași descărcare de paletă.)

Resursele sunt jumătate din calea deschisă, de tip do-it-yourself; cealaltă este **crearea propriilor instrumente** - canvas-ul liber (Layout Studio, descris mai sus) îți permite să construiești unul vizual, fără cod.

## Sunet și accesibilitate

Lolly își propune să fie confortabil de folosit pentru toată lumea. Interfața este navigabilă de la tastatură, controalele personalizate poartă etichete corecte pentru cititoarele de ecran, iar previzualizarea live a fiecărui instrument este expusă ca o singură imagine etichetată care descrie ce se creează.

Un strat discret de **sunete asistive** confirmă ce faci - sosirea în galerie, o verificare validă vs. invalidă de Content Credentials, închiderea unui panou, comutarea unui filtru. Este **activat implicit**, dar mereu opțional: dezactivează **Sound** oriunde apare comutatorul (popover-ul de opțiuni al fiecărei vederi, sau **Profile**), iar alegerea este reținută.

Lângă acel comutator este **Neurospicy Mode** - o piesă de fundal opțională, calmantă, pentru concentrare, care rulează încet cât timp lucrezi. Pornirea ei deschide un mic **dock de player** în colțul de jos, care te însoțește prin toată aplicația; din el poți căuta și alege o piesă, sări înainte și înapoi, seta volumul și-l poți minimiza sau închide. Lista de piese acoperă câteva categorii - melodii procedurale *Lolly Sings*, bucle ambientale și beat-uri, propriul tău audio încărcat și câteva posturi de **radio** live de pe internet (acestea au nevoie de conexiune; tot restul se redă offline). Este **dezactivat implicit** și, la fel ca Sound, este reținut între sesiuni și dispozitive. Dezactivarea Sound oprește și piesa de concentrare.

## Stocare și confidențialitate

Totul este stocat în baza de date locală a browser-ului tău (IndexedDB): profilul tău, sesiunile salvate, imaginile încărcate și un cache al conținutului de catalog descărcat. **Profile → Storage** arată utilizarea și îți permite:

- **Clear cache** - renunță la conținutul de catalog descărcat (se re-sincronizează la următoarea încărcare).
- **Clear all my data** - șterge profilul, sesiunile și imaginile. *Nu poate fi anulat.*

![The storage card on a phone-width screen: every category of on-device data named, with the Clear all my data button at the bottom](/t/url-shot?url=%2F%23%2Fprofile%3Ffocus%3Dstorage-section&width=430&height=1600&dpi=192&waitMs=2400&css=.welcome-dialog%2C.personalize-nudge%2C.store-manages%2C.storage-subsection%2C.store-selbar%2C.store-chip-val%2C%23store-hero-num%2C%23store-headroom%2C%23store-quota%2C%23store-reclaim%7Bdisplay%3Anone%7D&format=svg&walker=1&cropSelector=%23storage-section&dark=1&filename=pv-storage-clear&sweep=1)

Nimic nu este transmis nicăieri. Fără telemetrie, fără randare în cloud.

## Mutarea pe alt dispozitiv

Pentru că totul trăiește pe dispozitivul tău, **Profile → Storage → Move to another device** îți permite să transporți totul pe o a doua instalare - fără cont, fără cloud:

- **Export my data** descarcă un singur `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` (părțile de nume provin din profilul tău și sunt omise dacă nu sunt setate; `<n>` este un contor zilnic, astfel încât exporturile din aceeași zi să nu se ciocnească) conținând profilul tău, fiecare sesiune salvată (cu miniatura ei), imaginile tale încărcate și preferințele tale (temă, lățimea barei laterale, statistici locale de activitate).
- **Import data…** pe cealaltă instalare citește acel fișier înapoi. **Fuzionează**: orice are același nume (profilul tău, un slot de sesiune, o imagine) este înlocuit de copia importată; tot restul de pe acel dispozitiv este păstrat. Sesiunile salvate se re-leagă automat de imaginile tale importate.

Cache-ul de catalog nu este inclus - se re-descarcă singur pe noul dispozitiv. Pachetul este un zip simplu (`manifest.json` + `profile.json` + `sessions.json` + `assets.json` + `assets/blobs/…` + `prefs.json`, id de format `lolly-backup`), deci supraviețuiește intact email-ului, USB-ului sau AirDrop-ului și este același format citit de fiecare shell. Fiecare parte are checksum, deci un fișier deteriorat în tranzit este detectat la import, în loc să fie restaurat pe jumătate stricat. (Specificația completă a formatului: [Data Transfer](/info/data-transfer.html).)

## Importarea unui design (Figma, Penpot, Illustrator, InDesign)

Poți aduce un design existent în Lolly și poți continua să lucrezi la el: deschide **Layout Studio**, dă click pe **Import a design** în bara de instrumente a canvas-ului, și alege un Figma **.fig** sau SVG, un Penpot **.penpot**, un Illustrator **.ai** / **.pdf**, sau un InDesign **.idml**. Straturile devin casete editabile pe canvas-ul liber - textul rămâne re-tastabil, imaginile ajung în **My images**, iar tipografia și culorile se conformează cu valorile globale de brand - apoi rezultatul se salvează, se distribuie și se randează ca orice altă sesiune. Parsarea se întâmplă în întregime pe dispozitivul tău. Detalii complete: **[Import a design](/info/design-import.html)**.

## Exportul

Vezi **[Export și formate](/info/exporting.html)** pentru povestea completă - alegerea unui format, dimensiunea de ieșire și unitățile de print, transparența, video-ul și copiere/distribuire. Pe scurt: alege un format, setează dimensiunea dacă ai nevoie, și **Download** (sau **Copy** în clipboard).

## Modul Batch (Pro)

![The batch toolbar - zip name, units, DPI and the format every row inherits, with Sessions and Render on the right](/t/url-shot?url=%2F%23%2Fpro&width=1440&height=900&dpi=192&waitMs=3500&cropSelector=.pro-toolbar&walker=1&format=svg&dark=1&filename=use-batch-toolbar)

Pentru utilizatorii avansați, **Batch** (link din galerie, condiționat de feature flag-ul Pro, activat implicit) randează multe variații deodată - o grilă unde fiecare rând este un set de inputuri, exportate împreună. Ideal pentru a localiza un card în o duzină de limbi sau pentru a genera fiecare variantă de dimensiune într-o singură trecere. Completează rândurile tastând, lipind direct dintr-o foaie de calcul, sau importând un CSV (poți exporta și unul înapoi), și setează formatul, dimensiunea și numele de fișier de ieșire per rând. Salvează o grilă întreagă ca o **sesiune batch** denumită, care se redeschide din galerie, și descarcă fiecare rând ca un singur `.zip`.

Batch este pentru generarea a **multor variante ale unui singur șablon** deodată. Pentru a re-randa sesiuni pe care le-ai **salvat deja**, folosește **Projects → Render folder / Render selection** (mai sus) - fără nevoie de Pro.

## Offline și instalare

Lolly este un PWA. După prima încărcare funcționează **offline** - instaleaz-o din bara de adrese a browser-ului tău (sau *Add to Home Screen* pe mobil) pentru o experiență de tip aplicație, pe tot ecranul. Se actualizează singură când revii online.
