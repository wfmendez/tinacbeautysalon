import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { reviews, services, site } from "@/lib/site";
import { ArrowIcon, CalendarIcon, ChatIcon, PhoneIcon } from "./Icons";
import Reveal from "./Reveal";

const cardSizes = "(max-width: 760px) 92vw, (max-width: 1240px) 31vw, 380px";

/** Page heading: the same word the menu uses, so people know where they are. */
export function PageTitle({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="wrap page-title">
      <h1>{title}</h1>
      {intro ? <p className="lede">{intro}</p> : null}
    </div>
  );
}

export function SectionTitle({ title }: { title: string }) {
  return <h2 className="sec-title">{title}</h2>;
}

export function ServiceCards() {
  return (
    <div className="grid3">
      {services.map((s) => (
        <Link key={s.slug} className="card" href={`/servicios/${s.slug}`}>
          <span className="ph">
            <Image src={s.image} alt="" fill sizes={cardSizes} placeholder="blur" />
          </span>
          <span className="card-name">{s.name}</span>
          <span className="card-text">{s.short}</span>
          <span className="card-go">
            Ver servicio <ArrowIcon />
          </span>
        </Link>
      ))}
    </div>
  );
}

export function PhotoGrid({
  photos,
  columns = 3,
}: {
  photos: { name: string; image: StaticImageData; alt: string }[];
  columns?: 2 | 3;
}) {
  return (
    <div className={columns === 2 ? "grid2" : "grid3"}>
      {photos.map((p) => (
        <figure key={p.name} className="photo">
          <span className="ph">
            <Image
              src={p.image}
              alt={p.alt}
              fill
              sizes={columns === 2 ? "(max-width: 760px) 92vw, 590px" : cardSizes}
              placeholder="blur"
            />
          </span>
          <figcaption>{p.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <div className="grid3">
      {reviews.map((r) => (
        <blockquote key={r.name} className="quote">
          <p>“{r.text}”</p>
          <cite>{r.name}</cite>
        </blockquote>
      ))}
    </div>
  );
}

/** The three ways to reach the salon, as large labelled buttons. */
export function ContactActions({ withBooking = true }: { withBooking?: boolean }) {
  return (
    <div className="actions">
      {withBooking ? (
        <Link className="btn" href="/reservar">
          <CalendarIcon /> Reservar cita
        </Link>
      ) : null}
      <a className="btn line" href={site.tel}>
        <PhoneIcon /> Llamar al {site.phone}
      </a>
      <a className="btn line" href={site.whatsapp}>
        <ChatIcon /> WhatsApp
      </a>
    </div>
  );
}

export function Hours() {
  return (
    <table className="hours">
      <caption>Horario</caption>
      <tbody>
        {site.hours.map((h) => (
          <tr key={h.days}>
            <th scope="row">{h.days}</th>
            <td>{h.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/** Closing band on every page: one clear next step. */
export function BookBand() {
  return (
    <section className="band">
      <Reveal className="wrap band-row">
        <h2>¿Te apetece un cambio?</h2>
        <ContactActions />
      </Reveal>
    </section>
  );
}
