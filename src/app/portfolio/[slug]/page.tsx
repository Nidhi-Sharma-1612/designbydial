import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { getPortfolioProjectBySlug, portfolioProjects } from "@/content/portfolio";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProjectBySlug(slug);
  if (!project) return {};

  return buildMetadata({
    title: `${project.projectName} — Case Study`,
    description: project.challenge,
    path: `/portfolio/${project.slug}`,
    image: project.heroImage,
  });
}

export default async function PortfolioProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getPortfolioProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Section className="pt-14! pb-8! md:pt-20!">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-body hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Portfolio
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-end hover:text-cyan-end/80"
            >
              Visit Live Site <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
        <div className="mt-6">
          <span className="text-sm font-semibold uppercase tracking-wide text-cyan-end">
            {project.category}
            {project.location ? ` · ${project.location}` : ""}
          </span>
          <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">
            {project.projectName}
          </h1>
        </div>
      </Section>

      <Section className="pt-0!">
        <Reveal className="overflow-hidden rounded-2xl">
          <Image
            src={project.heroImage}
            alt={project.projectName}
            width={1200}
            height={900}
            className="h-full w-full object-cover"
            priority
          />
        </Reveal>

        <Reveal delay={100} className="mt-12 grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="font-display text-xl font-semibold">The Challenge</h2>
              <p className="mt-2 leading-relaxed text-body">{project.challenge}</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold">The Solution</h2>
              <p className="mt-2 leading-relaxed text-body">{project.solution}</p>
            </div>
          </div>

          <div className="space-y-6 rounded-2xl bg-tint p-6">
            {project.channelManager && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-body">
                  Channel Manager
                </p>
                <p className="mt-1 font-display font-semibold">{project.channelManager}</p>
              </div>
            )}
            {project.results.map((result) => (
              <div key={result.label}>
                <p className="text-xs font-semibold uppercase tracking-wide text-body">
                  {result.label}
                </p>
                <p className="mt-1 font-accent font-bold text-coral">{result.value}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 text-center">
          <Button href="/contact" size="lg">
            Start a Similar Project
          </Button>
        </div>
      </Section>
    </>
  );
}
