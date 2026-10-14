import type { Metadata } from "next";
import { ContactActions, Hours, PageTitle } from "@/components/Blocks";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reservar cita",
  description: "Reserva tu cita online en Tina Cabrera Beauty Salon, o llámanos.",
};

export default function BookingPage() {
  return (
    <>
      <PageTitle title="Reservar cita" intro="Elige servicio, día y hora." />
      <section>
        <div className="wrap">
          <iframe
            className="booking"
            src={site.bookingWidget}
            title="Reserva online de Tina Cabrera Beauty Salon"
            loading="lazy"
          />
        </div>
      </section>
      <section className="soft">
        <div className="wrap split">
          <div>
            <h2 className="steps-title">¿Prefieres hablar con nosotras?</h2>
            <ContactActions withBooking={false} />
          </div>
          <Hours />
        </div>
      </section>
    </>
  );
}
