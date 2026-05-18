import { Gem, Flower, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="relative py-20 text-center overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, #1E1014, #2B1A2A, #1E1014)',
      }}
    >

      {/* Rising petals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-tl-full rounded-br-full petal-rise"
            style={{
              width: `${7 + i * 1.5}px`,
              height: `${11 + i * 2}px`,
              left: `${i * 13}%`,
              bottom: '-20px',
              '--dur': `${7 + i * 0.5}s`,
              '--delay': `${i * 0.4}s`,
              background:
                'radial-gradient(ellipse, rgba(242,196,206,0.4), rgba(162,82,106,0.1))',
            }}
          />
        ))}
      </div>

      <div className="relative z-10">

        {/* Names */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="font-script text-[3rem] text-cream/90 leading-none">
            Timothy
          </span>

          <Gem size={28} className="text-gold" />

          <span className="font-script text-[3rem] text-cream/90 leading-none">
            Hope
          </span>
        </div>

        <p className="font-body text-[0.76rem] tracking-[0.4em] uppercase text-gold mb-8">
          June 13 · 2026
        </p>

        {/* Scripture */}
        <blockquote
          className="
            font-display italic
            text-cream/70
            max-w-3xl
            mx-auto
            px-6
            leading-relaxed
            mb-8
          "
          style={{
            fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
          }}
        >
          “He who finds a wife finds what is good and receives favor from the Lord.”
          
          <span className="block mt-4 text-gold text-[0.95rem] tracking-[0.25em] uppercase">
            Proverbs 18:22
          </span>
        </blockquote>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-1 mb-7">

          {[
            ['#hero', 'Home'],
            ['#love-story', 'Our Story'],
            ['#countdown', 'Countdown'],
            ['#event', 'Event'],
            ['#location', 'Venue'],
            ['#gallery', 'Gallery'],
            ['#gifts', 'Gifts'],
          ].map(([h, l]) => (
            <a
              key={h}
              href={h}
              className="
                font-body
                text-[0.68rem]
                tracking-[0.18em]
                uppercase
                text-cream/35
                hover:text-gold
                transition-colors
              "
            >
              {l}
            </a>
          ))}
        </nav>

        {/* Decorative flowers */}
        <div className="flex items-center justify-center gap-2 text-gold/25 mb-5">
          <Flower size={16} />
          <Flower size={16} />
          <Flower size={16} />
        </div>

        {/* Footer bottom */}
        <p className="font-body text-[0.68rem] text-cream/20 tracking-widest flex items-center justify-center gap-1">
          Made with <Heart size={14} className="text-rose-d" /> for Timothy &amp; Hope · 2026
        </p>

      </div>
    </footer>
  )
}