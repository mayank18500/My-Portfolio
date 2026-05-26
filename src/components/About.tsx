import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface RuneDetail {
    id: string
    name: string
    emoji: string
    aura: string
    description: string
    incantation: string
}

const runesData: RuneDetail[] = [
    {
        id: 'clean',
        name: 'Rune of Clean Code',
        emoji: '📜',
        aura: 'Maintainability +92%',
        description: 'Writing readable, self-documenting, and type-safe architectures. Ensuring modular codebases that remain highly maintainable over multi-developer lifecycles.',
        incantation: 'type ReadonlyDeep<T> = { readonly [P in keyof T]: ... }'
    },
    {
        id: 'design',
        name: 'Rune of System Design',
        emoji: '⚙️',
        aura: 'Performance +88%',
        description: 'Orchestrating component hierarchies, robust state flows, database indexing models, and async event channels for highly performant and scalable products.',
        incantation: 'asyncHandler(async (req, res) => { ... })'
    },
    {
        id: 'security',
        name: 'Rune of Secured Access',
        emoji: '🔐',
        aura: 'Robustness +90%',
        description: 'Enforcing bulletproof JWT authorization stacks, precise Role-Based Access Controls (RBAC), and crypto payload verification to safeguard client nodes.',
        incantation: 'authorize(allowedRoles: Role[]) => (req, res) => ...'
    },
    {
        id: 'orchestration',
        name: 'Rune of Orchestration',
        emoji: '🐳',
        aura: 'Efficiency +82%',
        description: 'Containerizing local runtimes with Docker, deploying isolated compose networks, and packaging automated git workflows for fluid continuous delivery.',
        incantation: 'FROM node:20-alpine AS builder ... EXPOSE 3000'
    }
]

// Concentric SVG Astral Gear Ring system rotating in absolute-positioned background
const AstralRings = () => (
    <div 
        className="astral-rings-container"
        style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'min(360px, 90vw)',
            height: 'min(360px, 90vw)',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0.32
        }}
    >
        {/* Outer Concentric Astronomical Ring */}
        <svg width="100%" height="100%" viewBox="0 0 100 100" style={{
            position: 'absolute',
            inset: 0,
            animation: 'spin-slow 35s linear infinite'
        }}>
            <circle cx="50" cy="50" r="46" fill="none" stroke="var(--amber)" strokeWidth="0.8" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="42" fill="none" stroke="var(--brown-light)" strokeWidth="0.6" />
            <path d="M 50 4 L 50 10 M 50 90 L 50 96 M 4 50 L 10 50 M 90 50 L 96 50" stroke="var(--amber)" strokeWidth="0.6" />
            <text x="50" y="8" fontSize="2.5" fill="var(--amber)" textAnchor="middle" style={{ fontFamily: 'var(--font-mono)', fontWeight: 'bold' }}>N</text>
            <text x="50" y="94.5" fontSize="2.5" fill="var(--amber)" textAnchor="middle" style={{ fontFamily: 'var(--font-mono)', fontWeight: 'bold' }}>S</text>
            <text x="7.5" y="51" fontSize="2.5" fill="var(--amber)" textAnchor="middle" style={{ fontFamily: 'var(--font-mono)', fontWeight: 'bold' }}>W</text>
            <text x="92.5" y="51" fontSize="2.5" fill="var(--amber)" textAnchor="middle" style={{ fontFamily: 'var(--font-mono)', fontWeight: 'bold' }}>E</text>
        </svg>

        {/* Inner Alchemical Sigil Ring */}
        <svg width="100%" height="100%" viewBox="0 0 100 100" style={{
            position: 'absolute',
            inset: 0,
            scale: '0.78',
            animation: 'spin-slow 22s linear reverse infinite'
        }}>
            <circle cx="50" cy="50" r="44" fill="none" stroke="var(--gold)" strokeWidth="0.6" strokeDasharray="8 4" />
            <circle cx="50" cy="50" r="38" fill="none" stroke="var(--amber-light)" strokeWidth="0.4" />
            <polygon points="50,15 60,38 83,50 60,62 50,85 40,62 17,50 40,38" fill="none" stroke="rgba(200, 118, 42, 0.25)" strokeWidth="0.5" />
        </svg>
    </div>
)

