import { useEffect, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { HugeiconsIcon } from '@hugeicons/react'
import { Cancel01FreeIcons } from '@hugeicons/core-free-icons'
import styles from './Modal.module.css'
import { useTranslation } from '../../i18n/LanguageContext'
import { ThemeSwitch } from '../../theme/ThemeSwitch'

interface ModalProps {
  open: boolean
  title: string
  subtitle?: string
  /** Trocar esse valor rola o corpo do modal de volta pro topo. */
  scrollResetKey?: string | number
  onClose: () => void
  children: ReactNode
}

// Mesma régua da Hero (`--u` em Hero.module.css): 1920×1020 é a tela de
// referência. O conteúdo dos modais é todo em px fixos, então acima dela
// o painel travava em 1440px com letra miúda enquanto a Hero continuava
// crescendo — num monitor 4K ou com o zoom do navegador reduzido ele
// virava uma tira estreita no meio da tela. Abaixo da referência nada
// muda (o layout já cabe); acima, o overlay inteiro cresce junto.
function getModalZoom() {
  return Math.max(1, Math.min(window.innerWidth / 1920, window.innerHeight / 1020))
}

function useModalZoom(active: boolean) {
  const [zoom, setZoom] = useState(getModalZoom)
  useEffect(() => {
    if (!active) return
    const update = () => setZoom(getModalZoom())
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [active])
  return zoom
}

export function Modal({ open, title, subtitle, scrollResetKey, onClose, children }: ModalProps) {
  const { t } = useTranslation()
  const panelRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const zoom = useModalZoom(open)

  useEffect(() => {
    if (!open) return

    // A Hero já desliga o listener de scroll enquanto o modal está aberto
    // (prop `scrollEnabled`); aqui só cuidamos de teclado e foco.
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        onClose()
        return
      }
      // Trap de foco simples: Tab circula dentro do painel.
      if (e.key !== 'Tab' || !panelRef.current) return
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      } else if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    closeRef.current?.focus()
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  // Trocar de projeto ou de categoria dentro do modal precisa começar do
  // topo — senão o usuário cai no meio do case study seguinte.
  useEffect(() => {
    if (!open) return
    bodyRef.current?.scrollTo({ top: 0 })
  }, [open, scrollResetKey])

  if (!open) return null

  return createPortal(
    <div
      className={styles.overlay}
      role="presentation"
      style={zoom > 1 ? { zoom } : undefined}
      onMouseDown={e => { if (e.target === e.currentTarget) onClose() }}>
      <div
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        ref={panelRef}
      >
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.headings}>
              <h2 className={styles.title}>{title}</h2>
              {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
          </div>

          <div className={styles.headerRight}>
            <ThemeSwitch />
            <button ref={closeRef} className={styles.close} onClick={onClose} aria-label={t.modais.fechar}>
              <HugeiconsIcon icon={Cancel01FreeIcons} size={22} strokeWidth={1.8} />
            </button>
          </div>
        </header>

        <div className={styles.body} ref={bodyRef}>{children}</div>
      </div>
    </div>,
    document.body
  )
}
