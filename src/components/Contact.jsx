import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react'
import config from '../config'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!config.formspreeId) {
      setErrorMsg('Contact form is not configured. Please set VITE_FORMSPREE_ID in your .env file.')
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${config.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Server error')
      }
    } catch {
      setErrorMsg('Something went wrong. Please try emailing directly.')
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    borderRadius: 8,
    border: '1px solid var(--color-border)',
    backgroundColor: 'rgba(255,255,255,0.02)',
    color: 'var(--color-text)',
    fontSize: 14,
    fontFamily: 'DM Sans, sans-serif',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  const labelStyle = {
    display: 'block',
    marginBottom: 6,
    fontSize: 12,
    fontWeight: 500,
    color: 'var(--color-muted)',
    fontFamily: 'DM Sans, sans-serif',
  }

  return (
    <section id="contact" className="py-28" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="section-container" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-subtitle">06 / Contact</p>
          <h2 className="section-title">Let's Connect</h2>
          <div className="glow-line w-16 mt-3" />
          <p className="mt-4 text-sm max-w-xl" style={{ color: 'var(--color-muted)' }}>
            Open to System Integration, IoT, and Embedded Systems roles. Feel free to reach out for collaborations, opportunities, or just a conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: Mail, label: 'Email', value: config.email, href: `mailto:${config.email}` },
              { icon: Phone, label: 'Phone / WhatsApp', value: `+${config.phone}`, href: `tel:+${config.phone}` },
              { icon: MapPin, label: 'Location', value: config.location, href: null },
            ].map((item) => (
              <div
                key={item.label}
                className="card flex items-center gap-4"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.2)' }}
                >
                  <item.icon size={18} style={{ color: 'var(--color-cyan)' }} />
                </div>
                <div>
                  <div className="text-xs mb-0.5" style={{ color: 'var(--color-muted)' }}>{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-medium transition-colors duration-200"
                      style={{ color: 'var(--color-text)' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-cyan)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text)' }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="card">
              <p className="text-xs mb-4" style={{ color: 'var(--color-muted)' }}>Connect on</p>
              <div className="flex gap-3">
                <a
                  href={`https://github.com/${config.githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-muted)',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-cyan)'; e.currentTarget.style.borderColor = 'rgba(34,211,238,0.3)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-muted)'; e.currentTarget.style.borderColor = 'var(--color-border)' }}
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={config.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-muted)',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-cyan)'; e.currentTarget.style.borderColor = 'rgba(34,211,238,0.3)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-muted)'; e.currentTarget.style.borderColor = 'var(--color-border)' }}
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="card">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={48} style={{ color: '#22c55e', marginBottom: 16 }} />
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--color-text)' }}>
                    Message Sent!
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-outline mt-6 text-sm"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label style={labelStyle}>Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = 'rgba(34,211,238,0.4)' }}
                        onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)' }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = 'rgba(34,211,238,0.4)' }}
                        onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Collaboration opportunity"
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(34,211,238,0.4)' }}
                      onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)' }}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(34,211,238,0.4)' }}
                      onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)' }}
                    />
                  </div>

                  {status === 'error' && (
                    <div
                      className="flex items-center gap-2 p-3 rounded-lg text-sm"
                      style={{
                        backgroundColor: 'rgba(239,68,68,0.06)',
                        border: '1px solid rgba(239,68,68,0.15)',
                        color: 'rgba(239,68,68,0.9)',
                      }}
                    >
                      <AlertCircle size={14} />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full justify-center"
                    style={{ opacity: status === 'sending' ? 0.7 : 1 }}
                  >
                    <Send size={16} />
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
