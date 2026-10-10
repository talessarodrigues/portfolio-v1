import { useEffect, useRef, useState } from 'react'

// Quantas palavras de um título já "acenderam", conforme ele sobe na tela:
// começa a acender quando o topo chega a 85% da altura da janela e termina
// quando chega a 40%. Com "reduzir movimento" ligado, tudo já nasce aceso.
export function useWordReveal<T extends HTMLElement>(total: number) {
  const ref = useRef<T>(null)
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [lit, setLit] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el || reduced) return
    let frame = 0
    const update = () => {
      frame = 0
      const vh = window.innerHeight
      const p = (vh * 0.85 - el.getBoundingClientRect().top) / (vh * 0.45)
      setLit(Math.round(Math.min(1, Math.max(0, p)) * total))
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [total, reduced])

  return { ref, lit: reduced ? total : lit }
}
