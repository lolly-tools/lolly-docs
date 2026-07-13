# Chính sách bảo mật

*Cập nhật lần cuối: Tháng 6 năm 2026*

## Ứng dụng Lolly

Lolly chạy hoàn toàn trong trình duyệt của bạn. **Chúng tôi không thu thập gì, không truyền tải gì, và không có máy chủ nào nhìn thấy dữ liệu của bạn.** Không có phân tích, không theo dõi, và không có bên thứ ba nào.

**Không có cookie - ở bất cứ đâu.** Lolly không bao giờ đặt cookie. Để ứng dụng hoạt động, nó lưu giữ một lượng nhỏ dữ liệu **trên chính thiết bị của bạn**, tất cả đều thực sự cần thiết cho một tính năng mà bạn đang sử dụng:

- **Giao diện sáng/tối của bạn** và một vài tùy chọn giao diện (độ rộng thanh bên, mức thu phóng).
- **Bộ nhớ đệm ngoại tuyến của danh mục công cụ**, để thư viện vẫn tải được ngay cả khi không có kết nối mạng.
- **Bộ đếm sử dụng chỉ lưu cục bộ** cho các số liệu thống kê nhỏ trên thẻ hồ sơ của bạn - những số liệu này không bao giờ được gửi đi bất cứ đâu.
- **Tài liệu và các phiên đã lưu của riêng bạn**, được lưu trữ cục bộ trong trình duyệt (IndexedDB) để công việc của bạn được giữ lại giữa các lần truy cập.

Không có gì trong số này được chia sẻ, tải lên, hoặc được dùng để nhận dạng hay theo dõi bạn, vì vậy không có gì cần bạn phải đồng ý cả - chỉ có thông báo này, để bạn biết những gì đang được lưu giữ. Bạn có thể xóa toàn bộ dữ liệu này bất cứ lúc nào bằng **Profile → Clear all my data**, hoặc bằng cách xóa bộ nhớ lưu trữ của trang web trong trình duyệt của bạn.

Trang tài liệu này (`/info`) thậm chí còn nhẹ hơn: nó không đặt **cookie** nào, chỉ lưu tùy chọn sáng/tối của bạn trên thiết bị, và phục vụ mọi thứ - kể cả phông chữ - trực tiếp từ lolly.tools, không có yêu cầu CDN hay bên thứ ba nào.

## Các tiện ích chạy trên thiết bị

Một số công cụ là **tiện ích** hoạt động trên một tệp do *bạn* cung cấp - ví dụ **Strip Hidden Data**, công cụ hiển thị dữ liệu ẩn trong một hình ảnh hoặc PDF (vị trí GPS, máy ảnh, tác giả, người chỉnh sửa và siêu dữ liệu tài liệu) rồi trả lại cho bạn một bản sao sạch, hoặc **Compress PDF**, công cụ thu nhỏ dung lượng PDF bằng cách mã hóa lại hình ảnh của nó ngay trên thiết bị của bạn.

Các công cụ này chạy **hoàn toàn trong trình duyệt của bạn**. Tệp bạn chọn được đọc vào bộ nhớ trên thiết bị của bạn, được biến đổi cục bộ, và được trả lại dưới dạng tệp tải xuống. **Nó không bao giờ được tải lên** - vì không có máy chủ nào để tải lên cả. Bản sao đã làm sạch không mang hình mờ và không chứa bất kỳ siêu dữ liệu nhận dạng nào của chúng tôi; toàn bộ mục đích là để *loại bỏ* dữ liệu, chứ không phải thêm vào. Không có gì được lưu trữ sau khi bạn rời đi, và các tiện ích này hoạt động ngay cả khi không có mạng. Bạn sẽ thấy huy hiệu **"Runs on your device - nothing is uploaded"** trên mỗi công cụ trong số đó.

Đây là điều ngược lại với các trang web "nén PDF này" / "chuyển đổi HEIC này" thông thường, vốn tải tệp của bạn lên máy chủ của người lạ để thực hiện công việc mà trình duyệt của bạn có thể làm được ngay tại chỗ.

## Tiện ích mở rộng trình duyệt

Tiện ích mở rộng trình duyệt **Lolly URL Screenshot** không thu thập, lưu trữ, hay truyền tải bất kỳ dữ liệu cá nhân nào. Không có phân tích, không theo dõi, không có máy chủ từ xa.

## Nó hoạt động như thế nào

Khi bạn yêu cầu ứng dụng web Lolly ([lolly.tools](https://lolly.tools)) chụp ảnh màn hình một URL, tiện ích mở rộng sẽ mở trang đó trong một tab nền tạm thời, chụp lại trong trình duyệt của bạn bằng DevTools Protocol, trả hình ảnh về cho ứng dụng, rồi đóng tab đó. Mọi thứ diễn ra cục bộ, trên chính thiết bị và mạng của bạn.

## Dữ liệu

- **Chúng tôi không thu thập gì cả.** Tiện ích mở rộng này không có máy chủ và không tự thực hiện bất kỳ yêu cầu mạng nào.
- **Hình ảnh đã chụp** được chuyển thẳng đến ứng dụng Lolly trong cùng trình duyệt - không bao giờ được tiện ích mở rộng tải lên.
- **Các URL bạn chụp** chỉ được dùng để tải đúng trang đó cho đúng ảnh chụp màn hình đó. Chúng không được ghi log hay chia sẻ.

## Quyền truy cập

- **`debugger`** - để chụp lại trang đã hiển thị thông qua DevTools Protocol (cùng cơ chế mà ứng dụng desktop của Lolly sử dụng).
- **Quyền truy cập tab** - để mở và đóng tab tạm thời mà trang được tải vào.
- **Quyền truy cập host** - vì trang bạn chọn để chụp có thể nằm trên bất kỳ trang web nào.

Không có quyền nào trong số này được dùng để đọc, giám sát, hay truyền tải lịch sử duyệt web của bạn.

## Liên hệ

Có câu hỏi? Xem [lolly.tools](https://lolly.tools).
