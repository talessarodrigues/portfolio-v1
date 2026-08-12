import styles from './Recomendacoes.module.css'
import { useTranslation } from '../../i18n/LanguageContext'
import { semViuva } from '../../i18n/text'

// Nomes reais das pessoas — não fazem parte do texto traduzido,
// casados por índice com t.recomendacoes.testimonials.
const names = ['Natália Pires', 'Matheus Fuentes', 'Felipe Marzochi', 'Louise Rakel', 'Felipe S. Oliveira', 'Luana Alves']

const IconLinkedIn = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

export function Recomendacoes() {
  const { t } = useTranslation()
  const recs = t.recomendacoes.testimonials.map((r, i) => ({ ...r, name: names[i] }))
  const doubled = [...recs, ...recs]

  return (
    <section id="comentarios" className={styles.section} data-animate>
      <div className={styles.outer}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h2 className={styles.title}>{semViuva(t.recomendacoes.title)}</h2>
            <p className={styles.subtitle}>{t.recomendacoes.subtitle}</p>
          </div>
          <a
            href="https://www.linkedin.com/in/talessamayara/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedinBtn}
          >
            {t.recomendacoes.verLinkedin}
            <IconLinkedIn />
          </a>
        </div>

        <div className={styles.marqueeOuter}>
          <div className={styles.marqueeInner}>
            {doubled.map((rec, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.avatar}>{rec.name.charAt(0)}</div>
                  <div>
                    <div className={styles.name}>{rec.name}</div>
                    <div className={styles.role}>{rec.role}</div>
                  </div>
                </div>
                <p className={styles.text}>"{rec.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
