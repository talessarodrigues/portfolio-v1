// Texto alternativo de cada módulo das páginas de case (na ordem das imagens).
//
// Os cases do Vértice e do Nexo são feitos de imagens longas exportadas do
// Figma: o texto do case está DENTRO delas, onde o Google e os leitores de
// tela não alcançam. Estes textos descrevem cada módulo em uma frase, com os
// termos que alguém buscaria ("case study", "design system", "usability
// testing"...). Servem a três coisas: acessibilidade, busca por imagem e o
// resumo em texto que o build coloca no HTML estático (vite.config.ts).
//
// Este arquivo é só dados (sem import.meta.glob) para o vite.config.ts poder
// importá-lo. Em inglês, porque o HTML estático do site sai em inglês.

export const caseAlts: Record<string, string[]> = {
  'vertice-ux': [
    'Vértice cover: from jargon to confidence in a single investing app for beginners, a UX/UI case study',
    'Vértice home screen on desktop: total balance, monthly return, balance evolution chart, alerts and the investments list',
    'Overview: a fintech investing app that explains what you own, how much it earns and how much risk it carries',
    'The problem: 7 out of 11 beginners stopped investing or tracking because they did not understand some information, plus the project constraints',
    'Deliverables: five connected modules, 24 mobile screens, 7 desktop screens, 29 components and 5 documented flows',
    'Design process: discovery, user survey, flows and wireframes, and high-fidelity UI',
    'Process records: discovery boards with context, hypotheses, survey answers, affinity synthesis and personas',
    'User research: online survey with 11 people about what gets in the way, what they want to see first and what builds trust',
    'From insights to decisions: each research insight linked to a design decision and the screen where it shows up',
    'User flows: login and onboarding, home and alerts, understanding my portfolio, understanding terms, and simulating before investing',
    'Login and onboarding screens: sign in, password error, experience level, risk profile question and a personalized summary',
    'A profile that adapts the app: three home screen densities based on knowledge level and risk profile',
    'Home and alerts: balance, return first, portfolio health verdict, hidden values, loading and empty states, and risk alerts',
    'Understanding my portfolio: portfolio health in three checks, allocation by risk level and an assistant that explains without recommending',
    'Understanding the terms: a term explained on tap, a searchable glossary with CDI, dividends and funds, and a no-results state',
    'Simulate before investing: monthly amount, period, three scenarios (cautious, likely, optimistic) and a fixed notice that it is a projection, not a promise',
    'Discarded decisions: four design alternatives left out and the reason for each one',
    'Design system: variables for light and dark themes, 19 text styles, 29 components, 37 icons, component states and the maintenance rules',
    'States and exceptions: empty, loading, error, hidden values, invalid input and search without results',
    'Usability test plan: five tasks with five participants in moderated remote sessions, with success criteria',
    'What the tests will decide: severity levels and the design changes each failure would trigger',
    'Expected results: targets to measure after launch, with no baseline yet, and key learnings',
    'What was left out and what I would change: small sample, survey wording, login without evidence and a late contrast audit',
    'Closing: from jargon to confidence, thanks for following the case',
  ],
  'nexo-ux': [
    'Nexo cover: a B2B corporate spend platform for cards, expenses and budgets, a UX/UI case study',
    'Nexo product hero: the corporate cards dashboard on web and the mobile app',
    'Dashboard overview: the main panel with requests, cards and budget status',
    'Overview: one system from request to receipt for corporate cards, expenses and budgets',
    'The problem: companies manage cards across spreadsheets, emails and chats, and the research constraints',
    'Deliverables: modules, screens, components and documented flows',
    'Design process: research, flows, interface, design system and documentation',
    'Process records: discovery boards, survey answers and synthesis',
    'User research: survey with 32 people (employees, managers and finance) and usability tests with 8',
    'From insights to decisions: each insight linked to a design decision and an annotated screen',
    'User flows: request a limit increase, decide a request, submit a receipt, block a card and log an expense',
    'Home and notifications: the main dashboard with pending items and budget alerts',
    'Requests: the list of card and limit requests with the budget impact in view',
    'Request outcome: approved, approved with changes or declined, always saying what changed and what to do next',
    'After approval: how the employee and the manager follow up once a request is decided',
    'Cards: managing corporate cards, limits and states, including blocking a card',
    'Transactions and receipts: matching each expense with its receipt before the deadline',
    'Budgets and reports: spending by team and period for finance',
    'Teams and settings: people, roles, approval rules and permissions',
    'Mobile app: key mobile screens for employees',
    'Log an expense on mobile: receipt first, then a short form',
    'Log an expense, exceptions: duplicate receipts, spending above the limit and missing information',
    'Discarded decisions in the expense flow: four alternatives left out and the risk of each one',
    'Design system: variable foundations, text styles, elevation levels, icons and components with states',
    'Corporate card component: the card in its states and variants',
    'States and exceptions: empty, loading, error and permission screens',
    'Usability tests: six tasks on a high-fidelity prototype with 8 participants',
    'What the tests changed: the fixes reflected in the final screens',
    'Expected results: MVP goals to measure in production, not results already achieved',
    'What was left out and what I would change in the next round',
    'Closing: from request to receipt, thanks for following the case',
  ],
}
