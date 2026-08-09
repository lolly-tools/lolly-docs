# Cum se compară Lolly

Unde se încadrează această platformă în peisajul mai larg al instrumentelor creative și unde, în mod deliberat, **nu** joacă un rol.

> **Status pilot:** Lolly este un prototip aflat într-un pilot închis, nu un produs finit, iar securitatea sa trece în prezent prin hardening-ul strict de infrastructură al SUSE, în pregătirea pentru scară enterprise. Această poziționare arată unde *își propune* Lolly să ajungă - pagina [Adopție și guvernanță](/info/adoption-governance.html#status) descrie modul în care acest lucru este testat în practică.

## Peisaj

![Layout Studio's free canvas, where the colours, faces and assets on offer are the brand's own](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio%3Ftemplate%3D__blank__&width=1440&height=900&dpi=192&waitMs=2400&walker=1&format=svg&dark=1&filename=aud-open-canvas&sweep=1)

| Capacitate | Canva (canvas deschis) | Portaluri de brand (șabloane DAM) | Illustrator (profesionist desktop) | Figma / Penpot (profesionist online) | **Lolly (axat pe constrângeri)** |
|---|---|---|---|---|---|
| Generare de conținut în masă | parțial | ✗ | ✗ | ✗ | **✓** |
| Funcționează complet offline | ✗ | ✗ | ✓ | parțial | **✓** |
| Logică de șablon și constrângeri stricte | ✗ | parțial | ✗ | parțial | **✓** |
| Nu necesită competențe de design | parțial | ✓ | ✗ | ✗ | **✓** |
| Content Credentials automate | ✗ | ✗ | parțial | ✗ | **✓** |
| Instrumentele compun alte instrumente | ✗ | ✗ | ✗ | ✗ | **✓** |
| Motor deschis, nu blocat în SaaS | ✗ | ✗ | ✗ | parțial | **✓** |
| C2PA content credentials | ✗ | ✗ | ✗ | ✗ | **✓** |
| Proveniență la nivel forensic, opțională | ✗ | ✗ | ✗ | ✗ | **✓** |
| Aplicații Mobile și Desktop | ✓ | ✗ | ✗ | parțial | **✓** |
| Linie de comandă și TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

Forma golului este clară: nimic din peisajul existent nu ne oferă o ieșire generativă axată pe constrângeri, capabilă offline, cu prag scăzut de competențe și accesibilă intern. Lolly include acum propriul canvas deschis - **Layout Studio**, un canvas liber cu manipulare directă - dar cu o diferență decisivă față de coloana Canva: culorile, tipografia și resursele plasate pe el respectă valorile globale de brand, astfel încât chiar și aranjarea liberă rămâne axată pe constrângeri. Ceea ce Lolly tot **nu** este e un pachet de design nerestricționat; designerii vor continua să folosească Illustrator și Figma pentru lucrări personalizate - iar atunci când acea lucrare trebuie să devină o resursă guvernată, reproductibilă, funcția [Importă un design](/info/design-import.html) din Layout Studio aduce fișierul Figma/Illustrator/Penpot finalizat pe canvas, sub formă de casete editabile, conforme brandului.

## Folosește-l pentru

![Deck Studio in the split view - the deck's slides listed as blocks on the left, the laid-out deck rendering on the right](/t/url-shot?url=%2F%23%2Ftool%2Fdeck-studio&width=1440&height=900&dpi=192&waitMs=2600&walker=1&format=svg&dark=1&filename=ov2-deck-studio-output)

Deck Studio e o bună măsură a plafonului de aici: un întreg set de slide-uri declarat ca date, aranjat live pe canvas și exportat ca un PowerPoint nativ, editabil.

- Generare rapidă de resurse creative operaționalizate (tile-uri de evenimente, ecusoane, semnături, alerte)
- Aranjare liberă pe canvas-ul deschis (Layout Studio) atunci când elementele - culori, tipografie, iconițe, imagini - trebuie să rămână conforme cu valorile globale de brand
- Aducerea unui design finalizat din Figma, Illustrator, InDesign sau Penpot (funcția Importă un design din Layout Studio), pentru a putea fi editat, guvernat și re-randat determinist în fiecare format Lolly
- Fluxuri „completează trei câmpuri, primești resursa finită” de tip one-to-many - inclusiv rulări în masă dintr-o foaie de calcul/CSV în grila batch `/pro` (lipești sau imporți rânduri, câte o resursă finită per rând, descărcare ca zip)
- Ieșiri de brand recurente, mereu active
- Situații în care controlul central al exprimării brandului contează mai mult decât flexibilitatea expresivă

## Nu îl folosi pentru

- Conținut hero personalizat sau emblematic (panouri publicitare, materiale video majore)
- Lucrări de campanie unice care au cu adevărat nevoie de un designer
- Ideație care trebuie să iasă complet din sistemul de brand - canvas-ul deschis al Lolly tot conformează culorile, tipografia și resursele cu valorile globale de brand, iar acesta este chiar scopul

## Aprobă instrumentul, nu fișierul

![The producer's whole job: type the words. Type, colour and spacing were settled when the tool was approved](/t/url-shot?url=%2F%23%2Ftool%2Fwordmark%3Ftext%3DApproved&width=1440&height=900&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=aud-approve-the-tool)

Orice alt instrument din peisaj produce un *fișier* care apoi trebuie verificat - un brand manager într-un thread de Slack, juridicul pe disclaimer, o rundă de modificări, încă un review. Lolly mută aprobarea **cu un pas mai în amonte**. Regulile de brand - codurile hex exacte, fișierele de font licențiate, marginile de bleed, spațierea - sunt fixate în codul HTML și CSS al instrumentului, așa că template-ul *nu poate fizic* să emită o resursă în afara brandului. Layout-ul însuși e portant.

Așa că nu mai aprobi rezultate, ci începi să aprobi **instrumentul** care le produce. Aprobă-l o dată și fiecare resursă produsă vreodată de el e pre-aprobată prin construcție - fără om în buclă, fără ciclu de review, la orice volum.

Aceasta e schimbarea de paradigmă pe care o aduce de fapt motorul determinist: nu e o versiune mai rapidă a vechiului proces de aprobare, ci elimină procesul. Pentru echipa de creație e o balustradă de siguranță, nu un înlocuitor - tu arunci în continuare mingea (datele, textul, imaginea), iar codul e banda cu bumperi care ține fiecare aruncare departe de canal.

| Aprobarea resurselor, pe metoda veche | Aprobarea instrumentului, pe metoda Lolly |
|---|---|
| Fiecare fișier finit e verificat, unul câte unul | Instrumentul e verificat o singură dată |
| Cerere → designerul construiește → review de brand → verificare juridică → modificări → re-review | O singură schimbare de parametru → resursă finită |
| Designerul, brand managerul, juridicul și solicitantul, toți în buclă | Producătorul, pe cont propriu |
| Zile per resursă | Secunde per resursă |
| 10.000 de resurse = 10.000 de cicluri de review | 10.000 de resurse = zero (template-ul era deja aprobat) |

## Ce oferă acest lucru în mod unic

![Amsterdam's canal rings and road network drawn edge to edge in the brand's own ink, every stroke placed by the template rather than by hand](/t/url-shot?url=%2F%23%2Ftool%2Fstreet-map%3Fcity%3Damsterdam%26theme%3Dlight%26full&width=1440&height=900&dpi=96&waitMs=3200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-street-map-poster)

- **Potențial de design îndrăzneț, livrat în siguranță, în context.** Instrumentele pot exprima idei de design aventuroase în interiorul unor bariere de protecție codificate ferm.
- **Automatizare de conținut definită prin software, care returnează resursa finală.** Input → fișier final. Fără „acum salvează-l din instrumentul tău de design și prelucrează-l ulterior”.
- **Instrumentele compun instrumente.** Un instrument poate integra randarea altui instrument și îl poate returna ca parte a unei singure resurse finite, fără nicio cuplare de cod între instrumente - o primitivă pe care niciun produs de tip canvas-deschis sau șablonare DAM din acest peisaj nu o oferă.
- **Neutralitate față de furnizori.** Control deplin asupra funcționalităților și costurilor. Motor open-source. Instrumentele și resursele sunt conținut urmărit prin git, nu blocat într-o bază de date SaaS.

Prima dintre ele e cea pe care oamenii o subestimează. O hartă a orașului la calitate de poster, desenată ca trasee vectoriale reale de străzi și apă, dintr-un dropdown și două câmpuri de culoare care nu pot fi îndreptate în afara brandului:
