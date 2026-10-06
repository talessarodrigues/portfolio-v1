import { useEffect } from 'react'
import { MobileApp } from './components/Mobile/MobileApp'
import { Site } from './components/Site/Site'
import { useIsMobile } from './hooks/useIsMobile'
import './App.css'

function App() {
  // Até 1024px (celulares e tablets em retrato) o site desktop dá lugar
  // a uma experiência própria, app-like (ver components/Mobile/MobileApp).
  const isMobile = useIsMobile()

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
    // (ex: trocar de página insere as seções inteiras de uma vez)
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

  // Desktop: site em páginas que rolam (home, /sobre, /cases/<slug>).
  return <Site />
}

export default App
