import type { Metadata } from "next";
import Link from "next/link";
import { Palette, Plug, Search, Sparkles, LifeBuoy, Check, ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { Blob } from "@/components/ui/Blob";
import { StatTile } from "@/components/ui/StatTile";
import { JsonLd } from "@/components/JsonLd";
import { channelManagers, stats } from "@/content/stats";
import { getFaqsForPage } from "@/content/faq";
import { getPortfolioProjectBySlug } from "@/content/portfolio";
import { professionalServiceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Vacation Rental Website Services",
  description:
    "Custom direct booking website design, Channel Manager integration, SEO, branding, and ongoing support for vacation rental operators.",
  path: "/services",
});

type Proof =
  | { type: "quote"; slug: string }
  | { type: "stat"; value: string; suffix?: string; label: string };

const SERVICES: {
  id: string;
  number: string;
  icon: typeof Palette;
  title: string;
  description: string;
  points: string[];
  proof: Proof;
}[] = [
  {
    id: "design-dev",
    number: "01",
    icon: Palette,
    title: "Custom Website Design & Dev",
    description:
      "Pixel-perfect, brand-true websites built specifically for your properties and guest journey — never a generic template.",
    points: [
      "Custom UI design tailored to your brand",
      "Fast, performance-first development",
      "Mobile responsive on every device",
    ],
    proof: { type: "quote", slug: "our-whistler-retreat" },
  },
  {
    id: "channel-manager",
    number: "02",
    icon: Plug,
    title: "Channel Manager Integration",
    description: `We integrate directly with the Channel Manager you already use (${channelManagers.join(", ")}, and more) so availability, pricing, and bookings stay synchronized automatically.`,
    points: [
      "Real-time availability & pricing sync",
      "No need to change your existing Channel Manager",
      "Guests book directly through your integrated system",
    ],
    proof: { type: "quote", slug: "harriscove" },
  },
  {
    id: "seo",
    number: "03",
    icon: Search,
    title: "SEO for Direct Bookings",
    description:
      "We structure your website with proper content, layout, and technical setup so search engines can find and rank your business.",
    points: [
      "Technical SEO foundation",
      "Content structured to reduce OTA dependence",
      "Built to be discoverable, not just beautiful",
    ],
    proof: { type: "stat", value: stats[0].value, suffix: stats[0].suffix, label: "Direct booking sites launched" },
  },
  {
    id: "branding",
    number: "04",
    icon: Sparkles,
    title: "Branding for Rental Properties",
    description:
      "Brand systems and visual identity that make your properties feel unforgettable to high-value guests.",
    points: ["Logo & identity systems", "Consistent visual language", "Premium, hospitality-grade presentation"],
    proof: { type: "quote", slug: "laquell" },
  },
  {
    id: "support",
    number: "05",
    icon: LifeBuoy,
    title: "Ongoing CMS & Support",
    description:
      "Update property details anytime through your Channel Manager, backed by a proper CMS and ongoing technical support.",
    points: ["Self-service content management", "Ongoing technical support", "Room to grow as you add properties"],
    proof: { type: "stat", value: stats[2].value, suffix: stats[2].suffix, label: "Years supporting STR operators" },
  },
];

function ProofCard({ proof }: { proof: Proof }) {
  if (proof.type === "stat") {
    return (
      <div className="flex h-full min-h-50 flex-col items-center justify-center rounded-2xl border border-ink/10 bg-surface p-8 text-center">
        <StatTile value={proof.value} suffix={proof.suffix} label={proof.label} />
      </div>
    );
  }

  const project = getPortfolioProjectBySlug(proof.slug);
  if (!project) return null;
  const quote = project.results[0];

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group flex h-full min-h-50 flex-col justify-between rounded-2xl border border-ink/10 bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(16,24,40,0.1)] hover:ring-1 hover:ring-cyan-start/30"
    >
      <div>
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-end">
          Real Result
        </span>
        <p className="mt-3 font-display text-lg font-semibold leading-snug text-ink">
          &ldquo;{quote.value}&rdquo;
        </p>
      </div>
      <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-ink">
        {project.projectName}
        <ArrowUpRight className="h-4 w-4 text-cyan-end transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}

export default function ServicesPage() {
  const faqs = getFaqsForPage("services");

  return (
    <>
      <JsonLd data={professionalServiceSchema()} />
      <PageHeader
        eyebrow="Services"
        title="Everything you need to own your direct bookings"
        description="From custom design to Channel Manager integration, SEO, branding, and ongoing support — built specifically for vacation rental operators."
      />

      <Section tone="tint" className="py-8! md:py-8!">
        <nav aria-label="Jump to a service" className="flex flex-wrap justify-center gap-3">
          {SERVICES.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-surface px-4 py-2 text-sm font-medium text-ink transition-colors duration-150 hover:border-cyan-start/40 hover:text-cyan-end"
            >
              <service.icon className="h-4 w-4 text-cyan-end" />
              {service.title}
            </a>
          ))}
        </nav>
      </Section>

      <Section>
        <div className="space-y-16 md:space-y-20">
          {SERVICES.map((service, index) => (
            <Reveal
              key={service.id}
              className="grid scroll-mt-24 items-center gap-8 md:grid-cols-2"
            >
              <div id={service.id} className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-cyan-start/15 to-cyan-end/15">
                    <service.icon className="h-7 w-7 text-cyan-end" />
                  </div>
                  <span className="font-accent text-sm font-bold text-cyan-end/50">
                    {service.number}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-3 text-body leading-relaxed">{service.description}</p>
                <ul className="mt-5 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-ink">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <ProofCard proof={service.proof} />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="dark" texture>
        <Blob color="cyan" className="-right-16 top-0 h-64 w-64 opacity-40" />
        <Blob color="coral" className="-bottom-16 -left-16 h-56 w-56 opacity-30" />
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Ready to talk about your properties?
          </h2>
          <p className="mt-4 text-white/70">
            {`Join ${stats[0].value}${stats[0].suffix} vacation rental operators who've moved off OTA-only traffic and onto a direct booking website built to convert.`}
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Request a Free Consultation
            </Button>
          </div>
        </Reveal>
      </Section>

      <Section tone="tint">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold md:text-4xl">
            Common Questions
          </h2>
          <div className="mx-auto mt-10 max-w-3xl">
            <Accordion items={faqs} />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
