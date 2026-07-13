# Lolly para sa mga Creator

Gusto mong makagawa ng magandang bagay, mabilis, at tama ang lumabas. Para dito talaga ginawa ang Lolly: punan ang ilang fields, makakuha ng tapos na file - ang layout, ang type, ang mga rules ay ipinapatupad ng tool, hindi ng mata mo. Walang design software, walang paghihintay. Tumatakbo ito sa sarili mong device at gumagana nang offline.

**Ano ang mapapala mo:** naka-ship ka sa loob ng ilang minuto pero mukhang oras ang ginugol mo. Hindi ka na mahihintay sa isang designer, at dahil naka-bake in na ang mga brand rules, hindi na magiging pangalan mo ang naka-attach sa off-brand na asset. Mukha kang mabilis, polished, at maaasahan.

Bago ka lang dito? Magsimula sa **[Quickstart](/info/quickstart.html)** - dito mo ilalagay ang brand mo at makukuha ang unang file mo. Ang pahinang ito ang dahilan kung bakit mananatili ka.

## Bakit Lolly - ang mga bentahe mo

- **Tapos na, hindi nakakaabala.** Alam na ng tool ang mga font, kulay, logo, at spacing. Ikaw ang magbibigay ng mga salita; ibabalik nito ang asset. Walang dapat pang alanganinin.
- **Tama dahil sa disenyo mismo.** Ang mga design rules, layout constraints, at running logic ay nasa template - hindi maaaring lumihis ang output sa spec maliban kung sadyang binuksan ito ng may-akda ng tool. Malawak na creative range, sa loob ng mga guard-rail na matibay.
- **Isang source, lahat ng format.** Ang parehong disenyo ay mai-export bilang SVG, print-ready PDF, high-res PNG, o 60fps video. Gawin ito nang isang beses; i-ship kahit saan.
- **Walang katapusang permutations.** I-localize ang isang card sa isang dosenang wika, mag-generate ng bawat size para sa bawat placement, palitan ang isang lockup sa apatnapung campaign - lahat mula sa isang disenyo, sinasalang ng isang spreadsheet.
- **Sa'yo ito, offline, pribado.** Walang nauupload. Walang account, walang cloud, walang lisensyang aaudit-in. Isara ang takip ng laptop mo sa eroplano at patuloy pa ring makakapagtrabaho.
- **Bukas, hindi naka-lock in.** Ang engine ay open source at nakatira ang trabaho mo sa plain URLs, hindi sa loob ng database ng isang vendor.

## Paano ito ihahambing

Hindi sinusubukan ng Lolly na maging Canva o Figma. Nasa lugar ito kung saan *mas mahalaga ang mga rules, repeatability, at hard constraints kaysa sa freehand flexibility* - ginagawang mga tool ang mga desisyon sa disenyo na magagamit ng buong team mo kahit wala ka sa loop para sa bawat asset.

| | Canva | Mga brand portal | Illustrator | Figma / Penpot | **Lolly** |
|---|---|---|---|---|---|
| Malawakang paggawa ng content | bahagya | ✗ | ✗ | ✗ | **✓** |
| Gumagana nang ganap offline | ✗ | ✗ | ✓ | bahagya | **✓** |
| Template logic at hard constraints | ✗ | bahagya | ✗ | bahagya | **✓** |
| Walang kailangang kasanayan sa disenyo | bahagya | ✓ | ✗ | ✗ | **✓** |
| Awtomatikong Content Credentials | ✗ | ✗ | bahagya | ✗ | **✓** |
| Nagko-compose ang mga tool ng ibang tool | ✗ | ✗ | ✗ | ✗ | **✓** |
| Open engine, hindi SaaS-locked | ✗ | ✗ | ✗ | bahagya | **✓** |
| C2PA content credentials  | ✗ | ✗ | ✗ | ✗ | **✓** |
| Opt-in na provenance sa antas ng forensic  | ✗ | ✗ | ✗ | ✗ | **✓** |
| Mobile at Desktop Apps  | ✓ | ✗ | ✗ | bahagya | **✓** |
| Command Line at TUI  | ✗ | ✗ | ✗ | ✗ | **✓** |


