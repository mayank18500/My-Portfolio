import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'

const links = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Achievements', 'Contact']
const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'achievements', 'contact']

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    useEffect(() => {
        const observers: IntersectionObserver[] = []
        sectionIds.forEach(id => {
            const el = document.getElementById(id)
            if (!el) return
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
                { threshold: 0.3, rootMargin: '-60px 0px -30% 0px' }
            )
            obs.observe(el)
            observers.push(obs)
        })
        return () => observers.forEach(o => o.disconnect())
    }, [])

    const handleNavClick = (section: string) => {
        const id = section.toLowerCase()
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        setMenuOpen(false)
    }

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
                    padding: '1rem 2.5rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    background: scrolled || menuOpen
                        ? 'rgba(250, 245, 233, 0.96)'
                        : 'transparent',
                    backdropFilter: scrolled || menuOpen ? 'blur(16px)' : 'none',
                    borderBottom: scrolled || menuOpen
                        ? '1px solid rgba(139, 80, 40, 0.15)'
                        : 'none',
                    boxShadow: scrolled || menuOpen ? '0 2px 20px rgba(92, 51, 23, 0.08)' : 'none',
                    transition: 'all 0.4s ease',
                }}
            >
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.4rem',
                        fontWeight: 700,
                        color: 'var(--amber)',
                        cursor: 'pointer',
                        letterSpacing: '0.04em',
                        zIndex: 1,
                        fontStyle: 'italic',
                    }}
                >
                    MK
                </motion.div>

                {/* Desktop Links */}
                <div className="nav-desktop-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {links.map((link, i) => {
                        const isActive = activeSection === link.toLowerCase()
                        return (
                            <motion.button
                                key={link}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.08 * i, duration: 0.4 }}
                                onClick={() => handleNavClick(link)}
                                style={{
                                    background: 'none', border: 'none',
                                    color: isActive 
                                        ? 'var(--amber)' 
                                        : (scrolled || menuOpen ? 'var(--text-secondary)' : '#faf5e9'),
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '0.85rem',
                                    fontWeight: isActive ? 600 : 500,
                                    letterSpacing: '0.03em',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    transition: 'color 0.3s ease',
                                    padding: '0.25rem 0',
                                }}
                                whileHover={{ color: 'var(--amber)' }}
                            >
                                {link}
                                {/* Active underline */}
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        style={{
                                            position: 'absolute', bottom: -2, left: 0, right: 0, height: 2,
                                            background: 'var(--amber)',
                                            borderRadius: '2px',
                                        }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </motion.button>
                        )
                    })}

                    {/* Resume CTA */}
                    <motion.a
                        href="/Resume.pdf"
                        download
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="btn-primary"
                        style={{ padding: '0.5rem 1.2rem', fontSize: '0.8rem' }}
                    >
                        Resume
                    </motion.a>
                </div>

                {/* Mobile Hamburger */}
                <motion.button
                    className="nav-mobile-btn"
                    onClick={() => setMenuOpen(prev => !prev)}
                    style={{
                        display: 'none', background: 'none', border: 'none',
                        cursor: 'pointer', alignItems: 'center', justifyContent: 'center',
                        color: 'var(--amber)', zIndex: 1, padding: '0.25rem',
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                    <AnimatePresence mode="wait">
                        {menuOpen
                            ? <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X size={24} /></motion.div>
                            : <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu size={24} /></motion.div>
                        }
                    </AnimatePresence>
                </motion.button>
            </motion.nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="nav-mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            display: 'none', position: 'fixed', top: '60px', left: 0, right: 0, bottom: 0,
                            zIndex: 999, background: 'rgba(250, 245, 233, 0.98)', backdropFilter: 'blur(20px)',
                            flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            gap: '0', borderTop: '1px solid var(--border)',
                        }}
                    >
                        {links.map((link, i) => {
                            const isActive = activeSection === link.toLowerCase()
                            return (
                                <motion.button
                                    key={link}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06, duration: 0.35 }}
                                    onClick={() => handleNavClick(link)}
                                    style={{
                                        background: isActive ? 'rgba(200, 118, 42, 0.08)' : 'none',
                                        border: 'none', width: '100%', padding: '1rem 2.5rem',
                                        color: isActive ? 'var(--amber)' : 'var(--text-secondary)',
                                        fontFamily: 'var(--font-body)', fontSize: '1rem',
                                        fontWeight: isActive ? 600 : 400,
                                        letterSpacing: '0.05em', cursor: 'pointer',
                                        textAlign: 'left',
                                        borderBottom: '1px solid var(--border)',
                                        borderLeft: isActive ? '3px solid var(--amber)' : '3px solid transparent',
                                        transition: 'all 0.2s',
                                    }}
                                    whileHover={{ color: 'var(--amber)', backgroundColor: 'rgba(200, 118, 42, 0.05)' }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    {link}
                                </motion.button>
                            )
                        })}
                        <div style={{ marginTop: '2rem', padding: '1.5rem' }}>
                            <a href="/Resume.pdf" download className="btn-primary">Download Resume</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
