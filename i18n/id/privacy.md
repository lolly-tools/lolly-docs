# Kebijakan Privasi

*Terakhir diperbarui: 19 Juli 2026*

> **Secara sederhana.** Dokumen, gambar, video dan berkas yang Anda buat di Lolly
> tetap berada di perangkat Anda. Tidak ada akun untuk penggunaan biasa, tidak ada
> cookie dari aplikasi itu sendiri, dan tidak ada analitik maupun pelacak di mana pun
> dalam basis kode - bukan sekadar "kami tidak menggunakan datanya", melainkan
> benar-benar tidak ada dalam sumbernya. Ada daftar pengecualian yang singkat dan
> lengkap tentang kapan perangkat lunak ini berkomunikasi dengan jaringan sama sekali,
> dan setiap satunya dijelaskan secara spesifik di bawah ini: apa yang keluar, kepada
> siapa, dan kapan. Satu-satunya pengecualian yang melibatkan sesuatu yang bersifat
> pribadi adalah proses masuk yang harus Anda mulai secara eksplisit. Jika tidak ada
> dalam dokumen ini, berarti hal itu tidak terjadi.

## Apa yang dicakup kebijakan ini

Lolly adalah perangkat lunak sumber terbuka - sebuah engine, beberapa shell aplikasi
(web, desktop, mobile, CLI), dan sebuah ekstensi browser - yang dapat dijalankan siapa
saja. Kebijakan ini memiliki dua bagian:

- **Perangkat lunak itu sendiri**: apa yang dilakukan dan tidak dilakukannya terhadap
  data Anda, di mana pun ia berjalan. Ini adalah sifat dari kodenya, jadi hal ini
  berlaku untuk setiap penerapan Lolly, baik milik kami maupun milik siapa pun.
- **lolly.tools**, penerapan rujukan yang dioperasikan SUSE: pilihan-pilihan spesifik
  yang dibuat saat menjalankan bagian-bagian sisi-server opsionalnya (apa yang dicatat,
  berapa lama, oleh siapa).

Jika Anda menggunakan instans Lolly yang di-host sendiri atau versi enterprise,
perilaku perangkat lunak di bawah ini tetap berlaku, tetapi *operator* instans tersebut
- bukan SUSE - bertanggung jawab atas apa pun yang bersifat sisi-server: endpoint
render mereka, server MCP mereka, otoritas sertifikat Content Credentials mereka, jika
mereka menjalankannya. Tanyakan kebijakan mereka sendiri; lihat [Adopsi &
Tata Kelola](/info/adoption-governance.html) untuk memahami apa yang tercakup dalam
mengoperasikan Lolly.

## Aplikasi: apa yang tetap di perangkat Anda

Shell web, desktop dan mobile Lolly menjalankan seluruh engine render di sisi klien.
Membuka alat, mengisi input, melihat pratinjau dan mengekspor semuanya terjadi di
perangkat Anda - tidak ada server yang terlibat, dan aplikasi tetap bekerja offline
begitu selesai dimuat.

**Aplikasi tidak menyetel cookie apa pun.** Agar berfungsi, aplikasi menyimpan sedikit
data **hanya di perangkat Anda**, tidak pernah dikirimkan:

- **Preferensi antarmuka** - tema, bahasa, pengaturan suara, ukuran bilah sisi/zoom,
  pilihan pengurutan dan tampilan, tips onboarding mana yang sudah Anda lihat - di
  `localStorage`, sehingga tersedia sebelum aplikasi selesai melakukan booting.
- **Cache offline katalog alat dan pratinjau aset**, sehingga galeri bekerja tanpa
  koneksi.
- **Penghitung penggunaan lokal** untuk statistik pada kartu profil Anda (berapa banyak
  ekspor, alat mana) - sebuah blob kecil yang terbatas di `localStorage`, tidak pernah
  dibaca oleh kami, tidak pernah dikirim ke mana pun.
- **Dokumen, sesi tersimpan, aset dan font yang Anda unggah sendiri** - disimpan di
  IndexedDB pada perangkat Anda, tidak pernah diunggah, tidak pernah dibaca oleh siapa
  pun selain Anda.

