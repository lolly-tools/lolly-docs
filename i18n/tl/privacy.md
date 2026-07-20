# Patakaran sa Privacy

*Huling na-update: 19 Hulyo 2026*

> **Sa payak na salita.** Ang mga dokumento, larawan, video at file na ginagawa mo sa Lolly ay
> nananatili sa iyong device. Walang mga account para sa karaniwang paggamit, walang cookies mula sa app
> mismo, at walang analytics o tracker kahit saan sa codebase - hindi ito "hindi namin ginagamit
> ang data," kundi talagang wala sa source. May isang maikli at kumpletong listahan ng
> mga eksepsyon kung saan nakikipag-usap ang software sa isang network, at bawat isa
> sa kanila ay inilalarawan sa ibaba nang detalyado: ano ang umaalis, kanino, at kailan. Ang tanging
> eksepsyong may kinalaman sa anumang personal ay isang sign-in na kailangan mong tahasang
> simulan. Kung wala ito sa dokumentong ito, hindi ito nangyayari.

## Ano ang sakop ng patakarang ito

Ang Lolly ay open-source na software - isang engine, ilang app shell (web, desktop,
mobile, CLI), at isang browser extension - na kayang patakbuhin ng kahit sino. May dalawang
bahagi ang patakarang ito:

- **Ang software mismo**: kung ano ang ginagawa at hindi ginagawa nito sa iyong data, saan man ito
  tumakbo. Katangian ito ng code, kaya totoo ito sa bawat deployment ng Lolly,
  sa amin man o sa kahit kanino.
- **lolly.tools**, ang reference na deployment na pinapatakbo ng SUSE: ang mga tiyak na piniling
  desisyon sa pagpapatakbo ng opsyonal nitong mga bahaging server-side (ano ang nila-log, gaano katagal, ng
  sino).

Kung gumagamit ka ng self-hosted o enterprise na instance ng Lolly, ang mga asal ng software sa
ibaba ay nananatiling naaangkop, ngunit ang *operator* ng instance na iyon - hindi ang SUSE - ang
responsable sa anumang server-side: ang kanilang render endpoint, ang kanilang MCP server,
ang kanilang Content Credentials certificate authority, kung mayroon sila. Tanungin sila para sa
kanilang sariling patakaran; tingnan ang [Adoption & Governance](/info/adoption-governance.html) para sa
kung ano ang kaakibat ng pagpapatakbo ng Lolly.

## Ang app: ano ang nananatili sa iyong device

Ang web, desktop at mobile shell ng Lolly ay nagpapatakbo ng buong render engine sa panig ng client.
Ang pagbubukas ng isang tool, pagpuno ng mga input, pag-preview at pag-export ay lahat nangyayari sa iyong
device - walang server na kasangkot, at gumagana ang app offline kapag na-load na.

**Walang itinatakdang cookies ang app.** Para gumana, nag-iingat ito ng kaunting data **sa
iyong device lamang**, hindi kailanman naipapadala:

- **Mga interface preference** - theme, wika, sound settings, laki ng sidebar/zoom,
  mga piniling sort at view, kung aling onboarding tips ang nakita mo na - sa
  `localStorage`, kaya available ang mga ito bago pa man matapos mag-boot ang app.
- **Isang offline cache ng tool catalogue at mga asset preview**, para gumana ang gallery
  nang walang koneksyon.
- **Mga local usage counter** para sa mga stat ng iyong profile card (ilang export, aling
  mga tool) - isang maliit at nakabuong blob sa `localStorage`, hindi kailanman binabasa namin, hindi kailanman ipinapadala
  kahit saan.
- **Ang iyong sariling mga dokumento, naka-save na session, na-upload na asset at font** - naka-imbak sa
  IndexedDB sa iyong device, hindi kailanman ina-upload, hindi kailanman binabasa ninuman maliban sa iyo.

