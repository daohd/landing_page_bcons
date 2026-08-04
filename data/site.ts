/**
 * TOÀN BỘ NỘI DUNG WEBSITE NẰM Ở FILE NÀY.
 * Sửa ở đây là web đổi theo — không cần đụng vào code giao diện.
 */

export const site = {
  // ——— Thông tin chung ———
  name: "Bcons Central Park",
  tagline: "Căn hộ trung tâm Dĩ An — Kết nối metro, sống trọn tiện nghi",
  domain: "https://bcons-centralpark.example.com", // ⚠️ đổi thành domain thật sau khi mua
  description:
    "Bcons Central Park — căn hộ cao cấp ngay trung tâm TP. Dĩ An, Bình Dương. Liền kề tuyến Metro số 1, Làng Đại học Quốc gia, chỉ 15 phút tới TP. Thủ Đức. Thanh toán linh hoạt, hỗ trợ vay 70%.",
  // Ảnh chia sẻ Facebook/Zalo được sinh tự động tại app/opengraph-image.tsx

  // ——— Liên hệ ———
  hotline: "0900 000 000", // ⚠️ thay số thật
  zalo: "0900000000", // ⚠️ số Zalo (không dấu cách)
  email: "sales@example.com",
  facebook: "https://facebook.com/",
  address: "Đường Thống Nhất, P. Dĩ An, TP. Dĩ An, Bình Dương",
  mapEmbed:
    "https://www.google.com/maps?q=Di+An,+Binh+Duong&output=embed",

  // ——— Tracking (để trống thì tự động bỏ qua) ———
  ga4: process.env.NEXT_PUBLIC_GA4_ID ?? "",
  fbPixel: process.env.NEXT_PUBLIC_FB_PIXEL_ID ?? "",

  // ——— Menu ———
  nav: [
    { label: "Tổng quan", href: "#tong-quan" },
    { label: "Vị trí", href: "#vi-tri" },
    { label: "Tiện ích", href: "#tien-ich" },
    { label: "Mặt bằng", href: "#mat-bang" },
    { label: "Nhà mẫu", href: "#nha-mau" },
    { label: "Bảng giá", href: "#bang-gia" },
    { label: "Tiến độ", href: "#tien-do" },
    { label: "Liên hệ", href: "#lien-he" },
  ],
};

// ——— HERO ———
export const hero = {
  image: "/images/hero.svg",
  eyebrow: "Chính thức nhận đặt chỗ đợt 1",
  title: "BCONS CENTRAL PARK",
  subtitle: "Căn hộ trung tâm Dĩ An — chỉ 3 phút tới Metro số 1",
  highlights: [
    { value: "1.2 tỷ", label: "Giá từ / căn 1PN" },
    { value: "70%", label: "Hỗ trợ vay ngân hàng" },
    { value: "0%", label: "Lãi suất 24 tháng" },
    { value: "Q4/2027", label: "Dự kiến bàn giao" },
  ],
};

// ——— TỔNG QUAN ———
export const overview = {
  intro:
    "Bcons Central Park là dự án căn hộ cao tầng do Tập đoàn Bcons phát triển, tọa lạc tại vị trí vàng trung tâm TP. Dĩ An, Bình Dương. Dự án sở hữu lợi thế kết nối trực tiếp với tuyến Metro số 1 Bến Thành – Suối Tiên, Làng Đại học Quốc gia TP.HCM và các khu công nghiệp lớn phía Đông.",
  facts: [
    { label: "Tên dự án", value: "Bcons Central Park" },
    { label: "Chủ đầu tư", value: "Tập đoàn Bcons" },
    { label: "Vị trí", value: "Đường Thống Nhất, TP. Dĩ An, Bình Dương" },
    { label: "Quy mô", value: "2 block, 2 tầng hầm + 30 tầng cao" },
    { label: "Diện tích khu đất", value: "10.000 m²" },
    { label: "Mật độ xây dựng", value: "38% — còn lại là cảnh quan" },
    { label: "Số căn hộ", value: "1.200 căn hộ + 40 shophouse" },
    { label: "Loại hình", value: "Căn hộ 1PN – 2PN – 3PN, Shophouse" },
    { label: "Pháp lý", value: "Sổ hồng riêng từng căn, sở hữu lâu dài" },
    { label: "Bàn giao", value: "Quý 4/2027 — hoàn thiện cơ bản" },
  ],
  videoId: "", // ID video YouTube, vd: "dQw4w9WgXcQ" — để trống thì ẩn
};

