import { useEffect, useMemo, useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01FreeIcons } from '@hugeicons/core-free-icons'
import styles from './CasePage.module.css'
import siteStyles from './Site.module.css'
import { allProjects } from '../../data/projects'
import { getCase } from '../../data/caseStudies'
import type { DetailBlockShape } from '../../data/conecta360Structure'
import type { DetailTextBlock } from '../../i18n/types'
import { useTranslation } from '../../i18n/LanguageContext'
import { trackCase } from '../../analytics'
import { ImageLightbox } from '../ProjectDetail/ImageLightbox'
import { LikeButton } from '../LikeButton/LikeButton'
import { SiteNav } from './SiteNav'
import type { NavSection } from './SiteNav'
import { SiteLink } from './SiteLink'
import { CaseCard } from './CaseCard'
import { projectFrame } from './projectInfo'

interface Block {
  shape: DetailBlockShape
  text: DetailTextBlock
}

interface Section extends NavSection {
  blocks: Block[]
}

// Linha da página onde uma seção passa a contar como "a que está sendo
// lida" — logo abaixo da cápsula fixa do topo.
const SPY_OFFSET = 140

// O texto dos cases foi escrito como uma lista corrida de blocos. Aqui
// ela é cortada em seções a cada h2/h3 — são esses títulos que viram o
// índice da cápsula do topo. O que vier antes do primeiro título entra
// numa seção "Visão geral".
function buildSections(shapes: DetailBlockShape[], texts: DetailTextBlock[], introLabel: string): Section[] {
  const sections: Section[] = []
  shapes.forEach((shape, i) => {
    const text = texts[i] ?? null
    if ((shape.type === 'h2' || shape.type === 'h3') && typeof text === 'string' && text.trim()) {
      sections.push({ id: `secao-${sections.length + 1}`, label: text, blocks: [] })
      return
    }
    if (sections.length === 0) sections.push({ id: 'secao-1', label: introLabel, blocks: [] })
    sections[sections.length - 1].blocks.push({ shape, text })
  })
  return sections
}

