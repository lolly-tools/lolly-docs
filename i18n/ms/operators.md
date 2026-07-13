# Lolly untuk Operator

### Strategi kalis masa depan, berlapis pertahanan (defence-in-depth), pencegahan kehilangan data & asal-usul (provenance) — yang kebetulan pula menjadi platform pengeluaran kreatif

Sistem imun organisasi yang membalut apa yang anda sudah lakukan — supaya kerja kreatif rutin yang diperlukan oleh pasukan anda setiap hari berlaku *di dalam* perimeter anda, bukannya bocor keluar daripadanya.

**Apa faedahnya untuk anda.** Anda menjadi orang yang berkata ya kepada sesuatu yang selamat *dan* popular. Anda menutup lubang eksfiltrasi dan memadamkan baris gilir permintaan reka bentuk dalam satu langkah — kemenangan keselamatan yang jarang berlaku yang menjadikan anda lebih disukai, bukan kurang. Tiada lagi panggilan jam 3 pagi kerana seseorang menghantar fail jenama melalui e-mel kepada kontraktor atau menampal data pelanggan ke dalam alat web rawak; lebih sedikit vendor SaaS, kontrak, dan audit di atas meja anda; serta jejak git yang lengkap yang boleh anda tunjukkan apabila seseorang bertanya siapa yang meluluskan apa. Anda boleh tidur dengan lena pada waktu malam.

Lolly memperoleh tempatnya sebagai alat kreatif: ia memadamkan baris gilir reka bentuk dan meletakkan output bertaraf pengeluaran di tangan setiap orang. Tetapi sebab ia *selamat* untuk diagihkan seluas itu adalah bersifat seni bina. Tiada apa yang dimuat naik, semuanya boleh dihasilkan semula, dan setiap eksport boleh membawa rekod kriptografi tentang asal-usulnya. Halaman ini ialah kisah keselamatan dan pelancarannya.

> **Di mana keadaannya hari ini.** Ciri-ciri keselamatan Lolly kukuh mengikut reka bentuk, dan enjin kriptografi serta penghurai failnya kini sedang menjalani pengukuhan infrastruktur bertaraf perusahaan SUSE. Meterai, penandatanganan pada peranti (on-device), dan penyulitan di bawah adalah nyata dan boleh dipertahankan sekarang, serta semakin matang ke arah pensijilan bebas — jadi di tempat yang kontrak menuntut jaminan bertauliah, gunakannya sebagai pertahanan berlapis (defence-in-depth) semasa proses itu selesai.

## Kelebihan strategik

Cara biasa kerja kreatif rutin dilaksanakan adalah satu permukaan liabiliti: fail dihantar melalui e-mel kepada kontraktor reka bentuk luar, aset jenama dimuat naik ke berpuluh-puluh editor SaaS, data pelanggan ditampal ke dalam alat web milik orang asing hanya untuk "sekadar buat grafik pantas." Setiap satu daripadanya adalah data yang meninggalkan kawalan anda.

Lolly membalikkan keadaan ini. Kerja yang *mendorong* kebocoran tersebut — kad petikan, sepanduk yang dilokalkan, lencana acara, tangkapan skrin yang disunting (redacted) — kini berlaku pada alat yang berjalan pada peranti pekerja itu sendiri, mengikut jenama anda, tanpa pelayan yang terlibat. Anda bukan menambah kawalan di atas aliran kerja berisiko; anda menggantikan aliran kerja berisiko itu dengan satu yang sejak awal lagi tiada laluan eksfiltrasi.

