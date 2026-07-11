# Lolly para sa mga Operator

**Isang future-proof, defence-in-depth na data-loss-prevention at provenance strategy na nagpapanggap na creative platform.**

Ang organizational immune system na bumabalot sa ginagawa mo na — para ang routine creative work na kailangan ng iyong mga team araw-araw ay nangyayari *sa loob* ng iyong perimeter sa halip na tumagas palabas nito.

**Ano ang mapapala mo.** Ikaw ang magiging taong nagsabing oo sa isang bagay na parehong ligtas *at* popular. Isinasara mo ang isang exfiltration hole at binubura ang design-request queue sa isang kilos lang — ang bihirang security win na nagpapagusto sa iyo nang higit, hindi kabaliktaran. Walang tawag ng alas-3 ng madaling araw dahil may nag-email ng brand files sa isang contractor o nag-paste ng customer data sa isang random na web tool; mas kaunting SaaS vendors, contracts, at audits sa iyong plato; at isang kumpletong git trail na maaari mong ituro kapag may nagtanong kung sino ang nag-approve ng ano. Nakakatulog ka nang mahimbing sa gabi.

Nakukuha ni Lolly ang lugar nito bilang creative tool: binubura nito ang design queue at inilalagay ang production-quality output sa kamay ng lahat. Pero ang dahilan kung bakit *ligtas* itong ipamahagi nang ganoon kalawak ay architectural. Walang nag-a-upload, lahat ay reproducible, at bawat export ay maaaring magdala ng cryptographic record kung saan ito nanggaling. Ang pahinang ito ang security at rollout story.

> **Deretsahang usapan muna.** Malakas ang mga security properties ni Lolly *by design*, at ang mga cryptography at file-parsing engine nito ay kasalukuyang sumasailalim sa mahigpit na infrastructure hardening ng SUSE, bilang paghahanda para sa enterprise scale — talagang magaling kami dito. Ang mga seal, on-device signing, at encryption sa ibaba ay totoo at maipagtatanggol; habang natatapos ang hardening na iyon, ituring ang mga ito bilang defence-in-depth sa halip na certified control kung saan kontraktwal na kinakailangan ang independent assurance. Mas gusto naming malaman mo iyon nang maaga.

## Ang estratehikong bentahe

Ang karaniwang paraan kung paano nagagawa ang routine creative work ay isang liability surface: mga file na ini-email sa external na design contractor, mga brand asset na ina-upload sa isang dosenang SaaS editor, customer data na ipinapaste sa web tool ng isang estranghero para lang "gumawa ng mabilisang graphic." Bawat isa sa mga iyon ay data na umaalis sa iyong kontrol.

Binabaligtad ito ni Lolly. Ang gawaing *nagdulot* ng mga pagtagas na iyon — ang quote card, ang localized banner, ang event badge, ang redacted screenshot — ay nangyayari na ngayon sa isang tool na tumatakbo sa sariling device ng empleyado, laban sa iyong brand, nang walang server na kasangkot. Hindi ka nagdagdag ng control sa ibabaw ng mapanganib na workflow; pinalitan mo ang mapanganib na workflow ng isa na wala talagang exfiltration path mula sa simula.

- **Nasa iyo ang configuration.** Open source ang engine at shells (MPL-2.0). I-overlay ang sarili mong auth, telemetry, o CA; i-host ito o hindi; hawak mo ang buong feature at cost control, git-tracked, hindi naka-lock sa isang SaaS database.
- **Ang governance ay data, hindi dashboard.** Ang tool catalog ang source of truth, pinapamahalaan bilang isang Git repository — ang pull-request review *ang* moderation, at nakukuha mo ang kumpletong audit trail at instant rollback ng bawat template na magagalaw ng iyong workforce. Tingnan ang [Adoption & Governance](/info/adoption-governance.html).
- **Structural ang guard-rails.** Naka-hard-code ang brand constraints sa mga template, hindi lang inilathala bilang guidelines na puwedeng balewalain ng mga tao. Ang maling output ay hindi lang dinidiskurage — hindi ito magagawang katawanin.

## Burahin ang request queue habang pinararami ang content.

Isang layunin ni Lolly ay **design-request deflection**: mga routine request na hindi na kailangang umabot sa isang designer dahil ang taong nangangailangan ng asset ang gumawa nito mismo, nang tama, sa loob ng ilang minuto. Bawat na-deflect na ticket ay pareho ng productivity win at isang file na hindi na lumipat pa ng kamay.

Ginawa si Lolly para umangkop sa kung paano talaga gumagana ang iyong organisasyon — walang iisang tamang paraan para i-deploy ito:

