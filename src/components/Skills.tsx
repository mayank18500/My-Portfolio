import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
    { name: 'React', emoji: '⚛️' },
    { name: 'TypeScript', emoji: '🔷' },
    { name: 'Node.js', emoji: '🟩' },
    { name: 'Express', emoji: '🚂' },
    { name: 'PostgreSQL', emoji: '🐘' },
    { name: 'MongoDB', emoji: '🍃' },
    { name: 'JWT/RBAC', emoji: '🔐' },
    { name: 'Docker', emoji: '🐳' },
    { name: 'Git', emoji: '🌿' },
    { name: 'Postman', emoji: '📬' },
    { name: 'Java', emoji: '☕' },
    { name: 'Python', emoji: '🐍' },
]

const codeLines = [
    { type: 'comment', text: '// about.ts — Mayank Kumar' },
    { type: 'keyword', text: 'const', after: ' developer = {' },
    { type: 'field', key: '  name', value: '"Mayank Kumar"' },
    { type: 'field', key: '  role', value: '"SDE Intern · Full-Stack Dev"' },
    { type: 'field', key: '  institution', value: '"2nd Year IT Student"' },
    { type: 'field', key: '  company', value: '"IQApex Labs"' },
    { type: 'field', key: '  location', value: '"Kolkata, India 🇮🇳"' },
    { type: 'field', key: '  passion', value: '["Building", "Shipping", "Learning"]' },
    { type: 'bracket', text: '}' },
]

const MARQUEE_ITEMS = [...skills, ...skills, ...skills]

export default function Skills() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="skills" className="split-white-section" style={{
            padding: '6rem 0',
            position: 'relative',
            background: '#ffffff',
        }}>
            <div className="section-wrapper" ref={ref}>
                
                {/* 1:1 Split Grid Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '3rem',
                    alignItems: 'start',
                }} className="about-grid">
                    
                    {/* Left Column: Tech Stack Flow */}
                    <motion.div
                        initial={{ opacity: 0, y: 45 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
                        className="split-col-card"
                    >
                        <h2 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '2.5rem',
                            fontStyle: 'italic',
                            fontWeight: 800,
                            color: 'var(--brown-dark)',
                            marginBottom: '2rem',
                            borderBottom: '2.5px solid rgba(139, 80, 40, 0.15)',
                            paddingBottom: '0.75rem',
                        }}>
                            Tech Stack
                        </h2>

                        <p style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '1rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.7,
                            marginBottom: '2.5rem',
                        }}>
                            Highly proficient in modern web engineering tools, building resilient server-side components, modular UI architecture, and robust automated workflows.
                        </p>

                        {/* Interactive flow flow marquee */}
                        <div style={{
                            borderTop: '1.5px solid var(--border)',
                            borderBottom: '1.5px solid var(--border)',
                            background: 'rgba(242, 230, 204, 0.35)',
                            padding: '1rem 0',
                            overflow: 'hidden',
                            borderRadius: '8px',
                        }}>
                            <div className="marquee-outer">
                                <div className="marquee-inner" style={{ animationDuration: '24s' }}>
                                    {MARQUEE_ITEMS.map((skill, i) => (
                                        <span
                                            key={i}
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                padding: '0.4rem 1.4rem',
                                                fontFamily: 'var(--font-display)',
                                                fontSize: '1.05rem',
                                                color: 'var(--text-primary)',
                                                fontWeight: 700,
                                                whiteSpace: 'nowrap',
                                            }}
                                        >
                                            <span style={{ fontSize: '1.2rem' }}>{skill.emoji}</span>
                                            {skill.name}
                                            <span style={{ color: 'var(--amber)', margin: '0 0.5rem' }}>◆</span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: IDE with my info */}
                    <motion.div
                        initial={{ opacity: 0, y: 45 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.8, 0.25, 1] }}
                        className="split-col-card"
                    >
                        <h2 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '2.5rem',
                            fontStyle: 'italic',
                            fontWeight: 800,
                            color: 'var(--brown-dark)',
                            marginBottom: '2rem',
                            borderBottom: '2.5px solid rgba(139, 80, 40, 0.15)',
                            paddingBottom: '0.75rem',
                        }}>
                            Profile Overview
                        </h2>

                        {/* Interactive IDE component */}
                        <div style={{
                            background: '#1e1510',
                            border: '1.5px solid rgba(139,80,40,0.25)',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            boxShadow: '0 8px 30px rgba(92,51,23,0.18)',
                        }}>
                            {/* Editor titlebar */}
                            <div style={{
                                display: 'flex', alignItems: 'center', gap: '0.5rem',
                                padding: '0.75rem 1rem', borderBottom: '1px solid rgba(200,118,42,0.12)',
                                background: '#150f0b',
                            }}>
                                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
                                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
                                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28ca42' }} />
                                <span style={{ marginLeft: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#8b6a4a' }}>about.ts</span>
                            </div>

                            <div className="code-editor-body" style={{ padding: '1.5rem 1.25rem', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', lineHeight: 1.9 }}>
                                {codeLines.map((line, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                                        style={{ display: 'flex', gap: '1rem', alignItems: 'baseline' }}
                                    >
                                        <span style={{ color: '#5c3d25', userSelect: 'none', minWidth: '1.5rem', fontSize: '0.65rem' }}>{i + 1}</span>
                                        {line.type === 'comment' && <span style={{ color: '#6b8050' }}>{line.text}</span>}
                                        {line.type === 'keyword' && (
                                            <span>
                                                <span style={{ color: '#d4845a' }}>{line.text} </span>
                                                <span style={{ color: '#e0b865' }}>developer</span>
                                                <span style={{ color: '#c8c0a0' }}> {line.after}</span>
                                            </span>
                                        )}
                                        {line.type === 'field' && (
                                            <span>
                                                <span style={{ color: '#d4a06a' }}>{line.key}</span>
                                                <span style={{ color: '#c8c0a0' }}>: </span>
                                                <span style={{ color: '#9ebf7a' }}>{line.value}</span>
                                                <span style={{ color: '#c8c0a0' }}>,</span>
                                            </span>
                                        )}
                                        {line.type === 'bracket' && <span style={{ color: '#c8c0a0' }}>{line.text}</span>}
                                    </motion.div>
                                ))}
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <span style={{ color: '#5c3d25', fontSize: '0.65rem' }}>{codeLines.length + 1}</span>
                                    <motion.span
                                        animate={{ opacity: [1, 0, 1] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                        style={{ display: 'inline-block', width: 8, height: 16, background: 'var(--amber)', borderRadius: 1 }}
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
