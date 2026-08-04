"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Bọc nội dung để nó hiện lên mượt khi cuộn tới.
 * An toàn: nếu trình duyệt không hỗ trợ IntersectionObserver, hoặc observer
 * không kịp chạy, nội dung vẫn hiện sau tối đa 1,2 giây — không bao giờ mất chữ.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);

    const fallback = window.setTimeout(() => {
      setVisible(true);
      io.disconnect();
    }, 1200);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
