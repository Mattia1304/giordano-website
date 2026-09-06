import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioGrid from "@/components/PortfolioGrid";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />

      <section className="portfolioHero">

        <div className="portfolioHeroOverlay"/>

        <div className="portfolioHeroText">

          <span>OUR PROJECTS</span>

          <h1>

            Luxury Renovation

            Portfolio

          </h1>

          <p>

            Selected residential and commercial projects across Dubai.

          </p>

        </div>

      </section>

      <PortfolioGrid />

      <Footer />
    </>
  );
}
