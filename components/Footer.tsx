import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-800 pt-14 pb-28 lg:pb-14">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white">{site.name}</p>
          <p className="mt-1 text-sm text-gold-400">{site.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-white/60">{site.description}</p>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold tracking-wider text-white uppercase">Liên kết</p>
          <ul className="grid grid-cols-2 gap-2">
            {site.nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-sm text-white/60 hover:text-gold-400">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold tracking-wider text-white uppercase">Liên hệ</p>
          <ul className="space-y-2 text-sm text-white/60">
            <li>
              Hotline:{" "}
              <a
                href={`tel:${site.hotline.replace(/\s/g, "")}`}
                className="font-semibold text-gold-400"
              >
                {site.hotline}
              </a>
            </li>
            <li>
              Email:{" "}
              <a href={`mailto:${site.email}`} className="hover:text-gold-400">
                {site.email}
              </a>
            </li>
            <li>Địa chỉ: {site.address}</li>
            <li>
              <a href={site.facebook} target="_blank" rel="noopener" className="hover:text-gold-400">
                Fanpage Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-white/10 px-4 pt-6 sm:px-6">
        <p className="text-xs leading-relaxed text-white/40">
          © {new Date().getFullYear()} {site.name}. Website thuộc đơn vị phân phối chính thức. Hình
          ảnh và thông tin mang tính chất tham khảo, có thể thay đổi theo quyết định của chủ đầu tư.
        </p>
      </div>
    </footer>
  );
}
