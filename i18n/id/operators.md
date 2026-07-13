# Lolly untuk Operator

### Strategi tahan-masa-depan, pertahanan berlapis, pencegahan kehilangan data & provenans - yang kebetulan juga merupakan platform produksi kreatif

Sistem imun organisasi yang membungkus apa yang sudah Anda lakukan - sehingga pekerjaan kreatif rutin yang dibutuhkan tim Anda setiap hari terjadi *di dalam* perimeter Anda, bukan bocor keluar darinya.

**Apa untungnya bagi Anda.** Anda bisa menjadi orang yang berkata ya untuk sesuatu yang aman *sekaligus* populer. Anda menutup celah eksfiltrasi dan menghapus antrean permintaan desain dalam satu langkah - kemenangan keamanan langka yang membuat Anda lebih disukai, bukan sebaliknya. Tidak ada telepon jam 3 pagi karena seseorang mengirim berkas brand ke kontraktor lewat email atau menempelkan data pelanggan ke perkakas web sembarangan; lebih sedikit vendor SaaS, kontrak, dan audit di meja Anda; serta jejak git lengkap yang bisa Anda tunjukkan saat seseorang bertanya siapa menyetujui apa. Anda bisa tidur nyenyak di malam hari.

Lolly memperoleh tempatnya sebagai perkakas kreatif: ia menghapus antrean desain dan menempatkan keluaran berkualitas produksi di tangan semua orang. Namun alasan mengapa *aman* membagikannya seluas itu bersifat arsitektural. Tidak ada yang diunggah, semuanya dapat direproduksi, dan setiap ekspor dapat membawa catatan kriptografis tentang asalnya. Halaman ini adalah kisah keamanan dan penggelarannya.

> **Posisinya hari ini.** Properti keamanan Lolly kuat secara rancangan, dan mesin kriptografi serta penguraian berkasnya sedang menjalani pengerasan infrastruktur berkelas enterprise dari SUSE. Segel, penandatanganan di perangkat, dan enkripsi di bawah ini nyata dan dapat dipertahankan sekarang, serta terus matang menuju sertifikasi independen - jadi bila sebuah kontrak menuntut jaminan bersertifikat, gelar semuanya sebagai pertahanan berlapis selama proses itu rampung.

## Keunggulan strategis

Cara biasa pekerjaan kreatif rutin diselesaikan adalah permukaan liabilitas: berkas dikirim lewat email ke kontraktor desain eksternal, aset brand diunggah ke belasan editor SaaS, data pelanggan ditempelkan ke perkakas web orang asing hanya untuk "sekadar membuat grafik cepat." Setiap satunya adalah data yang keluar dari kendali Anda.

Lolly membalikkannya. Pekerjaan yang *memicu* kebocoran itu - kartu kutipan, banner terlokalisasi, lencana acara, tangkapan layar yang disunting - kini terjadi di perkakas yang berjalan di perangkat karyawan sendiri, selaras dengan brand Anda, tanpa server di dalam alur. Anda tidak menambahkan kontrol di atas alur kerja berisiko; Anda mengganti alur kerja berisiko itu dengan alur yang sejak awal tidak punya jalur eksfiltrasi.

- **Konfigurasi milik Anda.** Engine dan shell bersifat open source (MPL-2.0). Tumpangkan auth, telemetri, atau CA Anda sendiri; hosting atau tidak; Anda memegang kendali penuh atas fitur dan biaya, terlacak git, tidak terkunci di basis data SaaS.
- **Tata kelola bisa berupa data, bukan dasbor.** Saat Anda menginginkan kendali itu, kelola katalog perkakas sebagai repositori Git - tinjauan pull request menjadi persetujuan brand, dengan jejak audit lengkap dan rollback instan atas setiap template yang bisa disentuh tenaga kerja Anda. Ini opsi, bukan kewajiban: tim yang sekadar ingin berkarya membuat perkakas mereka sendiri di Layout Studio dan menyerap berkas mereka sendiri ke dalam katalog, sepenuhnya di dalam aplikasi, tanpa pernah menyentuh git. Lihat [Adopsi & Tata Kelola](/info/adoption-governance.html).
- **Pagar pengaman bersifat struktural.** Batasan brand ditanamkan langsung ke dalam template, bukan diterbitkan sebagai pedoman yang bisa diabaikan orang. Keluaran yang salah bukan sekadar tidak dianjurkan - melainkan tidak dapat direpresentasikan.

## Hapus antrean permintaan sembari memperbanyak konten.

Salah satu tujuan Lolly adalah **pengalihan permintaan desain**: permintaan rutin yang tidak pernah perlu sampai ke seorang desainer karena orang yang membutuhkan aset itu membuatnya sendiri, dengan benar, dalam hitungan menit. Setiap tiket yang dialihkan adalah kemenangan produktivitas sekaligus satu berkas lebih sedikit yang berpindah tangan.

