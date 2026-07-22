"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { portfolio, whatsappUrl } from "@/data/portfolio";

const mobileNav = portfolio.nav.filter((item) =>
  ["#inicio", "#perfil", "#experiencia", "#contacto"].includes(item.href),
);

export function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-carbon/85 backdrop-blur-xl">
      <nav
        className="container-pro flex h-16 items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8"
        aria-label="Navegación principal"
      >
        <a
          href="#inicio"
          className="focus-ring flex items-center gap-3 rounded-full"
          onClick={closeMenu}
        >
          <span className="grid size-10 place-items-center rounded-2xl border border-mechanic/50 bg-mechanic/10 font-display text-lg font-bold text-mechanic lg:size-11 lg:text-xl">
            {portfolio.person.initials}
          </span>

          <span className="hidden font-display text-xl font-bold sm:block">
            {portfolio.person.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {portfolio.nav.map((item) => (
            <a
              key={item.href}
              className="focus-ring rounded-full px-4 py-2 text-sm text-muted transition hover:text-technical"
              href={item.href}
            >
              {item.label}
            </a>
          ))}

          <Button
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-2"
          >
            Contactar
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
          className="focus-ring grid size-11 place-items-center rounded-full border border-white/10 bg-white/5 lg:hidden"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-graphite p-4 lg:hidden"
        >
          <nav
            className="container-pro"
            aria-label="Navegación móvil"
          >
            {mobileNav.map((item) => (
              <a
                key={item.href}
                onClick={closeMenu}
                className="focus-ring block rounded-2xl px-4 py-3 text-muted transition hover:bg-white/5 hover:text-technical"
                href={item.href}
              >
                {item.label}
              </a>
            ))}

            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 w-full"
            >
              Contactar por WhatsApp
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}