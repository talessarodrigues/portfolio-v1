import { useEffect, useState } from 'react'
import styles from './Mobile.module.css'
// A capa do mobile tem uma ilustração por tema. O avatar do card de
// perfil é um recorte da própria capa — os dois montam um sobre o
// outro, então precisam ser sempre a mesma arte.
import imgCoverLight from '../../assets/illustration/cover-mobile-light.webp'
import imgCoverDark from '../../assets/illustration/cover-mobile-dark.webp'
// Foto real da Talessa no card de perfil; no dock vai o recorte da
// personagem, que combina com a capa e funciona nos dois temas (o dock
// é escuro sempre).
import imgAvatar from '../../assets/sobre/perfil-talessa.webp'
import imgDockAvatar from '../../assets/illustration/dock-avatar.webp'
// logo.svg é a versão branca (vai sobre a capa escura); logo-light.svg
// tem o traço em #1a1a1a, pra capa clara.
import imgLogoOnDark from '../../assets/header/logo.svg'
import imgLogoOnLight from '../../assets/header/logo-light.svg'
import { allProjects } from '../../data/projects'
import type { Project } from '../../data/projects'
import type { ProjectFilter } from '../ProjectsHero/ProjectsHero'
import { LanguageMenu } from '../LanguageMenu/LanguageMenu'
import { useTranslation } from '../../i18n/LanguageContext'
import { MobileAbout } from './MobileAbout'
import { MobileContactSheet } from './MobileContactSheet'
import { MobileProjectSheet } from './MobileProjectSheet'
import { MobileWorksSheet } from './MobileWorksSheet'
import { MobileWorkRow } from './MobileWorkRow'
import { LINKS, PROFILE } from './links'
import {
  IconChat, IconGrid, IconHome,
} from './MobileIcons'
import { useTheme } from '../../theme/ThemeContext'
import { MobileThemeToggle } from './MobileThemeToggle'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  ArrowRightDoubleFreeIcons,
  Behance02FreeIcons,
  Github01FreeIcons,
  Linkedin02FreeIcons,
  Mail01FreeIcons,
} from '@hugeicons/core-free-icons'

type MobileTab = 'inicio' | 'sobre'

// Mesma seleção de destaques da home desktop.
const featuredTitles = ['Redesign Natva', 'Resident Evil', 'Drakorys Arcane', 'Astera Data Bank', 'Iron Bank', 'Orchard Treasure']

