"use client";

import { useEffect, useState } from "react";
import LeadForm from "./LeadForm";

const DELAY_MS = 15_000; // hiện popup sau 15 giây kể từ khi mở trang
const RETRY_MS = 15_000; // nếu lúc đó khách đang ở form thì 15 giây sau thử lại
const STORAGE_KEY = "lead-popup-seen";

export default function LeadPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    // Đang nhìn thẳng vào form thì đừng chen ngang
    const formInView = () =>
      ["lien-he", "tai-lieu"].some((id) => {
        const rect = document.getElementById(id)?.getBoundingClientRect();
        return rect && rect.top < window.innerHeight && rect.bottom > 0;
      });

    const show = () => {
      // Khách đã gửi thông tin rồi thì thôi
      if (sessionStorage.getItem("lead-sent")) return cleanup();
      // Đang ở ngay form thì chờ lượt kiểm tra sau, đừng chen ngang
      if (formInView()) return;
      setOpen(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
      cleanup();
    };

    // Thử lần đầu sau DELAY_MS. Nếu lúc đó khách đang ở ngay form thì
    // cứ 15 giây thử lại, chờ khi khách rời khỏi form mới hiện.
    let retry = 0;
    const timer = window.setTimeout(() => {
      show();
      retry = window.setInterval(show, RETRY_MS);
    }, DELAY_MS);

    // Hiện luôn khi người dùng có ý định rời trang (di chuột lên thanh địa chỉ)
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) show();
    };
    document.addEventListener("mouseout", onLeave);

    function cleanup() {
      window.clearTimeout(timer);
      window.clearInterval(retry);
      document.removeEventListener("mouseout", onLeave);
    }
    return cleanup;
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
      className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto bg-black/70 p-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative my-8 w-full max-w-md rounded-2xl bg-navy-900 p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Đóng"
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-xl text-white"
        >
          ×
        </button>
        <p className="text-xs font-semibold tracking-[0.2em] text-gold-500 uppercase">
          Ưu đãi có giới hạn
        </p>
        <h2 id="popup-title" className="mt-2 text-xl font-bold text-white">
          Nhận bảng giá & giỏ hàng mới nhất
        </h2>
        <p className="mt-2 mb-5 text-sm text-white/70">
          Để lại số điện thoại, chuyên viên gọi lại trong 15 phút tư vấn miễn phí.
        </p>
        <LeadForm source="popup" compact submitLabel="NHẬN BẢNG GIÁ NGAY" />
      </div>
    </div>
  );
}
