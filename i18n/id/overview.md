# Ringkasan

![Lolly Icon - Large green and white lollipop candy](https://lolly.tools/info/icon.avif)

Dokumen ini merangkum tujuan, struktur, dan keputusan arsitektur untuk platform Lolly. Dokumen ini mencerminkan visi produk sekaligus keadaan basis kode saat ini.

> **Status:** Lolly adalah prototipe internal dalam **pilot tertutup yang belum selesai**. Engine bersifat deterministik dan konsisten secara internal, tetapi produknya masih dini — SUSE adalah pelanggan nomor satu — dan engine kriptografi serta pengurai berkasnya saat ini sedang menjalani pengetatan infrastruktur ketat dari SUSE, mempersiapkan skala enterprise (kami sangat andal dalam hal ini). Bacalah arsitektur di bawah sebagai maksud desain yang sedang diuji, bukan produk jadi yang tersertifikasi. Lihat [Adopsi & Tata Kelola](/info/adoption-governance.html#status) untuk memahami bagaimana pilot ini dijalankan dan diukur.

---

## Mengapa ini ada

Tim menghadapi masalah yang berulang: pekerjaan kreatif dan konten berulang yang terlalu dapat diprediksi untuk membenarkan tenaga ahli setiap kali, tetapi terlalu sensitif terhadap kualitas untuk diserahkan tanpa pengaman. Hasilnya adalah salah satu dari: throughput lambat (kemacetan spesialis), inkonsistensi (orang memakai alat apa pun yang mereka punya), atau ketergantungan vendor (DAM SaaS yang mengendalikan template Anda).

Platform ini adalah jawaban strukturalnya:

> **Kreatif dan konten programatik dalam skala besar** — pembuatan aset tanpa tenaga kerja, dengan aturan di bawah kendali terpusat, untuk karyawan, vendor, dan mitra.

Hasilnya adalah **kelimpahan**: setiap acara punya papan penanda yang benar, setiap peringatan CVE sesuai gaya rumahan, setiap label tercetak bersih, setiap tanda tangan email selalu mutakhir — semuanya tanpa tiket desain. Platform ini menangani kreatif operasional yang berulang. Ini sengaja bukan alat kreatif kustom — desainer tetap memegang karya unggulan.

### Posisinya dalam lanskap

| Kapabilitas | Canva | Portal brand | Illustrator | Figma / Penpot | **Lolly** |
|---|---|---|---|---|---|
| Pembuatan konten massal | sebagian | ✗ | ✗ | ✗ | **✓** |
| Bekerja sepenuhnya offline | ✗ | ✗ | ✓ | sebagian | **✓** |
| Logika template & batasan tegas | ✗ | sebagian | ✗ | sebagian | **✓** |
| Tak perlu keahlian desain | sebagian | ✓ | ✗ | ✗ | **✓** |
| Content Credentials otomatis | ✗ | ✗ | sebagian | ✗ | **✓** |
| Alat menyusun alat lain | ✗ | ✗ | ✗ | ✗ | **✓** |
| Engine terbuka, tak terkunci SaaS | ✗ | ✗ | ✗ | sebagian | **✓** |
| Content credentials C2PA | ✗ | ✗ | ✗ | ✗ | **✓** |
| Provenans tingkat forensik opsional | ✗ | ✗ | ✗ | ✗ | **✓** |
| Aplikasi Seluler dan Desktop | ✓ | ✗ | ✗ | sebagian | **✓** |
| Command Line & TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

Kesenjangannya jelas: tak ada di lanskap yang ada memberi kita keluaran yang mengutamakan batasan, mampu offline, minim keahlian, dan dapat diakses internal. Lolly bahkan menyertakan kanvas terbuka — **Layout Studio** — tempat warna, tipe, dan aset menyesuaikan diri dengan global brand, sehingga penataan bebas tetap mengutamakan batasan. Yang ia **bukan** adalah suite desain tanpa batasan: desainer tetap memakai Illustrator dan Figma untuk karya unggulan kustom. Permutasi dapat dirakit dengan alat ini.

**Gunakan untuk:** Pembuatan cepat aset kreatif operasional — kartu acara, tanda pengenal nama, tanda tangan, peringatan CVE, kode QR, kartu sosial, label konsinyasi, laporan terstruktur.

**Jangan gunakan untuk:** Konten unggulan yang kustom.

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

### Tata letak repositori

```
lolly/
├── engine/           # Platform-agnostic core. Open source (MPL-2.0).
│   └── src/
│       ├── index.ts          # public surface — loader, runtime, template, inputs, url-mode
│       ├── loader.ts         # fetches and validates tool files
│       ├── runtime.ts        # orchestrates the 5-step lifecycle
│       ├── template.ts       # Handlebars hydration + annotateTemplate
│       ├── inputs.ts         # manifest → runtime input model
│       ├── url-mode.ts       # URL ↔ input state round-trip
│       ├── validate.ts       # JSON Schema validation of manifests
│       ├── compose.ts        # resolve nested tool renders (composes)
│       ├── embed.ts          # parse portable lolly.tools embed URLs
│       └── bridge/
│           └── host-v1.ts    # TypeScript interface — the bridge contract
│
├── shells/
│   ├── web/          # PWA — hosted online; primary distribution
│   │   └── src/
│   │       ├── main.ts           # boot, routing
│   │       ├── theme.ts          # theme apply/persist (FOUC prevention)
│   │       ├── bridge/           # web implementations of HostV1 APIs
│   │       │   ├── index.ts      # compose all bridge pieces
│   │       │   ├── db.ts         # IndexedDB setup
│   │       │   ├── state.ts      # host.state — saved edits
│   │       │   ├── profile.ts    # host.profile — user details
│   │       │   ├── assets.ts     # host.assets — catalog + user uploads
│   │       │   ├── clipboard.ts  # host.clipboard
│   │       │   ├── export.ts     # host.export — rasterise/serialize
│   │       │   ├── net.ts        # host.net — allowlisted fetch
│   │       │   └── media.ts      # host.media — live camera frames (onFrame)
│   │       ├── catalog/
│   │       │   └── sync.ts       # boot-time catalog sync + offline cache
│   │       ├── styles/           # app-wide CSS (app.css, picker.css, tokens.css)
│   │       └── views/
│   │           ├── gallery.ts    # tool library listing + saved-state cards
│   │           ├── tool.ts       # mounts one tool (inputs + canvas + actions)
│   │           ├── picker.ts     # asset picker UI (invoked by host.assets)
│   │           ├── profile.ts    # user details editor
│   │           ├── projects.ts   # /p — folders of saved sessions (nested; folder/selection export)
│   │           └── free-canvas.ts # free-canvas editor overlay for render.layout:"editor" tools
│   │
│   ├── cli/          # Node.js CLI — same engine, headless jsdom
│   │   ├── bin/lolly.ts
│   │   └── src/
│   │       ├── run.ts    # loadTool → createRuntime → export → write file
│   │       └── bridge.ts # CLI implementation of HostV1
│   │
│   ├── tui/          # Interactive terminal shell (Ink) — reuses the CLI bridge
│   │   └── src/
│   │       ├── main.tsx  # full-screen app: Gallery / Projects / Profile / ToolView
│   │       └── bridge.ts # CLI bridge + on-disk state under ~/.lolly
│   │
│   ├── tauri-desktop/ # downloadable desktop app
│   └── tauri-mobile/  # iOS/Android app
│
├── tools/            # profile VIEW (gitignored) — data, not code. Merged from packs:
│                     #   community/ (public, brand-agnostic, MPL) + brands/<active>/tools (brand-owned).
│   ├── qr-code/
│   ├── quotes/
│   ├── email-signature/
│   ├── daily-card/        # "Day Brief" — weather/time/map (fetched by an inline template script)
│   ├── code-canvas/
│   ├── countdown-timer/
│   ├── color-palette/
│   ├── color-block/           # typed/heterogeneous blocks (addMenu discriminator)
│   ├── dynamic-layout/
│   ├── tool-logo/         # "Logo" — auto-switching brand logo
│   ├── street-map/        # offline vector city-block maps
│   ├── url-shot/          # "URL Screenshot" (capture capability)
│   ├── strip-data/        # on-device metadata strip — JPEG/PNG/SVG/PDF (file in → clean file out)
│   ├── compress-pdf/      # on-device PDF compressor — recompresses images (file in → smaller file out)
│   ├── brand-lockup/      # "Brand Lockup" — SUSE logo lockups; HarfBuzz text-to-path (wasm)
│   ├── bag-video/
│   ├── chart-creator/     # SVG charts from structured data
│   ├── filter-duotone/    # two-color photo treatment
│   ├── filter-halftone/   # photo → vector halftone dot grid
│   ├── filter-scanline/   # photo → retro posterised scanline grid (SVG / transparent raster)
│   ├── meeting-planner/   # global timezone meeting scheduler
│   ├── calendar-ics/      # event → .ics calendar file plus a card
│   ├── digi-ad/           # "Animated Ad" — looping banner from scenes
│   ├── event-name-badge/  # conference badges — composes qr-code as an SVG
│   ├── wayfinding-signage/ # event signage; directions blocks auto-fit label text
│   ├── text-helper/       # on-device text workbench (format/decode/hash/de-identify)
│   ├── layout-studio/     # "Layout Studio" — freeform WYSIWYG editor canvas (render.layout: editor)
│   ├── multi-page-pdf/    # multi-page PDF document — cover, flowing content blocks, back page
│   ├── diagram-builder/   # org / layercake / process / cycle / pyramid diagrams
│   ├── logo-wall/         # many logos → auto-packed grid
│   ├── logo-lockup-partner/ # SUSE + partner co-brand lockup
│   ├── web-icon/          # favicon .ico / png / svg from text + colours
│   ├── filter-posterize/  # photo → flat posterised vector separations
│   ├── filter-pixel-stretch/ # photo → pixel-smear effect
│   ├── lottie-digi-ad/    # animated Lottie ad banners
│   └── pose-geeko/        # pose the SUSE Geeko mascot — print-ready stills
│
├── catalog/
│   ├── tools/index.json        # tool registry
│   └── assets/
│       ├── index.json          # asset registry
│       └── suse/...            # logo, palette, etc.
│
├── schemas/          # JSON Schema for tool.json, asset entries, AssetRef
├── scripts/          # build-catalog-index.ts, checksum-assets.ts, validate-catalog.ts
├── tests/            # engine tests
└── docs/             # this file + authoring guides + positioning
```

---

## Model penyampaian platform

Platform berjalan di beberapa permukaan — web PWA, Tauri desktop/seluler, CLI yang dapat diskripkan, dan TUI interaktif. Semuanya memakai engine yang sama dan berkas alat yang sama.

### Web (PWA) — distribusi utama
Dihosting di URL yang dikendalikan SUSE. Bekerja offline setelah service worker menyimpan cache alat dan aset. Di sinilah sebagian besar karyawan, vendor, dan mitra akan memakai platform. Tak perlu akun — status disimpan di IndexedDB per perangkat.

Shell web bersifat responsif dari satu tata letak. Di desktop, sebuah alat adalah sidebar kontrol yang dapat diubah ukurannya di samping panggung pratinjau dengan navigasi kanvas native-trackpad (Cmd/Ctrl-roda atau cubit untuk zoom mengarah ke kursor, Spasi- atau seret-tengah untuk geser, tombol `0`/`1`/`+`/`−`, dan HUD Fit/%). Di seluler (≤640px) kontrol menjadi lembar berlabuh-atas dengan pegangan seret yang mengunci intip/setengah/penuh (ketuk untuk beralih) di atas pratinjau layar-penuh statis, dan tombol **Render** mengambang membuka kontrol **Ekspor** dalam popup lembar-bawah. Sentuhan mendapat zoom-cubit dan geser-seret pada pratinjau. Jalur render dan kontrol ekspor identik di keduanya — hanya chrome yang mengalir ulang.

**Mode batch (`/pro`).** Shell web juga menyertakan grid batch bergaya spreadsheet (`shells/web/src/pro/`) yang merender banyak baris sekaligus di satu atau banyak alat. Ia melakukan bolak-balik CSV/TSV plus tempel spreadsheet, template/format/ukuran/unit/dpi per baris, panel samping editor-blok dengan pratinjau langsung, kolom ekspor yang dapat diciutkan, bilah tag "relevansi" per baris, penataan-ulang baris dengan pegangan-seret kiri, konfirmasi hapus dua langkah, sesi batch tersimpan, dan unduhan `.zip`. Inilah permukaan satu-ke-banyak di balik pemosisian "pembuatan konten massal".

### Tauri desktop / seluler
Aplikasi native terpaket (jejak kecil via Tauri). Menyediakan ketersediaan offline penuh, akses berkas untuk alat yang bergantung pada CLI (PDF Smasher, Font Outliner), dan akses kamera. Dijadwalkan untuk peningkatan perkakas pertengahan-2026.

### CLI
`lolly <tool-id> [--input=value ...] --output=file.png`

Pengguna desktop dapat menjalankan banyak alat dari terminal. Shell CLI memuat engine yang sama, membuat DOM jsdom, menjalankan jalur render yang sama, dan menulis berkasnya. Mode URL adalah transportnya — CLI bukan implementasi terpisah. Ini menjamin keluaran CLI dan GUI identik.

```bash
lolly qr-code --url=https://suse.com --output=qr.svg
lolly quotes --quote="Ship it." --output=quote.png
lolly                        # lists available tools
lolly qr-code                # lists inputs for that tool
```

### TUI
`npm run tui`

Padanan interaktif dari CLI: aplikasi terminal layar-penuh yang mengutamakan keyboard (dibangun di atas Ink) untuk menjelajahi alat, mengisi input, menyimpan proyek, dan mengekspor — semuanya tanpa GUI. Host bridge-nya **memakai ulang implementasi CLI** untuk format bebas-DOM (SVG/EMF/EPS/HTML + teks/data), dan menambahkan status pada-disk di bawah `~/.lolly` plus pratinjau inline opsional. Selain itu, ia punya **tingkat render browser**: Chromium headless bercakupan (yang sama yang dipasang server MCP) yang menghasilkan raster/PDF/video dan tangkapan URL-langsung sesuai permintaan — menggerakkan salinan terbangun dari shell web sehingga keluarannya identik, dan meluncur hanya saat Anda pertama kali mengekspor format semacam itu. Jadi `url-shot` (dengan pangkas + rewarna + PDF/SVG vektor) dan setiap alat raster/pdf juga berjalan di terminal. Lihat [panduan TUI](/info/tui.html).

---

## Kategori alat

Alat ditandai dengan `category` di manifesnya untuk pengelompokan galeri.

Baris terdaftar dalam urutan bagian galeri. Bagian `utility` selalu dirender **terakhir** di galeri (setelah setiap kategori lain, termasuk yang akan datang) — inilah laci "Utilitas Offline" pada-perangkat.

| Kategori | Alat yang dirilis | Direncanakan |
|---|---|---|
| `everyone` | Generator Kode QR, Kartu Kutipan, Tanda Tangan Email, Day Brief, Code Canvas, Color Block, Dynamic Layout, Logo, Web Icon Maker | Alat Tulis Gambar Karyawan |
| `designer` | Brand Lockup, Bag Video, Chart Creator, Street Map, Animated Ad, Multi-Page PDF, Diagram Builder, Logo Lockup: Grid (NASCAR), Logo Lockup: Partner, Filter: Duotone, Filter: Halftone, Filter: Scanline, Filter: Posterize Bitmap, Filter: Pixel Stretch | Font Outliner |
| `event` | Meeting Planner, Event Name Badge, Wayfinding Signage, Calendar ICS | Alat Tulis Acara, Tanda Pengenal Nama Massal, Kartu Agenda Ruang |
| `product` | — | Peringatan CVE, Pengumuman Rilis Produk, Gambar OG Blog |
| `utility` | Countdown Timer, Color Palette, URL Screenshot, Strip Hidden Data, Text Helper, Compress PDF, Layout Studio | Konverter unit/format, lebih banyak utilitas privasi pada-perangkat |

Alat juga diklasifikasikan berdasarkan status: `official` (disetujui brand, tanpa watermark), `community` (kontribusi eksternal), `experimental` (ekspor ber-watermark). Dynamic Layout, URL Screenshot, Logo Lockup: Grid (NASCAR), Filter: Posterize Bitmap, dan Diagram Builder saat ini menyandang status `experimental`; Web Icon Maker dan Layout Studio dirilis sebagai alat `community`.

**Layout Studio** adalah alat pertama yang dibangun pada mode kanvas-bebas `render.layout: "editor"` — permukaan manipulasi-langsung tanpa-chrome tempat Anda menyeret, mengubah ukuran, memutar, dan mengunci kotak teks, bentuk, dan gambar, lalu mengekspor melalui jalur render yang sama seperti setiap alat lain.

**Strip Hidden Data** adalah **utilitas pada-perangkat** pertama (`privacy: "on-device"`): alat transformasi-konten yang mengambil berkas yang *Anda* sediakan, memprosesnya sepenuhnya di browser, dan mengembalikan salinan bersih — tak pernah diunggah, tak pernah di-watermark, tanpa cap provenans. **Text Helper** adalah yang kedua — bengkel kerja pada-perangkat untuk pekerjaan tempel-ke-situs-web sehari-hari (format JSON, dekode JWT, Base64, enkode/dekode URL, hashing SHA). **Compress PDF** adalah yang ketiga — ia mengecilkan PDF dengan mengompres ulang gambarnya, lagi-lagi sepenuhnya pada-perangkat. Ketiganya menyandang teks lencana "Berjalan di perangkat Anda — tak ada yang diunggah". Ini adalah awal dari kategori utilitas-privasi yang menggantikan penyerahan berkas rahasia ke situs web tujuan-tunggal.

> Catatan: `category` dan `status` didenormalisasi ke dalam `catalog/tools/index.json` (registry yang dibaca galeri) dari setiap `tool.json`. Manifes adalah sumber kebenaran — indeks **dihasilkan** oleh `npm run build:catalog` dan `npm run validate:catalog` menggagalkan CI jika indeks yang di-commit menyimpang dari manifes.

---

## Komitmen arsitektur

Keputusan-keputusan ini sudah final. Mengubah salah satunya adalah upaya besar — mereka membentuk setiap keputusan lain dalam basis kode.

### 1. Alat deklaratif, dengan jalan keluar imperatif

Sebuah alat adalah manifes (`tool.json`) + template (`template.html`) + `hooks.js` opsional.

**Manifes mendeklarasikan input.** Bukan template. Input tidak disimpulkan dari token Handlebars. Manifes adalah kontraknya; template mengonsumsi variabel bernama lewat `{{id}}`.

**Hook bersifat opsional.** Sebagian besar alat murni deklaratif — manifes + template sudah cukup. Alat yang butuh nilai terhitung (enkode QR, pembentukan data chart) menyediakan `hooks.js` yang mengekspos fungsi siklus-hidup bernama (`onInit`, `onInput`, `onFrame` — hook kamera-langsung per-frame untuk alat yang reaktif-gerak — `beforeExport`, `afterExport`, dan `exportFile` — jalur transformasi berkas-masuk/berkas-keluar yang dipakai utilitas pada-perangkat seperti Strip Hidden Data). (`beforeRender` dicadangkan dalam kontrak hook tetapi saat ini tak punya situs pemanggilan — jangan mengandalkannya.) Host memuat hook lewat `new Function('host', …)` dengan capability bridge disuntikkan sebagai lingkup closure. Ini adalah **kontrak portabilitas, bukan sandbox keamanan**: hook tetap berjalan di realm halaman dan *dapat* menjangkau `window`/`fetch`/`document` di shell browser — `host.*` adalah permukaan portabel yang didukung, bukan batasan yang dipaksakan. Hasil hook asinkron dibatasi waktu (onInit 5d, onInput 2d, lainnya 5d) dan hasil yang terlambat dibuang; hook *sinkron* yang lepas kendali tak dapat didahulukan. Karena itu, kode hook pihak-ketiga yang tak tepercaya tidak aman untuk dijalankan sampai isolasi Worker dirilis.

Ini penting karena: alat deklaratif dapat diautorkan oleh non-developer. Jika setiap alat adalah aplikasi web, catatan risiko "keahlian terbatas untuk membuat/memelihara template pekerja keras" menjadi kemacetan permanen.

### 2. Alat dan aset adalah data, bukan kode terbundel

Aplikasi web dan Tauri mengambil katalog alat dan aset dari URL yang diketahui saat boot, menyimpannya di cache lokal, dan beroperasi atas apa pun yang ada di sana. **Menambahkan kartu acara baru atau aset musiman tidak memerlukan rilis aplikasi.**

Byte aset di-checksum SHA-256 untuk mencegah peracunan CDN. `id` + `version` aset menggerakkan invalidasi cache.

### 3. Capability Bridge adalah satu-satunya API yang dilihat alat

Alat tak pernah menyentuh DOM di luar area templatenya, tak pernah memanggil `fetch` secara langsung, tak pernah membaca berkas. Mereka memanggil metode `host.*` berversi. Bridge didefinisikan di `engine/src/bridge/host-v1.ts`:

| API Bridge | Fungsinya |
|---|---|
| `host.profile` | Nama depan, email, foto kepala, kota, dll. pengguna. Mengisi input sebelumnya via `bindToProfile`. |
| `host.assets` | Kueri katalog, resolusi aset, UI pemilih yang disediakan host. |
| `host.state` | Simpan / muat slot input. IndexedDB di web, berkas di Tauri, memori di CLI. |
| `host.clipboard` | Menulis teks atau gambar ke clipboard (dengan fallback platform). |
| `host.export` | Meraster atau menyerialkan target render. Menerapkan watermark untuk alat eksperimental. |
| `host.net` | Fetch beralamat-izin — hanya tersedia jika alat mendeklarasikan kapabilitas `"network"`. (Tak ada alat rilis yang saat ini memakainya.) |

Permukaan opsional dan aditif muncul hanya saat sebuah shell menyediakannya. Dua di antaranya **berpagar-kapabilitas** — terekspos hanya saat alat mendeklarasikan flag yang cocok: `host.compose` (menyematkan render alat lain — `compose`) dan `host.capture` (tangkapan halaman untuk URL Screenshot — `capture`). Sisanya **terdeteksi-fitur** — hadir kapan pun shell dapat menyediakannya: `host.text` (teks-ke-path via HarfBuzz WASM; kapabilitas `wasm` menandai alat yang mengandalkannya), `host.pdf` (penguraian/kompresi PDF, dipakai Strip Hidden Data dan Compress PDF), dan `host.tokens` (token desain DTCG). Kapabilitas yang dapat dideklarasikan adalah: `network`, `filesystem`, `clipboard`, `camera`, `ffmpeg`, `wasm`, `capture`, `compose`.

Alat yang sama berjalan di browser, Tauri, dan CLI headless karena setiap shell mengimplementasikan antarmuka ini — alat tak pernah tahu ia sedang di mana.

Bridge berversi. Menambahkan metode adalah versi minor. Menghapus atau mengubah tanda tangan adalah kenaikan versi mayor. Saat v2 dirilis, v1 harus tetap bekerja.

### 4. ID aset selamanya

`suse/logo/primary` adalah kontrak. Setelah dipublikasikan:
- ID tak pernah berubah, tak pernah dipakai ulang.
- Perubahan byte → naikkan `version` di manifes.
- Digantikan oleh aset baru → setel `deprecated: true` dan opsional `replacedBy`.
- Referensi yang ada selalu ter-resolve.

Ini membuat status alat tersimpan dan tautan-berbagi-URL awet selama bertahun-tahun.

### 5. Mode URL adalah kelas-utama

Setiap input harus dapat diekspresikan sebagai parameter URL:

```
lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H
```

Mode CLI adalah mode URL dengan transport berbeda — shell CLI membangun objek status-URL dari argv dan menjalankan pipeline engine yang **sama**. Ada satu jalur render. CLI tak bisa menyimpang dari GUI karena ia bukan implementasi terpisah.

`url-mode.ts` menangani bolak-baliknya (parse dan serialize). Parameter tercadang (tak pernah diteruskan ke alat sebagai input): `format`, `export`, `copy`, `slot`, `output`, `filename`, `_v`, `z` (status terkemas — token "Tautan terpendek"), `width`/`w`, `height`/`h`, `unit`, `dpi`, `profile`, `password`, `bleed`, `marks`, `full`, `options`, `nostage`. Input aset dalam mode URL diserialkan berdasarkan `id`-nya; runtime me-resolve-nya via `host.assets.get()` sebelum hidrasi. `width`/`height` adalah nilai dalam `unit` (default `px`, juga `mm`/`cm`/`in`/`pt`/`pc`); dengan unit fisik, `dpi` menyetel resolusi raster. Mereka menyetel ukuran dokumen kanvas dan mengisi sebelumnya panel dimensi ekspor.

### 6. Penyimpanan lewat bridge, bukan langsung

Shell web: IndexedDB. Tauri: berkas. CLI: dalam-memori. Alat hanya melihat `host.state.save(slot, data)` dan `host.state.load(slot)`. `localStorage` tidak dipakai — terlalu kecil dan tak bisa menampung blob.

Pengguna dapat menyimpan beberapa slot edit bernama per alat dan kembali ke setiap sesi nanti. Tak perlu pembuatan akun; status bersifat per-perangkat. Karena bridge adalah satu-satunya jahitan, status per-perangkat itu juga *portabel*: `shells/web/src/data-transfer.ts` membaca semuanya kembali lewat `host.profile`/`host.state`/`host.assets` ke dalam satu zip `lolly-backup` yang diimpor pada instalasi lain mana pun — jawaban offline untuk "pindah ke perangkat baru" yang tak butuh server (spesifikasi lengkap: `docs/data-transfer.md`). Integrasi SUSE ID (sinkronisasi multi-perangkat) adalah tonggak masa depan di atas ini.

### 7. Tag kematangan menjawab risiko "disetujui brand" secara struktural

Setiap alat mendeklarasikan `status: official | community | experimental` di manifesnya. Galeri mengurutkan berdasarkan status. Alat eksperimental mem-watermark ekspornya secara otomatis — watermark diterapkan oleh `host.export.render`, bukan oleh alat, sehingga tak bisa dinonaktifkan oleh autor alat non-resmi.

Ini adalah jawaban struktural terhadap risiko persepsi bahwa memakai alat apa pun menyiratkan persetujuan brand. Jawaban proses (antrean tinjauan, pemagaran SUSE ID) berlapis di atasnya.

### 8. Input alat diketik lewat manifes, termasuk aset

Input mendeklarasikan `type`: `text`, `longtext`, `number`, `boolean`, `color`, `select`, `asset`, `date`, `time`, `datetime-local`, `url`, `profile`, `blocks`, `vector`, dan `file`. Host merender kontrol generik per tipe dari manifes — alat tak menulis kode kontrol sama sekali. Tiga di antaranya lebih berbobot dari sisanya:

- **`asset`** (dengan `filter` dan `allowUpload`) adalah jembatan ke sistem aset global; `allowUpload: false` adalah tuas keterberlakuan-brand untuk hal-hal seperti logo kartu-sponsor di mana hanya aset pustaka yang diizinkan. Unggahan pengguna memakai bentuk `AssetRef` yang sama seperti aset pustaka, sehingga alat menanganinya secara identik.
- **`blocks`** adalah grup-bidang berulang — mini-tabel di dalam satu input, disunting di panel samping, dengan menu tambah yang diketik/diskriminasi dan bidang aset per-blok. Mengeklik blok yang dirender pada kanvas memfokuskan baris blok itu. Dipakai oleh `meeting-planner`, `chart-creator`, `event-name-badge`, `wayfinding-signage`, `color-block`, dan `digi-ad`.
- **`vector`** mengelompokkan sekumpulan angka tetap (mis. sebuah transform) menjadi satu kontrol majemuk; **`file`** menahan berkas milik pengguna sebagai byte dalam memori untuk utilitas transformasi pada-perangkat (mis. `strip-data` dan `compress-pdf`).

### 9. Template bersifat tanpa-logika (Handlebars, bukan EJS)

Handlebars dipilih ketimbang EJS secara sengaja:
- Tanpa logika. Template dapat diautorkan oleh non-developer.
- Aman secara default. `{{x}}` meng-escape HTML; `{{{x}}}` adalah raw opsional.
- Tak ada JS sembarang dalam template berarti tak ada permukaan audit XSS per-template.

Logika hidup di `hooks.js` tempat ia eksplisit dan dapat ditinjau. Helper Handlebars yang tersedia: `{{default}}`, `{{upper}}`, `{{lower}}`, `{{eq}}`, `{{markdown}}`, `{{asset ref}}`, `{{asset ref "property"}}` (plus helper format-data `icsStamp`/`rfcText`/`csvCell` yang dipakai template `.ics`/`.vcf`/`.csv` sekerabat).

### 10. Alat menyusun alat

Sebuah alat dapat menyematkan render alat **lain** tanpa impor alat-ke-alat — komposisi di-resolve oleh engine, tak pernah oleh kode alat. Ada dua permukaan:

- **Manifes deklaratif** — `composes: [{ id, tool, inputs, format?, width?, height? }]`. Engine merender anak bernama dan menempatkan hasilnya di template tanpa-logika sebagai `{{asset <id>}}`. `event-name-badge` menyusun `qr-code` sebagai SVG hari ini.
- **URL sematan portabel** — `<img src="https://lolly.tools/tool/<id>.<ext>?<inputs>">`. Shell merender anak itu **secara lokal** (piksel placeholder muncul sampai render lokal ter-resolve); tak ada yang pernah diambil dari `lolly.tools`.

Susun render alat apa pun: anak **SVG** tetap vektor sejati saat induk mengekspor ke SVG atau PDF dan meraster tajam untuk PNG; anak **PNG/JPG/WEBP** menyemat sebagai gambar. Membutuhkan kapabilitas `compose`. Anak yang tersusun adalah perantara — tak pernah di-watermark atau dicap-provenans — dan komposisi menurun secara anggun: shell yang tak bisa merender anak cukup menghilangkan slotnya dan induk tetap merender.

---

## Yang secara eksplisit kami pilih untuk tidak lakukan

- **Tanpa EJS / tanpa JS sembarang dalam template.** Permukaan XSS adalah nol. Logika hidup di `hooks.js`.
- **Tanpa CMS aset wajib.** Individu mengonsumsi berkas kreatif mereka sendiri langsung ke katalog mereka di dalam aplikasi (tampilan [Katalog](/info/using.html) dan Brand Studio) dan mengautorkan alat mereka sendiri dengan menyimpan sesi [Layout Studio](/info/using.html) — tanpa server, tanpa konsol admin. Untuk katalog *bersama yang terkelola*, sebuah organisasi **dapat** mengelola direktori aset sebagai git dan memagari pembaruan lewat tinjauan PR — itu adalah model tata kelola yang tersedia, bukan syarat aplikasi.
- **Tanpa RBAC yang dipaksakan.** Aplikasi terbuka bersifat akses-publik secara default; risiko brand dikelola dengan tag kematangan + watermark. Organisasi yang menginginkan kendali lebih ketat berlapis pada auth-nya sendiri dan katalog yang ditinjau-git di atas.
- **Tanpa basis data terpusat.** Semua status pengguna bersifat per-perangkat. Integrasi SUSE ID ada di peta jalan tetapi bukan penghambat peluncuran.
- **Tanpa jalur kode alat/engine bersama.** Engine adalah open source; `tools/` dan `assets/` tetap konten milik SUSE dalam repositori mereka sendiri. Pemisahan dipaksakan (tanpa impor silang) sehingga pembelahan tetap bersih.

---

## Siklus hidup, ujung ke ujung

Seorang pengguna membuka `lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H`:

1. **Boot.** Shell web membuka IndexedDB, membangun capability bridge, menyinkronkan katalog alat dan aset (atau memuat dari cache saat offline).
2. **Rute.** Hash URL → tampilan `tool`, dengan `qr-code` dan parameter URL diekstrak.
3. **Muat.** `loadTool('qr-code', fetchFile)` mengambil `tool.json`, memvalidasi terhadap JSON Schema, mengambil `template.html`, `styles.css`, dan sumber `hooks.js`.
4. **Parse status URL.** `parseUrlState` menerjemahkan parameter URL menjadi nilai input awal. Referensi aset (`?logo=suse/logo/primary`) diurai sebagai objek `{ id, _unresolved: true }` yang ringan.
5. **Runtime.** `createRuntime(tool, host, initialValues)` membangun model input (menggabungkan data profil, default, dan nilai awal), me-resolve referensi aset via `host.assets.get()`, memuat hook (`host` bercakupan-closure, bukan bersandbox), memanggil `hooks.onInit`.
6. **Render.** Shell berlangganan ke runtime; pada setiap perubahan status ia menerima `{ model, hydrated }`. Ia merender kontrol input dari model dan menulis HTML template terhidrasi ke `#tool-canvas`.
7. **Interaksi.** Pengguna mengetik di input → `runtime.setInput(id, value)` → batasan diterapkan → `hooks.onInput` dipanggil → hidrasi ulang → render ulang. Kanvas diperbarui secara langsung.
8. **Ekspor.** Pengguna mengeklik Unduh(PNG) → `runtime.export(canvasNode, 'png')` → `host.export.render` (meraster via dom-to-image-more; SVG/PDF melewati vektorizer penelusur-DOM khusus) → blob → `host.export.download`. Rentang format yang dapat dipilih sebuah alat luas: `svg`, `png`, `jpg`/`jpeg`, `webp`, `avif`, `pdf`, format vektor `emf`, `eps`, plus format cetak/CMYK `pdf-cmyk`, `cmyk-tiff`, `eps-cmyk`; format video `webm`, `mp4`, `gif`; dan format data/teks `html`, `md`, `txt`, `json`, `csv`, `ics`, `vcf`, `ico`, `zip`. (Alat yang menyetel `render.export: false` — mis. Color Palette, Countdown Timer, Strip Hidden Data, Text Helper, Compress PDF — menyembunyikan kontrol unduh/format/dimensi.) Unit fisik dikonversi per format di sini (PDF → poin halaman sejati, raster → piksel pada DPI dengan chunk `pHYs`). Metadata kepengarangan/provenans (autor, alat, sumber — dibangun oleh `engine/src/metadata.ts`) disematkan per format: PNG iTXt, JPEG EXIF, PDF info dict, SVG `<metadata>`, komentar GIF. Alat eksperimental mendapat watermark yang disisipkan oleh host, bukan alat.

Siklus hidup yang sama di Tauri. Siklus hidup yang sama di CLI — jsdom menyediakan DOM headless; keluaran pergi ke berkas atau stdout.

---

## Status open-source

Direktori `engine/`, `shells/`, `schemas/`, dan `docs/` adalah open source di bawah **MPL-2.0** — platform perancah yang netral-vendor untuk perkakas brand, dengan setiap unit yang dapat dirilis dibelah ke repositorinya sendiri di bawah [github.com/lolly-tools](https://github.com/lolly-tools). `tools/` dan `catalog/assets/` adalah konten khusus SUSE dan tetap **milik SUSE** (semua hak dilindungi — lihat `NOTICE.md` tiap repo); mereka tidak dicakup oleh MPL.

Pembelahan dipaksakan — tak ada impor silang dari `engine/` ke `tools/` atau `assets/` — sehingga batas platform/konten tetap bersih.

---

## Peta jalan

| Tonggak | Target | Apa |
|---|---|---|
| **Alat awal** | ✅ Selesai | QR Code, Kartu Kutipan, Tanda Tangan Email, Day Brief, Code Canvas, Countdown Timer, Color Palette, Brand Lockup, Bag Video, Chart Creator, Filter: Duotone, Meeting Planner — shell web hidup |
| **Tingkatkan perkakas saat ini** | Pertengahan 2026 ✅ Selesai  | Aplikasi offline yang dapat diunduh (Tauri); alat karyawan dan acara tambahan; pipeline ekspor lebih kaya (stabilitas teks-ke-path, metadata, format ekstra — lihat `plans.md`) |
| **Open source engine** | Akhir 2026 ✅ Selesai  | Engine, shell, skema, docs menjadi publik — bukan alat/aset ber-brand |
| **Transfer perangkat-ke-perangkat** | ✅ Selesai | Bundel `lolly-backup` portabel membawa profil, sesi tersimpan, gambar yang diunggah, dan preferensi antara dua instalasi mana pun — offline atau online, tanpa akun. Amplop yang kompatibel-maju dan terperiksa-integritas (spesifikasi: `docs/data-transfer.md`) |
| **Tetapkan peta jalan alat formal** | Akhir 2026 | Kit referensi pelanggan, konsumsi desain AI, mode permintaan GET/URL |
| **Utilitas privasi pada-perangkat** | 🚧 Sedang berjalan | Alat transformasi-konten yang memproses berkas *milik Anda sendiri* secara lokal (berkas masuk → berkas bersih keluar), menggantikan eksfiltrasi ke SaaS tujuan-tunggal. **Selesai:** tipe input `file` + jalur transformasi `exportFile` + konvensi `privacy:"on-device"` (tanpa watermark/provenans) + **Strip Hidden Data** (metadata JPEG/PNG/SVG/PDF, PDF via bridge `host.pdf`) dan **Text Helper** (bengkel kerja pada-perangkat untuk pekerjaan tempel-ke-situs-web sehari-hari — format JSON, dekode JWT, Base64, enkode/dekode URL, hashing SHA, plus grup Novelty). **Berikutnya:** pangkas/ubah ukuran, konversi/kompres gambar; lalu bridge codec `host.image` (spesifikasi: `plans/exfiltration-app-content.md`) |
| **Token desain (DTCG)** | 🚧 Warna dirilis | Primitif brand sebagai [W3C Design Tokens (DTCG)](https://www.designtokens.org/TR/drafts/format/) kanonis — format yang [Penpot impor/ekspor](https://help.penpot.app/user-guide/design-systems/design-tokens/). **Selesai:** token warna (`suse/tokens/brand`), bridge `host.tokens`, swatch pemilih + nilai bertaut-referensi (spesifikasi: `docs/design-tokens.md`). **Berikutnya:** token dimensi/tipe, impor/ekspor Penpot, token pengguna dalam bundel transfer (`tokens.json`) |
| **Endpoint agen MCP (render)** | ✅ Selesai | Server [MCP](https://modelcontextprotocol.io) mengekspos katalog + jalur render sebagai alat yang dapat dipanggil (`lolly_list_tools` / `describe_tool` / `build_url` / `render` / `transform`) sehingga agen mana pun dapat menghasilkan aset jadi yang terikat-aturan — tambahkan ke klien MCP mana pun sebagai konektor kustom (OAuth 2.1) atau arahkan klien CLI/HTTP ke sana dengan token bearer. Hidup di `mcp.lolly.tools` (endpoint penuh: raster/PDF/animasi/video via browser headless yang dihosting) dan `lolly.tools/api/mcp` (tingkat tanpa-browser serverless). Berbeda dari MCP *pengautoran* Penpot di bawah, yang tentang **pembuatan** alat (spesifikasi: `plans/mcp-server.md`; panduan: `docs/mcp.md` + `docs/ai-agents.md`) |
| **Konsumsi berkas Penpot sebagai alat** | 2027+ | Impor berkas Penpot dan tampilkan *sebagai alat Lolly* (deklaratif, mengutamakan-batasan), mengubah desain yang diautorkan di Penpot menjadi generator deterministik |
| **Ekstensi MCP + Penpot (pengautoran online-saja)** | 2027+ | Server MCP Penpot mengartikulasikan alat baru dengan AI — cara paling visual untuk membuat template deterministik: putaran pertama yang terinformasi-brand, disempurnakan dengan manusia dalam loop, menyasar konteks baru sekali-jadi seiring waktu. *Pembuatan* alat bersifat online-saja; alat yang dihasilkannya berjalan di mana saja |
| **RBAC + SUSE ID** | 2027+ | Pagari alat tertentu di balik SUSE ID; status tersimpan multi-perangkat; konsumsi/ekspor Google Drive |

---

## Di mana engine berakhir dan host dimulai

Jika Anda dapat mendeskripsikannya dalam data murni + Handlebars → **engine**.
Jika ia menyentuh DOM, berkas, jaringan, atau API browser/OS apa pun → **host**.

Garisnya tajam dengan sengaja. Engine adalah bagian open-source. Segala sesuatu yang tahu tentang SUSE, platform tertentu, atau lingkungan runtime tetap di luarnya.
