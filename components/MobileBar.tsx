import Link from "next/link";
import { site } from "@/lib/site";
import { CalendarIcon, ChatIcon, PhoneIcon } from "./Icons";

/** Always-visible main actions on phones: book, call, WhatsApp. */
export default function MobileBar() {
  return (
    <nav className="mbar" aria-label="Acciones rápidas">
      <Link href="/reservar" className="primary">
        <CalendarIcon />
        Reservar
      </Link>
      <a href={site.tel}>
        <PhoneIcon />
        Llamar
      </a>
      <a href={site.whatsapp}>
        <ChatIcon />
        WhatsApp
      </a>
    </nav>
  );
}
