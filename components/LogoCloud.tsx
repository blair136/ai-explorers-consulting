import React from 'react';
import { Marquee } from '../components/ui/marquee';
import { useT } from '../lib/language';

const logos = [
  { name: 'Bosch', src: 'Bosch.png' },
  { name: 'Porsche', src: 'Porsche_Logo.svg.png' },
  { name: 'SAP', src: 'SAP_2011_logo.svg.png' },
  { name: 'Coca-Cola', src: 'Coca-Cola-logo.png' },
  { name: 'Deutsche Bahn', src: 'Deutsche_Bahn_AG-Logo.svg.webp' },
  { name: 'AGCO', src: 'agco-logo.svg' },
  { name: 'Audi', src: 'audi-14-logo-png-transparent.png' },
  { name: 'MFS', src: 'mfs_logo_2025.webp' },
  { name: 'Terra Institute', src: 'terra_institute_logo (2).png' },
  { name: 'VM', src: 'vm logo.png' },
];

const de = { label: 'Unternehmen, mit denen wir bereits gearbeitet haben' };
const en = { label: 'Companies we have already worked with' };

export default function LogoCloud() {
  const t = useT(de, en);

  return (
    <section className="py-14 lg:py-16 border-y border-border/40 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-muted-foreground mb-10 tracking-widest uppercase">
          {t.label}
        </p>
        <div className="relative">
          <Marquee className="[--gap:1.5rem]" pauseOnHover>
            {logos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center mx-3 px-8 py-5 bg-gradient-to-br from-zinc-100 to-zinc-50 hover:from-white hover:to-zinc-100 rounded-xl border border-white/10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500"
                style={{ boxShadow: '0 4px 6px -1px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.08) inset' }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 lg:h-10 w-auto object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