// Vintage Filigree Corner ornaments
const CornerOrnaments = () => (
    <>
        <div style={{ position: 'absolute', top: '8px', left: '8px', width: '22px', height: '22px', borderTop: '2px solid var(--amber)', borderLeft: '2px solid var(--amber)', pointerEvents: 'none', opacity: 0.6 }} />
        <div style={{ position: 'absolute', top: '14px', left: '14px', width: '4px', height: '4px', background: 'var(--gold)', borderRadius: '50%', pointerEvents: 'none', opacity: 0.6 }} />
        <div style={{ position: 'absolute', top: '8px', right: '8px', width: '22px', height: '22px', borderTop: '2px solid var(--amber)', borderRight: '2px solid var(--amber)', pointerEvents: 'none', opacity: 0.6 }} />
        <div style={{ position: 'absolute', top: '14px', right: '14px', width: '4px', height: '4px', background: 'var(--gold)', borderRadius: '50%', pointerEvents: 'none', opacity: 0.6 }} />
        <div style={{ position: 'absolute', bottom: '8px', left: '8px', width: '22px', height: '22px', borderBottom: '2px solid var(--amber)', borderLeft: '2px solid var(--amber)', pointerEvents: 'none', opacity: 0.6 }} />
        <div style={{ position: 'absolute', bottom: '14px', left: '14px', width: '4px', height: '4px', background: 'var(--gold)', borderRadius: '50%', pointerEvents: 'none', opacity: 0.6 }} />
        <div style={{ position: 'absolute', bottom: '8px', right: '8px', width: '22px', height: '22px', borderBottom: '2px solid var(--amber)', borderRight: '2px solid var(--amber)', pointerEvents: 'none', opacity: 0.6 }} />
        <div style={{ position: 'absolute', bottom: '14px', right: '14px', width: '4px', height: '4px', background: 'var(--gold)', borderRadius: '50%', pointerEvents: 'none', opacity: 0.6 }} />
    </>
)

