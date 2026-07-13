# Profiller - üretirken kim olduğun

Bir **profil**, Lolly'nin *olarak* üretim yaptığı çalışma kimliğidir. Bir aracın çekebileceği ve her seferinde yeniden yazmak zorunda kalmayacağın küçük ayrıntı kümesidir - adın, iletişim bilgilerin, isteğe bağlı bir vesikalık fotoğraf, birkaç tercih - artı çalışırken biriktirdiğin her şey: kayıtlı oturumlar, yüklenen görseller ve yerel etkinlik dökümü.

Bir profildeki her şey, tarayıcının yerel veritabanında **cihazda** yaşar (web PWA'da IndexedDB, Tauri uygulamalarında dosya sistemi). Hesap yoktur ve hiçbir şey yüklenmez. Onu **Profil** altından (galerinin sağ üstünde) yönetirsin; araçlar onu yalnızca *okur* ve yalnızca önceden doldurmak üzere yapıldıkları belirli alanları.

> Bir profil *senin* (ya da burada üretim yapan kişi) hakkındadır. **Platform**'dan - markanın renkleri, yazı tipleri ve genel ayarları - ve uygulamanın neler yapabileceğinin kataloğu olan **Yetenekler**'den ayrıdır. Sonundaki [Profil, Platform ve Yetenekler](#profil-platform-ve-yetenekler) bölümüne bak.

## Bir profilde neler var

| Bölüm | Nedir |
|---|---|
| **Ad** | Ad ve soyad. |
| **İletişim** | E-posta ve telefon. |
| **Konum** | Şehir ve ülke. |
| **Vesikalık fotoğraf** | İsteğe bağlı bir fotoğraf, kareye kırpılır ve yerel bir görsel olarak tutulur. E-posta imzaları, alıntı kartları, renk blokları ve dinamik düzenler gibi araçlar tarafından kullanılır. |
| **Bilgilerimi kullan** | Tek bir isteğe bağlı anahtar. Kişisel bilgilerinin dışa aktarılan dosyalara gömülen yazar/künye satırı olan **köken** olarak ve **/pro** toplu çalıştırmalarında yazar olarak eşlik edip etmeyeceğini denetler. (Önceden doldurmayı kapatmaz: bkz. [Araçlar profilini nasıl kullanır](#araclar-profilini-nasil-kullanir).) |
| **Tercihler** | Temandır (açık, koyu veya SUSE) ve uygulamanın **Özellik bayrakları** ile hangi bölümlerini etkinleştirdiğin. |
| **Çalışmaların** | Kayıtlı oturumlar (küçük resimlerle) - **[Projeler](/info/using.html)** içinde iç içe klasörlere düzenlenmiş - **Görsellerim** kitaplığın ve yerel etkinlik istatistikleri, hepsi bu profile bağlı. |

Bunların hiçbiri zorunlu değildir. Boş bir profil gayet iyi bir profildir; yalnızca yazma zahmetinden kurtaracak kadarını doldurursun.

## Bir profil, yalnızca bir kişi değil, bir bağlamdır

"Profil" kelimesi tek, sabit bir kişiyi çağrıştırır ama Lolly'de aslında bir **üretim bağlamıdır** - *bu şeyi yaparken kim olduğun*. O bağlam üç farklı biçimde olabilir ve Lolly hepsini aynı şekilde ele alır.

### Bir birey olarak

Varsayılan. Profil sensin: adın, e-postan, vesikalık fotoğrafın. Bir kez ayarla; imzan, rozetin, konferans kilitlemen hepsi kendini doldursun. Çoğu insanın ihtiyaç duyacağı tek şey budur.

### Bir ekip olarak

Bir profil tek bir insan olmak zorunda değildir. Bir kuruluş içindeki bir **ekip veya işlevin** yerini tutabilir: ekibin ortak adı, bir grup gelen kutusu adresi (`events@…`), bir departman, ekibin vesikalık fotoğrafı veya birim işareti. Bir kişi onu kurar, dışa aktarır (aşağıya bak) ve ekibin geri kalanı aynı profili yükler - böylece ekibin ürettiği her şey, kimse yeniden girmeden tutarlı ayrıntılar taşır. Ortak bir kiosk ya da ödünç alınmış bir demo dizüstü, arkasındaki herkesin *olarak* üretim yaptığı tek bir ekip profili çalıştırabilir.

### Bir işlev olarak - bazen giydiğin bir rol

Katı "tek kişi, tek profil" modelinin kaçırdığı durum budur. **Yılda üç gün etkinlik yöneticisi** ve zamanın geri kalanında tamamen başka bir şey olabilirsin. O üç gün etkinlik ayrıntılarını, etkinlik gelen kutusunu, belki rozetlerini ve tabelalarını dolduracak bir etkinlik alt markası istersin; diğer 362 gün normal kimliğini geri istersin.

Lolly'de o rol yalnızca **el altında tuttuğun bir başka profildir** - etkinlik için yükleyip sonrasında bir kenara koyduğun kayıtlı bir paket (sonraki bölüm). Rol bir şapkadır, yeni bir hesap değil. İhtiyacın olduğunda giy, işin bittiğinde çıkar.

## Tek kurulum, tek etkin profil - el altında tutabileceğin birçok profil

Herhangi bir anda bir kurulumun **tek bir etkin profili** vardır - bir aracın şu anda gördüğü ayrıntılar. Uygulama içi bir profil değiştirici yoktur; bunun yerine her profil **taşınabilir bir pakettir** (tek bir `.zip`, bkz. [aşağıda](#bir-profili-yeni-bir-cihaza-tasima)). Bu, yeni bir cihaza geçmekle kasıtlı olarak aynı mekanizmadır - bir profil, kaydedebileceğin, kopyalayabileceğin ve yükleyebileceğin bir dosyadır.

Yani gerçekten birkaç bağlamı bir arada yürütüyorsan (sen, ekibin, etkinlik yöneticisi şapkası) birkaç paket tutar ve ihtiyaç duyduğunu yüklersin:

- **En temiz geçiş:** **Profil → Depolama → Tüm verilerimi temizle**, ardından geçtiğin bağlamın paketini **İçe aktar**. Artık tamamen o profil olarak üretim yapıyorsun.
- **Katmanlama:** önce temizlemeden içe aktarmak **birleştirir** - içe aktarılan profil, oturumlar ve görseller zaten var olanın üzerine iner, aynı ada sahip olanı değiştirir ve gerisini olduğu gibi bırakır. Bir ekibin kayıtlı oturumlarını kendi kurulumuna çekmek için kullanışlı; temiz bir rol sınırına ihtiyacın varsa istediğin şey bu değil.
- **Yan yana:** her şey cihaza özel olduğundan, ayrı bir tarayıcı profili, ayrı bir kullanıcı hesabı ya da ikinci bir kurulu PWA, her biri kendi bağımsız Lolly profilini taşır. Kişisel kurulumunu ve etkinlik kiosk kurulumunu aynı anda çalıştır, geçiş yapmadan.

> Bağlam başına bir paket tut ve dosyaları ne olduklarına göre yeniden adlandır (`LollyTools-events-2026.zip`, `LollyTools-me.zip`). Dosya, profilin *ta kendisidir*.

## Bir profili yeni bir cihaza taşıma

Bir profil tamamen yerel olduğundan, onu boş bir kuruluma - yeni bir dizüstü, yeni sıfırlanmış bir tarayıcı, bir meslektaşın makinesi, çevrimdışı bir kutu - almanın tek yolu **dosyayı taşımaktır**. Hiçbir oturum açma onu senin için geri yüklemez ve mesele de budur: başından beri hiçbir şey cihazından çıkmadı.

**Profil → Depolama → Başka bir cihaza taşı** altında:

- **Verilerimi dışa aktar**, tek bir `LollyTools-<Ad>-<Soyad>-<YYYY-AA-GG>-<n>.zip` indirir - ait olduğu profile göre adlandırılmış, tekrar dışa aktarımların çakışmaması için günlük bir sıra numarasıyla (profilde olmayan ad parçaları atlanır). İçinde profilin, her kayıtlı oturum (küçük resmiyle), yüklediğin görseller ve tercihlerin (tema, düzen, yerel etkinlik istatistikleri) bulunur.
- Diğer kurulumdaki **Verileri içe aktar…**, o dosyayı geri okur ve tam olarak kaldığın yerden devam edersin.

Paket düz, kendi kendine yeten bir zip'tir; bu yüzden **her** yolla seyahat eder - USB, AirDrop, bir ağ paylaşımı, kendine e-posta - ve hedef tamamen çevrimdışı olabilir. Her parça sağlama toplamına tabidir; böylece aktarım sırasında hasar gören bir dosya, yarı bozuk geri yüklenmek yerine içe aktarmada yakalanır. İçe aktarma **birleştirir** (aynı adlı profil/oturum/görsel üzerine yazılır; gerisi korunur); bu yüzden zaten kullanımda olan bir hedefi asla silmez.

Taşınmayan şeyler: katalog önbelleği (yeni cihazda kendini yeniden indirir) ve araçların kendisi (zaten mevcut varsayılır). 

Tam paket düzeni, sürüm politikası ve bütünlük kuralları için bkz. **[Veri Aktarımı](/info/data-transfer.html)**; uçtan uca rehber için **[Lolly'yi Kullanma → Başka bir cihaza taşıma](/info/using.html#moving-to-another-device)**.

## Araçlar profilini nasıl kullanır

Bir araç yalnızca bağlamak üzere açıkça yapıldığı profil alanlarını *önceden doldurur*:

**Açık bağlama.** Bir araç yazarı, bir girdiyi profilden çektiği şeklinde işaretler (`bindToProfile: "firstname"`, `"email"`, `"headshot"`, …). Araç açıldığında o girdi profilinden önceden dolar - ve profili değiştirmeden o tek oturum için yine de geçersiz kılabilirsin. Önceden doldurma yerel bir kolaylıktır ve **Bilgilerimi kullan** açık olsun ya da olmasın gerçekleşir.

**İsteğe bağlı seçim (köken).** Bir varlığı dışa aktardığında, ayrıntıların isteğe bağlı olarak **köken** olarak eşlik eder - dosyanın meta verilerine gömülü bir yazar/künye satırı (PNG, PDF, SVG, …) - böylece bitmiş bir varlık, onu kimin yaptığını söyleyebilir. **Bilgilerimi kullan**'ın yönettiği şey *budur*: kapalı bırak, dışa aktarım yine de "Lolly ile yapıldı" araç/platform atıfını taşır ama hiçbir kişisel yazar/iletişim satırı gömülmez. (Aynı isteğe bağlı seçim, **/pro** toplu çalıştırmalarında yazarı ayarlar.) (Araç yazarları: bkz. [Araç Yazma → `bindToProfile`](/info/authoring-tools.html#bindtoprofile) ve [Host API → `host.profile`](/info/host-api.html#host-profile).)

## Profil, Platform ve Yetenekler

Arayüzde birbirine yakın duran ve karıştırılması kolay üç şey:

- **Profil** - *sen* (ya da ekibin ya da içinde bulunduğun rol): ad, iletişim, vesikalık fotoğraf, kayıtlı çalışmaların. Kişisel, cihaza yerel, bir paket olarak taşınabilir.
- **Platform** - *marka*: her aracın karşısında oluşturulduğu renkler, yazı tipleri ve genel ayarlar. Ortak ve tutarlı, kişisel değil.
- **Yetenekler** - *uygulamanın neler yapabileceği*: tam özellik seti ve sana açık olan araçlar.

Bir profil, bir varlığın *kimden* geldiğini değiştirir; platform onun neye *benzediğini* değiştirir; yetenekler *neler yapabileceğindir*.

### "Profil" başka yerlerde iki şey daha anlamına gelir - bu değil

Kelime, proje genelinde birden çok anlam taşır. Bunların hiçbiri, bu sayfanın konusu olan kişisel profil değildir:

- **İçerik profili** - `profiles.json` içinde, bir araç paketi kümesini bir marka kataloğuna bağlayan derleme zamanı bir yapılandırma (örneğin `suse`, `lolly-start`). Bir operatörün dağıtırken seçtiği şeydir ve `profile` **URL/CLI parametresinin** dışa aktarımda bir *renk* varyantını da seçtiği şeydir (ICC/CMYK baskı koşulu - bkz. [URL Modu](/info/url-mode.html)). Her ikisi de *senin* hakkında değil, *derleme/çıktı* hakkındadır. Bkz. [Yapılandırma](/info/configuration.html).
- **Kimlik profili** - kaydedebileceğin isteğe bağlı **doğrulanmış Content Credentials kimliği** (e-postanı imzalı dışa aktarımlarına bağlayan kısa ömürlü bir sertifika). Bu, kişisel profilin ad/iletişim alanlarından ayrı bir imzalama kimliğidir, ancak **Bilgilerimi kullan**, ikisinden herhangi birinin gömülüp gömülmeyeceğini yönetir. Bkz. [Content Credentials Kimliği](/info/content-credentials-identity.html).

## Gizlilik

Bir profil asla iletilmez, yüklenmez ya da seni tanımlamak veya izlemek için kullanılmaz - onaylanacak bir şey yoktur, yalnızca neyin tutulduğunu bilmen için bu bildirim vardır. İstediğin an **Profil → Tüm verilerimi temizle** ile hepsini sil. Bkz. [Gizlilik Politikası](/info/privacy.html).
