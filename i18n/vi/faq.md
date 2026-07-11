# Câu hỏi thường gặp

Các câu hỏi thường gặp được hiển thị trong khung accordion trên trang chủ `/info`.

**Cách bảo trì:** mỗi tiêu đề `##` bên dưới là một câu hỏi; mọi nội dung bên dưới nó
(cho đến `##` tiếp theo) là câu trả lời. Các câu trả lời dùng cùng cú pháp markdown đơn giản
như phần còn lại của trang web — ngăn cách các đoạn văn bằng một dòng trống. Thêm, xóa, hoặc
sắp xếp lại các câu hỏi tại đây rồi chạy lại `npm run build:info` (hoặc `npm run dev:web`).
Mọi nội dung phía trên `##` đầu tiên (tiêu đề này và các ghi chú này) sẽ bị bỏ qua khi build.

## Điều gì xảy ra khi tôi chọn tham gia (opt-in) trên trang /profile?

Khi bạn sử dụng Lolly lần đầu, mọi thứ bạn nhập ở bất kỳ đâu đều hoàn toàn riêng tư cho đến khi bạn chủ động muốn đưa thông tin đó ra ngoài thông qua media hoặc một liên kết chia sẻ (nếu online).

Khi bạn chọn opt-in, chúng tôi sẽ nhúng một số thông tin hồ sơ (profile) của bạn dưới dạng thông tin nguồn gốc (provenance) vào các asset và bundle để xác định bạn là nguồn gốc.

Lolly tạo ra một khối lượng nội dung lớn. Chúng tôi áp dụng cách tiếp cận tối thiểu hóa dữ liệu (data minimization) một cách nghiêm ngặt để ngăn ngừa rủi ro.

### Cờ tính năng (feature flags) là gì?

Cờ tính năng (feature flags) giúp bật hoặc tắt các phần của Lolly. Thông thường một quản trị viên sẽ kiểm soát những cờ này — nhưng với Lolly, chính bạn là người kiểm soát.

## Làm thế nào để tôi có được ứng dụng di động hoặc máy tính để bàn?

Bất kỳ ai cũng có thể tự phân phối ứng dụng của riêng mình, các tool và cấu hình của những ứng dụng đó sẽ khác nhau rất nhiều tùy thuộc vào đối tượng mà nó hướng đến. Vì vậy không có một ứng dụng duy nhất nào, trừ khi chính bạn tạo ra nó hoặc có ai đó liên quan đưa nó cho bạn.

## Tại sao lại có tên "Lolly Tools"?

**Lolly** Bởi vì tự do thì ngọt ngào.
**Tools** (Công cụ) không hoạt động khi không được sử dụng. Không theo dõi bạn, không chạy các chương trình bí mật,
Đưa nó vào hoạt động theo lệnh, hành động và điều khoản của bạn.

**Lolly** là một từ tiếng Anh dùng ở Úc, New Zealand và Anh để chỉ 'kẹo' hoặc 'đồ ngọt'. Cũng giống như những viên kẹo lolly, các tool rất "ngon miệng" đối với những ai đang cần chúng.

Chúng tôi cũng đang cười sung sướng vì thời gian và hóa đơn mà mình tiết kiệm được nhờ cách tiếp cận này.

## Tôi có thể gặp những trở ngại gì khi áp dụng Lolly?

Lolly có thể chèn vào bất cứ nơi nào bạn đã tạo ra file — CLI dùng chung engine (bộ máy) với App, vì vậy một pipeline chạy lúc 2 giờ sáng không thể lệch khỏi những gì một người xem trước trong trình duyệt. Ma sát khi áp dụng hiếm khi mang tính kỹ thuật; nó mang tính tổ chức. Hãy chuẩn bị cho những điều sau:

**Tools và catalog thương hiệu (brand catalog) phải được biên soạn.** Lolly là một nền tảng (platform), không phải một bộ template đã hoàn thiện sẵn cho bạn. Ai đó phải định nghĩa asset catalog (logo, bảng màu, font chữ dưới dạng ID vĩnh viễn) và viết manifest + template cho từng loại đầu ra.  

