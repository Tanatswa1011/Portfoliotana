"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import type { Project } from "@/data/projects";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-accent-900/80 backdrop-blur-lg border-b border-accent-200/50 dark:border-accent-700/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-accent-600 dark:text-accent-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Projects
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent-900 dark:text-white tracking-tight mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-accent-500 dark:text-accent-400 leading-relaxed">
                {project.subtitle}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-12">
              <p className="text-accent-600 dark:text-accent-300 leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            <div className="space-y-10">
              <motion.div
                variants={fadeInUp}
                className="p-6 sm:p-8 rounded-xl bg-accent-50 dark:bg-accent-800/50 border border-accent-100 dark:border-accent-700/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400">
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
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-accent-900 dark:text-white">
                    Problem
                  </h2>
                </div>
                <p className="text-accent-600 dark:text-accent-300 leading-relaxed">
                  {project.problem}
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="p-6 sm:p-8 rounded-xl bg-accent-50 dark:bg-accent-800/50 border border-accent-100 dark:border-accent-700/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
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
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-accent-900 dark:text-white">
                    Approach
                  </h2>
                </div>
                <p className="text-accent-600 dark:text-accent-300 leading-relaxed">
                  {project.approach}
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="p-6 sm:p-8 rounded-xl bg-accent-50 dark:bg-accent-800/50 border border-accent-100 dark:border-accent-700/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400">
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
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-accent-900 dark:text-white">
                    Tools Used
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white dark:bg-accent-700/50 text-accent-700 dark:text-accent-200 border border-accent-200 dark:border-accent-600"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100/50 dark:from-primary-900/20 dark:to-primary-800/10 border border-primary-200/50 dark:border-primary-700/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-accent-900 dark:text-white">
                    Outcome
                  </h2>
                </div>
                <p className="text-accent-600 dark:text-accent-300 leading-relaxed">
                  {project.outcome}
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="p-6 sm:p-8 rounded-xl bg-accent-50 dark:bg-accent-800/50 border border-accent-100 dark:border-accent-700/50"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400">
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
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-accent-900 dark:text-white">
                    Key Insights
                  </h2>
                </div>
                <ul className="space-y-3">
                  {project.insights.map((insight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-accent-600 dark:text-accent-300 leading-relaxed"
                    >
                      <svg
                        className="w-4 h-4 text-primary-500 dark:text-primary-400 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                      {insight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-16 pt-8 border-t border-accent-200 dark:border-accent-700"
            >
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors font-medium"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                View All Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
