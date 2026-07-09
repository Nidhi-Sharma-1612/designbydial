import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Blob } from "@/components/ui/Blob";
import { portfolioProjects } from "@/content/portfolio";
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

      <Section tone="dark" texture>
        <Blob color="cyan" className="-right-16 top-0 h-64 w-64 opacity-40" />
        <Blob color="coral" className="-bottom-16 -left-16 h-56 w-56 opacity-30" />
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Ready to be our next success story?
          </h2>
          <p className="mt-4 text-white/70">
            Request a free consultation and let&apos;s talk about what a direct booking website
            could do for your properties.
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
