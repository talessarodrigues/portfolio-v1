import { HugeiconsIcon } from '@hugeicons/react'
import { Moon02FreeIcons, Sun03FreeIcons } from '@hugeicons/core-free-icons'
import styles from './Mobile.module.css'
import { useTheme } from '../../theme/ThemeContext'
import { useTranslation } from '../../i18n/LanguageContext'

interface MobileThemeToggleProps {
  // `onCover` é a versão que fica sobre a ilustração da capa, onde o
  // contorno precisa inverter junto com a arte. Nas demais telas o
  // botão assenta sobre o fundo do app.
  onCover?: boolean
}

// Alternador de tema do mobile. Fica no topo da capa e também no
// cabeçalho de cada sheet e aba, pra estar acessível em toda tela —
// como já acontece no desktop.
export function MobileThemeToggle({ onCover = false }: MobileThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation()
  const isDark = theme === 'dark'

  return (
    <button
      className={`${styles.themeChip} ${onCover ? styles.themeChipOnCover : ''}`}
      onClick={toggleTheme}
      aria-label={isDark ? t.hero.temaClaroAria : t.hero.temaEscuroAria}
    >
      <span className={styles.themeChipDisc}>
        <HugeiconsIcon icon={isDark ? Sun03FreeIcons : Moon02FreeIcons} size={16} strokeWidth={1.8} />
      </span>
    </button>
  )
}
