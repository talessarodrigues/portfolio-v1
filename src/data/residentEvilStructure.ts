import type { DetailBlockShape } from './conecta360Structure'

import imgBlock02 from '../assets/projetos/detalhe-resident-evil/block-02.webp'
import imgBlock06 from '../assets/projetos/detalhe-resident-evil/block-06.webp'
import imgGalleryFinal1 from '../assets/projetos/detalhe-resident-evil/gallery-final-1.webp'
import imgGalleryFinal2 from '../assets/projetos/detalhe-resident-evil/gallery-final-2.webp'
import imgGalleryFinal3 from '../assets/projetos/detalhe-resident-evil/gallery-final-3.webp'

// Esse case não tem o bloco de header grande (ícone+título+banner) no
// Figma — vai direto dos cards de meta pro conteúdo.
export const residentEvilHeaderImages = null

export const residentEvilGallery = [imgGalleryFinal1, imgGalleryFinal2, imgGalleryFinal3]

export const residentEvilBlockShapes: DetailBlockShape[] = [
  { type: 'h3' },
  { type: 'p' },
  { type: 'image', src: imgBlock02 },
  { type: 'quote' },
  { type: 'h3' },
  { type: 'p' },
  { type: 'image', src: imgBlock06 },
  { type: 'quote' },
  { type: 'h3' },
  { type: 'p' },
]
