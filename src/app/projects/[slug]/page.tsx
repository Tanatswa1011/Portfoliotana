import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/portfolio";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) {
    return {
      title: "Project not found"
    };
  }

  return {
    title: `${project.title} | Project Case Study`,
    description: project.summary
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 dark:bg-slate-950 sm:px-6">
      <div className="mx-auto w-full max-w-4xl">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:gap-3 dark:text-accent-light"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {project.summary}
          </p>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Problem</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {project.problem}
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Approach</h2>
            <ul className="mt-3 grid gap-2">
              {project.approach.map((step) => (
                <li
                  key={step}
                  className="relative pl-4 text-sm leading-relaxed text-slate-600 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent dark:text-slate-300 dark:before:bg-accent-light"
                >
                  {step}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tools Used</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-300"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Outcome</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {project.outcome}
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Key Insights</h2>
            <ul className="mt-3 grid gap-2">
              {project.insights.map((insight) => (
                <li
                  key={insight}
                  className="relative pl-4 text-sm leading-relaxed text-slate-600 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent dark:text-slate-300 dark:before:bg-accent-light"
                >
                  {insight}
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
}
