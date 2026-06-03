import styles from './MyProcess.module.css'

const IconSearch = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="7" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"/>
    <path d="M16.5 16.5L21 21" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const IconTarget = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="1.5" fill="rgba(255,255,255,0.6)"/>
  </svg>
)

const IconZap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
)

const IconPenTool = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 19L5 12L8 4H16L19 12L12 19Z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="2" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"/>
    <path d="M12 4V10M12 14V19" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const IconSend = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M22 2L11 13" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const steps = [
  { icon: IconSearch, title: 'Descoberta', subtitle: 'Entendendo o problema' },
  { icon: IconTarget, title: 'Definição', subtitle: 'Pesquisa e estratégia' },
  { icon: IconZap, title: 'Ideação', subtitle: 'Soluções e wireframes' },
  { icon: IconPenTool, title: 'Design', subtitle: 'Interface e protótipo' },
  { icon: IconSend, title: 'Entrega', subtitle: 'Handoff e acompanhamento' },
]

export function MyProcess() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>Meu processo</h2>
          <button className={styles.badge}>
            <span className={styles.greenDot} />
            <span className={styles.badgeText}>Ver todas</span>
          </button>
        </div>

        <div className={styles.steps}>
          {steps.map(({ icon: Icon, title, subtitle }) => (
            <div key={title} className={styles.step}>
              <Icon />
              <div className={styles.stepText}>
                <span className={styles.stepTitle}>{title}</span>
                <span className={styles.stepSubtitle}>{subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
