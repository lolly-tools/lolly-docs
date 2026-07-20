# SSS

`/info` açılış sayfasındaki akordeonda gösterilen sıkça sorulan sorular.

**Nasıl bakımı yapılır:** aşağıdaki her `##` başlığı bir sorudur; altındaki her şey
(bir sonraki `##`'ye kadar) cevaptır. Cevaplar, sitenin geri kalanıyla aynı hafif
markdown'u kullanır - paragrafları boş bir satırla ayır. Soruları burada ekle, kaldır
veya yeniden sırala ve `npm run build:info` komutunu (ya da `npm run dev:web`'i)
yeniden çalıştır. İlk `##`'den önceki her şey (bu başlık ve bu notlar) derleme
tarafından yok sayılır.

## /profile sayfasında opt-in yaptığımda ne olur?

Lolly'yi ilk kullandığında, her yere yazdığın her şey, o bilgiyi bilerek bir medya ya da paylaşım bağlantısıyla (çevrimiçiyken) dışarı çıkarmak istemedikçe tamamen özel kalır.

Opt-in seçili olduğunda, seni kaynak olarak tanımlamak için profil bilgilerinin bir kısmını varlıklara ve paketlere köken bilgisi olarak gömüyoruz.

Lolly büyük hacimde içerik üretir. Riski önlemek için sıkı bir veri minimizasyonu yaklaşımı benimsiyoruz.

### Özellik bayrakları nedir?

Özellik bayrakları, Lolly'nin bazı bölümlerini açıp kapatır. Genellikle bunları bir yönetici kontrol eder - Lolly'de kontrol sende.

## Mobil veya masaüstü uygulamalarını nasıl alırım?

Herkes kendi uygulamasını dağıtabilir; bu uygulamaların araçları ve yapılandırması, hangi kitleye yönelik olduğuna bağlı olarak büyük ölçüde değişir. Yani sen yapmadıkça ya da ilgili biri sana vermedikçe tek bir uygulama yoktur.

## Neden "Lolly Tools" ismi?

**Lolly** Çünkü özgürlük tatlıdır.
**Tools** kullanılmadığında hareketsizdir. Seni gözetlemez, gizli programlar çalıştırmaz,
Onu çalıştır - emirlerin, eylemlerin ve şartların geçerlidir.

**Lolly**, Avustralya, Yeni Zelanda ve İngiltere'de 'şeker' ya da 'tatlı' anlamına gelen bir terimdir. Lolly'ler gibi, araçlar da onlara ihtiyacı olan kişiler için çok lezzetlidir.

Ayrıca bu yaklaşımla kazandığımız zamana ve tasarruf ettiğimiz faturalara gülüyoruz.

## Lolly'yi benimserken ne gibi engellerle karşılaşabilirim?

Lolly, dosya ürettiğin her yere zaten oturur - CLI, uygulamayla aynı motoru kullanır,
bu yüzden gece 2'de çalışan bir pipeline, bir kişinin tarayıcıda gördüğü önizlemeden
asla sapmaz. Benimsemenin önündeki sürtünme nadiren tekniktir; kurumsaldır. Şunları bekle:

**Küratörlü bir marka kataloğu oluşturulmalıdır.** Lolly bir platformdur, şablonlarının
hazır bir paketi değildir. *Yönetilen bir dağıtım* için biri, paylaşılan varlık kataloğunu
(logolar, paletler, kalıcı ID'ler olarak yazı tipleri) tanımlar ve her çıktı türü için
manifest + şablon yazar. Ancak bireylerin bunu beklemesine gerek yoktur - açık uygulamada
herkes kendi dosyalarını kataloğa içe aktarabilir ve daha ilk günden Layout Studio'da
araçlar oluşturabilir.

**Git üzerinden yönetişim isteğe bağlıdır - ve mühendis olmayanlar için tanıdık değildir.**
*Paylaşılan, denetimli* bir katalog işletiyorsan, "PR incelemesi *tam da* moderasyondur"
mühendisler için zarif, çoğu marka ve pazarlama ekibi için ise yabancı bir yaklaşımdır.
Marka kararlarının sahibi olan kişiler git içinde yaşamıyorsa, onları köprüleyen bir iş
akışına ihtiyacın olur - ya da IT sessizce stratejik tasarım ortağı ve daha geniş kurumsal
kapı bekçisi haline gelir (uzun soluklu üretim ortamlarında birçoklarının tercih ettiği
gibi). Bunu istemeyen ekipler bunu basitçe atlar.

**Bilerek dar tutulmuştur - bu şekilde çerçevele.** Lolly, özel yapım ya da hero içerik
için değildir. O, tasarım sistemin, araçların ve kataloğunla beslenip güçlendirilmiş
*gerçek* kişisel DAM'ındır - ve açık bir kanvası (Layout Studio) *gerçekten de* vardır,
ama orada bile renkler, tipografi ve varlıklar etkin tasarım globalleriyle uyumlu kalır,
böylece serbest düzenleme sistemin içinde kalır. Figma ya da Canva'yla karşılaştırıldığında
sınırlı görünür. Ne olduğu haliyle değerlendirildiğinde - kurumsallaşmış, tekrarlı, devasa
ölçekli varlık üretimi - hiçbir şey onunla yarışamaz. Yanlış çerçeveleme en sık karşılaşılan
aksaklıktır.

**Üretim tarafında değişim yönetimi.** Mevcut süreçler bugün çalışıyor, çıktı marka dışı
olsa bile. Onları motora yönlendirmek yeniden test etmeyi ve yeniden öğrenmeyi gerektirir,
ve "zaten dosya üretebiliyoruz" göçü ertelemek için bir bahaneye dönüşür. Yüksek
görünürlüğe sahip, üretim kalitesindeki tek bir çıktıyı dönüştürerek ve öncesini/sonrasını
yan yana göstererek başla.

Lolly her şeyi yukarı taşır.


## Yardımcı araçları araçlardan farklı kılan nedir?

**Temel Cevap →** Yardımcı araçların her zaman render etmesi gerekmez, bu yüzden farklı bir UX alabilirler.

**Gerçek Cevap →** Yardımcı araçların Lolly Tools içinde barındırılabilir olmasının nedeni, veri sızdırmayı caydırmak için bir 'kolaylık katmanı' savunması daha eklemektir.

Neden? Çünkü her gün insanların, zaten ellerinde olan **gizli içerikleri** alıp küçük,
mekanik bir işlemi gerçekleştirmesi için rastgele bir web sitesine verdiği biliniyor:

- "**Bu PDF'i sıkıştır**" → bir sözleşmeyi / bordroyu / yönetim kurulu sunumunu bilinmeyen taraflara yükler.
- "**HEIC'i JPG'ye dönüştür**" → kişisel fotoğrafları (GPS EXIF verisiyle birlikte) reklamla finanse edilen bir sunucuya yükler
- "**bu görseli kırp / yeniden boyutlandır**" → bir ürün ekran görüntüsünü ya da henüz yayınlanmamış bir varlığı yükler
- "**bu JSON'u biçimlendir**" / "bu JWT'yi çöz" → API yanıtlarını, tokenları, sırları bir biçimlendiriciye yapıştırır
- "**bu PDF'leri birleştir**" → **asla aynı sunucuyu paylaşmaması gereken iki belgeyi** yükler

Bu siteler ve devasa klon kuyruğu, bilinmeyen saklama süreleri, bilinmeyen yargı yetkileri,
bilinmeyen alt işlemciler ve sana verdiğin her şeyi elde tutmak için her türlü teşvike
sahip bir reklam/ortaklık iş modeliyle **varsayılan olarak güvenilir değildir**. İşlem
önemsizdir; **içerik ise bedeldir.**

Yönetişim savaşını mükemmel kolaylık ve hizmetle kazanıyoruz.

## Lolly, Figma, Penpot, Illustrator veya InDesign dosyalarımı düzenleyip render edebilir mi?

Evet. **Layout Studio**'yu aç ve **Bir tasarım içe aktar**'a tıkla: yerel bir Figma **.fig** dosyasını (Save local copy), bir Penpot **.penpot** dışa aktarımını, bir Illustrator **.ai** veya **.pdf** dosyasını, bir InDesign **.idml** dosyasını (File → Export → InDesign Markup) ya da **herhangi bir SVG**'yi (geniş kapı - hemen hemen her tasarım uygulaması bunu dışa aktarır) kabul eder. Her şey tamamen cihazında ayrıştırılır, hesap veya eklenti gerekmez.

Katmanlar, açık kanvasta düzenlenebilir kutular olarak gelir: metin yeniden yazılabilir kalır, şekiller şekil olarak kalır, görseller cihaz-içi kitaplığına katılır, tipografi ve renkler ise marka globalleriyle uyumlu hale gelir. Kaydet ve düzen, Lolly'si olan herkesin yeniden doldurabileceği, yeniden kullanılabilir, URL ile adreslenebilir bir şablona dönüşür - ayrıca sayfa yüklendiğinde yeniden render edilen canlı araçları (bir QR kodu, bir grafik) da karıştırabilirsin. Buradan itibaren, Lolly'deki her şey gibi render edilir - SVG, PDF, PNG ve gerisi, kendi URL'sinden yeniden üretilebilir. Bkz. [Bir tasarım içe aktar](/info/design-import.html).

## Lolly, mevcut bir PowerPoint sunumunu yeniden markalayabilir mi?

Evet - ikisi de cihazında olmak üzere iki yolla. **Rebrand a Deck** yardımcı aracı bir `.pptx` dosyası alır, temasını, sabit kodlanmış renklerini ve yazı tiplerini markana göre değiştirir; grafikler, SmartArt ve animasyonlar ise dokunulmadan geçer - karşılığında bir `.pptx` alırsın. Ya da sunumu **Deck Builder**'da aç (Load → dosyayı bırak) ve zaten markaya oturmuş, serbest biçimli nesneler olarak slayt slayt düzenle, ardından PPTX, PDF veya video olarak dışa aktar. Bunun yerine bir `.pptx` dosyasını yükleme alanına bırakmak, seçtiğin slaytları kitaplığına SVG varlıkları olarak dosyalar. Bkz. [Bir tasarım içe aktar → Sunumlar ve belgeler](/info/design-import.html#decks-and-documents).

## 29 Ağustos'ta ne olacak?

SUSE markalı araçlar projeden ayrılır ve kullanıcı tarafından tanımlanan yeni, genel örnek araçlar onların yerini alır.

SUSE, ticari markalarını korumak için kendi Lolly'sini işletecek.

## SUSE ne kadarını özel tutuyor? (diğer bir deyişle, halı ne zaman çekilecek)

SUSE'nin ticari markaları ve markalı araçları, 29 Ağustos'a kadar yalnızca gösterim amaçlıdır. Lolly'nin markasız bir örneğini [lolly.ART](https://lolly.art) adresinde bulabilirsin.

SUSE, otuz yılı aşkın platform liderliğine sahip bir kurumsal açık kaynak altyapı şirketidir. Ürünleri arasında kurumsal düzeyde Linux, Cloud Native, Edge ve AI altyapı çözümleri yer alır.

SUSE'nin bakış açısından bu, egemenlik ve güvenlik konusunda söylediğini uygulamakla ilgilidir. Bugün itibarıyla, SUSE'nin Lolly'yi ürünleştirme olasılığı neredeyse sıfırdır.

Açıkça belirtelim: SUSE, Lolly'yi kendi BT sistemleriyle entegre etmek için *gerçekten de* dahili araçlar geliştiriyor - bu, SUSE'nin dahili kurulumuyla ilgilidir, kamuya açık ile özel geliştirme arasındaki farkla değil.

Kamuya açık taraftan bahsetmişken, Lolly'nin [Open Build Service](https://openbuildservice.org/) aracılığıyla inşa edilmesi ve güvenli tedarik zinciri yapılarının [SUSE Application Collection](https://apps.rancher.io/applications) tarafından teslim edilmesi hedefleniyor.

Elimizden geldiğince açık şekilde inşa edeceğiz - sadece SUSE markalı araçları uzun süre görmeyeceksin, ne de Lolly ile ilgisi olmayan SUSE'nin dahili iş gücünü ve ticari süreçlerini.

## Bu Lolly logosu hangi aromada?

Kimileri Lime der, kimileri Nane, bazen de Elma; Lolly tatlılığı getirir, aromayı sen yaratırsın!
