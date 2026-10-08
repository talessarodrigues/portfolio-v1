import imgRedesignNatva from '../assets/projetos/figma/redesign-natva.webp'
import imgResidentEvil from '../assets/projetos/figma/resident-evil.webp'
import imgResidentEvilPersonagens from '../assets/projetos/figma/resident-evil-personagens.webp'
import imgDrakorysArcane from '../assets/projetos/figma/drakorys-arcane.webp'
import imgDrakorysArcanePersonagens from '../assets/projetos/figma/drakorys-arcane-personagens.webp'
import imgAsteraDataBank from '../assets/projetos/figma/astera-data-bank.webp'
import imgAsteraDataBankBestiario from '../assets/projetos/figma/astera-data-bank-bestiario.webp'
import imgIronBank from '../assets/projetos/figma/iron-bank.webp'
import imgIronBankHome from '../assets/projetos/figma/iron-bank-home.webp'
import imgGestaoEasyCar from '../assets/projetos/figma/gestao-easy-car.webp'
import imgGestaoConecta360 from '../assets/projetos/figma/gestao-conecta-360.webp'
import imgGestaoConecta360Detalhe from '../assets/projetos/figma/gestao-conecta-360-detalhe.webp'
import imgJornadaJunior from '../assets/projetos/figma/jornada-junior.webp'
import imgJornadaJuniorDS from '../assets/projetos/figma/jornada-junior-design-system.webp'
import imgCertify from '../assets/projetos/figma/certify.webp'
import imgCertifyModelos from '../assets/projetos/figma/certify-modelos.webp'
import imgLeanLearn from '../assets/projetos/figma/lean-learn.webp'
import imgAtelieDiane from '../assets/projetos/figma/atelie-diane-almeida.webp'
import imgMarionIa from '../assets/projetos/figma/marion-ia.webp'
import imgUsfit from '../assets/projetos/figma/usfit.webp'
import imgEssencialPerfumaria from '../assets/projetos/figma/essencial-perfumaria.webp'
import imgEssencialPerfumariaPainel from '../assets/projetos/figma/essencial-perfumaria-painel.webp'
import imgAura from '../assets/projetos/figma/aura.webp'
import imgAuraHome from '../assets/projetos/figma/aura-home.webp'
import imgCatalogoThaysa from '../assets/projetos/externos/catalogo-thaysa.webp'
import imgCatalogoThaysaInicio from '../assets/projetos/externos/catalogo-thaysa-inicio.webp'
import imgRhRecruiter from '../assets/projetos/externos/rhrecruiter.webp'
import imgRhRecruiterSite from '../assets/projetos/externos/rhrecruiter-site.webp'
import imgCrimson from '../assets/projetos/externos/crimson-mind-tech.webp'
import imgCrimsonExperiencia from '../assets/projetos/externos/crimson-mind-tech-experiencia.webp'

// Desde 2026-10-08 o portfólio só tem cases de UX/UI (os de branding saíram).
export type CategoryKey = 'ux-ui-design'

// Tipo de produto, para os filtros da home. Um projeto pode ter vários
// (a Essencial é site, painel e e-commerce ao mesmo tempo).
export type ProjectKind = 'website' | 'app' | 'dashboard' | 'ecommerce'
export const PROJECT_KINDS: ProjectKind[] = ['website', 'app', 'dashboard', 'ecommerce']

// Título fica igual nos 3 idiomas (nome do projeto) — é a chave usada
// pra buscar description/tags traduzidos em t.projects[title].
export interface Project {
  image: string
  /** Segunda imagem do card da grade: aparece no hover e some ao tirar o mouse. */
  hoverImage?: string
  title: string
  categoryKey: CategoryKey
  kinds: ProjectKind[]
  detailSlug?: string
  /**
   * Projetos que estão no ar: o card leva direto pro site em vez de
   * abrir um case study. Quem tem `externalUrl` não tem `detailSlug`.
   */
  externalUrl?: string
  /** Sites feitos só pra celular — o card avisa antes de abrir. */
  mobileOnly?: boolean
  /** Escondido das listas (grade, "explore mais", celular); a página do case continua existindo. */
  hidden?: boolean
}

