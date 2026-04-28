import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, ArrowDown, Download } from 'lucide-react'
import config from '../config'

const FloatingOrb = ({ style }) => (
  <div
    className="absolute rounded-full pointer-events-none"
    style={{
      background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)',
      ...style,
    }}
  />
)

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
      style={{ paddingTop: '80px' }}
    >
      {/* Background orbs */}
      <FloatingOrb style={{ width: 600, height: 600, top: -100, right: -200, opacity: 0.6 }} />
      <FloatingOrb style={{ width: 400, height: 400, bottom: 0, left: -100, opacity: 0.4 }} />

      {/* Scan line */}
      <div
        className="absolute left-0 right-0 h-px pointer-events-none opacity-20"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--color-cyan), transparent)',
          animation: 'scan 8s linear infinite',
          top: 0,
        }}
      />

      <div className="section-container w-full py-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text content */}
          <div className="flex-1 max-w-2xl">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                backgroundColor: 'rgba(34,211,238,0.08)',
                border: '1px solid rgba(34,211,238,0.2)',
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: '#22c55e' }}
              />
              <span
                className="text-xs font-mono tracking-widest uppercase"
                style={{ color: 'var(--color-cyan)', fontFamily: 'JetBrains Mono, monospace' }}
              >
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl xl:text-7xl font-bold leading-tight mb-4"
              style={{ fontFamily: 'Syne, sans-serif', color: 'var(--color-text)' }}
            >
              Rafli{' '}
              <span style={{ color: 'var(--color-cyan)' }}>Triwijaya</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg mb-2 font-mono tracking-wide"
              style={{ color: 'var(--color-gold)', fontFamily: 'JetBrains Mono, monospace' }}
            >
              {'>'} System Integration Engineer | IoT &amp; Automation
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex items-center gap-1.5 mb-8"
              style={{ color: 'var(--color-muted)' }}
            >
              <MapPin size={14} />
              <span className="text-sm">{config.location}</span>
            </motion.div>

            {/* Short bio snippet */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base leading-relaxed mb-10 max-w-xl"
              style={{ color: 'var(--color-muted)' }}
            >
              Agricultural Engineering graduate specializing in{' '}
              <span style={{ color: 'var(--color-text)' }}>STM32 · ESP32 · Raspberry Pi</span> systems.
              Experienced in circuit design, sensor integration, and deploying industrial automation from concept to production.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                <Mail size={16} />
                Get in Touch
              </button>
              <button
                onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                View Projects
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <a
                href={`https://github.com/${config.githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-muted)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-cyan)'; e.currentTarget.style.borderColor = 'rgba(34,211,238,0.4)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-muted)'; e.currentTarget.style.borderColor = 'var(--color-border)' }}
              >
                <Github size={18} />
              </a>
              <a
                href={config.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-muted)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-cyan)'; e.currentTarget.style.borderColor = 'rgba(34,211,238,0.4)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-muted)'; e.currentTarget.style.borderColor = 'var(--color-border)' }}
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${config.email}`}
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-muted)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-cyan)'; e.currentTarget.style.borderColor = 'rgba(34,211,238,0.4)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-muted)'; e.currentTarget.style.borderColor = 'var(--color-border)' }}
              >
                <Mail size={18} />
              </a>
              <div style={{ width: 1, height: 24, backgroundColor: 'var(--color-border)' }} />
              <a
                href={`tel:+${config.phone}`}
                className="text-sm flex items-center gap-1.5 transition-colors duration-200"
                style={{ color: 'var(--color-muted)', fontFamily: 'JetBrains Mono, monospace' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-text)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-muted)' }}
              >
                <Phone size={13} />
                +{config.phone}
              </a>
            </motion.div>
          </div>

          {/* Avatar / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative flex-shrink-0"
          >
            <div className="relative" style={{ animation: 'float 6s ease-in-out infinite' }}>
              {/* Outer ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 30%, rgba(34,211,238,0.4) 50%, transparent 70%)',
                  animation: 'spin 8s linear infinite',
                  padding: 2,
                  borderRadius: '50%',
                }}
              />
              {/* Avatar container */}
              <div
                className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden"
                style={{
                  border: '2px solid rgba(34,211,238,0.2)',
                  boxShadow: '0 0 60px rgba(34,211,238,0.12), 0 0 120px rgba(34,211,238,0.06)',
                }}
              >
                <img
                  src={config.avatarUrl}
                  alt={config.name}
                  className="w-full h-full object-cover"
                  style={{ backgroundColor: 'var(--color-surface)' }}
                />
              </div>

              {/* Corner badges */}
              <div
                className="absolute -bottom-4 -right-4 px-3 py-1.5 rounded-lg text-xs font-mono"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid rgba(34,211,238,0.2)',
                  color: 'var(--color-cyan)',
                  fontFamily: 'JetBrains Mono, monospace',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                }}
              >
                GPA 3.74 / 4.00
              </div>
              <div
                className="absolute -top-4 -left-4 px-3 py-1.5 rounded-lg text-xs font-mono"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid rgba(251,191,36,0.2)',
                  color: 'var(--color-gold)',
                  fontFamily: 'JetBrains Mono, monospace',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                }}
              >
                9+ yrs exp.
              </div>
            </div>

            {/* Tech stack floating pills */}
            {['STM32', 'ESP32', 'CAN Bus'].map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="absolute tag"
                style={{
                  top: `${20 + i * 30}%`,
                  right: i % 2 === 0 ? '-50px' : '-60px',
                  fontSize: '10px',
                  whiteSpace: 'nowrap',
                }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono tracking-widest" style={{ color: 'var(--color-muted)', fontFamily: 'JetBrains Mono, monospace' }}>
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={14} style={{ color: 'var(--color-cyan)' }} />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
