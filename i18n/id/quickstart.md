# Mulai Cepat

Lolly mengubah aturan Anda - warna, tipografi, tata letak, logika - menjadi tool yang bisa dipakai siapa saja untuk membuat berkas jadi: gambar, PDF, kartu sosial, video, cukup dengan mengisi beberapa kolom. Tidak ada yang perlu dipelajari dan tidak ada yang perlu diunggah: semuanya berjalan di perangkat Anda, online maupun offline.

Ini halaman pertama yang perlu Anda baca. Dua hal membuat Anda produktif: **jadikan Lolly milik Anda** dan **bawa masuk apa yang sudah Anda punya** (berkas desain dan token Anda). Selebihnya hanya berjarak satu tautan.

> Baru mengenal Lolly dan hanya ingin membuat sesuatu? Buka aplikasinya, pilih tool mana saja dari galeri, isi kolom yang kosong, dan tekan **Render**. Kembali ke sini saat Anda ingin karyanya mengenakan brand *Anda*.

## 1. Jadikan milik Anda - konfigurasikan Design System Anda

Brand Anda di Lolly adalah sebuah dokumen **design-tokens** kecil - warna, font, dan beberapa aturan - yang menjadi acuan render setiap tool. Atur sekali dan semua yang Anda buat sudah sesuai brand sejak dirancang, bukan lewat peninjauan. Ada tiga cara masuk; pilih yang cocok dengan tempat brand Anda saat ini berada.

### Mulai dari nol (pembuat Design System)

Saat pertama dijalankan, Anda dibawa ke layar **Start** (`#/start`) - [**Brand Studio**](/info/brand-studio.html). Beri nama dan sebuah warna utama, lalu Lolly *menurunkan* palet yang lengkap dan aksesibel darinya - permukaan terang/gelap, teks, aksen - memakai matematika warna yang sama yang dipakai engine di mana pun. Pilih sebuah font, dan Anda punya brand yang berfungsi dalam waktu kurang dari satu menit. Dari sana, lima tab studio (Logo, Warna, Tipografi, Token, Katalog) memungkinkan Anda mengembangkannya sejauh yang Anda mau - perhalus bagian mana pun nanti, kapan pun Anda kembali. Anda selalu bisa membuka ini lagi dari dasbor (asalkan Anda tidak memakai versi Lolly dengan brand terkunci)

### Impor brand yang sudah Anda punya

Jika brand Anda sudah tertangkap sebagai design tokens - dari **Penpot**, **Tokens Studio** (Figma), atau berkas **DTCG** biasa apa pun - bawa masuk seluruhnya alih-alih mengetik ulang. Dua jalur:

- **Di dalam aplikasi:** [pembuat Design System: Brand Studio](/info/brand-studio.html) (`#/start`) menerima berkas token, ekspor Penpot, atau paket `LollyBrand` secara langsung - letakkan ke sana dan palet pun menyala.
- **Dari command line**, untuk menyiapkan paket brand yang dapat dipakai ulang:

```bash
# a monolithic tokens.json, a one-file-per-set directory, or a Penpot project archive
npm run ingest:brand -- ./my-tokens.json --name acme --label "Acme" --activate
```

`ingest:brand` menerima ketiga wadah yang dipakai Penpot / Tokens Studio untuk mengekspor dokumen yang sama - satu berkas `tokens.json`, sebuah direktori (`$metadata.json` + berkas per-set), atau arsip `project.penpot`. Dengan `--activate`, ia mendaftarkan brand sebagai sebuah profil, beralih ke sana, dan membangun ulang katalog. Lihat [Konfigurasi](/info/configuration.html) untuk memahami bagaimana paket brand dan profil bekerja bersama.

### Sesuaikan di dalam aplikasi

Setelah sebuah brand aktif, teruslah membentuknya di [**Brand Studio**](/info/brand-studio.html) (`#/start`) - ubah sebuah warna atau peran dan setiap pratinjau di seluruh aplikasi ikut diperbarui saat Anda mengetik. (Tab **Design system** di dasbor pada `#/d` *menampilkan* brand secara hanya-baca; Studio adalah tempat Anda menyuntingnya.) Brand yang sama diringkas pada kartu **Profil → Brand Anda**. Font-nya nyata: pilih dari Google Fonts dan Lolly menyimpan berkasnya **di perangkat Anda** sebagai aset brand, sehingga tipografi Anda ikut offline dan tidak ada yang diambil saat render.

Saat Anda puas, **ekspor brand sebagai paket `LollyBrand`** - satu berkas yang bisa diimpor rekan kerja untuk mendapatkan palet, font, dan aturan yang persis sama. Begitulah sebuah brand berpindah antar-orang dan antar-mesin tanpa server di tengahnya.

