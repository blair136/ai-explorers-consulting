import React, { useState, useCallback } from 'react';
import { BlurFade } from '../components/ui/blur-fade';
import { ShimmerButton } from '../components/ui/shimmer-button';
import { ShineBorder } from '../components/ui/shine-border';

// ─── Types ───────────────────────────────────────────────────────────────────

type Role = 'A' | 'B' | 'C';

interface Answer {
  text: string;
  points: number;
}

interface Question {
  id: string;
  dimension: 'data' | 'change' | 'process';
  question: string;
  answers: Answer[];
}

type Screen =
  | 'role'
  | 'questions'
  | 'handoff'
  | 'success';

// ─── Question Data ───────────────────────────────────────────────────────────

const questionsMap: Record<Role, Question[]> = {
  A: [
    // Dimension 1 — Datenreife
    {
      id: 'A1.1',
      dimension: 'data',
      question: 'In welcher Form liegen die wichtigsten Daten Ihres Unternehmens vor?',
      answers: [
        { text: 'Überwiegend auf Papier, in E-Mails oder in einzelnen Excel-Dateien ohne klare Struktur', points: 1 },
        { text: 'Digital, aber verteilt auf verschiedene Systeme die nicht miteinander sprechen', points: 2 },
        { text: 'Zentral in einem ERP, CRM oder ähnlichem System — aber nicht alles ist dort erfasst', points: 3 },
        { text: 'Strukturiert, zentral und gut zugänglich für die relevanten Personen', points: 4 },
      ],
    },
    {
      id: 'A1.2',
      dimension: 'data',
      question: 'Wie gut sind Ihre Unternehmensdaten aufbereitet — also bereinigt, aktuell und verlässlich?',
      answers: [
        { text: 'Wir haben oft veraltete oder widersprüchliche Daten', points: 1 },
        { text: 'Die Daten sind grundsätzlich vorhanden, aber die Qualität schwankt', points: 2 },
        { text: 'Die Daten sind in den meisten Bereichen verlässlich', points: 3 },
        { text: 'Unsere Daten sind strukturiert, gepflegt und aktuell', points: 4 },
      ],
    },
    // Dimension 2 — Change-Readiness
    {
      id: 'A2.1',
      dimension: 'change',
      question: 'Wie hat Ihr Unternehmen zuletzt auf eine größere Veränderung reagiert?',
      answers: [
        { text: 'Es gab erheblichen Widerstand, die Veränderung wurde nur teilweise umgesetzt', points: 1 },
        { text: 'Es gab Reibung, aber wir haben es durchgezogen', points: 2 },
        { text: 'Die meisten haben mitgemacht, einzelne Bereiche haben gebremst', points: 3 },
        { text: 'Veränderungen werden bei uns grundsätzlich offen aufgenommen', points: 4 },
      ],
    },
    {
      id: 'A2.2',
      dimension: 'change',
      question: 'Gibt es in Ihrem Unternehmen jemanden — außer Ihnen — der das Thema KI aktiv vorantreiben würde?',
      answers: [
        { text: 'Nein, ich stehe damit alleine', points: 1 },
        { text: 'Vielleicht ein oder zwei Personen, aber ohne klares Mandat', points: 2 },
        { text: 'Ja, einzelne Mitarbeiter sind bereits interessiert und aktiv', points: 3 },
        { text: 'Ja, wir haben bereits eine Person oder ein Team, das sich damit beschäftigt', points: 4 },
      ],
    },
    // Dimension 3 — Prozessklarheit
    {
      id: 'A3.1',
      dimension: 'process',
      question: 'Wie gut sind die wichtigsten Abläufe in Ihrem Unternehmen dokumentiert?',
      answers: [
        { text: 'Kaum — vieles läuft über das Wissen einzelner Personen', points: 1 },
        { text: 'Teilweise dokumentiert, aber veraltet oder lückenhaft', points: 2 },
        { text: 'Die meisten Kernprozesse sind beschrieben, aber nicht konsequent genutzt', points: 3 },
        { text: 'Unsere Prozesse sind klar dokumentiert und werden aktiv gepflegt', points: 4 },
      ],
    },
    {
      id: 'A3.2',
      dimension: 'process',
      question: 'Was passiert, wenn eine Schlüsselperson zwei Wochen ausfällt?',
      answers: [
        { text: 'Es entstehen erhebliche Probleme, weil Wissen nur bei dieser Person liegt', points: 1 },
        { text: 'Es gibt Reibung, aber wir fangen es irgendwie auf', points: 2 },
        { text: 'Die meisten Aufgaben können andere übernehmen', points: 3 },
        { text: 'Kein Problem — Prozesse und Wissen sind klar verteilt', points: 4 },
      ],
    },
  ],
  B: [
    // Dimension 1 — Datenreife
    {
      id: 'B1.1',
      dimension: 'data',
      question: 'Wie arbeitet Ihr Team heute mit Daten und Informationen?',
      answers: [
        { text: 'Hauptsächlich auf Papier oder in persönlichen Notizen und E-Mails', points: 1 },
        { text: 'In Excel oder Word-Dateien, die jeder lokal speichert', points: 2 },
        { text: 'In gemeinsam genutzten Tools, aber ohne einheitliche Struktur', points: 3 },
        { text: 'In einem gemeinsamen System mit klaren Strukturen und Zugriffsregeln', points: 4 },
      ],
    },
    {
      id: 'B1.2',
      dimension: 'data',
      question: 'Wenn Sie morgen einen Report über die Arbeit Ihres Teams der letzten 30 Tage erstellen müssten — wie lange würde das dauern?',
      answers: [
        { text: 'Mehrere Tage, weil die Daten verteilt und unvollständig sind', points: 1 },
        { text: 'Einen halben Tag, weil ich vieles manuell zusammensuchen müsste', points: 2 },
        { text: 'Ein paar Stunden, weil die meisten Daten vorhanden, aber nicht aufbereitet sind', points: 3 },
        { text: 'Unter einer Stunde — die Daten sind jederzeit abrufbar', points: 4 },
      ],
    },
    // Dimension 2 — Change-Readiness
    {
      id: 'B2.1',
      dimension: 'change',
      question: 'Wenn Sie morgen ein neues Tool in Ihrem Team einführen würden — wie würde die Reaktion aussehen?',
      answers: [
        { text: 'Skepsis und Widerstand — neue Tools werden bei uns ungern angenommen', points: 1 },
        { text: 'Akzeptanz wenn ich es klar begründe, aber keine Begeisterung', points: 2 },
        { text: 'Die meisten würden mitmachen, einige bräuchten mehr Zeit', points: 3 },
        { text: 'Mein Team ist grundsätzlich offen für neue Arbeitsweisen', points: 4 },
      ],
    },
    {
      id: 'B2.2',
      dimension: 'change',
      question: 'Wie stark unterstützt Ihre Geschäftsführung das Thema KI?',
      answers: [
        { text: 'Das Thema ist auf Führungsebene kein Thema oder wird kritisch gesehen', points: 1 },
        { text: 'Es gibt grundsätzliches Interesse, aber keine klare Priorität', points: 2 },
        { text: 'Die Führung unterstützt es, überlässt die Umsetzung aber uns', points: 3 },
        { text: 'KI ist eine erklärte Priorität von oben', points: 4 },
      ],
    },
    // Dimension 3 — Prozessklarheit
    {
      id: 'B3.1',
      dimension: 'process',
      question: 'Wenn ein neues Teammitglied morgen anfangen würde — wie würden Sie ihm zeigen, wie die Arbeit läuft?',
      answers: [
        { text: 'Ich würde alles selbst erklären müssen, vieles ist nirgends aufgeschrieben', points: 1 },
        { text: 'Es gibt einzelne Dokumente, aber ich müsste vieles ergänzen', points: 2 },
        { text: 'Es gibt eine Einarbeitung, aber sie ist lückenhaft', points: 3 },
        { text: 'Wir haben klare Onboarding-Unterlagen und dokumentierte Abläufe', points: 4 },
      ],
    },
    {
      id: 'B3.2',
      dimension: 'process',
      question: 'Welche Aufgaben in Ihrem Team wiederholen sich regelmäßig auf dieselbe Art und Weise?',
      answers: [
        { text: 'Kaum — fast alles ist individuell und situationsabhängig', points: 1 },
        { text: 'Einige Aufgaben wiederholen sich, aber jeder macht es ein bisschen anders', points: 2 },
        { text: 'Es gibt klare Routineaufgaben, die immer gleich ablaufen', points: 3 },
        { text: 'Viele Aufgaben laufen nach festen, dokumentierten Mustern ab', points: 4 },
      ],
    },
  ],
  C: [
    // Dimension 1 — Datenreife
    {
      id: 'C1.1',
      dimension: 'data',
      question: 'In welcher Form liegen die Informationen vor, mit denen Sie täglich arbeiten?',
      answers: [
        { text: 'Überwiegend auf Papier oder in handschriftlichen Notizen', points: 1 },
        { text: 'In E-Mails und persönlichen Dateien auf meinem Rechner', points: 2 },
        { text: 'In gemeinsam genutzten Ordnern oder Tools, aber ohne klare Struktur', points: 3 },
        { text: 'In einem zentralen System, das alle nutzen', points: 4 },
      ],
    },
    {
      id: 'C1.2',
      dimension: 'data',
      question: 'Wie oft suchen Sie länger als 10 Minuten nach einer Information, die Sie eigentlich schon haben sollten?',
      answers: [
        { text: 'Täglich', points: 1 },
        { text: 'Mehrmals pro Woche', points: 2 },
        { text: 'Gelegentlich', points: 3 },
        { text: 'Selten bis nie', points: 4 },
      ],
    },
    // Dimension 2 — Change-Readiness
    {
      id: 'C2.1',
      dimension: 'change',
      question: 'Wie offen ist Ihr Unternehmen grundsätzlich für neue Arbeitsweisen und Tools?',
      answers: [
        { text: 'Eher konservativ — Bewährtes wird beibehalten', points: 1 },
        { text: 'Kommt auf den Bereich an — manche offen, manche nicht', points: 2 },
        { text: 'Grundsätzlich offen, aber Einführungen dauern lange', points: 3 },
        { text: 'Wir probieren regelmäßig neue Dinge aus', points: 4 },
      ],
    },
    {
      id: 'C2.2',
      dimension: 'change',
      question: 'Wie ist das Thema KI in Ihrem Unternehmen aktuell besetzt?',
      answers: [
        { text: 'Es wird kaum darüber gesprochen', points: 1 },
        { text: 'Es gibt Gespräche, aber keine konkreten Schritte', points: 2 },
        { text: 'Einzelne Kollegen oder Bereiche experimentieren bereits', points: 3 },
        { text: 'KI ist bereits ein aktives Thema mit konkreten Projekten', points: 4 },
      ],
    },
    // Dimension 3 — Prozessklarheit
    {
      id: 'C3.1',
      dimension: 'process',
      question: 'Welche Aufgaben in Ihrem Arbeitsalltag wiederholen sich regelmäßig auf dieselbe Art?',
      answers: [
        { text: 'Fast alles ist individuell — kaum etwas läuft immer gleich ab', points: 1 },
        { text: 'Einige Aufgaben wiederholen sich, aber mit vielen Ausnahmen', points: 2 },
        { text: 'Mehrere Aufgaben laufen regelmäßig nach demselben Muster ab', points: 3 },
        { text: 'Ein Großteil meiner Arbeit folgt klaren, wiederkehrenden Abläufen', points: 4 },
      ],
    },
    {
      id: 'C3.2',
      dimension: 'process',
      question: 'Könnten Sie einer anderen Person in 30 Minuten erklären, wie Ihre wichtigsten Routineaufgaben funktionieren?',
      answers: [
        { text: 'Nein — vieles ist schwer zu erklären, weil es von Situation zu Situation anders ist', points: 1 },
        { text: 'Teilweise — die Grundstruktur schon, aber nicht die Details', points: 2 },
        { text: 'Ja, die meisten Aufgaben könnte ich klar beschreiben', points: 3 },
        { text: 'Ja, vieles ist bereits dokumentiert oder zumindest leicht erklärbar', points: 4 },
      ],
    },
  ],
};

