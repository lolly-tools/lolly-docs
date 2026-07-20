# Chính sách bảo mật

*Cập nhật lần cuối: 19 tháng 7 năm 2026*

> **Nói một cách đơn giản.** Các tài liệu, hình ảnh, video và tệp bạn tạo ra trong Lolly
> vẫn nằm trên thiết bị của bạn. Không có tài khoản nào cho việc sử dụng thông thường, không có cookie
> từ chính ứng dụng, và không có bất kỳ công cụ phân tích hay theo dõi nào trong toàn bộ mã nguồn - không phải kiểu "chúng tôi không dùng
> dữ liệu đó," mà là thực sự không hề tồn tại trong mã nguồn. Có một danh sách ngắn gọn và đầy đủ về
> các ngoại lệ tại những nơi phần mềm có giao tiếp với mạng, và mỗi
> trường hợp đều được mô tả chi tiết bên dưới: cái gì rời đi, tới ai, và khi nào. Ngoại lệ duy nhất
> liên quan đến bất cứ điều gì mang tính cá nhân là một lần đăng nhập mà bạn phải chủ động
> bắt đầu. Nếu điều gì đó không có trong tài liệu này, thì nó không xảy ra.

## Những gì chính sách này bao gồm

Lolly là phần mềm mã nguồn mở - một engine, vài shell ứng dụng (web, desktop,
mobile, CLI), và một tiện ích mở rộng trình duyệt - mà bất kỳ ai cũng có thể chạy. Chính sách này có hai
phần:

- **Bản thân phần mềm**: nó làm gì và không làm gì với dữ liệu của bạn, ở bất cứ nơi nào nó
  chạy. Đây là một thuộc tính của mã nguồn, nên nó đúng với mọi bản triển khai Lolly,
  của chúng tôi hay của bất kỳ ai khác.
- **lolly.tools**, bản triển khai tham chiếu do SUSE vận hành: những lựa chọn cụ thể
  được đưa ra khi chạy các thành phần phía máy chủ tùy chọn của nó (cái gì được ghi log, trong bao lâu, bởi
  ai).

Nếu bạn đang dùng một bản Lolly tự lưu trữ hoặc dành cho doanh nghiệp, hành vi phần mềm
bên dưới vẫn được áp dụng, nhưng *người vận hành* bản đó - không phải SUSE - chịu
trách nhiệm cho mọi thứ ở phía máy chủ: điểm cuối kết xuất của họ, máy chủ MCP của họ,
tổ chức cấp chứng chỉ Content Credentials của họ, nếu họ có chạy. Hãy hỏi họ về
chính sách riêng của họ; xem [Áp dụng & Quản trị](/info/adoption-governance.html) để biết
việc vận hành Lolly bao gồm những gì.

## Ứng dụng: những gì ở lại trên thiết bị của bạn

Các shell web, desktop và mobile của Lolly chạy toàn bộ engine kết xuất phía máy khách.
Việc mở một công cụ, điền các đầu vào, xem trước và xuất tệp đều diễn ra trên thiết bị
của bạn - không có máy chủ nào tham gia, và ứng dụng hoạt động ngoại tuyến sau khi đã tải xong.

**Ứng dụng không đặt cookie nào.** Để hoạt động, nó giữ một lượng nhỏ dữ liệu **chỉ trên
thiết bị của bạn**, không bao giờ được truyền đi:

- **Tùy chọn giao diện** - chủ đề, ngôn ngữ, cài đặt âm thanh, kích cỡ thanh bên/thu phóng,
  các lựa chọn sắp xếp và hiển thị, những mẹo hướng dẫn nào bạn đã xem - trong
  `localStorage`, để chúng sẵn sàng trước khi ứng dụng khởi động xong.
- **Bộ nhớ đệm ngoại tuyến của danh mục công cụ và các bản xem trước tài nguyên**, để thư viện
  hoạt động mà không cần kết nối.
