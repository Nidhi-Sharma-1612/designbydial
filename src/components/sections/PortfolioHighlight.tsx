import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { getFeaturedPortfolioProjects } from "@/content/portfolio";

export function PortfolioHighlight() {
  const projects = getFeaturedPortfolioProjects();

  return (
    <Section tone="tint">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Real projects. Real direct bookings.
          </h2>
          <p className="mt-2 max-w-xl text-body">
            A look at recent partnerships and the impact created together.
          </p>
        </div>
        <Button href="/portfolio" variant="outline-ink">
          View All Projects
        </Button>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 100}>
            <Card className="group h-full p-0 overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.heroImage}
                  alt={project.projectName}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-cyan-end">
                  {project.category}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold">{project.projectName}</h3>
                {project.results[0] && (
                  <p className="mt-2 font-accent text-sm font-bold text-coral">
                    {project.results[0].value}
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
  );
}
