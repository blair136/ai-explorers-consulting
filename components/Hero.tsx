import React from 'react'
import { Particles } from '../components/ui/particles'
import { ShimmerButton } from '../components/ui/shimmer-button'
import { BlurFade } from '../components/ui/blur-fade'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-background">
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
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-4xl flex flex-col gap-7">
          {/* Headline */}
          <BlurFade delay={0} inView>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.15]">
              <span className="text-foreground">Ihre Fachkräfte verlieren täglich Stunden </span>
              <span className="gradient-text">an Aufgaben, die KI heute übernehmen kann.</span>
            </h1>
          </BlurFade>

          {/* Subtitle */}
          <BlurFade delay={0.1} inView>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Wir zeigen Ihnen welche — und setzen es um.
            </p>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground/70">
              Von der Strategie bis zur produktiven Implementierung.
            </p>
          </BlurFade>

          {/* CTA buttons */}
          <BlurFade delay={0.2} inView>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#contact">
                <ShimmerButton
                  shimmerColor="#5eead4"
                  background="rgba(16,24,40,0.9)"
                  className="px-8 py-4 text-base font-semibold"
                >
                  Kostenloses Erstgespräch
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </ShimmerButton>
              </a>

              <a
                href="#services"
                className="rounded-full border border-border px-8 py-4 text-base font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Leistungen entdecken
              </a>
            </div>
          </BlurFade>

          {/* Trust badges */}
          <BlurFade delay={0.3} inView>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
                <svg
                  className="h-4 w-4 text-[#5eead4]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
                DSGVO-konform
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
                <svg
                  className="h-4 w-4 text-[#5eead4]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                  />
                </svg>
                Made in Germany
              </span>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
