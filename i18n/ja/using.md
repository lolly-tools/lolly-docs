# Lolly の使い方

アプリを実際に*使う*ための実践ガイドです — ツールを開く、キャンバスで作業する、書き出す、保存する、共有する、という一連の流れを扱います。ここで説明する内容はすべて**お使いのデバイス上**で動作します。アカウントは不要、アップロードも不要、初回読み込み後はインターネット接続も不要です。

> 初めての方へ。[クイックスタート](/info/quickstart.html) なら数分で作り始められます。アプリのインストール・デプロイについては [Lolly オペレーター向け](/info/operators.html) をご覧ください。このページは、開いた後の操作方法について説明します。

## ツールを開く

![A tool's split view - the control stack on the left, and the live horizontal bar chart it draws on the right](/t/url-shot?url=%2F%23%2Ftool%2Fd3%3Fct%3Dbar%26t%3DExample%2520data%26st%3DSample%2520values%252C%2520not%2520a%2520real%2520dataset%26d%3DMonth%252CSeries%2520A%252CSeries%2520B%252CSeries%2520C%250AJan%252C12%252C9%252C5%250AFeb%252C18%252C14%252C7%250AMar%252C24%252C17%252C11%250AApr%252C29%252C23%252C15%26lg%3D1&width=1440&height=900&dpi=192&waitMs=2500&walker=1&format=svg&dark=1&filename=vt-tool-split-view)

![The tool gallery - every tool as a card, grouped by category](/t/url-shot?url=%2F%23%2F&width=1440&height=900&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&tolerance=0.03&waitSelector=.gallery-view%5Bdata-shots-settled%5D&walker=1&format=svg&localize=1&dark=1&filename=gallery&try=1&sweep=1)


ホーム画面は**ギャラリー**です — すべてのツールがカテゴリー別にまとめられています。カードをクリックするとツールが開きます。以前に作業したことがある場合は、**Continue** ボタンで直近のセッションを再開できます。検索ボックスで名前による絞り込みができます。

各ツールは分割ビューになっており、片側に**コントロール**、もう片側にライブの**プレビュー**（キャンバス）が表示されます。コントロールを変更すると、プレビューは即座に更新されます。

> 一部のツール（**Layout Studio** など）は代わりに**フリーキャンバス**として開きます — クロームのない直接操作サーフェスで、テキスト・図形・画像のボックスをドラッグ、リサイズ、回転、スナップさせたり、ダブルクリックでテキストをその場で編集したりできます。他のすべてのツールと同じレンダーパスで書き出されるため、キャンバス*そのもの*がファイルになります。詳しくは下記の [フリーキャンバス](#the-free-canvas-layout-studio) を参照してください。

## キャンバス（プレビュー）

![The zoom HUD in the corner of the canvas - minus, the live percentage, plus, Fit, then the theme and sound toggles](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&css=.stage-nav%7Bopacity%3A1!important%7D&cropSelector=.stage-nav&walker=1&format=svg&dark=1&filename=use-zoom-hud)

プレビューには、書き出される内容が常に正確に表示されます。

**デスクトップ**

- **ズーム:** Cmd/Ctrl + スクロール、またはトラックパッドでのピンチ操作 — ズームはポインター位置を中心に行われます。
- **パン:** **Space** キーを押しながらドラッグするか、**マウスの中ボタン**でドラッグします（通常のクリックはデザインの要素をクリックするために空いたままです）。
- **キーボード:** `0` = fit to window · `1` = 100% · `+` / `−` = zoom.
- **ズーム HUD:** 隅にある小さな `−  NN%  +  Fit` コントロールです。パーセンテージをクリックすると Fit ↔ 100% を切り替えられます。

**タッチ**

- ズームは**ピンチ**、パンは**ドラッグ**、フィット表示へのリセットは**ダブルタップ**です。

**クリックでコントロールへジャンプ:** デザイン内の任意の要素をクリックすると、対応するサイドバーの入力欄にフォーカスが移り、表示範囲までスクロールされます — 繰り返し行グループの場合は、クリックした行がまさにその場で開くので、見えているものを編集するのはワンタップの距離です。

サイズを変更すると、ビューは常にきれいなフィット表示に戻ります。

### フリーキャンバス（Layout Studio）

![Layout Studio's free canvas - the artboard with its surrounding pasteboard](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio&width=1440&height=900&dpi=192&waitMs=2000&walker=1&format=svg&localize=1&dark=1&filename=layout-studio&sweep=1)

フリーキャンバスのツールは、アートボードの*周囲*に作業スペースを追加します。デザイナーの貼り込み台のようなイメージです。

- **キャンバス外への一時配置。** ボックスをフレームの端の外へドラッグしても、完全に**表示されたまま選択可能**です — 構図を整えている間、要素を横に置いておき、後でフレーム内へドラッグし直せます。フレームの外側にあるものはすべて**わずかにフェード**され、書き出し領域が一目でわかるようになっています。また、フレームには影が付いたままなので、ファイルがどこから始まるかが正確にわかります。
- **書き出されるのはフレームだけです。** 書き出されるファイルはアートボードの範囲に限られます — 外側に残っているもの（またはボックスが端からはみ出している部分）は、ラスター・ベクターいずれの形式でも、単純に出力からクロップされます。
- フレームから遠く離れた場所に要素を配置しているときは、**Fit を超えてズームアウト**（最大 20% まで）すると貼り込み台全体を見渡せます。
- **リサイズ可能なアートボード。** 書き出しサイズを変更すると、その場でフレームがリサイズされます。ボックスは位置を保持するため、既存のコンテンツを中心にレイアウトを組み直すことができます。

## スマートフォンでの操作

![The free-canvas tool rail: a drag grip, the Lolly menu, then Pointer, Add a box, Pen and Timeline](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio&width=1440&height=900&dpi=192&waitMs=2600&css=.fc-toolbar%7Bopacity%3A1!important%7D&cropSelector=.fc-toolbar&walker=1&format=svg&dark=1&filename=pen-editor-rail)

![Two pen paths rendered straight from a link: a stroked S-curve and a closed filled blob](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio%3Fboxes%3D%5B%7B%22id%22%3A%22paper%22%2C%22kind%22%3A%22box%22%2C%22x%22%3A0%2C%22y%22%3A0%2C%22w%22%3A1080%2C%22h%22%3A1080%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23ffffff%22%7D%2C%7B%22id%22%3A%22curve%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A140%2C%22y%22%3A180%2C%22w%22%3A800%2C%22h%22%3A420%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%22%2C%22stroke%22%3A%22%234f84ba%22%2C%22strokeW%22%3A14%2C%22path%22%3A%221!cubic!0_.02!.85!!!.25!-.45!s_.5!.5!-.22!.32!.22!-.32!y_.98!.12!-.25!.45!!!s%22%7D%2C%7B%22id%22%3A%22blob%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A340%2C%22y%22%3A620%2C%22w%22%3A400%2C%22h%22%3A320%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23d1e7ff%22%2C%22stroke%22%3A%22%234f84ba%22%2C%22strokeW%22%3A6%2C%22fillRule%22%3A%22nonzero%22%2C%22path%22%3A%221!catmull-rom!1_.5!0_1!.42_.78!1_.22!1_0!.42%22%7D%5D&width=1440&height=900&dpi=192&waitMs=2600&cropSelector=%23tool-canvas&walker=1&format=svg&dark=1&filename=pen-path-geometry)

![A tool on a phone-width screen - controls as a sheet up top, the generated palette filling the preview below, and the render pill floating bottom-centre](/t/url-shot?url=%2F%23%2Ftool%2Fcolor-palette%3Fseed%3Df97316%26harmony%3Dadjacent-3%26steps%3D9&width=430&height=900&dpi=192&waitMs=2200&walker=1&format=svg&dark=1&filename=vt-phone-palette)

画面幅が狭い場合、レイアウトは1カラムに再構成されます。

- **コントロールは上部のシート**になり、下端に**ドラッグ用のグリップ**が付きます。グリップをドラッグしてサイズを変更できます — **peek（覗く）/ half（半分）/ full（全画面）** にスナップします — または、グリップを**タップ**して折りたたみ ↔ 展開を切り替えられます。プレビューは下の空間を埋め、編集中も表示され続けます。
- フローティングの **Render** ボタンをタップすると **Export** シートが開きます — フォーマット、サイズ、コピー、保存、ダウンロードのすべてのコントロールが一箇所にまとまっています。背景をタップすると閉じられます。

## コントロール（入力項目）

![A crescent and a ring with a real hole, both produced by Subtract](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio%3Fboxes%3D%5B%7B%22id%22%3A%22paper%22%2C%22kind%22%3A%22box%22%2C%22x%22%3A0%2C%22y%22%3A0%2C%22w%22%3A1080%2C%22h%22%3A1080%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23ffffff%22%7D%2C%7B%22id%22%3A%22crescent%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A120%2C%22y%22%3A330%2C%22w%22%3A374%2C%22h%22%3A400%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%234f84ba%22%2C%22path%22%3A%221!cubic!1_.750491!.957645!-.128211!-.062578!-.065985!.027232!c_.534759!1!.076762!!-.295339!!c_0!.5!!.276142!!-.276142!c_.534759!0!-.295339!!.200102!!c_1.000984!.254923!-.09169!-.152161!-.021205!-.003239!c_.935829!.25!.022185!!-.221505!!c_.534759!.625!!-.207107!!.14459!c%22%7D%2C%7B%22id%22%3A%22ring%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A580%2C%22y%22%3A330%2C%22w%22%3A400%2C%22h%22%3A400%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%234f84ba%22%2C%22fillRule%22%3A%22nonzero%22%2C%22path%22%3A%221!cubic!1_1!.5!!-.276142!!.276142!c_.5!1!.276142!!-.276142!!c_0!.5!!.276142!!-.276142!c_.5!0!-.276142!!.276142!!c*1!cubic!1_.5!.7!-.110457!!.110457!!c_.7!.5!!.110457!!-.110457!c_.5!.3!.110457!!-.110457!!c_.3!.5!!-.110457!!.110457!c%22%7D%5D&width=1440&height=900&dpi=192&waitMs=2600&cropSelector=%23tool-canvas&walker=1&format=svg&dark=1&filename=path-ops-boolean-result)

![A tool's control stack - a text field, colour triggers and a slider, and nothing else the author chose to lock down](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&cropSelector=%23tool-inputs&walker=1&format=svg&dark=1&filename=use-tool-inputs)

ツールは、変化させることを意図した入力項目だけを公開します — それ以外（色、レイアウト、タイポグラフィ、ロジック）はツールの作者によって固定されているため、あなたが作るものは作者が定めたルールに必ず従います。入力項目にはテキスト、スライダー、カラーピッカー、ドロップダウン、日付、画像ピッカー、繰り返し行グループなどがあります。折りたたみ可能なセクションにまとめられているものもあります。

**リセット:** *Clear changes* をクリックすると、すべての入力項目が初期値に戻ります。

## あなたの情報とプロフィール写真

![Sequence Studio's timeline: the transport, the ruler, an overlay lane, the magnetic sequence row with its clips and seam chips, and the Always on strip](/t/url-shot?url=%2F%23%2Ftool%2Fsequence-studio&width=1440&height=900&dpi=192&waitMs=7000&css=.tl-panel%7Bheight%3A252px!important%7D&cropSelector=.tl-panel&format=svg&walker=1&tolerance=0.03&dark=1&filename=seq-studio-timeline&sweep=1)

![The whole editing surface: artboard, tool rail and timeline together](/t/url-shot?url=%2F%23%2Ftool%2Fsequence-studio&width=1440&height=900&dpi=192&waitMs=7000&css=.fc-toolbar%7Bopacity%3A1!important%7D&cropSelector=%23tool-stage&format=svg&walker=1&tolerance=0.03&dark=1&filename=seq-studio-stage)

**Profile**（ギャラリー右上）には、氏名、連絡先情報、任意の**プロフィール写真**が保存されます。これらの項目を求めるツールでは自動的に事前入力されます — 一度設定しておけば、メール署名、ロックアップ、バッジが自動的に埋まります。各セッションで個別に上書きすることも可能です。ツールがこれらの情報を読み取れるようにするには、**Use my details** をオンにしてください。

プロフィール写真と情報は**このデバイス上にのみ**保存されます。プロフィールは、あなた自身だけでなく、チームやときどき担う役割を表すこともできます。複数のプロフィールを維持する方法を含む詳細については **[Profiles](/info/profile.html)** をご覧ください。

## 保存と再開

![The two-half render pill - an up arrow that opens the export panel, and a tick that saves the session in place](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&css=%23tool-inputs%7Bdisplay%3Anone%7D&cropSelector=.render-pill&walker=1&format=svg&dark=1&filename=use-render-pill)

**Save** をクリックすると、現在の入力内容がそのツールのセッションとして保存されます。ツールごとに複数の名前付きセッションを保持でき、各ツールの **Continue** ボタンで直近のセッションを再度開けます。**履歴ボタン**（右上、プロフィールの隣）には、すべてのツールにまたがる保存済みセッションが一覧表示されます。セッションはデバイスにローカルに保存されます。整理するには、下記の **Projects** を開いてください。

## Projects

![Projects - saved sessions organised into nestable folders](/t/url-shot?url=%2F%23%2Fp&width=1440&height=900&dpi=192&waitMs=1200&walker=1&format=svg&localize=1&dark=1&filename=projects)

**Projects** — **Tools** の隣にある **Projects** タブから、または **Profile → Storage → Organise in Projects** から開けます — は、保存したすべてのもののホームであり、ファイルマネージャーのように動作します。

- **入れ子にできるフォルダー。** 保存したセッションをフォルダーにグループ化でき、フォルダーの中にさらにフォルダーを、好きなだけ深く作れます。フォルダーの作成、名前の変更、タイルを別のフォルダーへドラッグしての移動が可能で、パンくずリストで上の階層へ戻れます。常に存在する **Uncategorised** フォルダーには、まだ整理されていないものが入ります。
- **新しい作業をそのままファイルする。** フォルダー内で **+ New tool** を使うとツールが開き、最初の保存が自動的にそのフォルダーに収められます。
- **複数選択（デスクトップ）。** タイルのチェックボックスをオンにする、空いたキャンバス上で選択ボックスをドラッグする、または **Shift/Cmd クリック**する方法があります。タイルを**右クリック**するとコンテキストメニューが表示されます。選択したもの全体に対して一括で操作できます。
- **フォルダーまたは選択範囲全体をレンダリングする。** **Render folder** は、フォルダー内（サブフォルダーを含む）のすべての保存済みセッションを、入れ子構造の1つの `.zip` として書き出します。**Render selection** は任意の複数選択に対して同じことを行い、単一のセッションはそのまま個別のファイルとしてレンダリングされます。Batch/Pro は不要です。
- **保存したセッションを共有する。** セッションを右クリック → **Share link** を選ぶと、まったく同じ入力内容でそのセッションを再度開くリンクがコピーされます（Share ダイアログの詳細は下記を参照）。

## リンクの共有

すべての入力内容はページの URL に記録されるため、リンク*そのもの*がデザインになります。書き出しコントロール内の **Share**、または Projects の保存済みセッションの **Share link** を使うと、**Share ダイアログ**が開きます。そこには、そのままコピーできるリンクに加え、リンクの暗号化と、開いたときの挙動（フルスクリーン表示、書き出しパネルを展開する、`&export` によるダウンロード即実行、`&copy` によるクリップボードへのコピー）を切り替えるトグルがあります。

大きなデザインでは URL が長くなるため、ダイアログには、状態全体をコンパクトなトークンに詰め込んだ **Shortest link** も用意されています — 読みやすい形式も常に併記されます。同僚に貼り付けたり、ブックマークしたり、コミットしたりできます（詳細: [URL Mode](/info/url-mode.html)）。

> お使いのデバイスからアップロードした画像は、共有リンクに**含まれません** — それらはご自身のマシン上にのみ存在します。

## ライブカメラ（モーションリアクティブなツール）

写真の**フィルター** — Halftone、Scanline、Posterize、Duotone — には、カメラが利用可能な場合に **Go live** ボタンが表示されます。オンにすると、エフェクトが Web カメラの映像をフレームごとに追跡するため、動きに反応します。結果は GIF、WebM、MP4 として録画できます。フレームの読み取りと処理は**お使いのデバイス上**で行われ、外部に送信されることは一切なく、ツールを停止または離れた瞬間にカメラは解放されます（どの画像ピッカーにも、1フレームをデバイス上の画像として取り込む **Take a photo** があります）。

## My images

ツールでデバイスから画像を追加できる場合、その画像は縮小され、EXIF/GPS 情報が除去された上で、個人用の **My images** ライブラリ（**Profile → Storage** 内）に保存されます。どのツールでも再利用できます。ライブラリには上限があり、完全にローカルです — そこで画像を管理・削除できます。

## Catalogue — あなたのアセットライブラリ

![The Catalogue - brand assets, swatches and fonts, plus your own uploads](/t/url-shot?url=%2F%23%2Fc%3Fsection%3Dswatches%2Cfonts&width=1440&height=900&dpi=96&waitMs=2400&css=.plat-swatch-grid~%2A%7Bdisplay%3Anone%7D&walker=1&format=svg&localize=1&dark=1&filename=catalogue)

**Catalogue**（`#/c`、またはメニューの **Catalogue** リンク）は、ツールが利用できるすべて——ブランドロゴ、画像、音声、モーションを種類ごとにまとめたもの——を集めた場所であり、あなた**自身のクリエイティブファイル**が置かれる場所でもあります。サーバーも、管理コンソールも、プルリクエストも不要です。すべてがお使いのデバイス上にあります。

- **ファイルを取り込む。** 画像、SVG、音声クリップ、動画、Lottie、PDF などをアップロード領域にドラッグする——またはクリックして選ぶ——と、すぐに Catalogue に追加され、すべてのツールのアセットピッカーで使えるようになります。好きなだけ取り込めますし、デバイスの外に出ることは決してありません。
- **よく使うものをお気に入りに。** アセット（またはブランドスウォッチ）を ★ すると、すべてのピッカーの先頭に固定されるため、定番のロゴや色にワンクリックでアクセスできます。
- **整理する。** アセットを別のグループに分類し直したり、使わない共有ブランドアセットを非表示にしたり（**Show hidden** で元に戻せます）、自分でアップロードしたものを完全に削除したりできます。

### パレットとフォントをどこへでも

![The Swatches panel - the five palette download buttons across the top, then every brand colour as a copyable chip](/t/url-shot?url=%2F%23%2Fc%3Fsection%3Dswatches&width=1440&height=900&dpi=96&waitMs=1800&css=.cat-group%3Anot%28%5Bdata-group%3Dswatches%5D%29%7Bdisplay%3Anone%7D&cropSelector=%5Bdata-group%3Dswatches%5D&walker=1&format=svg&dark=1&filename=use-swatch-downloads)

Catalogue の **Swatches** パネルは、単なる参照用ではありません——色をクリックしてコピーしたり、他のツールが扱える形式で**ブランドパレット全体をダウンロード**したりできます。

- **デザイントークン（JSON）**、**CSS 変数**、または **CSS クラス** — ブランドをそのままスタイルシートやビルドに取り込めます。
- **Adobe Swatch Exchange（.ase）** — Illustrator や Photoshop に読み込めます。
- **GIMP パレット（.gpl）** — GIMP や Inkscape 向けです。

**Fonts** パネルには、ブランドの書体がそれぞれ **download** ボタン付きで一覧表示され、ローカルにインストールしたり印刷会社に渡したりできます。（[Brand Studio](/info/brand-studio.html) の Colours タブでも同じパレットのダウンロードが可能です。）

アセットは、オープンでDIY的な道の半分にすぎません。もう半分は**自分だけのツールを作ること**です——フリーキャンバス（前述の Layout Studio）を使えば、コード不要で視覚的に構築できます。

## サウンドとアクセシビリティ

Lolly は、誰にとっても快適に使えることを目指しています。インターフェースはキーボードで操作でき、カスタムコントロールにはスクリーンリーダー向けの適切なラベルが付いており、各ツールのライブプレビューは、何を作っているかを説明する1枚のラベル付き画像として公開されています。

穏やかな**補助サウンド**のレイヤーが、あなたの操作を確認してくれます — ギャラリーへの到着、Content Credentials の有効・無効チェック、パネルを閉じる、フィルターを切り替える、といった場面で鳴ります。**デフォルトでオン**になっていますが、常に任意です。スイッチが表示される場所（各ビューのオプションポップオーバー、または **Profile**）ならどこでも **Sound** をオフにでき、その選択は記憶されます。

そのスイッチの隣にあるのが **Neurospicy Mode** です — 作業中に静かに流れる、任意の落ち着いたバックグラウンド集中トラックです。オンにすると、画面の隅に小さな**プレーヤードック**が開き、アプリ内のどこへ移動してもついてきます。そこからトラックを検索して選び、前後にスキップし、音量を設定し、最小化したり閉じたりできます。トラックリストはいくつかのカテゴリーにまたがっています——手続き的に生成される *Lolly Sings* の楽曲、アンビエントのループやビート、自分でアップロードした音声、そしてインターネットのライブ **radio** 局がいくつか（これらには接続が必要で、それ以外はすべてオフラインで再生されます）。**デフォルトではオフ**で、Sound と同様、セッションやデバイスをまたいで記憶されます。Sound をオフにすると、集中トラックもミュートされます。

## ストレージとプライバシー

すべてはお使いのブラウザのローカルデータベース（IndexedDB）に保存されます。プロフィール、保存済みセッション、アップロードした画像、ダウンロード済みカタログコンテンツのキャッシュです。**Profile → Storage** では使用状況を確認でき、以下のことができます。

- **Clear cache** — ダウンロード済みのカタログコンテンツを破棄します（次回の読み込み時に再同期されます）。
- **Clear all my data** — プロフィール、セッション、画像をすべて消去します。*元に戻すことはできません。*

![The storage card on a phone-width screen: every category of on-device data named, with the Clear all my data button at the bottom](/t/url-shot?url=%2F%23%2Fprofile%3Ffocus%3Dstorage-section&width=430&height=1600&dpi=192&waitMs=2400&css=.welcome-dialog%2C.personalize-nudge%2C.store-manages%2C.storage-subsection%2C.store-selbar%2C.store-chip-val%2C%23store-hero-num%2C%23store-headroom%2C%23store-quota%2C%23store-reclaim%7Bdisplay%3Anone%7D&format=svg&walker=1&cropSelector=%23storage-section&dark=1&filename=pv-storage-clear&sweep=1)

何も外部へ送信されることはありません。テレメトリーもクラウドレンダリングもありません。

## 別のデバイスへの移行

すべてがお使いのデバイス上に存在するため、**Profile → Storage → Move to another device** を使えば、アカウントもクラウドも使わずに、すべてを2台目のインストール先へ持ち運べます。

- **Export my data** は、単一の `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` をダウンロードします（名前の部分はプロフィールから取得され、未設定の場合は省略されます。`<n>` は同日中の書き出しが衝突しないようにするための日ごとのカウンターです）。このファイルには、プロフィール、保存済みのすべてのセッション（サムネイル付き）、アップロードした画像、各種設定（テーマ、サイドバー幅、ローカルの活動統計）が含まれます。
- もう一方のインストール先で **Import data…** を使うと、そのファイルが読み込まれます。処理は**マージ**方式です。同じ名前のもの（プロフィール、セッションスロット、画像）はインポートしたコピーで置き換えられ、そのデバイス上の他のものはそのまま保持されます。保存済みセッションは、インポートした画像に自動的に再リンクされます。

カタログキャッシュは含まれません — 新しいデバイス上で自動的に再ダウンロードされます。このバンドルは通常の zip ファイル（`manifest.json` + `profile.json` + `sessions.json` + `assets.json` + `assets/blobs/…` + `prefs.json`、フォーマット id `lolly-backup`）なので、メール、USB、AirDrop を経由しても壊れずに残り、どのシェルで読み込んでも同じフォーマットです。各パートはチェックサムが付いているため、転送中に破損したファイルは、中途半端な状態で復元されるのではなく、インポート時に検出されます（詳細なフォーマット仕様: [Data Transfer](/info/data-transfer.html)）。

## デザインのインポート（Figma、Penpot、Illustrator、InDesign）

既存のデザインを Lolly に取り込んで、そのまま作業を続けることができます。**Layout Studio** を開き、キャンバスツールバーの **Import a design** をクリックして、Figma の **.fig** または SVG、Penpot の **.penpot**、Illustrator の **.ai** / **.pdf**、あるいは InDesign の **.idml** を選択してください。レイヤーはフリーキャンバス上の編集可能なボックスになります — テキストは再入力可能なままで、画像は **My images** に格納され、書体と色はブランドのグローバル設定に従います — その後、結果は他のセッションと同じように保存・共有・レンダリングできます。解析はすべてお使いのデバイス上で行われます。詳細: **[Import a design](/info/design-import.html)**。

## 書き出し

フォーマットの選択、出力サイズと印刷単位、透過、動画、コピー/共有についての詳しい説明は **[Exporting & Formats](/info/exporting.html)** をご覧ください。要点をまとめると、フォーマットを選び、必要であればサイズを設定し、**Download**（またはクリップボードへ **Copy**）するだけです。

## Batch（Pro）モード

![The batch toolbar - zip name, units, DPI and the format every row inherits, with Sessions and Render on the right](/t/url-shot?url=%2F%23%2Fpro&width=1440&height=900&dpi=192&waitMs=3500&cropSelector=.pro-toolbar&walker=1&format=svg&dark=1&filename=use-batch-toolbar)

パワーユーザー向けに、**Batch**（ギャラリーからリンクされ、デフォルトでオンになっている Pro 機能フラグの背後にあります）は多数のバリエーションを一度にレンダリングします — 各行が1組の入力項目となるグリッドで、まとめて書き出されます。カードを十数か国語にローカライズしたり、すべてのサイズバリエーションを一度に生成したりするのに最適です。行の入力は、直接タイピングする、スプレッドシートからそのまま貼り付ける、CSV をインポートする（書き出しも可能です）のいずれかで行え、行ごとにフォーマット、サイズ、出力ファイル名を設定できます。グリッド全体を名前付きの **batch セッション**として保存すればギャラリーから再度開くことができ、すべての行を1つの `.zip` としてダウンロードできます。

Batch は、**1つのテンプレートの多数のバリエーション**を一度に生成するためのものです。**すでに保存済み**のセッションを再レンダリングするには、上記の **Projects → Render folder / Render selection** を使用してください — Pro は不要です。

## オフラインとインストール

Lolly は PWA です。初回読み込みの後は**オフライン**でも動作します — ブラウザのアドレスバーから（モバイルでは *Add to Home Screen* から）インストールすると、アプリのようなフルスクリーン体験が得られます。オンラインに戻ると自動的に更新されます。
