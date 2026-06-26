import { useEffect, useRef, useState } from 'react'
import styles from './Skills.module.css'
import { ToolsMarquee } from '../ToolsMarquee/ToolsMarquee'

import imgSparkle from '../../assets/exp/sparkle.png'
import imgArrowOut from '../../assets/exp/arrow-out.png'

// ── Icons ─────────────────────────────────────────────────────
const IconPuzzle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M14.5 4.5a1.5 1.5 0 1 0-3 0V6H8a1 1 0 0 0-1 1v3H5.5a1.5 1.5 0 1 0 0 3H7v4a1 1 0 0 0 1 1h4v-1.5a1.5 1.5 0 1 1 3 0V19h3a1 1 0 0 0 1-1v-4h1.5a1.5 1.5 0 1 0 0-3H20V7a1 1 0 0 0-1-1h-4.5V4.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
  </svg>
)
const IconCube = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M4 7.5l8 4.5 8-4.5M12 12v9" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
  </svg>
)
const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M20 20l-4.5-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)
const IconGrid = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
    <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
    <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
    <rect x="13" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
)
const IconBolt = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
  </svg>
)
const IconAccessibility = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="4.5" r="1.6" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M4 8h16M12 8v6m0 0l-3.5 6m3.5-6l3.5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const IconFrame = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 8h18M3 16h18M8 3v18M16 3v18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)
const IconFlow = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="4" width="7" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
    <rect x="14" y="15" width="7" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M6.5 9v4a2 2 0 0 0 2 2h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
// ── Data ──────────────────────────────────────────────────────
type Card = {
  icon: () => React.ReactElement
  color: string
  title: string
  description: string
  percent: number
  tags: string[]
}

const cards: Card[] = [
  { icon: IconPuzzle, color: '#a78bfa', title: 'UX/UI Design',
    description: 'Criação de interfaces intuitivas, atraentes e funcionais focadas na melhor experiência.',
    percent: 95, tags: ['Interfaces', 'Design Visual', 'Usabilidade'] },
  { icon: IconCube, color: '#fde047', title: 'Product Design',
    description: 'Visão de produto completa, do problema à solução com foco em valor e impacto.',
    percent: 92, tags: ['Estratégia', 'Roadmap', 'MVP'] },
  { icon: IconSearch, color: '#4ade80', title: 'UX Research',
    description: 'Pesquisa com usuários, análise de comportamento e descoberta de insights valiosos.',
    percent: 88, tags: ['Entrevistas', 'Testes', 'Análise'] },
  { icon: IconGrid, color: '#60a5fa', title: 'Design System',
    description: 'Criação de sistemas de design escaláveis, consistentes e reutilizáveis.',
    percent: 90, tags: ['Componentes', 'Tokens', 'Documentação'] },
  { icon: IconBolt, color: '#fb923c', title: 'Prototyping',
    description: 'Prototipação de alta fidelidade para validar ideias e testar soluções rapidamente.',
    percent: 93, tags: ['Figma', 'Interações', 'Testes'] },
  { icon: IconAccessibility, color: '#c084fc', title: 'Accessibility',
    description: 'Criação de produtos digitais acessíveis, inclusivos e alinhados às melhores práticas.',
    percent: 85, tags: ['WCAG', 'Contraste', 'Inclusão'] },
]

type Skill = { label: string; color: string; value: number; Icon: () => React.ReactElement }

const skills: Skill[] = [
  { label: 'UX/UI Design',   color: '#a78bfa', value: 95, Icon: IconPuzzle },
  { label: 'Product Design', color: '#fde047', value: 92, Icon: IconCube },
  { label: 'UX Research',    color: '#22c55e', value: 88, Icon: IconSearch },
  { label: 'Design System',  color: '#3b82f6', value: 90, Icon: IconGrid },
  { label: 'Prototyping',    color: '#f97316', value: 93, Icon: IconBolt },
  { label: 'Accessibility',  color: '#a855f7', value: 85, Icon: IconAccessibility },
  { label: 'Wireframing',    color: '#06b6d4', value: 90, Icon: IconFrame },
  { label: 'User Flows',     color: '#ec4899', value: 87, Icon: IconFlow },
]

// ── Radar chart — real SVG, exact Figma geometry (viewBox 292) ─
// ── Radar real de 8 pontos, alimentado pela legenda de skills ──
const RC = 146        // centro (viewBox 292)
const R_OUTER = 104   // raio do anel externo / valor 100%
const R_ICON = 122    // raio onde ficam as bolhas de ícone

// 8 eixos uniformes, começando no topo e girando no sentido horário
const angleAt = (i: number) => (-90 + i * (360 / skills.length)) * (Math.PI / 180)
const pointAt = (i: number, r: number): [number, number] =>
  [RC + r * Math.cos(angleAt(i)), RC + r * Math.sin(angleAt(i))]

const ringPoly = (r: number) =>
  skills.map((_, i) => pointAt(i, r).join(',')).join(' ')
const dataPts = skills.map((s, i) => pointAt(i, R_OUTER * (s.value / 100)))
const dataPoly = dataPts.map(p => p.join(',')).join(' ')

