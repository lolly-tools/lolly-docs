# Bagaimana Lolly Dibandingkan

Di mana platform ini sesuai dalam landskap alat kreatif yang lebih luas, dan di mana ia sengaja **tidak** terlibat.

> **Status Pilot:** Lolly ialah prototaip pilot tertutup, bukan produk siap, dan keselamatannya kini sedang menjalani pengukuhan infrastruktur ketat SUSE, sebagai persediaan untuk skala perusahaan. Kedudukan ini adalah tempat Lolly *bertujuan* untuk berada - halaman [Penerimaan & Tadbir Urus](/info/adoption-governance.html#status) menerangkan bagaimana perkara ini sedang diuji dalam praktik.

## Landskap

![Layout Studio's free canvas, where the colours, faces and assets on offer are the brand's own](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio&width=1440&height=900&dpi=192&waitMs=2400&format=svg&filename=aud-open-canvas&sweep=1)

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

![Deck Studio in the split view - the deck's slides listed as blocks on the left, the laid-out deck rendering on the right](/t/url-shot?url=%2F%23%2Ftool%2Fdeck-studio&width=1440&height=900&dpi=192&waitMs=2600&format=svg&filename=ov2-deck-studio-output)

Deck Studio ialah ukuran yang baik bagi had di sini: satu dek slaid penuh diisytiharkan sebagai data, disusun secara langsung pada kanvas, dan dieksport sebagai PowerPoint asli yang boleh disunting.

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

## Luluskan alatnya, bukan failnya

![The producer's whole job: type the words. Type, colour and spacing were settled when the tool was approved](/t/url-shot?url=%2F%23%2Ftool%2Fwordmark%3Ftext%3DApproved&width=1440&height=900&dpi=192&waitMs=2000&format=svg&filename=aud-approve-the-tool)

Setiap alat lain dalam landskap ini menghasilkan satu *fail* yang kemudiannya perlu diperiksa - seorang pengurus jenama dalam satu bebenang Slack, pihak perundangan pada penafian, satu pusingan perubahan, satu lagi semakan. Lolly mengalihkan kelulusan **satu langkah ke hulu**. Peraturan jenama - kod hex yang tepat, fail fon berlesen, jidar bleed, jarak - dikodkan secara tegar ke dalam HTML dan CSS alat itu, jadi templat itu *secara fizikal tidak mampu* mengeluarkan aset luar jenama. Susun atur itu sendirilah yang menanggung beban.

Jadi anda berhenti meluluskan output dan mula meluluskan **alat** yang menghasilkannya. Luluskannya sekali, dan setiap aset yang pernah dihasilkannya sudah diluluskan terlebih dahulu menurut binaannya - tiada manusia dalam gelung, tiada kitaran semakan, pada apa jua jumlah.

Inilah peralihan paradigma yang sebenarnya disampaikan oleh enjin deterministik: ia bukan versi lebih pantas bagi proses kelulusan lama, ia menghapuskan prosesnya. Bagi pasukan kreatif ia sebuah pagar pengaman, bukan pengganti - anda masih melempar bolanya (data, teks, imej) dan kodlah lorong penahan yang memastikan setiap lemparan tidak masuk ke dalam parit.

| Meluluskan aset cara lama | Meluluskan alat, cara Lolly |
|---|---|
| Setiap fail siap diperiksa, satu demi satu | Alat itu diperiksa sekali |
| Permintaan → pereka bentuk membina → semakan jenama → pemeriksaan perundangan → perubahan → semakan semula | Satu perubahan parameter → aset siap |
| Pereka bentuk, pengurus jenama, pihak perundangan dan pemohon semuanya dalam gelung | Penerbit, seorang diri |
| Beberapa hari bagi satu aset | Beberapa detik bagi satu aset |
| 10,000 aset = 10,000 kitaran semakan | 10,000 aset = sifar (templat itu sudah diluluskan) |

## Apa yang disediakan secara unik

![Amsterdam's canal rings and road network drawn edge to edge in the brand's own ink, every stroke placed by the template rather than by hand](/t/url-shot?url=%2F%23%2Ftool%2Fstreet-map%3Fcity%3Damsterdam%26theme%3Dlight%26full&width=1440&height=900&dpi=96&waitMs=3200&walker=1&format=svg&cropSelector=%23tool-canvas&filename=ov2-street-map-poster)

- **Potensi reka bentuk liar yang disampaikan dengan selamat mengikut konteks.** Alat boleh menzahirkan idea reka bentuk yang berani di dalam pagar pengaman yang dikodkan secara tegar.
- **Automasi kandungan ditakrif perisian yang menghasilkan aset akhir.** Input → fail akhir. Tiada lagi "sekarang simpan daripada alat reka bentuk anda dan proses selepas itu."
- **Alat menggabungkan alat.** Satu alat boleh membenamkan pemaparan alat lain dan mengembalikannya sebagai sebahagian daripada satu aset siap, tanpa sebarang gandingan kod antara alat - satu keupayaan asas yang tiada produk kanvas terbuka atau templat DAM dalam landskap ini tawarkan.
- **Neutraliti vendor.** Kawalan penuh ke atas ciri dan kos. Enjin sumber terbuka. Alat dan aset adalah kandungan yang dijejaki git, bukan terkunci dalam pangkalan data SaaS.

Yang pertama antara semua itu paling kerap dipandang rendah. Sebuah peta bandar bertaraf poster, dilukis sebagai laluan vektor jalan dan air yang sebenar, daripada satu senarai juntai dan dua medan warna yang tidak boleh diarahkan ke luar jenama:

