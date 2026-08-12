import { useCallback, useEffect, useRef, useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  ArrowRightDoubleFreeIcons,
  ArrowUpRight01FreeIcons,
  Behance02FreeIcons,
  Linkedin02FreeIcons,
  Mail01FreeIcons,
  Moon02FreeIcons,
  Sun03FreeIcons,
  WhatsappFreeIcons,
} from '@hugeicons/core-free-icons'
import styles from './Hero.module.css'
import imgIllustration from '../../assets/illustration/hero-bg.png'
import imgLogo from '../../assets/header/logo.svg'
import { useTranslation } from '../../i18n/LanguageContext'
import { useTheme } from '../../theme/ThemeContext'
import { LanguageMenu } from '../LanguageMenu/LanguageMenu'
import { heroSlideProjects } from '../../data/projects'
import type { Project } from '../../data/projects'
import { CONTACTS } from '../../data/contacts'

// Quanto tempo a troca de slide fica travada depois de um gesto. Trackpad
// dispara dezenas de eventos de wheel por gesto — sem essa trava o usuário
// atravessaria os 5 estados de uma vez só.
const SLIDE_LOCK_MS = 780
const SWIPE_THRESHOLD_PX = 40

export type HeroModal = 'cases' | 'perfil'

interface HeroProps {
  /** Some enquanto um modal está aberto — o scroll então é do modal, não da Hero. */
  scrollEnabled: boolean
  onOpenModal: (modal: HeroModal) => void
  onSelectProject: (project: Project) => void
  onNavigateContato: () => void
}

