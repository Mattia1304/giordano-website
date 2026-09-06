import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="contactHero">

        <div className="overlay"/>

        <div className="heroContent">

          <span>CONTACT</span>

          <h1>Let's Discuss Your Project</h1>

          <p>
            Luxury Renovation • Interior Design • Made in Italy
          </p>

        </div>

      </section>

      <section className="contactSection">

        <div className="contactInfo">

          <h2>Giordano Building Contracting</h2>

          <div className="contactCard">

            <h4>Email</h4>

            <a href="mailto:info@giordanobc.it">
              info@giordanobc.it
            </a>

          </div>

          <div className="contactCard">

            <h4>Phone</h4>

            <a href="tel:+971582369969">
              +971 58 236 9969
            </a>

          </div>

          <div className="contactCard">

            <h4>Showroom Partner</h4>

            <p>
              PRIMA HUB
              <br/>
              JLT Cluster T
              <br/>
              Dubai UAE
            </p>

          </div>

        </div>

        <ContactForm/>

      </section>

      <section className="mapSection">

        <iframe
          src="https://www.google.com/maps?q=JLT+Cluster+T+Dubai&output=embed"
          loading="lazy"
        />

      </section>

      <Footer/>
    </>
  );
}
