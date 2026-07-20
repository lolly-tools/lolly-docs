# Dasar Privasi

*Terakhir dikemas kini: 19 Julai 2026*

> **Secara ringkas.** Dokumen, imej, video dan fail yang anda hasilkan dalam Lolly
> kekal pada peranti anda. Tiada akaun untuk kegunaan biasa, tiada kuki daripada
> aplikasi itu sendiri, dan tiada analitik atau penjejak di mana-mana dalam kod
> sumber - bukan "kami tidak menggunakan data itu," tetapi benar-benar tidak hadir
> dalam sumber. Satu senarai pengecualian yang ringkas dan lengkap wujud bagi setiap
> tempat perisian ini berhubung dengan rangkaian, dan setiap satu daripadanya
> diterangkan di bawah secara khusus: apa yang keluar, kepada siapa, dan bila.
> Satu-satunya pengecualian yang melibatkan apa-apa yang peribadi ialah log masuk
> yang perlu anda mulakan secara eksplisit. Jika ia tiada dalam dokumen ini, ia
> tidak berlaku.

## Apa yang diliputi oleh dasar ini

Lolly ialah perisian sumber terbuka - sebuah enjin, beberapa shell aplikasi (web,
desktop, mudah alih, CLI), dan satu sambungan pelayar - yang boleh dijalankan oleh
sesiapa sahaja. Dasar ini mempunyai dua bahagian:

- **Perisian itu sendiri**: apa yang ia lakukan dan tidak lakukan dengan data anda,
  di mana jua ia dijalankan. Ini adalah sifat kod itu sendiri, jadi ia benar bagi
  setiap deployment Lolly, milik kami atau milik sesiapa pun.
- **lolly.tools**, deployment rujukan yang dikendalikan oleh SUSE: pilihan khusus
  yang dibuat semasa menjalankan komponen sisi-pelayan pilihannya (apa yang
  dilog, untuk berapa lama, oleh siapa).

Jika anda menggunakan instans Lolly hos sendiri atau perusahaan, gelagat perisian
di bawah masih terpakai, tetapi *pengendali* instans itu - bukan SUSE - yang
bertanggungjawab bagi apa-apa yang berlaku di sisi-pelayan: endpoint render mereka,
pelayan MCP mereka, autoriti sijil Content Credentials mereka, jika mereka
menjalankannya. Tanyakan dasar mereka sendiri; lihat
[Penggunaan & Tadbir Urus](/info/adoption-governance.html) untuk memahami apa yang
terlibat dalam mengendalikan Lolly.

## Aplikasi: apa yang kekal pada peranti anda

Shell web, desktop dan mudah alih Lolly menjalankan keseluruhan enjin render pada
sisi-pelanggan. Membuka alat, mengisi input, pratonton dan eksport semuanya berlaku
pada peranti anda - tiada pelayan terlibat, dan aplikasi ini berfungsi secara luar
talian sebaik ia dimuatkan.

**Aplikasi ini tidak menetapkan sebarang kuki.** Untuk berfungsi, ia menyimpan
sedikit data **pada peranti anda sahaja**, tidak pernah dihantar:

- **Keutamaan antara muka** - tema, bahasa, tetapan bunyi, saiz bar sisi/zum,
  pilihan susunan dan paparan, tip pengenalan yang telah anda lihat - dalam
  `localStorage`, supaya ia tersedia sebelum aplikasi selesai but.
- **Cache luar talian bagi katalog alat dan pratonton aset**, supaya galeri
  berfungsi tanpa sambungan.
- **Kaunter penggunaan setempat** untuk statistik pada kad profil anda (berapa
  banyak eksport, alat yang mana) - satu blob kecil yang terbatas dalam
  `localStorage`, tidak pernah dibaca oleh kami, tidak pernah dihantar ke
  mana-mana.
- **Dokumen anda sendiri, sesi tersimpan, aset dan fon yang dimuat naik** -
  disimpan dalam IndexedDB pada peranti anda, tidak pernah dimuat naik, tidak
  pernah dibaca oleh sesiapa pun kecuali anda.

