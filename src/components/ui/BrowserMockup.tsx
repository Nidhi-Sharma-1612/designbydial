import Image from "next/image";
import { Calendar } from "lucide-react";

export function BrowserMockup() {
  return (
    <div className="overflow-hidden rounded-2xl bg-surface shadow-[0_20px_60px_rgba(16,24,40,0.15)]">
      <div className="flex items-center gap-2 border-b border-border bg-tint px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-coral/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-cyan-start/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
        <span className="ml-3 flex-1 truncate rounded-full bg-surface px-3 py-1 text-xs text-body">
          grandplazapenthouse.com
        </span>
      </div>

      <div className="relative h-72 w-full sm:h-80">
        <Image
          src="/images/portfolio/skyline-penthouse-mockup.jpg"
          alt="Preview of a direct booking website built by Design By Dial"
          fill
          sizes="(min-width: 1024px) 560px, 90vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink/75 via-transparent to-ink/40" />

        <div className="absolute inset-x-4 top-4 flex items-center justify-between text-white">
          <span className="font-display text-sm font-bold tracking-tight">
            Two-Story Penthouse
          </span>
          <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold backdrop-blur">
            2 beds · City View · Pool
          </span>
        </div>

        <div className="absolute inset-x-4 bottom-4">
          <p className="font-accent text-2xl font-bold text-white">$559</p>
          <p className="-mt-1 text-xs text-white/80">per night</p>
          <div className="mt-3 flex items-center gap-3">
            <div className="flex items-center gap-1.5 rounded-lg bg-white/15 px-3 py-2 text-xs font-medium text-white backdrop-blur">
              <Calendar className="h-3.5 w-3.5" />
              Aug 12 – Aug 16
            </div>
            <button
              type="button"
              tabIndex={-1}
              className="rounded-lg bg-coral px-4 py-2 text-xs font-semibold text-white"
            >
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
