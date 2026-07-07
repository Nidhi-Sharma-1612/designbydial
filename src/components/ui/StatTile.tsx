"use client";

import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/lib/useCountUp";
import { cn } from "@/lib/cn";

export function StatTile({
  value,
  suffix,
  label,
  tone = "light",
}: {
  value: string | number;
  suffix?: string;
  label: string;
  tone?: "light" | "dark";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const numeric = typeof value === "number" ? value : parseInt(value, 10);
  const isNumeric = !Number.isNaN(numeric);
  const count = useCountUp(isNumeric ? numeric : 0, active);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div
        className={cn(
          "font-accent text-4xl font-bold md:text-5xl",
          tone === "dark" ? "text-white" : "text-ink"
        )}
      >
        {isNumeric ? count : value}
        {suffix}
      </div>
      <div className={cn("mt-2 text-sm", tone === "dark" ? "text-white/60" : "text-body")}>
        {label}
      </div>
    </div>
  );
}
