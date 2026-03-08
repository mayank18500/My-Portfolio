import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 })

    return (
        <motion.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                scaleX,
                transformOrigin: '0%',
                background: 'linear-gradient(90deg, var(--blue-electric), var(--violet-glow), var(--blue-electric))',
                backgroundSize: '200% 100%',
                zIndex: 10000,
                boxShadow: '0 0 8px var(--blue-electric), 0 0 16px rgba(0,212,255,0.3)',
            }}
        />
    )
}