- **Bộ đếm sử dụng cục bộ** cho các số liệu thống kê trên thẻ hồ sơ của bạn (đã xuất bao nhiêu tệp, dùng công cụ
  nào) - một khối dữ liệu nhỏ có giới hạn trong `localStorage`, không bao giờ được chúng tôi đọc, không bao giờ gửi đi
  đâu cả.
- **Tài liệu, các phiên đã lưu, tài nguyên và phông chữ do chính bạn tải lên** - được lưu trữ trong
  IndexedDB trên thiết bị của bạn, không bao giờ được tải lên, không bao giờ được ai khác ngoài bạn đọc.

Không có gì trong số này được chia sẻ, bán, hay dùng để nhận dạng hoặc theo dõi bạn. Không có gì
cần bạn phải đồng ý cả, vì không hề có việc thu thập nào diễn ra - chỉ có thông báo này, để bạn
biết cái gì được lưu giữ và ở đâu. Bạn có thể xóa sạch tất cả bất cứ lúc nào bằng **Profile → Clear all
my data**, hoặc bằng cách xóa bộ nhớ lưu trữ của trang web trong trình duyệt của bạn. (Theo
Chỉ thị ePrivacy Điều 5(3), việc lưu trữ dữ liệu thực sự cần thiết cho dịch vụ mà bạn đã yêu cầu
thì không cần sự đồng ý - chỉ cần sự minh bạch, và đó chính là những gì tài liệu này cùng
thông báo trong ứng dụng thể hiện.)

Bản sao lưu dữ liệu này của riêng bạn - gói `lolly-backup` được tạo ra bởi **Export &
render everything** - là một tệp mà bạn giữ và kiểm soát. Nó không bao giờ chạm tới máy chủ
của chúng tôi trừ khi chính bạn chọn gửi nó đi đâu đó. Xem [Chuyển giao
dữ liệu](/info/data-transfer.html).

## Các tiện ích chạy trên thiết bị

Một số công cụ - **Strip Hidden Data**, **Compress PDF**, và những công cụ khác mang
huy hiệu **"Runs on your device"** - hoạt động trên một tệp mà bạn cung cấp. Tệp này được đọc
vào bộ nhớ trong trình duyệt của bạn, được biến đổi cục bộ, và được trả lại dưới dạng tệp tải xuống.
Nó không bao giờ được tải lên, vì không có máy chủ nào trên đường đi để tải nó lên cả.
Các tiện ích này hoạt động ngoại tuyến, và đầu ra của chúng không mang hình mờ hay siêu dữ liệu nào
của chúng tôi - mục đích của hầu hết chúng là loại bỏ & bảo vệ dữ liệu, chứ không phải thêm rủi ro.

## Khi ứng dụng giao tiếp với mạng, một cách đầy đủ

Bảng dưới đây là danh sách đầy đủ mọi thứ mà ứng dụng tải về hoặc gửi đi qua một
mạng. Nếu điều gì đó không có ở đây, thì ứng dụng không làm điều đó.

| Cái gì | Cái gì thực sự rời khỏi thiết bị của bạn | Khi nào |
|---|---|---|
| Đồng bộ danh mục công cụ | Không có gì mang tính cá nhân - một yêu cầu lấy chỉ mục công cụ và tài nguyên công khai của riêng Lolly | Lúc khởi động, sau đó lưu vào bộ nhớ đệm ngoại tuyến |
| Khả năng mạng do một công cụ khai báo | Bất cứ thứ gì công cụ cụ thể đó yêu cầu (ví dụ các ô bản đồ) tới (các) host cụ thể mà nó cho phép trong manifest của mình | Chỉ trong khi dùng công cụ đó |
| Google Fonts | Tên họ phông chữ được chọn và địa chỉ IP của bạn, tới máy chủ phông chữ của Google | Chỉ khi bạn thêm một Google Font trong trình chỉnh sửa thương hiệu - một lần tải duy nhất cho mỗi họ phông, sau đó nó nằm trên thiết bị của bạn |
| Kiểm tra chữ ký SEAL | Một truy vấn DNS duy nhất để lấy khóa công khai, tới tên miền được nêu bên trong tệp đang được kiểm tra | Chỉ khi Verify tìm thấy một bản ghi SEAL trong một tệp bạn kiểm tra - không bao giờ là chính tệp đó |
| Mô hình bộ dò quét sâu | Không có gì mang tính cá nhân - một lần tải mô hình cùng nguồn gốc (không phải bên thứ ba) | Chỉ khi bạn chọn tham gia quét sâu của Verify |
| Máy chủ từ xa | Bất cứ thứ gì máy chủ mà bạn chỉ định trả về, qua cùng cơ chế đồng bộ danh mục được mô tả ở trên | Chỉ khi bạn chủ động trỏ shell tới một bản triển khai Lolly khác |

