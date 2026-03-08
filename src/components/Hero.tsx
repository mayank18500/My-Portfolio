import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react'

const NAME = 'MAYANK KUMAR'
const CHARS = NAME.split('')

const ROLES = [
    'Full-Stack Developer',
    'MERN Stack Engineer',
    'API Architect',
    'Backend Builder',
    'React Specialist',
]

function GlitchLetter({ char, delay }: { char: string; delay: number }) {
    const [glitching, setGlitching] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                if (Math.random() > 0.92) {
                    setGlitching(true)
                    setTimeout(() => setGlitching(false), 80 + Math.random() * 100)
                }
            }, 2000)
            return () => clearInterval(interval)
        }, delay * 1000 + 2000)
        return () => clearTimeout(timeout)
    }, [delay])

    return (
        <motion.span
            initial={{ opacity: 0, y: 60, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
                display: 'inline-block',
                position: 'relative',
                color: glitching ? 'var(--blue-electric)' : 'var(--text-primary)',
                textShadow: glitching
                    ? '2px 0 var(--violet), -2px 0 var(--blue-electric), 0 0 40px var(--blue-electric)'
                    : '0 0 60px rgba(0,212,255,0.15)',
                transition: glitching ? 'none' : 'color 0.1s',
                filter: glitching ? 'brightness(1.6)' : 'none',
            }}
        >
            {char === ' ' ? '\u00A0' : char}
            {glitching && (
                <>
                    <span style={{ position: 'absolute', top: 0, left: '2px', color: 'var(--violet)', opacity: 0.7, animation: 'glitch-1 0.2s steps(1) infinite' }}>{char}</span>
                    <span style={{ position: 'absolute', top: 0, left: '-2px', color: 'var(--blue-electric)', opacity: 0.7, animation: 'glitch-2 0.2s steps(1) infinite' }}>{char}</span>
                </>
            )}
        </motion.span>
    )
}

function TypingText() {
    const [roleIdx, setRoleIdx] = useState(0)
    const [displayed, setDisplayed] = useState('')
    const [typing, setTyping] = useState(true)

    useEffect(() => {
        const target = ROLES[roleIdx]
        if (typing) {
            if (displayed.length < target.length) {
                const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
                return () => clearTimeout(t)
            } else {
                const t = setTimeout(() => setTyping(false), 2000)
                return () => clearTimeout(t)
            }
        } else {
            if (displayed.length > 0) {
                const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
                return () => clearTimeout(t)
            } else {
                setRoleIdx(i => (i + 1) % ROLES.length)
                setTyping(true)
            }
        }
    }, [displayed, typing, roleIdx])

    return (
        <span>
            <span style={{ color: 'var(--violet-glow)' }}>{displayed}</span>
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{ display: 'inline-block', width: 2, height: '1.1em', background: 'var(--blue-electric)', marginLeft: 2, verticalAlign: 'text-bottom' }}
            />
        </span>
    )
}

export default function Hero() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouse = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
        window.addEventListener('mousemove', handleMouse)
        return () => window.removeEventListener('mousemove', handleMouse)
    }, [])

    const bgX = (mousePos.x / window.innerWidth - 0.5) * 30
    const bgY = (mousePos.y / window.innerHeight - 0.5) * 20

    return (
        <section
            id="home"
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '5rem',
            }}
        >
            {/* Animated background orbs */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
                <motion.div
                    animate={{ x: bgX * 1.5, y: bgY * 1.5, scale: [1, 1.1, 1] }}
                    transition={{ scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
                    style={{ position: 'absolute', top: '10%', left: '15%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,102,255,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }}
                />
                <motion.div
                    animate={{ x: bgX * -1.2, y: bgY * -1.2 }}
                    style={{ position: 'absolute', bottom: '15%', right: '10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }}
                />
                <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />
            </div>

            {/* Scanline */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
                <motion.div
                    animate={{ y: ['0%', '100vh'] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
                    style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)' }}
                />
            </div>

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '1100px', padding: '0 2rem' }}>
                {/* Status badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        marginBottom: '2rem', padding: '0.4rem 1.2rem',
                        border: '1px solid rgba(0,212,255,0.25)', borderRadius: '100px',
                        background: 'rgba(0,212,255,0.05)', fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem', color: 'var(--blue-electric)', letterSpacing: '0.15em',
                    }}
                >
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#00ff88', animation: 'pulse-glow 2s ease-in-out infinite', boxShadow: '0 0 8px #00ff88' }} />
                    AVAILABLE FOR OPPORTUNITIES
                </motion.div>

                {/* Name glitch */}
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3.5rem, 12vw, 9.5rem)', lineHeight: 0.92, letterSpacing: '0.03em', marginBottom: '0.5rem', perspective: '600px' }}>
                    {CHARS.map((char, i) => <GlitchLetter key={i} char={char} delay={0.05 * i + 0.4} />)}
                </div>

                {/* Role tagline with typewriter */}
                <motion.div
                    initial={{ opacity: 0, filter: 'blur(20px)', y: 30 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    transition={{ delay: 1.4, duration: 0.9, ease: 'easeOut' }}
                    style={{
                        fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.9rem, 2.5vw, 1.3rem)',
                        color: 'var(--text-secondary)', letterSpacing: '0.2em',
                        textTransform: 'uppercase', marginBottom: '0.75rem',
                        minHeight: '2rem',
                    }}
                >
                    <span style={{ color: 'var(--blue-electric)' }}>SDE Intern</span>
                    {' · '}
                    <TypingText />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.6 }}
                    style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', letterSpacing: '0.1em', marginBottom: '3rem' }}
                >
                    {'// '}2nd-year IT student @ IQApex Labs · Kolkata, India
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="hero-ctas"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.0, duration: 0.6 }}
                    style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    <a href="https://github.com/mayank18500" target="_blank" rel="noreferrer" className="btn-primary">
                        <Github size={16} /> GitHub
                    </a>
                    <a href="https://linkedin.com/in/mayank-kumar" target="_blank" rel="noreferrer" className="btn-secondary">
                        <Linkedin size={16} /> LinkedIn
                    </a>
                    <a href="mailto:mayank01082005@gmail.com" className="btn-secondary">
                        <Mail size={16} /> Email Me
                    </a>
                    {/* Resume download */}
                    <a href="/resume.pdf" download="Mayank_Kumar_Resume.pdf" className="btn-secondary"
                        style={{ borderColor: 'rgba(16,185,129,0.4)', color: '#10b981', background: 'rgba(16,185,129,0.08)' }}
                    >
                        <Download size={16} /> Resume
                    </a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.6 }}
                    style={{ position: 'absolute', bottom: '-5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
                >
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.2em' }}>SCROLL</span>
                    <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
                        <ChevronDown size={18} color="var(--blue-electric)" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
