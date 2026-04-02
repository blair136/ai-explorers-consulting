import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, challenge } = req.body;

  if (!name || !email || !company || !challenge) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'AI Xplorers Website <hello@ai-xplorers.de>',
        to: ['hello@ai-xplorers.de', 'a.penaranda@ai-explorers.de', 'l.werksnis@ai-explorers.de'],
        subject: `Neue Anfrage von ${name} (${company})`,
        reply_to: email,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9fafb; border-radius: 12px;">
            <h2 style="color: #111827; margin-top: 0;">Neue Kontaktanfrage</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #6b7280; width: 130px;">Name</td><td style="padding: 8px 0; color: #111827; font-weight: 600;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280;">E-Mail</td><td style="padding: 8px 0; color: #111827;"><a href="mailto:${email}" style="color: #0ea5e9;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280;">Unternehmen</td><td style="padding: 8px 0; color: #111827;">${company}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 16px; background: #fff; border-radius: 8px; border: 1px solid #e5e7eb;">
              <p style="margin: 0 0 8px; color: #6b7280; font-size: 13px;">Herausforderung / Nachricht</p>
              <p style="margin: 0; color: #111827; white-space: pre-wrap;">${challenge}</p>
            </div>
            <p style="margin-top: 16px; font-size: 12px; color: #9ca3af;">Gesendet über das Kontaktformular auf ai-xplorers.de</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
