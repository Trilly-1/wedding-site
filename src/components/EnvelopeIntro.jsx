import { useState, useEffect } from 'react'

export default function EnvelopeIntro({ onEnter }) {
  const [stage,   setStage]   = useState('idle')
  const [leaving, setLeaving] = useState(false)
  const [showFireworks, setShowFireworks] = useState(false)

  useEffect(() => {
    // Add animations to the document head
    const style = document.createElement('style')
    style.textContent = `
      @keyframes moveLeftToCenter {
        0% {
          transform: translateX(0) translateY(0) scale(1);
        }
        100% {
          transform: translateX(120px) translateY(0) scale(1);
        }
      }

      @keyframes moveRightToCenter {
        0% {
          transform: translateX(0) translateY(0) scale(1);
        }
        100% {
          transform: translateX(-120px) translateY(0) scale(1);
        }
      }

      @keyframes diveIntoEnvelope-left {
        0% {
          transform: translateX(0) translateY(0) scale(1);
          opacity: 1;
        }
        100% {
          transform: translateX(30px) translateY(80px) scale(0.3);
          opacity: 0;
        }
      }

      @keyframes diveIntoEnvelope-right {
        0% {
          transform: translateX(0) translateY(0) scale(1);
          opacity: 1;
        }
        100% {
          transform: translateX(-30px) translateY(80px) scale(0.3);
          opacity: 0;
        }
      }

      @keyframes flyInFromLeft {
        0% {
          opacity: 0;
          transform: translateX(-150px) translateY(-50px) scale(0.5);
        }
        100% {
          opacity: 1;
          transform: translateX(0) translateY(0) scale(1);
        }
      }

      @keyframes flyInFromRight {
        0% {
          opacity: 0;
          transform: translateX(150px) translateY(-50px) scale(0.5);
        }
        100% {
          opacity: 1;
          transform: translateX(0) translateY(0) scale(1);
        }
      }

      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-15px);
        }
      }

      @keyframes pulse-glow {
        0%, 100% {
          filter: drop-shadow(0 0 10px rgba(201, 160, 90, 0.5));
        }
        50% {
          filter: drop-shadow(0 0 25px rgba(201, 160, 90, 1));
        }
      }

      @keyframes shine {
        0%, 100% {
          text-shadow: 0 0 10px rgba(201, 160, 90, 0.5), 0 0 20px rgba(255, 215, 0, 0.3);
        }
        50% {
          text-shadow: 0 0 20px rgba(201, 160, 90, 1), 0 0 40px rgba(255, 215, 0, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.2);
        }
      }

      @keyframes pulse-scale {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
      }

      @keyframes fireworks {
        0% {
          opacity: 1;
          transform: translate(0, 0) scale(1);
        }
        100% {
          opacity: 0;
          transform: translate(var(--tx), var(--ty)) scale(0);
        }
      }

      @keyframes fall-hearts {
        0% {
          opacity: 1;
          transform: translateY(-100px) rotate(0deg);
        }
        100% {
          opacity: 0;
          transform: translateY(100vh) rotate(360deg);
        }
      }

      .animate-move-to-center-left {
        animation: moveLeftToCenter 1.5s ease-in-out forwards;
        animation-delay: 2.5s;
      }

      .animate-move-to-center-right {
        animation: moveRightToCenter 1.5s ease-in-out forwards;
        animation-delay: 2.5s;
      }

      .animate-dive-in-left {
        animation: diveIntoEnvelope-left 0.8s ease-in forwards;
        animation-delay: 4s;
      }

      .animate-dive-in-right {
        animation: diveIntoEnvelope-right 0.8s ease-in forwards;
        animation-delay: 4s;
      }

      .animate-fly-in-left {
        animation: flyInFromLeft 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }

      .animate-fly-in-right {
        animation: flyInFromRight 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }

      .animate-float {
        animation: float 3s ease-in-out infinite;
      }

      .animate-pulse-glow {
        animation: pulse-glow 2s ease-in-out infinite;
      }

      .animate-shine {
        animation: shine 2s ease-in-out infinite;
      }

      .animate-pulse-scale {
        animation: pulse-scale 2s ease-in-out infinite;
      }

      .firework {
        animation: fireworks 1.5s ease-out forwards;
        pointer-events: none;
      }

      .fall-heart {
        animation: fall-hearts 3s ease-in forwards;
        pointer-events: none;
      }
    `
    document.head.appendChild(style)
    return () => style.remove()
  }, [])

  // Auto-play sequence timer
  useEffect(() => {
    if (stage === 'idle') {
      const timer1 = setTimeout(() => {
        // After avatars clap (at 4.6s), show hearts and start transition
        setShowFireworks(true)
        setLeaving(true)
      }, 4600)

      const timer2 = setTimeout(() => {
        // After fade out animation, go to main page
        onEnter()
      }, 5500)

      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
      }
    }
  }, [stage, onEnter])

  const handleEnvelopeClick = () => {
    if (stage !== 'idle') return
    setShowFireworks(true)
    setStage('flap-opening')
    setTimeout(() => setStage('cards-rising'), 950)
  }

  const handleViewMore = (e) => {
    e.stopPropagation()
    setLeaving(true)
    setTimeout(() => onEnter(), 900)
  }

  const flapOpen    = stage === 'flap-opening' || stage === 'cards-rising'
  const cardsRising = stage === 'cards-rising'

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center bg-dark-grad overflow-hidden transition-all duration-700 ${leaving ? 'scene-leave' : ''}`}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(162,82,106,0.22) 0%, transparent 70%)' }}
      />

      {/* Floating petals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <span key={i} className="absolute rounded-tl-full rounded-br-full petal-fall"
            style={{
              width: `${8 + i * 2}px`, height: `${12 + i * 2}px`,
              left: `${i * 5.5}%`, top: '-20px',
              '--dur': `${6 + i * 0.4}s`, '--delay': `${i * 0.3}s`,
              background: 'radial-gradient(ellipse at 30% 30%, rgba(242,196,206,0.6), rgba(162,82,106,0.2))',
            }}
          />
        ))}
      </div>

      {/* ✨ ANIMATED AVATARS - Auto-play sequence ✨ */}
      {stage === 'idle' && (
        <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none" style={{ opacity: leaving ? 0 : 1, transition: 'opacity 0.7s ease' }}>
          {/* LEFT AVATAR - Timothy */}
          <div className="absolute animate-fly-in-left animate-move-to-center-left animate-dive-in-left hidden md:block" style={{ animationDelay: '0s' }}>
            <div className="relative w-48 h-48 mx-auto animate-float">
              <div className="absolute inset-0 rounded-full animate-pulse-glow" />
              <div
                className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #c9a05a 0%, #e5d4b8 50%, #c9a05a 100%)',
                  boxShadow: '0 20px 60px rgba(201, 160, 90, 0.4)',
                  border: '4px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                {/* Timothy - Male Avatar */}
                <svg className="w-5/6 h-5/6" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="80" r="50" fill="#FFD7A8" stroke="#8B6F47" strokeWidth="2" />
                  <circle cx="85" cy="70" r="6" fill="#000" />
                  <circle cx="87" cy="68" r="2" fill="#FFF" />
                  <circle cx="115" cy="70" r="6" fill="#000" />
                  <circle cx="117" cy="68" r="2" fill="#FFF" />
                  <path d="M 85 95 Q 100 110 115 95" stroke="#8B6F47" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <ellipse cx="100" cy="150" rx="35" ry="40" fill="#4A5F8F" stroke="#8B6F47" strokeWidth="2" />
                  <path d="M 95 145 L 100 140 L 105 145 L 100 155 Z" fill="#FF69B4" />
                </svg>
              </div>
            </div>
          </div>

          {/* RIGHT AVATAR - Hope */}
          <div className="absolute animate-fly-in-right animate-move-to-center-right animate-dive-in-right hidden md:block" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-48 h-48 mx-auto animate-float" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 rounded-full animate-pulse-glow" />
              <div
                className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #FFB6D9 0%, #FFD7E8 50%, #FFB6D9 100%)',
                  boxShadow: '0 20px 60px rgba(255, 107, 177, 0.4)',
                  border: '4px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                {/* Hope - Female Avatar */}
                <svg className="w-5/6 h-5/6" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="80" r="50" fill="#FFE0D8" stroke="#C08B7F" strokeWidth="2" />
                  {/* Hair */}
                  <path d="M 50 80 Q 50 30, 100 30 Q 150 30, 150 80" fill="#8B4513" />
                  <circle cx="85" cy="70" r="6" fill="#000" />
                  <circle cx="87" cy="68" r="2" fill="#FFF" />
                  <circle cx="115" cy="70" r="6" fill="#000" />
                  <circle cx="117" cy="68" r="2" fill="#FFF" />
                  <path d="M 80 90 Q 100 100 120 90" stroke="#C08B7F" strokeWidth="2" fill="none" strokeLinecap="round" />
                  {/* Dress */}
                  <path d="M 70 130 Q 100 155 130 130 L 125 180 Q 100 185 75 180 Z" fill="#FFB6D9" stroke="#C08B7F" strokeWidth="2" />
                  {/* Heart on dress */}
                  <path d="M 95 150 L 100 145 L 105 150 L 100 160 Z" fill="#FF1493" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ✨ FALLING HEARTS - Show during clap & transition ✨ */}
      {showFireworks && (
        <>
          {/* Falling hearts */}
          {[...Array(25)].map((_, i) => (
            <div
              key={`heart-${i}`}
              className="fixed fall-heart text-3xl"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: '10%',
                animation: `fall-hearts ${2 + Math.random() * 1.5}s ease-in forwards`,
                animationDelay: `${i * 0.1}s`,
                pointerEvents: 'none',
              }}
            >
              ❤️
            </div>
          ))}
        </>
      )}

      {/* Top tagline */}
      <p className={`font-body text-[0.7rem] tracking-[0.4em] uppercase text-gold/60 mb-6 transition-opacity duration-500 ${showFireworks ? 'opacity-0' : 'opacity-100'}`}>
        You have a message
      </p>

      {/*
        ── Scene container ──
        Fixed width, height expands when cards appear so they push INTO view
        (not off the top of the screen). Cards live at the TOP of this box;
        envelope sits at the BOTTOM. When cardsRising the box grows upward
        via padding-top, keeping the viewport centred on the envelope.
      */}
      <div style={{ position: 'relative', width: '360px', opacity: showFireworks ? 0 : 1, transition: 'opacity 0.5s ease' }}>

        {/* Card fan — appears above envelope */}
        <div
          style={{
            position: 'relative',
            height: cardsRising ? '290px' : '0px',
            overflow: 'visible',
            transition: 'height 0.5s ease',
            pointerEvents: 'none',
          }}
        >
          {/* LEFT card */}
          <CardSlot
            visible={cardsRising}
            delay="0.05s"
            finalStyle={{ transform: 'translateX(-118px) translateY(20px) rotate(-12deg)', zIndex: 20 }}
          >
            <InviteCard bg="linear-gradient(135deg,#FFF8F0,#FBE8ED)">
              <p className="text-rose text-lg tracking-widest">❀ ✿ ❀</p>
              <p className="font-body text-[0.6rem] tracking-[0.25em] uppercase text-gold mt-1">— with joy —</p>
              <h2 className="font-script text-[2.2rem] text-rose-d leading-none my-2">You're Invited</h2>
              <p className="font-display italic text-[0.8rem] text-ink-l">June 13 · 2026</p>
              <p className="text-rose text-lg tracking-widest mt-2">❀ ✿ ❀</p>
            </InviteCard>
          </CardSlot>

          {/* CENTER card */}
          <CardSlot
            visible={cardsRising}
            delay="0.18s"
            finalStyle={{ transform: 'translateX(0) translateY(0) rotate(0deg) scale(1.04)', zIndex: 25 }}
          >
            <InviteCard bg="linear-gradient(135deg,#FDFAF4,#F5EFE0)">
              <p className="font-body text-[0.6rem] tracking-[0.3em] uppercase text-gold mb-1">The wedding of</p>
              <h2 className="font-script text-[2rem] text-rose-d leading-tight">Timothy</h2>
              <p className="font-display italic text-[1.6rem] text-gold leading-none my-0.5">&amp;</p>
              <h2 className="font-script text-[2rem] text-rose-d leading-tight">Hope</h2>
              <p className="font-display italic text-[0.7rem] text-ink-l mt-2 leading-relaxed px-1">
                "the stone that was rejected, became the chief cornerstone"
              </p>
            </InviteCard>
          </CardSlot>

          {/* RIGHT card — CTA */}
          <CardSlot
            visible={cardsRising}
            delay="0.31s"
            finalStyle={{ transform: 'translateX(118px) translateY(20px) rotate(12deg)', zIndex: 20 }}
            onClick={e => e.stopPropagation()}
          >
            <InviteCard bg="linear-gradient(135deg,#FFF8F0,#FBE8ED)">
              <div className="text-3xl mb-3">💍</div>
              <p className="font-display italic text-[0.85rem] text-ink-l leading-relaxed">
                We can't wait<br />to celebrate with you!
              </p>
              <button
                onClick={handleViewMore}
                className="mt-4 bg-rose-grad text-white font-body text-[0.72rem] tracking-widest uppercase rounded-full px-5 py-2.5 flex items-center gap-2 mx-auto transition-transform hover:scale-105 shadow-lg"
                style={{ boxShadow: '0 4px 16px rgba(122,48,80,0.35)' }}
              >
                View Our Story
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </InviteCard>
          </CardSlot>
        </div>

        {/* ── Envelope ── */}
        <div
          className={`env-perspective cursor-pointer select-none ${flapOpen ? 'envelope-opened' : ''}`}
          style={{ width: '340px', margin: '0 auto' }}
          onClick={handleEnvelopeClick}
          role="button"
          tabIndex={0}
          aria-label="Open the invitation"
          onKeyDown={e => e.key === 'Enter' && handleEnvelopeClick()}
        >
          <div className="relative" style={{ width: '340px', height: '230px', filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.55))' }}>
            {/* Back */}
            <div className="absolute inset-0 rounded" style={{ background: 'linear-gradient(160deg, #E8C880, #C9A05A)' }} />
            {/* Left wing */}
            <div className="absolute bottom-0 left-0" style={{ width: 0, height: 0, borderStyle: 'solid', borderWidth: '0 0 145px 170px', borderColor: 'transparent transparent #D4AF70 transparent' }} />
            {/* Right wing */}
            <div className="absolute bottom-0 right-0" style={{ width: 0, height: 0, borderStyle: 'solid', borderWidth: '0 170px 145px 0', borderColor: 'transparent #D4AF70 transparent transparent' }} />
            {/* Bottom strip */}
            <div className="absolute bottom-0 left-0 right-0 h-[60px] rounded-b" style={{ background: 'linear-gradient(to top, #C9A05A, #E0B96A)' }} />

            {/* Flap */}
            <div className="env-flap env-preserve absolute top-0 left-0 right-0 z-20 overflow-hidden" style={{ height: '160px' }}>
              <svg viewBox="0 0 340 180" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
                <polygon points="0,0 170,160 340,0" fill="#E8C880" />
                <polygon points="0,0 170,160 340,0" fill="none" stroke="#C9A05A" strokeWidth="1" />
              </svg>
            </div>

            {/* Wax seal */}
            <div
              className={`wax-seal absolute z-30 ${flapOpen ? 'seal-break' : ''}`}
              style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '68px', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4))' }}
            >
              <svg viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="38" fill="#A0526A" />
                <circle cx="40" cy="40" r="30" fill="none" stroke="#F5E6C0" strokeWidth="1.5" />
                <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle"
                  fill="#F5E6C0" fontSize="20" fontFamily="Great Vibes, cursive">T & H</text>
              </svg>
            </div>

            {/* Click hint */}
            {stage === 'idle' && (
              <div className="click-pulse absolute -bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
                <span className="dot-pulse w-2 h-2 rounded-full bg-gold/80 block" />
                <p className="font-body text-[0.65rem] tracking-[0.2em] uppercase text-gold/60">Click to open</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom name label */}
      <div className={`mt-16 flex items-center gap-3 transition-opacity duration-500 ${flapOpen ? 'opacity-0' : 'opacity-100'}`}>
        <span className="font-script text-[2rem] text-cream/80">Timothy</span>
        <span className="font-display italic text-[1.3rem] text-gold/70">&amp;</span>
        <span className="font-script text-[2rem] text-cream/80">Hope</span>
      </div>
    </div>
  )
}

/* Each card sits at bottom-centre of its slot, then rises to finalStyle position */
function CardSlot({ visible, delay, finalStyle, children, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        left: '50%',
        bottom: 0,
        marginLeft: '-100px',
        opacity: visible ? 1 : 0,
        transform: visible
          ? finalStyle.transform
          : 'translateX(0) translateY(60px) scale(0.7)',
        zIndex: finalStyle.zIndex ?? 20,
        transition: `opacity 0.6s ease ${delay}, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}`,
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {children}
    </div>
  )
}

function InviteCard({ bg, children }) {
  return (
    <div
      className="w-[200px] min-h-[265px] rounded-xl flex flex-col items-center justify-center text-center p-5 shadow-2xl border border-gold/20"
      style={{ background: bg }}
    >
      {children}
    </div>
  )
}