# Menggunakan Lolly

Panduan praktikal untuk *menggunakan* aplikasi ini - membuka alat, bekerja dengan kanvas, mengeksport, menyimpan, dan berkongsi. Semuanya di sini berjalan **pada peranti anda**: tiada akaun, tiada muat naik, tiada internet diperlukan selepas pemuatan pertama.

> Baru di sini? [Mula Pantas](/info/quickstart.html) membolehkan anda mula menghasilkan sesuatu dalam beberapa minit, dan [Lolly untuk Operator](/info/operators.html) merangkumi pemasangan/penggunaan aplikasi; halaman ini pula tentang cara mengendalikannya sebaik sahaja ia dibuka.

## Membuka alat

![The tool gallery - every tool as a card, grouped by category](/t/url-shot?url=%2F%23%2F&width=1440&height=900&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&tolerance=0.03&format=png&localize=1&filename=gallery)

![A tool's split view - controls on one side, the live canvas on the other](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&format=png&localize=1&filename=tool-qr-code)

Skrin utama ialah **galeri** - setiap alat, dikumpulkan mengikut kategori. Klik kad untuk membuka alat; jika anda pernah menggunakannya sebelum ini, butang **Sambung** akan menyambung semula sesi terkini anda. Gunakan kotak carian untuk menapis mengikut nama.

Setiap alat ialah paparan berpisah: **kawalan** di satu sisi, **pratonton** langsung (kanvas) di sisi lain. Ubah mana-mana kawalan dan pratonton akan dikemas kini serta-merta.

> Beberapa alat (seperti **Layout Studio**) pula dibuka sebagai **kanvas bebas** - permukaan manipulasi-langsung tanpa bingkai antara muka (chromeless), tempat anda menyeret, menyaiz semula, memutar dan melekatkan kotak teks, bentuk dan imej, serta dwiklik untuk menyunting teks di situ juga. Ia dieksport melalui laluan pemaparan yang sama seperti alat lain, jadi kanvas itu *adalah* fail itu sendiri. Lihat [Kanvas bebas](#the-free-canvas-layout-studio) di bawah.

## Kanvas (pratonton)

Pratonton sentiasa menunjukkan dengan tepat apa yang akan dieksport.

**Desktop**

- **Zum:** Tatal Cmd/Ctrl, atau cubit pada trackpad - zum akan berpusat pada penunjuk anda.
- **Pan:** tahan **Space** sambil menyeret, atau seret dengan **butang tengah tetikus**. (Klik biasa kekal bebas untuk mengklik bahagian reka bentuk.)
- **Papan kekunci:** `0` = muat ke tetingkap · `1` = 100% · `+` / `−` = zum.
- **HUD Zum:** kawalan kecil `−  NN%  +  Fit` di penjuru. Klik peratusan untuk menogol antara Fit ↔ 100%.

**Sentuhan**

- **Cubit** untuk zum, **seret** untuk pan, **ketik dua kali** untuk set semula ke muat penuh.

**Klik untuk melompat ke kawalan:** klik mana-mana elemen dalam reka bentuk dan input bar sisi yang sepadan akan mendapat fokus dan skrol ke pandangan - bagi kumpulan baris berulang, ia akan membuka baris tepat yang anda klik, jadi menyunting apa yang anda lihat hanya sejauh satu ketikan.

Perubahan dimensi sentiasa akan menetapkan semula pandangan kepada muat yang kemas.

### Kanvas bebas (Layout Studio)

![Layout Studio's free canvas - the artboard with its surrounding pasteboard](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio&width=1440&height=900&dpi=192&waitMs=2000&format=svg&localize=1&filename=layout-studio)

Alat kanvas bebas menambah permukaan kerja *di sekeliling* artboard, seperti pasteboard seorang pereka grafik:

- **Pementasan luar-kanvas.** Seret kotak melepasi tepi bingkai dan ia akan kekal **kelihatan dan boleh dipilih** sepenuhnya - parkir elemen ke tepi semasa anda menyusun komposisi, kemudian seret semula ke dalam. Segala-galanya di luar bingkai akan **dikaburkan secara lembut** supaya kawasan eksport sentiasa mudah dibaca sepintas lalu, dan bingkai mengekalkan bayangnya untuk menandakan dengan tepat di mana fail itu bermula.
- **Hanya bingkai yang dieksport.** Fail yang dieksport dibatasi oleh artboard - apa-apa yang tertinggal di luar (atau bahagian kotak yang tergantung melepasi tepi) hanya akan dipotong keluar daripada output, sama ada dalam format raster mahupun vektor.
- **Zum keluar melepasi Fit** (sehingga 20%) untuk melihat keseluruhan pasteboard apabila anda telah mementaskan perkara jauh di luar bingkai.
- **Artboard boleh disaiz semula.** Menukar dimensi eksport akan menyaiz semula bingkai di tempatnya; kotak-kotak mengekalkan kedudukan masing-masing, jadi anda boleh membingkai semula susun atur di sekeliling kandungan sedia ada.

## Pada telefon

Pada skrin sempit, susun atur akan mengalir semula kepada satu lajur:

- **Kawalan menjadi kepingan (sheet)** di bahagian atas dengan **pemegang seret** pada tepi bawahnya. Seret pemegang itu untuk menyaiz semulanya - ia akan melekat pada **peek / half / full** - atau **ketik** pemegang untuk menogol antara dilipat ↔ dikembangkan. Pratonton mengisi ruang di bawah dan kekal kelihatan semasa anda menyunting.
- Butang terapung **Render** membuka kepingan **Eksport** - semua kawalan format, saiz, salin, simpan, dan muat turun di satu tempat. Tutupnya dengan mengetik latar belakang.

## Kawalan (input)

Alat hanya mendedahkan input yang sepatutnya berubah-ubah - semua yang lain (warna, susun atur, tipografi, logik) dikunci oleh pencipta alat, jadi apa sahaja yang anda hasilkan akan mematuhi peraturan yang ditetapkan oleh pencipta itu. Input termasuk teks, penggelangsar (slider), pemilih warna, menu lungsur, tarikh, pemilih imej, dan kumpulan baris berulang. Sebahagiannya dikumpulkan di bawah seksyen yang boleh dilipat.

**Set semula:** *Kosongkan perubahan* mengembalikan setiap input kepada nilai lalainya.

## Butiran & gambar kepala anda

**Profil** (di penjuru kanan atas galeri) menyimpan nama anda, butiran hubungan, dan **gambar kepala** pilihan. Alat yang memerlukan medan tersebut akan mengisinya secara automatik - tetapkan sekali sahaja dan tandatangan e-mel, lockup, serta lencana anda akan terisi dengan sendirinya. Anda masih boleh mengatasi mana-mana medan bagi setiap sesi. Aktifkan **Guna butiran saya** supaya sesuatu alat boleh membacanya.

Gambar kepala dan butiran anda kekal **hanya pada peranti ini**. Satu profil boleh menjadi lebih daripada sekadar diri anda - sebuah pasukan atau peranan yang anda ambil alih dari semasa ke semasa. Lihat **[Profil](/info/profile.html)** untuk gambaran penuh, termasuk cara menyimpan lebih daripada satu.

## Menyimpan & menyambung semula

Klik **Simpan** untuk menyimpan input semasa sebagai satu sesi bagi alat tersebut. Anda boleh menyimpan pelbagai sesi bernama bagi setiap alat; butang **Sambung** pada setiap alat akan membuka semula sesi terkini anda, dan **butang sejarah** (penjuru kanan atas, di sebelah profil anda) menyenaraikan setiap sesi yang disimpan merentasi semua alat. Sesi adalah setempat pada peranti. Untuk menyusunnya, buka **Projek** (di bawah).

## Projek

![Projects - saved sessions organised into nestable folders](/t/url-shot?url=%2F%23%2Fp&width=1440&height=900&dpi=192&waitMs=1200&format=svg&localize=1&filename=projects)

**Projek** - buka daripada tab **Projek** di sebelah **Alat**, atau daripada **Profil → Storan → Susun dalam Projek** - ialah tempat untuk segala yang telah anda simpan, dan ia berfungsi seperti pengurus fail:

- **Folder yang boleh disarangkan.** Kumpulkan sesi yang disimpan ke dalam folder, dan folder di dalam folder, sedalam yang anda mahu. Cipta folder, namakan semula, atau seret jubin ke atas folder lain untuk memindahkannya; jejak roti (breadcrumb) membawa anda kembali ke atas. Folder **Tidak Dikategorikan** yang sentiasa wujud menyimpan apa-apa yang belum difailkan.
- **Failkan kerja baharu terus ke dalam.** Di dalam folder, **+ Alat baharu** membuka alat dan memfailkan simpanan pertamanya ke dalam folder itu secara automatik.
- **Pilihan berganda (desktop).** Tandakan kotak semak pada jubin, seret kotak pilihan merentasi kanvas kosong, atau **Shift/Cmd-klik**; **klik kanan** pada jubin untuk menu konteksnya. Kemudian lakukan tindakan ke atas keseluruhan pilihan sekali gus.
- **Render seluruh folder atau pilihan.** **Render folder** mengeksport setiap sesi yang disimpan dalam sesuatu folder - termasuk sub-foldernya - sebagai satu `.zip` bersarang. **Render selection** melakukan perkara yang sama untuk mana-mana pilihan berganda, dan satu sesi tunggal akan dirender terus kepada failnya sendiri. Tidak memerlukan Batch/Pro.
- **Kongsi sesi yang disimpan.** Klik kanan pada sesi → **Share link** untuk menyalin pautan yang membuka semula sesi tersebut dengan input yang sama persis (dialog Kongsi penuh - lihat di bawah).

## Berkongsi pautan

Setiap input dirakam dalam URL halaman, jadi pautan itu *adalah* reka bentuknya. Gunakan **Kongsi** dalam kawalan eksport - atau **Share link** pada mana-mana sesi yang disimpan dalam Projek - untuk membuka **dialog Kongsi**: satu pautan sedia untuk disalin berserta togol untuk menyulitkan pautan dan apa yang berlaku apabila ia dibuka (skrin penuh, panel eksport dikembangkan, muat turun-semasa-dibuka dengan `&export`, atau salin-ke-papan-keratan dengan `&copy`).

Reka bentuk yang besar akan menghasilkan URL yang panjang, jadi dialog itu turut menawarkan **Shortest link** yang memampatkan keseluruhan keadaan ke dalam token yang ringkas - bentuk yang boleh dibaca juga sentiasa tersedia. Tampalkannya kepada rakan sekerja, tanda buku (bookmark), atau komitkannya. (Butiran penuh: [Mod URL](/info/url-mode.html).)

> Imej yang anda muat naik daripada peranti anda **tidak** disertakan dalam pautan yang dikongsi - ia hanya wujud pada mesin anda.

## Kamera langsung (alat responsif-gerakan)

**Filters** foto - Halftone, Scanline, Posterize, Duotone - memaparkan butang **Go live** apabila kamera tersedia. Hidupkannya dan kesan itu akan menjejaki webcam anda bingkai demi bingkai, jadi ia bertindak balas terhadap pergerakan; anda boleh merakam hasilnya ke GIF, WebM atau MP4. Bingkai dibaca dan diproses **pada peranti anda** dan tidak sekali-kali meninggalkannya, dan kamera dilepaskan sebaik sahaja anda berhenti atau meninggalkan alat itu. (Mana-mana pemilih imej turut mempunyai **Take a photo** untuk menangkap satu bingkai tunggal sebagai imej pada peranti.)

## Imej saya

Apabila sesuatu alat membenarkan anda menambah imej daripada peranti anda, ia akan diturunskala, dibuang data EXIF/GPS-nya, dan disimpan ke dalam pustaka peribadi **Imej saya** anda (di bawah **Profil → Storan**). Guna semula imej itu merentasi mana-mana alat. Pustaka ini mempunyai had dan sepenuhnya setempat - urus atau padam imej di situ.

## Katalog - pustaka aset anda

![The Catalogue - brand assets, swatches and fonts, plus your own uploads](/t/url-shot?url=%2F%23%2Fc%3Fsection%3Dswatches%2Cfonts&width=1440&height=900&dpi=192&waitMs=1600&format=png&localize=1&filename=catalogue)

**Katalog** (`#/c`, atau pautan **Katalog** dalam menu) mengumpulkan segala yang boleh digunakan oleh alat anda - logo jenama, imej, audio, dan gerakan (motion), dikumpulkan mengikut jenis - dan di situ jugalah **fail kreatif anda sendiri** disimpan. Tiada pelayan, tiada konsol pentadbir, tiada pull request: semuanya pada peranti anda.

- **Bawa masuk fail anda.** Seret mana-mana imej, SVG, klip audio, video, Lottie, atau PDF ke kawasan muat naik - atau klik untuk memilih - dan ia akan mendarat dalam katalog anda serta-merta, sedia dalam pemilih aset setiap alat. Masukkan seberapa banyak yang anda mahu; ia tidak sekali-kali meninggalkan peranti anda.
- **Jadikan kegemaran apa yang kerap anda guna.** Tandakan ★ pada sesuatu aset (atau swatch jenama) dan ia akan disemat di bahagian atas setiap pemilih, jadi logo atau warna pilihan utama anda hanya sejauh satu klik.
- **Kemaskan.** Kategorikan semula sesuatu aset ke dalam kumpulan berbeza, sembunyikan aset jenama kongsi yang anda tidak guna (dengan **Show hidden** untuk membawanya kembali), atau padam terus muat naik anda sendiri.

### Bawa palet dan fon anda ke mana-mana

Panel **Swatches** Katalog bukan sekadar untuk rujukan - klik warna untuk menyalinnya, atau **muat turun keseluruhan palet jenama** dalam format yang difahami oleh alat anda yang lain:

- **Token reka bentuk (JSON)**, **pemboleh ubah CSS (CSS variables)**, atau **kelas CSS (CSS classes)** - masukkan jenama terus ke dalam helaian gaya (stylesheet) atau binaan (build);
- **Adobe Swatch Exchange (.ase)** - muatkannya ke dalam Illustrator atau Photoshop;
- **Palet GIMP (.gpl)** - untuk GIMP atau Inkscape.

Panel **Fonts** menyenaraikan muka taip jenama anda dengan **muat turun** di sebelah setiap satu, untuk dipasang secara tempatan atau diserahkan kepada kedai cetak. (Tab Warna [Brand Studio](/info/brand-studio.html) turut menawarkan muat turun palet yang sama.)

Aset ialah separuh daripada laluan terbuka, buat-sendiri (do-it-yourself); separuh lagi ialah **membuat alat anda sendiri** - kanvas bebas (Layout Studio, diterangkan di atas) membolehkan anda membina satu secara visual, tanpa perlu kod.

## Bunyi & kebolehcapaian

Lolly bermatlamat untuk selesa digunakan oleh semua orang. Antara muka boleh dinavigasi menggunakan papan kekunci, kawalan tersuai membawa label yang sesuai untuk pembaca skrin, dan pratonton langsung setiap alat didedahkan sebagai satu imej berlabel tunggal yang menerangkan apa yang sedang dihasilkan.

Satu lapisan lembut **bunyi bantuan** mengesahkan apa yang anda lakukan - tiba di galeri, semakan Content Credentials yang sah lawan tidak sah, menutup panel, menukar penapis. Ia **dihidupkan secara lalai** tetapi sentiasa pilihan: matikan **Bunyi** di mana-mana sahaja suis itu muncul (popover pilihan setiap paparan, atau **Profil**), dan pilihan anda akan diingati.

Di sebelah suis itu terdapat **Neurospicy Mode** - trek fokus latar belakang yang menenangkan dan bersifat pilihan, yang dimainkan secara senyap semasa anda bekerja. Menghidupkannya akan membuka **dok pemain (player dock)** kecil di penjuru bawah yang mengikut anda merentasi aplikasi; daripadanya anda boleh mencari dan memilih trek, melangkau ke depan dan ke belakang, menetapkan kelantangan, serta meminimum atau menutupnya. Senarai trek merangkumi beberapa kategori - lagu *Lolly Sings* prosedural, gelung dan rentak ambien, audio yang anda muat naik sendiri, dan segelintir stesen **radio** internet langsung (ini memerlukan sambungan; selebihnya dimainkan luar talian). Ia **dimatikan secara lalai** dan, seperti Bunyi, diingati merentasi sesi dan peranti. Mematikan Bunyi turut membisukan trek fokus tersebut.

## Storan & privasi

Semuanya disimpan dalam pangkalan data setempat pelayar anda (IndexedDB): profil anda, sesi yang disimpan, imej yang dimuat naik, dan cache kandungan katalog yang dimuat turun. **Profil → Storan** menunjukkan penggunaan dan membolehkan anda:

- **Kosongkan cache** - buang kandungan katalog yang dimuat turun (akan disegerakkan semula pada pemuatan seterusnya).
- **Kosongkan semua data saya** - padam profil, sesi, dan imej. *Tidak boleh dibuat asal.*

Tiada apa-apa dihantar ke mana-mana. Tiada telemetri, tiada pemaparan awan.

## Berpindah ke peranti lain

Oleh sebab semuanya berada pada peranti anda, **Profil → Storan → Berpindah ke peranti lain** membolehkan anda membawa semuanya ke pemasangan kedua - tiada akaun, tiada awan:

- **Export my data** memuat turun satu fail `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` (bahagian nama itu diambil daripada profil anda dan digugurkan jika tidak ditetapkan; `<n>` ialah kaunter setiap hari supaya eksport pada hari yang sama tidak berlanggar) yang mengandungi profil anda, setiap sesi yang disimpan (berserta lakaran kecilnya), imej yang anda muat naik, dan keutamaan anda (tema, lebar bar sisi, statistik aktiviti setempat).
- **Import data…** pada pemasangan yang satu lagi akan membaca semula fail tersebut. Ia akan **menggabungkan**: apa-apa yang mempunyai nama yang sama (profil anda, slot sesi, imej) akan digantikan dengan salinan yang diimport; segala-galanya yang lain pada peranti itu dikekalkan. Sesi yang disimpan akan menyambung semula secara automatik kepada imej yang anda import.

Cache katalog tidak disertakan - ia akan memuat turun semula sendiri pada peranti baharu. Bungkusan itu ialah zip biasa (`manifest.json` + `profile.json` + `sessions.json` + `assets.json` + `assets/blobs/…` + `prefs.json`, id format `lolly-backup`), jadi ia kekal utuh melalui e-mel, USB, atau AirDrop dan merupakan format yang sama yang dibaca oleh setiap shell. Setiap bahagian mempunyai checksum, jadi fail yang rosak semasa perpindahan akan dikesan semasa import dan bukannya dipulihkan dalam keadaan separuh rosak. (Spesifikasi format penuh: [Pemindahan Data](/info/data-transfer.html).)

## Mengimport reka bentuk (Figma, Penpot, Illustrator, InDesign)

Anda boleh membawa reka bentuk sedia ada ke dalam Lolly dan terus mengerjakannya: buka **Layout Studio**, klik **Import reka bentuk** pada bar alat kanvas, dan pilih fail Figma **.fig** atau SVG, fail Penpot **.penpot**, fail Illustrator **.ai** / **.pdf**, atau fail InDesign **.idml**. Lapisan menjadi kotak yang boleh disunting pada kanvas bebas - teks kekal boleh ditaip semula, imej mendarat dalam **Imej saya**, dan jenis huruf serta warna akan mematuhi tetapan global jenama - kemudian hasilnya disimpan, dikongsi dan dirender seperti mana-mana sesi lain. Penghuraian berlaku sepenuhnya pada peranti anda. Butiran penuh: **[Import reka bentuk](/info/design-import.html)**.

## Mengeksport

Lihat **[Mengeksport & Format](/info/exporting.html)** untuk cerita penuh - memilih format, saiz output dan unit cetakan, ketelusan, video, serta salin/kongsi. Ringkasnya: pilih format, tetapkan saiz jika perlu, dan **Muat turun** (atau **Salin** ke papan keratan).

## Mod Batch (Pro)

Untuk pengguna mahir, **Batch** (dipautkan daripada galeri, dikawal di sebalik flag ciri Pro, yang dihidupkan secara lalai) merender banyak variasi sekali gus - satu grid di mana setiap baris ialah satu set input, dieksport bersama. Sesuai untuk melokalkan kad ke dalam sedozen bahasa atau menjana setiap varian saiz dalam satu larian. Isikan baris dengan menaip, menampal terus daripada hamparan (spreadsheet), atau mengimport CSV (anda boleh mengeksport semula satu juga), dan tetapkan format, saiz, dan nama fail output bagi setiap baris. Simpan keseluruhan grid sebagai **sesi batch** bernama yang boleh dibuka semula daripada galeri, dan muat turun setiap baris sebagai satu `.zip` tunggal.

Batch digunakan untuk menjana **banyak varian bagi satu templat** sekali gus. Untuk merender semula sesi yang **sudah anda simpan**, gunakan **Projek → Render folder / Render selection** (di atas) - tidak memerlukan Pro.

## Luar talian & pemasangan

Lolly ialah PWA. Selepas pemuatan pertama, ia berfungsi **luar talian** - pasangkannya daripada bar alamat pelayar anda (atau *Add to Home Screen* pada mudah alih) untuk pengalaman seperti aplikasi, skrin penuh. Ia mengemas kini dirinya sendiri apabila anda kembali dalam talian.
