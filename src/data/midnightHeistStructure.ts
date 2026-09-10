import type { DetailBlockShape } from './conecta360Structure'

import imgBlock01 from '../assets/projetos/detalhe-midnight-heist/block-01.webp'
import imgBlock02 from '../assets/projetos/detalhe-midnight-heist/block-02.webp'
import imgBlock03 from '../assets/projetos/detalhe-midnight-heist/block-03.webp'
import imgBlock04 from '../assets/projetos/detalhe-midnight-heist/block-04.webp'
import imgBlock05 from '../assets/projetos/detalhe-midnight-heist/block-05.webp'
import imgBlock06 from '../assets/projetos/detalhe-midnight-heist/block-06.webp'
import imgBlock07 from '../assets/projetos/detalhe-midnight-heist/block-07.webp'
import imgBlock08 from '../assets/projetos/detalhe-midnight-heist/block-08.webp'
import imgBlock09 from '../assets/projetos/detalhe-midnight-heist/block-09.webp'
import imgBlock10 from '../assets/projetos/detalhe-midnight-heist/block-10.webp'
import imgBlock11 from '../assets/projetos/detalhe-midnight-heist/block-11.webp'
import imgBlock12 from '../assets/projetos/detalhe-midnight-heist/block-12.webp'
import imgBlock13 from '../assets/projetos/detalhe-midnight-heist/block-13.webp'
import imgBlock14 from '../assets/projetos/detalhe-midnight-heist/block-14.webp'
import imgBlock15 from '../assets/projetos/detalhe-midnight-heist/block-15.webp'

import imgGalleryFinal1 from '../assets/projetos/detalhe-midnight-heist/gallery-final-1.webp'

export const midnightHeistHeaderImages = null

export const midnightHeistGallery = [imgGalleryFinal1]

export const midnightHeistBlockShapes: DetailBlockShape[] = [
  { type: 'h3' },
  { type: 'p' },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock01 },
  { type: 'quote' },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock02 },
  { type: 'image', src: imgBlock03 },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock04 },
  { type: 'h2' },
  { type: 'p' },
  { type: 'gallery2', src: [imgBlock05, imgBlock06] },
  { type: 'h2' },
  { type: 'p' },
  { type: 'gallery2', src: [imgBlock07, imgBlock08] },
  { type: 'image', src: imgBlock09 },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock10 },
  { type: 'gallery2', src: [imgBlock11, imgBlock12] },
  { type: 'gallery2', src: [imgBlock13, imgBlock14] },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock15 },
  { type: 'h2' },
  { type: 'p' },
]
