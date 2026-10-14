import type { StaticImageData } from "next/image";
import ondas from "@/public/images/ondas-cobrizas.jpg";
import rojo from "@/public/images/rojo-intenso.jpg";
import balayage from "@/public/images/balayage.jpg";
import interior from "@/public/images/salon-interior.jpg";
import lavado from "@/public/images/salon-lavado.jpg";
import fachada from "@/public/images/salon-fachada.jpg";
import puestos from "@/public/images/salon-puestos.jpg";
import estetica from "@/public/images/estetica.webp";
import depilacion from "@/public/images/depilacion.webp";

const phoneRaw = "34686327570";
const wa = (text: string) =>
  `https://wa.me/${phoneRaw}?text=${encodeURIComponent(text)}`;

export const site = {
  name: "Tina Cabrera Beauty Salon",
  phone: "686 32 75 70",
  tel: `tel:+${phoneRaw}`,
  whatsapp: wa("Hola, quiero pedir cita."),
  whatsappFor: wa,
  email: "tinacbeautysalon@gmail.com",
  address: {
    street: "C. Afueras a Valverde, 22, local 9",
    city: "28034 Madrid",
    area: "Tres Olivos – Montecarmelo",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Tina+Cabrera+Beauty+Sal%C3%B3n+C.+Afueras+a+Valverde+22+Madrid",
  mapsEmbed:
    "https://www.google.com/maps?q=Tina+Cabrera+Beauty+Sal%C3%B3n,+C.+Afueras+a+Valverde,+22,+28034+Madrid&output=embed",
  bookingWidget:
    "https://widget.treatwell.es/establecimiento/tina-cabrera-beauty-salon/",
  hours: [
    { days: "Lunes, jueves y viernes", time: "9:30 – 20:00" },
    { days: "Martes y miércoles", time: "9:30 – 15:00" },
    { days: "Sábado", time: "9:00 – 15:00" },
    { days: "Domingo", time: "Cerrado" },
  ],
  social: [
    { name: "Instagram", href: "https://www.instagram.com/tinacbeautysalon" },
    { name: "Facebook", href: "https://www.facebook.com/tinacbeautysalon/" },
    { name: "TikTok", href: "https://www.tiktok.com/@tinacbeautysalon" },
  ],
  owner: { company: "Retoque Estilistas SL", nif: "B56602360" },
} as const;

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/trabajos", label: "Trabajos" },
  { href: "/salon", label: "El salón" },
  { href: "/contacto", label: "Contacto" },
] as const;

export type Service = {
  slug: string;
  name: string;
  short: string;
  image: StaticImageData;
  alt: string;
  items: string[];
};

export const services: Service[] = [
  {
    slug: "peluqueria-y-color",
    name: "Peluquería y color",
    short: "Color sin amoniaco y corte",
    image: balayage,
    alt: "Melena larga con balayage natural",
    items: [
      "Coloración sin amoniaco",
      "Balayage",
      "Bótox capilar orgánico",
      "Keratina orgánica",
      "Recogidos y maquillaje",
    ],
  },
  {
    slug: "estetica",
    name: "Estética",
    short: "Manos, pies y cejas",
    image: estetica,
    alt: "Tratamiento de estética facial",
    items: [
      "Manicura permanente",
      "Pedicura vegana",
      "Diseño de cejas con henna",
      "Tinte de cejas",
    ],
  },
  {
    slug: "depilacion",
    name: "Depilación",
    short: "Para ella y para él",
    image: depilacion,
    alt: "Depilación de piernas",
    items: ["Piernas", "Ingles y axilas", "Espalda y pecho", "Cejas"],
  },
];

export const works = [
  { name: "Ondas cobrizas", image: ondas, alt: "Melena larga con ondas en tono cobrizo" },
  { name: "Rojo intenso", image: rojo, alt: "Melena lisa en rojo intenso" },
  { name: "Balayage", image: balayage, alt: "Melena larga con balayage natural" },
];

export const salonPhotos = [
  { name: "Tocadores", image: interior, alt: "Tocadores con espejos y pared de ladrillo blanco" },
  { name: "Entrada", image: fachada, alt: "Fachada de Tina Cabrera Beauty Salon" },
  { name: "Zona de lavado", image: lavado, alt: "Zona de lavado del salón" },
  { name: "Puestos de corte", image: puestos, alt: "Sillones de corte del salón" },
];

export const heroImage = { image: ondas, alt: "Melena larga con ondas en tono cobrizo, trabajo del salón" };

export const reviews = [
  { text: "Me hicieron un cambio de color asesorada por Tina y me quedó genial.", name: "Emily García" },
  { text: "Siempre me dejan mi pelo rizado suave y saneado, con mucho estilo en el corte.", name: "Lidia Ortega" },
  { text: "Profesionalidad al máximo, atención esmerada y un corte maravilloso.", name: "Evelyn Hernández Parra" },
];

export const vales = [50, 100, 150];
