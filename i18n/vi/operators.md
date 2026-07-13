# Lolly cho Nhà vận hành

### Một chiến lược phòng thủ theo chiều sâu, sẵn sàng cho tương lai, ngăn ngừa thất thoát dữ liệu & xác thực nguồn gốc - mà lại tình cờ là một nền tảng sản xuất sáng tạo

Hệ miễn dịch của tổ chức, bao bọc quanh những gì bạn đã và đang làm - để công việc sáng tạo thường nhật mà đội ngũ của bạn cần mỗi ngày diễn ra *bên trong* ranh giới bảo mật của bạn, thay vì rò rỉ ra ngoài nó.

**Lợi ích dành cho bạn.** Bạn sẽ là người đã nói có với một thứ vừa an toàn *vừa* được yêu thích. Bạn bịt kín một lỗ hổng rò rỉ dữ liệu và xóa sổ hàng đợi yêu cầu thiết kế chỉ trong một nước đi - chiến thắng bảo mật hiếm hoi khiến bạn được yêu mến hơn, chứ không phải ít đi. Không còn cuộc gọi lúc 3 giờ sáng vì ai đó gửi email tệp thương hiệu cho một nhà thầu ngoài hay dán dữ liệu khách hàng vào một công cụ web ngẫu nhiên; ít nhà cung cấp SaaS, hợp đồng và kiểm toán hơn trên bàn làm việc của bạn; và một dấu vết git đầy đủ mà bạn có thể chỉ ra khi ai đó hỏi ai đã phê duyệt điều gì. Bạn có thể ngủ ngon.

Lolly xứng đáng có một vị trí như một công cụ sáng tạo: nó xóa sổ hàng đợi thiết kế và trao đầu ra chất lượng sản xuất vào tay mọi người. Nhưng lý do khiến việc phân phát rộng rãi như vậy *an toàn* nằm ở kiến trúc. Không có gì được tải lên, mọi thứ đều có thể tái tạo, và mỗi bản xuất ra đều có thể mang theo một bản ghi mật mã học cho biết nó đến từ đâu. Trang này kể câu chuyện về bảo mật và triển khai.

> **Hiện trạng hôm nay.** Các đặc tính bảo mật của Lolly vốn mạnh theo thiết kế, và các engine mật mã học cùng bộ phân tích tệp của nó đang trải qua quá trình siết chặt hạ tầng cấp doanh nghiệp của SUSE. Các con dấu, chữ ký trên thiết bị, và mã hóa bên dưới là thật và có thể bảo vệ được ngay bây giờ, đồng thời đang dần tiến tới chứng nhận độc lập - nên ở nơi mà hợp đồng đòi hỏi sự đảm bảo đã được chứng nhận, hãy triển khai chúng như phòng thủ theo chiều sâu trong khi quá trình đó hoàn tất.

## Lợi thế chiến lược

Cách thông thường mà công việc sáng tạo thường nhật được thực hiện chính là một bề mặt rủi ro: tệp được gửi email cho các nhà thầu thiết kế bên ngoài, tài sản thương hiệu được tải lên hàng chục trình chỉnh sửa SaaS, dữ liệu khách hàng được dán vào công cụ web của người lạ chỉ để "làm nhanh một hình ảnh." Mỗi trường hợp đó đều là dữ liệu rời khỏi tầm kiểm soát của bạn.

Lolly đảo ngược điều đó. Công việc từng *gây ra* những rò rỉ ấy - tấm thẻ trích dẫn, banner đã bản địa hóa, huy hiệu sự kiện, ảnh chụp màn hình đã che thông tin - giờ đây diễn ra trên một công cụ chạy ngay trên thiết bị của chính nhân viên, dựa theo thương hiệu của bạn, không có máy chủ nào tham gia. Bạn không thêm một lớp kiểm soát lên trên một quy trình rủi ro; bạn thay thế quy trình rủi ro đó bằng một quy trình vốn không hề có đường rò rỉ dữ liệu ngay từ đầu.

