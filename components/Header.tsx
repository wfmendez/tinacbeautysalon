"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "@/public/brand/logo-tc.png";
import { nav } from "@/lib/site";
import { CloseIcon, MenuIcon } from "./Icons";

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export default function Header() {
  const pathname = usePathname();
  // The menu is "open for a given page": following a link changes the page, which closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenOn(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="head">
      <div className="wrap head-row">
        <Link className="logo" href="/" aria-label="Tina Cabrera Beauty Salon, ir al inicio">
          <Image src={logo} alt="" loading="eager" sizes="140px" />
        </Link>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpenOn(open ? null : pathname)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
          {open ? "Cerrar" : "Menú"}
        </button>

        <nav id="menu" className={open ? "nav open" : "nav"} aria-label="Principal">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link className="btn" href="/reservar">
            Reservar cita
          </Link>
        </nav>
      </div>
    </header>
  );
}
