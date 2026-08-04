"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { gallery } from "@/data/site";
import { Section, SectionTitle } from "./ui";

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const move = useCallback(
    (step: number) => setIndex((i) => (i === null ? i : (i + step + gallery.length) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, move]);

  return (
    <Section id="nha-mau" className="bg-navy-50">
      <SectionTitle
        eyebrow="Nhà mẫu"
        title="Hình ảnh nhà mẫu"
        desc="Không gian sống thực tế được bàn giao hoàn thiện cơ bản. Bấm vào ảnh để xem lớn."
      />

      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {gallery.map((g, i) => (
          <li key={g.src}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block aspect-4/3 w-full overflow-hidden rounded-xl"
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2.5 text-left text-xs font-medium text-white sm:text-sm">
                {g.alt}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={gallery[index].alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Đóng"
            onClick={close}
            className="absolute top-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-2xl text-white"
          >
            ×
          </button>
          <button
            type="button"
            aria-label="Ảnh trước"
            onClick={(e) => {
              e.stopPropagation();
              move(-1);
            }}
            className="absolute left-3 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-2xl text-white"
          >
            ‹
          </button>
          <div className="relative h-[75svh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={gallery[index].src}
              alt={gallery[index].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <button
            type="button"
            aria-label="Ảnh sau"
            onClick={(e) => {
              e.stopPropagation();
              move(1);
            }}
            className="absolute right-3 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-2xl text-white"
          >
            ›
          </button>
          <p className="absolute bottom-6 w-full text-center text-sm text-white/80">
            {gallery[index].alt} — {index + 1}/{gallery.length}
          </p>
        </div>
      )}
    </Section>
  );
}
