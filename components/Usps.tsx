import { usps } from "@/data/site";
import Reveal from "./Reveal";

export default function Usps() {
  return (
    <section className="relative z-10 -mt-px bg-navy-950">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <ul className="grid gap-px overflow-hidden border-x border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((u, i) => (
            <Reveal key={u.title} delay={i * 80} className="bg-navy-950">
              <li className="group h-full px-6 py-8 transition-colors hover:bg-navy-900">
                <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-gold-500/12 text-xl transition-colors group-hover:bg-gold-500/25">
                  {u.icon}
                </span>
                <h3 className="mt-4 text-sm font-bold text-white">{u.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/55">{u.desc}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
