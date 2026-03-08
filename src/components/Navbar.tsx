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

    // Active section detection via IntersectionObserver
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
                    padding: '1.1rem 2rem', display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between',
                    background: scrolled || menuOpen ? 'rgba(3,5,15,0.96)' : 'transparent',
                    backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
                    borderBottom: scrolled || menuOpen ? '1px solid rgba(0,212,255,0.08)' : 'none',
                    transition: 'all 0.4s ease',
                }}
            >
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--blue-electric)', cursor: 'pointer', letterSpacing: '0.15em', zIndex: 1 }}
                >
                    {'<MK />'}
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
                                transition={{ delay: 0.1 * i, duration: 0.4 }}
                                onClick={() => handleNavClick(link)}
                                style={{
                                    background: 'none', border: 'none',
                                    color: isActive ? 'var(--blue-electric)' : 'var(--text-secondary)',
                                    fontFamily: 'var(--font-mono)', fontSize: '0.78rem',
                                    letterSpacing: '0.12em', cursor: 'pointer',
                                    textTransform: 'uppercase', position: 'relative',
                                    transition: 'color 0.3s ease',
                                }}
                                whileHover={{ color: '#00d4ff', scale: 1.05 }}
                            >
                                {link}
                                {/* Active underline */}
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        style={{
                                            position: 'absolute', bottom: -4, left: 0, right: 0, height: 1,
                                            background: 'var(--blue-electric)',
                                            boxShadow: '0 0 6px var(--blue-electric)',
                                        }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </motion.button>
                        )
                    })}
                </div>

                {/* Mobile Hamburger */}
                <motion.button
                    className="nav-mobile-btn"
                    onClick={() => setMenuOpen(prev => !prev)}
                    style={{
                        display: 'none', background: 'none', border: 'none',
                        cursor: 'pointer', alignItems: 'center', justifyContent: 'center',
                        color: 'var(--blue-electric)', zIndex: 1, padding: '0.25rem',
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                    <AnimatePresence mode="wait">
                        {menuOpen
                            ? <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X size={22} /></motion.div>
                            : <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu size={22} /></motion.div>
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
                            zIndex: 999, background: 'rgba(3,5,15,0.98)', backdropFilter: 'blur(24px)',
                            flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            gap: '0', borderTop: '1px solid rgba(0,212,255,0.08)',
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
                                        background: isActive ? 'rgba(0,212,255,0.06)' : 'none',
                                        border: 'none', width: '100%', padding: '1.1rem 2.5rem',
                                        color: isActive ? 'var(--blue-electric)' : 'var(--text-secondary)',
                                        fontFamily: 'var(--font-mono)', fontSize: '0.95rem',
                                        letterSpacing: '0.2em', cursor: 'pointer',
                                        textTransform: 'uppercase', textAlign: 'left',
                                        borderBottom: '1px solid rgba(0,212,255,0.05)',
                                        borderLeft: isActive ? '2px solid var(--blue-electric)' : '2px solid transparent',
                                        transition: 'all 0.2s',
                                    }}
                                    whileHover={{ color: 'var(--blue-electric)', backgroundColor: 'rgba(0,212,255,0.04)' }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <span style={{ color: 'var(--blue-electric)', marginRight: '0.75rem', fontSize: '0.65rem' }}>0{i + 1}.</span>
                                    {link}
                                </motion.button>
                            )
                        })}
                        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem', padding: '1.5rem', justifyContent: 'center' }}>
                            {[{ label: 'GitHub', href: 'https://github.com/mayank18500' }, { label: 'Email', href: 'mailto:mayank01082005@gmail.com' }].map(({ label, href }) => (
                                <a key={label} href={href} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--blue-electric)', textDecoration: 'none', letterSpacing: '0.12em', border: '1px solid rgba(0,212,255,0.25)', padding: '0.5rem 1rem', borderRadius: '4px' }}>{label}</a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
