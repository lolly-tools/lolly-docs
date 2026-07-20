# FAQ

Pertanyaan yang sering diajukan yang ditampilkan dalam akordeon di halaman arahan `/info`.

**Cara memelihara:** setiap heading `##` di bawah adalah sebuah pertanyaan; semua yang ada di bawahnya
(sampai `##` berikutnya) adalah jawabannya. Jawaban menggunakan markdown ringan yang sama seperti
bagian situs lainnya - pisahkan paragraf dengan baris kosong. Tambah, hapus, atau
atur ulang pertanyaan di sini lalu jalankan ulang `npm run build:info` (atau `npm run dev:web`).
Semua yang berada di atas `##` pertama (judul ini dan catatan ini) diabaikan oleh proses build.

## Apa yang terjadi ketika saya ikut serta di halaman /profile?

Saat pertama kali menggunakan Lolly, semua yang Anda ketik di mana pun sepenuhnya bersifat pribadi sampai Anda dengan sengaja ingin informasi tersebut keluar melalui media atau tautan berbagi (jika daring).

Dengan opsi ikut serta dipilih, kami menyematkan sebagian informasi profil Anda sebagai provenans ke dalam aset dan bundel untuk mengidentifikasi Anda sebagai sumbernya.

Lolly menghasilkan konten dalam jumlah besar. Kami menerapkan pendekatan minimalisasi data yang ketat untuk mencegah risiko.

### Apa itu feature flag?

Feature flag menyalakan atau mematikan bagian-bagian Lolly. Biasanya seorang administrator yang mengendalikannya - dengan Lolly, Anda yang memegang kendali.

## Bagaimana cara mendapatkan aplikasi seluler atau desktop?

Siapa pun dapat mendistribusikan aplikasinya sendiri; alat dan konfigurasi aplikasi tersebut dapat sangat bervariasi tergantung pada audiens yang dituju. Jadi tidak ada satu aplikasi tunggal kecuali Anda membuatnya sendiri atau seseorang yang relevan memberikannya kepada Anda.

## Mengapa namanya "Lolly Tools"?

**Lolly** Karena kebebasan itu manis.
**Tools** tidak aktif saat tidak digunakan. Tidak memata-matai Anda, tidak menjalankan program rahasia, 
Pekerjakan ia; perintah, tindakan, dan ketentuan Anda.

**Lolly** adalah istilah Australia, Selandia Baru, dan Inggris untuk 'permen' atau 'gula-gula'. Sama seperti lolly, alat sangat lezat bagi orang yang membutuhkannya.

Kami juga tertawa memikirkan waktu dan biaya yang kami hemat dengan pendekatan ini.

## Rintangan apa yang mungkin saya hadapi saat mengadopsi Lolly?

Lolly menyisip di mana pun Anda sudah menghasilkan berkas - CLI menggunakan engine yang sama
dengan Aplikasi, sehingga sebuah pipeline yang berjalan pukul 2 dini hari tidak bisa menyimpang dari apa yang dilihat seseorang di pratinjau
browser. Hambatan untuk adopsi jarang bersifat teknis; melainkan organisasional. Perkirakan hal-hal berikut:

**Katalog merek yang terkurasi harus disusun.** Lolly adalah sebuah platform, bukan
paket template Anda yang sudah jadi. Untuk *penerapan yang tata kelolanya terjaga*, seseorang mendefinisikan katalog
aset bersama (logo, palet, font sebagai ID permanen) dan menulis manifest +
template untuk setiap jenis keluaran. Namun, individu tidak harus menunggu itu - di
aplikasi terbuka siapa pun dapat mengimpor berkasnya sendiri ke dalam katalog dan membangun alat di
Layout Studio sejak hari pertama.

