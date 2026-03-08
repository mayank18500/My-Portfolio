import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
    const [visible, setVisible] = useState(true)
    const [phase, setPhase] = useState(0) // 0=logo, 1=bar filling, 2=exit

    useEffect(() => {
        // Phase 0 → 1: show logo briefly
        const t1 = setTimeout(() => setPhase(1), 400)
        // Phase 1 → 2: bar filled, trigger exit
        const t2 = setTimeout(() => setPhase(2), 1800)
        // Unmount after exit animation
        const t3 = setTimeout(() => setVisible(false), 2400)
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
    }, [])

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        background: 'var(--bg-primary)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '2.5rem',
                    }}
                >
                    {/* Grid bg */}
                    <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />

                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(3rem, 10vw, 6rem)',
                            color: 'var(--text-primary)',
                            letterSpacing: '0.1em',
                            textShadow: '0 0 40px rgba(0,212,255,0.4), 0 0 80px rgba(0,212,255,0.15)',
                            lineHeight: 1,
                        }}
                    >
                        MK
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.7rem',
                            color: 'var(--blue-electric)',
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase',
                        }}
                    >
                        mayank kumar
                    </motion.div>

                    {/* Progress bar track */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.3 }}
                        style={{
                            width: 'min(300px, 60vw)',
                            height: '1px',
                            background: 'rgba(0,212,255,0.1)',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        <motion.div
                            initial={{ width: '0%' }}
                            animate={phase >= 1 ? { width: '100%' } : { width: '0%' }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                position: 'absolute',
                                top: 0, left: 0, bottom: 0,
                                background: 'linear-gradient(90deg, var(--blue-electric), var(--violet-glow))',
                                boxShadow: '0 0 12px var(--blue-electric)',
                            }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ delay: 0.5, duration: 1.2, repeat: Infinity }}
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.6rem',
                            color: 'var(--text-muted)',
                            letterSpacing: '0.2em',
                            position: 'absolute',
                            bottom: '2rem',
                        }}
                    >
                        initializing portfolio...
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
