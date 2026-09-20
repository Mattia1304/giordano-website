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

        <div className="pageHeroContent reveal active">
          <span className="reveal active">ABOUT US</span>

          <h1 className="reveal delay-1 active">Italian Excellence
            <br />
            Built in Dubai
          </h1>
        </div>
      </section>

      <section className="aboutCompany">

        <div>

          <span className="section-subtitle reveal">WHO WE ARE

          </span>

          <h2 className="reveal delay-1">Luxury Renovation Specialists</h2>

          <p className="reveal delay-2">Giordano Building Contracting is an Italian building
            company based in Dubai, specializing in luxury
            renovations, premium fit-out and bespoke interior
            solutions.

          </p>

          <p className="reveal delay-3">We combine Italian craftsmanship with modern
            construction techniques to deliver exceptional
            projects throughout the UAE.

          </p>

        </div>

        <div>

          <Image className="reveal delay-4 parallax-bg" src="/images/about/company.jpg"
            width={800}
            height={1000}
            alt="Company"
          />

        </div>

      </section>

      <section className="values">

        <span className="section-subtitle reveal">OUR VALUES

        </span>

        <h2 className="reveal delay-1">What Defines Our Work</h2>

        <div className="valuesGrid">

          <div>

            <h3 className="reveal delay-1">Italian Craftsmanship</h3>

            <p>

              Every detail reflects the quality and elegance
              of Made in Italy.

            </p>

          </div>

          <div>

            <h3 className="reveal delay-2">Premium Materials</h3>

            <p>

              Carefully selected finishes from leading
              Italian manufacturers.

            </p>

          </div>

          <div>

            <h3 className="reveal delay-3">Project Management</h3>

            <p>

              Dedicated coordination from concept
              to completion.

            </p>

          </div>

          <div>

            <h3 className="reveal delay-4">Turnkey Delivery</h3>

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

