import { useInView } from 'react-intersection-observer'
import {
  Flower,
  Heart,
  Camera,
  Wine,
  UtensilsCrossed,
  Music,
  Sparkles,
  Shirt,
  User,
  Leaf,
} from 'lucide-react'

const program = [
  { time: '10:00 AM', icon: Flower, title: 'Guest Arrival', desc: 'Welcome reception, light refreshments served' },
  { time: '11:00 AM', icon: Heart, title: 'Wedding Ceremony', desc: 'Exchange of vows and rings before God and loved ones' },
  { time: '12:00 PM', icon: Camera, title: 'Photography Session', desc: 'Formal portraits of bride, groom & families' },
  { time: '2:00 PM', icon: Wine, title: 'Reception Setup', desc: 'Guests settle in reception grounds' },
  { time: '2:30 PM', icon: UtensilsCrossed, title: 'Entourage Arrival', desc: 'Arrival and settling in of entourage' },
  { time: '3:10 PM', icon: Music, title: 'Speeches', desc: 'Heartfelt messages from family and friends' },
  { time: '3:30 PM', icon: Sparkles, title: 'Interlude', desc: 'Short entertainment break' },
  { time: '4:00 PM', icon: UtensilsCrossed, title: 'Food Service', desc: 'Dinner and refreshments' },
  { time: '5:00 PM', icon: Heart, title: 'Second Entrances', desc: 'Return of entourage & celebrations continue' },
  { time: '5:30 PM', icon: Sparkles, title: 'Cake Cutting', desc: 'Sweet celebration moment' },
  { time: '6:30 PM', icon: Heart, title: 'Gift Reception', desc: 'Receiving gifts and blessings' },
  { time: '7:00 PM', icon: Flower, title: 'Closing Prayer', desc: 'Speech from committee & closing prayer' },
  { time: '7:15 PM', icon: Music, title: 'First Dance', desc: 'Couple’s first dance' },
]

const dress = [
  {
    icon: Shirt,
    title: 'Ladies',
    desc: 'Elegant ladies are welcome in graceful and beautiful wedding attire.',
    swatches: ['#F2C4CE', '#E8C880', '#7A9B6E', '#FBE8ED', '#DDD5C0'],
  },
  {
    icon: User,
    title: 'Gentlemen',
    desc: 'Gentlemen are welcome in smart and refined wedding attire.',
    swatches: ['#3A4A5E', '#6A7A6E', '#8E7D5E', '#C0B090', '#2B2B3A'],
  },
]

export default function EventDetails() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="event" className="py-24 bg-cream-d">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div
          ref={ref}
          className={`text-center mb-16 reveal ${inView ? 'in-view' : ''}`}
        >
          <p className="font-body text-[0.7rem] tracking-[0.4em] uppercase text-gold mb-2">
            Join us
          </p>

          <h2
            className="font-script text-rose-d mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            The Celebration
          </h2>

          <div className="flex items-center justify-center gap-3">
            <span className="block w-20 h-px bg-dusty/50" />
            <Flower size={22} className="text-rose" />
            <span className="block w-20 h-px bg-dusty/50" />
          </div>
        </div>

        {/* PROGRAM */}
        <SectionBlock title="Order of Programme">
          <div className="relative ml-4">
            {program.map((item, i) => (
              <ProgramRow
                key={i}
                item={item}
                index={i}
                last={i === program.length - 1}
              />
            ))}
          </div>
        </SectionBlock>

        {/* DRESS CODE */}
        <SectionBlock title="Dress Code" className="mt-16">
          <p className="font-display italic text-ink-l text-[1rem] mb-8 leading-relaxed text-center max-w-2xl mx-auto">
            We'd love our guests to dress out of their comfort and enjoy a beautiful feel of our special day.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {dress.map((d, i) => (
              <DressCard key={i} item={d} index={i} />
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 bg-sage-p border-l-4 border-sage rounded-xl px-5 py-4">
            <Leaf size={20} className="text-sage flex-shrink-0 mt-0.5" />
            <p className="font-body text-sm text-sage leading-relaxed">
              We are excited to celebrate with you! Dress comfortably, beautifully, and in the spirit of joy.
            </p>
          </div>
        </SectionBlock>

      </div>
    </section>
  )
}

/* ================= SECTION BLOCK ================= */

function SectionBlock({ title, children, className = '' }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'in-view' : ''} ${className}`}
    >
      {/* CENTERED HEADER */}
      <div className="text-center mb-10">
        <h3
          className="font-script text-rose-d"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          {title}
        </h3>

        <div className="flex items-center justify-center gap-3 mt-3">
          <span className="w-14 h-px bg-gold/40" />
          <div className="w-2 h-2 rounded-full bg-rose" />
          <span className="w-14 h-px bg-gold/40" />
        </div>
      </div>

      {children}
    </div>
  )
}

/* ================= PROGRAM ROW ================= */

function ProgramRow({ item, index, last }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <div
      ref={ref}
      className={`grid items-start gap-4 mb-0 reveal-left ${
        inView ? 'in-view' : ''
      }`}
      style={{
        gridTemplateColumns: '90px 36px 1fr',
        transitionDelay: `${index * 0.06}s`,
      }}
    >
      <p className="font-body text-[0.76rem] text-gold font-medium text-right pt-0.5">
        {item.time}
      </p>

      <div className="relative flex flex-col items-center">
        <div className="w-3.5 h-3.5 rounded-full bg-rose mt-0.5 shadow-sm ring-4 ring-rose/20 z-10" />
        {!last && (
          <div className="w-0.5 flex-1 min-h-[36px] mt-1 bg-gradient-to-b from-rose to-rose/20" />
        )}
      </div>

      <div className="pb-7 flex gap-2.5">
        <item.icon size={20} className="text-rose-d mt-0.5" />
        <div>
          <h4 className="font-display font-semibold text-ink text-[1rem]">
            {item.title}
          </h4>
          <p className="font-body text-[0.83rem] text-ink-l">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  )
}

/* ================= DRESS CARD ================= */

function DressCard({ item, index }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-6 text-center border border-gold/15 shadow-sm hover:-translate-y-1.5 transition-all duration-300 ${
        inView ? 'in-view' : ''
      }`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <item.icon size={32} className="text-rose-d mx-auto mb-3" />

      <h4 className="font-display font-semibold text-rose-d text-[1.2rem] mb-3">
        {item.title}
      </h4>

      <p className="font-body text-[0.83rem] text-ink-l mb-4">
        {item.desc}
      </p>

      <div className="flex justify-center gap-1.5">
        {item.swatches.map((c, i) => (
          <div
            key={i}
            className="w-7 h-7 rounded-full border-2 border-white shadow"
            style={{ background: c }}
          />
        ))}
      </div>
    </div>
  )
}