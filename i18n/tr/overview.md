# Genel Bakış

![Lolly Simgesi - Büyük yeşil ve beyaz lolipop şeker](https://lolly.tools/info/icon.avif)

Bu belge, Lolly platformunun amacını, yapısını ve mimari kararlarını ele alır. Hem ürün vizyonunu hem de kod tabanının mevcut durumunu yansıtır.

> **Durum:** Lolly, **tamamlanmamış kapalı bir pilot** aşamasındaki dahili bir prototiptir. Motor deterministik ve iç tutarlılığa sahiptir, ancak ürün henüz erken aşamadadır - SUSE ilk müşteridir - ve kriptografi ile dosya ayrıştırma motorları şu anda SUSE'nin kurumsal ölçeğe hazırlanan sıkı altyapı sağlamlaştırma sürecinden geçmektedir (bu konuda gerçekten iyiyiz). Aşağıdaki mimariyi bitmiş, sertifikalı bir ürün değil, test edilmekte olan tasarım niyeti olarak okuyun. Pilotun nasıl yürütüldüğü ve ölçüldüğü için [Benimseme ve Yönetişim](/info/adoption-governance.html#status) sayfasına bakın.

---

## Neden Var

Ekipler tekrar eden bir sorunla karşı karşıya: her seferinde uzman ellere başvurmayı gerektirmeyecek kadar öngörülebilir, ama koruma önlemleri olmadan devredilemeyecek kadar kaliteye duyarlı, tekrarlayan yaratıcı ve içerik işleri. Sonuç ya düşük verim (uzman darboğazı), ya tutarsızlık (insanların eline ne geçerse onu kullanması) ya da tedarikçiye bağımlılık (şablonlarını kontrol eden bir SaaS DAM) oluyor.

Bu platform, yapısal yanıttır:

> **Büyük ölçekte programatik yaratıcı iş ve içerik üretimi** - kuralların merkezi kontrol altında tutulduğu, çalışanlar, tedarikçiler ve iş ortakları için sıfır emekle varlık üretimi.

Sonuç **bolluk**tur: her etkinliğin doğru tabelası olur, her CVE uyarısı marka stiline uyar, her etiket temiz basılır, her e-posta imzası güncel olur - hepsi bir tasarım talebine gerek kalmadan. Platform, tekrarlayan operasyonelleştirilmiş yaratıcı işleri üstlenir. Bilinçli olarak ısmarlama bir yaratıcı araç değildir - tasarımcılar amiral gemisi çalışmaların sahibi olmaya devam eder.

### Ekosistemdeki Yeri

| Özellik | Canva | Marka portalları | Illustrator | Figma / Penpot | **Lolly** |
|---|---|---|---|---|---|
| Toplu içerik üretimi | kısmi | ✗ | ✗ | ✗ | **✓** |
| Tamamen çevrimdışı çalışır | ✗ | ✗ | ✓ | kısmi | **✓** |
| Şablon mantığı ve katı kısıtlar | ✗ | kısmi | ✗ | kısmi | **✓** |
| Tasarım becerisi gerektirmez | kısmi | ✓ | ✗ | ✗ | **✓** |
| Otomatik Content Credentials | ✗ | ✗ | kısmi | ✗ | **✓** |
| Araçlar başka araçları birleştirebilir | ✗ | ✗ | ✗ | ✗ | **✓** |
| Açık motor, SaaS'a bağımlı değil | ✗ | ✗ | ✗ | kısmi | **✓** |
| C2PA içerik kimlik bilgileri | ✗ | ✗ | ✗ | ✗ | **✓** |
| İsteğe bağlı, adli düzeyde köken bilgisi | ✗ | ✗ | ✗ | ✗ | **✓** |
| Mobil ve Masaüstü Uygulamaları | ✓ | ✗ | ✗ | kısmi | **✓** |
| Komut Satırı ve TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

Boşluk açık: mevcut ortamda hiçbir şey bize kısıtlar-öncelikli, çevrimdışı çalışabilen, düşük beceri gerektiren, kurum içinde herkesin erişebildiği bir çıktı sunmuyor. Lolly, renklerin, tipografinin ve varlıkların marka geneliyle uyumlu kaldığı, böylece serbest düzenlemenin kısıtlar-öncelikli kalmasını sağlayan açık bir kanvas bile içeriyor - **Layout Studio**. Bunun **olmadığı** şey ise kısıtsız bir tasarım paketi: tasarımcılar özel amiral gemisi işler için Illustrator ve Figma kullanmaya devam ediyor. Bu araçla permütasyonlar bir araya getirilebilir.

**Şunun için kullan:** Operasyonelleştirilmiş yaratıcı varlıkların hızlı üretimi - etkinlik kartları, yaka kartları, imzalar, CVE uyarıları, QR kodları, sosyal medya kartları, sevkiyat etiketleri, yapılandırılmış raporlar.

**Şunun için kullanma:** Ismarlama vitrin içerikler.

---

## Genel Tablo

```
                ┌─────────────────────────────────────────────┐
                │              Tools (data, not code)         │
                │   tool.json + template.html + hooks.js?     │
                └─────────────────────────────────────────────┘
                                    ▲
                                    │ talks to via Capability Bridge v1
                                    ▼
                ┌─────────────────────────────────────────────┐
                │                  Engine                     │
                │   loader · validator · runtime · template   │
                │   inputs · url-mode                         │
                │   PLATFORM AGNOSTIC. Knows nothing of DOM,  │
                │   filesystem, or You.                       │
                └─────────────────────────────────────────────┘
                                    ▲
                                    │ implements HostV1
                                    ▼
        ┌──────────────┬──────────────┬──────────────┬──────────────┐
        │  Web Shell   │ Tauri Desktop│ Tauri Mobile │  CLI Shell   │
        │   (PWA)      │              │              │              │
        └──────────────┴──────────────┴──────────────┴──────────────┘
                                    ▲
                                    │ fetches from
                                    ▼
                ┌─────────────────────────────────────────────┐
                │              Catalogs                       │
                │   catalog/tools/index.json + tool dirs      │
                │   catalog/assets/index.json + asset files   │
                └─────────────────────────────────────────────┘
```

### Depo Düzeni

```
lolly/
├── engine/           # Platform-agnostic core. Open source (MPL-2.0).
│   └── src/
│       ├── index.ts          # public surface - loader, runtime, template, inputs, url-mode
│       ├── loader.ts         # fetches and validates tool files
│       ├── runtime.ts        # orchestrates the 5-step lifecycle
│       ├── template.ts       # Handlebars hydration + annotateTemplate
│       ├── inputs.ts         # manifest → runtime input model
│       ├── url-mode.ts       # URL ↔ input state round-trip
│       ├── validate.ts       # JSON Schema validation of manifests
│       ├── compose.ts        # resolve nested tool renders (composes)
│       ├── embed.ts          # parse portable lolly.tools embed URLs
│       └── bridge/
│           └── host-v1.ts    # TypeScript interface - the bridge contract
│
├── shells/
│   ├── web/          # PWA - hosted online; primary distribution
│   │   └── src/
│   │       ├── main.ts           # boot, routing
│   │       ├── theme.ts          # theme apply/persist (FOUC prevention)
│   │       ├── bridge/           # web implementations of HostV1 APIs
│   │       │   ├── index.ts      # compose all bridge pieces
│   │       │   ├── db.ts         # IndexedDB setup
│   │       │   ├── state.ts      # host.state - saved edits
│   │       │   ├── profile.ts    # host.profile - user details
│   │       │   ├── assets.ts     # host.assets - catalog + user uploads
│   │       │   ├── clipboard.ts  # host.clipboard
│   │       │   ├── export.ts     # host.export - rasterise/serialize
│   │       │   ├── net.ts        # host.net - allowlisted fetch
│   │       │   └── media.ts      # host.media - live camera frames (onFrame)
│   │       ├── catalog/
│   │       │   └── sync.ts       # boot-time catalog sync + offline cache
│   │       ├── styles/           # app-wide CSS (app.css, picker.css, tokens.css)
│   │       └── views/
│   │           ├── gallery.ts    # tool library listing + saved-state cards
│   │           ├── tool.ts       # mounts one tool (inputs + canvas + actions)
│   │           ├── picker.ts     # asset picker UI (invoked by host.assets)
│   │           ├── profile.ts    # user details editor
│   │           ├── projects.ts   # /p - folders of saved sessions (nested; folder/selection export)
│   │           └── free-canvas.ts # free-canvas editor overlay for render.layout:"editor" tools
│   │
│   ├── cli/          # Node.js CLI - same engine, headless jsdom
│   │   ├── bin/lolly.ts
│   │   └── src/
│   │       ├── run.ts    # loadTool → createRuntime → export → write file
│   │       └── bridge.ts # CLI implementation of HostV1
│   │
│   ├── tui/          # Interactive terminal shell (Ink) - reuses the CLI bridge
│   │   └── src/
│   │       ├── main.tsx  # full-screen app: Gallery / Projects / Profile / ToolView
│   │       └── bridge.ts # CLI bridge + on-disk state under ~/.lolly
│   │
│   ├── tauri-desktop/ # downloadable desktop app
│   └── tauri-mobile/  # iOS/Android app
│
├── tools/            # profile VIEW (gitignored) - data, not code. Merged from packs:
│                     #   community/ (public, brand-agnostic, MPL) + brands/<active>/tools (brand-owned).
│   ├── qr-code/
│   ├── quotes/
│   ├── email-signature/
│   ├── daily-card/        # "Day Brief" - weather/time/map (fetched by an inline template script)
│   ├── code-canvas/
│   ├── countdown-timer/
│   ├── color-palette/
│   ├── color-block/           # typed/heterogeneous blocks (addMenu discriminator)
│   ├── dynamic-layout/
│   ├── tool-logo/         # "Logo" - auto-switching brand logo
│   ├── street-map/        # offline vector city-block maps
│   ├── url-shot/          # "URL Screenshot" (capture capability)
│   ├── strip-data/        # on-device metadata strip - JPEG/PNG/SVG/PDF (file in → clean file out)
│   ├── compress-pdf/      # on-device PDF compressor - recompresses images (file in → smaller file out)
│   ├── brand-lockup/      # "Brand Lockup" - SUSE logo lockups; HarfBuzz text-to-path (wasm)
│   ├── bag-video/
│   ├── chart-creator/     # SVG charts from structured data
│   ├── filter-duotone/    # two-color photo treatment
│   ├── filter-halftone/   # photo → vector halftone dot grid
│   ├── filter-scanline/   # photo → retro posterised scanline grid (SVG / transparent raster)
│   ├── meeting-planner/   # global timezone meeting scheduler
│   ├── calendar-ics/      # event → .ics calendar file plus a card
│   ├── digi-ad/           # "Animated Ad" - looping banner from scenes
│   ├── event-name-badge/  # conference badges - composes qr-code as an SVG
│   ├── wayfinding-signage/ # event signage; directions blocks auto-fit label text
│   ├── text-helper/       # on-device text workbench (format/decode/hash/de-identify)
│   ├── layout-studio/     # "Layout Studio" - freeform WYSIWYG editor canvas (render.layout: editor)
│   ├── multi-page-pdf/    # multi-page PDF document - cover, flowing content blocks, back page
│   ├── diagram-builder/   # org / layercake / process / cycle / pyramid diagrams
│   ├── logo-wall/         # many logos → auto-packed grid
│   ├── logo-lockup-partner/ # SUSE + partner co-brand lockup
│   ├── web-icon/          # favicon .ico / png / svg from text + colours
│   ├── filter-posterize/  # photo → flat posterised vector separations
│   ├── filter-pixel-stretch/ # photo → pixel-smear effect
│   ├── lottie-digi-ad/    # animated Lottie ad banners
│   └── pose-geeko/        # pose the SUSE Geeko mascot - print-ready stills
│
├── catalog/
│   ├── tools/index.json        # tool registry
│   └── assets/
│       ├── index.json          # asset registry
│       └── suse/...            # logo, palette, etc.
│
├── schemas/          # JSON Schema for tool.json, asset entries, AssetRef
├── scripts/          # build-catalog-index.ts, checksum-assets.ts, validate-catalog.ts
├── tests/            # engine tests
└── docs/             # this file + authoring guides + positioning
```

---

## Platform dağıtım modeli

Platform, birden fazla yüzeyde çalışır - web PWA, Tauri masaüstü/mobil, betiklenebilir CLI ve etkileşimli TUI. Bunların hepsi aynı motoru ve aynı araç dosyalarını kullanır.

### Web (PWA) - birincil dağıtım
SUSE denetimli bir URL üzerinde barındırılır. Service worker, araçları ve varlıkları önbelleğe aldıktan sonra çevrimdışı çalışır. Çoğu çalışanın, tedarikçinin ve iş ortağının platformu kullanacağı yer burasıdır. Hesap gerekmez - durum, cihaz başına IndexedDB'de saklanır.

Web shell tek bir düzenden duyarlıdır. Masaüstünde bir araç, trackpad'e özel kanvas gezintisine sahip bir önizleme sahnesinin yanında yeniden boyutlandırılabilir bir kontroller kenar çubuğu olarak görünür (imlecin etrafında yakınlaştırmak için Cmd/Ctrl-tekerlek ya da sıkıştırma, kaydırmak için Boşluk ya da orta tuşla sürükleme, `0`/`1`/`+`/`−` tuşları ve bir Sığdır/% HUD'u). Mobilde (≤640px) kontroller, statik tam ekran bir önizlemenin üzerinde peek/half/full arasında (dokunuşla) geçiş yapan sürükleme tutamaçlı, üstte sabit bir sayfaya dönüşür; yüzen bir **Oluştur** düğmesi ise **Dışa Aktar** kontrollerini bir alt sayfa açılır penceresinde açar. Dokunmatikte önizleme üzerinde sıkıştırarak yakınlaştırma ve sürükleyerek kaydırma kullanılır. Oluşturma yolu ve dışa aktarma kontrolleri ikisinde de birebir aynıdır - yalnızca arayüz düzeni değişir.

