import styles from './FeaturedProjects.module.css'
import { allProjects } from '../../data/projects'
import type { ProjectFull } from '../ProjectDetail/ProjectDetail'

const featuredTitles = ['Design System', 'Conecta 360º', 'Redesign Natva', 'RH Recruiter']

interface FeaturedProjectsProps {
  onSelectProject: (p: ProjectFull) => void
  onViewAll: () => void
}

export function FeaturedProjects({ onSelectProject, onViewAll }: FeaturedProjectsProps) {
  const featured = featuredTitles
    .map(title => allProjects.find(p => p.title === title))
    .filter(Boolean) as ProjectFull[]

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.header} data-animate>
          <h2 className={styles.title}>Projetos em destaque</h2>
          <p className={styles.subtitle}>Seleção de projetos reais com foco em UX, produto e resultado.</p>
        </div>

        <div className={styles.grid}>
          {featured.map((project, i) => (
            <div
              key={project.title}
              className={styles.projectItem}
              data-animate
              data-delay={i + 1}
              onClick={() => onSelectProject(project)}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} className={styles.image} />
                <div className={styles.imageBorder} />
                <div className={styles.imageOverlay}>
                  <span className={styles.imageOverlayText}>Ver projeto</span>
                </div>
              </div>
              <div className={styles.meta}>
                <span className={styles.metaTitle}>{project.title}</span>
                <span className={styles.metaDot}>·</span>
                <span className={styles.metaStatus}>{project.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer} onClick={onViewAll} style={{ cursor: 'pointer' }}>
          <span className={styles.footerText}>Veja mais projetos</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}
