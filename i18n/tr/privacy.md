# Gizlilik Politikası

*Son güncelleme: Haziran 2026*

## Lolly uygulaması

Lolly tamamen tarayıcında çalışır. **Hiçbir şey toplamıyoruz, hiçbir şey iletmiyoruz ve verilerini gören hiçbir sunucumuz yok.** Analitik yok, takip yok, hiçbir türden üçüncü taraf yok.

**Hiçbir yerde çerez yok.** Lolly asla çerez ayarlamaz. Uygulamanın çalışması için, kullandığın bir özellik açısından kesinlikle gerekli olan az miktarda veriyi **kendi cihazında** tutar:

- **Açık/koyu temanı** ve birkaç arayüz tercihi (kenar çubuğu genişliği, yakınlaştırma).
- **Araç katalogunun çevrimdışı önbelleği**, böylece galeri bağlantı olmadan da yüklenir.
- Profil kartındaki küçük istatistikler için **yalnızca yerel kullanım sayaçları** — bunlar hiçbir yere gönderilmez.
- **Kendi belgelerin ve kaydedilmiş oturumların**, tarayıcıda yerel olarak (IndexedDB) saklanır, böylece çalışman ziyaretler arasında kalıcı olur.

Bunların hiçbiri paylaşılmaz, yüklenmez veya seni tanımlamak ya da takip etmek için kullanılmaz; bu yüzden onay verilecek bir şey yok — yalnızca neyin saklandığını bilmen için bu bildirim var. **Profil → Tüm verilerimi temizle** ile veya tarayıcında sitenin depolama alanını temizleyerek bunların tümünü istediğin zaman silebilirsin.

Bu dokümantasyon sitesi (`/info`) daha da hafiftir: **hiçbir çerez ayarlamaz**, cihazında yalnızca açık/koyu tercihini saklar ve yazı tipleri dahil her şeyi, CDN veya üçüncü taraf isteği olmadan, lolly.tools'un kendisinden sunar.

## Cihaz üzerindeki yardımcı araçlar

Bazı araçlar, *senin* sağladığın bir dosya üzerinde çalışan **yardımcı araçlardır** — örneğin bir görsel veya PDF'teki gizli verileri (GPS konumu, kamera, yazar, editör ve belge meta verileri) gösterip temiz bir kopya veren **Strip Hidden Data**, ya da görsellerini doğrudan cihazında yeniden kodlayarak bir PDF'i küçülten **Compress PDF**.

Bunlar **tamamen tarayıcında çalışır**. Seçtiğin dosya cihazında belleğe okunur, yerel olarak dönüştürülür ve indirme olarak sunulur. **Asla yüklenmez** — yükleneceği bir sunucu yoktur. Temizlenmiş kopya hiçbir filigran ve bizim kendi tanımlayıcı meta verilerimizden hiçbirini taşımaz; buradaki tüm amaç veriyi *kaldırmak*, eklemek değildir. Ayrıldıktan sonra hiçbir şey saklanmaz ve bu yardımcı araçlar çevrimdışı çalışır. Her birinde **"Cihazında çalışır — hiçbir şey yüklenmez"** rozetini görürsün.

Bu, tarayıcının yerel olarak yapabileceği bir işi yapmak için dosyanı bir yabancının sunucusuna yükleyen tipik "bu PDF'i sıkıştır" / "bu HEIC'i dönüştür" sitesinin tam tersidir.

## Tarayıcı eklentisi

**Lolly URL Screenshot** tarayıcı eklentisi hiçbir kişisel veri toplamaz, saklamaz veya iletmez. Analitik yok, takip yok, uzak sunucu yok.

## Ne yapar

Lolly web uygulamasından ([lolly.tools](https://lolly.tools)) bir URL'nin ekran görüntüsünü almasını istediğinde, eklenti o sayfayı geçici bir arka plan sekmesinde açar, DevTools Protocol aracılığıyla tarayıcında yakalar, görseli uygulamaya geri verir ve sekmeyi kapatır. Her şey yerel olarak, kendi cihazında ve ağında gerçekleşir.

## Veriler

- **Hiçbir şey toplamıyoruz.** Eklentinin hiçbir sunucusu yoktur ve kendi adına hiçbir ağ isteği yapmaz.
- **Yakalanan görseller** doğrudan aynı tarayıcıdaki Lolly uygulamasına gider — eklenti tarafından asla yüklenmez.
- **Yakaladığın URL'ler** yalnızca o tek sayfayı o tek ekran görüntüsü için yüklemek amacıyla kullanılır. Kaydedilmez veya paylaşılmaz.

## İzinler

- **`debugger`** — DevTools Protocol aracılığıyla oluşturulan sayfayı yakalamak için (Lolly masaüstü uygulamasının kullandığı mekanizmanın aynısı).
- **Sekme erişimi** — sayfanın yüklendiği geçici sekmeyi açmak ve kapatmak için.
- **Site erişimi** — yakalamayı seçtiğin sayfa herhangi bir sitede olabileceği için.

Bunların hiçbiri tarama geçmişini okumak, izlemek veya iletmek için kullanılmaz.

## İletişim

Sorular mı var? Bkz. [lolly.tools](https://lolly.tools).
