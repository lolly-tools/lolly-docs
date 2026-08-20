# Lolly untuk Operator

### Strategi keamanan & intelijen defence-in-depth - yang kebetulan juga sebuah platform produksi kreatif

Sistem imun organisasi zero-trust yang membungkus apa yang sudah Anda lakukan - sehingga pekerjaan kreatif rutin yang dibutuhkan tim Anda setiap hari terjadi *di dalam* perimeter Anda, bukan bocor keluar darinya.

**Apa untungnya bagi Anda.** Anda menjadi orang yang mengatakan ya untuk sesuatu yang aman *sekaligus* populer. Anda menutup lubang eksfiltrasi, memperoleh kapabilitas dan menghapus antrean permintaan dalam satu langkah - kemenangan keamanan langka yang membuat Anda lebih disukai, bukan sebaliknya. Tidak ada telepon jam 3 pagi dari legal karena file embargo atau data pelanggan masuk ke tool web sembarangan; lebih sedikit vendor SaaS, kontrak dan audit di meja Anda; dan jejak audit yang sepenuhnya bisa direproduksi untuk ditunjukkan saat ada yang bertanya. Anda tidur lebih nyenyak, dan mencerahkan beberapa hari sambil melakukannya.

Lolly bukan tool kreatif kelas dua: ia menaruh keluaran berkualitas produksi di tangan semua orang, dan pengalaman penciptaan yang dipandu brand ini tak tertandingi. Alasan ia *aman* untuk dibagikan secara luas bersifat arsitektural: tidak ada yang terunggah kecuali yang Anda taruh sendiri, setiap hasil bisa direproduksi dan setiap ekspor bisa membawa beberapa lapis catatan kriptografis kelas terdepan industri. Tidak peduli bagaimana sebuah dokumen sampai ke meja Anda, Anda bisa melihat provenansnya secara utuh, apakah ia telah diubah dan apakah Anda bisa membuatnya ulang persis piksel demi piksel.

> **Di mana posisinya hari ini.** Properti keamanan Lolly kuat by design, dan mesin kriptografi serta parsing file-nya sedang melalui pengerasan infrastruktur kelas enterprise milik SUSE. Segel, penandatanganan on-device dan enkripsi di bawah ini nyata dan dapat dipertanggungjawabkan sekarang, serta sedang matang menuju sertifikasi independen - jadi bila sebuah kontrak menuntut jaminan bersertifikat, terapkan ini sebagai defence-in-depth sementara proses itu berlangsung.

## Keunggulan strategis

Cara biasa pekerjaan kreatif rutin dikerjakan adalah permukaan liabilitas: file dikirim lewat email ke kontraktor desain eksternal, aset brand diunggah ke selusin editor SaaS, data pelanggan ditempel ke tool web milik orang asing untuk "sekadar bikin grafik cepat". Setiap satu dari itu adalah data yang keluar dari kendali Anda.

Lolly membaliknya. Pekerjaan yang *memicu* kebocoran itu - kartu kutipan, banner terlokalisasi, badge acara, tangkapan layar yang disunting - kini terjadi pada tool yang berjalan di perangkat karyawan sendiri, terhadap brand Anda, tanpa server yang terlibat. Anda tidak menambahkan kontrol di atas alur kerja berisiko; Anda mengganti alur kerja berisiko itu dengan yang sejak awal tidak memiliki jalur eksfiltrasi.

- **Konfigurasi milik Anda.** Engine dan shell bersifat open source (MPL-2.0). Lapiskan autentikasi, telemetri atau CA milik Anda sendiri; host sendiri atau tidak; Anda memegang kendali penuh atas fitur dan biaya, dilacak lewat git, tidak terkunci dalam database SaaS.
- **Governance bisa berupa data, bukan dashboard.** Ketika Anda menginginkan kontrol itu, kelola katalog tool sebagai repositori Git - review pull request menjadi persetujuan brand, dengan jejak audit penuh dan rollback instan untuk setiap template yang bisa disentuh tenaga kerja Anda. Ini pilihan, bukan kewajiban, dan mendarat di tepat satu meja: pembuat bekerja sepenuhnya di dalam aplikasi, menyimpan hasil karyanya sebagai **sesi** dan meneruskannya sebagai tautan berbagi, backup atau kolaborasi langsung - tak satu pun dari itu memerlukan git. Ketika salah satu sesi itu layak menjadi titik awal permanen, siapa pun yang menjalankan deployment membuka tautannya, mencatat nilainya sebagai **template** pada tool itu di brand pack lalu commit. Sejak itu ia muncul di pemilih "New from template" tool tersebut dan bisa ditautkan langsung sebagai `?template=<id>`. Git adalah langkah penguncian admin, dipakai sekali, dan bukan sesuatu yang harus disentuh pembuat. Lihat [Adoption & Governance](/info/adoption-governance.html).
- **Guard-rail bersifat struktural.** Batasan brand di-hardcode ke dalam template, bukan diterbitkan sebagai pedoman yang bisa diabaikan orang. Keluaran yang salah bukan sekadar tidak dianjurkan - ia tidak bisa diwujudkan.

