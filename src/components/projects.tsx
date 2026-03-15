"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <AnimatedSection id="projects" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        label="Projects"
        title="Selected analytics and automation case studies"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <motion.article
            key={project.slug}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {project.summary}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-300"
                >
                  {tool}
                </li>
              ))}
            </ul>
            <Link
              href={`/projects/${project.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition group-hover:gap-3 dark:text-accent-light"
            >
              View case study <ArrowRight size={16} />
            </Link>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}
