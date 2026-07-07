import { Rocket, Award, CalendarClock } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { StatTile } from "@/components/ui/StatTile";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/content/stats";

const ICONS = [Rocket, Award, CalendarClock];

export function StatsBar() {
  return (
    <Section id="stats" className="scroll-mt-20 py-12! md:py-14! border-y border-border/70">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
        {stats.map((stat, index) => {
          const Icon = ICONS[index % ICONS.length];
          return (
            <Reveal key={stat.label} delay={index * 100} className="flex flex-col items-center">
              <Icon className="mb-3 h-6 w-6 text-cyan-end" />
              <StatTile value={stat.value} suffix={stat.suffix} label={stat.label} />
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
