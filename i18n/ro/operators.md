# Lolly pentru operatori

### O strategie durabilă în timp, de apărare în profunzime, pentru prevenirea pierderii de date și pentru proveniență — care se întâmplă să fie și o platformă de producție creativă

Sistemul imunitar organizațional care se înfășoară în jurul a ceea ce faci deja — astfel încât munca creativă de rutină de care echipele tale au nevoie zilnic are loc *în interiorul* perimetrului tău, în loc să se scurgă în afara lui.

**Ce câștigi tu din asta.** Devii persoana care a spus da la ceva deopotrivă sigur *și* popular. Închizi o breșă de exfiltrare și ștergi coada de cereri de design dintr-o singură mișcare — victoria rară de securitate care te face mai plăcut, nu mai puțin. Niciun apel la 3 dimineața pentru că cineva a trimis prin email fișiere de brand unui contractor extern sau a lipit date de clienți într-un instrument web oarecare; mai puțini furnizori SaaS, contracte și audituri pe masa ta; și o urmă completă în git la care poți arăta atunci când cineva întreabă cine a aprobat ce. Dormi liniștit noaptea.

Lolly își câștigă locul ca instrument creativ: șterge coada de design și pune în mâinile tuturor rezultate de calitate de producție. Dar motivul pentru care e *sigur* să fie distribuit atât de larg ține de arhitectură. Nimic nu se încarcă, totul e reproductibil, iar fiecare export poate purta o înregistrare criptografică a originii sale. Pagina asta e povestea securității și a implementării.

> **Unde se află astăzi.** Proprietățile de securitate ale Lolly sunt puternice prin design, iar motoarele sale de criptografie și de parsare a fișierelor trec prin hardening-ul de infrastructură de nivel enterprise al SUSE. Sigiliile, semnarea pe dispozitiv și criptarea de mai jos sunt reale și pot fi susținute acum, maturizându-se spre certificare independentă — așa că acolo unde un contract impune o asigurare certificată, implementează-le drept apărare în profunzime cât timp acel proces se finalizează.

## Avantajul strategic

Modul obișnuit în care se face munca creativă de rutină este o suprafață de risc: fișiere trimise prin email unor contractori externi de design, resurse de brand încărcate într-o duzină de editoare SaaS, date de clienți lipite în instrumentul web al unui străin doar ca să „faci rapid un grafic”. Fiecare dintre acestea înseamnă date care îți ies de sub control.

Lolly inversează asta. Munca ce *a provocat* aceste scurgeri — cardul cu citate, bannerul localizat, ecusonul de eveniment, screenshot-ul cenzurat — se întâmplă acum pe un instrument care rulează pe dispozitivul propriu al angajatului, respectând brandul tău, fără niciun server implicat. Nu ai adăugat un control peste un flux de lucru riscant; ai înlocuit fluxul de lucru riscant cu unul care nu are, de la bun început, nicio cale de exfiltrare.

- **Configurarea îți aparține.** Motorul și shell-urile sunt open source (MPL-2.0). Suprapune propria autentificare, telemetrie sau CA; găzduiește-l sau nu; păstrezi controlul complet asupra funcționalităților și costurilor, urmărit prin git, nu blocat într-o bază de date SaaS.
- **Guvernanța poate fi date, nu un dashboard.** Când vrei acel control, gestionează catalogul de instrumente ca un repository Git — revizuirea prin pull request devine aprobarea de brand, cu o urmă de audit completă și un rollback instant pentru fiecare template pe care forța ta de muncă îl poate atinge. Este o opțiune, nu o obligație: echipele care vor pur și simplu să creeze lucruri își autorizează propriile instrumente în Layout Studio și își aduc propriile fișiere în catalog, în întregime în aplicație, fără să atingă vreodată git. Vezi [Adopție și guvernanță](/info/adoption-governance.html).
- **Barierele de siguranță sunt structurale.** Constrângerile de brand sunt integrate direct în templateuri, nu publicate ca îndrumări pe care oamenii le pot ignora. Rezultatul greșit nu este doar descurajat — este de nereprezentat.

## Șterge coada de cereri în timp ce multiplici conținutul.

Unul dintre obiectivele Lolly este **devierea cererilor de design**: cereri de rutină care nu mai trebuie să ajungă niciodată la un designer, pentru că persoana care avea nevoie de resursă și-a făcut-o singură, corect, în câteva minute. Fiecare tichet deviat este atât un câștig de productivitate, cât și un fișier în minus care își schimbă mâna.

