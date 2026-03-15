"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/30 dark:bg-primary-600/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-100/40 dark:bg-primary-700/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-100/20 to-primary-200/20 dark:from-primary-800/5 dark:to-primary-700/5 rounded-full blur-3xl"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(148,163,184,0.15)_1px,_transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,_rgba(51,65,85,0.3)_1px,_transparent_0)] bg-[size:40px_40px]" />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16"
    >
      <AnimatedBackground />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center"
      >
        <motion.div variants={fadeInUp} className="mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-200/50 dark:border-primary-700/30">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            Open to opportunities in Berlin, Germany
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-accent-900 dark:text-white leading-[1.1] mb-6"
        >
          Turning Data into{" "}
          <span className="gradient-text">Automated Intelligence</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-lg sm:text-xl text-accent-500 dark:text-accent-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Data Automation Analyst specializing in Python pipelines, ETL
          workflows, and analytics systems that transform raw data into reliable
          insights.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-primary-600/25 active:scale-[0.98]"
          >
            View Projects
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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-accent-800 text-accent-700 dark:text-accent-200 text-sm font-medium rounded-lg border border-accent-200 dark:border-accent-700 hover:border-accent-300 dark:hover:border-accent-600 transition-all hover:shadow-sm active:scale-[0.98]"
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
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-accent-600 dark:text-accent-300 text-sm font-medium rounded-lg hover:bg-accent-100/50 dark:hover:bg-accent-800/50 transition-all active:scale-[0.98]"
          >
            Contact Me
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-16 flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-accent-400 dark:text-accent-500"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