- **Cấu hình thuộc về bạn.** Engine và các shell đều là mã nguồn mở (MPL-2.0). Lồng ghép hệ thống xác thực, đo lường từ xa, hay CA của riêng bạn; tự lưu trữ hoặc không; bạn nắm toàn quyền kiểm soát tính năng và chi phí, được theo dõi qua git, không bị khóa trong một cơ sở dữ liệu SaaS.
- **Quản trị có thể là dữ liệu, chứ không phải một bảng điều khiển.** Khi bạn muốn có sự kiểm soát đó, hãy quản lý danh mục công cụ như một kho Git - việc xem xét pull-request trở thành quy trình phê duyệt thương hiệu, với dấu vết kiểm toán đầy đủ và khả năng khôi phục tức thì cho mọi mẫu (template) mà đội ngũ của bạn có thể chạm vào. Đây là một tùy chọn, không phải nghĩa vụ: những đội chỉ muốn làm ra sản phẩm có thể tự tạo công cụ của riêng mình trong Layout Studio và đưa tệp của họ vào danh mục, hoàn toàn trong ứng dụng, và không bao giờ đụng đến git. Xem [Áp dụng & Quản trị](/info/adoption-governance.html).
- **Rào chắn an toàn mang tính cấu trúc.** Các ràng buộc thương hiệu được viết cứng vào trong template, chứ không phải công bố như những hướng dẫn mà người ta có thể phớt lờ. Đầu ra sai không bị ngăn cản - nó đơn giản là không thể tồn tại.

## Xóa sổ hàng đợi yêu cầu trong khi vẫn nhân rộng nội dung.

Một mục tiêu của Lolly là **chuyển hướng yêu cầu thiết kế**: những yêu cầu thường nhật không bao giờ cần đến tay một nhà thiết kế nữa, vì chính người cần tài sản đó đã tự làm ra nó, đúng chuẩn, chỉ trong vài phút. Mỗi yêu cầu được chuyển hướng vừa là một chiến thắng về năng suất, vừa là một tệp ít hơn phải đổi tay.

Lolly được xây dựng để phù hợp với cách tổ chức của bạn thực sự vận hành - không có một cách triển khai đúng duy nhất:

- **Triển khai tận thiết bị, không cần máy chủ phục vụ.** Phân phối Lolly đến các thiết bị qua hệ thống MDM sẵn có của bạn (Intune, Jamf, Munki…). Nó chạy cục bộ như một ứng dụng desktop/di động hoặc một PWA ngoại tuyến - hoạt động phía sau bất kỳ firewall nào, trong bất kỳ môi trường cách ly mạng nào, không cần duy trì máy chủ, và bộ phận IT toàn quyền kiểm soát nhịp độ cập nhật.
- **Chỉ phục vụ qua máy chủ.** Chạy một thực thể bên trong mạng nội bộ của bạn (hoặc sau VPN); người dùng truy cập qua trình duyệt, không cần cài đặt gì cả. Công bố một công cụ một lần, mọi người có ngay lập tức; kết hợp với IdP của bạn để kiểm soát truy cập.
- **Kết hợp (Hybrid).** Ứng dụng cục bộ cho công việc ngoại tuyến tại hiện trường, phiên bản trình duyệt luôn cập nhật cho các máy mượn - cả hai đều trỏ về cùng một thư viện công cụ.

Toàn bộ các mô hình triển khai và hướng dẫn quản trị chi tiết nằm tại [Triển khai](/info/deployment.html) và [Cấu hình](/info/configuration.html).

## Các tiện ích chống rò rỉ dữ liệu

Có một nhóm công cụ của Lolly tồn tại *chuyên biệt* để giữ tệp bên trong ranh giới bảo mật. Đó là các tiện ích quyền riêng tư.


- **Xóa dữ liệu ẩn**
 Xóa vị trí địa lý và mọi thông tin nhận dạng ẩn khỏi tài liệu và tệp phương tiện.

- **Trợ lý văn bản**  
Ẩn danh, mã hóa, định dạng, và thao tác với văn bản có cấu trúc lẫn phi cấu trúc. 

- **Nén PDF**
Ngăn chặn mọi khả năng xảy ra 'khủng hoảng giới hạn dung lượng email' nơi các công cụ web bên thứ ba rình rập và dữ liệu 

- **Nén PDF**
Ngăn chặn mọi khả năng xảy ra 'khủng hoảng giới hạn dung lượng email' nơi các công cụ web bên thứ ba rình rập và dữ liệu lọt ra ngoài. 

Tất cả những công cụ này đều là các phép biến đổi trên thiết bị: tệp hoặc dữ liệu của bạn đi vào, các byte đã được làm sạch đi ra, và **không hề có máy chủ nào để tải lên**. Chúng là đối lập có chủ đích với kiểu công cụ điển hình "tải tệp của bạn lên trang web của một người lạ để làm sạch nó" mà một nhân viên có thiện chí thường tìm đến khi không có lựa chọn khác.



