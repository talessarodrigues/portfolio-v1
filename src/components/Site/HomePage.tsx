import { useMemo, useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { Cancel01FreeIcons, Search01FreeIcons } from '@hugeicons/core-free-icons'
import styles from './Site.module.css'
import imgAvatar from '../../assets/sobre/perfil-talessa.webp'
import { allProjects, PROJECT_KINDS } from '../../data/projects'
import type { ProjectKind } from '../../data/projects'
import { useTranslation } from '../../i18n/LanguageContext'
import { pt } from '../../i18n/dictionary.pt'
import { en } from '../../i18n/dictionary.en'
import { es } from '../../i18n/dictionary.es'
import { CONTACTS } from '../../data/contacts'
import { trackContato } from '../../analytics'
import { CaseCard } from './CaseCard'
import { SiteLink } from './SiteLink'
import { caseHref, latestCase } from './projectInfo'

type Filter = 'all' | ProjectKind

// Busca sem diferenciar maiúscula, acento nem pontuação ("paineis" acha
// "Painéis", "ecommerce" acha "E-commerce").
const normalize = (s: string) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9\s]/g, '')

// O texto de busca de cada projeto junta nome, descrição e tipos nos três
// idiomas: quem digita em português numa tela em inglês também acha.
const DICTS = [pt, en, es]
const searchText = (title: string, kinds: ProjectKind[]) =>
  normalize([title, ...DICTS.flatMap(d => [d.projects[title]?.description ?? '', ...kinds.map(k => d.site.filtros[k])])].join(' '))

export function HomePage() {
  const { t } = useTranslation()
  const latest = latestCase(t)
  const latestHref = latest ? caseHref(latest) : null
  const [filter, setFilter] = useState<Filter>('all')
  const [query, setQuery] = useState('')

  const projects = useMemo(() => {
    const terms = normalize(query).split(/\s+/).filter(Boolean)
    return allProjects.filter(p => {
      if (filter !== 'all' && !p.kinds.includes(filter)) return false
      if (terms.length === 0) return true
      const haystack = searchText(p.title, p.kinds)
      return terms.every(term => haystack.includes(term))
    })
  }, [filter, query])

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
        <div className={styles.toolbar}>
          <div className={styles.filters}>
            {(['all', ...PROJECT_KINDS] as Filter[]).map(f => (
              <button
                key={f}
                type="button"
                className={styles.filter}
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {t.site.filtros[f]}
              </button>
            ))}
          </div>

          <label className={styles.search}>
            <HugeiconsIcon icon={Search01FreeIcons} size={18} strokeWidth={1.8} className={styles.searchIcon} />
            <input
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={t.site.buscarProjeto}
              aria-label={t.site.buscarProjeto}
            />
            {query && (
              <button type="button" className={styles.searchClear} onClick={() => setQuery('')} aria-label={t.modais.fechar}>
                <HugeiconsIcon icon={Cancel01FreeIcons} size={14} strokeWidth={2} />
              </button>
            )}
          </label>
        </div>

        {projects.length > 0 ? (
          <div className={styles.grid}>
            {projects.map((p, i) => (
              <CaseCard key={p.title} project={p} eager={i < 2} />
            ))}
          </div>
        ) : (
          <p className={styles.empty}>{t.site.nenhumProjeto}</p>
        )}
      </section>
    </>
  )
}
