import { useState } from 'react'
import styles from './Mobile.module.css'
import { MarqueeRow } from '../ToolsMarquee/ToolsMarquee'
import imgEssaSouEu from '../../assets/sobre/essa-sou-eu.webp'
import imgSlot2 from '../../assets/sobre/slot-2.webp'
import imgSlot3 from '../../assets/sobre/slot-3.webp'
import imgSlot4 from '../../assets/sobre/slot-4.webp'
import logoUniasselvi from '../../assets/certifications/uniasselvi.webp'
import logoEbac from '../../assets/certifications/ebac.webp'
import logoAlura from '../../assets/certifications/alura.webp'
import logoCep from '../../assets/certifications/cep.webp'
import logoSenai from '../../assets/certifications/senai.webp'
import logoWorkshopMark from '../../assets/certifications/workshop-mark.webp'
import logoDevart from '../../assets/certifications/devart.webp'
import { useTranslation } from '../../i18n/LanguageContext'
import { semViuva } from '../../i18n/text'
import { LINKS } from './links'
import { IconChevronDown } from './MobileIcons'
import { MobileThemeToggle } from './MobileThemeToggle'

const PHOTOS = [imgEssaSouEu, imgSlot2, imgSlot3, imgSlot4]

// Mesmas logos do desktop (Experiencias.tsx), casadas por índice com
// t.experiencias.certifications / workshops.
const certLogos = [
  logoUniasselvi, logoEbac, logoAlura, logoEbac, logoEbac,
  logoEbac, logoEbac, logoEbac, logoCep, logoSenai,
]
const workshopLogos = [
  logoWorkshopMark, logoDevart, logoWorkshopMark, logoWorkshopMark, logoWorkshopMark, logoWorkshopMark,
]

// Nomes reais das recomendações — casados por índice com
// t.recomendacoes.testimonials (igual ao desktop).
const recoNames = ['Natália Pires', 'Matheus Fuentes', 'Felipe Marzochi', 'Louise Rakel', 'Felipe S. Oliveira', 'Luana Alves']

export function MobileAbout() {
  const { t } = useTranslation()
  const [openJob, setOpenJob] = useState<number | null>(0)

  return (
    <div className={styles.fade}>
      <div className={styles.tabHeader}>
        <div className={styles.tabHeaderRow}>
          <h1 className={styles.tabTitle}>{t.mobile.sobreTitle}</h1>
          <MobileThemeToggle />
        </div>
      </div>

      <div className={styles.section} style={{ padding: 0, marginTop: 18 }}>
        <div className={styles.photoScroller}>
          {PHOTOS.map((src, i) => {
            const caption = t.sobreMim.photos[i]
            return (
              <figure key={i} className={styles.photoCard}>
                <img src={src} alt={caption?.title ?? ''} loading="lazy" />
                {caption && (
                  <figcaption className={styles.photoCaption}>
                    <span className={styles.photoCaptionTitle}>{caption.title}</span>
                    {caption.subtitle && <span className={styles.photoCaptionSub}>{caption.subtitle}</span>}
                  </figcaption>
                )}
              </figure>
            )
          })}
        </div>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle} style={{ marginBottom: 12 }}>{t.sobreMim.title}</h2>
        <div className={styles.aboutBody}>
          {t.sobreMim.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <p className={styles.highlightCard}>{t.sobreMim.highlight}</p>
      </section>

      <section className={styles.toolsWrap}>
        <p className={styles.toolsLabel} style={{ padding: '0 16px' }}>{t.sobreMim.toolsLabel}</p>
        <MarqueeRow seed={4} />
      </section>

      {/* Experiência profissional */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>{t.experiencias.blockProfissional}</h2>
        </div>
        <div className={styles.accordion}>
          {t.experiencias.jobs.map((job, i) => {
            const isOpen = openJob === i
            return (
              <div key={job.title} className={styles.accItem}>
                <button
                  className={styles.accHead}
                  onClick={() => setOpenJob(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span>
                    <span className={styles.accPeriod}>{job.period}</span>
                    <span className={styles.accTitle}>{job.title}</span>
                    {job.meta && <span className={styles.accMeta}>{job.meta}</span>}
                  </span>
                  <span className={`${styles.accToggle} ${isOpen ? styles.accToggleOpen : ''}`}>
                    <IconChevronDown />
                  </span>
                </button>
                {isOpen && (
                  <div className={styles.accBody}>
                    {job.paragraphs.map((p, k) => <p key={k}>{p}</p>)}
                    {job.bullets && job.bullets.length > 0 && (
                      <ul className={styles.accBullets}>
                        {job.bullets.map(b => <li key={b}>{b}</li>)}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Formação & certificação */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>{t.experiencias.blockFormacao}</h2>
        </div>
        <div className={styles.certList}>
          {t.experiencias.certifications.map((cert, i) => (
            <div key={cert.title} className={styles.certRow}>
              <img src={certLogos[i]} alt="" className={styles.certLogo} loading="lazy" />
              <span>
                <span className={styles.certTitle}>{cert.title}</span>
                <span className={styles.certSubtitle}>{cert.subtitle}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Workshops & cursos */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>{t.experiencias.blockWorkshops}</h2>
        </div>
        <div className={styles.certList}>
          {t.experiencias.workshops.map((w, i) => (
            <div key={w.title} className={styles.certRow}>
              <img src={workshopLogos[i]} alt="" className={styles.certLogo} loading="lazy" />
              <span>
                <span className={styles.certTitle}>{w.title}</span>
                <span className={styles.certSubtitle}>{w.subtitle}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Recomendações */}
      <section className={styles.section} style={{ padding: 0 }}>
        <div className={styles.sectionHead} style={{ padding: '0 16px' }}>
          <h2 className={styles.sectionTitle}>{semViuva(t.recomendacoes.title)}</h2>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkedinBtn}>
            {t.recomendacoes.verLinkedin}
          </a>
        </div>
        <div className={styles.recoScroller}>
          {t.recomendacoes.testimonials.map((rec, i) => (
            <article key={i} className={styles.recoCard}>
              <div className={styles.recoTop}>
                <span className={styles.recoAvatar}>{(recoNames[i] ?? '?').charAt(0)}</span>
                <span>
                  <span className={styles.recoName}>{recoNames[i]}</span>
                  <span className={styles.recoRole} style={{ display: 'block' }}>{rec.role}</span>
                </span>
              </div>
              <p className={styles.recoText}>"{rec.text}"</p>
            </article>
          ))}
        </div>
      </section>

    </div>
  )
}
