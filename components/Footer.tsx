import Image from "next/image";
import Link from "next/link";
import logo from "@/public/brand/logo-tc.png";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-grid">
        <div>
          <Image className="foot-logo" src={logo} alt="Tina Cabrera Beauty Salon" sizes="170px" />
          <p>
            {site.address.street}
            <br />
            {site.address.city}
          </p>
          <p>
            <a href={site.tel}>{site.phone}</a>
          </p>
        </div>

        <nav aria-label="Páginas">
          <h2>Páginas</h2>
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/vales-regalo">Vales regalo</Link>
          <Link href="/reservar">Reservar cita</Link>
        </nav>

        <nav aria-label="Redes sociales">
          <h2>Síguenos</h2>
          {site.social.map((s) => (
            <a key={s.name} href={s.href}>
              {s.name}
            </a>
          ))}
        </nav>
      </div>
      <div className="wrap foot-base">
        <span>© {site.name}</span>
        <Link href="/legal">Aviso legal</Link>
        <a href="#top">Volver arriba</a>
      </div>
    </footer>
  );
}