Wala sa mga ito ang ibinabahagi, ibinebenta, o ginagamit para kilalanin o subaybayan ka. Walang
kailangang pahintulutan, dahil walang koleksyong nangyayari - ito lang ay isang paunawa, para
malaman mo kung ano ang itinatago at kung saan. Burahin ang lahat ng ito anumang oras gamit ang **Profile → Clear all
my data**, o sa pamamagitan ng pag-clear ng storage ng site sa iyong browser. (Sa ilalim ng ePrivacy
Directive Art. 5(3), ang storage na mahigpit na kinakailangan para sa serbisyong hiniling mo
ay hindi nangangailangan ng pahintulot - transparency lamang, na siyang ginagawa ng dokumentong ito
at ng in-app na paunawa.)

Ang iyong sariling backup ng data na ito - ang `lolly-backup` bundle na ginawa ng **Export &
render everything** - ay isang file na iyong iniingatan at kinokontrol. Hindi ito kailanman umaabot sa aming
mga server maliban kung pipiliin mo mismong ipadala ito kung saan. Tingnan ang [Data
Transfer](/info/data-transfer.html).

## Mga on-device na utility

Ang ilang tool - **Strip Hidden Data**, **Compress PDF**, at iba pang may dalang
**"Runs on your device"** na badge - ay gumagana sa isang file na ibinibigay mo. Binabasa ang file
papunta sa memory sa iyong browser, binabago nang lokal, at inaalok pabalik bilang download.
Hindi ito kailanman ina-upload, dahil walang server sa daan na pag-a-upload-an nito.
Gumagana ang mga utility na ito offline, at ang kanilang output ay walang watermark o metadata na
sa amin - ang layunin ng karamihan sa kanila ay alisin at protektahan ang data, hindi magdagdag ng panganib.

## Kapag nakikipag-usap ang app sa isang network, nang buo

Ang talahanayan sa ibaba ang kumpletong listahan ng lahat ng kinukuha o ipinapadala ng app sa isang
network. Kung wala ito rito, hindi ito ginagawa ng app.

| Ano | Ano ang aktwal na umaalis sa iyong device | Kailan |
|---|---|---|
| Tool catalogue sync | Walang personal - isang request para sa sariling pampublikong tool at asset index ng Lolly | Sa startup, pagkatapos ay naka-cache offline |
| Ang idineklarang network capability ng isang tool | Kung ano man ang hinihiling ng partikular na tool na iyon (hal. map tiles) sa partikular na host na inililista nito sa manifest nito | Habang ginagamit lang ang tool na iyon |
| Google Fonts | Ang piniling font family name at ang iyong IP address, sa mga font server ng Google | Kung magdagdag ka lang ng Google Font sa brand editor - isang beses na fetch bawat family, pagkatapos ay nananatili ito sa iyong device |
| SEAL signature check | Isang DNS lookup para sa isang public key, sa domain na pinangalanan sa loob ng file na sinusuri | Kung makakita lang ang Verify ng SEAL record sa isang file na sinusuri mo - hindi kailanman ang file mismo |
| Deep-scan detector models | Walang personal - isang beses na same-origin model download (hindi isang third party) | Kung mag-opt in ka lang sa deep scan ng Verify |
| Remote instance | Kung ano man ang ibinabalik ng instance na pinangalanan mo, sa parehong catalogue sync na inilarawan sa itaas | Kung tahasan mong ituturo lang ang shell sa isa pang Lolly deployment |

Wala sa mga ito ang nagpapadala ng iyong mga dokumento, project, session o na-upload na file kahit saan.
Umiiral ang mga ito para magdala ng mga bagay *papunta* sa iyong device (mga tool, font, model, isang public key),
hindi kailanman para magpadala ng mga bagay *mula* rito, maliban sa mga tahasang pinangalanang eksepsyon sa
mga seksyon sa ibaba.

## Mga hot-linked na render URL

Ang app mismo ay nananatili nang buo sa iyong device. Hiwalay dito, at kung ginagamit mo lang ito,
sinasagot ng lolly.tools (at ng kahit anong self-hosted na instance na iniwang naka-enable ito) ang
**hot-link render URLs** - `https://lolly.tools/tool/<tool-id>.<ext>?<inputs>` -
para ang isang ibinahaging Lolly link ay maipakita bilang isang live na larawan sa isang README, isang wiki o isang
dashboard. Ang pagkuha ng isa sa mga URL na iyon ay humihiling sa server na i-render ang **pampublikong tool at
catalogue data** gamit ang mga input na nakasulat sa URL, at iyon ang buong palitan:

