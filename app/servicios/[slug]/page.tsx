import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ContactActions } from "@/components/Blocks";
import { BackIcon, CheckIcon } from "@/components/Icons";
import { services } from "@/lib/site";

type Params = PageProps<"/servicios/[slug]">["params"];

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/servicios/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  return service ? { title: service.name, description: `${service.name}: ${service.items.join(", ")}.` } : {};
}

// Reading the URL param happens inside Suspense so navigations get an instant shell.
export default function ServicePage(props: PageProps<"/servicios/[slug]">) {
  return (
    <section>
      <Suspense fallback={<div className="wrap split" aria-busy="true" style={{ minHeight: "70vh" }} />}>
        <ServiceDetail params={props.params} />
      </Suspense>
    </section>
  );
}

async function ServiceDetail({ params }: { params: Params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <div className="wrap split">
      <div className="wide-photo">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          preload
          sizes="(max-width: 760px) 92vw, 46vw"
          placeholder="blur"
        />
      </div>
      <div>
        <Link className="text-link back" href="/servicios">
          <BackIcon /> Todos los servicios
        </Link>
        <h1>{service.name}</h1>
        <ul className="checks">
          {service.items.map((item) => (
            <li key={item}>
              <CheckIcon /> {item}
            </li>
          ))}
        </ul>
        <ContactActions />
      </div>
    </div>
  );
}
