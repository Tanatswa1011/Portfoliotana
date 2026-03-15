import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectDetail from "./ProjectDetail";

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Data Automation Portfolio`,
    description: project.subtitle,
    openGraph: {
      title: project.title,
      description: project.subtitle,
      type: "article",
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
