# Bagaimana Lolly Dibandingkan

Di mana platform ini sesuai dalam landskap alat kreatif yang lebih luas, dan di mana ia sengaja **tidak** terlibat.

> **Status Pilot:** Lolly ialah prototaip pilot tertutup, bukan produk siap, dan keselamatannya kini sedang menjalani pengukuhan infrastruktur ketat SUSE, sebagai persediaan untuk skala perusahaan. Kedudukan ini adalah tempat Lolly *bertujuan* untuk berada - halaman [Penerimaan & Tadbir Urus](/info/adoption-governance.html#status) menerangkan bagaimana perkara ini sedang diuji dalam praktik.

## Landskap

| Keupayaan | Canva (Kanvas terbuka) | Portal jenama (Templat DAM) | Illustrator (Profesional desktop) | Figma / Penpot (Profesional dalam talian) | **Lolly (Kekangan Dahulu)** |
|---|---|---|---|---|---|
| Penjanaan kandungan pukal | sebahagian | ✗ | ✗ | ✗ | **✓** |
| Berfungsi sepenuhnya luar talian | ✗ | ✗ | ✓ | sebahagian | **✓** |
| Logik templat & kekangan tegar | ✗ | sebahagian | ✗ | sebahagian | **✓** |
| Tiada kemahiran reka bentuk diperlukan | sebahagian | ✓ | ✗ | ✗ | **✓** |
| Content Credentials automatik | ✗ | ✗ | sebahagian | ✗ | **✓** |
| Alat menggabungkan alat lain | ✗ | ✗ | ✗ | ✗ | **✓** |
| Enjin terbuka, tidak terkunci SaaS | ✗ | ✗ | ✗ | sebahagian | **✓** |
| Content Credentials C2PA | ✗ | ✗ | ✗ | ✗ | **✓** |
| Asal usul tahap forensik pilihan masuk | ✗ | ✗ | ✗ | ✗ | **✓** |
| Aplikasi Mudah Alih dan Desktop | ✓ | ✗ | ✗ | sebahagian | **✓** |
| Baris Perintah & TUI | ✗ | ✗ | ✗ | ✗ | **✓** |


Bentuk jurang ini jelas: tiada apa dalam landskap sedia ada yang memberikan kita output yang kekangan-dahulu, mampu luar talian, kemahiran rendah, boleh diakses secara dalaman, dan generatif. Lolly kini menghadirkan kanvas terbukanya sendiri - **Layout Studio**, sebuah kanvas bebas manipulasi langsung - tetapi dengan perbezaan ketara daripada lajur Canva: warna, jenis taip dan aset yang diletakkan di atasnya patuh kepada tetapan global jenama, jadi walaupun susunan bebas kekal kekangan-dahulu. Apa yang Lolly masih **bukan** ialah sut reka bentuk tanpa kekangan; pereka bentuk akan terus menggunakan Illustrator dan Figma untuk kerja tersuai - dan apabila kerja itu perlu menjadi aset yang boleh ditadbir dan boleh dihasilkan semula, ciri [Import reka bentuk](/info/design-import.html) dalam Layout Studio membawa fail Figma/Illustrator/Penpot yang siap ke atas kanvas sebagai kotak yang boleh disunting dan patuh kepada jenama.

## Gunakan untuk

- Penjanaan pantas aset kreatif yang dioperasikan (jubin acara, lencana, tandatangan, makluman)
- Susunan bebas bentuk pada kanvas terbuka (Layout Studio) apabila kepingan - warna, jenis taip, ikon, imej - perlu kekal patuh kepada tetapan global jenama
- Membawa masuk reka bentuk Figma, Illustrator, InDesign atau Penpot yang siap (ciri Import reka bentuk dalam Layout Studio) supaya ia boleh disunting, ditadbir dan dipapar semula secara deterministik dalam setiap format Lolly
- Aliran kerja satu-ke-banyak "isi tiga medan, dapatkan aset siap" - termasuk larian pukal daripada hamparan/CSV dalam grid kelompok `/pro` (tampal atau import baris, satu aset siap bagi setiap baris, muat turun sebagai zip)
- Output berjenama yang sentiasa aktif dan berulang
- Perkara di mana kawalan berpusat terhadap ekspresi jenama lebih penting daripada fleksibiliti ekspresif

## Jangan gunakan untuk

- Kandungan hero tersuai atau unggulan (papan iklan, video utama)
- Kerja kempen unik yang benar-benar memerlukan pereka bentuk
- Penjanaan idea yang perlu keluar sepenuhnya daripada sistem jenama - kanvas terbuka Lolly masih mematuhkan warna, jenis taip dan aset kepada tetapan global jenama, dan itulah intinya

## Apa yang disediakan secara unik

- **Potensi reka bentuk liar yang disampaikan dengan selamat mengikut konteks.** Alat boleh menzahirkan idea reka bentuk yang berani di dalam pagar pengaman yang dikodkan secara tegar.
- **Automasi kandungan ditakrif perisian yang menghasilkan aset akhir.** Input → fail akhir. Tiada lagi "sekarang simpan daripada alat reka bentuk anda dan proses selepas itu."
- **Alat menggabungkan alat.** Satu alat boleh membenamkan pemaparan alat lain dan mengembalikannya sebagai sebahagian daripada satu aset siap, tanpa sebarang gandingan kod antara alat - satu keupayaan asas yang tiada produk kanvas terbuka atau templat DAM dalam landskap ini tawarkan.
- **Neutraliti vendor.** Kawalan penuh ke atas ciri dan kos. Enjin sumber terbuka. Alat dan aset adalah kandungan yang dijejaki git, bukan terkunci dalam pangkalan data SaaS.
