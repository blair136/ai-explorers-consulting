import React from 'react';
import { BlurFade } from '../components/ui/blur-fade';
import { useT } from '../lib/language';

const deSteps = [
  {
    number: '01',
    title: 'Erstgespräch',
    subtitle: '(15 Min.)',
    description: 'Wir analysieren gemeinsam, wo bei Ihnen das größte Automatisierungspotenzial liegt. Kostenlos, unverbindlich, konkret.',
  },
  {
    number: '02',
    title: 'Individuelle Roadmap',
    subtitle: undefined,
    description: 'Sie erhalten einen klaren Plan: welche Prozesse sich lohnen, was realistisch umsetzbar ist und was es kosten würde.',
  },
  {
    number: '03',
    title: 'Umsetzung & Begleitung',
    subtitle: undefined,
    description: 'Wir implementieren gemeinsam — so, dass Ihr Team danach eigenständig damit arbeiten kann.',
  },
];

const enSteps = [
  {
    number: '01',
    title: 'Discovery Call',
    subtitle: '(15 min.)',
    description: 'We jointly analyse where your greatest automation potential lies. Free, non-binding, concrete.',
  },
  {
    number: '02',
    title: 'Individual Roadmap',
    subtitle: undefined,
    description: 'You receive a clear plan: which processes are worth it, what\'s realistically achievable, and what it would cost.',
  },
  {
    number: '03',
    title: 'Implementation & Support',
    subtitle: undefined,
    description: 'We implement together — so your team can work independently with it afterwards.',
  },
];

const deHeader = { label: 'Unser Prozess', h2: 'So arbeiten wir' };
const enHeader = { label: 'Our Process', h2: 'How we work' };

export default function ProcessBlock() {
  const steps = useT(deSteps, enSteps);
  const header = useT(deHeader, enHeader);

  return (
    <section id="process" className="relative py-24 lg:py-32 bg-primary overflow-hidden">
      {/* Noise texture for depth */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"}} />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
          <BlurFade delay={0.1} inView>
            <p className="font-mono text-xs text-primary-foreground/60 tracking-widest uppercase mb-4">{header.label}</p>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              {header.h2}
            </h2>
          </BlurFade>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* Connecting line (desktop only) */}
          <div className="pointer-events-none absolute top-1/2 left-[16.67%] right-[16.67%] hidden -translate-y-1/2 md:block">
            <div className="h-px w-full bg-gradient-to-r from-primary-foreground/0 via-primary-foreground/50 to-primary-foreground/0" />
            <div className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-2 w-2 rotate-45 border-r border-t border-primary-foreground/60" />
            </div>
            <div className="absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-2 w-2 rotate-45 border-r border-t border-primary-foreground/60" />
            </div>
          </div>

          {steps.map((step, index) => (
            <BlurFade key={step.number} delay={0.2 + index * 0.15} inView>
              <div className="relative bg-background border border-border rounded-2xl p-5 sm:p-7 hover:border-primary/30 transition-all duration-300 h-full">
                {/* Step Number */}
                <span className="gradient-text text-4xl sm:text-5xl font-bold leading-none">
                  {step.number}
                </span>

                {/* Title */}
                <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-semibold text-foreground">
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
