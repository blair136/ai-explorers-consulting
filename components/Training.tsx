import React, { useState } from 'react';
import { BlurFade } from './ui/blur-fade';

const CHECK = (
  <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
  </svg>
);

const skills = [
  'Eigene KI-Tools und Automatisierungen mit Claude Code entwickeln',
  'Prompts strukturiert und präzise formulieren',
  'Code verstehen, debuggen und gezielt verbessern',
  'APIs und externe Services anbinden',
  'Datenbanken einrichten und verwalten',
  'Projekte von der Idee bis zum Launch begleiten',
  'KI-Workflows in den Unternehmensalltag integrieren',
  'Mit Claude Max effizient und sicher arbeiten',
];

const personas = [
  {
    icon: '🚀',
    title: 'Unternehmer & Gründer',
    description: 'Founder, die MVPs selbst bauen, schneller testen und unabhängig von Entwicklern agieren wollen.',
  },
  {
    icon: '💼',
    title: 'Führungskräfte & Manager',
    description: 'Alle, die ihre Teams KI-fit machen, Prozesse modernisieren und fundierte Entscheidungen treffen wollen.',
  },
  {
    icon: '🌱',
    title: 'Quereinsteiger',
    description: 'Menschen ohne Tech-Background, die einen praktischen Einstieg in KI-gestützte Entwicklung suchen.',
  },
];

const days = [
  {
    day: 'Tag 1',
    time: '09:00 – 17:00 Uhr',
    title: 'Grundlagen & erste Projekte mit Claude Code',
    subtitle: 'Verstehe, wie KI wirklich funktioniert — und baue dein erstes eigenes Tool.',
    agenda: [
      { type: 'Impulsvortrag', items: ['Was Claude Code ist und wie es sich von anderen KI-Tools unterscheidet', 'Wie du KI richtig steuerst — Mindset statt Magie', 'Grundprinzipien effektiver Prompts'] },
      { type: 'Übungen', items: ['Erste Schritte in Claude Code', 'Eigene Prozesse und Ideen strukturieren', 'Prompts für konkrete Aufgaben entwickeln', 'Erstes Mini-Projekt aufsetzen'] },
    ],
  },
  {
    day: 'Tag 2',
    time: '09:00 – 17:00 Uhr',
    title: 'Claude Code in der Praxis',
    subtitle: 'Komplexere Projekte realisieren, Fehler debuggen, APIs und Datenbanken einbinden.',
    agenda: [
      { type: 'Impulsvortrag', items: ['Projektstruktur und Workflows für professionelle Ergebnisse', 'APIs, Integrationen und externe Services', 'Datenbanken verstehen und einrichten', 'Claude Max optimal einsetzen'] },
      { type: 'Übungen', items: ['Vollständiges Projekt mit API-Anbindung aufbauen', 'Fehler identifizieren und beheben', 'Code iterativ verbessern', 'Deployment und Launch vorbereiten'] },
    ],
  },
  {
    day: 'Tag 3',
    time: '09:00 – 17:00 Uhr',
    title: 'Dein Abschlussprojekt',
    subtitle: 'Alle Teilnehmer realisieren ihr eigenes Projekt — begleitet durch unsere Experten.',
    agenda: [
      { type: 'Fortgeschrittenes', items: ['MCP Server Setup und Claude-Erweiterungen', 'Cheatcodes für produktives Arbeiten mit Claude', 'Qualitätssicherung und Best Practices', 'Q&A mit den Trainern'] },
      { type: 'Abschlussprojekt', items: ['Projektskizze mit dem AI Xplorers Workbook', 'Umsetzung des eigenen Projekts', 'Team-Pitch und Feedback', 'Zertifikatsübergabe'] },
    ],
  },
];

const testimonials = [
  {
    quote: 'Absolut praxisnah und direkt anwendbar. Nach drei Tagen hatte ich mein erstes eigenes Tool live — das hätte ich nicht für möglich gehalten.',
    name: 'Markus T.',
    role: 'Geschäftsführer, Mittelstand',
  },
  {
    quote: 'Lennart und Andres nehmen einem wirklich die Scheu vor dem Thema. Ich bin ohne Programmierkenntnisse rein und mit einem fertigen Projekt raus.',
    name: 'Sara K.',
    role: 'Marketing-Leiterin',
  },
  {
    quote: 'Endlich ein Training, das nicht nur Buzzwords erklärt, sondern echte Hands-on-Erfahrung gibt. Sehr empfehlenswert.',
    name: 'Florian B.',
    role: 'Strategieberater',
  },
];

