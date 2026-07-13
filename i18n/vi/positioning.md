# Lolly so sánh như thế nào

Nền tảng này phù hợp ở đâu trong bối cảnh công cụ sáng tạo rộng lớn hơn, và nơi nó cố tình **không** tham gia.

> **Trạng thái thử nghiệm:** Lolly là một nguyên mẫu thử nghiệm khép kín (closed-pilot), chưa phải là sản phẩm hoàn chỉnh, và tính bảo mật của nó hiện đang trải qua quá trình gia cố hạ tầng nghiêm ngặt của SUSE, chuẩn bị cho quy mô doanh nghiệp. Định vị này là nơi Lolly *hướng tới* - trang [Áp dụng & Quản trị](/info/adoption-governance.html#status) trình bày cách điều này đang được kiểm chứng trong thực tế.

## Bối cảnh

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

## Điều mà Lolly cung cấp một cách độc nhất

- **Tiềm năng thiết kế táo bạo được mang lại một cách an toàn, đúng bối cảnh.** Các công cụ có thể thể hiện những ý tưởng thiết kế mạo hiểm trong khuôn khổ các rào chắn được mã hóa cứng.
- **Tự động hóa nội dung được định nghĩa bằng phần mềm, trả về tài nguyên cuối cùng.** Đầu vào → tệp cuối cùng. Không còn cảnh "giờ hãy lưu nó từ công cụ thiết kế của bạn rồi xử lý hậu kỳ."
- **Công cụ kết hợp với công cụ.** Một công cụ có thể nhúng bản render của một công cụ khác và trả về nó như một phần của một tài nguyên hoàn chỉnh duy nhất, không có sự ràng buộc mã nguồn giữa các công cụ - một khả năng nền tảng mà không sản phẩm canvas mở hay tạo mẫu DAM nào trong bối cảnh này cung cấp.
- **Trung lập nhà cung cấp.** Toàn quyền kiểm soát tính năng và chi phí. Engine mã nguồn mở. Công cụ và tài nguyên là nội dung được theo dõi bằng git, không bị khóa trong cơ sở dữ liệu SaaS.
