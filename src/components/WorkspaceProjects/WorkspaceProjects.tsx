import styles from './WorkspaceProjects.module.css'

const imgDashboardRH = 'https://www.figma.com/api/mcp/asset/e5b6500a-d1e0-4d67-90ca-9f179cdebde3'
const imgPlataformaNR1 = 'https://www.figma.com/api/mcp/asset/fa6e0ada-cb1a-45c7-8ada-a369bdec0bda'

const IconArrow = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M4.5 13.5L13.5 4.5M13.5 4.5H6.75M13.5 4.5V11.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

interface ProjectCardProps {
  title: string
  subtitle: string
  description: string
  image: string
  imageScale: string
  imageOffset: string
  statusLabel: string
  statusColor: 'purple' | 'green'
  progress: number
  animateDelay: number
}

function ProjectCard({
  title,
  subtitle,
  description,
  image,
  imageScale,
  imageOffset,
  statusLabel,
  statusColor,
  progress,
  animateDelay,
}: ProjectCardProps) {
  return (
    <article className={styles.card} data-animate data-delay={animateDelay}>
      {/* Dark backdrop */}
      <div className={styles.cardBg} aria-hidden="true" />

      {/* Preview image (right side, fading mask) */}
      <div className={styles.preview} aria-hidden="true">
        <div className={styles.previewImg} style={{ backgroundImage: `url(${image})`, backgroundSize: imageScale, backgroundPosition: imageOffset }} />
        <div className={styles.previewFade} />
      </div>

      {/* Inner light border */}
      <div className={styles.innerBorder} aria-hidden="true" />

      {/* Top content */}
      <div className={styles.content}>
        <div className={`${styles.badge} ${statusColor === 'purple' ? styles.badgePurple : styles.badgeGreen}`}>
          <span className={`${styles.dot} ${statusColor === 'purple' ? styles.dotPurple : styles.dotGreen}`} />
          <span className={styles.badgeText}>{statusLabel}</span>
        </div>

        <div className={styles.info}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <p className={styles.projectSubtitle}>{subtitle}</p>
        </div>

        <p className={styles.description}>{description}</p>
      </div>

      {/* Footer: progress */}
      <div className={styles.footer}>
        <div className={styles.footerTop}>
          <span className={`${styles.progressLabel} ${statusColor === 'purple' ? styles.progressLabelPurple : styles.progressLabelGreen}`}>
            {progress}% concluído
          </span>
          <button className={styles.arrowBtn} aria-label="Ver detalhes">
            <IconArrow />
          </button>
        </div>
        <div className={styles.progressTrack}>
          <div
            className={`${styles.progressFill} ${statusColor === 'purple' ? styles.progressFillPurple : styles.progressFillGreen}`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </article>
  )
}

export function WorkspaceProjects() {
  return (
    <section className={styles.section}>
      <ProjectCard
        title="Dashboard RH"
        subtitle="Painel administrativo"
        description="Sistema completo para gestão de pessoas e processos internos."
        image={imgDashboardRH}
        imageScale="cover"
        imageOffset="center top"
        statusLabel="Em andamento"
        statusColor="purple"
        progress={60}
        animateDelay={0}
      />
      <ProjectCard
        title="Plataforma NR-1"
        subtitle="Sistema de Gestão"
        description="Plataforma completa para gestão de documentos e conformidade."
        image={imgPlataformaNR1}
        imageScale="cover"
        imageOffset="center top"
        statusLabel="Em revisão"
        statusColor="green"
        progress={90}
        animateDelay={1}
      />
    </section>
  )
}
