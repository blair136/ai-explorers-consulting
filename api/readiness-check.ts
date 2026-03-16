import type { VercelRequest, VercelResponse } from '@vercel/node';

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

    // 2. Send results email via Resend
    const scoreText = scores
      ? `Datenreife: ${scores.dataScore} | Change-Readiness: ${scores.changeScore} | Prozessklarheit: ${scores.processScore}`
      : 'Keine Scores verfügbar';

    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `AI Xplorers <${process.env.RESEND_FROM_EMAIL || 'noreply@aixplorers.de'}>`,
        to: [process.env.CONTACT_EMAIL || 'kontakt@aixplorers.de'],
        subject: `Neuer KI-Readiness-Check: ${firstName} (${email})`,
        html: `
          <h2>Neuer KI-Readiness-Check ausgefüllt</h2>
          <p><strong>Name:</strong> ${firstName}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          <p><strong>Rolle:</strong> ${role || 'Nicht angegeben'}</p>
          <p><strong>Ergebnis:</strong> ${scoreText}</p>
        `,
      }),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Readiness check error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
