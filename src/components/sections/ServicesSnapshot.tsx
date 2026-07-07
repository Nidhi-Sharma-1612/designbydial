import Link from "next/link";
import { Palette, Plug, Search, Sparkles, LifeBuoy, MessageCircle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const SERVICES = [
  {
    icon: Palette,
    title: "Custom Website Design & Dev",
    description: "Pixel-perfect, brand-true websites built for direct bookings, not templates.",
  },
  {
    icon: Plug,
    title: "Channel Manager Integration",
    description: "Real-time sync with Hostaway, Guesty, Lodgify, and more.",
  },
  {
    icon: Search,
    title: "SEO for Direct Bookings",
    description: "Technical SEO and content structure built to reduce OTA dependence.",
  },
  {
    icon: Sparkles,
    title: "Branding for Rental Properties",
    description: "Identity systems that make your properties feel unforgettable.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing CMS & Support",
    description: "Update content anytime, backed by ongoing technical support.",
  },
];

export function ServicesSnapshot() {
  return (
    <Section>
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Everything you need to own your direct bookings
        </h2>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, index) => (
          <Reveal key={service.title} delay={index * 80}>
            <Card className="group h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-cyan-start/15 to-cyan-end/15 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <service.icon className="h-6 w-6 text-cyan-end" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{service.description}</p>
            </Card>
          </Reveal>
        ))}

        <Reveal delay={SERVICES.length * 80}>
          <Card className="group flex h-full flex-col items-start justify-center border-2 border-dashed border-cyan-end/30 bg-tint">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-coral/15 transition-transform duration-300 group-hover:scale-110">
              <MessageCircle className="h-6 w-6 text-coral" />
            </div>
            <h3 className="mt-4 font-display font-semibold text-ink">
              Not sure where to start?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-body">
              Tell us about your properties and we&apos;ll recommend the right fit.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-coral hover:text-coral-hover"
            >
              Talk to us &rarr;
            </Link>
          </Card>
        </Reveal>
      </div>
      <div className="mt-10 text-center">
        <Button href="/services" variant="outline-ink">
          Explore All Services
        </Button>
      </div>
    </Section>
  );
}
