import { useInView } from 'react-intersection-observer'

const details = [
  { icon: '📍', label: 'Venue',  value: 'Life Beach Hotel, Busabala' },
  { icon: '📅', label: 'Date',   value: 'Saturday, June 13, 2026' },
  { icon: '⏰', label: 'Time',   value: 'Ceremony begins at 10:00 AM' },
  { icon: '🌍', label: 'City',   value: 'Kampala, Uganda' },
]

const venueImgs = [
  { src: '/venue1.JPG', caption: 'The Venue', cls: 'vp-1' },
  { src: '/venue2.JPG', caption: 'Garden Setting', cls: 'vp-2' },
  { src: '/venue3.JPG', caption: 'Flat landscape', cls: 'vp-3' },
  { src: '/venue4.JPG', caption: 'Grand Entrance', cls: 'vp-4' },
]

const errColors = ['linear-gradient(135deg,#F2C4CE,#C8A2A2)','linear-gradient(135deg,#D4E4CF,#7A9B6E)','linear-gradient(135deg,#F2C4CE,#C8A2A2)','linear-gradient(135deg,#D4E4CF,#7A9B6E)']

export default function Location() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="location" className="py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div ref={ref} className={`text-center mb-12 reveal ${inView ? 'in-view' : ''}`}>
          <p className="font-body text-[0.7rem] tracking-[0.4em] uppercase text-gold mb-2">Find us here</p>
          <h2 className="font-script text-rose-d mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Venue &amp; Location
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="block w-20 h-px bg-dusty/50" />
            <span>📍</span>
            <span className="block w-20 h-px bg-dusty/50" />
          </div>
        </div>

        {/* Info cards */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 reveal ${inView ? 'in-view' : ''}`}
          style={{ transitionDelay: '0.15s' }}>
          {details.map((d, i) => (
            <div key={i} className="bg-white rounded-xl p-4 flex items-start gap-3 border border-gold/15 shadow-sm">
              <span className="text-xl flex-shrink-0">{d.icon}</span>
              <div>
                <p className="font-body text-[0.6rem] tracking-[0.2em] uppercase text-gold mb-0.5">{d.label}</p>
                <p className="font-display font-medium text-[0.9rem] text-ink leading-snug">{d.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Venue photo grid */}
        <div className={`venue-grid rounded-2xl overflow-hidden mb-10 reveal ${inView ? 'in-view' : ''}`}
          style={{ transitionDelay: '0.25s' }}>
          {venueImgs.map((v, i) => (
            <div key={i} className={`relative overflow-hidden group ${v.cls}`}>
              <div className="w-full h-full" style={{ background: errColors[i] }}>
                <img
                  src={v.src}
                  alt={v.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={e => { e.target.style.display = 'none' }}
                />
              </div>
              <div className="absolute inset-0" style={{ background: 'linear-gradient(transparent 50%, rgba(43,26,42,0.55))' }} />
              <p className="absolute bottom-0 left-0 right-0 font-body text-[0.7rem] tracking-widest text-cream/90 uppercase text-center py-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {v.caption}
              </p>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className={`reveal ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '0.35s' }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-semibold text-rose-d text-[1.3rem]">Find Your Way</h3>
            <a
              href="https://maps.google.com/?q=Life Beach Hotel,Busabala"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-rose text-white font-body text-[0.72rem] tracking-widest uppercase rounded-full px-5 py-2.5 hover:bg-rose-d transition-colors shadow-md"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="3 11 22 2 13 21 11 13 3 11"/>
              </svg>
              Get Directions
            </a>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gold/15" style={{ height: '420px' }}>
            <iframe
              title="Wedding Venue"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19891869637!2d32.53319499999999!3d0.3475966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f9d74b39b%3A0x4256a329ac568928!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1700000000000"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-lg font-body text-[0.78rem] text-ink whitespace-nowrap">
                <span>📍</span><span>Timothy &amp; Hope's Wedding</span>
              </div>
            </div>
          </div>
          <p className="text-center font-body text-[0.72rem] italic text-ink-l/60 mt-3">
            Click on "GET DIRECTIONS" to open Google Maps and get directions from your location. We can't wait to celebrate with you!
          </p>
        </div>

      </div>
    </section>
  )
}