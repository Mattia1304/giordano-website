import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footerLogo relative w-40 h-16">

        <Image
          src="/logos/giordano.png"
          alt="Giordano"
          fill
          className="object-contain object-left"
        />

      </div>

      <div>

        <h4>Contact</h4>

        <p>+971 58 236 9969</p>

        <p>info@giordanobc.it</p>

        <p>Dubai · UAE</p>

      </div>

      <div>

        <h4>Quick Links</h4>

        <Link href="/">Home</Link>

        <Link href="/portfolio">Projects</Link>

        <Link href="/services">Services</Link>

        <Link href="/contact">Contact</Link>

      </div>

      <div>

        <h4>Partner</h4>

        <p>PRIMA HUB</p>

        <p>JLT Cluster T</p>

        <p>Dubai</p>

      </div>

    </footer>
  );
}
