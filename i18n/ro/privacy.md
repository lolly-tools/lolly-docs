# Politica de confidențialitate

*Ultima actualizare: 19 iulie 2026*

> **Pe scurt.** Documentele, imaginile, videoclipurile și fișierele pe care le creezi
> în Lolly rămân pe dispozitivul tău. Nu există conturi pentru utilizarea obișnuită, nu
> există cookie-uri de la aplicația în sine, iar analytics sau trackere nu apar nicăieri
> în codul sursă - nu în sensul „nu folosim datele", ci pur și simplu nu sunt prezente
> în sursă. Există o listă scurtă și completă a excepțiilor în care software-ul comunică
> cu o rețea, iar fiecare dintre ele este descrisă mai jos în detaliu: ce pleacă, către
> cine și când. Singura excepție care implică ceva personal este o autentificare pe care
> trebuie să o pornești explicit. Dacă nu este în acest document, nu se întâmplă.

## Ce acoperă această politică

Lolly este software open-source - un engine, mai multe shell-uri de aplicație (web,
desktop, mobil, CLI) și o extensie de browser - pe care oricine îl poate rula. Această
politică are două părți:

- **Software-ul în sine**: ce face și ce nu face cu datele tale, oriunde ar rula. Aceasta
  este o proprietate a codului, deci este valabilă pentru fiecare implementare Lolly, a
  noastră sau a oricui altcuiva.
- **lolly.tools**, implementarea de referință operată de SUSE: alegerile concrete făcute
  în rularea componentelor opționale de pe server (ce se înregistrează, pentru cât timp, de
  către cine).

Dacă folosești o instanță Lolly găzduită de tine sau într-un mediu enterprise, comportamentul
software-ului descris mai jos rămâne valabil, dar *operatorul* acelei instanțe - nu SUSE -
este responsabil pentru orice ține de server: endpoint-ul lor de randare, serverul lor MCP,
autoritatea lor de certificare Content Credentials, dacă rulează una. Cere-le propria lor
politică; vezi [Adoptare și guvernanță](/info/adoption-governance.html) pentru ce presupune
operarea Lolly.

## Aplicația: ce rămâne pe dispozitivul tău

Shell-urile web, desktop și mobil ale Lolly rulează întregul engine de randare pe partea de
client. Deschiderea unui instrument, completarea intrărilor, previzualizarea și exportul se
întâmplă toate pe dispozitivul tău - niciun server nu este implicat, iar aplicația
funcționează offline odată încărcată.

**Aplicația nu setează niciun cookie.** Pentru a funcționa, păstrează o cantitate mică de
date **doar pe dispozitivul tău**, niciodată transmise:

- **Preferințe de interfață** - tema, limba, setările de sunet, dimensionarea barei
  laterale și a zoom-ului, alegerile de sortare și de vizualizare, ce sfaturi de
  familiarizare ai văzut - în `localStorage`, astfel încât să fie disponibile înainte ca
  aplicația să termine de pornit.
- **Un cache offline al catalogului de instrumente și al previzualizărilor de asseturi**,
  astfel încât galeria să funcționeze fără conexiune.
- **Contoare de utilizare locale** pentru statisticile de pe cardul tău de profil (câte
  exporturi, ce instrumente) - un mic blob mărginit în `localStorage`, niciodată citit de
  noi, niciodată trimis nicăieri.
- **Propriile tale documente, sesiuni salvate, asseturi și fonturi încărcate** - stocate în
  IndexedDB pe dispozitivul tău, niciodată încărcate, niciodată citite de nimeni în afară
  de tine.

Nimic din toate acestea nu este partajat, vândut sau folosit pentru a te identifica ori
urmări. Nu există nimic la care să consimți, pentru că nu se întâmplă nicio colectare - doar
această notificare, ca să știi ce se păstrează și unde. Șterge tot oricând din **Profil →
Șterge toate datele mele**, sau prin ștergerea stocării site-ului din browserul tău. (Conform
Directivei ePrivacy, art. 5(3), stocarea strict necesară pentru serviciul pe care l-ai cerut
nu necesită consimțământ - ci doar transparență, care este exact ceea ce sunt și acest
document și notificarea din aplicație.)

Propria ta copie de rezervă a acestor date - pachetul `lolly-backup` produs de **Exportă și
randează tot** - este un fișier pe care îl păstrezi și îl controlezi. Nu atinge niciodată
serverele noastre decât dacă alegi tu să îl trimiți undeva. Vezi [Transfer de
date](/info/data-transfer.html).

## Utilitare pe dispozitiv