Không có mục nào trong số này gửi tài liệu, dự án, phiên hay tệp tải lên của bạn đi đâu cả.
Chúng tồn tại để mang mọi thứ *đến* thiết bị của bạn (công cụ, phông chữ, mô hình, một khóa công khai),
chứ không bao giờ để gửi mọi thứ *đi từ* nó, ngoại trừ các ngoại lệ được nêu rõ ràng trong
các phần bên dưới.

## URL kết xuất liên kết trực tiếp

Bản thân ứng dụng ở lại hoàn toàn trên thiết bị của bạn. Tách biệt với điều đó, và chỉ khi bạn dùng đến,
lolly.tools (và bất kỳ bản tự lưu trữ nào để nó ở trạng thái bật) trả lời cho các
**URL kết xuất liên kết trực tiếp** - `https://lolly.tools/tool/<tool-id>.<ext>?<inputs>` -
để một liên kết Lolly được chia sẻ có thể hiển thị như một hình ảnh sống động trong một README, một wiki hay một
bảng điều khiển. Việc tải một trong những URL đó yêu cầu máy chủ kết xuất **dữ liệu công cụ và
danh mục công khai** với các đầu vào được viết trong URL, và đó là toàn bộ cuộc
trao đổi:

- **Không tài khoản, không cookie, không trạng thái.** Điểm cuối này là ẩn danh; không có gì được
  lưu trữ cho mỗi yêu cầu, và không có gì trên thiết bị của bạn được đọc. Tài liệu,
  phiên và tệp tải lên của bạn không bao giờ rời khỏi trình duyệt - chúng hoàn toàn không thể xuất hiện trong những
  liên kết này.
- **Các đầu vào là công khai theo bản chất** - chúng là bất cứ thứ gì mà tác giả liên kết
  đã gõ vào URL, ai nhận được liên kết đều có thể đọc được. Đừng đặt bí mật vào một
  liên kết được chia sẻ, Lolly có cung cấp một tính năng mã hóa liên kết cho nội dung nhạy cảm.
- Các phản hồi được **lưu vào bộ nhớ đệm và giới hạn tần suất** như bất kỳ hình ảnh công khai nào, và được đánh dấu
  `noindex` để các công cụ tìm kiếm không lập chỉ mục các bản kết xuất của bạn.

Bạn tự lưu trữ Lolly và không muốn có một bề mặt kết xuất công khai? Hãy đặt
`LOLLY_DISABLE_RENDER_GET=1` và mọi URL trong số này sẽ trả về 404.

## Máy chủ MCP (tùy chọn, dành cho các tác nhân AI)

Lolly cũng có thể được truy cập bởi một tác nhân AI qua Model Context Protocol - một
điểm cuối do người vận hành chạy (lolly.tools chạy một cái; bất kỳ ai cũng có thể tự lưu trữ cái của riêng mình,
kể cả loại hoàn toàn cách ly khỏi mạng). Nó chia sẻ chủ trương không-tài-khoản của đường kết xuất,
cùng với hai công cụ tất yếu phải xử lý các byte của tệp:

