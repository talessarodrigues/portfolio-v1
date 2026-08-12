import styles from './ToolsMarquee.module.css'

import toolFigma from '../../assets/tools/figma.png'
import toolMiro from '../../assets/tools/miro.png'
import toolChatgpt from '../../assets/tools/chatgpt.png'
import toolFreepik from '../../assets/tools/freepik.png'
import toolNotion from '../../assets/tools/notion.png'
import toolPhotoshop from '../../assets/tools/photoshop.png'
import toolMidjourney from '../../assets/tools/midjourney.webp'
import toolFramer from '../../assets/tools/framer.png'
import toolClaude from '../../assets/tools/claude.webp'
import toolStitch from '../../assets/tools/stitch.webp'
import toolGrok from '../../assets/tools/grok.webp'
import toolGemini from '../../assets/tools/gemini.webp'
import toolJira from '../../assets/tools/jira.webp'
import toolMultica from '../../assets/tools/multica.webp'
import toolCodex from '../../assets/tools/codex.webp'
import toolAntigravity from '../../assets/tools/antigravity.webp'

export const toolIcons = [
  { src: toolFigma,       radius: 16 },
  { src: toolMiro,        radius: 16 },
  { src: toolChatgpt,     radius: 22 },
  { src: toolFreepik,     radius: 16 },
  { src: toolNotion,      radius: 16 },
  { src: toolPhotoshop,   radius: 16 },
  { src: toolMidjourney,  radius: 16, whiteBg: true },
  { src: toolFramer,      radius: 16 },
  { src: toolClaude,      radius: 16 },
  { src: toolStitch,      radius: 16 },
  { src: toolGrok,        radius: 16, whiteBg: true },
  { src: toolGemini,      radius: 16, whiteBg: true },
  { src: toolJira,        radius: 16 },
  { src: toolMultica,     radius: 16 },
  { src: toolCodex,       radius: 16 },
  { src: toolAntigravity, radius: 16 },
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
            className={`${styles.toolIcon} ${t.whiteBg ? styles.toolIconPadded : ''}`}
            style={{ borderRadius: t.radius }}
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
