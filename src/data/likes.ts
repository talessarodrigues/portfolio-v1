// ── Curtidas ────────────────────────────────────────────────────────
// O total de curtidas é global (todo mundo que visita soma no mesmo
// número) e o quanto CADA visitante já deu fica sempre local, porque é
// só o teto de 5 cliques por projeto.
//
// O backend é plugável: `setLikesBackend` troca a implementação sem
// mexer no componente. O padrão é `localBackend`, que só guarda no
// próprio navegador — serve pra desenvolver, mas NÃO é curtida real.
// Ver README/handoff quando o backend de verdade for escolhido.

export const MAX_LIKES_PER_VISITOR = 5

const MY_LIKES_KEY = 'talessa-my-likes'
const LOCAL_TOTALS_KEY = 'talessa-likes-totals'

export interface LikesBackend {
  /** Totais globais dos projetos pedidos. Chaves ausentes contam como 0. */
  fetchTotals(keys: string[]): Promise<Record<string, number>>
  /** Soma 1 e devolve o novo total daquele projeto. */
  increment(key: string): Promise<number>
}

function readJson<T>(storageKey: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(storageKey)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

function writeJson(storageKey: string, value: unknown) {
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(value))
  } catch {
    // Modo privado / storage cheio: a curtida só não persiste.
  }
}

// ── Quantas curtidas ESTE visitante já deu (sempre local) ───────────
export function getMyLikes(key: string): number {
  return readJson<Record<string, number>>(MY_LIKES_KEY, {})[key] ?? 0
}

export function setMyLikes(key: string, value: number) {
  const all = readJson<Record<string, number>>(MY_LIKES_KEY, {})
  all[key] = value
  writeJson(MY_LIKES_KEY, all)
}

// ── Backend padrão: só o navegador local ────────────────────────────
const localBackend: LikesBackend = {
  async fetchTotals(keys) {
    const totals = readJson<Record<string, number>>(LOCAL_TOTALS_KEY, {})
    return Object.fromEntries(keys.map(k => [k, totals[k] ?? 0]))
  },
  async increment(key) {
    const totals = readJson<Record<string, number>>(LOCAL_TOTALS_KEY, {})
    const next = (totals[key] ?? 0) + 1
    totals[key] = next
    writeJson(LOCAL_TOTALS_KEY, totals)
    return next
  },
}

let backend: LikesBackend = localBackend

export function setLikesBackend(next: LikesBackend) {
  backend = next
}

export function fetchTotals(keys: string[]) {
  return backend.fetchTotals(keys)
}

export function incrementLike(key: string) {
  return backend.increment(key)
}
