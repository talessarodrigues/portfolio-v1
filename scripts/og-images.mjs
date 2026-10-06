// Gera as imagens de compartilhamento (Open Graph, 1200×630) que aparecem
// quando alguém cola o link no WhatsApp, LinkedIn, Slack etc.:
//   public/og-image.jpg        → home e /sobre
//   public/og/<slug>.jpg       → uma por case
//
// Cada imagem é um HTML com as fontes e cores do site, fotografado pelo
// Chrome headless. Roda na máquina (a Vercel não tem Chrome no build) e as
// imagens vão versionadas:  node scripts/og-images.mjs
// Rodar de novo sempre que entrar um case novo ou mudar a capa de um.
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, mkdtempSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import sharp from 'sharp'
import { createServer } from 'vite'
import { readProjects } from './projects-meta.mjs'

const ROOT = resolve(import.meta.dirname, '..')
const W = 1200
const H = 630

const CHROME = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
].find(p => p && existsSync(p))
if (!CHROME) throw new Error('Chrome não encontrado — defina CHROME_PATH')

// O texto dos cases vem do próprio dicionário (via Vite, que sabe ler TS).
const vite = await createServer({ root: ROOT, logLevel: 'error', server: { middlewareMode: true } })
const { pt } = await vite.ssrLoadModule('/src/i18n/dictionary.pt.ts')
const { getCase } = await vite.ssrLoadModule('/src/data/caseStudies.ts')
await vite.close()

const url = p => pathToFileURL(p).href
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const AVATAR = url(join(ROOT, 'src/assets/sobre/perfil-talessa.webp'))
const FRAMES = [
  'linear-gradient(140deg, #EFE6FD 0%, #C7AEF4 48%, #8E5CE6 100%)',
  'linear-gradient(140deg, #FBEAF1 0%, #EBBBD1 46%, #A57BE3 100%)',
  'linear-gradient(140deg, #E2F8FC 0%, #A9E6F2 45%, #8A9FF0 100%)',
  'linear-gradient(160deg, #FFF1EA 0%, #F2C3D5 50%, #C3A2F3 100%)',
]

const BASE = `
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..700&family=Outfit:wght@400;500;600&display=block" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: ${W}px; height: ${H}px; overflow: hidden; }
  body { position: relative; background: #FDF6F5; font-family: 'Outfit', sans-serif; color: #1a1a1a; }
  .glow { position: absolute; inset: 0; background:
    radial-gradient(420px 300px at 88% 8%, rgba(154,108,229,.32), transparent 70%),
    radial-gradient(380px 280px at 70% -4%, rgba(229,177,201,.45), transparent 70%),
    radial-gradient(360px 260px at 100% 40%, rgba(34,211,238,.18), transparent 70%),
    radial-gradient(420px 300px at 0% 105%, rgba(229,177,201,.35), transparent 70%); }
  .display { font-family: 'Bricolage Grotesque', sans-serif; letter-spacing: -0.02em; }
  .frame { border-radius: 28px; padding: 6.5% 7.5%; box-shadow: 0 30px 60px -30px rgba(52,24,98,.45); }
  .frame img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: top center;
    border-radius: 12px; box-shadow: 0 18px 40px -18px rgba(52,24,98,.5), 0 0 0 1px rgba(255,255,255,.4); }
  .url { font-size: 20px; font-weight: 500; color: rgba(26,26,26,.55); letter-spacing: .01em; }
</style>`

