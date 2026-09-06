import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Whatsapp from "@/components/Whatsapp";

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
  title: "Giordano Building Contracting | Italian Luxury Renovation Dubai",
  description:
    "Luxury Renovation • Interior Design • Made in Italy • Dubai UAE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${montserrat.className}`}>
        {children}
        <Whatsapp />
      </body>
    </html>
  );
}
