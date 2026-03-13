import React, { useState, useEffect } from 'react';

interface TrustSectionProps {
  onOpenDatenschutz: () => void;
}

export default function TrustSection({ onOpenDatenschutz }: TrustSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-foreground font-medium mb-1">Für ein optimales Erlebnis</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Wir nutzen Cookies, um unsere Website zu verbessern.{' '}
            <button onClick={onOpenDatenschutz} className="text-primary hover:underline">Mehr erfahren</button>
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => { localStorage.setItem('cookie-consent', 'necessary'); setIsVisible(false); }}
            className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            Nur notwendige
          </button>
          <button
            onClick={() => { localStorage.setItem('cookie-consent', 'all'); setIsVisible(false); }}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