Tiada satu pun daripada ini dikongsi, dijual, atau digunakan untuk mengenal pasti
atau menjejaki anda. Tiada apa-apa yang perlu dipersetujui, kerana tiada pengumpulan
berlaku - hanya notis ini, supaya anda tahu apa yang disimpan dan di mana. Padamkan
kesemuanya pada bila-bila masa melalui **Profile → Clear all my data**, atau dengan
mengosongkan storan laman dalam pelayar anda. (Di bawah ePrivacy Directive
Art. 5(3), storan yang benar-benar diperlukan untuk perkhidmatan yang anda minta
tidak memerlukan persetujuan - hanya ketelusan, iaitu apa yang disediakan oleh
dokumen ini dan notis dalam aplikasi.)

Sandaran data ini milik anda sendiri - himpunan `lolly-backup` yang dihasilkan oleh
**Export & render everything** - ialah fail yang anda simpan dan kawal. Ia tidak
pernah menyentuh pelayan kami melainkan anda memilih untuk menghantarnya ke suatu
tempat sendiri. Lihat [Pemindahan Data](/info/data-transfer.html).

## Utiliti pada peranti

Sesetengah alat - **Strip Hidden Data**, **Compress PDF**, dan lain-lain yang
membawa lencana **"Runs on your device"** - berfungsi pada fail yang anda sediakan.
Fail itu dibaca ke dalam memori dalam pelayar anda, ditukar secara setempat, dan
ditawarkan semula sebagai muat turun. Ia tidak pernah dimuat naik, kerana tiada
pelayan dalam laluan itu untuk memuat naiknya. Utiliti ini berfungsi secara luar
talian, dan outputnya tidak membawa sebarang tera air atau metadata milik kami -
tujuan kebanyakannya adalah untuk mengeluarkan & melindungi data, bukan menambah
risiko.

## Apabila aplikasi berhubung dengan rangkaian, sepenuhnya

Jadual di bawah ialah senarai lengkap segala yang aplikasi ini ambil atau hantar
melalui rangkaian. Jika ia tiada di sini, aplikasi ini tidak melakukannya.

| Apa | Apa yang sebenarnya meninggalkan peranti anda | Bila |
|---|---|---|
| Penyegerakan katalog alat | Tiada apa-apa yang peribadi - satu permintaan untuk indeks alat dan aset awam milik Lolly sendiri | Semasa permulaan, kemudian dicache secara luar talian |
| Keupayaan rangkaian yang diisytiharkan oleh sesuatu alat | Apa jua yang diminta oleh alat khusus itu (cth. jubin peta) kepada hos khusus yang disenarai putih dalam manifesnya | Hanya semasa menggunakan alat tersebut |
| Google Fonts | Nama keluarga fon yang dipilih dan alamat IP anda, ke pelayan fon Google | Hanya jika anda menambah Google Font dalam penyunting jenama - satu pengambilan sekali sahaja bagi setiap keluarga, kemudian ia berada pada peranti anda |
| Semakan tandatangan SEAL | Satu carian DNS untuk kunci awam, ke domain yang dinamakan di dalam fail yang sedang disemak | Hanya jika Verify menemui rekod SEAL dalam fail yang anda semak - tidak pernah fail itu sendiri |
| Model pengesan imbasan mendalam | Tiada apa-apa yang peribadi - satu muat turun model same-origin sekali sahaja (bukan pihak ketiga) | Hanya jika anda memilih untuk menyertai imbasan mendalam Verify |
| Instans jauh | Apa jua yang dihidangkan semula oleh instans yang anda namakan, melalui penyegerakan katalog sama yang diterangkan di atas | Hanya jika anda secara eksplisit menghalakan shell ke deployment Lolly lain |

Tiada satu pun daripada ini menghantar dokumen, projek, sesi atau fail yang dimuat
naik anda ke mana-mana. Ia wujud untuk membawa sesuatu *ke* peranti anda (alat,
fon, model, kunci awam), tidak pernah untuk menghantar sesuatu *daripada* peranti
itu, dengan pengecualian yang dinamakan secara eksplisit dalam bahagian di bawah.

## URL render pautan-hidup (hot-link)

Aplikasi itu sendiri kekal sepenuhnya pada peranti anda. Secara berasingan, dan
hanya jika anda menggunakannya, lolly.tools (dan mana-mana instans hos sendiri yang
membiarkannya didayakan) menjawab **URL render pautan-hidup** -
`https://lolly.tools/tool/<tool-id>.<ext>?<inputs>` - supaya pautan Lolly yang
dikongsi boleh muncul sebagai imej langsung dalam sesebuah README, wiki atau papan
pemuka. Mengambil salah satu URL tersebut meminta pelayan merender **data alat dan
katalog awam** dengan input yang ditulis ke dalam URL itu, dan itulah keseluruhan
pertukaran tersebut:

