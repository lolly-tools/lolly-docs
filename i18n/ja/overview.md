# 概要

このドキュメントは、Lolly プラットフォームの目的、構造、そしてアーキテクチャ上の決定事項をまとめたものです。プロダクトビジョンと、コードベースの現状の両方を反映しています。

> **ステータス:** Lolly は、**まだ完了していないクローズドパイロット**における社内プロトタイプです。エンジンは決定論的で内部的に一貫していますが、プロダクトはまだ初期段階にあり——SUSE が最初の顧客です——その暗号処理とファイル解析エンジンは現在、エンタープライズ規模に備えて SUSE の厳格なインフラストラクチャ強化を受けている最中です(私たちはこの分野を非常に得意としています)。以下のアーキテクチャは、完成し認定されたプロダクトとしてではなく、検証中の設計意図として読んでください。パイロットがどのように運用・測定されているかについては [導入とガバナンス](/info/adoption-governance.html#status) を参照してください。

---

## 存在する理由

チームは繰り返し同じ問題に直面します。反復的なクリエイティブ・コンテンツ制作は、毎回熟練者の手を煩わせるほどではないくらい予測可能でありながら、ガードレールなしに任せるにはあまりに品質に敏感です。その結果は、スループットの低下(専門家のボトルネック)、一貫性の欠如(手元にあるツールを各自が使う)、あるいはベンダーロックイン(テンプレートを支配する SaaS 型 DAM)のいずれかに行き着きます。

このプラットフォームは、その構造的な答えです:

> **プログラムによる大規模なクリエイティブ・コンテンツ制作**——ルールを一元管理しながら、従業員・ベンダー・パートナー向けに労力ゼロでアセットを生成する。

その結果もたらされるのは**豊かさ**です。あらゆるイベントに正しいサイネージが用意され、あらゆる CVE アラートがハウススタイルに一致し、あらゆるラベルがきれいに印刷され、あらゆるメール署名が最新の状態を保ちます——しかもデザインチケットを起票することなく。このプラットフォームが扱うのは、反復的で運用化されたクリエイティブ制作です。意図的にオーダーメイドのクリエイティブツールではありません——旗艦となる作品は、引き続きデザイナーが担います。

### ランドスケープの中での位置づけ

| 機能 | Canva | Brand portals | Illustrator | Figma / Penpot | **Lolly** |
|---|---|---|---|---|---|
| 大量コンテンツ生成 | 一部対応 | ✗ | ✗ | ✗ | **✓** |
| 完全オフライン動作 | ✗ | ✗ | ✓ | 一部対応 | **✓** |
| テンプレートロジックと厳格な制約 | ✗ | 一部対応 | ✗ | 一部対応 | **✓** |
| デザインスキル不要 | 一部対応 | ✓ | ✗ | ✗ | **✓** |
| 自動 Content Credentials | ✗ | ✗ | 一部対応 | ✗ | **✓** |
| ツールが他のツールを組み合わせる | ✗ | ✗ | ✗ | ✗ | **✓** |
| オープンなエンジン、SaaS にロックインされない | ✗ | ✗ | ✗ | 一部対応 | **✓** |
| C2PA content credentials | ✗ | ✗ | ✗ | ✗ | **✓** |
| オプトイン型のフォレンジックレベルの来歴情報 | ✗ | ✗ | ✗ | ✗ | **✓** |
| モバイルおよびデスクトップアプリ | ✓ | ✗ | ✗ | 一部対応 | **✓** |
| コマンドラインと TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

ギャップは明白です。既存のランドスケープの中には、制約ファースト・オフライン対応・低スキル・社内で誰でもアクセスできる出力を提供するものが一つもありません。Lolly にはオープンキャンバス——**Layout Studio**——も含まれており、そこでも色・タイポグラフィ・アセットはブランドのグローバル設定に準拠するため、自由な配置であっても制約ファーストであり続けます。このツールが**そうではない**のは、制約のないデザインスイートだということです。旗艦となるオーダーメイド作品には、デザイナーが引き続き Illustrator や Figma を使用します。バリエーションの組み合わせは、このツールで組み立てられます。

**こんな用途に:** 運用化されたクリエイティブアセットの迅速な生成——イベントタイル、ネームバッジ、署名、CVE アラート、QR コード、ソーシャルカード、出荷ラベル、構造化されたレポートなど。

**こんな用途には向きません:** オーダーメイドのヒーローコンテンツ。

---

## 全体像

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

### リポジトリレイアウト

```
lolly/
├── engine/           # プラットフォームに依存しないコア。オープンソース(MPL-2.0)。
│   └── src/
│       ├── index.ts          # 公開サーフェス — loader、runtime、template、inputs、url-mode
│       ├── loader.ts         # ツールファイルを取得・検証する
│       ├── runtime.ts        # 5 ステップのライフサイクルを統括する
│       ├── template.ts       # Handlebars によるハイドレーション + annotateTemplate
│       ├── inputs.ts         # マニフェスト → ランタイムの入力モデル
│       ├── url-mode.ts       # URL ↔ 入力状態の往復変換
│       ├── validate.ts       # マニフェストの JSON Schema 検証
│       ├── compose.ts        # 入れ子のツールレンダリング(composes)を解決する
│       ├── embed.ts          # ポータブルな lolly.tools 埋め込み URL を解析する
│       └── bridge/
│           └── host-v1.ts    # TypeScript インターフェース — ブリッジ契約
│
├── shells/
│   ├── web/          # PWA — オンラインでホスト、主要な配信手段
│   │   └── src/
│   │       ├── main.ts           # 起動、ルーティング
│   │       ├── theme.ts          # テーマの適用/永続化(FOUC 防止)
│   │       ├── bridge/           # HostV1 API の web 実装
│   │       │   ├── index.ts      # ブリッジの各部品をまとめる
│   │       │   ├── db.ts         # IndexedDB のセットアップ
│   │       │   ├── state.ts      # host.state — 保存された編集内容
│   │       │   ├── profile.ts    # host.profile — ユーザー情報
│   │       │   ├── assets.ts     # host.assets — カタログ + ユーザーのアップロード
│   │       │   ├── clipboard.ts  # host.clipboard
│   │       │   ├── export.ts     # host.export — ラスタライズ/シリアライズ
│   │       │   ├── net.ts        # host.net — 許可リスト化された fetch
│   │       │   └── media.ts      # host.media — ライブカメラフレーム(onFrame)
│   │       ├── catalog/
│   │       │   └── sync.ts       # 起動時のカタログ同期 + オフラインキャッシュ
│   │       ├── styles/           # アプリ全体の CSS(app.css、picker.css、tokens.css)
│   │       └── views/
│   │           ├── gallery.ts    # ツールライブラリの一覧 + 保存状態カード
│   │           ├── tool.ts       # 1つのツールをマウントする(入力 + キャンバス + アクション)
│   │           ├── picker.ts     # アセットピッカー UI(host.assets から呼び出される)
│   │           ├── profile.ts    # ユーザー情報エディタ
│   │           ├── projects.ts   # /p — 保存済みセッションのフォルダー(入れ子構造。フォルダー/選択範囲の書き出し)
│   │           └── free-canvas.ts # render.layout:"editor" ツール向けのフリーキャンバスエディタオーバーレイ
│   │
│   ├── cli/          # Node.js CLI — 同じエンジン、ヘッドレスな jsdom
│   │   ├── bin/lolly.ts
│   │   └── src/
│   │       ├── run.ts    # loadTool → createRuntime → export → ファイル書き出し
│   │       └── bridge.ts # CLI 版の HostV1 実装
│   │
│   ├── tui/          # 対話型ターミナルシェル(Ink)— CLI のブリッジを再利用
│   │   └── src/
│   │       ├── main.tsx  # フルスクリーンアプリ:Gallery / Projects / Profile / ToolView
│   │       └── bridge.ts # CLI ブリッジ + ~/.lolly 以下のディスク上状態
│   │
│   ├── tauri-desktop/ # ダウンロード可能なデスクトップアプリ
│   └── tauri-mobile/  # iOS/Android アプリ
│
├── tools/            # プロファイル VIEW(gitignore 対象)— データであり、コードではない。以下のパックから統合される:
│                     #   community/(公開、ブランド非依存、MPL)+ brands/<active>/tools(ブランド所有)。
│   ├── qr-code/
│   ├── quotes/
│   ├── email-signature/
│   ├── daily-card/        # "Day Brief" — 天気/時刻/地図(インラインのテンプレートスクリプトが取得)
│   ├── code-canvas/
│   ├── countdown-timer/
│   ├── color-palette/
│   ├── color-block/           # 型付き/異種混在のブロック(addMenu ディスクリミネーター)
│   ├── dynamic-layout/
│   ├── tool-logo/         # "Logo" — 自動切り替えのブランドロゴ
│   ├── street-map/        # オフラインのベクター市街区画地図
│   ├── url-shot/          # "URL Screenshot"(capture ケイパビリティ)
│   ├── strip-data/        # オンデバイスのメタデータ除去 — JPEG/PNG/SVG/PDF(ファイル入力 → クリーンなファイル出力)
│   ├── compress-pdf/      # オンデバイスの PDF 圧縮 — 画像を再圧縮する(ファイル入力 → 小さいファイル出力)
│   ├── brand-lockup/      # "Brand Lockup" — SUSE ロゴロックアップ;HarfBuzz によるテキストのパス化(wasm)
│   ├── bag-video/
│   ├── chart-creator/     # 構造化データから SVG チャートを生成
│   ├── filter-duotone/    # 2 色の写真加工
│   ├── filter-halftone/   # 写真 → ベクターのハーフトーン・ドットグリッド
│   ├── filter-scanline/   # 写真 → レトロなポスタライズ・スキャンラインのグリッド(SVG / 透明ラスター)
│   ├── meeting-planner/   # グローバルなタイムゾーン会議スケジューラー
│   ├── calendar-ics/      # イベント → .ics カレンダーファイル + カード
│   ├── digi-ad/           # "Animated Ad" — シーンから作るループバナー
│   ├── event-name-badge/  # カンファレンスバッジ — qr-code を SVG として組み合わせる
│   ├── wayfinding-signage/ # イベントサイネージ;方向ブロックがラベルテキストを自動調整
│   ├── text-helper/       # オンデバイスのテキスト作業台(整形/デコード/ハッシュ/匿名化)
│   ├── layout-studio/     # "Layout Studio" — 自由形式の WYSIWYG エディタキャンバス(render.layout: editor)
│   ├── multi-page-pdf/    # 複数ページの PDF ドキュメント — 表紙、流し込み式のコンテンツブロック、裏表紙
│   ├── diagram-builder/   # 組織図 / レイヤーケーキ / プロセス / サイクル / ピラミッド図
│   ├── logo-wall/         # 多数のロゴ → 自動配置のグリッド
│   ├── logo-lockup-partner/ # SUSE + パートナーの共同ブランドロックアップ
│   ├── web-icon/          # テキストと色から作る favicon の .ico / png / svg
│   ├── filter-posterize/  # 写真 → フラットにポスタライズされたベクター分版
│   ├── filter-pixel-stretch/ # 写真 → ピクセルの引き伸ばしエフェクト
│   ├── lottie-digi-ad/    # アニメーション Lottie 広告バナー
│   └── pose-geeko/        # SUSE の Geeko マスコットにポーズを付ける — 印刷用の静止画
│
├── catalog/
│   ├── tools/index.json        # ツールレジストリ
│   └── assets/
│       ├── index.json          # アセットレジストリ
│       └── suse/...            # ロゴ、パレットなど
│
├── schemas/          # tool.json、アセットエントリ、AssetRef の JSON Schema
├── scripts/          # build-catalog-index.ts、checksum-assets.ts、validate-catalog.ts
├── tests/            # エンジンのテスト
└── docs/             # このファイル + 執筆ガイド + ポジショニング
```

---

## プラットフォームの配信モデル

このプラットフォームは、web PWA、Tauri デスクトップ/モバイル、スクリプト可能な CLI、対話型の TUI という複数のサーフェス上で動作します。そのすべてが同じエンジンと同じツールファイルを使用します。

### Web (PWA) — 主要な配信手段
SUSE が管理する URL でホストされます。service worker がツールとアセットをキャッシュした後は、オフラインでも動作します。ほとんどの従業員、ベンダー、パートナーがこのプラットフォームを利用するのは、この形態です。アカウントは不要です——状態はデバイスごとに IndexedDB に保存されます。

web シェルは単一のレイアウトからレスポンシブに対応します。デスクトップでは、ツールはリサイズ可能なコントロールサイドバーと、トラックパッドネイティブなキャンバスナビゲーション(Cmd/Ctrl + ホイール、またはピンチでカーソル位置を中心にズーム、Space キーまたは中ボタンドラッグでパン、`0`/`1`/`+`/`−` キー、Fit/% の HUD)を備えたプレビューステージが並ぶ構成になります。モバイル(640px 以下)では、コントロールは上部に固定されたシートとなり、ドラッググリップで peek/half/full を切り替えられ(タップでもトグル可能)、静的なフルスクリーンプレビューの上に重なります。フローティングの **Render** ボタンを押すと、ボトムシートのポップアップで **Export** コントロールが開きます。タッチ操作ではプレビュー上でピンチズームとドラッグパンが行えます。レンダリング経路と書き出しコントロールは両者で全く同一です——変わるのは chrome(外枠)のレイアウトだけです。

**バッチモード(`/pro`)。** web シェルには、1つまたは複数のツールにまたがって多数の行を一度にレンダリングする、スプレッドシート形式のバッチグリッド(`shells/web/src/pro/`)も搭載されています。CSV/TSV の往復変換に加えてスプレッドシートからの貼り付け、行ごとのテンプレート/フォーマット/サイズ/単位/DPI、ライブプレビュー付きのブロックエディタサイドパネル、折りたたみ可能な書き出し列、行ごとの「関連性」タグバー、左側のドラッグハンドルによる行の並べ替え、2段階の削除確認、保存済みバッチセッション、`.zip` ダウンロードに対応しています。これが「大量コンテンツ生成」というポジショニングを支える、1対多のサーフェスです。

### Tauri デスクトップ / モバイル
パッケージ化されたネイティブアプリ(Tauri により小さなフットプリント)。完全なオフライン可用性、CLI 依存ツール(PDF Smasher、Font Outliner)向けのファイルシステムアクセス、カメラアクセスを提供します。2026年半ばのツール強化が予定されています。

### CLI
`lolly <tool-id> [--input=value ...] --output=file.png`

デスクトップユーザーは、ターミナルから多くのツールを呼び出せます。CLI シェルは同じエンジンを読み込み、jsdom の DOM を生成し、同じレンダリング経路を実行して、ファイルを書き出します。トランスポートとして URL モードを使用しており——CLI は別実装ではありません。これにより、CLI と GUI の出力が同一であることが保証されます。

```bash
lolly qr-code --url=https://suse.com --output=qr.svg
lolly quotes --quote="Ship it." --output=quote.png
lolly                        # 利用可能なツールを一覧表示する
lolly qr-code                # そのツールの入力を一覧表示する
```

### TUI
`npm run tui`

CLI に対応する対話型版です。ツールの閲覧、入力の記入、プロジェクトの保存、書き出しを、GUI なしに、フルスクリーンでキーボード主体のターミナルアプリ(Ink 製)として行えます。そのホストブリッジは、DOM を必要としないフォーマット(SVG/EMF/EPS/HTML + テキスト/データ)については **CLI の実装を再利用**し、それに加えて `~/.lolly` 以下のディスク上状態と、オプトインのインラインプレビューを備えます。それを超える範囲には**ブラウザレンダリング層**があります。スコープを限定したヘッドレス Chromium(MCP サーバーがインストールするものと同一)が、ラスター/PDF/動画とライブ URL のキャプチャをオンデマンドで生成します——ビルド済みの web シェルのコピーを駆動するため出力は同一であり、そうしたフォーマットを最初に書き出すときにだけ起動します。そのため `url-shot`(クロップ + 色変更 + ベクター PDF/SVG 対応)や、あらゆるラスター/pdf ツールもターミナル内で実行できます。詳しくは [TUI ガイド](/info/tui.html) を参照してください。

---

## ツールのカテゴリ

ツールはギャラリーでのグルーピングのために、マニフェスト内で `category` によってタグ付けされます。

各行はギャラリーのセクション順に並んでいます。`utility` セクションは常にギャラリーの**最後**に表示されます(将来追加されるものを含む、他のすべてのカテゴリの後)——これはオンデバイスの「Offline Utilities」ドロワーです。

| カテゴリ | 提供済みツール | 計画中 |
|---|---|---|
| `everyone` | QR Code Generator、Quote Card、Email Signature、Day Brief、Code Canvas、Color Block、Dynamic Layout、Logo、Web Icon Maker | Employee Image Stationery |
| `designer` | Brand Lockup、Bag Video、Chart Creator、Street Map、Animated Ad、Multi-Page PDF、Diagram Builder、Logo Lockup: Grid (NASCAR)、Logo Lockup: Partner、Filter: Duotone、Filter: Halftone、Filter: Scanline、Filter: Posterize Bitmap、Filter: Pixel Stretch | Font Outliner |
| `event` | Meeting Planner、Event Name Badge、Wayfinding Signage、Calendar ICS | Event Stationery、Bulk Name Badges、Room Agenda Cards |
| `product` | — | CVE Alert、Product Release Announcement、Blog OG Image |
| `utility` | Countdown Timer、Color Palette、URL Screenshot、Strip Hidden Data、Text Helper、Compress PDF、Layout Studio | 単位/フォーマット変換ツール、その他のオンデバイス・プライバシーユーティリティ |

ツールは `status` によっても分類されます:`official`(ブランド承認済み、透かしなし)、`community`(外部からの貢献)、`experimental`(書き出しに透かしが入る)。Dynamic Layout、URL Screenshot、Logo Lockup: Grid (NASCAR)、Filter: Posterize Bitmap、Diagram Builder は現在 `experimental` ステータスであり、Web Icon Maker と Layout Studio は `community` ツールとして提供されています。

**Layout Studio** は、`render.layout: "editor"` のフリーキャンバスモード上に構築された最初のツールです——テキスト・図形・画像のボックスをドラッグ、リサイズ、回転、スナップできる、chrome のない直接操作型のサーフェスであり、他のあらゆるツールと同じレンダリング経路を通じて書き出されます。

**Strip Hidden Data** は最初の**オンデバイスユーティリティ**(`privacy: "on-device"`)です。*あなた自身*が指定したファイルを受け取り、ブラウザ内だけで完全に処理して、きれいなコピーを返すコンテンツ変換ツールです——アップロードされることも、透かしが入ることも、来歴が刻まれることもありません。**Text Helper** は2番目のオンデバイスユーティリティで、日常的な「ウェブサイトに貼り付けるだけ」の作業(JSON 整形、JWT デコード、Base64、URL エンコード/デコード、SHA ハッシュ化)のための作業台です。**Compress PDF** は3番目で、画像を再圧縮することで PDF を軽量化します——これも完全にオンデバイスで行われます。この3つはいずれも「お使いのデバイス上で実行——アップロードは一切ありません」というバッジ文言を掲げています。これは、機密ファイルを単機能のウェブサイトに渡す代わりとなる、プライバシーユーティリティというカテゴリの始まりです。

> 注:`category` と `status` は、各 `tool.json` から `catalog/tools/index.json`(ギャラリーが読み込むレジストリ)へと非正規化されます。信頼できる唯一の情報源はマニフェストであり、インデックスは `npm run build:catalog` によって**生成**されます。コミットされたインデックスがマニフェストからずれている場合、`npm run validate:catalog` は CI を失敗させます。

---

## アーキテクチャ上の確定事項

これらの決定事項は確定済みです。いずれを変更するにも大がかりな作業が必要になります——これらはコードベース内の他のあらゆる決定を形作っています。

### 1. 宣言的なツールと、命令型のエスケープハッチ

ツールとは、マニフェスト(`tool.json`)+ テンプレート(`template.html`)+ 任意の `hooks.js` から成るものです。

**入力を宣言するのはマニフェストです。** テンプレートではありません。入力は Handlebars のトークンから推論されることはありません。マニフェストが契約であり、テンプレートは `{{id}}` によって名前付きの変数を利用します。

**フックは任意です。** ほとんどのツールは純粋に宣言的であり、マニフェスト + テンプレートだけで十分です。計算された値を必要とするツール(QR エンコーディング、チャートデータの整形など)は、名前付きのライフサイクル関数(`onInit`、`onInput`、`onFrame`——モーションリアクティブなツール向けのフレームごとのライブカメラフック——`beforeRender`、`beforeExport`、`afterExport`、そして Strip Hidden Data のようなオンデバイスユーティリティが使う、ファイル入力/ファイル出力の変換経路である `exportFile`)を公開する `hooks.js` を提供します。ホストは `new Function('host', …)` を通じてフックを読み込み、ケイパビリティブリッジをクロージャスコープとして注入します。これは**ポータビリティの契約であって、セキュリティサンドボックスではありません**。フックはページのレルム内で実行され続けるため、ブラウザシェルでは `window`/`fetch`/`document` に*到達できてしまいます*——`host.*` はサポートされたポータブルなサーフェスであって、強制される境界ではありません。非同期のフックの結果には時間制限が設けられており(onInit は 5 秒、onInput は 2 秒、それ以外は 5 秒)、遅延した結果は破棄されます。暴走した*同期*フックは中断できません。したがって、信頼できないサードパーティ製のフックコードは、Worker による分離が実現するまで安全に実行できません。

これが重要な理由は次の通りです。宣言的なツールは非エンジニアでも作成できます。もしすべてのツールが web アプリだったなら、「実用テンプレートを作成・保守できるスキルが限られている」というリスクが、恒久的なボトルネックになってしまいます。

### 2. ツールとアセットはデータであり、同梱されたコードではない

web と Tauri のアプリは、起動時に既知の URL からツールとアセットのカタログを取得し、ローカルにキャッシュして、そこにあるものに対して動作します。**新しいイベントタイルや季節性のアセットを追加するのに、アプリのリリースは必要ありません。**

アセットのバイト列は SHA-256 でチェックサムされ、CDN ポイズニングを防ぎます。アセットの `id` + `version` がキャッシュの無効化を駆動します。

### 3. ケイパビリティブリッジこそが、ツールから見える唯一の API

ツールは、自身のテンプレート領域の外側で DOM に触れることはなく、`fetch` を直接呼び出すこともなく、ファイルシステムを読み取ることもありません。ツールが呼び出すのは、バージョン管理された `host.*` メソッドです。このブリッジは `engine/src/bridge/host-v1.ts` で定義されています。

| ブリッジ API | できること |
|---|---|
| `host.profile` | ユーザーのファーストネーム、メール、顔写真、都市など。`bindToProfile` を通じて入力を事前入力する。 |
| `host.assets` | カタログのクエリ、アセットの解決、ホストが提供するピッカー UI。 |
| `host.state` | 入力スロットの保存/読み込み。web では IndexedDB、Tauri ではファイルシステム、CLI ではメモリを使用。 |
| `host.clipboard` | テキストまたは画像をクリップボードに書き込む(プラットフォームごとのフォールバック付き)。 |
| `host.export` | レンダリング対象をラスタライズまたはシリアライズする。experimental ツールには透かしを適用する。 |
| `host.net` | 許可リスト化された fetch——ツールが `"network"` ケイパビリティを宣言している場合にのみ利用可能。(現時点でこれを使用している提供済みツールはない。) |

任意で追加的なサーフェスは、シェルがそれを提供する場合にのみ現れます。そのうち2つは**ケイパビリティによってゲートされ**、ツールが対応するフラグを宣言した場合にのみ公開されます:`host.compose`(他のツールのレンダリングを埋め込む——`compose`)と `host.capture`(URL Screenshot 向けのページキャプチャ——`capture`)です。残りは**機能検出**方式で、シェルが提供できる場合には常に存在します:`host.text`(HarfBuzz WASM によるテキストのパス化。それに依存するツールには `wasm` ケイパビリティのフラグが立つ)、`host.pdf`(PDF の解析/圧縮。Strip Hidden Data と Compress PDF が使用)、`host.tokens`(DTCG デザイントークン)です。宣言可能なケイパビリティは次の通りです:`network`、`filesystem`、`clipboard`、`camera`、`ffmpeg`、`wasm`、`capture`、`compose`。

同じツールがブラウザ、Tauri、ヘッドレスな CLI で動作するのは、それぞれのシェルがこのインターフェースを実装しているからです——ツール自身は、自分がどこで動いているかを知ることはありません。

このブリッジはバージョン管理されています。メソッドの追加はマイナーバージョンです。削除やシグネチャの変更はメジャーバージョンの引き上げになります。v2 がリリースされても、v1 は動作し続けなければなりません。

### 4. アセット ID は永久に不変

`suse/logo/primary` は契約です。一度公開されたら:
- ID は決して変更されず、再利用されることもありません。
- バイト列に変更があれば → マニフェストの `version` を上げます。
- 新しいアセットに置き換えられた場合 → `deprecated: true` を設定し、必要に応じて `replacedBy` を設定します。
- 既存の参照は常に解決できます。

これにより、保存されたツールの状態や URL で共有されたリンクは、何年経っても有効であり続けます。

### 5. URL モードは第一級の機能

あらゆる入力は URL パラメータとして表現可能でなければなりません:

```
lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H
```

CLI モードは、別のトランスポート上で動く URL モードです——CLI シェルは argv から URL 状態オブジェクトを組み立て、**同じ**エンジンパイプラインを実行します。レンダリング経路は1つだけです。CLI は別実装ではないため、GUI からずれることがありません。

`url-mode.ts` が往復変換(パースとシリアライズ)を担います。予約パラメータ(ツールへの入力としては決して渡されません):`format`、`export`、`copy`、`slot`、`output`、`filename`、`_v`、`z`(パックされた状態——「Shortest link」トークン)、`width`/`w`、`height`/`h`、`unit`、`dpi`、`profile`、`password`、`bleed`、`marks`、`full`、`options`、`nostage`。URL モードにおけるアセット入力はその `id` によってシリアライズされ、ランタイムはハイドレーション前に `host.assets.get()` を通じてそれを解決します。`width`/`height` は `unit`(デフォルトは `px`。他に `mm`/`cm`/`in`/`pt`/`pc`)の値です。物理単位を使う場合、`dpi` がラスター解像度を設定します。これらはキャンバスのドキュメントサイズを決定し、書き出しの寸法パネルを事前入力します。

### 6. ストレージは直接ではなくブリッジを経由する

web シェル:IndexedDB。Tauri:ファイルシステム。CLI:インメモリ。ツールから見えるのは `host.state.save(slot, data)` と `host.state.load(slot)` だけです。`localStorage` は使用されません——容量が小さすぎ、blob を保持できないためです。

ユーザーはツールごとに複数の名前付き編集スロットを保存し、後で各セッションに戻ることができます。アカウント作成は不要で、状態はデバイスごとに保持されます。ブリッジが唯一の接点であるため、このデバイスごとの状態は*持ち運び可能*でもあります。`shells/web/src/data-transfer.ts` は `host.profile`/`host.state`/`host.assets` を通じてすべてを読み出し、他のどのインストール先でもインポートできる単一の `lolly-backup` zip にまとめます——これはサーバーを必要としない、「新しいデバイスへ移行する」というオフラインの答えです(完全な仕様:`docs/data-transfer.md`)。SUSE ID 統合(マルチデバイス同期)は、この上に構築される将来のマイルストーンです。

### 7. 成熟度タグが「ブランド承認済み」リスクに構造的に答える

すべてのツールは、マニフェスト内で `status: official | community | experimental` を宣言します。ギャラリーはステータスによって並び替えられます。experimental のツールは、書き出しに自動的に透かしが入ります——透かしを適用するのはツールではなく `host.export.render` であるため、official ではないツールの作者がこれをオプトアウトすることはできません。

これは、どのツールを使ってもブランド承認を意味すると受け取られてしまうという認識上のリスクに対する、構造的な答えです。プロセス面での対策(レビューキュー、SUSE ID によるゲーティング)は、この上に重ねられます。

### 8. ツールの入力はマニフェストを通じて型付けされる(アセットを含む)

入力は `type` を宣言します:`text`、`longtext`、`number`、`boolean`、`color`、`select`、`asset`、`date`、`time`、`datetime-local`、`url`、`profile`、`blocks`、`vector`、`file` です。ホストはマニフェストから型ごとの汎用コントロールをレンダリングします——ツール側がコントロール用のコードを書くことは一切ありません。中でも次の3つは、他よりも重要な意味を持ちます:

- **`asset`**(`filter` と `allowUpload` を伴う)は、グローバルなアセットシステムへの橋渡しです。`allowUpload: false` は、スポンサータイルのロゴのようにライブラリアセットのみが許可される場面で、ブランドを強制するためのレバーです。ユーザーのアップロードはライブラリアセットと同じ `AssetRef` の形状を使うため、ツールはそれらを同一に扱えます。
- **`blocks`** は繰り返しのフィールドグループです——1つの入力の中にあるミニテーブルで、サイドパネルで編集され、型付き/判別可能な追加メニューとブロックごとのアセットフィールドを持ちます。キャンバス上でレンダリングされたブロックをクリックすると、そのブロックの行にフォーカスします。`meeting-planner`、`chart-creator`、`event-name-badge`、`wayfinding-signage`、`color-block`、`digi-ad` で使用されています。
- **`vector`** は、固定された数値の集合(例えば変形情報)を1つの複合コントロールにまとめます。**`file`** は、`strip-data` や `compress-pdf` のようなオンデバイス変換ユーティリティのために、ユーザー自身のファイルをメモリ上のバイト列として保持します。

### 9. テンプレートはロジックレス(EJS ではなく Handlebars)

Handlebars は、EJS ではなく意図的に選ばれました:
- ロジックレスであること。テンプレートは非エンジニアでも作成できます。
- デフォルトで安全であること。`{{x}}` は HTML エスケープされ、`{{{x}}}` はオプトインの生出力です。
- テンプレート内に任意の JS がないため、テンプレートごとの XSS 監査対象が発生しません。

ロジックは `hooks.js` に置かれ、そこでは明示的でレビュー可能です。利用できる Handlebars ヘルパー:`{{default}}`、`{{upper}}`、`{{lower}}`、`{{eq}}`、`{{markdown}}`、`{{asset ref}}`、`{{asset ref "property"}}`(加えて、`.ics`/`.vcf`/`.csv` の姉妹テンプレートが使うデータフォーマット用ヘルパー `icsStamp`/`rfcText`/`csvCell`)。

### 10. ツールはツールを組み合わせる

ツールは、ツール同士のインポートを一切行うことなく、**別の**ツールのレンダリングを埋め込むことができます——コンポジションはエンジンによって解決され、ツールのコードが行うことは決してありません。サーフェスは2つあります:

- **宣言的なマニフェスト** — `composes: [{ id, tool, inputs, format?, width?, height? }]`。エンジンは指定された子を描画し、その結果をロジックレスなテンプレート内に `{{asset <id>}}` として配置します。`event-name-badge` は現在、`qr-code` を SVG として組み合わせています。
- **ポータブルな埋め込み URL** — `<img src="https://lolly.tools/tool/<id>.<ext>?<inputs>">`。シェルはその子を**ローカルで**レンダリングします(ローカルのレンダリングが解決するまではプレースホルダーのピクセルが表示されます)。`lolly.tools` から何かが取得されることは決してありません。

どのツールのレンダリングも組み合わせられます。**SVG** の子は、親が SVG や PDF に書き出す際には真のベクターのままであり、PNG では鮮明にラスタライズされます。**PNG/JPG/WEBP** の子は画像として埋め込まれます。`compose` ケイパビリティが必要です。組み合わされた子は中間生成物であり——透かしも来歴の刻印も決して行われません——コンポジションは破綻せず縮退します。子をレンダリングできないシェルは、そのスロットを単に省略するだけで、親は引き続きレンダリングされます。

---

## 私たちが明示的に選ばなかったこと

- **EJS は使わない / テンプレート内に任意の JS を書かせない。** XSS のサーフェスはゼロです。ロジックは `hooks.js` に置かれます。
- **アセット CMS は用意しない。** アセットカタログは git です。更新は PR レビューを経ます。アップロード UI も、認証も、モデレーションキューもありません。git レビューそのものが、モデレーション*です*。
- **MVP では RBAC を実装しない。** 公開アクセスです。ブランドリスクは、成熟度タグ + 透かし + ユーザーが目にするすべてのアセットが PR レビューを経ているという構造的事実によって管理されます。
- **中央データベースは持たない。** すべてのユーザー状態はデバイスごとに保持されます。SUSE ID 統合はロードマップ上にありますが、ローンチを妨げるものではありません。
- **ツールとエンジンでコードパスを共有しない。** エンジンはオープンソースですが、`tools/` と `assets/` は、それぞれ独自のリポジトリ内で SUSE の独占的なコンテンツであり続けます。この分離は(相互インポートの禁止という形で)強制されており、分割をクリーンに保っています。

---

## ライフサイクル:エンドツーエンドで

あるユーザーが `lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H` を開いたとします:

1. **起動。** web シェルが IndexedDB を開き、ケイパビリティブリッジを構築し、ツールとアセットのカタログを同期します(オフライン時はキャッシュから読み込みます)。
2. **ルーティング。** URL のハッシュ → `tool` ビューへ。`qr-code` と URL パラメータが抽出されます。
3. **読み込み。** `loadTool('qr-code', fetchFile)` が `tool.json` を取得し、JSON Schema に照らして検証し、`template.html`、`styles.css`、`hooks.js` のソースを取得します。
4. **URL 状態のパース。** `parseUrlState` が URL パラメータを初期の入力値に変換します。アセット参照(`?logo=suse/logo/primary`)は、軽量な `{ id, _unresolved: true }` オブジェクトとしてパースされます。
5. **ランタイム。** `createRuntime(tool, host, initialValues)` が(プロフィールデータ、デフォルト値、初期値をマージして)入力モデルを構築し、`host.assets.get()` を通じてアセット参照を解決し、フックを読み込み(`host` はクロージャスコープであり、サンドボックス化はされていません)、`hooks.onInit` を呼び出します。
6. **レンダリング。** シェルはランタイムを購読し、状態が変化するたびに `{ model, hydrated }` を受け取ります。モデルから入力コントロールをレンダリングし、ハイドレーションされたテンプレートの HTML を `#tool-canvas` に書き込みます。
7. **操作。** ユーザーが入力欄に入力する → `runtime.setInput(id, value)` → 制約が適用される → `hooks.onInput` が呼び出される → 再ハイドレーション → 再レンダリング。キャンバスはライブで更新されます。
8. **書き出し。** ユーザーが Download(PNG)をクリックする → `runtime.export(canvasNode, 'png')` → `host.export.render`(dom-to-image-more によるラスタライズ。SVG/PDF は専用の DOM 走査型ベクタライザーを経由します)→ blob → `host.export.download`。ツールが対応できるフォーマットの幅は広く、`svg`、`png`、`jpg`/`jpeg`、`webp`、`avif`、`pdf`、ベクター形式の `emf`、`eps`、印刷/CMYK 形式の `pdf-cmyk`、`cmyk-tiff`、`eps-cmyk`、動画形式の `webm`、`mp4`、`gif`、データ/テキスト形式の `html`、`md`、`txt`、`json`、`csv`、`ics`、`vcf`、`ico`、`zip` があります。(`render.export: false` を設定したツール——例えば Color Palette、Countdown Timer、Strip Hidden Data、Text Helper、Compress PDF——は、ダウンロード/フォーマット/寸法のコントロールを非表示にします。)物理単位はここでフォーマットごとに変換されます(PDF → 実寸のページポイント、ラスター → DPI に応じたピクセル + `pHYs` チャンク)。作成者/来歴のメタデータ(作成者、ツール、ソース——`engine/src/metadata.ts` が構築)は、フォーマットごとに埋め込まれます:PNG は iTXt、JPEG は EXIF、PDF は info dict、SVG は `<metadata>`、GIF はコメントです。experimental なツールには、ツールではなくホストによって透かしが挿入されます。

Tauri でも同じライフサイクルです。CLI でも同じライフサイクルです——jsdom がヘッドレスな DOM を提供し、出力はファイルまたは標準出力に送られます。

---

## オープンソースの状況

`engine/`、`shells/`、`schemas/`、`docs/` の各ディレクトリは、**MPL-2.0** の下でオープンソース化されています——ブランドツーリングのためのベンダーニュートラルな足場となるプラットフォームであり、出荷可能な各ユニットは [github.com/lolly-tools](https://github.com/lolly-tools) 配下のそれぞれ独立したリポジトリに分割されています。`tools/` と `catalog/assets/` は SUSE 固有のコンテンツであり、**SUSE の独占的財産**(全著作権を留保。各リポジトリの `NOTICE.md` を参照)であり続けます。これらは MPL の対象外です。

この分割は強制されています——`engine/` から `tools/` や `assets/` への相互インポートは存在しません——そのため、プラットフォームとコンテンツの境界はクリーンに保たれています。

---

## ロードマップ

| マイルストーン | 目標時期 | 内容 |
|---|---|---|
| **Initial tools** | ✅ 完了 | QR Code、Quote Card、Email Signature、Day Brief、Code Canvas、Countdown Timer、Color Palette、Brand Lockup、Bag Video、Chart Creator、Filter: Duotone、Meeting Planner — web シェルが稼働中 |
| **Enhance current tooling** | 2026年半ば ✅ 完了 | ダウンロード可能なオフラインアプリ(Tauri);従業員・イベント向けツールの追加;より充実した書き出しパイプライン(テキストのパス化の安定性、メタデータ、追加フォーマット — `plans.md` を参照) |
| **Open source the engine** | 2026年後半 ✅ 完了 | エンジン、シェル、スキーマ、ドキュメントを公開 — ブランド付きのツール/アセットは非公開のまま |
| **Device-to-device transfer** | ✅ 完了 | ポータブルな `lolly-backup` バンドルが、任意の2つのインストール先の間でプロフィール、保存済みセッション、アップロードした画像、設定を運びます — オフラインでもオンラインでも、アカウントなしで。前方互換性があり、整合性が検証されるエンベロープです(仕様:`docs/data-transfer.md`) |
| **Establish formal tool roadmap** | 2026年後半 | 顧客向けリファレンスキット、AI によるデザイン取り込み、GET/URL リクエストモード |
| **On-device privacy utilities** | 🚧 進行中 | *あなた自身*のファイルをローカルで処理する(ファイル入力 → クリーンなファイル出力)コンテンツ変換ツールであり、単機能 SaaS へのデータ持ち出し(エクスフィルトレーション)に代わるものです。**完了:** `file` 入力タイプ + `exportFile` 変換経路 + `privacy:"on-device"` の規約(透かし/来歴なし)+ **Strip Hidden Data**(JPEG/PNG/SVG/PDF のメタデータ。PDF は `host.pdf` ブリッジ経由)と **Text Helper**(JSON 整形、JWT デコード、Base64、URL エンコード/デコード、SHA ハッシュ化に加えて Novelty グループを備えた、日常的な「ウェブサイトに貼り付けるだけ」の作業のためのオンデバイス作業台)。**次:** クロップ/リサイズ、画像の変換/圧縮。その後 `host.image` コーデックブリッジ(仕様:`plans/exfiltration-app-content.md`) |
| **Design tokens (DTCG)** | 🚧 色は提供済み | ブランドのプリミティブを、標準的な [W3C Design Tokens (DTCG)](https://www.designtokens.org/TR/drafts/format/) — [Penpot がインポート/エクスポートする](https://help.penpot.app/user-guide/design-systems/design-tokens/)形式 — として扱う。**完了:** カラートークン(`suse/tokens/brand`)、`host.tokens` ブリッジ、参照リンクされた値を持つピッカーのスウォッチ(仕様:`docs/design-tokens.md`)。**次:** 寸法/タイプトークン、Penpot のインポート/エクスポート、転送バンドル内のユーザートークン(`tokens.json`) |
| **MCP agent endpoint (render)** | ✅ 完了 | [MCP](https://modelcontextprotocol.io) サーバーが、カタログとレンダリング経路を呼び出し可能なツール(`lolly_list_tools` / `describe_tool` / `build_url` / `render` / `transform`)として公開するため、どのエージェントも完成した、ルールに沿ったアセットを生成できます — 任意の MCP クライアントにカスタムコネクタ(OAuth 2.1)として追加するか、CLI/HTTP クライアントからベアラートークンで直接呼び出せます。`mcp.lolly.tools`(フルエンドポイント:ホストされたヘッドレスブラウザ経由のラスター/PDF/アニメーション/動画)と `lolly.tools/api/mcp`(サーバーレスでブラウザ不要のティア)で稼働中です。下記の Penpot の*オーサリング*用 MCP とは別物で、そちらはツールの**作成**に関するものです(仕様:`plans/mcp-server.md`;ガイド:`docs/mcp.md` + `docs/ai-agents.md`) |
| **Penpot file ingest as tools** | 2027年以降 | Penpot ファイルをインポートし、それを*Lolly のツールとして*(宣言的で制約ファーストな形で)表面化させ、Penpot 上で制作されたデザインを決定論的なジェネレーターへと変える |
| **MCP + Penpot extension (online-only authoring)** | 2027年以降 | Penpot の MCP サーバーが、AI を使って新しいツールを組み立てます — 決定論的なテンプレートを作る、最もビジュアルな方法です。ブランドを踏まえた最初のラウンドを、人間がループに入って仕上げ、時間の経過とともにワンショットで新しい文脈に対応することを目指します。ツールの*作成*はオンライン限定ですが、生成されたツールはどこでも動作します |
| **RBAC + SUSE ID** | 2027年以降 | 特定のツールを SUSE ID の背後にゲートする;マルチデバイスでの保存状態;Google Drive の取り込み/書き出し |

---

## エンジンが終わり、ホストが始まる境界

純粋なデータ + Handlebars だけで記述できるなら → **エンジン**。
DOM、ファイルシステム、ネットワーク、あるいはブラウザ/OS の API に触れるなら → **ホスト**。

この線引きは、意図的に明確にされています。エンジンはオープンソースの部分です。SUSE や特定のプラットフォーム、実行環境について知っているものはすべて、エンジンの外側に置かれます。
