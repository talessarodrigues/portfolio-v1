import type { DetailBlockShape } from './conecta360Structure'

import imgBlock01 from '../assets/projetos/detalhe-certify/block-01.webp'
import imgBlock02 from '../assets/projetos/detalhe-certify/block-02.webp'
import imgBlock03 from '../assets/projetos/detalhe-certify/block-03.webp'
import imgBlock04 from '../assets/projetos/detalhe-certify/block-04.webp'
import imgBlock05 from '../assets/projetos/detalhe-certify/block-05.webp'
import imgBlock06 from '../assets/projetos/detalhe-certify/block-06.webp'
import imgBlock07 from '../assets/projetos/detalhe-certify/block-07.webp'
import imgBlock08 from '../assets/projetos/detalhe-certify/block-08.webp'
import imgBlock09 from '../assets/projetos/detalhe-certify/block-09.webp'
import imgBlock10 from '../assets/projetos/detalhe-certify/block-10.webp'
import imgBlock11 from '../assets/projetos/detalhe-certify/block-11.webp'
import imgBlock12 from '../assets/projetos/detalhe-certify/block-12.webp'
import imgBlock13 from '../assets/projetos/detalhe-certify/block-13.webp'
import imgBlock14 from '../assets/projetos/detalhe-certify/block-14.webp'
import imgBlock15 from '../assets/projetos/detalhe-certify/block-15.webp'
import imgBlock16 from '../assets/projetos/detalhe-certify/block-16.webp'
import imgBlock17 from '../assets/projetos/detalhe-certify/block-17.webp'

import imgGalleryFinal1 from '../assets/projetos/detalhe-certify/gallery-final-1.webp'
import imgGalleryFinal2 from '../assets/projetos/detalhe-certify/gallery-final-2.webp'

// Case ainda em andamento (sprint 7) — não tem o header grande com
// ícone+banner, vai direto dos cards de meta pro conteúdo.
export const certifyHeaderImages = null

export const certifyGallery = [imgGalleryFinal1, imgGalleryFinal2]

export const certifyBlockShapes: DetailBlockShape[] = [
  { type: 'h3' },
  { type: 'p' },
  { type: 'h2' },
  { type: 'p' },
  { type: 'gallery2', src: [imgBlock01, imgBlock02] },
  { type: 'quote' },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock03 },
  { type: 'image', src: imgBlock04 },
  { type: 'image', src: imgBlock05 },
  { type: 'quote' },
  { type: 'image', src: imgBlock06 },
  { type: 'image', src: imgBlock07 },
  { type: 'image', src: imgBlock08 },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock09 },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock10 },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock11 },
  { type: 'p' },
  { type: 'image', src: imgBlock12 },
  { type: 'image', src: imgBlock13 },
  { type: 'image', src: imgBlock14 },
  { type: 'quote' },
  { type: 'h2' },
  { type: 'p' },
  { type: 'gallery2', src: [imgBlock15, imgBlock16] },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock17 },
  { type: 'h2' },
  { type: 'p' },
]
