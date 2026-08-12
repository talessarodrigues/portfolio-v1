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

export type CategoryKey = 'ui-design' | 'branding' | 'ux-design'

// Título fica igual nos 3 idiomas (nome do projeto) — é a chave usada
// pra buscar description/tags traduzidos em t.projects[title].
export interface Project {
  image: string
  title: string
  categoryKey: CategoryKey
  detailSlug?: string
}

export const allProjects: Project[] = [
  { image: imgRedesignNatva, title: 'Redesign Natva', categoryKey: 'ui-design', detailSlug: 'redesign-natva-ui' },
  { image: imgResidentEvil, title: 'Resident Evil', categoryKey: 'ui-design', detailSlug: 'resident-evil-ui' },
  { image: imgDrakorysArcane, title: 'Drakorys Arcane', categoryKey: 'ui-design', detailSlug: 'drakorys-arcane-ui' },
  { image: imgAsteraDataBank, title: 'Astera Data Bank', categoryKey: 'ui-design', detailSlug: 'astera-data-bank-ui' },
  { image: imgIronBank, title: 'Iron Bank', categoryKey: 'ui-design', detailSlug: 'iron-bank-ui' },
  { image: imgOrchardTreasure, title: 'Orchard Treasure', categoryKey: 'ui-design', detailSlug: 'orchard-treasure-ui' },
  { image: imgConecta360, title: 'Conecta 360º', categoryKey: 'branding', detailSlug: 'conecta-360-branding' },
  { image: imgEasyCar, title: 'Easy Car', categoryKey: 'branding', detailSlug: 'easy-car-branding' },
  { image: imgVigimolVetores, title: 'Vigimol Vetores', categoryKey: 'branding', detailSlug: 'vigimol-vetores-branding' },
  { image: imgTalessaRodrigues, title: 'Talessa Rodrigues', categoryKey: 'branding', detailSlug: 'talessa-rodrigues-branding' },
  { image: imgCatchupTech, title: 'CatchUp Tech', categoryKey: 'branding', detailSlug: 'catchup-tech-branding' },
  { image: imgJornadasCorporativas, title: 'Jornadas Corporativas', categoryKey: 'branding', detailSlug: 'jornadas-corporativas-branding' },
  { image: imgGestaoEasyCar, title: 'Gestão Easy Car', categoryKey: 'ux-design' },
  { image: imgGestaoConecta360, title: 'Gestão Conecta 360º', categoryKey: 'ux-design', detailSlug: 'conecta-360-ux' },
  { image: imgJornadaJunior, title: 'Jornada Júnior', categoryKey: 'ux-design', detailSlug: 'jornada-junior-ux' },
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
