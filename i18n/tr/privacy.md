# Gizlilik Politikası

*Son güncelleme: 11 Ağustos 2026*

> **Açık söylemek gerekirse.** Lolly'de oluşturduğun belgeler, görseller, videolar ve
> dosyalar kendi cihazında kalır. Sıradan kullanım için hesap yoktur, uygulamanın
> kendisinden gelen çerez yoktur ve kod tabanının hiçbir yerinde analiz veya
> izleyici yoktur - "verileri kullanmıyoruz" değil, kaynak kodda gerçekten yok.
> Yazılımın ağa hiç dokunduğu yerlerde kısa ve eksiksiz bir istisna listesi vardır
> ve bunların her biri aşağıda somut biçimde açıklanır: neyin, kime ve ne zaman
> gittiği. Kişisel herhangi bir şey içeren tek istisna, senin açıkça başlatman
> gereken bir oturum açma işlemidir. Bu belgede yoksa, gerçekleşmiyor demektir.

## Bu politikanın kapsamı

Lolly, herkesin çalıştırabileceği açık kaynaklı bir yazılımdır - bir motor, birkaç
uygulama kabuğu (web, masaüstü, mobil, CLI) ve bir tarayıcı uzantısı. Bu
politikanın iki bölümü vardır:

- <!--i:code--> **Yazılımın kendisi**: nerede çalışırsa çalışsın, verilerinle ne yapıp ne
  yapmadığı. Bu, kodun bir özelliğidir, dolayısıyla bizim veya başka birinin
  yaptığı her Lolly dağıtımı için geçerlidir.
- <!--i:server--> **lolly.tools**, SUSE'nin işlettiği referans dağıtım: isteğe bağlı
  sunucu tarafı bileşenlerini çalıştırırken yapılan özel tercihler (neyin, ne
  kadar süreyle, kim tarafından günlüğe kaydedildiği).

Kendi barındırdığın veya kurumsal bir Lolly örneği kullanıyorsan, aşağıdaki
yazılım davranışı yine geçerlidir, ancak sunucu tarafındaki her şeyden - render
uç noktaları, MCP sunucuları, çalıştırıyorlarsa Content Credentials sertifika
otoriteleri - SUSE değil, o örneğin *işletmecisi* sorumludur. Kendi
politikalarını onlardan iste. Lolly işletmenin ne gerektirdiği için [Benimseme ve
Yönetişim](/info/adoption-governance.html) sayfasına bak.

## Uygulama: cihazında kalanlar

Lolly'nin web, masaüstü ve mobil kabukları tüm render motorunu istemci
tarafında çalıştırır. Bir aracı açmak, girdileri doldurmak, önizlemek ve dışa
aktarmak tamamen cihazında gerçekleşir - hiçbir sunucu devreye girmez ve
uygulama bir kez yüklendikten sonra çevrimdışı çalışır.

**Uygulama hiç çerez ayarlamaz.** Çalışabilmek için **yalnızca cihazında**
tutulan ve asla iletilmeyen küçük bir miktar veri saklar:

- <!--i:sliders--> **Arayüz tercihleri** - tema, dil, ses ayarları, kenar çubuğu/yakınlaştırma
  boyutlandırması, sıralama ve görünüm seçimleri, hangi katılım ipuçlarını
  gördüğün - `localStorage` içinde, böylece uygulama önyüklemesini
  tamamlamadan önce bile kullanılabilirler.
- <!--i:download--> **Araç kataloğunun ve varlık önizlemelerinin çevrimdışı önbelleği**, böylece
  galeri bağlantı olmadan da çalışır.
- <!--i:hash--> **Profil kartının istatistikleri için yerel kullanım sayaçları** (kaç dışa
  aktarım, hangi araçlar) - `localStorage` içinde küçük, sınırlı bir blok;
  bizim tarafımızdan asla okunmaz, hiçbir yere gönderilmez.
- <!--i:folder--> **Kendi belgelerin, kaydedilmiş oturumların, yüklediğin varlıklar ve
  yazı tipleri** - cihazında IndexedDB içinde saklanır, asla yüklenmez, senden
  başka kimse tarafından okunmaz.

Bunların hiçbiri paylaşılmaz, satılmaz veya seni tanımlamak ya da izlemek için
kullanılmaz. Onay verilecek bir şey yoktur, çünkü herhangi bir toplama işlemi
olmuyor - yalnızca bu bildirim var, böylece neyin nerede tutulduğunu bilirsin.
Bunların tümünü istediğin an **Profile → Clear all my data** ile veya
tarayıcında sitenin depolama alanını temizleyerek silebilirsin. (ePrivacy
Directive Art. 5(3) uyarınca, talep ettiğin hizmet için kesinlikle gerekli olan
depolama onay gerektirmez - yalnızca şeffaflık gerektirir; bu belge ve
uygulama içi bildirim de tam olarak bunu sağlar.)

