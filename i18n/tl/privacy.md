# Patakaran sa Privacy

*Huling na-update: Hunyo 2026*

## Ang Lolly app

Tumatakbo ang Lolly nang buo sa iyong browser. **Wala kaming kinukuha, wala kaming ipinapadala, at walang mga server na nakakakita ng iyong data.** Walang analytics, walang tracking, at walang anumang third party.

**Walang cookies — kahit saan.** Hindi kailanman nagse-set ng cookie ang Lolly. Para gumana ang app, nagtatago ito ng kaunting data **sa iyong sariling device**, at lahat ito ay talagang kailangan para sa isang feature na ginagamit mo:

- **Ang iyong light/dark theme** at ilang interface preferences (lapad ng sidebar, zoom).
- **Isang offline cache ng tool catalog**, para naglo-load pa rin ang gallery kahit walang koneksyon.
- **Local-only na usage counters** para sa maliliit na stats sa iyong profile card — hindi kailanman ito ipinapadala kahit saan.
- **Ang iyong sariling mga dokumento at naka-save na sessions**, naka-imbak nang lokal sa browser (IndexedDB) para nananatili ang iyong trabaho sa pagitan ng mga pagbisita.

Wala sa mga ito ang ibinabahagi, ina-upload, o ginagamit para kilalanin o subaybayan ka, kaya walang kailangang pahintulutan — ito lang ay isang paalala, para malaman mo kung ano ang itinatago. Puwede mong burahin ang lahat ng ito anumang oras gamit ang **Profile → Clear all my data**, o sa pamamagitan ng pag-clear ng storage ng site sa iyong browser.

Ang documentation site na ito (`/info`) ay mas magaan pa: wala itong itinatakdang cookies, iniimbak lang nito ang iyong light/dark preference sa iyong device, at pinaglilingkuran ang lahat — kasama ang mga font — mula mismo sa lolly.tools, nang walang CDN o third-party requests.

## Mga On-device na Utility

Ang ilang tools ay **utilities** na gumagana sa isang file na ibinibigay *mo* — halimbawa ang **Strip Hidden Data**, na nagpapakita ng nakatagong data sa isang larawan o PDF (GPS location, camera, author, editor at document metadata) at ibinabalik ang isang malinis na kopya, o ang **Compress PDF**, na pinapaliit ang isang PDF sa pamamagitan ng muling pag-encode ng mga larawan nito direkta sa iyong device.

Ang mga ito ay tumatakbo **nang buo sa iyong browser**. Ang file na pinili mo ay binabasa papunta sa memory sa iyong device, binabago nang lokal, at inaalok pabalik bilang download. **Hindi kailanman ito ina-upload** — walang server na pagpaparalahan nito. Ang nalinis na kopya ay walang watermark at wala sa aming sariling nagpapakilalang metadata; ang buong punto ay *alisin* ang data, hindi ito idagdag. Walang naka-imbak matapos kang umalis, at ang mga utility na ito ay gumagana kahit offline. Makikita mo ang isang **"Gumagana sa iyong device — walang ina-upload"** badge sa bawat isa sa mga ito.

Ito ang kabaligtaran ng karaniwang website na "i-compress ang PDF na ito" / "i-convert ang HEIC na ito", na nag-a-upload ng iyong file sa server ng estranghero para gawin ang trabahong kayang gawin ng iyong browser nang lokal.

## Ang browser extension

Ang **Lolly URL Screenshot** browser extension ay hindi kumukuha, nag-iimbak, o nagpapadala ng anumang personal na data. Walang analytics, walang tracking, walang remote server.

## Ano ang Ginagawa Nito

Kapag hiniling mo sa Lolly web app ([lolly.tools](https://lolly.tools)) na kunan ng screenshot ang isang URL, binubuksan ng extension ang page na iyon sa isang pansamantalang background tab, kinukunan ito sa iyong browser gamit ang DevTools Protocol, ibinabalik ang larawan sa app, at isinasara ang tab. Nangyayari ang lahat nang lokal, sa iyong sariling device at network.

## Data

- **Wala kaming kinukuha.** Walang server ang extension at hindi ito gumagawa ng sarili nitong network requests.
- **Ang mga nakunang larawan** ay diretsong napupunta sa Lolly app sa parehong browser — hindi kailanman ina-upload ng extension.
- **Ang mga URL na kinukunan mo** ay ginagamit lamang para i-load ang isang pahinang iyon para sa isang screenshot na iyon. Hindi ito naka-log o ibinabahagi.

## Mga Pahintulot

- **`debugger`** — para kunan ang na-render na page sa pamamagitan ng DevTools Protocol (ang parehong mekanismo na ginagamit ng Lolly desktop app).
- **Tab access** — para buksan at isara ang pansamantalang tab kung saan naglo-load ang page.
- **Host access** — dahil ang page na pipiliin mong kunan ay maaaring nasa kahit anong site.

Wala sa mga ito ang ginagamit para basahin, subaybayan, o ipadala ang iyong pagba-browse.

## Makipag-ugnayan

May mga tanong? Tingnan ang [lolly.tools](https://lolly.tools).