- **I-deploy, huwag i-serve.** I-ship si Lolly sa mga device sa pamamagitan ng iyong umiiral na MDM (Intune, Jamf, Munki…). Tumatakbo ito nang lokal bilang desktop/mobile app o offline PWA — gumagana sa likod ng anumang firewall, sa anumang air-gapped na kapaligiran, nang walang server na kailangang panatilihin at ang IT ang may kontrol sa bilis ng update.
- **I-serve lamang.** Magpatakbo ng isang instance sa loob ng iyong network (o sa likod ng VPN); aabot dito ang mga user sa pamamagitan ng browser, walang kailangang i-install. I-publish ang isang tool nang isang beses, agad itong makukuha ng lahat; ipares sa iyong IdP para sa access control.
- **Hybrid.** Local apps para sa offline na field work, isang laging-updated na browser version para sa mga hiram na machine — parehong nakatuon sa iisang tool library.

Matatagpuan ang kumpletong deploy models at administration walkthrough sa [Deployment](/info/deployment.html) at [Configuration](/info/configuration.html).

## Mga anti-exfiltration na utility

May isang kategorya ng mga tool ni Lolly na umiiral *partikular* para panatilihin ang mga file sa loob ng perimeter. Ang mga privacy utility.


- **Strip hidden data**
 Alisin ang lokasyon at lahat ng nakatagong identifying information mula sa mga dokumento at media file.

- **Text Helper**  
I-anonymize, i-encode, i-format, at manipulahin ang structured at unstructured text. 

- **Compress PDF**
Iwasan ang anumang tsansa ng 'email limit crisis' kung saan sinasamantala ito ng mga third party web tool at ang data 

- **Compress PDF**
Iwasan ang anumang tsansa ng 'email limit crisis' kung saan sinasamantala ito ng mga third party web tool at natatapon ang data sa daan. 

Lahat ng mga ito ay on-device transforms: pumapasok ang iyong file o data, lumalabas ang malinis na bytes, at **walang server na maaaring i-uploadan**. Sila ang sinadyang kabaligtaran ng karaniwang tool na "i-upload ang iyong file sa website ng isang estranghero para linisin ito" na siyang ginagamit ng isang mabuting-loob na empleyado kung wala nito.



## Determinism at reproducibility

Bawat tool input ay maipapahayag bilang isang URL parameter, at ang parehong mga input ay gumagawa ng parehong file. May dalawang epekto ito para sa operator:

- **Ang URL ang artifact.** I-commit ang link, buuin muli ang asset on demand — walang binaries na naka-check in sa Git, walang paghahanap ng "the latest version" sa chat. Permanenteng kontrata ang asset at tool ID, kaya ang link na nagawa ngayon ay gagana pa rin sa hinaharap.
- **Ang CLI ay parehong render path** ng GUI, kaya hindi kailanman maghihiwalay ang build pipelines at ang app. Bumuo ng OG images, social cards, at data visuals sa oras ng build, nang reproducible.

## Provenance at Content Credentials

