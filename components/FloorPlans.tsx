"use client";

import Image from "next/image";
import { useState } from "react";
import { floorPlans } from "@/data/site";
import { Section, SectionTitle, CtaButton } from "./ui";

export default function FloorPlans() {
  const [active, setActive] = useState(floorPlans[0].id);
  const plan = floorPlans.find((p) => p.id === active) ?? floorPlans[0];

  return (
    <Section id="mat-bang" className="bg-white">
      <SectionTitle
        eyebrow="Mặt bằng"
        title="Mặt bằng & loại căn hộ"
        desc="Chọn loại căn để xem mặt bằng chi tiết. Liên hệ để nhận file mặt bằng độ phân giải cao."
      />

      <div
        role="tablist"
        aria-label="Loại căn hộ"
        className="mb-8 flex flex-wrap justify-center gap-2"
      >
        {floorPlans.map((p) => (
          <button
            key={p.id}
            role="tab"
            type="button"
            aria-selected={p.id === active}
            onClick={() => setActive(p.id)}
            className={`rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 ${
              p.id === active
                ? "bg-navy-900 text-white shadow-lg shadow-navy-900/25"
                : "border border-navy-100 bg-white text-navy-900 hover:border-navy-900"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      <div className="grid items-center gap-8 rounded-3xl border border-navy-100 bg-navy-50 p-5 shadow-sm sm:p-9 lg:grid-cols-5">
        <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-white shadow-inner lg:col-span-3">
          <Image
            key={plan.id}
            src={plan.image}
            alt={`Mặt bằng ${plan.name}`}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-contain"
          />
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-xl font-bold text-navy-900 lg:text-2xl">{plan.name}</h3>
          <dl className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between border-b border-navy-100 pb-3">
              <dt className="text-neutral-500">Diện tích</dt>
              <dd className="font-semibold text-navy-900">{plan.area}</dd>
            </div>
            <div className="flex justify-between border-b border-navy-100 pb-3">
              <dt className="text-neutral-500">Bố trí</dt>
              <dd className="font-semibold text-navy-900">{plan.layout}</dd>
            </div>
          </dl>
          <p className="mt-5 text-sm leading-relaxed text-neutral-600">{plan.note}</p>
          <CtaButton href="#lien-he" className="mt-6 w-full sm:w-auto">
            Nhận mặt bằng chi tiết
          </CtaButton>
        </div>
      </div>
    </Section>
  );
}