Lolly dibangun agar cocok dengan cara organisasi Anda benar-benar beroperasi - tidak ada satu cara yang benar untuk menggelarnya:

- **Gelar, jangan sajikan.** Kirim Lolly ke perangkat melalui MDM yang sudah Anda miliki (Intune, Jamf, Munki…). Ia berjalan secara lokal sebagai aplikasi desktop/seluler atau PWA luring - bekerja di balik firewall apa pun, di lingkungan air-gapped mana pun, tanpa server untuk dipelihara dan TI mengendalikan irama pembaruan.
- **Sajikan saja.** Jalankan satu instance di dalam jaringan Anda (atau di balik VPN); pengguna menjangkaunya lewat browser, tanpa instalasi. Terbitkan sebuah perkakas sekali, semua orang langsung memilikinya; padukan dengan IdP Anda untuk kontrol akses.
- **Hibrida.** Aplikasi lokal untuk kerja lapangan luring, versi browser yang selalu terkini untuk mesin pinjaman - keduanya mengarah ke pustaka perkakas yang sama.

Model penggelaran lengkap dan panduan administrasi tersedia di [Penggelaran](/info/deployment.html) dan [Konfigurasi](/info/configuration.html).

## Utilitas anti-eksfiltrasi

Ada satu kategori perkakas Lolly yang hadir *khusus* untuk menjaga berkas tetap di dalam perimeter. Utilitas privasi.


- **Buang Data Tersembunyi**
 Hapus lokasi dan semua informasi pengenal tersembunyi dari berkas dokumen dan media.

- **Pembantu Teks**  
Anonimkan, enkode, format, dan manipulasi teks terstruktur maupun tak terstruktur. 

- **Kompres PDF**
Cegah segala kemungkinan 'krisis batas email' tempat perkakas web pihak ketiga mengintai dan data 

- **Kompres PDF**
Cegah segala kemungkinan 'krisis batas email' tempat perkakas web pihak ketiga mengintai dan data terjun keluar jendela. 

Semua ini adalah transformasi di perangkat: berkas atau data Anda masuk, byte yang sudah dibersihkan keluar, dan **tidak ada server tujuan unggah**. Semuanya adalah lawan yang disengaja dari perkakas "unggah berkas Anda ke situs orang asing untuk membersihkannya" yang biasa dijangkau karyawan berniat baik jika tidak ada pilihan lain.



## Determinisme & reprodusibilitas

Setiap masukan perkakas dapat dinyatakan sebagai parameter URL, dan masukan yang sama menghasilkan berkas yang sama. Itu punya dua konsekuensi bagi operator:

- **URL adalah artefaknya.** Commit tautannya, hasilkan ulang asetnya sesuai kebutuhan - tidak ada biner yang di-commit ke Git, tidak perlu mengejar "versi terbaru" di obrolan. ID aset dan perkakas adalah kontrak permanen, jadi tautan yang dibuat hari ini tetap dapat diselesaikan nanti.
- **CLI adalah jalur render yang sama** dengan GUI, sehingga pipeline build dan aplikasi tidak pernah menyimpang. Hasilkan gambar OG, kartu sosial, dan visual data pada waktu build, secara reprodusibel.

## Provenans & Content Credentials

