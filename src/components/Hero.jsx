export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img14.JPG"
          alt="Timothy and Hope"
          className="w-full h-full object-cover"
          style={{ objectPosition: '50% 18%' }}
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

        {/* DATE
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
        </div> */}

        {/* LOCATION */}
        <p className="mt-3 text-cream/70 uppercase tracking-widest text-xs">
          Life Beach Hotel · Busabala
        </p>

      </div>
    </section>
  )
}