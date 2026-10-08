import { useEffect, useRef } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowLeft01FreeIcons } from '@hugeicons/core-free-icons'
import styles from './Site.module.css'
import { useTranslation } from '../../i18n/LanguageContext'
import { LanguageMenu } from '../LanguageMenu/LanguageMenu'
import { SiteLink } from './SiteLink'
import { scrollToTarget } from '../../hooks/smoothScroll'

export interface NavSection {
  id: string
  label: string
}

interface SiteNavProps {
  page: 'home' | 'sobre' | 'case'
  /** Só na página de case: o menu vira o índice das seções. */
  sections?: NavSection[]
  activeSection?: string | null
}

// Cápsula fixa no topo, centralizada. Nas páginas gerais leva às páginas
// do site; dentro de um case ela vira "← Projetos" + o índice do case,
// marcando a seção que está na tela.
export function SiteNav({ page, sections, activeSection }: SiteNavProps) {
  const { t } = useTranslation()
  const tabsRef = useRef<HTMLDivElement>(null)

  // Índice comprido rola na horizontal dentro da cápsula; a aba ativa
  // precisa continuar à vista conforme a leitura avança.
  useEffect(() => {
    const tabs = tabsRef.current
    const active = tabs?.querySelector<HTMLElement>('[aria-current="true"]')
    if (!tabs || !active) return
    const left = active.offsetLeft - tabs.clientWidth / 2 + active.clientWidth / 2
    tabs.scrollTo({ left, behavior: 'smooth' })
  }, [activeSection])

  const goToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) scrollToTarget(el, { smooth: true })
  }

  return (
    <>
      <nav className={styles.nav} aria-label={page === 'case' ? t.site.visaoGeral : undefined}>
        {page === 'case' && sections ? (
          <>
            <SiteLink to="/#projetos" className={styles.navBack}>
              <HugeiconsIcon icon={ArrowLeft01FreeIcons} size={16} strokeWidth={1.8} />
              {t.site.voltarProjetos}
            </SiteLink>
            <span className={styles.navDivider} aria-hidden="true" />
            <div className={styles.navTabs} ref={tabsRef}>
              {sections.map(s => (
                <button
                  key={s.id}
                  type="button"
                  className={styles.navItem}
                  aria-current={activeSection === s.id}
                  onClick={() => goToSection(s.id)}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <SiteLink to="/#projetos" className={styles.navItem} aria-current={page === 'home'}>
              {t.site.projetos}
            </SiteLink>
            <SiteLink to="/sobre" className={styles.navItem} aria-current={page === 'sobre'}>
              {t.site.sobreMim}
            </SiteLink>
            <a className={styles.navItem} href={t.site.curriculoPdf} target="_blank" rel="noopener noreferrer">
              {t.site.curriculo}
            </a>
          </>
        )}
      </nav>

      <div className={styles.navTools}>
        <LanguageMenu variant="light" />
      </div>
    </>
  )
}
