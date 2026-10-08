import { useEffect, useLayoutEffect } from 'react'
import 'lenis/dist/lenis.css'
import styles from './Site.module.css'
import { applyPendingScroll, useRoute } from '../../hooks/useRoute'
import { startSmoothScroll } from '../../hooks/smoothScroll'
import { useTranslation } from '../../i18n/LanguageContext'
import { allProjects } from '../../data/projects'
import { PAGINA, setPageMeta } from '../../i18n/pageMeta'
import { caseSeo, sobreSeo } from '../../i18n/seo'
import { SiteNav } from './SiteNav'
import { SiteFooter } from './SiteFooter'
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { CasePage } from './CasePage'
import { SiteCursor } from './SiteCursor'

// Desktop: site de páginas que rolam — home com a grade de cases,
// /sobre e uma página por case. O mobile continua no app próprio
// (components/Mobile), o App decide qual dos dois monta.
export function Site() {
  const route = useRoute()
  const { t, lang } = useTranslation()

  // Rolagem com inércia (Lenis) enquanto o site desktop está montado.
  useEffect(() => startSmoothScroll(), [])

  // Página nova montada: agora dá pra ir até a âncora, voltar ao topo ou
  // devolver a posição de antes (ver applyPendingScroll).
  useLayoutEffect(() => {
    applyPendingScroll()
  }, [route])

  // Cada página tem título e descrição próprios (aba, histórico e o que o
  // Google lê ao renderizar). Vai num setTimeout porque o LanguageProvider,
  // que está acima, grava os da home quando o idioma muda, e efeito de pai
  // roda depois do efeito de filho, então ele ganharia sempre.
  useEffect(() => {
    const id = window.setTimeout(() => {
      const project = route.page === 'case' ? allProjects.find(p => p.detailSlug === route.slug) : undefined
      const seo = route.page === 'sobre' ? sobreSeo(t) : project ? caseSeo(t, project) : PAGINA[lang]
      setPageMeta(seo.title, seo.description)
    })
    return () => window.clearTimeout(id)
  }, [route, lang, t])

  return (
    <div className={styles.site}>
      <span className={styles.glow} aria-hidden="true" />
      <SiteCursor />
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
