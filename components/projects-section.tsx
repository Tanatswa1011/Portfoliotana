import { ProjectCard } from "@/components/project-card";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section className="px-6 py-24 lg:px-8" id="projects">
      <div className="mx-auto max-w-8xl space-y-12">
        <MotionReveal>
          <SectionHeading
            align="center"
            description="Selected work that reflects analytical thinking, process improvement, and practical implementation across pipelines, modeling, and reporting."
            eyebrow="Projects"
            title="Portfolio work tailored to analytics, automation, and data engineering roles"
          />
        </MotionReveal>

        <div className="grid gap-6 xl:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard index={index} key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
