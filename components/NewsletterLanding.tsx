import React from 'react';
import BeehiivEmbed from './BeehiivEmbed';

export default function NewsletterLanding() {
  const valueProps = [
    {
      title: 'Einordnung statt Nachricht',
      text: 'Sie bekommen nicht die hundertste Meldung über ein neues KI-Tool, sondern eine fundierte Bewertung: Was davon ist relevant für Unternehmen mit 20–500 Mitarbeitenden?',
    },
    {
      title: 'Konkrete Handlungsimpulse',
      text: 'Jede Ausgabe enthält mindestens eine Idee, die Sie direkt in Ihrem Unternehmen umsetzen oder an Ihr Team weitergeben können.',
    },
    {
      title: 'Geschrieben für Führungskräfte, nicht für Entwickler',
      text: 'Klar, kompakt, auf Deutsch. Keine Abkürzungen, die man erst googeln muss.',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative pt-20 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/60 via-background to-background -z-10" />
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Wöchentliches KI-Briefing
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            Jeden Dienstag die KI-Entwicklungen, die Sie als{' '}
            <span className="text-primary">Führungskraft</span> kennen sollten.
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Kein überzogener Hype, kein Technik-Jargon. Sondern: Was hat sich diese Woche verändert?
            Was bedeutet das für den Mittelstand? In 5 Minuten gelesen.
          </p>

          <BeehiivEmbed />

          <p className="mt-6 text-muted-foreground text-sm">
            Jederzeit kündbar. Kein Spam. Nur das, was zählt.
          </p>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-center mb-14">
            Was den <span className="text-primary">KI-Kompass</span> unterscheidet
          </h2>
          <div className="space-y-8">
            {valueProps.map((prop, idx) => (
              <div key={idx} className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">{idx + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{prop.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{prop.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-8">
            5 Minuten pro Woche.{' '}
            <span className="text-primary">Der klarste KI-Überblick für den Mittelstand.</span>
          </h2>
          <BeehiivEmbed />
          <p className="mt-6 text-muted-foreground text-sm">
            Jeden Dienstag. Jederzeit kündbar. DSGVO-konform.
          </p>
        </div>
      </section>

      <footer className="py-8 border-t border-border text-center">
        <div className="flex justify-center gap-6 text-xs text-muted-foreground">
          <span>Impressum</span>
          <span>Datenschutz</span>
          <span>&copy; 2026 AI Explorers</span>
        </div>
      </footer>
    </div>
  );
}
