import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Dictionary } from './types'
import { pt } from './dictionary.pt'
import { en } from './dictionary.en'
import { es } from './dictionary.es'

export type Lang = 'pt' | 'en' | 'es'

const dictionaries: Record<Lang, Dictionary> = { pt, en, es }

const STORAGE_KEY = 'talessa-lang'

// Título e descrição da página por idioma. Ficam aqui, e não nos
// dicionários de interface, porque não são texto de tela: são o que
// aparece na aba do navegador, no resultado de busca e na prévia do
// link quando alguém compartilha o portfólio.
const PAGINA: Record<Lang, { title: string; description: string }> = {
  pt: {
    title: 'Talessa Rodrigues | Product Designer UX/UI',
    description:
      'Product Designer com foco em UX/UI. Transformo problemas complexos em produtos digitais claros, com estratégia, pesquisa e dados. Veja os cases e fale comigo pelo WhatsApp.',
  },
  en: {
    title: 'Talessa Rodrigues | Product Designer UX/UI',
    description:
      'Product Designer focused on UX/UI. I turn complex problems into clear digital products, grounded in strategy, research and data. See the case studies and get in touch.',
  },
  es: {
    title: 'Talessa Rodrigues | Product Designer UX/UI',
    description:
      'Product Designer especializada en UX/UI. Convierto problemas complejos en productos digitales claros, con estrategia, investigación y datos. Mira los proyectos y hablemos.',
  },
}

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
    // Título e descrição acompanham o idioma escolhido. O index.html
    // nasce em pt-BR (é o que os buscadores leem, já que a página é
    // servida estática); isto atende quem troca de idioma na tela — a
    // aba do navegador e o que é copiado ao compartilhar o link.
    const { title, description } = PAGINA[lang]
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
  }, [lang])

  const value = useMemo<LanguageContextValue>(() => ({ lang, setLang, t: dictionaries[lang] }), [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useTranslation() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useTranslation deve ser usado dentro de <LanguageProvider>')
  return ctx
}
