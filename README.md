# Landing page BĐS — Bcons Central Park

Next.js 16 + Tailwind CSS 4. Deploy Vercel, form nhận lead, SEO, tracking sẵn sàng.

## Chạy trên máy

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # kiểm tra trước khi deploy
```

## 1. Sửa nội dung — chỉ 1 file

Toàn bộ chữ nghĩa nằm ở [`data/site.ts`](data/site.ts). Sửa file này là web đổi theo,
không cần đụng vào code giao diện.

Những chỗ **bắt buộc phải thay** (đang là số/địa chỉ giả):

| Trường          | Ý nghĩa                              |
| --------------- | ------------------------------------ |
| `site.hotline`  | Số hotline hiển thị + nút gọi        |
| `site.zalo`     | Số Zalo cho nút chat                 |
| `site.email`    | Email hiển thị ở footer              |
| `site.domain`   | Domain thật (ảnh hưởng SEO, sitemap) |
| `site.mapEmbed` | Link nhúng Google Maps đúng vị trí   |
| `site.facebook` | Link fanpage                         |

## 2. Thay ảnh

Ảnh hiện tại tải từ trang mẫu, nằm trong `public/images/`. Thay ảnh thật:

1. Bỏ ảnh mới vào `public/images/` (khuyến nghị `.jpg` hoặc `.webp`).
2. Sửa đường dẫn tương ứng trong `data/site.ts`.

Kích thước khuyến nghị: hero 1920×1080, mặt bằng 1200×900, nhà mẫu 1200×900.
Tải lại toàn bộ ảnh từ trang mẫu: `bash scripts/fetch-images.sh`.

**Chưa có mặt bằng 1PN và 3PN** — trong `data/site.ts` hai loại căn này để
`image: ""` nên web hiện ô "liên hệ nhận mặt bằng". Có file thật thì điền đường dẫn vào.

### Tài liệu tải về

`public/tai-lieu/` đang chứa 4 file PDF **mẫu** (nội dung trống). Thay bằng file thật
với đúng tên file, hoặc sửa `documents` trong `data/site.ts`.

## 3. Nhận thông tin khách đăng ký

Form gọi vào `POST /api/lead`. Chưa cấu hình gì thì lead vẫn được ghi vào log server
(Vercel → Deployment → Logs) nên **không mất khách**. Chọn 1 trong 2 cách bên dưới,
khai báo biến trong `.env.local` và trên Vercel (Settings → Environment Variables).

### Cách A — Google Sheet (miễn phí, dễ xem nhất)

1. Tạo Google Sheet mới, hàng 1 đặt tiêu đề:
   `time | name | phone | email | interest | note | source | page | ip`
2. Menu **Tiện ích mở rộng → Apps Script**, dán đoạn sau:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const d = JSON.parse(e.postData.contents);
  sheet.appendRow([
    d.time, d.name, d.phone, d.email,
    d.interest, d.note, d.source, d.page, d.ip,
  ]);
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. **Triển khai → Tùy chọn triển khai mới → Ứng dụng web**
   - Thực thi với tên: **Tôi**
   - Ai có quyền truy cập: **Bất kỳ ai**
4. Copy URL Web App → dán vào biến `GOOGLE_SHEET_WEBHOOK_URL`.

### Cách B — Email qua Resend ✅ (đang dùng)

1. Đăng ký [resend.com](https://resend.com) (free 3.000 email/tháng), tạo API key.
2. Khai báo `RESEND_API_KEY` và `LEAD_TO_EMAIL` (nhiều email thì cách nhau dấu phẩy).

⚠️ Khi chưa xác minh domain riêng, Resend chỉ cho gửi tới **email của chính chủ tài khoản**.
Muốn gửi tới địa chỉ khác: vào Resend → Domains → thêm domain và xác minh DNS,
rồi đổi `LEAD_FROM_EMAIL` sang email thuộc domain đó.

Đã có sẵn: kiểm tra định dạng SĐT, bẫy honeypot chống bot, giới hạn 5 lượt/10 phút mỗi IP.

## 4. Tracking quảng cáo

Khai báo `NEXT_PUBLIC_GA4_ID` (dạng `G-XXXXXXX`) và `NEXT_PUBLIC_FB_PIXEL_ID`.
Khi khách gửi form, site tự bắn sự kiện `generate_lead` (GA4) và `Lead` (Pixel)
để đo chuyển đổi quảng cáo.

## 5. Deploy lên Vercel

1. Tạo repo trống trên GitHub, rồi:

```bash
git remote add origin https://github.com/<tài-khoản>/<tên-repo>.git
git push -u origin main
```

2. [vercel.com](https://vercel.com) → **Add New → Project** → chọn repo → **Deploy**
   (Vercel tự nhận Next.js, để mặc định hết).
3. **Settings → Environment Variables** → thêm các biến ở mục 3 & 4 → **Redeploy**.
4. **Settings → Domains** → thêm domain → khai báo DNS theo đúng giá trị Vercel hiện ra
   (thường là `A @ → 76.76.21.21` và `CNAME www → cname.vercel-dns.com`).
   SSL bật tự động sau khi DNS trỏ xong.

Từ đó về sau: mỗi lần `git push` là Vercel tự build lại.

## 6. Nghiệm thu trước khi chạy quảng cáo

- [ ] Đã thay hotline, Zalo, email, domain thật trong `data/site.ts`
- [ ] Đã thay ảnh thật
- [ ] Gửi thử form → lead về đúng Sheet/email
- [ ] Bấm nút gọi + chat Zalo trên điện thoại
- [ ] Kiểm tra hiển thị trên mobile
- [ ] Chạy PageSpeed Insights
- [ ] Submit domain vào Google Search Console + gửi `sitemap.xml`

## Cấu trúc

```
app/            layout, trang chủ, API lead, sitemap, robots, ảnh OG
components/     các section giao diện
data/site.ts    ⭐ toàn bộ nội dung
public/images/  ảnh (đang là placeholder)
scripts/        script tạo ảnh placeholder
```
