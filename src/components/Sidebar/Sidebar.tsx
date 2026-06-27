import React from 'react'
import styles from './Sidebar.module.css'

import imgLogo from '../../assets/sidebar/logo.png'
import imgArrowDown from '../../assets/sidebar/arrow-down.png'

// ── Icons ─────────────────────────────────────────────────────

const IconCollapse = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M9 3L4 8L9 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 3L8 8L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconHome = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6.75 19.25H17.25C18.355 19.25 19.25 18.355 19.25 17.25V9.75L12 4.75L4.75 9.75V17.25C4.75 18.355 5.645 19.25 6.75 19.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.75 15.75C9.75 14.645 10.645 13.75 11.75 13.75H12.25C13.355 13.75 14.25 14.645 14.25 15.75V19.25H9.75V15.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconWorkspace = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M10.8333 5H5V10.8333H10.8333V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.9993 5H14.166V10.8333H19.9993V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.9993 14.1667H14.166V20H19.9993V14.1667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.8333 14.1667H5V20H10.8333V14.1667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconProjects = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20 16.5556C20 16.9386 19.842 17.306 19.5607 17.5769C19.2794 17.8478 18.8978 18 18.5 18H6.5C6.10218 18 5.72064 17.8478 5.43934 17.5769C5.15804 17.306 5 16.9386 5 16.5556V6.44444C5 6.06135 5.15804 5.69395 5.43934 5.42307C5.72064 5.15218 6.10218 5 6.5 5H10.25L11.75 7.16667H18.5C18.8978 7.16667 19.2794 7.31885 19.5607 7.58973C19.842 7.86062 20 8.22802 20 8.61111V16.5556Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconExperiences = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 18.7932H20M4 12.0592C4.982 12.1542 6.06 11.7502 6.987 11.3662C7.576 11.1212 8.3 10.8542 8.908 10.3642M8.908 10.3642C9.447 9.92924 9.895 9.32124 10.077 8.39824C10.138 8.08024 10.294 4.76524 9.606 5.01324C9.396 5.08924 9.289 5.96024 9.265 6.10924C9.036 7.51624 8.916 8.93824 8.908 10.3642ZM8.908 10.3642C8.906 11.0432 8.929 11.7212 8.981 12.3962C9.041 13.1582 9.13 14.4762 9.449 15.1572C9.664 15.6152 10.532 14.9302 10.729 14.8022C11.741 14.1472 12.61 13.0912 13.61 12.4232C14.29 11.9692 15.022 13.3862 15.439 13.9772C15.782 14.4622 16.126 15.0082 16.565 15.2962C17.122 15.6632 17.726 15.4392 18.25 15.0562C18.887 14.5922 19.405 13.8512 20 13.2872" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
  </svg>
)

