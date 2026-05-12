#!/usr/bin/env python3
import os

os.chdir('/home/localhost8081/wedding-site')

# EventDetails
with open('src/components/EventDetails.jsx', 'w') as f:
    f.write('''import { useInView } from 'react-intersection-observer'
import { Flower, Heart, Camera, Wine, UtensilsCrossed, Music, Sparkles, Tulip, User, CheckSquare, Leaf } from 'lucide-react'

const program = [
  { time: '9:00 AM',  icon: Flower, title: 'Guest Arrival',         desc: 'Welcome reception, light refreshments served' },
  { time: '10:00 AM', icon: Heart, title: 'Wedding Ceremony',       desc: 'Exchange of vows and rings before God and loved ones' },
  { time: '11:30 AM', icon: Camera, title: 'Photography Session',    desc: 'Formal portraits of bride, groom & families' },
  { time: '12:30 PM', icon: Wine, title: 'Cocktail Reception',     desc: 'Drinks and canapés as we celebrate together' },
  { time: '1:30 PM',  icon: UtensilsCrossed, title: 'Wedding Luncheon',       desc: 'Sit-down feast and wedding programme' },
  { time: '3:00 PM',  icon: Music, title: 'Speeches & First Dance',  desc: 'Toasts, heartfelt words & the first dance' },
  { time: '4:00 PM',  icon: Sparkles, title: 'Celebration & Dancing',   desc: 'Music, dancing, cake cutting and celebration' },
  { time: '6:00 PM',  icon: Heart, title: 'Send-off',                desc: 'Farewell the happy couple into their new journey' },
]

const dress = [
  {
    icon: Tulip,
    title: 'Ladies',
    desc: 'Elegant ladies are welcome in graceful and beautiful wedding attire.',
    swatches: ['#F2C4CE','#E8C880','#7A9B6E','#FBE8ED','#DDD5C0'],
  },
  {
    icon: User,
    title: 'Gentlemen',
    desc: ' Gentlemen are welcome in smart and refined wedding attire.',
    swatches: ['#3A4A5E','#6A7A6E','#8E7D5E','#C0B090','#2B2B3A'],
  },
]

export default function EventDetails() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="event" className="py-24 bg-cream-d">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div ref={ref} className={`text-center mb-16 reveal ${inView ? 'in-view' : ''}`}>
          <p className="font-body text-[0.7rem] tracking-[0.4em] uppercase text-gold mb-2">Join us</p>
          <h2 className="font-script text-rose-d mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            The Celebration
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="block w-20 h-px bg-dusty/50" />
            <Flower size={24} className="text-rose" />
            <span className="block w-20 h-px bg-dusty/50" />
          </div>
        </div>

        {/* Programme */}
        <SectionBlock title="Order of Programme" icon={CheckSquare}>
          <div className="relative ml-4">
            {program.map((item, i) => (
              <ProgramRow key={i} item={item} index={i} last={i === program.length - 1} />
            ))}
          </div>
        </SectionBlock>

        {/* Dress code */}
        <SectionBlock title="Dress Code" icon={Tulip} className="mt-16">
          <p className="font-display italic text-ink-l text-[1rem] mb-6 leading-relaxed">
            We'd love our guests to dress out of their comfort and have a perfect feel of our day.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {dress.map((d, i) => (
              <DressCard key={i} item={d} index={i} />
            ))}
          </div>
          <div className="mt-5 flex items-start gap-3 bg-sage-p border-l-4 border-sage rounded-xl px-5 py-4">
            <Leaf size={20} className="text-sage flex-shrink-0 mt-0.5" />
            <p className="font-body text-sm text-sage leading-relaxed">
  We are excited to celebrate with you! Dress comfortably, beautifully, and in the spirit of joy as we share this special day together.
</p>
          </div>
        </SectionBlock>

      </div>
    </section>
  )
}

function SectionBlock({ title, icon: IconComponent, children, className = '' }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  return (
    <div ref={ref} className={`reveal ${inView ? 'in-view' : ''} ${className}`}>
      <h3 className="font-display font-semibold text-rose-d text-[1.4rem] mb-6 flex items-center gap-2">
        {IconComponent && <IconComponent size={24} />}
        {title}
      </h3>
      {children}
    </div>
  )
}

function ProgramRow({ item, index, last }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  return (
    <div
      ref={ref}
      className={`grid items-start gap-4 mb-0 reveal-left ${inView ? 'in-view' : ''}`}
      style={{ gridTemplateColumns: '90px 36px 1fr', transitionDelay: `${index * 0.06}s` }}
    >
      {/* Time */}
      <p className="font-body text-[0.76rem] text-gold font-medium text-right pt-0.5 leading-none">
        {item.time}
      </p>

      {/* Dot + line */}
      <div className="relative flex flex-col items-center">
        <div className="w-3.5 h-3.5 rounded-full bg-rose mt-0.5 flex-shrink-0 shadow-sm ring-4 ring-rose/20 z-10" />
        {!last && <div className="w-0.5 flex-1 min-h-[36px] mt-1" style={{ background: 'linear-gradient(to bottom, #E8A0B4, #FBE8ED)' }} />}
      </div>

      {/* Content */}
      <div className="pb-7 flex gap-2.5">
        <item.icon size={20} className="text-rose-d mt-0.5 flex-shrink-0" />
        <div>
          <h4 className="font-display font-semibold text-ink text-[1rem] mb-0.5">{item.title}</h4>
          <p className="font-body text-[0.83rem] text-ink-l leading-relaxed">{item.desc}</p>
        </div>
      </div>
    </div>
  )
}

function DressCard({ item, index }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-6 text-center border border-gold/15 shadow-sm hover:-translate-y-1.5 hover:shadow-md transition-all duration-300 reveal ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <item.icon size={32} className="text-rose-d mx-auto mb-3" />
      <h4 className="font-display font-semibold text-rose-d text-[1.2rem] mb-3">{item.title}</h4>
      <p className="font-body text-[0.83rem] text-ink-l leading-relaxed mb-4">{item.desc}</p>
      <div className="flex justify-center gap-1.5 mb-1.5">
        {item.swatches.map((c, i) => (
          <div key={i} className="w-7 h-7 rounded-full border-2 border-white shadow" style={{ background: c }} />
        ))}
      </div>
      <p className="font-body text-[0.62rem] tracking-[0.15em] uppercase text-ink-l/60"></p>
    </div>
  )
}
''')
print("✅ EventDetails.jsx")

