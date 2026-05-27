'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, type Lang } from '@/lib/translations';

interface LangContextValue {
  lang: Lang;
  t: (key: string) => string;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextValue>({
  lang: 'en',
  t: (key) => key,
  setLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const stored = localStorage.getItem('sweep-lang') as Lang | null;
    if (stored === 'en' || stored === 'fr') {
      setLangState(stored);
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('sweep-lang', l);
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] ?? translations['en']?.[key] ?? key;
  };

  return (
    <LangContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