Unele instrumente - **Strip Hidden Data**, **Compress PDF** și altele care poartă insigna
**„Rulează pe dispozitivul tău"** - operează asupra unui fișier pe care îl furnizezi. Fișierul
este citit în memorie în browserul tău, transformat local și oferit înapoi ca descărcare. Nu
este niciodată încărcat, pentru că nu există niciun server pe traseu către care să fie încărcat.
Aceste utilitare funcționează offline, iar rezultatul lor nu poartă niciun watermark sau metadată
proprie - scopul majorității dintre ele este să elimine și să protejeze datele, nu să adauge
riscuri.

## Când aplicația comunică cu o rețea, integral

Tabelul de mai jos este lista completă a tot ce descarcă sau trimite aplicația printr-o rețea.
Dacă nu este aici, aplicația nu o face.

| Ce | Ce pleacă efectiv de pe dispozitivul tău | Când |
|---|---|---|
| Sincronizarea catalogului de instrumente | Nimic personal - o cerere pentru indexul public propriu de instrumente și asseturi al Lolly | La pornire, apoi în cache offline |
| Capabilitatea de rețea declarată a unui instrument | Orice solicită acel instrument anume (de ex. dale de hartă) către host-ul (host-urile) anume pe care le pune pe allowlist în manifestul său | Doar în timpul folosirii acelui instrument |
| Google Fonts | Numele familiei de font ales și adresa ta IP, către serverele de fonturi ale Google | Doar dacă adaugi un Google Font în editorul de brand - o descărcare unică pentru fiecare familie, apoi rămâne pe dispozitivul tău |
| Verificarea semnăturii SEAL | O singură căutare DNS pentru o cheie publică, către domeniul menționat în interiorul fișierului verificat | Doar dacă Verify găsește o înregistrare SEAL într-un fișier pe care îl verifici - niciodată fișierul în sine |
| Modelele de detectare din deep-scan | Nimic personal - o descărcare unică de model de pe aceeași origine (nu un terț) | Doar dacă optezi pentru scanarea profundă a Verify |
| Instanță la distanță | Orice servește înapoi instanța pe care o numești, prin aceeași sincronizare de catalog descrisă mai sus | Doar dacă îndrepți explicit shell-ul către o altă implementare Lolly |

Niciuna dintre acestea nu îți trimite undeva documentele, proiectele, sesiunile sau fișierele
încărcate. Ele există pentru a aduce lucruri *către* dispozitivul tău (instrumente, fonturi,
modele, o cheie publică), niciodată pentru a trimite lucruri *de la* el, cu excepțiile numite
explicit în secțiunile de mai jos.

## URL-uri de randare hot-link

Aplicația în sine rămâne în întregime pe dispozitivul tău. Separat, și doar dacă îl folosești,
lolly.tools (și orice instanță găzduită de tine care îl lasă activat) răspunde la **URL-uri de
randare hot-link** - `https://lolly.tools/tool/<tool-id>.<ext>?<inputs>` - astfel încât un link
Lolly partajat să poată apărea ca imagine live într-un README, un wiki sau un dashboard.
Descărcarea unuia dintre aceste URL-uri cere serverului să randeze **date publice de instrument
și de catalog** cu intrările scrise în URL, iar acesta este întregul schimb:

- **Fără conturi, fără cookie-uri, fără stare.** Endpoint-ul este anonim; nimic nu este stocat
  pentru fiecare cerere, iar nimic de pe dispozitivul tău nu este citit. Documentele, sesiunile
  și fișierele tale încărcate nu părăsesc niciodată browserul - ele nu pot apărea deloc în aceste
  linkuri.
- **Intrările sunt publice prin construcție** - ele sunt orice a scris autorul linkului în URL,
  putând fi citite de oricine ajunge linkul. Nu pune secrete într-un link partajat, Lolly pune la
  dispoziție o funcție de criptare a linkurilor pentru conținut sensibil.
- Răspunsurile sunt **puse în cache și limitate ca rată** ca orice imagine publică și marcate
  `noindex` astfel încât motoarele de căutare să nu îți indexeze randările.

Găzduiești Lolly singur și nu vrei o suprafață de randare publică? Setează
`LOLLY_DISABLE_RENDER_GET=1` și fiecare dintre aceste URL-uri returnează 404.

## Serverul MCP (opțional, pentru agenți AI)

Lolly poate fi accesat și de un agent AI prin Model Context Protocol - un endpoint operat de un
operator (lolly.tools rulează unul; oricine își poate găzdui propriul endpoint, inclusiv complet
air-gapped). Împărtășește poziția fără conturi a traseului de randare, plus două instrumente care
manipulează în mod necesar octeți de fișier:

