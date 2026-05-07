import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from "react"

const chapters = [
  {
    icon: '🏊',
    num: '01',
    tag: 'His words',
    title: 'A Splash of Fate',
    body: `It all started at a swimming pool... the friendship, I mean. As a group of friends, we planned to meet and catch up, then all of a sudden, I see this black pretty babe walk through the gate. Everyone knew her and she joined us. Well… that's how we got to meet. The journey of friendship officially kicked off — exchanging numbers, then messages (all of which were platonic of course 😉). Slowly we got to know each other and in a period of 2 years, something deep started to grow. A feeling like none other… was that attachment, desire, or even love?`,
    img: '/img17.JPG',
    flip: false,
  },
  {
    icon: '🌙',
    num: '02',
    tag: 'His words',
    title: 'Late Night Calls',
    body: `All I know is I wanted to know how her day was and everything that happened. This is when the late night calls began and thankfully, she was always responsive towards them. Hope turned my sorrows into joy, made my days seem better and made me feel wanted, yearned for… I found myself looking forward to every message, every call, every moment shared — no matter how small.`,
    img: '/img19.JPG',
    flip: true,
  },
  {
    icon: '☀️',
    num: '03',
    tag: 'Her words',
    title: 'He Became My Sunshine',
    body: `I (Hope) never thought that anything would amount from Timothy and I. All it was supposed to be was a friendship — but as you may have it, "the stone that was rejected, became the chief cornerstone" 😅. I got to meet a guy who expressed his love for me in ways I didn't know possible. He was easy to talk to and I didn't have to pretend when we were together. I looked forward to spending time with him day after day.`,
    img: '/img11.JPG',
    flip: false,
  },
  {
    icon: '💛',
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
    }, 5000) // 5 seconds

    return () => clearInterval(interval)
  }, [])

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
      {/* Floral decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.04] pointer-events-none">
        <BigFloral />
      </div>

      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-20 reveal ${inView ? 'in-view' : ''}`}
        >
          <p className="font-body text-[0.9rem] tracking-[0.4em] uppercase text-gold mb-2">
            How it all began
          </p>

          <h2
            className="font-script text-rose-d mb-4"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)' }}
          >
            Our Love Story
          </h2>

          <p className="font-display italic text-ink-l mt-4 text-lg max-w-md mx-auto leading-relaxed">
            A friendship that bloomed into something far more beautiful than either of us imagined.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative overflow-hidden">

          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {chapters.map((ch, i) => (
              <div key={i} className="min-w-full">

                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

                  {/* IMAGE */}
                  <div className={`relative ${ch.flip ? 'md:order-2' : ''}`}>
                    <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                      <img
                        src={ch.img}
                        alt={ch.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(to top, rgba(43,26,42,0.15), transparent 50%)'
                        }}
                      />
                    </div>

                    <div
                      className="absolute -top-4 -right-4 w-14 h-14 rounded-full flex items-center justify-center font-display font-semibold text-dark text-sm shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, #C9A05A, #E8C880)'
                      }}
                    >
                      {ch.num}
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className={ch.flip ? 'md:order-1' : ''}>
                    <span className="text-4xl">{ch.icon}</span>

                    <span className="ml-3 font-body text-[0.75rem] tracking-[0.3em] uppercase text-gold">
                      {ch.tag}
                    </span>

                    <h3
                      className="font-display font-semibold text-rose-d mt-4 mb-4 leading-snug"
                      style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}
                    >
                      {ch.title}
                    </h3>

                    <p className="font-display italic text-ink-l leading-[2] text-[1.15rem]">
                      {ch.body}
                    </p>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

function BigFloral() {
  return (
    <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
      {[0,45,90,135,180,225,270,315].map((deg,i) => (
        <ellipse
          key={i}
          cx={200 + Math.cos(deg * Math.PI / 180) * 80}
          cy={200 + Math.sin(deg * Math.PI / 180) * 80}
          rx="40"
          ry="18"
          fill="#F2C4CE"
          transform={`rotate(${deg} ${200 + Math.cos(deg * Math.PI / 180) * 80} ${200 + Math.sin(deg * Math.PI / 180) * 80})`}
        />
      ))}
      <circle cx="200" cy="200" r="24" fill="#C9A05A" />
    </svg>
  )
}