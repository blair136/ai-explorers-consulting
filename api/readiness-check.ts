import type { VercelRequest, VercelResponse } from '@vercel/node';

function getLevel(score: number): string {
  if (score <= 2) return 'Niedrig';
  if (score <= 3) return 'Mittel';
  return 'Hoch';
}

function getLevelColor(score: number): string {
  if (score <= 2) return '#ef4444';
  if (score <= 3) return '#f59e0b';
  return '#10b981';
}

function getLevelAdvice(dimension: string, score: number): string {
  const advice: Record<string, Record<string, string>> = {
    dataScore: {
      Niedrig: 'Ihre Datenbasis braucht Aufmerksamkeit. Bevor KI-Projekte starten, lohnt es sich, bestehende Daten zu strukturieren und Zugänglichkeit zu schaffen. Wir helfen Ihnen dabei.',
      Mittel: 'Eine solide Grundlage — mit gezielten Maßnahmen zur Datenqualität können Sie das volle Potenzial von KI schnell erschließen.',
      Hoch: 'Exzellente Datenbasis! Sie sind ideal aufgestellt, um sofort mit konkreten KI-Anwendungen zu starten.',
    },
    changeScore: {
      Niedrig: 'Veränderungsbereitschaft ist der wichtigste Erfolgsfaktor bei KI-Projekten. Wir empfehlen, Change Management früh einzuplanen.',
      Mittel: 'Ihre Organisation ist grundsätzlich veränderungsbereit. Mit begleitendem Coaching gelingt die KI-Transformation nachhaltig.',
      Hoch: 'Ihre Organisation ist bereit für Veränderung — das ist ein entscheidender Wettbewerbsvorteil bei der KI-Einführung.',
    },
    processScore: {
      Niedrig: 'Klare Prozesse sind die Voraussetzung für erfolgreiche Automatisierung. Wir beginnen damit, gemeinsam Ihre Kernprozesse zu strukturieren.',
      Mittel: 'Gute Prozessklarheit — mit etwas Dokumentation und Analyse lassen sich schnell automatisierbare Bereiche identifizieren.',
      Hoch: 'Ihre Prozesse sind klar definiert — ideale Voraussetzung für schnelle, wirksame Automatisierungen.',
    },
  };
  const level = getLevel(score);
  return advice[dimension]?.[level] ?? '';
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, email, role, scores } = req.body;

  if (!firstName || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  try {
    // 1. Subscribe to Beehiiv newsletter
    await fetch(
      `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          utm_source: 'readiness-check',
          custom_fields: [{ name: 'First Name', value: firstName }],
        }),
      }
    );

    // 2. Send personalised results email to user (with team in BCC)
    const dataLevel = scores ? getLevel(scores.dataScore) : 'k.A.';
    const changeLevel = scores ? getLevel(scores.changeScore) : 'k.A.';
    const processLevel = scores ? getLevel(scores.processScore) : 'k.A.';

    const dataColor = scores ? getLevelColor(scores.dataScore) : '#9ca3af';
    const changeColor = scores ? getLevelColor(scores.changeScore) : '#9ca3af';
    const processColor = scores ? getLevelColor(scores.processScore) : '#9ca3af';

    const dataAdvice = scores ? getLevelAdvice('dataScore', scores.dataScore) : '';
    const changeAdvice = scores ? getLevelAdvice('changeScore', scores.changeScore) : '';
    const processAdvice = scores ? getLevelAdvice('processScore', scores.processScore) : '';

    const roleLabel = role === 'geschaeftsfuehrung' ? 'Geschäftsführung'
      : role === 'fuehrungskraft' ? 'Führungskraft'
      : role === 'mitarbeiter' ? 'Mitarbeiter:in'
      : role || 'Nicht angegeben';

    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'AI Xplorers <hello@ai-xplorers.de>',
        to: [email],
        bcc: ['hello@ai-xplorers.de', 'a.penaranda@ai-explorers.de', 'l.werksnis@ai-explorers.de'],
        reply_to: 'hello@ai-xplorers.de',
        subject: `${firstName}, Ihr persönliches KI-Readiness-Profil`,
        html: `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
            <!-- Header -->
            <div style="background: #0a1628; padding: 32px 40px; border-radius: 12px 12px 0 0;">
              <p style="margin: 0; color: #5eead4; font-size: 13px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;">AI Xplorers</p>
              <h1 style="margin: 8px 0 0; color: #ffffff; font-size: 24px; font-weight: 700; line-height: 1.3;">Ihr persönliches<br>KI-Readiness-Profil</h1>
            </div>

            <!-- Intro -->
            <div style="padding: 32px 40px 24px; background: #f8fafc;">
              <p style="margin: 0; color: #374151; font-size: 16px; line-height: 1.6;">
                Hallo ${firstName},<br><br>
                vielen Dank für Ihre Teilnahme am KI-Readiness-Check. Wir haben Ihre Antworten in drei Dimensionen ausgewertet — hier ist Ihr persönliches Profil.
              </p>
            </div>

            <!-- Score Cards -->
            <div style="padding: 0 40px 32px; background: #f8fafc;">
              <div style="display: grid; gap: 16px;">

                <div style="background: #ffffff; border-radius: 10px; padding: 20px 24px; border-left: 4px solid ${dataColor};">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                    <span style="font-size: 13px; color: #6b7280; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">Datenreife</span>
                    <span style="font-size: 14px; font-weight: 700; color: ${dataColor};">${dataLevel}</span>
                  </div>
                  <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.6;">${dataAdvice}</p>
                </div>

                <div style="background: #ffffff; border-radius: 10px; padding: 20px 24px; border-left: 4px solid ${changeColor};">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                    <span style="font-size: 13px; color: #6b7280; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">Change-Readiness</span>
                    <span style="font-size: 14px; font-weight: 700; color: ${changeColor};">${changeLevel}</span>
                  </div>
                  <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.6;">${changeAdvice}</p>
                </div>

                <div style="background: #ffffff; border-radius: 10px; padding: 20px 24px; border-left: 4px solid ${processColor};">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                    <span style="font-size: 13px; color: #6b7280; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">Prozessklarheit</span>
                    <span style="font-size: 14px; font-weight: 700; color: ${processColor};">${processLevel}</span>
                  </div>
                  <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.6;">${processAdvice}</p>
                </div>

              </div>
            </div>

            <!-- CTA -->
            <div style="padding: 32px 40px; background: #0a1628; border-radius: 0 0 12px 12px; text-align: center;">
              <p style="margin: 0 0 8px; color: #d1fae5; font-size: 15px; line-height: 1.6;">
                Möchten Sie wissen, welche drei Prozesse in Ihrem Unternehmen heute schon automatisierbar wären?
              </p>
              <p style="margin: 0 0 24px; color: #9ca3af; font-size: 13px;">Kostenlos, unverbindlich, in 15 Minuten.</p>
              <a href="https://www.ai-xplorers.de/#contact" style="display: inline-block; background: #5eead4; color: #0a1628; font-weight: 700; font-size: 15px; padding: 14px 32px; border-radius: 8px; text-decoration: none;">
                Kostenloses Erstgespräch buchen
              </a>
              <p style="margin: 24px 0 0; color: #6b7280; font-size: 12px;">AI Xplorers · <a href="https://www.ai-xplorers.de" style="color: #5eead4;">ai-xplorers.de</a></p>
            </div>
          </div>
        `,
      }),
    });

    // 3. Internal notification (summary for team)
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'AI Xplorers Assessment <hello@ai-xplorers.de>',
        to: ['hello@ai-xplorers.de', 'a.penaranda@ai-explorers.de', 'l.werksnis@ai-explorers.de'],
        reply_to: email,
        subject: `📊 Neuer Readiness-Check: ${firstName} — ${dataLevel} / ${changeLevel} / ${processLevel}`,
        html: `
          <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 24px; background: #f9fafb; border-radius: 12px;">
            <h2 style="margin-top: 0; color: #111827;">Neuer KI-Readiness-Check</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 6px 0; color: #6b7280; width: 130px;">Name</td><td style="color: #111827; font-weight: 600;">${firstName}</td></tr>
              <tr><td style="padding: 6px 0; color: #6b7280;">E-Mail</td><td><a href="mailto:${email}" style="color: #0ea5e9;">${email}</a></td></tr>
              <tr><td style="padding: 6px 0; color: #6b7280;">Rolle</td><td style="color: #111827;">${roleLabel}</td></tr>
            </table>
            <div style="margin-top: 16px; display: flex; gap: 12px;">
              <div style="flex: 1; padding: 12px; background: #fff; border-radius: 8px; border: 1px solid #e5e7eb; text-align: center;">
                <p style="margin: 0 0 4px; font-size: 11px; color: #9ca3af;">Datenreife</p>
                <p style="margin: 0; font-weight: 700; color: ${dataColor};">${dataLevel}</p>
              </div>
              <div style="flex: 1; padding: 12px; background: #fff; border-radius: 8px; border: 1px solid #e5e7eb; text-align: center;">
                <p style="margin: 0 0 4px; font-size: 11px; color: #9ca3af;">Change-Readiness</p>
                <p style="margin: 0; font-weight: 700; color: ${changeColor};">${changeLevel}</p>
              </div>
              <div style="flex: 1; padding: 12px; background: #fff; border-radius: 8px; border: 1px solid #e5e7eb; text-align: center;">
                <p style="margin: 0 0 4px; font-size: 11px; color: #9ca3af;">Prozessklarheit</p>
                <p style="margin: 0; font-weight: 700; color: ${processColor};">${processLevel}</p>
              </div>
            </div>
          </div>
        `,
      }),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Readiness check error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
