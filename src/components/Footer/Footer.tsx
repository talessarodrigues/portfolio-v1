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

const IconBehance = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M9.05239 6.00105C9.43067 5.99193 9.80842 6.04231 10.1774 6.15111C10.488 6.23922 10.783 6.40319 11.0465 6.63429C11.2899 6.86409 11.4825 7.17304 11.605 7.53012C11.7457 7.96921 11.8136 8.44192 11.8042 8.91739C11.8202 9.43947 11.7176 9.95612 11.5091 10.4029C11.2898 10.825 10.9867 11.162 10.6319 11.3783C11.1134 11.547 11.5328 11.9332 11.8146 12.4677C12.0852 13.034 12.2212 13.6914 12.2056 14.3577C12.2145 14.8889 12.13 15.4157 11.9584 15.898C11.7998 16.3187 11.5676 16.6854 11.2804 16.9687C10.9847 17.2488 10.6519 17.456 10.2987 17.5801C9.93228 17.7118 9.5538 17.7779 9.17367 17.7767H5V6.00105H9.05239ZM8.81157 10.7638C9.10879 10.7797 9.40137 10.6642 9.64145 10.436C9.75643 10.303 9.84587 10.1369 9.90263 9.951C9.95938 9.7651 9.98188 9.56452 9.96832 9.36531C9.97602 9.13264 9.94035 8.90099 9.86437 8.69006C9.79991 8.52211 9.69969 8.38175 9.57561 8.28566C9.44994 8.17988 9.30875 8.10911 9.16096 8.07783C9.00061 8.03747 8.83743 8.01911 8.67412 8.02306H6.89077V10.7743H8.81157V10.7638ZM8.91552 15.7772C9.09527 15.7804 9.27464 15.7552 9.44972 15.7022C9.60971 15.6563 9.76144 15.571 9.89671 15.4508C10.0292 15.3308 10.1363 15.1692 10.208 14.9812C10.2911 14.7413 10.3293 14.4793 10.3194 14.2166C10.3375 13.9772 10.3131 13.7356 10.2481 13.5104C10.1831 13.2851 10.0793 13.0822 9.94464 12.9171C9.65918 12.644 9.30935 12.5087 8.95537 12.5345H6.89077V15.7772H8.91552Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M14.8985 15.7336C15.0469 15.9123 15.2217 16.05 15.4123 16.1382C15.603 16.2264 15.8054 16.2634 16.0073 16.2468C16.3275 16.2573 16.6414 16.1308 16.9007 15.8867C17.1117 15.7085 17.2715 15.4447 17.3552 15.1364H18.8631C18.7025 16.0141 18.3101 16.7909 17.7543 17.3317C17.2211 17.7915 16.591 18.0244 15.9513 17.998C15.4948 18.0058 15.0417 17.8943 14.619 17.6701C14.2366 17.4629 13.8937 17.1498 13.6141 16.7525C13.3356 16.3362 13.1217 15.854 12.9841 15.3322C12.8296 14.749 12.754 14.1355 12.7606 13.5188C12.7578 12.9124 12.8359 12.31 12.9916 11.7384C13.2007 10.9342 13.6005 10.2367 14.1337 9.74605C14.6669 9.2554 15.3061 8.9968 15.9594 9.00736C16.4418 8.99427 16.9187 9.14093 17.3454 9.43352C17.7311 9.70828 18.0638 10.0931 18.3185 10.5589C18.5791 11.0478 18.7658 11.5965 18.8689 12.1758C18.9819 12.7979 19.0222 13.4386 18.9884 14.0763H14.4971C14.4607 14.6754 14.6046 15.2695 14.8985 15.7336ZM16.869 11.2552C16.7433 11.0919 16.5921 10.9655 16.4257 10.8844C16.2592 10.8034 16.0813 10.7697 15.904 10.7855C15.6687 10.7739 15.4351 10.8416 15.226 10.9821C15.0602 11.1007 14.9138 11.2602 14.7951 11.4518C14.69 11.6314 14.6116 11.835 14.5641 12.052C14.5213 12.233 14.4946 12.4198 14.4844 12.6087H17.2663C17.2421 12.1163 17.104 11.6448 16.8701 11.256L16.869 11.2552Z" fill="currentColor"/>
    <path d="M14.1258 6.7873H17.6117V7.94499H14.1258V6.7873Z" fill="currentColor"/>
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
          <a href="https://www.behance.net/talessamayara" target="_blank" rel="noopener noreferrer" aria-label="Behance" className={styles.socialBtn}>
            <IconBehance />
          </a>
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
