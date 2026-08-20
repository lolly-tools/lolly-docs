# Dasar Privasi

*Terakhir dikemas kini: 11 Ogos 2026*

> **Dalam erti kata mudah.** Dokumen, imej, video dan fail yang anda buat dalam Lolly kekal
> pada peranti anda. Tiada akaun untuk penggunaan biasa, tiada kuki daripada aplikasi
> itu sendiri dan tiada analitik atau penjejak di mana-mana dalam kod sumber - bukan "kami tidak guna
> data itu," tetapi memang tiada dalam sumber. Satu senarai pendek dan lengkap
> pengecualian wujud di mana perisian ini berhubung dengan rangkaian, dan setiap satu
> daripadanya diterangkan di bawah secara terperinci: apa yang keluar, kepada siapa dan bila.
> Satu-satunya pengecualian yang melibatkan sesuatu yang peribadi ialah log masuk yang
> anda perlu mulakan secara jelas. Jika ia tiada dalam dokumen ini, ia tidak berlaku.

## Apa yang diliputi dasar ini

Lolly ialah perisian sumber terbuka - sebuah enjin, beberapa shell aplikasi (web, desktop,
mudah alih, CLI) dan sambungan pelayar - yang boleh dijalankan oleh sesiapa sahaja. Dasar ini mempunyai dua
bahagian:

- <!--i:code--> **Perisian itu sendiri**: apa yang ia lakukan dan tidak lakukan dengan data anda, di mana sahaja ia
  berjalan. Ini adalah sifat kod itu sendiri, jadi ia benar untuk setiap penggunaan Lolly,
  milik kami atau sesiapa sahaja.
- <!--i:server--> **lolly.tools**, penggunaan rujukan yang dikendalikan oleh SUSE: pilihan khusus
  yang dibuat semasa menjalankan bahagian pelayan pilihannya (apa yang dilog, untuk berapa lama, oleh
  siapa).

Jika anda menggunakan instans Lolly yang dihoskan sendiri atau instans perusahaan, tingkah laku perisian
di bawah masih terpakai, tetapi *pengendali* instans itu - bukan SUSE - yang
bertanggungjawab untuk apa-apa di pihak pelayan: titik akhir render mereka, pelayan MCP mereka,
pihak berkuasa sijil Content Credentials mereka, jika mereka menjalankan satu. Tanya mereka untuk
dasar mereka sendiri. Lihat [Penerimaan & Tadbir Urus](/info/adoption-governance.html) untuk
apa yang terlibat dalam mengendalikan Lolly.

## Aplikasi: apa yang kekal pada peranti anda

Shell web, desktop dan mudah alih Lolly menjalankan keseluruhan enjin render di sisi klien.
Membuka alat, mengisi input, pratonton dan eksport semuanya berlaku pada
peranti anda - tiada pelayan yang terlibat, dan aplikasi berfungsi luar talian sebaik sahaja dimuatkan.

**Aplikasi ini tidak menetapkan sebarang kuki.** Untuk berfungsi, ia menyimpan sejumlah kecil data **pada
peranti anda sahaja**, tidak pernah dihantar:

- <!--i:sliders--> **Keutamaan antara muka** - tema, bahasa, tetapan bunyi, saiz
  bar sisi/zum, pilihan susunan dan paparan, petua pengenalan yang telah anda lihat - dalam
  `localStorage`, supaya ia tersedia sebelum aplikasi selesai dimulakan.
- <!--i:download--> **Cache luar talian bagi katalog alat dan pratonton aset**, supaya galeri
  berfungsi tanpa sambungan.
- <!--i:hash--> **Kaunter penggunaan tempatan** untuk statistik kad profil anda (berapa banyak eksport, alat
  yang mana) - satu blob kecil terhad dalam `localStorage`, tidak pernah dibaca oleh kami, tidak pernah dihantar
  ke mana-mana.
- <!--i:folder--> **Dokumen, sesi tersimpan, aset dan fon yang anda muat naik sendiri** - disimpan dalam
  IndexedDB pada peranti anda, tidak pernah dimuat naik, tidak pernah dibaca oleh sesiapa selain anda.

Tiada satu pun daripada ini dikongsi, dijual atau digunakan untuk mengenal pasti atau menjejaki anda. Tiada apa-apa
untuk dipersetujui, kerana tiada pengumpulan berlaku - hanya notis ini, supaya anda
tahu apa yang disimpan dan di mana. Padamkan semuanya pada bila-bila masa dengan **Profile → Clear all
my data**, atau dengan mengosongkan storan tapak dalam pelayar anda. (Di bawah
ePrivacy Directive Art. 5(3), storan yang perlu secara mutlak untuk perkhidmatan yang anda minta
tidak memerlukan persetujuan - hanya ketelusan, iaitu apa yang menjadi tujuan dokumen ini dan
notis dalam aplikasi ini.)

