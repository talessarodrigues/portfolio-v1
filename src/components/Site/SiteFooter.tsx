import { useEffect, useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  Behance02FreeIcons,
  Copy01FreeIcons,
  Linkedin02FreeIcons,
  Tick02FreeIcons,
  WhatsappFreeIcons,
} from '@hugeicons/core-free-icons'
import styles from './Site.module.css'
import imgAvatar from '../../assets/sobre/perfil-talessa.webp'
import { useTranslation } from '../../i18n/LanguageContext'
import { CONTACTS } from '../../data/contacts'
import { trackContato } from '../../analytics'
import { SiteLink } from './SiteLink'

const SOCIALS = [
  { href: CONTACTS.linkedin, icon: Linkedin02FreeIcons, label: 'LinkedIn', canal: 'linkedin' as const },
  { href: CONTACTS.behance, icon: Behance02FreeIcons, label: 'Behance', canal: 'behance' as const },
  { href: CONTACTS.whatsapp, icon: WhatsappFreeIcons, label: 'WhatsApp', canal: 'whatsapp' as const },
]

export function SiteFooter() {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const id = window.setTimeout(() => setCopied(false), 1800)
    return () => window.clearTimeout(id)
  }, [copied])

  // Copiar é o atalho de quem vai escrever do próprio Gmail/Outlook; se a
  // área de transferência for bloqueada, cai no mailto.
  const copyEmail = async () => {
    trackContato('email', 'rodape')
    try {
      await navigator.clipboard.writeText(CONTACTS.email)
      setCopied(true)
    } catch {
      window.location.href = `mailto:${CONTACTS.email}`
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerAbout}>
          <SiteLink to="/" className={styles.footerName}>
            <img src={imgAvatar} alt="" className={styles.footerAvatar} />
            Talessa Rodrigues
          </SiteLink>
          <p className={styles.footerBio}>{t.site.bio}</p>
        </div>

        <div className={styles.footerCol}>
          <span className={styles.footerLabel}>{t.site.links}</span>
          <SiteLink to="/#projetos" className={styles.footerLink}>{t.site.projetos}</SiteLink>
          <SiteLink to="/sobre" className={styles.footerLink}>{t.site.sobreMim}</SiteLink>
          <a href={t.site.curriculoPdf} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
            {t.site.curriculo}
          </a>
        </div>

        <div className={styles.footerCol}>
          <span className={styles.footerLabel}>{t.site.contato}</span>
          <button type="button" className={styles.footerLink} onClick={copyEmail} aria-label={t.site.copiarEmail}>
            {CONTACTS.email}
            <HugeiconsIcon icon={copied ? Tick02FreeIcons : Copy01FreeIcons} size={14} strokeWidth={1.8} />
            <span className={styles.copied} data-show={copied} aria-live="polite">
              {copied ? t.site.copiado : ''}
            </span>
          </button>
          <a
            href={CONTACTS.agenda}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
            onClick={() => trackContato('agenda', 'rodape')}
          >
            {t.site.agendarChamada}
          </a>
          <div className={styles.footerSocials}>
            {SOCIALS.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={styles.footerSocial}
                onClick={() => trackContato(s.canal, 'rodape')}
              >
                <HugeiconsIcon icon={s.icon} size={18} strokeWidth={1.6} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className={styles.copyright}>{t.footer.copyright}</p>
    </footer>
  )
}
