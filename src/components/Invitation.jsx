import { useState, useEffect, useRef } from 'react'

function useInView({ threshold = 0.3 } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, inView }
}

export default function Invitation() {
  const { ref, inView } = useInView({ threshold: 0.3 })

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#F5EFE0' }}>

      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(242,196,206,0.28), transparent 75%)'
      }} />

      <div className="absolute top-0 left-0 right-0 flex items-center gap-3 justify-center py-4 pointer-events-none">
        <span className="block flex-1 max-w-xs h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(196,138,154,0.4))' }} />
        <span className="font-body text-[0.7rem] tracking-[0.35em]" style={{ color: 'rgba(196,138,154,0.5)' }}>❀ ✿ ❀</span>
        <span className="block flex-1 max-w-xs h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(196,138,154,0.4))' }} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 justify-center py-4 pointer-events-none">
        <span className="block flex-1 max-w-xs h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(196,138,154,0.4))' }} />
        <span className="font-body text-[0.7rem] tracking-[0.35em]" style={{ color: 'rgba(196,138,154,0.5)' }}>❀ ✿ ❀</span>
        <span className="block flex-1 max-w-xs h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(196,138,154,0.4))' }} />
      </div>

      {/* ── Content — fade in when scrolled into view ── */}
      <div
        ref={ref}
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '48rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          textAlign: 'center',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(28px)',
          transition: 'opacity 0.85s ease, transform 0.85s ease',
        }}
      >
        <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.68rem', letterSpacing: '0.45em', textTransform: 'uppercase', color: '#C9A05A', marginBottom: '1.5rem' }}>
          Together with their families
        </p>

        <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2.5vw, 1.45rem)', color: '#3D2535', lineHeight: 1.7, marginBottom: '2rem' }}>
          You are cordially invited to witness the union of
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: 'Great Vibes, cursive', fontSize: 'clamp(2.8rem, 7vw, 4.8rem)', color: '#7A3050', lineHeight: 1 }}>
            Timothy Etibu
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0.6rem 0' }}>
            <span style={{ display: 'block', width: '64px', height: '1px', background: 'rgba(201,160,90,0.5)' }} />
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1.3rem', color: '#C9A05A' }}>&amp;</span>
            <span style={{ display: 'block', width: '64px', height: '1px', background: 'rgba(201,160,90,0.5)' }} />
          </div>
          <h2 style={{ fontFamily: 'Great Vibes, cursive', fontSize: 'clamp(2.8rem, 7vw, 4.8rem)', color: '#7A3050', lineHeight: 1 }}>
            Hope Constance Asede
          </h2>
        </div>

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '12px',
          padding: '10px 28px', borderRadius: '9999px',
          background: 'rgba(201,160,90,0.1)', border: '1px solid rgba(201,160,90,0.3)',
          marginBottom: '2rem',
        }}>
          <span style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7A5A6A' }}>Saturday</span>
          <span style={{ color: '#C9A05A' }}>·</span>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, fontSize: '1.1rem', color: '#C9A05A' }}>June 13, 2026</span>
          <span style={{ color: '#C9A05A' }}>·</span>
          <span style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7A5A6A' }}>Uganda</span>
        </div>

        <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1rem', color: '#7A5A6A', lineHeight: 1.8 }}>
          Your presence and blessings mean the world to us.
        </p>
      </div>
    </section>
  )
}