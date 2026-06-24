import styles from './ProjectsGrid.module.css'

import img00 from '../../assets/projetos/img00.png'
import img01 from '../../assets/projetos/img01.png'
import img02 from '../../assets/projetos/img02.png'
import img03 from '../../assets/projetos/img03.png'
import img04 from '../../assets/projetos/img04.png'
import img05 from '../../assets/projetos/img05.png'
import img06 from '../../assets/projetos/img06.png'
import img07 from '../../assets/projetos/img07.png'
import img08 from '../../assets/projetos/img08.png'
import img09 from '../../assets/projetos/img09.png'
import img10 from '../../assets/projetos/img10.png'
import img11 from '../../assets/projetos/img11.png'
import img12 from '../../assets/projetos/img12.png'
import img13 from '../../assets/projetos/img13.png'
import img14 from '../../assets/projetos/img14.png'
import img15 from '../../assets/projetos/img15.png'
import img16 from '../../assets/projetos/img16.png'
import img17 from '../../assets/projetos/img17.png'
import img18 from '../../assets/projetos/img18.png'
import img19 from '../../assets/projetos/img19.png'
import img20 from '../../assets/projetos/img20.png'
import img21 from '../../assets/projetos/img21.png'
import img22 from '../../assets/projetos/img22.png'
import img23 from '../../assets/projetos/img23.png'
import img24 from '../../assets/projetos/img24.png'
type Project = { image?: string; title: string; category: string }

const projects: Project[] = [
  { image: img00, title: 'Eccomerce Website',       category: 'Em breve' },
  { image: img01, title: 'Software NR-1',            category: 'Em breve' },
  { image: img02, title: 'Dashboard + Landing Page', category: 'Em breve' },
  { image: img03, title: 'Orbit Creators',           category: 'Em breve' },
  { image: img04, title: 'App Fitness',              category: 'Apps' },
  { image: img05, title: 'Portfólio Full Stack',     category: 'Website' },
  { image: img06, title: 'Drakorys',                 category: 'Website' },
  { image: img07, title: 'Resident Evil',            category: 'Website' },
  { image: img08, title: 'Recheiaê Delivery',        category: 'Apps' },
  { image: img09, title: 'Portfólio UX/UI',          category: 'Website' },
  { image: img10, title: 'Redesign Checkout',        category: 'Apps' },
  { image: img11, title: 'Caffe Express',            category: 'Apps' },
  { image: img12, title: 'Essencial Perfumaria',     category: 'Dashboard' },
  { image: img13, title: 'Summup + Pix',             category: 'Website' },
  { image: img14, title: 'JC Corporativas',          category: 'Logotipo' },
  { image: img15, title: 'Conecta 360°',             category: 'Logotipo' },
  { image: img16, title: 'CatchUp Tech',             category: 'Logotipo' },
  { image: img17, title: 'Talessa Rodrigues',        category: 'Logotipo' },
  { image: img18, title: 'Cards YU-GI-OH',           category: 'Dashboard' },
  { image: img19, title: 'Heat Game',                category: 'Apps' },
  { image: img20, title: 'HVEX',                     category: 'Website' },
  { image: img21, title: 'Neobank',                  category: 'Apps' },
  { image: img22, title: 'Redesign Itaú',            category: 'Apps' },
  { image: img23, title: 'Alture Bank',              category: 'Website' },
  { image: img24, title: 'Planejamento Financeiro',  category: 'Dashboard' },
]

// Distribui os projetos em 3 lanes alternando posição, sem os sem imagem
const withImage = projects.filter(p => p.image)
const lane0 = withImage.filter((_, i) => i % 3 === 0)
const lane1 = withImage.filter((_, i) => i % 3 === 1)
const lane2 = withImage.filter((_, i) => i % 3 === 2)

function ProjectCard({ image, title, category }: Project) {
  return (
    <div className={styles.card}>
      <div className={`${styles.imageWrap} ${!image ? styles.imageBlank : ''}`}>
        {image && <img src={image} alt={title} className={styles.image} />}
        <div className={styles.imageBorder} />
      </div>
      <div className={styles.meta}>
        <span className={styles.metaTitle}>{title}</span>
        <span className={styles.metaDot}>·</span>
        <span className={styles.metaCategory}>{category}</span>
      </div>
    </div>
  )
}

// Marquee automático — triplicamos os itens para loop seamless
function MarqueeLane({ items, size, reverse }: { items: Project[]; size: 'large' | 'medium'; reverse?: boolean }) {
  const tripled = [...items, ...items, ...items]
  return (
    <div className={styles.marqueeOuter}>
      <div className={`${styles.marqueeInner} ${size === 'medium' ? styles.marqueeMedium : styles.marqueeLarge} ${reverse ? styles.marqueeReverse : ''}`}>
        {tripled.map((p, i) => (
          <div
            key={i}
            className={`${styles.marqueeCard} ${!p.image ? styles.imageBlank : ''}`}
          >
            {p.image && <img src={p.image} alt={p.title} className={styles.image} />}
            <div className={styles.imageBorder} />
          </div>
        ))}
      </div>
    </div>
  )
}

export function ProjectsGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container} data-animate>
        <div className={styles.header}>
          <h2 className={styles.headerTitle}>Todos os projetos</h2>
        </div>

        {/* Desktop: grid de 4 colunas */}
        <div className={styles.grid}>
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>

        {/* Mobile: 3 marquees automáticos */}
        <div className={styles.carousels}>
          <MarqueeLane items={lane0} size="large" />
          <MarqueeLane items={lane1} size="medium" reverse />
          <MarqueeLane items={lane2} size="large" />
        </div>
      </div>
    </section>
  )
}
