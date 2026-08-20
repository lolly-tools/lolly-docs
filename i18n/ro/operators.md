# Lolly pentru operatori

### O strategie de securitate și informații pe mai multe straturi de apărare - care se întâmplă să fie și o platformă de producție creativă

Sistemul imunitar organizațional zero-trust care se înfășoară în jurul a ceea ce faci deja - astfel încât munca creativă de rutină de care echipele tale au nevoie zilnic se întâmplă *în interiorul* perimetrului tău, în loc să se scurgă din el.

**Ce câștigi tu.** Ajungi să fii persoana care a spus da unui lucru deopotrivă sigur *și* popular. Închizi o gaură de exfiltrare, câștigi capabilitate și ștergi o coadă de cereri dintr-o singură mișcare - victoria rară de securitate care te face mai apreciat, nu mai puțin. Fără telefon de la legal la 3 dimineața pentru că fișiere sub embargo sau date despre clienți și-au găsit drumul într-o unealtă web oarecare; mai puțini furnizori SaaS, contracte și audituri pe masa ta; și o pistă de audit complet reproductibilă pe care o poți arăta când cineva întreabă. Dormi mai bine și, pe deasupra, luminezi câteva zile făcând-o.

Lolly nu este o unealtă creativă de mâna a doua: pune în mâinile tuturor ieșiri de calitate de producție, iar experiența de creație ghidată de brand nu are egal. Motivul pentru care este *sigur* să fie distribuită pe scară largă este arhitectural: nimic nu se încarcă în afară de ce ai pus tu acolo, fiecare rezultat este reproductibil, iar fiecare export poate purta mai multe straturi de înregistrări criptografice de top în domeniu. Indiferent cum a ajuns un document pe biroul tău, poți vedea proveniența lui completă, dacă a fost modificat și dacă îl poți recrea pixel cu pixel.

> **Unde se află astăzi.** Proprietățile de securitate ale Lolly sunt puternice prin design, iar motoarele sale de criptografie și de analiză a fișierelor trec prin întărirea de infrastructură de nivel enterprise a SUSE. Sigiliile, semnarea pe dispozitiv și criptarea descrise mai jos sunt reale și defendabile chiar acum și se maturizează spre certificare independentă - așadar, acolo unde un contract cere asigurare certificată, desfășoară-le ca apărare pe mai multe straturi cât timp acest proces se finalizează.

## Avantajul strategic

Modul obișnuit în care se face munca creativă de rutină este o suprafață de risc: fișiere trimise prin e-mail către contractori de design externi, active de brand încărcate în zeci de editoare SaaS, date despre clienți lipite într-o unealtă web a unui necunoscut ca "să facem repede un grafic". Fiecare dintre acestea înseamnă date care ies din controlul tău.

Lolly inversează situația. Munca ce *a determinat* acele scurgeri - cardul cu citat, bannerul localizat, ecusonul de eveniment, captura de ecran cu date redactate - se întâmplă acum într-o unealtă care rulează pe dispozitivul propriu al angajatului, față de brandul tău, fără niciun server implicat. Nu ai adăugat un control peste un flux de lucru riscant; ai înlocuit fluxul de lucru riscant cu unul care nu are, de la bun început, nicio cale de exfiltrare.

- **Configurația e a ta.** Engine-ul și shell-urile sunt open source (MPL-2.0). Suprapune-ți propria autentificare, telemetrie sau CA; găzduiește-o sau nu; ai control deplin asupra funcționalităților și costurilor, urmărit prin git, nu blocat într-o bază de date SaaS.
- **Guvernanța poate fi date, nu un tablou de bord.** Când vrei acel control, gestionează catalogul de unelte ca un repository Git - revizuirea pull-request-urilor devine aprobare de brand, cu o pistă de audit completă și revenire instantanee la orice șablon pe care forța ta de muncă îl poate atinge. Este o opțiune, nu o obligație, și cade pe exact un singur birou: creatorii lucrează în întregime în aplicație, salvând ce fac ca o **sesiune** și transmițând-o mai departe printr-un link de partajare, o copie de rezervă sau o colaborare live - niciuna dintre acestea nu are nevoie de git. Când una dintre acele sesiuni merită să devină un punct de plecare permanent, cel care rulează implementarea deschide linkul, îi înregistrează valorile ca **șablon** pe acea unealtă în pachetul de brand și face commit. De atunci încolo apare în selectorul "New from template" al uneltei și este accesibil printr-un link direct ca `?template=<id>`. Git este pasul de blocare al administratorului, folosit o singură dată, și niciodată ceva ce un creator trebuie să atingă. Vezi [Adoption & Governance](/info/adoption-governance.html).
- **Barierele de protecție sunt structurale.** Constrângerile de brand sunt codificate direct în șabloane, nu publicate ca linii directoare pe care oamenii le pot ignora. Ieșirea greșită nu este descurajată - este de nereprezentat.

