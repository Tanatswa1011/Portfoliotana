import { CalendarDays, Download, Linkedin, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/data";

const contactLinks = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    external: false
  },
  {
    label: "LinkedIn",
    value: "Professional profile",
    href: siteConfig.linkedin,
    icon: Linkedin,
    external: true
  },
  {
    label: "Download CV",
    value: "PDF resume",
    href: siteConfig.cvPath,
    icon: Download,
    external: false,
    download: true
  },
  {
    label: "Calendly",
    value: "Book an intro call",
    href: siteConfig.calendly,
    icon: CalendarDays,
    external: true
  }
];

export function ContactSection() {
  return (
    <section className="px-6 py-24 lg:px-8" id="contact">
      <div className="mx-auto grid max-w-8xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <MotionReveal>
          <SectionHeading
            description="Open to opportunities across data analytics, BI, automation, and entry-level data engineering in Germany."
            eyebrow="Contact"
            title="Let's discuss roles, projects, or the next analytical challenge"
          />

          <div className="mt-8 grid gap-4">
            {contactLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  className="rounded-[1.5rem] border border-border/80 bg-card p-5 shadow-soft transition hover:-translate-y-1 hover:border-primary/30"
                  download={item.download}
                  href={item.href}
                  key={item.label}
                  rel={item.external ? "noreferrer" : undefined}
                  target={item.external ? "_blank" : undefined}
                >
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="mt-1 text-base font-medium text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </MotionReveal>

        <MotionReveal delay={0.12}>
          <ContactForm recipientEmail={siteConfig.email} />
        </MotionReveal>
      </div>
    </section>
  );
}
