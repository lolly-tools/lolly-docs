# Ghid de pornire rapidă

Lolly îți transformă regulile - culori, tipografie, layout-uri, logică - în instrumente pe care oricine le poate folosi pentru a crea fișiere finite: imagini, PDF-uri, carduri pentru social media, video, doar completând câteva câmpuri. Nu ai nimic de învățat și nimic de încărcat: totul rulează pe dispozitivul tău, online sau offline.

Aceasta este pagina pe care s-o citești prima. Două lucruri te fac productiv: **fă-l al tău** (orientează-l spre brandul tău) și **adu ce ai deja** (fișierele tale de design și tokenii). Orice altceva e la un click distanță.

> Ești nou în Lolly și vrei doar să creezi ceva? Deschide aplicația, alege orice instrument din galerie, completează câmpurile și apasă **Render**. Revino aici când vrei să poarte brandul *tău*.

## 1. Fă-l al tău - configurează-ți brandul

Brandul tău în Lolly este un mic document de **design tokens** - culori, fonturi și câteva reguli - pe baza căruia randează fiecare instrument. Setează-l o dată și tot ce creezi este pe brand prin construcție, nu prin review. Există trei căi de intrare; alege-o pe cea care se potrivește cu locul unde brandul tău trăiește deja.

### Începe de la zero (asistentul)

Prima rulare te duce pe ecranul **Start** (`#/start`). Dă-i un nume și o culoare primară, iar Lolly *derivă* o paletă completă, accesibilă, din ea - suprafețe deschise/închise, text, accente - folosind aceeași matematică a culorii pe care motorul o folosește peste tot. Alege un font și ai un brand funcțional în mai puțin de un minut. Poți rafina orice mai târziu.

### Importă un brand pe care îl ai deja

Dacă brandul tău este deja capturat ca design tokens - din **Penpot**, **Tokens Studio** (Figma) sau orice fișier **DTCG** simplu - adu-l integral, în loc să-l retastezi. Două căi:

- **În aplicație:** ecranul Start și editorul *Brandul tău* acceptă direct un fișier de tokeni (sau un pachet `LollyBrand`) - trage-l acolo și paleta prinde viață.
- **Din linia de comandă**, pentru a ridica un pachet de brand reutilizabil:

```bash
# a monolithic tokens.json, a one-file-per-set directory, or a Penpot project archive
npm run ingest:brand -- ./my-tokens.json --name acme --label "Acme" --activate
```

`ingest:brand` acceptă toate cele trei forme de container în care Penpot / Tokens Studio exportă același document - un singur `tokens.json`, un director (`$metadata.json` + fișiere per set) sau o arhivă `project.penpot`. Cu `--activate` înregistrează brandul ca profil, comută la el și reconstruiește catalogul. Vezi [Configurare](/info/configuration.html) pentru modul în care pachetele de brand și profilurile se îmbină.

### Ajustează-l în aplicație

Odată ce un brand e activ, editorul **Brandul tău** din dashboard (`#/d`) este un editor live - schimbi o culoare sau un rol și fiecare previzualizare de pe pagină se actualizează pe măsură ce tastezi. Același brand este rezumat pe cardul **Profil → Brandul tău**. Fonturile sunt reale: alegi din Google Fonts, iar Lolly stochează fișierul **pe dispozitivul tău** ca resursă de brand, astfel încât tipografia ta călătorește offline și nimic nu este preluat la randare.

Când ești mulțumit, **exportă brandul ca pachet `LollyBrand`** - un singur fișier pe care un coleg îl poate importa pentru a obține exact aceeași paletă, fonturi și reguli. Așa se mută un brand între oameni și mașini, fără un server la mijloc.

> **Tokenii de brand merg în ambele sensuri.** Pentru că brandul Lolly *este* tokeni DTCG - formatul pe care Penpot îl citește și îl scrie nativ și pe care Tokens Studio îl aduce în Figma -, paleta cu care *proiectezi* și paleta pe care Lolly o *impune* sunt un singur document, nu două liste pe care le ții sincronizate manual. Vezi [Design Tokens](/info/design-tokens.html).