- **Walang account, walang cookies, walang state.** Ang endpoint ay anonymous; walang iniimbak
  bawat request, at walang binabasa sa iyong device. Ang iyong mga dokumento,
  session at upload ay hindi kailanman umaalis sa iyong browser - hindi ito maaaring lumitaw sa mga
  link na ito.
- **Ang mga input ay pampubliko sa pagkakabuo** - kung ano man ang tinype ng may-akda ng link
  sa URL, nababasa ng kahit sinong maabot ng link. Huwag maglagay ng sikreto sa isang
  ibinahaging link, gumagawa ang Lolly ng isang feature na link encryption para sa sensitibong nilalaman.
- Ang mga tugon ay **naka-cache at rate-limited** tulad ng anumang pampublikong larawan, at minarkahan ng
  `noindex` para hindi i-index ng mga search engine ang iyong mga render.

Nagse-self-host ng Lolly at ayaw ng pampublikong render surface? Itakda ang
`LOLLY_DISABLE_RENDER_GET=1` at bawat isa sa mga URL na ito ay magbabalik ng 404.

## Ang MCP server (opsyonal, para sa AI agents)

Maaari ring maabot ang Lolly ng isang AI agent sa pamamagitan ng Model Context Protocol - isang
operator-run na endpoint (may pinapatakbo ang lolly.tools; kahit sino ay makakapag-self-host ng sarili,
kasama ang ganap na air-gapped). Ibinabahagi nito ang no-accounts na postura ng render path,
kasama ang dalawang tool na kailangang humawak ng file bytes:

- **`lolly_transform`** (magpatakbo ng isang on-device utility sa panig ng server, para sa
  tumatawag na agent) at **`lolly_verify`** (suriin ang Content Credentials) ay parehong tumatanggap
  ng bytes ng isang file mula sa caller. Pinoproseso ang mga ito **in-process, sa memory**,
  at ibinabalik ang resulta sa parehong tawag na iyon - hindi kailanman isinusulat ang file sa
  disk at hindi kailanman iniimbak kapag natapos na ang request.
- Ang bawat iba pang tool - `lolly_render`, `lolly_build_url`, `lolly_list_tools`,
  `lolly_describe_tool` - ay gumagana mula sa mga parameter lamang (text, numero, kulay,
  URLs, catalogue asset ids), ang parehong mga input na tinatanggap ng isang hot-link render URL.
- Ang access ay maaaring isang shared token na ibinibigay ng operator sa mga client na pinagkakatiwalaan nila, o
  stateless OAuth 2.1: mga panandaliang naka-sign na token na sinusuri laban sa isang shared
  secret, walang iniimbak sa panig ng server, at ang token mismo ay hindi kailanman isinusulat sa isang
  log o render URL.

## Content Credentials identity (isang sign-in na kailangan mong simulan mismo)

Kayang i-seal ng Lolly ang isang cryptographic na **Content Credential** sa iyong mga export para makapag-verify ang kahit sino,
offline, na ang isang file ay hindi nabago mula nang umalis ito sa Lolly. Iyon ay
**naka-on bilang default at ganap na lokal** - ang signing key ay nabubuo sa iyong device,
ay **non-extractable** (kahit ang sariling code ng Lolly ay hindi ito mababasa), at ang signing mismo
ay nangyayari offline. Sakop ng seksyong ito ang isang *opsyonal* na hakbang sa ibabaw noon:
ang pag-enroll ng isang verified na identity, para sabihin ng iyong mga export na "Verified - signed by
\<your email\>" sa halip na isang anonymous na key. **Kung laktawan mo ang enrolment, walang sa
seksyong ito ang naaangkop sa iyo, at walang personal na data na kailanman umaalis sa iyong device.**

Kung mag-enroll ka nga, narito nang eksakto ang mangyayari:

