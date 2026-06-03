import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './FAQ.module.css'

const IconArrow = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M5 15L15 5M15 5H8M15 5V12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const faqs = [
  { id: 'faq-1', question: 'Como funciona seu processo de trabalho?',         answer: 'Meu processo começa com entendimento profundo do problema e dos objetivos do negócio. A partir disso, passo por etapas de pesquisa, definição de fluxos, design de interface e validação, garantindo que a solução seja funcional, intuitiva e alinhada com o usuário.' },
  { id: 'faq-2', question: 'Você trabalha com times ou projetos individuais?', answer: 'Posso atuar de forma colaborativa com equipes (squads, desenvolvedores, PMs) ou conduzir projetos de ponta a ponta, desde o discovery até a entrega final.' },
  { id: 'faq-3', question: 'Quais entregáveis você oferece?',                  answer: 'Depende da necessidade do projeto, mas geralmente incluo: fluxos de usuário, wireframes, interfaces (UI), protótipos interativos e documentação para desenvolvimento.' },
  { id: 'faq-4', question: 'Você trabalha com prazos e metas?',                answer: 'Sim. Organizo o trabalho com base em prioridades e objetivos claros, garantindo entregas consistentes e alinhadas com o tempo do projeto.' },
  { id: 'faq-5', question: 'Você também trabalha com redesign de produtos?',   answer: 'Sim. Posso analisar produtos existentes, identificar problemas de usabilidade e propor melhorias focadas em experiência do usuário e performance.' },
  { id: 'faq-6', question: 'Você desenvolve o código também?',                 answer: 'Meu foco hoje é UX/UI Design. Mas trabalho em conjunto com desenvolvedores, garantindo que as soluções sejam viáveis e bem implementadas.' },
]

const DEFAULT_W  = 480
const DEFAULT_H  = 200
const MIN_W      = 260
const MIN_H      = 120
const TITLE_H    = 38   // height of title bar in px

interface WinState {
  id: string; question: string; answer: string
  x: number;  y: number
  w: number;  h: number
  savedX: number; savedY: number; savedW: number; savedH: number
  minimized: boolean
  maximized: boolean
  z: number
}

// ── Suck animation ────────────────────────────────────────────
function animateSuck(winEl: HTMLElement, btnEl: HTMLElement, onDone: () => void) {
  const wr = winEl.getBoundingClientRect()
  const br = btnEl.getBoundingClientRect()
  const tx = (br.left + br.width  / 2) - (wr.left + wr.width  / 2)
  const ty = (br.top  + br.height / 2) - (wr.top  + TITLE_H / 2)
  winEl.animate([
    { transform: 'translate(0,0) scale(1)',                  opacity: 1, borderRadius: '12px' },
    { transform: `translate(${tx}px,${ty}px) scale(0.06)`,  opacity: 0, borderRadius: '50%'  },
  ], { duration: 380, easing: 'cubic-bezier(0.6,0,0.8,0.4)', fill: 'forwards' }).onfinish = onDone
}

// ── MacWindow ─────────────────────────────────────────────────
export interface MacWindowHandle { triggerClose: () => void }