// Os dois primeiros são os projetos mais recentes e completos (produto
// desenhado e construído de ponta a ponta), em destaque de propósito.
export const allProjects: Project[] = [
  { image: imgEssencialPerfumaria, hoverImage: imgEssencialPerfumariaPainel, title: 'Essencial Perfumaria', categoryKey: 'ux-ui-design', kinds: ['website', 'dashboard', 'ecommerce'], externalUrl: 'https://essencial-perfumaria.vercel.app' },
  { image: imgCatalogoThaysa, hoverImage: imgCatalogoThaysaInicio, title: 'Catálogo Thaysa Ribeiro', categoryKey: 'ux-ui-design', kinds: ['app'], externalUrl: 'https://catalogo-thaysa.vercel.app', mobileOnly: true },
  { image: imgAtelieDiane, title: 'Ateliê Diane Almeida', categoryKey: 'ux-ui-design', kinds: ['website', 'dashboard'], detailSlug: 'atelie-diane-almeida-ui', hidden: true },
  { image: imgGestaoConecta360, hoverImage: imgGestaoConecta360Detalhe, title: 'Gestão Conecta 360º', categoryKey: 'ux-ui-design', kinds: ['dashboard'], detailSlug: 'conecta-360-ux' },
  { image: imgUsfit, title: 'USFit', categoryKey: 'ux-ui-design', kinds: ['app'], detailSlug: 'usfit-home-dieta-ux', hidden: true },
  { image: imgCertify, hoverImage: imgCertifyModelos, title: 'Certify', categoryKey: 'ux-ui-design', kinds: ['dashboard'], detailSlug: 'certify-ux' },
  { image: imgJornadaJunior, hoverImage: imgJornadaJuniorDS, title: 'Jornada Júnior', categoryKey: 'ux-ui-design', kinds: ['website', 'dashboard'], detailSlug: 'jornada-junior-ux' },
  { image: imgLeanLearn, title: 'LeanLearn', categoryKey: 'ux-ui-design', kinds: ['website'], detailSlug: 'lean-learn-ui', hidden: true },
  { image: imgGestaoEasyCar, title: 'Gestão Easy Car', categoryKey: 'ux-ui-design', kinds: ['dashboard'], detailSlug: 'gestao-easy-car-ux', hidden: true },
  { image: imgRedesignNatva, title: 'Redesign Natva', categoryKey: 'ux-ui-design', kinds: ['website', 'ecommerce'], detailSlug: 'redesign-natva-ui', hidden: true },
  { image: imgMarionIa, title: 'Marion IA', categoryKey: 'ux-ui-design', kinds: ['app'], detailSlug: 'marion-ia-ui', hidden: true },
  { image: imgAsteraDataBank, hoverImage: imgAsteraDataBankBestiario, title: 'Astera Data Bank', categoryKey: 'ux-ui-design', kinds: ['website'], detailSlug: 'astera-data-bank-ui' },
  { image: imgResidentEvil, hoverImage: imgResidentEvilPersonagens, title: 'Resident Evil', categoryKey: 'ux-ui-design', kinds: ['website'], detailSlug: 'resident-evil-ui' },
  { image: imgDrakorysArcane, hoverImage: imgDrakorysArcanePersonagens, title: 'Drakorys Arcane', categoryKey: 'ux-ui-design', kinds: ['website'] },
  { image: imgIronBank, hoverImage: imgIronBankHome, title: 'Iron Bank', categoryKey: 'ux-ui-design', kinds: ['app'] },
  { image: imgRhRecruiter, hoverImage: imgRhRecruiterSite, title: 'RHRecruiter', categoryKey: 'ux-ui-design', kinds: ['website'], externalUrl: 'https://rhrecruiter.com.br' },
  { image: imgCrimson, hoverImage: imgCrimsonExperiencia, title: 'Crimson Mind Tech', categoryKey: 'ux-ui-design', kinds: ['website'], externalUrl: 'https://felipe-s-oliver.vercel.app' },
  { image: imgAura, hoverImage: imgAuraHome, title: 'Aura', categoryKey: 'ux-ui-design', kinds: ['app', 'ecommerce'] },
]

// Lista que o site mostra: tira os projetos escondidos. `allProjects` segue
// completa (rotas dos cases, SEO e cor da moldura dependem dela).
export const visibleProjects: Project[] = allProjects.filter(p => !p.hidden)
