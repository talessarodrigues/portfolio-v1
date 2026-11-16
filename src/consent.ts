// Consentimento de cookies de medição (Google Analytics).
//
// O GA4 só coleta de forma identificável depois do "aceitar": o index.html
// já nasce com o consentimento NEGADO (Consent Mode v2) e restaura a escolha
// salva antes de configurar a tag. Aqui fica a leitura/gravação dessa escolha
// e a atualização do GA quando a pessoa decide.
//
// A medição da Vercel (src/analytics.ts) não usa cookie e não depende disto.

export type Consentimento = 'granted' | 'denied'

const CHAVE = 'cookie-consent'
const EVENTO_ABRIR = 'cookie-consent:abrir'

type Gtag = (...args: unknown[]) => void
const gtag = () => (window as unknown as { gtag?: Gtag }).gtag

/** Escolha salva, ou null se a pessoa ainda não decidiu. */
export function lerConsentimento(): Consentimento | null {
  try {
    const v = window.localStorage.getItem(CHAVE)
    return v === 'granted' || v === 'denied' ? v : null
  } catch {
    return null
  }
}

/** Grava a escolha e avisa o Google Analytics. */
export function salvarConsentimento(valor: Consentimento) {
  try {
    window.localStorage.setItem(CHAVE, valor)
  } catch {
    // Sem armazenamento (aba privada): a escolha vale só nesta visita.
  }
  gtag()?.('consent', 'update', { analytics_storage: valor })
}

/** Pede para o banner reabrir (link "Preferências de cookies" do rodapé). */
export function abrirPreferenciasCookies() {
  window.dispatchEvent(new Event(EVENTO_ABRIR))
}

export function aoPedirPreferencias(fn: () => void) {
  window.addEventListener(EVENTO_ABRIR, fn)
  return () => window.removeEventListener(EVENTO_ABRIR, fn)
}
