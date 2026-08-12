import { useState } from 'react'
import styles from './Header.module.css'
import imgLogoDark from '../../assets/header/logo.svg'
import imgLogoLight from '../../assets/header/logo-light.svg'
import imgNavPanel from '../../assets/header/nav-panel.png'
import { useTranslation } from '../../i18n/LanguageContext'
import { LanguageMenu } from '../LanguageMenu/LanguageMenu'

export type HeaderVariant = 'dark' | 'light'

interface HeaderProps {
  variant: HeaderVariant
  onNavigateSection: (id: string) => void
  onNavigateProjectsPage: () => void
  onNavigateHome: () => void
}

const IconArrow = () => (
  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconMenu = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const IconClose = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export function Header({ variant, onNavigateSection, onNavigateProjectsPage, onNavigateHome }: HeaderProps) {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  const NAV_ITEMS: { label: string; target: { type: 'section'; id: string } | { type: 'projects' } }[] = [
    { label: t.nav.sobre, target: { type: 'section', id: 'sobre-mim' } },
    { label: t.nav.cases, target: { type: 'projects' } },
    { label: t.nav.servicos, target: { type: 'section', id: 'faq' } },
  ]

  const go = (target: (typeof NAV_ITEMS)[number]['target']) => {
    setMenuOpen(false)
    if (target.type === 'section') onNavigateSection(target.id)
    else onNavigateProjectsPage()
  }

  const cta = variant === 'dark'
    ? { label: t.header.contato, onClick: () => go({ type: 'section', id: 'cta-final' }) }
    : {
        label: t.header.baixarCurriculo,
        href: 'https://docs.google.com/document/d/1TBsZ4l-LQhZs2EgpU8iehlyXOeNsqRD-YYl8N_bcajo/edit?usp=drive_link',
      }

  return (
    <header className={`${styles.header} ${variant === 'dark' ? styles.dark : styles.light}`}>
      <div className={styles.inner}>
        <button className={styles.logoBtn} onClick={() => { setMenuOpen(false); onNavigateHome() }} aria-label={t.header.irParaHome}>
          <img src={variant === 'dark' ? imgLogoDark : imgLogoLight} alt="Rodrigues Design" className={styles.logoImg} />
        </button>

        <div className={styles.actions}>
          <div className={styles.navPanel}>
            {variant === 'dark' && (
              <img src={imgNavPanel} alt="" className={styles.navPanelBg} aria-hidden="true" />
            )}

            <LanguageMenu variant={variant} />

            <nav className={styles.nav}>
              {NAV_ITEMS.map(item => (
                <button key={item.label} className={styles.navLink} onClick={() => go(item.target)}>
                  {item.label}
                </button>
              ))}
            </nav>

            {cta.href ? (
              <a href={cta.href} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
                <IconArrow />
                {cta.label}
              </a>
            ) : (
              <button className={styles.ctaBtn} onClick={cta.onClick}>
                <IconArrow />
                {cta.label}
              </button>
            )}
          </div>

          <button className={styles.menuToggle} onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? t.header.fecharMenu : t.header.abrirMenu}>
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_ITEMS.map(item => (
            <button key={item.label} className={styles.mobileLink} onClick={() => go(item.target)}>
              {item.label}
            </button>
          ))}
          {cta.href ? (
            <a href={cta.href} target="_blank" rel="noopener noreferrer" className={styles.mobileCta}>
              {cta.label}
            </a>
          ) : (
            <button className={styles.mobileCta} onClick={() => { setMenuOpen(false); cta.onClick?.() }}>
              {cta.label}
            </button>
          )}
        </div>
      )}
    </header>
  )
}
