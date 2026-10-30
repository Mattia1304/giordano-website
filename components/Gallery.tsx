"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { ProjectImage } from "@/data/projects";

export default function Gallery({
  images,
  title,
}: {
  images: ProjectImage[];
  title: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) =>
      setOpen((i) => (i === null ? i : (i + d + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (open === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  return (
    <>
      <div className="gallery">

        {images.map((img, i) => (

          <button
            key={img.src}
            type="button"
            className="galleryItem"
            onClick={() => setOpen(i)}
            aria-label={`Open photo ${i + 1} of ${images.length}`}
          >

            <Image
              src={img.src}
              alt={`${title} - photo ${i + 1}`}
              width={img.width}
              height={img.height}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

          </button>

        ))}

      </div>

      {open !== null && (

        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} gallery`}
          onClick={close}
        >

          <button
            type="button"
            className="lightboxClose"
            onClick={close}
            aria-label="Close"
          >
            ×
          </button>

          <button
            type="button"
            className="lightboxNav prev"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
          >
            ‹
          </button>

          <Image
            key={images[open].src}
            src={images[open].src}
            alt={`${title} - photo ${open + 1}`}
            width={images[open].width}
            height={images[open].height}
            sizes="100vw"
            className="lightboxImage"
            onClick={(e) => e.stopPropagation()}
            priority
          />

          <button
            type="button"
            className="lightboxNav next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
          >
            ›
          </button>

          <span className="lightboxCount">
            {open + 1} / {images.length}
          </span>

        </div>

      )}
    </>
  );
}
