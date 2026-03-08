import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'

// Lazy load heavy sections below the fold
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Achievements = lazy(() => import('./components/Achievements'))
const Contact = lazy(() => import('./components/Contact'))
const ParticleFooter = lazy(() => import('./components/ParticleFooter'))

function SectionFallback() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      minHeight: '200px', color: 'var(--text-muted)',
      fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
      letterSpacing: '0.2em',
    }}>
      {/* subtle loading state */}
    </div>
  )
}

export default function App() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Achievements />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ParticleFooter />
        </Suspense>
      </main>
    </>
  )
}