![Bahagian storan halaman profil pada skrin lebar telefon: setiap kategori data pada peranti dinamakan, dengan butang Clear all my data betul-betul di sebelahnya](/t/url-shot?url=%2F%23%2Fprofile%3Ffocus%3Dstorage-section&width=430&height=1600&dpi=192&waitMs=2400&css=.welcome-dialog%2C.personalize-nudge%2C.store-manages%2C.storage-subsection%2C.store-selbar%2C.store-chip-val%2C%23store-hero-num%2C%23store-headroom%2C%23store-quota%2C%23store-reclaim%7Bdisplay%3Anone%7D&format=svg&walker=1&cropSelector=%23storage-section&dark=1&filename=pv-storage-clear)

Sandaran data ini milik anda sendiri - bungkusan `lolly-backup` yang dihasilkan oleh **Export my
data & render everything** - ialah fail yang anda simpan dan kawal sendiri. Ia tidak pernah menyentuh pelayan
kami melainkan anda memilih untuk menghantarnya ke suatu tempat sendiri. Lihat [Pemindahan
Data](/info/data-transfer.html).

## Utiliti pada peranti

Sebahagian alat - **Strip Hidden Data**, **Compress PDF** dan lain-lain yang membawa
lencana **"Runs on your device"** - beroperasi pada fail yang anda sediakan. Fail itu dibaca
ke dalam memori pelayar anda, diubah secara tempatan dan ditawarkan semula sebagai muat turun.
Ia tidak pernah dimuat naik, kerana tiada pelayan dalam laluan untuk memuat naiknya.
Utiliti ini berfungsi luar talian, dan outputnya tidak membawa sebarang tera air atau metadata
kami - tujuan kebanyakan alat ini adalah untuk membuang & melindungi data, bukan menambah risiko.

![Lencana yang dibawa oleh alat-alat ini: Runs on your device - tiada apa-apa dimuat naik](/t/url-shot?url=%2F%23%2Ftool%2Fstrip-data&width=1440&height=900&dpi=192&waitMs=2400&walker=1&format=svg&cropSelector=.on-device-badge&dark=1&filename=pv-ondevice-badge)

## Apabila aplikasi berhubung dengan rangkaian, secara lengkap

Jadual di bawah ialah senarai lengkap segala yang diambil atau dihantar oleh aplikasi melalui
rangkaian. Jika ia tiada di sini, aplikasi tidak melakukannya.

