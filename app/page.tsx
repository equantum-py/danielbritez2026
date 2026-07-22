import Image from "next/image";
import {
  ArrowDown,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  MessageCircle,
  Target,
} from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { CopyPhone } from "@/components/ui/CopyPhone";
import { ExpandableList } from "@/components/ui/ExpandableList";
import { portfolio, whatsappUrl } from "@/data/portfolio";

const mobileSpecialtyIndexes = [0, 1, 2, 3, 4, 8] as const;
const hiddenSpecialtyIndexes = [5, 6, 7] as const;

const compactCompetencies = [
  "Responsabilidad",
  "Puntualidad",
  "Atención al detalle",
  "Trabajo en equipo",
  "Resolución de problemas",
  "Orientación al cliente",
] as const;

const shortProcess = [
  "Escucho",
  "Analizo",
  "Identifico",
  "Resuelvo",
  "Verifico",
] as const;

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
    <div className="mb-6 max-w-3xl md:mb-10">
      <p className="kicker">{kicker}</p>

      <h2 className="h2">{title}</h2>

      {text ? (
        <p className="mt-3 text-base leading-7 text-muted md:mt-4 md:text-lg md:leading-8">
          {text}
        </p>
      ) : null}
    </div>
  );
}

function HeroPhoto() {
  return (
    <div className="panel tech-lines relative overflow-hidden p-3 sm:p-4 md:p-6">
      <div className="relative aspect-[4/4.6] max-h-[390px] overflow-hidden rounded-[1.5rem] border border-mechanic/30 bg-carbon sm:aspect-[4/5] sm:max-h-[430px] md:min-h-[480px] md:max-h-none md:rounded-[2rem]">
        <Image
          src="/images/daniel-britez-principal.png"
          alt="Daniel Brítez, técnico mecánico de motocicletas y automóviles"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover object-top"
        />

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-carbon/90 via-transparent to-transparent"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,168,90,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(0,168,90,.12) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/10 bg-carbon/85 px-3 py-2 text-center text-xs font-bold text-technical backdrop-blur-md md:bottom-6 md:left-6 md:right-6 md:rounded-2xl md:p-4 md:text-left md:text-sm">
          Técnico mecánico y ejecutivo comercial
        </div>
      </div>
    </div>
  );
}

function MobileStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="panel grid min-h-20 place-items-center rounded-2xl p-3 text-center">
      <strong className="font-display text-2xl leading-none text-technical">
        {value}
      </strong>

      <span className="text-xs text-muted">{label}</span>
    </div>
  );
}

function ExperienceCard({
  experience,
  visibleItems,
}: {
  experience: (typeof portfolio.experience)[number];
  visibleItems: number;
}) {
  const visible = experience.items.slice(0, visibleItems);
  const hidden = experience.items.slice(visibleItems);
  const Icon = experience.icon;

  return (
    <article className="panel p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-4">
        <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-mechanic/15 text-mechanic md:size-14">
          <Icon size={22} />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-mechanic md:text-sm">
            {experience.meta}
          </p>

          <h3 className="mt-1 font-display text-2xl font-bold leading-none text-technical md:mt-2 md:text-4xl">
            {experience.company}
          </h3>

          <p className="mt-1 text-sm font-semibold text-technical md:text-lg">
            {experience.role}
          </p>

          <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted md:line-clamp-none md:max-w-3xl md:text-base md:leading-7">
            {experience.intro}
          </p>

          <ExpandableList
            visibleItems={visible}
            hiddenItems={hidden}
          />
        </div>
      </div>
    </article>
  );
}

function SpecialtyItem({
  label,
  Icon,
  compact = false,
}: {
  label: string;
  Icon: (typeof portfolio.specialties)[number][1];
  compact?: boolean;
}) {
  const mobileLabel = label
    .replace(" de motocicletas", "")
    .replace(", embrague y relación", "");

  return (
    <div
      className={
        compact
          ? "panel flex min-h-16 items-center gap-2 rounded-2xl p-3 text-sm font-semibold"
          : "panel flex items-center gap-4 rounded-2xl p-5"
      }
    >
      <Icon
        className="shrink-0 text-mechanic"
        size={compact ? 18 : 24}
      />

      <span>{compact ? mobileLabel : label}</span>
    </div>
  );
}

