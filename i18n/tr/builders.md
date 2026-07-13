# Geliştiriciler için Lolly

Teknik dokümantasyon — araç yazan, Lolly'yi bir üretim hattına entegre eden, kendi sunucusunda barındıran veya platformu genişleten herkes için.

**Senin için ne var.** Bir aracı bir kez oluştur, istek sana geri gelmesin. Öğleden sonralarını yiyip bitiren tekrar eden "şunu benim için yapar mısın…" talebi, başkalarının kendi başına — doğru şekilde, sen araya girmeden — doldurduğu bir şablona dönüşür. Çalışman düz HTML/CSS/JS'dir: sürüm kontrollü, karşılaştırılabilir, incelenebilir ve tedarikçi kilidi olmayan açık bir motor üzerinde çalışır, böylece senin kalır. Üretim sürecini otomatikleştir, zamanın on bininci dışa aktarıma değil ilginç soruna gitsin.

Lolly, birkaç **kabuk** (web PWA, Tauri masaüstü/mobil, CLI, TUI) üzerinde aynı render yolunu çalıştıran platform bağımsız bir **motordur**. Araçlar **veridir, gömülü kod değil** — bir manifest artı bir şablon artı isteğe bağlı hook'lar — böylece yeni araçlar uygulama güncellemesi olmadan yayınlanır. Mimari için [Genel Bakış](/info/overview.html) ile başla, ardından ne inşa ettiğine uyan yolu izle.

Platforma yeni mi geldin? **[Hızlı Başlangıç](/info/quickstart.html)** derinlere inmeden önce bir marka ve ilk render'ını hazırlar.

## Mimariyi anla

- **[Genel Bakış](/info/overview.html)** — Lolly'nin neden var olduğu, motor/kabuk/araçlar ayrımı, yetenek köprüsü ve yerleşik mimari kararlar.
- **[Tasarım Belirteçleri](/info/design-tokens.html)** — markaların ifade edildiği DTCG belirteç modeli ve araçların bunları nasıl tükettiği.

## Araç yaz

- **[Araç Yazma](/info/authoring-tools.html)** — tam kılavuz: manifest, şablon, stiller, hook'lar, kompozisyon ve yayınlama.
- **[Varlık Yazma](/info/authoring-assets.html)** — katalog varlıkları, katmanlar, yereller, paletler, temalandırılabilir simgeler ve yazı tipleri.
- **[Host API](/info/host-api.html)** — her aracın karşı yazıldığı `HostV1` yetenek köprüsü (araçların gördüğü tek API).
- **[URL Modu](/info/url-mode.html)** — her girdi bir URL parametresi olarak; ayrılmış parametreler, kompakt kodlama, paketlenmiş bağlantılar.

## Çalıştır ve entegre et

- **[CLI](/info/cli.html)** — arayüzsüz render; GUI ile aynı render yolu, `--foo=bar` argv ile yönlendirilir.
- **[TUI](/info/tui.html)** — etkileşimli terminal kabuğu.
- **[MCP Sunucusu](/info/mcp.html)** — bir yapay zeka ajanının araçları keşfedip çalıştırmasını sağlayan yerel uç nokta.
- **[Yapay Zeka Ajanları](/info/ai-agents.html)** — Lolly'yi bir modelden yönlendirmek: bir URL, API'dir.
- **[Chrome Uzantısı](/info/extension.html)** — canlı bir URL'yi yeniden kullanılabilir bir varlık olarak yakala.

## Yayınla ve işlet

- **[Derleme Kılavuzu](/info/build-guide.html)** — her hedefi derle: CLI, TUI, masaüstü, mobil.
- **[Dağıtım](/info/deployment.html)** — web uygulaması, uygulamalar ve arka uç servisleri; her parçanın nerede çalıştığı.
- **[Yapılandırma](/info/configuration.html)** — profiller, marka paketleri, yetenek kısıtlaması, özellik bayrakları ve katalog doğrulama.

## Güven ve veri

- **[Content Credentials Kimliği](/info/content-credentials-identity.html)** — cihaz üzerinde C2PA için CA tarafından verilen imzalama; motor sözleşmeleri ve operatör çalışma kılavuzu.
- **[Veri Aktarımı](/info/data-transfer.html)** — `lolly-backup` paketi: zarf, bütünlük ve kabuklar arası garantiler.
- **[Hakkında](/info/about.html)** — proje, lisans sınırı ve depo.