- **Tiada akaun, tiada kuki, tiada keadaan.** Endpoint itu tanpa nama; tiada apa-apa
  disimpan bagi setiap permintaan, dan tiada apa-apa pada peranti anda dibaca.
  Dokumen, sesi dan muat naik anda tidak pernah meninggalkan pelayar anda - ia
  langsung tidak boleh muncul dalam pautan ini.
- **Input adalah awam secara reka bentuk** - ia adalah apa jua yang ditaip oleh
  pengarang pautan ke dalam URL, boleh dibaca oleh sesiapa yang menerima pautan itu.
  Jangan letak rahsia dalam pautan yang dikongsi, Lolly menyediakan ciri
  penyulitan pautan untuk kandungan sensitif.
- Respons **dicache dan dikadar-hadkan** seperti mana-mana imej awam, dan ditanda
  `noindex` supaya enjin carian tidak mengindeks render anda.

Menghoskan Lolly sendiri dan tidak mahu permukaan render awam? Tetapkan
`LOLLY_DISABLE_RENDER_GET=1` dan setiap satu URL ini akan mengembalikan 404.

## Pelayan MCP (pilihan, untuk ejen AI)

Lolly juga boleh dicapai oleh ejen AI melalui Model Context Protocol - satu endpoint
yang dikendalikan oleh pengendali (lolly.tools menjalankan satu; sesiapa boleh hos
sendiri, termasuk yang benar-benar terputus daripada rangkaian). Ia berkongsi
pendirian tanpa-akaun laluan render, ditambah dua alat yang semestinya mengendalikan
bait fail:

- **`lolly_transform`** (menjalankan utiliti pada peranti di sisi-pelayan, bagi
  pihak ejen yang memanggil) dan **`lolly_verify`** (menyemak Content Credentials)
  kedua-duanya menerima bait fail daripada pemanggil. Ia diproses **dalam-proses,
  dalam memori**, dan hasilnya dikembalikan dalam panggilan yang sama itu - fail itu
  tidak pernah ditulis ke cakera dan tidak pernah disimpan sebaik permintaan selesai.
- Setiap alat lain - `lolly_render`, `lolly_build_url`, `lolly_list_tools`,
  `lolly_describe_tool` - berfungsi daripada parameter sahaja (teks, nombor, warna,
  URL, id aset katalog), input yang sama seperti yang diterima oleh URL render
  pautan-hidup.
- Akses adalah sama ada token dikongsi yang dikeluarkan oleh pengendali kepada
  pelanggan yang mereka percayai, atau OAuth 2.1 tanpa-keadaan: token bertandatangan
  bertempoh-pendek yang disahkan terhadap rahsia dikongsi, tiada apa-apa disimpan di
  sisi-pelayan, dan token itu sendiri tidak pernah ditulis ke log atau URL render.

## Identiti Content Credentials (log masuk yang perlu anda mulakan sendiri)

Lolly boleh memeterai **Content Credential** kriptografi ke dalam eksport anda supaya
sesiapa pun boleh mengesahkan, secara luar talian, bahawa sesebuah fail tidak diubah
sejak ia meninggalkan Lolly. Bahagian itu **didayakan secara lalai dan sepenuhnya
setempat** - kunci penandatanganan dijana pada peranti anda, adalah
**tidak-boleh-diekstrak** (kod Lolly sendiri pun tidak boleh membacanya), dan
penandatanganan itu sendiri berlaku secara luar talian. Bahagian ini meliputi satu
langkah *pilihan* di atas itu: mendaftarkan identiti yang disahkan, supaya eksport
anda menyatakan "Verified - signed by \<your email\>" dan bukannya kunci tanpa nama.
**Jika anda melangkau pendaftaran, tiada apa-apa dalam bahagian ini terpakai kepada
anda, dan tiada data peribadi pernah meninggalkan peranti anda.**

Jika anda mendaftar, inilah tepat apa yang berlaku:

