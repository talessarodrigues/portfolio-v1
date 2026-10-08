import imgRedesignNatva from '../assets/projetos/figma/redesign-natva.webp'
import imgResidentEvil from '../assets/projetos/figma/resident-evil.webp'
import imgDrakorysArcane from '../assets/projetos/figma/drakorys-arcane.webp'
import imgAsteraDataBank from '../assets/projetos/figma/astera-data-bank.webp'
import imgIronBank from '../assets/projetos/figma/iron-bank.webp'
import imgOrchardTreasure from '../assets/projetos/figma/orchard-treasure.webp'
import imgGestaoEasyCar from '../assets/projetos/figma/gestao-easy-car.webp'
import imgGestaoConecta360 from '../assets/projetos/figma/gestao-conecta-360.webp'
import imgJornadaJunior from '../assets/projetos/figma/jornada-junior.webp'
import imgCertify from '../assets/projetos/figma/certify.webp'
import imgLeanLearn from '../assets/projetos/figma/lean-learn.webp'
import imgAtelieDiane from '../assets/projetos/figma/atelie-diane-almeida.webp'
import imgMidnightHeist from '../assets/projetos/figma/midnight-heist.webp'
import imgMarionIa from '../assets/projetos/figma/marion-ia.webp'
import imgSocialMatch from '../assets/projetos/figma/social-match.webp'
import imgUsfit from '../assets/projetos/figma/usfit.webp'
import imgEssencialPerfumaria from '../assets/projetos/figma/essencial-perfumaria.webp'
import imgCatalogoThaysa from '../assets/projetos/externos/catalogo-thaysa.webp'
import imgRhRecruiter from '../assets/projetos/externos/rhrecruiter.webp'

// Desde 2026-10-08 o portfólio só tem cases de UX/UI (os de branding saíram).
export type CategoryKey = 'ux-ui-design'

// Título fica igual nos 3 idiomas (nome do projeto) — é a chave usada
// pra buscar description/tags traduzidos em t.projects[title].
export interface Project {
  image: string
  title: string
  categoryKey: CategoryKey
  detailSlug?: string
  /**
   * Projetos que estão no ar: o card leva direto pro site em vez de
   * abrir um case study. Quem tem `externalUrl` não tem `detailSlug`.
   */
  externalUrl?: string
  /** Sites feitos só pra celular — o card avisa antes de abrir. */
  mobileOnly?: boolean
}

// Os dois primeiros são os projetos mais recentes e completos (produto
// desenhado e construído de ponta a ponta), em destaque de propósito.
export const allProjects: Project[] = [
  { image: imgEssencialPerfumaria, title: 'Essencial Perfumaria', categoryKey: 'ux-ui-design', detailSlug: 'essencial-perfumaria' },
  { image: imgAtelieDiane, title: 'Ateliê Diane Almeida', categoryKey: 'ux-ui-design', detailSlug: 'atelie-diane-almeida-ui' },
  { image: imgGestaoConecta360, title: 'Gestão Conecta 360º', categoryKey: 'ux-ui-design', detailSlug: 'conecta-360-ux' },
  { image: imgUsfit, title: 'USFit', categoryKey: 'ux-ui-design', detailSlug: 'usfit-home-dieta-ux' },
  { image: imgCertify, title: 'Certify', categoryKey: 'ux-ui-design', detailSlug: 'certify-ux' },
  { image: imgJornadaJunior, title: 'Jornada Júnior', categoryKey: 'ux-ui-design', detailSlug: 'jornada-junior-ux' },
  { image: imgLeanLearn, title: 'LeanLearn', categoryKey: 'ux-ui-design', detailSlug: 'lean-learn-ui' },
  { image: imgGestaoEasyCar, title: 'Gestão Easy Car', categoryKey: 'ux-ui-design', detailSlug: 'gestao-easy-car-ux' },
  { image: imgMidnightHeist, title: 'Midnight Heist', categoryKey: 'ux-ui-design', detailSlug: 'midnight-heist-ui' },
  { image: imgSocialMatch, title: 'Social Match', categoryKey: 'ux-ui-design', detailSlug: 'social-match-ux' },
  { image: imgRedesignNatva, title: 'Redesign Natva', categoryKey: 'ux-ui-design', detailSlug: 'redesign-natva-ui' },
  { image: imgMarionIa, title: 'Marion IA', categoryKey: 'ux-ui-design', detailSlug: 'marion-ia-ui' },
  { image: imgAsteraDataBank, title: 'Astera Data Bank', categoryKey: 'ux-ui-design', detailSlug: 'astera-data-bank-ui' },
  { image: imgResidentEvil, title: 'Resident Evil', categoryKey: 'ux-ui-design', detailSlug: 'resident-evil-ui' },
  { image: imgDrakorysArcane, title: 'Drakorys Arcane', categoryKey: 'ux-ui-design', detailSlug: 'drakorys-arcane-ui' },
  { image: imgIronBank, title: 'Iron Bank', categoryKey: 'ux-ui-design', detailSlug: 'iron-bank-ui' },
  { image: imgOrchardTreasure, title: 'Orchard Treasure', categoryKey: 'ux-ui-design', detailSlug: 'orchard-treasure-ui' },
  { image: imgRhRecruiter, title: 'RHRecruiter', categoryKey: 'ux-ui-design', externalUrl: 'https://rhrecruiter.com.br' },
  { image: imgCatalogoThaysa, title: 'Catálogo Thaysa Ribeiro', categoryKey: 'ux-ui-design', externalUrl: 'https://catalogo-thaysa.vercel.app', mobileOnly: true },
]
