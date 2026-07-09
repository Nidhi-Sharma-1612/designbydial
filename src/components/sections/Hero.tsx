import { Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Blob } from "@/components/ui/Blob";
import { Reveal } from "@/components/ui/Reveal";
import { BrowserMockup } from "@/components/ui/BrowserMockup";
import { AvatarCluster } from "@/components/ui/AvatarCluster";

export function Hero() {
  return (
    <Section className="relative flex min-h-[calc(100vh-72px)] flex-col justify-center py-10! md:py-14!">
      <div className="bg-dot-grid" aria-hidden />
      <Blob color="cyan" className="-right-10 top-0 h-104 w-104" />
      <Blob color="coral" className="-bottom-16 -left-10 h-64 w-64" />

      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Badge dot>Accepting new projects for Q3</Badge>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
            Turn Browsers Into{" "}
            <span className="text-gradient-cyan">Direct Bookings</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-body">
            We build high-converting direct booking websites for vacation rental
            operators &mdash; fully integrated with your Channel Manager
            (Hostaway, Guesty, Lodgify) so availability and pricing stay in sync
            automatically.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">
              Request a Free Consultation
            </Button>
            <Button href="/portfolio" size="lg" variant="outline-ink">
              View Portfolio
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-body">
            <div className="flex items-center gap-1.5">
              <div className="flex text-coral">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-ink">
                98% client satisfaction
              </span>
            </div>
            <div className="flex items-center gap-3">
              <AvatarCluster />
              <span className="font-semibold text-ink">
                Trusted by 50+ property managers
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="animate-float">
            <BrowserMockup />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
