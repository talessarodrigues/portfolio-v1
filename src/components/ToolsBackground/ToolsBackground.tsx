import styles from './ToolsBackground.module.css'

import freepikIcon   from '../../assets/icons/figma.svg'
import notionIcon    from '../../assets/icons/notion.svg'
import psIcon        from '../../assets/icons/ps.svg'
import photoshopIcon from '../../assets/icons/xd.svg'
import miroIcon      from '../../assets/icons/ai.svg'
import figmaIcon     from '../../assets/icons/miro.svg'
import framerIcon    from '../../assets/icons/framer.svg'
import gptIcon       from '../../assets/icons/maze.svg'

type IconItem = { src: string; label: string }

// grupos exclusivos: nenhum ícone aparece nas duas colunas ao mesmo tempo
const COL1: IconItem[] = [
  { src: figmaIcon,     label: 'Figma' },
  { src: psIcon,        label: 'Photoshop' },
  { src: framerIcon,    label: 'Framer' },
  { src: gptIcon,       label: 'GPT' },
]

const COL2: IconItem[] = [
  { src: freepikIcon,   label: 'Freepik' },
  { src: miroIcon,      label: 'Miro' },
  { src: photoshopIcon, label: 'Adobe XD' },
  { src: notionIcon,    label: 'Notion' },
]

function Card({ src, label }: IconItem) {
  return (
    <div className={styles.cardOuter}>
      <div className={styles.cardBg} />
      <div className={styles.cardContent}>
        <div className={styles.iconWrap}>
          <img src={src} alt={label} className={styles.icon} draggable={false} />
        </div>
        <span className={styles.label}>{label}</span>
      </div>
    </div>
  )
}

interface ColumnProps {
  items: IconItem[]
  direction: 'up' | 'down'
}

function Column({ items, direction }: ColumnProps) {
  // duplicar → translateY(±50%) volta à posição visual idêntica → loop perfeito
  const doubled = [...items, ...items]
  return (
    <div className={styles.column}>
      <div className={direction === 'up' ? styles.trackUp : styles.trackDown}>
        {doubled.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </div>
  )
}

export function ToolsBackground() {
  return (
    <div className={styles.root} aria-hidden="true">
      <div className={styles.scene}>
        <Column items={COL1} direction="up" />
        <Column items={COL2} direction="down" />
      </div>
    </div>
  )
}