- **`lolly_transform`** (chạy một tiện ích trên thiết bị ở phía máy chủ, thay mặt cho tác nhân gọi
  nó) và **`lolly_verify`** (kiểm tra Content Credentials) đều nhận
  các byte của một tệp từ bên gọi. Chúng được xử lý **trong tiến trình, trong bộ nhớ**,
  và kết quả được trả về ngay trong chính lần gọi đó - tệp không bao giờ được ghi ra
  đĩa và không bao giờ được lưu trữ sau khi yêu cầu hoàn tất.
- Mọi công cụ khác - `lolly_render`, `lolly_build_url`, `lolly_list_tools`,
  `lolly_describe_tool` - chỉ hoạt động từ các tham số (văn bản, số, màu sắc,
  URL, id tài nguyên trong danh mục), cùng loại đầu vào mà một URL kết xuất liên kết trực tiếp nhận.
- Việc truy cập là qua một token dùng chung mà người vận hành cấp cho các máy khách họ tin tưởng, hoặc
  OAuth 2.1 phi trạng thái: các token được ký có thời hạn ngắn, được xác minh dựa trên một bí mật
  dùng chung, không lưu trữ gì ở phía máy chủ, và bản thân token không bao giờ được ghi vào một
  log hay một URL kết xuất.

## Danh tính Content Credentials (một lần đăng nhập mà bạn phải tự bắt đầu)

Lolly có thể niêm phong một **Content Credential** mật mã vào các bản xuất của bạn để bất kỳ ai
cũng có thể xác minh, ngoại tuyến, rằng một tệp chưa bị thay đổi kể từ khi nó rời khỏi Lolly. Ngần ấy là
**bật theo mặc định và hoàn toàn cục bộ** - khóa ký được tạo ra trên thiết bị của bạn,
là **không thể trích xuất** (ngay cả mã nguồn của chính Lolly cũng không thể đọc nó), và việc ký
diễn ra ngoại tuyến. Phần này nói về một bước *tùy chọn* trên nền đó:
đăng ký một danh tính đã được xác minh, để các bản xuất của bạn ghi "Verified - signed by
\<email của bạn\>" thay vì một khóa ẩn danh. **Nếu bạn bỏ qua việc đăng ký, không có gì trong
phần này áp dụng cho bạn, và không có dữ liệu cá nhân nào từng rời khỏi thiết bị của bạn.**

Nếu bạn đăng ký, đây chính xác là những gì xảy ra:

1. **Bạn chọn một phương thức đăng nhập** - GitHub, Google, SUSE (Okta), hoặc một liên kết
   gửi qua email. Với ba nhà cung cấp OIDC, bạn được chuyển hướng đến trang đăng nhập riêng của
   nhà cung cấp đó, chịu sự điều chỉnh của chính sách bảo mật của họ, không phải của chúng tôi; dịch vụ chứng chỉ
   của Lolly chỉ nhận lại một địa chỉ email đã xác minh và tên của nhà cung cấp.
   Với liên kết qua email, địa chỉ bạn gõ vào được chuyển tới **Resend**, một
   API email giao dịch, chỉ để gửi đúng một liên kết đó.
2. **Một cookie có thời hạn ngắn bảo vệ việc chuyển hướng.** Đây là cookie duy nhất mà
   toàn bộ hệ thống Lolly đặt: `lolly_ca_state`, `HttpOnly`, giới hạn phạm vi trong `/api/ca`,
   hết hạn trong vòng mười phút. Nó mang một giá trị ngẫu nhiên, không phải một mã định danh
   theo dõi, và chỉ tồn tại để ngăn việc chuyển hướng OAuth bị giả mạo. Nó được
   xóa ngay khi việc đăng nhập hoàn tất.
3. **Địa chỉ IP của bạn được dùng, trong thời gian ngắn, để ngăn lạm dụng** các điểm cuối
   đăng nhập (để một script không thể gửi spam vào hộp thư hay làm cạn hạn ngạch email) - chỉ được giữ
   trong bộ nhớ máy chủ, trong một khung thời gian trượt khoảng một phút, không bao giờ được ghi
   vào log hay lưu giữ ở bất cứ đâu.
