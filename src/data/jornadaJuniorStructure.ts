import type { DetailBlockShape } from './conecta360Structure'

import imgBlock02 from '../assets/projetos/detalhe-jornada-junior/block-02.webp'
import imgBlock05 from '../assets/projetos/detalhe-jornada-junior/block-05.webp'
import imgBlock07 from '../assets/projetos/detalhe-jornada-junior/block-07.webp'
import imgBlock11 from '../assets/projetos/detalhe-jornada-junior/block-11.webp'
import imgBlock150 from '../assets/projetos/detalhe-jornada-junior/block-15-0.webp'
import imgBlock151 from '../assets/projetos/detalhe-jornada-junior/block-15-1.webp'
import imgBlock160 from '../assets/projetos/detalhe-jornada-junior/block-16-0.webp'
import imgBlock161 from '../assets/projetos/detalhe-jornada-junior/block-16-1.webp'
import imgBlock170 from '../assets/projetos/detalhe-jornada-junior/block-17-0.webp'
import imgBlock171 from '../assets/projetos/detalhe-jornada-junior/block-17-1.webp'
import imgBlock180 from '../assets/projetos/detalhe-jornada-junior/block-18-0.webp'
import imgBlock181 from '../assets/projetos/detalhe-jornada-junior/block-18-1.webp'
import imgBlock190 from '../assets/projetos/detalhe-jornada-junior/block-19-0.webp'
import imgBlock191 from '../assets/projetos/detalhe-jornada-junior/block-19-1.webp'
import imgBlock200 from '../assets/projetos/detalhe-jornada-junior/block-20-0.webp'
import imgBlock201 from '../assets/projetos/detalhe-jornada-junior/block-20-1.webp'
import imgBlock210 from '../assets/projetos/detalhe-jornada-junior/block-21-0.webp'
import imgBlock211 from '../assets/projetos/detalhe-jornada-junior/block-21-1.webp'
import imgBlock220 from '../assets/projetos/detalhe-jornada-junior/block-22-0.webp'
import imgBlock221 from '../assets/projetos/detalhe-jornada-junior/block-22-1.webp'
import imgBlock25 from '../assets/projetos/detalhe-jornada-junior/block-25.webp'
import imgBlock29 from '../assets/projetos/detalhe-jornada-junior/block-29.webp'
import imgBlock310 from '../assets/projetos/detalhe-jornada-junior/block-31-0.webp'
import imgBlock311 from '../assets/projetos/detalhe-jornada-junior/block-31-1.webp'
import imgBlock320 from '../assets/projetos/detalhe-jornada-junior/block-32-0.webp'
import imgBlock321 from '../assets/projetos/detalhe-jornada-junior/block-32-1.webp'

import imgHeaderIcon from '../assets/projetos/detalhe-jornada-junior/header-icon.webp'
import imgHeaderStrip from '../assets/projetos/detalhe-jornada-junior/header-strip.webp'
import imgHeaderHero from '../assets/projetos/detalhe-jornada-junior/header-hero.webp'
import imgGalleryFinal1 from '../assets/projetos/detalhe-jornada-junior/gallery-final-1.webp'
import imgGalleryFinal2 from '../assets/projetos/detalhe-jornada-junior/gallery-final-2.webp'

export const jornadaJuniorHeaderImages = {
  icon: imgHeaderIcon,
  strip: imgHeaderStrip,
  hero: imgHeaderHero,
}

export const jornadaJuniorGallery = [imgGalleryFinal1, imgGalleryFinal2]

export const jornadaJuniorBlockShapes: DetailBlockShape[] = [
  { type: 'h3' },
  { type: 'p' },
  { type: 'image', src: imgBlock02 },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock05 },
  { type: 'quote' },
  { type: 'image', src: imgBlock07 },
  { type: 'quote' },
  { type: 'h3' },
  { type: 'p' },
  { type: 'image', src: imgBlock11 },
  { type: 'quote' },
  { type: 'h2' },
  { type: 'p' },
  { type: 'gallery2', src: [imgBlock150, imgBlock151] },
  { type: 'gallery2', src: [imgBlock160, imgBlock161] },
  { type: 'gallery2', src: [imgBlock170, imgBlock171] },
  { type: 'gallery2', src: [imgBlock180, imgBlock181] },
  { type: 'gallery2', src: [imgBlock190, imgBlock191] },
  { type: 'gallery2', src: [imgBlock200, imgBlock201] },
  { type: 'gallery2', src: [imgBlock210, imgBlock211] },
  { type: 'gallery2', src: [imgBlock220, imgBlock221] },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock25 },
  { type: 'quote' },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock29 },
  { type: 'quote' },
  { type: 'gallery2', src: [imgBlock310, imgBlock311] },
  { type: 'gallery2', src: [imgBlock320, imgBlock321] },
  { type: 'h2' },
  { type: 'p' },
]
