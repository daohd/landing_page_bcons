import Image from "next/image";
import { location, site } from "@/data/site";
import Reveal from "./Reveal";
import { Section, SectionTitle } from "./ui";

export default function Location() {
  return (
    <Section id="vi-tri" className="relative overflow-hidden bg-navy-900">
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />

      <SectionTitle light eyebrow="Vị trí" title="Vị trí kết nối vàng" desc={location.intro} />

      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white">
          <Image
            src={location.image}
            alt={`Bản đồ liên kết vùng ${site.name}`}
            width={1536}
            height={1024}
            sizes="(min-width: 1024px) 1100px, 100vw"
            className="h-auto w-full"
          />
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {location.groups.map((g, i) => (
          <Reveal key={g.name} delay={(i % 2) * 100}>
            <div className="h-full rounded-2xl border border-white/12 bg-white/4 p-6">
              <h3 className="flex items-center gap-3 text-sm font-bold tracking-wider text-white uppercase">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-500/15 text-lg">
                  {g.icon}
                </span>
                {g.name}
              </h3>
              <ul className="mt-4 divide-y divide-white/8">
                {g.items.map((it) => (
                  <li key={it.place} className="flex items-center justify-between gap-4 py-2.5">
                    <span className="text-sm text-white/75">{it.place}</span>
                    <span className="shrink-0 text-sm font-bold text-gold-400">{it.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/15">
          <iframe
            className="aspect-video w-full sm:aspect-21/9"
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
