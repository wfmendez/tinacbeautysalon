import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { BookBand } from "@/components/Blocks";
import { ArrowIcon, CalendarIcon } from "@/components/Icons";
import { heroImage, salonPhotos, services, works } from "@/lib/site";
import monogram from "@/public/brand/monogram-tc.png";

// The home page is a front door: each tile opens its own page.
const tiles: { href: string; label: string; text: string; image?: StaticImageData }[] = [
  { href: "/servicios", label: "Servicios", text: "Peluquería, estética y depilación", image: services[0].image },
  { href: "/trabajos", label: "Trabajos", text: "Resultados reales", image: works[1].image },
  { href: "/salon", label: "El salón", text: "Conoce el espacio", image: salonPhotos[0].image },
  { href: "/vales-regalo", label: "Vales regalo", text: "50 €, 100 € y 150 €" },
];

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

      <section className="soft">
        <nav className="wrap tiles" aria-label="Secciones de la web">
          {tiles.map((t) => (
            <Link key={t.href} className="tile" href={t.href}>
              <span className={t.image ? "ph" : "ph ph-brand"}>
                {t.image ? (
                  <Image src={t.image} alt="" fill sizes="(max-width: 760px) 46vw, 290px" placeholder="blur" />
                ) : (
                  <Image src={monogram} alt="" sizes="160px" className="tile-mark" />
                )}
              </span>
              <span className="tile-name">
                {t.label} <ArrowIcon />
              </span>
              <span className="tile-text">{t.text}</span>
            </Link>
          ))}
        </nav>
      </section>

      <BookBand />
    </>
  );
}
