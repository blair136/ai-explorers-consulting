import React from 'react';
import { cn } from '../lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, accent }) => (
  <div className="group relative bg-card rounded-2xl border border-border p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
    <div className={cn(
      "w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300",
      accent
    )}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-primary font-semibold text-sm mb-3 tracking-wide uppercase">Unsere Leistungen</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-5">
            Technologie trifft{' '}
            <span className="text-primary">wirklichen Nutzen</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Wir analysieren Ihre Prozesse und implementieren Lösungen, die direkten Mehrwert schaffen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            title="KI-Strategie"
            description="Wir entwickeln Ihre Roadmap für messbare Wettbewerbsvorteile. Klarer Fahrplan statt vager Experimente."
            accent="bg-primary/10 text-primary"
            icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>}
          />
          <ServiceCard
            title="Prozess-Automatisierung"
            description="Sparen Sie hunderte Arbeitsstunden. Wir automatisieren Routineaufgaben durch intelligente KI-Agenten."
            accent="bg-blue-50 text-blue-600"
            icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" /></svg>}
          />
          <ServiceCard
            title="Individuelle KI-Lösungen"
            description="Maßgeschneiderte Software, die Ihre Unternehmensdaten in einen Wettbewerbsvorteil verwandelt."
            accent="bg-violet-50 text-violet-600"
            icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>}
          />
          <ServiceCard
            title="Training & Vorträge"
            description="Wir machen Ihr Team KI-fit. Praxis-Workshops, die sofortige Produktivitätssteigerung bewirken."
            accent="bg-emerald-50 text-emerald-600"
            icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" /></svg>}
          />
        </div>
      </div>
    </section>
  );
}
