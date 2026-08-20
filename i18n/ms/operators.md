# Lolly untuk Operator

### Strategi keselamatan & risikan pertahanan-berlapis - yang kebetulan menjadi platform pengeluaran kreatif

Sistem imun organisasi zero-trust yang membalut apa yang anda sudah lakukan - supaya kerja kreatif rutin yang diperlukan pasukan anda setiap hari berlaku *di dalam* perimeter anda dan bukannya bocor keluar daripadanya.

**Apa manfaatnya untuk anda.** Anda dapat menjadi orang yang berkata ya kepada sesuatu yang selamat *dan* popular. Anda menutup lubang eksfiltrasi, memperoleh keupayaan dan memadam barisan permintaan dalam satu langkah - kemenangan keselamatan yang jarang yang membuatkan anda lebih disukai, bukan kurang. Tiada panggilan jam 3 pagi daripada peguam kerana fail terperingkat atau data pelanggan tersasar ke dalam alat web sembarangan; lebih sedikit vendor SaaS, kontrak dan audit di atas meja anda; dan jejak audit yang boleh dihasilkan semula sepenuhnya yang boleh anda tunjukkan apabila seseorang bertanya. Anda tidur lebih lena, dan menceriakan beberapa hari sambil melakukannya.

Lolly bukan alat kreatif kelas kedua: ia meletakkan output berkualiti pengeluaran di tangan semua orang, dan pengalaman penciptaan berpandukan jenama tiada tandingan. Sebab ia *selamat* untuk diagihkan secara meluas adalah seni bina: tiada apa yang dimuat naik yang anda tidak letakkan di sana, setiap hasil boleh dihasilkan semula dan setiap eksport boleh membawa pelbagai lapisan rekod kriptografi terkemuka industri. Tidak kira bagaimana dokumen sampai ke meja anda, anda boleh melihat provenans penuhnya, sama ada ia telah diganggu dan sama ada anda boleh menciptanya semula sempurna-piksel.

> **Di mana kedudukannya hari ini.** Ciri keselamatan Lolly kukuh mengikut reka bentuk, dan enjin kriptografi serta penghuraian failnya sedang melalui pengukuhan infrastruktur gred perusahaan SUSE. Meterai, penandatanganan pada peranti dan penyulitan di bawah adalah sebenar dan boleh dipertahankan sekarang, dan sedang matang ke arah pensijilan bebas - jadi di mana kontrak memerlukan jaminan bertauliah, gunakan ia sebagai pertahanan-berlapis semasa proses itu selesai.

## Kelebihan strategik

Cara biasa kerja kreatif rutin dilakukan ialah permukaan liabiliti: fail dihantar melalui e-mel kepada kontraktor reka bentuk luar, aset jenama dimuat naik ke sedozen editor SaaS, data pelanggan ditampal ke dalam alat web orang asing untuk "cuma buat grafik pantas." Setiap satu daripadanya adalah data meninggalkan kawalan anda.

Lolly membalikkannya. Kerja yang *mendorong* kebocoran itu - kad petikan, sepanduk yang disetempatkan, lencana acara, tangkapan skrin yang dihitamkan - kini berlaku pada alat yang berjalan pada peranti pekerja sendiri, terhadap jenama anda, tanpa pelayan dalam gelung. Anda bukan menambah kawalan di atas aliran kerja berisiko; anda menggantikan aliran kerja berisiko itu dengan satu yang tiada laluan eksfiltrasi sejak awal.

- **Konfigurasi adalah milik anda.** Enjin dan shell adalah sumber terbuka (MPL-2.0). Tindih pengesahan, telemetri atau CA anda sendiri; hoskannya atau tidak; anda memegang kawalan penuh ke atas ciri dan kos, dijejak melalui git, tidak terkunci dalam pangkalan data SaaS.
- **Governans boleh menjadi data, bukan papan pemuka.** Apabila anda mahukan kawalan itu, uruskan katalog alat sebagai repositori Git - semakan pull-request menjadi kelulusan jenama, dengan jejak audit penuh dan rollback segera untuk setiap templat yang boleh disentuh oleh tenaga kerja anda. Ia adalah pilihan, bukan kewajipan, dan ia jatuh ke atas satu meja sahaja: pencipta bekerja sepenuhnya di dalam aplikasi, menyimpan hasil kerja mereka sebagai **sesi** dan menyerahkannya sebagai pautan kongsi, sandaran atau kolaborasi langsung - tiada satu pun daripadanya memerlukan git. Apabila salah satu sesi itu layak menjadi titik permulaan kekal, sesiapa yang menjalankan penggunaan membuka pautan itu, merekodkan nilainya sebagai **templat** pada alat tersebut dalam pek jenama dan melakukan commit. Selepas itu ia terpapar dalam pemilih "New from template" alat itu dan boleh dipaut terus sebagai `?template=<id>`. Git ialah langkah kunci pentadbir, digunakan sekali, dan bukan sesuatu yang perlu disentuh oleh pencipta. Lihat [Penggunaan & Tadbir Urus](/info/adoption-governance.html).
- **Pagar pengaman adalah struktural.** Kekangan jenama dikodkan keras ke dalam templat, bukan diterbitkan sebagai garis panduan yang boleh diabaikan orang. Output yang salah bukan sekadar tidak digalakkan - ia tidak boleh dihasilkan.

