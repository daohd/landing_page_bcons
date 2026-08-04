import Image from "next/image";
import { progress } from "@/data/site";
import Reveal from "./Reveal";
import { Section, SectionTitle } from "./ui";

export default function Progress() {
  return (
    <Section id="tien-do" className="bg-navy-50">
      <SectionTitle
        eyebrow="Tiến độ"
        title="Tiến độ xây dựng"
        desc="Cập nhật tiến độ thi công thực tế theo từng mốc thời gian."
      />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <ol className="relative border-l-2 border-navy-100 pl-9">
          {progress.map((p, i) => (
            <Reveal key={p.date} delay={i * 80}>
              <li className="relative pb-9 last:pb-0">
                <span
                  className={`absolute top-1 -left-[46px] grid h-6 w-6 place-items-center rounded-full text-[11px] font-bold ring-4 ring-navy-50 ${
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

        <Reveal delay={120}>
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-xl shadow-navy-900/10">
            <Image
              src="/images/tien-do.svg"
              alt="Hình ảnh tiến độ thi công thực tế"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-navy-900/85 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
              Ảnh thực tế cập nhật {progress.filter((p) => p.done).at(-1)?.date}
            </span>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
