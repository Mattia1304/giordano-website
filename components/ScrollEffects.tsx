"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";
import Lenis from "lenis";

export default function ScrollEffects() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  // Scroll-linked effects: hero zoom/fade and image parallax.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const hero = document.querySelector<HTMLElement>(".hero");
    const frames = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".about-image, .luxury > div:first-child"
      )
    );
    const floats = Array.from(
      document.querySelectorAll<HTMLElement>("[data-speed]")
    );
    const themed = Array.from(
      document.querySelectorAll<HTMLElement>("[data-theme]")
    );
    let raf = 0;

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;

      if (hero) {
        const p = Math.min(Math.max(window.scrollY / hero.offsetHeight, 0), 1);
        hero.style.setProperty("--hero-p", p.toFixed(3));
      }

      frames.forEach((f) => {
        const r = f.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        const progress = (r.top + r.height / 2 - vh / 2) / vh; // -1..1
        const img = f.querySelector<HTMLElement>("img");
        img?.style.setProperty("--par", (progress * -50).toFixed(1));
      });

      // Floating elements drift at their own speed (depth).
      floats.forEach((el) => {
        const parent = el.parentElement;
        if (!parent) return;
        const pr = parent.getBoundingClientRect();
        if (pr.bottom < -200 || pr.top > vh + 200) return;
        const progress = (pr.top + pr.height / 2 - vh / 2) / vh;
        const speed = parseFloat(el.dataset.speed || "0");
        el.style.setProperty("--fy", (progress * speed * -110).toFixed(1));
      });

      // Page background follows the section in the middle of the screen.
      let theme = "";
      for (const s of themed) {
        const r = s.getBoundingClientRect();
        if (r.top <= vh * 0.5 && r.bottom >= vh * 0.5) {
          theme = s.dataset.theme || "";
          break;
        }
      }
      if (document.body.dataset.theme !== theme) {
        if (theme) document.body.dataset.theme = theme;
        else delete document.body.dataset.theme;
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      delete document.body.dataset.theme;
    };
  }, [pathname]);

  // Smooth, inertial scrolling (same feel as high-end showcase sites).
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.95 });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return <motion.div className="scrollProgress" style={{ scaleX }} />;
}
