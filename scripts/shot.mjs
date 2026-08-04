/**
 * Chụp ảnh từng section bằng Chrome DevTools Protocol (không cần cài thêm gói).
 * Dùng: node scripts/shot.mjs <url> <thư-mục-ra> [width] [height]
 * Cần Chrome đang chạy với --remote-debugging-port=9222
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const [url, outDir, w = "1440", h = "1000"] = process.argv.slice(2);
const width = Number(w);
const height = Number(h);
mkdirSync(outDir, { recursive: true });

const target = await (
  await fetch("http://127.0.0.1:9222/json/new?about:blank", { method: "PUT" })
).json();
const ws = new WebSocket(target.webSocketDebuggerUrl);
let id = 0;
const pending = new Map();

ws.onmessage = (e) => {
  const msg = JSON.parse(e.data);
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg.result);
    pending.delete(msg.id);
  }
};

const send = (method, params = {}) =>
  new Promise((resolve) => {
    const msgId = ++id;
    pending.set(msgId, resolve);
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });

const evaluate = (expression, awaitPromise = false) =>
  send("Runtime.evaluate", { expression, awaitPromise, returnByValue: true });

await new Promise((r) => (ws.onopen = r));
await send("Emulation.setDeviceMetricsOverride", {
  width,
  height,
  deviceScaleFactor: 1,
  mobile: width < 500,
});
await send("Page.enable");
await send("Page.navigate", { url });
await new Promise((r) => setTimeout(r, 4000));

// Tắt cuộn mượt để nhảy tới section là chụp được ngay
await evaluate(`document.documentElement.style.scrollBehavior = 'auto'`);

const { result } = await evaluate(
  `Array.from(document.querySelectorAll('section[id]')).map(s => s.id)`,
);
const ids = ["__hero", ...result.value.filter((x) => x !== "top")];

let n = 0;
for (const secId of ids) {
  if (secId === "__hero") {
    await evaluate(`window.scrollTo(0, 0)`);
  } else {
    await evaluate(
      `document.getElementById('${secId}').scrollIntoView({ block: 'start', behavior: 'auto' })`,
    );
  }
  await new Promise((r) => setTimeout(r, 1400));
  const shot = await send("Page.captureScreenshot", { format: "png" });
  const name = `${String(++n).padStart(2, "0")}-${secId.replace("__", "")}.png`;
  writeFileSync(join(outDir, name), Buffer.from(shot.data, "base64"));
  console.log(name);
}

ws.close();
process.exit(0);
