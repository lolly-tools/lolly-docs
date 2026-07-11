# Lolly untuk Operator

**Strategi pencegahan kehilangan data (data-loss-prevention) dan asal-usul (provenance) yang kalis masa depan serta berlapis pertahanan (defence-in-depth), menyamar sebagai platform kreatif.**

Sistem imun organisasi yang membalut apa yang anda sudah lakukan — supaya kerja kreatif rutin yang diperlukan oleh pasukan anda setiap hari berlaku *di dalam* perimeter anda, bukannya bocor keluar daripadanya.

**Apa faedahnya untuk anda.** Anda menjadi orang yang berkata ya kepada sesuatu yang selamat *dan* popular. Anda menutup lubang eksfiltrasi dan memadamkan baris gilir permintaan reka bentuk dalam satu langkah — kemenangan keselamatan yang jarang berlaku yang menjadikan anda lebih disukai, bukan kurang. Tiada lagi panggilan jam 3 pagi kerana seseorang menghantar fail jenama melalui e-mel kepada kontraktor atau menampal data pelanggan ke dalam alat web rawak; lebih sedikit vendor SaaS, kontrak, dan audit di atas meja anda; serta jejak git yang lengkap yang boleh anda tunjukkan apabila seseorang bertanya siapa yang meluluskan apa. Anda boleh tidur dengan lena pada waktu malam.

Lolly memperoleh tempatnya sebagai alat kreatif: ia memadamkan baris gilir reka bentuk dan meletakkan output bertaraf pengeluaran di tangan setiap orang. Tetapi sebab ia *selamat* untuk diagihkan seluas itu adalah bersifat seni bina. Tiada apa yang dimuat naik, semuanya boleh dihasilkan semula, dan setiap eksport boleh membawa rekod kriptografi tentang asal-usulnya. Halaman ini ialah kisah keselamatan dan pelancarannya.

> **Bercakap terus terang dahulu.** Ciri-ciri keselamatan Lolly adalah kukuh *mengikut reka bentuk*, dan enjin kriptografi serta penghurai failnya kini sedang menjalani pengukuhan infrastruktur ketat SUSE, bersiap untuk skala perusahaan — kami memang mahir dalam hal ini. Meterai, penandatanganan pada peranti (on-device), dan penyulitan di bawah adalah nyata dan boleh dipertahankan; semasa pengukuhan itu selesai, anggaplah ia sebagai pertahanan berlapis dan bukannya kawalan bertauliah di tempat yang memerlukan jaminan bebas secara kontrak. Kami lebih suka anda mengetahuinya terlebih dahulu.

## Kelebihan strategik

Cara biasa kerja kreatif rutin dilaksanakan adalah satu permukaan liabiliti: fail dihantar melalui e-mel kepada kontraktor reka bentuk luar, aset jenama dimuat naik ke berpuluh-puluh editor SaaS, data pelanggan ditampal ke dalam alat web milik orang asing hanya untuk "sekadar buat grafik pantas." Setiap satu daripadanya adalah data yang meninggalkan kawalan anda.

Lolly membalikkan keadaan ini. Kerja yang *mendorong* kebocoran tersebut — kad petikan, sepanduk yang dilokalkan, lencana acara, tangkapan skrin yang disunting (redacted) — kini berlaku pada alat yang berjalan pada peranti pekerja itu sendiri, mengikut jenama anda, tanpa pelayan yang terlibat. Anda bukan menambah kawalan di atas aliran kerja berisiko; anda menggantikan aliran kerja berisiko itu dengan satu yang sejak awal lagi tiada laluan eksfiltrasi.

- **Konfigurasi adalah milik anda.** Enjin dan shell adalah sumber terbuka (MPL-2.0). Tambahkan lapisan pengesahan (auth), telemetri, atau CA anda sendiri; hoskan atau tidak; anda memegang kawalan penuh ke atas ciri dan kos, dijejaki melalui git, tidak terkunci dalam pangkalan data SaaS.
- **Governans adalah data, bukan papan pemuka.** Katalog alat ialah sumber kebenaran (source of truth), diurus sebagai repositori Git — semakan pull-request *itulah* moderasinya, dan anda mendapat jejak audit yang lengkap serta rollback segera untuk setiap templat yang boleh disentuh oleh tenaga kerja anda. Lihat [Penerimaan Pakai & Governans](/info/adoption-governance.html).
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

