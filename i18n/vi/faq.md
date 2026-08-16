# Hỏi đáp

Các câu hỏi thường gặp hiển thị ở phần accordion trên trang đích `/info`.

**Cách bảo trì:** mỗi tiêu đề `##` bên dưới là một câu hỏi; mọi thứ nằm dưới nó
(cho đến `##` kế tiếp) là câu trả lời. Câu trả lời dùng cùng loại markdown nhẹ như
phần còn lại của site - tách các đoạn bằng một dòng trống. Thêm, xoá hoặc
sắp xếp lại câu hỏi ở đây rồi chạy lại `npm run build:info` (hoặc `npm run dev:web`).
Mọi thứ phía trên `##` đầu tiên (tiêu đề này và các ghi chú này) đều bị bản build bỏ qua.

## Điều gì xảy ra khi tôi bật tuỳ chọn trên trang /profile?

Khi bạn mới dùng Lolly, mọi thứ bạn gõ ở bất kỳ đâu đều hoàn toàn riêng tư cho đến khi bạn chủ động muốn đưa thông tin đó ra ngoài qua tệp media hoặc một liên kết chia sẻ (nếu đang trực tuyến).

Khi đã bật tuỳ chọn, những thông tin hồ sơ bạn chọn sẽ được niêm phong vào thứ bạn tạo ra, ghi nhận bạn là nguồn. Không có gì được đưa vào nếu bạn không tự chọn.

Lolly tạo ra một lượng nội dung rất lớn. Chúng tôi áp dụng cách tiếp cận tối giản dữ liệu nghiêm ngặt để ngăn rủi ro.

## Feature flag là gì?

Feature flag bật hoặc tắt từng phần của Lolly. Thông thường quản trị viên là người kiểm soát chúng - với Lolly, bạn mới là người kiểm soát.

![Mỗi feature flag là một công tắc thuộc về bạn, nằm ngay trong hồ sơ của bạn chứ không phải trong bảng điều khiển của quản trị viên](/t/url-shot?url=%2F%23%2Fprofile%3Ffocus%3Dfeature-flags&width=1440&height=1800&dpi=192&waitMs=2000&format=svg&cropSelector=%23feature-flags-section&walker=1&dark=1&filename=pd-feature-flags)

## Làm sao để có ứng dụng di động hoặc máy tính?

Ai cũng có thể phân phối ứng dụng của riêng mình, và bộ công cụ cùng cấu hình của những ứng dụng đó sẽ rất khác nhau tuỳ theo đối tượng mà nó nhắm tới. Nên không có một ứng dụng duy nhất nào, trừ khi bạn tự làm ra nó hoặc một người liên quan đưa nó cho bạn.

## Vì sao lại có tên "Lolly Tools"?

**Lolly** vì tự do thật ngọt ngào, và vì ở Úc, New Zealand và Anh, "lolly" nghĩa là kẹo.

**Tools** vì một công cụ chỉ nằm yên cho đến khi bạn cầm nó lên. Nó không chạy khi bạn không dùng, và cũng không theo dõi bạn khi bạn đang dùng.

## Khi áp dụng Lolly, tôi có thể gặp những trở ngại nào?

Lolly gắn vào bất cứ chỗ nào bạn đang tạo tệp - CLI dùng chung engine với App, nên
một pipeline chạy lúc 2 giờ sáng không thể lệch khỏi thứ mà một người xem trước trong
trình duyệt. Rào cản khi áp dụng hiếm khi nằm ở kỹ thuật; nó nằm ở tổ chức. Hãy lường trước những điều sau:

**Phải có người biên soạn một catalog thương hiệu được tuyển chọn.** Lolly là một nền
tảng, không phải một gói template hoàn chỉnh của bạn. Với một *đợt triển khai có quản trị*,
ai đó phải định nghĩa catalog tài nguyên dùng chung (logo, bảng màu, phông chữ dưới dạng
ID vĩnh viễn) rồi viết manifest + template cho từng loại đầu ra. Tuy vậy cá nhân không
phải chờ điều đó - trong ứng dụng mở, ai cũng có thể nạp tệp của mình vào catalog và dựng
công cụ trong Design ngay từ ngày đầu.

**Không cần git để đóng góp.** Nhà thiết kế tự làm công cụ và template ngay
trong ứng dụng, rồi chia sẻ với đồng nghiệp hoặc gửi cho người sở hữu bản
triển khai để được đưa vào mặc định.

**Nó hẹp một cách có chủ đích - hãy định vị đúng như vậy.** Lolly không dành cho nội dung
đặt riêng hay nội dung chủ đạo. Nó *chính là* DAM cá nhân của bạn - được tiếp sức và tăng
lực bởi design system, công cụ và catalog của bạn - và nó *có* một canvas mở (Design),
nhưng ngay cả ở đó màu sắc, kiểu chữ và tài nguyên vẫn tuân theo các thiết lập thiết kế
chung đang bật, nên việc sắp xếp tự do vẫn nằm trong hệ thống. Đem so với Figma hay Canva
thì nó sẽ trông có vẻ hạn chế. Đánh giá đúng bản chất của nó - sinh tài nguyên quy mô lớn,
lặp lại, đã được vận hành hoá - thì không gì sánh được. Định vị sai là trở ngại phổ biến nhất.

