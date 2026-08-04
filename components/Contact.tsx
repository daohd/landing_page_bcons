import { site, faqs } from "@/data/site";
import LeadForm from "./LeadForm";
import { Section, SectionTitle } from "./ui";

export default function Contact() {
  return (
    <Section id="lien-he" className="bg-navy-900">
      <SectionTitle
        light
        eyebrow="Liên hệ"
        title="Đăng ký nhận bảng giá & giữ chỗ"
        desc="Để lại thông tin, chuyên viên dự án sẽ gọi lại trong 15 phút để tư vấn miễn phí."
      />

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8">
          <LeadForm />
        </div>

        <div>
          <ul className="space-y-4">
            <li className="flex gap-4 rounded-xl border border-white/15 bg-white/5 p-5">
              <span className="text-2xl">📞</span>
              <div>
                <p className="text-xs tracking-wider text-white/50 uppercase">Hotline</p>
                <a
                  href={`tel:${site.hotline.replace(/\s/g, "")}`}
                  className="text-lg font-bold text-gold-400"
                >
                  {site.hotline}
                </a>
              </div>
            </li>
            <li className="flex gap-4 rounded-xl border border-white/15 bg-white/5 p-5">
              <span className="text-2xl">📍</span>
              <div>
                <p className="text-xs tracking-wider text-white/50 uppercase">Địa chỉ dự án</p>
                <p className="text-sm text-white/85">{site.address}</p>
              </div>
            </li>
            <li className="flex gap-4 rounded-xl border border-white/15 bg-white/5 p-5">
              <span className="text-2xl">✉️</span>
              <div>
                <p className="text-xs tracking-wider text-white/50 uppercase">Email</p>
                <a href={`mailto:${site.email}`} className="text-sm text-white/85">
                  {site.email}
                </a>
              </div>
            </li>
          </ul>

          <h3 className="mt-10 mb-4 text-lg font-bold text-white">Câu hỏi thường gặp</h3>
          <div className="space-y-2">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-white/15 bg-white/5 px-5 py-4"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-white marker:hidden">
                  <span className="mr-2 text-gold-400 group-open:hidden">+</span>
                  <span className="mr-2 hidden text-gold-400 group-open:inline">−</span>
                  {f.q}
                </summary>
                <p className="mt-3 pl-5 text-sm leading-relaxed text-white/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
