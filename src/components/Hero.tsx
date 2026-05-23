import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ROLES = [
    'Full-Stack Developer',
    'MERN Stack Engineer',
    'API Architect',
    'React Specialist',
    'Backend Builder',
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
        <span style={{ color: '#d4b874', fontWeight: 600 }}>
            {displayed}
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.9, repeat: Infinity }}
                style={{
                    display: 'inline-block', width: 2, height: '1em',
                    background: '#d4b874', marginLeft: 5,
                    verticalAlign: 'text-bottom', borderRadius: 1,
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
            <div style={{
                position: 'absolute',
                top: -300,
                left: '0%',
                width: '130px',
                height: '290px',
                zIndex: 4,
                pointerEvents: 'none',
            }}>
                <img src="/Design/d7.svg" alt="Hanging Scroll" style={{ width: '400%', height: '400%', objectFit: 'contain' }} />
            </div>

            {/* Bottom-left rolled scroll */}
            <div style={{
                position: 'absolute',
                bottom: '-25px',
                left: '-15px',
                width: '190px',
                height: '190px',
                zIndex: 4,
                pointerEvents: 'none',
                transform: 'rotate(12deg)',
            }}>
                <img src="/Design/d7.svg" alt="Rolled Scroll" style={{ width: '400%', height: '400%', objectFit: 'contain' }} />
            </div>

            {/* Bottom-right rolled scroll */}
            <div style={{
                position: 'absolute',
                bottom: '-25px',
                right: '-15px',
                width: '190px',
                height: '190px',
                zIndex: 4,
                pointerEvents: 'none',
                transform: 'rotate(-12deg) scaleX(-1)',
            }}>
                <img src="/Design/d7.svg" alt="Rolled Scroll" style={{ width: '400%', height: '400%', objectFit: 'contain' }} />
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

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, y: bgY * 0.5, x: bgX * 0.5 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        width: '100%',
                        minHeight: '440px',
                    }}
                >
                    {/* User profile image */}
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '380px',
                        height: '420px',
                        zIndex: 5,
                    }}>
                        <img
                            src="/My_Photos/photo8.png"
                            alt="Mayank Kumar"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                            }}
                        />
                    </div>

                    {/* Emblem 1: Blue Express (d4.svg) */}
                    <motion.div
                        animate={{
                            y: [0, -12, 0],
                            rotate: [0, 3, 0]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            position: 'absolute',
                            top: '25%',
                            left: '-10%',
                            width: '100px',
                            height: '100px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1,
                            pointerEvents: 'none',
                        }}
                    >
                        <img
                            src="/Design/d4.svg"
                            alt="Blue Express"
                            style={{
                                width: '360%',
                                height: '360%',
                                objectFit: 'contain',
                                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))'
                            }}
                        />
                    </motion.div>

                    {/* Emblem 2: Green MongoDB (d5.svg) */}
                    <motion.div
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, -4, 0]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                        style={{
                            position: 'absolute',
                            top: '-10%',
                            left: '33%',
                            width: '100px',
                            height: '100px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1,
                            pointerEvents: 'none',
                        }}
                    >
                        <img
                            src="/Design/d5.svg"
                            alt="Green MongoDB"
                            style={{
                                width: '360%',
                                height: '360%',
                                objectFit: 'contain',
                                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))'
                            }}
                        />
                    </motion.div>

                    {/* Emblem 3: Blue React Alternate (d6.svg) */}
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                            rotate: [0, 5, 0]
                        }}
                        transition={{
                            duration: 5.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                        style={{
                            position: 'absolute',
                            top: '-5%',
                            right: '33%',
                            width: '100px',
                            height: '100px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1,
                            pointerEvents: 'none',
                        }}
                    >
                        <img
                            src="/Design/d6.svg"
                            alt="Tech Emblem"
                            style={{
                                width: '360%',
                                height: '360%',
                                objectFit: 'contain',
                                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))'
                            }}
                        />
                    </motion.div>

                    {/* Emblem 4: Node (d9.svg) */}
                    <motion.div
                        animate={{
                            y: [0, -14, 0],
                            rotate: [0, -3, 0]
                        }}
                        transition={{
                            duration: 4.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.2
                        }}
                        style={{
                            position: 'absolute',
                            top: '35%',
                            right: '-10%',
                            width: '100px',
                            height: '100px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1,
                            pointerEvents: 'none',
                        }}
                    >
                        <img
                            src="/Design/d9.svg"
                            alt="Tech Emblem"
                            style={{
                                width: '360%',
                                height: '360%',
                                objectFit: 'contain',
                                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))'
                            }}
                        />
                    </motion.div>
                </motion.div>

                {/* Right Column: Title, Name, Cursive fonts, Scroll Buttons */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        paddingBottom: '4rem',
                    }}
                >
                    <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.9rem',
                        letterSpacing: '0.4em',
                        color: '#d4b874',
                        marginBottom: '0.5rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                    }}>
                        PORTFOLIO
                    </span>

                    <h1 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
                        fontWeight: 900,
                        color: '#faf5e9',
                        lineHeight: 0.9,
                        margin: 0,
                    }}>
                        Mayank
                    </h1>

                    <h1 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
                        fontWeight: 900,
                        color: '#d4b874',
                        lineHeight: 0.9,
                        marginBottom: '1.5rem',
                    }}>
                        Kumar
                    </h1>

                    {/* Integrated Dynamic Typing Tagline Block */}
                    <div style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1.1rem',
                        color: '#b8a07c',
                        letterSpacing: '0.05em',
                        marginBottom: '2.5rem',
                        minHeight: '2rem',
                    }}>
                        SDE Intern @ IQApex Labs · <TypingText />
                    </div>

                    {/* Parchment scroll style CTA buttons */}
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
                                background: "url('/Design/d11.svg') no-repeat center",
                                backgroundSize: '400% 400%',
                                fontFamily: 'var(--font-display)',
                                fontSize: '1.1rem',
                                fontWeight: 800,
                                color: '#2c1810',
                                textDecoration: 'none',
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.35))',
                                cursor: 'pointer',
                                borderRadius: '4px',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.filter = 'drop-shadow(0 0 18px rgba(212,184,116,0.75))';
                                e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.filter = 'drop-shadow(0 4px 8px rgba(0,0,0,0.35))';
                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
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
                                background: "url('/Design/d11.svg') no-repeat center",
                                backgroundSize: '400% 400%',
                                fontFamily: 'var(--font-display)',
                                fontSize: '1.1rem',
                                fontWeight: 800,
                                color: '#2c1810',
                                textDecoration: 'none',
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.35))',
                                cursor: 'pointer',
                                borderRadius: '4px',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.filter = 'drop-shadow(0 0 18px rgba(212,184,116,0.75))';
                                e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.filter = 'drop-shadow(0 4px 8px rgba(0,0,0,0.35))';
                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
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