import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { User, Cpu, Wifi, Settings, Target } from 'lucide-react'
import config from '../config'

const highlights = [
  { icon: Cpu, label: 'Embedded Systems', value: 'STM32 · ESP32 · RPi' },
  { icon: Wifi, label: 'Protocols', value: 'CAN Bus · MQTT · OCPP' },
  { icon: Settings, label: 'Hardware', value: 'PCB · Circuit · Sensor' },
  { icon: Target, label: 'Focus', value: 'System Integration' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-28" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="section-container" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-subtitle">01 / About</p>
          <h2 className="section-title">Who I Am</h2>
          <div className="glow-line w-16 mt-3" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Bio column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="relative">
              {/* Quote accent */}
              <div
                className="absolute -top-4 -left-4 text-7xl font-display opacity-10 leading-none select-none"
                style={{ color: 'var(--color-cyan)', fontFamily: 'Syne, sans-serif' }}
              >
                "
              </div>
              <p
                className="text-base sm:text-lg leading-relaxed relative z-10"
                style={{ color: 'var(--color-muted)' }}
              >
                {config.bio}
              </p>
            </div>

            {/* Mini facts */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { label: 'Years of Experience', value: '9+' },
                { label: 'Projects Delivered', value: '10+' },
                { label: 'Graduation GPA', value: '3.74' },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="p-4 rounded-xl text-center"
                  style={{
                    backgroundColor: 'rgba(34,211,238,0.04)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ fontFamily: 'Syne, sans-serif', color: 'var(--color-cyan)' }}
                  >
                    {fact.value}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--color-muted)' }}>
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Highlight cards column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 grid grid-cols-1 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="card flex items-center gap-4"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: 'rgba(34,211,238,0.1)',
                    border: '1px solid rgba(34,211,238,0.2)',
                  }}
                >
                  <item.icon size={18} style={{ color: 'var(--color-cyan)' }} />
                </div>
                <div>
                  <div className="text-xs mb-0.5" style={{ color: 'var(--color-muted)' }}>
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>
                    {item.value}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Location card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.65 }}
              className="card"
              style={{ backgroundImage: 'linear-gradient(135deg, rgba(34,211,238,0.04), rgba(251,191,36,0.04))' }}
            >
              <p className="text-xs mb-1" style={{ color: 'var(--color-muted)' }}>Based in</p>
              <p className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>{config.location}</p>
              <p className="text-xs mt-2 font-mono" style={{ color: 'var(--color-cyan)', fontFamily: 'JetBrains Mono, monospace' }}>
                Open to remote & on-site
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
