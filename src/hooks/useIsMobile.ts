import { useEffect, useState } from 'react'

// Breakpoint que separa a experiência desktop (site) da mobile (app-like).
// Precisa bater com o @media do Mobile.module.css e com o `display: none`
// que esconde o layout desktop.
export const MOBILE_QUERY = '(max-width: 767px)'

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches
  )

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY)
    const sync = () => setIsMobile(mql.matches)
    mql.addEventListener('change', sync)
    // Fallback: em alguns contextos (emulação de device, rotação de tela
    // em navegadores mobile antigos) o evento 'change' da media query não
    // dispara — o resize garante que a troca aconteça mesmo assim.
    window.addEventListener('resize', sync)
    sync()
    return () => {
      mql.removeEventListener('change', sync)
      window.removeEventListener('resize', sync)
    }
  }, [])

  return isMobile
}
