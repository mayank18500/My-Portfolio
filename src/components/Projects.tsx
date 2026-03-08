import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, Layers } from 'lucide-react'
import Tilt from 'react-parallax-tilt'

const projects = [
    {
        name: 'Cloud-Desk',
        tagline: 'MERN · Hiring Workflow Platform',
        description: 'Full-stack hiring management platform built on the MERN stack. Features hiring workflows, TanStack Query for server state, Cloudinary for media, and real-time candidate tracking — deployed on Render.',
        tech: ['React', 'Node.js', 'MongoDB', 'TanStack Query', 'Cloudinary', 'Express'],
        color: '#00d4ff',
        github: 'https://github.com/mayank18500',
        live: '#',
        accent: 'rgba(0, 212, 255, 0.15)',
        borderColor: 'rgba(0, 212, 255, 0.4)',
    },
    {
        name: 'Admin Dashboard',
        tagline: 'RBAC · Security-Hardened',
        description: 'Production-ready admin dashboard with Role-Based Access Control. Secured with Arcjet rate limiting and Helmet headers, deployed on Render with PostgreSQL backend and full audit logging.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Arcjet', 'Helmet', 'RBAC', 'Render'],
        color: '#a855f7',
        github: 'https://github.com/mayank18500',
        live: '#',
        accent: 'rgba(124, 58, 237, 0.15)',
        borderColor: 'rgba(168, 85, 247, 0.4)',
    },
    {
        name: 'Blog Platform',
        tagline: 'SSR · EJS · Full CRUD',
        description: 'Server-side rendered blogging platform using EJS templating and Express. Supports full CRUD operations, Markdown content, user authentication, and image uploads with a clean, responsive UI.',
        tech: ['Node.js', 'Express', 'EJS', 'MongoDB', 'SSR', 'JWT'],
        color: '#10b981',
        github: 'https://github.com/mayank18500',
        live: '#',
        accent: 'rgba(16, 185, 129, 0.12)',
        borderColor: 'rgba(16, 185, 129, 0.4)',
    },
]

function ProjectCard({ project, index, inView }: { project: typeof projects[0]; index: number; inView: boolean }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const [glowPos, setGlowPos] = useState({ x: 50, y: 50 })
    const [hovered, setHovered] = useState(false)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = cardRef.current!.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setGlowPos({ x, y })
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.2 + index * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative' }}
        >

            <Tilt
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                glareEnable={true}
                glareMaxOpacity={0.06}
                glareColor={project.color}
                glarePosition="all"
                glareBorderRadius="4px"
                scale={1.01}
                transitionSpeed={700}
                style={{ height: '100%' }}
            >
                <div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    style={{
                        position: 'relative',
                        padding: '2rem',
                        background: hovered ? project.accent : 'var(--bg-card)',
                        border: `1px solid ${hovered ? project.borderColor : 'var(--border)'}`,
                        borderRadius: '4px',
                        backdropFilter: 'blur(12px)',
                        overflow: 'hidden',
                        height: '100%',
                        transition: 'background 0.3s, border-color 0.3s',
                    }}
                >
                    {/* Live cursor glow */}
                    {hovered && (
                        <div style={{
                            position: 'absolute', inset: 0, borderRadius: '4px', pointerEvents: 'none',
                            background: `radial-gradient(circle 180px at ${glowPos.x}% ${glowPos.y}%, ${project.color}18, transparent 70%)`,
                            zIndex: 0,
                        }} />
                    )}

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        {/* Top row */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Layers size={16} color={project.color} />
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: project.color, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.8 }}>{project.tagline}</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                <motion.a href={project.github} target="_blank" rel="noreferrer" whileHover={{ scale: 1.2, color: project.color }} style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>
                                    <Github size={17} />
                                </motion.a>
                                {project.live !== '#' && (
                                    <motion.a href={project.live} target="_blank" rel="noreferrer" whileHover={{ scale: 1.2, color: project.color }} style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>
                                        <ExternalLink size={17} />
                                    </motion.a>
                                )}
                            </div>
                        </div>

                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', letterSpacing: '0.03em', color: 'var(--text-primary)', marginBottom: '0.75rem', lineHeight: 1.1 }}>{project.name}</h3>

                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>{project.description}</p>

                        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                            {project.tech.map(t => (
                                <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', padding: '0.2rem 0.55rem', borderRadius: '3px', color: project.color, border: `1px solid ${project.color}40`, background: `${project.color}08`, letterSpacing: '0.04em' }}>{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </Tilt>
        </motion.div>
    )
}

export default function Projects() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="projects" style={{ padding: '8rem 0', position: 'relative' }}>
            <div className="section-wrapper" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '4rem' }}
                >
                    <p className="section-label" style={{ marginBottom: '0.75rem' }}>04. projects</p>
                    <h2 className="heading-lg" style={{ background: 'linear-gradient(135deg, var(--text-primary) 40%, var(--violet-glow))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Built</h2>
                </motion.div>

                <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
                    {projects.map((project, i) => (
                        <ProjectCard key={project.name} project={project} index={i} inView={inView} />
                    ))}
                </div>
            </div>
        </section>
    )
}
