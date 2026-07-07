import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark" | "tint";
  texture?: boolean;
  id?: string;
};

const toneClasses: Record<NonNullable<SectionProps["tone"]>, string> = {
  light: "bg-bg text-ink",
  dark: "bg-ink text-white",
  tint: "bg-tint text-ink",
};

export function Section({ children, className, tone = "light", texture, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-16 md:py-24",
        toneClasses[tone],
        texture && "texture-grain",
        className
      )}
    >
      <Container className="relative z-10">{children}</Container>
    </section>
  );
}