**Quản lý thay đổi ở phía sản xuất.** Các quy trình hiện có vẫn chạy được hôm nay, kể cả
khi đầu ra sai nhận diện thương hiệu. Chuyển chúng sang engine nghĩa là phải kiểm thử lại và
học lại, và "chúng tôi vẫn tạo được tệp mà" trở thành cái cớ để không chuyển đổi. Hãy bắt đầu
bằng việc chuyển một đầu ra chất lượng sản xuất dễ thấy nhất rồi đặt bản trước/sau cạnh nhau.

Lolly nâng tất cả mọi thứ lên.


## Tiện ích khác với công cụ ở điểm nào?

**Câu trả lời cơ bản →** Tiện ích không phải lúc nào cũng cần render nên có thể có một trải nghiệm khác. 

**Câu trả lời thật →** Lý do tiện ích chạy được ngay trong Lolly Tools là để thêm một 'lớp phòng vệ tiện lợi' nữa nhằm giảm động cơ tuồn dữ liệu ra ngoài. 

Vì sao? Vì ai cũng biết mỗi ngày, người ta lấy **nội dung mật mà họ đang giữ** rồi giao cho một
trang web bất kỳ để làm một thao tác máy móc nhỏ:

- "**Nén PDF này**" → tải hợp đồng / phiếu lương / tài liệu hội đồng quản trị lên cho những bên không rõ danh tính.
- "**chuyển HEIC sang JPG**" → tải ảnh cá nhân (kèm GPS EXIF) lên một dịch vụ sống bằng quảng cáo
- "**cắt / đổi kích thước ảnh này**" → tải lên ảnh chụp màn hình sản phẩm hoặc tài nguyên chưa phát hành
- "**định dạng JSON này**" / "giải mã JWT này" → dán phản hồi API, token, khoá bí mật vào một trình định dạng
- "**gộp các PDF này**" → tải lên **hai tài liệu lẽ ra không bao giờ được nằm chung một máy chủ**

Những trang này và cái đuôi dài khổng lồ các bản sao của chúng **mặc định là không đáng tin**:
thời gian lưu trữ không rõ, thẩm quyền pháp lý không rõ, đơn vị xử lý phụ không rõ và một mô hình
kinh doanh quảng cáo/tiếp thị liên kết có đủ mọi động cơ để giữ lại thứ bạn đưa cho họ. Thao tác
thì tầm thường; **cái giá phải trả là nội dung.** 

Chúng tôi thắng cuộc chiến quản trị bằng sự tiện lợi và dịch vụ xuất sắc. 

![Màn hình Tiện ích gom lại những việc máy móc mà người ta thường giao cho một trang web bất kỳ, giờ chạy hết bên trong Lolly](/t/url-shot?url=%2F%23%2Fu&width=1440&height=900&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&tolerance=0.03&format=svg&walker=1&dark=1&filename=use-utilities&try=1)

## Lolly có sửa và render được tệp Figma, Penpot, Illustrator hay InDesign của tôi không?

Có. Mở **Design** rồi bấm **Import a design**: nó nhận tệp Figma **.fig** gốc (Save local copy), bản xuất **.penpot** của Penpot, tệp Illustrator **.ai** hoặc **.pdf**, tệp InDesign **.idml** (File → Export → InDesign Markup) hoặc **bất kỳ SVG nào** (cánh cửa rộng nhất - gần như mọi ứng dụng thiết kế đều xuất được). Không cần tài khoản, không cần plugin và không cần giấy phép ứng dụng thiết kế.

![Canvas mở của Design, nơi Import a design nằm trên thanh công cụ](/t/url-shot?url=%2F%23%2Ftool%2Fdesign%3Ftemplate%3D__blank__&width=1440&height=900&dpi=192&waitMs=2000&walker=1&format=svg&localize=1&dark=1&filename=design)

Các lớp hiện ra thành những hộp chỉnh sửa được trên canvas mở: chữ vẫn gõ lại được, hình vẫn là hình, ảnh được thêm vào thư viện ảnh của bạn, còn kiểu chữ và màu sắc tuân theo thiết lập chung của thương hiệu. Lưu lại và bố cục trở thành một template tái sử dụng được, có địa chỉ URL, ai có Lolly cũng điền lại được - và bạn có thể trộn thêm các công cụ sống (một mã QR, một biểu đồ) tự render lại khi tải. Từ đó nó render như mọi thứ khác trong Lolly - SVG, PDF, PNG và phần còn lại, tái tạo được từ URL của nó. Xem [Import a design](/info/design-import.html).

