import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function PortfolioGrid() {
  return (
    <section className="portfolioGrid">

      {projects.map((project) => (

        <Link
          href={`/portfolio/${project.slug}`}
          className="portfolioItem"
          key={project.slug}
        >

          <div className="imageWrapper">

            <Image
              src={project.hero}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              alt={project.title}
              className="object-cover"
            />

          </div>

          <div className="portfolioInfo">

            <p>
              {project.category}, {project.gallery.length} photos
            </p>

            <h3>{project.title}</h3>

          </div>

        </Link>

      ))}

    </section>
  );
}
