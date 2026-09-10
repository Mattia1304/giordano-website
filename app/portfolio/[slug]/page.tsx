import { projects } from "@/data/projects";
import Image from "next/image";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export const runtime = 'edge';

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main>

      <section className="projectHero">

        <Image
          src={project.hero}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />

        <div className="overlay" />

        <div className="heroText">

          <span>{project.category}</span>

          <h1>{project.title}</h1>

          <p>{project.location}</p>

        </div>

      </section>

      <section className="projectInfo">

        <div>

          <h3>Surface</h3>

          <p>{project.surface}</p>

        </div>

        <div>

          <h3>Duration</h3>

          <p>{project.duration}</p>

        </div>

        <div>

          <h3>Completion</h3>

          <p>{project.year}</p>

        </div>

      </section>

      <section className="projectDescription">

        <h2>Project Overview</h2>

        <p>{project.description}</p>

      </section>

    </main>
  );
}
