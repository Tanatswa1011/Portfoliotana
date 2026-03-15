import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { aboutHighlights } from "@/lib/data";

export function AboutSection() {
  return (
    <section className="px-6 py-24 lg:px-8" id="about">
      <div className="mx-auto grid max-w-8xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <MotionReveal>
          <SectionHeading
            description="A practical analytics profile shaped by engineering discipline, business context, and a strong focus on systems that reduce manual work."
            eyebrow="About"
            title="Building reliable data workflows with a business mindset"
          />
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <div className="rounded-[1.75rem] border border-border/80 bg-card p-8 shadow-soft sm:p-10">
            <p className="text-lg leading-8 text-muted-foreground">
              With a background in Computer Science, I enjoy solving business
              problems through well-structured data systems. My work has focused
              on Python automation, ETL workflows, and analytics processes that
              help teams spend less time on manual tasks and more time acting on
              trustworthy information.
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              I am especially interested in the space between analytics and
              engineering: building scalable pipelines, improving operational
              reporting, and creating data foundations that make future analysis
              easier and more dependable.
            </p>

            <div className="mt-8 grid gap-4">
              {aboutHighlights.map((highlight, index) => (
                <div
                  className="rounded-2xl border border-border/70 bg-background/70 p-5"
                  key={highlight}
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                      {highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
