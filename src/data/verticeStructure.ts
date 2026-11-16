import type { DetailBlockShape } from './conecta360Structure'

// O case do Vértice foi montado no Figma como uma página longa de 24 módulos
// (capa, produto, problema, processo, pesquisa, telas, design system, plano de
// testes, resultados esperados, o que ficou de fora). Cada módulo é um recorte
// da página "Case Study — Portfólio" do arquivo "Case Investimentos" (a lista
// de IDs está em behance/vertice/), e a página os empilha em sequência, na
// ordem do arquivo (m01, m02, ...).
const modules = import.meta.glob('../assets/projetos/detalhe-vertice/m*.webp', { eager: true, import: 'default' }) as Record<string, string>

export const verticeModules: string[] = Object.keys(modules)
  .sort()
  .map(path => modules[path])

// Altura de cada quadro (todos têm 1400 de largura): reserva o espaço antes da
// imagem carregar, para a página não pular enquanto as imagens chegam.
export const verticeModuleHeights: number[] = [
  788, 788, 692, 786, 940, 825, 526, 763, 975, 2149, 1060, 1100,
  1130, 1159, 1093, 1099, 557, 1781, 725, 995, 864, 692, 617, 788,
]

// Os dois vídeos de motion vêm das animações nativas do Figma (página "Motion —
// Apresentação"). O deck de cartões é curto e toca em loop, então serve de
// capa; a apresentação (cerca de 40 s) entra logo depois do hero do produto.
export const verticeCoverVideo = {
  src: '/videos/vertice-deck.mp4',
  poster: '/videos/vertice-deck-poster.webp',
  width: 1280,
  height: 720,
}

export const verticeVideos = [
  {
    after: 2,
    src: '/videos/vertice-apresentacao.mp4',
    poster: '/videos/vertice-apresentacao-poster.webp',
    width: 1024,
    height: 576,
  },
]

export const verticeHeaderImages = null
export const verticeGallery: string[] = []
export const verticeBlockShapes: DetailBlockShape[] = []
