import Image from "next/image";
import { amenities, amenityImages } from "@/data/site";
import Reveal from "./Reveal";
import { Section, SectionTitle } from "./ui";

export default function Amenities() {
  return (
    <Section id="tien-ich" className="bg-navy-50">
      <SectionTitle
        eyebrow="Tiện ích"
        title="Hệ sinh thái All-in-One"
        desc="Chuỗi tiện ích nội khu hiện đại và đồng bộ, đáp ứng đầy đủ nhu cầu sống, học tập, mua sắm và giải trí mà không cần rời khỏi khu phức hợp."
      />

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {amenities.map((a, i) => (
          <Reveal key={a.name} delay={(i % 3) * 90}>
            <li className="group relative h-full overflow-hidden rounded-2xl border border-navy-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-xl hover:shadow-navy-900/8">
              <span className="absolute top-5 right-6 text-5xl font-black text-navy-900/4 transition-colors group-hover:text-gold-500/10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 text-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-gold-500">
                {a.icon}
              </span>
              <h3 className="mt-5 text-base font-bold text-navy-900">{a.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{a.desc}</p>
            </li>
          </Reveal>
        ))}
      </ul>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {amenityImages.map((img, i) => (
          <Reveal key={img.src} delay={(i % 2) * 100}>
            <div className="relative aspect-16/10 overflow-hidden rounded-2xl">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
