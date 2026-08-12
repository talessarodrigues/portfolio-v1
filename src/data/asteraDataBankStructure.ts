import type { DetailBlockShape } from './conecta360Structure'

import imgBlock02 from '../assets/projetos/detalhe-astera-data-bank/block-02.webp'
import imgBlock04 from '../assets/projetos/detalhe-astera-data-bank/block-04.webp'
import imgGalleryFinal1 from '../assets/projetos/detalhe-astera-data-bank/gallery-final-1.webp'
import imgGalleryFinal2 from '../assets/projetos/detalhe-astera-data-bank/gallery-final-2.webp'
import imgGalleryFinal3 from '../assets/projetos/detalhe-astera-data-bank/gallery-final-3.webp'
import imgGalleryFinal4 from '../assets/projetos/detalhe-astera-data-bank/gallery-final-4.webp'
import imgGalleryFinal5 from '../assets/projetos/detalhe-astera-data-bank/gallery-final-5.webp'
import imgGalleryFinal6 from '../assets/projetos/detalhe-astera-data-bank/gallery-final-6.webp'
import imgGalleryFinal7 from '../assets/projetos/detalhe-astera-data-bank/gallery-final-7.webp'
import imgGalleryFinal8 from '../assets/projetos/detalhe-astera-data-bank/gallery-final-8.webp'

export const asteraDataBankHeaderImages = null

export const asteraDataBankGallery = [
  imgGalleryFinal1, imgGalleryFinal2, imgGalleryFinal3, imgGalleryFinal4,
  imgGalleryFinal5, imgGalleryFinal6, imgGalleryFinal7, imgGalleryFinal8,
]

export const asteraDataBankBlockShapes: DetailBlockShape[] = [
  { type: 'h3' },
  { type: 'p' },
  { type: 'image', src: imgBlock02 },
  { type: 'quote' },
  { type: 'image', src: imgBlock04 },
  { type: 'quote' },
]
