import { news } from "@/data/site";
import Reveal from "./Reveal";
import { Section, SectionTitle } from "./ui";

export default function News() {
  return (
    <Section id="tin-tuc" className="bg-navy-50">
      <SectionTitle eyebrow="Tin tức" title="Tin tức & sự kiện dự án" />

      <ul className="grid gap-6 lg:grid-cols-3">
        {news.map((n, i) => (
          <Reveal key={n.title} delay={i * 90}>
            <li className="h-full">
              <a
                href={n.href}
                className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-xl"
              >
                <time className="text-xs font-bold tracking-[0.15em] text-gold-600 uppercase">
                  {n.date}
                </time>
                <h3 className="mt-2.5 text-base leading-snug font-bold text-navy-900 group-hover:text-navy-600">
                  {n.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">{n.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-navy-900">
                  Xem chi tiết
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </a>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