| Apa | Apa yang sebenarnya keluar dari peranti anda | Bila (tindakan yang mencetuskannya) | Jika pengendali menyekatnya |
|---|---|---|---|
| Penyegerakan katalog alat | Tiada apa-apa yang peribadi - permintaan untuk indeks alat dan aset awam Lolly sendiri, ke asal usul (origin) aplikasi itu sendiri | Semasa permulaan, kemudian dicache secara luar talian | Aplikasi berjalan menggunakan set alat yang dicache. Ia hanya berhenti menemui alat baharu |
| Alat yang memerlukan data langsung | Apa sahaja yang diminta oleh alat khusus itu, kepada hos yang dinamakan dalam penerangannya sendiri. Pada masa ini itu hanyalah carian bandar dalam alat Meeting Planner, yang meminta `geocoding-api.open-meteo.com` untuk menukar nama bandar kepada koordinat dan zon waktu - tiada akaun, tiada kunci dan tiada pengenal pasti selain permintaan itu sendiri. Input itu menyatakan begitu tepat di tempat anda menaip, dan setiap jawapan disimpan pada peranti anda supaya sesuatu bandar hanya dicari sekali | Hanya semasa menggunakan alat itu, dan hanya sebaik sahaja anda memasukkan lokasi | Carian itu sahaja gagal. Anda masih boleh menaip koordinat secara manual, dan tiada apa-apa lagi terjejas |
| Google Fonts | Nama keluarga fon yang dipilih dan alamat IP anda, kepada pelayan fon Google (`fonts.googleapis.com` untuk helaian gaya, `fonts.gstatic.com` untuk fail fon) | Hanya jika anda menambah Google Font dalam penyunting jenama, **dan hanya selepas anda bersetuju dalam dialog yang menyatakan perkara ini dengan tepat** - satu kali capaian bagi setiap keluarga, kemudian ia kekal pada peranti anda dan digunakan luar talian | Pemilih Google Fonts gagal secara tertutup (fail closed). Muat naik fail fon anda sendiri sebagai gantinya |
| Send to Google Drive | Fail tunggal yang anda pilih untuk dihantar, kepada API Drive Google (`www.googleapis.com`), selepas anda melengkapkan log masuk Google dalam tetingkap pop timbul Google sendiri. Akses Lolly terhad kepada fail yang dicipta olehnya (skop `drive.file` - ia tidak boleh membaca selebihnya Drive anda), dan token log masuk disimpan dalam memori untuk sesi itu sahaja, tidak pernah disimpan kekal | Hanya apabila anda menekan "Send to Google Drive" pada eksport EMF, dan hanya pada binaan (build) di mana pengendali telah mengkonfigurasikan id klien Google - tanpa satu, butang itu tidak wujud | Butang itu tidak pernah muncul. Muat turun fail itu dan muat naiknya sendiri ke Drive |
| Send to Dropbox | Fail tunggal yang anda pilih untuk dihantar, kepada API Dropbox (`api.dropboxapi.com` untuk log masuk dan metadata, `content.dropboxapi.com` untuk fail itu sendiri), selepas anda melengkapkan log masuk Dropbox dalam tetingkap Dropbox sendiri. Akses Lolly hanya terhad kepada folder aplikasi (ia hanya boleh melihat `Apps/` dan folder sendirinya di situ - tidak pernah selebihnya Dropbox anda), pautan "Open" yang dipaparkan ialah pautan peribadi berjangka pendek (tiada perkongsian awam dicipta), dan token muat semula (refresh token) hanya disimpan jika anda menandakan "stay connected" | Hanya apabila anda menekan "Send to Dropbox" pada sesuatu fail, dan hanya pada binaan di mana pengendali telah mengkonfigurasikan id klien Dropbox - tanpa satu, butang itu tidak wujud | Butang itu tidak pernah muncul. Muat turun fail itu dan muat naiknya sendiri ke Dropbox |
| Send to OneDrive | Fail tunggal yang anda pilih untuk dihantar, kepada perkhidmatan identiti dan Graph Microsoft (`login.microsoftonline.com` untuk log masuk, `graph.microsoft.com` untuk muat naik; fail besar dimuat naik secara berkelompok (chunks) ke alamat muat naik milik Microsoft di `api.onedrive.com`, `*.up.1drv.com` atau `*.sharepoint.com`), selepas anda melengkapkan log masuk Microsoft dalam tetingkap Microsoft sendiri. Akses Lolly terhad kepada folder sendirinya di bawah `Apps/` (ia tidak pernah boleh membaca selebihnya OneDrive anda) ditambah nama paparan anda untuk label akaun, dan token muat semula hanya disimpan jika anda menandakan "stay connected" | Hanya apabila anda menekan "Send to OneDrive" pada sesuatu fail, dan hanya pada binaan di mana pengendali telah mengkonfigurasikan id klien Microsoft - tanpa satu, butang itu tidak wujud | Butang itu tidak pernah muncul. Muat turun fail itu dan muat naiknya sendiri ke OneDrive |
| Profil cetakan ICC | Tiada apa-apa yang peribadi - permintaan untuk profil syarat cetakan piawai, kepada registri awam ICC (`registry.color.org`, `www.color.org`) | Hanya jika anda mengklik pratetap ICC dalam pengurus profil cetak - satu kali capaian bagi setiap profil, kemudian ia kekal pada peranti anda | Pratetap ICC gagal. Sediakan profil `.icc` anda sendiri sebagai gantinya |
| Radio Internet | Tiada apa-apa yang peribadi - permintaan senarai main dan strim audio, kepada stesen (`api.somafm.com` dan pelayan icecast yang dinamakannya, `*.somafm.com`) | Hanya semasa anda memainkan radio terbina dalam pilihan dalam pemain bunyi | Radio itu gagal. Setiap ciri bunyi lain masih berfungsi |
| URL yang anda minta alat untuk tangkap | Permintaan kepada alamat web tepat yang anda taip, daripada alat tangkapan skrin URL. Apa sahaja alamat itu. Hos ini tiada dalam dasar di bawah, kerana anda memilihnya pada saat penggunaan | Hanya apabila anda memasukkan URL dalam alat itu dan memulakan tangkapan | Pengendali tidak boleh membenarkan (allowlist) ini mengikut hos. Untuk membuangnya, buang alat itu |
| Semakan tandatangan SEAL | **Tiada apa-apa.** Aplikasi web ini tiada penyelesai DNS (DNS resolver) langsung - lihat di bawah | Tidak pernah | Tiada apa-apa untuk disekat |
| Model pengesan imbasan mendalam | Tiada apa-apa yang peribadi - muat turun model asal usul sama (same-origin) sekali sahaja (bukan pihak ketiga) | Hanya jika anda memilih untuk menyertai imbasan mendalam Verify | Imbasan mendalam tidak tersedia. Pengesahan standard masih berfungsi |
| Instans jauh | Apa sahaja yang dihantar balik oleh instans yang anda namakan, melalui penyegerakan katalog yang sama seperti diterangkan di atas. Anda memilih hos itu pada saat penggunaan, jadi ia tiada dalam dasar di bawah | Hanya jika anda secara jelas mengarahkan shell ke penggunaan Lolly yang lain | Pertukaran instans gagal. Instans tempatan anda tidak terjejas |

Setiap hos tetap dalam jadual itu juga merupakan senarai benar (allowlist) lengkap dalam
Content-Security-Policy aplikasi, yang dikuatkuasakan oleh pelayar. Jadi senarai itu bukan sekadar
penerangan tentang apa yang dilakukan oleh kod hari ini, ia adalah sempadan yang dipegang oleh pelayar terhadap
aplikasi: sebarang perubahan pada masa depan yang cuba menghubungi hos lain akan disekat,
bukan dibenarkan secara senyap. Dua baris tiada hos tetap, kerana anda memilih
alamat itu pada saat penggunaan: URL yang anda minta alat untuk tangkap, dan instans
jauh yang anda arahkan shell kepadanya. Kedua-duanya tiada dalam dasar, dan setiap satu berlaku hanya
apabila anda menaip alamat dan bertindak atasnya. Sesuatu penggunaan yang tidak mahu mana-mana
ciri pilihan itu (contohnya instans perusahaan dengan fon sendiri) membuang
hos tersebut daripada dasarnya dan ciri-ciri itu gagal secara tertutup dan bukannya menghubungi keluar.

