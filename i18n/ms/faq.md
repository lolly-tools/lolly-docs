# Soalan Lazim

Soalan lazim yang dipaparkan dalam akordion pada halaman utama `/info`.

**Cara mengekalkan:** setiap tajuk `##` di bawah adalah satu soalan; semua kandungan di bawahnya
(sehingga `##` seterusnya) adalah jawapannya. Jawapan menggunakan format markdown ringkas yang sama seperti
laman lain - pisahkan perenggan dengan baris kosong. Tambah, buang, atau
susun semula soalan di sini dan jalankan semula `npm run build:info` (atau `npm run dev:web`).
Semua kandungan sebelum `##` yang pertama (tajuk ini dan nota-nota ini) diabaikan oleh proses build.

## Apa yang berlaku apabila saya opt-in pada halaman /profile?

Apabila anda mula-mula menggunakan Lolly, segala yang anda taip di mana-mana adalah sepenuhnya peribadi sehingga anda sengaja mahu maklumat itu didedahkan melalui media atau pautan perkongsian (jika dalam talian).

Dengan opt-in dipilih, kami membenamkan sebahagian maklumat profil anda sebagai asal-usul (provenance) ke dalam aset dan bundle untuk mengenal pasti anda sebagai sumbernya.

Lolly menghasilkan kandungan dalam jumlah besar. Kami mengamalkan pendekatan minimalisasi data yang ketat untuk mengurangkan risiko.

### Apakah itu feature flags?

Feature flags menghidupkan atau mematikan bahagian-bahagian Lolly. Biasanya seorang pentadbir mengawal ini - dengan Lolly, andalah yang mengawal.

## Bagaimana saya boleh dapatkan aplikasi mudah alih atau desktop?

Sesiapa sahaja boleh mengedarkan aplikasi mereka sendiri, alat dan konfigurasi aplikasi tersebut akan berbeza-beza secara meluas bergantung kepada khalayak yang disasarkan. Jadi tiada satu aplikasi rasmi melainkan anda sendiri yang membinanya atau seseorang yang berkaitan memberikannya kepada anda.

## Mengapa nama "Lolly Tools"?

**Lolly** Kerana kebebasan itu manis.
**Tools** tidak aktif apabila tidak digunakan. Bukan mengintip anda, bukan menjalankan program rahsia,
suruh ia bekerja - ikut arahan, tindakan, dan syarat anda.

**Lolly** ialah istilah Australia, New Zealand, dan British untuk 'gula-gula' atau 'manisan'. Sama seperti lolly, alat-alat ini amat 'menyelerakan' bagi mereka yang memerlukannya.

Kami juga tergelak memikirkan masa dan bil yang kami jimatkan dengan pendekatan ini.

## Apakah cabaran yang boleh saya jangkakan semasa menggunapakai Lolly?

Lolly boleh disisipkan ke mana-mana sahaja anda sudah menjana fail - CLI menggunakan enjin yang sama
seperti Aplikasi, jadi larian pipeline pada jam 2 pagi tidak akan menyimpang daripada apa yang dilihat
seseorang semasa pratonton dalam pelayar. Halangan untuk penggunapakaian jarang bersifat teknikal; ia lebih
bersifat organisasi. Jangkakan perkara berikut:

**Alat dan katalog jenama perlu dikarang.** Lolly ialah sebuah platform, bukan
pek templat yang sudah siap untuk anda. Seseorang perlu mentakrifkan katalog aset (logo,
palet, fon sebagai ID kekal) dan menulis manifest + templat untuk setiap jenis
output.

**Tadbir urus berjalan melalui git.** "Semakan PR *itulah* moderasinya" adalah elegan bagi
jurutera tetapi asing bagi kebanyakan pasukan jenama dan pemasaran. Jika mereka yang memiliki
keputusan jenama tidak biasa dengan git, anda memerlukan aliran kerja yang menghubungkan mereka - atau IT
secara senyap-senyap menjadi rakan kongsi reka bentuk strategik dan penjaga pintu institusi yang lebih luas.
Ini lebih digemari oleh ramai pihak dalam persekitaran pengeluaran jangka panjang.

**Ia sengaja dibuat sempit - fahamilah ia sedemikian.** Lolly bukan untuk kandungan
tersuai atau kandungan 'hero'. Ia *memang* DAM peribadi anda - dihidupkan dan
dipertingkatkan oleh sistem reka bentuk, alat dan katalog anda - dan ia *memang*
mempunyai kanvas terbuka (Layout Studio), tetapi walaupun di situ, warna, jenis
huruf dan aset akur kepada global reka bentuk yang aktif, jadi susunan bebas kekal
di dalam sistem. Jika dinilai berbanding Figma atau Canva, ia akan kelihatan terhad.
Jika dinilai sebagai apa yang ia sebenarnya - penjanaan aset berskala besar,
berulang, dan dioperasikan sepenuhnya - tiada yang dapat menandinginya. Salah faham
kerangka ini adalah kemunduran yang paling biasa berlaku.

**Pengurusan perubahan di pihak penerbitan.** Proses sedia ada berfungsi hari ini, walaupun
outputnya tidak menepati jenama. Menghala semula proses tersebut kepada enjin bermakna
menguji semula dan belajar semula, dan "kami sudah pun boleh hasilkan fail" menjadi alasan
untuk tidak berpindah. Mulakan dengan menukar satu output pengeluaran berkualiti yang sangat
kelihatan dan tunjukkan perbandingan sebelum/selepas secara bersebelahan.

Lolly mengangkat semuanya ke tahap yang lebih tinggi.

## Apakah yang membezakan utiliti daripada alat?

