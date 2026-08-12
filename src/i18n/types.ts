export interface Testimonial {
  role: string
  text: string
}

export interface Job {
  period: string
  title: string
  meta?: string
  paragraphs: string[]
  bullets?: string[]
}

// Certification e Workshop têm o mesmo formato no Figma (logo + título +
// subtítulo) — a logo em si (não traduzível) fica em Experiencias.tsx,
// casada por índice.
export interface Certification {
  title: string
  subtitle: string
}

export interface Workshop {
  title: string
  subtitle: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface ProjectText {
  description: string
  tags: string[]
}

// Bloco de texto do case study — paralelo (mesmo índice) a
// conecta360BlockShapes em data/conecta360Structure.ts. null quando o
// bloco correspondente é só imagem (não tem texto).
export type DetailTextBlock = string | string[] | null

// Um dos 5 estados da Hero (01–05). `title` aceita "\n" para forçar a
// quebra de linha do título grande, como no Figma ("PRODUCT\nDESIGNER").
export interface HeroSlide {
  eyebrow: string
  title: string
  description: string
}

export interface Dictionary {
  meta: {
    langName: string
  }
  nav: {
    sobre: string
    cases: string
    servicos: string
    perfil: string
  }
  header: {
    contato: string
    baixarCurriculo: string
    irParaHome: string
    abrirMenu: string
    fecharMenu: string
  }
  footer: {
    entreEmContato: string
    copyright: string
  }
  hero: {
    contato: string
    statLabel: string
    processTitle: string
    processSteps: string[]
    description: string
    eyebrow: string
    headingLine1: string
    headingLine2: string
    ctaSecondary: string
    ctaPrimary: string
    verProjetosAria: string
    reproduzirAria: string
    /* Os 5 estados percorridos pelo scroll (01 → 05). */
    slides: HeroSlide[]
    irParaSlideAria: string
    temaClaroAria: string
    temaEscuroAria: string
    verCaseAria: string
  }

  likes: {
    curtir: string
    curtidas: string
  }

  modais: {
    fechar: string
    voltar: string
    temaClaro: string
    temaEscuro: string
    sobreTitulo: string
    sobreSubtitulo: string
    casesTitulo: string
    casesSubtitulo: string
    faqTitulo: string
    faqSubtitulo: string
    perfilTitulo: string
    perfilSubtitulo: string
  }
  featuredProjects: {
    title: string
    titleHighlight: string
    titleSuffix: string
    subtitle: string
    viewAll: string
  }
  sobreMim: {
    eyebrow: string
    title: string
    body: string[]
    highlight: string
    toolsLabel: string
    // Legenda de cada foto da galeria (índice fixo, casa com PHOTOS em
    // SobreMim.tsx). subtitle vazio ('') nas fotos que só têm título.
    photos: { title: string; subtitle: string }[]
  }
  myProcess: {
    title: string
    steps: { title: string; subtitle: string }[]
  }
  experiencias: {
    blockProfissional: string
    blockFormacao: string
    blockWorkshops: string
    jobs: Job[]
    certifications: Certification[]
    workshops: Workshop[]
    recente: string
  }
  recomendacoes: {
    title: string
    subtitle: string
    verLinkedin: string
    testimonials: Testimonial[]
  }
  faq: {
    title: string
    titleHighlight: string
    titleSuffix: string
    items: FaqItem[]
    ctaTitle: string
    ctaSubtitle: string
    ctaBtn: string
  }
  contactBanner: {
    eyebrow: string
    title: string
    titleHighlight: string
    subtitle: string
    cta: string
    availability: string
    availabilityLink: string
  }
  projectsHero: {
    filterTodos: string
  }
  // Textos exclusivos da experiência mobile (app-like) — o desktop não
  // usa nenhuma dessas chaves.
  mobile: {
    role: string
    disponivel: string
    tagline: string
    trabalhos: string
    trabalhosSubtitle: string
    verTodos: string
    sobreTitle: string
    ctaWhatsapp: string
    ctaTitle: string
    statProjetos: string
    statAnos: string
    statAnosValue: string
    statFormato: string
    statFormatoValue: string
    fechar: string
    emBreve: string
    fotosLabel: string
    tabs: {
      inicio: string
      trabalhos: string
      sobre: string
      contato: string
    }
  }
  categories: {
    'ui-design': string
    branding: string
    'ux-design': string
  }
  projects: Record<string, ProjectText>
  conecta360: CaseStudyText
  jornadaJunior: CaseStudyText
  residentEvil: CaseStudyText
  redesignNatva: CaseStudyText
  drakorysArcane: CaseStudyText
  asteraDataBank: CaseStudyText
  ironBank: CaseStudyText
  orchardTreasure: CaseStudyText
  conecta360Branding: CaseStudyText
  easyCar: CaseStudyText
  jornadasCorporativas: CaseStudyText
  talessaRodrigues: CaseStudyText
  catchupTech: CaseStudyText
  vigimolVetores: CaseStudyText
}

// Formato compartilhado por todo detalhamento de projeto (case study)
// gerado a partir do mesmo template do Figma — texto emparelhado por
// índice com um *Structure.ts (imagens + tipo do bloco) correspondente.
// headerTitle/headerTagline ficam vazios ('') nos projetos que não têm
// o bloco de header grande no Figma (só ícone+título+tagline+banner) —
// alguns cases mais curtos pulam direto pros cards de meta + conteúdo.
export interface CaseStudyText {
  headerTitle: string
  headerTagline: string
  metaCliente: string
  metaServico: string
  metaAno: string
  metaClienteValue: string
  metaServicoValue: string
  metaAnoValue: string
  backBtn: string
  overviewLabel: string
  blocks: DetailTextBlock[]
}
