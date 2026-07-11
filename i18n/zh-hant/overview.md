# 總覽

本文件記錄 Lolly 平台的目的、結構與架構決策，同時反映產品願景與程式碼庫的現況。

> **狀態：** Lolly 是一個內部原型，目前處於**尚未完成的封閉式試行**階段。引擎具有確定性且內部一致，但產品仍處於早期階段——SUSE 是第一位客戶——其加密與檔案解析引擎目前正接受 SUSE 嚴格的基礎架構強化，為企業規模做準備（這件事我們非常擅長）。請將以下架構視為仍在測試中的設計意圖，而非已完成、已認證的產品。試行如何執行與衡量，請見[採用與治理](/info/adoption-governance.html#status)。

---

## 為何存在

團隊經常面對一個反覆出現的問題：重複性的創意與內容工作，可預測到不值得每次都動用專業人力，卻又對品質敏感到不能在毫無防護的情況下交出去。結果不是產出速度緩慢（專業人力成為瓶頸），就是品質不一致（每個人用自己手邊有的工具），或是被廠商綁定（由 SaaS DAM 掌控你的範本）。

這個平台是結構性的解法：

> **大規模的程式化創意與內容生成**——零人力的素材產出，規則由中央集中控管，供員工、供應商與合作夥伴使用。

結果是**充裕**：每一場活動都有正確的指標標示，每一則 CVE 警示都符合公司樣式，每一張標籤都印得乾淨俐落，每一份電子郵件簽名檔都是最新版——完全不需要開一張設計工單。這個平台處理的是重複出現、已作業化的創意工作。它刻意不是一套客製化創意工具——旗艦級的工作仍然由設計師掌控。

### 在整體格局中的定位

| 能力 | Canva | 品牌入口網站 | Illustrator | Figma / Penpot | **Lolly** |
|---|---|---|---|---|---|
| 大量內容生成 | 部分 | ✗ | ✗ | ✗ | **✓** |
| 完全離線運作 | ✗ | ✗ | ✓ | 部分 | **✓** |
| 範本邏輯與硬性限制 | ✗ | 部分 | ✗ | 部分 | **✓** |
| 不需要設計技能 | 部分 | ✓ | ✗ | ✗ | **✓** |
| 自動 Content Credentials | ✗ | ✗ | 部分 | ✗ | **✓** |
| 工具可組合其他工具 | ✗ | ✗ | ✗ | ✗ | **✓** |
| 開放式引擎，不受 SaaS 綁定 | ✗ | ✗ | ✗ | 部分 | **✓** |
| C2PA 內容憑證 | ✗ | ✗ | ✗ | ✗ | **✓** |
| 可選擇加入的鑑識等級溯源 | ✗ | ✗ | ✗ | ✗ | **✓** |
| 行動裝置與桌面應用程式 | ✓ | ✗ | ✗ | 部分 | **✓** |
| 命令列與 TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

這個落差很清楚：現有格局中沒有任何東西能提供限制優先、可離線運作、低技能門檻、內部可存取的輸出。Lolly 甚至包含一個開放式畫布——**版面工作室**——色彩、字體與素材都遵循品牌全域設定，因此即使是自由排列，依然保持限制優先。它**不是**一套無限制的設計套件：設計師仍然使用 Illustrator 與 Figma 進行客製化的旗艦級工作。各種排列組合可以用這個工具組裝出來。

**適用情境：** 快速生成已作業化的創意素材——活動卡片、識別徽章、簽名檔、CVE 警示、QR code、社群卡片、託運標籤、結構化報告。

**不適用情境：** 客製化的旗艦級主打內容。

---

## 大局

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

### 儲存庫結構

```
lolly/
├── engine/           # 平台無關的核心。開放原始碼（MPL-2.0）。
│   └── src/
│       ├── index.ts          # 公開介面——loader、runtime、template、inputs、url-mode
│       ├── loader.ts         # 擷取並驗證工具檔案
│       ├── runtime.ts        # 協調五個步驟的生命週期
│       ├── template.ts       # Handlebars 渲染 + annotateTemplate
│       ├── inputs.ts         # manifest → runtime 輸入模型
│       ├── url-mode.ts       # URL ↔ 輸入狀態 雙向轉換
│       ├── validate.ts       # 對 manifest 進行 JSON Schema 驗證
│       ├── compose.ts        # 解析巢狀工具渲染（composes）
│       ├── embed.ts          # 解析可攜式的 lolly.tools 嵌入網址
│       └── bridge/
│           └── host-v1.ts    # TypeScript 介面——橋接層的合約
│
├── shells/
│   ├── web/          # PWA——線上代管；主要發布管道
│   │   └── src/
│   │       ├── main.ts           # 啟動、路由
│   │       ├── theme.ts          # 主題套用／保存（避免 FOUC 閃爍）
│   │       ├── bridge/           # HostV1 API 的 web 實作
│   │       │   ├── index.ts      # 組合所有橋接層元件
│   │       │   ├── db.ts         # IndexedDB 設定
│   │       │   ├── state.ts      # host.state——已儲存的編輯內容
│   │       │   ├── profile.ts    # host.profile——使用者詳細資料
│   │       │   ├── assets.ts     # host.assets——目錄素材＋使用者上傳
│   │       │   ├── clipboard.ts  # host.clipboard
│   │       │   ├── export.ts     # host.export——點陣化／序列化
│   │       │   ├── net.ts        # host.net——白名單制的 fetch
│   │       │   └── media.ts      # host.media——即時攝影機影格（onFrame）
│   │       ├── catalog/
│   │       │   └── sync.ts       # 啟動時的目錄同步＋離線快取
│   │       ├── styles/           # 全應用程式的 CSS（app.css、picker.css、tokens.css）
│   │       └── views/
│   │           ├── gallery.ts    # 工具庫列表＋已儲存狀態卡片
│   │           ├── tool.ts       # 掛載單一工具（輸入＋畫布＋操作）
│   │           ├── picker.ts     # 素材選擇器 UI（由 host.assets 呼叫）
│   │           ├── profile.ts    # 使用者詳細資料編輯器
│   │           ├── projects.ts   # /p——已儲存工作階段的資料夾（可巢狀；資料夾／選取匯出）
│   │           └── free-canvas.ts # 給 render.layout:"editor" 工具用的自由畫布編輯疊層
│   │
│   ├── cli/          # Node.js CLI——相同的引擎，headless jsdom
│   │   ├── bin/lolly.ts
│   │   └── src/
│   │       ├── run.ts    # loadTool → createRuntime → export → 寫入檔案
│   │       └── bridge.ts # HostV1 的 CLI 實作
│   │
│   ├── tui/          # 互動式終端機殼層（Ink）——重複使用 CLI 橋接層
│   │   └── src/
│   │       ├── main.tsx  # 全螢幕應用程式：Gallery／Projects／Profile／ToolView
│   │       └── bridge.ts # CLI 橋接層＋位於 ~/.lolly 的磁碟狀態
│   │
│   ├── tauri-desktop/ # 可下載的桌面應用程式
│   └── tauri-mobile/  # iOS／Android 應用程式
│
├── tools/            # profile 視圖（已加入 gitignore）——資料，不是程式碼。合併自以下內容包：
│                     #   community/（公開、與品牌無關、MPL）＋ brands/<active>/tools（品牌所有）。
│   ├── qr-code/
│   ├── quotes/
│   ├── email-signature/
│   ├── daily-card/        # "Day Brief"——天氣／時間／地圖（由內嵌的 template script 擷取資料）
│   ├── code-canvas/
│   ├── countdown-timer/
│   ├── color-palette/
│   ├── color-block/           # 有型別、可混合的區塊（addMenu 判別器）
│   ├── dynamic-layout/
│   ├── tool-logo/         # "Logo"——自動切換的品牌標誌
│   ├── street-map/        # 離線向量街廓地圖
│   ├── url-shot/          # "URL Screenshot"（capture 能力）
│   ├── strip-data/        # 裝置端中繼資料清除——JPEG/PNG/SVG/PDF（檔案輸入 → 乾淨檔案輸出）
│   ├── compress-pdf/      # 裝置端 PDF 壓縮器——重新壓縮圖片（檔案輸入 → 較小檔案輸出）
│   ├── brand-lockup/      # "Brand Lockup"——SUSE 標誌組合；HarfBuzz 文字轉路徑（wasm）
│   ├── bag-video/
│   ├── chart-creator/     # 由結構化資料產生 SVG 圖表
│   ├── filter-duotone/    # 雙色相片效果
│   ├── filter-halftone/   # 相片 → 向量網點網格
│   ├── filter-scanline/   # 相片 → 復古色階掃描線網格（SVG／透明點陣圖）
│   ├── meeting-planner/   # 跨時區會議排程工具
│   ├── calendar-ics/      # 活動 → .ics 行事曆檔案＋一張卡片
│   ├── digi-ad/           # "Animated Ad"——由場景組成的循環播放橫幅
│   ├── event-name-badge/  # 研討會識別證——以 SVG 形式組合 qr-code
│   ├── wayfinding-signage/ # 活動指標標示；方向區塊會自動調整標籤文字
│   ├── text-helper/       # 裝置端文字工作台（格式化／解碼／雜湊／去識別化）
│   ├── layout-studio/     # "Layout Studio"——自由格式的 WYSIWYG 編輯器畫布（render.layout: editor）
│   ├── multi-page-pdf/    # 多頁 PDF 文件——封面、可流動的內容區塊、封底
│   ├── diagram-builder/   # 組織圖／分層圖／流程圖／循環圖／金字塔圖
│   ├── logo-wall/         # 多個標誌 → 自動排列成網格
│   ├── logo-lockup-partner/ # SUSE ＋合作夥伴聯名標誌組合
│   ├── web-icon/          # 由文字＋顏色產生 favicon（.ico／png／svg）
│   ├── filter-posterize/  # 相片 → 平面色階向量分色
│   ├── filter-pixel-stretch/ # 相片 → 像素拖曳效果
│   ├── lottie-digi-ad/    # Lottie 動態廣告橫幅
│   └── pose-geeko/        # 擺出 SUSE Geeko 吉祥物姿勢——可供印刷的靜態圖
│
├── catalog/
│   ├── tools/index.json        # 工具登錄檔
│   └── assets/
│       ├── index.json          # 素材登錄檔
│       └── suse/...            # 標誌、調色盤等
│
├── schemas/          # tool.json、素材項目、AssetRef 的 JSON Schema
├── scripts/          # build-catalog-index.ts、checksum-assets.ts、validate-catalog.ts
├── tests/            # 引擎測試
└── docs/             # 本文件＋撰寫指南＋定位文件
```

---

## 平台交付模式

這個平台運行在多個介面上——web PWA、Tauri 桌面版／行動版、可指令化的 CLI，以及互動式 TUI。它們全部使用相同的引擎與相同的工具檔案。

### Web（PWA）——主要發布管道

代管於 SUSE 掌控的網址上。一旦 service worker 快取好工具與素材，就能離線運作。多數員工、供應商與合作夥伴都會在這裡使用這個平台。不需要帳號——狀態依裝置各自儲存在 IndexedDB 中。

網頁殼層採用單一版面的響應式設計。桌面上，一個工具是可調整寬度的控制項側欄，旁邊是預覽舞台，並支援原生觸控板的畫布導覽（Cmd/Ctrl + 滾輪或雙指縮放以游標為中心、按住空白鍵或用中鍵拖曳平移、`0`／`1`／`+`／`−` 按鍵，以及一個 Fit／% 的 HUD 顯示）。行動裝置上（螢幕寬度 ≤640px），控制項變成一個固定在頂端的面板，帶有拖曳把手，可吸附至半展開／半開／全展開三種狀態（點按可切換），覆蓋在靜態的全螢幕預覽上方，而一個懸浮的**渲染**按鈕會以底部彈出面板打開**匯出**控制項。觸控裝置在預覽畫面上可用雙指縮放與拖曳平移。渲染路徑與匯出控制項在兩者之間完全相同——只有外框介面會重新排版。

**批次模式（`/pro`）。** 網頁殼層還內建一個試算表風格的批次網格（`shells/web/src/pro/`），可以跨一或多個工具，一次渲染大量列。它支援 CSV／TSV 雙向轉換與試算表貼上、每列各自的 template／格式／尺寸／單位／dpi、一個附即時預覽的區塊編輯側面板、可摺疊的匯出欄位、每列的「相關性」標籤列、左側拖曳把手可調整列順序、兩階段刪除確認、已儲存的批次工作階段，以及 `.zip` 下載。這就是「大量內容生成」定位背後那個一對多的介面。

### Tauri 桌面版／行動版

封裝好的原生應用程式（透過 Tauri 實現小巧的體積）。提供完整的離線可用性、供依賴檔案系統的工具（PDF Smasher、Font Outliner）存取檔案系統，以及攝影機存取權限。預計在 2026 年年中進行工具強化。

### CLI

`lolly <tool-id> [--input=value ...] --output=file.png`

桌面使用者可以從終端機呼叫許多工具。CLI 殼層載入相同的引擎、建立一個 jsdom DOM、執行相同的渲染路徑，並寫入檔案。URL 模式就是傳輸方式——CLI 不是另一套獨立的實作。這保證了 CLI 與 GUI 的輸出完全一致。

```bash
lolly qr-code --url=https://suse.com --output=qr.svg
lolly quotes --quote="Ship it." --output=quote.png
lolly                        # 列出可用的工具
lolly qr-code                # 列出該工具的輸入項目
```

### TUI

`npm run tui`

CLI 的互動式對應版本：一個全螢幕、以鍵盤為主要操作方式的終端機應用程式（以 Ink 打造），可以瀏覽工具、填寫輸入、儲存專案並匯出——完全不需要 GUI。它的主機橋接層在不需要 DOM 的格式（SVG/EMF/EPS/HTML ＋文字／資料）上**重複使用 CLI 的實作**，並額外加上位於 `~/.lolly` 的磁碟狀態，以及一個選用的行內預覽。除此之外，它還有一個**瀏覽器渲染層**：一個範圍受限的無介面 Chromium（與 MCP 伺服器安裝的是同一套），可依需求產生點陣圖／PDF／影片，並擷取即時網址畫面——驅動的是一份已建置好的網頁殼層副本，因此輸出結果完全相同，且只有在你第一次匯出這類格式時才會啟動。所以 `url-shot`（含裁切＋改色＋向量 PDF/SVG）以及每一個點陣圖／PDF 工具，也都能在終端機中執行。詳見 [TUI 指南](/info/tui.html)。

---

## 工具分類

工具在其 manifest 中會標上一個 `category`，用於工具庫中的分組。

各列依工具庫區塊的顯示順序排列。`utility` 區塊在工具庫中永遠**排在最後**（在其他所有分類之後，包括未來新增的分類）——它是裝置端的「離線公用程式」抽屜。

| 分類 | 已上線工具 | 規劃中 |
|---|---|---|
| `everyone` | QR Code Generator, Quote Card, Email Signature, Day Brief, Code Canvas, Color Block, Dynamic Layout, Logo, Web Icon Maker | Employee Image Stationery |
| `designer` | Brand Lockup, Bag Video, Chart Creator, Street Map, Animated Ad, Multi-Page PDF, Diagram Builder, Logo Lockup: Grid (NASCAR), Logo Lockup: Partner, Filter: Duotone, Filter: Halftone, Filter: Scanline, Filter: Posterize Bitmap, Filter: Pixel Stretch | Font Outliner |
| `event` | Meeting Planner, Event Name Badge, Wayfinding Signage, Calendar ICS | Event Stationery, Bulk Name Badges, Room Agenda Cards |
| `product` | — | CVE Alert, Product Release Announcement, Blog OG Image |
| `utility` | Countdown Timer, Color Palette, URL Screenshot, Strip Hidden Data, Text Helper, Compress PDF, Layout Studio | 單位／格式轉換器、更多裝置端隱私公用程式 |

工具也會依狀態分類：`official`（品牌核准、無浮水印）、`community`（外部貢獻）、`experimental`（匯出檔案帶浮水印）。Dynamic Layout、URL Screenshot、Logo Lockup: Grid (NASCAR)、Filter: Posterize Bitmap 與 Diagram Builder 目前為 `experimental` 狀態；Web Icon Maker 與 Layout Studio 則以 `community` 工具的形式上線。

**版面工作室**是第一個建立在 `render.layout: "editor"` 自由畫布模式上的工具——一個沒有多餘介面裝飾、可直接操作的畫面，你可以在其中拖曳、調整大小、旋轉並吸附文字、形狀與圖片方塊，接著透過與其他所有工具相同的渲染路徑匯出。

**Strip Hidden Data** 是第一個**裝置端公用程式**（`privacy: "on-device"`）：一個內容轉換工具，接收*你*提供的檔案，完全在瀏覽器中處理，再交回一份乾淨的副本——不上傳、不加浮水印、不蓋來源印記。**Text Helper** 是第二個——一個裝置端工作台，處理日常那些「貼到某個網站上」的工作（JSON 格式化、JWT 解碼、Base64、URL 編碼／解碼、SHA 雜湊）。**Compress PDF** 是第三個——它透過重新壓縮圖片來縮小 PDF 檔案，同樣完全在裝置端完成。這三個工具都帶有徽章文字「Runs on your device — nothing is uploaded」。這是一個隱私工具分類的起點，用來取代把機密檔案交給單一用途網站處理的做法。

> 附註：`category` 與 `status` 會從每個 `tool.json` 反正規化寫入 `catalog/tools/index.json`（工具庫讀取的登錄檔）。manifest 才是唯一真實來源——這個索引由 `npm run build:catalog` **產生**，如果已提交的索引與 manifest 有落差，`npm run validate:catalog` 就會讓 CI 失敗。

---

## 架構承諾

這些決策已經拍板定案。更動其中任何一項都是重大工程——它們形塑了程式碼庫中的其他所有決策。

### 1. 宣告式工具，搭配命令式的逃生艙口

一個工具由 manifest（`tool.json`）＋ template（`template.html`）＋選用的 `hooks.js` 組成。

**manifest 宣告輸入項目。** 不是 template。輸入項目不是從 Handlebars 標記推斷出來的。manifest 是合約；template 則透過 `{{id}}` 使用具名變數。

**hooks 是選用的。** 多數工具是純宣告式的——manifest ＋ template 就足夠了。需要計算數值的工具（QR 編碼、圖表資料整形）會提供 `hooks.js`，公開具名的生命週期函式（`onInit`、`onInput`、`onFrame`——給動態反應工具用的逐格即時攝影機掛鉤——`beforeRender`、`beforeExport`、`afterExport`，以及 `exportFile`——供 Strip Hidden Data 這類裝置端公用程式使用的檔案輸入／輸出轉換路徑）。主機透過 `new Function('host', …)` 載入 hooks，並把能力橋接層以閉包作用域的方式注入。這是一份**可攜性合約，不是安全沙箱**：hooks 仍然在頁面的執行環境中運作，在瀏覽器殼層中*可以*存取 `window`／`fetch`／`document`——`host.*` 是受支援、可攜的介面，而不是強制執行的邊界。非同步的 hook 結果會有時間限制（onInit 5 秒、onInput 2 秒、其餘 5 秒），逾時的結果會被捨棄；但失控的*同步* hook 無法被中斷。因此，在 Worker 隔離機制推出之前，執行不受信任的第三方 hook 程式碼並不安全。

這一點很重要，原因是：宣告式工具可以由非開發者撰寫。如果每個工具都是一個網頁應用程式，「缺乏技能來建立／維護日常範本」這項風險就會變成永久的瓶頸。

### 2. 工具與素材是資料，不是打包好的程式碼

網頁版與 Tauri 應用程式會在啟動時從一個已知網址擷取工具與素材目錄，在本機快取，並依當下擁有的內容運作。**新增一張活動卡片或季節性素材，不需要發布新版應用程式。**

素材位元組會以 SHA-256 計算校驗碼，以防止 CDN 遭到污染。素材的 `id` ＋ `version` 決定快取何時失效。

### 3. 能力橋接層是工具唯一看得到的 API

工具永遠不會碰觸其 template 區域以外的 DOM，永遠不會直接呼叫 `fetch`，也永遠不會讀取檔案系統。它們呼叫的是有版本編號的 `host.*` 方法。橋接層定義於 `engine/src/bridge/host-v1.ts`：

| 橋接層 API | 功能 |
|---|---|
| `host.profile` | 使用者的名字、電子郵件、大頭照、城市等。透過 `bindToProfile` 預先填入輸入項目。 |
| `host.assets` | 目錄查詢、素材解析、主機提供的選擇器 UI。 |
| `host.state` | 儲存／載入輸入槽位。web 上是 IndexedDB，Tauri 上是檔案系統，CLI 上是記憶體。 |
| `host.clipboard` | 把文字或圖片寫入剪貼簿（附平台備援方案）。 |
| `host.export` | 將渲染目標點陣化或序列化。對 experimental 工具套用浮水印。 |
| `host.net` | 白名單制的 fetch——只有在工具宣告了 `"network"` 能力時才可使用。（目前沒有任何已上線的工具用到它。） |

選用、附加性的介面，只有在某個殼層提供時才會出現。其中兩個是**能力閘控**的——只有在工具宣告了對應旗標時才會公開：`host.compose`（嵌入另一個工具的渲染結果——`compose`）與 `host.capture`（供 URL Screenshot 使用的頁面擷取——`capture`）。其餘的則是**功能偵測**的——只要殼層能夠提供，就會存在：`host.text`（透過 HarfBuzz WASM 進行文字轉路徑；`wasm` 能力會標記依賴它的工具）、`host.pdf`（PDF 解析／壓縮，供 Strip Hidden Data 與 Compress PDF 使用），以及 `host.tokens`（DTCG 設計權杖）。可宣告的能力有：`network`、`filesystem`、`clipboard`、`camera`、`ffmpeg`、`wasm`、`capture`、`compose`。

同一個工具能在瀏覽器、Tauri 與無介面的 CLI 中執行，是因為每個殼層都實作了這個介面——工具本身永遠不知道自己身處哪一種環境。

橋接層有版本編號。新增方法屬於次版本更新。移除或變更簽章則需要主版本號升級。當 v2 推出時，v1 必須繼續正常運作。

### 4. 素材 ID 永久不變

`suse/logo/primary` 是一份合約。一旦發布：
- 這個 ID 永遠不會改變，也永遠不會被重複使用。
- 位元組內容變更 → 在 manifest 中提升 `version`。
- 被新素材取代 → 設定 `deprecated: true`，並可選擇設定 `replacedBy`。
- 既有的參照永遠都能被正確解析。

這讓已儲存的工具狀態，以及透過網址分享的連結，能夠跨越數年依然有效。

### 5. URL 模式是第一等公民

每一個輸入項目都必須能夠表示成一個 URL 參數：

```
lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H
```

CLI 模式就是 URL 模式換了一種傳輸方式——CLI 殼層會從 argv 建立一個 URL 狀態物件，並執行**同一套**引擎流程。渲染路徑只有一條。CLI 不可能與 GUI 產生落差，因為它根本不是另一套獨立的實作。

`url-mode.ts` 負責處理這個雙向轉換（解析與序列化）。保留參數（絕不會當作輸入項目轉發給工具）：`format`、`export`、`copy`、`slot`、`output`、`filename`、`_v`、`z`（封裝狀態——也就是「Shortest link」權杖）、`width`／`w`、`height`／`h`、`unit`、`dpi`、`profile`、`password`、`bleed`、`marks`、`full`、`options`、`nostage`。URL 模式中的素材輸入會以其 `id` 序列化；runtime 會在渲染之前透過 `host.assets.get()` 解析它們。`width`／`height` 是以 `unit` 為單位的數值（預設為 `px`，也支援 `mm`／`cm`／`in`／`pt`／`pc`）；使用實體單位時，`dpi` 會決定點陣圖解析度。它們會設定畫布文件尺寸，並預先填入匯出尺寸面板。

### 6. 儲存一律透過橋接層，不能直接存取

網頁殼層：IndexedDB。Tauri：檔案系統。CLI：記憶體內。工具只會看到 `host.state.save(slot, data)` 與 `host.state.load(slot)`。不使用 `localStorage`——它容量太小，也無法儲存 blob。

使用者可以為每個工具儲存多個具名的編輯槽位，之後再回到各個工作階段。不需要建立帳號；狀態是依裝置各自保存的。正因為橋接層是唯一的介接點，這種依裝置保存的狀態同時也是*可攜的*：`shells/web/src/data-transfer.ts` 會透過 `host.profile`／`host.state`／`host.assets` 把所有內容讀出，打包成單一個 `lolly-backup` zip 檔，可以匯入任何其他安裝——這就是「換到新裝置」這個問題的離線解法，完全不需要伺服器（完整規格見 `docs/data-transfer.md`）。SUSE ID 整合（多裝置同步）是建立在這之上的未來里程碑。

### 7. 成熟度標籤從結構上回應「品牌是否核准」的風險

每個工具都會在其 manifest 中宣告 `status: official | community | experimental`。工具庫會依狀態排序。experimental 工具的匯出檔案會自動加上浮水印——這個浮水印是由 `host.export.render` 套用的，不是由工具本身套用，因此非官方的工具作者無法選擇跳過它。

這是針對「使用任何工具都意味著品牌已核准」這種觀感風險的結構性解法。流程面的解法（審查佇列、SUSE ID 閘控）則疊加在這之上。

### 8. 工具輸入項目透過 manifest 定型，素材也不例外

輸入項目會宣告一個 `type`：`text`、`longtext`、`number`、`boolean`、`color`、`select`、`asset`、`date`、`time`、`datetime-local`、`url`、`profile`、`blocks`、`vector` 與 `file`。主機會依 manifest 為每種類型渲染一個通用控制項——工具完全不需要寫任何控制項程式碼。其中三種的份量比其他的更重：

- **`asset`**（搭配 `filter` 與 `allowUpload`）是通往全域素材系統的橋樑；`allowUpload: false` 是品牌強制執行的開關，用在像贊助商卡片標誌這類只允許使用素材庫素材的場合。使用者上傳的檔案採用與素材庫素材相同的 `AssetRef` 結構，因此工具能用同樣的方式處理兩者。
- **`blocks`** 是一個可重複的欄位群組——一個輸入項目裡的迷你表格，在側面板中編輯，帶有分型別／可判別的新增選單，以及每個區塊各自的素材欄位。點按畫布上已渲染的區塊，就會聚焦到該區塊對應的那一列。`meeting-planner`、`chart-creator`、`event-name-badge`、`wayfinding-signage`、`color-block` 與 `digi-ad` 都使用了它。
- **`vector`** 把一組固定數量的數字（例如一個變換）組合成單一個複合控制項；**`file`** 則把使用者自己的檔案以位元組形式保存在記憶體中，供裝置端轉換公用程式使用（例如 `strip-data` 與 `compress-pdf`）。

### 9. Template 不含邏輯（用 Handlebars，不用 EJS）

選擇 Handlebars 而非 EJS 是刻意的決定：
- 不含邏輯。template 可以由非開發者撰寫。
- 預設安全。`{{x}}` 會做 HTML 逸出；`{{{x}}}` 則是選擇加入的原始輸出。
- template 中沒有任意的 JS，代表不需要針對每個 template 逐一做 XSS 稽核。

邏輯全部放在 `hooks.js` 裡，明確且可供審查。可用的 Handlebars helper：`{{default}}`、`{{upper}}`、`{{lower}}`、`{{eq}}`、`{{markdown}}`、`{{asset ref}}`、`{{asset ref "property"}}`（另外還有給同層級 `.ics`／`.vcf`／`.csv` template 使用的資料格式 helper：`icsStamp`／`rfcText`／`csvCell`）。

### 10. 工具可以組合工具

一個工具可以嵌入**另一個**工具的渲染結果，而不需要工具與工具之間互相 import——組合是由引擎解析的，絕不是由工具程式碼解析。有兩種介面：

- **宣告式 manifest**——`composes: [{ id, tool, inputs, format?, width?, height? }]`。引擎會渲染指定的子工具，並把結果以 `{{asset <id>}}` 的形式放進不含邏輯的 template 中。目前 `event-name-badge` 會以 SVG 形式組合 `qr-code`。
- **可攜式嵌入網址**——`<img src="https://lolly.tools/tool/<id>.<ext>?<inputs>">`。殼層會**在本機**渲染那個子工具（在本機渲染完成之前會先顯示一個佔位像素）；不會有任何內容真的從 `lolly.tools` 擷取。

可以組合任何工具的渲染結果：當父工具匯出成 SVG 或 PDF 時，**SVG** 子項會維持真正的向量圖形，匯出成 PNG 時則會清晰地點陣化；**PNG／JPG／WEBP** 子項則以圖片形式內嵌。這需要 `compose` 能力。被組合的子項屬於中介產物——永遠不會加浮水印，也不會蓋來源印記——而且組合會優雅地降級：如果某個殼層無法渲染某個子項，就只會省略那個位置，父工具依然能正常渲染。

---

## 我們刻意不做的事

- **不用 EJS／template 中沒有任意 JS。** XSS 攻擊面為零。邏輯全部放在 `hooks.js` 裡。
- **沒有素材 CMS。** 素材目錄就是 git。更新一律透過 PR 審查。沒有上傳 UI、沒有身分驗證、沒有審核佇列。git 審查*就是*審核機制。
- **MVP 階段沒有 RBAC。** 公開存取。品牌風險透過成熟度標籤＋浮水印，以及「使用者看到的所有素材都經過 PR 審查」這項結構性事實來管理。
- **沒有中央資料庫。** 所有使用者狀態都依裝置各自保存。SUSE ID 整合已在路線圖上，但不是上線的阻礙條件。
- **沒有共用的 tools／engine 程式碼路徑。** 引擎是開放原始碼；`tools/` 與 `assets/` 則維持在各自的儲存庫中，屬於 SUSE 的專有內容。這個切分是強制執行的（不允許互相 import），讓分割保持乾淨。

---

## 完整的生命週期

使用者開啟 `lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H`：

1. **啟動。** 網頁殼層開啟 IndexedDB、建構能力橋接層、同步工具與素材目錄（離線時則從快取載入）。
2. **路由。** URL hash → `tool` 視圖，並解析出 `qr-code` 與 URL 參數。
3. **載入。** `loadTool('qr-code', fetchFile)` 擷取 `tool.json`、依 JSON Schema 驗證，再擷取 `template.html`、`styles.css` 與 `hooks.js` 原始碼。
4. **解析 URL 狀態。** `parseUrlState` 把 URL 參數轉換成初始輸入值。素材參照（`?logo=suse/logo/primary`）會被解析成輕量的 `{ id, _unresolved: true }` 物件。
5. **Runtime。** `createRuntime(tool, host, initialValues)` 建構輸入模型（合併個人資料、預設值與初始值）、透過 `host.assets.get()` 解析素材參照、載入 hooks（以閉包作用域注入 `host`，並非沙箱化），並呼叫 `hooks.onInit`。
6. **渲染。** 殼層訂閱 runtime；每次狀態變化時都會收到 `{ model, hydrated }`。它依模型渲染輸入控制項，並把渲染後的 template HTML 寫入 `#tool-canvas`。
7. **互動。** 使用者在輸入框中輸入 → `runtime.setInput(id, value)` → 套用限制條件 → 呼叫 `hooks.onInput` → 重新渲染 template → 重新渲染畫面。畫布即時更新。
8. **匯出。** 使用者點擊下載（PNG） → `runtime.export(canvasNode, 'png')` → `host.export.render`（透過 dom-to-image-more 點陣化；SVG／PDF 則走專用的 DOM 走訪向量化器） → blob → `host.export.download`。工具可以選擇支援的格式範圍很廣：`svg`、`png`、`jpg`／`jpeg`、`webp`、`avif`、`pdf`，向量格式 `emf`、`eps`，加上印刷／CMYK 格式 `pdf-cmyk`、`cmyk-tiff`、`eps-cmyk`；影片格式 `webm`、`mp4`、`gif`；以及資料／文字格式 `html`、`md`、`txt`、`json`、`csv`、`ics`、`vcf`、`ico`、`zip`。（設定 `render.export: false` 的工具——例如 Color Palette、Countdown Timer、Strip Hidden Data、Text Helper、Compress PDF——會隱藏下載／格式／尺寸控制項。）實體單位會在這裡依格式各自換算（PDF → 真實頁面點數，點陣圖 → 依 DPI 換算成像素，並附上 `pHYs` chunk）。作者／來源中繼資料（作者、工具、來源——由 `engine/src/metadata.ts` 建構）會依格式各自內嵌：PNG iTXt、JPEG EXIF、PDF 資訊字典、SVG `<metadata>`、GIF 註解。experimental 工具的浮水印是由主機插入的，不是由工具本身插入。

在 Tauri 中是相同的生命週期。在 CLI 中也是相同的生命週期——由 jsdom 提供無介面的 DOM；輸出結果會寫入檔案或 stdout。

---

## 開放原始碼狀態

`engine/`、`shells/`、`schemas/` 與 `docs/` 這幾個目錄以 **MPL-2.0** 授權開放原始碼——這是一個與廠商無關的品牌工具腳手架平台，每個可獨立發布的單元都拆分成 [github.com/lolly-tools](https://github.com/lolly-tools) 底下自己的儲存庫。`tools/` 與 `catalog/assets/` 是 SUSE 專屬的內容，維持**SUSE 專有**（保留所有權利——詳見各儲存庫的 `NOTICE.md`）；它們不受 MPL 授權涵蓋。

這個切分是強制執行的——`engine/` 不會 import `tools/` 或 `assets/` 中的任何內容——讓平台與內容之間的界線保持乾淨。

---

## 路線圖

| 里程碑 | 目標時間 | 內容 |
|---|---|---|
| **初始工具** | ✅ 已完成 | QR Code, Quote Card, Email Signature, Day Brief, Code Canvas, Countdown Timer, Color Palette, Brand Lockup, Bag Video, Chart Creator, Filter: Duotone, Meeting Planner——網頁殼層上線 |
| **強化現有工具** | 2026 年年中 ✅ 已完成  | 可下載的離線應用程式（Tauri）；更多員工與活動用工具；更豐富的匯出流程（文字轉路徑穩定性、中繼資料、額外格式——見 `plans.md`） |
| **開放引擎原始碼** | 2026 年底 ✅ 已完成  | 引擎、殼層、schemas、docs 公開——品牌工具／素材則不公開 |
| **裝置間傳輸** | ✅ 已完成 | 可攜式的 `lolly-backup` 封裝包，能在任兩個安裝之間攜帶個人資料、已儲存的工作階段、已上傳的圖片與偏好設定——不論離線或連線，都不需要帳號。是一個向前相容、具完整性檢查的封套（規格：`docs/data-transfer.md`） |
| **建立正式的工具路線圖** | 2026 年底 | 客戶參考套件、AI 設計匯入、GET／URL 請求模式 |
| **裝置端隱私公用程式** | 🚧 進行中 | 在本機處理*你自己*檔案的內容轉換工具（檔案輸入 → 乾淨檔案輸出），取代把資料外流到單一用途 SaaS 的做法。**已完成：** `file` 輸入類型 ＋ `exportFile` 轉換路徑 ＋ `privacy:"on-device"` 慣例（不加浮水印／不留來源資訊） ＋ **Strip Hidden Data**（JPEG/PNG/SVG/PDF 中繼資料，PDF 部分透過 `host.pdf` 橋接層）與 **Text Helper**（給日常「貼到某個網站上」工作用的裝置端工作台——JSON 格式化、JWT 解碼、Base64、URL 編碼／解碼、SHA 雜湊，外加一個 Novelty 分組）。**下一步：** 裁切／調整大小、圖片轉檔／壓縮；接著是一個 `host.image` 編解碼器橋接層（規格：`plans/exfiltration-app-content.md`） |
| **設計權杖（DTCG）** | 🚧 色彩部分已上線 | 品牌基本元素採用標準的 [W3C Design Tokens（DTCG）](https://www.designtokens.org/TR/drafts/format/)——也就是 [Penpot 匯入／匯出](https://help.penpot.app/user-guide/design-systems/design-tokens/)所用的格式。**已完成：** 色彩權杖（`suse/tokens/brand`）、`host.tokens` 橋接層、選擇器色票＋參照連結的數值（規格：`docs/design-tokens.md`）。**下一步：** 尺寸／字體權杖、Penpot 匯入／匯出、傳輸封裝包中的使用者權杖（`tokens.json`） |
| **MCP 代理端點（渲染）** | ✅ 已完成 | 一個 [MCP](https://modelcontextprotocol.io) 伺服器把目錄＋渲染路徑公開成可呼叫的工具（`lolly_list_tools`／`describe_tool`／`build_url`／`render`／`transform`），讓任何代理程式都能產出完成、受規則約束的素材——可以把它加到任何 MCP 用戶端，當作自訂連接器（OAuth 2.1），也可以讓 CLI／HTTP 用戶端用持有人權杖指向它。上線於 `mcp.lolly.tools`（完整端點：透過代管的無介面瀏覽器提供點陣圖／PDF／動畫／影片）與 `lolly.tools/api/mcp`（無伺服器、免瀏覽器層級）。這與下方的 Penpot *撰寫*用 MCP 不同，後者談的是工具的**建立**（規格：`plans/mcp-server.md`；指南：`docs/mcp.md` ＋ `docs/ai-agents.md`） |
| **把 Penpot 檔案匯入為工具** | 2027+ | 匯入一個 Penpot 檔案，並將它*呈現為一個 Lolly 工具*（宣告式、限制優先），把用 Penpot 撰寫的設計變成具確定性的產生器 |
| **MCP ＋ Penpot 擴充功能（僅限連線撰寫）** | 2027+ | 一個 Penpot MCP 伺服器透過 AI 來組織新工具——這是建立具確定性 template 最視覺化的方式：先由品牌資訊產出第一輪草案，再由人類參與把關完善，目標是隨時間逐步達到一次到位的新情境產出。工具的*建立*僅限連線；但它產出的工具可以在任何地方執行 |
| **RBAC ＋ SUSE ID** | 2027+ | 把特定工具鎖在 SUSE ID 之後；多裝置已儲存狀態；Google Drive 匯入／匯出 |

---

## 引擎的終點，主機的起點

如果能用純資料 ＋ Handlebars 描述 → **引擎**。
如果會碰觸 DOM、檔案系統、網路，或任何瀏覽器／作業系統 API → **主機**。

這條界線刻意畫得很清楚。引擎是開放原始碼的部分。任何知道 SUSE、特定平台，或執行環境細節的東西，都不會出現在引擎裡。
