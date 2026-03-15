import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section className="px-6 py-24 lg:px-8" id="experience">
      <div className="mx-auto max-w-8xl space-y-12">
        <MotionReveal>
          <SectionHeading
            description="Professional experience centered on workflow automation, operational analytics, and data systems that support day-to-day business decisions."
            eyebrow="Experience"
            title="Applied analytics experience in operations and automation"
          />
        </MotionReveal>

        <div className="space-y-6">
          {experience.map((item, index) => (
            <MotionReveal delay={index * 0.08} key={`${item.company}-${item.role}`}>
              <article className="rounded-[1.75rem] border border-border/80 bg-card p-8 shadow-soft sm:p-10">
                <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                      {item.period}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                      {item.role}
                    </h3>
                    <p className="mt-2 text-base text-muted-foreground">
                      {item.company} - {item.location}
                    </p>
                    <p className="mt-5 text-base leading-7 text-muted-foreground">
                      {item.summary}
                    </p>
                  </div>

                  <div className="lg:max-w-xl">
                    <ul className="grid gap-3">
                      {item.achievements.map((achievement) => (
                        <li
                          className="rounded-2xl border border-border/70 bg-background/70 px-5 py-4 text-sm leading-7 text-muted-foreground sm:text-base"
                          key={achievement}
                        >
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
