import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <AnimatedSection id="skills" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        label="Skills"
        title="A balanced toolkit across analytics, automation, and systems"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((category) => (
          <article
            key={category.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-0.5 dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{category.title}</h3>
            <ul className="mt-5 grid gap-3">
              {category.skills.map((skill) => (
                <li key={skill.label} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <skill.icon className="h-4 w-4 text-accent dark:text-accent-light" />
                  <span>{skill.label}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
