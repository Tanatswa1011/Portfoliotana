import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { projects, siteConfig } from "@/lib/data";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Data Automation Analyst",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Berlin",
      addressCountry: "DE"
    },
    email: siteConfig.email,
    sameAs: [siteConfig.linkedin, siteConfig.website],
    knowsAbout: [
      "Python",
      "SQL",
      "ETL",
      "Business Intelligence",
      "Data Validation",
      "Analytics Automation"
    ],
    worksFor: {
      "@type": "Organization",
      name: "Kloeckner Metals"
    },
    hasPart: projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.shortDescription
    }))
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
