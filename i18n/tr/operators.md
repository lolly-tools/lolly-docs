# Operatörler için Lolly

### Derinlemesine savunma güvenlik ve istihbarat stratejisi - ki bu aynı zamanda bir yaratıcı üretim platformu

Zaten yaptığın işin etrafını saran sıfır güven kurumsal bağışıklık sistemi - böylece ekiplerinin her gün ihtiyaç duyduğu rutin yaratıcı iş, perimetrenden sızmak yerine *içinde* gerçekleşir.

**Senin için ne var.** Hem güvenli hem de popüler bir şeye evet diyen kişi olma fırsatını elde ediyorsun. Bir sızıntı deliğini kapatıyor, yetenek kazanıyor ve tek bir hamlede bir talep kuyruğunu siliyorsun - seni daha az değil daha çok sevilir kılan nadir güvenlik kazanımı. Gizli dosyalar veya müşteri verileri rastgele bir web aracına karıştığı için hukuktan gelen gece yarısı telefonu yok; masanda daha az SaaS satıcısı, sözleşme ve denetim; ve birinin sorması durumunda gösterebileceğin, tamamen yeniden üretilebilir bir denetim izi. Daha rahat uyuyorsun ve bunu yaparken birkaç günü de aydınlatıyorsun.

Lolly ikinci sınıf bir yaratıcı araç değildir: üretim kalitesinde çıktıyı herkesin eline verir ve markaya uygun yaratım deneyimi eşsizdir. Geniş çapta dağıtmanın *güvenli* olmasının nedeni mimaridir: sen koymadığın hiçbir şey yüklenmez, her sonuç yeniden üretilebilir ve her dışa aktarım, sektör lideri kriptografik kayıtların birden çok katmanını taşıyabilir. Bir belge masana nasıl ulaşmış olursa olsun, tam provenansını, üzerinde oynama yapılıp yapılmadığını ve onu piksel piksel yeniden oluşturup oluşturamayacağını görebilirsin.

> **Bugün nerede durduğu.** Lolly'nin güvenlik özellikleri tasarım gereği güçlüdür ve kriptografi ile dosya ayrıştırma motorları SUSE'nin kurumsal düzeyde altyapı sertleştirmesinden geçiyor. Aşağıdaki mühürler, cihaz üzerinde imzalama ve şifreleme şu anda gerçek ve savunulabilirdir, bağımsız sertifikasyona doğru olgunlaşıyor - bu yüzden bir sözleşme sertifikalı güvence gerektirdiğinde, bu süreç tamamlanırken bunları derinlemesine savunma olarak devreye al.

## Stratejik avantaj

Rutin yaratıcı işin genellikle yapılma şekli bir sorumluluk yüzeyidir: harici tasarım yüklenicilerine e-postayla gönderilen dosyalar, bir düzine SaaS düzenleyicisine yüklenen marka varlıkları, "sadece hızlıca bir görsel yapmak" için bir yabancının web aracına yapıştırılan müşteri verileri. Bunların her biri, kontrolünden çıkan veridir.

Lolly bunu tersine çevirir. Bu sızıntılara *neden olan* iş - alıntı kartı, yerelleştirilmiş banner, etkinlik rozeti, sansürlenmiş ekran görüntüsü - artık çalışanın kendi cihazında, senin markana karşı, aradan sunucu geçmeden yapılıyor. Riskli bir iş akışının üzerine bir kontrol eklemedin; onu, baştan sızıntı yolu olmayan bir iş akışıyla değiştirdin.

