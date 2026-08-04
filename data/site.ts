/**
 * TOÀN BỘ NỘI DUNG WEBSITE NẰM Ở FILE NÀY.
 * Sửa ở đây là web đổi theo — không cần đụng vào code giao diện.
 */

export const site = {
  // ——— Thông tin chung ———
  name: "Bcons Central Park",
  altName: "Bcons Tam Hiệp — Bcons Biên Hòa",
  tagline: "Tâm điểm an cư All-in-One giữa trung tâm Biên Hòa",
  domain: "https://landing-page-bcons-liart.vercel.app", // đổi khi mua domain riêng
  description:
    "Bcons Central Park (Bcons Tam Hiệp) — dự án căn hộ cao tầng thứ 21 của Tập đoàn Bcons tại 236 Phan Trung, phường Tam Hiệp, TP. Biên Hòa, Đồng Nai. Tổng vốn 4.500 tỷ, quy mô gần 3ha, 2.820 căn hộ. Giá dự kiến từ 45 triệu/m².",

  // ——— Liên hệ ———
  hotline: "0376 795 310",
  zalo: "0376795310",
  email: "daohd0412@gmail.com",
  facebook: "https://facebook.com/",
  address: "236 đường Phan Trung, phường Tam Hiệp, TP. Biên Hòa, tỉnh Đồng Nai",
  mapEmbed:
    "https://www.google.com/maps?q=236+Phan+Trung,+Tam+Hiep,+Bien+Hoa,+Dong+Nai&output=embed",

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
    { label: "Pháp lý", href: "#phap-ly" },
  ],
};

// ——— HERO ———
export const hero = {
  image: "/images/phoi-canh-2.jpg",
  eyebrow: "Dự án thứ 21 của Tập đoàn Bcons",
  title: "BCONS CENTRAL PARK",
  subtitle:
    "Khu nhà ở phức hợp cao tầng ngay lõi trung tâm TP. Biên Hòa — 236 Phan Trung, phường Tam Hiệp, Đồng Nai.",
  highlights: [
    { value: "45 tr/m²", label: "Giá dự kiến từ" },
    { value: "2.820", label: "Căn hộ" },
    { value: "3 ha", label: "Quy mô khu đất" },
    { value: "80%", label: "Hỗ trợ vay, tới 20 năm" },
  ],
};

// ——— ĐIỂM NHẤN (dải USP dưới hero) ———
export const usps = [
  { icon: "📍", title: "Lõi trung tâm Biên Hòa", desc: "Mặt tiền Phan Trung, sát trục Nguyễn Ái Quốc – Đồng Khởi" },
  { icon: "🌳", title: "Hệ sinh thái All-in-One", desc: "Mall, hồ bơi, gym, nhà trẻ, công viên ngay trong khu" },
  { icon: "🏦", title: "6 ngân hàng bảo trợ", desc: "Vay tới 80%, ân hạn gốc, kéo dài tới 20 năm" },
  { icon: "⚖️", title: "Quỹ đất sạch đấu giá", desc: "Không vướng đền bù, giải phóng mặt bằng, tranh chấp" },
];

// ——— TỔNG QUAN ———
export const overview = {
  intro:
    "Bcons Central Park là khu nhà ở phức hợp cao tầng của Tập đoàn Bcons, tọa lạc tại số 236 đường Phan Trung, phường Tam Hiệp, TP. Biên Hòa, tỉnh Đồng Nai. Dự án có tổng vốn đầu tư gần 4.500 tỷ đồng, quy mô gần 3ha, gồm các block căn hộ cao 22 tầng, định hướng trở thành tâm điểm an cư “All-in-One” giữa trung tâm đô thị.",
  image: "/images/tong-quan.jpg",
  facts: [
    { label: "Tên dự án", value: "Bcons Biên Hòa (Bcons Tam Hiệp)" },
    { label: "Tên thương mại", value: "Bcons Central Park" },
    { label: "Vị trí", value: "236 Phan Trung, P. Tam Hiệp, TP. Biên Hòa, Đồng Nai" },
    { label: "Chủ đầu tư", value: "Tập đoàn Bcons (Bcons Group)" },
    { label: "Tổng thầu", value: "CTCP Đầu tư Xây dựng Bcons" },
    { label: "Tổng vốn đầu tư", value: "Gần 4.500 tỷ đồng" },
    { label: "Diện tích khu đất", value: "27.455,7 m² (gần 3 ha)" },
    { label: "Mật độ xây dựng", value: "Khoảng 38,05%" },
    { label: "Quy mô xây dựng", value: "22 tầng nổi + 2 tầng hầm" },
    { label: "Tổng số sản phẩm", value: "Khoảng 2.820 căn hộ" },
    { label: "Loại hình", value: "Căn hộ ở, shophouse chân đế, căn hộ dịch vụ" },
    { label: "Lễ động thổ", value: "27/05/2026" },
    { label: "Dự kiến bàn giao", value: "Năm 2029" },
  ],
  videoId: "", // ID video YouTube lễ động thổ, vd "dQw4w9WgXcQ" — để trống thì ẩn
};

