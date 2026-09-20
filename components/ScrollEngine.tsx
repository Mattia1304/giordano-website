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
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Initial check
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    // Watch for DOM changes to observe new elements (crucial for Next.js navigation)
    const mutationObserver = new MutationObserver(() => {
      document.querySelectorAll(".reveal:not(.active)").forEach((el) => {
        observer.observe(el);
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // 2. Scroll Listener for Parallax Effects
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          document.documentElement.style.setProperty("--scroll", window.scrollY.toString());
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]); // Re-run effect when route changes to catch new elements

  return null;
}
