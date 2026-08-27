# Lolly para sa mga Operator

### Isang defence-in-depth na security at intelligence strategy - na nagkataon lang na isang creative production platform

Ang zero-trust na organizational immune system na bumabalot sa ginagawa mo na - para ang rutinang creative work na kailangan ng iyong mga koponan araw-araw ay nangyayari *sa loob* ng iyong perimeter sa halip na tumagas palabas nito.

**Ano ang mapapala mo.** Ikaw ang magiging tao na sumang-ayon sa isang bagay na ligtas *at* popular. Isinasara mo ang isang exfiltration hole, nakakakuha ng capability at binubura ang isang request queue sa isang galaw lang - ang bihirang security win na nagpapamahal sa iyo nang higit, hindi kabaliktaran. Walang tawag sa alas-3 ng madaling araw mula sa legal dahil may embargoed na files o customer data na nakarating sa isang random na web tool; mas kaunting SaaS vendor, kontrata at audit sa iyong plato; at isang ganap na reproducible na audit trail na maaari mong ituro kapag may nagtanong. Mas maayos ang tulog mo, at napapasaya mo pa ang ilang araw sa paggawa nito.

Hindi second-class na creative tool ang Lolly: inilalagay nito ang production-quality na output sa kamay ng lahat, at walang kapantay ang brand-guided na karanasan sa paglikha. Ang dahilan kung bakit *ligtas* itong ipamahagi nang malawakan ay architectural: walang nag-a-upload na hindi mo inilagay roon, bawat resulta ay reproducible at bawat export ay maaaring magdala ng maraming layer ng industry-leading na cryptographic records. Kahit paano dumating ang isang dokumento sa iyong mesa, makikita mo ang buo nitong provenance, kung ito ba ay na-tamper at kung maaari mo ba itong ma-recreate nang pixel-perfect.

> **Nasaan ito ngayon.** Malakas ang mga security property ng Lolly ayon sa disenyo, at dumadaan ang cryptography at file-parsing engine nito sa enterprise-grade na infrastructure hardening ng SUSE. Ang mga seal, on-device na signing at encryption sa ibaba ay totoo at maipagtatanggol na ngayon, at humihinog patungo sa independent certification - kaya kung saan hinihingi ng isang kontrata ang certified assurance, i-deploy ang mga ito bilang defence-in-depth habang natatapos ang prosesong iyon.

## Ang strategic advantage

Ang karaniwang paraan ng pagsagawa ng rutinang creative work ay isang liability surface: mga file na ini-email sa external na design contractor, mga brand asset na ina-upload sa isang dosenang SaaS editor, customer data na ipinapaste sa web tool ng estranghero para lang "gumawa ng mabilisang graphic." Bawat isa sa mga iyon ay data na umaalis sa iyong kontrol.

Binaligtad ito ng Lolly. Ang trabaho na *nagtulak* sa mga leak na iyon - ang quote card, ang localized na banner, ang event badge, ang redacted na screenshot - ay nangyayari na ngayon sa isang tool na tumatakbo sa sariling device ng empleyado, laban sa iyong brand, na walang server sa loob ng loop. Hindi ka nagdagdag ng control sa ibabaw ng isang mapanganib na workflow; pinalitan mo ang mapanganib na workflow ng isa na wala talagang exfiltration path sa simula pa lang.

- **Sa iyo ang configuration.** Open source ang engine at shells (MPL-2.0). I-overlay ang sarili mong auth, telemetry o CA; i-host ito o huwag; hawak mo ang buong feature at cost control, git-tracked, hindi naka-lock sa isang SaaS database.
- **Maaaring maging data ang governance, hindi isang dashboard.** Kapag gusto mo ang control na iyon, pamahalaan ang tool catalog bilang isang Git repository - ang pull-request review ay nagiging brand approval, may buong audit trail at instant rollback ng bawat template na magagalaw ng iyong workforce. Isa itong opsyon, hindi isang obligasyon, at napupunta ito sa iisang mesa lang: ganap na gumagawa ang mga creator sa loob ng app, sine-save ang ginawa nila bilang isang **session** at ipinapasa ito bilang isang share link, isang backup o isang live na collaboration - wala sa mga iyon ang nangangailangan ng git. Kapag karapat-dapat na ang isa sa mga session na iyon na maging permanenteng starting point, binubuksan ng sinumang nagpapatakbo ng deployment ang link, itinatala ang mga value nito bilang isang **template** sa tool na iyon sa brand pack at nag-co-commit. Mula noon, lalabas ito sa "New from template" chooser ng tool at maaaring i-deep-link bilang `?template=<id>`. Ang Git ang locking step ng admin, ginagamit isang beses lang, at hindi kailanman isang bagay na kailangang gawin ng creator. Tingnan ang [Adoption & Governance](/info/adoption-governance.html).
- **Structural ang guard-rails.** Naka-hard-code ang mga brand constraint sa mga template, hindi ito nailathala bilang mga guideline na maaaring balewalain ng mga tao. Ang maling output ay hindi lang basta hindi hinihikayat - hindi ito magagawa.

