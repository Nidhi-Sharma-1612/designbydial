import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/cn";
import type { PortfolioProject } from "@/content/types";

// Full-page screenshot that scrolls top-to-bottom while the parent `.group` is hovered.
// Animating `top` 0 → 100% alongside `translate` 0 → -100% lands the image's bottom
// edge exactly on the frame's bottom edge, whatever the frame or page height.
export function ScrollPreview({
  project,
  sizes,
  className,
}: {
  project: PortfolioProject;
  sizes: string;
  className?: string;
}) {
  const image = project.scrollImage;

  return (
    <div className={cn("relative w-full overflow-hidden bg-tint", className)}>
      {image ? (
        <>
          <Image
            src={image.src}
            alt={`Full page preview of the ${project.projectName} website`}
            width={image.width}
            height={image.height}
            sizes={sizes}
            className="absolute inset-x-0 top-0 h-auto w-full translate-y-0 transition-[top,translate] duration-700 ease-out group-hover:top-full group-hover:-translate-y-full group-hover:duration-7000 group-hover:ease-linear motion-reduce:transition-none"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-ink/15 to-transparent" />
          <span className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-surface/90 px-2.5 py-1 text-[11px] font-medium text-body shadow-sm backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0">
            <ArrowDown className="h-3 w-3" />
            Hover to scroll
          </span>
        </>
      ) : (
        <Image
          src={project.heroImage}
          alt={project.projectName}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      )}
    </div>
  );
}