const dates = [
  { date: '09.–11.06.2026', spots: 3, available: true },
  { date: '07.–09.07.2026', spots: 8, available: true },
  { date: '08.–10.09.2026', spots: 8, available: true },
];

const tools = [
  {
    name: 'Claude Code',
    description: 'Das Terminal-basierte KI-Tool von Anthropic. Du arbeitest direkt mit dem Modell — kein GUI-Layer, maximale Kontrolle.',
    tag: 'Kernwerkzeug',
  },
  {
    name: 'Claude Max',
    description: 'Inklusive im Trainingspaket. Das leistungsstärkste Claude-Abo — höhere Limits, schnellere Antworten, mehr Kontext.',
    tag: 'Im Paket enthalten',
  },
  {
    name: 'AI Xplorers Workbook',
    description: 'Dein strukturierter Begleiter durch alle drei Tage. Frameworks, Vorlagen und deine persönliche KI-Roadmap — zum Mitnehmen.',
    tag: 'Zum Mitnehmen',
  },
];

const useCases = [
  'Interne Business-Automatisierungen',
  'Eigene SaaS-Lösungen',
  'KI-gestützte Datenanalyse',
  'Custom Chatbots & Assistenten',
  'Marketing- und Content-Workflows',
  'Reporting-Tools und Dashboards',
  'und vieles mehr …',
];

const whys = [
  {
    title: 'Live statt Videokurs',
    description: 'Du lernst live in einer Kleingruppe mit direktem Austausch — kein passives Zuschauen, kein Alleine-durchkämpfen.',
  },
  {
    title: 'Experten aus der Praxis',
    description: 'Lennart und Andres setzen KI täglich in echten Projekten ein. Du profitierst von echter Erfahrung, nicht von Theorie.',
  },
  {
    title: 'Projektfokussiert',
    description: 'Kein reines Frontaltraining. Du entwickelst ein reales Projekt, das du direkt für deinen Arbeitsalltag nutzen kannst.',
  },
  {
    title: 'Claude Max inklusive',
    description: 'Alle Teilnehmer erhalten Claude Max für die Trainingsdauer — du arbeitest mit dem gleichen Setup wie unsere Profis.',
  },
];

