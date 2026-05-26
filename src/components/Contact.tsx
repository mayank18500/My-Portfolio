import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Mail, Send, CheckCircle, AlertCircle, Sparkles, Clock, Globe } from 'lucide-react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE = import.meta.env.VITE_EMAILJS_SERVICE || 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE || 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC = import.meta.env.VITE_EMAILJS_PUBLIC || 'YOUR_PUBLIC_KEY'

// Vintage filigree corner frames helper
const CornerOrnaments = () => (
    <>
        <div style={{ position: 'absolute', top: '8px', left: '8px', width: '22px', height: '22px', borderTop: '2px solid var(--amber)', borderLeft: '2px solid var(--amber)', pointerEvents: 'none', opacity: 0.6 }} />
        <div style={{ position: 'absolute', top: '14px', left: '14px', width: '4px', height: '4px', background: 'var(--gold)', borderRadius: '50%', pointerEvents: 'none', opacity: 0.6 }} />
        <div style={{ position: 'absolute', top: '8px', right: '8px', width: '22px', height: '22px', borderTop: '2px solid var(--amber)', borderRight: '2px solid var(--amber)', pointerEvents: 'none', opacity: 0.6 }} />
        <div style={{ position: 'absolute', top: '14px', right: '14px', width: '4px', height: '4px', background: 'var(--gold)', borderRadius: '50%', pointerEvents: 'none', opacity: 0.6 }} />
        <div style={{ position: 'absolute', bottom: '8px', left: '8px', width: '22px', height: '22px', borderBottom: '2px solid var(--amber)', borderLeft: '2px solid var(--amber)', pointerEvents: 'none', opacity: 0.6 }} />
        <div style={{ position: 'absolute', bottom: '14px', left: '14px', width: '4px', height: '4px', background: 'var(--gold)', borderRadius: '50%', pointerEvents: 'none', opacity: 0.6 }} />
        <div style={{ position: 'absolute', bottom: '8px', right: '8px', width: '22px', height: '22px', borderBottom: '2px solid var(--amber)', borderRight: '2px solid var(--amber)', pointerEvents: 'none', opacity: 0.6 }} />
        <div style={{ position: 'absolute', bottom: '14px', right: '14px', width: '4px', height: '4px', background: 'var(--gold)', borderRadius: '50%', pointerEvents: 'none', opacity: 0.6 }} />
    </>
)

