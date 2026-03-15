import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MotionReveal } from "@/components/motion-reveal";
import type { Project } from "@/lib/data";

export function ProjectCard({
  project,
  index
}: {
  project: Project;
  index: number;
}) {
  return (
    <MotionReveal delay={index * 0.08}>
      <Link
        className="group block h-full rounded-[1.75rem] border border-border/80 bg-card p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary/30"
        href={`/projects/${project.slug}`}
      >
        <div className="flex items-start justify-between gap-4">
          <span className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Featured project
          </span>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-primary" />
        </div>

        <h3 className="mt-8 text-2xl font-semibold tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          {project.shortDescription}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tools.slice(0, 4).map((tool) => (
            <span
              className="rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs text-muted-foreground"
              key={tool}
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div
              className="rounded-2xl border border-border/70 bg-background/70 px-4 py-4 text-sm text-muted-foreground"
              key={metric}
            >
              {metric}
            </div>
          ))}
        </div>
      </Link>
    </MotionReveal>
  );
}
