export interface ProjectMeta {
  title: string
  categoryKey: string
  /** null nos projetos que só levam para o site publicado (sem case). */
  slug: string | null
  /** Caminho absoluto da imagem do card. */
  image: string | undefined
}

export function readProjects(root: string): ProjectMeta[]
