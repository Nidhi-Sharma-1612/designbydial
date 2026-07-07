import { Plug } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { channelManagers } from "@/content/stats";

export function ChannelManagerTrustBar() {
  return (
    <Section tone="tint" className="py-12! md:py-16!">
      <Reveal className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-body">
          Integrates with the Channel Managers you already use
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {channelManagers.map((name) => (
            <span
              key={name}
              className="group flex items-center gap-2 font-display text-2xl font-bold text-ink/55 transition-colors hover:text-ink/85"
            >
              <Plug className="h-5 w-5 text-cyan-end/60 transition-transform group-hover:rotate-12 group-hover:text-cyan-end" />
              {name}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
