import type { DetailBlockShape } from './conecta360Structure'

import imgInicio from '../assets/projetos/detalhe-meu-caixa/inicio.webp'
import imgNovaVenda from '../assets/projetos/detalhe-meu-caixa/nova-venda.webp'
import imgCaixa from '../assets/projetos/detalhe-meu-caixa/caixa.webp'
import imgSupervisao from '../assets/projetos/detalhe-meu-caixa/supervisao.webp'
import imgBackup from '../assets/projetos/detalhe-meu-caixa/backup.webp'
import imgGuiaEstilo from '../assets/projetos/detalhe-meu-caixa/guia-estilo.webp'

// O vídeo fica em public/ (fora do bundle), como o da Essencial: só carrega
// quando alguém abre o case. É a gravação do sistema rodando, recortada.
const VIDEO = '/videos/meu-caixa.mp4'
const VIDEO_POSTER = '/videos/meu-caixa-poster.webp'

export const meuCaixaHeaderImages = null

export const meuCaixaGallery: string[] = []

// As telas são quadros da gravação do sistema, sem movimentação (os estados
// vazios fazem parte do design).
export const meuCaixaBlockShapes: DetailBlockShape[] = [
  { type: 'h3' },
  { type: 'p' },
  { type: 'video', src: VIDEO, poster: VIDEO_POSTER },
  { type: 'h2' },
  { type: 'p' },
  { type: 'quote' },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgInicio },
  { type: 'image', src: imgNovaVenda },
  { type: 'h2' },
  { type: 'p' },
  { type: 'list' },
  { type: 'image', src: imgCaixa },
  { type: 'image', src: imgSupervisao },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgBackup },
  { type: 'h2' },
  { type: 'p' },
  { type: 'image', src: imgGuiaEstilo },
  { type: 'h2' },
  { type: 'p' },
]
