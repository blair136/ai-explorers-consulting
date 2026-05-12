import React, { useState } from 'react';
import { BlurFade } from './ui/blur-fade';
import Navbar from './Navbar';

/* ─── DATA ─────────────────────────────────────────────────────────────── */

const whyItems = [
  {
    num: '/01',
    title: 'Schluss mit Pilot-Friedhöfen',
    body: 'Die meisten KI-Initiativen scheitern nicht an der Technik. Sie scheitern daran, dass niemand weiß, wer ab Tag 30 verantwortlich ist.',
  },
  {
    num: '/02',
    title: 'Klarheit vor Werkzeug',
    body: 'Jede Stufe liefert greifbare Ergebnisse, die im Unternehmen weiterleben – auch wenn wir wieder weg sind.',
  },
  {
    num: '/03',
    title: 'Ihr Tempo, nicht unseres',
    body: 'Sie steigen ein, wo Sie heute stehen. Wir gehen so weit mit, wie Sie heute gehen wollen.',
  },
  {
    num: '/04',
    title: 'Mensch im Mittelpunkt',
    body: 'Mitarbeitende werden Mitgestalter. Das ist der Unterschied zwischen Akzeptanz und stiller Verweigerung.',
  },
];

const stages = [
  {
    letter: 'H',
    name: 'Human-first',
    step: 'Stufe 01 / 05',
    id: 'stage-h',
    headline: 'Der Mensch vor der Technologie.',
    intro:
      'Bevor wir auch nur ein Tool öffnen, klären wir, wofür der Aufwand gut ist. Wer profitiert konkret, wer braucht Klarheit, wer hat Sorgen. Diese Stufe ist die Versicherung gegen das, was später am häufigsten schiefgeht: Lösungen, die niemand nutzt.',
    rows: [
      {
        label: 'Was',
        content:
          'Wir setzen die Leitplanken, die Werte und das Zielbild für KI in Ihrem Unternehmen. Mitarbeitende, Führung und Geschäftsleitung kommen ins gleiche Bild.',
      },
      {
        label: 'Wie',
        content:
          'Stakeholder-Interviews, ein moderierter Kick-off-Workshop, ein erster KI-Readiness-Check. Wir hören zu, bevor wir vorschlagen.',
      },
      {
        label: 'Output',
        content:
          'Ein KI-Leitbild für Ihr Unternehmen, eine Stakeholder-Landkarte, eine Auslegeordnung der Sorgen und Hoffnungen im Team.',
      },
    ],
    benefit: 'Sie wissen, warum Sie KI machen, bevor Sie wissen, womit. Das spart später Monate an Diskussionen.',
  },
  {
    letter: 'U',
    name: 'Understand',
    step: 'Stufe 02 / 05',
    id: 'stage-u',
    headline: 'Wir verstehen, bevor wir vorschlagen.',
    intro:
      'Jeder Mittelständler ist anders. Andere Prozesse, andere Datenlage, andere Engpässe. Wir gehen ins Tagesgeschäft, in die Fachabteilungen, in die echten Workflows. Hier entsteht das Wissen, das eine generische Beratung nie hat.',
    rows: [
      {
        label: 'Was',
        content:
          'Wir analysieren Prozesse, Datenflüsse, Tools und vor allem die Schmerzpunkte des Tagesgeschäfts. Wo geht Zeit verloren? Wo hakt die Kommunikation? Wo gibt es Wissen, das niemand findet?',
      },
      {
        label: 'Wie',
        content:
          'Begleitete Arbeitstage in den Fachabteilungen, strukturierte Interviews, Datenraum-Sichtung, eine ehrliche Bewertung der technischen Voraussetzungen.',
      },
      {
        label: 'Output',
        content:
          'Eine Ist-Analyse mit priorisierten Pain Points, eine Datenraum-Bewertung und eine erste Hypothese, wo KI den größten Hebel hätte.',
      },
    ],
    benefit: 'Sie bekommen einen ehrlichen Spiegel. Keine Pitch-Folien, sondern ein Bild, das Ihr Team wiedererkennt.',
  },
  {
    letter: 'M',
    name: 'Map',
    step: 'Stufe 03 / 05',
    id: 'stage-m',
    headline: 'Wir machen die Anwendungsfälle sichtbar.',
    intro:
      'Aus dem Verständnis wird ein konkreter Plan. Wir mappen Use Cases, bewerten sie nach Aufwand und Wirkung und sortieren sie auf einer Roadmap, die zu Ihrem Tempo und Ihrem Budget passt.',
    rows: [
      {
        label: 'Was',
        content:
          'Wir identifizieren konkrete KI-Anwendungsfälle, bewerten sie auf Wirtschaftlichkeit, Machbarkeit und Risiko und definieren erste Quick Wins.',
      },
      {
        label: 'Wie',
        content:
          'Use-Case-Workshops mit Fach- und Führungskräften, eine strukturierte Priorisierungsmatrix, technische und rechtliche Vorprüfung der Top-Kandidaten.',
      },
      {
        label: 'Output',
        content:
          'Eine KI-Roadmap mit drei bis fünf priorisierten Use Cases, Business Cases zu jedem davon und ein Vorschlag für den ersten Pilot.',
      },
    ],
    benefit:
      'Sie haben einen Plan, den Sie der Geschäftsführung zeigen können. Mit Zahlen, mit Reihenfolge, mit Verantwortlichkeiten.',
  },
  {
    letter: 'A',
    name: 'Adapt',
    step: 'Stufe 04 / 05',
    id: 'stage-a',
    headline: 'Wir passen an. Statt einzuführen.',
    intro:
      'Hier wird gebaut, getestet, angepasst. Ein erster Use Case wird produktiv gemacht, parallel werden Mitarbeitende geschult. Wichtig dabei: Wir liefern keine fertige Lösung von der Stange. Wir formen sie an Ihre Realität.',
    rows: [
      {
        label: 'Was',
        content:
          'Wir setzen den ersten Use Case produktiv um, schulen das Team und etablieren die Strukturen, die KI im Alltag tragen müssen.',
      },
      {
        label: 'Wie',
        content:
          'Iterative Pilotumsetzung mit echten Anwendern, Hands-on-Schulungen, Aufbau interner Champions, parallele Klärung von Datenschutz und Governance.',
      },
      {
        label: 'Output',
        content:
          'Ein produktiver KI-Use-Case, geschulte Anwender, eine erste interne KI-Governance und messbare Ergebnisse aus dem Pilot.',
      },
    ],
    benefit:
      'Sie haben den ersten echten Beweis, dass es funktioniert. Im eigenen Haus, mit eigenen Daten, mit eigenen Leuten.',
  },
  {
    letter: 'N',
    name: 'Navigate',
    step: 'Stufe 05 / 05',
    id: 'stage-n',
    headline: 'Wir bleiben als Lotse dran.',
    intro:
      'KI ist kein Projekt mit Enddatum. Sie ist eine Reise. Stufe fünf macht aus einem ersten Erfolg ein dauerhaftes Können. Wir bleiben Sparringspartner, während Sie eigenständig weiter ausrollen.',
    rows: [
      {
        label: 'Was',
        content:
          'Wir begleiten den weiteren Roll-out, halten die Lernkurve der Organisation hoch und justieren bei Marktveränderungen oder neuen Modellen nach.',
      },
      {
        label: 'Wie',
        content:
          'Quartalsweise Review-Runden, on-demand Sparring, Trend-Updates, Skalierung weiterer Use Cases, interne Community-of-Practice.',
      },
      {
        label: 'Output',
        content:
          'Eine lernende Organisation, die KI eigenständig weiterentwickelt, mit uns als externem Korrektiv im Hintergrund.',
      },
    ],
    benefit:
      'Sie verlieren nicht den Anschluss, wenn sich die Technologie das nächste Mal überschlägt. Und das wird sie.',
  },
];

