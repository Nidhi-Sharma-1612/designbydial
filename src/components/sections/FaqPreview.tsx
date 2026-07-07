import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { getFaqsForPage } from "@/content/faq";

export function FaqPreview() {
  const items = getFaqsForPage("home");

  return (
    <Section tone="tint">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Frequently Asked Questions
        </h2>
      </Reveal>
      <Reveal delay={100} className="mx-auto mt-10 max-w-3xl">
        <Accordion items={items} />
      </Reveal>
      <div className="mt-8 text-center">
        <Button href="/faq" variant="outline-ink">
          See All FAQs
        </Button>
      </div>
    </Section>
  );
}
