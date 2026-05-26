import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award } from 'lucide-react'

// Concentric SVG Dashed Orbit Ring for Certification hover states
const CertificateOrbit = () => (
    <div className="cert-orbit-ring" style={{
        position: 'absolute',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        border: '1.2px dashed rgba(200, 118, 42, 0.45)',
        pointerEvents: 'none',
        opacity: 0,
        zIndex: 0,
        transition: 'opacity 0.4s ease, transform 0.4s ease'
    }} />
)

// Vintage filigree corner frames helper
const CornerOrnaments = () => (
    <>
        <div style={{ position: 'absolute', top: '8px', left: '8px', width: '20px', height: '20px', borderTop: '2px solid var(--amber)', borderLeft: '2px solid var(--amber)', pointerEvents: 'none', opacity: 0.6 }} />
        <div style={{ position: 'absolute', top: '13px', left: '13px', width: '3px', height: '3px', background: 'var(--gold)', borderRadius: '50%', pointerEvents: 'none', opacity: 0.6 }} />
        <div style={{ position: 'absolute', top: '8px', right: '8px', width: '20px', height: '20px', borderTop: '2px solid var(--amber)', borderRight: '2px solid var(--amber)', pointerEvents: 'none', opacity: 0.6 }} />
        <div style={{ position: 'absolute', top: '13px', right: '13px', width: '3px', height: '3px', background: 'var(--gold)', borderRadius: '50%', pointerEvents: 'none', opacity: 0.6 }} />
        <div style={{ position: 'absolute', bottom: '8px', left: '8px', width: '20px', height: '20px', borderBottom: '2px solid var(--amber)', borderLeft: '2px solid var(--amber)', pointerEvents: 'none', opacity: 0.6 }} />
        <div style={{ position: 'absolute', bottom: '13px', left: '13px', width: '3px', height: '3px', background: 'var(--gold)', borderRadius: '50%', pointerEvents: 'none', opacity: 0.6 }} />
        <div style={{ position: 'absolute', bottom: '8px', right: '8px', width: '20px', height: '20px', borderBottom: '2px solid var(--amber)', borderRight: '2px solid var(--amber)', pointerEvents: 'none', opacity: 0.6 }} />
        <div style={{ position: 'absolute', bottom: '13px', right: '13px', width: '3px', height: '3px', background: 'var(--gold)', borderRadius: '50%', pointerEvents: 'none', opacity: 0.6 }} />
    </>
)

