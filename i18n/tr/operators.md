# Operatörler için Lolly

### Geleceğe dönük, katmanlı savunmalı, veri kaybını önleyen ve köken kanıtlayan bir strateji - üstelik aynı zamanda bir yaratıcı üretim platformu

Zaten yaptığın işin etrafını saran kurumsal bağışıklık sistemi - böylece ekiplerinin her gün ihtiyaç duyduğu rutin yaratıcı işler, çevrenin dışına sızmak yerine *içinde* gerçekleşir.

**Senin için ne var.** Hem güvenli *hem de* popüler bir şeye evet diyen kişi olma şansını yakalarsın. Bir sızıntı deliğini kapatıp tasarım talebi kuyruğunu tek hamlede silersin - seni daha az değil, daha çok sevdiren o nadir güvenlik kazanımı. Biri marka dosyalarını bir yükleniciye e-postaladığı ya da müşteri verilerini rastgele bir web aracına yapıştırdığı için gelen sabahın 3'ündeki telefon yok artık; üzerindeki SaaS satıcısı, sözleşme ve denetim yükü azalır; kim neyi onayladı diye sorulduğunda gösterebileceğin eksiksiz bir git kaydın olur. Geceleri rahat uyursun.

Lolly, bir yaratıcı araç olarak yerini hak ediyor: tasarım kuyruğunu ortadan kaldırıyor ve üretim kalitesinde çıktıyı herkesin eline veriyor. Ama bunu bu kadar geniş çapta dağıtmanın *güvenli* olmasının nedeni mimari. Hiçbir şey yüklenmez, her şey yeniden üretilebilir ve her dışa aktarım, nereden geldiğine dair kriptografik bir kayıt taşıyabilir. Bu sayfa, güvenlik ve devreye alma hikâyesidir.

> **Bugün itibarıyla durum.** Lolly'nin güvenlik özellikleri tasarım gereği güçlü ve kriptografi ile dosya ayrıştırma motorları, SUSE'nin kurumsal düzeydeki altyapı sertleştirme sürecinden geçiyor. Aşağıdaki mühürler, cihaz üzerinde imzalama ve şifreleme bugün gerçek ve savunulabilir durumda, bağımsız sertifikasyona doğru olgunlaşıyor - bu yüzden bir sözleşme sertifikalı güvence istediğinde, bu süreç tamamlanana kadar bunları katmanlı savunma olarak devreye al.

## Stratejik avantaj

Rutin yaratıcı işlerin genelde yapılma biçimi bir risk yüzeyi oluşturur: dosyalar dış tasarım yüklenicilerine e-postalanır, marka varlıkları düzinelerce SaaS düzenleyicisine yüklenir, müşteri verileri "sadece hızlı bir görsel yapayım" diye bir yabancının web aracına yapıştırılır. Bunların her biri, kontrolünden çıkan veri demektir.

Lolly bunu tersine çevirir. Bu sızıntılara *yol açan* iş - alıntı kartı, yerelleştirilmiş banner, etkinlik rozeti, sansürlenmiş ekran görüntüsü - artık çalışanın kendi cihazında, senin markana karşı, araya hiçbir sunucu girmeden çalışan bir araç üzerinde gerçekleşir. Riskli bir iş akışının üzerine bir kontrol eklemedin; riskli iş akışını, başından beri sızıntı yolu olmayan bir başkasıyla değiştirdin.

