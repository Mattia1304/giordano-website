"use client";

import { useEffect, useRef } from "react";

// Soft gold ring that follows the pointer; grows over links and project images.
export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const el = ring.current;
    if (!el) return;

    const target = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      el.classList.add("on");

      const t = e.target as HTMLElement | null;
      const view = !!t?.closest("[data-cursor='view']");
      const link = !!t?.closest("a, button, input, textarea");
      el.classList.toggle("view", view);
      el.classList.toggle("link", link && !view);
    };
    const onLeave = () => el.classList.remove("on");

    const loop = () => {
      pos.x += (target.x - pos.x) * 0.2;
      pos.y += (target.y - pos.y) * 0.2;
      el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={ring} className="cursorRing" aria-hidden="true">
      <span>View</span>
    </div>
  );
}
