# نظرة عامة

يوثق هذا المستند الغرض من منصة Lolly وبنيتها وقراراتها المعمارية. وهو يعكس رؤية المنتج والحالة الراهنة لقاعدة الكود معا.

> **الحالة:** Lolly نموذج أولي داخلي في **تجربة مغلقة لم تكتمل بعد**. المحرك حتمي ومتسق داخليا، لكن المنتج لا يزال في مرحلة مبكرة — SUSE هي العميل رقم واحد — وتخضع محركات التشفير وتحليل الملفات فيه حاليا لعملية التقوية الصارمة للبنية التحتية لدى SUSE، استعدادا لنطاق المؤسسات (نحن بارعون حقا في هذا). اقرأ البنية المعمارية أدناه بوصفها نية تصميم قيد الاختبار، لا منتجا مكتملا ومعتمدا. راجع [التبني والحوكمة](/info/adoption-governance.html#status) لمعرفة كيفية إدارة التجربة وقياسها.

---

## لماذا توجد هذه المنصة

تواجه الفرق مشكلة متكررة: أعمال إبداعية وأعمال محتوى قابلة للتكرار، أكثر قابلية للتنبؤ من أن تبرر أيدي ماهرة في كل مرة، لكنها أكثر حساسية للجودة من أن تسلم دون ضوابط. والنتيجة إما بطء في الإنتاجية (اختناق عند المتخصصين)، أو عدم اتساق (كل شخص يستخدم الأداة المتوفرة لديه)، أو ارتهان لمورد (نظام DAM من نوع SaaS يتحكم في قوالبك).

هذه المنصة هي الجواب البنيوي:

> **إنتاج إبداعي ومحتوى برمجي على نطاق واسع** — توليد أصول دون جهد يدوي، مع بقاء القواعد تحت سيطرة مركزية، للموظفين والموردين والشركاء.

النتيجة هي **الوفرة**: كل فعالية لها لافتات صحيحة، وكل تنبيه CVE يطابق أسلوب المؤسسة، وكل ملصق يطبع نظيفا، وكل توقيع بريد إلكتروني محدث — كل ذلك دون تذكرة تصميم. تتولى المنصة الأعمال الإبداعية المتكررة المشغلة. وهي عمدا ليست أداة تصميم مخصصة — يظل المصممون أصحاب الأعمال الرائدة.

### أين تقع في المشهد

| القدرة | Canva | بوابات العلامة التجارية | Illustrator | Figma / Penpot | **Lolly** |
|---|---|---|---|---|---|
| توليد المحتوى على نطاق واسع | جزئي | ✗ | ✗ | ✗ | **✓** |
| يعمل دون اتصال بالكامل | ✗ | ✗ | ✓ | جزئي | **✓** |
| منطق القوالب والقيود الصارمة | ✗ | جزئي | ✗ | جزئي | **✓** |
| لا يتطلب مهارة تصميم | جزئي | ✓ | ✗ | ✗ | **✓** |
| Content Credentials تلقائية | ✗ | ✗ | جزئي | ✗ | **✓** |
| أدوات تركب أدوات أخرى | ✗ | ✗ | ✗ | ✗ | **✓** |
| محرك مفتوح، غير مقيد بـ SaaS | ✗ | ✗ | ✗ | جزئي | **✓** |
| C2PA content credentials | ✗ | ✗ | ✗ | ✗ | **✓** |
| إثبات منشأ اختياري بمستوى جنائي | ✗ | ✗ | ✗ | ✗ | **✓** |
| تطبيقات جوال وسطح مكتب | ✓ | ✗ | ✗ | جزئي | **✓** |
| سطر أوامر و TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

الفجوة واضحة: لا شيء في المشهد الحالي يمنحنا مخرجات تعتمد القيود أولا، وقادرة على العمل دون اتصال، ولا تتطلب مهارة عالية، ومتاحة داخليا. حتى إن Lolly يتضمن لوحة رسم مفتوحة — **Layout Studio** — تلتزم فيها الألوان والخطوط والأصول بالإعدادات العامة للعلامة التجارية، فيبقى الترتيب الحر خاضعا لمبدأ القيود أولا. أما ما **ليس** إياه فهو حزمة تصميم غير مقيدة: يواصل المصممون استخدام Illustrator و Figma للأعمال الرائدة المخصصة. ويمكن تجميع التباديل بهذه الأداة.

**استخدمه من أجل:** التوليد السريع للأصول الإبداعية المشغلة — بطاقات الفعاليات، وشارات الأسماء، والتواقيع، وتنبيهات CVE، ورموز QR، وبطاقات التواصل الاجتماعي، وملصقات الشحنات، والتقارير المنظمة.

**لا تستخدمه من أجل:** المحتوى البطولي المخصص.

---

## الصورة الكبيرة

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

### تخطيط المستودع

```
lolly/
├── engine/           # Platform-agnostic core. Open source (MPL-2.0).
│   └── src/
│       ├── index.ts          # public surface — loader, runtime, template, inputs, url-mode
│       ├── loader.ts         # fetches and validates tool files
│       ├── runtime.ts        # orchestrates the 5-step lifecycle
│       ├── template.ts       # Handlebars hydration + annotateTemplate
│       ├── inputs.ts         # manifest → runtime input model
│       ├── url-mode.ts       # URL ↔ input state round-trip
│       ├── validate.ts       # JSON Schema validation of manifests
│       ├── compose.ts        # resolve nested tool renders (composes)
│       ├── embed.ts          # parse portable lolly.tools embed URLs
│       └── bridge/
│           └── host-v1.ts    # TypeScript interface — the bridge contract
│
├── shells/
│   ├── web/          # PWA — hosted online; primary distribution
│   │   └── src/
│   │       ├── main.ts           # boot, routing
│   │       ├── theme.ts          # theme apply/persist (FOUC prevention)
│   │       ├── bridge/           # web implementations of HostV1 APIs
│   │       │   ├── index.ts      # compose all bridge pieces
│   │       │   ├── db.ts         # IndexedDB setup
│   │       │   ├── state.ts      # host.state — saved edits
│   │       │   ├── profile.ts    # host.profile — user details
│   │       │   ├── assets.ts     # host.assets — catalog + user uploads
│   │       │   ├── clipboard.ts  # host.clipboard
│   │       │   ├── export.ts     # host.export — rasterise/serialize
│   │       │   ├── net.ts        # host.net — allowlisted fetch
│   │       │   └── media.ts      # host.media — live camera frames (onFrame)
│   │       ├── catalog/
│   │       │   └── sync.ts       # boot-time catalog sync + offline cache
│   │       ├── styles/           # app-wide CSS (app.css, picker.css, tokens.css)
│   │       └── views/
│   │           ├── gallery.ts    # tool library listing + saved-state cards
│   │           ├── tool.ts       # mounts one tool (inputs + canvas + actions)
│   │           ├── picker.ts     # asset picker UI (invoked by host.assets)
│   │           ├── profile.ts    # user details editor
│   │           ├── projects.ts   # /p — folders of saved sessions (nested; folder/selection export)
│   │           └── free-canvas.ts # free-canvas editor overlay for render.layout:"editor" tools
│   │
│   ├── cli/          # Node.js CLI — same engine, headless jsdom
│   │   ├── bin/lolly.ts
│   │   └── src/
│   │       ├── run.ts    # loadTool → createRuntime → export → write file
│   │       └── bridge.ts # CLI implementation of HostV1
│   │
│   ├── tui/          # Interactive terminal shell (Ink) — reuses the CLI bridge
│   │   └── src/
│   │       ├── main.tsx  # full-screen app: Gallery / Projects / Profile / ToolView
│   │       └── bridge.ts # CLI bridge + on-disk state under ~/.lolly
│   │
│   ├── tauri-desktop/ # downloadable desktop app
│   └── tauri-mobile/  # iOS/Android app
│
├── tools/            # profile VIEW (gitignored) — data, not code. Merged from packs:
│                     #   community/ (public, brand-agnostic, MPL) + brands/<active>/tools (brand-owned).
│   ├── qr-code/
│   ├── quotes/
│   ├── email-signature/
│   ├── daily-card/        # "Day Brief" — weather/time/map (fetched by an inline template script)
│   ├── code-canvas/
│   ├── countdown-timer/
│   ├── color-palette/
│   ├── color-block/           # typed/heterogeneous blocks (addMenu discriminator)
│   ├── dynamic-layout/
│   ├── tool-logo/         # "Logo" — auto-switching brand logo
│   ├── street-map/        # offline vector city-block maps
│   ├── url-shot/          # "URL Screenshot" (capture capability)
│   ├── strip-data/        # on-device metadata strip — JPEG/PNG/SVG/PDF (file in → clean file out)
│   ├── compress-pdf/      # on-device PDF compressor — recompresses images (file in → smaller file out)
│   ├── brand-lockup/      # "Brand Lockup" — SUSE logo lockups; HarfBuzz text-to-path (wasm)
│   ├── bag-video/
│   ├── chart-creator/     # SVG charts from structured data
│   ├── filter-duotone/    # two-color photo treatment
│   ├── filter-halftone/   # photo → vector halftone dot grid
│   ├── filter-scanline/   # photo → retro posterised scanline grid (SVG / transparent raster)
│   ├── meeting-planner/   # global timezone meeting scheduler
│   ├── calendar-ics/      # event → .ics calendar file plus a card
│   ├── digi-ad/           # "Animated Ad" — looping banner from scenes
│   ├── event-name-badge/  # conference badges — composes qr-code as an SVG
│   ├── wayfinding-signage/ # event signage; directions blocks auto-fit label text
│   ├── text-helper/       # on-device text workbench (format/decode/hash/de-identify)
│   ├── layout-studio/     # "Layout Studio" — freeform WYSIWYG editor canvas (render.layout: editor)
│   ├── multi-page-pdf/    # multi-page PDF document — cover, flowing content blocks, back page
│   ├── diagram-builder/   # org / layercake / process / cycle / pyramid diagrams
│   ├── logo-wall/         # many logos → auto-packed grid
│   ├── logo-lockup-partner/ # SUSE + partner co-brand lockup
│   ├── web-icon/          # favicon .ico / png / svg from text + colours
│   ├── filter-posterize/  # photo → flat posterised vector separations
│   ├── filter-pixel-stretch/ # photo → pixel-smear effect
│   ├── lottie-digi-ad/    # animated Lottie ad banners
│   └── pose-geeko/        # pose the SUSE Geeko mascot — print-ready stills
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

## نموذج تسليم المنصة

تعمل المنصة عبر عدة واجهات — تطبيق الويب PWA، و Tauri لسطح المكتب والجوال، وواجهة CLI القابلة للبرمجة النصية، وواجهة TUI التفاعلية. وكلها تستخدم المحرك نفسه وملفات الأدوات نفسها.

### الويب (PWA) — التوزيع الأساسي
مستضاف على عنوان URL تتحكم فيه SUSE. يعمل دون اتصال متى ما خزن عامل الخدمة الأدوات والأصول مؤقتا. هنا سيستخدم المنصة معظم الموظفين والموردين والشركاء. لا حاجة إلى حساب — تخزن الحالة في IndexedDB لكل جهاز.

غلاف الويب متجاوب انطلاقا من تخطيط واحد. على سطح المكتب تكون الأداة شريطا جانبيا لعناصر التحكم قابلا لتغيير الحجم بجوار منصة معاينة بتنقل أصيل للوحة اللمس داخل لوحة الرسم (Cmd/Ctrl مع عجلة التمرير أو القرص للتكبير حول المؤشر، والسحب بمفتاح المسافة أو بالزر الأوسط للتحريك، والمفاتيح `0`/`1`/`+`/`−`، وواجهة HUD للملاءمة/%). على الجوال (≤640px) تتحول عناصر التحكم إلى لوحة مثبتة في الأعلى بمقبض سحب يثبت عند أوضاع الإطلالة/النصف/الكامل (النقر يبدل بينها) فوق معاينة ثابتة بملء الشاشة، ويفتح زر **التصيير** العائم عناصر تحكم **التصدير** في نافذة منبثقة سفلية. تحصل شاشات اللمس على التكبير بالقرص والتحريك بالسحب على المعاينة. مسار التصيير وعناصر تحكم التصدير متطابقان في الحالتين — إطار الواجهة وحده هو الذي يعاد ترتيبه.

**وضع الدفعات (`/pro`).** يشحن غلاف الويب أيضا شبكة دفعات بنمط جداول البيانات (`shells/web/src/pro/`) تقوم بتصيير صفوف كثيرة دفعة واحدة عبر أداة واحدة أو أكثر. وهي تدعم استيراد/تصدير CSV/TSV مع اللصق من جداول البيانات، وقالبا/تنسيقا/حجما/وحدة/dpi لكل صف، ولوحة جانبية لمحرر الكتل مع معاينة حية، وأعمدة تصدير قابلة للطي، وشريط وسوم "صلة" لكل صف، وإعادة ترتيب الصفوف بمقبض سحب أيسر، وتأكيد حذف على خطوتين، وجلسات دفعات محفوظة، وتنزيل `.zip`. هذه هي واجهة الواحد-إلى-كثير التي تقف خلف تموضع "توليد المحتوى على نطاق واسع".

### Tauri لسطح المكتب / الجوال
تطبيق أصلي مغلف (بصمة صغيرة بفضل Tauri). يوفر إتاحة كاملة دون اتصال، ووصولا إلى نظام الملفات للأدوات المعتمدة على CLI ‏(PDF Smasher و Font Outliner)، ووصولا إلى الكاميرا. مجدول لتحسين الأدوات في منتصف 2026.

### CLI
`lolly <tool-id> [--input=value ...] --output=file.png`

يستطيع مستخدمو سطح المكتب استدعاء كثير من الأدوات من الطرفية. يحمل غلاف CLI المحرك نفسه، وينشئ DOM عبر jsdom، ويشغل مسار التصيير نفسه، ويكتب الملف. وضع URL هو وسيلة النقل — CLI ليست تنفيذا منفصلا. وهذا يضمن تطابق مخرجات CLI و GUI.

```bash
lolly qr-code --url=https://suse.com --output=qr.svg
lolly quotes --quote="Ship it." --output=quote.png
lolly                        # lists available tools
lolly qr-code                # lists inputs for that tool
```

### TUI
`npm run tui`

النظير التفاعلي لواجهة CLI: تطبيق طرفية بملء الشاشة يعتمد لوحة المفاتيح أولا (مبني على Ink) لتصفح الأدوات وملء المدخلات وحفظ المشاريع والتصدير — كل ذلك دون واجهة رسومية. جسر المضيف فيه **يعيد استخدام تنفيذ CLI** للتنسيقات الخالية من DOM ‏(SVG/EMF/EPS/HTML + نص/بيانات)، ويضيف حالة على القرص تحت `~/.lolly` مع معاينة مضمنة اختيارية. وفوق ذلك لديه **طبقة تصيير بالمتصفح**: نسخة Chromium محدودة النطاق تعمل بلا واجهة (النسخة نفسها التي يثبتها خادم MCP) تنتج الصور النقطية/PDF/الفيديو والتقاط عناوين URL الحية عند الطلب — إذ تشغل نسخة مبنية من غلاف الويب فتكون المخرجات متطابقة، ولا تنطلق إلا عند أول تصدير لتنسيق من هذا النوع. وهكذا تعمل `url-shot` (مع القص وإعادة التلوين و PDF/SVG المتجهية) وكل أدوات الصور النقطية/pdf في الطرفية أيضا. راجع [دليل TUI](/info/tui.html).

---

## فئات الأدوات

توسم الأدوات بحقل `category` في بيان كل منها لأغراض التجميع في المعرض.

تسرد الصفوف بترتيب أقسام المعرض. قسم `utility` يعرض دائما **أخيرا** في المعرض (بعد كل فئة أخرى، بما في ذلك الفئات المستقبلية) — إنه درج "Offline Utilities" للأدوات التي تعمل على الجهاز.

| الفئة | الأدوات المتوفرة | المخطط لها |
|---|---|---|
| `everyone` | QR Code Generator، Quote Card، Email Signature، Day Brief، Code Canvas، Color Block، Dynamic Layout، Logo، Web Icon Maker | Employee Image Stationery |
| `designer` | Brand Lockup، Bag Video، Chart Creator، Street Map، Animated Ad، Multi-Page PDF، Diagram Builder، Logo Lockup: Grid (NASCAR)، Logo Lockup: Partner، Filter: Duotone، Filter: Halftone، Filter: Scanline، Filter: Posterize Bitmap، Filter: Pixel Stretch | Font Outliner |
| `event` | Meeting Planner، Event Name Badge، Wayfinding Signage، Calendar ICS | Event Stationery، Bulk Name Badges، Room Agenda Cards |
| `product` | — | CVE Alert، Product Release Announcement، Blog OG Image |
| `utility` | Countdown Timer، Color Palette، URL Screenshot، Strip Hidden Data، Text Helper، Compress PDF، Layout Studio | محولات وحدات/تنسيقات، ومزيد من أدوات الخصوصية على الجهاز |

تصنف الأدوات أيضا حسب الحالة: `official` (معتمدة من العلامة التجارية، دون علامة مائية)، و `community` (مساهمة خارجية)، و `experimental` (تصديرات موسومة بعلامة مائية). تحمل Dynamic Layout و URL Screenshot و Logo Lockup: Grid (NASCAR) و Filter: Posterize Bitmap و Diagram Builder حاليا الحالة `experimental`؛ بينما تشحن Web Icon Maker و Layout Studio كأدوات `community`.

**Layout Studio** هي أول أداة مبنية على وضع لوحة الرسم الحرة `render.layout: "editor"` — سطح مباشر التعامل دون إطار تسحب فيه مربعات النص والأشكال والصور وتغير حجمها وتديرها وتثبتها، ثم تصدر عبر مسار التصيير نفسه ككل أداة أخرى.

**Strip Hidden Data** هي أول **أداة مساعدة على الجهاز** (`privacy: "on-device"`): أداة تحويل محتوى تأخذ ملفا *أنت* من يوفره، وتعالجه بالكامل في المتصفح، وتعيد نسخة نظيفة — لا ترفع أبدا، ولا توسم بعلامة مائية، ولا يختم فيها إثبات منشأ. **Text Helper** هي الثانية — ورشة عمل على الجهاز لمهام "اللصق في موقع ويب" اليومية (تنسيق JSON، وفك ترميز JWT، و Base64، وترميز/فك ترميز URL، وتجزئة SHA). **Compress PDF** هي الثالثة — تقلص ملف PDF بإعادة ضغط صوره، على الجهاز بالكامل أيضا. تحمل الثلاث جميعا نص الشارة "Runs on your device — nothing is uploaded". هذه بداية فئة أدوات خصوصية تحل محل تسليم الملفات السرية إلى مواقع ذات غرض واحد.

> ملاحظة: يجري تسطيح `category` و `status` إلى `catalog/tools/index.json` (السجل الذي يقرؤه المعرض) من كل `tool.json`. البيان هو مصدر الحقيقة — الفهرس **يولد** بواسطة `npm run build:catalog`، ويفشل `npm run validate:catalog` عملية CI إذا انحرف الفهرس المودع عن البيانات.

---

## الالتزامات المعمارية

هذه القرارات محسومة. وتغيير أي منها مهمة كبرى — فهي تشكل كل قرار آخر في قاعدة الكود.

### 1. أدوات تصريحية، مع منفذ هروب أمري

الأداة عبارة عن بيان (`tool.json`) + قالب (`template.html`) + ملف `hooks.js` اختياري.

**البيان هو الذي يصرح بالمدخلات.** لا القالب. لا تستنتج المدخلات من رموز Handlebars. البيان هو العقد؛ والقالب يستهلك متغيرات مسماة عبر `{{id}}`.

**الخطافات اختيارية.** معظم الأدوات تصريحية صرفة — البيان + القالب يكفيان. الأدوات التي تحتاج قيما محسوبة (ترميز QR، وتشكيل بيانات المخططات) توفر ملف `hooks.js` يكشف دوال دورة حياة مسماة (`onInit` و `onInput` و `onFrame` — خطاف كل إطار للكاميرا الحية في الأدوات المتفاعلة مع الحركة — و `beforeRender` و `beforeExport` و `afterExport` و `exportFile` — مسار التحويل ملف-داخل/ملف-خارج الذي تستخدمه الأدوات المساعدة على الجهاز مثل Strip Hidden Data). يحمل المضيف الخطافات عبر `new Function('host', …)` مع حقن جسر القدرات كنطاق إغلاق. هذا **عقد قابلية نقل، لا صندوق أمان معزول**: لا تزال الخطافات تعمل في نطاق الصفحة و*تستطيع* الوصول إلى `window`/`fetch`/`document` في غلاف متصفح — `host.*` هي السطح المدعوم القابل للنقل، لا حدا مفروضا. نتائج الخطافات غير المتزامنة مقيدة زمنيا (onInit 5s، و onInput 2s، والبقية 5s) وتهمل النتائج المتأخرة؛ أما الخطاف *المتزامن* الجامح فلا يمكن مقاطعته. لذلك ليس من الآمن تشغيل كود خطافات من طرف ثالث غير موثوق حتى يشحن عزل Worker.

وهذا مهم للسبب الآتي: الأدوات التصريحية يمكن أن يؤلفها غير المطورين. لو كانت كل أداة تطبيق ويب، لتحولت ملاحظة الخطر "مهارات محدودة لإنشاء/صيانة قوالب العمل اليومية" إلى اختناق دائم.

### 2. الأدوات والأصول بيانات، لا كود مرفق

يجلب تطبيقا الويب و Tauri كتالوجات الأدوات والأصول من عنوان URL معروف عند الإقلاع، ويخزنانها محليا، ويعملان على ما هو موجود. **إضافة بطاقة فعالية جديدة أو أصل موسمي لا تتطلب إصدار نسخة جديدة من التطبيق.**

تحسب مجاميع تحقق SHA-256 لبايتات الأصول لمنع تسميم CDN. ويقود `id` + `version` للأصل إبطال ذاكرة التخزين المؤقت.

### 3. جسر القدرات هو واجهة API الوحيدة التي تراها الأدوات

لا تلمس الأدوات DOM خارج منطقة قالبها أبدا، ولا تستدعي `fetch` مباشرة، ولا تقرأ نظام الملفات. إنها تستدعي طرق `host.*` ذات إصدارات. يعرف الجسر في `engine/src/bridge/host-v1.ts`:

| واجهة الجسر | ما تفعله |
|---|---|
| `host.profile` | الاسم الأول للمستخدم وبريده الإلكتروني وصورته الشخصية ومدينته وغير ذلك. يملأ المدخلات مسبقا عبر `bindToProfile`. |
| `host.assets` | استعلامات الكتالوج، وحل الأصول، وواجهة منتق يوفرها المضيف. |
| `host.state` | حفظ / تحميل خانات المدخلات. IndexedDB على الويب، ونظام الملفات على Tauri، والذاكرة على CLI. |
| `host.clipboard` | كتابة نص أو صورة إلى الحافظة (مع حلول احتياطية لكل منصة). |
| `host.export` | تصيير هدف التصيير نقطيا أو تسلسله. يطبق العلامة المائية على الأدوات التجريبية. |
| `host.net` | جلب مقيد بقائمة سماح — متاح فقط إذا صرحت الأداة بالقدرة `"network"`. (لا تستخدمه حاليا أي أداة مشحونة.) |

لا تظهر الأسطح الاختيارية الإضافية إلا حين يوفرها غلاف. اثنان منها **مقيدان بالقدرات** — يكشفان فقط عندما تصرح الأداة بالعلم المطابق: `host.compose` (تضمين تصيير أداة أخرى — `compose`) و `host.capture` (التقاط الصفحات لأداة URL Screenshot — `capture`). أما البقية **فتكتشف بحسب توفر الميزة** — أي أنها حاضرة متى استطاع الغلاف توفيرها: `host.text` (تحويل النص إلى مسارات عبر HarfBuzz WASM؛ القدرة `wasm` توسم الأدوات المعتمدة عليها)، و `host.pdf` (تحليل/ضغط PDF، تستخدمه Strip Hidden Data و Compress PDF)، و `host.tokens` (رموز تصميم DTCG). القدرات القابلة للتصريح هي: `network` و `filesystem` و `clipboard` و `camera` و `ffmpeg` و `wasm` و `capture` و `compose`.

الأداة نفسها تعمل في المتصفح و Tauri و CLI بلا واجهة لأن كل غلاف ينفذ هذه الواجهة — فالأداة لا تعرف أبدا في أيها تعمل.

الجسر ذو إصدارات. إضافة طرق تغيير إصدار ثانوي. أما إزالة التواقيع أو تغييرها فرفع إصدار رئيسي. وعند شحن v2 يجب أن يستمر v1 في العمل.

### 4. معرفات الأصول أبدية

`suse/logo/primary` عقد. فور نشره:
- المعرف لا يتغير أبدا ولا يعاد استخدامه.
- تغييرات البايتات → ارفع `version` في البيان.
- الاستبدال بأصل جديد → عين `deprecated: true` واختياريا `replacedBy`.
- المراجع القائمة تظل قابلة للحل دائما.

هذا يجعل حالات الأدوات المحفوظة والروابط المشتركة عبر URL صامدة عبر السنين.

### 5. وضع URL مواطن من الدرجة الأولى

يجب أن يكون كل مدخل قابلا للتعبير عنه كمعامل URL:

```
lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H
```

وضع CLI هو وضع URL بوسيلة نقل مختلفة — يبني غلاف CLI كائن حالة URL من argv ويشغل خط أنابيب المحرك **نفسه**. هناك مسار تصيير واحد. لا يمكن أن ينحرف CLI عن GUI لأنه ليس تنفيذا منفصلا.

يتولى `url-mode.ts` رحلة الذهاب والإياب (التحليل والتسلسل). المعاملات المحجوزة (لا تمرر أبدا إلى الأداة كمدخلات): `format` و `export` و `copy` و `slot` و `output` و `filename` و `_v` و `z` (الحالة المضغوطة — رمز "أقصر رابط") و `width`/`w` و `height`/`h` و `unit` و `dpi` و `profile` و `password` و `bleed` و `marks` و `full` و `options` و `nostage`. تسلسل مدخلات الأصول في وضع URL عبر `id` الخاص بها؛ ويحلها وقت التشغيل عبر `host.assets.get()` قبل الإماهة. `width`/`height` قيم بوحدة `unit` (الافتراضي `px`، وكذلك `mm`/`cm`/`in`/`pt`/`pc`)؛ ومع وحدة فيزيائية يحدد `dpi` دقة الصورة النقطية. وهي تضبط حجم مستند لوحة الرسم وتملأ مسبقا لوحة أبعاد التصدير.

### 6. التخزين يمر عبر الجسر، لا مباشرة

غلاف الويب: IndexedDB. أما Tauri: نظام الملفات. و CLI: في الذاكرة. لا ترى الأدوات سوى `host.state.save(slot, data)` و `host.state.load(slot)`. لا يستخدم `localStorage` — فهو أصغر من اللازم ولا يستطيع حمل الكائنات الثنائية.

يستطيع المستخدمون حفظ خانات تحرير مسماة متعددة لكل أداة والعودة إلى كل جلسة لاحقا. لا يلزم إنشاء حساب؛ فالحالة لكل جهاز. ولأن الجسر هو الدرز الوحيد، فإن تلك الحالة المحلية للجهاز *قابلة للنقل* أيضا: يقرأ `shells/web/src/data-transfer.ts` كل شيء مرة أخرى عبر `host.profile`/`host.state`/`host.assets` إلى ملف zip واحد باسم `lolly-backup` يستورد على أي تثبيت آخر — الجواب دون اتصال على سؤال "الانتقال إلى جهاز جديد" الذي لا يحتاج خادما (المواصفة الكاملة: `docs/data-transfer.md`). تكامل SUSE ID (المزامنة متعددة الأجهزة) معلم مستقبلي يبنى فوق هذا.

### 7. وسوم النضج تجيب بنيويا عن خطر "الاعتماد من العلامة التجارية"

تصرح كل أداة بالحقل `status: official | community | experimental` في بيانها. يرتب المعرض حسب الحالة. الأدوات التجريبية توسم تصديراتها بعلامة مائية تلقائيا — تطبق العلامة المائية بواسطة `host.export.render`، لا بواسطة الأداة، فلا يستطيع مؤلف أداة غير رسمية التنصل منها.

هذا جواب بنيوي على خطر التصور بأن استخدام أي أداة يعني اعتماد العلامة التجارية. أما الأجوبة الإجرائية (طابور مراجعة، وتقييد عبر SUSE ID) فتضاف فوقه.

### 8. مدخلات الأدوات منمطة عبر البيان، بما في ذلك الأصول

تصرح المدخلات بالحقل `type`: ‏`text` و `longtext` و `number` و `boolean` و `color` و `select` و `asset` و `date` و `time` و `datetime-local` و `url` و `profile` و `blocks` و `vector` و `file`. يعرض المضيف عنصر تحكم عاما لكل نوع انطلاقا من البيان — لا تكتب الأدوات أي كود لعناصر التحكم. ثلاثة أنواع أثقل وزنا من البقية:

- **`asset`** (مع `filter` و `allowUpload`) هو الجسر إلى نظام الأصول العالمي؛ و `allowUpload: false` هو ذراع فرض العلامة التجارية لأشياء مثل شعارات بطاقات الرعاية حيث لا يسمح إلا بأصول المكتبة. تستخدم مرفوعات المستخدمين شكل `AssetRef` نفسه الذي تستخدمه أصول المكتبة، فتتعامل الأدوات معها بشكل متطابق.
- **`blocks`** مجموعة حقول متكررة — جدول مصغر داخل مدخل واحد، يحرر في لوحة جانبية، مع قائمة إضافة منمطة/مميزة وحقول أصول لكل كتلة. النقر على كتلة معروضة على لوحة الرسم يركز صف تلك الكتلة. تستخدمها `meeting-planner` و `chart-creator` و `event-name-badge` و `wayfinding-signage` و `color-block` و `digi-ad`.
- **`vector`** يجمع مجموعة ثابتة من الأرقام (مثل تحويل هندسي) في عنصر تحكم مركب واحد؛ و **`file`** يحمل ملف المستخدم نفسه كبايتات في الذاكرة لأدوات التحويل المساعدة على الجهاز (مثل `strip-data` و `compress-pdf`).

### 9. القوالب خالية من المنطق (Handlebars، لا EJS)

اختير Handlebars بدلا من EJS عمدا:
- خال من المنطق. يمكن لغير المطورين تأليف القوالب.
- آمن افتراضيا. `{{x}}` يهرب HTML؛ و `{{{x}}}` خام بالاختيار الصريح.
- غياب JS الاعتباطي في القوالب يعني عدم وجود سطح تدقيق XSS لكل قالب.

يقيم المنطق في `hooks.js` حيث يكون صريحا وقابلا للمراجعة. مساعدو Handlebars المتاحون: `{{default}}` و `{{upper}}` و `{{lower}}` و `{{eq}}` و `{{markdown}}` و `{{asset ref}}` و `{{asset ref "property"}}` (إضافة إلى مساعدي تنسيق البيانات `icsStamp`/`rfcText`/`csvCell` المستخدمين في القوالب الشقيقة `.ics`/`.vcf`/`.csv`).

### 10. الأدوات تركب أدوات

تستطيع أداة تضمين تصيير أداة **أخرى** دون أي استيراد من أداة إلى أداة — التركيب يحله المحرك، لا كود الأدوات أبدا. هناك سطحان:

- **بيان تصريحي** — `composes: [{ id, tool, inputs, format?, width?, height? }]`. يقوم المحرك بتصيير الابن المسمى ويضع النتيجة في القالب الخالي من المنطق كـ `{{asset <id>}}`. تركب `event-name-badge` أداة `qr-code` كملف SVG اليوم.
- **عنوان URL تضمين قابل للنقل** — `<img src="https://lolly.tools/tool/<id>.<ext>?<inputs>">`. يقوم الغلاف بتصيير ذلك الابن **محليا** (يظهر بكسل نائب حتى يكتمل التصيير المحلي)؛ ولا يجلب أي شيء أبدا من `lolly.tools`.

ركب تصيير أي أداة: يبقى الابن **SVG** متجها حقيقيا عندما يصدر الأب إلى SVG أو PDF ويرسم نقطيا بوضوح لـ PNG؛ ويضمن الأبناء **PNG/JPG/WEBP** كصور. يتطلب ذلك القدرة `compose`. الأبناء المركبون نواتج وسيطة — لا توسم أبدا بعلامة مائية أو إثبات منشأ — والتركيب يتدهور بسلاسة: الغلاف الذي لا يستطيع تصيير ابن يغفل الخانة فحسب ويظل الأب يصير.

---

## ما اخترنا صراحة ألا نفعله

- **لا EJS / لا JS اعتباطي في القوالب.** سطح XSS صفر. المنطق يقيم في `hooks.js`.
- **لا نظام إدارة محتوى للأصول.** كتالوج الأصول هو git. التحديثات تمر عبر مراجعة طلبات السحب. لا واجهة رفع، ولا مصادقة، ولا طابور إشراف. مراجعة git _هي_ الإشراف.
- **لا RBAC في النسخة الأولية.** وصول عام. يدار خطر العلامة التجارية بوسوم النضج + العلامات المائية + الحقيقة البنيوية أن كل الأصول التي يراها المستخدمون مرت عبر مراجعة طلبات السحب.
- **لا قاعدة بيانات مركزية.** كل حالة المستخدم لكل جهاز. تكامل SUSE ID على خارطة الطريق لكنه ليس عائق إطلاق.
- **لا مسار كود مشترك بين الأدوات والمحرك.** المحرك مفتوح المصدر؛ ويبقى `tools/` و `assets/` محتوى مملوكا لـ SUSE في مستودعاتهما الخاصة. الفصل مفروض (لا استيرادات متقاطعة) لكي يبقى الانقسام نظيفا.

---

## دورة الحياة، من البداية إلى النهاية

يفتح مستخدم `lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H`:

1. **الإقلاع.** يفتح غلاف الويب IndexedDB، ويبني جسر القدرات، ويزامن كتالوجي الأدوات والأصول (أو يحمل من الذاكرة المؤقتة عند عدم الاتصال).
2. **التوجيه.** تجزئة URL ← العرض `tool`، مع استخراج `qr-code` ومعاملات URL.
3. **التحميل.** يجلب `loadTool('qr-code', fetchFile)` ملف `tool.json`، ويتحقق منه مقابل JSON Schema، ويجلب `template.html` و `styles.css` ومصدر `hooks.js`.
4. **تحليل حالة URL.** يترجم `parseUrlState` معاملات URL إلى قيم مدخلات أولية. تحلل مراجع الأصول (`?logo=suse/logo/primary`) ككائنات خفيفة `{ id, _unresolved: true }`.
5. **وقت التشغيل.** يبني `createRuntime(tool, host, initialValues)` نموذج المدخلات (بدمج بيانات الملف الشخصي والقيم الافتراضية والقيم الأولية)، ويحل مراجع الأصول عبر `host.assets.get()`، ويحمل الخطافات (`host` في نطاق إغلاق، غير معزولة)، ويستدعي `hooks.onInit`.
6. **التصيير.** يشترك الغلاف في وقت التشغيل؛ ومع كل تغيير حالة يتلقى `{ model, hydrated }`. فيعرض عناصر تحكم المدخلات من النموذج ويكتب HTML القالب الممتلئ في `#tool-canvas`.
7. **التفاعل.** يكتب المستخدم في مدخل ← `runtime.setInput(id, value)` ← تطبق القيود ← يستدعى `hooks.onInput` ← إعادة إماهة ← إعادة تصيير. تتحدث لوحة الرسم مباشرة.
8. **التصدير.** ينقر المستخدم على تنزيل (PNG) ← `runtime.export(canvasNode, 'png')` ← `host.export.render` (يصير نقطيا عبر dom-to-image-more؛ ويمر SVG/PDF عبر محولات متجهات مخصصة تمشي على DOM) ← blob ← `host.export.download`. نطاق التنسيقات الذي يمكن لأداة اختياره واسع: `svg` و `png` و `jpg`/`jpeg` و `webp` و `avif` و `pdf`، والتنسيقات المتجهية `emf` و `eps`، إضافة إلى تنسيقات الطباعة/CMYK وهي `pdf-cmyk` و `cmyk-tiff` و `eps-cmyk`؛ وتنسيقات الفيديو `webm` و `mp4` و `gif`؛ وتنسيقات البيانات/النص `html` و `md` و `txt` و `json` و `csv` و `ics` و `vcf` و `ico` و `zip`. (الأدوات التي تعين `render.export: false` — مثل Color Palette و Countdown Timer و Strip Hidden Data و Text Helper و Compress PDF — تخفي عناصر تحكم التنزيل/التنسيق/الأبعاد.) تحول الوحدات الفيزيائية لكل تنسيق هنا (PDF ← نقاط صفحة حقيقية، والصور النقطية ← بكسلات عند DPI مع مقطع `pHYs`). تضمن بيانات التأليف/إثبات المنشأ الوصفية (المؤلف، والأداة، والمصدر — يبنيها `engine/src/metadata.ts`) بحسب كل تنسيق: PNG iTXt، و JPEG EXIF، وقاموس معلومات PDF، و `<metadata>` في SVG، وتعليق GIF. الأدوات التجريبية تحصل على علامة مائية يدرجها المضيف، لا الأداة.

دورة الحياة نفسها في Tauri. ودورة الحياة نفسها في CLI — يوفر jsdom نموذج DOM بلا واجهة؛ وتذهب المخرجات إلى ملف أو stdout.

---

## حالة المصدر المفتوح

مجلدات `engine/` و `shells/` و `schemas/` و `docs/` مفتوحة المصدر برخصة **MPL-2.0** — منصة سقالات محايدة تجاه الموردين لأدوات العلامات التجارية، مع تقسيم كل وحدة قابلة للشحن إلى مستودعها الخاص تحت [github.com/lolly-tools](https://github.com/lolly-tools). أما `tools/` و `catalog/assets/` فمحتوى خاص بـ SUSE ويبقى **ملكية حصرية لـ SUSE** (جميع الحقوق محفوظة — راجع `NOTICE.md` في كل مستودع)؛ ولا تغطيهما رخصة MPL.

الفصل مفروض — لا توجد استيرادات متقاطعة من `engine/` إلى `tools/` أو `assets/` — فتبقى الحدود بين المنصة والمحتوى نظيفة.

---

## خارطة الطريق

| المعلم | الموعد المستهدف | ماذا |
|---|---|---|
| **الأدوات الأولية** | ✅ منجز | QR Code، Quote Card، Email Signature، Day Brief، Code Canvas، Countdown Timer، Color Palette، Brand Lockup، Bag Video، Chart Creator، Filter: Duotone، Meeting Planner — غلاف الويب يعمل مباشرة |
| **تحسين الأدوات الحالية** | منتصف 2026 ✅ منجز  | تطبيق قابل للتنزيل يعمل دون اتصال (Tauri)؛ وأدوات إضافية للموظفين والفعاليات؛ وخط أنابيب تصدير أغنى (استقرار تحويل النص إلى مسارات، والبيانات الوصفية، وتنسيقات إضافية — راجع `plans.md`) |
| **فتح مصدر المحرك** | أواخر 2026 ✅ منجز  | يصبح المحرك والأغلفة والمخططات والوثائق عامة — لا الأدوات/الأصول الموسومة بالعلامة التجارية |
| **النقل من جهاز إلى جهاز** | ✅ منجز | حزمة `lolly-backup` قابلة للنقل تحمل الملف الشخصي والجلسات المحفوظة والصور المرفوعة والتفضيلات بين أي تثبيتين — دون اتصال أو معه، دون حساب. مغلف متوافق مع المستقبل ومدقق السلامة (المواصفة: `docs/data-transfer.md`) |
| **إرساء خارطة طريق رسمية للأدوات** | أواخر 2026 | حزم مرجعية للعملاء، واستيعاب التصميم بالذكاء الاصطناعي، ووضع طلبات GET/URL |
| **أدوات الخصوصية على الجهاز** | 🚧 قيد التنفيذ | أدوات تحويل محتوى تعالج ملفك *أنت* محليا (ملف داخل ← ملف نظيف خارج)، وتحل محل التسريب إلى SaaS أحادي الغرض. **منجز:** نوع المدخل `file` + مسار التحويل `exportFile` + اصطلاحات `privacy:"on-device"` (دون علامة مائية/إثبات منشأ) + **Strip Hidden Data** (بيانات JPEG/PNG/SVG/PDF الوصفية، و PDF عبر الجسر `host.pdf`) و **Text Helper** (ورشة العمل على الجهاز لمهام اللصق في موقع ويب اليومية — تنسيق JSON، وفك ترميز JWT، و Base64، وترميز/فك ترميز URL، وتجزئة SHA، إضافة إلى مجموعة Novelty). **التالي:** القص/تغيير الحجم، وتحويل/ضغط الصور؛ ثم جسر ترميز `host.image` (المواصفة: `plans/exfiltration-app-content.md`) |
| **رموز التصميم (DTCG)** | 🚧 الألوان مشحونة | أساسيات العلامة التجارية كرموز [W3C Design Tokens (DTCG)](https://www.designtokens.org/TR/drafts/format/) قياسية — التنسيق الذي [يستورده Penpot ويصدره](https://help.penpot.app/user-guide/design-systems/design-tokens/). **منجز:** رموز الألوان (`suse/tokens/brand`)، والجسر `host.tokens`، وعينات المنتقي + القيم المرتبطة بالمراجع (المواصفة: `docs/design-tokens.md`). **التالي:** رموز الأبعاد/الخطوط، واستيراد/تصدير Penpot، ورموز المستخدم في حزمة النقل (`tokens.json`) |
| **نقطة نهاية وكيل MCP (التصيير)** | ✅ منجز | يكشف خادم [MCP](https://modelcontextprotocol.io) الكتالوج + مسار التصيير كأدوات قابلة للاستدعاء (`lolly_list_tools` / `describe_tool` / `build_url` / `render` / `transform`) لكي يستطيع أي وكيل إنتاج أصول مكتملة ملتزمة بالقواعد — أضفه إلى أي عميل MCP كموصل مخصص (OAuth 2.1) أو وجه عميل CLI/HTTP إليه برمز حامل. يعمل مباشرة على `mcp.lolly.tools` (نقطة النهاية الكاملة: صور نقطية/PDF/رسوم متحركة/فيديو عبر متصفح مستضاف بلا واجهة) و `lolly.tools/api/mcp` (طبقة دون خادم ودون متصفح). يختلف عن MCP *التأليف* الخاص بـ Penpot أدناه، الذي يتعلق **بإنشاء** الأدوات (المواصفة: `plans/mcp-server.md`؛ الدليل: `docs/mcp.md` + `docs/ai-agents.md`) |
| **استيعاب ملفات Penpot كأدوات** | 2027+ | استيراد ملف Penpot وإظهاره *كأداة Lolly* (تصريحية، تعتمد القيود أولا)، بما يحول التصاميم المؤلفة في Penpot إلى مولدات حتمية |
| **MCP + امتداد Penpot (تأليف عبر الإنترنت فقط)** | 2027+ | يصوغ خادم Penpot MCP أدوات جديدة بالذكاء الاصطناعي — الطريقة الأكثر بصرية لإنشاء قوالب حتمية: جولة أولى مستنيرة بالعلامة التجارية، تتقن بوجود إنسان في الحلقة، وتستهدف مع الوقت إصابة سياقات جديدة من المحاولة الأولى. *إنشاء* الأدوات يجري عبر الإنترنت فقط؛ أما الأدوات التي ينتجها فتعمل في أي مكان |
| **RBAC + SUSE ID** | 2027+ | تقييد أدوات محددة خلف SUSE ID؛ وحالة محفوظة متعددة الأجهزة؛ واستيعاب/تصدير Google Drive |

---

## أين ينتهي المحرك ويبدأ المضيف

إذا استطعت وصفه ببيانات صرفة + Handlebars ← **المحرك**.
إذا لمس DOM أو نظام الملفات أو الشبكة أو أي واجهة API للمتصفح/نظام التشغيل ← **المضيف**.

الخط حاد عمدا. المحرك هو الجزء مفتوح المصدر. وكل ما يعرف SUSE أو منصات محددة أو بيئات تشغيل يبقى خارجه.