1. **Anda memilih kaedah log masuk** - GitHub, Google, SUSE (Okta), atau pautan yang
   dihantar melalui e-mel. Bagi ketiga-tiga penyedia OIDC, anda diarahkan semula ke
   halaman log masuk penyedia itu sendiri, yang ditadbir oleh dasar privasi mereka,
   bukan kami; perkhidmatan sijil Lolly hanya menerima kembali alamat e-mel yang
   disahkan dan nama penyedia itu. Bagi pautan e-mel, alamat yang anda taip
   disalurkan kepada **Resend**, satu API e-mel transaksi, semata-mata untuk
   menghantar satu pautan itu.
2. **Kuki bertempoh-pendek melindungi arahan-semula (redirect).** Ini ialah satu-satunya
   kuki yang ditetapkan oleh keseluruhan sistem Lolly: `lolly_ca_state`, `HttpOnly`,
   berskop kepada `/api/ca`, tamat tempoh dalam masa sepuluh minit. Ia membawa nilai
   rawak, bukan pengecam penjejakan, dan wujud hanya untuk menghalang arahan-semula
   OAuth daripada dipalsukan. Ia dibersihkan sebaik sahaja log masuk selesai.
3. **Alamat IP anda digunakan, seketika, untuk mencegah penyalahgunaan** endpoint log
   masuk (supaya satu skrip tidak boleh membanjiri peti masuk atau menghabiskan kuota
   e-mel) - disimpan dalam memori pelayan sahaja, untuk tetingkap gelongsor kira-kira
   seminit, tidak pernah ditulis ke log atau dikekalkan di mana-mana.
4. **Perkhidmatan sijil mengeluarkan sijil bertempoh-pendek** (7, 30, 90 atau 365
   hari, pilihan anda, dihadkan oleh dasar pengendali) yang mengikat e-mel anda yang
   disahkan kepada separuh awam pasangan kunci yang dijana pada peranti anda. Separuh
   peribadinya tidak pernah meninggalkan pelayar anda.
5. **Pengeluaran itu dilog**: alamat e-mel anda, penyedia yang anda gunakan, cebisan
   hash pendek nombor siri sijil, dan tarikh luputnya, ditulis ke log operasi
   perkhidmatan itu - dan, hanya jika pengendali telah mengkonfigurasi satu, ke
   webhook yang mereka kawal. Ini adalah satu-satunya tempat sekeping data peribadi
   anda dikekalkan pada pelayan, dan ia wujud supaya sijil yang terjejas atau
   tersalah-keluar boleh dikesan dan supaya pengeluaran CA itu sendiri boleh diaudit.
6. **Selepas itu, penandatanganan adalah luar talian semula** sepanjang hayat sijil
   tersebut. Mengeksport fail tidak pernah menghubungi perkhidmatan sijil - hanya
   pendaftaran yang melakukannya.

