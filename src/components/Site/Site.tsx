import { useEffect, useLayoutEffect } from 'react'
import styles from './Site.module.css'
import { applyPendingScroll, useRoute } from '../../hooks/useRoute'
import { useTranslation } from '../../i18n/LanguageContext'
import { allProjects } from '../../data/projects'
import { SiteNav } from './SiteNav'
import { SiteFooter } from './SiteFooter'
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { CasePage } from './CasePage'

const SITE_NAME = 'Talessa Rodrigues'
const HOME_TITLE = 'Talessa Rodrigues | Product Designer UX/UI'

// Desktop: site de páginas que rolam — home com a grade de cases,
// /sobre e uma página por case. O mobile continua no app próprio
// (components/Mobile), o App decide qual dos dois monta.
export function Site() {
  const route = useRoute()
  const { t, lang } = useTranslation()

  // Página nova montada: agora dá pra ir até a âncora, voltar ao topo ou
  // devolver a posição de antes (ver applyPendingScroll).
  useLayoutEffect(() => {
    applyPendingScroll()
  }, [route])

  // Cada página tem o próprio título na aba (e no histórico/favoritos).
  // Vai num setTimeout porque o LanguageProvider, que está acima, também
  // grava o título quando o idioma muda — e efeito de pai roda depois do
  // efeito de filho, então ele ganharia sempre.
  useEffect(() => {
    const id = window.setTimeout(() => {
      if (route.page === 'sobre') document.title = `${t.site.sobreTitulo} | ${SITE_NAME}`
      else if (route.page === 'case') {
        const project = allProjects.find(p => p.detailSlug === route.slug)
        document.title = project ? `${project.title} | ${SITE_NAME}` : HOME_TITLE
      } else document.title = HOME_TITLE
    })
    return () => window.clearTimeout(id)
  }, [route, lang, t.site.sobreTitulo])

  return (
    <div className={styles.site}>
      <span className={styles.glow} aria-hidden="true" />
      {route.page === 'case' ? (
        // A página de case monta a própria cápsula, com o índice dela.
        <CasePage key={route.slug} slug={route.slug} />
      ) : (
        <>
          <SiteNav page={route.page} />
          <main className={styles.main}>
            {route.page === 'sobre' ? <AboutPage /> : <HomePage />}
          </main>
        </>
      )}
      <SiteFooter />
    </div>
  )
}
