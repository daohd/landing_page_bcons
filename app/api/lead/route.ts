import { NextResponse } from "next/server";
import { site } from "@/data/site";

export const runtime = "nodejs";

type Lead = {
  name?: string;
  phone?: string;
  email?: string;
  interest?: string;
  note?: string;
  source?: string;
  page?: string;
  company?: string; // honeypot
};

// Giới hạn 5 lượt gửi / 10 phút cho mỗi IP (chống spam cơ bản)
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60_000;
const MAX_HITS = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Lead | null;
  if (!body) {
    return NextResponse.json({ error: "Dữ liệu không hợp lệ." }, { status: 400 });
  }

  // Bot điền vào ô ẩn → giả vờ thành công để nó không thử lại
  if (body.company) return NextResponse.json({ ok: true });

  const name = body.name?.trim() ?? "";
  const phone = (body.phone ?? "").replace(/[\s.]/g, "");
  if (!name || !/^(0|\+84)\d{8,10}$/.test(phone)) {
    return NextResponse.json({ error: "Vui lòng nhập đúng họ tên và số điện thoại." }, { status: 400 });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Bạn đã gửi quá nhiều lần. Vui lòng gọi hotline " + site.hotline },
      { status: 429 },
    );
  }

  const lead = {
    time: new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" }),
    name,
    phone,
    email: body.email?.trim() ?? "",
    interest: body.interest ?? "",
    note: body.note?.trim() ?? "",
    source: body.source ?? "",
    page: body.page ?? "",
    ip,
  };

  const tasks: Promise<unknown>[] = [];

  // 1) Gửi về Google Sheet (Google Apps Script Web App)
  if (process.env.GOOGLE_SHEET_WEBHOOK_URL) {
    tasks.push(
      fetch(process.env.GOOGLE_SHEET_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      }),
    );
  }

  // 2) Gửi email qua Resend
  if (process.env.RESEND_API_KEY && process.env.LEAD_TO_EMAIL) {
    tasks.push(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.LEAD_FROM_EMAIL ?? "onboarding@resend.dev",
          to: process.env.LEAD_TO_EMAIL.split(",").map((s) => s.trim()),
          subject: `[Lead] ${lead.name} - ${lead.phone} - ${site.name}`,
          html: `<h2>Khách hàng mới từ website</h2>
<table cellpadding="8" style="border-collapse:collapse" border="1">
${Object.entries(lead)
  .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${String(v).replace(/</g, "&lt;")}</td></tr>`)
  .join("")}
</table>`,
        }),
      }),
    );
  }

  const results = await Promise.allSettled(tasks);
  const delivered = results.some((r) => r.status === "fulfilled");

  // Chưa cấu hình nơi nhận → vẫn ghi log để không mất lead
  if (tasks.length === 0 || !delivered) {
    console.info("[LEAD]", JSON.stringify(lead));
  }

  return NextResponse.json({ ok: true });
}
