import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Dictionary } from './types'
import { pt } from './dictionary.pt'
import { en } from './dictionary.en'
import { es } from './dictionary.es'

export type Lang = 'pt' | 'en' | 'es'

const dictionaries: Record<Lang, Dictionary> = { pt, en, es }

const STORAGE_KEY = 'talessa-lang'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function detectInitialLang(): Lang {
  const saved = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null
  if (saved === 'pt' || saved === 'en' || saved === 'es') return saved
  return 'pt'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang)

  const setLang = (next: Lang) => {
    setLangState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo<LanguageContextValue>(() => ({ lang, setLang, t: dictionaries[lang] }), [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useTranslation() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useTranslation deve ser usado dentro de <LanguageProvider>')
  return ctx
}
