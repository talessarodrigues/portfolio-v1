import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
// O site abre em inglês para todo mundo, então o HTML estático (o que
// buscadores e prévias de link leem) também sai em inglês.
import { en } from './src/i18n/dictionary.en'
import { caseSeo, sobreSeo } from './src/i18n/seo'
import { readProjects } from './scripts/projects-meta.mjs'
import { caseAlts } from './src/data/caseAlts'

const SITE = 'https://www.talessarodriguesdesign.com.br'

const attr = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// Troca uma tag do index.html que precisa existir exatamente uma vez — se
// alguém mexer no <head> e a tag sumir, o build falha em vez de publicar
// um case com a prévia da home.
function swap(html: string, pattern: RegExp, replacement: string) {
  const hits = html.match(new RegExp(pattern.source, 'g'))?.length ?? 0
  if (hits !== 1) throw new Error(`seoPages: esperava 1 ocorrência de ${pattern}, achei ${hits}`)
  return html.replace(pattern, replacement)
}

interface SeoPage {
  path: string
  title: string
  description: string
  image: string
  imageAlt: string
  type: 'website' | 'article'
  /** Título e resumo em texto, no HTML estático (a SPA troca isso ao carregar). */
  heading?: string
  /** Um item por módulo do case, para quem lê o HTML sem rodar JavaScript. */
  outline?: string[]
}

// Conteúdo mínimo dentro de <div id="root">: buscadores que não rodam
// JavaScript, prévias de link e leitores de IA veem título, resumo e a lista
// dos módulos do case em vez de uma página vazia. O React troca tudo isto
// assim que o site carrega.
function staticContent(page: SeoPage) {
  if (!page.heading) return ''
  const itens = (page.outline ?? []).map(t => `<li>${attr(t)}</li>`).join('')
  return `<main style="max-width:760px;margin:0 auto;padding:32px 24px;font-family:system-ui,sans-serif;color:#f4f2fa">` +
    `<h1>${attr(page.heading)}</h1><p>${attr(page.description)}</p>` +
    `<p>By <a href="${SITE}/" style="color:inherit">Talessa Rodrigues</a>, Product Designer &amp; AI Engineer.</p>` +
    (itens ? `<h2>Case study outline</h2><ol>${itens}</ol>` : '') +
    `</main>`
}

function renderPage(base: string, page: SeoPage) {
  const url = `${SITE}${page.path}`
  const meta = (key: 'name' | 'property', name: string, value: string) =>
    [new RegExp(`<meta ${key}="${name}" content="[^"]*" />`), `<meta ${key}="${name}" content="${attr(value)}" />`] as const
  const swaps = [
    [/<title>[^<]*<\/title>/, `<title>${attr(page.title)}</title>`],
    [/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`],
    meta('name', 'description', page.description),
    meta('property', 'og:type', page.type),
    meta('property', 'og:url', url),
    meta('property', 'og:title', page.title),
    meta('property', 'og:description', page.description),
    meta('property', 'og:image', page.image),
    meta('property', 'og:image:alt', page.imageAlt),
    meta('name', 'twitter:title', page.title),
    meta('name', 'twitter:description', page.description),
    meta('name', 'twitter:image', page.image),
  ] as const
  let html = base
  const conteudo = staticContent(page)
  if (conteudo) html = swap(html, /<div id="root"><\/div>/, `<div id="root">${conteudo}</div>`)
  for (const [pattern, replacement] of swaps) html = swap(html, pattern, replacement)

  // Nos cases, diz ao Google que a página é um trabalho da Talessa (o
  // @id aponta para a Person declarada no index.html).
  if (page.type === 'article') {
    const work = {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: page.title,
      description: page.description,
      url,
      image: page.image,
      inLanguage: 'en',
      creator: { '@id': `${SITE}/#talessa` },
      isPartOf: { '@id': `${SITE}/#site` },
    }
    html = html.replace('</head>', `    <script type="application/ld+json">${JSON.stringify(work)}</script>\n  </head>`)
  }
  return html
}

// O site é uma SPA, mas quem gera a prévia de link (WhatsApp, LinkedIn) e
// boa parte dos buscadores lê só o HTML, sem rodar JavaScript. Sem isto,
// todo link de case aparecia com o título e a imagem da home. Depois do
// build, cada rota ganha a própria cópia do index.html com o SEO dela; a
// Vercel serve o arquivo da pasta antes de cair no rewrite da SPA.
function seoPages(): Plugin {
  let root = process.cwd()
  let outDir = 'dist'
  return {
    name: 'seo-pages',
    apply: 'build',
    configResolved(config) {
      root = config.root
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const base = readFileSync(join(outDir, 'index.html'), 'utf8')
      const pages: SeoPage[] = [{
        path: '/sobre',
        ...sobreSeo(en),
        image: `${SITE}/og-image.jpg`,
        imageAlt: 'Talessa Rodrigues, Product Designer & AI Engineer',
        type: 'website',
      }]
      for (const p of readProjects(root)) {
        if (!p.slug) continue
        pages.push({
          path: `/cases/${p.slug}`,
          ...caseSeo(en, p as { title: string; categoryKey: keyof typeof en.categories }),
          image: `${SITE}/og/${p.slug}.jpg`,
          imageAlt: `${p.title}, ${en.categories[p.categoryKey as keyof typeof en.categories]} case study by Talessa Rodrigues`,
          type: 'article',
          heading: `${p.title}: UX/UI case study`,
          outline: caseAlts[p.slug],
        })
      }
      for (const page of pages) {
        const file = join(outDir, page.path, 'index.html')
        mkdirSync(dirname(file), { recursive: true })
        writeFileSync(file, renderPage(base, page))
      }
      console.log(`seo-pages: ${pages.length} páginas com SEO próprio`)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), seoPages()],
})