Ang mga export ay maaaring magdala ng **Content Credentials** — isang naka-sign na [C2PA](https://c2pa.org) manifest na nakatali sa hash ng bytes ng file. Ito ay **tamper-*evident*, hindi tamper-*proof***: hindi nito pinipigilan ang sinuman sa pag-alter ng file, pero anumang susunod na pagbabago ay sisira sa seal at ire-report ito ng isang C2PA-aware verifier. Iyon ang tapat at kapaki-pakinabang na katangian — maaari mong *ma-detect* ang pagbabago, cryptographically, offline.

- **Naka-on by default, on-device.** Ang signing key ay ginagawa sa device, hindi maaaring i-extract (kahit si Lolly ay hindi ito mababasa), at nangyayari lokal ang pag-sign — ang opsyonal na identity *enrolment* lamang ang humihipo sa network.
- **Trust tiers.** Ang un-enrolled na export ay structurally valid pero anonymously naka-sign (`untrusted`). Mag-enrol ng **verified identity** (short-lived na certificate mula sa Lolly CA, nakatali sa isang email) at ang mga verifier na pinipin ang Lolly root ay magre-report ng `trusted` + email ng signer. Ang trusted timestamp authority at third-party-validator green (C2PA conformance) ay nasa roadmap pa, hindi pa naisasakatuparan — matapat na naka-label ang mga tier at hindi kailanman magpapakita ang isang file ng maling green.
- Ang **credential lifetime** ay desisyon ng operator/user sa oras ng pag-sign: 7 / 30 / 90 / 365 araw, default na 30.
- **On-device ang verification.** I-drop ang anumang file sa `/valid` (o `lolly validate <file>`) para sa offline na report kung ito ba ay tunay na ginawa gamit si Lolly at hindi pa nagbabago mula noon. Tingnan ang [Content Credentials Identity](/info/content-credentials-identity.html).

> **Kilalang gap, sinabi nang tuwiran:** Hindi pa lubusang mababasa ng verifier ni Lolly ang C2PA claim **v2** manifests mula sa ibang producer; at dinadala ng WebM ang manifest bilang isang Matroska attachment (wala pang standardized na C2PA mapping para sa WebM), kaya nabe-verify ng mga third-party tool ang MP4 ni Lolly pero hindi ang WebM nito.

## Encryption at Pag-password

Para sa mga file na kailangang maglakbay nang naka-lock, lahat ay nangyayari on-device:

- **PDF open-password** — ang *Standard* ay isang 40-bit RC4 na deterrent (bubukas kahit saan, maaaring maglakbay sa isang link); ang *Strong* ay **AES-256** (PDF 2.0), ini-type sa oras ng export at hindi kailanman inilalagay sa isang link.
- **Locked downloads** — ang isang ZIP, isang Projects folder, o isang batch run ay maaaring i-lock nang buo: *Standard* ZipCrypto (mahina, universal) o *Strong* **AES-256** (WinZip AE-2). Defence-in-depth: anumang PDF sa loob ng isang Strong zip ay *rin* naka-lock nang individually gamit ang AES-256, kaya nananatili itong naka-lock kahit pagkatapos i-unpack.
- **Password-gated share links** — ang buong link state ay AES-256-encrypted sa ilalim ng isang PBKDF2-derived key; ciphertext lamang ang naglalakbay, hindi kailanman nasa link ang password, at nangyayari ang decryption sa browser ng tatanggap.

## Handa sa Air-gap

Dinisenyo si Lolly na tumakbo nang **walang network sa oras ng render**. Ang web shell ay isang offline-first PWA (service worker); ang mga font at WASM ay naka-store on-device; ang tool state ay pinapanatili lokal sa pamamagitan ng host bridge, hindi kailanman sa `localStorage`. Anumang tool na umaabot sa network ay ginagawa lamang ito sa pamamagitan ng isang **allowlisted** na `host.net` capability na dapat nitong idineklara sa manifest nito — isang shell na hindi kaya (o ayaw) tuparin ito ay nagse-stub nito na lang. Kaya ang isang ganap na air-gapped na install ay nagre-render, nag-e-export, nag-e-encrypt, at nag-ve-verify ng mga credential nang walang kahit anong tinatawagan.

## Ang dapat mong malaman bago ka umasa dito

Karapat-dapat ang mga operator sa mga caveat, hindi lang sa mga claim:

- **Hardening para sa enterprise scale.** Gaya ng nasabi sa itaas — ang cryptography at mga parser ay kasalukuyang sumasailalim sa mahigpit na infrastructure hardening ng SUSE para sa enterprise scale; malakas by design, at ituring bilang defence-in-depth kung saan kontraktwal na kinakailangan ang independent assurance.
- **Ang tool hooks ay *hindi* isang security sandbox.** Ang opsyonal na `hooks.js` ng isang tool ay tumatakbo nang naka-inject ang host bridge, pero sa isang browser shell ito ay nagpapatupad sa realm ng page at *maaaring* umabot sa `window`/`document`/`fetch`. Ituring ang tool code sa paraang ituring mo ang anumang code na pinapatakbo mo — suriin ito. Ito ang dahilan kung bakit mahalaga ang catalog-as-Git-review model, at kung bakit hindi dapat patakbuhin ang untrusted na third-party na mga tool hanggang sa maisakatuparan ang Worker isolation.
- **Ang C2PA ay tamper-evident, hindi tamper-proof**, at totoo ang mga gap sa v2-read / WebM sa itaas.
- **Naiiba ang mga encryption tier.** Ang mga *Standard* na lock ay mga deterrent; *Strong* (AES-256) lamang ang tunay na proteksyon, at hindi bumubukas ang mga Strong file sa bawat legacy reader.

## Saan susunod

- **[Adoption & Governance](/info/adoption-governance.html)** — mga persona, ang deflection metric, at governance-as-data nang buo.
- **[Deployment](/info/deployment.html)** — deploy/serve/hybrid, MDM, at self-hosting ng mga serbisyo.
- **[Configuration](/info/configuration.html)** — mga profile, brand pack, capability gating, at feature flag.
- **[Privacy Policy](/info/privacy.html)** — ang pormal na pahayag na "walang kinokolekta, walang ina-upload."