## 2. Adu ce ai deja

Nu pornești de la o pagină goală. Lolly se deschide pentru munca de design și formatele deschise pe care le ai deja.

### Fișiere de design open-source

Lucrările finite din **Figma, Penpot, Illustrator, InDesign sau orice aplicație SVG** nu trebuie să rămână blocate în aplicația în care le-ai desenat. Deschide **Layout Studio**, dă click pe **Import a design**, iar fișierul se deschide ca un *layout viu* - nu o imagine aplatizată. Fiecare strat devine o casetă editabilă: textul rămâne re-tastabil, formele rămân forme, imaginile ajung în biblioteca ta, iar arta vectorială complexă este păstrată fidel. Sosește deja conformă cu fețele de brand și regulile de culoare ale tale.

| Ai | Adu-l ca |
|---|---|
| Un frame din Figma | Nativ `.fig` (File → Save local copy), sau un export SVG |
| Un design din Penpot | Exportul său `.penpot`, sau orice SVG |
| Un fișier din Illustrator | Nativ `.ai` (compatibil PDF) sau `.pdf` - se deschide direct |
| Un layout din InDesign | `.idml` (File → Export → InDesign Markup) |
| Orice altceva | **Orice SVG** - ușa universală de intrare |

Tot importul se întâmplă **pe dispozitivul tău** - fișierul este parsat în browser și nimic nu este încărcat. Detaliile complete, și exact ce se păstrează, sunt în [Import a design](/info/design-import.html).

### De la o creație unică la un șablon

Iată câștigul: un layout importat este o sesiune obișnuită de Layout Studio, deci odată ce îl **salvezi**, trăiește la o URL. Oricine are Lolly poate deschide acea URL, poate schimba cuvintele, poate înlocui o imagine și poate randa propria versiune - fără aplicație de design, iar părțile blocate rămân blocate. Un design de unică folosință devine un instrument reutilizabil. Asta e toată ideea, atinsă fără să scrii o linie de configurare.

### Date deschise și instrumente deschise

[Setul de instrumente al comunității](/info/builders.html) este open source și agnostic de brand - coduri QR, hărți stradale, filtre, utilitare de confidențialitate - și randează pe baza brandului *tău* în momentul în care îl activezi. Alimentează instrumentele și cu propriile tale date deschise: lipește sau trage un tabel **CSV** sau **JSON**, iar câmpurile repetitive ale unui instrument se completează din el, câte o resursă finită per rând.

## 3. Creează ceva, apoi distribuie-l sau automatizează-l

Cu un brand activ și materialul tău la îndemână, fiecare instrument produce un fișier finit:

- **Randează** orice instrument în **SVG, PDF, PNG, JPG, WebP, video** și altele - la dimensiuni reale de print și unități fizice, atunci când ai nevoie. Vezi [Export și formate](/info/exporting.html).
- **Distribuie un link.** Fiecare stare de instrument este o URL, deci o resursă finită este reproductibilă și adresabilă prin parametri - commite link-ul, regenerează-l la cerere.
- **Fă-o în masă.** Alimentează un șablon dintr-o foaie de calcul în [grila batch](/info/exporting.html): o resursă finită per rând.
- **Automatizează-l.** Aceeași randare rulează din [CLI](/info/cli.html) și dintr-un [agent AI](/info/ai-agents.html) - o URL este API-ul.

## Ce urmează

Trei căi, în funcție de ce ai venit să faci:

- **[Lolly pentru Creatori](/info/creators.html)** - creezi lucruri. Avantajele și cum să obții maximum din aplicație.
- **[Lolly pentru Dezvoltatori](/info/builders.html)** - creezi instrumente, integrezi și implementezi. Documentația tehnică.
- **[Lolly pentru Operatori](/info/operators.html)** - ești responsabil de brand, securitate și lansare la nivelul unei organizații.
