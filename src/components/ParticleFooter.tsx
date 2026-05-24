import { useEffect, useRef, useCallback } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    size: number
    opacity: number
    color: string
}

const COLORS = ['#c8762a', '#a0522d', '#b8860b', '#5a6e3a', '#8b5e3c']

export default function ParticleFooter() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const mouseRef = useRef({ x: 0, y: 0 })
    const particlesRef = useRef<Particle[]>([])
    const animFrameRef = useRef<number>(0)

    const initParticles = useCallback((canvas: HTMLCanvasElement) => {
        const count = Math.floor((canvas.width * canvas.height) / 12000)
        particlesRef.current = Array.from({ length: Math.min(count, 80) }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.5 + 0.1,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
        }))
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')!

        const resize = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
            initParticles(canvas)
        }

        resize()
        window.addEventListener('resize', resize)

        const handleMouse = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            }
        }

        canvas.addEventListener('mousemove', handleMouse)

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            const mouse = mouseRef.current

            particlesRef.current.forEach(p => {
                const dx = mouse.x - p.x
                const dy = mouse.y - p.y
                const dist = Math.sqrt(dx * dx + dy * dy)

                if (dist < 120) {
                    const force = (120 - dist) / 120
                    p.vx -= (dx / dist) * force * 0.15
                    p.vy -= (dy / dist) * force * 0.15
                }

                p.vx *= 0.98
                p.vy *= 0.98
                p.x += p.vx
                p.y += p.vy

                if (p.x < 0) p.x = canvas.width
                if (p.x > canvas.width) p.x = 0
                if (p.y < 0) p.y = canvas.height
                if (p.y > canvas.height) p.y = 0

                // Draw particle
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = p.color + Math.round(p.opacity * 255).toString(16).padStart(2, '0')
                ctx.fill()

                // Draw connections
                particlesRef.current.forEach(p2 => {
                    const dx2 = p.x - p2.x
                    const dy2 = p.y - p2.y
                    const d2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)
                    if (d2 < 80 && d2 > 0) {
                        ctx.beginPath()
                        ctx.moveTo(p.x, p.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.strokeStyle = p.color + Math.round((1 - d2 / 80) * 0.25 * 255).toString(16).padStart(2, '0')
                        ctx.lineWidth = 0.5
                        ctx.stroke()
                    }
                })
            })

            animFrameRef.current = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', resize)
            canvas.removeEventListener('mousemove', handleMouse)
            cancelAnimationFrame(animFrameRef.current)
        }
    }, [initParticles])

    return (
        <footer style={{
            position: 'relative',
            overflow: 'hidden',
            borderTop: '1px solid var(--border)',
            background: 'linear-gradient(180deg, #e8d5ad 0%, #d4b886 100%)',
        }}>
            <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                }}
            />

            <div style={{
                position: 'relative', zIndex: 1,
                maxWidth: '1200px', margin: '0 auto',
                padding: '4rem 2rem 2.5rem',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: '2rem',
                minHeight: '220px',
            }}>
                {/* Logo */}
                <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem',
                    color: 'var(--amber)',
                    letterSpacing: '0.05em',
                    fontWeight: 700,
                    fontStyle: 'italic',
                }}>
                    Mayank Kumar
                </div>

                {/* Socials */}
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    {[
                        { href: 'https://github.com/mayank18500', Icon: Github, label: 'GitHub' },
                        { href: 'https://linkedin.com/in/mayank-kumar', Icon: Linkedin, label: 'LinkedIn' },
                        { href: 'mailto:mayank01082005@gmail.com', Icon: Mail, label: 'Email' },
                    ].map(({ href, Icon, label }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith('mailto') ? undefined : '_blank'}
                            rel="noreferrer"
                            aria-label={label}
                            style={{
                                width: 42, height: 42,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                border: '1px solid var(--border)',
                                borderRadius: '6px',
                                color: 'var(--text-muted)',
                                background: 'rgba(250, 245, 233, 0.6)',
                                transition: 'all 0.3s ease',
                                backdropFilter: 'blur(8px)',
                            }}
                            onMouseEnter={e => {
                                const el = e.currentTarget as HTMLAnchorElement
                                el.style.borderColor = 'var(--amber)'
                                el.style.color = 'var(--amber)'
                                el.style.boxShadow = '0 0 12px rgba(200,118,42,0.25)'
                                el.style.background = 'rgba(200,118,42,0.08)'
                            }}
                            onMouseLeave={e => {
                                const el = e.currentTarget as HTMLAnchorElement
                                el.style.borderColor = 'var(--border)'
                                el.style.color = 'var(--text-muted)'
                                el.style.boxShadow = 'none'
                                el.style.background = 'rgba(250, 245, 233, 0.6)'
                            }}
                        >
                            <Icon size={18} />
                        </a>
                    ))}
                </div>

                {/* Divider */}
                <div style={{ width: '100%', height: '1px', background: 'var(--border)' }} />

                {/* Copyright */}
                <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.1em',
                    textAlign: 'center',
                    lineHeight: 1.7,
                }}>
                    <span>Designed & Built by </span>
                    <span style={{ color: 'var(--amber)', fontWeight: 600 }}>Mayank Kumar</span>
                    <br />
                    <span>© {new Date().getFullYear()} · Kolkata, India</span>
                </div>
            </div>
        </footer>
    )
}
