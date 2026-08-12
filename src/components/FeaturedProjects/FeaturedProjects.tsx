import styles from './FeaturedProjects.module.css'
import { allProjects } from '../../data/projects'
import type { Project } from '../../data/projects'
import { useTranslation } from '../../i18n/LanguageContext'

const featuredTitles = ['Redesign Natva', 'Resident Evil', 'Drakorys Arcane', 'Astera Data Bank', 'Iron Bank', 'Orchard Treasure']

interface FeaturedProjectsProps {
  onViewAll: () => void
  onSelectProject: (p: Project) => void
}

const IconHeart = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 20.5s-7.5-4.6-10-9.3C.5 7.8 2.3 4.5 5.7 4.5c2 0 3.6 1.1 4.3 2.7C10.7 5.6 12.3 4.5 14.3 4.5c3.4 0 5.2 3.3 3.7 6.7-2.5 4.7-10 9.3-10 9.3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
)

const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export function FeaturedProjects({ onViewAll, onSelectProject }: FeaturedProjectsProps) {
  const { t } = useTranslation()
  const featured = featuredTitles
    .map(title => allProjects.find(p => p.title === title))
    .filter(Boolean) as Project[]

  return (
    <section id="projetos" className={styles.wrapper}>
      <div className={styles.header} data-animate>
        <div className={styles.headerTop}>
          <h2 className={styles.title}>{t.featuredProjects.title} <span className={styles.highlight}>{t.featuredProjects.titleHighlight}</span> {t.featuredProjects.titleSuffix}</h2>
          <div className={styles.headerDecor}>
            <span className={styles.waveform} aria-hidden="true">
              {Array.from({ length: 16 }).map((_, i) => (
                <span key={i} className={styles.waveformBar} style={{ height: `${4 + ((i * 5) % 14)}px` }} />
              ))}
            </span>
            <button className={styles.heartBtn} aria-hidden="true" tabIndex={-1}><IconHeart /></button>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <p className={styles.subtitle}>{t.featuredProjects.subtitle}</p>
          <button className={styles.viewAllBtn} onClick={onViewAll}>
            <IconArrow />
            {t.featuredProjects.viewAll}
          </button>
        </div>
      </div>

      <div className={styles.grid}>
        {featured.map((project, i) => {
          const text = t.projects[project.title]
          return (
            <div
              key={project.title}
              className={`${styles.projectItem} ${i === 2 ? styles.offsetTop : ''} ${project.detailSlug ? styles.clickable : ''}`}
              data-animate
              data-delay={(i % 3) + 1}
              onClick={project.detailSlug ? () => onSelectProject(project) : undefined}
            >
              <div className={`${styles.imageWrapper} ${i === 2 || i === 3 ? styles.tall : ''}`}>
                <img src={project.image} alt={project.title} className={styles.image} />
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              {text?.description && <p className={styles.projectDesc}>{text.description}</p>}
              {text?.tags && text.tags.length > 0 && (
                <div className={styles.tags}>
                  {text.tags.slice(0, 3).map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
