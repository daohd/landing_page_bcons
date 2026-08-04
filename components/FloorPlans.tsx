"use client";

import Image from "next/image";
import { useState } from "react";
import { floorPlans, masterPlan } from "@/data/site";
import Reveal from "./Reveal";
import { Section, SectionTitle, CtaButton } from "./ui";

export default function FloorPlans() {
  const [active, setActive] = useState(floorPlans[1].id);
  const plan = floorPlans.find((p) => p.id === active) ?? floorPlans[0];

  return (
    <Section id="mat-bang" className="bg-white">
      <SectionTitle
        eyebrow="Mặt bằng"
        title="Mặt bằng & thiết kế căn hộ"
        desc="Thiết kế tối ưu theo phong cách châu Âu đương đại: ban công đón gió, các phòng ngủ đều có cửa sổ riêng, 100% căn hộ lấy sáng tự nhiên."
      />

      <Reveal>
        <div className="grid items-center gap-8 rounded-3xl border border-navy-100 bg-navy-50 p-5 sm:p-8 lg:grid-cols-5">
          <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-white lg:col-span-3">
            <Image
              src={masterPlan.image}
              alt="Mặt bằng tổng thể dự án"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
          <dl className="space-y-4 lg:col-span-2">
            <h3 className="text-lg font-bold text-navy-900">Mặt bằng tổng thể</h3>
            {masterPlan.facts.map((f) => (
              <div key={f.label} className="border-b border-navy-100 pb-3 last:border-0">
                <dt className="text-xs font-semibold tracking-wider text-gold-600 uppercase">
                  {f.label}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-neutral-700">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>

      <div
        role="tablist"
        aria-label="Loại căn hộ"
        className="mt-14 mb-8 flex flex-wrap justify-center gap-2.5"
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
        <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-white lg:col-span-3">
          {plan.image ? (
            <Image
              key={plan.id}
              src={plan.image}
              alt={`Mặt bằng ${plan.name}`}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-contain"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
              <span className="text-5xl">📐</span>
              <p className="text-base font-bold text-navy-900">
                Mặt bằng {plan.name.toLowerCase()}
              </p>
              <p className="max-w-xs text-sm leading-relaxed text-neutral-500">
                File mặt bằng chi tiết đang được chủ đầu tư cập nhật. Để lại thông tin để nhận ngay
                khi có.
              </p>
              <a
                href="#tai-lieu"
                className="mt-2 rounded-full bg-navy-900 px-6 py-3 text-xs font-bold tracking-wide text-white uppercase transition-colors hover:bg-navy-700"
              >
                Nhận mặt bằng
              </a>
            </div>
          )}
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-xl font-bold text-navy-900 lg:text-2xl">{plan.name}</h3>
          <p className="mt-2 text-2xl font-extrabold text-gold-600">{plan.price}</p>
          <dl className="mt-6 space-y-3 text-sm">
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
          <CtaButton href="#tai-lieu" className="mt-7 w-full sm:w-auto">
            Nhận mặt bằng chi tiết
          </CtaButton>
        </div>
      </div>
    </Section>
  );
}
