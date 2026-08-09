# 使用 Lolly

一份实际讲解如何*使用*本应用的指南——打开工具、操作画布、导出、保存和分享。这里的一切都在**你的设备上**运行：无需账户、无需上传、首次加载后无需联网。

> 首次使用？[快速入门](/info/quickstart.html) 让你几分钟内就能开始创作，[Lolly 面向运营方](/info/operators.html) 则介绍如何安装/部署应用；本页讲的是应用打开后如何操作。

## 打开工具

![A tool's split view - the control stack on the left, and the live horizontal bar chart it draws on the right](/t/url-shot?url=%2F%23%2Ftool%2Fd3%3Fct%3Dbar%26t%3DExample%2520data%26st%3DSample%2520values%252C%2520not%2520a%2520real%2520dataset%26d%3DMonth%252CSeries%2520A%252CSeries%2520B%252CSeries%2520C%250AJan%252C12%252C9%252C5%250AFeb%252C18%252C14%252C7%250AMar%252C24%252C17%252C11%250AApr%252C29%252C23%252C15%26lg%3D1&width=1440&height=900&dpi=192&waitMs=2500&walker=1&format=svg&dark=1&filename=vt-tool-split-view)

![The tool gallery - every tool as a card, grouped by category](/t/url-shot?url=%2F%23%2F&width=1440&height=900&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&tolerance=0.03&waitSelector=.gallery-view%5Bdata-shots-settled%5D&walker=1&format=svg&localize=1&dark=1&filename=gallery&try=1&sweep=1)


主屏幕是**画廊**——按类别分组列出所有工具。点击卡片即可打开工具；如果你之前使用过该工具，**继续**按钮会恢复你最近一次的会话。使用搜索框可按名称筛选。

每个工具都是分屏视图：一侧是**控件**，另一侧是实时**预览**（画布）。更改任意控件，预览会立即更新。

> 少数工具（例如**版式工作室**）会以**自由画布**的形式打开——一个无边框、可直接操作的界面，你可以拖动、缩放、旋转并吸附文本、形状和图片的方框，双击即可就地编辑文本。它通过与其他所有工具相同的渲染路径导出，因此画布本身*就是*文件。详见下文[自由画布](#the-free-canvas-layout-studio)。

## 画布（预览）

![The zoom HUD in the corner of the canvas - minus, the live percentage, plus, Fit, then the theme and sound toggles](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&css=.stage-nav%7Bopacity%3A1!important%7D&cropSelector=.stage-nav&walker=1&format=svg&dark=1&filename=use-zoom-hud)

预览始终精确显示导出后的效果。

**桌面端**

- **缩放：** Cmd/Ctrl + 滚动，或在触控板上双指捏合——缩放会以指针位置为中心。
- **平移：** 按住**空格键**拖动，或用**鼠标中键**拖动。（普通点击仍可自由用于点击设计中的元素。）
- **键盘：** `0` = 适应窗口 · `1` = 100% · `+` / `−` = 缩放。
- **缩放浮层：** 角落里的小型 `−  NN%  +  Fit` 控件。点击百分比数字可在“适应”与 100% 之间切换。

**触控端**

- **双指捏合**缩放，**拖动**平移，**双击**重置为适应窗口。

**点击跳转到对应控件：** 点击设计中的任意元素，侧边栏中对应的输入项会获得焦点并滚动到可见区域——对于重复行组，它会展开你点击的那一行，因此编辑你所看到的内容只需一步。

更改尺寸时，视图会自动恢复为整洁的适应窗口状态。

### 自由画布（版式工作室）

![Layout Studio's free canvas - the artboard with its surrounding pasteboard](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio%3Ftemplate%3D__blank__&width=1440&height=900&dpi=192&waitMs=2000&walker=1&format=svg&localize=1&dark=1&filename=layout-studio&sweep=1)

自由画布类工具会在画板*周围*增加一个工作区域，就像设计师的粘贴板：

- **画布外暂存。** 将方框拖出画框边缘，它仍然完全**可见且可选中**——在排布构图时可以先把元素放到一边，需要时再拖回来。画框之外的一切都会**轻微淡化**，使导出区域始终一目了然，画框本身则始终带有阴影，清楚标示文件的起始范围。
- **只有画框内的内容会被导出。** 导出的文件以画板为边界——留在画框外的任何内容（或方框悬出边缘的部分）都会直接从输出中裁掉，位图和矢量格式均是如此。
- **缩小到超过“适应”比例**（最小可到 20%），当你把元素暂存到画框很远的地方时，可以借此查看整个粘贴板。
- **可调整大小的画板。** 更改导出尺寸会原地调整画框大小；方框会保持原有位置，因此你可以围绕现有内容重新调整版面框架。

## 在手机上

![The free-canvas tool rail: a drag grip, the Lolly menu, then Pointer, Add a box, Pen and Timeline](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio%3Ftemplate%3D__blank__&width=1440&height=900&dpi=192&waitMs=2600&css=.fc-toolbar%7Bopacity%3A1!important%7D&cropSelector=.fc-toolbar&walker=1&format=svg&dark=1&filename=pen-editor-rail)

![Two pen paths rendered straight from a link: a stroked S-curve and a closed filled blob](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio%3Fboxes%3D%5B%7B%22id%22%3A%22paper%22%2C%22kind%22%3A%22box%22%2C%22x%22%3A0%2C%22y%22%3A0%2C%22w%22%3A1080%2C%22h%22%3A1080%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23ffffff%22%7D%2C%7B%22id%22%3A%22curve%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A140%2C%22y%22%3A180%2C%22w%22%3A800%2C%22h%22%3A420%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%22%2C%22stroke%22%3A%22%234f84ba%22%2C%22strokeW%22%3A14%2C%22path%22%3A%221!cubic!0_.02!.85!!!.25!-.45!s_.5!.5!-.22!.32!.22!-.32!y_.98!.12!-.25!.45!!!s%22%7D%2C%7B%22id%22%3A%22blob%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A340%2C%22y%22%3A620%2C%22w%22%3A400%2C%22h%22%3A320%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23d1e7ff%22%2C%22stroke%22%3A%22%234f84ba%22%2C%22strokeW%22%3A6%2C%22fillRule%22%3A%22nonzero%22%2C%22path%22%3A%221!catmull-rom!1_.5!0_1!.42_.78!1_.22!1_0!.42%22%7D%5D&width=1440&height=900&dpi=192&waitMs=2600&cropSelector=%23tool-canvas&walker=1&format=svg&dark=1&filename=pen-path-geometry)

![A tool on a phone-width screen - controls as a sheet up top, the generated palette filling the preview below, and the render pill floating bottom-centre](/t/url-shot?url=%2F%23%2Ftool%2Fcolor-palette%3Fseed%3Df97316%26harmony%3Dadjacent-3%26steps%3D9&width=430&height=900&dpi=192&waitMs=2200&walker=1&format=svg&dark=1&filename=vt-phone-palette)

在窄屏幕上，布局会重新排列为单列：

- **控件会变成一个位于顶部的面板**，其下边缘有一个**拖动把手**。拖动把手可以调整面板大小——它会吸附到**微露 / 半屏 / 全屏**——或**点按**把手在折叠与展开之间切换。预览会填满下方空间，并在你编辑时始终保持可见。
- 一个悬浮的**渲染**按钮会打开**导出**面板——格式、尺寸、复制、保存和下载等所有控件都集中在这里。点按背景区域即可关闭它。

## 控件（输入项）

![A crescent and a ring with a real hole, both produced by Subtract](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio%3Fboxes%3D%5B%7B%22id%22%3A%22paper%22%2C%22kind%22%3A%22box%22%2C%22x%22%3A0%2C%22y%22%3A0%2C%22w%22%3A1080%2C%22h%22%3A1080%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23ffffff%22%7D%2C%7B%22id%22%3A%22crescent%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A120%2C%22y%22%3A330%2C%22w%22%3A374%2C%22h%22%3A400%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%234f84ba%22%2C%22path%22%3A%221!cubic!1_.750491!.957645!-.128211!-.062578!-.065985!.027232!c_.534759!1!.076762!!-.295339!!c_0!.5!!.276142!!-.276142!c_.534759!0!-.295339!!.200102!!c_1.000984!.254923!-.09169!-.152161!-.021205!-.003239!c_.935829!.25!.022185!!-.221505!!c_.534759!.625!!-.207107!!.14459!c%22%7D%2C%7B%22id%22%3A%22ring%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A580%2C%22y%22%3A330%2C%22w%22%3A400%2C%22h%22%3A400%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%234f84ba%22%2C%22fillRule%22%3A%22nonzero%22%2C%22path%22%3A%221!cubic!1_1!.5!!-.276142!!.276142!c_.5!1!.276142!!-.276142!!c_0!.5!!.276142!!-.276142!c_.5!0!-.276142!!.276142!!c*1!cubic!1_.5!.7!-.110457!!.110457!!c_.7!.5!!.110457!!-.110457!c_.5!.3!.110457!!-.110457!!c_.3!.5!!-.110457!!.110457!c%22%7D%5D&width=1440&height=900&dpi=192&waitMs=2600&cropSelector=%23tool-canvas&walker=1&format=svg&dark=1&filename=path-ops-boolean-result)

![A tool's control stack - a text field, colour triggers and a slider, and nothing else the author chose to lock down](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&cropSelector=%23tool-inputs&walker=1&format=svg&dark=1&filename=use-tool-inputs)

工具只暴露那些设计为可变的输入项——其余的一切（配色、布局、排版、逻辑）都由工具作者锁定，因此你制作出的成品始终符合作者设定的规则。输入项包括文本、滑块、颜色选择器、下拉菜单、日期、图片选择器和重复行组。部分输入项会归入可折叠的分组中。

**重置：** *清除更改*会将所有输入项恢复为默认值。

## 你的详细信息与头像

![Sequence Studio's timeline: the transport, the ruler, an overlay lane, the magnetic sequence row with its clips and seam chips, and the Always on strip](/t/url-shot?url=%2F%23%2Ftool%2Fsequence-studio&width=1440&height=900&dpi=192&waitMs=7000&css=.tl-panel%7Bheight%3A252px!important%7D&cropSelector=.tl-panel&format=svg&walker=1&tolerance=0.03&dark=1&filename=seq-studio-timeline&sweep=1)

![The whole editing surface: artboard, tool rail and timeline together](/t/url-shot?url=%2F%23%2Ftool%2Fsequence-studio&width=1440&height=900&dpi=192&waitMs=7000&css=.fc-toolbar%7Bopacity%3A1!important%7D&cropSelector=%23tool-stage&format=svg&walker=1&tolerance=0.03&dark=1&filename=seq-studio-stage)

**个人资料**（位于画廊右上角）保存你的姓名、联系方式，以及可选的**头像照片**。需要这些字段的工具会自动预填——只需设置一次，你的邮件签名、组合标识和徽章就会自行填好。你仍然可以在每个会话中单独覆盖任意字段。通过开启**使用我的信息**，工具才可以读取这些内容。

你的头像照片和详细信息**仅保存在本设备上**。一份个人资料所代表的不一定只是你自己——也可以是一个团队，或你偶尔会扮演的某个角色。完整说明请见**[个人资料](/info/profile.html)**，包括如何保留多份资料。

## 保存与继续

![The two-half render pill - an up arrow that opens the export panel, and a tick that saves the session in place](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&css=%23tool-inputs%7Bdisplay%3Anone%7D&cropSelector=.render-pill&walker=1&format=svg&dark=1&filename=use-render-pill)

点击**保存**可将当前输入项存为该工具的一个会话。每个工具可以保留多个具名会话；每个工具的**继续**按钮会重新打开你最近的一个会话，而**历史记录按钮**（右上角，紧邻个人资料）会列出所有工具下的每一个已保存会话。会话保存在本机。如需整理它们，请打开下方的**项目**。

## 项目

![Projects - saved sessions organised into nestable folders](/t/url-shot?url=%2F%23%2Fp&width=1440&height=900&dpi=192&waitMs=1200&walker=1&format=svg&localize=1&dark=1&filename=projects)

**项目**——可从**工具**旁边的**项目**标签页打开，也可从**个人资料 → 存储 → 在项目中整理**进入——是存放你所保存一切内容的地方，使用方式类似文件管理器：

- **可嵌套的文件夹。** 将已保存的会话归入文件夹，文件夹内还可以再建文件夹，层级不限。你可以新建文件夹、重命名，或把一个卡片拖到另一个文件夹上来移动它；面包屑导航可带你逐层返回上级。一个始终存在的**未分类**文件夹会保存尚未归档的内容。
- **新工作直接归档。** 在文件夹内，**+ 新建工具**会打开一个工具，并自动把它的首次保存归入该文件夹。
- **多选（桌面端）。** 勾选卡片的复选框、在空白画布上拖出选框，或按住 **Shift/Cmd 点击**；**右键点击**卡片可打开其上下文菜单。之后即可对整个选中范围一次性执行操作。
- **渲染整个文件夹或选中项。** **渲染文件夹**会将文件夹中的每一个已保存会话——包括其子文件夹——导出为一个嵌套的 `.zip`。**渲染选中项**对任意多选范围执行相同操作，单个会话则直接渲染为对应的独立文件。无需使用“批量”（Pro）功能。
- **分享已保存的会话。** 右键点击某个会话 → **分享链接**，即可复制一个能以完全相同输入项重新打开它的链接（完整的分享对话框——见下文）。

## 分享链接

每一个输入项都会被记录在页面 URL 中，因此一个链接*就是*这份设计本身。使用导出控件中的**分享**——或项目中任意已保存会话上的**分享链接**——即可打开**分享对话框**：其中提供一个可直接复制的链接，以及用于加密链接、以及设置打开时行为的开关（全屏显示、展开导出面板、通过 `&export` 打开即下载，或通过 `&copy` 打开即复制到剪贴板）。

复杂的设计会生成很长的 URL，因此该对话框还提供**最短链接**选项，将全部状态打包为一个紧凑的令牌——可读形式的链接也始终保留可用。可以把它粘贴给同事、加入书签，或提交到版本库。（完整说明：[URL 模式](/info/url-mode.html)。）

> 你从设备上传的图片**不会**包含在分享链接中——它们只存在于你的机器上。

## 实时摄像头（运动响应型工具）

照片**滤镜**——半调、扫描线、色调分离、双色调——在有可用摄像头时会显示**实时开启**按钮。开启后，效果会逐帧跟踪你的摄像头画面，从而对动作做出反应；你可以将结果录制为 GIF、WebM 或 MP4。画面帧的读取和处理都在**你的设备上**完成，绝不会离开设备，一旦你停止或离开该工具，摄像头会立即释放。（任意图片选择器也都提供**拍照**功能，可抓取单帧画面作为设备端图片。）

## 我的图片

当某个工具允许你从设备添加图片时，该图片会被缩小尺寸、清除 EXIF/GPS 信息，并保存到你个人的**我的图片**库中（位于**个人资料 → 存储**）。你可以在任意工具中重复使用它。该图库有容量上限，且完全保存在本地——可以在那里管理或删除图片。

## 目录——你的素材库

![The Catalogue - brand assets, swatches and fonts, plus your own uploads](/t/url-shot?url=%2F%23%2Fc%3Fsection%3Dswatches%2Cfonts&width=1440&height=900&dpi=96&waitMs=2400&css=.plat-swatch-grid~%2A%7Bdisplay%3Anone%7D&walker=1&format=svg&localize=1&dark=1&filename=catalogue)

**目录**（`#/c`，或菜单中的**目录**链接）汇集了你的工具可以调用的一切——品牌徽标、图片、音频与动态素材，按类别分组——它也是你**自己的创意文件**的存放之处。没有服务器，没有管理控制台，没有 pull request：一切都在你的设备上。

- **导入你的文件。** 把任意图片、SVG、音频片段、视频、Lottie 或 PDF 拖到上传区域——或点击选择——它就会立即进入你的目录，在每个工具的素材选择器中随时可用。想导入多少都可以；它绝不会离开你的设备。
- **收藏常用素材。** 给某个素材（或某个品牌色板）点上 ★，它就会置顶到每个选择器的最前面，让你常用的徽标或颜色一键即达。
- **整理归置。** 把某个素材重新归入不同的分组，隐藏你不用的共享品牌素材（用**显示隐藏项**再把它找回来），或直接删除你自己上传的内容。

### 把你的调色板与字体带到任何地方

![The Swatches panel - the five palette download buttons across the top, then every brand colour as a copyable chip](/t/url-shot?url=%2F%23%2Fc%3Fsection%3Dswatches&width=1440&height=900&dpi=96&waitMs=1800&css=.cat-group%3Anot%28%5Bdata-group%3Dswatches%5D%29%7Bdisplay%3Anone%7D&cropSelector=%5Bdata-group%3Dswatches%5D&walker=1&format=svg&dark=1&filename=use-swatch-downloads)

目录的**色板**面板不只是供参考——点击某个颜色即可复制它，或以你的其他工具所使用的格式**下载整套品牌调色板**：

- **设计令牌（JSON）**、**CSS 变量**或 **CSS 类**——把品牌直接放进样式表或构建流程；
- **Adobe Swatch Exchange（.ase）**——载入 Illustrator 或 Photoshop；
- **GIMP 调色板（.gpl）**——用于 GIMP 或 Inkscape。

**字体**面板列出你的品牌字体，每种旁边都有**下载**按钮，可在本地安装或交给印刷厂。（[品牌工作室](/info/brand-studio.html)的“颜色”标签页也提供同样的调色板下载。）

素材只是这条开放、自助路径的一半；另一半是**制作你自己的工具**——自由画布（即上文介绍的版式工作室）让你无需编写代码，就能可视化地搭建一个工具。

## 声音与无障碍

Lolly 致力于让每个人都能舒适地使用。界面支持键盘导航，自定义控件都带有供屏幕阅读器使用的正确标签，每个工具的实时预览也都以一张带有说明标签的图片形式呈现，描述它正在生成的内容。

一层轻柔的**辅助音效**会对你的操作给予确认——进入画廊、Content Credentials 校验有效与无效、关闭面板、切换滤镜等。它**默认开启**，但始终可选：在开关出现的任意位置（各视图的选项弹层，或**个人资料**）关闭**声音**即可，该选择会被记住。

该开关旁边是 **Neurospicy 模式**——一段可选的、令人平静的背景专注音轨，会在你工作时轻柔播放。开启它会在底部角落打开一个小巧的**播放器坞**，它会跟随你在应用中穿行；你可以在其中搜索并挑选音轨、前后切换、设置音量，以及将其最小化或关闭。音轨列表涵盖几个类别——程序化生成的 *Lolly Sings* 曲目、氛围循环与节拍、你自己上传的音频，以及少量实时网络**电台**（这些需要联网；其余内容均可离线播放）。它**默认关闭**，并且和“声音”一样，会跨会话、跨设备被记住。关闭“声音”也会同时静音专注音轨。

## 存储与隐私

一切都保存在浏览器的本地数据库（IndexedDB）中：你的个人资料、已保存的会话、上传的图片，以及已下载目录内容的缓存。**个人资料 → 存储**会显示使用情况，并让你可以：

- **清除缓存** —— 丢弃已下载的目录内容（下次加载时会重新同步）。
- **清除我的所有数据** —— 清空个人资料、会话和图片。*此操作无法撤销。*

![The storage card on a phone-width screen: every category of on-device data named, with the Clear all my data button at the bottom](/t/url-shot?url=%2F%23%2Fprofile%3Ffocus%3Dstorage-section&width=430&height=1600&dpi=192&waitMs=2400&css=.welcome-dialog%2C.personalize-nudge%2C.store-manages%2C.storage-subsection%2C.store-selbar%2C.store-chip-val%2C%23store-hero-num%2C%23store-headroom%2C%23store-quota%2C%23store-reclaim%7Bdisplay%3Anone%7D&format=svg&walker=1&cropSelector=%23storage-section&dark=1&filename=pv-storage-clear&sweep=1)

任何数据都不会被传输到任何地方。没有遥测，也没有云端渲染。

## 迁移到另一台设备

由于一切都保存在你的设备上，**个人资料 → 存储 → 迁移到另一台设备**可以让你把这一切都带到第二个安装实例——无需账户，无需云端：

- **导出我的数据**会下载一个 `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` 文件（文件名中的各部分取自你的个人资料，未设置时会省略；`<n>` 是按天计数的序号，避免同一天的多次导出发生冲突），其中包含你的个人资料、每一个已保存的会话（含缩略图）、你上传的图片，以及你的偏好设置（主题、侧边栏宽度、本地活动统计）。
- 在另一个安装实例上使用**导入数据…**可以将该文件读回。它采用**合并**方式：任何同名内容（个人资料、会话槽位、图片）都会被导入的副本替换；该设备上的其他一切内容则保持不变。已保存的会话会自动重新关联到你导入的图片。

目录缓存不包含在内——它会在新设备上自行重新下载。该压缩包是一个普通的 zip 文件（`manifest.json` + `profile.json` + `sessions.json` + `assets.json` + `assets/blobs/…` + `prefs.json`，格式 id 为 `lolly-backup`），因此经过电子邮件、U 盘或 AirDrop 传输后依然完整，并且是每个客户端都能读取的同一种格式。每个部分都带有校验和，因此传输中损坏的文件会在导入时被发现，而不会被恢复成半损坏的状态。（完整格式规范：[数据迁移](/info/data-transfer.html)。）

## 导入设计（Figma、Penpot、Illustrator、InDesign）

你可以将现有设计带入 Lolly 并继续在其中工作：打开**版式工作室**，在画布工具栏中点击**导入设计**，然后选择 Figma 的 **.fig** 或 SVG 文件、Penpot 的 **.penpot** 文件、Illustrator 的 **.ai** / **.pdf** 文件，或 InDesign 的 **.idml** 文件。图层会变成自由画布上可编辑的方框——文本仍可重新输入，图片会归入**我的图片**，字体和颜色则遵循品牌全局设置——之后的结果会像其他任何会话一样可以保存、分享和渲染。解析过程完全在你的设备上进行。完整说明：**[导入设计](/info/design-import.html)**。

## 导出

见**[导出与格式](/info/exporting.html)**了解完整内容——包括选择格式、输出尺寸与打印单位、透明度、视频，以及复制/分享。简而言之：选择一种格式，如有需要设置尺寸，然后点击**下载**（或**复制**到剪贴板）。

## 批量（Pro）模式

![The batch toolbar - zip name, units, DPI and the format every row inherits, with Sessions and Render on the right](/t/url-shot?url=%2F%23%2Fpro&width=1440&height=900&dpi=192&waitMs=3500&cropSelector=.pro-toolbar&walker=1&format=svg&dark=1&filename=use-batch-toolbar)

对于高级用户，**批量**（可从画廊中的链接进入，由默认开启的 Pro 功能开关控制）可以一次渲染多个变体——一个网格，其中每一行都是一组输入项，一起导出。非常适合把一张卡片本地化为十几种语言，或一次性生成所有尺寸变体。可以通过手动输入、直接从电子表格粘贴，或导入 CSV（也可以导出为 CSV）来填充各行，并为每一行分别设置格式、尺寸和输出文件名。整个网格可以保存为一个具名的**批量会话**，从画廊重新打开，并将每一行下载为一个 `.zip` 文件。

批量功能用于一次性生成**同一模板的多个变体**。若要重新渲染你**已经保存**的会话，请使用上文的**项目 → 渲染文件夹 / 渲染选中项**——无需 Pro。

## 离线与安装

Lolly 是一个 PWA。首次加载后即可**离线**使用——从浏览器地址栏安装它（或在移动设备上使用*添加到主屏幕*），即可获得类似原生应用的全屏体验。重新联网后，它会自动更新。