// ——— VỊ TRÍ ———
export const location = {
  intro:
    "Tọa lạc ngay trung tâm hành chính TP. Dĩ An, Bcons Central Park là điểm giao của trục kết nối Bình Dương – TP. Thủ Đức – TP.HCM.",
  distances: [
    { place: "Ga Metro số 1 (Suối Tiên)", time: "3 phút", km: "1,2 km" },
    { place: "Làng Đại học Quốc gia TP.HCM", time: "5 phút", km: "2 km" },
    { place: "Chợ Dĩ An / UBND TP. Dĩ An", time: "5 phút", km: "1,5 km" },
    { place: "Bệnh viện Đa khoa Dĩ An", time: "7 phút", km: "3 km" },
    { place: "Vincom Dĩ An", time: "8 phút", km: "3,5 km" },
    { place: "Bến xe Miền Đông mới", time: "10 phút", km: "5 km" },
    { place: "TP. Thủ Đức (Vincom Thủ Đức)", time: "15 phút", km: "8 km" },
    { place: "Sân bay Tân Sơn Nhất", time: "35 phút", km: "22 km" },
  ],
};

// ——— TIỆN ÍCH NỘI KHU ———
export const amenities = [
  { icon: "🏊", name: "Hồ bơi tràn bờ", desc: "Hồ bơi vô cực tầng 5, view toàn thành phố" },
  { icon: "💪", name: "Phòng gym & yoga", desc: "Trang thiết bị nhập khẩu, HLV riêng" },
  { icon: "🌳", name: "Công viên nội khu", desc: "Hơn 3.000 m² cây xanh, đường dạo bộ" },
  { icon: "🛒", name: "Trung tâm thương mại", desc: "Khối đế shophouse & siêu thị tiện lợi" },
  { icon: "🎠", name: "Khu vui chơi trẻ em", desc: "Sân chơi trong nhà và ngoài trời" },
  { icon: "📚", name: "Thư viện & co-working", desc: "Không gian học tập, làm việc chung" },
  { icon: "🏸", name: "Sân thể thao", desc: "Sân cầu lông, bóng rổ đa năng" },
  { icon: "🅿️", name: "2 tầng hầm để xe", desc: "Đủ chỗ cho ô tô và xe máy" },
  { icon: "🛡️", name: "An ninh 24/7", desc: "Camera toàn khu, thẻ từ thang máy" },
];

// ——— MẶT BẰNG ———
export const floorPlans = [
  {
    id: "1pn",
    name: "Căn hộ 1 Phòng ngủ",
    area: "45 – 52 m²",
    layout: "1PN + 1WC + ban công",
    image: "/images/mat-bang-1pn.svg",
    note: "Phù hợp người độc thân, vợ chồng trẻ, đầu tư cho thuê.",
  },
  {
    id: "2pn",
    name: "Căn hộ 2 Phòng ngủ",
    area: "58 – 68 m²",
    layout: "2PN + 2WC + ban công",
    image: "/images/mat-bang-2pn.svg",
    note: "Loại căn bán chạy nhất, tối ưu cho gia đình 3–4 người.",
  },
  {
    id: "3pn",
    name: "Căn hộ 3 Phòng ngủ",
    area: "78 – 92 m²",
    layout: "3PN + 2WC + logia rộng",
    image: "/images/mat-bang-3pn.svg",
    note: "Không gian rộng rãi cho gia đình đa thế hệ.",
  },
  {
    id: "shophouse",
    name: "Shophouse khối đế",
    area: "80 – 150 m²",
    layout: "Mặt tiền thương mại, trần cao 4,5m",
    image: "/images/mat-bang-shophouse.svg",
    note: "Kinh doanh trực tiếp hoặc cho thuê dòng tiền ổn định.",
  },
];

// ——— NHÀ MẪU (gallery) ———
export const gallery = [
  { src: "/images/nha-mau-1.svg", alt: "Phòng khách nhà mẫu" },
  { src: "/images/nha-mau-2.svg", alt: "Phòng bếp nhà mẫu" },
  { src: "/images/nha-mau-3.svg", alt: "Phòng ngủ master" },
  { src: "/images/nha-mau-4.svg", alt: "Phòng ngủ nhỏ" },
  { src: "/images/nha-mau-5.svg", alt: "Nhà vệ sinh" },
  { src: "/images/nha-mau-6.svg", alt: "Ban công view thành phố" },
];

