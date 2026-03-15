"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const experiences = [
  {
    company: "Kloeckner Metals",
    location: "Berlin, Germany",
    role: "Data Analyst (Automation)",
    period: "Recent",
    achievements: [
      "Built Python ETL pipelines processing 200+ business documents monthly with automated ingestion, validation, and transformation workflows",
      "Automated document ingestion pipelines, replacing manual data entry processes and ensuring consistent data formatting across systems",
      "Integrated third-party APIs for document validation, enabling real-time verification and reducing error rates in downstream analytics",
      "Implemented data quality checks and monitoring for analytics systems, establishing reliable data foundations for business reporting",
      "Reduced manual reporting work by 15+ hours per week through scheduled automation and self-service dashboard delivery",
    ],
  },
  {
    company: "Ripples Pure Water",
    location: "Operations",
    role: "Operations & Data Analyst",
    period: "Previous",
    achievements: [
      "Automated reporting workflows that eliminated repetitive manual data collection and consolidation tasks",
      "Built forecasting models using historical data to support demand planning and resource allocation decisions",
      "Identified operational inefficiencies through data analysis, proposing and implementing process improvements that reduced turnaround times",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="mb-16">
            <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-2 tracking-wide uppercase">
              Experience
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-accent-900 dark:text-white">
              Professional Background
            </h2>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={fadeInUp}
                className="relative"
              >
                <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-accent-800/50 border border-accent-100 dark:border-accent-700/50 hover:border-primary-200/50 dark:hover:border-primary-700/30 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <div className="w-2 h-2 rounded-full bg-primary-500" />
                        <h3 className="text-lg font-semibold text-accent-900 dark:text-white">
                          {exp.role}
                        </h3>
                      </div>
                      <p className="text-sm text-accent-500 dark:text-accent-400 ml-5">
                        {exp.company} &middot; {exp.location}
                      </p>
                    </div>
                    <span className="text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full whitespace-nowrap self-start">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3 ml-5">
                    {exp.achievements.map((achievement, i) => (
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
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {index < experiences.length - 1 && (
                  <div className="hidden sm:block absolute left-8 -bottom-8 w-px h-8 bg-accent-200 dark:bg-accent-700" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