**Tata kelola lewat git bersifat opsional - dan asing bagi non-teknis.** Jika Anda menjalankan
katalog yang *dibagikan dan terkontrol*, "peninjauan PR *adalah* moderasinya" itu elegan bagi para
engineer dan asing bagi kebanyakan tim merek dan pemasaran. Jika orang-orang yang memegang
keputusan merek tidak hidup di git, Anda akan menginginkan alur kerja yang menjembatani mereka - atau TI
diam-diam menjadi mitra desain strategis dan penjaga gerbang institusional yang lebih luas
(dipilih oleh banyak pihak dalam lingkungan produksi jangka panjang). Tim yang tidak menginginkan
ini cukup melewatkannya.

**Ia sengaja dibuat sempit - bingkailah seperti itu.** Lolly bukan untuk konten khusus atau
hero. Ia *adalah* DAM pribadi Anda - dihidupkan dan diperkuat oleh sistem desain
Anda, alat, dan katalog - dan ia *memang* memiliki kanvas terbuka (Layout Studio), tetapi
bahkan di sana warna, tipografi, dan aset menyesuaikan dengan global desain yang aktif, sehingga
penataan bebas tetap berada di dalam sistem. Dinilai terhadap Figma atau Canva, ia akan
tampak terbatas. Dinilai sebagai apa adanya - pembuatan aset yang dioperasionalkan, berulang, dan
berskala masif - tidak ada yang menandinginya. Pembingkaian yang keliru adalah kemunduran yang paling umum.

**Manajemen perubahan di sisi produksi.** Proses yang ada berfungsi hari ini, sekalipun
keluarannya tidak sesuai merek. Mengarahkannya ke engine berarti pengujian ulang dan pembelajaran ulang,
dan "kami toh sudah bisa membuat berkas" menjadi alasan untuk tidak bermigrasi. Mulailah dengan mengonversi
satu keluaran berkualitas produksi yang sangat terlihat dan menunjukkan sebelum/sesudah secara berdampingan.

Lolly mengangkat semuanya.


## Apa yang membuat utilitas berbeda dari alat?

**Jawaban Dasar →** Utilitas tidak selalu perlu merender sehingga bisa mendapatkan UX yang berbeda. 

**Jawaban Sebenarnya →** Alasan utilitas dapat di-host di dalam Lolly Tools adalah untuk menambahkan satu lagi 'lapisan kenyamanan' pertahanan guna menekan insentif eksfiltrasi data. 

Mengapa? Karena diketahui bahwa setiap hari, orang mengambil **konten rahasia yang sudah mereka miliki** dan menyerahkannya ke
situs web sembarangan untuk melakukan satu operasi mekanis kecil:

- "**Kompres PDF ini**" → mengunggah kontrak / slip gaji / dek presentasi dewan ke entitas yang tidak dikenal.
- "**konversi HEIC ke JPG**" → mengunggah foto pribadi (dengan EXIF GPS) ke host yang didanai iklan
- "**pangkas / ubah ukuran gambar ini**" → mengunggah tangkapan layar produk atau aset yang belum dirilis
- "**format JSON ini**" / "dekode JWT ini" → menempelkan respons API, token, rahasia ke sebuah formatter
- "**gabungkan PDF-PDF ini**" → mengunggah **dua dokumen yang seharusnya tidak pernah berbagi server**

Situs-situs ini beserta ekor panjang kloningannya yang masif **tidak dapat dipercaya secara bawaan** dengan
retensi yang tidak diketahui, yurisdiksi yang tidak diketahui, subpemroses yang tidak diketahui, dan model bisnis
iklan/afiliasi yang punya segala insentif untuk menyimpan apa yang Anda berikan kepada mereka. Operasinya
sepele; **kontennya adalah biayanya.** 

Kami memenangkan perang tata kelola dengan kenyamanan dan layanan yang unggul. 

## Bisakah Lolly menyunting dan merender berkas Figma, Penpot, Illustrator, atau InDesign saya?

Ya. Buka **Layout Studio** dan klik **Impor desain**: ia menerima **.fig** asli Figma (Save local copy), ekspor **.penpot** Penpot, **.ai** atau **.pdf** Illustrator, **.idml** InDesign (File → Export → InDesign Markup), atau **SVG apa pun** (pintu lebar - hampir semua aplikasi desain mengekspornya). Semuanya diurai sepenuhnya di perangkat Anda, tanpa perlu akun atau plugin.