export function MobileApp() {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const imgCover = isDark ? imgCoverDark : imgCoverLight
  const imgLogo = isDark ? imgLogoOnDark : imgLogoOnLight
  const [tab, setTab] = useState<MobileTab>('inicio')
  const [filter, setFilter] = useState<ProjectFilter>('all')
  const [contactOpen, setContactOpen] = useState(false)
  const [detailSlug, setDetailSlug] = useState<string | null>(null)
  const [worksOpen, setWorksOpen] = useState(false)

  // Troca de aba sempre começa do topo.
  useEffect(() => { window.scrollTo(0, 0) }, [tab])

  // Trava o scroll do fundo enquanto um sheet/modal está aberto.
  useEffect(() => {
    const locked = contactOpen || worksOpen || detailSlug !== null
    document.body.style.overflow = locked ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [contactOpen, worksOpen, detailSlug])

  // Qual item do dock aparece marcado. Precisa ser um valor só: antes
  // "Início" olhava a aba e "Cases" olhava o sheet, e com o sheet aberto
  // os dois acendiam ao mesmo tempo. Um sheet sempre ganha da aba de
  // baixo, que continua montada atrás dele.
  const dockAtivo: MobileTab | 'cases' | 'contato' =
    worksOpen || detailSlug ? 'cases' : contactOpen ? 'contato' : tab

  // O dock fica visível por cima dos sheets, então cada item precisa
  // fechar o que estiver aberto antes de navegar.
  const irParaAba = (destino: MobileTab) => {
    setWorksOpen(false)
    setDetailSlug(null)
    setContactOpen(false)
    setTab(destino)
  }

  const openProject = (p: Project) => {
    if (!p.detailSlug) return
    setDetailSlug(p.detailSlug)
  }

  // Ordem: Behance, LinkedIn, GitHub, E-mail.
  // WhatsApp continua no botão "Contato" e no dock.
  const SOCIALS = [
    { href: LINKS.behance, icon: Behance02FreeIcons, label: 'Behance' },
    { href: LINKS.linkedin, icon: Linkedin02FreeIcons, label: 'LinkedIn' },
    { href: LINKS.github, icon: Github01FreeIcons, label: 'GitHub' },
    { href: LINKS.email ? `mailto:${LINKS.email}` : '', icon: Mail01FreeIcons, label: 'E-mail' },
  ]

  const featured = featuredTitles
    .map(title => allProjects.find(p => p.title === title))
    .filter(Boolean) as Project[]

  return (
    <div className={styles.app}>
      {tab === 'inicio' && (
        <div className={styles.fade}>
          <div className={styles.cover}>
            <img src={imgCover} alt="" className={styles.coverImg} />
            <div className={styles.coverTop}>
              <button className={styles.logoChip} onClick={() => setTab('inicio')} aria-label={t.header.irParaHome}>
                <img src={imgLogo} alt="Talessa Rodrigues Design" />
              </button>
              <div className={styles.coverActions}>
                <LanguageMenu variant={isDark ? 'dark' : 'light'} gradient />
                <MobileThemeToggle onCover />
              </div>
            </div>
          </div>

          <div className={styles.profile}>
            <div className={styles.avatarWrap}>
              <img src={imgAvatar} alt={PROFILE.name} className={styles.avatar} />
            </div>

            <div className={styles.nameRow}>
              <h1 className={styles.name}>{PROFILE.name}</h1>
              <button className={styles.contactBtn} onClick={() => setContactOpen(true)}>
                <span className={styles.contactBtnDisc} aria-hidden="true">
                  <HugeiconsIcon icon={ArrowRightDoubleFreeIcons} size={16} strokeWidth={2.2} />
                </span>
                {t.header.contato}
              </button>
            </div>

            <div className={styles.handleRow}>
              <span className={styles.handle}>{PROFILE.handle}</span>
              <span className={styles.statusPill}>
                <span className={styles.statusDot} />
                {t.mobile.disponivel}
              </span>
            </div>

            <div className={styles.socialRow}>
              {SOCIALS.map(social => (
                <a
                  key={social.label}
                  // Sem endereço definido o item não vira link: aparece
                  // apagado e fora da ordem de tabulação.
                  href={social.href || undefined}
                  target={social.href ? '_blank' : undefined}
                  rel={social.href ? 'noopener noreferrer' : undefined}
                  aria-disabled={social.href ? undefined : true}
                  className={`${styles.socialBtn} ${social.href ? '' : styles.socialBtnPending}`}
                  aria-label={social.label}
                >
                  <HugeiconsIcon icon={social.icon} size={20} strokeWidth={1.7} />
                </a>
              ))}
            </div>

            <p className={styles.tagline}>{t.mobile.tagline}</p>
            <p className={styles.bio}>{t.hero.description}</p>
          </div>

          <section className={styles.section}>
            <div className={styles.sectionHead}>
              <h2 className={styles.sectionTitle}>{t.mobile.trabalhos}</h2>
              <button className={styles.sectionLink} onClick={() => setWorksOpen(true)}>
                {t.mobile.verTodos} <b>({allProjects.length})</b>
              </button>
            </div>
            <div className={styles.workList}>
              {featured.map(p => <MobileWorkRow key={p.title} project={p} onOpen={openProject} />)}
            </div>
          </section>

        </div>
      )}

      {tab === 'sobre' && <MobileAbout />}

      {/* Dock flutuante */}
      <nav className={styles.dock} aria-label="Navegação">
        <button
          className={`${styles.dockBtn} ${dockAtivo === 'inicio' ? styles.dockBtnActive : ''}`}
          onClick={() => irParaAba('inicio')}
          aria-label={t.mobile.tabs.inicio}
          aria-current={dockAtivo === 'inicio'}
        >
          <IconHome />
        </button>
        <button
          className={`${styles.dockBtn} ${dockAtivo === 'cases' ? styles.dockBtnActive : ''}`}
          onClick={() => { setDetailSlug(null); setContactOpen(false); setWorksOpen(true) }}
          aria-label={t.mobile.tabs.trabalhos}
          aria-current={dockAtivo === 'cases'}
        >
          <IconGrid />
        </button>
        <button
          className={`${styles.dockBtn} ${dockAtivo === 'contato' ? styles.dockBtnActive : ''}`}
          onClick={() => { setWorksOpen(false); setDetailSlug(null); setContactOpen(true) }}
          aria-label={t.mobile.tabs.contato}
          aria-current={dockAtivo === 'contato'}
        >
          <IconChat />
        </button>
        <button
          className={`${styles.dockAvatarBtn} ${dockAtivo === 'sobre' ? styles.dockAvatarActive : ''}`}
          onClick={() => irParaAba('sobre')}
          aria-label={t.mobile.tabs.sobre}
          aria-current={dockAtivo === 'sobre'}
        >
          <span className={styles.dockAvatarClip}>
            <img src={imgDockAvatar} alt="" />
          </span>
        </button>
      </nav>

      {worksOpen && (
        <MobileWorksSheet
          filter={filter}
          onFilterChange={setFilter}
          onOpenProject={openProject}
          onClose={() => setWorksOpen(false)}
        />
      )}

      {detailSlug && <MobileProjectSheet slug={detailSlug} onClose={() => setDetailSlug(null)} />}
      {contactOpen && <MobileContactSheet onClose={() => setContactOpen(false)} />}
    </div>
  )
}
