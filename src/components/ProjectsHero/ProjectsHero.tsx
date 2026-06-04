import { useEffect, useState } from 'react'
import styles from './ProjectsHero.module.css'

const IconSparkle = () => (
  <svg width="16" height="20" viewBox="0 0 16 20" fill="none" aria-hidden="true">
    <path d="M8 1L9.5 7.5L15 8L9.5 9.5L8 16L6.5 9.5L1 8L6.5 7.5L8 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" fill="none"/>
    <circle cx="13" cy="3" r="1" fill="currentColor" opacity="0.6"/>
    <circle cx="3" cy="15" r="0.8" fill="currentColor" opacity="0.5"/>
  </svg>
)

const filters = ['All', 'Em breve', 'Website', 'Apps', 'Dashboards', 'Ecommerce', 'Logotipo']

export function ProjectsHero() {
  const [showCursor, setShowCursor] = useState(true)
  const [activeFilter, setActiveFilter] = useState('All')

  useEffect(() => {
    const timer = setInterval(() => setShowCursor(v => !v), 530)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        {/* Badge */}
        <div className={styles.topBlock} data-animate data-delay="0">
          <div className={styles.badge}>
            <span className={styles.badgeIcon}><IconSparkle /></span>
            <span className={styles.badgeText}>Projetos selecionados</span>
          </div>

          {/* Heading */}
          <div className={styles.headings}>
            <h1 className={styles.h1}>Projetando produtos que</h1>
            <div className={styles.h1Gradient}>
              Moldam o futuro
              <span className={showCursor ? styles.cursor : styles.cursorHidden}>|</span>
            </div>
          </div>

          {/* Description */}
          <p className={styles.description}>
            Cada projeto representa uma combinação entre estratégia, experiência do usuário e soluções pensadas para pessoas reais.
          </p>
        </div>

        {/* Filter tabs */}
        <div className={styles.filters} data-animate data-delay="1">
          {filters.map(f => (
            <button
              key={f}
              className={`${styles.filterBtn} ${activeFilter === f ? styles.filterActive : styles.filterDefault}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