const IconAbout = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 19.25C7 19.25 8.25 16 12.25 16C16.25 16 17.5 19.25 17.5 19.25M14.5 10.25C14.5 11.493 13.493 12.5 12.25 12.5C11.007 12.5 10 11.493 10 10.25C10 9.007 11.007 8 12.25 8C13.493 8 14.5 9.007 14.5 10.25ZM8 19.5H16.5C18.157 19.5 19.5 18.157 19.5 16.5V8C19.5 6.343 18.157 5 16.5 5H8C6.343 5 5 6.343 5 8V16.5C5 18.157 6.343 19.5 8 19.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconSkills = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7.25 16.75L4.75 19.25M9.25 18.75L8.75 19.25M5.25 14.75L4.75 15.25M13.456 6.855C14.932 5.501 16.861 4.75 18.864 4.75H19.25V5.136C19.25 7.139 18.499 9.068 17.145 10.544L10.995 17.248L6.752 13.005L13.456 6.855ZM13 19.25L14.24 14L11 17.25L13 19.25ZM6.75 13L10 9.75L4.75 10.75L6.75 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconProcess = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M19 13.69L13.69 19H6.931C5.865 19 5 18.135 5 17.069V6.931C5 5.865 5.865 5 6.931 5H17.069C18.135 5 19 5.865 19 6.931V13.69ZM13.69 19V14.655C13.69 14.122 14.122 13.69 14.655 13.69H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconContact = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M11.5 19.5H7C5.895 19.5 5 18.605 5 17.5V9L12.25 5L19.5 9V11.5M5 9L11 13.5H13.5L19.5 9M17.25 15L16.607 16.607L15 17.25L16.607 17.893L17.25 19.5L17.893 17.893L19.5 17.25L17.893 16.607L17.25 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconBehance = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M9.05239 6.00105C9.43067 5.99193 9.80842 6.04231 10.1774 6.15111C10.488 6.23922 10.783 6.40319 11.0465 6.63429C11.2899 6.86409 11.4825 7.17304 11.605 7.53012C11.7457 7.96921 11.8136 8.44192 11.8042 8.91739C11.8202 9.43947 11.7176 9.95612 11.5091 10.4029C11.2898 10.825 10.9867 11.162 10.6319 11.3783C11.1134 11.547 11.5328 11.9332 11.8146 12.4677C12.0852 13.034 12.2212 13.6914 12.2056 14.3577C12.2145 14.8889 12.13 15.4157 11.9584 15.898C11.7998 16.3187 11.5676 16.6854 11.2804 16.9687C10.9847 17.2488 10.6519 17.456 10.2987 17.5801C9.93228 17.7118 9.5538 17.7779 9.17367 17.7767H5V6.00105H9.05239ZM8.81157 10.7638C9.10879 10.7797 9.40137 10.6642 9.64145 10.436C9.75643 10.303 9.84587 10.1369 9.90263 9.951C9.95938 9.7651 9.98188 9.56452 9.96832 9.36531C9.97602 9.13264 9.94035 8.90099 9.86437 8.69006C9.79991 8.52211 9.69969 8.38175 9.57561 8.28566C9.44994 8.17988 9.30875 8.10911 9.16096 8.07783C9.00061 8.03747 8.83743 8.01911 8.67412 8.02306H6.89077V10.7743H8.81157V10.7638ZM8.91552 15.7772C9.09527 15.7804 9.27464 15.7552 9.44972 15.7022C9.60971 15.6563 9.76144 15.571 9.89671 15.4508C10.0292 15.3308 10.1363 15.1692 10.208 14.9812C10.2911 14.7413 10.3293 14.4793 10.3194 14.2166C10.3375 13.9772 10.3131 13.7356 10.2481 13.5104C10.1831 13.2851 10.0793 13.0822 9.94464 12.9171C9.65918 12.644 9.30935 12.5087 8.95537 12.5345H6.89077V15.7772H8.91552Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M14.8985 15.7336C15.0469 15.9123 15.2217 16.05 15.4123 16.1382C15.603 16.2264 15.8054 16.2634 16.0073 16.2468C16.3275 16.2573 16.6414 16.1308 16.9007 15.8867C17.1117 15.7085 17.2715 15.4447 17.3552 15.1364H18.8631C18.7025 16.0141 18.3101 16.7909 17.7543 17.3317C17.2211 17.7915 16.591 18.0244 15.9513 17.998C15.4948 18.0058 15.0417 17.8943 14.619 17.6701C14.2366 17.4629 13.8937 17.1498 13.6141 16.7525C13.3356 16.3362 13.1217 15.854 12.9841 15.3322C12.8296 14.749 12.754 14.1355 12.7606 13.5188C12.7578 12.9124 12.8359 12.31 12.9916 11.7384C13.2007 10.9342 13.6005 10.2367 14.1337 9.74605C14.6669 9.2554 15.3061 8.9968 15.9594 9.00736C16.4418 8.99427 16.9187 9.14093 17.3454 9.43352C17.7311 9.70828 18.0638 10.0931 18.3185 10.5589C18.5791 11.0478 18.7658 11.5965 18.8689 12.1758C18.9819 12.7979 19.0222 13.4386 18.9884 14.0763H14.4971C14.4607 14.6754 14.6046 15.2695 14.8985 15.7336ZM16.869 11.2552C16.7433 11.0919 16.5921 10.9655 16.4257 10.8844C16.2592 10.8034 16.0813 10.7697 15.904 10.7855C15.6687 10.7739 15.4351 10.8416 15.226 10.9821C15.0602 11.1007 14.9138 11.2602 14.7951 11.4518C14.69 11.6314 14.6116 11.835 14.5641 12.052C14.5213 12.233 14.4946 12.4198 14.4844 12.6087H17.2663C17.2421 12.1163 17.104 11.6448 16.8701 11.256L16.869 11.2552Z" fill="currentColor"/>
    <path d="M14.1258 6.7873H17.6117V7.94499H14.1258V6.7873Z" fill="currentColor"/>
  </svg>
)

