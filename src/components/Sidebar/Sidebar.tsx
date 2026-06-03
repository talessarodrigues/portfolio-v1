import styles from './Sidebar.module.css'

const imgLogo = 'https://www.figma.com/api/mcp/asset/b24a9ea4-9061-461c-989a-e25d4f6ff2c9'
const imgArrowDown = 'https://www.figma.com/api/mcp/asset/f324d2ba-0acb-46fd-a6ec-1c2e42dafa5c'

// ── Icons ─────────────────────────────────────────────────────

const IconCollapse = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M9 3L4 8L9 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 3L8 8L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconHome = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 9.5L12 3L21 9.5V20C21 20.5523 20.5523 21 20 21H15V15H9V21H4C3.44772 21 3 20.5523 3 20V9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
)

const IconWorkspace = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

const IconProjects = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 7C3 5.89543 3.89543 5 5 5H9.58579C9.851 5 10.1054 5.10536 10.2929 5.29289L11.7071 6.70711C11.8946 6.89464 12.149 7 12.4142 7H19C20.1046 7 21 7.89543 21 9V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V7Z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

const IconExperiences = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <polyline points="3 17 9 11 13 15 21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="17 7 21 7 21 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconAbout = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M4 20C4 17.7909 7.58172 16 12 16C16.4183 16 20 17.7909 20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const IconSkills = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
)

const IconProcess = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3 8H21" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="6.5" cy="5.5" r="0.75" fill="currentColor"/>
    <circle cx="9.5" cy="5.5" r="0.75" fill="currentColor"/>
  </svg>
)

const IconTools = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="3" y="11" width="18" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="3" y="17" width="18" height="2" rx="1" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

const IconContact = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3 8L12 13.5L21 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const IconBehance = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M9.5 8H5V16H9.5C11.433 16 13 14.433 13 12.5C13 11.5 12.5 10.6 11.7 10C12.5 9.4 13 8.5 13 7.5C13 5.567 11.433 4 9.5 4H5V8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M5 8H9.5C10.328 8 11 8.672 11 9.5C11 10.328 10.328 11 9.5 11H5V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M5 11H9.5C10.881 11 12 12.119 12 13.5C12 14.881 10.881 16 9.5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M15 9H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M17.5 7C16.119 7 15 8.119 15 9.5V12.5C15 13.881 16.119 15 17.5 15C18.881 15 20 13.881 20 12.5H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconLinkedIn = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 10V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 17V13C12 11.3431 13.3431 10 15 10C16.6569 10 18 11.3431 18 13V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="8" cy="7.5" r="0.75" fill="currentColor"/>
  </svg>
)

const IconInstagram = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor"/>
  </svg>
)

// ── Nav data ──────────────────────────────────────────────────

const mainLinks = [
  { label: 'Home', icon: IconHome, active: true },
  { label: 'Workspace', icon: IconWorkspace },
  { label: 'Projetos', icon: IconProjects },
  { label: 'Experiências', icon: IconExperiences },
  { label: 'Sobre Mim', icon: IconAbout },
]

const professionalLinks = [
  { label: 'Skills', icon: IconSkills },
  { label: 'Processo', icon: IconProcess },
  { label: 'Ferramentas', icon: IconTools },
]

const connectLinks = [
  { label: 'Contato', icon: IconContact },
  { label: 'Behance', icon: IconBehance },
  { label: 'LinkedIn', icon: IconLinkedIn },
  { label: 'Instagram', icon: IconInstagram },
]

// ── Component ─────────────────────────────────────────────────

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
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
              {mainLinks.map(({ label, icon: Icon, active }) => (
                <a
                  key={label}
                  href="#"
                  className={active ? styles.linkActive : styles.linkInactive}
                >
                  <span className={active ? styles.iconActive : styles.iconInactive}>
                    <Icon />
                  </span>
                  <span>{label}</span>
                </a>
              ))}
            </div>

            {/* Professional */}
            <div className={styles.navSection}>
              <span className={styles.sectionLabel}>PROFISSIONAL</span>
              <div className={styles.sectionLinks}>
                {professionalLinks.map(({ label, icon: Icon }) => (
                  <a key={label} href="#" className={styles.linkInactive}>
                    <span className={styles.iconInactive}><Icon /></span>
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div className={styles.navSection}>
              <span className={styles.sectionLabel}>CONECTE-SE COMIGO</span>
              <div className={styles.sectionLinks}>
                {connectLinks.map(({ label, icon: Icon }) => (
                  <a key={label} href="#" className={styles.linkInactive}>
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
