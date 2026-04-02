import React, { useState } from 'react';
import { BlurFade } from '../components/ui/blur-fade';
import { BorderBeam } from '../components/ui/border-beam';

const pillars = [
  {
    letter: 'H',
    title: 'Human-first',
    description:
      'Bevor die erste KI-Lösung eingeführt wird, schaffen wir die richtige Grundlage: gemeinsames Verständnis, adressierte Vorbehalte, Technologie als Unterstützung. KI-Transformation beginnt mit Menschen.',
  },
  {
    letter: 'U',
    title: 'Understand',
    description:
      'Wir analysieren, wie Ihr Unternehmen heute funktioniert — Prozesse, Abläufe, Engpässe. Erst wenn wir verstehen, wo Zeit verloren geht, können wir gezielt ansetzen. So schaffen wir Lösungen, die Ihnen genau an den richtigen Stellen helfen.',
  },
  {
    letter: 'M',
    title: 'Map',
    description:
      'Wir entwickeln eine priorisierte Landkarte aller KI-Anwendungsfälle: Quick Wins mit sofortiger Wirkung und strategische Projekte mit langfristigem Impact. Damit sehen wir genau, was wann sinnvoll ist.',
  },
  {
    letter: 'A',
    title: 'Adapt',
    description:
      'Theorie wird Praxis. Wir pilotieren Lösungen direkt in Ihrem Unternehmen, passen sie iterativ an und messen konkrete Ergebnisse. Dadurch erfolgt eine schrittweise Einführung mit direktem Feedback.',
  },
  {
    letter: 'N',
    title: 'Navigate',
    description:
      'KI ist kein Projekt mit Enddatum. Wir begleiten Sie dabei, Lösungen auszuweiten, Ihr Team zu befähigen und eine interne KI-Kompetenz aufzubauen, die langfristig trägt.',
  },
];

export default function HumanFramework() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="human" className="relative py-24 lg:py-32">
      {/* Subtle mesh gradient background */}
      <div className="mesh-gradient absolute inset-0 -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <BlurFade delay={0.1}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Unsere Methode
            </p>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Das{' '}
              <span className="gradient-text">HUMAN</span>{' '}
              Framework
            </h2>
          </BlurFade>
          <BlurFade delay={0.3}>
            <p className="mt-4 text-muted-foreground text-lg">
              Viele Unternehmen wissen, dass KI wichtig ist — aber nicht, wo sie anfangen sollen. Das HUMAN Framework gibt Ihnen einen klaren, strukturierten Weg: von der ersten Orientierung bis zum eigenständigen KI-Einsatz.
            </p>
          </BlurFade>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {pillars.map((pillar, index) => (
            <BlurFade key={pillar.letter} delay={0.15 + index * 0.1}>
              <div
                className="relative overflow-hidden rounded-2xl border border-border bg-card p-7 h-full"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Big letter watermark */}
                <span className="absolute -right-1 -top-2 select-none text-6xl font-extrabold text-primary/60">
                  {pillar.letter}
                </span>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="mb-3 text-lg font-bold">{pillar.title}</h3>
                  <p className="text-base leading-relaxed text-foreground">
                    {pillar.description}
                  </p>
                </div>

                {/* BorderBeam on hover */}
                {hoveredIndex === index && (
                  <BorderBeam
                    colorFrom="#5eead4"
                    colorTo="#06b6d4"
                  />
                )}
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
