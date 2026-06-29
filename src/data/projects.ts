import type { ProjectFull } from '../components/ProjectDetail/ProjectDetail'

import img00 from '../assets/projetos/img00.png'
import img01 from '../assets/projetos/img01.png'
import img02 from '../assets/projetos/img02.png'
import img03 from '../assets/projetos/img03.png'
import img04 from '../assets/projetos/img04.png'
import img05 from '../assets/projetos/img05.png'
import img05full from '../assets/projetos/img05-full.png'
import img06 from '../assets/projetos/img06.png'
import img07 from '../assets/projetos/img07.png'
import img07full from '../assets/projetos/img07-full.jpg'
import img11 from '../assets/projetos/img11.png'
import img11full from '../assets/projetos/img11-full.jpg'
import img12 from '../assets/projetos/img12.png'
import img14 from '../assets/projetos/img14.png'
import img15 from '../assets/projetos/img15.png'
import img16 from '../assets/projetos/img16.png'
import img17 from '../assets/projetos/img17.png'
import img18 from '../assets/projetos/img18.png'
import img19 from '../assets/projetos/img19.png'
import img21 from '../assets/projetos/img21.png'
import img21full from '../assets/projetos/img21-full.jpg'
import img22 from '../assets/projetos/img22.png'
import img24 from '../assets/projetos/img24.png'
import img25 from '../assets/projetos/img25.png'
import img26 from '../assets/projetos/img26.png'
import img26full from '../assets/projetos/img26-full.png'
import img27 from '../assets/projetos/img27.jpg'
import img28 from '../assets/projetos/img28.png'
import img28full from '../assets/projetos/img28-full.png'
import img25full from '../assets/projetos/img25-full.jpg'
import img29 from '../assets/projetos/img29.png'
import img29full from '../assets/projetos/img29-full.png'
import img30 from '../assets/projetos/img30.png'
import img30full from '../assets/projetos/img30-full.jpg'
import img31 from '../assets/projetos/img31.png'
import img31full from '../assets/projetos/img31-full.jpg'
import img32 from '../assets/projetos/img32.png'
import img32full from '../assets/projetos/img32-full.jpg'
import img33 from '../assets/projetos/img33.jpg'
import img33full from '../assets/projetos/img33-full.jpg'

