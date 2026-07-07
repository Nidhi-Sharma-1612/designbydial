import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Design By Dial's privacy policy.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <Section className="pt-4! md:pt-4!">
        <div className="prose mx-auto max-w-3xl text-body leading-relaxed">
          <p>
            Design By Dial (&ldquo;we&rdquo;, &ldquo;us&rdquo;) collects only the
            information you provide through our contact and consultation forms —
            such as your name, email, phone number, and project details — in
            order to respond to your inquiry.
          </p>
          <p className="mt-4">
            We do not sell or share your information with third parties, other
            than the service providers we use to operate this website (such as
            our email delivery and scheduling providers).
          </p>
          <p className="mt-4">
            To request that your information be deleted, contact us at{" "}
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
