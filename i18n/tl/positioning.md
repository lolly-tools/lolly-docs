# Paano Naihahambing ang Lolly

Saan bagay ang platform na ito sa mas malawak na larangan ng creative tools, at saan ito sadyang **hindi** sumasabak.

> **Katayuan ng pilot:** Ang Lolly ay isang closed-pilot prototype, hindi pa isang tapos na produkto, at kasalukuyang sinasailalim ang seguridad nito sa mahigpit na infrastructure hardening ng SUSE, bilang paghahanda para sa enterprise scale. Ang positioning na ito ang *layunin* ng Lolly na abutin - sakop ng pahinang [Adoption & Governance](/info/adoption-governance.html#status) kung paano ito sinusubok sa totoong gamit.

## Larangan

| Kakayahan | Canva (Bukas na Canvas) | Mga Brand Portal (DAM Templating) | Illustrator (Propesyonal na Desktop) | Figma / Penpot (Propesyonal na Online) | **Lolly (Constraints-first)** |
|---|---|---|---|---|---|
| Malawakang paggawa ng content | bahagya | ✗ | ✗ | ✗ | **✓** |
| Ganap na gumagana offline | ✗ | ✗ | ✓ | bahagya | **✓** |
| Lohika ng template at mahigpit na mga hadlang | ✗ | bahagya | ✗ | bahagya | **✓** |
| Walang kailangang kasanayan sa design | bahagya | ✓ | ✗ | ✗ | **✓** |
| Awtomatikong Content Credentials | ✗ | ✗ | bahagya | ✗ | **✓** |
| Nagko-compose ang mga tool ng ibang tool | ✗ | ✗ | ✗ | ✗ | **✓** |
| Bukas na engine, hindi naka-lock sa SaaS | ✗ | ✗ | ✗ | bahagya | **✓** |
| C2PA content credentials | ✗ | ✗ | ✗ | ✗ | **✓** |
| Opt-in na provenance sa antas ng forensics | ✗ | ✗ | ✗ | ✗ | **✓** |
| Mobile at Desktop na App | ✓ | ✗ | ✗ | bahagya | **✓** |
| Command Line at TUI | ✗ | ✗ | ✗ | ✗ | **✓** |


Malinaw ang hugis ng puwang: wala sa kasalukuyang larangan ang nagbibigay sa atin ng constraints-first, offline-capable, mababang kasanayan, accessible sa loob ng organisasyon, at generative na output. Ngayon, mayroon nang sarili ang Lolly na open canvas - ang **Layout Studio**, isang malayang canvas na direct-manipulation - ngunit may desisibong pagkakaiba mula sa column ng Canva: ang mga kulay, type, at asset na inilagay dito ay sumusunod sa brand globals, kaya kahit ang malayang pag-aayos ay nananatiling constraints-first. Ang Lolly ay **hindi** pa rin isang walang-hadlang na design suite; magpapatuloy ang mga designer sa paggamit ng Illustrator at Figma para sa bespoke na gawain - at kapag kailangan nang maging isang governed at reproducible na asset ang gawaing iyon, dinadala ng [Import a design](/info/design-import.html) ng Layout Studio ang tapos nang file ng Figma/Illustrator/Penpot papunta sa canvas bilang editable, brand-conformed na mga kahon.

## Gamitin Ito Para Sa

- Mabilis na paggawa ng mga creative asset na handa nang gamitin sa operasyon (event tile, badge, lagda, alerto)
- Malayang pag-aayos sa open canvas (Layout Studio) kapag ang mga piraso - kulay, type, icon, imahe - ay kailangang manatiling sumusunod sa brand globals
- Pagdadala ng tapos nang disenyo mula sa Figma, Illustrator, InDesign, o Penpot (ang Import a design ng Layout Studio) para maaari itong ma-edit, ma-governed, at ma-re-render nang deterministic sa bawat format ng Lolly
- Mga daloy na "isa-hanggang-marami" na "punan ang tatlong field, kunin ang tapos nang asset" - kasama ang bulk runs mula sa spreadsheet/CSV sa `/pro` batch grid (i-paste o i-import ang mga row, isang tapos na asset kada row, i-download bilang zip)
- Palaging naka-on, umuulit na branded na output
- Mga bagay kung saan mas mahalaga ang sentralisadong kontrol sa pagpapahayag ng brand kaysa sa flexibility ng pagpapahayag

## Huwag Itong Gamitin Para Sa

- Bespoke o flagship na hero content (billboard, malalaking video)
- Natatanging gawaing kampanya na talagang nangangailangan ng designer
- Ideation na kailangang lumampas nang lubusan sa brand system - nananatiling sumusunod ang open canvas ng Lolly sa mga kulay, type, at asset sa brand globals, at iyan mismo ang layunin

## Ang Natatanging Inaalok Nito

- **Ligtas na inihahatid na malawak na potensyal ng disenyo, sa loob ng konteksto.** Kayang ipahayag ng mga tool ang mga matapang na ideya sa disenyo sa loob ng hard-coded na guard-rail.
- **Software-defined na content automation na nagbabalik ng huling asset.** Input → huling file. Walang "i-save mo na lang mula sa iyong design tool at i-post-process."
- **Nagko-compose ang mga tool sa ibang tool.** Puwedeng i-embed ng isang tool ang render ng ibang tool at ibalik ito bilang bahagi ng iisang tapos na asset, nang walang tool-to-tool code coupling - isang primitive na wala pang inaalok na open-canvas o DAM-templating na produkto sa larangan.
- **Vendor neutrality.** Ganap na kontrol sa feature at gastos. Open-source na engine. Ang mga tool at asset ay git-tracked na content, hindi nakakulong sa isang SaaS database.
