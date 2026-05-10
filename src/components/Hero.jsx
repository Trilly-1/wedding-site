import { useState, useEffect } from 'react'

export default function Hero() {
  const [showCard, setShowCard] = useState(true)

  useEffect(() => {
    // Add animations to the document head
    const style = document.createElement('style')
    style.textContent = `
      @keyframes flyInFromRight {
        0% {
          opacity: 0;
          transform: translateX(150px) translateY(-50px) scale(0.5);
        }
        50% {
          opacity: 1;
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

      @keyframes shimmer {
        0%, 100% {
          background-position: 200% center;
          box-shadow: 0 0 20px rgba(201, 160, 90, 0.4);
        }
        50% {
          background-position: -200% center;
          box-shadow: 0 0 40px rgba(201, 160, 90, 0.8), inset 0 0 20px rgba(255, 255, 255, 0.2);
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

      @keyframes bounce-gentle {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }

      .animate-fly-in {
        animation: flyInFromRight 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }

      .animate-float {
        animation: float 3s ease-in-out infinite;
      }

      .animate-shimmer-card {
        animation: shimmer 2.5s linear infinite;
        background: linear-gradient(90deg, rgba(201, 160, 90, 0.3), rgba(255, 255, 255, 0.5), rgba(201, 160, 90, 0.3));
        background-size: 200% 100%;
      }

      .animate-pulse-glow {
        animation: pulse-glow 2s ease-in-out infinite;
      }

      .animate-bounce-gentle {
        animation: bounce-gentle 2s ease-in-out infinite;
      }
    `
    document.head.appendChild(style)
    return () => style.remove()
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img14.JPG"
          alt="Timothy and Hope"
          className="w-full h-full object-cover"
          style={{ objectPosition: '40% 20%' }}
        />

        {/* MAIN OVERLAY */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(20,8,18,0.35) 0%, rgba(20,8,18,0.15) 40%, rgba(20,8,18,0.65) 100%)',
          }}
        />
      </div>

      {/* 🔥 TOP FADE (THIS FIXES NAVBAR SEPARATION ISSUE) */}
      <div
        className="absolute top-0 left-0 right-0 h-28 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)',
        }}
      />

      {/* ✨ ANIMATED AVATAR & CARD - Left Side */}
      {showCard && (
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-30 animate-fly-in">
          {/* Cartoon Avatar */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto animate-float ml-6 md:ml-12">
            {/* Avatar Circle with Glow */}
            <div className="absolute inset-0 rounded-full animate-pulse-glow" />
            <div
              className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #c9a05a 0%, #e5d4b8 50%, #c9a05a 100%)',
                boxShadow: '0 20px 60px rgba(201, 160, 90, 0.4)',
                border: '4px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              {/* Cartoon Character - SVG Based */}
              <svg className="w-5/6 h-5/6" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                {/* Head */}
                <circle cx="100" cy="80" r="50" fill="#FFD7A8" stroke="#8B6F47" strokeWidth="2" />

                {/* Left Eye */}
                <circle cx="85" cy="70" r="6" fill="#000" />
                <circle cx="87" cy="68" r="2" fill="#FFF" />

                {/* Right Eye */}
                <circle cx="115" cy="70" r="6" fill="#000" />
                <circle cx="117" cy="68" r="2" fill="#FFF" />

                {/* Smile */}
                <path d="M 85 95 Q 100 110 115 95" stroke="#8B6F47" strokeWidth="3" fill="none" strokeLinecap="round" />

                {/* Body */}
                <ellipse cx="100" cy="150" rx="35" ry="40" fill="#E8B4D4" stroke="#8B6F47" strokeWidth="2" />

                {/* Heart on chest */}
                <path d="M 95 145 L 100 140 L 105 145 L 100 155 Z" fill="#FF69B4" />
              </svg>
            </div>

            {/* Sparkles around avatar */}
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full animate-pulse-glow"
                style={{
                  background: '#c9a05a',
                  top: `${20 + i * 20}%`,
                  left: i % 2 === 0 ? '-20px' : '100%',
                  opacity: 0.8,
                  animation: `pulse-glow 2s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* ✨ SHINING CLICK CARD - Right Side */}
      {showCard && (
        <div
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30 animate-fly-in mr-6 md:mr-12 cursor-pointer group"
          style={{ animationDelay: '0.2s' }}
          onClick={() => setShowCard(false)}
        >
          <div
            className="animate-shimmer-card rounded-3xl px-6 md:px-8 py-5 md:py-6 border-2 border-gold/60 backdrop-blur-lg transform transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 animate-bounce-gentle"
            style={{
              background: 'linear-gradient(135deg, rgba(201, 160, 90, 0.2), rgba(255, 255, 255, 0.1), rgba(201, 160, 90, 0.2))',
              boxShadow: '0 10px 40px rgba(201, 160, 90, 0.3)',
            }}
          >
            {/* Sparkles Text */}
            <div className="text-center">
              <p className="text-sm md:text-base text-gold/80 tracking-widest mb-2">✨ ✨ ✨</p>
              <p className="text-lg md:text-2xl font-script text-cream font-bold drop-shadow-lg">
                Click me to open
              </p>
              <p className="text-xs md:text-sm text-cream/70 tracking-widest mt-2">our love story</p>
              <p className="text-sm md:text-base text-gold/80 tracking-widest mt-2">✨ ✨ ✨</p>
            </div>

            {/* Animated dots/stars inside card */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-gold/60 animate-pulse-glow"
                style={{
                  top: `${15 + i * 15}%`,
                  left: `${10 + i * 15}%`,
                  opacity: 0.6,
                  animation: `pulse-glow 1.5s ease-in-out infinite`,
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ))}
          </div>

          {/* Arrow indicator */}
          <div className="text-center mt-4 animate-bounce-gentle">
            <p className="text-gold/60 text-xl">⬅️</p>
          </div>
        </div>
      )}

      {/* CONTENT */}
      <div className="relative z-20 text-center px-6 pt-10">

        <div className="flex flex-col items-center gap-2">

          {/* TIMOTHY */}
          <h1
            className="font-script leading-none text-cream"
            style={{
              fontSize: 'clamp(4rem, 14vw, 9rem)',
              textShadow: '0 4px 24px rgba(0,0,0,0.6)',
            }}
          >
            Timothy
          </h1>

          {/* WEDS (UNCHANGED) */}
          <div className="relative w-full flex justify-center">
            <span
              className="weds-glitter font-display italic text-gold absolute"
              style={{
                top: "0px",
                left: "15%",
                transform: "translateX(-50%)",
              }}
            >
              weds
            </span>
          </div>

          {/* HOPE */}
          <h1
            className="font-script leading-none text-cream"
            style={{
              fontSize: 'clamp(4rem, 12vw, 7.5rem)',
              textShadow: '0 4px 24px rgba(0,0,0,0.6)',
            }}
          >
            Hope
          </h1>

        </div>

        {/* DATE */}
        <div
          className="inline-flex items-center gap-3 mt-8 px-7 py-2.5 rounded-full border border-gold/50 backdrop-blur-md"
          style={{ background: 'rgba(43,26,42,0.5)' }}
        >
          <span className="text-cream/90 uppercase tracking-widest text-xs">
            June
          </span>
          <span className="text-gold text-2xl font-semibold">13</span>
          <span className="text-cream/90 uppercase tracking-widest text-xs">
            2026
          </span>
        </div>

        {/* LOCATION */}
        <p className="mt-3 text-cream/70 uppercase tracking-widest text-xs">
          Life Beach Hotel · Busabala
        </p>

      </div>
    </section>
  )
}