// ——— VỊ TRÍ ———
export const location = {
  intro:
    "Dự án nằm ngay lõi trung tâm TP. Biên Hòa — đô thị loại I của tỉnh Đồng Nai, nơi tập trung hạ tầng giao thông, cơ quan hành chính và dịch vụ trọng điểm.",
  image: "/images/vi-tri.jpg",
  groups: [
    {
      icon: "🚇",
      name: "Giao thông",
      items: [
        { place: "Đường Nguyễn Ái Quốc", value: "5 phút" },
        { place: "Đường Đồng Khởi", value: "5 phút" },
        { place: "Ga Biên Hòa", value: "5 phút · 2 km" },
        { place: "Sân bay Biên Hòa", value: "10 phút · 3 km" },
        { place: "Sân bay quốc tế Long Thành", value: "~25 phút · 25 km" },
      ],
    },
    {
      icon: "🎓",
      name: "Trường học",
      items: [
        { place: "Trường Tiểu học Tân Hiệp", value: "500 m" },
        { place: "Trường THCS Tân Hiệp", value: "1 km" },
        { place: "Trường THPT Trấn Biên", value: "2 km" },
        { place: "CĐ Kỹ thuật Đồng Nai", value: "3 km" },
        { place: "Đại học Lạc Hồng", value: "5 km" },
      ],
    },
    {
      icon: "🏥",
      name: "Bệnh viện",
      items: [
        { place: "Bệnh viện Đồng Nai 2", value: "1 km" },
        { place: "BV Đa khoa Tâm Hồng Phước", value: "2 km" },
        { place: "BV Quốc tế Hoàn Mỹ Đồng Nai", value: "3 km" },
        { place: "BV Đa khoa Thống Nhất", value: "5 km" },
        { place: "BV Nhi Đồng Đồng Nai", value: "6 km" },
      ],
    },
    {
      icon: "🛍️",
      name: "Mua sắm & giải trí",
      items: [
        { place: "Chợ Tân Phong", value: "500 m" },
        { place: "Co.opmart Biên Hòa", value: "1 km" },
        { place: "Big C Đồng Nai", value: "3 km" },
        { place: "Vincom Plaza Biên Hòa", value: "4 km" },
        { place: "Aeon Mall Đồng Nai", value: "6 km" },
        { place: "Khu du lịch Sơn Tiên", value: "10 phút" },
      ],
    },
  ],
};

// ——— TIỆN ÍCH NỘI KHU ———
export const amenities = [
  { icon: "🛒", name: "TTTM Bcons Central Mall", desc: "Trung tâm thương mại ngay trong dự án, mua sắm không cần rời khu." },
  { icon: "🏊", name: "Hồ bơi vô cực tầng 2", desc: "Dấu ấn thư giãn đẳng cấp, bơi lội thư giãn sau giờ làm việc." },
  { icon: "🌳", name: "Công viên nội khu", desc: "Cây xanh rộng rãi, đường dạo bộ và không gian tập luyện ngoài trời." },
  { icon: "🏪", name: "Shophouse khối đế", desc: "Mặt bằng thương mại chân đế, môi trường kinh doanh sôi động." },
  { icon: "🧸", name: "Nhà trẻ nội khu", desc: "Nhà trẻ và trung tâm giáo dục sớm ngay trong khuôn viên." },
  { icon: "💪", name: "Phòng gym & yoga", desc: "Trang thiết bị hiện đại, nâng tầm sức khỏe mỗi ngày." },
  { icon: "🏀", name: "Khu thể thao ngoài trời", desc: "Sân bóng rổ và các khu tập luyện thể thao đa dạng." },
  { icon: "🌿", name: "Vườn trên mái & cafe rooftop", desc: "Không gian xanh trên cao, cafe ngắm toàn cảnh thành phố." },
  { icon: "🅿️", name: "2 tầng hầm để xe", desc: "Hầm để xe rộng rãi, đủ chỗ cho ô tô và xe máy." },
];

