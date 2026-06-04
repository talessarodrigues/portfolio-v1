import styles from './ProjectsGrid.module.css'

const img00 = 'https://www.figma.com/api/mcp/asset/dcf6b9e6-9252-42f9-8d23-2906045abab4'
const img01 = 'https://www.figma.com/api/mcp/asset/4f824ec1-5a37-4353-9c3a-c40f0da012c4'
const img02 = 'https://www.figma.com/api/mcp/asset/495d93d7-db35-4406-8274-93bd8051137a'
const img03 = 'https://www.figma.com/api/mcp/asset/1278ac83-6f03-4d51-bc01-f617f10ad8c4'
const img04 = 'https://www.figma.com/api/mcp/asset/73cea171-f01e-4405-bd1d-c041fc15b6e3'
const img05 = 'https://www.figma.com/api/mcp/asset/4edff9b9-4f83-4b26-8483-b56c146e7ac9'
const img06 = 'https://www.figma.com/api/mcp/asset/721e7c25-7ec4-4ea1-b926-a87cff57a8c5'
const img07 = 'https://www.figma.com/api/mcp/asset/211c34ec-cccc-48dd-840d-735d42e119cd'
const img08 = 'https://www.figma.com/api/mcp/asset/12cc055f-4f25-46dd-9724-4a1154a551b8'
const img09 = 'https://www.figma.com/api/mcp/asset/853e9e32-f0b2-4c6d-8308-6331690f20e8'
const img10 = 'https://www.figma.com/api/mcp/asset/cabb26b8-4593-49ed-84d3-9d2315933d60'
const img11 = 'https://www.figma.com/api/mcp/asset/038e4bc6-3d58-4348-9f75-5d48eaac37d9'
const img12 = 'https://www.figma.com/api/mcp/asset/9f7e339b-bcc1-438b-91a5-349c45291019'
const img13 = 'https://www.figma.com/api/mcp/asset/22c5b30b-1a6a-44f7-93a2-733a984a94c1'
const img14 = 'https://www.figma.com/api/mcp/asset/41c0428f-2bf9-4945-9506-c0e419fff450'
const img15 = 'https://www.figma.com/api/mcp/asset/488681b7-5b3d-4087-a93d-2e9b6fe5640b'
const img16 = 'https://www.figma.com/api/mcp/asset/a028ed07-038f-49af-91ff-5651d44d5d87'
const img17 = 'https://www.figma.com/api/mcp/asset/63f80c14-8799-4892-a918-70ec4ef3a3b9'
const img18 = 'https://www.figma.com/api/mcp/asset/edaeaeb9-9711-4bfc-bfff-9213426a9a39'
const img19 = 'https://www.figma.com/api/mcp/asset/c1436139-86b8-4e40-9c7f-3b8751fb1a6b'
const img20 = 'https://www.figma.com/api/mcp/asset/667402bc-d0c2-4efc-8683-7e5928860160'
const img21 = 'https://www.figma.com/api/mcp/asset/cd68e616-dbb5-4075-8cf8-71b1071d745b'
const img22 = 'https://www.figma.com/api/mcp/asset/a8d3783c-ad8a-4095-9e00-0449c3c99209'
const img23 = 'https://www.figma.com/api/mcp/asset/7bb48386-665f-4cb1-8f7f-5883f081826e'
const img24 = 'https://www.figma.com/api/mcp/asset/b64f6cc0-fb8d-4f01-94aa-9f2b531c1681'
const img25 = 'https://www.figma.com/api/mcp/asset/575dd7a2-bf64-41ea-8651-b0b3c9163445'

const IconChevron = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

type Project = { image?: string; title: string; category: string }

const projects: Project[] = [
  { image: img00, title: 'Eccomerce Website',       category: 'Em breve' },
  { image: img01, title: 'Software NR-1',            category: 'Em breve' },
  { image: img02, title: 'Dashboard + Landing Page', category: 'Em breve' },
  { image: img03, title: 'Orbit Creators',           category: 'Em breve' },
  { title: 'App Fintech Workshop',                   category: 'Em breve' },
  { title: 'App Fintech Workshop',                   category: 'Em breve' },
  { title: 'App Fintech Workshop',                   category: 'Em breve' },
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

        <div className={styles.footer}>
          <span className={styles.footerText}>Veja mais projetos</span>
          <span className={styles.footerIcon}><IconChevron /></span>
        </div>
      </div>
    </section>
  )
}
