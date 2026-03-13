import React, { useState } from 'react';
import { BlurFade } from '../components/ui/blur-fade';
import { ShimmerButton } from '../components/ui/shimmer-button';
import { ShineBorder } from '../components/ui/shine-border';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'loading'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setName('');
    }, 1500);
  };

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <BlurFade delay={0} inView>
          <div className="relative bg-card rounded-3xl p-10 lg:p-16 w-full border border-border overflow-hidden">
            <ShineBorder shineColor={["#5eead4", "#06b6d4", "#14b8a6"]} />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Wöchentliches KI-Briefing
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-4">
                  <span className="gradient-text">KI-Kompass</span> für den Mittelstand
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Erhalten Sie jeden Dienstag eine fundierte Einordnung aktueller KI-Entwicklungen
                  und Impulse für Ihre Organisationsentwicklung.
                </p>
                <ul className="space-y-3">
                  {['Jeden Dienstag: eine konkrete KI-Entwicklung, eingeordnet für den Mittelstand', 'Praxisbeispiele aus echten Automatisierungsprojekten', 'Nur was wirklich relevant für Ihr Unternehmen ist'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground">
                      <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-[15px] font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {status === 'success' ? (
                  <div className="text-center py-8 px-6 bg-primary/10 rounded-2xl border border-primary/20">
                    <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">Vielen Dank!</h3>
                    <p className="text-muted-foreground">Sie sind jetzt für den KI-Kompass angemeldet.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Ihr Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-5 py-3.5 rounded-xl bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    />
                    <input
                      type="email"
                      placeholder="E-Mail-Adresse"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-5 py-3.5 rounded-xl bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    />
                    <ShimmerButton
                      type="submit"
                      disabled={status === 'loading'}
                      shimmerColor="#5eead4"
                      background="rgba(16,24,40,0.9)"
                      className="w-full text-sm font-semibold py-3.5"
                      borderRadius="12px"
                    >
                      {status === 'loading' ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Jetzt kostenlos abonnieren
                          <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </>
                      )}
                    </ShimmerButton>
                    <p className="text-xs text-muted-foreground text-center">
                      Mit der Anmeldung akzeptieren Sie unsere Datenschutzbestimmungen. Abmeldung jederzeit möglich.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
