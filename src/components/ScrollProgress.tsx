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
                background: 'linear-gradient(90deg, var(--amber), var(--terracotta), var(--amber))',
                backgroundSize: '200% 100%',
                zIndex: 10000,
                boxShadow: '0 0 6px rgba(200,118,42,0.5)',
            }}
        />
    )
}
