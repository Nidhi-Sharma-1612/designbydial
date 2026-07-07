import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "./Container";

const FOOTER_LINKS = {
  Services: [
    { href: "/services", label: "Website Design & Dev" },
    { href: "/services#channel-manager", label: "Channel Manager Integration" },
    { href: "/services#seo", label: "SEO for Direct Bookings" },
    { href: "/pricing", label: "Pricing" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              We build direct booking websites for vacation rental operators
              &mdash; integrated with your Channel Manager, built to convert.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a
                href="mailto:info@designbydial.com"
                className="flex items-center gap-2 transition-colors hover:text-cyan-start"
              >
                <Mail className="h-4 w-4" /> info@designbydial.com
              </a>
              <a
                href="tel:+19182387776"
                className="flex items-center gap-2 transition-colors hover:text-cyan-start"
              >
                <Phone className="h-4 w-4" /> +1 918 238 7776
              </a>
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-display text-sm font-semibold text-white">
                {heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-cyan-start"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-xs">
          Copyright &copy; {new Date().getFullYear()} Design By Dial. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
