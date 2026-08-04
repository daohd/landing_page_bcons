import Image from "next/image";
import { location, site } from "@/data/site";
import Reveal from "./Reveal";
import { Section, SectionTitle } from "./ui";

export default function Location() {
  return (
    <Section id="vi-tri" className="relative overflow-hidden bg-navy-900">
      {/* vệt sáng nhẹ ở nền cho đỡ phẳng */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />

      <SectionTitle light eyebrow="Vị trí" title="Vị trí kết nối vàng" desc={location.intro} />

      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/vi-tri.svg"
              alt={`Bản đồ vị trí ${site.name}`}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-2">
          <ul className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/15 bg-white/4">
            {location.distances.map((d) => (
              <li
                key={d.place}
                className="flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-white/6"
              >
                <span className="flex items-center gap-3 text-sm text-white/85">
                  <span className="text-gold-500">◆</span>
                  {d.place}
                </span>
                <span className="shrink-0 text-right">
                  <span className="block text-sm font-bold text-gold-400">{d.time}</span>
                  <span className="block text-[11px] text-white/45">{d.km}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal>
        <div className="mt-8 aspect-video overflow-hidden rounded-2xl border border-white/15 sm:aspect-21/9">
          <iframe
            className="h-full w-full"
            src={site.mapEmbed}
            title={`Bản đồ Google Maps ${site.name}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Reveal>
    </Section>
  );
}
