import imgBlock02 from '../assets/projetos/detalhe-conecta360/block-02.webp'
import imgBlock04 from '../assets/projetos/detalhe-conecta360/block-04.webp'
import imgBlock09 from '../assets/projetos/detalhe-conecta360/block-09.webp'
import imgBlock11 from '../assets/projetos/detalhe-conecta360/block-11.webp'
import imgBlock27 from '../assets/projetos/detalhe-conecta360/block-27.webp'
import imgBlock31 from '../assets/projetos/detalhe-conecta360/block-31.webp'
import imgBlock36 from '../assets/projetos/detalhe-conecta360/block-36.webp'
import imgBlock400 from '../assets/projetos/detalhe-conecta360/block-40-0.webp'
import imgBlock401 from '../assets/projetos/detalhe-conecta360/block-40-1.webp'
import imgBlock430 from '../assets/projetos/detalhe-conecta360/block-43-0.webp'
import imgBlock431 from '../assets/projetos/detalhe-conecta360/block-43-1.webp'
import imgBlock440 from '../assets/projetos/detalhe-conecta360/block-44-0.webp'
import imgBlock441 from '../assets/projetos/detalhe-conecta360/block-44-1.webp'
import imgBlock47 from '../assets/projetos/detalhe-conecta360/block-47.webp'
import imgBlock51 from '../assets/projetos/detalhe-conecta360/block-51.webp'
import imgBlock55 from '../assets/projetos/detalhe-conecta360/block-55.webp'
import imgBlock56 from '../assets/projetos/detalhe-conecta360/block-56.webp'
import imgBlock59 from '../assets/projetos/detalhe-conecta360/block-59.webp'
import imgBlock620 from '../assets/projetos/detalhe-conecta360/block-62-0.webp'
import imgBlock621 from '../assets/projetos/detalhe-conecta360/block-62-1.webp'
import imgBlock630 from '../assets/projetos/detalhe-conecta360/block-63-0.webp'
import imgBlock631 from '../assets/projetos/detalhe-conecta360/block-63-1.webp'
import imgBlock680 from '../assets/projetos/detalhe-conecta360/block-68-0.webp'
import imgBlock681 from '../assets/projetos/detalhe-conecta360/block-68-1.webp'

import imgHeaderIcon from '../assets/projetos/detalhe-conecta360/header-icon.webp'
import imgHeaderStrip from '../assets/projetos/detalhe-conecta360/header-strip.webp'
import imgHeaderHero from '../assets/projetos/detalhe-conecta360/header-hero.webp'
import imgGalleryFinal1 from '../assets/projetos/detalhe-conecta360/gallery-final-1.webp'
import imgGalleryFinal2 from '../assets/projetos/detalhe-conecta360/gallery-final-2.webp'
import imgGalleryFinal3 from '../assets/projetos/detalhe-conecta360/gallery-final-3.webp'

export const conecta360HeaderImages = {
  icon: imgHeaderIcon,
  strip: imgHeaderStrip,
  hero: imgHeaderHero,
}

export const conecta360Gallery = [imgGalleryFinal1, imgGalleryFinal2, imgGalleryFinal3]

export type DetailBlockShape =
  | { type: 'h2' | 'h3' | 'h4' | 'p' | 'quote' | 'list' }
  | { type: 'image'; src: string }
  | { type: 'gallery2'; src: [string, string] }

export const conecta360BlockShapes: DetailBlockShape[] = [
  { type: 'h3' },
  { type: 'p' },
  { type: 'image', src: imgBlock02 },
  { type: 'quote' },
  { type: 'image', src: imgBlock04 },
  { type: 'quote' },
  { type: 'h3' },
  { type: 'p' },
  { type: 'p' },
  { type: 'image', src: imgBlock09 },
  { type: 'quote' },
  { type: 'image', src: imgBlock11 },
  { type: 'quote' },
  { type: 'h4' },
  { type: 'p' },
  { type: 'h4' },
  { type: 'p' },
  { type: 'list' },
  { type: 'p' },
  { type: 'list' },
  { type: 'p' },
  { type: 'list' },
  { type: 'h4' },
  { type: 'p' },
  { type: 'list' },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock27 },
  { type: 'quote' },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock31 },
  { type: 'quote' },
  { type: 'h2' },
  { type: 'p' },
  { type: 'p' },
  { type: 'image', src: imgBlock36 },
  { type: 'quote' },
  { type: 'h4' },
  { type: 'p' },
  { type: 'gallery2', src: [imgBlock400, imgBlock401] },
  { type: 'h4' },
  { type: 'p' },
  { type: 'gallery2', src: [imgBlock430, imgBlock431] },
  { type: 'gallery2', src: [imgBlock440, imgBlock441] },
  { type: 'h4' },
  { type: 'p' },
  { type: 'image', src: imgBlock47 },
  { type: 'quote' },
  { type: 'h4' },
  { type: 'p' },
  { type: 'image', src: imgBlock51 },
  { type: 'quote' },
  { type: 'h4' },
  { type: 'p' },
  { type: 'image', src: imgBlock55 },
  { type: 'image', src: imgBlock56 },
  { type: 'h4' },
  { type: 'p' },
  { type: 'image', src: imgBlock59 },
  { type: 'h4' },
  { type: 'p' },
  { type: 'gallery2', src: [imgBlock620, imgBlock621] },
  { type: 'gallery2', src: [imgBlock630, imgBlock631] },
  { type: 'h2' },
  { type: 'p' },
  { type: 'h2' },
  { type: 'p' },
  { type: 'gallery2', src: [imgBlock680, imgBlock681] },
]
