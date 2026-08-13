import { track } from '@vercel/analytics'

// Eventos de conversão do portfólio.
//
// Visita é vaidade; o que importa aqui é quanta gente sai daqui para
// conversar. Cada função abaixo marca um passo desse caminho, e os
// eventos aparecem no painel da Vercel (Analytics → Events) já separados
// por origem do tráfego — dá para saber se quem veio do LinkedIn manda
// mais mensagem do que quem veio da busca do Google, por exemplo.
//
// A medição nunca pode atrapalhar o clique: `track` é disparado e
// esquecido, e qualquer erro dele é engolido. O link abre do mesmo jeito.

type Canal = 'whatsapp' | 'linkedin' | 'behance' | 'email' | 'github' | 'agenda'

// De onde a pessoa clicou. Serve para descobrir qual ponto de contato do
// site puxa mais conversa — e quais só ocupam espaço.
type Origem =
  | 'hero-nav'
  | 'hero-cta'
  | 'hero-dock'
  | 'mobile-perfil'
  | 'mobile-dock'
  | 'mobile-contato'
  | 'mobile-redes'
  | 'rodape'
  | 'faq'
  | 'banner-final'

function enviar(nome: string, dados?: Record<string, string | number | boolean>) {
  try {
    track(nome, dados)
  } catch {
    // Medição quebrada não pode derrubar interação.
  }
}

/** Clique num canal de contato — o evento que de fato vira mensagem. */
export function trackContato(canal: Canal, origem: Origem) {
  enviar('contato', { canal, origem })
}

/** Abertura de um case: sinal de interesse real, antes do contato. */
export function trackCase(slug: string) {
  enviar('case_aberto', { slug })
}

/** Troca de idioma: mostra se vale manter (e divulgar) as versões en/es. */
export function trackIdioma(idioma: string) {
  enviar('idioma', { idioma })
}
