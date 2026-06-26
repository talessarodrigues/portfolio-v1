import styles from './InfoCards.module.css'
import { toolIcons, MarqueeRow } from '../ToolsMarquee/ToolsMarquee'

import imgAvatarNR1 from '../../assets/info/avatar-nr1.png'
import imgAvatarGabbi from '../../assets/info/avatar-gabbi.png'
import imgAvatarRHD from '../../assets/info/avatar-rhd.png'

// ── About Me icons ────────────────────────────────────────────
const IconBriefcase = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="2" y="6" width="16" height="11" rx="2" stroke="rgba(255,255,255,0.6)" strokeWidth="1.4"/>
    <path d="M7 6V5C7 3.89543 7.89543 3 9 3H11C12.1046 3 13 3.89543 13 5V6" stroke="rgba(255,255,255,0.6)" strokeWidth="1.4"/>
    <path d="M2 10H18" stroke="rgba(255,255,255,0.6)" strokeWidth="1.4"/>
  </svg>
)

const IconFigma = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M7 2H10V8H7C5.34315 8 4 6.65685 4 5C4 3.34315 5.34315 2 7 2Z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.4"/>
    <path d="M10 2H13C14.6569 2 16 3.34315 16 5C16 6.65685 14.6569 8 13 8H10V2Z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.4"/>
    <path d="M10 8H13C14.6569 8 16 9.34315 16 11C16 12.6569 14.6569 14 13 14C11.3431 14 10 12.6569 10 11V8Z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.4"/>
    <path d="M4 11C4 9.34315 5.34315 8 7 8H10V14H7C5.34315 14 4 12.6569 4 11Z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.4"/>
    <circle cx="7" cy="17" r="3" stroke="rgba(255,255,255,0.6)" strokeWidth="1.4"/>
  </svg>
)

const IconUsers = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="8" cy="7" r="3" stroke="rgba(255,255,255,0.6)" strokeWidth="1.4"/>
    <path d="M3 17C3 14.7909 5.23858 13 8 13C10.7614 13 13 14.7909 13 17" stroke="rgba(255,255,255,0.6)" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M13 4C14.6569 4 16 5.34315 16 7C16 8.65685 14.6569 10 13 10" stroke="rgba(255,255,255,0.6)" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M17 17C17 15.2 15.5 13.7 13 13.2" stroke="rgba(255,255,255,0.6)" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
)

const IconChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M7.5 15L12.5 10L7.5 5" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// ── Working on — project data ─────────────────────────────────
const projects = [
  {
    img: imgAvatarNR1,
    title: 'Plataforma NR-1',
    subtitle: 'Sistema completo de gestão',
  },
  {
    img: imgAvatarGabbi,
    title: 'Gabbi Ferretti',
    subtitle: 'Eccomerce BR/EUA',
  },
  {
    img: imgAvatarRHD,
    title: 'RHDPeople',
    subtitle: 'Landing Page',
  },
]

// ── Tool icons — one set of 8, repeated for seamless loop ─────

// ── Component ─────────────────────────────────────────────────
export function InfoCards() {
  return (
    <div className={styles.wrapper}>

      {/* Card 1 — Sobre Mim */}
      <div className={`${styles.card} ${styles.cardAbout}`} data-animate data-delay="1">
        <div className={styles.cardTop}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Sobre Mim</h2>
            <p className={styles.cardDesc}>
              Product Designer apaixonada por criar experiências digitais que fazem sentido para
              pesoas e negócios.
            </p>
          </div>
          <div className={styles.infoList}>
            <div className={styles.infoItem}><IconBriefcase /><span className={styles.infoText}>+2 anos experiência</span></div>
            <div className={styles.infoItem}><IconFigma /><span className={styles.infoText}>Foco em UX/UI Design</span></div>
            <div className={styles.infoItem}><IconUsers /><span className={styles.infoText}>Soluções centradas no usuário</span></div>
          </div>
        </div>
        <div className={styles.cardFooter}>
          <span className={styles.footerText}>Ver perfil completo</span>
          <IconChevronRight />
        </div>
      </div>

      {/* Card 2 — Estatísticas */}
      <div className={`${styles.card} ${styles.cardStats}`} data-animate data-delay="2">
        <div className={styles.cardTop}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Estatísticas</h2>
          </div>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>12+</span>
              <span className={styles.statLabel}>Projetos Entregues</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5</span>
              <span className={styles.statLabel}>Sistemas Completos</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>Landing Pages Desenvolvidas</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Clientes Satisfeitos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 — Trabalhando em */}
      <div className={`${styles.card} ${styles.cardWorking}`} data-animate data-delay="3">
        <div className={styles.cardTop}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Trabalhando em:</h2>
          </div>
          <div className={styles.projectList}>
            {projects.map((p) => (
              <div key={p.title} className={styles.projectRow}>
                {/* 24px container, image rendered at 26px to match Figma overflow */}
                <div className={styles.avatarWrap}>
                  <img src={p.img} alt={p.title} className={styles.avatarImg} />
                </div>
                <div className={styles.projectText}>
                  <span className={styles.projectTitle}>{p.title}</span>
                  <span className={styles.projectSubtitle}>{p.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.cardFooter}>
          <span className={styles.footerText}>Ver todos os projetos</span>
          <IconChevronRight />
        </div>
      </div>

      {/* Card 4 — Ferramentas */}
      <div className={`${styles.card} ${styles.cardTools}`} data-animate data-delay="4">
        <div className={styles.cardTop}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Ferramentas que uso:</h2>
          </div>
          {/* desktop: marquee rows */}
          <div className={styles.toolsRows}>
            <MarqueeRow seed={1} />
            <MarqueeRow seed={2} reverse />
            <MarqueeRow seed={3} />
          </div>
          {/* mobile: static 3×3 grid */}
          <div className={styles.toolsGridMobile}>
            {toolIcons.map((t, i) => (
              <div
                key={i}
                className={`${styles.toolsGridItem} ${t.whiteBg ? styles.toolsGridItemWhite : ''}`}
                style={{ borderRadius: t.radius }}
              >
                <img src={t.src} alt="" className={styles.toolIconImg} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
