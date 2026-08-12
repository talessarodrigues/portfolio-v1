// Links de contato centralizados — antes estavam repetidos em Footer,
// ContactBanner e Recomendações.
export const CONTACTS = {
  // (35) 9 9807-4669 no formato que o wa.me exige: país + DDD + número,
  // só dígitos. O link antigo (w.app/talessarodriguesdesign) não abria.
  whatsapp: 'https://wa.me/5535998074669',
  linkedin: 'https://www.linkedin.com/in/talessamayara/',
  behance: 'https://www.behance.net/talessamayara',
  // Só a linha de redes do mobile usa o GitHub.
  github: 'https://github.com/talessarodrigues',
  // Vira um link mailto: no dock do desktop e na linha de redes do mobile.
  email: 'talessaamayaraah15@gmail.com',
  // Ainda não existe link de agenda (Calendly/Cal.com). Enquanto não
  // existir, "Agendar um horário" cai no WhatsApp.
  agenda: 'https://wa.me/5535998074669',
} as const
