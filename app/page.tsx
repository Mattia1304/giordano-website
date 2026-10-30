import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Luxury from "@/components/Luxury";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import Collage from "@/components/Collage";
import ProjectIndex from "@/components/ProjectIndex";
import Process from "@/components/Process";
import WhyGiordano from "@/components/WhyGiordano";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>

      <Navbar />
      <Hero />
      <Marquee />
      <Manifesto />
      <About />
      <Services />
      <Luxury />

      <Collage />
      <ProjectIndex />
      <Process />
      <WhyGiordano />

      <CTA />
      <Footer />

    </main>
  );
}
