// Lê a lista de projetos de src/data/projects.ts sem precisar compilar o
// arquivo (ele importa imagens, que o Node sozinho não sabe carregar).
// Usado no build (páginas estáticas com o SEO de cada case, ver
// vite.config.ts) e no gerador das imagens de compartilhamento
// (scripts/og-images.mjs).
//
// Cada projeto ocupa uma linha só em allProjects; se alguém quebrar esse
// formato, a contagem abaixo acusa em vez de sumir com um case do SEO.
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

export function readProjects(root) {
  const src = readFileSync(join(root, 'src/data/projects.ts'), 'utf8')

  const images = new Map()
  for (const m of src.matchAll(/^import (\w+) from '\.\.\/(assets\/[^']+)'$/gm)) {
    images.set(m[1], join(root, 'src', m[2]))
  }

  const projects = []
  for (const m of src.matchAll(/^\s*\{ image: (\w+), title: '([^']+)', categoryKey: '([\w-]+)'(.*)\},?$/gm)) {
    const slug = m[4].match(/detailSlug: '([\w-]+)'/)?.[1] ?? null
    projects.push({ title: m[2], categoryKey: m[3], slug, image: images.get(m[1]) })
  }

  const expected = (src.match(/detailSlug: '/g) || []).length
  const found = projects.filter(p => p.slug).length
  if (found !== expected) {
    throw new Error(`projects-meta: achei ${found} cases, mas projects.ts tem ${expected} detailSlug`)
  }
  return projects
}
