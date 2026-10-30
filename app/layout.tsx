import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import "./premium.css";
import Whatsapp from "@/components/Whatsapp";
import ScrollEffects from "@/components/ScrollEffects";
import Cursor from "@/components/Cursor";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-title",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.giordanobc.it"),
  title: "Giordano Building Contracting | Italian Luxury Renovation Dubai",
  description:
    "Luxury Renovation • Interior Design • Made in Italy • Dubai UAE",
  openGraph: {
    type: "website",
    siteName: "Giordano Building Contracting",
    title: "Giordano Building Contracting | Italian Luxury Renovation Dubai",
    description:
      "Luxury Renovation • Interior Design • Made in Italy • Dubai UAE",
    images: ["/images/villa.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Giordano Building Contracting",
  url: "https://www.giordanobc.it",
  logo: "https://www.giordanobc.it/logos/giordano-logo.png",
  image: "https://www.giordanobc.it/images/villa.jpg",
  telephone: "+971582369969",
  email: "info@giordanobc.it",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  areaServed: "Dubai, UAE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (process.env.MAINTENANCE_MODE === "true") {
    return (
      <html lang="en">
        <body className={`${montserrat.variable} ${montserrat.className}`} style={{ backgroundColor: "#111", color: "#d4af37", display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", margin: 0, textAlign: "center", flexDirection: "column" }}>
          <div>
            <h1 className={cormorant.className} style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "0.5rem", fontWeight: 400 }}>Giordano Building Contracting</h1>
            <p style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", letterSpacing: "4px", textTransform: "uppercase", color: "#fff", marginBottom: "2rem" }}>Work in Progress</p>
            <p style={{ fontSize: "0.9rem", color: "#888", letterSpacing: "1px" }}>LUXURY RENOVATION • INTERIOR DESIGN • DUBAI UAE</p>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${montserrat.className}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollEffects />
        <Cursor />
        {children}
        <Whatsapp />
      </body>
    </html>
  );
}
