import { useState } from 'react'
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

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section className={styles.section}>
      <div className={styles.left} data-animate>
        <div className={styles.sticky}>
          <h2 className={styles.title}>Perguntas comuns sobre meu trabalho</h2>
          <a href="mailto:talessa@email.com" className={styles.ctaBtn}>
            <span>Mande aqui sua dúvida</span>
            <IconArrow />
          </a>
        </div>
      </div>

      <div className={styles.list}>
        {faqs.map((faq, i) => {
          const isOpen = openId === faq.id
          return (
            <div key={faq.id} className={styles.accordionItem} data-animate data-delay={i + 1}>
              <button
                className={`${styles.row} ${isOpen ? styles.rowActive : ''}`}
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                aria-expanded={isOpen}
              >
                <span className={styles.rowNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.rowQ}>{faq.question}</span>
                <span className={`${styles.rowIcon} ${isOpen ? styles.rowIconOpen : ''}`}>+</span>
              </button>
              {isOpen && (
                <div className={styles.accordionBody}>
                  <p className={styles.macAnswer}>{faq.answer}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