- **`lolly_transform`** (rulează un utilitar pe dispozitiv pe partea de server, în numele
  agentului apelant) și **`lolly_verify`** (verifică Content Credentials) acceptă amândouă octeții
  unui fișier de la apelant. Aceștia sunt procesați **în proces, în memorie**, iar rezultatul este
  returnat în același apel - fișierul nu este niciodată scris pe disc și niciodată stocat odată ce
  cererea se încheie.
- Orice alt instrument - `lolly_render`, `lolly_build_url`, `lolly_list_tools`,
  `lolly_describe_tool` - funcționează doar din parametri (text, numere, culori, URL-uri, id-uri de
  asseturi din catalog), aceleași intrări pe care le primește un URL de randare hot-link.
- Accesul este fie un token partajat pe care operatorul îl emite clienților în care are încredere,
  fie OAuth 2.1 fără stare: tokenuri semnate cu durată scurtă, verificate față de un secret partajat,
  fără nimic stocat pe server, iar tokenul în sine nu este niciodată scris într-un log sau într-un
  URL de randare.

## Identitatea Content Credentials (o autentificare pe care trebuie să o pornești tu)

Lolly poate sigila un **Content Credential** criptografic în exporturile tale, astfel încât oricine
să poată verifica, offline, că un fișier este nealterat de când a plecat din Lolly. Atât este
**activat implicit și complet local** - cheia de semnare este generată pe dispozitivul tău, este
**neextractibilă** (nici măcar propriul cod al Lolly nu o poate citi), iar semnarea în sine se
întâmplă offline. Această secțiune acoperă singurul pas *opțional* peste asta: înscrierea unei
identități verificate, astfel încât exporturile tale să spună „Verificat - semnat de \<emailul
tău\>" în loc de o cheie anonimă. **Dacă sari peste înscriere, nimic din această secțiune nu ți se
aplică, iar niciun fel de date personale nu părăsesc vreodată dispozitivul tău.**

Dacă totuși te înscrii, iată exact ce se întâmplă:

1. **Alegi o metodă de autentificare** - GitHub, Google, SUSE (Okta) sau un link trimis pe email.
   Pentru cei trei furnizori OIDC, ești redirecționat către propria pagină de autentificare a acelui
   furnizor, guvernată de politica lor de confidențialitate, nu de a noastră; serviciul de
   certificare al Lolly primește înapoi doar o adresă de email verificată și numele furnizorului.
   Pentru linkul pe email, adresa pe care o scrii este transmisă către **Resend**, un API de email
   tranzacțional, exclusiv pentru a livra acel unic link.
2. **Un cookie cu durată scurtă protejează redirecționarea.** Acesta este singurul cookie pe care
   întregul sistem Lolly îl setează: `lolly_ca_state`, `HttpOnly`, limitat la `/api/ca`, expirând în
   zece minute. Poartă o valoare aleatorie, nu un identificator de urmărire, și există doar pentru a
   împiedica falsificarea redirecționării OAuth. Este șters imediat ce autentificarea se finalizează.
3. **Adresa ta IP este folosită, pe scurt, pentru a preveni abuzul** endpoint-urilor de autentificare
   (astfel încât un script să nu poată inunda o căsuță de email sau epuiza cota de emailuri) - ținută
   doar în memoria serverului, pentru o fereastră glisantă de aproximativ un minut, niciodată scrisă
   într-un log sau persistată undeva.
4. **Serviciul de certificare emite un certificat cu durată scurtă** (7, 30, 90 sau 365 de zile, la
   alegerea ta, plafonat de politica operatorului) care leagă emailul tău verificat de jumătatea
   publică a perechii de chei generate pe dispozitivul tău. Jumătatea privată nu părăsește niciodată
   browserul tău.
5. **Emiterea este înregistrată**: adresa ta de email, furnizorul pe care l-ai folosit, un hash scurt
   al numărului de serie al certificatului și data lui de expirare, scrise în logurile operaționale
   ale serviciului - și, doar dacă operatorul a configurat unul, într-un webhook pe care îl
   controlează. Acesta este singurul loc în care o parte din datele tale personale este reținută pe un
   server, și există pentru ca un certificat compromis sau emis greșit să poată fi urmărit și pentru
   ca emiterea proprie a CA-ului să poată fi auditată.
6. **După asta, semnarea este din nou offline** pe toată durata de viață a certificatului. Exportul
   unui fișier nu contactează niciodată serviciul de certificare - doar înscrierea a făcut-o.