export function Hero({ scrollEnabled, onOpenModal, onSelectProject, onNavigateContato }: HeroProps) {
  const { t } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const slides = t.hero.slides

  const [active, setActive] = useState(0)
  // Direção do último avanço: alimenta a animação (entra por baixo indo pra
  // frente, por cima voltando).
  const [direction, setDirection] = useState<1 | -1>(1)
  const lockedUntil = useRef(0)

  const step = useCallback((delta: 1 | -1) => {
    const now = performance.now()
    if (now < lockedUntil.current) return
    lockedUntil.current = now + SLIDE_LOCK_MS
    setDirection(delta)
    // Loop infinito nos dois sentidos: passou do 05 volta pro 01.
    setActive(prev => (prev + delta + slides.length) % slides.length)
  }, [slides.length])

  const goTo = useCallback((index: number) => {
    setActive(prev => {
      if (index === prev) return prev
      setDirection(index > prev ? 1 : -1)
      return index
    })
    lockedUntil.current = performance.now() + SLIDE_LOCK_MS
  }, [])

  useEffect(() => {
    if (!scrollEnabled) return

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 4) return
      step(e.deltaY > 0 ? 1 : -1)
    }

    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) return
      if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); step(1) }
      if (e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); step(-1) }
    }

    // Touch: só para tablets/telas estreitas em paisagem — abaixo de 768px
    // o App troca pro layout mobile e a Hero nem monta.
    let touchStartY = 0
    const onTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY }
    const onTouchEnd = (e: TouchEvent) => {
      const delta = touchStartY - e.changedTouches[0].clientY
      if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return
      step(delta > 0 ? 1 : -1)
    }

    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('keydown', onKey)
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [scrollEnabled, step])

  const slide = slides[active]
  const project = heroSlideProjects[active]
  const titleLines = slide.title.split('\n')

  const NAV_ITEMS: { label: string; modal: HeroModal }[] = [
    { label: t.nav.cases, modal: 'cases' },
    { label: t.nav.perfil, modal: 'perfil' },
  ]

  // Behance fica por último porque é o item destacado no Figma.
  const SOCIALS = [
    { href: CONTACTS.linkedin, icon: Linkedin02FreeIcons, label: 'LinkedIn' },
    { href: CONTACTS.whatsapp, icon: WhatsappFreeIcons, label: 'WhatsApp' },
    { href: CONTACTS.email ? `mailto:${CONTACTS.email}` : '', icon: Mail01FreeIcons, label: 'E-mail' },
    { href: CONTACTS.behance, icon: Behance02FreeIcons, label: 'Behance', highlighted: true },
  ]

  return (
    <section id="hero" className={styles.section}>
      <div className={styles.card} data-direction={direction}>
        <img src={imgIllustration} alt="" className={styles.illustration} aria-hidden="true" />

        {/* ── Topo: logo à esquerda, painel branco de navegação à direita ── */}
        <button className={styles.logoBtn} onClick={() => goTo(0)} aria-label={t.header.irParaHome}>
          <img src={imgLogo} alt="Rodrigues Design" className={styles.logoImg} />
        </button>

        <div className={styles.navPanel}>
          <LanguageMenu variant="light" gradient />

          <nav className={styles.nav}>
            {NAV_ITEMS.map(item => (
              <button key={item.modal} className={styles.navLink} onClick={() => onOpenModal(item.modal)}>
                {item.label}
              </button>
            ))}
          </nav>

          <button className={styles.navCta} onClick={onNavigateContato}>
            <span className={styles.ctaChevron}>
              <HugeiconsIcon icon={ArrowRightDoubleFreeIcons} size={14} strokeWidth={2} />
            </span>
            <span className={styles.ctaLabel}>{t.hero.contato}</span>
          </button>
        </div>

        {/* ── Dock lateral: tema + redes sociais ───────────────────────── */}
        <div className={styles.dock}>
          {/* Cápsula um tom mais clara atrás das 3 redes, como no Figma. */}
          <span className={styles.dockGroup} aria-hidden="true" />

          <button
            className={styles.dockBtn}
            onClick={toggleTheme}
            aria-label={isDark ? t.hero.temaClaroAria : t.hero.temaEscuroAria}
          >
            <HugeiconsIcon icon={isDark ? Sun03FreeIcons : Moon02FreeIcons} size={22} strokeWidth={1.6} />
          </button>

          {SOCIALS.map(social => (
            <a
              key={social.label}
              className={`${styles.dockBtn} ${social.highlighted ? styles.dockBtnHighlighted : ''} ${social.href ? '' : styles.dockBtnPending}`}
              // Sem endereço definido o item não vira link: fica visível,
              // apagado e fora da ordem de tabulação.
              href={social.href || undefined}
              target={social.href ? '_blank' : undefined}
              rel={social.href ? 'noreferrer noopener' : undefined}
              aria-label={social.label}
              aria-disabled={social.href ? undefined : true}
            >
              <HugeiconsIcon icon={social.icon} size={22} strokeWidth={1.6} />
            </a>
          ))}
        </div>

        {/* ── Trilho 01–05 ─────────────────────────────────────────────── */}
        <div className={styles.numbers}>
          {slides.map((s, i) => (
            <button
              key={s.title}
              className={`${styles.num} ${i === active ? styles.numActive : ''}`}
              onClick={() => goTo(i)}
              aria-current={i === active}
              aria-label={`${t.hero.irParaSlideAria}: ${s.title.replace('\n', ' ')}`}
            >
              {String(i + 1).padStart(2, '0')}
            </button>
          ))}
        </div>

        {/* ── Prova de trabalho: case relacionado ao slide atual ───────── */}
        <button
          className={styles.peek}
          onClick={() => onSelectProject(project)}
          aria-label={`${t.hero.verCaseAria}: ${project.title}`}
        >
          <span className={styles.peekSheet} aria-hidden="true" />
          <span className={styles.peekPhoto}>
            <img key={active} src={project.image} alt={project.title} />
          </span>
          <span className={styles.peekArrow} aria-hidden="true">
            <HugeiconsIcon icon={ArrowUpRight01FreeIcons} size={26} strokeWidth={2.4} />
          </span>
        </button>

        {/* ── Bloco de texto: muda a cada slide ────────────────────────── */}
        <div className={styles.eyebrowRow} key={`eyebrow-${active}`}>
          <span className={styles.eyebrow}>{slide.eyebrow}</span>
          <span className={styles.eyebrowLine} />
        </div>

        <h1 className={styles.heading} key={`heading-${active}`}>
          {titleLines.map((line, i) => (
            <span key={i} className={styles.headingLine}>{line}</span>
          ))}
        </h1>

        <p className={styles.description} key={`desc-${active}`}>{slide.description}</p>

        <div className={styles.ctas}>
          <a className={styles.btnSecondary} href={CONTACTS.agenda} target="_blank" rel="noreferrer noopener">
            <span className={styles.ctaChevron}>
              <HugeiconsIcon icon={ArrowRightDoubleFreeIcons} size={14} strokeWidth={2} />
            </span>
            <span className={styles.ctaLabel}>{t.hero.ctaSecondary}</span>
          </a>
          <a className={styles.btnPrimary} href={CONTACTS.whatsapp} target="_blank" rel="noreferrer noopener">
            <span className={styles.ctaChevron}>
              <HugeiconsIcon icon={ArrowRightDoubleFreeIcons} size={14} strokeWidth={2} />
            </span>
            <span className={styles.ctaLabel}>{t.hero.ctaPrimary}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