Ekspor dapat membawa **Content Credentials** - manifest [C2PA](https://c2pa.org) bertanda tangan yang terikat pada hash dari byte berkas. Perubahan apa pun pada berkas setelahnya merusak segelnya, sehingga verifikator yang mengenali C2PA **mendeteksi perubahan secara kriptografis, luring**. Kredensial ini *menunjukkan* gangguan: ia menandai upaya perusakan alih-alih mencegahnya, dan justru itulah yang memungkinkan verifikasi sepenuhnya luring.

- **Aktif secara bawaan, di perangkat.** Kunci penandatanganan dibangkitkan di perangkat, tidak dapat diekstraksi (bahkan Lolly tidak bisa membacanya), dan penandatanganan terjadi secara lokal - hanya *pendaftaran* identitas opsional yang pernah menyentuh jaringan.
- **Tingkatan kepercayaan.** Ekspor yang belum terdaftar valid secara struktural tetapi ditandatangani secara anonim (`untrusted`). Daftarkan sebuah **identitas terverifikasi** (sertifikat berumur pendek dari Lolly CA, terkait dengan sebuah email) dan verifikator yang menyematkan root Lolly melaporkan `trusted` + email penanda tangan. Otoritas stempel waktu tepercaya dan lampu hijau validator pihak ketiga (kesesuaian C2PA) ada dalam peta jalan. Setiap tingkatan bersifat eksplisit, dan sebuah berkas hanya mengklaim kepercayaan yang bisa dibuktikannya.
- **Masa berlaku kredensial** ditentukan oleh operator/pengguna saat penandatanganan: 7 / 30 / 90 / 365 hari, bawaan 30.
- **Verifikasi terjadi di perangkat.** Jatuhkan berkas apa pun ke `/valid` (atau `lolly validate <file>`) untuk laporan luring apakah berkas itu benar-benar dibuat dengan Lolly dan tidak berubah sejak itu. Lihat [Identitas Content Credentials](/info/content-credentials-identity.html).

> **Catatan interoperabilitas.** Lolly memverifikasi kredensialnya sendiri dan banyak kredensial pihak ketiga secara luring saat ini. Dua item interop sedang berjalan: membaca sepenuhnya manifest klaim C2PA **v2** dari produsen lain, dan WebM - yang belum punya pemetaan C2PA terstandardisasi, sehingga Lolly melampirkan manifest sebagai bagian Matroska (perkakas pihak ketiga memverifikasi MP4 dari Lolly tanpa penyesuaian; WebM menyusul begitu standarnya mapan).

## Enkripsi & pemberian kata sandi

Untuk berkas yang harus berpindah dalam keadaan terkunci, semuanya terjadi di perangkat:

- **Kata sandi pembuka PDF** - *Standar* adalah penghalang RC4 40-bit (bisa dibuka di mana saja, boleh ikut dalam tautan); *Kuat* adalah **AES-256** (PDF 2.0), diketik saat ekspor dan tidak pernah dimasukkan ke tautan.
- **Unduhan terkunci** - sebuah ZIP, folder Projects, atau proses batch bisa dikunci sepenuhnya: ZipCrypto *Standar* (lemah, universal) atau **AES-256** *Kuat* (WinZip AE-2). Pertahanan berlapis: setiap PDF di dalam zip *Kuat* *juga* dikunci AES-256 secara individual, sehingga tetap terkunci setelah dibuka.
- **Tautan berbagi bergerbang kata sandi** - seluruh state tautan dienkripsi AES-256 di bawah kunci turunan PBKDF2; hanya ciphertext yang berpindah, kata sandi tidak pernah ada dalam tautan, dan dekripsi terjadi di browser penerima.

## Siap air-gap

Air-gap adalah **penggelaran kelas satu**, bukan mode khusus - Lolly berjalan tanpa jaringan pada waktu render secara langsung. Web shell adalah PWA yang mengutamakan luring (service worker); font dan WASM disimpan di perangkat; state perkakas dipertahankan secara lokal melalui host bridge, bukan `localStorage`. Perkakas apa pun yang menjangkau jaringan hanya melakukannya melalui kapabilitas `host.net` yang **diizinkan** dan wajib dideklarasikan dalam manifestnya - shell yang tidak bisa (atau tidak mau) memenuhinya akan menyekatnya. Kirim shell ke perangkat melalui MDM Anda, atau sajikan satu instance di dalam jaringan Anda, dan instalasi yang sepenuhnya air-gapped akan merender, mengekspor, mengenkripsi, dan memverifikasi kredensial tanpa perlu menghubungi siapa pun.

## Perlu diketahui

Beberapa hal yang perlu diluruskan sebelum Anda menggelarnya:

- **Pengerasan sedang berlangsung.** Kriptografi dan parser sedang menjalani pengerasan berskala enterprise dari SUSE (lihat di atas) - kuat secara rancangan saat ini; gelar sebagai pertahanan berlapis bila sebuah kontrak menuntut jaminan bersertifikat.
- **Hook perkakas *bukan* sandbox keamanan.** Berkas `hooks.js` opsional milik sebuah perkakas berjalan dengan host bridge yang disuntikkan, tetapi di dalam browser shell ia dieksekusi di realm halaman dan *bisa* menjangkau `window`/`document`/`fetch`. Perlakukan kode perkakas seperti Anda memperlakukan kode apa pun yang Anda jalankan - tinjau. Inilah sebabnya organisasi yang menjalankan katalog bersama bisa menggerbangnya melalui tinjauan Git; bagaimanapun juga, jalankan hanya perkakas yang sudah Anda tinjau sampai isolasi Worker tersedia.
- **Content Credentials bersifat bukti-gangguan.** Keduanya mendeteksi perubahan alih-alih mencegahnya - lihat catatan interoperabilitas di atas.
- **Dua tingkatan enkripsi.** Kunci *Standar* adalah penghalang cepat dan universal; *Kuat* (AES-256) adalah perlindungan penuh - pilih Kuat untuk apa pun yang sensitif, dengan catatan ia membutuhkan pembaca modern.

## Ke mana selanjutnya

- **[Adopsi & Tata Kelola](/info/adoption-governance.html)** - persona, metrik pengalihan, dan tata-kelola-sebagai-data selengkapnya.
- **[Penggelaran](/info/deployment.html)** - gelar/sajikan/hibrida, MDM, dan hosting mandiri untuk layanannya.
- **[Konfigurasi](/info/configuration.html)** - profil, paket brand, penggerbangan kapabilitas, dan feature flag.
- **[Kebijakan Privasi](/info/privacy.html)** - pernyataan formal "tidak mengumpulkan apa pun, tidak mengunggah apa pun".