**Toplu mod (`/pro`).** Web shell ayrıca bir veya birçok araç genelinde aynı anda birçok satır oluşturan, elektronik tablo tarzı bir toplu ızgara da (`shells/web/src/pro/`) sunar. CSV/TSV gidiş-dönüşü ile elektronik tablodan yapıştırmayı, satır başına şablon/format/boyut/birim/dpi ayarını, canlı önizlemeli bir bloklar-düzenleyici yan panelini, daraltılabilir dışa aktarma sütunlarını, satır başına bir "ilgi düzeyi" etiket çubuğunu, soldan sürükleme tutamaçlı satır yeniden sıralamayı, iki adımlı silme onayını, kaydedilmiş toplu oturumları ve bir `.zip` indirmesini içerir. Bu, "kitlesel içerik üretimi" konumlandırmasının arkasındaki bire-çok yüzeydir.

### Tauri masaüstü / mobil
Paketlenmiş yerel bir uygulama (Tauri sayesinde küçük bir ayak izi). Tam çevrimdışı kullanılabilirlik, CLI'a bağımlı araçlar (PDF Smasher, Font Outliner) için dosya sistemi erişimi ve kamera erişimi sağlar. 2026 ortası için araç geliştirmesi planlanmıştır.

### CLI
`lolly <tool-id> [--input=value ...] --output=file.png`

