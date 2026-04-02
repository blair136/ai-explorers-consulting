import React, { useState } from 'react';
import { BlurFade } from '../components/ui/blur-fade';
import { BorderBeam } from '../components/ui/border-beam';

const pillars = [
  {
    letter: 'H',
    title: 'Human-first',
    description:
      'Bevor die erste KI-Lösung eingeführt wird, schaffen wir die richtige Grundlage: Wir verankern ein gemeinsames Verständnis von KI im Unternehmen, adressieren Vorbehalte im Team und sorgen dafür, dass Technologie als Unterstützung und nicht als Bedrohung wahrgenommen wird. KI-Transformation beginnt mit Menschen, nicht mit Software.',
  },
  {
    letter: 'U',
    title: 'Understand',
    description:
      'Wir analysieren systematisch, wie Ihr Unternehmen heute funktioniert — Prozesse, Abläufe, Informationsflüsse, Engpässe. Erst wenn wir wirklich verstehen, wo Zeit verloren geht und wo Potenzial brach liegt, können wir gezielt ansetzen. Kein Aktionismus, keine Standardlösungen — nur fundierte Klarheit.',
  },
  {
    letter: 'M',
    title: 'Map',
    description:
      'Aus der Analyse entwickeln wir eine priorisierte Landkarte aller KI-Anwendungsfälle für Ihr Unternehmen. Wir unterscheiden Quick Wins, die sofort Wirkung zeigen, von strategischen Projekten mit langfristigem Impact. Sie wissen am Ende genau, was wann sinnvoll ist — und warum.',
  },
  {
    letter: 'A',
    title: 'Adapt',
    description:
      'Theorie wird Praxis. Wir pilotieren die priorisierten Lösungen direkt in Ihrem Unternehmen, passen sie iterativ an Ihre Realität an und messen konkrete Ergebnisse. Kein Big-Bang-Ansatz — sondern schrittweise Einführung mit konstantem Feedback und direkter Anpassung.',
  },
  {
    letter: 'N',
    title: 'Navigate',
    description:
      'KI ist kein Projekt mit Enddatum. Wir begleiten Sie dabei, erfolgreiche Lösungen auf weitere Bereiche auszuweiten, Ihr Team eigenständig zu befähigen und eine interne KI-Kompetenz aufzubauen, die langfristig trägt. Unser Ziel ist Ihre Unabhängigkeit.',
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
