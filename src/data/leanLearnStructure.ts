import type { DetailBlockShape } from './conecta360Structure'

import imgBlock01 from '../assets/projetos/detalhe-lean-learn/block-01.webp'
import imgBlock02 from '../assets/projetos/detalhe-lean-learn/block-02.webp'
import imgBlock03 from '../assets/projetos/detalhe-lean-learn/block-03.webp'
import imgBlock04 from '../assets/projetos/detalhe-lean-learn/block-04.webp'
import imgBlock05 from '../assets/projetos/detalhe-lean-learn/block-05.webp'
import imgBlock06 from '../assets/projetos/detalhe-lean-learn/block-06.webp'
import imgBlock07 from '../assets/projetos/detalhe-lean-learn/block-07.webp'
import imgBlock08 from '../assets/projetos/detalhe-lean-learn/block-08.webp'

import imgGalleryFinal1 from '../assets/projetos/detalhe-lean-learn/gallery-final-1.webp'

export const leanLearnHeaderImages = null

export const leanLearnGallery = [imgGalleryFinal1]

export const leanLearnBlockShapes: DetailBlockShape[] = [
  { type: 'h3' },
  { type: 'p' },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock01 },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock02 },
  { type: 'quote' },
  { type: 'h2' },
  { type: 'p' },
  { type: 'gallery2', src: [imgBlock03, imgBlock04] },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock05 },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock06 },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock07 },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock08 },
  { type: 'h2' },
  { type: 'p' },
]
