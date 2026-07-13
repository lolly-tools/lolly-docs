# Operatörler için Lolly

### Geleceğe dönük, katmanlı savunmalı, veri kaybını önleyen ve köken kanıtlayan bir strateji – üstelik aynı zamanda bir yaratıcı üretim platformu

Zaten yaptığın işin etrafını saran kurumsal bağışıklık sistemi — böylece ekiplerinin her gün ihtiyaç duyduğu rutin yaratıcı işler, çevrenin dışına sızmak yerine *içinde* gerçekleşir.

**Senin için ne var.** Hem güvenli *hem de* popüler bir şeye evet diyen kişi olma şansını yakalarsın. Bir sızıntı deliğini kapatıp tasarım talebi kuyruğunu tek hamlede silersin — seni daha az değil, daha çok sevdiren o nadir güvenlik kazanımı. Biri marka dosyalarını bir yükleniciye e-postaladığı ya da müşteri verilerini rastgele bir web aracına yapıştırdığı için gelen sabahın 3'ündeki telefon yok artık; üzerindeki SaaS satıcısı, sözleşme ve denetim yükü azalır; kim neyi onayladı diye sorulduğunda gösterebileceğin eksiksiz bir git kaydın olur. Geceleri rahat uyursun.

Lolly, bir yaratıcı araç olarak yerini hak ediyor: tasarım kuyruğunu ortadan kaldırıyor ve üretim kalitesinde çıktıyı herkesin eline veriyor. Ama bunu bu kadar geniş çapta dağıtmanın *güvenli* olmasının nedeni mimari. Hiçbir şey yüklenmez, her şey yeniden üretilebilir ve her dışa aktarım, nereden geldiğine dair kriptografik bir kayıt taşıyabilir. Bu sayfa, güvenlik ve devreye alma hikâyesidir.

> **Bugün itibarıyla durum.** Lolly'nin güvenlik özellikleri tasarım gereği güçlü ve kriptografi ile dosya ayrıştırma motorları, SUSE'nin kurumsal düzeydeki altyapı sertleştirme sürecinden geçiyor. Aşağıdaki mühürler, cihaz üzerinde imzalama ve şifreleme bugün gerçek ve savunulabilir durumda, bağımsız sertifikasyona doğru olgunlaşıyor — bu yüzden bir sözleşme sertifikalı güvence istediğinde, bu süreç tamamlanana kadar bunları katmanlı savunma olarak devreye al.

## Stratejik avantaj

Rutin yaratıcı işlerin genelde yapılma biçimi bir risk yüzeyi oluşturur: dosyalar dış tasarım yüklenicilerine e-postalanır, marka varlıkları düzinelerce SaaS düzenleyicisine yüklenir, müşteri verileri "sadece hızlı bir görsel yapayım" diye bir yabancının web aracına yapıştırılır. Bunların her biri, kontrolünden çıkan veri demektir.

Lolly bunu tersine çevirir. Bu sızıntılara *yol açan* iş — alıntı kartı, yerelleştirilmiş banner, etkinlik rozeti, sansürlenmiş ekran görüntüsü — artık çalışanın kendi cihazında, senin markana karşı, araya hiçbir sunucu girmeden çalışan bir araç üzerinde gerçekleşir. Riskli bir iş akışının üzerine bir kontrol eklemedin; riskli iş akışını, başından beri sızıntı yolu olmayan bir başkasıyla değiştirdin.

- **Yapılandırma senindir.** Motor ve kabuklar açık kaynaktır (MPL-2.0). Kendi kimlik doğrulamanı, telemetrini veya CA'nı üzerine ekle; ister barındır ister barındırma; özellik ve maliyet üzerinde tam kontrol sende olur, git ile takip edilir, bir SaaS veritabanına kilitlenmez.
- **Yönetişim, bir panodan çok veri olabilir.** Bu kontrolü istediğinde, araç katalogunu bir Git deposu olarak yönet — pull request incelemesi marka onayına dönüşür, çalışanlarının dokunabileceği her şablon için eksiksiz bir denetim izi ve anlık geri alma imkânıyla. Bu bir seçenektir, zorunluluk değil: sadece bir şeyler üretmek isteyen ekipler kendi araçlarını Layout Studio'da yazar ve kendi dosyalarını, git'e hiç dokunmadan, tamamen uygulama içinden kataloğa aktarır. Bkz. [Benimseme ve Yönetişim](/info/adoption-governance.html).
- **Koruma bariyerleri yapısaldır.** Marka kısıtlamaları, insanların görmezden gelebileceği kurallar olarak yayımlanmaz; doğrudan şablonlara gömülüdür. Yanlış çıktı caydırılmaz — zaten temsil edilemez.

## İçerik üretimini artırırken talep kuyruğunu sil.

Lolly'nin hedeflerinden biri **tasarım talebi saptırma**: varlığa ihtiyaç duyan kişinin onu birkaç dakikada, doğru biçimde kendisinin oluşturması sayesinde hiçbir zaman bir tasarımcıya ulaşması gerekmeyen rutin talepler. Saptırılan her talep hem bir verimlilik kazancıdır hem de el değiştiren bir dosya eksiltir.

Lolly, kurumunun gerçekte nasıl çalıştığına uyacak şekilde tasarlanmıştır — devreye almanın tek bir doğru yolu yoktur:

- **Sunma, doğrudan dağıt.** Lolly'yi mevcut MDM'in üzerinden (Intune, Jamf, Munki…) cihazlara dağıt. Yerel olarak bir masaüstü/mobil uygulama ya da çevrimdışı bir PWA olarak çalışır — herhangi bir güvenlik duvarının arkasında, herhangi bir hava boşluklu ortamda çalışır, bakılacak bir sunucu yoktur ve güncelleme temposu BT'nin kontrolündedir.
- **Yalnızca sun.** Ağının içinde (ya da bir VPN'in arkasında) tek bir örnek çalıştır; kullanıcılar tarayıcıdan erişir, hiçbir şey kurulmaz. Bir aracı bir kez yayımla, herkes anında sahip olsun; erişim kontrolü için IdP'inle eşleştir.
- **Hibrit.** Çevrimdışı saha çalışması için yerel uygulamalar, ödünç alınan makineler için her zaman güncel bir tarayıcı sürümü — ikisi de aynı araç kitaplığına bağlı.

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

- **URL, çıktının kendisidir.** Bağlantıyı commit'le, varlığı istendiğinde yeniden üret — Git'e ikili dosya eklemek yok, sohbette "en son sürümü" kovalamak yok. Varlık ve araç kimlikleri kalıcı sözleşmelerdir, bu yüzden bugün oluşturulan bir bağlantı ileride de çözümlenmeye devam eder.
- **CLI, GUI ile aynı render yoludur**, bu yüzden derleme hatları ile uygulama asla birbirinden sapmaz. Derleme sırasında OG görsellerini, sosyal kartları ve veri görsellerini yeniden üretilebilir biçimde oluştur.