const IconLinkedIn = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M8.178 9.353H5.177V18.382H8.178V9.353ZM6.678 8.12C7.724 8.12 8.376 7.426 8.376 6.56C8.356 5.674 7.724 5 6.698 5C5.671 5 5 5.674 5 6.56C5 7.426 5.651 8.12 6.658 8.12H6.678ZM12.84 18.382V13.34C12.84 13.07 12.86 12.8 12.939 12.608C13.156 12.068 13.65 11.51 14.479 11.51C15.565 11.51 15.999 12.338 15.999 13.552V18.382H19V13.205C19 10.431 17.52 9.141 15.545 9.141C13.953 9.141 13.239 10.016 12.84 10.631V9.353H9.839C9.878 10.2 9.839 18.382 9.839 18.382H12.84Z" fill="currentColor"/>
  </svg>
)

const IconInstagram = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M15.233 4H8.767C6.135 4.002 4.002 6.135 4 8.767V15.233C4.002 17.865 6.135 19.999 8.767 20.001H15.233C17.865 19.998 19.998 17.865 20 15.233V8.767C19.999 6.135 17.865 4.001 15.233 4ZM18.391 15.233C18.391 16.977 16.977 18.391 15.233 18.391H8.767C7.929 18.391 7.126 18.058 6.534 17.466C5.942 16.874 5.609 16.071 5.61 15.233V8.767C5.609 7.929 5.942 7.126 6.534 6.534C7.126 5.942 7.929 5.609 8.767 5.61H15.233C16.977 5.61 18.39 7.023 18.39 8.767L18.391 15.233Z" fill="currentColor"/>
    <path d="M12.0061 7.864C9.72414 7.864 7.86914 9.719 7.86914 12.001C7.86914 14.282 9.72414 16.138 12.0061 16.138C14.2871 16.138 16.1431 14.282 16.1431 12.001C16.1431 9.719 14.2881 7.864 12.0061 7.864ZM12.0061 14.528C10.6101 14.528 9.47814 13.397 9.47814 12.001C9.47814 10.605 10.6091 9.473 12.0051 9.473C13.4011 9.473 14.5331 10.604 14.5331 12C14.5331 13.396 13.4021 14.528 12.0061 14.528ZM16.1521 6.903C16.6991 6.903 17.1421 7.347 17.1421 7.895C17.1421 8.442 16.6981 8.886 16.1511 8.886C15.6041 8.886 15.1601 8.442 15.1601 7.895C15.1601 7.348 15.5301 6.903 16.1521 6.903Z" fill="currentColor"/>
  </svg>
)

// ── Nav data ──────────────────────────────────────────────────

type Page = 'home' | 'workspace' | 'projetos' | 'experiencias' | 'sobre' | 'skills' | 'processos'

const mainLinks: { label: string; icon: () => React.ReactElement; page?: Page }[] = [
  { label: 'Home', icon: IconHome, page: 'home' },
  { label: 'Projetos', icon: IconProjects, page: 'projetos' },
  { label: 'Sobre Mim', icon: IconAbout, page: 'sobre' },
  { label: 'Experiências', icon: IconExperiences, page: 'experiencias' },
]

