"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute left-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-accent/10 blur-3xl dark:bg-accent-light/10"
          animate={{ x: [0, 25, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-12rem] right-[-10rem] h-96 w-96 rounded-full bg-slate-400/10 blur-3xl dark:bg-slate-200/10"
          animate={{ x: [0, -20, 0], y: [0, -15, 0] }}
          transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col px-4 pb-16 pt-20 sm:px-6 sm:pt-28">
        <motion.p
          className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent/75 dark:text-accent-light/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Berlin, Germany
        </motion.p>
        <motion.h1
          className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Turning Data into Automated Intelligence
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Data Automation Analyst specializing in Python pipelines, ETL workflows, and analytics
          systems that transform raw data into reliable insights.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="#projects"
            className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent/90"
          >
            View Projects
          </Link>
          <Link
            href="/cv.pdf"
            className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-accent/30 hover:text-accent dark:border-slate-700 dark:text-slate-100 dark:hover:border-accent-light/40 dark:hover:text-accent-light"
            download
          >
            Download CV
          </Link>
          <Link
            href="#contact"
            className="rounded-full border border-transparent px-5 py-3 text-sm font-semibold text-slate-700 transition hover:text-accent dark:text-slate-100 dark:hover:text-accent-light"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
