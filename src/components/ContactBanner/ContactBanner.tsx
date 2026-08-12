import styles from './ContactBanner.module.css'
import imgIllustration from '../../assets/illustration/hero-bg.png'
import { useTranslation } from '../../i18n/LanguageContext'
import { CONTACTS } from '../../data/contacts'

const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export function ContactBanner() {
  const { t } = useTranslation()
  return (
    <section id="cta-final" className={styles.wrapper}>
      <div className={styles.card} data-animate>
        <img src={imgIllustration} alt="" className={styles.illustration} aria-hidden="true" />

        <div className={styles.content}>
          <span className={styles.eyebrow}>{t.contactBanner.eyebrow}</span>
          <h2 className={styles.title}>
            {t.contactBanner.title} <span className={styles.highlight}>{t.contactBanner.titleHighlight}</span>
          </h2>
          <p className={styles.subtitle}>
            {t.contactBanner.subtitle}
          </p>
          <a href={CONTACTS.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
            <IconArrow />
            {t.contactBanner.cta}
          </a>
          <p className={styles.availability}>
            {t.contactBanner.availability} <span className={styles.availabilityLink}>{t.contactBanner.availabilityLink}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
