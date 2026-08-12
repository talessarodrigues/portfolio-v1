import styles from './Mobile.module.css'
import type { Project } from '../../data/projects'
import { useTranslation } from '../../i18n/LanguageContext'
import { IconChevron } from './MobileIcons'

interface MobileWorkRowProps {
  project: Project
  onOpen: (project: Project) => void
}

// Linha de projeto usada tanto na home quanto no sheet de Trabalhos.
export function MobileWorkRow({ project, onOpen }: MobileWorkRowProps) {
  const { t } = useTranslation()
  const text = t.projects[project.title]
  const clickable = Boolean(project.detailSlug)

  return (
    <button
      className={styles.workRow}
      onClick={clickable ? () => onOpen(project) : undefined}
      disabled={!clickable}
    >
      <img src={project.image} alt="" className={styles.workThumb} loading="lazy" />
      <span className={styles.workBody}>
        <span className={styles.workTitleRow}>
          <span className={styles.workTitle}>{project.title}</span>
          <span className={styles.workMeta}>{t.categories[project.categoryKey]}</span>
        </span>
        {text?.description && <span className={styles.workDesc}>{text.description}</span>}
      </span>
      {clickable
        ? <span className={styles.workChevron}><IconChevron /></span>
        : <span className={styles.soonTag}>{t.mobile.emBreve}</span>}
    </button>
  )
}
