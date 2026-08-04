import { ImageResponse } from "next/og";
import { hero, site } from "@/data/site";

// Ảnh hiển thị khi chia sẻ link lên Facebook / Zalo
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.tagline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0b1f3a 0%, #14335c 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 26, color: "#dcb94a", letterSpacing: 4 }}>
          {hero.eyebrow.toUpperCase()}
        </div>
        <div style={{ fontSize: 76, fontWeight: 800, marginTop: 16 }}>{site.name}</div>
        <div style={{ fontSize: 34, color: "rgba(255,255,255,0.78)", marginTop: 16 }}>
          {hero.subtitle}
        </div>
        <div
          style={{
            display: "flex",
            gap: 48,
            marginTop: 56,
            fontSize: 30,
            color: "#dcb94a",
            fontWeight: 700,
          }}
        >
          {hero.highlights.slice(0, 3).map((h) => (
            <div key={h.label} style={{ display: "flex" }}>
              {h.value} · {h.label}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
