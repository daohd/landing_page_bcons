import Image from "next/image";
import { banks, legal } from "@/data/site";
import Reveal from "./Reveal";
import { Section, SectionTitle } from "./ui";

export default function BanksLegal() {
  return (
    <Section id="phap-ly" className="bg-white">
      <SectionTitle
        eyebrow="Tài chính & Pháp lý"
        title="6 ngân hàng bảo trợ — pháp lý minh bạch"
        desc="Dự án được thẩm định và bảo trợ bởi 6 tổ chức tài chính hàng đầu, hỗ trợ vay tối đa 70–80% giá trị hợp đồng, thời hạn tới 20 năm."
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {banks.map((b, i) => (
          <Reveal key={b.name} delay={(i % 3) * 80}>
            <li className="flex h-full items-center gap-4 rounded-2xl border border-navy-100 bg-navy-50/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:bg-white hover:shadow-lg">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-900 text-base font-black text-gold-400">
                {b.name.slice(0, 2).toUpperCase()}
              </span>
              <span>
                <span className="block text-sm font-bold text-navy-900">{b.name}</span>
                <span className="block text-xs leading-snug text-neutral-500">{b.role}</span>
              </span>
            </li>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={100}>
        <div className="mt-14 grid gap-10 overflow-hidden rounded-3xl border border-gold-500/25 bg-linear-to-br from-gold-500/8 to-transparent p-7 sm:p-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h3 className="flex items-center gap-3 text-lg font-bold text-navy-900">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-500 text-navy-900">
                ⚖
              </span>
              Pháp lý dự án
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral-700">{legal.intro}</p>
            <ul className="mt-6 space-y-3">
              {legal.points.map((l) => (
                <li key={l} className="flex gap-3 text-sm leading-relaxed text-neutral-700">
                  <span className="mt-0.5 shrink-0 text-gold-600">✓</span>
                  {l}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-4/3 overflow-hidden rounded-2xl lg:col-span-2">
            <Image
              src={legal.image}
              alt="Lễ động thổ dự án Bcons Central Park"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
