import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

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

    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '0.85rem 1.2rem',
        background: '#fcf4db',
        border: '2px solid #8b5e3c',
        borderRadius: '4px',
        color: '#2c1810',
        fontFamily: 'var(--font-display)',
        fontSize: '1rem',
        fontWeight: 600,
        outline: 'none',
        transition: 'all 0.3s',
        boxSizing: 'border-box' as const,
    }

    return (
        <section id="contact" style={{
            padding: '6rem 0',
            position: 'relative',
            background: '#faf5e9',
            backgroundImage: "url('/Design/d12.svg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div className="section-wrapper" ref={ref}>

                Scroll Wrapper
                <div className="scroll-container about-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.3fr',
                    gap: '4rem',
                    alignItems: 'center',
                }}>

                    {/* Left Column: photo7.png with photo5.png overlay */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        style={{ display: 'flex', justifyContent: 'center', width: '100%', overflow: 'visible' }}
                    >
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '380px',
                            aspectRatio: '380/460',
                            margin: '0 auto 2rem',
                        }}>
                            {/* Base Image: photo7.png */}
                            <div style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                border: '5px solid #d4b874',
                                boxShadow: '0 12px 30px rgba(44, 24, 16, 0.3)',
                            }}>
                                <img
                                    src="/My_Photos/photo7.png"
                                    alt="Mayank Kumar in market"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>

                            {/* Overlay Image: photo5.png */}
                            <motion.div
                                whileHover={{ scale: 1.08, rotate: -4 }}
                                style={{
                                    position: 'absolute',
                                    bottom: '-20px',
                                    right: '-20px',
                                    width: '80%',
                                    aspectRatio: '1/1',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    border: '4px solid #d4b874',
                                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                                    transform: 'rotate(6deg)',
                                    zIndex: 10,
                                }}
                            >
                                <img
                                    src="/My_Photos/photo5.png"
                                    alt="Mayank working"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        <h2 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '3rem',
                            fontStyle: 'italic',
                            fontWeight: 900,
                            color: 'var(--brown-dark)',
                            marginBottom: '2rem',
                            borderBottom: '2.5px solid rgba(139, 80, 40, 0.25)',
                            paddingBottom: '0.5rem',
                        }}>
                            Contact me
                        </h2>

                        <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <div>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    required
                                    style={inputStyle}
                                    onFocus={e => {
                                        e.target.style.borderColor = 'var(--amber)';
                                        e.target.style.background = '#fff';
                                        e.target.style.boxShadow = '0 0 12px rgba(200, 118, 42, 0.35)';
                                    }}
                                    onBlur={e => {
                                        e.target.style.borderColor = '#8b5e3c';
                                        e.target.style.background = '#fcf4db';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />
                            </div>

                            <div>
                                <input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    required
                                    style={inputStyle}
                                    onFocus={e => {
                                        e.target.style.borderColor = 'var(--amber)';
                                        e.target.style.background = '#fff';
                                        e.target.style.boxShadow = '0 0 12px rgba(200, 118, 42, 0.35)';
                                    }}
                                    onBlur={e => {
                                        e.target.style.borderColor = '#8b5e3c';
                                        e.target.style.background = '#fcf4db';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Type Your Message"
                                    rows={4}
                                    required
                                    style={{ ...inputStyle, resize: 'vertical', minHeight: '110px' }}
                                    onFocus={e => {
                                        e.target.style.borderColor = 'var(--amber)';
                                        e.target.style.background = '#fff';
                                        e.target.style.boxShadow = '0 0 12px rgba(200, 118, 42, 0.35)';
                                    }}
                                    onBlur={e => {
                                        e.target.style.borderColor = '#8b5e3c';
                                        e.target.style.background = '#fcf4db';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={status === 'sending' || status === 'success'}
                                whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                                whileTap={{ scale: 0.98 }}
                                className="parchment-scroll-btn"
                                style={{ width: '100%', marginTop: '0.5rem' }}
                            >
                                {status === 'idle' && (<><Send size={16} /> Send</>)}
                                {status === 'sending' && (
                                    <><motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} style={{ width: 16, height: 16, border: '2px solid #2c1810', borderTopColor: 'transparent', borderRadius: '50%' }} /> Sending...</>
                                )}
                                {status === 'success' && (<><CheckCircle size={16} /> Message Sent!</>)}
                                {status === 'error' && (<><AlertCircle size={16} /> Failed — Try Email</>)}
                            </motion.button>
                        </form>

                        <div style={{
                            marginTop: '2.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.1rem',
                            color: 'var(--brown-dark)',
                            fontWeight: 700,
                        }}>
                            <Mail size={18} color="var(--amber)" />
                            <span>Email ID: <a href="mailto:mayank01082005@gmail.com" style={{ color: 'inherit', textDecoration: 'underline' }}>mayank01082005@gmail.com</a></span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