Tidak ada satu pun dari ini yang dibagikan, dijual, atau digunakan untuk
mengidentifikasi atau melacak Anda. Tidak ada apa pun yang perlu disetujui, karena
tidak ada pengumpulan yang terjadi - hanya pemberitahuan ini, agar Anda tahu apa yang
disimpan dan di mana. Hapus semuanya kapan saja dengan **Profil → Hapus semua data
saya**, atau dengan menghapus penyimpanan situs di browser Anda. (Menurut Direktif
ePrivacy Ps. 5(3), penyimpanan yang benar-benar diperlukan untuk layanan yang Anda minta
tidak memerlukan persetujuan - hanya transparansi, dan itulah yang menjadi tujuan
dokumen ini serta pemberitahuan dalam aplikasi.)

Cadangan data ini milik Anda sendiri - bundel `lolly-backup` yang dihasilkan oleh
**Export & render everything** - adalah berkas yang Anda simpan dan kendalikan. Berkas
ini tidak pernah menyentuh server kami kecuali Anda sendiri memilih untuk mengirimnya ke
suatu tempat. Lihat [Transfer Data](/info/data-transfer.html).

## Utilitas di perangkat

Beberapa alat - **Strip Hidden Data**, **Compress PDF**, dan lainnya yang membawa
lencana **"Runs on your device"** - bekerja pada berkas yang Anda sediakan. Berkas itu
dibaca ke dalam memori di browser Anda, ditransformasikan secara lokal, dan ditawarkan
kembali sebagai unduhan. Berkas ini tidak pernah diunggah, karena tidak ada server dalam
jalurnya untuk mengunggahnya. Utilitas ini bekerja offline, dan keluarannya tidak
membawa watermark maupun metadata milik kami - tujuan sebagian besar dari utilitas ini
adalah menghapus & melindungi data, bukan menambah risiko.

## Ketika aplikasi berkomunikasi dengan jaringan, selengkapnya

Tabel di bawah ini adalah daftar lengkap segala sesuatu yang diambil atau dikirim
aplikasi melalui jaringan. Jika tidak ada di sini, berarti aplikasi tidak melakukannya.

| Apa | Apa yang sebenarnya keluar dari perangkat Anda | Kapan |
|---|---|---|
| Sinkronisasi katalog alat | Tidak ada yang pribadi - sebuah permintaan untuk indeks alat dan aset publik milik Lolly sendiri | Saat startup, lalu di-cache offline |
| Kapabilitas jaringan yang dideklarasikan sebuah alat | Apa pun yang diminta alat tertentu itu (mis. tile peta) ke host tertentu yang di-allowlist dalam manifesnya | Hanya selama menggunakan alat tersebut |
| Google Fonts | Nama keluarga font yang dipilih dan alamat IP Anda, ke server font Google | Hanya jika Anda menambahkan Google Font di editor brand - sekali pengambilan per keluarga, lalu font itu tinggal di perangkat Anda |
| Pemeriksaan tanda tangan SEAL | Satu pencarian DNS untuk kunci publik, ke domain yang disebutkan di dalam berkas yang diperiksa | Hanya jika Verify menemukan catatan SEAL dalam berkas yang Anda periksa - tidak pernah berkasnya sendiri |
| Model detektor deep-scan | Tidak ada yang pribadi - sekali unduh model dari origin yang sama (bukan pihak ketiga) | Hanya jika Anda memilih untuk ikut deep scan pada Verify |
| Instans jarak jauh | Apa pun yang disajikan kembali oleh instans yang Anda sebutkan, melalui sinkronisasi katalog yang sama seperti dijelaskan di atas | Hanya jika Anda secara eksplisit mengarahkan shell ke penerapan Lolly lain |

Tidak satu pun dari ini yang mengirimkan dokumen, proyek, sesi atau berkas unggahan Anda
ke mana pun. Semuanya ada untuk membawa sesuatu *ke* perangkat Anda (alat, font, model,
sebuah kunci publik), tidak pernah untuk mengirim sesuatu *dari* perangkat Anda, dengan
pengecualian yang disebutkan secara eksplisit di bagian-bagian di bawah ini.

## URL render hot-link

