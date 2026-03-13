import React, { useState } from 'react';
import { cn } from '../lib/utils';

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
      a: 'timeline',
    },
    {
      q: 'Was kostet eine KI-Implementierung?',
      a: 'Das hängt vom Umfang ab – aber wir arbeiten bewusst mit dem Mittelstand, nicht mit DAX-Budgets. Die meisten Projekte starten als fokussierter Pilot mit einem einzelnen Prozess. So sehen Sie schnell Ergebnisse bei überschaubarem Investment. Im Strategie-Gespräch kalkulieren wir transparent, was Ihr konkreter Use Case kostet.',
    },
    {
      q: 'Wie schnell sehen wir erste Ergebnisse?',
      a: 'Die meisten Teams spüren den Unterschied nach 2–4 Wochen. Ein typisches Beispiel: Ein Handelsunternehmen hat durch automatisierte Angebotserfassung 12 Stunden pro Woche eingespart – ab der dritten Woche nach Go-Live.',
    },
  ];

  const timelineSteps = [
    { step: '01', title: 'Strategie-Gespräch', desc: '15 Min. Potenzial-Analyse – kostenlos & unverbindlich', duration: 'Tag 1' },
    { step: '02', title: 'Prozess-Audit', desc: 'Wir identifizieren Ihre Top-3 Automatisierungspotenziale', duration: 'Woche 1' },
    { step: '03', title: 'Pilot-Projekt', desc: 'Ein Kernprozess wird KI-gestützt automatisiert', duration: 'Woche 2–4' },
    { step: '04', title: 'Rollout & Skalierung', desc: 'Ausweitung auf weitere Prozesse & Team-Schulung', duration: 'Ab Woche 5' },
  ];

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm mb-3 tracking-wide uppercase">FAQ</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Häufige Fragen
          </h2>
          <p className="text-muted-foreground text-lg">
            Die wichtigsten Antworten für Ihre Entscheidung.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={cn(
                  'border rounded-2xl transition-all duration-200',
                  isOpen ? 'bg-card border-primary/20 shadow-sm' : 'border-border hover:border-border/80 bg-card/50'
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="text-[15px] font-semibold text-foreground pr-4">{faq.q}</span>
                  <svg
                    className={cn('w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200', isOpen && 'rotate-180')}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={cn('overflow-hidden transition-all duration-300', isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0')}>
                  <div className="px-6 pb-6">
                    {faq.a === 'timeline' ? (
                      <div className="space-y-4">
                        {timelineSteps.map((step, si) => (
                          <div key={si} className="flex gap-4">
                            <div className="flex flex-col items-center">
                              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <span className="text-primary text-xs font-bold">{step.step}</span>
                              </div>
                              {si < timelineSteps.length - 1 && (
                                <div className="w-px h-full min-h-[20px] bg-border mt-1" />
                              )}
                            </div>
                            <div className="pb-2 -mt-0.5">
                              <div className="flex items-center gap-2 mb-0.5">
                                <span className="font-semibold text-foreground text-sm">{step.title}</span>
                                <span className="text-[11px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">{step.duration}</span>
                              </div>
                              <p className="text-sm text-muted-foreground">{step.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <p className="text-muted-foreground mb-5 text-sm">Noch weitere Fragen?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            Kostenloses Erstgespräch vereinbaren
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
