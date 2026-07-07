import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowUpRight, Quote, TrendingUp } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Blob } from "@/components/ui/Blob";
import { JsonLd } from "@/components/JsonLd";
import { portfolioProjects } from "@/content/portfolio";
import { testimonials } from "@/content/testimonials";
import { reviewsSchema } from "@/lib/schema";
import { getInitials, colorForName } from "@/lib/initials";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio — Direct Booking Website Examples",
  description:
    "Real vacation rental and STR direct booking websites we've designed and built, with real client results.",
  path: "/portfolio",
  image: portfolioProjects[0].heroImage,
});

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={reviewsSchema(testimonials)} />
      <PageHeader
        eyebrow="Portfolio"
        title="Real projects. Real direct bookings."
        description="Recent partnerships and the impact created together."
      />

      <Section className="pt-4! md:pt-4!">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {portfolioProjects.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 2) * 100}>
              <Card className="group h-full p-0 overflow-hidden">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.heroImage}
                    alt={project.projectName}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-cyan-end">
                    {project.category}
                    {project.location ? ` · ${project.location}` : ""}
                  </span>
                  <h2 className="mt-2 font-display text-xl font-semibold">
                    {project.projectName}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-body">{project.challenge}</p>
                  {project.results[0] && (
                    <p className="mt-3 font-accent text-sm font-bold text-coral">
                      {project.results[0].label}: {project.results[0].value}
                    </p>
                  )}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors hover:text-cyan-end"
                    >
                      View Project{" "}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ) : (
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors hover:text-cyan-end"
                    >
                      View Project{" "}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  )}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="tint">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Client Stories</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <Reveal key={`${t.authorName}-${t.companyName}`} delay={(index % 3) * 80}>
              <Card className="flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-start/10">
                    <Quote className="h-5 w-5 text-cyan-end" />
                  </div>
                  <div className="flex gap-1 text-coral">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="mt-5 flex-1 text-sm leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${colorForName(
                        t.companyName
                      )}`}
                    >
                      {getInitials(t.companyName)}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">{t.authorName}</p>
                      <p className="text-xs text-body">
                        {t.authorRole}, {t.companyName}
                      </p>
                    </div>
                  </div>

                  {t.highlightStat && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-coral/10 px-2.5 py-1 font-accent text-xs font-bold text-coral-hover">
                      <TrendingUp className="h-3.5 w-3.5" />
                      {t.highlightStat}
                    </span>
                  )}
                </div>
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
            Ready to be our next success story?
          </h2>
          <p className="mt-4 text-white/70">
            Book a free consultation and let&apos;s talk about what a direct booking website
            could do for your properties.
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
