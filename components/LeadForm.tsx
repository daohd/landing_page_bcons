"use client";

import { useState } from "react";
import { floorPlans } from "@/data/site";

type Status = "idle" | "sending" | "ok" | "error";

export default function LeadForm({ source = "form-lien-he" }: { source?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    if (!data.name?.trim()) return setError("Vui lòng nhập họ tên.");
    if (!/^(0|\+84)\d{8,10}$/.test(data.phone?.replace(/[\s.]/g, "") ?? ""))
      return setError("Số điện thoại chưa đúng định dạng.");

    setError("");
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source, page: window.location.href }),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error ?? "Gửi thất bại");
      setStatus("ok");
      form.reset();
      // Bắn sự kiện chuyển đổi cho Google Analytics / Facebook Pixel
      window.gtag?.("event", "generate_lead", { source });
      window.fbq?.("track", "Lead", { source });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Có lỗi xảy ra, vui lòng gọi hotline.");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-2xl bg-white/10 p-8 text-center">
        <p className="text-4xl">🎉</p>
        <h3 className="mt-3 text-lg font-bold text-white">Đăng ký thành công!</h3>
        <p className="mt-2 text-sm text-white/70">
          Chuyên viên sẽ liên hệ với bạn trong vòng 15 phút để gửi bảng giá & chính sách mới nhất.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-gold-400 underline"
        >
          Gửi đăng ký khác
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      {/* honeypot chống spam bot — người dùng thật không thấy ô này */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <input
        name="name"
        required
        placeholder="Họ và tên *"
        autoComplete="name"
        className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3.5 text-sm text-white placeholder:text-white/50 focus:border-gold-500 focus:outline-none"
      />
      <input
        name="phone"
        required
        type="tel"
        inputMode="tel"
        placeholder="Số điện thoại *"
        autoComplete="tel"
        className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3.5 text-sm text-white placeholder:text-white/50 focus:border-gold-500 focus:outline-none"
      />
      <input
        name="email"
        type="email"
        placeholder="Email (không bắt buộc)"
        autoComplete="email"
        className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3.5 text-sm text-white placeholder:text-white/50 focus:border-gold-500 focus:outline-none"
      />
      <select
        name="interest"
        defaultValue=""
        className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3.5 text-sm text-white focus:border-gold-500 focus:outline-none"
      >
        <option value="" className="text-navy-900">
          Bạn quan tâm loại căn nào?
        </option>
        {floorPlans.map((p) => (
          <option key={p.id} value={p.name} className="text-navy-900">
            {p.name}
          </option>
        ))}
        <option value="Chưa xác định" className="text-navy-900">
          Chưa xác định — cần tư vấn
        </option>
      </select>
      <textarea
        name="note"
        rows={3}
        placeholder="Ghi chú (ngân sách, thời gian mua...)"
        className="w-full resize-none rounded-lg border border-white/20 bg-white/10 px-4 py-3.5 text-sm text-white placeholder:text-white/50 focus:border-gold-500 focus:outline-none"
      />

      {error && <p className="text-sm text-red-300">{error}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-gold-500 py-3.5 text-sm font-bold text-navy-900 transition-colors hover:bg-gold-400 disabled:opacity-60"
      >
        {status === "sending" ? "Đang gửi..." : "ĐĂNG KÝ NHẬN BẢNG GIÁ"}
      </button>
      <p className="text-center text-[11px] text-white/50">
        Thông tin của bạn được bảo mật, chỉ dùng để tư vấn dự án.
      </p>
    </form>
  );
}