> **Guvernezi întreaga ștafetă.** Un creativ scrie regulile, iar un dezvoltator le scalează, dar operatorul este cel care face acel ciclu de viață sigur de rulat la nivelul întregii organizații - aceeași unealtă care îi permite unui reprezentant să se autodeservească într-un avion este una pe care o poți condiționa prin revizuire Git, o poți implementa prin MDM-ul tău și o poți verifica criptografic. Vezi cum se combină rolurile în [The lifecycle of a campaign](/info/overview.html#the-lifecycle-of-a-campaign) și cum o guvernezi în [Adoption & Governance](/info/adoption-governance.html).

## Șterge coada de cereri în timp ce multiplici conținutul.

Unul dintre obiectivele Lolly este **devierea cererilor de design**: cereri de rutină care nu mai trebuie niciodată să ajungă la un designer, pentru că persoana care avea nevoie de activ l-a făcut singură, corect, în câteva minute. Fiecare tichet deviat este deopotrivă un câștig de productivitate și un fișier în minus care trece din mână în mână.

Lolly este construit să se potrivească cu felul în care organizația ta funcționează efectiv - nu există un singur mod corect de a-l implementa:

- **Implementează, nu servi.** Livrează Lolly pe dispozitive prin MDM-ul tău existent (Intune, Jamf, Munki…). Rulează local ca aplicație desktop/mobil sau ca PWA offline - funcționează în spatele oricărui firewall, în orice mediu izolat de rețea, fără server de întreținut și cu IT-ul în controlul ritmului de actualizare.
- **Doar servire.** Rulează o instanță în interiorul rețelei tale (sau în spatele unui VPN); utilizatorii ajung la ea printr-un browser, fără nimic instalat. Publică o unealtă o dată, toată lumea o are imediat; asociază cu IdP-ul tău pentru controlul accesului.
- **Hibrid.** Aplicații locale pentru munca offline pe teren, o versiune de browser mereu actualizată pentru mașini împrumutate - ambele îndreptate spre aceeași bibliotecă de unelte.

Modelele complete de implementare și ghidul de administrare se află în [Deployment](/info/deployment.html) și [Configuration](/info/configuration.html).

## Utilitare anti-exfiltrare

O categorie de unelte Lolly - utilitarele de confidențialitate - există *special* pentru a păstra fișierele în interiorul perimetrului.


- **Strip hidden data**
 Elimină locația și toate informațiile de identificare ascunse din documente și fișiere media.

- **Text Helper**  
Anonimizează, codează, formatează și manipulează text structurat și nestructurat. 

- **Compress PDF**
Micșorează un PDF supradimensionat pe dispozitiv, ca nimeni să nu apeleze la un site terț de tipul „comprimă-mi PDF-ul” în momentul în care un fișier e prea mare pentru a fi trimis prin email - exact locul pe unde scapă datele. 

Toate acestea sunt transformări pe dispozitiv: fișierul sau datele tale intră, ies octeți curățați și **nu există niciun server pe care să se încarce ceva**. Sunt opusul deliberat al instrumentului tipic „încarcă-ți fișierul pe site-ul unui străin ca să-l cureți”, la care un angajat bine intenționat ar apela altfel.

![Strip Hidden Data: fișierul ajunge pe canvas, iar insigna afirmă clar că nimic nu este încărcat](/t/url-shot?url=%2F%23%2Ftool%2Fstrip-data&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=aud-strip-data)

Text Helper oferă aceeași înțelegere, dar pentru text în loc de fișiere. Este banca de lucru cu file pe care un angajat ar căuta-o altfel pe site-ul unui străin și nu declară deloc intrări, pentru că nimic din ce atinge nu părăsește vreodată pagina.

![Banca de lucru Text Helper - un șir de file de operații deasupra unui card care afirmă că nimic din ce lipești nu părăsește dispozitivul tău](/t/url-shot?url=%2F%23%2Ftool%2Ftext-helper&width=1200&height=750&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-content&dark=1&filename=ov2-text-helper)

Compress PDF completează setul: atașamentul supradimensionat se micșorează sub o setare de calitate pe care o alegi tu, pe mașina care îl deține deja.

![Compress PDF - un nivel de calitate și un comutator pentru tonuri de gri în stânga, o zonă de plasare pentru propriul tău PDF în dreapta și nicio încărcare nicăieri](/t/url-shot?url=%2F%23%2Ftool%2Fcompress-pdf&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=ov2-compress-pdf)

## Determinism și reproductibilitate

Fiecare intrare a unui instrument poate fi exprimată ca parametru URL, iar aceleași intrări produc același fișier. Asta are două consecințe pentru operator:

- **Un URL este artefactul.** Fă commit la link, regenerează activul la cerere - fără fișiere binare încărcate în Git, fără căutarea „ultimei versiuni” prin chat. ID-urile de activ și de instrument sunt contracte permanente, deci un link creat azi tot se rezolvă mai târziu.
- **CLI-ul folosește aceeași cale de randare** ca interfața grafică, deci pipeline-urile de build și aplicația nu se abat niciodată una de la alta. Generează imagini OG, carduri sociale și vizuale de date la momentul build-ului, în mod reproductibil.

Prompt to Image este determinismul în forma sa cea mai simplă: textul este întreaga intrare, imaginea culeasă este întreaga ieșire, iar același text se culege mereu la fel.

![Prompt to Image - un bloc de text de prompt culese într-o imagine pătrată, fără nimic în rezultat care să nu fi fost în intrare](/t/url-shot?url=%2F%23%2Ftool%2Fprompt-to-image%3Ffull&width=1440&height=900&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-prompt-to-image)

## Proveniență și Content Credentials

![Zona de plasare Verify acceptă orice fișier, din orice sursă, și îl citește fără nicio solicitare de rețea](/t/url-shot?url=%2F%23%2Fverify&width=1440&height=900&dpi=192&waitMs=1800&waitSelector=.valid-drop&cropSelector=.valid-drop&format=svg&walker=1&dark=1&filename=aud-verify-drop)

Exporturile pot purta **Content Credentials** - un manifest [C2PA](https://c2pa.org) semnat, legat de un hash al octeților fișierului. Orice modificare ulterioară a fișierului rupe sigiliul, astfel încât un verificator compatibil C2PA **detectează alterarea criptografic, offline**. Acreditarea este *evidentă* la manipulare: semnalează manipularea în loc să o prevină, ceea ce este exact ce face posibilă verificarea complet offline.

- **Activ implicit, pe dispozitiv.** Cheia de semnare este generată pe dispozitiv, este ne-extractibilă (nici măcar Lolly nu o poate citi), iar semnarea are loc local - doar *înrolarea* opțională de identitate ajunge vreodată la rețea.
- **Niveluri de încredere.** Un export ne-înrolat este bine format, dar semnat anonim (`untrusted`). Înrolează o **identitate verificată** (certificat de scurtă durată de la CA-ul Lolly, legat de un email), iar verificatorii care fixează rădăcina Lolly raportează `trusted` + emailul semnatarului. O autoritate de marcare temporală de încredere și un semn verde de validator terț (conformitate C2PA) se află pe foaia de parcurs. Fiecare nivel este explicit, iar un fișier revendică vreodată doar încrederea pe care o poate dovedi.
- **Durata de viață a acreditării** este decizia operatorului/utilizatorului la momentul semnării: 7 / 30 / 90 / 365 de zile, implicit 30.
- **Lolly Imprint.** Un al doilea semnal, complementar, activ **implicit**: un filigran invizibil de pixeli inclus în exporturile raster (și în imaginile raster randate de Lolly dintr-un PDF/PPTX, niciodată în imaginea proprie încorporată de utilizator). Acolo unde acreditarea moare la orice modificare a containerului, Imprint supraviețuiește unei resalvări sau unei capturi de ecran - un indiciu durabil de tipul „acești pixeli au trecut prin Lolly”, doar de prezență, fără date personale. Este securitate prin obscuritate, nu o apărare consolidată, și completează acreditarea în loc s-o înlocuiască. `imprint=0` renunță.
- **Content Credentials durabile (opțional).** Un export raster poate purta suplimentar un marcaj *durabil* invizibil care codează un identificator de legare flexibilă (soft-binding), astfel încât acreditarea C2PA poate fi recuperată chiar și după ce o încărcare pe rețele sociale sau o resalvare a eliminat metadatele fișierului - cazul în care o acreditare normală s-ar pierde. Este disponibil doar pentru raster și costă o etapă de codare neuronală, deci este dezactivat implicit (`durable=1` pentru a-l activa). Lolly recunoaște azi propriul marcaj durabil offline pe `/verify`; recuperarea de către instrumente terțe (de exemplu Adobe) va urma odată ce rezoluția industrială pentru soft-binding va fi implementată.
- **Verificarea are loc pe dispozitiv.** Plasează orice fișier pe `/verify` (sau `lolly validate <file>`) pentru un raport offline despre dacă a fost creat cu adevărat cu Lolly și rămas neschimbat de atunci. Vizualizarea web Verify semnalează și conținutul generat de AI, detectează Lolly Imprint, verifică semnăturile **SEAL** (o semnătură la nivel de octet - cu zero solicitări de rețea: motorul primește un rezolvator de chei DNS *injectat*, iar niciun shell nu injectează unul astăzi, așa că o înregistrare care poartă propria cheie inline `pk=` se verifică complet offline, în timp ce una cu cheie prin DNS raportează „no key resolver and no inline key” în loc să contacteze rețeaua - vezi `SealPublicKeyResolver` în `engine/src/seal.ts`), opțional scanează în profunzime pentru filigrane de pixeli terțe (o descărcare unică de model pe dispozitiv) și scoate la iveală date ascunse - totul fără a încărca fișierul. Vezi [Content Credentials Identity](/info/content-credentials-identity.html).

> **Note de interoperabilitate.** Lolly își verifică propriile acreditări și multe dintre cele terțe offline, azi, inclusiv citirea manifestelor de revendicare C2PA **v2** de la alți producători. Două containere rămân în lucru, ambele pentru că C2PA nu are încă o mapare standardizată pentru ele, așa că Lolly poartă acreditarea într-un loc propriu, iar verificatorul Lolly este cel care o citește înapoi: **WebM** (manifestul călătorește ca atașament Matroska) și **Ogg/Opus** (un câmp `C2PA=` în antetul de comentarii OpusTags, cu acel interval de octeți exclus din legare, astfel încât audio-ul continuă să aibă același hash). Restul respectă specificația - instrumentele terțe verifică din start MP4, M4A, MP3, WAV, PNG, JPEG și PDF produse de Lolly. Vezi `engine/src/c2pa-containers.ts` pentru ambele mapări; ele converg spre standard odată ce acesta se stabilizează.

## Criptare și parolare

Pentru fișierele care trebuie să călătorească blocate, totul se întâmplă pe dispozitiv:

![Cardul de blocare din panoul de export: o parolă și o alegere explicită între cele două niveluri](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools%26format%3Dpdf%26password%3Ddemo%26options&width=1440&height=900&dpi=192&waitMs=2200&cropSelector=.export-pdfpass&walker=1&format=svg&dark=1&filename=aud-pdf-lock)

- **Parolă de deschidere PDF** - *Standard* este un descurajator RC4 pe 40 de biți (se deschide oriunde, poate călători într-un link); *Strong* este **AES-256** (PDF 2.0), tastat la export și niciodată pus într-un link.
- **Descărcări blocate** - un ZIP, un folder de Projects sau o rulare în lot pot fi blocate integral: *Standard* ZipCrypto (slab, universal) sau *Strong* **AES-256** (WinZip AE-2). Apărare în profunzime: orice PDF dintr-un zip Strong este *și* blocat individual cu AES-256, deci rămâne blocat după despachetare.
- **Linkuri de partajare protejate prin parolă** - întreaga stare a linkului este criptată AES-256 sub o cheie derivată prin PBKDF2; doar textul cifrat călătorește, parola nu se află niciodată în link, iar decriptarea are loc în browserul destinatarului.

## Pregătit pentru air-gap

Air-gap este o **implementare de prim rang**, nu un mod special - Lolly rulează din start fără rețea la momentul randării. Shell-ul web este un PWA offline-first (service worker); fonturile și WASM sunt stocate pe dispozitiv; starea instrumentelor este persistată local prin bridge-ul gazdă, niciodată prin `localStorage`. Modalitatea acceptată prin care un instrument ajunge la rețea este o capabilitate `host.net` **pe listă albă**, declarată în manifestul său - un shell care nu poate (sau nu vrea) să o îndeplinească o simulează cu un stub. Acesta este un contract de portabilitate, nu o limită impusă (vezi nota despre hooks de mai jos), motiv pentru care revizuirea codului instrumentului rămâne mijlocul de control - deși pe un dispozitiv air-gapped nu există oricum nimic de atins. Livrează shell-urile către dispozitive prin MDM-ul tău, sau servește o instanță în interiorul rețelei tale, iar o instalare complet air-gapped randează, exportă, criptează și verifică acreditări fără nimic către care să „sune acasă”.

## Bine de știut

Câteva lucruri bune de clarificat înainte de a-l implementa:

- **Consolidare în curs.** Criptografia și parserele trec prin procesul de consolidare la scară enterprise al SUSE (vezi mai sus) - solid prin proiectare azi; implementează ca apărare în profunzime acolo unde un contract cere asigurare certificată.
- **Hook-urile instrumentelor *nu* sunt un sandbox de securitate.** `hooks.js`-ul opțional al unui instrument rulează cu bridge-ul gazdă injectat, dar într-un shell de browser execută în domeniul paginii și *poate* ajunge la `window`/`document`/`fetch`. Tratează codul instrumentelor așa cum tratezi orice cod pe care îl rulezi - revizuiește-l. De aceea o organizație care rulează un catalog partajat poate condiționa accesul printr-o revizuire în Git; oricum ar fi, rulează doar instrumente pe care le-ai revizuit până când izolarea prin Worker va fi disponibilă.
- **Content Credentials sunt evidente la manipulare.** Detectează alterarea în loc s-o prevină - vezi notele de interoperabilitate de mai sus.
- **Două niveluri de criptare.** Blocajele *Standard* sunt descurajatori rapizi, universali; *Strong* (AES-256) este protecție completă - alege Strong pentru orice e sensibil, ținând cont că necesită un cititor modern.

## Ce urmează

- **[Security & Verification](/info/security.html)** - standardele, primitivele, modelul de încredere și testarea din spatele acreditărilor și criptării de mai sus.
- **[Adoption & Governance](/info/adoption-governance.html)** - persoanele, metrica de deviere și guvernanța-ca-date, în întregime.
- **[Deployment](/info/deployment.html)** - deploy/servire/hibrid, MDM și găzduirea proprie a serviciilor.
- **[Configuration](/info/configuration.html)** - profiluri, pachete de brand, condiționarea capabilităților și feature flags.
- **[Privacy Policy](/info/privacy.html)** - declarația formală despre ce se colectează, stochează și trimite și ce nu.
- **[Server Surface](/info/server-surface.html)** - inventarul complet al a ceea ce rulează pe server (două componente opționale) față de pe dispozitiv.