export default function About() {
    const [activeTab, setActiveTab] = useState<'narrative' | 'affiliations' | 'runes'>('narrative')
    const [selectedRune, setSelectedRune] = useState<RuneDetail>(runesData[0])

    const containerVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.45, ease: 'easeOut' as const }
        }
    }

    return (
        <section
            id="about"
            className="about-section-container"
            style={{
                padding: '6.5rem 0',
                position: 'relative',
                overflow: 'hidden',
                borderBottom: '1px solid rgba(139, 80, 40, 0.15)',
            }}
        >
            {/* Ambient gold glow */}
            <div style={{
                position: 'absolute', top: '15%', right: '-10%',
                width: '450px', height: '450px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(212,160,23,0.05) 0%, transparent 70%)',
                filter: 'blur(50px)', pointerEvents: 'none',
                zIndex: 0
            }} />

            <div className="section-wrapper" style={{ position: 'relative', zIndex: 2 }}>
                
                {/* Custom Section Header */}
                <div style={{ marginBottom: '4rem', textAlign: 'center', position: 'relative', zIndex: 2 }}>
                    <p className="section-label" style={{ marginBottom: '0.5rem' }}>01. chronicles</p>
                    <div className="section-divider" style={{ margin: '0 auto 1.5rem auto', maxWidth: '280px' }} />
                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2rem, 5.5vw, 4.4rem)',
                        fontWeight: 900,
                        color: 'var(--brown-dark)',
                        fontStyle: 'italic',
                        letterSpacing: '0.01em'
                    }}>
                        Monograph of the Constructor
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
                        Deciphering the alchemical journey, structural affiliations, and core runic traits that govern my full-stack engineering practices.
                    </p>
                </div>

                {/* Grid Split Layout */}
                <div className="about-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.35fr',
                    gap: '3.5rem',
                    alignItems: 'stretch'
                }}>
                    
                    {/* Left Column: Alchemical Reliquary Portrait Frame */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem',
                        alignItems: 'center',
                        position: 'relative',
                    }}>
                        {/* Astral Gear Backdrop & Double-Bordered Portrait Canvas */}
                        <div 
                            className="about-portrait-card"
                            style={{
                                width: '100%',
                                background: 'rgba(255, 255, 255, 0.88)',
                                backdropFilter: 'blur(12px)',
                                border: '1.5px solid rgba(139, 80, 40, 0.22)',
                                borderRadius: '16px',
                                boxShadow: '0 16px 40px rgba(92,51,23,0.08), inset 0 0 12px rgba(200, 118, 42, 0.02)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <CornerOrnaments />
                            <AstralRings />

                            {/* Double-bordered Portrait Frame */}
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                style={{
                                    width: '230px',
                                    height: '230px',
                                    borderRadius: '12px',
                                    border: '4px solid var(--amber)',
                                    overflow: 'hidden',
                                    boxShadow: 'var(--shadow-warm-lg), 0 0 20px rgba(200, 118, 42, 0.15)',
                                    position: 'relative',
                                    zIndex: 2,
                                    marginBottom: '2.5rem',
                                    cursor: 'pointer'
                                }}
                            >
                                <img
                                    src="/My_Photos/photo2.png"
                                    alt="Mayank Kumar in front of building"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.4s ease'
                                    }}
                                />
                            </motion.div>

                            {/* Vital Signs / RPG Ledger */}
                            <div style={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.8rem',
                                zIndex: 2,
                                borderTop: '2.5px solid rgba(139, 80, 40, 0.15)',
                                paddingTop: '1.5rem'
                            }}>
                                <h4 style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.68rem',
                                    color: 'var(--amber)',
                                    letterSpacing: '0.15em',
                                    textTransform: 'uppercase',
                                    fontWeight: 800,
                                    marginBottom: '0.2rem'
                                }}>
                                    Vital Registry
                                </h4>
                                
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                    {[
                                        { label: 'Name', val: 'Mayank Kumar' },
                                        { label: 'Class', val: 'Arch-Constructor' },
                                        { label: 'Affiliation', val: 'IQVenus Technologies (Intern)' },
                                        { label: 'Core Aura', val: 'MERN & REST Architect' },
                                    ].map((stat, idx) => (
                                        <div key={idx} style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            fontSize: '0.86rem',
                                            fontFamily: 'var(--font-body)',
                                            fontWeight: 500,
                                            color: stat.label === 'Name' ? 'var(--brown-dark)' : 'var(--text-secondary)'
                                        }}>
                                            <span style={{
                                                fontSize: '0.72rem',
                                                fontFamily: 'var(--font-mono)',
                                                color: 'var(--text-muted)',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.04em'
                                            }}>{stat.label}</span>
                                            <span style={{
                                                fontFamily: stat.label === 'Class' || stat.label === 'Name' ? 'var(--font-display)' : 'inherit',
                                                fontStyle: stat.label === 'Class' ? 'italic' : 'normal',
                                                fontWeight: stat.label === 'Name' ? 800 : 600,
                                            }}>{stat.val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Tabbed Monograph Ledger */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem'
                    }}>
                        {/* Leather-bound style Tab Switcher */}
                        <div 
                            className="about-tabs-container"
                            style={{
                                display: 'flex',
                                gap: '0.5rem',
                                padding: '0.5rem',
                                background: 'rgba(242, 230, 204, 0.65)',
                                backdropFilter: 'blur(10px)',
                                border: '1.5px solid var(--border)',
                                borderRadius: '10px',
                                boxShadow: 'inset 0 2px 8px rgba(92,51,23,0.08)'
                            }}
                        >
                            {[
                                { id: 'narrative', label: 'The Narrative', emoji: '📜' },
                                { id: 'affiliations', label: 'Milestones', emoji: '🛡️' },
                                { id: 'runes', label: 'Runic Essences', emoji: '🔮' },
                            ].map((tab) => {
                                const isActive = activeTab === tab.id
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id as any)}
                                        className="parchment-tag"
                                        style={{
                                            flex: 1,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '0.5rem',
                                            padding: '0.7rem 0.5rem',
                                            border: isActive ? '2px solid var(--amber)' : '2px solid transparent',
                                            borderRadius: '8px',
                                            fontFamily: 'var(--font-display)',
                                            fontSize: '0.9rem',
                                            fontWeight: 800,
                                            color: isActive ? '#fff' : 'var(--text-secondary)',
                                            background: isActive 
                                                ? 'linear-gradient(135deg, var(--amber) 0%, var(--brown-light) 100%)' 
                                                : 'rgba(250, 245, 233, 0.7)',
                                            boxShadow: isActive 
                                                ? '0 6px 14px rgba(200, 118, 42, 0.25)' 
                                                : '0 1px 4px rgba(44, 24, 16, 0.03)',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                                        }}
                                    >
                                        <span style={{ fontSize: '1rem' }}>{tab.emoji}</span>
                                        {tab.label}
                                    </button>
                                )
                            })}
                        </div>

                        {/* Interactive Tab Pages Panel */}
                        <div style={{ flex: 1, display: 'flex' }}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    className="about-details-card"
                                    style={{
                                        width: '100%',
                                        background: 'rgba(255, 255, 255, 0.88)',
                                        backdropFilter: 'blur(12px)',
                                        border: '1.5px solid rgba(139, 80, 40, 0.22)',
                                        borderRadius: '16px',
                                        boxShadow: '0 16px 40px rgba(92,51,23,0.08)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '1.5rem',
                                        minHeight: '410px'
                                    }}
                                >
                                    <CornerOrnaments />

                                    {/* Tab 1: The Story Narrative */}
                                    {activeTab === 'narrative' && (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', height: '100%', justifyContent: 'center' }}>
                                            <h3 style={{
                                                fontFamily: 'var(--font-display)',
                                                fontSize: '1.65rem',
                                                fontWeight: 800,
                                                fontStyle: 'italic',
                                                color: 'var(--brown-dark)',
                                                borderBottom: '1.5px solid rgba(139,80,40,0.12)',
                                                paddingBottom: '0.6rem',
                                                marginBottom: '0.4rem'
                                            }}>
                                                Deciphering the Intent
                                            </h3>
                                            
                                            <p 
                                                className="about-narrative-text"
                                                style={{
                                                    color: 'var(--text-primary)',
                                                    lineHeight: 1.75,
                                                    fontFamily: 'var(--font-body)',
                                                    fontWeight: 500,
                                                    margin: 0
                                                }}
                                            >
                                                <span style={{
                                                    float: 'left',
                                                    fontFamily: 'var(--font-display)',
                                                    fontSize: '3.6rem',
                                                    lineHeight: '3.2rem',
                                                    fontWeight: 900,
                                                    color: 'var(--amber)',
                                                    marginRight: '0.6rem',
                                                    marginTop: '0.2rem',
                                                    textShadow: '2px 2px 0 rgba(200, 118, 42, 0.1)'
                                                }}>I</span>
                                                'm a <strong>full-stack developer</strong> who thrives on turning complex computational puzzles into elegant, high-throughput software architectures. Currently channeling engineering assets at <strong>IQVenus Technologies</strong>, building, tuning, and deploying production components that empower real-world systems.
                                            </p>
                                            
                                            <p 
                                                className="about-narrative-text"
                                                style={{
                                                    color: 'var(--text-secondary)',
                                                    lineHeight: 1.75,
                                                    fontFamily: 'var(--font-body)',
                                                    fontWeight: 500,
                                                    margin: 0
                                                }}
                                            >
                                                My core mastery scales across the <strong>MERN ecosystem</strong> — architecting secure APIs, integrating crypto authorization locks (JWT/RBAC), modeling data pipelines, and containerizing runtimes. I believe software engineering is the ultimate modern alchemy: transforming digital logic into robust client assets.
                                            </p>

                                            {/* Alchemical Quote Banner */}
                                            <div style={{
                                                background: 'rgba(200, 118, 42, 0.05)',
                                                borderLeft: '4px solid var(--amber)',
                                                padding: '0.9rem 1.25rem',
                                                borderRadius: '0 8px 8px 0',
                                                marginTop: '0.5rem',
                                                fontStyle: 'italic',
                                                fontFamily: 'var(--font-display)',
                                                fontSize: '0.92rem',
                                                color: 'var(--text-secondary)',
                                                lineHeight: 1.5
                                            }}>
                                                "Code is not merely instructions for a compiler; it is an architectural transcription of intention designed to orchestrate computing engines."
                                            </div>
                                        </div>
                                    )}

                                    {/* Tab 2: The Timeline Affiliations */}
                                    {activeTab === 'affiliations' && (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                            <h3 style={{
                                                fontFamily: 'var(--font-display)',
                                                fontSize: '1.65rem',
                                                fontWeight: 800,
                                                fontStyle: 'italic',
                                                color: 'var(--brown-dark)',
                                                borderBottom: '1.5px solid rgba(139,80,40,0.12)',
                                                paddingBottom: '0.6rem',
                                                marginBottom: '0.4rem'
                                            }}>
                                                Professional Affiliations
                                            </h3>

                                            <div style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '1.75rem',
                                                position: 'relative',
                                                paddingLeft: '1.75rem',
                                                borderLeft: '2px solid rgba(139, 80, 40, 0.15)'
                                            }}>
                                                {/* Node 1: IQApex Labs */}
                                                <div style={{ position: 'relative' }}>
                                                    {/* Timeline node star icon */}
                                                    <span style={{
                                                        position: 'absolute',
                                                        left: 'calc(-1.75rem - 6.5px)',
                                                        top: '3px',
                                                        width: '12px',
                                                        height: '12px',
                                                        borderRadius: '50%',
                                                        background: 'var(--amber)',
                                                        border: '2px solid #fff',
                                                        boxShadow: '0 0 8px var(--amber-glow)',
                                                        zIndex: 2
                                                    }} />
                                                    
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.25rem' }}>
                                                        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, color: 'var(--brown-dark)', margin: 0 }}>
                                                            IQVenus Technologies
                                                        </h4>
                                                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--amber)', background: 'rgba(200,118,42,0.08)', padding: '0.2rem 0.6rem', borderRadius: '100px', fontWeight: 700 }}>
                                                            Current Pact
                                                        </span>
                                                    </div>
                                                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', margin: '0.2rem 0 0.5rem 0', fontWeight: 700 }}>
                                                        SDE Intern · 9th Jan – 9th May
                                                    </p>
                                                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                                                        Forging high-performance client nodes, managing structured databases, securing backends via rigorous REST API architectures, and engineering user components that meet production compliance standards.
                                                    </p>
                                                </div>

                                                {/* Node 2: Freelance Guild */}
                                                <div style={{ position: 'relative' }}>
                                                    {/* Timeline node star icon */}
                                                    <span style={{
                                                        position: 'absolute',
                                                        left: 'calc(-1.75rem - 6.5px)',
                                                        top: '3px',
                                                        width: '12px',
                                                        height: '12px',
                                                        borderRadius: '50%',
                                                        background: 'var(--brown-light)',
                                                        border: '2px solid #fff',
                                                        zIndex: 2
                                                    }} />
                                                    
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.25rem' }}>
                                                        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, color: 'var(--brown-dark)', margin: 0 }}>
                                                            The Freelance Guild
                                                        </h4>
                                                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', background: 'rgba(139,80,40,0.06)', padding: '0.2rem 0.6rem', borderRadius: '100px', fontWeight: 700 }}>
                                                            Constructs
                                                        </span>
                                                    </div>
                                                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', margin: '0.2rem 0 0.5rem 0', fontWeight: 700 }}>
                                                        Independent Developer & Creator
                                                    </p>
                                                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                                                        Consulting directly with clients to wire secure relational datastores, model responsive landing pages, deploy containerized configurations, and supply clean production source codes.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Tab 3: Runic Essences (Traits) */}
                                    {activeTab === 'runes' && (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', height: '100%' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1.5px solid rgba(139,80,40,0.12)', paddingBottom: '0.6rem', marginBottom: '0.2rem' }}>
                                                <h3 style={{
                                                    fontFamily: 'var(--font-display)',
                                                    fontSize: '1.65rem',
                                                    fontWeight: 800,
                                                    fontStyle: 'italic',
                                                    color: 'var(--brown-dark)',
                                                    margin: 0
                                                }}>
                                                    Runic Essences
                                                </h3>
                                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--amber)', fontWeight: 800 }}>
                                                    Interactive Grid
                                                </span>
                                            </div>

                                            {/* Rune Stone Selector Buttons */}
                                            <div style={{
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
                                                gap: '0.75rem'
                                            }} className="skills-grid">
                                                {runesData.map((rune) => {
                                                    const isSelected = selectedRune.id === rune.id
                                                    return (
                                                        <motion.button
                                                            key={rune.id}
                                                            onClick={() => setSelectedRune(rune)}
                                                            whileHover={{ scale: 1.04 }}
                                                            whileTap={{ scale: 0.96 }}
                                                            style={{
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                alignItems: 'center',
                                                                gap: '0.4rem',
                                                                padding: '0.9rem 0.5rem',
                                                                background: isSelected ? '#ffffff' : 'rgba(250, 245, 233, 0.75)',
                                                                border: isSelected ? '2px solid var(--amber)' : '1.5px solid rgba(139, 80, 40, 0.15)',
                                                                borderRadius: '8px',
                                                                boxShadow: isSelected 
                                                                    ? '0 6px 15px rgba(200,118,42,0.12), inset 0 0 8px rgba(200,118,42,0.03)' 
                                                                    : '0 2px 6px rgba(44,24,16,0.02)',
                                                                cursor: 'pointer',
                                                                transition: 'border-color 0.25s, background-color 0.25s',
                                                            }}
                                                        >
                                                            <span style={{ fontSize: '1.6rem', filter: isSelected ? 'drop-shadow(0 0 4px var(--amber-glow))' : 'none' }}>{rune.emoji}</span>
                                                            <span style={{
                                                                fontFamily: 'var(--font-mono)',
                                                                fontSize: '0.65rem',
                                                                fontWeight: 800,
                                                                color: isSelected ? 'var(--amber)' : 'var(--text-secondary)',
                                                                textAlign: 'center',
                                                                lineHeight: 1.2
                                                            }}>{rune.name.replace('Rune of ', '')}</span>
                                                        </motion.button>
                                                    )
                                                })}
                                            </div>

                                            {/* Selected Rune Arcane Details Screen */}
                                            <AnimatePresence mode="wait">
                                                <motion.div
                                                    key={selectedRune.id}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.25 }}
                                                    style={{
                                                        flex: 1,
                                                        background: '#19110c',
                                                        border: '1.5px solid rgba(139,80,40,0.3)',
                                                        borderRadius: '8px',
                                                        padding: '1.1rem 1.4rem',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'center',
                                                        gap: '0.5rem',
                                                        boxShadow: '0 8px 24px rgba(44,24,16,0.18)',
                                                        position: 'relative'
                                                    }}
                                                >
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <h4 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.05rem', fontWeight: 800, color: 'var(--amber-light)', margin: 0 }}>
                                                            {selectedRune.name}
                                                        </h4>
                                                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#9ebf7a', fontWeight: 700 }}>
                                                            {selectedRune.aura}
                                                        </span>
                                                    </div>
                                                    
                                                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#c8c0a0', lineHeight: 1.6, margin: 0 }}>
                                                        {selectedRune.description}
                                                    </p>

                                                    <div style={{
                                                        fontFamily: 'var(--font-mono)',
                                                        fontSize: '0.68rem',
                                                        color: '#d4845a',
                                                        background: '#120c08',
                                                        padding: '0.4rem 0.8rem',
                                                        borderRadius: '4px',
                                                        border: '1px solid rgba(200, 118, 42, 0.1)',
                                                        marginTop: '0.2rem',
                                                        overflowX: 'auto',
                                                        whiteSpace: 'nowrap'
                                                    }}>
                                                        <span style={{ color: '#5c3d25', marginRight: '0.5rem', userSelect: 'none' }}>✦ incantation:</span>
                                                        {selectedRune.incantation}
                                                    </div>
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
