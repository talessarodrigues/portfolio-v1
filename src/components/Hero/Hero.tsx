import { useEffect, useState } from 'react'
import styles from './Hero.module.css'
import { ToolsBackground } from '../ToolsBackground/ToolsBackground'
import imgPhoto from '../../assets/sobre/photo.png'

export function Hero() {
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => setShowCursor(v => !v), 530)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className={styles.hero}>
      <ToolsBackground />
      <div className={styles.inner}>

        {/* Badge disponível */}
        <div className={styles.topBar} data-animate data-delay="0">
          <div className={styles.badge}>
            <span className={styles.greenDot} />
            <span className={styles.badgeText}>Disponível para novos projetos</span>
            <img src={imgPhoto} alt="Talessa Rodrigues" className={styles.avatar} />
          </div>
        </div>

        {/* Headings */}
        <div className={styles.headings} data-animate data-delay="1">
          <div className={styles.headingRow}>
            <h1 className={styles.h1}>Olá, meu nome é Talessa Rodrigues.</h1>
          </div>
          <div className={styles.headingRow}>
            <h2 className={styles.h2}>
              Sou uma{' '}
              <span className={styles.highlight}>Product Designer</span>
              <span className={showCursor ? styles.cursor : styles.cursorHidden}>|</span>
            </h2>
          </div>
        </div>

        {/* Descrição */}
        <p className={styles.description} data-animate data-delay="2">
          Transformo problemas complexos em soluções digitais intuitivas,
          unindo estratégia, dados e experiência do usuário para gerar impacto real.
        </p>

        {/* CTAs */}
        <div className={styles.ctas} data-animate data-delay="3">
          <a href="#projetos" className={styles.btnSecondary}>
            Ver meus projetos
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 15L15 5M15 5H7M15 5V13" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contato" className={styles.btnPrimary}>
            Entre em contato
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#FFF"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
