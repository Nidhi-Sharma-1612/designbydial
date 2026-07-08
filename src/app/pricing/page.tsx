import type { Metadata } from "next";
import { Check, Rocket, TrendingUp, BarChart3, Building2 } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { Blob } from "@/components/ui/Blob";
import { cn } from "@/lib/cn";
import { pricingTiers } from "@/content/pricing";
import { getFaqsForPage } from "@/content/faq";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Pricing — Vacation Rental Website Packages",
  description:
    "Simple, transparent pricing for direct booking vacation rental websites, from single-property starter sites to custom enterprise builds.",
  path: "/pricing",
});

const TIER_ICONS = [Rocket, TrendingUp, BarChart3, Building2];

export default function PricingPage() {
  const faqs = getFaqsForPage("pricing");

  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Simple and transparent investment"
        description="Pick the package that fits your portfolio today — every tier is built on the same direct-booking foundation."
      />

      <Section className="pt-4! md:pt-4!">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pricingTiers.map((tier, index) => {
            const Icon = TIER_ICONS[index % TIER_ICONS.length];
            return (
              <Reveal key={tier.tierName} delay={index * 100}>
                <Card
                  className={cn(
                    "flex h-full flex-col transition-transform duration-300 hover:-translate-y-1",
                    tier.mostPopular && "ring-2 ring-coral hover:ring-coral!"
                  )}
                >
                  {tier.mostPopular && (
                    <span className="mb-4 inline-flex w-fit items-center rounded-full bg-coral/10 px-3 py-1 text-xs font-semibold text-coral">
                      Most Popular
                    </span>
                  )}
                  <Icon className="h-8 w-8 text-cyan-end" />
                  <h2 className="mt-4 font-display text-xl font-semibold">{tier.tierName}</h2>
                  <div className="mt-3">
                    <span className="font-accent text-4xl font-bold">{tier.price}</span>
                    <span className="text-body">{tier.cadence}</span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-ink">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="/contact"
                    className="mt-8 w-full"
                    variant={tier.mostPopular ? "primary" : "outline-ink"}
                  >
                    {tier.ctaLabel}
                  </Button>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="tint">
        <h2 className="text-center font-display text-3xl font-bold md:text-4xl">
          Pricing Questions
        </h2>
        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </Section>

      <Section tone="dark" texture>
        <Blob color="cyan" className="-right-16 top-0 h-64 w-64 opacity-40" />
        <Blob color="coral" className="-bottom-16 -left-16 h-56 w-56 opacity-30" />
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Not sure which package fits?
          </h2>
          <p className="mt-4 text-white/70">
            Request a free consultation and we&apos;ll recommend the right tier for your
            portfolio — no pressure, no obligation.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Request a Free Consultation
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
