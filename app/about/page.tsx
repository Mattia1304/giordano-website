import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <section className="pageHero">
        <Image
          src="/images/about/about-hero.jpg"
          alt="Italian Luxury Renovation"
          fill
          priority
          className="object-cover"
        />

        <div className="pageOverlay" />

        <div className="pageHeroContent">
          <span>ABOUT US</span>

          <h1>
            Italian Excellence
            <br />
            Built in Dubai
          </h1>
        </div>
      </section>

      <section className="aboutCompany">

        <div>

          <span className="section-subtitle">

            WHO WE ARE

          </span>

          <h2>

            Luxury Renovation
            Specialists

          </h2>

          <p>

            Giordano Building Contracting is an Italian building
            company based in Dubai, specializing in luxury
            renovations, premium fit-out and bespoke interior
            solutions.

          </p>

          <p>

            We combine Italian craftsmanship with modern
            construction techniques to deliver exceptional
            projects throughout the UAE.

          </p>

        </div>

        <div>

          <Image
            src="/images/about/company.jpg"
            width={800}
            height={1000}
            alt="Company"
          />

        </div>

      </section>

      <section className="values">

        <span className="section-subtitle">

          OUR VALUES

        </span>

        <h2>

          What Defines Our Work

        </h2>

        <div className="valuesGrid">

          <div>

            <h3>Italian Craftsmanship</h3>

            <p>

              Every detail reflects the quality and elegance
              of Made in Italy.

            </p>

          </div>

          <div>

            <h3>Premium Materials</h3>

            <p>

              Carefully selected finishes from leading
              Italian manufacturers.

            </p>

          </div>

          <div>

            <h3>Project Management</h3>

            <p>

              Dedicated coordination from concept
              to completion.

            </p>

          </div>

          <div>

            <h3>Turnkey Delivery</h3>

            <p>

              One trusted partner for every phase
              of your renovation.

            </p>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}
