import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-20 lg:pt-0 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/60 via-background to-background" />
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[100px]" />
        <div className="absolute bottom-20 left-[-5%] w-[300px] h-[300px] rounded-full bg-primary/[0.03] blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              KI-Beratung für den Mittelstand
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
              Ihre Vision.{' '}
              <span className="text-primary">Unsere KI-Expertise.</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-10">
              Wir begleiten mittelständische Unternehmen bei der strategischen Einführung
              von Künstlicher Intelligenz — praxisnah, menschzentriert und mit messbaren Ergebnissen.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity text-[15px]"
              >
                Kostenloses Erstgespräch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-border text-foreground font-semibold rounded-xl hover:bg-accent transition-colors text-[15px]"
              >
                Leistungen entdecken
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              {['DSGVO-konform', '100+ Projekte', 'Made in Germany'].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/10" />
              <div className="absolute inset-8 rounded-2xl bg-gradient-to-br from-white via-white to-primary/5 border border-border shadow-lg flex flex-col items-center justify-center p-10 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-foreground mb-2">KI-Strategie</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Von der Analyse bis zur Implementierung — wir machen KI greifbar.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                  <div className="bg-accent rounded-xl p-3 text-center">
                    <div className="text-xl font-bold text-primary">85%</div>
                    <div className="text-xs text-muted-foreground">Effizienzsteigerung</div>
                  </div>
                  <div className="bg-accent rounded-xl p-3 text-center">
                    <div className="text-xl font-bold text-primary">4 Wo.</div>
                    <div className="text-xs text-muted-foreground">Time to Value</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-white border border-border shadow-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div className="absolute -bottom-3 -left-3 w-16 h-16 rounded-xl bg-white border border-border shadow-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
