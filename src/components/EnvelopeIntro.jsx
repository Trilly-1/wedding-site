import { useState, useEffect } from 'react'
import { Sparkles } from 'lucide-react'

export default function EnvelopeIntro({ onEnter }) {
  const [stage, setStage] = useState('idle')
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const style = document.createElement('style')

    style.textContent = `
      @keyframes float {
        0%,100% { transform: translateY(0px); }
        50% { transform: translateY(-12px); }
      }

      @keyframes pulse-glow {
        0%,100% {
          filter: drop-shadow(0 0 10px rgba(201,160,90,0.5));
        }
        50% {
          filter: drop-shadow(0 0 25px rgba(201,160,90,1));
        }
      }

      @keyframes shine {
        0%,100% {
          text-shadow:
            0 0 10px rgba(201,160,90,0.5),
            0 0 20px rgba(255,215,0,0.3);
        }
        50% {
          text-shadow:
            0 0 20px rgba(201,160,90,1),
            0 0 40px rgba(255,215,0,0.6);
        }
      }

      @keyframes super-shine {
        0%,100% {
          text-shadow:
            0 0 15px rgba(201,160,90,0.8),
            0 0 30px rgba(255,215,0,0.5),
            0 0 50px rgba(255,215,0,0.3);
        }
        50% {
          text-shadow:
            0 0 30px rgba(201,160,90,1),
            0 0 60px rgba(255,215,0,0.8),
            0 0 90px rgba(255,215,0,0.5);
        }
      }

      @keyframes flap-open {
        0% { transform: rotateX(0deg); }
        100% { transform: rotateX(-180deg); }
      }

      @keyframes letter-rise {
        0% {
          transform: translateY(40px) scale(0.9);
          opacity: 0;
        }
        100% {
          transform: translateY(-120px) scale(1);
          opacity: 1;
        }
      }

      @keyframes cards-fly-out {
        0% {
          opacity: 0;
          transform: translateY(100px) scale(0.7);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @keyframes fadeOut {
        to { opacity: 0; }
      }

      .animate-float { animation: float 3s ease-in-out infinite; }
      .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
      .animate-shine { animation: shine 2s ease-in-out infinite; }
      .scene-leave { animation: fadeOut 0.7s ease-out forwards; }
      .envelope-open { animation: flap-open 1s ease forwards; transform-origin: top; }
      .letter-rise { animation: letter-rise 1s ease forwards; }
      .cards-enter { animation: cards-fly-out 1s ease forwards; }
    `

    document.head.appendChild(style)
    return () => style.remove()
  }, [])

  const handleOpenEnvelope = () => {
    setStage('opening')
    setTimeout(() => setStage('cards-rising'), 1800)
  }

  const handleViewMore = () => {
    setLeaving(true)
    setTimeout(() => onEnter(), 900)
  }

  const cardsRising = stage === 'cards-rising'
  const isOpening = stage === 'opening'

  return (
    <div className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#1b1410] via-[#261b15] to-[#120d0a] transition-all duration-700 ${leaving ? 'scene-leave' : ''}`}>

      <div className="absolute w-[500px] h-[500px] bg-[#C9A05A]/10 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-[#C9668F]/10 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      {/* ENVELOPE */}
      {!cardsRising && (
        <>
          <p className="text-xs tracking-[0.4em] uppercase text-[#C9A05A]/70 mb-8">
            You have a message
          </p>

          <div onClick={handleOpenEnvelope} className="relative cursor-pointer group">
            <div className="relative w-[360px] h-[250px] perspective-[1200px]">

              <div className="absolute inset-0 bg-black/30 blur-2xl rounded-3xl translate-y-8 scale-95" />

              {isOpening && (
                <div className="absolute left-1/2 bottom-[70px] -translate-x-1/2 w-[260px] h-[170px] rounded-2xl bg-gradient-to-br from-white to-[#f9f3ea] shadow-2xl z-10 letter-rise border border-[#E7D0A5]">
                  <div className="h-full flex flex-col items-center justify-center text-center px-6">
                    <p className="text-[#C9A05A] tracking-[0.3em] uppercase text-xs mb-3">
                      Wedding Invitation
                    </p>

                    <h2 className="text-4xl text-[#A2526A] font-serif leading-tight">
                      Timothy
                    </h2>

                    <p className="text-[#C9A05A] italic text-2xl my-1">&</p>

                    <h2 className="text-4xl text-[#A2526A] font-serif leading-tight">
                      Hope
                    </h2>
                  </div>
                </div>
              )}

              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)] border border-[#D6B77A]/20 bg-gradient-to-br from-[#F6E5C7] via-[#E8D2AA] to-[#DDBA7B]">

                <div className={`absolute top-0 left-0 w-full h-1/2 z-20 ${isOpening ? 'envelope-open' : ''}`}
                  style={{ clipPath: 'polygon(0 0, 50% 85%, 100% 0)', background: 'linear-gradient(145deg, #E8D5B7 0%, #DDBE8A 100%)' }}
                />

                <div className="absolute bottom-0 left-0 w-1/2 h-[65%]"
                  style={{ clipPath: 'polygon(0 0, 100% 50%, 100% 100%, 0 100%)', background: 'linear-gradient(145deg, #EAD7B8, #D9B989)' }}
                />

                <div className="absolute bottom-0 right-0 w-1/2 h-[65%]"
                  style={{ clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)', background: 'linear-gradient(145deg, #EAD7B8, #D9B989)' }}
                />

                <div className="absolute bottom-0 left-0 w-full h-[55%]"
                  style={{ clipPath: 'polygon(0 100%, 50% 35%, 100% 100%)', background: 'linear-gradient(145deg, #E2C79B, #D3AF76)' }}
                />

                {!isOpening && (
                  <div className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 z-30">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#B94A6B] to-[#8B2D4B] flex items-center justify-center shadow-2xl animate-pulse-glow">
                      <span className="text-white text-2xl font-serif animate-shine">
                        T&H
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {!isOpening && (
            <div onClick={handleOpenEnvelope} className="mt-12 cursor-pointer">
              <p className="text-[#D4B06A] text-lg tracking-[0.35em] font-semibold"
                style={{ animation: 'super-shine 1.8s ease-in-out infinite' }}>
                CLICK TO OPEN
              </p>
            </div>
          )}
        </>
      )}

      {/* CARDS */}
      {cardsRising && (
        <>
          <div className="hidden lg:flex items-center justify-center gap-8 px-10 w-full max-w-7xl mx-auto cards-enter">

            <div className="w-72 h-[26rem] rounded-3xl p-8 shadow-2xl bg-gradient-to-br from-[#FFF8F0] to-[#FBE8ED]">
              <div className="text-center h-full flex flex-col justify-center">
                <h2 className="text-4xl text-[#A2526A] font-serif">You're Invited</h2>
                <p className="italic text-sm text-gray-600 mt-2">June 13 · 2026</p>
              </div>
            </div>

            <div className="w-80 h-[30rem] rounded-[2rem] p-10 shadow-xl bg-gradient-to-br from-[#FDFAF4] to-[#F5EFE0]">
              <div className="text-center h-full flex flex-col justify-center">

                <p className="text-xs tracking-[0.35em] uppercase text-[#C9A05A] mb-3">
                  The wedding of
                </p>

                {/* FIXED: better mobile-safe typography */}
                <h2 className="text-4xl md:text-5xl text-[#A2526A] font-serif leading-snug break-words">
                  Timothy
                </h2>

                <p className="italic text-3xl text-[#C9A05A] my-2">&</p>

                <h2 className="text-4xl md:text-5xl text-[#A2526A] font-serif leading-snug break-words">
                  Hope
                </h2>

                <div className="w-16 h-[1px] bg-[#C9A05A]/40 mx-auto my-6" />

                <p className="italic text-sm text-gray-600">
                  What started as friendship became love.
                </p>
              </div>
            </div>

            <div className="w-72 h-[26rem] rounded-3xl p-8 shadow-2xl bg-gradient-to-br from-[#FFF8F0] to-[#FBE8ED]">
              <div className="text-center h-full flex flex-col justify-center">
                <button onClick={handleViewMore}
                  className="px-8 py-3 bg-[#A2526A] text-white rounded-full">
                  Continue
                </button>
              </div>
            </div>
          </div>

          {/* MOBILE */}
          <div className="lg:hidden flex flex-col gap-6 px-4 py-10 items-center cards-enter">

            <div className="w-full max-w-xs rounded-3xl p-6 bg-gradient-to-br from-[#FFF8F0] to-[#FBE8ED] text-center">
              <h2 className="text-3xl text-[#A2526A] font-serif">You're Invited</h2>
              <p className="italic text-sm text-gray-600 mt-2">June 13 · 2026</p>
            </div>

            <div className="w-full max-w-xs rounded-3xl p-7 bg-gradient-to-br from-[#FDFAF4] to-[#F5EFE0] text-center">

              <p className="uppercase tracking-[0.3em] text-xs text-[#C9A05A] mb-2">
                The wedding of
              </p>

              {/* FIXED MOBILE CUT ISSUE */}
              <h2 className="text-3xl leading-snug font-serif text-[#A2526A]">
                Timothy
              </h2>

              <p className="italic text-2xl text-[#C9A05A] my-1">&</p>

              <h2 className="text-3xl leading-snug font-serif text-[#A2526A]">
                Hope
              </h2>
            </div>

            <div className="w-full max-w-xs rounded-3xl p-6 bg-gradient-to-br from-[#FFF8F0] to-[#FBE8ED] text-center">
              <button onClick={handleViewMore}
                className="w-full px-6 py-3 bg-[#A2526A] text-white rounded-full">
                Continue
              </button>
            </div>
          </div>
        </>
      )}

      <div className="fixed bottom-4 right-4 z-[99999] pointer-events-none">
        <p className="text-[#D4B06A]/80 text-sm tracking-[0.25em] font-semibold">
          #Godiscooking
        </p>
      </div>
    </div>
  )
}