## Tính xác định & khả năng tái tạo

Mọi đầu vào của công cụ đều có thể biểu diễn dưới dạng tham số URL, và cùng một đầu vào sẽ luôn tạo ra cùng một tệp. Điều đó kéo theo hai hệ quả đối với nhà vận hành:

- **Một URL chính là tài sản (artifact).** Commit đường liên kết, tái tạo tài sản theo yêu cầu - không cần đưa tệp nhị phân vào Git, không cần chạy theo "phiên bản mới nhất" trong các cuộc trò chuyện. ID của tài sản và công cụ là những cam kết vĩnh viễn, nên một liên kết được tạo ra hôm nay vẫn sẽ hoạt động đúng về sau.
- **CLI đi theo cùng một đường dựng hình (render path)** như GUI, nên các pipeline build và ứng dụng không bao giờ lệch nhau. Tạo ảnh OG, thẻ mạng xã hội, và hình ảnh trực quan hóa dữ liệu ngay tại thời điểm build, một cách có thể tái tạo được.

## Nguồn gốc dữ liệu & Content Credentials

Các bản xuất có thể mang **Content Credentials** - một manifest [C2PA](https://c2pa.org) đã được ký, gắn với một hash của các byte trong tệp. Bất kỳ thay đổi nào về sau đối với tệp đều phá vỡ con dấu, nên một trình xác minh hiểu C2PA sẽ **phát hiện sự thay đổi bằng mật mã học, khi ngoại tuyến**. Thông tin xác thực này *có thể phát hiện* giả mạo: nó báo hiệu việc giả mạo chứ không ngăn chặn nó, và đó chính xác là điều khiến việc xác minh hoàn toàn ngoại tuyến trở nên khả thi.

- **Bật mặc định, thực hiện trên thiết bị.** Khóa ký được tạo ngay trên thiết bị, không thể trích xuất (ngay cả Lolly cũng không đọc được), và việc ký diễn ra cục bộ - chỉ có bước *đăng ký* danh tính tùy chọn mới chạm đến mạng.
- **Các cấp độ tin cậy.** Một bản xuất chưa đăng ký thì vẫn hợp lệ về mặt cấu trúc nhưng được ký ẩn danh (`untrusted`). Đăng ký một **danh tính đã xác minh** (chứng chỉ ngắn hạn từ Lolly CA, gắn với một email) và các trình xác minh ghim gốc Lolly sẽ báo cáo `trusted` + email của người ký. Một cơ quan đóng dấu thời gian đáng tin cậy và dấu xanh xác thực từ bên thứ ba (tuân thủ C2PA) đang nằm trong lộ trình. Mỗi cấp độ đều được nêu rõ ràng, và một tệp chỉ tuyên bố mức độ tin cậy mà nó có thể chứng minh.
- **Thời hạn của thông tin xác thực** là lựa chọn của nhà vận hành/người dùng tại thời điểm ký: 7 / 30 / 90 / 365 ngày, mặc định là 30.
- **Việc xác minh diễn ra trên thiết bị.** Thả bất kỳ tệp nào vào `/valid` (hoặc `lolly validate <file>`) để nhận báo cáo ngoại tuyến cho biết liệu nó có thực sự được tạo bằng Lolly và không bị thay đổi kể từ đó hay không. Xem [Danh tính Content Credentials](/info/content-credentials-identity.html).

> **Lưu ý về khả năng tương tác.** Lolly hiện đã xác minh được thông tin xác thực của chính mình và nhiều thông tin từ bên thứ ba, ngoại tuyến. Có hai hạng mục tương tác đang được thực hiện: đọc đầy đủ các manifest C2PA claim **v2** từ những nhà sản xuất khác, và WebM - định dạng chưa có ánh xạ C2PA chuẩn hóa nào, nên Lolly đính kèm manifest dưới dạng một phần Matroska (các công cụ bên thứ ba xác minh được MP4 của Lolly ngay lập tức; WebM sẽ theo sau khi tiêu chuẩn ổn định).

## Mã hóa & đặt mật khẩu

Đối với các tệp cần được khóa khi di chuyển, mọi thứ đều diễn ra trên thiết bị:

- **Mật khẩu mở PDF** - *Tiêu chuẩn* là một lớp ngăn cản RC4 40-bit (mở được ở bất kỳ đâu, có thể truyền qua một liên kết); *Mạnh* là **AES-256** (PDF 2.0), được nhập tại thời điểm xuất và không bao giờ đặt trong một liên kết.
- **Tải xuống có khóa** - một tệp ZIP, một thư mục Projects, hoặc một lượt chạy hàng loạt đều có thể được khóa toàn bộ: *Tiêu chuẩn* dùng ZipCrypto (yếu, phổ quát) hoặc *Mạnh* dùng **AES-256** (WinZip AE-2). Phòng thủ theo chiều sâu: bất kỳ tệp PDF nào bên trong một zip Mạnh cũng *đồng thời* được khóa AES-256 riêng lẻ, nên nó vẫn bị khóa sau khi giải nén.
- **Liên kết chia sẻ được khóa bằng mật khẩu** - toàn bộ trạng thái của liên kết được mã hóa AES-256 dưới một khóa dẫn xuất từ PBKDF2; chỉ có bản mã được truyền đi, mật khẩu không bao giờ nằm trong liên kết, và việc giải mã diễn ra ngay trong trình duyệt của người nhận.

## Sẵn sàng cho môi trường cách ly mạng (air-gap)

Cách ly mạng là một **kiểu triển khai hạng nhất**, không phải một chế độ đặc biệt - Lolly chạy mà không cần mạng tại thời điểm dựng hình ngay từ đầu. Web shell là một PWA ưu tiên ngoại tuyến (service worker); font và WASM được lưu trữ trên thiết bị; trạng thái công cụ được lưu cục bộ thông qua host bridge, không bao giờ dùng `localStorage`. Bất kỳ công cụ nào chạm đến mạng đều chỉ làm vậy thông qua một khả năng `host.net` **nằm trong danh sách cho phép**, phải được khai báo trong manifest của nó - một shell không thể (hoặc không muốn) đáp ứng điều đó sẽ giả lập nó ra. Hãy phân phối các shell đến thiết bị qua MDM của bạn, hoặc chạy một thực thể bên trong mạng nội bộ, và một bản cài đặt cách ly mạng hoàn toàn vẫn có thể dựng hình, xuất tệp, mã hóa, và xác minh thông tin xác thực mà không có gì để "gọi về nhà" cả.

## Những điều nên biết

Một vài điều đáng làm rõ trước khi bạn triển khai rộng rãi:

- **Đang trong quá trình siết chặt.** Các thành phần mật mã học và bộ phân tích tệp đang trải qua quá trình siết chặt cấp doanh nghiệp của SUSE (xem ở trên) - mạnh theo thiết kế ngay hôm nay; hãy triển khai như phòng thủ theo chiều sâu ở nơi mà hợp đồng đòi hỏi sự đảm bảo đã được chứng nhận.
- **Hook của công cụ *không* phải một sandbox bảo mật.** `hooks.js` tùy chọn của một công cụ chạy với host bridge được tiêm vào, nhưng trong một trình duyệt shell nó thực thi trong realm của trang và *có thể* chạm đến `window`/`document`/`fetch`. Hãy đối xử với mã của công cụ giống như bất kỳ đoạn mã nào bạn chạy - hãy review nó. Đây là lý do vì sao một tổ chức vận hành catalog dùng chung có thể kiểm soát nó qua quy trình review Git; dù bằng cách nào, chỉ chạy những công cụ bạn đã review cho đến khi tính năng cách ly Worker ra mắt.
- **Content Credentials có thể phát hiện giả mạo.** Chúng phát hiện sự thay đổi chứ không ngăn chặn nó - xem các lưu ý về khả năng tương tác ở trên.
- **Hai cấp độ mã hóa.** Khóa *Tiêu chuẩn* là biện pháp ngăn cản nhanh, phổ quát; *Mạnh* (AES-256) là bảo vệ đầy đủ - hãy dùng Mạnh cho bất cứ thứ gì nhạy cảm, lưu ý rằng nó cần một trình đọc hiện đại.

## Bước tiếp theo

- **[Áp dụng & Quản trị](/info/adoption-governance.html)** - chân dung người dùng, chỉ số chuyển hướng yêu cầu, và mô hình quản trị-như-dữ-liệu đầy đủ.
- **[Triển khai](/info/deployment.html)** - deploy/serve/hybrid, MDM, và tự lưu trữ các dịch vụ.
- **[Cấu hình](/info/configuration.html)** - profiles, gói thương hiệu, kiểm soát năng lực, và cờ tính năng.
- **[Chính sách quyền riêng tư](/info/privacy.html)** - tuyên bố chính thức "không thu thập gì, không tải lên gì".
