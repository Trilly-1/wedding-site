import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { Waves, Moon, Sun, Heart } from 'lucide-react'

const chapters = [
  {
    icon: Waves,
    num: '01',
    tag: 'His words',
    title: 'A Splash of Fate',
    body: `It all started at a swimming pool... the friendship, I mean. As a group of friends, we planned to meet and catch up, then all of a sudden, I see this dark-skinned pretty babe walk through the gate. Everyone knew her and she joined us. Well… that's how we got to meet. The journey of friendship officially kicked off — exchanging numbers, then messages (all of which were platonic of course). Slowly we got to know each other and in a period of 2 years, something deep started to grow.`,
    img: '/img43.jpg',
    flip: false,
  },

  {
    icon: Moon,
    num: '02',
    tag: 'His words',
    title: 'Late Night Calls',
    body: `All I know is I wanted to know how her day was and everything that happened. This is when the late night calls began and thankfully, she was always responsive towards them. Hope turned my sorrows into joy, made my days seem better and made me feel wanted, yearned for… I found myself looking forward to every message, every call, every moment shared — no matter how small.`,
    img: '/img4.JPG',
    flip: true,
  },

  {
    icon: Sun,
    num: '03',
    tag: 'Her words',
    title: 'He Became My Sunshine',
    body: `I (Hope) never thought that anything would amount from Timothy and me. All it was supposed to be was a friendship, but with time, it slowly turned into something truly special. I got to meet a guy who expressed his love for me in ways I did not know possible. He was easy to talk to, and I did not have to pretend when we were together. I looked forward to spending time with him day after day.`,
    img: '/img26.jpeg',
    flip: false,
  },

  {
    icon: Heart,
    num: '04',
    tag: 'Her words',
    title: 'A Ray of Everything Good',
    body: `Overtime, he has become a ray of sunshine, hope, love, peace, and joy. I looked forward to talks, meetups, dates, and so much more. Making this decision was one of the easiest we have ever done. God has proved Himself through it all and this day is a testament of His goodness, grace and mercy. We can't wait to celebrate His faithfulness with all of you!`,
    img: '/img14.JPG',
    flip: true,
  },
]

export default function LoveStory() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % chapters.length)
    }, 120000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => setIndex((prev) => (prev + 1) % chapters.length)
  const prevSlide = () => setIndex((prev) => (prev === 0 ? chapters.length - 1 : prev - 1))

  return (
    <section
      id="love-story"
      className="py-24 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at top left, rgba(201,160,90,0.12), transparent 40%),
          radial-gradient(circle at bottom right, rgba(244,194,206,0.18), transparent 45%),
          linear-gradient(to bottom, #fffaf6, #f7f1ec)
        `,
      }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div ref={ref} className={`text-center mb-20 ${inView ? 'in-view' : ''}`}>
          <p className="font-body text-[0.9rem] tracking-[0.4em] uppercase text-gold mb-2">
            How it all began
          </p>

          <h2 className="font-script mb-4" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)' }}>
            Our Love Story
          </h2>

          <p className="font-display italic text-lg max-w-xl mx-auto leading-relaxed">
            A friendship that bloomed into something far more beautiful than either of us imagined.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative overflow-hidden">

          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {chapters.map((ch, i) => (
              <div key={i} className="min-w-full">

                {/* MOBILE */}
                <div className="md:hidden">

                  <div className="rounded-[2rem] overflow-hidden bg-white shadow-[0_15px_50px_rgba(0,0,0,0.12)]">

                    {/* IMAGE */}
                    <div className="relative h-[340px] overflow-hidden">
                      <img src={ch.img} alt={ch.title} className="w-full h-full object-cover" />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />

                      <div className="absolute top-5 right-5 w-14 h-14 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-xl"
                        style={{
                          background: 'linear-gradient(135deg, #C9A05A, #E8C880)',
                        }}
                      >
                        {ch.num}
                      </div>

                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <ch.icon size={38} className="mb-3 text-[#F2C4CE]" />
                        <span className="text-[0.72rem] uppercase tracking-[0.3em] text-[#E8C880]">
                          {ch.tag}
                        </span>
                        <h3 className="mt-3 text-3xl font-semibold">{ch.title}</h3>
                      </div>
                    </div>

                    {/* TEXT */}
                    <div className="px-6 py-7">
                      <p className="text-[1rem] leading-[2] text-[#5C4B51]">
                        {ch.body}
                      </p>

                      {/* NAVIGATION (UPDATED GLITTER BUTTONS) */}
                      <div className="flex items-center justify-between mt-8">

                        {/* LEFT BUTTON */}
                        <button
                          onClick={prevSlide}
                          className="
                            w-14 h-14 rounded-full
                            bg-gradient-to-br from-[#F2C4CE] via-[#E8C880] to-[#C9A05A]
                            text-white text-2xl
                            shadow-[0_0_20px_rgba(232,200,128,0.8)]
                            animate-pulse
                            flex items-center justify-center
                            transition-all duration-300
                            active:scale-90
                          "
                          style={{
                            boxShadow:
                              '0 0 15px rgba(201,160,90,0.9), 0 0 35px rgba(232,200,128,0.6)',
                          }}
                        >
                          ‹
                        </button>

                        {/* DOTS */}
                        <div className="flex items-center gap-2">
                          {chapters.map((_, dotIndex) => (
                            <div
                              key={dotIndex}
                              className={`transition-all duration-300 rounded-full ${
                                dotIndex === index
                                  ? 'w-8 h-2 bg-[#C9A05A]'
                                  : 'w-2 h-2 bg-[#E8D5B7]'
                              }`}
                            />
                          ))}
                        </div>

                        {/* RIGHT BUTTON */}
                        <button
                          onClick={nextSlide}
                          className="
                            w-14 h-14 rounded-full
                            bg-gradient-to-br from-[#C9A05A] via-[#E8C880] to-[#F2C4CE]
                            text-white text-2xl
                            shadow-[0_0_20px_rgba(232,200,128,0.8)]
                            animate-pulse
                            flex items-center justify-center
                            transition-all duration-300
                            active:scale-90
                          "
                          style={{
                            boxShadow:
                              '0 0 15px rgba(201,160,90,0.9), 0 0 35px rgba(232,200,128,0.6)',
                          }}
                        >
                          ›
                        </button>

                      </div>
                    </div>
                  </div>
                </div>

                {/* DESKTOP (UNCHANGED) */}
                <div className="hidden md:grid md:grid-cols-2 gap-14 items-center">
                  {/* unchanged desktop code */}
                </div>

              </div>
            ))}
          </div>

          {/* DESKTOP ARROWS (UNCHANGED) */}
          <div className="hidden md:block">
            <button onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 shadow-xl text-3xl text-rose-d">
              ‹
            </button>

            <button onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 shadow-xl text-3xl text-rose-d">
              ›
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}