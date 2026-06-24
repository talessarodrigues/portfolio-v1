import styles from './FeaturedProjects.module.css'

import imgEccomerce from '../../assets/projetos/img00.png'
import imgSoftwareNR1 from '../../assets/projetos/img01.png'
import imgDashboard from '../../assets/projetos/img02.png'
import imgPortfolio from '../../assets/projetos/img05.png'

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
