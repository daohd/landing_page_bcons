import { pricing } from "@/data/site";
import Reveal from "./Reveal";
import { Section, SectionTitle, CtaButton } from "./ui";

// Loại căn muốn làm nổi bật trong bảng giá
const BEST_SELLER = "2PN + 2WC";

export default function Pricing() {
  return (
    <Section id="bang-gia" className="bg-white">
      <SectionTitle
        eyebrow="Bảng giá"
        title="Bảng giá & chính sách bán hàng"
        desc="Giá bán dự kiến theo từng loại căn. Đăng ký để nhận bảng giá chi tiết từng căn kèm giỏ hàng còn trống."
      />

      <Reveal>
        <div className="overflow-x-auto rounded-2xl border border-navy-100 shadow-sm">
          <table className="w-full min-w-[620px] text-sm">
            <thead className="bg-navy-900 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold tracking-wider uppercase">
                  Loại căn
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold tracking-wider uppercase">
                  Diện tích
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold tracking-wider uppercase">
                  Giá bán (đã VAT)
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold tracking-wider uppercase">
                  Trả góp ước tính
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-100">
              {pricing.rows.map((r, i) => {
                const best = r.type === BEST_SELLER;
                return (
                  <tr
                    key={r.type}
                    className={
                      best
                        ? "bg-gold-500/8 ring-1 ring-gold-500/30 ring-inset"
                        : i % 2
                          ? "bg-navy-50/60"
                          : "bg-white"
                    }
                  >
                    <td className="px-6 py-5 font-bold text-navy-900">
                      {r.type}
                      {best && (
                        <span className="ml-2 rounded-full bg-gold-500 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-navy-900 uppercase">
                          Bán chạy
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-5 text-neutral-600">{r.area}</td>
                    <td className="px-6 py-5 text-base font-extrabold text-gold-600">{r.price}</td>
                    <td className="px-6 py-5 text-neutral-600">{r.monthly}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Reveal>
      <p className="mt-3 text-xs leading-relaxed text-neutral-500">{pricing.note}</p>

      <Reveal delay={100}>
        <div className="relative mt-12 grid gap-10 overflow-hidden rounded-3xl bg-navy-900 p-7 sm:p-11 lg:grid-cols-3">
          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />

          <div className="relative lg:col-span-2">
            <h3 className="text-xl font-bold text-white lg:text-2xl">Chính sách thanh toán</h3>
            <ul className="mt-6 space-y-4">
              {pricing.policy.map((p) => (
                <li key={p} className="flex gap-3.5 text-sm leading-relaxed text-white/80">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-500 text-[11px] font-bold text-navy-900">
                    ✓
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex flex-col justify-center rounded-2xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur-sm">
            <p className="text-3xl">📄</p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Nhận file bảng giá đầy đủ & giỏ hàng mới nhất (PDF)
            </p>
            <CtaButton href="#lien-he" className="mt-5 w-full">
              Tải bảng giá
            </CtaButton>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
