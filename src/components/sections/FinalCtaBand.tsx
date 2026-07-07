import { Phone, Mail } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { Blob } from "@/components/ui/Blob";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCtaBand() {
  return (
    <Section tone="dark" texture>
      <Blob color="cyan" className="-right-20 -top-20 h-72 w-72 opacity-40" />
      <Blob color="coral" className="-bottom-16 -left-16 h-64 w-64 opacity-30" />

      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Ready to own your direct bookings?
          </h2>
          <p className="mt-4 max-w-md text-white/70">
            Book a free consultation and we&apos;ll show you exactly how a
            direct booking website fits into your current Channel Manager
            setup.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-white/70">
            <a href="tel:+19182387776" className="flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4" /> +1 918 238 7776
            </a>
            <a href="mailto:info@designbydial.com" className="flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4" /> info@designbydial.com
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="rounded-2xl bg-bg p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)] md:p-8">
          <ContactForm variant="compact" />
        </Reveal>
      </div>
    </Section>
  );
}
