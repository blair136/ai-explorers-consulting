import React from 'react';
import { BlurFade } from '../components/ui/blur-fade';
import { useT } from '../lib/language';

const deMembers = [
  {
    name: 'Lennart Werksnis',
    image: '/lennart.jpg',
    description: 'KI-Berater mit tiefem Marktüberblick — welche Tools funktionieren, welche nicht, und wie man sie schnell in den Arbeitsalltag bringt. Lennart verbindet technische Umsetzung mit dem Agile-Coach-Blick auf Menschen und Teams.',
    tag: 'KI-Implementierung & Coaching',
  },
  {
    name: 'Andres Penaranda',
    image: '/andres.jpg',
    description: '10+ Jahre in komplexen Transformationsprojekten bei Volkswagen, Porsche und SAP. Andres weiß, wie Veränderung in gewachsenen Organisationen wirklich funktioniert — von der Strategie bis zum fertigen Prototypen.',
    tag: 'Strategie & Transformation',
  },
];

const enMembers = [
  {
    name: 'Lennart Werksnis',
    image: '/lennart.jpg',
    description: "AI consultant with deep market knowledge — which tools work, which don't, and how to integrate them quickly into everyday work. Lennart combines technical implementation with an Agile Coach's perspective on people and teams.",
    tag: 'AI Implementation & Coaching',
  },
  {
    name: 'Andres Penaranda',
    image: '/andres.jpg',
    description: '10+ years in complex transformation projects at Volkswagen, Porsche and SAP. Andres knows how change really works in established organisations — from strategy to finished prototype.',
    tag: 'Strategy & Transformation',
  },
];

const deHeader = {
  label: 'Unser Team',
  h2_part1: 'Wir sind',
  h2_italic: 'AI Xplorers',
  subtitle: 'Technische Tiefe trifft menschliches Gespür — die Kombination, die KI-Projekte im Mittelstand wirklich zum Fliegen bringt.',
};

const enHeader = {
  label: 'Our Team',
  h2_part1: 'We are',
  h2_italic: 'AI Xplorers',
  subtitle: 'Technical depth meets human intuition — the combination that makes AI projects really take off in mid-sized companies.',
};

export default function TeamSection() {
  const teamMembers = useT(deMembers, enMembers);
  const header = useT(deHeader, enHeader);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <BlurFade delay={0.1} inView>
          <div className="flex justify-center mb-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">{header.label}</p>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            {header.h2_part1}{' '}
            <span className="gradient-text">{header.h2_italic}</span>
          </h2>
        </BlurFade>

        <BlurFade delay={0.25} inView>
          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-16">
            {header.subtitle}
          </p>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <BlurFade key={member.name} delay={0.3 + index * 0.15} inView>
              <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center h-full">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold gradient-text mb-1">
                  {member.name}
                </h3>
                <span className="text-xs font-medium text-primary/70 uppercase tracking-wider mb-4">
                  {member.tag}
                </span>
                <p className="text-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
