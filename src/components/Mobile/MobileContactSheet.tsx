import { useEffect } from 'react'
import styles from './Mobile.module.css'
import imgAvatar from '../../assets/sobre/essa-sou-eu.webp'
import { allProjects } from '../../data/projects'
import { useTranslation } from '../../i18n/LanguageContext'
import { LINKS } from './links'
import { IconClose } from './MobileIcons'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRightDoubleFreeIcons, Linkedin02FreeIcons, WhatsappFreeIcons } from '@hugeicons/core-free-icons'

interface MobileContactSheetProps {
  onClose: () => void
}

export function MobileContactSheet({ onClose }: MobileContactSheetProps) {
  const { t } = useTranslation()

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [onClose])

  const stats = [
    { value: `+${allProjects.length}`, label: t.mobile.statProjetos },
    { value: t.mobile.statAnosValue, label: t.mobile.statAnos },
    { value: t.mobile.statFormatoValue, label: t.mobile.statFormato },
  ]

  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalCard} onClick={e => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose} aria-label={t.mobile.fechar}>
          <IconClose />
        </button>

        <div className={styles.modalAvatars} aria-hidden="true">
          <span className={styles.modalAvatar}><img src={imgAvatar} alt="" /></span>
          <span className={`${styles.modalAvatar} ${styles.modalAvatarWa}`}>
            <HugeiconsIcon icon={WhatsappFreeIcons} size={40} strokeWidth={1.8} />
          </span>
          <span className={`${styles.modalAvatar} ${styles.modalAvatarLi}`}>
            <HugeiconsIcon icon={Linkedin02FreeIcons} size={40} strokeWidth={1.8} />
          </span>
        </div>

        <div className={styles.modalPills}>
          <span className={styles.modalPill}>{t.mobile.role}</span>
          <span className={styles.statusPill}>
            <span className={styles.statusDot} />
            {t.mobile.disponivel}
          </span>
        </div>

        <h2 className={styles.modalTitle}>{t.mobile.ctaTitle}</h2>
        <p className={styles.modalSubtitle}>{t.contactBanner.subtitle}</p>

        <div className={styles.statsRow}>
          {stats.map(s => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.waBtn}>
          <span className={styles.contactBtnDisc} aria-hidden="true">
            <HugeiconsIcon icon={ArrowRightDoubleFreeIcons} size={16} strokeWidth={2.2} />
          </span>
          {t.mobile.ctaWhatsapp}
        </a>
      </div>
    </div>
  )
}
