# Paggamit ng Lolly

Isang praktikal na gabay sa aktwal na *paggamit* ng app — pagbukas ng tool, paggawa sa canvas, pag-export, pag-save, at pagshe-share. Lahat ng nasa dito ay tumatakbo **sa device mo**: walang account, walang upload, walang kailangang internet pagkatapos ng unang load.

> Bago dito? Ang [Quickstart](/info/quickstart.html) ang magpapasimula sa iyo sa paggawa ng mga bagay sa loob ng ilang minuto, at sinasaklaw ng [Lolly para sa mga Operator](/info/operators.html) ang pag-install/pag-deploy ng app; ang page na ito ay tungkol sa paggamit nito kapag bukas na.

## Pagbukas ng isang tool

Ang home screen ay ang **gallery** — lahat ng tool, naka-grupo ayon sa kategorya. I-click ang isang card para buksan ang tool; kung nagtrabaho ka na dito dati, ire-resume ng **Continue** button ang pinakabagong session mo. Gamitin ang search box para mag-filter ayon sa pangalan.

Ang bawat tool ay isang split view: **controls** sa isang side, at live na **preview** (ang canvas) sa kabila. Baguhin ang anumang control at agad na nag-a-update ang preview.

> Ilang tool (tulad ng **Layout Studio**) ang sa halip ay bubukas bilang isang **free canvas** — isang chromeless, direct-manipulation na surface kung saan mo dina-drag, rine-resize, ire-rotate, at sina-snap ang mga box ng text, shapes, at images, at dini-double-click para i-edit ang text nang mismo doon. Nag-e-export ito sa parehong render path tulad ng bawat ibang tool, kaya ang canvas *ay* mismo ang file. Tingnan ang [The free canvas](#the-free-canvas-layout-studio) sa ibaba.

## Ang canvas (preview)

Palaging ipinapakita ng preview kung ano mismo ang mae-export.

**Desktop**

- **Zoom:** Cmd/Ctrl-scroll, o pinch sa trackpad — nagse-center ang zoom sa pointer mo.
- **Pan:** i-hold ang **Space** at mag-drag, o mag-drag gamit ang **middle mouse button**. (Nananatiling libre ang plain clicks para sa pag-click ng mga parte ng design.)
- **Keyboard:** `0` = fit sa window · `1` = 100% · `+` / `−` = zoom.
- **Zoom HUD:** ang maliit na `−  NN%  +  Fit` control sa sulok. I-click ang percentage para mag-toggle ng Fit ↔ 100%.

**Touch**

- **Pinch** para mag-zoom, **drag** para mag-pan, **double-tap** para i-reset sa fit.

**Click para tumalon sa isang control:** i-click ang anumang element sa design at makukuha ng focus ang tugmang sidebar input at magsi-scroll papasok sa view — para sa isang repeating row group, ibinubukas nito ang eksaktong row na kinlick mo, kaya isang tap na lang ang layo ang pag-edit ng nakikita mo.

Ang pagbabago sa dimension ay laging nagbabalik sa view sa isang malinis na fit.

### Ang free canvas (Layout Studio)

Nagdaragdag ang mga free-canvas na tool ng working surface *sa paligid* ng artboard, tulad ng pasteboard ng isang designer:

- **Off-canvas staging.** I-drag ang isang box lampas sa gilid ng frame at mananatili itong ganap na **nakikita at napipili** — i-park ang mga element sa gilid habang inaayos mo ang composition, tapos i-drag pabalik. Lahat ng nasa labas ng frame ay **banayad na naka-fade** para laging madaling makita ang export area sa isang tingin, at pinapanatili ng frame ang shadow nito para markahan mismo kung saan nagsisimula ang file.
- **Ang frame lang ang nae-export.** Nakabalot ang exported file sa artboard — anumang naiwan sa labas (o ang parte ng box na nakalabas sa gilid) ay basta nacro-crop out sa output, kapwa sa raster at vector formats.
- **Mag-zoom out lampas sa Fit** (pababa hanggang 20%) para makita ang buong pasteboard kapag nag-stage ka ng mga bagay malayo sa labas ng frame.
- **Resizable na artboard.** Ang pagbabago ng export dimensions ay nagre-resize sa frame nang nasa lugar; pinapanatili ng mga box ang kanilang mga posisyon, kaya puwede mong i-reframe ang layout sa paligid ng existing content.

## Sa telepono

Sa mga makipot na screen, nagre-reflow ang layout papunta sa isang column:

- Ang **controls ay nagiging isang sheet** sa itaas na may **drag grip** sa ibabang gilid nito. I-drag ang grip para i-resize ito — sumasnap ito sa **peek / half / full** — o **i-tap** ang grip para mag-toggle sa collapsed ↔ expanded. Pinupuno ng preview ang space sa ibaba at nananatiling nakikita habang nag-e-edit ka.
- Ang isang floating **Render** button ay nagbubukas ng **Export** sheet — lahat ng format, size, copy, save, at download controls sa iisang lugar. I-dismiss ito sa pamamagitan ng pag-tap sa backdrop.

## Controls (mga input)

Inilalantad lang ng mga tool ang mga input na nilalayong mag-iba — naka-lock na ang lahat ng iba pa (colours, layout, typography, logic) ng may-akda ng tool, kaya anuman ang gawin mo ay sumusunod sa mga tuntunin na itinakda ng may-akda. Kasama sa mga input ang text, sliders, colour pickers, dropdowns, dates, image pickers, at repeating row groups. Ang ilan ay naka-grupo sa ilalim ng mga collapsible section.

**Reset:** ibinabalik ng *Clear changes* ang bawat input sa mga default nito.

## Ang iyong mga detalye at headshot

Hawak ng **Profile** (top-right ng gallery) ang pangalan mo, contact details, at isang optional na **headshot**. Awtomatikong pre-fill ng mga tool na humihingi ng mga field na iyon — i-set ito nang isang beses at mapupuno na mismo ang email signature, lockups, at badges mo. Puwede mo pa ring i-override ang anumang field bawat session. Mag-opt in gamit ang **Use my details** para mabasa ng tool ang mga ito.

Nananatili ang headshot at detalye mo **sa device na ito lang**. Ang isang profile ay puwedeng maging higit pa sa iyo lang — isang team o isang role na sinusuot mo paminsan-minsan. Tingnan ang **[Profiles](/info/profile.html)** para sa buong larawan, kasama ang pagpapanatili ng higit sa isa.

## Pag-save at pagpapatuloy

I-click ang **Save** para i-store ang kasalukuyang mga input bilang isang session para sa tool na iyon. Puwede kang magkaroon ng maraming named session bawat tool; muling binubuksan ng **Continue** button ng bawat tool ang pinakabago mo, at nililista ng **history button** (top-right, katabi ng profile mo) ang bawat naka-save na session sa lahat ng tool. Device-local ang mga session. Para ayusin ang mga ito, buksan ang **Projects** (sa ibaba).

## Projects

Ang **Projects** — buksan ito mula sa **Projects** tab sa tabi ng **Tools**, o mula sa **Profile → Storage → Organise in Projects** — ay isang tahanan para sa lahat ng na-save mo, at gumagana ito tulad ng isang file manager:

- **Mga folder na naka-nest.** I-grupo ang mga naka-save na session sa mga folder, at mga folder sa loob ng mga folder, kasing lalim ng gusto mo. Gumawa ng folder, palitan ang pangalan nito, o i-drag ang isang tile papunta sa ibang folder para ilipat ito; may breadcrumb na magbabalik sa iyo pataas. Palaging naroroon ang **Uncategorised** folder na naghahawak ng kahit ano na hindi pa na-file.
- **I-file ang bagong trabaho nang direkta.** Sa loob ng isang folder, binubuksan ng **+ New tool** ang isang tool at awtomatikong ini-file ang unang save nito sa folder na iyon.
- **Multi-select (desktop).** Lagyan ng check ang checkbox ng isang tile, mag-drag ng selection box sa kabuuan ng walang laman na canvas, o **Shift/Cmd-click**; **right-click** ang isang tile para sa context menu nito. Pagkatapos, kumilos sa buong selection nang sabay-sabay.
- **I-render ang isang buong folder o selection.** Ine-export ng **Render folder** ang bawat naka-save na session sa isang folder — kasama ang mga sub-folder nito — bilang isang nested na `.zip`. Ginagawa rin ito ng **Render selection** para sa anumang multi-selection, at direktang nire-render ng isang solong session papunta sa sarili nitong file. Walang kailangang Batch/Pro.
- **I-share ang isang naka-save na session.** Right-click sa isang session → **Share link** para kopyahin ang isang link na muling magbubukas nito nang may eksaktong parehong mga input (ang buong Share dialog — tingnan sa ibaba).

## Pagshe-share ng isang link

Nakukuha ang bawat input sa page URL, kaya ang link *ay* mismo ang design. Gamitin ang **Share** sa export controls — o **Share link** sa anumang naka-save na session sa Projects — para buksan ang **Share dialog**: isang ready-to-copy na link kasama ang mga toggle para sa pag-encrypt ng link at kung ano ang mangyayari kapag binuksan ito (fullscreen, naka-expand na export panel, download-on-open gamit ang `&export`, o copy-to-clipboard gamit ang `&copy`).

Ang isang malaking design ay gagawa ng mahabang URL, kaya nag-aalok din ang dialog ng **Shortest link** na pinapaloob ang buong state sa isang compact na token — laging naroon din ang readable form. I-paste ito sa isang katrabaho, i-bookmark, o i-commit. (Buong detalye: [URL Mode](/info/url-mode.html).)

> Ang mga imahe na in-upload mo mula sa device mo ay **hindi** kasama sa isang shared link — nabubuhay lang ang mga ito sa machine mo.

## Live camera (mga motion-reactive na tool)

Ipinapakita ng mga photo **Filters** — Halftone, Scanline, Posterize, Duotone — ang isang **Go live** button kung saan may available na camera. I-on ito at sinusubaybayan ng effect ang webcam mo frame by frame, kaya nagre-react ito sa galaw; puwede mong i-record ang resulta sa GIF, WebM, o MP4. Nababasa at napoproseso ang mga frame **sa device mo** at hindi kailanman umaalis dito, at napapakawalan ang camera sa sandaling huminto ka o umalis sa tool. (May **Take a photo** din ang anumang image picker para kumuha ng iisang frame bilang isang on-device na image.)

## My images

Kapag pinapayagan ka ng isang tool na magdagdag ng imahe mula sa device mo, ito ay dini-downscale, tinatanggalan ng EXIF/GPS, at sina-save sa personal mong **My images** library (sa ilalim ng **Profile → Storage**). Muling gamitin ito sa anumang tool. May cap ang library at ganap itong local — mamahala o magtanggal ng mga imahe doon.

## Ang Catalogue — ang iyong asset library

Tinitipon ng **Catalogue** (`#/c`, o ang **Catalogue** link sa menu) ang lahat ng maaaring gamitin ng iyong mga tool — mga brand logo, imahe, audio, at motion, naka-grupo ayon sa uri — at dito rin nabubuhay ang iyong **sariling mga creative file**. Walang server, walang admin console, walang pull request: nasa device mo lang ang lahat.

- **Dalhin ang iyong mga file papasok.** I-drag ang anumang imahe, SVG, audio clip, video, Lottie, o PDF papunta sa upload area — o i-click para pumili — at agad itong napupunta sa iyong catalogue, handa na sa asset picker ng bawat tool. Mag-ingest nang kasing dami ng gusto mo; hindi ito kailanman umaalis sa device mo.
- **I-favourite ang madalas mong gamitin.** ★ ang isang asset (o isang brand swatch) at ini-pin ito sa itaas ng bawat picker, kaya isang click na lang ang layo ng go-to logo o kulay mo.
- **Maglinis.** I-recategorise ang isang asset papunta sa ibang grupo, itago ang isang shared brand asset na hindi mo ginagamit (gamit ang **Show hidden** para ibalik ito), o burahin nang tuluyan ang sarili mong mga upload.

### Dalhin ang iyong palette at fonts kahit saan

Ang **Swatches** panel ng Catalogue ay hindi lang para sa reference — i-click ang isang kulay para kopyahin ito, o **i-download ang buong brand palette** sa format na sinasalita ng iyong ibang tool:

- **Design tokens (JSON)**, **CSS variables**, o **CSS classes** — ihulog ang brand nang direkta sa isang stylesheet o isang build;
- **Adobe Swatch Exchange (.ase)** — i-load ito sa Illustrator o Photoshop;
- **GIMP palette (.gpl)** — para sa GIMP o Inkscape.

Nililista ng **Fonts** panel ang iyong mga brand face na may **download** sa tabi ng bawat isa, para i-install nang lokal o ibigay sa isang print shop. (Ang Colours tab ng [Brand Studio](/info/brand-studio.html) ay nag-aalok ng parehong palette download.)

Ang mga asset ay isang kalahati ng bukas, do-it-yourself na landas; ang kabila ay ang **paggawa ng sarili mong mga tool** — hinahayaan ka ng free canvas (Layout Studio, inilarawan sa itaas) na bumuo ng isa nang biswal, walang kailangang code.

## Sound at accessibility

Layunin ng Lolly na maging komportable gamitin para sa lahat. Ang interface ay keyboard-navigable, may tamang labels ang mga custom control para sa screen readers, at nakalantad ang live preview ng bawat tool bilang iisang labelled na imahe na naglalarawan kung ano ang ginagawa nito.

Isang banayad na layer ng **assistive sounds** ang nagkukumpirma sa ginagawa mo — pagdating sa gallery, isang valid vs. invalid na Content Credentials check, pagsara ng panel, paglipat ng filter. **On by default** ito pero laging optional: i-toggle ang **Sound** off kahit saan lumitaw ang switch (options popover ng bawat view, o **Profile**), at naaalala ang pinili mo.

Katabi ng switch na iyon ang **Neurospicy Mode** — isang optional, nakapapanatag na background focus track na tahimik na tumutugtog habang nagtatrabaho ka. Kapag ino-on ito, bumubukas ang isang maliit na **player dock** sa ibabang sulok na sumusunod sa iyo sa buong app; mula rito ay puwede kang maghanap at pumili ng track, mag-skip pasulong at pabalik, i-set ang volume, at i-minimise o isara ito. Sumasaklaw ang track list sa ilang kategorya — procedural na *Lolly Sings* na mga tono, ambient loops at beats, ang sarili mong na-upload na audio, at ilang live internet **radio** stations (kailangan ng mga ito ng koneksyon; lahat ng iba pa ay tumutugtog offline). **Off by default** ito at, tulad ng Sound, naaalala sa lahat ng session at device. Ang pag-off sa Sound ay nagpapa-mute din sa focus track.

## Storage at privacy

Naka-store ang lahat sa local database ng browser mo (IndexedDB): ang profile mo, mga naka-save na session, mga na-upload na imahe, at isang cache ng na-download na catalog content. Ipinapakita ng **Profile → Storage** ang usage at pinapayagan kang:

- **Clear cache** — tanggalin ang na-download na catalog content (nag-re-sync sa susunod na load).
- **Clear all my data** — burahin ang profile, mga session, at mga imahe. *Hindi na mababawi.*

Walang ipinapadala kahit saan. Walang telemetry, walang cloud rendering.

## Paglipat sa ibang device

Dahil nabubuhay ang lahat sa device mo, pinapayagan ka ng **Profile → Storage → Move to another device** na dalhin ang lahat papunta sa pangalawang install — walang account, walang cloud:

- Nagda-download ang **Export my data** ng isang `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` (ang mga parte ng pangalan ay galing sa profile mo at tinatanggal kung unset; `<n>` ay isang per-day na counter para hindi mag-collide ang mga export sa parehong araw) na naglalaman ng profile mo, bawat naka-save na session (kasama ang thumbnail nito), ang mga na-upload mong imahe, at ang mga preference mo (theme, sidebar width, local activity stats).
- Binabasa ng **Import data…** sa kabilang install ang file na iyon pabalik. Ito ay **nag-merge**: anumang may parehong pangalan (ang profile mo, isang session slot, isang imahe) ay pinapalitan ng imported na kopya; napapanatili ang lahat ng iba pa sa device na iyon. Awtomatikong nag-re-link ang mga naka-save na session sa mga imported mong imahe.

Hindi kasama ang catalog cache — nagda-download ulit ito mismo sa bagong device. Ang bundle ay isang plain zip (`manifest.json` + `profile.json` + `sessions.json` + `assets.json` + `assets/blobs/…` + `prefs.json`, format id `lolly-backup`), kaya nananatiling buo ito sa email, USB, o AirDrop at pareho ang format na binabasa ng bawat shell. Naka-checksum ang bawat parte, kaya ang isang file na nasira sa transit ay nahuhuli sa import sa halip na ma-restore nang sira. (Buong format spec: [Data Transfer](/info/data-transfer.html).)

## Pag-import ng isang design (Figma, Penpot, Illustrator, InDesign)

Puwede mong dalhin ang isang existing design papasok sa Lolly at ipagpatuloy ang pagtatrabaho dito: buksan ang **Layout Studio**, i-click ang **Import a design** sa canvas toolbar, at pumili ng Figma **.fig** o SVG, isang Penpot **.penpot**, isang Illustrator **.ai** / **.pdf**, o isang InDesign **.idml**. Nagiging editable na mga box ang mga layer sa free canvas — nananatiling retypable ang text, napupunta ang mga imahe sa **My images**, at sumusunod ang type at colours sa brand globals — pagkatapos ay nagse-save, nagshe-share, at nagre-render ang resulta tulad ng anumang ibang session. Nangyayari ang parse nang buo sa device mo. Buong detalye: **[Import a design](/info/design-import.html)**.

## Pag-export

Tingnan ang **[Exporting & Formats](/info/exporting.html)** para sa buong kuwento — pagpili ng format, output size at print units, transparency, video, at copy/share. Sa madaling salita: pumili ng format, i-set ang size kung kailangan mo, at **Download** (o **Copy** papunta sa clipboard).

## Batch (Pro) mode

Para sa power users, ang **Batch** (naka-link mula sa gallery, naka-gate sa likod ng Pro feature flag, na naka-default on) ay nagre-render ng maraming variation nang sabay-sabay — isang grid kung saan ang bawat row ay isang set ng mga input, na na-export nang magkasama. Perfect para sa pag-localize ng isang card sa isang dosenang wika o paggawa ng bawat size variant sa isang pass. Punuin ang mga row sa pamamagitan ng pag-type, pag-paste nang direkta mula sa spreadsheet, o pag-import ng CSV (puwede mo ring i-export pabalik ang isa), at i-set ang per-row na format, size, at output filename. I-save ang isang buong grid bilang isang named **batch session** na muling bubukas mula sa gallery, at i-download ang bawat row bilang isang solong `.zip`.

Ang Batch ay para sa paggawa ng **maraming variant ng isang template** nang sabay-sabay. Para muling i-render ang mga session na **na-save mo na**, gamitin ang **Projects → Render folder / Render selection** (sa itaas) — walang kailangang Pro.

## Offline at pag-install

Ang Lolly ay isang PWA. Pagkatapos ng unang load, gumagana ito **offline** — i-install ito mula sa address bar ng browser mo (o *Add to Home Screen* sa mobile) para sa isang app-like, full-screen na karanasan. Ina-update nito ang sarili kapag online ka ulit.
