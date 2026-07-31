# Lolly 与同类产品的比较

本平台在更广泛的创意工具生态中所处的位置，以及它刻意选择**不**涉足的领域。

> **试点状态：** Lolly 目前是一个封闭试点原型，尚非成品，其安全性目前正在接受 SUSE 严格的基础设施加固，为企业级规模做准备。此处的定位是 Lolly *力图* 达到的位置——[采用与治理](/info/adoption-governance.html#status) 页面介绍了这一点在实践中是如何被验证的。

## 竞争格局

![Layout Studio's free canvas, where the colours, faces and assets on offer are the brand's own](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio&width=1440&height=900&dpi=192&waitMs=2400&format=svg&filename=aud-open-canvas&sweep=1)

| 能力 | Canva（开放画布） | 品牌门户（DAM 模板化） | Illustrator（桌面专业软件） | Figma / Penpot（在线专业软件） | **Lolly（约束优先）** |
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

这一空白的轮廓很清晰：现有的产品格局中，没有一个能同时提供约束优先、可离线使用、低技能门槛、可内部访问的生成式输出。Lolly 现在也拥有了自己的开放画布——**Layout Studio**，一个直接操作的自由画布——但与 Canva 那一列有一个决定性的区别：放置在画布上的颜色、字体和素材都遵循品牌全局设定，因此即便是自由排布也依然保持约束优先。Lolly 仍然**不是**一个无约束的设计套件；设计师仍会使用 Illustrator 和 Figma 完成定制化工作——而当这些工作需要变成一项受治理、可复现的资产时，Layout Studio 的[导入设计](/info/design-import.html)功能可以将完成的 Figma/Illustrator/Penpot 文件导入画布，成为可编辑、遵循品牌规范的元素框。

## 适用场景

![Deck Studio in the split view - the deck's slides listed as blocks on the left, the laid-out deck rendering on the right](/t/url-shot?url=%2F%23%2Ftool%2Fdeck-studio&width=1440&height=900&dpi=192&waitMs=2600&format=svg&filename=ov2-deck-studio-output)

Deck Studio 很能说明这里的上限有多高：一整套幻灯片以数据的形式声明，在画布上实时排布，最终导出为原生可编辑的 PowerPoint。

- 快速生成可运营化的创意素材（活动图块、徽章、签名、提醒）
- 在开放画布（Layout Studio）上自由排布——前提是颜色、字体、图标、图片等元素必须始终遵循品牌全局设定
- 将完成的 Figma、Illustrator、InDesign 或 Penpot 设计导入（通过 Layout Studio 的"导入设计"功能），使其可以被编辑、治理，并以确定性方式重新渲染为 Lolly 支持的各种格式
- 一对多的"填三个字段，得到成品"流程——包括在 `/pro` 批量网格中从电子表格/CSV 批量运行（粘贴或导入行数据，每行生成一个成品，打包为 zip 下载）
- 持续运行、周期性产出的品牌化内容
- 品牌表达的集中管控比表达自由度更重要的场景

## 不适用场景

- 定制或旗舰级主视觉内容（广告牌、大型视频）
- 真正需要设计师参与的独特营销活动作品
- 需要完全跳出品牌体系的创意构思——Lolly 的开放画布仍然会让颜色、字体和素材遵循品牌全局设定，而这正是其意义所在

## 批准工具，而不是文件

![The producer's whole job: type the words. Type, colour and spacing were settled when the tool was approved](/t/url-shot?url=%2F%23%2Ftool%2Fwordmark%3Ftext%3DApproved&width=1440&height=900&dpi=192&waitMs=2000&format=svg&filename=aud-approve-the-tool)

这一格局中的其他工具产出的都是*文件*，而文件事后必须被审核——品牌负责人在 Slack 里过一遍，法务盯免责声明，改一轮，再审一次。Lolly 把批准**往上游挪了一步**。品牌规则——精确的十六进制色值、有授权的字体文件、出血边距、间距——都被写死在工具的 HTML 和 CSS 里，因此模板*在物理上不可能*产出不符合品牌的素材。版式本身就是承重结构。

于是你不再批准产物，而是开始批准生产它们的那个**工具**。批准一次，它此后产出的每一份素材就都因构造而预先获批——不需要人在环节里，不需要审核周期，无论量有多大。

这才是确定性引擎真正带来的范式转变：它不是把旧的批准流程跑得更快，而是把流程取消了。对创意团队来说，它是护栏，不是替代品——球还是你来投（数据、文案、图片），代码只是保龄球道两侧的挡板，让每一次投掷都不会掉进沟里。

| 旧方式：批准素材 | Lolly 方式：批准工具 |
|---|---|
| 每一份成品文件都要逐个审核 | 工具只审核一次 |
| 提需求 → 设计师制作 → 品牌审核 → 法务检查 → 修改 → 再审 | 改一个参数 → 成品素材 |
| 设计师、品牌负责人、法务和需求方全都被卷进来 | 产出方一个人就够了 |
| 每份素材要花好几天 | 每份素材只要几秒 |
| 10,000 份素材 = 10,000 轮审核 | 10,000 份素材 = 零轮（模板早已获批） |

## 独有价值

![Amsterdam's canal rings and road network drawn edge to edge in the brand's own ink, every stroke placed by the template rather than by hand](/t/url-shot?url=%2F%23%2Ftool%2Fstreet-map%3Fcity%3Damsterdam%26theme%3Dlight%26full&width=1440&height=900&dpi=96&waitMs=3200&walker=1&format=svg&cropSelector=%23tool-canvas&filename=ov2-street-map-poster)

- **在受控情境中安全释放大胆的设计潜力。** 工具可以在硬编码的护栏内表达大胆的设计理念。
- **软件定义的内容自动化，直接产出最终素材。** 输入 → 成品文件。不再需要"从设计工具中导出后再做后期处理"。
- **工具可以组合工具。** 一个工具可以嵌入另一个工具的渲染结果，并将其作为单个成品素材的一部分返回，工具之间没有代码耦合——这是现有格局中，无论是开放画布产品还是 DAM 模板化产品都不具备的基础能力。
- **供应商中立。** 完全掌控功能与成本。开源引擎。工具和素材是受 git 追踪的内容，而非被锁定在某个 SaaS 数据库中。

其中第一点最容易被低估：一张海报级别的城市地图，道路与水域都是真正的矢量路径，而它的全部来源只是一个下拉菜单和两个颜色字段——这两个字段还不可能指向品牌之外。
