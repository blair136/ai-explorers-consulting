import React, { useState, useEffect } from 'react';

interface TrustSectionProps {
  onOpenDatenschutz: () => void;
}

function loadGoogleAnalytics() {
  const id = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!id) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) { (window as any).dataLayer.push(args); }
  (window as any).gtag = gtag;
  gtag('js', new Date());
  gtag('config', id);
}

export default function TrustSection({ onOpenDatenschutz }: TrustSectionProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent === 'all') {
      loadGoogleAnalytics();
    } else if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (type: string) => {
    localStorage.setItem('cookie-consent', type);
    if (type === 'all') {
      loadGoogleAnalytics();
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-500">
      <div className="bg-card border-t border-border shadow-2xl shadow-black/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            Wir nutzen Cookies und Google Analytics für eine bessere Nutzererfahrung und zur Analyse des Datenverkehrs.{' '}
            <button onClick={onOpenDatenschutz} className="text-primary hover:underline">
              Datenschutzerklärung
            </button>
          </p>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={() => handleConsent('necessary')}
              className="px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-accent transition-colors text-foreground"
            >
              Nur notwendige
            </button>
            <button
              onClick={() => handleConsent('all')}
              className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