// ——— BẢNG GIÁ ———
export const pricing = {
  note: "Giá đã bao gồm VAT, chưa bao gồm 2% phí bảo trì. Bảng giá mang tính tham khảo, vui lòng liên hệ để nhận bảng giá & giỏ hàng mới nhất.",
  rows: [
    { type: "1PN + 1WC", area: "45 – 52 m²", price: "1,20 – 1,45 tỷ", monthly: "từ 8 triệu/tháng" },
    { type: "2PN + 2WC", area: "58 – 68 m²", price: "1,75 – 2,10 tỷ", monthly: "từ 12 triệu/tháng" },
    { type: "3PN + 2WC", area: "78 – 92 m²", price: "2,45 – 2,95 tỷ", monthly: "từ 17 triệu/tháng" },
    { type: "Shophouse", area: "80 – 150 m²", price: "Liên hệ", monthly: "—" },
  ],
  policy: [
    "Thanh toán chỉ 20% ký hợp đồng mua bán, phần còn lại theo tiến độ.",
    "Hỗ trợ vay đến 70% giá trị căn hộ, ân hạn nợ gốc 24 tháng.",
    "Ngân hàng tài trợ lãi suất 0% trong 24 tháng đầu.",
    "Chiết khấu đến 8% khi thanh toán nhanh 95%.",
    "Tặng gói nội thất cao cấp trị giá 100 triệu cho 50 khách hàng đầu tiên.",
  ],
};

// ——— TIẾN ĐỘ ———
export const progress = [
  { date: "05/2026", title: "Khởi công dự án", desc: "Ép cọc đại trà, thi công tường vây.", done: true },
  { date: "11/2026", title: "Hoàn thành phần hầm", desc: "Thi công xong 2 tầng hầm.", done: true },
  { date: "06/2027", title: "Cất nóc block A", desc: "Hoàn thiện kết cấu tầng 30.", done: false },
  { date: "10/2027", title: "Hoàn thiện mặt ngoài", desc: "Lắp kính, sơn hoàn thiện, cảnh quan.", done: false },
  { date: "12/2027", title: "Bàn giao nhà", desc: "Bàn giao căn hộ cho khách hàng.", done: false },
];

// ——— NGÂN HÀNG ———
export const banks = [
  "Vietcombank",
  "VietinBank",
  "BIDV",
  "Agribank",
  "Techcombank",
  "MB Bank",
  "VPBank",
  "ACB",
];

// ——— PHÁP LÝ ———
export const legal = [
  "Giấy chứng nhận quyền sử dụng đất đứng tên chủ đầu tư.",
  "Quyết định phê duyệt quy hoạch chi tiết 1/500.",
  "Giấy phép xây dựng do Sở Xây dựng Bình Dương cấp.",
  "Văn bản đủ điều kiện bán nhà ở hình thành trong tương lai.",
  "Bảo lãnh ngân hàng cho nghĩa vụ tài chính của chủ đầu tư.",
  "Sổ hồng riêng từng căn hộ, sở hữu lâu dài.",
];

// ——— TIN TỨC ———
export const news = [
  {
    title: "Metro số 1 chính thức vận hành thương mại toàn tuyến",
    date: "20/07/2026",
    excerpt:
      "Tuyến metro Bến Thành – Suối Tiên đi vào khai thác, rút ngắn thời gian di chuyển từ Dĩ An về trung tâm TP.HCM còn 30 phút.",
    href: "#",
  },
  {
    title: "Bình Dương duyệt quy hoạch mở rộng đường Thống Nhất",
    date: "12/07/2026",
    excerpt:
      "Trục đường trước dự án được nâng cấp lên 6 làn xe, tăng khả năng kết nối và giá trị bất động sản khu vực.",
    href: "#",
  },
  {
    title: "Bcons Central Park mở bán đợt 1 với chính sách ưu đãi lớn",
    date: "01/07/2026",
    excerpt:
      "Chủ đầu tư áp dụng chiết khấu đến 8% và tặng gói nội thất cho khách hàng đặt chỗ sớm.",
    href: "#",
  },
];

// ——— FAQ (tốt cho SEO) ———
export const faqs = [
  {
    q: "Bcons Central Park nằm ở đâu?",
    a: "Dự án tọa lạc tại đường Thống Nhất, TP. Dĩ An, tỉnh Bình Dương — cách ga Metro số 1 khoảng 1,2 km.",
  },
  {
    q: "Giá bán căn hộ Bcons Central Park bao nhiêu?",
    a: "Giá từ 1,2 tỷ đồng cho căn 1 phòng ngủ và từ 1,75 tỷ cho căn 2 phòng ngủ (đã gồm VAT).",
  },
  {
    q: "Dự án khi nào bàn giao?",
    a: "Dự kiến bàn giao vào quý 4 năm 2027, hoàn thiện cơ bản.",
  },
  {
    q: "Có hỗ trợ vay ngân hàng không?",
    a: "Có. Dự án hỗ trợ vay đến 70% giá trị căn hộ, ân hạn nợ gốc và lãi suất 0% trong 24 tháng.",
  },
];
