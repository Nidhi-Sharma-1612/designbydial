import type { Metadata } from "next";
import { Globe, Zap, Users } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { StatTile } from "@/components/ui/StatTile";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Blob } from "@/components/ui/Blob";
import { stats } from "@/content/stats";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About Design By Dial",
  description:
    "Design By Dial is a digital studio building direct booking websites for vacation rental operators, working remotely with operators worldwide.",
  path: "/about",
});

const VALUES = [
  {
    icon: Globe,
    title: "Remote Worldwide",
    description:
      "We work with property managers and STR operators wherever they are, with a workflow built for fully remote collaboration.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "Most direct booking websites launch within 2–4 weeks, depending on your content and customization needs.",
  },
  {
    icon: Users,
    title: "Long-Term Partnership",
    description:
      "We stick around after launch with ongoing CMS access and technical support, not a one-and-done handoff.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="We help vacation rental operators own their direct bookings"
        description="Design By Dial is a digital studio focused on one thing: building high-performance, brand-true websites that turn browsers into direct bookings."
      />

      <Section className="pt-4! md:pt-4!">
        <Reveal className="mx-auto max-w-3xl text-body leading-relaxed">
          <p>
            We don&apos;t build generic templates — we craft digital identities for
            vacation rental businesses. Our approach combines modern UI design,
            performance-first development, and real Channel Manager integration to
            transform visitors into guests.
          </p>
          <p className="mt-4">
            From boutique homestays to multi-property portfolios, we partner with
            operators to create scalable direct booking systems that reduce OTA
            reliance and deliver measurable results.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 100}>
              <StatTile value={stat.value} suffix={stat.suffix} label={stat.label} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="tint">
        <Blob color="cyan" className="-right-20 -top-20 h-64 w-64 opacity-40" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {VALUES.map((value, index) => (
            <Reveal key={value.title} delay={index * 100}>
              <Card className="group h-full transition-transform duration-300 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-cyan-start/15 to-cyan-end/15 transition-transform duration-300 group-hover:scale-110">
                  <value.icon className="h-6 w-6 text-cyan-end" />
                </div>
                <h3 className="mt-4 font-display font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{value.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="dark" texture>
        <Blob color="cyan" className="-right-16 top-0 h-64 w-64 opacity-40" />
        <Blob color="coral" className="-bottom-16 -left-16 h-56 w-56 opacity-30" />
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Let&apos;s build your direct booking website
          </h2>
          <p className="mt-4 text-white/70">
            Request a free consultation and see how a custom, Channel Manager-integrated
            website could work for your properties.
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
