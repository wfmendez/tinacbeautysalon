import type { Metadata } from "next";
import Image from "next/image";
import { PageTitle } from "@/components/Blocks";
import { ChatIcon } from "@/components/Icons";
import monogram from "@/public/brand/monogram-tc.png";
import { site, vales } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vales regalo",
  description: "Regala un vale de Tina Cabrera Beauty Salon, válido en todos los servicios.",
};

export default function GiftPage() {
  return (
    <>
      <PageTitle title="Vales regalo" intro="Válidos en todos los servicios." />
      <section>
        <div className="wrap">
          <div className="grid3">
            {vales.map((amount) => (
              <div key={amount} className="vale">
                <Image src={monogram} alt="" sizes="130px" />
                <b>{amount} €</b>
                <a
                  className="btn"
                  href={site.whatsappFor(`Hola, quiero un vale regalo de ${amount} €.`)}
                  aria-label={`Pedir vale de ${amount} euros por WhatsApp`}
                >
                  <ChatIcon /> Pedir por WhatsApp
                </a>
              </div>
            ))}
          </div>
          <p className="note">
            También puedes pedirlo en el salón o llamando al <a href={site.tel}>{site.phone}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
