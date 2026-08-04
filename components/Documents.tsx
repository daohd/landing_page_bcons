"use client";

import { documents } from "@/data/site";
import LeadForm from "./LeadForm";
import Reveal from "./Reveal";
import { Section, SectionTitle } from "./ui";

function DownloadList() {
  return (
    <ul className="mt-5 space-y-2 text-left">
      {documents.map((d) => (
        <li key={d.file}>
          <a
            href={d.file}
            download
            className="flex items-center gap-3 rounded-xl border border-gold-500/40 bg-white px-4 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-500/10"
          >
            <span className="text-lg">{d.icon}</span>
            <span className="flex-1">{d.name}</span>
            <span className="text-xs font-bold text-gold-600">TẢI ↓</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Documents() {
  return (
    <Section id="tai-lieu" className="bg-navy-50">
      <SectionTitle
        eyebrow="Tài liệu dự án"
        title="Tải bảng giá & hồ sơ pháp lý"
        desc="Điền thông tin để mở khoá trọn bộ tài liệu: bảng giá giai đoạn 1, chấp thuận đầu tư, giấy phép xây dựng và mặt bằng chi tiết."
      />

      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <ul className="grid h-full gap-4 sm:grid-cols-2">
            {documents.map((d) => (
              <li
                key={d.file}
                className="group flex flex-col items-center justify-center rounded-2xl border border-navy-100 bg-white p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-lg"
              >
                <span className="text-4xl transition-transform duration-300 group-hover:scale-110">
                  {d.icon}
                </span>
                <span className="mt-4 text-sm leading-snug font-bold text-navy-900">{d.name}</span>
                <span className="mt-2 rounded-full bg-navy-50 px-3 py-1 text-[10px] font-bold tracking-wider text-navy-600">
                  {d.type} · 🔒 Cần đăng ký
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-2">
          <div className="rounded-2xl bg-navy-900 p-6 sm:p-7">
            <h3 className="text-lg font-bold text-white">Mở khoá tài liệu</h3>
            <p className="mt-1.5 mb-5 text-sm text-white/60">
              Chỉ cần họ tên và số điện thoại.
            </p>
            <LeadForm
              source="tai-tai-lieu"
              compact
              submitLabel="MỞ KHOÁ & TẢI VỀ"
              renderSuccess={DownloadList}
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
