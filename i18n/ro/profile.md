# Profiluri - cine ești când creezi

Un **profil** este identitatea de lucru *ca* care creează Lolly. Este micul set de detalii din care un instrument poate prelua, ca să nu le retastezi de fiecare dată - numele tău, datele de contact, o fotografie de profil opțională, câteva preferințe - plus tot ce acumulezi cât timp lucrezi: sesiuni salvate, imagini încărcate și numărătoarea locală de activitate.

Tot ce ține de un profil trăiește **pe dispozitiv**, în baza de date locală a browser-ului (IndexedDB pe web PWA, sistemul de fișiere pe aplicațiile Tauri). Nu există cont și nimic nu este încărcat. Îl gestionezi sub **Profile** (dreapta sus în galerie); instrumentele doar îl *citesc*, și doar câmpurile specifice pentru care au fost construite să le precompleteze.

> Un profil este despre *tine* (sau oricine creează aici). Este distinct de **Platform** - culorile, fonturile și setările globale ale brandului - și de **Capabilities**, catalogul a ceea ce poate face aplicația. Vezi [Profil vs. Platformă vs. Capabilități](#profile-vs-platform-vs-capabilities) la final.

## Ce conține un profil

![The Profile screen - name, contact, an optional headshot, and your preferences](/t/url-shot?url=%2F%23%2Fprofile&width=1440&height=900&dpi=192&waitMs=1600&format=png&localize=1&filename=profile-details)

| Parte | Ce este |
|---|---|
| **Nume** | Prenume și nume de familie. |
| **Contact** | Email și telefon. |
| **Locație** | Oraș și țară. |
| **Fotografie de profil** | O fotografie opțională, decupată la pătrat și păstrată ca imagine locală. Folosită de instrumente precum semnăturile de email, cardurile cu citate, blocurile de culoare și layout-urile dinamice. |
| **Use my details** | Un singur comutator de tip opt-in. Controlează dacă detaliile tale personale merg mai departe ca **proveniență** - linia de autor/credit încorporată în fișierele exportate - și ca autor la rulările batch **/pro**. (Nu condiționează precompletarea: vezi [Cum folosesc instrumentele profilul tău](#how-tools-use-your-profile).) |
| **Preferințe** | Tema ta (deschisă, întunecată sau SUSE) și ce părți ale aplicației ai activat prin **Feature flags**. |
| **Munca ta** | Sesiuni salvate (cu miniaturi) - organizate în foldere imbricate în **[Projects](/info/using.html)** - biblioteca ta **My images** și statisticile locale de activitate, toate asociate acestui profil. |

Nimic din toate acestea nu este obligatoriu. Un profil gol este un profil perfect valid; completezi doar ce îți economisește tastarea.

## Un profil este un context, nu doar o persoană

Cuvântul „profil" sugerează o singură persoană fixă, dar în Lolly este de fapt un **context de creație** - *cine ești cât timp creezi acest lucru*. Acel context poate lua trei forme diferite, iar Lolly le tratează pe toate la fel.

### Ca individ

Cazul implicit. Profilul ești tu: numele tău, emailul tău, fotografia ta de profil. Setează-l o dată, iar semnătura ta, ecusonul tău, lockup-ul tău de conferință se completează singure. Asta e tot ce va avea nevoie majoritatea oamenilor vreodată.

### Ca echipă

Un profil nu trebuie să fie o singură persoană. Poate reprezenta o **echipă sau o funcție din cadrul unei organizații**: numele comun al echipei, o adresă de inbox de grup (`events@…`), un departament, fotografia sau marca de unitate a echipei. O persoană îl configurează, îl exportă (vezi mai jos), iar restul echipei încarcă același profil - astfel încât tot ce produce echipa poartă detalii consistente, fără ca cineva să le retasteze. Un chioșc partajat sau un laptop demo predat poate rula un singur profil de echipă, ca care creează oricine se află în spatele lui.

### Ca funcție - un rol pe care îl porți uneori

Acesta este cazul pe care modelul rigid „o persoană, un profil" îl ratează. Ai putea fi **manager de eveniment trei zile pe an** și cu totul altceva restul timpului. În acele trei zile vrei detaliile evenimentului, inboxul evenimentului, poate un sub-brand de eveniment care să-ți completeze ecusoanele și semnalistica; celelalte 362 vrei identitatea ta normală înapoi.

În Lolly, acel rol este pur și simplu **un alt profil pe care îl păstrezi la îndemână** - un pachet salvat (secțiunea următoare) pe care îl încarci pentru eveniment și îl pui deoparte după. Rolul este o pălărie, nu un cont nou. Pune-l când ai nevoie, scoate-l când ai terminat.

## O instalare, un profil activ - poți păstra multe

În orice moment, o instalare are **un profil activ** - detaliile pe care le vede un instrument chiar acum. Nu există un comutator de profil în aplicație; în schimb, fiecare profil este un **pachet portabil** (un singur `.zip`, vezi [mai jos](#moving-a-profile-to-a-new-device)). Este, în mod deliberat, același mecanism ca mutarea pe un dispozitiv nou - un profil este un fișier pe care îl poți salva, copia și încărca.

Deci dacă chiar jonglezi cu mai multe contexte (tu, echipa ta, pălăria de manager de eveniment), păstrezi mai multe pachete și încarci pe cel de care ai nevoie:

- **Cel mai curat comutator:** **Profile → Storage → Clear all my data**, apoi **Import** pachetul pentru contextul în care intri. Acum creezi exclusiv ca acel profil.
- **Stratificare:** importul *fără* a șterge întâi **fuzionează** - profilul, sesiunile și imaginile importate se așază peste ce e deja acolo, înlocuind tot ce are același nume și lăsând restul neatins. Util pentru a prelua sesiunile salvate ale unei echipe în propria ta configurație; nu ce vrei dacă ai nevoie de o graniță curată de rol.
- **Unul lângă altul:** pentru că totul este limitat la dispozitiv, un profil de browser separat, un cont de utilizator separat sau un al doilea PWA instalat poartă fiecare propriul profil Lolly independent. Rulează instalarea ta personală și instalarea de chioșc de eveniment simultan, fără să comuți.

> Păstrează un pachet per context și redenumește fișierele după ce reprezintă (`LollyTools-events-2026.zip`, `LollyTools-me.zip`). Fișierul *este* profilul.

## Mutarea unui profil pe un dispozitiv nou

Pentru că un profil este în întregime local, singura modalitate de a-l aduce pe o instalare goală - un laptop nou, un browser resetat, mașina unui coleg, o cutie offline - este să **cari fișierul**. Niciun login nu îl restaurează pentru tine, și asta e ideea: nu a părăsit niciodată dispozitivul tău, de la bun început.

Sub **Profile → Storage → Move to another device**:

- **Export my data** descarcă un `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` - numit după profilul căruia îi aparține, cu un număr de secvență zilnic, astfel încât exporturile repetate să nu se ciocnească (părțile de nume sunt omise când profilul nu le are). Conține profilul tău, fiecare sesiune salvată (cu miniatura ei), imaginile tale încărcate și preferințele tale (temă, layout, statistici locale de activitate).
- **Import data…** pe cealaltă instalare citește acel fișier înapoi și reiei exact de unde ai rămas.

Pachetul este un zip simplu, autonom, deci călătorește prin **orice** mijloc - USB, AirDrop, un partaj de rețea, email către tine însuți - iar ținta poate fi complet offline. Fiecare parte are checksum, deci un fișier deteriorat în tranzit este detectat la import, în loc să fie restaurat pe jumătate stricat. Importul **fuzionează** (profilul/sesiunea/imaginea cu același nume este suprascrisă; tot restul este păstrat), deci nu șterge niciodată o țintă deja în uz.

Ce nu călătorește: cache-ul de catalog (se re-descarcă singur pe noul dispozitiv) și instrumentele în sine (se presupune că sunt deja prezente).

Pentru layout-ul exact al pachetului, politica de versiuni și regulile de integritate, vezi **[Data Transfer](/info/data-transfer.html)**; pentru parcursul complet, **[Folosirea Lolly → Mutarea pe alt dispozitiv](/info/using.html#moving-to-another-device)**.

## Cum folosesc instrumentele profilul tău

Un instrument doar *precompletează* câmpurile de profil pentru care a fost construit explicit să se lege:

**Legare explicită.** Un autor de instrument marchează un input ca preluând din profil (`bindToProfile: "firstname"`, `"email"`, `"headshot"`, …). Când instrumentul se deschide, acel input se precompletează din profilul tău - și îl poți suprascrie oricum pentru acea sesiune, fără să schimbi profilul. Precompletarea este o comoditate locală și se întâmplă indiferent dacă **Use my details** este activat.

**Opt-in-ul (proveniență).** Când exporți o resursă, detaliile tale merg opțional mai departe ca **proveniență** - o linie de autor/credit încorporată în metadatele fișierului (PNG, PDF, SVG, …) - astfel încât o resursă finită poate spune cine a creat-o. *Asta* este ce guvernează **Use my details**: lasă-l dezactivat, iar exportul tot poartă atribuirea de instrument/platformă „Made with Lolly", dar nicio linie personală de autor/contact nu este încorporată. (Același opt-in setează autorul la rulările batch **/pro**.) (Autori de instrumente: vezi [Authoring Tools → `bindToProfile`](/info/authoring-tools.html#bindtoprofile) și [Host API → `host.profile`](/info/host-api.html#host-profile).)

## Profil vs. Platformă vs. Capabilități

Trei lucruri stau aproape unul de altul în interfață și se confundă ușor:

- **Profil** - *tu* (sau echipa ta, sau rolul în care ești): nume, contact, fotografie de profil, munca ta salvată. Personal, local pe dispozitiv, portabil ca pachet.
- **Platformă** - *brandul*: culori, fonturi și setări globale pe baza cărora randează fiecare instrument. Comun și consistent, nu personal.
- **Capabilități** - *ce poate face aplicația*: setul complet de funcționalități și instrumentele disponibile pentru tine.

Un profil schimbă de la *cine* provine o resursă; platforma schimbă *cum arată*; capabilitățile sunt *ce poți crea*.

## Confidențialitate

Un profil nu este niciodată transmis, încărcat sau folosit pentru a te identifica sau urmări - nu ai nimic de acceptat, doar această notă ca să știi ce se păstrează. Șterge totul oricând cu **Profile → Clear all my data**. Vezi [Politica de confidențialitate](/info/privacy.html).
