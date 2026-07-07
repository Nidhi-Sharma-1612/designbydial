import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "Design By Dial's terms of service.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Service" />
      <Section className="pt-4! md:pt-4!">
        <div className="prose mx-auto max-w-3xl text-body leading-relaxed">
          <p>
            By engaging Design By Dial for website design, development, or
            related services, you agree to the project scope, timeline, and
            payment terms outlined in your individual project agreement.
          </p>
          <p className="mt-4">
            Website timelines (typically 2–4 weeks) depend on timely content
            and feedback from the client. Ongoing support and CMS access are
            provided as described in your selected pricing tier.
          </p>
          <p className="mt-4">
            Questions about these terms can be sent to{" "}
            <a href="mailto:info@designbydial.com" className="text-cyan-end">
              info@designbydial.com
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
