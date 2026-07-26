# Lolly 如何比較

此平台在更廣泛的創意工具生態中處於什麼位置,以及它刻意**不**涉足的領域。

> **試行狀態:** Lolly 是封閉式試行原型,尚非成品,其安全性目前正接受 SUSE 嚴格的基礎架構強化,為企業規模做準備。此定位是 Lolly *期望*達到的目標——實際測試方式請見[採用與治理](/info/adoption-governance.html#status)頁面。

## 產業格局

![Layout Studio's free canvas, where the colours, faces and assets on offer are the brand's own](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio&width=1440&height=900&dpi=192&waitMs=2400&format=svg&filename=aud-open-canvas)

| 能力 | Canva(開放式畫布) | 品牌入口網站(DAM 範本化) | Illustrator(桌面專業版) | Figma / Penpot(線上專業版) | **Lolly(限制優先)** |
|---|---|---|---|---|---|
| 大量內容生成 | 部分 | ✗ | ✗ | ✗ | **✓** |
| 完全離線運作 | ✗ | ✗ | ✓ | 部分 | **✓** |
| 範本邏輯與硬性限制 | ✗ | 部分 | ✗ | 部分 | **✓** |
| 不需要設計技能 | 部分 | ✓ | ✗ | ✗ | **✓** |
| 自動 Content Credentials | ✗ | ✗ | 部分 | ✗ | **✓** |
| 工具可組合其他工具 | ✗ | ✗ | ✗ | ✗ | **✓** |
| 開放式引擎,不受 SaaS 綁定 | ✗ | ✗ | ✗ | 部分 | **✓** |
| C2PA 內容憑證 | ✗ | ✗ | ✗ | ✗ | **✓** |
| 可選擇加入的鑑識等級溯源 | ✗ | ✗ | ✗ | ✗ | **✓** |
| 行動裝置與桌面應用程式 | ✓ | ✗ | ✗ | 部分 | **✓** |
| 命令列與 TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

這個落差的輪廓很清楚:現有格局中沒有任何產品能同時提供限制優先、可離線運作、低技能門檻、內部可存取的生成式輸出。Lolly 現在也推出了自己的開放式畫布——**Layout Studio**,一個直接操作的自由畫布——但與 Canva 那一欄有個關鍵差異:放置在畫布上的色彩、字體與素材都會遵循品牌全域設定,因此即使是自由排列也仍維持限制優先。Lolly 依然**不是**一套無限制的設計套件;設計師仍會使用 Illustrator 與 Figma 進行客製化工作——而當那些成果需要變成受治理、可重現的資產時,Layout Studio 的[匯入設計](/info/design-import.html)功能可將完成的 Figma/Illustrator/Penpot 檔案帶入畫布,轉換成可編輯、符合品牌規範的區塊。

## 適用情境

![Deck Studio in the split view - the deck's slides listed as blocks on the left, the laid-out deck rendering on the right](/t/url-shot?url=%2F%23%2Ftool%2Fdeck-studio&width=1440&height=900&dpi=192&waitMs=2600&format=svg&filename=ov2-deck-studio-output)

Deck Studio 很能說明這裡的天花板有多高：一整份投影片以資料的形式宣告，在畫布上即時排版，最後匯出成原生可編輯的 PowerPoint。

- 快速生成可作業化的創意資產(活動卡片、識別徽章、簽名檔、警示訊息)
- 在開放式畫布(Layout Studio)上自由排列,同時色彩、字體、圖示、影像等元素仍須遵循品牌全域設定
- 將完成的 Figma、Illustrator、InDesign 或 Penpot 設計匯入(透過 Layout Studio 的「匯入設計」功能),使其能以 Lolly 的每種格式進行編輯、治理與確定性地重新渲染
- 一對多的「填三個欄位,取得完成資產」流程——包括在 `/pro` 批次網格中以試算表/CSV 進行批次執行(貼上或匯入資料列,每列產出一項完成資產,並以 zip 檔下載)
- 全天候、週期性的品牌化輸出
- 品牌表現的集中控管比表現彈性更重要的情境

## 不適用情境

- 客製化或旗艦級主打內容(廣告看板、大型影片)
- 真正需要設計師參與的獨特行銷活動作品
- 需要完全跳脫品牌系統的發想工作——Lolly 的開放式畫布仍會讓色彩、字體與素材遵循品牌全域設定,而這正是重點所在

## 核准工具，而不是檔案

![The producer's whole job: type the words. Type, colour and spacing were settled when the tool was approved](/t/url-shot?url=%2F%23%2Ftool%2Fwordmark%3Ftext%3DApproved&width=1440&height=900&dpi=192&waitMs=2000&format=svg&filename=aud-approve-the-tool)

這個格局中的其他工具產出的都是*檔案*，而檔案事後都得被檢查——品牌負責人在 Slack 討論串裡看過，法務盯免責聲明，改一輪，再審一次。Lolly 把核准**往上游移了一步**。品牌規則——精確的十六進位色碼、有授權的字型檔、出血邊界、間距——都寫死在工具的 HTML 與 CSS 裡，因此範本*在物理上不可能*產出不符品牌的素材。版面本身就是承重結構。

於是你不再核准產出，而是開始核准製造它們的那個**工具**。核准一次，它此後產出的每一份素材就都因為構造而事先獲准——不需要有人在流程中把關，不需要審核循環，不論量有多大。

這才是決定論式引擎真正帶來的範式轉移：它不是把舊的核准流程跑得更快，而是把流程整個拿掉。對創意團隊來說，它是護欄，不是取代品——球還是由你來投（資料、文案、圖片），程式碼只是保齡球道兩側的護板，讓每一球都不會掉進溝裡。

| 舊方式：核准素材 | Lolly 的方式：核准工具 |
|---|---|
| 每一份完成的檔案都要一件一件檢查 | 工具只檢查一次 |
| 提需求 → 設計師製作 → 品牌審核 → 法務檢查 → 修改 → 再審 | 改一個參數 → 完成素材 |
| 設計師、品牌負責人、法務與需求方全都被捲進來 | 產出者一個人就夠了 |
| 每份素材要花好幾天 | 每份素材只要幾秒 |
| 10,000 份素材 = 10,000 輪審核 | 10,000 份素材 = 零輪（範本早已核准） |

## 獨有的能力

![Amsterdam's canal rings and road network drawn edge to edge in the brand's own ink, every stroke placed by the template rather than by hand](/t/url-shot?url=%2F%23%2Ftool%2Fstreet-map%3Fcity%3Damsterdam%26theme%3Dlight%26full&width=1440&height=900&dpi=192&waitMs=3200&format=png&cropSelector=%23tool-canvas&filename=ov2-street-map-poster)

- **在情境中安全發揮天馬行空的設計潛力。** 工具可以在寫死的防護機制內,表達大膽的設計構想。
- **軟體定義的內容自動化,直接產出最終資產。** 輸入 → 最終檔案。不需要「先從設計工具存檔,再進行後製處理」。
- **工具可組合工具。** 一個工具可以嵌入另一個工具的渲染結果,並將其作為單一完成資產的一部分回傳,且工具與工具之間完全沒有程式碼耦合——這是目前格局中,無論開放式畫布還是 DAM 範本化產品都提供不了的基本能力。
- **供應商中立。** 完整掌控功能與成本。開放原始碼引擎。工具與資產都是以 git 追蹤的內容,而非鎖在 SaaS 資料庫中。

其中第一點最常被低估：一張海報級的城市地圖，道路與水域都是真正的向量路徑，而它的全部來源只是一個下拉選單與兩個顏色欄位——而這兩個欄位不可能指到品牌之外。