![Profil sayfasının depolama bölümü, telefon genişliğinde bir ekranda: cihaz üzerindeki her veri kategorisi adlandırılmış, hemen yanında Clear all my data düğmesi](/t/url-shot?url=%2F%23%2Fprofile%3Ffocus%3Dstorage-section&width=430&height=1600&dpi=192&waitMs=2400&css=.welcome-dialog%2C.personalize-nudge%2C.store-manages%2C.storage-subsection%2C.store-selbar%2C.store-chip-val%2C%23store-hero-num%2C%23store-headroom%2C%23store-quota%2C%23store-reclaim%7Bdisplay%3Anone%7D&format=svg&walker=1&cropSelector=%23storage-section&dark=1&filename=pv-storage-clear)

Bu verilerin kendi yedeğin - **Export my data & render everything** ile
üretilen `lolly-backup` paketi - senin sakladığın ve denetlediğin bir
dosyadır. Sen kendin bir yere göndermeyi seçmedikçe sunucularımıza asla
dokunmaz. Bkz. [Veri Aktarımı](/info/data-transfer.html).

## Cihaz üzerinde çalışan araçlar

Bazı araçlar - **Strip Hidden Data**, **Compress PDF** ve **"Runs on your
device"** rozetini taşıyan diğerleri - sağladığın bir dosya üzerinde çalışır.
Dosya tarayıcında belleğe okunur, yerel olarak dönüştürülür ve indirme olarak
geri sunulur. Hiçbir zaman yüklenmez, çünkü yolun üzerinde yükleyebileceği bir
sunucu yoktur. Bu araçlar çevrimdışı çalışır ve çıktıları bize ait hiçbir
filigran veya meta veri taşımaz - çoğunun amacı veriyi kaldırıp korumaktır,
risk eklemek değil.

![Bu araçların taşıdığı rozet: Runs on your device - hiçbir şey yüklenmez](/t/url-shot?url=%2F%23%2Ftool%2Fstrip-data&width=1440&height=900&dpi=192&waitMs=2400&walker=1&format=svg&cropSelector=.on-device-badge&dark=1&filename=pv-ondevice-badge)

## Uygulama ağla ne zaman konuşur, eksiksiz liste

Aşağıdaki tablo, uygulamanın ağ üzerinden getirdiği veya gönderdiği her şeyin
eksiksiz listesidir. Burada yoksa, uygulama onu yapmıyor demektir.

