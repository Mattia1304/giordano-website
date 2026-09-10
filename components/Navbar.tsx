"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="logo relative w-40 h-12 md:w-48 md:h-16">
        <Image 
          src="/logos/giordano.png" 
          alt="Giordano Building Contracting" 
          fill
          className="object-contain"
        />
      </div>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Projects</Link>
        <Link href="/prima-hub">PRIMA HUB</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <a
        className="button hidden lg:block"
        href="https://wa.me/971582369969"
        target="_blank"
      >
        Book Consultation
      </a>
      
      <MobileMenu />
    </header>
  );
}
