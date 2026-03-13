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
    <section id="process" className="relative py-24 lg:py-32">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-primary/[0.03] blur-[120px]" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
          <BlurFade delay={0.1} inView>
            <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium tracking-wider text-primary mb-6">
              UNSER PROZESS
            </span>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              So arbeiten wir
            </h2>
          </BlurFade>
        </div>

        {/* Steps Grid with Connectors */}
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {/* Connecting line (desktop only) */}
          <div className="pointer-events-none absolute top-1/2 left-[16.67%] right-[16.67%] hidden -translate-y-1/2 md:block">
            <div className="h-px w-full bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />
            {/* Arrow indicators */}
            <div className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-2 w-2 rotate-45 border-r border-t border-primary/40" />
            </div>
            <div className="absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-2 w-2 rotate-45 border-r border-t border-primary/40" />
            </div>
          </div>

          {/* Connecting line (mobile only) */}
          <div className="pointer-events-none absolute left-8 top-[calc(33.33%-1rem)] bottom-[calc(33.33%-1rem)] md:hidden">
            <div className="h-full w-px bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0" />
          </div>

          {steps.map((step, index) => (
            <BlurFade key={step.number} delay={0.2 + index * 0.15} inView>
              <div className="relative bg-card border border-border rounded-2xl p-7 transition-all duration-500 hover:border-primary/20">
                {/* Step Number */}
                <span className="gradient-text text-5xl font-bold leading-none">
                  {step.number}
                </span>

                {/* Title */}
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {step.title}{' '}
                  {step.subtitle && (
                    <span className="text-base font-normal text-primary">
                      {step.subtitle}
                    </span>
                  )}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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