function RadarChart() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [grown, setGrown] = useState(false)

  // Expande ao abrir a tela; reativa quando o gráfico (re)entra na viewport
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return

    const grow = () => setGrown(true)
    // dispara na montagem (após o primeiro paint em scale(0))
    const timer = setTimeout(grow, 90)

    // realça a animação quando entra na viewport (navegadores com IO ativo)
    const io = typeof IntersectionObserver !== 'undefined'
      ? new IntersectionObserver(entries => {
          if (entries.some(e => e.isIntersecting)) { grow(); io?.disconnect() }
        }, { threshold: 0.3 })
      : null
    io?.observe(el)

    return () => { clearTimeout(timer); io?.disconnect() }
  }, [])

  return (
    <div className={styles.radarWrap} ref={wrapRef}>
      <svg viewBox="0 0 292 292" className={styles.radarSvg} aria-hidden="true">
        {/* anéis concêntricos (octógonos) */}
        {[0.25, 0.5, 0.75, 1].map(f => (
          <polygon key={f} points={ringPoly(R_OUTER * f)} fill="none"
            stroke="rgba(255,255,255,0.1)" strokeWidth="0.73" />
        ))}
        {/* eixos */}
        {skills.map((_, i) => {
          const [x, y] = pointAt(i, R_OUTER)
          return <line key={i} x1={RC} y1={RC} x2={x} y2={y}
            stroke="rgba(255,255,255,0.1)" strokeWidth="0.73" />
        })}
        {/* forma de dados animada */}
        <g className={`${styles.radarShape} ${grown ? styles.radarGrown : ''}`}>
          <polygon points={dataPoly} fill="rgba(234,179,8,0.15)"
            stroke="#facc15" strokeWidth="1.46" strokeLinejoin="round" />
          {dataPts.map((p, i) => (
            <circle key={i} cx={p[0]} cy={p[1]} r="2.92" fill="#facc15" />
          ))}
        </g>
      </svg>

      {skills.map((s, i) => {
        const [cx, cy] = pointAt(i, R_ICON)
        const Icon = s.Icon
        return (
          <div key={s.label}
            className={`${styles.radarBubble} ${grown ? styles.radarBubbleIn : ''}`}
            style={{
              left: `${cx - 24}px`,
              top: `${cy - 24}px`,
              color: s.color,
              borderColor: hexToRgba(s.color, 0.4),
              transitionDelay: `${0.12 + i * 0.06}s`,
            }}>
            <Icon />
            <span className={styles.radarTooltip} style={{ borderColor: hexToRgba(s.color, 0.5) }}>
              {s.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}

function hexToRgba(hex: string, alpha: number) {
  const n = parseInt(hex.slice(1), 16)
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`
}

// ── Component ─────────────────────────────────────────────────
export function Skills() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero} data-animate data-delay="0">
        <div className={styles.badge}>
          <img src={imgSparkle} alt="" className={styles.badgeIcon} />
          <span>Especialidades</span>
        </div>
        <h1 className={styles.title}>Skills em Product Design</h1>
        <p className={styles.subtitle}>
          Minhas principais habilidades e competências que uso para criar produtos digitais incríveis.
        </p>
      </div>

      {/* Cards grid */}
      <div className={styles.cardsGrid}>
        {cards.map((c, i) => {
          const Icon = c.icon
          return (
            <div key={c.title} className={styles.card} data-animate data-delay={i + 1}>
              <div className={styles.cardTop}>
                <div className={styles.cardIcon}
                  style={{
                    color: c.color,
                    background: hexToRgba(c.color, 0.10),
                    borderColor: hexToRgba(c.color, 0.30),
                  }}>
                  <Icon />
                </div>
                <div className={styles.cardHead}>
                  <h3 className={styles.cardTitle}>{c.title}</h3>
                  <p className={styles.cardDesc}>{c.description}</p>
                </div>
              </div>
              <div className={styles.cardBarRow}>
                <div className={styles.barTrack}>
                  <div className={styles.barFill}
                    style={{ width: `${c.percent}%`, background: `linear-gradient(90deg, ${c.color}99, ${c.color})` }} />
                </div>
                <span className={styles.barPercent}>{c.percent}%</span>
              </div>
              <div className={styles.cardTags}>
                {c.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </div>
          )
        })}
      </div>

      {/* Levels + Tools */}
      <div className={styles.bottomGrid}>
        <div className={styles.panel} data-animate data-delay="1">
          <h2 className={styles.panelTitle}>Nível de habilidades</h2>
          <div className={styles.levelsBody}>
            <RadarChart />
            <div className={styles.barsList}>
              {skills.map(s => (
                <div key={s.label} className={styles.skillRow}>
                  <span className={styles.skillLabel}>{s.label}</span>
                  <div className={styles.skillTrack}>
                    <div className={styles.skillFill}
                      style={{ width: `${s.value}%`, background: `linear-gradient(90deg, ${s.color}99, ${s.color})` }} />
                  </div>
                  <span className={styles.skillPercent}>{s.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.panel} data-animate data-delay="2">
          <h2 className={styles.panelTitle}>Ferramentas que uso:</h2>
          <ToolsMarquee />
        </div>
      </div>

      {/* CTA */}
      <div className={styles.ctaSection} data-animate data-delay="3">
        <div className={styles.ctaBox}>
          <div className={styles.ctaText}>
            <h2 className={styles.ctaTitle}>Sempre aprendendo e evoluindo</h2>
            <p className={styles.ctaSubtitle}>
              Acredito que o aprendizado contínuo é o que transforma boas ideias em produtos extraordinários.
            </p>
          </div>
          <a href="#" className={styles.ctaButton}>
            Vamos criar algo incrível juntos?
            <img src={imgArrowOut} alt="" className={styles.ctaButtonIcon} />
          </a>
        </div>
      </div>
    </div>
  )
}
