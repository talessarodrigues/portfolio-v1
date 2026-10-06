import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { pt } from './src/i18n/dictionary.pt'
import { caseSeo, sobreSeo } from './src/i18n/seo'
import { readProjects } from './scripts/projects-meta.mjs'

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
      inLanguage: 'pt-BR',
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
        ...sobreSeo(pt),
        image: `${SITE}/og-image.jpg`,
        imageAlt: 'Talessa Rodrigues, Product Designer & AI Engineer',
        type: 'website',
      }]
      for (const p of readProjects(root)) {
        if (!p.slug) continue
        pages.push({
          path: `/cases/${p.slug}`,
          ...caseSeo(pt, p as { title: string; categoryKey: keyof typeof pt.categories }),
          image: `${SITE}/og/${p.slug}.jpg`,
          imageAlt: `${p.title}, case de ${pt.categories[p.categoryKey as keyof typeof pt.categories]} por Talessa Rodrigues`,
          type: 'article',
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
