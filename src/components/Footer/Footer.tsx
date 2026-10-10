import styles from './Footer.module.css'
import imgLogo from '../../assets/header/logo-light.svg'
import { useTranslation } from '../../i18n/LanguageContext'
import { CONTACTS } from '../../data/contacts'

interface FooterProps {
  onNavigateSection: (id: string) => void
  onNavigateProjectsPage: () => void
  onNavigateHome: () => void
}

const IconArrow = () => (
  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconWhatsApp = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.148.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M3.6 20.4l1.156-4.22a8.4 8.4 0 1 1 3.253 3.19L3.6 20.4Zm5.11-5.687-.318-.5a6.9 6.9 0 1 1 2.114 2.081l-.502-.303-2.462.646.668-2.424Z" fill="currentColor"/>
  </svg>
)

const IconLinkedIn = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M8.178 9.353H5.177V18.382H8.178V9.353ZM6.678 8.12C7.724 8.12 8.376 7.426 8.376 6.56C8.356 5.674 7.724 5 6.698 5C5.671 5 5 5.674 5 6.56C5 7.426 5.651 8.12 6.658 8.12H6.678ZM12.84 18.382V13.34C12.84 13.07 12.86 12.8 12.939 12.608C13.156 12.068 13.65 11.51 14.479 11.51C15.565 11.51 15.999 12.338 15.999 13.552V18.382H19V13.205C19 10.431 17.52 9.141 15.545 9.141C13.953 9.141 13.239 10.016 12.84 10.631V9.353H9.839C9.878 10.2 9.839 18.382 9.839 18.382H12.84Z" fill="currentColor"/>
  </svg>
)

export function Footer({ onNavigateSection, onNavigateProjectsPage, onNavigateHome }: FooterProps) {
  const { t } = useTranslation()
  const NAV_ITEMS: { label: string; target: { type: 'section'; id: string } | { type: 'projects' } }[] = [
    { label: t.nav.sobre, target: { type: 'section', id: 'sobre-mim' } },
    { label: t.nav.cases, target: { type: 'projects' } },
    { label: t.nav.servicos, target: { type: 'section', id: 'faq' } },
  ]

  const go = (target: (typeof NAV_ITEMS)[number]['target']) => {
    if (target.type === 'section') onNavigateSection(target.id)
    else onNavigateProjectsPage()
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.bar}>
        <button className={styles.logoBtn} onClick={onNavigateHome} aria-label={t.header.irParaHome}>
          <img src={imgLogo} alt="Rodrigues Design" className={styles.logoImg} />
        </button>

        <a href={CONTACTS.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
          <IconArrow />
          {t.footer.entreEmContato}
        </a>

        <nav className={styles.nav}>
          {NAV_ITEMS.map(item => (
            <button key={item.label} className={styles.navLink} onClick={() => go(item.target)}>
              {item.label}
            </button>
          ))}
        </nav>

        <div className={styles.social}>
          <a href={CONTACTS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.socialBtn}>
            <IconWhatsApp />
          </a>
          <a href="https://www.linkedin.com/in/talessamayara/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialBtn}>
            <IconLinkedIn />
          </a>
        </div>
      </div>

      <div className={styles.copyrightBar}>
        <p className={styles.copyright}>{t.footer.copyright}</p>
      </div>
    </footer>
  )
}