1. **Pipili ka ng isang sign-in method** - GitHub, Google, SUSE (Okta), o isang emailed
   na link. Para sa tatlong OIDC provider, ilinilipat ka sa sariling login page ng
   provider na iyon, na pinamamahalaan ng kanilang privacy policy, hindi ng amin; ang certificate
   service ng Lolly ay tumatanggap lamang pabalik ng isang verified na email address at ang pangalan ng provider.
   Para sa email link, ang address na itinatype mo ay ipinapasa sa **Resend**, isang
   transactional email API, para lamang ihatid ang isang link na iyon.
2. **Isang panandaliang cookie ang nagpoprotekta sa redirect.** Ito ang tanging cookie na itinatakda ng
   buong sistema ng Lolly: `lolly_ca_state`, `HttpOnly`, naka-scope sa `/api/ca`,
   nagwawakas sa loob ng sampung minuto. May dala itong random na value, hindi isang tracking
   identifier, at umiiral lamang para pigilan ang OAuth redirect na ma-forge. Nilinis ito
   sa sandaling matapos ang sign-in.
3. **Ginagamit ang iyong IP address, sandali lamang, para pigilan ang pang-aabuso** sa mga sign-in
   endpoint (para hindi mapa-spam ng isang script ang isang inbox o maubos ang email quota) - iniingatan
   sa server memory lamang, para sa isang sliding window na mga isang minuto, hindi kailanman isinusulat
   sa isang log o pinananatili kahit saan.
4. **Nagbibigay ang certificate service ng isang panandaliang certificate** (7, 30, 90 o 365
   araw, ikaw ang pipili, nililimitahan ng patakaran ng operator) na nag-uugnay sa iyong verified
   na email sa pampublikong kalahati ng keypair na nabuo sa iyong device. Ang pribadong
   kalahati ay hindi kailanman umaalis sa iyong browser.
5. **Nila-log ang issuance**: ang iyong email address, ang provider na ginamit mo, isang maikling
   hash ng serial number ng certificate, at ang expiry date nito, isinusulat sa
   operational logs ng service - at, kung nag-configure lang ng isa ang operator, sa
   isang webhook na kinokontrol nila. Ito ang tanging lugar kung saan pinananatili sa isang server ang isang piraso ng
   iyong personal na data, at umiiral ito para ang isang na-compromise o maling-naibigay na certificate
   ay matunton at para ma-audit ang sariling issuance ng CA.
6. **Pagkatapos noon, offline na muli ang signing** para sa buong buhay ng certificate.
   Ang pag-export ng isang file ay hindi kailanman nakikipag-ugnayan sa certificate service - ang pag-enroll lamang ang gumawa noon.

