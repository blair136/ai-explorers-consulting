import React from 'react';
import { Marquee } from '../components/ui/marquee';

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

export default function LogoCloud() {
  return (
    <section className="py-14 lg:py-16 border-y border-border/40 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-muted-foreground mb-10 tracking-widest uppercase">
          Unternehmen, mit denen wir bereits gearbeitet haben
        </p>
        <div className="relative">
          <Marquee className="[--gap:2rem]" pauseOnHover>
            {logos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-14 mx-3 px-6 py-3 rounded-lg bg-white/8 hover:bg-white/12 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-6 lg:h-8 w-auto object-contain grayscale opacity-60 hover:opacity-90 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