- **Yapılandırma senindir.** Motor ve kabuklar açık kaynaktır (MPL-2.0). Kendi kimlik doğrulamanı, telemetrini veya CA'nı üzerine ekle; ister barındır ister barındırma; özellik ve maliyet üzerinde tam kontrol sende olur, git ile takip edilir, bir SaaS veritabanına kilitlenmez.
- **Yönetişim, bir panodan çok veri olabilir.** Bu kontrolü istediğinde, araç katalogunu bir Git deposu olarak yönet - pull request incelemesi marka onayına dönüşür, çalışanlarının dokunabileceği her şablon için eksiksiz bir denetim izi ve anlık geri alma imkânıyla. Bu bir seçenektir, zorunluluk değil: sadece bir şeyler üretmek isteyen ekipler kendi araçlarını Layout Studio'da yazar ve kendi dosyalarını, git'e hiç dokunmadan, tamamen uygulama içinden kataloğa aktarır. Bkz. [Benimseme ve Yönetişim](/info/adoption-governance.html).
- **Koruma bariyerleri yapısaldır.** Marka kısıtlamaları, insanların görmezden gelebileceği kurallar olarak yayımlanmaz; doğrudan şablonlara gömülüdür. Yanlış çıktı caydırılmaz - zaten temsil edilemez.

## İçerik üretimini artırırken talep kuyruğunu sil.

Lolly'nin hedeflerinden biri **tasarım talebi saptırma**: varlığa ihtiyaç duyan kişinin onu birkaç dakikada, doğru biçimde kendisinin oluşturması sayesinde hiçbir zaman bir tasarımcıya ulaşması gerekmeyen rutin talepler. Saptırılan her talep hem bir verimlilik kazancıdır hem de el değiştiren bir dosya eksiltir.

Lolly, kurumunun gerçekte nasıl çalıştığına uyacak şekilde tasarlanmıştır - devreye almanın tek bir doğru yolu yoktur:

- **Sunma, doğrudan dağıt.** Lolly'yi mevcut MDM'in üzerinden (Intune, Jamf, Munki…) cihazlara dağıt. Yerel olarak bir masaüstü/mobil uygulama ya da çevrimdışı bir PWA olarak çalışır - herhangi bir güvenlik duvarının arkasında, herhangi bir hava boşluklu ortamda çalışır, bakılacak bir sunucu yoktur ve güncelleme temposu BT'nin kontrolündedir.
- **Yalnızca sun.** Ağının içinde (ya da bir VPN'in arkasında) tek bir örnek çalıştır; kullanıcılar tarayıcıdan erişir, hiçbir şey kurulmaz. Bir aracı bir kez yayımla, herkes anında sahip olsun; erişim kontrolü için IdP'inle eşleştir.
- **Hibrit.** Çevrimdışı saha çalışması için yerel uygulamalar, ödünç alınan makineler için her zaman güncel bir tarayıcı sürümü - ikisi de aynı araç kitaplığına bağlı.

Devreye alma modellerinin tamamı ve yönetim rehberi [Dağıtım](/info/deployment.html) ve [Yapılandırma](/info/configuration.html) sayfalarında yer alır.

## Sızıntı önleyici yardımcı araçlar

Lolly araçlarının bir kategorisi, dosyaları çevrenin içinde tutmak için *özel olarak* var. Gizlilik yardımcı araçları.


- **Strip hidden data**
 Belgelerden ve medya dosyalarından konum bilgisini ve tüm gizli tanımlayıcı bilgileri kaldırır.

- **Text Helper**  
Yapılandırılmış ve yapılandırılmamış metni anonimleştir, kodla, biçimlendir ve düzenle. 

- **Compress PDF**
Üçüncü taraf web araçlarının pusuya yattığı ve verilerin dışarı sızdığı 'e-posta limiti krizi' ihtimalini ortadan kaldırır. 


Bunların hepsi cihaz üzerinde dönüşümlerdir: dosyan ya da verin girer, temizlenmiş baytlar çıkar ve **yüklenecek bir sunucu yoktur**. Bunlar, iyi niyetli bir çalışanın aksi halde başvurduğu tipik "dosyanı temizlemek için bir yabancının web sitesine yükle" aracının tam tersidir.



## Determinizm ve yeniden üretilebilirlik

Her araç girdisi bir URL parametresi olarak ifade edilebilir ve aynı girdiler aynı dosyayı üretir. Bunun operatör açısından iki sonucu vardır:

- **URL, çıktının kendisidir.** Bağlantıyı commit'le, varlığı istendiğinde yeniden üret - Git'e ikili dosya eklemek yok, sohbette "en son sürümü" kovalamak yok. Varlık ve araç kimlikleri kalıcı sözleşmelerdir, bu yüzden bugün oluşturulan bir bağlantı ileride de çözümlenmeye devam eder.
- **CLI, GUI ile aynı render yoludur**, bu yüzden derleme hatları ile uygulama asla birbirinden sapmaz. Derleme sırasında OG görsellerini, sosyal kartları ve veri görsellerini yeniden üretilebilir biçimde oluştur.

## Köken ve Content Credentials

Dışa aktarımlar **Content Credentials** taşıyabilir - dosyanın baytlarının bir karmasına (hash) bağlı, imzalı bir [C2PA](https://c2pa.org) manifesti. Dosyada sonradan yapılan herhangi bir değişiklik mührü bozar; böylece C2PA farkındalığı olan bir doğrulayıcı **değişikliği kriptografik olarak, çevrimdışı algılar**. Kimlik bilgisi kurcalamayı *belli eder*: kurcalamayı engellemek yerine işaretler ve tamamen çevrimdışı doğrulamayı mümkün kılan da tam olarak budur.

- **Varsayılan olarak açık, cihaz üzerinde.** İmzalama anahtarı cihazda oluşturulur, çıkarılamaz (Lolly bile onu okuyamaz) ve imzalama yerel olarak gerçekleşir - yalnızca isteğe bağlı kimlik *kaydı* ağa dokunur.
- **Güven katmanları.** Kaydı olmayan bir dışa aktarım yapısal olarak geçerlidir ama anonim olarak imzalanmıştır (`untrusted`). Bir **doğrulanmış kimlik** kaydet (Lolly CA'dan, bir e-postaya bağlı kısa ömürlü sertifika) ve Lolly kökünü sabitleyen doğrulayıcılar `trusted` + imzalayanın e-postasını bildirsin. Güvenilir bir zaman damgası otoritesi ve üçüncü taraf doğrulayıcı yeşili (C2PA uyumluluğu) yol haritasında. Her katman açıktır ve bir dosya yalnızca kanıtlayabildiği güveni iddia eder.
- **Kimlik bilgisi ömrü**, imzalama sırasında operatörün/kullanıcının kararıdır: 7 / 30 / 90 / 365 gün, varsayılan 30.
- **Doğrulama cihaz üzerindedir.** Herhangi bir dosyayı `/verify`'a bırak (ya da `lolly validate <file>`); gerçekten Lolly ile mi yapıldığı ve o günden beri değişmeden mi kaldığına dair çevrimdışı bir rapor al. Bkz. [Content Credentials Kimliği](/info/content-credentials-identity.html).

> **Birlikte çalışabilirlik notları.** Lolly bugün kendi kimlik bilgilerini ve birçok üçüncü taraf kimlik bilgisini çevrimdışı doğrular. İki birlikte çalışabilirlik öğesi üzerinde çalışılıyor: diğer üreticilerden C2PA claim **v2** manifestlerini tam olarak okumak ve WebM - henüz standartlaştırılmış bir C2PA eşlemesi olmadığından Lolly manifesti bir Matroska parçası olarak ekler (üçüncü taraf araçlar Lolly'nin MP4'ünü hazırdan doğrular; WebM, standart oturunca gelir).

## Şifreleme ve parola koruması

Kilitli seyahat etmesi gereken dosyalar için her şey cihaz üzerinde gerçekleşir:

- **PDF açma parolası** - *Standart*, 40-bit bir RC4 caydırıcısıdır (her yerde açılır, bir bağlantıda seyahat edebilir); *Güçlü*, dışa aktarımda yazılan ve asla bir bağlantıya konmayan **AES-256**'dır (PDF 2.0).
- **Kilitli indirmeler** - bir ZIP, bir Projeler klasörü ya da bir toplu çalıştırma bütün olarak kilitlenebilir: *Standart* ZipCrypto (zayıf, evrensel) ya da *Güçlü* **AES-256** (WinZip AE-2). Katmanlı savunma: Güçlü bir zip içindeki herhangi bir PDF *ayrıca* ayrı ayrı AES-256 ile kilitlenir; böylece açıldıktan sonra da kilitli kalır.
- **Parola korumalı paylaşım bağlantıları** - tüm bağlantı durumu, PBKDF2 ile türetilen bir anahtar altında AES-256 ile şifrelenir; yalnızca şifreli metin seyahat eder, parola asla bağlantıda olmaz ve şifre çözme alıcının tarayıcısında gerçekleşir.

## Hava boşluğuna hazır

Hava boşluğu (air-gap), özel bir mod değil, **birinci sınıf bir dağıtımdır** - Lolly, render sırasında ağ olmadan hazırdan çalışır. Web kabuğu, çevrimdışı öncelikli bir PWA'dır (service worker); yazı tipleri ve WASM cihazda saklanır; araç durumu, `localStorage` değil, host köprüsü aracılığıyla yerel olarak kalıcılaştırılır. Ağa ulaşan herhangi bir araç, bunu yalnızca manifestinde bildirmesi gereken bir **izin listesindeki** `host.net` yeteneği üzerinden yapar - bunu yerine getiremeyen (ya da getirmeyen) bir kabuk onu devre dışı bırakır. Kabukları MDM'in üzerinden cihazlara dağıt ya da ağının içinde tek bir örnek sun; tamamen hava boşluklu bir kurulum, eve telefon edecek hiçbir şey olmadan render eder, dışa aktarır, şifreler ve kimlik bilgilerini doğrular.

## Bilmekte fayda var

Devreye almadan önce netleştirmekte fayda olan birkaç şey:

- **Sertleştirme devam ediyor.** Kriptografi ve ayrıştırıcılar, SUSE'nin kurumsal ölçekteki sertleştirme sürecinden geçiyor (yukarıya bak) - bugün tasarım gereği güçlü; bir sözleşme sertifikalı güvence istediğinde katmanlı savunma olarak devreye al.
- **Araç kancaları bir güvenlik korumalı alanı *değildir*.** Bir aracın isteğe bağlı `hooks.js`'i host köprüsü enjekte edilmiş halde çalışır ama bir tarayıcı kabuğunda sayfanın gerçekliğinde (realm) yürür ve `window`/`document`/`fetch`'e *ulaşabilir*. Araç koduna, çalıştırdığın herhangi bir koda davrandığın gibi davran - onu incele. Ortak bir katalog çalıştıran bir kuruluşun bunu Git incelemesinden geçirebilmesinin nedeni budur; her durumda, Worker yalıtımı gelene kadar yalnızca incelediğin araçları çalıştır.
- **Content Credentials kurcalamayı belli eder.** Değişikliği engellemek yerine algılar - yukarıdaki birlikte çalışabilirlik notlarına bak.
- **İki şifreleme katmanı.** *Standart* kilitler hızlı, evrensel caydırıcılardır; *Güçlü* (AES-256) tam korumadır - hassas her şey için Güçlü'ye başvur, modern bir okuyucu istediğini not ederek.

## Sırada nereye

- **[Benimseme ve Yönetişim](/info/adoption-governance.html)** - kişilikler, saptırma metriği ve veri olarak yönetişim tüm ayrıntılarıyla.
- **[Dağıtım](/info/deployment.html)** - dağıt/sun/hibrit, MDM ve hizmetleri kendin barındırma.
- **[Yapılandırma](/info/configuration.html)** - profiller, marka paketleri, yetenek kapıları ve özellik bayrakları.
- **[Gizlilik Politikası](/info/privacy.html)** - resmi "hiçbir şey toplamaz, hiçbir şey yüklemez" beyanı.