- **Konfigurasi adalah milik anda.** Enjin dan shell adalah sumber terbuka (MPL-2.0). Tambahkan lapisan pengesahan (auth), telemetri, atau CA anda sendiri; hoskan atau tidak; anda memegang kawalan penuh ke atas ciri dan kos, dijejaki melalui git, tidak terkunci dalam pangkalan data SaaS.
- **Governans boleh menjadi data, bukan papan pemuka.** Apabila anda mahukan kawalan itu, uruskan katalog alat sebagai repositori Git — semakan pull-request menjadi kelulusan jenama, dengan jejak audit yang lengkap serta rollback segera bagi setiap templat yang boleh disentuh oleh tenaga kerja anda. Ia satu pilihan, bukan kewajipan: pasukan yang sekadar mahu menghasilkan sesuatu boleh mengarang alat mereka sendiri dalam Layout Studio dan memasukkan fail mereka sendiri ke dalam katalog, sepenuhnya dalam aplikasi, tanpa pernah menyentuh git. Lihat [Penerimaan Pakai & Governans](/info/adoption-governance.html).
- **Pagar keselamatan (guard-rails) bersifat struktural.** Kekangan jenama dikodkan tegar (hard-coded) ke dalam templat, bukan diterbitkan sebagai garis panduan yang boleh diabaikan orang. Output yang salah bukan sekadar tidak digalakkan — ia langsung tidak boleh dihasilkan.

## Padamkan baris gilir permintaan sambil menggandakan kandungan.

Satu matlamat Lolly ialah **pengalihan permintaan reka bentuk (design-request deflection)**: permintaan rutin yang tidak perlu sampai kepada pereka grafik langsung kerana orang yang memerlukan aset itu membuatnya sendiri, dengan betul, dalam masa beberapa minit. Setiap tiket yang dialihkan adalah kemenangan produktiviti sekali gus satu fail kurang yang bertukar tangan.

Lolly dibina untuk menyesuaikan diri dengan cara organisasi anda beroperasi sebenarnya — tiada satu cara yang betul untuk menggunakannya:

- **Sebar (deploy), jangan sajikan (serve).** Hantar Lolly ke peranti melalui MDM sedia ada anda (Intune, Jamf, Munki…). Ia berjalan secara tempatan sebagai apl desktop/mudah alih atau PWA luar talian — berfungsi di sebalik mana-mana firewall, dalam mana-mana persekitaran air-gapped, tanpa pelayan yang perlu diselenggara dan IT mengawal kadar kemas kini.
- **Sajikan sahaja.** Jalankan satu instance di dalam rangkaian anda (atau di sebalik VPN); pengguna mengaksesnya melalui pelayar, tiada apa yang dipasang. Terbitkan satu alat sekali, semua orang mendapatnya serta-merta; gandingkan dengan IdP anda untuk kawalan akses.
- **Hibrid.** Apl tempatan untuk kerja lapangan luar talian, versi pelayar yang sentiasa terkini untuk mesin pinjaman — kedua-duanya merujuk kepada pustaka alat yang sama.

Model penggunaan (deploy) yang lengkap dan panduan pentadbiran boleh didapati di [Penggunaan (Deployment)](/info/deployment.html) dan [Konfigurasi](/info/configuration.html).

## Utiliti anti-eksfiltrasi

Satu kategori alat Lolly wujud *khusus* untuk memastikan fail kekal di dalam perimeter. Utiliti privasi.


- **Buang data tersembunyi**
 Buang lokasi dan semua maklumat pengenalan tersembunyi daripada dokumen dan fail media.

- **Pembantu Teks**  
Nyahnamakan (anonymize), enkod, format, dan olah teks berstruktur dan tidak berstruktur. 

- **Mampatkan PDF**
Elakkan sebarang kemungkinan 'krisis had e-mel' di mana alat web pihak ketiga menanti mangsa dan data 

- **Mampatkan PDF**
Elakkan sebarang kemungkinan 'krisis had e-mel' di mana alat web pihak ketiga menanti mangsa dan data terlepas keluar begitu sahaja. 

Semua ini adalah transformasi pada peranti (on-device): fail atau data anda masuk, bait yang telah dibersihkan keluar, dan **tiada pelayan untuk dimuat naik**. Ia adalah lawan yang disengajakan bagi alat "muat naik fail anda ke laman web orang asing untuk membersihkannya" yang biasa dicapai oleh pekerja yang berniat baik sebaliknya.



## Determinisme & kebolehulangan