Tiada satu pun daripada ini menghantar dokumen, projek, sesi atau fail yang dimuat naik anda ke mana-mana.
Ia wujud untuk membawa perkara *kepada* peranti anda (alat, fon, model), bukan untuk menghantar
perkara *daripadanya*, kecuali pengecualian yang dinamakan secara jelas dalam bahagian di bawah.

**Nota tentang apa yang kami buang.** Verify boleh menyemak tandatangan SEAL, satu skema di mana
kunci penandatanganan fail diterbitkan dalam DNS. Pelayar tidak boleh membuat pertanyaan DNS, jadi mana-mana
pelaksanaan web perlu menghalakan carian itu melalui penyelesai DNS-over-HTTPS pihak ketiga
- yang akan menunjukkan kepada pengendali itu domain yang sedang disemak berserta alamat IP
anda. Dahulu kami menggunakan milik Cloudflare. **Kami tidak lagi berbuat demikian, dan tiada
penggantinya**: aplikasi web kini tidak menghantar sebarang penyelesai langsung, jadi pengesahan SEAL
di sini tidak membuat sebarang permintaan rangkaian. Fail yang rekod SEAL-nya membawa kuncinya secara terus (inline)
masih boleh disahkan sepenuhnya secara luar talian. Fail yang kuncinya berada dalam DNS akan melaporkan "tiada penyelesai
kunci" sebagai gantinya, dan anda boleh menyemaknya dalam aplikasi desktop atau baris arahan,
yang menyelesaikan DNS secara asli melalui mesin anda sendiri tanpa melibatkan pihak ketiga.

![Skrin Verify: sasaran jatuh (drop target) dan tiada apa-apa lagi - fail disemak di tempat ia sudah berada, tanpa muat naik dan tanpa akaun](/t/url-shot?url=%2F%23%2Fverify&width=1440&height=900&dpi=192&waitMs=1400&walker=1&format=svg&cropSelector=.valid-layout&dark=1&filename=cc-verify-drop) Anda boleh sahkan ini sendiri: semakan boleh-grep untuk dakwaan ini dan setiap
lain dakwaan lain pada halaman ini, berserta arahan tepat dan output yang dijangka, terletak di
[Verify It Yourself](/info/verify-yourself.html).

## URL render pautan-terus (hot-linked)

> **Kini dimatikan pada lolly.tools.** Setiap
> URL `https://lolly.tools/tool/<tool-id>.<ext>` memulangkan 404 pada hari ini. Bahagian
> di bawah menerangkan apa yang dilakukan oleh ciri ini apabila pengendali mengaktifkannya, dan sebab kami
> tidak berbuat demikian. Ia akan diaktifkan di sini sebaik sahaja perkhidmatan berpindah ke
> infrastruktur yang dikendalikan SUSE, dan notis ini akan berubah apabila ia berlaku.

Aplikasi itu sendiri kekal sepenuhnya pada peranti anda. Secara berasingan, pengendali boleh mengaktifkan
**URL render pautan-terus** - `/tool/<tool-id>.<ext>?<inputs>` - supaya pautan Lolly
yang dikongsi boleh muncul sebagai imej langsung dalam README, wiki atau papan pemuka.
Mengambil satu daripadanya meminta pelayan untuk merender **data alat dan katalog awam**
dengan input yang ditulis ke dalam URL.

- <!--i:usercheck--> **Tiada akaun, tiada kuki, tiada keadaan (state).** Titik akhir ini tanpa nama, dan tiada apa-apa
  pada peranti anda dibaca. Dokumen, sesi dan muat naik anda tidak pernah meninggalkan
  pelayar anda - ia langsung tidak boleh muncul dalam pautan ini.
- <!--i:document--> **Tetapi URL itu sendiri direkodkan.** Rentetan pertanyaan (query string) sesuatu URL adalah sebahagian daripada baris
  permintaan, jadi ia mendarat dalam log capaian biasa platform pengehosan sama seperti
  setiap laluan yang diminta. Jika input sesuatu pautan mengandungi nama atau e-mel seseorang -
  lencana nama, tandatangan e-mel - **teks itu berada dalam log tersebut**, dan tiada
  susunan kata dasar dapat mengubahnya. Ini sebab khusus mengapa ciri ini
  dimatikan di sini dan bukannya dihidupkan.
- <!--i:globe--> **Input itu bersifat awam mengikut binaannya** dalam apa jua keadaan - ia adalah apa sahaja yang ditaip
  oleh pencipta pautan itu ke dalam URL, boleh dibaca oleh sesiapa yang menerima pautan itu. Jangan letak
  rahsia dalam pautan yang dikongsi. Lolly menawarkan penyulitan pautan untuk kandungan sensitif.
- <!--i:eyeoff--> Respons **dicache dan dihadkan kadar (rate-limited)** seperti mana-mana imej awam, dan ditanda
  `noindex` supaya enjin carian tidak mengindeks render anda.

