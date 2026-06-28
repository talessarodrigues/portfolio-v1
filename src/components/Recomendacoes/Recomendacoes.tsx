import styles from './Recomendacoes.module.css'

const recs = [
  {
    name: 'Natália Pires',
    role: 'UX/UI Designer',
    company: 'Frontend Fusion',
    text: 'Trabalhei com a Talessa no projeto Frontend Fusion e posso dizer que ela é uma excelente parceira de equipe. Ela se adapta muito bem às mudanças do projeto, mantendo consistência, organização e qualidade nas entregas. Além disso, ela tem um senso estético muito forte, que agrega bastante valor ao resultado final do produto.',
  },
  {
    name: 'Matheus Fuentes',
    role: 'Software Engineer',
    company: 'Node.js & TypeScript',
    text: 'Conheço a Talessa há anos e tive a oportunidade de trabalhar com ela em diferentes projetos. Ao longo de todas essas experiências, ela sempre se destacou pela dedicação, profissionalismo e pela qualidade do seu trabalho. Como UX/UI Designer, possui uma excelente capacidade de entender problemas, organizar informações e criar interfaces que equilibram estética, funcionalidade e experiência do usuário.',
  },
  {
    name: 'Felipe Marzochi',
    role: 'Backend Java Developer',
    company: 'Conecta 360°',
    text: 'Trabalhando juntos no Conecta 360°, passei a valorizar uma característica da Talessa que nem sempre aparece em um portfólio: a capacidade de ouvir, interpretar diferentes pontos de vista e transformar discussões em soluções de UX/UI que fazem sentido para o produto. Essa postura, somada ao comprometimento com os prazos e ao cuidado com cada detalhe, faz dela uma profissional diferenciada.',
  },
  {
    name: 'Louise Rakel',
    role: 'Psicóloga Organizacional',
    company: 'Gestão Estratégica de RH',
    text: 'Como gestora, tenho a oportunidade de acompanhar de perto o trabalho da Talessa no desenvolvimento de soluções digitais para RH e NR-1. Nesse período, ela tem demonstrado sólida capacidade técnica em UX/UI Design, Product Discovery e UX Research, contribuindo de forma significativa para a construção de soluções alinhadas às necessidades do negócio.',
  },
  {
    name: 'Felipe S. Oliveira',
    role: 'Desenvolvedor Full-Stack',
    company: 'Java · Vue · React · Node.js',
    text: 'Tive a oportunidade de trabalhar com a Talessa Mayara em diversos projetos digitais, onde ela atuou como UX/UI Designer. Durante esse período, ela sempre demonstrou um excelente olhar para a experiência do usuário, aliando criatividade, organização e foco em entregar soluções que realmente agregavam valor ao produto.',
  },
  {
    name: 'Luana Alves',
    role: 'CEO',
    company: 'RhRecruiter',
    text: 'Tive a oportunidade de trabalhar com a Talessa em um momento importante de evolução da RHRecruiter e posso destacar seu comprometimento, profissionalismo e capacidade de transformar ideias em soluções bem estruturadas. Contribuiu diretamente para a construção da experiência e identidade dos nossos produtos, sempre demonstrando atenção aos detalhes.',
  },
]

const IconLinkedIn = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const doubled = [...recs, ...recs]

export function Recomendacoes() {
  return (
    <section className={styles.section} data-animate>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h2 className={styles.title}>Recomendações</h2>
            <p className={styles.subtitle}>Feedbacks de quem já trabalhou comigo em projetos reais.</p>
          </div>
          <a
            href="https://www.linkedin.com/in/talessamayara/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedinBtn}
          >
            Ver LinkedIn
            <IconLinkedIn />
          </a>
        </div>

        <div className={styles.marqueeOuter}>
          <div className={styles.marqueeInner}>
            {doubled.map((rec, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.avatar}>{rec.name.charAt(0)}</div>
                  <div>
                    <div className={styles.name}>{rec.name}</div>
                    <div className={styles.role}>{rec.role}{rec.company ? ` · ${rec.company}` : ''}</div>
                  </div>
                </div>
                <p className={styles.text}>"{rec.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
