const imgs = [
  { src: '/img1.jpeg', alt: 'Timothy and Hope — memory 1' },
  { src: '/img2.JPG', alt: 'Timothy and Hope — memory 2' },
  { src: '/img3.jpeg', alt: 'Timothy and Hope — memory 3' },
  { src: '/img4.JPG', alt: 'Timothy and Hope — memory 4' },
  { src: '/img5.JPG', alt: 'Timothy and Hope — memory 5' },
  { src: '/img6.jpeg', alt: 'Timothy and Hope — memory 6' },
  { src: '/img7.jpeg', alt: 'Timothy and Hope — memory 7' },
  { src: '/img8.JPG', alt: 'Timothy and Hope — memory 8' },
  { src: '/img9.JPG', alt: 'Timothy and Hope — memory 9' },
  ...Array.from({ length: 15 }, (_, i) => ({
    src: `/img${i + 10}.JPG`,
    alt: `Timothy and Hope — memory ${i + 10}`,
  })),
  { src: '/img24.jpeg', alt: 'Timothy and Hope — memory 24' },
  { src: '/img25.jpeg', alt: 'Timothy and Hope — memory 25' },
  { src: '/img26.jpeg', alt: 'Timothy and Hope — memory 26' },
  { src: '/img27.jpeg', alt: 'Timothy and Hope — memory 27' },
  { src: '/img28.jpg', alt: 'Timothy and Hope — memory 28' },
  { src: '/img29.jpeg', alt: 'Timothy and Hope — memory 29' },
  { src: '/img30.jpeg', alt: 'Timothy and Hope — memory 30' },
  { src: '/img31.jpeg', alt: 'Timothy and Hope — memory 31' },
  { src: '/img32.jpeg', alt: 'Timothy and Hope — memory 32' },
  { src: '/img33.jpeg', alt: 'Timothy and Hope — memory 33' },
  { src: '/img34.jpeg', alt: 'Timothy and Hope — memory 34' },
  { src: '/img35.jpeg', alt: 'Timothy and Hope — memory 35' },
  { src: '/img36.jpeg', alt: 'Timothy and Hope — memory 36' },
  { src: '/img37.jpeg', alt: 'Timothy and Hope — memory 37' },
  { src: '/img38.jpeg', alt: 'Timothy and Hope — memory 38' },
  { src: '/img39.JPG', alt: 'Timothy and Hope — memory 39' },
  { src: '/img40.JPG', alt: 'Timothy and Hope — memory 40' },
  { src: '/img41.JPG', alt: 'Timothy and Hope — memory 41' },
];

export default function MemoriesGallery() {
  return (
    <section className="w-full py-20 bg-[#f7f1ec] overflow-hidden">

      {/* HEADING */}
      <div className="text-center mb-12 px-6">
        <p className="font-body text-[0.75rem] tracking-[0.35em] uppercase text-gold/80">
          Moments we will always carry
        </p>

        <h2
          className="font-script text-rose-d mt-3 mb-3"
          style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
        >
          Our Memories in Frames
        </h2>

        <p className="font-display italic text-ink-l max-w-xl mx-auto leading-relaxed text-[1.05rem]">
          A collection of quiet smiles, shared laughter, and beautiful days that built our story.
        </p>
      </div>

      {/* TOP ROW */}
      <div className="overflow-hidden w-full">
        <div className="flex w-max animate-row-left gap-4">
          {[...imgs, ...imgs].map((img, i) => (
            <div
              key={i}
              className="w-52 h-40 flex-shrink-0 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="overflow-hidden w-full mt-6">
        <div className="flex w-max animate-row-right gap-4">
          {[...imgs, ...imgs].map((img, i) => (
            <div
              key={i}
              className="w-52 h-40 flex-shrink-0 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes row-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes row-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-row-left {
          animation: row-left 60s linear infinite;
        }

        .animate-row-right {
          animation: row-right 60s linear infinite;
        }
      `}</style>

    </section>
  );
}