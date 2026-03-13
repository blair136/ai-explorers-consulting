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
          <Marquee className="[--gap:3rem]" pauseOnHover>
            {logos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-12 mx-4"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-7 lg:h-9 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