const roleOptions: { label: string; value: Role }[] = [
  { label: 'Geschäftsführung / Inhaber', value: 'A' },
  { label: 'Führungskraft / Abteilungsleitung', value: 'B' },
  { label: 'Mitarbeiter / Fachkraft', value: 'C' },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function ReadinessCheck() {
  const [screen, setScreen] = useState<Screen>('role');
  const [role, setRole] = useState<Role | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [direction, setDirection] = useState<'left' | 'right'>('left');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const questions = role ? questionsMap[role] : [];

  // ─── Handlers ────────────────────────────────────────────────────────

  const handleRoleSelect = useCallback((selectedRole: Role) => {
    setRole(selectedRole);
    setAnswers([]);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setDirection('left');
    setTimeout(() => {
      setScreen('questions');
    }, 400);
  }, []);

  const handleAnswerSelect = useCallback(
    (points: number, answerIndex: number) => {
      if (selectedAnswer !== null) return; // prevent double-click
      setSelectedAnswer(answerIndex);

      setTimeout(() => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = points;
        setAnswers(newAnswers);
        setSelectedAnswer(null);
        setDirection('left');

        if (currentQuestion < 5) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setScreen('handoff');
        }
      }, 400);
    },
    [selectedAnswer, answers, currentQuestion]
  );

  const handleBack = useCallback(() => {
    if (currentQuestion === 0) {
      setScreen('role');
      setRole(null);
    } else {
      setDirection('right');
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
    }
  }, [currentQuestion]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setFormError('');

      if (!firstName.trim()) {
        setFormError('Bitte geben Sie Ihren Vornamen ein.');
        return;
      }
      if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setFormError('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
        return;
      }

      setIsSubmitting(true);

      try {
        const scores = getScores();
        const res = await fetch('/api/readiness-check', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName,
            email,
            role: selectedRole,
            scores: scores ? {
              dataScore: getLevel(scores.dataScore),
              changeScore: getLevel(scores.changeScore),
              processScore: getLevel(scores.processScore),
            } : null,
          }),
        });
        if (!res.ok) throw new Error('Failed');
      } catch {
        // Still show success to user, log error server-side
      }

      setIsSubmitting(false);
      setScreen('success');
    },
    [firstName, email]
  );

  // ─── Scoring ─────────────────────────────────────────────────────────

  const getScores = () => {
    if (answers.length < 6) return null;
    const dataScore = (answers[0] + answers[1]) / 2;
    const changeScore = (answers[2] + answers[3]) / 2;
    const processScore = (answers[4] + answers[5]) / 2;
    return { dataScore, changeScore, processScore };
  };

  const getLevel = (score: number): string => {
    if (score <= 2.0) return 'Niedrig';
    if (score <= 3.0) return 'Mittel';
    return 'Hoch';
  };

  const getLevelColor = (score: number): string => {
    if (score <= 2.0) return 'text-red-400';
    if (score <= 3.0) return 'text-yellow-400';
    return 'text-primary';
  };

  // ─── Progress Bar ────────────────────────────────────────────────────

  const ProgressBar = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-muted-foreground">
          Frage {currentQuestion + 1} von 6
        </span>
        <span className="text-sm text-muted-foreground">
          {Math.round(((currentQuestion + 1) / 6) * 100)}%
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-border/50 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary/80 to-primary transition-all duration-500 ease-out"
          style={{ width: `${((currentQuestion + 1) / 6) * 100}%` }}
        />
      </div>
    </div>
  );

  // ─── Back Button ─────────────────────────────────────────────────────

  const BackButton = () => (
    <button
      onClick={handleBack}
      className="group mb-6 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform group-hover:-translate-x-0.5"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
      Zurück
    </button>
  );

  // ─── Screens ─────────────────────────────────────────────────────────

  const renderRole = () => (
    <BlurFade delay={0} inView key="role-screen">
      <div className="text-center mb-10">
        <p className="text-lg text-muted-foreground sm:text-xl">
          Welche Rolle haben Sie in Ihrem Unternehmen?
        </p>
      </div>
      <div className="flex flex-col gap-3 max-w-xl mx-auto">
        {roleOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => handleRoleSelect(opt.value)}
            className="group relative w-full rounded-xl border border-border bg-card/50 px-6 py-5 text-left transition-all duration-200 hover:border-primary/50 hover:bg-card/80 active:scale-[0.98]"
          >
            <div className="flex items-center justify-between">
              <span className="text-base font-medium text-foreground sm:text-lg">
                {opt.label}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-0.5"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </button>
        ))}
      </div>
    </BlurFade>
  );

  const renderQuestions = () => {
    const q = questions[currentQuestion];
    if (!q) return null;

    return (
      <div key={`question-${currentQuestion}`}>
        <BackButton />
        <ProgressBar />
        <BlurFade
          delay={0}
          direction={direction}
          duration={0.35}
          key={`q-${currentQuestion}-${direction}`}
        >
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground sm:text-xl leading-relaxed">
              {q.question}
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            {q.answers.map((answer, idx) => {
              const isSelected = selectedAnswer === idx;
              const isPreviouslySelected = selectedAnswer === null && answers[currentQuestion] === answer.points;

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswerSelect(answer.points, idx)}
                  disabled={selectedAnswer !== null}
                  className={`
                    group relative w-full rounded-xl border px-6 py-5 text-left transition-all duration-200 active:scale-[0.98]
                    ${
                      isSelected
                        ? 'border-primary bg-primary/10 shadow-[0_0_20px_rgba(94,234,212,0.1)]'
                        : isPreviouslySelected
                        ? 'border-primary/30 bg-card/60'
                        : 'border-border bg-card/50 hover:border-primary/30 hover:bg-card/80'
                    }
                    ${selectedAnswer !== null && !isSelected ? 'opacity-50' : ''}
                  `}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`
                        mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200
                        ${
                          isSelected
                            ? 'border-primary bg-primary'
                            : 'border-muted-foreground/30 group-hover:border-primary/50'
                        }
                      `}
                    >
                      {isSelected && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary-foreground"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm text-foreground/90 leading-relaxed sm:text-base">
                      {answer.text}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </BlurFade>
      </div>
    );
  };

  const renderHandoff = () => {
    const scores = getScores();

    return (
      <BlurFade delay={0} inView key="handoff-screen">
        <div className="max-w-xl mx-auto">
          {/* Checkmark icon */}
          <div className="flex justify-center mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M9 12h6" />
                <path d="M12 9v6" />
                <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
              </svg>
            </div>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-lg font-bold text-foreground sm:text-xl lg:text-2xl mb-4">
              Ihr persönliches KI-Readiness-Profil ist fertig.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Wir haben Ihre Antworten in drei Bereichen ausgewertet: Ihre Datenlage,
              die Veränderungsbereitschaft in Ihrer Organisation und die Klarheit Ihrer
              Prozesse. Ihre individuelle Auswertung mit konkreten nächsten Schritten
              schicken wir Ihnen jetzt zu.
            </p>
          </div>

          {/* Mini scores preview */}
          {scores && (
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { label: 'Datenreife', score: scores.dataScore },
                { label: 'Change-Readiness', score: scores.changeScore },
                { label: 'Prozessklarheit', score: scores.processScore },
              ].map((dim) => (
                <div
                  key={dim.label}
                  className="rounded-lg border border-border bg-card/50 p-3 text-center"
                >
                  <p className="text-xs text-muted-foreground mb-1">{dim.label}</p>
                  <p className={`text-sm font-semibold ${getLevelColor(dim.score)}`}>
                    {getLevel(dim.score)}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Email form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="rc-firstname" className="sr-only">
                  Vorname
                </label>
                <input
                  id="rc-firstname"
                  type="text"
                  placeholder="Vorname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full rounded-xl border border-border bg-card/50 px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                />
              </div>
              <div>
                <label htmlFor="rc-email" className="sr-only">
                  E-Mail
                </label>
                <input
                  id="rc-email"
                  type="email"
                  placeholder="E-Mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-border bg-card/50 px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                />
              </div>
            </div>

            {formError && (
              <p className="text-sm text-red-400">{formError}</p>
            )}

            <ShimmerButton
              shimmerColor="#5eead4"
              background="rgba(16,24,40,0.9)"
              className="w-full px-8 py-4 text-base font-semibold"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Wird gesendet...
                </span>
              ) : (
                'Auswertung zusenden \u2192'
              )}
            </ShimmerButton>

            <p className="text-center text-xs text-muted-foreground/60">
              Keine Weitergabe. Kein Spam. Abmeldung jederzeit.
            </p>
          </form>
        </div>
      </BlurFade>
    );
  };

  const renderSuccess = () => (
    <BlurFade delay={0} inView key="success-screen">
      <div className="flex flex-col items-center text-center max-w-md mx-auto py-8">
        {/* Animated checkmark */}
        <div className="relative mb-8">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <ShineBorder
            shineColor={['#5eead4', '#2dd4bf', '#14b8a6']}
            borderWidth={2}
            duration={8}
            className="rounded-full"
          />
        </div>

        <h3 className="text-2xl font-bold text-foreground sm:text-3xl mb-3">
          Vielen Dank!
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Ihre Auswertung ist unterwegs.
        </p>
        <p className="mt-2 text-sm text-muted-foreground/60">
          Prüfen Sie Ihr Postfach — die E-Mail sollte in wenigen Minuten ankommen.
        </p>
      </div>
    </BlurFade>
  );

  // ─── Main Render ─────────────────────────────────────────────────────

  return (
    <section
      id="readiness-check"
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <BlurFade delay={0} inView>
          <div className="text-center mb-16">
            {/* Section label pill */}
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                KI-Readiness-Check
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-foreground">Wo steht Ihr Unternehmen </span>
              <span className="gradient-text">beim Thema KI?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
              Beantworten Sie 6 Fragen und erhalten Sie Ihre persönliche Auswertung
              — kostenlos und ohne Verpflichtung.
            </p>
          </div>
        </BlurFade>

        {/* Card container */}
        <div className="mx-auto max-w-2xl">
          <div className="relative rounded-2xl border border-border bg-card/30 p-6 sm:p-10 backdrop-blur-sm">
            <ShineBorder
              shineColor={['#5eead4', '#2dd4bf']}
              borderWidth={1}
              duration={16}
              className="rounded-2xl"
            />

            {screen === 'role' && renderRole()}
            {screen === 'questions' && renderQuestions()}
            {screen === 'handoff' && renderHandoff()}
            {screen === 'success' && renderSuccess()}
          </div>
        </div>
      </div>
    </section>
  );
}
