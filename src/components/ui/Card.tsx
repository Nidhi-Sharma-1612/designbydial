import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl bg-surface p-6 shadow-[0_1px_2px_rgba(16,24,40,0.06)] transition-shadow duration-200 hover:shadow-[0_8px_24px_rgba(16,24,40,0.08)] hover:ring-1 hover:ring-cyan-start/30",
        className
      )}
    >
      {children}
    </div>
  );
}
