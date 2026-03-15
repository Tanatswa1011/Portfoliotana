"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

const skillCategories = [
  {
    title: "Programming",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: ["Python", "SQL", "Linux", "Git"],
  },
  {
    title: "Data Engineering",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    skills: ["ETL Pipelines", "API Integration", "Data Validation", "Scheduling Workflows"],
  },
  {
    title: "Analytics & BI",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    skills: ["Power BI", "Tableau", "Exploratory Data Analysis", "KPI Dashboards"],
  },
  {
    title: "Systems & Tools",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    skills: ["PostgreSQL", "AWS EC2", "Flask", "Jira", "Confluence"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-accent-50/50 dark:bg-accent-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="mb-16">
            <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-2 tracking-wide uppercase">
              Skills
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-accent-900 dark:text-white">
              Technical Expertise
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={scaleIn}
                className="group p-6 rounded-xl bg-white dark:bg-accent-800/50 border border-accent-100 dark:border-accent-700/50 hover:border-primary-200 dark:hover:border-primary-700/50 transition-all hover:shadow-lg hover:shadow-primary-100/50 dark:hover:shadow-primary-900/20"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-accent-800 dark:text-accent-100 text-sm">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2.5 text-sm text-accent-600 dark:text-accent-300"
                    >
                      <div className="w-1 h-1 rounded-full bg-primary-400 dark:bg-primary-500 flex-shrink-0" />
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
