import styles from './ProjectsGrid.module.css'
import { allProjects } from '../../data/projects'
import type { Project } from '../../data/projects'
import type { ProjectFilter } from '../ProjectsHero/ProjectsHero'
import { useTranslation } from '../../i18n/LanguageContext'
import type { Dictionary } from '../../i18n/types'
import { LikeButton } from '../LikeButton/LikeButton'

interface ProjectsGridProps {
  activeFilter: ProjectFilter
  onSelectProject: (p: Project) => void
}

function ProjectCard({ project, text, tall, likeLabel, onClick }: { project: Project; text: Dictionary['projects'][string] | undefined; tall?: boolean; likeLabel: string; onClick?: () => void }) {
  return (
    <div className={`${styles.card} ${onClick ? styles.clickable : ''}`} onClick={onClick}>
      <div className={`${styles.imageWrap} ${tall ? styles.tall : ''} ${!project.image ? styles.imageBlank : ''}`}>
        {project.image && <img src={project.image} alt={project.title} className={styles.image} />}
      </div>
      <div className={styles.cardHead}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <LikeButton projectKey={project.title} label={likeLabel} />
      </div>
      {text?.description && <p className={styles.cardDesc}>{text.description}</p>}
      {text?.tags && text.tags.length > 0 && (
        <div className={styles.tags}>
          {text.tags.slice(0, 2).map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      )}
    </div>
  )
}

export function ProjectsGrid({ activeFilter, onSelectProject }: ProjectsGridProps) {
  const { t } = useTranslation()
  const filtered = activeFilter === 'all'
    ? allProjects
    : allProjects.filter(p => p.categoryKey === activeFilter)

  // Mesmo tratamento do bloco de destaques da home: masonry de 3 colunas
  // com a do meio começando mais abaixo e imagens de alturas alternadas,
  // pro conjunto respirar em vez de virar uma tabela.
  // Multi-coluna preenche coluna a coluna, então o topo da do meio é o
  // item que abre o segundo terço da lista.
  const middleColumnTop = Math.ceil(filtered.length / 3)

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {filtered.map((p, i) => (
          <div
            key={p.title + i}
            className={`${styles.item} ${i === middleColumnTop ? styles.offsetTop : ''}`}
            data-animate
            data-delay={(i % 5) + 1}
          >
            <ProjectCard
              project={p}
              text={t.projects[p.title]}
              tall={i % 5 === 1 || i % 5 === 3}
              likeLabel={t.likes.curtir}
              onClick={p.detailSlug ? () => onSelectProject(p) : undefined}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
