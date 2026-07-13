# Lolly'yi kullanma

Uygulamayı gerçekten *kullanmaya* dair pratik bir rehber — bir araç açmak, kanvasta çalışmak, dışa aktarmak, kaydetmek ve paylaşmak. Buradaki her şey **cihazında** çalışır: hesap yok, yükleme yok, ilk yüklemeden sonra internet gerekmez.

> Yeni misin? [Hızlı Başlangıç](/info/quickstart.html) seni dakikalar içinde bir şeyler üretir hale getirir, [Operatörler için Lolly](/info/operators.html) ise uygulamayı kurmayı/dağıtmayı anlatır; bu sayfa ise açıldıktan sonra onu kullanmakla ilgili.

## Bir araç açma

Ana ekran **galeri**dir — kategoriye göre gruplanmış tüm araçlar. Aracı açmak için bir karta tıkla; daha önce üzerinde çalıştıysan bir **Devam Et** düğmesi en son oturumunu sürdürür. İsme göre filtrelemek için arama kutusunu kullan.

Her araç bölünmüş bir görünümdür: bir tarafta **kontroller**, diğer tarafta canlı bir **önizleme** (kanvas). Herhangi bir kontrolü değiştir, önizleme anında güncellenir.

> Birkaç araç (**Layout Studio** gibi) bunun yerine bir **serbest kanvas** olarak açılır — sürükleyip yeniden boyutlandırdığın, döndürdüğün ve hizaladığın metin, şekil ve görsel kutularının bulunduğu, çerçevesiz, doğrudan-manipülasyon yüzeyi; metni yerinde düzenlemek için çift tıklarsın. Diğer her araçla aynı oluşturma yolundan dışa aktarılır, yani kanvas, dosyanın *ta kendisidir*. Aşağıda [Serbest kanvas](#the-free-canvas-layout-studio) bölümüne bak.

## Kanvas (önizleme)

Önizleme her zaman tam olarak dışa aktarılacak şeyi gösterir.

**Masaüstü**

- **Yakınlaştırma:** Cmd/Ctrl ile kaydırma ya da trackpad'de iki parmakla sıkıştırma — yakınlaştırma imlecinin üzerinde ortalanır.
- **Kaydırma (Pan):** **Space** tuşunu basılı tutup sürükle, ya da **orta fare tuşuyla** sürükle. (Düz tıklamalar tasarımın parçalarına tıklamak için serbest kalır.)
- **Klavye:** `0` = pencereye sığdır · `1` = %100 · `+` / `−` = yakınlaştırma.
- **Yakınlaştırma HUD'u:** köşedeki küçük `−  NN%  +  Fit` kontrolü. Sığdır ↔ %100 arasında geçiş yapmak için yüzdeye tıkla.

**Dokunmatik**

- **Sıkıştır** ile yakınlaştır, **sürükle** ile kaydır, sığdırmaya sıfırlamak için **çift dokun**.

**Bir kontrole atlamak için tıkla:** Tasarımdaki herhangi bir öğeye tıkla, ilgili kenar çubuğu girdisi odaklanır ve görünüme kayar — tekrar eden bir satır grubu için tıkladığın satırı tam olarak açar, böylece gördüğünü düzenlemek tek dokunuş uzaklıktadır.

Bir boyut değişikliği görünümü her zaman temiz bir sığdırmaya geri döndürür.

### Serbest kanvas (Layout Studio)

Serbest kanvas araçları, bir tasarımcının yapıştırma tahtası gibi, çalışma alanının *etrafına* bir çalışma yüzeyi ekler:

- **Kanvas dışında bekletme.** Bir kutuyu çerçeve kenarının ötesine sürükle, tamamen **görünür ve seçilebilir** kalır — kompozisyonu düzenlerken öğeleri kenara park et, sonra geri sürükle. Çerçevenin dışındaki her şey **hafifçe soluklaştırılır**, böylece dışa aktarım alanı her zaman bir bakışta anlaşılır ve çerçeve, dosyanın tam olarak nerede başladığını göstermek için gölgesini korur.
- **Yalnızca çerçeve dışa aktarılır.** Dışa aktarılan dosya çalışma alanıyla sınırlıdır — dışarıda kalan her şey (ya da bir kutunun kenardan taşan kısmı), hem raster hem vektör formatlarında, çıktıdan basitçe kırpılır.
- **Sığdırın ötesine uzaklaştır** (%20'ye kadar), öğeleri çerçevenin çok dışına yerleştirdiğinde tüm yapıştırma tahtasını görmek için.
- **Yeniden boyutlandırılabilir çalışma alanı.** Dışa aktarım boyutlarını değiştirmek çerçeveyi yerinde yeniden boyutlandırır; kutular konumlarını korur, böylece bir düzeni mevcut içeriğin etrafında yeniden çerçeveleyebilirsin.

## Telefonda

Dar ekranlarda düzen tek sütun haline gelir:

- **Kontroller üstte bir panele dönüşür**, alt kenarında bir **sürükleme tutamacı** bulunur. Tutamacı sürükleyerek boyutlandır — **kısmi / yarım / tam** konumlarına yapışır — ya da daraltma ↔ genişletme arasında geçiş yapmak için tutamaca **dokun**. Önizleme alttaki alanı doldurur ve sen düzenlerken görünür kalmaya devam eder.
- Yüzen bir **Oluştur** düğmesi **Dışa Aktar** panelini açar — format, boyut, kopyalama, kaydetme ve indirme kontrollerinin tümü tek bir yerde. Arka plana dokunarak kapat.

## Kontroller (girdiler)

Araçlar yalnızca değişmesi amaçlanan girdileri gösterir — geri kalan her şey (renkler, düzen, tipografi, mantık) araç yazarı tarafından sabitlenmiştir, böylece oluşturduğun her şey yazarın koyduğu kurallara uyar. Girdiler arasında metin, kaydırıcılar, renk seçiciler, açılır menüler, tarihler, görsel seçiciler ve tekrar eden satır grupları bulunur. Bazıları katlanabilir bölümler altında gruplanmıştır.

**Sıfırlama:** *Değişiklikleri temizle* her girdiyi varsayılan değerlerine döndürür.

## Bilgilerin ve profil fotoğrafın

**Profil** (galerinin sağ üstünde) adını, iletişim bilgilerini ve isteğe bağlı bir **profil fotoğrafını** barındırır. Bu alanları isteyen araçlar onları otomatik olarak önceden doldurur — bir kez ayarla, e-posta imzan, lockup'ların ve rozetlerin kendiliğinden dolsun. Yine de her alanı oturum başına geçersiz kılabilirsin. Bir aracın bunları okuyabilmesi için **Bilgilerimi Kullan**'ı etkinleştir.

Profil fotoğrafın ve bilgilerin **yalnızca bu cihazda** yaşar. Bir profil sadece sen olmaktan fazlası olabilir — arada bir üstlendiğin bir takım ya da bir rol. Birden fazlasını tutmak dahil tam tabloyu görmek için **[Profiller](/info/profile.html)** sayfasına bak.

## Kaydetme ve devam etme

Şu anki girdileri o araç için bir oturum olarak kaydetmek için **Kaydet**'e tıkla. Araç başına birden fazla adlandırılmış oturum tutabilirsin; her aracın **Devam Et** düğmesi en son oturumunu yeniden açar, ve **geçmiş düğmesi** (sağ üstte, profilinin yanında) tüm araçlardaki her kaydedilmiş oturumu listeler. Oturumlar cihaza özeldir. Bunları düzenlemek için **Projeler**'i aç (aşağıda).

## Projeler

**Projeler** — **Araçlar**'ın yanındaki **Projeler** sekmesinden ya da **Profil → Depolama → Projelerde Düzenle**'den aç — kaydettiğin her şey için bir yuvadır ve bir dosya yöneticisi gibi çalışır:

- **İç içe geçebilen klasörler.** Kaydedilmiş oturumları klasörlere, istediğin kadar derinlikte klasörlerin içindeki klasörlere grupla. Bir klasör oluştur, yeniden adlandır, ya da bir kutucuğu başka bir klasörün üzerine sürükleyerek taşı; bir breadcrumb seni yukarı geri götürür. Her zaman var olan bir **Sınıflandırılmamış** klasörü henüz dosyalanmamış her şeyi tutar.
- **Yeni işi doğrudan dosyala.** Bir klasörün içinde, **+ Yeni Araç** bir araç açar ve ilk kaydını otomatik olarak o klasöre dosyalar.
- **Çoklu seçim (masaüstü).** Bir kutucuğun onay kutusunu işaretle, boş kanvasın üzerinde bir seçim kutusu sürükle, ya da **Shift/Cmd-tıkla**; bağlam menüsü için bir kutucuğa **sağ tıkla**. Ardından tüm seçim üzerinde işlem yap.
- **Bir klasörü ya da seçimi tümüyle oluştur.** **Klasörü Oluştur**, bir klasördeki her kaydedilmiş oturumu — alt klasörleri dahil — tek bir iç içe `.zip` olarak dışa aktarır. **Seçimi Oluştur** herhangi bir çoklu seçim için aynısını yapar ve tek bir oturum doğrudan kendi dosyasına oluşturulur. Batch/Pro gerekmez.
- **Kaydedilmiş bir oturumu paylaş.** Bir oturuma sağ tıkla → tam olarak aynı girdilerle yeniden açan bir bağlantıyı kopyalamak için **Bağlantıyı Paylaş** (tam Paylaş penceresi için aşağıya bak).

## Bir bağlantı paylaşma

Her girdi sayfa URL'sinde yakalanır, yani bir bağlantı tasarımın *ta kendisidir*. Dışa aktarma kontrollerindeki **Paylaş**'ı — ya da Projeler'deki herhangi bir kaydedilmiş oturumda **Bağlantıyı Paylaş**'ı — kullanarak **Paylaş penceresini** aç: kopyalamaya hazır bir bağlantı, artı bağlantıyı şifrelemek ve açıldığında ne olacağını (tam ekran, genişletilmiş dışa aktarma paneli, `&export` ile açılışta indirme, ya da `&copy` ile panoya kopyalama) belirlemek için anahtarlar.

Büyük bir tasarım uzun bir URL oluşturur, bu yüzden pencere ayrıca tüm durumu kompakt bir jetona sıkıştıran bir **En Kısa Bağlantı** da sunar — okunabilir biçim de her zaman oradadır. Bir meslektaşına yapıştır, yer imlerine ekle, ya da commit'le. (Tam ayrıntılar: [URL Modu](/info/url-mode.html).)

> Cihazından yüklediğin görseller paylaşılan bir bağlantıya **dahil değildir** — yalnızca kendi makinende var olurlar.

## Canlı kamera (harekete duyarlı araçlar)

Fotoğraf **Filtreleri** — Halftone, Scanline, Posterize, Duotone — bir kameranın kullanılabilir olduğu yerde bir **Canlıya Geç** düğmesi gösterir. Onu aç ve efekt kare kare web kameranı takip eder, böylece harekete tepki verir; sonucu GIF, WebM ya da MP4 olarak kaydedebilirsin. Kareler **cihazında** okunur ve işlenir, asla cihazından çıkmaz, ve durduğun ya da araçtan ayrıldığın anda kamera serbest bırakılır. (Herhangi bir görsel seçicide, tek bir kareyi cihaz üzerinde bir görsel olarak yakalamak için **Fotoğraf Çek** de bulunur.)

## Görsellerim

Bir araç cihazından bir görsel eklemene izin verdiğinde, görsel küçültülür, EXIF/GPS verilerinden arındırılır ve kişisel **Görsellerim** kütüphanende (**Profil → Depolama** altında) kaydedilir. Onu herhangi bir araçta yeniden kullan. Kütüphane sınırlıdır ve tamamen yereldir — görselleri orada yönet ya da sil.

## Katalog — varlık kütüphanen

**Katalog** (`#/c`, ya da menüdeki **Katalog** bağlantısı) araçlarının yararlanabileceği her şeyi — marka logoları, görseller, ses ve hareketli görüntü, türe göre gruplanmış — bir araya getirir ve **kendi yaratıcı dosyaların** da burada yaşar. Sunucu yok, yönetim konsolu yok, pull request yok: her şey cihazında.

- **Dosyalarını içeri getir.** Herhangi bir görseli, SVG'yi, ses klibini, videoyu, Lottie'yi ya da PDF'i yükleme alanının üzerine sürükle — ya da seçmek için tıkla — ve anında kataloğuna yerleşir, her aracın varlık seçicisinde kullanıma hazır olur. İstediğin kadar içe aktar; cihazından asla çıkmaz.
- **Sık kullandığını favorile.** Bir varlığı (ya da bir marka renk örneğini) ★ yıldızla ve her seçicinin en üstüne sabitlenir, böylece gözde logon ya da rengin bir tık uzağında olur.
- **Düzenle.** Bir varlığı farklı bir gruba yeniden kategorize et, kullanmadığın paylaşılan bir marka varlığını gizle (geri getirmek için **Gizlenenleri Göster** ile), ya da kendi yüklediklerini tamamen sil.

### Paletini ve yazı tiplerini her yere taşı

Kataloğun **Renk Örnekleri** paneli yalnızca referans için değil — bir rengi kopyalamak için tıkla, ya da diğer aracının konuştuğu formatta **markanın tüm paletini indir**:

- **Tasarım belirteçleri (JSON)**, **CSS değişkenleri** ya da **CSS sınıfları** — markayı doğrudan bir stil sayfasına ya da bir derlemeye aktar;
- **Adobe Swatch Exchange (.ase)** — Illustrator ya da Photoshop'a yükle;
- **GIMP paleti (.gpl)** — GIMP ya da Inkscape için.

**Yazı Tipleri** paneli, yerel olarak kurmak ya da bir matbaaya vermek için her marka fontunun yanında bir **indir** ile birlikte listeler. ([Brand Studio](/info/brand-studio.html)'nun Renkler sekmesi aynı palet indirmesini sunar.)

Varlıklar açık, kendin-yap yolunun bir yarısıdır; diğeri **kendi araçlarını yapmaktır** — serbest kanvas (yukarıda anlatılan Layout Studio) kod yazmadan görsel olarak bir tane inşa etmeni sağlar.

## Ses ve erişilebilirlik

Lolly herkes için kullanımı rahat olmayı hedefler. Arayüz klavyeyle gezilebilir, özel kontroller ekran okuyucular için uygun etiketler taşır ve her aracın canlı önizlemesi, ne ürettiğini açıklayan tek, etiketlenmiş bir görsel olarak sunulur.

Nazik bir **yardımcı sesler** katmanı yaptığın şeyi onaylar — galeriye varış, geçerli ya da geçersiz bir Content Credentials kontrolü, bir paneli kapatma, bir filtre değiştirme. **Varsayılan olarak açıktır** ama her zaman isteğe bağlıdır: anahtarın göründüğü her yerde (her görünümün seçenekler açılır penceresi ya da **Profil**) **Ses**'i kapat, seçim hatırlanır.

Bu anahtarın yanında **Neurospicy Modu** bulunur — çalışırken sessizce çalan, isteğe bağlı, sakinleştirici bir arka plan odak parçası. Onu açmak, seni uygulama boyunca takip eden küçük bir **oynatıcı dock'u** köşede açar; oradan bir parça arayabilir ve seçebilir, ileri geri atlayabilir, sesi ayarlayabilir, küçültebilir ya da kapatabilirsin. Parça listesi birkaç kategoriye yayılır — prosedürel *Lolly Sings* melodileri, ambiyans döngüleri ve beat'ler, kendi yüklediğin sesler ve bir avuç canlı internet **radyo** istasyonu (bunlar bağlantı gerektirir; geri kalan her şey çevrimdışı çalar). **Varsayılan olarak kapalıdır** ve, Ses gibi, oturumlar ve cihazlar arasında hatırlanır. Sesi kapatmak odak parçasını da susturur.

## Depolama ve gizlilik

Her şey tarayıcının yerel veritabanında (IndexedDB) saklanır: profilin, kaydedilmiş oturumların, yüklediğin görseller ve indirilen katalog içeriğinin bir önbelleği. **Profil → Depolama** kullanımı gösterir ve şunları yapmana izin verir:

- **Önbelleği Temizle** — indirilen katalog içeriğini at (bir sonraki yüklemede yeniden eşitlenir).
- **Tüm Verilerimi Temizle** — profili, oturumları ve görselleri siler. *Geri alınamaz.*

Hiçbir şey hiçbir yere iletilmez. Telemetri yok, bulutta oluşturma yok.

## Başka bir cihaza geçiş

Her şey cihazında yaşadığından, **Profil → Depolama → Başka Bir Cihaza Taşı** her şeyi ikinci bir kuruluma taşımana izin verir — hesap yok, bulut yok:

- **Verilerimi Dışa Aktar**, profilini, her kaydedilmiş oturumu (küçük resmiyle birlikte), yüklediğin görselleri ve tercihlerini (tema, kenar çubuğu genişliği, yerel etkinlik istatistikleri) içeren tek bir `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` dosyasını indirir (ad kısımları profilinden gelir ve ayarlanmamışsa düşürülür; `<n>` aynı gün yapılan dışa aktarımların çakışmaması için günlük bir sayaçtır).
- Diğer kurulumdaki **Veri İçe Aktar…** o dosyayı geri okur. **Birleştirir**: aynı ada sahip her şey (profilin, bir oturum yuvası, bir görsel) içe aktarılan kopyayla değiştirilir; o cihazdaki geri kalan her şey korunur. Kaydedilmiş oturumlar, içe aktardığın görsellerle otomatik olarak yeniden bağlanır.

Katalog önbelleği dahil değildir — yeni cihazda kendini yeniden indirir. Paket düz bir zip'tir (`manifest.json` + `profile.json` + `sessions.json` + `assets.json` + `assets/blobs/…` + `prefs.json`, format kimliği `lolly-backup`), böylece e-posta, USB ya da AirDrop'tan sağlam çıkar ve her kabuk tarafından aynı formatta okunur. Her parçanın bir sağlama toplamı vardır, böylece aktarım sırasında zarar gören bir dosya yarım bozuk şekilde geri yüklenmek yerine içe aktarımda yakalanır. (Tam format özellikleri: [Veri Aktarımı](/info/data-transfer.html).)

## Bir tasarım içe aktarma (Figma, Penpot, Illustrator, InDesign)

Var olan bir tasarımı Lolly'ye getirip üzerinde çalışmaya devam edebilirsin: **Layout Studio**'yu aç, kanvas araç çubuğunda **Tasarım İçe Aktar**'a tıkla ve bir Figma **.fig** ya da SVG, bir Penpot **.penpot**, bir Illustrator **.ai** / **.pdf**, ya da bir InDesign **.idml** seç. Katmanlar serbest kanvasta düzenlenebilir kutulara dönüşür — metin yeniden yazılabilir kalır, görseller **Görsellerim**'e yerleşir, ve tipografi ile renkler marka geneline uyar — sonra sonuç, her diğer oturum gibi kaydedilir, paylaşılır ve oluşturulur. Ayrıştırma tamamen cihazında gerçekleşir. Tam ayrıntı: **[Bir tasarım içe aktar](/info/design-import.html)**.

## Dışa aktarma

Format seçme, çıktı boyutu ve baskı birimleri, şeffaflık, video ve kopyalama/paylaşma dahil tüm ayrıntılar için **[Dışa Aktarma ve Formatlar](/info/exporting.html)** sayfasına bak. Kısaca: bir format seç, gerekiyorsa boyutu ayarla ve **İndir**'e tıkla (ya da panoya **Kopyala**'ya).

## Batch (Pro) modu

Güçlü kullanıcılar için **Batch** (galeriden bağlantılı, varsayılan olarak açık olan Pro özellik bayrağının arkasında) birçok varyasyonu bir kerede oluşturur — her satırın birlikte dışa aktarılan bir girdi seti olduğu bir tablo. Bir kartı bir düzine dile yerelleştirmek ya da her boyut varyantını tek geçişte üretmek için ideal. Satırları yazarak, doğrudan bir e-tablodan yapıştırarak ya da bir CSV içe aktararak doldur (bir tane de dışa aktarabilirsin), ve satır başına format, boyut ve çıktı dosya adını ayarla. Bütün bir tabloyu galeriden yeniden açılan adlandırılmış bir **batch oturumu** olarak kaydet ve her satırı tek bir `.zip` olarak indir.

Batch, **bir şablonun birçok varyantını** bir kerede üretmek içindir. **Zaten kaydettiğin** oturumları yeniden oluşturmak için **Projeler → Klasörü Oluştur / Seçimi Oluştur**'u kullan (yukarıda) — Pro gerekmez.

## Çevrimdışı ve kurulum

Lolly bir PWA'dır. İlk yüklemeden sonra **çevrimdışı** çalışır — uygulama benzeri, tam ekran bir deneyim için tarayıcının adres çubuğundan kur (ya da mobilde *Ana Ekrana Ekle*). Tekrar çevrimiçi olduğunda kendini günceller.