4. **Dịch vụ chứng chỉ cấp một chứng chỉ có thời hạn ngắn** (7, 30, 90 hay 365
   ngày, tùy bạn chọn, bị giới hạn bởi chính sách của người vận hành) ràng buộc email đã
   xác minh của bạn với nửa công khai của cặp khóa được tạo ra trên thiết bị của bạn. Nửa riêng tư
   không bao giờ rời khỏi trình duyệt của bạn.
5. **Việc cấp chứng chỉ được ghi log**: địa chỉ email của bạn, nhà cung cấp bạn đã dùng, một
   mã băm ngắn của số sê-ri chứng chỉ, và ngày hết hạn của nó, được ghi vào
   log vận hành của dịch vụ - và, chỉ khi người vận hành có cấu hình một cái, vào
   một webhook do họ kiểm soát. Đây là nơi duy nhất một mẩu dữ liệu cá nhân của bạn được
   giữ lại trên một máy chủ, và nó tồn tại để một chứng chỉ bị xâm phạm hoặc cấp sai
   có thể được truy vết, và để việc cấp phát của chính CA có thể được kiểm toán.
6. **Sau đó, việc ký lại diễn ra ngoại tuyến** trong suốt vòng đời của chứng chỉ.
   Việc xuất một tệp không bao giờ liên hệ với dịch vụ chứng chỉ - chỉ có việc đăng ký mới làm vậy.