export const allProjects: ProjectFull[] = [
  { image: img00, title: 'Eccomerce Website',       category: 'Em breve',  tags: ['E-commerce', 'Website', 'UX/UI'],        description: 'Projeto de e-commerce com foco em conversão e experiência de compra intuitiva.' },
  { image: img01, title: 'Software NR-1',            category: 'Em breve',  tags: ['SaaS', 'Dashboard', 'UX/UI'],            description: 'Plataforma de gestão de documentos e conformidade com a NR-1.' },
  { image: img02, title: 'Dashboard + Landing Page', category: 'Em breve',  tags: ['Dashboard', 'Landing Page', 'Website'],  description: 'Dashboard administrativo integrado com landing page de alta conversão.' },
  { image: img03, title: 'Orbit Creators',           category: 'Em breve',  tags: ['SaaS', 'Creators', 'UX/UI'],            description: 'Plataforma para criadores de conteúdo gerenciarem sua audiência e monetização.' },
  {
    image: img26,
    coverImage: img26full,
    title: 'Design System',
    titleAccent: 'Jornada Júnior',
    accentColor: 'gradient-portfolio',
    category: 'Produto Digital',
    tags: ['Design System', 'UX/UI', 'Figma Variables'],
    description: 'Estruturei um Design System do zero para a Jornada Júnior, criando foundations, variáveis, componentes e diretrizes que ajudam o time a construir interfaces mais consistentes, acessíveis e escaláveis.',
    sections: [
      {
        title: 'Problema',
        paragraphs: [
          'A Jornada Júnior precisava evoluir sua interface de forma mais consistente e escalável. Com o crescimento do projeto, surgiram desafios relacionados à padronização visual, organização dos componentes e alinhamento entre design e desenvolvimento.',
          'Antes da construção do Design System, cada interface poderia seguir decisões visuais diferentes, o que aumentava o risco de inconsistência, retrabalho e dificuldade na manutenção do produto. O principal desafio foi criar uma base clara para que novas telas, componentes e fluxos pudessem ser desenvolvidos com mais velocidade, mantendo qualidade e coerência visual.',
        ],
      },
      {
        title: 'Objetivo e estratégia de UX',
        paragraphs: [
          'O objetivo do projeto foi construir um Design System do zero para a Jornada Júnior, criando uma estrutura reutilizável, organizada e fácil de evoluir dentro do Figma.',
          'A estratégia foi começar entendendo as necessidades do produto, do time e dos usuários, para depois definir princípios visuais, foundations, tokens, variáveis, componentes e diretrizes de uso. A ideia não era apenas criar uma biblioteca bonita, mas sim uma base funcional para apoiar decisões de produto, facilitar o handoff com desenvolvimento e manter a experiência mais consistente em diferentes telas e dispositivos.',
        ],
      },
      {
        title: 'Credibilidade',
        paragraphs: [
          'Para garantir credibilidade visual e profissionalismo, o sistema foi estruturado com foco em clareza, acessibilidade e consistência. Foram definidos padrões de cores, tipografia, espaçamentos, grid, radius, estados de componentes e regras de uso.',
          'Também documentamos boas práticas para evitar variações desnecessárias, reduzir decisões arbitrárias e facilitar a aplicação correta dos elementos no dia a dia do projeto. Essa documentação ajuda tanto designers quanto desenvolvedores a entenderem o porquê de cada escolha e como aplicar os padrões de forma coerente.',
        ],
      },
      {
        title: 'Interface e conversão',
        paragraphs: [
          'A interface foi pensada para transmitir organização, confiança e facilidade de uso. Trabalhamos com uma linguagem visual limpa, moderna e modular, usando hierarquia clara, contraste adequado e componentes reutilizáveis.',
          'A criação dos componentes com estados, variações e suporte para Light e Dark Mode permite que novas interfaces sejam construídas com mais agilidade e menos inconsistências. Além disso, a padronização visual melhora a navegação, facilita a leitura das informações e contribui para uma experiência mais intuitiva para o usuário final.',
        ],
      },
      {
        title: 'Resultados',
        paragraphs: [
          'O resultado foi a criação de uma base sólida para escalar a interface da Jornada Júnior com mais consistência, velocidade e colaboração entre o time.',
          'O Design System centralizou decisões importantes de produto e interface, reduzindo retrabalho, melhorando o alinhamento entre design e desenvolvimento e facilitando a criação de novas telas. Mais do que uma biblioteca de componentes, o projeto se tornou uma estrutura estratégica para apoiar a evolução do produto com mais clareza, organização e qualidade visual.',
        ],
      },
    ],
  },
  {
    image: img28,
    coverImage: img28full,
    title: 'Conecta 360º',
    titleAccent: 'Landing Page',
    accentColor: 'gradient-portfolio',
    liveUrl: 'https://rhconecta360.com/',
    category: 'Website',
    tags: ['Web Design', 'SaaS', 'UX/UI', 'NR-01'],
    description: 'Landing page e plataforma SaaS para simplificar a gestão de riscos psicossociais da NR-1, conectando empresas e consultorias em uma experiência clara, segura e orientada por dados.',
    sections: [
      {
        title: 'Problema',
        paragraphs: [
          'Com a atualização da NR-1 e a necessidade de acompanhar riscos psicossociais de forma mais estruturada, empresas e consultorias passaram a precisar de uma solução mais clara, segura e eficiente para aplicar questionários, analisar dados e acompanhar planos de ação.',
          'O desafio era transformar um tema técnico e sensível em uma experiência digital simples de entender, confiável e acessível, tanto para quem contrata a solução quanto para quem utiliza a plataforma no dia a dia.',
        ],
      },
      {
        title: 'Objetivo e estratégia de UX',
        paragraphs: [
          'O objetivo foi criar uma experiência completa para o Conecta 360°, começando pela landing page de apresentação da solução e avançando para o desenho do software interno.',
          'Na landing page, a estratégia foi explicar o valor da plataforma de forma direta, apresentando benefícios, funcionamento, segurança, planos e dúvidas frequentes. Já no produto, o foco foi estruturar uma jornada clara para gestão de avaliações, indicadores, relatórios e planos de ação, facilitando a tomada de decisão para empresas e consultorias.',
        ],
      },
      {
        title: 'Credibilidade',
        paragraphs: [
          'Como o produto envolve dados sensíveis, saúde ocupacional e conformidade com a NR-1, a interface precisava transmitir segurança, profissionalismo e clareza.',
          'Por isso, trabalhei uma linguagem visual limpa, com hierarquia objetiva, cards informativos, indicadores, selos de segurança e mensagens que reforçam anonimato, conformidade e proteção dos dados. A proposta visual foi pensada para gerar confiança sem tornar a experiência pesada ou excessivamente técnica.',
        ],
      },
      {
        title: 'Interface e conversão',
        paragraphs: [
          'A landing page foi construída para conduzir o usuário por uma jornada comercial clara: primeiro apresenta o problema, depois mostra para quem é a solução, como funciona o dashboard, quais etapas garantem segurança, quais planos estão disponíveis e, por fim, reforça a conversão com chamadas para ação.',
          'Os CTAs foram distribuídos em pontos estratégicos da página, como hero, planos, central de ajuda e CTA final, ajudando empresas e consultorias a entenderem rapidamente o valor da solução e iniciarem contato ou demonstração.',
        ],
      },
      {
        title: 'Software Interno',
        paragraphs: [
          'Além da landing page, também começamos a desenvolver a experiência interna da plataforma. O software foi pensado para centralizar a gestão dos riscos psicossociais, desde a criação e aplicação dos questionários até a visualização dos resultados.',
          'Dentro da plataforma, a experiência contempla dashboards, indicadores, gestão de avaliações, relatórios, diagnóstico por dimensões, matriz de risco e plano de ação. O objetivo é facilitar a leitura dos dados e ajudar o usuário a transformar informações complexas em decisões práticas.',
        ],
      },
      {
        title: 'Resultados',
        paragraphs: [
          'O resultado foi uma solução visualmente consistente, com uma landing page preparada para apresentar o produto de forma comercial e um software interno estruturado para apoiar a gestão de riscos psicossociais.',
          'O projeto fortalece a percepção de valor do Conecta 360°, melhora a clareza sobre a NR-1 e cria uma base digital escalável para empresas e consultorias acompanharem avaliações, indicadores e planos de ação com mais organização, segurança e eficiência.',
        ],
      },
    ],
  },
  {
    image: img25,
    coverImage: img25full,
    title: 'Redesign Natva',
    titleAccent: 'Natva',
    accentColor: 'gradient-portfolio',
    category: 'Website',
    tags: ['Web Design', 'Design System', 'UX/UI'],
    description: 'Redesign de uma landing page para fortalecer a identidade da marca, valorizar os produtos e criar uma experiência mais envolvente e focada em conversão.',
    sections: [
      {
        title: 'Problema',
        paragraphs: [
          'A Natva já tinha uma landing page com estrutura funcional, mas a interface ainda não transmitia todo o potencial visual da marca. A página precisava comunicar melhor a energia do produto, destacar os sabores, valorizar os conteúdos criados pelos usuários e conduzir melhor a jornada de compra.',
          'O principal desafio foi transformar uma interface simples em uma experiência mais envolvente, com mais personalidade, hierarquia visual e apelo comercial, sem perder clareza e facilidade de navegação.',
        ],
      },
      {
        title: 'Objetivo e estratégia de UX',
        paragraphs: [
          'O objetivo foi redesenhar a landing page da Natva para fortalecer a percepção da marca, melhorar a apresentação dos produtos e criar uma experiência mais fluida para o usuário.',
          'A estratégia passou por reorganizar as seções, melhorar a hierarquia das informações, destacar os CTAs, trazer mais ritmo visual para a página e construir uma narrativa mais conectada ao universo da marca: energia, sabor, lifestyle e comunidade.',
        ],
      },
      {
        title: 'Credibilidade',
        paragraphs: [
          'Para gerar mais confiança, a interface passou a valorizar melhor os elementos que reforçam a marca e o produto, como benefícios, métricas, avaliações, perguntas frequentes e conteúdos reais de pessoas consumindo a Natva.',
          'Também trabalhei uma composição mais consistente, com uso mais estratégico de imagens, cores, cards e contrastes, criando uma página visualmente mais profissional e alinhada a uma marca de produto físico com presença digital.',
        ],
      },
      {
        title: 'Interface e conversão',
        paragraphs: [
          'A nova interface foi pensada para guiar o usuário de forma mais natural pela página, começando por uma hero section mais forte, com produto em destaque, mensagem clara e chamadas para ação mais visíveis.',
          'As seções seguintes foram organizadas para apresentar sabores, benefícios, produtos, conteúdo de comunidade e dúvidas frequentes, criando uma jornada mais completa até a decisão de compra. O redesign também deixou a página mais atrativa visualmente, com maior impacto nas áreas comerciais e melhor leitura dos conteúdos.',
        ],
      },
      {
        title: 'Resultados',
        paragraphs: [
          'A primeira versão da landing page já apresentava as principais seções do produto, mas ainda tinha oportunidades de melhoria em impacto visual, consistência, ritmo de leitura e diferenciação de marca.',
          'Na versão final, a interface ganhou mais personalidade, contraste e energia. Os produtos passaram a ter mais destaque, os CTAs ficaram mais evidentes e a página ganhou uma narrativa visual mais conectada ao posicionamento da Natva, tornando a experiência mais memorável e persuasiva.',
        ],
      },
    ],
  },
  {
    image: img29,
    coverImage: img29full,
    title: 'RH Recruiter',
    titleAccent: 'Landing Page',
    accentColor: 'gradient-portfolio',
    category: 'Website',
    liveUrl: 'https://rhrecruiter.com.br',
    tags: ['Web Design', 'SaaS', 'UX/UI', 'Fluxos de Cadastro'],
    description: 'Criação da experiência digital de uma plataforma de recrutamento, desde a landing page até fluxos de login, cadastro e páginas internas, com foco em clareza, conversão e usabilidade para recrutadores e candidatos.',
    sections: [
      {
        title: 'Problema',
        paragraphs: [
          'A RHRecruiter precisava apresentar sua plataforma de forma mais clara, profissional e confiável para empresas, recrutadores e candidatos. O produto tinha uma proposta forte, mas precisava transformar suas funcionalidades em uma experiência simples de entender e fácil de navegar.',
          'O principal desafio foi organizar uma jornada digital que comunicasse valor rapidamente, explicasse os recursos da plataforma e reduzisse dúvidas no primeiro contato. Antes das melhorias, cerca de 15% dos usuários que acessavam a experiência avançavam ou demonstravam interesse, indicando a necessidade de uma interface mais estratégica, clara e orientada à conversão.',
        ],
      },
      {
        title: 'Objetivo e estratégia de UX',
        paragraphs: [
          'O objetivo foi criar uma experiência completa para a RHRecruiter, conectando a landing page comercial com fluxos essenciais do produto, como login, cadastro, páginas de vagas, página de carreira e áreas de suporte à decisão.',
          'A estratégia começou pelo entendimento do produto, seus públicos e principais dores. A partir disso, organizei a comunicação, defini hierarquias de conteúdo, criei fluxos mais claros e desenhei interfaces que ajudassem o usuário a entender rapidamente como a plataforma funciona e quais benefícios ela oferece.',
        ],
      },
      {
        title: 'Credibilidade',
        paragraphs: [
          'Como a RHRecruiter atua em um contexto de recrutamento e seleção, a interface precisava transmitir confiança, organização e profissionalismo. Para isso, trabalhei uma linguagem visual mais clara, com foco em legibilidade, consistência e tomada de decisão.',
          'Também foram estruturadas páginas importantes como política de privacidade, termos de uso, cookies e informações institucionais, reforçando segurança, transparência e credibilidade para empresas que lidam com dados de candidatos e processos seletivos.',
        ],
      },
      {
        title: 'Interface e conversão',
        paragraphs: [
          'A landing page foi pensada para apresentar a proposta de valor da plataforma de forma direta, guiando o usuário desde o entendimento do problema até a ação principal, como começar grátis ou falar com a RHRecruiter.',
          'A estrutura seguiu uma lógica de conversão, com hero section clara, benefícios, funcionalidades, chamadas para ação, páginas de vagas e conteúdos que explicam melhor o produto. Também trabalhei os estados das telas de login e cadastro, incluindo erros, sucesso, validações e mensagens de apoio para tornar a experiência mais fluida.',
        ],
      },
      {
        title: 'Decisões de UX',
        paragraphs: [
          'Uma das principais decisões foi transformar funcionalidades complexas em uma comunicação mais simples e orientada ao benefício do usuário. Em vez de apenas listar recursos, a interface passou a explicar como cada funcionalidade ajuda no processo de recrutamento.',
          'Também trabalhei hierarquia visual, contraste, espaçamento, consistência de componentes e microcopy. As telas foram organizadas para conduzir melhor o usuário, destacando ações principais e reduzindo ruídos visuais que poderiam prejudicar a conversão.',
        ],
      },
      {
        title: 'Fluxos de Produto',
        paragraphs: [
          'Além da landing page, o projeto envolveu a criação de fluxos importantes para o uso da plataforma, como login, cadastro, recuperação de acesso, página de vagas, página de carreira da empresa e variações de estados da interface.',
          'Esses fluxos foram pensados para reduzir fricção, evitar dúvidas e facilitar o entendimento tanto para recrutadores quanto para candidatos. No Figma, organizei as telas de forma clara para facilitar o handoff com desenvolvimento, incluindo variações, estados e componentes reutilizáveis.',
        ],
      },
      {
        title: 'Resultados',
        paragraphs: [
          'Após a reformulação da experiência, a RHRecruiter passou a comunicar melhor sua proposta de valor e a conduzir os usuários de forma mais eficiente pela jornada. A nova estrutura trouxe mais clareza, confiança e objetividade para apresentar o produto.',
          'Com as estratégias aplicadas, o projeto alcançou um resultado expressivo: a taxa de usuários que avançavam ou demonstravam interesse saiu de aproximadamente 15% para cerca de 85%, mostrando o impacto da interface, da organização da informação e da comunicação focada em conversão.',
        ],
      },
      {
        title: 'Impacto no Produto',
        paragraphs: [
          'O projeto ajudou a transformar a RHRecruiter em uma experiência mais madura, escalável e preparada para crescimento. A plataforma passou a ter uma base visual mais consistente, fluxos mais organizados e uma comunicação mais alinhada às necessidades de empresas, recrutadores e candidatos.',
          'Além do impacto visual, o trabalho contribuiu para melhorar a percepção de valor do produto, reduzir dúvidas no primeiro contato e fortalecer a confiança do usuário durante a jornada.',
        ],
      },
    ],
  },
  {
    image: img31,
    coverImage: img31full,
    title: 'Astera Data Bank',
    titleAccent: 'Dashboard',
    accentColor: 'gradient-portfolio',
    category: 'Dashboard',
    tags: ['Dashboard', 'Game UI', 'UX/UI', 'Pesquisa'],
    description: 'Criação de um dashboard de pesquisa e catalogação para um universo de caça a monstros, centralizando bestiário, materiais, equipamentos, missões e planejamento em uma experiência imersiva e organizada.',
    sections: [
      {
        title: 'Problema',
        paragraphs: [
          'Em um universo de caça, o jogador lida com um volume enorme de informações — monstros, materiais, equipamentos, missões e recursos — normalmente espalhados e difíceis de consultar durante a jornada.',
          'O desafio foi centralizar todo esse conhecimento em um único hub de pesquisa, claro e rápido de navegar, que ajudasse o caçador a registrar descobertas, planejar caçadas e tomar decisões sem perder a imersão no universo do jogo.',
        ],
      },
      {
        title: 'Objetivo e estratégia de UX',
        paragraphs: [
          'O objetivo foi criar um centro de pesquisa digital — o Astera Data Bank — capaz de organizar bestiário, materiais, equipamentos, missões e exploração em uma navegação simples e consistente.',
          'A estratégia foi estruturar a interface em torno de uma busca central e de uma navegação lateral por categorias, destacando atalhos para as áreas mais usadas (bestiário, materiais e planner) e trazendo monstros em destaque logo na home para guiar o usuário.',
        ],
      },
      {
        title: 'Direção Visual',
        paragraphs: [
          'A direção visual seguiu uma estética dark e imersiva, com tons profundos, detalhes em dourado e imagens dramáticas dos monstros, reforçando a atmosfera de aventura e pesquisa do universo.',
          'Cards, grids e blocos com baixa opacidade ajudam a organizar conteúdos densos sem quebrar a imersão, mantendo legibilidade e hierarquia mesmo sobre fundos ricos em textura.',
        ],
      },
      {
        title: 'Interface e organização',
        paragraphs: [
          'A interface foi pensada para dar acesso rápido ao que importa: uma busca no topo para encontrar monstros, materiais e equipamentos, uma navegação lateral clara e atalhos de destaque para bestiário, materiais e planner.',
          'A home apresenta um resumo do progresso e uma vitrine de monstros em destaque, conduzindo o usuário para as seções de catalogação, missões e exploração de forma fluida e escaneável.',
        ],
      },
      {
        title: 'Resultados',
        paragraphs: [
          'O resultado foi um dashboard organizado, imersivo e fácil de navegar, que transforma um grande volume de informações em uma experiência de consulta agradável e funcional.',
          'Além do impacto visual, o projeto demonstra capacidade de estruturar arquitetura de informação complexa, criar navegação consistente e desenhar interfaces temáticas que equilibram imersão e usabilidade.',
        ],
      },
    ],
  },
  {
    image: img33,
    modalImage: img33full,
    title: 'Aura',
    subtitle: 'Moda que inspira, experiência que conecta',
    status: 'Concluído',
    category: 'E-commerce',
    tags: ['E-commerce', 'UX/UI', 'Mobile-first', 'Moda Premium'],
    figmaUrl: 'https://www.figma.com/design/P1DhBwJ1daMQRCCd1MMwnC/Portf%C3%B3lio-Mam%C3%A3e-Taessa?node-id=326-7392',
    description: 'E-commerce de moda feminina com experiência de compra sofisticada, navegação intuitiva e foco em descoberta de produtos.',
  },
  {
    image: img30,
    coverImage: img30full,
    title: 'Cardápio Web',
    titleAccent: 'Recheiaê',
    accentColor: 'gradient-portfolio',
    category: 'Website',
    tags: ['Cardápio Web', 'Figma Variables', 'UX/UI', 'Sistema Adm'],
    description: 'Criação de um cardápio digital com sistema administrativo para organizar produtos, categorias, promoções e pedidos, facilitando a experiência de compra e a gestão do negócio.',
    sections: [
      {
        title: 'Problema',
        paragraphs: [
          'O Recheiaê precisava de uma solução digital para apresentar seu cardápio de forma mais organizada, visual e acessível para os clientes. Antes disso, o negócio dependia de formas menos estruturadas para divulgar produtos, promoções, combos e informações importantes.',
          'Além da experiência do cliente, também existia a necessidade de facilitar a gestão interna. O desafio foi criar um cardápio web simples de navegar e, ao mesmo tempo, pensar em um sistema administrativo onde fosse possível gerenciar produtos, categorias, preços, imagens, promoções e disponibilidade com mais autonomia.',
        ],
      },
      {
        title: 'Objetivo e estratégia de UX',
        paragraphs: [
          'O objetivo foi criar uma experiência digital que ajudasse o cliente a encontrar rapidamente o que deseja comprar, visualizar preços, categorias, promoções e produtos mais pedidos de forma clara.',
          'A estratégia foi organizar o cardápio por seções, como promoções, mais pedidos, combos, batatas recheadas, bebidas e sobremesas. Essa estrutura facilita a navegação, melhora a leitura dos produtos e torna a experiência mais próxima de um cardápio de delivery moderno.',
        ],
      },
      {
        title: 'Credibilidade',
        paragraphs: [
          'Para transmitir confiança, a interface foi construída com uma organização visual clara, informações objetivas e destaque para elementos importantes como status de funcionamento, horário, localização, categorias e preços.',
          'Também foram usados cards de produto com imagem, título, descrição curta e preço, criando uma apresentação mais profissional e ajudando o cliente a entender rapidamente as opções disponíveis antes de fazer o pedido.',
        ],
      },
      {
        title: 'Interface e conversão',
        paragraphs: [
          'A interface do cardápio foi pensada para ser simples, direta e fácil de usar. Logo no topo, o usuário consegue identificar o nome do estabelecimento, status de funcionamento, horário, localização e principais categorias.',
          'As seções foram organizadas para destacar primeiro os produtos mais estratégicos, como promoções e mais pedidos. A busca também ajuda o cliente a encontrar um item específico com mais rapidez, reduzindo esforço e tornando a navegação mais fluida.',
        ],
      },
      {
        title: 'Sistema Administrativo',
        paragraphs: [
          'Além do cardápio para o cliente, o projeto incluiu a criação de uma interface administrativa onde é possível gerenciar produtos, categorias, imagens, preços, promoções e disponibilidade de itens.',
          'Esse painel foi pensado para dar mais autonomia ao negócio, permitindo atualizações rápidas sem depender de terceiros, com uma estrutura clara que facilita a operação do dia a dia.',
        ],
      },
      {
        title: 'Resultados',
        paragraphs: [
          'O resultado foi um cardápio web mais profissional, organizado e fácil de navegar, com uma estrutura preparada para apoiar tanto a experiência do cliente quanto a rotina administrativa do negócio.',
          'O projeto ajuda o Recheiaê a apresentar seus produtos com mais clareza, destacar promoções e combos, reduzir dependência de processos manuais e criar uma base digital mais escalável para futuras funcionalidades, como pedidos online, carrinho e integração com pagamento.',
        ],
      },
    ],
  },
  {
    image: img32,
    coverImage: img32full,
    title: 'HVEX',
    titleAccent: 'Landing Page',
    accentColor: 'gradient-portfolio',
    category: 'Website',
    tags: ['Landing Page', 'Conversão', 'UX/UI', 'Marketing Digital'],
    description: 'Redesign estratégico de uma landing page para uma empresa do setor elétrico, unindo UX, marketing digital, arquitetura da informação e uma interface mais tecnológica, clara e orientada à conversão.',
    sections: [
      {
        title: 'Problema',
        paragraphs: [
          'A HVEX já possuía uma presença digital, mas a comunicação visual e a estrutura da página não transmitiam todo o potencial tecnológico da empresa. O conteúdo estava distribuído de forma pouco estratégica, com oportunidades de melhoria em hierarquia, clareza, prova social e direcionamento para conversão.',
          'O desafio foi transformar um tema técnico do setor elétrico em uma experiência mais clara, moderna e confiável, capaz de comunicar inovação, segurança e autoridade para diferentes públicos, como concessionárias, indústrias, empresas de energia e laboratórios.',
        ],
      },
      {
        title: 'Objetivo e estratégia de UX',
        paragraphs: [
          'O objetivo foi redesenhar a landing page da HVEX para apresentar melhor suas soluções, segmentos, diferenciais e canais de contato, criando uma jornada mais objetiva para o usuário.',
          'A estratégia começou com análise da página atual, diagnóstico de problemas, benchmark com empresas do setor, definição de insights, arquitetura da informação e organização da navegação. A partir disso, a interface foi construída para guiar o usuário desde a proposta de valor até os serviços, provas de credibilidade, conteúdos e conversão.',
        ],
      },
      {
        title: 'Credibilidade',
        paragraphs: [
          'Como a HVEX atua em um setor técnico e de alta responsabilidade, a interface precisava transmitir confiança, precisão e maturidade. Para isso, foram valorizados elementos como empresas parceiras, números de impacto, anos de atuação, segmentos atendidos, conteúdos técnicos e soluções aplicadas ao setor elétrico.',
          'Também trabalhei uma linguagem visual mais tecnológica, com dark mode, elementos em azul, imagens 3D, ícones técnicos e uma composição visual mais robusta, reforçando inovação, segurança e especialização.',
        ],
      },
      {
        title: 'Interface e conversão',
        paragraphs: [
          'A landing page foi pensada para conduzir o usuário de forma progressiva: primeiro apresenta a proposta de valor, depois reforça credibilidade com logos e números, explica as soluções, mostra aplicações por segmento, apresenta conteúdos e finaliza com newsletter e contato.',
          'Os CTAs foram posicionados em pontos estratégicos, como hero, newsletter e rodapé, ajudando o usuário a avançar para uma ação sem interromper a leitura. A interface também usa cards, grids e blocos visuais para organizar conteúdos densos de forma mais escaneável.',
        ],
      },
      {
        title: 'Resultados',
        paragraphs: [
          'O resultado foi uma landing page mais tecnológica, organizada e estratégica, com melhor hierarquia visual, comunicação mais clara e uma jornada mais preparada para conversão.',
          'Além da interface final, o projeto gerou uma base de decisões importantes para a evolução digital da HVEX, incluindo diagnóstico, benchmark, arquitetura da informação, estratégia de marketing digital e um style guide mais consistente para futuras páginas e materiais digitais.',
        ],
      },
    ],
  },
  {
    image: img05, coverImage: img05full, title: 'Portfólio Full Stack', titleAccent: 'Developer Felipe Oliveira', accentColor: 'gradient-portfolio', liveUrl: 'https://felipe-s-oliver.vercel.app',
    category: 'Website',
    tags: ['Web Design', 'Design System', 'UX/UI', 'Prototype'],
    description: 'Criação de um portfólio técnico e visualmente marcante para apresentar experiência, stack, projetos em produção e posicionamento profissional como desenvolvedor full stack.',
    sections: [
      {
        title: 'Problema',
        paragraphs: [
          'O Felipe precisava de um portfólio que fosse além de uma apresentação simples de currículo. Como desenvolvedor Full Stack, ele tinha experiência prática, projetos em produção e domínio de diferentes tecnologias, mas precisava organizar tudo isso em uma experiência digital mais forte, clara e estratégica.',
          'O principal desafio foi transformar informações técnicas em uma narrativa visual atrativa para recrutadores, clientes e empresas, destacando sua senioridade, repertório técnico e capacidade de construir soluções escaláveis. Além disso, o cliente pediu que o portfólio trouxesse uma atmosfera inspirada no universo de Resident Evil, criando uma identidade visual mais imersiva, marcante e alinhada à sua personalidade.',
        ],
      },
      {
        title: 'Objetivo e estratégia de UX',
        paragraphs: [
          'O objetivo foi criar um portfólio com posicionamento forte, capaz de comunicar rapidamente quem é o profissional, quais tecnologias domina, em quais projetos atuou e que tipo de solução consegue entregar.',
          'A estratégia foi estruturar a página como uma jornada de apresentação profissional: primeiro o posicionamento, depois a stack técnica, experiência, projetos em produção, processos de trabalho, diferenciais e formas de contato. Isso ajuda o visitante a entender o valor do profissional sem precisar procurar informações soltas.',
        ],
      },
      {
        title: 'Credibilidade',
        paragraphs: [
          'Para reforçar a credibilidade, a interface destaca informações importantes como anos de experiência, tecnologias utilizadas, projetos reais, empresas por onde passou e aplicações em produção.',
          'Também trabalhei uma estética dark, técnica e imersiva, com elementos visuais inspirados no universo de Resident Evil, usando contraste, vermelho, ruído, composições mais dramáticas e uma atmosfera de tensão controlada para trazer personalidade sem comprometer a leitura e o profissionalismo.',
        ],
      },
      {
        title: 'Interface e conversão',
        paragraphs: [
          'A interface foi pensada para ter impacto visual logo no primeiro contato, usando contraste forte, tipografia expressiva, elementos em vermelho e uma composição dark mode alinhada ao universo de tecnologia.',
          'As seções foram organizadas para facilitar a leitura, destacar projetos e conduzir o visitante até a ação principal: entrar em contato. A hierarquia visual ajuda recrutadores e clientes a identificarem rapidamente experiência, stack, principais entregas e diferenciais técnicos.',
        ],
      },
      {
        title: 'Resultados',
        paragraphs: [
          'O resultado foi um portfólio com identidade forte, narrativa profissional clara e estrutura preparada para gerar mais confiança em recrutadores, clientes e parceiros.',
          'A nova interface valoriza a experiência do Felipe como desenvolvedor Full Stack, organiza sua trajetória de forma estratégica e transforma seus projetos e habilidades técnicas em uma apresentação mais profissional, memorável e orientada a oportunidades.',
        ],
      },
    ],
  },
  {
    image: img04, title: 'App Fitness', category: 'Apps',
    tags: ['Mobile', 'UX/UI', 'Apps'],
    description: 'Aplicativo de fitness com foco em acompanhamento de treinos e evolução física.',
    sections: [
      { title: 'Problema', paragraphs: ['Usuários tinham dificuldade em acompanhar sua evolução física de forma consistente. Os apps existentes eram complexos e desmotivadores.'] },
      { title: 'Objetivo e estratégia de UX', paragraphs: ['Criar uma experiência simples e motivadora, com foco em gamificação leve e feedback visual de progresso.'] },
      { title: 'Resultados', paragraphs: ['Interface intuitiva com onboarding fluido, dashboards de progresso e sistema de metas personalizáveis.'] },
    ],
  },
  {
    image: img06,
    coverImage: img27,
    title: 'Landing Page',
    titleAccent: 'Drakorys Arcane',
    accentColor: 'gradient-portfolio',
    category: 'Game UI',
    tags: ['Landing Page', 'Conversão', 'UX/UI', 'Game UI'],
    description: 'Criação de uma landing page conceitual para um universo de fantasia, com foco em direção visual imersiva, storytelling, apresentação de personagens e experiência promocional para jogo.',
    sections: [
      {
        title: 'Problema',
        paragraphs: [
          'O desafio era criar uma landing page que apresentasse um universo de fantasia de forma impactante, sem funcionar apenas como uma vitrine estática. A página precisava comunicar o mundo do jogo, seus personagens, criaturas, poderes e possibilidades de exploração de forma clara e ao mesmo tempo emocional.',
          'O principal desafio foi equilibrar estética épica, grande volume visual e organização da informação, para que a experiência fosse imersiva, mas ainda legível, escaneável e interessante para quem estivesse conhecendo o jogo pela primeira vez.',
        ],
      },
      {
        title: 'Objetivo e estratégia de UX',
        paragraphs: [
          'O objetivo foi construir uma landing page promocional capaz de apresentar o universo do jogo, gerar curiosidade e conduzir o usuário por uma jornada envolvente.',
          'A estratégia foi organizar a navegação em blocos de descoberta: primeiro a hero section com impacto visual, depois a introdução ao universo, personagens, ambientações, modos de jogar, benefícios da experiência e chamadas para ação. Assim, a página conduz o usuário de forma progressiva, sem entregar tudo de uma vez.',
        ],
      },
      {
        title: 'Direção Visual',
        paragraphs: [
          'A direção visual foi pensada para traduzir um universo sombrio, mágico e épico. Trabalhei uma estética dark com tons de azul, preto e brilhos intensos, reforçando a sensação de poder, mistério e fantasia.',
          'As imagens, personagens e criaturas foram usados como protagonistas da experiência, enquanto a tipografia expressiva, os contrastes fortes e os detalhes visuais ajudam a construir uma atmosfera cinematográfica e memorável.',
        ],
      },
      {
        title: 'Interface e conversão',
        paragraphs: [
          'A interface foi desenhada para causar impacto logo no primeiro contato, com uma hero section forte, personagens em destaque e CTAs claros. Ao longo da página, as seções alternam blocos de texto, imagens imersivas e áreas de apresentação de funcionalidades para manter ritmo visual e interesse.',
          'A estrutura também ajuda o usuário a entender diferentes camadas do projeto, como lore, personagens, exploração, modos de jogo e plataformas, tornando a navegação mais fluida e envolvente.',
        ],
      },
      {
        title: 'Decisões de UX',
        paragraphs: [
          'Uma das principais decisões foi trabalhar hierarquia visual forte para que a página não se tornasse apenas bonita, mas também compreensível. Por isso, usei títulos grandes, espaçamentos generosos, cards bem definidos e CTAs em pontos estratégicos.',
          'Também busquei equilibrar excesso de informação com momentos de respiro visual, criando seções mais densas e outras mais contemplativas. Isso ajuda a manter a imersão sem cansar o usuário durante a navegação.',
        ],
      },
      {
        title: 'Resultados',
        paragraphs: [
          'O resultado foi uma landing page conceitual com forte presença visual, atmosfera épica e narrativa bem estruturada. A experiência consegue apresentar o universo do jogo de forma mais envolvente, destacando personagens, ambientações e elementos de fantasia com clareza e impacto.',
          'Além do resultado visual, o projeto demonstra capacidade de construir interfaces temáticas, trabalhar direção de arte, storytelling e organização de conteúdo em páginas promocionais de alto apelo emocional.',
        ],
      },
    ],
  },
  {
    image: img07,
    coverImage: img07full,
    title: 'Landing Page',
    titleAccent: 'Resident Evil',
    accentColor: 'gradient-portfolio',
    category: 'Game UI',
    tags: ['Landing Page', 'Conversão', 'UX/UI', 'Game UI'],
    description: 'Criação de uma landing page conceitual inspirada no universo de Resident Evil, com foco em atmosfera imersiva, narrativa visual, impacto emocional e experiência cinematográfica.',
    sections: [
      {
        title: 'Problema',
        paragraphs: [
          'O desafio era criar uma landing page que não funcionasse apenas como uma página promocional, mas como uma extensão da experiência do jogo. Por se tratar de um universo conhecido pela tensão, mistério e atmosfera sombria, a interface precisava transmitir imersão desde o primeiro contato.',
          'A proposta exigia equilibrar impacto visual, leitura clara e navegação objetiva, sem perder a estética dramática e cinematográfica característica de uma experiência de survival horror.',
        ],
      },
      {
        title: 'Objetivo e estratégia de UX',
        paragraphs: [
          'O objetivo foi criar uma landing page envolvente, capaz de apresentar o jogo de forma visualmente marcante e conduzir o usuário por uma narrativa progressiva.',
          'A estratégia foi organizar a página como uma jornada de descoberta: primeiro o impacto da hero section, depois novidades do universo, cenas de tensão, personagens, ambientação, chamada para ação e informações finais. Essa estrutura ajuda o usuário a entrar no clima do jogo enquanto entende os principais pontos da experiência.',
        ],
      },
      {
        title: 'Direção Visual',
        paragraphs: [
          'A direção visual foi construída com uma estética dark, uso intenso de contraste, imagens dramáticas, tipografia forte e detalhes em vermelho para reforçar alerta, perigo e tensão.',
          'A interface explora sombras, sobreposições, texturas e composições cinematográficas para criar uma sensação de suspense. Cada seção foi pensada para parecer parte de uma narrativa visual, mantendo o usuário imerso no universo da landing page.',
        ],
      },
      {
        title: 'Decisões de UX',
        paragraphs: [
          'Uma das principais decisões foi usar uma interface escura com hierarquia bem marcada, garantindo que os textos e CTAs continuassem legíveis mesmo com fundos complexos e imagens dramáticas.',
          'Também trabalhei espaçamentos amplos, contraste entre títulos e descrições, cards com baixa opacidade e elementos visuais de apoio para reforçar a estética do jogo sem prejudicar a usabilidade.',
        ],
      },
      {
        title: 'Resultados',
        paragraphs: [
          'O resultado foi uma landing page conceitual com forte apelo visual, atmosfera imersiva e narrativa clara. A interface consegue traduzir o universo de Resident Evil em uma experiência digital mais cinematográfica e memorável.',
          'Além do impacto visual, o projeto demonstra domínio de composição, hierarquia, direção de arte, storytelling e construção de interfaces temáticas, mostrando como o UX/UI pode ser usado para criar experiências emocionais e alinhadas ao universo de uma marca ou produto.',
        ],
      },
    ],
  },
  {
    image: img11,
    modalImage: img11full,
    title: 'Caffe Express',
    subtitle: 'Desafio da UX Quest',
    status: 'Concluído',
    category: 'Apps',
    tags: ['SaaS', 'Design System', 'Dashboard'],
    behanceUrl: 'https://www.behance.net/gallery/243841329/Caf-Express-UXUI-Case-Study-App-de-Delivery',
    description: 'App de pedidos para cafeteria com interface minimalista, intuitiva e acolhedora.',
  },
  { image: img12, title: 'Essencial Perfumaria',     category: 'Dashboard', tags: ['Dashboard', 'E-commerce', 'Gestão'],         description: 'Dashboard de gestão para perfumaria com controle de estoque, vendas e indicadores de performance.' },
  { image: img14, title: 'JC Corporativas',          category: 'Logotipo',  tags: ['Logotipo', 'Branding', 'Corporativo'],      description: 'Identidade visual corporativa para a empresa JC Corporativas.' },
  { image: img15, title: 'Conecta',                  category: 'Logotipo',  tags: ['Logotipo', 'Branding'],                     description: 'Criação de marca e identidade visual para a Conecta 360°.' },
  { image: img16, title: 'CatchUp Tech',             category: 'Logotipo',  tags: ['Logotipo', 'Tech', 'Startup'],              description: 'Identidade visual moderna para startup de tecnologia CatchUp Tech.' },
  { image: img17, title: 'Talessa Rodrigues',        category: 'Logotipo',  tags: ['Logotipo', 'Personal Branding'],            description: 'Marca pessoal — criação da identidade visual da Talessa Rodrigues Designer.' },
  { image: img18, title: 'Cards YU-GI-OH',           category: 'Dashboard', tags: ['Dashboard', 'Game UI', 'Colecionáveis'],    description: 'Sistema de cards interativos baseado no universo de Yu-Gi-Oh com gestão de coleção.' },
  { image: img19, title: 'Heat Game',                category: 'Apps',      tags: ['Mobile', 'Game UI', 'Apps'],                description: 'Interface de jogo mobile com foco em performance, engajamento e feedback imediato.' },
  {
    image: img21,
    modalImage: img21full,
    title: 'Neobank',
    subtitle: 'Redesign de um banco digital',
    status: 'Concluído',
    category: 'Apps',
    tags: ['Fintech', 'Mobile', 'UX/UI', 'Design System'],
    figmaUrl: 'https://www.figma.com/design/TIjwYjAXTWejNw1iJmnaSP/Portif%C3%B3lio?node-id=1167-2363',
    description: 'App de banco digital com experiência financeira simplificada para o dia a dia.',
  },
  {
    image: img22, title: 'Redesign Itaú', category: 'Apps',
    tags: ['Mobile', 'Redesign', 'Fintech', 'Acessibilidade'],
    description: 'Redesign conceitual do aplicativo do Itaú com foco em acessibilidade e usabilidade para todos os perfis.',
    sections: [
      { title: 'Problema', paragraphs: ['O app oficial apresentava fluxos complexos e baixa acessibilidade, especialmente para usuários mais velhos.'] },
      { title: 'Objetivo', paragraphs: ['Simplificar a navegação principal, aumentar o tamanho dos elementos interativos e melhorar o contraste.'] },
      { title: 'Resultados', paragraphs: ['Redesign com hierarquia clara, navegação bottom-tab simplificada e paleta com alto contraste.'] },
    ],
  },
  { image: img24, title: 'Planejamento Financeiro',  category: 'Dashboard', tags: ['Dashboard', 'Fintech', 'UX/UI'],            description: 'Dashboard de planejamento financeiro pessoal com visualização de metas, gastos e investimentos.' },
]