> **Anda mengatur seluruh relay.** Seorang kreatif menulis aturan dan seorang developer menskalakannya, tapi operatorlah yang membuat siklus hidup itu aman dijalankan seluas organisasi - tool yang sama yang memungkinkan seorang rep melayani diri sendiri di pesawat adalah tool yang bisa Anda gerbangi lewat review Git, deploy lewat MDM Anda dan verifikasi secara kriptografis. Lihat bagaimana peran-peran itu bertumpuk di [The lifecycle of a campaign](/info/overview.html#the-lifecycle-of-a-campaign), dan bagaimana Anda mengaturnya di [Adoption & Governance](/info/adoption-governance.html).

## Hapus antrean permintaan sambil memperbanyak konten.

Salah satu tujuan Lolly adalah **deflection permintaan desain**: permintaan rutin yang tidak pernah perlu sampai ke desainer karena orang yang membutuhkan aset itu membuatnya sendiri, dengan benar, dalam hitungan menit. Setiap tiket yang terdeflect adalah kemenangan produktivitas sekaligus satu file lebih sedikit yang berpindah tangan.

Lolly dibangun untuk menyesuaikan cara organisasi Anda sebenarnya beroperasi - tidak ada satu cara yang benar untuk men-deploy-nya:

- **Deploy, jangan sajikan.** Kirim Lolly ke perangkat lewat MDM yang sudah Anda miliki (Intune, Jamf, Munki…). Ia berjalan secara lokal sebagai aplikasi desktop/mobile atau PWA offline - bekerja di balik firewall apa pun, di lingkungan air-gapped mana pun, tanpa server yang perlu dirawat dan IT memegang kendali kadensi pembaruan.
- **Sajikan saja.** Jalankan satu instance di dalam jaringan Anda (atau di balik VPN); pengguna mengaksesnya lewat browser, tanpa instalasi apa pun. Terbitkan sebuah tool sekali, semua orang langsung memilikinya; pasangkan dengan IdP Anda untuk kontrol akses.
- **Hybrid.** Aplikasi lokal untuk kerja lapangan offline, versi browser yang selalu terkini untuk perangkat pinjaman - keduanya menunjuk ke pustaka tool yang sama.

Model deployment lengkap dan panduan administrasi ada di [Deployment](/info/deployment.html) dan [Configuration](/info/configuration.html).

## Utilitas anti-eksfiltrasi

Sebuah kategori tool Lolly - utilitas privasi - ada *khusus* untuk menjaga file tetap di dalam perimeter.


- **Strip hidden data**
 Hapus lokasi dan semua informasi identitas tersembunyi dari dokumen dan file media.

- **Text Helper**  
Anonimkan, enkode, format, dan manipulasi teks terstruktur dan tidak terstruktur. 

- **Compress PDF**
Perkecil ukuran PDF yang terlalu besar langsung di perangkat, sehingga tidak ada yang beralih ke situs pihak ketiga "compress my PDF" begitu file terlalu besar untuk dikirim lewat email - yang justru menjadi titik kebocoran data. 

Semua ini adalah transformasi di perangkat: file atau data Anda masuk, byte yang sudah dibersihkan keluar, dan **tidak ada server untuk diunggah**. Ini sengaja dibuat sebagai kebalikan dari alat "unggah file Anda ke situs orang asing untuk membersihkannya" yang biasa dituju oleh karyawan yang bermaksud baik.

![Strip Hidden Data: file mendarat di kanvas dan lencana menyatakan dengan jelas bahwa tidak ada yang diunggah](/t/url-shot?url=%2F%23%2Ftool%2Fstrip-data&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=aud-strip-data)

Text Helper menawarkan hal yang sama untuk teks, bukan file. Ini adalah ruang kerja bertab yang seharusnya dicari karyawan di situs orang asing, dan alat ini tidak mendeklarasikan input sama sekali karena tidak ada yang disentuhnya yang pernah meninggalkan halaman.

![Ruang kerja Text Helper - deretan tab operasi di atas kartu yang menyatakan bahwa tidak ada yang Anda tempel meninggalkan perangkat Anda](/t/url-shot?url=%2F%23%2Ftool%2Ftext-helper&width=1200&height=750&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-content&dark=1&filename=ov2-text-helper)

Compress PDF melengkapi rangkaian ini: lampiran yang terlalu besar diperkecil sesuai pengaturan kualitas yang Anda pilih, di mesin yang sudah menyimpannya.

![Compress PDF - tingkat kualitas dan sakelar skala abu-abu di sebelah kiri, zona letak untuk PDF Anda sendiri di sebelah kanan, dan tanpa unggahan di mana pun](/t/url-shot?url=%2F%23%2Ftool%2Fcompress-pdf&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=ov2-compress-pdf)

## Determinisme & reproduksibilitas

Setiap input alat dapat dinyatakan sebagai parameter URL, dan input yang sama menghasilkan file yang sama. Ini memiliki dua konsekuensi bagi operator:

- **URL adalah artefaknya.** Commit tautannya, buat ulang aset sesuai kebutuhan - tanpa biner yang di-commit ke Git, tanpa mengejar "versi terbaru" di chat. ID aset dan alat adalah kontrak permanen, jadi tautan yang dibuat hari ini tetap dapat diresolusi nanti.
- **CLI menggunakan jalur render yang sama** dengan GUI, sehingga pipeline build dan aplikasi tidak pernah menyimpang. Hasilkan gambar OG, kartu sosial, dan visual data saat build, secara reproduktif.

Prompt to Image adalah determinisme dalam bentuk paling sederhana: teks adalah seluruh input, gambar hasil typeset adalah seluruh output, dan teks yang sama selalu di-typeset dengan cara yang sama.

![Prompt to Image - blok teks prompt yang di-typeset menjadi gambar persegi, tanpa apa pun dalam hasilnya yang tidak ada dalam input](/t/url-shot?url=%2F%23%2Ftool%2Fprompt-to-image%3Ffull&width=1440&height=900&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-prompt-to-image)

## Asal-usul & Content Credentials

![Zona letak Verify menerima file apa pun, dari sumber mana pun, dan membacanya tanpa panggilan jaringan](/t/url-shot?url=%2F%23%2Fverify&width=1440&height=900&dpi=192&waitMs=1800&waitSelector=.valid-drop&cropSelector=.valid-drop&format=svg&walker=1&dark=1&filename=aud-verify-drop)

Ekspor dapat membawa **Content Credentials** - manifes [C2PA](https://c2pa.org) yang ditandatangani dan terikat pada hash byte file tersebut. Perubahan apa pun pada file setelahnya akan merusak segel, sehingga verifier yang mendukung C2PA **mendeteksi perubahan secara kriptografis, secara offline**. Kredensial ini bersifat tamper-*evident*: kredensial ini menandai perubahan alih-alih mencegahnya, yang justru membuat verifikasi sepenuhnya offline menjadi mungkin.

- **Aktif secara default, di perangkat.** Kunci penandatanganan dibuat di perangkat, tidak dapat diekstrak (bahkan Lolly tidak dapat membacanya), dan penandatanganan terjadi secara lokal - hanya *pendaftaran* identitas opsional yang pernah menyentuh jaringan.
- **Tingkat kepercayaan.** Ekspor yang belum terdaftar tetap terbentuk dengan benar tetapi ditandatangani secara anonim (`untrusted`). Daftarkan **identitas terverifikasi** (sertifikat berumur pendek dari Lolly CA, terikat ke email) dan verifier yang mem-pin root Lolly akan melaporkan `trusted` + email penandatangan. Otoritas stempel waktu tepercaya dan validator pihak ketiga hijau (kesesuaian C2PA) ada dalam roadmap. Setiap tingkat bersifat eksplisit, dan sebuah file hanya pernah mengklaim kepercayaan yang dapat dibuktikannya.
- **Masa berlaku kredensial** adalah keputusan operator/pengguna saat penandatanganan: 7 / 30 / 90 / 365 hari, default 30.
- **Lolly Imprint.** Sinyal kedua yang saling melengkapi dan **aktif secara default**: watermark piksel tak terlihat yang tertanam pada ekspor raster (dan raster yang dirender Lolly di dalam PDF/PPTX, tidak pernah gambar tersemat milik pengguna sendiri). Ketika kredensial hilang akibat perubahan kontainer apa pun, Imprint tetap bertahan melalui penyimpanan ulang atau tangkapan layar - petunjuk tahan lama "piksel ini pernah melewati Lolly", hanya berupa keberadaan, tanpa data pribadi. Ini adalah security-through-obscurity, bukan pertahanan yang diperkuat, dan melengkapi kredensial alih-alih menggantikannya. `imprint=0` untuk menonaktifkan.
- **Durable Content Credentials (opt-in).** Ekspor raster dapat juga membawa tanda *durable* tak terlihat yang mengenkode pengidentifikasi soft-binding, sehingga kredensial C2PA dapat dipulihkan bahkan setelah unggahan ke media sosial atau penyimpanan ulang menghapus metadata file - kasus di mana kredensial biasa akan hilang. Ini hanya berlaku untuk raster dan memerlukan proses neural-encode, sehingga nonaktif secara default (`durable=1` untuk mengaktifkannya). Lolly mengenali tanda durable miliknya sendiri secara offline di `/verify` saat ini; pemulihan oleh alat pihak ketiga (misalnya Adobe) akan menyusul setelah resolusi soft-binding industri diberlakukan.
- **Verifikasi dilakukan di perangkat.** Letakkan file apa pun di `/verify` (atau `lolly validate <file>`) untuk laporan offline apakah file tersebut benar-benar dibuat dengan Lolly dan tidak berubah sejak itu. Tampilan web Verify juga menandai konten hasil AI, mendeteksi Lolly Imprint, memverifikasi tanda tangan **SEAL** (tanda tangan tingkat byte - dengan nol permintaan jaringan: engine menerima resolver kunci DNS yang *disuntikkan* dan belum ada shell yang menyuntikkannya saat ini, sehingga rekaman yang membawa kunci `pk=` inline miliknya sendiri terverifikasi sepenuhnya offline, sementara rekaman berbasis kunci DNS melaporkan "tidak ada key resolver dan tidak ada kunci inline" alih-alih menjangkau ke luar - lihat `SealPublicKeyResolver` di `engine/src/seal.ts`), secara opsional melakukan pemindaian mendalam untuk watermark piksel pihak ketiga (unduhan model di perangkat satu kali) dan menampilkan data tersembunyi - semuanya tanpa mengunggah file. Lihat [Content Credentials Identity](/info/content-credentials-identity.html).

> **Catatan interoperabilitas.** Lolly memverifikasi kredensialnya sendiri dan banyak kredensial pihak ketiga secara offline saat ini, termasuk membaca manifes klaim C2PA **v2** dari produser lain. Dua kontainer masih dalam proses, keduanya karena C2PA belum memiliki pemetaan standar untuknya, sehingga Lolly menyimpan kredensial di tempatnya sendiri dan verifier Lolly-lah yang membacanya kembali: **WebM** (manifes dibawa sebagai lampiran Matroska) dan **Ogg/Opus** (bidang `C2PA=` di header komentar OpusTags, dengan rentang byte tersebut dikecualikan dari binding sehingga audio tetap menghasilkan hash yang identik). Selebihnya distempel sesuai spesifikasi - alat pihak ketiga memverifikasi MP4, M4A, MP3, WAV, PNG, JPEG, dan PDF milik Lolly langsung tanpa penyesuaian. Lihat `engine/src/c2pa-containers.ts` untuk kedua pemetaan tersebut; keduanya akan menyatu dengan standar begitu standar itu ditetapkan.

## Enkripsi & kata sandi

Untuk file yang harus dikirim dalam keadaan terkunci, semuanya terjadi di perangkat:

![Kartu kunci di panel ekspor: kata sandi, dan pilihan eksplisit antara dua tingkat](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools%26format%3Dpdf%26password%3Ddemo%26options&width=1440&height=900&dpi=192&waitMs=2200&cropSelector=.export-pdfpass&walker=1&format=svg&dark=1&filename=aud-pdf-lock)

- **Kata sandi buka PDF** - *Standard* adalah pencegah RC4 40-bit (terbuka di mana saja, dapat dikirim lewat tautan); *Strong* adalah **AES-256** (PDF 2.0), diketik saat ekspor dan tidak pernah dimasukkan ke tautan.
- **Unduhan terkunci** - ZIP, folder Projects, atau proses batch dapat dikunci secara utuh: *Standard* ZipCrypto (lemah, universal) atau *Strong* **AES-256** (WinZip AE-2). Pertahanan berlapis: PDF apa pun di dalam zip Strong *juga* terkunci AES-256 secara individual, sehingga tetap terkunci setelah diekstrak.
- **Tautan berbagi berpassword** - seluruh status tautan dienkripsi AES-256 di bawah kunci turunan PBKDF2; hanya ciphertext yang dikirim, kata sandi tidak pernah ada di dalam tautan, dan dekripsi terjadi di peramban penerima.

## Siap air-gap

Air-gap adalah **deployment kelas satu**, bukan mode khusus - Lolly berjalan tanpa jaringan saat render langsung dari awal. Shell web adalah PWA offline-first (service worker); font dan WASM disimpan di perangkat; status alat disimpan secara lokal melalui host bridge, tidak pernah `localStorage`. Cara yang didukung agar sebuah alat dapat menjangkau jaringan adalah kapabilitas `host.net` yang **diberi izin (allowlisted)** yang dideklarasikannya di manifesnya - shell yang tidak bisa (atau tidak mau) memenuhinya akan meniadakannya. Itu adalah kontrak portabilitas, bukan batasan yang dipaksakan (lihat catatan hooks di bawah), itulah sebabnya meninjau kode alat tetap menjadi kontrolnya - meskipun pada perangkat air-gapped memang tidak ada apa pun untuk dijangkau. Kirimkan shell ke perangkat melalui MDM Anda, atau layani satu instance di dalam jaringan Anda, dan instalasi yang sepenuhnya air-gapped akan merender, mengekspor, mengenkripsi, dan memverifikasi kredensial tanpa apa pun untuk dihubungi ke luar.

## Baik untuk diketahui

Beberapa hal yang perlu dipahami dengan jelas sebelum Anda meluncurkannya:

- **Hardening sedang berlangsung.** Kriptografi dan parser sedang melalui hardening skala enterprise dari SUSE (lihat di atas) - kuat secara desain hari ini; terapkan sebagai pertahanan berlapis di tempat yang membutuhkan jaminan bersertifikat sesuai kontrak.
- **Hooks alat *bukan* sandbox keamanan.** `hooks.js` opsional milik sebuah alat berjalan dengan host bridge yang disuntikkan, tetapi di shell peramban ia dieksekusi dalam realm halaman dan *dapat* menjangkau `window`/`document`/`fetch`. Perlakukan kode alat sebagaimana Anda memperlakukan kode apa pun yang Anda jalankan - tinjau kodenya. Inilah sebabnya organisasi yang menjalankan katalog bersama dapat menggerbanginya melalui tinjauan Git; bagaimanapun, jalankan hanya alat yang sudah Anda tinjau hingga isolasi Worker dirilis.
- **Content Credentials bersifat tamper-evident.** Kredensial ini mendeteksi perubahan, bukan mencegahnya - lihat catatan interoperabilitas di atas.
- **Dua tingkat enkripsi.** Kunci *Standard* adalah pencegah cepat dan universal; *Strong* (AES-256) adalah perlindungan penuh - gunakan Strong untuk apa pun yang sensitif, dengan catatan ini memerlukan pembaca modern.

## Ke mana selanjutnya

- **[Security & Verification](/info/security.html)** - standar, primitif, model kepercayaan, dan pengujian di balik kredensial dan enkripsi di atas.
- **[Adoption & Governance](/info/adoption-governance.html)** - persona, metrik deflection, dan governance-as-data secara lengkap.
- **[Deployment](/info/deployment.html)** - deploy/serve/hybrid, MDM, dan self-hosting layanan.
- **[Configuration](/info/configuration.html)** - profil, brand pack, capability gating, dan feature flags.
- **[Privacy Policy](/info/privacy.html)** - pernyataan formal tentang apa yang dikumpulkan, disimpan, dan dikirim, dan apa yang tidak.
- **[Server Surface](/info/server-surface.html)** - inventaris lengkap tentang apa yang berjalan di sisi server (dua komponen opsional) dibandingkan di perangkat.
