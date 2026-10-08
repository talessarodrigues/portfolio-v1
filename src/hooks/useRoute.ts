import { useCallback, useEffect, useState } from 'react'
import { scrollToTarget } from './smoothScroll'

// O desktop virou um site de páginas de verdade: home com a grade de
// cases, /sobre e um endereço por case (/cases/<slug>), pra cada case
// poder ser compartilhado e aparecer na busca sozinho. São só três
// formatos de rota, então um roteador de biblioteca seria peso à toa —
// pushState + popstate resolvem.
//
// A Vercel precisa devolver o index.html pra qualquer caminho (ver o
// rewrite em vercel.json), senão abrir /cases/<slug> direto dá 404.
export type Route =
  | { page: 'home' }
  | { page: 'sobre' }
  | { page: 'case'; slug: string }

export function parseRoute(pathname: string): Route {
  const path = pathname.replace(/\/+$/, '') || '/'
  if (path === '/sobre') return { page: 'sobre' }
  const match = path.match(/^\/cases\/([a-z0-9-]+)$/)
  if (match) return { page: 'case', slug: match[1] }
  return { page: 'home' }
}

const NAVIGATE_EVENT = 'site:navigate'

// A rolagem só pode acontecer depois que a página nova montou, então
// navigate() e o popstate só deixam anotado o que fazer, e quem aplica
// é applyPendingScroll(), chamado pelo Site num efeito da troca de rota.
type PendingScroll =
  | { kind: 'anchor'; id: string; smooth: boolean }
  | { kind: 'top'; smooth: boolean }
  | { kind: 'restore'; y: number }

let pending: PendingScroll | null = null

if (typeof window !== 'undefined') {
  // Quem devolve a posição ao voltar no histórico somos nós (a página
  // anterior ainda nem existe quando o navegador tentaria restaurar).
  window.history.scrollRestoration = 'manual'
  // Entrada direta num endereço com âncora (ex.: link compartilhado).
  if (window.location.hash) pending = { kind: 'anchor', id: window.location.hash.slice(1), smooth: false }
}

/** Troca de página sem recarregar. Aceita âncora: navigate('/#projetos'). */
export function navigate(to: string) {
  const [path, hash] = to.split('#')
  const samePage = (path || '/') === window.location.pathname

  // Guarda onde a pessoa estava, pra o "voltar" devolver ao mesmo ponto.
  window.history.replaceState({ ...window.history.state, scrollY: window.scrollY }, '')
  if (!samePage || hash) window.history.pushState({ scrollY: 0 }, '', to)

  pending = hash
    ? { kind: 'anchor', id: hash, smooth: samePage }
    : { kind: 'top', smooth: samePage }
  window.dispatchEvent(new Event(NAVIGATE_EVENT))
}

export function applyPendingScroll() {
  const next = pending
  pending = null
  if (!next) return
  // Trocar de página não "rola" até o topo: vai direto. Só a âncora na
  // mesma página anima (scrollToTarget passa pelo Lenis quando ele está ligado).
  if (next.kind === 'restore') {
    scrollToTarget(next.y, { smooth: false })
    return
  }
  const target = next.kind === 'anchor' ? document.getElementById(next.id) : null
  scrollToTarget(target ?? 0, { smooth: next.smooth })
}

export function useRoute(): Route {
  const read = useCallback(() => parseRoute(window.location.pathname), [])
  const [route, setRoute] = useState<Route>(read)

  useEffect(() => {
    const onNavigate = () => setRoute(read())
    const onPopState = (e: PopStateEvent) => {
      const y = (e.state as { scrollY?: number } | null)?.scrollY
      pending = typeof y === 'number' ? { kind: 'restore', y } : { kind: 'top', smooth: false }
      setRoute(read())
    }
    window.addEventListener('popstate', onPopState)
    window.addEventListener(NAVIGATE_EVENT, onNavigate)
    return () => {
      window.removeEventListener('popstate', onPopState)
      window.removeEventListener(NAVIGATE_EVENT, onNavigate)
    }
  }, [read])

  return route
}
