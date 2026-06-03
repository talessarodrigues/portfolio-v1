import styles from './InfoCards.module.css'

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
    img: 'https://www.figma.com/api/mcp/asset/e538277a-042b-4752-9677-36b276d3314c',
    title: 'Plataforma NR-1',
    subtitle: 'Sistema completo de gestão',
  },
  {
    img: 'https://www.figma.com/api/mcp/asset/29de9d8a-8e9f-40b0-8dae-4caef43f271b',
    title: 'Gabbi Ferretti',
    subtitle: 'Eccomerce BR/EUA',
  },
  {
    img: 'https://www.figma.com/api/mcp/asset/dad522ea-afab-4999-ac64-413abddc98be',
    title: 'RHDPeople',
    subtitle: 'Landing Page',
  },
]

// ── Tool icons — one set of 8, repeated for seamless loop ─────
// TODO: replace with local assets in src/assets/tools/
const toolIcons = [
  { src: 'https://www.figma.com/api/mcp/asset/034d62aa-9dff-401b-832c-212defd480f4', radius: 16,  whiteBg: false },
  { src: 'https://www.figma.com/api/mcp/asset/1b300c65-580c-4a94-8106-86b57d4fd4dc', radius: 16,  whiteBg: false },
  { src: 'https://www.figma.com/api/mcp/asset/79fc079c-cef3-4b90-ab09-b7321d17f9b6', radius: 22,  whiteBg: false },
  { src: 'https://www.figma.com/api/mcp/asset/5349c451-4a35-472b-a9d2-ec3136599248', radius: 16,  whiteBg: false },
  { src: 'https://www.figma.com/api/mcp/asset/5b463e39-4aa6-4ce2-ae86-dd9105bdf06a', radius: 16,  whiteBg: false },
  { src: 'https://www.figma.com/api/mcp/asset/03cc9026-393e-47c4-8e75-31cc0d5458bc', radius: 16,  whiteBg: false },
  { src: 'https://www.figma.com/api/mcp/asset/cebbe88f-8502-4761-b645-f01d9bb456fa', radius: 16,  whiteBg: true  },
  { src: 'https://www.figma.com/api/mcp/asset/b7c92181-a43a-4cb6-bfaf-b8f04f996b89', radius: 16,  whiteBg: false },
]

// ── Shuffle with a fixed numeric seed so each row gets a stable
//    but different order (no re-render flicker, pure JS) ───────
function seededShuffle<T>(arr: T[], seed: number): T[] {
  const out = [...arr]
  let s = seed
  for (let i = out.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    const j = Math.abs(s) % (i + 1)
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

// ── MarqueeRow ────────────────────────────────────────────────
function MarqueeRow({ reverse, seed }: { reverse?: boolean; seed: number }) {
  // each row gets its own shuffled order; triple for seamless loop
  const shuffled = seededShuffle(toolIcons, seed)
  const items = [...shuffled, ...shuffled, ...shuffled]
  return (
    <div className={styles.marqueeOuter}>
      <div className={[styles.marqueeInner, reverse ? styles.marqueeReverse : ''].join(' ')}>
        {items.map((t, i) => (
          <div
            key={i}
            className={styles.toolIcon}
            style={{
              borderRadius: t.radius,
              background: t.whiteBg ? '#fff' : undefined,
              padding: t.whiteBg ? '10px' : undefined,
            }}
          >
            <img src={t.src} alt="" className={styles.toolIconImg} />
          </div>
        ))}
      </div>
      <div className={styles.fadeLeft} />
      <div className={styles.fadeRight} />
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────
export function InfoCards() {
  return (
    <div className={styles.wrapper}>

      {/* Card 1 — Sobre Mim */}
      <div className={`${styles.card} ${styles.cardAbout}`}>
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
      <div className={`${styles.card} ${styles.cardStats}`}>
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
      <div className={`${styles.card} ${styles.cardWorking}`}>
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
      <div className={`${styles.card} ${styles.cardTools}`}>
        <div className={styles.cardTop}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Ferramentas que uso:</h2>
          </div>
          <div className={styles.toolsRows}>
            <MarqueeRow seed={1} />
            <MarqueeRow seed={2} reverse />
            <MarqueeRow seed={3} />
          </div>
        </div>
      </div>

    </div>
  )
}
