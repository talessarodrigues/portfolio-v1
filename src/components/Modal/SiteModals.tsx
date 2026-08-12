import { Modal } from './Modal'
import styles from './SiteModals.module.css'
import { useTranslation } from '../../i18n/LanguageContext'
import { SobreMim } from '../SobreMim/SobreMim'
import { Experiencias } from '../Experiencias/Experiencias'
import { ProjectsHero } from '../ProjectsHero/ProjectsHero'
import type { ProjectFilter } from '../ProjectsHero/ProjectsHero'
import { ProjectsGrid } from '../ProjectsGrid/ProjectsGrid'
import { ProjectDetail } from '../ProjectDetail/ProjectDetail'
import { Recomendacoes } from '../Recomendacoes/Recomendacoes'
import type { Project } from '../../data/projects'
import type { HeroModal } from '../Hero/Hero'

interface SiteModalsProps {
  open: HeroModal | null
  onClose: () => void
  /** Quando preenchido, o modal de Cases mostra o case study em vez da grade. */
  detailSlug: string | null
  projectFilter: ProjectFilter
  onFilterChange: (filter: ProjectFilter) => void
  onSelectProject: (project: Project) => void
  onBackToGrid: () => void
}

// As seções que antes viviam empilhadas na home agora entram por aqui:
// a home é só a Hero, e cada item do menu abre a seção correspondente
// num modal por cima dela. Cases é o único com duas telas — grade e
// detalhamento — que se alternam dentro do mesmo modal.
export function SiteModals({
  open,
  onClose,
  detailSlug,
  projectFilter,
  onFilterChange,
  onSelectProject,
  onBackToGrid,
}: SiteModalsProps) {
  const { t } = useTranslation()

  return (
    <>
      <Modal
        open={open === 'cases'}
        title={t.modais.casesTitulo}
        scrollResetKey={detailSlug ?? `grade-${projectFilter}`}
        onClose={onClose}
      >
        <div className={styles.stack}>
          {detailSlug ? (
            // O "Voltar" do próprio case study devolve pra grade sem
            // fechar o modal.
            <ProjectDetail currentSlug={detailSlug} onBack={onBackToGrid} />
          ) : (
            <>
              <ProjectsHero activeFilter={projectFilter} onFilterChange={onFilterChange} />
              <ProjectsGrid activeFilter={projectFilter} onSelectProject={onSelectProject} />
            </>
          )}
        </div>
      </Modal>

      <Modal open={open === 'perfil'} title={t.modais.perfilTitulo} subtitle={t.modais.perfilSubtitulo} onClose={onClose}>
        {/* Sobre e Perfil viraram um modal só. */}
        <div className={styles.stack}>
          <SobreMim />
          <Experiencias />
          <Recomendacoes />
        </div>
      </Modal>
    </>
  )
}