function SpecialtyGrid() {
  const mobileItems = mobileSpecialtyIndexes.map(
    (index) => portfolio.specialties[index],
  );

  const hiddenItems = hiddenSpecialtyIndexes.map(
    (index) => portfolio.specialties[index],
  );

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:hidden">
        {mobileItems.map(([label, Icon]) => (
          <SpecialtyItem
            key={label}
            label={label}
            Icon={Icon}
            compact
          />
        ))}
      </div>

      <details className="mt-3 md:hidden">
        <summary className="focus-ring min-h-11 cursor-pointer rounded-2xl border border-mechanic/30 bg-mechanic/10 px-4 py-3 text-sm font-bold text-mechanic">
          Ver todas las especialidades
        </summary>

        <div className="mt-3 grid grid-cols-2 gap-3">
          {hiddenItems.map(([label, Icon]) => (
            <SpecialtyItem
              key={label}
              label={label}
              Icon={Icon}
              compact
            />
          ))}
        </div>
      </details>

      <div className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
        {portfolio.specialties.map(([label, Icon]) => (
          <SpecialtyItem
            key={label}
            label={label}
            Icon={Icon}
          />
        ))}
      </div>
    </>
  );
}

export default function Home() {
  const p = portfolio.person;

  return (
    <>
      <Header />

      <main id="inicio">
        <section className="section-pad pt-24 md:pt-32">
          <div className="container-pro grid items-center gap-6 lg:grid-cols-[1.05fr_.95fr] lg:gap-10">
            <div>
              <p className="kicker">Portafolio profesional</p>

              <h1 className="mt-3 font-display text-5xl font-bold leading-[0.9] tracking-tight text-technical sm:text-[52px] lg:text-8xl">
                {p.name}
              </h1>

              <p className="mt-4 text-xl font-semibold text-technical md:text-2xl">
                {p.title}
              </p>

              <p className="mt-3 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">
                Soy técnico mecánico con experiencia en motocicletas,
                automóviles, repuestos y atención al cliente.
              </p>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-mechanic/30 bg-mechanic/10 px-4 py-2 text-sm font-bold text-mechanic">
                <BriefcaseBusiness size={16} />
                Trabajo actual: {p.currentWork}
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row md:mt-8">
                <Button
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={19} />
                  Contactar por WhatsApp
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
                    className="hidden md:inline-flex"
                  >
                    <Download size={19} />
                    Descargar CV
                  </Button>
                ) : null}
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 md:mt-10 md:gap-3">
                <MobileStat value="5 años" label="Experiencia" />
                <MobileStat value="Sí" label="Movilidad" />
                <MobileStat value="Sí" label="Disponible" />
              </div>
            </div>

            <HeroPhoto />
          </div>
        </section>

        <section id="perfil" className="section-pad">
          <div className="container-pro">
            <SectionTitle
              kicker="Perfil"
              title="Qué sé hacer"
              text="Integro mecánica de motocicletas, mantenimiento automotriz y atención comercial de repuestos."
            />

            <div className="grid gap-3 md:gap-6 lg:grid-cols-3">
              {portfolio.strengths.map(
                ({ title, text, icon: Icon }) => (
                  <article
                    className="panel p-4 sm:p-6"
                    key={title}
                  >
                    <Icon
                      className="text-mechanic"
                      size={26}
                    />

                    <h3 className="mt-3 font-display text-xl font-bold text-technical md:text-3xl">
                      {title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted md:line-clamp-none md:text-base md:leading-7">
                      {text}
                    </p>
                  </article>
                ),
              )}
            </div>

            <details className="mt-3 md:hidden">
              <summary className="focus-ring min-h-11 cursor-pointer rounded-2xl border border-mechanic/30 bg-mechanic/10 px-4 py-3 text-sm font-bold text-mechanic">
                Ver perfil completo
              </summary>

              <div className="mt-3 grid gap-3">
                {portfolio.profile.map((text) => (
                  <p
                    className="rounded-2xl border border-white/10 bg-carbon/45 p-4 text-sm leading-6 text-muted"
                    key={text}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </details>

            <div className="mt-8 hidden gap-4 md:grid lg:grid-cols-3">
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
              title="Experiencia laboral"
            />

            <div className="space-y-4 md:space-y-6">
              {portfolio.experience.map((experience) => (
                <ExperienceCard
                  key={experience.company}
                  experience={experience}
                  visibleItems={4}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="especialidades" className="section-pad">
          <div className="container-pro">
            <SectionTitle
              kicker="Especialidades"
              title="Especialidades principales"
            />

            <SpecialtyGrid />
          </div>
        </section>

        <section className="section-pad">
          <div className="container-pro grid gap-4 lg:grid-cols-2 lg:gap-6">
            <div className="panel p-4 sm:p-6 lg:p-8">
              <SectionTitle
                kicker="Proceso"
                title="Cómo trabajo"
                text="Analizo cada necesidad antes de recomendar una reparación o un repuesto."
              />

              <div className="grid gap-2 md:hidden">
                {shortProcess.map((step, index) => (
                  <div
                    className="flex items-center gap-3"
                    key={step}
                  >
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-mechanic text-sm font-bold text-carbon">
                      {index + 1}
                    </span>

                    <p className="font-semibold text-technical">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              <div className="hidden md:block">
                {portfolio.process.map((step, index) => (
                  <div
                    className="flex gap-4 border-l border-white/10 pb-6 pl-5 last:pb-0"
                    key={step}
                  >
                    <span className="-ml-8 grid size-10 shrink-0 place-items-center rounded-full bg-mechanic font-bold text-carbon">
                      {index + 1}
                    </span>

                    <p className="pt-2 font-semibold">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel p-4 sm:p-6 lg:p-8">
              <SectionTitle
                kicker="Competencias"
                title="Forma de trabajar"
                text="Procuro actuar con responsabilidad, puntualidad, atención al detalle y compromiso."
              />

              <div className="flex flex-wrap gap-2 md:gap-3">
                {compactCompetencies.map((competency) => (
                  <span
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-muted md:px-4 md:text-sm"
                    key={competency}
                  >
                    {competency}
                  </span>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-mechanic/25 bg-mechanic/10 p-4 md:mt-8 md:rounded-3xl md:p-6">
                <Target
                  className="text-mechanic"
                  size={24}
                />

                <h3 className="mt-3 font-display text-2xl font-bold text-technical md:text-3xl">
                  Objetivo profesional
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted md:text-base md:leading-7">
                  {portfolio.objective}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="section-pad pb-24 md:pb-20"
        >
          <div className="container-pro">
            <div className="panel grid gap-5 p-4 sm:p-6 lg:grid-cols-[.9fr_1.1fr] lg:p-8">
              <div>
                <p className="kicker">Contacto</p>

                <h2 className="h2">Hablemos</h2>

                <p className="mt-3 text-sm leading-6 text-muted md:text-base md:leading-8">
                  Estoy disponible para oportunidades laborales en
                  concesionarias, talleres especializados, empresas de repuestos
                  y organizaciones del sector automotor.
                </p>
              </div>

              <div className="grid gap-3">
                <Button
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full"
                >
                  <MessageCircle size={19} />
                  Contactar por WhatsApp
                </Button>

                <div className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
                  <a
                    className="focus-ring rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-muted"
                    href={`tel:${p.phoneHref}`}
                  >
                    Llamar
                  </a>

                  <CopyPhone />

                  <span className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-muted sm:col-span-1">
                    {p.city}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-muted">
                    <CheckCircle2
                      className="mr-2 inline text-mechanic"
                      size={16}
                    />
                    Movilidad propia
                  </span>

                  <span className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-muted">
                    <CheckCircle2
                      className="mr-2 inline text-mechanic"
                      size={16}
                    />
                    Disponibilidad
                  </span>
                </div>

                {p.cvAvailable ? (
                  <Button
                    href={p.cvPath}
                    variant="secondary"
                    download
                    className="w-full"
                  >
                    <Download size={19} />
                    Descargar CV
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        className="focus-ring fixed bottom-4 right-4 z-40 grid size-12 place-items-center rounded-full bg-mechanic text-carbon shadow-metal md:size-14"
        aria-label="Abrir conversación con Daniel por WhatsApp"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={22} />
      </a>

      <Footer />
    </>
  );
}