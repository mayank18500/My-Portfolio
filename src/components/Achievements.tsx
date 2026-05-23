import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const achievements = [
    {
        icon: '🏆',
        title: 'GeeksforGeeks Hackathon Winner',
        desc: 'Won first place in the regional hackathon by building a full-stack mental health focus application in a 36-hour sprint.',
    },
    {
        icon: '🎓',
        title: 'DSA 500+ Solved',
        desc: 'Solved 500+ problems on Leetcode, demonstrating strong problem-solving skills, data structures, and algorithmic efficiency.',
    },
    {
        icon: '💻',
        title: 'Web Dev & APIs Specialist',
        desc: 'Built robust backend APIs, optimized SQL queries, and scaled client-facing web applications at IQApex Labs.',
    },
    {
        icon: '🌐',
        title: 'Contributed to Git & React',
        desc: 'Active contributor in open-source projects, fixing issues and adding features for community libraries.',
    },
]

export default function Achievements() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="achievements" className="split-white-section" style={{
            padding: '6rem 0',
            position: 'relative',
            background: '#ffffff',
        }}>
            <div className="section-wrapper" ref={ref}>
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '4rem' }}
                >
                    <p className="section-label" style={{ marginBottom: '0.5rem' }}>05. achievements</p>
                    <div className="section-divider" />
                    <h2 className="heading-lg" style={{
                        color: 'var(--brown-dark)', fontStyle: 'italic',
                        marginTop: '1rem', marginBottom: '1.5rem',
                    }}>
                        Achievements
                    </h2>
                </motion.div>

                {/* 4-column layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '2rem',
                }} className="skills-grid">
                    {achievements.map((ach, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.15 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ y: -5 }}
                            style={{
                                padding: '2rem',
                                background: '#ffffff',
                                border: '1px solid rgba(139, 80, 40, 0.12)',
                                borderRadius: '12px',
                                boxShadow: '0 6px 20px rgba(92, 51, 23, 0.05)',
                                transition: 'all 0.3s ease',
                                textAlign: 'left',
                            }}
                            onMouseEnter={e => {
                                const el = e.currentTarget as HTMLDivElement
                                el.style.boxShadow = '0 12px 32px rgba(92, 51, 23, 0.1)'
                                el.style.borderColor = 'rgba(200, 118, 42, 0.25)'
                            }}
                            onMouseLeave={e => {
                                const el = e.currentTarget as HTMLDivElement
                                el.style.boxShadow = '0 6px 20px rgba(92, 51, 23, 0.05)'
                                el.style.borderColor = 'rgba(139, 80, 40, 0.12)'
                            }}
                        >
                            <span style={{
                                fontSize: '2.5rem',
                                display: 'block',
                                marginBottom: '1rem',
                            }}>
                                {ach.icon}
                            </span>
                            <h3 style={{
                                fontFamily: 'var(--font-display)',
                                fontStyle: 'italic',
                                fontSize: '1.35rem',
                                fontWeight: 800,
                                color: 'var(--brown-dark)',
                                marginBottom: '0.75rem',
                                lineHeight: 1.3,
                            }}>
                                {ach.title}
                            </h3>
                            <p style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.9rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.6,
                                margin: 0,
                            }}>
                                {ach.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
