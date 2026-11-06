import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01FreeIcons } from '@hugeicons/core-free-icons'
import styles from './Site.module.css'
import type { Project } from '../../data/projects'
import { useTranslation } from '../../i18n/LanguageContext'
import { SiteLink } from './SiteLink'
import { caseHref, projectYear } from './projectInfo'

interface CaseCardProps {
  project: Project
  /** Os primeiros cards aparecem sem rolar — esses não esperam o lazy. */
  eager?: boolean
}

// Card no formato da referência da Dymit: em repouso é só a imagem de ponta
// a ponta; ao passar o mouse a imagem sobe e uma área branca sobe de baixo
// com o título, a descrição, os tipos e o botão. Sem hover (toque) o card
// fica como imagem e mostra o nome por cima.
export function CaseCard({ project, eager = false }: CaseCardProps) {
  const { t } = useTranslation()
  const year = projectYear(project, t)
  const kinds = project.kinds.map(k => t.site.filtros[k])
  const tags = [...kinds, year].filter((x): x is string => Boolean(x))
  const href = caseHref(project)
  const description = t.projects[project.title]?.description
  // Cada card "conversa" com o cursor: um papel (Produto, Engenharia ou
  // Negócio) e uma pergunta, escolhidos pelo nome do projeto para serem
  // sempre os mesmos.
  const seed = [...project.title].reduce((n, c) => (n * 31 + c.charCodeAt(0)) >>> 0, 7)
  const balao = t.site.cursorBaloes[seed % t.site.cursorBaloes.length]
  const chat = {
    'data-cursor-papel': balao.papel,
    'data-cursor-tipo': balao.tipo,
    'data-cursor-fala': balao.perguntas[Math.floor(seed / 7) % balao.perguntas.length],
  }
  const action = project.externalUrl
    ? (project.mobileOnly ? t.projectsHero.somenteMobile : t.projectsHero.verSite)
    : t.site.cursorVer

  const content = (
    <>
      <span className={styles.media}>
        <img src={project.image} alt={project.title} loading={eager ? 'eager' : 'lazy'} decoding="async" />
      </span>
      {project.externalUrl && (
        <span className={styles.badge}>
          {action}
          <HugeiconsIcon icon={ArrowUpRight01FreeIcons} size={14} strokeWidth={2} />
        </span>
      )}
      {/* Sem hover: só o nome por cima da imagem. */}
      <span className={styles.overlay}>
        <span className={styles.captionTitle}>{project.title}</span>
      </span>
      {/* Com hover: a área branca que sobe de baixo. */}
      <span className={styles.body}>
        <span className={styles.bodyTitle}>{project.title}</span>
        {description && <span className={styles.bodyText}>{description}</span>}
        <span className={styles.bodyFoot}>
          <span className={styles.tags}>
            {tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
          </span>
          <span className={styles.bodyBtn}>
            {action}
            <HugeiconsIcon icon={ArrowUpRight01FreeIcons} size={15} strokeWidth={2} />
          </span>
        </span>
      </span>
    </>
  )

  // Projeto no ar abre o site; projeto com case abre a página dele.
  if (project.externalUrl) {
    return (
      <a className={styles.card} href={project.externalUrl} target="_blank" rel="noopener noreferrer" data-cursor={t.site.cursorSite} {...chat}>
        {content}
      </a>
    )
  }
  if (href) return <SiteLink to={href} className={styles.card} data-cursor={t.site.cursorVer} {...chat}>{content}</SiteLink>
  return <div className={styles.card} {...chat}>{content}</div>
}