> **Anda mentadbir seluruh geganti.** Seorang kreatif mengarang peraturan dan pembangun meningkatkannya, tetapi operatorlah yang menjadikan kitaran hayat itu selamat untuk dijalankan seluruh organisasi - alat yang sama yang membolehkan wakil membuat sendiri di atas kapal terbang ialah satu yang boleh anda gerbangkan melalui semakan Git, gunakan melalui MDM anda dan sahkan secara kriptografi. Lihat bagaimana peranan itu bergabung dalam [Kitaran hayat kempen](/info/overview.html#the-lifecycle-of-a-campaign), dan bagaimana anda mentadbirnya dalam [Penerimagunaan & Tadbir Urus](/info/adoption-governance.html).

## Padam barisan permintaan sambil merebakkan kandungan.

Satu matlamat Lolly ialah **pesongan permintaan reka bentuk**: permintaan rutin yang tidak pernah perlu sampai kepada pereka kerana orang yang memerlukan aset itu menghasilkannya sendiri, dengan betul, dalam beberapa minit. Setiap tiket yang dipesongkan adalah kedua-dua kemenangan produktiviti dan satu lagi fail yang tidak berpindah tangan.

Lolly dibina untuk sesuai dengan cara organisasi anda sebenarnya beroperasi - tiada satu cara betul untuk menggunakannya:

- **Gunakan, jangan layani.** Hantar Lolly ke peranti melalui MDM sedia ada anda (Intune, Jamf, Munki…). Ia berjalan secara tempatan sebagai apl desktop/mudah alih atau PWA luar talian - berfungsi di sebalik mana-mana tembok api, dalam mana-mana persekitaran jurang udara, tanpa pelayan untuk diselenggara dan IT mengawal kadar kemas kini.
- **Layani sahaja.** Jalankan satu tika di dalam rangkaian anda (atau di sebalik VPN); pengguna mencapainya dalam pelayar, tiada apa dipasang. Terbitkan satu alat sekali, semua orang mempunyainya serta-merta; gandingkan dengan IdP anda untuk kawalan akses.
- **Hibrid.** Apl tempatan untuk kerja lapangan luar talian, versi pelayar yang sentiasa terkini untuk mesin yang dipinjam - kedua-duanya menuju ke pustaka alat yang sama.

Model penggunaan penuh dan panduan pentadbiran tinggal dalam [Penggunaan](/info/deployment.html) dan [Konfigurasi](/info/configuration.html).

## Utiliti anti-eksfiltrasi

Satu kategori alat Lolly - utiliti privasi - wujud *khusus* untuk memastikan fail kekal di dalam perimeter.


- **Buang data tersembunyi**
 Buang lokasi dan semua maklumat pengenalan tersembunyi daripada dokumen dan fail media.

- **Text Helper**  
Nyahnama, enkod, format dan manipulasi teks berstruktur dan tidak berstruktur. 

- **Compress PDF**
Kecilkan PDF yang terlalu besar terus di peranti, supaya tiada siapa perlu mencari laman web pihak ketiga "compress my PDF" sebaik sahaja fail terlalu besar untuk dihantar melalui e-mel - itulah tepatnya titik di mana data tergelincir keluar. 

Semua ini ialah transformasi terus di peranti: fail atau data anda masuk, bait yang telah dibersihkan keluar dan **tiada pelayan untuk dimuat naik**. Ia adalah lawan yang disengajakan bagi alat "muat naik fail anda ke laman web orang asing untuk membersihkannya" yang biasa dicari oleh pekerja yang bermaksud baik.

![Strip Hidden Data: fail mendarat pada kanvas dan lencana menyatakan dengan jelas bahawa tiada apa dimuat naik](/t/url-shot?url=%2F%23%2Ftool%2Fstrip-data&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=aud-strip-data)

Text Helper ialah tawaran yang sama tetapi untuk teks dan bukannya fail. Ia adalah ruang kerja bertab yang sepatutnya dicari oleh seorang pekerja di laman orang asing, dan ia tidak mengisytiharkan sebarang input kerana tiada apa yang disentuhnya pernah meninggalkan halaman ini.

![Ruang kerja Text Helper - susunan tab operasi di atas kad yang menyatakan bahawa tiada apa yang anda tampal meninggalkan peranti anda](/t/url-shot?url=%2F%23%2Ftool%2Ftext-helper&width=1200&height=750&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-content&dark=1&filename=ov2-text-helper)

Compress PDF melengkapkan set ini: lampiran yang terlalu besar mengecil mengikut tetapan kualiti yang anda pilih, pada mesin yang sudah menyimpannya.

![Compress PDF - paras kualiti dan suis skala kelabu di sebelah kiri, zon lepas untuk PDF anda sendiri di sebelah kanan dan tiada muat naik di mana-mana](/t/url-shot?url=%2F%23%2Ftool%2Fcompress-pdf&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=ov2-compress-pdf)

## Determinisme & kebolehulangan semula

Setiap input alat boleh dinyatakan sebagai parameter URL, dan input yang sama menghasilkan fail yang sama. Ini membawa dua akibat kepada pengendali:

- **URL adalah artifak itu sendiri.** Komit pautan itu, jana semula aset mengikut permintaan - tiada binari yang disimpan dalam Git, tiada perlu mengejar "versi terkini" dalam sembang. ID aset dan alat adalah kontrak kekal, jadi pautan yang dicipta hari ini masih boleh diselesaikan kemudian.
- **CLI menggunakan laluan render yang sama** seperti GUI, jadi saluran binaan dan aplikasi tidak akan tersasar. Jana imej OG, kad sosial dan visual data semasa waktu binaan, secara boleh ulang.

Prompt to Image ialah determinisme dalam bentuk paling ringkas: teks adalah keseluruhan input, imej yang ditaip huruf adalah keseluruhan output dan teks yang sama sentiasa disusun dengan cara yang sama.

![Prompt to Image - blok teks gesaan ditaip huruf ke dalam imej segi empat sama, dengan tiada apa dalam hasilnya yang tiada dalam input](/t/url-shot?url=%2F%23%2Ftool%2Fprompt-to-image%3Ffull&width=1440&height=900&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-prompt-to-image)

## Asal-usul & Content Credentials

![Zon lepas Verify menerima sebarang fail, daripada sebarang sumber, dan membacanya tanpa sebarang panggilan rangkaian](/t/url-shot?url=%2F%23%2Fverify&width=1440&height=900&dpi=192&waitMs=1800&waitSelector=.valid-drop&cropSelector=.valid-drop&format=svg&walker=1&dark=1&filename=aud-verify-drop)

Eksport boleh membawa **Content Credentials** - manifes [C2PA](https://c2pa.org) yang ditandatangani dan terikat kepada cincangan (hash) bait fail tersebut. Sebarang perubahan kemudian pada fail akan memecahkan meterai itu, jadi pengesah yang menyokong C2PA **mengesan pengubahsuaian secara kriptografi, luar talian**. Bukti kelayakan ini bersifat *ketara-gangguan* (tamper-evident): ia menandakan pengubahsuaian dan bukannya menghalangnya, dan itulah tepatnya yang menjadikan pengesahan sepenuhnya luar talian mungkin.

- **Aktif secara lalai, di peranti.** Kunci penandatanganan dijana pada peranti, tidak boleh diekstrak (malah Lolly sendiri tidak dapat membacanya) dan penandatanganan berlaku secara tempatan - hanya *pendaftaran* identiti pilihan yang pernah menyentuh rangkaian.
- **Peringkat kepercayaan.** Eksport yang tidak didaftarkan adalah terbentuk dengan baik tetapi ditandatangani secara tanpa nama (`untrusted`). Daftarkan **identiti disahkan** (sijil jangka pendek daripada Lolly CA, terikat kepada e-mel) dan pengesah yang menyematkan root Lolly akan melaporkan `trusted` + e-mel penandatangan. Pihak berkuasa cap masa dipercayai dan lampu hijau pengesah pihak ketiga (pematuhan C2PA) berada dalam peta hala tuju. Setiap peringkat adalah jelas, dan sesuatu fail hanya pernah mendakwa kepercayaan yang dapat dibuktikannya.
- **Tempoh sah bukti kelayakan** adalah pilihan pengendali/pengguna semasa penandatanganan: 7 / 30 / 90 / 365 hari, lalai 30.
- **Lolly Imprint.** Isyarat kedua yang saling melengkapi dan **aktif secara lalai**: tera air piksel tidak kelihatan yang dibakar ke dalam eksport raster (dan raster yang dirender oleh Lolly di dalam PDF/PPTX, bukan imej terbenam milik pengguna sendiri). Apabila bukti kelayakan itu musnah akibat sebarang perubahan bekas (container), Imprint terus bertahan selepas simpan-semula atau tangkapan skrin - petunjuk tahan lasak "piksel ini pernah melalui Lolly", kehadiran sahaja, tiada data peribadi. Ia adalah keselamatan-melalui-kekaburan, bukan pertahanan yang diperkukuh, dan ia melengkapi bukti kelayakan itu dan bukannya menggantikannya. `imprint=0` untuk menarik diri.
- **Content Credentials Tahan Lasak (pilihan).** Eksport raster boleh juga membawa tanda *tahan lasak* yang tidak kelihatan yang mengekod pengecam pengikatan-lembut (soft-binding), supaya bukti kelayakan C2PA dapat dipulihkan walaupun selepas muat naik ke media sosial atau simpan-semula telah menanggalkan metadata fail itu - iaitu keadaan di mana bukti kelayakan biasa akan hilang. Ia khusus untuk raster sahaja dan memerlukan langkah enkod-neural, jadi ia tidak aktif secara lalai (`durable=1` untuk mengaktifkannya). Lolly mengenali tanda tahan lasaknya sendiri secara luar talian di `/verify` pada hari ini; pemulihan oleh alat pihak ketiga (contohnya Adobe) akan menyusul sebaik sahaja resolusi pengikatan-lembut industri berada di tempatnya.
- **Pengesahan berlaku di peranti.** Lepaskan sebarang fail pada `/verify` (atau `lolly validate <file>`) untuk mendapatkan laporan luar talian sama ada ia benar-benar dihasilkan dengan Lolly dan tidak berubah sejak itu. Paparan Verify web juga menandakan kandungan janaan AI, mengesan Lolly Imprint, mengesahkan tandatangan **SEAL** (tandatangan peringkat bait - tanpa sebarang permintaan rangkaian: enjin menerima penyelesai kunci DNS yang *disuntik* dan tiada shell yang menyuntiknya pada hari ini, jadi rekod yang membawa kunci `pk=` sendiri secara terbenam akan disahkan sepenuhnya secara luar talian manakala rekod berasaskan DNS akan melaporkan "no key resolver and no inline key" dan bukannya menghubungi rangkaian - lihat `SealPublicKeyResolver` dalam `engine/src/seal.ts`), secara pilihan mengimbas mendalam untuk tera air piksel pihak ketiga (muat turun model di peranti sekali sahaja), dan mendedahkan data tersembunyi - semuanya tanpa memuat naik fail itu. Lihat [Identiti Content Credentials](/info/content-credentials-identity.html).

> **Nota kebolehoperasian.** Lolly mengesahkan bukti kelayakannya sendiri dan banyak bukti kelayakan pihak ketiga secara luar talian pada hari ini, termasuk membaca manifes tuntutan C2PA **v2** daripada pengeluar lain. Dua bekas (container) masih dalam pembangunan, kedua-duanya kerana C2PA masih belum mempunyai pemetaan piawai untuknya, jadi Lolly membawa bukti kelayakan itu di tempatnya sendiri dan pengesah Lolly itulah yang membacanya semula: **WebM** (manifes itu dibawa sebagai lampiran Matroska) dan **Ogg/Opus** (medan `C2PA=` dalam pengepala komen OpusTags, dengan julat bait itu dikecualikan daripada pengikatan supaya audio itu masih mencincang secara sama). Semua yang lain mengikut spesifikasi sepenuhnya - alat pihak ketiga mengesahkan MP4, M4A, MP3, WAV, PNG, JPEG dan PDF Lolly tanpa sebarang persediaan tambahan. Lihat `engine/src/c2pa-containers.ts` untuk kedua-dua pemetaan; ia akan menumpu kepada piawai itu sebaik sahaja ia stabil.

## Penyulitan & kata laluan

Bagi fail yang perlu dihantar terkunci, semuanya berlaku di peranti:

![Kad kunci dalam panel eksport: kata laluan, dan pilihan jelas antara dua peringkat](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools%26format%3Dpdf%26password%3Ddemo%26options&width=1440&height=900&dpi=192&waitMs=2200&cropSelector=.export-pdfpass&walker=1&format=svg&dark=1&filename=aud-pdf-lock)

- **Kata laluan buka PDF** - *Standard* ialah pencegah RC4 40-bit (boleh dibuka di mana-mana, boleh dihantar dalam pautan); *Strong* ialah **AES-256** (PDF 2.0), ditaip semasa eksport dan tidak pernah diletakkan dalam pautan.
- **Muat turun terkunci** - satu ZIP, folder Projects atau larian kelompok boleh dikunci sepenuhnya: *Standard* ZipCrypto (lemah, sejagat) atau *Strong* **AES-256** (WinZip AE-2). Pertahanan berlapis: mana-mana PDF di dalam zip Strong *juga* dikunci AES-256 secara berasingan, jadi ia kekal terkunci selepas dibuka bungkusannya.
- **Pautan kongsi berkunci kata laluan** - keseluruhan keadaan pautan disulitkan AES-256 di bawah kunci terbitan PBKDF2; hanya teks sifer yang dihantar, kata laluan tidak pernah berada dalam pautan dan penyahsulitan berlaku dalam pelayar penerima.

## Sedia untuk air-gap

Air-gap ialah **penggunaan kelas pertama**, bukan mod istimewa - Lolly berfungsi tanpa rangkaian semasa waktu render secara lalai, terus dari kotak. Shell web ialah PWA luar-talian-dahulu (service worker); fon dan WASM disimpan di peranti; keadaan alat dikekalkan secara tempatan melalui host bridge, tidak pernah `localStorage`. Cara yang disokong untuk sesuatu alat mencapai rangkaian ialah keupayaan `host.net` yang **disenarai-benar**, yang diisytiharkannya dalam manifesnya - shell yang tidak boleh (atau tidak mahu) memenuhinya akan menggantikannya dengan stub. Itu adalah kontrak kebolehalihan dan bukan sempadan yang dikuatkuasakan (lihat nota hooks di bawah), itulah sebabnya menyemak kod alat itu kekal sebagai kawalan sebenar - walaupun pada peranti air-gap tiada apa untuk dicapai sama ada pun. Hantar shell ke peranti melalui MDM anda, atau layan satu instans di dalam rangkaian anda, dan pemasangan air-gap sepenuhnya akan merender, mengeksport, menyulitkan dan mengesahkan bukti kelayakan tanpa apa-apa untuk dihubungi ke rumah.

## Perkara yang perlu diketahui

Beberapa perkara yang berbaloi difahami dengan jelas sebelum anda melancarkannya:

- **Pengukuhan sedang dijalankan.** Kriptografi dan penghurai (parser) sedang melalui pengukuhan berskala perusahaan SUSE (lihat di atas) - kukuh mengikut reka bentuk pada hari ini; gunakan sebagai pertahanan berlapis di mana kontrak menuntut jaminan bersijil.
- **Hook alat *bukan* sandbox keselamatan.** `hooks.js` pilihan sesuatu alat berjalan dengan host bridge disuntik, tetapi dalam shell pelayar ia dilaksanakan dalam realm halaman itu dan *boleh* mencapai `window`/`document`/`fetch`. Layan kod alat sebagaimana anda melayan sebarang kod yang anda jalankan - semaknya. Inilah sebabnya organisasi yang menjalankan katalog kongsi boleh mengawalnya melalui semakan Git; walau apa pun, jalankan hanya alat yang telah anda semak sehingga pengasingan Worker dilancarkan.
- **Content Credentials bersifat ketara-gangguan.** Ia mengesan pengubahsuaian dan bukannya menghalangnya - lihat nota kebolehoperasian di atas.
- **Dua peringkat penyulitan.** Kunci *Standard* ialah pencegah pantas dan sejagat; *Strong* (AES-256) ialah perlindungan penuh - gunakan Strong untuk apa-apa yang sensitif, dengan catatan ia memerlukan pembaca moden.

## Ke mana seterusnya

- **[Keselamatan & Pengesahan](/info/security.html)** - piawaian, primitif, model kepercayaan dan pengujian di sebalik bukti kelayakan dan penyulitan di atas.
- **[Penerimagunaan & Tadbir Urus](/info/adoption-governance.html)** - persona, metrik pengalihan dan tadbir urus-sebagai-data secara lengkap.
- **[Penggunaan (Deployment)](/info/deployment.html)** - deploy/serve/hibrid, MDM dan pengehosan sendiri perkhidmatan.
- **[Konfigurasi](/info/configuration.html)** - profil, pek jenama, sekatan keupayaan dan bendera ciri.
- **[Dasar Privasi](/info/privacy.html)** - kenyataan formal tentang apa yang dikumpul, disimpan dan dihantar, dan apa yang tidak.
- **[Permukaan Pelayan](/info/server-surface.html)** - inventori lengkap apa yang berjalan di sisi pelayan (dua komponen pilihan) berbanding di peranti.
