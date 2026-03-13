import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { BlurFade } from '../components/ui/blur-fade';
import { ShimmerButton } from '../components/ui/shimmer-button';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Wir haben keine IT-Abteilung – geht das trotzdem?',
      a: 'Absolut. Genau dafür gibt es uns. Wir übernehmen die komplette technische Umsetzung – von der Analyse über die Implementierung bis zur Schulung Ihres Teams. Einer unserer Kunden aus dem Maschinenbau hat ohne jegliches IT-Vorwissen innerhalb von 3 Wochen seinen kompletten Angebotsprozess automatisiert.',
    },
    {
      q: 'Was passiert mit unseren Unternehmensdaten?',
      a: 'Ihre Daten bleiben zu 100% bei Ihnen. Wir setzen auf private KI-Modelle und Enterprise-Schnittstellen innerhalb der EU. Nichts fließt in öffentliche Trainings-Datensätze. Wir arbeiten DSGVO-konform und unterzeichnen vor Projektstart eine Auftragsverarbeitungsvereinbarung (AVV).',
    },
    {
      q: 'Wie läuft die Zusammenarbeit konkret ab?',
      a: 'Alles beginnt mit einem unverbindlichen Auftragsklärungsgespräch, in dem wir Ihre Situation und Ziele verstehen. Daraus erstellen wir einen individuellen Plan – ob Workshops, Coaching, Ausbildung von AI Champions, Transformationsbegleitung oder technische Implementierung. Jede Zusammenarbeit ist so einzigartig wie Ihr Unternehmen.',
    },
    {
      q: 'Was kostet eine KI-Implementierung?',
      a: 'Das hängt stark vom Scope ab. Unsere Projekte starten typischerweise mit einem kleinen, klar abgegrenzten Prozess — so dass Sie schnell einen echten Eindruck von Aufwand und Nutzen bekommen. Im Erstgespräch geben wir Ihnen eine ehrliche Einschätzung.',
    },
    {
      q: 'Wie schnell sehen wir erste Ergebnisse?',
      a: 'Bei Automatisierungsprojekten oft innerhalb weniger Wochen. Wir starten bewusst klein und skalieren dann — so entstehen früh sichtbare Ergebnisse statt langer Wartezeiten.',
    },
  ];


  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <BlurFade delay={0} inView>
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm mb-3 tracking-wide uppercase">FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              Häufige Fragen
            </h2>
            <p className="text-muted-foreground text-lg">
              Die wichtigsten Antworten für Ihre Entscheidung.
            </p>
          </div>
        </BlurFade>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <BlurFade key={i} delay={0.05 * i} inView>
                <div
                  className={cn(
                    'border rounded-2xl transition-all duration-300',
                    isOpen ? 'bg-card border-primary/20 shadow-lg shadow-primary/5' : 'border-border hover:border-border/80 bg-card/50'
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="text-[15px] font-semibold text-foreground pr-4">{faq.q}</span>
                    <svg
                      className={cn('w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300', isOpen && 'rotate-180 text-primary')}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div className={cn('overflow-hidden transition-all duration-300', isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0')}>
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </BlurFade>
            );
          })}
        </div>

        <BlurFade delay={0.3} inView>
          <div className="mt-14 text-center">
            <p className="text-muted-foreground mb-5 text-sm">Noch weitere Fragen?</p>
            <a href="#contact">
              <ShimmerButton
                shimmerColor="#5eead4"
                background="rgba(16,24,40,0.9)"
                className="mx-auto text-sm font-semibold"
              >
                Kostenloses Erstgespräch vereinbaren
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </ShimmerButton>
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
