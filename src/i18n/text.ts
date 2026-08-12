// Liga as duas últimas palavras com espaço inseparável (U+00A0) para
// que nenhum título termine com uma palavra sozinha na última linha —
// a "viúva" tipográfica. Em vez de quebrar em
//   "O que dizem sobre meu
//    trabalho"
// o texto quebra em
//   "O que dizem sobre
//    meu trabalho".
// Usar em títulos, não em parágrafos: num texto corrido a última linha
// curta é normal e o nbsp só atrapalharia a justificação.
export function semViuva(texto: string): string {
  const limpo = texto.trimEnd()
  const corte = limpo.lastIndexOf(' ')
  if (corte < 0) return texto
  return `${limpo.slice(0, corte)} ${limpo.slice(corte + 1)}`
}
