import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
    { name: 'React', category: 'frontend', icon: '⚛️' },
    { name: 'TypeScript', category: 'frontend', icon: '🔷' },
    { name: 'Node.js', category: 'backend', icon: '🟩' },
    { name: 'Express', category: 'backend', icon: '🚂' },
    { name: 'PostgreSQL', category: 'database', icon: '🐘' },
    { name: 'MongoDB', category: 'database', icon: '🍃' },
    { name: 'JWT/RBAC', category: 'backend', icon: '🔐' },
    { name: 'Docker', category: 'devops', icon: '🐳' },
    { name: 'Git', category: 'tools', icon: '🌿' },
    { name: 'Postman', category: 'tools', icon: '📬' },
    { name: 'Vercel', category: 'devops', icon: '▲' },
    { name: 'Render', category: 'devops', icon: '☁️' },
    { name: 'Cloudinary', category: 'tools', icon: '🖼️' },
    { name: 'Java', category: 'language', icon: '☕' },
    { name: 'Python', category: 'language', icon: '🐍' },
    { name: 'C', category: 'language', icon: '⌨️' },
]

const categoryColors: Record<string, string> = {
    frontend: '#00d4ff',
    backend: '#a855f7',
    database: '#10b981',
    devops: '#f59e0b',
    tools: '#ec4899',
    language: '#6366f1',
}

function SkillCard({ skill, index, inView }: { skill: typeof skills[0]; index: number; inView: boolean }) {
    const [mouse, setMouse] = useState({ x: 0, y: 0 })
    const [hovered, setHovered] = useState(false)
    const cardRef = useRef<HTMLDivElement>(null)

    const fromLeft = index % 2 === 0

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = cardRef.current!.getBoundingClientRect()
        setMouse({
            x: e.clientX - rect.left - rect.width / 2,
            y: e.clientY - rect.top - rect.height / 2,
        })
    }

    const color = categoryColors[skill.category] || '#00d4ff'

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, x: fromLeft ? -60 : 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => { setHovered(false); setMouse({ x: 0, y: 0 }) }}
            whileHover={{ scale: 1.06 }}
            style={{
                position: 'relative',
                padding: '1.25rem 1.5rem',
                background: hovered ? `rgba(${hexToRgb(color)}, 0.06)` : 'var(--bg-card)',
                border: `1px solid ${hovered ? color + '60' : 'var(--border)'}`,
                borderRadius: '4px',
                cursor: 'default',
                backdropFilter: 'blur(10px)',
                overflow: 'hidden',
                transition: 'background 0.3s, border-color 0.3s',
            }}
        >
            {/* Magnetic glow that follows mouse */}
            {hovered && (
                <div style={{
                    position: 'absolute',
                    width: '80px', height: '80px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${color}40, transparent 70%)`,
                    left: `calc(50% + ${mouse.x * 0.5}px - 40px)`,
                    top: `calc(50% + ${mouse.y * 0.5}px - 40px)`,
                    pointerEvents: 'none',
                    transition: 'left 0.1s, top 0.1s',
                }} />
            )}

            <div style={{ position: 'relative', zIndex: 1 }}>
                <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.5rem' }}>{skill.icon}</span>
                <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    color: hovered ? color : 'var(--text-primary)',
                    fontWeight: 600,
                    transition: 'color 0.3s',
                    letterSpacing: '0.05em',
                }}>{skill.name}</span>
                <div style={{
                    marginTop: '0.25rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: color,
                    opacity: 0.7,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                }}>{skill.category}</div>
            </div>
        </motion.div>
    )
}

function hexToRgb(hex: string): string {
    const clean = hex.replace('#', '')
    const r = parseInt(clean.substring(0, 2), 16)
    const g = parseInt(clean.substring(2, 4), 16)
    const b = parseInt(clean.substring(4, 6), 16)
    return `${r}, ${g}, ${b}`
}

export default function Skills() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="skills" style={{
            padding: '8rem 0',
            position: 'relative',
            background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%)',
        }}>
            <div className="section-wrapper">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '4rem' }}
                >
                    <p className="section-label" style={{ marginBottom: '0.75rem' }}>02. tech stack</p>
                    <h2 className="heading-lg" style={{
                        background: 'linear-gradient(135deg, var(--text-primary) 40%, var(--violet-glow))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        Arsenal
                    </h2>
                </motion.div>

                <div className="skills-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
                    gap: '1rem',
                }}>
                    {skills.map((skill, i) => (
                        <SkillCard key={skill.name} skill={skill} index={i} inView={inView} />
                    ))}
                </div>

            </div>
        </section>
    )
}
