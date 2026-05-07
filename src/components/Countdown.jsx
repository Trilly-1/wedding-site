import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const WEDDING = new Date('2026-06-13T10:00:00')

function getLeft() {
  const d = WEDDING - new Date()
  if (d <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days:    Math.floor(d / 86400000),
    hours:   Math.floor((d / 3600000) % 24),
    minutes: Math.floor((d / 60000) % 60),
    seconds: Math.floor((d / 1000) % 60),
  }
}

export default function Countdown() {
  const [t, setT] = useState(getLeft())
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  useEffect(() => {
    const id = setInterval(() => setT(getLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { v: t.days,    l: 'Days' },
    { v: t.hours,   l: 'Hours' },
    { v: t.minutes, l: 'Minutes' },
    { v: t.seconds, l: 'Seconds' },
  ]

  return (
    <section id="countdown" className="relative py-28 overflow-hidden text-center"
      style={{ background: 'linear-gradient(145deg, #2B1A2A 0%, #4A2235 50%, #2B1A2A 100%)' }}>

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(162,82,106,0.18), transparent 70%)' }}/>

      {/* Floral side sprigs */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-4/5 opacity-[0.13] pointer-events-none">
        <Sprig />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-4/5 opacity-[0.13] pointer-events-none" style={{ transform: 'translateY(-50%) scaleX(-1)' }}>
        <Sprig />
      </div>

      <div ref={ref} className={`relative z-10 reveal ${inView ? 'in-view' : ''}`}>
        <p className="font-body text-[0.7rem] tracking-[0.4em] uppercase text-gold/60 mb-2">Mark your calendars</p>
        <h2 className="font-display font-light text-cream/90 tracking-wide mb-1" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
          Counting Down To
        </h2>
        <p className="font-script text-gold-l mb-10" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
          June 13 · 2026
        </p>

        {/* Timer blocks */}
        <div className="flex justify-center gap-4 md:gap-6 flex-wrap px-4">
          {units.map((u, i) => (
            <div key={u.l} className="flex flex-col items-center gap-3">
              <div
                className="relative rounded-xl overflow-hidden border border-gold/20 backdrop-blur-sm flex items-center justify-center shadow-2xl"
                style={{
                  width: 'clamp(75px, 18vw, 118px)',
                  height: 'clamp(75px, 18vw, 118px)',
                  background: 'rgba(255,255,255,0.05)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.07)',
                }}
              >
                {/* Top half */}
                <div className="absolute top-0 left-0 right-0 h-1/2 flex items-center justify-center"
                  style={{ background: 'rgba(201,160,90,0.1)' }}>
                  <span className="font-display font-semibold text-cream leading-none"
                    style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}>
                    {String(u.v).padStart(2, '0')}
                  </span>
                </div>
                {/* Bottom half */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 flex items-center justify-center"
                  style={{ background: 'rgba(201,160,90,0.06)' }}>
                  <span className="font-display font-semibold text-cream leading-none"
                    style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}>
                    {String(u.v).padStart(2, '0')}
                  </span>
                </div>
                {/* Fold line */}
                <div className="absolute top-1/2 left-0 right-0 h-px bg-black/30" />
              </div>
              <span className="font-body text-[0.62rem] tracking-[0.28em] uppercase text-cream/45">{u.l}</span>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 flex items-center justify-center gap-3 text-cream/40">
          <span className="text-blush">❀</span>
          <p className="font-display italic text-sm">We can't wait to see you there!</p>
          <span className="text-blush">❀</span>
        </div>
      </div>
    </section>
  )
}

function Sprig() {
  return (
    <svg viewBox="0 0 80 300" fill="none" className="h-full w-auto">
      <path d="M40 290 Q38 180 40 10" stroke="#4A6741" strokeWidth="2" strokeLinecap="round"/>
      {[[25,250,-25],[55,220,20],[28,190,-18],[58,160,22],[30,130,-20],[55,100,18],[40,65,0]].map(([x,y,r],i)=>(
        <g key={i} transform={`rotate(${r} ${x} ${y})`}>
          <ellipse cx={x} cy={y} rx="16" ry="8" fill="#7A9B6E" opacity="0.5"/>
        </g>
      ))}
      {[[40,230],[40,170],[40,110],[40,50]].map(([x,y],i)=>(
        <g key={i}>
          {[0,72,144,216,288].map((deg,j)=>(
            <ellipse key={j} cx={x+Math.cos(deg*Math.PI/180)*9} cy={y+Math.sin(deg*Math.PI/180)*9}
              rx="6" ry="3" fill={i%2===0?"#F2C4CE":"#E8A0B4"} opacity="0.7"
              transform={`rotate(${deg} ${x+Math.cos(deg*Math.PI/180)*9} ${y+Math.sin(deg*Math.PI/180)*9})`}/>
          ))}
          <circle cx={x} cy={y} r="4.5" fill="#C9A05A" opacity="0.9"/>
        </g>
      ))}
    </svg>
  )
}