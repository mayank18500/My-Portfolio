import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { 
    ExternalLink, 
    Github, 
    Terminal, 
    ShieldCheck, 
    Database, 
    Layers, 
    X, 
    ChevronLeft, 
    ChevronRight, 
    CheckCircle2, 
    Code2, 
    BookOpen
} from 'lucide-react'

// Vintage filigree corner frames helper
const CornerOrnaments = () => (
    <>
        <div style={{ position: 'absolute', top: '8px', left: '8px', width: '20px', height: '20px', borderTop: '2px solid var(--amber)', borderLeft: '2px solid var(--amber)', pointerEvents: 'none', opacity: 0.6 }} />
        <div style={{ position: 'absolute', top: '13px', left: '13px', width: '3px', height: '3px', background: 'var(--gold)', borderRadius: '50%', pointerEvents: 'none', opacity: 0.6 }} />
        <div style={{ position: 'absolute', top: '8px', right: '8px', width: '20px', height: '20px', borderTop: '2px solid var(--amber)', borderRight: '2px solid var(--amber)', pointerEvents: 'none', opacity: 0.6 }} />
        <div style={{ position: 'absolute', top: '13px', right: '13px', width: '3px', height: '3px', background: 'var(--gold)', borderRadius: '50%', pointerEvents: 'none', opacity: 0.6 }} />
        <div style={{ position: 'absolute', bottom: '8px', left: '8px', width: '20px', height: '20px', borderBottom: '2px solid var(--amber)', borderLeft: '2px solid var(--amber)', pointerEvents: 'none', opacity: 0.6 }} />
        <div style={{ position: 'absolute', bottom: '13px', left: '13px', width: '3px', height: '3px', background: 'var(--gold)', borderRadius: '50%', pointerEvents: 'none', opacity: 0.6 }} />
        <div style={{ position: 'absolute', bottom: '8px', right: '8px', width: '20px', height: '20px', borderBottom: '2px solid var(--amber)', borderRight: '2px solid var(--amber)', pointerEvents: 'none', opacity: 0.6 }} />
        <div style={{ position: 'absolute', bottom: '13px', right: '13px', width: '3px', height: '3px', background: 'var(--gold)', borderRadius: '50%', pointerEvents: 'none', opacity: 0.6 }} />
    </>
)

const projects = [
    {
        name: 'Brand Redesign',
        tagline: 'UI/UX · Modern Minimalist',
        description: 'A personal brand redesign project that showcases modern minimalist aesthetics, combining organic elements with refined layout choices. Fully built with modular styling systems, clean typography, and elegant mobile user experience mockups.',
        tech: ['React', 'Figma', 'TypeScript', 'CSS Modules', 'Vector Design'],
        color: '#3d7a6a',
        github: 'https://github.com/mayank18500',
        live: '#',
        volume: 'TOME I',
        features: [
            'Modular styling systems with clean typography & HSL color tokens',
            'Grid alignment and detailed vector interface prototypes',
            'Elegant mobile user experience mockups with interactive transitions',
            'Lightweight responsive architecture designed for fluid cross-device scaling'
        ]
    },
    {
        name: 'Cloud-Desk',
        tagline: 'MERN · Hiring Workflow Platform',
        description: 'Full-stack hiring management platform built on the MERN stack. Features hiring workflows, TanStack Query for server state, Cloudinary for media, and real-time candidate tracking — deployed on Render.',
        tech: ['React', 'Node.js', 'MongoDB', 'TanStack Query', 'Cloudinary', 'Express'],
        color: '#c8762a',
        github: 'https://github.com/mayank18500',
        live: '#',
        volume: 'TOME II',
        features: [
            'Interactive candidate hiring pipeline workflows',
            'Optimized server state synchronization using TanStack Query',
            'Cloudinary media storage and image upload transformations',
            'Real-time candidate indexing, tracking, and telemetry logs'
        ]
    },
    {
        name: 'Admin Dashboard',
        tagline: 'RBAC · Security-Hardened',
        description: 'Production-ready admin dashboard with Role-Based Access Control. Secured with Arcjet rate limiting and Helmet headers, deployed on Render with PostgreSQL backend and full audit logging.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Arcjet', 'Helmet', 'RBAC', 'Render'],
        color: '#a0522d',
        github: 'https://github.com/mayank18500',
        live: '#',
        volume: 'TOME III',
        features: [
            'Granular Role-Based Access Control (RBAC) security structures',
            'Rate limiting and security protection using Arcjet and Helmet headers',
            'Full audit logging with secure, query-optimized PostgreSQL logs',
            'Production-ready administrative metrics and data visualizations'
        ]
    },
    {
        name: 'Blog Platform',
        tagline: 'SSR · EJS · Full CRUD',
        description: 'Server-side rendered blogging platform using EJS templating and Express. Supports full CRUD operations, Markdown content, user authentication, and image uploads with a clean, responsive UI.',
        tech: ['Node.js', 'Express', 'EJS', 'MongoDB', 'SSR', 'JWT'],
        color: '#5a6e3a',
        github: 'https://github.com/mayank18500',
        live: '#',
        volume: 'TOME IV',
        features: [
            'Server-Side Rendered (SSR) pages optimized for lightning-fast loads',
            'Full Create, Read, Update, Delete (CRUD) blogging workflow',
            'Integrated Markdown engine for rich blog post composition',
            'Robust session-based authentication using JWT security tokens'
        ]
    },
]

