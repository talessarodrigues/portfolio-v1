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

// Card da grade no formato da referência: a imagem do projeto de ponta a
// ponta e, ao passar o mouse, o nome à esquerda e "(tipos · ano)" à
// direita, por cima da imagem.
export function CaseCard({ project, eager = false }: CaseCardProps) {
  const { t } = useTranslation()
  const year = projectYear(project, t)
  const meta = [...project.kinds.map(k => t.site.filtros[k]), year].filter(Boolean).join(' · ')
  const href = caseHref(project)
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
  const badge = project.externalUrl
    ? (project.mobileOnly ? t.projectsHero.somenteMobile : t.projectsHero.verSite)
    : null

  const content = (
    <>
      <span className={styles.media}>
        <img src={project.image} alt={project.title} loading={eager ? 'eager' : 'lazy'} />
        {project.hoverImage && (
          <img className={styles.mediaHover} src={project.hoverImage} alt="" loading="lazy" aria-hidden="true" />
        )}
      </span>
      {badge && (
        <span className={styles.badge}>
          {badge}
          <HugeiconsIcon icon={ArrowUpRight01FreeIcons} size={14} strokeWidth={2} />
        </span>
      )}
      <span className={styles.overlay}>
        <span className={styles.captionTitle}>{project.title}</span>
        <span className={styles.overlayMeta}>({meta})</span>
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
