import imgRedesignNatva from '../assets/projetos/figma/redesign-natva.webp'
import imgResidentEvil from '../assets/projetos/figma/resident-evil.webp'
import imgDrakorysArcane from '../assets/projetos/figma/drakorys-arcane.webp'
import imgAsteraDataBank from '../assets/projetos/figma/astera-data-bank.webp'
import imgIronBank from '../assets/projetos/figma/iron-bank.webp'
import imgOrchardTreasure from '../assets/projetos/figma/orchard-treasure.webp'
import imgConecta360 from '../assets/projetos/figma/conecta-360.webp'
import imgEasyCar from '../assets/projetos/figma/easy-car.webp'
import imgVigimolVetores from '../assets/projetos/figma/vigimol-vetores.webp'
import imgTalessaRodrigues from '../assets/projetos/figma/talessa-rodrigues.webp'
import imgCatchupTech from '../assets/projetos/figma/catchup-tech.webp'
import imgJornadasCorporativas from '../assets/projetos/figma/jornadas-corporativas.webp'
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
import imgCatalogoThaysa from '../assets/projetos/externos/catalogo-thaysa.webp'
import imgRhRecruiter from '../assets/projetos/externos/rhrecruiter.webp'

export type CategoryKey = 'ux-ui-design' | 'branding'

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

// Ordem intercalada de propósito: no filtro "Todos" os cases de UX/UI e
// os de branding se alternam, em vez de aparecerem em blocos separados.
export const allProjects: Project[] = [
  { image: imgGestaoConecta360, title: 'Gestão Conecta 360º', categoryKey: 'ux-ui-design', detailSlug: 'conecta-360-ux' },
  { image: imgUsfit, title: 'USFit', categoryKey: 'ux-ui-design', detailSlug: 'usfit-home-dieta-ux' },
  { image: imgCertify, title: 'Certify', categoryKey: 'ux-ui-design', detailSlug: 'certify-ux' },
  { image: imgConecta360, title: 'Conecta 360º', categoryKey: 'branding', detailSlug: 'conecta-360-branding' },
  { image: imgJornadaJunior, title: 'Jornada Júnior', categoryKey: 'ux-ui-design', detailSlug: 'jornada-junior-ux' },
  { image: imgLeanLearn, title: 'LeanLearn', categoryKey: 'ux-ui-design', detailSlug: 'lean-learn-ui' },
  { image: imgGestaoEasyCar, title: 'Gestão Easy Car', categoryKey: 'ux-ui-design', detailSlug: 'gestao-easy-car-ux' },
  { image: imgTalessaRodrigues, title: 'Talessa Rodrigues', categoryKey: 'branding', detailSlug: 'talessa-rodrigues-branding' },
  { image: imgMidnightHeist, title: 'Midnight Heist', categoryKey: 'ux-ui-design', detailSlug: 'midnight-heist-ui' },
  { image: imgSocialMatch, title: 'Social Match', categoryKey: 'ux-ui-design', detailSlug: 'social-match-ux' },
  { image: imgRedesignNatva, title: 'Redesign Natva', categoryKey: 'ux-ui-design', detailSlug: 'redesign-natva-ui' },
  { image: imgEasyCar, title: 'Easy Car', categoryKey: 'branding', detailSlug: 'easy-car-branding' },
  { image: imgAtelieDiane, title: 'Ateliê Diane Almeida', categoryKey: 'ux-ui-design', detailSlug: 'atelie-diane-almeida-ui' },
  { image: imgMarionIa, title: 'Marion IA', categoryKey: 'ux-ui-design', detailSlug: 'marion-ia-ui' },
  { image: imgAsteraDataBank, title: 'Astera Data Bank', categoryKey: 'ux-ui-design', detailSlug: 'astera-data-bank-ui' },
  { image: imgCatchupTech, title: 'CatchUp Tech', categoryKey: 'branding', detailSlug: 'catchup-tech-branding' },
  { image: imgResidentEvil, title: 'Resident Evil', categoryKey: 'ux-ui-design', detailSlug: 'resident-evil-ui' },
  { image: imgDrakorysArcane, title: 'Drakorys Arcane', categoryKey: 'ux-ui-design', detailSlug: 'drakorys-arcane-ui' },
  { image: imgIronBank, title: 'Iron Bank', categoryKey: 'ux-ui-design', detailSlug: 'iron-bank-ui' },
  { image: imgVigimolVetores, title: 'Vigimol Vetores', categoryKey: 'branding', detailSlug: 'vigimol-vetores-branding' },
  { image: imgOrchardTreasure, title: 'Orchard Treasure', categoryKey: 'ux-ui-design', detailSlug: 'orchard-treasure-ui' },
  { image: imgRhRecruiter, title: 'RHRecruiter', categoryKey: 'ux-ui-design', externalUrl: 'https://rhrecruiter.com.br' },
  { image: imgJornadasCorporativas, title: 'Jornadas Corporativas', categoryKey: 'branding', detailSlug: 'jornadas-corporativas-branding' },
  { image: imgCatalogoThaysa, title: 'Catálogo Thaysa Ribeiro', categoryKey: 'ux-ui-design', externalUrl: 'https://catalogo-thaysa.vercel.app', mobileOnly: true },
]

// Cada um dos 5 estados da Hero mostra uma prova de trabalho no card do
// canto inferior esquerdo. A ordem é a mesma de t.hero.slides:
// 01 Product Designer · 02 UX Design · 03 UI Design · 04 Branding · 05 ID Visual.
// Product Designer e UX puxam cases de UX diferentes entre si; ID Visual puxa
// um case de branding diferente do usado em Branding.
const HERO_SLIDE_PROJECT_TITLES = [
  'Gestão Conecta 360º',
  'Jornada Júnior',
  'Redesign Natva',
  'Conecta 360º',
  'Talessa Rodrigues',
] as const

export const heroSlideProjects: Project[] = HERO_SLIDE_PROJECT_TITLES.map(title => {
  const project = allProjects.find(p => p.title === title)
  if (!project) throw new Error(`Projeto "${title}" da Hero não existe em allProjects`)
  return project
})
