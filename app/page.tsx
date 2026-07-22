import Image from "next/image";
import {
  ArrowDown,
  Download,
  MapPin,
  MessageCircle,
  Phone,
  Target,
} from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { CopyPhone } from "@/components/ui/CopyPhone";
import { portfolio, whatsappUrl } from "@/data/portfolio";

function HeroPhoto() {
  return (
    <div className="panel tech-lines relative min-h-[480px] overflow-hidden p-3 sm:p-4">
      <div className="relative min-h-[450px] overflow-hidden rounded-[1.75rem] border border-mechanic/30 bg-carbon">
        <Image
          src="/images/daniel-britez-principal.png"
          alt="Daniel Brítez, técnico mecánico de motocicletas y automóviles"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover object-top"
        />

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-transparent"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,168,90,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(0,168,90,.12) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-carbon/85 p-4 backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6">
          <p className="kicker">Perfil profesional</p>

          <p className="mt-1 text-sm leading-6 text-technical">
            Técnico mecánico de motocicletas y automóviles, con experiencia
            comercial en repuestos y atención al cliente.
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({
  kicker,
  title,
  text,
}: {
  kicker: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="kicker">{kicker}</p>

      <h2 className="h2">{title}</h2>

      {text ? (
        <p className="mt-4 text-lg leading-8 text-muted">{text}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  const p = portfolio.person;

  return (
    <>
      <Header />

      <main id="inicio">
        <section className="section-pad pt-32">
          <div className="container-pro grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <p className="kicker">
                Portafolio profesional · {p.city}
              </p>

              <h1 className="mt-4 font-display text-6xl font-bold uppercase leading-[.9] tracking-tight sm:text-7xl lg:text-8xl">
                {p.name}
              </h1>

              <p className="mt-5 text-2xl font-semibold text-technical">
                {p.title}
              </p>

              <p className="mt-2 text-lg text-mechanic">
                {p.subtitle}
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                Soy técnico mecánico con experiencia en motocicletas,
                automóviles, venta de repuestos y atención al cliente. Combino
                mis conocimientos técnicos con la capacidad de asesorar,
                diagnosticar problemas y ofrecer soluciones adecuadas para cada
                necesidad.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={19} />
                  Hablar por WhatsApp
                </Button>

                <Button href="#experiencia" variant="secondary">
                  <ArrowDown size={19} />
                  Ver experiencia
                </Button>

                {p.cvAvailable ? (
                  <Button
                    href={p.cvPath}
                    variant="secondary"
                    download
                  >
                    <Download size={19} />
                    Descargar CV
                  </Button>
                ) : (
                  <span className="inline-flex min-h-12 items-center justify-center rounded-full border border-amber/35 bg-amber/10 px-5 text-sm font-semibold text-amber">
                    CV pendiente de cargar
                  </span>
                )}
              </div>

              <p className="mt-4 max-w-2xl text-base leading-7 text-technical">
                Actualmente trabajo en Biciclo’s Shop, en el área comercial y
                de atención al cliente, especializado en la venta e
                identificación de repuestos para motocicletas.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  p.experienceSummary,
                  "Movilidad propia",
                  "Disponibilidad laboral",
                ].map((item) => (
                  <div
                    className="panel rounded-2xl p-4"
                    key={item}
                  >
                    <p className="font-display text-2xl font-bold uppercase text-technical">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <HeroPhoto />
          </div>
        </section>

        <section id="perfil" className="section-pad">
          <div className="container-pro">
            <SectionTitle
              kicker="Perfil"
              title="Técnica, comercio y criterio de taller"
              text="Integro experiencia práctica con motocicletas y automóviles con atención comercial de repuestos, presupuestos y seguimiento de clientes."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {portfolio.strengths.map(
                ({ title, text, icon: Icon }) => (
                  <article className="panel p-6" key={title}>
                    <Icon className="text-mechanic" size={34} />

                    <h3 className="mt-5 font-display text-3xl font-bold uppercase">
                      {title}
                    </h3>

                    <p className="mt-3 leading-7 text-muted">
                      {text}
                    </p>
                  </article>
                ),
              )}
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {portfolio.profile.map((text) => (
                <p
                  className="rounded-3xl border border-white/10 bg-carbon/45 p-6 leading-8 text-muted"
                  key={text}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="experiencia" className="section-pad">
          <div className="container-pro">
            <SectionTitle
              kicker="Experiencia"
              title="Trayectoria laboral"
            />

            <div className="space-y-6">
              {portfolio.experience.map(
                ({
                  company,
                  role,
                  meta,
                  intro,
                  items,
                  icon: Icon,
                }) => (
                  <article
                    className="panel p-6 md:p-8"
                    key={company}
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start">
                      <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-mechanic/15 text-mechanic">
                        <Icon />
                      </div>

                      <div className="flex-1">
                        <p className="text-sm font-bold uppercase tracking-[.2em] text-mechanic">
                          {meta}
                        </p>

                        <h3 className="mt-2 font-display text-4xl font-bold uppercase">
                          {company}
                        </h3>

                        <p className="mt-1 text-lg text-technical">
                          {role}
                        </p>

                        <p className="mt-4 max-w-3xl leading-7 text-muted">
                          {intro}
                        </p>

                        <ul className="mt-5 grid gap-3 md:grid-cols-2">
                          {items.map((item) => (
                            <li
                              className="flex gap-3 text-sm leading-6 text-muted"
                              key={item}
                            >
                              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-mechanic" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        <section id="especialidades" className="section-pad">
          <div className="container-pro">
            <SectionTitle
              kicker="Especialidades"
              title="Áreas técnicas y comerciales"
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {portfolio.specialties.map(([label, Icon]) => (
                <div
                  className="panel flex items-center gap-4 rounded-2xl p-5"
                  key={label}
                >
                  <Icon className="shrink-0 text-mechanic" />

                  <span className="font-semibold">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-pro grid gap-6 lg:grid-cols-2">
            <div className="panel p-8">
              <SectionTitle
                kicker="Proceso"
                title="Método de trabajo"
              />

              {portfolio.process.map((step, index) => (
                <div
                  className="flex gap-4 border-l border-white/10 pb-6 pl-5 last:pb-0"
                  key={step}
                >
                  <span className="-ml-8 grid size-10 shrink-0 place-items-center rounded-full bg-mechanic font-bold text-carbon">
                    {index + 1}
                  </span>

                  <p className="pt-2 font-semibold">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <div className="panel p-8">
              <SectionTitle
                kicker="Competencias"
                title="Forma de trabajar"
                text="En cada trabajo procuro actuar con responsabilidad, puntualidad, atención al detalle y compromiso. Valoro el trabajo en equipo, el buen trato con los clientes y el aprendizaje constante."
              />

              <div className="flex flex-wrap gap-3">
                {portfolio.competencies.map((competency) => (
                  <span
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-muted"
                    key={competency}
                  >
                    {competency}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-mechanic/25 bg-mechanic/10 p-6">
                <Target className="text-mechanic" />

                <h3 className="mt-4 font-display text-3xl font-bold uppercase">
                  Objetivo profesional
                </h3>

                <p className="mt-3 leading-7 text-muted">
                  {portfolio.objective}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="section-pad">
          <div className="container-pro">
            <div className="panel grid gap-8 p-8 lg:grid-cols-[.9fr_1.1fr]">
              <div>
                <p className="kicker">
                  Contacto
                </p>

                <h2 className="h2">
                  Hablemos
                </h2>

                <p className="mt-4 leading-8 text-muted">
                  Estoy disponible para oportunidades laborales en
                  concesionarias, talleres especializados, empresas de repuestos
                  y organizaciones del sector automotor. Podés comunicarte
                  conmigo directamente por WhatsApp o teléfono.
                </p>
              </div>

              <div className="grid gap-4">
                <a
                  className="focus-ring panel flex items-center gap-4 rounded-2xl p-5"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="shrink-0 text-mechanic" />
                  <span>WhatsApp: {p.phoneDisplay}</span>
                </a>

                <a
                  className="focus-ring panel flex items-center gap-4 rounded-2xl p-5"
                  href={`tel:${p.phoneHref}`}
                >
                  <Phone className="shrink-0 text-mechanic" />
                  <span>Teléfono: {p.phoneDisplay}</span>
                </a>

                <div className="panel flex items-center gap-4 rounded-2xl p-5">
                  <MapPin className="shrink-0 text-mechanic" />

                  <span>
                    {p.city} · Movilidad propia · Disponibilidad laboral
                  </span>
                </div>

                <p className="rounded-2xl border border-amber/30 bg-amber/10 p-4 text-sm text-amber">
                  Correo electrónico pendiente de completar.
                </p>

                <CopyPhone />
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        className="focus-ring fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-mechanic text-carbon shadow-metal"
        aria-label="Abrir conversación con Daniel por WhatsApp"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle />
      </a>

      <Footer />
    </>
  );
}
