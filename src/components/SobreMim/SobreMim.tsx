import { useState } from 'react'
import styles from './SobreMim.module.css'
import { MarqueeRow } from '../ToolsMarquee/ToolsMarquee'
import imgEssaSouEu from '../../assets/sobre/essa-sou-eu.webp'
import imgSlot2 from '../../assets/sobre/slot-2.webp'
import imgSlot3 from '../../assets/sobre/slot-3.webp'
import imgSlot4 from '../../assets/sobre/slot-4.webp'
import { useTranslation } from '../../i18n/LanguageContext'
import { semViuva } from '../../i18n/text'

const PHOTOS = [imgEssaSouEu, imgSlot2, imgSlot3, imgSlot4]

export function SobreMim() {
  const { t } = useTranslation()
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="sobre-mim" className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.textCol} data-animate>
          <span className={styles.eyebrow}>{t.sobreMim.eyebrow}</span>
          <h2 className={styles.title}>{semViuva(t.sobreMim.title)}</h2>

          <div className={styles.body}>
            {t.sobreMim.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <p className={styles.highlight}>{t.sobreMim.highlight}</p>
        </div>

        <div className={styles.photoCol} data-animate data-delay="1">
          <div className={styles.gallery}>
            {PHOTOS.map((src, i) => {
              const caption = t.sobreMim.photos[i]
              const active = i === activeIndex
              return (
                <button
                  key={i}
                  type="button"
                  className={`${styles.slot} ${active ? styles.slotActive : ''}`}
                  style={{ flexGrow: active ? 4.3 : 1 }}
                  onMouseEnter={() => setActiveIndex(i)}
                  onFocus={() => setActiveIndex(i)}
                  onClick={() => setActiveIndex(i)}
                  aria-pressed={active}
                  aria-label={caption.title}
                >
                  <img src={src} alt="" className={styles.slotImg} />
                  <span className={styles.slotCaption}>
                    <span className={styles.slotCaptionTitle}>{caption.title}</span>
                    {caption.subtitle && <span className={styles.slotCaptionSubtitle}>{caption.subtitle}</span>}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className={styles.toolsWrap} data-animate data-delay="3">
        <p className={styles.toolsLabel}>{t.sobreMim.toolsLabel}</p>
        <MarqueeRow seed={4} />
      </div>
    </section>
  )
}
