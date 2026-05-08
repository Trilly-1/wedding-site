import { useState } from 'react'

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

  return (
    <nav
      className="
        fixed top-0 left-0 right-0
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
  )
}