Eksport boleh membawa **Content Credentials** — manifes [C2PA](https://c2pa.org) yang ditandatangani, terikat kepada cincangan (hash) bait fail tersebut. Ini **boleh-*dikesan*-gangguan, bukan *kalis*-gangguan**: ia tidak menghalang sesiapa daripada mengubah fail, tetapi sebarang perubahan kemudian akan memecahkan meterai tersebut dan pengesah yang mesra-C2PA akan melaporkannya. Itulah ciri yang jujur dan berguna — anda boleh *mengesan* perubahan, secara kriptografi, luar talian.

- **Aktif secara lalai, pada peranti.** Kunci tandatangan dijana pada peranti, tidak boleh diekstrak (walaupun Lolly sendiri tidak boleh membacanya), dan penandatanganan berlaku secara tempatan — hanya *pendaftaran* identiti pilihan yang menyentuh rangkaian.
- **Tingkat kepercayaan (trust tiers).** Eksport yang tidak didaftarkan adalah sah dari segi struktur tetapi ditandatangani secara tanpa nama (`untrusted`). Daftarkan **identiti yang disahkan** (sijil jangka pendek daripada Lolly CA, terikat kepada e-mel) dan pengesah yang menyematkan (pinning) root Lolly akan melaporkan `trusted` + e-mel penandatangan. Pihak berkuasa cap masa yang dipercayai (trusted timestamp authority) dan lampu hijau pengesah pihak ketiga (pematuhan C2PA) berada dalam roadmap, belum dihantar — tingkat-tingkat ini dilabel dengan jujur dan fail tidak akan sekali-kali menunjukkan lampu hijau palsu.
- **Tempoh sah kelayakan (credential lifetime)** adalah keputusan operator/pengguna pada masa penandatanganan: 7 / 30 / 90 / 365 hari, lalai 30.
- **Pengesahan berlaku pada peranti.** Lepaskan (drop) mana-mana fail pada `/valid` (atau `lolly validate <file>`) untuk mendapatkan laporan luar talian sama ada ia benar-benar dibuat dengan Lolly dan tidak berubah sejak itu. Lihat [Identiti Content Credentials](/info/content-credentials-identity.html).

> **Jurang yang diketahui, dinyatakan dengan jelas:** Pengesah Lolly masih belum dapat membaca sepenuhnya manifes tuntutan (claim) **v2** C2PA daripada penerbit lain; dan WebM membawa manifes tersebut sebagai lampiran Matroska (belum wujud pemetaan C2PA yang piawai untuk WebM), jadi alat pihak ketiga dapat mengesahkan MP4 Lolly tetapi tidak WebM-nya.

## Penyulitan & kata laluan

Untuk fail yang perlu dihantar dalam keadaan terkunci, semuanya berlaku pada peranti:

- **Kata laluan buka PDF** — *Standard* adalah pencegah RC4 40-bit (boleh dibuka di mana-mana, boleh dihantar dalam pautan); *Kuat (Strong)* adalah **AES-256** (PDF 2.0), ditaip semasa eksport dan tidak sekali-kali diletakkan dalam pautan.
- **Muat turun terkunci** — ZIP, folder Projek, atau larian kelompok (batch run) boleh dikunci sepenuhnya: *Standard* ZipCrypto (lemah, sejagat) atau *Kuat (Strong)* **AES-256** (WinZip AE-2). Pertahanan berlapis: mana-mana PDF di dalam zip Strong turut dikunci AES-256 secara individu, jadi ia kekal terkunci selepas dibongkar (unpack).
- **Pautan kongsi berkunci kata laluan** — seluruh keadaan (state) pautan disulitkan AES-256 di bawah kunci terbitan PBKDF2; hanya teks sifer (ciphertext) yang dihantar, kata laluan tidak sekali-kali berada dalam pautan, dan penyahsulitan berlaku dalam pelayar penerima.

## Sedia untuk air-gap

Lolly direka untuk berjalan **tanpa rangkaian semasa render**. Shell web adalah PWA offline-first (service worker); fon dan WASM disimpan pada peranti; keadaan (state) alat dikekalkan secara tempatan melalui host bridge, tidak sekali-kali `localStorage`. Mana-mana alat yang mencapai rangkaian hanya berbuat demikian melalui keupayaan `host.net` yang **disenaraikan-benar (allowlisted)**, yang mesti diisytiharkan dalam manifesnya — shell yang tidak boleh (atau tidak mahu) memenuhinya akan mengganti dengan stub. Jadi pemasangan air-gapped sepenuhnya boleh me-render, mengeksport, menyulitkan, dan mengesahkan kelayakan tanpa apa-apa untuk "phone home".

## Apa yang perlu anda ketahui sebelum bergantung padanya

Operator berhak mengetahui had-had (caveats) ini, bukan sekadar dakwaan:

- **Pengukuhan untuk skala perusahaan.** Seperti dinyatakan di atas — kriptografi dan penghurai (parsers) kini sedang menjalani pengukuhan infrastruktur ketat SUSE untuk skala perusahaan; kukuh mengikut reka bentuk, dan anggaplah sebagai pertahanan berlapis di tempat yang memerlukan jaminan bebas secara kontrak.
- **Hook alat *bukan* sandbox keselamatan.** `hooks.js` pilihan bagi sesuatu alat berjalan dengan host bridge disuntik, tetapi dalam shell pelayar ia dilaksanakan dalam realm halaman tersebut dan *boleh* mencapai `window`/`document`/`fetch`. Layan kod alat sebagaimana anda melayan mana-mana kod yang anda jalankan — semak (review) ia. Inilah sebabnya model katalog-sebagai-semakan-Git penting, dan sebabnya alat pihak ketiga yang tidak dipercayai tidak sepatutnya dijalankan sehingga pengasingan Worker dihantar.
- **C2PA boleh dikesan gangguan (tamper-evident), bukan kalis gangguan (tamper-proof)**, dan jurang pembacaan-v2 / WebM di atas adalah nyata.
- **Tingkat penyulitan berbeza.** Kunci *Standard* adalah pencegah sahaja; hanya *Kuat (Strong)* (AES-256) merupakan perlindungan sebenar, dan fail Strong tidak dapat dibuka dalam setiap pembaca lama (legacy).

## Ke mana seterusnya

- **[Penerimaan Pakai & Governans](/info/adoption-governance.html)** — persona, metrik pengalihan (deflection), dan governans-sebagai-data secara penuh.
- **[Penggunaan (Deployment)](/info/deployment.html)** — deploy/serve/hibrid, MDM, dan pengehosan sendiri (self-hosting) perkhidmatan.
- **[Konfigurasi](/info/configuration.html)** — profil, pek jenama (brand packs), pengehadan keupayaan (capability gating), dan bendera ciri (feature flags).
- **[Dasar Privasi](/info/privacy.html)** — kenyataan formal "tidak mengumpul apa-apa, tidak memuat naik apa-apa".
