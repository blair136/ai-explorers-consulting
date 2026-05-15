import React, { useState, useCallback } from 'react';
import { BlurFade } from '../components/ui/blur-fade';
import { ShimmerButton } from '../components/ui/shimmer-button';
import { ShineBorder } from '../components/ui/shine-border';
import { useT } from '../lib/language';

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

// ─── Question Data (DE) ──────────────────────────────────────────────────────

const deQuestionsMap: Record<Role, Question[]> = {
  A: [
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

// ─── Question Data (EN) ──────────────────────────────────────────────────────

const enQuestionsMap: Record<Role, Question[]> = {
  A: [
    {
      id: 'A1.1',
      dimension: 'data',
      question: 'In what form is the most important data in your company stored?',
      answers: [
        { text: 'Mostly on paper, in emails or in individual Excel files without a clear structure', points: 1 },
        { text: 'Digitally, but spread across different systems that do not communicate with each other', points: 2 },
        { text: 'Centrally in an ERP, CRM or similar system — but not everything is recorded there', points: 3 },
        { text: 'Structured, centralised and easily accessible to the relevant people', points: 4 },
      ],
    },
    {
      id: 'A1.2',
      dimension: 'data',
      question: 'How well prepared is your company data — i.e. cleansed, current and reliable?',
      answers: [
        { text: 'We often have outdated or contradictory data', points: 1 },
        { text: 'The data is basically available, but the quality varies', points: 2 },
        { text: 'The data is reliable in most areas', points: 3 },
        { text: 'Our data is structured, maintained and up to date', points: 4 },
      ],
    },
    {
      id: 'A2.1',
      dimension: 'change',
      question: 'How did your company most recently respond to a major change?',
      answers: [
        { text: 'There was significant resistance, the change was only partially implemented', points: 1 },
        { text: 'There was friction, but we pushed through', points: 2 },
        { text: 'Most people went along, individual areas put on the brakes', points: 3 },
        { text: 'Changes are generally embraced openly in our company', points: 4 },
      ],
    },
    {
      id: 'A2.2',
      dimension: 'change',
      question: 'Is there someone in your company — other than yourself — who would actively drive the topic of AI forward?',
      answers: [
        { text: 'No, I am standing alone with this', points: 1 },
        { text: 'Perhaps one or two people, but without a clear mandate', points: 2 },
        { text: 'Yes, individual employees are already interested and active', points: 3 },
        { text: 'Yes, we already have a person or team working on this', points: 4 },
      ],
    },
    {
      id: 'A3.1',
      dimension: 'process',
      question: 'How well are the most important processes in your company documented?',
      answers: [
        { text: 'Barely — much runs on the knowledge of individual people', points: 1 },
        { text: 'Partially documented, but outdated or incomplete', points: 2 },
        { text: 'Most core processes are described, but not consistently used', points: 3 },
        { text: 'Our processes are clearly documented and actively maintained', points: 4 },
      ],
    },
    {
      id: 'A3.2',
      dimension: 'process',
      question: 'What happens when a key person is absent for two weeks?',
      answers: [
        { text: 'Significant problems arise because knowledge only resides with that person', points: 1 },
        { text: 'There is friction, but we manage somehow', points: 2 },
        { text: 'Most tasks can be taken over by others', points: 3 },
        { text: 'No problem — processes and knowledge are clearly distributed', points: 4 },
      ],
    },
  ],
  B: [
    {
      id: 'B1.1',
      dimension: 'data',
      question: 'How does your team work with data and information today?',
      answers: [
        { text: 'Mainly on paper or in personal notes and emails', points: 1 },
        { text: 'In Excel or Word files that everyone saves locally', points: 2 },
        { text: 'In shared tools, but without a consistent structure', points: 3 },
        { text: 'In a shared system with clear structures and access rules', points: 4 },
      ],
    },
    {
      id: 'B1.2',
      dimension: 'data',
      question: "If you had to create a report on your team's work from the last 30 days tomorrow — how long would that take?",
      answers: [
        { text: 'Several days, because the data is distributed and incomplete', points: 1 },
        { text: 'Half a day, because I would have to manually search for a lot', points: 2 },
        { text: 'A few hours, because most data is available but not prepared', points: 3 },
        { text: 'Under an hour — the data is accessible at any time', points: 4 },
      ],
    },
    {
      id: 'B2.1',
      dimension: 'change',
      question: 'If you were to introduce a new tool in your team tomorrow — what would the reaction look like?',
      answers: [
        { text: 'Scepticism and resistance — new tools are not readily accepted here', points: 1 },
        { text: 'Acceptance if I justify it clearly, but no enthusiasm', points: 2 },
        { text: 'Most would join in, some would need more time', points: 3 },
        { text: 'My team is generally open to new ways of working', points: 4 },
      ],
    },
    {
      id: 'B2.2',
      dimension: 'change',
      question: 'How strongly does your management support the topic of AI?',
      answers: [
        { text: 'The topic is not on the agenda at management level, or is viewed critically', points: 1 },
        { text: 'There is basic interest, but no clear priority', points: 2 },
        { text: 'Leadership supports it, but leaves implementation to us', points: 3 },
        { text: 'AI is a stated priority from above', points: 4 },
      ],
    },
    {
      id: 'B3.1',
      dimension: 'process',
      question: 'If a new team member started tomorrow — how would you show them how work gets done?',
      answers: [
        { text: 'I would have to explain everything myself, much is not written down anywhere', points: 1 },
        { text: 'There are individual documents, but I would have to add a lot', points: 2 },
        { text: 'There is an onboarding process, but it has gaps', points: 3 },
        { text: 'We have clear onboarding materials and documented procedures', points: 4 },
      ],
    },
    {
      id: 'B3.2',
      dimension: 'process',
      question: 'Which tasks in your team repeat regularly in the same way?',
      answers: [
        { text: 'Hardly any — almost everything is individual and situation-dependent', points: 1 },
        { text: 'Some tasks repeat, but everyone does it slightly differently', points: 2 },
        { text: 'There are clear routine tasks that always follow the same pattern', points: 3 },
        { text: 'Many tasks run according to fixed, documented patterns', points: 4 },
      ],
    },
  ],
  C: [
    {
      id: 'C1.1',
      dimension: 'data',
      question: 'In what form is the information you work with daily stored?',
      answers: [
        { text: 'Mostly on paper or in handwritten notes', points: 1 },
        { text: 'In emails and personal files on my computer', points: 2 },
        { text: 'In shared folders or tools, but without a clear structure', points: 3 },
        { text: 'In a central system that everyone uses', points: 4 },
      ],
    },
    {
      id: 'C1.2',
      dimension: 'data',
      question: 'How often do you spend more than 10 minutes searching for information you should already have?',
      answers: [
        { text: 'Daily', points: 1 },
        { text: 'Several times a week', points: 2 },
        { text: 'Occasionally', points: 3 },
        { text: 'Rarely or never', points: 4 },
      ],
    },
    {
      id: 'C2.1',
      dimension: 'change',
      question: 'How open is your company in general to new ways of working and tools?',
      answers: [
        { text: 'Rather conservative — tried-and-tested approaches are retained', points: 1 },
        { text: 'Depends on the area — some open, some not', points: 2 },
        { text: 'Generally open, but introductions take a long time', points: 3 },
        { text: 'We regularly try out new things', points: 4 },
      ],
    },
    {
      id: 'C2.2',
      dimension: 'change',
      question: 'How is the topic of AI currently being addressed in your company?',
      answers: [
        { text: 'It is hardly talked about', points: 1 },
        { text: 'There are discussions, but no concrete steps', points: 2 },
        { text: 'Individual colleagues or departments are already experimenting', points: 3 },
        { text: 'AI is already an active topic with concrete projects', points: 4 },
      ],
    },
    {
      id: 'C3.1',
      dimension: 'process',
      question: 'Which tasks in your daily work repeat regularly in the same way?',
      answers: [
        { text: 'Almost everything is individual — hardly anything always runs the same way', points: 1 },
        { text: 'Some tasks repeat, but with many exceptions', points: 2 },
        { text: 'Several tasks regularly follow the same pattern', points: 3 },
        { text: 'A large part of my work follows clear, recurring workflows', points: 4 },
      ],
    },
    {
      id: 'C3.2',
      dimension: 'process',
      question: 'Could you explain to another person in 30 minutes how your most important routine tasks work?',
      answers: [
        { text: 'No — much is hard to explain because it varies from situation to situation', points: 1 },
        { text: 'Partially — the basic structure yes, but not the details', points: 2 },
        { text: 'Yes, I could describe most tasks clearly', points: 3 },
        { text: 'Yes, much is already documented or at least easy to explain', points: 4 },
      ],
    },
  ],
};

const deRoleOptions: { label: string; value: Role }[] = [
  { label: 'Geschäftsführung / Inhaber', value: 'A' },
  { label: 'Führungskraft / Abteilungsleitung', value: 'B' },
  { label: 'Mitarbeiter / Fachkraft', value: 'C' },
];

const enRoleOptions: { label: string; value: Role }[] = [
  { label: 'Management / Owner', value: 'A' },
  { label: 'Team Leader / Department Head', value: 'B' },
  { label: 'Employee / Specialist', value: 'C' },
];

const deUi = {
  sectionLabel: 'KI-Readiness-Check',
  h2Part1: 'Wo steht Ihr Unternehmen ',
  h2Gradient: 'beim Thema KI?',
  description: 'Beantworten Sie 6 Fragen und erhalten Sie Ihre persönliche Auswertung — kostenlos und ohne Verpflichtung.',
  roleQuestion: 'Welche Rolle haben Sie in Ihrem Unternehmen?',
  progressLabel: (current: number) => `Frage ${current} von 6`,
  back: 'Zurück',
  dimData: 'Datenreife',
  dimChange: 'Change-Readiness',
  dimProcess: 'Prozessklarheit',
  handoffTitle: 'Ihr persönliches KI-Readiness-Profil ist fertig.',
  handoffDesc: 'Wir haben Ihre Antworten in drei Bereichen ausgewertet: Ihre Datenlage, die Veränderungsbereitschaft in Ihrer Organisation und die Klarheit Ihrer Prozesse. Ihre individuelle Auswertung mit konkreten nächsten Schritten schicken wir Ihnen jetzt zu.',
  resultsLabel: 'Ergebnisse nach 6 Monaten',
  firstnamePlaceholder: 'Vorname',
  emailPlaceholder: 'E-Mail',
  firstnameLabel: 'Vorname',
  emailLabel: 'E-Mail',
  sendBtn: 'Auswertung zusenden →',
  sending: 'Wird gesendet...',
  noSpam: 'Keine Weitergabe. Kein Spam. Abmeldung jederzeit.',
  successTitle: 'Vielen Dank!',
  successSent: 'Ihre Auswertung ist unterwegs.',
  successCheck: 'Prüfen Sie Ihr Postfach — die E-Mail sollte in wenigen Minuten ankommen.',
  errFirstname: 'Bitte geben Sie Ihren Vornamen ein.',
  errEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
  levelLow: 'Niedrig',
  levelMid: 'Mittel',
  levelHigh: 'Hoch',
};

const enUi = {
  sectionLabel: 'AI Readiness Check',
  h2Part1: 'Where does your company stand ',
  h2Gradient: 'on AI?',
  description: 'Answer 6 questions and receive your personal assessment — free and without obligation.',
  roleQuestion: 'What is your role in your company?',
  progressLabel: (current: number) => `Question ${current} of 6`,
  back: 'Back',
  dimData: 'Data Maturity',
  dimChange: 'Change Readiness',
  dimProcess: 'Process Clarity',
  handoffTitle: 'Your personal AI Readiness Profile is ready.',
  handoffDesc: 'We have evaluated your answers in three areas: your data situation, the change readiness in your organisation and the clarity of your processes. We will now send you your individual assessment with concrete next steps.',
  resultsLabel: 'Results after 6 months',
  firstnamePlaceholder: 'First name',
  emailPlaceholder: 'Email',
  firstnameLabel: 'First name',
  emailLabel: 'Email',
  sendBtn: 'Send assessment →',
  sending: 'Sending...',
  noSpam: 'No sharing. No spam. Unsubscribe at any time.',
  successTitle: 'Thank you!',
  successSent: 'Your assessment is on its way.',
  successCheck: 'Check your inbox — the email should arrive within a few minutes.',
  errFirstname: 'Please enter your first name.',
  errEmail: 'Please enter a valid email address.',
  levelLow: 'Low',
  levelMid: 'Medium',
  levelHigh: 'High',
};

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

  const questionsMap = useT(deQuestionsMap, enQuestionsMap);
  const roleOptions = useT(deRoleOptions, enRoleOptions);
  const ui = useT(deUi, enUi);

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
      if (selectedAnswer !== null) return;
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
        setFormError(ui.errFirstname);
        return;
      }
      if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setFormError(ui.errEmail);
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
            role,
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
    [firstName, email, ui]
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
    if (score <= 2.0) return ui.levelLow;
    if (score <= 3.0) return ui.levelMid;
    return ui.levelHigh;
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
          {ui.progressLabel(currentQuestion + 1)}
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
      {ui.back}
    </button>
  );

  // ─── Screens ─────────────────────────────────────────────────────────

  const renderRole = () => (
    <BlurFade delay={0} inView key="role-screen">
      <div className="text-center mb-10">
        <p className="text-lg text-muted-foreground sm:text-xl">
          {ui.roleQuestion}
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
              {ui.handoffTitle}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {ui.handoffDesc}
            </p>
          </div>

          {/* Mini scores preview */}
          {scores && (
            <div className="grid grid-cols-3 gap-2 mb-8">
              {[
                { label: ui.dimData, score: scores.dataScore },
                { label: ui.dimChange, score: scores.changeScore },
                { label: ui.dimProcess, score: scores.processScore },
              ].map((dim) => (
                <div
                  key={dim.label}
                  className="rounded-lg border border-border bg-card/50 p-2 sm:p-3 text-center"
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
                  {ui.firstnameLabel}
                </label>
                <input
                  id="rc-firstname"
                  type="text"
                  placeholder={ui.firstnamePlaceholder}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full rounded-xl border border-border bg-card/50 px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                />
              </div>
              <div>
                <label htmlFor="rc-email" className="sr-only">
                  {ui.emailLabel}
                </label>
                <input
                  id="rc-email"
                  type="email"
                  placeholder={ui.emailPlaceholder}
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
                  {ui.sending}
                </span>
              ) : (
                ui.sendBtn
              )}
            </ShimmerButton>

            <p className="text-center text-xs text-muted-foreground">
              {ui.noSpam}
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
          {ui.successTitle}
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {ui.successSent}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          {ui.successCheck}
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
                {ui.sectionLabel}
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-foreground">{ui.h2Part1}</span>
              <span className="gradient-text">{ui.h2Gradient}</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
              {ui.description}
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