**Quản trị (governance) chạy trên git.** "Việc review PR *chính là* việc kiểm duyệt (moderation)" là một cách nói thanh lịch đối với kỹ sư nhưng lại xa lạ với hầu hết các đội brand và marketing. Nếu những người sở hữu quyết định về thương hiệu không sống trong git, bạn sẽ cần một quy trình làm cầu nối cho họ — nếu không, IT sẽ âm thầm trở thành đối tác thiết kế chiến lược và người gác cổng (gatekeeper) của cả tổ chức. Đây là điều được nhiều người ưa chuộng trong các môi trường sản xuất vận hành lâu dài. 

**Nó cố tình hẹp phạm vi — hãy nhìn nhận nó theo cách đó.** Lolly không dành cho nội dung tùy biến riêng lẻ (bespoke) hay nội dung "hero". Nó *là* DAM cá nhân của bạn — được nạp dữ liệu và tăng cường sức mạnh bởi design system, tools và catalog của bạn — và nó *có* một canvas mở (Layout Studio), nhưng ngay cả ở đó, màu sắc, kiểu chữ và asset vẫn tuân theo các thiết lập thiết kế toàn cục (design globals) đang hoạt động, vì vậy việc sắp xếp tự do vẫn nằm trong hệ thống. So với Figma hay Canva, nó sẽ trông có vẻ hạn chế. Nhưng nhìn nhận đúng bản chất của nó — việc tạo asset ở quy mô vận hành hóa, lặp lại, quy mô lớn — thì không gì sánh được. Khung nhìn sai lệch là trở ngại phổ biến nhất.

**Quản lý thay đổi (change management) ở phía sản xuất.** Các quy trình hiện tại vẫn hoạt động ngày hôm nay, cho dù kết quả đầu ra không đúng chuẩn thương hiệu (off-brand). Việc chuyển hướng chúng sang engine đồng nghĩa với việc phải kiểm thử lại, học lại, và câu "chúng ta đã có thể tạo file rồi mà" trở thành cái cớ để không di chuyển (migrate). Hãy bắt đầu bằng cách chuyển đổi một đầu ra chất lượng sản xuất có mức độ hiển thị cao và trình bày so sánh trước/sau cạnh nhau.

Lolly nâng tầm mọi thứ.


## Điều gì khiến utilities khác với tools?

**Câu trả lời cơ bản →** Utilities không phải lúc nào cũng cần render, vì vậy có thể có một UX khác. 

**Câu trả lời thật →** Lý do utilities có thể được host bên trong Lolly Tools là để bổ sung thêm một 'lớp phòng thủ tiện lợi' nhằm làm giảm động lực rò rỉ dữ liệu (data-exfiltration). 

Tại sao? Bởi vì ai cũng biết rằng mỗi ngày, mọi người lấy **nội dung bảo mật mà họ đã có sẵn** và đưa nó cho một trang web ngẫu nhiên để thực hiện một thao tác cơ học nhỏ:

- "**Nén file PDF này**" → tải lên hợp đồng / phiếu lương / tài liệu họp hội đồng cho các bên không rõ danh tính.
- "**chuyển HEIC sang JPG**" → tải lên ảnh cá nhân (kèm dữ liệu GPS EXIF) lên một host được tài trợ bởi quảng cáo
- "**cắt / thay đổi kích thước ảnh này**" → tải lên ảnh chụp màn hình sản phẩm hoặc asset chưa công bố
- "**định dạng JSON này**" / "giải mã JWT này" → dán các phản hồi API, token, bí mật vào một công cụ định dạng
- "**gộp các file PDF này**" → tải lên **hai tài liệu lẽ ra không bao giờ nên chia sẻ chung một server**

Những trang web này và vô số bản sao (clone) đuôi dài (long-tail) của chúng **mặc định là không đáng tin cậy** với
chính sách lưu trữ (retention) không rõ ràng, thẩm quyền pháp lý (jurisdiction) không rõ ràng, các nhà thầu phụ xử lý dữ liệu (subprocessor) không rõ ràng, và một mô hình kinh doanh quảng cáo/liên kết (ad/affiliate) có đầy đủ động lực để giữ lại những gì bạn đưa cho họ. Thao tác thì tầm thường; **nội dung mới chính là cái giá phải trả.** 

Chúng tôi thắng cuộc chiến quản trị (governance) bằng sự tiện lợi và dịch vụ xuất sắc. 

