import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Dictionary } from './types'
import { pt } from './dictionary.pt'
import { en } from './dictionary.en'
import { es } from './dictionary.es'
import { PAGINA, setPageMeta } from './pageMeta'

export type Lang = 'pt' | 'en' | 'es'

const dictionaries: Record<Lang, Dictionary> = { pt, en, es }

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

// Toda visita começa em inglês (decisão de 2026-10-08: o portfólio é para
// recrutadores de fora também). A troca de idioma vale durante a visita,
// mas não fica salva: na próxima entrada o site volta para o inglês.
const INITIAL_LANG: Lang = 'en'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(INITIAL_LANG)

  const setLang = (next: Lang) => setLangState(next)

  useEffect(() => {
    document.documentElement.lang = lang
    // Título e descrição acompanham o idioma escolhido. O index.html
    // nasce em inglês (é o que os buscadores e as prévias de link leem,
    // já que a página é servida estática); isto atende quem troca de
    // idioma na tela.
    // No desktop, o Site sobrescreve isto nas páginas de case e no Sobre.
    setPageMeta(PAGINA[lang].title, PAGINA[lang].description)
  }, [lang])

  const value = useMemo<LanguageContextValue>(() => ({ lang, setLang, t: dictionaries[lang] }), [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useTranslation() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useTranslation deve ser usado dentro de <LanguageProvider>')
  return ctx
}
