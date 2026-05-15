import React from 'react';
import { useT } from '../lib/language';

interface FooterProps {
  onOpenLegal: (type: 'impressum' | 'datenschutz') => void;
}

const de = {
  tagline: 'Ihre Partner für die menschliche KI-Transformation im Mittelstand. Wir machen Technologie greifbar.',
  companyHeading: 'Firma',
  legalHeading: 'Rechtliches',
  links: {
    services: 'Leistungen',
    framework: 'HUMAN Framework',
    contact: 'Kontakt',
    impressum: 'Impressum',
    datenschutz: 'Datenschutz',
    cookies: 'Cookie-Einstellungen',
  },
  copyright: '© 2026 AI Xplorers GmbH. Alle Rechte vorbehalten.',
  madeIn: 'Made in Germany.',
};

const en = {
  tagline: 'Your partners for human-centred AI transformation in mid-sized companies. We make technology tangible.',
  companyHeading: 'Company',
  legalHeading: 'Legal',
  links: {
    services: 'Services',
    framework: 'HUMAN Framework',
    contact: 'Contact',
    impressum: 'Impressum',
    datenschutz: 'Privacy Policy',
    cookies: 'Cookie Settings',
  },
  copyright: '© 2026 AI Xplorers GmbH. All rights reserved.',
  madeIn: 'Made in Germany.',
};

export default function Footer({ onOpenLegal }: FooterProps) {
  const t = useT(de, en);

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
              {t.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">{t.companyHeading}</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">{t.links.services}</a></li>
              <li><a href="#human" className="hover:text-primary transition-colors">{t.links.framework}</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">{t.links.contact}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">{t.legalHeading}</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><button onClick={() => onOpenLegal('impressum')} className="hover:text-primary transition-colors">{t.links.impressum}</button></li>
              <li><button onClick={() => onOpenLegal('datenschutz')} className="hover:text-primary transition-colors">{t.links.datenschutz}</button></li>
              <li><button className="hover:text-primary transition-colors" onClick={() => { localStorage.removeItem('cookie-consent'); window.location.reload(); }}>{t.links.cookies}</button></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border text-xs text-muted-foreground gap-2">
          <p>{t.copyright}</p>
          <p className="text-primary/60">{t.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}