Setiap input alat boleh dinyatakan sebagai parameter URL, dan input yang sama menghasilkan fail yang sama. Ini membawa dua kesan kepada operator:

- **URL itulah artifak.** Commit pautan tersebut, jana semula aset mengikut permintaan — tiada fail binari yang di-commit ke dalam Git, tiada perlu mengejar "versi terkini" dalam sembang. ID aset dan alat adalah kontrak kekal, jadi pautan yang dijana hari ini masih akan berfungsi kelak.
- **CLI menggunakan laluan render yang sama** seperti GUI, jadi saluran paip binaan (build pipelines) dan aplikasi tidak akan pernah tersasar (drift) antara satu sama lain. Jana imej OG, kad sosial, dan visual data pada masa binaan (build time), secara boleh dihasilkan semula.

## Asal-usul & Content Credentials

Eksport boleh membawa **Content Credentials** — manifes [C2PA](https://c2pa.org) yang ditandatangani, terikat kepada cincangan (hash) bait fail tersebut. Sebarang perubahan kemudian pada fail itu akan memecahkan meterai tersebut, jadi pengesah yang mesra-C2PA **mengesan pengubahan secara kriptografi, luar talian**. Kelayakan itu bersifat boleh-*dikesan*-gangguan (tamper-evident): ia menandakan gangguan dan bukannya menghalangnya, dan itulah justru yang membolehkan pengesahan luar talian sepenuhnya.

- **Aktif secara lalai, pada peranti.** Kunci tandatangan dijana pada peranti, tidak boleh diekstrak (walaupun Lolly sendiri tidak boleh membacanya), dan penandatanganan berlaku secara tempatan — hanya *pendaftaran* identiti pilihan yang menyentuh rangkaian.
- **Tingkat kepercayaan (trust tiers).** Eksport yang tidak didaftarkan adalah sah dari segi struktur tetapi ditandatangani secara tanpa nama (`untrusted`). Daftarkan **identiti yang disahkan** (sijil jangka pendek daripada Lolly CA, terikat kepada e-mel) dan pengesah yang menyematkan (pinning) root Lolly akan melaporkan `trusted` + e-mel penandatangan. Pihak berkuasa cap masa yang dipercayai (trusted timestamp authority) dan lampu hijau pengesah pihak ketiga (pematuhan C2PA) berada dalam roadmap. Setiap tingkat adalah eksplisit, dan sesuatu fail hanya menuntut kepercayaan yang boleh dibuktikannya.
- **Tempoh sah kelayakan (credential lifetime)** adalah keputusan operator/pengguna pada masa penandatanganan: 7 / 30 / 90 / 365 hari, lalai 30.
- **Pengesahan berlaku pada peranti.** Lepaskan (drop) mana-mana fail pada `/valid` (atau `lolly validate <file>`) untuk mendapatkan laporan luar talian sama ada ia benar-benar dibuat dengan Lolly dan tidak berubah sejak itu. Lihat [Identiti Content Credentials](/info/content-credentials-identity.html).

> **Nota kesalinghubungan (interoperability).** Lolly mengesahkan kelayakannya sendiri dan banyak kelayakan pihak ketiga secara luar talian hari ini. Dua perkara interop sedang dalam proses: membaca sepenuhnya manifes tuntutan (claim) **v2** C2PA daripada penerbit lain, dan WebM — yang belum mempunyai pemetaan C2PA piawai, jadi Lolly melampirkan manifes tersebut sebagai bahagian Matroska (alat pihak ketiga mengesahkan MP4 Lolly secara terus; WebM menyusul sebaik sahaja piawai itu mantap).

## Penyulitan & kata laluan

Untuk fail yang perlu dihantar dalam keadaan terkunci, semuanya berlaku pada peranti:

- **Kata laluan buka PDF** — *Standard* adalah pencegah RC4 40-bit (boleh dibuka di mana-mana, boleh dihantar dalam pautan); *Kuat (Strong)* adalah **AES-256** (PDF 2.0), ditaip semasa eksport dan tidak sekali-kali diletakkan dalam pautan.
- **Muat turun terkunci** — ZIP, folder Projek, atau larian kelompok (batch run) boleh dikunci sepenuhnya: *Standard* ZipCrypto (lemah, sejagat) atau *Kuat (Strong)* **AES-256** (WinZip AE-2). Pertahanan berlapis: mana-mana PDF di dalam zip Strong turut dikunci AES-256 secara individu, jadi ia kekal terkunci selepas dibongkar (unpack).
- **Pautan kongsi berkunci kata laluan** — seluruh keadaan (state) pautan disulitkan AES-256 di bawah kunci terbitan PBKDF2; hanya teks sifer (ciphertext) yang dihantar, kata laluan tidak sekali-kali berada dalam pautan, dan penyahsulitan berlaku dalam pelayar penerima.

## Sedia untuk air-gap

Air-gap ialah **penggunaan kelas pertama (first-class deployment)**, bukan mod khas — Lolly berjalan tanpa rangkaian semasa render sedia daripada kotaknya. Shell web adalah PWA offline-first (service worker); fon dan WASM disimpan pada peranti; keadaan (state) alat dikekalkan secara tempatan melalui host bridge, tidak sekali-kali `localStorage`. Mana-mana alat yang mencapai rangkaian hanya berbuat demikian melalui keupayaan `host.net` yang **disenaraikan-benar (allowlisted)** yang mesti diisytiharkan dalam manifesnya — shell yang tidak boleh (atau tidak mahu) memenuhinya akan mengganti dengan stub. Hantar shell ke peranti melalui MDM anda, atau sajikan satu instance di dalam rangkaian anda, dan pemasangan air-gapped sepenuhnya akan me-render, mengeksport, menyulitkan, serta mengesahkan kelayakan tanpa apa-apa untuk "phone home".

## Baik untuk diketahui

Beberapa perkara yang wajar difahami dengan jelas sebelum anda melancarkannya:

- **Pengukuhan sedang berjalan.** Kriptografi dan penghurai (parsers) kini sedang menjalani pengukuhan skala perusahaan SUSE (lihat di atas) — kukuh mengikut reka bentuk hari ini; gunakan sebagai pertahanan berlapis di tempat yang kontrak menuntut jaminan bertauliah.
- **Hook alat *bukan* sandbox keselamatan.** `hooks.js` pilihan bagi sesuatu alat berjalan dengan host bridge disuntik, tetapi dalam shell pelayar ia dilaksanakan dalam realm halaman tersebut dan *boleh* mencapai `window`/`document`/`fetch`. Layan kod alat sebagaimana anda melayan mana-mana kod yang anda jalankan — semak (review) ia. Inilah sebabnya organisasi yang menjalankan katalog kongsi boleh mengawalnya melalui semakan Git; walau apa pun, jalankan hanya alat yang telah anda semak sehingga pengasingan Worker dihantar.
- **Content Credentials boleh dikesan gangguan (tamper-evident).** Ia mengesan pengubahan dan bukannya menghalangnya — lihat nota kesalinghubungan (interoperability) di atas.
- **Dua tingkat penyulitan.** Kunci *Standard* adalah pencegah pantas dan sejagat; *Kuat (Strong)* (AES-256) ialah perlindungan penuh — pilih Strong untuk apa-apa yang sensitif, dengan mengambil kira ia memerlukan pembaca moden.

## Ke mana seterusnya

- **[Penerimaan Pakai & Governans](/info/adoption-governance.html)** — persona, metrik pengalihan (deflection), dan governans-sebagai-data secara penuh.
- **[Penggunaan (Deployment)](/info/deployment.html)** — deploy/serve/hibrid, MDM, dan pengehosan sendiri (self-hosting) perkhidmatan.
- **[Konfigurasi](/info/configuration.html)** — profil, pek jenama (brand packs), pengehadan keupayaan (capability gating), dan bendera ciri (feature flags).
- **[Dasar Privasi](/info/privacy.html)** — kenyataan formal "tidak mengumpul apa-apa, tidak memuat naik apa-apa".
