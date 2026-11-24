import type { DetailBlockShape } from './conecta360Structure'

// O case do RHDPeople (landing page do RHRecruiter Labs, feito em equipe com
// Anne Gabrielle e Herllison Jociel) é uma página longa de 20 módulos montada
// no Figma (arquivo "RHLabs", página "Case · LABS UX"). Cada módulo é um
// recorte do quadro "Case · RHDPeople Landing Page", em ordem (m01, m02, ...).
// Os originais em PNG ficam em behance/labs/figma/.
const modules = import.meta.glob('../assets/projetos/detalhe-rhdpeople/m*.webp', { eager: true, import: 'default' }) as Record<string, string>

export const rhdpeopleModules: string[] = Object.keys(modules)
  .sort()
  .map(path => modules[path])

// Altura de cada módulo na largura de 1400: reserva o espaço antes da imagem
// carregar, para a página não pular enquanto as imagens chegam.
export const rhdpeopleModuleHeights: number[] = [
  1484, 1047, 924, 868, 887, 1833, 975, 1102, 852, 1558, 2138, 959,
  2342, 1545, 1764, 1098, 5262, 624, 975, 324,
]

export const rhdpeopleHeaderImages = null
export const rhdpeopleGallery: string[] = []
export const rhdpeopleBlockShapes: DetailBlockShape[] = []
