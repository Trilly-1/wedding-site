import { useState } from 'react'

export default function EnvelopeIntro({ onEnter }) {
  const [stage,   setStage]   = useState('idle')
  const [leaving, setLeaving] = useState(false)

  const handleEnvelopeClick = () => {
    if (stage !== 'idle') return
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

      {/* Top tagline */}
      <p className={`font-body text-[0.7rem] tracking-[0.4em] uppercase text-gold/60 mb-6 transition-opacity duration-500 ${flapOpen ? 'opacity-0' : 'opacity-100'}`}>
        You have a message
      </p>

      {/*
        ── Scene container ──
        Fixed width, height expands when cards appear so they push INTO view
        (not off the top of the screen). Cards live at the TOP of this box;
        envelope sits at the BOTTOM. When cardsRising the box grows upward
        via padding-top, keeping the viewport centred on the envelope.
      */}
      <div style={{ position: 'relative', width: '360px' }}>

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