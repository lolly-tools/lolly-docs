# Lolly'yi kullanma

Uygulamayı gerçekten *kullanmaya* dair pratik bir rehber - bir araç açmak, kanvasta çalışmak, dışa aktarmak, kaydetmek ve paylaşmak. Buradaki her şey **cihazında** çalışır: hesap yok, yükleme yok, ilk yüklemeden sonra internet gerekmez.

> Yeni misin? [Hızlı Başlangıç](/info/quickstart.html) seni dakikalar içinde bir şeyler üretir hale getirir, [Operatörler için Lolly](/info/operators.html) ise uygulamayı kurmayı/dağıtmayı anlatır; bu sayfa ise açıldıktan sonra onu kullanmakla ilgili.

## Bir araç açma

![A tool's split view - the control stack on the left, and the live horizontal bar chart it draws on the right](/t/url-shot?url=%2F%23%2Ftool%2Fd3%3Fct%3Dbar%26t%3DExample%2520data%26st%3DSample%2520values%252C%2520not%2520a%2520real%2520dataset%26d%3DMonth%252CSeries%2520A%252CSeries%2520B%252CSeries%2520C%250AJan%252C12%252C9%252C5%250AFeb%252C18%252C14%252C7%250AMar%252C24%252C17%252C11%250AApr%252C29%252C23%252C15%26lg%3D1&width=1440&height=900&dpi=192&waitMs=2500&format=svg&dark=1&filename=vt-tool-split-view)

![The tool gallery - every tool as a card, grouped by category](/t/url-shot?url=%2F%23%2F&width=1440&height=900&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&tolerance=0.03&waitSelector=.gallery-view%5Bdata-shots-settled%5D&walker=1&format=svg&localize=1&dark=1&filename=gallery&sweep=1)


Ana ekran **galeri**dir - kategoriye göre gruplanmış tüm araçlar. Aracı açmak için bir karta tıkla; daha önce üzerinde çalıştıysan bir **Devam Et** düğmesi en son oturumunu sürdürür. İsme göre filtrelemek için arama kutusunu kullan.

Her araç bölünmüş bir görünümdür: bir tarafta **kontroller**, diğer tarafta canlı bir **önizleme** (kanvas). Herhangi bir kontrolü değiştir, önizleme anında güncellenir.

> Birkaç araç (**Layout Studio** gibi) bunun yerine bir **serbest kanvas** olarak açılır - sürükleyip yeniden boyutlandırdığın, döndürdüğün ve hizaladığın metin, şekil ve görsel kutularının bulunduğu, çerçevesiz, doğrudan-manipülasyon yüzeyi; metni yerinde düzenlemek için çift tıklarsın. Diğer her araçla aynı oluşturma yolundan dışa aktarılır, yani kanvas, dosyanın *ta kendisidir*. Aşağıda [Serbest kanvas](#the-free-canvas-layout-studio) bölümüne bak.

## Kanvas (önizleme)

![The zoom HUD in the corner of the canvas - minus, the live percentage, plus, Fit, then the theme and sound toggles](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&css=.stage-nav%7Bopacity%3A1!important%7D&cropSelector=.stage-nav&format=svg&dark=1&filename=use-zoom-hud)

Önizleme her zaman tam olarak dışa aktarılacak şeyi gösterir.

**Masaüstü**

- **Yakınlaştırma:** Cmd/Ctrl ile kaydırma ya da trackpad'de iki parmakla sıkıştırma - yakınlaştırma imlecinin üzerinde ortalanır.
- **Kaydırma (Pan):** **Space** tuşunu basılı tutup sürükle, ya da **orta fare tuşuyla** sürükle. (Düz tıklamalar tasarımın parçalarına tıklamak için serbest kalır.)
- **Klavye:** `0` = pencereye sığdır · `1` = %100 · `+` / `−` = yakınlaştırma.
- **Yakınlaştırma HUD'u:** köşedeki küçük `−  NN%  +  Fit` kontrolü. Sığdır ↔ %100 arasında geçiş yapmak için yüzdeye tıkla.

**Dokunmatik**

- **Sıkıştır** ile yakınlaştır, **sürükle** ile kaydır, sığdırmaya sıfırlamak için **çift dokun**.

**Bir kontrole atlamak için tıkla:** Tasarımdaki herhangi bir öğeye tıkla, ilgili kenar çubuğu girdisi odaklanır ve görünüme kayar - tekrar eden bir satır grubu için tıkladığın satırı tam olarak açar, böylece gördüğünü düzenlemek tek dokunuş uzaklıktadır.

Bir boyut değişikliği görünümü her zaman temiz bir sığdırmaya geri döndürür.

### Serbest kanvas (Layout Studio)

![Layout Studio's free canvas - the artboard with its surrounding pasteboard](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio&width=1440&height=900&dpi=192&waitMs=2000&format=svg&localize=1&dark=1&filename=layout-studio&sweep=1)

Serbest kanvas araçları, bir tasarımcının yapıştırma tahtası gibi, çalışma alanının *etrafına* bir çalışma yüzeyi ekler:

- **Kanvas dışında bekletme.** Bir kutuyu çerçeve kenarının ötesine sürükle, tamamen **görünür ve seçilebilir** kalır - kompozisyonu düzenlerken öğeleri kenara park et, sonra geri sürükle. Çerçevenin dışındaki her şey **hafifçe soluklaştırılır**, böylece dışa aktarım alanı her zaman bir bakışta anlaşılır ve çerçeve, dosyanın tam olarak nerede başladığını göstermek için gölgesini korur.
- **Yalnızca çerçeve dışa aktarılır.** Dışa aktarılan dosya çalışma alanıyla sınırlıdır - dışarıda kalan her şey (ya da bir kutunun kenardan taşan kısmı), hem raster hem vektör formatlarında, çıktıdan basitçe kırpılır.
- **Sığdırın ötesine uzaklaştır** (%20'ye kadar), öğeleri çerçevenin çok dışına yerleştirdiğinde tüm yapıştırma tahtasını görmek için.
- **Yeniden boyutlandırılabilir çalışma alanı.** Dışa aktarım boyutlarını değiştirmek çerçeveyi yerinde yeniden boyutlandırır; kutular konumlarını korur, böylece bir düzeni mevcut içeriğin etrafında yeniden çerçeveleyebilirsin.

## Telefonda

![The free-canvas tool rail: a drag grip, the Lolly menu, then Pointer, Add a box, Pen and Timeline](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio&width=1440&height=900&dpi=192&waitMs=2600&css=.fc-toolbar%7Bopacity%3A1!important%7D&cropSelector=.fc-toolbar&format=svg&dark=1&filename=pen-editor-rail)

![Two pen paths rendered straight from a link: a stroked S-curve and a closed filled blob](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio%3Fboxes%3D%5B%7B%22id%22%3A%22paper%22%2C%22kind%22%3A%22box%22%2C%22x%22%3A0%2C%22y%22%3A0%2C%22w%22%3A1080%2C%22h%22%3A1080%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23ffffff%22%7D%2C%7B%22id%22%3A%22curve%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A140%2C%22y%22%3A180%2C%22w%22%3A800%2C%22h%22%3A420%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%22%2C%22stroke%22%3A%22%234f84ba%22%2C%22strokeW%22%3A14%2C%22path%22%3A%221!cubic!0_.02!.85!!!.25!-.45!s_.5!.5!-.22!.32!.22!-.32!y_.98!.12!-.25!.45!!!s%22%7D%2C%7B%22id%22%3A%22blob%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A340%2C%22y%22%3A620%2C%22w%22%3A400%2C%22h%22%3A320%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23d1e7ff%22%2C%22stroke%22%3A%22%234f84ba%22%2C%22strokeW%22%3A6%2C%22fillRule%22%3A%22nonzero%22%2C%22path%22%3A%221!catmull-rom!1_.5!0_1!.42_.78!1_.22!1_0!.42%22%7D%5D&width=1440&height=900&dpi=192&waitMs=2600&cropSelector=%23tool-canvas&format=svg&dark=1&filename=pen-path-geometry)

![A tool on a phone-width screen - controls as a sheet up top, the generated palette filling the preview below, and the render pill floating bottom-centre](/t/url-shot?url=%2F%23%2Ftool%2Fcolor-palette%3Fseed%3Df97316%26harmony%3Dadjacent-3%26steps%3D9&width=430&height=900&dpi=192&waitMs=2200&format=svg&dark=1&filename=vt-phone-palette)

Dar ekranlarda düzen tek sütun haline gelir:

- **Kontroller üstte bir panele dönüşür**, alt kenarında bir **sürükleme tutamacı** bulunur. Tutamacı sürükleyerek boyutlandır - **kısmi / yarım / tam** konumlarına yapışır - ya da daraltma ↔ genişletme arasında geçiş yapmak için tutamaca **dokun**. Önizleme alttaki alanı doldurur ve sen düzenlerken görünür kalmaya devam eder.
- Yüzen bir **Oluştur** düğmesi **Dışa Aktar** panelini açar - format, boyut, kopyalama, kaydetme ve indirme kontrollerinin tümü tek bir yerde. Arka plana dokunarak kapat.

## Kontroller (girdiler)

![A crescent and a ring with a real hole, both produced by Subtract](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio%3Fboxes%3D%5B%7B%22id%22%3A%22paper%22%2C%22kind%22%3A%22box%22%2C%22x%22%3A0%2C%22y%22%3A0%2C%22w%22%3A1080%2C%22h%22%3A1080%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23ffffff%22%7D%2C%7B%22id%22%3A%22crescent%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A120%2C%22y%22%3A330%2C%22w%22%3A374%2C%22h%22%3A400%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%234f84ba%22%2C%22path%22%3A%221!cubic!1_.750491!.957645!-.128211!-.062578!-.065985!.027232!c_.534759!1!.076762!!-.295339!!c_0!.5!!.276142!!-.276142!c_.534759!0!-.295339!!.200102!!c_1.000984!.254923!-.09169!-.152161!-.021205!-.003239!c_.935829!.25!.022185!!-.221505!!c_.534759!.625!!-.207107!!.14459!c%22%7D%2C%7B%22id%22%3A%22ring%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A580%2C%22y%22%3A330%2C%22w%22%3A400%2C%22h%22%3A400%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%234f84ba%22%2C%22fillRule%22%3A%22nonzero%22%2C%22path%22%3A%221!cubic!1_1!.5!!-.276142!!.276142!c_.5!1!.276142!!-.276142!!c_0!.5!!.276142!!-.276142!c_.5!0!-.276142!!.276142!!c*1!cubic!1_.5!.7!-.110457!!.110457!!c_.7!.5!!.110457!!-.110457!c_.5!.3!.110457!!-.110457!!c_.3!.5!!-.110457!!.110457!c%22%7D%5D&width=1440&height=900&dpi=192&waitMs=2600&cropSelector=%23tool-canvas&format=svg&dark=1&filename=path-ops-boolean-result)

![A tool's control stack - a text field, colour triggers and a slider, and nothing else the author chose to lock down](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&cropSelector=%23tool-inputs&format=svg&dark=1&filename=use-tool-inputs)

Araçlar yalnızca değişmesi amaçlanan girdileri gösterir - geri kalan her şey (renkler, düzen, tipografi, mantık) araç yazarı tarafından sabitlenmiştir, böylece oluşturduğun her şey yazarın koyduğu kurallara uyar. Girdiler arasında metin, kaydırıcılar, renk seçiciler, açılır menüler, tarihler, görsel seçiciler ve tekrar eden satır grupları bulunur. Bazıları katlanabilir bölümler altında gruplanmıştır.

**Sıfırlama:** *Değişiklikleri temizle* her girdiyi varsayılan değerlerine döndürür.

## Bilgilerin ve profil fotoğrafın

![Sequence Studio's timeline: the transport, the ruler, an overlay lane, the magnetic sequence row with its clips and seam chips, and the Always on strip](/t/url-shot?url=%2F%23%2Ftool%2Fsequence-studio&width=1440&height=900&dpi=192&waitMs=7000&css=.tl-panel%7Bheight%3A252px!important%7D&cropSelector=.tl-panel&format=svg&walker=1&tolerance=0.03&dark=1&filename=seq-studio-timeline&sweep=1)

![The whole editing surface: artboard, tool rail and timeline together](/t/url-shot?url=%2F%23%2Ftool%2Fsequence-studio&width=1440&height=900&dpi=192&waitMs=7000&css=.fc-toolbar%7Bopacity%3A1!important%7D&cropSelector=%23tool-stage&format=svg&walker=1&tolerance=0.03&dark=1&filename=seq-studio-stage)

**Profil** (galerinin sağ üstünde) adını, iletişim bilgilerini ve isteğe bağlı bir **profil fotoğrafını** barındırır. Bu alanları isteyen araçlar onları otomatik olarak önceden doldurur - bir kez ayarla, e-posta imzan, lockup'ların ve rozetlerin kendiliğinden dolsun. Yine de her alanı oturum başına geçersiz kılabilirsin. Bir aracın bunları okuyabilmesi için **Bilgilerimi Kullan**'ı etkinleştir.

Profil fotoğrafın ve bilgilerin **yalnızca bu cihazda** yaşar. Bir profil sadece sen olmaktan fazlası olabilir - arada bir üstlendiğin bir takım ya da bir rol. Birden fazlasını tutmak dahil tam tabloyu görmek için **[Profiller](/info/profile.html)** sayfasına bak.

## Kaydetme ve devam etme

![The two-half render pill - an up arrow that opens the export panel, and a tick that saves the session in place](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&css=%23tool-inputs%7Bdisplay%3Anone%7D&cropSelector=.render-pill&format=svg&dark=1&filename=use-render-pill)

Şu anki girdileri o araç için bir oturum olarak kaydetmek için **Kaydet**'e tıkla. Araç başına birden fazla adlandırılmış oturum tutabilirsin; her aracın **Devam Et** düğmesi en son oturumunu yeniden açar, ve **geçmiş düğmesi** (sağ üstte, profilinin yanında) tüm araçlardaki her kaydedilmiş oturumu listeler. Oturumlar cihaza özeldir. Bunları düzenlemek için **Projeler**'i aç (aşağıda).

## Projeler

![Projects - saved sessions organised into nestable folders](/t/url-shot?url=%2F%23%2Fp&width=1440&height=900&dpi=192&waitMs=1200&format=svg&localize=1&dark=1&filename=projects)

**Projeler** - **Araçlar**'ın yanındaki **Projeler** sekmesinden ya da **Profil → Depolama → Projelerde Düzenle**'den aç - kaydettiğin her şey için bir yuvadır ve bir dosya yöneticisi gibi çalışır:

- **İç içe geçebilen klasörler.** Kaydedilmiş oturumları klasörlere, istediğin kadar derinlikte klasörlerin içindeki klasörlere grupla. Bir klasör oluştur, yeniden adlandır, ya da bir kutucuğu başka bir klasörün üzerine sürükleyerek taşı; bir breadcrumb seni yukarı geri götürür. Her zaman var olan bir **Sınıflandırılmamış** klasörü henüz dosyalanmamış her şeyi tutar.
- **Yeni işi doğrudan dosyala.** Bir klasörün içinde, **+ Yeni Araç** bir araç açar ve ilk kaydını otomatik olarak o klasöre dosyalar.
- **Çoklu seçim (masaüstü).** Bir kutucuğun onay kutusunu işaretle, boş kanvasın üzerinde bir seçim kutusu sürükle, ya da **Shift/Cmd-tıkla**; bağlam menüsü için bir kutucuğa **sağ tıkla**. Ardından tüm seçim üzerinde işlem yap.
- **Bir klasörü ya da seçimi tümüyle oluştur.** **Klasörü Oluştur**, bir klasördeki her kaydedilmiş oturumu - alt klasörleri dahil - tek bir iç içe `.zip` olarak dışa aktarır. **Seçimi Oluştur** herhangi bir çoklu seçim için aynısını yapar ve tek bir oturum doğrudan kendi dosyasına oluşturulur. Batch/Pro gerekmez.
- **Kaydedilmiş bir oturumu paylaş.** Bir oturuma sağ tıkla → tam olarak aynı girdilerle yeniden açan bir bağlantıyı kopyalamak için **Bağlantıyı Paylaş** (tam Paylaş penceresi için aşağıya bak).

## Bir bağlantı paylaşma

Her girdi sayfa URL'sinde yakalanır, yani bir bağlantı tasarımın *ta kendisidir*. Dışa aktarma kontrollerindeki **Paylaş**'ı - ya da Projeler'deki herhangi bir kaydedilmiş oturumda **Bağlantıyı Paylaş**'ı - kullanarak **Paylaş penceresini** aç: kopyalamaya hazır bir bağlantı, artı bağlantıyı şifrelemek ve açıldığında ne olacağını (tam ekran, genişletilmiş dışa aktarma paneli, `&export` ile açılışta indirme, ya da `&copy` ile panoya kopyalama) belirlemek için anahtarlar.

Büyük bir tasarım uzun bir URL oluşturur, bu yüzden pencere ayrıca tüm durumu kompakt bir jetona sıkıştıran bir **En Kısa Bağlantı** da sunar - okunabilir biçim de her zaman oradadır. Bir meslektaşına yapıştır, yer imlerine ekle, ya da commit'le. (Tam ayrıntılar: [URL Modu](/info/url-mode.html).)

> Cihazından yüklediğin görseller paylaşılan bir bağlantıya **dahil değildir** - yalnızca kendi makinende var olurlar.

## Canlı kamera (harekete duyarlı araçlar)

Fotoğraf **Filtreleri** - Halftone, Scanline, Posterize, Duotone - bir kameranın kullanılabilir olduğu yerde bir **Canlıya Geç** düğmesi gösterir. Onu aç ve efekt kare kare web kameranı takip eder, böylece harekete tepki verir; sonucu GIF, WebM ya da MP4 olarak kaydedebilirsin. Kareler **cihazında** okunur ve işlenir, asla cihazından çıkmaz, ve durduğun ya da araçtan ayrıldığın anda kamera serbest bırakılır. (Herhangi bir görsel seçicide, tek bir kareyi cihaz üzerinde bir görsel olarak yakalamak için **Fotoğraf Çek** de bulunur.)

## Görsellerim

Bir araç cihazından bir görsel eklemene izin verdiğinde, görsel küçültülür, EXIF/GPS verilerinden arındırılır ve kişisel **Görsellerim** kütüphanende (**Profil → Depolama** altında) kaydedilir. Onu herhangi bir araçta yeniden kullan. Kütüphane sınırlıdır ve tamamen yereldir - görselleri orada yönet ya da sil.

## Katalog - varlık kütüphanen

![The Catalogue - brand assets, swatches and fonts, plus your own uploads](/t/url-shot?url=%2F%23%2Fc%3Fsection%3Dswatches%2Cfonts&width=1440&height=900&dpi=96&waitMs=2400&css=.plat-swatch-grid~%2A%7Bdisplay%3Anone%7D&walker=1&format=svg&localize=1&dark=1&filename=catalogue)

**Katalog** (`#/c`, ya da menüdeki **Katalog** bağlantısı) araçlarının yararlanabileceği her şeyi - marka logoları, görseller, ses ve hareketli görüntü, türe göre gruplanmış - bir araya getirir ve **kendi yaratıcı dosyaların** da burada yaşar. Sunucu yok, yönetim konsolu yok, pull request yok: her şey cihazında.

- **Dosyalarını içeri getir.** Herhangi bir görseli, SVG'yi, ses klibini, videoyu, Lottie'yi ya da PDF'i yükleme alanının üzerine sürükle - ya da seçmek için tıkla - ve anında kataloğuna yerleşir, her aracın varlık seçicisinde kullanıma hazır olur. İstediğin kadar içe aktar; cihazından asla çıkmaz.
- **Sık kullandığını favorile.** Bir varlığı (ya da bir marka renk örneğini) ★ yıldızla ve her seçicinin en üstüne sabitlenir, böylece gözde logon ya da rengin bir tık uzağında olur.
- **Düzenle.** Bir varlığı farklı bir gruba yeniden kategorize et, kullanmadığın paylaşılan bir marka varlığını gizle (geri getirmek için **Gizlenenleri Göster** ile), ya da kendi yüklediklerini tamamen sil.

### Paletini ve yazı tiplerini her yere taşı

![The Swatches panel - the five palette download buttons across the top, then every brand colour as a copyable chip](/t/url-shot?url=%2F%23%2Fc%3Fsection%3Dswatches&width=1440&height=900&dpi=96&waitMs=1800&css=.cat-group%3Anot%28%5Bdata-group%3Dswatches%5D%29%7Bdisplay%3Anone%7D&cropSelector=%5Bdata-group%3Dswatches%5D&walker=1&format=svg&dark=1&filename=use-swatch-downloads)

Kataloğun **Renk Örnekleri** paneli yalnızca referans için değil - bir rengi kopyalamak için tıkla, ya da diğer aracının konuştuğu formatta **markanın tüm paletini indir**:

- **Tasarım belirteçleri (JSON)**, **CSS değişkenleri** ya da **CSS sınıfları** - markayı doğrudan bir stil sayfasına ya da bir derlemeye aktar;
- **Adobe Swatch Exchange (.ase)** - Illustrator ya da Photoshop'a yükle;
- **GIMP paleti (.gpl)** - GIMP ya da Inkscape için.

**Yazı Tipleri** paneli, yerel olarak kurmak ya da bir matbaaya vermek için her marka fontunun yanında bir **indir** ile birlikte listeler. ([Brand Studio](/info/brand-studio.html)'nun Renkler sekmesi aynı palet indirmesini sunar.)

Varlıklar açık, kendin-yap yolunun bir yarısıdır; diğeri **kendi araçlarını yapmaktır** - serbest kanvas (yukarıda anlatılan Layout Studio) kod yazmadan görsel olarak bir tane inşa etmeni sağlar.

## Ses ve erişilebilirlik

Lolly herkes için kullanımı rahat olmayı hedefler. Arayüz klavyeyle gezilebilir, özel kontroller ekran okuyucular için uygun etiketler taşır ve her aracın canlı önizlemesi, ne ürettiğini açıklayan tek, etiketlenmiş bir görsel olarak sunulur.

Nazik bir **yardımcı sesler** katmanı yaptığın şeyi onaylar - galeriye varış, geçerli ya da geçersiz bir Content Credentials kontrolü, bir paneli kapatma, bir filtre değiştirme. **Varsayılan olarak açıktır** ama her zaman isteğe bağlıdır: anahtarın göründüğü her yerde (her görünümün seçenekler açılır penceresi ya da **Profil**) **Ses**'i kapat, seçim hatırlanır.

Bu anahtarın yanında **Neurospicy Modu** bulunur - çalışırken sessizce çalan, isteğe bağlı, sakinleştirici bir arka plan odak parçası. Onu açmak, seni uygulama boyunca takip eden küçük bir **oynatıcı dock'u** köşede açar; oradan bir parça arayabilir ve seçebilir, ileri geri atlayabilir, sesi ayarlayabilir, küçültebilir ya da kapatabilirsin. Parça listesi birkaç kategoriye yayılır - prosedürel *Lolly Sings* melodileri, ambiyans döngüleri ve beat'ler, kendi yüklediğin sesler ve bir avuç canlı internet **radyo** istasyonu (bunlar bağlantı gerektirir; geri kalan her şey çevrimdışı çalar). **Varsayılan olarak kapalıdır** ve, Ses gibi, oturumlar ve cihazlar arasında hatırlanır. Sesi kapatmak odak parçasını da susturur.

## Depolama ve gizlilik

Her şey tarayıcının yerel veritabanında (IndexedDB) saklanır: profilin, kaydedilmiş oturumların, yüklediğin görseller ve indirilen katalog içeriğinin bir önbelleği. **Profil → Depolama** kullanımı gösterir ve şunları yapmana izin verir:

- **Önbelleği Temizle** - indirilen katalog içeriğini at (bir sonraki yüklemede yeniden eşitlenir).
- **Tüm Verilerimi Temizle** - profili, oturumları ve görselleri siler. *Geri alınamaz.*

![The storage card on a phone-width screen: every category of on-device data named, with the Clear all my data button at the bottom](/t/url-shot?url=%2F%23%2Fprofile%3Ffocus%3Dstorage-section&width=430&height=1600&dpi=192&waitMs=2400&css=.welcome-dialog%2C.personalize-nudge%2C.store-manages%2C.storage-subsection%2C.store-selbar%2C.store-chip-val%2C%23store-hero-num%2C%23store-headroom%2C%23store-quota%2C%23store-reclaim%7Bdisplay%3Anone%7D&format=svg&walker=1&cropSelector=%23storage-section&dark=1&filename=pv-storage-clear&sweep=1)

Hiçbir şey hiçbir yere iletilmez. Telemetri yok, bulutta oluşturma yok.

## Başka bir cihaza geçiş

Her şey cihazında yaşadığından, **Profil → Depolama → Başka Bir Cihaza Taşı** her şeyi ikinci bir kuruluma taşımana izin verir - hesap yok, bulut yok:

- **Verilerimi Dışa Aktar**, profilini, her kaydedilmiş oturumu (küçük resmiyle birlikte), yüklediğin görselleri ve tercihlerini (tema, kenar çubuğu genişliği, yerel etkinlik istatistikleri) içeren tek bir `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` dosyasını indirir (ad kısımları profilinden gelir ve ayarlanmamışsa düşürülür; `<n>` aynı gün yapılan dışa aktarımların çakışmaması için günlük bir sayaçtır).
- Diğer kurulumdaki **Veri İçe Aktar…** o dosyayı geri okur. **Birleştirir**: aynı ada sahip her şey (profilin, bir oturum yuvası, bir görsel) içe aktarılan kopyayla değiştirilir; o cihazdaki geri kalan her şey korunur. Kaydedilmiş oturumlar, içe aktardığın görsellerle otomatik olarak yeniden bağlanır.

Katalog önbelleği dahil değildir - yeni cihazda kendini yeniden indirir. Paket düz bir zip'tir (`manifest.json` + `profile.json` + `sessions.json` + `assets.json` + `assets/blobs/…` + `prefs.json`, format kimliği `lolly-backup`), böylece e-posta, USB ya da AirDrop'tan sağlam çıkar ve her kabuk tarafından aynı formatta okunur. Her parçanın bir sağlama toplamı vardır, böylece aktarım sırasında zarar gören bir dosya yarım bozuk şekilde geri yüklenmek yerine içe aktarımda yakalanır. (Tam format özellikleri: [Veri Aktarımı](/info/data-transfer.html).)

## Bir tasarım içe aktarma (Figma, Penpot, Illustrator, InDesign)

Var olan bir tasarımı Lolly'ye getirip üzerinde çalışmaya devam edebilirsin: **Layout Studio**'yu aç, kanvas araç çubuğunda **Tasarım İçe Aktar**'a tıkla ve bir Figma **.fig** ya da SVG, bir Penpot **.penpot**, bir Illustrator **.ai** / **.pdf**, ya da bir InDesign **.idml** seç. Katmanlar serbest kanvasta düzenlenebilir kutulara dönüşür - metin yeniden yazılabilir kalır, görseller **Görsellerim**'e yerleşir, ve tipografi ile renkler marka geneline uyar - sonra sonuç, her diğer oturum gibi kaydedilir, paylaşılır ve oluşturulur. Ayrıştırma tamamen cihazında gerçekleşir. Tam ayrıntı: **[Bir tasarım içe aktar](/info/design-import.html)**.

## Dışa aktarma

Format seçme, çıktı boyutu ve baskı birimleri, şeffaflık, video ve kopyalama/paylaşma dahil tüm ayrıntılar için **[Dışa Aktarma ve Formatlar](/info/exporting.html)** sayfasına bak. Kısaca: bir format seç, gerekiyorsa boyutu ayarla ve **İndir**'e tıkla (ya da panoya **Kopyala**'ya).

## Batch (Pro) modu

![The batch toolbar - zip name, units, DPI and the format every row inherits, with Sessions and Render on the right](/t/url-shot?url=%2F%23%2Fpro&width=1440&height=900&dpi=192&waitMs=3500&cropSelector=.pro-toolbar&format=svg&dark=1&filename=use-batch-toolbar)

Güçlü kullanıcılar için **Batch** (galeriden bağlantılı, varsayılan olarak açık olan Pro özellik bayrağının arkasında) birçok varyasyonu bir kerede oluşturur - her satırın birlikte dışa aktarılan bir girdi seti olduğu bir tablo. Bir kartı bir düzine dile yerelleştirmek ya da her boyut varyantını tek geçişte üretmek için ideal. Satırları yazarak, doğrudan bir e-tablodan yapıştırarak ya da bir CSV içe aktararak doldur (bir tane de dışa aktarabilirsin), ve satır başına format, boyut ve çıktı dosya adını ayarla. Bütün bir tabloyu galeriden yeniden açılan adlandırılmış bir **batch oturumu** olarak kaydet ve her satırı tek bir `.zip` olarak indir.

Batch, **bir şablonun birçok varyantını** bir kerede üretmek içindir. **Zaten kaydettiğin** oturumları yeniden oluşturmak için **Projeler → Klasörü Oluştur / Seçimi Oluştur**'u kullan (yukarıda) - Pro gerekmez.

## Çevrimdışı ve kurulum

Lolly bir PWA'dır. İlk yüklemeden sonra **çevrimdışı** çalışır - uygulama benzeri, tam ekran bir deneyim için tarayıcının adres çubuğundan kur (ya da mobilde *Ana Ekrana Ekle*). Tekrar çevrimiçi olduğunda kendini günceller.
