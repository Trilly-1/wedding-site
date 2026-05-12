import { useState, useEffect } from 'react'

export default function EnvelopeIntro({ onEnter }) {
  const [stage,   setStage]   = useState('idle')
  const [leaving, setLeaving] = useState(false)
  const [showFireworks, setShowFireworks] = useState(false)

  useEffect(() => {
    // Add animations to the document head
    const style = document.createElement('style')
    style.textContent = `
      @keyframes walkLeftToHug {
        0% {
          transform: translateX(0) translateY(0) scale(1) rotateZ(0deg);
        }
        12% {
          transform: translateX(48px) translateY(-12px) scale(1) rotateZ(-1deg);
        }
        25% {
          transform: translateX(100px) translateY(0) scale(1) rotateZ(-1deg);
        }
        37% {
          transform: translateX(148px) translateY(-12px) scale(1) rotateZ(-2deg);
        }
        50% {
          transform: translateX(200px) translateY(-8px) scale(1) rotateZ(-2deg);
        }
        62% {
          transform: translateX(248px) translateY(-12px) scale(1) rotateZ(-2.5deg);
        }
        75% {
          transform: translateX(300px) translateY(0) scale(1) rotateZ(-2.5deg);
        }
        87% {
          transform: translateX(348px) translateY(-12px) scale(1) rotateZ(-3deg);
        }
        100% {
          transform: translateX(400px) translateY(0) scale(1) rotateZ(-3deg);
        }
      }

      @keyframes walkRightToHug {
        0% {
          transform: translateX(0) translateY(0) scale(1) rotateZ(0deg);
        }
        12% {
          transform: translateX(-48px) translateY(-12px) scale(1) rotateZ(1deg);
        }
        25% {
          transform: translateX(-100px) translateY(0) scale(1) rotateZ(1deg);
        }
        37% {
          transform: translateX(-148px) translateY(-12px) scale(1) rotateZ(2deg);
        }
        50% {
          transform: translateX(-200px) translateY(-8px) scale(1) rotateZ(2deg);
        }
        62% {
          transform: translateX(-248px) translateY(-12px) scale(1) rotateZ(2.5deg);
        }
        75% {
          transform: translateX(-300px) translateY(0) scale(1) rotateZ(2.5deg);
        }
        87% {
          transform: translateX(-348px) translateY(-12px) scale(1) rotateZ(3deg);
        }
        100% {
          transform: translateX(-400px) translateY(0) scale(1) rotateZ(3deg);
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
          transform: translateX(-150px) translateY(-30px) scale(0.6);
        }
        100% {
          opacity: 1;
          transform: translateX(0) translateY(0) scale(1);
        }
      }

      @keyframes flyInFromRight {
        0% {
          opacity: 0;
          transform: translateX(150px) translateY(-30px) scale(0.6);
        }
        100% {
          opacity: 1;
          transform: translateX(0) translateY(0) scale(1);
        }
      }

      @keyframes sway-left {
        0%, 100% {
          transform: translateY(0px) rotateZ(-1deg);
        }
        50% {
          transform: translateY(-8px) rotateZ(-0.5deg);
        }
      }

      @keyframes sway-right {
        0%, 100% {
          transform: translateY(0px) rotateZ(1deg);
        }
        50% {
          transform: translateY(-8px) rotateZ(0.5deg);
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

      .animate-move-left-to-hug {
        animation: walkLeftToHug 60s linear forwards;
        animation-delay: 2s;
      }

      .animate-move-right-to-hug {
        animation: walkRightToHug 60s linear forwards;
        animation-delay: 2s;
      }

      .animate-dive-in-left {
        animation: diveIntoEnvelope-left 0.8s ease-in forwards;
        animation-delay: 62s;
      }

      .animate-dive-in-right {
        animation: diveIntoEnvelope-right 0.8s ease-in forwards;
        animation-delay: 62s;
      }

      .animate-fly-in-left {
        animation: flyInFromLeft 2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }

      .animate-fly-in-right {
        animation: flyInFromRight 2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }

      .animate-sway-left {
        animation: sway-left 2.5s ease-in-out infinite;
      }

      .animate-sway-right {
        animation: sway-right 2.5s ease-in-out infinite;
      }
        animation: flyInFromRight 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }

      @keyframes walk-legs {
        0%, 100% {
          transform: translateY(0) rotateZ(0deg);
        }
        25% {
          transform: translateY(-12px) rotateZ(-3deg);
        }
        50% {
          transform: translateY(0) rotateZ(0deg);
        }
        75% {
          transform: translateY(-12px) rotateZ(3deg);
        }
      }

      .timothy-legs {
        animation: walk-legs 3s ease-in-out infinite;
        transform-origin: 100px 165px;
      }

      .hope-legs {
        animation: walk-legs 3s ease-in-out infinite;
        transform-origin: 100px 165px;
      }

      .animate-move-left-to-hug .timothy-legs {
        animation: walk-legs 3s ease-in-out 2s infinite;
      }

      .animate-move-right-to-hug .hope-legs {
        animation: walk-legs 3s ease-in-out 2s infinite;
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
        // After avatars walk to envelope (at 60s), show hearts and start transition
        setShowFireworks(true)
        setLeaving(true)
      }, 62000)

      const timer2 = setTimeout(() => {
        // After dive completes, go to main page
        onEnter()
      }, 63000)

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
          {/* LEFT AVATAR - Timothy (TALL) - Starts FAR LEFT */}
          <div className="absolute animate-fly-in-left animate-move-left-to-hug hidden md:block" style={{ animationDelay: '0s', left: '-400px' }}>
            <div className="relative w-64 h-64 mx-auto animate-float animate-sway-left">
              {/* Timothy - Male Avatar - TALL */}
              <svg className="w-full h-full" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
                  {/* Head */}
                  <circle cx="100" cy="50" r="35" fill="#FFD7A8" stroke="#8B6F47" strokeWidth="2.5" />
                  {/* Short Hair - masculine */}
                  <ellipse cx="100" cy="25" rx="38" ry="28" fill="#654321" />
                  <path d="M 62 35 Q 60 55 70 60" fill="#654321" />
                  <path d="M 138 35 Q 140 55 130 60" fill="#654321" />
                  {/* Eyes - confident look */}
                  <circle cx="85" cy="45" r="4.5" fill="#000" />
                  <circle cx="86" cy="43" r="1.5" fill="#FFF" />
                  <circle cx="115" cy="45" r="4.5" fill="#000" />
                  <circle cx="116" cy="43" r="1.5" fill="#FFF" />
                  {/* Eyebrows - masculine */}
                  <path d="M 78 38 Q 85 35 92 37" stroke="#654321" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d="M 108 37 Q 115 35 122 38" stroke="#654321" strokeWidth="2" fill="none" strokeLinecap="round" />
                  {/* Nose */}
                  <path d="M 100 45 L 100 60" stroke="#8B6F47" strokeWidth="2" fill="none" strokeLinecap="round" />
                  {/* Smile - happy */}
                  <path d="M 85 68 Q 100 78 115 68" stroke="#8B6F47" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  {/* Chin detail */}
                  <ellipse cx="100" cy="82" rx="20" ry="10" fill="#FFD7A8" stroke="#8B6F47" strokeWidth="1.5" />
                  {/* Neck */}
                  <rect x="92" y="82" width="16" height="12" fill="#FFD7A8" stroke="#8B6F47" strokeWidth="1" />
                  {/* Shirt - Blue jacket */}
                  <path d="M 60 95 L 55 150 Q 55 160 65 165 L 135 165 Q 145 160 145 150 L 140 95 Z" fill="#2C5AA0" stroke="#1A3A7A" strokeWidth="2" />
                  {/* Shirt collar */}
                  <polygon points="85,95 100,105 115,95" fill="#FFF" stroke="#1A3A7A" strokeWidth="1.5" />
                  {/* Buttons */}
                  <circle cx="100" cy="115" r="2.5" fill="#FFD700" />
                  <circle cx="100" cy="135" r="2.5" fill="#FFD700" />
                  {/* Heart on chest */}
                  <path d="M 95 125 Q 85 115 85 110 Q 85 105 90 105 Q 95 108 100 112 Q 105 108 110 105 Q 115 105 115 110 Q 115 115 105 125" fill="#FF1493" stroke="#FF69B4" strokeWidth="1" />
                  {/* Arms */}
                  <ellipse cx="55" cy="110" rx="9" ry="25" fill="#FFD7A8" stroke="#8B6F47" strokeWidth="1.5" />
                  <ellipse cx="145" cy="110" rx="9" ry="25" fill="#FFD7A8" stroke="#8B6F47" strokeWidth="1.5" />
                  {/* Pants - dark blue (legs) */}
                  <g className="timothy-legs">
                    <path d="M 70 165 L 65 210 Q 65 215 70 218 L 85 218 Q 88 215 88 210 L 92 165 Z" fill="#1A3A7A" stroke="#0D1F4F" strokeWidth="1.5" />
                    <path d="M 130 165 L 135 210 Q 135 215 130 218 L 115 218 Q 112 215 112 210 L 108 165 Z" fill="#1A3A7A" stroke="#0D1F4F" strokeWidth="1.5" />
                  </g>
                  {/* Shoes */}
                  <ellipse cx="78" cy="220" rx="8" ry="5" fill="#3D3D3D" />
                  <ellipse cx="122" cy="220" rx="8" ry="5" fill="#3D3D3D" />
                </svg>
            </div>
          </div>

          {/* RIGHT AVATAR - Hope (SHORT) - Starts FAR RIGHT */}
          <div className="absolute animate-fly-in-right animate-move-right-to-hug hidden md:block" style={{ animationDelay: '0.2s', right: '-400px' }}>
            <div className="relative w-56 h-56 mx-auto animate-float animate-sway-right" style={{ animationDelay: '0.3s' }}>
              {/* Hope - Female Avatar - SHORT */}
              <svg className="w-full h-full" viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
                  {/* Head */}
                  <circle cx="100" cy="45" r="32" fill="#FFE0D8" stroke="#C08B7F" strokeWidth="2.5" />
                  {/* Long Hair - feminine */}
                  <path d="M 68 60 Q 60 90 65 140 Q 70 155 85 160" fill="#8B4513" />
                  <path d="M 132 60 Q 140 90 135 140 Q 130 155 115 160" fill="#8B4513" />
                  {/* Hair top */}
                  <ellipse cx="100" cy="18" rx="36" ry="22" fill="#8B4513" />
                  <path d="M 70 35 Q 68 50 72 65" stroke="#8B4513" strokeWidth="2" fill="none" />
                  <path d="M 130 35 Q 132 50 128 65" stroke="#8B4513" strokeWidth="2" fill="none" />
                  {/* Eyes - big and expressive */}
                  <ellipse cx="85" cy="40" rx="5.5" ry="7" fill="#000" />
                  <ellipse cx="87" cy="37" rx="2" ry="2.5" fill="#FFF" />
                  <ellipse cx="115" cy="40" rx="5.5" ry="7" fill="#000" />
                  <ellipse cx="117" cy="37" rx="2" ry="2.5" fill="#FFF" />
                  {/* Eyelashes - feminine */}
                  <path d="M 80 33 Q 78 28 76 33" stroke="#8B4513" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  <path d="M 90 33 Q 88 28 86 33" stroke="#8B4513" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  <path d="M 110 33 Q 108 28 106 33" stroke="#8B4513" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  <path d="M 120 33 Q 118 28 116 33" stroke="#8B4513" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  {/* Rosy cheeks */}
                  <circle cx="70" cy="50" r="6" fill="#FFB6C1" opacity="0.6" />
                  <circle cx="130" cy="50" r="6" fill="#FFB6C1" opacity="0.6" />
                  {/* Nose */}
                  <path d="M 100 42 L 100 55" stroke="#C08B7F" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  {/* Smile - sweet */}
                  <path d="M 85 62 Q 100 72 115 62" stroke="#C08B7F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  {/* Neck */}
                  <rect x="93" y="74" width="14" height="10" fill="#FFE0D8" stroke="#C08B7F" strokeWidth="1" />
                  {/* Dress - Pink/Magenta */}
                  <path d="M 65 85 L 62 150 Q 62 160 72 165 L 128 165 Q 138 160 138 150 L 135 85 Z" fill="#FF69B4" stroke="#E91E63" strokeWidth="2" />
                  {/* Dress waist detail */}
                  <line x1="65" y1="95" x2="135" y2="95" stroke="#E91E63" strokeWidth="1.5" />
                  {/* Dress pattern - hearts */}
                  <path d="M 85 110 Q 80 105 80 100 Q 80 97 82 97 Q 85 99 88 102 Q 91 99 94 97 Q 96 97 96 100 Q 96 105 91 110" fill="#FF1493" />
                  <path d="M 115 120 Q 110 115 110 110 Q 110 107 112 107 Q 115 109 118 112 Q 121 109 124 107 Q 126 107 126 110 Q 126 115 121 120" fill="#FF1493" />
                  {/* Arms */}
                  <ellipse cx="60" cy="105" rx="8" ry="22" fill="#FFE0D8" stroke="#C08B7F" strokeWidth="1.5" />
                  <ellipse cx="140" cy="105" rx="8" ry="22" fill="#FFE0D8" stroke="#C08B7F" strokeWidth="1.5" />
                  {/* Legs - short */}
                  <g className="hope-legs">
                    <path d="M 82 165 L 78 180 L 88 180 Z" fill="#FFE0D8" stroke="#C08B7F" strokeWidth="1.5" />
                    <path d="M 118 165 L 112 180 L 122 180 Z" fill="#FFE0D8" stroke="#C08B7F" strokeWidth="1.5" />
                  </g>
                  {/* Shoes - cute */}
                  <ellipse cx="83" cy="182" rx="6" ry="4" fill="#FFB6D9" stroke="#E91E63" strokeWidth="1" />
                  <ellipse cx="117" cy="182" rx="6" ry="4" fill="#FFB6D9" stroke="#E91E63" strokeWidth="1" />
                </svg>
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