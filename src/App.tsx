import { useEffect, useState } from 'react'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Hero } from './components/Hero/Hero'
import { FeaturedProjects } from './components/FeaturedProjects/FeaturedProjects'
import { MyProcess } from './components/MyProcess/MyProcess'
import { InfoCards } from './components/InfoCards/InfoCards'
import { FAQ } from './components/FAQ/FAQ'
import { ContactBanner } from './components/ContactBanner/ContactBanner'
import { WorkspaceHero } from './components/WorkspaceHero/WorkspaceHero'
import { WorkspaceProjects } from './components/WorkspaceProjects/WorkspaceProjects'
import { WorkspaceProcess } from './components/WorkspaceProcess/WorkspaceProcess'
import { WorkspaceInsight } from './components/WorkspaceInsight/WorkspaceInsight'
import './App.css'

type Page = 'home' | 'workspace'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState<Page>('home')

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px)')
    const fn = (e: MediaQueryListEvent) => { if (e.matches) setSidebarOpen(false) }
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [])

  useEffect(() => {
    const isInView = (el: Element) => {
      const r = el.getBoundingClientRect()
      return r.top < window.innerHeight + 80 && r.bottom > -80
    }

    const attachEl = (el: Element) => {
      if (el.closest('.cards-row')) {
        el.classList.add('in-view')
        return
      }
      if (isInView(el)) {
        el.classList.add('in-view')
        return
      }
      ioObserver.observe(el)
    }

    const ioObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            ioObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: '80px 0px 80px 0px' }
    )

    // observa elementos existentes
    document.querySelectorAll('[data-animate]').forEach(attachEl)

    // MutationObserver: detecta novos [data-animate] adicionados ao DOM
    // (ex: FAQ re-renderiza de desktop→mobile e insere os accordion items)
    const mutObserver = new MutationObserver(mutations => {
      mutations.forEach(m => {
        m.addedNodes.forEach(node => {
          if (!(node instanceof Element)) return
          if (node.hasAttribute('data-animate')) attachEl(node)
          node.querySelectorAll('[data-animate]').forEach(attachEl)
        })
      })
    })
    mutObserver.observe(document.body, { childList: true, subtree: true })

    // fallback de scroll para iOS Safari onde IntersectionObserver pode falhar
    const onScroll = () => {
      document.querySelectorAll('[data-animate]:not(.in-view)').forEach(el => {
        if (!el.closest('.cards-row') && isInView(el)) el.classList.add('in-view')
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      ioObserver.disconnect()
      mutObserver.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="layout">
      <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          currentPage={currentPage}
          onNavigate={page => {
            setCurrentPage(page)
            window.scrollTo(0, 0)
            setTimeout(() => window.dispatchEvent(new Event('scroll')), 50)
          }}
        />

      <button
        className="menu-toggle"
        onClick={() => setSidebarOpen(true)}
        aria-label="Abrir menu"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 3L8 8L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 3L12 8L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <main className="main-content">
        {currentPage === 'home' && (
          <>
            <Hero />
            <div className="content-column">
              <FeaturedProjects />
              <div className="cards-row">
                <MyProcess />
                <InfoCards />
              </div>
              <FAQ />
              <ContactBanner />
            </div>
          </>
        )}
        {currentPage === 'workspace' && (
          <>
            <WorkspaceHero />
            <WorkspaceProjects />
            <WorkspaceProcess />
            <WorkspaceInsight />
            <ContactBanner />
          </>
        )}
      </main>
    </div>
  )
}

export default App
