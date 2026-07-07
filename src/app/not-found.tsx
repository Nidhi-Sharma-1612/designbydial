import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Blob } from "@/components/ui/Blob";

export default function NotFound() {
  return (
    <Section className="py-32! text-center">
      <Blob color="cyan" className="left-1/2 top-0 h-64 w-64 -translate-x-1/2 opacity-50" />
      <h1 className="font-accent animate-float text-7xl font-bold text-gradient-cyan">404</h1>
      <p className="mt-4 text-lg text-body">
        We couldn&apos;t find the page you&apos;re looking for.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Button href="/">Back to Home</Button>
        <Button href="/portfolio" variant="outline-ink">
          View Portfolio
        </Button>
      </div>
    </Section>
  );
}
