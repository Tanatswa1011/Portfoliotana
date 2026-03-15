import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { aboutParagraphs } from "@/data/portfolio";

export function About() {
  return (
    <AnimatedSection id="about" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        label="About"
        title="Building dependable data systems for daily operations"
        description="I focus on practical data automation work that helps teams move faster with fewer manual steps."
      />
      <div className="grid gap-4 md:max-w-3xl">
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph} className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {paragraph}
          </p>
        ))}
      </div>
    </AnimatedSection>
  );
}
