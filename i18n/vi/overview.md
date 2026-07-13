# Tổng quan

Tài liệu này trình bày mục đích, cấu trúc, và các quyết định kiến trúc của nền tảng Lolly. Nó phản ánh cả tầm nhìn sản phẩm lẫn hiện trạng của codebase.

> **Trạng thái:** Lolly là một nguyên mẫu nội bộ, đang trong **giai đoạn thử nghiệm khép kín (closed pilot) chưa hoàn tất**. Engine mang tính xác định (deterministic) và nhất quán nội bộ, nhưng sản phẩm vẫn còn ở giai đoạn sớm - SUSE là khách hàng đầu tiên - và các engine mật mã học cùng bộ phân tích tệp của nó hiện đang trải qua quá trình gia cố hạ tầng nghiêm ngặt của SUSE, chuẩn bị cho quy mô doanh nghiệp (đây là lĩnh vực chúng tôi thực sự giỏi). Hãy đọc phần kiến trúc dưới đây như một ý đồ thiết kế đang được kiểm chứng, chứ không phải một sản phẩm hoàn chỉnh, đã được chứng nhận. Xem [Áp dụng & Quản trị](/info/adoption-governance.html#status) để biết cách chương trình thử nghiệm này được vận hành và đo lường.

---

## Vì sao Lolly tồn tại

Các đội ngũ luôn gặp phải một vấn đề lặp đi lặp lại: công việc sáng tạo và nội dung mang tính lặp lại, đủ dễ đoán để không cần đến bàn tay chuyên môn mỗi lần, nhưng lại đủ nhạy cảm về chất lượng để không thể giao phó mà thiếu rào chắn. Kết quả là hoặc thông lượng chậm (nghẽn cổ chai ở chuyên gia), hoặc thiếu nhất quán (mỗi người dùng bất kỳ công cụ nào họ có sẵn), hoặc bị khóa chặt vào nhà cung cấp (một DAM SaaS kiểm soát các mẫu của bạn).

Nền tảng này là câu trả lời mang tính cấu trúc:

> **Sáng tạo và nội dung lập trình hoá ở quy mô lớn** - tạo asset gần như không tốn công sức, với các quy tắc nằm dưới sự kiểm soát tập trung, dành cho nhân viên, nhà cung cấp và đối tác.

Kết quả là **sự dồi dào**: mọi sự kiện đều có biển chỉ dẫn đúng chuẩn, mọi cảnh báo CVE đều khớp phong cách thương hiệu, mọi nhãn in đều sạch đẹp, mọi chữ ký email đều cập nhật - tất cả mà không cần một ticket thiết kế nào. Nền tảng này xử lý công việc sáng tạo mang tính vận hành, lặp lại. Nó cố tình không phải là một công cụ sáng tạo đặt riêng theo yêu cầu - các nhà thiết kế vẫn nắm giữ những sản phẩm chủ lực.

### Vị trí trong bối cảnh

| Khả năng | Canva | Cổng thương hiệu | Illustrator | Figma / Penpot | **Lolly** |
|---|---|---|---|---|---|
| Tạo nội dung hàng loạt | một phần | ✗ | ✗ | ✗ | **✓** |
| Hoạt động hoàn toàn ngoại tuyến | ✗ | ✗ | ✓ | một phần | **✓** |
| Logic mẫu & ràng buộc cứng | ✗ | một phần | ✗ | một phần | **✓** |
| Không yêu cầu kỹ năng thiết kế | một phần | ✓ | ✗ | ✗ | **✓** |
| Content Credentials tự động | ✗ | ✗ | một phần | ✗ | **✓** |
| Công cụ kết hợp với công cụ khác | ✗ | ✗ | ✗ | ✗ | **✓** |
| Engine mở, không khóa theo SaaS | ✗ | ✗ | ✗ | một phần | **✓** |
| Chứng chỉ nội dung C2PA | ✗ | ✗ | ✗ | ✗ | **✓** |
| Nguồn gốc cấp độ pháp y (tùy chọn bật) | ✗ | ✗ | ✗ | ✗ | **✓** |
| Ứng dụng Di động và Desktop | ✓ | ✗ | ✗ | một phần | **✓** |
| Dòng lệnh & TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

Khoảng trống này rất rõ ràng: không có gì trong bối cảnh hiện tại mang lại đầu ra ưu tiên ràng buộc, có khả năng ngoại tuyến, yêu cầu kỹ năng thấp, và dễ tiếp cận nội bộ. Lolly thậm chí còn có một canvas mở - **Layout Studio** - nơi màu sắc, kiểu chữ và asset đều tuân theo các biến toàn cục của thương hiệu, nên việc sắp xếp tự do vẫn giữ tính ưu tiên ràng buộc. Điều nó **không** phải là một bộ công cụ thiết kế không ràng buộc: các nhà thiết kế vẫn tiếp tục dùng Illustrator và Figma cho công việc chủ lực đặt riêng theo yêu cầu. Các biến thể có thể được lắp ráp bằng công cụ này.

**Dùng để:** Tạo nhanh các asset sáng tạo mang tính vận hành - ô sự kiện, thẻ tên, chữ ký, cảnh báo CVE, mã QR, thẻ mạng xã hội, nhãn lô hàng, báo cáo có cấu trúc.

**Không dùng để:** Nội dung chủ lực, đặt riêng theo yêu cầu.

---

## Bức tranh toàn cảnh

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

### Cấu trúc repository

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

## Mô hình phân phối nền tảng

Nền tảng này chạy trên nhiều bề mặt khác nhau - web PWA, Tauri desktop/mobile, CLI có thể viết script, và TUI tương tác. Tất cả đều dùng chung một engine và cùng các tệp công cụ.

### Web (PWA) - kênh phân phối chính
Được host tại một URL do SUSE kiểm soát. Hoạt động ngoại tuyến một khi service worker đã lưu bộ nhớ đệm cho các công cụ và asset. Đây là nơi hầu hết nhân viên, nhà cung cấp và đối tác sẽ dùng nền tảng. Không cần tài khoản - trạng thái được lưu trong IndexedDB theo từng thiết bị.

Web shell là responsive từ một bố cục duy nhất. Trên desktop, một công cụ là một sidebar điều khiển có thể đổi kích thước nằm cạnh khung xem trước, với khả năng điều hướng canvas thuần trackpad (cuộn kèm Cmd/Ctrl hoặc chụm hai ngón để thu phóng quanh con trỏ, giữ Space hoặc kéo bằng nút chuột giữa để di chuyển khung nhìn, các phím `0`/`1`/`+`/`−`, và một HUD Fit/%). Trên di động (≤640px), các điều khiển trở thành một tấm trượt neo ở phía trên với tay cầm kéo tự chốt vào peek/half/full (chạm để chuyển đổi), nằm trên một bản xem trước toàn màn hình tĩnh, còn nút **Render** nổi sẽ mở các điều khiển **Export** trong một popup dạng tấm trượt. Cảm ứng thì dùng chụm để thu phóng và kéo để di chuyển khung nhìn trên bản xem trước. Render path và các điều khiển export giống hệt nhau ở cả hai - chỉ phần khung giao diện (chrome) là đổi cách bố trí.

**Chế độ Batch (`/pro`).** Web shell cũng đi kèm một lưới batch kiểu bảng tính (`shells/web/src/pro/`) render nhiều hàng cùng lúc trên một hoặc nhiều công cụ. Nó hỗ trợ round-trip CSV/TSV cộng với dán trực tiếp từ bảng tính, template/định dạng/kích thước/đơn vị/dpi theo từng hàng, một panel bên chỉnh sửa blocks kèm xem trước trực tiếp, các cột export có thể thu gọn, một thanh gắn nhãn "relevance" theo từng hàng, sắp xếp lại hàng bằng tay cầm kéo bên trái, xác nhận xoá hai bước, các phiên batch đã lưu, và tải xuống dạng `.zip`. Đây là bề mặt một-đến-nhiều đứng sau định vị "tạo nội dung hàng loạt".

### Tauri desktop / mobile
Ứng dụng native đóng gói sẵn (dung lượng nhỏ nhờ Tauri). Cung cấp khả năng hoạt động ngoại tuyến đầy đủ, quyền truy cập hệ thống tệp cho các công cụ phụ thuộc CLI (PDF Smasher, Font Outliner), và quyền truy cập camera. Dự kiến được nâng cấp bộ công cụ vào giữa năm 2026.

### CLI
`lolly <tool-id> [--input=value ...] --output=file.png`

Người dùng desktop có thể gọi nhiều công cụ ngay từ terminal. CLI shell nạp cùng một engine, tạo ra một DOM jsdom, chạy cùng render path, và ghi ra tệp. Chế độ URL chính là lớp truyền tải - CLI không phải là một cài đặt (implementation) riêng biệt. Điều này đảm bảo đầu ra của CLI và GUI luôn giống hệt nhau.

```bash
lolly qr-code --url=https://suse.com --output=qr.svg
lolly quotes --quote="Ship it." --output=quote.png
lolly                        # liệt kê các công cụ khả dụng
lolly qr-code                # liệt kê các đầu vào của công cụ đó
```

### TUI
`npm run tui`

Phiên bản tương tác song song với CLI: một ứng dụng terminal toàn màn hình, ưu tiên bàn phím (xây trên Ink) để duyệt công cụ, điền đầu vào, lưu project, và export - tất cả mà không cần GUI. Host bridge của nó **tái sử dụng cài đặt của CLI** cho các định dạng không cần DOM (SVG/EMF/EPS/HTML + văn bản/dữ liệu), và bổ sung trạng thái lưu trên đĩa dưới `~/.lolly` cùng một bản xem trước nội tuyến tùy chọn. Ngoài ra nó còn có một **tầng render trình duyệt**: một Chromium headless có phạm vi giới hạn (cùng loại mà MCP server cài đặt) tạo ra raster/PDF/video và chụp URL trực tiếp theo yêu cầu - vận hành một bản build của web shell nên đầu ra giống hệt nhau, và chỉ khởi chạy khi bạn export một định dạng như vậy lần đầu tiên. Vì vậy `url-shot` (với crop + đổi màu + vector PDF/SVG) và mọi công cụ raster/pdf khác cũng chạy được ngay trong terminal. Xem [hướng dẫn TUI](/info/tui.html).

---

## Danh mục công cụ

Các công cụ được gắn nhãn bằng một `category` trong manifest của chúng để nhóm lại trong gallery.

Các hàng được liệt kê theo đúng thứ tự các mục trong gallery. Mục `utility` luôn render **cuối cùng** trong gallery (sau mọi danh mục khác, kể cả những danh mục sẽ có trong tương lai) - đây là ngăn kéo "Offline Utilities" chạy trên thiết bị.

| Danh mục | Công cụ đã phát hành | Dự kiến |
|---|---|---|
| `everyone` | QR Code Generator, Quote Card, Email Signature, Day Brief, Code Canvas, Color Block, Dynamic Layout, Logo, Web Icon Maker | Employee Image Stationery |
| `designer` | Brand Lockup, Bag Video, Chart Creator, Street Map, Animated Ad, Multi-Page PDF, Diagram Builder, Logo Lockup: Grid (NASCAR), Logo Lockup: Partner, Filter: Duotone, Filter: Halftone, Filter: Scanline, Filter: Posterize Bitmap, Filter: Pixel Stretch | Font Outliner |
| `event` | Meeting Planner, Event Name Badge, Wayfinding Signage, Calendar ICS | Event Stationery, Bulk Name Badges, Room Agenda Cards |
| `product` | - | CVE Alert, Product Release Announcement, Blog OG Image |
| `utility` | Countdown Timer, Color Palette, URL Screenshot, Strip Hidden Data, Text Helper, Compress PDF, Layout Studio | Bộ chuyển đổi đơn vị/định dạng, thêm các tiện ích quyền riêng tư trên thiết bị khác |

Các công cụ cũng được phân loại theo `status`: `official` (được thương hiệu phê duyệt, không có watermark), `community` (đóng góp từ bên ngoài), `experimental` (bản xuất có gắn watermark). Dynamic Layout, URL Screenshot, Logo Lockup: Grid (NASCAR), Filter: Posterize Bitmap và Diagram Builder hiện mang trạng thái `experimental`; Web Icon Maker và Layout Studio được phát hành như các công cụ `community`.

**Layout Studio** là công cụ đầu tiên được xây trên chế độ canvas tự do `render.layout: "editor"` - một bề mặt thao tác trực tiếp, không khung giao diện, nơi bạn kéo, đổi kích thước, xoay và gắn (snap) các khối văn bản, hình khối và hình ảnh, rồi export qua cùng render path như mọi công cụ khác.

**Strip Hidden Data** là **tiện ích chạy trên thiết bị (on-device)** đầu tiên (`privacy: "on-device"`): một công cụ biến đổi nội dung nhận vào một tệp do *bạn* cung cấp, xử lý hoàn toàn trong trình duyệt, và trả lại một bản sao sạch - không bao giờ tải lên, không bao giờ gắn watermark, không đóng dấu nguồn gốc (provenance). **Text Helper** là tiện ích thứ hai - một bàn làm việc trên thiết bị cho các tác vụ dán-vào-một-trang-web thường ngày (định dạng JSON, giải mã JWT, Base64, mã hoá/giải mã URL, băm SHA). **Compress PDF** là tiện ích thứ ba - nó thu nhỏ một PDF bằng cách nén lại hình ảnh bên trong, cũng hoàn toàn trên thiết bị. Cả ba đều mang dòng chữ huy hiệu "Runs on your device - nothing is uploaded". Đây là khởi đầu của một danh mục tiện ích quyền riêng tư nhằm thay thế việc giao tệp bí mật cho các trang web đơn chức năng.

> Lưu ý: `category` và `status` được phi chuẩn hoá (denormalise) vào `catalog/tools/index.json` (registry mà gallery đọc) từ từng `tool.json`. Manifest là nguồn chân lý duy nhất - index được **sinh ra tự động** bởi `npm run build:catalog`, và `npm run validate:catalog` sẽ làm CI thất bại nếu index đã commit lệch khỏi các manifest.

---

## Các cam kết kiến trúc

Đây là những quyết định đã chốt. Thay đổi bất kỳ điều nào trong số đó là một việc lớn - chúng định hình mọi quyết định khác trong codebase.

### 1. Công cụ khai báo (declarative), với một lối thoát mệnh lệnh (imperative)

Một công cụ là một manifest (`tool.json`) + một template (`template.html`) + `hooks.js` tùy chọn.

**Manifest khai báo các đầu vào (input).** Không phải template. Các đầu vào không được suy luận từ các token Handlebars. Manifest là hợp đồng (contract); template chỉ tiêu thụ các biến đã được đặt tên qua `{{id}}`.

**Hook là tùy chọn.** Hầu hết các công cụ hoàn toàn mang tính khai báo - manifest + template là đủ. Những công cụ cần giá trị tính toán (mã hoá QR, tạo hình dữ liệu biểu đồ) cung cấp `hooks.js` phơi bày các hàm vòng đời (lifecycle) đã đặt tên (`onInit`, `onInput`, `onFrame` - hook camera trực tiếp theo từng khung hình dành cho các công cụ phản ứng theo chuyển động - `beforeRender`, `beforeExport`, `afterExport`, và `exportFile` - đường biến đổi file-vào/file-ra dùng bởi các tiện ích chạy trên thiết bị như Strip Hidden Data). Host nạp các hook qua `new Function('host', …)` với capability bridge được tiêm vào dưới dạng closure scope. Đây là một **hợp đồng về tính khả chuyển (portability), không phải một sandbox bảo mật**: hook vẫn chạy trong realm của trang và *có thể* chạm đến `window`/`fetch`/`document` trong một shell trình duyệt - `host.*` là bề mặt được hỗ trợ, có thể mang đi được, chứ không phải một ranh giới được cưỡng chế. Các kết quả hook bất đồng bộ được giới hạn thời gian (onInit 5s, onInput 2s, các hook khác 5s) và kết quả đến muộn sẽ bị bỏ qua; một hook *đồng bộ* chạy loạn thì không thể bị ngắt giữa chừng. Vì vậy mã hook của bên thứ ba không đáng tin cậy chưa an toàn để chạy cho đến khi tính năng cách ly Worker ra mắt.

Điều này quan trọng vì: các công cụ khai báo có thể được viết bởi những người không phải lập trình viên. Nếu mọi công cụ đều là một ứng dụng web, thì rủi ro "thiếu kỹ năng để tạo/bảo trì các template chủ lực" sẽ trở thành một nút thắt cổ chai vĩnh viễn.

### 2. Công cụ và asset là dữ liệu, không phải code đóng gói sẵn

Các ứng dụng web và Tauri lấy về catalog công cụ và asset từ một URL đã biết ngay khi khởi động, lưu bộ nhớ đệm cục bộ, rồi vận hành trên bất cứ thứ gì có sẵn ở đó. **Thêm một ô sự kiện mới hay một asset theo mùa không cần đến việc phát hành ứng dụng mới.**

Các byte của asset được tính checksum SHA-256 để ngăn chặn CDN bị đầu độc (poisoning). `id` + `version` của asset điều khiển việc vô hiệu hoá bộ nhớ đệm.

### 3. Capability Bridge là API duy nhất mà công cụ nhìn thấy

Công cụ không bao giờ chạm vào DOM bên ngoài vùng template của chúng, không bao giờ gọi `fetch` trực tiếp, không bao giờ đọc hệ thống tệp. Chúng gọi các phương thức `host.*` đã được đánh phiên bản. Bridge được định nghĩa trong `engine/src/bridge/host-v1.ts`:

| Bridge API | Chức năng |
|---|---|
| `host.profile` | Tên, email, ảnh chân dung, thành phố, v.v. của người dùng. Tự điền sẵn các đầu vào qua `bindToProfile`. |
| `host.assets` | Truy vấn catalog, phân giải asset, giao diện picker do host cung cấp. |
| `host.state` | Lưu / nạp các slot đầu vào. IndexedDB trên web, hệ thống tệp trên Tauri, bộ nhớ trên CLI. |
| `host.clipboard` | Ghi văn bản hoặc hình ảnh vào clipboard (có phương án dự phòng theo từng nền tảng). |
| `host.export` | Raster hoá hoặc serialise mục tiêu render. Áp watermark cho các công cụ experimental. |
| `host.net` | Fetch nằm trong danh sách cho phép (allowlisted) - chỉ khả dụng nếu công cụ khai báo khả năng `"network"`. (Hiện chưa có công cụ nào đã phát hành dùng đến nó.) |

Các bề mặt bổ sung, tùy chọn chỉ xuất hiện khi một shell cung cấp chúng. Hai trong số đó **bị khoá theo khả năng (capability-gated)** - chỉ được phơi bày khi công cụ khai báo cờ tương ứng: `host.compose` (nhúng bản render của một công cụ khác - `compose`) và `host.capture` (chụp trang cho URL Screenshot - `capture`). Số còn lại được **phát hiện theo tính năng (feature-detected)** - có mặt bất cứ khi nào shell có thể cung cấp: `host.text` (chuyển văn bản thành đường path qua HarfBuzz WASM; khả năng `wasm` đánh dấu các công cụ phụ thuộc vào nó), `host.pdf` (phân tích/nén PDF, dùng bởi Strip Hidden Data và Compress PDF), và `host.tokens` (token thiết kế DTCG). Các khả năng có thể khai báo là: `network`, `filesystem`, `clipboard`, `camera`, `ffmpeg`, `wasm`, `capture`, `compose`.

Cùng một công cụ chạy được trong trình duyệt, Tauri, và CLI headless vì mỗi shell đều cài đặt giao diện (interface) này - công cụ không bao giờ biết nó đang chạy trong shell nào.

Bridge được đánh phiên bản. Thêm phương thức mới là một phiên bản nhỏ (minor version). Gỡ bỏ hoặc đổi signature là một lần tăng phiên bản lớn (major version). Khi v2 ra mắt, v1 vẫn phải tiếp tục hoạt động.

### 4. ID của asset là vĩnh viễn

`suse/logo/primary` là một hợp đồng. Một khi đã công bố:
- ID không bao giờ thay đổi, không bao giờ được tái sử dụng.
- Byte thay đổi → tăng `version` trong manifest.
- Được thay thế bằng một asset mới → đặt `deprecated: true` và tùy chọn thêm `replacedBy`.
- Các tham chiếu hiện có luôn phân giải được.

Điều này khiến các trạng thái công cụ đã lưu và các liên kết chia sẻ qua URL bền vững qua nhiều năm.

### 5. Chế độ URL là công dân hạng nhất

Mọi đầu vào đều phải có thể biểu diễn được dưới dạng một tham số URL:

```
lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H
```

Chế độ CLI chính là chế độ URL dưới một lớp truyền tải khác - CLI shell dựng một đối tượng trạng thái URL từ argv rồi chạy **cùng** pipeline engine. Chỉ có một render path duy nhất. CLI không thể lệch khỏi GUI vì nó không phải là một cài đặt riêng biệt.

`url-mode.ts` xử lý round-trip (phân tích và serialize). Các tham số dành riêng (không bao giờ được chuyển tới công cụ như một đầu vào): `format`, `export`, `copy`, `slot`, `output`, `filename`, `_v`, `z` (trạng thái đã đóng gói - token của "Shortest link"), `width`/`w`, `height`/`h`, `unit`, `dpi`, `profile`, `password`, `bleed`, `marks`, `full`, `options`, `nostage`. Các đầu vào asset trong chế độ URL được serialize theo `id` của chúng; runtime phân giải chúng qua `host.assets.get()` trước khi hydrate. `width`/`height` là các giá trị theo `unit` (mặc định `px`, ngoài ra còn `mm`/`cm`/`in`/`pt`/`pc`); với một đơn vị vật lý, `dpi` sẽ đặt độ phân giải raster. Chúng thiết lập kích thước tài liệu của canvas và điền sẵn vào panel kích thước export.

### 6. Lưu trữ luôn đi qua bridge, không truy cập trực tiếp

Web shell: IndexedDB. Tauri: hệ thống tệp. CLI: trong bộ nhớ. Công cụ chỉ nhìn thấy `host.state.save(slot, data)` và `host.state.load(slot)`. `localStorage` không được dùng - nó quá nhỏ và không chứa được blob.

Người dùng có thể lưu nhiều slot chỉnh sửa có tên riêng cho mỗi công cụ và quay lại từng phiên làm việc sau này. Không cần tạo tài khoản; trạng thái là theo từng thiết bị. Vì bridge là điểm nối (seam) duy nhất, trạng thái theo thiết bị đó cũng *có thể mang đi được (portable)*: `shells/web/src/data-transfer.ts` đọc lại toàn bộ qua `host.profile`/`host.state`/`host.assets` thành một file zip `lolly-backup` duy nhất, có thể nhập vào bất kỳ bản cài đặt nào khác - câu trả lời ngoại tuyến cho việc "chuyển sang thiết bị mới" mà không cần máy chủ (đặc tả đầy đủ: `docs/data-transfer.md`). Tích hợp SUSE ID (đồng bộ đa thiết bị) là một cột mốc trong tương lai, xây trên nền tảng này.

### 7. Nhãn độ trưởng thành giải quyết rủi ro "được thương hiệu phê duyệt" một cách mang tính cấu trúc

Mọi công cụ đều khai báo `status: official | community | experimental` trong manifest của nó. Gallery sắp xếp theo status. Các công cụ experimental tự động gắn watermark lên bản xuất - watermark được áp bởi `host.export.render`, không phải bởi công cụ, nên tác giả của một công cụ không chính thức (non-official) không thể tắt nó đi.

Đây là câu trả lời mang tính cấu trúc cho rủi ro về nhận thức rằng việc dùng bất kỳ công cụ nào cũng ngầm ý được thương hiệu phê duyệt. Các câu trả lời về quy trình (hàng đợi review, khoá bằng SUSE ID) được xếp chồng lên trên nền tảng này.

### 8. Đầu vào của công cụ được định kiểu qua manifest, kể cả asset

Các đầu vào khai báo một `type`: `text`, `longtext`, `number`, `boolean`, `color`, `select`, `asset`, `date`, `time`, `datetime-local`, `url`, `profile`, `blocks`, `vector`, và `file`. Host render một control chung cho mỗi loại dựa trên manifest - công cụ không phải viết một dòng code control nào. Ba loại trong số đó mang nhiều trọng lượng hơn phần còn lại:

- **`asset`** (kèm `filter` và `allowUpload`) là cầu nối tới hệ thống asset toàn cục; `allowUpload: false` là đòn bẩy cưỡng chế thương hiệu cho những trường hợp như logo trên ô tài trợ, nơi chỉ asset trong thư viện mới được phép dùng. File người dùng tải lên dùng chung khuôn dạng `AssetRef` với asset trong thư viện, nên công cụ xử lý chúng giống hệt nhau.
- **`blocks`** là một nhóm trường lặp lại - một bảng mini bên trong một đầu vào duy nhất, được chỉnh sửa trong một panel bên cạnh, có menu thêm mới được định kiểu/phân loại và các trường asset riêng cho từng block. Nhấp vào một block đã render trên canvas sẽ focus vào hàng tương ứng của block đó. Được dùng bởi `meeting-planner`, `chart-creator`, `event-name-badge`, `wayfinding-signage`, `color-block`, và `digi-ad`.
- **`vector`** nhóm một tập số cố định (ví dụ một transform) thành một control ghép duy nhất; **`file`** giữ file của chính người dùng dưới dạng byte trong bộ nhớ, dùng cho các tiện ích biến đổi trên thiết bị (ví dụ `strip-data` và `compress-pdf`).

### 9. Template không chứa logic (Handlebars, không phải EJS)

Handlebars được chọn thay vì EJS một cách có chủ đích:
- Không chứa logic. Template có thể được viết bởi những người không phải lập trình viên.
- An toàn theo mặc định. `{{x}}` sẽ HTML-escape; `{{{x}}}` là raw, phải tự chọn dùng (opt-in).
- Không có JS tùy ý trong template nghĩa là không có bề mặt cần audit XSS cho từng template.

Logic nằm trong `hooks.js`, nơi nó tường minh và có thể review được. Các helper Handlebars khả dụng: `{{default}}`, `{{upper}}`, `{{lower}}`, `{{eq}}`, `{{markdown}}`, `{{asset ref}}`, `{{asset ref "property"}}` (cùng với các helper định dạng dữ liệu `icsStamp`/`rfcText`/`csvCell` dùng bởi các template `.ics`/`.vcf`/`.csv` đi kèm).

### 10. Công cụ kết hợp với công cụ

Một công cụ có thể nhúng bản render của **một công cụ khác** mà không cần import giữa công cụ với công cụ - việc kết hợp được engine giải quyết, không bao giờ do code của công cụ. Có hai bề mặt:

- **Manifest khai báo** - `composes: [{ id, tool, inputs, format?, width?, height? }]`. Engine render công cụ con đã đặt tên và đặt kết quả vào template không chứa logic dưới dạng `{{asset <id>}}`. Hiện tại `event-name-badge` kết hợp `qr-code` dưới dạng SVG.
- **URL nhúng có thể mang đi được (portable)** - `<img src="https://lolly.tools/tool/<id>.<ext>?<inputs>">`. Shell render công cụ con đó **cục bộ** (một pixel giữ chỗ hiển thị cho đến khi bản render cục bộ hoàn tất); không có gì được fetch từ `lolly.tools` cả.

Có thể kết hợp bản render của bất kỳ công cụ nào: một công cụ con dạng **SVG** vẫn giữ nguyên là vector thật khi công cụ cha export ra SVG hoặc PDF, và raster hoá sắc nét cho PNG; các công cụ con **PNG/JPG/WEBP** được nhúng như hình ảnh. Yêu cầu khả năng `compose`. Các công cụ con đã kết hợp chỉ là trung gian - không bao giờ bị gắn watermark hay đóng dấu provenance - và việc kết hợp suy giảm một cách nhẹ nhàng: một shell không render được một công cụ con sẽ chỉ bỏ qua slot đó, còn công cụ cha vẫn render bình thường.

---

## Những điều chúng tôi cố tình chọn không làm

- **Không dùng EJS / không có JS tùy ý trong template.** Bề mặt XSS bằng không. Logic nằm trong `hooks.js`.
- **Không có CMS cho asset.** Catalog asset chính là git. Cập nhật đi qua review PR. Không có giao diện tải lên, không xác thực (auth), không hàng đợi kiểm duyệt. Việc review trên git _chính là_ việc kiểm duyệt.
- **Không có RBAC trong MVP.** Truy cập công khai. Rủi ro thương hiệu được quản lý bằng nhãn độ trưởng thành + watermark + thực tế mang tính cấu trúc rằng mọi asset người dùng nhìn thấy đều đã đi qua review PR.
- **Không có cơ sở dữ liệu trung tâm.** Mọi trạng thái người dùng đều theo từng thiết bị. Tích hợp SUSE ID nằm trong lộ trình nhưng không phải là điều kiện chặn ra mắt.
- **Không có đường code dùng chung giữa tools/engine.** Engine là mã nguồn mở; `tools/` và `assets/` vẫn là nội dung độc quyền của SUSE, nằm trong các repository riêng của chúng. Sự tách biệt này được cưỡng chế (không import chéo) để việc chia tách luôn sạch sẽ.

---

## Vòng đời, từ đầu đến cuối

Một người dùng mở `lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H`:

1. **Boot.** Web shell mở IndexedDB, dựng capability bridge, đồng bộ catalog công cụ và asset (hoặc nạp từ cache khi ngoại tuyến).
2. **Route.** URL hash → view `tool`, với `qr-code` và các tham số URL được trích xuất.
3. **Load.** `loadTool('qr-code', fetchFile)` fetch `tool.json`, kiểm định theo JSON Schema, fetch `template.html`, `styles.css`, và mã nguồn `hooks.js`.
4. **Parse URL state.** `parseUrlState` chuyển các tham số URL thành các giá trị đầu vào ban đầu. Các asset ref (`?logo=suse/logo/primary`) được phân tích thành các đối tượng nhẹ `{ id, _unresolved: true }`.
5. **Runtime.** `createRuntime(tool, host, initialValues)` dựng mô hình đầu vào (hợp nhất dữ liệu profile, giá trị mặc định, và giá trị ban đầu), phân giải asset ref qua `host.assets.get()`, nạp hook (`host` theo closure scope, không sandbox), gọi `hooks.onInit`.
6. **Render.** Shell subscribe vào runtime; mỗi khi trạng thái thay đổi, nó nhận được `{ model, hydrated }`. Nó render các control đầu vào từ model và ghi HTML template đã hydrate vào `#tool-canvas`.
7. **Interact.** Người dùng gõ vào một đầu vào → `runtime.setInput(id, value)` → các ràng buộc được áp dụng → `hooks.onInput` được gọi → hydrate lại → render lại. Canvas cập nhật trực tiếp.
8. **Export.** Người dùng nhấp Download(PNG) → `runtime.export(canvasNode, 'png')` → `host.export.render` (raster hoá qua dom-to-image-more; SVG/PDF đi qua các bộ vector hoá chuyên dụng duyệt DOM) → blob → `host.export.download`. Phạm vi định dạng mà một công cụ có thể lựa chọn khá rộng: `svg`, `png`, `jpg`/`jpeg`, `webp`, `avif`, `pdf`, các định dạng vector `emf`, `eps`, cộng với các định dạng in ấn/CMYK `pdf-cmyk`, `cmyk-tiff`, `eps-cmyk`; các định dạng video `webm`, `mp4`, `gif`; và các định dạng dữ liệu/văn bản `html`, `md`, `txt`, `json`, `csv`, `ics`, `vcf`, `ico`, `zip`. (Các công cụ đặt `render.export: false` - ví dụ Color Palette, Countdown Timer, Strip Hidden Data, Text Helper, Compress PDF - sẽ ẩn các control download/định dạng/kích thước.) Đơn vị vật lý được chuyển đổi theo từng định dạng ngay tại bước này (PDF → điểm trang thật, raster → pixel theo DPI kèm một chunk `pHYs`). Metadata về tác giả/nguồn gốc (author, tool, source - được dựng bởi `engine/src/metadata.ts`) được nhúng theo từng định dạng: PNG iTXt, JPEG EXIF, PDF info dict, SVG `<metadata>`, GIF comment. Các công cụ experimental được host chèn watermark, không phải do công cụ tự làm.

Vòng đời tương tự trong Tauri. Vòng đời tương tự trong CLI - jsdom cung cấp DOM headless; đầu ra đi vào một file hoặc stdout.

---

## Trạng thái mã nguồn mở

Các thư mục `engine/`, `shells/`, `schemas/`, và `docs/` là mã nguồn mở theo giấy phép **MPL-2.0** - một nền tảng scaffolding trung lập nhà cung cấp cho việc xây dựng công cụ thương hiệu, với mỗi đơn vị có thể phát hành được tách thành repository riêng dưới [github.com/lolly-tools](https://github.com/lolly-tools). `tools/` và `catalog/assets/` là nội dung riêng của SUSE và vẫn **thuộc sở hữu độc quyền của SUSE** (giữ mọi quyền - xem `NOTICE.md` của từng repo); chúng không thuộc phạm vi của MPL.

Sự chia tách này được cưỡng chế - không có import chéo từ `engine/` sang `tools/` hay `assets/` - nên ranh giới giữa nền tảng và nội dung luôn sạch sẽ.

---

## Lộ trình

| Cột mốc | Thời hạn | Nội dung |
|---|---|---|
| **Các công cụ ban đầu** | ✅ Đã hoàn thành | QR Code, Quote Card, Email Signature, Day Brief, Code Canvas, Countdown Timer, Color Palette, Brand Lockup, Bag Video, Chart Creator, Filter: Duotone, Meeting Planner - web shell đã hoạt động |
| **Nâng cấp bộ công cụ hiện tại** | Giữa 2026 ✅ Đã hoàn thành  | Ứng dụng ngoại tuyến có thể tải về (Tauri); thêm công cụ cho nhân viên và sự kiện; pipeline export phong phú hơn (độ ổn định text-to-path, metadata, thêm định dạng - xem `plans.md`) |
| **Mở mã nguồn cho engine** | Cuối 2026 ✅ Đã hoàn thành  | Engine, shells, schemas, docs được công khai - không bao gồm tools/assets mang thương hiệu |
| **Chuyển giữa các thiết bị** | ✅ Đã hoàn thành | Gói `lolly-backup` có thể mang đi được, mang theo profile, các phiên đã lưu, hình ảnh đã tải lên và tùy chọn (prefs) giữa bất kỳ hai bản cài đặt nào - ngoại tuyến hoặc trực tuyến, không cần tài khoản. Envelope tương thích ngược, có kiểm tra tính toàn vẹn (đặc tả: `docs/data-transfer.md`) |
| **Thiết lập lộ trình công cụ chính thức** | Cuối 2026 | Bộ tài liệu tham chiếu cho khách hàng, nạp thiết kế bằng AI, chế độ yêu cầu GET/URL |
| **Tiện ích quyền riêng tư trên thiết bị** | 🚧 Đang triển khai | Các công cụ biến đổi nội dung xử lý *tệp của chính bạn* ngay tại chỗ (file vào → file sạch ra), thay thế cho việc để dữ liệu rò rỉ sang các SaaS đơn chức năng. **Đã xong:** kiểu đầu vào `file` + đường biến đổi `exportFile` + quy ước `privacy:"on-device"` (không watermark/provenance) + **Strip Hidden Data** (metadata JPEG/PNG/SVG/PDF, PDF qua bridge `host.pdf`) và **Text Helper** (bàn làm việc trên thiết bị cho các tác vụ dán-vào-một-trang-web thường ngày - định dạng JSON, giải mã JWT, Base64, mã hoá/giải mã URL, băm SHA, cộng thêm một nhóm Novelty). **Tiếp theo:** crop/resize, chuyển đổi/nén hình ảnh; sau đó là một bridge codec `host.image` (đặc tả: `plans/exfiltration-app-content.md`) |
| **Token thiết kế (DTCG)** | 🚧 Đã phát hành phần màu sắc | Các thành phần gốc của thương hiệu dưới dạng chuẩn [W3C Design Tokens (DTCG)](https://www.designtokens.org/TR/drafts/format/) - định dạng mà [Penpot nhập/xuất](https://help.penpot.app/user-guide/design-systems/design-tokens/). **Đã xong:** token màu sắc (`suse/tokens/brand`), bridge `host.tokens`, các mẫu màu trong picker + giá trị liên kết tham chiếu (đặc tả: `docs/design-tokens.md`). **Tiếp theo:** token kích thước/kiểu chữ, nhập/xuất Penpot, token người dùng trong gói chuyển dữ liệu (`tokens.json`) |
| **Endpoint agent MCP (render)** | ✅ Đã hoàn thành | Một server [MCP](https://modelcontextprotocol.io) phơi bày catalogue + render path dưới dạng các công cụ có thể gọi được (`lolly_list_tools` / `describe_tool` / `build_url` / `render` / `transform`) để bất kỳ agent nào cũng có thể tạo ra asset hoàn chỉnh, tuân theo quy tắc - thêm nó vào bất kỳ MCP client nào như một connector tùy chỉnh (OAuth 2.1), hoặc trỏ một CLI/HTTP client vào nó bằng bearer token. Đang hoạt động tại `mcp.lolly.tools` (endpoint đầy đủ: raster/PDF/animation/video qua một trình duyệt headless được host) và `lolly.tools/api/mcp` (tầng serverless không cần trình duyệt). Khác với MCP soạn tác (authoring) Penpot bên dưới - vốn nói về việc **tạo** công cụ (đặc tả: `plans/mcp-server.md`; hướng dẫn: `docs/mcp.md` + `docs/ai-agents.md`) |
| **Nạp file Penpot thành công cụ** | 2027+ | Nhập một file Penpot và phơi bày nó *như một công cụ Lolly* (khai báo, ưu tiên ràng buộc), biến các thiết kế được tạo trong Penpot thành các bộ sinh mang tính xác định |
| **Tiện ích mở rộng MCP + Penpot (soạn tác chỉ-trực tuyến)** | 2027+ | Một server MCP cho Penpot tạo ra các công cụ mới bằng AI - cách trực quan nhất để tạo các template mang tính xác định: một vòng đầu tiên dựa trên thông tin thương hiệu, được hoàn thiện với con người tham gia vào vòng lặp, hướng tới việc xử lý các ngữ cảnh mới chỉ trong một lượt theo thời gian. Việc **tạo** công cụ chỉ hoạt động trực tuyến; nhưng các công cụ nó tạo ra thì chạy được ở bất cứ đâu |
| **RBAC + SUSE ID** | 2027+ | Khoá các công cụ cụ thể sau SUSE ID; trạng thái đã lưu đồng bộ đa thiết bị; nhập/xuất Google Drive |

---

## Ranh giới giữa nơi engine kết thúc và host bắt đầu

Nếu có thể mô tả nó bằng dữ liệu thuần + Handlebars → **engine**.
Nếu nó chạm vào DOM, hệ thống tệp, mạng, hoặc bất kỳ API trình duyệt/hệ điều hành nào → **host**.

Ranh giới này rõ ràng một cách có chủ đích. Engine là phần mã nguồn mở. Mọi thứ biết về SUSE, các nền tảng cụ thể, hay môi trường runtime đều nằm ngoài nó.
