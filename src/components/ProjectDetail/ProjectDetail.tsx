import { useState } from 'react'
import styles from './ProjectDetail.module.css'
import { ImageLightbox } from './ImageLightbox'
import { conecta360HeaderImages, conecta360Gallery, conecta360BlockShapes } from '../../data/conecta360Structure'
import type { DetailBlockShape } from '../../data/conecta360Structure'
import { jornadaJuniorHeaderImages, jornadaJuniorGallery, jornadaJuniorBlockShapes } from '../../data/jornadaJuniorStructure'
import { residentEvilHeaderImages, residentEvilGallery, residentEvilBlockShapes } from '../../data/residentEvilStructure'
import { redesignNatvaHeaderImages, redesignNatvaGallery, redesignNatvaBlockShapes } from '../../data/redesignNatvaStructure'
import { drakorysArcaneHeaderImages, drakorysArcaneGallery, drakorysArcaneBlockShapes } from '../../data/drakorysArcaneStructure'
import { asteraDataBankHeaderImages, asteraDataBankGallery, asteraDataBankBlockShapes } from '../../data/asteraDataBankStructure'
import { ironBankHeaderImages, ironBankGallery, ironBankBlockShapes } from '../../data/ironBankStructure'
import { orchardTreasureHeaderImages, orchardTreasureGallery, orchardTreasureBlockShapes } from '../../data/orchardTreasureStructure'
import { conecta360BrandingHeaderImages, conecta360BrandingGallery, conecta360BrandingBlockShapes } from '../../data/conecta360BrandingStructure'
import { easyCarHeaderImages, easyCarGallery, easyCarBlockShapes } from '../../data/easyCarStructure'
import { jornadasCorporativasHeaderImages, jornadasCorporativasGallery, jornadasCorporativasBlockShapes } from '../../data/jornadasCorporativasStructure'
import { talessaRodriguesHeaderImages, talessaRodriguesGallery, talessaRodriguesBlockShapes } from '../../data/talessaRodriguesStructure'
import { catchupTechHeaderImages, catchupTechGallery, catchupTechBlockShapes } from '../../data/catchupTechStructure'
import { vigimolVetoresHeaderImages, vigimolVetoresGallery, vigimolVetoresBlockShapes } from '../../data/vigimolVetoresStructure'
import { allProjects } from '../../data/projects'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  ArrowLeft01FreeIcons,
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

// Registro de detalhamentos disponíveis — cada entrada casa a estrutura
// (imagens + tipo do bloco, mesma para todo idioma) com a chave do
// dicionário que traz o texto (t.conecta360 / t.jornadaJunior).
const detailRegistry = {
  'conecta-360-ux': {
    headerImages: conecta360HeaderImages,
    gallery: conecta360Gallery,
    blockShapes: conecta360BlockShapes,
    dictKey: 'conecta360' as const,
  },
  'jornada-junior-ux': {
    headerImages: jornadaJuniorHeaderImages,
    gallery: jornadaJuniorGallery,
    blockShapes: jornadaJuniorBlockShapes,
    dictKey: 'jornadaJunior' as const,
  },
  'resident-evil-ui': {
    headerImages: residentEvilHeaderImages,
    gallery: residentEvilGallery,
    blockShapes: residentEvilBlockShapes,
    dictKey: 'residentEvil' as const,
  },
  'redesign-natva-ui': {
    headerImages: redesignNatvaHeaderImages,
    gallery: redesignNatvaGallery,
    blockShapes: redesignNatvaBlockShapes,
    dictKey: 'redesignNatva' as const,
  },
  'drakorys-arcane-ui': {
    headerImages: drakorysArcaneHeaderImages,
    gallery: drakorysArcaneGallery,
    blockShapes: drakorysArcaneBlockShapes,
    dictKey: 'drakorysArcane' as const,
  },
  'astera-data-bank-ui': {
    headerImages: asteraDataBankHeaderImages,
    gallery: asteraDataBankGallery,
    blockShapes: asteraDataBankBlockShapes,
    dictKey: 'asteraDataBank' as const,
  },
  'iron-bank-ui': {
    headerImages: ironBankHeaderImages,
    gallery: ironBankGallery,
    blockShapes: ironBankBlockShapes,
    dictKey: 'ironBank' as const,
  },
  'orchard-treasure-ui': {
    headerImages: orchardTreasureHeaderImages,
    gallery: orchardTreasureGallery,
    blockShapes: orchardTreasureBlockShapes,
    dictKey: 'orchardTreasure' as const,
  },
  'conecta-360-branding': {
    headerImages: conecta360BrandingHeaderImages,
    gallery: conecta360BrandingGallery,
    blockShapes: conecta360BrandingBlockShapes,
    dictKey: 'conecta360Branding' as const,
  },
  'easy-car-branding': {
    headerImages: easyCarHeaderImages,
    gallery: easyCarGallery,
    blockShapes: easyCarBlockShapes,
    dictKey: 'easyCar' as const,
  },
  'jornadas-corporativas-branding': {
    headerImages: jornadasCorporativasHeaderImages,
    gallery: jornadasCorporativasGallery,
    blockShapes: jornadasCorporativasBlockShapes,
    dictKey: 'jornadasCorporativas' as const,
  },
  'talessa-rodrigues-branding': {
    headerImages: talessaRodriguesHeaderImages,
    gallery: talessaRodriguesGallery,
    blockShapes: talessaRodriguesBlockShapes,
    dictKey: 'talessaRodrigues' as const,
  },
  'catchup-tech-branding': {
    headerImages: catchupTechHeaderImages,
    gallery: catchupTechGallery,
    blockShapes: catchupTechBlockShapes,
    dictKey: 'catchupTech' as const,
  },
  'vigimol-vetores-branding': {
    headerImages: vigimolVetoresHeaderImages,
    gallery: vigimolVetoresGallery,
    blockShapes: vigimolVetoresBlockShapes,
    dictKey: 'vigimolVetores' as const,
  },
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

  const otherProjects = allProjects.filter(p => p.detailSlug !== currentSlug)
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
