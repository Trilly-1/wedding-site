import { useState, useEffect } from 'react'
import { Sparkles, Gem } from 'lucide-react'

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

      @keyframes super-shine {
        0%, 100% { text-shadow: 0 0 15px rgba(201, 160, 90, 0.8), 0 0 30px rgba(255, 215, 0, 0.5), 0 0 50px rgba(255, 215, 0, 0.3); filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.6)); }
        50% { text-shadow: 0 0 30px rgba(201, 160, 90, 1), 0 0 60px rgba(255, 215, 0, 0.8), 0 0 90px rgba(255, 215, 0, 0.5); filter: drop-shadow(0 0 20px rgba(255, 215, 0, 1)); }
      }

      @keyframes fall-hearts {
        0% { opacity: 1; transform: translateY(-100px) rotate(0deg); }
        100% { opacity: 0; transform: translateY(100vh) rotate(360deg); }
      }

      @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes fade-out-down {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(30px); }
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

      .love-story-enter {
        animation: fade-in-up 0.8s ease-out forwards;
      }

      .love-story-exit {
        animation: fade-out-down 0.8s ease-out forwards;
      }

      @keyframes fadeOut {
        to { opacity: 0; }
      }
    `
    document.head.appendChild(style)
    return () => style.remove()
  }, [])

  // Auto-transition from love story to cards after 3 seconds
  useEffect(() => {
    if (stage === 'love-story') {
      const timer = setTimeout(() => {
        setStage('cards-rising')
      }, 3500)
      return () => clearTimeout(timer)
    }
  }, [stage])

  const handleOpenEnvelope = () => {
    setStage('love-story')
  }

  const handleViewMore = () => {
    setLeaving(true)
    setTimeout(() => onEnter(), 900)
  }

  const cardsRising = stage === 'cards-rising'
  const showLoveStory = stage === 'love-story'

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

      {/* Love Story Section */}
      {showLoveStory && (
        <div className={`text-center max-w-2xl px-6 love-story-enter`}>
          <h2 className="font-script text-5xl text-rose-d mb-6">Our Love Story</h2>
          <div className="space-y-4 font-body text-ink text-lg leading-relaxed">
            <p className="italic">
              Two hearts, separated by distance, drawn together by faith and purpose.
            </p>
            <p>
              In Timothy's steady strength and Hope's gentle grace, we found home in each other.
            </p>
            <p className="text-rose-d font-display text-2xl mt-8">
              <Sparkles size={24} /><span>A love worth celebrating</span><Sparkles size={24} />
            </p>
          </div>
        </div>
      )}

      {/* Original envelope + avatar section - only show if not in love-story or cards */}
      {!showLoveStory && !cardsRising && (
        <p className="font-body text-[0.7rem] tracking-[0.4em] uppercase text-gold/60 mb-6">
          You have a message
        </p>
      )}

      {/* Envelope */}
      {!showLoveStory && !cardsRising && (
        <div className="relative cursor-pointer group mb-2" onClick={handleOpenEnvelope}>
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
        </div>
      )}

      {/* Avatars Below Envelope - Holding Button */}
      {!showLoveStory && !cardsRising && (
        <div className="relative flex items-center justify-center gap-12 mt-8">
          
          {/* Timothy Avatar (Left) */}
          <div className="flex flex-col items-center">
            <svg className="w-40 h-48 drop-shadow-lg" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
              {/* Head */}
              <circle cx="100" cy="50" r="28" fill="#D4A574" stroke="#8B7355" strokeWidth="1.5"/>
              
              {/* Hair */}
              <ellipse cx="100" cy="35" rx="32" ry="24" fill="#3D2817"/>
              
              {/* Eyes */}
              <circle cx="90" cy="45" r="3" fill="#000"/>
              <circle cx="110" cy="45" r="3" fill="#000"/>
              
              {/* Smile */}
              <path d="M 90 55 Q 100 60 110 55" stroke="#8B6A47" strokeWidth="2" fill="none" strokeLinecap="round"/>
              
              {/* Body / Suit */}
              <rect x="65" y="85" width="70" height="80" fill="#2C2416" stroke="#1a1410" strokeWidth="1.5" rx="4"/>
              
              {/* Shirt collar */}
              <path d="M 85 85 L 100 95 L 115 85" fill="#F0E5D8"/>
              
              {/* Left Arm - reaching up to button */}
              <rect x="30" y="90" width="35" height="15" fill="#D4A574" rx="7" transform="rotate(-45 65 97)"/>
              <rect x="25" y="85" width="20" height="12" fill="#D4A574" rx="6" transform="rotate(-50 35 95)"/>
              
              {/* Right Arm - reaching up to button */}
              <rect x="135" y="90" width="35" height="15" fill="#D4A574" rx="7" transform="rotate(45 135 97)"/>
              <rect x="155" y="85" width="20" height="12" fill="#D4A574" rx="6" transform="rotate(50 165 95)"/>
              
              {/* Left Leg */}
              <rect x="80" y="165" width="15" height="35" fill="#3D3428" rx="7"/>
              <rect x="80" y="200" width="18" height="15" fill="#2C2416" rx="5"/>
              
              {/* Right Leg */}
              <rect x="105" y="165" width="15" height="35" fill="#3D3428" rx="7"/>
              <rect x="104" y="200" width="18" height="15" fill="#2C2416" rx="5"/>
            </svg>
          </div>

      {/* Click Button Text - Center */}
          <div className="flex flex-col items-center cursor-pointer" onClick={handleOpenEnvelope}>
            <p className="text-center text-gold font-body text-lg tracking-widest animate-pulse font-bold"
              style={{ animation: 'super-shine 1.5s ease-in-out infinite' }}>
              CLICK TO OPEN
            </p>
          </div>

          {/* Hope Avatar (Right) */}
          <div className="flex flex-col items-center">
            <svg className="w-40 h-48 drop-shadow-lg" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
              {/* Head */}
              <circle cx="100" cy="50" r="26" fill="#E8B89C" stroke="#9B7966" strokeWidth="1.5"/>
              
              {/* Hair */}
              <ellipse cx="100" cy="32" rx="30" ry="24" fill="#6B4423"/>
              <path d="M 70 48 Q 70 35 85 30 Q 100 25 115 30 Q 130 35 130 48" fill="#6B4423" opacity="0.6"/>
              
              {/* Eyes */}
              <circle cx="90" cy="46" r="3.5" fill="#000"/>
              <circle cx="110" cy="46" r="3.5" fill="#000"/>
              
              {/* Smile */}
              <path d="M 88 56 Q 100 62 112 56" stroke="#9B7966" strokeWidth="2" fill="none" strokeLinecap="round"/>
              
              {/* Body / Dress */}
              <ellipse cx="100" cy="110" rx="38" ry="55" fill="#E8A6C3" stroke="#C9668F" strokeWidth="1.5"/>
              
              {/* Dress details */}
              <path d="M 80 100 Q 100 105 120 100" stroke="#F0D4E0" strokeWidth="2" fill="none" opacity="0.7"/>
              
              {/* Left Arm - reaching up to button */}
              <rect x="28" y="95" width="32" height="14" fill="#E8B89C" rx="7" transform="rotate(-50 60 102)"/>
              <rect x="20" y="85" width="18" height="11" fill="#E8B89C" rx="6" transform="rotate(-55 30 92)"/>
              
              {/* Right Arm - reaching up to button */}
              <rect x="140" y="95" width="32" height="14" fill="#E8B89C" rx="7" transform="rotate(50 140 102)"/>
              <rect x="162" y="85" width="18" height="11" fill="#E8B89C" rx="6" transform="rotate(55 170 92)"/>
              
              {/* Left Leg */}
              <rect x="85" y="160" width="13" height="40" fill="#6B4423" rx="6"/>
              <rect x="85" y="200" width="16" height="14" fill="#9B7966" rx="5"/>
              
              {/* Right Leg */}
              <rect x="102" y="160" width="13" height="40" fill="#6B4423" rx="6"/>
              <rect x="102" y="200" width="16" height="14" fill="#9B7966" rx="5"/>
            </svg>
          </div>
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
