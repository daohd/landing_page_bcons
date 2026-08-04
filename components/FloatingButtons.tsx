"use client";

import { site } from "@/data/site";

const tel = site.hotline.replace(/\s/g, "");

export default function FloatingButtons() {
  return (
    <>
      {/* Desktop: nút tròn nổi bên phải */}
      <div className="fixed right-4 bottom-6 z-40 hidden flex-col gap-3 lg:flex">
        <a
          href={`tel:${tel}`}
          aria-label="Gọi hotline"
          className="grid h-14 w-14 place-items-center rounded-full bg-red-600 text-2xl text-white shadow-xl transition-transform hover:scale-110"
        >
          📞
        </a>
        <a
          href={`https://zalo.me/${site.zalo}`}
          target="_blank"
          rel="noopener"
          aria-label="Chat Zalo"
          className="grid h-14 w-14 place-items-center rounded-full bg-[#0068ff] text-sm font-bold text-white shadow-xl transition-transform hover:scale-110"
        >
          Zalo
        </a>
        <a
          href={site.facebook}
          target="_blank"
          rel="noopener"
          aria-label="Nhắn tin Facebook"
          className="grid h-14 w-14 place-items-center rounded-full bg-[#0866ff] text-xl font-bold text-white shadow-xl transition-transform hover:scale-110"
        >
          f
        </a>
      </div>

      {/* Mobile: thanh hành động dính đáy màn hình */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-navy-900/95 backdrop-blur lg:hidden">
        <a href={`tel:${tel}`} className="py-3 text-center text-xs font-semibold text-white">
          <span className="block text-lg">📞</span>Gọi ngay
        </a>
        <a
          href={`https://zalo.me/${site.zalo}`}
          target="_blank"
          rel="noopener"
          className="border-x border-white/10 py-3 text-center text-xs font-semibold text-white"
        >
          <span className="block text-lg">💬</span>Chat Zalo
        </a>
        <a href="#lien-he" className="bg-gold-500 py-3 text-center text-xs font-bold text-navy-900">
          <span className="block text-lg">📝</span>Nhận bảng giá
        </a>
      </div>
    </>
  );
}
