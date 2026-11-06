import { useEffect, useRef } from 'react'
import styles from './SiteCursor.module.css'

// Cursor personalizado: uma luva branca de desenho animado apontando, com a
// ponta do dedo no lugar do mouse. Cresce em links, aperta no clique, mostra
// uma etiqueta ao lado onde houver data-cursor (ex.: "Ver projeto" nos
// cards, como na referência da Dymit) e um balão de conversa (papel +
// pergunta, no estilo dos cursores colaborativos) onde houver
// data-cursor-fala. Só com mouse (hover + pointer fine) e sem
// prefers-reduced-motion; fora disso fica o cursor do sistema.
// Luva de desenho animado: dedo indicador para cima (a ponta é o ponto do
// mouse), três dedos dobrados, polegar, punho e três risquinhos nas costas.
function Glove() {
  const line = { stroke: '#141414', strokeWidth: 2.2, strokeLinejoin: 'round' as const, strokeLinecap: 'round' as const }
  return (
    <svg width="40" height="46" viewBox="0 0 40 46" fill="none">
      <rect x="13" y="16" width="7.5" height="11" rx="3.75" fill="#fff" {...line} />
      <rect x="19.5" y="17" width="7.5" height="11" rx="3.75" fill="#fff" {...line} />
      <rect x="26" y="19.5" width="7" height="11" rx="3.5" fill="#fff" {...line} />
      <rect x="5.2" y="3.2" width="8.6" height="23" rx="4.3" fill="#fff" {...line} />
      <rect x="5.5" y="17" width="27" height="20" rx="9" fill="#fff" {...line} />
      <rect x="6.7" y="16" width="6" height="6" fill="#fff" />
      <ellipse cx="5.5" cy="28" rx="4.6" ry="5.8" transform="rotate(-24 5.5 28)" fill="#fff" {...line} />
      <rect x="9" y="36.5" width="21" height="7.5" rx="2.8" fill="#fff" {...line} />
      <path d="M16 26.5v4.2M20.5 26.8v4.4M25 27.5v4" {...line} strokeWidth={1.8} />
    </svg>
  )
}

export function SiteCursor() {
  const rootRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLSpanElement>(null)
  const ringRef = useRef<HTMLSpanElement>(null)
  const labelRef = useRef<HTMLElement>(null)
  const bubbleRef = useRef<HTMLDivElement>(null)
  const tagRef = useRef<HTMLSpanElement>(null)
  const msgRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const root = rootRef.current
    const dot = dotRef.current
    const ring = ringRef.current
    const label = labelRef.current
    const bubble = bubbleRef.current
    const tag = tagRef.current
    const msg = msgRef.current
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!root || !dot || !ring || !label || !bubble || !tag || !msg || !fine || reduce) return

    const html = document.documentElement
    html.classList.add('has-cursor')
    let x = -100, y = -100, rx = -100, ry = -100, bx = -100, by = -100
    // Tamanho do balão: medido só quando o texto muda (medir a cada quadro força o navegador a recalcular o layout).
    let bw = 0, bh = 0

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      dot.style.setProperty('--x', `${x}px`)
      dot.style.setProperty('--y', `${y}px`)
      const t = e.target instanceof Element ? e.target : null
      const labeled = t?.closest<HTMLElement>('[data-cursor]')
      const text = t?.closest('input:not([type="file"]), textarea, select')
      const link = t?.closest('a, button, summary, label, [role="tab"], [role="button"], [role="menuitemradio"]')
      const txt = labeled?.dataset.cursor ?? ''
      const chat = t?.closest<HTMLElement>('[data-cursor-fala]')
      if (chat) {
        const changed = msg.textContent !== chat.dataset.cursorFala
        if (changed) msg.textContent = chat.dataset.cursorFala ?? ''
        if (tag.textContent !== chat.dataset.cursorPapel) tag.textContent = chat.dataset.cursorPapel ?? ''
        bubble.dataset.tipo = chat.dataset.cursorTipo ?? ''
        if (changed || !bw) { bw = bubble.offsetWidth; bh = bubble.offsetHeight }
      }
      root.classList.toggle(styles.hasBubble, !!chat)
      if (label.textContent !== txt) label.textContent = txt
      root.classList.toggle(styles.hasLabel, !!labeled)
      root.classList.toggle(styles.isText, !!text)
      root.classList.toggle(styles.isLink, !!link && !labeled && !text)
      root.classList.remove(styles.isHidden)
      start()
    }
    const onLeave = () => root.classList.add(styles.isHidden)
    const onDown = () => root.classList.add(styles.isDown)
    const onUp = () => root.classList.remove(styles.isDown)

    // O anel e o balão seguem o ponto com leve atraso. O laço só roda enquanto
    // algo ainda está se movendo; com o mouse parado ele para de vez.
    let frame = 0
    let running = false
    const loop = () => {
      rx += (x - rx) * 0.18
      ry += (y - ry) * 0.18
      ring.style.setProperty('--rx', `${rx.toFixed(1)}px`)
      ring.style.setProperty('--ry', `${ry.toFixed(1)}px`)
      // O balão vai para o outro lado quando não cabe na tela.
      const tx = x + 30 + bw > window.innerWidth - 12 ? x - 30 - bw : x + 30
      const ty = y + 52 + bh > window.innerHeight - 12 ? y - 40 - bh : y + 52
      bx += (tx - bx) * 0.14
      by += (ty - by) * 0.14
      bubble.style.setProperty('--bx', `${bx.toFixed(1)}px`)
      bubble.style.setProperty('--by', `${by.toFixed(1)}px`)
      const settled = Math.abs(x - rx) < 0.2 && Math.abs(y - ry) < 0.2 && Math.abs(tx - bx) < 0.3 && Math.abs(ty - by) < 0.3
      if (settled) running = false
      else frame = requestAnimationFrame(loop)
    }
    const start = () => {
      if (running) return
      running = true
      frame = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      html.classList.remove('has-cursor')
    }
  }, [])

  return (
    <div ref={rootRef} className={`${styles.cursor} ${styles.isHidden}`} aria-hidden="true">
      <span ref={ringRef} className={styles.ring}>
        <em ref={labelRef} className={styles.label} />
      </span>
      <span ref={dotRef} className={styles.glove}>
        <Glove />
      </span>
      <div ref={bubbleRef} className={styles.bubble}>
        <span ref={tagRef} className={styles.tag} />
        <span ref={msgRef} className={styles.msg} />
      </div>
    </div>
  )
}
