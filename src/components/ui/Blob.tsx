import { cn } from "@/lib/cn";

export function Blob({
  className,
  color = "cyan",
}: {
  className?: string;
  color?: "cyan" | "coral";
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "blob",
        color === "cyan" ? "bg-cyan-start/25" : "bg-coral/20",
        className
      )}
    />
  );
}
