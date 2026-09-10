import type { DetailBlockShape } from './conecta360Structure'

import imgBlock01 from '../assets/projetos/detalhe-marion-ia/block-01.webp'
import imgBlock02 from '../assets/projetos/detalhe-marion-ia/block-02.webp'

export const marionIaHeaderImages = null

// As duas telas (light e dark) já aparecem lado a lado no conteúdo — o
// case não repete elas numa galeria final.
export const marionIaGallery: string[] = []

export const marionIaBlockShapes: DetailBlockShape[] = [
  { type: 'h3' },
  { type: 'p' },
  { type: 'gallery2', src: [imgBlock01, imgBlock02] },
  { type: 'quote' },
  { type: 'h2' },
  { type: 'p' },
]