Para sa lolly.tools mismo: pinapatakbo ng SUSE ang certificate service at hinahawakan
ang mga issuance log na ito. Tingnan ang [Iyong mga karapatan](#your-rights) sa ibaba para sa kung paano magtanong tungkol
o mag-alis ng isang entry.

## Ang browser extension

Ang **Lolly URL Screenshot** browser extension ay hindi kumukuha, nag-iimbak, o
nagpapadala ng anumang personal na data. Walang analytics, walang tracking, walang remote server.

**Ano ang ginagawa nito.** Kapag hiniling mo sa Lolly web app na kunan ng screenshot ang isang URL, binubuksan ng
extension ang page na iyon sa isang pansamantalang background tab, kinukunan ito sa iyong
browser gamit ang DevTools Protocol, ibinabalik ang larawan sa app, at isinasara ang
tab. Nangyayari ang lahat nang lokal, sa iyong sariling device at network.

**Data.**

- **Wala kaming kinukuha.** Walang server ang extension at hindi ito gumagawa ng sariling network
  request.
- **Ang mga nakunang larawan** ay diretsong napupunta sa Lolly app sa parehong browser - hindi kailanman
  ina-upload ng extension.
- **Ang mga URL na kinukunan mo** ay ginagamit lamang para i-load ang isang page na iyon para sa isang
  screenshot na iyon. Hindi ito nila-log o ibinabahagi.

**Mga pahintulot.**

- **`debugger`** - para kunan ang na-render na page sa pamamagitan ng DevTools Protocol (ang
  parehong mekanismo na ginagamit ng Lolly desktop app).
- **`tabs`** - para buksan at isara ang pansamantalang tab kung saan naglo-load ang page.
- **Host access (`<all_urls>`)** - dahil ang page na pipiliin mong kunan ay maaaring
  nasa kahit anong site. Ipinapakita ito ng Chrome sa install time bilang isang malawak na permission
  warning; binibisita lamang ng extension ang URL na ibinibigay mo.

Wala sa mga ito ang ginagamit para basahin, subaybayan, o ipadala ang iyong pagba-browse nang lampas sa
isang hiniling na capture na iyon.

## Mga log ng imprastraktura

Tulad ng anumang website, ang mga server sa likod ng lolly.tools - at sa likod ng anumang Lolly
deployment - ay gumagawa ng standard web-server access logs kapag may request na umaabot sa
kanila: IP address, hiniling na path, timestamp, user agent, iniingatan sa loob ng isang
limitadong window para sa seguridad at pag-iwas sa pang-aabuso. Iyon ay baseline hosting
behaviour, hindi isang bagay na idinadagdag ng Lolly sa ibabaw, at hindi ito kailanman naglalaman ng nilalaman ng
iyong mga dokumento, dahil hindi kailanman umaabot ang mga iyon sa isang server. Ang tanging
sadyang eksepsyon ay isang file na tahasan mong ibinibigay sa isang MCP `lolly_transform` o
`lolly_verify` call, na pinoproseso sa memory at hindi kailanman isinusulat sa disk o isang
log, gaya ng inilarawan sa itaas.

## Privacy ng mga bata

Hindi sinasadyang kinukuha ng Lolly ang personal na impormasyon mula sa kahit sino, anumang edad, sa
karaniwang paggamit ng app - walang kukunin. Ang tanging lugar kung saan ang
personal na impormasyon (isang email address) ay kinukuha ay ang Content Credentials
enrolment, na inilarawan sa itaas, na hindi nakatuon o nilalayon para sa mga bata.

## Iyong mga karapatan

Dahil halos lahat ng hinahawakan ng Lolly ay naka-imbak lamang sa iyong sariling device, karamihan sa
tinatawag ng batas sa proteksyon ng data na "iyong mga karapatan" - access, correction, deletion,
portability - ay mga bagay na kaya mo nang gawin mismo, agad-agad, nang hindi humihiling sa
kahit sino: nananatili ang iyong data sa storage ng iyong browser, sa isang anyo na kaya mong suriin,
i-export (**Export & render everything**, sa itaas), o burahin (**Profile → Clear all
my data**).

Para sa isang piraso ng personal na data na maaaring mapunta sa isang server - ang iyong email
address, kung nag-enroll ka para sa Content Credentials - makipag-ugnayan sa amin (sa ibaba) para itanong kung ano ang
hinahawakan namin o para maalis ito sa mga aktibong log. Ang pag-alis ng isang log entry ay hindi
nagbabawi ng isang certificate na naibigay na (ito ay panandalian sa disenyo at basta lang
nag-e-expire); tinitigil nito ang paglitaw ng entry na iyon sa mga darating na export ng log.

Hindi kami nagbebenta ng data. Wala kaming ibebenta.

## Mga pagbabago sa patakarang ito

Ang petsa sa itaas ay nagbabago tuwing nagbabago ang dokumentong ito. Ang isang pagbabagong nag-a-alter
ng kung ano ang umaalis sa iyong device o kung ano ang pinananatili ay nakakakuha ng sarili nitong linya rito, hindi isang
tahimik na edit - kung gusto mong makita kung ano ang nagbago, magtanong (sa ibaba) o ihambing laban sa
[pampublikong source](https://github.com/lolly-tools/lolly/commits/main/docs/privacy.md).

## Makipag-ugnayan

May mga tanong, o isang request sa ilalim ng "Iyong mga karapatan" sa itaas: **Andy Fitzsimon**,
[fitzy@suse.com](mailto:fitzy@suse.com). Para sa isang self-hosted o enterprise na Lolly
instance, makipag-ugnayan sa kung sino man ang nagpapatakbo nito - ang SUSE at ang Lolly open source
project ay walang hinahawakang data para sa mga deployment na hindi nila pinapatakbo.
