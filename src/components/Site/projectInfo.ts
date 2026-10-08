import { allProjects, visibleProjects } from '../../data/projects'
import type { Project } from '../../data/projects'
import { getCase } from '../../data/caseStudies'
import type { CaseStudyText, Dictionary } from '../../i18n/types'

export function caseText(project: Project, t: Dictionary): CaseStudyText | null {
  const entry = project.detailSlug ? getCase(project.detailSlug) : null
  return entry ? t[entry.dictKey] : null
}

/** Ano do case (vem do dicionário); projetos só publicados não têm. */
export function projectYear(project: Project, t: Dictionary): string | null {
  return caseText(project, t)?.metaAnoValue || null
}

// A moldura degradê de cada projeto é fixa pela posição dele na lista
// geral — o mesmo projeto tem a mesma cor no card da home, no "Explore
// mais" e na capa do próprio case, mesmo com filtro ligado.
export function projectFrame(project: Project): string {
  const index = allProjects.indexOf(project)
  return `var(--frame-${(Math.max(index, 0) % 4) + 1})`
}

export function caseHref(project: Project): string | null {
  return project.detailSlug ? `/cases/${project.detailSlug}` : null
}

/** "Trabalho mais recente": o case de ano mais alto; empate fica com o primeiro da lista. */
export function latestCase(t: Dictionary): Project | null {
  let best: Project | null = null
  let bestYear = -Infinity
  for (const p of visibleProjects) {
    const year = Number(projectYear(p, t))
    if (Number.isFinite(year) && year > bestYear) {
      best = p
      bestYear = year
    }
  }
  return best
}
