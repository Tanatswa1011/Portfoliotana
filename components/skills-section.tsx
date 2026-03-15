import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { skillCategories } from "@/lib/data";

export function SkillsSection() {
  return (
    <section className="px-6 py-24 lg:px-8" id="skills">
      <div className="mx-auto max-w-8xl space-y-12">
        <MotionReveal>
          <SectionHeading
            align="center"
            description="A focused toolkit for building robust automation workflows, analytical systems, and decision-ready reporting."
            eyebrow="Skills"
            title="Tools used across data workflows and business analytics"
          />
        </MotionReveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <MotionReveal delay={index * 0.08} key={category.title}>
              <article className="h-full rounded-[1.75rem] border border-border/80 bg-card p-8 shadow-soft">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-7 text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        className="group rounded-2xl border border-border/70 bg-background/70 p-5 transition hover:-translate-y-1 hover:border-primary/30"
                        key={skill.name}
                      >
                        <div className="flex items-center gap-4">
                          <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className="text-sm font-medium text-foreground sm:text-base">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
