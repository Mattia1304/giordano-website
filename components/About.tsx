import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="about">

      <div className="about-image">

        <Image
          src="/images/villa.jpg"
          alt="Luxury Villa Dubai"
          width={900}
          height={1200}
          priority
        />

      </div>

      <div className="about-content">

        <span className="section-subtitle">
          ITALIAN CRAFTSMANSHIP
        </span>

        <h2>
          Luxury Renovation
          <br />
          Crafted Around You.
        </h2>

        <p>

          Giordano Building Contracting delivers bespoke renovation
          and fit-out solutions for villas, penthouses, luxury
          apartments and commercial spaces across Dubai.

        </p>

        <p>

          Our philosophy combines authentic Made in Italy materials,
          meticulous attention to detail and Italian project
          management to create timeless interiors.

        </p>

        <Link href="/about" className="button">
          Discover More
        </Link>

      </div>

    </section>
  );
}
