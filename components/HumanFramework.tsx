import React, { useState } from 'react';
import { BlurFade } from '../components/ui/blur-fade';
import { BorderBeam } from '../components/ui/border-beam';

const pillars = [
  {
    letter: 'H',
    title: 'Holistisch',
    description:
      'Wir schauen auf Prozesse, Menschen und Technik gemeinsam — nicht nur auf die Software.',
  },
  {
    letter: 'U',
    title: 'User-Centric',
    description:
      'KI-Lösungen, die Ihre Mitarbeiter tatsächlich nutzen — keine Tools, die im Regal verstauben.',
  },
  {
    letter: 'M',
    title: 'Moralisch',
    description:
      'Ihre Daten bleiben Ihre Daten. Transparenz und DSGVO-Konformität sind für uns kein Bonus, sondern Standard.',
  },
  {
    letter: 'A',
    title: 'Adaptiv',
    description:
      'Wir bauen keine starren Systeme. Was wir implementieren, wächst mit Ihrem Unternehmen mit.',
  },
  {
    letter: 'N',
    title: 'Nachhaltig',
    description:
      'Kein Projekt, das nach drei Monaten niemand mehr bedient. Wir sorgen für echte Verankerung im Alltag.',
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
              Unsere Philosophie
            </p>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Das{' '}
              <span className="gradient-text">HUMAN</span>{' '}
              Framework
            </h2>
          </BlurFade>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, index) => (
            <BlurFade key={pillar.letter} delay={0.15 + index * 0.1}>
              <div
                className="relative overflow-hidden rounded-2xl border border-border bg-card p-7 h-full"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Big letter watermark */}
                <span className="absolute -right-1 -top-2 select-none text-6xl font-extrabold text-primary/20">
                  {pillar.letter}
                </span>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="mb-2 text-lg font-bold">{pillar.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
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
