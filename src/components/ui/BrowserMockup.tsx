import Image from "next/image";

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

      <div className="group relative h-72 w-full overflow-hidden sm:h-80">
        <Image
          src="/images/portfolio/grandplaza-scroll.jpg"
          alt="Full page preview of a direct booking website built by Design By Dial, scrolling to reveal the entire page on hover"
          width={900}
          height={2487}
          sizes="(min-width: 1024px) 560px, 90vw"
          className="absolute inset-x-0 bottom-[calc(420.64px-276.33vw)] h-auto w-full transition-[bottom] duration-5000 ease-in-out group-hover:bottom-0 sm:bottom-[calc(452.64px-276.33vw)] lg:bottom-[calc(474.75px-138.1667vw)] xl:bottom-[-1293.79px]"
          priority
        />
      </div>
    </div>
  );
}
