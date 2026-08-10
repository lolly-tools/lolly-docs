# Paano Naihahambing ang Lolly

Saan bagay ang platform na ito sa mas malawak na larangan ng creative tools, at saan ito sadyang **hindi** sumasabak.

> **Katayuan ng pilot:** Ang Lolly ay isang closed-pilot prototype, hindi pa isang tapos na produkto, at kasalukuyang sinasailalim ang seguridad nito sa mahigpit na infrastructure hardening ng SUSE, bilang paghahanda para sa enterprise scale. Ang positioning na ito ang *layunin* ng Lolly na abutin - sakop ng pahinang [Adoption & Governance](/info/adoption-governance.html#status) kung paano ito sinusubok sa totoong gamit.

## Larangan

![Layout Studio's free canvas, where the colours, faces and assets on offer are the brand's own](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio%3Ftemplate%3D__blank__&width=1440&height=900&dpi=192&waitMs=2400&walker=1&format=svg&dark=1&filename=aud-open-canvas)

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

![Deck Studio in the split view - the deck's slides listed as blocks on the left, the laid-out deck rendering on the right](/t/url-shot?url=%2F%23%2Ftool%2Fdeck-studio&width=1440&height=900&dpi=192&waitMs=2600&walker=1&format=svg&dark=1&filename=ov2-deck-studio-output)

Magandang panukat ng ceiling dito ang Deck Studio: isang buong slide deck na idineklara bilang data, inilatag nang live sa canvas, at ini-export bilang native at ede-edit na PowerPoint.

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

## Aprubahan ang tool, hindi ang file

![The producer's whole job: type the words. Type, colour and spacing were settled when the tool was approved](/t/url-shot?url=%2F%23%2Ftool%2Fwordmark%3Ftext%3DApproved&width=1440&height=900&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=aud-approve-the-tool)

Ang lahat ng iba pang tool sa larangan ay gumagawa ng isang *file* na kailangan pang tsekin - isang brand manager sa isang Slack thread, ang legal sa disclaimer, isang round ng pagbabago, isa pang review. Inilalayo ng Lolly ang approval **nang isang hakbang paitaas**. Ang mga patakaran ng brand - eksaktong hex code, mga lisensyadong font file, bleed margin, spacing - ay hard-coded sa HTML at CSS ng tool, kaya *pisikal na hindi kayang* maglabas ng off-brand na asset ang template. Ang layout mismo ang load-bearing.

Kaya hindi na output ang inaaprubahan mo kundi ang **tool** na gumagawa ng mga ito. Aprubahan ito nang isang beses, at bawat asset na gagawin nito ay pre-approved na dahil pa lang sa pagkakabuo nito - walang tao sa loop, walang review cycle, sa kahit anong volume.

Ito ang paradigm shift na talagang naihahatid ng deterministic na engine: hindi ito mas mabilis na bersyon ng lumang proseso ng approval, inaalis nito ang proseso. Para sa creative team, guard-rail ito at hindi kapalit - ikaw pa rin ang naghahagis ng bola (ang data, ang copy, ang imahe) at ang code ang bumper lane na pumipigil sa bawat hagis na mapunta sa gutter.

| Pag-apruba ng mga asset sa lumang paraan | Pag-apruba ng tool, sa paraang Lolly |
|---|---|
| Tsinetsek ang bawat tapos na file, isa-isa | Isang beses lang tsinetsek ang tool |
| Request → gumagawa ang designer → brand review → legal check → mga pagbabago → muling review | Isang pagbabago sa parameter → tapos na asset |
| Designer, brand manager, legal at requester, lahat nasa loop | Ang producer, mag-isa |
| Mga araw kada asset | Mga segundo kada asset |
| 10,000 asset = 10,000 review cycle | 10,000 asset = wala (naaprubahan na ang template) |

## Ang Natatanging Inaalok Nito

![Amsterdam's canal rings and road network drawn edge to edge in the brand's own ink, every stroke placed by the template rather than by hand](/t/url-shot?url=%2F%23%2Ftool%2Fstreet-map%3Fcity%3Damsterdam%26theme%3Dlight%26full&width=1440&height=900&dpi=96&waitMs=3200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-street-map-poster)

- **Ligtas na inihahatid na malawak na potensyal ng disenyo, sa loob ng konteksto.** Kayang ipahayag ng mga tool ang mga matapang na ideya sa disenyo sa loob ng hard-coded na guard-rail.
- **Software-defined na content automation na nagbabalik ng huling asset.** Input → huling file. Walang "i-save mo na lang mula sa iyong design tool at i-post-process."
- **Nagko-compose ang mga tool sa ibang tool.** Puwedeng i-embed ng isang tool ang render ng ibang tool at ibalik ito bilang bahagi ng iisang tapos na asset, nang walang tool-to-tool code coupling - isang primitive na wala pang inaalok na open-canvas o DAM-templating na produkto sa larangan.
- **Vendor neutrality.** Ganap na kontrol sa feature at gastos. Open-source na engine. Ang mga tool at asset ay git-tracked na content, hindi nakakulong sa isang SaaS database.

Ang una sa mga iyon ang madalas na minamaliit ng mga tao. Isang poster-grade na mapa ng lungsod, iginuhit bilang tunay na vector paths para sa kalsada at tubig, mula sa isang dropdown at dalawang color field na hindi maaaring itumbok sa labas ng brand:

