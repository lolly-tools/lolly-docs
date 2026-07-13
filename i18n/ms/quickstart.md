# Mula Pantas

Lolly menukar peraturan anda - warna, jenis taip, susun atur, logik - menjadi alat yang boleh digunakan oleh sesiapa sahaja untuk menghasilkan fail siap: imej, PDF, kad sosial, video, hanya dengan mengisi beberapa medan. Tiada apa-apa untuk dipelajari dan tiada apa-apa untuk dimuat naik: semuanya berjalan pada peranti anda, dalam talian atau luar talian.

Inilah satu-satunya halaman yang perlu dibaca dahulu. Dua perkara akan membuatkan anda produktif: **jadikan Lolly milik anda** (arahkannya kepada jenama anda), dan **bawa masuk apa yang anda sudah ada** (fail reka bentuk dan token anda). Semua yang lain hanya sejauh satu pautan.

> Baru menggunakan Lolly dan hanya mahu menghasilkan sesuatu? Buka aplikasi, pilih mana-mana alat daripada galeri, isikan ruang kosong, dan tekan **Render**. Kembali ke sini apabila anda mahu ia memakai jenama *anda*.

## 1. Jadikan ia milik anda - konfigurasikan jenama anda

Jenama anda dalam Lolly ialah dokumen **token reka bentuk** yang kecil - warna, fon, dan beberapa peraturan - yang menjadi rujukan setiap alat semasa merender. Tetapkannya sekali sahaja dan segala yang anda hasilkan akan selari dengan jenama secara automatik, bukan melalui semakan. Terdapat tiga cara untuk bermula; pilih yang sepadan dengan tempat jenama anda kini berada.

### Mula dari kosong (wizard)

Kali pertama anda menjalankannya, anda akan dibawa ke skrin **Start** (`#/start`). Berikan ia satu nama dan satu warna utama, dan Lolly akan *menghasilkan* palet yang lengkap dan mudah diakses daripadanya - permukaan terang/gelap, teks, aksen - menggunakan matematik warna yang sama yang digunakan oleh enjin di semua tempat lain. Pilih satu fon, dan anda akan mempunyai jenama yang berfungsi dalam masa kurang seminit. Anda boleh memperhalusi mana-mana bahagiannya kemudian.

### Import jenama yang anda sudah ada

Jika jenama anda sudah dirakam sebagai token reka bentuk - daripada **Penpot**, **Tokens Studio** (Figma), atau mana-mana fail **DTCG** biasa - bawa masuk keseluruhannya dan bukan menaip semula. Terdapat dua cara:

- **Dalam aplikasi:** skrin Start dan editor *Your brand* menerima fail token (atau pek `LollyBrand`) secara terus - jatuhkan fail itu dan palet akan hidup.
- **Daripada baris arahan**, untuk membina pek jenama yang boleh digunakan semula:

```bash
# a monolithic tokens.json, a one-file-per-set directory, or a Penpot project archive
npm run ingest:brand -- ./my-tokens.json --name acme --label "Acme" --activate
```

`ingest:brand` menerima kesemua tiga bekas yang digunakan oleh Penpot / Tokens Studio untuk mengeksport dokumen yang sama - satu fail `tokens.json`, satu direktori (`$metadata.json` + fail bagi setiap set), atau satu arkib `project.penpot`. Dengan `--activate`, ia mendaftarkan jenama tersebut sebagai profil, menukar kepadanya, dan membina semula katalog. Lihat [Konfigurasi](/info/configuration.html) untuk melihat bagaimana pek jenama dan profil saling berkait.

### Laraskan dalam aplikasi

Setelah jenama diaktifkan, editor **Your brand** di dashboard (`#/d`) merupakan editor langsung - tukar satu warna atau satu peranan dan setiap pratonton pada halaman akan dikemas kini semasa anda menaip. Jenama yang sama diringkaskan pada kad **Profile → Your brand**. Fon adalah sebenar: pilih daripada Google Fonts dan Lolly menyimpan fail tersebut **pada peranti anda** sebagai aset jenama, jadi tipografi anda kekal tersedia luar talian dan tiada apa-apa yang diambil semasa merender.

Apabila anda berpuas hati, **eksport jenama sebagai pek `LollyBrand`** - satu fail tunggal yang boleh diimport oleh rakan sekerja untuk mendapatkan palet, fon, dan peraturan yang sama persis. Begitulah cara jenama berpindah antara orang dan mesin tanpa pelayan di tengah-tengah.

> **Token jenama boleh berulang-alik ke dua-dua arah.** Oleh sebab jenama Lolly *adalah* token DTCG - format yang dibaca dan ditulis secara natif oleh Penpot dan yang dibawa oleh Tokens Studio ke Figma - palet yang anda *gunakan untuk* mereka bentuk dan palet yang *dikuatkuasakan* oleh Lolly adalah satu dokumen yang sama, bukan dua senarai yang anda selaraskan secara manual. Lihat [Token Reka Bentuk](/info/design-tokens.html).

