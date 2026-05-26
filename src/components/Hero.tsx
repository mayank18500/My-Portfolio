import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

/*
const ROLES = [
    'Full-Stack Developer',
    'MERN Stack Engineer',
    'API Architect',
    'React Specialist',
    'Backend Builder',
]

// Tech logos floating in orbit
const TECH_LOGOS = [
    { label: 'React', emoji: '⚛️', color: '#61dafb' },
    { label: 'Node.js', emoji: '🟩', color: '#68a063' },
    { label: 'MongoDB', emoji: '🍃', color: '#4db33d' },
    { label: 'TypeScript', emoji: '🔷', color: '#3178c6' },
    { label: 'PostgreSQL', emoji: '🐘', color: '#336791' },
    { label: 'Docker', emoji: '🐳', color: '#2496ed' },
]

function TypingText() {
    const [roleIdx, setRoleIdx] = useState(0)
    const [displayed, setDisplayed] = useState('')
    const [typing, setTyping] = useState(true)

    useEffect(() => {
        const target = ROLES[roleIdx]
        if (typing) {
            if (displayed.length < target.length) {
                const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 65)
                return () => clearTimeout(t)
            } else {
                const t = setTimeout(() => setTyping(false), 2200)
                return () => clearTimeout(t)
            }
        } else {
            if (displayed.length > 0) {
                const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38)
                return () => clearTimeout(t)
            } else {
                setRoleIdx(i => (i + 1) % ROLES.length)
                setTyping(true)
            }
        }
    }, [displayed, typing, roleIdx])

    return (
        <span style={{ color: 'var(--amber)', fontWeight: 600 }}>
            {displayed}
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.9, repeat: Infinity }}
                style={{
                    display: 'inline-block', width: 2, height: '1em',
                    background: 'var(--amber)', marginLeft: 3,
                    verticalAlign: 'text-bottom', borderRadius: 1,
                }}
            />
        </span>
    )
}

// Individual orbiting logo
function OrbitLogo({
    logo,
    index,
    total,
}: {
    logo: typeof TECH_LOGOS[0]
    index: number
    total: number
}) {
    const angle = (index / total) * 360
    const duration = 14 + index * 1.5
    const orbitRadius = 165

    return (
        <motion.div
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 48,
                height: 48,
                marginLeft: -24,
                marginTop: -24,
                transformOrigin: `${orbitRadius}px 0px`,
            }}
            animate={{ rotate: 360 }}
            initial={{ rotate: angle }}
            transition={{ duration, repeat: Infinity, ease: 'linear' }}
        >
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration, repeat: Infinity, ease: 'linear' }}
                whileHover={{ scale: 1.25 }}
                style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: 'rgba(250, 245, 233, 0.95)',
                    border: `2px solid ${logo.color}50`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    boxShadow: `0 4px 16px rgba(0,0,0,0.1), 0 0 12px ${logo.color}30`,
                    backdropFilter: 'blur(4px)',
                    cursor: 'default',
                }}
                title={logo.label}
            >
                {logo.emoji}
            </motion.div>
        </motion.div>
    )
}
*/

const firstNameContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1
        }
    }
} as const

const lastNameContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.45
        }
    }
} as const

const letterAnim = {
    hidden: { opacity: 0, y: 35, rotateX: -45 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            type: 'spring',
            damping: 12,
            stiffness: 120
        }
    }
} as const

