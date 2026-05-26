import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FileDetail {
    filename: string
    language: string
    code: string
}

interface Skill {
    name: string
    emoji: string
    description: string
    tags: string[]
    files: {
        source: FileDetail
        secondary: FileDetail
        config: FileDetail
    }
}

const categories = [
    { id: 'frontend', name: 'Frontend Arcana', emoji: '⚛️' },
    { id: 'backend', name: 'Backend Alchemy', emoji: '🧪' },
    { id: 'database', name: 'Database Runes', emoji: '📜' },
    { id: 'tools', name: 'DevOps & Runes', emoji: '🛠️' },
]

const skillsData: Record<string, Skill[]> = {
    frontend: [
        {
            name: 'React',
            emoji: '⚛️',
            description: 'Mayank crafts fluid, performant client interfaces using React 18, optimizing component lifecycles, and managing side-effects using modular custom hook paradigms.',
            tags: ['UI Architecture', 'Concurrent Mode', 'Hooks'],
            files: {
                source: {
                    filename: 'useDebounce.ts',
                    language: 'typescript',
                    code: `import { useState, useEffect } from 'react';\n\nexport function useDebounce<T>(value: T, delay = 500): T {\n  const [debounced, setDebounced] = useState<T>(value);\n\n  useEffect(() => {\n    const handler = setTimeout(() => {\n      setDebounced(value);\n    }, delay);\n\n    return () => clearTimeout(handler);\n  }, [value, delay]);\n\n  return debounced;\n}`
                },
                secondary: {
                    filename: 'AlchemicalCard.tsx',
                    language: 'typescript',
                    code: `import React from 'react';\n\ninterface CardProps {\n  title: string;\n  glow: boolean;\n}\n\nexport const ArcaneCard: React.FC<CardProps> = ({ title, glow, children }) => {\n  return (\n    <div className={\`parchment-card \${glow ? 'pulse-glow' : ''}\`}>\n      <h4 className="font-display font-bold text-lg">{title}</h4>\n      <div className="card-content">{children}</div>\n    </div>\n  );\n};`
                },
                config: {
                    filename: 'package.json',
                    language: 'json',
                    code: `{\n  "name": "react-arcana-app",\n  "version": "1.0.0",\n  "dependencies": {\n    "react": "^18.3.1",\n    "react-dom": "^18.3.1",\n    "framer-motion": "^11.2.10"\n  }\n}`
                }
            }
        },
        {
            name: 'TypeScript',
            emoji: '🔷',
            description: 'Enforcing runtime safety, strict types, complex modular generics, and compiler verification rules across full-stack applications to avoid software regressions.',
            tags: ['Generics', 'Type Safety', 'Enterprise Design'],
            files: {
                source: {
                    filename: 'rbac.types.ts',
                    language: 'typescript',
                    code: `type Role = 'Admin' | 'Moderator' | 'User';\n\ninterface UserProfile<R extends Role> {\n  id: string;\n  name: string;\n  role: R;\n  permissions: R extends 'Admin'\n    ? string[]\n    : R extends 'Moderator'\n      ? string[]\n      : null;\n}`
                },
                secondary: {
                    filename: 'utility.ts',
                    language: 'typescript',
                    code: `// Custom Deep Readonly utility type\ntype ReadonlyDeep<T> = {\n  readonly [P in keyof T]: T[P] extends object\n    ? ReadonlyDeep<T[P]>\n    : T[P];\n};\n\nexport type ImmutableUser = ReadonlyDeep<UserProfile<'Admin'>>;`
                },
                config: {
                    filename: 'tsconfig.json',
                    language: 'json',
                    code: `{\n  "compilerOptions": {\n    "target": "ES2022",\n    "module": "NodeNext",\n    "moduleResolution": "NodeNext",\n    "strict": true,\n    "esModuleInterop": true,\n    "skipLibCheck": true\n  }\n}`
                }
            }
        },
        {
            name: 'Tailwind CSS',
            emoji: '🎨',
            description: 'Structuring responsive utility layouts, implementing harmonious typography, fluid dark modes, and dynamic, screen-scalable custom design components.',
            tags: ['Utility CSS', 'Dark Mode', 'Fluid Layouts'],
            files: {
                source: {
                    filename: 'card.styles.css',
                    language: 'css',
                    code: `@layer components {\n  .alchemical-card {\n    @apply relative bg-amber-50/50 backdrop-blur-md\n      border border-amber-900/10 rounded-xl shadow-lg\n      transition-all duration-300 hover:-translate-y-1.5\n      hover:border-amber-500/30 hover:shadow-amber-500/10;\n  }\n}`
                },
                secondary: {
                    filename: 'tailwind.config.js',
                    language: 'javascript',
                    code: `module.exports = {\n  theme: {\n    extend: {\n      colors: {\n        amber: {\n          500: '#c8762a',\n          glow: 'rgba(200, 118, 42, 0.25)',\n        }\n      }\n    }\n  },\n  plugins: [],\n}`
                },
                config: {
                    filename: 'postcss.config.js',
                    language: 'javascript',
                    code: `module.exports = {\n  plugins: {\n    tailwindcss: {},\n    autoprefixer: {},\n  },\n}`
                }
            }
        }
    ],
    backend: [
        {
            name: 'Node.js',
            emoji: '🟩',
            description: 'Building event-driven HTTP architectures, asynchronously streaming pipelines, executing multi-threaded tasks, and coordinating background subprocesses.',
            tags: ['Event Loop', 'Stream Pipelines', 'File I/O'],
            files: {
                source: {
                    filename: 'serverStream.js',
                    language: 'javascript',
                    code: `const fs = require('fs');\nconst http = require('http');\n\nconst server = http.createServer((req, res) => {\n  const stream = fs.createReadStream('./candidate_logs.json');\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  stream.pipe(res);\n});\n\nserver.listen(8080);`
                },
                secondary: {
                    filename: 'eventEmitter.js',
                    language: 'javascript',
                    code: `const EventEmitter = require('events');\n\nclass AlchemicalEmitter extends EventEmitter {}\n\nconst emitter = new AlchemicalEmitter();\nemitter.on('ignite', () => {\n  console.log('🔥 Runic alchemical emitter triggered!');\n});\n\nemitter.emit('ignite');`
                },
                config: {
                    filename: 'package.json',
                    language: 'json',
                    code: `{\n  "name": "node-alchemy-service",\n  "main": "serverStream.js",\n  "engines": {\n    "node": ">=20.0.0"\n  },\n  "type": "commonjs"\n}`
                }
            }
        },
        {
            name: 'Express',
            emoji: '🚂',
            description: 'Architecting secure API routes, wiring rate-limiting policies, configuring middleware stacks, and wrapping controllers in error boundaries.',
            tags: ['REST APIs', 'Error Boundaries', 'Middleware'],
            files: {
                source: {
                    filename: 'asyncHandler.ts',
                    language: 'typescript',
                    code: `import express, { Request, Response, NextFunction } from 'express';\n\nconst asyncHandler = (fn: Function) => \n  (req: Request, res: Response, next: NextFunction) => \n    Promise.resolve(fn(req, res, next)).catch(next);\n\napp.get('/api/users', asyncHandler(async (req: Request, res: Response) => {\n  const users = await db.fetchUsers();\n  res.json({ success: true, data: users });\n}));`
                },
                secondary: {
                    filename: 'rateLimit.ts',
                    language: 'typescript',
                    code: `import rateLimit from 'express-rate-limit';\n\nexport const apiLimiter = rateLimit({\n  windowMs: 15 * 60 * 1000, // 15 mins\n  max: 100, // limit each IP to 100 request windows\n  message: 'Too many alchemical requests, try again later.',\n  standardHeaders: true,\n  legacyHeaders: false\n});`
                },
                config: {
                    filename: 'app.config.json',
                    language: 'json',
                    code: `{\n  "port": 5000,\n  "apiPrefix": "/api/v1",\n  "enableCompression": true,\n  "helmetHeaders": true\n}`
                }
            }
        },
        {
            name: 'JWT & RBAC',
            emoji: '🔐',
            description: 'Enforcing stateless token sessions, parsing crypto payloads, setting up secure token cookies, and validating fine-grained authorization matrices.',
            tags: ['Cryptography', 'Access Control', 'API Security'],
            files: {
                source: {
                    filename: 'authorize.ts',
                    language: 'typescript',
                    code: `import { Request, Response, NextFunction } from 'express';\n\nexport const authorize = (allowedRoles: string[]) => {\n  return (req: Request, res: Response, next: NextFunction) => {\n    const userRole = req.user?.role;\n    if (!userRole || !allowedRoles.includes(userRole)) {\n      return res.status(403).json({ error: 'Access Denied' });\n    }\n    next();\n  };\n};`
                },
                secondary: {
                    filename: 'jwtSign.ts',
                    language: 'typescript',
                    code: `import jwt from 'jsonwebtoken';\n\nexport const generateToken = (payload: object): string => {\n  return jwt.sign(payload, process.env.JWT_SECRET!, {\n    expiresIn: '7d',\n    algorithm: 'HS256'\n  });\n};`
                },
                config: {
                    filename: 'security.json',
                    language: 'json',
                    code: `{\n  "jwtExpiresIn": "7d",\n  "cookieSecure": true,\n  "sameSite": "strict",\n  "maxAge": 604800000\n}`
                }
            }
        }
    ],
    database: [
        {
            name: 'PostgreSQL',
            emoji: '🐘',
            description: 'Normalizing relational entities, indexing complex lookup fields, writing clean SQL transactions, and securing database constraints.',
            tags: ['SQL Transactions', 'Indexing Strategies', 'RDBMS'],
            files: {
                source: {
                    filename: 'schema.sql',
                    language: 'sql',
                    code: `BEGIN;\n\nCREATE TABLE audit_logs (\n  id SERIAL PRIMARY KEY,\n  user_id INT REFERENCES users(id) ON DELETE CASCADE,\n  action VARCHAR(255) NOT NULL,\n  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()\n);\n\nCREATE INDEX idx_audit_user ON audit_logs(user_id);\n\nCOMMIT;`
                },
                secondary: {
                    filename: 'queries.sql',
                    language: 'sql',
                    code: `SELECT u.name, COUNT(a.id) AS activity_count\nFROM users u\nLEFT JOIN audit_logs a ON u.id = a.user_id\nWHERE a.timestamp > NOW() - INTERVAL '30 days'\nGROUP BY u.id, u.name\nORDER BY activity_count DESC\nLIMIT 10;`
                },
                config: {
                    filename: 'db.config.json',
                    language: 'json',
                    code: `{\n  "dialect": "postgres",\n  "pool": {\n    "max": 10,\n    "min": 2,\n    "idleTimeout": 10000,\n    "acquire": 30000\n  }\n}`
                }
            }
        },
        {
            name: 'MongoDB',
            emoji: '🍃',
            description: 'Modeling dynamic document schemes, optimizing write/read parameters, and configuring heavy MongoDB aggregate operations for data extraction.',
            tags: ['Aggregations', 'Document Modeling', 'NoSQL scaling'],
            files: {
                source: {
                    filename: 'aggregation.js',
                    language: 'javascript',
                    code: `db.candidates.aggregate([\n  { $match: { status: 'Hired' } },\n  { $group: {\n      _id: '$department',\n      averageExperience: { $avg: '$experienceYears' },\n      count: { $sum: 1 }\n  }},\n  { $sort: { count: -1 } }\n]);`
                },
                secondary: {
                    filename: 'candidate.model.js',
                    language: 'javascript',
                    code: `const mongoose = require('mongoose');\n\nconst candidateSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  email: { type: String, unique: true, required: true },\n  status: { type: String, default: 'Applied' }\n}, { timestamps: true });\n\nmodule.exports = mongoose.model('Candidate', candidateSchema);`
                },
                config: {
                    filename: 'mongod.conf',
                    language: 'yaml',
                    code: `storage:\n  dbPath: /var/lib/mongodb\n  journal:\n    enabled: true\n\nnet:\n  port: 27017\n  bindIp: 127.0.0.1\n\nsecurity:\n  authorization: enabled`
                }
            }
        }
    ],
    tools: [
        {
            name: 'Docker',
            emoji: '🐳',
            description: 'Writing minimal multi-stage image containers, managing environment logic isolation, and networking local docker containers for local replication.',
            tags: ['Multi-Stage', 'Image Optimization', 'Virtualization'],
            files: {
                source: {
                    filename: 'Dockerfile',
                    language: 'dockerfile',
                    code: `FROM node:20-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nRUN npm run build\n\nFROM node:20-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY --from=builder /app/dist ./dist\nEXPOSE 3000\nCMD ["node", "dist/main.js"]`
                },
                secondary: {
                    filename: 'docker-compose.yml',
                    language: 'yaml',
                    code: `version: '3.8'\nservices:\n  api:\n    build: .\n    ports:\n      - "3000:3000"\n    environment:\n      - DATABASE_URL=postgres://db:5432/alchemy\n    depends_on:\n      - db\n  db:\n    image: postgres:15-alpine\n    environment:\n      - POSTGRES_PASSWORD=secret`
                },
                config: {
                    filename: '.dockerignore',
                    language: 'dockerfile',
                    code: `node_modules\nnpm-debug.log\ndist\n.git\nDockerfile\ndocker-compose.yml\nREADME.md`
                }
            }
        },
        {
            name: 'Git & GitHub',
            emoji: '🌿',
            description: 'Resolving complex rebase operations, orchestrating feature branches, review standards, and deploying automated GitHub Actions workflows.',
            tags: ['CI/CD Actions', 'Rebasing', 'Branching Logic'],
            files: {
                source: {
                    filename: 'release.sh',
                    language: 'bash',
                    code: `# Standard automated git release workflow\ngit checkout main\ngit pull origin main\ngit checkout -b release/v2.1.0\ngit merge develop --no-ff -m "chore: release production v2.1.0"\ngit push origin release/v2.1.0`
                },
                secondary: {
                    filename: 'ci.yml',
                    language: 'yaml',
                    code: `name: Node CI/CD\non:\n  push:\n    branches: [ main ]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Use Node.js\n        uses: actions/setup-node@v4\n        with:\n          node-version: '20'\n      - run: npm ci\n      - run: npm run build`
                },
                config: {
                    filename: '.gitignore',
                    language: 'bash',
                    code: `node_modules/\ndist/\n.env\n.DS_Store\n*.log\npackage-lock.json`
                }
            }
        }
    ]
}

