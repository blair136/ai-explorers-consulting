import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { BlurFade } from '../components/ui/blur-fade';
import { ShimmerButton } from '../components/ui/shimmer-button';
import { useT } from '../lib/language';

const deFaqs = [
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

const enFaqs = [
  {
    q: "We don't have an IT department — does this still work?",
    a: "Absolutely. That's exactly what we're here for. We handle the entire technical implementation — from analysis through implementation to training your team. One of our clients from mechanical engineering automated his entire quotation process within 3 weeks, with zero IT knowledge.",
  },
  {
    q: 'What happens to our company data?',
    a: 'Your data stays 100% with you. We use private AI models and enterprise interfaces within the EU. Nothing flows into public training datasets. We work GDPR-compliant and sign a data processing agreement (DPA) before the project starts.',
  },
  {
    q: 'How does the collaboration actually work?',
    a: "Everything starts with a non-binding discovery call where we understand your situation and goals. From this we create an individual plan — whether workshops, coaching, training AI Champions, transformation support or technical implementation. Every collaboration is as unique as your company.",
  },
  {
    q: 'What does an AI implementation cost?',
    a: 'That depends heavily on scope. Our projects typically start with a small, clearly defined process — so you quickly get a real sense of the effort and benefit involved. In the discovery call we give you an honest assessment.',
  },
  {
    q: 'How quickly do we see first results?',
    a: 'With automation projects, often within a few weeks. We deliberately start small and then scale — so tangible results emerge early rather than long waiting times.',
  },
];

const deHeader = {
  label: 'FAQ',
  h2: 'Häufige Fragen',
  subtitle: 'Die wichtigsten Antworten für Ihre Entscheidung.',
  moreQuestions: 'Noch weitere Fragen?',
  ctaBtn: 'Kostenloses Erstgespräch vereinbaren',
};

const enHeader = {
  label: 'FAQ',
  h2: 'Frequently Asked Questions',
  subtitle: 'The most important answers for your decision.',
  moreQuestions: 'More questions?',
  ctaBtn: 'Book a free discovery call',
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = useT(deFaqs, enFaqs);
  const header = useT(deHeader, enHeader);

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <BlurFade delay={0} inView>
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm mb-3 tracking-wide uppercase">{header.label}</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              {header.h2}
            </h2>
            <p className="text-muted-foreground text-lg">
              {header.subtitle}
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
            <p className="text-muted-foreground mb-5 text-sm">{header.moreQuestions}</p>
            <a href="#contact">
              <ShimmerButton
                shimmerColor="#5eead4"
                background="rgba(16,24,40,0.9)"
                className="mx-auto text-sm font-semibold"
              >
                {header.ctaBtn}
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
