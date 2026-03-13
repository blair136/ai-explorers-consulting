import React from 'react';
import { cn } from '../lib/utils';

interface PillarData {
  letter: string;
  title: string;
  description: string;
}

const pillars: PillarData[] = [
  { letter: 'H', title: 'Holistisch', description: 'Wir betrachten Technik, Team und Kultur als eine Einheit für nachhaltigen Erfolg.' },
  { letter: 'U', title: 'User-Centric', description: 'Der Mensch steht im Mittelpunkt jeder Lösung. Akzeptanz ist unser wichtigster KPI.' },
  { letter: 'M', title: 'Moralisch', description: 'Verantwortungsvoller Umgang mit Daten und ethische KI-Prinzipien sind unser Standard.' },
  { letter: 'A', title: 'Adaptiv', description: 'Unsere Lösungen sind so flexibel wie der Markt und wachsen organisch mit Ihren Anforderungen.' },
  { letter: 'N', title: 'Nachhaltig', description: 'Keine kurzfristigen Hypes, sondern solide Infrastrukturen für die digitale Souveränität.' },
];

export default function HumanFramework() {
  return (
    <section id="human" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-primary font-semibold text-sm mb-3 tracking-wide uppercase">Unsere Philosophie</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-5">
            Das <span className="text-primary">HUMAN</span> Framework
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Echte Transformation gelingt nur, wenn Technologie den Menschen stärkt.
            Wir verbinden künstliche Intelligenz mit menschlicher Intuition.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {pillars.map((pillar) => (
            <div
              key={pillar.letter}
              className="group relative bg-card rounded-2xl border border-border p-7 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="text-4xl font-extrabold text-primary/20 group-hover:text-primary/40 transition-colors mb-4">
                {pillar.letter}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
