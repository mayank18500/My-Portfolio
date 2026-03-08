import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

// ╔═══════════════════════════════════════════╗
// ║  EmailJS Setup Instructions:              ║
// ║  1. Sign up at emailjs.com (free)         ║
// ║  2. Create an Email Service               ║
// ║  3. Create a Template with variables:     ║
// ║     {{from_name}}, {{reply_to}},          ║
// ║     {{message}}, {{to_name}}              ║
// ║  4. Replace the three VITE_EMAILJS_*      ║
// ║     values in your .env file              ║
// ╚═══════════════════════════════════════════╝

const EMAILJS_SERVICE = import.meta.env.VITE_EMAILJS_SERVICE || 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE || 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC = import.meta.env.VITE_EMAILJS_PUBLIC || 'YOUR_PUBLIC_KEY'

export default function Contact() {
    const ref = useRef(null)
    const formRef = useRef<HTMLFormElement>(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!formData.name || !formData.email || !formData.message) return
        setStatus('sending')
        try {
            await emailjs.send(
                EMAILJS_SERVICE,
                EMAILJS_TEMPLATE,
                { from_name: formData.name, reply_to: formData.email, message: formData.message, to_name: 'Mayank' },
                EMAILJS_PUBLIC
            )
            setStatus('success')
            setFormData({ name: '', email: '', message: '' })
            setTimeout(() => setStatus('idle'), 5000)
        } catch {
            setStatus('error')
            setTimeout(() => setStatus('idle'), 5000)
        }
    }

    const inputStyle = {
        width: '100%',
        padding: '0.875rem 1rem',
        background: 'rgba(0,0,0,0.3)',
        border: '1px solid var(--border)',
        borderRadius: '4px',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.85rem',
        outline: 'none',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        boxSizing: 'border-box' as const,
    }

    return (
        <section id="contact" style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', width: '600px', height: '400px', transform: 'translate(-50%,-50%)', background: 'radial-gradient(ellipse, rgba(0,102,255,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

            <div className="section-wrapper" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '4rem', textAlign: 'center' }}
                >
                    <p className="section-label" style={{ marginBottom: '0.75rem' }}>06. contact</p>
                    <h2 className="heading-lg" style={{ background: 'linear-gradient(135deg, var(--text-primary) 40%, var(--blue-electric))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Let's Build</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '520px', margin: '1.5rem auto 0', lineHeight: 1.7, fontSize: '1rem' }}>
                        Open to full-time roles, internships, and interesting collaborations. Drop me a message — I usually reply within 24 hours.
                    </p>
                </motion.div>

                {/* Two-column contact layout */}
                <div className="contact-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '3rem', alignItems: 'start' }}>
                    {/* Left — info cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <div className="contact-grid" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                            {[
                                { icon: Mail, label: 'Email', value: 'mayank01082005@gmail.com', href: 'mailto:mayank01082005@gmail.com', color: '#00d4ff' },
                                { icon: Phone, label: 'Phone', value: '+91 — Available on request', href: '#', color: '#a855f7' },
                                { icon: MapPin, label: 'Location', value: 'Kolkata, West Bengal, India', href: '#', color: '#10b981' },
                            ].map(({ icon: Icon, label, value, href, color }, i) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                                    whileHover={{ x: 4 }}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '1rem',
                                        padding: '1rem 1.25rem', background: 'var(--bg-card)',
                                        border: `1px solid ${color}18`, borderRadius: '4px',
                                        backdropFilter: 'blur(12px)', textDecoration: 'none', color: 'inherit',
                                        cursor: href === '#' ? 'default' : 'pointer',
                                        transition: 'border-color 0.3s',
                                    }}
                                >
                                    <div style={{ width: 36, height: 36, background: `${color}15`, border: `1px solid ${color}30`, borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <Icon size={16} color={color} />
                                    </div>
                                    <div>
                                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{label}</div>
                                        <div style={{ color: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: 500 }}>{value}</div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            <a href="https://github.com/mayank18500" target="_blank" rel="noreferrer" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                                <Github size={15} /> GitHub
                            </a>
                            <a href="mailto:mayank01082005@gmail.com" className="btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
                                <Mail size={15} /> Email
                            </a>
                        </div>
                    </motion.div>

                    {/* Right — Contact form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="glass-card"
                        style={{ padding: '2rem' }}
                    >
                        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--blue-electric)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>// send a message</p>

                        <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', display: 'block', marginBottom: '0.4rem' }}>NAME</label>
                                    <input
                                        name="name" value={formData.name} onChange={handleChange}
                                        placeholder="Your name"
                                        required
                                        style={inputStyle}
                                        onFocus={e => { e.target.style.borderColor = 'var(--blue-electric)'; e.target.style.boxShadow = '0 0 0 2px rgba(0,212,255,0.1)' }}
                                        onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', display: 'block', marginBottom: '0.4rem' }}>EMAIL</label>
                                    <input
                                        name="email" type="email" value={formData.email} onChange={handleChange}
                                        placeholder="your@email.com"
                                        required
                                        style={inputStyle}
                                        onFocus={e => { e.target.style.borderColor = 'var(--blue-electric)'; e.target.style.boxShadow = '0 0 0 2px rgba(0,212,255,0.1)' }}
                                        onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', display: 'block', marginBottom: '0.4rem' }}>MESSAGE</label>
                                <textarea
                                    name="message" value={formData.message} onChange={handleChange}
                                    placeholder="Tell me about your project or opportunity..."
                                    rows={5}
                                    required
                                    style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                                    onFocus={e => { e.target.style.borderColor = 'var(--blue-electric)'; e.target.style.boxShadow = '0 0 0 2px rgba(0,212,255,0.1)' }}
                                    onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={status === 'sending' || status === 'success'}
                                whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                                    padding: '0.9rem 2rem',
                                    background: status === 'success' ? 'rgba(16,185,129,0.15)' : status === 'error' ? 'rgba(239,68,68,0.15)' : 'transparent',
                                    border: `1px solid ${status === 'success' ? '#10b981' : status === 'error' ? '#ef4444' : 'var(--blue-electric)'}`,
                                    color: status === 'success' ? '#10b981' : status === 'error' ? '#ef4444' : 'var(--blue-electric)',
                                    fontFamily: 'var(--font-mono)', fontSize: '0.85rem', letterSpacing: '0.1em',
                                    cursor: status === 'idle' ? 'pointer' : 'default',
                                    borderRadius: '2px', transition: 'all 0.3s',
                                    clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                                }}
                            >
                                {status === 'idle' && (<><Send size={15} /> Send Message</>)}
                                {status === 'sending' && (
                                    <><motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} style={{ width: 15, height: 15, border: '2px solid var(--blue-electric)', borderTopColor: 'transparent', borderRadius: '50%' }} /> Sending...</>
                                )}
                                {status === 'success' && (<><CheckCircle size={15} /> Message Sent!</>)}
                                {status === 'error' && (<><AlertCircle size={15} /> Failed — Try Email</>)}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
