import Image from "next/image";
import { progress, progressImages } from "@/data/site";
import Reveal from "./Reveal";
import { Section, SectionTitle } from "./ui";

export default function Progress() {
  return (
    <Section id="tien-do" className="bg-navy-50">
      <SectionTitle
        eyebrow="Tiến độ"
        title="Tiến độ triển khai dự án"
        desc="Dự án chính thức động thổ ngày 27/05/2026, bước vào giai đoạn ép cọc và thi công móng hầm."
      />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <ol className="relative border-l-2 border-navy-100 pl-9">
          {progress.map((p, i) => (
            <Reveal key={p.date} delay={i * 80}>
              <li className="relative pb-9 last:pb-0">
                <span
                  className={`absolute top-1 -left-11.5 grid h-6 w-6 place-items-center rounded-full text-[11px] font-bold ring-4 ring-navy-50 ${
                    p.done
                      ? "bg-gold-500 text-navy-900"
                      : "border-2 border-navy-200 bg-white text-transparent"
                  }`}
                >
                  ✓
                </span>
                <p className="text-xs font-bold tracking-[0.15em] text-gold-600 uppercase">
                  {p.date}
                </p>
                <h3 className="mt-1.5 text-base font-bold text-navy-900">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{p.desc}</p>
                {!p.done && (
                  <span className="mt-2 inline-block rounded-full bg-navy-100 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-navy-600 uppercase">
                    Dự kiến
                  </span>
                )}
              </li>
            </Reveal>
          ))}
        </ol>

        <div className="space-y-4">
          {progressImages.map((img, i) => (
            <Reveal key={img.src} delay={i * 90}>
              <div className="relative aspect-16/10 overflow-hidden rounded-2xl shadow-lg shadow-navy-900/10">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
