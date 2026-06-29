import { useEffect } from 'react'
import styles from './ProjectModal.module.css'
import type { ProjectFull } from '../ProjectDetail/ProjectDetail'

interface ProjectModalProps {
  project: ProjectFull
  onClose: () => void
}

const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconClose = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    const el = document.documentElement
    const prev = el.style.overflow
    el.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      el.style.overflow = prev
    }
  }, [onClose])

  const link = project.behanceUrl
    ? { url: project.behanceUrl, label: 'Behance' }
    : project.figmaUrl
      ? { url: project.figmaUrl, label: 'Figma' }
      : null

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.card} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          {project.status && (
            <div className={styles.statusBadge}>
              <span className={styles.statusDot} />
              {project.status}
            </div>
          )}
          <button className={styles.close} onClick={onClose} aria-label="Fechar">
            <IconClose />
          </button>
        </div>

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
              <img src={project.modalImage ?? project.image} alt={project.title} />
            </div>
          </div>
          <div className={styles.macbookBase} />
          <div className={styles.macbookShadow} />
        </div>

        <div className={styles.body}>
          <div className={styles.texts}>
            <h3 className={styles.title}>{project.title}</h3>
            {project.subtitle && <p className={styles.subtitle}>{project.subtitle}</p>}
            {project.tags && project.tags.length > 0 && (
              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            )}
          </div>

          {link && (
            <a href={link.url} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
              {link.label}
              <IconArrow />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
