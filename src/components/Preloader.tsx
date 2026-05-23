import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
    const [visible, setVisible] = useState(true)
    const [phase, setPhase] = useState(0) // 0=logo, 1=bar filling, 2=exit

    useEffect(() => {
        const t1 = setTimeout(() => setPhase(1), 400)
        const t2 = setTimeout(() => setPhase(2), 1800)
        const t3 = setTimeout(() => setVisible(false), 2400)
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
    }, [])

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.03 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        background: 'linear-gradient(160deg, #faf5e9 0%, #f2e6cc 50%, #e8d5ad 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '2rem',
                    }}
                >
                    {/* Subtle grid */}
                    <div style={{
                        position: 'absolute', inset: 0,
                        backgroundImage: `
                            linear-gradient(rgba(139,80,40,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(139,80,40,0.04) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px',
                        pointerEvents: 'none',
                    }} />

                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(3.5rem, 12vw, 7rem)',
                            color: 'var(--amber)',
                            fontStyle: 'italic',
                            fontWeight: 800,
                            lineHeight: 0.9,
                            letterSpacing: '0.02em',
                        }}
                    >
                        MK
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.85rem',
                            color: 'var(--text-secondary)',
                            letterSpacing: '0.25em',
                            textTransform: 'uppercase',
                            fontWeight: 500,
                        }}
                    >
                        Mayank Kumar
                    </motion.div>

                    {/* Progress bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.3 }}
                        style={{
                            width: 'min(260px, 55vw)',
                            height: '2px',
                            background: 'rgba(200, 118, 42, 0.15)',
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '2px',
                        }}
                    >
                        <motion.div
                            initial={{ width: '0%' }}
                            animate={phase >= 1 ? { width: '100%' } : { width: '0%' }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                position: 'absolute',
                                top: 0, left: 0, bottom: 0,
                                background: 'linear-gradient(90deg, var(--amber), var(--terracotta))',
                                boxShadow: '0 0 8px rgba(200,118,42,0.5)',
                                borderRadius: '2px',
                            }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.7, 0] }}
                        transition={{ delay: 0.6, duration: 1.4, repeat: Infinity }}
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.6rem',
                            color: 'var(--text-muted)',
                            letterSpacing: '0.2em',
                            position: 'absolute',
                            bottom: '2.5rem',
                        }}
                    >
                        Loading portfolio...
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
