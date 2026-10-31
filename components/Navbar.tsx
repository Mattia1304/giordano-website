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
      <Link href="/" className="logo" aria-label="Giordano Building Contracting, home">
        <Image
          src="/logos/giordano-logo.png"
          alt="Giordano Building Contracting"
          width={360}
          height={278}
          sizes="120px"
          priority
        />
      </Link>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Projects</Link>
        <Link href="/prima-hub">PRIMA HUB</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <a
        className="button navCta"
        href="https://wa.me/971582369969"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book a consultation
      </a>
      
      <MobileMenu />
    </header>
  );
}
