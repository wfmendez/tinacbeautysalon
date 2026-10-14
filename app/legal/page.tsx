import type { Metadata } from "next";
import { PageTitle } from "@/components/Blocks";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso legal",
};

export default function LegalPage() {
  return (
    <>
      <PageTitle title="Aviso legal" />
      <section>
        <div className="wrap legal">
          <h2>Titular de la web</h2>
          <dl>
            <dt>Empresa</dt>
            <dd>{site.owner.company}</dd>
            <dt>NIF</dt>
            <dd>{site.owner.nif}</dd>
            <dt>Dirección</dt>
            <dd>
              {site.address.street}, {site.address.city}
            </dd>
            <dt>Teléfono</dt>
            <dd>
              <a href={site.tel}>{site.phone}</a>
            </dd>
            <dt>Correo</dt>
            <dd>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </dd>
          </dl>

          <h2>Reservas</h2>
          <p>Las reservas online se gestionan a través de Treatwell.</p>
        </div>
      </section>
    </>
  );
}
