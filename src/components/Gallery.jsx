const imgs = [
  { src: '/img2.JPG', alt: 'Timothy and Hope — memory 2', pos: 'center 15%' },
  { src: '/img4.JPG', alt: 'Timothy and Hope — memory 4', pos: 'center 20%' },
  { src: '/img5.JPG', alt: 'Timothy and Hope — memory 5', pos: 'center top' },
  { src: '/img6.jpeg', alt: 'Timothy and Hope — memory 6', pos: 'center 20%' },
  { src: '/img7.jpeg', alt: 'Timothy and Hope — memory 7', pos: 'center top' },
  { src: '/img8.JPG', alt: 'Timothy and Hope — memory 8', pos: 'center 15%' },
  { src: '/img9.JPG', alt: 'Timothy and Hope — memory 9', pos: 'center top' },

  ...Array.from({ length: 4 }, (_, i) => ({
    src: `/img${i + 10}.JPG`,
    alt: `Timothy and Hope — memory ${i + 10}`,
    pos: 'center 20%',
  })),
  { src: '/img14.JPG', alt: 'Timothy and Hope — memory 14', pos: 'center top' },
  ...Array.from({ length: 9 }, (_, i) => ({
    src: `/img${i + 15}.JPG`,
    alt: `Timothy and Hope — memory ${i + 15}`,
    pos: 'center 20%',
  })),

  { src: '/img24.jpeg', alt: 'Timothy and Hope — memory 24', pos: 'center center' },
  { src: '/img25.jpeg', alt: 'Timothy and Hope — memory 25', pos: 'center top' },
  { src: '/img26.jpeg', alt: 'Timothy and Hope — memory 26', pos: 'center top' },
  { src: '/img27.jpeg', alt: 'Timothy and Hope — memory 27', pos: 'center 20%' },
  { src: '/img31.jpeg', alt: 'Timothy and Hope — memory 31', pos: 'center top' },
  { src: '/img32.jpeg', alt: 'Timothy and Hope — memory 32', pos: 'center top' },
  { src: '/img33.jpeg', alt: 'Timothy and Hope — memory 33', pos: 'center 15%' },
  { src: '/img34.jpeg', alt: 'Timothy and Hope — memory 34', pos: 'center top' },
  { src: '/img35.jpeg', alt: 'Timothy and Hope — memory 35', pos: 'center center' },
  { src: '/img36.jpeg', alt: 'Timothy and Hope — memory 36', pos: 'center top' },
  { src: '/img37.jpeg', alt: 'Timothy and Hope — memory 37', pos: 'center top' },
  { src: '/img38.jpeg', alt: 'Timothy and Hope — memory 38', pos: 'center center' },
  { src: '/img39.JPG', alt: 'Timothy and Hope — memory 39', pos: 'center top' },
  { src: '/img40.JPG', alt: 'Timothy and Hope — memory 40', pos: 'center 10%' },
  { src: '/img41.JPG', alt: 'Timothy and Hope — memory 41', pos: 'center top' },
  { src: '/img42.jpg', alt: 'Timothy and Hope — memory 42', pos: 'center 20%' },
  { src: '/img43.jpg', alt: 'Timothy and Hope — memory 43', pos: 'center center' },
]

export default function MemoriesGallery() {
  return (
    <section className="w-full py-20 bg-[#f7f1ec] overflow-hidden relative">

      {/* Background glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#F2C4CE]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#E8C880]/20 rounded-full blur-3xl" />

      {/* HEADING */}
      <div className="text-center mb-14 px-6 relative z-10">

        <p className="font-body text-[0.75rem] tracking-[0.35em] uppercase text-gold/80">
          Moments we will always carry
        </p>

        <h2
          className="font-script text-rose-d mt-3 mb-4"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
        >
          Our Memories in Frames
        </h2>

        <p className="font-display italic text-ink-l max-w-2xl mx-auto leading-relaxed text-[1.05rem]">
          A collection of quiet smiles, shared laughter, and beautiful days
          that slowly became our forever story.
        </p>
      </div>

      {/* TOP ROW */}
      <div className="overflow-hidden w-full relative z-10">
        <div className="flex w-max animate-row-left gap-5">

          {[...imgs, ...imgs].map((img, i) => (
            <div
              key={i}
              className="
                w-52 h-44
                md:w-64 md:h-52
                flex-shrink-0
                rounded-[1.4rem]
                overflow-hidden
                bg-white
                shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                border border-white/60
                transition-all duration-500
                hover:-translate-y-2
              "
            >
              <img
                src={img.src}
                alt={img.alt}
                className="
                  w-full h-full
                  object-cover
                  transition-transform duration-700
                  hover:scale-105
                "
                style={{
                  objectPosition: img.pos,
                }}
              />
            </div>
          ))}

        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="overflow-hidden w-full mt-6 relative z-10">
        <div className="flex w-max animate-row-right gap-5">

          {[...imgs, ...imgs].map((img, i) => (
            <div
              key={i}
              className="
                w-52 h-44
                md:w-64 md:h-52
                flex-shrink-0
                rounded-[1.4rem]
                overflow-hidden
                bg-white
                shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                border border-white/60
                transition-all duration-500
                hover:-translate-y-2
              "
            >
              <img
                src={img.src}
                alt={img.alt}
                className="
                  w-full h-full
                  object-cover
                  transition-transform duration-700
                  hover:scale-105
                "
                style={{
                  objectPosition: img.pos,
                }}
              />
            </div>
          ))}

        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes row-left {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes row-right {
          0% {
            transform: translateX(-50%);
          }

          100% {
            transform: translateX(0);
          }
        }

        .animate-row-left {
          animation: row-left 65s linear infinite;
        }

        .animate-row-right {
          animation: row-right 65s linear infinite;
        }

        .animate-row-left:hover,
        .animate-row-right:hover {
          animation-play-state: paused;
        }
      `}</style>

    </section>
  )
}