import { useState } from 'react'
import styles from './Processos.module.css'
import imgSparkle from '../../assets/exp/sparkle.png'
import imgArrowOut from '../../assets/exp/arrow-out.png'

// ── Process card icons ────────────────────────────────────────

// 01 Descobrir — person/magnifying glass
const IconUser = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <circle cx="20" cy="14" r="7" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M6 36C6 28.268 12.268 22 20 22C27.732 22 34 28.268 34 36" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

// 02 Definir — pencil/edit
const IconPencil = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path d="M28 6L34 12L14 32L6 34L8 26L28 6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M24 10L30 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

// 03 Desenvolver — lightbulb (48px for active card)
const IconLightbulb = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M24 8C17.373 8 12 13.373 12 20C12 24.418 14.373 28.256 18 30.373V34C18 35.105 18.895 36 20 36H28C29.105 36 30 35.105 30 34V30.373C33.627 28.256 36 24.418 36 20C36 13.373 30.627 8 24 8Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M19 40H29" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="24" cy="20" r="3" fill="currentColor" opacity="0.4"/>
    <path d="M24 14V17M18.5 15.5L20.6 17.6M29.5 15.5L27.4 17.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

// 04 Entregar — monitor
const IconMonitor = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <rect x="4" y="6" width="32" height="22" rx="3" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M14 34H26" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M20 28V34" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

// 05 Evoluir — upward trend / chart
const IconTrend = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path d="M6 30L15 19L22 25L34 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26 10H34V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// ── Bottom panel icons ────────────────────────────────────────

const IconInfinity = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path d="M7 20C7 17.239 9.239 15 12 15C16 15 20 25 24 25C26.761 25 29 22.761 29 20C29 17.239 26.761 15 24 15C20 15 16 25 12 25C9.239 25 7 22.761 7 20Z" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const IconUserPlus = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="10" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2 20C2 16.686 5.582 14 10 14C11.077 14 12.102 14.162 13.043 14.459" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M18 15V21M15 18H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const IconTeam = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="9" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2 20C2 16.686 5.134 14 9 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="16" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M13 20C13 17.239 14.343 15 16 15C17.657 15 19 17.239 19 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const IconRefresh = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 12C4 7.582 7.582 4 12 4C15.09 4 17.775 5.663 19.236 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 12C20 16.418 16.418 20 12 20C8.91 20 6.225 18.337 4.764 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 8H20V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 16H4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconTarget = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
  </svg>
)

const IconChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// ── Data ──────────────────────────────────────────────────────

type Accent = 'yellow' | 'violet' | 'green' | 'blue' | 'red'

const processSteps: {
  num: string
  title: string
  accent: Accent
  description: string
  items: string[]
  Icon: () => React.ReactElement
}[] = [
  {
    num: '01',
    title: 'Descobrir',
    accent: 'yellow',
    description: 'Entender o problema, os usuários e o contexto do negócio.',
    items: ['Entrevistas com usuários', 'Desk research', 'Benchmarking', 'Pesquisa quantitativa', 'Definição de objetivos'],
    Icon: IconUser,
  },
  {
    num: '02',
    title: 'Definir',
    accent: 'green',
    description: 'Transformar os dados coletados em oportunidades claras de solução.',
    items: ['Síntese da pesquisa', 'Mapa de empatia', 'Personas', 'Jornada do usuário', 'Priorização dos problemas'],
    Icon: IconPencil,
  },
  {
    num: '03',
    title: 'Desenvolver',
    accent: 'violet',
    description: 'Explorar soluções e estruturar a experiência do produto.',
    items: ['Brainstorming', 'Fluxos do usuário', 'Arquitetura da informação', 'Wireframes', 'Validação de conceitos'],
    Icon: IconLightbulb,
  },
  {
    num: '04',
    title: 'Entregar',
    accent: 'blue',
    description: 'Construir, testar e validar a solução proposta.',
    items: ['UI Design', 'Design System', 'Protótipo de alta fidelidade', 'Testes de usabilidade', 'Iterações', 'Handoff para desenvolvimento'],
    Icon: IconMonitor,
  },
  {
    num: '05',
    title: 'Evoluir',
    accent: 'red',
    description: 'Monitorar resultados e promover melhorias contínuas.',
    items: ['Análise de métricas', 'Feedback dos usuários', 'Ajustes de usabilidade', 'Testes A/B', 'Melhorias contínuas'],
    Icon: IconTrend,
  },
]

const featureItems = [
  { Icon: IconUserPlus, accent: 'yellow' as Accent, title: 'Centrado no usuário', desc: 'Decisões guiadas por necessidades reais e empatia.' },
  { Icon: IconTeam,     accent: 'green'  as Accent, title: 'Colaboração',         desc: 'Trabalho junto para criar soluções mais completas.' },
  { Icon: IconRefresh,  accent: 'yellow' as Accent, title: 'Iteração contínua',   desc: 'Testar, aprender e evoluir faz parte de cada entrega.' },
  { Icon: IconTarget,   accent: 'violet' as Accent, title: 'Impacto e valor',     desc: 'Design que gera valor para pessoas e negócios.' },
]

// ── Carousel helpers ──────────────────────────────────────────

