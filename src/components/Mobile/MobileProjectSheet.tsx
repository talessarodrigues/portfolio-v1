import { useEffect } from 'react'
import styles from './Mobile.module.css'
import { ProjectDetail } from '../ProjectDetail/ProjectDetail'
import { allProjects } from '../../data/projects'
import { useTranslation } from '../../i18n/LanguageContext'
import { IconClose } from './MobileIcons'
import { MobileThemeToggle } from './MobileThemeToggle'

interface MobileProjectSheetProps {
  slug: string
  onClose: () => void
}

export function MobileProjectSheet({ slug, onClose }: MobileProjectSheetProps) {
  const { t } = useTranslation()
  const project = allProjects.find(p => p.detailSlug === slug)

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [onClose])

  return (
    <div className={styles.sheet} role="dialog" aria-modal="true" aria-label={project?.title}>
      <header className={styles.sheetHeader}>
        <span className={styles.sheetTag}>
          <span>{project?.title}</span>
        </span>
        <div className={styles.sheetActions}>
          <MobileThemeToggle />
          <button className={styles.sheetClose} onClick={onClose} aria-label={t.mobile.fechar}>
            <IconClose />
          </button>
        </div>
      </header>

      <div className={styles.sheetBody}>
        <ProjectDetail currentSlug={slug} onBack={onClose} hideBack />
      </div>
    </div>
  )
}
