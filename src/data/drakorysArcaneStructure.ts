import type { DetailBlockShape } from './conecta360Structure'

import imgBlock04 from '../assets/projetos/detalhe-drakorys-arcane/block-04.webp'
import imgGalleryFinal1 from '../assets/projetos/detalhe-drakorys-arcane/gallery-final-1.webp'
import imgGalleryFinal2 from '../assets/projetos/detalhe-drakorys-arcane/gallery-final-2.webp'
import imgGalleryFinal3 from '../assets/projetos/detalhe-drakorys-arcane/gallery-final-3.webp'

export const drakorysArcaneHeaderImages = null

export const drakorysArcaneGallery = [imgGalleryFinal1, imgGalleryFinal2, imgGalleryFinal3]

export const drakorysArcaneBlockShapes: DetailBlockShape[] = [
  { type: 'h3' },
  { type: 'p' },
  { type: 'h3' },
  { type: 'p' },
  { type: 'image', src: imgBlock04 },
  { type: 'quote' },
  { type: 'h3' },
  { type: 'p' },
  { type: 'h3' },
  { type: 'p' },
]
