import styles from './WorkspaceHero.module.css'

const IconSparkle = () => (
  <svg width="16" height="20" viewBox="0 0 16 20" fill="none" aria-hidden="true">
    <path d="M8 1L9.5 7.5L15 8L9.5 9.5L8 16L6.5 9.5L1 8L6.5 7.5L8 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" fill="none"/>
    <circle cx="13" cy="3" r="1" fill="currentColor" opacity="0.6"/>
    <circle cx="3" cy="15" r="0.8" fill="currentColor" opacity="0.5"/>
  </svg>
)

export function WorkspaceHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.badge} data-animate data-delay="0">
          <span className={styles.badgeIcon}><IconSparkle /></span>
          <span className={styles.badgeText}>Bastidores do produto</span>
        </div>

        <h1 className={styles.heading} data-animate data-delay="1">
          Workspace criativo
        </h1>

        <p className={styles.description} data-animate data-delay="2">
          Um espaço onde pesquisa, colaboração e prototipação se conectam para criar experiências digitais completas.
        </p>
      </div>
    </section>
  )
}
