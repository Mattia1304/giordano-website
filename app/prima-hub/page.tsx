import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function PrimaHub() {
  return (
    <>
      <Navbar />

      {/* HERO */}

      <section className="primaHero">

        <Image
          src="/images/prima/hero.jpg"
          alt="PRIMA HUB Dubai"
          fill
          priority
          className="object-cover"
        />

        <div className="pageOverlay"/>

        <div className="heroContent reveal active">

          <Image
            src="/logos/primahub.png"
            alt="PRIMA HUB"
            width={300}
            height={100}
            className="primaLogo reveal delay-1 active"
          />

          <h1 className="reveal delay-2 active">

            Exclusive Italian

            <br/>

            Showroom Partner

          </h1>

          <p className="reveal delay-3 active">JLT Cluster T • Dubai

          </p>

        </div>

      </section>

      {/* INTRO */}

      <section className="primaIntro">

        <div>

          <span className="section-subtitle reveal">MADE IN ITALY

          </span>

          <h2 className="reveal delay-1">The Finest Italian

            Interior Materials

          </h2>

          <p className="reveal delay-2">Through our partnership with PRIMA HUB,
            Giordano Building Contracting offers direct
            access to premium Italian finishes for
            luxury residential and commercial projects.

          </p>

          <p className="reveal delay-3">Every product is selected for quality,
            design and long-term durability,
            ensuring exceptional results.

          </p>

        </div>

        <div>

          <Image className="reveal delay-4 parallax-bg" src="/images/prima/showroom.jpg"

            width={900}

            height={1000}

            alt="Showroom"

          />

        </div>

      </section>

      {/* CATEGORIES */}

      <section className="categories">

        <span className="section-subtitle reveal">MATERIALS

        </span>

        <h2 className="reveal delay-1">Italian Collections

        </h2>

        <div className="categoryGrid">

          <div className="categoryCard reveal delay-1">

            <Image src="/images/materials/marble.jpg" alt="Marble" width={600} height={600} />

            <h3>Marble</h3>

          </div>

          <div className="categoryCard reveal delay-1">

            <Image src="/images/materials/bathroom.jpg" alt="Bathrooms" width={600} height={600} />

            <h3>Bathrooms</h3>

          </div>

          <div className="categoryCard reveal delay-1">

            <Image src="/images/materials/kitchen.jpg" alt="Kitchens" width={600} height={600} />

            <h3>Kitchens</h3>

          </div>

          <div className="categoryCard reveal delay-1">

            <Image src="/images/materials/parquet.jpg" alt="Wood Flooring" width={600} height={600} />

            <h3>Wood Flooring</h3>

          </div>

          <div className="categoryCard reveal delay-1">

            <Image src="/images/materials/lighting.jpg" alt="Lighting" width={600} height={600} />

            <h3>Lighting</h3>

          </div>

          <div className="categoryCard reveal delay-1">

            <Image src="/images/materials/doors.jpg" alt="Doors" width={600} height={600} />

            <h3>Doors</h3>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="primaCTA">

        <h2 className="reveal">Visit PRIMA HUB

        </h2>

        <p className="reveal delay-1">Discover the finest Italian materials in Dubai.

        </p>

        <a href="/contact" className="button reveal delay-2"
        >

          Book Your Visit

        </a>

      </section>

      <Footer/>

    </>
  );
}

