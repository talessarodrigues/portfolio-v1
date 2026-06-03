import { useState } from 'react'
import styles from './ContactBanner.module.css'

export function ContactBanner() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    // TODO: conectar ao endpoint de contato
    setEmail('')
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        {/* Left — text */}
        <div className={styles.textCol}>
          <h2 className={styles.title}>Vamos criar algo juntos?</h2>
          <p className={styles.subtitle}>Estou sempre aberta a novos desafios e oportunidades.</p>
        </div>

        {/* Right — email form */}
        <div className={styles.formCol}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <input
              className={styles.input}
              type="email"
              placeholder="Seu email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              aria-label="Seu email"
            />
            <button type="submit" className={styles.submitBtn}>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
