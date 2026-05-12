import React, { useState } from 'react';
import { BlurFade } from './ui/blur-fade';
import Navbar from './Navbar';

const CHECK = (
  <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
  </svg>
);

const skills = [
  'Ideen strukturiert ausarbeiten, schärfen und validieren',
  'Ein digitales Produkt von der Idee bis zum Launch begleiten',
  'Die Product Canvas als Werkzeug souverän einsetzen',
  'Gutes Design erkennen, finden und gezielt anwenden',
  'Erste Apps mit Base44 bauen und iterieren',
  'Claude Code in der Claude App nutzen',
  'APIs verstehen und externe Services einbinden',
  'KI DSGVO-konform im Unternehmen einsetzen',
];

const personas = [
  {
    title: 'Unternehmer & Gründer',
    description: 'Founder, die MVPs selbst bauen, schneller testen und unabhängig von Entwicklern agieren wollen.',
  },
  {
    title: 'Führungskräfte & Manager',
    description: 'Alle, die ihre Teams KI-fit machen, Prozesse modernisieren und fundierte Entscheidungen treffen wollen.',
  },
  {
    title: 'Quereinsteiger',
    description: 'Menschen ohne Tech-Background, die einen praktischen Einstieg in KI-gestützte Entwicklung suchen.',
  },
];

const days = [
  {
    day: 'Tag 1',
    time: '09:00 – 17:00 Uhr',
    title: 'Von der Idee zur ersten App',
    subtitle: 'Idee schärfen, validieren — und direkt die ersten Apps mit Base44 bauen.',
    agenda: [
      { type: 'Impulsvortrag', items: ['Was ein digitales Produkt wirklich auszeichnet', 'Der Innovationsprozess — von Design Thinking bis Product Development', 'KI & Datenschutz: DSGVO-konforme KI-Nutzung'] },
      { type: 'Methoden & Übungen', items: ['Ideen ausarbeiten: Problem Statements, How Might We', 'Nutzer verstehen, Value Proposition schärfen', 'Product Canvas: MVP definieren und priorisieren'] },
      { type: 'Erste Umsetzung mit Base44', items: ['Einführung in Base44 — vom Prompt zur laufenden App', 'Erste Apps gemeinsam bauen und ausprobieren', 'Schnell iterieren: Feedback einbauen, Ideen testen'] },
    ],
  },
  {
    day: 'Tag 2',
    time: '09:00 – 17:00 Uhr',
    title: 'Claude Code einrichten & eigene App aufsetzen',
    subtitle: 'Claude Code wird installiert, eingerichtet und direkt für das eigene Projekt eingesetzt.',
    agenda: [
      { type: 'Impulsvortrag', items: ['Was gutes Design ausmacht — Prinzipien, Quellen, Inspiration', 'API-Schnittstellen verstehen und einbinden', 'Base44 vs. Claude Code: Wann was sinnvoll ist'] },
      { type: 'Claude Code Setup', items: ['Claude Code installieren und konfigurieren', 'Skills und Extensions einrichten', 'Erste Workflows verstehen'] },
      { type: 'Projekt-Umsetzung', items: ['Eigene App-Idee mit Claude Code aufsetzen', 'Projektstruktur anlegen, erste Features bauen', 'Externe APIs und Services anbinden'] },
    ],
  },
  {
    day: 'Tag 3',
    time: '09:00 – 17:00 Uhr',
    title: 'App fertigstellen & Abschlussprojekt',
    subtitle: 'Das eigene Projekt wird weiterentwickelt, verfeinert und abgeschlossen.',
    agenda: [
      { type: 'Vertiefung', items: ['Fortgeschrittene Claude-Code-Workflows', 'Qualitätssicherung: gute von schlechten KI-Outputs unterscheiden', 'Q&A und individuelle Problemlösungen'] },
      { type: 'Abschlussprojekt', items: ['App weiterentwickeln und finalisieren', 'Persönliche KI-Roadmap aus dem Workbook ableiten', 'Abschlusspräsentation und Pitch', 'Zertifikatsübergabe & Ausblick'] },
    ],
  },
];

