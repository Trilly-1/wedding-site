import { useState, useEffect } from 'react'

const links = [
  ['#hero',       'Home'],
  ['#love-story', 'Our Story'],
  ['#countdown',  'Countdown'],
  ['#event',      'Event'],
  ['#location',   'Venue'],
  ['#gallery',    'Gallery'],
  ['#gifts',      'Gifts'],
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[8000] transition-all duration-300 ${
        scrolled ? 'bg-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#hero" className="font-script text-gold-l text-2xl leading-none">
          T &amp; H
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="font-body text-[0.68rem] tracking-[0.18em] uppercase text-cream/60 hover:text-gold transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-cream/70 hover:text-gold transition-colors"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            {open
              ? <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round"/>
              : <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"/>
            }
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-drawer md:hidden bg-dark/95 ${open ? 'open' : ''}`}>
        <div className="flex flex-col items-center gap-5 py-6">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="font-body text-[0.72rem] tracking-[0.22em] uppercase text-cream/60 hover:text-gold transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}