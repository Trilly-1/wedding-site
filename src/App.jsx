import { useState } from 'react'
import Navigation from './components/Navigation'
import EnvelopeIntro from './components/EnvelopeIntro'
import Hero from './components/Hero'
import LoveStory from './components/LoveStory'
import Countdown from './components/Countdown'
import EventDetails from './components/EventDetails'
import Invitation from './components/Invitation'
import Location from './components/Location'
import Gallery from './components/Gallery'
import Gifts from './components/Gifts'
import Footer from './components/Footer'

export default function App() {
  const [showEnvelope, setShowEnvelope] = useState(true)

  const handleEnvelopeComplete = () => {
    setShowEnvelope(false)
  }

  if (showEnvelope) {
    return <EnvelopeIntro onEnter={handleEnvelopeComplete} />
  }

  return (
    <div>
      <Navigation />
      <Hero />
      <LoveStory />
      <Countdown />
      <EventDetails />
      <Invitation />
      <Location />
      <Gallery />
      <Gifts />
      <Footer />

      {/* GLOBAL FOOTER */}
      <div className="fixed bottom-4 right-4 z-[99999] pointer-events-none">
        <p
          className={`text-sm tracking-[0.25em] font-semibold transition-colors duration-500 ${
            showEnvelope
              ? 'text-[#D4B06A]'   // gold (dark intro)
              : 'text-[#A2526A]'   // purple (light site)
          }`}
        >
          #Godiscooking
        </p>
      </div>
    </div>
  )
}