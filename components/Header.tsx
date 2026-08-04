"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || open
          ? "bg-navy-900/95 shadow-lg backdrop-blur"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:h-20">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/images/logo-bcons.png"
            alt="Logo Bcons Group"
            width={96}
            height={52}
            priority
            className="h-11 w-auto brightness-0 invert lg:h-12"
          />
          <span className="hidden border-l border-white/25 pl-3 text-[11px] leading-tight font-bold tracking-[0.2em] text-gold-400 sm:block">
            CENTRAL
            <span className="block">PARK</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/85 transition-colors hover:text-gold-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.hotline.replace(/\s/g, "")}`}
            className="hidden rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-400 sm:inline-block"
          >
            📞 {site.hotline}
          </a>
          <button
            type="button"
            aria-label="Mở menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md text-white lg:hidden"
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-navy-900 lg:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/5 py-3 text-sm font-medium text-white/85"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href={`tel:${site.hotline.replace(/\s/g, "")}`}
                className="block rounded-full bg-gold-500 py-3 text-center text-sm font-semibold text-navy-900"
              >
                📞 Gọi {site.hotline}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
