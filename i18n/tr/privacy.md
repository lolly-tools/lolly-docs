# Gizlilik Politikası

*Son güncelleme: 19 Temmuz 2026*

> **Açık bir dille.** Lolly'de oluşturduğun belgeler, görseller, videolar ve
> dosyalar cihazında kalır. Olağan kullanım için hesap yok, uygulamanın
> kendisinden gelen çerez yok ve kod tabanının hiçbir yerinde analitik veya
> izleyici yok - "veriyi kullanmıyoruz" değil, kaynak kodda gerçekten mevcut
> değil. Yazılımın herhangi bir şekilde bir ağla konuştuğu durumların kısa ve
> eksiksiz bir listesi vardır ve bunların her biri aşağıda ayrıntılarıyla
> açıklanmıştır: neyin çıktığı, kime gittiği ve ne zaman. Kişisel herhangi bir
> şey içeren tek istisna, açıkça kendin başlatman gereken bir oturum açmadır.
> Bu belgede yoksa, gerçekleşmiyor demektir.

## Bu politikanın kapsadıkları

Lolly açık kaynaklı bir yazılımdır - bir motor, birkaç uygulama kabuğu (web,
masaüstü, mobil, CLI) ve bir tarayıcı eklentisi - herkesin çalıştırabileceği.
Bu politikanın iki bölümü vardır:

- **Yazılımın kendisi**: nerede çalışırsa çalışsın, verinle ne yapıp ne
  yapmadığı. Bu, kodun bir özelliğidir, bu yüzden bizim ya da başkasının olsun
  her Lolly dağıtımı için geçerlidir.
- **lolly.tools**, SUSE'nin işlettiği referans dağıtımı: isteğe bağlı sunucu
  tarafı parçalarını çalıştırırken yapılan belirli seçimler (neyin, ne kadar
  süreyle, kim tarafından günlüğe kaydedildiği).

Kendi kendine barındırılan veya kurumsal bir Lolly örneği kullanıyorsan,
aşağıdaki yazılım davranışı yine geçerlidir, ancak sunucu tarafındaki her
şeyden o örneğin *operatörü* sorumludur - SUSE değil: oluşturma uç noktaları,
MCP sunucuları, çalıştırıyorlarsa Content Credentials sertifika yetkilileri.
Kendi politikaları için onlara sor; Lolly'yi işletmenin neleri içerdiği için
[Benimseme ve Yönetişim](/info/adoption-governance.html) sayfasına bak.

## Uygulama: cihazında ne kalır

Lolly'nin web, masaüstü ve mobil kabukları tüm oluşturma motorunu istemci
tarafında çalıştırır. Bir aracı açmak, girdileri doldurmak, önizleme yapmak ve
dışa aktarmanın tümü cihazında gerçekleşir - hiçbir sunucu devreye girmez ve
uygulama bir kez yüklendikten sonra çevrimdışı çalışır.

**Uygulama hiçbir çerez ayarlamaz.** Çalışmak için, az miktarda veriyi
**yalnızca cihazında** tutar, asla iletmez:

- **Arayüz tercihleri** - tema, dil, ses ayarları, kenar çubuğu/yakınlaştırma
  boyutlandırması, sıralama ve görünüm tercihleri, hangi tanıtım ipuçlarını
  gördüğün - `localStorage` içinde, böylece uygulama açılışını tamamlamadan
  önce kullanılabilir olurlar.
- **Araç katalogunun ve varlık önizlemelerinin çevrimdışı önbelleği**, böylece
  galeri bağlantı olmadan çalışır.
- Profil kartındaki istatistikler için **yerel kullanım sayaçları** (kaç dışa
  aktarma, hangi araçlar) - `localStorage` içinde küçük ve sınırlı bir blob,
  bizim tarafımızdan asla okunmaz, hiçbir yere gönderilmez.
- **Kendi belgelerin, kaydedilmiş oturumların, yüklediğin varlıklar ve yazı
  tipleri** - cihazında IndexedDB içinde saklanır, asla yüklenmez, senden başka
  hiç kimse tarafından okunmaz.