// Returns the wrapped offset of `index` relative to `active` in range (-total/2, total/2]
function relativeOffset(index: number, active: number, total: number): number {
  let d = ((index - active) % total + total) % total
  if (d > total / 2) d -= total
  return d
}

function cardInlineStyle(offset: number): React.CSSProperties {
  const abs = Math.abs(offset)

  // Cards beyond ±2 are hidden entirely
  if (abs > 2) {
    return { left: '50%', opacity: 0, pointerEvents: 'none', zIndex: 0, transform: 'translateX(-50%) scale(0.6)' }
  }

  const step = 230
  const tx = offset * step

  const scale   = abs === 0 ? 1.06 : abs === 1 ? 0.91 : 0.76
  const opacity = abs === 0 ? 1    : abs === 1 ? 0.72 : 0.28
  const zIndex  = abs === 0 ? 10   : abs === 1 ? 7    : 4

  return {
    left: '50%',
    transform: `translateX(calc(-50% + ${tx}px)) scale(${scale})`,
    opacity,
    zIndex,
    pointerEvents: abs === 0 ? 'none' : 'auto',
  }
}

// ── Component ─────────────────────────────────────────────────

export function Processos() {
  const [active, setActive] = useState(0) // default: step 01 Descobrir
  const total = processSteps.length

  const prev = () => setActive(i => (i - 1 + total) % total)
  const next = () => setActive(i => (i + 1) % total)

  return (
    <div className={styles.page}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className={styles.hero} data-animate data-delay="0">
        <div className={styles.badge}>
          <img src={imgSparkle} alt="" className={styles.badgeIcon} />
          <span>Processo criativo</span>
        </div>
        <h1 className={styles.title}>Do problema a solução</h1>
        <p className={styles.subtitle}>
          Meu processo combina pesquisa, estratégia e validação contínua para criar experiências funcionais e escaláveis.
        </p>
      </div>

      {/* ── Carousel ─────────────────────────────────────────── */}
      <div className={styles.carouselSection} data-animate data-delay="1">
        {/* Arrow — left */}
        <button className={`${styles.navArrow} ${styles.navArrowLeft}`} onClick={prev} aria-label="Anterior">
          <IconChevronLeft />
        </button>

        {/* Card track */}
        <div className={styles.carouselTrack}>
          {processSteps.map((step, i) => {
            const offset = relativeOffset(i, active, total)
            const isActive = offset === 0
            const Icon = step.Icon

            return (
              <div
                key={step.num}
                className={`${styles.card} ${styles[`card_${step.accent}`]} ${isActive ? styles.cardActive : ''}`}
                style={cardInlineStyle(offset)}
                onClick={() => !isActive && setActive(i)}
                aria-label={isActive ? undefined : `Ver etapa ${step.num}`}
              >
                {/* Step number */}
                <span className={`${styles.cardNum} ${styles[`num_${step.accent}`]}`}>{step.num}</span>

                {/* Icon */}
                <div className={`${styles.iconWrap} ${styles[`iconWrap_${step.accent}`]}`}>
                  <span className={`${styles.iconInner} ${styles[`iconColor_${step.accent}`]}`}>
                    <Icon />
                  </span>
                </div>

                {/* Title */}
                <h3 className={styles.cardTitle}>{step.title}</h3>

                {/* Description */}
                <p className={styles.cardDesc}>{step.description}</p>

                {/* Bullet list */}
                <ul className={styles.cardList}>
                  {step.items.map(item => (
                    <li key={item} className={styles.cardItem}>
                      <span className={`${styles.dot} ${styles[`dot_${step.accent}`]}`} />
                      <span className={styles.cardItemText}>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Active badge */}
                {isActive && (
                  <div className={`${styles.etapaAtual} ${styles[`etapa_${step.accent}`]}`}>
                    ETAPA ATUAL
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Arrow — right */}
        <button className={`${styles.navArrow} ${styles.navArrowRight}`} onClick={next} aria-label="Próximo">
          <IconChevronRight />
        </button>

        {/* Pagination dots */}
        <div className={styles.pagination}>
          {processSteps.map((_, i) => (
            <button
              key={i}
              className={`${styles.pageDot} ${i === active ? styles.pageDotActive : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Etapa ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Info panel ───────────────────────────────────────── */}
      <div className={styles.infoSection} data-animate data-delay="2">
        <div className={styles.infoBox}>
          <div className={styles.infoHeader}>
            <span className={`${styles.infoBigIcon} ${styles.iconColor_yellow}`}>
              <IconInfinity />
            </span>
            <div className={styles.infoHeaderText}>
              <h2 className={styles.infoTitle}>Um ciclo que nunca para</h2>
              <p className={styles.infoSubtitle}>
                O processo é iterativo e adaptável. A cada novo projeto, aprendemos, evoluímos e entregamos ainda mais valor.
              </p>
            </div>
          </div>
          <div className={styles.featureGrid}>
            {featureItems.map(({ Icon, accent, title, desc }) => (
              <div key={title} className={styles.featureItem}>
                <span className={`${styles.featureIcon} ${styles[`featureIcon_${accent}`]} ${styles[`iconColor_${accent}`]}`}>
                  <Icon />
                </span>
                <div>
                  <p className={styles.featureTitle}>{title}</p>
                  <p className={styles.featureDesc}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────── */}
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
