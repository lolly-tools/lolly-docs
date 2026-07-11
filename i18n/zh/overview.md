# 概述

本文档记录 Lolly 平台的目的、结构与架构决策，反映的既是产品愿景，也是代码库的当前状态。

> **状态：** Lolly 是一个内部原型，处于**尚未完成的封闭试点**阶段。引擎本身是确定性且内部一致的，但产品尚处早期——SUSE 是第一号客户——其加密与文件解析引擎目前正在接受 SUSE 严格的基础设施加固，为迈向企业级规模做准备（这方面我们确实很擅长）。请把下文的架构内容当作正在接受检验的设计意图，而不是一个已完成、已认证的成品。试点如何运行与衡量，参见[采用与治理](/info/adoption-governance.html#status)。

---

## 为什么存在这个平台

团队普遍面临一个反复出现的问题：可重复的创意与内容工作，其规律性已经不值得每次都动用专业人手，但对质量的敏感度又高到不能在没有护栏的情况下随意外包。结果要么是产出缓慢（专家瓶颈），要么是风格不统一（人人各自为战、用手边有什么工具就用什么），要么是被供应商锁定（由一个控制着你模板的 SaaS DAM 主导）。

这个平台是对此的结构性回答：

> **规模化的程序化创意与内容制作**——面向员工、供应商与合作伙伴的零人工素材生成，规则始终处于中央管控之下。

结果是**充裕**：每场活动都有正确的指示牌，每条 CVE 警报都符合内部风格，每张标签都印刷清晰，每个邮件签名都是最新版本——这一切都不需要提交设计工单。这个平台处理的是重复出现的、已操作化的创意工作，刻意不做成一个定制创意工具——旗舰级作品仍然由设计师主导。

### 它在这一格局中的位置

| 能力 | Canva | 品牌门户 | Illustrator | Figma / Penpot | **Lolly** |
|---|---|---|---|---|---|
| 批量内容生成 | 部分支持 | ✗ | ✗ | ✗ | **✓** |
| 完全离线工作 | ✗ | ✗ | ✓ | 部分支持 | **✓** |
| 模板逻辑与硬性约束 | ✗ | 部分支持 | ✗ | 部分支持 | **✓** |
| 无需设计技能 | 部分支持 | ✓ | ✗ | ✗ | **✓** |
| 自动生成 Content Credentials | ✗ | ✗ | 部分支持 | ✗ | **✓** |
| 工具可组合其他工具 | ✗ | ✗ | ✗ | ✗ | **✓** |
| 开放引擎，不被 SaaS 锁定 | ✗ | ✗ | ✗ | 部分支持 | **✓** |
| C2PA content credentials | ✗ | ✗ | ✗ | ✗ | **✓** |
| 可选的取证级溯源信息 | ✗ | ✗ | ✗ | ✗ | **✓** |
| 移动端与桌面端应用 | ✓ | ✗ | ✗ | 部分支持 | **✓** |
| 命令行与 TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

空白之处很清楚：现有格局中，没有一样产品能同时提供约束优先、可离线、低技能门槛、可内部访问的输出。Lolly 甚至内置了一个开放画布——**Layout Studio**——其中的颜色、字体与素材都遵循品牌全局设定，因此即便是自由排布也依然保持约束优先。它**不是**一个无约束的设计套件：设计师仍然使用 Illustrator 和 Figma 完成定制化的旗舰作品。各种排列组合都可以用这个工具拼装出来。

**适用场景：** 快速生成已操作化的创意素材——活动图块、姓名牌、签名、CVE 警报、二维码、社交卡片、托运标签、结构化报告。

**不适用场景：** 定制主视觉内容。

---

## 整体架构

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

### 仓库结构

```
lolly/
├── engine/           # 平台无关的核心。开源（MPL-2.0）。
│   └── src/
│       ├── index.ts          # 对外接口——loader、runtime、template、inputs、url-mode
│       ├── loader.ts         # 获取并校验工具文件
│       ├── runtime.ts        # 编排五步生命周期
│       ├── template.ts       # Handlebars 渲染 + annotateTemplate
│       ├── inputs.ts         # 清单 → 运行时输入模型
│       ├── url-mode.ts       # URL ↔ 输入状态互转
│       ├── validate.ts       # 清单的 JSON Schema 校验
│       ├── compose.ts        # 解析嵌套的工具渲染（composes）
│       ├── embed.ts          # 解析可移植的 lolly.tools 嵌入 URL
│       └── bridge/
│           └── host-v1.ts    # TypeScript 接口——桥接契约
│
├── shells/
│   ├── web/          # PWA——在线托管；主要分发渠道
│   │   └── src/
│   │       ├── main.ts           # 启动、路由
│   │       ├── theme.ts          # 主题应用/持久化（防止 FOUC）
│   │       ├── bridge/           # HostV1 API 的 web 实现
│   │       │   ├── index.ts      # 组合全部桥接组件
│   │       │   ├── db.ts         # IndexedDB 设置
│   │       │   ├── state.ts      # host.state——已保存的编辑
│   │       │   ├── profile.ts    # host.profile——用户详情
│   │       │   ├── assets.ts     # host.assets——目录 + 用户上传
│   │       │   ├── clipboard.ts  # host.clipboard
│   │       │   ├── export.ts     # host.export——栅格化/序列化
│   │       │   ├── net.ts        # host.net——白名单限制的 fetch
│   │       │   └── media.ts      # host.media——实时摄像头帧（onFrame）
│   │       ├── catalog/
│   │       │   └── sync.ts       # 启动时的目录同步 + 离线缓存
│   │       ├── styles/           # 应用全局 CSS（app.css、picker.css、tokens.css）
│   │       └── views/
│   │           ├── gallery.ts    # 工具库列表 + 已保存状态卡片
│   │           ├── tool.ts       # 挂载单个工具（输入 + 画布 + 操作）
│   │           ├── picker.ts     # 资源选择器界面（由 host.assets 调用）
│   │           ├── profile.ts    # 用户详情编辑器
│   │           ├── projects.ts   # /p——已保存会话的文件夹（可嵌套；支持按文件夹/选中项导出）
│   │           └── free-canvas.ts # render.layout:"editor" 工具的自由画布编辑覆盖层
│   │
│   ├── cli/          # Node.js CLI——同一个引擎，无界面 jsdom
│   │   ├── bin/lolly.ts
│   │   └── src/
│   │       ├── run.ts    # loadTool → createRuntime → export → 写入文件
│   │       └── bridge.ts # HostV1 的 CLI 实现
│   │
│   ├── tui/          # 交互式终端壳层（Ink）——复用 CLI 的桥接实现
│   │   └── src/
│   │       ├── main.tsx  # 全屏应用：Gallery / Projects / Profile / ToolView
│   │       └── bridge.ts # CLI 桥接 + ~/.lolly 下的本地磁盘状态
│   │
│   ├── tauri-desktop/ # 可下载的桌面应用
│   └── tauri-mobile/  # iOS/Android 应用
│
├── tools/            # 配置文件视图（已加入 gitignore）——数据，而非代码。由以下内容合并而成：
│                     #   community/（公开、与品牌无关、MPL）+ brands/<active>/tools（品牌方所有）。
│   ├── qr-code/
│   ├── quotes/
│   ├── email-signature/
│   ├── daily-card/        # “Day Brief”——天气/时间/地图（由内联模板脚本获取）
│   ├── code-canvas/
│   ├── countdown-timer/
│   ├── color-palette/
│   ├── color-block/           # 带类型的异构区块（addMenu 判别器）
│   ├── dynamic-layout/
│   ├── tool-logo/         # “Logo”——自动切换的品牌标志
│   ├── street-map/        # 离线矢量城市街区地图
│   ├── url-shot/          # “URL Screenshot”（capture 能力）
│   ├── strip-data/        # 设备端元数据清除——JPEG/PNG/SVG/PDF（输入文件 → 输出干净文件）
│   ├── compress-pdf/      # 设备端 PDF 压缩器——重新压缩图片（输入文件 → 输出更小的文件）
│   ├── brand-lockup/      # “Brand Lockup”——SUSE 标志组合；HarfBuzz 文字转路径（wasm）
│   ├── bag-video/
│   ├── chart-creator/     # 由结构化数据生成的 SVG 图表
│   ├── filter-duotone/    # 双色调照片处理
│   ├── filter-halftone/   # 照片 → 矢量半调网点
│   ├── filter-scanline/   # 照片 → 复古的分色扫描线网格（SVG / 透明栅格）
│   ├── meeting-planner/   # 全球时区会议排程器
│   ├── calendar-ics/      # 事件 → .ics 日历文件外加一张卡片
│   ├── digi-ad/           # “Animated Ad”——由场景组成的循环横幅
│   ├── event-name-badge/  # 会议姓名牌——将 qr-code 作为 SVG 组合进来
│   ├── wayfinding-signage/ # 活动指示牌；方向区块自动适配标签文字
│   ├── text-helper/       # 设备端文本工作台（格式化/解码/哈希/去标识化）
│   ├── layout-studio/     # “Layout Studio”——自由式所见即所得编辑画布（render.layout: editor）
│   ├── multi-page-pdf/    # 多页 PDF 文档——封面、可流动的内容区块、封底
│   ├── diagram-builder/   # 组织架构 / 分层蛋糕图 / 流程图 / 循环图 / 金字塔图
│   ├── logo-wall/         # 多个标志 → 自动排布网格
│   ├── logo-lockup-partner/ # SUSE + 合作伙伴联合品牌组合
│   ├── web-icon/          # 由文字 + 颜色生成的 favicon .ico / png / svg
│   ├── filter-posterize/  # 照片 → 扁平分色矢量图
│   ├── filter-pixel-stretch/ # 照片 → 像素拉伸效果
│   ├── lottie-digi-ad/    # 动画 Lottie 广告横幅
│   └── pose-geeko/        # 摆出姿势的 SUSE Geeko 吉祥物——印刷就绪静态图
│
├── catalog/
│   ├── tools/index.json        # 工具注册表
│   └── assets/
│       ├── index.json          # 资源注册表
│       └── suse/...            # 标志、调色板等
│
├── schemas/          # tool.json、资源条目、AssetRef 的 JSON Schema
├── scripts/          # build-catalog-index.ts、checksum-assets.ts、validate-catalog.ts
├── tests/            # 引擎测试
└── docs/             # 本文件 + 编写指南 + 定位说明
```

---

## 平台交付模式

这个平台以多种形态运行——web PWA、Tauri 桌面/移动端、可脚本化的 CLI，以及交互式 TUI。它们全部使用同一个引擎和同一套工具文件。

### Web（PWA）——主要分发渠道
托管在一个由 SUSE 控制的 URL 上。一旦 service worker 缓存了工具和资源，就可以离线使用。大多数员工、供应商和合作伙伴都会在这里使用这个平台。无需账号——状态按设备存储在 IndexedDB 中。

Web 壳层由同一套布局响应式适配。在桌面端，一个工具由一个可调整宽度的控制侧栏和一个预览舞台组成，画布支持原生触控板导航（Cmd/Ctrl + 滚轮或捏合可围绕光标缩放，按住空格或中键拖动可平移，`0`/`1`/`+`/`−` 键，以及一个 Fit/% 的 HUD 显示）。在移动端（≤640px），控制区变成一个吸附在顶部的面板，通过拖动把手在窥视/半屏/全屏之间切换（点击也可切换），叠加在一个静态的全屏预览之上；一个悬浮的**渲染**按钮会以底部弹出面板的形式打开**导出**控制项。触控操作在预览上支持捏合缩放和拖动平移。两种形态下的渲染路径和导出控制完全一致——变化的只是外层界面。

**批量模式（`/pro`）。** Web 壳层还内置了一个电子表格式的批量网格（`shells/web/src/pro/`），可以跨一个或多个工具一次性渲染多行数据。它支持 CSV/TSV 互转外加电子表格粘贴、按行设置模板/格式/尺寸/单位/dpi、一个带实时预览的区块编辑侧边面板、可折叠的导出列、按行显示的“相关性”标签栏、左侧拖动把手实现行重排、两步确认删除、已保存的批量会话，以及 `.zip` 下载。这正是“批量内容生成”这一定位背后的一对多界面。

### Tauri 桌面 / 移动端
打包为原生应用（借助 Tauri 实现小体积）。提供完整的离线可用性、供依赖 CLI 的工具（PDF Smasher、Font Outliner）使用的文件系统访问权限，以及摄像头访问权限。计划于 2026 年年中进行工具增强。

### CLI
`lolly <tool-id> [--input=value ...] --output=file.png`

桌面用户可以从终端调用大量工具。CLI 壳层加载同一个引擎，创建一个 jsdom DOM，运行同一条渲染路径，然后写入文件。URL 模式就是它的传输方式——CLI 并不是一套独立的实现。这保证了 CLI 与图形界面的输出完全一致。

```bash
lolly qr-code --url=https://suse.com --output=qr.svg
lolly quotes --quote="Ship it." --output=quote.png
lolly                        # 列出可用工具
lolly qr-code                # 列出该工具的输入项
```

### TUI
`npm run tui`

这是 CLI 的交互式对应物：一个全屏、以键盘操作为先的终端应用（基于 Ink 构建），用于浏览工具、填写输入、保存项目并导出——全程无需图形界面。对于无需 DOM 的格式（SVG/EMF/EPS/HTML + 文本/数据），它的 host 桥接**复用了 CLI 的实现**，并在此基础上增加了 `~/.lolly` 下的磁盘状态，以及一个可选的内联预览。除此之外，它还有一个**浏览器渲染层**：一个受限的无头 Chromium（与 MCP 服务器所安装的是同一个），按需生成栅格图/PDF/视频以及实时 URL 抓取——驱动的是一份构建好的 web 壳层副本，因此输出完全一致，并且只有在你第一次导出这类格式时才会启动。因此 `url-shot`（含裁剪 + 重新着色 + 矢量 PDF/SVG）以及每一个栅格图/PDF 工具，也都能在终端里运行。参见 [TUI 指南](/info/tui.html)。

---

## 工具分类

工具在清单中通过 `category` 打标签，用于图库分组。

各行按图库分区的顺序排列。`utility` 分区在图库中永远**最后**渲染（排在其他所有分类之后，包括未来新增的分类）——它是设备端的“离线工具箱”抽屉。

| 分类 | 已上线工具 | 计划中 |
|---|---|---|
| `everyone` | QR Code Generator、Quote Card、Email Signature、Day Brief、Code Canvas、Color Block、Dynamic Layout、Logo、Web Icon Maker | Employee Image Stationery |
| `designer` | Brand Lockup、Bag Video、Chart Creator、Street Map、Animated Ad、Multi-Page PDF、Diagram Builder、Logo Lockup: Grid (NASCAR)、Logo Lockup: Partner、Filter: Duotone、Filter: Halftone、Filter: Scanline、Filter: Posterize Bitmap、Filter: Pixel Stretch | Font Outliner |
| `event` | Meeting Planner、Event Name Badge、Wayfinding Signage、Calendar ICS | Event Stationery、Bulk Name Badges、Room Agenda Cards |
| `product` | — | CVE Alert、Product Release Announcement、Blog OG Image |
| `utility` | Countdown Timer、Color Palette、URL Screenshot、Strip Hidden Data、Text Helper、Compress PDF、Layout Studio | 单位/格式转换器，更多设备端隐私工具 |

工具还会按状态分类：`official`（品牌已批准，无水印）、`community`（外部贡献）、`experimental`（导出带水印）。目前 Dynamic Layout、URL Screenshot、Logo Lockup: Grid (NASCAR)、Filter: Posterize Bitmap 和 Diagram Builder 处于 `experimental` 状态；Web Icon Maker 和 Layout Studio 则作为 `community` 工具发布。

**Layout Studio** 是第一个建立在 `render.layout: "editor"` 自由画布模式之上的工具——一个无外层界面、直接操作的界面，你可以在其中拖动、缩放、旋转并吸附文字、形状和图片的方框，然后通过与其他所有工具相同的渲染路径导出。

**Strip Hidden Data** 是第一个**设备端工具**（`privacy: "on-device"`）：一个内容转换工具，接收*你*提供的文件，完全在浏览器内处理，然后交还一份干净的副本——不会上传，不加水印，也不打上来源标记。**Text Helper** 是第二个——一个面向日常“粘贴进网站”类工作（JSON 格式化、JWT 解码、Base64、URL 编解码、SHA 哈希）的设备端工作台。**Compress PDF** 是第三个——它通过重新压缩 PDF 中的图片来缩小体积，同样完全在设备端完成。这三者都带有“在你的设备上运行——不会上传任何内容”的徽章文字。这是一个隐私工具分类的开端，用来取代把机密文件交给单一用途网站处理的做法。

> 说明：`category` 和 `status` 会从每个 `tool.json` 反规范化写入 `catalog/tools/index.json`（图库读取的注册表）。清单才是权威来源——该索引由 `npm run build:catalog` **生成**，如果提交的索引与清单不一致，`npm run validate:catalog` 会让 CI 失败。

---

## 架构承诺

以下决策都已经落定。改动其中任何一项都是一项重大工程——它们塑造了代码库中的所有其他决策。

### 1. 声明式工具，配一个命令式的逃生舱口

一个工具由一份清单（`tool.json`）+ 一个模板（`template.html`）+ 可选的 `hooks.js` 组成。

**输入项由清单声明**，而不是模板。输入项不会从 Handlebars 标记中推断得出。清单是契约；模板通过 `{{id}}` 消费具名变量。

**钩子是可选的。** 大多数工具是纯声明式的——清单加模板就够了。需要计算值的工具（二维码编码、图表数据整形）会提供 `hooks.js`，暴露具名的生命周期函数（`onInit`、`onInput`、`onFrame`——面向运动响应式工具的逐帧实时摄像头钩子——`beforeRender`、`beforeExport`、`afterExport`，以及 `exportFile`——供 Strip Hidden Data 这类设备端工具使用的文件输入/文件输出转换路径）。host 通过 `new Function('host', …)` 加载钩子，把能力桥接以闭包作用域的形式注入。这是一份**可移植性契约，而不是安全沙箱**：钩子仍然运行在页面的作用域内，在浏览器壳层中*可以*访问 `window`/`fetch`/`document`——`host.*` 是受支持的可移植接口，而不是一道强制边界。异步钩子的结果会被限时处理（onInit 5 秒、onInput 2 秒，其余 5 秒），逾期的结果会被丢弃；但一个失控的*同步*钩子无法被抢占中止。因此在 Worker 隔离机制上线之前，运行不受信任的第三方钩子代码是不安全的。

这一点之所以重要：声明式工具可以由非开发者编写。如果每个工具都是一个 web 应用，“创建/维护主力模板所需技能有限”这条风险提示就会变成一个永久性瓶颈。

### 2. 工具与资源是数据，而非打包的代码

web 和 Tauri 应用会在启动时从一个已知 URL 获取工具与资源目录，将其缓存到本地，并基于其中已有的内容运行。**新增一个活动图块或季节性资源，不需要发布新版本应用。**

资源字节会用 SHA-256 计算校验和，以防止 CDN 投毒。资源的 `id` + `version` 驱动缓存失效。

### 3. 能力桥接是工具能看到的唯一 API

工具从不触碰模板区域之外的 DOM，从不直接调用 `fetch`，也从不读取文件系统。它们调用带版本号的 `host.*` 方法。这个桥接定义在 `engine/src/bridge/host-v1.ts` 中：

| 桥接 API | 作用 |
|---|---|
| `host.profile` | 用户的名字、邮箱、头像照片、城市等。通过 `bindToProfile` 预填输入项。 |
| `host.assets` | 目录查询、资源解析、由 host 提供的选择器界面。 |
| `host.state` | 保存/加载输入槽位。web 端用 IndexedDB，Tauri 用文件系统，CLI 用内存。 |
| `host.clipboard` | 将文本或图片写入剪贴板（附带平台回退方案）。 |
| `host.export` | 对渲染目标进行栅格化或序列化。为实验性工具应用水印。 |
| `host.net` | 白名单限制的 fetch——仅当工具声明了 `"network"` 能力时才可用。（目前没有已上线工具使用它。） |

可选的、附加性的接口只有在壳层提供时才会出现。其中两个是**由能力开关控制**的——只有当工具声明了对应的标志时才会暴露：`host.compose`（嵌入另一个工具的渲染结果——`compose`）和 `host.capture`（为 URL Screenshot 提供的页面抓取——`capture`）。其余的是**特性探测**得到的——只要壳层能提供，就会存在：`host.text`（通过 HarfBuzz WASM 实现文字转路径；`wasm` 能力标志会标记依赖它的工具）、`host.pdf`（PDF 解析/压缩，供 Strip Hidden Data 和 Compress PDF 使用），以及 `host.tokens`（DTCG 设计令牌）。可声明的能力有：`network`、`filesystem`、`clipboard`、`camera`、`ffmpeg`、`wasm`、`capture`、`compose`。

同一个工具能在浏览器、Tauri 和无界面 CLI 中运行，是因为每个壳层都实现了这套接口——工具本身永远不知道自己身处哪一种环境。

这个桥接是带版本号的。新增方法属于次版本变更；移除或修改方法签名则需要主版本号升级。v2 发布时，v1 必须继续可用。

### 4. 资源 ID 是永久性的

`suse/logo/primary` 就是一份契约。一旦发布：
- ID 永远不会改变，也不会被重新利用。
- 字节内容变化 → 在清单中提升 `version`。
- 被新资源取代 → 设置 `deprecated: true`，并可选地设置 `replacedBy`。
- 已有的引用永远能解析成功。

这使得已保存的工具状态和通过 URL 分享的链接能够历经数年依然有效。

### 5. URL 模式是一等公民

每一个输入项都必须能表示为一个 URL 参数：

```
lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H
```

CLI 模式就是换了一种传输方式的 URL 模式——CLI 壳层从 argv 构建出一个 URL 状态对象，并运行**同一条**引擎流水线。渲染路径只有一条。CLI 不可能与图形界面产生偏差，因为它根本不是一套独立的实现。

`url-mode.ts` 负责这一往返过程（解析与序列化）。保留参数（永远不会作为输入项转发给工具）：`format`、`export`、`copy`、`slot`、`output`、`filename`、`_v`、`z`（打包状态——即“最短链接”令牌）、`width`/`w`、`height`/`h`、`unit`、`dpi`、`profile`、`password`、`bleed`、`marks`、`full`、`options`、`nostage`。URL 模式下的资源输入按其 `id` 序列化；运行时会在渲染前通过 `host.assets.get()` 解析它们。`width`/`height` 是以 `unit` 为单位的数值（默认 `px`，也可以是 `mm`/`cm`/`in`/`pt`/`pc`）；使用物理单位时，`dpi` 决定栅格分辨率。它们会设置画布文档尺寸，并预填导出尺寸面板。

### 6. 存储必须经过桥接，不能直接访问

Web 壳层：IndexedDB。Tauri：文件系统。CLI：内存。工具看到的只有 `host.state.save(slot, data)` 和 `host.state.load(slot)`。不使用 `localStorage`——它容量太小，也存不下二进制大对象。

用户可以为每个工具保存多个具名的编辑槽位，之后再回到各自的会话。无需创建账号；状态按设备存储。因为桥接是唯一的接口边界，这份按设备存储的状态也就具备了*可迁移性*：`shells/web/src/data-transfer.ts` 通过 `host.profile`/`host.state`/`host.assets` 把所有内容读出，打包成一个 `lolly-backup` 压缩包，可以导入任何其他安装实例——这是“换到新设备”这个问题在离线情况下的答案，不需要任何服务器（完整规范见 `docs/data-transfer.md`）。SUSE ID 集成（多设备同步）是在此基础上的一个未来里程碑。

### 7. 成熟度标签从结构上回答了“品牌是否批准”这个风险问题

每个工具都在清单中声明 `status: official | community | experimental`。图库按状态排序。实验性工具的导出会自动加上水印——水印由 `host.export.render` 施加，而不是由工具本身施加，因此非官方工具的作者无法选择关闭它。

这是对“使用任何工具都意味着品牌已批准”这一认知风险的结构性回答。流程层面的应对措施（审核队列、SUSE ID 门槛）则叠加在这之上。

### 8. 工具输入项（包括资源）都通过清单定型

输入项会声明一个 `type`：`text`、`longtext`、`number`、`boolean`、`color`、`select`、`asset`、`date`、`time`、`datetime-local`、`url`、`profile`、`blocks`、`vector`，以及 `file`。host 会根据清单为每种类型渲染一个通用控件——工具本身不需要编写任何控件代码。其中三种的分量比其余的更重：

- **`asset`**（带有 `filter` 和 `allowUpload`）是通往全局资源系统的桥梁；`allowUpload: false` 是品牌强制执行的手段，用于像赞助图块标志这类只允许使用库内资源的场景。用户上传的内容使用与库内资源相同的 `AssetRef` 结构，因此工具对二者的处理方式完全一致。
- **`blocks`** 是一个可重复的字段组——一个内嵌在单个输入项中的迷你表格，在侧边面板中编辑，带有带类型/可判别的新增菜单，以及逐区块的资源字段。点击画布上渲染出的某个区块，会聚焦到该区块对应的行。被 `meeting-planner`、`chart-creator`、`event-name-badge`、`wayfinding-signage`、`color-block` 和 `digi-ad` 使用。
- **`vector`** 把一组固定数量的数值（例如一个变换）归拢为一个复合控件；**`file`** 把用户自己的文件以字节形式保存在内存中，供 `strip-data` 和 `compress-pdf` 这类设备端转换工具使用。

### 9. 模板是无逻辑的（用 Handlebars，而不是 EJS）

选择 Handlebars 而非 EJS 是刻意为之：
- 无逻辑。模板可以由非开发者编写。
- 默认安全。`{{x}}` 会做 HTML 转义；`{{{x}}}` 则是需要主动选用的原始输出。
- 模板中不允许任意 JS，意味着不存在逐模板的 XSS 审计面。

逻辑存放在 `hooks.js` 中，显式且可审查。可用的 Handlebars 辅助函数：`{{default}}`、`{{upper}}`、`{{lower}}`、`{{eq}}`、`{{markdown}}`、`{{asset ref}}`、`{{asset ref "property"}}`（另有配套的 `.ics`/`.vcf`/`.csv` 模板所使用的数据格式化辅助函数 `icsStamp`/`rfcText`/`csvCell`）。

### 10. 工具组合工具

一个工具可以嵌入**另一个**工具的渲染结果，而无需工具之间互相导入——组合关系由引擎解析，从不由工具代码本身处理。这里有两种途径：

- **声明式清单**——`composes: [{ id, tool, inputs, format?, width?, height? }]`。引擎会渲染指定的子工具，并把结果以 `{{asset <id>}}` 的形式放入无逻辑模板中。目前 `event-name-badge` 就把 `qr-code` 以 SVG 形式组合了进来。
- **可移植的嵌入 URL**——`<img src="https://lolly.tools/tool/<id>.<ext>?<inputs>">`。壳层会在**本地**渲染这个子项（在本地渲染完成之前会显示一个占位像素）；不会从 `lolly.tools` 抓取任何内容。

可以组合任何工具的渲染结果：当父级导出为 SVG 或 PDF 时，**SVG** 子项会保持为真正的矢量图，导出为 PNG 时则会清晰栅格化；**PNG/JPG/WEBP** 子项则以图片形式嵌入。这需要 `compose` 能力。被组合的子项属于中间产物——从不加水印，也不打上来源标记——而且组合会优雅降级：如果某个壳层无法渲染某个子项，就直接省略该槽位，父级仍然能够渲染。

---

## 我们明确选择不做的事

- **模板中不用 EJS，也不允许任意 JS。** XSS 面为零。逻辑存放在 `hooks.js` 中。
- **没有资源 CMS。** 资源目录就是 git。更新都要经过 PR 审查。没有上传界面，没有身份验证，也没有审核队列。git 审查本身*就是*审核。
- **MVP 阶段没有 RBAC。** 公开访问。品牌风险通过成熟度标签 + 水印，以及“用户看到的所有资源都经过 PR 审查”这一结构性事实来管理。
- **没有中央数据库。** 所有用户状态都按设备存储。SUSE ID 集成已列入路线图，但不是发布的阻塞项。
- **工具与引擎不共享代码路径。** 引擎是开源的；`tools/` 和 `assets/` 仍然是 SUSE 专有内容，存放在各自的仓库中。这种分离是被强制执行的（禁止跨仓库导入），从而保持这一拆分的干净利落。

---

## 端到端的生命周期

一名用户打开 `lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H`：

1. **启动。** Web 壳层打开 IndexedDB，构建能力桥接，同步工具与资源目录（离线时则从缓存加载）。
2. **路由。** URL 哈希 → `tool` 视图，提取出 `qr-code` 和 URL 参数。
3. **加载。** `loadTool('qr-code', fetchFile)` 获取 `tool.json`，依据 JSON Schema 进行校验，再获取 `template.html`、`styles.css` 和 `hooks.js` 源码。
4. **解析 URL 状态。** `parseUrlState` 把 URL 参数转换为初始输入值。资源引用（`?logo=suse/logo/primary`）会被解析为轻量的 `{ id, _unresolved: true }` 对象。
5. **运行时。** `createRuntime(tool, host, initialValues)` 构建输入模型（合并个人资料数据、默认值和初始值），通过 `host.assets.get()` 解析资源引用，加载钩子（`host` 以闭包作用域注入，并非沙箱化），调用 `hooks.onInit`。
6. **渲染。** 壳层订阅运行时；每次状态变化都会收到 `{ model, hydrated }`。它据此渲染输入控件，并把渲染好的模板 HTML 写入 `#tool-canvas`。
7. **交互。** 用户在某个输入项中键入内容 → `runtime.setInput(id, value)` → 应用约束 → 调用 `hooks.onInput` → 重新渲染模板 → 重新渲染界面。画布随之实时更新。
8. **导出。** 用户点击下载（PNG）→ `runtime.export(canvasNode, 'png')` → `host.export.render`（通过 dom-to-image-more 栅格化；SVG/PDF 则经由专门的、遍历 DOM 的矢量化器处理）→ 生成 blob → `host.export.download`。一个工具可选用的格式范围很广：`svg`、`png`、`jpg`/`jpeg`、`webp`、`avif`、`pdf`，矢量格式 `emf`、`eps`，加上印刷/CMYK 格式 `pdf-cmyk`、`cmyk-tiff`、`eps-cmyk`；视频格式 `webm`、`mp4`、`gif`；以及数据/文本格式 `html`、`md`、`txt`、`json`、`csv`、`ics`、`vcf`、`ico`、`zip`。（设置了 `render.export: false` 的工具——例如 Color Palette、Countdown Timer、Strip Hidden Data、Text Helper、Compress PDF——会隐藏下载/格式/尺寸控件。）物理单位会在此按格式转换（PDF → 真实的页面磅值，栅格图 → 按 DPI 换算的像素并附带一个 `pHYs` 数据块）。作者/来源元数据（作者、工具、来源——由 `engine/src/metadata.ts` 构建）会按格式嵌入：PNG 用 iTXt，JPEG 用 EXIF，PDF 用 info 字典，SVG 用 `<metadata>`，GIF 用注释。实验性工具的水印由 host 插入，而不是由工具本身插入。

Tauri 中的生命周期完全相同。CLI 中的生命周期也完全相同——由 jsdom 提供无界面 DOM；输出写入文件或 stdout。

---

## 开源状态

`engine/`、`shells/`、`schemas/` 和 `docs/` 这几个目录以 **MPL-2.0** 协议开源——这是一个供应商中立的品牌工具脚手架平台，每个可独立发布的单元都拆分到 [github.com/lolly-tools](https://github.com/lolly-tools) 下的各自仓库中。`tools/` 和 `catalog/assets/` 是 SUSE 专属内容，**归 SUSE 专有**（保留所有权利——详见各仓库的 `NOTICE.md`）；它们不受 MPL 协议约束。

这一拆分是被强制执行的——`engine/` 不会跨仓库导入 `tools/` 或 `assets/` 中的内容——从而让平台与内容之间的边界保持清晰。

---

## 路线图

| 里程碑 | 目标时间 | 内容 |
|---|---|---|
| **首批工具** | ✅ 已完成 | QR Code、Quote Card、Email Signature、Day Brief、Code Canvas、Countdown Timer、Color Palette、Brand Lockup、Bag Video、Chart Creator、Filter: Duotone、Meeting Planner——web 壳层已上线 |
| **增强现有工具** | 2026 年年中 ✅ 已完成 | 可下载的离线应用（Tauri）；更多员工与活动类工具；更丰富的导出流水线（文字转路径的稳定性、元数据、更多格式——见 `plans.md`） |
| **引擎开源** | 2026 年末 ✅ 已完成 | 引擎、壳层、schemas、文档公开——品牌相关的工具/资源除外 |
| **设备间迁移** | ✅ 已完成 | 可移植的 `lolly-backup` 包在任意两个安装实例之间搬运个人资料、已保存会话、已上传图片和偏好设置——无论在线离线，均无需账号。前向兼容、经完整性校验的信封结构（规范见 `docs/data-transfer.md`） |
| **建立正式的工具路线图** | 2026 年末 | 客户参考套件、AI 设计导入、GET/URL 请求模式 |
| **设备端隐私工具** | 🚧 进行中 | 在本地处理*你自己*文件的内容转换工具（输入文件 → 输出干净文件），取代把数据外泄给单一用途 SaaS 的做法。**已完成：** `file` 输入类型 + `exportFile` 转换路径 + `privacy:"on-device"` 约定（无水印/来源标记）+ **Strip Hidden Data**（JPEG/PNG/SVG/PDF 元数据，PDF 通过 `host.pdf` 桥接处理）以及 **Text Helper**（面向日常“粘贴进网站”类工作的设备端工作台——JSON 格式化、JWT 解码、Base64、URL 编解码、SHA 哈希，外加一个 Novelty 分组）。**接下来：** 裁剪/缩放、图片格式转换/压缩；随后是一个 `host.image` 编解码桥接（规范见 `plans/exfiltration-app-content.md`） |
| **设计令牌（DTCG）** | 🚧 颜色部分已上线 | 品牌基础值采用标准的 [W3C Design Tokens（DTCG）](https://www.designtokens.org/TR/drafts/format/)格式——也就是 [Penpot 导入/导出](https://help.penpot.app/user-guide/design-systems/design-tokens/)所用的格式。**已完成：** 颜色令牌（`suse/tokens/brand`）、`host.tokens` 桥接、选择器色板 + 带引用链接的取值（规范见 `docs/design-tokens.md`）。**接下来：** 尺寸/字体令牌、Penpot 导入/导出、迁移包中的用户令牌（`tokens.json`） |
| **MCP 智能体端点（渲染）** | ✅ 已完成 | 一个 [MCP](https://modelcontextprotocol.io) 服务器把目录和渲染路径暴露为可调用工具（`lolly_list_tools` / `describe_tool` / `build_url` / `render` / `transform`），使任何智能体都能产出遵循规则、成品级的资源——可以把它作为自定义连接器（OAuth 2.1）添加到任何 MCP 客户端，或用一个持有 bearer token 的 CLI/HTTP 客户端直接访问。已上线于 `mcp.lolly.tools`（完整端点：通过托管的无头浏览器提供栅格图/PDF/动画/视频）以及 `lolly.tools/api/mcp`（无服务器、无浏览器的精简层）。这与下面的 Penpot *编写*类 MCP 不同，后者涉及的是工具的**创建**（规范见 `plans/mcp-server.md`；指南见 `docs/mcp.md` + `docs/ai-agents.md`） |
| **Penpot 文件导入为工具** | 2027 年及以后 | 导入一个 Penpot 文件，并将其*作为一个 Lolly 工具*呈现（声明式、约束优先），把在 Penpot 中创作的设计转变为确定性的生成器 |
| **MCP + Penpot 扩展（仅限在线创作）** | 2027 年及以后 | 一个 Penpot MCP 服务器借助 AI 编写新工具——这是创建确定性模板最可视化的方式：先由品牌信息驱动生成初稿，再由人工参与打磨，逐步实现对新场景的一次成型。工具的*创建*仅限在线；但它产出的工具可以在任何地方运行 |
| **RBAC + SUSE ID** | 2027 年及以后 | 将特定工具置于 SUSE ID 门槛之后；多设备已保存状态同步；Google Drive 导入/导出 |

---

## 引擎的边界与 host 的起点

如果一件事能用纯数据 + Handlebars 描述出来 → 归**引擎**。
如果它涉及 DOM、文件系统、网络，或任何浏览器/操作系统 API → 归**host**。

这条界线是刻意画得很清楚的。引擎是开源的部分。任何了解 SUSE、特定平台或运行时环境的内容，都必须留在它之外。