const caseStages = [
  { letter: 'H', label: 'Human-first · Woche 01–02', text: 'Kick-off mit Geschäftsführung und 12 Schlüsselrollen. Erstes Aha: Drei Abteilungen hatten parallel und ohne Kenntnis voneinander mit KI experimentiert. Gemeinsames Leitbild definiert, Sorgen offen adressiert.' },
  { letter: 'U', label: 'Understand · Woche 03–06', text: 'Begleitung in Vertrieb, Service und Produktion. Größter Schmerzpunkt: Angebotserstellung. Im Schnitt 4,5 Stunden pro Angebot, weil technische Spezifikationen aus drei Systemen manuell zusammengetragen wurden.' },
  { letter: 'M', label: 'Map · Woche 07–09', text: '14 Use Cases identifiziert, fünf vertieft, zwei priorisiert. Nummer eins: KI-gestützte Angebotserstellung. Roadmap mit Quick Wins, mittelfristigen Hebeln und langfristigen Bausteinen verabschiedet.' },
  { letter: 'A', label: 'Adapt · Woche 10–22', text: 'Pilot in der Vertriebsabteilung. Acht interne Champions geschult. RAG-Lösung an die drei Quellsysteme angebunden. Iterativ verfeinert, bis das Team es selbst nutzte. Datenschutz und interne KI-Richtlinie parallel etabliert.' },
  { letter: 'N', label: 'Navigate · ab Woche 23', text: 'Quartals-Reviews, Skalierung in den Service, interne KI-Community gestartet. Zweiter Use Case läuft heute selbstständig vom internen Team — wir sind Sparringspartner im Hintergrund.' },
];