Pentru lolly.tools în mod specific: SUSE operează serviciul de certificare și deține aceste loguri de
emitere. Vezi [Drepturile tale](#your-rights) mai jos pentru cum să întrebi despre o intrare sau să o
elimini.

## Extensia de browser

Extensia de browser **Lolly URL Screenshot** nu colectează, nu stochează și nu transmite date
personale. Fără analytics, fără tracking, fără server la distanță.

**Ce face.** Când ceri aplicației web Lolly să facă o captură de ecran a unui URL, extensia deschide
acea pagină într-un tab temporar de fundal, o captează în browserul tău folosind DevTools Protocol,
returnează imaginea aplicației și închide tab-ul. Totul se întâmplă local, pe propriul tău dispozitiv
și propria ta rețea.

**Date.**

- **Nu colectăm nimic.** Extensia nu are servere proprii și nu face nicio solicitare de rețea proprie.
- **Imaginile capturate** merg direct la aplicația Lolly din același browser - nu sunt niciodată
  încărcate de extensie.
- **URL-urile pe care le capturezi** sunt folosite doar pentru a încărca acea unică pagină pentru acea
  unică captură de ecran. Nu sunt înregistrate și nici partajate.

**Permisiuni.**

- **`debugger`** - pentru a captura pagina randată prin DevTools Protocol (același mecanism folosit de
  aplicația desktop Lolly).
- **`tabs`** - pentru a deschide și închide tab-ul temporar în care se încarcă pagina.
- **Acces la host (`<all_urls>`)** - deoarece pagina pe care alegi să o capturezi poate fi pe orice
  site. Chrome afișează asta la momentul instalării ca un avertisment de permisiune amplu; extensia
  vizitează întotdeauna doar URL-ul pe care i-l dai.

Niciuna dintre acestea nu este folosită pentru a citi, monitoriza sau transmite navigarea ta dincolo de
acea unică captură solicitată.

## Loguri de infrastructură

Ca orice site web, serverele din spatele lolly.tools - și din spatele oricărei implementări Lolly -
generează loguri standard de acces ale serverului web ori de câte ori o cerere ajunge la ele: adresa IP,
calea solicitată, marcaj temporal, user agent, păstrate pentru o fereastră limitată pentru securitate și
prevenirea abuzului. Acela este un comportament de bază al găzduirii, nu ceva ce adaugă Lolly deasupra, și
nu conține niciodată conținutul documentelor tale, pentru că acelea nu ajung niciodată la un server de la
bun început. Singura excepție deliberată este un fișier pe care îl predai explicit unui apel MCP
`lolly_transform` sau `lolly_verify`, care este procesat în memorie și niciodată scris pe disc sau într-un
log, așa cum s-a descris mai sus.

## Confidențialitatea copiilor

Lolly nu colectează cu bună știință informații personale de la nimeni, de orice vârstă, în cursul obișnuit
al folosirii aplicației - nu există nimic de colectat. Singurul loc în care sunt adunate vreodată informații
personale (o adresă de email) este înscrierea în Content Credentials, descrisă mai sus, care nu este
îndreptată către copii și nici destinată lor.

## Drepturile tale

Deoarece aproape tot ce atinge Lolly este stocat doar pe propriul tău dispozitiv, majoritatea a ceea ce
legea privind protecția datelor numește „drepturile tale" - acces, corectare, ștergere, portabilitate -
sunt lucruri pe care le poți face deja singur, instantaneu, fără să întrebi pe nimeni: datele tale trăiesc
în stocarea browserului tău, într-o formă pe care o poți inspecta, exporta (**Exportă și randează tot**, mai
sus) sau șterge (**Profil → Șterge toate datele mele**).

Pentru singura bucată de date personale care poate ajunge pe un server - adresa ta de email, dacă te-ai
înscris pentru Content Credentials - contactează-ne (mai jos) pentru a întreba ce deținem sau pentru a o
elimina din logurile active. Eliminarea unei intrări din log nu revocă un certificat deja emis (este cu
durată scurtă prin design și pur și simplu expiră); oprește doar apariția acelei intrări în exporturile
viitoare ale logului.

Nu vindem date. Nu avem niciunele de vândut.

## Modificări ale acestei politici

Data din partea de sus se schimbă ori de câte ori se schimbă acest document. O modificare care alterează ce
pleacă de pe dispozitivul tău sau ce este reținut primește propria linie aici, nu o editare tăcută - dacă
vrei să vezi ce s-a schimbat, întreabă (mai jos) sau compară față de [sursa
publică](https://github.com/lolly-tools/lolly/commits/main/docs/privacy.md).

## Contact

Întrebări, sau o cerere conform „Drepturile tale" de mai sus: **Andy Fitzsimon**,
[fitzy@suse.com](mailto:fitzy@suse.com). Pentru o instanță Lolly găzduită de tine sau enterprise, contactează
în schimb pe cine o operează - SUSE și proiectul open source Lolly nu dețin date pentru implementările pe
care nu le rulează.
