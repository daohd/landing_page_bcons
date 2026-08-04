import Image from "next/image";
import { overview, site } from "@/data/site";
import Reveal from "./Reveal";
import { Section, SectionTitle } from "./ui";

export default function Overview() {
  return (
    <Section id="tong-quan" className="bg-white">
      <SectionTitle
        eyebrow="Giới thiệu"
        title={`Tổng quan dự án ${site.name}`}
        desc={overview.intro}
      />

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            {/* khung vàng lệch phía sau tạo chiều sâu */}
            <div className="absolute -inset-4 -z-10 hidden rounded-2xl border-2 border-gold-500/40 lg:block" />
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-2xl shadow-navy-900/20">
              <Image
                src={overview.image}
                alt={`Phối cảnh ${site.name}`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <dl className="overflow-hidden rounded-2xl border border-navy-100 shadow-sm">
            {overview.facts.map((f, i) => (
              <div
                key={f.label}
                className={`grid grid-cols-5 gap-4 px-5 py-3.5 text-sm transition-colors hover:bg-gold-500/5 sm:px-6 ${
                  i % 2 ? "bg-navy-50/70" : "bg-white"
                }`}
              >
                <dt className="col-span-2 text-neutral-500">{f.label}</dt>
                <dd className="col-span-3 font-semibold text-navy-900">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {overview.videoId && (
        <Reveal>
          <div className="mt-16 aspect-video overflow-hidden rounded-2xl shadow-2xl">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${overview.videoId}`}
              title={`Video giới thiệu ${site.name}`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Reveal>
      )}
    </Section>
  );
}
