import { useState } from 'react'
import styles from './ProjectsGrid.module.css'
import { allProjects } from '../../data/projects'
import type { ProjectFull } from '../ProjectDetail/ProjectDetail'

interface ProjectsGridProps {
  onSelectProject: (p: ProjectFull) => void
}

const IconLock = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="5" y="11" width="14" height="10" rx="2" stroke="white" strokeWidth="1.6"/>
    <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)

function ProjectCard({ project, onClick }: { project: ProjectFull; onClick: () => void }) {
  const [locked, setLocked] = useState(false)
  const isComingSoon = project.category === 'Em breve'

  const handleClick = () => {
    if (isComingSoon) {
      setLocked(true)
      setTimeout(() => setLocked(false), 2800)
    } else {
      onClick()
    }
  }

  return (
    <div className={styles.card} onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className={`${styles.imageWrap} ${!project.image ? styles.imageBlank : ''}`}>
        {project.image && <img src={project.image} alt={project.title} className={styles.image} />}
        <div className={styles.imageBorder} />
        {!isComingSoon && (
          <div className={styles.imageOverlay}>
            <span className={styles.imageOverlayText}>Ver projeto</span>
          </div>
        )}
        {isComingSoon && locked && (
          <div className={styles.lockedOverlay}>
            <div className={styles.lockedBanner}>
              <IconLock />
              <div className={styles.lockedTexts}>
                <span className={styles.lockedTitle}>UNLOCKED</span>
                <span className={styles.lockedSub}>EM BREVE DISPONÍVEL</span>
              </div>
              <IconLock />
            </div>
          </div>
        )}
      </div>
      <div className={styles.meta}>
        <span className={styles.metaTitle}>{project.title}</span>
        <span className={styles.metaDot}>·</span>
        <span className={styles.metaCategory}>{project.category}</span>
      </div>
    </div>
  )
}

function MarqueeLane({ items, size, reverse }: { items: ProjectFull[]; size: 'large' | 'medium'; reverse?: boolean }) {
  const tripled = [...items, ...items, ...items]
  return (
    <div className={styles.marqueeOuter}>
      <div className={`${styles.marqueeInner} ${size === 'medium' ? styles.marqueeMedium : styles.marqueeLarge} ${reverse ? styles.marqueeReverse : ''}`}>
        {tripled.map((p, i) => (
          <div key={i} className={`${styles.marqueeCard} ${!p.image ? styles.imageBlank : ''}`}>
            {p.image && <img src={p.image} alt={p.title} className={styles.image} />}
            <div className={styles.imageBorder} />
          </div>
        ))}
      </div>
    </div>
  )
}

const withImage = allProjects.filter(p => p.image)
const lane0 = withImage.filter((_, i) => i % 3 === 0)
const lane1 = withImage.filter((_, i) => i % 3 === 1)
const lane2 = withImage.filter((_, i) => i % 3 === 2)

export function ProjectsGrid({ onSelectProject }: ProjectsGridProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container} data-animate>
        <div className={styles.header}>
          <h2 className={styles.headerTitle}>Todos os projetos</h2>
        </div>
        <div className={styles.grid}>
          {allProjects.map((p, i) => (
            <ProjectCard key={i} project={p} onClick={() => onSelectProject(p)} />
          ))}
        </div>
        <div className={styles.carousels}>
          <MarqueeLane items={lane0} size="large" />
          <MarqueeLane items={lane1} size="medium" reverse />
          <MarqueeLane items={lane2} size="large" />
        </div>
      </div>
    </section>
  )
}
