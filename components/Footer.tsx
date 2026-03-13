import React from 'react';

interface FooterProps {
  onOpenLegal: (type: 'impressum' | 'datenschutz') => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-foreground">AI Explorers</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Ihre Partner für die menschliche KI-Transformation im Mittelstand.
              Wir machen Technologie greifbar.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">Firma</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors">Leistungen</a></li>
              <li><a href="#human" className="hover:text-foreground transition-colors">HUMAN Framework</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">Rechtliches</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><button onClick={() => onOpenLegal('impressum')} className="hover:text-foreground transition-colors">Impressum</button></li>
              <li><button onClick={() => onOpenLegal('datenschutz')} className="hover:text-foreground transition-colors">Datenschutz</button></li>
              <li><button className="hover:text-foreground transition-colors" onClick={() => { localStorage.removeItem('cookie-consent'); window.location.reload(); }}>Cookie-Einstellungen</button></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border text-xs text-muted-foreground gap-2">
          <p>&copy; 2026 AI Explorers GmbH. Alle Rechte vorbehalten.</p>
          <p>Made in Germany.</p>
        </div>
      </div>
    </footer>
  );
}
