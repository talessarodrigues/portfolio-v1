import { useState } from 'react'
import styles from './ProjectDetail.module.css'
import { ImageLightbox } from './ImageLightbox'
import type { DetailBlockShape } from '../../data/conecta360Structure'
import { allProjects, visibleProjects } from '../../data/projects'
import { detailRegistry } from '../../data/caseStudies'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  ArrowLeft01FreeIcons,
  ArrowUpRight01FreeIcons,
  Briefcase01FreeIcons,
  Building03FreeIcons,
  Calendar03FreeIcons,
} from '@hugeicons/core-free-icons'
import { LikeButton } from '../LikeButton/LikeButton'
import { useTranslation } from '../../i18n/LanguageContext'
import type { CaseStudyText, DetailTextBlock } from '../../i18n/types'

interface ProjectDetailProps {
  currentSlug: string
  onBack: () => void
  // No mobile o case study abre dentro de um sheet que já tem o botão
  // de fechar no header — aí o "Voltar" interno fica redundante.
  hideBack?: boolean
}

function Block({ shape, text, onZoom }: { shape: DetailBlockShape; text: DetailTextBlock; onZoom: (src: string) => void }) {
  switch (shape.type) {
    case 'h2':
      return <h2 className={styles.h2}>{text as string}</h2>
    case 'h3':
      return <h3 className={styles.h3}>{text as string}</h3>
    case 'h4':
      return <h4 className={styles.h4}>{text as string}</h4>
    case 'p':
      return (
        <>
          {(text as string[]).map((p, i) => (
            <p key={i} className={styles.p}>{p}</p>
          ))}
        </>
      )
    case 'quote':
      return (
        <blockquote className={styles.quote}>
          {(text as string[]).map((l, i) => (
            <p key={i}>{l}</p>
          ))}
        </blockquote>
      )
    case 'list':
      return (
        <ul className={styles.list}>
          {(text as string[]).map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      )
    case 'image':
      return (
        <button type="button" className={styles.imageBlock} onClick={() => onZoom(shape.src)}>
          <img src={shape.src} alt="" loading="lazy" />
        </button>
      )
    case 'video':
      return (
        <video className={styles.video} src={shape.src} poster={shape.poster} controls muted loop playsInline preload="metadata" />
      )
    case 'gallery2':
      return (
        <div className={styles.gallery2}>
          {shape.src.map(src => (
            <button type="button" key={src} className={styles.zoomable} onClick={() => onZoom(src)}>
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )
  }
}

export function ProjectDetail({ currentSlug, onBack, hideBack = false }: ProjectDetailProps) {
  const { t } = useTranslation()
  // Imagem aberta em tela cheia (null = nenhuma).
  const [zoom, setZoom] = useState<string | null>(null)
  const entry = detailRegistry[currentSlug as keyof typeof detailRegistry]
  const text: CaseStudyText = t[entry.dictKey]

  const otherProjects = visibleProjects.filter(p => p.detailSlug !== currentSlug)
  const marqueeProjects = [...otherProjects, ...otherProjects]
  // Mesma chave usada pelos cards da grade, pra curtida ser a mesma nos
  // dois lugares.
  const projectTitle = allProjects.find(p => p.detailSlug === currentSlug)?.title ?? currentSlug

  const meta = [
    { label: text.metaCliente, value: text.metaClienteValue, icon: Building03FreeIcons },
    { label: text.metaServico, value: text.metaServicoValue, icon: Briefcase01FreeIcons },
    { label: text.metaAno, value: text.metaAnoValue, icon: Calendar03FreeIcons },
  ]

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        {!hideBack && (
          <button className={styles.backBtn} onClick={onBack}>
            <HugeiconsIcon icon={ArrowLeft01FreeIcons} size={16} strokeWidth={1.8} />
            {text.backBtn}
          </button>
        )}

        {entry.headerImages && (
          <header className={styles.header}>
            <div className={styles.headerTop}>
              <div className={styles.headerIcon}>
                <img src={entry.headerImages.icon} alt="" />
              </div>
              <div className={styles.headerText}>
                <h1 className={styles.headerTitle}>{text.headerTitle}</h1>
                <p className={styles.headerTagline}>{text.headerTagline}</p>
              </div>
            </div>
            <div className={styles.headerStrip}>
              <img src={entry.headerImages.strip} alt="" />
            </div>
            <div className={styles.headerHero}>
              <img src={entry.headerImages.hero} alt="" />
            </div>
          </header>
        )}

        {!entry.headerImages && (
          <h1 className={styles.compactTitle}>{text.metaClienteValue}</h1>
        )}

        {'protoUrl' in entry && text.protoBtn && (
          <a className={styles.protoBtn} href={entry.protoUrl} target="_blank" rel="noreferrer">
            <HugeiconsIcon icon={ArrowUpRight01FreeIcons} size={16} strokeWidth={1.8} />
            {text.protoBtn}
          </a>
        )}

        <div className={styles.metaRow}>
          {meta.map(m => (
            <div key={m.label} className={styles.metaCard}>
              <span className={styles.metaIcon}><HugeiconsIcon icon={m.icon} size={18} strokeWidth={1.6} /></span>
              <span className={styles.metaLabel}>{m.label}</span>
              <span className={styles.metaValue}>{m.value}</span>
            </div>
          ))}

          <div className={styles.likeCard}>
            <LikeButton projectKey={projectTitle} label={t.likes.curtir} variant="full" />
            <span className={styles.likeLabel}>{t.likes.curtidas}</span>
          </div>
        </div>

        {entry.blockShapes.length > 0 && (
          <article className={styles.article}>
            <span className={styles.overviewLabel}>{text.overviewLabel}</span>
            {entry.blockShapes.map((shape, i) => (
              <Block key={i} shape={shape} text={text.blocks[i]} onZoom={setZoom} />
            ))}
          </article>
        )}

        <div className={styles.finalGallery}>
          {entry.gallery.map((src, i) => (
            <button type="button" key={i} className={styles.zoomable} onClick={() => setZoom(src)}>
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      <div className={styles.relatedOuter}>
        <div className={styles.relatedInner}>
          {marqueeProjects.map((project, i) => {
            const projText = t.projects[project.title]
            return (
              <div key={project.title + i} className={styles.relatedCard}>
                <div className={styles.relatedImageWrap}>
                  <img src={project.image} alt={project.title} className={styles.relatedImage} />
                </div>
                <h3 className={styles.relatedTitle}>{project.title}</h3>
                {projText?.description && <p className={styles.relatedDesc}>{projText.description}</p>}
                {projText?.tags && projText.tags.length > 0 && (
                  <div className={styles.relatedTags}>
                    {projText.tags.slice(0, 3).map(tag => (
                      <span key={tag} className={styles.relatedTag}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <ImageLightbox src={zoom} onClose={() => setZoom(null)} />
    </div>
  )
}
