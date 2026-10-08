import { useEffect } from 'react'
import styles from './Mobile.module.css'
import { allProjects } from '../../data/projects'
import type { Project } from '../../data/projects'
import { useTranslation } from '../../i18n/LanguageContext'
import { IconClose } from './MobileIcons'
import { MobileWorkRow } from './MobileWorkRow'

interface MobileWorksSheetProps {
  onOpenProject: (project: Project) => void
  onClose: () => void
}

export function MobileWorksSheet({ onOpenProject, onClose }: MobileWorksSheetProps) {
  const { t } = useTranslation()

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [onClose])

  return (
    <div className={styles.sheet} role="dialog" aria-modal="true" aria-label={t.mobile.trabalhos}>
      <header className={styles.sheetHeader}>
        {/* Só sobrou uma categoria (UX/UI): no lugar das pílulas de filtro,
            o título, no mesmo formato do sheet de case. */}
        <span className={styles.sheetTag}>
          <span>{t.mobile.trabalhos}</span>
        </span>

        <div className={styles.sheetActions}>
          <button className={styles.sheetClose} onClick={onClose} aria-label={t.mobile.fechar}>
            <IconClose />
          </button>
        </div>
      </header>

      <div className={styles.sheetBody}>
        <div className={styles.worksSheetList}>
          {allProjects.map((p, i) => (
            <MobileWorkRow key={p.title + i} project={p} onOpen={onOpenProject} />
          ))}
        </div>
      </div>
    </div>
  )
}