Aplikasi itu sendiri tetap sepenuhnya berada di perangkat Anda. Secara terpisah, dan
hanya jika Anda menggunakannya, lolly.tools (dan setiap instans yang di-host sendiri yang
membiarkannya tetap aktif) menjawab **URL render hot-link** -
`https://lolly.tools/tool/<tool-id>.<ext>?<inputs>` - sehingga sebuah tautan Lolly yang
dibagikan dapat muncul sebagai gambar langsung di README, wiki atau dasbor. Mengambil
salah satu URL tersebut meminta server merender **data alat dan katalog publik** dengan
input yang tertulis di dalam URL, dan itulah keseluruhan pertukarannya:

- **Tidak ada akun, tidak ada cookie, tidak ada state.** Endpoint-nya anonim; tidak ada
  yang disimpan per permintaan, dan tidak ada apa pun di perangkat Anda yang dibaca.
  Dokumen, sesi dan unggahan Anda tidak pernah meninggalkan browser Anda - semuanya
  tidak mungkin muncul dalam tautan ini sama sekali.
- **Input-nya bersifat publik secara konstruksi** - input itu adalah apa pun yang
  diketikkan penulis tautan ke dalam URL, dapat dibaca siapa pun yang dijangkau tautan
  itu. Jangan menaruh rahasia dalam tautan yang dibagikan, Lolly menyediakan fitur
  enkripsi tautan untuk konten sensitif.
- Respons di-**cache dan dibatasi lajunya** seperti gambar publik lainnya, serta ditandai
  `noindex` sehingga mesin pencari tidak mengindeks render Anda.

Meng-host Lolly sendiri dan tidak menginginkan permukaan render publik? Setel
`LOLLY_DISABLE_RENDER_GET=1` dan setiap satu dari URL ini akan mengembalikan 404.

## Server MCP (opsional, untuk agen AI)

Lolly juga dapat dijangkau oleh agen AI melalui Model Context Protocol - sebuah endpoint
yang dijalankan operator (lolly.tools menjalankan satu; siapa pun dapat meng-host
miliknya sendiri, termasuk yang sepenuhnya air-gapped). Endpoint ini berbagi sikap
tanpa-akun dari jalur render, ditambah dua alat yang mau tidak mau menangani byte berkas:

- **`lolly_transform`** (menjalankan utilitas di perangkat pada sisi server, atas nama
  agen pemanggil) dan **`lolly_verify`** (memeriksa Content Credentials) keduanya
  menerima byte sebuah berkas dari pemanggil. Byte itu diproses **in-process, di
  memori**, dan hasilnya dikembalikan dalam panggilan yang sama itu - berkasnya tidak
  pernah ditulis ke disk dan tidak pernah disimpan setelah permintaan selesai.
- Setiap alat lainnya - `lolly_render`, `lolly_build_url`, `lolly_list_tools`,
  `lolly_describe_tool` - bekerja hanya dari parameter (teks, angka, warna, URL, id aset
  katalog), input yang sama seperti yang diterima URL render hot-link.
- Akses berupa token bersama yang diterbitkan operator kepada klien yang mereka percayai,
  atau OAuth 2.1 tanpa state: token bertanda tangan berumur pendek yang diverifikasi
  terhadap sebuah secret bersama, tanpa ada yang disimpan di sisi server, dan token itu
  sendiri tidak pernah ditulis ke log maupun ke URL render.

## Identitas Content Credentials (proses masuk yang harus Anda mulai sendiri)

Lolly dapat menyegel sebuah **Content Credential** kriptografis ke dalam ekspor Anda
sehingga siapa pun dapat memverifikasi, secara offline, bahwa sebuah berkas tidak berubah
sejak meninggalkan Lolly. Bagian itu **aktif secara bawaan dan sepenuhnya lokal** - kunci
penandatangan dihasilkan di perangkat Anda, bersifat **non-extractable** (bahkan kode
Lolly sendiri tidak dapat membacanya), dan penandatanganannya sendiri terjadi offline.
Bagian ini mencakup satu langkah *opsional* di atas hal tersebut: mendaftarkan identitas
terverifikasi, sehingga ekspor Anda menyatakan "Verified - signed by \<email Anda\>"
alih-alih sebuah kunci anonim. **Jika Anda melewati pendaftaran, tidak ada satu pun dalam
bagian ini yang berlaku bagi Anda, dan tidak ada data pribadi yang pernah meninggalkan
perangkat Anda.**

Jika Anda memang mendaftar, inilah persis apa yang terjadi:

