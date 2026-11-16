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
}

// Card da grade no formato da referência: a imagem do projeto de ponta a
// ponta e, ao passar o mouse, o nome à esquerda e "(tipos · ano)" à
// direita, por cima da imagem. No hover entra a segunda imagem ou, nos
// projetos com motion, o vídeo.
export function CaseCard({ project, eager = false }: CaseCardProps) {
  const { t } = useTranslation()
  const year = projectYear(project, t)
  const meta = [...project.kinds.map(k => t.site.filtros[k]), year].filter(Boolean).join(' · ')
  const href = caseHref(project)
  // A segunda imagem (hover) só é baixada quando alguém chega perto do card:
  // com 16 projetos, carregar as 32 imagens de uma vez pesava na memória e na rolagem.
  const [armed, setArmed] = useState(false)
  // O vídeo de motion (quando o projeto tem) só existe enquanto o mouse ou o foco
  // estão no card: sai da página ao tirar o mouse e não toca escondido.
  const [playing, setPlaying] = useState(false)
  const arm = {
    onPointerEnter: () => { setArmed(true); setPlaying(true) },
    onPointerLeave: () => setPlaying(false),
    onFocus: () => { setArmed(true); setPlaying(true) },
    onBlur: () => setPlaying(false),
  }
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
        <img src={project.image} alt={project.title} loading={eager ? 'eager' : 'lazy'} decoding="async" />
        {project.hoverImage && armed && (
          <img className={styles.mediaHover} src={project.hoverImage} alt="" decoding="async" aria-hidden="true" />
        )}
        {project.hoverVideo && playing && (
          <video
            className={styles.mediaHover}
            src={project.hoverVideo}
            poster={project.hoverImage}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          />
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
      <a className={styles.card} href={project.externalUrl} target="_blank" rel="noopener noreferrer" data-cursor={t.site.cursorSite} {...chat} {...arm}>
        {content}
      </a>
    )
  }
  if (href) return <SiteLink to={href} className={styles.card} data-cursor={t.site.cursorVer} {...chat} {...arm}>{content}</SiteLink>
  return <div className={styles.card} {...chat} {...arm}>{content}</div>
}
