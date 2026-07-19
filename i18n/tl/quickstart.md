# Quickstart

![The tool gallery - every tool as a card, grouped by category](/t/url-shot?url=%2F%23%2F&width=1440&height=900&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&tolerance=0.03&format=png&localize=1&filename=gallery)

Ginagawa ng Lolly ang iyong mga alituntunin - kulay, font, layout, lohika - na mga tool na magagamit ng kahit sino para gumawa ng mga natapos na file: mga larawan, PDF, social card, video, sa pamamagitan lang ng pagpuno ng ilang fields. Walang kailangang pag-aralan at walang kailangang i-upload: tumatakbo ang lahat sa device mo, online man o offline.

Ito ang unang pahinang dapat basahin. Dalawang bagay ang magpapaproduktibo sa iyo: **gawing sarili mo ang Lolly** (i-point ito sa iyong brand), at **dalhin ang mga meron ka na** (iyong mga design file at tokens). Isang link na lang ang layo ang lahat ng iba pa.

> Bago sa Lolly at gusto mo lang gumawa ng something? Buksan ang app, pumili ng kahit anong tool mula sa gallery, punan ang mga blangko, at pindutin ang **Render**. Bumalik dito kapag gusto mo nang isuot nito ang *iyong* brand.

## 1. Gawing sarili mo - i-configure ang iyong brand

Ang brand mo sa Lolly ay isang maliit na **design-tokens** na dokumento - mga kulay, font, at ilang alituntunin - na ginagamit ng bawat tool bilang batayan sa pag-render. I-set ito nang isang beses at ang lahat ng gagawin mo ay on-brand na sa mismong pagkakabuo, hindi sa pag-review pa. May tatlong paraan para pumasok; piliin ang isa na tugma sa kung saan naroroon na ang iyong brand.

### Magsimula mula sa wala (ang wizard)

![The Brand Studio start screen - name, primary colour, and a derived palette](/t/url-shot?url=%2F%23%2Fstart&width=1440&height=900&dpi=192&waitMs=1600&format=svg&localize=1&filename=brand-studio)

Sa unang pagbukas, dadalhin ka sa **Start** screen (`#/start`). Bigyan ito ng pangalan at isang primary na kulay at *kukunin* ng Lolly ang isang kumpleto at accessible na palette mula rito - light/dark surfaces, text, accents - gamit ang parehong colour maths na ginagamit ng engine sa lahat ng dako. Pumili ng font, at may gumaganang brand ka na sa loob ng wala pang isang minuto. Puwede mong pinuhin ang alinman dito sa ibang pagkakataon.

### I-import ang brand na meron ka na

Kung nakuha na ang iyong brand bilang design tokens - mula sa **Penpot**, **Tokens Studio** (Figma), o kahit anong plain **DTCG** file - dalhin ito nang buo sa halip na i-type ulit. Dalawang paraan:

- **Sa loob ng app:** tinatanggap ng Start screen at ng *Your brand* editor ang token file (o isang `LollyBrand` pack) nang direkta - i-drop lang ito at magli-light up ang palette.
- **Mula sa command line**, para magtayo ng reusable na brand pack:

```bash
# a monolithic tokens.json, a one-file-per-set directory, or a Penpot project archive
npm run ingest:brand -- ./my-tokens.json --name acme --label "Acme" --activate
```

Tinatanggap ng `ingest:brand` ang lahat ng tatlong container kung saan ini-export ng Penpot / Tokens Studio ang parehong dokumento - isang solong `tokens.json`, isang directory (`$metadata.json` + mga per-set file), o isang `project.penpot` archive. Gamit ang `--activate`, ire-register nito ang brand bilang isang profile, lilipat dito, at ire-rebuild ang catalog. Tingnan ang [Configuration](/info/configuration.html) kung paano magkasya ang mga brand pack at profile.

### I-tune ito sa loob ng app

