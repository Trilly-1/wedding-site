import { useState, useEffect } from 'react'

export default function EnvelopeIntro({ onEnter }) {
  const [stage, setStage] = useState('idle')
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
      }

      @keyframes pulse-glow {
        0%, 100% { filter: drop-shadow(0 0 10px rgba(201, 160, 90, 0.5)); }
        50% { filter: drop-shadow(0 0 25px rgba(201, 160, 90, 1)); }
      }

      @keyframes shine {
        0%, 100% { text-shadow: 0 0 10px rgba(201, 160, 90, 0.5), 0 0 20px rgba(255, 215, 0, 0.3); }
        50% { text-shadow: 0 0 20px rgba(201, 160, 90, 1), 0 0 40px rgba(255, 215, 0, 0.6); }
      }

      @keyframes fall-hearts {
        0% { opacity: 1; transform: translateY(-100px) rotate(0deg); }
        100% { opacity: 0; transform: translateY(100vh) rotate(360deg); }
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

      .fall-heart {
        animation: fall-hearts 3s ease-in forwards;
        pointer-events: none;
      }

      .scene-leave {
        animation: fadeOut 0.7s ease-out forwards;
      }

      @keyframes fadeOut {
        to { opacity: 0; }
      }
    `
    document.head.appendChild(style)
    return () => style.remove()
  }, [])

  const handleOpenEnvelope = () => {
    setStage('cards-rising')
  }

  const handleViewMore = () => {
    setLeaving(true)
    setTimeout(() => onEnter(), 900)
  }

  const cardsRising = stage === 'cards-rising'

  return (
    <div className={`relative min-h-screen flex flex-col items-center justify-center bg-dark-grad overflow-hidden transition-all duration-700 ${leaving ? 'scene-leave' : ''}`}>
      {/* Falling petals */}
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

      {/* Tagline */}
      {!cardsRising && (
        <p className="font-body text-[0.7rem] tracking-[0.4em] uppercase text-gold/60 mb-6">
          You have a message
        </p>
      )}

      {/* Envelope - Click to Open */}
      {!cardsRising && (
        <div className="relative cursor-pointer group" onClick={handleOpenEnvelope}>
          <div className="w-80 h-56 rounded-lg shadow-2xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #E8D5B7 0%, #F5E6D3 100%)' }}>
            
            {/* Envelope body with fold lines */}
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-32 h-24 opacity-80" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                  {/* Envelope outline */}
                  <rect x="20" y="30" width="160" height="100" fill="none" stroke="#C9A05A" strokeWidth="2" />
                  {/* Flap */}
                  <polygon points="20,30 100,80 180,30" fill="none" stroke="#C9A05A" strokeWidth="2" />
                </svg>
              </div>

              {/* Seal */}
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-rose-d flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all animate-pulse-glow">
                <span className="text-white font-script text-2xl animate-shine">T&H</span>
              </div>
            </div>
          </div>

          {/* Click Text */}
          <p className="text-center mt-6 text-gold font-body text-sm tracking-widest animate-shine group-hover:text-gold-light transition-colors">
            CLICK TO OPEN
          </p>
        </div>
      )}

      {/* Cards Section */}
      {cardsRising && (
        <div className="relative w-full h-full flex items-center justify-center px-4">
          {/* Card 1 - Left */}
          <div className="absolute w-72 h-80 rounded-xl p-8 shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #FFF8F0, #FBE8ED)',
              transform: 'translateX(-200px) rotateZ(-12deg) scale(0.9)',
            }}>
            <div className="text-center h-full flex flex-col justify-center">
              <p className="text-rose text-lg tracking-widest mb-2">❀ ✿ ❀</p>
              <p className="font-body text-[0.6rem] tracking-[0.25em] uppercase text-gold">— with joy —</p>
              <h2 className="font-script text-3xl text-rose-d my-3">You're Invited</h2>
              <p className="font-display italic text-[0.8rem] text-ink-l">June 13 · 2026</p>
              <p className="text-rose text-lg tracking-widest mt-3">❀ ✿ ❀</p>
            </div>
          </div>

          {/* Card 2 - Center (Main) */}
          <div className="relative w-80 h-96 rounded-xl p-8 shadow-2xl z-10"
            style={{ background: 'linear-gradient(135deg, #FDFAF4, #F5EFE0)' }}>
            <div className="text-center h-full flex flex-col justify-center">
              <p className="font-body text-[0.6rem] tracking-[0.3em] uppercase text-gold mb-2">The wedding of</p>
              <h2 className="font-script text-4xl text-rose-d leading-tight">Timothy</h2>
              <p className="font-display italic text-2xl text-gold my-1">&</p>
              <h2 className="font-script text-4xl text-rose-d leading-tight">Hope</h2>
              <p className="font-display italic text-[0.7rem] text-ink-l mt-4 leading-relaxed">
                "the stone that was rejected, became the chief cornerstone"
              </p>
            </div>
          </div>

          {/* Card 3 - Right */}
          <div className="absolute w-72 h-80 rounded-xl p-8 shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #FFF8F0, #FBE8ED)',
              transform: 'translateX(200px) rotateZ(12deg) scale(0.9)',
            }}>
            <div className="text-center h-full flex flex-col justify-center gap-4">
              <div className="text-3xl">💍</div>
              <p className="font-display italic text-[0.85rem] text-ink-l leading-relaxed">
                Join us as we celebrate our love and commitment
              </p>
              <button onClick={handleViewMore}
                className="mt-4 px-6 py-2 bg-rose-d text-white font-body text-sm rounded-full hover:bg-rose-d-dark transition-colors shadow-lg">
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
