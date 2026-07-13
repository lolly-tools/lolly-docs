# Politica de confidențialitate

*Ultima actualizare: iunie 2026*

## Aplicația Lolly

Lolly rulează în întregime în browserul tău. **Nu colectăm nimic, nu transmitem nimic și nu avem servere care să vadă datele tale.** Nu există analytics, nu există tracking și niciun terț de orice fel.

**Fără cookie-uri - nicăieri.** Lolly nu setează niciodată un cookie. Pentru ca aplicația să funcționeze, păstrează o cantitate mică de date **pe propriul tău dispozitiv**, toate strict necesare pentru o funcționalitate pe care o folosești:

- **Tema ta luminoasă/întunecată** și câteva preferințe de interfață (lățimea barei laterale, zoom).
- **Un cache offline al catalogului de instrumente**, astfel încât galeria să se încarce în continuare fără conexiune.
- **Contoare de utilizare doar locale** pentru micile statistici de pe cardul tău de profil - acestea nu sunt niciodată trimise nicăieri.
- **Propriile tale documente și sesiuni salvate**, stocate local în browser (IndexedDB), astfel încât munca ta să persiste între vizite.

Nimic din toate acestea nu este partajat, încărcat sau folosit pentru a te identifica sau a te urmări, deci nu există nimic la care să consimți - doar această notificare, ca să știi ce se păstrează. Poți șterge totul oricând din **Profil → Șterge toate datele mele**, sau ștergând stocarea site-ului din browserul tău.

Acest site de documentație (`/info`) este și mai ușor: nu setează **niciun cookie**, stochează pe dispozitivul tău doar preferința ta luminoasă/întunecată și livrează totul - inclusiv fonturile - direct de pe lolly.tools, fără nicio solicitare către CDN sau terți.

## Utilitare pe dispozitiv

Unele instrumente sunt **utilitare** care lucrează pe un fișier furnizat *de tine* - de exemplu **Strip Hidden Data**, care afișează datele ascunse dintr-o imagine sau un PDF (locație GPS, cameră, autor, editor și metadate ale documentului) și returnează o copie curată, sau **Compress PDF**, care micșorează un PDF recomprimându-i imaginile chiar pe dispozitivul tău.

Acestea rulează **în întregime în browserul tău**. Fișierul pe care îl alegi este citit în memorie pe dispozitivul tău, transformat local și oferit înapoi ca descărcare. **Nu este niciodată încărcat** - nu există niciun server către care să fie încărcat. Copia curățată nu poartă niciun watermark și nicio metadată proprie de identificare; tot scopul este să *elimini* date, nu să adaugi. Nimic nu este stocat după ce pleci, iar aceste utilitare funcționează offline. Vei vedea o insignă **„Rulează pe dispozitivul tău - nimic nu este încărcat”** pe fiecare dintre ele.

Acesta este opusul site-ului tipic „comprimă acest PDF” / „convertește acest HEIC”, care îți încarcă fișierul pe serverul unui străin pentru a face o muncă pe care browserul tău o poate face local.

## Extensia de browser

Extensia de browser **Lolly URL Screenshot** nu colectează, nu stochează și nu transmite date personale. Fără analytics, fără tracking, fără server la distanță.

## Ce face

Când ceri aplicației web Lolly ([lolly.tools](https://lolly.tools)) să facă o captură de ecran a unui URL, extensia deschide acea pagină într-un tab temporar de fundal, o captează în browserul tău folosind DevTools Protocol, returnează imaginea aplicației și închide tab-ul. Totul se întâmplă local, pe propriul tău dispozitiv și propria ta rețea.

## Date

- **Nu colectăm nimic.** Extensia nu are servere proprii și nu face nicio solicitare de rețea proprie.
- **Imaginile capturate** merg direct la aplicația Lolly din același browser - nu sunt niciodată încărcate de extensie.
- **URL-urile pe care le capturezi** sunt folosite doar pentru a încărca acea pagină, pentru acea captură de ecran. Nu sunt înregistrate și nici partajate.

## Permisiuni

- **`debugger`** - pentru a captura pagina randată prin DevTools Protocol (același mecanism folosit de aplicația desktop Lolly).
- **Acces la tab-uri** - pentru a deschide și închide tab-ul temporar în care se încarcă pagina.
- **Acces la host** - deoarece pagina pe care alegi să o capturezi poate fi pe orice site.

Niciuna dintre acestea nu este folosită pentru a citi, monitoriza sau transmite navigarea ta.

## Contact

Întrebări? Vezi [lolly.tools](https://lolly.tools).