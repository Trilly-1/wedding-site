export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── Full-bleed background image — dominant & visible ── */}
      <div className="absolute inset-0">
        <img
          src="/img14.JPG"
          alt="Timothy and Hope"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 20%' }}
        />
        {/* Lighter overlay so the photo dominates */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(20,8,18,0.25) 0%, rgba(20,8,18,0.1) 40%, rgba(20,8,18,0.55) 100%)' }}
        />
      </div>

      {/* Floral corners */}
      {[
        { cls: 'top-0 left-0',     flip: '' },
        { cls: 'top-0 right-0',    flip: 'scaleX(-1)' },
        { cls: 'bottom-0 left-0',  flip: 'scaleY(-1)' },
        { cls: 'bottom-0 right-0', flip: 'scale(-1,-1)' },
      ].map((c, i) => (
        <div key={i} className={`absolute w-36 md:w-44 h-36 md:h-44 pointer-events-none opacity-70 ${c.cls}`}>
          <FloralSVG style={{ transform: c.flip }} />
        </div>
      ))}

      {/* Floating petals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="absolute rounded-tl-full rounded-br-full petal-fall"
            style={{
              width: `${6 + i * 1.5}px`, height: `${10 + i * 2}px`,
              left: `${i * 10}%`, top: '-20px',
              '--dur': `${8 + i * 0.5}s`, '--delay': `${i * 0.6 + 1}s`,
              background: 'radial-gradient(ellipse, rgba(242,196,206,0.5), rgba(162,82,106,0.1))',
            }}
          />
        ))}
      </div>

      {/* Content */}
     <div className="relative z-10 text-center px-6 py-16">
  
  <p
    className="font-body text-[0.7rem] tracking-[0.45em] uppercase text-cream/80 mb-6"
    style={{ textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}
  >
  </p>

  <div className="flex flex-col items-center gap-1">

  <h1
    className="font-script leading-none text-cream drop-shadow-2xl"
    style={{
      fontSize: 'clamp(4rem, 14vw, 9rem)',
      textShadow: '0 4px 24px rgba(0,0,0,0.5)'
    }}
  >
    Timothy
  </h1>

  {/* CENTERED WEDS */}
  <div className="flex justify-center w-full">
    <span
      className="font-display italic text-gold"
      style={{
        fontSize: "2.5rem",
        letterSpacing: "0.30em",
        textShadow: "0 4px 18px rgba(92, 71, 3, 0.6)",
        fontWeight: 400,
      }}
    >
      weds
    </span>
  </div>

  <h1
    className="font-script leading-none text-cream drop-shadow-2xl"
    style={{
      fontSize: 'clamp(4rem, 12vw, 7.5rem)',
      textShadow: '0 4px 24px rgba(0,0,0,0.5)'
    }}
  >
    Hope
  </h1>

</div>
 

        {/* Date badge */}
        <div className="inline-flex items-center gap-3 mt-8 px-7 py-2.5 rounded-full border border-gold/50 backdrop-blur-sm"
          style={{ background: 'rgba(43,26,42,0.45)' }}>
          <span className="font-body text-[0.75rem] tracking-[0.25em] uppercase text-cream/90">June</span>
          <span className="font-display font-semibold text-[1.9rem] text-gold-l leading-none">13</span>
          <span className="font-body text-[0.75rem] tracking-[0.25em] uppercase text-cream/90">2026</span>
        </div>

        {/* Location */}
        <p className="mt-3 flex items-center justify-center gap-1.5 font-body text-[0.72rem] tracking-[0.2em] uppercase text-cream/70"
          style={{ textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            <circle cx="12" cy="9" r="2.5"/>
          </svg>
          Life Beach Hotel · Busabala
        </p>

        {/* Scroll CTA */}
        <a href="#love-story"
          className="mt-10 inline-flex flex-col items-center gap-2 text-cream/70 hover:text-gold-l transition-colors group">
          <span className="font-body text-[0.68rem] tracking-[0.25em] uppercase"
            style={{ textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>Explore our story</span>
          <span className="text-xl arrow-bounce">↓</span>
        </a>
      </div>
    </section>
  )
}

function FloralSVG({ style }) {
  return (
    <svg viewBox="0 0 140 140" fill="none" style={style} className="w-full h-full">
      <path d="M10 130 Q30 80 70 70" stroke="#4A6741" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7"/>
      <path d="M10 130 Q50 110 70 70" stroke="#4A6741" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
      <ellipse cx="35" cy="102" rx="16" ry="8" fill="#7A9B6E" opacity="0.5" transform="rotate(-35 35 102)"/>
      <ellipse cx="55" cy="88" rx="14" ry="7" fill="#4A6741" opacity="0.4" transform="rotate(-50 55 88)"/>
      {[0,60,120,180,240,300].map((deg, i) => (
        <ellipse key={i}
          cx={70 + Math.cos(deg * Math.PI / 180) * 10}
          cy={65 + Math.sin(deg * Math.PI / 180) * 10}
          rx="6" ry="3" fill="#F2C4CE" opacity="0.65"
          transform={`rotate(${deg} ${70+Math.cos(deg*Math.PI/180)*10} ${65+Math.sin(deg*Math.PI/180)*10})`}/>
      ))}
      <circle cx="70" cy="65" r="5" fill="#E8A0B4" opacity="0.8"/>
      <circle cx="70" cy="65" r="2.5" fill="#C9A05A" opacity="0.9"/>
      <circle cx="50" cy="45" r="4.5" fill="#F2C4CE" opacity="0.7"/>
      <circle cx="85" cy="45" r="3.5" fill="#E8A0B4" opacity="0.6"/>
    </svg>
  )
}