| Ne | Cihazından gerçekte ne çıkıyor | Ne zaman (tetikleyen eylem) | Bir işletmeci bunu engellerse |
|---|---|---|---|
| Araç kataloğu eşitleme | Kişisel hiçbir şey yok - Lolly'nin kendi genel araç ve varlık dizini için, uygulamanın kendi kaynağına yapılan bir istek | Başlangıçta, ardından çevrimdışı önbelleğe alınır | Uygulama önbelleğe alınmış araç kümesiyle çalışır. Yalnızca yeni araçları keşfetmeyi durdurur |
| Canlı veri gerektiren bir araç | Bu belirli aracın istediği her şey, kendi açıklamasında adı geçen sunucuya gider. Bugün bu yalnızca Meeting Planner aracındaki şehir arama işlemidir; bu araç bir şehir adını koordinatlara ve saat dilimine çevirmek için `geocoding-api.open-meteo.com` adresine sorar - hesap yok, anahtar yok, isteğin kendisinin ötesinde herhangi bir tanımlayıcı yok. Girdi alanı bunu tam yazdığın yerde belirtir ve her cevap cihazında saklanır, böylece bir şehir yalnızca bir kez aranır | Yalnızca o aracı kullanırken ve yalnızca bir konum girdiğinde | Yalnızca o arama başarısız olur. Koordinatları elle yazmaya devam edebilirsin, başka hiçbir şey etkilenmez |
| Google Fonts | Seçilen yazı tipi ailesinin adı ve IP adresin, Google'ın yazı tipi sunucularına gider (stil sayfası için `fonts.googleapis.com`, yazı tipi dosyası için `fonts.gstatic.com`) | Yalnızca marka düzenleyicisinde bir Google Fonts eklersen **ve yalnızca tam olarak bunu söyleyen bir iletişim kutusunda onayladıktan sonra** - aile başına tek seferlik bir indirme, ardından cihazında kalır ve çevrimdışı kullanılır | Google Fonts seçici kapalı biçimde başarısız olur. Bunun yerine bir yazı tipi dosyası yükle |
| Send to Google Drive | Göndermeyi seçtiğin tek dosya, Google'ın kendi açılır penceresinde tamamladığın bir Google oturum açma işleminin ardından Google'ın Drive API'sine (`www.googleapis.com`) gider. Lolly'nin erişimi yalnızca kendi oluşturduğu dosyalarla sınırlıdır (`drive.file` kapsamı - Drive'ının geri kalanını asla okuyamaz) ve oturum açma jetonu yalnızca oturum süresince bellekte tutulur, hiçbir yerde saklanmaz | Yalnızca bir EMF dışa aktarımında "Send to Google Drive" düğmesine bastığında ve yalnızca işletmecinin bir Google istemci kimliği yapılandırdığı sürümlerde - kimlik yoksa düğme mevcut değildir | Düğme hiç görünmez. Dosyayı indirip Drive'a kendin yükleyebilirsin |
| Send to Dropbox | Göndermeyi seçtiğin tek dosya, Dropbox'ın kendi penceresinde tamamladığın bir Dropbox oturum açma işleminin ardından Dropbox'ın API'sine gider (oturum açma ve meta veri için `api.dropboxapi.com`, dosyanın kendisi için `content.dropboxapi.com`). Lolly'nin erişimi yalnızca uygulama klasörüyle sınırlıdır (yalnızca `Apps/` ve oradaki kendi klasörünü görebilir - Dropbox'ının geri kalanını asla göremez), sana gösterilen "Open" bağlantısı kısa ömürlü, özel bir bağlantıdır (genel paylaşım oluşturulmaz) ve bir yenileme jetonu yalnızca "stay connected" seçeneğini işaretlersen saklanır | Yalnızca bir dosyada "Send to Dropbox" düğmesine bastığında ve yalnızca işletmecinin bir Dropbox istemci kimliği yapılandırdığı sürümlerde - kimlik yoksa düğme mevcut değildir | Düğme hiç görünmez. Dosyayı indirip Dropbox'a kendin yükleyebilirsin |
| Send to OneDrive | Göndermeyi seçtiğin tek dosya, Microsoft'un kendi penceresinde tamamladığın bir Microsoft oturum açma işleminin ardından Microsoft'un kimlik ve Graph hizmetlerine gider (oturum açma için `login.microsoftonline.com`, yükleme için `graph.microsoft.com`; büyük bir dosya `api.onedrive.com`, `*.up.1drv.com` veya `*.sharepoint.com` üzerindeki Microsoft'a ait bir yükleme adresine parçalar halinde yüklenir). Lolly'nin erişimi yalnızca `Apps/` altındaki kendi klasörüyle (OneDrive'ının geri kalanını asla okuyamaz) ve hesap etiketi için görünen adınla sınırlıdır, bir yenileme jetonu yalnızca "stay connected" seçeneğini işaretlersen saklanır | Yalnızca bir dosyada "Send to OneDrive" düğmesine bastığında ve yalnızca işletmecinin bir Microsoft istemci kimliği yapılandırdığı sürümlerde - kimlik yoksa düğme mevcut değildir | Düğme hiç görünmez. Dosyayı indirip OneDrive'a kendin yükleyebilirsin |
| ICC baskı profilleri | Kişisel hiçbir şey yok - ICC'nin genel kayıt defterine (`registry.color.org`, `www.color.org`) standart bir baskı koşulu profili için yapılan bir istek | Yalnızca baskı profili yöneticisinde bir ICC ön ayarına tıklarsan - profil başına tek seferlik bir indirme, ardından cihazında kalır | ICC ön ayarları başarısız olur. Bunun yerine kendi `.icc` profilini sağla |
| İnternet radyosu | Kişisel hiçbir şey yok - istasyona (`api.somafm.com` ve adını verdiği icecast sunucusu, `*.somafm.com`) yapılan bir çalma listesi isteği ve bir ses akışı | Yalnızca ses oynatıcısındaki isteğe bağlı yerleşik radyoyu çalarken | Radyo başarısız olur. Diğer tüm ses özellikleri çalışmaya devam eder |
| Bir aracın yakalamasını istediğin bir URL | URL ekran görüntüsü aracından, tam olarak yazdığın web adresine yapılan bir istek. O adres her ne ise. Bu sunucu aşağıdaki politikada yer almaz, çünkü onu kullanım anında sen seçersin | Yalnızca o araca bir URL girip yakalamayı başlattığında | Bir işletmeci bunu sunucuya göre izin listesine alamaz. Kaldırmak için aracı kaldırman gerekir |
| SEAL imza kontrolü | **Hiçbir şey.** Web uygulamasının hiçbir DNS çözümleyicisi yoktur - aşağıya bak | Asla | Engellenecek hiçbir şey yok |
| Derin tarama dedektör modelleri | Kişisel hiçbir şey yok - tek seferlik, aynı kaynaktan bir model indirmesi (üçüncü taraf değil) | Yalnızca Verify'ın derin taramasını etkinleştirirsen | Derin tarama kullanılamaz. Standart doğrulama çalışmaya devam eder |
| Uzak örnek | Adını verdiğin örneğin, yukarıda açıklanan aynı katalog eşitlemesi üzerinden geri gönderdiği her şey. Sunucuyu kullanım anında sen seçersin, bu yüzden aşağıdaki politikada yer almaz | Yalnızca kabuğu açıkça başka bir Lolly dağıtımına yönlendirirsen | Örnek değiştirme başarısız olur. Yerel örneğin etkilenmez |

O tablodaki her sabit sunucu, aynı zamanda tarayıcının uyguladığı uygulamanın
Content-Security-Policy'sindeki eksiksiz izin listesidir. Yani bu liste yalnızca
kodun bugün ne yaptığının bir açıklaması değil, tarayıcının uygulamayı tuttuğu
sınırdır: başka bir sunucuyla iletişim kurmaya çalışan gelecekteki bir
değişiklik sessizce izin verilmez, engellenir. İki satırın sabit bir sunucusu
yoktur, çünkü adresi kullanım anında sen seçersin: bir aracın yakalamasını
istediğin bir URL ve kabuğu yönlendirdiğin bir uzak örnek. İkisi de politikada
yer almaz ve her biri yalnızca bir adres yazıp harekete geçtiğinde gerçekleşir.
İsteğe bağlı özelliklerin hiçbirini istemeyen bir dağıtım (kendi yazı
tiplerine sahip kurumsal bir örnek diyelim) bu sunucuları kendi politikasından
kaldırır ve özellikler dışarı uzanmak yerine kapalı biçimde başarısız olur.

Bunların hiçbiri belgelerini, projelerini, oturumlarını veya yüklediğin
dosyaları hiçbir yere göndermez. Bunlar bir şeyleri cihazına *getirmek* için
vardır (araçlar, yazı tipleri, modeller), aşağıdaki bölümlerde açıkça
adlandırılan istisnalar dışında cihazından hiçbir şey *göndermek* için değil.

**Kaldırdığımız şey hakkında bir not.** Verify, bir dosyanın imzalama
anahtarının DNS'de yayımlandığı bir şema olan SEAL imzalarını kontrol
edebilir. Tarayıcılar DNS sorguları yapamaz, bu yüzden herhangi bir web
uygulaması aramayı üçüncü taraf bir DNS-over-HTTPS çözümleyicisi üzerinden
yönlendirmek zorundadır - bu da o işletmeciye kontrol edilen alan adını ve IP
adresini gösterirdi. Eskiden Cloudflare'inkini kullanıyorduk. **Artık
kullanmıyoruz ve yerine bir şey koymadık**: web uygulaması artık hiçbir
çözümleyici geçirmiyor, bu yüzden buradaki SEAL doğrulaması sıfır ağ isteği
yapıyor. SEAL kaydı anahtarını satır içinde taşıyan dosyalar hâlâ tamamen
çevrimdışı doğrulanır. Anahtarı DNS'de yaşayan dosyalar bunun yerine "no key
resolver" bildirir ve bunları, hiçbir üçüncü taraf olmadan DNS'i kendi
makinen üzerinden yerel olarak çözen masaüstü veya komut satırı uygulamasında
kontrol edebilirsin.

![Verify ekranı: bir bırakma hedefi ve başka hiçbir şey - dosya zaten
bulunduğu yerde kontrol edilir, yükleme veya hesap yoktur](/t/url-shot?url=%2F%23%2Fverify&width=1440&height=900&dpi=192&waitMs=1400&walker=1&format=svg&cropSelector=.valid-layout&dark=1&filename=cc-verify-drop) Bunu
kendin doğrulayabilirsin: bu sayfadaki bu ve diğer her iddia için grep ile
taranabilir kontroller, tam komutlarla ve beklenen çıktıyla birlikte, [Verify
It Yourself](/info/verify-yourself.html) sayfasında bulunur.

## Doğrudan bağlantılı render URL'leri

> **Şu anda lolly.tools'ta kapalı.** Bugün her
> `https://lolly.tools/tool/<tool-id>.<ext>` URL'si 404 döndürür. Aşağıdaki
> bölüm, bir işletmeci bu özelliği etkinleştirdiğinde ne yaptığını ve bizim
> neden etkinleştirmediğimizi açıklar. Hizmet SUSE tarafından işletilen
> altyapıya taşındığında burada açılacak ve bu bildirim de o zaman
> değişecektir.

Uygulamanın kendisi tamamen cihazında kalır. Ayrı olarak bir işletmeci
**doğrudan bağlantılı render URL'lerini** etkinleştirebilir -
`/tool/<tool-id>.<ext>?<inputs>` - böylece paylaşılan bir Lolly bağlantısı bir
README'de, bir wiki'de veya bir panoda canlı bir görsel olarak görünebilir.
Birini getirmek, sunucudan URL'ye yazılmış girdilerle **genel araç ve katalog
verisini** render etmesini ister.

- <!--i:usercheck--> **Hesap yok, çerez yok, durum yok.** Uç nokta anonimdir ve cihazındaki
  hiçbir şey okunmaz. Belgelerin, oturumların ve yüklemelerin tarayıcından
  asla çıkmaz - bu bağlantılarda hiçbir şekilde görünemezler.
- <!--i:document--> **Ama URL'nin kendisi kaydedilir.** Bir URL'nin sorgu dizesi istek satırının
  bir parçasıdır, bu yüzden istenen her yol gibi barındırma platformunun
  sıradan erişim günlüklerine de düşer. Bir bağlantının girdileri birinin
  adını veya e-postasını içeriyorsa - bir isim rozeti, bir e-posta imzası -
  **o metin o günlüklerde durur** ve hiçbir politika ifadesi bunu değiştirmez.
  Özelliğin burada açık değil kapalı olmasının özel nedeni budur.
- <!--i:globe--> **Girdiler zaten yapısı gereği herkese açıktır** - bağlantının yazarının
  URL'ye ne yazdığıysa odur, bağlantının ulaştığı herkes tarafından
  okunabilir. Paylaşılan bir bağlantıya sır koyma. Lolly, hassas içerik için
  bağlantı şifrelemesi sunar.
- <!--i:eyeoff--> Yanıtlar, herhangi bir genel görsel gibi **önbelleğe alınır ve hız
  sınırlamasına tabidir** ve arama motorları render'larını dizine eklemesin
  diye `noindex` olarak işaretlenir.

Lolly'yi kendin barındırıyorsun ve genel bir render yüzeyi istemiyor musun?
`LOLLY_DISABLE_RENDER_GET=1` ayarını yap - lolly.tools'un kendisinin şu anda
yaptığı da bu - ve bu URL'lerin tamamı 404 döndürür.

## MCP sunucusu (isteğe bağlı, yapay zeka ajanları için)

Lolly'ye Model Context Protocol üzerinden bir yapay zeka ajanı tarafından da
ulaşılabilir - işletmeci tarafından çalıştırılan bir uç nokta (lolly.tools bir
tane çalıştırır; herkes tamamen hava boşluklu olanlar dahil kendi sunucusunu
kendi barındırabilir). Render yolunun hesapsız duruşunu paylaşır, buna ek
olarak dosya baytlarını zorunlu olarak işleyen üç araç vardır:

- <!--i:cpu--> **`lolly_transform`** (çağıran ajan adına, sunucu tarafında bir cihaz
  üstü aracı çalıştırır), **`lolly_verify`** (Content Credentials kontrolü
  yapar) ve **`lolly_redact`** (bir görsel veya PDF'in bölgelerini
  karartır) çağrandan bir dosyanın baytlarını kabul eder. Bunlar **işlem
  içinde, bellekte** işlenir ve sonuç aynı çağrıda döndürülür - dosya asla
  diske yazılmaz ve istek tamamlandığında asla saklanmaz.
- <!--i:checklist--> Diğer tüm araçlar - `lolly_render`, `lolly_build_url`,
  `lolly_list_tools`, `lolly_describe_tool` - yalnızca parametrelerle çalışır
  (metin, sayılar, renkler, URL'ler, katalog varlık kimlikleri), doğrudan
  bağlantılı bir render URL'sinin aldığı aynı girdilerle.
- <!--i:lock--> Erişim, ya işletmecinin güvendiği istemcilere verdiği paylaşılan bir
  jetondur ya da durumsuz OAuth 2.1'dir: paylaşılan bir sırra karşı
  doğrulanan, kısa ömürlü imzalı jetonlar; sunucu tarafında hiçbir şey
  saklanmaz ve jetonun kendisi asla bir günlüğe veya render URL'sine
  yazılmaz.

## Content Credentials kimliği (senin kendin başlatman gereken bir oturum açma)

Lolly, dosyanın Lolly'den çıktıktan sonra değiştirilmediğini herkesin çevrimdışı olarak doğrulayabilmesi için dışa aktardığın dosyalara kriptografik bir **Content Credential** damgalayabilir. Bu kadarı
**varsayılan olarak açık ve tamamen yerel** - imzalama anahtarı cihazında oluşturulur
ve imzalamanın kendisi çevrimdışı gerçekleşir. Kayıt olmadan bu anahtar tek kullanımlıktır:
her dışa aktarım için yeni bir anahtar çifti üretilir ve dosyayla birlikte bırakılır. Kayıt olduğunda
anahtar kalıcı hale gelir ve **çıkarılamaz** şekilde oluşturulur - Lolly'nin
kendi kodu bile onu okuyamaz, yalnızca imzalamasını isteyebilir. Her iki durumda da cihazından
asla çıkmaz. Bu bölüm, bunun üzerine eklenen tek *isteğe bağlı* adımı ele alır:
dışa aktardığın dosyaların anonim bir anahtar yerine "Verified - signed by
\<your email\>" yazmasını sağlayan doğrulanmış bir kimlik kaydetmek. **Kayıt olmazsan bu
bölümdeki hiçbir şey seni ilgilendirmez ve hiçbir kişisel veri cihazından çıkmaz.**

![Profil sayfasındaki Verified kimlik kartı, telefon genişliğinde: sertifika
yaşam süresi seçici ve altındaki kayıt adımı, sen başlatana kadar hareketsiz](/t/url-shot?url=%2F%23%2Fprofile%3Ffocus%3Didentity-section&width=430&height=1600&dpi=192&waitMs=2400&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone%7D&format=svg&walker=1&cropSelector=%23identity-section&dark=1&filename=pv-identity-enrol)

Kayıt olursan, tam olarak şunlar gerçekleşir:

1. **Bir oturum açma yöntemi seçersin** - GitHub, Google, SUSE (id.suse.com)
   veya e-posta ile gönderilen bir bağlantı. Üç OIDC sağlayıcısı için, o
   sağlayıcının kendi giriş sayfasına yönlendirilirsin; bu sayfa bizim değil,
   onların gizlilik politikasına tabidir. Lolly'nin sertifika servisi
   karşılığında yalnızca doğrulanmış bir e-posta adresi ve sağlayıcının adını
   alır. E-posta bağlantısı için, yazdığın adres yalnızca o tek bağlantıyı
   iletmek amacıyla işlemsel bir e-posta API'si olan **Resend**'e geçirilir.
2. **Kısa ömürlü bir çerez yönlendirmeyi korur.** Bu, tüm Lolly sisteminin
   ayarladığı tek çerezdir: `lolly_ca_state`, `HttpOnly`, `/api/ca` ile
   kapsamlandırılmış, on dakika içinde süresi doluyor. Bir izleme
   tanımlayıcısı değil, rastgele bir değer taşır ve yalnızca OAuth
   yönlendirmesinin sahtelenmesini önlemek için vardır. Oturum açma
   tamamlanır tamamlanmaz temizlenir.
3. **IP adresin, kötüye kullanımı önlemek için kısaca kullanılır** (bir
   betiğin bir gelen kutusunu spam ile doldurmasını veya e-posta kotasını
   tüketmesini engellemek için) - yalnızca sunucu belleğinde, yaklaşık bir
   dakikalık kayan bir pencere boyunca tutulur, asla bir günlüğe yazılmaz
   veya hiçbir yerde kalıcı hale getirilmez.
4. **Sertifika servisi kısa ömürlü bir sertifika verir** (7, 30, 90 veya 365
   gün, seçimin işletmecinin politikasıyla sınırlandırılır), bu sertifika
   doğrulanmış e-postanı cihazında üretilen anahtar çiftinin genel yarısına
   bağlar. Özel yarısı tarayıcından asla çıkmaz.
5. **Veriliş hakkında hiçbir şey kaydedilmez.** Sertifika servisi hiçbir
   veriliş günlüğü tutmaz: ne e-postan, ne sağlayıcı, ne bir seri numarası,
   ne de bir zaman damgası. Veritabanı yok, günlük satırı yok, webhook yok.
   E-posta adresin istekte yalnızca kendi cihazının aldığı sertifikaya
   yazılacak kadar var olur, sonra bizim tarafımızdan tamamen silinir.
6. **Ondan sonra imzalama, sertifikanın tüm yaşam süresi boyunca** yeniden
   çevrimdışıdır. Bir dosyayı dışa aktarmak sertifika servisiyle asla
   iletişime geçmez - yalnızca kayıt olma işlemi geçmişti.

**Ödünleşim, açıkça söylenmiş.** Bu servisin daha önceki bir sürümü, hatalı
verilmiş veya ele geçirilmiş bir sertifikanın izlenebilmesi için her verilişi
günlüğe kaydediyordu. Bunu kaldırdık, çünkü o günlük, kişisel verinin bir
sunucuda durduğu tüm Lolly içindeki tek yerdi ve onu dikkatle tutmaktansa hiç
tutmamayı tercih ediyoruz. Vazgeçtiğimiz şey sunucu tarafı izlenebilirliktir:
bir sertifika kötüye kullanılırsa kimin aldığını bulamayız. Sertifikalar
tasarım gereği kısa ömürlüdür - 7 ila 365 gün, seçimin işletmeci tarafından
sınırlandırılır - ve kendiliğinden sona erer; bunun yerine dayandığımız
azaltma önlemi budur. Kendi yükümlülükleri bir denetim günlüğü gerektiren
kendi kendini barındıranlar bir tane ekleyebilir ve bunu yaparak o verinin
denetleyicisi haline gelebilir.

## Tarayıcı uzantısı

**Lolly URL Screenshot** tarayıcı uzantısı hiçbir kişisel veri toplamaz,
saklamaz veya iletmez. Analiz yok, izleme yok, uzak sunucu yok.

**Ne yapar.** Lolly web uygulamasından bir URL'nin ekran görüntüsünü almasını
istediğinde, uzantı o sayfayı geçici bir arka plan sekmesinde açar, DevTools
Protocol kullanarak tarayıcında yakalar, görseli uygulamaya geri verir ve
sekmeyi kapatır. Her şey yerel olarak, kendi cihazında ve ağında gerçekleşir.

**Veri.**

- <!--i:shieldcheck--> **Hiçbir şey toplamayız.** Uzantının hiçbir sunucusu yoktur ve kendi
  başına hiçbir ağ isteği yapmaz.
- <!--i:photos--> **Yakalanan görseller** aynı tarayıcıdaki Lolly uygulamasına doğrudan
  gider - uzantı tarafından asla yüklenmez.
- <!--i:link--> **Yakaladığın URL'ler** yalnızca o tek ekran görüntüsü için o tek sayfayı
  yüklemek amacıyla kullanılır. Günlüğe kaydedilmez veya paylaşılmaz.

**İzinler.**

- <!--i:wrench--> **`debugger`** - render edilen sayfayı DevTools Protocol üzerinden
  yakalamak için (Lolly masaüstü uygulamasının kullandığı aynı mekanizma).
- <!--i:monitor--> **`tabs`** - sayfanın yüklendiği geçici sekmeyi açıp kapatmak için.
- <!--i:globe--> **Sunucu erişimi (`<all_urls>`)** - çünkü yakalamayı seçtiğin sayfa
  herhangi bir sitede olabilir. Chrome bunu kurulum sırasında geniş bir izin
  uyarısı olarak gösterir. Uzantı yalnızca sana verdiğin URL'yi ziyaret
  eder.

Bunların hiçbiri, istenen o tek yakalama işleminin ötesinde tarama
geçmişini okumak, izlemek veya iletmek için kullanılmaz.

## Altyapı günlükleri

Her web sitesi gibi, lolly.tools'un ve herhangi bir Lolly dağıtımının
arkasındaki sunucular, kendilerine bir istek ulaştığında standart web sunucusu
erişim günlükleri üretir: IP adresi, istenen yol, zaman damgası, kullanıcı
ajanı. Bu, Lolly'nin üzerine eklediği bir şey değil, temel barındırma
davranışıdır ve belgelerinin içeriğini asla içermez, çünkü bunlar zaten bir
sunucuya hiç ulaşmaz. Kasıtlı olan tek istisna, yukarıda açıklandığı gibi
bellekte işlenen ve asla diske veya bir günlüğe yazılmayan, açıkça bir MCP
`lolly_transform`, `lolly_verify` veya `lolly_redact` çağrısına verdiğin
dosyadır.

**Lolly'nin kendi kodu bu günlüklere hiçbir şey yazmaz.** MCP sunucusunda
hiçbir günlükleme ifadesi yoktur. Sertifika servisi tam olarak iki satır
üretir, ikisi de hata durumunda ve ikisi de kasıtlı olarak sadeleştirilmiştir:
alıcı adresi olmayan bir gönderim hatası durum kodu ve yığın izi veya URL
olmayan bir hata mesajı (bir yığın izi bir kayıt jetonu taşıyabilirdi).
Günlükteki geri kalan her şey bize değil, barındırma platformuna aittir.

lolly.tools için barındırma Vercel'dedir ve erişim günlüğü saklama süresi,
planımız için Vercel'in kendi platform varsayılanlarını takip eder. Hiçbir
günlük aktarımı, uzun vadeli günlük dışa aktarımı veya bunun üzerine hiçbir
analiz ya da izleme ürünü yapılandırmıyoruz. Bu günlüklerin kendimiz hiçbir
kopyasını tutmuyoruz, bu da senin için onları arama imkanımızın olmadığı
anlamına gelir - bkz. [Haklarınız](#your-rights).

## Hukuki dayanaklar, saklama süreleri ve alıcılar

Burada neredeyse hiçbir şey hukuki bir dayanak gerektirmiyor, çünkü neredeyse hiçbir şey işlenmiyor. Eksiksizlik açısından, tam liste:

| İşleme | Hukuki dayanak (GDPR Madde 6) | Saklama süresi |
|---|---|---|
| Cihazındaki her şey (belgeler, tercihler, önbellek, sayaçlar) | **Bizim işlememiz bile değil** - bize hiç ulaşmıyor. Cihazındaki depolama, talep ettiğin hizmet için kesinlikle gerekli (ePrivacy Madde 5(3)), bu yüzden onay gerektirmiyor | Sen silene kadar |
| Content Credentials kaydı sırasındaki e-posta adresin | **Madde 6(1)(b)**, açıkça talep ettiğin bir hizmetin ifası | Saklanmıyor. Yalnızca talep süresi boyunca bellekte bulunuyor |
| Hız sınırlama amacıyla oturum açma uç noktalarındaki IP adresin | **Madde 6(1)(f)**, ücretsiz bir hizmetin ve üçüncü bir tarafın e-posta kotasının kötüye kullanılmasını önlemedeki meşru menfaatimiz. Bunun bir denge testini geçtiğini düşünüyoruz çünkü yalnızca bellekte tutuluyor, hiçbir zaman kaydedilmiyor ve yaklaşık bir dakika içinde siliniyor | ~1 dakika, sunucu belleğinde, hiç kalıcı hale getirilmiyor |
| Barındırma erişim günlükleri (IP, yol, zaman damgası, kullanıcı aracısı) | **Madde 6(1)(f)**, hizmet güvenliği, kötüye kullanımın önlenmesi ve arızaların teşhisindeki meşru menfaatimiz | Planımız için Vercel'in platform varsayılanı. Herhangi bir aktarım veya dışa aktarım eklemiyoruz |

**Alıcılar.** Alıcı kategorileri şunlardır: barındırma sağlayıcımız (Vercel Inc.) ve - yalnızca e-posta ile oturum açma seçeneğini kullanırsan - bir işlemsel e-posta sağlayıcısı (Resend). GitHub, Google veya SUSE (id.suse.com) ile oturum açarsan, o sağlayıcıyla kendi gizlilik politikası kapsamında doğrudan etkileşim kurarsın. Bize yalnızca doğrulanmış bir e-posta adresi bildirirler, başka hiçbir şey bildirmezler. Kişisel verileri başka hiç kimseyle paylaşmıyoruz ve veri satmıyor, reklam yürütmüyor veya kullanıcı profillemesi yapmıyoruz.

**AEA dışına aktarımlar.** Vercel ve Resend ABD şirketleridir. lolly.tools için işlev hesaplaması Vercel'in Frankfurt (`fra1`) bölgesine sabitlenmiştir, yani işleme AB'de gerçekleşir, ancak ABD merkezli sağlayıcılar olarak işleyen sıfatıyla verilere ABD'den yine de erişebilirler. Bu aktarımlar, her sağlayıcının veri işleme sözleşmesinde belirtildiği üzere Avrupa Komisyonu'nun Standart Sözleşme Hükümleri'ne ve/veya AB-ABD Veri Gizliliği Çerçevesi'ne dayanır. Her iki sağlayıcıya da ulaşan kişisel veri o kadar sınırlı olduğundan - tek bir mesaj göndermek için iletilen bir e-posta adresi ve sıradan erişim günlükleri - maruziyet de buna orantılı olarak küçüktür.

**Otomatik karar alma.** Yok. Profilleme yapılmıyor ve hukuki veya benzer şekilde önemli etkiler doğuran otomatik bir karar alma süreci yok (Madde 22).

## Çocukların gizliliği

Lolly, uygulamanın olağan kullanımında hiç kimseden, hiçbir yaştan, bilerek kişisel bilgi toplamaz - toplayacak bir şey yoktur. Kişisel bilginin (bir e-posta adresinin) toplandığı tek yer, yukarıda açıklanan ve çocuklara yönelik ya da onlar için tasarlanmamış olan Content Credentials kaydıdır.

## Haklarınız

Lolly'nin dokunduğu neredeyse her şey yalnızca kendi cihazında saklandığından, veri koruma hukukunun "haklarınız" dediği şeylerin çoğu - erişim, düzeltme, silme, taşınabilirlik - zaten kimseye sormadan, anında kendin yapabileceğin şeylerdir: verilerin tarayıcının depolama alanında, inceleyebileceğin, dışa aktarabileceğin (yukarıdaki **Export my data & render everything**) veya silebileceğin (**Profile → Clear all my data**) bir biçimde bulunur.

Resmi olarak, GDPR Madde 15-22 kapsamında kişisel verilerine **erişme**, onu **düzeltme**, **silme**, işlenmesini **kısıtlama** veya işlenmesine **itiraz etme** (meşru menfaatlere dayandırdığımız her şeye itiraz etmek dahil), **veri taşınabilirliği** ve - işleme onaya dayandığında - önceki işlemin hukuka uygunluğunu etkilemeksizin **onayı istediğin zaman geri çekme** hakkına sahipsin.

Bunları bize karşı kullanma konusunda dürüst durum şu. Artık bir verme günlüğü tutmadığımızdan, **hakkında bakabileceğimiz, düzeltebileceğimiz, dışa aktarabileceğimiz veya silebileceğimiz hiçbir kişisel veri elimizde yok.** Bize yazıp hakkında ne tuttuğumuzu sorarsan, doğru cevap hiçbir şeydir ve bunu sana öyle söyleriz. Var olan tek kategori, barındırma sağlayıcımız tarafından kendi saklama varsayılanları altında tutulan, bir IP adresine bağlı barındırma erişim günlükleridir. Bunları arama veya seçici olarak silme imkânımız yok ve bunu, başka türlü davranıyormuş gibi yapmak yerine sana söyleriz. Gerçekten *senin* olan her şey kendi cihazında, kimsenin iznini almadan zaten okuyabileceğin, dışa aktarabileceğin ve yok edebileceğin bir yerdedir.

**Şikayet etme hakkın var.** Verilerini uygun olmayan bir şekilde ele aldığımızı düşünüyorsan, bir veri koruma denetim makamına şikayette bulunabilirsin - AB'de, ikamet ettiğin, çalıştığın veya ihlalin gerçekleştiğini düşündüğün ülkedeki makam (Madde 77). Bizim lider denetim makamımız Almanya'nın Ansbach kentindeki *Bayerisches Landesamt für Datenschutzaufsicht* (BayLDA)'dır. Önce bizimle iletişime geçmen gerekmez, ancak sorunu düzeltme fırsatını isteriz.

Veri satmıyoruz. Satacak bir verimiz de yok.

## Bu politikadaki değişiklikler

En üstteki tarih, bu belge her değiştiğinde değişir. Cihazından neyin çıktığını veya neyin saklandığını değiştiren bir değişiklik, sessiz bir düzenleme olarak değil, burada kendi satırını alır - neyin değiştiğini görmek istersen sor (aşağıda) veya [genel kaynakla](https://github.com/lolly-tools/lolly/commits/main/docs/privacy.md) karşılaştır.

## Kim sorumlu ve bize nasıl ulaşılır

lolly.tools için **veri sorumlusu**:

> SUSE Software Solutions Germany GmbH
> Frankenstraße 146
> 90461 Nürnberg
> Almanya

SUSE, [privacy@suse.com](mailto:privacy@suse.com) adresinden ulaşılabilen bir **Veri Koruma Görevlisi** atamıştır. Yukarıdaki "Haklarınız" kapsamındaki her türlü resmi talep için bu adresi kullan.

Lolly'nin kendisiyle ilgili herhangi bir konu için - nasıl çalıştığı, bir şeyin neden öyle olduğu veya bu belgeye yapılacak bir düzeltme - **Andy Fitzsimon**, [fitzy@suse.com](mailto:fitzy@suse.com) ile iletişime geç.

Kendi barındırdığın veya kurumsal bir Lolly örneği için, bunun yerine onu işleten kişiyle iletişime geç: işletici, kendi dağıtımı için veri sorumlusudur. SUSE ve Lolly açık kaynak projesi, kendi yürütmedikleri dağıtımlar için hiçbir veri tutmaz.
