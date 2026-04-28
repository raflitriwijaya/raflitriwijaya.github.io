import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Award, Calendar } from 'lucide-react'
import config from '../config'

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="py-28" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="section-container" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-subtitle">05 / Education</p>
          <h2 className="section-title">Academic Background</h2>
          <div className="glow-line w-16 mt-3" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {config.education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="card relative overflow-hidden"
            >
              {/* Background accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)',
                  transform: 'translate(30%, -30%)',
                }}
              />

              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: 'rgba(34,211,238,0.08)',
                    border: '1px solid rgba(34,211,238,0.2)',
                  }}
                >
                  <GraduationCap size={18} style={{ color: 'var(--color-cyan)' }} />
                </div>
                <div>
                  <h3
                    className="text-base font-bold leading-snug mb-1"
                    style={{ fontFamily: 'Syne, sans-serif', color: 'var(--color-text)' }}
                  >
                    {edu.school}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--color-cyan)' }}>{edu.degree}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-muted)' }}>{edu.major}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--color-muted)' }}>
                  <Calendar size={12} />
                  <span style={{ fontFamily: 'JetBrains Mono, monospace' }}>{edu.period}</span>
                </div>
                {edu.gpa && (
                  <div className="flex items-center gap-1.5">
                    <Award size={12} style={{ color: 'var(--color-gold)' }} />
                    <span
                      className="text-xs font-mono font-bold"
                      style={{ color: 'var(--color-gold)', fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      GPA {edu.gpa}
                    </span>
                  </div>
                )}
              </div>

              <div className="border-t pt-4" style={{ borderColor: 'var(--color-border)' }}>
                <ul className="space-y-1.5">
                  {edu.highlights.map((h, hi) => (
                    <li key={hi} className="flex items-start gap-2 text-xs" style={{ color: 'var(--color-muted)' }}>
                      <span
                        className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: 'var(--color-cyan)' }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
