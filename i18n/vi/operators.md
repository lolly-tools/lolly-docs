# Lolly dành cho người vận hành

### Một chiến lược an ninh & tình báo phòng thủ theo chiều sâu - vô tình cũng là một nền tảng sản xuất sáng tạo

Hệ miễn dịch tổ chức zero-trust bao bọc quanh những gì bạn đã làm - để công việc sáng tạo thường ngày mà các đội của bạn cần mỗi ngày diễn ra *bên trong* vành đai của bạn thay vì rò rỉ ra ngoài.

**Bạn được gì.** Bạn trở thành người đã nói có với một thứ vừa an toàn *vừa* phổ biến. Bạn bịt một lỗ hổng rò rỉ dữ liệu, đạt được năng lực mới và xóa bỏ một hàng đợi yêu cầu trong một bước - một chiến thắng an ninh hiếm hoi khiến bạn được yêu thích hơn, không phải ít hơn. Không còn cuộc gọi lúc 3 giờ sáng từ bộ phận pháp lý vì tệp bị hạn chế hoặc dữ liệu khách hàng lọt vào một công cụ web ngẫu nhiên; ít nhà cung cấp SaaS, hợp đồng và kiểm toán hơn trên bàn làm việc của bạn; và một dấu vết kiểm toán có thể tái tạo hoàn toàn mà bạn có thể chỉ ra khi ai đó hỏi. Bạn ngủ ngon hơn, và làm sáng sủa thêm vài ngày khi làm điều đó.

Lolly không phải công cụ sáng tạo hạng hai: nó đặt đầu ra chất lượng sản xuất vào tay mọi người, và trải nghiệm sáng tạo theo hướng dẫn thương hiệu không hề kém cạnh. Lý do khiến nó *an toàn* để trao rộng rãi nằm ở kiến trúc: không có gì được tải lên mà bạn không tự đặt vào đó, mọi kết quả đều có thể tái tạo được và mọi bản xuất có thể mang nhiều lớp hồ sơ mật mã hàng đầu ngành. Bất kể một tài liệu đến bàn làm việc của bạn bằng cách nào, bạn có thể thấy toàn bộ nguồn gốc của nó, liệu nó có bị can thiệp hay không và liệu bạn có thể tái tạo nó chính xác từng pixel hay không.

> **Hiện trạng.** Các thuộc tính an ninh của Lolly vốn mạnh theo thiết kế, và các engine mật mã cùng phân tích tệp của nó đang trải qua quá trình gia cố hạ tầng cấp doanh nghiệp của SUSE. Các con dấu, ký số trên thiết bị và mã hóa bên dưới là thật và có thể bảo vệ được ngay bây giờ, và đang tiến tới chứng nhận độc lập - vì vậy khi một hợp đồng yêu cầu đảm bảo được chứng nhận, hãy triển khai chúng như phòng thủ theo chiều sâu trong khi quá trình đó hoàn tất.

## Lợi thế chiến lược

Cách công việc sáng tạo thường ngày thường được thực hiện là một bề mặt rủi ro: tệp gửi qua email cho nhà thầu thiết kế bên ngoài, tài sản thương hiệu tải lên hàng chục trình chỉnh sửa SaaS, dữ liệu khách hàng dán vào công cụ web của người lạ để "chỉ làm nhanh một hình ảnh." Mỗi trường hợp đó đều là dữ liệu rời khỏi tầm kiểm soát của bạn.

Lolly đảo ngược điều đó. Công việc từng *thúc đẩy* những rò rỉ đó - thẻ trích dẫn, banner bản địa hóa, thẻ tên sự kiện, ảnh chụp màn hình đã ẩn danh - giờ diễn ra trên một công cụ chạy ngay trên thiết bị của nhân viên, dựa trên thương hiệu của bạn, không có máy chủ nào tham gia. Bạn không thêm một lớp kiểm soát lên trên một quy trình rủi ro; bạn đã thay thế quy trình rủi ro đó bằng một quy trình không có đường rò rỉ dữ liệu ngay từ đầu.