const ROLES = [
    'SDE Intern @ IQVenus Technologies',
    'FullStack Developer',
    'MERN Stack Engineer',
    'React & Node Specialist',
]

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
                const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
                return () => clearTimeout(t)
            } else {
                setRoleIdx(i => (i + 1) % ROLES.length)
                setTyping(true)
            }
        }
    }, [displayed, typing, roleIdx])

    return (
        <span style={{ color: '#faf5e9', fontWeight: 600, textShadow: '0 0 12px rgba(250,245,233,0.2)' }}>
            {displayed}
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.9, repeat: Infinity }}
                style={{
                    display: 'inline-block',
                    width: '3px',
                    height: '1.05em',
                    background: '#d4b874',
                    marginLeft: 5,
                    verticalAlign: 'middle',
                    borderRadius: 1.5,
                    boxShadow: '0 0 8px #d4b874',
                }}
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

    const bgX = (mousePos.x / (window.innerWidth || 1) - 0.5) * 12
    const bgY = (mousePos.y / (window.innerHeight || 1) - 0.5) * 8

    const firstName = "Mayank".split("");
    const lastName = "Kumar".split("");

    return (
        <section
            id="home"
            className="hero-library-bg"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                padding: '6rem 2rem 0rem',
            }}
        >
            {/* Hanging scroll at the top-left */}
            <div className="hero-corner-scroll-top">
                <img src="/Design/d7.svg" alt="Hanging Scroll" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>

            {/* Bottom-left rolled scroll */}
            <div className="hero-corner-scroll-bottom-l">
                <img src="/Design/d7.svg" alt="Rolled Scroll" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>

            {/* Bottom-right rolled scroll */}
            <div className="hero-corner-scroll-bottom-r">
                <img src="/Design/d7.svg" alt="Rolled Scroll" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>

            {/* Ambient warm lighting */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
                <motion.div
                    animate={{ x: bgX * 1.5, y: bgY * 1.5 }}
                    style={{
                        position: 'absolute', top: '10%', left: '20%',
                        width: '450px', height: '450px', borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(212,160,23,0.15) 0%, transparent 75%)',
                        filter: 'blur(60px)',
                    }}
                />
                <motion.div
                    animate={{ x: bgX * -1, y: bgY * -1 }}
                    style={{
                        position: 'absolute', bottom: '10%', right: '15%',
                        width: '380px', height: '380px', borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(200,118,42,0.1) 0%, transparent 70%)',
                        filter: 'blur(50px)',
                    }}
                />
            </div>

            {/* Content Container */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                maxWidth: '1200px',
                width: '100%',
                display: 'grid',
                gridTemplateColumns: '1fr 1.2fr',
                gap: '4rem',
                alignItems: 'center',
            }} className="featured-project-grid">

                {/* Left Column: Mayank's photo & floating tech badges embedded on the celestial summons */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="hero-portal-col"
                >
                    {/* Unique celestial/magical circular summoning frame */}
                    <div className="celestial-portal-container">
                        {/* Outer rotating astronomical ring 1 */}
                        <div style={{
                            position: 'absolute',
                            width: '98%',
                            height: '98%',
                            borderRadius: '50%',
                            border: '2px solid rgba(212, 160, 23, 0.45)',
                            borderStyle: 'double',
                            animation: 'orbit-spin 45s linear infinite',
                            pointerEvents: 'none',
                        }} />

                        {/* Rotating dashed ring 2 */}
                        <div style={{
                            position: 'absolute',
                            width: '90%',
                            height: '90%',
                            borderRadius: '50%',
                            border: '1.5px dashed rgba(200, 118, 42, 0.6)',
                            animation: 'orbit-spin 25s linear infinite reverse',
                            pointerEvents: 'none',
                        }} />

                        {/* Solid inner parchment frame background (Larger circular core) */}
                        <div style={{
                            position: 'absolute',
                            width: '84%',
                            height: '84%',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, #fcf4db 0%, #ecd59f 60%, #c8963e 100%)',
                            border: '4px solid #8b5e3c',
                            boxShadow: '0 12px 36px rgba(44, 24, 16, 0.35), inset 0 0 24px rgba(44, 24, 16, 0.25)',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            {/* Inner astronomical stars background inside the circle */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                opacity: 0.15,
                                backgroundImage: `
                                    radial-gradient(circle, rgba(139,80,40,0.4) 1px, transparent 1px),
                                    radial-gradient(circle, rgba(139,80,40,0.4) 1.5px, transparent 1.5px)
                                `,
                                backgroundSize: '24px 24px',
                                backgroundPosition: '0 0, 12px 12px',
                            }} />

                            {/* Greenish-yellow magical core aura glow behind the portrait */}
                            <div style={{
                                position: 'absolute',
                                width: '130%',
                                height: '130%',
                                borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(173, 223, 35, 0.55) 0%, rgba(212, 190, 23, 0.3) 50%, transparent 75%)',
                                filter: 'blur(35px)',
                                zIndex: 1,
                                pointerEvents: 'none',
                            }} />

                            {/* Profile image centered inside the circular solid frame */}
                            <img
                                src="/My_Photos/photo8.png"
                                alt="Mayank Kumar"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    position: 'relative',
                                    zIndex: 2,
                                    transform: 'scale(1.2) translateY(-7%)', // slightly zoomed and shifted up for dramatic focus
                                }}
                            />
                        </div>

                        {/* Outer locked magic circle runes: Blue Express, Cyan React, Green MongoDB, Yellow Node */}
                        {/* Emblem 1: Blue Express (top-left) */}
                        <div className="portal-rune portal-rune-1 float-rune-1">
                            <img
                                src="/Design/d4.svg"
                                alt="Blue Express"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.4))'
                                }}
                            />
                        </div>

                        {/* Emblem 2: Green MongoDB (bottom-left) */}
                        <div className="portal-rune portal-rune-2 float-rune-2">
                            <img
                                src="/Design/d5.svg"
                                alt="Green MongoDB"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.4))'
                                }}
                            />
                        </div>

                        {/* Emblem 3: Blue React Alternate (top-right) */}
                        <div className="portal-rune portal-rune-3 float-rune-3">
                            <img
                                src="/Design/d6.svg"
                                alt="Tech Emblem"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.4))'
                                }}
                            />
                        </div>

                        {/* Emblem 4: Node (bottom-right) */}
                        <div className="portal-rune portal-rune-4 float-rune-4">
                            <img
                                src="/Design/d9.svg"
                                alt="Tech Emblem"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.4))'
                                }}
                            />
                        </div>

                        {/* Overlay elegant golden corner glyph accents */}
                        <div style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            pointerEvents: 'none',
                            zIndex: 6,
                        }}>
                            {/* Top Left glyph */}
                            <span style={{ position: 'absolute', top: '25px', left: '25px', color: '#c8762a', fontSize: '0.8rem', opacity: 0.85 }}>✦</span>
                            {/* Top Right glyph */}
                            <span style={{ position: 'absolute', top: '25px', right: '25px', color: '#c8762a', fontSize: '0.8rem', opacity: 0.85 }}>✦</span>
                            {/* Bottom Left glyph */}
                            <span style={{ position: 'absolute', bottom: '25px', left: '25px', color: '#c8762a', fontSize: '0.8rem', opacity: 0.85 }}>✦</span>
                            {/* Bottom Right glyph */}
                            <span style={{ position: 'absolute', bottom: '25px', right: '25px', color: '#c8762a', fontSize: '0.8rem', opacity: 0.85 }}>✦</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Title, Name, Cursive fonts, Scroll Buttons */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                    className="hero-text-col"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, letterSpacing: '0.2em' }}
                        animate={{ opacity: 1, scale: 1, letterSpacing: '0.4em' }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            marginBottom: '0.8rem',
                        }}
                    >
                        <span style={{ color: 'var(--amber)', fontSize: '0.8rem', opacity: 0.85 }}>✦</span>
                        <span style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.9rem',
                            color: '#d4b874',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                        }}>
                            PORTFOLIO
                        </span>
                        <span style={{ color: 'var(--amber)', fontSize: '0.8rem', opacity: 0.85 }}>✦</span>
                    </motion.div>

                    {/* Staggered animated name letters with premium metallic gradients and hover pop/glow */}
                    <div className="hero-name-container" style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', marginBottom: '2rem' }}>
                        {/* First Name: Mayank */}
                        <motion.div
                            variants={firstNameContainer}
                            initial="hidden"
                            animate="visible"
                            style={{
                                display: 'flex',
                                gap: '0.04em',
                                margin: 0,
                                lineHeight: 1.15,
                                paddingBottom: '0.15em',
                            }}
                        >
                            {firstName.map((letter, index) => (
                                <motion.span
                                    key={index}
                                    variants={letterAnim}
                                    className="name-letter"
                                    whileHover={{
                                        scale: 1.2,
                                        y: -10,
                                        filter: 'drop-shadow(0 0 15px rgba(212,184,116,0.9))',
                                        transition: { duration: 0.1, type: 'spring', stiffness: 300 }
                                    }}
                                    style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
                                        fontWeight: 900,
                                        display: 'inline-block',
                                        cursor: 'default',
                                        background: 'linear-gradient(135deg, #faf5e9 0%, #f9f7f3ff 50%, #d4b874 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        textShadow: '0 0 30px rgba(250, 245, 233, 0.05)',
                                        userSelect: 'none',
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </motion.div>

                        {/* Last Name: Kumar */}
                        <motion.div
                            variants={lastNameContainer}
                            initial="hidden"
                            animate="visible"
                            style={{
                                display: 'flex',
                                gap: '0.04em',
                                margin: 0,
                                lineHeight: 0.95,
                                paddingBottom: '0.15em',
                            }}
                        >
                            {lastName.map((letter, index) => (
                                <motion.span
                                    key={index}
                                    variants={letterAnim}
                                    className="name-letter"
                                    whileHover={{
                                        scale: 1.2,
                                        y: -10,
                                        filter: 'drop-shadow(0 0 15px rgba(212,184,116,0.9))',
                                        transition: { duration: 0.1, type: 'spring', stiffness: 300 }
                                    }}
                                    style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
                                        fontWeight: 900,
                                        display: 'inline-block',
                                        cursor: 'default',
                                        background: 'linear-gradient(135deg, #d4b874 0%, #f2ede8ff 50%, #b8860b 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        textShadow: '0 0 30px rgba(212, 184, 116, 0.05)',
                                        userSelect: 'none',
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Enhanced Tagline */}
                    {/* Enhanced Dynamic Tagline (Running Text) */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.95 }}
                        className="hero-tagline"
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '1.1rem',
                            color: '#b8a07c',
                            letterSpacing: '0.05em',
                            marginBottom: '2.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            flexWrap: 'wrap',
                            minHeight: '2.2rem',
                        }}
                    >
                        <span style={{ color: '#c8762a', opacity: 0.85 }}>✦</span>
                        <TypingText />
                    </motion.div>

                    {/* Parchment scroll style CTA buttons using d11.svg and d10.svg */}
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }} className="hero-ctas">
                        <a
                            href="/Resume.pdf"
                            download="Mayank_Kumar_Resume.pdf"
                            className="hero-parchment-btn"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '220px',
                                height: '70px',
                                background: "url('/Design/d11.svg') no-repeat 52% 32%",
                                backgroundSize: '500% 500%',
                                fontFamily: 'var(--font-display)',
                                fontSize: '1.1rem',
                                fontWeight: 800,
                                color: '#2c1810',
                                textDecoration: 'none',
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                                cursor: 'pointer',
                            }}
                        >
                            RESUME
                        </a>
                        <a
                            href="mailto:mayank01082005@gmail.com"
                            className="hero-parchment-btn"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '220px',
                                height: '70px',
                                background: "url('/Design/d11.svg') no-repeat 52% 32%",
                                backgroundSize: '500% 500%',
                                fontFamily: 'var(--font-display)',
                                fontSize: '1.1rem',
                                fontWeight: 800,
                                color: '#2c1810',
                                textDecoration: 'none',
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                                cursor: 'pointer',
                            }}
                        >
                            EMAIL ME
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Bottom border roll ornament style */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '24px',
                zIndex: 3,
            }} />
        </section>
    )
}
