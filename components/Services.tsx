import React from 'react';
import { BlurFade } from '../components/ui/blur-fade';
import { MagicCard } from '../components/ui/magic-card';
import { useT } from '../lib/language';

const icons = [
  (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
    </svg>
  ),
  (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  ),
  (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
  ),
];

const deServices = [
  {
    title: 'KI-Strategie',
    description: 'Wir entwickeln Ihre Roadmap für messbare Wettbewerbsvorteile. Klarer Fahrplan statt vager Experimente.',
    outcome: 'Sie wissen danach genau, wo KI bei Ihnen Geld spart — und wo nicht.',
  },
  {
    title: 'Prozess-Automatisierung',
    description: 'Sparen Sie hunderte Arbeitsstunden. Wir automatisieren Routineaufgaben durch intelligente KI-Agenten.',
    outcome: 'Konkrete Prozesse identifiziert, automatisiert, übergeben. Kein Hype, keine offenen Enden.',
  },
  {
    title: 'Individuelle KI-Lösungen',
    description: 'Maßgeschneiderte Software, die Ihre Unternehmensdaten in einen Wettbewerbsvorteil verwandelt.',
    outcome: 'Software, die auf Ihre Daten, Ihre Sprache und Ihre Workflows zugeschnitten ist.',
  },
  {
    title: 'Training & Vorträge',
    description: 'Wir machen Ihr Team KI-fit. Praxis-Workshops, die sofortige Produktivitätssteigerung bewirken.',
    outcome: 'Ihre Mitarbeiter verstehen danach, was KI kann — und trauen sich, es zu nutzen.',
  },
];

const enServices = [
  {
    title: 'AI Strategy',
    description: 'We develop your roadmap for measurable competitive advantages. Clear direction instead of vague experiments.',
    outcome: "You'll know exactly where AI saves you money — and where it doesn't.",
  },
  {
    title: 'Process Automation',
    description: 'Save hundreds of working hours. We automate routine tasks with intelligent AI agents.',
    outcome: 'Concrete processes identified, automated, handed over. No hype, no loose ends.',
  },
  {
    title: 'Custom AI Solutions',
    description: 'Tailored software that turns your company data into a competitive advantage.',
    outcome: 'Software built for your data, your language, and your workflows.',
  },
  {
    title: 'Training & Talks',
    description: 'We make your team AI-ready. Practical workshops that create immediate productivity gains.',
    outcome: 'After this, your employees understand what AI can do — and dare to use it.',
  },
];

const deHeader = {
  label: 'Unsere Leistungen',
  h2_part1: 'Technologie trifft',
  h2_italic: 'wirklichen Nutzen',
  subtitle: 'Von der Strategie bis zur Umsetzung — wir begleiten Sie auf dem Weg zur KI-getriebenen Organisation.',
};

const enHeader = {
  label: 'Our Services',
  h2_part1: 'Technology meets',
  h2_italic: 'real impact',
  subtitle: 'From strategy to implementation — we guide you on the path to an AI-driven organisation.',
};

export default function Services() {
  const services = useT(deServices, enServices);
  const header = useT(deHeader, enHeader);

  return (
    <section id="services" className="relative py-24 lg:py-32">
      {/* Teal glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[700px] w-[1000px] rounded-full bg-primary/[0.07] blur-[140px]" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
          <BlurFade delay={0.1} inView>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-5">{header.label}</p>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {header.h2_part1}{' '}
              <span className="gradient-text">{header.h2_italic}</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {header.subtitle}
            </p>
          </BlurFade>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <BlurFade key={index} delay={0.2 + index * 0.1} inView>
              <MagicCard
                className="group relative h-full rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/30 glow-card"
                gradientColor="rgba(94,234,212,0.10)"
              >
                <div className="flex flex-col gap-4">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/15">
                    {icons[index]}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-foreground">
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
