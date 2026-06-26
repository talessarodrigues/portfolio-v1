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
                Sou UX/UI Designer apaixonada por transformar problemas complexos em experiências
                digitais intuitivas e estratégicas. Tenho experiência criando interfaces para web,
                mobile, dashboards e sistemas, atuando desde discovery e pesquisa até prototipação
                e handoff para desenvolvimento.
              </p>
              <p>
                Ao longo da minha trajetória, desenvolvi projetos focados em usabilidade, design
                systems, acessibilidade e alinhamento entre negócio e experiência do usuário.
                Trabalho com Figma, componentização e processos colaborativos com times de produto
                e tecnologia.
              </p>
              <p>
                Hoje, sigo evoluindo constantemente na área de Product Design, buscando criar
                soluções funcionais, visualmente consistentes e centradas no usuário.
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
