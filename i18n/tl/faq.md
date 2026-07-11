# FAQ

Mga madalas itanong na ipinapakita sa accordion ng `/info` landing page.

**Paano i-maintain:** bawat `##` heading sa ibaba ay isang tanong; lahat ng nasa ilalim nito
(hanggang sa susunod na `##`) ang sagot. Gumagamit ang mga sagot ng parehong lightweight markdown
gaya ng ibang bahagi ng site — paghiwalayin ang mga paragraph gamit ang blangkong linya. Magdagdag, mag-alis, o
muling ayusin ang mga tanong dito at i-rerun ang `npm run build:info` (o `npm run dev:web`).
Anumang nasa itaas ng unang `##` (ang title na ito at ang mga note na ito) ay hindi isinasama ng build.

## Ano ang mangyayari kapag nag-opt-in ako sa /profile page?

Sa unang pagkakataong gamitin mo ang Lolly, lahat ng iyong ini-type kahit saan ay ganap na pribado hanggang sadyain mong ilabas ang impormasyong iyon sa pamamagitan ng media o isang share link (kung online).

Kapag napili ang opt-in, ini-embed namin ang ilan sa iyong profile information bilang provenance sa mga asset at bundle upang makilala ka bilang pinagmulan.

Gumagawa ang Lolly ng malaking dami ng content. Sumusunod kami sa mahigpit na data minimization approach para maiwasan ang panganib.

### Ano ang mga feature flag?

Binubuksan o isinasara ng feature flags ang mga bahagi ng Lolly. Karaniwan, isang administrator ang kumokontrol dito — pero sa Lolly, ikaw ang may kontrol.

## Paano ko makukuha ang mobile o desktop apps?

Kahit sino ay maaaring mag-distribute ng sarili nilang apps; ang mga tool at configuration ng mga app na iyon ay malaki ang pagkakaiba-iba depende sa audience na pinag-uukulan nito. Kaya walang iisang app maliban na lang kung ikaw mismo ang gumawa nito o may kaugnay na taong nagbigay nito sa iyo.

## Bakit ang pangalang "Lolly Tools"?

**Lolly** Dahil matamis ang kalayaan.
**Tools** ay hindi aktibo kapag hindi ginagamit. Hindi ka sinusubaybayan, walang tumatakbong lihim na programa,
Pinapatakbo mo ito ayon sa iyong mga utos, aksyon, at tuntunin.

**Lolly** ay terminong Australian, New Zealand, at British para sa 'matamis' o 'kendi'. Tulad ng mga lolly, sarap na sarap ang mga tool para sa mga taong nangangailangan nito.

Natatawa rin kami sa oras at mga bayarin na naiipon namin sa approach na ito.

## Anong mga hadlang ang aasahan ko sa pag-adopt ng Lolly?

Kumakasya ang Lolly kahit saan ka na gumagawa ng files — ang CLI ay parehong engine ng App, kaya't hindi maaaring lumihis ang isang pipeline run nang 2am mula sa napi-preview ng tao sa browser. Bihirang teknikal ang friction sa pag-adopt; organisasyonal ito. Asahan ang mga sumusunod:

**Kailangang i-author ang mga tool at ang brand catalog.** Ang Lolly ay isang platform, hindi isang tapos nang pack ng iyong mga template. Kailangang tukuyin ng isang tao ang asset catalog (logos, palettes, fonts bilang permanenteng IDs) at isulat ang manifest + template para sa bawat output type.

**Tumatakbo ang governance sa git.** Elegante para sa mga engineer ang "Ang PR review *ay* ang moderation" ngunit hindi pamilyar sa karamihan ng mga brand at marketing team. Kung ang mga taong may-ari ng mga desisyon sa brand ay hindi gumagalaw sa git, kakailanganin mo ng workflow na magiging tulay sa kanila — o tahimik na magiging strategic design partner at mas malawak na institutional gatekeeper ang IT. Mas gusto ito ng marami sa matagal nang tumatakbong production environment.

**Sadyang makitid ito — ganito ang pag-frame dito.** Hindi ang Lolly para sa bespoke o hero content. Ito *ay* ang iyong personal DAM — hydrated at supercharged ng iyong design system, tools at catalog — at *mayroon* itong open canvas (Layout Studio), pero kahit doon, sumusunod ang mga kulay, type, at assets sa aktibong design globals, kaya't nananatili sa loob ng system ang malayang pag-aayos. Kung ihahambing sa Figma o Canva, magmumukhang limitado ito. Pero kung tutuusin sa kung ano talaga ito — operationalized, paulit-ulit, massive-scale na asset generation — walang makakatapat. Ang maling framing ang pinakakaraniwang set-back.

**Change management sa panig ng producing.** Gumagana ang mga umiiral na proseso ngayon, kahit off-brand ang output. Ang pag-re-point sa kanila papunta sa engine ay nangangahulugan ng muling pagsubok at muling pagkatuto, at ang "kaya na naming gumawa ng files" ay nagiging dahilan para hindi mag-migrate. Simulan sa pag-convert ng isang high-visibility, production-quality na output at ipakita ang before/after nang magkatabi.

Itinataas ng Lolly ang lahat.

## Ano ang nagpapaiba sa utilities kumpara sa tools?

