import { useState } from 'react'
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
  /**
   * Card completo (imagem em cima e, embaixo, título, descrição, tipos e
   * botão) em vez de só a imagem. A grade alterna os dois, no ritmo da
   * referência da Dymit.
   */
  rich?: boolean
}

// Dois formatos de card dentro da mesma moldura (borda branca, cantos
// redondos): o completo explica o projeto; o de imagem mostra só o mockup
// e, ao passar o mouse, o nome à esquerda e "(tipos · ano)" à direita.
export function CaseCard({ project, eager = false, rich = false }: CaseCardProps) {
  const { t } = useTranslation()
  const year = projectYear(project, t)
  const kinds = project.kinds.map(k => t.site.filtros[k])
  const meta = [...kinds, year].filter(Boolean).join(' · ')
  const href = caseHref(project)
  const description = t.projects[project.title]?.description
  // A segunda imagem (hover) só é baixada quando alguém chega perto do card:
  // com 16 projetos, carregar as 32 imagens de uma vez pesava na memória e na rolagem.
  const [armed, setArmed] = useState(false)
  const arm = { onPointerEnter: () => setArmed(true), onFocus: () => setArmed(true) }
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

  const media = (
    <span className={styles.media}>
      <img src={project.image} alt={project.title} loading={eager ? 'eager' : 'lazy'} decoding="async" />
      {project.hoverImage && armed && (
        <img className={styles.mediaHover} src={project.hoverImage} alt="" decoding="async" aria-hidden="true" />
      )}
    </span>
  )

  const content = rich ? (
    <>
      {media}
      <span className={styles.body}>
        <span className={styles.bodyTitle}>{project.title}</span>
        {description && <span className={styles.bodyText}>{description}</span>}
        <span className={styles.bodyFoot}>
          <span className={styles.tags}>
            {[...kinds, year].filter(Boolean).map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </span>
          <span className={styles.bodyBtn}>
            {action}
            <HugeiconsIcon icon={ArrowUpRight01FreeIcons} size={16} strokeWidth={2} />
          </span>
        </span>
      </span>
    </>
  ) : (
    <>
      {media}
      {project.externalUrl && (
        <span className={styles.badge}>
          {action}
          <HugeiconsIcon icon={ArrowUpRight01FreeIcons} size={14} strokeWidth={2} />
        </span>
      )}
      <span className={styles.overlay}>
        <span className={styles.captionTitle}>{project.title}</span>
        <span className={styles.overlayMeta}>({meta})</span>
      </span>
    </>
  )

  const cls = `${styles.card} ${rich ? styles.cardRich : styles.cardImage}`

  // Projeto no ar abre o site; projeto com case abre a página dele.
  if (project.externalUrl) {
    return (
      <a className={cls} href={project.externalUrl} target="_blank" rel="noopener noreferrer" data-cursor={t.site.cursorSite} {...chat} {...arm}>
        {content}
      </a>
    )
  }
  if (href) return <SiteLink to={href} className={cls} data-cursor={t.site.cursorVer} {...chat} {...arm}>{content}</SiteLink>
  return <div className={cls} {...chat} {...arm}>{content}</div>
}
