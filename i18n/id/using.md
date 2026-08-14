# Menggunakan Lolly

Panduan praktis untuk benar-benar *menggunakan* aplikasi ini - membuka tool, mengolah kanvas, mengekspor, menyimpan, dan berbagi. Semua di sini berjalan **di perangkat Anda**: tanpa akun, tanpa unggah, tanpa internet setelah pemuatan pertama.

> Baru di sini? [Mulai Cepat](/info/quickstart.html) membuat kamu langsung berkarya dalam hitungan menit, dan [Lolly untuk Operator](/info/operators.html) membahas pemasangan/penerapan aplikasi; halaman ini tentang mengoperasikannya setelah terbuka.

## Membuka tool

![The grey Show hidden tools tile at the end of the grid, and one dimmed hidden tool card revealed beneath it with Unhide in its menu](/t/url-shot?url=%2F%23%2F&width=1440&height=680&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&drive=click%3A%5Bdata-select%3D%22qr-code%22%5D%3Bclick%3A%5Bdata-bulk%3D%22hide%22%5D%3Bwait%3A300%3Bclick%3A.gtile--hiddenbox%3Bpress%3AEnd%3Bwait%3A800&waitSelector=.gallery-view%5Bdata-shots-settled%5D&walker=1&format=svg&rasterDpi=96&dark=1&filename=misc-hidden-tools)

