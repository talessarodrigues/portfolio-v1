import { useState } from 'react'
import styles from './FAQ.module.css'
import { useTranslation } from '../../i18n/LanguageContext'
import { CONTACTS } from '../../data/contacts'

const IconStar = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 1L9.5 6.5L15 8L9.5 9.5L8 15L6.5 9.5L1 8L6.5 6.5L8 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
  </svg>
)

const IconMail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export function FAQ() {
  const { t } = useTranslation()
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const renderItem = (faq: { question: string; answer: string }, i: number) => {
    const isOpen = openIdx === i
    return (
      <div key={i} className={styles.item} data-open={isOpen} data-animate data-delay={(i % 5) + 1}>
        <button
          className={styles.row}
          onClick={() => setOpenIdx(isOpen ? null : i)}
          aria-expanded={isOpen}
        >
          <span className={styles.rowLeft}>
            <span className={styles.badge}>
              <IconStar />
              <span className={styles.badgeNum}>{String(i + 1).padStart(2, '0')}</span>
            </span>
            <span className={isOpen ? styles.questionOpen : styles.question}>{faq.question}</span>
          </span>
          <span className={`${styles.toggle} ${isOpen ? styles.toggleOpen : ''}`}>{isOpen ? '−' : '+'}</span>
        </button>
        {isOpen && (
          <div className={styles.answerWrap}>
            <p className={styles.answer}>{faq.answer}</p>
          </div>
        )}
      </div>
    )
  }

  const ctaStrip = (
    <div className={styles.ctaStrip} data-animate>
      <span className={styles.ctaIcon}><IconMail /></span>
      <div className={styles.ctaText}>
        <span className={styles.ctaTitle}>{t.faq.ctaTitle}</span>
        <span className={styles.ctaSubtitle}>{t.faq.ctaSubtitle}</span>
      </div>
      <a href={CONTACTS.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
        <IconArrow />
        {t.faq.ctaBtn}
      </a>
    </div>
  )

  // Divisão fixa em 2 colunas (metade dos itens em cada) — não usamos
  // CSS columns (balanceia por altura) porque abrir uma pergunta muda a
  // altura dela e desequilibra a divisão a cada clique.
  const half = Math.ceil(t.faq.items.length / 2)
  const colLeft = t.faq.items.slice(0, half)
  const colRight = t.faq.items.slice(half)

  return (
    <section id="faq" className={styles.section}>
      <h2 className={styles.title}>
        {t.faq.title} <span className={styles.highlight}>{t.faq.titleHighlight}</span> {t.faq.titleSuffix}
      </h2>

      <div className={styles.list}>
        <div className={styles.column}>
          {colLeft.map((faq, i) => renderItem(faq, i))}
        </div>
        <div className={styles.column}>
          {colRight.map((faq, i) => renderItem(faq, i + half))}
          {ctaStrip}
        </div>
      </div>
    </section>
  )
}
