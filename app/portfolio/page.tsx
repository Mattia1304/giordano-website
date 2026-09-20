import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioGrid from "@/components/PortfolioGrid";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />

      <section className="portfolioHero">

        <div className="portfolioHeroOverlay"/>

        <div className="portfolioHeroText reveal active">

          <span className="reveal delay-1 active">OUR PROJECTS</span>

          <h1 className="reveal delay-2 active">

            Luxury Renovation

            Portfolio

          </h1>

          <p className="reveal delay-3 active">Selected residential and commercial projects across Dubai.

          </p>

        </div>

      </section>

      <PortfolioGrid />

      <Footer />
    </>
  );
}