1. **Anda memilih metode masuk** - GitHub, Google, SUSE (Okta), atau tautan yang dikirim
   melalui email. Untuk ketiga penyedia OIDC, Anda dialihkan ke halaman login milik
   penyedia itu sendiri, yang diatur oleh kebijakan privasi mereka, bukan kami; layanan
   sertifikat Lolly hanya menerima kembali sebuah alamat email terverifikasi dan nama
   penyedianya. Untuk tautan email, alamat yang Anda ketikkan diteruskan ke **Resend**,
   sebuah API email transaksional, semata-mata untuk mengirimkan satu tautan itu.
2. **Sebuah cookie berumur pendek melindungi pengalihan itu.** Ini adalah satu-satunya
   cookie yang disetel seluruh sistem Lolly: `lolly_ca_state`, `HttpOnly`, dibatasi
   cakupannya ke `/api/ca`, kedaluwarsa dalam sepuluh menit. Cookie ini membawa sebuah
   nilai acak, bukan pengenal pelacakan, dan hanya ada untuk mencegah pengalihan OAuth
   dipalsukan. Cookie ini dihapus segera setelah proses masuk selesai.
3. **Alamat IP Anda digunakan, sebentar, untuk mencegah penyalahgunaan** endpoint masuk
   (agar satu skrip tidak bisa membanjiri kotak masuk atau menghabiskan kuota email) -
   disimpan hanya di memori server, untuk jendela geser sekitar satu menit, tidak pernah
   ditulis ke log atau dipertahankan di mana pun.
4. **Layanan sertifikat menerbitkan sertifikat berumur pendek** (7, 30, 90 atau 365 hari,
   pilihan Anda, dibatasi oleh kebijakan operator) yang mengikat email terverifikasi Anda
   ke separuh publik dari keypair yang dihasilkan di perangkat Anda. Separuh privatnya
   tidak pernah meninggalkan browser Anda.
5. **Penerbitan itu dicatat**: alamat email Anda, penyedia yang Anda gunakan, hash pendek
   dari nomor seri sertifikat, dan tanggal kedaluwarsanya, ditulis ke log operasional
   layanan - dan, hanya jika operator telah mengonfigurasi satu, ke sebuah webhook yang
   mereka kendalikan. Ini adalah satu-satunya tempat sepotong data pribadi Anda disimpan
   di sebuah server, dan hal itu ada agar sertifikat yang terkompromi atau salah terbit
   dapat dilacak serta agar penerbitan CA itu sendiri dapat diaudit.
6. **Setelah itu, penandatanganan kembali offline** untuk seluruh masa berlaku
   sertifikat. Mengekspor sebuah berkas tidak pernah menghubungi layanan sertifikat -
   hanya pendaftaran yang melakukannya.

