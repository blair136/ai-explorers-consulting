import React from 'react';

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
  const scrollLogos = [...logos, ...logos];

  return (
    <section className="py-14 lg:py-16 border-y border-border/60 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-muted-foreground mb-10 tracking-widest uppercase">
          Vertraut von führenden Unternehmen
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/80 to-transparent z-10 pointer-events-none" />
          <div className="flex animate-scroll">
            {scrollLogos.map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-8 lg:mx-12 flex items-center justify-center h-12"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-7 lg:h-9 w-auto object-contain opacity-30 hover:opacity-60 transition-opacity duration-300 grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
