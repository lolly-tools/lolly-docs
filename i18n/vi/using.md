# Sử dụng Lolly

Một hướng dẫn thực tế về việc *sử dụng* ứng dụng — mở một công cụ, làm việc trên canvas, xuất file, lưu và chia sẻ. Mọi thứ ở đây đều chạy **trên thiết bị của bạn**: không cần tài khoản, không cần tải lên, không cần internet sau lần tải đầu tiên.

> Mới đến đây? [Bắt đầu nhanh](/info/quickstart.html) sẽ giúp bạn bắt tay vào tạo sản phẩm chỉ trong vài phút, còn [Lolly cho Nhà vận hành](/info/operators.html) hướng dẫn cài đặt/triển khai ứng dụng; trang này nói về cách sử dụng nó khi đã mở.

## Mở một công cụ

Màn hình chính là **gallery** — nơi liệt kê mọi công cụ, được nhóm theo danh mục. Nhấp vào một thẻ để mở công cụ đó; nếu bạn đã từng làm việc với nó trước đây, nút **Continue** sẽ khôi phục phiên làm việc gần nhất của bạn. Dùng ô tìm kiếm để lọc theo tên.

Mỗi công cụ có giao diện chia đôi: **các điều khiển** ở một bên, **bản xem trước** (canvas) trực tiếp ở bên còn lại. Thay đổi bất kỳ điều khiển nào, bản xem trước sẽ cập nhật ngay lập tức.

