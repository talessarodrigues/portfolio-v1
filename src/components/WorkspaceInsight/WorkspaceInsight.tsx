import styles from './WorkspaceInsight.module.css'
import { ToolsMarquee, toolIcons } from '../ToolsMarquee/ToolsMarquee'

const IconQuote = () => (
  <svg width="48" height="36" viewBox="0 0 48 36" fill="none" aria-hidden="true">
    <path d="M0 36V22.8C0 16.4 1.6 11.2 4.8 7.2C8 3.2 12.8 0.8 19.2 0V6C15.6 6.8 13 8.4 11.4 11C9.8 13.4 9 16.2 9 19.2H18V36H0ZM27 36V22.8C27 16.4 28.6 11.2 31.8 7.2C35 3.2 39.8 0.8 46.2 0V6C42.6 6.8 40 8.4 38.4 11C36.8 13.4 36 16.2 36 19.2H45V36H27Z" fill="#fde047"/>
  </svg>
)

export function WorkspaceInsight() {
  return (
    <section className={styles.section}>
      {/* Card: Ferramentas */}
      <div className={styles.card} data-animate data-delay="0">
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>Ferramentas que uso:</h2>
        </div>
        <div className={styles.marqueeWrapper}>
          <ToolsMarquee />
        </div>
        {/* Mobile grid fallback */}
        <div className={styles.toolsGrid}>
          {toolIcons.map((t, i) => (
            <div
              key={i}
              className={`${styles.toolsGridItem} ${t.whiteBg ? styles.toolsGridItemWhite : ''}`}
              style={{ borderRadius: t.radius }}
            >
              <img src={t.src} alt="" className={styles.toolsGridImg} />
            </div>
          ))}
        </div>
      </div>

      {/* Card: Insight recente */}
      <div className={styles.card} data-animate data-delay="1">
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>Insight recente</h2>
        </div>
        <div className={styles.quoteBody}>
          <IconQuote />
          <p className={styles.quoteText}>
            Design não é só sobre como algo parece, mas sobre como{' '}
            <span className={styles.highlight}>funciona</span>
            {' '}e como faz o usuário{' '}
            <span className={styles.highlight}>se sentir."</span>
          </p>
        </div>
      </div>
    </section>
  )
}