const tools = [
  { name: 'Base44', tag: 'Tag 1', description: 'Der schnellste Weg vom Konzept zur ersten laufenden App. Kein Setup, kein Code — sofort loslegen.' },
  { name: 'Claude Code', tag: 'Tag 2–3', description: 'Für komplexere Lösungen direkt in der Claude App. Mehr Kontrolle, mehr Möglichkeiten.' },
  { name: 'Claude Max', tag: 'Inklusive', description: 'Im Trainingspaket enthalten. Höhere Limits, schnellere Antworten, mehr Kontext.' },
  { name: 'AI Xplorers Workbook', tag: 'Zum Mitnehmen', description: 'Product Canvas, Frameworks, Vorlagen und deine persönliche KI-Roadmap.' },
];

const dates = [
  { date: '09.–11.06.2026', spots: 3, available: true },
  { date: '07.–09.07.2026', spots: 8, available: true },
  { date: '08.–10.09.2026', spots: 8, available: true },
];

const whys = [
  { title: 'Live statt Videokurs', description: 'Du lernst live in einer Kleingruppe mit direktem Austausch — kein passives Zuschauen.' },
  { title: 'Experten aus der Praxis', description: 'Lennart und Andres setzen KI täglich in echten Projekten ein. Echte Erfahrung, keine Theorie.' },
  { title: 'Projektfokussiert', description: 'Du entwickelst ein reales Projekt, das du direkt im Arbeitsalltag nutzen kannst.' },
];

