import type { DetailBlockShape } from './conecta360Structure'

import imgGalleryFinal1 from '../assets/projetos/detalhe-catchup-tech/gallery-final-1.webp'
import imgGalleryFinal2 from '../assets/projetos/detalhe-catchup-tech/gallery-final-2.webp'
import imgGalleryFinal3 from '../assets/projetos/detalhe-catchup-tech/gallery-final-3.webp'
import imgGalleryFinal4 from '../assets/projetos/detalhe-catchup-tech/gallery-final-4.webp'
import imgGalleryFinal5 from '../assets/projetos/detalhe-catchup-tech/gallery-final-5.webp'
import imgGalleryFinal6 from '../assets/projetos/detalhe-catchup-tech/gallery-final-6.webp'
import imgGalleryFinal7 from '../assets/projetos/detalhe-catchup-tech/gallery-final-7.webp'
import imgGalleryFinal8 from '../assets/projetos/detalhe-catchup-tech/gallery-final-8.webp'
import imgGalleryFinal9 from '../assets/projetos/detalhe-catchup-tech/gallery-final-9.webp'
import imgGalleryFinal10 from '../assets/projetos/detalhe-catchup-tech/gallery-final-10.webp'

export const catchupTechHeaderImages = null

export const catchupTechGallery = [
  imgGalleryFinal1, imgGalleryFinal2, imgGalleryFinal3, imgGalleryFinal4, imgGalleryFinal5,
  imgGalleryFinal6, imgGalleryFinal7, imgGalleryFinal8, imgGalleryFinal9, imgGalleryFinal10,
]

// Sem bloco de "Visão geral" — o Figma reaproveita o texto da Easy Car
// nesse case, então por pedido da Talessa essa página fica só com
// cards + galeria até ela escrever o texto real.
export const catchupTechBlockShapes: DetailBlockShape[] = []
