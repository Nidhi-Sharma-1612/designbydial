import { Section } from "./Section";
import { Blob } from "./Blob";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <Section className="pb-8! pt-14! md:pt-20!">
      <Blob color="cyan" className="-left-16 -top-16 h-56 w-56 opacity-60" />
      <Reveal className="mx-auto max-w-2xl text-center">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-end">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">{title}</h1>
        {description && <p className="mt-4 text-lg text-body">{description}</p>}
      </Reveal>
    </Section>
  );
}
