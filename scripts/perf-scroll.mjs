// Mede a fluidez da rolagem da home: abre o site num Chrome sem janela,
// rola do topo ao fim e registra o tempo de cada quadro. Serve para comparar
// antes e depois de uma mudança (os números absolutos dependem da máquina;
// o que vale é a diferença). Guarda cada medição em perf/history.json.
//
// Uso:
//   npm run build && npm run perf            (mede o build local)
//   npm run perf -- https://www.talessarodriguesdesign.com.br   (mede o site no ar)
import { spawn } from 'node:child_process'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import puppeteer from 'puppeteer-core'

const CHROME = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/usr/bin/google-chrome',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].find(p => p && existsSync(p))
if (!CHROME) throw new Error('Chrome não encontrado. Defina CHROME_PATH.')

const arg = process.argv.slice(2).find(a => !a.startsWith('--'))
const label = process.argv.find(a => a.startsWith('--label='))?.slice(8) ?? ''
// --cpu=4 simula um computador 4 vezes mais lento (mostra melhor o que pesa).
const cpu = Number(process.argv.find(a => a.startsWith('--cpu='))?.slice(6) ?? 1)
let url = arg
let server
if (!url) {
  // Sem URL: sobe o preview do build local.
  const port = 4173
  server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', 'preview', '--port', String(port), '--strictPort'], { stdio: 'ignore' })
  url = `http://localhost:${port}/`
  await new Promise(r => setTimeout(r, 2500))
}

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  userDataDir: mkdtempSync(join(tmpdir(), 'perf-chrome-')),
  args: ['--no-sandbox', '--no-first-run', '--window-size=1440,900'],
  defaultViewport: { width: 1440, height: 900 },
})

try {
  const page = await browser.newPage()
  if (cpu > 1) await (await page.createCDPSession()).send('Emulation.setCPUThrottlingRate', { rate: cpu })
  let bytes = 0
  let requests = 0
  page.on('response', async res => {
    requests++
    const len = Number(res.headers()['content-length'] || 0)
    bytes += len
  })
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 90000 })
  await new Promise(r => setTimeout(r, 1500))

  // Rola de cima a baixo em passos iguais, quadro a quadro, medindo cada quadro.
  const result = await page.evaluate(async () => {
    const total = document.documentElement.scrollHeight - innerHeight
    const durations = []
    const stepPx = 28
    let last = performance.now()
    let y = 0
    await new Promise(resolve => {
      function tick(now) {
        durations.push(now - last)
        last = now
        y += stepPx
        window.scrollTo(0, y)
        if (y < total) requestAnimationFrame(tick)
        else resolve()
      }
      requestAnimationFrame(tick)
    })
    durations.shift()
    durations.sort((a, b) => a - b)
    const n = durations.length
    const avg = durations.reduce((a, b) => a + b, 0) / n
    const pct = p => durations[Math.min(n - 1, Math.floor(n * p))]
    return {
      pageHeight: document.documentElement.scrollHeight,
      frames: n,
      avgMs: avg,
      fps: 1000 / avg,
      p50Ms: pct(0.5),
      p95Ms: pct(0.95),
      p99Ms: pct(0.99),
      slowPct: (durations.filter(d => d > 20).length / n) * 100,
      jankPct: (durations.filter(d => d > 34).length / n) * 100,
    }
  })

  const row = {
    data: new Date().toISOString().slice(0, 16).replace('T', ' '),
    label: cpu > 1 ? `${label} (CPU ${cpu}x)` : label,
    url,
    ...Object.fromEntries(Object.entries(result).map(([k, v]) => [k, Math.round(v * 10) / 10])),
    requisicoes: requests,
    kbTransferidos: Math.round(bytes / 1024),
  }
  console.table([row])

  mkdirSync('perf', { recursive: true })
  const file = resolve('perf/history.json')
  const history = existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : []
  history.push(row)
  writeFileSync(file, JSON.stringify(history, null, 2))
  console.log(`Guardado em perf/history.json (${history.length} medições)`)
} finally {
  await browser.close()
  server?.kill()
}