Menghoskan Lolly sendiri dan tidak mahu permukaan render awam? Tetapkan
`LOLLY_DISABLE_RENDER_GET=1` - iaitu apa yang dilakukan oleh lolly.tools sendiri pada masa ini - dan setiap
satu daripada URL ini akan memulangkan 404.

## Pelayan MCP (pilihan, untuk ejen AI)

Lolly juga boleh dicapai oleh ejen AI melalui Model Context Protocol - satu
titik akhir yang dikendalikan pengendali (lolly.tools menjalankan satu; sesiapa sahaja boleh hoskan sendiri,
termasuk yang sepenuhnya terpisah rangkaian/air-gapped). Ia berkongsi pendirian tanpa-akaun laluan render,
ditambah tiga alat yang semestinya mengendalikan bait fail:

- <!--i:cpu--> **`lolly_transform`** (menjalankan utiliti pada peranti di pihak pelayan, bagi
  pihak ejen yang memanggilnya), **`lolly_verify`** (menyemak Content Credentials) dan **`lolly_redact`**
  (menggelapkan kawasan imej atau PDF) semuanya menerima
  bait fail daripada pemanggil. Ia diproses **dalam proses itu sendiri, dalam memori**,
  dan hasilnya dipulangkan dalam panggilan yang sama - fail itu tidak pernah ditulis ke
  cakera dan tidak pernah disimpan sebaik sahaja permintaan itu selesai.
- <!--i:checklist--> Setiap alat lain - `lolly_render`, `lolly_build_url`, `lolly_list_tools`,
  `lolly_describe_tool` - berfungsi berdasarkan parameter sahaja (teks, nombor, warna,
  URL, id aset katalog), input yang sama seperti yang diambil oleh URL render pautan-terus.
- <!--i:lock--> Akses sama ada token dikongsi yang dikeluarkan oleh pengendali kepada klien yang dipercayainya, atau
  OAuth 2.1 tanpa keadaan (stateless): token bertandatangan berjangka pendek yang disahkan terhadap rahsia
  yang dikongsi, tiada apa-apa disimpan di pihak pelayan dan token itu sendiri tidak pernah ditulis ke
  log atau URL render.

## Identiti Content Credentials (log masuk yang perlu anda mulakan sendiri)

Lolly boleh memeteraikan **Content Credential** kriptografi ke dalam eksport anda supaya sesiapa sahaja
boleh mengesahkan, secara luar talian, bahawa fail tidak diubah sejak ia meninggalkan Lolly. Itu sahaja
sudah **dihidupkan secara lalai dan sepenuhnya setempat** - kunci tandatangan dijana pada peranti anda
dan penandatanganan itu sendiri berlaku secara luar talian. Tanpa pendaftaran, kunci itu adalah sekali guna:
sepasang kunci baharu dicetak untuk setiap eksport dan dibuang bersamanya. Sebaik sahaja anda mendaftar,
kunci itu menjadi kekal dan dijana sebagai **tidak boleh diekstrak** - malah kod Lolly
sendiri tidak boleh membacanya, hanya boleh memintanya menandatangani. Walau apa pun, ia tidak pernah meninggalkan
peranti anda. Bahagian ini merangkumi satu langkah *pilihan* di atas itu:
mendaftarkan identiti yang disahkan, supaya eksport anda memaparkan "Verified - signed by
\<your email\>" dan bukannya kunci tanpa nama. **Jika anda melangkau pendaftaran, tiada apa dalam
bahagian ini terpakai kepada anda, dan tiada data peribadi akan meninggalkan peranti anda.**

![Kad identiti Verified pada halaman profil, lebar telefon: pemilih jangka hayat sijil dan langkah pendaftaran di bawahnya, tidak aktif sehingga anda memulakannya sendiri](/t/url-shot?url=%2F%23%2Fprofile%3Ffocus%3Didentity-section&width=430&height=1600&dpi=192&waitMs=2400&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone%7D&format=svg&walker=1&cropSelector=%23identity-section&dark=1&filename=pv-identity-enrol)

Jika anda mendaftar, inilah dengan tepat apa yang berlaku:

1. **Anda memilih kaedah log masuk** - GitHub, Google, SUSE (id.suse.com) atau pautan
   yang dihantar melalui e-mel. Untuk ketiga-tiga penyedia OIDC, anda dihalakan semula ke halaman
   log masuk penyedia itu sendiri, ditadbir oleh dasar privasi mereka, bukan kami.
   Perkhidmatan sijil Lolly hanya menerima balik alamat e-mel yang disahkan dan
   nama penyedia itu. Untuk pautan e-mel, alamat yang anda taip dihantar kepada
   **Resend**, satu API e-mel transaksi, semata-mata untuk menghantar pautan tunggal itu.
2. **Kuki berjangka pendek melindungi pengalihan (redirect).** Ini ialah satu-satunya kuki yang ditetapkan oleh
   keseluruhan sistem Lolly: `lolly_ca_state`, `HttpOnly`, terhad kepada `/api/ca`,
   tamat tempoh dalam masa sepuluh minit. Ia membawa nilai rawak, bukan pengenal pasti
   penjejakan, dan wujud hanya untuk menghalang pengalihan OAuth daripada dipalsukan. Ia
   dikosongkan sebaik sahaja log masuk selesai.