// Home: tudo que importa fica no centro, porque o WhatsApp corta a prévia
// pequena num quadrado central; os cases aparecem como molduras nas laterais.
function homeHtml(projects) {
  const side = (p, i, pos) => `
    <div class="frame" style="position:absolute; ${pos}; width:400px; height:300px; background:${FRAMES[i % 4]}">
      <img src="${url(p.image)}">
    </div>`
  const [a, b] = projects
  return `<!doctype html><meta charset="utf-8">${BASE}
  <div class="glow"></div>
  ${side(a, 0, 'left:-150px; top:70px; transform:rotate(-7deg)')}
  ${side(b, 1, 'right:-150px; top:250px; transform:rotate(6deg)')}
  <div style="position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; gap:0">
    <img src="${AVATAR}" style="width:112px; height:112px; border-radius:30px; object-fit:cover; box-shadow:0 14px 30px -14px rgba(52,24,98,.55)">
    <h1 class="display" style="margin-top:26px; font-size:68px; font-weight:600; line-height:1; color:#7443D6">Talessa Rodrigues</h1>
    <p class="display" style="margin-top:14px; font-size:34px; font-weight:500; color:#1a1a1a">Product Designer &amp; AI Engineer</p>
    <p style="margin-top:18px; font-size:22px; color:rgba(26,26,26,.62)">UX/UI · Design Systems · Produtos construídos com IA</p>
    <p class="url" style="margin-top:34px">talessarodriguesdesign.com.br</p>
  </div>`
}

function caseHtml(p, text, desc, index) {
  const eyebrow = ['Case', pt.categories[p.categoryKey], text?.metaAnoValue].filter(Boolean).join(' · ')
  const long = p.title.length > 18
  return `<!doctype html><meta charset="utf-8">${BASE}
  <div class="glow"></div>
  <div style="position:absolute; left:64px; top:0; bottom:0; width:470px; display:flex; flex-direction:column; justify-content:center">
    <p style="font-size:20px; font-weight:600; color:#7443D6; letter-spacing:.02em">${esc(eyebrow)}</p>
    <h1 class="display" style="margin-top:14px; font-size:${long ? 50 : 62}px; font-weight:600; line-height:1.04; color:#1a1a1a">${esc(p.title)}</h1>
    <p style="margin-top:20px; font-size:22px; line-height:1.45; color:rgba(26,26,26,.66)">${esc(desc)}</p>
    <div style="margin-top:36px; display:flex; align-items:center; gap:14px">
      <img src="${AVATAR}" style="width:48px; height:48px; border-radius:50%; object-fit:cover">
      <div>
        <p style="font-size:19px; font-weight:600; color:#7443D6">Talessa Rodrigues</p>
        <p style="font-size:16px; color:rgba(26,26,26,.6)">Product Designer &amp; AI Engineer</p>
      </div>
    </div>
  </div>
  <div class="frame" style="position:absolute; right:56px; top:85px; width:580px; height:460px; background:${FRAMES[index % 4]}">
    <img src="${url(p.image)}">
  </div>`
}

async function shoot(html, out) {
  const dir = mkdtempSync(join(tmpdir(), 'og-'))
  const page = join(dir, 'og.html')
  const png = join(dir, 'og.png')
  writeFileSync(page, html)
  execFileSync(CHROME, [
    '--headless=new', '--disable-gpu', '--hide-scrollbars', '--allow-file-access-from-files',
    `--window-size=${W},${H}`, '--virtual-time-budget=6000', `--screenshot=${png}`, url(page),
  ], { stdio: 'ignore' })
  await sharp(png).resize(W, H).jpeg({ quality: 86, mozjpeg: true }).toFile(out)
  rmSync(dir, { recursive: true, force: true })
  console.log('✓', out.replace(ROOT, '.'))
}

const projects = readProjects(ROOT)
const cases = projects.filter(p => p.slug)
mkdirSync(join(ROOT, 'public/og'), { recursive: true })

await shoot(homeHtml(cases), join(ROOT, 'public/og-image.jpg'))
for (const p of cases) {
  const entry = getCase(p.slug)
  const text = entry ? pt[entry.dictKey] : null
  const desc = pt.projects[p.title]?.description ?? ''
  await shoot(caseHtml(p, text, desc, projects.indexOf(p)), join(ROOT, `public/og/${p.slug}.jpg`))
}