- **Yapılandırma sana ait.** Motor ve kabuklar açık kaynaktır (MPL-2.0). Kendi kimlik doğrulamanı, telemetrini veya CA'nı üzerine ekle; barındır veya barındırma; SaaS veritabanına kilitlenmeden, git ile izlenen tam özellik ve maliyet kontrolüne sahip olursun.
- **Yönetişim bir gösterge paneli değil, veri olabilir.** Bu kontrolü istediğinde, araç kataloğunu bir Git deposu olarak yönet - pull-request incelemesi marka onayı haline gelir, iş gücünün dokunabileceği her şablonun tam bir denetim izi ve anında geri alınmasıyla. Bu bir zorunluluk değil, bir seçenektir ve tam olarak tek bir masaya iner: oluşturucular tamamen uygulama içinde çalışır, yaptıklarını bir **oturum** olarak kaydeder ve bunu bir paylaşım bağlantısı, bir yedekleme veya canlı bir işbirliği olarak devreder - bunların hiçbiri git gerektirmez. Bu oturumlardan biri kalıcı bir başlangıç noktası olmayı hak ettiğinde, dağıtımı çalıştıran kişi bağlantıyı açar, değerlerini marka paketindeki o araç üzerinde bir **şablon** olarak kaydeder ve commit eder. O andan itibaren aracın "Şablondan yeni" seçicisinde görünür ve `?template=<id>` olarak derin bağlantı verilebilir. Git, yöneticinin bir kez kullanılan kilitleme adımıdır ve bir oluşturucunun asla dokunması gerekmeyen bir şeydir. Bkz. [Benimseme ve Yönetişim](/info/adoption-governance.html).
- **Koruma bariyerleri yapısaldır.** Marka kısıtlamaları, göz ardı edilebilecek yönergeler olarak yayımlanmak yerine şablonlara sabit kodlanmıştır. Yanlış çıktı caydırılmaz - temsil edilemez hale getirilir.

> **Bütün bayrak yarışını sen yönetiyorsun.** Bir yaratıcı kuralları yazar ve bir geliştirici bunları ölçeklendirir, ama o yaşam döngüsünü kurum genelinde çalıştırılabilir hale getiren operatördür - bir temsilcinin uçakta kendi kendine hizmet almasını sağlayan aynı araç, senin Git incelemesiyle sınırlayabileceğin, MDM'in üzerinden dağıtabileceğin ve kriptografik olarak doğrulayabileceğin araçtır. Rollerin nasıl bileştiğini [Bir kampanyanın yaşam döngüsü](/info/overview.html#the-lifecycle-of-a-campaign)'nde, ve bunu nasıl yönettiğini [Benimseme ve Yönetişim](/info/adoption-governance.html)'de gör.

## İçeriği çoğaltırken talep kuyruğunu sil.

Lolly'nin hedeflerinden biri **tasarım talebi saptırma**dır: bir tasarımcıya asla ulaşmasına gerek kalmayan rutin talepler, çünkü varlığa ihtiyaç duyan kişi onu birkaç dakikada, doğru şekilde kendisi yapmıştır. Saptırılan her talep hem bir üretkenlik kazanımıdır hem de el değiştiren bir dosya eksik demektir.

Lolly, kuruluşunun gerçekte nasıl çalıştığına uyacak şekilde inşa edilmiştir - onu dağıtmanın tek bir doğru yolu yoktur:

