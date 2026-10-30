import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

const bySlug = (slug: string) => projects.find((p) => p.slug === slug)!;

// Photos scattered at different depths (data-speed) as the page scrolls.
const items = [
  { slug: "herringbone-parquet-residence", img: 0, left: "6%", top: "2%", w: "27vw", speed: 0.25 },
  { slug: "bespoke-staircases", img: 0, left: "58%", top: "6%", w: "19vw", speed: 0.7 },
  { slug: "stone-and-marble-bathrooms", img: 0, left: "33%", top: "26%", w: "22vw", speed: 0.45 },
  { slug: "private-villa-design", img: 0, left: "68%", top: "34%", w: "26vw", speed: 0.95 },
  { slug: "facade-renovation", img: 0, left: "5%", top: "50%", w: "21vw", speed: 0.6 },
  { slug: "designer-interiors", img: 0, left: "40%", top: "60%", w: "30vw", speed: 0.3 },
  { slug: "stone-and-marble-bathrooms", img: 3, left: "76%", top: "70%", w: "17vw", speed: 0.55 },
];

export default function Collage() {
  return (
    <section className="collage" data-theme="stone">

      <div className="collageTitle">

        <h2>
          Details that
          <br />
          make the difference
        </h2>

      </div>

      <div className="collageStage">

        {items.map((it, i) => {
          const project = bySlug(it.slug);
          const image = project.gallery[it.img] ?? project.gallery[0];

          return (
            <Link
              key={i}
              href={`/portfolio/${project.slug}`}
              className="collageItem"
              data-speed={it.speed}
              data-cursor="view"
              style={{ left: it.left, top: it.top, width: it.w }}
            >

              <i className="collageDash" />

              <Image
                src={image.src}
                alt={project.title}
                width={image.width}
                height={image.height}
                sizes="(max-width: 768px) 50vw, 30vw"
              />

              <span>{project.category}</span>

            </Link>
          );
        })}

      </div>

    </section>
  );
}
