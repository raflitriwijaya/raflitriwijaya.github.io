import { Github, Linkedin, Mail, Cpu } from 'lucide-react'
import config from '../config'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="py-10 border-t"
      style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-bg)' }}
    >
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.15)' }}
            >
              <Cpu size={14} style={{ color: 'var(--color-cyan)' }} />
            </div>
            <span
              className="text-sm font-bold"
              style={{ fontFamily: 'Syne, sans-serif', color: 'var(--color-text)' }}
            >
              Rafli<span style={{ color: 'var(--color-cyan)' }}>.</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-center" style={{ color: 'var(--color-muted)' }}>
            © {year} Rafli Triwijaya — Built with React + Tailwind CSS
          </p>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href={`https://github.com/${config.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
              style={{
                color: 'var(--color-muted)',
                border: '1px solid var(--color-border)',
                backgroundColor: 'rgba(255,255,255,0.02)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-cyan)'; e.currentTarget.style.borderColor = 'rgba(34,211,238,0.3)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-muted)'; e.currentTarget.style.borderColor = 'var(--color-border)' }}
            >
              <Github size={14} />
            </a>
            <a
              href={config.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
              style={{
                color: 'var(--color-muted)',
                border: '1px solid var(--color-border)',
                backgroundColor: 'rgba(255,255,255,0.02)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-cyan)'; e.currentTarget.style.borderColor = 'rgba(34,211,238,0.3)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-muted)'; e.currentTarget.style.borderColor = 'var(--color-border)' }}
            >
              <Linkedin size={14} />
            </a>
            <a
              href={`mailto:${config.email}`}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
              style={{
                color: 'var(--color-muted)',
                border: '1px solid var(--color-border)',
                backgroundColor: 'rgba(255,255,255,0.02)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-cyan)'; e.currentTarget.style.borderColor = 'rgba(34,211,238,0.3)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-muted)'; e.currentTarget.style.borderColor = 'var(--color-border)' }}
            >
              <Mail size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