> Một vài công cụ (như **Layout Studio**) lại mở dưới dạng **canvas tự do** — một bề mặt thao tác trực tiếp, không khung giao diện, nơi bạn kéo, đổi kích thước, xoay và gắn (snap) các khối văn bản, hình khối và hình ảnh, đồng thời nhấp đúp để chỉnh sửa văn bản ngay tại chỗ. Nó xuất file qua cùng một quy trình render như mọi công cụ khác, vì vậy canvas *chính là* file. Xem [Canvas tự do](#the-free-canvas-layout-studio) bên dưới.

## Canvas (bản xem trước)

Bản xem trước luôn hiển thị chính xác những gì sẽ được xuất ra.

**Máy tính**

- **Thu phóng:** cuộn kèm Cmd/Ctrl, hoặc chụm hai ngón trên trackpad — điểm thu phóng lấy con trỏ của bạn làm tâm.
- **Di chuyển khung nhìn:** giữ **Space** rồi kéo, hoặc kéo bằng **nút chuột giữa**. (Cú nhấp chuột thông thường vẫn được giữ nguyên để nhấp vào các phần của thiết kế.)
- **Bàn phím:** `0` = vừa khung cửa sổ · `1` = 100% · `+` / `−` = thu phóng.
- **HUD thu phóng:** điều khiển nhỏ `−  NN%  +  Fit` ở góc màn hình. Nhấp vào phần trăm để chuyển đổi giữa Fit ↔ 100%.

**Cảm ứng**

- **Chụm hai ngón** để thu phóng, **kéo** để di chuyển khung nhìn, **nhấp đúp** để đặt lại về vừa khung.

**Nhấp để chuyển đến điều khiển tương ứng:** nhấp vào bất kỳ phần tử nào trong thiết kế, trường nhập liệu tương ứng ở thanh bên sẽ được focus và cuộn vào tầm nhìn — với một nhóm hàng lặp lại, nó sẽ mở đúng hàng bạn vừa nhấp, nên chỉnh sửa những gì bạn nhìn thấy chỉ cách một cú chạm.

Mỗi khi thay đổi kích thước, khung nhìn sẽ luôn tự động trở về trạng thái vừa khung gọn gàng.

### Canvas tự do (Layout Studio)

Các công cụ canvas tự do bổ sung thêm một bề mặt làm việc *bao quanh* khung tranh, giống như bảng dán của nhà thiết kế:

- **Dàn dựng ngoài canvas.** Kéo một khối ra ngoài mép khung và nó vẫn hoàn toàn **hiển thị và có thể chọn được** — bạn có thể tạm để các phần tử sang một bên trong lúc sắp xếp bố cục, rồi kéo chúng trở lại sau. Mọi thứ nằm ngoài khung đều được **làm mờ nhẹ** để khu vực xuất file luôn dễ nhận biết ngay từ cái nhìn đầu tiên, và khung vẫn giữ bóng đổ để đánh dấu chính xác nơi file bắt đầu.
- **Chỉ khung mới được xuất ra.** File xuất ra bị giới hạn bởi khung tranh — bất cứ thứ gì nằm ngoài (hoặc phần của một khối tràn ra mép) đơn giản là bị cắt bỏ khỏi kết quả, ở cả định dạng raster lẫn vector.
- **Thu nhỏ hơn cả Fit** (xuống tới 20%) để nhìn thấy toàn bộ bảng dán khi bạn đã dàn các phần tử ra xa khung.
- **Khung tranh có thể đổi kích thước.** Thay đổi kích thước xuất file sẽ đổi kích thước khung ngay tại chỗ; các khối vẫn giữ nguyên vị trí, nên bạn có thể đóng khung lại một bố cục quanh nội dung đã có sẵn.

## Trên điện thoại

Trên màn hình hẹp, bố cục sẽ dồn về một cột:

- **Các điều khiển trở thành một tấm trượt** ở phía trên với một **tay cầm kéo** ở mép dưới. Kéo tay cầm để đổi kích thước — nó sẽ tự chốt vào **peek / half / full** — hoặc **chạm** vào tay cầm để chuyển đổi giữa thu gọn ↔ mở rộng. Bản xem trước lấp đầy phần không gian bên dưới và luôn hiển thị trong khi bạn chỉnh sửa.
- Nút **Render** nổi sẽ mở tấm trượt **Export** — toàn bộ các điều khiển định dạng, kích thước, sao chép, lưu và tải xuống đều nằm ở một chỗ. Đóng nó lại bằng cách chạm vào lớp nền phía sau.

## Điều khiển (đầu vào)

Các công cụ chỉ hiển thị những trường đầu vào có thể thay đổi — mọi thứ khác (màu sắc, bố cục, kiểu chữ, logic) đều do tác giả công cụ khoá cố định, để bất cứ thứ gì bạn tạo ra đều tuân theo quy tắc mà tác giả đặt ra. Các trường đầu vào bao gồm văn bản, thanh trượt, bộ chọn màu, danh sách thả xuống, ngày tháng, bộ chọn ảnh và các nhóm hàng lặp lại. Một số được nhóm trong các mục có thể thu gọn.

**Đặt lại:** *Clear changes* sẽ đưa mọi trường đầu vào về giá trị mặc định.

## Thông tin & ảnh chân dung của bạn

**Profile** (góc trên bên phải của gallery) lưu tên, thông tin liên hệ và một **ảnh chân dung** tuỳ chọn của bạn. Các công cụ yêu cầu những trường đó sẽ tự động điền sẵn — thiết lập một lần và chữ ký email, các lockup thương hiệu, cũng như huy hiệu của bạn sẽ tự điền theo. Bạn vẫn có thể ghi đè từng trường cho mỗi phiên làm việc. Bật **Use my details** để một công cụ được phép đọc các thông tin đó.

Ảnh chân dung và thông tin của bạn **chỉ tồn tại trên thiết bị này**. Một hồ sơ có thể không chỉ đại diện cho bạn — mà còn cho một nhóm hoặc một vai trò mà thỉnh thoảng bạn đảm nhận. Xem **[Hồ sơ](/info/profile.html)** để biết toàn cảnh, bao gồm cả cách giữ nhiều hơn một hồ sơ.

## Lưu & tiếp tục

Nhấp **Save** để lưu các trường đầu vào hiện tại thành một phiên làm việc cho công cụ đó. Bạn có thể giữ nhiều phiên có tên riêng cho mỗi công cụ; nút **Continue** của mỗi công cụ sẽ mở lại phiên gần nhất, còn **nút lịch sử** (góc trên bên phải, cạnh hồ sơ của bạn) liệt kê mọi phiên đã lưu trên tất cả các công cụ. Các phiên làm việc được lưu cục bộ trên thiết bị. Để sắp xếp chúng, hãy mở **Projects** (bên dưới).

## Projects

**Projects** — mở từ tab **Projects** cạnh **Tools**, hoặc từ **Profile → Storage → Organise in Projects** — là nơi lưu trữ mọi thứ bạn đã lưu, và hoạt động giống như một trình quản lý file:

- **Thư mục có thể lồng nhau.** Nhóm các phiên đã lưu vào thư mục, và thư mục trong thư mục, sâu tuỳ ý. Tạo một thư mục, đổi tên nó, hoặc kéo một ô vào thư mục khác để di chuyển nó; một breadcrumb sẽ đưa bạn quay lại các cấp trên. Một thư mục **Uncategorised** luôn có sẵn để chứa những gì chưa được sắp xếp.
- **Tạo công việc mới ngay trong thư mục.** Bên trong một thư mục, **+ New tool** sẽ mở một công cụ và tự động lưu bản lưu đầu tiên của nó vào thư mục đó.
- **Chọn nhiều mục (trên máy tính).** Tích vào ô chọn của một ô, kéo một khung chọn qua vùng canvas trống, hoặc giữ **Shift/Cmd rồi nhấp**; **nhấp chuột phải** vào một ô để mở menu ngữ cảnh. Sau đó thao tác trên toàn bộ lựa chọn cùng lúc.
- **Xuất cả một thư mục hoặc một lựa chọn.** **Render folder** xuất mọi phiên đã lưu trong một thư mục — bao gồm cả các thư mục con — thành một file `.zip` lồng nhau duy nhất. **Render selection** làm điều tương tự cho bất kỳ lựa chọn nhiều mục nào, còn một phiên đơn lẻ sẽ xuất thẳng ra file của riêng nó. Không cần Batch/Pro.
- **Chia sẻ một phiên đã lưu.** Nhấp chuột phải vào một phiên → **Share link** để sao chép một liên kết mở lại phiên đó với chính xác các trường đầu vào ban đầu (hộp thoại Share đầy đủ — xem bên dưới).

## Chia sẻ một liên kết

Mọi trường đầu vào đều được ghi lại trong URL của trang, vì vậy một liên kết *chính là* thiết kế. Dùng **Share** trong các điều khiển xuất file — hoặc **Share link** trên bất kỳ phiên đã lưu nào trong Projects — để mở **hộp thoại Share**: một liên kết sẵn sàng để sao chép cùng các công tắc bật/tắt cho việc mã hoá liên kết và điều gì sẽ xảy ra khi nó được mở (toàn màn hình, bảng xuất file được mở rộng sẵn, tự động tải xuống khi mở với `&export`, hoặc tự động sao chép vào clipboard với `&copy`).

Một thiết kế phức tạp sẽ tạo ra một URL dài, vì vậy hộp thoại này cũng cung cấp một **Shortest link** nén toàn bộ trạng thái vào một mã token gọn nhẹ — dạng URL dễ đọc vẫn luôn có sẵn song song. Gửi nó cho đồng nghiệp, lưu vào bookmark, hoặc commit nó vào code. (Chi tiết đầy đủ: [Chế độ URL](/info/url-mode.html).)

> Những hình ảnh bạn tải lên từ thiết bị của mình **không** được đưa vào một liên kết đã chia sẻ — chúng chỉ tồn tại trên máy của bạn.

## Camera trực tiếp (các công cụ phản ứng theo chuyển động)

Các **Filters** ảnh — Halftone, Scanline, Posterize, Duotone — hiển thị nút **Go live** ở nơi có camera khả dụng. Bật nó lên và hiệu ứng sẽ bám theo từng khung hình webcam của bạn, phản ứng theo chuyển động; bạn có thể ghi lại kết quả thành GIF, WebM hoặc MP4. Các khung hình được đọc và xử lý **trên thiết bị của bạn** và không bao giờ rời khỏi đó, còn camera được giải phóng ngay khi bạn dừng lại hoặc rời khỏi công cụ. (Bất kỳ bộ chọn ảnh nào cũng có **Take a photo** để chụp một khung hình đơn thành ảnh trên thiết bị.)

## My images

Khi một công cụ cho phép bạn thêm ảnh từ thiết bị, ảnh đó sẽ được giảm kích thước, loại bỏ dữ liệu EXIF/GPS, rồi lưu vào thư viện cá nhân **My images** của bạn (dưới **Profile → Storage**). Dùng lại ảnh đó ở bất kỳ công cụ nào. Thư viện này có giới hạn dung lượng và hoàn toàn cục bộ — bạn có thể quản lý hoặc xoá ảnh tại đó.

## Catalogue — thư viện tài sản của bạn

**Catalogue** (`#/c`, hoặc liên kết **Catalogue** trong menu) tập hợp mọi thứ mà các công cụ của bạn có thể sử dụng — logo thương hiệu, hình ảnh, âm thanh và chuyển động, được nhóm theo loại — và đây cũng là nơi lưu **các tệp sáng tạo của riêng bạn**. Không máy chủ, không bảng quản trị, không pull request: tất cả đều nằm trên thiết bị của bạn.

- **Đưa tệp của bạn vào.** Kéo bất kỳ hình ảnh, SVG, đoạn âm thanh, video, Lottie hay PDF nào vào vùng tải lên — hoặc nhấp để chọn — và nó sẽ xuất hiện ngay trong catalogue của bạn, sẵn sàng trong bộ chọn tài sản của mọi công cụ. Nạp vào bao nhiêu tuỳ thích; nó không bao giờ rời khỏi thiết bị của bạn.
- **Đánh dấu yêu thích những gì bạn hay dùng.** Gắn ★ cho một tài sản (hoặc một ô màu thương hiệu) và nó sẽ được ghim lên đầu mọi bộ chọn, nên logo hay màu bạn hay dùng chỉ cách một cú nhấp.
- **Dọn dẹp gọn gàng.** Phân loại lại một tài sản sang nhóm khác, ẩn một tài sản thương hiệu dùng chung mà bạn không dùng (với **Show hidden** để hiện lại), hoặc xoá hẳn các tệp bạn tự tải lên.

### Mang bảng màu và font của bạn đi khắp nơi

Bảng **Swatches** của Catalogue không chỉ để tham khảo — nhấp vào một màu để sao chép nó, hoặc **tải xuống toàn bộ bảng màu thương hiệu** ở định dạng mà công cụ khác của bạn hiểu:

- **Design tokens (JSON)**, **CSS variables**, hoặc **CSS classes** — đưa thẳng thương hiệu vào một stylesheet hay một bản build;
- **Adobe Swatch Exchange (.ase)** — nạp vào Illustrator hoặc Photoshop;
- **GIMP palette (.gpl)** — dành cho GIMP hoặc Inkscape.

Bảng **Fonts** liệt kê các bộ chữ thương hiệu của bạn kèm một nút **download** bên cạnh mỗi bộ, để cài đặt cục bộ hoặc trao cho một xưởng in. (Tab Colours của [Brand Studio](/info/brand-studio.html) cũng cung cấp cùng tính năng tải bảng màu này.)

Tài sản là một nửa của con đường mở, tự-làm-lấy; nửa còn lại là **tự tạo công cụ của riêng bạn** — canvas tự do (Layout Studio, đã mô tả ở trên) cho phép bạn dựng một công cụ một cách trực quan, không cần viết mã.

## Âm thanh & khả năng tiếp cận

Lolly hướng tới sự thoải mái khi sử dụng cho tất cả mọi người. Giao diện có thể điều hướng bằng bàn phím, các điều khiển tuỳ chỉnh đều có nhãn phù hợp cho trình đọc màn hình, và bản xem trước trực tiếp của mỗi công cụ được hiển thị dưới dạng một hình ảnh duy nhất có gắn nhãn mô tả những gì nó đang tạo ra.

Một lớp **âm thanh hỗ trợ** nhẹ nhàng xác nhận những gì bạn vừa làm — khi vào gallery, khi kiểm tra Content Credentials hợp lệ hay không hợp lệ, khi đóng một bảng điều khiển, khi chuyển bộ lọc. Tính năng này **bật theo mặc định** nhưng luôn có thể tắt: tắt **Sound** ở bất cứ đâu công tắc này xuất hiện (popover tuỳ chọn của mỗi màn hình, hoặc trong **Profile**), và lựa chọn của bạn sẽ được ghi nhớ.

Cạnh công tắc đó là **Neurospicy Mode** — một bản nhạc nền tập trung, êm dịu, tuỳ chọn, phát nhẹ nhàng trong lúc bạn làm việc. Bật nó lên sẽ mở một **khay trình phát (player dock)** nhỏ ở góc dưới, đi theo bạn khắp ứng dụng; từ đó bạn có thể tìm và chọn một bản nhạc, tua tới và lùi, chỉnh âm lượng, cùng thu nhỏ hoặc đóng nó lại. Danh sách nhạc trải rộng vài danh mục — những giai điệu *Lolly Sings* được tạo tự động (procedural), các vòng lặp và beat nền, âm thanh bạn tự tải lên, và một số ít đài **radio** internet trực tiếp (những đài này cần kết nối; mọi thứ còn lại đều phát ngoại tuyến). Tính năng này **tắt theo mặc định** và, giống như Sound, được ghi nhớ qua các phiên làm việc và các thiết bị. Tắt Sound cũng sẽ tắt tiếng bản nhạc tập trung này.

## Lưu trữ & quyền riêng tư

Mọi thứ được lưu trong cơ sở dữ liệu cục bộ của trình duyệt (IndexedDB): hồ sơ của bạn, các phiên đã lưu, ảnh đã tải lên, và bộ nhớ đệm nội dung catalog đã tải về. **Profile → Storage** hiển thị dung lượng sử dụng và cho phép bạn:

- **Clear cache** — xoá nội dung catalog đã tải về (sẽ đồng bộ lại ở lần tải sau).
- **Clear all my data** — xoá sạch hồ sơ, các phiên làm việc và ảnh. *Không thể hoàn tác.*

Không có gì được truyền đi bất cứ đâu. Không có telemetry, không có render trên đám mây.

## Chuyển sang thiết bị khác

Vì mọi thứ đều nằm trên thiết bị của bạn, **Profile → Storage → Move to another device** cho phép bạn mang toàn bộ dữ liệu sang một bản cài đặt thứ hai — không cần tài khoản, không cần đám mây:

- **Export my data** tải xuống một file `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` duy nhất (các phần trong tên lấy từ hồ sơ của bạn và sẽ bị bỏ nếu chưa thiết lập; `<n>` là bộ đếm theo ngày để các lần xuất trong cùng một ngày không bị trùng tên) chứa hồ sơ của bạn, mọi phiên đã lưu (kèm ảnh thu nhỏ), các ảnh bạn đã tải lên, và các tuỳ chọn của bạn (giao diện, độ rộng thanh bên, số liệu hoạt động cục bộ).
- **Import data…** trên bản cài đặt kia sẽ đọc lại file đó. Nó sẽ **hợp nhất**: bất cứ thứ gì trùng tên (hồ sơ của bạn, một phiên đã lưu, một ảnh) sẽ được thay bằng bản đã nhập; mọi thứ khác trên thiết bị đó vẫn được giữ nguyên. Các phiên đã lưu sẽ tự động liên kết lại với ảnh bạn đã nhập.

Bộ nhớ đệm catalog không được bao gồm trong gói — nó sẽ tự tải lại trên thiết bị mới. Gói này là một file zip thông thường (`manifest.json` + `profile.json` + `sessions.json` + `assets.json` + `assets/blobs/…` + `prefs.json`, id định dạng `lolly-backup`), vì vậy nó có thể được gửi qua email, USB hay AirDrop mà vẫn nguyên vẹn, và đây cũng là định dạng mà mọi shell đều đọc được. Mỗi phần đều có checksum, nên một file bị hỏng trong quá trình truyền sẽ bị phát hiện khi nhập vào thay vì được khôi phục nửa vời. (Đặc tả định dạng đầy đủ: [Chuyển dữ liệu](/info/data-transfer.html).)

## Nhập một thiết kế (Figma, Penpot, Illustrator, InDesign)

Bạn có thể đưa một thiết kế có sẵn vào Lolly và tiếp tục làm việc trên đó: mở **Layout Studio**, nhấp **Import a design** trên thanh công cụ của canvas, rồi chọn một file Figma **.fig** hoặc SVG, một file Penpot **.penpot**, một file Illustrator **.ai** / **.pdf**, hoặc một file InDesign **.idml**. Các lớp sẽ trở thành các khối có thể chỉnh sửa trên canvas tự do — văn bản vẫn có thể gõ lại được, hình ảnh sẽ nằm trong **My images**, còn kiểu chữ và màu sắc sẽ tuân theo các biến thương hiệu toàn cục — sau đó kết quả được lưu, chia sẻ và xuất file như bất kỳ phiên làm việc nào khác. Việc phân tích diễn ra hoàn toàn trên thiết bị của bạn. Chi tiết đầy đủ: **[Nhập một thiết kế](/info/design-import.html)**.

## Xuất file

Xem **[Xuất file & Định dạng](/info/exporting.html)** để biết toàn bộ câu chuyện — chọn định dạng, kích thước xuất và đơn vị in ấn, độ trong suốt, video, và sao chép/chia sẻ. Tóm tắt: chọn một định dạng, đặt kích thước nếu cần, rồi **Download** (hoặc **Copy** vào clipboard).

## Chế độ Batch (Pro)

Dành cho người dùng chuyên sâu, **Batch** (liên kết từ gallery, bị khoá sau cờ tính năng Pro, vốn bật theo mặc định) xuất nhiều biến thể cùng lúc — một bảng lưới nơi mỗi hàng là một tập hợp các trường đầu vào, được xuất cùng nhau. Lý tưởng để bản địa hoá một tấm thiệp sang hàng chục ngôn ngữ hoặc tạo ra mọi biến thể kích thước trong một lượt. Điền các hàng bằng cách gõ trực tiếp, dán thẳng từ một bảng tính, hoặc nhập một file CSV (bạn cũng có thể xuất ngược lại một file), và đặt định dạng, kích thước, tên file xuất theo từng hàng. Lưu cả một bảng lưới thành một **phiên batch** có tên riêng để mở lại từ gallery, và tải xuống mọi hàng dưới dạng một file `.zip` duy nhất.

Batch dùng để tạo ra **nhiều biến thể của cùng một mẫu** cùng lúc. Để xuất lại các phiên bạn đã **lưu từ trước**, hãy dùng **Projects → Render folder / Render selection** (ở trên) — không cần Pro.

## Ngoại tuyến & cài đặt

Lolly là một PWA. Sau lần tải đầu tiên, nó hoạt động được **ngoại tuyến** — hãy cài đặt nó từ thanh địa chỉ trình duyệt của bạn (hoặc *Add to Home Screen* trên di động) để có trải nghiệm giống ứng dụng, toàn màn hình. Nó sẽ tự cập nhật khi bạn online trở lại.
