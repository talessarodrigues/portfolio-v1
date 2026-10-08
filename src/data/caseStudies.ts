import type { CaseStudyText, Dictionary } from '../i18n/types'

type CaseDictKey = { [K in keyof Dictionary]: Dictionary[K] extends CaseStudyText ? K : never }[keyof Dictionary]
import type { DetailBlockShape } from './conecta360Structure'
import { conecta360HeaderImages, conecta360Gallery, conecta360BlockShapes } from './conecta360Structure'
import { jornadaJuniorHeaderImages, jornadaJuniorGallery, jornadaJuniorBlockShapes } from './jornadaJuniorStructure'
import { certifyHeaderImages, certifyGallery, certifyBlockShapes } from './certifyStructure'
import { leanLearnHeaderImages, leanLearnGallery, leanLearnBlockShapes } from './leanLearnStructure'
import { atelieDianeHeaderImages, atelieDianeGallery, atelieDianeBlockShapes } from './atelieDianeStructure'
import { marionIaHeaderImages, marionIaGallery, marionIaBlockShapes } from './marionIaStructure'
import { gestaoEasyCarHeaderImages, gestaoEasyCarGallery, gestaoEasyCarBlockShapes } from './gestaoEasyCarStructure'
import { usfitHeaderImages, usfitGallery, usfitBlockShapes } from './usfitStructure'
import { essencialPerfumariaHeaderImages, essencialPerfumariaGallery, essencialPerfumariaBlockShapes } from './essencialPerfumariaStructure'
import { residentEvilHeaderImages, residentEvilGallery, residentEvilBlockShapes } from './residentEvilStructure'
import { redesignNatvaHeaderImages, redesignNatvaGallery, redesignNatvaBlockShapes } from './redesignNatvaStructure'
import { drakorysArcaneHeaderImages, drakorysArcaneGallery, drakorysArcaneBlockShapes } from './drakorysArcaneStructure'
import { asteraDataBankHeaderImages, asteraDataBankGallery, asteraDataBankBlockShapes } from './asteraDataBankStructure'
import { ironBankHeaderImages, ironBankGallery, ironBankBlockShapes } from './ironBankStructure'

// Registro de detalhamentos disponíveis — cada entrada casa a estrutura
// (imagens + tipo do bloco, mesma para todo idioma) com a chave do
// dicionário que traz o texto (t.conecta360 / t.jornadaJunior).
export const detailRegistry = {
  'essencial-perfumaria': {
    headerImages: essencialPerfumariaHeaderImages,
    gallery: essencialPerfumariaGallery,
    blockShapes: essencialPerfumariaBlockShapes,
    dictKey: 'essencialPerfumaria' as const,
    protoUrl: 'https://essencial-perfumaria.vercel.app',
  },
  'conecta-360-ux': {
    headerImages: conecta360HeaderImages,
    gallery: conecta360Gallery,
    blockShapes: conecta360BlockShapes,
    dictKey: 'conecta360' as const,
  },
  'jornada-junior-ux': {
    headerImages: jornadaJuniorHeaderImages,
    gallery: jornadaJuniorGallery,
    blockShapes: jornadaJuniorBlockShapes,
    dictKey: 'jornadaJunior' as const,
  },
  'certify-ux': {
    headerImages: certifyHeaderImages,
    gallery: certifyGallery,
    blockShapes: certifyBlockShapes,
    dictKey: 'certify' as const,
  },
  'lean-learn-ui': {
    headerImages: leanLearnHeaderImages,
    gallery: leanLearnGallery,
    blockShapes: leanLearnBlockShapes,
    dictKey: 'leanLearn' as const,
  },
  'atelie-diane-almeida-ui': {
    headerImages: atelieDianeHeaderImages,
    gallery: atelieDianeGallery,
    blockShapes: atelieDianeBlockShapes,
    dictKey: 'atelieDiane' as const,
    protoUrl: 'https://atelie-diane-almeida.vercel.app',
  },
  'marion-ia-ui': {
    headerImages: marionIaHeaderImages,
    gallery: marionIaGallery,
    blockShapes: marionIaBlockShapes,
    dictKey: 'marionIa' as const,
  },
  'gestao-easy-car-ux': {
    headerImages: gestaoEasyCarHeaderImages,
    gallery: gestaoEasyCarGallery,
    blockShapes: gestaoEasyCarBlockShapes,
    dictKey: 'gestaoEasyCar' as const,
  },
  'usfit-home-dieta-ux': {
    headerImages: usfitHeaderImages,
    gallery: usfitGallery,
    blockShapes: usfitBlockShapes,
    dictKey: 'usfit' as const,
  },
  'resident-evil-ui': {
    headerImages: residentEvilHeaderImages,
    gallery: residentEvilGallery,
    blockShapes: residentEvilBlockShapes,
    dictKey: 'residentEvil' as const,
  },
  'redesign-natva-ui': {
    headerImages: redesignNatvaHeaderImages,
    gallery: redesignNatvaGallery,
    blockShapes: redesignNatvaBlockShapes,
    dictKey: 'redesignNatva' as const,
  },
  'drakorys-arcane-ui': {
    headerImages: drakorysArcaneHeaderImages,
    gallery: drakorysArcaneGallery,
    blockShapes: drakorysArcaneBlockShapes,
    dictKey: 'drakorysArcane' as const,
  },
  'astera-data-bank-ui': {
    headerImages: asteraDataBankHeaderImages,
    gallery: asteraDataBankGallery,
    blockShapes: asteraDataBankBlockShapes,
    dictKey: 'asteraDataBank' as const,
  },
  'iron-bank-ui': {
    headerImages: ironBankHeaderImages,
    gallery: ironBankGallery,
    blockShapes: ironBankBlockShapes,
    dictKey: 'ironBank' as const,
  },
}

export interface CaseEntry {
  headerImages: { icon: string; strip: string; hero: string } | null
  gallery: string[]
  blockShapes: DetailBlockShape[]
  dictKey: CaseDictKey
  protoUrl?: string
}

export function getCase(slug: string): CaseEntry | null {
  return (detailRegistry as Record<string, CaseEntry>)[slug] ?? null
}
