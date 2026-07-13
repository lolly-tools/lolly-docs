# Bagaimana Lolly dibandingkan

Di mana platform ini berada dalam lanskap alat kreatif yang lebih luas, dan di mana ia sengaja **tidak** ikut bermain.

> **Status pilot:** Lolly adalah prototipe pilot tertutup, bukan produk jadi, dan keamanannya saat ini sedang menjalani pengerasan infrastruktur ketat milik SUSE, sebagai persiapan untuk skala enterprise. Positioning inilah tempat yang *ingin* ditempati Lolly - halaman [Adopsi & Tata Kelola](/info/adoption-governance.html#status) membahas bagaimana hal itu sedang diuji dalam praktik.

## Lanskap

| Kemampuan | Canva (Kanvas terbuka) | Portal brand (Templating DAM) | Illustrator (Desktop pro) | Figma / Penpot (Online pro) | **Lolly (Mengutamakan batasan)** |
|---|---|---|---|---|---|
| Generasi konten massal | sebagian | ✗ | ✗ | ✗ | **✓** |
| Bekerja sepenuhnya offline | ✗ | ✗ | ✓ | sebagian | **✓** |
| Logika template & batasan ketat | ✗ | sebagian | ✗ | sebagian | **✓** |
| Tanpa perlu keterampilan desain | sebagian | ✓ | ✗ | ✗ | **✓** |
| Content Credentials otomatis | ✗ | ✗ | sebagian | ✗ | **✓** |
| Alat menyusun alat lain | ✗ | ✗ | ✗ | ✗ | **✓** |
| Engine terbuka, tidak terkunci SaaS | ✗ | ✗ | ✗ | sebagian | **✓** |
| Content credentials C2PA | ✗ | ✗ | ✗ | ✗ | **✓** |
| Provenance tingkat forensik opsional | ✗ | ✗ | ✗ | ✗ | **✓** |
| Aplikasi Mobile dan Desktop | ✓ | ✗ | ✗ | sebagian | **✓** |
| Command Line & TUI | ✗ | ✗ | ✗ | ✗ | **✓** |


Bentuk kesenjangannya jelas: tidak ada satu pun dalam lanskap yang ada memberi kita output generatif yang mengutamakan batasan, mampu bekerja offline, minim keterampilan, dan dapat diakses secara internal. Lolly kini menghadirkan kanvas terbukanya sendiri - **Layout Studio**, kanvas bebas dengan manipulasi langsung - tetapi dengan perbedaan mendasar dari kolom Canva: warna, tipografi, dan aset yang ditempatkan di atasnya menyesuaikan diri dengan brand global, sehingga penataan bebas pun tetap mengutamakan batasan. Yang Lolly **bukan** adalah suite desain tanpa batasan; para desainer akan terus menggunakan Illustrator dan Figma untuk pekerjaan khusus - dan ketika pekerjaan itu perlu menjadi aset yang terkelola dan dapat direproduksi, [Impor desain](/info/design-import.html) di Layout Studio membawa berkas Figma/Illustrator/Penpot yang sudah jadi ke kanvas sebagai kotak yang dapat diedit dan menyesuaikan brand.

## Gunakan untuk

- Pembuatan cepat aset kreatif operasional (tile acara, badge, tanda tangan, peringatan)
- Penataan bebas di kanvas terbuka (Layout Studio) ketika elemen-elemennya - warna, tipografi, ikon, gambar - harus tetap sesuai dengan brand global
- Mendaratkan desain Figma, Illustrator, InDesign, atau Penpot yang sudah jadi (Impor desain di Layout Studio) sehingga dapat diedit, dikelola, dan dirender ulang secara deterministik dalam setiap format Lolly
- Alur satu-ke-banyak "isi tiga kolom, dapatkan aset jadi" - termasuk proses massal dari spreadsheet/CSV di grid batch `/pro` (tempel atau impor baris, satu aset jadi per baris, unduh sebagai zip)
- Output ber-brand yang selalu aktif dan berulang
- Hal-hal di mana kontrol terpusat atas ekspresi brand lebih penting daripada fleksibilitas ekspresif

## Jangan gunakan untuk

- Konten hero khusus atau unggulan (billboard, video besar)
- Karya kampanye unik yang benar-benar membutuhkan seorang desainer
- Ideasi yang perlu keluar sepenuhnya dari sistem brand - kanvas terbuka Lolly tetap menyesuaikan warna, tipografi, dan aset dengan brand global, dan itulah intinya

## Yang secara unik ditawarkan

- **Potensi desain liar yang dihadirkan dengan aman dalam konteks.** Alat dapat mengekspresikan ide desain yang berani di dalam pagar pengaman yang dikodekan secara kaku.
- **Otomasi konten berbasis perangkat lunak yang mengembalikan aset final.** Input → berkas final. Tanpa "sekarang simpan dari alat desain Anda lalu proses lagi."
- **Alat menyusun alat.** Satu alat dapat menyematkan hasil render alat lain dan mengembalikannya sebagai bagian dari satu aset jadi, tanpa keterkaitan kode antaralat - sebuah primitif yang tidak ditawarkan oleh produk kanvas terbuka atau templating DAM mana pun dalam lanskap ini.
- **Netralitas vendor.** Kontrol penuh atas fitur dan biaya. Engine open-source. Alat dan aset adalah konten yang dilacak git, tidak terkunci dalam basis data SaaS.
