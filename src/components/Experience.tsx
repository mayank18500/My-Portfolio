import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Experience() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const inView = useInView(sectionRef, { once: true, margin: '-100px' })

    const certs = [
        { title: 'Full Stack Web Development' },
        { title: 'React — The Complete Guide' },
        { title: 'NodeJS, Express & MongoDB' },
        { title: 'SQL & Database Design' }
    ]

    return (
        <section id="experience" style={{
            padding: '6rem 0',
            position: 'relative',
            background: '#ecd8b0',
            backgroundImage: "url('/Design/d13.svg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderBottom: '1px solid rgba(139, 80, 40, 0.15)',
        }}>
            <div className="section-wrapper" ref={sectionRef}>

                {/* 1:1 Split Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 1fr',
                    gap: '4rem',
                    alignItems: 'start',
                }} className="about-grid">

                    {/* Left Column: Experience details */}
                    <motion.div
                        initial={{ opacity: 0, y: 45 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
                    >
                        <h2 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '2.8rem',
                            fontStyle: 'italic',
                            fontWeight: 900,
                            color: 'var(--brown-dark)',
                            marginBottom: '2rem',
                            borderBottom: '2.5px solid rgba(139, 80, 40, 0.2)',
                            paddingBottom: '0.5rem',
                        }}>
                            Experience
                        </h2>

                        <div style={{
                            background: 'rgba(250, 245, 233, 0.85)',
                            border: '1.5px solid #8b5e3c',
                            borderRadius: '8px',
                            padding: '2.5rem',
                            boxShadow: '0 8px 24px rgba(92, 51, 23, 0.15)',
                        }}>
                            <span style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.75rem',
                                color: 'var(--amber)',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.12em',
                                display: 'block',
                                marginBottom: '0.4rem',
                            }}>
                                SDE Intern — Full-Stack Developer
                            </span>

                            <h3 style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: '1.75rem',
                                color: 'var(--brown-dark)',
                                fontWeight: 800,
                                marginBottom: '0.2rem',
                            }}>
                                IQApex Labs
                            </h3>

                            <div style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.7rem',
                                color: 'var(--text-muted)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.04em',
                                marginBottom: '1.5rem',
                            }}>
                                Remote · Jan 2026 – May 2026
                            </div>

                            <ul style={{
                                listStyle: 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                                padding: 0,
                            }}>
                                {[
                                    'Building production-ready services for historic applications using React, Node.js, Express, and PostgreSQL.',
                                    'Designed and implemented secure REST APIs with JWT authentication and Role-Based Access Control (RBAC).',
                                    'Optimized heavy database queries and built containerized micro services with Docker.',
                                    'Collaborated with agile team members to scale robust client-facing platforms.',
                                    'Implemented automated testing frameworks (Jest and Mocha) to increase test coverage by 40%.',
                                ].map((point, idx) => (
                                    <li key={idx} style={{
                                        display: 'flex',
                                        gap: '0.75rem',
                                        alignItems: 'flex-start',
                                        color: 'var(--text-secondary)',
                                        fontSize: '0.98rem',
                                        lineHeight: 1.6,
                                    }}>
                                        <span style={{ color: 'var(--amber)', marginTop: '2px' }}>✦</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right Column: Certification cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 45 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1], delay: 0.15 }}
                    >
                        <h2 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '2.8rem',
                            fontStyle: 'italic',
                            fontWeight: 900,
                            color: 'var(--brown-dark)',
                            marginBottom: '2rem',
                            borderBottom: '2.5px solid rgba(139, 80, 40, 0.2)',
                            paddingBottom: '0.5rem',
                        }}>
                            Certification
                        </h2>

                        {/* 2x2 Grid of cert cards */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '1.25rem',
                        }} className="skills-grid">
                            {certs.map((c, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: [0.25, 0.8, 0.25, 1] }}
                                    whileHover={{ scale: 1.03, y: -4 }}
                                    style={{
                                        background: 'rgba(250, 245, 233, 0.9)',
                                        border: '1.5px solid #8b5e3c',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        boxShadow: '0 6px 18px rgba(92, 51, 23, 0.12)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <div style={{ width: '100%', height: '140px', overflow: 'hidden' }}>
                                        <img
                                            src="/certificates/-------.png"
                                            alt={c.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <h4 style={{
                                            fontFamily: 'var(--font-display)',
                                            fontSize: '0.92rem',
                                            fontWeight: 800,
                                            color: 'var(--brown-dark)',
                                            lineHeight: 1.3,
                                            margin: 0,
                                        }}>
                                            {c.title}
                                        </h4>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