Untuk lolly.tools secara khusus: SUSE mengoperasikan layanan sertifikat dan menyimpan log
penerbitan ini. Lihat [Hak Anda](#your-rights) di bawah untuk cara menanyakan tentang
atau menghapus sebuah entri.

## Ekstensi browser

Ekstensi browser **Lolly URL Screenshot** tidak mengumpulkan, menyimpan, atau mengirimkan
data pribadi apa pun. Tidak ada analitik, tidak ada pelacakan, tidak ada server jarak
jauh.

**Apa yang dilakukannya.** Ketika Anda meminta aplikasi web Lolly untuk mengambil
tangkapan layar dari sebuah URL, ekstensi membuka halaman itu di tab latar belakang
sementara, menangkapnya di browser Anda menggunakan DevTools Protocol, menyerahkan
gambar kembali ke aplikasi, dan menutup tab. Semuanya terjadi secara lokal, di perangkat
dan jaringan Anda sendiri.

**Data.**

- **Kami tidak mengumpulkan apa pun.** Ekstensi ini tidak memiliki server dan tidak
  membuat permintaan jaringan sendiri.
- **Gambar yang ditangkap** langsung menuju aplikasi Lolly di browser yang sama - tidak
  pernah diunggah oleh ekstensi.
- **URL yang Anda tangkap** hanya digunakan untuk memuat satu halaman itu untuk satu
  tangkapan layar itu. URL tersebut tidak dicatat atau dibagikan.

**Izin.**

- **`debugger`** - untuk menangkap halaman yang dirender melalui DevTools Protocol
  (mekanisme yang sama yang digunakan aplikasi desktop Lolly).
- **`tabs`** - untuk membuka dan menutup tab sementara tempat halaman dimuat.
- **Akses host (`<all_urls>`)** - karena halaman yang Anda pilih untuk ditangkap bisa
  berada di situs mana pun. Chrome menampilkan hal ini pada saat pemasangan sebagai
  peringatan izin yang luas; ekstensi hanya pernah mengunjungi URL yang Anda berikan.

Tidak satu pun dari izin ini digunakan untuk membaca, memantau, atau mengirimkan aktivitas
penjelajahan Anda melebihi satu tangkapan yang diminta itu.

## Log infrastruktur

Seperti situs web mana pun, server-server di balik lolly.tools - dan di balik setiap
penerapan Lolly - menghasilkan log akses server-web standar setiap kali sebuah permintaan
mencapai mereka sama sekali: alamat IP, path yang diminta, stempel waktu, user agent,
disimpan untuk jendela waktu terbatas demi keamanan dan pencegahan penyalahgunaan. Itu
adalah perilaku hosting dasar, bukan sesuatu yang ditambahkan Lolly di atasnya, dan
log itu tidak pernah memuat isi dokumen Anda, karena dokumen itu tidak pernah mencapai
server sejak awal. Satu-satunya pengecualian yang disengaja adalah berkas yang secara
eksplisit Anda serahkan ke panggilan MCP `lolly_transform` atau `lolly_verify`, yang
diproses di memori dan tidak pernah ditulis ke disk atau log, seperti dijelaskan di atas.

## Privasi anak-anak

Lolly tidak dengan sengaja mengumpulkan informasi pribadi dari siapa pun, pada usia
berapa pun, dalam penggunaan aplikasi yang biasa - tidak ada apa pun untuk dikumpulkan.
Satu-satunya tempat informasi pribadi (sebuah alamat email) pernah dikumpulkan adalah
pendaftaran Content Credentials, yang dijelaskan di atas, yang tidak ditujukan untuk atau
diperuntukkan bagi anak-anak.

## Hak Anda

Karena hampir semua yang disentuh Lolly disimpan hanya di perangkat Anda sendiri,
sebagian besar dari apa yang disebut hukum perlindungan data sebagai "hak Anda" - akses,
koreksi, penghapusan, portabilitas - adalah hal-hal yang sudah dapat Anda lakukan
sendiri, seketika, tanpa perlu meminta siapa pun: data Anda tersimpan dalam penyimpanan
browser Anda, dalam bentuk yang dapat Anda periksa, ekspor (**Export & render
everything**, di atas), atau hapus (**Profil → Hapus semua data saya**).

Untuk satu-satunya potongan data pribadi yang dapat berakhir di sebuah server - alamat
email Anda, jika Anda mendaftar untuk Content Credentials - hubungi kami (di bawah) untuk
menanyakan apa yang kami simpan atau untuk menghapusnya dari log aktif. Menghapus sebuah
entri log tidak mencabut sertifikat yang sudah terbit (sertifikat itu berumur pendek
secara desain dan cukup dibiarkan kedaluwarsa); menghapusnya menghentikan entri itu
muncul dalam ekspor log di masa mendatang.

Kami tidak menjual data. Kami tidak memiliki data apa pun untuk dijual.

## Perubahan pada kebijakan ini

Tanggal di bagian atas berubah setiap kali dokumen ini berubah. Perubahan yang mengubah
apa yang keluar dari perangkat Anda atau apa yang disimpan mendapatkan barisnya sendiri
di sini, bukan suntingan diam-diam - jika Anda ingin melihat apa yang berubah, tanyakan
(di bawah) atau bandingkan dengan
[sumber publik](https://github.com/lolly-tools/lolly/commits/main/docs/privacy.md).

## Kontak

Ada pertanyaan, atau permintaan berdasarkan "Hak Anda" di atas: **Andy Fitzsimon**,
[fitzy@suse.com](mailto:fitzy@suse.com). Untuk instans Lolly yang di-host sendiri atau
versi enterprise, hubungi siapa pun yang mengoperasikannya - SUSE dan proyek sumber
terbuka Lolly tidak menyimpan data untuk penerapan yang tidak mereka jalankan.