Masaüstü kullanıcıları birçok aracı terminalden çalıştırabilir. CLI shell aynı motoru yükler, bir jsdom DOM'u oluşturur, aynı oluşturma yolunu çalıştırır ve dosyayı yazar. Taşıma katmanı URL modudur - CLI ayrı bir uygulama değildir. Bu, CLI ve GUI çıktılarının birebir aynı olmasını garanti eder.

```bash
lolly qr-code --url=https://suse.com --output=qr.svg
lolly quotes --quote="Ship it." --output=quote.png
lolly                        # lists available tools
lolly qr-code                # lists inputs for that tool
```

### TUI
`npm run tui`

CLI'ın etkileşimli karşılığı: araçlara göz atmak, girdileri doldurmak, projeleri kaydetmek ve dışa aktarmak için GUI olmadan çalışan, tam ekran, klavye öncelikli bir terminal uygulaması (Ink üzerine kurulu). Host köprüsü, DOM'suz formatlar (SVG/EMF/EPS/HTML + metin/veri) için **CLI'ın uygulamasını yeniden kullanır** ve `~/.lolly` altında diskte durum ile isteğe bağlı satır içi önizleme ekler. Bunun ötesinde bir **tarayıcı oluşturma katmanı** vardır: talep üzerine raster/PDF/video ve canlı URL yakalama üreten, kapsamı sınırlandırılmış başsız (headless) bir Chromium (MCP sunucusunun kurduğuyla aynısı) - çıktının birebir aynı olması için web shell'in derlenmiş bir kopyasını çalıştırır ve yalnızca böyle bir formatı ilk dışa aktardığınızda başlatılır. Böylece `url-shot` (kırpma + yeniden renklendirme + vektör PDF/SVG ile) ve her raster/pdf aracı da terminalde çalışır. Bkz. [TUI kılavuzu](/info/tui.html).

---

## Araç kategorileri

Araçlar, galeri gruplaması için manifestolarında bir `category` ile etiketlenir.

Satırlar galeri bölüm sırasına göre listelenir. `utility` bölümü galeride her zaman (gelecekteki kategoriler dahil olmak üzere diğer her kategoriden sonra) **son sırada** işlenir - bu, cihaz üzerinde çalışan "Çevrimdışı Yardımcı Araçlar" çekmecesidir.