Bagi lolly.tools secara khusus: SUSE mengendalikan perkhidmatan sijil dan menyimpan
log pengeluaran ini. Lihat [Hak anda](#your-rights) di bawah untuk cara bertanya
tentang atau membuang sesuatu entri.

## Sambungan pelayar

Sambungan pelayar **Lolly URL Screenshot** tidak mengumpul, menyimpan, atau
menghantar sebarang data peribadi. Tiada analitik, tiada penjejakan, tiada pelayan
jauh.

**Apa yang ia lakukan.** Apabila anda meminta aplikasi web Lolly untuk mengambil
tangkapan skrin sesuatu URL, sambungan ini membuka laman tersebut dalam tab latar
belakang sementara, menangkapnya dalam pelayar anda menggunakan DevTools Protocol,
menyerahkan imej itu kembali kepada aplikasi, dan menutup tab tersebut. Semuanya
berlaku secara setempat, pada peranti dan rangkaian anda sendiri.

**Data.**

- **Kami tidak mengumpul apa-apa.** Sambungan ini tidak mempunyai sebarang pelayan
  dan tidak membuat sebarang permintaan rangkaian sendiri.
- **Imej yang ditangkap** terus dihantar ke aplikasi Lolly dalam pelayar yang sama -
  tidak pernah dimuat naik oleh sambungan ini.
- **URL yang anda tangkap** hanya digunakan untuk memuatkan satu laman itu bagi satu
  tangkapan skrin itu sahaja. Ia tidak direkodkan atau dikongsi.

**Kebenaran.**

- **`debugger`** - untuk menangkap laman yang telah dipaparkan melalui DevTools
  Protocol (mekanisme yang sama yang digunakan oleh aplikasi desktop Lolly).
- **`tabs`** - untuk membuka dan menutup tab sementara tempat laman itu dimuatkan.
- **Akses hos (`<all_urls>`)** - kerana laman yang anda pilih untuk ditangkap boleh
  berada di mana-mana laman web. Chrome memaparkan ini semasa pemasangan sebagai satu
  amaran kebenaran yang luas; sambungan ini hanya melawat URL yang anda berikan
  kepadanya.

Tiada satu pun daripada ini digunakan untuk membaca, memantau, atau menghantar
aktiviti melayari anda melangkaui satu tangkapan yang diminta itu.

## Log infrastruktur

Seperti mana-mana laman web, pelayan di sebalik lolly.tools - dan di sebalik
mana-mana deployment Lolly - menjana log akses pelayan-web piawai apabila sesuatu
permintaan tiba kepadanya: alamat IP, laluan yang diminta, cap masa, ejen pengguna,
disimpan untuk tempoh terhad bagi tujuan keselamatan dan pencegahan penyalahgunaan.
Itu adalah gelagat pengehosan asas, bukan sesuatu yang ditambah oleh Lolly, dan ia
tidak pernah mengandungi kandungan dokumen anda, kerana kandungan itu tidak pernah
sampai ke pelayan sejak mula. Satu-satunya pengecualian yang disengajakan ialah fail
yang anda serahkan secara eksplisit kepada panggilan MCP `lolly_transform` atau
`lolly_verify`, yang diproses dalam memori dan tidak pernah ditulis ke cakera atau
log, seperti yang diterangkan di atas.

## Privasi kanak-kanak

Lolly tidak secara sedar mengumpul maklumat peribadi daripada sesiapa pun, dari
mana-mana peringkat umur, dalam kegunaan biasa aplikasi ini - tiada apa-apa untuk
dikumpul. Satu-satunya tempat maklumat peribadi (alamat e-mel) pernah dikumpul ialah
pendaftaran Content Credentials, yang diterangkan di atas, yang tidak ditujukan atau
diniatkan untuk kanak-kanak.

## Hak anda

Oleh sebab hampir segala yang disentuh oleh Lolly disimpan hanya pada peranti anda
sendiri, kebanyakan perkara yang undang-undang perlindungan data panggil "hak anda" -
akses, pembetulan, penghapusan, mudah alih - adalah perkara yang boleh anda lakukan
sendiri, serta-merta, tanpa perlu bertanya kepada sesiapa: data anda berada dalam
storan pelayar anda, dalam bentuk yang boleh anda periksa, eksport
(**Export & render everything**, di atas), atau padam (**Profile → Clear all my
data**).

Bagi satu-satunya kepingan data peribadi yang boleh berakhir pada pelayan - alamat
e-mel anda, jika anda mendaftar untuk Content Credentials - hubungi kami (di bawah)
untuk bertanya apa yang kami simpan atau untuk membuangnya daripada log aktif.
Membuang sesuatu entri log tidak membatalkan sijil yang telah dikeluarkan (ia
bertempoh-pendek secara reka bentuk dan cuma akan luput); ia menghentikan entri itu
daripada muncul dalam eksport log pada masa hadapan.

Kami tidak menjual data. Kami tidak mempunyai apa-apa untuk dijual.

## Perubahan pada dasar ini

Tarikh di bahagian atas berubah setiap kali dokumen ini berubah. Perubahan yang
mengubah apa yang meninggalkan peranti anda atau apa yang dikekalkan mendapat barisnya
sendiri di sini, bukan suntingan senyap - jika anda ingin melihat apa yang berubah,
tanyakan (di bawah) atau bandingkan dengan
[sumber awam](https://github.com/lolly-tools/lolly/commits/main/docs/privacy.md).

## Hubungi

Soalan, atau permintaan di bawah "Hak anda" di atas: **Andy Fitzsimon**,
[fitzy@suse.com](mailto:fitzy@suse.com). Bagi instans Lolly hos sendiri atau
perusahaan, hubungi sesiapa yang mengendalikannya - SUSE dan projek sumber terbuka
Lolly tidak menyimpan sebarang data bagi deployment yang tidak dijalankan olehnya.
