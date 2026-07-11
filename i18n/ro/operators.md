# Lolly pentru operatori

**O strategie durabilă în timp, de apărare în profunzime, pentru prevenirea pierderii de date și pentru proveniență — care se întâmplă să fie și o platformă de producție creativă.**

Sistemul imunitar organizațional care se înfășoară în jurul a ceea ce faci deja — astfel încât munca creativă de rutină de care echipele tale au nevoie zilnic are loc *în interiorul* perimetrului tău, în loc să se scurgă în afara lui.

**Ce câștigi tu din asta.** Devii persoana care a spus da la ceva deopotrivă sigur *și* popular. Închizi o breșă de exfiltrare și ștergi coada de cereri de design dintr-o singură mișcare — victoria rară de securitate care te face mai plăcut, nu mai puțin. Niciun apel la 3 dimineața pentru că cineva a trimis prin email fișiere de brand unui contractor extern sau a lipit date de clienți într-un instrument web oarecare; mai puțini furnizori SaaS, contracte și audituri pe masa ta; și o urmă completă în git la care poți arăta atunci când cineva întreabă cine a aprobat ce. Dormi liniștit noaptea.

Lolly își câștigă locul ca instrument creativ: șterge coada de design și pune în mâinile tuturor rezultate de calitate de producție. Dar motivul pentru care e *sigur* să fie distribuit atât de larg ține de arhitectură. Nimic nu se încarcă, totul e reproductibil, iar fiecare export poate purta o înregistrare criptografică a originii sale. Pagina asta e povestea securității și a implementării.

> **Pe șleau, de la bun început.** Proprietățile de securitate ale Lolly sunt puternice *prin design*, iar motoarele sale de criptografie și parsare de fișiere trec în prezent prin hardening-ul strict de infrastructură al SUSE, în pregătirea pentru scară enterprise — ne pricepem foarte bine la asta. Sigiliile, semnarea pe dispozitiv și criptarea de mai jos sunt reale și pot fi susținute; cât timp acest hardening se finalizează, tratează-le drept apărare în profunzime, nu drept control certificat, în situațiile în care un contract impune o asigurare independentă. Preferăm să știi asta din start.

## Avantajul strategic

Modul obișnuit în care se face munca creativă de rutină este o suprafață de risc: fișiere trimise prin email unor contractori externi de design, resurse de brand încărcate într-o duzină de editoare SaaS, date de clienți lipite în instrumentul web al unui străin doar ca să „faci rapid un grafic”. Fiecare dintre acestea înseamnă date care îți ies de sub control.

Lolly inversează asta. Munca ce *a provocat* aceste scurgeri — cardul cu citate, bannerul localizat, ecusonul de eveniment, screenshot-ul cenzurat — se întâmplă acum pe un instrument care rulează pe dispozitivul propriu al angajatului, respectând brandul tău, fără niciun server implicat. Nu ai adăugat un control peste un flux de lucru riscant; ai înlocuit fluxul de lucru riscant cu unul care nu are, de la bun început, nicio cale de exfiltrare.

- **Configurarea îți aparține.** Motorul și shell-urile sunt open source (MPL-2.0). Suprapune propria autentificare, telemetrie sau CA; găzduiește-l sau nu; păstrezi controlul complet asupra funcționalităților și costurilor, urmărit prin git, nu blocat într-o bază de date SaaS.
- **Guvernanța este date, nu un dashboard.** Catalogul de instrumente este sursa de adevăr, gestionat ca un repository Git — revizuirea prin pull request *este* moderarea, iar tu obții o urmă de audit completă și un rollback instant pentru fiecare template pe care forța de muncă îl poate atinge. Vezi [Adopție și guvernanță](/info/adoption-governance.html).
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

