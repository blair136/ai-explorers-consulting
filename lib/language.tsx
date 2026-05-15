import React, { createContext, useContext, useState, useEffect } from 'react';

export type Lang = 'de' | 'en';

interface LangCtx { lang: Lang; setLang: (l: Lang) => void; }
const LanguageContext = createContext<LangCtx>({ lang: 'de', setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem('lang');
    return (stored === 'en' ? 'en' : 'de');
  });
  const setLang = (l: Lang) => { setLangState(l); localStorage.setItem('lang', l); };
  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export function useLang() { return useContext(LanguageContext); }

/** Returns `de` object when lang==='de', `en` object otherwise */
export function useT<T>(de: T, en: T): T {
  const { lang } = useLang();
  return lang === 'en' ? en : de;
}
