import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact — Request a Free Consultation",
  description:
    "Get in touch with Design By Dial to discuss your vacation rental direct booking website. Request a free consultation or send us a message.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something powerful together"
        description="Tell us about your properties and we'll get back to you within 24 hours."
      />

      <Section className="pt-4! md:pt-4!">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="font-display text-xl font-semibold">Send a Message</h2>
          <Card className="mt-4">
            <ContactForm variant="full" />
          </Card>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <a
              href="mailto:info@designbydial.com"
              className="flex items-center gap-3 text-sm transition-colors hover:text-cyan-end"
            >
              <Mail className="h-5 w-5 text-cyan-end" />
              info@designbydial.com
            </a>
            <a
              href="tel:+19182387776"
              className="flex items-center gap-3 text-sm transition-colors hover:text-cyan-end"
            >
              <Phone className="h-5 w-5 text-cyan-end" />
              +1 918 238 7776
            </a>
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="h-5 w-5 text-cyan-end" />
              <span>Remote Worldwide</span>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
