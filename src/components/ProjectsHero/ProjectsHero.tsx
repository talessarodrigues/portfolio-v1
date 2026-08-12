import { HugeiconsIcon } from '@hugeicons/react'
import {
  DashboardSquare01FreeIcons,
  LayersLogoFreeIcons,
  PaintBoardFreeIcons,
  UserSearch01FreeIcons,
} from '@hugeicons/core-free-icons'
import type { IconSvgElement } from '@hugeicons/react'
import styles from './ProjectsHero.module.css'
import { useTranslation } from '../../i18n/LanguageContext'
import type { CategoryKey } from '../../data/projects'

export type ProjectFilter = 'all' | CategoryKey

// Mesmos ícones do sheet de Cases do mobile.
const FILTERS: { value: ProjectFilter; icon: IconSvgElement }[] = [
  { value: 'all', icon: DashboardSquare01FreeIcons },
  { value: 'ui-design', icon: LayersLogoFreeIcons },
  { value: 'branding', icon: PaintBoardFreeIcons },
  { value: 'ux-design', icon: UserSearch01FreeIcons },
]

interface ProjectsHeroProps {
  activeFilter: ProjectFilter
  onFilterChange: (category: ProjectFilter) => void
}

const IconHeart = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 20.5s-7.5-4.6-10-9.3C.5 7.8 2.3 4.5 5.7 4.5c2 0 3.6 1.1 4.3 2.7C10.7 5.6 12.3 4.5 14.3 4.5c3.4 0 5.2 3.3 3.7 6.7-2.5 4.7-10 9.3-10 9.3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
)

export function ProjectsHero({ activeFilter, onFilterChange }: ProjectsHeroProps) {
  const { t } = useTranslation()

  return (
    <section className={styles.hero}>
      <div className={styles.inner} data-animate>
        <div className={styles.headerTop}>
          <h1 className={styles.title}>
            {t.featuredProjects.title} <span className={styles.highlight}>{t.featuredProjects.titleHighlight}</span> {t.featuredProjects.titleSuffix}
          </h1>
          <div className={styles.headerDecor}>
            <span className={styles.waveform} aria-hidden="true">
              {Array.from({ length: 16 }).map((_, i) => (
                <span key={i} className={styles.waveformBar} style={{ height: `${4 + ((i * 5) % 14)}px` }} />
              ))}
            </span>
            <button className={styles.heartBtn} aria-hidden="true" tabIndex={-1}><IconHeart /></button>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <p className={styles.subtitle}>{t.featuredProjects.subtitle}</p>
          <div className={styles.filterBar}>
            {FILTERS.map(cat => {
              const isActive = activeFilter === cat.value
              const label = cat.value === 'all' ? t.projectsHero.filterTodos : t.categories[cat.value]
              return (
                <button
                  key={cat.value}
                  className={`${styles.filterPill} ${isActive ? styles.filterActive : ''}`}
                  onClick={() => onFilterChange(cat.value)}
                >
                  <HugeiconsIcon icon={cat.icon} size={16} strokeWidth={1.8} />
                  {label}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
