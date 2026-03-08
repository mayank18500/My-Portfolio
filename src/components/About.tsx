import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Cpu, Globe, Layers, Trophy, Star } from 'lucide-react'

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

const stats = [
    { icon: Code2, value: '3+', label: 'Projects', color: '#00d4ff' },
    { icon: Star, value: '1490', label: 'LeetCode', color: '#f59e0b' },
    { icon: Trophy, value: '1', label: 'Hackathon Win', color: '#a855f7' },
    { icon: Globe, value: '2+', label: 'APIs Built', color: '#10b981' },
]

export default function About() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="about" style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
            <div className="section-wrapper">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-label" style={{ marginBottom: '0.75rem' }}>01. about</p>
                    <h2 className="heading-lg" style={{
                        background: 'linear-gradient(135deg, var(--text-primary) 40%, var(--blue-electric))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '3rem',
                    }}>The Story</h2>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', marginBottom: '3.5rem' }}
                >
                    {stats.map(({ icon: Icon, value, label, color }, i) => (
                        <motion.div
                            key={label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                            whileHover={{ y: -4, scale: 1.03 }}
                            style={{
                                padding: '1.25rem', textAlign: 'center',
                                background: 'var(--bg-card)', border: `1px solid ${color}20`,
                                borderRadius: '4px', backdropFilter: 'blur(10px)',
                            }}
                        >
                            <div style={{
                                width: 36, height: 36, borderRadius: '8px',
                                background: `${color}15`, border: `1px solid ${color}25`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                margin: '0 auto 0.75rem',
                            }}>
                                <Icon size={16} color={color} />
                            </div>
                            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color, letterSpacing: '0.05em', lineHeight: 1, textShadow: `0 0 15px ${color}60` }}>{value}</div>
                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.3rem' }}>{label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
                    {/* Left — avatar + text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Profile photo */}
                        <div style={{ position: 'relative', width: 'fit-content', marginBottom: '2rem' }}>
                            <div style={{
                                width: 120, height: 120,
                                borderRadius: '12px',
                                overflow: 'hidden',
                                border: '2px solid rgba(0,212,255,0.25)',
                                boxShadow: '0 0 30px rgba(0,212,255,0.2), 0 0 60px rgba(0,212,255,0.08)',
                            }}>
                                <img
                                    src="/avatar.png"
                                    alt="Mayank Kumar"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            {/* Online indicator */}
                            <div style={{
                                position: 'absolute', bottom: 8, right: -6,
                                width: 14, height: 14, borderRadius: '50%',
                                background: '#00ff88', border: '2px solid var(--bg-primary)',
                                boxShadow: '0 0 8px #00ff88',
                            }} />
                        </div>

                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                            I'm a <span style={{ color: 'var(--blue-electric)', fontWeight: 600 }}>full-stack developer</span> who loves turning complex problems into elegant, scalable solutions. Currently interning at{' '}
                            <span style={{ color: 'var(--violet-glow)', fontWeight: 600 }}>IQApex Labs</span>, where I build production systems that real users rely on.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '2rem' }}>
                            My stack centers around the <span style={{ color: 'var(--blue-electric)' }}>MERN ecosystem</span> — REST APIs, JWT/RBAC security, containerized deployments. I obsess over code quality and shipping features that matter.
                        </p>

                        {/* Trait chips */}
                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                            {[
                                { icon: Code2, label: 'Clean Code' },
                                { icon: Layers, label: 'System Design' },
                                { icon: Globe, label: 'REST APIs' },
                                { icon: Cpu, label: 'RBAC & Security' },
                            ].map(({ icon: Icon, label }) => (
                                <div key={label} style={{
                                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                                    padding: '0.4rem 0.9rem', border: '1px solid var(--border)',
                                    borderRadius: '4px', fontFamily: 'var(--font-mono)',
                                    fontSize: '0.72rem', color: 'var(--text-secondary)',
                                    background: 'rgba(0,212,255,0.04)', letterSpacing: '0.05em',
                                }}>
                                    <Icon size={12} color="var(--blue-electric)" />
                                    {label}
                                </div>
                            ))}
                        </div>

                        {/* GitHub Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                                // GitHub
                            </p>

                            {/* Reliable shields.io badges */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                                {[
                                    {
                                        label: 'GitHub Followers',
                                        src: 'https://img.shields.io/github/followers/mayank18500?label=Followers&style=flat-square&color=00d4ff&labelColor=0d1117&logo=github&logoColor=white',
                                    },
                                    {
                                        label: 'Public Repos',
                                        src: 'https://img.shields.io/badge/Repos-View%20on%20GitHub-0d1117?style=flat-square&logo=github&logoColor=00d4ff',
                                    },
                                    {
                                        label: 'LeetCode',
                                        src: 'https://img.shields.io/badge/LeetCode-1490%20Rating-f59e0b?style=flat-square&logo=leetcode&logoColor=f59e0b&labelColor=0d1117',
                                    },
                                ].map(({ label, src }) => (
                                    <img
                                        key={label}
                                        src={src}
                                        alt={label}
                                        style={{ height: 22, borderRadius: 4 }}
                                        loading="lazy"
                                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                                    />
                                ))}
                            </div>

                            <a
                                href="https://github.com/mayank18500"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                    fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                                    color: 'var(--blue-electric)', textDecoration: 'none',
                                    letterSpacing: '0.08em',
                                    border: '1px solid rgba(0,212,255,0.2)',
                                    padding: '0.35rem 0.875rem',
                                    borderRadius: '4px',
                                    background: 'rgba(0,212,255,0.04)',
                                    transition: 'border-color 0.2s, background 0.2s',
                                }}
                                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,212,255,0.5)'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0,212,255,0.08)' }}
                                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,212,255,0.2)'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0,212,255,0.04)' }}
                            >
                                → github.com/mayank18500
                            </a>
                        </motion.div>

                    </motion.div>

                    {/* Right — code editor */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="glass-card"
                        style={{ overflow: 'hidden' }}
                    >
                        {/* Editor titlebar */}
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: '0.5rem',
                            padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)',
                            background: 'rgba(0,0,0,0.3)',
                        }}>
                            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
                            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
                            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28ca42' }} />
                            <span style={{ marginLeft: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>about.ts</span>
                        </div>

                        <div className="code-editor-body" style={{ padding: '1.5rem 1.25rem', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', lineHeight: 1.9 }}>
                            {codeLines.map((line, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                                    style={{ display: 'flex', gap: '1rem', alignItems: 'baseline' }}
                                >
                                    <span style={{ color: 'var(--text-muted)', userSelect: 'none', minWidth: '1.5rem', fontSize: '0.65rem' }}>{i + 1}</span>
                                    {line.type === 'comment' && <span style={{ color: '#4a6080' }}>{line.text}</span>}
                                    {line.type === 'keyword' && (
                                        <span>
                                            <span style={{ color: '#c792ea' }}>{line.text} </span>
                                            <span style={{ color: '#82aaff' }}>developer</span>
                                            <span style={{ color: 'var(--text-secondary)' }}> {line.after}</span>
                                        </span>
                                    )}
                                    {line.type === 'field' && (
                                        <span>
                                            <span style={{ color: '#f78c6c' }}>{line.key}</span>
                                            <span style={{ color: 'var(--text-secondary)' }}>: </span>
                                            <span style={{ color: '#c3e88d' }}>{line.value}</span>
                                            <span style={{ color: 'var(--text-secondary)' }}>,</span>
                                        </span>
                                    )}
                                    {line.type === 'bracket' && <span style={{ color: 'var(--text-secondary)' }}>{line.text}</span>}
                                </motion.div>
                            ))}
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>{codeLines.length + 1}</span>
                                <motion.span
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    style={{ display: 'inline-block', width: 8, height: 16, background: 'var(--blue-electric)', borderRadius: 1 }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
