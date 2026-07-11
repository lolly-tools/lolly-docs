# Dasar Privasi

*Terakhir dikemas kini: Jun 2026*

## Aplikasi Lolly

Lolly berjalan sepenuhnya dalam pelayar anda. **Kami tidak mengumpul apa-apa, tidak menghantar apa-apa, dan tidak mempunyai pelayan yang melihat data anda.** Tiada analitik, tiada penjejakan, dan tiada pihak ketiga dalam apa jua bentuk.

**Tiada kuki — di mana-mana.** Lolly tidak pernah menetapkan kuki. Untuk menjadikan aplikasi ini berfungsi, ia menyimpan sedikit data **pada peranti anda sendiri**, semuanya benar-benar diperlukan untuk ciri yang sedang anda gunakan:

- **Tema terang/gelap anda** dan beberapa keutamaan antara muka (lebar bar sisi, zum).
- **Cache luar talian bagi katalog alat**, supaya galeri masih boleh dimuatkan tanpa sambungan.
- **Kaunter penggunaan setempat sahaja** untuk statistik kecil pada kad profil anda — ini tidak pernah dihantar ke mana-mana.
- **Dokumen dan sesi tersimpan anda sendiri**, disimpan secara setempat dalam pelayar (IndexedDB) supaya kerja anda kekal antara lawatan.

Tiada satu pun daripada ini dikongsi, dimuat naik, atau digunakan untuk mengenal pasti atau menjejaki anda, jadi tiada apa-apa yang perlu dipersetujui — hanya notis ini, supaya anda tahu apa yang disimpan. Anda boleh memadamkan semuanya pada bila-bila masa melalui **Profile → Clear all my data**, atau dengan mengosongkan storan laman dalam pelayar anda.

Laman dokumentasi ini (`/info`) lebih ringan lagi: ia tidak menetapkan **sebarang kuki**, hanya menyimpan keutamaan terang/gelap anda pada peranti anda, dan menyajikan semuanya — termasuk fon — daripada lolly.tools itu sendiri, tanpa sebarang permintaan CDN atau pihak ketiga.

## Utiliti pada peranti

Sesetengah alat adalah **utiliti** yang berfungsi pada fail yang *anda* sediakan — contohnya **Strip Hidden Data**, yang memaparkan data tersembunyi dalam imej atau PDF (lokasi GPS, kamera, pengarang, penyunting dan metadata dokumen) dan mengembalikan salinan yang bersih, atau **Compress PDF**, yang mengecilkan saiz PDF dengan mengekod semula imejnya terus pada peranti anda.

Semua ini berjalan **sepenuhnya dalam pelayar anda**. Fail yang anda pilih dibaca ke dalam memori pada peranti anda, ditukar secara setempat, dan ditawarkan semula sebagai muat turun. **Ia tidak pernah dimuat naik** — tiada pelayan untuk memuat naiknya. Salinan yang dibersihkan itu tidak membawa sebarang tera air dan tiada metadata pengenalan milik kami sendiri; keseluruhan tujuannya adalah untuk *mengeluarkan* data, bukan menambahnya. Tiada apa-apa disimpan selepas anda meninggalkan laman, dan utiliti ini berfungsi secara luar talian. Anda akan melihat lencana **"Runs on your device — nothing is uploaded"** pada setiap satu daripadanya.

Ini adalah kebalikan kepada laman web tipikal seperti "compress this PDF" / "convert this HEIC", yang memuat naik fail anda ke pelayan orang lain untuk melakukan kerja yang sebenarnya boleh dilakukan secara setempat oleh pelayar anda.

## Sambungan pelayar

Sambungan pelayar **Lolly URL Screenshot** tidak mengumpul, menyimpan, atau menghantar sebarang data peribadi. Tiada analitik, tiada penjejakan, tiada pelayan jauh.

## Apa yang ia lakukan

Apabila anda meminta aplikasi web Lolly ([lolly.tools](https://lolly.tools)) untuk mengambil tangkapan skrin sesuatu URL, sambungan ini membuka laman tersebut dalam tab latar belakang sementara, menangkapnya dalam pelayar anda menggunakan DevTools Protocol, menyerahkan imej itu kembali kepada aplikasi, dan menutup tab tersebut. Semuanya berlaku secara setempat, pada peranti dan rangkaian anda sendiri.

## Data

- **Kami tidak mengumpul apa-apa.** Sambungan ini tidak mempunyai sebarang pelayan dan tidak membuat sebarang permintaan rangkaian sendiri.
- **Imej yang ditangkap** terus dihantar ke aplikasi Lolly dalam pelayar yang sama — tidak pernah dimuat naik oleh sambungan ini.
- **URL yang anda tangkap** hanya digunakan untuk memuatkan satu laman itu bagi satu tangkapan skrin itu sahaja. Ia tidak direkodkan atau dikongsi.

## Kebenaran

- **`debugger`** — untuk menangkap laman yang telah dipaparkan melalui DevTools Protocol (mekanisme yang sama yang digunakan oleh aplikasi desktop Lolly).
- **Akses tab** — untuk membuka dan menutup tab sementara tempat laman itu dimuatkan.
- **Akses hos** — kerana laman yang anda pilih untuk ditangkap boleh berada di mana-mana laman web.

Tiada satu pun daripada ini digunakan untuk membaca, memantau, atau menghantar aktiviti melayari anda.

## Hubungi Kami

Ada soalan? Lihat [lolly.tools](https://lolly.tools).
