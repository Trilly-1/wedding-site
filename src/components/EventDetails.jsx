import { useInView } from 'react-intersection-observer'
import { Flower, Heart, Camera, Wine, UtensilsCrossed, Music, Sparkles, Shirt, User, CheckSquare, Leaf } from 'lucide-react'

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
    icon: Shirt,
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
        <SectionBlock title="Dress Code" icon={Shirt} className="mt-16">
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
