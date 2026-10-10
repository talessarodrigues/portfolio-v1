import { useEffect, useRef, useState } from 'react'
import styles from './FAQ.module.css'
import { useTranslation } from '../../i18n/LanguageContext'
import { CONTACTS } from '../../data/contacts'

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

// Cada palavra do título acende conforme a seção entra na tela.
function useWordReveal(total: number) {
  const ref = useRef<HTMLElement>(null)
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [lit, setLit] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el || reduced) return
    let frame = 0
    const update = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const p = (window.innerHeight * 0.8 - rect.top) / (rect.height * 0.45)
      setLit(Math.round(Math.min(1, Math.max(0, p)) * total))
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [total, reduced])
  return { ref, lit: reduced ? total : lit }
}

export function FAQ() {
  const { t } = useTranslation()
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  // Título em palavras soltas; as do trecho em destaque levam a cor do site.
  const words = [
    ...t.faq.title.split(' ').map(w => ({ w, accent: false })),
    ...t.faq.titleHighlight.split(' ').map(w => ({ w, accent: true })),
    ...t.faq.titleSuffix.split(' ').map(w => ({ w, accent: false })),
  ].filter(x => x.w)
  const { ref, lit } = useWordReveal(words.length)

  return (
    <section id="faq" ref={ref} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className={styles.eyebrow}>FAQ</span>
          <h2 className={styles.title} aria-label={`${t.faq.title} ${t.faq.titleHighlight} ${t.faq.titleSuffix}`}>
            {words.map((x, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`${styles.word} ${x.accent ? styles.wordAccent : ''}`}
                data-lit={i < lit}
              >
                {x.w}{' '}
              </span>
            ))}
          </h2>
        </div>

        <div className={styles.list}>
          {t.faq.items.map((faq, i) => {
            const isOpen = openIdx === i
            return (
              <div key={i} className={styles.item} data-open={isOpen} data-animate data-delay={(i % 5) + 1}>
                <button
                  type="button"
                  className={styles.row}
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className={styles.question}>{faq.question}</span>
                  <span className={styles.toggle} aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      <path className={styles.toggleBar} d="M8 3V13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div id={`faq-answer-${i}`} className={styles.answerWrap} role="region" inert={!isOpen}>
                  <div className={styles.answerInner}>
                    <p className={styles.answer}>{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}

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
        </div>
      </div>
    </section>
  )
}
