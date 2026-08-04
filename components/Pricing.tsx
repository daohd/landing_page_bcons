import { pricing } from "@/data/site";
import Reveal from "./Reveal";
import { Section, SectionTitle, CtaButton } from "./ui";

export default function Pricing() {
  return (
    <Section id="bang-gia" className="bg-white">
      <SectionTitle
        eyebrow="Bảng giá"
        title="Giá bán & phương thức thanh toán"
        desc="Đăng ký để nhận bảng giá chi tiết từng căn kèm giỏ hàng còn trống và mức chiết khấu tốt nhất."
      />

      <Reveal>
        <p className="mb-6 text-center text-lg font-extrabold tracking-tight text-navy-900 sm:text-2xl">
          <span className="rounded-full bg-gold-500/12 px-6 py-2.5 text-gold-600">
            {pricing.headline}
          </span>
        </p>
      </Reveal>

      <Reveal delay={80}>
        <div className="overflow-x-auto rounded-2xl border border-navy-100 shadow-sm">
          <table className="w-full min-w-155 text-sm">
            <thead className="bg-navy-900 text-white">
              <tr>
                {["Loại sản phẩm", "Diện tích", "Giá bán (gồm VAT)", "Trả góp ước tính"].map((h) => (
                  <th key={h} className="px-6 py-4 text-left text-xs font-bold tracking-wider uppercase">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-100">
              {pricing.rows.map((r, i) => {
                const best = r.type === pricing.bestSeller;
                return (
                  <tr
                    key={r.type}
                    className={
                      best ? "bg-gold-500/8" : i % 2 ? "bg-navy-50/60" : "bg-white"
                    }
                  >
                    <td className="px-6 py-5 font-bold text-navy-900">
                      {r.type}
                      {best && (
                        <span className="ml-2 rounded-full bg-gold-500 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-navy-900 uppercase">
                          Chủ đạo
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
      <p className="mt-3 text-center text-[11px] font-medium text-neutral-400 sm:hidden">
        ← Vuốt ngang để xem đầy đủ bảng →
      </p>
      <p className="mt-3 text-xs leading-relaxed text-neutral-500">{pricing.note}</p>

      <Reveal delay={100}>
        <div className="relative mt-12 grid gap-10 overflow-hidden rounded-3xl bg-navy-900 p-7 sm:p-11 lg:grid-cols-3">
          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />

          <div className="relative lg:col-span-2">
            <h3 className="text-xl font-bold text-white lg:text-2xl">
              Chính sách thanh toán & hỗ trợ vay
            </h3>
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
              Nhận file bảng giá đầy đủ & giỏ hàng mới nhất
            </p>
            <CtaButton href="#tai-lieu" className="mt-5 w-full">
              Tải bảng giá
            </CtaButton>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
