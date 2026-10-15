import Lenis from 'lenis'

// Rolagem com inércia (Lenis), como no site da Rodrigues Design: mesma
// duração e mesma curva. Só no site desktop (o app mobile rola no toque,
// nativo). Quem prefere menos movimento fica com a rolagem normal.
//
// Com o Lenis ligado, rolar por código precisa passar por ele; senão a
// próxima volta da animação dele desfaz o scrollTo nativo. Por isso o
// resto do site usa scrollToTarget() em vez de scrollTo/scrollIntoView.
let lenis: Lenis | null = null

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function startSmoothScroll(): () => void {
  if (reducedMotion()) return () => {}
  const html = document.documentElement
  // O scroll-behavior: smooth do index.css brigaria com a inércia do Lenis.
  html.style.scrollBehavior = 'auto'
  // Rolagem suave e responsiva: duração curta e saída em quarta potência.
  // (Já testei lerp 0,2 com duração de 1,4 s e saída exponencial, como no site
  // de referência: ficava "flutuando" e dava sensação de rolagem pesada.)
  lenis = new Lenis({
    duration: 1.0,
    easing: t => 1 - Math.pow(1 - t, 4),
    smoothWheel: true,
    wheelMultiplier: 1,
  })
  let frame = requestAnimationFrame(function loop(time) {
    lenis?.raf(time)
    frame = requestAnimationFrame(loop)
  })
  return () => {
    cancelAnimationFrame(frame)
    lenis?.destroy()
    lenis = null
    html.style.scrollBehavior = ''
  }
}

/**
 * Rola até um elemento (respeitando o scroll-margin-top dele, que desconta
 * a cápsula fixa do topo) ou até uma posição em pixels.
 */
export function scrollToTarget(target: HTMLElement | number, { smooth }: { smooth: boolean }) {
  if (lenis) {
    // O Lenis já desconta o scroll-margin-top do elemento sozinho. O
    // destino é calculado na partida, mas as imagens dos cases carregam
    // sob demanda e empurram o conteúdo durante a viagem; ao chegar, confere
    // e corrige o rumo (poucas vezes, para nunca virar um laço).
    const go = (attempt: number) =>
      lenis?.scrollTo(target, {
        immediate: !smooth,
        force: true,
        onComplete: () => {
          if (typeof target === 'number' || attempt >= 3) return
          const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0
          if (Math.abs(target.getBoundingClientRect().top - margin) > 4) go(attempt + 1)
        },
      })
    go(0)
    return
  }
  const behavior = smooth ? 'smooth' : 'instant'
  if (typeof target === 'number') window.scrollTo({ top: target, behavior })
  else target.scrollIntoView({ behavior, block: 'start' })
}