const MacWindow = forwardRef<MacWindowHandle, {
  win:        WinState
  winStyle:   React.CSSProperties   // position+size computed by parent
  bodyHeight: string | number        // height for body when maximized+open
  onClose:    (id: string) => void
  onMinimize: (id: string) => void
  onMaximize: (id: string) => void
  onFocus:    (id: string) => void
  onMove:     (id: string, x: number, y: number) => void
  onResize:   (id: string, w: number, h: number) => void
  buttonRef:  React.RefObject<HTMLButtonElement | null>
}>(function MacWindow({ win, winStyle, bodyHeight, onClose, onMinimize, onMaximize, onFocus, onMove, onResize, buttonRef }, ref) {
  const winRef  = useRef<HTMLDivElement>(null)
  const dragRef = useRef<{ mx: number; my: number; wx: number; wy: number } | null>(null)
  const resRef  = useRef<{ mx: number; my: number; ww: number; wh: number } | null>(null)

  // Drag title bar
  const onTitleDown = useCallback((e: React.MouseEvent) => {
    if (win.maximized) return
    e.preventDefault(); onFocus(win.id)
    dragRef.current = { mx: e.clientX, my: e.clientY, wx: win.x, wy: win.y }
    const move = (ev: MouseEvent) => {
      if (!dragRef.current) return
      onMove(win.id, dragRef.current.wx + ev.clientX - dragRef.current.mx,
                     dragRef.current.wy + ev.clientY - dragRef.current.my)
    }
    const up = () => { dragRef.current = null; window.removeEventListener('mousemove', move); window.removeEventListener('mouseup', up) }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseup',   up)
  }, [win.id, win.x, win.y, win.maximized, onFocus, onMove])

  // Resize handle
  const onResizeDown = useCallback((e: React.MouseEvent) => {
    if (win.maximized) return
    e.preventDefault(); e.stopPropagation(); onFocus(win.id)
    resRef.current = { mx: e.clientX, my: e.clientY, ww: win.w, wh: win.h }
    const move = (ev: MouseEvent) => {
      if (!resRef.current) return
      onResize(win.id,
        Math.max(MIN_W, resRef.current.ww + ev.clientX - resRef.current.mx),
        Math.max(MIN_H, resRef.current.wh + ev.clientY - resRef.current.my))
    }
    const up = () => { resRef.current = null; window.removeEventListener('mousemove', move); window.removeEventListener('mouseup', up) }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseup',   up)
  }, [win.id, win.w, win.h, win.maximized, onFocus, onResize])

  // 🔴 Red — suck → close
  const handleClose = useCallback(() => {
    const el = winRef.current; const btn = buttonRef.current
    if (!el || !btn) { onClose(win.id); return }
    animateSuck(el, btn, () => onClose(win.id))
  }, [win.id, buttonRef, onClose])

  useImperativeHandle(ref, () => ({ triggerClose: handleClose }), [handleClose])

  // 🟡 Yellow — maximize / restore
  const handleMaximize = useCallback(() => onMaximize(win.id), [win.id, onMaximize])

  // 🟢 Green — toggle body visible/hidden (works in normal AND maximized state)
  const handleMinimize = useCallback(() => onMinimize(win.id), [win.id, onMinimize])

  return (
    <div
      ref={winRef}
      className={`${styles.macWin} ${win.maximized ? styles.macWinMax : ''}`}
      style={winStyle}
      onMouseDown={() => onFocus(win.id)}
    >
      {/* Title bar */}
      <div className={styles.macTitleBar} onMouseDown={onTitleDown} onDoubleClick={handleMaximize}>
        <div className={styles.trafficLights}>
          <button className={`${styles.light} ${styles.lightRed}`}    onClick={e => { e.stopPropagation(); handleClose() }}    title="Fechar"    aria-label="Fechar" />
          <button className={`${styles.light} ${styles.lightYellow}`} onClick={e => { e.stopPropagation(); handleMaximize() }} title="Maximizar" aria-label="Maximizar" />
          <button className={`${styles.light} ${styles.lightGreen}`}  onClick={e => { e.stopPropagation(); handleMinimize() }} title="Recolher"  aria-label="Recolher" />
        </div>
        <span className={styles.macTitle}>{win.question}</span>
      </div>

      {/* Body */}
      <div
        className={`${styles.macBody} ${win.minimized ? styles.macBodyHidden : ''}`}
        style={{ height: bodyHeight }}
      >
        <p className={styles.macAnswer}>{win.answer}</p>
      </div>

      {/* Resize handle — only for floating, non-minimized windows */}
      {!win.minimized && !win.maximized && (
        <div className={styles.resizeHandle} onMouseDown={onResizeDown} />
      )}
    </div>
  )
})

