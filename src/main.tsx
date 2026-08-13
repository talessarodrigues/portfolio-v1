import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from './i18n/LanguageContext.tsx'
import { ThemeProvider } from './theme/ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App />
        {/* Medição da Vercel: quantas visitas, de onde vêm e quais botões
            de contato são clicados (ver src/analytics.ts). Não usa cookie
            nem identifica ninguém, então não exige aviso de consentimento.
            Só coleta no site publicado — em desenvolvimento fica inerte. */}
        <Analytics />
        {/* Velocidade real de carregamento nos aparelhos de quem visita.
            Página lenta perde posição no Google e visita no celular. */}
        <SpeedInsights />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)
