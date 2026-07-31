# Bagaimana Lolly dibandingkan

Di mana platform ini berada dalam lanskap alat kreatif yang lebih luas, dan di mana ia sengaja **tidak** ikut bermain.

> **Status pilot:** Lolly adalah prototipe pilot tertutup, bukan produk jadi, dan keamanannya saat ini sedang menjalani pengerasan infrastruktur ketat milik SUSE, sebagai persiapan untuk skala enterprise. Positioning inilah tempat yang *ingin* ditempati Lolly - halaman [Adopsi & Tata Kelola](/info/adoption-governance.html#status) membahas bagaimana hal itu sedang diuji dalam praktik.

## Lanskap

![Layout Studio's free canvas, where the colours, faces and assets on offer are the brand's own](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio&width=1440&height=900&dpi=192&waitMs=2400&format=svg&filename=aud-open-canvas&sweep=1)

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

![Deck Studio in the split view - the deck's slides listed as blocks on the left, the laid-out deck rendering on the right](/t/url-shot?url=%2F%23%2Ftool%2Fdeck-studio&width=1440&height=900&dpi=192&waitMs=2600&format=svg&filename=ov2-deck-studio-output)

Deck Studio adalah tolok ukur yang baik untuk batas atas di sini: satu dek slide utuh dideklarasikan sebagai data, ditata langsung di kanvas, lalu diekspor sebagai PowerPoint native yang bisa disunting.

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

## Setujui alatnya, bukan berkasnya

![The producer's whole job: type the words. Type, colour and spacing were settled when the tool was approved](/t/url-shot?url=%2F%23%2Ftool%2Fwordmark%3Ftext%3DApproved&width=1440&height=900&dpi=192&waitMs=2000&format=svg&filename=aud-approve-the-tool)

Setiap alat lain dalam lanskap ini menghasilkan sebuah *berkas* yang setelah itu harus diperiksa - seorang brand manager di sebuah utas Slack, legal untuk disklaimernya, satu putaran perubahan, satu peninjauan lagi. Lolly memindahkan persetujuan **satu langkah ke hulu**. Aturan brand - kode hex yang persis, berkas font berlisensi, margin bleed, spasi - dikodekan secara kaku ke dalam HTML dan CSS alat itu, sehingga template tersebut *secara fisik tidak mampu* mengeluarkan aset yang menyimpang dari brand. Tata letaknya sendiri yang menanggung beban.

Jadi Anda berhenti menyetujui keluaran dan mulai menyetujui **alat** yang membuatnya. Setujui sekali, dan setiap aset yang pernah dihasilkannya sudah disetujui sejak dari konstruksinya - tanpa manusia dalam loop, tanpa siklus peninjauan, pada volume berapa pun.

Inilah pergeseran paradigma yang benar-benar dihadirkan engine deterministik: ia bukan versi lebih cepat dari proses persetujuan yang lama, ia menghapus prosesnya. Bagi tim kreatif ini pagar pengaman, bukan pengganti - Anda tetap yang melempar bolanya (datanya, teksnya, gambarnya) dan kodenya adalah bumper lane yang menjaga setiap lemparan tidak jatuh ke selokan.

| Menyetujui aset dengan cara lama | Menyetujui alatnya, dengan cara Lolly |
|---|---|
| Setiap berkas jadi diperiksa, satu per satu | Alatnya diperiksa sekali |
| Permintaan → desainer membangun → tinjauan brand → pemeriksaan legal → perubahan → tinjauan ulang | Satu perubahan parameter → aset jadi |
| Desainer, brand manager, legal, dan pemohon semuanya dalam loop | Produser, sendirian |
| Berhari-hari per aset | Beberapa detik per aset |
| 10.000 aset = 10.000 siklus peninjauan | 10.000 aset = nol (template-nya sudah disetujui) |

## Yang secara unik ditawarkan

![Amsterdam's canal rings and road network drawn edge to edge in the brand's own ink, every stroke placed by the template rather than by hand](/t/url-shot?url=%2F%23%2Ftool%2Fstreet-map%3Fcity%3Damsterdam%26theme%3Dlight%26full&width=1440&height=900&dpi=96&waitMs=3200&walker=1&format=svg&cropSelector=%23tool-canvas&filename=ov2-street-map-poster)

- **Potensi desain liar yang dihadirkan dengan aman dalam konteks.** Alat dapat mengekspresikan ide desain yang berani di dalam pagar pengaman yang dikodekan secara kaku.
- **Otomasi konten berbasis perangkat lunak yang mengembalikan aset final.** Input → berkas final. Tanpa "sekarang simpan dari alat desain Anda lalu proses lagi."
- **Alat menyusun alat.** Satu alat dapat menyematkan hasil render alat lain dan mengembalikannya sebagai bagian dari satu aset jadi, tanpa keterkaitan kode antaralat - sebuah primitif yang tidak ditawarkan oleh produk kanvas terbuka atau templating DAM mana pun dalam lanskap ini.
- **Netralitas vendor.** Kontrol penuh atas fitur dan biaya. Engine open-source. Alat dan aset adalah konten yang dilacak git, tidak terkunci dalam basis data SaaS.

Yang pertama dari semua itu justru paling sering diremehkan. Sebuah peta kota berkualitas poster, digambar sebagai jalur vektor sungguhan untuk jalan dan perairan, hanya dari satu dropdown dan dua field warna yang tidak bisa diarahkan ke luar brand:

