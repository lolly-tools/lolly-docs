# 使用 Lolly

一份實際教你*使用*本應用程式的指南：開啟工具、操作畫布、匯出、儲存與分享。這裡的一切都在**你的裝置上**執行：不需要帳號、不需要上傳，首次載入後也不需要網路連線。

> 第一次使用嗎？[快速上手](/info/quickstart.html)讓你在幾分鐘內就能開始動手做，[Lolly 給維運人員](/info/operators.html)則說明如何安裝與部署本應用程式；本頁談的是開啟之後怎麼操作。

## 開啟工具

首頁就是**工具庫**：所有工具依類別分組。點卡片即可開啟工具；如果你先前用過，**繼續**按鈕會接續你最近一次的工作階段。用搜尋框依名稱篩選，或從六個列表畫面（工具庫、工具程式、專案、目錄、儀表板與個人資料）底部的列來[搜尋](/info/search.html)，它除了工具，也能找到你儲存的成果、目錄與設定。進入工具後，這條列會退開，讓位給工具本身的介面。

![工具庫：每個工具都是一張卡片，依類別分組](/t/url-shot?url=%2F%23%2F&width=1440&height=900&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&tolerance=0.03&waitSelector=.gallery-view%5Bdata-shots-settled%5D&walker=1&format=svg&localize=1&dark=1&filename=gallery&try=1)

每個工具都是分割畫面：一側是**控制項**，另一側是即時**預覽**（畫布）。變更任何控制項，預覽都會立即更新。

![工具的分割畫面：左側是控制項堆疊，右側是它即時繪出的分組長條圖](/t/url-shot?url=%2F%23%2Ftool%2Fd3%3Fct%3Dbar%26t%3DExample%2520data%26st%3DSample%2520values%252C%2520not%2520a%2520real%2520dataset%26d%3DMonth%252CSeries%2520A%252CSeries%2520B%252CSeries%2520C%250AJan%252C12%252C9%252C5%250AFeb%252C18%252C14%252C7%250AMar%252C24%252C17%252C11%250AApr%252C29%252C23%252C15%26lg%3D1&width=1440&height=900&dpi=192&waitMs=2500&walker=1&format=svg&dark=1&filename=vt-tool-split-view)

> 少數工具（例如 **Design**）會改以**自由畫布**開啟：一個沒有邊框、可直接操作的介面，你可以拖曳、縮放、旋轉並貼齊文字、形狀與圖片方塊，也能雙擊就地編輯文字。它與其他所有工具走同一條算圖路徑匯出，因此畫布*就是*檔案。見下方的[自由畫布](#the-free-canvas-design)。

有兩種方式可以把這片格狀清單調整成你要的樣子：

- <!--i:star--> **把常用的加星號。** 在卡片上按 ★，它就會在格狀清單上方的橫排中獲得一塊專屬大方塊，見[你的最愛](/info/favourites.html)。
- <!--i:eyeoff--> **把從不使用的工具隱藏起來。** 在卡片上按右鍵（或選取多個後使用選取列）→ **隱藏工具**。它會離開格狀清單，也不再出現在格狀清單的輸入搜尋結果中；最末端一塊灰色的**顯示隱藏的工具 (N)** 方塊可以把它們變暗顯示出來，每一個的選單裡都有**取消隱藏工具**。隱藏只影響你的格狀清單：該工具仍然可以從已儲存的連結或書籤開啟，對其他人來說也完全維持原狀。

![工具格狀清單的末端，隱藏的工具已顯示出來：變暗的 QR Code Generator 卡片，以及旁邊那塊把它切回可見狀態的灰色方塊，現在寫著 Hide hidden tools](/t/url-shot?url=%2F%23%2F&width=1440&height=680&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&drive=click%3A%5Bdata-select%3D%22qr-code%22%5D%3Bclick%3A%5Bdata-bulk%3D%22hide%22%5D%3Bwait%3A300%3Bclick%3A.gtile--hiddenbox%3Bpress%3AEnd%3Bwait%3A800&waitSelector=.gallery-view%5Bdata-shots-settled%5D&walker=1&format=svg&rasterDpi=96&dark=1&filename=misc-hidden-tools)
<!--
SHOT NOTE (misc-hidden-tools): the trailing `press:End` is required. The
hidden box and the revealed cards live at the very END of the grid, and
clicking the box runs applyView(), which re-lays the grid out and drops the
scroll back to the top - so without it the frame published the TOP of the
gallery under a caption about its bottom. `press:` with no `on=` goes to the
keyboard, and the End key with focus on the just-clicked box scrolls the
document; the walker then anchors the body walk to that band.
The tile reads "HIDE hidden tools" in the shot, not "Show" - it is a toggle and
the recipe has just pressed it. The alt says so rather than quoting the resting
label the prose above already gives.
There is no standalone per-card "hide" button
(unlike the always-visible fav/pin corner icons) - Hide only exists inside a
tile's right-click menu or the bulk bar, both confirmed in views/gallery.ts.
The recipe goes the bulk-bar route since it needs no `|right` context-menu
step: tick the card (`[data-select="qr-code"]`, the same checkbox hook the
selection bullet under Projects uses), click the bar's Hide button
(`[data-bulk="hide"]` - the literal `data-bulk` value bulkBarHtml() writes,
confirmed in lib/bulk-bar.ts), then click the grey reveal tile
(`.gtile--hiddenbox`, confirmed in gallery.ts).
-->

### Ask Lolly

與其翻找，不如直接問：**Ask Lolly**（`#/ask`）接受你輸入的問題，並把本說明文件中相符的段落**原文**交還給你，是指南本身的原話，不是摘要，也不是生成內容，並註明出處頁面，旁邊附上 **Open in docs**（在文件中開啟）連結。答案下方是應用程式中同樣符合這個問題的位置：一個工具、一項設定、一個已儲存的專案，各自是一顆直接帶你過去的按鈕。

對話紀錄只是這次工作階段的記憶：追問下去，串接會逐步累積，重新載入後則從頭開始。搜尋結果底部會有一列 **Ask Lolly：*你的查詢***，位在其他分組找到的具體結果之下，點下去就把問題直接交過來，因此你可以從搜尋列開始，在這裡收尾。

## 畫布（預覽）

預覽永遠精確呈現匯出後的樣子。

**桌機**

- **縮放：** Cmd/Ctrl + 捲動，或在觸控板上雙指縮放，縮放會以你的指標為中心。
- **平移：** 按住 **Space** 拖曳，或用**滑鼠中鍵**拖曳。（一般點擊仍然保留給點選設計中的元素。）
- **鍵盤：** `0` = 符合視窗 · `1` = 100% · `+` / `−` = 縮放。
- **縮放 HUD：** 角落那個小小的 `−  NN%  +  Fit` 控制項。點百分比可在符合視窗 ↔ 100% 之間切換。

![畫布角落的縮放 HUD：減號、即時百分比、加號、Fit，接著是主題與音效切換](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&css=.stage-nav%7Bopacity%3A1!important%7D&cropSelector=.stage-nav&walker=1&format=svg&dark=1&filename=use-zoom-hud)

**觸控**

- **雙指縮放**可縮放，**拖曳**可平移，**點兩下**回到符合視窗。

**點一下就跳到對應的控制項：** 點設計中的任何元素，側邊欄裡對應的輸入項就會取得焦點並捲入視野；若是重複列群組，它會展開你點到的那一列，因此要編輯眼前看到的東西只差一下點按。

只要改變尺寸，畫面一律會回到乾淨的符合視窗狀態。

### 自由畫布（Design）

自由畫布類的工具會在畫板*周圍*加上一塊工作區，就像設計師的桌上檯面：

- **畫布外的暫存區。** 把方塊拖出畫框邊緣，它仍然完全**可見且可選取**：安排構圖時可以先把元素放到旁邊擱著，之後再拖回來。畫框外的一切都會**輕輕淡化**，讓匯出範圍一眼就分得出來，畫框則保留陰影，明確標出檔案從哪裡開始。
- **只有畫框內會匯出。** 匯出的檔案以畫板為界：留在外面的任何東西（或方塊超出邊緣的那一部分）都會直接從輸出中裁掉，點陣與向量格式都一樣。
- **縮到比 Fit 更小**（最小到 20%），當你把東西擱在離畫框很遠的地方時，可以看到整片檯面。
- **可調整大小的畫板。** 變更匯出尺寸會就地調整畫框大小；方塊的位置保持不變，因此你可以圍著既有內容重新取景。

![Design 的自由畫布：畫板與其周圍的檯面](/t/url-shot?url=%2F%23%2Ftool%2Fdesign%3Ftemplate%3D__blank__&width=1440&height=900&dpi=192&waitMs=2000&walker=1&format=svg&localize=1&dark=1&filename=design)

### 畫出自己的形狀（鋼筆）

方塊、圓形與圓角框足以應付大多數版面。需要清單裡沒有的形狀時，就自己畫：工具列的**鋼筆**按鈕（或 `P` 鍵）會讓你進入繪製模式。三個單鍵在模式之間移動：**`V`** 回到指標、**`P`** 是鋼筆、**`N`** 是節點工具（**編輯節點**），而指標永遠是離開目前狀態的出口。

![自由畫布的工具列：拖曳握把、Lolly 選單，接著是指標、新增方塊、鋼筆、編輯節點、線條、時間軸、畫板與自動排列](/t/url-shot?url=%2F%23%2Ftool%2Fdesign%3Ftemplate%3D__blank__&width=1440&height=900&dpi=192&waitMs=2600&css=.fc-toolbar%7Bopacity%3A1!important%7D&cropSelector=.fc-toolbar&walker=1&format=svg&dark=1&filename=pen-editor-rail)

- **點一下**放下一個節點。在預設的曲線類型下，**點下並拖曳**會拉出該節點的控制桿，這就是畫出曲線而非角點的方法；按住 **Alt** 再點則會得到硬角。（其他曲線類型下，每個放下的節點都是角點，拖曳沒有作用；見下方的**曲線類型**。）
- 放置節點時會貼齊畫板與你其他的方塊，並畫出與一般拖曳相同的參考線。繪製時按住 Alt 會抑制格線，之後拖曳節點時則同時抑制格線與邊緣。
- **點你的第一個節點**即可閉合並一次完成。否則按 **Enter**、雙擊，或直接切換工具，繪製的內容會保留，不會丟掉。
- **Escape** 一次退一階：第一次按會放棄這次繪製、什麼都不寫入，再按一次則離開鋼筆。
- 繪製過程中按 **Delete** 會移除你最後放下的節點。

結果就是畫布上一個普通的方塊。移動、縮放、旋轉、群組、對齊、調整堆疊順序，給它填色、漸層、陰影或不透明度都行：路徑的行為和其他所有方塊一樣，這些控制項不會對它另眼相待。

它出場時也已經上好色。你畫的第一條路徑會採用品牌給路徑的填色與筆畫，之後每一條新路徑則採用**你上次用的設定**：填色設一次就繼續畫，不必每個形狀都重新上色。（若某個工具的品牌沒有為路徑指定任何設定，畫出來的路徑會以你繪製時看到的顏色描邊，所以絕不會是隱形的。）

**再次編輯節點。** 雙擊該形狀（或用物件列上的**編輯節點**），節點就會回來。拖節點可移動它，拖控制桿可改變方向，在曲線上任一處點一下可插入節點，框選一組節點後按 Delete 可刪除選取的節點。路徑至少會保留兩個節點，所以你不會不小心把它刪到不存在。

**曲線類型**決定通過你節點的是哪一種曲線，這是值得弄懂的選擇：

| 類型 | 作用 |
|---|---|
| **平滑（自動）** | 預設值。自行算出控制桿長度，因此單純點、點、點就能得到真正平滑的曲線，不必和控制桿搏鬥。若你確實設定了控制桿，它會固定*方向*，長度仍由曲線自己掌握。 |
| **貝茲控制桿** | 經典的鋼筆。控制桿就是控制點，插入節點永遠不會移動曲線。 |
| **通過節點** | 精確通過你放下的每一個節點，沒有控制桿。 |
| **B-spline** | 靠近節點而不通過節點，形狀更柔和。 |
| **直線** | 折線。 |

把既有路徑切換成會自行決定控制桿的類型時會先詢問，因為你設定的控制桿長度無法還原；切換到**貝茲控制桿**則一律不會有損失。繪製途中不會詢問：切換會直接套用到草稿上，你已經拉出的控制桿也會跟著改變。在自行掌管控制桿的類型上，插入節點會讓曲線的形狀略微改變；**貝茲控制桿**則不會。

每個節點也帶有一條連續性規則，從它在畫布上的形狀就看得出來：方形是**角點**（控制桿各自獨立），圓形是**平滑**（控制桿保持共線），圓形加一圈是**對稱**（共線且等長）。為任何選取的節點設定它，曲線會立刻重新滿足這條規則。

![兩條直接從連結算圖出來的鋼筆路徑：一條描邊的 S 形曲線，以及一個閉合填色的團塊](/t/url-shot?url=%2F%23%2Ftool%2Fdesign%3Fboxes%3D%5B%7B%22id%22%3A%22paper%22%2C%22kind%22%3A%22box%22%2C%22x%22%3A0%2C%22y%22%3A0%2C%22w%22%3A1080%2C%22h%22%3A1080%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23ffffff%22%7D%2C%7B%22id%22%3A%22curve%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A140%2C%22y%22%3A180%2C%22w%22%3A800%2C%22h%22%3A420%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%22%2C%22stroke%22%3A%22%234f84ba%22%2C%22strokeW%22%3A14%2C%22path%22%3A%221!cubic!0_.02!.85!!!.25!-.45!s_.5!.5!-.22!.32!.22!-.32!y_.98!.12!-.25!.45!!!s%22%7D%2C%7B%22id%22%3A%22blob%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A340%2C%22y%22%3A620%2C%22w%22%3A400%2C%22h%22%3A320%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23d1e7ff%22%2C%22stroke%22%3A%22%234f84ba%22%2C%22strokeW%22%3A6%2C%22fillRule%22%3A%22nonzero%22%2C%22path%22%3A%221!catmull-rom!1_.5!0_1!.42_.78!1_.22!1_0!.42%22%7D%5D&width=1440&height=900&dpi=192&waitMs=2600&cropSelector=%23tool-canvas&walker=1&format=svg&dark=1&filename=pen-path-geometry)

畫出來的路徑和其他一切一樣會跟著連結走，因此你畫的形狀能從分享連結重新開啟，也能從 CLI 算出一模一樣的結果。它完全不依賴編輯器。

### 合併形狀（路徑運算）

選取兩個以上的形狀，在畫布上**按右鍵**（觸控是雙指輕點），選單就會提供你在繪圖軟體中會預期的那些運算：

- **聯集**把它們合併成一個形狀，沿用最上層那個的塗色。
- **減去**從最下層的形狀中挖掉上方的一切。
- **相交**只保留重疊處。
- **排除**保留重疊以外的一切。

另外三項作用在單一形狀上：**筆畫轉外框…**把筆畫變成同一輪廓的填色形狀（想把粗細原樣保留下來時很有用），**位移路徑…**把輪廓往外撐大，或用負值往內縮小，而**簡化**會用較少的線段重建同樣形狀的路徑。

![一彎新月與一個有真正孔洞的環，兩者都由減去運算做出](/t/url-shot?url=%2F%23%2Ftool%2Fdesign%3Fboxes%3D%5B%7B%22id%22%3A%22paper%22%2C%22kind%22%3A%22box%22%2C%22x%22%3A0%2C%22y%22%3A0%2C%22w%22%3A1080%2C%22h%22%3A1080%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23ffffff%22%7D%2C%7B%22id%22%3A%22crescent%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A120%2C%22y%22%3A330%2C%22w%22%3A374%2C%22h%22%3A400%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%234f84ba%22%2C%22path%22%3A%221!cubic!1_.750491!.957645!-.128211!-.062578!-.065985!.027232!c_.534759!1!.076762!!-.295339!!c_0!.5!!.276142!!-.276142!c_.534759!0!-.295339!!.200102!!c_1.000984!.254923!-.09169!-.152161!-.021205!-.003239!c_.935829!.25!.022185!!-.221505!!c_.534759!.625!!-.207107!!.14459!c%22%7D%2C%7B%22id%22%3A%22ring%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A580%2C%22y%22%3A330%2C%22w%22%3A400%2C%22h%22%3A400%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%234f84ba%22%2C%22fillRule%22%3A%22nonzero%22%2C%22path%22%3A%221!cubic!1_1!.5!!-.276142!!.276142!c_.5!1!.276142!!-.276142!!c_0!.5!!.276142!!-.276142!c_.5!0!-.276142!!.276142!!c*1!cubic!1_.5!.7!-.110457!!.110457!!c_.7!.5!!.110457!!-.110457!c_.5!.3!.110457!!-.110457!!c_.3!.5!!-.110457!!.110457!c%22%7D%5D&width=1440&height=900&dpi=192&waitMs=2600&cropSelector=%23tool-canvas&walker=1&format=svg&dark=1&filename=path-ops-boolean-result)

結果是一條新的路徑，你可以繼續用鋼筆編輯。孔洞是真正的孔洞：筆畫面板上的**填滿規則**控制項決定重疊的輪廓是要填滿（*non-zero*）還是穿透（*even-odd*）。

這些運算刻意不做兩件事。它們**寧可拒絕，也不破壞**：要求兩個不重疊的形狀相交，它會告訴你沒有東西可以保留，而且什麼都不會變。另外，文字與圖片方塊沒有可用的輪廓，因此會維持原狀，而不是用外框去近似。合併的結果會以單純的貝茲曲線儲存，繪圖軟體也是這麼做的：原本的曲線類型不會在運算後留存。

## 時間軸（Sequence Studio）

**Sequence Studio** 為自由畫布加上*時間*。每個方塊都可以在某個時刻開始、持續一段長度，並帶進場與出場動畫，而停靠在畫板下方的時間軸就是你安排它們的地方。一開啟就已經有一段序列在播放：一張標題卡、一段片段、一張結尾卡、一條下方字幕條與一段配樂，因此你還沒改動任何東西，就能看見整個模型。

![Sequence Studio 的時間軸：播放控制、尺規、一條疊加軌道、帶有片段與接縫標籤的磁性序列列，以及全程顯示區](/t/url-shot?url=%2F%23%2Ftool%2Fdesign%3Fz%3D11dZBb5swFADgX8MOiRYZB0J76GFpNO2wnbr7ZMwDrBg7s01C8usngmNwSqJszaT2aD8_G54_PUgJXRdK1iJ7CvAcpSHG6FMqG9BPQbwMkmWAMcsCjIP5lwDjUsp1O8DPAcZrJvpIKhsXaLpZ1I323mjXjcJHbCdKO4Ee7ISSxsvQJdmAO0cBNe6gtHDzQbKkkks101ARYRidaaBSZETtg2TlMgw0xuX8LBXANCN7PTVyWki3Kr-6b61yQmG4ay6FeWEHOL1K1E0TzgrhdqIgDCiXs_WjFcsyDi66A1aU_ZMuEPIOcwFNhHYRzgR8GySGs9CW0BDlFzWrVTe2qdCwftOcZP2TtJEfuovFyKZzIvor0fD7WKhVGzsXo2ALhH8UMxvFqmtiXmQFpmSimArYBfGzYHpKZcVEcS87-OHedpK72cHndmYWunu6rtxM-3wuwGqTXskacov-nhs15KNYG7HgWZtMvpNa0LJtUJNJi-2rYhnZ3ybtuNUVZuj9MotOrAbQFmPQbuB0uxwud4NX9-ycrmWIJw59Pg9h5AF6RGd-5vgWPhvG-2b5xs8bl5zvZ0ZK3tf_bd0pxu_lw2YDG2Jv6VRdj9Hi__WrKB7pV3OELuBKIRunReqM9f8d1tbnKPFsJVHs2Zqf9SaMLrSmASCjiNAbokD0lD0t_95Wxu-MVaQ4uT6WQ8ta0V46Z6lq9br1fVEOh7ypju-FFyjBC7fmVy0UaMm3YBcbVYMt-dhfTlUbe2BOuD6ujFd_AA&width=1440&height=900&dpi=192&waitMs=7000&waitSelector=.tl-clip&css=.tl-panel%7Bheight%3A252px!important%7D&cropSelector=.tl-panel&format=svg&walker=1&tolerance=0.03&dark=1&filename=seq-studio-timeline)

有兩種列，而兩者的差別正是整個構想所在：

- **序列列**具有*磁性*。片段一個接一個緊貼排列，沒有空隙，拖動其中一個會重新排序，而不是留下一個洞。刪掉一個片段，其餘的會自動靠攏。這是你的主幹。
- **疊加軌道**則是自由的。下方字幕條、標誌、字幕，任何以自己的時間浮在主幹之上的東西，都會有自己的軌道與自己的起點。
- 在那之下，**全程顯示**收納完全沒有時間設定的方塊：整段期間都存在的佈景。標籤上的 `+` 可以把其中一個提升到軌道上；**設為全程顯示**則把它送回去。

![整個編輯介面：畫板、工具列與時間軸一起](/t/url-shot?url=%2F%23%2Ftool%2Fdesign%3Fz%3D11dZBb5swFADgX8MOiRYZB0J76GFpNO2wnbr7ZMwDrBg7s01C8usngmNwSqJszaT2aD8_G54_PUgJXRdK1iJ7CvAcpSHG6FMqG9BPQbwMkmWAMcsCjIP5lwDjUsp1O8DPAcZrJvpIKhsXaLpZ1I323mjXjcJHbCdKO4Ee7ISSxsvQJdmAO0cBNe6gtHDzQbKkkks101ARYRidaaBSZETtg2TlMgw0xuX8LBXANCN7PTVyWki3Kr-6b61yQmG4ay6FeWEHOL1K1E0TzgrhdqIgDCiXs_WjFcsyDi66A1aU_ZMuEPIOcwFNhHYRzgR8GySGs9CW0BDlFzWrVTe2qdCwftOcZP2TtJEfuovFyKZzIvor0fD7WKhVGzsXo2ALhH8UMxvFqmtiXmQFpmSimArYBfGzYHpKZcVEcS87-OHedpK72cHndmYWunu6rtxM-3wuwGqTXskacov-nhs15KNYG7HgWZtMvpNa0LJtUJNJi-2rYhnZ3ybtuNUVZuj9MotOrAbQFmPQbuB0uxwud4NX9-ycrmWIJw59Pg9h5AF6RGd-5vgWPhvG-2b5xs8bl5zvZ0ZK3tf_bd0pxu_lw2YDG2Jv6VRdj9Hi__WrKB7pV3OELuBKIRunReqM9f8d1tbnKPFsJVHs2Zqf9SaMLrSmASCjiNAbokD0lD0t_95Wxu-MVaQ4uT6WQ8ta0V46Z6lq9br1fVEOh7ypju-FFyjBC7fmVy0UaMm3YBcbVYMt-dhfTlUbe2BOuD6ujFd_AA&width=1440&height=900&dpi=192&waitMs=7000&waitSelector=.tl-clip&css=.fc-toolbar%7Bopacity%3A1!important%7D&format=svg&walker=1&tolerance=0.03&dark=1&filename=seq-studio-stage)

開啟時間軸就等於把鍵盤交給它，因此 Space 與方向鍵驅動的是播放磁頭，而不是頁面；又因為在已經帶有時間設定的作品上它會自行開啟，所以 Sequence Studio 一載入就是如此。

> **[序列編輯器](/info/sequence-editor.html)**更深入說明四件決定「在時間上編輯」是否好預測的事：畫布上的一次點按會編輯到哪個片段、相鄰片段的洋蔥皮殘影、分割的作用範圍與能還原剪接的接合，以及修剪（含鍵盤操作）。時間軸取得焦點時按 `?` 可叫出快速鍵表。

**編輯。** 拖片段的中間可移動或重新排序，拖在任一端幾個像素之內可修剪，按**在播放磁頭處分割**（或 `S`）可把一個片段切成兩個。分割需要片段有實際的**長度**，而且播放磁頭要落在它裡面一小段距離，因此沒有結束時間的片段（配樂就是一例）無法分割。**貼齊邊緣**預設開啟，會貼齊片段邊緣、播放磁頭與整秒，按 Alt 可暫時取消。每次拖曳都是單一個復原步驟，而拖曳預覽採用與實際提交相同的算法，所以拖曳時看到的就是結果。

選取片段後，檢視器會以數值提供同樣的編輯：**長度**、**裁修起點**（從來源的多深處開始）、**速度**（從 ×0.25 到 ×4 的一組固定倍率）、**進場動畫** / **出場動畫**及其長度，以及**將片段靜音**。磁性列上的片段刻意沒有**開始**欄位：順序由該列掌管，所以要移動就用拖的。

**轉場**是預設效果，不是關鍵影格：淡入淡出、彈出、放大、上升、落下、四種滑入、放大與縮小、傾斜、俯衝、旋轉、飄移，或**硬切（無動畫）**。距離會隨物件大小縮放，因此同一個預設在滿版卡片與小徽章上都讀得對。序列列上兩個相鄰片段之間有一個**接縫標籤**：點它並選擇**硬切**或**交叉淡入淡出**，會立即套用並關閉。再開啟同一個標籤可以改**長度（毫秒）**，然後按**完成**。交叉淡入淡出會存成前一段的淡出加下一段的淡入，匯出時再從這一對推導出真正的溶接，這就是為什麼預覽裡看起來像兩次淡化，在檔案裡卻是真正的交接。

**聲音。** 加入一段**音訊**片段，它就和其他片段一樣活在時間軸上：波形、修剪、靜音。（預設工作階段附帶的生成配樂是唯一的例外，它在匯出時才合成，所以在你算圖之前，它的長條都是素面而且沒有聲音。）按麥克風可直接在時間軸上**錄製旁白**，附有預備計數與音量表，錄好的內容會存成你自己的素材，放在你開始錄的位置。音樂、對白與片段本身的聲音都會進入匯出的混音。（匯出面板的**音訊軌**是另一回事：鋪在整段影片底下的單一配樂，帶有淡化與閃避。兩者可以並存。）

**算圖。** 動態匯出是一次**確定性的合成**，不是螢幕錄影：每一格都在精確的時間點解碼、繪製與編碼，因此檔案不取決於你的機器跟不跟得上，MP4 或 WebM 在實務上也沒有影格數上限。除非你自己輸入，否則時間軸本身的長度就決定片長。Content Credentials 會像其他任何匯出一樣蓋上。靜態匯出給你的是播放磁頭處的那一格，或是用輸出尺寸旁的**影格**欄位一次做出整張連拍表，見[匯出](/info/exporting.html#stills-from-a-timed-composition)。

有幾項限制要記得：一段序列上限為一小時，GIF 與動態 PNG 會把影格緩衝起來，所以長度得短；速度不是 ×1 的片段沒有聲音（目前還沒有時間伸縮），而**即時錄製**在這裡被隱藏，因為合成器是更好的路徑。

**超越預設：關鍵影格、景深與攝影機。** 轉場處理的是片段進場與離場時的動畫。若要在片段*之內*擺布一個方塊，讓它飄移、淡化、模糊、抬離頁面再落回去，就加上關鍵影格：選取片段，按 **+關鍵影格**（時間軸工具群中的菱形、畫布物件列上的菱形，或 `K`），播放磁頭的位置決定你下一次編輯寫進哪一個姿態。同一套機制也讓每個有時間設定的作品擁有一台會推近、橫搖與變焦的**攝影機**，並把一張平面的 SVG 變成一疊你可以穿梭其間的圖層。**[動畫](/info/animating.html)**是完整的指南。

Design 工具有同一條時間軸，因此你不必換到別的工具就能為版面設定時間，而且它也能匯出動態。

## 簡報播放

由**畫板**組成的 Design 文件本身就是一份簡報。開啟工具列上的 **Lolly 選單**，選擇最後一列的**簡報播放**，每個畫板就會變成一張全螢幕投影片，順序依畫板在畫布上的排列而定。簡報跑的是已算圖畫板的副本，因此底下的編輯器完全不會被動到，離開時你會回到原來的位置。

- **前進**用 **Space**、`→`、**Page Down**，或點螢幕右緣的長條；後退用 `←`、**Page Up** 或左緣的長條。**Home** 與 **End** 跳到第一張與最後一張。只要移動指標，一小排控制項就會淡入，停下之後又會自己隱藏。
- **總覽**（`O` 或格狀按鈕）把每個畫板依你在畫布上的排列一次攤開；點其中一個即可開啟。
- **分段顯示。** 在方塊上按右鍵，選**在第 1 步顯示**、**2** 或 **3**，取代預設的**一直顯示**。該方塊就會等到你前進到它那一步才出現，所以一張投影片可以分段抵達；共用同一個編號的方塊會一起出現。
- **講者檢視**（`S`）會開啟第二個視窗，顯示目前這張投影片、下一張、你為該張寫的備忘稿與一個計時器。若瀏覽器擋下彈出視窗，它會退回成疊在簡報上的面板。備忘稿是逐一畫板設定的，永遠不會出現在投影片上。
- `B` 維持黑畫面（按任意鍵就回到投影片），`F` 回到全螢幕，**Escape** 一次剝一層：從總覽回到簡報，從簡報回到編輯器。
- **展場模式。** 給畫板一個**長度**，簡報就會在那裡停留那麼久，然後在一條細細的進度條後自行前進；`K`（或暫停按鈕，只有在有東西設了長度時才會出現）可以停止與重新開始。在連結後面加上 `loop`，簡報播到最後會繞回開頭，這就是它能當數位看板的原因。

簡報同時也是一個連結。`?present` 會直接開進簡報，`s=` 指名投影片：一個位置、一個畫板 id，或用 `id.step` 指到某個分段步驟，而網址會隨你移動更新，因此你送出的就是你正看著的那一張。工具作者請注意：這些參數記載於 [URL Mode](/info/url-mode.html#reserved-parameters) 頁面。

## 在手機上

在窄螢幕上，版面會重排成單欄：

- **控制項會變成頂端的一張面板**，下緣有一個**拖曳握把**。拖握把可以調整大小，它會貼齊**露出一角／一半／全滿**，或**輕點**握把在收合 ↔ 展開之間切換。預覽填滿下方的空間，編輯時始終看得見。
- 浮動的**匯出**按鈕會開啟匯出面板：格式、尺寸、複製、儲存與下載等控制項全在同一處。點背景即可關閉。

![手機寬度螢幕上的工具：控制項是頂端的面板，生成的色盤填滿下方預覽，算圖膠囊浮在底部中央](/t/url-shot?url=%2F%23%2Ftool%2Fcolor-palette%3Fseed%3Df97316%26harmony%3Dadjacent-3%26steps%3D9&width=430&height=900&dpi=192&waitMs=2200&walker=1&format=svg&dark=1&filename=vt-phone-palette)

## 控制項（輸入項）

工具只開放本來就該變動的輸入項，其餘一切（色彩、版面、字體排印、邏輯）都由工具作者鎖定，因此你做出來的東西一定符合作者設下的規則。輸入項包括文字、滑桿、選色器、下拉選單、日期、圖片選擇器與重複列群組。有些會收在可收合的區塊裡。

![工具的控制項堆疊：一個文字欄位、幾個顏色觸發器與一支滑桿，作者選擇鎖定的其他一切都不在這裡](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&cropSelector=%23tool-inputs&walker=1&format=svg&dark=1&filename=use-tool-inputs)

**重設：** *清除變更*會把每個輸入項還原成預設值。

### 復原與取消復原

**Cmd/Ctrl-Z** 往回一步，**Cmd/Ctrl-Shift-Z**（或 **Cmd/Ctrl-Y**）再往前一步。同一組也是控制項上方那一列的**復原**與**取消復原**按鈕，在自由畫布上則位於工具列，各自在沒有東西可收回時變灰。每一步都會說出它是什麼：復原一個顏色，會有一則小訊息指出它剛還原的是哪個輸入項，裡面還帶一顆**取消復原**按鈕讓你走回去。

- **一次拖曳算一步。** 半秒內對同一個控制項的連續變更會合併起來，所以把滑桿從頭拉到尾只是一次復原，而不是兩百次。
- **保留最近 100 步**，更舊的會從尾端掉出去。復原之後再做新的編輯，會清掉往前的堆疊，這一點和其他地方一樣。
- **當游標在文字框裡時**，Cmd/Ctrl-Z 屬於欄位本身，逐字元進行。Lolly 只接管本身沒有可用復原的控制項：滑桿、下拉選單、顏色與開關。
- 在 **file** 輸入項中**選擇檔案**不算一步，那些位元組只在這次工作階段中保留，所以沒有東西可以還原。

在即時[協作](/info/collaborate.html)中，歷史紀錄仍然只屬於你。從另一台裝置傳來的變更永遠不會落到你的堆疊上，因此復原只可能收回你自己做過的事。

## 你的個人資料與大頭照

**個人資料**（工具庫右上角）存放你的姓名、聯絡方式與選用的**大頭照**。需要這些欄位的工具會自動預先填入：設定一次，你的電子郵件簽名檔、標誌組合與識別證就會自己填好。你仍然可以在個別工作階段覆寫任何欄位。開啟**使用我的資料來建立**，你的資料就會以作者身分跟著匯出的成品一起走。

你的大頭照與個人資料**只存在這台裝置上**。個人資料也不一定只代表你本人，它可以是一個團隊，或你偶爾扮演的一個角色。完整說明（包括同時保留多份）見 **[個人資料](/info/profile.html)**。

## 儲存與接續

按**儲存**可把目前的輸入項存成該工具的一個工作階段。每個工具都可以保留多個具名的工作階段；每個工具的**繼續**按鈕會重新開啟你最近的一個，而**歷史按鈕**（右上角，個人資料旁邊）會列出所有工具中每一個已儲存的工作階段。工作階段只存在本機裝置。要整理它們，請開啟**專案**（見下文）。

![分成兩半的算圖膠囊：一個向上箭頭開啟匯出面板，一個勾號就地儲存工作階段](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&css=%23tool-inputs%7Bdisplay%3Anone%7D&cropSelector=.render-pill&walker=1&format=svg&dark=1&filename=use-render-pill)

## 專案

**專案**（從**工具**旁邊的**專案**分頁開啟，或從**個人資料 → 儲存空間 → 在專案中整理**進入）是你所有已儲存內容的家，用起來就像檔案管理員：

![專案：已儲存的工作階段整理在可巢狀的資料夾中](/t/url-shot?url=%2F%23%2Fp&width=1440&height=900&dpi=192&waitMs=1200&walker=1&format=svg&localize=1&dark=1&filename=projects)

- <!--i:folder--> **可巢狀的資料夾。** 把已儲存的工作階段分到資料夾裡，資料夾裡還能再放資料夾，想放多深都行。建立資料夾、重新命名，或把方塊拖到另一個資料夾上以移動它；麵包屑可帶你走回上層。永遠存在的**未分類**資料夾收納尚未歸檔的一切。
- <!--i:clock--> **依你的方式排序。** **檢視與排序**提供**名稱**、**加入日期**、**最後修改**（預設）以及在資料夾內的**依工具**。不論使用哪種排序，資料夾一律排在最前面，排序只會在各自的群組內排列工作階段與資料夾。
- <!--i:document--> **新作品直接歸檔。** **新增資產**（在根層是「Start a fresh creation」，在資料夾內是「Add to *folder*」）會開啟一個工具，並把它的第一次儲存自動歸入該資料夾。
- <!--i:checklist--> **多選（桌機）。** 勾選方塊上的核取方塊、在空白處拖出選取框，或用 **Shift/Cmd 點按**；在方塊上**按右鍵**可叫出快捷選單。接著就能一次對整個選取範圍動作，同樣的手勢與同樣的浮動動作列在工具庫、工具程式、目錄與專案都能用，不只這裡。
- <!--i:download--> **整個資料夾或選取範圍一起算圖。** **算圖資料夾**會把資料夾中每一個已儲存的工作階段（包含子資料夾）匯出成一個巢狀的 `.zip`。**算繪選取範圍**對任何多重選取做同樣的事，而單一工作階段則直接算成它自己的檔案。不需要 Batch/Pro。
- <!--i:link--> **直接跳到某個工具的已儲存成果。** 在工具庫上勾選一個或多個工具，從選取列選**檢視工作階段**，專案就會只顯示用那些工具做的工作階段，並附一個**清除**讓你回到完整檢視。
- <!--i:link--> **分享已儲存的工作階段。** 在工作階段上按右鍵 → **分享連結**，即可複製一個以完全相同輸入項重新開啟它的連結（就是完整的分享對話框，見下文）。

![專案中開啟的「檢視與排序」浮動視窗，包含一列主題、Preview 或 List 的檢視選擇，以及排序底下的名稱、加入日期與最後修改](/t/url-shot?url=%2F%23%2Fp&width=900&height=700&dpi=192&waitMs=1400&drive=click%3A.projects-viewopts&cropSelector=.projects-viewmenu&walker=1&format=svg&dark=1&filename=misc-projects-sort)
<!--
SHOT NOTE (misc-projects-sort): trigger button confirmed as
`.filter-fab.projects-viewopts` in views/projects.ts (openViewOpts() is bound
to `.projects-viewopts` specifically) - `.projects-viewopts` alone is the
more specific hook, so that's what drives the click. The popover it opens
(`.projects-viewmenu`, also confirmed directly in openViewOpts()) is body-
appended, not nested under the Projects root, so cropSelector finds it
regardless. "By tool" only appears inside a folder - this recipe captures at
the Projects ROOT (`url=/#/p`), so if the capture pass wants "By tool"
visible too, point url= at a real folder instead: the route is a path
segment, `/#/p/<folderId>` (confirmed in main.ts's hash router - `parts[0]
=== 'p'` reads `folderId` from `parts[1]`), not a query param. Caveat: a
folder has to already EXIST in the capture profile, which a per-shot fresh
context has none of.
Also: the popover is not sort-only. openViewOpts() writes a theme segment, a
"View" pair (Preview / List) and a sound segment around the Sort rows, so the
alt text names them - do not re-caption this as "the sort menu".
-->

**選取列提供的動作**會依檢視略有不同，因為不是每個動作在每個地方都說得通：

- **工具／工具程式：** 收藏（或取消收藏）、隱藏（或取消隱藏）、可離線使用（或從離線移除）、**檢視工作階段**（上面說的那個跳轉），以及剛好選取一張卡片時的複製連結。
- **目錄：** 收藏與隱藏適用於任何選取範圍；複製、下載與刪除則只有在選取的每一項都是你自己上傳的內容時才會出現，因為共用的設計系統素材是一份永久契約，即使批次操作也不對它開放這三項。
- **專案：** **算繪選取範圍**、**移至…**、**新增資料夾**、**刪除**，選取範圍是二到八個單一工具的工作階段時還有**一起編輯**（把它們並排開啟在一個合併的側邊欄之下），以及 **Edit as sheet**（以表格編輯），它改為把整個選取範圍以列的形式開在批次格線中。後者**沒有數量上限**，也不管這些工作階段是不是同一個工具做的，因此當選取範圍比「一起編輯」的二到八個更大或更混雜時，它就是那道逃生門。

> 有個標籤陷阱：**檢視工作階段**只有在*已選取*東西之後才存在。在未選取的單張卡片上按右鍵，出現的會是 **N saved sessions**，它開啟的是該工具自己的歷史對話框，而不是切換到專案。

![工具庫中勾選了兩張工具卡片，浮動選取列顯示 2 selected，並提供 Available offline、View sessions、Favourite 與 Hide](/t/url-shot?url=%2F%23%2F&width=1440&height=900&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&drive=click%3A%5Bdata-select%3D%22qr-code%22%5D%3Bclick%3A%5Bdata-select%3D%22mesh-gradient%22%5D&waitSelector=.gallery-view%5Bdata-shots-settled%5D&walker=1&format=svg&dark=1&filename=misc-bulkbar-gallery)
<!--
SHOT NOTE (misc-bulkbar-gallery): drive targets `[data-select="qr-code"]` /
`[data-select="d3"]` - the `.tile-check[data-select="<ref>"]` checkbox button
confirmed directly in views/gallery.ts's card markup (the same attribute
cardMarkup gives every tile), so these two clicks tick both cards without
opening either tool.

SHOT NOTE (misc-sessions-by-tool, NOT PUBLISHED): the "View sessions" result
had a recipe of its own (`/#/p?tools=qr-code,d3`, views/projects.ts's
toolsBodyHtml()), dropped here because it has no `drive=` that can
manufacture its own content - a saved session isn't a click away, it has to
already exist, and build-docs-shots.ts gives every shot a fresh
`browser.newContext()`. It would publish an empty list. Same dependency the
`projects` shot above already carries; revisit if the pipeline gains a
storage-seeding hook.
-->


## 分享你的作品

設計可以用兩種方式送出去：連結或檔案。分享對話框兩者都提供。在匯出控制項中用**分享**開啟；在專案中對已儲存的工作階段選**分享連結**，會為該工作階段開啟同一個對話框。

### 連結

每個輸入項都收在頁面網址裡，因此連結*就是*設計。對話框頂端是可直接複製的連結，底下有兩個收合的區塊。

- **連結選項**包含**最短連結**（大型設計會產生很長的網址，這會把整份狀態打包成一個精簡的權杖，並告訴你省下多少字元；可讀的形式一直都在）、**為這個連結設定密碼**（以 AES-256 加密整個連結，密碼絕不放在裡面），以及**釘住這個工具版本**，也就是 `_v` 旗標，把連結釘在你眼前的工具版本上，讓日後的更新無法改變它算出來的結果。
- **連結行為**指的是收件者開啟時會發生什麼：全螢幕、匯出面板已經展開、以 `&export` 開啟即下載，或以 `&copy` 複製到剪貼簿。

把連結貼給同事、加入書籤，或提交進版本庫。（完整說明：[URL Mode](/info/url-mode.html)。）

**對話框會說明連結載不動什麼。** 有三種東西塞不進網址：你從這台裝置加入的圖片或檔案、非常長的文字值，或非常大的清單。建立連結時每一項都會被計入。若有東西不得不捨棄，對話框會指名是什麼，並把你導向下面的檔案，而不是交給你一個開啟後圖片不見的連結。只是*很長*的連結則會得到一則較溫和的提示與字元數，因為長度還能靠打包救回來。

### .lolly 檔案

在你正在使用的工具的分享對話框中，**下載 .lolly** 會把同一份設計寫成一個檔案。它帶著已儲存的工作階段，以及你從裝置加入的圖片與檔案。設計所引用的目錄美術資源也一併裝在裡面，因此這個檔案在從未見過你品牌的機器上打開時是完整的。若你的裝置有分享面板，**傳送至…**會把該檔案直接交給它（AirDrop、Android 分享），而不是存到磁碟。

`.lolly` 就是一個普通的 zip。把它改名成 `.zip` 再打開：你自己的圖片在 `assets/uploads/` 底下，目錄美術資源在 `assets/catalog/` 底下，每一個都保有真實的名稱與副檔名，`manifest.json` 列出全部，最上層還有一份 README 說明這個檔案是什麼。

送出之前有三件事由你決定：

- **要不要寫上你的名字。** 只有在你的個人資料中開啟**使用我的資料來建立**時，你的姓名、電子郵件與組織才會寫進檔案。關閉時，檔案只記錄它是用 Lolly 製作的以及製作時間，關於你的部分一概沒有。
- **要不要放進授權美術資源。** 有授權與品牌鎖定的素材預設會保留不放。若設計用到了，對話框會說明有幾個，並提供兩顆按鈕：*不含它們下載*或*包含並下載*，因為包含就等於把實際檔案交給任何打開這個 `.lolly` 的人。
- **要不要放進工具本身。** **包含工具**會把工具本身的檔案和設計一起打包，讓它在沒有該工具的裝置上也能開啟。自訂工具（分支版本，或收件者不太可能有的私有品牌工具）預設會勾選；與已簽章目錄逐位元組相符的工具則不勾選，因為對方那份本來就是同一個檔案。

**開啟。** 把 `.lolly` 拖到應用程式上：素材落入你的素材庫，工作階段落入專案，工具則以它開啟。你的東西不會被覆寫：工作階段會以新的儲存位置抵達，而這台裝置上已經有的素材會以檢查碼比對後重複使用，不會再複製一份。匯入過程中每個部分都會與檔案自己的檢查碼比對，因此在傳輸中損壞的副本會被拒絕，而不是匯入到一半。

若檔案帶著你沒有的工具，Lolly 會在該工具能執行之前先問你：**Trust this tool?**（信任這個工具？）會指出它的名稱與作者，並明白說出開啟它就會在你的裝置上執行該工具自己的程式碼，**Trust & install**（信任並安裝）是通過的方式。拒絕的話，分享的作品仍會存進你的專案，等著你哪天把工具加進來。（有一種工具目前還不能側載，就是程式碼以模組形式提供的那種，它會以同樣的方式被擋下。）

連結與檔案交出去的都是一份快照。若要和別人*同時*處理同一個工作階段，兩台裝置、不需要伺服器，在同一個網路內也不需要網際網路，見[一起工作](/info/collaborate.html)。

## 即時攝影機（隨動作反應的工具）

每個照片**濾鏡**（半色調、掃描線、色調分離、Voronoi 格、色彩處理、像素拉伸與瑕疵）在有攝影機可用時都會顯示一顆**開始即時**按鈕。開啟後，效果會逐格追蹤你的網路攝影機，因此會隨動作反應；你可以把結果錄成 GIF、WebM 或 MP4。影格的讀取與處理都在**你的裝置上**進行，絕不外流，而且你一停止或離開工具，攝影機就會被釋放。（任何圖片選擇器也都有**拍照**，可擷取單一影格成為裝置上的圖片。）

## 我的圖片

當工具允許你從裝置加入圖片時，它會原封不動地保留（因此上面的 Content Credential 仍然可以驗證），並存進你個人的**我的圖片**素材庫（位於**個人資料 → 儲存空間**）。只有真的很大的檔案才會問你要保留還是縮小。它可以在任何工具中重複使用。若要在圖片進來時清掉 EXIF/GPS，請在個人資料中開啟**移除上傳檔案的中繼資料**。沒有數量上限：這個素材庫完全在本機，只受裝置儲存空間限制，圖片也在那裡管理或刪除。

## 目錄：你的素材庫

**目錄**（`#/c`，或每個列表檢視頂端 Projects · Tools · Utilities · Catalog 切換器中的 **Catalog** 區段）匯集了你的工具可以取用的一切：品牌標誌、圖片、音訊與動態，依種類分組，同時也是你**自己的創作檔案**存放的地方。沒有伺服器、沒有管理主控台、沒有 pull request：一切都在你的裝置上。

![目錄：品牌素材、色票與字體，以及你自己上傳的檔案](/t/url-shot?url=%2F%23%2Fc%3Fsection%3Dswatches%2Cfonts&width=1440&height=900&dpi=96&waitMs=2400&css=.plat-swatch-grid~%2A%7Bdisplay%3Anone%7D&walker=1&format=svg&localize=1&dark=1&filename=catalogue)

- <!--i:upload--> **把你的檔案帶進來。** 把任何圖片、SVG、音訊片段、影片、Lottie、PDF 或 PowerPoint 簡報拖到上傳區（或點一下選擇），它就會立刻落進你的目錄，在每個工具的素材選擇器中隨時可用。多頁 PDF 或 `.pptx` 會問你要保留哪些頁面或投影片，每一個都會變成一個 SVG 素材。想收多少就收多少；它絕不離開你的裝置。
- <!--i:star--> **把常用的加星號。** 為素材（或品牌色票）按 ★，它就會釘在每個選擇器的最上方，讓你的愛用標誌或顏色一點就到。
- <!--i:folder--> **整理。** 把素材重新分到其他群組、隱藏你不用的共用品牌素材（用**顯示隱藏項目**把它找回來），或直接刪除你自己上傳的東西。和專案相同的多選手勢與浮動動作列在這裡同樣適用，因此上述任何一項都可以一次對整個選取範圍執行。

### 把你的色盤與字體帶著走

目錄的**色票**面板不只是展示：點一個顏色即可複製，或以你其他軟體看得懂的格式**下載整套品牌色盤**：

- <!--i:code--> **Design tokens（JSON）**、**CSS 變數**或 **CSS 類別**，直接把品牌放進樣式表或建置流程；
- <!--i:palette--> **Adobe Swatch Exchange (.ase)**，載入 Illustrator 或 Photoshop；
- <!--i:pentool--> **GIMP palette (.gpl)**，給 GIMP 或 Inkscape 用。

![色票面板：頂端一排五顆色盤下載按鈕，接著是每個品牌顏色，都是可複製的色塊](/t/url-shot?url=%2F%23%2Fc%3Fsection%3Dswatches&width=1440&height=900&dpi=96&waitMs=1800&css=.cat-group%3Anot%28%5Bdata-group%3Dswatches%5D%29%7Bdisplay%3Anone%7D&cropSelector=%5Bdata-group%3Dswatches%5D&walker=1&format=svg&dark=1&filename=use-swatch-downloads)

**字體**面板列出你的品牌字型，每個旁邊都有一個**下載**，可以安裝到本機或交給印刷廠。（[Brand Studio](/info/brand-studio.html) 的色彩區也提供同樣的色盤下載。）

素材只是開放、自己動手這條路的一半；另一半是**做出你自己的工具**：自由畫布（上面說的 Design）讓你用視覺方式做出一個，不需要寫程式。

## 聲音與無障礙

Lolly 希望每個人用起來都舒適。介面可以用鍵盤操作，自訂控制項為螢幕閱讀器帶有適當的標籤，而每個工具的即時預覽都以單一張有標籤的圖片呈現，說明它正在做什麼。

一層輕柔的**輔助音效**會確認你的操作：進入工具庫、Content Credentials 檢查通過與不通過、關閉面板、切換濾鏡。它**預設關閉**：在任何出現該開關的地方（各檢視的選項浮動視窗，或**個人資料**）打開**聲音**，這個選擇會被記住。

**個人資料 → 無障礙**底下有四項需自行開啟的舒適設定：**減少動態效果**（拿掉應用程式的轉場與花俏效果）、**隱藏彩色預覽**（工具庫卡片變成沉穩的圖示加文字，專案縮圖也更安靜）、**高對比**（更強的邊框、文字與焦點框），以及**大字級**（放大應用程式的字：標籤、選單、按鈕文字）。這四項都只讓工作*周圍*的應用程式安靜下來：它們絕不會伸進工具畫布，也不會改變你匯出成品的任何一個像素，而且在你開啟之前都是關的。完整說明見[你的個人資料 → 無障礙](/info/profile.html#accessibility)。

聲音開關旁邊是 **Neurospicy Mode**，一段選用的、令人平靜的背景專注音樂，會在你工作時輕輕播放。開啟後，底部角落會出現一個小小的**播放器停靠列**，隨你在應用程式中移動；你可以在上面搜尋並挑選曲目、往前往後跳、設定音量，以及縮到最小或關閉。曲目清單涵蓋幾個類別：程序生成的 *Lolly Sings* 曲子、環境循環與節奏、你自己上傳的音訊，以及少數幾個即時網路**廣播**電台（這些需要連線，其餘都能離線播放）。它**預設關閉**，而且和聲音一樣，會跨工作階段與裝置記住。關掉聲音也會讓專注音樂靜音。

## 儲存空間與隱私

一切都存在你瀏覽器的本機資料庫（IndexedDB）裡：你的個人資料、已儲存的工作階段、上傳的圖片，以及下載的目錄內容快取。**個人資料 → 儲存空間**會顯示用量，並讓你：

- <!--i:box--> **清除快取**：丟掉下載的目錄內容（下次載入會重新同步）。
- <!--i:trash--> **清除我的所有資料**：抹除個人資料、工作階段與圖片。*無法復原。*

![手機寬度螢幕上的儲存空間卡片：裝置上每一類資料都列出名稱，底部是「清除我的所有資料」按鈕](/t/url-shot?url=%2F%23%2Fprofile%3Ffocus%3Dstorage-section&width=430&height=1600&dpi=192&waitMs=2400&css=.welcome-dialog%2C.personalize-nudge%2C.store-manages%2C.storage-subsection%2C.store-selbar%2C.store-chip-val%2C%23store-hero-num%2C%23store-headroom%2C%23store-quota%2C%23store-reclaim%7Bdisplay%3Anone%7D&format=svg&walker=1&cropSelector=%23storage-section&dark=1&filename=pv-storage-clear)

這些本機資料不會傳送到任何地方：沒有遙測，也沒有雲端算圖。應用程式曾經抓取或送出的完整清單列於[隱私權政策](/info/privacy.html)，而[伺服器介面](/info/server-surface.html)則盤點了選用的伺服器元件。

## 換到另一台裝置

因為一切都在你的裝置上，**個人資料 → 儲存空間 → 移至其他裝置**讓你把全部帶到第二個安裝，不需要帳號，也不需要雲端：

- <!--i:download--> **匯出我的資料**會下載單一個 `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip`（名稱的各部分取自你的個人資料，未設定時會略去；`<n>` 是每日計數器，讓同一天的多次匯出不會撞名），內含你的個人資料、每一個已儲存的工作階段（含縮圖）、你上傳的圖片與你的偏好設定（主題、側邊欄寬度、本機活動統計）。
- <!--i:upload--> 在另一個安裝上用**匯入資料…**把該檔案讀回來。它會**合併**：同名的東西（你的個人資料、某個工作階段位置、某張圖片）會被匯入的副本取代；那台裝置上的其他一切則保留。已儲存的工作階段會自動重新連結到你匯入的圖片。

目錄快取不包含在內，它會在新裝置上自行重新下載。這個組合包是一個單純的 zip（`manifest.json` + `profile.json` + `sessions.json` + `assets.json` + `assets/blobs/…` + `prefs.json`，格式 id 為 `lolly-backup`），因此經過電子郵件、USB 或 AirDrop 都能完整無損，而且每個 shell 讀的都是同一種格式。每個部分都有檢查碼，所以傳輸中損壞的檔案會在匯入時被抓出來，而不是還原成半殘的狀態。（完整格式規格：[資料轉移](/info/data-transfer.html)。）

## 匯入設計（Figma、Penpot、Illustrator、InDesign）

你可以把既有的設計帶進 Lolly 繼續做：開啟 **Design**，在畫布工具列點**匯入設計**，然後選擇 Figma 的 **.fig** 或 SVG、Penpot 的 **.penpot**、Illustrator 的 **.ai** / **.pdf**，或 InDesign 的 **.idml**。圖層會變成自由畫布上可編輯的方塊，文字仍可重新輸入，圖片落進**我的圖片**，字體與色彩則遵循品牌的全域設定，之後成果就和其他工作階段一樣可以儲存、分享與算圖。解析完全在你的裝置上進行。完整說明：**[匯入設計](/info/design-import.html)**。

## 匯出

完整說明見 **[匯出與格式](/info/exporting.html)**：選擇格式、輸出尺寸與印刷單位、透明背景、影片，以及複製／分享。簡單說：挑一個格式，需要的話設定尺寸，然後**下載**（或**複製**到剪貼簿）。

## 批次（Pro）模式

給進階使用者的**批次**（從工具庫連過去，由預設開啟的 Pro 功能旗標控管）能一次算出許多變體：一張格線，每一列是一組輸入項，一起匯出。很適合把一張卡片在地化成十來種語言，或一次生成所有尺寸變體。填列的方式可以是直接輸入、從試算表貼上，或匯入 CSV（也可以匯出一份），並可逐列設定格式、尺寸與輸出檔名。整張格線可以存成具名的**批次工作階段**，之後從工具庫重新開啟，也能把每一列一起下載成單一個 `.zip`。

![批次工具列：zip 名稱、單位、DPI 與每一列繼承的格式，右側是工作階段與算圖](/t/url-shot?url=%2F%23%2Fpro&width=1440&height=900&dpi=192&waitMs=3500&cropSelector=.pro-toolbar&walker=1&format=svg&dark=1&filename=use-batch-toolbar)

批次是用來一次生成**同一個範本的許多變體**。若要重新算圖你**已經儲存**的工作階段，請用**專案 → 算圖資料夾／算繪選取範圍**（見上文），不需要 Pro。

## 並排編輯（Multi-edit）

批次是*同一份*設計的許多變體。**Multi-edit** 則是這件事的另一半：一次開啟數份**不同的**已儲存設計，讓一次變更同時落在所有設計上。在**專案**中勾選**二到八個**已儲存的工作階段，從選取列選**一起編輯**；它們會以即時卡片並排開在 `#/multi?s=<slot>,<slot>…`。每張卡片都是該工作階段的真實算圖，不是存下來的縮圖，所以你看到的就是它會匯出的樣子。

一個側邊欄驅動全部：

- <!--i:sliders--> **共用**排在最前面：凡是被選取的工作階段中有兩個以上以*相同方式*宣告的輸入項（相同 id、相同型別、相同限制，就是批次格線用在欄位上的那條合併規則）都在這裡。共用控制項改一次，值就會擴散到每一個宣告了它的工作階段，每張卡片即時反映。同一個工具的兩個工作階段共用一切；兩個不同的工具則只共用它們剛好有的交集，別無其他。
- <!--i:document--> 底下是**每個工作階段一張收合的卡片**，帶有該工作階段自己的所有輸入項，精細度與工具本身的側邊欄相同（素材選擇器、重複列群組、顏色欄位），再加上一個精簡的匯出區塊：**格式**、**W** / **H**、**單位**、**DPI** 與它自己的**下載**。那個下載會先儲存工作階段，再透過一般的工作階段匯出路徑算圖，因此檔案帶有和直接從工具匯出時相同的檔名、格式與 Content Credentials。
- <!--i:search--> 頂端的**篩選輸入項…**會一次縮小*每一張*卡片上的控制項，這就是你在八個工作階段裡直接找到「標題」而不用一路捲動的方法。

點任何一張畫布（或在它上面按 Enter），該工作階段的側邊欄卡片就會展開並捲入視野。**全部儲存**會把每個工作階段寫回它自己的位置。**全部下載**會先儲存，再透過與專案的**算繪選取範圍**相同的流程算出整組：一個 zip，過程中也會提供選用的密碼鎖。

有兩項要老實說的限制。二到八的上限是真的：每張卡片都掛載自己的即時執行環境，這個數字才能維持順暢；要求更多（或要求已經不存在的工作階段）的連結會直接說明，而不是載入到一半。另外，連結指名的是*你*儲存的位置，所以它只會在這台裝置上重新開啟那一組，它不是分享連結。

當選取範圍超過八個、混合了多個工具，或除了工作階段還包含圖片時，逃生門就是同一條選取列上的 **Edit as sheet**：它會把整個選取範圍當成**批次格線中的列**開啟（`#/pro?s=…`），沒有數量上限，也沒有同一工具的規定。資料夾兩者都不參與，它們有自己的在格線中開啟的路徑。（[搜尋](/info/search.html)是目前唯一還沒伸進來的東西：Multi-edit 是搜尋列唯一不知道的檢視。）

## 離線與安裝

Lolly 是一個 PWA。第一次載入之後就能**離線**運作：從瀏覽器網址列安裝（行動裝置上是*加到主畫面*），可獲得類似原生應用程式的全螢幕體驗。回到線上時它會自行更新。
