'use client';

import React, { createContext, useContext, useEffect, useSyncExternalStore } from 'react';
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

const STORAGE_KEY = 'flickflush-lang';
const listeners = new Set<() => void>();
let override: Lang | null = null;

function readLang(): Lang {
  if (override) return override;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'fr') return stored;
  } catch {
    /* storage unavailable: fall through to the browser language */
  }
  return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener('storage', cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener('storage', cb);
  };
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, readLang, () => 'en' as Lang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    override = l;
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
    listeners.forEach((fn) => fn());
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