Riêng với lolly.tools: SUSE vận hành dịch vụ chứng chỉ và giữ
các log cấp phát này. Xem [Quyền của bạn](#your-rights) bên dưới để biết cách hỏi về
hoặc xóa một mục ghi.

## Tiện ích mở rộng trình duyệt

Tiện ích mở rộng trình duyệt **Lolly URL Screenshot** không thu thập, lưu trữ, hay
truyền tải bất kỳ dữ liệu cá nhân nào. Không phân tích, không theo dõi, không máy chủ từ xa.

**Nó làm gì.** Khi bạn yêu cầu ứng dụng web Lolly chụp ảnh màn hình một URL, tiện ích
mở rộng sẽ mở trang đó trong một tab nền tạm thời, chụp lại trong trình duyệt
của bạn bằng DevTools Protocol, trả hình ảnh về cho ứng dụng, rồi đóng
tab đó. Mọi thứ diễn ra cục bộ, trên chính thiết bị và mạng của bạn.

**Dữ liệu.**

- **Chúng tôi không thu thập gì cả.** Tiện ích mở rộng không có máy chủ nào và không tự thực hiện yêu cầu
  mạng nào của riêng nó.
- **Hình ảnh đã chụp** được chuyển thẳng đến ứng dụng Lolly trong cùng trình duyệt - không bao giờ được
  tiện ích mở rộng tải lên.
- **Các URL bạn chụp** chỉ được dùng để tải đúng trang đó cho đúng ảnh chụp màn hình
  đó. Chúng không được ghi log hay chia sẻ.

**Quyền.**

- **`debugger`** - để chụp lại trang đã hiển thị qua DevTools Protocol (cùng
  cơ chế mà ứng dụng desktop của Lolly sử dụng).
- **`tabs`** - để mở và đóng tab tạm thời mà trang được tải vào.
- **Quyền truy cập host (`<all_urls>`)** - vì trang bạn chọn để chụp có thể nằm
  trên bất kỳ trang web nào. Chrome hiển thị điều này khi cài đặt như một cảnh báo quyền hạn
  rộng; tiện ích mở rộng chỉ luôn truy cập đúng URL mà bạn cung cấp.

Không có quyền nào trong số này được dùng để đọc, giám sát, hay truyền tải hoạt động duyệt web của bạn ngoài
đúng một lần chụp được yêu cầu đó.

## Log hạ tầng

Như bất kỳ trang web nào, các máy chủ đứng sau lolly.tools - và đứng sau bất kỳ bản
triển khai Lolly nào - tạo ra các log truy cập máy chủ web tiêu chuẩn mỗi khi có một yêu cầu chạm tới
chúng: địa chỉ IP, đường dẫn được yêu cầu, dấu thời gian, user agent, được giữ trong một
khoảng thời gian giới hạn để bảo mật và ngăn ngừa lạm dụng. Đó là hành vi lưu trữ cơ bản,
không phải thứ mà Lolly thêm vào, và nó không bao giờ chứa nội dung của
tài liệu của bạn, vì những nội dung đó ngay từ đầu đã không bao giờ chạm tới một máy chủ. Ngoại lệ
cố ý duy nhất là một tệp mà bạn chủ động chuyển cho một lệnh gọi MCP `lolly_transform` hoặc
`lolly_verify`, được xử lý trong bộ nhớ và không bao giờ được ghi ra đĩa hay một
log, như đã mô tả ở trên.

## Quyền riêng tư của trẻ em

Lolly không cố ý thu thập thông tin cá nhân từ bất kỳ ai, ở bất kỳ độ tuổi nào, trong
quá trình sử dụng ứng dụng thông thường - không có gì để thu thập cả. Nơi duy nhất
thông tin cá nhân (một địa chỉ email) từng được thu thập là việc đăng ký Content Credentials,
đã mô tả ở trên, vốn không hướng tới hay dành cho trẻ em.

## Quyền của bạn

Vì gần như mọi thứ mà Lolly chạm tới chỉ được lưu trữ trên chính thiết bị của bạn, hầu hết
những gì mà luật bảo vệ dữ liệu gọi là "quyền của bạn" - truy cập, sửa đổi, xóa,
di chuyển - là những việc mà bạn đã có thể tự làm, ngay lập tức, mà không cần hỏi
ai cả: dữ liệu của bạn nằm trong bộ nhớ lưu trữ của trình duyệt, ở một dạng mà bạn có thể kiểm tra,
xuất (**Export & render everything**, ở trên), hoặc xóa (**Profile → Clear all
my data**).

Với một mẩu dữ liệu cá nhân duy nhất có thể kết thúc trên một máy chủ - địa chỉ email của bạn,
nếu bạn đã đăng ký Content Credentials - hãy liên hệ với chúng tôi (bên dưới) để hỏi những gì
chúng tôi đang giữ hoặc để yêu cầu xóa nó khỏi các log đang hoạt động. Việc xóa một mục ghi không
thu hồi một chứng chỉ đã được cấp (nó có thời hạn ngắn theo thiết kế và đơn giản là sẽ hết hạn);
nó ngăn mục ghi đó xuất hiện trong các lần xuất log về sau.

Chúng tôi không bán dữ liệu. Chúng tôi không có dữ liệu nào để bán cả.

## Thay đổi đối với chính sách này

Ngày ở đầu trang thay đổi mỗi khi tài liệu này thay đổi. Một thay đổi làm thay đổi
những gì rời khỏi thiết bị của bạn hoặc những gì được giữ lại sẽ có dòng riêng của nó ở đây, chứ không phải một chỉnh sửa
âm thầm - nếu bạn muốn xem điều gì đã thay đổi, hãy hỏi (bên dưới) hoặc so sánh với
[mã nguồn công khai](https://github.com/lolly-tools/lolly/commits/main/docs/privacy.md).

## Liên hệ

Câu hỏi, hoặc một yêu cầu theo mục "Quyền của bạn" ở trên: **Andy Fitzsimon**,
[fitzy@suse.com](mailto:fitzy@suse.com). Với một bản Lolly tự lưu trữ hoặc dành cho doanh nghiệp,
hãy liên hệ với người vận hành nó - SUSE và dự án mã nguồn mở Lolly
không giữ dữ liệu nào cho các bản triển khai mà chúng không vận hành.
