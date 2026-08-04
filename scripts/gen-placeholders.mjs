/**
 * Tạo ảnh placeholder (SVG) cho đến khi có ảnh thật.
 * Chạy: node scripts/gen-placeholders.mjs
 * Khi có ảnh thật: bỏ file .jpg/.webp vào public/images và sửa đường dẫn trong data/site.ts
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "public", "images");
mkdirSync(outDir, { recursive: true });

const files = [
  ["hero", 1920, 1080, "PHỐI CẢNH TỔNG THỂ", "#0b1f3a", "#14335c"],
  ["tong-quan", 1200, 900, "PHỐI CẢNH DỰ ÁN", "#0e2643", "#1d4470"],
  ["vi-tri", 1400, 900, "BẢN ĐỒ VỊ TRÍ", "#123055", "#2a5586"],
  ["mat-bang-tong", 1400, 1000, "MẶT BẰNG TỔNG THỂ", "#101f33", "#26456b"],
  ["mat-bang-1pn", 1200, 900, "MẶT BẰNG CĂN 1PN", "#12263f", "#2b4d75"],
  ["mat-bang-2pn", 1200, 900, "MẶT BẰNG CĂN 2PN", "#12263f", "#2b4d75"],
  ["mat-bang-3pn", 1200, 900, "MẶT BẰNG CĂN 3PN", "#12263f", "#2b4d75"],
  ["mat-bang-shophouse", 1200, 900, "MẶT BẰNG SHOPHOUSE", "#12263f", "#2b4d75"],
  ["nha-mau-1", 1200, 900, "PHÒNG KHÁCH", "#1a2a3d", "#3c5a7a"],
  ["nha-mau-2", 1200, 900, "PHÒNG BẾP", "#1a2a3d", "#3c5a7a"],
  ["nha-mau-3", 1200, 900, "PHÒNG NGỦ MASTER", "#1a2a3d", "#3c5a7a"],
  ["nha-mau-4", 1200, 900, "PHÒNG NGỦ 2", "#1a2a3d", "#3c5a7a"],
  ["nha-mau-5", 1200, 900, "PHÒNG TẮM", "#1a2a3d", "#3c5a7a"],
  ["nha-mau-6", 1200, 900, "BAN CÔNG", "#1a2a3d", "#3c5a7a"],
  ["tien-do", 1400, 900, "ẢNH TIẾN ĐỘ THI CÔNG", "#20303f", "#44637f"],
];

for (const [name, w, h, label, c1, c2] of files) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <g fill="none" stroke="#ffffff" stroke-opacity="0.07" stroke-width="2">
    ${Array.from({ length: 12 }, (_, i) => `<line x1="${(w / 12) * i}" y1="0" x2="${(w / 12) * i + h}" y2="${h}"/>`).join("\n    ")}
  </g>
  <text x="50%" y="49%" text-anchor="middle" font-family="Arial, Helvetica, sans-serif"
        font-size="${Math.round(w / 26)}" font-weight="bold" fill="#c9a227" letter-spacing="2">${label}</text>
  <text x="50%" y="57%" text-anchor="middle" font-family="Arial, Helvetica, sans-serif"
        font-size="${Math.round(w / 55)}" fill="#ffffff" fill-opacity="0.55">ẢNH MINH HOẠ — THAY BẰNG ẢNH THẬT (${w}×${h})</text>
</svg>`;
  writeFileSync(join(outDir, `${name}.svg`), svg, "utf8");
}

console.log(`Đã tạo ${files.length} ảnh placeholder trong public/images/`);
