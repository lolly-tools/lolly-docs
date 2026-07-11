# Lolly untuk Pembina

Dokumentasi teknikal — untuk sesiapa sahaja yang mencipta alat, mengintegrasikan Lolly ke dalam saluran paip, mengehos sendiri platform ini, atau melanjutkan platform ini.

**Apa faedahnya untuk anda.** Bina alat sekali sahaja dan permintaan itu tidak lagi kembali kepada anda. Permintaan berulang "boleh tak buatkan saya…" yang menghabiskan masa petang anda bertukar menjadi templat yang orang lain isi sendiri — dengan betul, tanpa anda perlu terlibat. Kerja anda adalah HTML/CSS/JS biasa: terkawal versi, mudah dibandingkan, mudah disemak, dan berjalan atas enjin terbuka tanpa terikat kepada mana-mana vendor, jadi ia kekal milik anda. Automasikan larian pengeluaran dan masa anda tertumpu kepada masalah yang menarik, bukan eksport yang ke sepuluh ribu.

Lolly ialah **enjin** platform-agnostik yang menjalankan laluan render yang sama merentasi beberapa **shell** (web PWA, Tauri desktop/mudah alih, CLI, TUI). Alat adalah **data, bukan kod terbungkus** — satu manifest ditambah satu templat ditambah hook pilihan — jadi alat baharu boleh dilancarkan tanpa kemas kini aplikasi. Mulakan dengan [Gambaran Keseluruhan](/info/overview.html) untuk seni bina, kemudian ikuti laluan yang sesuai dengan apa yang anda bina.

Baru dengan platform ini? **[Mula Pantas](/info/quickstart.html)** akan menyediakan jenama dan render pertama anda sebelum anda menyelami lebih mendalam.

## Fahami seni bina

- **[Gambaran Keseluruhan](/info/overview.html)** — sebab Lolly wujud, pemisahan engine/shell/tools, jambatan keupayaan, dan komitmen seni bina yang telah ditetapkan.
- **[Token Reka Bentuk](/info/design-tokens.html)** — model token DTCG yang menjadi asas cara jenama diungkapkan, dan cara alat menggunakannya.

## Cipta alat

- **[Mencipta Alat](/info/authoring-tools.html)** — panduan lengkap: manifest, templat, gaya, hook, komposisi, dan penerbitan.
- **[Mencipta Aset](/info/authoring-assets.html)** — aset katalog, tingkatan, lokel, palet, ikon boleh ditema, dan fon.
- **[API Hos](/info/host-api.html)** — jambatan keupayaan `HostV1` yang menjadi asas penulisan setiap alat (satu-satunya API yang dilihat oleh alat).
- **[Mod URL](/info/url-mode.html)** — setiap input sebagai parameter URL; parameter dikhaskan, pengekodan padat, pautan padat.

## Jalankan & integrasikan

- **[CLI](/info/cli.html)** — pemaparan tanpa kepala (headless); laluan render yang sama seperti GUI, dipacu oleh argv `--foo=bar`.
- **[TUI](/info/tui.html)** — shell terminal interaktif.
- **[Pelayan MCP](/info/mcp.html)** — endpoint asli yang membolehkan ejen AI menemui dan menjalankan alat.
- **[Ejen AI](/info/ai-agents.html)** — menggerakkan Lolly daripada model: URL itu sendiri adalah API.
- **[Sambungan Chrome](/info/extension.html)** — tangkap URL langsung sebagai aset boleh guna semula.

## Lancarkan & operasikan

- **[Panduan Bina](/info/build-guide.html)** — bina setiap sasaran: CLI, TUI, desktop, mudah alih.
- **[Pelaksanaan](/info/deployment.html)** — aplikasi web, aplikasi-aplikasi, dan perkhidmatan backend; di mana setiap bahagian berjalan.
- **[Konfigurasi](/info/configuration.html)** — profil, pek jenama, sekatan keupayaan, bendera ciri, dan pengesahan katalog.

## Kepercayaan & data

- **[Identiti Content Credentials](/info/content-credentials-identity.html)** — tandatangan yang dikeluarkan oleh CA untuk C2PA pada peranti; kontrak engine dan runbook operator.
- **[Pemindahan Data](/info/data-transfer.html)** — bungkusan `lolly-backup`: sampul, integriti, dan jaminan merentasi shell.
- **[Perihal](/info/about.html)** — projek ini, sempadan lesennya, dan repositori.