## 2. Bawa masuk apa yang anda sudah ada

Anda tidak bermula daripada halaman kosong. Lolly membuka kerja reka bentuk dan format terbuka yang anda sudah miliki.

### Fail reka bentuk sumber terbuka

Kerja siap dalam **Figma, Penpot, Illustrator, InDesign, atau mana-mana aplikasi SVG** tidak perlu kekal terkunci dalam aplikasi tempat ia dilukis. Buka **Layout Studio**, klik **Import a design**, dan fail itu akan dibuka sebagai *susun atur hidup* - bukan gambar rata. Setiap lapisan menjadi kotak yang boleh disunting: teks kekal boleh ditaip semula, bentuk kekal sebagai bentuk, imej mendarat dalam pustaka anda, dan karya vektor yang kompleks dikekalkan dengan tepat. Ia tiba dalam keadaan sudah selaras dengan fon jenama dan peraturan warna anda.

| Apa yang anda ada | Cara membawanya masuk |
|---|---|
| Bingkai Figma | `.fig` asli (File → Save local copy), atau eksport SVG |
| Reka bentuk Penpot | Eksport `.penpot`-nya, atau mana-mana SVG |
| Fail Illustrator | `.ai` asli (serasi PDF) atau `.pdf` - terus dibuka |
| Susun atur InDesign | `.idml` (File → Export → InDesign Markup) |
| Apa-apa lain | **Mana-mana SVG** - pintu masuk sejagat |

Keseluruhan proses import berlaku **pada peranti anda** - fail itu dihurai dalam pelayar anda dan tiada apa-apa yang dimuat naik. Butiran penuh, serta apa sebenarnya yang dibawa masuk, terdapat dalam [Import reka bentuk](/info/design-import.html).

### Daripada sekali sahaja kepada templat

Inilah ganjarannya: susun atur yang diimport adalah sesi Layout Studio biasa, jadi sebaik sahaja anda **simpan**-nya, ia akan tinggal di satu URL. Sesiapa sahaja yang mempunyai Lolly boleh membuka URL tersebut, menukar perkataan, menggantikan imej, dan merender versi mereka sendiri - tanpa aplikasi reka bentuk, dan bahagian yang dikunci kekal terkunci. Reka bentuk sekali sahaja bertukar menjadi alat yang boleh digunakan berulang kali. Itulah keseluruhan ideanya, dicapai tanpa menulis walau satu baris konfigurasi pun.

### Data terbuka dan alat terbuka

[Set alat komuniti](/info/builders.html) adalah sumber terbuka dan tidak terikat kepada mana-mana jenama - kod QR, peta jalan, penapis, utiliti privasi - dan ia merender mengikut jenama *anda* sebaik sahaja anda mengaktifkannya. Suapkan juga data terbuka anda sendiri ke alat: tampal atau jatuhkan jadual **CSV** atau **JSON** dan medan berulang sesuatu alat akan diisi daripadanya, satu aset siap bagi setiap baris.

## 3. Hasilkan sesuatu, kemudian kongsi atau automasikannya

Dengan jenama yang aktif dan bahan anda di tangan, setiap alat menghasilkan satu fail siap:

- **Render** mana-mana alat kepada **SVG, PDF, PNG, JPG, WebP, video**, dan banyak lagi - pada saiz cetakan sebenar dan unit fizikal apabila anda memerlukannya. Lihat [Eksport & format](/info/exporting.html).
- **Kongsi pautan.** Setiap keadaan alat adalah satu URL, jadi aset siap boleh dihasilkan semula dan boleh dialamatkan melalui parameter - simpan pautan itu, jana semula bila-bila masa diperlukan.
- **Buat secara pukal.** Jalankan templat daripada hamparan (spreadsheet) dalam [grid kelompok](/info/exporting.html): satu aset siap bagi setiap baris.
- **Automasikannya.** Render yang sama boleh dijalankan daripada [CLI](/info/cli.html) dan daripada [ejen AI](/info/ai-agents.html) - satu URL ialah API tersebut.

## Ke mana seterusnya

Tiga laluan, bergantung pada tujuan anda di sini:

- **[Lolly untuk Pencipta](/info/creators.html)** - anda menghasilkan sesuatu. Kelebihan-kelebihannya, dan cara mendapatkan manfaat maksimum daripada aplikasi ini.
- **[Lolly untuk Pembina](/info/builders.html)** - anda mencipta alat, mengintegrasikan, dan menggunapakai (deploy). Dokumentasi teknikal.
- **[Lolly untuk Operator](/info/operators.html)** - anda bertanggungjawab terhadap jenama, keselamatan, dan pelaksanaan di seluruh organisasi.
