import type { ReactNode } from "react";
import Reveal from "./Reveal";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 lg:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  desc,
  light = false,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  light?: boolean;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <Reveal
      className={`mb-12 lg:mb-16 ${centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}`}
    >
      {eyebrow && (
        <p
          className={`mb-3 flex items-center gap-3 text-[11px] font-bold tracking-[0.28em] text-gold-500 uppercase ${
            centered ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-8 bg-gold-500/60" />
          {eyebrow}
          {centered && <span className="h-px w-8 bg-gold-500/60" />}
        </p>
      )}
      <h2
        className={`text-[26px] leading-[1.15] font-extrabold tracking-tight text-balance sm:text-4xl lg:text-[42px] ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p
          className={`mt-5 text-[15px] leading-relaxed text-pretty sm:text-base ${
            light ? "text-white/65" : "text-neutral-600"
          }`}
        >
          {desc}
        </p>
      )}
    </Reveal>
  );
}

export function CtaButton({
  href,
  children,
  variant = "gold",
  className = "",
  shine = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "gold" | "outline" | "navy" | "ghost";
  className?: string;
  shine?: boolean;
}) {
  const styles = {
    gold: "bg-gold-500 text-navy-900 shadow-lg shadow-gold-500/25 hover:bg-gold-400 hover:shadow-gold-500/40",
    navy: "bg-navy-900 text-white shadow-lg shadow-navy-900/20 hover:bg-navy-700",
    outline: "border border-white/40 text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-navy-900",
    ghost: "border border-navy-200 text-navy-900 hover:border-navy-900 hover:bg-navy-50",
  }[variant];

  return (
    <a
      href={href}
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 text-[13px] font-bold tracking-wide uppercase transition-all duration-300 hover:-translate-y-0.5 ${styles} ${
        shine ? "btn-shine" : ""
      } ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </a>
  );
}
