import { useEffect, useId, useRef, useState } from 'react'
import styles from './LikeButton.module.css'
import {
  MAX_LIKES_PER_VISITOR,
  fetchTotals,
  getMyLikes,
  incrementLike,
  setMyLikes,
} from '../../data/likes'

interface LikeButtonProps {
  /** Chave estável do projeto — usamos o título, que não muda entre idiomas. */
  projectKey: string
  label: string
  /** `compact` é a versão dos cards da grade; `full` a do case study. */
  variant?: 'compact' | 'full'
}

// A carinha muda conforme o coração enche, como no material de
// referência: neutra vazia → sorrindo → derretendo no final.
function Face({ level }: { level: number }) {
  const happy = level >= 1
  const full = level >= MAX_LIKES_PER_VISITOR

  return (
    <g className={styles.face}>
      {happy ? (
        <>
          <path d="M13.4 16.6c.7-1 2-1 2.7 0" />
          <path d="M23.9 16.6c.7-1 2-1 2.7 0" />
        </>
      ) : (
        <>
          <path d="M14.8 16.4v1.4" />
          <path d="M25.2 16.4v1.4" />
        </>
      )}

      {full ? (
        <path d="M16.4 20.6h7.2a3.6 3.6 0 0 1-7.2 0Z" className={styles.mouthFilled} />
      ) : (
        <path d={happy ? 'M16.8 20.4c1.5 1.9 4.9 1.9 6.4 0' : 'M17.6 20.8c1.1 1 3.7 1 4.8 0'} />
      )}

      {full && (
        <g className={styles.blush}>
          <ellipse cx="11.6" cy="19.6" rx="1.7" ry="1.1" />
          <ellipse cx="28.4" cy="19.6" rx="1.7" ry="1.1" />
        </g>
      )}
    </g>
  )
}

export function LikeButton({ projectKey, label, variant = 'compact' }: LikeButtonProps) {
  const clipId = useId().replace(/:/g, '')
  const [mine, setMine] = useState(0)
  const [total, setTotal] = useState<number | null>(null)
  const [celebrating, setCelebrating] = useState(false)
  const celebrationTimer = useRef<number | undefined>(undefined)

  useEffect(() => {
    setMine(getMyLikes(projectKey))
    let alive = true
    fetchTotals([projectKey])
      .then(totals => { if (alive) setTotal(totals[projectKey] ?? 0) })
      .catch(() => { if (alive) setTotal(0) })
    return () => { alive = false }
  }, [projectKey])

  useEffect(() => () => window.clearTimeout(celebrationTimer.current), [])

  const handleClick = (e: React.MouseEvent) => {
    // O botão vive dentro de cards clicáveis — curtir não pode abrir o case.
    e.stopPropagation()
    if (mine >= MAX_LIKES_PER_VISITOR) return

    const next = mine + 1
    setMine(next)
    setMyLikes(projectKey, next)
    // Otimista: o número sobe na hora e o backend confirma depois.
    setTotal(prev => (prev ?? 0) + 1)
    incrementLike(projectKey)
      .then(confirmed => setTotal(confirmed))
      .catch(() => {})

    if (next === MAX_LIKES_PER_VISITOR) {
      setCelebrating(true)
      celebrationTimer.current = window.setTimeout(() => setCelebrating(false), 900)
    }
  }

  const level = mine
  const isFull = level >= MAX_LIKES_PER_VISITOR
  // O preenchimento sobe de baixo pra cima dentro do recorte do coração.
  const fillTop = 36 - (36 * level) / MAX_LIKES_PER_VISITOR
  const heartPath = 'M20 33.4C6.7 24.2 1.6 17.4 2.6 11.2 3.4 6.3 7.4 3.4 11.6 3.4c3.6 0 6.7 2 8.4 4.7 1.7-2.7 4.8-4.7 8.4-4.7 4.2 0 8.2 2.9 9 7.8 1 6.2-4.1 13-17.4 22.2Z'

  return (
    <div className={`${styles.root} ${styles[variant]}`}>
      <button
        type="button"
        className={`${styles.button} ${isFull ? styles.buttonFull : ''} ${celebrating ? styles.celebrating : ''}`}
        onClick={handleClick}
        disabled={isFull}
        aria-label={`${label} — ${level}/${MAX_LIKES_PER_VISITOR}`}
      >
        <svg viewBox="0 0 40 36" className={styles.heart} aria-hidden="true">
          <defs>
            <clipPath id={`clip-${clipId}`}>
              <path d={heartPath} />
            </clipPath>
            <linearGradient id={`grad-${clipId}`} x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#FF4D8D" />
              <stop offset="100%" stopColor="#FF8FB8" />
            </linearGradient>
          </defs>

          <g clipPath={`url(#clip-${clipId})`}>
            <rect x="0" y="0" width="40" height="36" className={styles.heartBase} />
            <rect
              x="0"
              y="0"
              width="40"
              height="36"
              fill={`url(#grad-${clipId})`}
              className={styles.heartFill}
              style={{ transform: `translateY(${fillTop}px)` }}
            />
          </g>

          <path d={heartPath} className={styles.heartOutline} />

          <Face level={level} />
        </svg>

        {/* Faíscas do feedback ao completar */}
        <span className={styles.sparks} aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className={styles.spark} style={{ '--i': i } as React.CSSProperties} />
          ))}
        </span>
      </button>

      <span className={styles.count} aria-live="polite">
        {total === null ? '—' : total.toLocaleString('pt-BR')}
      </span>
    </div>
  )
}
