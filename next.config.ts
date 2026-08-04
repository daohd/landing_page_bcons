import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Cho phép tối ưu ảnh SVG placeholder (chỉ ảnh nội bộ trong /public).
    // Khi đã thay hết bằng ảnh .jpg/.webp thật thì có thể bỏ dòng này.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    formats: ["image/webp"],
  },
  poweredByHeader: false,
};

export default nextConfig;
