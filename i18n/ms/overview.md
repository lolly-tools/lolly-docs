# Gambaran Keseluruhan

Dokumen ini merakamkan tujuan, struktur, dan keputusan seni bina bagi platform Lolly. Ia mencerminkan visi produk dan juga keadaan pangkalan kod semasa.

> **Status:** Lolly adalah prototaip dalaman dalam **pilot tertutup yang belum selesai**. Enjinnya deterministik dan konsisten secara dalaman, tetapi produk ini masih awal — SUSE adalah pelanggan nombor satu — dan enjin kriptografi serta penghuraian failnya kini sedang menjalani pengukuhan infrastruktur ketat SUSE, bersedia untuk skala perusahaan (kami memang mahir dalam hal ini). Baca seni bina di bawah sebagai niat reka bentuk yang sedang diuji, bukan produk siap yang disahkan. Lihat [Penerimaan & Tadbir Urus](/info/adoption-governance.html#status) untuk bagaimana pilot ini dijalankan dan diukur.

---

## Sebab platform ini wujud

Pasukan menghadapi masalah berulang: kerja kreatif dan kandungan yang boleh diulang tetapi terlalu mudah diramal untuk mewajarkan tangan mahir setiap kali, namun terlalu sensitif kualiti untuk diserahkan tanpa pagar keselamatan. Hasilnya sama ada daya pemprosesan yang perlahan (kesesakan pakar), ketidakkonsistenan (orang menggunakan apa sahaja alat yang ada), atau terkunci kepada vendor (DAM SaaS yang mengawal templat anda).

Platform ini adalah jawapan struktural:

> **Kreatif dan kandungan programatik pada skala besar** — penjanaan aset sifar-tenaga kerja, dengan peraturan di bawah kawalan berpusat, untuk pekerja, vendor, dan rakan kongsi.

Hasilnya ialah **kelimpahan**: setiap acara mempunyai papan tanda yang betul, setiap makluman CVE sepadan dengan gaya rumah, setiap label dicetak bersih, setiap tandatangan e-mel adalah terkini — semuanya tanpa tiket reka bentuk. Platform ini mengendalikan kreatif operasi yang berulang. Ia sengaja bukan alat kreatif tersuai — pereka bentuk masih memiliki kerja unggulan.

### Kedudukannya dalam landskap

| Keupayaan | Canva | Portal jenama | Illustrator | Figma / Penpot | **Lolly** |
|---|---|---|---|---|---|
| Penjanaan kandungan pukal | sebahagian | ✗ | ✗ | ✗ | **✓** |
| Berfungsi sepenuhnya luar talian | ✗ | ✗ | ✓ | sebahagian | **✓** |
| Logik templat & kekangan tegar | ✗ | sebahagian | ✗ | sebahagian | **✓** |
| Tiada kemahiran reka bentuk diperlukan | sebahagian | ✓ | ✗ | ✗ | **✓** |
| Content Credentials automatik | ✗ | ✗ | sebahagian | ✗ | **✓** |
| Alat menggabungkan alat lain | ✗ | ✗ | ✗ | ✗ | **✓** |
| Enjin terbuka, tidak terkunci SaaS | ✗ | ✗ | ✗ | sebahagian | **✓** |
| Content Credentials C2PA | ✗ | ✗ | ✗ | ✗ | **✓** |
| Asal usul tahap forensik pilihan masuk | ✗ | ✗ | ✗ | ✗ | **✓** |
| Aplikasi Mudah Alih dan Desktop | ✓ | ✗ | ✗ | sebahagian | **✓** |
| Baris Perintah & TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

Jurangnya jelas: tiada apa dalam landskap sedia ada yang memberikan kita output yang kekangan-dahulu, mampu luar talian, kemahiran rendah, dan boleh diakses secara dalaman. Lolly malah menyertakan kanvas terbuka — **Layout Studio** — di mana warna, jenis taip dan aset patuh kepada tetapan global jenama, jadi susunan bebas kekal kekangan-dahulu. Apa yang ia **bukan** ialah sut reka bentuk tanpa kekangan: pereka bentuk terus menggunakan Illustrator dan Figma untuk kerja unggulan tersuai. Pelbagai kombinasi boleh disusun menggunakan alat ini.

**Gunakan untuk:** Penjanaan pantas aset kreatif yang dioperasikan — jubin acara, lencana nama, tandatangan, makluman CVE, kod QR, kad sosial, label konsainan, laporan berstruktur.

**Jangan gunakan untuk:** Kandungan hero tersuai.

---

## Gambaran besar

```
                ┌─────────────────────────────────────────────┐
                │              Tools (data, not code)         │
                │   tool.json + template.html + hooks.js?     │
                └─────────────────────────────────────────────┘
                                    ▲
                                    │ talks to via Capability Bridge v1
                                    ▼
                ┌─────────────────────────────────────────────┐
                │                  Engine                     │
                │   loader · validator · runtime · template   │
                │   inputs · url-mode                         │
                │   PLATFORM AGNOSTIC. Knows nothing of DOM,  │
                │   filesystem, or You.                       │
                └─────────────────────────────────────────────┘
                                    ▲
                                    │ implements HostV1
                                    ▼
        ┌──────────────┬──────────────┬──────────────┬──────────────┐
        │  Web Shell   │ Tauri Desktop│ Tauri Mobile │  CLI Shell   │
        │   (PWA)      │              │              │              │
        └──────────────┴──────────────┴──────────────┴──────────────┘
                                    ▲
                                    │ fetches from
                                    ▼
                ┌─────────────────────────────────────────────┐
                │              Catalogs                       │
                │   catalog/tools/index.json + tool dirs      │
                │   catalog/assets/index.json + asset files   │
                └─────────────────────────────────────────────┘
```

### Struktur repositori

```
lolly/
├── engine/           # Teras platform-agnostik. Sumber terbuka (MPL-2.0).
│   └── src/
│       ├── index.ts          # permukaan awam — loader, runtime, template, inputs, url-mode
│       ├── loader.ts         # mengambil dan mengesahkan fail alat
│       ├── runtime.ts        # mengatur kitaran hayat 5 langkah
│       ├── template.ts       # hydration Handlebars + annotateTemplate
│       ├── inputs.ts         # manifest → model input runtime
│       ├── url-mode.ts       # pusingan penuh URL ↔ keadaan input
│       ├── validate.ts       # pengesahan JSON Schema bagi manifest
│       ├── compose.ts        # menyelesaikan pemaparan alat bersarang (composes)
│       ├── embed.ts          # menghurai URL benam lolly.tools mudah alih
│       └── bridge/
│           └── host-v1.ts    # antara muka TypeScript — kontrak jambatan
│
├── shells/
│   ├── web/          # PWA — dihoskan dalam talian; pengedaran utama
│   │   └── src/
│   │       ├── main.ts           # boot, penghalaan
│   │       ├── theme.ts          # terapkan/simpan tema (pencegahan FOUC)
│   │       ├── bridge/           # pelaksanaan web bagi API HostV1
│   │       │   ├── index.ts      # gabungkan semua kepingan jambatan
│   │       │   ├── db.ts         # persediaan IndexedDB
│   │       │   ├── state.ts      # host.state — suntingan tersimpan
│   │       │   ├── profile.ts    # host.profile — butiran pengguna
│   │       │   ├── assets.ts     # host.assets — katalog + muat naik pengguna
│   │       │   ├── clipboard.ts  # host.clipboard
│   │       │   ├── export.ts     # host.export — rasterise/serialize
│   │       │   ├── net.ts        # host.net — fetch tersenarai-putih
│   │       │   └── media.ts      # host.media — bingkai kamera langsung (onFrame)
│   │       ├── catalog/
│   │       │   └── sync.ts       # penyegerakan katalog semasa but + cache luar talian
│   │       ├── styles/           # CSS seluruh aplikasi (app.css, picker.css, tokens.css)
│   │       └── views/
│   │           ├── gallery.ts    # senarai pustaka alat + kad keadaan tersimpan
│   │           ├── tool.ts       # memasang satu alat (input + kanvas + tindakan)
│   │           ├── picker.ts     # UI pemilih aset (dipanggil oleh host.assets)
│   │           ├── profile.ts    # editor butiran pengguna
│   │           ├── projects.ts   # /p — folder sesi tersimpan (bersarang; eksport folder/pilihan)
│   │           └── free-canvas.ts # lapisan editor kanvas-bebas untuk alat render.layout:"editor"
│   │
│   ├── cli/          # CLI Node.js — enjin yang sama, jsdom tanpa kepala (headless)
│   │   ├── bin/lolly.ts
│   │   └── src/
│   │       ├── run.ts    # loadTool → createRuntime → eksport → tulis fail
│   │       └── bridge.ts # pelaksanaan CLI bagi HostV1
│   │
│   ├── tui/          # Shell terminal interaktif (Ink) — guna semula jambatan CLI
│   │   └── src/
│   │       ├── main.tsx  # aplikasi skrin penuh: Gallery / Projects / Profile / ToolView
│   │       └── bridge.ts # jambatan CLI + keadaan pada cakera di bawah ~/.lolly
│   │
│   ├── tauri-desktop/ # aplikasi desktop boleh muat turun
│   └── tauri-mobile/  # aplikasi iOS/Android
│
├── tools/            # PANDANGAN profil (gitignored) — data, bukan kod. Digabungkan daripada pek:
│                     #   community/ (awam, tidak terikat jenama, MPL) + brands/<active>/tools (dimiliki jenama).
│   ├── qr-code/
│   ├── quotes/
│   ├── email-signature/
│   ├── daily-card/        # "Day Brief" — cuaca/waktu/peta (diambil oleh skrip templat sebaris)
│   ├── code-canvas/
│   ├── countdown-timer/
│   ├── color-palette/
│   ├── color-block/           # blok bertaip/heterogen (pembeza addMenu)
│   ├── dynamic-layout/
│   ├── tool-logo/         # "Logo" — logo jenama tukar-automatik
│   ├── street-map/        # peta blok bandar vektor luar talian
│   ├── url-shot/          # "URL Screenshot" (keupayaan capture)
│   ├── strip-data/        # pembersihan metadata pada peranti — JPEG/PNG/SVG/PDF (fail masuk → fail bersih keluar)
│   ├── compress-pdf/      # pemampat PDF pada peranti — memampatkan semula imej (fail masuk → fail lebih kecil keluar)
│   ├── brand-lockup/      # "Brand Lockup" — lockup logo SUSE; teks-ke-laluan HarfBuzz (wasm)
│   ├── bag-video/
│   ├── chart-creator/     # carta SVG daripada data berstruktur
│   ├── filter-duotone/    # rawatan foto dwiwarna
│   ├── filter-halftone/   # foto → grid titik halftone vektor
│   ├── filter-scanline/   # foto → grid scanline berposter retro (SVG / raster lutsinar)
│   ├── meeting-planner/   # penjadual mesyuarat zon waktu global
│   ├── calendar-ics/      # acara → fail kalendar .ics ditambah satu kad
│   ├── digi-ad/           # "Animated Ad" — sepanduk bergelung daripada adegan
│   ├── event-name-badge/  # lencana persidangan — menggabungkan qr-code sebagai SVG
│   ├── wayfinding-signage/ # papan tanda acara; blok arah menyesuaikan teks label secara automatik
│   ├── text-helper/       # ruang kerja teks pada peranti (format/nyahkod/hash/nyah-kenal pasti)
│   ├── layout-studio/     # "Layout Studio" — kanvas editor WYSIWYG bebas bentuk (render.layout: editor)
│   ├── multi-page-pdf/    # dokumen PDF berbilang halaman — kulit depan, blok kandungan mengalir, halaman belakang
│   ├── diagram-builder/   # rajah org / layercake / process / cycle / pyramid
│   ├── logo-wall/         # banyak logo → grid disusun automatik
│   ├── logo-lockup-partner/ # lockup ko-jenama SUSE + rakan kongsi
│   ├── web-icon/          # favicon .ico / png / svg daripada teks + warna
│   ├── filter-posterize/  # foto → pemisahan vektor berposter rata
│   ├── filter-pixel-stretch/ # foto → kesan regangan piksel
│   ├── lottie-digi-ad/    # sepanduk iklan Lottie beranimasi
│   └── pose-geeko/        # pose maskot SUSE Geeko — gambar pegun sedia cetak
│
├── catalog/
│   ├── tools/index.json        # daftar alat
│   └── assets/
│       ├── index.json          # daftar aset
│       └── suse/...            # logo, palet, dll.
│
├── schemas/          # JSON Schema untuk tool.json, entri aset, AssetRef
├── scripts/          # build-catalog-index.ts, checksum-assets.ts, validate-catalog.ts
├── tests/            # ujian enjin
└── docs/             # fail ini + panduan penciptaan + kedudukan produk
```

---

## Model penghantaran platform

Platform ini berjalan merentasi beberapa permukaan — web PWA, Tauri desktop/mudah alih, CLI berskrip, dan TUI interaktif. Kesemuanya menggunakan enjin yang sama dan fail alat yang sama.

### Web (PWA) — pengedaran utama
Dihoskan pada URL yang dikawal SUSE. Berfungsi luar talian sebaik sahaja service worker telah menyimpan cache alat dan aset. Di sinilah kebanyakan pekerja, vendor, dan rakan kongsi akan menggunakan platform ini. Tiada akaun diperlukan — keadaan disimpan dalam IndexedDB mengikut peranti.

Web shell bersifat responsif daripada satu susun atur. Pada desktop, satu alat ialah bar sisi kawalan yang boleh disaiz semula di sebelah pentas pratonton dengan navigasi kanvas asli-trackpad (Cmd/Ctrl-roda atau cubit untuk zum di sekitar kursor, seret dengan Space atau butang tengah untuk pan, kekunci `0`/`1`/`+`/`−`, dan HUD Fit/%). Pada mudah alih (≤640px) kawalan bertukar menjadi helaian berlabuh di atas dengan pemegang seret yang mengintai/separuh/penuh (ketik untuk togol) di atas pratonton skrin penuh statik, dan butang **Render** terapung membuka kawalan **Export** dalam popup helaian bawah. Sentuhan mendapat cubit-zum dan seret-pan pada pratonton. Laluan render dan kawalan eksport adalah sama di kedua-dua platform — hanya chrome yang beralih susunan.

**Mod kelompok (`/pro`).** Web shell juga menghantar grid kelompok bergaya hamparan (`shells/web/src/pro/`) yang merender banyak baris sekali gus merentasi satu atau banyak alat. Ia melakukan pusingan penuh CSV/TSV serta tampal hamparan, templat/format/saiz/unit/dpi setiap baris, panel sisi editor-blok dengan pratonton langsung, lajur eksport yang boleh dilipat, bar tag "relevance" setiap baris, susun semula baris melalui pemegang-seret kiri, pengesahan padam dua langkah, sesi kelompok tersimpan, dan muat turun `.zip`. Inilah permukaan satu-ke-banyak di sebalik kedudukan "penjanaan kandungan pukal".

### Tauri desktop / mudah alih
Aplikasi asli berbungkus (jejak kecil melalui Tauri). Menyediakan ketersediaan luar talian sepenuhnya, akses sistem fail untuk alat yang bergantung pada CLI (PDF Smasher, Font Outliner), dan akses kamera. Dijadualkan untuk peningkatan perkakasan pertengahan 2026.

### CLI
`lolly <tool-id> [--input=value ...] --output=file.png`

Pengguna desktop boleh memanggil banyak alat daripada terminal. CLI shell memuatkan enjin yang sama, mencipta DOM jsdom, menjalankan laluan render yang sama, dan menulis fail. Mod URL adalah pengangkutannya — CLI bukan pelaksanaan berasingan. Ini menjamin output CLI dan GUI adalah sama persis.

```bash
lolly qr-code --url=https://suse.com --output=qr.svg
lolly quotes --quote="Ship it." --output=quote.png
lolly                        # menyenaraikan alat yang tersedia
lolly qr-code                # menyenaraikan input bagi alat tersebut
```

### TUI
`npm run tui`

Rakan sejawat interaktif kepada CLI: satu aplikasi terminal skrin-penuh yang mengutamakan papan kekunci (dibina atas Ink) untuk melayari alat, mengisi input, menyimpan projek, dan mengeksport — semuanya tanpa GUI. Jambatan hosnya **menggunakan semula pelaksanaan CLI** untuk format bebas-DOM (SVG/EMF/EPS/HTML + teks/data), dan menambah keadaan pada cakera di bawah `~/.lolly` serta pratonton sebaris pilihan-masuk. Selain itu ia mempunyai **tingkat render pelayar**: satu Chromium tanpa kepala terhad skop (sama seperti yang dipasang oleh pelayan MCP) yang menghasilkan raster/PDF/video dan capture URL langsung mengikut keperluan — menggerakkan satu salinan web shell yang telah dibina supaya outputnya sama persis, dan hanya dilancarkan apabila anda mula-mula mengeksport format sedemikian. Jadi `url-shot` (dengan potong + tukar warna + PDF/SVG vektor) dan setiap alat raster/pdf turut berjalan dalam terminal. Lihat [panduan TUI](/info/tui.html).

---

## Kategori alat

Alat ditag dengan `category` dalam manifestnya untuk pengelompokan galeri.

Baris disenaraikan mengikut susunan seksyen galeri. Seksyen `utility` sentiasa dirender **terakhir** dalam galeri (selepas setiap kategori lain, termasuk yang akan datang) — inilah laci "Offline Utilities" pada peranti.

| Kategori | Alat yang dilancarkan | Dirancang |
|---|---|---|
| `everyone` | QR Code Generator, Quote Card, Email Signature, Day Brief, Code Canvas, Color Block, Dynamic Layout, Logo, Web Icon Maker | Employee Image Stationery |
| `designer` | Brand Lockup, Bag Video, Chart Creator, Street Map, Animated Ad, Multi-Page PDF, Diagram Builder, Logo Lockup: Grid (NASCAR), Logo Lockup: Partner, Filter: Duotone, Filter: Halftone, Filter: Scanline, Filter: Posterize Bitmap, Filter: Pixel Stretch | Font Outliner |
| `event` | Meeting Planner, Event Name Badge, Wayfinding Signage, Calendar ICS | Event Stationery, Bulk Name Badges, Room Agenda Cards |
| `product` | — | CVE Alert, Product Release Announcement, Blog OG Image |
| `utility` | Countdown Timer, Color Palette, URL Screenshot, Strip Hidden Data, Text Helper, Compress PDF, Layout Studio | Unit/format converters, more on-device privacy utilities |

Alat juga diklasifikasikan mengikut status: `official` (diluluskan jenama, tiada tera air), `community` (sumbangan luaran), `experimental` (eksport bertera air). Dynamic Layout, URL Screenshot, Logo Lockup: Grid (NASCAR), Filter: Posterize Bitmap dan Diagram Builder kini membawa status `experimental`; Web Icon Maker dan Layout Studio dihantar sebagai alat `community`.

**Layout Studio** ialah alat pertama yang dibina atas mod kanvas-bebas `render.layout: "editor"` — permukaan manipulasi-langsung tanpa chrome di mana anda seret, saiz semula, putar dan lekat kotak teks, bentuk dan imej, kemudian eksport melalui laluan render yang sama seperti setiap alat lain.

**Strip Hidden Data** ialah **utiliti pada peranti** yang pertama (`privacy: "on-device"`): alat transformasi-kandungan yang mengambil fail yang *anda* bekalkan, memprosesnya sepenuhnya dalam pelayar, dan mengembalikan salinan bersih — tidak pernah dimuat naik, tidak pernah bertera air, tiada asal usul dicap. **Text Helper** ialah yang kedua — ruang kerja pada peranti untuk kerja tampal-ke-laman-web harian (format JSON, nyahkod JWT, Base64, kod/nyahkod URL, hashing SHA). **Compress PDF** ialah yang ketiga — ia mengecilkan PDF dengan memampatkan semula imejnya, sekali lagi sepenuhnya pada peranti. Ketiga-tiganya membawa teks lencana "Runs on your device — nothing is uploaded". Ini adalah permulaan kategori utiliti-privasi yang menggantikan penyerahan fail sulit kepada laman web bertujuan tunggal.

> Nota: `category` dan `status` dinyahnormal ke dalam `catalog/tools/index.json` (daftar yang dibaca oleh galeri) daripada setiap `tool.json`. Manifest adalah sumber kebenaran — indeks itu **dijana** oleh `npm run build:catalog` dan `npm run validate:catalog` akan menggagalkan CI jika indeks yang dikomit menyimpang daripada manifest.

---

## Komitmen seni bina

Keputusan ini sudah muktamad. Menukar mana-mana satu daripadanya adalah usaha besar — ia membentuk setiap keputusan lain dalam pangkalan kod.

### 1. Alat deklaratif, dengan pintu keluar imperatif

Satu alat ialah satu manifest (`tool.json`) + satu templat (`template.html`) + `hooks.js` pilihan.

**Manifest mengisytiharkan input.** Bukan templat. Input tidak disimpulkan daripada token Handlebars. Manifest adalah kontrak; templat menggunakan pemboleh ubah bernama melalui `{{id}}`.

**Hook adalah pilihan.** Kebanyakan alat adalah deklaratif tulen — manifest + templat sudah memadai. Alat yang memerlukan nilai terkira (pengekodan QR, pembentukan data carta) menyediakan `hooks.js` yang mendedahkan fungsi kitaran hayat bernama (`onInit`, `onInput`, `onFrame` — hook kamera-langsung setiap bingkai untuk alat responsif-gerakan — `beforeRender`, `beforeExport`, `afterExport`, dan `exportFile` — laluan transformasi fail-masuk/fail-keluar yang digunakan oleh utiliti pada peranti seperti Strip Hidden Data). Hos memuatkan hook melalui `new Function('host', …)` dengan jambatan keupayaan disuntik sebagai skop closure. Ini adalah **kontrak kebolehalihan, bukan sandbox keselamatan**: hook masih berjalan dalam realm halaman dan *boleh* mencapai `window`/`fetch`/`document` dalam shell pelayar — `host.*` adalah permukaan yang disokong dan boleh alih, bukan sempadan yang dikuatkuasakan. Keputusan hook tak segerak (async) dihadkan had masa (onInit 5s, onInput 2s, selebihnya 5s) dan keputusan lewat dibuang; hook *segerak* yang melarikan diri tidak boleh dihentikan paksa. Oleh itu kod hook pihak ketiga yang tidak dipercayai belum selamat dijalankan sehingga pengasingan Worker dihantar.

Ini penting kerana: alat deklaratif boleh dicipta oleh bukan-pembangun. Jika setiap alat adalah aplikasi web, nota risiko "kemahiran terhad untuk mencipta/menyelenggara templat teras" menjadi kesesakan kekal.

### 2. Alat dan aset adalah data, bukan kod terbungkus

Aplikasi web dan Tauri mengambil katalog alat dan aset daripada URL yang diketahui semasa but, menyimpannya sebagai cache secara setempat, dan beroperasi atas apa sahaja yang ada di situ. **Menambah jubin acara baharu atau aset bermusim tidak memerlukan pelepasan aplikasi.**

Bait aset diberi checksum SHA-256 untuk mencegah pencemaran CDN. `id` + `version` aset menggerakkan pembatalan cache.

### 3. Jambatan Keupayaan adalah satu-satunya API yang dilihat oleh alat

Alat tidak pernah menyentuh DOM di luar kawasan templatnya, tidak pernah memanggil `fetch` secara terus, tidak pernah membaca sistem fail. Ia memanggil kaedah `host.*` yang berversi. Jambatan ini ditakrifkan dalam `engine/src/bridge/host-v1.ts`:

| API Jambatan | Apa fungsinya |
|---|---|
| `host.profile` | Nama pertama, e-mel, gambar kepala, bandar pengguna, dll. Pra-isi input melalui `bindToProfile`. |
| `host.assets` | Pertanyaan katalog, resolusi aset, UI pemilih yang disediakan oleh hos. |
| `host.state` | Simpan / muat slot input. IndexedDB pada web, sistem fail pada Tauri, memori pada CLI. |
| `host.clipboard` | Tulis teks atau imej ke papan keratan (dengan alternatif platform). |
| `host.export` | Jadikan raster atau siri sasaran render. Mengenakan tera air untuk alat eksperimen. |
| `host.net` | Fetch yang disenarai-benar — hanya tersedia jika alat mengisytiharkan keupayaan `"network"`. (Tiada alat yang telah dilancarkan kini menggunakannya.) |

Permukaan pilihan dan tambahan hanya muncul apabila shell menyediakannya. Dua daripadanya **berpagar-keupayaan** — didedahkan hanya apabila alat mengisytiharkan bendera yang sepadan: `host.compose` (benamkan render alat lain — `compose`) dan `host.capture` (capture halaman untuk URL Screenshot — `capture`). Selebihnya **dikesan-ciri** — hadir apabila shell mampu menyediakannya: `host.text` (teks-ke-laluan melalui HarfBuzz WASM; keupayaan `wasm` menandakan alat yang bergantung padanya), `host.pdf` (penghuraian/pemampatan PDF, digunakan oleh Strip Hidden Data dan Compress PDF), dan `host.tokens` (token reka bentuk DTCG). Keupayaan yang boleh diisytiharkan ialah: `network`, `filesystem`, `clipboard`, `camera`, `ffmpeg`, `wasm`, `capture`, `compose`.

Alat yang sama berjalan dalam pelayar, Tauri, dan CLI tanpa kepala kerana setiap shell melaksanakan antara muka ini — alat itu tidak pernah tahu ia berada dalam yang mana.

Jambatan ini berversi. Menambah kaedah adalah versi minor. Membuang atau menukar tandatangan adalah lonjakan versi major. Apabila v2 dilancarkan, v1 mesti terus berfungsi.

### 4. ID aset adalah kekal

`suse/logo/primary` adalah satu kontrak. Setelah diterbitkan:
- ID itu tidak pernah berubah, tidak pernah digunakan semula.
- Perubahan bait → naikkan `version` dalam manifest.
- Digantikan oleh aset baharu → tetapkan `deprecated: true` dan secara pilihan `replacedBy`.
- Rujukan sedia ada sentiasa dapat diselesaikan.

Ini menjadikan keadaan alat tersimpan dan pautan kongsi-URL tahan lama merentasi bertahun-tahun.

### 5. Mod URL bertaraf kelas pertama

Setiap input mesti boleh dinyatakan sebagai parameter URL:

```
lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H
```

Mod CLI adalah mod URL di bawah pengangkutan yang berbeza — CLI shell membina objek keadaan-URL daripada argv dan menjalankan saluran paip enjin yang **sama**. Terdapat satu laluan render sahaja. CLI tidak boleh menyimpang daripada GUI kerana ia bukan pelaksanaan berasingan.

`url-mode.ts` mengendalikan pusingan penuh (menghurai dan siri). Parameter dikhaskan (tidak pernah diteruskan kepada alat sebagai input): `format`, `export`, `copy`, `slot`, `output`, `filename`, `_v`, `z` (keadaan padat — token "Shortest link"), `width`/`w`, `height`/`h`, `unit`, `dpi`, `profile`, `password`, `bleed`, `marks`, `full`, `options`, `nostage`. Input aset dalam mod URL disiri melalui `id`-nya; runtime menyelesaikannya melalui `host.assets.get()` sebelum hydration. `width`/`height` adalah nilai dalam `unit` (lalai `px`, juga `mm`/`cm`/`in`/`pt`/`pc`); dengan unit fizikal, `dpi` menetapkan resolusi raster. Ia menetapkan saiz dokumen kanvas dan pra-isi panel dimensi eksport.

### 6. Storan melalui jambatan, bukan terus

Web shell: IndexedDB. Tauri: sistem fail. CLI: dalam-memori. Alat hanya melihat `host.state.save(slot, data)` dan `host.state.load(slot)`. `localStorage` tidak digunakan — ia terlalu kecil dan tidak boleh menyimpan blob.

Pengguna boleh menyimpan pelbagai slot suntingan bernama bagi setiap alat dan kembali ke setiap sesi kemudian. Tiada penciptaan akaun diperlukan; keadaan adalah mengikut peranti. Oleh sebab jambatan adalah satu-satunya sempadan sentuhan, keadaan mengikut-peranti itu juga *boleh alih*: `shells/web/src/data-transfer.ts` membaca semula segala-galanya melalui `host.profile`/`host.state`/`host.assets` ke dalam satu zip `lolly-backup` tunggal yang boleh diimport pada mana-mana pemasangan lain — jawapan luar talian kepada "berpindah ke peranti baharu" yang tidak memerlukan pelayan (spesifikasi penuh: `docs/data-transfer.md`). Integrasi SUSE ID (penyegerakan berbilang peranti) adalah pencapaian masa depan di atas asas ini.

### 7. Tag kematangan menjawab risiko "diluluskan jenama" secara struktural

Setiap alat mengisytiharkan `status: official | community | experimental` dalam manifestnya. Galeri disusun mengikut status. Alat eksperimen menera air eksportnya secara automatik — tera air itu dikenakan oleh `host.export.render`, bukan oleh alat itu sendiri, jadi ia tidak boleh ditolak-keluar oleh pencipta alat bukan-rasmi.

Ini adalah jawapan struktural kepada risiko persepsi bahawa menggunakan mana-mana alat membayangkan kelulusan jenama. Jawapan proses (giliran semakan, sekatan SUSE ID) berlapis di atasnya.

### 8. Input alat ditaip melalui manifest, termasuk aset

Input mengisytiharkan `type`: `text`, `longtext`, `number`, `boolean`, `color`, `select`, `asset`, `date`, `time`, `datetime-local`, `url`, `profile`, `blocks`, `vector`, dan `file`. Hos merender kawalan generik bagi setiap jenis daripada manifest — alat menulis sifar kod kawalan. Tiga daripadanya membawa lebih berat berbanding yang lain:

- **`asset`** (dengan `filter` dan `allowUpload`) adalah jambatan kepada sistem aset global; `allowUpload: false` adalah tuas kebolehkuatkuasaan-jenama untuk perkara seperti logo jubin penajaan di mana hanya aset pustaka dibenarkan. Muat naik pengguna menggunakan bentuk `AssetRef` yang sama seperti aset pustaka, jadi alat mengendalikannya secara sama.
- **`blocks`** adalah kumpulan medan berulang — jadual mini di dalam satu input, disunting dalam panel sisi, dengan menu tambah bertaip/dibezakan dan medan aset setiap blok. Mengklik blok yang dirender pada kanvas memfokuskan baris blok tersebut. Digunakan oleh `meeting-planner`, `chart-creator`, `event-name-badge`, `wayfinding-signage`, `color-block`, dan `digi-ad`.
- **`vector`** mengumpulkan satu set nombor tetap (contohnya satu transform) ke dalam satu kawalan majmuk; **`file`** menyimpan fail pengguna sendiri sebagai bait dalam memori untuk utiliti transformasi pada peranti (contohnya `strip-data` dan `compress-pdf`).

### 9. Templat tiada logik (Handlebars, bukan EJS)

Handlebars dipilih berbanding EJS secara sengaja:
- Tiada logik. Templat boleh dicipta oleh bukan-pembangun.
- Selamat secara lalai. `{{x}}` meng-escape HTML; `{{{x}}}` adalah mentah pilihan-masuk.
- Tiada JS sewenang-wenangnya dalam templat bermakna tiada permukaan audit XSS bagi setiap templat.

Logik terletak dalam `hooks.js` di mana ia jelas dan boleh disemak. Helper Handlebars yang tersedia: `{{default}}`, `{{upper}}`, `{{lower}}`, `{{eq}}`, `{{markdown}}`, `{{asset ref}}`, `{{asset ref "property"}}` (ditambah helper format-data `icsStamp`/`rfcText`/`csvCell` yang digunakan oleh templat berkembar `.ics`/`.vcf`/`.csv`).

### 10. Alat menggabungkan alat

Satu alat boleh membenamkan render alat **lain** tanpa sebarang import alat-ke-alat — komposisi diselesaikan oleh enjin, tidak pernah oleh kod alat. Terdapat dua permukaan:

- **Manifest deklaratif** — `composes: [{ id, tool, inputs, format?, width?, height? }]`. Enjin merender anak yang dinamakan dan meletakkan hasilnya dalam templat tiada-logik sebagai `{{asset <id>}}`. `event-name-badge` menggabungkan `qr-code` sebagai SVG pada masa ini.
- **URL benam mudah alih** — `<img src="https://lolly.tools/tool/<id>.<ext>?<inputs>">`. Shell merender anak itu **secara setempat** (satu piksel pemegang tempat dipaparkan sehingga render setempat selesai); tiada apa-apa yang pernah diambil daripada `lolly.tools`.

Gabungkan render mana-mana alat: anak **SVG** kekal sebagai vektor sebenar apabila induk mengeksport ke SVG atau PDF dan merender-raster dengan tajam untuk PNG; anak **PNG/JPG/WEBP** dibenamkan sebagai imej. Memerlukan keupayaan `compose`. Anak yang digabungkan adalah perantaraan — tidak pernah bertera air atau dicap asal usul — dan komposisi merosot secara anggun: shell yang tidak dapat merender satu anak hanya mengabaikan slot itu dan induk tetap dirender.

---

## Apa yang kami sengaja pilih untuk tidak lakukan

- **Tiada EJS / tiada JS sewenang-wenangnya dalam templat.** Permukaan XSS adalah sifar. Logik terletak dalam `hooks.js`.
- **Tiada CMS aset.** Katalog aset adalah git. Kemas kini melalui semakan PR. Tiada UI muat naik, tiada auth, tiada giliran moderasi. Semakan git _itulah_ moderasinya.
- **Tiada RBAC dalam MVP.** Akses awam. Risiko jenama diuruskan melalui tag kematangan + tera air + hakikat struktural bahawa semua aset yang dilihat pengguna telah melalui semakan PR.
- **Tiada pangkalan data berpusat.** Semua keadaan pengguna adalah mengikut peranti. Integrasi SUSE ID berada dalam hala tuju tetapi bukan penghalang pelancaran.
- **Tiada laluan kod alat/enjin yang dikongsi.** Enjin adalah sumber terbuka; `tools/` dan `assets/` kekal sebagai kandungan proprietari SUSE dalam repositori masing-masing. Pemisahan ini dikuatkuasakan (tiada import silang) supaya pembahagian ini kekal bersih.

---

## Kitaran hayat, hujung ke hujung

Seorang pengguna membuka `lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H`:

1. **Boot.** Web shell membuka IndexedDB, membina jambatan keupayaan, menyegerakkan katalog alat dan aset (atau memuatkan daripada cache apabila luar talian).
2. **Route.** Hash URL → paparan `tool`, dengan `qr-code` dan parameter URL diekstrak.
3. **Load.** `loadTool('qr-code', fetchFile)` mengambil `tool.json`, mengesahkannya terhadap JSON Schema, mengambil sumber `template.html`, `styles.css`, dan `hooks.js`.
4. **Parse URL state.** `parseUrlState` menterjemah parameter URL kepada nilai input awal. Rujukan aset (`?logo=suse/logo/primary`) dihurai sebagai objek `{ id, _unresolved: true }` yang ringan.
5. **Runtime.** `createRuntime(tool, host, initialValues)` membina model input (menggabungkan data profil, nilai lalai, dan nilai awal), menyelesaikan rujukan aset melalui `host.assets.get()`, memuatkan hook (`host` berskop-closure, tidak di-sandbox), memanggil `hooks.onInit`.
6. **Render.** Shell melanggan runtime; pada setiap perubahan keadaan ia menerima `{ model, hydrated }`. Ia merender kawalan input daripada model dan menulis HTML templat yang telah dihydrate ke dalam `#tool-canvas`.
7. **Interact.** Pengguna menaip dalam satu input → `runtime.setInput(id, value)` → kekangan dikenakan → `hooks.onInput` dipanggil → hydrate semula → render semula. Kanvas dikemas kini secara langsung.
8. **Export.** Pengguna mengklik Download(PNG) → `runtime.export(canvasNode, 'png')` → `host.export.render` (merender-raster melalui dom-to-image-more; SVG/PDF melalui vectoriser khusus yang berjalan-DOM) → blob → `host.export.download`. Julat format yang boleh dipilih-masuk oleh sesuatu alat adalah luas: `svg`, `png`, `jpg`/`jpeg`, `webp`, `avif`, `pdf`, format vektor `emf`, `eps`, ditambah format cetak/CMYK `pdf-cmyk`, `cmyk-tiff`, `eps-cmyk`; format video `webm`, `mp4`, `gif`; dan format data/teks `html`, `md`, `txt`, `json`, `csv`, `ics`, `vcf`, `ico`, `zip`. (Alat yang menetapkan `render.export: false` — contohnya Color Palette, Countdown Timer, Strip Hidden Data, Text Helper, Compress PDF — menyembunyikan kawalan muat turun/format/dimensi.) Unit fizikal ditukar mengikut format di sini (PDF → titik halaman sebenar, raster → piksel pada DPI dengan chunk `pHYs`). Metadata pengarangan/asal usul (pengarang, alat, sumber — dibina oleh `engine/src/metadata.ts`) dibenamkan mengikut format: PNG iTXt, JPEG EXIF, kamus info PDF, SVG `<metadata>`, komen GIF. Alat eksperimen mendapat tera air yang disisipkan oleh hos, bukan oleh alat itu.

Kitaran hayat yang sama dalam Tauri. Kitaran hayat yang sama dalam CLI — jsdom menyediakan DOM tanpa kepala; output pergi ke fail atau stdout.

---

## Status sumber terbuka

Direktori `engine/`, `shells/`, `schemas/`, dan `docs/` adalah sumber terbuka di bawah **MPL-2.0** — platform perancah neutral-vendor untuk perkakasan jenama, dengan setiap unit yang boleh dihantar dipisahkan ke dalam repositorinya sendiri di bawah [github.com/lolly-tools](https://github.com/lolly-tools). `tools/` dan `catalog/assets/` adalah kandungan khusus-SUSE dan kekal **hak milik eksklusif SUSE** (semua hak terpelihara — lihat `NOTICE.md` setiap repo); ia tidak dilindungi oleh MPL.

Pembahagian ini dikuatkuasakan — tiada import silang daripada `engine/` ke `tools/` atau `assets/` — supaya sempadan platform/kandungan kekal bersih.

---

## Hala Tuju

| Pencapaian | Sasaran | Apa |
|---|---|---|
| **Alat permulaan** | ✅ Selesai | QR Code, Quote Card, Email Signature, Day Brief, Code Canvas, Countdown Timer, Color Palette, Brand Lockup, Bag Video, Chart Creator, Filter: Duotone, Meeting Planner — web shell aktif |
| **Tingkatkan perkakasan semasa** | Pertengahan 2026 ✅ Selesai  | Aplikasi luar talian boleh muat turun (Tauri); alat pekerja dan acara tambahan; saluran paip eksport yang lebih kaya (kestabilan teks-ke-laluan, metadata, format tambahan — lihat `plans.md`) |
| **Jadikan enjin sumber terbuka** | Akhir 2026 ✅ Selesai  | Enjin, shell, schema, dokumentasi menjadi awam — bukan alat/aset berjenama |
| **Pemindahan peranti-ke-peranti** | ✅ Selesai | Bungkusan `lolly-backup` mudah alih membawa profil, sesi tersimpan, imej dimuat naik dan keutamaan antara mana-mana dua pemasangan — luar talian atau dalam talian, tiada akaun. Sampul serasi-hadapan yang disemak integriti (spesifikasi: `docs/data-transfer.md`) |
| **Wujudkan hala tuju alat formal** | Akhir 2026 | Kit rujukan pelanggan, ingest reka bentuk AI, mod permintaan GET/URL |
| **Utiliti privasi pada peranti** | 🚧 Sedang berjalan | Alat transformasi-kandungan yang memproses fail *anda sendiri* secara setempat (fail masuk → fail bersih keluar), menggantikan eksfiltrasi ke SaaS bertujuan tunggal. **Selesai:** jenis input `file` + laluan transformasi `exportFile` + konvensyen `privacy:"on-device"` (tiada tera air/asal usul) + **Strip Hidden Data** (metadata JPEG/PNG/SVG/PDF, PDF melalui jambatan `host.pdf`) dan **Text Helper** (ruang kerja pada peranti untuk kerja tampal-ke-laman-web harian — format JSON, nyahkod JWT, Base64, kod/nyahkod URL, hashing SHA, ditambah kumpulan Novelty). **Seterusnya:** potong/saiz semula, tukar/mampat imej; kemudian jambatan kodek `host.image` (spesifikasi: `plans/exfiltration-app-content.md`) |
| **Token reka bentuk (DTCG)** | 🚧 Warna telah dilancarkan | Primitif jenama sebagai [W3C Design Tokens (DTCG)](https://www.designtokens.org/TR/drafts/format/) kanonik — format yang [diimport/dieksport oleh Penpot](https://help.penpot.app/user-guide/design-systems/design-tokens/). **Selesai:** token warna (`suse/tokens/brand`), jambatan `host.tokens`, swatch pemilih + nilai berpaut-rujukan (spesifikasi: `docs/design-tokens.md`). **Seterusnya:** token dimensi/jenis taip, import/eksport Penpot, token pengguna dalam bungkusan pemindahan (`tokens.json`) |
| **Endpoint ejen MCP (render)** | ✅ Selesai | Satu pelayan [MCP](https://modelcontextprotocol.io) mendedahkan katalog + laluan render sebagai alat boleh panggil (`lolly_list_tools` / `describe_tool` / `build_url` / `render` / `transform`) supaya mana-mana ejen boleh menghasilkan aset siap dan terikat-peraturan — tambahkannya pada mana-mana klien MCP sebagai penyambung tersuai (OAuth 2.1) atau arahkan klien CLI/HTTP kepadanya dengan token bearer. Aktif di `mcp.lolly.tools` (endpoint penuh: raster/PDF/animasi/video melalui pelayar tanpa kepala yang dihoskan) dan `lolly.tools/api/mcp` (tingkat tanpa-pelayan tanpa-pelayar). Berbeza daripada MCP *penciptaan* Penpot di bawah, yang berkaitan **penciptaan** alat (spesifikasi: `plans/mcp-server.md`; panduan: `docs/mcp.md` + `docs/ai-agents.md`) |
| **Ingest fail Penpot sebagai alat** | 2027+ | Import satu fail Penpot dan paparkannya *sebagai alat Lolly* (deklaratif, kekangan-dahulu), menukar reka bentuk yang dicipta dalam Penpot menjadi penjana deterministik |
| **Sambungan MCP + Penpot (penciptaan dalam-talian sahaja)** | 2027+ | Satu pelayan MCP Penpot merangka alat baharu bersama AI — cara paling visual untuk mencipta templat deterministik: pusingan pertama yang dimaklum-jenama, disempurnakan dengan manusia dalam gelung, menyasarkan konteks baharu sekali-jadi dari semasa ke semasa. *Penciptaan* alat adalah dalam-talian sahaja; alat yang dihasilkannya berjalan di mana-mana sahaja |
| **RBAC + SUSE ID** | 2027+ | Sekat alat tertentu di sebalik SUSE ID; keadaan tersimpan berbilang peranti; ingest/eksport Google Drive |

---

## Di mana enjin berakhir dan hos bermula

Jika ia boleh diterangkan dalam data tulen + Handlebars → **enjin**.
Jika ia menyentuh DOM, sistem fail, rangkaian, atau mana-mana API pelayar/OS → **hos**.

Garis ini tajam dengan sengaja. Enjin adalah bahagian sumber terbuka. Segala yang mengetahui tentang SUSE, platform tertentu, atau persekitaran runtime kekal di luarnya.
