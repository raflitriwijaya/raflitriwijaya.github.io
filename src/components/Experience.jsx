import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react'
import config from '../config'

function ExperienceCard({ exp, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative pl-8"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 flex flex-col items-center">
        <div
          className="w-3 h-3 rounded-full flex-shrink-0"
          style={{
            backgroundColor: exp.current ? 'var(--color-cyan)' : 'var(--color-surface)',
            border: `2px solid ${exp.current ? 'var(--color-cyan)' : 'rgba(34,211,238,0.3)'}`,
            boxShadow: exp.current ? '0 0 10px rgba(34,211,238,0.5)' : 'none',
          }}
        />
        {index < config.experience.length - 1 && (
          <div
            className="w-px flex-1 mt-2"
            style={{
              height: '100%',
              minHeight: '32px',
              background: 'linear-gradient(to bottom, rgba(34,211,238,0.3), rgba(34,211,238,0.05))',
            }}
          />
        )}
      </div>

      <div className="card mb-6 ml-2">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3
                className="text-base font-bold"
                style={{ fontFamily: 'Syne, sans-serif', color: 'var(--color-text)' }}
              >
                {exp.role}
              </h3>
              {exp.current && (
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-mono"
                  style={{
                    backgroundColor: 'rgba(34,211,238,0.1)',
                    color: 'var(--color-cyan)',
                    border: '1px solid rgba(34,211,238,0.2)',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  Current
                </span>
              )}
            </div>
            <div
              className="text-sm font-medium"
              style={{ color: 'var(--color-cyan)' }}
            >
              {exp.company}
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--color-muted)' }}>
              <Calendar size={11} />
              <span style={{ fontFamily: 'JetBrains Mono, monospace' }}>{exp.period}</span>
            </div>
            <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--color-muted)' }}>
              <MapPin size={11} />
              <span>{exp.location}</span>
            </div>
          </div>
        </div>

        {/* Bullets */}
        <ul className="space-y-2 mb-4">
          {exp.bullets.map((bullet, bi) => (
            <li key={bi} className="flex gap-2 text-sm" style={{ color: 'var(--color-muted)' }}>
              <ChevronRight
                size={14}
                className="flex-shrink-0 mt-0.5"
                style={{ color: 'var(--color-cyan)' }}
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="experience"
      className="py-28"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="section-container" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-subtitle">02 / Experience</p>
          <h2 className="section-title">Work History</h2>
          <div className="glow-line w-16 mt-3" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl">
          {config.experience.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
