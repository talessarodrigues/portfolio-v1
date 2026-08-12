import { useEffect, useState } from 'react'
import { Hero } from './components/Hero/Hero'
import type { HeroModal } from './components/Hero/Hero'
import { SiteModals } from './components/Modal/SiteModals'
import type { ProjectFilter } from './components/ProjectsHero/ProjectsHero'
import type { Project } from './data/projects'
import { CONTACTS } from './data/contacts'
import { MobileApp } from './components/Mobile/MobileApp'
import { useIsMobile } from './hooks/useIsMobile'
import './App.css'

function App() {
  // Abaixo de 768px o site desktop dá lugar a uma experiência própria,
  // app-like (ver components/Mobile/MobileApp).
  const isMobile = useIsMobile()

  // No desktop existe uma tela só: a Hero. Tudo o mais — seções, grade de
  // projetos e case studies — acontece em modais por cima dela.
  const [openModal, setOpenModal] = useState<HeroModal | null>(null)
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>('all')
  const [detailSlug, setDetailSlug] = useState<string | null>(null)

  // A página nunca rola: quem "rola" é a máquina de estados da Hero, e o
  // conteúdo dos modais rola dentro do próprio painel.
  useEffect(() => {
    if (isMobile) return
    document.documentElement.classList.add('no-scroll')
    document.body.classList.add('no-scroll')
    return () => {
      document.documentElement.classList.remove('no-scroll')
      document.body.classList.remove('no-scroll')
    }
  }, [isMobile])

  // Só projetos com detailSlug têm case study pronto (as outras cards
  // ainda não têm o detalhamento construído no Figma).
  const openProjectDetail = (project: Project) => {
    if (!project.detailSlug) return
    setDetailSlug(project.detailSlug)
    setOpenModal('cases')
  }

  const closeModal = () => {
    setOpenModal(null)
    setDetailSlug(null)
  }

  // Trocar de categoria pelas abas do cabeçalho sempre devolve pra grade.
  const changeFilter = (filter: ProjectFilter) => {
    setProjectFilter(filter)
    setDetailSlug(null)
  }

  useEffect(() => {
    const isInView = (el: Element) => {
      const r = el.getBoundingClientRect()
      return r.top < window.innerHeight + 80 && r.bottom > -80
    }

    const attachEl = (el: Element) => {
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
    // (ex: abrir um modal insere as seções inteiras de uma vez)
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

    // Fallback pra quando o IntersectionObserver não dispara. `capture`
    // porque quem rola agora é o corpo do modal, não a janela — e eventos
    // de scroll de elementos não sobem por bubbling.
    const onScroll = () => {
      document.querySelectorAll('[data-animate]:not(.in-view)').forEach(el => {
        if (isInView(el)) el.classList.add('in-view')
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true, capture: true })

    return () => {
      ioObserver.disconnect()
      mutObserver.disconnect()
      window.removeEventListener('scroll', onScroll, { capture: true })
    }
  }, [])

  if (isMobile) return <MobileApp />

  return (
    <div className="layout layout--fullscreen">
      <Hero
        scrollEnabled={openModal === null}
        onOpenModal={setOpenModal}
        onSelectProject={openProjectDetail}
        onNavigateContato={() => window.open(CONTACTS.whatsapp, '_blank', 'noopener,noreferrer')}
      />
      <SiteModals
        open={openModal}
        onClose={closeModal}
        detailSlug={detailSlug}
        projectFilter={projectFilter}
        onFilterChange={changeFilter}
        onSelectProject={openProjectDetail}
        onBackToGrid={() => setDetailSlug(null)}
      />
    </div>
  )
}

export default App
