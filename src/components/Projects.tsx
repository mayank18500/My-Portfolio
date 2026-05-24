import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, Terminal, ShieldCheck, Database, Layers } from 'lucide-react'

const projects = [
    {
        name: 'Cloud-Desk',
        tagline: 'MERN · Hiring Workflow Platform',
        description: 'Full-stack hiring management platform built on the MERN stack. Features hiring workflows, TanStack Query for server state, Cloudinary for media, and real-time candidate tracking — deployed on Render.',
        tech: ['React', 'Node.js', 'MongoDB', 'TanStack Query', 'Cloudinary', 'Express'],
        color: '#c8762a',
        github: 'https://github.com/mayank18500',
        live: '#',
    },
    {
        name: 'Admin Dashboard',
        tagline: 'RBAC · Security-Hardened',
        description: 'Production-ready admin dashboard with Role-Based Access Control. Secured with Arcjet rate limiting and Helmet headers, deployed on Render with PostgreSQL backend and full audit logging.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Arcjet', 'Helmet', 'RBAC', 'Render'],
        color: '#a0522d',
        github: 'https://github.com/mayank18500',
        live: '#',
    },
    {
        name: 'Blog Platform',
        tagline: 'SSR · EJS · Full CRUD',
        description: 'Server-side rendered blogging platform using EJS templating and Express. Supports full CRUD operations, Markdown content, user authentication, and image uploads with a clean, responsive UI.',
        tech: ['Node.js', 'Express', 'EJS', 'MongoDB', 'SSR', 'JWT'],
        color: '#5a6e3a',
        github: 'https://github.com/mayank18500',
        live: '#',
    },
]

export default function Projects() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="projects" style={{
            padding: '6rem 0',
            position: 'relative',
            background: '#faf5e9',
            backgroundImage: "url('/Design/d13.svg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
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
                    <p className="section-label" style={{ marginBottom: '0.5rem' }}>04. projects</p>
                    <div className="section-divider" />
                    <h2 className="heading-lg" style={{
                        color: 'var(--brown-dark)', fontStyle: 'italic',
                        marginTop: '1rem', marginBottom: '1.5rem',
                    }}>
                        My Projects
                    </h2>
                </motion.div>

                {/* Horizontal engineering highlights row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '1.25rem',
                        marginBottom: '4rem',
                    }}
                    className="skills-grid"
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

                {/* ─── Featured "Brand Redesign" Section ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1.2fr 1fr',
                        gap: '4rem',
                        alignItems: 'center',
                        marginBottom: '5rem',
                    }}
                    className="about-grid"
                >
                    {/* Left: text description */}
                    <div>
                        <h3 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '3.5rem',
                            fontStyle: 'italic',
                            fontWeight: 900,
                            color: 'var(--brown-dark)',
                            lineHeight: 1.1,
                            margin: '0 0 1.5rem 0',
                        }}>
                            Brand Redesign
                        </h3>

                        <p style={{
                            color: 'var(--text-secondary)',
                            fontSize: '1.1rem',
                            lineHeight: 1.8,
                            fontFamily: 'var(--font-display)',
                            marginBottom: '2rem',
                            textAlign: 'justify',
                        }}>
                            A personal brand redesign project that showcases modern minimalist aesthetics, combining organic elements with refined layout choices. Fully built with modular styling systems, clean vector interfaces, and elegant mobile user experience mockups.
                        </p>

                        <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                            {['React', 'Figma', 'TypeScript', 'CSS Modules', 'Vector Design'].map(tech => (
                                <span key={tech} style={{
                                    fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                                    padding: '0.4rem 1rem',
                                    border: '1.5px solid #8b5e3c',
                                    borderRadius: '4px', color: '#2c1810',
                                    background: 'linear-gradient(135deg, #f5e3b5 0%, #ecd59f 100%)',
                                    letterSpacing: '0.04em',
                                    fontWeight: 700,
                                    boxShadow: '0 2px 6px rgba(44, 24, 16, 0.1)',
                                }}>{tech}</span>
                            ))}
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://github.com/mayank18500" target="_blank" rel="noreferrer" className="parchment-scroll-btn" style={{ fontSize: '0.85rem' }}>
                                <Github size={15} /> GitHub
                            </a>
                            <a href="#" className="parchment-scroll-btn" style={{ fontSize: '0.85rem' }}>
                                <ExternalLink size={15} /> Live Demo
                            </a>
                        </div>
                    </div>

                    {/* Right: phone mockups displaying d9.svg and d10.svg */}
                    <div style={{
                        display: 'flex',
                        gap: '1.5rem',
                        justifyContent: 'center',
                    }}>
                        {/* Phone 1: d9.svg */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.8, 0.25, 1] }}
                            whileHover={{ y: -6, rotate: -1.5, scale: 1.02 }}
                            style={{
                                width: '160px',
                                height: '320px',
                                borderRadius: '24px',
                                border: '4px solid #2c1810',
                                overflow: 'hidden',
                                boxShadow: '0 12px 30px rgba(44,24,16,0.3)',
                                background: '#000',
                            }}
                        >
                            <img src="/Design/d9.svg" alt="Design 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </motion.div>

                        {/* Phone 2: d10.svg */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
                            whileHover={{ y: -6, rotate: 1.5, scale: 1.02 }}
                            style={{
                                width: '160px',
                                height: '320px',
                                borderRadius: '24px',
                                border: '4px solid #2c1810',
                                overflow: 'hidden',
                                boxShadow: '0 12px 30px rgba(44,24,16,0.3)',
                                background: '#000',
                            }}
                        >
                            <img src="/Design/d10.svg" alt="Design 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </motion.div>
                    </div>
                </motion.div>

                {/* ─── Regular project cards grid ─── */}
                <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ y: -6 }}
                            style={{
                                padding: '2rem',
                                background: 'rgba(250, 245, 233, 0.95)',
                                border: `1px solid ${project.color}28`,
                                borderRadius: '8px',
                                boxShadow: '0 4px 20px rgba(92,51,23,0.08)',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            {/* Top accent bar */}
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: project.color }} />

                            {/* Top row */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                                <span style={{
                                    fontFamily: 'var(--font-mono)', fontSize: '0.67rem',
                                    color: project.color, letterSpacing: '0.12em',
                                    textTransform: 'uppercase', opacity: 0.85,
                                }}>{project.tagline}</span>
                                <div style={{ display: 'flex', gap: '0.75rem' }}>
                                    <a href={project.github} target="_blank" rel="noreferrer"
                                        style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
                                        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = project.color }}
                                        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)' }}>
                                        <Github size={18} />
                                    </a>
                                </div>
                            </div>

                            <h3 style={{
                                fontFamily: 'var(--font-display)', fontStyle: 'italic',
                                fontSize: '1.75rem', color: 'var(--text-primary)',
                                marginBottom: '0.75rem', lineHeight: 1.1,
                            }}>{project.name}</h3>

                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>{project.description}</p>

                            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                                {project.tech.map(t => (
                                    <span key={t} style={{
                                        fontFamily: 'var(--font-mono)', fontSize: '0.63rem',
                                        padding: '0.18rem 0.55rem', borderRadius: '3px',
                                        color: project.color, border: `1px solid ${project.color}35`,
                                        background: `${project.color}08`, letterSpacing: '0.04em',
                                    }}>{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
