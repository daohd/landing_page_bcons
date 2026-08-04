import { banks, legal } from "@/data/site";
import Reveal from "./Reveal";
import { Section, SectionTitle } from "./ui";

export default function BanksLegal() {
  return (
    <Section className="bg-white">
      <SectionTitle
        eyebrow="Tài chính & Pháp lý"
        title="Ngân hàng hỗ trợ & hồ sơ pháp lý"
        desc="Dự án được các ngân hàng lớn bảo lãnh và tài trợ vốn, pháp lý hoàn thiện minh bạch."
      />

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {banks.map((b, i) => (
          <Reveal key={b} delay={(i % 4) * 70}>
            <li className="flex h-24 items-center justify-center gap-3 rounded-2xl border border-navy-100 bg-navy-50/60 px-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:bg-white hover:shadow-lg">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy-900 text-sm font-black text-gold-400">
                {b.slice(0, 1)}
              </span>
              <span className="text-sm leading-tight font-bold text-navy-900">{b}</span>
            </li>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={100}>
        <div className="mt-14 overflow-hidden rounded-3xl border border-gold-500/25 bg-gradient-to-br from-gold-500/8 to-transparent p-7 sm:p-10">
          <h3 className="flex items-center gap-3 text-lg font-bold text-navy-900">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gold-500 text-navy-900">
              ⚖
            </span>
            Hồ sơ pháp lý minh bạch
          </h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {legal.map((l) => (
              <li key={l} className="flex gap-3 text-sm leading-relaxed text-neutral-700">
                <span className="mt-0.5 shrink-0 text-gold-600">📄</span>
                {l}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
