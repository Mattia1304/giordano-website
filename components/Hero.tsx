"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">

      <video autoPlay muted loop playsInline>

        <source src="/videos/hero.mp4" type="video/mp4" />

      </video>

      <div className="overlay" />

      <motion.div

        className="heroContent"

        initial={{ opacity: 0, y: 80 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{ duration: 1 }}

      >

        <h3>

          GIORDANO BUILDING CONTRACTING

        </h3>

        <h1>

          ITALIAN

          <br />

          LUXURY

          <br />

          RENOVATION

        </h1>

        <p>

          Crafted in Italy.

          <br />

          Built in Dubai.

        </p>

        <a href="/contact" className="button">

          REQUEST A CONSULTATION

        </a>

      </motion.div>

    </section>
  );
}
