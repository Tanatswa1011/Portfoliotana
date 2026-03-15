import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MotionReveal } from "@/components/motion-reveal";
import { projectSlugs, projects } from "@/lib/data";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return {
      title: "Project not found"
    };
  }

  return {
    title: project.title,
    description: project.shortDescription
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="px-6 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <Link
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary"
            href="/#projects"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
        </MotionReveal>

        <MotionReveal delay={0.06}>
          <div className="mt-8 rounded-[2rem] border border-border/80 bg-card p-8 shadow-soft sm:p-12">
            <span className="inline-flex rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Detailed case study
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
              {project.overview}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div
                  className="rounded-2xl border border-border/70 bg-background/70 px-5 py-5 text-sm leading-7 text-muted-foreground"
                  key={metric}
                >
                  {metric}
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <MotionReveal delay={0.12}>
            <article className="rounded-[1.75rem] border border-border/80 bg-card p-8 shadow-soft sm:p-10">
              <div className="space-y-10">
                <section>
                  <h2 className="text-xl font-semibold text-foreground">Problem</h2>
                  <p className="mt-4 text-base leading-8 text-muted-foreground">
                    {project.problem}
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground">Approach</h2>
                  <ul className="mt-4 grid gap-3">
                    {project.approach.map((step) => (
                      <li
                        className="rounded-2xl border border-border/70 bg-background/70 px-5 py-4 text-base leading-7 text-muted-foreground"
                        key={step}
                      >
                        {step}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground">Outcome</h2>
                  <p className="mt-4 text-base leading-8 text-muted-foreground">
                    {project.outcome}
                  </p>
                </section>
              </div>
            </article>
          </MotionReveal>

          <MotionReveal delay={0.18}>
            <aside className="space-y-8">
              <div className="rounded-[1.75rem] border border-border/80 bg-card p-8 shadow-soft">
                <h2 className="text-xl font-semibold text-foreground">Tools used</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      className="rounded-full border border-border bg-background/70 px-3 py-2 text-sm text-muted-foreground"
                      key={tool}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-border/80 bg-card p-8 shadow-soft">
                <h2 className="text-xl font-semibold text-foreground">Key insights</h2>
                <ul className="mt-5 grid gap-3">
                  {project.keyInsights.map((insight) => (
                    <li
                      className="rounded-2xl border border-border/70 bg-background/70 px-5 py-4 text-sm leading-7 text-muted-foreground"
                      key={insight}
                    >
                      {insight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.75rem] border border-primary/15 bg-primary/5 p-8">
                <h2 className="text-xl font-semibold text-foreground">
                  Looking for similar work?
                </h2>
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  Explore the homepage for more projects, experience, and contact
                  options.
                </p>
                <Link
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:gap-3"
                  href="/#contact"
                >
                  Contact me
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </MotionReveal>
        </div>
      </div>
    </div>
  );
}
