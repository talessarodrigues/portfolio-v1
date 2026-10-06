import { useState } from 'react'
import styles from './Site.module.css'
import imgAvatar from '../../assets/sobre/perfil-talessa.webp'
import { allProjects } from '../../data/projects'
import type { ProjectFilter } from '../ProjectsHero/ProjectsHero'
import { useTranslation } from '../../i18n/LanguageContext'
import { CONTACTS } from '../../data/contacts'
import { trackContato } from '../../analytics'
import { CaseCard } from './CaseCard'
import { SiteLink } from './SiteLink'
import { caseHref, latestCase } from './projectInfo'

const FILTERS: ProjectFilter[] = ['all', 'ux-ui-design', 'branding']

export function HomePage() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState<ProjectFilter>('all')
  const latest = latestCase(t)
  const latestHref = latest ? caseHref(latest) : null

  const projects = filter === 'all'
    ? allProjects
    : allProjects.filter(p => p.categoryKey === filter)

  return (
    <>
      <header className={styles.intro}>
        <img src={imgAvatar} alt="Talessa Rodrigues" className={styles.introAvatar} />
        <h1 className={styles.introName}>{t.site.saudacao}</h1>
        <p className={styles.introBio}>{t.site.bio}</p>
        <div className={styles.introCtas}>
          {latestHref && (
            <SiteLink to={latestHref} className={styles.btnPrimary}>{t.site.trabalhoRecente}</SiteLink>
          )}
          <a
            className={styles.btnSoft}
            href={CONTACTS.agenda}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContato('agenda', 'hero-cta')}
          >
            {t.site.agendarChamada}
          </a>
        </div>
      </header>

      <section id="projetos" className={styles.work} aria-label={t.site.projetos}>
        <div className={styles.filters} role="tablist">
          {FILTERS.map(f => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              className={styles.filter}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? t.projectsHero.filterTodos : t.categories[f]}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <CaseCard key={p.title} project={p} eager={i < 2} />
          ))}
        </div>
      </section>
    </>
  )
}
