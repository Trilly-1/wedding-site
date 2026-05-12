import { useState, useEffect } from 'react'
import { Cake } from 'lucide-react'

const links = [
  ['#hero', 'Home'],
  ['#love-story', 'Our Story'],
  ['#countdown', 'Countdown'],
  ['#event', 'Event'],
  ['#location', 'Venue'],
  ['#gallery', 'Gallery'],
  ['#gifts', 'Gifts'],
]

export default function Navigation() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Add marquee animation styles
    const style = document.createElement('style')
    style.textContent = `
      @keyframes marquee {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      .marquee-scroll {
        animation: marquee 25s linear infinite;
      }
      .marquee-scroll:hover {
        animation-play-state: paused;
      }
      .marquee-date {
        font-family: 'Playfair Display', serif;
        font-size: 1.3rem;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      }
      .marquee-text {
        font-family: 'Montserrat', sans-serif;
        font-size: 0.95rem;
        font-weight: 500;
        letter-spacing: 0.12em;
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
      }
    `
    document.head.appendChild(style)
    return () => style.remove()
  }, [])

  return (
    <>
      {/* Marquee Banner */}
      <div className="fixed top-0 left-0 right-0 z-[99998] bg-gradient-to-r from-rose-d via-rose to-rose-d h-9 flex items-center overflow-hidden border-b border-rose-d/30">
        <div className="marquee-scroll whitespace-nowrap flex items-center gap-12">
          <span className="text-white marquee-date flex items-center gap-2">
            <Cake size={20} />
            June 13, 2026
            <Cake size={20} />
          </span>
          <span className="text-white marquee-text">Timothy weds Hope</span>
          <span className="text-white marquee-date flex items-center gap-2">
            <Cake size={20} />
            June 13, 2026
            <Cake size={20} />
          </span>
          <span className="text-white marquee-text">Timothy weds Hope</span>
          <span className="text-white marquee-date flex items-center gap-2">
            <Cake size={20} />
            June 13, 2026
            <Cake size={20} />
          </span>
          <span className="text-white marquee-text">Timothy weds Hope</span>
        </div>
      </div>

  return (
    <nav
      className="
        fixed top-9 left-0 right-0
        z-[99999]
        bg-white/10
        backdrop-blur-2xl
        border-b border-white/10
      "
      style={{
        boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
      }}
    >
      <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* LOGO */}
        <a href="#hero" className="font-script text-[#E8C880] text-[2rem]">
          T &amp; H
        </a>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-white/70 hover:text-[#E8C880] uppercase tracking-[0.22em] text-[0.72rem]"
            >
              {label}
            </a>
          ))}
        </div>

        {/* MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/70 backdrop-blur-xl py-6 flex flex-col items-center gap-6">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-white/80 uppercase tracking-widest text-sm"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
    </>
  )
}