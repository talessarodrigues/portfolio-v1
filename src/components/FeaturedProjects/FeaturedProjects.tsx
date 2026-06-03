import styles from './FeaturedProjects.module.css'

// TODO: replace these with local assets in src/assets/projects/
const imgAppFitness = 'https://www.figma.com/api/mcp/asset/328bebc2-4933-460d-a5da-1a1f473d22ed'
const imgEccomerce = 'https://www.figma.com/api/mcp/asset/780906c8-8337-4565-aa50-6268b1500fbc'
const imgSoftwareNR1 = 'https://www.figma.com/api/mcp/asset/e5d7a65b-1933-4e3f-8e27-f4d1fa07f1b8'
const imgDashboard = 'https://www.figma.com/api/mcp/asset/a3683e5e-1eb3-4ca5-af66-c412e79b3839'

const projects = [
  { image: imgAppFitness, title: 'App Fitness', status: 'Em breve' },
  { image: imgEccomerce, title: 'Eccomerce', status: 'Em breve' },
  { image: imgSoftwareNR1, title: 'Software NR-1', status: 'Em breve' },
  { image: imgDashboard, title: 'Dashboard + Landing Page', status: 'Em breve' },
]

export function FeaturedProjects() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>Projetos em destaque</h2>
          <p className={styles.subtitle}>Produtos criativos que serão postados em breve.</p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.title} className={styles.projectItem}>
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} className={styles.image} />
                <div className={styles.imageBorder} />
              </div>
              <div className={styles.meta}>
                <span className={styles.metaTitle}>{project.title}</span>
                <span className={styles.metaDot}>·</span>
                <span className={styles.metaStatus}>{project.status}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <span className={styles.footerText}>Veja mais projetos</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}
