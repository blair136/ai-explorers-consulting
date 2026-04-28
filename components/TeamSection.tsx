import React from 'react';
import { BlurFade } from '../components/ui/blur-fade';

const teamMembers = [
  {
    name: 'Lennart Werksnis',
    image: '/lennart.jpg',
    description:
      'KI-Berater mit tiefem Marktüberblick — welche Tools funktionieren, welche nicht, und wie man sie schnell in den Arbeitsalltag bringt. Lennart verbindet technische Umsetzung mit dem Agile-Coach-Blick auf Menschen und Teams.',
    tag: 'KI-Implementierung & Coaching',
  },
  {
    name: 'Andres Penaranda',
    image: '/andres.jpg',
    description:
      '10+ Jahre in komplexen Transformationsprojekten bei Volkswagen, Porsche und SAP. Andres weiß, wie Veränderung in gewachsenen Organisationen wirklich funktioniert — von der Strategie bis zum fertigen Prototypen.',
    tag: 'Strategie & Transformation',
  },
];

export default function TeamSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-primary/[0.06]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.08] blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <BlurFade delay={0.1} inView>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-2 h-2 bg-primary rotate-45 block" />
            <span className="font-mono text-xs text-primary tracking-widest uppercase">Unser Team</span>
            <span className="w-2 h-2 bg-primary rotate-45 block" />
          </div>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Wir sind{' '}
            <span className="gradient-text">AI Xplorers</span>
          </h2>
        </BlurFade>

        <BlurFade delay={0.25} inView>
          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-16">
            Technische Tiefe trifft menschliches Gespür — die Kombination, die KI-Projekte im Mittelstand wirklich zum Fliegen bringt.
          </p>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <BlurFade key={member.name} delay={0.3 + index * 0.15} inView>
              <div className="bg-card/80 backdrop-blur border border-primary/20 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center h-full hover:border-primary/40 transition-colors">
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
