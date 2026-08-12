import { useEffect } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  DashboardSquare01FreeIcons,
  LayersLogoFreeIcons,
  PaintBoardFreeIcons,
  UserSearch01FreeIcons,
} from '@hugeicons/core-free-icons'
import type { IconSvgElement } from '@hugeicons/react'
import styles from './Mobile.module.css'
import { allProjects } from '../../data/projects'
import type { Project } from '../../data/projects'
import type { ProjectFilter } from '../ProjectsHero/ProjectsHero'
import { useTranslation } from '../../i18n/LanguageContext'
import { IconClose } from './MobileIcons'
import { MobileWorkRow } from './MobileWorkRow'
import { MobileThemeToggle } from './MobileThemeToggle'

// Cada categoria vira uma pílula no topo do sheet. Só a ativa mostra o
// rótulo; as outras ficam só com o ícone, pra caber na largura do
// celular sem rolagem horizontal.
const CATEGORIES: { value: ProjectFilter; icon: IconSvgElement }[] = [
  { value: 'all', icon: DashboardSquare01FreeIcons },
  { value: 'ux-design', icon: UserSearch01FreeIcons },
  { value: 'ui-design', icon: LayersLogoFreeIcons },
  { value: 'branding', icon: PaintBoardFreeIcons },
]

interface MobileWorksSheetProps {
  filter: ProjectFilter
  onFilterChange: (filter: ProjectFilter) => void
  onOpenProject: (project: Project) => void
  onClose: () => void
}

export function MobileWorksSheet({ filter, onFilterChange, onOpenProject, onClose }: MobileWorksSheetProps) {
  const { t } = useTranslation()

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [onClose])

  const filtered = filter === 'all'
    ? allProjects
    : allProjects.filter(p => p.categoryKey === filter)

  const rotulo = (value: ProjectFilter) =>
    value === 'all' ? t.projectsHero.filterTodos : t.categories[value]

  return (
    <div className={styles.sheet} role="dialog" aria-modal="true" aria-label={t.mobile.trabalhos}>
      <header className={styles.sheetHeader}>
        <div className={styles.catTabs}>
          {CATEGORIES.map(cat => {
            const ativa = filter === cat.value
            return (
              <button
                key={cat.value}
                className={`${styles.catTab} ${ativa ? styles.catTabActive : ''}`}
                onClick={() => onFilterChange(cat.value)}
                aria-pressed={ativa}
                aria-label={rotulo(cat.value)}
              >
                <HugeiconsIcon icon={cat.icon} size={18} strokeWidth={1.8} />
                {ativa && <span>{rotulo(cat.value)}</span>}
              </button>
            )
          })}
        </div>

        <div className={styles.sheetActions}>
          <MobileThemeToggle />
          <button className={styles.sheetClose} onClick={onClose} aria-label={t.mobile.fechar}>
            <IconClose />
          </button>
        </div>
      </header>

      <div className={styles.sheetBody}>
        <div className={styles.worksSheetList}>
          {filtered.map((p, i) => (
            <MobileWorkRow key={p.title + i} project={p} onOpen={onOpenProject} />
          ))}
        </div>
      </div>
    </div>
  )
}
