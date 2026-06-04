import styles from './Experiencias.module.css'

const imgBg          = 'https://www.figma.com/api/mcp/asset/1cd085dd-6dca-40ff-9d60-337b8ccd960c'
const imgScreenshot  = 'https://www.figma.com/api/mcp/asset/ee5cbd01-a8ef-4a85-8029-0e4f8a341fdf'
const imgIconRH      = 'https://www.figma.com/api/mcp/asset/fd4146e8-87b6-4316-af1c-b17cfcff6073'
const imgIconConecta = 'https://www.figma.com/api/mcp/asset/11c46099-5c90-4e77-8d42-b7b8330a75ee'
const imgIconFuture  = 'https://www.figma.com/api/mcp/asset/2aa3f0eb-1ac7-4cf5-b069-06eca08b67c4'
const imgSparkle     = 'https://www.figma.com/api/mcp/asset/afa72523-0ee8-46e4-9c81-525d262413be'
const imgArrowOut    = 'https://www.figma.com/api/mcp/asset/d2de173a-f14d-4f79-b352-8d9c111aa02c'

type CardAccent = 'yellow' | 'violet'

function Tag({ label }: { label: string }) {
  return <span className={styles.tag}>{label}</span>
}

function ExperienceCard({
  icon,
  period,
  title,
  company,
  tags,
  description,
  accent,
}: {
  icon: string
  period: string
  title: string
  company: string
  tags: string[]
  description: string
  accent: CardAccent
}) {
  return (
    <div className={styles.expCard}>
      <div className={styles.expCardTop}>
        <div className={styles.expCardIconWrap}>
          <img src={icon} alt="" className={styles.expCardIconImg} />
        </div>
        <span className={`${styles.expCardPeriod} ${styles[`period_${accent}`]}`}>{period}</span>
      </div>
      <h3 className={styles.expCardTitle}>{title}</h3>
      <p className={`${styles.expCardCompany} ${styles[`company_${accent}`]}`}>{company}</p>
      <div className={styles.expCardTags}>
        {tags.map(t => <Tag key={t} label={t} />)}
      </div>
      <p className={styles.expCardBody}>{description}</p>
    </div>
  )
}

export function Experiencias() {
  return (
    <div className={styles.page}>
      {/* Background image */}
      <img src={imgBg} alt="" className={styles.bgImage} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className={styles.hero}>
        <div className={styles.badge}>
          <img src={imgSparkle} alt="" className={styles.badgeIcon} />
          <span>Jornada profissional</span>
        </div>
        <h1 className={styles.title}>Construindo experiências</h1>
        <p className={styles.subtitle}>
          Experiências que conectam estratégia, pesquisa e design para criar soluções
          centradas no usuário — e empresas que reconheceram esse potencial em minha trajetória.
        </p>
      </div>

      {/* ── Timeline ─────────────────────────────────────────── */}
      <div className={styles.timelineSection}>
        {/* Left column */}
        <div className={styles.leftCol}>
          <ExperienceCard
            icon={imgIconRH}
            period="2026 - Atual"
            title="UX/UI Lead (voluntário)"
            company="RHRecruiter"
            tags={['SAAS', 'DESIGN SYSTEM', 'LEADERSHIP']}
            description="Liderança do time de design, evolução do Design System e criação de soluções centradas no usuário para plataformas de recrutamento e gestão de pessoas."
            accent="yellow"
          />
          <div className={styles.screenshotCard}>
            <img src={imgScreenshot} alt="App screenshot" className={styles.screenshotImg} />
          </div>
        </div>

        {/* Center timeline */}
        <div className={styles.centerCol}>
          <div className={styles.timelineLine} />
          <div className={styles.dotsWrap}>
            <span className={`${styles.dot} ${styles.dotYellow}`} />
            <span className={`${styles.dot} ${styles.dotViolet}`} />
            <span className={`${styles.dot} ${styles.dotGray}`} />
          </div>
        </div>

        {/* Right column — offset 128px */}
        <div className={styles.rightCol}>
          <ExperienceCard
            icon={imgIconConecta}
            period="2026 - Atual"
            title="Product Designer (voluntário)"
            company="Conecta 360°"
            tags={['MOBILE', 'USER RESEARCH', 'PROTOTYPING']}
            description="Atuação estratégica em Product Design, UX Research e estruturação de plataformas alinhadas à NR-1."
            accent="violet"
          />
          <div className={styles.futureCard}>
            <img src={imgIconFuture} alt="" className={styles.futureIcon} />
            <span className={styles.futureTitle}>UX/UI Designer</span>
            <span className={styles.futureCompany}>Crimsom Mind Tech (2012–2025)</span>
          </div>
        </div>
      </div>

      {/* ── Contact CTA ──────────────────────────────────────── */}
      <div className={styles.ctaSection}>
        <div className={styles.ctaBox}>
          <div className={styles.ctaText}>
            <h2 className={styles.ctaTitle}>Vamos criar algo incrível juntos?</h2>
            <p className={styles.ctaSubtitle}>
              Tem um projeto em mente ou precisa de ajuda para resolver um desafio? Vamos conversar!
            </p>
          </div>
          <a href="#" className={styles.ctaButton}>
            Entrar em contato
            <img src={imgArrowOut} alt="" className={styles.ctaButtonIcon} />
          </a>
        </div>
      </div>
    </div>
  )
}
