"use client";

import { useState, type ReactNode } from "react";
import { floorPlans } from "@/data/site";

type Status = "idle" | "sending" | "ok" | "error";

export default function LeadForm({
  source = "form-lien-he",
  theme = "dark",
  compact = false,
  submitLabel = "ĐĂNG KÝ NHẬN BẢNG GIÁ",
  renderSuccess,
}: {
  source?: string;
  theme?: "dark" | "light";
  /** Bỏ bớt ô email/ghi chú cho form ngắn (popup, tải tài liệu) */
  compact?: boolean;
  submitLabel?: string;
  renderSuccess?: () => ReactNode;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const dark = theme === "dark";
  const field = dark
    ? "border-white/20 bg-white/10 text-white placeholder:text-white/50"
    : "border-navy-200 bg-white text-navy-900 placeholder:text-neutral-400";

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
      // Đã có thông tin khách rồi thì không làm phiền bằng popup nữa
      sessionStorage.setItem("lead-sent", "1");
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
      <div
        className={`rounded-2xl p-7 text-center ${dark ? "bg-white/10" : "border border-navy-100 bg-navy-50"}`}
      >
        <p className="text-4xl">🎉</p>
        <h3 className={`mt-3 text-lg font-bold ${dark ? "text-white" : "text-navy-900"}`}>
          Đăng ký thành công!
        </h3>
        <p className={`mt-2 text-sm ${dark ? "text-white/70" : "text-neutral-600"}`}>
          Chuyên viên sẽ liên hệ với bạn trong vòng 15 phút để tư vấn chi tiết.
        </p>
        {renderSuccess?.()}
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-gold-500 underline"
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
        className={`w-full rounded-xl border px-4 py-3.5 text-sm transition-colors focus:border-gold-500 focus:outline-none ${field}`}
      />
      <input
        name="phone"
        required
        type="tel"
        inputMode="tel"
        placeholder="Số điện thoại *"
        autoComplete="tel"
        className={`w-full rounded-xl border px-4 py-3.5 text-sm transition-colors focus:border-gold-500 focus:outline-none ${field}`}
      />

      {!compact && (
        <>
          <input
            name="email"
            type="email"
            placeholder="Email (không bắt buộc)"
            autoComplete="email"
            className={`w-full rounded-xl border px-4 py-3.5 text-sm transition-colors focus:border-gold-500 focus:outline-none ${field}`}
          />
          <select
            name="interest"
            defaultValue=""
            className={`w-full rounded-xl border px-4 py-3.5 text-sm transition-colors focus:border-gold-500 focus:outline-none ${field}`}
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
            className={`w-full resize-none rounded-xl border px-4 py-3.5 text-sm transition-colors focus:border-gold-500 focus:outline-none ${field}`}
          />
        </>
      )}

      {error && <p className="text-sm font-medium text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-gold-500 py-4 text-[13px] font-bold tracking-wide text-navy-900 uppercase shadow-lg shadow-gold-500/25 transition-all hover:-translate-y-0.5 hover:bg-gold-400 disabled:translate-y-0 disabled:opacity-60"
      >
        {status === "sending" ? "Đang gửi..." : submitLabel}
      </button>
      <p className={`text-center text-[11px] ${dark ? "text-white/50" : "text-neutral-500"}`}>
        Thông tin của bạn được bảo mật, chỉ dùng để tư vấn dự án.
      </p>
    </form>
  );
}