**Basic na Sagot →** Hindi laging kailangang mag-render ng utilities kaya maaari itong magkaroon ng ibang UX.

**Tunay na Sagot →** Ang dahilan kung bakit ma-host ang utilities sa loob ng Lolly Tools ay para magdagdag ng isa pang 'convenience layer' ng depensa upang mabawasan ang insentibo para sa data-exfiltration.

Bakit? Dahil alam nating araw-araw, kinukuha ng mga tao ang **kumpidensyal na content na nasa kanila na** at ibinibigay ito sa isang random na website para lamang magsagawa ng isang maliit na mekanikal na operasyon:

- "**I-compress ang PDF na ito**" → nag-a-upload ng kontrata / payslip / board deck sa hindi kilalang entity.
- "**i-convert ang HEIC papuntang JPG**" → nag-a-upload ng personal na mga larawan (may GPS EXIF) sa isang ad-funded host
- "**i-crop / i-resize ang larawang ito**" → nag-a-upload ng product screenshot o hindi pa inilabas na asset
- "**i-format ang JSON na ito**" / "i-decode ang JWT na ito" → nagpe-paste ng API responses, tokens, secrets sa isang formatter
- "**pagsamahin ang mga PDF na ito**" → nag-a-upload ng **dalawang dokumentong hindi dapat magkasama sa isang server**

Ang mga site na ito at ang malawak nilang clone long-tail ay **hindi mapagkakatiwalaan bilang default**, may hindi kilalang retention, hindi kilalang jurisdictions, hindi kilalang subprocessors, at isang ad/affiliate business model na may buong insentibo para itago ang ibinibigay mo sa kanila. Simple lang ang operasyon; ang **content ang kabayaran.**

Nananalo kami sa digmaan para sa governance sa pamamagitan ng napakahusay na convenience at serbisyo.

## Kaya bang i-edit at i-render ng Lolly ang aking mga Figma, Penpot, Illustrator o InDesign files?

Oo. Buksan ang **Layout Studio** at i-click ang **Mag-import ng Disenyo**: tinatanggap nito ang native Figma **.fig** (Save local copy), isang Penpot **.penpot** export, isang Illustrator **.ai** o **.pdf**, isang InDesign **.idml** (File → Export → InDesign Markup), o **anumang SVG** (ang malawak na pinto — halos lahat ng design app ay maaaring mag-export nito). Lahat ay pino-parse nang ganap sa iyong device, walang kailangang account o plugin.

Dumarating ang mga layer bilang mga editable box sa bukas na canvas: mananatiling made-edit muli ang text, mananatiling shapes ang mga hugis, sumasali ang mga larawan sa iyong on-device library, at sumusunod ang type at mga kulay sa brand globals. I-save ito at magiging isang reusable, URL-addressable na template ang layout na maaaring punan ulit ng kahit sinong may Lolly — at maaari kang maghalo ng mga live tool (isang QR code, isang chart) na nag-re-render kapag na-load. Mula doon, nire-render ito tulad ng iba pang bagay sa Lolly — SVG, PDF, PNG at iba pa, reproducible mula sa URL nito. Tingnan ang [Mag-import ng Disenyo](/info/design-import.html).

## Ano ang mangyayari sa Agosto 29?

Aalis ang mga SUSE-branded na tool sa proyekto, at papalitan ito ng mga bagong generic na example tool na tinutukoy ng user.

Magpapatakbo ang SUSE ng sarili nitong Lolly para protektahan ang mga trademark nito.

## Gaano karami ang pinananatiling pribado ng SUSE? (aka kailan ang rug-pull)

Ang mga trademark at branded tool ng SUSE ay para lamang sa demonstrasyon, hanggang Agosto 29. Mahahanap mo ang isang unbranded na instance ng Lolly sa [lolly.ART](https://lolly.art).

Ang SUSE ay isang enterprise open source infrastructure company na mahigit tatlong dekada nang platform leader. Kasama sa mga produkto nito ang enterprise-tier Linux, Cloud Native, Edge, at AI infrastructure solutions.

Mula sa perspektibo ng SUSE, ito ay tungkol sa pagsasabuhay ng sinasabi nila tungkol sa sovereignty at security. Sa ngayon, halos absolute zero ang posibilidad na i-productize ng SUSE ang Lolly.

Full disclosure: *talagang* gumagawa ang SUSE ng internal tooling para i-integrate ang Lolly sa loob ng mga IT system nito — tungkol ito sa internal set-up ng SUSE, hindi sa public vs. private development.

Sa usapin ng public side, layunin ng Lolly na maitayo sa pamamagitan ng [Open Build Service](https://openbuildservice.org/), na may secure supply-chain artifacts na ihahatid ng [SUSE Application Collection](https://apps.rancher.io/applications).

Gagawin namin ito nang bukas hangga't kaya — hindi mo lang makikita ang mga SUSE-branded na tool nang matagal, ni ang internal workforce at commercial processes ng SUSE, na walang kinalaman sa Lolly.

## Anong flavour ang Lolly logo na iyon?

May nagsasabing Lime, may nagsasabing Mint, at minsan Apple — dinadala ng Lolly ang tamis, ikaw ang gumagawa ng flavour!
