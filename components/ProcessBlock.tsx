import React from 'react';
import { BlurFade } from '../components/ui/blur-fade';

const steps = [
  {
    number: '01',
    title: 'Erstgespräch',
    subtitle: '(15 Min.)',
    description:
      'Wir analysieren gemeinsam, wo bei Ihnen das größte Automatisierungspotenzial liegt. Kostenlos, unverbindlich, konkret.',
  },
  {
    number: '02',
    title: 'Individuelle Roadmap',
    description:
      'Sie erhalten einen klaren Plan: welche Prozesse sich lohnen, was realistisch umsetzbar ist und was es kosten würde.',
  },
  {
    number: '03',
    title: 'Umsetzung & Begleitung',
    description:
      'Wir implementieren gemeinsam — so, dass Ihr Team danach eigenständig damit arbeiten kann.',
  },
];

export default function ProcessBlock() {
  return (
    <section id="process" className="relative py-24 lg:py-32 bg-primary overflow-hidden">
      {/* Noise texture for depth */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"}} />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
          <BlurFade delay={0.1} inView>
            <p className="font-mono text-xs text-primary-foreground/60 tracking-widest uppercase mb-4">Unser Prozess</p>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              So arbeiten wir
            </h2>
          </BlurFade>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* Connecting line (desktop only) */}
          <div className="pointer-events-none absolute top-1/2 left-[16.67%] right-[16.67%] hidden -translate-y-1/2 md:block">
            <div className="h-px w-full bg-gradient-to-r from-primary-foreground/0 via-primary-foreground/30 to-primary-foreground/0" />
            <div className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-2 w-2 rotate-45 border-r border-t border-primary-foreground/40" />
            </div>
            <div className="absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-2 w-2 rotate-45 border-r border-t border-primary-foreground/40" />
            </div>
          </div>

          {steps.map((step, index) => (
            <BlurFade key={step.number} delay={0.2 + index * 0.15} inView>
              <div className="relative bg-primary-foreground/10 border border-primary-foreground/20 rounded-2xl p-5 sm:p-7 backdrop-blur-sm hover:bg-primary-foreground/15 transition-all duration-300">
                {/* Step Number */}
                <span className="text-4xl sm:text-5xl font-bold leading-none text-primary-foreground/30">
                  {step.number}
                </span>

                {/* Title */}
                <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-semibold text-primary-foreground">
                  {step.title}{' '}
                  {step.subtitle && (
                    <span className="text-base font-normal text-primary-foreground/60">
                      {step.subtitle}
                    </span>
                  )}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                  {step.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
