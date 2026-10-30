import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: `${project.title} | Giordano Building Contracting`,
    description: project.description,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: { images: [project.hero] },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const index = projects.findIndex((p) => p.slug === slug);

  if (index === -1) return notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Navbar />

      <main>

        <section className="projectHero">

          <Image
            src={project.hero}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="overlay" />

          <div className="heroText">

            <span>{project.category}</span>

            <h1>{project.title}</h1>

          </div>

        </section>

        <section className="projectDescription">

          <h2>Project Overview</h2>

          <p>{project.description}</p>

        </section>

        <section className="projectGallery">

          <Gallery images={project.gallery} title={project.title} />

        </section>

        <section className="projectNext">

          <span>NEXT PROJECT</span>

          <Link href={`/portfolio/${next.slug}`}>
            {next.title}
          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}