3. **Alamat IP anda digunakan, secara singkat, untuk mencegah penyalahgunaan** titik akhir
   log masuk (supaya satu skrip tidak boleh menyepam peti masuk atau menghabiskan kuota e-mel) - disimpan
   dalam memori pelayan sahaja, untuk tetingkap gelongsor (sliding window) selama kira-kira seminit, tidak pernah ditulis
   ke log atau disimpan kekal di mana-mana.
4. **Perkhidmatan sijil mengeluarkan sijil berjangka pendek** (7, 30, 90 atau 365
   hari, mengikut pilihan anda, dihadkan oleh dasar pengendali) yang mengikat e-mel yang disahkan
   anda kepada separuh awam pasangan kunci yang dijana pada peranti anda. Separuh
   peribadi tidak pernah meninggalkan pelayar anda.
5. **Tiada apa-apa tentang pengeluaran itu direkodkan.** Perkhidmatan sijil tidak menyimpan
   log pengeluaran: bukan e-mel anda, bukan penyedia, bukan nombor siri, bukan
   cap masa. Tiada pangkalan data, tiada baris log, tiada webhook. Alamat e-mel anda wujud dalam
   permintaan itu hanya cukup lama untuk ditulis ke dalam sijil yang diterima oleh peranti anda
   sendiri, dan selepas itu ia hilang sepenuhnya daripada pihak kami.
6. **Selepas itu, penandatanganan kembali luar talian** untuk sepanjang jangka hayat sijil itu.
   Mengeksport fail tidak pernah menghubungi perkhidmatan sijil - hanya pendaftaran yang berbuat demikian.

**Pertukaran (tradeoff), dinyatakan dengan jelas.** Versi terdahulu perkhidmatan ini memang melog setiap
pengeluaran, supaya sijil yang dikeluarkan secara silap atau terjejas dapat dijejaki. Kami
membuangnya, kerana log itu adalah satu-satunya tempat dalam keseluruhan Lolly di mana data
peribadi berehat pada pelayan, dan kami lebih rela tidak menyimpannya daripada menyimpannya
dengan berhati-hati. Apa yang kami korbankan ialah kebolehjejakan di pihak pelayan: jika sesuatu sijil
disalahgunakan, kami tidak dapat mencari siapa yang memperolehnya. Sijil-sijil bersifat berjangka pendek mengikut
reka bentuk - 7 hingga 365 hari, mengikut pilihan anda, dihadkan oleh pengendali - dan tamat tempoh dengan
sendirinya, iaitu langkah pengurangan risiko yang kami bergantung kepadanya sebagai gantinya. Pengendali yang menghoskan sendiri yang kewajipan
mereka sendiri memerlukan log audit boleh menambah satu, dan dengan berbuat demikian menjadi pengawal
data itu.

## Sambungan pelayar

Sambungan pelayar **Lolly URL Screenshot** tidak mengumpul, menyimpan atau
menghantar sebarang data peribadi. Tiada analitik, tiada penjejakan, tiada pelayan jauh.

**Apa yang ia lakukan.** Apabila anda meminta aplikasi web Lolly untuk menangkap skrin sesuatu URL,
sambungan itu membuka halaman tersebut dalam tab latar belakang sementara, menangkapnya dalam
pelayar anda menggunakan DevTools Protocol, menyerahkan imej itu kembali kepada aplikasi dan menutup
tab itu. Segala-galanya berlaku secara tempatan, pada peranti dan rangkaian anda sendiri.

**Data.**

- <!--i:shieldcheck--> **Kami tidak mengumpul apa-apa.** Sambungan ini tiada pelayan dan tidak membuat sebarang
  permintaan rangkaian sendiri.
- <!--i:photos--> **Imej yang ditangkap** terus pergi ke aplikasi Lolly dalam pelayar yang sama - tidak pernah
  dimuat naik oleh sambungan itu.
- <!--i:link--> **URL yang anda tangkap** digunakan hanya untuk memuatkan halaman tunggal itu bagi tangkapan skrin
  tunggal itu. Ia tidak dilog atau dikongsi.

**Kebenaran.**

- <!--i:wrench--> **`debugger`** - untuk menangkap halaman yang dirender melalui DevTools Protocol (mekanisme
  yang sama digunakan oleh aplikasi desktop Lolly).
- <!--i:monitor--> **`tabs`** - untuk membuka dan menutup tab sementara tempat halaman itu dimuatkan.
- <!--i:globe--> **Akses hos (`<all_urls>`)** - kerana halaman yang anda pilih untuk ditangkap boleh berada
  pada mana-mana laman. Chrome memaparkan ini pada waktu pemasangan sebagai amaran
  kebenaran yang luas. Sambungan ini hanya sekali-kala melawat URL yang anda berikan kepadanya.

Tiada satu pun daripada ini digunakan untuk membaca, memantau atau menghantar penyemakan imbas anda melebihi
tangkapan tunggal yang diminta itu.

## Log infrastruktur

