# Hızlı Başlangıç

Lolly; kurallarını —renkler, yazı tipleri, düzenler, mantık— birkaç alanı doldurarak herkesin bitmiş dosyalar oluşturmak için kullanabileceği araçlara dönüştürür: görseller, PDF'ler, sosyal medya kartları, video. Öğrenilecek ya da yüklenecek hiçbir şey yok: her şey cihazında çalışır, çevrimiçi ya da çevrimdışı.

Önce okuman gereken tek sayfa bu. Seni üretken kılan iki şey var: **Lolly'yi kendine göre yap** ve **zaten sahip olduklarını içeri al** (tasarım dosyaların ve belirteçlerin). Geri kalan her şey bir bağlantı uzağında.

> Lolly'de yenisin ve sadece bir şey yapmak mı istiyorsun? Uygulamayı aç, galeriden herhangi bir araç seç, boşlukları doldur ve **Oluştur**'a bas. *Kendi* markanı giydirmek istediğinde buraya geri dön.

## 1. Kendine göre yap — Tasarım Sistemini yapılandır

Lolly'deki markan; renkler, yazı tipleri ve birkaç kuraldan oluşan küçük bir **tasarım belirteçleri** belgesidir — her araç bu belgeye göre oluşturulur. Bir kez ayarla, ürettiğin her şey incelemeyle değil, yapısı gereği markana uygun olsun. İçeri girmenin üç yolu var; markanın zaten bulunduğu yere uyanı seç.

### Sıfırdan başla (tasarım sistemi oluşturucu)

İlk çalıştırmada **Başlangıç** ekranına (`#/start`) düşersin — yani [**Marka Stüdyosu**](/info/brand-studio.html)'na. Ona bir ad ve bir ana renk ver; Lolly da motorun her yerde kullandığı aynı renk matematiğiyle bundan eksiksiz, erişilebilir bir palet *türetir* — açık/koyu yüzeyler, metin, vurgular. Bir yazı tipi seç, bir dakikadan kısa sürede çalışan bir markan olsun. Oradan itibaren stüdyonun beş sekmesi (Logolar, Renkler, Yazı Tipi, Belirteçler, Katalog) istediğin kadar ileri götürmene izin verir — ne zaman geri dönersen dön, herhangi bir kısmını daha sonra da inceltebilirsin. Bunu her zaman kontrol panelinden tekrar ziyaret edebilirsin (Lolly'nin marka kilitli bir sürümünü kullanmıyorsan).

### Zaten sahip olduğun bir markayı içe aktar

Markan zaten tasarım belirteçleri olarak yakalanmışsa — **Penpot**, **Tokens Studio** (Figma) ya da düz bir **DTCG** dosyasından — onu yeniden yazmak yerine olduğu gibi içeri al. İki yol var:

- **Uygulama içinde:** [tasarım sistemi oluşturucu: Marka Stüdyosu](/info/brand-studio.html) (`#/start`) bir belirteç dosyasını, bir Penpot dışa aktarımını veya doğrudan bir `LollyBrand` paketini kabul eder — bırak, palet canlansın.
- **Komut satırından**, yeniden kullanılabilir bir marka paketi oluşturmak için:

```bash
# a monolithic tokens.json, a one-file-per-set directory, or a Penpot project archive
npm run ingest:brand -- ./my-tokens.json --name acme --label "Acme" --activate
```

`ingest:brand`, Penpot / Tokens Studio'nun aynı belgeyi dışa aktardığı üç kabın tümünü kabul eder — tek bir `tokens.json`, bir dizin (`$metadata.json` + set başına dosyalar) ya da bir `project.penpot` arşivi. `--activate` ile marka bir profil olarak kaydedilir, ona geçilir ve katalog yeniden oluşturulur. Marka paketlerinin ve profillerin nasıl bir araya geldiğini görmek için [Yapılandırma](/info/configuration.html) sayfasına bak.

### Uygulama içinde ince ayar yap

Bir marka etkinleştirildiğinde, onu şekillendirmeye [**Marka Stüdyosu**](/info/brand-studio.html)'nda (`#/start`) devam et — bir rengi ya da bir rolü değiştir, yazdıkça uygulama genelindeki her önizleme güncellensin. (Kontrol panelindeki `#/d` adresindeki **Tasarım sistemi** sekmesi markayı salt okunur olarak *gösterir*; onu düzenlediğin yer Stüdyo'dur.) Aynı marka **Profil → Markan** kartında özetlenir. Yazı tipleri gerçektir: Google Fonts'tan seç, Lolly dosyayı bir marka varlığı olarak **cihazında** saklar; böylece tipografin çevrimdışı seninle gelir ve oluşturma sırasında hiçbir şey ağdan indirilmez.

Memnun kaldığında, **markayı bir `LollyBrand` paketi olarak dışa aktar** — bir meslektaşının aynı paleti, yazı tiplerini ve kuralları almak için içe aktarabileceği tek bir dosya. Bir markanın aradan sunucu geçmeden insanlar ve makineler arasında dolaşması işte böyle olur.

