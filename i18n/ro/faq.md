# FAQ

Întrebări frecvente afișate în acordeonul de pe pagina de start `/info`.

**Cum se întreține:** fiecare titlu `##` de mai jos este o întrebare; tot ce se află sub el
(până la următorul `##`) este răspunsul. Răspunsurile folosesc același markdown simplu ca
restul site-ului — paragrafele se separă printr-o linie goală. Adaugă, elimină sau
reordonează întrebările aici și rulează din nou `npm run build:info` (sau `npm run dev:web`).
Tot ce se află deasupra primului `##` (acest titlu și aceste note) este ignorat de build.

## Ce se întâmplă când activez opt-in-ul pe pagina /profile?

Când folosești Lolly pentru prima dată, tot ce scrii oriunde este complet privat, până când vrei în mod deliberat ca acea informație să iasă în lume, prin media sau printr-un link de partajare (dacă ești online).

Cu opt-in-ul selectat, integrăm o parte din informațiile din profilul tău ca proveniență în resurse și pachete, pentru a te identifica drept sursă.

Lolly produce un volum mare de conținut. Adoptăm o abordare strictă de minimizare a datelor, pentru a preveni riscurile.

### Ce sunt feature flag-urile?

Feature flag-urile activează sau dezactivează părți din Lolly. De obicei, un administrator controlează acest lucru — cu Lolly, tu ai controlul.

## Cum obțin aplicațiile mobile sau desktop?

Oricine își poate distribui propriile aplicații; instrumentele și configurația acestor aplicații ar trebui să varieze mult, în funcție de publicul căruia îi sunt destinate. Așadar, nu există o singură aplicație unică, decât dacă ai construit-o tu sau ți-a dat-o cineva relevant.

## De ce numele „Lolly Tools”?

**Lolly** Pentru că libertatea e dulce.
**Tools** sunt inactive când nu sunt folosite. Nu te spionează, nu rulează programe secrete, 
Pune-le la treabă — comenzile tale, acțiunile tale, condițiile tale.

**Lolly** este un termen australian, neozeelandez și britanic pentru „dulciuri” sau „bomboane”. Exact ca bomboanele, instrumentele sunt foarte apetisante pentru oamenii care au nevoie de ele.

De asemenea, râdem de timpul și de costurile pe care le economisim cu această abordare.

## Ce obstacole aș putea întâlni la adoptarea Lolly?

Lolly se integrează oriunde generezi deja fișiere — CLI-ul este același motor
ca și Aplicația, așa că o rulare de pipeline la ora 2 dimineața nu se poate abate de la ce
previzualizează o persoană într-un browser. Frecarea la adoptare este rareori tehnică;
este organizațională. Așteaptă-te la următoarele:

**Instrumentele și catalogul de brand trebuie create.** Lolly este o platformă, nu un
pachet finit al șabloanelor tale. Cineva trebuie să definească catalogul de resurse
(logo-uri, palete, fonturi ca ID-uri permanente) și să scrie manifestul + template-ul
pentru fiecare tip de rezultat.  

**Guvernanța rulează pe git.** „Review-ul de PR *este* moderarea” este elegant pentru
ingineri și neobișnuit pentru majoritatea echipelor de brand și marketing. Dacă persoanele
care dețin deciziile de brand nu trăiesc în git, vei avea nevoie de un flux de lucru care
să facă legătura — sau IT-ul devine, tacit, partenerul strategic de design și gardianul
instituțional mai larg. Ceea ce mulți preferă în medii de producție care rulează de mult timp. 

**Este îngust în mod deliberat — prezintă-l așa.** Lolly nu este pentru conținut
personalizat sau hero. *Este* DAM-ul tău personal — hidratat și super-alimentat de sistemul
tău de design, instrumentele și catalogul tău — și *chiar are* un canvas deschis (Layout
Studio), dar chiar și acolo culorile, tipografia și resursele respectă valorile globale de
design active, astfel încât aranjarea liberă rămâne în interiorul sistemului. Judecat față
de Figma sau Canva, va părea limitat. Judecat pentru ceea ce este — generare de resurse
operaționalizată, recurentă, la scară masivă — nimic nu se compară. Încadrarea greșită este
cel mai frecvent obstacol.

**Managementul schimbării pe partea de producție.** Procesele existente funcționează
astăzi, chiar dacă rezultatul nu respectă brandul. Redirecționarea lor către motor înseamnă
re-testare și re-învățare, iar „putem deja să facem fișiere” devine scuza pentru a nu migra.
Începe prin a converti un singur rezultat de producție, vizibil și de calitate, și arată
comparația înainte/după, una lângă alta.

Lolly ridică totul la un nivel superior.


## Ce diferențiază utilitarele de instrumente?