Seperti mana-mana laman web, pelayan di sebalik lolly.tools - dan di sebalik mana-mana
penggunaan Lolly - menjana log capaian pelayan web piawai setiap kali sesuatu permintaan sampai
kepadanya: alamat IP, laluan yang diminta, cap masa, ejen pengguna (user agent). Itu ialah tingkah laku pengehosan
asas, bukan sesuatu yang ditambah oleh Lolly di atasnya, dan ia tidak pernah mengandungi kandungan
dokumen anda, kerana dokumen itu tidak pernah sampai ke pelayan sejak awal lagi. Satu-satunya
pengecualian yang disengajakan ialah fail yang anda serahkan secara jelas kepada panggilan MCP
`lolly_transform`, `lolly_verify` atau `lolly_redact`, yang diproses dalam memori dan tidak pernah
ditulis ke cakera atau log, seperti diterangkan di atas.

**Kod Lolly sendiri tidak menulis apa-apa ke log tersebut.** Pelayan MCP langsung tiada
penyataan pengelogan. Perkhidmatan sijil menghasilkan tepat dua baris sahaja, kedua-duanya
apabila gagal dan kedua-duanya sengaja dilucutkan: kod status kegagalan hantar tanpa
alamat penerima, dan mesej ralat tanpa jejak tindanan (stack trace) atau URL (jejak tindanan boleh
membawa token pendaftaran). Segala-galanya yang lain dalam log itu adalah milik platform pengehosan,
bukan milik kami.

