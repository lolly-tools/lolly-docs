# Hồ sơ — bạn là ai khi bạn tạo

Một **hồ sơ** là danh tính làm việc mà Lolly tạo ra *với tư cách là*. Đó là tập hợp nhỏ các chi tiết mà một công cụ có thể lấy ra để bạn không phải nhập lại mỗi lần — tên của bạn, thông tin liên hệ, một ảnh chân dung tùy chọn, một vài tùy chọn — cộng với mọi thứ bạn tích lũy trong khi làm việc: các phiên đã lưu, hình ảnh đã tải lên, và số liệu hoạt động cục bộ.

Mọi thứ trong hồ sơ đều nằm **trên thiết bị**, trong cơ sở dữ liệu cục bộ của trình duyệt (IndexedDB trên web PWA, hệ thống tệp trên các ứng dụng Tauri). Không có tài khoản nào và không có gì được tải lên. Bạn quản lý nó trong mục **Hồ sơ** (góc trên bên phải của thư viện); các công cụ chỉ *đọc* nó, và chỉ những trường cụ thể mà chúng được xây dựng để điền sẵn.

> Hồ sơ nói về *bạn* (hoặc bất kỳ ai đang tạo tại đây). Nó khác với **Nền tảng** — màu sắc, phông chữ và các cài đặt toàn cục của thương hiệu — và khác với **Năng lực**, danh mục những gì ứng dụng có thể làm. Xem [Hồ sơ so với Nền tảng so với Năng lực](#profile-vs-platform-vs-capabilities) ở cuối bài.

## Những gì có trong hồ sơ

| Phần | Là gì |
|---|---|
| **Tên** | Họ và tên. |
| **Liên hệ** | Email và số điện thoại. |
| **Vị trí** | Thành phố và quốc gia. |
| **Ảnh chân dung** | Một bức ảnh tùy chọn, được cắt thành hình vuông và lưu dưới dạng hình ảnh cục bộ. Được các công cụ như chữ ký email, thẻ trích dẫn, khối màu và bố cục động sử dụng. |
| **Sử dụng thông tin của tôi** | Một công tắc bật/tắt duy nhất. Nó quyết định thông tin cá nhân của bạn có đi kèm dưới dạng **nguồn gốc** — dòng tác giả/ghi công được nhúng vào tệp xuất ra — và làm tác giả trong các lượt chạy hàng loạt **/pro** hay không. (Nó không kiểm soát việc điền sẵn: xem [Cách các công cụ sử dụng hồ sơ của bạn](#how-tools-use-your-profile).) |
| **Tùy chọn** | Chủ đề của bạn (sáng, tối, hoặc SUSE) và những phần nào của ứng dụng bạn đã bật thông qua **Cờ tính năng**. |
| **Công việc của bạn** | Các phiên đã lưu (kèm ảnh thu nhỏ) — được tổ chức thành các thư mục lồng nhau trong **[Dự án](/info/using.html)** — thư viện **Hình ảnh của tôi**, và số liệu thống kê hoạt động cục bộ, tất cả đều gắn với hồ sơ này. |

Không có mục nào là bắt buộc. Một hồ sơ trống vẫn là một hồ sơ hoàn toàn tốt; bạn chỉ cần điền những gì giúp bạn đỡ phải gõ lại.

## Hồ sơ là một bối cảnh, không chỉ là một con người

Từ "hồ sơ" gợi ý một con người cố định duy nhất, nhưng trong Lolly nó thực sự là một **bối cảnh sáng tạo** — *bạn là ai trong khi bạn tạo ra thứ này*. Bối cảnh đó có thể có ba hình thái khác nhau, và Lolly xử lý tất cả chúng theo cùng một cách.

### Với tư cách cá nhân

Mặc định. Hồ sơ chính là bạn: tên bạn, email của bạn, ảnh chân dung của bạn. Thiết lập một lần và chữ ký, huy hiệu, biểu trưng hội nghị của bạn sẽ tự động điền vào. Đây là tất cả những gì hầu hết mọi người sẽ cần.

### Với tư cách một nhóm

Một hồ sơ không nhất thiết phải là một cá nhân duy nhất. Nó có thể đại diện cho một **nhóm hoặc chức năng trong một tổ chức**: tên chung của nhóm, một địa chỉ hộp thư nhóm (`events@…`), một phòng ban, ảnh chân dung của nhóm hoặc biểu tượng đơn vị. Một người thiết lập nó, xuất ra (xem bên dưới), và phần còn lại của nhóm nạp cùng một hồ sơ — để mọi thứ nhóm tạo ra đều mang thông tin nhất quán mà không ai phải nhập lại. Một ki-ốt dùng chung hoặc một laptop demo mượn ra có thể chạy một hồ sơ nhóm duy nhất mà bất kỳ ai đứng sau nó cũng tạo ra với tư cách đó.

### Với tư cách một chức năng — một vai trò bạn khoác lên đôi khi

Đây là trường hợp mà mô hình cứng nhắc "một người, một hồ sơ" bỏ sót. Bạn có thể là một **quản lý sự kiện ba ngày trong năm** và hoàn toàn là người khác trong suốt thời gian còn lại. Ba ngày đó bạn muốn có thông tin sự kiện, hộp thư sự kiện, có thể là một thương hiệu phụ của sự kiện để điền vào huy hiệu và biển chỉ dẫn của bạn; 362 ngày còn lại bạn muốn lấy lại danh tính bình thường của mình.

Trong Lolly, vai trò đó chỉ đơn giản là **một hồ sơ khác mà bạn luôn có sẵn** — một gói đã lưu (phần tiếp theo) mà bạn nạp vào cho sự kiện rồi cất đi sau đó. Vai trò đó là một chiếc mũ, không phải một tài khoản mới. Đội nó lên khi bạn cần, bỏ nó xuống khi bạn xong việc.

## Một bản cài đặt, một hồ sơ đang hoạt động — nhiều hồ sơ bạn có thể giữ

Tại bất kỳ thời điểm nào, một bản cài đặt chỉ có **một hồ sơ đang hoạt động** — những thông tin mà một công cụ nhìn thấy ngay lúc đó. Không có bộ chuyển hồ sơ trong ứng dụng; thay vào đó, mỗi hồ sơ là một **gói di động** (một tệp `.zip` duy nhất, xem [bên dưới](#moving-a-profile-to-a-new-device)). Đây là chủ đích dùng chung cơ chế với việc chuyển sang thiết bị mới — một hồ sơ là một tệp mà bạn có thể lưu, sao chép, và nạp vào.

Vì vậy nếu bạn thực sự phải xoay sở giữa nhiều bối cảnh (bạn, nhóm của bạn, chiếc mũ quản lý sự kiện), bạn giữ nhiều gói và nạp gói bạn cần:

- **Cách chuyển sạch nhất:** **Hồ sơ → Lưu trữ → Xóa toàn bộ dữ liệu của tôi**, sau đó **Nhập** gói cho bối cảnh bạn đang bước vào. Giờ đây bạn đang tạo hoàn toàn với tư cách hồ sơ đó.
- **Xếp chồng:** nhập vào *mà không* xóa trước sẽ **hợp nhất** — hồ sơ, phiên và hình ảnh được nhập sẽ chồng lên những gì đã có sẵn, thay thế bất kỳ mục nào trùng tên và giữ nguyên phần còn lại. Hữu ích khi bạn muốn kéo các phiên đã lưu của một nhóm vào thiết lập của riêng mình; không phải điều bạn muốn nếu cần một ranh giới vai trò rõ ràng.
- **Song song:** vì mọi thứ đều giới hạn theo thiết bị, một hồ sơ trình duyệt riêng, một tài khoản người dùng riêng, hoặc một PWA cài đặt lần thứ hai đều mang hồ sơ Lolly độc lập của riêng nó. Chạy bản cài đặt cá nhân của bạn và bản cài đặt ki-ốt sự kiện cùng lúc, không cần chuyển đổi.

> Giữ một gói cho mỗi bối cảnh và đổi tên tệp theo đúng nội dung của chúng (`LollyTools-events-2026.zip`, `LollyTools-me.zip`). Tệp đó *chính là* hồ sơ.

## Chuyển hồ sơ sang thiết bị mới

Vì hồ sơ hoàn toàn cục bộ, cách duy nhất để đưa nó vào một bản cài đặt trống — một laptop mới, một trình duyệt vừa được đặt lại, máy của đồng nghiệp, một thiết bị ngoại tuyến — là **mang theo tệp**. Không có đăng nhập nào khôi phục nó giúp bạn, và đó chính là mấu chốt: ngay từ đầu chưa từng có gì rời khỏi thiết bị của bạn.

Trong mục **Hồ sơ → Lưu trữ → Chuyển sang thiết bị khác**:

- **Xuất dữ liệu của tôi** tải xuống một tệp `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` — được đặt tên theo hồ sơ mà nó thuộc về, kèm số thứ tự theo ngày để các lần xuất lặp lại không bị trùng (các phần tên bị lược bỏ nếu hồ sơ không có chúng). Tệp này chứa hồ sơ của bạn, mọi phiên đã lưu (kèm ảnh thu nhỏ), hình ảnh đã tải lên của bạn, và các tùy chọn của bạn (chủ đề, bố cục, số liệu hoạt động cục bộ).
- **Nhập dữ liệu…** trên bản cài đặt khác sẽ đọc lại tệp đó và bạn tiếp tục chính xác từ nơi bạn đã dừng lại.

Gói này là một tệp zip đơn giản, tự chứa toàn bộ, nên nó có thể di chuyển bằng **bất kỳ** phương tiện nào — USB, AirDrop, một ổ mạng chia sẻ, tự gửi email cho chính mình — và đích đến có thể hoàn toàn ngoại tuyến. Mỗi phần đều được tính checksum, nên một tệp bị hỏng trong quá trình truyền sẽ bị phát hiện khi nhập vào thay vì được khôi phục ở trạng thái hỏng dở dang. Việc nhập sẽ **hợp nhất** (hồ sơ/phiên/hình ảnh trùng tên sẽ bị ghi đè; mọi thứ khác được giữ nguyên), nên nó không bao giờ xóa sạch một đích đến đang được sử dụng.

Những gì không được mang theo: bộ nhớ đệm danh mục (nó sẽ tự tải lại trên thiết bị mới) và bản thân các công cụ (được giả định là đã có sẵn).

Để biết chi tiết chính xác về cấu trúc gói, chính sách phiên bản, và các quy tắc toàn vẹn, xem **[Truyền dữ liệu](/info/data-transfer.html)**; để xem hướng dẫn từng bước đầy đủ, xem **[Sử dụng Lolly → Chuyển sang thiết bị khác](/info/using.html#moving-to-another-device)**.

## Cách các công cụ sử dụng hồ sơ của bạn

Một công cụ chỉ bao giờ *điền sẵn* những trường hồ sơ mà nó được xây dựng rõ ràng để liên kết:

**Liên kết rõ ràng.** Tác giả công cụ đánh dấu một trường đầu vào là lấy từ hồ sơ (`bindToProfile: "firstname"`, `"email"`, `"headshot"`, …). Khi công cụ mở ra, trường đó sẽ được điền sẵn từ hồ sơ của bạn — và bạn vẫn có thể ghi đè nó cho riêng phiên đó mà không làm thay đổi hồ sơ. Việc điền sẵn là một tiện ích cục bộ và diễn ra bất kể **Sử dụng thông tin của tôi** có được bật hay không.

**Phần tùy chọn (nguồn gốc).** Khi bạn xuất một tài sản, thông tin của bạn có thể tùy chọn đi kèm dưới dạng **nguồn gốc** — một dòng tác giả/ghi công được nhúng vào metadata của tệp (PNG, PDF, SVG, …) — để một tài sản hoàn chỉnh có thể cho biết ai đã tạo ra nó. *Đây* chính là điều mà **Sử dụng thông tin của tôi** kiểm soát: tắt nó đi và bản xuất vẫn mang ghi công công cụ/nền tảng "được tạo bằng Lolly", nhưng không có dòng tác giả/liên hệ cá nhân nào được nhúng vào. (Cùng một tùy chọn này thiết lập tác giả trong các lượt chạy hàng loạt **/pro**.) (Dành cho tác giả công cụ: xem [Xây dựng công cụ → `bindToProfile`](/info/authoring-tools.html#bindtoprofile) và [Host API → `host.profile`](/info/host-api.html#host-profile).)

## Hồ sơ so với Nền tảng so với Năng lực

Ba khái niệm này nằm gần nhau trong giao diện và rất dễ gây nhầm lẫn:

- **Hồ sơ** — *bạn* (hoặc nhóm của bạn, hoặc vai trò bạn đang đảm nhận): tên, liên hệ, ảnh chân dung, công việc đã lưu của bạn. Mang tính cá nhân, cục bộ trên thiết bị, di động dưới dạng một gói.
- **Nền tảng** — *thương hiệu*: màu sắc, phông chữ, và các cài đặt toàn cục mà mọi công cụ dựa vào để hiển thị. Dùng chung và nhất quán, không mang tính cá nhân.
- **Năng lực** — *những gì ứng dụng có thể làm*: toàn bộ tập tính năng và các công cụ có sẵn cho bạn.

Hồ sơ thay đổi tài sản đó *đến từ* ai; nền tảng thay đổi nó *trông như thế nào*; năng lực là *những gì bạn có thể tạo ra*.

## Quyền riêng tư

Hồ sơ không bao giờ được truyền đi, tải lên, hoặc dùng để nhận dạng hay theo dõi bạn — không có gì cần bạn phải đồng ý cả, đây chỉ là thông báo để bạn biết những gì được lưu giữ. Xóa sạch toàn bộ bất cứ lúc nào bằng **Hồ sơ → Xóa toàn bộ dữ liệu của tôi**. Xem [Chính sách quyền riêng tư](/info/privacy.html).