// Staggered list animations
const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 }
    }
}

const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: [0.25, 0.8, 0.25, 1] as const }
    }
}

// Vintage filigree corner frames helper
const CornerOrnaments = () => (
    <>
        {/* Top Left */}
        <div style={{ position: 'absolute', top: '8px', left: '8px', width: '22px', height: '22px', borderTop: '2px solid var(--amber)', borderLeft: '2px solid var(--amber)', pointerEvents: 'none', opacity: 0.7 }} />
        <div style={{ position: 'absolute', top: '14px', left: '14px', width: '4px', height: '4px', background: 'var(--gold)', borderRadius: '50%', pointerEvents: 'none', opacity: 0.7 }} />
        {/* Top Right */}
        <div style={{ position: 'absolute', top: '8px', right: '8px', width: '22px', height: '22px', borderTop: '2px solid var(--amber)', borderRight: '2px solid var(--amber)', pointerEvents: 'none', opacity: 0.7 }} />
        <div style={{ position: 'absolute', top: '14px', right: '14px', width: '4px', height: '4px', background: 'var(--gold)', borderRadius: '50%', pointerEvents: 'none', opacity: 0.7 }} />
        {/* Bottom Left */}
        <div style={{ position: 'absolute', bottom: '8px', left: '8px', width: '22px', height: '22px', borderBottom: '2px solid var(--amber)', borderLeft: '2px solid var(--amber)', pointerEvents: 'none', opacity: 0.7 }} />
        <div style={{ position: 'absolute', bottom: '14px', left: '14px', width: '4px', height: '4px', background: 'var(--gold)', borderRadius: '50%', pointerEvents: 'none', opacity: 0.7 }} />
        {/* Bottom Right */}
        <div style={{ position: 'absolute', bottom: '8px', right: '8px', width: '22px', height: '22px', borderBottom: '2px solid var(--amber)', borderRight: '2px solid var(--amber)', pointerEvents: 'none', opacity: 0.7 }} />
        <div style={{ position: 'absolute', bottom: '14px', right: '14px', width: '4px', height: '4px', background: 'var(--gold)', borderRadius: '50%', pointerEvents: 'none', opacity: 0.7 }} />
    </>
)

// Dynamic floating golden alchemical ember particles
const FloatingEmbers = () => {
    return (
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
            {[1, 2, 3, 4, 5].map((i) => {
                const left = `${15 + i * 14}%`
                const size = `${3 + (i % 3) * 2}px`
                const delay = `${i * 0.9}s`
                const duration = `${5.5 + (i % 2) * 2}s`
                return (
                    <div
                        key={i}
                        className="alchemical-ember"
                        style={{
                            position: 'absolute',
                            bottom: '-15px',
                            left,
                            width: size,
                            height: size,
                            borderRadius: '50%',
                            background: 'var(--gold-light)',
                            boxShadow: '0 0 8px var(--gold), 0 0 12px var(--amber)',
                            opacity: 0,
                            animation: `float-ember ${duration} linear infinite`,
                            animationDelay: delay,
                        }}
                    />
                )
            })}
        </div>
    )
}

// Rotating Alchemical Astrolabe SVG Sigil
const AstrolabeSigil = () => (
    <svg width="48" height="48" viewBox="0 0 100 100" style={{ animation: 'spin-slow 22s linear infinite', filter: 'drop-shadow(0 0 6px var(--amber-glow))' }}>
        <circle cx="50" cy="50" r="45" fill="none" stroke="var(--amber)" strokeWidth="2" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="38" fill="none" stroke="var(--brown-light)" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="28" fill="none" stroke="var(--amber-light)" strokeWidth="1" strokeDasharray="10 5" />
        <path d="M 50 2 L 50 98 M 2 50 L 98 50 M 16 16 L 84 84 M 16 84 L 84 16" stroke="rgba(200, 118, 42, 0.4)" strokeWidth="0.8" />
        <polygon points="50,15 55,35 75,35 60,47 65,70 50,58 35,70 40,47 25,35 45,35" fill="none" stroke="var(--gold)" strokeWidth="1" />
        <circle cx="50" cy="50" r="5" fill="var(--amber)" />
    </svg>
)