**Jawapan Asas →** Utiliti tidak selalu perlu dipaparkan (render) dan oleh itu boleh mendapat UX yang berbeza.

**Jawapan Sebenar →** Sebab utiliti boleh dihoskan di dalam Lolly Tools adalah untuk menambah satu lagi 'lapisan kemudahan' pertahanan bagi mengurangkan insentif eksfiltrasi data.

Kenapa? Kerana sudah diketahui bahawa setiap hari, orang mengambil **kandungan sulit yang mereka sudah ada** dan menyerahkannya kepada
laman web rawak untuk melakukan satu operasi mekanikal yang kecil:

- "**Mampatkan PDF ini**" → memuat naik kontrak / slip gaji / dek lembaga pengarah kepada entiti yang tidak dikenali.
- "**tukar HEIC kepada JPG**" → memuat naik foto peribadi (dengan EXIF GPS) ke hos yang dibiayai iklan
- "**potong / ubah saiz imej ini**" → memuat naik tangkapan skrin produk atau aset yang belum dilancarkan
- "**format JSON ini**" / "nyahkod JWT ini" → menampal respons API, token, rahsia ke dalam pemformat
- "**gabungkan PDF-PDF ini**" → memuat naik **dua dokumen yang tidak sepatutnya berkongsi pelayan yang sama**

Laman-laman ini dan populasi klon 'ekor panjang' mereka yang sangat banyak **tidak boleh dipercayai secara lalai** dengan
tempoh penyimpanan yang tidak diketahui, bidang kuasa yang tidak diketahui, sub-pemproses yang tidak diketahui, dan model
perniagaan iklan/gabungan yang mempunyai segala insentif untuk menyimpan apa yang anda berikan kepada mereka. Operasinya
remeh; **kandungan itulah kosnya.**

Kami memenangi perjuangan tadbir urus ini dengan kemudahan dan perkhidmatan yang cemerlang.

## Bolehkah Lolly mengedit dan memaparkan fail Figma, Penpot, Illustrator atau InDesign saya?

Ya. Buka **Layout Studio** dan klik **Import reka bentuk**: ia menerima fail Figma asli **.fig** (Simpan salinan tempatan), eksport Penpot **.penpot**, fail Illustrator **.ai** atau **.pdf**, fail InDesign **.idml** (Fail → Eksport → InDesign Markup), atau **sebarang SVG** (pintu paling luas - hampir semua aplikasi reka bentuk boleh mengeksportnya). Semuanya dihurai sepenuhnya pada peranti anda sendiri, tiada akaun atau plugin diperlukan.

Lapisan (layers) tiba sebagai kotak boleh edit pada kanvas terbuka: teks kekal boleh ditaip semula, bentuk kekal sebagai bentuk, imej menyertai pustaka pada peranti anda, dan jenis huruf serta warna akur kepada global jenama. Simpan dan susun atur itu menjadi templat boleh guna semula yang boleh dicapai melalui URL, yang boleh diisi semula oleh sesiapa yang mempunyai Lolly - dan anda boleh mencampurkan alat langsung (kod QR, carta) yang dipaparkan semula apabila dimuatkan. Dari situ, ia dipaparkan seperti apa-apa lain dalam Lolly - SVG, PDF, PNG dan selebihnya, boleh dihasilkan semula daripada URL-nya. Lihat [Import reka bentuk](/info/design-import.html).

## Apa yang berlaku pada 29 Ogos?

Alat-alat berjenama SUSE akan meninggalkan projek ini, dan alat contoh generik baharu yang ditakrifkan oleh pengguna akan mengambil alih.

SUSE akan mengendalikan Lolly miliknya sendiri untuk melindungi tanda dagangannya.

## Berapa banyak yang SUSE kekalkan secara peribadi? (atau, bila 'rug-pull' itu akan berlaku)

Tanda dagangan dan alat-alat berjenama SUSE adalah untuk tujuan demonstrasi sahaja, sehingga 29 Ogos. Anda boleh menemui suatu instans Lolly tanpa jenama di [lolly.ART](https://lolly.art).

SUSE ialah sebuah syarikat infrastruktur sumber terbuka perusahaan (enterprise open source) dengan lebih tiga dekad kepimpinan platform. Produknya termasuk penyelesaian infrastruktur Linux peringkat perusahaan, Cloud Native, Edge, dan AI.

Dari perspektif SUSE, ini adalah tentang membuktikan kata-kata dengan tindakan berkenaan kedaulatan dan keselamatan. Setakat hari ini, kebarangkalian SUSE menjadikan Lolly sebagai produk komersial adalah hampir sifar mutlak.

Pendedahan penuh: SUSE *memang* sedang membina alatan dalaman untuk mengintegrasikan Lolly ke dalam sistem IT-nya - ini berkaitan persediaan dalaman SUSE, bukan soal pembangunan awam berbanding persendirian.

Bercakap tentang sisi awam pula, Lolly menyasarkan untuk dibina melalui [Open Build Service](https://openbuildservice.org/), dengan artifak rantaian bekalan yang selamat disampaikan oleh [SUSE Application Collection](https://apps.rancher.io/applications).

Kami akan membina sebanyak mungkin secara terbuka - cuma anda tidak akan melihat alat-alat berjenama SUSE untuk tempoh yang lama, mahupun tenaga kerja dalaman SUSE dan proses komersialnya, yang tiada kaitan dengan Lolly.

## Apakah perisa logo Lolly itu?

Sesetengah kata ia Limau, ada yang kata Pudina dan kadangkala Epal, Lolly membawa rasa manis, andalah yang menentukan perisa sebenarnya!
