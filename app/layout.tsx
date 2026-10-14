import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileBar from "@/components/MobileBar";
import "./globals.css";

const display = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-disp",
  display: "swap",
});

const sans = Jost({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tina Cabrera Beauty Salon · Peluquería en Tres Olivos, Madrid",
    template: "%s · Tina Cabrera Beauty Salon",
  },
  description:
    "Peluquería y estética en Tres Olivos – Montecarmelo, Madrid. Coloración sin amoniaco, tratamientos orgánicos, estética y depilación.",
  // The site is still a proposal: keep it out of search engines until it replaces the current one.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <body id="top">
        <a className="skip" href="#contenido">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
