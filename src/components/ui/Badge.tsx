import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
  dot,
}: {
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-cyan-start/30 bg-cyan-start/10 px-3 py-1 text-xs font-semibold text-cyan-end",
        className
      )}
    >
      {dot && (
        <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-cyan-start" />
      )}
      {children}
    </span>
  );
}
