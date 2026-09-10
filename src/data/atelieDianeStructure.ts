import type { DetailBlockShape } from './conecta360Structure'

import imgBlock01 from '../assets/projetos/detalhe-atelie-diane/block-01.webp'
import imgBlock02 from '../assets/projetos/detalhe-atelie-diane/block-02.webp'
import imgBlock03 from '../assets/projetos/detalhe-atelie-diane/block-03.webp'
import imgBlock04 from '../assets/projetos/detalhe-atelie-diane/block-04.webp'
import imgBlock05 from '../assets/projetos/detalhe-atelie-diane/block-05.webp'

import imgGalleryFinal1 from '../assets/projetos/detalhe-atelie-diane/gallery-final-1.webp'

export const atelieDianeHeaderImages = null

export const atelieDianeGallery = [imgGalleryFinal1]

export const atelieDianeBlockShapes: DetailBlockShape[] = [
  { type: 'h3' },
  { type: 'p' },
  { type: 'image', src: imgBlock01 },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock02 },
  { type: 'quote' },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock03 },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock04 },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock05 },
  { type: 'h2' },
  { type: 'p' },
]
