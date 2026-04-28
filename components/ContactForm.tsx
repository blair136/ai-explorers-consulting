import React, { useState } from 'react';
import { ShimmerButton } from '../components/ui/shimmer-button';

export default function ContactForm({ dark = false }: { dark?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [challenge, setChallenge] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, challenge }),
      });
      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
    } catch {
      alert('Es gab ein Problem. Bitte versuchen Sie es erneut.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = dark
    ? 'w-full bg-white/15 border border-white/30 rounded-xl px-4 py-3 text-primary-foreground focus:border-primary-foreground/60 focus:ring-2 focus:ring-primary-foreground/20 outline-none transition-all placeholder:text-primary-foreground/50'
    : 'w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground';

  const labelClass = dark
    ? 'block text-sm font-medium text-primary-foreground/80 mb-1.5'
    : 'block text-sm font-medium text-foreground mb-1.5';

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 ${dark ? 'bg-primary-foreground/20' : 'bg-primary/20'}`}>
          <svg className={`w-7 h-7 ${dark ? 'text-primary-foreground' : 'text-primary'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={`text-2xl font-bold mb-2 ${dark ? 'text-primary-foreground' : 'text-foreground'}`}>Anfrage gesendet!</h3>
        <p className={dark ? 'text-primary-foreground/70' : 'text-muted-foreground'}>Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-xl mx-auto text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Name</label>
          <input required type="text" placeholder="Ihr Name" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>E-Mail</label>
          <input required type="email" placeholder="name@firma.de" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>Unternehmen / Website</label>
        <input required type="text" placeholder="Ihre Firma GmbH" value={company} onChange={(e) => setCompany(e.target.value)} className={inputClass} />
      </div>

      <div>
        <label className={labelClass}>Ihre größte Herausforderung</label>
        <textarea required rows={3} placeholder="Welchen Prozess möchten Sie automatisieren?" value={challenge} onChange={(e) => setChallenge(e.target.value)} className={`${inputClass} resize-none`} />
      </div>

      {dark ? (
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary-foreground text-primary font-semibold py-3.5 rounded-xl hover:bg-primary-foreground/90 transition-colors flex items-center justify-center gap-2"
        >
          {loading ? (
            <span className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
          ) : (
            <>
              Jetzt Erstgespräch sichern
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </>
          )}
        </button>
      ) : (
        <ShimmerButton type="submit" disabled={loading} shimmerColor="#5eead4" background="rgba(16,24,40,0.9)" className="w-full text-sm font-semibold py-3.5" borderRadius="12px">
          {loading ? (
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              Jetzt Strategie-Session sichern
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </>
          )}
        </ShimmerButton>
      )}

      <p className={`text-center text-xs ${dark ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>
        Ihre Daten sind sicher & 100% DSGVO-konform.
      </p>
    </form>
  );
}