Lolly este construit să se potrivească modului în care funcționează cu adevărat organizația ta — nu există un singur mod corect de a-l implementa:

- **Distribuie, nu servi.** Livrează Lolly pe dispozitive prin MDM-ul tău existent (Intune, Jamf, Munki…). Rulează local ca aplicație desktop/mobil sau ca PWA offline — funcționează în spatele oricărui firewall, în orice mediu air-gapped, fără niciun server de întreținut, iar IT-ul controlează ritmul actualizărilor.
- **Doar servește.** Rulează o singură instanță în interiorul rețelei tale (sau în spatele unui VPN); utilizatorii ajung la ea printr-un browser, fără nimic instalat. Publici un instrument o singură dată, iar toată lumea îl are imediat; combină-l cu IdP-ul tău pentru controlul accesului.
- **Hibrid.** Aplicații locale pentru munca offline pe teren, o versiune de browser mereu actualizată pentru dispozitive împrumutate — ambele îndreptate spre aceeași bibliotecă de instrumente.

Modelele complete de implementare și ghidul de administrare se află în [Deployment](/info/deployment.html) și [Configurare](/info/configuration.html).

## Utilitare anti-exfiltrare

O categorie de instrumente Lolly există *special* pentru a păstra fișierele în interiorul perimetrului. Utilitarele de confidențialitate.


- **Elimină datele ascunse**
Elimină locația și toate informațiile ascunse de identificare din documente și fișiere media.

- **Asistent de text**
Anonimizează, codifică, formatează și manipulează text structurat și nestructurat.

- **Comprimă PDF**
Previne orice risc de „criză a limitei de e-mail” în care instrumentele web terțe pândesc și datele

- **Comprimă PDF**
Previne orice risc de „criză a limitei de e-mail” în care instrumentele web terțe pândesc și datele ies pe fereastră.

Toate acestea sunt transformări pe dispozitiv: fișierul sau datele tale intră, ies octeți curați, iar **nu există niciun server pe care să încarci ceva**. Sunt opusul deliberat al instrumentului tipic „încarcă-ți fișierul pe site-ul unui străin ca să-l cureți”, la care ar apela altfel un angajat bine intenționat.



## Determinism și reproductibilitate

Fiecare input al unui instrument poate fi exprimat ca parametru URL, iar aceleași inputuri produc întotdeauna același fișier. Asta are două consecințe pentru operatori:

- **Un URL este artefactul.** Faci commit la link, regenerezi resursa la cerere — fără binare adăugate în Git, fără vânătoare după „ultima versiune” prin chat. ID-urile de resurse și instrumente sunt contracte permanente, așa că un link creat azi se rezolvă și mai târziu.
- **CLI-ul folosește același traseu de randare** ca GUI-ul, astfel încât pipeline-urile de build și aplicația nu se abat niciodată una de la alta. Generează imagini OG, carduri pentru social media și vizualizări de date la momentul build-ului, reproductibil.

## Proveniență și Content Credentials

