import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, Code2, Star, GitBranch } from 'lucide-react'

function AnimatedCounter({ target, duration = 2 }: { target: number; duration?: number }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    useEffect(() => {
        if (!inView) return
        let start = 0
        const step = target / (duration * 60)
        const timer = setInterval(() => {
            start += step
            if (start >= target) {
                setCount(target)
                clearInterval(timer)
            } else {
                setCount(Math.floor(start))
            }
        }, 1000 / 60)
        return () => clearInterval(timer)
    }, [inView, target, duration])

    return <span ref={ref}>{count}</span>
}

const achievements = [
    {
        icon: Trophy,
        title: 'Geekathon Hackathon Winner',
        badge: '🏆 Winner',
        description: 'Won the Geekathon hackathon by building a full-stack solution in 24 hours, judged on innovation, code quality, and scalability.',
        color: '#f59e0b',
        glow: 'rgba(245, 158, 11, 0.2)',
        isTrophy: true,
    },
    {
        icon: Code2,
        title: 'LeetCode Rating',
        badge: '⚡ 1490',
        description: 'Achieved a peak rating of 1490 on LeetCode through consistent competitive programming and data structure mastery.',
        color: '#00d4ff',
        glow: 'rgba(0, 212, 255, 0.15)',
        isCounter: true,
        counterValue: 1490,
    },
    {
        icon: Star,
        title: 'SIH 2025 Qualifier',
        badge: '🌟 National',
        description: 'Qualified for Smart India Hackathon 2025, competing against thousands of teams with an innovative government tech solution.',
        color: '#a855f7',
        glow: 'rgba(168, 85, 247, 0.15)',
    },
    {
        icon: GitBranch,
        title: 'Hacktoberfest Contributor',
        badge: '🎃 Open Source',
        description: 'Active open-source contributor during Hacktoberfest, merging multiple PRs across community repositories.',
        color: '#10b981',
        glow: 'rgba(16, 185, 129, 0.12)',
    },
]

export default function Achievements() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="achievements" style={{ padding: '8rem 0', position: 'relative' }}>
            <div className="section-wrapper" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '4rem' }}
                >
                    <p className="section-label" style={{ marginBottom: '0.75rem' }}>05. achievements</p>
                    <h2 className="heading-lg" style={{
                        background: 'linear-gradient(135deg, var(--text-primary) 40%, #f59e0b)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        Wins
                    </h2>
                </motion.div>

                <div className="achievements-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {achievements.map((ach, i) => {
                        const Icon = ach.icon
                        return (
                            <motion.div
                                key={ach.title}
                                initial={ach.isTrophy
                                    ? { opacity: 0, y: -60, scale: 0.8 }
                                    : { opacity: 0, y: 40 }}
                                animate={inView
                                    ? { opacity: 1, y: 0, scale: 1 }
                                    : {}}
                                transition={{
                                    delay: 0.2 + i * 0.12,
                                    duration: 0.7,
                                    ease: ach.isTrophy ? [0.34, 1.56, 0.64, 1] : [0.22, 1, 0.36, 1],
                                }}
                                whileHover={{ y: -6, scale: 1.02 }}
                                style={{
                                    padding: '2rem',
                                    background: 'var(--bg-card)',
                                    border: `1px solid ${ach.color}25`,
                                    borderRadius: '4px',
                                    backdropFilter: 'blur(12px)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'border-color 0.3s',
                                }}
                            >
                                {/* Glow blob */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-20px', right: '-20px',
                                    width: '120px', height: '120px',
                                    borderRadius: '50%',
                                    background: `radial-gradient(circle, ${ach.glow}, transparent 70%)`,
                                    pointerEvents: 'none',
                                }} />

                                {/* Icon */}
                                <motion.div
                                    animate={ach.isTrophy && inView ? { rotate: [0, -5, 5, -3, 3, 0] } : {}}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                    style={{
                                        width: 48, height: 48,
                                        borderRadius: '8px',
                                        background: `${ach.color}15`,
                                        border: `1px solid ${ach.color}30`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        marginBottom: '1.25rem',
                                    }}
                                >
                                    <Icon size={22} color={ach.color} />
                                </motion.div>

                                {/* Badge */}
                                <div style={{
                                    display: 'inline-block',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.65rem',
                                    color: ach.color,
                                    background: `${ach.color}12`,
                                    border: `1px solid ${ach.color}30`,
                                    borderRadius: '100px',
                                    padding: '0.2rem 0.65rem',
                                    marginBottom: '0.75rem',
                                    letterSpacing: '0.08em',
                                }}>{ach.badge}</div>

                                <h3 style={{
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    color: 'var(--text-primary)',
                                    marginBottom: '0.5rem',
                                    lineHeight: 1.3,
                                }}>{ach.title}</h3>

                                {/* LeetCode Counter */}
                                {ach.isCounter && (
                                    <div style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: '3rem',
                                        color: ach.color,
                                        letterSpacing: '0.05em',
                                        lineHeight: 1,
                                        marginBottom: '0.5rem',
                                        textShadow: `0 0 20px ${ach.color}80`,
                                    }}>
                                        <AnimatedCounter target={ach.counterValue!} />
                                    </div>
                                )}

                                <p style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.85rem',
                                    lineHeight: 1.6,
                                }}>{ach.description}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
