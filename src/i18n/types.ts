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
  /** Linha de competências (como no LinkedIn). */
  skills?: string
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
    skillsLabel: string
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
    /** Card que leva pro site publicado em vez de abrir um case study. */
    verSite: string
    /** Aviso nos sites feitos só pra celular. */
    somenteMobile: string
  }
  // Desktop em páginas: home que rola, /sobre e /cases/<slug>.
  site: {
    projetos: string
    sobreMim: string
    curriculo: string
    /** PDF do currículo (em public/curriculo); hoje é o mesmo nos 3 idiomas. */
    curriculoPdf: string
    saudacao: string
    bio: string
    trabalhoRecente: string
    agendarChamada: string
    links: string
    contato: string
    copiado: string
    copiarEmail: string
    voltarProjetos: string
    exploreMais: string
    /** Aba do índice do case quando o texto começa sem título. */
    visaoGeral: string
    galeria: string
    verPrototipo: string
    sobreTitulo: string
    paginaNaoEncontrada: string
    voltarInicio: string
    /** Rótulo do cursor sobre um card de case / de site publicado. */
    cursorVer: string
    cursorSite: string
    /** Filtros da grade de projetos (home). */
    filtros: { all: string; website: string; app: string; dashboard: string; ecommerce: string }
    buscarProjeto: string
    nenhumProjeto: string
    /** SEO: rótulo do case no título da aba/busca. {categoria} vira a categoria. */
    seoCase: string
    /** SEO: descrição da página /sobre. */
    seoSobre: string
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
    'ux-ui-design': string
  }
  projects: Record<string, ProjectText>
  conecta360: CaseStudyText
  jornadaJunior: CaseStudyText
  certify: CaseStudyText
  leanLearn: CaseStudyText
  atelieDiane: CaseStudyText
  midnightHeist: CaseStudyText
  marionIa: CaseStudyText
  socialMatch: CaseStudyText
  gestaoEasyCar: CaseStudyText
  usfit: CaseStudyText
  essencialPerfumaria: CaseStudyText
  residentEvil: CaseStudyText
  redesignNatva: CaseStudyText
  drakorysArcane: CaseStudyText
  asteraDataBank: CaseStudyText
  ironBank: CaseStudyText
  orchardTreasure: CaseStudyText
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
  /** Só nos cases que têm protótipo navegável publicado. */
  protoBtn?: string
  blocks: DetailTextBlock[]
}
