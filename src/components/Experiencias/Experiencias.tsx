import styles from './Experiencias.module.css'

import imgScreenshotRH      from '../../assets/exp/screenshot-rh.png'
import imgScreenshotConecta from '../../assets/exp/screenshot-conecta.png'
import imgIconRH      from '../../assets/exp/icon-rh.png'
import imgIconConecta from '../../assets/exp/icon-conecta.png'
import imgSparkle     from '../../assets/exp/sparkle.png'
import imgArrowOut    from '../../assets/exp/arrow-out.png'

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
                description={`Atividades: Liderança do time de UX/UI, orientando decisões de design e garantindo consistência no produto. Definição de padrões e evolução do Design System. Atuação em conjunto com times de Produto e Desenvolvimento para alinhamento estratégico e construção de soluções centradas no usuário. Participação em Product Discovery, criação de fluxos, wireframes e interfaces com foco em usabilidade, acessibilidade e escalabilidade. Apoio no desenvolvimento e alinhamento do time de design, promovendo consistência visual e eficiência nos processos.

Resultados: Fortalecimento da consistência visual e da escalabilidade do produto por meio da evolução do Design System. Maior alinhamento entre design, produto e desenvolvimento, contribuindo para decisões mais estratégicas e colaborativas. Melhoria da experiência do usuário através da criação de fluxos mais intuitivos e interfaces acessíveis, aumentando a eficiência e qualidade das entregas.`}
                periodAccent="yellow"
                companyAccent="violet"
              />
            </div>
            <div className={styles.screenshotCard} data-animate data-delay="2">
              <div className={styles.screenshotInner}>
                <div className={styles.screenshotImgWrap}>
                  <img src={imgScreenshotRH} alt="RHRecruiter" className={styles.screenshotImg} />
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
              <span className={`${styles.dot} ${styles.dotYellow}`} />
              <span className={`${styles.dot} ${styles.dotViolet}`} />
            </div>
          </div>

          {/* Right column — offset 128px */}
          <div className={styles.rightCol}>
            <div data-animate data-delay="2">
              <ExperienceCard
                icon={imgIconConecta}
                period="2026 - Atual"
                title="Product Designer (voluntário)"
                company="Conecta 360º"
                tags={['MOBILE', 'USER RESEARCH', 'PROTOTYPING']}
                description={`Atividades: Atuação end-to-end no desenvolvimento de soluções digitais e estruturais para RH, incluindo sites institucionais e softwares de gestão com foco em NR-1 (riscos psicossociais). Condução de Product Discovery e UX Research para levantamento de requisitos, mapeamento de jornadas (Employee Experience) e definição de fluxos. Estruturação de arquitetura da informação, user flows e interfaces (UX/UI), além da implementação e organização de processos de RH em sistemas (ATS, CRM e plataformas de gestão). Aplicação de Design Thinking e metodologias ágeis para desenvolvimento de soluções alinhadas à legislação e aos objetivos do negócio.

Resultados: Estruturação de soluções digitais e processos de RH mais claros e padronizados, facilitando a gestão de riscos psicossociais conforme NR-1. Melhoria da usabilidade e organização das informações em sistemas e sites, otimizando a experiência do usuário e a tomada de decisão. Redução de retrabalho e aumento da eficiência operacional por meio da definição de fluxos e processos estruturados.`}
                periodAccent="violet"
                companyAccent="yellow"
              />
            </div>
            <div className={styles.screenshotCard} data-animate data-delay="3">
              <div className={styles.screenshotInner}>
                <div className={styles.screenshotImgWrap}>
                  <img src={imgScreenshotConecta} alt="Conecta 360º" className={styles.screenshotImg} />
                </div>
              </div>
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