/* ─── SECTION LABEL ──────────────────────────────────────────────────────── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">{children}</p>
  );
}

export default function Training() {
  const [openDay, setOpenDay] = useState<number>(0);

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Navbar ── */}
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="mesh-gradient absolute inset-0 -z-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: text */}
            <div>
              <BlurFade delay={0}>
                <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
                  KI-Training · Live Remote · Max. 8 Personen
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1] mb-6">
                  Entwickle eigene<br />
                  KI-Tools —{' '}
                  <span className="gradient-italic">begleitet durch</span>{' '}
                  unsere Experten.
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                  In 3 Tagen lernst du, mit Claude Code eigene Automatisierungen, Apps und Tools zu bauen — ohne jahrelange Vorkenntnisse.
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  <a href="#training-booking" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                    Jetzt Training buchen
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </a>
                  <a href="#training-agenda" className="inline-flex items-center gap-2 px-6 py-3 border border-border font-medium rounded-lg hover:border-primary hover:text-primary transition-colors">
                    Trainingsvorschau
                  </a>
                </div>

                {/* Next date */}
                <div>
                  <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-1">Nächster Trainingstermin</p>
                  <p className="text-primary font-semibold">09.–11. Juni 2026</p>
                </div>
              </BlurFade>
            </div>

            {/* Right: trainer photos */}
            <BlurFade delay={0.1}>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                    <img src="/lennart.jpg" alt="Lennart Werksnis" className="w-full h-full object-cover object-top" />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white font-semibold text-sm">Lennart Werksnis</p>
                      <p className="text-white/70 text-xs">KI-Implementierung</p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mt-8">
                    <img src="/andres.jpg" alt="Andres Penaranda" className="w-full h-full object-cover object-top" />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white font-semibold text-sm">Andres Penaranda</p>
                      <p className="text-white/70 text-xs">Strategie & Transformation</p>
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Quick facts bar */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 border-t border-border pt-8">
            {[
              { label: 'Dauer', value: '3 Tage' },
              { label: 'Ort', value: 'Live Remote' },
              { label: 'Trainer', value: 'Lennart & Andres' },
              { label: 'Abschluss', value: 'Zertifikat' },
              { label: 'Plätze', value: 'Max. 8' },
              { label: 'Inklusive', value: 'Claude Max' },
            ].map((f) => (
              <div key={f.label} className="flex flex-col gap-0.5">
                <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">{f.label}</p>
                <p className="text-sm font-semibold text-foreground">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem / Intro ── */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <BlurFade delay={0.1} inView>
            <div>
              <Label>Das Training</Label>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight mb-6">
                KI-Coding: Vom Prompt<br />zum fertigen <span className="gradient-italic">Produkt.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Viele glauben, ein paar Prompts reichen — und schon entsteht Software. Die Realität sieht anders aus. Damit aus einer Idee ein echtes, funktionierendes Tool wird, braucht es Struktur, die richtigen Workflows und ein tiefes Verständnis dafür, wie man KI wirklich steuert.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Genau das zeigen wir dir. Wir lösen alle technischen Hürden und begleiten dich Schritt für Schritt — von der ersten Idee bis zur fertigen Lösung.
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={0.15} inView>
            <div>
              <Label>Deine Skills nach dem Training</Label>
              <ul className="space-y-3">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-3">
                    {CHECK}
                    <span className="text-foreground leading-snug">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Target audience ── */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <Label>Zielgruppe</Label>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-10">
              Für wen ist das Training <span className="gradient-italic">geeignet?</span>
            </h2>
          </BlurFade>
          <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {personas.map((p, i) => (
              <BlurFade key={p.title} delay={0.1 + i * 0.07} inView>
                <div className="bg-card p-8 h-full">
                  <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── Agenda ── */}
      <section id="training-agenda" className="py-20 lg:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <BlurFade delay={0.1} inView>
            <div className="lg:sticky lg:top-24">
              <Label>Programm</Label>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                Ablauf des<br /><span className="gradient-italic">Trainings</span>
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Drei intensive Tage — von der Idee zur fertigen App. Jeder Tag baut auf dem vorherigen auf.
              </p>
            </div>
          </BlurFade>

          <div className="space-y-3">
            {days.map((day, i) => (
              <BlurFade key={day.day} delay={0.1 + i * 0.05} inView>
                <div className="border border-border rounded-2xl overflow-hidden">
                  <button
                    className="w-full flex items-start justify-between p-6 text-left hover:bg-card/50 transition-colors"
                    onClick={() => setOpenDay(openDay === i ? -1 : i)}
                  >
                    <div>
                      <p className="font-mono text-xs text-primary tracking-widest uppercase mb-1">{day.day} · {day.time}</p>
                      <h3 className="text-lg font-bold">{day.title}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{day.subtitle}</p>
                    </div>
                    <svg className={`w-5 h-5 text-muted-foreground shrink-0 ml-4 mt-1 transition-transform duration-200 ${openDay === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDay === i && (
                    <div className="px-6 pb-6 border-t border-border pt-5 space-y-5">
                      {day.agenda.map((block) => (
                        <div key={block.type}>
                          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-2">{block.type}</p>
                          <ul className="space-y-1.5">
                            {block.items.map((item) => (
                              <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                                <span className="text-primary shrink-0 mt-0.5">—</span>
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

      {/* ── Tools ── */}
      <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
        {/* Noise texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"}} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <p className="font-mono text-xs text-primary-foreground/60 tracking-widest uppercase mb-4">Ausstattung</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-primary-foreground mb-10">
              Welche Tools kommen <span className="font-light italic text-primary-foreground/75">zum Einsatz?</span>
            </h2>
          </BlurFade>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/20 rounded-2xl overflow-hidden">
            {tools.map((tool, i) => (
              <BlurFade key={tool.name} delay={0.1 + i * 0.07} inView>
                <div className="bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors p-7 h-full">
                  <p className="font-mono text-xs text-primary-foreground/55 tracking-widest uppercase mb-3">{tool.tag}</p>
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">{tool.name}</h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">{tool.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trainer ── */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <Label>Trainer</Label>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-12">
              Deine <span className="gradient-italic">Experten</span>
            </h2>
          </BlurFade>
          <div className="space-y-12">
            {[
              { name: 'Lennart Werksnis', role: 'KI-Implementierung & Coaching', image: '/lennart.jpg', bio: 'Lennart implementiert KI-Lösungen in Unternehmen und trainiert Teams im Umgang mit modernen KI-Tools. Bei AI Xplorers verantwortet er die technische Seite und sorgt dafür, dass Theorie zu echter Praxis wird.' },
              { name: 'Andres Penaranda', role: 'Strategie & Transformation', image: '/andres.jpg', bio: 'Andres begleitet Unternehmen durch die strategische KI-Transformation. Er verbindet Business-Denken mit technologischem Verständnis und hilft dabei, KI nachhaltig in Organisationen zu verankern.' },
            ].map((trainer, i) => (
              <BlurFade key={trainer.name} delay={0.1 + i * 0.08} inView>
                <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
                  <div className="overflow-hidden rounded-2xl aspect-[4/5]">
                    <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="lg:pt-4">
                    <p className="font-mono text-xs text-primary tracking-widest uppercase mb-2">{trainer.role}</p>
                    <h3 className="text-3xl font-bold mb-4">{trainer.name}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">{trainer.bio}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking / Dates ── */}
      <section id="training-booking" className="py-20 lg:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <BlurFade delay={0.1} inView>
            <div className="lg:sticky lg:top-24">
              <Label>Termine</Label>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight mb-4">
                Alle Trainings<span className="gradient-italic">termine</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Mit deinem Team dabei? Ab 3 Personen bieten wir Gruppenrabatt.{' '}
                <a href="mailto:hello@ai-xplorers.de" className="text-primary hover:underline">Einfach anfragen.</a>
              </p>
              <div className="space-y-2 text-sm">
                {['Claude Max für die Trainingsdauer', 'AI Xplorers Workbook', 'Alle Materialien & Übungsprojekte', 'Zertifikat: Claude Code Professional', '1 Follow-up-Session'].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-muted-foreground">{CHECK}{item}</div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-6 pt-4 border-t border-border">Voraussetzung: Laptop + Internet. Keine Programmierkenntnisse nötig.</p>
            </div>
          </BlurFade>

          <div className="space-y-3">
            {dates.map((d, i) => (
              <BlurFade key={d.date} delay={0.1 + i * 0.06} inView>
                <div className="border border-border rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-primary/30 transition-colors">
                  <div>
                    <p className="text-xl font-bold mb-1">{d.date}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <span>Live Remote</span>
                      <span>09:00 – 17:00 Uhr</span>
                      <span>🇩🇪 Deutsch</span>
                      <span className={d.spots <= 3 ? 'text-amber-400' : 'text-primary'}>{d.spots} Plätze frei</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-right">
                      <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Preis</p>
                      <p className="font-bold">auf Anfrage</p>
                    </div>
                    <a href="mailto:hello@ai-xplorers.de?subject=Anfrage%20Claude%20Code%20Training" className="px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap">
                      Jetzt anfragen
                    </a>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why ── */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <Label>Warum AI Xplorers</Label>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-10">
              Warum mit uns <span className="gradient-italic">lernen?</span>
            </h2>
          </BlurFade>
          <div className="grid md:grid-cols-3 gap-8">
            {whys.map((w, i) => (
              <BlurFade key={w.title} delay={0.1 + i * 0.07} inView>
                <div className="border-t border-border pt-6">
                  <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">/{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="text-xl font-bold mb-2">{w.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{w.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── Inhouse ── */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <BlurFade delay={0.1} inView>
            <div>
              <Label>Für Teams</Label>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight mb-4">
                Hol dir Claude Code Skills<br />in <span className="gradient-italic">dein Team.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Wir bieten das Training auch als Inhouse-Format an — remote oder direkt bei euch. Das Programm wird individuell auf euren Arbeitsalltag und eure Use Cases zugeschnitten.
              </p>
              <a href="mailto:hello@ai-xplorers.de?subject=Inhouse%20Training%20Anfrage" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                Inhouse Training anfragen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </a>
            </div>
          </BlurFade>
          <BlurFade delay={0.15} inView>
            <div className="grid grid-cols-2 gap-3">
              {['Remote oder vor Ort', 'Individuell zugeschnitten', 'Für 5–20 Personen', 'Eigene Use Cases'].map((item) => (
                <div key={item} className="border border-border rounded-xl p-5 text-sm font-medium text-foreground">
                  {item}
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative py-28 border-t border-border overflow-hidden">
        <div className="mesh-gradient absolute inset-0 -z-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <Label>Bereit loslegen?</Label>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 max-w-2xl leading-tight">
              Bereit für dein erstes <span className="gradient-italic">eigenes KI-Tool?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl">
              Sprich mit Lennart oder Andres — kostenlos und unverbindlich. Wir finden gemeinsam heraus, ob das Training zu dir passt.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:hello@ai-xplorers.de?subject=Anfrage%20Claude%20Code%20Training" className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                Kostenloses Erstgespräch
              </a>
              <a href="#training-booking" className="inline-flex items-center gap-2 px-7 py-3.5 border border-border font-medium rounded-lg hover:border-primary hover:text-primary transition-colors">
                Alle Termine ansehen
              </a>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <a href="#" onClick={() => { window.location.hash = ''; }}>
            <img src="/logos/1.png" alt="AI Xplorers" className="h-7 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          </a>
          <p>© 2026 AI Xplorers GmbH</p>
          <a href="mailto:hello@ai-xplorers.de" className="hover:text-primary transition-colors">hello@ai-xplorers.de</a>
        </div>
      </footer>
    </div>
  );
}