// Concentric SVG Communion Sigil rotating in absolute-positioned background
const CommunionSigil = () => (
    <div className="astral-rings-container" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'min(360px, 90vw)',
        height: 'min(360px, 90vw)',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.32
    }}>
        {/* Outer Cardinal Astronomical Ring */}
        <svg width="100%" height="100%" viewBox="0 0 100 100" style={{
            position: 'absolute',
            inset: 0,
            animation: 'spin-slow 40s linear infinite'
        }}>
            <circle cx="50" cy="50" r="46" fill="none" stroke="var(--amber)" strokeWidth="0.8" strokeDasharray="4 4" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="var(--brown-light)" strokeWidth="0.6" />
            <path d="M 50 2 L 50 10 M 50 90 L 50 96 M 2 50 L 10 50 M 90 50 L 96 50" stroke="var(--amber)" strokeWidth="0.6" />
        </svg>

        {/* Inner Alchemical Compass Star Ring */}
        <svg width="100%" height="100%" viewBox="0 0 100 100" style={{
            position: 'absolute',
            inset: 0,
            scale: '0.78',
            animation: 'spin-slow 25s linear reverse infinite'
        }}>
            <circle cx="50" cy="50" r="44" fill="none" stroke="var(--gold)" strokeWidth="0.6" strokeDasharray="10 5" />
            <polygon points="50,12 62,38 88,50 62,62 50,88 38,62 12,50 38,38" fill="none" stroke="rgba(200, 118, 42, 0.25)" strokeWidth="0.5" />
        </svg>
    </div>
)

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

    return (
        <section 
            id="contact" 
            className="about-section-container"
            style={{
                padding: '6.5rem 0',
                position: 'relative',
                borderBottom: '1px solid rgba(139, 80, 40, 0.15)',
            }}
        >
            {/* Ambient gold glow */}
            <div style={{
                position: 'absolute', bottom: '10%', right: '-5%',
                width: '450px', height: '450px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(212,160,23,0.04) 0%, transparent 70%)',
                filter: 'blur(60px)', pointerEvents: 'none',
                zIndex: 0
            }} />

            <div className="section-wrapper" ref={ref} style={{ position: 'relative', zIndex: 2 }}>

                {/* Custom Section Header */}
                <div style={{ marginBottom: '4rem', textAlign: 'center', position: 'relative', zIndex: 2 }}>
                    <p className="section-label" style={{ marginBottom: '0.5rem' }}>06. communion</p>
                    <div className="section-divider" style={{ margin: '0 auto 1.5rem auto', maxWidth: '280px' }} />
                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2rem, 5.5vw, 4.4rem)',
                        fontWeight: 900,
                        color: 'var(--brown-dark)',
                        fontStyle: 'italic',
                        letterSpacing: '0.01em'
                    }}>
                        Sigil of Direct Communion
                    </h2>
                    <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1.05rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '650px',
                        margin: '1rem auto 0 auto',
                        lineHeight: 1.65,
                        fontWeight: 500
                    }}>
                        Dispatch an encrypted alchemical signal directly to my ledger. Let us build performant digital logic systems together.
                    </p>
                </div>

                {/* Split grid layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.3fr',
                    gap: '3.5rem',
                    alignItems: 'stretch',
                }} className="about-grid">

                    {/* Left Column: Rotating Sigil & Contact Ledger Card */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem',
                        alignItems: 'center',
                        position: 'relative'
                    }}>
                        <div 
                            className="about-portrait-card"
                            style={{
                                width: '100%',
                                background: 'rgba(255, 255, 255, 0.88)',
                                backdropFilter: 'blur(12px)',
                                border: '1.5px solid rgba(139, 80, 40, 0.22)',
                                borderRadius: '16px',
                                boxShadow: '0 16px 40px rgba(92,51,23,0.08)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: '3.5rem 2rem',
                                position: 'relative',
                                overflow: 'hidden',
                                height: '100%',
                                justifyContent: 'center'
                            }}
                        >
                            <CornerOrnaments />
                            <CommunionSigil />

                            {/* Centered Glowing Mail Icon summon sphere */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                style={{
                                    width: '120px',
                                    height: '120px',
                                    borderRadius: '50%',
                                    background: 'radial-gradient(circle, #fcf4db 0%, #ecd59f 60%, #c8963e 100%)',
                                    border: '3px solid var(--amber)',
                                    boxShadow: 'var(--shadow-warm-lg), 0 0 20px rgba(200, 118, 42, 0.15)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                    zIndex: 2,
                                    marginBottom: '2.5rem',
                                    cursor: 'pointer'
                                }}
                            >
                                <Mail size={42} color="var(--terracotta)" style={{ filter: 'drop-shadow(0 2px 4px rgba(92,51,23,0.18))' }} />
                            </motion.div>

                            {/* Alchemical Contact Registry details */}
                            <div style={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.1rem',
                                zIndex: 2,
                                borderTop: '2.5px solid rgba(139, 80, 40, 0.15)',
                                paddingTop: '1.75rem'
                            }}>
                                <h4 style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.68rem',
                                    color: 'var(--amber)',
                                    letterSpacing: '0.15em',
                                    textTransform: 'uppercase',
                                    fontWeight: 800,
                                    marginBottom: '0.3rem',
                                    textAlign: 'center'
                                }}>
                                    Summons Channels
                                </h4>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                                    {[
                                        { icon: <Mail size={14} />, label: 'Email', val: <a href="mailto:mayank01082005@gmail.com" style={{ color: 'inherit', textDecoration: 'underline' }}>mayank01082005@gmail.com</a> },
                                        { icon: <Clock size={14} />, label: 'Speed', val: '< 24 Hours Response' },
                                        { icon: <Globe size={14} />, label: 'Territory', val: 'Remote / Global pacts' },
                                        { icon: <Sparkles size={14} />, label: 'Aura', val: 'Actively Summoning Code' }
                                    ].map((stat, idx) => (
                                        <div key={idx} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            fontSize: '0.86rem',
                                            fontFamily: 'var(--font-body)',
                                            fontWeight: 500,
                                            color: 'var(--text-secondary)'
                                        }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                                                <span style={{ color: 'var(--amber)' }}>{stat.icon}</span>
                                                <span style={{
                                                    fontSize: '0.68rem',
                                                    fontFamily: 'var(--font-mono)',
                                                    color: 'var(--text-muted)',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.04em'
                                                }}>{stat.label}</span>
                                            </div>
                                            <span style={{ fontWeight: 700, color: 'var(--brown-dark)' }}>{stat.val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Message Grimoire Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 35 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
                        style={{ display: 'flex' }}
                    >
                        <div 
                            className="about-details-card"
                            style={{
                                width: '100%',
                                background: 'rgba(255, 255, 255, 0.88)',
                                backdropFilter: 'blur(12px)',
                                border: '1.5px solid rgba(139, 80, 40, 0.22)',
                                borderRadius: '16px',
                                boxShadow: '0 16px 40px rgba(92,51,23,0.08)',
                                position: 'relative',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}
                        >
                            <CornerOrnaments />

                            <h3 style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: '1.65rem',
                                fontWeight: 800,
                                fontStyle: 'italic',
                                color: 'var(--brown-dark)',
                                borderBottom: '1.5px solid rgba(139, 80, 40, 0.18)',
                                paddingBottom: '0.6rem',
                                marginBottom: '1.5rem'
                            }}>
                                Incantation of communion
                            </h3>

                            <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', position: 'relative', zIndex: 2 }}>
                                
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter Your Name"
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '0.8rem 1.1rem',
                                            background: 'rgba(250, 245, 233, 0.75)',
                                            border: '1.5px solid rgba(139, 80, 40, 0.22)',
                                            borderRadius: '8px',
                                            color: 'var(--brown-dark)',
                                            fontFamily: 'var(--font-body)',
                                            fontSize: '0.92rem',
                                            fontWeight: 500,
                                            outline: 'none',
                                            transition: 'all 0.3s'
                                        }}
                                        onFocus={e => {
                                            e.target.style.borderColor = 'var(--amber)';
                                            e.target.style.background = '#fff';
                                            e.target.style.boxShadow = '0 0 10px rgba(200, 118, 42, 0.12)';
                                        }}
                                        onBlur={e => {
                                            e.target.style.borderColor = 'rgba(139, 80, 40, 0.22)';
                                            e.target.style.background = 'rgba(250, 245, 233, 0.75)';
                                            e.target.style.boxShadow = 'none';
                                        }}
                                    />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                    <input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter Your Email Address"
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '0.8rem 1.1rem',
                                            background: 'rgba(250, 245, 233, 0.75)',
                                            border: '1.5px solid rgba(139, 80, 40, 0.22)',
                                            borderRadius: '8px',
                                            color: 'var(--brown-dark)',
                                            fontFamily: 'var(--font-body)',
                                            fontSize: '0.92rem',
                                            fontWeight: 500,
                                            outline: 'none',
                                            transition: 'all 0.3s'
                                        }}
                                        onFocus={e => {
                                            e.target.style.borderColor = 'var(--amber)';
                                            e.target.style.background = '#fff';
                                            e.target.style.boxShadow = '0 0 10px rgba(200, 118, 42, 0.12)';
                                        }}
                                        onBlur={e => {
                                            e.target.style.borderColor = 'rgba(139, 80, 40, 0.22)';
                                            e.target.style.background = 'rgba(250, 245, 233, 0.75)';
                                            e.target.style.boxShadow = 'none';
                                        }}
                                    />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Type Your Runic Message Description..."
                                        rows={4}
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '0.85rem 1.1rem',
                                            background: 'rgba(250, 245, 233, 0.75)',
                                            border: '1.5px solid rgba(139, 80, 40, 0.22)',
                                            borderRadius: '8px',
                                            color: 'var(--brown-dark)',
                                            fontFamily: 'var(--font-body)',
                                            fontSize: '0.92rem',
                                            fontWeight: 500,
                                            outline: 'none',
                                            transition: 'all 0.3s',
                                            resize: 'vertical',
                                            minHeight: '110px'
                                        }}
                                        onFocus={e => {
                                            e.target.style.borderColor = 'var(--amber)';
                                            e.target.style.background = '#fff';
                                            e.target.style.boxShadow = '0 0 10px rgba(200, 118, 42, 0.12)';
                                        }}
                                        onBlur={e => {
                                            e.target.style.borderColor = 'rgba(139, 80, 40, 0.22)';
                                            e.target.style.background = 'rgba(250, 245, 233, 0.75)';
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
                                    style={{ 
                                        width: '100%', 
                                        marginTop: '0.5rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.6rem',
                                        cursor: status === 'idle' ? 'pointer' : 'default'
                                    }}
                                >
                                    {status === 'idle' && (<><Send size={15} /> Dispatch incantation</>)}
                                    {status === 'sending' && (
                                        <><motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} style={{ width: 15, height: 15, border: '2px solid #2c1810', borderTopColor: 'transparent', borderRadius: '50%' }} /> Dispatching...</>
                                    )}
                                    {status === 'success' && (<><CheckCircle size={15} /> Message dispatched successfully!</>)}
                                    {status === 'error' && (<><AlertCircle size={15} /> Connection failed — Summons by email</>)}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
