import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from "react"
import { Waves, Moon, Sun, Heart } from 'lucide-react'

const chapters = [
  {
    icon: Waves,
    num: '01',
    tag: 'His words',
    title: 'A Splash of Fate',
    body: `It all started at a swimming pool... the friendship, I mean. As a group of friends, we planned to meet and catch up, then all of a sudden, I see this black pretty babe walk through the gate. Everyone knew her and she joined us. Well… that's how we got to meet. The journey of friendship officially kicked off — exchanging numbers, then messages (all of which were platonic of course). Slowly we got to know each other and in a period of 2 years, something deep started to grow. A feeling like none other… was that attachment, desire, or even love?`,
    img: '/img38.JPG',
    flip: false,
  },
  {
    icon: Moon,
    num: '02',
    tag: 'His words',
    title: 'Late Night Calls',
    body: `All I know is I wanted to know how her day was and everything that happened. This is when the late night calls began and thankfully, she was always responsive towards them. Hope turned my sorrows into joy, made my days seem better and made me feel wanted, yearned for… I found myself looking forward to every message, every call, every moment shared — no matter how small.`,
    img: '/img19.JPG',
    flip: true,
  },
  {
    icon: Sun,
    num: '03',
    tag: 'Her words',
    title: 'He Became My Sunshine',
    body: `I (Hope) never thought that anything would amount from Timothy and me. All it was supposed to be was a friendship, but with time, it slowly turned into something truly special. I got to meet a guy who expressed his love for me in ways I did not know possible. He was easy to talk to, and I did not have to pretend when we were together. I looked forward to spending time with him day after day.`,
    img: '/img11.JPG',
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
    }, 120000) // 2 minutes

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % chapters.length)
  }

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? chapters.length - 1 : prev - 1))
  }

  return (
    <section
      id="love-story"
      className="py-24 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at top left, rgba(201,160,90,0.12), transparent 40%),
          radial-gradient(circle at bottom right, rgba(244,194,206,0.18), transparent 45%),
          linear-gradient(to bottom, #fffaf6, #f7f1ec)
        `
      }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div ref={ref} className={`text-center mb-20 ${inView ? 'in-view' : ''}`}>
          <p className="font-body text-[0.9rem] tracking-[0.4em] uppercase text-gold mb-2">
            How it all began
          </p>

          <h2 className="font-script mb-4"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)' }}>
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

                <div className="hidden md:grid md:grid-cols-2 gap-14 items-center">

                  {/* IMAGE FIXED HEIGHT */}
                  <div className={`relative ${ch.flip ? 'md:order-2' : ''}`}>
                    <div className="rounded-3xl overflow-hidden shadow-2xl h-[420px] md:h-[520px]">

                      <img
                        src={ch.img}
                        alt={ch.title}
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(to top, rgba(43,26,42,0.12), transparent 50%)'
                        }}
                      />
                    </div>

                    <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center font-semibold text-lg shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, #C9A05A, #E8C880)'
                      }}>
                      {ch.num}
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className={ch.flip ? 'md:order-1' : ''}>
                    <ch.icon size={48} className="text-rose-d mb-3" />

                    <span className="ml-3 text-[0.82rem] tracking-[0.3em] uppercase text-gold">
                      {ch.tag}
                    </span>

                    <h3 className="font-semibold mt-5 mb-5"
                      style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                      {ch.title}
                    </h3>

                    <p className="italic leading-[2.2] text-[1.18rem]">
                      {ch.body}
                    </p>
                  </div>
                </div>

                {/* MOBILE (unchanged) */}
                <div className="md:hidden relative rounded-3xl overflow-hidden min-h-[650px] shadow-2xl">

                  <img
                    src={ch.img}
                    alt={ch.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/60" />

                  <div className="relative z-10 p-8 flex flex-col justify-end h-full text-white">

                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                      style={{
                        background: 'linear-gradient(135deg, #C9A05A, #E8C880)'
                      }}>
                      {ch.num}
                    </div>

                    <ch.icon size={48} className="text-rose-d mb-3" />

                    <span className="text-[0.75rem] uppercase text-[#E8C880]">
                      {ch.tag}
                    </span>

                    <h3 className="mt-4 mb-5 text-2xl">
                      {ch.title}
                    </h3>

                    <p className="leading-[2.1] text-white/90">
                      {ch.body}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* ARROWS */}
          <button onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 shadow-lg">
            ‹
          </button>

          <button onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 shadow-lg">
            ›
          </button>

        </div>

      </div>
    </section>
  )
}