> **Token brand bolak-balik dua arah.** Karena brand Lolly *adalah* token DTCG - format yang dibaca dan ditulis Penpot secara native serta dibawa Tokens Studio ke Figma - palet yang Anda pakai untuk *mendesain* dan palet yang Lolly *terapkan* adalah satu dokumen, bukan dua daftar yang harus Anda selaraskan manual. Lihat [Design Tokens](/info/design-tokens.html).

## 2. Bawa masuk apa yang sudah Anda punya

Anda tidak memulai dari halaman kosong. Lolly membuka hasil kerja desain dan format terbuka yang sudah Anda miliki.

### Berkas desain sumber terbuka

Karya jadi di **Figma, Penpot, Illustrator, InDesign, atau aplikasi SVG apa pun** tidak harus terkurung di aplikasi tempat Anda menggambarnya. Buka **Layout Studio**, klik **Impor sebuah desain**, dan berkas terbuka sebagai *tata letak hidup* - bukan gambar yang sudah diratakan. Setiap lapisan menjadi kotak yang bisa disunting: teks tetap bisa diketik ulang, bentuk tetap menjadi bentuk, gambar mendarat di pustaka Anda, dan karya vektor rumit dipertahankan dengan setia. Ia tiba sudah selaras dengan rupa huruf brand dan aturan warna Anda.

| Yang Anda punya | Bawa masuk sebagai |
|---|---|
| Sebuah frame Figma | `.fig` native (File → Save local copy), atau ekspor SVG |
| Sebuah desain Penpot | Ekspor `.penpot`-nya, atau SVG apa pun |
| Sebuah berkas Illustrator | `.ai` native (kompatibel-PDF) atau `.pdf` - terbuka langsung |
| Sebuah tata letak InDesign | `.idml` (File → Export → InDesign Markup) |
| Apa pun yang lain | **SVG apa pun** - pintu masuk universal |

Seluruh proses impor terjadi **di perangkat Anda** - berkas diurai di browser Anda dan tidak ada yang diunggah. Rincian lengkap, dan apa persisnya yang terbawa, ada di [Impor sebuah desain](/info/design-import.html).

### Dari sekali pakai menjadi template

Inilah hasilnya: tata letak yang diimpor adalah sesi Layout Studio biasa, jadi begitu Anda **menyimpannya**, ia tinggal di sebuah URL. Siapa pun yang punya Lolly bisa membuka URL itu, mengubah kata-katanya, menukar sebuah gambar, dan me-render versinya sendiri - tanpa aplikasi desain, dan bagian yang terkunci tetap terkunci. Desain sekali pakai menjadi tool yang dapat dipakai ulang. Itulah keseluruhan idenya, dicapai tanpa menulis satu baris konfigurasi pun.

### Data terbuka dan tool terbuka

[Kumpulan tool komunitas](/info/builders.html) bersifat sumber terbuka dan tidak terikat brand - kode QR, peta jalan, filter, utilitas privasi - dan semuanya di-render sesuai brand *Anda* begitu Anda mengaktifkannya. Berikan pula data terbuka Anda sendiri kepada tool: tempel atau letakkan tabel **CSV** atau **JSON** dan kolom berulang sebuah tool akan terisi darinya, satu aset jadi per baris.

## 3. Buat sesuatu, lalu bagikan atau otomatiskan

Dengan brand aktif dan materi Anda di tangan, setiap tool menghasilkan berkas jadi:

- **Render** tool mana pun ke **SVG, PDF, PNG, JPG, WebP, video**, dan lainnya - pada ukuran cetak sebenarnya dan satuan fisik saat Anda memerlukannya. Lihat [Mengekspor & format](/info/exporting.html).
- **Bagikan sebuah tautan.** Setiap keadaan tool adalah sebuah URL, jadi aset jadi dapat direproduksi dan dialamati lewat parameter - commit tautannya, buat ulang sesuai permintaan.
- **Lakukan secara massal.** Jalankan sebuah template dari spreadsheet di [batch grid](/info/exporting.html): satu aset jadi per baris.
- **Otomatiskan.** Render yang sama berjalan dari [CLI](/info/cli.html) dan dari [agen AI](/info/ai-agents.html) - sebuah URL adalah API-nya.

## Ke mana selanjutnya

Tiga jalur, tergantung pada apa yang ingin Anda lakukan di sini:

- **[Lolly untuk Kreator](/info/creators.html)** - Anda membuat berbagai hal. Keunggulannya, dan cara memaksimalkan aplikasi.
- **[Lolly untuk Builder](/info/builders.html)** - Anda membuat tool, mengintegrasikan, dan men-deploy. Dokumentasi teknisnya.
- **[Lolly untuk Operator](/info/operators.html)** - Anda bertanggung jawab atas brand, keamanan, dan peluncuran di seluruh organisasi.
