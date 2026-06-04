import styles from './ToolsMarquee.module.css'

export const toolIcons = [
  { src: 'https://www.figma.com/api/mcp/asset/034d62aa-9dff-401b-832c-212defd480f4', radius: 16,  whiteBg: false },
  { src: 'https://www.figma.com/api/mcp/asset/1b300c65-580c-4a94-8106-86b57d4fd4dc', radius: 16,  whiteBg: false },
  { src: 'https://www.figma.com/api/mcp/asset/79fc079c-cef3-4b90-ab09-b7321d17f9b6', radius: 22,  whiteBg: false },
  { src: 'https://www.figma.com/api/mcp/asset/5349c451-4a35-472b-a9d2-ec3136599248', radius: 16,  whiteBg: false },
  { src: 'https://www.figma.com/api/mcp/asset/5b463e39-4aa6-4ce2-ae86-dd9105bdf06a', radius: 16,  whiteBg: false },
  { src: 'https://www.figma.com/api/mcp/asset/03cc9026-393e-47c4-8e75-31cc0d5458bc', radius: 16,  whiteBg: false },
  { src: 'https://www.figma.com/api/mcp/asset/cebbe88f-8502-4761-b645-f01d9bb456fa', radius: 16,  whiteBg: true  },
  { src: 'https://www.figma.com/api/mcp/asset/b7c92181-a43a-4cb6-bfaf-b8f04f996b89', radius: 16,  whiteBg: false },
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