| Category | Shipped tools | Planned |
|---|---|---|
| `everyone` | QR Kod Oluşturucu, Alıntı Kartı, E-posta İmzası, Günlük Özet, Kod Kanvası, Renk Bloğu, Dinamik Düzen, Logo, Web Simgesi Oluşturucu | Çalışan Görsel Kırtasiyesi |
| `designer` | Marka Lockup, Çanta Videosu, Grafik Oluşturucu, Sokak Haritası, Animasyonlu Reklam, Çok Sayfalı PDF, Diyagram Oluşturucu, Logo Lockup: Izgara (NASCAR), Logo Lockup: Partner, Filtre: Duotone, Filtre: Halftone, Filtre: Scanline, Filtre: Posterize Bitmap, Filtre: Piksel Germe | Yazı Tipi Anahatlandırıcı |
| `event` | Toplantı Planlayıcı, Etkinlik İsim Rozeti, Yönlendirme Tabelası, Takvim ICS | Etkinlik Kırtasiyesi, Toplu İsim Rozetleri, Oda Gündem Kartları |
| `product` | - | CVE Uyarısı, Ürün Sürüm Duyurusu, Blog OG Görseli |
| `utility` | Geri Sayım Sayacı, Renk Paleti, URL Ekran Görüntüsü, Gizli Veri Temizleme, Metin Yardımcısı, PDF Sıkıştır, Düzen Stüdyosu | Birim/format dönüştürücüler, cihaz üzerinde çalışan daha fazla gizlilik aracı |

Araçlar ayrıca duruma göre de sınıflandırılır: `official` (marka onaylı, filigransız), `community` (dış katkı), `experimental` (filigranlı dışa aktarımlar). Dinamik Düzen, URL Ekran Görüntüsü, Logo Lockup: Izgara (NASCAR), Filtre: Posterize Bitmap ve Diyagram Oluşturucu şu anda `experimental` durumunu taşır; Web Simgesi Oluşturucu ve Düzen Stüdyosu ise `community` araçları olarak sunulur.

**Düzen Stüdyosu**, `render.layout: "editor"` serbest kanvas modu üzerine inşa edilen ilk araçtır - metin, şekil ve görsel kutularını sürükleyip yeniden boyutlandırdığınız, döndürdüğünüz ve hizaya oturttuğunuz, arayüzsüz (chrome'suz), doğrudan manipülasyona dayalı bir yüzey; ardından diğer her araçla aynı oluşturma yolundan dışa aktarılır.

**Gizli Veri Temizleme**, ilk **cihaz üzerinde çalışan araçtır** (`privacy: "on-device"`): *sizin* sağladığınız bir dosyayı alan, bunu tamamen tarayıcıda işleyen ve temiz bir kopya geri veren bir içerik dönüştürme aracı - asla yüklenmez, asla filigranlanmaz, hiçbir köken (provenance) damgası basılmaz. **Metin Yardımcısı** ikincisidir - günlük "bir web sitesine yapıştır" işleri için cihaz üzerinde çalışan bir çalışma tezgahı (JSON biçimlendirme, JWT çözme, Base64, URL kodlama/çözme, SHA özetleme). **PDF Sıkıştır** ise üçüncüsüdür - görsellerini yeniden sıkıştırarak bir PDF'i küçültür, yine tamamen cihaz üzerinde. Üçü de "Cihazınızda çalışır - hiçbir şey yüklenmez" rozet metnini taşır. Bu, gizli dosyaları tek amaçlı web sitelerine teslim etmenin yerini alan bir gizlilik-aracı kategorisinin başlangıcıdır.

> Not: `category` ve `status`, her bir `tool.json`'dan `catalog/tools/index.json` (galerinin okuduğu kayıt defteri) içine denormalize edilir. Manifesto tek doğruluk kaynağıdır - dizin, `npm run build:catalog` tarafından **oluşturulur** ve committed dizin manifestolardan saparsa `npm run validate:catalog` CI'ı başarısız kılar.

---

## Mimari taahhütler

Bu kararlar kesinleşmiştir. Bunlardan herhangi birini değiştirmek büyük bir girişimdir - kod tabanındaki diğer her kararı şekillendirirler.

### 1. Bildirimsel araçlar, buyurgan bir kaçış kapısıyla

Bir araç; bir manifesto (`tool.json`) + bir şablon (`template.html`) + isteğe bağlı `hooks.js`'ten oluşur.

**Girdileri manifesto bildirir.** Şablon değil. Girdiler, Handlebars belirteçlerinden çıkarılmaz. Manifesto sözleşmedir; şablon, adlandırılmış değişkenleri `{{id}}` ile tüketir.

**Hook'lar isteğe bağlıdır.** Çoğu araç saf bildirimseldir - manifesto + şablon yeterlidir. Hesaplanmış değerlere ihtiyaç duyan araçlar (QR kodlama, grafik veri şekillendirme), adlandırılmış yaşam döngüsü fonksiyonlarını (`onInit`, `onInput`, hareket-duyarlı araçlar için kare başına canlı kamera hook'u olan `onFrame`, `beforeExport`, `afterExport` ve Gizli Veri Temizleme gibi cihaz üzerinde çalışan araçların kullandığı dosya-girdi/dosya-çıktı dönüştürme yolu olan `exportFile`) açığa çıkaran bir `hooks.js` sağlar. (`beforeRender`, hook sözleşmesinde ayrılmıştır ama şu anda hiçbir çağrı noktası yoktur - buna güvenmeyin.) Host, hook'ları `new Function('host', …)` aracılığıyla, yetenek köprüsü kapsam (closure) olarak enjekte edilmiş şekilde yükler. Bu, **bir taşınabilirlik sözleşmesidir, güvenlik korumalı alanı (sandbox) değil**: hook'lar yine de sayfa realm'inde çalışır ve bir tarayıcı shell'inde `window`/`fetch`/`document`'a *erişebilir* - `host.*` desteklenen, taşınabilir yüzeydir, zorunlu kılınan bir sınır değil. Asenkron hook sonuçları zaman sınırlıdır (onInit 5sn, onInput 2sn, diğerleri 5sn) ve geç gelen sonuçlar atılır; kaçak bir *senkron* hook önlenemez. Bu nedenle güvenilmeyen üçüncü taraf hook kodunun çalıştırılması, Worker izolasyonu gelene kadar güvenli değildir.

Bunun önemi şudur: bildirimsel araçlar, geliştirici olmayan kişilerce de yazılabilir. Eğer her araç bir web uygulaması olsaydı, "iş gören şablonları oluşturacak/sürdürecek sınırlı beceri" risk notu kalıcı bir darboğaza dönüşürdü.