> **Pinamamahalaan mo ang buong relay.** Ginagawa ng isang creative ang mga panuntunan at ini-scale ito ng isang developer, ngunit ang operator ang gumagawa sa lifecycle na iyon na ligtas patakbuhin sa buong organisasyon - ang parehong tool na nagpapahintulot sa isang rep na mag-self-serve habang nasa eroplano ay isa ring maaari mong i-gate sa pamamagitan ng Git review, i-deploy sa pamamagitan ng iyong MDM at i-verify nang cryptographically. Tingnan kung paano nagsasama-sama ang mga papel sa [The lifecycle of a campaign](/info/overview.html#the-lifecycle-of-a-campaign), at kung paano mo ito pinamamahalaan sa [Adoption & Governance](/info/adoption-governance.html).

## Burahin ang request queue habang nagpaparami ng content.

Isa sa mga layunin ng Lolly ay ang **design-request deflection**: mga rutinang request na hindi na kailangang umabot pa sa isang designer dahil ang taong nangangailangan ng asset ang gumawa nito mismo, nang tama, sa loob ng ilang minuto. Bawat na-deflect na ticket ay parehong productivity win at isang file na kaunti nang lumilipat sa kamay.

Ginawa ang Lolly para umangkop sa kung paano talaga umaandar ang iyong organisasyon - walang iisang tamang paraan para i-deploy ito:

- **I-deploy, huwag i-serve.** Ipadala ang Lolly sa mga device sa pamamagitan ng umiiral mong MDM (Intune, Jamf, Munki…). Tumatakbo ito nang lokal bilang isang desktop/mobile app o isang offline na PWA - gumagana sa likod ng kahit anong firewall, sa kahit anong air-gapped na environment, walang server na kailangang alagaan at ang IT ang may kontrol sa bilis ng update.
- **Serve lang.** Patakbuhin ang isang instance sa loob ng iyong network (o sa likod ng isang VPN); aabot dito ang mga user sa isang browser, walang na-install. I-publish ang isang tool nang isang beses, agad itong makukuha ng lahat; ipares sa iyong IdP para sa access control.
- **Hybrid.** Mga local app para sa offline na field work, isang laging-current na bersyon sa browser para sa mga hiram na makina - parehong nakaturo sa iisang tool library.

Nasa [Deployment](/info/deployment.html) at [Configuration](/info/configuration.html) ang buong deploy model at administration walkthrough.

## Mga anti-exfiltration na utility

May isang kategorya ng mga tool ng Lolly - ang mga privacy utility - na umiiral *partikular* para panatilihin ang mga file sa loob ng perimeter.


**Strip hidden data**
 Alisin ang lokasyon at lahat ng nakatagong nagpapakilalang impormasyon mula sa mga dokumento at media file.

- **Text Helper**  
I-anonymize, i-encode, i-format at manipulahin ang structured at unstructured na text. 

- **Compress PDF**
Paliitin ang sobrang laking PDF nang on-device, para wala nang mangailangang pumunta sa isang third-party na "compress my PDF" website sa oras na masyadong malaki na ang file para i-email - na siya ring eksaktong lugar kung saan tumutulo ang datos palabas. 

Lahat ng ito ay on-device transforms: pumapasok ang file o datos mo, lumalabas ang malinis na bytes at **walang server na aakyatan**. Sadyang kabaligtaran ito ng karaniwang "i-upload ang file mo sa website ng estranghero para linisin ito" na tool na hinahanap ng isang mabuting-loob na empleyado kung wala nito.

![Strip Hidden Data: dumadapo ang file sa canvas at malinaw na sinasabi ng badge na walang na-upload](/t/url-shot?url=%2F%23%2Ftool%2Fstrip-data&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=aud-strip-data)

Ang Text Helper ay iyon ding kasunduan para sa text sa halip na mga file. Ito ang tabbed workbench na hahanapin sana ng isang empleyado sa site ng estranghero, at wala itong idineklarang input dahil walang anumang hinipo nito ang umaalis sa page.

![Ang workbench ng Text Helper - isang hanay ng operation tabs sa itaas ng isang card na nagsasaad na walang idi-paste mong aalis sa device mo](/t/url-shot?url=%2F%23%2Ftool%2Ftext-helper&width=1200&height=750&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-content&dark=1&filename=ov2-text-helper)

Kinukumpleto ng Compress PDF ang set: lumiliit ang sobrang laking attachment sa ilalim ng quality setting na pinili mo, sa mismong makina na hawak na nito.

![Compress PDF - isang quality level at greyscale switch sa kaliwa, isang drop zone para sa sarili mong PDF sa kanan at walang upload kahit saan](/t/url-shot?url=%2F%23%2Ftool%2Fcompress-pdf&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=ov2-compress-pdf)

## Determinism at reproducibility

Maipapahayag ang bawat tool input bilang isang URL parameter, at ang parehong mga input ay gumagawa ng parehong file. May dalawang bunga iyon para sa operator:

- **Ang URL ang artifact.** I-commit ang link, i-regenerate ang asset on demand - walang binaries na naka-check-in sa Git, walang paghahanap ng "pinakabagong bersyon" sa chat. Permanenteng kontrata ang asset at tool IDs, kaya ang link na na-mint ngayon ay malulutas pa rin sa hinaharap.
- **Ang CLI ay iisang render path** tulad ng GUI, kaya hindi kailanman maghihiwalay ang build pipelines at ang app. Gumawa ng OG images, social cards at data visuals sa oras ng build, nang reproducible.

Ang Prompt to Image ang pinakamalinaw na anyo ng determinism: ang text ang buong input, ang typeset na larawan ang buong output at palagi namang parehong paraan ng pagtakda ang parehong text.

![Prompt to Image - isang bloke ng prompt text na naka-typeset sa isang square na larawan, na walang kahit ano sa resulta na wala sa input](/t/url-shot?url=%2F%23%2Ftool%2Fprompt-card%3Ffull&width=1440&height=900&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-prompt-to-image)

## Provenance at Content Credentials

![Tumatanggap ang Verify drop zone ng anumang file, mula sa anumang pinagmulan, at binabasa ito nang walang network call](/t/url-shot?url=%2F%23%2Fverify&width=1440&height=900&dpi=192&waitMs=1800&waitSelector=.valid-drop&cropSelector=.valid-drop&format=svg&walker=1&dark=1&filename=aud-verify-drop)

Maaaring magdala ang mga export ng **Content Credentials** - isang naka-sign na [C2PA](https://c2pa.org) manifest na nakabigkis sa hash ng bytes ng file. Anumang huling pagbabago sa file ay sumisira sa seal, kaya ang isang C2PA-aware verifier ay **nakakakita ng pagbabago nang cryptographically, offline**. Ang credential ay tamper-*evident*: nag-flag ito ng tampering sa halip na pigilan ito, na siya ring eksaktong dahilan kung bakit posible ang ganap na offline verification.

- **On by default, on-device.** Nabubuo ang signing key sa mismong device, non-extractable ito (kahit ang Lolly ay hindi ito mababasa) at lokal nangyayari ang pag-sign - ang optional identity *enrolment* lamang ang humihipo sa network.
- **Trust tiers.** Isang hindi naka-enroll na export ay well-formed ngunit anonymously naka-sign (`untrusted`). Mag-enroll ng **verified identity** (short-lived certificate mula sa Lolly CA, nakatali sa isang email) at ang mga verifier na naka-pin sa Lolly root ay iuulat ang `trusted` + email ng signer. Nasa roadmap ang isang trusted timestamp authority at third-party-validator green (C2PA conformance). Malinaw ang bawat tier, at ang isang file ay hindi kailanman nag-aangkin ng trust na hindi nito mapapatunayan.
- **Ang credential lifetime** ay desisyon ng operator/user sa oras ng pag-sign: 7 / 30 / 90 / 365 araw, default 30.
- **Ang Lolly Imprint.** Isang pangalawa, komplementaryong signal na **on by default**: isang invisible pixel watermark na naka-bake sa raster exports (at ang mga raster na na-render ng Lolly sa loob ng isang PDF/PPTX, hindi kailanman ang sariling naka-embed na larawan ng user). Kung saan mamamatay ang credential sa anumang pagbabago sa container, nakaligtas ang Imprint sa muling pag-save o screenshot - isang matibay na "dumaan ang mga pixel na ito sa Lolly" hint, presence-only, walang personal na datos. Security-through-obscurity ito, hindi hardened defence, at komplemento ito sa credential sa halip na kapalit nito. `imprint=0` para mag-opt out.
- **Durable Content Credentials (opt-in).** Ang isang raster export ay maaaring magdagdag ng isang invisible *durable* mark na nag-encode ng soft-binding identifier, para mabawi ang C2PA credential kahit pagkatapos matanggal ng social upload o re-save ang metadata ng file - ang kaso kung saan mawawala ang isang normal na credential. Raster-only ito at nangangailangan ng neural-encode pass, kaya off by default ito (`durable=1` para i-on). Nakikilala na ng Lolly ang sarili nitong durable mark nang offline sa `/verify` ngayon; susunod ang pagbawi ng third-party tools (hal. Adobe) kapag naitatag na ang industry soft-binding resolution.
- **On-device ang verification.** I-drop ang anumang file sa `/verify` (o `lolly validate <file>`) para sa isang offline report kung talagang ginawa ito gamit ang Lolly at hindi nabago mula noon. Nagfa-flag din ang web Verify view ng AI-generated content, nakakakita ng Lolly Imprint, nagve-verify ng **SEAL** signatures (isang byte-level signature - na walang network requests: kumukuha ang engine ng isang *injected* na DNS key resolver at wala pang shell na nag-i-inject nito ngayon, kaya ang isang record na may sariling inline na `pk=` key ay ganap na na-verify offline habang ang isang DNS-keyed na record ay nag-uulat ng "no key resolver and no inline key" sa halip na kumonekta - tingnan ang `SealPublicKeyResolver` sa `engine/src/seal.ts`), pipiliing deep-scan para sa third-party pixel watermarks (isang isang-beses na on-device model download) at nagpapakita ng hidden data - lahat nang walang pag-upload ng file. Tingnan ang [Content Credentials Identity](/info/content-credentials-identity.html).

> **Mga tala sa interoperability.** Nagve-verify ang Lolly ng sarili nitong credentials at marami sa mga third-party ngayon nang offline, kasama na ang pagbasa ng C2PA claim **v2** manifests mula sa ibang producers. Dalawang container pa ang in progress, parehong dahil wala pang standardized mapping ang C2PA para sa mga ito, kaya nagdadala ang Lolly ng credential sa sarili nitong lugar at ang verifier ng Lolly ang bumabasa nito pabalik: **WebM** (sumasakay ang manifest bilang Matroska attachment) at **Ogg/Opus** (isang `C2PA=` field sa OpusTags comment header, na hindi kasama ang byte range na iyon sa binding para pareho pa rin ang hash ng audio). Lahat ng iba pa ay tumutugma sa spec - naveve-verify ng third-party tools ang MP4, M4A, MP3, WAV, PNG, JPEG at PDF ng Lolly nang walang karagdagang gawin. Tingnan ang `engine/src/c2pa-containers.ts` para sa parehong mapping; magsasama-sama sila sa standard kapag natatag na ito.

## Encryption at pag-password

Para sa mga file na dapat maglakbay nang naka-lock, nangyayari ang lahat on-device:

![Ang lock card sa export panel: isang password, at isang malinaw na pagpili sa pagitan ng dalawang tiers](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools%26format%3Dpdf%26password%3Ddemo%26options&width=1440&height=900&dpi=192&waitMs=2200&cropSelector=.export-pdfpass&walker=1&format=svg&dark=1&filename=aud-pdf-lock)

- **PDF open-password** - ang *Standard* ay isang 40-bit RC4 deterrent (nagbubukas kahit saan, maaaring maglakbay sa isang link); ang *Strong* ay **AES-256** (PDF 2.0), tina-type sa oras ng export at hindi kailanman inilalagay sa link.
- **Locked downloads** - isang ZIP, isang Projects folder o isang batch run ay maaaring i-lock nang buo: *Standard* ZipCrypto (mahina, universal) o *Strong* **AES-256** (WinZip AE-2). Defence-in-depth: anumang PDF sa loob ng Strong zip ay *isa ring* AES-256-locked individually, kaya nananatili itong naka-lock pagkatapos ma-unpack.
- **Password-gated share links** - ang buong link state ay AES-256-encrypted sa ilalim ng isang PBKDF2-derived key; ciphertext lamang ang naglalakbay, hindi kailanman nasa link ang password at nangyayari ang decryption sa browser ng tatanggap.

## Handa sa Air-gap

Ang air-gap ay isang **first-class deployment**, hindi isang special mode - tumatakbo ang Lolly nang walang network sa oras ng render, out of the box. Ang web shell ay isang offline-first PWA (service worker); naka-store on-device ang fonts at WASM; ang tool state ay persisted lokal sa pamamagitan ng host bridge, hindi kailanman `localStorage`. Ang sinusuportahang paraan para makarating ang isang tool sa network ay isang **allowlisted** na `host.net` capability na idineklara nito sa manifest nito - ang isang shell na hindi kaya (o ayaw) itupad ay nagsu-stub nito. Isang portability contract iyon sa halip na isang enforced boundary (tingnan ang tala sa hooks sa ibaba), kaya nananatiling kontrol ang pagsusuri ng tool code - bagaman sa isang air-gapped device ay walang maaabot sa kahit anumang direksyon. Ipadala ang mga shell sa mga device sa pamamagitan ng MDM mo, o mag-serve ng isang instance sa loob ng network mo, at ang isang ganap na air-gapped install ay nagre-render, nag-e-export, nag-e-encrypt at nagve-verify ng credentials nang walang tatawagan.

## Mabuting malaman

Ilang bagay na dapat malinaw bago mo ito i-roll out:

- **In progress ang hardening.** Ang cryptography at parsers ay dumadaan sa enterprise-scale hardening ng SUSE (tingnan sa itaas) - malakas na sa disenyo ngayon; mag-deploy bilang defence-in-depth kung saan humihingi ang isang kontrata ng certified assurance.
- **Hindi security sandbox ang tool hooks.** Ang optional na `hooks.js` ng isang tool ay tumatakbo na naka-inject ang host bridge, ngunit sa isang browser shell ay tumatakbo ito sa realm ng page at *maaaring* maabot ang `window`/`document`/`fetch`. Tratuhin ang tool code sa paraang tratuhin mo ang anumang code na pinapatakbo mo - suriin ito. Ito ang dahilan kung bakit maaaring i-gate ng isang org na nagpapatakbo ng shared catalog ito sa pamamagitan ng Git review; sa magkabilang paraan, magpatakbo lamang ng mga tool na nasuri mo hanggang maglunsad ang Worker isolation.
- **Tamper-evident ang Content Credentials.** Nakakakita ang mga ito ng pagbabago sa halip na pigilan ito - tingnan ang mga tala sa interoperability sa itaas.
- **Dalawang encryption tiers.** Ang *Standard* na mga lock ay mabilis, universal na deterrents; ang *Strong* (AES-256) ay ganap na proteksyon - gamitin ang Strong para sa anumang sensitibo, na dapat tandaan na nangangailangan ito ng modernong reader.

## Saan susunod

- **[Security & Verification](/info/security.html)** - ang mga standard, primitives, trust model at testing sa likod ng credentials at encryption sa itaas.
- **[Adoption & Governance](/info/adoption-governance.html)** - mga persona, ang deflection metric at governance-as-data nang buo.
- **[Deployment](/info/deployment.html)** - deploy/serve/hybrid, MDM at self-hosting ng mga service.
- **[Configuration](/info/configuration.html)** - profiles, brand packs, capability gating at feature flags.
- **[Privacy Policy](/info/privacy.html)** - ang pormal na pahayag kung ano ang kinokolekta, iniimbak at ipinapadala at kung ano ang hindi.
- **[Server Surface](/info/server-surface.html)** - ang kumpletong imbentaryo kung ano ang tumatakbo server-side (dalawang optional na component) kumpara sa on-device.
