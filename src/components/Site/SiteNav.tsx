import { useEffect, useRef, useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowLeft01FreeIcons, ArrowRight01FreeIcons } from '@hugeicons/core-free-icons'
import styles from './Site.module.css'
import { useTranslation } from '../../i18n/LanguageContext'
import { LanguageMenu } from '../LanguageMenu/LanguageMenu'
import { SiteLink } from './SiteLink'
import { scrollToTarget } from '../../hooks/smoothScroll'
import { CONTACTS } from '../../data/contacts'
import { trackContato } from '../../analytics'

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

// Rolou o bastante para a barra do topo sair da tela e a pílula de baixo entrar.
const DOCK_AT = 160

// Nas páginas gerais (home e sobre) o menu segue a referência da Dymit: no
// topo, o logo e os links em pílulas à esquerda e idioma + botão à direita;
// ao rolar, tudo vira uma pílula de vidro fixa embaixo, no centro. Dentro de
// um case a cápsula fixa no topo vira "← Projetos" + o índice do case,
// marcando a seção que está na tela.
export function SiteNav({ page, sections, activeSection }: SiteNavProps) {
  const { t } = useTranslation()
  const tabsRef = useRef<HTMLDivElement>(null)
  const [docked, setDocked] = useState(false)

  // Índice comprido rola na horizontal dentro da cápsula; a aba ativa
  // precisa continuar à vista conforme a leitura avança.
  useEffect(() => {
    const tabs = tabsRef.current
    const active = tabs?.querySelector<HTMLElement>('[aria-current="true"]')
    if (!tabs || !active) return
    const left = active.offsetLeft - tabs.clientWidth / 2 + active.clientWidth / 2
    tabs.scrollTo({ left, behavior: 'smooth' })
  }, [activeSection])

  useEffect(() => {
    if (page === 'case') return
    const onScroll = () => setDocked(window.scrollY > DOCK_AT)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [page])

  const goToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) scrollToTarget(el, { smooth: true })
  }

  if (page !== 'case' || !sections) {
    const links = (
      <>
        <SiteLink to="/#projetos" className={styles.navLink} aria-current={page === 'home'}>
          {t.site.projetos}
        </SiteLink>
        <SiteLink to="/sobre" className={styles.navLink} aria-current={page === 'sobre'}>
          {t.site.sobreMim}
        </SiteLink>
        <a className={styles.navLink} href={t.site.curriculoPdf} target="_blank" rel="noopener noreferrer">
          {t.site.curriculo}
        </a>
      </>
    )
    const logo = (
      <SiteLink to="/" className={styles.logoBtn} aria-label="Talessa Rodrigues">
        <img src="/favicon.svg" alt="" />
      </SiteLink>
    )
    const cta = (where: 'nav-topo' | 'nav-dock') => (
      <a
        className={styles.navCta}
        href={CONTACTS.agenda}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackContato('agenda', where)}
      >
        {t.site.agendarChamada}
        <HugeiconsIcon icon={ArrowRight01FreeIcons} size={16} strokeWidth={2} />
      </a>
    )
    return (
      <>
        {/* Barra do topo: rola junto com a página e some quando a pílula entra. */}
        <div className={styles.topbar} data-hidden={docked} inert={docked}>
          <div className={styles.topGroup}>
            {logo}
            <nav className={styles.topLinks}>{links}</nav>
          </div>
          <div className={styles.topGroup}>
            <LanguageMenu variant="light" />
            {cta('nav-topo')}
          </div>
        </div>

        {/* Pílula de vidro embaixo, depois de rolar. */}
        <div className={styles.dock} data-hidden={!docked} inert={!docked}>
          {logo}
          <nav className={styles.dockLinks}>{links}</nav>
          <LanguageMenu variant="light" />
          {cta('nav-dock')}
        </div>
      </>
    )
  }

  return (
    <>
      <nav className={styles.nav} aria-label={t.site.visaoGeral}>
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
      </nav>

      <div className={styles.navTools}>
        <LanguageMenu variant="light" />
      </div>
    </>
  )
}
