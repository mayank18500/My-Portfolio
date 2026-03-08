import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: -100, y: -100 })
    const [trail, setTrail] = useState({ x: -100, y: -100 })
    const [clicking, setClicking] = useState(false)
    const [hovering, setHovering] = useState(false)

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY })
        }
        const onMouseDown = () => setClicking(true)
        const onMouseUp = () => setClicking(false)

        // Check if hovering over interactive elements
        const onMouseOver = (e: MouseEvent) => {
            const el = e.target as HTMLElement
            const isInteractive = ['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(el.tagName) ||
                el.closest('a, button, [role="button"]')
            setHovering(!!isInteractive)
        }

        window.addEventListener('mousemove', onMove)
        window.addEventListener('mousedown', onMouseDown)
        window.addEventListener('mouseup', onMouseUp)
        window.addEventListener('mouseover', onMouseOver)
        return () => {
            window.removeEventListener('mousemove', onMove)
            window.removeEventListener('mousedown', onMouseDown)
            window.removeEventListener('mouseup', onMouseUp)
            window.removeEventListener('mouseover', onMouseOver)
        }
    }, [])

    // Smooth trailing dot
    useEffect(() => {
        let animId: number
        const lerp = (a: number, b: number, t: number) => a + (b - a) * t
        const update = () => {
            setTrail(prev => ({
                x: lerp(prev.x, pos.x, 0.12),
                y: lerp(prev.y, pos.y, 0.12),
            }))
            animId = requestAnimationFrame(update)
        }
        animId = requestAnimationFrame(update)
        return () => cancelAnimationFrame(animId)
    }, [pos])

    // Hide on touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

    return (
        <>
            {/* Outer ring — trails with lerp */}
            <div
                style={{
                    position: 'fixed',
                    left: trail.x,
                    top: trail.y,
                    width: hovering ? 48 : 36,
                    height: hovering ? 48 : 36,
                    borderRadius: '50%',
                    border: `1.5px solid ${hovering ? 'var(--violet-glow)' : 'var(--blue-electric)'}`,
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                    zIndex: 99999,
                    opacity: clicking ? 0.5 : 0.6,
                    transition: 'width 0.2s, height 0.2s, border-color 0.2s, opacity 0.1s',
                    boxShadow: hovering
                        ? '0 0 12px rgba(168,85,247,0.4)'
                        : '0 0 8px rgba(0,212,255,0.3)',
                    mixBlendMode: 'screen',
                }}
            />
            {/* Inner dot — snaps instantly */}
            <div
                style={{
                    position: 'fixed',
                    left: pos.x,
                    top: pos.y,
                    width: clicking ? 3 : 5,
                    height: clicking ? 3 : 5,
                    borderRadius: '50%',
                    background: hovering ? 'var(--violet-glow)' : 'var(--blue-electric)',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                    zIndex: 99999,
                    transition: 'width 0.1s, height 0.1s, background 0.2s',
                    boxShadow: `0 0 6px ${hovering ? 'var(--violet-glow)' : 'var(--blue-electric)'}`,
                    mixBlendMode: 'screen',
                }}
            />
        </>
    )
}
