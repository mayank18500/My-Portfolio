import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section
            id="about"
            style={{
                padding: '6rem 0',
                position: 'relative',
                overflow: 'hidden',
                background: '#faf5e9',
                backgroundImage: "url('/Design/d13.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderBottom: '1px solid rgba(139, 80, 40, 0.15)',
            }}
        >
            {/* Ambient gold glow */}
            <div style={{
                position: 'absolute', top: '15%', right: '-10%',
                width: '450px', height: '450px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(212,160,23,0.06) 0%, transparent 70%)',
                filter: 'blur(50px)', pointerEvents: 'none',
            }} />

            <div className="section-wrapper" ref={ref}>
                
                {/* Header row: "About: I am a FullStack Developer & a freelancer." */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ 
                        display: 'flex', 
                        alignItems: 'baseline', 
                        gap: '1.5rem', 
                        flexWrap: 'wrap',
                        marginBottom: '3rem',
                        borderBottom: '2px solid rgba(139, 80, 40, 0.2)',
                        paddingBottom: '1rem',
                    }}
                >
                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 900,
                        color: 'var(--brown-dark)',
                        textDecoration: 'underline',
                        margin: 0,
                    }}>
                        About:
                    </h2>
                    <span style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                        fontStyle: 'italic',
                        color: 'var(--brown-mid)',
                        fontWeight: 600,
                    }}>
                        I am a FullStack Developer & a freelancer.
                    </span>
                </motion.div>

                {/* Split grid */}
                <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center' }}>
                    
                    {/* Left: Square Profile photo */}
                    <motion.div
                        initial={{ opacity: 0, y: 45 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <div style={{
                            width: '300px',
                            height: '300px',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            border: '6px solid #d4b874',
                            boxShadow: '0 15px 35px rgba(92, 51, 23, 0.25)',
                        }}>
                            <img
                                src="/My_Photos/photo2.png"
                                alt="Mayank Kumar in front of building"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </motion.div>

                    {/* Right: Bio & chips */}
                    <motion.div
                        initial={{ opacity: 0, y: 45 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.35, duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
                    >
                        <p style={{ 
                            color: 'var(--text-primary)', 
                            lineHeight: 1.8, 
                            fontSize: '1.05rem', 
                            fontFamily: 'var(--font-body)',
                            fontWeight: 500,
                            marginBottom: '1.5rem',
                            textAlign: 'justify',
                        }}>
                            I'm a <strong>full-stack developer</strong> who loves turning complex problems into elegant, scalable solutions. Currently interning at <strong>IQApex Labs</strong>, where I build production systems that real users rely on.
                        </p>
                        <p style={{ 
                            color: 'var(--text-secondary)', 
                            lineHeight: 1.8, 
                            fontSize: '1.02rem', 
                            fontFamily: 'var(--font-body)',
                            fontWeight: 500,
                            marginBottom: '2.5rem',
                            textAlign: 'justify',
                        }}>
                            My stack centers around the <strong>MERN ecosystem</strong> — REST APIs, JWT/RBAC security, containerized deployments. I obsess over code quality and shipping features that matter.
                        </p>

                        {/* Trait chips styled like small scrolls */}
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            {[
                                'Clean Code',
                                'System Design',
                                'REST APIs',
                                'RBAC & Security',
                            ].map((label) => (
                                <div key={label} className="parchment-tag" style={{
                                    padding: '0.6rem 1.4rem', 
                                    border: '2px solid #8b5e3c',
                                    borderRadius: '4px', 
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '0.95rem', 
                                    fontWeight: 700,
                                    color: '#2c1810',
                                    background: 'linear-gradient(135deg, #f5e3b5 0%, #ecd59f 100%)',
                                    boxShadow: '0 4px 10px rgba(44, 24, 16, 0.15)',
                                    cursor: 'default',
                                }}>
                                    {label}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
