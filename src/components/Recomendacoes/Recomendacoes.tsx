import { useCallback, useEffect, useRef, useState } from 'react'
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

const IconChevron = ({ dir }: { dir: 'left' | 'right' }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d={dir === 'left' ? 'M15 5L8 12L15 19' : 'M9 5L16 12L9 19'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// Carrossel de depoimentos: cartões lado a lado numa faixa que rola (com
// encaixe em cada cartão), setas nas laterais e pontinhos embaixo.
export function Recomendacoes() {
  const { t } = useTranslation()
  const recs = t.recomendacoes.testimonials.map((r, i) => ({ ...r, name: names[i] }))
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const sync = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const first = track.children[0] as HTMLElement | undefined
    if (!first) return
    const step = first.offsetWidth + parseFloat(getComputedStyle(track).columnGap || '0')
    const end = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2
    // No fim da faixa o último pontinho acende, mesmo com dois cartões à vista.
    setActive(end ? track.children.length - 1 : Math.round(track.scrollLeft / step))
    setAtStart(track.scrollLeft <= 2)
    setAtEnd(end)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const frame = requestAnimationFrame(sync)
    track.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)
    return () => {
      cancelAnimationFrame(frame)
      track.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [sync])

  const goTo = (index: number) => {
    const track = trackRef.current
    const card = track?.children[index] as HTMLElement | undefined
    if (!track || !card) return
    track.scrollTo({ left: card.offsetLeft - (track.children[0] as HTMLElement).offsetLeft, behavior: 'smooth' })
  }
  const step = (dir: 1 | -1) => goTo(Math.min(recs.length - 1, Math.max(0, active + dir)))

  return (
    <section id="comentarios" className={styles.section} data-animate>
      <div className={styles.outer}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.title}>{semViuva(t.recomendacoes.title)}</h2>
            <div className={styles.headerRight}>
              <p className={styles.subtitle}>{t.recomendacoes.subtitle}</p>
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
          </div>

          <div className={styles.carousel}>
            <button type="button" className={styles.arrow} onClick={() => step(-1)} disabled={atStart} aria-label="←">
              <IconChevron dir="left" />
            </button>

            <div ref={trackRef} className={styles.track}>
              {recs.map((rec, i) => (
                <figure key={i} className={styles.card}>
                  <blockquote className={styles.text}>{rec.text}</blockquote>
                  <figcaption className={styles.author}>
                    <span className={styles.avatar} aria-hidden="true">{rec.name.charAt(0)}</span>
                    <span>
                      <span className={styles.name}>{rec.name}</span>
                      <span className={styles.role}>{rec.role}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <button type="button" className={styles.arrow} onClick={() => step(1)} disabled={atEnd} aria-label="→">
              <IconChevron dir="right" />
            </button>
          </div>

          <div className={styles.dots} role="tablist">
            {recs.map((rec, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={rec.name}
                className={styles.dot}
                data-active={i === active}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