- **Sun, sunma.** Lolly'yi mevcut MDM'in (Intune, Jamf, Munki…) üzerinden cihazlara gönder. Yerel olarak bir masaüstü/mobil uygulama veya çevrimdışı bir PWA olarak çalışır - herhangi bir güvenlik duvarının arkasında, herhangi bir hava boşluklu ortamda, bakımı gereken bir sunucu olmadan ve güncelleme temposunu kontrol eden BT ile çalışır.
- **Yalnızca sun.** Ağın içinde (veya bir VPN'in arkasında) tek bir örnek çalıştır; kullanıcılar tarayıcıdan erişir, hiçbir şey yüklenmez. Bir aracı bir kez yayınla, herkes anında sahip olur; erişim kontrolü için IdP'inle eşleştir.
- **Hibrit.** Çevrimdışı saha çalışması için yerel uygulamalar, ödünç alınan makineler için her zaman güncel bir tarayıcı sürümü - ikisi de aynı araç kitaplığına işaret eder.

Tam dağıtım modelleri ve yönetim yürütümü [Dağıtım](/info/deployment.html) ve [Yapılandırma](/info/configuration.html)'da yer alır.

## Sızıntı önleme araçları

Lolly araçlarının bir kategorisi - gizlilik araçları - dosyaları perimetrenin içinde tutmak için *özellikle* var.


- **Gizli veriyi kaldır**
 Belgelerden ve medya dosyalarından konumu ve tüm gizli tanımlayıcı bilgileri kaldır.

- **Text Helper**  
Yapılandırılmış ve yapılandırılmamış metni anonimleştir, kodla, biçimlendir ve düzenle. 

- **Compress PDF**
Aşırı büyük bir PDF'yi cihaz üzerinde küçült, böylece bir dosya e-postayla gönderilemeyecek kadar büyüdüğü anda kimse üçüncü taraf bir "PDF'imi sıkıştır" sitesine yönelmez - verinin sızdığı nokta tam da orasıdır. 

Bunların hepsi cihaz üzerinde dönüşümlerdir: dosyan veya verin girer, temizlenmiş bayt'lar çıkar ve **yüklenecek bir sunucu yoktur**. Bunlar, iyi niyetli bir çalışanın aksi halde başvuracağı tipik "dosyanı temizlemek için bir yabancının sitesine yükle" aracının kasıtlı tam tersidir.

![Strip Hidden Data: dosya tuvale iner ve rozet hiçbir şeyin yüklenmediğini açıkça belirtir](/t/url-shot?url=%2F%23%2Ftool%2Fstrip-data&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=aud-strip-data)

Text Helper, dosyalar yerine metin için aynı anlaşmayı sunar. Bir çalışanın aksi halde bir yabancının sitesinde arayacağı sekmeli çalışma tezgahıdır ve dokunduğu hiçbir şey sayfadan asla ayrılmadığı için hiçbir girdi bildirmez.

![Text Helper'ın çalışma tezgahı - yapıştırdığın hiçbir şeyin cihazından ayrılmadığını belirten bir kartın üzerinde işlem sekmelerinden oluşan bir şerit](/t/url-shot?url=%2F%23%2Ftool%2Ftext-helper&width=1200&height=750&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-content&dark=1&filename=ov2-text-helper)

Compress PDF seti tamamlar: aşırı büyük ek, seçtiğin bir kalite ayarı altında, onu zaten barındıran makinede küçülür.

![Compress PDF - solda bir kalite düzeyi ve bir gri tonlama anahtarı, sağda kendi PDF'in için bir bırakma alanı ve hiçbir yerde yükleme yok](/t/url-shot?url=%2F%23%2Ftool%2Fcompress-pdf&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=ov2-compress-pdf)

## Belirlenimcilik ve yeniden üretilebilirlik

Her araç girdisi bir URL parametresi olarak ifade edilebilir ve aynı girdiler aynı dosyayı üretir. Bunun operatör açısından iki sonucu vardır:

- **Bir URL, çıktının ta kendisidir.** Bağlantıyı commit'le, varlığı talep üzerine yeniden üret - Git'e kaydedilmiş ikili dosya yok, sohbette "en son sürümü" kovalamak yok. Varlık ve araç ID'leri kalıcı sözleşmelerdir, bu yüzden bugün üretilen bir bağlantı daha sonra da çözülmeye devam eder.
- **CLI, GUI ile aynı render yoludur**, bu yüzden derleme hatları ve uygulama asla birbirinden sapmaz. OG görsellerini, sosyal kartları ve veri görsellerini derleme zamanında, yeniden üretilebilir şekilde oluştur.

Prompt to Image, belirlenimciliğin en yalın halidir: metin girdinin tamamıdır, dizgilenmiş görsel çıktının tamamıdır ve aynı metin her zaman aynı şekilde dizilir.

![Prompt to Image - bir istem metni bloğunun kare bir görsele dizgilenmiş hali, sonuçta girdide olmayan hiçbir şey yok](/t/url-shot?url=%2F%23%2Ftool%2Fprompt-to-image%3Ffull&width=1440&height=900&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-prompt-to-image)

## Köken ve Content Credentials

![Verify bırakma alanı, herhangi bir kaynaktan gelen herhangi bir dosyayı kabul eder ve onu ağ çağrısı yapmadan okur](/t/url-shot?url=%2F%23%2Fverify&width=1440&height=900&dpi=192&waitMs=1800&waitSelector=.valid-drop&cropSelector=.valid-drop&format=svg&walker=1&dark=1&filename=aud-verify-drop)

Dışa aktarımlar **Content Credentials** taşıyabilir - dosyanın baytlarının bir özetine bağlanmış, imzalı bir [C2PA](https://c2pa.org) manifestosu. Dosyada sonradan yapılan herhangi bir değişiklik mührü bozar, bu yüzden C2PA'dan haberdar bir doğrulayıcı **değişikliği kriptografik olarak, çevrimdışı tespit eder**. Kimlik bilgisi kurcalamaya karşı *duyarlıdır*: kurcalamayı önlemek yerine bunu işaret eder - tamamen çevrimdışı doğrulamayı mümkün kılan da tam olarak budur.

- **Varsayılan olarak açık, cihaz üzerinde.** İmzalama anahtarı cihazda üretilir, çıkarılamaz (Lolly bile okuyamaz) ve imzalama yerel olarak gerçekleşir - ağa dokunan tek şey isteğe bağlı kimlik *kaydı*dır.
- **Güven katmanları.** Kaydı yapılmamış bir dışa aktarım biçimsel olarak doğrudur ama anonim olarak imzalanmıştır (`untrusted`). Bir **doğrulanmış kimlik** kaydet (Lolly CA'dan kısa ömürlü, bir e-postaya bağlı sertifika) ve Lolly kökünü sabitleyen doğrulayıcılar `trusted` + imzalayanın e-postasını bildirir. Güvenilir bir zaman damgası otoritesi ve üçüncü taraf doğrulayıcı yeşili (C2PA uyumluluğu) yol haritasında. Her katman açıktır ve bir dosya yalnızca kanıtlayabildiği güveni iddia eder.
- **Kimlik bilgisi ömrü**, imzalama sırasında operatörün/kullanıcının kararıdır: 7 / 30 / 90 / 365 gün, varsayılan 30.
- **Lolly Imprint.** **Varsayılan olarak açık** olan, tamamlayıcı ikinci bir sinyal: raster dışa aktarımlara (ve bir PDF/PPTX içindeki Lolly tarafından render edilmiş rasterlere, kullanıcının kendi gömülü görseline asla) işlenmiş görünmez bir piksel filigranı. Kimlik bilgisi herhangi bir kapsayıcı değişikliğinde yok olurken, Imprint yeniden kaydetmeye veya ekran görüntüsüne dayanıklıdır - kalıcı bir "bu pikseller Lolly'den geçti" ipucu, yalnızca varlık bildirir, kişisel veri içermez. Bu, sertleştirilmiş bir savunma değil, gizlilik yoluyla güvenliktir ve kimlik bilgisinin yerini almak yerine onu tamamlar. `imprint=0` devre dışı bırakır.
- **Dayanıklı Content Credentials (isteğe bağlı).** Bir raster dışa aktarım, ek olarak bir soft-binding tanımlayıcısı kodlayan görünmez, *dayanıklı* bir işaret taşıyabilir; böylece bir sosyal medya yüklemesi veya yeniden kaydetme dosyanın meta verisini sildikten sonra bile - normal bir kimlik bilgisinin kaybolacağı durumda - C2PA kimlik bilgisi geri kazanılabilir. Yalnızca rasterlerde çalışır ve bir sinirsel kodlama geçişine mal olur, bu yüzden varsayılan olarak kapalıdır (açmak için `durable=1`). Lolly bugün kendi dayanıklı işaretini `/verify` üzerinde çevrimdışı olarak tanır; üçüncü taraf araçlar (ör. Adobe) tarafından geri kazanım, sektörün soft-binding çözümü yerine oturduğunda gelecektir.
- **Doğrulama cihaz üzerindedir.** Bir dosyanın gerçekten Lolly ile yapılıp yapılmadığını ve o zamandan beri değişmediğini çevrimdışı bir raporla öğrenmek için herhangi bir dosyayı `/verify` üzerine bırak (veya `lolly validate <file>`). Web Verify görünümü ayrıca yapay zeka tarafından üretilen içeriği işaretler, Lolly Imprint'i tespit eder, **SEAL** imzalarını doğrular (bayt düzeyinde bir imza - sıfır ağ isteğiyle: motor *enjekte edilmiş* bir DNS anahtar çözücü alır ve bugün hiçbir shell bunu enjekte etmez, bu yüzden kendi satır içi `pk=` anahtarını taşıyan bir kayıt tamamen çevrimdışı doğrulanırken, DNS anahtarlı bir kayıt dışarı çıkmak yerine "anahtar çözücü yok ve satır içi anahtar yok" bildirir - bkz. `engine/src/seal.ts` içindeki `SealPublicKeyResolver`), isteğe bağlı olarak üçüncü taraf piksel filigranları için derin tarama yapar (tek seferlik, cihaz üzerinde model indirmesi) ve gizli verileri ortaya çıkarır - hepsi dosyayı yüklemeden. Bkz. [Content Credentials Identity](/info/content-credentials-identity.html).

> **Birlikte çalışabilirlik notları.** Lolly bugün kendi kimlik bilgilerini ve birçok üçüncü taraf kimlik bilgisini çevrimdışı doğrular, diğer üreticilerin C2PA claim **v2** manifestolarını okumak dahil. İki kapsayıcı hâlâ çalışma aşamasındadır, ikisi de C2PA'nın bunlar için henüz standart bir eşleme sunmamasından ötürü; bu yüzden Lolly kimlik bilgisini kendi belirlediği bir yerde taşır ve onu geri okuyan da Lolly'nin doğrulayıcısıdır: **WebM** (manifesto bir Matroska eki olarak taşınır) ve **Ogg/Opus** (OpusTags yorum başlığında bir `C2PA=` alanı, ses hâlâ aynı şekilde özetlensin diye o bayt aralığı bağlamadan hariç tutulur). Geri kalan her şey standarda uygun damgalanır - üçüncü taraf araçlar Lolly'nin MP4, M4A, MP3, WAV, PNG, JPEG ve PDF dosyalarını kutudan çıktığı gibi doğrular. Her iki eşleme için `engine/src/c2pa-containers.ts` dosyasına bak; standart yerine oturduğunda bunlar da onunla birleşecek.

## Şifreleme ve parola koruması

Kilitli olarak yol alması gereken dosyalar için her şey cihaz üzerinde gerçekleşir:

![Dışa aktarım panelindeki kilit kartı: bir parola ve iki katman arasında açık bir seçim](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools%26format%3Dpdf%26password%3Ddemo%26options&width=1440&height=900&dpi=192&waitMs=2200&cropSelector=.export-pdfpass&walker=1&format=svg&dark=1&filename=aud-pdf-lock)

- **PDF açma parolası** - *Standard*, 40 bit'lik bir RC4 caydırıcısıdır (her yerde açılır, bir bağlantıda yol alabilir); *Strong*, dışa aktarımda yazılan ve asla bir bağlantıya konmayan **AES-256**'dır (PDF 2.0).
- **Kilitli indirmeler** - bir ZIP, bir Projects klasörü veya toplu bir çalıştırma bütünüyle kilitlenebilir: *Standard* ZipCrypto (zayıf, evrensel) veya *Strong* **AES-256** (WinZip AE-2). Katmanlı savunma: Strong bir zip içindeki herhangi bir PDF *ayrıca* tek tek AES-256 ile de kilitlenir, böylece açıldıktan sonra da kilitli kalır.
- **Parola korumalı paylaşım bağlantıları** - bağlantının tüm durumu, PBKDF2'den türetilmiş bir anahtar altında AES-256 ile şifrelenir; yalnızca şifreli metin yol alır, parola asla bağlantıda yer almaz ve şifre çözme alıcının tarayıcısında gerçekleşir.

## Air-gap'e hazır

Air-gap özel bir mod değil, **birinci sınıf bir dağıtım**dır - Lolly kutudan çıktığı haliyle render sırasında ağ olmadan çalışır. Web shell'i çevrimdışı öncelikli bir PWA'dır (service worker); fontlar ve WASM cihaz üzerinde saklanır; araç durumu host köprüsü üzerinden yerel olarak kalıcı hale getirilir, asla `localStorage` ile değil. Bir aracın ağa ulaşmasının desteklenen yolu, manifestosunda bildirdiği **izin listesine alınmış** bir `host.net` yeteneğidir - bunu karşılayamayan (veya karşılamak istemeyen) bir shell onu boş bırakır. Bu, zorunlu kılınan bir sınır değil, bir taşınabilirlik sözleşmesidir (aşağıdaki hook'lar notuna bak), bu yüzden kontrol aracı olarak araç kodunu incelemek kalır - gerçi air-gap'li bir cihazda zaten her iki yönde de ulaşılacak bir şey yoktur. Shell'leri MDM'in üzerinden cihazlara gönder, ya da ağının içinde tek bir örnek sun; tamamen air-gap'li bir kurulum, eve telefon edecek hiçbir şeyi olmadan render eder, dışa aktarır, şifreler ve kimlik bilgilerini doğrular.

## Bilmekte fayda var

Devreye almadan önce netleştirmeye değer birkaç şey:

- **Sertleştirme sürüyor.** Kriptografi ve ayrıştırıcılar SUSE'nin kurumsal ölçekli sertleştirmesinden geçiyor (yukarıya bak) - bugün tasarım gereği güçlü; sertifikalı güvence isteyen bir sözleşme olduğunda katmanlı savunma olarak devreye al.
- **Araç hook'ları bir güvenlik sandbox'ı *değildir*.** Bir aracın isteğe bağlı `hooks.js`'i host köprüsü enjekte edilmiş halde çalışır, ama bir tarayıcı shell'inde sayfanın alanında yürütülür ve `window`/`document`/`fetch`'e *ulaşabilir*. Araç kodunu, çalıştırdığın herhangi bir kod gibi ele al - incele. Paylaşılan bir katalog çalıştıran bir kuruluşun bunu Git incelemesiyle kapı altına alabilmesinin nedeni de budur; her iki durumda da Worker izolasyonu gelene kadar yalnızca incelediğin araçları çalıştır.
- **Content Credentials kurcalamaya karşı duyarlıdır.** Değişikliği önlemek yerine tespit eder - yukarıdaki birlikte çalışabilirlik notlarına bak.
- **İki şifreleme katmanı.** *Standard* kilitler hızlı, evrensel caydırıcılardır; *Strong* (AES-256) tam korumadır - hassas herhangi bir şey için Strong'a yönel, bunun modern bir okuyucu istediğini unutma.

## Bundan sonra nereye

- **[Security & Verification](/info/security.html)** - yukarıdaki kimlik bilgileri ve şifrelemenin arkasındaki standartlar, ilkeller, güven modeli ve testler.
- **[Adoption & Governance](/info/adoption-governance.html)** - personalar, yönlendirme metriği ve veri olarak yönetişimin tamamı.
- **[Deployment](/info/deployment.html)** - dağıt/sun/hibrit, MDM ve hizmetleri kendi kendine barındırma.
- **[Configuration](/info/configuration.html)** - profiller, marka paketleri, yetenek kapılama ve özellik bayrakları.
- **[Privacy Policy](/info/privacy.html)** - nelerin toplanıp toplanmadığının, saklanıp saklanmadığının ve gönderilip gönderilmediğinin resmi beyanı.
- **[Server Surface](/info/server-surface.html)** - sunucu tarafında çalışanların (iki isteğe bağlı bileşen) cihaz üzerinde çalışanlara karşı tam envanteri.
