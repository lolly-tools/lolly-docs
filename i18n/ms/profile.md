# Profil - siapa anda apabila anda mencipta

**Profil** ialah identiti kerja *sebagai* siapa Lolly mencipta. Ia ialah set kecil butiran yang boleh diambil oleh sesuatu alat supaya anda tidak perlu menaip semula setiap kali - nama anda, butiran hubungan, gambar potret pilihan, beberapa keutamaan - ditambah segala yang anda kumpulkan semasa anda bekerja: sesi yang disimpan, imej yang dimuat naik, dan kiraan aktiviti tempatan.

Semua yang ada dalam profil disimpan **pada peranti**, dalam pangkalan data tempatan pelayar (IndexedDB pada PWA web, sistem fail pada aplikasi Tauri). Tiada akaun dan tiada apa-apa dimuat naik. Anda menguruskannya di bawah **Profil** (di penjuru kanan atas galeri); alat hanya *membaca* profil, dan hanya medan khusus yang direka untuk pra-isi.

> Profil berkaitan *anda* (atau sesiapa sahaja yang mencipta di sini). Ia berbeza daripada **Platform** - warna, fon, dan tetapan global jenama - serta daripada **Keupayaan**, katalog apa yang boleh dilakukan oleh aplikasi ini. Lihat [Profil berbanding Platform berbanding Keupayaan](#profile-vs-platform-vs-capabilities) di penghujung.

## Apa yang ada dalam profil

| Bahagian | Keterangan |
|---|---|
| **Nama** | Nama pertama dan nama akhir. |
| **Hubungan** | E-mel dan telefon. |
| **Lokasi** | Bandar dan negara. |
| **Gambar Potret** | Foto pilihan, dipotong kepada bentuk segi empat sama dan disimpan sebagai imej tempatan. Digunakan oleh alat seperti tandatangan e-mel, kad petikan, blok warna, dan susun atur dinamik. |
| **Guna butiran saya** | Satu suis pilih-masuk tunggal. Ia mengawal sama ada butiran peribadi anda turut disertakan sebagai **asal usul** - baris pengarang/kredit yang disertakan dalam fail yang dieksport - dan sebagai pengarang bagi larian kelompok **/pro**. (Ia tidak mengawal pra-isi: lihat [Bagaimana alat menggunakan profil anda](#how-tools-use-your-profile).) |
| **Keutamaan** | Tema anda (cerah, gelap, atau SUSE) dan bahagian aplikasi yang telah anda dayakan melalui **Bendera ciri**. |
| **Kerja anda** | Sesi yang disimpan (dengan lakaran kecil) - disusun ke dalam folder bersarang dalam **[Projek](/info/using.html)** - pustaka **Imej Saya** anda, dan statistik aktiviti tempatan, semuanya dikaitkan dengan profil ini. |

Tiada satu pun daripada ini diwajibkan. Profil kosong adalah profil yang baik sepenuhnya; anda hanya mengisi apa yang menjimatkan masa menaip anda.

![The Profile screen - name, contact, an optional headshot, and your preferences](/t/url-shot?url=%2F%23%2Fprofile&width=1440&height=900&dpi=192&waitMs=1600&format=png&localize=1&filename=profile-details)

## Profil adalah konteks, bukan sekadar seorang individu

Perkataan "profil" memberi kesan seolah-olah ia satu individu yang tetap, tetapi dalam Lolly ia sebenarnya **konteks penciptaan** - *siapa anda semasa anda membuat sesuatu ini*. Konteks itu boleh mengambil tiga bentuk berbeza, dan Lolly mengendalikan ketiga-tiganya dengan cara yang sama.

### Sebagai individu

Lalai. Profil ialah anda: nama anda, e-mel anda, gambar potret anda. Tetapkan sekali sahaja dan tandatangan anda, lencana anda, lockup persidangan anda semuanya akan terisi dengan sendirinya. Inilah yang diperlukan oleh kebanyakan orang.

### Sebagai pasukan

Profil tidak semestinya seorang individu tunggal. Ia boleh mewakili **pasukan atau fungsi dalam sesebuah organisasi**: nama kongsi pasukan, alamat peti masuk kumpulan (`events@…`), sesebuah jabatan, gambar potret pasukan atau tanda unit. Seorang sahaja menyediakannya, mengeksportnya (lihat di bawah), dan selebihnya pasukan memuatkan profil yang sama - jadi segala yang dihasilkan oleh pasukan itu membawa butiran yang konsisten tanpa sesiapa perlu memasukkannya semula. Kiosk kongsi atau komputer riba demo yang dipinjam boleh menjalankan satu profil pasukan tunggal yang menjadi identiti penciptaan semua orang di sebaliknya.

### Sebagai fungsi - peranan yang anda pakai sekali-sekala

Inilah kes yang terlepas pandang oleh model tegar "satu individu, satu profil". Anda mungkin seorang **pengurus acara selama tiga hari setahun** dan sesuatu yang lain sepenuhnya pada baki masa yang ada. Pada tiga hari itu anda mahukan butiran acara, peti masuk acara, mungkin sub-jenama acara untuk mengisi lencana dan papan tanda anda; pada baki 362 hari itu anda mahukan identiti biasa anda kembali.

Dalam Lolly, peranan itu hanyalah **satu lagi profil yang anda simpan berdekatan** - satu bungkusan tersimpan (bahagian seterusnya) yang anda muatkan untuk acara tersebut dan ketepikan selepas itu. Peranan itu adalah sebuah topi, bukan akaun baharu. Pakainya apabila anda memerlukannya, tanggalkannya apabila anda selesai.

## Satu pemasangan, satu profil aktif - banyak yang boleh anda simpan

Pada bila-bila masa, sesuatu pemasangan mempunyai **satu profil aktif** - butiran yang dilihat oleh alat pada masa itu. Tiada suis profil dalam-aplikasi; sebaliknya, setiap profil ialah **bungkusan mudah alih** (satu fail `.zip` tunggal, lihat [di bawah](#moving-a-profile-to-a-new-device)). Itu memang sengaja mekanisme yang sama seperti berpindah ke peranti baharu - profil ialah fail yang boleh anda simpan, salin, dan muatkan.

Jadi jika anda benar-benar mengendalikan beberapa konteks serentak (anda, pasukan anda, topi pengurus acara), anda simpan beberapa bungkusan dan muatkan yang mana satu anda perlukan:

- **Peralihan paling bersih:** **Profil → Storan → Padam semua data saya**, kemudian **Import** bungkusan untuk konteks yang anda mahu masuki. Anda kini mencipta semata-mata sebagai profil itu.
- **Berlapis:** mengimport *tanpa* memadam terlebih dahulu akan **menggabungkan** - profil, sesi, dan imej yang diimport akan diletakkan di atas apa yang sudah ada, menggantikan apa-apa yang mempunyai nama sama dan mengekalkan selebihnya. Berguna untuk menarik sesi tersimpan sesuatu pasukan ke dalam persediaan anda sendiri; bukan pilihan yang sesuai jika anda memerlukan sempadan peranan yang bersih.
- **Bersebelahan:** oleh sebab segala-galanya bersifat khusus-peranti, profil pelayar berasingan, akaun pengguna berasingan, atau PWA kedua yang dipasang masing-masing membawa profil Lolly yang bebas tersendiri. Jalankan pemasangan peribadi anda dan pemasangan kiosk acara pada masa yang sama, tanpa perlu bertukar.

> Simpan satu bungkusan bagi setiap konteks dan namakan semula fail-fail tersebut mengikut apa yang diwakilinya (`LollyTools-events-2026.zip`, `LollyTools-me.zip`). Fail itu *ialah* profil tersebut.

## Memindahkan profil ke peranti baharu

Oleh sebab profil adalah sepenuhnya tempatan, satu-satunya cara untuk memasukkannya ke dalam pemasangan kosong - komputer riba baharu, pelayar yang baru sahaja ditetapkan semula, komputer rakan sekerja, atau kotak luar talian - adalah dengan **membawa fail itu sendiri**. Tiada log masuk yang memulihkannya untuk anda, dan itulah intinya: tiada apa-apa pun yang pernah meninggalkan peranti anda pada mulanya.

Di bawah **Profil → Storan → Pindah ke peranti lain**:

- **Eksport data saya** memuat turun satu fail `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` - dinamakan sempena profil yang memilikinya, dengan nombor jujukan harian supaya eksport berulang tidak bertembung (bahagian nama digugurkan apabila profil tidak mempunyainya). Ia mengandungi profil anda, setiap sesi yang disimpan (berserta lakaran kecilnya), imej yang anda muat naik, dan keutamaan anda (tema, susun atur, statistik aktiviti tempatan).
- **Import data…** pada pemasangan yang satu lagi akan membaca semula fail tersebut dan anda boleh menyambung tepat di tempat anda berhenti.

Bungkusan itu ialah fail zip yang ringkas dan berdikari sepenuhnya, jadi ia boleh dipindahkan dengan **apa-apa sahaja** cara - USB, AirDrop, perkongsian rangkaian, e-mel kepada diri sendiri - dan sasarannya boleh sepenuhnya luar talian. Setiap bahagian mempunyai checksum, jadi fail yang rosak semasa pemindahan akan dikesan semasa import dan bukannya dipulihkan dalam keadaan separa rosak. Import akan **menggabungkan** (profil/sesi/imej yang mempunyai nama sama akan ditulis ganti; selebihnya dikekalkan), jadi ia tidak akan sekali-kali memadamkan sasaran yang sudah digunakan.

Apa yang tidak turut dipindahkan: cache katalog (ia memuat turun semula sendiri pada peranti baharu) dan alat-alat itu sendiri (dianggap sudah tersedia).

Untuk susun atur bungkusan yang tepat, dasar versi, dan peraturan integriti, lihat **[Pemindahan Data](/info/data-transfer.html)**; untuk panduan hujung-ke-hujung, **[Menggunakan Lolly → Berpindah ke peranti lain](/info/using.html#moving-to-another-device)**.

## Bagaimana alat menggunakan profil anda

Sesuatu alat hanya sekali-kali *pra-isi* medan profil yang direka khusus untuknya:

**Pengikatan eksplisit.** Pengarang alat menandakan sesuatu input sebagai menarik daripada profil (`bindToProfile: "firstname"`, `"email"`, `"headshot"`, …). Apabila alat itu dibuka, input tersebut akan pra-isi daripada profil anda - dan anda masih boleh menggantikannya untuk sesi itu sahaja tanpa mengubah profil. Pra-isi adalah kemudahan tempatan dan berlaku sama ada **Guna butiran saya** dihidupkan atau tidak.

**Pilih-masuk (asal usul).** Apabila anda mengeksport sesuatu aset, butiran anda secara pilihan turut disertakan sebagai **asal usul** - baris pengarang/kredit yang disertakan dalam metadata fail (PNG, PDF, SVG, …) - supaya aset yang siap boleh menyatakan siapa yang menghasilkannya. *Inilah* yang dikawal oleh **Guna butiran saya**: biarkan ia dimatikan dan eksport tetap membawa atribusi alat/platform "Made with Lolly", tetapi tiada baris pengarang/hubungan peribadi disertakan. (Pilih-masuk yang sama menetapkan pengarang pada larian kelompok **/pro**.) (Pengarang alat: lihat [Mengarang Alat → `bindToProfile`](/info/authoring-tools.html#bindtoprofile) dan [API Hos → `host.profile`](/info/host-api.html#host-profile).)

## Profil berbanding Platform berbanding Keupayaan

Tiga perkara ini terletak berdekatan antara satu sama lain dalam UI dan mudah dikelirukan:

- **Profil** - *anda* (atau pasukan anda, atau peranan yang anda sedang jalankan): nama, hubungan, gambar potret, kerja tersimpan anda. Peribadi, khusus-peranti, mudah alih sebagai bungkusan.
- **Platform** - *jenama*: warna, fon, dan tetapan global yang menjadi asas kepada setiap alat semasa menghasilkan output. Dikongsi dan konsisten, bukan peribadi.
- **Keupayaan** - *apa yang boleh dilakukan oleh aplikasi ini*: keseluruhan set ciri dan alat yang tersedia untuk anda.

Profil menentukan *daripada siapa* sesuatu aset itu; platform menentukan *rupa* sesuatu aset itu; keupayaan pula ialah *apa yang boleh anda hasilkan*.

### "Profil" membawa dua maksud lain di tempat lain - bukan profil ini

Perkataan ini digunakan secara bertindih di seluruh projek. Tiada satu pun daripada kedua-dua ini ialah profil peribadi yang dibincangkan dalam halaman ini:

- **Profil kandungan** - satu konfigurasi masa-bina dalam `profiles.json` yang mengikat satu set pek alat kepada satu katalog jenama (contohnya `suse`, `lolly-start`). Inilah yang dipilih oleh pengendali semasa deploy, dan inilah juga yang dipilih oleh **parameter URL/CLI** `profile` sebagai varian *warna* pada masa eksport (keadaan percetakan ICC/CMYK - lihat [Mod URL](/info/url-mode.html)). Kedua-duanya berkaitan dengan *pembinaan/output*, bukan tentang *anda*. Lihat [Konfigurasi](/info/configuration.html).
- **Profil identiti** - **identiti Content Credentials yang disahkan** pilihan yang boleh anda daftarkan (satu sijil jangka pendek yang mengaitkan e-mel anda dengan eksport anda yang ditandatangani). Itu ialah identiti menandatangan, berasingan daripada medan nama/hubungan profil peribadi, walaupun **Guna butiran saya** mengawal sama ada salah satu daripadanya disertakan. Lihat [Identiti Content Credentials](/info/content-credentials-identity.html).

## Privasi

Profil tidak akan sekali-kali dihantar, dimuat naik, atau digunakan untuk mengenal pasti atau menjejaki anda - tiada apa-apa yang perlu dipersetujui, hanya notis ini supaya anda tahu apa yang disimpan. Padamkan semuanya pada bila-bila masa dengan **Profil → Padam semua data saya**. Lihat [Dasar Privasi](/info/privacy.html).
