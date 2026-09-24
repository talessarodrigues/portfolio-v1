import { useEffect } from 'react'

// Mesma régua da Hero (`--u` em Hero.module.css): 1920×1020 é a tela de
// referência. A Hero escala sozinha com a viewport, mas o que abre por
// cima dela (modais, menu de idioma) é em px fixos — num monitor 4K ou
// com o zoom do navegador reduzido isso virava letra miúda numa tira
// estreita no meio da tela. `--site-zoom` é o fator que esses elementos
// aplicam via `zoom`. Nunca fica abaixo de 1: abaixo da referência o
// layout já cabe e não muda.
function getSiteZoom() {
  return Math.max(1, Math.min(window.innerWidth / 1920, window.innerHeight / 1020))
}

export function useSiteZoom(active: boolean) {
  useEffect(() => {
    if (!active) return
    const root = document.documentElement
    const update = () => root.style.setProperty('--site-zoom', String(getSiteZoom()))
    update()
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('resize', update)
      root.style.removeProperty('--site-zoom')
    }
  }, [active])
}
