# Lolly untuk Pembangun

Dokumentasi teknis — untuk siapa pun yang membuat tool, mengintegrasikan Lolly ke dalam sebuah pipeline, meng-host-nya sendiri, atau memperluas platform ini.

**Apa manfaatnya bagi Anda.** Bangun sebuah tool sekali dan permintaan itu berhenti kembali kepada Anda. Permintaan berulang "bisa tolong buatkan saya…" yang menghabiskan sore hari Anda berubah menjadi template yang diisi sendiri oleh orang lain — dengan benar, tanpa melibatkan Anda. Karya Anda adalah HTML/CSS/JS biasa: terkontrol versi, dapat di-diff, dapat ditinjau, dan berjalan di atas engine terbuka tanpa vendor lock-in, sehingga tetap menjadi milik Anda. Otomatiskan proses produksi dan waktu Anda tercurah untuk masalah yang menarik, bukan untuk ekspor yang kesepuluh ribu.

Lolly adalah **engine** yang agnostik terhadap platform dan menjalankan jalur render yang sama di beberapa **shell** (web PWA, Tauri desktop/mobile, CLI, TUI). Tool adalah **data, bukan kode yang di-bundle** — sebuah manifest ditambah template ditambah hook opsional — sehingga tool baru dirilis tanpa pembaruan aplikasi. Mulailah dengan [Ikhtisar](/info/overview.html) untuk arsitekturnya, lalu ikuti jalur yang sesuai dengan apa yang sedang Anda bangun.

Baru mengenal platform ini? **[Mulai Cepat](/info/quickstart.html)** menyiapkan sebuah brand dan render pertama Anda sebelum Anda mendalaminya lebih jauh.

## Memahami arsitektur

- **[Ikhtisar](/info/overview.html)** — mengapa Lolly ada, pemisahan engine/shell/tools, capability bridge, dan komitmen arsitektur yang sudah ditetapkan.
- **[Token Desain](/info/design-tokens.html)** — model token DTCG yang digunakan untuk mengekspresikan brand, dan bagaimana tool mengonsumsinya.

## Membuat tool

- **[Membuat Tool](/info/authoring-tools.html)** — panduan lengkap: manifest, template, gaya, hook, komposisi, dan publikasi.
- **[Membuat Aset](/info/authoring-assets.html)** — aset katalog, tier, lokal, palet, ikon yang dapat ditema, dan font.
- **[Host API](/info/host-api.html)** — capability bridge `HostV1` yang menjadi dasar penulisan setiap tool (satu-satunya API yang dilihat tool).
- **[Mode URL](/info/url-mode.html)** — setiap input sebagai parameter URL; parameter cadangan, encoding ringkas, dan tautan terpaket.

## Menjalankan & mengintegrasikan

- **[CLI](/info/cli.html)** — render headless; jalur render yang sama seperti GUI, dijalankan oleh argv `--foo=bar`.
- **[TUI](/info/tui.html)** — shell terminal interaktif.
- **[Server MCP](/info/mcp.html)** — endpoint native yang memungkinkan agen AI menemukan dan menjalankan tool.
- **[Agen AI](/info/ai-agents.html)** — menjalankan Lolly dari sebuah model: URL adalah API-nya.
- **[Ekstensi Chrome](/info/extension.html)** — menangkap URL langsung sebagai aset yang dapat digunakan ulang.

## Merilis & mengoperasikannya

- **[Panduan Build](/info/build-guide.html)** — build setiap target: CLI, TUI, desktop, mobile.
- **[Penerapan](/info/deployment.html)** — aplikasi web, aplikasinya, dan layanan backend; tempat setiap bagian berjalan.
- **[Konfigurasi](/info/configuration.html)** — profil, brand pack, capability gating, feature flag, dan validasi katalog.

## Kepercayaan & data

- **[Identitas Content Credentials](/info/content-credentials-identity.html)** — penandatanganan yang diterbitkan CA untuk C2PA di perangkat; kontrak engine dan runbook operator.
- **[Transfer Data](/info/data-transfer.html)** — bundel `lolly-backup`: envelope, integritas, dan jaminan lintas-shell.
- **[Tentang](/info/about.html)** — proyek ini, batasan lisensinya, dan repositorinya.
