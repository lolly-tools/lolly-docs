# Lolly para sa mga Operator

### Isang defence-in-depth na estratehiya sa seguridad at intelligence - na nagkataon lang na isang creative production platform

Ang zero-trust na organizational immune system na bumabalot sa ginagawa mo na - para ang routine creative work na kailangan ng iyong mga team araw-araw ay nangyayari *sa loob* ng iyong perimeter sa halip na tumagas palabas nito.

**Ano ang mapapala mo.** Ikaw ang magiging taong nagsabing oo sa isang bagay na parehong ligtas *at* popular. Isinasara mo ang isang exfiltration hole, nakakakuha ng kakayahan, at binubura ang isang request queue sa isang kilos lang - ang bihirang security win na nagpapagusto sa iyo nang higit, hindi kabaliktaran. Walang tawag mula sa legal nang alas-3 ng madaling araw dahil may embargoed files o customer data na napadpad sa isang random na web tool; mas kaunting SaaS vendors, contracts, at audits sa iyong plato; at isang lubos na reproducible na audit trail na maaari mong ituro kapag may nagtanong. Natutulog ka nang mas mahimbing, at napapasaya mo ang ilang araw sa paggawa nito.

Hindi si Lolly isang second-class na creative tool: inilalagay nito ang production-quality output sa kamay ng lahat, at walang kapantay ang brand-guided creation experience nito. Ang dahilan kung bakit *ligtas* itong ipamahagi nang malawakan ay architectural: walang nag-a-upload na hindi mo mismo inilagay, reproducible ang bawat resulta, at bawat export ay maaaring magdala ng maraming layer ng industry-leading na cryptographic records. Kahit paano man dumating ang isang dokumento sa iyong mesa, makikita mo ang buo nitong provenance, kung ito ba ay ginalaw, at kung kaya mo ba itong likhaing muli nang pixel-perfect.

> **Kung nasaan ito ngayon.** Malakas *by design* ang mga security properties ni Lolly, at ang mga cryptography at file-parsing engine nito ay sumasailalim sa enterprise-grade na infrastructure hardening ng SUSE. Totoo at maipagtatanggol na ngayon ang mga seal, on-device signing, at encryption sa ibaba, at umuunlad patungo sa independent certification - kaya kung saan kontraktwal na kinakailangan ang certified assurance, i-deploy ang mga ito bilang defence-in-depth habang natatapos ang prosesong iyon.

## Ang estratehikong bentahe

Ang karaniwang paraan kung paano nagagawa ang routine creative work ay isang liability surface: mga file na ini-email sa external na design contractor, mga brand asset na ina-upload sa isang dosenang SaaS editor, customer data na ipinapaste sa web tool ng isang estranghero para lang "gumawa ng mabilisang graphic." Bawat isa sa mga iyon ay data na umaalis sa iyong kontrol.

Binabaligtad ito ni Lolly. Ang gawaing *nagdulot* ng mga pagtagas na iyon - ang quote card, ang localized banner, ang event badge, ang redacted screenshot - ay nangyayari na ngayon sa isang tool na tumatakbo sa sariling device ng empleyado, laban sa iyong brand, nang walang server na kasangkot. Hindi ka nagdagdag ng control sa ibabaw ng mapanganib na workflow; pinalitan mo ang mapanganib na workflow ng isa na wala talagang exfiltration path mula sa simula.

- **Nasa iyo ang configuration.** Open source ang engine at shells (MPL-2.0). I-overlay ang sarili mong auth, telemetry, o CA; i-host ito o hindi; hawak mo ang buong feature at cost control, git-tracked, hindi naka-lock sa isang SaaS database.
- **Ang governance ay puwedeng maging data, hindi dashboard.** Kapag gusto mo ang kontrol na iyon, pamahalaan ang tool catalog bilang isang Git repository - nagiging brand approval ang pull-request review, na may kumpletong audit trail at instant rollback ng bawat template na magagalaw ng iyong workforce. Isa itong opsyon, hindi obligasyon: ang mga team na gusto lang gumawa ng mga bagay ay nag-a-author ng sarili nilang tool sa Layout Studio at nag-i-ingest ng sarili nilang mga file papasok sa catalogue, buong-buo sa loob ng app, at hindi kailanman humihipo sa git. Tingnan ang [Adoption & Governance](/info/adoption-governance.html).
- **Structural ang guard-rails.** Naka-hard-code ang brand constraints sa mga template, hindi lang inilathala bilang guidelines na puwedeng balewalain ng mga tao. Ang maling output ay hindi lang dinidiskurage - hindi ito magagawang katawanin.

