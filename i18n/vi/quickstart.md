# Bắt đầu nhanh

Lolly biến các quy tắc của bạn — màu sắc, kiểu chữ, bố cục, logic — thành các công cụ mà bất kỳ ai cũng có thể dùng để tạo ra tệp hoàn chỉnh: hình ảnh, PDF, thẻ mạng xã hội, video, chỉ bằng cách điền vào một vài trường. Không có gì để học và không cần tải lên gì cả: mọi thứ đều chạy trên thiết bị của bạn, dù online hay offline.

Đây là trang đầu tiên bạn nên đọc. Có hai việc giúp bạn bắt tay vào làm ngay: **biến Lolly thành của riêng bạn** (gắn nó với thương hiệu của bạn), và **mang vào những gì bạn đã có sẵn** (các tệp thiết kế và token của bạn). Mọi thứ khác chỉ cách một đường liên kết.

> Mới dùng Lolly và chỉ muốn tạo ra thứ gì đó ngay? Mở ứng dụng, chọn bất kỳ công cụ nào trong thư viện, điền vào chỗ trống, rồi nhấn **Render**. Quay lại đây khi bạn muốn nó khoác lên thương hiệu *của bạn*.

## 1. Biến nó thành của bạn — thiết lập thương hiệu của bạn

Thương hiệu của bạn trong Lolly là một tài liệu **token thiết kế** nhỏ gọn — màu sắc, phông chữ, và một vài quy tắc — mà mọi công cụ đều render dựa theo. Thiết lập một lần và mọi thứ bạn tạo ra đều đúng thương hiệu ngay từ gốc, chứ không phải nhờ soát lại. Có ba cách để bắt đầu; hãy chọn cách phù hợp với nơi thương hiệu của bạn đang tồn tại.

### Bắt đầu từ đầu (trình hướng dẫn)

Lần chạy đầu tiên sẽ đưa bạn tới màn hình **Start** (`#/start`). Đặt cho nó một cái tên và một màu chủ đạo, Lolly sẽ *suy ra* một bảng màu hoàn chỉnh, dễ tiếp cận từ đó — các bề mặt sáng/tối, văn bản, điểm nhấn — bằng chính phép toán màu mà engine dùng ở mọi nơi khác. Chọn một phông chữ, và bạn đã có một thương hiệu hoạt động được trong chưa đầy một phút. Bạn có thể tinh chỉnh bất kỳ phần nào sau đó.

### Nhập một thương hiệu bạn đã có sẵn

Nếu thương hiệu của bạn đã được lưu dưới dạng token thiết kế — từ **Penpot**, **Tokens Studio** (Figma), hoặc bất kỳ tệp **DTCG** thuần nào — hãy mang toàn bộ vào thay vì phải nhập lại từ đầu. Có hai cách:

- **Trong ứng dụng:** màn hình Start và trình chỉnh sửa *Your brand* chấp nhận trực tiếp một tệp token (hoặc một gói `LollyBrand`) — thả vào là bảng màu sẽ sáng lên ngay.
- **Từ dòng lệnh**, để dựng một gói thương hiệu có thể tái sử dụng:

```bash
# a monolithic tokens.json, a one-file-per-set directory, or a Penpot project archive
npm run ingest:brand -- ./my-tokens.json --name acme --label "Acme" --activate
```

`ingest:brand` chấp nhận cả ba dạng chứa mà Penpot / Tokens Studio dùng để xuất cùng một tài liệu — một tệp `tokens.json` duy nhất, một thư mục (`$metadata.json` + các tệp theo từng set), hoặc một gói `project.penpot`. Với `--activate`, nó đăng ký thương hiệu này thành một profile, chuyển sang dùng nó, và dựng lại danh mục. Xem [Cấu hình](/info/configuration.html) để biết gói thương hiệu và profile khớp với nhau ra sao.

### Tinh chỉnh trong ứng dụng

Khi một thương hiệu đang hoạt động, trình chỉnh sửa **Your brand** trên dashboard (`#/d`) là một trình chỉnh sửa trực tiếp — đổi một màu hay một vai trò là mọi bản xem trước trên trang cập nhật ngay khi bạn gõ. Cùng thương hiệu đó được tóm tắt trên thẻ **Profile → Your brand**. Phông chữ là thật: chọn từ Google Fonts và Lolly lưu tệp đó **ngay trên thiết bị của bạn** như một tài sản thương hiệu, nên kiểu chữ của bạn vẫn dùng được khi offline và không có gì được tải về khi render.

Khi bạn đã ưng ý, **xuất thương hiệu thành một gói `LollyBrand`** — một tệp duy nhất mà đồng nghiệp có thể nhập vào để có được đúng bảng màu, phông chữ, và quy tắc y hệt. Đó là cách một thương hiệu di chuyển giữa người với người, giữa máy với máy, mà không cần server ở giữa.

> **Token thương hiệu đi được cả hai chiều.** Vì thương hiệu của Lolly *chính là* token DTCG — định dạng mà Penpot đọc và ghi trực tiếp, và Tokens Studio mang vào Figma — bảng màu bạn *dùng để* thiết kế và bảng màu mà Lolly *áp đặt* là cùng một tài liệu, chứ không phải hai danh sách bạn phải tự tay đồng bộ. Xem [Token thiết kế](/info/design-tokens.html).

