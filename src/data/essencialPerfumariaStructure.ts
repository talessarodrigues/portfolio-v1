import type { DetailBlockShape } from './conecta360Structure'

import imgSiteHome from '../assets/projetos/detalhe-essencial-perfumaria/site-home.webp'
import imgSiteSobre from '../assets/projetos/detalhe-essencial-perfumaria/site-sobre.webp'
import imgSiteServicos from '../assets/projetos/detalhe-essencial-perfumaria/site-servicos.webp'
import imgCatalogoDestaques from '../assets/projetos/detalhe-essencial-perfumaria/catalogo-destaques.webp'
import imgCatalogoFiltros from '../assets/projetos/detalhe-essencial-perfumaria/catalogo-filtros.webp'
import imgMobile from '../assets/projetos/detalhe-essencial-perfumaria/mobile.webp'
import imgPainelEscuro from '../assets/projetos/detalhe-essencial-perfumaria/painel-escuro.webp'
import imgNovaVenda from '../assets/projetos/detalhe-essencial-perfumaria/nova-venda.webp'
import imgFinanceiro from '../assets/projetos/detalhe-essencial-perfumaria/financeiro.webp'

// O vídeo fica em public/ (e não em assets/) pra não entrar no bundle:
// são 3 MB que só carregam quando alguém abre o case.
const VIDEO = '/videos/essencial-perfumaria.mp4'
const VIDEO_POSTER = '/videos/essencial-perfumaria-poster.webp'

export const essencialPerfumariaHeaderImages = null

export const essencialPerfumariaGallery: string[] = []

// As telas do site com produtos e as do painel são quadros do vídeo de
// apresentação (dados de demonstração); Início, Sobre e Salão são
// capturas do site no ar, que ainda está com a vitrine sendo montada.
export const essencialPerfumariaBlockShapes: DetailBlockShape[] = [
  { type: 'h3' },
  { type: 'p' },
  { type: 'video', src: VIDEO, poster: VIDEO_POSTER },
  { type: 'h2' },
  { type: 'p' },
  { type: 'quote' },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgSiteHome },
  { type: 'gallery2', src: [imgCatalogoDestaques, imgCatalogoFiltros] },
  { type: 'gallery2', src: [imgSiteSobre, imgSiteServicos] },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgMobile },
  { type: 'h2' },
  { type: 'p' },
  { type: 'list' },
  { type: 'image', src: imgPainelEscuro },
  { type: 'gallery2', src: [imgNovaVenda, imgFinanceiro] },
  { type: 'h2' },
  { type: 'p' },
  // Teste com usuários: o que foi testado, o que apareceu e o porquê.
  { type: 'h2' },
  { type: 'p' },
  { type: 'list' },
  { type: 'quote' },
  { type: 'h2' },
  { type: 'p' },
]