export const amenityImages = [
  { src: "/images/tien-ich-1.jpg", alt: "Tiện ích nội khu Bcons Central Park" },
  { src: "/images/tien-ich-2.jpg", alt: "Cảnh quan nội khu Bcons Central Park" },
  { src: "/images/tien-ich-3.jpg", alt: "Không gian sinh hoạt chung Bcons Central Park" },
  { src: "/images/tien-ich-4.jpg", alt: "Hồ bơi và khu thể thao Bcons Central Park" },
];

// ——— MẶT BẰNG ———
// image: để trống nếu chưa có file mặt bằng thật — web sẽ hiện ô "liên hệ nhận mặt bằng"
export const floorPlans = [
  {
    id: "1pn",
    name: "Căn hộ 1 Phòng ngủ",
    area: "43 – 45 m²",
    layout: "1PN + 1WC + ban công",
    image: "",
    price: "Từ 2,0 – 2,3 tỷ",
    note: "Diện tích lý tưởng cho người trẻ độc thân, hoặc đầu tư cho thuê chuyên gia.",
  },
  {
    id: "2pn",
    name: "Căn hộ 2 Phòng ngủ",
    area: "51 – 58 m²",
    layout: "2PN + 2WC + ban công",
    image: "/images/mat-bang-can.jpg",
    price: "Từ 2,5 – 2,8 tỷ",
    note: "Loại căn chủ đạo của dự án, tối ưu cho gia đình 3–4 thành viên.",
  },
  {
    id: "3pn",
    name: "Căn hộ 3 Phòng ngủ",
    area: "85 – 86 m²",
    layout: "3PN + 2WC + logia rộng",
    image: "",
    price: "Từ 3,4 – 3,8 tỷ",
    note: "Không gian rộng rãi, góc nhìn panorama cho gia đình đa thế hệ.",
  },
];

export const masterPlan = {
  image: "/images/mat-bang-2.jpg",
  facts: [
    { label: "Diện tích đất dự án", value: "Gần 30.000 m² toàn khu" },
    { label: "Bố trí phân block", value: "Tổ hợp block cao tầng, thông gió thông minh, xen hồ cảnh sinh thái" },
    { label: "Mô hình căn hộ", value: "Căn 1PN, 2PN và 3PN đầy đủ công năng" },
    { label: "Tiêu chuẩn bàn giao", value: "Hoàn thiện cơ bản: sàn gạch chống trượt, trần thạch cao, tủ bếp MDF, thiết bị vệ sinh cao cấp" },
  ],
};

// ——— NHÀ MẪU (gallery) ———
export const gallery = [
  { src: "/images/nha-mau-1.jpg", alt: "Phòng khách nhà mẫu Bcons Central Park" },
  { src: "/images/nha-mau-2.jpg", alt: "Phòng ăn nhà mẫu Bcons Central Park" },
  { src: "/images/nha-mau-3.jpg", alt: "Phòng bếp nhà mẫu Bcons Central Park" },
  { src: "/images/nha-mau-4.jpg", alt: "Phòng ngủ master nhà mẫu" },
  { src: "/images/nha-mau-5.jpg", alt: "Phòng ngủ nhà mẫu Bcons Central Park" },
  { src: "/images/nha-mau-6.jpg", alt: "Không gian căn hộ mẫu Bcons Central Park" },
  { src: "/images/nha-mau-7.jpg", alt: "Phòng đọc sách căn hộ mẫu" },
  { src: "/images/nha-mau-8.jpg", alt: "Phòng ngủ nhỏ căn hộ mẫu" },
  { src: "/images/nha-mau-9.jpg", alt: "Nội thất bàn giao căn hộ mẫu" },
];

