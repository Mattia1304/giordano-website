import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Services | Giordano Building Contracting",
  description:
    "Turnkey Italian luxury renovation in Dubai for villas, apartments, restaurants, hotels, retail and offices.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <section className="pageHero">
        <Image
          src="/images/about/about-hero.jpg"
          alt="Italian luxury renovation services in Dubai"
          fill
          priority
          className="object-cover"
        />

        <div className="pageOverlay" />

        <div className="pageHeroContent">
          <span>OUR SERVICES</span>

          <h1>
            Turnkey Renovation
            <br />
            For Every Space
          </h1>
        </div>
      </section>

      <Services />
      <CTA />
      <Footer />
    </>
  );
}
