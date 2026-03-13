import React, { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Anfrage gesendet!</h3>
        <p className="text-muted-foreground">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-xl mx-auto text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
          <input
            required
            type="text"
            placeholder="Ihr Name"
            className="w-full bg-background border border-input rounded-xl px-4 py-3 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all placeholder:text-muted-foreground"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">E-Mail</label>
          <input
            required
            type="email"
            placeholder="name@firma.de"
            className="w-full bg-background border border-input rounded-xl px-4 py-3 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all placeholder:text-muted-foreground"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Unternehmen / Website</label>
        <input
          required
          type="text"
          placeholder="Ihre Firma GmbH"
          className="w-full bg-background border border-input rounded-xl px-4 py-3 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all placeholder:text-muted-foreground"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Ihre größte Herausforderung</label>
        <textarea
          required
          rows={3}
          placeholder="Welchen Prozess möchten Sie automatisieren?"
          className="w-full bg-background border border-input rounded-xl px-4 py-3 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all resize-none placeholder:text-muted-foreground"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-primary-foreground font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
      >
        Jetzt Strategie-Session sichern
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>

      <p className="text-center text-xs text-muted-foreground">
        Ihre Daten sind sicher & 100% DSGVO-konform.
      </p>
    </form>
  );
}
