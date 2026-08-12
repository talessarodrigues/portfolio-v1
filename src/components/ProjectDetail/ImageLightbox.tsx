import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { HugeiconsIcon } from '@hugeicons/react'
import { Cancel01FreeIcons } from '@hugeicons/core-free-icons'
import styles from './ImageLightbox.module.css'
import { useTranslation } from '../../i18n/LanguageContext'

interface ImageLightboxProps {
  src: string | null
  onClose: () => void
}

// Abre a imagem do case study em tela cheia. Vive num portal no body
// pra não herdar o `overflow: hidden` dos sheets e modais em que o
// detalhamento é montado.
export function ImageLightbox({ src, onClose }: ImageLightboxProps) {
  const { t } = useTranslation()

  useEffect(() => {
    if (!src) return
    const onEsc = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      // Sem o stop, o Esc fecharia também o modal/sheet por baixo.
      e.stopPropagation()
      onClose()
    }
    document.addEventListener('keydown', onEsc, true)
    return () => document.removeEventListener('keydown', onEsc, true)
  }, [src, onClose])

  if (!src) return null

  return createPortal(
    <div className={styles.overlay} role="dialog" aria-modal="true" onClick={onClose}>
      <button className={styles.close} onClick={onClose} aria-label={t.modais.fechar}>
        <HugeiconsIcon icon={Cancel01FreeIcons} size={22} strokeWidth={1.8} />
      </button>
      <img
        src={src}
        alt=""
        className={styles.image}
        // O clique na própria imagem não fecha — só no fundo e no X.
        onClick={e => e.stopPropagation()}
      />
    </div>,
    document.body
  )
}
