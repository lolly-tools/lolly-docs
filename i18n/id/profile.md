# Profil - siapa Anda saat berkarya

Sebuah **profil** adalah identitas kerja *sebagai siapa* Lolly berkarya. Ini adalah sekumpulan kecil detail yang bisa diambil sebuah tool sehingga Anda tak perlu mengetiknya ulang setiap kali - nama Anda, detail kontak, foto diri opsional, beberapa preferensi - plus semua yang Anda kumpulkan selama bekerja: sesi tersimpan, gambar yang diunggah, dan catatan aktivitas lokal.

Semua isi profil tersimpan **di perangkat**, dalam basis data lokal browser (IndexedDB pada PWA web, sistem berkas pada aplikasi Tauri). Tidak ada akun dan tidak ada yang diunggah. Anda mengelolanya di **Profil** (kanan atas galeri); tool hanya *membaca*-nya, dan hanya field tertentu yang memang dirancang untuk diisi otomatis.

> Sebuah profil adalah tentang *Anda* (atau siapa pun yang berkarya di sini). Ini berbeda dari **Platform** - warna, font, dan pengaturan global brand - dan dari **Kapabilitas**, katalog tentang apa yang bisa dilakukan aplikasi. Lihat [Profil vs Platform vs Kapabilitas](#profile-vs-platform-vs-capabilities) di bagian akhir.

## Apa yang ada dalam profil

![The Profile screen - name, contact, an optional headshot, and your preferences](/t/url-shot?url=%2F%23%2Fprofile&width=1440&height=900&dpi=192&waitMs=1600&format=png&localize=1&filename=profile-details)

| Bagian | Apa itu |
|---|---|
| **Nama** | Nama depan dan nama belakang. |
| **Kontak** | Email dan telepon. |
| **Lokasi** | Kota dan negara. |
| **Foto diri** | Foto opsional, dipangkas menjadi persegi dan disimpan sebagai gambar lokal. Digunakan oleh tool seperti tanda tangan email, kartu kutipan, blok warna, dan tata letak dinamis. |
| **Gunakan detail saya** | Satu sakelar keikutsertaan. Mengontrol apakah detail pribadi Anda ikut disertakan sebagai **provenance** - baris penulis/kredit yang disematkan ke berkas yang diekspor - dan sebagai penulis pada proses batch **/pro**. (Ini tidak membatasi pengisian otomatis: lihat [Cara tool menggunakan profil Anda](#how-tools-use-your-profile).) |
| **Preferensi** | Tema Anda (terang, gelap, atau SUSE) dan bagian aplikasi mana yang telah Anda aktifkan lewat **Feature flags**. |
| **Karya Anda** | Sesi tersimpan (dengan thumbnail) - ditata dalam folder bertingkat di **[Proyek](/info/using.html)** - pustaka **Gambar saya** Anda, dan statistik aktivitas lokal, semuanya terkait ke profil ini. |

Tidak ada satu pun dari ini yang wajib. Profil kosong adalah profil yang sangat baik; Anda hanya mengisi apa yang menghemat waktu pengetikan.

## Profil adalah sebuah konteks, bukan sekadar seseorang

Kata "profil" mengesankan satu orang yang tetap, tapi di Lolly ini sebenarnya sebuah **konteks berkarya** - *siapa Anda saat membuat sesuatu*. Konteks itu bisa berbentuk tiga hal berbeda, dan Lolly menangani semuanya dengan cara yang sama.

### Sebagai individu

Bawaan. Profil adalah Anda: nama Anda, email Anda, foto diri Anda. Atur sekali dan tanda tangan, badge, serta lockup konferensi Anda semuanya terisi sendiri. Inilah yang dibutuhkan kebanyakan orang.

### Sebagai tim

Sebuah profil tidak harus berupa satu manusia. Ia bisa mewakili **tim atau fungsi dalam sebuah organisasi**: nama bersama tim, alamat kotak masuk grup (`events@…`), sebuah departemen, foto diri tim atau tanda unit. Satu orang menyiapkannya, mengekspornya (lihat di bawah), dan anggota tim lainnya memuat profil yang sama - sehingga semua yang diproduksi tim membawa detail yang konsisten tanpa siapa pun perlu memasukkannya ulang. Sebuah kiosk bersama atau laptop demo pinjaman bisa menjalankan satu profil tim yang menjadi identitas berkarya semua orang di baliknya.

### Sebagai fungsi - peran yang sesekali Anda kenakan

Inilah kasus yang terlewat oleh model kaku "satu orang, satu profil". Anda mungkin seorang **manajer acara tiga hari dalam setahun** dan menjadi sesuatu yang sama sekali berbeda di sisa waktunya. Pada tiga hari itu Anda ingin detail acara, kotak masuk acara, mungkin sub-brand acara untuk mengisi badge dan papan penanda Anda; pada 362 hari lainnya Anda ingin identitas normal Anda kembali.

Di Lolly, peran itu hanyalah **profil lain yang Anda simpan siap pakai** - sebuah bundel tersimpan (bagian berikutnya) yang Anda muat untuk acara itu lalu Anda simpan kembali sesudahnya. Peran adalah sebuah topi, bukan akun baru. Kenakan saat Anda membutuhkannya, lepaskan saat Anda selesai.

## Satu instalasi, satu profil aktif - banyak yang bisa Anda simpan

Pada satu waktu, sebuah instalasi memiliki **satu profil aktif** - detail yang dilihat tool saat ini. Tidak ada pengalih profil di dalam aplikasi; sebagai gantinya, setiap profil adalah **bundel portabel** (satu `.zip`, lihat [di bawah](#moving-a-profile-to-a-new-device)). Ini sengaja dibuat sebagai mekanisme yang sama dengan berpindah ke perangkat baru - profil adalah berkas yang bisa Anda simpan, salin, dan muat.

Jadi jika Anda benar-benar menjalankan beberapa konteks sekaligus (Anda, tim Anda, topi manajer acara), Anda menyimpan beberapa bundel dan memuat yang Anda butuhkan:

- **Peralihan terbersih:** **Profil → Penyimpanan → Hapus semua data saya**, lalu **Impor** bundel untuk konteks yang akan Anda masuki. Kini Anda berkarya murni sebagai profil itu.
- **Pelapisan:** mengimpor *tanpa* menghapus terlebih dahulu akan **menggabungkan** - profil, sesi, dan gambar yang diimpor menimpa apa yang sudah ada, mengganti apa pun dengan nama yang sama dan membiarkan sisanya. Berguna untuk menarik sesi tersimpan satu tim ke penyiapan Anda sendiri; bukan yang Anda inginkan jika Anda perlu batas peran yang bersih.
- **Berdampingan:** karena semuanya terikat ke perangkat, profil browser terpisah, akun pengguna terpisah, atau PWA kedua yang terpasang masing-masing membawa profil Lolly independennya sendiri. Jalankan instalasi pribadi Anda dan instalasi kiosk acara sekaligus, tanpa peralihan.

> Simpan satu bundel per konteks dan ganti nama berkasnya sesuai isinya (`LollyTools-events-2026.zip`, `LollyTools-me.zip`). Berkas itu *adalah* profilnya.

## Memindahkan profil ke perangkat baru

Karena sebuah profil sepenuhnya lokal, satu-satunya cara memindahkannya ke instalasi kosong - laptop baru, browser yang baru direset, mesin rekan kerja, kotak offline - adalah dengan **membawa berkasnya**. Tidak ada login yang memulihkannya untuk Anda, dan itulah intinya: tidak ada apa pun yang pernah meninggalkan perangkat Anda sejak awal.

Di **Profil → Penyimpanan → Pindah ke perangkat lain**:

- **Ekspor data saya** mengunduh satu `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` - dinamai sesuai profil pemiliknya, dengan nomor urut per hari agar ekspor berulang tidak bertabrakan (bagian nama dihilangkan bila profil tidak memilikinya). Berkas ini berisi profil Anda, setiap sesi tersimpan (dengan thumbnail-nya), gambar yang Anda unggah, dan preferensi Anda (tema, tata letak, statistik aktivitas lokal).
- **Impor data…** pada instalasi lain membaca kembali berkas itu dan Anda melanjutkan tepat dari tempat Anda berhenti.

Bundel ini adalah zip biasa yang mandiri, jadi ia bisa dipindahkan lewat cara **apa pun** - USB, AirDrop, berbagi jaringan, email-ke-diri-sendiri - dan targetnya bisa sepenuhnya offline. Setiap bagian diberi checksum, jadi berkas yang rusak dalam perjalanan tertangkap saat impor alih-alih dipulihkan dalam keadaan setengah rusak. Impor **menggabungkan** (profil/sesi/gambar dengan nama yang sama ditimpa; semua lainnya dipertahankan), jadi ia tidak pernah menghapus target yang sudah digunakan.

Yang tidak ikut berpindah: cache katalog (ia mengunduh ulang dirinya di perangkat baru) dan tool itu sendiri (diasumsikan sudah ada). 

Untuk tata letak bundel yang persis, kebijakan versi, dan aturan integritas, lihat **[Transfer Data](/info/data-transfer.html)**; untuk panduan menyeluruh, **[Menggunakan Lolly → Pindah ke perangkat lain](/info/using.html#moving-to-another-device)**.

## Cara tool menggunakan profil Anda

Sebuah tool hanya *mengisi otomatis* field profil yang memang secara eksplisit dirancang untuk diikat:

**Pengikatan eksplisit.** Penulis tool menandai sebuah input agar mengambil dari profil (`bindToProfile: "firstname"`, `"email"`, `"headshot"`, …). Saat tool dibuka, input itu terisi otomatis dari profil Anda - dan Anda tetap bisa menimpanya untuk sesi itu saja tanpa mengubah profil. Pengisian otomatis adalah kemudahan lokal dan terjadi baik **Gunakan detail saya** aktif maupun tidak.

**Keikutsertaan (provenance).** Saat Anda mengekspor sebuah aset, detail Anda secara opsional ikut disertakan sebagai **provenance** - baris penulis/kredit yang disematkan ke metadata berkas (PNG, PDF, SVG, …) - sehingga aset yang sudah jadi bisa menyebutkan siapa pembuatnya. *Inilah* yang diatur oleh **Gunakan detail saya**: matikan dan ekspor tetap membawa atribusi tool/platform "Made with Lolly", tapi tidak ada baris penulis/kontak pribadi yang disematkan. (Keikutsertaan yang sama menetapkan penulis pada proses batch **/pro**.) (Penulis tool: lihat [Menulis Tool → `bindToProfile`](/info/authoring-tools.html#bindtoprofile) dan [Host API → `host.profile`](/info/host-api.html#host-profile).)

## Profil vs Platform vs Kapabilitas

Tiga hal berada berdekatan di antarmuka dan mudah tertukar:

- **Profil** - *Anda* (atau tim Anda, atau peran yang sedang Anda jalankan): nama, kontak, foto diri, karya tersimpan Anda. Pribadi, lokal di perangkat, portabel sebagai bundel.
- **Platform** - *brand*: warna, font, dan pengaturan global yang menjadi acuan render setiap tool. Dibagikan dan konsisten, bukan pribadi.
- **Kapabilitas** - *apa yang bisa dilakukan aplikasi*: seluruh rangkaian fitur dan tool yang tersedia untuk Anda.

Profil mengubah aset itu berasal *dari siapa*; platform mengubah *tampilannya*; kapabilitas adalah *apa yang bisa Anda buat*.

## Privasi

Sebuah profil tidak pernah dikirim, diunggah, atau digunakan untuk mengidentifikasi atau melacak Anda - tidak ada yang perlu disetujui, hanya pemberitahuan ini agar Anda tahu apa yang disimpan. Hapus semuanya kapan saja dengan **Profil → Hapus semua data saya**. Lihat [Kebijakan Privasi](/info/privacy.html).