// ——— BẢNG GIÁ ———
export const pricing = {
  headline: "Mức giá dự kiến chỉ từ 45 triệu/m²",
  note: "Giá bán chỉ mang tính tham khảo tại giai đoạn đầu động thổ dự án, có linh hoạt tăng giảm tùy vị trí tầng và hướng view. Liên hệ phòng kinh doanh để nhận bảng tính gốc và mức chiết khấu tốt nhất.",
  rows: [
    { type: "Căn hộ 1 phòng ngủ", area: "43 – 45 m²", price: "2,0 – 2,3 tỷ", monthly: "từ ~14 triệu/tháng" },
    { type: "Căn hộ 2 phòng ngủ", area: "51 – 58 m²", price: "2,5 – 2,8 tỷ", monthly: "từ ~17 triệu/tháng" },
    { type: "Căn hộ 3 phòng ngủ", area: "85 – 86 m²", price: "3,4 – 3,8 tỷ", monthly: "từ ~23 triệu/tháng" },
  ],
  bestSeller: "Căn hộ 2 phòng ngủ",
  policy: [
    "Hỗ trợ vay tới 70% – 80% giá trị hợp đồng từ 6 ngân hàng bảo trợ.",
    "Thời gian vay kéo dài tới 20 năm, ân hạn nợ gốc linh hoạt.",
    "Ân hạn nợ gốc cho tới khi nhận bàn giao căn hộ (gói OCB).",
    "Thanh toán theo tiến độ thi công, giãn đều áp lực tài chính.",
    "Chiết khấu ưu đãi cho khách hàng đặt chỗ giai đoạn đầu.",
  ],
};

// ——— TIẾN ĐỘ ———
export const progress = [
  { date: "27/05/2026", title: "Lễ động thổ", desc: "Dự án chính thức động thổ, bước vào giai đoạn ép cọc, thi công móng hầm.", done: true },
  { date: "Q3/2026", title: "Thi công phần ngầm", desc: "Ép cọc đại trà, thi công 2 tầng hầm để xe.", done: true },
  { date: "T10/2026", title: "Mở bán chính thức", desc: "Khai trương nhà mẫu và triển khai bán hàng giai đoạn 1.", done: false },
  { date: "Q4/2026", title: "Khởi công phần thân", desc: "Thi công kết cấu các block căn hộ cao 22 tầng.", done: false },
  { date: "Năm 2029", title: "Bàn giao căn hộ", desc: "Hoàn thiện cơ bản và bàn giao nhà cho khách hàng.", done: false },
];

export const progressImages = [
  { src: "/images/mat-bang-tong.jpg", alt: "Hiện trạng khu đất dự án 236 Phan Trung" },
  { src: "/images/tien-do.jpg", alt: "Tiến độ xây dựng Bcons Central Park" },
  { src: "/images/le-dong-tho-1.jpg", alt: "Lễ động thổ Bcons Central Park 27/05/2026" },
  { src: "/images/le-dong-tho-2.jpg", alt: "Toàn cảnh lễ động thổ Bcons Central Park" },
];

// ——— NGÂN HÀNG ———
export const banks = [
  { name: "MB Bank", role: "Thẩm định pháp lý chiến lược" },
  { name: "BIDV", role: "Cho vay ưu đãi tối đa" },
  { name: "Public Bank", role: "Lãi suất vay hấp dẫn" },
  { name: "TP Bank", role: "Giải ngân nhanh chóng" },
  { name: "OCB", role: "Ân hạn gốc tới khi bàn giao" },
  { name: "Nam A Bank", role: "Thủ tục vay đơn giản" },
];

// ——— PHÁP LÝ ———
export const legal = {
  intro:
    "Bcons Central Park được phát triển trên quỹ đất sạch, nguồn gốc minh bạch, do chủ đầu tư sở hữu thông qua hình thức đấu giá công khai theo quy định pháp luật.",
  image: "/images/phap-ly.png",
  points: [
    "Quỹ đất sạch có nguồn gốc từ đấu giá công khai theo quy định pháp luật.",
    "Không vướng đền bù, giải phóng mặt bằng hay tranh chấp dân sự.",
    "Thuận lợi trong xin giấy phép xây dựng và triển khai thi công.",
    "Nền tảng vững chắc để hoàn thiện thủ tục cấp sổ hồng cho cư dân.",
    "Chủ đầu tư Bcons Group với 20 dự án đã triển khai trước đó.",
    "Được 6 tổ chức tài chính thẩm định và bảo trợ cho vay.",
  ],
};

