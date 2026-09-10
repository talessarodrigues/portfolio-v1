import type { DetailBlockShape } from './conecta360Structure'

import imgBlock01 from '../assets/projetos/detalhe-social-match/block-01.webp'
import imgBlock02 from '../assets/projetos/detalhe-social-match/block-02.webp'
import imgBlock03 from '../assets/projetos/detalhe-social-match/block-03.webp'
import imgBlock04 from '../assets/projetos/detalhe-social-match/block-04.webp'

export const socialMatchHeaderImages = null

export const socialMatchGallery: string[] = []

export const socialMatchBlockShapes: DetailBlockShape[] = [
  { type: 'h3' },
  { type: 'p' },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock01 },
  { type: 'quote' },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock02 },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock03 },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock04 },
  { type: 'h2' },
  { type: 'p' },
]
