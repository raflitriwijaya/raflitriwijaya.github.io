import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Globe, Heart } from 'lucide-react'
import config from '../config'

function SkillBar({ name, level, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="mb-5"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
          {name}
        </span>
        <span
          className="text-xs font-mono"
          style={{ color: 'var(--color-cyan)', fontFamily: 'JetBrains Mono, monospace' }}
        >
          {level}%
        </span>
      </div>
      <div
        className="w-full h-1.5 rounded-full overflow-hidden"
        style={{ backgroundColor: 'rgba(34,211,238,0.08)' }}
      >
        {inView && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${level}%` }}
            transition={{ duration: 1, delay: index * 0.06 + 0.2, ease: 'easeOut' }}
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, var(--color-cyan), rgba(34,211,238,0.6))`,
              boxShadow: '0 0 8px rgba(34,211,238,0.4)',
            }}
          />
        )}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-28" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="section-container" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-subtitle">04 / Skills</p>
          <h2 className="section-title">Technical Arsenal</h2>
          <div className="glow-line w-16 mt-3" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Skill bars */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Code2 size={16} style={{ color: 'var(--color-cyan)' }} />
              <h3 className="text-sm font-semibold tracking-wide" style={{ color: 'var(--color-text)' }}>
                Technical Skills
              </h3>
            </div>
            {config.skills.technical.map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} inView={inView} />
            ))}
          </div>

          {/* Right: Tools + Languages + Soft */}
          <div className="space-y-10">
            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-sm font-semibold tracking-wide mb-4 flex items-center gap-2" style={{ color: 'var(--color-text)' }}>
                <Code2 size={14} style={{ color: 'var(--color-gold)' }} />
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {config.skills.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg text-sm font-mono transition-all duration-200 cursor-default"
                    style={{
                      backgroundColor: 'rgba(251,191,36,0.06)',
                      border: '1px solid rgba(251,191,36,0.15)',
                      color: 'var(--color-gold)',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '12px',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(251,191,36,0.12)'
                      e.currentTarget.style.boxShadow = '0 0 12px rgba(251,191,36,0.15)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(251,191,36,0.06)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-sm font-semibold tracking-wide mb-4 flex items-center gap-2" style={{ color: 'var(--color-text)' }}>
                <Globe size={14} style={{ color: 'var(--color-cyan)' }} />
                Languages
              </h3>
              <div className="space-y-3">
                {config.skills.languages.map((l) => (
                  <div
                    key={l.lang}
                    className="flex items-center justify-between px-4 py-3 rounded-lg"
                    style={{
                      backgroundColor: 'rgba(34,211,238,0.04)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>{l.lang}</span>
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded"
                      style={{
                        color: 'var(--color-cyan)',
                        backgroundColor: 'rgba(34,211,238,0.08)',
                        fontFamily: 'JetBrains Mono, monospace',
                      }}
                    >
                      {l.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-sm font-semibold tracking-wide mb-4 flex items-center gap-2" style={{ color: 'var(--color-text)' }}>
                <Heart size={14} style={{ color: '#f87171' }} />
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {config.skills.soft.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm"
                    style={{
                      backgroundColor: 'rgba(248,113,113,0.06)',
                      border: '1px solid rgba(248,113,113,0.15)',
                      color: '#f87171',
                      fontSize: '12px',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
