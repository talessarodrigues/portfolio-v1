import type { DetailBlockShape } from './conecta360Structure'

// O case do Nexo foi montado no Figma como uma página longa de 25 módulos
// (capa, produto, problema, processo, pesquisa, telas, design system, testes,
// resultados). Cada módulo é um quadro exportado do Figma, e a página os
// empilha em sequência, na ordem do arquivo (m01, m02, ...).
const modules = import.meta.glob('../assets/projetos/detalhe-nexo/m*.webp', { eager: true, import: 'default' }) as Record<string, string>

export const nexoModules: string[] = Object.keys(modules)
  .sort()
  .map(path => modules[path])

// Altura de cada quadro (todos têm 1400 de largura): reserva o espaço antes da
// imagem carregar, para a página não pular enquanto as imagens chegam.
export const nexoModuleHeights: number[] = [
  788, 788, 1000, 788, 1180, 1280, 1080, 930, 1100, 1060, 1800, 1330, 1330,
  1330, 1330, 1330, 1330, 1060, 1180, 1240, 1060, 1180, 1100, 876, 788,
]

export const nexoHeaderImages = null
export const nexoGallery: string[] = []
export const nexoBlockShapes: DetailBlockShape[] = []