Bunların hiçbiri paylaşılmaz, satılmaz veya seni tanımlamak ya da takip etmek
için kullanılmaz. Onay verilecek bir şey yok, çünkü hiçbir toplama
gerçekleşmiyor - yalnızca neyin, nerede tutulduğunu bilmen için bu bildirim
var. **Profil → Tüm verilerimi temizle** ile veya tarayıcında sitenin depolama
alanını temizleyerek bunların tümünü istediğin zaman silebilirsin. (ePrivacy
Direktifi Madde 5(3) uyarınca, istediğin hizmet için kesinlikle gerekli olan
depolama onay gerektirmez - yalnızca şeffaflık gerektirir ki bu belge ve
uygulama içi bildirim de tam olarak budur.)

Bu verinin kendi yedeği - **Her şeyi dışa aktar ve oluştur** tarafından
üretilen `lolly-backup` paketi - senin sakladığın ve kontrol ettiğin bir
dosyadır. Kendin bir yere göndermeyi seçmediğin sürece sunucularımıza asla
dokunmaz. Bkz. [Veri Aktarımı](/info/data-transfer.html).

## Cihaz üzerindeki yardımcı araçlar

Bazı araçlar - **Strip Hidden Data**, **Compress PDF** ve **"Cihazında
çalışır"** rozetini taşıyan diğerleri - sağladığın bir dosya üzerinde çalışır.
Dosya tarayıcında belleğe okunur, yerel olarak dönüştürülür ve indirme olarak
geri sunulur. Asla yüklenmez, çünkü yükleneceği yolda bir sunucu yoktur. Bu
yardımcı araçlar çevrimdışı çalışır ve çıktıları bizim hiçbir filigranımızı
veya meta verimizi taşımaz - çoğunun amacı veriyi kaldırmak ve korumaktır,
risk eklemek değil.

## Uygulama bir ağla konuştuğunda, tam olarak

Aşağıdaki tablo, uygulamanın bir ağ üzerinden getirdiği veya gönderdiği her
şeyin eksiksiz listesidir. Burada yoksa, uygulama bunu yapmıyor demektir.

| Ne | Cihazından gerçekte ne çıkıyor | Ne zaman |
|---|---|---|
| Araç katalogu senkronizasyonu | Kişisel hiçbir şey - Lolly'nin kendi herkese açık araç ve varlık dizini için bir istek | Başlangıçta, ardından çevrimdışı önbelleğe alınır |
| Bir aracın bildirdiği ağ yeteneği | O aracın manifest dosyasında izin listesine aldığı belirli ana bilgisayara/bilgisayarlara istediği her şey (örneğin harita karoları) | Yalnızca o aracı kullanırken |
| Google Fonts | Seçilen yazı tipi ailesi adı ve IP adresin, Google'ın yazı tipi sunucularına | Yalnızca marka düzenleyicisinde bir Google Font eklersen - aile başına tek seferlik bir getirme, ardından cihazında yaşar |
| SEAL imza kontrolü | Bir genel anahtar için tek bir DNS araması, kontrol edilen dosyanın içinde adı geçen alan adına | Yalnızca Verify kontrol ettiğin bir dosyada bir SEAL kaydı bulursa - dosyanın kendisi asla değil |
| Derin tarama algılayıcı modelleri | Kişisel hiçbir şey - tek seferlik aynı kaynaktan bir model indirmesi (üçüncü taraf değil) | Yalnızca Verify'ın derin taramasını tercih edersen |
| Uzak örnek | Adını verdiğin örneğin geri sunduğu her şey, yukarıda açıklanan aynı katalog senkronizasyonu üzerinden | Yalnızca kabuğu açıkça başka bir Lolly dağıtımına yönlendirirsen |

Bunların hiçbiri belgelerini, projelerini, oturumlarını veya yüklediğin
dosyaları hiçbir yere göndermez. Bunlar cihazına bir şeyler *getirmek* için
vardır (araçlar, yazı tipleri, modeller, bir genel anahtar), cihazından bir
şeyler *göndermek* için asla; aşağıdaki bölümlerde açıkça adı geçen istisnalar
dışında.

## Doğrudan bağlantılı oluşturma URL'leri

Uygulamanın kendisi tamamen cihazında kalır. Ayrı olarak ve yalnızca
kullanırsan, lolly.tools (ve bunu etkin bırakan kendi kendine barındırılan
herhangi bir örnek) **doğrudan bağlantılı oluşturma URL'lerine** yanıt verir -
`https://lolly.tools/tool/<tool-id>.<ext>?<inputs>` - böylece paylaşılan bir
Lolly bağlantısı bir README, bir wiki veya bir panoda canlı bir görsel olarak
görünebilir. Bu URL'lerden birini getirmek, sunucudan URL'ye yazılan girdilerle
**herkese açık araç ve katalog verilerini** oluşturmasını ister ve tüm alışveriş
bundan ibarettir:

- **Hesap yok, çerez yok, durum yok.** Uç nokta anonimdir; istek başına hiçbir
  şey saklanmaz ve cihazında hiçbir şey okunmaz. Belgelerin, oturumların ve
  yüklemelerin tarayıcından asla çıkmaz - bu bağlantılarda hiçbir şekilde
  görünemezler.
- **Girdiler yapıları gereği herkese açıktır** - bunlar bağlantının yazarının
  URL'ye yazdığı her ne ise odur, bağlantının ulaştığı herkes tarafından
  okunabilir. Paylaşılan bir bağlantıya sır koyma, Lolly hassas içerik için bir
  bağlantı şifreleme özelliği sunar.
- Yanıtlar herhangi bir herkese açık görsel gibi **önbelleğe alınır ve hız
  sınırlıdır** ve arama motorlarının oluşturduğun içerikleri dizine eklememesi
  için `noindex` olarak işaretlenir.

Lolly'yi kendin barındırıyorsun ve herkese açık bir oluşturma yüzeyi istemiyor
musun? `LOLLY_DISABLE_RENDER_GET=1` ayarla, bu URL'lerin her biri 404 döndürsün.

## MCP sunucusu (isteğe bağlı, AI aracıları için)

Lolly'ye bir AI aracısı tarafından Model Context Protocol üzerinden de
erişilebilir - operatör tarafından çalıştırılan bir uç nokta (lolly.tools bir
tane çalıştırır; tamamen ağdan yalıtılmış olanlar dahil herkes kendininkini
barındırabilir). Oluşturma yolunun hesapsız duruşunu paylaşır, artı zorunlu
olarak dosya baytlarını işleyen iki araç:

- **`lolly_transform`** (bir cihaz üzeri yardımcı aracı, çağıran aracının adına
  sunucu tarafında çalıştırır) ve **`lolly_verify`** (Content Credentials'ı
  kontrol eder) ikisi de çağırandan bir dosyanın baytlarını kabul eder. Bunlar
  **işlem içinde, bellekte** işlenir ve sonuç aynı çağrıda döndürülür - dosya
  asla diske yazılmaz ve istek tamamlandıktan sonra asla saklanmaz.
