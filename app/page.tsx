import Image from "next/image";
import Link from "next/link";
import { BookBand, PhotoGrid, Reviews, SectionTitle, ServiceCards } from "@/components/Blocks";
import { ArrowIcon, CalendarIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { heroImage, works } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <h1>
              Tu belleza, en <em>buenas manos</em>
            </h1>
            <p className="lede">Peluquería y estética en Tres Olivos, Madrid.</p>
            <div className="actions">
              <Link className="btn" href="/reservar">
                <CalendarIcon /> Reservar cita
              </Link>
            </div>
          </div>
          <div className="hero-photo">
            <Image
              src={heroImage.image}
              alt={heroImage.alt}
              fill
              preload
              sizes="(max-width: 760px) 92vw, 46vw"
              placeholder="blur"
            />
          </div>
        </div>
      </section>

      <section>
        <Reveal className="wrap">
          <SectionTitle title="Servicios" />
          <ServiceCards />
        </Reveal>
      </section>

      <section className="soft">
        <Reveal className="wrap">
          <SectionTitle title="Trabajos" />
          <PhotoGrid photos={works} />
          <div className="center">
            <Link className="text-link" href="/trabajos">
              Ver todos los trabajos <ArrowIcon />
            </Link>
          </div>
        </Reveal>
      </section>

      <section>
        <Reveal className="wrap">
          <SectionTitle title="Opiniones" />
          <Reviews />
        </Reveal>
      </section>

      <BookBand />
    </>
  );
}
