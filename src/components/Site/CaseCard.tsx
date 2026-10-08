import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01FreeIcons } from '@hugeicons/core-free-icons'
import styles from './Site.module.css'
import type { Project } from '../../data/projects'
import { useTranslation } from '../../i18n/LanguageContext'
import { SiteLink } from './SiteLink'
import { caseHref, projectFrame, projectYear } from './projectInfo'

interface CaseCardProps {
  project: Project
  /** Os primeiros cards aparecem sem rolar — esses não esperam o lazy. */
  eager?: boolean
}

// Card da grade: o print do projeto dentro de uma moldura degradê, e
// embaixo o nome à esquerda e "categoria • ano" à direita.
export function CaseCard({ project, eager = false }: CaseCardProps) {
  const { t } = useTranslation()
  const year = projectYear(project, t)
  const meta = [t.categories[project.categoryKey], year].filter(Boolean).join(' • ')
  const href = caseHref(project)
  const badge = project.externalUrl
    ? (project.mobileOnly ? t.projectsHero.somenteMobile : t.projectsHero.verSite)
    : null

  const content = (
    <>
      <span className={styles.frame} style={{ background: projectFrame(project) }}>
        <span className={styles.shot}>
          <img src={project.image} alt={project.title} loading={eager ? 'eager' : 'lazy'} />
        </span>
        {badge && (
          <span className={styles.badge}>
            {badge}
            <HugeiconsIcon icon={ArrowUpRight01FreeIcons} size={14} strokeWidth={2} />
          </span>
        )}
      </span>
      <span className={styles.caption}>
        <span className={styles.captionTitle}>{project.title}</span>
        <span className={styles.captionMeta}>{meta}</span>
      </span>
    </>
  )

  // Projeto no ar abre o site; projeto com case abre a página dele.
  if (project.externalUrl) {
    return (
      <a className={styles.card} href={project.externalUrl} target="_blank" rel="noopener noreferrer" data-cursor={t.site.cursorSite}>
        {content}
      </a>
    )
  }
  if (href) return <SiteLink to={href} className={styles.card} data-cursor={t.site.cursorVer}>{content}</SiteLink>
  return <div className={styles.card}>{content}</div>
}