const professionalLinks: { label: string; icon: () => React.ReactElement; page?: Page }[] = [
  { label: 'Workspace', icon: IconWorkspace, page: 'workspace' },
  { label: 'Skills', icon: IconSkills, page: 'skills' },
  { label: 'Processo', icon: IconProcess, page: 'processos' },
]

const connectLinks = [
  { label: 'Contato', icon: IconContact, href: '#' },
  { label: 'Behance', icon: IconBehance, href: '#' },
  { label: 'LinkedIn', icon: IconLinkedIn, href: 'https://www.linkedin.com/in/talessamayara/' },
  { label: 'Instagram', icon: IconInstagram, href: 'https://www.instagram.com/talessamayara/' },
]

// ── Component ─────────────────────────────────────────────────

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  currentPage?: Page
  onNavigate?: (page: Page) => void
}

export function Sidebar({ isOpen, onClose, currentPage = 'home', onNavigate }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className={styles.overlay} onClick={onClose} aria-hidden="true" />
      )}

      <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
        {/* Logo — fixed at top */}
        <div className={styles.logo}>
          <div className={styles.logoLink}>
            <img src={imgLogo} alt="Logo Talessa" className={styles.logoIcon} />
            <span className={styles.logoName}>Talessa Rodrigues</span>
            <button
              className={styles.collapseButton}
              onClick={onClose}
              aria-label="Fechar menu"
            >
              <IconCollapse />
            </button>
          </div>
        </div>

        {/* Scrollable nav */}
        <div className={styles.scrollable}>
          <nav className={styles.nav}>
            {/* Main links */}
            <div className={styles.navSection}>
              {mainLinks.map(({ label, icon: Icon, page }) => {
                const active = page === currentPage
                return (
                  <a
                    key={label}
                    href="#"
                    className={active ? styles.linkActive : styles.linkInactive}
                    onClick={e => {
                      e.preventDefault()
                      if (page && onNavigate) {
                        onNavigate(page)
                        onClose()
                      }
                    }}
                  >
                    <span className={active ? styles.iconActive : styles.iconInactive}>
                      <Icon />
                    </span>
                    <span>{label}</span>
                  </a>
                )
              })}
            </div>

            {/* Professional */}
            <div className={styles.navSection}>
              <span className={styles.sectionLabel}>PROFISSIONAL</span>
              <div className={styles.sectionLinks}>
                {professionalLinks.map(({ label, icon: Icon, page }) => {
                  const active = page === currentPage
                  return (
                    <a
                      key={label}
                      href="#"
                      className={active ? styles.linkActive : styles.linkInactive}
                      onClick={e => {
                        e.preventDefault()
                        if (page && onNavigate) {
                          onNavigate(page)
                          onClose()
                        }
                      }}
                    >
                      <span className={active ? styles.iconActive : styles.iconInactive}><Icon /></span>
                      <span>{label}</span>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Connect */}
            <div className={styles.navSection}>
              <span className={styles.sectionLabel}>CONECTE-SE COMIGO</span>
              <div className={styles.sectionLinks}>
                {connectLinks.map(({ label, icon: Icon, href }) => (
                  <a key={label} href={href} className={styles.linkInactive}
                    target={href !== '#' ? '_blank' : undefined}
                    rel={href !== '#' ? 'noopener noreferrer' : undefined}>
                    <span className={styles.iconInactive}><Icon /></span>
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>

        {/* Bottom — CV button + copyright */}
        <div className={styles.bottom}>
          <a href="#" className={styles.cvButton}>
            <span>Baixar CV</span>
            <img src={imgArrowDown} alt="" className={styles.cvIcon} />
          </a>
          <p className={styles.copyright}>
            2026@ <br />
            Todos os direitos reservados<br />
            <br />
            Design by Talessa Rodrigues<br />
            Desenvolvido por Felipe Oliveira
          </p>
        </div>
      </aside>
    </>
  )
}
