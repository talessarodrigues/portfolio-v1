import styles from './Site.module.css'
import { useTranslation } from '../../i18n/LanguageContext'
import { SobreMim } from '../SobreMim/SobreMim'
import { Experiencias } from '../Experiencias/Experiencias'
import { Recomendacoes } from '../Recomendacoes/Recomendacoes'
import { FAQ } from '../FAQ/FAQ'

// O que antes abria no modal de Perfil (Sobre + Experiências +
// Recomendações) virou página, junto com o FAQ. As seções são as mesmas
// de antes, só empilhadas debaixo de um cabeçalho no padrão do site.
export function AboutPage() {
  const { t } = useTranslation()

  return (
    <>
      {/* A seção SobreMim já abre com eyebrow e título próprios; um
          cabeçalho visível aqui repetia o mesmo "um pedacinho da minha
          história". O h1 fica só pra leitor de tela e busca. */}
      <h1 className="sr-only">{t.site.sobreTitulo} — Talessa Rodrigues</h1>
      <div className={styles.aboutStack}>
        <SobreMim />
        <Experiencias />
        <Recomendacoes />
        <FAQ />
      </div>
    </>
  )
}