# Footer
with open('src/components/Footer.jsx', 'w') as f:
    f.write('''import { Ring, Flower, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative py-20 text-center overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #1E1014, #2B1A2A, #1E1014)' }}>

      {/* Rising petals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-tl-full rounded-br-full petal-rise"
            style={{
              width: `${7 + i * 1.5}px`, height: `${11 + i * 2}px`,
              left: `${i * 13}%`, bottom: '-20px',
              '--dur': `${7 + i * 0.5}s`, '--delay': `${i * 0.4}s`,
              background: 'radial-gradient(ellipse, rgba(242,196,206,0.4), rgba(162,82,106,0.1))',
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Names */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="font-script text-[3rem] text-cream/90 leading-none">Timothy</span>
          <Ring size={28} className="text-gold" />
          <span className="font-script text-[3rem] text-cream/90 leading-none">Hope</span>
        </div>

        <p className="font-body text-[0.76rem] tracking-[0.4em] uppercase text-gold mb-7">
          June 13 · 2026
        </p>

        <blockquote className="font-display italic text-cream/50 text-[0.9rem] max-w-md mx-auto px-6 leading-relaxed mb-7">
          "God has proved Himself through it all and this day is a testament of His goodness, grace and mercy."
        </blockquote>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-1 mb-7">
          {[
            ['#hero','Home'],['#love-story','Our Story'],['#countdown','Countdown'],
            ['#event','Event'],['#location','Venue'],['#gallery','Gallery'],['#gifts','Gifts']
          ].map(([h,l]) => (
            <a key={h} href={h}
              className="font-body text-[0.68rem] tracking-[0.18em] uppercase text-cream/35 hover:text-gold transition-colors">
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-center gap-2 text-gold/25 mb-5">
          <Flower size={16} /><Flower size={16} /><Flower size={16} />
        </div>

        <p className="font-body text-[0.68rem] text-cream/20 tracking-widest flex items-center justify-center gap-1">
          Made with <Heart size={14} className="text-rose-d" /> for Timothy &amp; Hope · 2026
        </p>
      </div>
    </footer>
  )
}
''')
print("✅ Footer.jsx")

# Gifts
with open('src/components/Gifts.jsx', 'w') as f:
    f.write('''import { useInView } from "react-intersection-observer";
import { Flower } from 'lucide-react'

export default function Gifts() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      id="gifts"
      className="py-24 relative overflow-hidden"
      style={{ background: "#FDFAF4" }}
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* PURPLE CLOSING CONTAINER ONLY */}
        <div
          ref={ref}
          className={`transition-all duration-1000 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className="relative rounded-3xl p-10 md:p-14 text-center overflow-hidden"
            style={{
              background: "linear-gradient(145deg,#2B1A2A,#4A2235)",
            }}
          >
            {/* glow background */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center,rgba(160,82,106,0.2),transparent 65%)",
              }}
            />

            {/* content */}
            <div className="relative z-10">
              <Flower size={40} className="text-gold mx-auto mb-4" />

              <h3
                className="font-script mb-4"
                style={{
                  fontSize: "clamp(2rem,4vw,3rem)",
                  color: "#E8C880",
                }}
              >
                Most of all…
              </h3>

              <p
                className="font-display italic max-w-lg mx-auto leading-[1.9] mb-6 text-[1.04rem]"
                style={{ color: "rgba(253,250,244,0.72)" }}
              >
                Your presence at our wedding is the greatest gift of all. We
                can't wait to see your smiling faces as we begin this beautiful
                chapter. Thank you for being part of our story.
              </p>

              <div
                className="flex items-center justify-center gap-3 font-script text-[1.8rem]"
                style={{ color: "rgba(253,250,244,0.62)" }}
              >
                <span>— Timothy</span>
                <span
                  className="font-display italic text-[1.3rem]"
                  style={{ color: "#C9A05A" }}
                >
                  &amp;
                </span>
                <span>Hope —</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
''')
print("✅ Gifts.jsx")

# EnvelopeIntro - just add the imports
with open('src/components/EnvelopeIntro.jsx', 'r') as f:
    content = f.read()

if 'lucide-react' not in content:
    content = content.replace(
        "import { useState, useEffect } from 'react'",
        "import { useState, useEffect } from 'react'\nimport { Sparkles, Ring } from 'lucide-react'"
    )
    content = content.replace(
        '✨ A love worth celebrating ✨',
        '''<Sparkles size={24} /><span>A love worth celebrating</span><Sparkles size={24} />'''
    )
    content = content.replace(
        '<span className="text-2xl">💍</span>',
        '<Ring size={28} className="text-gold" />'
    )
    with open('src/components/EnvelopeIntro.jsx', 'w') as f:
        f.write(content)

print("✅ EnvelopeIntro.jsx")
print("\n✅ All files updated with lucide-react icons!")