## 2. Mang vào những gì bạn đã có sẵn

Bạn không cần bắt đầu từ một trang trắng. Lolly mở được cả những thiết kế và các định dạng mở mà bạn đã có sẵn.

### Tệp thiết kế mã nguồn mở

Sản phẩm hoàn thiện trong **Figma, Penpot, Illustrator, InDesign, hay bất kỳ ứng dụng SVG nào** không cần phải bị khoá mãi trong ứng dụng bạn đã vẽ ra nó. Mở **Layout Studio**, nhấn **Import a design**, và tệp đó sẽ mở ra như một *bố cục sống* — chứ không phải một bức ảnh phẳng. Mỗi lớp trở thành một khối có thể chỉnh sửa: văn bản vẫn gõ lại được, hình khối vẫn là hình khối, hình ảnh được đưa vào thư viện của bạn, và các hoạ tiết vector phức tạp được giữ nguyên trung thực. Nó xuất hiện đã sẵn tuân theo mặt chữ và quy tắc màu sắc thương hiệu của bạn.

| Bạn có | Mang vào dưới dạng |
|---|---|
| Một frame Figma | `.fig` gốc (File → Save local copy), hoặc bản xuất SVG |
| Một thiết kế Penpot | Bản xuất `.penpot` của nó, hoặc bất kỳ SVG nào |
| Một tệp Illustrator | `.ai` gốc (tương thích PDF) hoặc `.pdf` — mở trực tiếp |
| Một bố cục InDesign | `.idml` (File → Export → InDesign Markup) |
| Bất kỳ thứ gì khác | **Bất kỳ SVG nào** — cánh cửa vào phổ quát |

Toàn bộ quá trình nhập diễn ra **ngay trên thiết bị của bạn** — tệp được phân tích ngay trong trình duyệt của bạn và không có gì được tải lên. Chi tiết đầy đủ, và chính xác những gì được giữ lại, có trong [Nhập một thiết kế](/info/design-import.html).

### Từ một lần dùng riêng lẻ thành một mẫu

Đây là phần thưởng: một bố cục đã nhập là một phiên Layout Studio bình thường, vậy nên một khi bạn **lưu** nó, nó sẽ tồn tại tại một URL. Bất kỳ ai có Lolly đều có thể mở URL đó, đổi chữ, thay ảnh, và render ra phiên bản của riêng họ — không cần ứng dụng thiết kế nào, và các phần bị khoá vẫn được khoá. Một thiết kế chỉ dùng một lần trở thành một công cụ có thể tái sử dụng. Đó là toàn bộ ý tưởng, đạt được mà không cần viết một dòng cấu hình nào.

### Dữ liệu mở và công cụ mở

[Bộ công cụ cộng đồng](/info/builders.html) là mã nguồn mở và trung lập về thương hiệu — mã QR, bản đồ đường phố, bộ lọc, tiện ích quyền riêng tư — và nó render theo *thương hiệu của bạn* ngay khi bạn kích hoạt. Đưa dữ liệu mở của riêng bạn vào công cụ nữa: dán hoặc thả một bảng **CSV** hay **JSON** vào, và các trường lặp lại của công cụ sẽ tự điền theo đó, mỗi hàng cho ra một tệp hoàn chỉnh.

## 3. Tạo ra thứ gì đó, rồi chia sẻ hoặc tự động hoá nó

Với một thương hiệu đang hoạt động và tư liệu trong tay, mọi công cụ đều tạo ra một tệp hoàn chỉnh:

- **Render** bất kỳ công cụ nào ra **SVG, PDF, PNG, JPG, WebP, video**, và nhiều hơn nữa — theo đúng kích thước in và đơn vị vật lý khi bạn cần. Xem [Xuất & định dạng](/info/exporting.html).
- **Chia sẻ một liên kết.** Mọi trạng thái của công cụ đều là một URL, nên một tệp hoàn chỉnh có thể tái tạo lại và định vị được qua tham số — lưu lại liên kết, tạo lại bất cứ khi nào cần.
- **Thực hiện hàng loạt.** Chạy một mẫu từ một bảng tính trong [lưới xử lý hàng loạt](/info/exporting.html): mỗi hàng cho ra một tệp hoàn chỉnh.
- **Tự động hoá nó.** Cùng một quy trình render đó chạy được từ [CLI](/info/cli.html) và từ một [tác nhân AI](/info/ai-agents.html) — một URL chính là API.

## Đi đâu tiếp theo

Ba lối đi, tuỳ vào việc bạn ở đây để làm gì:

- **[Lolly dành cho Người sáng tạo](/info/creators.html)** — bạn là người tạo ra mọi thứ. Những lợi thế, và cách khai thác tối đa ứng dụng.
- **[Lolly dành cho Người xây dựng](/info/builders.html)** — bạn viết công cụ, tích hợp, và triển khai. Tài liệu kỹ thuật.
- **[Lolly dành cho Người vận hành](/info/operators.html)** — bạn chịu trách nhiệm về thương hiệu, bảo mật, và triển khai trên toàn tổ chức.
