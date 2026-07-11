# Cum se compară Lolly

Unde se încadrează această platformă în peisajul mai larg al instrumentelor creative și unde, în mod deliberat, **nu** joacă un rol.

> **Status pilot:** Lolly este un prototip aflat într-un pilot închis, nu un produs finit, iar securitatea sa trece în prezent prin hardening-ul strict de infrastructură al SUSE, în pregătirea pentru scară enterprise. Această poziționare arată unde *își propune* Lolly să ajungă — pagina [Adopție și guvernanță](/info/adoption-governance.html#status) descrie modul în care acest lucru este testat în practică.

## Peisaj

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


Forma golului este clară: nimic din peisajul existent nu ne oferă o ieșire generativă axată pe constrângeri, capabilă offline, cu prag scăzut de competențe și accesibilă intern. Lolly include acum propriul canvas deschis — **Layout Studio**, un canvas liber cu manipulare directă — dar cu o diferență decisivă față de coloana Canva: culorile, tipografia și resursele plasate pe el respectă valorile globale de brand, astfel încât chiar și aranjarea liberă rămâne axată pe constrângeri. Ceea ce Lolly tot **nu** este e un pachet de design nerestricționat; designerii vor continua să folosească Illustrator și Figma pentru lucrări personalizate — iar atunci când acea lucrare trebuie să devină o resursă guvernată, reproductibilă, funcția [Importă un design](/info/design-import.html) din Layout Studio aduce fișierul Figma/Illustrator/Penpot finalizat pe canvas, sub formă de casete editabile, conforme brandului.

## Folosește-l pentru

- Generare rapidă de resurse creative operaționalizate (tile-uri de evenimente, ecusoane, semnături, alerte)
- Aranjare liberă pe canvas-ul deschis (Layout Studio) atunci când elementele — culori, tipografie, iconițe, imagini — trebuie să rămână conforme cu valorile globale de brand
- Aducerea unui design finalizat din Figma, Illustrator, InDesign sau Penpot (funcția Importă un design din Layout Studio), pentru a putea fi editat, guvernat și re-randat determinist în fiecare format Lolly
- Fluxuri „completează trei câmpuri, primești resursa finită” de tip one-to-many — inclusiv rulări în masă dintr-o foaie de calcul/CSV în grila batch `/pro` (lipești sau imporți rânduri, câte o resursă finită per rând, descărcare ca zip)
- Ieșiri de brand recurente, mereu active
- Situații în care controlul central al exprimării brandului contează mai mult decât flexibilitatea expresivă

## Nu îl folosi pentru

- Conținut hero personalizat sau emblematic (panouri publicitare, materiale video majore)
- Lucrări de campanie unice care au cu adevărat nevoie de un designer
- Ideație care trebuie să iasă complet din sistemul de brand — canvas-ul deschis al Lolly tot conformează culorile, tipografia și resursele cu valorile globale de brand, iar acesta este chiar scopul

## Ce oferă acest lucru în mod unic

- **Potențial de design îndrăzneț, livrat în siguranță, în context.** Instrumentele pot exprima idei de design aventuroase în interiorul unor bariere de protecție codificate ferm.
- **Automatizare de conținut definită prin software, care returnează resursa finală.** Input → fișier final. Fără „acum salvează-l din instrumentul tău de design și prelucrează-l ulterior”.
- **Instrumentele compun instrumente.** Un instrument poate integra randarea altui instrument și îl poate returna ca parte a unei singure resurse finite, fără nicio cuplare de cod între instrumente — o primitivă pe care niciun produs de tip canvas-deschis sau șablonare DAM din acest peisaj nu o oferă.
- **Neutralitate față de furnizori.** Control deplin asupra funcționalităților și costurilor. Motor open-source. Instrumentele și resursele sunt conținut urmărit prin git, nu blocat într-o bază de date SaaS.