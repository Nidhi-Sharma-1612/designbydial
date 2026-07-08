"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { Button } from "./Button";

export function StickyMobileCta() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const pastHero = window.scrollY > 500;
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 700;
      setVisible(pastHero && !nearBottom);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/contact") return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink px-4 pb-[env(safe-area-inset-bottom)] pt-3 shadow-[0_-8px_24px_rgba(0,0,0,0.15)] transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-3 pb-3">
        <a
          href="tel:+19182387776"
          aria-label="Call Design By Dial"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white"
        >
          <Phone className="h-5 w-5" />
        </a>
        <Button href="/contact" size="md" className="flex-1">
          Request a Free Consultation
        </Button>
      </div>
    </div>
  );
}
