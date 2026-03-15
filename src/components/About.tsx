"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="mb-16">
            <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-2 tracking-wide uppercase">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-accent-900 dark:text-white">
              Background & Motivation
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <motion.div variants={slideInLeft} className="space-y-6">
              <p className="text-accent-600 dark:text-accent-300 leading-relaxed">
                With a foundation in Computer Science, I have spent the past
                years building systems that bridge the gap between raw data and
                actionable business intelligence. My work focuses on designing
                Python-based automation that eliminates repetitive manual
                processes and creates reliable, scalable data pipelines.
              </p>
              <p className="text-accent-600 dark:text-accent-300 leading-relaxed">
                At Kloeckner Metals in Berlin, I built ETL pipelines that
                process hundreds of business documents monthly, integrated
                third-party APIs for automated document validation, and
                implemented data quality frameworks that support downstream
                analytics. These systems reduced manual reporting effort by over
                15 hours per week.
              </p>
              <p className="text-accent-600 dark:text-accent-300 leading-relaxed">
                I am driven by a straightforward belief: data should work for
                the business, not the other way around. Whether it is automating
                a repetitive workflow, building a dashboard that surfaces the
                right KPIs, or designing a pipeline that ensures data quality at
                every step &mdash; I focus on solutions that are practical,
                maintainable, and genuinely useful.
              </p>
            </motion.div>

            <motion.div variants={slideInRight} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "200+", label: "Documents processed monthly" },
                  { value: "15+", label: "Hours saved per week" },
                  { value: "30k+", label: "Text records analyzed" },
                  { value: "3+", label: "Years of experience" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-5 rounded-xl bg-accent-50 dark:bg-accent-800/50 border border-accent-100 dark:border-accent-700/50"
                  >
                    <p className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-accent-500 dark:text-accent-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100/50 dark:from-primary-900/20 dark:to-primary-800/10 border border-primary-200/50 dark:border-primary-700/30">
                <p className="text-sm font-medium text-primary-700 dark:text-primary-300 mb-2">
                  Current Focus
                </p>
                <p className="text-sm text-accent-600 dark:text-accent-400 leading-relaxed">
                  Seeking opportunities in Data Analytics, Business
                  Intelligence, and Data Automation roles in Berlin. Particularly
                  interested in positions where I can combine Python engineering
                  with analytical problem-solving to deliver measurable business
                  impact.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