- **Cấu hình thuộc về bạn.** Engine và các shell là mã nguồn mở (MPL-2.0). Xếp chồng lớp xác thực, đo lường từ xa hay CA của riêng bạn; tự lưu trữ hoặc không; bạn nắm toàn quyền kiểm soát tính năng và chi phí, được git theo dõi, không bị khóa vào một cơ sở dữ liệu SaaS.
- **Quản trị có thể là dữ liệu, không phải bảng điều khiển.** Khi bạn muốn kiểm soát đó, hãy quản lý catalog công cụ như một kho Git - xét duyệt pull-request trở thành phê duyệt thương hiệu, với dấu vết kiểm toán đầy đủ và khôi phục tức thì mọi template mà lực lượng lao động của bạn có thể chạm tới. Đó là một lựa chọn, không phải nghĩa vụ, và nó chỉ đổ xuống đúng một bàn làm việc: người sáng tạo làm việc hoàn toàn trong ứng dụng, lưu những gì họ tạo ra như một **phiên làm việc** và chuyển tiếp nó dưới dạng liên kết chia sẻ, bản sao lưu hoặc cộng tác trực tiếp - không thứ nào trong số đó cần git. Khi một trong những phiên đó xứng đáng trở thành điểm khởi đầu vĩnh viễn, bất kỳ ai điều hành việc triển khai sẽ mở liên kết, ghi lại các giá trị của nó thành một **template** trên công cụ đó trong gói thương hiệu và commit. Từ đó nó xuất hiện trong bộ chọn "Tạo mới từ template" của công cụ và có thể liên kết sâu dưới dạng `?template=<id>`. Git là bước khóa của quản trị viên, dùng một lần, và không bao giờ là thứ người sáng tạo phải chạm tới. Xem [Adoption & Governance](/info/adoption-governance.html).
- **Rào chắn mang tính cấu trúc.** Các ràng buộc thương hiệu được mã hóa cứng vào template, không phải công bố như hướng dẫn mà người ta có thể phớt lờ. Đầu ra sai không bị ngăn cản - nó đơn giản là không thể biểu diễn được.

