import React from 'react'
import { Particles } from '../components/ui/particles'
import { BlurFade } from '../components/ui/blur-fade'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[92vh] flex items-center overflow-hidden bg-background">
      {/* Mesh gradient overlay */}
      <div className="mesh-gradient absolute inset-0 z-0" />

      {/* Particles background */}
      <Particles
        className="absolute inset-0 z-[1]"
        quantity={80}
        color="#5eead4"
        ease={80}
        refresh
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="max-w-4xl flex flex-col gap-5 sm:gap-7">

          {/* Mono label */}
          <BlurFade delay={0}>
            <p className="font-mono text-xs text-primary tracking-widest uppercase">
              KI-Beratung & Implementierung · Mittelstand
            </p>
          </BlurFade>

          {/* Headline */}
          <BlurFade delay={0.05}>
            <h1 className="text-[1.75rem] leading-[1.15] font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              Ihre Fachkräfte verlieren täglich Stunden{' '}
              <span className="gradient-text italic font-light">an Aufgaben, die KI heute übernehmen kann.</span>
            </h1>
          </BlurFade>

          {/* Subtitle */}
          <BlurFade delay={0.12}>
            <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Wir zeigen Ihnen welche — und setzen es um. Von der Strategie bis zur produktiven Implementierung.
            </p>
          </BlurFade>

          {/* CTA buttons */}
          <BlurFade delay={0.2}>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all text-sm sm:text-base"
              >
                Kostenloses Erstgespräch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center px-7 py-3.5 rounded-full border border-border font-semibold text-foreground hover:border-primary hover:text-primary transition-colors text-sm sm:text-base"
              >
                Leistungen entdecken
              </a>
            </div>
          </BlurFade>

          {/* Trust indicators – simple inline text */}
          <BlurFade delay={0.28}>
            <div className="flex items-center gap-5 pt-1 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                DSGVO-konform
              </span>
              <span className="text-border">·</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Made in Germany
              </span>
              <span className="text-border">·</span>
              <span>Kostenlos & unverbindlich</span>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
