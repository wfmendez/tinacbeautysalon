import type { Metadata } from "next";
import { BookBand, PageTitle, PhotoGrid } from "@/components/Blocks";
import { works } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trabajos",
  description: "Resultados reales de color y peluquería hechos en Tina Cabrera Beauty Salon.",
};

export default function WorksPage() {
  return (
    <>
      <PageTitle title="Trabajos" intro="Resultados reales, hechos en el salón." />
      <section>
        <div className="wrap">
          <PhotoGrid photos={works} />
        </div>
      </section>
      <BookBand />
    </>
  );
}
