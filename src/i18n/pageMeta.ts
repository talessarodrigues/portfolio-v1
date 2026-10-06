import type { Lang } from './LanguageContext'

// Título e descrição da home por idioma. Ficam fora dos dicionários de
// interface porque não são texto de tela: são o que aparece na aba do
// navegador, no resultado de busca e na prévia do link quando alguém
// compartilha o portfólio. O index.html nasce com a versão em pt-BR (é a
// que os buscadores e o WhatsApp leem sem rodar JavaScript).
export const PAGINA: Record<Lang, { title: string; description: string }> = {
  pt: {
    title: 'Talessa Rodrigues | Product Designer & AI Engineer',
    description:
      'Product Designer & AI Engineer. Do discovery ao produto no ar: UX/UI, design systems e desenvolvimento com IA com foco na experiência do usuário.',
  },
  en: {
    title: 'Talessa Rodrigues | Product Designer & AI Engineer',
    description:
      'Product Designer & AI Engineer. From discovery to a live product: UX/UI, design systems and AI-assisted development focused on the user experience.',
  },
  es: {
    title: 'Talessa Rodrigues | Product Designer & AI Engineer',
    description:
      'Product Designer & AI Engineer. Del discovery al producto en vivo: UX/UI, design systems y desarrollo con IA con foco en la experiencia del usuario.',
  },
}

/** Aplica título e descrição na aba e nas tags de prévia de link. */
export function setPageMeta(title: string, description: string) {
  document.title = title
  document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
}