Untuk lolly.tools, pengehosan ialah Vercel dan tempoh simpanan log capaian mengikut
tetapan lalai platform Vercel sendiri untuk pelan kami. Kami tidak mengkonfigurasikan sebarang saliran log,
sebarang eksport log jangka panjang dan sebarang produk analitik atau pemantauan tambahan. Kami tidak menyimpan sebarang salinan
log ini sendiri, yang juga bermakna kami tiada cara untuk mencarinya bagi pihak anda - lihat
[Your rights](#your-rights).

## Asas undang-undang, tempoh simpanan dan penerima

Hampir tiada apa-apa di sini yang memerlukan asas undang-undang, kerana hampir tiada apa-apa yang diproses. Untuk
kelengkapan, senarai penuhnya:

| Pemprosesan | Asas undang-undang (GDPR Art. 6) | Disimpan untuk |
|---|---|---|
| Segala sesuatu pada peranti anda (dokumen, keutamaan, cache, kaunter) | **Bukan pemprosesan kami langsung** - ia tidak pernah sampai kepada kami. Penyimpanan pada peranti anda adalah perlu secara ketat untuk perkhidmatan yang anda minta (ePrivacy Art. 5(3)), jadi ia tidak memerlukan persetujuan | Sehingga anda memadamkannya |
| Alamat e-mel anda semasa pendaftaran Content Credentials | **Art. 6(1)(b)**, pelaksanaan perkhidmatan yang anda minta secara jelas | Tidak disimpan. Wujud dalam memori hanya sepanjang tempoh permintaan |
| Alamat IP anda pada titik akhir log masuk, untuk had kadar | **Art. 6(1)(f)**, kepentingan sah kami dalam mencegah penyalahgunaan perkhidmatan percuma dan kuota e-mel pihak ketiga. Kami menganggap ini melepasi ujian pengimbangan kerana ia hanya dalam memori, tidak pernah ditulis dan dibuang dalam masa kira-kira seminit | ~1 minit, dalam memori pelayan, tidak pernah dikekalkan |
| Log akses pengehosan (IP, laluan, cap masa, agen pengguna) | **Art. 6(1)(f)**, kepentingan sah kami dalam keselamatan perkhidmatan, pencegahan penyalahgunaan dan diagnosis kerosakan | Lalai platform Vercel untuk pelan kami. Kami tidak menambah sebarang saliran atau eksport |

**Penerima.** Kategori penerima adalah: penyedia pengehosan kami (Vercel
Inc.), dan - hanya jika anda menggunakan pilihan log masuk e-mel - penyedia
e-mel transaksi (Resend). Jika anda log masuk dengan GitHub, Google atau SUSE (id.suse.com), anda
berinteraksi dengan penyedia itu secara terus di bawah dasar privasi mereka sendiri. Mereka memberitahu
kami alamat e-mel yang disahkan dan tiada apa-apa lagi. Kami tidak berkongsi data peribadi dengan sesiapa
yang lain, dan kami tidak menjual data, menjalankan pengiklanan atau memprofil pengguna.

**Pemindahan di luar EEA.** Vercel dan Resend adalah syarikat AS. Pengkomputeran fungsi
untuk lolly.tools ditetapkan pada rantau Frankfurt (`fra1`) Vercel supaya
pemprosesan berlaku di EU, tetapi sebagai penyedia berpangkalan AS mereka masih boleh
mengakses data sebagai pemproses dari AS. Pemindahan tersebut bergantung pada Klausa Kontrak
Standard Suruhanjaya Eropah dan/atau Rangka Kerja Privasi Data EU-AS, seperti
yang dinyatakan dalam perjanjian pemprosesan data setiap penyedia. Oleh kerana
data peribadi yang sampai kepada mana-mana penyedia amat terhad - alamat e-mel yang diteruskan
untuk menghantar satu mesej, dan log akses biasa - pendedahannya
adalah kecil setimpal.

**Membuat keputusan automatik.** Tiada. Tiada pemprofilan dan tiada keputusan automatik
yang menghasilkan kesan undang-undang atau kesan besar yang serupa (Art. 22).

## Privasi kanak-kanak

Lolly tidak mengumpul maklumat peribadi secara sedar daripada sesiapa, pada mana-mana umur, dalam
perjalanan biasa penggunaan aplikasi - tiada apa-apa untuk dikumpul. Satu-satunya tempat
maklumat peribadi (alamat e-mel) pernah dikumpul ialah pendaftaran Content Credentials,
yang diterangkan di atas, yang tidak ditujukan atau dimaksudkan untuk kanak-kanak.

## Hak anda

Oleh kerana hampir semua yang disentuh Lolly hanya disimpan pada peranti anda sendiri, kebanyakan
apa yang undang-undang perlindungan data panggil "hak anda" - akses, pembetulan, pemadaman,
kemudahalihan - adalah perkara yang anda sudah boleh lakukan sendiri, serta-merta, tanpa bertanya
sesiapa: data anda tinggal dalam storan pelayar anda, dalam bentuk yang boleh anda periksa,
eksport (**Export my data & render everything**, di atas) atau padam (**Profile → Clear all
my data**).

Secara rasmi, di bawah Artikel 15-22 GDPR anda mempunyai hak untuk **mengakses** data
peribadi anda, untuk **membetulkannya**, untuk **memadamkannya**, untuk **menyekat** atau **membantah
terhadap** pemprosesannya (termasuk membantah apa-apa yang kami asaskan pada kepentingan sah), untuk
**kemudahalihan data** dan - jika pemprosesan bergantung pada persetujuan - untuk
**menarik balik persetujuan itu pada bila-bila masa**, tanpa menjejaskan kesahan apa yang
berlaku sebelum anda menariknya balik.

Berikut ialah kedudukan sebenar mengenai melaksanakan hak tersebut terhadap kami. Oleh kerana kami tidak lagi
menyimpan log pengeluaran, **kami tidak menyimpan sebarang data peribadi tentang anda yang boleh kami cari,
betulkan, eksport atau padam.** Jika anda menulis dan bertanya apa yang kami ada tentang anda, jawapan
yang benar ialah tiada apa-apa, dan kami akan berkata demikian. Satu-satunya kategori yang wujud langsung
ialah log akses pengehosan yang dikaitkan dengan alamat IP, disimpan oleh penyedia pengehosan kami
mengikut lalai tempoh simpanan mereka. Kami tidak mempunyai kemudahan untuk mencari atau memadam secara terpilih
log tersebut, dan kami akan memberitahu anda demikian dan bukannya berpura-pura sebaliknya. Segala sesuatu
yang benar-benar *milik anda* berada pada peranti anda, di mana anda sudah boleh membaca, mengeksport
dan memusnahkannya tanpa meminta kebenaran sesiapa.

**Anda mempunyai hak untuk membuat aduan.** Jika anda rasa kami telah mengendalikan data anda
dengan tidak wajar, anda boleh memfailkan aduan kepada pihak berkuasa penyeliaan perlindungan
data - di EU, pihak berkuasa di negara kediaman anda, tempat kerja anda atau tempat anda percaya
pelanggaran itu berlaku (Art. 77). Pihak berkuasa penyeliaan utama kami ialah *Bayerisches
Landesamt für Datenschutzaufsicht* (BayLDA) di Ansbach, Jerman. Anda tidak perlu menghubungi kami
dahulu, walaupun kami ingin diberi peluang untuk membetulkannya.

Kami tidak menjual data. Kami tiada apa-apa untuk dijual.

## Perubahan pada dasar ini

Tarikh di bahagian atas berubah setiap kali dokumen ini berubah. Perubahan yang mengubah
apa yang meninggalkan peranti anda atau apa yang disimpan mendapat barisnya sendiri di sini, bukan suntingan
senyap - jika anda ingin melihat apa yang berubah, tanya (di bawah) atau bandingkan dengan
[sumber awam](https://github.com/lolly-tools/lolly/commits/main/docs/privacy.md).

## Siapa yang bertanggungjawab, dan cara menghubungi kami

**Pengawal data** untuk lolly.tools ialah:

> SUSE Software Solutions Germany GmbH
> Frankenstraße 146
> 90461 Nürnberg
> Germany

SUSE telah melantik **Pegawai Perlindungan Data**, boleh dihubungi di
[privacy@suse.com](mailto:privacy@suse.com). Gunakan alamat itu untuk sebarang permintaan
rasmi di bawah "Hak anda" di atas.

Untuk apa-apa berkaitan Lolly itu sendiri - cara ia berfungsi, sebab sesuatu dibuat sedemikian atau
pembetulan pada dokumen ini - hubungi **Andy Fitzsimon**,
[fitzy@suse.com](mailto:fitzy@suse.com).

Untuk contoh Lolly yang dihoskan sendiri atau perusahaan, hubungi sesiapa yang mengendalikannya
sebaliknya: pengendali ialah pengawal untuk penggunaan mereka sendiri. SUSE dan projek
sumber terbuka Lolly tidak menyimpan sebarang data untuk penggunaan yang tidak mereka jalankan.