### 2. Araçlar ve varlıklar, paketlenmiş kod değil veridir

Web ve Tauri uygulamaları, önyükleme sırasında araç ve varlık kataloglarını bilinen bir URL'den çeker, yerel olarak önbelleğe alır ve orada ne varsa onun üzerinde çalışır. **Yeni bir etkinlik karosu veya mevsimlik varlık eklemek, bir uygulama sürümü gerektirmez.**

Varlık baytları, CDN zehirlenmesini önlemek için SHA-256 ile sağlama toplamına tabi tutulur. Varlık `id`'si + `version`'ı önbellek geçersizleştirmeyi yönlendirir.

### 3. Araçların gördüğü tek API, Yetenek Köprüsü'dür

Araçlar şablon alanları dışında hiçbir zaman DOM'a dokunmaz, hiçbir zaman doğrudan `fetch` çağırmaz, hiçbir zaman dosya sistemini okumaz. Sürümlenmiş `host.*` metotlarını çağırırlar. Köprü, `engine/src/bridge/host-v1.ts` içinde tanımlanmıştır:

| Bridge API | What it does |
|---|---|
| `host.profile` | Kullanıcının adı, e-postası, profil fotoğrafı, şehri vb. `bindToProfile` aracılığıyla girdileri önceden doldurur. |
| `host.assets` | Katalog sorguları, varlık çözümleme, host tarafından sağlanan seçici arayüzü. |
| `host.state` | Girdi yuvalarını kaydeder / yükler. Web'de IndexedDB, Tauri'de dosya sistemi, CLI'da bellek. |
| `host.clipboard` | Panoya metin veya görsel yazar (platform yedekleriyle birlikte). |
| `host.export` | Oluşturma hedefini rasterleştirir veya serileştirir. Deneysel (`experimental`) araçlara filigran uygular. |
| `host.net` | İzin listesine alınmış fetch - yalnızca araç `"network"` yeteneğini bildirmişse kullanılabilir. (Şu anda bunu kullanan yayınlanmış bir araç yoktur.) |

