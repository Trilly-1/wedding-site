import { useState } from 'react'
import EnvelopeIntro from './components/EnvelopeIntro'
import Navigation   from './components/Navigation'
import Hero         from './components/Hero'
import LoveStory    from './components/LoveStory'
import Countdown    from './components/Countdown'
import EventDetails from './components/EventDetails'
import Location     from './components/Location'
import Gallery      from './components/Gallery'
import Gifts        from './components/Gifts'
import Footer       from './components/Footer'

export default function App() {
  const [showMain, setShowMain] = useState(false)

  return (
    <>
      {!showMain
        ? <EnvelopeIntro onEnter={() => setShowMain(true)} />
        : (
          <div className="min-h-screen bg-cream animate-[fadeUp_0.8s_ease_both]">
            <Navigation />
            <main>
              <Hero />
              <LoveStory />
              <Countdown />
              <EventDetails />
              <Location />
              <Gallery />
              <Gifts />
            </main>
            <Footer />
          </div>
        )
      }

      {/* ── #G0discooking watermark — fixed, visible on every page ── */}
      <a
        href="https://instagram.com/G0discooking"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-[9999] flex items-center gap-1.5 rounded-full px-3 py-1.5 text-white/90 hover:text-white transition-all duration-300 hover:scale-105 group"
        style={{
          background: 'linear-gradient(135deg, rgba(43,26,42,0.82), rgba(74,34,53,0.82))',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(201,160,90,0.35)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.35)',
          fontSize: '0.7rem',
          letterSpacing: '0.05em',
          textDecoration: 'none',
        }}
      >
        {/* Camera icon */}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
          className="w-3.5 h-3.5 text-gold-l flex-shrink-0">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
          <circle cx="12" cy="13" r="4"/>
        </svg>
        <span className="font-body tracking-widest" style={{ color: '#E8C880' }}>
          #G0discooking
        </span>
      </a>
    </>
  )
}