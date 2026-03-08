import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Briefcase, CheckCircle } from 'lucide-react'

const experiences = [
    {
        company: 'IQApex Labs',
        role: 'SDE Intern — Full Stack Developer',
        period: 'Jan 2026 – Present',
        location: 'Remote',
        points: [
            'Building production-grade full-stack applications using React, Node.js, Express, and PostgreSQL',
            'Designed and implemented secure REST APIs with JWT authentication and Role-Based Access Control (RBAC)',
            'Integrated image uploads via Cloudinary and optimized asset delivery pipelines',
            'Collaborated in agile sprints, participated in code reviews and feature planning sessions',
            'Deployed containerized services to Render and Vercel with zero-downtime strategies',
        ],
        tech: ['React', 'Node.js', 'PostgreSQL', 'JWT', 'RBAC', 'Cloudinary', 'Express'],
    },
]

export default function Experience() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const inView = useInView(sectionRef, { once: true, margin: '-100px' })

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start center', 'end center'],
    })

    const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

    return (
        <section id="experience" style={{ padding: '8rem 0', position: 'relative' }}>
            <div className="section-wrapper" ref={sectionRef}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '4rem' }}
                >
                    <p className="section-label" style={{ marginBottom: '0.75rem' }}>03. experience</p>
                    <h2 className="heading-lg" style={{
                        background: 'linear-gradient(135deg, var(--text-primary) 40%, var(--blue-electric))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        Journey
                    </h2>
                </motion.div>

                <div className="exp-timeline" style={{ position: 'relative', paddingLeft: '3rem' }}>
                    {/* SVG Timeline Line */}
                    <div style={{
                        position: 'absolute',
                        left: '0',
                        top: 0,
                        width: '2px',
                        height: '100%',
                        overflow: 'hidden',
                    }}>
                        {/* Background static line */}
                        <div style={{
                            position: 'absolute', inset: 0,
                            background: 'rgba(0,212,255,0.1)',
                        }} />
                        {/* Animated progressing line */}
                        <motion.div
                            style={{
                                position: 'absolute',
                                top: 0, left: 0, right: 0,
                                height: lineHeight,
                                background: 'linear-gradient(180deg, var(--blue-electric), var(--violet-glow))',
                                boxShadow: '0 0 10px var(--blue-electric)',
                            }}
                        />
                    </div>

                    {/* Timeline dot */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={inView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        style={{
                            position: 'absolute',
                            left: '-8px',
                            top: '1.5rem',
                            width: '18px', height: '18px',
                            borderRadius: '50%',
                            background: 'var(--blue-electric)',
                            boxShadow: '0 0 20px var(--blue-electric), 0 0 40px rgba(0,212,255,0.4)',
                            border: '3px solid var(--bg-primary)',
                            zIndex: 2,
                        }}
                    />

                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 40, rotateY: 15 }}
                            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                            transition={{ delay: 0.3 + i * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            style={{ marginBottom: '3rem', perspective: '1000px' }}
                        >
                            <div className="glass-card" style={{ padding: '2rem' }}>
                                {/* Header */}
                                <div className="exp-card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                            <Briefcase size={16} color="var(--blue-electric)" />
                                            <h3 style={{
                                                fontFamily: 'var(--font-body)',
                                                fontSize: '1.3rem',
                                                fontWeight: 700,
                                                color: 'var(--text-primary)',
                                            }}>{exp.role}</h3>
                                        </div>
                                        <div style={{
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.9rem',
                                            color: 'var(--blue-electric)',
                                            marginBottom: '0.25rem',
                                        }}>{exp.company}</div>
                                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                                            {exp.location}
                                        </div>
                                    </div>
                                    <div style={{
                                        padding: '0.35rem 0.875rem',
                                        border: '1px solid rgba(0,212,255,0.25)',
                                        borderRadius: '100px',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.72rem',
                                        color: 'var(--blue-electric)',
                                        background: 'rgba(0,212,255,0.06)',
                                        whiteSpace: 'nowrap',
                                    }}>
                                        {exp.period}
                                    </div>
                                </div>

                                {/* Bullet points */}
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                    {exp.points.map((point, j) => (
                                        <motion.li
                                            key={j}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={inView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 0.6 + j * 0.08, duration: 0.4 }}
                                            style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}
                                        >
                                            <CheckCircle size={14} color="var(--blue-electric)" style={{ marginTop: '2px', flexShrink: 0 }} />
                                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>{point}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Tech chips */}
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    {exp.tech.map(tech => (
                                        <span key={tech} style={{
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.68rem',
                                            padding: '0.2rem 0.6rem',
                                            border: '1px solid rgba(124,58,237,0.3)',
                                            borderRadius: '3px',
                                            color: 'var(--violet-glow)',
                                            background: 'rgba(124,58,237,0.06)',
                                            letterSpacing: '0.05em',
                                        }}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
