import type { AnchorHTMLAttributes, MouseEvent } from 'react'
import { navigate } from '../../hooks/useRoute'

interface SiteLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string
}

// Link interno: é um <a href> de verdade (abre em nova aba com Ctrl/⌘,
// o Google segue), mas o clique simples troca de página sem recarregar.
export function SiteLink({ to, onClick, ...rest }: SiteLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e)
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    navigate(to)
  }
  return <a href={to} onClick={handleClick} {...rest} />
}
