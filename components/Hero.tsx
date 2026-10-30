"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const lines = ["ITALIAN", "LUXURY", "RENOVATION"];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, delay, ease },
});

export default function Hero() {
  return (
    <section className="hero">

      <video autoPlay muted loop playsInline>

        <source src="/videos/hero.mp4" type="video/mp4" />

      </video>

      <div className="overlay" />

      <div className="heroContent">

        <motion.h3 {...fade(0.2)}>

          Giordano Building Contracting

        </motion.h3>

        <h1>

          {lines.map((line, i) => (

            <span className="heroLine" key={line}>

              <motion.span
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.3, delay: 0.35 + i * 0.14, ease }}
              >
                {line}
              </motion.span>

            </span>

          ))}

        </h1>

        <motion.p {...fade(1)}>

          Crafted in Italy.

          <br />

          Built in Dubai.

        </motion.p>

        <motion.div {...fade(1.2)}>

          <Link href="/contact" className="button">

            Request a consultation

          </Link>

        </motion.div>

      </div>

      <div className="scrollCue" aria-hidden="true">

        <span>Scroll</span>

        <span />

      </div>

    </section>
  );
}