## Burahin ang request queue habang pinararami ang content.

Isang layunin ni Lolly ay **design-request deflection**: mga routine request na hindi na kailangang umabot sa isang designer dahil ang taong nangangailangan ng asset ang gumawa nito mismo, nang tama, sa loob ng ilang minuto. Bawat na-deflect na ticket ay pareho ng productivity win at isang file na hindi na lumipat pa ng kamay.

Ginawa si Lolly para umangkop sa kung paano talaga gumagana ang iyong organisasyon - walang iisang tamang paraan para i-deploy ito:

- **I-deploy, huwag i-serve.** I-ship si Lolly sa mga device sa pamamagitan ng iyong umiiral na MDM (Intune, Jamf, Munki…). Tumatakbo ito nang lokal bilang desktop/mobile app o offline PWA - gumagana sa likod ng anumang firewall, sa anumang air-gapped na kapaligiran, nang walang server na kailangang panatilihin at ang IT ang may kontrol sa bilis ng update.
- **I-serve lamang.** Magpatakbo ng isang instance sa loob ng iyong network (o sa likod ng VPN); aabot dito ang mga user sa pamamagitan ng browser, walang kailangang i-install. I-publish ang isang tool nang isang beses, agad itong makukuha ng lahat; ipares sa iyong IdP para sa access control.
- **Hybrid.** Local apps para sa offline na field work, isang laging-updated na browser version para sa mga hiram na machine - parehong nakatuon sa iisang tool library.

Matatagpuan ang kumpletong deploy models at administration walkthrough sa [Deployment](/info/deployment.html) at [Configuration](/info/configuration.html).

## Mga anti-exfiltration na utility

May isang kategorya ng mga tool ni Lolly - ang mga privacy utility - na umiiral *partikular* para panatilihin ang mga file sa loob ng perimeter.


- **Strip hidden data**
 Alisin ang lokasyon at lahat ng nakatagong identifying information mula sa mga dokumento at media file.

- **Text Helper**  
I-anonymize, i-encode, i-format, at manipulahin ang structured at unstructured text. 

- **Compress PDF**
Paliitin ang isang sobrang-laking PDF on-device, para walang aabot sa isang third-party na "compress my PDF" website sa sandaling masyadong malaki na ang isang file para i-email - na siya mismong lagusan ng pagtagas ng data.

Lahat ng mga ito ay on-device transforms: pumapasok ang iyong file o data, lumalabas ang malinis na bytes, at **walang server na maaaring i-uploadan**. Sila ang sinadyang kabaligtaran ng karaniwang tool na "i-upload ang iyong file sa website ng isang estranghero para linisin ito" na siyang ginagamit ng isang mabuting-loob na empleyado kung wala nito.



## Determinism at reproducibility

Bawat tool input ay maipapahayag bilang isang URL parameter, at ang parehong mga input ay gumagawa ng parehong file. May dalawang epekto ito para sa operator:

- **Ang URL ang artifact.** I-commit ang link, buuin muli ang asset on demand - walang binaries na naka-check in sa Git, walang paghahanap ng "the latest version" sa chat. Permanenteng kontrata ang asset at tool ID, kaya ang link na nagawa ngayon ay gagana pa rin sa hinaharap.
- **Ang CLI ay parehong render path** ng GUI, kaya hindi kailanman maghihiwalay ang build pipelines at ang app. Bumuo ng OG images, social cards, at data visuals sa oras ng build, nang reproducible.

## Provenance at Content Credentials

