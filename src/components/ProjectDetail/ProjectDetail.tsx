import { useState, useEffect } from 'react'
import styles from './ProjectDetail.module.css'
import { ContactBanner } from '../ContactBanner/ContactBanner'
import { ToolsBackground } from '../ToolsBackground/ToolsBackground'

export type ProjectSection = { title: string; paragraphs: string[] }

export type ProjectFull = {
  image?: string
  coverImage?: string
  title: string
  titleAccent?: string
  accentColor?: string
  category: string
  tags?: string[]
  description?: string
  sections?: ProjectSection[]
  liveUrl?: string
  // Quando há behanceUrl/figmaUrl, o clique abre um modal (não o detalhamento)
  subtitle?: string
  status?: string
  modalImage?: string
  behanceUrl?: string
  figmaUrl?: string
}

interface ProjectDetailProps {
  project: ProjectFull
  allProjects: ProjectFull[]
  onBack: () => void
  onSelect: (p: ProjectFull) => void
}

const IconSparkle = () => (
  <svg width="16" height="20" viewBox="0 0 16 20" fill="none" aria-hidden="true">
    <path d="M8 1L9.5 7.5L15 8L9.5 9.5L8 16L6.5 9.5L1 8L6.5 7.5L8 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" fill="none"/>
    <circle cx="13" cy="3" r="1" fill="currentColor" opacity="0.6"/>
    <circle cx="3" cy="15" r="0.8" fill="currentColor" opacity="0.5"/>
  </svg>
)

export function ProjectDetail({ project, allProjects, onBack, onSelect }: ProjectDetailProps) {
  const [openIdxs, setOpenIdxs] = useState<Set<number>>(new Set([0]))
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => setShowCursor(v => !v), 530)
    return () => clearInterval(timer)
  }, [])

  const related = allProjects.filter(p => p.title !== project.title && p.image)

  return (
    <div className={styles.page}>
      <div className={styles.heroHome}>
        <ToolsBackground />
        <div className={styles.heroHomeInner}>
          <button className={styles.back} onClick={onBack} style={{ padding: '0 0 8px', position: 'relative', zIndex: 2 }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Voltar para projetos
          </button>

          <div className={styles.heroTopBlock}>
            <div className={styles.heroHeadings}>
              <h1 className={styles.heroH1}>{project.title}</h1>
              {project.titleAccent && (
                project.accentColor === 'gradient-portfolio' ? (
                  <div className={styles.heroH1Gradient}>
                    {project.titleAccent}
                    <span className={showCursor ? styles.heroCursor : styles.heroCursorHidden}>|</span>
                  </div>
                ) : (
                  <div className={styles.heroH1Gradient} style={{
                    background: `linear-gradient(92deg, ${project.accentColor || '#f97316'} 0%, ${project.accentColor || '#f97316'} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    {project.titleAccent}
                    <span className={showCursor ? styles.heroCursor : styles.heroCursorHidden} style={{ WebkitTextFillColor: project.accentColor || '#f97316' }}>|</span>
                  </div>
                )
              )}
            </div>
            {project.description && (
              <p className={styles.heroDescription}>{project.description}</p>
            )}
          </div>

          {project.tags && project.tags.length > 0 && (
            <div className={styles.tags}>
              {project.tags.map((tag, i) => {
                const dotColors = ['#ef4444', '#f9c701', '#33c659']
                return (
                  <span key={tag} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span className={styles.tagItem}>{tag}</span>
                    {i < project.tags!.length - 1 && (
                      <span className={styles.tagSep} style={{ background: dotColors[i % dotColors.length] }} />
                    )}
                  </span>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {project.image && (
        <div className={styles.macbookWrap}>
          <div className={styles.macbook}>
            <div className={styles.macbookLid}>
              <div className={styles.macbookBrowser}>
                <div className={styles.macbookDots}>
                  <div className={styles.macbookDot} />
                  <div className={styles.macbookDot} />
                  <div className={styles.macbookDot} />
                </div>
                <div className={styles.macbookUrlBar} />
              </div>
              <div className={styles.macbookScreen}>
                <img src={project.coverImage ?? project.image} alt={project.title} />
              </div>
            </div>
            <div className={styles.macbookBase} />
            <div className={styles.macbookShadow} />
          </div>
        </div>
      )}

      {project.sections && project.sections.length > 0 && (
        <div className={styles.sections}>
          {project.sections.map((sec, i) => {
            const isOpen = openIdxs.has(i)
            return (
              <div key={sec.title} className={styles.accordionItem}>
                <button className={styles.accordionBtn} onClick={() => setOpenIdxs(prev => { const s = new Set(prev); s.has(i) ? s.delete(i) : s.add(i); return s })}>
                  <span className={styles.accordionTitle}>{sec.title}</span>
                  <span className={`${styles.accordionIcon} ${isOpen ? styles.accordionIconOpen : ''}`}>{isOpen ? '—' : '+'}</span>
                </button>
                {isOpen && (
                  <div className={styles.accordionBody}>
                    {sec.paragraphs.map((p, j) => (
                      <p key={j} className={styles.accordionText}>{p}</p>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {project.liveUrl && (
        <div className={styles.liveWrap}>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.liveBtn}>
            Ver site ao vivo
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      )}

      {related.length > 0 && (
        <div className={styles.related}>
          <div className={styles.relatedBlock}>
            <p className={styles.relatedTitle}>Veja mais projetos</p>
            <div className={styles.marqueeOuter}>
              <div className={styles.marqueeInner}>
                {[...related, ...related].map((p, i) => (
                  <div key={i} className={styles.relatedCard} onClick={() => { onSelect(p); window.scrollTo(0, 0) }}>
                    <div className={styles.relatedImgWrap}>
                      <img src={p.image} alt={p.title} className={styles.relatedImg} />
                    </div>
                    <div className={styles.relatedMeta}>
                      <span className={styles.relatedName}>{p.title}</span>
                      <span className={styles.relatedDot}>·</span>
                      <span className={styles.relatedCat}>{p.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <ContactBanner />
    </div>
  )
}