**Piliin ang Lolly** para sa mga asset na paulit-ulit mong ginagawa - event signage, quote card, localized banner, email signature, shipping label, social variant, at data-driven na chart at mapa. **Piliin ang isang design tool** para sa bespoke na hero piece, one-off na campaign concept, o ideation na *talagang* dapat lumabas sa sistema. Isinasagawa ng Lolly ang sistema; hindi nito papalitan ang studio.

## Ano ang magagawa mo

### Lahat tama, walang paghihintay

Punan ang ilang fields, makakuha ng tapos na asset - walang font na pipiliin, walang kulay na aalanganinin, walang "ito na ba ang tamang logo?" Alam na ng tool. Email signature, event countdown, quote card, badge, street map - lahat ng kailangan ng team mo sa isang Martes ng 4pm, self-serve. At dahil walang customer data na umaalis sa device, walang compliance risk sa pagtutulungan.

### Mula sa live data hanggang sa tapos na visual

Ikonekta ang isang **CSV** o **JSON** table sa isang chart, mapa, o table template at i-update ang mga numero - ang layout na ang bahalang mag-ayos ng sarili. Election results, quarterly earnings, weather events: buuin ang format nang isang beses at gamitin ulit ito tuwing tatakbo ang istorya. Eksaktong tumutugma sa house style mo, dahil ipinapatupad ito sa antas ng template, hindi lang naiwang parang malabong gabay.

### Mga tool na nagko-compose ng ibang tools

Puwedeng i-embed ng isang tool ang live output ng ibang tool bilang asset - isang name badge na nagre-render ng sarili nitong QR code, isang card na nagla-lagay ng live chart - nang walang design tool at walang manual compositing. Nananatiling live ang naka-embed na render at nagre-re-render tuwing nilo-load; hindi ito kailanman naging flattened na larawan.

### Ang frontier, kapag kailangan mo ito

Advanced filters, compositing, animation, live camera effects, generative design - lahat ng web technology ay available sa isang template author, kaya mataas ang ceiling. Gumawa ng *tools*, hindi files: buuin ang bagay na nag-ge-generate ng 10,000 cards sa halip na gumawa ng 10,000 cards nang isa-isa. I-lock ang hindi dapat magbago; ilantad lamang ang talagang dapat mag-iba.

## Mga detalyeng mapapansin mo

- **Print, ginawang tama.** Tunay na physical units (mm/cm/in/pt) at DPI, bleed at crop marks, CMYK at PDF/X-4 output-intent - makukuha ng print shop nang eksakto ang kailangan nila. Tingnan ang [Pag-export](/info/exporting.html#size-print-units).
- **Video at motion.** I-export bilang WebM/MP4 (na may audio tracks), animated PNG/WebP, animated SVG, at Lottie - mula sa parehong template na gumagawa ng mga stills mo.
- **Editable na vectors.** SVG, EPS, EMF, at DXF export. Nagiging outlined paths ang text sa vector output, kaya makukuha ng print shop o cutter ang crisp na geometry na magbubukas kahit saan. (Ang outlined text ay hindi na *maaaring i-retype* sa Illustrator - iyon ang kapalit para sa perpektong fidelity nang walang font.)
- **Kaginhawaang dumadami.** I-batch ang isang spreadsheet papunta sa isang folder ng assets; i-save ang mga session at ayusin ang mga ito sa Projects; ibahagi ang anumang state bilang URL; i-render ang isang buong folder bilang isang zip.
- **Isang UI na talagang kaaya-aya.** Undo/redo kahit saan, isang sound layer na puwede mong i-off, isang theme cycle, live-camera filters, isang masonry gallery - at **Neurospicy Mode** para sa mas kalmado, mas mababang-stimulation na interface.

## Sulitin ang paggamit nito

- **[Quickstart](/info/quickstart.html)** - ilagay ang brand, kunin ang unang file.
- **[Paggamit ng Lolly](/info/using.html)** - ang canvas, controls, pag-save, projects, at paggamit sa phone.
- **[Ang iyong profile](/info/profile.html)** - ang mga detalyeng pinagkukunan ng tools para mag-pre-fill, at kung paano dalhin ang mga ito sa iba't ibang device.
- **[Mag-import ng disenyo](/info/design-import.html)** - dalhin ang gawa mong Figma / Penpot / Illustrator / InDesign.
- **[Pag-export at mga format](/info/exporting.html)** - lahat ng format, print units, video, at batch.