![A tool's split view - the control stack on the left, and the live horizontal bar chart it draws on the right](/t/url-shot?url=%2F%23%2Ftool%2Fd3%3Fct%3Dbar%26t%3DExample%2520data%26st%3DSample%2520values%252C%2520not%2520a%2520real%2520dataset%26d%3DMonth%252CSeries%2520A%252CSeries%2520B%252CSeries%2520C%250AJan%252C12%252C9%252C5%250AFeb%252C18%252C14%252C7%250AMar%252C24%252C17%252C11%250AApr%252C29%252C23%252C15%26lg%3D1&width=1440&height=900&dpi=192&waitMs=2500&walker=1&format=svg&dark=1&filename=vt-tool-split-view)

![The tool gallery - every tool as a card, grouped by category](/t/url-shot?url=%2F%23%2F&width=1440&height=900&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&tolerance=0.03&waitSelector=.gallery-view%5Bdata-shots-settled%5D&walker=1&format=svg&localize=1&dark=1&filename=gallery&try=1)


Layar utama adalah **galeri** - setiap tool, dikelompokkan berdasarkan kategori. Klik sebuah kartu untuk membuka tool; jika Anda pernah mengerjakannya sebelumnya, tombol **Lanjutkan** akan melanjutkan sesi terakhir Anda. Gunakan kotak pencarian untuk memfilter berdasarkan nama.

Setiap tool berupa tampilan terbagi: **kontrol** di satu sisi, **pratinjau** langsung (kanvas) di sisi lain. Ubah kontrol apa pun dan pratinjau diperbarui secara instan.

> Beberapa tool (seperti **Layout Studio**) justru terbuka sebagai **kanvas bebas** - permukaan tanpa chrome dengan manipulasi langsung tempat Anda menyeret, mengubah ukuran, memutar, dan menjepret kotak teks, bentuk, dan gambar, serta klik ganda untuk menyunting teks di tempat. Ia mengekspor melalui jalur render yang sama dengan tool lainnya, jadi kanvas itu *adalah* berkasnya. Lihat [Kanvas bebas](#the-free-canvas-design) di bawah.

## Kanvas (pratinjau)

![The zoom HUD in the corner of the canvas - minus, the live percentage, plus, Fit, then the theme and sound toggles](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&css=.stage-nav%7Bopacity%3A1!important%7D&cropSelector=.stage-nav&walker=1&format=svg&dark=1&filename=use-zoom-hud)

Pratinjau selalu menampilkan persis apa yang akan diekspor.

**Desktop**

- **Zoom:** Cmd/Ctrl-scroll, atau cubit pada trackpad - zoom berpusat pada penunjuk Anda.
- **Geser:** tahan **Space** lalu seret, atau seret dengan **tombol tengah mouse**. (Klik biasa tetap bebas untuk mengeklik bagian-bagian desain.)
- **Keyboard:** `0` = paskan ke jendela · `1` = 100% · `+` / `−` = zoom.
- **HUD Zoom:** kontrol kecil `−  NN%  +  Fit` di sudut. Klik persentasenya untuk beralih Fit ↔ 100%.

**Sentuh**

- **Cubit** untuk zoom, **seret** untuk menggeser, **ketuk dua kali** untuk mereset ke paskan.

**Klik untuk melompat ke kontrol:** klik elemen apa pun di desain dan input bilah samping yang sesuai akan mendapat fokus serta bergulir ke tampilan - untuk grup baris berulang, ia membuka lipatan baris tepat yang Anda klik, sehingga menyunting apa yang Anda lihat hanya sekali ketuk.

Perubahan dimensi selalu menjepretkan tampilan kembali ke paskan yang rapi.

### Kanvas bebas (Layout Studio)

![Layout Studio's free canvas - the artboard with its surrounding pasteboard](/t/url-shot?url=%2F%23%2Ftool%2Fdesign%3Ftemplate%3D__blank__&width=1440&height=900&dpi=192&waitMs=2000&walker=1&format=svg&localize=1&dark=1&filename=design)

Tool kanvas-bebas menambahkan permukaan kerja *di sekitar* artboard, seperti pasteboard seorang desainer:

- **Penataan di luar kanvas.** Seret sebuah kotak melewati tepi bingkai dan ia tetap sepenuhnya **terlihat dan dapat dipilih** - parkir elemen di samping sementara Anda menata komposisi, lalu seret kembali ke dalam. Segala sesuatu di luar bingkai **diredupkan lembut** sehingga area ekspor selalu terbaca sekilas, dan bingkai mempertahankan bayangannya untuk menandai persis di mana berkas dimulai.
- **Hanya bingkai yang diekspor.** Berkas yang diekspor dibatasi oleh artboard - apa pun yang tertinggal di luar (atau bagian kotak yang menggantung di luar tepi) cukup dipangkas dari keluaran, baik pada format raster maupun vektor.
- **Zoom out melewati Fit** (hingga 20%) untuk melihat seluruh pasteboard ketika Anda telah menata sesuatu jauh di luar bingkai.
- **Artboard yang dapat diubah ukurannya.** Mengubah dimensi ekspor akan mengubah ukuran bingkai di tempat; kotak-kotak mempertahankan posisinya, sehingga Anda dapat membingkai ulang tata letak di sekitar konten yang ada.

## Di ponsel

![The free-canvas tool rail: a drag grip, the Lolly menu, then Pointer, Add a box, Pen and Timeline](/t/url-shot?url=%2F%23%2Ftool%2Fdesign%3Ftemplate%3D__blank__&width=1440&height=900&dpi=192&waitMs=2600&css=.fc-toolbar%7Bopacity%3A1!important%7D&cropSelector=.fc-toolbar&walker=1&format=svg&dark=1&filename=pen-editor-rail)

![Two pen paths rendered straight from a link: a stroked S-curve and a closed filled blob](/t/url-shot?url=%2F%23%2Ftool%2Fdesign%3Fboxes%3D%5B%7B%22id%22%3A%22paper%22%2C%22kind%22%3A%22box%22%2C%22x%22%3A0%2C%22y%22%3A0%2C%22w%22%3A1080%2C%22h%22%3A1080%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23ffffff%22%7D%2C%7B%22id%22%3A%22curve%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A140%2C%22y%22%3A180%2C%22w%22%3A800%2C%22h%22%3A420%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%22%2C%22stroke%22%3A%22%234f84ba%22%2C%22strokeW%22%3A14%2C%22path%22%3A%221!cubic!0_.02!.85!!!.25!-.45!s_.5!.5!-.22!.32!.22!-.32!y_.98!.12!-.25!.45!!!s%22%7D%2C%7B%22id%22%3A%22blob%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A340%2C%22y%22%3A620%2C%22w%22%3A400%2C%22h%22%3A320%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23d1e7ff%22%2C%22stroke%22%3A%22%234f84ba%22%2C%22strokeW%22%3A6%2C%22fillRule%22%3A%22nonzero%22%2C%22path%22%3A%221!catmull-rom!1_.5!0_1!.42_.78!1_.22!1_0!.42%22%7D%5D&width=1440&height=900&dpi=192&waitMs=2600&cropSelector=%23tool-canvas&walker=1&format=svg&dark=1&filename=pen-path-geometry)

![A tool on a phone-width screen - controls as a sheet up top, the generated palette filling the preview below, and the render pill floating bottom-centre](/t/url-shot?url=%2F%23%2Ftool%2Fcolor-palette%3Fseed%3Df97316%26harmony%3Dadjacent-3%26steps%3D9&width=430&height=900&dpi=192&waitMs=2200&walker=1&format=svg&dark=1&filename=vt-phone-palette)

Pada layar sempit, tata letak mengalir ulang menjadi satu kolom:

- **Kontrol menjadi sheet** di bagian atas dengan **pegangan seret** di tepi bawahnya. Seret pegangan untuk mengubah ukurannya - ia menjepret ke **intip / setengah / penuh** - atau **ketuk** pegangan untuk beralih tertutup ↔ terbuka. Pratinjau mengisi ruang di bawah dan tetap terlihat sementara Anda menyunting.
- Tombol **Render** mengambang membuka sheet **Ekspor** - semua kontrol format, ukuran, salin, simpan, dan unduh di satu tempat. Tutup dengan mengetuk latar belakang.

## Kontrol (input)

![A crescent and a ring with a real hole, both produced by Subtract](/t/url-shot?url=%2F%23%2Ftool%2Fdesign%3Fboxes%3D%5B%7B%22id%22%3A%22paper%22%2C%22kind%22%3A%22box%22%2C%22x%22%3A0%2C%22y%22%3A0%2C%22w%22%3A1080%2C%22h%22%3A1080%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23ffffff%22%7D%2C%7B%22id%22%3A%22crescent%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A120%2C%22y%22%3A330%2C%22w%22%3A374%2C%22h%22%3A400%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%234f84ba%22%2C%22path%22%3A%221!cubic!1_.750491!.957645!-.128211!-.062578!-.065985!.027232!c_.534759!1!.076762!!-.295339!!c_0!.5!!.276142!!-.276142!c_.534759!0!-.295339!!.200102!!c_1.000984!.254923!-.09169!-.152161!-.021205!-.003239!c_.935829!.25!.022185!!-.221505!!c_.534759!.625!!-.207107!!.14459!c%22%7D%2C%7B%22id%22%3A%22ring%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A580%2C%22y%22%3A330%2C%22w%22%3A400%2C%22h%22%3A400%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%234f84ba%22%2C%22fillRule%22%3A%22nonzero%22%2C%22path%22%3A%221!cubic!1_1!.5!!-.276142!!.276142!c_.5!1!.276142!!-.276142!!c_0!.5!!.276142!!-.276142!c_.5!0!-.276142!!.276142!!c*1!cubic!1_.5!.7!-.110457!!.110457!!c_.7!.5!!.110457!!-.110457!c_.5!.3!.110457!!-.110457!!c_.3!.5!!-.110457!!.110457!c%22%7D%5D&width=1440&height=900&dpi=192&waitMs=2600&cropSelector=%23tool-canvas&walker=1&format=svg&dark=1&filename=path-ops-boolean-result)

![A tool's control stack - a text field, colour triggers and a slider, and nothing else the author chose to lock down](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&cropSelector=%23tool-inputs&walker=1&format=svg&dark=1&filename=use-tool-inputs)

Tool hanya menampilkan input yang memang dimaksudkan untuk bervariasi - semua yang lain (warna, tata letak, tipografi, logika) dikunci oleh pembuat tool, sehingga apa pun yang Anda buat memenuhi aturan yang ditetapkan pembuatnya. Input mencakup teks, slider, pemilih warna, dropdown, tanggal, pemilih gambar, dan grup baris berulang. Beberapa dikelompokkan di bawah bagian yang dapat dilipat.

**Reset:** *Bersihkan perubahan* mengembalikan setiap input ke nilai bawaannya.

## Detail & foto diri Anda

![Sequence Studio's timeline: the transport, the ruler, an overlay lane, the magnetic sequence row with its clips and seam chips, and the Always on strip](/t/url-shot?url=%2F%23%2Ftool%2Fsequence-studio&width=1440&height=900&dpi=192&waitMs=7000&css=.tl-panel%7Bheight%3A252px!important%7D&cropSelector=.tl-panel&format=svg&walker=1&tolerance=0.03&dark=1&filename=seq-studio-timeline)

![The whole editing surface: artboard, tool rail and timeline together](/t/url-shot?url=%2F%23%2Ftool%2Fsequence-studio&width=1440&height=900&dpi=192&waitMs=7000&css=.fc-toolbar%7Bopacity%3A1!important%7D&cropSelector=%23tool-stage&format=svg&walker=1&tolerance=0.03&dark=1&filename=seq-studio-stage)

**Profil** (kanan-atas galeri) menyimpan nama, detail kontak, dan **foto diri** opsional Anda. Tool yang meminta bidang-bidang tersebut mengisinya otomatis - atur sekali dan tanda tangan email, lockup, serta badge Anda mengisi dirinya sendiri. Anda tetap dapat menimpa bidang apa pun per sesi. Ikut serta dengan **Gunakan detail saya** agar tool dapat membacanya.

Foto diri dan detail Anda tinggal **hanya di perangkat ini**. Sebuah profil bisa lebih dari sekadar Anda - sebuah tim atau peran yang sesekali Anda jalani. Lihat **[Profil](/info/profile.html)** untuk gambaran lengkap, termasuk menyimpan lebih dari satu.

## Menyimpan & melanjutkan

![The two-half render pill - an up arrow that opens the export panel, and a tick that saves the session in place](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&css=%23tool-inputs%7Bdisplay%3Anone%7D&cropSelector=.render-pill&walker=1&format=svg&dark=1&filename=use-render-pill)

Klik **Simpan** untuk menyimpan input saat ini sebagai sesi untuk tool tersebut. Anda dapat menyimpan beberapa sesi bernama per tool; tombol **Lanjutkan** setiap tool membuka kembali sesi terakhir Anda, dan **tombol riwayat** (kanan-atas, di samping profil Anda) mencantumkan setiap sesi tersimpan di semua tool. Sesi bersifat lokal-perangkat. Untuk menatanya, buka **Proyek** (di bawah).

## Proyek

![Projects - saved sessions organised into nestable folders](/t/url-shot?url=%2F%23%2Fp&width=1440&height=900&dpi=192&waitMs=1200&walker=1&format=svg&localize=1&dark=1&filename=projects)

**Proyek** - buka dari tab **Proyek** di samping **Tool**, atau dari **Profil → Penyimpanan → Tata di Proyek** - adalah rumah bagi semua yang telah Anda simpan, dan bekerja seperti pengelola berkas:

- **Folder bersarang.** Kelompokkan sesi tersimpan ke dalam folder, dan folder di dalam folder, sedalam yang Anda suka. Buat folder, ganti namanya, atau seret sebuah ubin ke folder lain untuk memindahkannya; breadcrumb memandu Anda kembali ke atas. Folder **Tak berkategori** yang selalu ada menampung apa pun yang belum diarsipkan.
- **Arsipkan pekerjaan baru langsung.** Di dalam folder, **+ Tool baru** membuka sebuah tool dan mengarsipkan penyimpanan pertamanya ke folder tersebut secara otomatis.
- **Pilih-banyak (desktop).** Centang kotak centang sebuah ubin, seret kotak seleksi melintasi kanvas kosong, atau **Shift/Cmd-klik**; **klik-kanan** sebuah ubin untuk menu konteksnya. Lalu lakukan tindakan pada seluruh seleksi sekaligus.
- **Render seluruh folder atau seleksi.** **Render folder** mengekspor setiap sesi tersimpan dalam sebuah folder - termasuk sub-foldernya - sebagai satu `.zip` bersarang. **Render seleksi** melakukan hal yang sama untuk seleksi-banyak mana pun, dan satu sesi tunggal me-render langsung ke berkasnya sendiri. Tanpa perlu Batch/Pro.
- **Bagikan sesi tersimpan.** Klik-kanan sebuah sesi → **Bagikan tautan** untuk menyalin tautan yang membukanya kembali dengan input yang persis sama (dialog Bagikan lengkap - lihat di bawah).

## Membagikan tautan

Setiap input tertangkap dalam URL halaman, jadi sebuah tautan itu *adalah* desainnya. Gunakan **Bagikan** di kontrol ekspor - atau **Bagikan tautan** pada sesi tersimpan mana pun di Proyek - untuk membuka **dialog Bagikan**: tautan siap-salin plus sakelar untuk mengenkripsi tautan dan apa yang terjadi saat dibuka (layar penuh, panel ekspor terbuka, unduh-saat-buka dengan `&export`, atau salin-ke-papan-klip dengan `&copy`). 

Desain besar akan menghasilkan URL panjang, jadi dialog ini juga menawarkan **Tautan terpendek** yang mengemas seluruh keadaan menjadi token ringkas - bentuk yang mudah dibaca selalu tersedia juga. Tempelkan ke rekan kerja, tandai sebagai bookmark, atau commit ia. (Detail lengkap: [Mode URL](/info/url-mode.html).)

> Gambar yang Anda unggah dari perangkat Anda **tidak** disertakan dalam tautan yang dibagikan - gambar itu hanya ada di mesin Anda.

## Kamera langsung (tool reaktif-gerakan)

**Filter** foto - Halftone, Scanline, Posterize, Duotone - menampilkan tombol **Siaran langsung** di tempat kamera tersedia. Nyalakan dan efeknya melacak webcam Anda bingkai demi bingkai, sehingga bereaksi terhadap gerakan; Anda dapat merekam hasilnya ke GIF, WebM, atau MP4. Bingkai dibaca dan diproses **di perangkat Anda** dan tidak pernah meninggalkannya, dan kamera dilepaskan begitu Anda berhenti atau meninggalkan tool. (Setiap pemilih gambar juga memiliki **Ambil foto** untuk menangkap satu bingkai sebagai gambar di-perangkat.)

## Gambar saya

![The View and sort popover in Projects open, with a theme row, a View choice of Preview or List, and Name, Date added and Last modified under Sort](/t/url-shot?url=%2F%23%2Fp&width=900&height=700&dpi=192&waitMs=1400&drive=click%3A.projects-viewopts&cropSelector=.projects-viewmenu&walker=1&format=svg&dark=1&filename=misc-projects-sort)

![Two tool cards ticked in the Tools gallery, with the floating selection bar offering Available offline, View sessions, Favourite, Hide and Copy link](/t/url-shot?url=%2F%23%2F&width=1440&height=900&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&drive=click%3A%5Bdata-select%3D%22qr-code%22%5D%3Bclick%3A%5Bdata-select%3D%22mesh-gradient%22%5D&waitSelector=.gallery-view%5Bdata-shots-settled%5D&walker=1&format=svg&dark=1&filename=misc-bulkbar-gallery)

Ketika sebuah tool memungkinkan Anda menambahkan gambar dari perangkat Anda, gambar itu diperkecil, dilucuti data EXIF/GPS-nya, dan disimpan ke pustaka **Gambar saya** pribadi Anda (di bawah **Profil → Penyimpanan**). Gunakan kembali di tool mana pun. Pustaka ini dibatasi dan sepenuhnya lokal - kelola atau hapus gambar di sana.

## Katalog - pustaka aset Anda

![The Catalogue - brand assets, swatches and fonts, plus your own uploads](/t/url-shot?url=%2F%23%2Fc%3Fsection%3Dswatches%2Cfonts&width=1440&height=900&dpi=96&waitMs=2400&css=.plat-swatch-grid~%2A%7Bdisplay%3Anone%7D&walker=1&format=svg&localize=1&dark=1&filename=catalogue)

**Katalog** (`#/c`, atau tautan **Katalog** di menu) mengumpulkan semua yang dapat digunakan tool Anda - logo brand, gambar, audio, dan motion, dikelompokkan berdasarkan jenis - dan di sinilah **berkas kreatif Anda sendiri** juga tinggal. Tanpa server, tanpa konsol admin, tanpa pull request: semuanya ada di perangkat Anda.

- **Bawa berkas Anda masuk.** Seret gambar, SVG, klip audio, video, Lottie, atau PDF apa pun ke area unggah - atau klik untuk memilih - dan ia langsung mendarat di katalog Anda, siap di pemilih aset setiap tool. Impor sebanyak yang Anda mau; ia tidak pernah meninggalkan perangkat Anda.
- **Favoritkan yang sering Anda gunakan.** Beri ★ pada sebuah aset (atau swatch brand) dan ia tersemat di puncak setiap pemilih, sehingga logo atau warna andalan Anda hanya sekali klik.
- **Rapikan.** Kategorikan ulang sebuah aset ke grup berbeda, sembunyikan aset brand bersama yang tidak Anda gunakan (dengan **Tampilkan tersembunyi** untuk memunculkannya kembali), atau hapus unggahan Anda sendiri sepenuhnya.

### Bawa palet dan font Anda ke mana saja

![The Swatches panel - the five palette download buttons across the top, then every brand colour as a copyable chip](/t/url-shot?url=%2F%23%2Fc%3Fsection%3Dswatches&width=1440&height=900&dpi=96&waitMs=1800&css=.cat-group%3Anot%28%5Bdata-group%3Dswatches%5D%29%7Bdisplay%3Anone%7D&cropSelector=%5Bdata-group%3Dswatches%5D&walker=1&format=svg&dark=1&filename=use-swatch-downloads)

Panel **Swatch** pada Katalog bukan sekadar untuk referensi - klik sebuah warna untuk menyalinnya, atau **unduh seluruh palet brand** dalam format yang dipahami tool lain Anda:

- **Token desain (JSON)**, **variabel CSS**, atau **kelas CSS** - sematkan brand langsung ke dalam stylesheet atau build;
- **Adobe Swatch Exchange (.ase)** - muat ke dalam Illustrator atau Photoshop;
- **Palet GIMP (.gpl)** - untuk GIMP atau Inkscape.

Panel **Font** mencantumkan tipografi brand Anda dengan **unduh** di samping masing-masing, untuk dipasang secara lokal atau diserahkan ke percetakan. (Tab Warna pada [Brand Studio](/info/brand-studio.html) menawarkan unduhan palet yang sama.)

Aset adalah separuh dari jalur terbuka, lakukan-sendiri; separuh lainnya adalah **membuat tool Anda sendiri** - kanvas bebas (Layout Studio, dijelaskan di atas) memungkinkan Anda membangunnya secara visual, tanpa perlu kode.

## Suara & aksesibilitas

Lolly bertujuan agar nyaman digunakan oleh semua orang. Antarmukanya dapat dinavigasi dengan keyboard, kontrol khusus membawa label yang tepat untuk pembaca layar, dan pratinjau langsung setiap tool ditampilkan sebagai satu gambar berlabel yang menjelaskan apa yang sedang dibuatnya.

Lapisan lembut **suara bantu** mengonfirmasi apa yang Anda lakukan - tiba di galeri, pemeriksaan Content Credentials yang valid vs. tidak valid, menutup panel, mengganti filter. Ini **aktif secara bawaan** tetapi selalu opsional: matikan **Suara** di mana pun sakelar itu muncul (popover opsi setiap tampilan, atau **Profil**), dan pilihan tersebut diingat.

Di samping sakelar itu ada **Neurospicy Mode** - trek fokus latar yang menenangkan, opsional, yang berputar pelan sementara Anda bekerja. Menyalakannya membuka **dok pemutar** kecil di sudut bawah yang mengikuti Anda di seluruh aplikasi; dari sana Anda dapat mencari dan memilih trek, melompat maju dan mundur, mengatur volume, serta memperkecil atau menutupnya. Daftar trek mencakup beberapa kategori - lagu *Lolly Sings* prosedural, loop dan beat ambien, audio unggahan Anda sendiri, serta segelintir stasiun **radio** internet langsung (ini butuh koneksi; selebihnya berputar secara offline). Ini **nonaktif secara bawaan** dan, seperti Suara, diingat lintas sesi dan perangkat. Mematikan Suara juga membisukan trek fokus.

## Penyimpanan & privasi

Semuanya disimpan dalam basis data lokal browser Anda (IndexedDB): profil Anda, sesi tersimpan, gambar unggahan, dan cache konten katalog yang diunduh. **Profil → Penyimpanan** menampilkan penggunaan dan memungkinkan Anda:

- **Bersihkan cache** - buang konten katalog yang diunduh (tersinkron ulang saat pemuatan berikutnya).
- **Hapus semua data saya** - hapus total profil, sesi, dan gambar. *Tidak dapat dibatalkan.*

![The storage card on a phone-width screen: every category of on-device data named, with the Clear all my data button at the bottom](/t/url-shot?url=%2F%23%2Fprofile%3Ffocus%3Dstorage-section&width=430&height=1600&dpi=192&waitMs=2400&css=.welcome-dialog%2C.personalize-nudge%2C.store-manages%2C.storage-subsection%2C.store-selbar%2C.store-chip-val%2C%23store-hero-num%2C%23store-headroom%2C%23store-quota%2C%23store-reclaim%7Bdisplay%3Anone%7D&format=svg&walker=1&cropSelector=%23storage-section&dark=1&filename=pv-storage-clear)

Tidak ada yang dikirim ke mana pun. Tanpa telemetri, tanpa render awan.

## Berpindah ke perangkat lain

Karena semuanya tinggal di perangkat Anda, **Profil → Penyimpanan → Pindah ke perangkat lain** memungkinkan Anda membawa semuanya ke pemasangan kedua - tanpa akun, tanpa awan:

- **Ekspor data saya** mengunduh satu `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` (bagian nama berasal dari profil Anda dan dihilangkan jika tak diisi; `<n>` adalah penghitung per-hari agar ekspor pada hari yang sama tidak bertabrakan) yang berisi profil Anda, setiap sesi tersimpan (dengan thumbnailnya), gambar unggahan Anda, dan preferensi Anda (tema, lebar bilah samping, statistik aktivitas lokal).
- **Impor data…** pada pemasangan lain membaca kembali berkas itu. Ia **menggabungkan**: apa pun dengan nama yang sama (profil Anda, slot sesi, sebuah gambar) diganti oleh salinan yang diimpor; segala hal lain di perangkat itu dipertahankan. Sesi tersimpan menautkan ulang ke gambar impor Anda secara otomatis.

Cache katalog tidak disertakan - ia mengunduh dirinya sendiri lagi di perangkat baru. Bundel ini adalah zip biasa (`manifest.json` + `profile.json` + `sessions.json` + `assets.json` + `assets/blobs/…` + `prefs.json`, id format `lolly-backup`), sehingga bertahan utuh melalui email, USB, atau AirDrop dan merupakan format yang sama yang dibaca setiap shell. Setiap bagian diberi checksum, sehingga berkas yang rusak saat transit tertangkap saat impor alih-alih dipulihkan setengah-rusak. (Spesifikasi format lengkap: [Transfer Data](/info/data-transfer.html).)

## Mengimpor desain (Figma, Penpot, Illustrator, InDesign)

Anda dapat membawa desain yang sudah ada ke dalam Lolly dan terus mengerjakannya: buka **Layout Studio**, klik **Impor desain** di bilah alat kanvas, dan pilih Figma **.fig** atau SVG, Penpot **.penpot**, Illustrator **.ai** / **.pdf**, atau InDesign **.idml**. Lapisan menjadi kotak yang dapat disunting di kanvas bebas - teks tetap dapat diketik ulang, gambar mendarat di **Gambar saya**, dan tipografi serta warna menyesuaikan dengan global brand - lalu hasilnya disimpan, dibagikan, dan di-render seperti sesi lainnya. Penguraiannya terjadi sepenuhnya di perangkat Anda. Detail lengkap: **[Impor desain](/info/design-import.html)**.

## Mengekspor

Lihat **[Ekspor & Format](/info/exporting.html)** untuk cerita lengkapnya - memilih format, ukuran keluaran dan satuan cetak, transparansi, video, serta salin/bagikan. Singkatnya: pilih format, atur ukuran jika perlu, dan **Unduh** (atau **Salin** ke papan klip).

## Mode Batch (Pro)

![The batch toolbar - zip name, units, DPI and the format every row inherits, with Sessions and Render on the right](/t/url-shot?url=%2F%23%2Fpro&width=1440&height=900&dpi=192&waitMs=3500&cropSelector=.pro-toolbar&walker=1&format=svg&dark=1&filename=use-batch-toolbar)

Untuk pengguna mahir, **Batch** (ditautkan dari galeri, dibatasi di balik flag fitur Pro, yang aktif secara bawaan) me-render banyak variasi sekaligus - sebuah kisi di mana setiap baris adalah satu set input, diekspor bersama. Ideal untuk melokalkan sebuah kartu ke belasan bahasa atau menghasilkan setiap varian ukuran dalam satu langkah. Isi baris dengan mengetik, menempel langsung dari spreadsheet, atau mengimpor CSV (Anda juga dapat mengekspornya kembali), dan atur format, ukuran, serta nama berkas keluaran per-baris. Simpan seluruh kisi sebagai **sesi batch** bernama yang membuka kembali dari galeri, dan unduh setiap baris sebagai satu `.zip`.

Batch untuk menghasilkan **banyak varian dari satu template** sekaligus. Untuk me-render ulang sesi yang **sudah Anda simpan**, gunakan **Proyek → Render folder / Render seleksi** (di atas) - tanpa perlu Pro.

## Offline & pemasangan

Lolly adalah PWA. Setelah pemuatan pertama, ia bekerja **offline** - pasang dari bilah alamat browser Anda (atau *Add to Home Screen* di ponsel) untuk pengalaman layar penuh seperti aplikasi. Ia memperbarui dirinya sendiri saat Anda kembali daring.
