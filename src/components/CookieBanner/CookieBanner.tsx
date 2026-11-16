import { useEffect, useState } from 'react'
import { useTranslation } from '../../i18n/LanguageContext'
import { aoPedirPreferencias, lerConsentimento, salvarConsentimento } from '../../consent'
import styles from './CookieBanner.module.css'

// Aviso de cookies de medição. Aparece só enquanto a pessoa não decidiu, e
// reabre pelo link "Preferências de cookies" do rodapé.
export function CookieBanner() {
  const { t } = useTranslation()
  const [aberto, setAberto] = useState(() => lerConsentimento() === null)

  useEffect(() => aoPedirPreferencias(() => setAberto(true)), [])

  if (!aberto) return null

  const decidir = (valor: 'granted' | 'denied') => {
    salvarConsentimento(valor)
    setAberto(false)
  }

  return (
    <div className={styles.banner} role="dialog" aria-live="polite" aria-label={t.cookies.titulo}>
      <p className={styles.texto}>
        <strong className={styles.titulo}>{t.cookies.titulo}</strong>
        {t.cookies.texto}
      </p>
      <div className={styles.acoes}>
        <button type="button" className={styles.recusar} onClick={() => decidir('denied')}>
          {t.cookies.recusar}
        </button>
        <button type="button" className={styles.aceitar} onClick={() => decidir('granted')}>
          {t.cookies.aceitar}
        </button>
      </div>
    </div>
  )
}
