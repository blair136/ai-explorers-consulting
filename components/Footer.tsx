import React from 'react';

interface FooterProps {
  onOpenLegal: (type: 'impressum' | 'datenschutz') => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/logos/1.png"
                alt="AI Xplorers"
                className="h-9 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Ihre Partner für die menschliche KI-Transformation im Mittelstand.
              Wir machen Technologie greifbar.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">Firma</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Leistungen</a></li>
              <li><a href="#human" className="hover:text-primary transition-colors">HUMAN Framework</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">Rechtliches</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><button onClick={() => onOpenLegal('impressum')} className="hover:text-primary transition-colors">Impressum</button></li>
              <li><button onClick={() => onOpenLegal('datenschutz')} className="hover:text-primary transition-colors">Datenschutz</button></li>
              <li><button className="hover:text-primary transition-colors" onClick={() => { localStorage.removeItem('cookie-consent'); window.location.reload(); }}>Cookie-Einstellungen</button></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border text-xs text-muted-foreground gap-2">
          <p>&copy; 2026 AI Xplorers GmbH. Alle Rechte vorbehalten.</p>
          <p className="text-primary/60">Made in Germany.</p>
        </div>
      </div>
    </footer>
  );
}
