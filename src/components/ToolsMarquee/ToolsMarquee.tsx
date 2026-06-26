import styles from './ToolsMarquee.module.css'

import toolFigma from '../../assets/tools/figma.png'
import toolMiro from '../../assets/tools/miro.png'
import toolChatgpt from '../../assets/tools/chatgpt.png'
import toolFreepik from '../../assets/tools/freepik.png'
import toolNotion from '../../assets/tools/notion.png'
import toolPhotoshop from '../../assets/tools/photoshop.png'
import toolMaze from '../../assets/tools/maze.png'
import toolFramer from '../../assets/tools/framer.png'

export const toolIcons = [
  { src: toolFigma,     radius: 16,  whiteBg: false },
  { src: toolMiro,      radius: 16,  whiteBg: false },
  { src: toolChatgpt,   radius: 22,  whiteBg: false },
  { src: toolFreepik,   radius: 16,  whiteBg: false },
  { src: toolNotion,    radius: 16,  whiteBg: false },
  { src: toolPhotoshop, radius: 16,  whiteBg: false },
  { src: toolMaze,      radius: 16,  whiteBg: true  },
  { src: toolFramer,    radius: 16,  whiteBg: false },
]

function seededShuffle<T>(arr: T[], seed: number): T[] {
  const out = [...arr]
  let s = seed
  for (let i = out.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    const j = Math.abs(s) % (i + 1)
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

export function MarqueeRow({ reverse, seed }: { reverse?: boolean; seed: number }) {
  const shuffled = seededShuffle(toolIcons, seed)
  const items = [...shuffled, ...shuffled, ...shuffled]
  return (
    <div className={styles.marqueeOuter}>
      <div className={[styles.marqueeInner, reverse ? styles.marqueeReverse : ''].join(' ')}>
        {items.map((t, i) => (
          <div
            key={i}
            className={styles.toolIcon}
            style={{
              borderRadius: t.radius,
              background: t.whiteBg ? '#fff' : undefined,
              padding: t.whiteBg ? '10px' : undefined,
            }}
          >
            <img src={t.src} alt="" className={styles.toolIconImg} />
          </div>
        ))}
      </div>
      <div className={styles.fadeLeft} />
      <div className={styles.fadeRight} />
    </div>
  )
}

export function ToolsMarquee() {
  return (
    <div className={styles.toolsRows}>
      <MarqueeRow seed={1} />
      <MarqueeRow seed={2} reverse />
      <MarqueeRow seed={3} />
    </div>
  )
}
