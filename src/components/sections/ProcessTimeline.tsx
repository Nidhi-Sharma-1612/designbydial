import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We learn about your properties, guests, and current Channel Manager setup.",
  },
  {
    number: "02",
    title: "Design & Build",
    description: "A custom, brand-true website designed and built around your booking journey.",
  },
  {
    number: "03",
    title: "Integration & Testing",
    description: "Your Channel Manager is connected and tested end-to-end for real-time sync.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "Your site goes live in 2–4 weeks, backed by ongoing technical support.",
  },
];

export function ProcessTimeline() {
  return (
    <Section>
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          From first call to launch
        </h2>
      </Reveal>
      <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="absolute top-6 left-0 right-0 hidden h-px bg-linear-to-r from-cyan-start/0 via-cyan-start/40 to-cyan-start/0 lg:block" />
        {STEPS.map((step, index) => (
          <Reveal key={step.number} delay={index * 120} className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-cyan-start/40 bg-bg font-accent text-lg font-bold text-cyan-end">
              {step.number}
            </div>
            <h3 className="mt-4 font-display font-semibold text-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">{step.description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