Exporturile pot purta **Content Credentials** — un manifest [C2PA](https://c2pa.org) semnat, legat de un hash al octeților fișierului. Aceasta înseamnă **sesizabilă la *falsificare*, nu *imună* la falsificare**: nu împiedică pe nimeni să modifice un fișier, dar orice schimbare ulterioară rupe sigiliul, iar un verificator compatibil C2PA raportează asta. Aceasta e proprietatea onestă și utilă — poți *detecta* modificarea, criptografic, offline.

- **Activ implicit, pe dispozitiv.** Cheia de semnare este generată pe dispozitiv, nu poate fi extrasă (nici măcar Lolly nu o poate citi), iar semnarea are loc local — doar *înrolarea* opțională de identitate atinge vreodată rețeaua.
- **Niveluri de încredere.** Un export neînrolat este structural valid, dar semnat anonim (`untrusted`). Înrolează o **identitate verificată** (certificat de scurtă durată de la CA-ul Lolly, legat de un email) și verificatorii care fixează (pin) rădăcina Lolly raportează `trusted` + emailul semnatarului. O autoritate de marcare temporală de încredere și un verde de la un validator terț (conformitate C2PA) sunt pe roadmap, nu livrate încă — nivelurile sunt etichetate onest, iar un fișier nu arată niciodată un verde fals.
- **Durata de viață a credențialului** este decizia operatorului/utilizatorului la momentul semnării: 7 / 30 / 90 / 365 de zile, implicit 30.
- **Verificarea are loc pe dispozitiv.** Trage orice fișier pe `/valid` (sau `lolly validate <file>`) pentru un raport offline despre dacă a fost cu adevărat făcut cu Lolly și neschimbat de atunci. Vezi [Identitate Content Credentials](/info/content-credentials-identity.html).

> **Lacună cunoscută, spusă pe șleau:** verificatorul Lolly nu citește încă în întregime manifestele C2PA claim **v2** de la alți producători; iar WebM poartă manifestul ca atașament Matroska (nu există încă o mapare C2PA standardizată pentru WebM), așa că instrumentele terțe verifică fișierele MP4 ale Lolly, dar nu și pe cele WebM.

## Criptare și parolare

Pentru fișierele care trebuie să circule blocate, totul se întâmplă pe dispozitiv:

- **Parolă de deschidere PDF** — *Standard* este un descurajator RC4 pe 40 de biți (se deschide oriunde, poate călători într-un link); *Strong* este **AES-256** (PDF 2.0), introdusă la export și niciodată pusă într-un link.
- **Descărcări blocate** — un ZIP, un folder de Proiecte sau o rulare batch poate fi blocat în întregime: *Standard* ZipCrypto (slab, universal) sau *Strong* **AES-256** (WinZip AE-2). Apărare în profunzime: orice PDF dintr-un zip Strong este *de asemenea* blocat individual cu AES-256, astfel încât rămâne blocat și după dezarhivare.
- **Linkuri de partajare protejate prin parolă** — întreaga stare a linkului este criptată AES-256 sub o cheie derivată PBKDF2; doar textul cifrat călătorește, parola nu se află niciodată în link, iar decriptarea are loc în browserul destinatarului.

## Pregătit pentru air-gap

Lolly este conceput să ruleze **fără rețea la momentul randării**. Shell-ul web este un PWA offline-first (service worker); fonturile și WASM sunt stocate pe dispozitiv; starea instrumentului este persistată local prin podul gazdă, niciodată prin `localStorage`. Orice instrument care atinge rețeaua o face doar printr-o capacitate `host.net` **aflată pe listă albă**, pe care trebuie să o declare în manifestul său — un shell care nu o poate (sau nu vrea) îndeplini o înlocuiește cu un stub inofensiv. Astfel, o instalare complet air-gapped randează, exportă, criptează și verifică credențiale fără să aibă nimic către care să transmită date.

## Ce trebuie să știi înainte să te bazezi pe el

Operatorii merită avertismentele, nu doar afirmațiile:

- **Hardening pentru scară enterprise.** Așa cum am spus la început — criptografia și parserele trec în prezent prin hardening-ul strict de infrastructură al SUSE pentru scară enterprise; puternice prin design, iar acolo unde un contract impune o asigurare independentă, tratează-le drept apărare în profunzime.
- **Hook-urile instrumentelor *nu* sunt un sandbox de securitate.** `hooks.js`-ul opțional al unui instrument rulează cu podul gazdă injectat, dar într-un shell de browser se execută în domeniul (realm) paginii și *poate* accesa `window`/`document`/`fetch`. Tratează codul instrumentelor așa cum tratezi orice cod pe care îl rulezi — revizuiește-l. De aceea contează modelul „catalog ca review în Git”, și de aceea instrumentele terțe nesigure nu ar trebui rulate până când apare izolarea prin Worker.
- **C2PA este detectabil la manipulare, nu imun la manipulare**, iar lacunele de mai sus privind citirea v2 și WebM sunt reale.
- **Nivelurile de criptare diferă.** Blocajele *Standard* sunt descurajatoare; doar *Strong* (AES-256) reprezintă protecție reală, iar fișierele Strong nu se deschid în orice reader vechi.

## Unde mergi mai departe

- **[Adopție și guvernanță](/info/adoption-governance.html)** — persona-urile, metrica de deviere și guvernanța-ca-date, în detaliu.
- **[Deployment](/info/deployment.html)** — deploy/serve/hibrid, MDM și găzduirea proprie a serviciilor.
- **[Configurare](/info/configuration.html)** — profiluri, pachete de brand, condiționare prin capabilități și feature flags.
- **[Politica de confidențialitate](/info/privacy.html)** — declarația formală „nu colectează nimic, nu încarcă nimic”.
