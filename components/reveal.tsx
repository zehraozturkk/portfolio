"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Eleman viewport'a her girişte fade + slide ile görünür olur, çıkınca
// gizlenir (dinamik). prefers-reduced-motion açıksa animasyonsuz, direkt görünür.
export function Reveal({
  children,
  from = "up",
  className,
}: {
  children: React.ReactNode;
  from?: "up" | "left" | "right";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        visible
          ? "translate-x-0 translate-y-0 opacity-100"
          : cn(
              "opacity-0",
              // Mobilde her zaman aşağıdan: yatay kayma taşma yaratmasın
              from === "up" && "translate-y-10",
              from === "left" && "translate-y-10 lg:translate-y-0 lg:-translate-x-16",
              from === "right" && "translate-y-10 lg:translate-y-0 lg:translate-x-16"
            ),
        className
      )}
    >
      {children}
    </div>
  );
}