> **Marka belirteçleri iki yönde de gidip gelir.** Lolly'nin markası *tam olarak* DTCG belirteçleri olduğundan — Penpot'un doğrudan okuyup yazdığı ve Tokens Studio'nun Figma'ya taşıdığı format — *tasarladığın* palet ile Lolly'nin *uyguladığı* palet, elle senkronize tuttuğun iki liste değil, tek bir belgedir. Bkz. [Tasarım Belirteçleri](/info/design-tokens.html).

## 2. Zaten sahip olduklarını içeri al

Boş bir sayfadan başlamıyorsun. Lolly, zaten sahip olduğun tasarım çalışmalarını ve açık formatları açar.

### Açık kaynak tasarım dosyaları

**Figma, Penpot, Illustrator, InDesign veya herhangi bir SVG uygulamasındaki** bitmiş çalışmaların, onları çizdiğin uygulamada kilitli kalmak zorunda değil. **Layout Studio**'yu aç, **Bir tasarım içe aktar**'a tıkla; dosya düzleştirilmiş bir resim olarak değil, *yaşayan bir düzen* olarak açılsın. Her katman düzenlenebilir bir kutuya dönüşür: metin yeniden yazılabilir kalır, şekiller şekil kalır, görseller kitaplığına iner ve karmaşık vektör grafikleri sadık biçimde korunur. Markanın yazı tiplerine ve renk kurallarına önceden uyarlanmış olarak gelir.

| Elinde olan | Şu şekilde içeri al |
|---|---|
| Bir Figma çerçevesi | Yerel `.fig` (File → Save local copy) ya da bir SVG dışa aktarımı |
| Bir Penpot tasarımı | `.penpot` dışa aktarımı ya da herhangi bir SVG |
| Bir Illustrator dosyası | Yerel `.ai` (PDF uyumlu) ya da `.pdf` — doğrudan açılır |
| Bir InDesign düzeni | `.idml` (File → Export → InDesign Markup) |
| Başka her şey | **Herhangi bir SVG** — evrensel giriş kapısı |

Tüm içe aktarma **cihazında** gerçekleşir — dosya tarayıcında ayrıştırılır ve hiçbir şey yüklenmez. Tüm ayrıntılar ve tam olarak nelerin aktarıldığı [Bir tasarım içe aktar](/info/design-import.html) sayfasında.

### Tek seferlik bir işten bir şablona

İşte kazanç: içe aktarılan bir düzen sıradan bir Layout Studio oturumudur; bu yüzden onu **kaydettiğin** anda bir URL'de yaşar. Lolly'si olan herkes o URL'yi açabilir, kelimeleri değiştirebilir, bir görseli değiştirebilir ve kendi sürümünü oluşturabilir — tasarım uygulaması olmadan ve kilitli kısımlar kilitli kalır. Tek seferlik bir tasarım, yeniden kullanılabilir bir araca dönüşür. Tek bir satır yapılandırma yazmadan ulaşılan bütün fikir bu.

### Açık veriler ve açık araçlar

[Topluluk araç seti](/info/builders.html) açık kaynaklı ve markadan bağımsızdır — QR kodları, sokak haritaları, filtreler, gizlilik yardımcı araçları — ve onu etkinleştirdiğin an *senin* markana göre oluşturulur. Araçlara kendi açık verilerini de besle: bir **CSV** veya **JSON** tablosunu yapıştır ya da bırak, bir aracın tekrarlayan alanları ondan dolsun, satır başına bir bitmiş varlık.

## 3. Bir şey yap, sonra paylaş ya da otomatikleştir

Etkin bir marka ve elinde malzemenle her araç bitmiş bir dosya üretir:

- **Oluştur** herhangi bir aracı **SVG, PDF, PNG, JPG, WebP, video** ve daha fazlasına — ihtiyaç duyduğunda gerçek baskı boyutları ve fiziksel birimlerle. Bkz. [Dışa aktarma ve formatlar](/info/exporting.html).
- **Bir bağlantı paylaş.** Her araç durumu bir URL'dir; böylece bitmiş bir varlık yeniden üretilebilir ve parametreyle adreslenebilir — bağlantıyı commit'le, istendiğinde yeniden üret.
- **Toplu yap.** [Toplu ızgarada](/info/exporting.html) bir şablonu bir elektronik tablodan sür: satır başına bir bitmiş varlık.
- **Otomatikleştir.** Aynı render, [CLI](/info/cli.html)'dan ve bir [yapay zeka ajanından](/info/ai-agents.html) çalışır — bir URL, API'dir.

## Sırada nereye

Burada ne yapmaya geldiğine bağlı olarak üç yol:

- **[Yaratıcılar için Lolly](/info/creators.html)** — sen şeyler yaparsın. Avantajlar ve uygulamadan en iyi şekilde nasıl yararlanılır.
- **[Geliştiriciler için Lolly](/info/builders.html)** — sen araçlar yazar, entegre eder ve dağıtırsın. Teknik dokümantasyon.
- **[Operatörler için Lolly](/info/operators.html)** — marka, güvenlik ve bir kuruluş genelinde dağıtımdan sen sorumlusun.
