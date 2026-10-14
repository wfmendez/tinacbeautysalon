import type { Metadata } from "next";
import { BookBand, PhotoGrid, Reviews, SectionTitle } from "@/components/Blocks";
import Reveal from "@/components/Reveal";
import { salonPhotos } from "@/lib/site";

export const metadata: Metadata = {
  title: "El salón",
  description: "Conoce Tina Cabrera Beauty Salon, en Tres Olivos – Montecarmelo, Madrid.",
};

export default function SalonPage() {
  return (
    <>
      <div className="wrap page-title">
        <h1>El salón</h1>
        <p className="lede">Tina Cabrera te atiende en persona.</p>
        <ul className="facts">
          <li>
            <b>10+</b>
            <span>años de experiencia</span>
          </li>
          <li>
            <b>0%</b>
            <span>amoniaco en el color</span>
          </li>
        </ul>
      </div>
      <section>
        <div className="wrap">
          <PhotoGrid photos={salonPhotos} columns={2} />
        </div>
      </section>
      <section className="soft">
        <Reveal className="wrap">
          <SectionTitle title="Opiniones" />
          <Reviews />
        </Reveal>
      </section>
      <BookBand />
    </>
  );
}
