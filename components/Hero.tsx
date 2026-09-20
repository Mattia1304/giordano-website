"use client";

export default function Hero() {
  return (
    <section className="hero overflow-hidden">
      <video autoPlay muted loop playsInline className="scale-scroll">
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="overlay" />

      <div className="heroContent">
        <h3 className="reveal delay-1">
          GIORDANO BUILDING CONTRACTING
        </h3>
        <h1 className="reveal delay-2">
          ITALIAN
          <br />
          LUXURY
          <br />
          RENOVATION
        </h1>
        <p className="reveal delay-3">
          Crafted in Italy.
          <br />
          Built in Dubai.
        </p>
        <a href="/contact" className="button reveal delay-4">
          REQUEST A CONSULTATION
        </a>
      </div>
    </section>
  );
}
