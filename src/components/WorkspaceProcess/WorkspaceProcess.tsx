import styles from './WorkspaceProcess.module.css'

const IconSearch = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const IconTarget = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
  </svg>
)

const IconZap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
)

const IconPenTool = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 19L6.5 13.5L3 21L10.5 17.5L12 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M6.5 13.5L15 5L19 9L10.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
  </svg>
)

const IconSend = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const steps = [
  { icon: IconSearch, title: 'Descoberta',  subtitle: 'Entendendo o problema' },
  { icon: IconTarget, title: 'Definição',   subtitle: 'Pesquisa e estratégia' },
  { icon: IconZap,    title: 'Ideação',     subtitle: 'Soluções e wireframes' },
  { icon: IconPenTool,title: 'Design',      subtitle: 'Interface e protótipo' },
  { icon: IconSend,   title: 'Entrega',     subtitle: 'Handoff e acompanhamento' },
]

export function WorkspaceProcess() {
  return (
    <section className={styles.section}>
      <div className={styles.card} data-animate>
        <div className={styles.header}>
          <h2 className={styles.title}>Meu processo</h2>
          <div className={styles.badge}>
            <span className={styles.dot} />
            <span className={styles.badgeText}>Ver todas</span>
          </div>
        </div>

        <div className={styles.steps}>
          {steps.map(({ icon: Icon, title, subtitle }) => (
            <div key={title} className={styles.step}>
              <span className={styles.stepIcon}><Icon /></span>
              <div className={styles.stepText}>
                <span className={styles.stepTitle}>{title}</span>
                <span className={styles.stepSubtitle}>{subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