// ── Main FAQ ──────────────────────────────────────────────────
export function FAQ() {
  const [windows, setWindows] = useState<WinState[]>([])
  const [topZ,    setTopZ]    = useState(9000)
  const buttonRefs    = useRef<(HTMLButtonElement | null)[]>([])
  const winHandleRefs = useRef<Map<string, MacWindowHandle>>(new Map())

  // Strips = maximized windows with body hidden, sorted oldest→newest (top→bottom)
  const strips = useMemo(() =>
    windows.filter(w => w.maximized && w.minimized).sort((a, b) => a.z - b.z),
    [windows]
  )
  const stripsHeight = strips.length * TITLE_H   // total px taken by strips at top

  // Compute per-window style + body height
  function getWinLayout(win: WinState): { style: React.CSSProperties; bodyH: string | number } {
    if (!win.maximized) {
      return {
        style: { left: win.x, top: win.y, width: win.w, zIndex: win.z },
        bodyH: win.h,
      }
    }
    if (win.minimized) {
      // Collapsed maximized → narrow header strip pinned at top, above sidebar
      const idx = strips.findIndex(s => s.id === win.id)
      return {
        style: {
          position: 'fixed',
          top: idx * TITLE_H,
          left: 0,
          width: '100vw',
          height: TITLE_H,
          zIndex: 10001 + idx,
        },
        bodyH: 0,
      }
    }
    // Full maximized — above everything including sidebar
    return {
      style: {
        position: 'fixed',
        top: stripsHeight,
        left: 0,
        width: '100vw',
        height: `calc(100vh - ${stripsHeight}px)`,
        zIndex: 10001,
      },
      bodyH: `calc(100vh - ${stripsHeight}px - ${TITLE_H}px)`,
    }
  }

  const nextZ = useCallback(() => {
    let z = 0; setTopZ(n => { z = n + 1; return z }); return z
  }, [])

  const bringToFront = useCallback((id: string) => {
    const z = nextZ()
    setWindows(ws => ws.map(w => w.id === id ? { ...w, z } : w))
  }, [nextZ])

  const openWindow = useCallback((faq: typeof faqs[0]) => {
    setWindows(ws => {
      if (ws.find(w => w.id === faq.id)) {
        bringToFront(faq.id)
        return ws.map(w => w.id === faq.id ? { ...w, minimized: false } : w)
      }
      const offset = (ws.length % 6) * 30
      const z = topZ + 1; setTopZ(z)
      return [...ws, {
        id: faq.id, question: faq.question, answer: faq.answer,
        x: 200 + offset, y: 100 + offset,
        w: DEFAULT_W, h: DEFAULT_H,
        savedX: 200 + offset, savedY: 100 + offset, savedW: DEFAULT_W, savedH: DEFAULT_H,
        minimized: false, maximized: false, z,
      }]
    })
  }, [topZ, bringToFront])

  const closeWindow = useCallback((id: string) =>
    setWindows(ws => ws.filter(w => w.id !== id)), [])

  // toggle body visible/hidden
  const minimizeWindow = useCallback((id: string) =>
    setWindows(ws => ws.map(w => w.id === id ? { ...w, minimized: !w.minimized } : w)), [])

  const maximizeWindow = useCallback((id: string) => {
    setWindows(ws => ws.map(w => {
      if (w.id !== id) return w
      if (w.maximized) return { ...w, maximized: false, x: w.savedX, y: w.savedY, w: w.savedW, h: w.savedH }
      return { ...w, maximized: true, savedX: w.x, savedY: w.y, savedW: w.w, savedH: w.h }
    }))
  }, [])

  const moveWindow   = useCallback((id: string, x: number, y: number) =>
    setWindows(ws => ws.map(w => w.id === id ? { ...w, x, y } : w)), [])

  const resizeWindow = useCallback((id: string, nw: number, nh: number) =>
    setWindows(ws => ws.map(w => w.id === id ? { ...w, w: nw, h: nh } : w)), [])

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') setWindows([]) }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [])

  return (
    <section className={styles.section}>
      {/* Left */}
      <div className={styles.left}>
        <div className={styles.sticky}>
          <h2 className={styles.title}>Perguntas comuns sobre meu trabalho</h2>
          <a href="mailto:talessa@email.com" className={styles.ctaBtn}>
            <span>Mande aqui sua dúvida</span>
            <IconArrow />
          </a>
        </div>
      </div>

      {/* FAQ list */}
      <div className={styles.list}>
        {faqs.map((faq, i) => {
          const win    = windows.find(w => w.id === faq.id)
          const isOpen = !!win   // window exists = show ×, regardless of minimized
          return (
            <button
              key={faq.id}
              id={faq.id}
              ref={el => { buttonRefs.current[i] = el }}
              className={`${styles.row} ${isOpen ? styles.rowActive : ''}`}
              onClick={() => {
                if (isOpen) winHandleRefs.current.get(faq.id)?.triggerClose()
                else openWindow(faq)
              }}
            >
              <span className={styles.rowNum}>{String(i + 1).padStart(2, '0')}</span>
              <span className={styles.rowQ}>{faq.question}</span>
              <span className={styles.rowIcon}>{isOpen ? '×' : '+'}</span>
            </button>
          )
        })}

        {windows.length > 0 && (
          <button className={styles.closeAll} onClick={() => setWindows([])}>
            Fechar todas <kbd>esc</kbd>
          </button>
        )}
      </div>

      {/* Floating windows rendered in document.body via portal so z-index
          is never clipped by an ancestor stacking context */}
      {createPortal(
        [...windows].sort((a, b) => a.z - b.z).map(win => {
          const idx   = faqs.findIndex(f => f.id === win.id)
          const bRef  = { current: buttonRefs.current[idx] } as React.RefObject<HTMLButtonElement | null>
          const { style, bodyH } = getWinLayout(win)
          return (
            <MacWindow
              key={win.id}
              ref={el => { if (el) winHandleRefs.current.set(win.id, el); else winHandleRefs.current.delete(win.id) }}
              win={win}
              winStyle={style}
              bodyHeight={bodyH}
              buttonRef={bRef}
              onClose={closeWindow}
              onMinimize={minimizeWindow}
              onMaximize={maximizeWindow}
              onFocus={bringToFront}
              onMove={moveWindow}
              onResize={resizeWindow}
            />
          )
        }),
        document.body
      )}
    </section>
  )
}
