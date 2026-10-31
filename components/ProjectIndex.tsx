"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";

export default function ProjectIndex() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  // Previews are only fetched once the pointer reaches the list.
  const [armed, setArmed] = useState(false);
  const preview = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  // Preview image trails the cursor with a little inertia.
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let raf = 0;
    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.14;
      pos.current.y += (target.current.y - pos.current.y) * 0.14;
      if (preview.current) {
        preview.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="projectIndex">

      <div className="indexHead">

        <h2>
          Timeless Spaces
        </h2>

      </div>

      <ul
        className="indexList"
        onMouseMove={(e) => {
          target.current = { x: e.clientX + 30, y: e.clientY - 120 };
        }}
        onMouseEnter={(e) => {
          target.current = { x: e.clientX + 30, y: e.clientY - 120 };
          pos.current = { ...target.current };
          setVisible(true);
          setArmed(true);
        }}
        onMouseLeave={() => setVisible(false)}
      >

        {projects.map((p, i) => (

          <li key={p.slug} onMouseEnter={() => setActive(i)}>

            <Link href={`/portfolio/${p.slug}`} onFocus={() => setActive(i)}>

              <span className="indexTitle">{p.title}</span>

              <span className="indexMeta">
                {p.category}
              </span>

              <Image
                className="indexThumb"
                src={p.hero}
                alt=""
                width={120}
                height={120}
                sizes="120px"
              />

            </Link>

          </li>

        ))}

      </ul>

      <div
        ref={preview}
        className={visible ? "indexPreview show" : "indexPreview"}
        aria-hidden="true"
      >

        {armed && projects.map((p, i) => (

          <Image
            key={p.slug}
            src={p.hero}
            alt=""
            fill
            sizes="28vw"
            className={i === active ? "on" : ""}
          />

        ))}

      </div>

      <div className="portfolio-more">

        <Link href="/portfolio" className="button">
          View All Projects
        </Link>

      </div>

    </section>
  );
}