> **Bạn quản trị toàn bộ chuỗi tiếp sức.** Một nhà sáng tạo soạn ra các quy tắc và một nhà phát triển mở rộng chúng, nhưng chính người vận hành mới khiến vòng đời đó an toàn để chạy trên toàn tổ chức - cùng một công cụ cho phép một nhân viên bán hàng tự phục vụ trên máy bay cũng là công cụ bạn có thể giới hạn qua xét duyệt Git, triển khai qua MDM của bạn và xác minh bằng mật mã. Xem cách các vai trò cộng hưởng trong [Vòng đời của một chiến dịch](/info/overview.html#the-lifecycle-of-a-campaign), và cách bạn quản trị nó trong [Adoption & Governance](/info/adoption-governance.html).

## Xóa bỏ hàng đợi yêu cầu trong khi nhân rộng nội dung.

Một mục tiêu của Lolly là **giảm tải yêu cầu thiết kế**: các yêu cầu thường ngày không bao giờ cần đến tay nhà thiết kế vì người cần tài sản đó tự tạo ra nó, đúng cách, trong vài phút. Mỗi ticket được giảm tải vừa là một chiến thắng năng suất vừa là một tệp ít hơn phải chuyển tay.

Lolly được xây dựng để phù hợp với cách tổ chức của bạn thực sự vận hành - không có một cách triển khai đúng duy nhất:

- **Triển khai, đừng phục vụ (serve).** Chuyển Lolly tới các thiết bị qua MDM hiện có của bạn (Intune, Jamf, Munki…). Nó chạy cục bộ như một ứng dụng desktop/di động hoặc một PWA ngoại tuyến - hoạt động sau bất kỳ tường lửa nào, trong bất kỳ môi trường cách ly mạng nào, không cần máy chủ để duy trì và IT kiểm soát nhịp độ cập nhật.
- **Chỉ phục vụ (serve).** Chạy một instance trong mạng của bạn (hoặc sau VPN); người dùng truy cập nó qua trình duyệt, không cài đặt gì. Xuất bản một công cụ một lần, mọi người có nó ngay lập tức; kết hợp với IdP của bạn để kiểm soát truy cập.
- **Kết hợp.** Ứng dụng cục bộ cho công việc thực địa ngoại tuyến, phiên bản trình duyệt luôn cập nhật cho các máy mượn - cả hai đều trỏ tới cùng một thư viện công cụ.

Các mô hình triển khai đầy đủ và hướng dẫn quản trị nằm trong [Deployment](/info/deployment.html) và [Configuration](/info/configuration.html).

## Tiện ích chống rò rỉ dữ liệu

Một nhóm công cụ của Lolly - các tiện ích quyền riêng tư - tồn tại *đặc biệt* để giữ tệp bên trong vành đai.


- **Xóa dữ liệu ẩn**
 Loại bỏ vị trí và toàn bộ thông tin nhận dạng ẩn khỏi tài liệu và tệp phương tiện.

- **Text Helper**  
Ẩn danh hóa, mã hóa, định dạng và xử lý văn bản có cấu trúc lẫn phi cấu trúc. 

- **Compress PDF**
Thu nhỏ một file PDF quá khổ ngay trên thiết bị, để không ai phải tìm đến một trang web "nén PDF giúp tôi" của bên thứ ba mỗi khi file quá lớn để gửi email - đúng chỗ dữ liệu dễ lọt ra ngoài. 

Tất cả các công cụ này đều là phép biến đổi trên thiết bị: file hoặc dữ liệu của bạn đi vào, các byte đã được làm sạch đi ra, và **không có server nào để tải lên**. Chúng là điều ngược lại có chủ ý với công cụ "tải file của bạn lên trang web của người lạ để làm sạch nó" mà một nhân viên có thiện chí thường tìm đến.

![Strip Hidden Data: file được đưa lên canvas và huy hiệu ghi rõ rằng không có gì được tải lên](/t/url-shot?url=%2F%23%2Ftool%2Fstrip-data&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=aud-strip-data)

Text Helper là thỏa thuận tương tự dành cho văn bản thay vì file. Đó là bàn làm việc dạng tab mà một nhân viên lẽ ra phải đi tìm trên trang web của người lạ, và nó không khai báo bất kỳ input nào vì không có gì nó chạm vào từng rời khỏi trang.

![Bàn làm việc của Text Helper - một dải tab thao tác phía trên một thẻ ghi rằng không có gì bạn dán vào rời khỏi thiết bị của bạn](/t/url-shot?url=%2F%23%2Ftool%2Ftext-helper&width=1200&height=750&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-content&dark=1&filename=ov2-text-helper)

Compress PDF hoàn thiện bộ ba: file đính kèm quá khổ thu nhỏ theo mức chất lượng bạn chọn, trên chính máy đang chứa nó.

![Compress PDF - một mức chất lượng và một công tắc thang xám ở bên trái, một vùng thả file PDF của bạn ở bên phải và không có tải lên ở bất kỳ đâu](/t/url-shot?url=%2F%23%2Ftool%2Fcompress-pdf&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=ov2-compress-pdf)

## Tính tất định & khả năng tái tạo

Mọi input của công cụ đều có thể biểu diễn dưới dạng tham số URL, và cùng một input luôn tạo ra cùng một file. Điều đó kéo theo hai hệ quả cho người vận hành:

- **URL chính là sản phẩm.** Commit đường link, tạo lại tài sản khi cần - không có file nhị phân nào phải commit vào Git, không phải chạy theo "phiên bản mới nhất" trong chat. ID tài sản và ID công cụ là hợp đồng vĩnh viễn, nên một link tạo hôm nay vẫn phân giải được về sau.
- **CLI đi cùng một đường render** như GUI, nên pipeline build và ứng dụng không bao giờ lệch nhau. Tạo ảnh OG, thẻ mạng xã hội và hình trực quan dữ liệu ngay tại thời điểm build, một cách tái tạo được.

Prompt to Image là tính tất định ở dạng thuần túy nhất: văn bản là toàn bộ input, ảnh đã dàn chữ là toàn bộ output, và cùng một văn bản luôn dàn chữ giống hệt nhau.

![Prompt to Image - một khối văn bản prompt được dàn chữ thành một ảnh vuông, không có gì trong kết quả mà không có trong input](/t/url-shot?url=%2F%23%2Ftool%2Fprompt-card%3Ffull&width=1440&height=900&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-prompt-to-image)

## Nguồn gốc & Content Credentials

![Vùng thả của Verify chấp nhận bất kỳ file nào, từ bất kỳ nguồn nào, và đọc nó mà không gọi mạng](/t/url-shot?url=%2F%23%2Fverify&width=1440&height=900&dpi=192&waitMs=1800&waitSelector=.valid-drop&cropSelector=.valid-drop&format=svg&walker=1&dark=1&filename=aud-verify-drop)

Bản xuất có thể mang **Content Credentials** - một manifest [C2PA](https://c2pa.org) đã ký, gắn với hash của các byte trong file. Bất kỳ thay đổi nào sau đó với file đều phá vỡ con dấu, nên một trình xác minh hiểu C2PA **phát hiện việc bị thay đổi bằng mật mã học, ngoại tuyến**. Chứng chỉ này có tính *chỉ báo* can thiệp: nó gắn cờ việc bị can thiệp thay vì ngăn chặn nó, và chính điều đó khiến việc xác minh hoàn toàn ngoại tuyến trở nên khả thi.

- **Bật mặc định, ngay trên thiết bị.** Khóa ký được tạo trên thiết bị, không thể trích xuất (kể cả Lolly cũng không đọc được) và việc ký diễn ra cục bộ - chỉ *đăng ký* danh tính tùy chọn mới chạm tới mạng.
- **Các cấp độ tin cậy.** Một bản xuất chưa đăng ký vẫn đúng định dạng nhưng được ký ẩn danh (`untrusted`). Đăng ký một **danh tính đã xác minh** (chứng chỉ ngắn hạn từ Lolly CA, gắn với một email) và trình xác minh nào ghim gốc Lolly sẽ báo `trusted` cùng email của người ký. Cơ quan cấp dấu thời gian đáng tin và huy hiệu xanh xác thực bởi bên thứ ba (tuân thủ C2PA) đang nằm trong lộ trình. Mỗi cấp độ đều tường minh, và một file chỉ bao giờ tuyên bố mức tin cậy mà nó có thể chứng minh.
- **Thời hạn chứng chỉ** do người vận hành/người dùng tự chọn tại thời điểm xuất: 7 / 30 / 90 / 365 ngày, mặc định 30.
- **Lolly Imprint.** Một tín hiệu thứ hai, bổ trợ, **bật mặc định**: một watermark pixel vô hình được nướng vào các bản xuất raster (và các ảnh raster do Lolly render bên trong PDF/PPTX, không bao giờ là ảnh nhúng của chính người dùng). Trong khi chứng chỉ mất hiệu lực khi container thay đổi, Imprint vẫn sống sót qua một lần lưu lại hoặc chụp màn hình - một dấu hiệu bền "các pixel này từng đi qua Lolly", chỉ báo hiện diện, không có dữ liệu cá nhân. Đây là bảo mật-qua-che-giấu, không phải một tuyến phòng thủ vững chắc, và bổ trợ cho chứng chỉ chứ không thay thế nó. `imprint=0` để từ chối.
- **Durable Content Credentials (tùy chọn).** Một bản xuất raster có thể mang thêm một dấu *bền* vô hình mã hóa một định danh liên kết mềm, để chứng chỉ C2PA có thể được khôi phục ngay cả sau khi một lượt tải lên mạng xã hội hoặc lưu lại đã tước bỏ metadata của file - trường hợp mà một chứng chỉ thường sẽ bị mất. Nó chỉ áp dụng cho raster và tốn một lượt mã hóa bằng mạng nơ-ron, nên mặc định tắt (`durable=1` để bật). Lolly nhận diện dấu bền của chính mình ngoại tuyến trên `/verify` ngay từ hôm nay; việc khôi phục bởi công cụ bên thứ ba (ví dụ Adobe) sẽ theo sau khi giải pháp liên kết mềm của toàn ngành hoàn thiện.
- **Xác minh diễn ra trên thiết bị.** Thả bất kỳ file nào vào `/verify` (hoặc `lolly validate <file>`) để nhận báo cáo ngoại tuyến về việc nó có thực sự được tạo bằng Lolly và không bị thay đổi kể từ đó hay không. Chế độ xem Verify trên web cũng gắn cờ nội dung do AI tạo, phát hiện Lolly Imprint, xác minh chữ ký **SEAL** (một chữ ký cấp byte - không có yêu cầu mạng nào: engine nhận một bộ phân giải khóa DNS được *tiêm vào*, và chưa có shell nào tiêm một cái vào hôm nay, nên một bản ghi mang sẵn khóa `pk=` nội tuyến sẽ xác minh hoàn toàn ngoại tuyến, trong khi một bản ghi khóa-theo-DNS sẽ báo "không có bộ phân giải khóa và không có khóa nội tuyến" thay vì gọi ra ngoài - xem `SealPublicKeyResolver` trong `engine/src/seal.ts`), tùy chọn quét sâu để tìm watermark pixel của bên thứ ba (tải mô hình trên thiết bị một lần) và hiển thị dữ liệu ẩn - tất cả mà không tải file lên. Xem [Content Credentials Identity](/info/content-credentials-identity.html).

> **Ghi chú về khả năng liên thông.** Lolly xác minh chứng chỉ của chính mình và nhiều chứng chỉ bên thứ ba ngoại tuyến ngay hôm nay, kể cả đọc manifest C2PA claim **v2** từ các nhà sản xuất khác. Hai loại container vẫn đang trong quá trình hoàn thiện, cả hai đều vì C2PA chưa có ánh xạ chuẩn hóa cho chúng, nên Lolly mang chứng chỉ ở một vị trí riêng và trình xác minh của chính Lolly là bên đọc lại nó: **WebM** (manifest đi kèm như một tệp đính kèm Matroska) và **Ogg/Opus** (một trường `C2PA=` trong header comment OpusTags, với dải byte đó bị loại khỏi việc gắn kết để âm thanh vẫn hash giống hệt). Mọi thứ khác đều đóng dấu đúng chuẩn - công cụ bên thứ ba xác minh MP4, M4A, MP3, WAV, PNG, JPEG và PDF của Lolly ngay lập tức. Xem `engine/src/c2pa-containers.ts` để biết cả hai ánh xạ; chúng sẽ hội tụ về chuẩn một khi chuẩn ổn định.

## Mã hóa & đặt mật khẩu

Với các file cần được khóa khi di chuyển, mọi việc đều diễn ra trên thiết bị:

![Thẻ khóa trong bảng xuất: một mật khẩu, và một lựa chọn tường minh giữa hai cấp độ](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools%26format%3Dpdf%26password%3Ddemo%26options&width=1440&height=900&dpi=192&waitMs=2200&cropSelector=.export-pdfpass&walker=1&format=svg&dark=1&filename=aud-pdf-lock)

- **Mật khẩu mở PDF** - *Standard* là mức răn đe RC4 40-bit (mở được ở bất kỳ đâu, có thể đi kèm trong một link); *Strong* là **AES-256** (PDF 2.0), gõ lúc xuất và không bao giờ đặt trong link.
- **File tải xuống có khóa** - một ZIP, một thư mục Projects hay một lượt chạy hàng loạt có thể được khóa toàn bộ: *Standard* ZipCrypto (yếu, phổ dụng) hoặc *Strong* **AES-256** (WinZip AE-2). Phòng thủ theo lớp: bất kỳ PDF nào trong một zip Strong *cũng* được khóa AES-256 riêng, nên nó vẫn bị khóa sau khi giải nén.
- **Link chia sẻ có khóa mật khẩu** - toàn bộ trạng thái của link được mã hóa AES-256 dưới một khóa dẫn xuất bằng PBKDF2; chỉ ciphertext di chuyển, mật khẩu không bao giờ nằm trong link, và việc giải mã diễn ra trong trình duyệt của người nhận.

## Sẵn sàng air-gap

Air-gap là một **cách triển khai hạng nhất**, không phải một chế độ đặc biệt - Lolly chạy không cần mạng lúc render ngay từ đầu. Web shell là một PWA offline-first (service worker); font và WASM được lưu trên thiết bị; trạng thái công cụ được lưu cục bộ qua host bridge, không bao giờ dùng `localStorage`. Cách được hỗ trợ để một công cụ chạm tới mạng là năng lực `host.net` **có trong danh sách cho phép** mà nó khai báo trong manifest - một shell không thể (hoặc không muốn) đáp ứng sẽ trả về một bản giả lập trống. Đó là một hợp đồng về khả năng tương thích chứ không phải một ranh giới được cưỡng chế (xem ghi chú về hooks bên dưới), đó là lý do việc rà soát mã công cụ vẫn là biện pháp kiểm soát chính - dù trên một thiết bị air-gapped thì cũng chẳng có gì để chạm tới theo cách nào. Triển khai các shell tới thiết bị qua MDM của bạn, hoặc phục vụ một instance trong mạng nội bộ, và một bản cài đặt air-gapped hoàn toàn vẫn render, xuất, mã hóa và xác minh chứng chỉ mà không có gì để gọi về.

## Điều nên biết

Vài điều đáng nắm rõ trước khi bạn triển khai:

- **Đang trong quá trình gia cố.** Mật mã học và các bộ phân tích đang trải qua quá trình gia cố ở quy mô doanh nghiệp của SUSE (xem ở trên) - đã vững chắc theo thiết kế ngay hôm nay; triển khai như một lớp phòng thủ bổ sung khi hợp đồng đòi hỏi mức đảm bảo được chứng nhận.
- **Tool hooks *không phải* là một sandbox bảo mật.** `hooks.js` tùy chọn của một công cụ chạy với host bridge được tiêm vào, nhưng trong một shell trình duyệt nó thực thi trong realm của trang và *có thể* chạm tới `window`/`document`/`fetch`. Hãy đối xử với mã công cụ như bất kỳ mã nào bạn chạy - rà soát nó. Đây là lý do một tổ chức vận hành một catalog dùng chung có thể kiểm soát qua rà soát Git; dù thế nào, chỉ chạy các công cụ bạn đã rà soát cho tới khi cách ly Worker ra mắt.
- **Content Credentials mang tính chỉ báo can thiệp.** Chúng phát hiện việc bị thay đổi thay vì ngăn chặn nó - xem ghi chú về khả năng liên thông ở trên.
- **Hai cấp độ mã hóa.** Khóa *Standard* là mức răn đe nhanh, phổ dụng; *Strong* (AES-256) là bảo vệ toàn diện - hãy chọn Strong cho bất cứ thứ gì nhạy cảm, lưu ý là nó cần một trình đọc hiện đại.

## Đi tiếp từ đâu

- **[Security & Verification](/info/security.html)** - các chuẩn, thành phần nguyên thủy, mô hình tin cậy và kiểm thử đằng sau chứng chỉ và mã hóa ở trên.
- **[Adoption & Governance](/info/adoption-governance.html)** - các persona, chỉ số chuyển hướng (deflection) và governance-as-data đầy đủ.
- **[Deployment](/info/deployment.html)** - triển khai/phục vụ/kết hợp, MDM và tự lưu trữ các dịch vụ.
- **[Configuration](/info/configuration.html)** - profile, brand pack, gating năng lực và cờ tính năng.
- **[Privacy Policy](/info/privacy.html)** - tuyên bố chính thức về những gì được và không được thu thập, lưu trữ và gửi đi.
- **[Server Surface](/info/server-surface.html)** - danh mục đầy đủ những gì chạy phía server (hai thành phần tùy chọn) so với trên thiết bị.