Exporturile pot purta **Content Credentials** — un manifest [C2PA](https://c2pa.org) semnat, legat de un hash al octeților fișierului. Orice schimbare ulterioară a fișierului rupe sigiliul, așa că un verificator compatibil C2PA **detectează modificarea criptografic, offline**. Credențialul este sesizabil la *falsificare*: semnalează manipularea în loc să o împiedice, ceea ce este exact ceea ce face posibilă verificarea complet offline.

- **Activ implicit, pe dispozitiv.** Cheia de semnare este generată pe dispozitiv, nu poate fi extrasă (nici măcar Lolly nu o poate citi), iar semnarea are loc local — doar *înrolarea* opțională de identitate atinge vreodată rețeaua.
- **Niveluri de încredere.** Un export neînrolat este structural valid, dar semnat anonim (`untrusted`). Înrolează o **identitate verificată** (certificat de scurtă durată de la CA-ul Lolly, legat de un email) și verificatorii care fixează (pin) rădăcina Lolly raportează `trusted` + emailul semnatarului. O autoritate de marcare temporală de încredere și un verde de la un validator terț (conformitate C2PA) sunt pe roadmap. Fiecare nivel este explicit, iar un fișier revendică întotdeauna doar încrederea pe care o poate dovedi.
- **Durata de viață a credențialului** este decizia operatorului/utilizatorului la momentul semnării: 7 / 30 / 90 / 365 de zile, implicit 30.
- **Verificarea are loc pe dispozitiv.** Trage orice fișier pe `/valid` (sau `lolly validate <file>`) pentru un raport offline despre dacă a fost cu adevărat făcut cu Lolly și neschimbat de atunci. Vezi [Identitate Content Credentials](/info/content-credentials-identity.html).

> **Note de interoperabilitate.** Lolly verifică propriile credențiale și multe dintre cele terțe offline chiar acum. Două aspecte de interoperabilitate sunt în lucru: citirea completă a manifestelor C2PA claim **v2** de la alți producători și WebM — care nu are încă o mapare C2PA standardizată, așa că Lolly atașează manifestul ca parte Matroska (instrumentele terțe verifică fișierele MP4 ale Lolly din start; WebM urmează odată ce standardul se stabilizează).

## Criptare și parolare

Pentru fișierele care trebuie să circule blocate, totul se întâmplă pe dispozitiv:

- **Parolă de deschidere PDF** — *Standard* este un descurajator RC4 pe 40 de biți (se deschide oriunde, poate călători într-un link); *Strong* este **AES-256** (PDF 2.0), introdusă la export și niciodată pusă într-un link.
- **Descărcări blocate** — un ZIP, un folder de Proiecte sau o rulare batch poate fi blocat în întregime: *Standard* ZipCrypto (slab, universal) sau *Strong* **AES-256** (WinZip AE-2). Apărare în profunzime: orice PDF dintr-un zip Strong este *de asemenea* blocat individual cu AES-256, astfel încât rămâne blocat și după dezarhivare.
- **Linkuri de partajare protejate prin parolă** — întreaga stare a linkului este criptată AES-256 sub o cheie derivată PBKDF2; doar textul cifrat călătorește, parola nu se află niciodată în link, iar decriptarea are loc în browserul destinatarului.

## Pregătit pentru air-gap

Air-gap-ul este o **implementare de prim rang**, nu un mod special — Lolly rulează fără rețea la momentul randării din start. Shell-ul web este un PWA offline-first (service worker); fonturile și WASM sunt stocate pe dispozitiv; starea instrumentului este persistată local prin podul gazdă, niciodată prin `localStorage`. Orice instrument care atinge rețeaua o face doar printr-o capacitate `host.net` **aflată pe listă albă**, pe care trebuie să o declare în manifestul său — un shell care nu o poate (sau nu vrea) îndeplini o înlocuiește cu un stub. Livrează shell-urile pe dispozitive prin MDM-ul tău, sau servește o singură instanță în interiorul rețelei tale, iar o instalare complet air-gapped randează, exportă, criptează și verifică credențiale fără să aibă nimic către care să transmită date.

## Bine de știut

Câteva lucruri de clarificat înainte să-l implementezi:

- **Hardening în curs.** Criptografia și parserele trec prin hardening-ul la scară enterprise al SUSE (vezi mai sus) — puternice prin design astăzi; implementează-le drept apărare în profunzime acolo unde un contract impune o asigurare certificată.
- **Hook-urile instrumentelor *nu* sunt un sandbox de securitate.** `hooks.js`-ul opțional al unui instrument rulează cu podul gazdă injectat, dar într-un shell de browser se execută în domeniul (realm) paginii și *poate* accesa `window`/`document`/`fetch`. Tratează codul instrumentelor așa cum tratezi orice cod pe care îl rulezi — revizuiește-l. De aceea o organizație care rulează un catalog partajat îl poate condiționa prin review în Git; oricum ar fi, rulează doar instrumente pe care le-ai revizuit până când apare izolarea prin Worker.
- **Content Credentials sunt sesizabile la falsificare.** Detectează modificarea în loc să o împiedice — vezi notele de interoperabilitate de mai sus.
- **Două niveluri de criptare.** Blocajele *Standard* sunt descurajatoare rapide, universale; *Strong* (AES-256) reprezintă protecție completă — alege Strong pentru orice e sensibil, ținând cont că vrea un reader modern.

## Unde mergi mai departe

- **[Adopție și guvernanță](/info/adoption-governance.html)** — persona-urile, metrica de deviere și guvernanța-ca-date, în detaliu.
- **[Deployment](/info/deployment.html)** — deploy/serve/hibrid, MDM și găzduirea proprie a serviciilor.
- **[Configurare](/info/configuration.html)** — profiluri, pachete de brand, condiționare prin capabilități și feature flags.
- **[Politica de confidențialitate](/info/privacy.html)** — declarația formală „nu colectează nimic, nu încarcă nimic”.
