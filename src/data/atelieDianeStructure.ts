import type { DetailBlockShape } from './conecta360Structure'

import imgBlock02 from '../assets/projetos/detalhe-atelie-diane/block-02.webp'
import imgBlock03 from '../assets/projetos/detalhe-atelie-diane/block-03.webp'
import imgBlock04 from '../assets/projetos/detalhe-atelie-diane/block-04.webp'
import imgBlock05 from '../assets/projetos/detalhe-atelie-diane/block-05.webp'
import imgProcesso from '../assets/projetos/detalhe-atelie-diane/processo.webp'
import imgReferenciaPainel from '../assets/projetos/detalhe-atelie-diane/referencia-painel.webp'
import imgPainel from '../assets/projetos/detalhe-atelie-diane/painel.webp'
import imgCatalogos from '../assets/projetos/detalhe-atelie-diane/catalogos.webp'
import imgAgenda from '../assets/projetos/detalhe-atelie-diane/agenda.webp'
import imgFinanceiro from '../assets/projetos/detalhe-atelie-diane/financeiro.webp'
import imgAlugueis from '../assets/projetos/detalhe-atelie-diane/alugueis.webp'
import imgMobileSite from '../assets/projetos/detalhe-atelie-diane/mobile-site.webp'
import imgMobilePainel from '../assets/projetos/detalhe-atelie-diane/mobile-painel.webp'

import imgGalleryFinal1 from '../assets/projetos/detalhe-atelie-diane/gallery-final-1.webp'

// Vídeo em public/ (fora do bundle), como o da Essencial.
const VIDEO = '/videos/atelie-diane-almeida.mp4'
const VIDEO_POSTER = '/videos/atelie-diane-almeida-poster.webp'

export const atelieDianeHeaderImages = null

export const atelieDianeGallery = [imgGalleryFinal1]

// As telas do painel, do celular e o "referência → resultado" são quadros
// do vídeo de apresentação; as do site (block-02 a 05) vêm do Figma.
export const atelieDianeBlockShapes: DetailBlockShape[] = [
  { type: 'h3' },
  { type: 'p' },
  { type: 'video', src: VIDEO, poster: VIDEO_POSTER },
  // O desafio
  { type: 'h2' },
  { type: 'p' },
  { type: 'quote' },
  // Do rascunho ao pixel final
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgProcesso },
  { type: 'gallery2', src: [imgReferenciaPainel, imgPainel] },
  // Site: home, quem faz, prova social, atendimento
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock02 },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock03 },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock04 },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBlock05 },
  // No celular
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgMobileSite },
  // O painel
  { type: 'h2' },
  { type: 'p' },
  { type: 'list' },
  { type: 'gallery2', src: [imgCatalogos, imgAgenda] },
  // Financeiro e aluguéis
  { type: 'h2' },
  { type: 'p' },
  { type: 'gallery2', src: [imgFinanceiro, imgAlugueis] },
  { type: 'image', src: imgMobilePainel },
  // Teste com usuários na loja
  { type: 'h2' },
  { type: 'p' },
  { type: 'list' },
  { type: 'quote' },
  // O que ficou
  { type: 'h2' },
  { type: 'p' },
]