export default function Experience() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const inView = useInView(sectionRef, { once: true, margin: '-100px' })

    const certs = [
        { title: 'Full Stack Web Development' },
        { title: 'React — The Complete Guide' },
        { title: 'NodeJS, Express & MongoDB' },
        { title: 'SQL & Database Design' }
    ]

    return (
        <section 
            id="experience" 
            className="about-section-container"
            style={{
                padding: '6.5rem 0',
                position: 'relative',
                borderBottom: '1px solid rgba(139, 80, 40, 0.15)',
            }}
        >
            {/* Ambient gold glow */}
            <div style={{
                position: 'absolute', top: '20%', left: '-10%',
                width: '450px', height: '450px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(212,160,23,0.04) 0%, transparent 70%)',
                filter: 'blur(50px)', pointerEvents: 'none',
                zIndex: 0
            }} />

            <div className="section-wrapper" ref={sectionRef} style={{ position: 'relative', zIndex: 2 }}>

                {/* Custom Section Header */}
                <div style={{ marginBottom: '4rem', textAlign: 'center', position: 'relative', zIndex: 2 }}>
                    <p className="section-label" style={{ marginBottom: '0.5rem' }}>04. chronology</p>
                    <div className="section-divider" style={{ margin: '0 auto 1.5rem auto', maxWidth: '280px' }} />
                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2rem, 5.5vw, 4.4rem)',
                        fontWeight: 900,
                        color: 'var(--brown-dark)',
                        fontStyle: 'italic',
                        letterSpacing: '0.01em'
                    }}>
                        Chronology of the Constructor
                    </h2>
                    <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1.05rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '650px',
                        margin: '1rem auto 0 auto',
                        lineHeight: 1.65,
                        fontWeight: 500
                    }}>
                        Reviewing my aligned professional sum, industrial pacts, and verified technical credentials.
                    </p>
                </div>

                {/* Grid Split Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 1fr',
                    gap: '3.5rem',
                    alignItems: 'start',
                }} className="about-grid">

                    {/* Left Column: Experience details card */}
                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.65, ease: 'easeOut' }}
                    >
                        <h3 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.75rem',
                            fontWeight: 800,
                            fontStyle: 'italic',
                            color: 'var(--brown-dark)',
                            borderBottom: '1.5px solid rgba(139, 80, 40, 0.18)',
                            paddingBottom: '0.6rem',
                            marginBottom: '1.5rem'
                        }}>
                            Active Pact
                        </h3>

                        <div 
                            className="about-details-card"
                            style={{
                                background: 'rgba(255, 255, 255, 0.88)',
                                backdropFilter: 'blur(12px)',
                                border: '1.5px solid rgba(139, 80, 40, 0.22)',
                                borderRadius: '16px',
                                boxShadow: '0 16px 40px rgba(92,51,23,0.08)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <CornerOrnaments />

                            <span style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.72rem',
                                color: 'var(--amber)',
                                fontWeight: 800,
                                textTransform: 'uppercase',
                                letterSpacing: '0.12em',
                                display: 'block',
                                marginBottom: '0.4rem',
                            }}>
                                SDE Intern — Full-Stack Developer
                            </span>

                            <h4 style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: '1.9rem',
                                color: 'var(--brown-dark)',
                                fontWeight: 850,
                                margin: '0.2rem 0',
                            }}>
                                IQVenus Technologies
                            </h4>

                            <div style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.72rem',
                                color: 'var(--text-muted)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.04em',
                                marginBottom: '1.75rem',
                                fontWeight: 700
                            }}>
                                Remote · 9th Jan – 9th May
                            </div>

                            <ul style={{
                                listStyle: 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.1rem',
                                padding: 0,
                                margin: 0
                            }}>
                                {[
                                    'Architecting production MERN stack code bases and orchestrating performant React component architectures.',
                                    'Forging secure API gateways using strict JWT authorization layers and Role-Based Access Control (RBAC) protocols.',
                                    'Optimizing heavy database transactions and configuring isolated Docker containers for local and remote deployments.',
                                    'Collaborating in active agile sprints, performing modular code reviews, and delivering secure client assets.',
                                    'Designing automated testing frameworks to increase core source code test coverage and build stability.',
                                ].map((point, idx) => (
                                    <li key={idx} style={{
                                        display: 'flex',
                                        gap: '0.75rem',
                                        alignItems: 'flex-start',
                                        color: 'var(--text-secondary)',
                                        fontSize: '0.96rem',
                                        lineHeight: 1.65,
                                    }}>
                                        <span style={{ color: 'var(--amber)', marginTop: '2px', fontSize: '0.8rem' }}>✦</span>
                                        <span className="about-narrative-text" style={{ margin: 0 }}>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right Column: Certification cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
                    >
                        <h3 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.75rem',
                            fontWeight: 800,
                            fontStyle: 'italic',
                            color: 'var(--brown-dark)',
                            borderBottom: '1.5px solid rgba(139, 80, 40, 0.18)',
                            paddingBottom: '0.6rem',
                            marginBottom: '1.5rem'
                        }}>
                            Verified Diplomas
                        </h3>

                        {/* Responsive Auto-Wrapping Diploma Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                            gap: '1.25rem',
                        }} className="skills-grid">
                            {certs.map((c, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 25 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.55, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                                    whileHover={{ 
                                        scale: 1.03, 
                                        y: -4,
                                        boxShadow: '0 12px 30px rgba(92, 51, 23, 0.16)'
                                    }}
                                    className="cert-card-interactive"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.88)',
                                        backdropFilter: 'blur(8px)',
                                        border: '1.5px solid rgba(139, 80, 40, 0.22)',
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                        boxShadow: '0 6px 18px rgba(92, 51, 23, 0.05)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        cursor: 'pointer',
                                        transition: 'border-color 0.3s'
                                    }}
                                    onMouseEnter={e => {
                                        const card = e.currentTarget as HTMLDivElement
                                        card.style.borderColor = 'var(--amber)'
                                        const orbit = card.querySelector('.cert-orbit-ring') as HTMLDivElement
                                        if (orbit) {
                                            orbit.style.opacity = '0.65'
                                            orbit.style.transform = 'scale(1.1) rotate(45deg)'
                                        }
                                    }}
                                    onMouseLeave={e => {
                                        const card = e.currentTarget as HTMLDivElement
                                        card.style.borderColor = 'rgba(139, 80, 40, 0.22)'
                                        const orbit = card.querySelector('.cert-orbit-ring') as HTMLDivElement
                                        if (orbit) {
                                            orbit.style.opacity = '0'
                                            orbit.style.transform = 'scale(1) rotate(0deg)'
                                        }
                                    }}
                                >
                                    {/* Diploma Header Block */}
                                    <div style={{
                                        width: '100%',
                                        height: '115px',
                                        background: 'linear-gradient(135deg, #f5e3b5 0%, #ecd59f 50%, #d8b874 100%)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderBottom: '1.5px solid rgba(139, 80, 40, 0.22)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                    }}>
                                        <CertificateOrbit />
                                        
                                        <Award size={32} color="var(--terracotta)" style={{ filter: 'drop-shadow(0 2px 4px rgba(92,51,23,0.18))', zIndex: 1 }} />
                                        
                                        <span style={{
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.58rem',
                                            color: 'var(--brown-dark)',
                                            letterSpacing: '0.12rem',
                                            textTransform: 'uppercase',
                                            marginTop: '0.5rem',
                                            fontWeight: 800,
                                            zIndex: 1,
                                            userSelect: 'none'
                                        }}>
                                            Credential
                                        </span>
                                    </div>
                                    
                                    {/* Diploma Details Block */}
                                    <div style={{ 
                                        padding: '1.15rem 1rem', 
                                        flex: 1, 
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        justifyContent: 'center',
                                        background: '#ffffff'
                                    }}>
                                        <h4 style={{
                                            fontFamily: 'var(--font-display)',
                                            fontSize: '0.88rem',
                                            fontWeight: 800,
                                            color: 'var(--brown-dark)',
                                            lineHeight: 1.35,
                                            margin: 0,
                                            textAlign: 'center'
                                        }}>
                                            {c.title}
                                        </h4>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
