import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Award, X } from 'lucide-react'

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
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    const certs = [
        { title: 'IQVenus SDE Internship', link: '/certificates/IQVenus_Intern.jpeg' },
        { title: 'IDE Bootcamp by IIT Guwahati', link: '/certificates/IDEBootcamp.jpeg' },
        { title: 'Full Stack Web Development' }
    ]

    const experiences = [
        {
            role: 'Technical Head',
            company: "Institution's Innovation Council (IIC)",
            duration: 'Kolkata, India · Jan 2026 – Present',
            points: [
                'Manage a 6-member developer team: assign modules, run code reviews, and enforce coding standards across all IIC technical projects.',
                'Mentor junior members on React/Node.js best practices, reducing new-contributor onboarding time by streamlining documentation.',
                'Founded IIC\'s first competitive-programming peer group, mentoring junior IIC members through structured DSA practice sessions with a 5-member core team.'
            ]
        },
        {
            role: 'SDE Intern — Full-Stack Developer',
            company: 'IQVenus Technologies',
            duration: 'Remote · 9th Jan – 9th May',
            points: [
                'Architecting production MERN stack code bases and orchestrating performant React component architectures.',
                'Forging secure API gateways using strict JWT authorization layers and Role-Based Access Control (RBAC) protocols.',
                'Optimizing heavy database transactions and configuring isolated Docker containers for local and remote deployments.',
                'Collaborating in active agile sprints, performing modular code reviews, and delivering secure client assets.',
                'Designing automated testing frameworks to increase core source code test coverage and build stability.'
            ]
        }
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
                        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                    >
                        <h3 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.75rem',
                            fontWeight: 800,
                            fontStyle: 'italic',
                            color: 'var(--brown-dark)',
                            borderBottom: '1.5px solid rgba(139, 80, 40, 0.18)',
                            paddingBottom: '0.6rem',
                            margin: 0
                        }}>
                            Professional Engagements
                        </h3>

                        <div style={{ position: 'relative', marginTop: '1rem', paddingLeft: '2.5rem' }}>
                            {/* Vertical Line */}
                            <div style={{
                                position: 'absolute',
                                left: '7px',
                                top: '1.5rem',
                                bottom: '0',
                                width: '2px',
                                background: 'linear-gradient(180deg, var(--amber) 0%, rgba(212, 160, 23, 0.1) 100%)',
                                borderRadius: '2px'
                            }} />

                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -25 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.65, delay: 0.2 * index, ease: [0.22, 1, 0.36, 1] }}
                                    style={{
                                        position: 'relative',
                                        marginBottom: index !== experiences.length - 1 ? '3.5rem' : '0'
                                    }}
                                >
                                    {/* Timeline Node */}
                                    <div
                                        className={`timeline-node-${index}`}
                                        style={{
                                            position: 'absolute',
                                            left: '-2.5rem',
                                            top: '1.5rem',
                                            width: '16px',
                                            height: '16px',
                                            borderRadius: '50%',
                                            background: 'var(--bg-deep)',
                                            border: '3px solid var(--amber)',
                                            boxShadow: '0 0 10px rgba(212, 160, 23, 0.3)',
                                            transform: 'translateX(-3px)',
                                            transition: 'all 0.3s ease',
                                            zIndex: 2
                                        }}
                                    />

                                    {/* Glassmorphic Card */}
                                    <motion.div
                                        whileHover={{ y: -6, scale: 1.01 }}
                                        onHoverStart={() => {
                                            const node = document.querySelector(`.timeline-node-${index}`) as HTMLElement;
                                            if (node) {
                                                node.style.background = 'var(--gold)';
                                                node.style.boxShadow = '0 0 20px rgba(212, 160, 23, 0.8)';
                                                node.style.transform = 'translateX(-3px) scale(1.2)';
                                            }
                                        }}
                                        onHoverEnd={() => {
                                            const node = document.querySelector(`.timeline-node-${index}`) as HTMLElement;
                                            if (node) {
                                                node.style.background = 'var(--bg-deep)';
                                                node.style.boxShadow = '0 0 10px rgba(212, 160, 23, 0.3)';
                                                node.style.transform = 'translateX(-3px) scale(1)';
                                            }
                                        }}
                                        style={{
                                            background: 'var(--bg-card)',
                                            backdropFilter: 'blur(16px)',
                                            border: '1px solid var(--border)',
                                            borderRadius: '16px',
                                            padding: '2rem',
                                            boxShadow: '0 12px 35px rgba(92, 51, 23, 0.06)',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        <div style={{
                                            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                            background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
                                            pointerEvents: 'none'
                                        }} />

                                        <span style={{
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.78rem',
                                            color: 'var(--amber)',
                                            fontWeight: 700,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em',
                                            display: 'block',
                                            marginBottom: '0.5rem',
                                        }}>
                                            {exp.role}
                                        </span>

                                        <h4 style={{
                                            fontFamily: 'var(--font-display)',
                                            fontSize: '1.75rem',
                                            color: 'var(--brown-dark)',
                                            fontWeight: 800,
                                            margin: '0 0 0.5rem 0',
                                        }}>
                                            {exp.company}
                                        </h4>

                                        <div style={{
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.75rem',
                                            color: 'var(--text-muted)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.04em',
                                            marginBottom: '1.5rem',
                                            fontWeight: 600,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}>
                                            <span style={{ width: '5px', height: '5px', background: 'var(--text-muted)', borderRadius: '50%' }}></span>
                                            {exp.duration}
                                        </div>

                                        <ul style={{
                                            listStyle: 'none',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '1rem',
                                            padding: 0,
                                            margin: 0
                                        }}>
                                            {exp.points.map((point, idx) => (
                                                <li key={idx} style={{
                                                    display: 'flex',
                                                    gap: '0.75rem',
                                                    alignItems: 'flex-start',
                                                    color: 'var(--text-secondary)',
                                                    fontSize: '0.95rem',
                                                    lineHeight: 1.6,
                                                }}>
                                                    <span style={{ color: 'var(--amber)', marginTop: '3px', fontSize: '0.7rem' }}>✦</span>
                                                    <span style={{ margin: 0 }}>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </motion.div>
                            ))}
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
                            Certificates
                        </h3>

                        {/* Responsive Auto-Wrapping Diploma Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                            gap: '1.25rem',
                        }} className="skills-grid">
                            {certs.map((c, i) => {
                                const isLink = Boolean(c.link);
                                return (
                                    <motion.div
                                        onClick={() => isLink && c.link && setSelectedImage(c.link)}
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
                                            background: 'var(--bg-card)',
                                            backdropFilter: 'blur(8px)',
                                            border: '1.5px solid var(--border)',
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
                                            card.style.borderColor = 'var(--border)'
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
                                            background: isLink && c.link ? `url(${c.link}) center/cover no-repeat` : 'linear-gradient(135deg, #f5e3b5 0%, #ecd59f 50%, #d8b874 100%)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderBottom: '1.5px solid rgba(139, 80, 40, 0.22)',
                                            position: 'relative',
                                            overflow: 'hidden',
                                        }}>
                                            {(!isLink || !c.link) && (
                                                <>
                                                    <CertificateOrbit />
                                                    <Award size={32} color="var(--terracotta)" style={{ filter: 'drop-shadow(0 2px 4px rgba(92,51,23,0.18))', zIndex: 1 }} />
                                                    <span style={{
                                                        fontFamily: 'var(--font-mono)',
                                                        fontSize: '0.58rem',
                                                        color: 'var(--bg-deep)',
                                                        letterSpacing: '0.12rem',
                                                        textTransform: 'uppercase',
                                                        marginTop: '0.5rem',
                                                        fontWeight: 800,
                                                        zIndex: 1,
                                                        userSelect: 'none'
                                                    }}>
                                                        Credential
                                                    </span>
                                                </>
                                            )}
                                        </div>

                                        {/* Diploma Details Block */}
                                        <div style={{
                                            padding: '1.15rem 1rem',
                                            flex: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            background: 'var(--bg-card)'
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
                                )
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            background: 'rgba(0, 0, 0, 0.85)',
                            backdropFilter: 'blur(8px)',
                            zIndex: 9999,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '2rem'
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                position: 'relative',
                                maxWidth: '90vw',
                                maxHeight: '90vh',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
                            }}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: 'rgba(0,0,0,0.5)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    zIndex: 10,
                                    backdropFilter: 'blur(4px)'
                                }}
                            >
                                <X size={24} />
                            </button>
                            <img
                                src={selectedImage}
                                alt="Certificate"
                                style={{
                                    width: 'auto',
                                    height: 'auto',
                                    maxWidth: '100%',
                                    maxHeight: '90vh',
                                    display: 'block',
                                    objectFit: 'contain'
                                }}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