- Diğer her araç - `lolly_render`, `lolly_build_url`, `lolly_list_tools`,
  `lolly_describe_tool` - yalnızca parametrelerden çalışır (metin, sayılar,
  renkler, URL'ler, katalog varlık kimlikleri), doğrudan bağlantılı bir
  oluşturma URL'sinin aldığı girdilerin aynısı.
- Erişim, ya operatörün güvendiği istemcilere verdiği paylaşılan bir belirteçtir
  ya da durumsuz OAuth 2.1: paylaşılan bir sırra karşı doğrulanan kısa ömürlü
  imzalı belirteçler, sunucu tarafında hiçbir şey saklanmaz ve belirtecin
  kendisi asla bir günlüğe veya oluşturma URL'sine yazılmaz.

## Content Credentials kimliği (kendin başlatman gereken bir oturum açma)

Lolly, dışa aktarımlarına kriptografik bir **Content Credential** mühürleyebilir,
böylece herkes bir dosyanın Lolly'den ayrıldığından beri değiştirilmediğini
çevrimdışı doğrulayabilir. Bu kadarı **varsayılan olarak açık ve tamamen
yereldir** - imzalama anahtarı cihazında üretilir, **çıkarılamaz** (Lolly'nin
kendi kodu bile okuyamaz) ve imzalamanın kendisi çevrimdışı gerçekleşir. Bu
bölüm, bunun üzerindeki tek *isteğe bağlı* adımı kapsar: doğrulanmış bir kimlik
kaydetmek, böylece dışa aktarımların anonim bir anahtar yerine "Verified -
signed by \<your email\>" der. **Kaydı atlarsan, bu bölümdeki hiçbir şey seni
ilgilendirmez ve hiçbir kişisel veri cihazından asla çıkmaz.**

Kaydolursan, tam olarak şunlar gerçekleşir:

1. **Bir oturum açma yöntemi seçersin** - GitHub, Google, SUSE (Okta) veya
   e-postayla gönderilen bir bağlantı. Üç OIDC sağlayıcısı için, o sağlayıcının
   kendi giriş sayfasına yönlendirilirsin, bizimki değil onların gizlilik
   politikasıyla yönetilir; Lolly'nin sertifika hizmeti geri yalnızca
   doğrulanmış bir e-posta adresi ve sağlayıcının adını alır. E-posta bağlantısı
   için, yazdığın adres yalnızca o tek bağlantıyı teslim etmek amacıyla, bir
   işlemsel e-posta API'si olan **Resend**'e iletilir.
2. **Kısa ömürlü bir çerez yönlendirmeyi korur.** Bu, tüm Lolly sisteminin
   ayarladığı tek çerezdir: `lolly_ca_state`, `HttpOnly`, `/api/ca` kapsamında,
   on dakika içinde sona erer. Bir takip tanımlayıcısı değil rastgele bir değer
   taşır ve yalnızca OAuth yönlendirmesinin taklit edilmesini önlemek için
   vardır. Oturum açma tamamlanır tamamlanmaz temizlenir.
3. **IP adresin, kötüye kullanımı önlemek için kısaca kullanılır** - oturum açma
   uç noktalarında (böylece bir betik bir gelen kutusuna spam gönderemez veya
   e-posta kotasını tüketemez) - yalnızca sunucu belleğinde, yaklaşık bir
   dakikalık kayan bir pencere için tutulur, asla bir günlüğe yazılmaz veya
   hiçbir yerde kalıcı hale getirilmez.
4. **Sertifika hizmeti kısa ömürlü bir sertifika verir** (7, 30, 90 veya 365
   gün, senin seçimin, operatörün politikasıyla sınırlanır) doğrulanmış
   e-postanı cihazında üretilen anahtar çiftinin genel yarısına bağlar. Özel
   yarısı tarayıcından asla çıkmaz.
5. **Verme işlemi günlüğe kaydedilir**: e-posta adresin, kullandığın sağlayıcı,
   sertifikanın seri numarasının kısa bir karması ve son kullanma tarihi
   hizmetin operasyonel günlüklerine yazılır - ve yalnızca operatör bir tane
   yapılandırmışsa, kontrol ettikleri bir webhook'a. Kişisel verinin bir
   parçasının bir sunucuda tutulduğu tek yer burasıdır ve ele geçirilmiş veya
   yanlış verilmiş bir sertifikanın izlenebilmesi ve CA'nın kendi verme
   işleminin denetlenebilmesi için vardır.
6. **Bundan sonra, imzalama sertifikanın tüm ömrü boyunca yine çevrimdışıdır.**
   Bir dosyayı dışa aktarmak sertifika hizmetiyle asla iletişim kurmaz -
   yalnızca kayıt kurmuştu.

Özellikle lolly.tools için: SUSE sertifika hizmetini işletir ve bu verme
günlüklerini tutar. Bir kayıt hakkında nasıl soru soracağını veya kaldıracağını
öğrenmek için aşağıdaki [Hakların](#your-rights) bölümüne bak.

## Tarayıcı eklentisi

**Lolly URL Screenshot** tarayıcı eklentisi hiçbir kişisel veri toplamaz,
saklamaz veya iletmez. Analitik yok, takip yok, uzak sunucu yok.

**Ne yapar.** Lolly web uygulamasından bir URL'nin ekran görüntüsünü almasını
istediğinde, eklenti o sayfayı geçici bir arka plan sekmesinde açar, DevTools
Protocol kullanarak tarayıcında yakalar, görseli uygulamaya geri verir ve
sekmeyi kapatır. Her şey yerel olarak, kendi cihazında ve ağında gerçekleşir.

**Veriler.**

- **Hiçbir şey toplamıyoruz.** Eklentinin hiçbir sunucusu yoktur ve kendi adına
  hiçbir ağ isteği yapmaz.
- **Yakalanan görseller** aynı tarayıcıdaki Lolly uygulamasına doğrudan gider -
  eklenti tarafından asla yüklenmez.
- **Yakaladığın URL'ler** yalnızca o tek sayfayı o tek ekran görüntüsü için
  yüklemek amacıyla kullanılır. Kaydedilmez veya paylaşılmaz.

**İzinler.**

- **`debugger`** - oluşturulan sayfayı DevTools Protocol aracılığıyla yakalamak
  için (Lolly masaüstü uygulamasının kullandığı mekanizmanın aynısı).
- **`tabs`** - sayfanın yüklendiği geçici sekmeyi açmak ve kapatmak için.
- **Ana bilgisayar erişimi (`<all_urls>`)** - yakalamayı seçtiğin sayfa herhangi
  bir sitede olabileceği için. Chrome bunu yükleme sırasında geniş bir izin
  uyarısı olarak gösterir; eklenti yalnızca ona verdiğin URL'yi ziyaret eder.

Bunların hiçbiri, o istenen tek yakalama dışında taramanı okumak, izlemek veya
iletmek için kullanılmaz.

## Altyapı günlükleri

Herhangi bir web sitesi gibi, lolly.tools'un arkasındaki sunucular - ve herhangi
bir Lolly dağıtımının arkasındaki - kendilerine bir istek ulaştığında standart
web sunucusu erişim günlükleri üretir: IP adresi, istenen yol, zaman damgası,
kullanıcı aracısı, güvenlik ve kötüye kullanımın önlenmesi için sınırlı bir süre
boyunca tutulur. Bu, Lolly'nin üzerine eklediği bir şey değil temel barındırma
davranışıdır ve belgelerinin içeriğini asla içermez, çünkü bunlar zaten hiçbir
zaman bir sunucuya ulaşmaz. Tek bilinçli istisna, yukarıda açıklandığı gibi
bellekte işlenen ve asla diske veya bir günlüğe yazılmayan, bir MCP
`lolly_transform` veya `lolly_verify` çağrısına açıkça verdiğin bir dosyadır.

## Çocukların gizliliği

Lolly, uygulamayı olağan şekilde kullanma sürecinde herhangi bir yaştan hiç
kimseden bilerek kişisel bilgi toplamaz - toplanacak bir şey yoktur. Kişisel
bilginin (bir e-posta adresi) toplandığı tek yer, yukarıda açıklanan Content
Credentials kaydıdır ve bu çocuklara yönelik veya onlar için tasarlanmış
değildir.

## Hakların

Lolly'nin dokunduğu neredeyse her şey yalnızca kendi cihazında saklandığı için,
veri koruma hukukunun "hakların" dediği şeylerin çoğu - erişim, düzeltme, silme,
taşınabilirlik - kimseye sormadan, anında, zaten kendi başına yapabileceğin
şeylerdir: verin tarayıcının depolama alanında, inceleyebileceğin, dışa
aktarabileceğin (**Her şeyi dışa aktar ve oluştur**, yukarıda) veya
silebileceğin (**Profil → Tüm verilerimi temizle**) bir biçimde yaşar.

Bir sunucuda sonlanabilecek tek kişisel veri parçası için - Content
Credentials'a kaydolduysan e-posta adresin - ne tuttuğumuzu sormak veya onu
etkin günlüklerden kaldırtmak için bizimle (aşağıda) iletişime geç. Bir günlük
kaydını kaldırmak, zaten verilmiş bir sertifikayı iptal etmez (tasarımı gereği
kısa ömürlüdür ve basitçe sona erer); o kaydın günlüğün gelecekteki dışa
aktarımlarında görünmesini durdurur.

Veri satmıyoruz. Satacak hiçbir verimiz yok.

## Bu politikadaki değişiklikler

Üstteki tarih, bu belge her değiştiğinde değişir. Cihazından neyin çıktığını
veya neyin saklandığını değiştiren bir değişiklik, sessiz bir düzenleme değil
burada kendi satırını alır - neyin değiştiğini görmek istersen, sor (aşağıda)
veya [herkese açık kaynak](https://github.com/lolly-tools/lolly/commits/main/docs/privacy.md)
ile karşılaştır.

## İletişim

Sorular veya yukarıdaki "Hakların" kapsamında bir talep: **Andy Fitzsimon**,
[fitzy@suse.com](mailto:fitzy@suse.com). Kendi kendine barındırılan veya
kurumsal bir Lolly örneği için, bunun yerine onu kim işletiyorsa onunla
iletişime geç - SUSE ve Lolly açık kaynak projesi, kendisinin çalıştırmadığı
dağıtımlar için hiçbir veri tutmaz.