function BlockView({ shape, text, onZoom }: Block & { onZoom: (src: string) => void }) {
  const lines = Array.isArray(text) ? text : text ? [text] : []
  switch (shape.type) {
    case 'h2':
    case 'h3':
    case 'h4':
      return <h3 className={styles.subhead}>{lines.join(' ')}</h3>
    case 'p':
      return <>{lines.map((p, i) => <p key={i} className={styles.p}>{p}</p>)}</>
    case 'quote':
      return (
        <blockquote className={styles.quote}>
          {lines.map((l, i) => <p key={i}>{l}</p>)}
        </blockquote>
      )
    case 'list':
      return <ul className={styles.list}>{lines.map((it, i) => <li key={i}>{it}</li>)}</ul>
    case 'image':
      return (
        <button type="button" className={styles.shot} onClick={() => onZoom(shape.src)}>
          <img src={shape.src} alt="" loading="lazy" />
        </button>
      )
    case 'video':
      // Sem autoplay com som: começa mudo e em loop, como um GIF, e a
      // pessoa liga o som ou abre em tela cheia pelos controles.
      return (
        <video
          className={styles.video}
          src={shape.src}
          poster={shape.poster}
          controls
          muted
          loop
          playsInline
          preload="metadata"
        />
      )
    case 'gallery2':
      return (
        <div className={styles.pair}>
          {shape.src.map(src => (
            <button type="button" key={src} className={styles.shot} onClick={() => onZoom(src)}>
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )
  }
}

export function CasePage({ slug }: { slug: string }) {
  const { t } = useTranslation()
  const [zoom, setZoom] = useState<string | null>(null)
  const project = allProjects.find(p => p.detailSlug === slug)
  const entry = getCase(slug)
  const text = entry ? t[entry.dictKey] : null

  const sections = useMemo(() => {
    if (!entry || !text) return []
    const list = buildSections(entry.blockShapes, text.blocks, t.site.visaoGeral)
    if (entry.gallery.length > 0) {
      list.push({
        id: `secao-${list.length + 1}`,
        label: t.site.galeria,
        blocks: entry.gallery.map(src => ({ shape: { type: 'image', src }, text: null })),
      })
    }
    return list
  }, [entry, text, t.site.visaoGeral, t.site.galeria])

  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    if (entry) trackCase(slug)
  }, [slug, entry])

  // Índice da cápsula: marca a última seção cujo topo já passou da linha
  // logo abaixo dela.
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      let current: string | null = sections[0]?.id ?? null
      for (const s of sections) {
        const el = document.getElementById(s.id)
        if (el && el.getBoundingClientRect().top <= SPY_OFFSET) current = s.id
      }
      setActive(current)
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [sections])

  if (!project || !entry || !text) {
    return (
      <>
        <SiteNav page="case" sections={[]} />
        <main className={styles.notFound}>
          <p>{t.site.paginaNaoEncontrada}</p>
          <SiteLink to="/" className={siteStyles.btnPrimary}>{t.site.voltarInicio}</SiteLink>
        </main>
      </>
    )
  }

  // Quando o cliente tem o mesmo nome do projeto ("USFit • USFit"), a
  // linha de cima mostra a categoria no lugar.
  const eyebrowLead = text.metaClienteValue && text.metaClienteValue !== project.title
    ? text.metaClienteValue
    : t.categories[project.categoryKey]
  const eyebrow = [eyebrowLead, text.metaAnoValue].filter(Boolean).join(' • ')
  const summary = t.projects[project.title]?.description

  const meta = [
    { label: text.metaCliente, value: text.metaClienteValue },
    { label: text.metaServico, value: text.metaServicoValue },
    { label: text.metaAno, value: text.metaAnoValue },
  ].filter(m => m.value)

  // "Explore mais": os dois projetos que vêm depois deste na lista geral.
  const index = allProjects.indexOf(project)
  const more = [1, 2].map(n => allProjects[(index + n) % allProjects.length])

  return (
    <>
      <SiteNav page="case" sections={sections} activeSection={active} />

      <main className={styles.page}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h1 className={styles.title}>{project.title}</h1>
          {summary && <p className={styles.summary}>{summary}</p>}
        </header>

        <div className={styles.cover} style={{ background: projectFrame(project) }}>
          <img src={project.image} alt={project.title} />
        </div>

        <dl className={styles.meta}>
          {meta.map(m => (
            <div key={m.label} className={styles.metaItem}>
              <dt>{m.label}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
          <div className={styles.metaItem}>
            <dt>{t.likes.curtidas}</dt>
            <dd><LikeButton projectKey={project.title} label={t.likes.curtir} /></dd>
          </div>
          {entry.protoUrl && (
            <a className={styles.proto} href={entry.protoUrl} target="_blank" rel="noopener noreferrer">
              {text.protoBtn || t.site.verPrototipo}
              <HugeiconsIcon icon={ArrowUpRight01FreeIcons} size={16} strokeWidth={1.8} />
            </a>
          )}
        </dl>

        {sections.map(section => (
          <section key={section.id} id={section.id} className={styles.section}>
            <h2 className={styles.sectionLabel}>{section.label}</h2>
            <div className={styles.sectionBody}>
              {section.blocks.map((b, i) => (
                <BlockView key={i} shape={b.shape} text={b.text} onZoom={setZoom} />
              ))}
            </div>
          </section>
        ))}

        <section className={styles.more}>
          <h2 className={styles.moreTitle}>{t.site.exploreMais}</h2>
          <div className={siteStyles.grid}>
            {more.map(p => <CaseCard key={p.title} project={p} />)}
          </div>
        </section>
      </main>

      <ImageLightbox src={zoom} onClose={() => setZoom(null)} />
    </>
  )
}