**Răspuns simplu →** Utilitarele nu trebuie mereu să randeze și, prin urmare, pot avea o UX diferită. 

**Răspuns real →** Motivul pentru care utilitarele pot fi găzduite în Lolly Tools este să adauge încă un „strat de comoditate” de apărare, care descurajează exfiltrarea de date. 

De ce? Pentru că se știe că, în fiecare zi, oamenii iau **conținut confidențial pe care îl au deja** și îl predau unui
site web oarecare, pentru a efectua o singură operațiune mecanică mică:

- „**Comprimă acest PDF**” → încarcă un contract / un fluturaș de salariu / o prezentare pentru consiliul de administrație către entități necunoscute.
- „**convertește HEIC în JPG**” → încarcă fotografii personale (cu EXIF GPS) pe o gazdă finanțată prin reclame
- „**decupează / redimensionează această imagine**” → încarcă o captură de ecran a unui produs sau o resursă nelansată
- „**formatează acest JSON**” / „decodează acest JWT” → lipește răspunsuri API, tokenuri, secrete într-un instrument de formatare
- „**combină aceste PDF-uri**” → încarcă **două documente care nu ar trebui niciodată să partajeze un server**

Aceste site-uri și lunga lor listă de clone masive sunt **nedemne de încredere în mod implicit** — cu
retenție necunoscută, jurisdicții necunoscute, subprocesatori necunoscuți și un model de afaceri
bazat pe reclame/afiliere, care are tot interesul să păstreze ce îi dai. Operațiunea este
trivială; **conținutul este costul.** 

Câștigăm războiul pentru guvernanță prin comoditate și servicii excelente. 

## Poate Lolly să editeze și să randeze fișierele mele Figma, Penpot, Illustrator sau InDesign?

Da. Deschide **Layout Studio** și dă click pe **Importă un design**: acceptă un fișier Figma nativ **.fig** (Salvează o copie locală), un export Penpot **.penpot**, un fișier Illustrator **.ai** sau **.pdf**, un fișier InDesign **.idml** (Fișier → Export → InDesign Markup), sau **orice SVG** (ușa largă — aproape orice aplicație de design îl poate exporta). Totul este analizat integral pe dispozitivul tău, fără a fi nevoie de cont sau plugin.

Straturile ajung ca niște casete editabile pe canvas-ul deschis: textul rămâne re-editabil, formele rămân forme, imaginile se alătură bibliotecii tale de pe dispozitiv, iar tipografia și culorile respectă valorile globale de brand. Salvează-l și layout-ul devine un template reutilizabil, adresabil prin URL, pe care oricine cu Lolly îl poate reumple — și poți combina instrumente live (un cod QR, un grafic) care se re-randează la încărcare. De acolo, se randează ca orice altceva în Lolly — SVG, PDF, PNG și restul, reproductibil din URL-ul său. Vezi [Importă un design](/info/design-import.html).

## Ce se întâmplă pe 29 august?

Instrumentele cu branding SUSE părăsesc proiectul, iar noi instrumente generice de exemplu, definite de utilizator, le iau locul.

SUSE va opera propriul Lolly, pentru a-și proteja mărcile înregistrate.

## Cât păstrează SUSE privat? (cunoscută și ca: când vine rug-pull-ul)

Mărcile înregistrate și instrumentele cu branding SUSE sunt doar pentru demonstrație, până pe 29 august. Poți găsi o instanță nebrandată a Lolly la [lolly.ART](https://lolly.art).

SUSE este o companie de infrastructură enterprise open source, cu peste trei decenii de leadership de platformă. Produsele sale includ soluții de infrastructură Linux, Cloud Native, Edge și IA, la nivel enterprise.

Din perspectiva SUSE, este vorba despre a-ți respecta cuvântul în privința suveranității și securității. La ora actuală, probabilitatea ca SUSE să transforme Lolly într-un produs comercial este aproape absolut zero.

Transparență completă: SUSE *chiar* construiește instrumente interne pentru a integra Lolly în sistemele sale IT — asta ține de configurația internă a SUSE, nu de dezvoltarea publică versus privată.

Vorbind despre partea publică, Lolly își propune să fie construit prin [Open Build Service](https://openbuildservice.org/), cu artefacte securizate de lanț de aprovizionare livrate de [SUSE Application Collection](https://apps.rancher.io/applications).

Vom construi cât mai mult posibil în mod deschis — pur și simplu nu vei mai vedea multă vreme instrumente cu branding SUSE, și nici forța de muncă internă și procesele comerciale ale SUSE, care nu au legătură cu Lolly.

## Ce aromă are logo-ul Lolly?

Unii spun Lime, alții spun Mentă, iar uneori Măr — Lolly aduce dulceața, tu faci aroma să prindă viață!