export default function Skills() {
    const [activeTab, setActiveTab] = useState('frontend')
    const [selectedSkill, setSelectedSkill] = useState<Skill>(skillsData['frontend'][0])
    const [activeFileKey, setActiveFileKey] = useState<'source' | 'secondary' | 'config'>('source')

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId)
        setSelectedSkill(skillsData[tabId][0])
        setActiveFileKey('source')
    }

    const handleSkillChange = (skill: Skill) => {
        setSelectedSkill(skill)
        setActiveFileKey('source')
    }

    const currentFile = selectedSkill.files[activeFileKey]

    return (
        <section id="skills" className="split-white-section" style={{
            padding: '6.5rem 0',
            position: 'relative',
            background: '#ffffff',
            backgroundImage: "url('/Design/d12.svg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflow: 'hidden'
        }}>
            <div className="section-wrapper">

                {/* Custom Section Header */}
                <div style={{ marginBottom: '4rem', textAlign: 'center', position: 'relative', zIndex: 2 }}>
                    <p className="section-label" style={{ marginBottom: '0.5rem' }}>03. capabilities</p>
                    <div className="section-divider" style={{ margin: '0 auto 1.5rem auto', maxWidth: '280px' }} />
                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2.4rem, 6vw, 4.4rem)',
                        fontWeight: 900,
                        color: 'var(--brown-dark)',
                        fontStyle: 'italic',
                        letterSpacing: '0.01em'
                    }}>
                        Codex of Engineering
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
                        Explore my interactive alchemical codex containing core engineering capabilities, technical mastery statistics, and live production code artifacts.
                    </p>
                </div>

                {/* Grid Split Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.05fr 1.35fr',
                    gap: '3rem',
                    alignItems: 'start',
                    position: 'relative',
                    zIndex: 2
                }} className="about-grid">

                    {/* Left Column: Interactive Codex Controls */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

                        {/* Ancient Parchment Tab Switcher */}
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.5rem',
                            padding: '0.6rem',
                            background: 'rgba(242, 230, 204, 0.6)',
                            backdropFilter: 'blur(10px)',
                            border: '1.5px solid var(--border)',
                            borderRadius: '10px',
                            boxShadow: 'inset 0 2px 8px rgba(92,51,23,0.08), 0 4px 15px rgba(92,51,23,0.04)'
                        }}>
                            {categories.map((cat) => {
                                const isActive = activeTab === cat.id
                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => handleTabChange(cat.id)}
                                        className="parchment-tag"
                                        style={{
                                            flex: '1 1 calc(50% - 0.5rem)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '0.5rem',
                                            padding: '0.75rem 1rem',
                                            border: isActive ? '2.5px solid var(--amber)' : '2.5px solid transparent',
                                            borderRadius: '8px',
                                            fontFamily: 'var(--font-display)',
                                            fontSize: '0.9rem',
                                            fontWeight: 800,
                                            color: isActive ? '#fff' : 'var(--text-secondary)',
                                            background: isActive
                                                ? 'linear-gradient(135deg, var(--amber) 0%, var(--brown-light) 100%)'
                                                : 'rgba(250, 245, 233, 0.75)',
                                            boxShadow: isActive
                                                ? '0 6px 16px rgba(200, 118, 42, 0.3)'
                                                : '0 2px 6px rgba(44, 24, 16, 0.04)',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                                        }}
                                    >
                                        <span style={{ fontSize: '1.05rem' }}>{cat.emoji}</span>
                                        {cat.name}
                                    </button>
                                )
                            })}
                        </div>

                        {/* Skill Cards grid with cascaded load */}
                        <motion.div
                            key={activeTab}
                            variants={listContainerVariants}
                            initial="hidden"
                            animate="visible"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.1rem',
                            }}
                        >
                            {skillsData[activeTab].map((skill) => {
                                const isSelected = selectedSkill.name === skill.name
                                return (
                                    <motion.div
                                        key={skill.name}
                                        variants={cardVariants}
                                        onClick={() => handleSkillChange(skill)}
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '0.85rem',
                                            padding: '1.35rem 1.6rem',
                                            border: isSelected ? '2px solid var(--amber)' : '1.5px solid rgba(139, 80, 40, 0.15)',
                                            borderRadius: '10px',
                                            background: isSelected ? '#ffffff' : 'rgba(250, 245, 233, 0.7)',
                                            boxShadow: isSelected
                                                ? '0 10px 30px rgba(200,118,42,0.14), inset 0 0 12px rgba(200,118,42,0.03)'
                                                : '0 4px 15px rgba(92,51,23,0.03)',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}
                                        whileHover={{
                                            transform: 'translateY(-3px)',
                                            borderColor: 'var(--amber-light)',
                                            background: '#ffffff',
                                            boxShadow: '0 10px 25px rgba(92,51,23,0.07)'
                                        }}
                                    >
                                        {/* Subtle gold stripe for selected card */}
                                        {isSelected && <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: 'var(--amber)' }} />}

                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                                                {/* Circular Gold Emblem */}
                                                <div style={{
                                                    width: '38px',
                                                    height: '38px',
                                                    borderRadius: '50%',
                                                    background: isSelected ? 'rgba(200, 118, 42, 0.08)' : 'rgba(139, 80, 40, 0.06)',
                                                    border: '1.5px solid var(--border)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)'
                                                }}>
                                                    <span style={{ fontSize: '1.35rem' }}>{skill.emoji}</span>
                                                </div>
                                                <span style={{
                                                    fontFamily: 'var(--font-display)',
                                                    fontSize: '1.3rem',
                                                    fontWeight: 800,
                                                    color: 'var(--brown-dark)'
                                                }}>{skill.name}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </div>

                    {/* Right Column: Dynamic Alchemical Slate (Grimoire Card) */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedSkill.name}
                            initial={{ opacity: 0, y: 30, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -30, scale: 0.98 }}
                            transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
                            className="split-col-card"
                            style={{
                                padding: '2.5rem',
                                background: 'rgba(255, 255, 255, 0.92)',
                                backdropFilter: 'blur(12px)',
                                border: '2px solid rgba(139, 80, 40, 0.25)',
                                borderRadius: '16px',
                                boxShadow: '0 16px 48px rgba(92,51,23,0.11), 0 0 24px rgba(200, 118, 42, 0.03)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.75rem',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Decorative Corner Frames & Embers */}
                            <CornerOrnaments />
                            <FloatingEmbers />

                            {/* Skill Detail Header */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderBottom: '2.5px solid rgba(139, 80, 40, 0.18)',
                                paddingBottom: '1.25rem',
                                position: 'relative',
                                zIndex: 2
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                                    {/* SVG astrolabe sigil spinning in background */}
                                    <AstrolabeSigil />
                                    <h3 style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: '2.2rem',
                                        fontStyle: 'italic',
                                        fontWeight: 950,
                                        color: 'var(--brown-dark)',
                                        letterSpacing: '0.01em',
                                        marginLeft: '0.25rem'
                                    }}>
                                        {selectedSkill.name}
                                    </h3>
                                </div>
                                <span className="chip" style={{
                                    fontSize: '0.78rem',
                                    fontWeight: 800,
                                    borderColor: 'var(--amber)',
                                    color: 'var(--amber)',
                                    background: 'rgba(200, 118, 42, 0.08)',
                                    boxShadow: '0 0 10px rgba(200, 118, 42, 0.1)',
                                    padding: '0.4rem 0.9rem',
                                    borderRadius: '100px'
                                }}>
                                    Active Spell
                                </span>
                            </div>

                            {/* Alchemical Lore */}
                            <p style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '1.02rem',
                                color: 'var(--text-primary)',
                                lineHeight: 1.75,
                                textAlign: 'justify',
                                position: 'relative',
                                zIndex: 2,
                                fontWeight: 500
                            }}>
                                {selectedSkill.description}
                            </p>

                            {/* Meta Tags */}
                            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', position: 'relative', zIndex: 2 }}>
                                {selectedSkill.tags.map((tag) => (
                                    <span key={tag} className="chip" style={{
                                        fontSize: '0.72rem',
                                        fontWeight: 700,
                                        background: 'rgba(200, 118, 42, 0.06)',
                                        borderColor: 'rgba(200, 118, 42, 0.2)',
                                        padding: '0.35rem 0.85rem',
                                        color: 'var(--text-secondary)'
                                    }}>
                                        ✦ {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Live Code Mock Terminal */}
                            <div style={{
                                background: '#19110c',
                                border: '1.5px solid rgba(139,80,40,0.3)',
                                borderRadius: '10px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 35px rgba(44,24,16,0.22)',
                                position: 'relative',
                                zIndex: 2
                            }}>
                                {/* Editor Header with multi-file tabs */}
                                <div style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                    padding: '0 1rem', borderBottom: '1px solid rgba(200,118,42,0.15)',
                                    background: '#120c08',
                                    height: '42px'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', height: '100%' }}>
                                        {/* Windows control circles */}
                                        <div style={{ display: 'flex', gap: '0.35rem', marginRight: '0.5rem' }}>
                                            <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#ff5f57', opacity: 0.8 }} />
                                            <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#ffbd2e', opacity: 0.8 }} />
                                            <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#28ca42', opacity: 0.8 }} />
                                        </div>

                                        {/* Tab Switcher */}
                                        <div style={{ display: 'flex', gap: '2px', height: '100%', alignItems: 'flex-end' }}>
                                            {(['source', 'secondary', 'config'] as const).map((key) => {
                                                const file = selectedSkill.files[key]
                                                const isActive = activeFileKey === key
                                                return (
                                                    <button
                                                        key={key}
                                                        onClick={() => setActiveFileKey(key)}
                                                        style={{
                                                            padding: '0 0.85rem',
                                                            height: '32px',
                                                            background: isActive ? '#19110c' : 'transparent',
                                                            border: 'none',
                                                            borderTopLeftRadius: '5px',
                                                            borderTopRightRadius: '5px',
                                                            fontFamily: 'var(--font-mono)',
                                                            fontSize: '0.67rem',
                                                            color: isActive ? 'var(--amber-light)' : '#8b6a4a',
                                                            borderBottom: isActive ? '2px solid var(--amber)' : '2px solid transparent',
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '0.3rem',
                                                            transition: 'all 0.2s',
                                                            fontWeight: isActive ? 700 : 500
                                                        }}
                                                    >
                                                        <span style={{ opacity: isActive ? 1 : 0.6 }}>🗎</span>
                                                        {file.filename}
                                                    </button>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <span style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.65rem',
                                        color: 'rgba(200, 118, 42, 0.8)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.08em',
                                        fontWeight: 700
                                    }}>
                                        {currentFile.language}
                                    </span>
                                </div>

                                {/* Syntax Highlighted Body */}
                                <div className="code-editor-body" style={{
                                    padding: '1.5rem 1.25rem',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.78rem',
                                    lineHeight: 1.85,
                                    overflowX: 'auto',
                                    whiteSpace: 'nowrap',
                                    background: '#19110c',
                                }}>
                                    <pre style={{ margin: 0 }}>
                                        <code style={{
                                            fontFamily: 'inherit',
                                            fontSize: 'inherit',
                                            color: '#e0b865',
                                        }}>
                                            {currentFile.code.split('\n').map((line, idx) => (
                                                <div key={idx} style={{ display: 'flex', gap: '1.25rem' }}>
                                                    {/* Line Numbers */}
                                                    <span style={{
                                                        color: '#5c3d25',
                                                        userSelect: 'none',
                                                        minWidth: '1.5rem',
                                                        fontSize: '0.65rem',
                                                        textAlign: 'right'
                                                    }}>{idx + 1}</span>
                                                    {/* Styled Code Lines */}
                                                    <span style={{
                                                        color: line.trim().startsWith('//') || line.trim().startsWith('#') || line.trim().startsWith('/*') || line.trim().startsWith('*') || line.trim().startsWith('@')
                                                            ? '#6b8050' // Comments / annotations
                                                            : line.includes('import') || line.includes('export') || line.includes('const') || line.includes('type') || line.includes('interface') || line.includes('return') || line.includes('function') || line.includes('FROM') || line.includes('WORKDIR') || line.includes('RUN') || line.includes('COPY') || line.includes('EXPOSE') || line.includes('CMD') || line.includes('BEGIN') || line.includes('COMMIT') || line.includes('CREATE') || line.includes('INDEX')
                                                                ? '#d4845a' // Keywords
                                                                : line.includes('"') || line.includes("'") || line.includes('`')
                                                                    ? '#9ebf7a' // Strings
                                                                    : line.includes('extends') || line.includes('implements') || line.includes('Role') || line.includes('UserProfile') || line.includes('AllowedRoles')
                                                                        ? '#e0c085' // Types
                                                                        : '#c8c0a0' // Standard identifiers
                                                    }}>
                                                        {line}
                                                    </span>
                                                </div>
                                            ))}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