export default function Training() {
  const [openDay, setOpenDay] = useState<number>(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" onClick={() => { window.location.hash = ''; }} className="flex items-center">
            <img src="/logos/1.png" alt="AI Xplorers" className="h-8 w-auto" />
          </a>
          <div className="flex items-center gap-4">
            <a href="#training-booking" className="text-sm text-muted-foreground hover:text-primary transition-colors hidden sm:block">
              Termine
            </a>
            <a
              href="#training-booking"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Jetzt buchen
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="mesh-gradient absolute inset-0 -z-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <BlurFade delay={0}>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Live Remote', '3 Tage', 'Max. 8 Personen', 'Zertifikat'].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary border border-primary/20 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </BlurFade>
            <BlurFade delay={0.05}>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">KI-Training</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                Claude Code Training
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
                In drei Tagen lernst du, eigene KI-Lösungen, Automatisierungen und Tools mit Claude Code zu entwickeln — begleitet durch unsere Experten, ohne jahrelange Vorkenntnisse.
              </p>
            </BlurFade>
            <BlurFade delay={0.1}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#training-booking"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors text-base"
                >
                  Jetzt Training buchen
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="#training-agenda"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:border-primary hover:text-primary transition-colors text-base"
                >
                  Trainingsvorschau
                </a>
              </div>
            </BlurFade>
          </div>

          {/* Quick facts */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Dauer', value: '3 Tage' },
              { label: 'Ort', value: 'Live Remote' },
              { label: 'Trainer', value: 'Lennart & Andres' },
              { label: 'Abschluss', value: 'Zertifikat' },
              { label: 'Plätze', value: 'Max. 8' },
              { label: 'Inklusive', value: 'Claude Max' },
            ].map((fact) => (
              <div key={fact.label} className="bg-card border border-border rounded-xl p-4 text-center">
                <p className="text-xs text-muted-foreground mb-1">{fact.label}</p>
                <p className="text-sm font-bold text-foreground">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Intro */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <BlurFade delay={0.1} inView>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Die Realität</p>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">
                Vom Prompt zum fertigen Produkt.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Viele glauben, ein paar Prompts reichen — und schon entsteht Software. Die Realität sieht anders aus. Damit aus einer Idee ein echtes, funktionierendes Tool wird, braucht es Struktur, die richtigen Workflows und ein tiefes Verständnis dafür, wie man Claude wirklich steuert.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Genau das zeigen wir dir. Wir lösen mit dir alle technischen Hürden und begleiten dich Schritt für Schritt — von der ersten Idee bis zur fertigen Lösung.
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={0.15} inView>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-5">Deine Skills nach dem Training</p>
              <ul className="space-y-3">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-3 text-foreground">
                    {CHECK}
                    <span className="text-base leading-snug">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Target audience */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Zielgruppe</p>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Für wen ist das Training?</h2>
            </div>
          </BlurFade>
          <div className="grid md:grid-cols-3 gap-6">
            {personas.map((p, i) => (
              <BlurFade key={p.title} delay={0.1 + i * 0.08} inView>
                <div className="bg-card border border-border rounded-2xl p-8 h-full">
                  <span className="text-4xl mb-4 block">{p.icon}</span>
                  <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section id="training-agenda" className="py-20 lg:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Programm</p>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Ablauf des Trainings</h2>
            </div>
          </BlurFade>

          <div className="space-y-4 max-w-3xl mx-auto">
            {days.map((day, i) => (
              <BlurFade key={day.day} delay={0.1 + i * 0.05} inView>
                <div className="border border-border rounded-2xl overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-card/50 transition-colors"
                    onClick={() => setOpenDay(openDay === i ? -1 : i)}
                  >
                    <div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">{day.day} · {day.time}</span>
                      <h3 className="text-lg font-bold mt-1">{day.title}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{day.subtitle}</p>
                    </div>
                    <svg
                      className={`w-5 h-5 text-muted-foreground shrink-0 ml-4 transition-transform duration-200 ${openDay === i ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDay === i && (
                    <div className="px-6 pb-6 border-t border-border pt-5 space-y-5">
                      {day.agenda.map((block) => (
                        <div key={block.type}>
                          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{block.type}</p>
                          <ul className="space-y-1.5">
                            {block.items.map((item) => (
                              <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                                <span className="text-primary mt-0.5">—</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <BlurFade key={t.name} delay={0.1 + i * 0.08} inView>
                <div className="bg-card border border-border rounded-2xl p-8 h-full flex flex-col">
                  <p className="text-foreground leading-relaxed mb-6 flex-1">„{t.quote}"</p>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* What you can build */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Möglichkeiten</p>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Das kannst du nach dem Training entwickeln</h2>
            </div>
          </BlurFade>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {useCases.map((uc) => (
              <span
                key={uc}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {uc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Ausstattung</p>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Was du bekommst</h2>
            </div>
          </BlurFade>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tools.map((tool, i) => (
              <BlurFade key={tool.name} delay={0.1 + i * 0.08} inView>
                <div className="bg-card border border-border rounded-2xl p-7 h-full">
                  <span className="inline-block px-2.5 py-1 text-xs font-semibold bg-primary/10 text-primary border border-primary/20 rounded-full mb-4">
                    {tool.tag}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{tool.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{tool.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Trainer</p>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Deine Experten</h2>
            </div>
          </BlurFade>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                name: 'Lennart Werksnis',
                role: 'KI-Implementierung & Coaching',
                bio: 'Lennart implementiert KI-Lösungen in Unternehmen und trainiert Teams im Umgang mit modernen KI-Tools. Bei AI Xplorers verantwortet er die technische Seite und sorgt dafür, dass Theorie zu echter Praxis wird.',
                image: '/lennart.jpg',
              },
              {
                name: 'Andres Penaranda',
                role: 'Strategie & Transformation',
                bio: 'Andres begleitet Unternehmen durch die strategische KI-Transformation. Er verbindet Business-Denken mit technologischem Verständnis und hilft dabei, KI nachhaltig in Organisationen zu verankern.',
                image: '/andres.jpg',
              },
            ].map((trainer, i) => (
              <BlurFade key={trainer.name} delay={0.1 + i * 0.08} inView>
                <div className="bg-card border border-border rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-20 h-20 rounded-full object-cover shrink-0 border-2 border-primary/20"
                  />
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{trainer.role}</p>
                    <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{trainer.bio}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Booking / Dates */}
      <section id="training-booking" className="py-20 lg:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Termine</p>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Alle Trainingstermine</h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Du willst mit deinem Team teilnehmen? Ab drei Personen bieten wir einen Gruppenrabatt.{' '}
                <a href="mailto:hello@ai-xplorers.de" className="text-primary hover:underline">Schreib uns einfach.</a>
              </p>
            </div>
          </BlurFade>

          <div className="mt-10 space-y-4 max-w-2xl mx-auto">
            {dates.map((d, i) => (
              <BlurFade key={d.date} delay={0.1 + i * 0.06} inView>
                <div className="bg-card border border-border rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-xl font-bold">{d.date}</p>
                    <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
                      <span>Live Remote</span>
                      <span>·</span>
                      <span>09:00 – 17:00 Uhr</span>
                      <span>·</span>
                      <span>🇩🇪 Deutsch</span>
                      <span>·</span>
                      <span className={d.spots <= 3 ? 'text-amber-400' : 'text-primary'}>
                        {d.spots} {d.spots === 1 ? 'Platz' : 'Plätze'} frei
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Preis</p>
                      <p className="font-bold text-lg">auf Anfrage</p>
                    </div>
                    <a
                      href="mailto:hello@ai-xplorers.de?subject=Anfrage%20Claude%20Code%20Training"
                      className="px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
                    >
                      Jetzt anfragen
                    </a>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>

          {/* Details card */}
          <div className="mt-8 max-w-2xl mx-auto bg-card border border-border rounded-2xl p-6">
            <p className="text-sm font-semibold mb-4">Im Training inklusive:</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                'Claude Max für die Trainingsdauer',
                'AI Xplorers Workbook',
                'Alle Übungsprojekte und Materialien',
                'Zugang zur Alumni-Community',
                'Zertifikat: Claude Code Professional',
                '1 Follow-up-Session nach dem Training',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  {CHECK}
                  {item}
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
              Voraussetzung: Laptop mit Internetzugang. Kein Vorwissen in Programmierung erforderlich.
            </p>
          </div>
        </div>
      </section>

      {/* Why AI Xplorers */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Warum AI Xplorers</p>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Warum mit uns lernen?</h2>
            </div>
          </BlurFade>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whys.map((w, i) => (
              <BlurFade key={w.title} delay={0.1 + i * 0.07} inView>
                <div className="bg-card border border-border rounded-2xl p-7 h-full">
                  <h3 className="text-lg font-bold mb-3">{w.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{w.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Inhouse */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="bg-card border border-border rounded-2xl p-10 lg:p-16 text-center max-w-3xl mx-auto">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Für Teams</p>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                Hol dir Claude Code Skills in dein Team.
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Wir bieten das Training auch als Inhouse-Format an — remote oder direkt bei euch. Das Programm wird individuell auf euren Arbeitsalltag und eure Use Cases zugeschnitten.
              </p>
              <a
                href="mailto:hello@ai-xplorers.de?subject=Inhouse%20Training%20Anfrage"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Inhouse Training anfragen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="mesh-gradient absolute inset-0 -z-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Bereit für dein{' '}
              <span className="gradient-text">erstes eigenes KI-Tool?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Sprich mit Lennart oder Andres — kostenlos und unverbindlich. Wir finden gemeinsam heraus, ob das Training zu dir passt.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:hello@ai-xplorers.de?subject=Anfrage%20Claude%20Code%20Training"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors text-base"
              >
                Kostenloses Erstgespräch
              </a>
              <a
                href="#training-booking"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground font-medium rounded-lg hover:border-primary hover:text-primary transition-colors text-base"
              >
                Alle Termine ansehen
              </a>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Footer strip */}
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <a href="#" onClick={() => { window.location.hash = ''; }} className="flex items-center">
            <img src="/logos/1.png" alt="AI Xplorers" className="h-7 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          </a>
          <p>&copy; 2026 AI Xplorers GmbH</p>
          <p>
            <a href="mailto:hello@ai-xplorers.de" className="hover:text-primary transition-colors">hello@ai-xplorers.de</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
