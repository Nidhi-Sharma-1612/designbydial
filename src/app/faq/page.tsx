import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Blob } from "@/components/ui/Blob";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/content/faq";
import { faqPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "FAQ — Vacation Rental Website Development",
  description:
    "Answers to common questions about custom direct booking websites, Channel Manager integration, timelines, SEO, and support.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(faqs)} />
      <PageHeader
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know before building your direct booking website."
      />

      <Section className="pt-4! md:pt-4!">
        <Reveal className="mx-auto max-w-3xl">
          <Accordion items={faqs} />
        </Reveal>
      </Section>

      <Section tone="dark" texture>
        <Blob color="cyan" className="-right-16 top-0 h-64 w-64 opacity-40" />
        <Blob color="coral" className="-bottom-16 -left-16 h-56 w-56 opacity-30" />
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Still have questions?
          </h2>
          <p className="mt-4 text-white/70">
            Book a free consultation and we&apos;ll walk you through exactly how a direct
            booking website would work for your properties.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Book a Free Consultation
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
