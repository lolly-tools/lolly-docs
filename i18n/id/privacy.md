# Kebijakan Privasi

*Terakhir diperbarui: Juni 2026*

## Aplikasi Lolly

Lolly berjalan sepenuhnya di browser Anda. **Kami tidak mengumpulkan apa pun, tidak mengirimkan apa pun, dan tidak memiliki server yang melihat data Anda.** Tidak ada analitik, tidak ada pelacakan, dan tidak ada pihak ketiga dalam bentuk apa pun.

**Tanpa cookie — di mana pun.** Lolly tidak pernah menyetel cookie. Agar aplikasi berfungsi, aplikasi menyimpan sedikit data **di perangkat Anda sendiri**, semuanya benar-benar diperlukan untuk fitur yang sedang Anda gunakan:

- **Tema terang/gelap Anda** dan beberapa preferensi antarmuka (lebar bilah sisi, zoom).
- **Cache offline katalog alat**, sehingga galeri tetap dapat dimuat tanpa koneksi.
- **Penghitung penggunaan lokal saja** untuk statistik kecil di kartu profil Anda — ini tidak pernah dikirim ke mana pun.
- **Dokumen Anda sendiri dan sesi yang tersimpan**, disimpan secara lokal di browser (IndexedDB) sehingga pekerjaan Anda tetap ada di antara kunjungan.

Tidak ada satu pun dari ini yang dibagikan, diunggah, atau digunakan untuk mengidentifikasi atau melacak Anda, jadi tidak ada yang perlu disetujui — hanya pemberitahuan ini, agar Anda tahu apa yang disimpan. Anda dapat menghapus semuanya kapan saja dengan **Profil → Hapus semua data saya**, atau dengan menghapus penyimpanan situs di browser Anda.

Situs dokumentasi ini (`/info`) bahkan lebih ringan: tidak menyetel **cookie apa pun**, hanya menyimpan preferensi terang/gelap Anda di perangkat, dan menyajikan semuanya — termasuk font — dari lolly.tools sendiri, tanpa CDN atau permintaan pihak ketiga.

## Utilitas di perangkat

Beberapa alat adalah **utilitas** yang bekerja pada berkas yang *Anda* sediakan — misalnya **Hapus Data Tersembunyi**, yang menampilkan data tersembunyi dalam gambar atau PDF (lokasi GPS, kamera, penulis, editor, dan metadata dokumen) lalu mengembalikan salinan yang bersih, atau **Kompres PDF**, yang memperkecil PDF dengan menyandikan ulang gambar-gambarnya langsung di perangkat Anda.

Ini berjalan **sepenuhnya di browser Anda**. Berkas yang Anda pilih dibaca ke dalam memori di perangkat Anda, ditransformasikan secara lokal, dan ditawarkan kembali sebagai unduhan. **Berkas ini tidak pernah diunggah** — tidak ada server tempat mengunggahnya. Salinan yang telah dibersihkan tidak membawa watermark maupun metadata pengenal milik kami; tujuannya adalah untuk *menghapus* data, bukan menambahkannya. Tidak ada yang disimpan setelah Anda pergi, dan utilitas ini bekerja secara offline. Anda akan melihat lencana **"Berjalan di perangkat Anda — tidak ada yang diunggah"** pada setiap utilitas.

Ini adalah kebalikan dari situs web "kompres PDF ini" / "konversi HEIC ini" pada umumnya, yang mengunggah berkas Anda ke server orang asing untuk melakukan pekerjaan yang dapat dilakukan browser Anda secara lokal.

## Ekstensi browser

Ekstensi browser **Tangkapan Layar URL Lolly** tidak mengumpulkan, menyimpan, atau mengirimkan data pribadi apa pun. Tidak ada analitik, tidak ada pelacakan, tidak ada server jarak jauh.

## Apa yang dilakukannya

Ketika Anda meminta aplikasi web Lolly ([lolly.tools](https://lolly.tools)) untuk mengambil tangkapan layar dari sebuah URL, ekstensi membuka halaman tersebut di tab latar belakang sementara, menangkapnya di browser Anda menggunakan DevTools Protocol, mengembalikan gambar ke aplikasi, dan menutup tab. Semuanya terjadi secara lokal, di perangkat dan jaringan Anda sendiri.

## Data

- **Kami tidak mengumpulkan apa pun.** Ekstensi ini tidak memiliki server dan tidak membuat permintaan jaringan sendiri.
- **Gambar yang ditangkap** langsung menuju aplikasi Lolly di browser yang sama — tidak pernah diunggah oleh ekstensi.
- **URL yang Anda tangkap** hanya digunakan untuk memuat satu halaman itu untuk satu tangkapan layar itu. URL tersebut tidak dicatat atau dibagikan.

## Izin

- **`debugger`** — untuk menangkap halaman yang dirender melalui DevTools Protocol (mekanisme yang sama yang digunakan aplikasi desktop Lolly).
- **Akses tab** — untuk membuka dan menutup tab sementara tempat halaman dimuat.
- **Akses host** — karena halaman yang Anda pilih untuk ditangkap bisa berada di situs mana pun.

Tidak satu pun dari izin ini digunakan untuk membaca, memantau, atau mengirimkan aktivitas penjelajahan Anda.

## Kontak

Ada pertanyaan? Lihat [lolly.tools](https://lolly.tools).