![The Dashboard's Design-system tab - the active brand shown read-only](/t/url-shot?url=%2F%23%2Fd%3Ftab%3Dbrand&width=1440&height=900&dpi=192&waitMs=1800&format=png&localize=1&filename=dashboard-brand)

Kapag aktibo na ang isang brand, ang **Your brand** editor ng dashboard (`#/d`) ay isang live editor - palitan ang isang kulay o isang role at nag-a-update ang bawat preview sa pahina habang nagta-type ka. Ang parehong brand ay buod sa **Profile → Your brand** card. Totoo ang mga font: pumili mula sa Google Fonts at ise-store ng Lolly ang file **sa device mo** bilang isang brand asset, kaya nagbibiyahe ang typography mo kahit offline at wala nang kinukuha sa oras ng pag-render.

Kapag nasiyahan ka na, **i-export ang brand bilang isang `LollyBrand` pack** - isang solong file na maaaring i-import ng kasamahan mo para makuha ang eksaktong parehong palette, font, at alituntunin. Ganoon lumilipat ang isang brand sa pagitan ng mga tao at makina nang walang server sa gitna.

> **Nagbi-round-trip ang brand tokens sa dalawang direksyon.** Dahil ang brand ng Lolly ay *talagang* DTCG tokens - ang format na direktang binabasa at isinusulat ng Penpot at dinadala ng Tokens Studio sa Figma - ang palette na *ginagamit mo sa* pag-design at ang palette na *ipinapatupad* ng Lolly ay iisang dokumento lang, hindi dalawang listahan na kailangan mong i-sync nang manu-mano. Tingnan ang [Design Tokens](/info/design-tokens.html).

## 2. Dalhin ang mga meron ka na

Hindi ka nagsisimula sa blangkong pahina. Binubuksan ng Lolly ang design work at ang mga open format na meron ka na.

### Mga open-source na design file

Ang natapos na trabaho sa **Figma, Penpot, Illustrator, InDesign, o kahit anong SVG app** ay hindi na kailangang manatiling naka-lock sa app na ginamit mo sa pagguhit nito. Buksan ang **Layout Studio**, i-click ang **Import a design**, at magbubukas ang file bilang isang *living layout* - hindi isang flattened na larawan. Ang bawat layer ay nagiging isang editable na box: nananatiling maaaring i-retype ang text, nananatiling shapes ang mga shape, napupunta sa library mo ang mga larawan, at napapanatili nang tapat ang mga kumplikadong vector art. Dumarating na ito naka-conform na sa iyong mga brand face at alituntunin sa kulay.

| Meron ka | Dalhin ito bilang |
|---|---|
| Isang Figma frame | Native na `.fig` (File → Save local copy), o isang SVG export |
| Isang Penpot design | Ang `.penpot` export nito, o kahit anong SVG |
| Isang Illustrator file | Native na `.ai` (PDF-compatible) o `.pdf` - direktang bubukas |
| Isang InDesign layout | `.idml` (File → Export → InDesign Markup) |
| Kahit ano pa | **Kahit anong SVG** - ang universal na pinto papasok |

Ang buong import ay nangyayari **sa device mo** - pino-parse ang file sa browser mo at walang ini-upload. Nasa [Import a design](/info/design-import.html) ang buong detalye, at kung ano eksaktong nagpapatuloy.

### Mula sa isang beses lang papuntang template

Ito ang bunga: ang na-import na layout ay isa lamang ordinaryong Layout Studio session, kaya kapag **na-save** mo na ito, mananatili itong nasa isang URL. Kahit sino na may Lolly ay puwedeng buksan ang URL na iyon, palitan ang mga salita, palitan ang isang larawan, at i-render ang sarili nilang bersyon - walang kailangang design app, at nananatiling naka-lock ang mga naka-lock na bahagi. Ang isang beses-lang na design ay nagiging isang reusable na tool. Iyon ang buong ideya, nakakamit nang hindi na kailangang magsulat ng kahit isang linya ng configuration.

### Open data at open tools

Ang [koleksyon ng community tools](/info/builders.html) ay open source at brand-agnostic - QR code, street map, filter, privacy utilities - at nagre-render ito laban sa *iyong* brand sa sandaling i-activate mo ito. Pakainin din ang mga tool ng sarili mong open data: i-paste o i-drop ang isang **CSV** o **JSON** table at pupunuin mula rito ang mga repeating fields ng isang tool, isang natapos na asset kada row.

## 3. Gumawa ng isang bagay, tapos ibahagi o i-automate ito

Kapag aktibo na ang isang brand at nasa kamay mo na ang iyong materyal, gumagawa ang bawat tool ng isang natapos na file:

- **I-render** ang kahit anong tool papuntang **SVG, PDF, PNG, JPG, WebP, video**, at marami pa - sa tunay na print sizes at physical units kapag kailangan mo ang mga ito. Tingnan ang [Exporting & formats](/info/exporting.html).
- **Magbahagi ng link.** Ang bawat estado ng tool ay isang URL, kaya ang isang natapos na asset ay reproducible at parameter-addressable - i-commit ang link, i-regenerate on demand.
- **Gawin ito nang bulk.** Patakbuhin ang isang template mula sa isang spreadsheet sa loob ng [batch grid](/info/exporting.html): isang natapos na asset kada row.
- **I-automate ito.** Ang parehong render ay tumatakbo mula sa [CLI](/info/cli.html) at mula sa isang [AI agent](/info/ai-agents.html) - ang URL ang API.

## Saan susunod

Tatlong pathway, depende sa kung ano ang dahilan mo rito:

- **[Lolly for Creators](/info/creators.html)** - gumagawa ka ng mga bagay. Ang mga bentahe, at kung paano makuha ang pinakamahusay mula sa app.
- **[Lolly for Builders](/info/builders.html)** - gumagawa ka ng mga tool, nag-i-integrate, at nagde-deploy. Ang teknikal na dokumentasyon.
- **[Lolly for Operators](/info/operators.html)** - responsable ka para sa brand, seguridad, at rollout sa buong organisasyon.
