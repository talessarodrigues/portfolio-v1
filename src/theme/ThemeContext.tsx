import { createContext, useContext, type ReactNode } from 'react'

export type Theme = 'light' | 'dark'

// O portfólio é só escuro (decisão de 2026-10-08). O index.html já nasce
// com data-theme="dark" no <html>, que é o que liga os tokens de cor do
// index.css; os tokens do claro continuam lá, mas nada mais os ativa.
const THEME: Theme = 'dark'

const ThemeContext = createContext<{ theme: Theme }>({ theme: THEME })

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <ThemeContext.Provider value={{ theme: THEME }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