// ——— TÀI LIỆU TẢI VỀ (mở khoá sau khi điền form) ———
export const documents = [
  {
    name: "Bảng giá & giỏ hàng giai đoạn 1",
    type: "XLSX",
    icon: "📊",
    file: "/tai-lieu/bang-gia-bcons-central-park.pdf",
  },
  {
    name: "Chấp thuận chủ trương đầu tư",
    type: "PDF",
    icon: "📄",
    file: "/tai-lieu/chap-thuan-dau-tu.pdf",
  },
  {
    name: "Giấy phép xây dựng",
    type: "PDF",
    icon: "📄",
    file: "/tai-lieu/giay-phep-xay-dung.pdf",
  },
  {
    name: "Mặt bằng chi tiết các loại căn",
    type: "PDF",
    icon: "📐",
    file: "/tai-lieu/mat-bang-chi-tiet.pdf",
  },
];

// ——— TIN TỨC ———
export const news = [
  {
    title: "Lễ động thổ Bcons Central Park diễn ra ngày 27/05/2026",
    date: "27/05/2026",
    excerpt:
      "Sự kiện đánh dấu dự án căn hộ 236 Phan Trung chính thức bước vào giai đoạn ép cọc và thi công móng hầm.",
    image: "/images/le-dong-tho-1.jpg",
    href: "#tien-do",
  },
  {
    title: "Bcons Central Park — dự án thứ 21 của Bcons Group",
    date: "06/2026",
    excerpt:
      "Sau Bcons Center City và Bcons Eden Park, tập đoàn Bcons tiếp tục mở rộng sang thị trường Biên Hòa với tổng vốn 4.500 tỷ đồng.",
    image: "/images/tong-quan.jpg",
    href: "#tong-quan",
  },
  {
    title: "6 ngân hàng lớn cùng bảo trợ cho vay dự án",
    date: "06/2026",
    excerpt:
      "MB Bank, BIDV, Public Bank, TP Bank, OCB và Nam A Bank hỗ trợ vay tới 80% giá trị hợp đồng, thời hạn tới 20 năm.",
    image: "/images/ha-tang.jpg",
    href: "#bang-gia",
  },
];

// ——— FAQ (tốt cho SEO) ———
export const faqs = [
  {
    q: "Dự án Bcons Central Park nằm ở đâu?",
    a: "Dự án tọa lạc tại số 236 đường Phan Trung, phường Tam Hiệp, TP. Biên Hòa, tỉnh Đồng Nai — ngay lõi trung tâm đô thị, cách ga Biên Hòa khoảng 2 km.",
  },
  {
    q: "Bcons Central Park còn có tên gọi nào khác?",
    a: "Dự án còn được gọi là Bcons Tam Hiệp, Bcons Phan Trung hoặc Bcons Biên Hòa. Bcons Central Park là tên thương mại chính thức.",
  },
  {
    q: "Giá bán căn hộ Bcons Central Park bao nhiêu?",
    a: "Giá dự kiến từ 45 triệu/m². Căn 1PN từ 2,0 – 2,3 tỷ; căn 2PN từ 2,5 – 2,8 tỷ; căn 3PN từ 3,4 – 3,8 tỷ (đã gồm VAT).",
  },
  {
    q: "Dự án có bao nhiêu căn hộ và cao bao nhiêu tầng?",
    a: "Dự án có khoảng 2.820 căn hộ, quy mô 22 tầng nổi và 2 tầng hầm để xe, trên khu đất gần 3 ha.",
  },
  {
    q: "Khi nào Bcons Central Park bàn giao nhà?",
    a: "Dự án động thổ ngày 27/05/2026 và dự kiến bàn giao vào năm 2029, hoàn thiện cơ bản theo tiêu chuẩn Bcons.",
  },
  {
    q: "Mua căn hộ có được ngân hàng hỗ trợ vay không?",
    a: "Có. 6 ngân hàng gồm MB Bank, BIDV, Public Bank, TP Bank, OCB và Nam A Bank hỗ trợ vay tới 70–80% giá trị hợp đồng, thời hạn tới 20 năm, ân hạn nợ gốc linh hoạt.",
  },
];
