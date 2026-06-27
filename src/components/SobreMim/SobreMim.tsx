import styles from './SobreMim.module.css'
import { MarqueeRow } from '../ToolsMarquee/ToolsMarquee'
import { ContactBanner } from '../ContactBanner/ContactBanner'

import imgPhoto   from '../../assets/sobre/photo.png'
import imgSparkle from '../../assets/exp/sparkle.png'

export function SobreMim() {
  return (
    <div className={styles.page}>

      {/* ── About card ───────────────────────────────────────── */}
      <div className={styles.aboutWrap}>
        <div className={styles.aboutCard} data-animate data-delay="0">
          <div className={styles.photoCol}>
            <img src={imgPhoto} alt="Talessa Rodrigues" className={styles.photo} />
          </div>

          <div className={styles.contentCol}>
            <div className={styles.badge}>
              <img src={imgSparkle} alt="" className={styles.badgeIcon} />
              <span>Quem é Talessa?</span>
            </div>

            <h1 className={styles.title}>Sobre Mim:</h1>

            <div className={styles.body}>
              <p>
                Sou UX/UI Designer e acredito que uma boa interface começa muito antes da tela
                final. Antes de abrir o Figma, gosto de entender o produto, o usuário, o problema
                e o contexto por trás de cada decisão.
              </p>
              <p>
                Tenho me dedicado à criação de produtos digitais com foco em experiência,
                consistência visual e clareza. No projeto RHRecruiter, trabalhei em fluxos e
                interfaces para uma plataforma de recrutamento e seleção, pensando em experiências
                para empresas, recrutadores e candidatos. Foi um projeto que me fez evoluir muito
                na forma de pensar produto, hierarquia visual, jornada do usuário e comunicação
                entre design e desenvolvimento.
              </p>
              <p>
                Também estou construindo um Design System do zero no Figma, organizando foundations,
                variáveis, componentes reutilizáveis e documentação. Esse processo tem reforçado
                ainda mais minha visão sobre escalabilidade, consistência e maturidade em design.
              </p>
              <p>
                Gosto de criar interfaces com propósito, mas também com personalidade. Para mim,
                design é sobre resolver problemas, facilitar caminhos e traduzir ideias complexas
                em experiências simples, bonitas e funcionais.
              </p>
            </div>

            <div className={styles.actions}>
              <a href="#" className={styles.btnPrimary}>
                Entrar em contato
              </a>
              <a href="#" className={styles.btnSecondary}>Redes Sociais</a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stack ────────────────────────────────────────────── */}
      <div className={styles.stackSection} data-animate data-delay="1">
        <div className={styles.stackHeading}>
          <h2 className={styles.stackTitle}>Stack</h2>
          <p className={styles.stackSubtitle}>
            Software que uso diariamente e que recomendo vivamente.
          </p>
        </div>
        <MarqueeRow seed={4} />
      </div>

      {/* ── Contact CTA ──────────────────────────────────────── */}
      <ContactBanner />
    </div>
  )
}
