import React from 'react';
import { BlurFade } from '../components/ui/blur-fade';
import { MagicCard } from '../components/ui/magic-card';

const services = [
  {
    title: 'KI-Strategie',
    description:
      'Wir entwickeln Ihre Roadmap für messbare Wettbewerbsvorteile. Klarer Fahrplan statt vager Experimente.',
    outcome:
      'Sie wissen danach genau, wo KI bei Ihnen Geld spart — und wo nicht.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Prozess-Automatisierung',
    description:
      'Sparen Sie hunderte Arbeitsstunden. Wir automatisieren Routineaufgaben durch intelligente KI-Agenten.',
    outcome:
      'Konkrete Prozesse identifiziert, automatisiert, übergeben. Kein Hype, keine offenen Enden.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
        <path d="M21 3v5h-5" />
      </svg>
    ),
  },
  {
    title: 'Individuelle KI-Lösungen',
    description:
      'Maßgeschneiderte Software, die Ihre Unternehmensdaten in einen Wettbewerbsvorteil verwandelt.',
    outcome:
      'Software, die auf Ihre Daten, Ihre Sprache und Ihre Workflows zugeschnitten ist.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    title: 'Training & Vorträge',
    description:
      'Wir machen Ihr Team KI-fit. Praxis-Workshops, die sofortige Produktivitätssteigerung bewirken.',
    outcome:
      'Ihre Mitarbeiter verstehen danach, was KI kann — und trauen sich, es zu nutzen.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-primary/[0.03] blur-[120px]" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
          <BlurFade delay={0.1} inView>
            <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium tracking-wider text-primary mb-6">
              UNSERE LEISTUNGEN
            </span>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Technologie trifft{' '}
              <span className="gradient-text">wirklichen Nutzen</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Von der Strategie bis zur Umsetzung — wir begleiten Sie auf dem
              Weg zur KI-getriebenen Organisation.
            </p>
          </BlurFade>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <BlurFade key={service.title} delay={0.2 + index * 0.1} inView>
              <MagicCard
                className="group relative h-full rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-6 transition-all duration-500 hover:border-primary/20 glow-card"
                gradientColor="rgba(94,234,212,0.08)"
              >
                <div className="flex flex-col gap-4">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/15">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Outcome */}
                  <p className="text-sm font-medium text-primary/80 mt-3 pt-3 border-t border-border/50">
                    {service.outcome}
                  </p>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
