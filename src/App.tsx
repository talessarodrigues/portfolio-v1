import { useEffect, useState } from 'react'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Hero } from './components/Hero/Hero'
import { FeaturedProjects } from './components/FeaturedProjects/FeaturedProjects'
import { MyProcess } from './components/MyProcess/MyProcess'
import { InfoCards } from './components/InfoCards/InfoCards'
import { FAQ } from './components/FAQ/FAQ'
import { ContactBanner } from './components/ContactBanner/ContactBanner'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px)')
    const fn = (e: MediaQueryListEvent) => { if (e.matches) setSidebarOpen(false) }
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    )

    document.querySelectorAll('[data-animate]').forEach(el => {
      // elementos dentro de scroll horizontal nunca cruzam o viewport lateralmente:
      // força in-view imediatamente para que não fiquem invisíveis
      if (el.closest('.cards-row')) {
        el.classList.add('in-view')
      } else {
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

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
      </main>
    </div>
  )
}

export default App
