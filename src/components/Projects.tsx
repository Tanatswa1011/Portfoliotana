"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 sm:py-32 bg-accent-50/50 dark:bg-accent-900/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="mb-16">
            <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-2 tracking-wide uppercase">
              Projects
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-accent-900 dark:text-white">
              Featured Work
            </h2>
            <p className="mt-4 text-accent-500 dark:text-accent-400 max-w-2xl">
              Selected projects demonstrating data pipeline engineering,
              analytical problem-solving, and automation capabilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.div key={project.id} variants={scaleIn}>
                <Link
                  href={`/projects/${project.id}`}
                  className="group block h-full"
                >
                  <div className="h-full p-6 sm:p-8 rounded-xl bg-white dark:bg-accent-800/50 border border-accent-100 dark:border-accent-700/50 hover:border-primary-200 dark:hover:border-primary-700/50 transition-all hover:shadow-lg hover:shadow-primary-100/50 dark:hover:shadow-primary-900/20">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-2.5 rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                          />
                        </svg>
                      </div>
                      <svg
                        className="w-5 h-5 text-accent-400 group-hover:text-primary-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 17L17 7M17 7H7M17 7v10"
                        />
                      </svg>
                    </div>

                    <h3 className="text-lg font-semibold text-accent-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-accent-500 dark:text-accent-400 mb-5 leading-relaxed">
                      {project.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-accent-100 dark:bg-accent-700/50 text-accent-600 dark:text-accent-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
