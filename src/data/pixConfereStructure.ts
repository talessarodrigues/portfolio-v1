import type { DetailBlockShape } from './conecta360Structure'

// O case do Pix Confere é uma página longa de 21 módulos montada no Figma
// (arquivo "Fraudes no Pix e WhatsApp", página "11 · Case Study — Portfólio").
// Cada módulo é um recorte do quadro mestre, em ordem (m01, m02, ...). Os
// originais em PNG ficam em behance/pix-confere/figma/.
const modules = import.meta.glob('../assets/projetos/detalhe-pix-confere/m*.webp', { eager: true, import: 'default' }) as Record<string, string>

export const pixConfereModules: string[] = Object.keys(modules)
  .sort()
  .map(path => modules[path])

// Altura de cada módulo na largura de 1400 (reserva o espaço antes da imagem
// carregar, para a página não pular).
export const pixConfereModuleHeights: number[] = [
  1000, 663, 955, 1187, 896, 1352, 737, 1445, 857, 1026, 1068, 1087,
  1254, 1201, 1911, 1114, 876, 1379, 547, 353, 760,
]

// O motion explicativo (42 s, exportado das animações nativas do Figma) entra
// logo depois do módulo 20, que é a abertura dele.
export const pixConfereVideos = [
  {
    after: 20,
    src: '/videos/pix-confere-motion.mp4',
    poster: '/videos/pix-confere-motion-poster.webp',
    width: 1024,
    height: 576,
  },
]

export const pixConfereHeaderImages = null
export const pixConfereGallery: string[] = []
export const pixConfereBlockShapes: DetailBlockShape[] = []
