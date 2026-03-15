import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <AnimatedSection id="experience" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        label="Experience"
        title="Operational impact through automation and analytics"
      />
      <div className="space-y-6">
        {experiences.map((item) => (
          <article
            key={`${item.company}-${item.role}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                {item.role}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{item.period}</p>
            </div>
            <p className="mt-1 text-sm font-medium text-accent dark:text-accent-light">
              {item.company} — {item.location}
            </p>
            <ul className="mt-5 grid gap-3">
              {item.achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="relative pl-4 text-sm leading-relaxed text-slate-600 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent dark:text-slate-300 dark:before:bg-accent-light"
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