const caseResults = [
  { number: '−62 %', desc: 'weniger Zeit pro Angebot' },
  { number: '3,2×', desc: 'mehr Angebote pro Vertriebsmitarbeiter' },
  { number: '94 %', desc: 'Nutzungsquote im Pilotteam' },
];

const faqs = [
  { q: 'Müssen wir bei Stufe H starten oder können wir mittendrin einsteigen?', a: 'Sie können einsteigen, wo Sie heute stehen. Haben Sie schon ein Leitbild und Use Cases identifiziert, starten wir bei Map oder Adapt. Allerdings prüfen wir die früheren Stufen kurz, weil dort oft die Ursachen für spätere Stolpersteine liegen.' },
  { q: 'Wie lange dauert ein vollständiger Durchlauf?', a: 'Von Stufe H bis zum produktiven ersten Use Case planen wir typischerweise vier bis sechs Monate. Stufe N läuft danach kontinuierlich weiter, in einem Rhythmus, den Sie bestimmen.' },
  { q: 'Brauchen wir eigene Daten-Infrastruktur, bevor das Sinn macht?', a: 'Nein. Genau das prüfen wir in Stufe U. Viele Mittelständler unterschätzen, wie weit sie mit den vorhandenen Systemen kommen. Wenn Lücken da sind, benennen wir sie ehrlich.' },
  { q: 'Was passiert, wenn unsere Mitarbeitenden skeptisch sind?', a: 'Skepsis ist Information. In Stufe H holen wir genau diese Stimmen aktiv ab. Mitarbeitende werden Mitgestalter, nicht Empfänger. Das ändert die Akzeptanzkurve drastisch.' },
  { q: 'Wie ist das mit Datenschutz und EU AI Act?', a: 'Beides ist von Stufe eins an mit am Tisch. In Stufe M prüfen wir die regulatorische Vorprüfung jedes Use Cases, in Stufe A bauen wir die passende Governance-Struktur mit auf.' },
  { q: 'Was kostet das Ganze?', a: 'Das hängt von Tiefe und Tempo ab. Wir arbeiten in Modulen pro Stufe und schnüren ein Paket, das zu Ihrem Budget passt. Im Erstgespräch geben wir eine erste Größenordnung mit.' },
];

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */

export default function HumanFrameworkPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Navbar ── */}
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="mesh-gradient absolute inset-0 -z-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Breadcrumb */}
          <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-10">
            <a href="#" onClick={() => { window.location.hash = ''; }} className="hover:text-primary transition-colors">Start</a>
            {' '}/{' '}Framework
          </p>

          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <BlurFade delay={0}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-6 h-px bg-primary" />
                  <span className="font-mono text-xs text-primary tracking-widest uppercase">Das HUMAN Framework</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95] mb-8">
                  KI im Mittelstand<br />
                  wird <span className="gradient-italic">verständlich.</span><br />
                  Schritt für Schritt.
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Fünf Stufen, die KI-Projekte aus der Pilotphase in den produktiven Alltag führen. Mit klaren Aktivitäten, klaren Ergebnissen und einem klaren Versprechen: Der Mensch bleibt vorne. Die Technik dahinter.
                </p>
              </BlurFade>
            </div>

            {/* Pull quote */}
            <BlurFade delay={0.1}>
              <blockquote className="border-l-2 border-primary pl-8 py-2">
                <p className="text-xl lg:text-2xl font-light leading-relaxed text-foreground italic">
                  „Wir starten nicht mit einem Tool. Wir starten mit der Frage, wo Ihr Unternehmen heute steht."
                </p>
                <cite className="not-italic block mt-4 font-mono text-xs text-muted-foreground tracking-widest uppercase">
                  Lennart Werksnis · Andres Penaranda
                </cite>
              </blockquote>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ── Why ── */}
      <section className="py-24 border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-16 items-start">
          <BlurFade delay={0.1} inView>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-primary rotate-45 block" />
                <span className="font-mono text-xs text-primary tracking-widest uppercase">Warum ein Framework</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                Damit aus Begeisterung ein verlässlicher Weg wird.
              </h2>
            </div>
          </BlurFade>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {whyItems.map((item, i) => (
              <BlurFade key={item.num} delay={0.1 + i * 0.07} inView>
                <div className="border-t border-border pt-6">
                  <p className="font-mono text-xs text-primary tracking-widest mb-3">{item.num}</p>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stages ── */}
      <section className="py-24" id="framework">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <BlurFade delay={0.1} inView>
            <div className="max-w-2xl mb-16">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-primary rotate-45 block" />
                <span className="font-mono text-xs text-primary tracking-widest uppercase">Die fünf Stufen</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
                H · U · M · A · N
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Fünf Etappen, ein klarer Bogen — vom ersten Gespräch bis zur produktiven Anwendung. Jede Stufe baut auf der vorherigen auf, jede liefert für sich genommen schon Wert.
              </p>
            </div>
          </BlurFade>

          {/* Visual strip */}
          <div className="grid grid-cols-5 gap-3 mb-20">
            {stages.map((s) => (
              <a
                key={s.letter}
                href={`#${s.id}`}
                className="group aspect-square bg-card border border-border rounded-2xl p-4 flex flex-col justify-between hover:border-primary transition-all duration-300 hover:-translate-y-1"
              >
                <p className="font-mono text-xs text-muted-foreground">{s.step.split(' ')[1]}</p>
                <div>
                  <p className="text-5xl lg:text-6xl font-extrabold text-foreground group-hover:text-primary transition-colors leading-none mb-2">{s.letter}</p>
                  <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider group-hover:text-primary transition-colors">{s.name}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Stage blocks */}
          {stages.map((stage, i) => (
            <div
              key={stage.letter}
              id={stage.id}
              className={`grid lg:grid-cols-[280px_1fr] gap-12 py-16 ${i === 0 ? 'border-t-2 border-primary' : 'border-t border-border'}`}
            >
              {/* Sticky marker */}
              <div className="lg:sticky lg:top-24 self-start">
                <p className="text-[9rem] lg:text-[11rem] font-extrabold leading-none text-primary tracking-tighter select-none">
                  {stage.letter}
                </p>
                <p className="font-mono text-sm text-foreground uppercase tracking-widest mt-1">{stage.name}</p>
                <p className="font-mono text-xs text-muted-foreground mt-2">{stage.step}</p>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-5">
                  {stage.headline}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl">
                  {stage.intro}
                </p>

                {/* What / How / Output rows */}
                <div className="space-y-0">
                  {stage.rows.map((row) => (
                    <div key={row.label} className="grid sm:grid-cols-[120px_1fr] gap-6 py-5 border-t border-border">
                      <p className="font-mono text-xs text-primary tracking-widest uppercase pt-0.5">{row.label}</p>
                      <p className="text-foreground leading-relaxed">{row.content}</p>
                    </div>
                  ))}
                </div>

                {/* Benefit callout */}
                <div className="mt-8 border-l-2 border-primary pl-6 py-1 bg-primary/5 rounded-r-xl pr-6">
                  <p className="font-mono text-xs text-primary tracking-widest uppercase mb-2">Ihr Nutzen</p>
                  <p className="text-foreground text-lg font-light leading-relaxed italic">{stage.benefit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Case Study ── */}
      <section className="py-24 border-t border-border bg-card/30" id="case">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-primary rotate-45 block" />
                <span className="font-mono text-xs text-primary tracking-widest uppercase">Praxisbeispiel</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                Wie das in einem echten Mittelständler aussieht.
              </h2>
            </div>
          </BlurFade>

          <BlurFade delay={0.15} inView>
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              {/* Meta */}
              <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-border border-b border-border">
                {[
                  { label: 'Branche', value: 'Industrieller Mittelstand' },
                  { label: 'Mitarbeitende', value: '~180' },
                  { label: 'Ausgangslage', value: '3 gescheiterte Pilots' },
                  { label: 'Zeit bis Produktiv', value: '6 Monate' },
                ].map((m) => (
                  <div key={m.label} className="p-6">
                    <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase mb-1">{m.label}</p>
                    <p className="font-semibold text-foreground">{m.value}</p>
                  </div>
                ))}
              </div>

              {/* Stages */}
              <div className="p-8 space-y-8">
                {caseStages.map((cs) => (
                  <div key={cs.letter} className="grid grid-cols-[48px_1fr] gap-6 items-start">
                    <p className="text-4xl font-extrabold text-primary leading-none">{cs.letter}</p>
                    <div>
                      <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase mb-1">{cs.label}</p>
                      <p className="text-foreground leading-relaxed">{cs.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Results */}
              <div className="bg-primary p-8">
                <p className="font-mono text-xs text-primary-foreground/70 tracking-widest uppercase mb-6">Ergebnisse nach 6 Monaten</p>
                <div className="grid grid-cols-3 gap-8">
                  {caseResults.map((r) => (
                    <div key={r.number}>
                      <p className="text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-none">{r.number}</p>
                      <p className="text-sm text-primary-foreground/80 mt-2 leading-snug">{r.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 border-t border-border" id="faq">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1fr_1.6fr] gap-20 items-start">
          <BlurFade delay={0.1} inView>
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-primary rotate-45 block" />
                <span className="font-mono text-xs text-primary tracking-widest uppercase">Häufige Fragen</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                Was Sie vorher wissen wollen.
              </h2>
            </div>
          </BlurFade>

          <div className="divide-y divide-border border-t border-border">
            {faqs.map((faq, i) => (
              <div key={i} className="py-6 cursor-pointer" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="flex items-start justify-between gap-6">
                  <p className="text-lg font-semibold leading-snug">{faq.q}</p>
                  <span className={`shrink-0 w-6 h-6 rounded-full border border-primary text-primary flex items-center justify-center font-mono text-sm transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </div>
                {openFaq === i && (
                  <p className="mt-4 text-muted-foreground leading-relaxed text-sm">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 overflow-hidden" id="cta">
        <div className="mesh-gradient absolute inset-0 -z-10" />
        {/* Giant watermark */}
        <p className="absolute bottom-0 right-0 text-[18vw] font-extrabold text-primary/5 leading-none select-none pointer-events-none tracking-tighter">
          HUMAN.
        </p>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <BlurFade delay={0.1} inView>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
                Bereit für ein <span className="gradient-italic">ehrliches</span> Erstgespräch?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                45 Minuten, kostenfrei und unverbindlich. Wir hören zu, ordnen ein und sagen Ihnen, ob das HUMAN Framework zu Ihrem Unternehmen passt. Wenn nicht, sagen wir es Ihnen.
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={0.15} inView>
            <div className="flex flex-col gap-4 items-start">
              <a
                href="/#contact"
                className="inline-flex items-center gap-3 px-7 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors text-base"
              >
                Termin buchen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="/#readiness"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors border-b border-muted-foreground hover:border-primary pb-0.5"
              >
                Oder erst KI-Readiness-Check machen
              </a>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Footer strip ── */}
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="#" onClick={() => { window.location.hash = ''; }} className="flex items-center">
            <img src="/logos/1.png" alt="AI Xplorers" className="h-7 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          </a>
          <p className="font-mono text-xs text-muted-foreground">HUMAN Framework v1.0</p>
          <p className="font-mono text-xs text-muted-foreground">© 2026 AI Xplorers GmbH</p>
        </div>
      </footer>
    </div>
  );
}