## Lolly có thể chỉnh sửa và render các file Figma, Penpot, Illustrator hoặc InDesign của tôi không?

Có. Mở **Layout Studio** và nhấp vào **Import a design**: nó chấp nhận file Figma gốc **.fig** (Save local copy), file xuất ra từ Penpot **.penpot**, file Illustrator **.ai** hoặc **.pdf**, file InDesign **.idml** (File → Export → InDesign Markup), hoặc **bất kỳ file SVG** nào (cánh cửa rộng — hầu như ứng dụng thiết kế nào cũng xuất được SVG). Mọi thứ được phân tích (parse) hoàn toàn trên thiết bị của bạn, không cần tài khoản hay plugin nào.

Các layer sẽ xuất hiện dưới dạng các khối (box) có thể chỉnh sửa trên canvas mở: văn bản vẫn có thể gõ lại được, hình khối vẫn là hình khối, hình ảnh sẽ gia nhập thư viện trên thiết bị của bạn, còn kiểu chữ và màu sắc thì tuân theo các thiết lập thương hiệu toàn cục. Lưu lại và layout sẽ trở thành một template có thể tái sử dụng, có thể truy cập qua URL, mà bất kỳ ai dùng Lolly cũng có thể điền lại — và bạn có thể kết hợp thêm các tool sống động (live tools) (mã QR, biểu đồ) tự render lại mỗi khi tải trang. Từ đó, nó render giống như mọi thứ khác trong Lolly — SVG, PDF, PNG và các định dạng còn lại, có thể tái tạo lại từ URL của nó. Xem [Nhập một thiết kế](/info/design-import.html).

## Điều gì sẽ xảy ra vào ngày 29 tháng 8?

Các tool mang thương hiệu SUSE sẽ rời khỏi dự án, và các tool ví dụ (example) chung chung mới do người dùng định nghĩa sẽ thay thế.

SUSE sẽ vận hành phiên bản Lolly của riêng mình để bảo vệ các nhãn hiệu (trademark) của họ.

## SUSE đang giữ lại bao nhiêu ở chế độ riêng tư? (hay còn gọi là khi nào xảy ra "rug-pull")

Các nhãn hiệu và tool mang thương hiệu của SUSE chỉ dùng cho mục đích trình diễn (demonstration), cho đến ngày 29 tháng 8. Bạn có thể tìm một phiên bản Lolly không mang thương hiệu tại [lolly.ART](https://lolly.art).

SUSE là một công ty hạ tầng mã nguồn mở (open source) cấp doanh nghiệp với hơn ba thập kỷ dẫn đầu về nền tảng (platform). Các sản phẩm của họ bao gồm các giải pháp hạ tầng Linux cấp doanh nghiệp, Cloud Native, Edge, và AI.

Theo góc nhìn của SUSE, đây là chuyện nói đi đôi với làm về chủ quyền (sovereignty) và bảo mật (security). Tính đến hôm nay, khả năng SUSE biến Lolly thành sản phẩm thương mại gần như bằng không tuyệt đối.

Công khai đầy đủ: SUSE *đang* xây dựng các công cụ nội bộ để tích hợp Lolly vào hệ thống IT của mình — đây là chuyện về cách thiết lập nội bộ của SUSE, không phải chuyện phát triển công khai và riêng tư.

Nói về khía cạnh công khai, Lolly hướng tới việc được xây dựng thông qua [Open Build Service](https://openbuildservice.org/), với các artifact chuỗi cung ứng (supply-chain) an toàn được cung cấp bởi [SUSE Application Collection](https://apps.rancher.io/applications).

Chúng tôi sẽ xây dựng công khai nhiều nhất có thể — bạn chỉ đơn giản là sẽ không còn thấy các tool mang thương hiệu SUSE trong thời gian dài, cũng như không thấy lực lượng lao động nội bộ và các quy trình thương mại của SUSE, những thứ không liên quan đến Lolly.

## Logo Lolly đó có hương vị gì?

Có người nói là vị Chanh (Lime), người khác nói là vị Bạc hà (Mint), và đôi khi là vị Táo (Apple) — Lolly mang đến vị ngọt ngào, còn bạn là người tạo nên hương vị!
