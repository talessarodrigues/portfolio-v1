import styles from './Experiencias.module.css'

const imgScreenshot  = 'https://www.figma.com/api/mcp/asset/d94b88bb-7164-4b77-8fe6-d7cc6255c888'
const imgIconRH      = 'https://www.figma.com/api/mcp/asset/044a7fd4-f712-4434-83f0-4ced1675655a'
const imgIconConecta = 'https://www.figma.com/api/mcp/asset/8aab280c-66a5-415a-9fd0-d3dea17b7286'
const imgIconFuture  = 'https://www.figma.com/api/mcp/asset/6af4e91d-6cae-494a-8e93-020b71f6584b'
const imgSparkle     = 'https://www.figma.com/api/mcp/asset/54bdd7d3-902a-420b-b0e7-3c3f7c1d3d92'
const imgArrowOut    = 'https://www.figma.com/api/mcp/asset/f4ed0b8c-ced4-47c2-9537-b93755b7bf50'

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
  periodAccent,
  companyAccent,
}: {
  icon: string
  period: string
  title: string
  company: string
  tags: string[]
  description: string
  periodAccent: CardAccent
  companyAccent: CardAccent
}) {
  return (
    <div className={styles.expCard}>
      <div className={styles.expCardTop}>
        <div className={styles.expCardIconWrap}>
          <img src={icon} alt="" className={styles.expCardIconImg} />
        </div>
        <span className={`${styles.expCardPeriod} ${styles[`period_${periodAccent}`]}`}>{period}</span>
      </div>
      <h3 className={styles.expCardTitle}>{title}</h3>
      <p className={`${styles.expCardCompany} ${styles[`company_${companyAccent}`]}`}>{company}</p>
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

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className={styles.hero} data-animate data-delay="0">
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
      <div className={styles.timelineOuter}>
        <div className={styles.timelineSection}>
          {/* Left column */}
          <div className={styles.leftCol}>
            <div data-animate data-delay="1">
              <ExperienceCard
                icon={imgIconRH}
                period="2026 - Atual"
                title="UX/UI Lead (voluntário)"
                company="RHRecruiter"
                tags={['SAAS', 'DESIGN SYSTEM', 'LEADERSHIP']}
                description="Liderança do time de design, evolução do Design System e criação de soluções centradas no usuário para plataformas de recrutamento e gestão de pessoas."
                periodAccent="yellow"
                companyAccent="violet"
              />
            </div>
            <div className={styles.screenshotCard} data-animate data-delay="2">
              <div className={styles.screenshotInner}>
                <div className={styles.screenshotImgWrap}>
                  <img src={imgScreenshot} alt="App screenshot" className={styles.screenshotImg} />
                </div>
              </div>
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
            <div data-animate data-delay="2">
              <ExperienceCard
                icon={imgIconConecta}
                period="2026 - Atual"
                title="Product Designer (voluntário)"
                company="Conecta 360°"
                tags={['MOBILE', 'USER RESEARCH', 'PROTOTYPING']}
                description="Atuação estratégica em Product Design, UX Research e estruturação de plataformas alinhadas à NR-1."
                periodAccent="violet"
                companyAccent="yellow"
              />
            </div>
            <div className={styles.futureCard} data-animate data-delay="3">
              <img src={imgIconFuture} alt="" className={styles.futureIcon} />
              <span className={styles.futureTitle}>UX/UI Designer</span>
              <span className={styles.futureCompany}>Crimsom Mind Tech (2012–2025)</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Contact CTA ──────────────────────────────────────── */}
      <div className={styles.ctaSection} data-animate data-delay="4">
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
