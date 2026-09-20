"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollEngine() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Intersection Observer for Reveals
    const revealElements = document.querySelectorAll(".reveal");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            // Unobserve to run animation only once
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before the bottom
      }
    );

    // Initial check and observer assignment
    setTimeout(() => {
      const currentRevealElements = document.querySelectorAll(".reveal");
      currentRevealElements.forEach((el) => observer.observe(el));
    }, 100);

    // 2. Scroll Listener for Parallax Effects
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          document.documentElement.style.setProperty(
            "--scroll",
            window.scrollY.toString()
          );
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]); // Re-run effect when route changes to catch new elements

  return null;
}
