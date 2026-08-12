import { HugeiconsIcon } from '@hugeicons/react'
import { Moon02FreeIcons, Sun03FreeIcons } from '@hugeicons/core-free-icons'
import styles from './ThemeSwitch.module.css'
import { useTheme } from './ThemeContext'
import { useTranslation } from '../i18n/LanguageContext'

// Controle segmentado claro/escuro do cabeçalho dos modais. Na Hero o
// mesmo tema é alternado pelo botão redondo do dock lateral.
export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const { t } = useTranslation()

  const OPTIONS = [
    { value: 'light' as const, label: t.modais.temaClaro, icon: Sun03FreeIcons },
    { value: 'dark' as const, label: t.modais.temaEscuro, icon: Moon02FreeIcons },
  ]

  return (
    <div className={styles.root} role="radiogroup" aria-label={`${t.modais.temaClaro} / ${t.modais.temaEscuro}`}>
      {OPTIONS.map(option => (
        <button
          key={option.value}
          role="radio"
          aria-checked={theme === option.value}
          className={`${styles.option} ${theme === option.value ? styles.optionActive : ''}`}
          onClick={() => setTheme(option.value)}
        >
          <HugeiconsIcon icon={option.icon} size={16} strokeWidth={1.8} />
          {option.label}
        </button>
      ))}
    </div>
  )
}
