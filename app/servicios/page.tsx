import type { Metadata } from "next";
import { BookBand, PageTitle, ServiceCards } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Peluquería y color, estética y depilación en Tina Cabrera Beauty Salon.",
};

export default function ServicesPage() {
  return (
    <>
      <PageTitle title="Servicios" intro="Elige uno para ver qué incluye." />
      <section>
        <div className="wrap">
          <ServiceCards />
        </div>
      </section>
      <BookBand />
    </>
  );
}