Lapisan tiba sebagai kotak yang dapat disunting di kanvas terbuka: teks tetap dapat diketik ulang, bentuk tetap menjadi bentuk, gambar bergabung ke pustaka di perangkat Anda, dan tipografi serta warna menyesuaikan dengan global merek. Simpan dan tata letak itu menjadi template yang dapat digunakan ulang dan dapat dialamatkan lewat URL yang bisa diisi ulang oleh siapa pun yang memiliki Lolly - dan Anda dapat menyertakan alat langsung (kode QR, sebuah bagan) yang dirender ulang saat dimuat. Dari sana ia dirender seperti hal lain di Lolly - SVG, PDF, PNG, dan sisanya, dapat direproduksi dari URL-nya. Lihat [Impor desain](/info/design-import.html).

## Bisakah Lolly mengganti merek dek PowerPoint yang sudah ada?

Ya - ada dua cara, keduanya di perangkat Anda. Utilitas **Rebrand a Deck** mengambil sebuah `.pptx` dan mengganti tema, warna dan font yang di-hardcode dengan milik merek Anda, sementara bagan, SmartArt, dan animasi tetap tidak tersentuh - Anda mendapatkan kembali sebuah `.pptx`. Atau buka dek tersebut di **Deck Builder** (Muat → jatuhkan berkasnya) untuk menyuntingnya slide demi slide sebagai objek bebas bentuk yang sudah disesuaikan dengan merek, lalu ekspor sebagai PPTX, PDF, atau video. Menjatuhkan sebuah `.pptx` pada area unggah malah akan menyimpan slide yang Anda pilih sebagai aset SVG di pustaka Anda. Lihat [Impor desain → Dek dan dokumen](/info/design-import.html#decks-and-documents).

## Apa yang terjadi pada 29 Agustus?

Alat bermerek SUSE meninggalkan proyek, dan alat contoh generik baru yang didefinisikan oleh pengguna menggantikannya.

SUSE akan mengoperasikan Lolly-nya sendiri untuk melindungi merek dagangnya.

## Seberapa banyak yang SUSE rahasiakan? (alias kapan rug-pull-nya)

Merek dagang dan alat bermerek SUSE hanya untuk demonstrasi, sampai 29 Agustus. Anda dapat menemukan instansi Lolly tanpa merek di [lolly.ART](https://lolly.art).

SUSE adalah perusahaan infrastruktur open source enterprise dengan lebih dari tiga dekade kepemimpinan platform. Produknya mencakup solusi infrastruktur Linux tingkat enterprise, Cloud Native, Edge, dan AI.

Dari sudut pandang SUSE, ini tentang membuktikan ucapan soal kedaulatan dan keamanan. Per hari ini, kemungkinan SUSE menjadikan Lolly sebuah produk mendekati nol mutlak.

Keterbukaan penuh: SUSE *memang* sedang membangun perkakas internal untuk mengintegrasikan Lolly ke dalam sistem TI-nya - itu soal penyiapan internal SUSE, bukan pengembangan publik vs. privat.

Berbicara soal sisi publik, Lolly bertujuan untuk dibangun melalui [Open Build Service](https://openbuildservice.org/), dengan artefak rantai pasok yang aman dikirimkan oleh [SUSE Application Collection](https://apps.rancher.io/applications).

Kami akan membangun sebanyak mungkin secara terbuka - Anda hanya tidak akan melihat alat bermerek SUSE dalam waktu lama, begitu pula tenaga kerja internal dan proses komersial SUSE, yang tidak berkaitan dengan Lolly.

## Apa rasa dari logo Lolly itu?

Ada yang bilang Limau, ada yang bilang Mint dan kadang Apel, Lolly menghadirkan manisnya, Anda yang mewujudkan rasanya!
