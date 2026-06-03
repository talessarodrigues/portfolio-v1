import styles from './FeaturedProjects.module.css'

const imgEccomerce = 'https://www.figma.com/api/mcp/asset/6e26a836-52b4-4c6b-9d97-44399b4058bb'
const imgSoftwareNR1 = 'https://www.figma.com/api/mcp/asset/687fa501-2f07-48f9-988c-4e0b55ecec07'
const imgDashboard = 'https://www.figma.com/api/mcp/asset/5e46ff25-2383-45c5-81d8-d0da72964dad'
const imgPortfolio = 'https://www.figma.com/api/mcp/asset/03782ce2-2037-4faf-a3a1-49c825f83916'

const projects = [
  { image: imgEccomerce, title: 'Eccomerce Website', status: 'Em breve' },
  { image: imgSoftwareNR1, title: 'Software NR-1', status: 'Em breve' },
  { image: imgDashboard, title: 'Dashboard + Landing Page', status: 'Em breve' },
  { image: imgPortfolio, title: 'Portfólio Full Stack', status: 'Em breve' },
]

export function FeaturedProjects() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.header} data-animate>
          <h2 className={styles.title}>Projetos em destaque</h2>
          <p className={styles.subtitle}>Produtos criativos que serão postados em breve.</p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <div key={project.title} className={styles.projectItem} data-animate data-delay={i + 1}>
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
