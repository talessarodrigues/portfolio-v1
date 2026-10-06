import type { Dictionary } from './types'

// Título e descrição de cada página do desktop. Uma função só para os dois
// lados: o Site aplica no navegador (aba, troca de idioma) e o build grava
// no HTML estático de cada rota (ver seoPages em vite.config.ts), que é o
// que o Google, o WhatsApp e o LinkedIn leem.
//
// Este arquivo não pode importar imagens nem componentes: o vite.config
// carrega ele direto no Node.

const NOME = 'Talessa Rodrigues'

export interface PageSeo {
  title: string
  description: string
}

export function caseSeo(t: Dictionary, project: { title: string; categoryKey: keyof Dictionary['categories'] }): PageSeo {
  const rotulo = t.site.seoCase.replace('{categoria}', t.categories[project.categoryKey])
  return {
    title: `${project.title} · ${rotulo} | ${NOME}`,
    description: t.projects[project.title]?.description ?? t.site.bio,
  }
}

export function sobreSeo(t: Dictionary): PageSeo {
  return { title: `${t.site.sobreTitulo} | ${NOME}`, description: t.site.seoSobre }
}
