import { useEffect, useRef, useState, type ReactElement } from 'react'
import styles from './LanguageMenu.module.css'
import { useTranslation, type Lang } from '../../i18n/LanguageContext'
import { FlagBR, FlagES, FlagUS } from '../Mobile/MobileIcons'

const LANGS: { code: Lang; label: string; short: string; Flag: () => ReactElement }[] = [
  { code: 'pt', label: 'Português', short: 'PT', Flag: FlagBR },
  { code: 'en', label: 'English', short: 'EN', Flag: FlagUS },
  { code: 'es', label: 'Español', short: 'ES', Flag: FlagES },
]

const IconGlobe = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 3.75C14.5 6.5 14.5 17.5 12 20.25M12 3.75C9.5 6.5 9.5 17.5 12 20.25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3.75 12H20.25" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

interface LanguageMenuProps {
  variant?: 'dark' | 'light' | 'ghost'
  // No mobile o gatilho é um disco com gradiente e o globo branco,
  // dentro de um anel fino (ver referência). As bandeiras seguem
  // aparecendo nos itens do menu aberto.
  gradient?: boolean
}

export function LanguageMenu({ variant = 'light', gradient = false }: LanguageMenuProps) {
  const { lang, setLang } = useTranslation()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onClickOutside = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onEsc)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onEsc)
    }
  }, [open])

  return (
    <div className={`${styles.root} ${styles[variant]}`} ref={rootRef}>
      <button
        className={`${styles.trigger} ${gradient ? styles.triggerGradient : ''}`}
        onClick={() => setOpen(v => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Selecionar idioma / Select language / Seleccionar idioma"
      >
        {gradient
          ? <span className={styles.triggerDisc}><IconGlobe /></span>
          : <IconGlobe />}
      </button>

      {open && (
        <div className={styles.menu} role="menu">
          {LANGS.map(l => (
            <button
              key={l.code}
              role="menuitemradio"
              aria-checked={lang === l.code}
              className={`${styles.item} ${lang === l.code ? styles.itemActive : ''}`}
              onClick={() => { setLang(l.code); setOpen(false) }}
            >
              <span className={styles.itemFlag}><l.Flag /></span>
              <span className={styles.itemShort}>{l.short}</span>
              <span className={styles.itemLabel}>{l.label}</span>
              {lang === l.code && <span className={styles.itemCheck}><IconCheck /></span>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
