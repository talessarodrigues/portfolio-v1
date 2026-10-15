import { useEffect, useRef, useState } from 'react'

// Diz se o elemento está perto da tela. As faixas que passam sozinhas usam
// isso para parar a animação quando estão longe, em vez de gastar quadros à toa.
export function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(true)
  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin: '120px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return { ref, inView }
}
