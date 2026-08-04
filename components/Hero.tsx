import Image from "next/image";
import { hero, site } from "@/data/site";
import { CtaButton } from "./ui";

export default function Hero() {
  const tel = site.hotline.replace(/\s/g, "");

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={hero.image}
          alt={`Phối cảnh dự án ${site.name}`}
          fill
          priority
          sizes="100vw"
          className="ken-burns object-cover"
        />
      </div>

      {/* Lớp phủ: tối bên trái để chữ nổi, sáng dần sang phải */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/75 to-navy-950/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-28 pb-24 sm:px-6 lg:pt-32">
        <p className="reveal is-visible mb-6 inline-flex items-center gap-2.5 rounded-full border border-gold-500/40 bg-gold-500/10 py-2 pr-5 pl-3 text-[11px] font-bold tracking-[0.2em] text-gold-400 uppercase backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
          </span>
          {hero.eyebrow}
        </p>

        <h1
          className="reveal is-visible max-w-4xl text-[38px] leading-[1.05] font-extrabold tracking-tight text-white text-balance sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          {hero.title}
        </h1>

        <div
          className="reveal is-visible mt-6 flex items-start gap-4"
          style={{ animationDelay: "160ms" }}
        >
          <span className="mt-2 h-12 w-1 shrink-0 rounded-full bg-gold-500" />
          <p className="max-w-xl text-lg leading-relaxed text-white/80 lg:text-xl">
            {hero.subtitle}
          </p>
        </div>

        <div
          className="reveal is-visible mt-10 flex flex-wrap gap-3"
          style={{ animationDelay: "240ms" }}
        >
          <CtaButton href="#lien-he" shine>
            Đăng ký nhận bảng giá
          </CtaButton>
          <CtaButton href={`tel:${tel}`} variant="outline">
            📞 {site.hotline}
          </CtaButton>
        </div>

        <dl
          className="reveal is-visible mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md sm:grid-cols-4"
          style={{ animationDelay: "320ms" }}
        >
          {hero.highlights.map((h) => (
            <div
              key={h.label}
              className="bg-navy-950/60 px-4 py-6 text-center transition-colors hover:bg-navy-900/80"
            >
              <dt className="text-2xl font-extrabold tracking-tight text-gold-400 sm:text-[28px]">
                {h.value}
              </dt>
              <dd className="mt-1.5 text-[11px] leading-tight text-white/60 sm:text-xs">
                {h.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <a
        href="#tong-quan"
        aria-label="Cuộn xuống xem tổng quan"
        className="scroll-hint absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 lg:flex"
      >
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase">Cuộn xuống</span>
        <span className="grid h-9 w-9 place-items-center rounded-full border border-white/40 text-sm">
          ↓
        </span>
      </a>
    </section>
  );
}