## Tôi có thể chia sẻ tác phẩm dưới dạng tệp thay vì liên kết không?

Có. Khi một liên kết không chở nổi mọi thứ (ảnh của chính bạn, văn bản dài), hộp thoại Share sẽ nói rõ những gì sẽ bị thiếu và đề nghị một tệp **.lolly** thay thế: một tệp chứa bản thiết kế, các ảnh nó dùng và, nếu bạn muốn, cả công cụ. Bạn quyết định bao nhiêu thứ được mang đi - tên và thông tin của bạn chỉ vào tệp nếu hồ sơ bạn bật tuỳ chọn, tác phẩm có bản quyền được giữ lại trừ khi bạn chủ động thêm vào, và ai mở một tệp có kèm công cụ sẽ được hỏi có tin tưởng nó không trước khi nó được chạy. Xem [Chia sẻ tác phẩm của bạn](/info/using.html#sharing-your-work).

## Hai người có thể cùng làm trên một bản thiết kế mà không cần internet không?

Có. Một người gửi lời mời (một liên kết, một mã QR hoặc một mã ngắn), người kia chấp nhận, và cả hai thiết bị cùng giữ một phiên trực tiếp - hiện diện, vòng focus và mọi thứ. Nó chạy trên bất kỳ mạng dùng chung nào, kể cả điểm phát sóng từ điện thoại dưới tầng hầm, vì không có máy chủ nào ở giữa. Xem [Làm việc cùng nhau](/info/collaborate.html).

## Các công cụ mang thương hiệu SUSE đi đâu rồi?

Chúng đã nằm trong một kho lưu trữ riêng, không công khai. Một bản clone công khai hoàn toàn không tải gói thương hiệu SUSE, nên bản build công khai chạy profile trung tính `lolly-start` - các công cụ cộng đồng không gắn thương hiệu cùng một thương hiệu trống để bạn điền của mình vào. SUSE vận hành instance riêng để bảo vệ nhãn hiệu của họ.

## Vì sao nó miễn phí? Có bẫy gì không?

**Chúng tôi làm Lolly cho chính mình.** SUSE cần hàng nghìn tệp đúng nhận diện thương hiệu, mỗi tệp đều niêm phong sẵn tên bên trong, làm ra mà không phải giao thứ gì cho dịch vụ bên ngoài. Nên chúng tôi làm một công cụ xử lý tất cả những việc đó ngay trên thiết bị, rồi phát hành dưới dạng mã nguồn mở, như mọi thứ khác chúng tôi làm. Chúng tôi vẫn duy trì nó vì ngày nào cũng dùng. **Không có ràng buộc nào:** mọi thứ ở đây đều chạy được dù có hay không có chúng tôi.

Ranh giới đó được vạch trong giấy phép, không phải trong một lời hứa: bất cứ thứ gì chạy cục bộ đều miễn phí, mãi mãi. Một phiên bản đã phát hành được cấp phép theo cách không thể thu hồi lại, và không có thoả thuận đóng góp nào có thể cấp phép lại công sức của bất kỳ ai. Xem [định vị](/info/positioning.html) để đọc tuyên bố đầy đủ.

## SUSE giữ riêng bao nhiêu? (hay là bao giờ thì lật kèo)

Engine, các shell, các schema và những công cụ không gắn thương hiệu đều là mã nguồn mở; nhãn hiệu của SUSE cùng các công cụ gắn thương hiệu là phần giữ riêng, và chúng đã được tách ra sẵn. Bạn có thể tìm thấy một instance Lolly không gắn thương hiệu tại [lolly.ART](https://lolly.art).

Ranh giới này mang tính cấu trúc chứ không phải một lời hứa. Mọi phiên bản đã phát hành đều là mã nguồn mở và không thể rút lại, không có thoả thuận đóng góp nào có thể cấp phép lại công sức của bất kỳ ai, và thứ duy nhất được giữ lại là nhãn hiệu. Khi một công ty khác đóng mã nguồn Linux doanh nghiệp của họ vào năm 2023, SUSE đã đồng sáng lập [OpenELA](https://openela.org) để giữ mã đó luôn mở - chính là lập trường mà dự án này kế thừa.

Nói rõ luôn: SUSE *đang* xây bộ công cụ nội bộ để tích hợp Lolly vào hệ thống IT của mình - đó là chuyện thiết lập nội bộ của SUSE, không phải chuyện phát triển công khai hay khép kín. Lolly cũng hướng tới việc được build qua [Open Build Service](https://openbuildservice.org/), với các artifact chuỗi cung ứng an toàn do [SUSE Application Collection](https://apps.rancher.io/applications) cung cấp.

## Logo Lolly kia là vị gì?

Người thì bảo vị chanh, người thì bảo vị bạc hà, đôi khi lại là táo, Lolly mang đến vị ngọt, còn hương vị là do bạn tạo nên!
