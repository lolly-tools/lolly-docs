# Lolly so sánh như thế nào

Nền tảng này phù hợp ở đâu trong bối cảnh công cụ sáng tạo rộng lớn hơn, và nơi nó cố tình **không** tham gia.

> **Trạng thái thử nghiệm:** Lolly là một nguyên mẫu thử nghiệm khép kín (closed-pilot), chưa phải là sản phẩm hoàn chỉnh, và tính bảo mật của nó hiện đang trải qua quá trình gia cố hạ tầng nghiêm ngặt của SUSE, chuẩn bị cho quy mô doanh nghiệp. Định vị này là nơi Lolly *hướng tới* - trang [Áp dụng & Quản trị](/info/adoption-governance.html#status) trình bày cách điều này đang được kiểm chứng trong thực tế.

## Bối cảnh

![Layout Studio's free canvas, where the colours, faces and assets on offer are the brand's own](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio%3Ftemplate%3D__blank__&width=1440&height=900&dpi=192&waitMs=2400&walker=1&format=svg&dark=1&filename=aud-open-canvas&sweep=1)

| Khả năng | Canva (Canvas mở) | Cổng thương hiệu (Tạo mẫu DAM) | Illustrator (Desktop chuyên nghiệp) | Figma / Penpot (Trực tuyến chuyên nghiệp) | **Lolly (Ưu tiên ràng buộc)** |
|---|---|---|---|---|---|
| Tạo nội dung hàng loạt | một phần | ✗ | ✗ | ✗ | **✓** |
| Hoạt động hoàn toàn ngoại tuyến | ✗ | ✗ | ✓ | một phần | **✓** |
| Logic mẫu & ràng buộc cứng | ✗ | một phần | ✗ | một phần | **✓** |
| Không yêu cầu kỹ năng thiết kế | một phần | ✓ | ✗ | ✗ | **✓** |
| Content Credentials tự động | ✗ | ✗ | một phần | ✗ | **✓** |
| Công cụ kết hợp với công cụ khác | ✗ | ✗ | ✗ | ✗ | **✓** |
| Engine mở, không khóa theo SaaS | ✗ | ✗ | ✗ | một phần | **✓** |
| Chứng chỉ nội dung C2PA | ✗ | ✗ | ✗ | ✗ | **✓** |
| Nguồn gốc cấp độ pháp y (tùy chọn bật) | ✗ | ✗ | ✗ | ✗ | **✓** |
| Ứng dụng Di động và Desktop | ✓ | ✗ | ✗ | một phần | **✓** |
| Dòng lệnh & TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

Hình dạng của khoảng trống này rất rõ ràng: không có gì trong bối cảnh hiện tại mang lại đầu ra ưu tiên ràng buộc, có khả năng ngoại tuyến, yêu cầu kỹ năng thấp, dễ tiếp cận nội bộ, mang tính tạo sinh. Lolly giờ đây có canvas mở của riêng mình - **Layout Studio**, một canvas tự do thao tác trực tiếp - nhưng có một khác biệt quyết định so với cột Canva: màu sắc, kiểu chữ và tài nguyên đặt trên đó tuân theo các biến toàn cục của thương hiệu, vì vậy ngay cả sự sắp xếp tự do vẫn giữ tính ưu tiên ràng buộc. Điều mà Lolly vẫn **không** phải là một bộ công cụ thiết kế không ràng buộc; các nhà thiết kế sẽ tiếp tục sử dụng Illustrator và Figma cho công việc riêng biệt - và khi công việc đó cần trở thành một tài nguyên được quản trị, có thể tái tạo, tính năng [Nhập thiết kế](/info/design-import.html) của Layout Studio sẽ đưa tệp Figma/Illustrator/Penpot hoàn chỉnh lên canvas dưới dạng các khối có thể chỉnh sửa, tuân theo thương hiệu.

## Dùng để

![Deck Studio in the split view - the deck's slides listed as blocks on the left, the laid-out deck rendering on the right](/t/url-shot?url=%2F%23%2Ftool%2Fdeck-studio&width=1440&height=900&dpi=192&waitMs=2600&walker=1&format=svg&dark=1&filename=ov2-deck-studio-output)

Deck Studio là thước đo tốt cho giới hạn trên ở đây: cả một bộ slide được khai báo dưới dạng dữ liệu, được dàn trực tiếp trên canvas, rồi xuất ra thành tệp PowerPoint gốc có thể chỉnh sửa.

- Tạo nhanh các tài nguyên sáng tạo được vận hành hóa (thẻ sự kiện, huy hiệu, chữ ký, cảnh báo)
- Sắp xếp tự do trên canvas mở (Layout Studio) khi các thành phần - màu sắc, kiểu chữ, biểu tượng, hình ảnh - phải luôn tuân theo các biến toàn cục của thương hiệu
- Đưa một thiết kế Figma, Illustrator, InDesign hoặc Penpot hoàn chỉnh vào (tính năng Nhập thiết kế của Layout Studio) để nó có thể được chỉnh sửa, quản trị và render lại một cách xác định ở mọi định dạng của Lolly
- Luồng "điền ba trường, nhận tài nguyên hoàn chỉnh" theo kiểu một-đến-nhiều - bao gồm cả các lượt chạy hàng loạt từ bảng tính/CSV trong lưới hàng loạt `/pro` (dán hoặc nhập các hàng, mỗi hàng cho ra một tài nguyên hoàn chỉnh, tải xuống dưới dạng zip)
- Đầu ra mang thương hiệu, luôn bật và lặp lại định kỳ
- Những trường hợp mà việc kiểm soát tập trung cách thể hiện thương hiệu quan trọng hơn tính linh hoạt biểu đạt

## Không dùng để

- Nội dung chủ lực hoặc đặt riêng theo yêu cầu (biển quảng cáo lớn, video quan trọng)
- Công việc chiến dịch độc nhất thực sự cần đến nhà thiết kế
- Việc lên ý tưởng cần thoát hoàn toàn khỏi hệ thống thương hiệu - canvas mở của Lolly vẫn khiến màu sắc, kiểu chữ và tài nguyên tuân theo các biến toàn cục của thương hiệu, và đó chính là mục đích

## Phê duyệt công cụ, không phải tệp

![The producer's whole job: type the words. Type, colour and spacing were settled when the tool was approved](/t/url-shot?url=%2F%23%2Ftool%2Fwordmark%3Ftext%3DApproved&width=1440&height=900&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=aud-approve-the-tool)

Mọi công cụ khác trong bối cảnh này đều tạo ra một *tệp* mà rồi phải được kiểm tra - một quản lý thương hiệu trong một luồng Slack, bộ phận pháp lý xem phần miễn trừ trách nhiệm, một vòng sửa đổi, rồi một lượt rà soát nữa. Lolly đẩy việc phê duyệt **lên một bước ở phía trên**. Các quy tắc thương hiệu - mã hex chính xác, tệp phông có giấy phép, lề bleed, khoảng cách - được mã hoá cứng vào HTML và CSS của công cụ, nên template *về mặt vật lý không thể* xuất ra một tài nguyên lệch thương hiệu. Bản thân layout mới là phần chịu lực.

Vì vậy bạn thôi phê duyệt đầu ra và bắt đầu phê duyệt **công cụ** tạo ra chúng. Phê duyệt một lần, và mọi tài nguyên nó từng tạo ra đều đã được phê duyệt trước ngay từ cách nó được dựng nên - không cần con người trong vòng lặp, không cần chu trình rà soát, ở bất kỳ khối lượng nào.

Đây chính là bước chuyển hệ hình mà engine mang tính xác định thực sự mang lại: nó không phải bản nhanh hơn của quy trình phê duyệt cũ, nó xoá bỏ quy trình đó. Với đội sáng tạo, đó là một rào chắn an toàn, không phải một sự thay thế - bạn vẫn là người ném bóng (dữ liệu, câu chữ, hình ảnh) còn code là hàng chắn giữ mọi lần ném khỏi rơi xuống rãnh.

| Phê duyệt tài nguyên theo cách cũ | Phê duyệt công cụ, theo cách của Lolly |
|---|---|
| Mọi tệp hoàn chỉnh đều được kiểm tra, từng cái một | Công cụ được kiểm tra một lần |
| Yêu cầu → nhà thiết kế dựng → thương hiệu rà soát → pháp lý kiểm tra → sửa đổi → rà soát lại | Một thay đổi tham số → tài nguyên hoàn chỉnh |
| Nhà thiết kế, quản lý thương hiệu, pháp lý và người yêu cầu đều trong vòng lặp | Chỉ người sản xuất, tự làm một mình |
| Mỗi tài nguyên mất nhiều ngày | Mỗi tài nguyên mất vài giây |
| 10.000 tài nguyên = 10.000 chu trình rà soát | 10.000 tài nguyên = không có chu trình nào (template đã được phê duyệt) |

## Điều mà Lolly cung cấp một cách độc nhất

![Amsterdam's canal rings and road network drawn edge to edge in the brand's own ink, every stroke placed by the template rather than by hand](/t/url-shot?url=%2F%23%2Ftool%2Fstreet-map%3Fcity%3Damsterdam%26theme%3Dlight%26full&width=1440&height=900&dpi=96&waitMs=3200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-street-map-poster)

- **Tiềm năng thiết kế táo bạo được mang lại một cách an toàn, đúng bối cảnh.** Các công cụ có thể thể hiện những ý tưởng thiết kế mạo hiểm trong khuôn khổ các rào chắn được mã hóa cứng.
- **Tự động hóa nội dung được định nghĩa bằng phần mềm, trả về tài nguyên cuối cùng.** Đầu vào → tệp cuối cùng. Không còn cảnh "giờ hãy lưu nó từ công cụ thiết kế của bạn rồi xử lý hậu kỳ."
- **Công cụ kết hợp với công cụ.** Một công cụ có thể nhúng bản render của một công cụ khác và trả về nó như một phần của một tài nguyên hoàn chỉnh duy nhất, không có sự ràng buộc mã nguồn giữa các công cụ - một khả năng nền tảng mà không sản phẩm canvas mở hay tạo mẫu DAM nào trong bối cảnh này cung cấp.
- **Trung lập nhà cung cấp.** Toàn quyền kiểm soát tính năng và chi phí. Engine mã nguồn mở. Công cụ và tài nguyên là nội dung được theo dõi bằng git, không bị khóa trong cơ sở dữ liệu SaaS.

Điều đầu tiên trong số đó là điều người ta hay đánh giá thấp. Một bản đồ thành phố đạt chuẩn in poster, được vẽ bằng các đường vector thật cho đường phố và mặt nước, chỉ từ một danh sách chọn và hai trường màu không thể trỏ ra ngoài thương hiệu:

