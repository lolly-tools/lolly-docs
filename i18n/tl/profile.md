# Mga Profile - kung sino ka kapag lumilikha ka

Ang **profile** ang working identity na *isinusuot* ni Lolly kapag ito ay lumilikha. Ito ang maliit na kumpol ng mga detalye na puwedeng kunin ng isang tool para hindi mo na kailangang i-type paulit-ulit - ang iyong pangalan, mga contact details, opsyonal na headshot, ilang preferences - kasama na ang lahat ng naiipon mo habang gumagawa ka: saved sessions, na-upload na mga larawan, at ang local activity tally.

Ang lahat ng nasa profile ay nananatili **sa device**, sa local database ng browser (IndexedDB sa web PWA, ang filesystem sa mga Tauri app). Walang account at walang ino-upload. Pinamamahalaan mo ito sa ilalim ng **Profile** (sa kanang-itaas ng gallery); ang mga tool ay *bumabasa* lamang nito, at ang partikular na mga field lang na dinisenyo talaga nilang i-pre-fill.

> Ang profile ay tungkol sa *iyo* (o kung sino man ang lumilikha rito). Naiiba ito sa **Platform** - ang mga kulay, font, at global settings ng brand - at sa **Capabilities**, ang katalogo ng magagawa ng app. Tingnan ang [Profile vs Platform vs Capabilities](#profile-vs-platform-vs-capabilities) sa dulo.

## Ano ang laman ng profile

| Bahagi | Ano ito |
|---|---|
| **Name** | Pangalan at apelyido. |
| **Contact** | Email at telepono. |
| **Location** | Lungsod at bansa. |
| **Headshot** | Opsyonal na larawan, naka-crop sa hugis-parisukat at itinatago bilang local na larawan. Ginagamit ng mga tool tulad ng email signatures, quote cards, color blocks, at dynamic layouts. |
| **Use my details** | Iisang opt-in switch. Kinokontrol nito kung isasama ang iyong personal na detalye bilang **provenance** - ang author/credit line na naka-embed sa mga na-export na file - at bilang author sa mga batch run ng **/pro**. (Hindi nito kinokontrol ang pre-fill: tingnan ang [Paano ginagamit ng mga tool ang iyong profile](#how-tools-use-your-profile).) |
| **Preferences** | Ang iyong theme (light, dark, o SUSE) at kung aling mga bahagi ng app ang na-enable mo sa pamamagitan ng **Feature flags**. |
| **Your work** | Mga saved session (may thumbnails) - nakaayos sa nested folders sa **[Projects](/info/using.html)** - ang iyong **My images** library, at ang local activity stats, lahat naka-key sa profile na ito. |

Wala sa mga ito ang required. Ang blangkong profile ay perpektong profile pa rin; punan mo lang ang mga bagay na makakatipid sa iyo ng pag-type.

![The Profile screen - name, contact, an optional headshot, and your preferences](/t/url-shot?url=%2F%23%2Fprofile&width=1440&height=900&dpi=192&waitMs=1600&format=png&localize=1&filename=profile-details)

## Ang profile ay isang konteksto, hindi lang isang tao

Ang salitang "profile" ay parang tumutukoy sa iisang fixed na tao, pero sa Lolly, ito ay talagang isang **creating context** - *kung sino ka habang ginagawa mo ang bagay na ito*. Ang konteksto na ito ay puwedeng magkaroon ng tatlong magkakaibang anyo, at pare-pareho ang paraan ng pag-handle ni Lolly sa lahat ng ito.

### Bilang indibidwal

Ito ang default. Ang profile ay ikaw: ang iyong pangalan, email, headshot. I-set mo ito nang isang beses at awtomatiko nang mapupunan ang iyong signature, badge, at conference lockup. Ito ang kailangan ng karamihan sa mga tao.

### Bilang isang team

Hindi kailangang iisang tao lang ang profile. Puwede itong kumatawan sa isang **team o function sa loob ng isang organisasyon**: ang shared name ng team, isang group inbox address (`events@…`), isang department, ang headshot o unit mark ng team. Isang tao lang ang mag-se-set up nito, mag-e-export (tingnan sa ibaba), at ilo-load ng ibang miyembro ng team ang parehong profile - kaya ang lahat ng ginagawa ng team ay may consistent na detalye nang hindi na kailangang muling i-enter ito ng sinuman. Ang isang shared kiosk o isang checked-out na demo laptop ay puwedeng magpatakbo ng iisang team profile na ginagamit ng lahat sa likod nito bilang basehan ng paglikha.

### Bilang isang function - isang role na minsan mong isinusuot

Ito ang sitwasyon na hindi nasasakop ng rigid na modelong "isang tao, isang profile." Puwede kang maging **event manager sa tatlong araw sa isang taon** at ibang-iba naman sa natitirang panahon. Sa tatlong araw na iyon, gusto mo ang event details, ang event inbox, at posibleng event sub-brand para punan ang iyong mga badge at signage; sa natitirang 362 araw, gusto mo namang ibalik ang iyong normal na identity.

Sa Lolly, ang role na iyon ay isa lamang **ibang profile na nakalaan sa iyo** - isang saved bundle (susunod na seksyon) na ino-load mo para sa event at inilalagay sa tabi pagkatapos. Ang role ay parang sombrero, hindi bagong account. Isuot ito kapag kailangan mo, alisin kapag tapos ka na.

## Isang install, isang aktibong profile - marami kang puwedeng itago

Sa anumang sandali, ang isang install ay may **isang aktibong profile** - ang mga detalye na nakikita ng tool sa ngayon. Walang in-app profile switcher; sa halip, ang bawat profile ay isang **portable bundle** (iisang `.zip`, tingnan sa [ibaba](#moving-a-profile-to-a-new-device)). Sinadya itong maging parehong mekanismo ng paglipat sa bagong device - ang profile ay isang file na puwede mong i-save, kopyahin, at i-load.

Kaya kung talagang nagpapalit-palit ka ng maraming konteksto (ikaw, ang team mo, ang event-manager hat), magtago ka ng ilang bundle at i-load ang kailangan mo:

- **Cleanest switch:** **Profile → Storage → Clear all my data**, pagkatapos **Import** ang bundle para sa konteksto na papasukan mo. Lilikha ka na ngayon nang purong bilang profile na iyon.
- **Layering:** kapag nag-import ka *nang hindi muna* nag-clear, ito ay **nag-me-merge** - ang na-import na profile, sessions, at mga larawan ay ilalapat sa ibabaw ng nariyan na, pinapalitan ang anumang may parehong pangalan at iniiwan ang iba. Kapaki-pakinabang kapag gusto mong isama ang saved sessions ng isang team sa sarili mong setup; hindi ito ang gusto mo kung kailangan mo ng malinis na role boundary.
- **Side by side:** dahil ang lahat ay device-scoped, ang hiwalay na browser profile, hiwalay na user account, o pangalawang naka-install na PWA ay bawat isa'y may sariling independent na Lolly profile. Patakbuhin nang sabay ang personal mong install at ang event kiosk install, walang pagpapalit.

> Magtago ng isang bundle bawat konteksto at palitan ang pangalan ng mga file ayon sa kung ano sila (`LollyTools-events-2026.zip`, `LollyTools-me.zip`). Ang file *ang* profile.

## Paglipat ng profile sa bagong device

Dahil ganap na local ang profile, ang tanging paraan para mailagay ito sa isang blangkong install - bagong laptop, bagong-reset na browser, makina ng katrabaho, o offline na device - ay ang **dalhin ang file**. Walang login ang magre-restore nito para sa iyo, at iyon nga ang punto: wala talagang lumabas sa iyong device mula sa umpisa.

Sa ilalim ng **Profile → Storage → Move to another device**:

- **Export my data** ay nagda-download ng isang `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` - pinangalanan batay sa profile na kinabibilangan nito, may per-day sequence number para hindi magbanggaan ang paulit-ulit na exports (tinatanggal ang mga bahagi ng pangalan kapag wala nito ang profile). Naglalaman ito ng iyong profile, bawat saved session (kasama ang thumbnail nito), ang iyong mga na-upload na larawan, at ang iyong mga preference (theme, layout, local activity stats).
- **Import data…** sa kabilang install ay babasahin ang file na iyon at magpapatuloy ka mula mismo sa huling tinigilan mo.

Ang bundle ay simple at self-contained na zip, kaya puwede itong dalhin sa **anumang** paraan - USB, AirDrop, network share, email-to-yourself - at maaaring ganap na offline ang target. Bawat bahagi ay may checksum, kaya ang file na nasira sa paglipat ay mahuhuli sa import sa halip na ma-restore nang kalahating-sira. Ang Import ay **nag-me-merge** (ang profile/session/image na may parehong pangalan ay ino-overwrite; pinapanatili ang lahat ng iba), kaya hindi nito kailanman bubura ang isang target na ginagamit na.

Ang hindi kasama sa paglipat: ang catalogue cache (nagda-download ulit ito mismo sa bagong device) at ang mga tool mismo (ipinapalagay na naroroon na).

Para sa eksaktong bundle layout, version policy, at integrity rules, tingnan ang **[Data Transfer](/info/data-transfer.html)**; para sa end-to-end na walkthrough, **[Using Lolly → Moving to another device](/info/using.html#moving-to-another-device)**.

## Paano ginagamit ng mga tool ang iyong profile

Ang isang tool ay *nagpu-pre-fill* lamang ng mga field ng profile na talagang dinisenyo nitong i-bind:

**Explicit binding.** Minamarkahan ng may-akda ng tool ang isang input bilang kumukuha mula sa profile (`bindToProfile: "firstname"`, `"email"`, `"headshot"`, …). Kapag binuksan ang tool, mapu-pre-fill ang input na iyon mula sa profile mo - at puwede mo pa ring i-override ito para sa sesyon na iyon lang nang hindi binabago ang profile. Ang pre-fill ay isang local na convenience at nangyayari ito kahit naka-on man o naka-off ang **Use my details**.

**Ang opt-in (provenance).** Kapag nag-export ka ng asset, opsyonal na sumasama ang iyong mga detalye bilang **provenance** - isang author/credit line na naka-embed sa metadata ng file (PNG, PDF, SVG, …) - para masabi ng natapos na asset kung sino ang gumawa nito. *Ito* ang kinokontrol ng **Use my details**: iwanang naka-off ito at magdadala pa rin ang export ng "Made with Lolly" na tool/platform attribution, pero walang isasamang personal na author/contact line. (Ang parehong opt-in ang nagtatakda ng author sa mga batch run ng **/pro**.) (Para sa mga may-akda ng tool: tingnan ang [Authoring Tools → `bindToProfile`](/info/authoring-tools.html#bindtoprofile) at [Host API → `host.profile`](/info/host-api.html#host-profile).)

## Profile vs Platform vs Capabilities

Tatlong bagay ang magkalapit sa UI at madaling malito:

- **Profile** - *ikaw* (o ang team mo, o ang role na kinasusuutan mo): pangalan, contact, headshot, ang saved work mo. Personal, device-local, portable bilang bundle.
- **Platform** - ang *brand*: mga kulay, font, at global settings na pinagbabatayan ng bawat tool sa pag-render. Shared at consistent, hindi personal.
- **Capabilities** - *ano ang kaya ng app*: ang buong feature set at ang mga tool na available sa iyo.

Ang profile ang nagbabago kung *kanino galing* ang isang asset; ang platform ang nagbabago kung *ano ang itsura* nito; ang capabilities ang *magagawa mo*.

### May dalawa pang kahulugan ang "profile" sa ibang bahagi - hindi ito ang tinutukoy dito

Masyadong marami ang kahulugan ng salitang ito sa buong proyekto. Wala sa mga sumusunod ang tumutukoy sa personal na profile na pinag-uusapan ng pahinang ito:

- **Content profile** - isang build-time na configuration sa `profiles.json` na nagbubuklod ng isang set ng tool packs sa isang brand catalog (hal. `suse`, `lolly-start`). Ito ang pinipili ng operator kapag nag-de-deploy, at ito rin ang pinipili ng `profile` **URL/CLI parameter** bilang isang *colour* variant sa oras ng export (ang ICC/CMYK press condition - tingnan ang [URL Mode](/info/url-mode.html)). Parehong tungkol sa *build/output*, hindi tungkol sa *iyo*. Tingnan ang [Configuration](/info/configuration.html).
- **Identity profile** - ang opsyonal na **verified Content Credentials identity** na puwede mong i-enrol (isang short-lived na certificate na nag-uugnay sa iyong email sa mga naka-sign na export mo). Ito ay isang signing identity, hiwalay sa name/contact fields ng personal na profile, bagama't kinokontrol ng **Use my details** kung isasama man ang alinman dito. Tingnan ang [Content Credentials Identity](/info/content-credentials-identity.html).

## Privacy

Ang profile ay hindi kailanman ipinapadala, ino-upload, o ginagamit upang tukuyin o subaybayan ka - walang kailangang pahintulutan, ito lang na paalala para malaman mo kung ano ang itinatago. Burahin ang lahat nito anumang oras gamit ang **Profile → Clear all my data**. Tingnan ang [Privacy Policy](/info/privacy.html).
