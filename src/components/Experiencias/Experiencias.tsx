import styles from './Experiencias.module.css'
import { useTranslation } from '../../i18n/LanguageContext'
import logoUniasselvi from '../../assets/certifications/uniasselvi.webp'
import logoEbac from '../../assets/certifications/ebac.webp'
import logoAlura from '../../assets/certifications/alura.webp'
import logoCep from '../../assets/certifications/cep.webp'
import logoSenai from '../../assets/certifications/senai.webp'
import logoWorkshopMark from '../../assets/certifications/workshop-mark.webp'
import logoDevart from '../../assets/certifications/devart.webp'

const IconBriefcase = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 7V5.5C8 4.67 8.67 4 9.5 4h5c.83 0 1.5.67 1.5 1.5V7" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const IconCert = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9 13.5L7.5 20l4.5-2.5 4.5 2.5-1.5-6.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
)

const IconWorkshop = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 19.5V6.5C4 5.4 4.9 4.5 6 4.5h9l5 5v9.5c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M15 4.5V9h4.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
)

const IconChevron = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// Acentos de cor são só estilo visual (não fazem parte do conteúdo
// traduzido) — mantidos aqui, casados por índice com t.experiencias.jobs.
const jobAccents: ('cyan' | 'purple' | 'muted')[] = ['cyan', 'purple', 'purple', 'muted']

// Logo de cada certificação/workshop — não é texto traduzido, casada por
// índice com t.experiencias.certifications/workshops (mesma ordem do Figma).
const certLogos = [
  logoUniasselvi, logoEbac, logoAlura, logoEbac, logoEbac,
  logoEbac, logoEbac, logoEbac, logoCep, logoSenai,
]
const workshopLogos = [
  logoWorkshopMark, logoDevart, logoWorkshopMark, logoWorkshopMark, logoWorkshopMark, logoWorkshopMark,
]

export function Experiencias() {
  const { t } = useTranslation()

  return (
    <section id="experiencias" className={styles.section}>
      <div className={styles.outer}>
      <div className={styles.card}>

        {/* Experiência Profissional e Workshops lado a lado — Formação
            continua em bloco cheio, abaixo dos dois. */}
        <div className={styles.sideBySide}>
          <div className={styles.sideCol}>
            {/* ── Experiência Profissional ── */}
            <div className={styles.blockHeader} data-animate>
              <span className={styles.blockIcon}><IconBriefcase /></span>
              <h2 className={styles.blockTitle}>{t.experiencias.blockProfissional}</h2>
            </div>

            <div className={styles.timeline}>
              {t.experiencias.jobs.map((job, i) => {
                const accent = jobAccents[i] ?? 'muted'
                return (
                  <div key={i} className={styles.timelineRow} data-animate data-delay={(i % 5) + 1} tabIndex={0}>
                    <span className={`${styles.timelineDot} ${styles[`dot_${accent}`]}`} />
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineHead}>
                        <div>
                          <span className={`${styles.jobPeriod} ${styles[`text_${accent}`]}`}>{job.period}</span>
                          <h3 className={styles.jobTitle}>{job.title}</h3>
                        </div>
                        <span className={styles.expandIcon} aria-hidden="true"><IconChevron /></span>
                      </div>
                      <p className={styles.jobTeaser} aria-hidden="true">{job.paragraphs[0]}</p>
                      <div className={styles.jobExpandable}>
                        <div className={styles.jobExpandableInner}>
                          {job.meta && <p className={styles.jobMeta}>{job.meta}</p>}
                          {job.paragraphs.map((p, j) => (
                            <p key={j} className={styles.jobParagraph}>{p}</p>
                          ))}
                          {job.bullets && (
                            <ul className={styles.jobBullets}>
                              {job.bullets.map((b, k) => <li key={k}>{b}</li>)}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className={styles.sideCol}>
            {/* ── Workshops & Cursos ── */}
            <div className={styles.blockHeader} data-animate>
              <span className={styles.blockIcon}><IconWorkshop /></span>
              <h2 className={styles.blockTitle}>{t.experiencias.blockWorkshops}</h2>
            </div>

            <div className={styles.workshopGrid}>
              {t.experiencias.workshops.map((w, i) => (
                <div key={i} className={styles.workshopCard} data-animate data-delay={(i % 5) + 1}>
                  <span className={styles.workshopLogo}><img src={workshopLogos[i]} alt="" /></span>
                  <div className={styles.certText}>
                    <span className={styles.workshopTitle}>{w.title}</span>
                    <span className={styles.certSubtitle}>{w.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Formação & Certificação ── */}
        <div className={styles.blockHeader} data-animate>
          <span className={styles.blockIcon}><IconCert /></span>
          <h2 className={styles.blockTitle}>{t.experiencias.blockFormacao}</h2>
        </div>

        <div className={styles.certGrid}>
          {t.experiencias.certifications.map((c, i) => (
            <div key={i} className={styles.certCard} data-animate data-delay={(i % 5) + 1}>
              <span className={styles.certLogo}><img src={certLogos[i]} alt="" /></span>
              <div className={styles.certText}>
                <span className={styles.certTitle}>{c.title}</span>
                <span className={styles.certSubtitle}>{c.subtitle}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
      </div>
    </section>
  )
}
