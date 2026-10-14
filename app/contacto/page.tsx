import type { Metadata } from "next";
import { ContactActions, Hours } from "@/components/Blocks";
import { PinIcon } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Teléfono, WhatsApp, horario y dirección de Tina Cabrera Beauty Salon en Madrid.",
};

export default function ContactPage() {
  return (
    <>
      <div className="wrap page-title">
        <h1>Contacto</h1>
        <ContactActions />
      </div>
      <section>
        <div className="wrap">
          <div className="split">
            <div className="where">
              <h2>Dónde estamos</h2>
              <p>{site.address.street}</p>
              <p>{site.address.city}</p>
              <p>{site.address.area}</p>
              <a className="text-link" href={site.mapsUrl}>
                <PinIcon /> Cómo llegar
              </a>
            </div>
            <Hours />
          </div>
          <iframe
            className="map"
            src={site.mapsEmbed}
            title="Mapa: Tina Cabrera Beauty Salon"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
