import { useEffect, useRef } from 'react'
import styles from './SiteCursor.module.css'

// Cursor personalizado do site da Rodrigues Design (versão "v3"): ponto
// que acompanha o mouse, anel que vem atrás com leve atraso, anel maior em
// links, pílula com rótulo onde houver data-cursor (ex.: "View project" nos
// cards) e anel que se deforma no clique. Só com mouse (hover + pointer
// fine) e sem prefers-reduced-motion; fora disso fica o cursor do sistema.
export function SiteCursor() {
  const rootRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLSpanElement>(null)
  const ringRef = useRef<HTMLSpanElement>(null)
  const labelRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = rootRef.current
    const dot = dotRef.current
    const ring = ringRef.current
    const label = labelRef.current
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!root || !dot || !ring || !label || !fine || reduce) return

    const html = document.documentElement
    html.classList.add('has-cursor')
    let x = -100, y = -100, rx = -100, ry = -100

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
      if (label.textContent !== txt) label.textContent = txt
      root.classList.toggle(styles.hasLabel, !!labeled)
      root.classList.toggle(styles.isText, !!text)
      root.classList.toggle(styles.isLink, !!link && !labeled && !text)
      root.classList.remove(styles.isHidden)
    }
    const onLeave = () => root.classList.add(styles.isHidden)
    const onDown = () => root.classList.add(styles.isDown)
    const onUp = () => root.classList.remove(styles.isDown)

    // O anel segue o ponto com leve atraso.
    let frame = requestAnimationFrame(function loop() {
      rx += (x - rx) * 0.18
      ry += (y - ry) * 0.18
      ring.style.setProperty('--rx', `${rx.toFixed(1)}px`)
      ring.style.setProperty('--ry', `${ry.toFixed(1)}px`)
      frame = requestAnimationFrame(loop)
    })

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
      <span ref={dotRef} className={styles.dot} />
    </div>
  )
}