const ProjectMockup = ({ projectName }: { projectName: string }) => {
    if (projectName === 'Brand Redesign') {
        return (
            <div style={{
                display: 'flex',
                gap: '1.25rem',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                minHeight: '260px'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30, rotate: -2 }}
                    animate={{ opacity: 1, y: 0, rotate: -1.5 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -5, scale: 1.03 }}
                    style={{
                        width: '120px',
                        height: '220px',
                        borderRadius: '16px',
                        border: '3px solid var(--brown-dark)',
                        overflow: 'hidden',
                        boxShadow: '0 8px 24px rgba(44,24,16,0.25)',
                        background: '#000',
                    }}
                >
                    <img src="/Design/d9.svg" alt="Mockup 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30, rotate: 2 }}
                    animate={{ opacity: 1, y: 0, rotate: 1.5 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ y: -5, scale: 1.03 }}
                    style={{
                        width: '120px',
                        height: '220px',
                        borderRadius: '16px',
                        border: '3px solid var(--brown-dark)',
                        overflow: 'hidden',
                        boxShadow: '0 8px 24px rgba(44,24,16,0.25)',
                        background: '#000',
                    }}
                >
                    <img src="/Design/d10.svg" alt="Mockup 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </motion.div>
            </div>
        )
    }

    if (projectName === 'Cloud-Desk') {
        return (
            <div style={{
                background: 'rgba(44, 24, 16, 0.04)',
                border: '1.5px solid rgba(139, 80, 40, 0.2)',
                borderRadius: '12px',
                padding: '1.25rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                fontFamily: 'var(--font-mono)',
                minHeight: '260px'
            }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--amber)', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(139, 80, 40, 0.15)', paddingBottom: '0.4rem' }}>
                    <span>TELEMETRY: WORKFLOWS</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c8762a', display: 'inline-block' }} />
                        ACTIVE
                    </span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', flex: 1 }}>
                    {[
                        { title: 'Applied', candidates: ['Alice Vance', 'Bob G.'], color: '#8b5e3c' },
                        { title: 'Technical', candidates: ['Mayank P.'], color: '#c8762a', active: true },
                        { title: 'Summoned', candidates: ['Eva N.'], color: '#5a6e3a' }
                    ].map((col, idx) => (
                        <div key={idx} style={{ background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(139, 80, 40, 0.12)', borderRadius: '6px', padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                            <div style={{ fontSize: '0.6rem', fontWeight: 800, color: col.color, textTransform: 'uppercase', borderBottom: '1.5px solid currentColor', paddingBottom: '2px', marginBottom: '2px' }}>
                                {col.title}
                            </div>
                            {col.candidates.map((cand, cIdx) => (
                                <motion.div
                                    key={cIdx}
                                    animate={col.active ? { scale: [1, 1.02, 1], y: [0, -2, 0] } : {}}
                                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                                    style={{
                                        fontSize: '0.65rem',
                                        padding: '0.4rem 0.5rem',
                                        background: '#fff',
                                        borderRadius: '4px',
                                        boxShadow: '0 2px 4px rgba(92,51,23,0.04)',
                                        borderLeft: `2.5px solid ${col.color}`,
                                        color: 'var(--brown-dark)',
                                        fontWeight: 600
                                    }}
                                >
                                    {cand}
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    if (projectName === 'Admin Dashboard') {
        return (
            <div style={{
                background: '#160c07',
                border: '1.5px solid #8b5e3c',
                borderRadius: '10px',
                padding: '1.25rem',
                color: '#e09840',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                boxShadow: 'inset 0 0 15px rgba(0,0,0,0.85), 0 8px 24px rgba(44,24,16,0.15)',
                overflow: 'hidden',
                minHeight: '260px'
            }}>
                <div style={{ color: '#ecd59f', borderBottom: '1px solid #3d2008', paddingBottom: '0.4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>[SECURE AUDIT TELEMETRY]</span>
                    <span style={{ color: '#c8762a', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c8762a', display: 'inline-block' }} />
                        SHIELD: ON
                    </span>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.35rem', overflowY: 'hidden' }}>
                    <div>&gt; <span style={{ color: '#d4a017' }}>INIT RBAC VERIFICATION...</span></div>
                    <div>&gt; USER: <span style={{ color: '#ecd59f' }}>Admin</span> (Roles: [super_admin])</div>
                    <div>&gt; SECURE: Helmet headers loaded [COMPLIANT]</div>
                    <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 1.2 }} style={{ color: '#e09840' }}>
                        &gt; ARCJET check: OK (Rate Limit: 99/100)
                    </motion.div>
                    <div style={{ color: '#ecd59f' }}>&gt; PGSQL Connection pool active (Latency: 4ms)</div>
                    <div style={{ color: '#a0522d' }}>&gt; audit_log: [Action: VIEW_TELEMETRY] status: 200</div>
                    <div style={{ animation: 'pulse 1.5s infinite', color: '#fff' }}>&gt; monitoring socket streaming... _</div>
                </div>
            </div>
        )
    }

    if (projectName === 'Blog Platform') {
        return (
            <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1.5px solid rgba(139, 80, 40, 0.25)',
                borderRadius: '12px',
                padding: '1.25rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                fontFamily: 'var(--font-body)',
                boxShadow: '0 8px 24px rgba(92,51,23,0.06)',
                minHeight: '260px'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(139, 80, 40, 0.15)', paddingBottom: '0.4rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.67rem', color: 'var(--warm-green)', fontWeight: 'bold' }}>COMPILER: SSR EJS ENGINE</span>
                    <span style={{ fontSize: '0.62rem', background: 'var(--warm-green)', color: '#fff', padding: '1px 6px', borderRadius: '3px', fontFamily: 'var(--font-mono)' }}>SSR ONLINE</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', flex: 1 }}>
                    {/* Editor */}
                    <div style={{ background: '#fcfaf2', border: '1px solid rgba(139, 80, 40, 0.15)', borderRadius: '6px', padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--text-muted)', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '2px' }}>Markdown Editor</div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--brown-dark)', whiteSpace: 'pre-wrap', lineHeight: 1.3 }}>
                            {`# Grimoire\nAlchemical design patterns...\n\n**Key Runes:**`}
                        </div>
                    </div>
                    {/* Render Preview */}
                    <div style={{ background: '#fff', border: '1px dashed var(--warm-green)', borderRadius: '6px', padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--warm-green)', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '2px' }}>HTML Render</div>
                        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', color: 'var(--brown-dark)', margin: 0 }}>Grimoire</h4>
                        <p style={{ fontSize: '0.62rem', color: 'var(--text-secondary)', lineHeight: 1.3, margin: 0 }}>
                            Alchemical design patterns...
                        </p>
                        <div style={{ fontSize: '0.62rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
                            Key Runes:
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return null
}

export default function Projects() {
    const ref = useRef(null)
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    
    const [scrollPercent, setScrollPercent] = useState(0)
    const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null)

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
            const maxScroll = scrollWidth - clientWidth
            if (maxScroll > 0) {
                setScrollPercent((scrollLeft / maxScroll) * 100)
            }
        }
    }

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { scrollLeft, clientWidth } = scrollContainerRef.current
            const scrollAmount = clientWidth * 0.8
            const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount
            scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
        }
    }

    return (
        <section id="projects" style={{
            padding: '6rem 0',
            position: 'relative',
            background: '#faf5e9',
            borderBottom: '1px solid rgba(139, 80, 40, 0.15)',
        }}>
            <div className="section-wrapper" ref={ref}>
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '3rem' }}
                >
                    <p className="section-label" style={{ marginBottom: '0.5rem' }}>05. projects</p>
                    <div className="section-divider" />
                    <h2 className="heading-lg" style={{
                        color: 'var(--brown-dark)', fontStyle: 'italic',
                        marginTop: '1rem', marginBottom: '1.5rem',
                    }}>
                        The Arcane Codex
                    </h2>
                </motion.div>

                {/* Horizontal engineering highlights row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    style={{
                        marginBottom: '4rem',
                    }}
                    className="responsive-four-column-grid"
                >
                    {[
                        { title: 'Robust Backends', desc: 'Secure REST APIs & Services', Icon: Terminal, color: '#c8762a' },
                        { title: 'Secured Systems', desc: 'JWT, RBAC & Protection', Icon: ShieldCheck, color: '#a0522d' },
                        { title: 'Optimized Queries', desc: 'PostgreSQL & MongoDB scaling', Icon: Database, color: '#5a6e3a' },
                        { title: 'Modern Interfaces', desc: 'React, GSAP & Fluid UI UX', Icon: Layers, color: '#3d7a6a' }
                    ].map((c, i) => (
                        <div key={i} style={{
                            border: '1.5px solid #8b5e3c',
                            borderRadius: '8px',
                            padding: '1.5rem',
                            boxShadow: '0 4px 14px rgba(92,51,23,0.08)',
                            background: 'rgba(250, 245, 233, 0.75)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: '0.75rem',
                            transition: 'all 0.3s ease',
                            cursor: 'default',
                        }}
                        onMouseEnter={e => {
                            const el = e.currentTarget as HTMLDivElement
                            el.style.transform = 'translateY(-4px)'
                            el.style.borderColor = c.color
                            el.style.boxShadow = '0 8px 24px rgba(92,51,23,0.12)'
                            el.style.background = '#fff'
                        }}
                        onMouseLeave={e => {
                            const el = e.currentTarget as HTMLDivElement
                            el.style.transform = 'translateY(0)'
                            el.style.borderColor = '#8b5e3c'
                            el.style.boxShadow = '0 4px 14px rgba(92,51,23,0.08)'
                            el.style.background = 'rgba(250, 245, 233, 0.75)'
                        }}
                        >
                            <div style={{
                                width: '42px',
                                height: '42px',
                                borderRadius: '6px',
                                background: `${c.color}15`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: c.color,
                            }}>
                                <c.Icon size={20} />
                            </div>
                            <div>
                                <h4 style={{
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '1.1rem',
                                    fontWeight: 800,
                                    color: 'var(--brown-dark)',
                                    marginBottom: '0.25rem',
                                }}>
                                    {c.title}
                                </h4>
                                <p style={{
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '0.78rem',
                                    color: 'var(--text-muted)',
                                    lineHeight: 1.4,
                                }}>
                                    {c.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* ─── Horizontal Scroll Container Wrapper ─── */}
                <div style={{ position: 'relative', width: '100%', marginBottom: '2rem' }}>
                    {/* Navigation Buttons (Desktop only, hidden on mobile in responsive layout via standard hover or size checking) */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '-20px',
                        right: '-20px',
                        transform: 'translateY(-50%)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        pointerEvents: 'none',
                        zIndex: 10,
                    }} className="carousel-nav-buttons">
                        <button 
                            onClick={() => scroll('left')}
                            style={{
                                width: '42px',
                                height: '42px',
                                borderRadius: '50%',
                                background: 'rgba(250, 245, 233, 0.95)',
                                border: '1.5px solid var(--amber)',
                                color: 'var(--brown-dark)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                pointerEvents: 'auto',
                                boxShadow: '0 4px 10px rgba(92,51,23,0.1)',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'scale(1.1)'
                                e.currentTarget.style.boxShadow = '0 0 12px var(--amber-glow)'
                                e.currentTarget.style.background = '#fff'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'scale(1)'
                                e.currentTarget.style.boxShadow = '0 4px 10px rgba(92,51,23,0.1)'
                                e.currentTarget.style.background = 'rgba(250, 245, 233, 0.95)'
                            }}
                            aria-label="Scroll left"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            style={{
                                width: '42px',
                                height: '42px',
                                borderRadius: '50%',
                                background: 'rgba(250, 245, 233, 0.95)',
                                border: '1.5px solid var(--amber)',
                                color: 'var(--brown-dark)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                pointerEvents: 'auto',
                                boxShadow: '0 4px 10px rgba(92,51,23,0.1)',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'scale(1.1)'
                                e.currentTarget.style.boxShadow = '0 0 12px var(--amber-glow)'
                                e.currentTarget.style.background = '#fff'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'scale(1)'
                                e.currentTarget.style.boxShadow = '0 4px 10px rgba(92,51,23,0.1)'
                                e.currentTarget.style.background = 'rgba(250, 245, 233, 0.95)'
                            }}
                            aria-label="Scroll right"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    {/* Horizontal scroll track */}
                    <div 
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="carousel-track no-scrollbar"
                    >
                        {projects.map((project, i) => (
                            <div key={project.name} className="carousel-card-wrapper">
                                <motion.div
                                    onClick={() => setActiveProject(project)}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.2 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                    whileHover={{ y: -8, rotate: i % 2 === 0 ? -0.8 : 0.8 }}
                                    style={{
                                        padding: '2.25rem 2rem',
                                        background: 'rgba(255, 255, 255, 0.92)',
                                        border: '1.5px solid rgba(139, 80, 40, 0.22)',
                                        borderRadius: '16px',
                                        boxShadow: '0 8px 24px rgba(92,51,23,0.06)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        height: '280px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        cursor: 'pointer',
                                    }}
                                    onMouseEnter={e => {
                                        const el = e.currentTarget as HTMLDivElement
                                        el.style.borderColor = project.color
                                        el.style.boxShadow = `0 12px 30px rgba(92,51,23,0.12), 0 0 16px ${project.color}25`
                                        const orbit = el.querySelector('.project-orbit-ring') as HTMLDivElement
                                        if (orbit) {
                                            orbit.style.opacity = '0.45'
                                            orbit.style.transform = 'translate(-50%, -50%) scale(1.15) rotate(90deg)'
                                        }
                                    }}
                                    onMouseLeave={e => {
                                        const el = e.currentTarget as HTMLDivElement
                                        el.style.borderColor = 'rgba(139, 80, 40, 0.22)'
                                        el.style.boxShadow = '0 8px 24px rgba(92,51,23,0.06)'
                                        const orbit = el.querySelector('.project-orbit-ring') as HTMLDivElement
                                        if (orbit) {
                                            orbit.style.opacity = '0'
                                            orbit.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)'
                                        }
                                    }}
                                >
                                    {/* Hover Orbit Ring */}
                                    <div className="project-orbit-ring" style={{
                                        position: 'absolute',
                                        top: '15%',
                                        right: '15%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '90px',
                                        height: '90px',
                                        borderRadius: '50%',
                                        border: `1.5px dashed ${project.color}`,
                                        pointerEvents: 'none',
                                        opacity: 0,
                                        zIndex: 0,
                                        transition: 'opacity 0.4s ease, transform 0.6s ease'
                                    }} />

                                    <CornerOrnaments />

                                    <div>
                                        {/* Header Row */}
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', zIndex: 1, position: 'relative' }}>
                                            <span style={{
                                                fontFamily: 'var(--font-mono)',
                                                fontSize: '0.67rem',
                                                color: project.color,
                                                fontWeight: 800,
                                                letterSpacing: '0.12em',
                                                textTransform: 'uppercase',
                                            }}>{project.volume}</span>
                                            <span style={{
                                                fontFamily: 'var(--font-mono)',
                                                fontSize: '0.65rem',
                                                padding: '0.15rem 0.5rem',
                                                border: `1px solid ${project.color}35`,
                                                borderRadius: '4px',
                                                color: project.color,
                                                background: `${project.color}08`,
                                                fontWeight: 600,
                                            }}>{project.tagline.split('·')[0].trim()}</span>
                                        </div>

                                        {/* Title */}
                                        <h3 style={{
                                            fontFamily: 'var(--font-display)',
                                            fontStyle: 'italic',
                                            fontSize: '2.1rem',
                                            fontWeight: 800,
                                            color: 'var(--brown-dark)',
                                            marginBottom: '1rem',
                                            lineHeight: 1.15,
                                            zIndex: 1,
                                            position: 'relative'
                                        }}>{project.name}</h3>

                                        {/* Short Description */}
                                        <p style={{
                                            fontFamily: 'var(--font-body)',
                                            fontSize: '0.88rem',
                                            color: 'var(--text-secondary)',
                                            lineHeight: 1.65,
                                            marginBottom: '1.5rem',
                                            zIndex: 1,
                                            position: 'relative'
                                        }}>{project.description.slice(0, 110)}...</p>
                                    </div>

                                    <div style={{ zIndex: 1, position: 'relative' }}>
                                        {/* Action Link button */}
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.35rem',
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.72rem',
                                            fontWeight: 800,
                                            color: project.color,
                                            letterSpacing: '0.06em',
                                            textTransform: 'uppercase',
                                        }}>
                                            <BookOpen size={13} />
                                            <span>Read Codex</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    {/* Scroll Indicator Bar */}
                    <div style={{
                        width: '160px',
                        height: '3px',
                        background: 'rgba(139, 80, 40, 0.15)',
                        borderRadius: '2px',
                        margin: '1.5rem auto 0 auto',
                        position: 'relative',
                        overflow: 'hidden',
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            height: '100%',
                            width: `${scrollPercent}%`,
                            background: 'var(--amber)',
                            transition: 'width 0.1s ease',
                        }} />
                    </div>
                </div>

                {/* Inspect Sheet Modal */}
                <AnimatePresence>
                    {activeProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                position: 'fixed',
                                inset: 0,
                                background: 'rgba(28, 15, 8, 0.72)',
                                backdropFilter: 'blur(10px)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 999,
                                padding: '1.5rem',
                            }}
                            onClick={() => setActiveProject(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                                animate={{ scale: 1, y: 0, opacity: 1 }}
                                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                                style={{
                                    background: '#faf5e9',
                                    width: '100%',
                                    maxWidth: '880px',
                                    borderRadius: '16px',
                                    boxShadow: '0 20px 50px rgba(44,24,16,0.3)',
                                    border: '1px solid rgba(139, 80, 40, 0.3)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    maxHeight: '90vh',
                                }}
                                onClick={e => e.stopPropagation()}
                            >
                                {/* Inner gold frame border */}
                                <div style={{
                                    position: 'absolute',
                                    inset: '4px',
                                    border: '1.5px solid rgba(139, 80, 40, 0.15)',
                                    borderRadius: '12px',
                                    pointerEvents: 'none',
                                    zIndex: 0,
                                }} />

                                <CornerOrnaments />

                                {/* Close Button */}
                                <button
                                    onClick={() => setActiveProject(null)}
                                    style={{
                                        position: 'absolute',
                                        top: '16px',
                                        right: '16px',
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '50%',
                                        background: 'rgba(250, 245, 233, 0.8)',
                                        border: '1.5px solid rgba(139, 80, 40, 0.25)',
                                        color: 'var(--brown-dark)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        zIndex: 10,
                                        transition: 'all 0.3s ease',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'rotate(90deg) scale(1.08)'
                                        e.currentTarget.style.borderColor = 'var(--amber)'
                                        e.currentTarget.style.color = 'var(--amber)'
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'rotate(0deg) scale(1)'
                                        e.currentTarget.style.borderColor = 'rgba(139, 80, 40, 0.25)'
                                        e.currentTarget.style.color = 'var(--brown-dark)'
                                    }}
                                    aria-label="Close modal"
                                >
                                    <X size={16} />
                                </button>

                                {/* Scrollable Modal Content */}
                                <div style={{
                                    padding: '2.5rem',
                                    overflowY: 'auto',
                                    maxHeight: 'calc(90vh - 8px)',
                                    position: 'relative',
                                    zIndex: 1,
                                }} className="no-scrollbar">
                                    {/* Grid split */}
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: '1.1fr 0.9fr',
                                        gap: '2.5rem',
                                        alignItems: 'stretch',
                                    }} className="about-grid">
                                        
                                        {/* Left column: detailed project data */}
                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.5rem' }}>
                                            <div>
                                                <span style={{
                                                    fontFamily: 'var(--font-mono)',
                                                    fontSize: '0.72rem',
                                                    color: activeProject.color,
                                                    fontWeight: 800,
                                                    letterSpacing: '0.12em',
                                                    textTransform: 'uppercase',
                                                    display: 'block',
                                                    marginBottom: '0.5rem',
                                                }}>{activeProject.volume} · {activeProject.tagline}</span>

                                                <h2 style={{
                                                    fontFamily: 'var(--font-display)',
                                                    fontStyle: 'italic',
                                                    fontWeight: 900,
                                                    fontSize: '2.6rem',
                                                    color: 'var(--brown-dark)',
                                                    marginBottom: '1rem',
                                                    lineHeight: 1.1,
                                                }}>{activeProject.name}</h2>

                                                <p style={{
                                                    color: 'var(--text-secondary)',
                                                    fontSize: '0.92rem',
                                                    lineHeight: 1.7,
                                                    fontFamily: 'var(--font-body)',
                                                    marginBottom: '1.5rem',
                                                }}>{activeProject.description}</p>

                                                {/* Features / Core Blueprint */}
                                                <div style={{ marginBottom: '1.5rem' }}>
                                                    <h4 style={{
                                                        fontFamily: 'var(--font-display)',
                                                        fontSize: '1rem',
                                                        fontWeight: 800,
                                                        color: 'var(--brown-dark)',
                                                        marginBottom: '0.75rem',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.5rem',
                                                    }}>
                                                        <Code2 size={16} color="var(--amber)" />
                                                        System Schematics
                                                    </h4>
                                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                        {activeProject.features?.map((feat, idx) => (
                                                            <li key={idx} style={{
                                                                fontSize: '0.8rem',
                                                                color: 'var(--text-secondary)',
                                                                display: 'flex',
                                                                alignItems: 'flex-start',
                                                                gap: '0.5rem',
                                                                lineHeight: 1.45,
                                                            }}>
                                                                <CheckCircle2 size={13} color={activeProject.color} style={{ marginTop: '2px', flexShrink: 0 }} />
                                                                <span>{feat}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Tech Badges & Buttons */}
                                            <div>
                                                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                                    {activeProject.tech.map(t => (
                                                        <span key={t} style={{
                                                            fontFamily: 'var(--font-mono)',
                                                            fontSize: '0.65rem',
                                                            padding: '0.25rem 0.65rem',
                                                            borderRadius: '4px',
                                                            color: activeProject.color,
                                                            border: `1.5px solid ${activeProject.color}25`,
                                                            background: `${activeProject.color}05`,
                                                            fontWeight: 700,
                                                        }}>{t}</span>
                                                    ))}
                                                </div>

                                                <div style={{ display: 'flex', gap: '1rem' }}>
                                                    <a href={activeProject.github} target="_blank" rel="noreferrer" className="parchment-scroll-btn" style={{ fontSize: '0.82rem', padding: '0.6rem 1.2rem', gap: '0.4rem' }}>
                                                        <Github size={14} /> Repository
                                                    </a>
                                                    {activeProject.live && activeProject.live !== '#' && (
                                                        <a href={activeProject.live} target="_blank" rel="noreferrer" className="parchment-scroll-btn" style={{ fontSize: '0.82rem', padding: '0.6rem 1.2rem', gap: '0.4rem' }}>
                                                            <ExternalLink size={14} /> Live View
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right column: visual telemetry */}
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            background: 'rgba(242, 230, 204, 0.4)',
                                            border: '1px solid rgba(139, 80, 40, 0.15)',
                                            borderRadius: '12px',
                                            padding: '1rem',
                                            position: 'relative',
                                            overflow: 'hidden',
                                        }}>
                                            {/* Inner background decorative overlay */}
                                            <div style={{
                                                position: 'absolute',
                                                top: '-20%',
                                                right: '-20%',
                                                width: '150px',
                                                height: '150px',
                                                borderRadius: '50%',
                                                background: `radial-gradient(circle, ${activeProject.color}06 0%, transparent 70%)`,
                                                filter: 'blur(30px)',
                                            }} />

                                            <ProjectMockup projectName={activeProject.name} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}
