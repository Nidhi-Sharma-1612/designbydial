"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { Container } from "./Container";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 bg-ink">
      <Container>
        <div className="flex h-18 items-center justify-between py-3.5">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative text-sm font-medium transition-colors",
                    active ? "text-white" : "text-white/75 hover:text-white"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-cyan-start transition-all duration-300",
                      active ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href="tel:+19182387776"
              className="flex items-center gap-1.5 text-sm font-medium text-white/75 hover:text-white"
            >
              <Phone className="h-4 w-4" />
              +1 918 238 7776
            </a>
            <Button href="/contact" size="md">
              Request a Free Consultation
            </Button>
          </div>

          <button
            type="button"
            className="text-white lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-white/10 bg-ink lg:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-2 text-sm font-medium",
                    active ? "text-white" : "text-white/75"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {active && <span className="h-1.5 w-1.5 rounded-full bg-cyan-start" />}
                  {link.label}
                </Link>
              );
            })}
            <a href="tel:+19182387776" className="text-sm font-medium text-white/75">
              +1 918 238 7776
            </a>
            <Button href="/contact" size="md" className="w-full">
              Request a Free Consultation
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