Ang mga export ay maaaring magdala ng **Content Credentials** - isang naka-sign na [C2PA](https://c2pa.org) manifest na nakatali sa hash ng bytes ng file. Sisira sa seal ang anumang susunod na pagbabago sa file, kaya **nade-detect ng isang C2PA-aware verifier ang pag-alter nang cryptographically, offline**. Ang credential ay tamper-*evident*: ini-flag nito ang pakikialam sa halip na pigilan ito, na siya mismong nagpapaposible sa ganap na offline na verification.

- **Naka-on by default, on-device.** Ang signing key ay ginagawa sa device, hindi maaaring i-extract (kahit si Lolly ay hindi ito mababasa), at nangyayari lokal ang pag-sign - ang opsyonal na identity *enrolment* lamang ang humihipo sa network.
- **Trust tiers.** Ang un-enrolled na export ay structurally valid pero anonymously naka-sign (`untrusted`). Mag-enrol ng **verified identity** (short-lived na certificate mula sa Lolly CA, nakatali sa isang email) at ang mga verifier na pinipin ang Lolly root ay magre-report ng `trusted` + email ng signer. Nasa roadmap ang isang trusted timestamp authority at ang third-party-validator green (C2PA conformance). Tahasan ang bawat tier, at ang isang file ay inaangkin lamang ang trust na kaya nitong patunayan.
- **Credential lifetime** ay desisyon ng operator/user sa oras ng pag-sign: 7 / 30 / 90 / 365 araw, default na 30.
- **Ang Lolly Imprint.** Isang pangalawa, complementary na signal na **naka-on by default**: isang invisible na pixel watermark na naka-bake sa mga raster export (at ang mga raster na na-render ng Lolly sa loob ng isang PDF/PPTX, hindi kailanman ang sariling naka-embed na imahe ng user). Kung saan namamatay ang credential sa anumang pagbabago ng container, nabubuhay pa rin ang Imprint sa isang re-save o screenshot - isang matibay na "dumaan ang mga pixel na ito kay Lolly" na hint, presence-only, walang personal data. Ito ay security-through-obscurity, hindi isang hardened defence, at nagdaragdag ito sa credential sa halip na pumalit dito. `imprint=0` para mag-opt out.
- **Durable Content Credentials (opt-in).** Ang isang raster export ay maaari pang magdala ng karagdagang invisible na *durable* na marka na nag-e-encode ng isang soft-binding identifier, para mabawi ang C2PA credential kahit pagkatapos alisin ng isang social upload o re-save ang metadata ng file - ang kaso kung saan mawawala ang isang normal na credential. Raster-only ito at may gastos na isang neural-encode pass, kaya naka-off ito by default (`durable=1` para i-on ito). Nakikilala ni Lolly ang sarili nitong durable mark offline sa `/verify` ngayon; susunod ang pagbawi ng mga third-party na tool (hal. Adobe) kapag naipatupad na ang industry soft-binding resolution.
- **On-device ang verification.** I-drop ang anumang file sa `/verify` (o `lolly validate <file>`) para sa isang offline na report kung tunay ba itong ginawa gamit si Lolly at hindi pa nagbabago mula noon. May flag din ang web Verify view para sa AI-generated na content, natutukoy nito ang Lolly Imprint, ini-verify ang mga **SEAL** signature (isang byte-level na signature na naka-key sa DNS - ang tanging paghipo sa network ay isang DNS key lookup, hindi kailanman ang file), opsyonal na nagsasagawa ng deep-scan para sa mga third-party na pixel watermark (isang one-time na on-device na pag-download ng model), at inilalantad ang nakatagong data - lahat nang walang pag-upload ng file. Tingnan ang [Content Credentials Identity](/info/content-credentials-identity.html).

> **Mga tala sa interoperability.** Nave-verify ng Lolly ang sarili nitong mga credential at marami sa mga third-party offline ngayon, kasama na ang pagbabasa ng C2PA claim **v2** manifests mula sa ibang producer. Isang interop item na lang ang kasalukuyang ginagawa: ang WebM - na wala pang standardized na C2PA mapping, kaya inilalakip ng Lolly ang manifest bilang isang Matroska part (nave-verify ng mga third-party tool ang MP4 ni Lolly out of the box; susunod ang WebM kapag naayos na ang standard).

## Encryption at Pag-password

Para sa mga file na kailangang maglakbay nang naka-lock, lahat ay nangyayari on-device:

- **PDF open-password** - ang *Standard* ay isang 40-bit RC4 na deterrent (bubukas kahit saan, maaaring maglakbay sa isang link); ang *Strong* ay **AES-256** (PDF 2.0), ini-type sa oras ng export at hindi kailanman inilalagay sa isang link.
- **Locked downloads** - ang isang ZIP, isang Projects folder, o isang batch run ay maaaring i-lock nang buo: *Standard* ZipCrypto (mahina, universal) o *Strong* **AES-256** (WinZip AE-2). Defence-in-depth: anumang PDF sa loob ng isang Strong zip ay *rin* naka-lock nang individually gamit ang AES-256, kaya nananatili itong naka-lock kahit pagkatapos i-unpack.
- **Password-gated share links** - ang buong link state ay AES-256-encrypted sa ilalim ng isang PBKDF2-derived key; ciphertext lamang ang naglalakbay, hindi kailanman nasa link ang password, at nangyayari ang decryption sa browser ng tatanggap.

## Handa sa Air-gap

Ang air-gap ay isang **first-class deployment**, hindi isang espesyal na mode - tumatakbo ang Lolly nang walang network sa oras ng render out of the box. Ang web shell ay isang offline-first PWA (service worker); ang mga font at WASM ay naka-store on-device; ang tool state ay pinapanatili lokal sa pamamagitan ng host bridge, hindi kailanman sa `localStorage`. Anumang tool na umaabot sa network ay ginagawa lamang ito sa pamamagitan ng isang **allowlisted** na `host.net` capability na dapat nitong idineklara sa manifest nito - isang shell na hindi kaya (o ayaw) tuparin ito ay nagse-stub nito na lang. I-ship ang mga shell sa mga device sa pamamagitan ng iyong MDM, o magpatakbo ng isang instance sa loob ng iyong network, at ang isang ganap na air-gapped na install ay nagre-render, nag-e-export, nag-e-encrypt, at nag-ve-verify ng mga credential nang walang kahit anong tatawagan.

## Mabuting malaman

Ilang bagay na dapat maliwanag bago mo ito i-roll out:

- **Hardening in progress.** Ang cryptography at mga parser ay sumasailalim sa enterprise-scale na hardening ng SUSE (tingnan sa itaas) - malakas by design ngayon; i-deploy bilang defence-in-depth kung saan kontraktwal na kinakailangan ang certified assurance.
- **Ang tool hooks ay *hindi* isang security sandbox.** Ang opsyonal na `hooks.js` ng isang tool ay tumatakbo nang naka-inject ang host bridge, pero sa isang browser shell ito ay nagpapatupad sa realm ng page at *maaaring* umabot sa `window`/`document`/`fetch`. Ituring ang tool code sa paraang ituring mo ang anumang code na pinapatakbo mo - suriin ito. Ito ang dahilan kung bakit ang isang organisasyong nagpapatakbo ng shared catalog ay maaaring i-gate ito sa pamamagitan ng Git review; alinman doon, magpatakbo lamang ng mga tool na sinuri mo hanggang sa mailabas ang Worker isolation.
- **Ang Content Credentials ay tamper-evident.** Nade-detect nila ang pag-alter sa halip na pigilan ito - tingnan ang mga tala sa interoperability sa itaas.
- **Dalawang encryption tier.** Ang mga *Standard* na lock ay mabilis at universal na deterrent; ang *Strong* (AES-256) ay ganap na proteksyon - gamitin ang Strong para sa anumang sensitibo, tandaan na kailangan nito ng isang modernong reader.

## Saan susunod

- **[Adoption & Governance](/info/adoption-governance.html)** - mga persona, ang deflection metric, at governance-as-data nang buo.
- **[Deployment](/info/deployment.html)** - deploy/serve/hybrid, MDM, at self-hosting ng mga serbisyo.
- **[Configuration](/info/configuration.html)** - mga profile, brand pack, capability gating, at feature flag.
- **[Privacy Policy](/info/privacy.html)** - ang pormal na pahayag na "walang kinokolekta, walang ina-upload."