İsteğe bağlı, katmalı yüzeyler yalnızca bir shell bunları sağladığında görünür. Bunlardan ikisi **yeteneğe bağlıdır** - yalnızca araç, eşleşen bayrağı bildirdiğinde açığa çıkar: `host.compose` (başka bir aracın oluşturduğunu gömme - `compose`) ve `host.capture` (URL Ekran Görüntüsü için sayfa yakalama - `capture`). Geri kalanı ise **özellik algılamalıdır** - shell bunları sağlayabildiği her durumda mevcuttur: `host.text` (HarfBuzz WASM aracılığıyla metinden-yola dönüştürme; `wasm` yeteneği buna bağımlı araçları işaretler), `host.pdf` (Gizli Veri Temizleme ve PDF Sıkıştır tarafından kullanılan PDF ayrıştırma/sıkıştırma) ve `host.tokens` (DTCG tasarım token'ları). Bildirilebilir yetenekler şunlardır: `network`, `filesystem`, `clipboard`, `camera`, `ffmpeg`, `wasm`, `capture`, `compose`.

Aynı araç tarayıcıda, Tauri'de ve başsız (headless) CLI'da çalışır çünkü her shell bu arayüzü uygular - araç, hangisinde çalıştığını asla bilmez.

Köprü sürümlenmiştir. Metot eklemek küçük (minor) bir sürümdür. Metotları kaldırmak veya imzalarını değiştirmek büyük (major) bir sürüm sıçramasıdır. v2 yayınlandığında v1 çalışmaya devam etmelidir.

### 4. Varlık ID'leri kalıcıdır

`suse/logo/primary` bir sözleşmedir. Bir kez yayınlandıktan sonra:
- ID hiçbir zaman değişmez, hiçbir zaman yeniden kullanılmaz.
- Bayt değişiklikleri → manifestodaki `version`'ı artırın.
- Yeni bir varlıkla değiştirilmişse → `deprecated: true` ayarlayın ve isteğe bağlı olarak `replacedBy` belirtin.
- Var olan referanslar her zaman çözümlenir.

Bu, kaydedilmiş araç durumlarını ve URL ile paylaşılan bağlantıları yıllar boyunca dayanıklı kılar.

### 5. URL modu birinci sınıftır

Her girdi bir URL parametresi olarak ifade edilebilir olmalıdır:

```
lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H
```

CLI modu, farklı bir taşıma katmanı altındaki URL modudur - CLI shell, argv'den bir URL-durum nesnesi oluşturur ve **aynı** motor iş hattını çalıştırır. Tek bir oluşturma yolu vardır. CLI, GUI'den sapamaz çünkü ayrı bir uygulama değildir.

`url-mode.ts`, gidiş-dönüşü (ayrıştırma ve serileştirme) yönetir. Ayrılmış parametreler (araca girdi olarak asla iletilmez): `format`, `export`, `copy`, `slot`, `output`, `filename`, `_v`, `z` (paketlenmiş durum - "En kısa bağlantı" belirteci), `width`/`w`, `height`/`h`, `unit`, `dpi`, `profile`, `password`, `bleed`, `marks`, `full`, `options`, `nostage`. URL modundaki varlık girdileri `id`'lerine göre serileştirilir; çalışma zamanı (runtime), hidrasyondan önce bunları `host.assets.get()` aracılığıyla çözümler. `width`/`height`, `unit` cinsinden değerlerdir (varsayılan `px`, ayrıca `mm`/`cm`/`in`/`pt`/`pc`); fiziksel bir birimle `dpi`, raster çözünürlüğünü belirler. Bunlar kanvas belge boyutunu ayarlar ve dışa aktarma boyutları panelini önceden doldurur.

### 6. Depolama, doğrudan değil köprü üzerinden gerçekleşir

Web shell: IndexedDB. Tauri: dosya sistemi. CLI: bellek içi. Araçlar yalnızca `host.state.save(slot, data)` ve `host.state.load(slot)`'u görür. `localStorage` kullanılmaz - çok küçüktür ve blob'ları tutamaz.

Kullanıcılar araç başına birden çok adlandırılmış düzenleme yuvası kaydedebilir ve daha sonra her oturuma geri dönebilir. Hesap oluşturma gerekmez; durum cihaz başınadır. Köprü tek dikiş noktası olduğundan, bu cihaz başına durum aynı zamanda *taşınabilirdir*: `shells/web/src/data-transfer.ts`, her şeyi `host.profile`/`host.state`/`host.assets` aracılığıyla geri okuyup, başka herhangi bir kuruluma içe aktarılabilen tek bir `lolly-backup` zip'ine dönüştürür - sunucu gerektirmeyen "yeni bir cihaza taşı" sorusunun çevrimdışı yanıtı (tam özellik: `docs/data-transfer.md`). SUSE ID entegrasyonu (çoklu cihaz senkronizasyonu), bunun üzerine kurulacak gelecekteki bir kilometre taşıdır.

### 7. Olgunluk etiketleri, "marka onaylı" riskine yapısal olarak yanıt verir

Her araç, manifestosunda `status: official | community | experimental` bildirir. Galeri, duruma göre sıralanır. Deneysel araçlar, dışa aktarımlarını otomatik olarak filigranlar - filigran, araç tarafından değil `host.export.render` tarafından uygulanır, dolayısıyla resmi olmayan bir araç yazarı bunu devre dışı bırakamaz.

Bu, herhangi bir aracı kullanmanın marka onayı ima ettiği algı riskine yapısal bir yanıttır. Süreç yanıtları (bir inceleme kuyruğu, SUSE ID geçit kontrolü) bunun üzerine katmanlanır.

### 8. Araç girdileri, varlıklar dahil olmak üzere manifesto aracılığıyla tiplendirilir

Girdiler bir `type` bildirir: `text`, `longtext`, `number`, `boolean`, `color`, `select`, `asset`, `date`, `time`, `datetime-local`, `url`, `profile`, `blocks`, `vector` ve `file`. Host, manifestodan tipe göre genel bir kontrol oluşturur - araçlar hiç kontrol kodu yazmaz. Üçü diğerlerinden daha fazla ağırlık taşır:

- **`asset`** (`filter` ve `allowUpload` ile birlikte), küresel varlık sistemine köprüdür; `allowUpload: false`, yalnızca kütüphane varlıklarına izin verilen sponsorluk-karosu logoları gibi şeyler için marka uygulanabilirliği kaldıracıdır. Kullanıcı yüklemeleri, kütüphane varlıklarıyla aynı `AssetRef` şeklini kullanır, bu yüzden araçlar bunları özdeş şekilde işler.
- **`blocks`**, tekrar eden bir alan grubudur - bir girdinin içinde, yan bir panelde düzenlenen, tiplendirilmiş/ayrık bir ekleme menüsüne ve blok başına varlık alanlarına sahip bir mini tablo. Kanvasta oluşturulmuş bir bloğa tıklamak, o bloğun satırına odaklanır. `meeting-planner`, `chart-creator`, `event-name-badge`, `wayfinding-signage`, `color-block` ve `digi-ad` tarafından kullanılır.
- **`vector`**, sabit bir sayı kümesini (örn. bir dönüşümü) tek bir bileşik kontrolde gruplar; **`file`** ise (`strip-data` ve `compress-pdf` gibi) cihaz üzerinde çalışan dönüştürme araçları için kullanıcının kendi dosyasını bellekte bayt olarak tutar.

### 9. Şablonlar mantıksızdır (Handlebars, EJS değil)

Handlebars, EJS yerine bilinçli olarak seçildi:
- Mantıksız. Şablonlar, geliştirici olmayan kişilerce de yazılabilir.
- Varsayılan olarak güvenli. `{{x}}` HTML kaçışı yapar; `{{{x}}}` isteğe bağlı ham çıktıdır.
- Şablonlarda keyfi JS bulunmaması, şablon başına XSS denetim yüzeyi olmadığı anlamına gelir.

Mantık, açık ve incelenebilir olduğu `hooks.js` içinde yaşar. Kullanılabilir Handlebars yardımcıları: `{{default}}`, `{{upper}}`, `{{lower}}`, `{{eq}}`, `{{markdown}}`, `{{asset ref}}`, `{{asset ref "property"}}` (artı, kardeş `.ics`/`.vcf`/`.csv` şablonları tarafından kullanılan veri-biçimlendirme yardımcıları `icsStamp`/`rfcText`/`csvCell`).

### 10. Araçlar, araçları birleştirir

Bir araç, araçtan araca içe aktarma olmadan **başka** bir aracın oluşturduğunu gömebilir - birleştirme, araç kodu tarafından değil, her zaman motor tarafından çözümlenir. İki yüzey vardır:

- **Bildirimsel manifesto** - `composes: [{ id, tool, inputs, format?, width?, height? }]`. Motor, adlandırılmış alt öğeyi oluşturur ve sonucu mantıksız şablona `{{asset <id>}}` olarak yerleştirir. `event-name-badge`, bugün `qr-code`'u bir SVG olarak birleştirir.
- **Taşınabilir gömme URL'si** - `<img src="https://lolly.tools/tool/<id>.<ext>?<inputs>">`. Shell, o alt öğeyi **yerel olarak** oluşturur (yerel oluşturma çözümlenene kadar bir yer tutucu piksel gösterilir); `lolly.tools`'tan hiçbir şey asla getirilmez.

Herhangi bir aracın oluşturduğunu birleştirin: bir **SVG** alt öğesi, ebeveyn SVG veya PDF'e dışa aktarıldığında gerçek bir vektör olarak kalır ve PNG için keskin bir şekilde rasterleşir; **PNG/JPG/WEBP** alt öğeleri görsel olarak gömülür. `compose` yeteneğini gerektirir. Birleştirilen alt öğeler ara ürünlerdir - asla filigranlanmaz veya köken (provenance) damgası basılmaz - ve birleştirme zarifçe bozulur: bir alt öğeyi oluşturamayan bir shell yalnızca o yuvayı atlar ve ebeveyn yine de oluşturulmaya devam eder.

---

## Kasıtlı olarak yapmamayı seçtiklerimiz

- **Şablonlarda EJS yok / keyfi JS yok.** XSS yüzeyi sıfırdır. Mantık `hooks.js` içinde yaşar.
- **Zorunlu bir varlık CMS'i yok.** Bireyler kendi kreatif dosyalarını uygulama içinden doğrudan kataloglarına aktarır ([Katalog](/info/using.html) görünümü ve Brand Studio) ve [Layout Studio](/info/using.html) oturumlarını kaydederek kendi araçlarını oluşturur - sunucu yok, yönetim konsolu yok. *Paylaşılan, denetimli* bir katalog isteyen bir kuruluş, varlık dizinini git olarak **yönetebilir** ve güncellemeleri PR incelemesinden geçirerek denetleyebilir - bu, uygulamanın bir gerekliliği değil, kullanılabilir bir yönetişim modelidir.
- **Zorunlu RBAC yok.** Açık uygulama varsayılan olarak herkese açık erişimlidir; marka riski olgunluk etiketleri ve filigranlarla yönetilir. Daha sıkı kontrol isteyen bir kuruluş, kendi kimlik doğrulamasını ve yukarıdaki git ile incelenen katalogu üzerine katman olarak ekler.
- **Merkezi bir veritabanı yok.** Tüm kullanıcı durumu cihaz başınadır. SUSE ID entegrasyonu yol haritasında yer alır ancak lansmanı engelleyen bir unsur değildir.
- **Paylaşılan araç/motor kod yolu yok.** Motor açık kaynaktır; `tools/` ve `assets/` kendi depolarında SUSE'ye özel içerik olarak kalır. Bu ayrım zorunlu kılınmıştır (çapraz içe aktarma yoktur), böylece bölünme temiz kalır.

---

## Yaşam döngüsü, uçtan uca

Bir kullanıcı `lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H` adresini açar:

1. **Önyükleme.** Web kabuğu IndexedDB'yi açar, yetenek köprüsünü oluşturur, araç ve varlık kataloglarını eşitler (çevrimdışıyken önbellekten yükler).
2. **Yönlendirme.** URL hash → `tool` görünümü; `qr-code` ve URL parametreleri ayrıştırılır.
3. **Yükleme.** `loadTool('qr-code', fetchFile)`, `tool.json`'ı getirir, JSON Schema'ya göre doğrular, `template.html`, `styles.css` ve `hooks.js` kaynağını getirir.
4. **URL durumunu ayrıştırma.** `parseUrlState`, URL parametrelerini başlangıç girdi değerlerine dönüştürür. Varlık referansları (`?logo=suse/logo/primary`) hafif `{ id, _unresolved: true }` nesneleri olarak ayrıştırılır.
5. **Çalışma zamanı.** `createRuntime(tool, host, initialValues)`, girdi modelini oluşturur (profil verisini, varsayılanları ve başlangıç değerlerini birleştirerek), varlık referanslarını `host.assets.get()` ile çözer, hook'ları yükler (`host` closure kapsamında, sandbox'lanmamış), `hooks.onInit`'i çağırır.
6. **Oluşturma (render).** Kabuk, çalışma zamanına abone olur; her durum değişiminde `{ model, hydrated }` alır. Modelden girdi kontrollerini oluşturur ve hidratlanmış şablon HTML'ini `#tool-canvas` içine yazar.
7. **Etkileşim.** Kullanıcı bir girdiye yazar → `runtime.setInput(id, value)` → kısıtlar uygulanır → `hooks.onInput` çağrılır → yeniden hidratlama → yeniden oluşturma. Kanvas canlı olarak güncellenir.
8. **Dışa aktarma.** Kullanıcı İndir(PNG) düğmesine tıklar → `runtime.export(canvasNode, 'png')` → `host.export.render` (dom-to-image-more ile rasterleştirir; SVG/PDF özel DOM-gezen vektörleştiricilerden geçer) → blob → `host.export.download`. Bir aracın destekleyebileceği format aralığı geniştir: `svg`, `png`, `jpg`/`jpeg`, `webp`, `avif`, `pdf`, vektör formatları `emf`, `eps`, ayrıca baskı/CMYK formatları `pdf-cmyk`, `cmyk-tiff`, `eps-cmyk`; video formatları `webm`, `mp4`, `gif`; ve veri/metin formatları `html`, `md`, `txt`, `json`, `csv`, `ics`, `vcf`, `ico`, `zip`. (`render.export: false` ayarlayan araçlar - ör. Color Palette, Countdown Timer, Strip Hidden Data, Text Helper, Compress PDF - indirme/format/boyut kontrollerini gizler.) Fiziksel birimler burada format başına dönüştürülür (PDF → gerçek sayfa noktaları, raster → DPI'de piksel, bir `pHYs` parçasıyla). Yazarlık/köken meta verisi (yazar, araç, kaynak - `engine/src/metadata.ts` tarafından oluşturulur) format başına gömülür: PNG iTXt, JPEG EXIF, PDF bilgi sözlüğü, SVG `<metadata>`, GIF yorumu. Deneysel araçlara filigran, araç tarafından değil, host tarafından eklenir.

Tauri'de de aynı yaşam döngüsü. CLI'de de aynı yaşam döngüsü - jsdom, headless DOM'u sağlar; çıktı bir dosyaya veya stdout'a gider.

---

## Açık kaynak durumu

`engine/`, `shells/`, `schemas/` ve `docs/` dizinleri **MPL-2.0** altında açık kaynaktır - marka araçları için satıcıdan bağımsız bir iskele platformu olup, her dağıtılabilir birim [github.com/lolly-tools](https://github.com/lolly-tools) altında kendi deposuna ayrılmıştır. `tools/` ve `catalog/assets/` SUSE'ye özgü içeriktir ve **SUSE'ye özel mülkiyet** olarak kalır (tüm hakları saklıdır - her deponun `NOTICE.md` dosyasına bakın); bunlar MPL kapsamında değildir.

Bu ayrım zorunlu kılınmıştır - `engine/` içinden `tools/` veya `assets/`'e çapraz içe aktarma yoktur - böylece platform/içerik sınırı temiz kalır.

---

## Yol haritası

| Kilometre Taşı | Hedef | Ne |
|---|---|---|
| **İlk araçlar** | ✅ Tamamlandı | QR Code, Quote Card, Email Signature, Day Brief, Code Canvas, Countdown Timer, Color Palette, Brand Lockup, Bag Video, Chart Creator, Filter: Duotone, Meeting Planner - web kabuğu canlı |
| **Mevcut araçları geliştir** | 2026 ortası ✅ Tamamlandı  | İndirilebilir çevrimdışı uygulama (Tauri); ek çalışan ve etkinlik araçları; daha zengin dışa aktarma hattı (metinden-yola kararlılığı, meta veri, ek formatlar - bkz. `plans.md`) |
| **Motoru açık kaynak yap** | 2026 sonu ✅ Tamamlandı  | Motor, kabuklar, şemalar, dokümanlar herkese açık hale gelir - markalı araçlar/varlıklar değil |
| **Cihazdan cihaza aktarım** | ✅ Tamamlandı | Taşınabilir `lolly-backup` paketi, profili, kaydedilmiş oturumları, yüklenen görselleri ve tercihleri herhangi iki kurulum arasında taşır - çevrimdışı veya çevrimiçi, hesap gerekmez. İleriye dönük uyumlu, bütünlüğü doğrulanan zarf (belirtim: `docs/data-transfer.md`) |
| **Resmi araç yol haritası oluştur** | 2026 sonu | Müşteri referans kitleri, AI tasarım içe aktarma, GET/URL istek modu |
| **Cihaz üzerinde gizlilik araçları** | 🚧 Devam ediyor | *Kendi* dosyanızı yerel olarak işleyen içerik dönüştürme araçları (dosya girer → temiz dosya çıkar), tek amaçlı SaaS'lere veri sızıntısının yerini alır. **Tamamlandı:** `file` girdi türü + `exportFile` dönüştürme yolu + `privacy:"on-device"` kuralları (filigran/köken yok) + **Strip Hidden Data** (JPEG/PNG/SVG/PDF meta verisi, PDF için `host.pdf` köprüsü üzerinden) ve **Text Helper** (günlük bir web sitesine yapıştırma işleri için cihaz üzerinde çalışma tezgahı - JSON biçimlendirme, JWT çözme, Base64, URL kodlama/çözme, SHA özetleme, ayrıca bir Novelty grubu). **Sırada:** kırpma/yeniden boyutlandırma, görsel dönüştürme/sıkıştırma; ardından bir `host.image` kodek köprüsü (belirtim: `plans/exfiltration-app-content.md`) |
| **Tasarım belirteçleri (DTCG)** | 🚧 Renk gönderildi | Marka ilkeleri, kurallara uygun [W3C Tasarım Belirteçleri (DTCG)](https://www.designtokens.org/TR/drafts/format/) biçiminde - [Penpot'un içe/dışa aktardığı](https://help.penpot.app/user-guide/design-systems/design-tokens/) format. **Tamamlandı:** renk belirteçleri (`suse/tokens/brand`), `host.tokens` köprüsü, seçici renk örnekleri + referansla bağlı değerler (belirtim: `docs/design-tokens.md`). **Sırada:** boyut/tip belirteçleri, Penpot içe/dışa aktarımı, aktarım paketindeki kullanıcı belirteçleri (`tokens.json`) |
| **MCP ajan uç noktası (render)** | ✅ Tamamlandı | Bir [MCP](https://modelcontextprotocol.io) sunucusu, katalog + oluşturma (render) yolunu çağrılabilir araçlar olarak sunar (`lolly_list_tools` / `describe_tool` / `build_url` / `render` / `transform`), böylece herhangi bir ajan bitmiş, kurallara bağlı varlıklar üretebilir - herhangi bir MCP istemcisine özel bir bağlayıcı (OAuth 2.1) olarak ekleyin veya bir CLI/HTTP istemcisini bearer token ile ona yönlendirin. `mcp.lolly.tools` adresinde canlı (tam uç nokta: barındırılan headless bir tarayıcı üzerinden raster/PDF/animasyon/video) ve `lolly.tools/api/mcp` (sunucusuz, tarayıcısız katman). Aşağıdaki Penpot *yazarlık* MCP'sinden farklıdır; o, araç **oluşturma** ile ilgilidir (belirtim: `plans/mcp-server.md`; kılavuz: `docs/mcp.md` + `docs/ai-agents.md`) |
| **Penpot dosyasını araç olarak içe aktarma** | 2027+ | Bir Penpot dosyasını içe aktarıp *bir Lolly aracı olarak* sunmak (bildirimsel, kısıt öncelikli), Penpot'ta tasarlanan tasarımları belirlenimci üreteçlere dönüştürür |
| **MCP + Penpot uzantısı (yalnızca çevrimiçi yazarlık)** | 2027+ | Bir Penpot MCP sunucusu, yeni araçları yapay zekâ ile ifade eder - belirlenimci şablonlar oluşturmanın en görsel yolu: markadan haberdar bir ilk tur, döngüdeki bir insan tarafından mükemmelleştirilir, zamanla tek seferlik yeni bağlamları hedefler. Araç *oluşturma* yalnızca çevrimiçidir; ürettiği araçlar her yerde çalışır |
| **RBAC + SUSE ID** | 2027+ | Belirli araçları SUSE ID arkasına kilitleme; çoklu cihazda kayıtlı durum; Google Drive içe/dışa aktarma |

---

## Motorun bittiği, host'un başladığı yer

Saf veri + Handlebars ile tarif edilebiliyorsa → **motor**.
DOM'a, dosya sistemine, ağa veya herhangi bir tarayıcı/işletim sistemi API'sine dokunuyorsa → **host**.

Bu çizgi kasıtlı olarak keskindir. Motor, açık kaynak olan kısımdır. SUSE'yi, belirli platformları veya çalışma zamanı ortamlarını bilen her şey bunun dışında tutulur.
