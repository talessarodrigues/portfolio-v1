import { useEffect, useMemo, useRef, useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { Cancel01FreeIcons, Search01FreeIcons } from '@hugeicons/core-free-icons'
import styles from './Site.module.css'
import imgAvatar from '../../assets/sobre/perfil-talessa.webp'
import { visibleProjects, PROJECT_KINDS, PROJECT_SEGMENTS } from '../../data/projects'
import type { ProjectKind, ProjectSegment } from '../../data/projects'
import { useTranslation } from '../../i18n/LanguageContext'
import { pt } from '../../i18n/dictionary.pt'
import { en } from '../../i18n/dictionary.en'
import { es } from '../../i18n/dictionary.es'
import { CONTACTS } from '../../data/contacts'
import { trackContato } from '../../analytics'
import { CaseCard } from './CaseCard'
import { SiteLink } from './SiteLink'
import { caseHref, latestCase } from './projectInfo'

type Filter = 'all' | ProjectKind | ProjectSegment

// Busca sem diferenciar maiúscula, acento nem pontuação ("paineis" acha
// "Painéis", "ecommerce" acha "E-commerce").
const normalize = (s: string) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9\s]/g, '')

// O texto de busca de cada projeto junta nome, descrição e tipos nos três
// idiomas: quem digita em português numa tela em inglês também acha.
const DICTS = [pt, en, es]
const searchText = (title: string, labels: (ProjectKind | ProjectSegment)[]) =>
  normalize([title, ...DICTS.flatMap(d => [d.projects[title]?.description ?? '', ...labels.map(k => d.site.filtros[k])])].join(' '))

// Vinheta antes da grade: o título fica parado no meio da tela e some com a
// rolagem (--p vai de 0 a 1), deixando os projetos aparecerem.
function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    const update = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const range = rect.height - window.innerHeight
      const p = range > 0 ? Math.min(1, Math.max(0, -rect.top / range)) : 0
      el.style.setProperty('--p', p.toFixed(3))
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])
  return ref
}

// Faixa que passa sozinha com as capas de todos os projetos, em duas fileiras
// que andam em sentidos opostos. O segundo conjunto de cada fileira só existe
// pra o loop não ter emenda, por isso fica fora do foco e dos leitores de tela.
function ProjectsStrip() {
  const { t } = useTranslation()
  const rows = [visibleProjects, [...visibleProjects].reverse()]
  return (
    <section className={styles.strip} aria-label={t.site.tudoQueFiz}>
      <p className={styles.stripLabel}>{t.site.tudoQueFiz}</p>
      {rows.map((row, r) => (
        <div key={r} className={styles.stripRow}>
          <div className={r % 2 ? `${styles.stripTrack} ${styles.stripTrackReverse}` : styles.stripTrack}>
            {[0, 1].map(copy => (
              <div key={copy} className={styles.stripSet} inert={copy === 1} aria-hidden={copy === 1}>
                {row.map(p => (
                  <div key={p.title} className={styles.stripItem}>
                    <CaseCard project={p} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export function HomePage() {
  const { t } = useTranslation()
  const revealRef = useScrollProgress<HTMLElement>()
  // Sem nenhum case com ano entre os visíveis, o botão leva ao primeiro projeto (que pode ser um site no ar).
  const latest = latestCase(t) ?? visibleProjects[0] ?? null
  const latestHref = latest ? caseHref(latest) : null
  const latestExternal = latest?.externalUrl ?? null
  const [filter, setFilter] = useState<Filter>('all')
  const [query, setQuery] = useState('')

  const projects = useMemo(() => {
    const terms = normalize(query).split(/\s+/).filter(Boolean)
    return visibleProjects.filter(p => {
      const labels = [...p.kinds, ...(p.segments ?? [])]
      if (filter !== 'all' && !labels.includes(filter)) return false
      if (terms.length === 0) return true
      const haystack = searchText(p.title, labels)
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
          {latestHref ? (
            <SiteLink to={latestHref} className={styles.btnPrimary}>{t.site.trabalhoRecente}</SiteLink>
          ) : latestExternal && (
            <a className={styles.btnPrimary} href={latestExternal} target="_blank" rel="noopener noreferrer">{t.site.trabalhoRecente}</a>
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

      <section ref={revealRef} className={styles.reveal} aria-hidden="true">
        <div className={styles.revealStage}>
          <p className={styles.revealTitle}>
            {t.site.trabalhosSelecionados[0]}
            <br />
            <span className={styles.revealAccent}>{t.site.trabalhosSelecionados[1]}</span>
          </p>
        </div>
      </section>

      <section id="projetos" className={styles.work} aria-label={t.site.projetos}>
        <div className={styles.toolbar}>
          <div className={styles.filters}>
            {(['all', ...PROJECT_KINDS, ...PROJECT_SEGMENTS] as Filter[]).map(f => (
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

      <ProjectsStrip />
    </>
  )
}
