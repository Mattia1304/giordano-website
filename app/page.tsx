import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Luxury from "@/components/Luxury";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import WhyGiordano from "@/components/WhyGiordano";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>

      <Navbar />
      <Hero />
      <About />
      <Services />
      <Luxury />

      <Portfolio />
      <Process />
      <WhyGiordano />

      <CTA />
      <Footer />

    </main>
  );
}
