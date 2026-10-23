import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/lib/data/projects";
import { ProjectDetail } from "@/components/project/ProjectDetail";
import { SITE_URL } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} | ${project.slug === "gymadmin" ? "Gestión de gimnasios" : "Caso de desarrollo"}`,
    description: project.tagline,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.name} | Gabriel González`,
      description: project.tagline,
      url: `${SITE_URL}/projects/${project.slug}`,
      type: "website",
      locale: "es_AR",
      images: [{ url: project.cover?.src || "/opengraph-image", alt: project.cover?.alt || `${project.name} | Gabriel González` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Gabriel González`,
      description: project.tagline,
      images: [project.cover?.src || "/opengraph-image"],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
